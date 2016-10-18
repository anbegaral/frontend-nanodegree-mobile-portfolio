# Website Performance Optimization portfolio project

The goal of this project was to improve the code to get a good web performance.

## Description
A web page was given with some performance issues and the goals were:
- `index.html` achieves a PageSpeed score of at least 90 for Mobile and Desktop. :white_check_mark:
- Optimize `views/js/main.js` to make `views/pizza.html` render with a consistent frame-rate at 60fps when scrolling. :white_check_mark:
- Time to resize pizzas less than 5 ms using the pizza size slider on the `views/pizza.html` page. :white_check_mark:
- A README file is included detailing all steps done to successfully run the application and outlines the optimizations in `index.html` and `views/js/main.js` for `pizza.html`. :white_check_mark:
- Comments in `views/js/main.js` for `pizza.html` are present and effectively explain longer code procedures. :white_check_mark:

## Improving code
  - Remove render-blocking JavaScript `http://www.google-analytics.com/analytics.js`
  - The main changes have been done in `main.js`:
    1. **line 430:** `determineDx()` and `sizeSwitcher()` have been removed and the `changePizzaSizes()` function has been modified to include the pizzas resize feature simplificating the way it is done and avoiding more function calls.
    2. **lines 444 and 495:** the variables `randomPizza` and `items` have been created to avoid repetitive code
    3. **line 497:** the variable `bodyScrollTop` has been created to be calculated outside the loop
  - `index.html`:
    1. **line 10:** the `css` file has been minified and preloaded
    2. **line 14:** the `js` file has been minified and loaded asynchronously
    3. Got rid of Google analytics
  - `style.css`:
    1. the call to Google font is done in the `css` file using @import  url(//fonts.googleapis.com/css?family=Open+Sans:400,700);

## Scaling images
The images have been scaled to different sizes to improve the loading using **Gulp** tasks

## Minifying code
The javascript and css code have been minified using **Gulp** tasks.

## Installation
To view the final result, the user just needs to download the content of `dist` folder and open the `index.html` on a browser.

## PageSpeed url
The project is hosted here: http://ana.northeurope.cloudapp.azure.com/project4/