#!/bin/sh

pandoc -t html -o tosfr.html tosfr.md
pandoc -t html -o tosen.html tosen.md

sed -i '1s/^/<link rel="stylesheet" href="style.css">\n/' tosen.html
sed -i '1s/^/<link rel="stylesheet" href="style.css">\n/' tosfr.html