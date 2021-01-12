# E-Newsletter Generator

JavaScript application use for combining image with text and generate it as image file. 

## Features
- Create E-Newsletter without any graphic-editing software nor graphical skill.
- Simple UI and easy to use.
- No application needed just run in browser. (And even works in mobile!)
- Save your entered info on every keydown. Never lose your info by just single [F5] button again.

## How to use

Clone or download this repo and run `index.html` in any web browser. (Works locally no web-server required.)

## To-do list
 - [ ] Change all script to jQuery format
     - [X] ~~Remove all non-project releated file~~
     - [ ] Replace some contents
  - [ ] Make variable name easier to understand
 - [ ] Add Comment to explain script
 - [ ] Storage system overhaul
 - [ ] Make height and width variable responsive to input header and footer image.
 - [X] ~~Create a project~~
 - [X] ~~Finish the (working version) project~~
 - [X] ~~Legacy Version to do:~~
     - [X] ~~Add text-wrapper~~
     - [X] ~~Add line count~~
     - [X] ~~Add custom line number~~
 - [X] ~~Full Migration from Legacy version~~
 - [X] ~~UI Overhaul with Bootstrap~~
 - [X] ~~Seperate JavaScript from html file (All scripts is currently in script tag inside html file)~~

## Built with

 - Technology
   - JavaScript
   - [jQuery](https://jquery.com/)
   - [Bootstrap](https://getbootstrap.com)
 - Assets
   - [Thai Sans Neue](http://www.f0nt.com/release/thaisans-neue-1-0/)


## Known Issue(s)
 - In some instance the selected image not displaying in result.

## Changelog
 - 2.1 (26-04-18)
     - UI Overhaul with Bootstrap.
         - Remove section header. Page will now divided in 2 sections by left for forms and right for result.
         - Move image selection into modal.
     - Remove preview fuction. Text will now preview right when you type it.
     - Add function to fill form with placeholder text and placeholder image. (For developing purpose)
         - User will be noticed if placeholder text and/or image is used.
     - Decrease image height and fix text misalignment.
     - All fields and options button will be disabled after image is selected.
 - 2.0 (25-04-18)
     - Migration from original project to public version.
         - Change Header/Footer image.
         - Change base font to Thai Sans Neue.
         - Remove option to view current issue. (As no longer needed)
     - Update jQuery CDN to version 3.3.1
 > Current Build
 ------
 > Legacy Version
 - 1.3 (xx-xx-18)
 	- Add auto line count fill when preview.
    - Remove line count selection limit. (Unlimited lines now possible)
 - 1.2 (xx-xx-18)
    - Add option to view current issue online.
 - 1.1 (xx-xx-17)
    - Add text-wrapper.
    - Add line count selection. (Limited to 10)
 - 1.0 (xx-xx-17)
    - First working version deployed.
 - 0.2 (xx-xx-17)
    - Fix text/image misalignment.
    - Update UI.
 - 0.1 (xx-xx-17)
    - First prototype version deployed.
