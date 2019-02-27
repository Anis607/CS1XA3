For this project, I did, 5.1,5.5 and 5.6. I counted all html, js,css,py,hs,sh
files. I also compared the last 4 characters of a file to .tmp
and if the file is a tmp file, it  will delete it.

Firstly, I asked the user to input a colour using read. Next I allowed the user
to input 1, 2 , 3 corresponding to the colour options given (red,blue,purple).
If the user does not enter one of these characters, the program will terminate 
and only displaying "Incorrect Inputs!". Next, I prompt the user to choose what 
he wants the bash script to execute (5.5,5.6) with options 1 and 2.

For 5.5, I will count all files in the directory.
I did this by searching the directory for files that end with that certain 
extension used wc -l to count it. I displayed it using echo 

For 5.6, I will remove all tmp files in the directory.
I do this by getting a list of all files and see if the last 4 characters are 
".tmp". Then I simply remove the file. I used a for loop to do so (remove all)
in a loop. 

