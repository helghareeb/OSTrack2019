# بسم الله الرحمن الرحيم

## Part 01

In this part, you will learn about the powers of the `root` user.

Answer the following Questions

- Can `root` user change a file that he does not have permissions over?
- What are some actions that can be performed by `root` on such a file?

Let's try
Using your Ubuntu, try the following commands. In a blank white paper, write the output of the commands. Do not forget to Open a new terminal

`$ cd Desktop`

`$ mkdir ITI`

`$ cd ITI`

`$ touch newfile`

`$ sudo chmod a-rwx newfile` 

Question 1: Write the command to list the `newfile` access permissions, and write them to your answer paper.

`$ vim newfile`

Question 2: Do you notice a mssage at the bottom of the screen? What do you understand from this message?

Now, try to add some text to the file, and save it. 

Question 3: What is the message you get at this point?

Question 4: What is the special character you had to use to save the contents you have added to the file?

Exit the file and back to the terminal

Now, try taking a look on the file contents (as a regular user - without `sudo`)

`$ cat newfile`

Question 5: What is the output of this step?

Now, try one more time with `sudo`

`$ sudo cat newfile`

Question 6: Is there any difference?

Now, try deleting the file (without `sudo`)

Question 7: What is the command to do the previous step?

Question 8: What is the result of the previous command?

Now, try deleting the file (with `sudo`)

Question 9: What is the command to do the previous step?

Question 10: What is the result of the previous command?

Now, switch the terminal loggedin user account to `root`

Question 11: What is the command to do so?

Question 12: Now, try editing the `newfile`. Note: if the file does not exist, recreate it and remove all access permissions as done before. Do you notice the same message as before?

Question 13: exit the file, and try displaying its contents in the terminal. Can you do so?

Question 14: try deleting the file. Can you do so?

Question 15: what does this indicate to you?
