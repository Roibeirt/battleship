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

/***/ "./src/GameboardFactory.js":
/*!*********************************!*\
  !*** ./src/GameboardFactory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameboardFactory)\n/* harmony export */ });\nconst GameboardFactory = (boardSize) => {\n  // create square board of defined size\n  const board = new Array(boardSize);\n  for (let x = 0; x < board.length; x++) {\n    board[x] = new Array(10);\n  }\n\n  const placeShip = (ship, x, y, rotation) => {\n    // place ship upwards\n    if (rotation == \"up\") {\n      // starting from initial coordinate on the x axis, determine how far up the y axis the ship will be placed\n      let endCoordinate = y + ship.shipLength - 1;\n      // if it will be placed past the end of the board, it is an invalid placement\n      if (endCoordinate > boardSize - 1) {\n        console.log(\"Ship placement invalid\");\n        return;\n      }\n      // iterate from starting coordinate to end coordinate, placing ship at each coordinate\n      for (let coordinate = y; coordinate <= endCoordinate; coordinate++) {\n        console.log(\"placing ship at: \" + x + \" \" + y);\n        board[x][coordinate] = ship;\n      }\n    }\n    // place ship to the right\n    else if (rotation == \"right\") {\n      let endCoordinate = x + ship.shipLength - 1;\n\n      if (endCoordinate > boardSize - 1) {\n        console.log(\"Ship placement invalid\");\n        return;\n      }\n\n      for (let coordinate = x; coordinate <= endCoordinate; coordinate++) {\n        board[coordinate][y] = ship;\n      }\n    }\n    // place ship downwards\n    else if (rotation == \"down\") {\n      let endCoordinate = y - ship.shipLength + 1;\n\n      if (endCoordinate < 0) {\n        console.log(\"Ship placement invalid\");\n        return;\n      }\n\n      for (let coordinate = y; coordinate >= endCoordinate; coordinate--) {\n        board[x][coordinate] = ship;\n      }\n    }\n    //place ship to the left\n    else if (rotation == \"left\") {\n      let endCoordinate = x - ship.shipLength + 1;\n\n      if (endCoordinate < 0) {\n        console.log(\"Ship placement invalid\");\n        return;\n      }\n\n      for (let coordinate = x; coordinate >= endCoordinate; coordinate--) {\n        board[coordinate][y] = ship;\n      }\n    }\n  };\n\n  return { board, placeShip };\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/GameboardFactory.js?");

/***/ }),

/***/ "./src/ShipFactory.js":
/*!****************************!*\
  !*** ./src/ShipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ShipFactory)\n/* harmony export */ });\nconst ShipFactory = (shipLength) => {\n  let hits = 0;\n\n  const hit = () => {\n    hits++;\n  };\n\n  const isSunk = () => {\n    return hits >= shipLength ? true : false;\n  };\n\n  return { hit, isSunk, shipLength };\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/ShipFactory.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameboardFactory */ \"./src/GameboardFactory.js\");\n/* harmony import */ var _ShipFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShipFactory */ \"./src/ShipFactory.js\");\n\n\n\nconst board = (0,_GameboardFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(10);\n\nconst ship = (0,_ShipFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(3);\n\nconsole.log(\"Generted ship:\" + ship);\nconsole.log(\"Generated board\" + board);\n\nboard.placeShip(ship, 0, 0, \"up\");\nconsole.log(board);\n\nboard.placeShip(ship, 2, 0, \"right\");\nconsole.log(board);\n\nboard.placeShip(ship, 7, 1, \"left\");\nconsole.log(board);\n\nboard.placeShip(ship, 9, 9, \"down\");\nconsole.log(board);\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;