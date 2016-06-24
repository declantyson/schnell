default=~/workspace/schnell/default
prefix=~/dev/
echo -n 'Enter project name:'
read project
projectdir=$prefix$project

mkdir $projectdir

mkdir $projectdir/app
mkdir $projectdir/app/_css
mkdir $projectdir/app/_scripts
mkdir $projectdir/app/_libs
mkdir $projectdir/app/_data
mkdir $projectdir/app/_tests
mkdir $projectdir/app/_images

cp $default/rungrunt.sh $projectdir/rungrunt.sh
cp $default/Gruntfilev2.js $projectdir/Gruntfile.js
cp $default/index.html $projectdir/app/index.html
cp $default/server.js $projectdir/app/server.js
cp $default/test-spec.js $projectdir/app/_tests/test-spec.js
cp $default/script.js $projectdir/app/_scripts/script.js
> $projectdir/app/_css/styles.scss

cd $projectdir
npm init --yes
npm install grunt --save-dev
npm install grunt-contrib-sass --save-dev
npm install grunt-contrib-uglify --save-dev
npm install grunt-contrib-cssmin --save-dev
npm install grunt-contrib-watch --save-dev
npm install grunt-contrib-connect --save-dev
npm install grunt-contrib-jasmine --save-dev
npm install grunt-contrib-jshint --save-dev
npm install grunt-notify --save-dev
npm install phantomjs --save-dev
npm install connect serve-static


# sudo npm install -g ttab
bash rungrunt.sh
cd app