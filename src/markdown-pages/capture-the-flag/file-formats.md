---
slug: '/capture-the-flag/file-formats'
date: '2022-12-16'
title: 'File Formats'
---

# File Formats

## Author : Frankie Huang (IF 2021)

## Prerequisite

- UNIX like operating system
- `hexdump` or `file`
- `hexedit` or `hexeditor`

## What is a file signatures?

File Extensions (.exe, .jpg, .mp3, etc.) are not the sole way to identify the type of a file. Files have a certain leading bytes called _file signatures_ (also known as File Magic Numbers), which allow programs to parse the data in a consistent manner. File signatures are generally 2-4 bytes long, found at the beginning of a file.

## What is it used for?

Files can sometimes come without an extension, or with incorrect ones. We use file signature analysis to identify the format (file type) of the file. Programs need to know the file type in order to open it properly.

## How do you find the file signature?

You need to be able to look at the binary data of the file. We can do this using tools such as `hexdump` to view the hex value of a file or `hexedit` and `hexeditor` to edit the hex value of a file. Once we open the file, we can check the file signature with a file signature repositories, such as [Gary Kessler's](www.garykessler.net/library/file_sigs.html) or [Wikipedia](https://en.wikipedia.org/wiki/List_of_file_signatures).

## Example

Let's look at the image below (located at img/example.jpg).

![Example image](../../images/example.jpg)

Huh, why wouldn't the image load? Let's open this file with `hexdump`.

```sh
> hexdump example.jpg | grep 000000
0000000 4449 0433 0000 0000 2300 5354 4553 0000
```

We can see that the file signature starts with `49 44 33 04` (remember little endian). Cross checking the file signature to [Gary Kessler's](www.garykessler.net/library/file_sigs.html), we can see that the original file extension is mp3, with the file signature `49 44 33`. Finally, we can change the file extension to `.mp3` to open the file!

Another (and easier way) to know the original file extension is by using the `file` command.

```sh
> file example.jpg
example.jpg: Audio file with ID3 version 2.4.0, contains: MPEG ADTS, layer III, v1, 192 kbps, 48 kHz, Stereo
```
