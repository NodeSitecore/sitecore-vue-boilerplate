/**
 * This file includes polyfills needed by Vue.js and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 */

/** *************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. * */
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
import 'core-js/es6/array';
// import 'whatwg-fetch';
// import 'core-js';
// import 'core-js/es6/promise'; Not necessary. Webpack include this polyfills
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';

if (!NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (fn) {
    Array.prototype.forEach.call(this, fn);
  };
}
