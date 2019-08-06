# بسم الله الرحمن الرحيم

User Management and administration includes

- Allocating and managing `/home` directories
- Putting in place good password policies
- Applying effective security policies
  - Disk Quotas
  - File and Directory Access Permissions

## User Accounts

Three types of users in Linux:

- Super User
- Day-to-Day User
- System User

Notes

- All users who access the system must have accounts on the system
- Ubuntu uses the `/etc/passwd` file to store information on the user accounts that are present on the system
- All users regardless of their type, have a one-line entry in this file that contains
  - username
  - encrypted field for the password (X to indicate password is present)
  - user ID (UID)
  - group ID (GID)
  - location of `/home` usually `/home/username`
  - default shell of the user `/bin/bash`
  - GECOS - uses comma-delimted list to record information about the account or the user
    - fullname
    - contact information
- Passwords are not actually stored in `/etc/passwd` 
- All passwords are stored in `/etc/shadow`

`$ sudo less /etc/passwd`

`$ sudo less /etc/shadow`

### Super User / Root User

- Only one `root` user
- Has total and complete control over all apsects of the system
- Can access any part of the file system
  - read, change, delete any file
  - grant and revoke access to files and directories
- Can carry out any operation on the system
  - include: destroy the system
- UID: 0
- GID: 0
- Avoid working as `root` all the time
- In Ubuntu, we execute commands with `root` or super user privilages using `sudo` command
- Ubuntu allows the first user on the system access to full `root` privileges using the `sudo` command 
- Ubuntu disables the `root` account so that no one can actually log in with the username `root`
 

### Regular User

- Someone who logs on to the system to use it for nonadministrative tasks such as 
  - word processing
  - email
- These users do not need to make system-wide changes or manage other users
- However, they might want to be able to change settings specific to their accounts (for instance, a desktop background)
- Depending on how much control the system administrator (the root or super user) likes to wield, regular users might not even be able to do that

### Super User - Privilages -> Regular User

- Super user grants privileges to regular users using file and directory permissions
- If the super user does not want regular user to change his settings in `~/.profile` (the `~` is a shell shortcut representing user `/home` directory), then as `root` can alter the permissions so that regular user may read from, but not write to, that file.

### System User

- The system user is not a person
- An administrative account that the system uses during day-to-day running of various services
- System user named `www-data` owns the Apache web server and all the associated files
- Only that user and root can have access to these files; no one else can access or make changes to these files
- System users do not have a home directory or password, nor do they permit access to the system through a login prompt

### User IDs and Group IDs

