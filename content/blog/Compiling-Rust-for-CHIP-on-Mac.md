---
title: "Cross Compiling Rust for CHIP on macOS"
date: 2017-09-04
categories: [Rust, CHIP, macOS]
---

So you've got a CHIP microcomputer, and you want to write some stuff in Rust for it.
You can use Rust on the Chip itself because it can be used like a normal Linux computer, but it's also possible to cross compile then run the binary on the Chip.

Here is a simple guide to doing that cross compilation from macOS.
I suggest looking up more information on something if you aren't sure what it's doing.

The Chip runs Linux on an ARM processor.
We're going to first need a way to compile things for that platform.
To do this we can leverage musl-cross-make as a way to do this.

The easiest way to install musl is using the [homebrew-musl-cross](https://github.com/FiloSottile/homebrew-musl-cross) formula (install Homebrew if you don't already have it).
There are a few options you can run the install with, so check out that link if you want to see them.

We need to install it using the `--with-arm` flag, and for our need now we don't really care about the x86_64 stuff, so we can also use `--without-x86_64`.
Overall the command we need to run is `brew install FiloSottile/musl-cross/musl-cross --with-arm --without-x86_64`.

This will probably take a while to build (it took me ~40 minutes).

When it's done, we have a bunch of commands prefixed with `arm-linux-muslabi-`.
For example `arm-linux-muslabi-gcc` now exists, and is basically gcc for arm-linux-muslabi machines (using the `--static` flag builds static binaries that can run on just arm-linux machines).

Now that we have a compiler, we can move onto Rust stuff.

Run `cargo new hello_world --bin` if you don't already have a Rust project you want to build.

Using rustup we can add a target for ARM Linux architectures.
Here's the command to do so:
`rustup target add arm-unknown-linux-musleabi`.

In your project edit `.cargo/config` (creating the directory or file if they don't exist), adding the following

```
[target.arm-unknown-linux-musleabi]
linker = "arm-linux-musleabi-gcc"
```

This will make Cargo use our new gcc as a linker when we build for the target we specified (subbing for different targets/linkers allows you to build for things other than the Chip/ARM).

Now you can run `cargo build --target=arm-unknown-linux-musleabi --release` and hopefully successfully have built for ARM Linux.

By running `file target/arm-unknown-linux-musleabi/release/hello_world` I get the following output
```
target/arm-unknown-linux-musleabi/release/hello_world: ELF 32-bit LSB executable, ARM, EABI5 version 1 (SYSV), statically linked, not stripped
```

Now you can move the binary to the Chip however you like.

If you have your Chip connected to the same network, you can run `scp target/arm-unknown-linux-musleabi/debug/hello_world chip@chip.local:/home/chip/hello_world` to copy via terminal (default password is `chip`).

Tip:
If you can plug/power your Chip via USB-2, you can run `screen /dev/tty.usbmodem***** 115200` to connect to your Chip without having to plug it into a TV. Replace the asterisks with whatever numbers you get by running `ls /dev/tty.usbmodem*`.

