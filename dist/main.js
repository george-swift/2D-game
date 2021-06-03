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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".background {\\n  background: rgb(52, 166, 251);\\n  table-layout: fixed;\\n  border-spacing: 0;\\n}\\n\\n.background td { padding: 0; }\\n\\n.lava { background: rgb(255, 100, 100); }\\n\\n.wall { background: white; }\\n\\n.actor { position: absolute; }\\n\\n.coin { background: rgb(241, 229, 89); }\\n\\n.player { background: rgb(64, 64, 64); }\\n\\n.lost .player {\\n  background: rgb(160, 64, 64);\\n}\\n\\n.won .player {\\n  box-shadow: -4px -7px 8px white, 4px -7px 8px white;\\n}\\n\\n.game {\\n  position: relative;\\n  overflow: hidden;\\n  max-width: 600px;\\n  max-height: 450px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://2d-game/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://2d-game/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://2d-game/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://2d-game/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_level_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/level.js */ \"./src/modules/level.js\");\n/* harmony import */ var _modules_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/state.js */ \"./src/modules/state.js\");\n/* harmony import */ var _modules_domDisplay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/domDisplay.js */ \"./src/modules/domDisplay.js\");\n\n\n\n\n\nconst simpleLevelPlan = `\n......................\n..#................#..\n..#..............=.#..\n..#.........o.o....#..\n..#.@......#####...#..\n..#####............#..\n......#++++++++++++#..\n......##############..\n......................\n`;\n\nconst simpleLevel = new _modules_level_js__WEBPACK_IMPORTED_MODULE_1__.default(simpleLevelPlan);\nconst display = new _modules_domDisplay_js__WEBPACK_IMPORTED_MODULE_3__.default(document.body, simpleLevel);\ndisplay.syncState(_modules_state_js__WEBPACK_IMPORTED_MODULE_2__.default.start(simpleLevel));\n\n//# sourceURL=webpack://2d-game/./src/index.js?");

/***/ }),

/***/ "./src/modules/coin.js":
/*!*****************************!*\
  !*** ./src/modules/coin.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector.js */ \"./src/modules/vector.js\");\n\n\nclass Coin {\n  constructor(pos, basePos, wobble) {\n    this.pos = pos;\n    this.basePos = basePos;\n    this.wobble = wobble;\n    this.value = 'coin';\n  }\n\n  get type() {\n    return this.value;\n  }\n\n  static create(pos) {\n    const basePos = pos.plus(new _vector_js__WEBPACK_IMPORTED_MODULE_0__.default(0.2, 0.1));\n    return new Coin(basePos, basePos, Math.random() * Math.PI * 2);\n  }\n}\n\nCoin.prototype.size = new _vector_js__WEBPACK_IMPORTED_MODULE_0__.default(0.6, 0.6);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Coin);\n\n//# sourceURL=webpack://2d-game/./src/modules/coin.js?");

/***/ }),

/***/ "./src/modules/domDisplay.js":
/*!***********************************!*\
  !*** ./src/modules/domDisplay.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst elt = (name, attrs, ...children) => {\n  const dom = document.createElement(name);\n  Object.keys(attrs).forEach((attribute) => {\n    dom.setAttribute(attribute, attrs[attribute]);\n  });\n\n  [...children].forEach((child) => {\n    dom.appendChild(child);\n  });\n\n  return dom;\n};\n\nconst scale = 20;\n\nconst drawGrid = (level) => elt('table', {\n  class: 'background',\n  style: `width: ${level.width * scale}px`,\n}, ...level.rows.map((row) => elt('tr', { style: `height: ${scale}px` }, ...row.map((type) => elt('td', { class: type })))));\n\nconst drawActors = (actors) => elt('div', {}, ...actors.map((actor) => {\n  const rect = elt('div', { class: `actor ${actor.type}` });\n\n  rect.style.width = `${actor.size.x * scale}px`;\n  rect.style.height = `${actor.size.y * scale}px`;\n  rect.style.left = `${actor.pos.x * scale}px`;\n  rect.style.top = `${actor.pos.y * scale}px`;\n\n  return rect;\n}));\n\nclass DOMDisplay {\n  constructor(parent, level) {\n    this.dom = elt('div', { class: 'game' }, drawGrid(level));\n    this.actorLayer = null;\n    parent.appendChild(this.dom);\n  }\n\n  clear() {\n    this.dom.remove();\n  }\n}\n\nDOMDisplay.prototype.scrollPlayerIntoView = function (state) {\n  const width = this.dom.clientWidth;\n  const height = this.dom.clientHeight;\n  const margin = width / 3;\n\n  const left = this.dom.scrollLeft;\n  const top = this.dom.scrollTop;\n  const right = left + width;\n  const bottom = top + height;\n\n  const { player } = state;\n  const center = player.pos.plus(player.size.times(0.5)).times(scale);\n\n  if (center.x < left + margin) {\n    this.dom.scrollLeft = center.x - margin;\n  } else if (center.x > right - margin) {\n    this.dom.scrollLeft = center.x + margin - width;\n  }\n\n  if (center.y < top + margin) {\n    this.dom.scrollTop = center.y - margin;\n  } else if (center.y > bottom - margin) {\n    this.dom.scrollTop = center.y + margin - height;\n  }\n};\n\nDOMDisplay.prototype.syncState = function (state) {\n  if (this.actorLayer) this.actorLayer.remove();\n  this.actorLayer = drawActors(state.actors);\n  this.dom.appendChild(this.actorLayer);\n  this.dom.className = `game ${state.status}`;\n  this.scrollPlayerIntoView(state);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMDisplay);\n\n//# sourceURL=webpack://2d-game/./src/modules/domDisplay.js?");

/***/ }),

