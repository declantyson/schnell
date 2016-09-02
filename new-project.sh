#!/usr/bin/env bash
default=~/workspace/schnell/default
prefix=~/workspace/

if [ $# -lt 1 ]; then
    echo -n 'Enter project name:'
    read project
fi
while test $# -gt 0; do
    case "$1" in
        -h|--help)
            echo "options:"
            echo "-h, --help      show brief help"
            echo "-n, --name      name project"
            exit 0
            ;;
        -n|--name)
            shift
            if test $# -gt 0; then
                export project=$1
            else
                echo "no name specified"
                exit 1
            fi
            shift
            ;;
        *)
            break
            ;;
    esac
done

echo "Creating new project '$project'"

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
cp $default/Gruntfile.js $projectdir/Gruntfile.js
cp $default/index.ejs $projectdir/app/index.ejs
cp $default/server.js $projectdir/app/server.js
cp $default/test-spec.js $projectdir/app/_tests/test-spec.js
cp $default/script.js $projectdir/app/_scripts/script.js
cp $default/styles.scss $projectdir/app/_css/styles.scss

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

npm install body-parser --save-dev
npm install ejs --save-dev
npm install express --save-dev
npm install fs --save-dev

# sudo npm install -g ttab
bash rungrunt.sh
cd app