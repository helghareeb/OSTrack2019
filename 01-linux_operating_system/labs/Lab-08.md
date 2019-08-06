# بسم الله الرحمن الرحيم

## Link Types

- **Hard Link** low-level links which the system uses to create elements of the file system itself, such as files and directories.
- **Symbolic Link** is a file in its own right, but it does not contain a copy of the target file's data. It is similar to a shortcut in Microsoft Windows.

Most users do not want to create or modify hard links themselves, but symbolic links are a useful tool for any Linux user. A symbolic link is a special file that points to another file or directory, which is called the target. Once created, a symbolic link can be treated as if it is the target file, even if it is has a different name and is located in another directory. Multiple symbolic links can even be created to the same target file, allowing the target to be accessed by multiple names.

## Symbolic Links

`$ ln -s target linkname`

`$ ln -s myfile mylink`

`$ ls -l`

"total 4" refers to how many blocks on the disk are used by the files listed, not the total number of files

`$ rm myfile`

`$ ls -l`

`$ cat mylink`

Tip: Try editing the file and the link using any text editor

## Hard Links

`$ ln target linkname`

`$ ln -s myfile mylink`

`$ ls -l`

`$ rm myfile`

`$ ls -l`

`$ cat mylink`

Tip: Try editing the file and the link using any text editor