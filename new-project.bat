@echo off
set prefix="D:\Documents\"
set /p project="Enter project name: "
if exist "%prefix%%project%\" (
	echo %project% already exists.
	pause
	exit
)
set projectdir="%prefix%%project%\"

mkdir "%projectdir%"
:: cd "%prefix%%project%" 
mkdir "%projectdir%app\"
mkdir "%projectdir%app\_css\"
mkdir "%projectdir%app\_scripts\"
mkdir "%projectdir%app\_libs\"
mkdir "%projectdir%app\_fonts\"
mkdir "%projectdir%app\_data\"
mkdir "%projectdir%app\_tests\"
mkdir "%projectdir%app\_images\"

copy "default\sftp-config.json" "%projectdir%sftp-config.json"
copy "default\Gruntfile.js" "%projectdir%Gruntfile.js"
copy "default\index.html" "%projectdir%app\index.html"
copy "default\server.js" "%projectdir%app\server.js"
copy "default\test-page.html" "%projectdir%app\_tests\index.html"
copy "default\script.js" "%projectdir%app\_scripts\script.js"
copy "default\styles.less" "%projectdir%app\_css\styles.less"

cd "%projectdir%" 
call npm init --yes
call npm install grunt --save-dev
call npm install grunt-contrib-less --save-dev
call npm install grunt-contrib-uglify --save-dev
call npm install grunt-contrib-cssmin --save-dev
call npm install grunt-contrib-watch --save-dev
call npm install grunt-contrib-qunit --save-dev
call npm install grunt-contrib-connect --save-dev
call npm install grunt-notify --save-dev
call npm install phantomjs --save-dev
call npm install connect serve-static

:: disable the following for speed

call bower install jquery
call bower install qunit
call bower install react
call bower install babel
call bower install requirejs

echo start cmd /k node server.js > "runserver.bat"
echo grunt > "rungrunt.bat"
cd "app"
call git init
call git add .
call git commit -m "Initial commit"
echo %project% successfully created.
pause
%SystemRoot%\explorer.exe "%prefix%%project%\"
start cmd /k node server.js
start cmd /k grunt
start cmd /k cd "%projectdir%"