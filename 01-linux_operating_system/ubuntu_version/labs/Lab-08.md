# بسم الله الرحمن الرحيم

[TOC]

## Lab Requirements

`p1` file present in the same directory of this file

## Lab Steps

- Go to Desktop
- Make a New Folder
- CD into the Folder
- Copy the Python File there
- Make another Copy of the Python File
- Rename the new file as p2
- In the p2 file
  - Find the word `p1_out`
  - Make it `p2_out`
- Make both p1 and p2 executable
- Now, in the terminal
  - run `p1` as a foreground process `./p1`
  - **Question 1** Can you use the terminal?
  - Press CTRL + C
  - run `./p1 &`
  - **Question 2** What is the meaning of the output given?
  - Now, run `./p2 &`
  - To display the list of background processes, run the command `jobs`
- To kill the background processes
  - bring the process to the foreground using the command `fg %` followed by the number of the process in the jobs list
  - Press `CTRL + C` to terminate the process
- Terminate all the running jobs using the same procedure
