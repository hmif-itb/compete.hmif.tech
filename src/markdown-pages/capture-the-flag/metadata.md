---
slug: '/capture-the-flag/metadata'
date: '2022-12-16'
title: 'Metadata'
---

# Metadata

## Author : Frankie Huang (IF 2021)

## Prerequisite

- UNIX like operating system
- `exiftool`

## What's meta about metadata?

Metadata are data about data. Different types of files have different metadata. The metadata on a photo could include dates, camera information, GPS location, comments, etc. For music files, it could include the author, track number, album name, etc.

## What kind of file metadata is useful?

Potentially, any file metadata we can find could be useful. Take for example the [burger king foot lettuce meme](https://www.youtube.com/watch?v=9PWjqgM_CU8). An employee from burger king posted a photo of him standing on top of a stack of lettuce and posted it into 4chan. However, he forgot to remove the image metadata, and with the power of ~~weaponized autism~~ metadata, the employee are doxxed and fired within minutes of him posting.

## How to access a file metadata?

A popular tool used to view a file metadata is `exiftool`. To use it, run the command line: `exiftool [filename]`. For example, let's view the metadata on the image below:
