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

var=$(git ls-files . --exclude-standard --others)

for file in $var; do
	if [[ ${file: -4} == ".tmp" ]]; then
		rm $file
	fi
done
