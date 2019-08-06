# بسم الله الرحمن الرحيم

## Processes

- A process refers to a program in execution
- It’s a running instance of a program
- It is made up of
  - the program instruction
  - data read from files
  - other programs or input from a system user

## Types of Processes

There are fundamentally two types of processes in Linux:

- Foreground
- Background

### Foreground processes

- also referred to as interactive processes
- These are initialized and controlled through a terminal session
- In other words, there has to be a user connected to the system to start such processes; they haven’t started automatically as part of the system functions/services

### Background processes

- also referred to as non-interactive/automatic processes
- are processes not connected to a terminal; they don’t expect any user input

### What is Daemons

These are special types of background processes that start at system startup and keep running forever as a service; they don’t die. They are started as system tasks (run as services), spontaneously. However, they can be controlled by a user via the init process.

` # pidof systemd`

`# pidof top`

`# pidof httpd`

To find the process ID and parent process ID of the current shell, run:

`$ echo $$`

`$ echo $PPID`

### Linux Background Jobs

`# cloudcmd &`

`# jobs`

You can also send a process to the background by suspending it using [Ctrl + Z], this will send the SIGSTOP signal to the process, thus stopping its operations; it becomes idle:

`# tar -cf backup.tar /backups/*  #press Ctrl+Z`
`# jobs`

To continue running the above-suspended command in the background, use the bg command:

`# bg`

To send a background process to the foreground, use the fg command together with the job ID like so:

`# jobs`

`# fg %1`

## How to View Active Processes in Linux

There are several Linux tools for viewing/listing running processes on the system, the two traditional and well known are ps and top commands:

### `ps` Command

It displays information about a selection of the active processes on the system as shown below:

`# ps`

`# ps -e | head `

### System Monitoring Tool `top` Command

`# top`

### `kill`

## More Details

<https://www.tecmint.com/linux-process-management/>




