/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./script1.js":
/*!********************!*\
  !*** ./script1.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script3.js */ \"./script3.js\");\n/* harmony import */ var _script2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script2.js */ \"./script2.js\");\n\n\n\n_script3_js__WEBPACK_IMPORTED_MODULE_0__.colorButton.addEventListener('click', _script2_js__WEBPACK_IMPORTED_MODULE_1__.changeColor);// listens for the click of the button\n_script3_js__WEBPACK_IMPORTED_MODULE_0__.colorButton.addEventListener('click', _script2_js__WEBPACK_IMPORTED_MODULE_1__.changePhoto); // listens for the click of the button\n\n_script3_js__WEBPACK_IMPORTED_MODULE_0__.mainImg.addEventListener('mouseover', _script2_js__WEBPACK_IMPORTED_MODULE_1__.darkenImg); // listens for when the mouse is over the image\n_script3_js__WEBPACK_IMPORTED_MODULE_0__.mainImg.addEventListener('mouseout', _script2_js__WEBPACK_IMPORTED_MODULE_1__.lightenImg); // listens for when the mouse moves off the image\n_script3_js__WEBPACK_IMPORTED_MODULE_0__.mainImg.addEventListener('click', _script2_js__WEBPACK_IMPORTED_MODULE_1__.changePhoto); // listens for when the image is clicked\n\n\n//# sourceURL=webpack://assignment5/./script1.js?");

/***/ }),

/***/ "./script2.js":
/*!********************!*\
  !*** ./script2.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeColor: () => (/* binding */ changeColor),\n/* harmony export */   changePhoto: () => (/* binding */ changePhoto),\n/* harmony export */   darkenImg: () => (/* binding */ darkenImg),\n/* harmony export */   getRandomInt: () => (/* binding */ getRandomInt),\n/* harmony export */   lightenImg: () => (/* binding */ lightenImg)\n/* harmony export */ });\n/* harmony import */ var _script3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script3.js */ \"./script3.js\");\n\n// This function changes which image is displayed\n// Inputs: none\n// Output: none\nfunction changePhoto(){\n    if (_script3_js__WEBPACK_IMPORTED_MODULE_0__.imgCounter < 4){ //If the images index is valid\n        _script3_js__WEBPACK_IMPORTED_MODULE_0__.mainImg.src = _script3_js__WEBPACK_IMPORTED_MODULE_0__.images[_script3_js__WEBPACK_IMPORTED_MODULE_0__.imgCounter];\n        _script3_js__WEBPACK_IMPORTED_MODULE_0__.mainImg.alt = _script3_js__WEBPACK_IMPORTED_MODULE_0__.alts[_script3_js__WEBPACK_IMPORTED_MODULE_0__.imgCounter];\n        _script3_js__WEBPACK_IMPORTED_MODULE_0__.imgCounter ++;\n    }else{ //Resets the images index to the beginning\n        _script3_js__WEBPACK_IMPORTED_MODULE_0__.imgCounter = 0;\n        _script3_js__WEBPACK_IMPORTED_MODULE_0__.mainImg.src = _script3_js__WEBPACK_IMPORTED_MODULE_0__.images[_script3_js__WEBPACK_IMPORTED_MODULE_0__.imgCounter];\n        _script3_js__WEBPACK_IMPORTED_MODULE_0__.mainImg.alt = _script3_js__WEBPACK_IMPORTED_MODULE_0__.alts[_script3_js__WEBPACK_IMPORTED_MODULE_0__.imgCounter];\n        _script3_js__WEBPACK_IMPORTED_MODULE_0__.imgCounter ++;\n    }\n    \n}\n\n\n// This function adds a grayscale filter from the specific image 'mainImg'\n// Inputs: none\n// Output: none\nfunction darkenImg(){\n    _script3_js__WEBPACK_IMPORTED_MODULE_0__.mainImg.style.filter = 'grayscale(60%)';\n}\n\n\n// This function removes a grayscale filter from the specific image 'mainImg'\n// Inputs: none\n// Output: none\nfunction lightenImg(){\n    _script3_js__WEBPACK_IMPORTED_MODULE_0__.mainImg.style.filter = 'grayscale(0%)';\n}\n\n// This function changes the background color of the specific button 'colorButton'\n// Inputs: none\n// Output: none\nfunction changeColor(){\n    const red = getRandomInt(0,255); \n    const green = getRandomInt(0,255);\n    const blue = getRandomInt(0,255);\n    \n    _script3_js__WEBPACK_IMPORTED_MODULE_0__.colorButton.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; // changes the rgb values in the style of the button using the random numbers generated by the random number function\n}\n\n\n// This function creates a random whole number between the variables 'min' and 'max'\n// Inputs: (min -> minimum number output, max -> maximum number output)\n// Output: Int -> int between min and max\n// Credit: This function was taken from a program I wrote in ATLS 2200\nfunction getRandomInt(min, max) {\n    min = Math.ceil(min);\n    max = Math.floor(max);\n    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive\n}\n\n\n\n//# sourceURL=webpack://assignment5/./script2.js?");

/***/ }),

/***/ "./script3.js":
/*!********************!*\
  !*** ./script3.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   alts: () => (/* binding */ alts),\n/* harmony export */   colorButton: () => (/* binding */ colorButton),\n/* harmony export */   images: () => (/* binding */ images),\n/* harmony export */   imgCounter: () => (/* binding */ imgCounter),\n/* harmony export */   mainImg: () => (/* binding */ mainImg)\n/* harmony export */ });\nconst colorButton = document.getElementById('colorChange'); // Gets the button element\n\nconst mainImg = document.getElementById('darkHover'); // Gets the image element\n\nconst images = ['../../img/img11.jpg', '../../img/img12.jpg', '../../img/img10.JPG', '../../img/img6.JPEG']; //array of image paths\nconst alts = ['Skiing', 'Disney with Friends', 'Alpha Phi Preference', 'Seeing Play with Friends']; //array of alt descriptions for the images in the images array\n\n// Counts which index in the images and alts array\nlet imgCounter = 1; //It is already displaying the 0 index photo so we want it to start at index 1\n\n\n\n//# sourceURL=webpack://assignment5/./script3.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script1.js");
/******/ 	
/******/ })()
;