#!/usr/bin/env bash
base=~/workspace/schnell/recipes/
prefix=~/dev-dt/

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
            echo "Unknown parameter"
            exit 0
            break
            ;;
    esac
done

echo -n 'Recipe options:'
printf "\n$(ls $base)\n\n"
echo -n 'Use recipe:'
read recipe

if [ ! -d $base$recipe ]; then
    echo "Error: cannot find recipe '$recipe'."
    exit 0
fi

if [ -z $recipe ]; then
    recipe="default"
fi

echo "Creating new project '$project'"

projectdir=$prefix$project
recipedir=$base/$recipe

mkdir $projectdir
bash $base/$recipe/install.sh $projectdir $recipedir $project

cd $projectdir
bash run.sh