- Ubuntu identifies users and groups by numbers known as the user ID (UID) and group ID (GID
- Alphabetic names are just for ease of use
- `root` user is UID 0
- Numbers from 1 through 499 and number 65,534 are the system, sometimes called logical users or pseudo-users
- Regular users have UIDs beginning with 1,000; Ubuntu assigns them sequentially
- With only a few exceptions, the GID is the same as the UID.
- Ubuntu creates a private GID for every UID of 1,000 and greater
- System administrator can add other users to a GID or create a totally new group and add users to it
- Unlike in Windows NT and some UNIX variants, a group in Ubuntu (or any other Linux distribution) cannot be a member of another group

### File Permissions

- There are three types of permissions: read, write, and execute ( r , w , x )
- For any file or directory, permissions are assigned to three categories: user, group, and other 
- This section focuses on group permissions
- Commands used to change the group, user, or access permissions of a file or directory:
  - `chgrp` — Changes the group ownership of a file or directory
  - `chown` — Changes the owner of a file or directory
  - `chmod` — Changes the access permissions of a file or directory
- Example of real life scenario:
  - Human Resources department can share health-benefit memos to all company employees by making the files readable (but not writable) by anyone in an accessible directory
  - Programmers in the company’s research and development section, although able to access each other’s source code files, would not have read or write access to HR pay scale or personnel files—and certainly would not want HR or marketing poking around R&D

## Managing Groups

Groups can make managing users a lot easier

### Group Listing

- Different UNIX operating systems implement the group concept in various ways
- Ubuntu uses a scheme called UPG (user private group) in which the default is that each user is assigned to a group with his or her own name
- The user’s username and group name are identical
- All the groups on a system are listed in `/etc/group` file

`$ cat /etc/group`

- Groups for services (mail, news, and so on)
- Groups for devices (floppy, disk, and so on)
- System services groups allow those services to have ownership and control of their files
- Example: adding `Postfix` to the `mail` group enables the `Postfix` application to access mail’s files such that `mail` can decide about group access to its file
- Example: Adding a regular user to a device’s group permits the regular user to use the device with permissions granted by the group owner
- Adding user `helghareeb` to the group `cdrom` allows `helghareeb` to use the optical
drive device

#### Finding my own Groups

`$ groups`

`$ groups <username>` list the groups for that user

#### Group Management Tools

Most commonly used group management command-line tools:

- `groupadd` — This command creates and adds a new group
- `groupdel` — This command removes an existing group
- `groupmod` — This command creates a group name or GIDs but doesn’t add or delete members from a group
- `gpasswd` — This command creates a group password. Every group can have a group password and an administrator. Use the `-A` argument to assign a user as group administrator
- `useradd -G` — The `-G` argument adds a user to a group during the initial user creation. (More arguments are used to create a user.)
- `usermod -G` — This command allows you to add a user to a group as long as the user
is not logged in at the time
`grpck` — This command checks the /etc/group file for typos

Let’s say there is a DVD-RW device `/dev/scd0` that the system administrator wants a regular user named `helghareeb` to have permission to access. This is the process for granting `helghareeb` that access

1. Add a new group with the groupadd command
`$ sudo groupadd dvdrw`

2. Change the group ownership of the device to the new group with the chgrp command

`$ sudo chgrp dvdrw /dev/scd0`

3. Add the approved user to the group with the usermod command

`$ sudo usermod -G dvdrw helghareeb`

4. Make user `helghareeb` the group administrator with the `gpasswd` command so that he can add new users to the group

`$ sudo gpasswd -A helghareeb`

Now `helghareeb` has permission to use the DVD-RW drive, as would anyone else added to the
group by either the super user or `helghareeb` because he is now also a group administrator and can add users to the group

## Managing Users

In order to use the system resources securely and efficiently, A user must be

- created
- assigned a UID
- provided a `/home` directory
- provided an initial set of files for his `/home` directory
- assigned to groups

- System administrator might want or need to restrict not only a user’s access to specific files and folders but also the amount of disk space an account may use

### User Management Tools

Common commands to manage users

- `useradd` — This command adds a new user account to the system. Its options permit the system administrator to specify the user’s `/home` directory and initial group or to create the user with the default `/home` directory and group assignments (based on the new account’s username). Used without any arguments, the useradd command displays the defaults for the system. The default files for a user are in `/etc/skel`
- `useradd -D` — This command sets the system defaults for creating the user’s `/home`
directory, account expiration date, default group, and command shell
- `deluser` — This command removes a user’s account (thereby eliminating that user’s
home directory and all files it contains). There is an older version of this command,
`userdel`. `deluser` is preferred because it provides finer control over what is deleted. Whereas `userdel` automatically removes both the user account and also all the user’s files, such as the associated `/home` directory, `deluser` deletes only the user account, unless you use a command-line option to tell it to do more. `deluser` includes options such as `--remove-home` , `--remove-all-files` , `--backup` , and more
- `passwd` — This command updates the authentication tokens used by the password management system
- `usermod` — This command changes several user attributes. The most commonly used arguments are -s to change the shell and -u to change the UID. No changes can be made while the user is logged in or running a process
- `chsh` — This command changes the user’s default shell. For Ubuntu, the default shell
is /bin/bash , known as the Bash, or Bourne Again Shell.

#### Note

The set of files initially used to populate a new user’s home directory is kept in `/etc/skel` This is convenient for the system administrator because any special files, links,
or directories that need to be universally applied can be placed in `/etc/skel` and will be
duplicated automatically with appropriate permissions for each new user.

`$ ls -la /etc/skel`

Each line provides the file permissions, the number of files housed under that file or directory name, the file owner, the file group, the file size, the creation date, and the filename.

As you can see, root owns every file here. The `useradd` command copies everything in `/etc/skel` to the new home directory and resets file ownership and permissions to the
new user

Certain user files might exist that the system administrator doesn’t want the user to change; the permissions for those files in `/home/username` can be reset so that the user can read them but can’t write to them

#### Tip

To lock a user out of his or her account, use the following command

`$ sudo passwd -l username`

This prepends an ! (exclamation point, also called a bang) to the user’s encrypted password; the command to reverse the process uses the -u option.

### Adding New Users

`$ sudo useradd ahmed -p c00kieZ4ME -u 1042`

- This example uses the -p option to set the password the user requested and the -u option to specify her UID
- If we create a user with the default settings, we do not need to use these options
- The command `adduser` is a symbolic link to `useradd` 
- `useradd` is native binary compiled with the system
- `adduser` is a perl script which uses `useradd` binary in back-end
- `adduser` is more user friendly and interactive than its back-end `useradd`
- There's no difference in features provided
  - `useradd` command wont create `/home/username` directory but `adduser` command will 
  - `useradd` with the -m option will create the home directory
  - Always use `adduser` (and `deluser` when deleting users)

#### Monitoring User Activity on the System

- `w`
  - The `w` command tells the system administrator who is logged in, where he is logged in, and what he is doing
  - No one can hide from the super user
  - The `w` command can be followed by a specific user’s name to show only that user

- `ac`
  - The `ac` command provides information about the total connect time of a user, measured
in hours 
  - `$ sudo apt install acct`
  - It accesses the `/var/log/wtmp` file for the source of its information

- `last`
  - searches through `/var/log/wtmp` file and lists all the users logged in and out since that file was first created
  - The user reboot exists so that you might know who has logged in since the last reboot
  - A companion to last is the command `lastb` , which shows all failed, or bad, logins
  - It is useful for determining whether a legitimate user is having trouble or a hacker is attempting access

## Managing Passwords

## Granting System Administrator Privileges to Regular Users

## Disk Quotas

## Related Ubuntu Commands