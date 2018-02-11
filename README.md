Schnell!
==========

A quick batch file to set up a basic front-end project structure.

## Changelog

_11/02/18_

- Add webpack and electron to paradise recipe

_09/02/18_

- Add Paradise recipe

_26/01/18_

- Replace grunt with webpack in React recipe
- General clean up of React recipe
- Make React the default recipe, old default is now "classic"

_22/06/17_

- __WIP__ Remove jQuery entirely from React recipe
    - _TODO: Add promises polyfill_
    - _TODO: Update standalone deploy_

_02/06/17_

- Add mocha chai test template to React recipe
- Add standalone deploy script to React recipe

_05/04/17_

- Output recipe list in new-project.sh

_01/02/17_

- Added a JS library recipe

_13/01/17_

- Change the default recipe to be ES6 compatible
- Keep old recipe as "legacy"

_21/12/16_

- Added canvas game recipe

_08/12/16_

- Add a shell to generate APKs in React Native recipe
- Update default build.gradle in React Native recipe

_07/12/16_

- Add Android launch shell in React Native recipe
- Add a basic swipe-page app to the React Native recipe

_06/12/16_

- Add a React Native recipe

_10/11/16_

- Add column layout to default recipes
- Add 66% width column to react recipe

_04/11/16_

- React recipe changes:
    - Add renderComplete function
    - Add default pollInterval
    - Add toggle for fullscreen, defaulting to false
    - Synchronize renderer and server

_13/10/16_

- Move installation process to a recipe format
- Added React recipe

_23/09/16_

- Shell safeguarding

_07/09/16_

- Renamed and restructured some files
- Auto-run grunt sass, cssmin and uglify

_02/09/16_

- Switched to Express/EJS instead of connect
- Split Grunt watch tasks to separate SASS and JS
- Unify Gruntfile.js across platforms

_22/08/16_

- Replaced default LESS file with SASS on Windows.
- Added some useful Mixins to default SASS.
- Accept name parameter on bash with -n, --name.

_20/08/16_

- Added a default LESS file for Windows.

_25/06/16_

- Added bash support.
- Added JSHint.
- Swapped out QUnit for Jasmine.
- Swapped out LESS for SASS.
