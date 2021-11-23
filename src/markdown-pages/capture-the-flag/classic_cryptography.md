---
slug: '/capture-the-flag/classic-cryptography'
date: '2019-05-04'
title: 'Classic Cryptography'
---
# Classic Cryptography

## Author: Felicia Sutandijo (IF 2020)


## Introduction
New to CTF? Have no programming experience? Classic cryptography is a great place to start. Classic crypto deals with a variety of codes and ciphers, much like the ones we used to play with as children (or is it just me?) In classic crypto, we are given a piece of encrypted text and the goal is to decrypt it to get the flag. To understand more about classic crypto, here are some terms you need to know.

## Frequently Used Terms
* `Plaintext`: A message before it is encrypted and after it is decrypted a.k.a. a text in human language
* `Ciphertext`: The opposite of plaintext, ciphertext refers to a message after it is encrypted a.k.a. a text we are trying to crack
* `Crib`: A section of known plaintext, which can be used to break a code or cipher
* `Character Set (Charset)`: A collection of characters that a language or cipher especially uses

## Tools
* [Cyberchef](https://gchq.github.io/CyberChef)
* [dCode](https://www.dcode.fr/en)
* Python can be helpful

## Quick Tips
1. Titles are valuable. It might give you an insight on what to do
2. Character set used in a cipher tells a lot about a cipher, for example:<br />
A ciphertext with only two types of alphabets are most likely a morse code `(.--.-.-.-.)` or a binary code ($0101001$). Less often, it can be Bacon Cipher (abbab).
A ciphertext ending with one or two equals sign ($=$) is more likely to be base64.
A ciphertext that contains a charset of $26$ different types of alphabets (usually Latin alphabets) are more likely to be one of the substitution cipher (Caesar Cipher, Vigenere Cipher, etc.) or the transposition cipher (Anagram, Rail Fence Cipher, etc.)
A cipher with unusual charsets (e.g. only using punctuation marks) can usually be googled. Copy and paste the ciphertext.
3. Consider words like 'Flag' or the name of the competition as cribs.
4. Some ciphers require a key. Find the key first.
5. The 'magic' feature of Cyberchef is a life saviour.
## A More Advanced Tip
Although very rarely used in CTF, a powerful tool that can be used to crack ciphers is "frequency analysis". The idea behind this is the letter that most often occurs in a ciphertext is most likely the letter most often used in a particular language (in English it's 'e'). Furthermore, once a common letter is known, its position in a word helps identify its partners. For example, once 'e' is identified, any three-letter word ending with 'e' is most likely 'the'. <br />
In order of frequency, the English alphabet reads: e, t, a, o, n, r, i, s, h, l, d, c, u, f, p, m, w, y, b, g, v, k, x, q, j, z.

## Examples
### Substitution Cipher
```code
Someone gave me this, but I haven't the slightest idea as to what it says!
https://mega.nz/#!iCBz2IIL!B7292dJSx1PGXoWhd9oFLk2g0NFqGApBaItI_2Gsp9w Figure it out for me, will ya?
```
## Taken from CTFlearn

We are given a block of text that makes no sense. The title states that it is a substitution cipher. [dCode](https://www.dcode.fr/monoalphabetic-substitution) offers a tool to solve substitution ciphers.<br />
Trying the 'decrypt automatically' feature of the website generates a more readable text, but still not quite right. Therefore, let's try decoding manually. We immediately notice that 'FLAV' is supposed to be 'FLAG', 'GODERN' is supposed to be 'MODERN', etc. After changing a few letters and adding the flag format, we get our flag.

`CTFlearn{IFONLYMODERNCRYPTOWASLIKETHIS}`

### Caesar
```code
Decrypt this message.
picoCTF{dspttjohuifsvcjdpoabrkttds}
```
### Taken from Pico CTF

Caesar cipher is one of the transposition ciphers. It means that each letter is shifted by a specific number down the alphabet. This can be solved by using [CyberChef](https://gchq.github.io/CyberChef/). Using the 'ROT13' (stands for rotation 13, a tool that by default shifts a letter 13 times down the alphabet) tool, we can toggle the number of rotations used until we find one that makes sense. Changing the amount to 25 yields our flag.

```code
picoCTF{crossingtherubiconzaqjsscr}
```

### Vigenere Cipher
```code
The vignere cipher is a method of encrypting alphabetic text by using a series of interwoven Caesar ciphers based on the letters of a keyword.

I’m not sure what this means, but it was left lying around: blorpy

gwox{RgqssihYspOntqpxs}
```
### Taken from CTFlearn

The Vigenere Cipher is one of the ciphers that requires a key to decrypt. It uses the key to determine how we shift or substitute a letter by putting the key in front and the rest of the alphabets behind when making the substitution list. Therefore, our immediate focus shall be the key, which in this case is quite obvious: blorpy. Then, we can once again visit [CyberChef](https://gchq.github.io/CyberChef/) and search for the Vigenere tool. Enter the keyword, and voila, we've got our flag.

```code
flag{CiphersAreAwesome}
```

## Learn More
Looking for more challenge? You should definitely check out modern cryptography challenges such as the RSA or AES. These two requires a lot more thinking and math. Also, you'll need to code.
