5.0.1 / 2020-02-06
==================
* [TEST] Fixed failing test for audio operations using mp3 files.

5.0.0 / 2020-01-24
==================
* [FEATURE] Added ability to load asset as an ArrayBuffer.
* [FEATURE] Added ability to load asset as an AudioBuffer (useful for web audio).
* [FEATURE] Replaced `crossOrigin` initializer with an object that has a `crossOrigin` option and a `audioContext` option for passing in an existing audio context.
* [DOCS] Updated the docs with new features and options changes.

4.1.1 / 2020-01-13
==================
* [MISC] Removed logo from this repo, added it to the graphics repository, and updated the reference in the README in this repo.

4.1.0 / 2020-01-13
==================
* [FEATURE] Made it so that if no assets are added to load that the cycle still completes and dispatches the assets loaded signal.
* [FEATURE] Added a test for loading with no assets.
* [MISC] Normalized the `cache` property in Fetch.js to `_cache` just like all of the other private properties and methods.
* [MISC] Restructured tests.
* [MISC] Updated all dev dependencies to their latest versions.
* [MISC] Removed unnecessary jsdoc comments and extra spacing.

4.0.2 / 2020-01-09
==================
* [MISC] Updated all dev dependencies to their latest versions.
* [MISC] Updated license year to reflect new year.

4.0.1 / 2019-11-19
==================
* [MISC] Updated all dependencies to their latest versions.
* [MISC] Removed eventverse as a dependency.
* [MISC] Updated README badges.

4.0.0 / 2019-10-27
==================
* Updated events architecture to use signals.
* Updated documentation to reflect signal changes.
* Updated tests to reflect signal changes.

3.1.2 / 2019-10-23
==================
* [FEATURE] Updated all dependencies to their latest versions.

3.1.1 / 2019-07-17
==================
* [HOTFIX] Updated all dev dependencies to their latest versions and fixed any security vulnerabilities found in them.

3.1.0 / 2019-07-01
==================
* Updated dev dependencies to get rid of potential security vulnerabilities
* Changed interface imports from reference paths to normal imports
* Removed duplicate test case
* Added available properties to the README

0.1.0
==================
* Initial release
