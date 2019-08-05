# بسم الله الرحمن الرحيم

## Command-Line Beginner's Class

- Powerful tool
- Computer System Administration and Maintenance
- aka
  - terminal
  - shell
  - console
  - command prompot
  - command line interface (CLI)

This chapter covers

- **Routine tasks** — Logging in and out, changing passwords, listing and navigating file directories
- **Basic file management** — Creating files and folders, copying or moving them around the file system, renaming and deleting them
- **Basic system management** — Shutting down or rebooting, changing file permissions, and reading man pages, which are entries for commands included as files already on your computer in a standardized manual format

## Accessing the Command Line

- Desktop menu option Terminal
- `$ gnome-terminal`
- ctrl + alt + t

### Virtual Consoles

ctrl + alt + F1

This is tty1, one of six virtual consoles that Ubuntu provides. After you have accessed a virtual console, you can use Ctrl+Alt+ any of F1 through F6 to switch to a different console, tty1 through tty6. If you want to get back to the graphical interface, press Ctrl+Alt+F7. You can also switch between consoles by holding the Alt key and pressing either the left or the right cursor key to move down or up a console, such as tty1 to tty2.

### Logging Out

`exit`
`logout`

## User Account

- Two types of people access the system as users
  - Regular User Account: can change anything that is specific to their accounts, such as personal preferences, configuration for a program whn it is un by them using their account. They can't make system wide changes
  - Super User: can make system-wide changes. With super user privileges, we have access to the entire system and can carry out any task.

`$ sudo rm -rf /` # Never execute this command unless you know what you are doing

### Root user account

- In traditional and older Linux systems
- Specific user account: root
- Super user account
- `$ su`

In Ubuntu

- root account is disabled by default

`$ sudo passwd`

`$ sudo -i`

## Reading Documentation

### Using Man Pages

To learn more about a command or program, use the `man` command followed by the name of the command. Man pages are stored in places like `/usr/share/man` and `/usr/local/share/man`.

`$ man rm`

`$ info rm` # Detailed information

### Using `apropros`

To find commands related to some task

`$ apropos partition`

`$ apropos count`

### Using `whereis`

To find a command and its documentation

`$ whereis fdisk`

## Understanding Linux File System Hierarchy

- Well-planned hierarchy
- Not perfect, but logical
- Mostly consistent

| Directory | Description |
|-----------|-------------|
| / | The root directory |
| /bin | Essential Commands |
| /boot | Boot loader files, Linux kernel |
| /dev | Device files |
| /etc | System configuration files |
| /home | User home directories |
| /lib | Shared libraries, kernel modules |
| /lost+found | Recovered files (if found after system check) |
| /media | Mount point for removable media, such as DVDs and floppy disks |
| /mnt | Usual mount point for local, remote file systems, file systems that are additional to the standard, such as a DVD-ROM or another HDD |
| /opt | Add-on software packages |
| /proc | Kernel information, process control |
| /root | Super user (root) home |
| /sbin | System commands (mostly root only) |
| /srv | Information relating to services that run on the system |
| /sys | Real-time information on devices used by the kernel |
| /tmp | Temporary files |
| /usr | Software not essential for system operation, such as applications