/***/ "./src/modules/lava.js":
/*!*****************************!*\
  !*** ./src/modules/lava.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector.js */ \"./src/modules/vector.js\");\n/* eslint-disable consistent-return */\n\n\nclass Lava {\n  constructor(pos, speed, reset) {\n    this.pos = pos;\n    this.speed = speed;\n    this.reset = reset;\n    this.value = 'lava';\n  }\n\n  get type() {\n    return this.value;\n  }\n\n  static create(pos, ch) {\n    if (ch === '=') {\n      return new Lava(pos, new _vector_js__WEBPACK_IMPORTED_MODULE_0__.default(2, 0));\n    }\n    if (ch === '|') {\n      return new Lava(pos, new _vector_js__WEBPACK_IMPORTED_MODULE_0__.default(0, 2));\n    }\n    if (ch === 'v') {\n      return new Lava(pos, new _vector_js__WEBPACK_IMPORTED_MODULE_0__.default(0, 3), pos);\n    }\n  }\n}\n\nLava.prototype.size = new _vector_js__WEBPACK_IMPORTED_MODULE_0__.default(1, 1);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Lava);\n\n//# sourceURL=webpack://2d-game/./src/modules/lava.js?");

/***/ }),

/***/ "./src/modules/level.js":
/*!******************************!*\
  !*** ./src/modules/level.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Level)\n/* harmony export */ });\n/* harmony import */ var _coin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coin.js */ \"./src/modules/coin.js\");\n/* harmony import */ var _lava_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lava.js */ \"./src/modules/lava.js\");\n/* harmony import */ var _players_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./players.js */ \"./src/modules/players.js\");\n/* harmony import */ var _vector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vector.js */ \"./src/modules/vector.js\");\n\n\n\n\n\nconst levelChars = {\n  '.': 'empty',\n  '#': 'wall',\n  '+': 'lava',\n  '@': _players_js__WEBPACK_IMPORTED_MODULE_2__.default,\n  o: _coin_js__WEBPACK_IMPORTED_MODULE_0__.default,\n  '=': _lava_js__WEBPACK_IMPORTED_MODULE_1__.default,\n  '|': _lava_js__WEBPACK_IMPORTED_MODULE_1__.default,\n  v: _lava_js__WEBPACK_IMPORTED_MODULE_1__.default,\n};\n\nclass Level {\n  constructor(plan) {\n    const rows = plan.trim().split('\\n').map((l) => [...l]);\n    this.height = rows.length;\n    this.width = rows[0].length;\n    this.startActors = [];\n    this.rows = rows.map((row, y) => row.map((ch, x) => {\n      const type = levelChars[ch];\n      if (typeof type === 'string') return type;\n      this.startActors.push(\n        type.create(new _vector_js__WEBPACK_IMPORTED_MODULE_3__.default(x, y), ch),\n      );\n      return 'empty';\n    }));\n  }\n}\n\n//# sourceURL=webpack://2d-game/./src/modules/level.js?");

/***/ }),

/***/ "./src/modules/players.js":
/*!********************************!*\
  !*** ./src/modules/players.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector.js */ \"./src/modules/vector.js\");\n\n\nclass Player {\n  constructor(position, speed) {\n    this.pos = position;\n    this.speed = speed;\n    this.value = 'player';\n  }\n\n  get type() {\n    return this.value;\n  }\n\n  static create(position) {\n    return new Player(position.plus(new _vector_js__WEBPACK_IMPORTED_MODULE_0__.default(0, -0.5)), new _vector_js__WEBPACK_IMPORTED_MODULE_0__.default(0, 0));\n  }\n}\n\nPlayer.prototype.size = new _vector_js__WEBPACK_IMPORTED_MODULE_0__.default(0.8, 1.5);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://2d-game/./src/modules/players.js?");

/***/ }),

/***/ "./src/modules/state.js":
/*!******************************!*\
  !*** ./src/modules/state.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ State)\n/* harmony export */ });\nclass State {\n  constructor(level, actors, status) {\n    this.level = level;\n    this.actors = actors;\n    this.status = status;\n  }\n\n  static start(level) {\n    return new State(level, level.startActors, 'playing');\n  }\n\n  get Player() {\n    return this.actors.find((a) => a.type === 'player');\n  }\n}\n\n//# sourceURL=webpack://2d-game/./src/modules/state.js?");

/***/ }),

/***/ "./src/modules/vector.js":
/*!*******************************!*\
  !*** ./src/modules/vector.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Vec)\n/* harmony export */ });\nclass Vec {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n\n  plus(other) {\n    return new Vec(this.x + other.x, this.y + other.y);\n  }\n\n  times(factor) {\n    return new Vec(this.x * factor, this.y * factor);\n  }\n}\n\n\n//# sourceURL=webpack://2d-game/./src/modules/vector.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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