echo "Which colour do you want the commands to be, red, blue or yellow?"
echo "Type 1 for red, 2 for blue and 3 for purple."

read colour_var

if [ $colour_var = '1' ]; then
	red= echo -en "\e[31m"

elif [ $colour_var = '2' ]; then
        blue= echo -en "\e[34m"

elif [ $colour_var = '3' ]; then
        purple= echo -en "\e[35m"

else 
	echo "Incorrect Inputs!"
fi

echo "Which feature do you want to run?"
echo "5.5 (File Type Count) or 5.6 (Delete all Tmp Files) in this directory (Project01)."
echo "Type 1 for 5.5, type 2 for 5.6."

read user_input
if [ $user_input = '1' ]; then

	if [ -e *.html ]; then
		count1=$(ls -l *.html | wc -l)
	else
		count1='0'
	fi
	if [ -e *.js ]; then
        	count2=$(ls -l *.js | wc -l)
	else
        	count2='0'
	fi
	if [ -e *.css ]; then
        	count3=$(ls -l *.css | wc -l)
	else
        	count3='0'
	fi
	if [ -e *.py ]; then
        	count4=$(ls -l *.py | wc -l)
	else
        	count4='0'
	fi

	if [ -e *.hs ]; then
        	count5=$(ls -l *.hs | wc -l)
	else
       		count5='0'
	fi

	count6=$(ls -l *.sh | wc -l)

	echo -e "You have $count1 HTML files"
	echo -e "You have $count2 Javascript files"
	echo -e "You have $count3 CSS files"
	echo -e "You have $count4 Python files"
	echo -e "You have $count5 Haskell files"
	echo -e "You have $count6 Bash Script files"

elif [ $user_input = '2' ]; then

	var=$(git ls-files . --exclude-standard --others)

	for file in $var; do
		if [[ ${file: -4} == ".tmp" ]]; then
			rm $file
		fi
	done
else
	echo "Incorrect Inputs!"
fi
