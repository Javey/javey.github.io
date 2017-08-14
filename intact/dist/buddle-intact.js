/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "static/chunk/" + {"0":"1991c856dc8b74f45d55","1":"ee9c8ced851cf1b2d780"}[chunkId] + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isObject = isObject;
exports.isStringOrNumber = isStringOrNumber;
exports.isNullOrUndefined = isNullOrUndefined;
exports.isComponentInstance = isComponentInstance;
exports.isEventProp = isEventProp;
exports.MountedQueue = MountedQueue;
var toString = Object.prototype.toString;

var doc = exports.doc = typeof document === 'undefined' ? {} : document;

var isArray = exports.isArray = Array.isArray || function (arr) {
    return toString.call(arr) === '[object Array]';
};

function isObject(o) {
    return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && o !== null;
}

function isStringOrNumber(o) {
    var type = typeof o === 'undefined' ? 'undefined' : _typeof(o);
    return type === 'string' || type === 'number';
}

function isNullOrUndefined(o) {
    return o === null || o === undefined;
}

function isComponentInstance(o) {
    return o && typeof o.init === 'function';
}

function isEventProp(propName) {
    return propName.substr(0, 3) === 'ev-';
}

var indexOf = exports.indexOf = function () {
    if (Array.prototype.indexOf) {
        return function (arr, value) {
            return arr.indexOf(value);
        };
    } else {
        return function (arr, value) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] === value) {
                    return i;
                }
            }
            return -1;
        };
    }
}();

var nativeObject = Object.create;
var createObject = exports.createObject = function () {
    if (nativeObject) {
        return function (obj) {
            return nativeObject(obj);
        };
    } else {
        return function (obj) {
            function Fn() {}
            Fn.prototype = obj;
            return new Fn();
        };
    }
}();

var SimpleMap = exports.SimpleMap = typeof Map === 'function' ? Map : function () {
    function SimpleMap() {
        this._keys = [];
        this._values = [];
        this.size = 0;
    }

    SimpleMap.prototype.set = function (key, value) {
        var index = indexOf(this._keys, key);
        if (!~index) {
            index = this._keys.push(key) - 1;
            this.size++;
        }
        this._values[index] = value;
        return this;
    };
    SimpleMap.prototype.get = function (key) {
        var index = indexOf(this._keys, key);
        if (!~index) return;
        return this._values[index];
    };
    SimpleMap.prototype.delete = function (key) {
        var index = indexOf(this._keys, key);
        if (!~index) return false;
        this._keys.splice(index, 1);
        this._values.splice(index, 1);
        this.size--;
        return true;
    };

    return SimpleMap;
}();

var skipProps = exports.skipProps = {
    key: true,
    ref: true,
    children: true,
    className: true,
    checked: true,
    multiple: true,
    defaultValue: true
};

var booleanProps = exports.booleanProps = {
    muted: true,
    scoped: true,
    loop: true,
    open: true,
    checked: true,
    default: true,
    capture: true,
    disabled: true,
    readOnly: true,
    required: true,
    autoplay: true,
    controls: true,
    seamless: true,
    reversed: true,
    allowfullscreen: true,
    novalidate: true,
    hidden: true,
    autoFocus: true,
    selected: true
};

var strictProps = exports.strictProps = {
    volume: true,
    defaultChecked: true,
    value: true
};

var selfClosingTags = exports.selfClosingTags = {
    'area': true,
    'base': true,
    'br': true,
    'col': true,
    'command': true,
    'embed': true,
    'hr': true,
    'img': true,
    'input': true,
    'keygen': true,
    'link': true,
    'menuitem': true,
    'meta': true,
    'param': true,
    'source': true,
    'track': true,
    'wbr': true
};

function MountedQueue() {
    this.queue = [];
}
MountedQueue.prototype.push = function (fn) {
    this.queue.push(fn);
};
MountedQueue.prototype.unshift = function (fn) {
    this.queue.unshift(fn);
};
MountedQueue.prototype.trigger = function () {
    var queue = this.queue;
    var callback = void 0;
    while (callback = queue.shift()) {
        callback();
    }
};

var browser = exports.browser = {};
if (typeof navigator !== 'undefined') {
    var ua = navigator.userAgent;
    var index = ua.indexOf('MSIE ');
    if (~index) {
        browser.isIE = true;
        var version = parseInt(ua.substring(index + 5, ua.indexOf('.', index)), 10);
        browser.version = version;
        browser.isIE8 = version === 8;
    }
}

var setTextContent = exports.setTextContent = browser.isIE8 ? function (dom, text) {
    dom.innerText = text;
} : function (dom, text) {
    dom.textContent = text;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {exports.__esModule = true;
exports.EMPTY_OBJ = exports.Types = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.VNode = VNode;
exports.createVNode = createVNode;
exports.createCommentVNode = createCommentVNode;
exports.createUnescapeTextVNode = createUnescapeTextVNode;
exports.createTextVNode = createTextVNode;
exports.createVoidVNode = createVoidVNode;
exports.createComponentInstanceVNode = createComponentInstanceVNode;

var _utils = __webpack_require__(0);

var Types = exports.Types = {
    Text: 1,
    HtmlElement: 1 << 1,

    ComponentClass: 1 << 2,
    ComponentFunction: 1 << 3,
    ComponentInstance: 1 << 4,

    HtmlComment: 1 << 5,

    InputElement: 1 << 6,
    SelectElement: 1 << 7,
    TextareaElement: 1 << 8,

    UnescapeText: 1 << 9 // for server side render unescape text
};
Types.FormElement = Types.InputElement | Types.SelectElement | Types.TextareaElement;
Types.Element = Types.HtmlElement | Types.FormElement;
Types.ComponentClassOrInstance = Types.ComponentClass | Types.ComponentInstance;
Types.TextElement = Types.Text | Types.HtmlComment;

var EMPTY_OBJ = exports.EMPTY_OBJ = {};
if (process.env.NODE_ENV !== 'production' && !_utils.browser.isIE) {
    Object.freeze(EMPTY_OBJ);
}

function VNode(type, tag, props, children, className, key, ref) {
    this.type = type;
    this.tag = tag;
    this.props = props;
    this.children = children;
    this.key = key;
    this.ref = ref;
    this.className = className;
}

function createVNode(tag, props, children, className, key, ref) {
    var type = void 0;
    props || (props = EMPTY_OBJ);
    switch (typeof tag === 'undefined' ? 'undefined' : _typeof(tag)) {
        case 'string':
            if (tag === 'input') {
                type = Types.InputElement;
            } else if (tag === 'select') {
                type = Types.SelectElement;
            } else if (tag === 'textarea') {
                type = Types.TextareaElement;
            } else {
                type = Types.HtmlElement;
            }
            break;
        case 'function':
            if (tag.prototype.init) {
                type = Types.ComponentClass;
            } else {
                return tag(props);
                // type = Types.ComponentFunction;
            }
            break;
        case 'object':
            if (tag.init) {
                return createComponentInstanceVNode(tag);
            }
        default:
            throw new Error('unknown vNode type: ' + tag);
    }

    if (props.children) {
        props.children = normalizeChildren(props.children);
    }

    return new VNode(type, tag, props, normalizeChildren(children), className || props.className, key || props.key, ref || props.ref);
}

function createCommentVNode(children) {
    return new VNode(Types.HtmlComment, null, EMPTY_OBJ, children);
}

function createUnescapeTextVNode(children) {
    return new VNode(Types.UnescapeText, null, EMPTY_OBJ, children);
}

function createTextVNode(text) {
    return new VNode(Types.Text, null, EMPTY_OBJ, text);
}

function createVoidVNode() {
    return new VNode(Types.VoidElement, null, EMPTY_OBJ);
}

function createComponentInstanceVNode(instance) {
    var props = instance.props || EMPTY_OBJ;
    return new VNode(Types.ComponentInstance, instance.constructor, props, instance, null, props.key, props.ref);
}

function normalizeChildren(vNodes) {
    if ((0, _utils.isArray)(vNodes)) {
        var childNodes = addChild(vNodes, { index: 0 });
        return childNodes.length ? childNodes : null;
    } else if ((0, _utils.isComponentInstance)(vNodes)) {
        return createComponentInstanceVNode(vNodes);
    }
    return vNodes;
}

function applyKey(vNode, reference) {
    if ((0, _utils.isNullOrUndefined)(vNode.key)) {
        vNode.key = '.$' + reference.index++;
    }
    return vNode;
}

function addChild(vNodes, reference) {
    var newVNodes = void 0;
    for (var i = 0; i < vNodes.length; i++) {
        var n = vNodes[i];
        if ((0, _utils.isNullOrUndefined)(n)) {
            if (!newVNodes) {
                newVNodes = vNodes.slice(0, i);
            }
        } else if ((0, _utils.isArray)(n)) {
            if (!newVNodes) {
                newVNodes = vNodes.slice(0, i);
            }
            newVNodes = newVNodes.concat(addChild(n, reference));
        } else if ((0, _utils.isStringOrNumber)(n)) {
            if (!newVNodes) {
                newVNodes = vNodes.slice(0, i);
            }
            newVNodes.push(applyKey(createTextVNode(n), reference));
        } else if ((0, _utils.isComponentInstance)(n)) {
            if (!newVNodes) {
                newVNodes = vNodes.slice(0, i);
            }
            newVNodes.push(applyKey(createComponentInstanceVNode(n), reference));
        } else if (n.type) {
            if (!newVNodes) {
                newVNodes = vNodes.slice(0, i);
            }
            newVNodes.push(applyKey(n, reference));
        }
    }
    return newVNodes || vNodes;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
exports.error = exports.noop = exports.hasOwn = exports.Options = exports.Directives = exports.TextTags = exports.TypeName = exports.Type = exports.SelfClosingTags = exports.indexOf = exports.isArray = exports.isNullOrUndefined = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /** 
                                                                                                                                                                                                                                                                               * @fileoverview utility methods
                                                                                                                                                                                                                                                                               * @author javey
                                                                                                                                                                                                                                                                               * @date 15-4-22
                                                                                                                                                                                                                                                                               */

exports.each = each;
exports.isObject = isObject;
exports.map = map;
exports.className = className;
exports.isWhiteSpace = isWhiteSpace;
exports.trimRight = trimRight;
exports.trimLeft = trimLeft;
exports.setDelimiters = setDelimiters;
exports.getDelimiters = getDelimiters;
exports.configure = configure;
exports.isSelfClosingTag = isSelfClosingTag;
exports.isTextTag = isTextTag;
exports.isDirective = isDirective;
exports.extend = extend;
exports.setCheckboxModel = setCheckboxModel;
exports.detectCheckboxChecked = detectCheckboxChecked;
exports.setSelectModel = setSelectModel;

var _utils = __webpack_require__(0);

exports.isNullOrUndefined = _utils.isNullOrUndefined;
exports.isArray = _utils.isArray;
exports.indexOf = _utils.indexOf;
exports.SelfClosingTags = _utils.selfClosingTags;


var i = 0;var Type = exports.Type = { JS: i++,
    JSXText: i++,
    JSXUnescapeText: i++,
    JSXElement: i++,
    JSXExpressionContainer: i++,
    JSXAttribute: i++,
    JSXEmptyExpression: i++,

    JSXWidget: i++,
    JSXVdt: i++,
    JSXBlock: i++,
    JSXComment: i++,

    JSXDirective: i++
};
var TypeName = exports.TypeName = [];
for (var type in Type) {
    TypeName[Type[type]] = type;
}

// which children must be text
var TextTags = exports.TextTags = {
    style: true,
    script: true,
    textarea: true
};

var Directives = exports.Directives = {
    'v-if': true,
    'v-else-if': true,
    'v-else': true,
    'v-for': true,
    'v-for-value': true,
    'v-for-key': true
};

var Options = exports.Options = {
    autoReturn: true,
    onlySource: false,
    delimiters: ['{', '}'],
    // remove `with` statement
    noWith: false,
    // whether rendering on server or not
    server: false,
    // skip all whitespaces in template
    skipWhitespace: true,
    setModel: function setModel(data, key, value) {

        // return function(e) {
        data[key] = value; //typeof e === 'boolean' ? e : e.target.value;
        // };
    },
    getModel: function getModel(data, key) {
        return data[key];
    },
    disableSplitText: false // split text with <!---->
};

var hasOwn = exports.hasOwn = Object.prototype.hasOwnProperty;
var noop = exports.noop = function noop() {};

function isArrayLike(value) {
    if ((0, _utils.isNullOrUndefined)(value)) return false;
    var length = value.length;
    return typeof length === 'number' && length > -1 && length % 1 === 0 && length <= 9007199254740991 && typeof value !== 'function';
}

function each(obj, iter, thisArg) {
    if (isArrayLike(obj)) {
        for (var i = 0, l = obj.length; i < l; i++) {
            iter.call(thisArg, obj[i], i, obj);
        }
    } else if (isObject(obj)) {
        for (var key in obj) {
            if (hasOwn.call(obj, key)) {
                iter.call(thisArg, obj[key], key, obj);
            }
        }
    }
}

function isObject(obj) {
    var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
    return type === 'function' || type === 'object' && !!obj;
}

function map(obj, iter, thisArgs) {
    var ret = [];
    each(obj, function (value, key, obj) {
        ret.push(iter.call(thisArgs, value, key, obj));
    });
    return ret;
}

function className(obj) {
    if ((0, _utils.isNullOrUndefined)(obj)) return;
    if (typeof obj === 'string') return obj;
    var ret = [];
    for (var key in obj) {
        if (hasOwn.call(obj, key) && obj[key]) {
            ret.push(key);
        }
    }
    return ret.join(' ');
}

function isWhiteSpace(charCode) {
    return charCode <= 160 && charCode >= 9 && charCode <= 13 || charCode == 32 || charCode == 160 || charCode == 5760 || charCode == 6158 || charCode >= 8192 && (charCode <= 8202 || charCode == 8232 || charCode == 8233 || charCode == 8239 || charCode == 8287 || charCode == 12288 || charCode == 65279);
}

function trimRight(str) {
    var index = str.length;

    while (index-- && isWhiteSpace(str.charCodeAt(index))) {}

    return str.slice(0, index + 1);
}

function trimLeft(str) {
    var length = str.length,
        index = -1;

    while (index++ < length && isWhiteSpace(str.charCodeAt(index))) {}

    return str.slice(index);
}

function setDelimiters(delimiters) {
    if (!(0, _utils.isArray)(delimiters)) {
        throw new Error('The parameter must be an array like ["{{", "}}"]');
    }
    Options.delimiters = delimiters;
}

function getDelimiters() {
    return Options.delimiters;
}

function configure(options) {
    if (options !== undefined) {
        extend(Options, options);
    }
    return Options;
}

function isSelfClosingTag(tag) {
    return _utils.selfClosingTags[tag];
}

function isTextTag(tag) {
    return TextTags[tag];
}

function isDirective(name) {
    return hasOwn.call(Directives, name);
}

function extend() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var dest = args[0];
    var length = args.length;
    if (length > 1) {
        for (var i = 1; i < length; i++) {
            var source = args[i];
            if (source) {
                for (var key in source) {
                    if (hasOwn.call(source, key)) {
                        dest[key] = source[key];
                    }
                }
            }
        }
    }
    return dest;
}

function setCheckboxModel(data, key, trueValue, falseValue, e) {
    var value = Options.getModel(data, key),
        checked = e.target.checked;
    if ((0, _utils.isArray)(value)) {
        value = value.slice(0);
        if (checked) {
            value.push(trueValue);
        } else {
            var index = (0, _utils.indexOf)(value, trueValue);
            if (~index) {
                value.splice(index, 1);
            }
        }
    } else {
        value = checked ? trueValue : falseValue;
    }
    Options.setModel(data, key, value);
}

function detectCheckboxChecked(data, key, trueValue) {
    var value = Options.getModel(data, key);
    if ((0, _utils.isArray)(value)) {
        return (0, _utils.indexOf)(value, trueValue) > -1;
    } else {
        return value === trueValue;
    }
}

function setSelectModel(data, key, e) {
    var target = e.target,
        multiple = target.multiple,
        value,
        i,
        opt,
        options = target.options;

    if (multiple) {
        value = [];
        for (i = 0; i < options.length; i++) {
            opt = options[i];
            if (opt.selected) {
                value.push((0, _utils.isNullOrUndefined)(opt._value) ? opt.value : opt._value);
            }
        }
    } else {
        for (i = 0; i < options.length; i++) {
            opt = options[i];
            if (opt.selected) {
                value = (0, _utils.isNullOrUndefined)(opt._value) ? opt.value : opt._value;
                break;
            }
        }
    }
    Options.setModel(data, key, value);
}

var error = exports.error = function () {
    var hasConsole = typeof console !== 'undefined';
    return hasConsole ? function (e) {
        console.error(e.stack);
    } : noop;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
exports.patch = patch;
exports.patchVNode = patchVNode;
exports.patchProps = patchProps;
exports.patchProp = patchProp;
exports.kebabCase = kebabCase;

var _vnode = __webpack_require__(1);

var _vdom = __webpack_require__(4);

var _utils = __webpack_require__(0);

var _event = __webpack_require__(14);

var _process = __webpack_require__(6);

function patch(lastVNode, nextVNode, parentDom, mountedQueue, parentVNode) {
    var isTrigger = true;
    if (mountedQueue) {
        isTrigger = false;
    } else {
        mountedQueue = new _utils.MountedQueue();
    }
    var dom = patchVNode(lastVNode, nextVNode, parentDom, mountedQueue, parentVNode);
    if (isTrigger) {
        mountedQueue.trigger();
    }
    return dom;
}

function patchVNode(lastVNode, nextVNode, parentDom, mountedQueue, parentVNode) {
    if (lastVNode !== nextVNode) {
        var nextType = nextVNode.type;
        var lastType = lastVNode.type;

        if (nextType & _vnode.Types.Element) {
            if (lastType & _vnode.Types.Element) {
                patchElement(lastVNode, nextVNode, parentDom, mountedQueue, parentVNode);
            } else {
                replaceElement(lastVNode, nextVNode, parentDom, mountedQueue, parentVNode);
            }
        } else if (nextType & _vnode.Types.TextElement) {
            if (lastType & _vnode.Types.TextElement) {
                patchText(lastVNode, nextVNode);
            } else {
                replaceElement(lastVNode, nextVNode, parentDom, mountedQueue);
            }
        } else if (nextType & _vnode.Types.ComponentClass) {
            if (lastType & _vnode.Types.ComponentClass) {
                patchComponentClass(lastVNode, nextVNode, parentDom, mountedQueue, parentVNode);
            } else {
                replaceElement(lastVNode, nextVNode, parentDom, mountedQueue, parentVNode);
            }
            // } else if (nextType & Types.ComponentFunction) {
            // if (lastType & Types.ComponentFunction) {
            // patchComponentFunction(lastVNode, nextVNode, parentDom, mountedQueue);
            // } else {
            // replaceElement(lastVNode, nextVNode, parentDom, mountedQueue);
            // }
        } else if (nextType & _vnode.Types.ComponentInstance) {
            if (lastType & _vnode.Types.ComponentInstance) {
                patchComponentIntance(lastVNode, nextVNode, parentDom, mountedQueue, parentVNode);
            } else {
                replaceElement(lastVNode, nextVNode, parentDom, mountedQueue, parentVNode);
            }
        }
    }
    return nextVNode.dom;
}

function patchElement(lastVNode, nextVNode, parentDom, mountedQueue, parentVNode) {
    var dom = lastVNode.dom;
    var lastProps = lastVNode.props;
    var nextProps = nextVNode.props;
    var lastChildren = lastVNode.children;
    var nextChildren = nextVNode.children;
    var lastClassName = lastVNode.className;
    var nextClassName = nextVNode.className;

    nextVNode.dom = dom;
    nextVNode.parentVNode = parentVNode;

    if (lastVNode.tag !== nextVNode.tag || lastVNode.key !== nextVNode.key) {
        replaceElement(lastVNode, nextVNode, parentDom, mountedQueue, parentVNode);
    } else {
        if (lastChildren !== nextChildren) {
            patchChildren(lastChildren, nextChildren, dom, mountedQueue, nextVNode);
        }

        if (lastProps !== nextProps) {
            patchProps(lastVNode, nextVNode);
        }

        if (lastClassName !== nextClassName) {
            if ((0, _utils.isNullOrUndefined)(nextClassName)) {
                dom.removeAttribute('class');
            } else {
                dom.className = nextClassName;
            }
        }

        var nextRef = nextVNode.ref;
        if (!(0, _utils.isNullOrUndefined)(nextRef) && lastVNode.ref !== nextRef) {
            (0, _vdom.createRef)(dom, nextRef, mountedQueue);
        }
    }
}

function patchComponentClass(lastVNode, nextVNode, parentDom, mountedQueue, parentVNode) {
    var lastTag = lastVNode.tag;
    var nextTag = nextVNode.tag;
    var dom = lastVNode.dom;

    var instance = void 0;
    var newDom = void 0;

    if (lastTag !== nextTag || lastVNode.key !== nextVNode.key) {
        // we should call this remove function in component's init method
        // because it should be destroyed until async component has rendered
        // removeComponentClassOrInstance(lastVNode, null, nextVNode);
        newDom = (0, _vdom.createComponentClassOrInstance)(nextVNode, parentDom, mountedQueue, lastVNode, false, parentVNode);
    } else {
        instance = lastVNode.children;
        instance.mountedQueue = mountedQueue;
        instance.isRender = false;
        instance.parentVNode = parentVNode;
        newDom = instance.update(lastVNode, nextVNode);
        nextVNode.dom = newDom;
        nextVNode.children = instance;
        nextVNode.parentVNode = parentVNode;

        // for intact.js, the dom will not be removed and
        // the component will not be destoryed, so the ref
        // function need be called in update method.
        var ref = nextVNode.ref;
        if (typeof ref === 'function') {
            ref(instance);
        }
    }

    // perhaps the dom has be replaced
    if (dom !== newDom && dom.parentNode) {
        (0, _vdom.replaceChild)(parentDom, lastVNode, nextVNode);
    }
}

function patchComponentIntance(lastVNode, nextVNode, parentDom, mountedQueue, parentVNode) {
    var lastInstance = lastVNode.children;
    var nextInstance = nextVNode.children;
    var dom = lastVNode.dom;

    var newDom = void 0;

    if (lastInstance !== nextInstance) {
        // removeComponentClassOrInstance(lastVNode, null, nextVNode);
        newDom = (0, _vdom.createComponentClassOrInstance)(nextVNode, parentDom, mountedQueue, lastVNode, false, parentVNode);
    } else {
        lastInstance.mountedQueue = mountedQueue;
        lastInstance.isRender = false;
        lastInstance.parentVNode = parentVNode;
        newDom = lastInstance.update(lastVNode, nextVNode);
        nextVNode.dom = newDom;
        nextVNode.parentVNode = parentVNode;

        var ref = nextVNode.ref;
        if (typeof ref === 'function') {
            ref(instance);
        }
    }

    if (dom !== newDom && dom.parentNode) {
        (0, _vdom.replaceChild)(parentDom, lastVNode, nextVNode);
    }
}

function patchComponentFunction(lastVNode, nextVNode, parentDom, mountedQueue) {
    var lastTag = lastVNode.tag;
    var nextTag = nextVNode.tag;

    if (lastVNode.key !== nextVNode.key) {
        (0, _vdom.removeElements)(lastVNode.children, parentDom);
        (0, _vdom.createComponentFunction)(nextVNode, parentDom, mountedQueue);
    } else {
        nextVNode.dom = lastVNode.dom;
        (0, _vdom.createComponentFunctionVNode)(nextVNode);
        patchChildren(lastVNode.children, nextVNode.children, parentDom, mountedQueue);
    }
}

function patchChildren(lastChildren, nextChildren, parentDom, mountedQueue, parentVNode) {
    if ((0, _utils.isNullOrUndefined)(lastChildren)) {
        if (!(0, _utils.isNullOrUndefined)(nextChildren)) {
            (0, _vdom.createElements)(nextChildren, parentDom, mountedQueue, false, parentVNode);
        }
    } else if ((0, _utils.isNullOrUndefined)(nextChildren)) {
        if ((0, _utils.isStringOrNumber)(lastChildren)) {
            (0, _utils.setTextContent)(parentDom, '');
        } else {
            (0, _vdom.removeElements)(lastChildren, parentDom);
        }
    } else if ((0, _utils.isStringOrNumber)(nextChildren)) {
        if ((0, _utils.isStringOrNumber)(lastChildren)) {
            (0, _utils.setTextContent)(parentDom, nextChildren);
        } else {
            (0, _vdom.removeElements)(lastChildren, parentDom);
            (0, _utils.setTextContent)(parentDom, nextChildren);
        }
    } else if ((0, _utils.isArray)(lastChildren)) {
        if ((0, _utils.isArray)(nextChildren)) {
            patchChildrenByKey(lastChildren, nextChildren, parentDom, mountedQueue, parentVNode);
        } else {
            (0, _vdom.removeElements)(lastChildren, parentDom);
            (0, _vdom.createElement)(nextChildren, parentDom, mountedQueue, false, parentVNode);
        }
    } else if ((0, _utils.isArray)(nextChildren)) {
        if ((0, _utils.isStringOrNumber)(lastChildren)) {
            (0, _utils.setTextContent)(parentDom, '');
        } else {
            (0, _vdom.removeElement)(lastChildren, parentDom);
        }
        (0, _vdom.createElements)(nextChildren, parentDom, mountedQueue, false, parentVNode);
    } else if ((0, _utils.isStringOrNumber)(lastChildren)) {
        (0, _utils.setTextContent)(parentDom, '');
        (0, _vdom.createElement)(nextChildren, parentDom, mountedQueue, false, parentVNode);
    } else {
        patchVNode(lastChildren, nextChildren, parentDom, mountedQueue, parentVNode);
    }
}

function patchChildrenByKey(a, b, dom, mountedQueue, parentVNode) {
    var aLength = a.length;
    var bLength = b.length;
    var aEnd = aLength - 1;
    var bEnd = bLength - 1;
    var aStart = 0;
    var bStart = 0;
    var i = void 0;
    var j = void 0;
    var aNode = void 0;
    var bNode = void 0;
    var nextNode = void 0;
    var nextPos = void 0;
    var node = void 0;
    var aStartNode = a[aStart];
    var bStartNode = b[bStart];
    var aEndNode = a[aEnd];
    var bEndNode = b[bEnd];

    outer: while (true) {
        while (aStartNode.key === bStartNode.key) {
            patchVNode(aStartNode, bStartNode, dom, mountedQueue, parentVNode);
            ++aStart;
            ++bStart;
            if (aStart > aEnd || bStart > bEnd) {
                break outer;
            }
            aStartNode = a[aStart];
            bStartNode = b[bStart];
        }
        while (aEndNode.key === bEndNode.key) {
            patchVNode(aEndNode, bEndNode, dom, mountedQueue, parentVNode);
            --aEnd;
            --bEnd;
            if (aEnd < aStart || bEnd < bStart) {
                break outer;
            }
            aEndNode = a[aEnd];
            bEndNode = b[bEnd];
        }

        if (aEndNode.key === bStartNode.key) {
            patchVNode(aEndNode, bStartNode, dom, mountedQueue, parentVNode);
            dom.insertBefore(bStartNode.dom, aStartNode.dom);
            --aEnd;
            ++bStart;
            aEndNode = a[aEnd];
            bStartNode = b[bStart];
            continue;
        }

        if (aStartNode.key === bEndNode.key) {
            patchVNode(aStartNode, bEndNode, dom, mountedQueue, parentVNode);
            insertOrAppend(bEnd, bLength, bEndNode.dom, b, dom);
            ++aStart;
            --bEnd;
            aStartNode = a[aStart];
            bEndNode = b[bEnd];
            continue;
        }
        break;
    }

    if (aStart > aEnd) {
        while (bStart <= bEnd) {
            insertOrAppend(bEnd, bLength, (0, _vdom.createElement)(b[bStart], null, mountedQueue, false, parentVNode), b, dom, true /* detectParent: for animate, if the parentNode exists, then do nothing*/
            );
            ++bStart;
        }
    } else if (bStart > bEnd) {
        while (aStart <= aEnd) {
            (0, _vdom.removeElement)(a[aStart], dom);
            ++aStart;
        }
    } else {
        aLength = aEnd - aStart + 1;
        bLength = bEnd - bStart + 1;
        var sources = new Array(bLength);
        for (i = 0; i < bLength; i++) {
            sources[i] = -1;
        }
        var moved = false;
        var pos = 0;
        var patched = 0;

        if (bLength <= 4 || aLength * bLength <= 16) {
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLength) {
                    for (j = bStart; j <= bEnd; j++) {
                        bNode = b[j];
                        if (aNode.key === bNode.key) {
                            sources[j - bStart] = i;
                            if (pos > j) {
                                moved = true;
                            } else {
                                pos = j;
                            }
                            patchVNode(aNode, bNode, dom, mountedQueue, parentVNode);
                            ++patched;
                            a[i] = null;
                            break;
                        }
                    }
                }
            }
        } else {
            var keyIndex = {};
            for (i = bStart; i <= bEnd; i++) {
                keyIndex[b[i].key] = i;
            }
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLength) {
                    j = keyIndex[aNode.key];
                    if (j !== undefined) {
                        bNode = b[j];
                        sources[j - bStart] = i;
                        if (pos > j) {
                            moved = true;
                        } else {
                            pos = j;
                        }
                        patchVNode(aNode, bNode, dom, mountedQueue, parentVNode);
                        ++patched;
                        a[i] = null;
                    }
                }
            }
        }
        if (aLength === a.length && patched === 0) {
            // removeAllChildren(dom, a);
            // children maybe have animation
            (0, _vdom.removeElements)(a, dom);
            while (bStart < bLength) {
                (0, _vdom.createElement)(b[bStart], dom, mountedQueue, false, parentVNode);
                ++bStart;
            }
        } else {
            // some browsers, e.g. ie, must insert before remove for some element,
            // e.g. select/option, otherwise the selected property will be weird
            if (moved) {
                var seq = lisAlgorithm(sources);
                j = seq.length - 1;
                for (i = bLength - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        insertOrAppend(pos, b.length, (0, _vdom.createElement)(b[pos], null, mountedQueue, false, parentVNode), b, dom);
                    } else {
                        if (j < 0 || i !== seq[j]) {
                            pos = i + bStart;
                            insertOrAppend(pos, b.length, b[pos].dom, b, dom);
                        } else {
                            --j;
                        }
                    }
                }
            } else if (patched !== bLength) {
                for (i = bLength - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        insertOrAppend(pos, b.length, (0, _vdom.createElement)(b[pos], null, mountedQueue, false, parentVNode), b, dom, true);
                    }
                }
            }
            i = aLength - patched;
            while (i > 0) {
                aNode = a[aStart++];
                if (aNode !== null) {
                    (0, _vdom.removeElement)(aNode, dom);
                    --i;
                }
            }
        }
    }
}

function lisAlgorithm(arr) {
    var p = arr.slice(0);
    var result = [0];
    var i = void 0;
    var j = void 0;
    var u = void 0;
    var v = void 0;
    var c = void 0;
    var len = arr.length;
    for (i = 0; i < len; i++) {
        var arrI = arr[i];
        if (arrI === -1) {
            continue;
        }
        j = result[result.length - 1];
        if (arr[j] < arrI) {
            p[i] = j;
            result.push(i);
            continue;
        }
        u = 0;
        v = result.length - 1;
        while (u < v) {
            c = (u + v) / 2 | 0;
            if (arr[result[c]] < arrI) {
                u = c + 1;
            } else {
                v = c;
            }
        }
        if (arrI < arr[result[u]]) {
            if (u > 0) {
                p[i] = result[u - 1];
            }
            result[u] = i;
        }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
        result[u] = v;
        v = p[v];
    }
    return result;
}

function insertOrAppend(pos, length, newDom, nodes, dom, detectParent) {
    var nextPos = pos + 1;
    // if (detectParent && newDom.parentNode) {
    // return;
    // } else
    if (nextPos < length) {
        dom.insertBefore(newDom, nodes[nextPos].dom);
    } else {
        dom.appendChild(newDom);
        // appendChild(dom, newDom);
    }
}

function replaceElement(lastVNode, nextVNode, parentDom, mountedQueue, parentVNode) {
    (0, _vdom.removeElement)(lastVNode, null);
    (0, _vdom.createElement)(nextVNode, null, mountedQueue, false, parentVNode);
    (0, _vdom.replaceChild)(parentDom, lastVNode, nextVNode);
}

function patchText(lastVNode, nextVNode, parentDom) {
    var nextText = nextVNode.children;
    var dom = lastVNode.dom;
    nextVNode.dom = dom;
    if (lastVNode.children !== nextText) {
        dom.nodeValue = nextText;
    }
}

function patchProps(lastVNode, nextVNode) {
    var lastProps = lastVNode.props;
    var nextProps = nextVNode.props;
    var dom = nextVNode.dom;
    var prop = void 0;
    if (nextProps !== _vnode.EMPTY_OBJ) {
        var isFormElement = (nextVNode.type & _vnode.Types.FormElement) > 0;
        for (prop in nextProps) {
            patchProp(prop, lastProps[prop], nextProps[prop], dom, isFormElement);
        }
        if (isFormElement) {
            (0, _process.processForm)(nextVNode, dom, nextProps, false);
        }
    }
    if (lastProps !== _vnode.EMPTY_OBJ) {
        for (prop in lastProps) {
            if (!(prop in nextProps)) {
                removeProp(prop, lastProps[prop], dom);
            }
        }
    }
}

function patchProp(prop, lastValue, nextValue, dom, isFormElement) {
    if (lastValue !== nextValue) {
        if (_utils.skipProps[prop] || isFormElement && prop === 'value') {
            return;
        } else if (_utils.booleanProps[prop]) {
            dom[prop] = !!nextValue;
        } else if (_utils.strictProps[prop]) {
            var value = (0, _utils.isNullOrUndefined)(nextValue) ? '' : nextValue;
            if (dom[prop] !== value) {
                dom[prop] = value;
            }
            // add a private property _value for select an object
            if (prop === 'value') {
                dom._value = value;
            }
        } else if ((0, _utils.isNullOrUndefined)(nextValue)) {
            removeProp(prop, lastValue, dom);
        } else if ((0, _utils.isEventProp)(prop)) {
            (0, _event.handleEvent)(prop.substr(3), lastValue, nextValue, dom);
        } else if ((0, _utils.isObject)(nextValue)) {
            patchPropByObject(prop, lastValue, nextValue, dom);
        } else if (prop === 'innerHTML') {
            dom.innerHTML = nextValue;
        } else {
            dom.setAttribute(prop, nextValue);
        }
    }
}

function removeProp(prop, lastValue, dom) {
    if (!(0, _utils.isNullOrUndefined)(lastValue)) {
        switch (prop) {
            case 'value':
                dom.value = '';
                return;
            case 'style':
                dom.removeAttribute('style');
                return;
            case 'attributes':
                for (var key in lastValue) {
                    dom.removeAttribute(key);
                }
                return;
            case 'dataset':
                removeDataset(lastValue, dom);
                return;
            default:
                break;
        }

        if (_utils.booleanProps[prop]) {
            dom[prop] = false;
        } else if ((0, _utils.isEventProp)(prop)) {
            (0, _event.handleEvent)(prop.substr(3), lastValue, null, dom);
        } else if ((0, _utils.isObject)(lastValue)) {
            var domProp = dom[prop];
            try {
                dom[prop] = undefined;
                delete dom[prop];
            } catch (e) {
                for (var _key in lastValue) {
                    delete domProp[_key];
                }
            }
        } else {
            dom.removeAttribute(prop);
        }
    }
}

var removeDataset = _utils.browser.isIE ? function (lastValue, dom) {
    for (var key in lastValue) {
        dom.removeAttribute('data-' + kebabCase(key));
    }
} : function (lastValue, dom) {
    var domProp = dom.dataset;
    for (var key in lastValue) {
        delete domProp[key];
    }
};

function patchPropByObject(prop, lastValue, nextValue, dom) {
    if (lastValue && !(0, _utils.isObject)(lastValue) && !(0, _utils.isNullOrUndefined)(lastValue)) {
        removeProp(prop, lastValue, dom);
        lastValue = null;
    }
    switch (prop) {
        case 'attributes':
            return patchAttributes(lastValue, nextValue, dom);
        case 'style':
            return patchStyle(lastValue, nextValue, dom);
        case 'dataset':
            return patchDataset(prop, lastValue, nextValue, dom);
        default:
            return patchObject(prop, lastValue, nextValue, dom);
    }
}

var patchDataset = _utils.browser.isIE ? function patchDataset(prop, lastValue, nextValue, dom) {
    var hasRemoved = {};
    var key = void 0;
    var value = void 0;

    for (key in nextValue) {
        var dataKey = 'data-' + kebabCase(key);
        value = nextValue[key];
        if ((0, _utils.isNullOrUndefined)(value)) {
            dom.removeAttribute(dataKey);
            hasRemoved[key] = true;
        } else {
            dom.setAttribute(dataKey, value);
        }
    }

    if (!(0, _utils.isNullOrUndefined)(lastValue)) {
        for (key in lastValue) {
            if ((0, _utils.isNullOrUndefined)(nextValue[key]) && !hasRemoved[key]) {
                dom.removeAttribute('data-' + kebabCase(key));
            }
        }
    }
} : patchObject;

var _cache = {};
var uppercasePattern = /[A-Z]/g;
function kebabCase(word) {
    if (!_cache[word]) {
        _cache[word] = word.replace(uppercasePattern, function (item) {
            return '-' + item.toLowerCase();
        });
    }
    return _cache[word];
}

function patchObject(prop, lastValue, nextValue, dom) {
    var domProps = dom[prop];
    if ((0, _utils.isNullOrUndefined)(domProps)) {
        domProps = dom[prop] = {};
    }
    var key = void 0;
    var value = void 0;
    for (key in nextValue) {
        domProps[key] = nextValue[key];
    }
    if (!(0, _utils.isNullOrUndefined)(lastValue)) {
        for (key in lastValue) {
            if ((0, _utils.isNullOrUndefined)(nextValue[key])) {
                delete domProps[key];
            }
        }
    }
}

function patchAttributes(lastValue, nextValue, dom) {
    var hasRemoved = {};
    var key = void 0;
    var value = void 0;
    for (key in nextValue) {
        value = nextValue[key];
        if ((0, _utils.isNullOrUndefined)(value)) {
            dom.removeAttribute(key);
            hasRemoved[key] = true;
        } else {
            dom.setAttribute(key, value);
        }
    }
    if (!(0, _utils.isNullOrUndefined)(lastValue)) {
        for (key in lastValue) {
            if ((0, _utils.isNullOrUndefined)(nextValue[key]) && !hasRemoved[key]) {
                dom.removeAttribute(key);
            }
        }
    }
}

function patchStyle(lastValue, nextValue, dom) {
    var domStyle = dom.style;
    var hasRemoved = {};
    var key = void 0;
    var value = void 0;
    for (key in nextValue) {
        value = nextValue[key];
        if ((0, _utils.isNullOrUndefined)(value)) {
            domStyle[key] = '';
            hasRemoved[key] = true;
        } else {
            domStyle[key] = value;
        }
    }
    if (!(0, _utils.isNullOrUndefined)(lastValue)) {
        for (key in lastValue) {
            if ((0, _utils.isNullOrUndefined)(nextValue[key]) && !hasRemoved[key]) {
                domStyle[key] = '';
            }
        }
    }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {exports.__esModule = true;
exports.render = render;
exports.createElement = createElement;
exports.createHtmlElement = createHtmlElement;
exports.createTextElement = createTextElement;
exports.createComponentClassOrInstance = createComponentClassOrInstance;
exports.createComponentFunction = createComponentFunction;
exports.createCommentElement = createCommentElement;
exports.createComponentFunctionVNode = createComponentFunctionVNode;
exports.createElements = createElements;
exports.removeElements = removeElements;
exports.removeElement = removeElement;
exports.removeHtmlElement = removeHtmlElement;
exports.removeText = removeText;
exports.removeComponentFunction = removeComponentFunction;
exports.removeComponentClassOrInstance = removeComponentClassOrInstance;
exports.removeAllChildren = removeAllChildren;
exports.replaceChild = replaceChild;
exports.removeChild = removeChild;
exports.appendChild = appendChild;
exports.createRef = createRef;

var _vnode = __webpack_require__(1);

var _vpatch = __webpack_require__(3);

var _event = __webpack_require__(14);

var _utils = __webpack_require__(0);

var _process = __webpack_require__(6);

function render(vNode, parentDom, mountedQueue, parentVNode) {
    if ((0, _utils.isNullOrUndefined)(vNode)) return;
    var isTrigger = true;
    if (mountedQueue) {
        isTrigger = false;
    } else {
        mountedQueue = new _utils.MountedQueue();
    }
    var dom = createElement(vNode, parentDom, mountedQueue, true /* isRender */, parentVNode);
    if (isTrigger) {
        mountedQueue.trigger();
    }
    return dom;
}

function createElement(vNode, parentDom, mountedQueue, isRender, parentVNode) {
    var type = vNode.type;
    if (type & _vnode.Types.Element) {
        return createHtmlElement(vNode, parentDom, mountedQueue, isRender, parentVNode);
    } else if (type & _vnode.Types.Text) {
        return createTextElement(vNode, parentDom);
    } else if (type & _vnode.Types.ComponentClassOrInstance) {
        return createComponentClassOrInstance(vNode, parentDom, mountedQueue, null, isRender, parentVNode);
        // } else if (type & Types.ComponentFunction) {
        // return createComponentFunction(vNode, parentDom, mountedQueue, isNotAppendChild, isRender);
        // } else if (type & Types.ComponentInstance) {
        // return createComponentInstance(vNode, parentDom, mountedQueue);
    } else if (type & _vnode.Types.HtmlComment) {
        return createCommentElement(vNode, parentDom);
    } else {
        throw new Error('unknown vnode type ' + type);
    }
}

function createHtmlElement(vNode, parentDom, mountedQueue, isRender, parentVNode) {
    var dom = _utils.doc.createElement(vNode.tag);
    var children = vNode.children;
    var props = vNode.props;
    var className = vNode.className;

    vNode.dom = dom;
    vNode.parentVNode = parentVNode;

    if (!(0, _utils.isNullOrUndefined)(children)) {
        createElements(children, dom, mountedQueue, isRender, vNode);
    }

    if (!(0, _utils.isNullOrUndefined)(className)) {
        dom.className = className;
    }

    if (props !== _vnode.EMPTY_OBJ) {
        var isFormElement = (vNode.type & _vnode.Types.FormElement) > 0;
        for (var prop in props) {
            (0, _vpatch.patchProp)(prop, null, props[prop], dom, isFormElement);
        }
        if (isFormElement) {
            (0, _process.processForm)(vNode, dom, props, true);
        }
    }

    var ref = vNode.ref;
    if (!(0, _utils.isNullOrUndefined)(ref)) {
        createRef(dom, ref, mountedQueue);
    }

    if (parentDom) {
        appendChild(parentDom, dom);
    }

    return dom;
}

function createTextElement(vNode, parentDom) {
    var dom = _utils.doc.createTextNode(vNode.children);
    vNode.dom = dom;

    if (parentDom) {
        parentDom.appendChild(dom);
    }

    return dom;
}

function createComponentClassOrInstance(vNode, parentDom, mountedQueue, lastVNode, isRender, parentVNode) {
    var props = vNode.props;
    var instance = vNode.type & _vnode.Types.ComponentClass ? new vNode.tag(props) : vNode.children;
    instance.parentDom = parentDom;
    instance.mountedQueue = mountedQueue;
    instance.isRender = isRender;
    instance.parentVNode = parentVNode;
    var dom = instance.init(lastVNode, vNode);
    var ref = vNode.ref;

    vNode.dom = dom;
    vNode.children = instance;

    if (parentDom) {
        appendChild(parentDom, dom);
        // parentDom.appendChild(dom);
    }

    if (typeof instance.mount === 'function') {
        mountedQueue.push(function () {
            return instance.mount(lastVNode, vNode);
        });
    }

    if (typeof ref === 'function') {
        ref(instance);
    }

    return dom;
}

function createComponentFunction(vNode, parentDom, mountedQueue) {
    var props = vNode.props;
    var ref = vNode.ref;

    createComponentFunctionVNode(vNode);

    var children = vNode.children;
    var dom = void 0;
    // support ComponentFunction return an array for macro usage
    if ((0, _utils.isArray)(children)) {
        dom = [];
        for (var i = 0; i < children.length; i++) {
            dom.push(createElement(children[i], parentDom, mountedQueue));
        }
    } else {
        dom = createElement(vNode.children, parentDom, mountedQueue);
    }
    vNode.dom = dom;

    // if (parentDom) {
    // parentDom.appendChild(dom);
    // }

    if (ref) {
        createRef(dom, ref, mountedQueue);
    }

    return dom;
}

function createCommentElement(vNode, parentDom) {
    var dom = _utils.doc.createComment(vNode.children);
    vNode.dom = dom;

    if (parentDom) {
        parentDom.appendChild(dom);
    }

    return dom;
}

function createComponentFunctionVNode(vNode) {
    var result = vNode.tag(vNode.props);
    if ((0, _utils.isStringOrNumber)(result)) {
        result = (0, _vnode.createTextVNode)(result);
    } else if (process.env.NODE_ENV !== 'production') {
        if ((0, _utils.isArray)(result)) {
            throw new Error('ComponentFunction ' + vNode.tag.name + ' returned a invalid vNode');
        }
    }

    vNode.children = result;

    return vNode;
}

function createElements(vNodes, parentDom, mountedQueue, isRender, parentVNode) {
    if ((0, _utils.isStringOrNumber)(vNodes)) {
        (0, _utils.setTextContent)(parentDom, vNodes);
    } else if ((0, _utils.isArray)(vNodes)) {
        for (var i = 0; i < vNodes.length; i++) {
            createElement(vNodes[i], parentDom, mountedQueue, isRender, parentVNode);
        }
    } else {
        createElement(vNodes, parentDom, mountedQueue, isRender, parentVNode);
    }
}

function removeElements(vNodes, parentDom) {
    if ((0, _utils.isNullOrUndefined)(vNodes)) {
        return;
    } else if ((0, _utils.isArray)(vNodes)) {
        for (var i = 0; i < vNodes.length; i++) {
            removeElement(vNodes[i], parentDom);
        }
    } else {
        removeElement(vNodes, parentDom);
    }
}

function removeElement(vNode, parentDom) {
    var type = vNode.type;
    if (type & _vnode.Types.Element) {
        return removeHtmlElement(vNode, parentDom);
    } else if (type & _vnode.Types.TextElement) {
        return removeText(vNode, parentDom);
    } else if (type & _vnode.Types.ComponentClassOrInstance) {
        return removeComponentClassOrInstance(vNode, parentDom);
    } else if (type & _vnode.Types.ComponentFunction) {
        return removeComponentFunction(vNode, parentDom);
    }
}

function removeHtmlElement(vNode, parentDom) {
    var ref = vNode.ref;
    var props = vNode.props;
    var dom = vNode.dom;

    if (ref) {
        ref(null);
    }

    removeElements(vNode.children, null);

    // remove event
    for (var name in props) {
        var prop = props[name];
        if (!(0, _utils.isNullOrUndefined)(prop) && (0, _utils.isEventProp)(name)) {
            (0, _event.handleEvent)(name.substr(0, 3), prop, null, dom);
        }
    }

    if (parentDom) {
        parentDom.removeChild(dom);
    }
}

function removeText(vNode, parentDom) {
    if (parentDom) {
        parentDom.removeChild(vNode.dom);
    }
}

function removeComponentFunction(vNode, parentDom) {
    var ref = vNode.ref;
    if (ref) {
        ref(null);
    }
    removeElement(vNode.children, parentDom);
}

function removeComponentClassOrInstance(vNode, parentDom, nextVNode) {
    var instance = vNode.children;
    var ref = vNode.ref;

    if (typeof instance.destroy === 'function') {
        instance.destroy(vNode, nextVNode, parentDom);
    }

    if (ref) {
        ref(null);
    }

    // instance destroy method will remove everything
    // removeElements(vNode.props.children, null);

    if (parentDom) {
        // if (typeof instance.unmount === 'function') {
        // if (!instance.unmount(vNode, nextVNode, parentDom)) {
        // parentDom.removeChild(vNode.dom); 
        // }
        // } else {
        // parentDom.removeChild(vNode.dom); 
        removeChild(parentDom, vNode);
        // }
        // parentDom.removeChild(vNode.dom);
    }
}

function removeAllChildren(dom, vNodes) {
    // setTextContent(dom, '');
    // removeElements(vNodes);
}

function replaceChild(parentDom, lastVNode, nextVNode) {
    var lastDom = lastVNode.dom;
    var nextDom = nextVNode.dom;
    if (!parentDom) parentDom = lastDom.parentNode;
    if (lastDom._unmount) {
        lastDom._unmount(lastVNode, parentDom);
        if (!nextDom.parentNode) {
            parentDom.appendChild(nextDom);
        }
    } else {
        parentDom.replaceChild(nextDom, lastDom);
    }
}

function removeChild(parentDom, vNode) {
    var dom = vNode.dom;
    if (dom._unmount) {
        dom._unmount(vNode, parentDom);
    } else {
        parentDom.removeChild(dom);
    }
}

function appendChild(parentDom, dom) {
    if (!dom.parentNode) {
        parentDom.appendChild(dom);
    }
}

function createRef(dom, ref, mountedQueue) {
    if (typeof ref === 'function') {
        mountedQueue.push(function () {
            return ref(dom);
        });
    } else {
        throw new Error('ref must be a function, but got "' + JSON.stringify(ref) + '"');
    }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;

var _vdt = __webpack_require__(16);

var _vdt2 = _interopRequireDefault(_vdt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vdt2.default;
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
exports.processForm = processForm;

var _select = __webpack_require__(19);

var _input = __webpack_require__(20);

var _textarea = __webpack_require__(21);

var _vnode = __webpack_require__(1);

function processForm(vNode, dom, nextProps, isRender) {
    var type = vNode.type;
    if (type & _vnode.Types.InputElement) {
        (0, _input.processInput)(vNode, dom, nextProps, isRender);
    } else if (type & _vnode.Types.TextareaElement) {
        (0, _textarea.processTextarea)(vNode, dom, nextProps, isRender);
    } else if (type & _vnode.Types.SelectElement) {
        (0, _select.processSelect)(vNode, dom, nextProps, isRender);
    }
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;

var _intact = __webpack_require__(10);

var _intact2 = _interopRequireDefault(_intact);

var _vdt = __webpack_require__(5);

var _vdt2 = _interopRequireDefault(_vdt);

var _animate = __webpack_require__(24);

var _animate2 = _interopRequireDefault(_animate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_intact2.default.prototype.Animate = _animate2.default;
_intact2.default.Animate = _animate2.default;
_intact2.default.Vdt = _vdt2.default;
_vdt2.default.configure({
    getModel: function getModel(self, key) {
        return self.get(key);
    },
    setModel: function setModel(self, key, value) {
        // self.set(key, value, {async: true});
        self.set(key, value);
    }
});

exports.default = _intact2.default;
module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(29);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = Intact;

var _utils = __webpack_require__(11);

var _vdt = __webpack_require__(5);

var _vdt2 = _interopRequireDefault(_vdt);

var _misstime = __webpack_require__(12);

var _vdom = __webpack_require__(4);

var _vnode = __webpack_require__(1);

var _utils2 = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Intact(props) {
    var _this = this;

    if (!this.template) {
        throw new Error('Can not instantiate when this.template does not exist.');
    }

    props = (0, _utils.extend)({}, (0, _utils.result)(this, 'defaults'), props);

    this._events = {};
    this.props = {};
    this.vdt = (0, _vdt2.default)(this.template);
    this.set(props, { silent: true });

    // for compatibility v1.0
    this.widgets = this.vdt.widgets || {};
    this._widget = this.props.widget || (0, _utils.uniqueId)('widget');
    this.attributes = this.props;

    this.uniqueId = this._widget;

    this.inited = false;
    this.rendered = false;
    this.mounted = false;
    this.destroyed = false;

    // if the flag is false, every set operation will not lead to update 
    this._startRender = false;

    // for debug
    this.displayName = this.displayName;

    this.addEvents();

    this._updateCount = 0;

    var inited = function inited() {
        _this.inited = true;
        // 为了兼容之前change事件必update的用法
        // this.on('change', () => this.update());
        _this.trigger('$inited', _this);
    };
    var ret = this._init();
    if (ret && ret.then) {
        ret.then(inited);
    } else {
        inited();
    }
}

Intact.prototype = {
    constructor: Intact,

    addEvents: function addEvents() {
        var _this2 = this;

        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

        (0, _utils.each)(props, function (value, key) {
            if ((0, _utils2.isEventProp)(key) && (0, _utils.isFunction)(value)) {
                _this2.on(key.substr(3), value);
            }
        });
    },
    _init: function _init(props) {},
    _create: function _create(lastVNode, nextVNode) {},
    _mount: function _mount(lastVNode, nextVNode) {},
    _beforeUpdate: function _beforeUpdate(lastVNode, nextVNode) {},
    _update: function _update(lastVNode, nextVNode) {},
    _destroy: function _destroy(lastVNode, nextVNode, parentDom) {},
    hydrate: function hydrate(vNode, dom) {
        var _this3 = this;

        var vdt = this.vdt;
        if (!this.inited) {
            this.one('$inited', function () {
                var element = _this3.hydrate(vNode, dom);
                if (dom !== element) {
                    vNode.dom = element;
                }
                _this3._triggerMountedQueue();
                _this3.mount(null, vNode);
            });

            return dom;
        }

        this._startRender = true;
        this.element = vdt.hydrate(this, dom, this.mountedQueue, this.parentDom, vNode);
        this.rendered = true;
        this.trigger('$rendered', this);
        this._create(null, vNode);

        return this.element;
    },
    init: function init(lastVNode, nextVNode) {
        var _this4 = this;

        var vdt = this.vdt;
        this._lastVNode = lastVNode;
        if (!this.inited) {
            // 支持异步组件
            var placeholder = void 0;
            if (lastVNode) {
                placeholder = lastVNode.dom;
                var lastInstance = lastVNode.children;
                vdt.vNode = lastInstance.vdt.vNode;
                // 如果上一个组件是异步组件，并且也还没渲染完成，则直接destroy掉
                // 让它不再渲染了
                if (!lastInstance.inited) {
                    this.__destroyVNode(lastVNode, nextVNode);
                }
            } else {
                var vNode = (0, _misstime.hc)('!');
                placeholder = (0, _misstime.render)(vNode);
                vdt.vNode = vNode;
            }
            this.one('$inited', function () {
                var element = _this4.init(lastVNode, nextVNode);
                var dom = nextVNode.dom;
                // 存在一种情况，组件的第一个元素是一个组件，他们管理的是同一个dom
                // 但是当第一个元素的dom变更时，父组件的vNode却没有变
                // 所以这里强制保持一致
                nextVNode.dom = element;
                if (!lastVNode || lastVNode.key !== nextVNode.key) {
                    dom.parentNode.replaceChild(element, dom);
                }
                _this4._triggerMountedQueue();
                _this4.mount(lastVNode, nextVNode);
            });
            vdt.node = placeholder;
            return placeholder;
        }

        this._startRender = true;
        // 如果key不相同，则不复用dom，直接返回新dom来替换
        if (lastVNode && lastVNode.key === nextVNode.key) {
            // destroy the last component
            if (!lastVNode.children.destroyed) {
                this.__destroyVNode(lastVNode, nextVNode);
            }

            // make the dom not be replaced, but update the last one
            vdt.vNode = lastVNode.children.vdt.vNode;
            this.element = vdt.update(this, this.parentDom, this.mountedQueue, nextVNode);
        } else {
            if (lastVNode) {
                this.__destroyVNode(lastVNode, nextVNode);
            }
            this.element = vdt.render(this, this.parentDom, this.mountedQueue, nextVNode);
        }
        this.rendered = true;
        if (this._pendingUpdate) {
            this._pendingUpdate(lastVNode, nextVNode);
            this._pendingUpdate = null;
        }
        this.trigger('$rendered', this);
        this._create(lastVNode, nextVNode);

        return this.element;
    },
    toString: function toString() {
        return this.vdt.renderString(this);
    },
    __destroyVNode: function __destroyVNode(lastVNode, nextVNode) {
        (0, _vdom.removeComponentClassOrInstance)(lastVNode, null, nextVNode);
    },
    mount: function mount(lastVNode, nextVNode) {
        // 异步组件，直接返回
        if (!this.inited) return;
        this.mounted = true;
        this.trigger('$mounted', this);
        this._mount(lastVNode, nextVNode);
    },
    update: function update(lastVNode, nextVNode, fromPending) {
        // 如果该组件已被销毁，则不更新
        if (this.destroyed) {
            return lastVNode ? lastVNode.dom : undefined;
        }
        // 如果还没有渲染，则等待结束再去更新
        if (!this.rendered) {
            this._pendingUpdate = function (lastVNode, nextVNode) {
                this.update(lastVNode, nextVNode, true);
            };
            return lastVNode ? lastVNode.dom : undefined;
        }

        if (!nextVNode && !fromPending && this._updateCount === 0) {
            // 如果直接调用update方法，则要清除mountedQueue
            // 如果在render的过程中，又触发了update，则此时
            // 不能清空
            this.mountedQueue = null;
        }

        ++this._updateCount;
        if (this._updateCount > 1) return this.element;
        if (this._updateCount === 1) return this.__update(lastVNode, nextVNode);
    },
    __update: function __update(lastVNode, nextVNode) {
        var _this5 = this;

        // 如果不存在nextVNode，则为直接调用update方法更新自己
        // 否则则是父组件触发的子组件更新，此时需要更新一些状态
        // 有一种情况，在父组件初次渲染时，子组件渲染过程中，
        // 又触发了父组件的数据变更，此时父组件渲染完成执行_pendingUpdate
        // 是没有lastVNode的
        if (nextVNode && lastVNode) {
            this._patchProps(lastVNode.props, nextVNode.props);
        }

        this._beforeUpdate(lastVNode, nextVNode);
        // 直接调用update方法，保持parentVNode不变
        this.element = this.vdt.update(this, this.parentDom, this.mountedQueue, nextVNode || this.parentVNode);
        // 让整个更新完成，才去触发_update生命周期函数
        if (this.mountedQueue) {
            this.mountedQueue.push(function () {
                _this5._update(lastVNode, nextVNode);
            });
        } else {
            this._update(lastVNode, nextVNode);
        }
        if (--this._updateCount > 0) {
            // 如果更新完成，发现还有更新，则是在更新过程中又触发了更新
            // 此时直接将_updateCount置为1，因为所有数据都已更新，只做最后一次模板更新即可
            // --this._updateCount会将该值设为0，所以这里设为1
            this._updateCount = 1;
            return this.__update();
        }

        return this.element;
    },
    _patchProps: function _patchProps(lastProps, nextProps) {
        lastProps = lastProps || _vnode.EMPTY_OBJ;
        nextProps = nextProps || _vnode.EMPTY_OBJ;
        var lastValue = void 0;
        var nextValue = void 0;
        if (lastProps !== nextProps) {
            // 需要先处理事件，因为prop变更可能触发相应的事件
            var lastPropsWithoutEvents = void 0;
            var nextPropsWithoutEvents = void 0;
            if (nextProps !== _vnode.EMPTY_OBJ) {
                for (var prop in nextProps) {
                    nextValue = nextProps[prop];
                    if ((0, _utils2.isEventProp)(prop)) {
                        this.set(prop, nextValue, { silent: true });
                        lastValue = lastProps[prop];
                        if ((0, _utils.isFunction)(nextValue)) {
                            // 更换事件监听函数
                            var eventName = prop.substr(3);
                            if ((0, _utils.isFunction)(lastValue)) {
                                this.off(eventName, lastValue);
                            }
                            this.on(eventName, nextValue);
                        } else if ((0, _utils.isFunction)(lastValue)) {
                            // 解绑事件监听函数
                            this.off(prop.substr(3), lastValue);
                        }
                    } else {
                        if (!nextPropsWithoutEvents) {
                            nextPropsWithoutEvents = {};
                        }
                        nextPropsWithoutEvents[prop] = nextValue;
                    }
                }
                if (lastProps !== _vnode.EMPTY_OBJ) {
                    for (var _prop in lastProps) {
                        if (!_utils.hasOwn.call(nextProps, _prop)) {
                            lastValue = lastProps[_prop];
                            if ((0, _utils2.isEventProp)(_prop) && (0, _utils.isFunction)(lastValue)) {
                                this.set(_prop, undefined, { silent: true });
                                // 如果是事件，则要解绑事件
                                this.off(_prop.substr(3), lastValue);
                            } else {
                                if (!lastPropsWithoutEvents) {
                                    lastPropsWithoutEvents = {};
                                }
                                lastPropsWithoutEvents[_prop] = lastValue;
                            }
                        }
                    }
                }

                if (nextPropsWithoutEvents) {
                    this.set(nextPropsWithoutEvents, { update: false });
                }
            } else {
                for (var _prop2 in lastProps) {
                    lastValue = lastProps[_prop2];
                    if ((0, _utils2.isEventProp)(_prop2) && (0, _utils.isFunction)(lastValue)) {
                        this.set(_prop2, undefined, { silent: true });
                        // 如果是事件，则要解绑事件
                        this.off(_prop2.substr(3), lastValue);
                    } else {
                        if (!lastPropsWithoutEvents) {
                            lastPropsWithoutEvents = {};
                        }
                        lastPropsWithoutEvents[_prop2] = lastValue;
                    }
                }
            }

            // 将不存在nextProps中，但存在lastProps中的属性，统统置为空
            if (lastPropsWithoutEvents) {
                for (var _prop3 in lastPropsWithoutEvents) {
                    this.set(_prop3, undefined, { update: false });
                }
            }
        }
    },
    destroy: function destroy(lastVNode, nextVNode, parentDom) {
        if (this.destroyed) {
            return console.warn('destroyed multiple times');
        }
        var vdt = this.vdt;
        // 异步组件，可能还没有渲染
        if (!this.rendered) {
            // 异步组件，只有开始渲染时才销毁上一个组件
            // 如果没有渲染当前异步组件就被销毁了，则要
            // 在这里销毁上一个组件
            var _lastVNode = this._lastVNode;
            if (_lastVNode && !_lastVNode.children.destroyed) {
                (0, _vdom.removeComponentClassOrInstance)(_lastVNode, null, lastVNode);
            }
        } else if (!nextVNode || nextVNode.key !== lastVNode.key) {
            vdt.destroy();
        }
        this._destroy(lastVNode, nextVNode);
        this.off();
        this.destroyed = true;
    },


    // function name conflict with utils.get
    get: function _get(key, defaultValue) {
        if (key === undefined) return this.props;

        return (0, _utils.get)(this.props, key, defaultValue);
    },

    set: function _set(key, val, options) {
        var _this6 = this;

        if ((0, _utils2.isNullOrUndefined)(key)) return this;

        var isSetByObject = false;
        if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
            options = val;
            isSetByObject = true;
        }
        options = (0, _utils.extend)({
            silent: false,
            update: true,
            async: false
        }, options);
        // 兼容老版本
        if (_utils.hasOwn.call(options, 'global')) {
            options.update = options.global;
        }

        var props = this.props;
        var changes = {};

        var hasChanged = false;

        // 前面做了undefined的判断，这里不可能为undefined了
        if (isSetByObject) {
            if (!options.silent) {
                for (var prop in key) {
                    var nextValue = key[prop];
                    var lastValue = props[prop];
                    if (!(0, _utils.isEqual)(lastValue, nextValue)) {
                        changes[prop] = [lastValue, nextValue];
                        hasChanged = true;
                    }
                    // 即使相等，也要重新复制，因为有可能引用地址变更
                    props[prop] = nextValue;
                }
            } else {
                // 如果静默更新，则直接赋值
                (0, _utils.extend)(props, key);
            }
        } else {
            if (!options.silent) {
                var _lastValue2 = (0, _utils.get)(props, key);
                if (!(0, _utils.isEqual)(_lastValue2, val)) {
                    if (!_utils.hasOwn.call(props, key)) {
                        changes[key] = [_lastValue2, val];
                        var path = (0, _utils.castPath)(key);
                        // 如果是像'a.b.c'这样设置属性，而该属性不存在
                        // 依次触发change:a.b.c、change:a.b、change:a这样的事件
                        // 先不设置props，去取老值
                        var _props = [];
                        for (var i = path.length - 1; i > 0; i--) {
                            var _prop4 = path.slice(0, i).join('.');
                            var _lastValue = (0, _utils.get)(props, _prop4);
                            changes[_prop4] = [_lastValue];
                            _props.push(_prop4);
                        }
                        // 设置props后，去取新值
                        // 对于引用数据类型，新老值可能一样
                        (0, _utils.set)(props, key, val);
                        for (var _i = 0; _i < _props.length; _i++) {
                            var _prop5 = _props[_i];
                            changes[_prop5].push((0, _utils.get)(props, _prop5));
                        }
                    } else {
                        // 否则，只触发change:a.b.c
                        changes[key] = [_lastValue2, val];
                        (0, _utils.set)(props, key, val);
                    }

                    hasChanged = true;
                } else {
                    (0, _utils.set)(props, key, val);
                }
            } else {
                (0, _utils.set)(props, key, val);
            }
        }

        if (hasChanged) {
            // trigger `change*` events
            for (var _prop6 in changes) {
                var values = changes[_prop6];
                this.trigger('$change:' + _prop6, this, values[1], values[0]);
            }
            var changeKeys = (0, _utils.keys)(changes);
            // 之前存在触发change就会调用update的用法，这里传入true做兼容
            // 如果第三个参数为true，则不update
            this.trigger('$change', this, changeKeys);

            var triggerChangedEvent = function triggerChangedEvent() {
                for (var _prop7 in changes) {
                    var _values = changes[_prop7];
                    _this6.trigger('$changed:' + _prop7, _this6, _values[1], _values[0]);
                }
                _this6.trigger('$changed', _this6, changeKeys);
            };
            if (options.update && this._startRender) {
                clearTimeout(this._asyncUpdate);
                var triggerChange = function triggerChange() {
                    _this6.update();
                    triggerChangedEvent();
                };
                if (options.async) {
                    this._asyncUpdate = setTimeout(triggerChange);
                } else {
                    triggerChange();
                }
            } else if (this.mountedQueue && this._startRender) {
                this.mountedQueue.push(triggerChangedEvent);
            }
        }

        return this;
    },

    on: function on(name, callback) {
        (this._events[name] || (this._events[name] = [])).push(callback);

        return this;
    },
    one: function one(name, callback) {
        var _this7 = this;

        var fn = function fn() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            callback.apply(_this7, args);
            _this7.off(name, fn);
        };
        this.on(name, fn);

        return this;
    },
    off: function off(name, callback) {
        if (name === undefined) {
            this._events = {};
            return this;
        }

        var callbacks = this._events[name];
        if (!callbacks) return this;

        if (callback === undefined) {
            delete this._events[name];
            return this;
        }

        for (var cb, i = 0; i < callbacks.length; i++) {
            cb = callbacks[i];
            if (cb === callback) {
                callbacks.splice(i, 1);
                i--;
            }
        }

        return this;
    },
    trigger: function trigger(name) {
        var callbacks = this._events[name];

        if (callbacks) {
            callbacks = callbacks.slice();

            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
            }

            for (var i = 0, l = callbacks.length; i < l; i++) {
                callbacks[i].apply(this, args);
            }
        }

        return this;
    },
    _initMountedQueue: function _initMountedQueue() {
        this.mountedQueue = new _utils2.MountedQueue();
    },
    _triggerMountedQueue: function _triggerMountedQueue() {
        this.mountedQueue.trigger();
    }
};

/**
 * @brief 继承某个组件
 *
 * @param prototype
 */
Intact.extend = function () {
    var prototype = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (_typeof(this.prototype.defaults) === 'object' && _typeof(prototype.defaults) === 'object') {
        prototype.defaults = (0, _utils.extend)({}, this.prototype.defaults, prototype.defaults);
    }
    return (0, _utils.inherit)(this, prototype);
};

/**
 * 挂载组件到dom中
 * @param Component {Intact} Intact类或子类
 * @param node {Node} html节点
 */
Intact.mount = function (Component, node) {
    if (!node) throw new Error('expect a parent dom to mount Component, but got ' + node);
    var vNode = (0, _misstime.h)(Component);
    var mountedQueue = new _utils2.MountedQueue();
    (0, _misstime.render)(vNode, node, mountedQueue);
    var instance = vNode.children;
    // 如果不是异步组件，则触发mount事件，否则
    // 交给组件的init方法，等异步处理完成后触发
    if (instance.inited) {
        mountedQueue.trigger();
    }
    return instance;
};

Intact.hydrate = function (Component, node) {
    if (!node) throw new Error('expect a parent dom to hydrate Component, but got ' + node);
    var vNode = (0, _misstime.h)(Component);
    (0, _misstime.hydrateRoot)(vNode, node);
    return vNode.children;
};
module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
exports.keys = exports.inBrowser = exports.noop = exports.isNullOrUndefined = exports.hasOwn = exports.isObject = exports.each = exports.isArray = exports.extend = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.inherit = inherit;
exports.create = create;
exports.isFunction = isFunction;
exports.result = result;
exports.bind = bind;
exports.isEqual = isEqual;
exports.uniqueId = uniqueId;
exports.values = values;
exports.castPath = castPath;
exports.get = get;
exports.set = set;

var _utils = __webpack_require__(2);

var _utils2 = __webpack_require__(0);

exports.extend = _utils.extend;
exports.isArray = _utils.isArray;
exports.each = _utils.each;
exports.isObject = _utils.isObject;
exports.hasOwn = _utils.hasOwn;
exports.isNullOrUndefined = _utils2.isNullOrUndefined;
exports.noop = _utils.noop;
var inBrowser = exports.inBrowser = typeof window !== 'undefined';

/**
 * inherit
 * @param Parent
 * @param prototype
 * @returns {Function}
 */
function inherit(Parent, prototype) {
    var Child = function Child() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return Parent.apply(this, args);
    };

    Child.prototype = create(Parent.prototype);
    (0, _utils.each)(prototype, function (proto, name) {
        if (name === 'displayName') {
            Child.displayName = proto;
        }
        if (!isFunction(proto) || name === 'template') {
            Child.prototype[name] = proto;
            return;
        }
        Child.prototype[name] = function () {
            var _super = function _super() {
                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                return Parent.prototype[name].apply(this, args);
            },
                _superApply = function _superApply(args) {
                return Parent.prototype[name].apply(this, args);
            };
            return function () {
                var self = this || {},
                    __super = self._super,
                    __superApply = self._superApply,
                    returnValue = void 0;

                self._super = _super;
                self._superApply = _superApply;

                for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                    args[_key3] = arguments[_key3];
                }

                returnValue = proto.apply(this, args);

                self._super = __super;
                self._superApply = __superApply;

                return returnValue;
            };
        }();
    });
    Child.__super = Parent.prototype;
    Child.prototype.constructor = Child;

    (0, _utils.extend)(Child, Parent);

    return Child;
}

var nativeCreate = Object.create;
function create(object) {
    if (nativeCreate) {
        return nativeCreate(object);
    } else {
        var fn = function fn() {};
        fn.prototype = object;
        return new fn();
    }
}

function isFunction(obj) {
    return typeof obj === 'function';
}

function result(obj, property, fallback) {
    var value = (0, _utils2.isNullOrUndefined)(obj) ? undefined : obj[property];
    if (value === undefined) {
        value = fallback;
    }
    return isFunction(value) ? value.call(obj) : value;
}

var executeBound = function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = create(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if ((0, _utils.isObject)(result)) return result;
    return self;
};
var nativeBind = Function.prototype.bind;
function bind(func, context) {
    for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        args[_key4 - 2] = arguments[_key4];
    }

    if (nativeBind && func.bind === nativeBind) {
        return nativeBind.call.apply(nativeBind, [func, context].concat(args));
    }
    if (!isFunction(func)) throw new TypeError('Bind must be called on a function');
    var bound = function bound() {
        for (var _len5 = arguments.length, args1 = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args1[_key5] = arguments[_key5];
        }

        return executeBound(func, bound, context, this, [].concat(args, args1));
    };
    return bound;
}

var toString = Object.prototype.toString;
// Internal recursive comparison function for `isEqual`.
var eq = function eq(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if ((0, _utils2.isNullOrUndefined)(a) || (0, _utils2.isNullOrUndefined)(b)) return a === b;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        case '[object RegExp]':
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
        case '[object String]':
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return '' + a === '' + b;
        case '[object Number]':
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN
            if (+a !== +a) return +b !== +b;
            // An `egal` comparison is performed for other numeric values.
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case '[object Date]':
        case '[object Boolean]':
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
        if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) != 'object' || (typeof b === 'undefined' ? 'undefined' : _typeof(b)) != 'object') return false;

        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        var aCtor = a.constructor,
            bCtor = b.constructor;
        if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && 'constructor' in a && 'constructor' in b) {
            return false;
        }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        length = a.length;
        if (length !== b.length) return false;
        // Deep compare the contents, ignoring non-numeric properties.
        while (length--) {
            if (!eq(a[length], b[length], aStack, bStack)) return false;
        }
    } else {
        // Deep compare objects.
        var aKeys = keys(a),
            key;
        length = aKeys.length;
        // Ensure that both objects contain the same number of properties before comparing deep equality.
        if (keys(b).length !== length) return false;
        while (length--) {
            // Deep compare each member
            key = aKeys[length];
            if (!(_utils.hasOwn.call(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
        }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
};

function isEqual(a, b) {
    return eq(a, b);
}

var idCounter = 0;
function uniqueId(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
}

var keys = exports.keys = Object.keys || function (obj) {
    var ret = [];
    (0, _utils.each)(obj, function (value, key) {
        return ret.push(key);
    });
    return ret;
};

function values(obj) {
    var ret = [];
    (0, _utils.each)(obj, function (value) {
        return ret.push(value);
    });
    return ret;
}

var pathMap = {},
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    reEscapeChar = /\\(\\)?/g,
    reIsUint = /^(?:0|[1-9]\d*)$/;
function castPath(path) {
    if (typeof path !== 'string') return path;
    if (pathMap[path]) return pathMap[path];

    var ret = [];
    if (reLeadingDot.test(path)) {
        result.push('');
    }
    path.replace(rePropName, function (match, number, quote, string) {
        ret.push(quote ? path.replace(reEscapeChar, '$1') : number || match);
    });
    pathMap[path] = ret;

    return ret;
}
function isIndex(value) {
    return (typeof value === 'number' || reIsUint.test(value)) && value > -1 && value % 1 === 0;
}
function get(object, path, defaultValue) {
    if (_utils.hasOwn.call(object, path)) return object[path];
    path = castPath(path);

    var index = 0,
        length = path.length;

    while (!(0, _utils2.isNullOrUndefined)(object) && index < length) {
        object = object[path[index++]];
    }

    return index && index === length ? object : defaultValue;
}
function set(object, path, value) {
    if (_utils.hasOwn.call(object, path)) {
        object[path] = value;
        return object;
    }

    path = castPath(path);

    var index = -1,
        length = path.length,
        lastIndex = length - 1,
        nested = object;
    while (!(0, _utils2.isNullOrUndefined)(nested) && ++index < length) {
        var key = path[index],
            newValue = value;
        if (index !== lastIndex) {
            var objValue = nested[key];
            newValue = (0, _utils.isObject)(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
        }
        nested[key] = newValue;
        nested = nested[key];
    }

    return object;
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
exports.hydrate = exports.hydrateRoot = exports.renderString = exports.MountedQueue = exports.remove = exports.hu = exports.hc = exports.render = exports.patch = exports.h = undefined;

var _vnode = __webpack_require__(1);

var _vpatch = __webpack_require__(3);

var _vdom = __webpack_require__(4);

var _utils = __webpack_require__(0);

var _tostring = __webpack_require__(22);

var _hydration = __webpack_require__(23);

exports.h = _vnode.createVNode;
exports.patch = _vpatch.patch;
exports.render = _vdom.render;
exports.hc = _vnode.createCommentVNode;
exports.hu = _vnode.createUnescapeTextVNode;
exports.remove = _vdom.removeElement;
exports.MountedQueue = _utils.MountedQueue;
exports.renderString = _tostring.toString;
exports.hydrateRoot = _hydration.hydrateRoot;
exports.hydrate = _hydration.hydrate;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
exports.handleEvent = handleEvent;

var _utils = __webpack_require__(0);

var ALL_PROPS = ["altKey", "bubbles", "cancelable", "ctrlKey", "eventPhase", "metaKey", "relatedTarget", "shiftKey", "target", "timeStamp", "type", "view", "which"];
var KEY_PROPS = ["char", "charCode", "key", "keyCode"];
var MOUSE_PROPS = ["button", "buttons", "clientX", "clientY", "layerX", "layerY", "offsetX", "offsetY", "pageX", "pageY", "screenX", "screenY", "toElement"];

var rkeyEvent = /^key|input/;
var rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/;

function Event(e) {
    for (var i = 0; i < ALL_PROPS.length; i++) {
        var propKey = ALL_PROPS[i];
        this[propKey] = e[propKey];
    }

    if (!e.target) {
        this.target = e.srcElement;
    }

    this._rawEvent = e;
}
Event.prototype.preventDefault = function () {
    var e = this._rawEvent;
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
};
Event.prototype.stopPropagation = function () {
    var e = this._rawEvent;
    e.cancelBubble = true;
    e.stopImmediatePropagation && e.stopImmediatePropagation();
};

function MouseEvent(e) {
    Event.call(this, e);
    for (var j = 0; j < MOUSE_PROPS.length; j++) {
        var mousePropKey = MOUSE_PROPS[j];
        this[mousePropKey] = e[mousePropKey];
    }
}
MouseEvent.prototype = (0, _utils.createObject)(Event.prototype);
MouseEvent.prototype.constructor = MouseEvent;

function KeyEvent(e) {
    Event.call(this, e);
    for (var j = 0; j < KEY_PROPS.length; j++) {
        var keyPropKey = KEY_PROPS[j];
        this[keyPropKey] = e[keyPropKey];
    }
}
KeyEvent.prototype = (0, _utils.createObject)(Event.prototype);
KeyEvent.prototype.constructor = KeyEvent;

function proxyEvent(e) {
    if (rkeyEvent.test(e.type)) {
        return new KeyEvent(e);
    } else if (rmouseEvent.test(e.type)) {
        return new MouseEvent(e);
    } else {
        return new Event(e);
    }
}

var addEventListener = void 0;
var removeEventListener = void 0;
if ('addEventListener' in _utils.doc) {
    addEventListener = function addEventListener(dom, name, fn) {
        dom.addEventListener(name, fn, false);
    };

    removeEventListener = function removeEventListener(dom, name, fn) {
        dom.removeEventListener(name, fn);
    };
} else {
    addEventListener = function addEventListener(dom, name, fn) {
        dom.attachEvent("on" + name, fn);
    };

    removeEventListener = function removeEventListener(dom, name, fn) {
        dom.detachEvent("on" + name, fn);
    };
}

var delegatedEvents = {};
var unDelegatesEvents = {
    'mouseenter': true,
    'mouseleave': true
};

function handleEvent(name, lastEvent, nextEvent, dom) {
    if (name === 'blur') {
        name = 'focusout';
    } else if (name === 'focus') {
        name = 'focusin';
    }

    if (!unDelegatesEvents[name]) {
        var delegatedRoots = delegatedEvents[name];

        if (nextEvent) {
            if (!delegatedRoots) {
                delegatedRoots = { items: new _utils.SimpleMap(), docEvent: null };
                delegatedRoots.docEvent = attachEventToDocument(name, delegatedRoots);
                delegatedEvents[name] = delegatedRoots;
            }
            delegatedRoots.items.set(dom, nextEvent);
        } else if (delegatedRoots) {
            var items = delegatedRoots.items;
            if (items.delete(dom)) {
                if (items.size === 0) {
                    removeEventListener(_utils.doc, name, delegatedRoots.docEvent);
                    delete delegatedRoots[name];
                }
            }
        }
    } else {
        if (lastEvent) {
            removeEventListener(dom, name, lastEvent);
        }
        if (nextEvent) {
            addEventListener(dom, name, nextEvent);
        }
    }
}

function dispatchEvent(event, target, items, count, isClick) {
    var eventToTrigger = items.get(target);
    if (eventToTrigger) {
        count--;
        event.currentTarget = target;
        eventToTrigger(event);
        if (event._rawEvent.cancelBubble) {
            return;
        }
    }
    if (count > 0) {
        var parentDom = target.parentNode;
        if ((0, _utils.isNullOrUndefined)(parentDom) || isClick && parentDom.nodeType === 1 && parentDom.disabled) {
            return;
        }
        dispatchEvent(event, parentDom, items, count, isClick);
    }
}

function attachEventToDocument(name, delegatedRoots) {
    var docEvent = function docEvent(event) {
        var count = delegatedRoots.items.size;
        event || (event = window.event);
        if (count > 0) {
            event = proxyEvent(event);
            dispatchEvent(event, event.target, delegatedRoots.items, count, event.type === 'click');
        }
    };
    addEventListener(_utils.doc, name, docEvent);
    return docEvent;
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Intact) {var _app = __webpack_require__(25);

var _app2 = _interopRequireDefault(_app);

var _director = __webpack_require__(30);

var _layout = __webpack_require__(31);

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = Intact.mount(_app2.default, document.getElementById('page'));

var router = (0, _director.Router)({
    '/': function _() {
        __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(33)]; (app.run().apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    '/document/:title': function documentTitle(title) {
        __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(34)]; (app.run({
            title: title
        }).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}).configure({
    notfound: function notfound() {
        router.setRoute('/');
    }
});

router.init('/document/start');
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = Vdt;

var _parser = __webpack_require__(17);

var _parser2 = _interopRequireDefault(_parser);

var _stringifier = __webpack_require__(18);

var _stringifier2 = _interopRequireDefault(_stringifier);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

var _misstime = __webpack_require__(12);

var miss = _interopRequireWildcard(_misstime);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parser = new _parser2.default();
var stringifier = new _stringifier2.default();

function Vdt(source, options) {
    if (!(this instanceof Vdt)) return new Vdt(source, options);

    this.template = compile(source, options);
    this.data = null;
    this.vNode = null;
    this.node = null;
    this.widgets = {};
}
Vdt.prototype = {
    constructor: Vdt,

    render: function render(data, parentDom, queue, parentVNode) {
        this.renderVNode(data);
        this.node = miss.render(this.vNode, parentDom, queue, parentVNode);

        return this.node;
    },
    renderVNode: function renderVNode(data) {
        if (data !== undefined) {
            this.data = data;
        }
        this.vNode = this.template(this.data, Vdt);

        return this.vNode;
    },
    renderString: function renderString(data) {
        this.renderVNode(data);

        return miss.renderString(this.vNode, null, Vdt.configure().disableSplitText);
    },
    update: function update(data, parentDom, queue, parentVNode) {
        var oldVNode = this.vNode;
        this.renderVNode(data);
        this.node = miss.patch(oldVNode, this.vNode, parentDom, queue, parentVNode);

        return this.node;
    },
    hydrate: function hydrate(data, dom, queue, parentDom, parentVNode) {
        this.renderVNode(data);
        miss.hydrate(this.vNode, dom, queue, parentDom, parentVNode);
        this.node = this.vNode.dom;

        return this.node;
    },
    destroy: function destroy() {
        miss.remove(this.vNode);
    }
};

function compile(source, options) {
    var templateFn;

    // backward compatibility v0.2.2
    if (options === true || options === false) {
        options = { autoReturn: options };
    }

    options = utils.extend({}, utils.configure(), options);

    switch (typeof source === 'undefined' ? 'undefined' : _typeof(source)) {
        case 'string':
            var ast = parser.parse(source, options),
                hscript = stringifier.stringify(ast, options.autoReturn);

            hscript = ['_Vdt || (_Vdt = Vdt);', 'obj || (obj = {});', 'blocks || (blocks = {});', 'var h = _Vdt.miss.h, hc = _Vdt.miss.hc, hu = _Vdt.miss.hu, widgets = this && this.widgets || {}, _blocks = {}, __blocks = {},', '__u = _Vdt.utils, extend = __u.extend, _e = __u.error, _className = __u.className,', '__o = __u.Options, _getModel = __o.getModel, _setModel = __o.setModel,', '_setCheckboxModel = __u.setCheckboxModel, _detectCheckboxChecked = __u.detectCheckboxChecked,', '_setSelectModel = __u.setSelectModel,', (options.server ? 'require = function(file) { return _Vdt.require(file, "' + options.filename.replace(/\\/g, '\\\\') + '") }, ' : '') + 'self = this.data, scope = obj, Animate = self && self.Animate;', options.noWith ? hscript : ['with (obj) {', hscript, '}'].join('\n')].join('\n');
            templateFn = options.onlySource ? function () {} : new Function('obj', '_Vdt', 'blocks', hscript);
            templateFn.source = 'function(obj, _Vdt, blocks) {\n' + hscript + '\n}';
            break;
        case 'function':
            templateFn = source;
            break;
        default:
            throw new Error('Expect a string or function');
    }

    return templateFn;
}

Vdt.parser = parser;
Vdt.stringifier = stringifier;
Vdt.miss = miss;
Vdt.compile = compile;
Vdt.utils = utils;
Vdt.setDelimiters = utils.setDelimiters;
Vdt.getDelimiters = utils.getDelimiters;
Vdt.configure = utils.configure;

// for compatibility v1.0
Vdt.virtualDom = miss;
module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
exports.default = Parser;

var _utils = __webpack_require__(2);

var Utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Type = Utils.Type,
    TypeName = Utils.TypeName; /**
                                * @fileoverview parse jsx to ast
                                * @author javey
                                * @date 15-4-22
                                */

var elementNameRegexp = /^<\w+:?\s*[\w\/>]/;

function isJSXIdentifierPart(ch) {
    return ch === 58 || ch === 95 || ch === 45 || ch === 36 || // : and _ (underscore) and - $
    ch >= 65 && ch <= 90 || // A..Z
    ch >= 97 && ch <= 122 || // a..z
    ch >= 48 && ch <= 57; // 0..9
}

function Parser() {
    this.source = '';
    this.index = 0;
    this.length = 0;
}

Parser.prototype = {
    constructor: Parser,

    parse: function parse(source, options) {
        this.source = Utils.trimRight(source);
        this.index = 0;
        this.line = 1;
        this.column = 1;
        this.length = this.source.length;

        this.options = Utils.extend({}, Utils.configure(), options);

        return this._parseTemplate();
    },

    _parseTemplate: function _parseTemplate() {
        var elements = [],
            braces = { count: 0 };
        while (this.index < this.length && braces.count >= 0) {
            elements.push(this._advance(braces));
        }

        return elements;
    },

    _advance: function _advance(braces) {
        var ch = this._char();
        if (ch !== '<') {
            return this._scanJS(braces);
        } else {
            return this._scanJSX();
        }
    },

    _scanJS: function _scanJS(braces) {
        var start = this.index,
            Delimiters = this.options.delimiters;

        while (this.index < this.length) {
            var ch = this._char();
            if (ch === '\'' || ch === '"' || ch === '`') {
                // skip element(<div>) in quotes
                this._scanStringLiteral();
            } else if (this._isElementStart()) {
                break;
            } else {
                if (ch === '{') {
                    braces.count++;
                } else if (braces.count > 0 && ch === '}') {
                    braces.count--;
                } else if (this._isExpect(Delimiters[1])) {
                    // for parseTemplate break
                    braces.count--;
                    break;
                } else if (ch === '\n') {
                    this._updateLine();
                }
                this._updateIndex();
            }
        }

        return this._type(Type.JS, {
            value: this.source.slice(start, this.index)
        });
    },

    _scanStringLiteral: function _scanStringLiteral() {
        var quote = this._char(),
            start = this.index,
            str = '';
        this._updateIndex();

        while (this.index < this.length) {
            var ch = this._char();
            if (ch.charCodeAt(0) === 10) {
                this._updateLine();
            }
            this._updateIndex();

            if (ch === quote) {
                quote = '';
                break;
            } else if (ch === '\\') {
                str += this._char(this._updateIndex());
            } else {
                str += ch;
            }
        }
        if (quote !== '') {
            this._error('Unclosed quote');
        }

        return this._type(Type.StringLiteral, {
            value: this.source.slice(start, this.index)
        });
    },

    _scanJSX: function _scanJSX() {
        return this._parseJSXElement();
    },

    _scanJSXText: function _scanJSXText(stopChars) {
        var start = this.index,
            l = stopChars.length,
            i,
            charCode;

        loop: while (this.index < this.length) {
            charCode = this._charCode();
            if (Utils.isWhiteSpace(charCode)) {
                if (charCode === 10) {
                    this._updateLine();
                }
            } else {
                for (i = 0; i < l; i++) {
                    if (typeof stopChars[i] === 'function' && stopChars[i].call(this) || this._isExpect(stopChars[i])) {
                        break loop;
                    }
                }
            }
            this._updateIndex();
        }

        return this._type(Type.JSXText, {
            value: this.source.slice(start, this.index)
        });
    },

    _scanJSXStringLiteral: function _scanJSXStringLiteral() {
        var quote = this._char();
        if (quote !== '\'' && quote !== '"' && quote !== '`') {
            this._error('String literal must starts with a qoute');
        }
        this._updateIndex();
        var token = this._scanJSXText([quote]);
        this._updateIndex();
        return token;
    },

    _parseJSXElement: function _parseJSXElement() {
        this._expect('<');
        var start = this.index,
            ret = {},
            flag = this._charCode();
        if (flag >= 65 && flag <= 90 /* upper case */) {
                // is a widget
                this._type(Type.JSXWidget, ret);
            } else if (this._isExpect('!--')) {
            // is html comment
            return this._parseJSXComment();
        } else if (this._charCode(this.index + 1) === 58 /* : */) {
                // is a directive
                start += 2;
                switch (flag) {
                    case 116:
                        // t
                        this._type(Type.JSXVdt, ret);
                        break;
                    case 98:
                        // b
                        this._type(Type.JSXBlock, ret);
                        break;
                    default:
                        this._error('Unknown directive ' + String.fromCharCode(flag) + ':');
                }
                this._updateIndex(2);
            } else {
            // is an element
            this._type(Type.JSXElement, ret);
        }

        while (this.index < this.length) {
            if (!isJSXIdentifierPart(this._charCode())) {
                break;
            }
            this._updateIndex();
        }

        ret.value = this.source.slice(start, this.index);

        return this._parseAttributeAndChildren(ret);
    },

    _parseAttributeAndChildren: function _parseAttributeAndChildren(ret) {
        var attrs = this._parseJSXAttribute();
        Utils.extend(ret, {
            attributes: attrs.attributes,
            directives: attrs.directives,
            children: []
        });
        if (!ret.directives.length) delete ret.directives;

        if (ret.type === Type.JSXElement && Utils.isSelfClosingTag(ret.value)) {
            // self closing tag
            if (this._char() === '/') {
                this._updateIndex();
            }
            this._expect('>');
        } else if (this._char() === '/') {
            // unknown self closing tag
            this._updateIndex();
            this._expect('>');
        } else {
            this._expect('>');
            ret.children = this._parseJSXChildren(ret);
        }

        return ret;
    },

    _parseJSXAttribute: function _parseJSXAttribute() {
        var ret = {
            attributes: [],
            directives: []
        };
        while (this.index < this.length) {
            this._skipWhitespace();
            if (this._char() === '/' || this._char() === '>') {
                break;
            } else {
                var attr = this._parseJSXAttributeName();
                if (this._char() === '=') {
                    this._updateIndex();
                    attr.value = this._parseJSXAttributeValue();
                }
                ret[attr.type === Type.JSXAttribute ? 'attributes' : 'directives'].push(attr);
            }
        }

        return ret;
    },

    _parseJSXAttributeName: function _parseJSXAttributeName() {
        var start = this.index;
        if (!isJSXIdentifierPart(this._charCode())) {
            this._error('Unexpected identifier ' + this._char());
        }
        while (this.index < this.length) {
            var ch = this._charCode();
            if (!isJSXIdentifierPart(ch)) {
                break;
            }
            this._updateIndex();
        }

        var name = this.source.slice(start, this.index);
        if (Utils.isDirective(name)) {
            return this._type(Type.JSXDirective, { name: name });
        }

        return this._type(Type.JSXAttribute, { name: name });
    },

    _parseJSXAttributeValue: function _parseJSXAttributeValue() {
        var value,
            Delimiters = this.options.delimiters;
        if (this._isExpect(Delimiters[0])) {
            value = this._parseJSXExpressionContainer();
        } else {
            value = this._scanJSXStringLiteral();
        }
        return value;
    },

    _parseJSXExpressionContainer: function _parseJSXExpressionContainer() {
        var expression,
            Delimiters = this.options.delimiters;
        this._expect(Delimiters[0]);
        if (this._isExpect(Delimiters[1])) {
            expression = this._parseJSXEmptyExpression();
        } else if (this._isExpect('=')) {
            // if the lead char is '=', then treat it as unescape string
            expression = this._parseJSXUnescapeText();
            this._expect(Delimiters[1]);
            return expression;
        } else {
            expression = this._parseExpression();
        }
        this._expect(Delimiters[1]);

        return this._type(Type.JSXExpressionContainer, { value: expression });
    },

    _parseJSXEmptyExpression: function _parseJSXEmptyExpression() {
        return this._type(Type.JSXEmptyExpression, { value: null });
    },

    _parseExpression: function _parseExpression() {
        return this._parseTemplate();
    },

    _parseJSXUnescapeText: function _parseJSXUnescapeText() {
        this._expect('=');
        return this._type(Type.JSXUnescapeText, {
            value: this._parseTemplate()
        });
    },

    _parseJSXChildren: function _parseJSXChildren(element) {
        var children = [],
            endTag = element.value + '>',
            current = null;

        switch (element.type) {
            case Type.JSXBlock:
                endTag = '</b:' + endTag;
                break;
            case Type.JSXVdt:
                endTag = '</t:' + endTag;
                break;
            case Type.JSXElement:
            default:
                endTag = '</' + endTag;
                break;
        }

        this._skipWhitespaceBetweenElements(endTag);
        while (this.index < this.length) {
            if (this._isExpect(endTag)) {
                break;
            }
            current = this._parseJSXChild(element, endTag, current);
            children.push(current);
        }
        this._parseJSXClosingElement();
        return children;
    },

    _parseJSXChild: function _parseJSXChild(element, endTag, prev) {
        var ret,
            Delimiters = this.options.delimiters;

        if (this._isExpect(Delimiters[0])) {
            ret = this._parseJSXExpressionContainer();
        } else if (Utils.isTextTag(element.value)) {
            ret = this._scanJSXText([endTag, Delimiters[0]]);
        } else if (this._isElementStart()) {
            ret = this._parseJSXElement();
            this._skipWhitespaceBetweenElements(endTag);
        } else {
            ret = this._scanJSXText([function () {
                return this._isExpect(endTag) || this._isElementStart();
            }, Delimiters[0]]);
        }

        ret.prev = undefined;
        ret.next = undefined;
        if (prev) {
            prev.next = ret;
            ret.prev = prev;
        }

        return ret;
    },

    _parseJSXClosingElement: function _parseJSXClosingElement() {
        this._expect('</');

        while (this.index < this.length) {
            if (!isJSXIdentifierPart(this._charCode())) {
                break;
            }
            this._updateIndex();
        }

        this._skipWhitespace();
        this._expect('>');
    },

    _parseJSXComment: function _parseJSXComment() {
        this._expect('!--');
        var start = this.index;
        while (this.index < this.length) {
            if (this._isExpect('-->')) {
                break;
            } else if (this._charCode() === 10) {
                this._updateLine();
            }
            this._updateIndex();
        }
        var ret = this._type(Type.JSXComment, {
            value: this.source.slice(start, this.index)
        });
        this._expect('-->');

        return ret;
    },

    _char: function _char() {
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.index;

        return this.source.charAt(index);
    },

    _charCode: function _charCode() {
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.index;

        return this.source.charCodeAt(index);
    },

    _skipWhitespaceBetweenElements: function _skipWhitespaceBetweenElements(endTag) {
        if (!this.options.skipWhitespace) return;

        var start = this.index;
        while (start < this.length) {
            var code = this._charCode(start);
            if (Utils.isWhiteSpace(code)) {
                start++;
            } else if (this._isExpect(endTag, start) || this._isElementStart(start)) {
                this._skipWhitespace();
                break;
            } else {
                break;
            }
        }
    },

    _skipWhitespace: function _skipWhitespace() {
        while (this.index < this.length) {
            var code = this._charCode();
            if (!Utils.isWhiteSpace(code)) {
                break;
            } else if (code === 10) {
                // is \n
                this._updateLine();
            }
            this._updateIndex();
        }
    },

    _expect: function _expect(str) {
        if (!this._isExpect(str)) {
            this._error('expect string ' + str);
        }
        this._updateIndex(str.length);
    },

    _isExpect: function _isExpect(str) {
        var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.index;

        return this.source.slice(index, index + str.length) === str;
    },

    _isElementStart: function _isElementStart() {
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.index;

        return this._char(index) === '<' && (this._isExpect('<!--') || elementNameRegexp.test(this.source.slice(index)));
    },

    _type: function _type(type, ret) {
        ret || (ret = {});
        ret.type = type;
        ret.typeName = TypeName[type];
        ret.line = this.line;
        ret.column = this.column;
        return ret;
    },

    _updateLine: function _updateLine() {
        this.line++;
        this.column = 0;
    },

    _updateIndex: function _updateIndex(value) {
        value === undefined && (value = 1);
        var index = this.index;
        this.index = this.index + value;
        this.column = this.column + value;
        return index;
    },

    _error: function _error(msg) {
        throw new Error(msg + ' At: {line: ' + this.line + ', column: ' + this.column + '} Near: "' + this.source.slice(this.index - 10, this.index + 20) + '"');
    }
};
module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
exports.default = Stringifier;

var _utils = __webpack_require__(2);

var Utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Type = Utils.Type,
    TypeName = Utils.TypeName; /**
                                * @fileoverview stringify ast of jsx to js
                                * @author javey
                                * @date 15-4-22
                                */

var attrMap = function () {
    var map = {
        'class': 'className',
        'for': 'htmlFor'
    };
    return function (name) {
        return map[name] || name;
    };
}();

var normalizeArgs = function normalizeArgs(args) {
    var l = args.length - 1;
    for (var i = l; i >= 0; i--) {
        if (args[i] !== 'null') {
            break;
        }
    }
    return (i === l ? args : args.slice(0, i + 1)).join(', ');
};

function Stringifier() {}

Stringifier.prototype = {
    constructor: Stringifier,

    stringify: function stringify(ast, autoReturn) {
        if (arguments.length === 1) {
            autoReturn = true;
        }
        this.autoReturn = !!autoReturn;
        this.enterStringExpression = false;
        return this._visitJSXExpressionContainer(ast, true);
    },

    _visitJSXExpressionContainer: function _visitJSXExpressionContainer(ast, isRoot) {
        var str = '',
            length = ast.length;
        Utils.each(ast, function (element, i) {
            // if is root, add `return` keyword
            if (this.autoReturn && isRoot && i === length - 1) {
                str += 'return ' + this._visit(element, isRoot);
            } else {
                str += this._visit(element, isRoot);
            }
        }, this);

        if (!isRoot && !this.enterStringExpression) {
            // add [][0] for return /* comment */
            str = 'function() {try {return [' + str + '][0]} catch(e) {_e(e)}}.call(this)';
            // str = 'function() {try {return (' + str + ')} catch(e) {_e(e)}}.call(this)';
        }

        return str;
    },

    _visit: function _visit(element, isRoot) {
        element = element || {};
        switch (element.type) {
            case Type.JS:
                return this._visitJS(element, isRoot);
            case Type.JSXElement:
                return this._visitJSX(element);
            case Type.JSXText:
                return this._visitJSXText(element);
            case Type.JSXUnescapeText:
                return this._visitJSXUnescapeText(element);
            case Type.JSXExpressionContainer:
                return this._visitJSXExpressionContainer(element.value);
            case Type.JSXWidget:
                return this._visitJSXWidget(element);
            case Type.JSXBlock:
                return this._visitJSXBlock(element);
            case Type.JSXVdt:
                return this._visitJSXVdt(element, isRoot);
            case Type.JSXComment:
                return this._visitJSXComment(element);
            default:
                return 'null';
        }
    },

    _visitJS: function _visitJS(element) {
        return this.enterStringExpression ? '(' + element.value + ')' : element.value;
    },

    _visitJSX: function _visitJSX(element) {
        if (element.value === 'script' || element.value === 'style') {
            if (element.children.length) {
                element.attributes.push({
                    type: Type.JSXAttribute,
                    typeName: TypeName[Type.JSXAttribute],
                    name: 'innerHTML',
                    value: {
                        type: Type.JS,
                        typeName: TypeName[Type.JS],
                        value: this._visitJSXChildrenAsString(element.children)
                    }
                });
                element.children = [];
            }
        }

        return this._visitJSXDirective(element, this._visitJSXElement(element));
    },

    _visitJSXElement: function _visitJSXElement(element) {
        var attributes = this._visitJSXAttribute(element, true, true);
        return "h(" + normalizeArgs(["'" + element.value + "'", attributes.props, this._visitJSXChildren(element.children), attributes.className, attributes.key, attributes.ref]) + ')';
    },

    _visitJSXChildren: function _visitJSXChildren(children) {
        var ret = [];
        Utils.each(children, function (child) {
            // if this.element has be handled return directly
            if (child._skip) return;
            ret.push(this._visit(child));
        }, this);

        return ret.length > 1 ? '[' + ret.join(', ') + ']' : ret[0] || 'null';
    },

    _visitJSXDirective: function _visitJSXDirective(element, ret) {
        var directiveFor = {
            data: null,
            value: 'value',
            key: 'key'
        };
        Utils.each(element.directives, function (directive) {
            switch (directive.name) {
                case 'v-if':
                    ret = this._visitJSXDirectiveIf(directive, ret, element);
                    break;
                case 'v-else-if':
                case 'v-else':
                    if (element._skip) break;
                    throw new Error(directive.name + ' must be led with v-if. At: {line: ' + element.line + ', column: ' + element.column + '}');
                case 'v-for':
                    directiveFor.data = this._visitJSXAttributeValue(directive.value);
                    break;
                case 'v-for-value':
                    directiveFor.value = this._visitJSXText(directive.value, true);
                    break;
                case 'v-for-key':
                    directiveFor.key = this._visitJSXText(directive.value, true);
                    break;
                default:
                    break;
            }
        }, this);
        // if exists v-for
        if (directiveFor.data) {
            ret = this._visitJSXDirectiveFor(directiveFor, ret);
        }

        return ret;
    },

    _visitJSXDirectiveIf: function _visitJSXDirectiveIf(directive, ret, element) {
        var result = this._visitJSXAttributeValue(directive.value) + ' ? ' + ret + ' : ',
            hasElse = false,
            next = element,
            emptyTextNodes = [],
            // persist empty text node, skip them if find v-else-if or v-else
        skipNodes = function skipNodes() {
            Utils.each(emptyTextNodes, function (item) {
                item._skip = true;
            });
            emptyTextNodes = [];
        };
        while (next = next.next) {
            if (next.type === Utils.Type.JSXText) {
                if (!/^\s*$/.test(next.value)) break;
                // is not the last text node, mark as handled
                else emptyTextNodes.push(next);
            } else if (next.type === Utils.Type.JSXElement || next.type === Utils.Type.JSXWidget) {
                if (!next.directives || !next.directives.length) break;
                var isContinue = false;
                for (var i = 0, l = next.directives.length; i < l; i++) {
                    var dire = next.directives[i],
                        name = dire.name;
                    if (name === 'v-else-if') {
                        // mark this element as handled
                        next._skip = true;
                        result += this._visitJSXAttributeValue(dire.value) + ' ? ' + this._visit(next) + ' : ';
                        isContinue = true;
                        // mark text node before as handled
                        skipNodes();
                        break;
                    } else if (name === 'v-else') {
                        // mark this element as handled
                        next._skip = true;
                        result += this._visit(next);
                        hasElse = true;
                        // mark text node before as handled
                        skipNodes();
                        break;
                    }
                }
                if (!isContinue) break;
            }
        }
        if (!hasElse) result += 'undefined';
        return result;
    },

    _visitJSXDirectiveFor: function _visitJSXDirectiveFor(directive, ret) {
        return '_Vdt.utils.map(' + directive.data + ', function(' + directive.value + ', ' + directive.key + ') {\n' + 'return ' + ret + ';\n' + '}, this)';
    },

    _visitJSXChildrenAsString: function _visitJSXChildrenAsString(children) {
        var ret = [];
        this.enterStringExpression = true;
        Utils.each(children, function (child) {
            ret.push(this._visit(child));
        }, this);
        this.enterStringExpression = false;
        return ret.join('+');
    },

    _visitJSXAttribute: function _visitJSXAttribute(element, individualClassName, individualKeyAndRef) {
        var ret = [],
            attributes = element.attributes,
            className,
            key,
            ref,
            type = 'text',
            hasModel = false,
            addition = { trueValue: true, falseValue: false };
        Utils.each(attributes, function (attr) {
            var name = attrMap(attr.name),
                value = this._visitJSXAttributeValue(attr.value);
            if (name === 'widget' && attr.value.type === Type.JSXText) {
                // for compatility v1.0
                // convert widget="a" to ref=(i) => widgets.a = i
                ref = 'function(i) {widgets[' + value + '] = i}';
                return;
            } else if (name === 'className') {
                // process className individually
                if (attr.value.type === Type.JSXExpressionContainer) {
                    // for class={ {active: true} }
                    value = '_className(' + value + ')';
                }
                if (individualClassName) {
                    className = value;
                    return;
                }
            } else if (name === 'key' && individualKeyAndRef) {
                key = value;
                return;
            } else if (name === 'ref' && individualKeyAndRef) {
                ref = value;
                return;
            } else if (name === 'v-model') {
                hasModel = value;
                return;
            } else if (name === 'v-model-true') {
                addition.trueValue = value;
                return;
            } else if (name === 'v-model-false') {
                addition.falseValue = value;
                return;
            } else if (name === 'type') {
                // save the type value for v-model of input element
                type = value;
            } else if (name === 'value') {
                addition.value = value;
            }
            ret.push("'" + name + "': " + value);
        }, this);

        if (hasModel) {
            this._visitJSXAttributeModel(element, hasModel, ret, type, addition);
        }

        return {
            props: ret.length ? '{' + ret.join(', ') + '}' : 'null',
            className: className || 'null',
            ref: ref || 'null',
            key: key || 'null'
        };
    },

    _visitJSXAttributeModel: function _visitJSXAttributeModel(element, value, ret, type, addition) {
        var valueName = 'value',
            eventName = 'change';
        if (element.type === Type.JSXElement) {
            switch (element.value) {
                case 'input':
                    valueName = 'value';
                    switch (type) {
                        case "'file'":
                            eventName = 'change';
                            break;
                        case "'radio'":
                        case "'checkbox'":
                            var trueValue = addition.trueValue,
                                falseValue = addition.falseValue,
                                inputValue = addition.value;
                            if (Utils.isNullOrUndefined(inputValue)) {
                                ret.push('checked: _getModel(self, ' + value + ') === ' + trueValue);
                                ret.push('\'ev-change\': function(__e) {\n                                    _setModel(self, ' + value + ', __e.target.checked ? ' + trueValue + ' : ' + falseValue + ');\n                                }');
                            } else {
                                if (type === "'radio'") {
                                    ret.push('checked: _getModel(self, ' + value + ') === ' + inputValue);
                                    ret.push('\'ev-change\': function(__e) { \n                                        _setModel(self, ' + value + ', __e.target.checked ? ' + inputValue + ' : ' + falseValue + ');\n                                    }');
                                } else {
                                    ret.push('checked: _detectCheckboxChecked(self, ' + value + ', ' + inputValue + ')');
                                    ret.push('\'ev-change\': function(__e) { \n                                        _setCheckboxModel(self, ' + value + ', ' + inputValue + ', ' + falseValue + ', __e);\n                                    }');
                                }
                            }
                            return;
                        default:
                            eventName = 'input';
                            break;
                    }
                    break;
                case 'select':
                    ret.push('value: _getModel(self, ' + value + ')');
                    ret.push('\'ev-change\': function(__e) {\n                        _setSelectModel(self, ' + value + ', __e);\n                    }');
                    return;
                case 'textarea':
                    eventName = 'input';
                    break;
                default:
                    break;
            }
            ret.push(valueName + ': _getModel(self, ' + value + ')');
            ret.push('\'ev-' + eventName + '\': function(__e) { _setModel(self, ' + value + ', __e.target.value) }');
        } else if (element.type === Type.JSXWidget) {
            ret.push('value: _getModel(self, ' + value + ')');
            ret.push('\'ev-$change:value\': function(__c, __n) { _setModel(self, ' + value + ', __n) }');
        }
    },

    _visitJSXAttributeValue: function _visitJSXAttributeValue(value) {
        return Utils.isArray(value) ? this._visitJSXChildren(value) : this._visit(value);
    },

    _visitJSXText: function _visitJSXText(element, noQuotes) {
        var ret = element.value.replace(/([\'\"\\])/g, '\\$1').replace(/[\r\n]/g, '\\n');
        if (!noQuotes) {
            ret = "'" + ret + "'";
        }
        return ret;
    },

    _visitJSXUnescapeText: function _visitJSXUnescapeText(element) {
        return 'hu(' + this._visitJSXExpressionContainer(element.value) + ')';
    },

    _visitJSXWidget: function _visitJSXWidget(element) {
        if (element.children.length) {
            element.attributes.push({ name: 'children', value: element.children });
        }
        var attributes = this._visitJSXAttribute(element, false, false);
        return this._visitJSXDirective(element, 'h(' + normalizeArgs([element.value, attributes.props, 'null', 'null', attributes.key, attributes.ref]) + ')');
    },

    _visitJSXBlock: function _visitJSXBlock(element, isAncestor) {
        arguments.length === 1 && (isAncestor = true);

        return '(_blocks.' + element.value + ' = function(parent) {return ' + this._visitJSXChildren(element.children) + ';}) && (__blocks.' + element.value + ' = function(parent) {\n' + 'var self = this;\n' + 'return blocks.' + element.value + ' ? blocks.' + element.value + '.call(this, function() {\n' + 'return _blocks.' + element.value + '.call(self, parent);\n' + '}) : _blocks.' + element.value + '.call(this, parent);\n' + '})' + (isAncestor ? ' && __blocks.' + element.value + '.call(this)' : '');
    },

    _visitJSXVdt: function _visitJSXVdt(element, isRoot) {
        var ret = ['(function(blocks) {', 'var _blocks = {}, __blocks = extend({}, blocks), _obj = ' + this._visitJSXAttribute(element, false, false).props + ' || {};', 'if (_obj.hasOwnProperty("arguments")) { extend(_obj, _obj.arguments === null ? obj : _obj.arguments); delete _obj.arguments; }', 'return ' + element.value + '.call(this, _obj, _Vdt, '].join('\n'),
            blocks = [];

        Utils.each(element.children, function (child) {
            if (child.type === Type.JSXBlock) {
                blocks.push(this._visitJSXBlock(child, false));
            }
        }, this);

        ret += (blocks.length ? blocks.join(' && ') + ' && __blocks)' : '__blocks)') + '}).call(this, ' + (isRoot ? 'blocks)' : '{})');

        return ret;
    },

    _visitJSXComment: function _visitJSXComment(element) {
        return 'hc(' + this._visitJSXText(element) + ')';
    }
};
module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
exports.processSelect = processSelect;

var _utils = __webpack_require__(0);

var _vnode = __webpack_require__(1);

function processSelect(vNode, dom, nextProps, isRender) {
    var multiple = nextProps.multiple;
    if (multiple !== dom.multiple) {
        dom.multiple = multiple;
    }
    var children = vNode.children;

    if (!(0, _utils.isNullOrUndefined)(children)) {
        var value = nextProps.value;
        if (isRender && (0, _utils.isNullOrUndefined)(value)) {
            value = nextProps.defaultValue;
        }

        var flag = { hasSelected: false };
        if ((0, _utils.isArray)(children)) {
            for (var i = 0; i < children.length; i++) {
                updateChildOptionGroup(children[i], value, flag);
            }
        } else {
            updateChildOptionGroup(children, value, flag);
        }
        if (!flag.hasSelected) {
            dom.value = '';
        }
    }
}

function updateChildOptionGroup(vNode, value, flag) {
    var tag = vNode.tag;

    if (tag === 'optgroup') {
        var children = vNode.children;

        if ((0, _utils.isArray)(children)) {
            for (var i = 0; i < children.length; i++) {
                updateChildOption(children[i], value, flag);
            }
        } else {
            updateChildOption(children, value, flag);
        }
    } else {
        updateChildOption(vNode, value, flag);
    }
}

function updateChildOption(vNode, value, flag) {
    // skip text and comment node
    if (vNode.type & _vnode.Types.HtmlElement) {
        var props = vNode.props;
        var dom = vNode.dom;

        if ((0, _utils.isArray)(value) && (0, _utils.indexOf)(value, props.value) !== -1 || props.value === value) {
            dom.selected = true;
            if (!flag.hasSelected) flag.hasSelected = true;
        } else if (!(0, _utils.isNullOrUndefined)(value) || !(0, _utils.isNullOrUndefined)(props.selected)) {
            var selected = !!props.selected;
            if (!flag.hasSelected && selected) flag.hasSelected = true;
            dom.selected = selected;
        }
    }
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
exports.processInput = processInput;

var _utils = __webpack_require__(0);

function processInput(vNode, dom, nextProps) {
    var type = nextProps.type;
    // const value = nextProps.value;
    var checked = nextProps.checked;
    var defaultValue = nextProps.defaultValue;
    var multiple = nextProps.multiple;
    var hasValue = nextProps.hasOwnProperty('value');
    var value = hasValue ? nextProps.value || '' : undefined;

    if (multiple && multiple !== dom.multiple) {
        dom.multiple = multiple;
    }
    if (!(0, _utils.isNullOrUndefined)(defaultValue) && !hasValue) {
        dom.defaultValue = defaultValue + '';
    }
    if (isCheckedType(type)) {
        if (hasValue) {
            dom.value = value;
        }
        if (!(0, _utils.isNullOrUndefined)(checked)) {
            dom.checked = checked;
        }
    } else {
        if (hasValue && dom.value !== value) {
            dom.value = value;
        } else if (!(0, _utils.isNullOrUndefined)(checked)) {
            dom.checked = checked;
        }
    }
}

function isCheckedType(type) {
    return type === 'checkbox' || type === 'radio';
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
exports.processTextarea = processTextarea;

var _utils = __webpack_require__(0);

function processTextarea(vNode, dom, nextProps, isRender) {
    var value = nextProps.value;
    var domValue = dom.value;

    if ((0, _utils.isNullOrUndefined)(value)) {
        if (isRender) {
            var defaultValue = nextProps.defaultValue;
            if (!(0, _utils.isNullOrUndefined)(defaultValue)) {
                if (defaultValue !== domValue) {
                    dom.value = defaultValue;
                }
            } else if (domValue !== '') {
                dom.value = '';
            }
        }
    } else {
        if (domValue !== value) {
            dom.value = value;
        }
    }
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
exports.toString = toString;
exports.escapeText = escapeText;
exports.isString = isString;
exports.isNumber = isNumber;
exports.renderStylesToString = renderStylesToString;
exports.renderDatasetToString = renderDatasetToString;
exports.renderAttributesToString = renderAttributesToString;

var _vnode = __webpack_require__(1);

var _utils = __webpack_require__(0);

var _vpatch = __webpack_require__(3);

function toString(vNode, parent, disableSplitText, firstChild) {
    var type = vNode.type;
    var tag = vNode.tag;
    var props = vNode.props;
    var children = vNode.children;

    var html = void 0;
    if (type & _vnode.Types.ComponentClass) {
        var instance = new tag(props);
        html = instance.toString();
    } else if (type & _vnode.Types.ComponentInstance) {
        html = vNode.children.toString();
    } else if (type & _vnode.Types.Element) {
        var innerHTML = void 0;
        html = '<' + tag;

        if (!(0, _utils.isNullOrUndefined)(vNode.className)) {
            html += ' class="' + escapeText(vNode.className) + '"';
        }

        if (props !== _vnode.EMPTY_OBJ) {
            for (var prop in props) {
                var value = props[prop];

                if (prop === 'innerHTML') {
                    innerHTML = value;
                } else if (prop === 'style') {
                    html += ' style="' + renderStylesToString(value) + '"';
                } else if (prop === 'children' || prop === 'className' || prop === 'key' || prop === 'ref') {
                    // ignore
                } else if (prop === 'defaultValue') {
                    if ((0, _utils.isNullOrUndefined)(props.value)) {
                        html += ' value="' + escapeText(value) + '"';
                    }
                } else if (prop === 'defaultChecked') {
                    if ((0, _utils.isNullOrUndefined)(props.checked) && value === true) {
                        html += ' checked';
                    }
                } else if (prop === 'attributes') {
                    html += renderAttributesToString(value);
                } else if (prop === 'dataset') {
                    html += renderDatasetToString(value);
                } else if (tag === 'option' && prop === 'value') {
                    html += renderAttributeToString(prop, value);
                    if (parent && value === parent.props.value) {
                        html += ' selected';
                    }
                } else {
                    html += renderAttributeToString(prop, value);
                }
            }
        }

        if (_utils.selfClosingTags[tag]) {
            html += ' />';
        } else {
            html += '>';
            if (innerHTML) {
                html += innerHTML;
            } else if (!(0, _utils.isNullOrUndefined)(children)) {
                if (isString(children)) {
                    html += children === '' ? ' ' : escapeText(children);
                } else if (isNumber(children)) {
                    html += children;
                } else if ((0, _utils.isArray)(children)) {
                    var index = -1;
                    for (var i = 0; i < children.length; i++) {
                        var child = children[i];
                        if (isString(child)) {
                            html += child === '' ? ' ' : escapeText(child);
                        } else if (isNumber(child)) {
                            html += child;
                        } else if (!(0, _utils.isNullOrUndefined)(child)) {
                            if (!(child.type & _vnode.Types.Text)) {
                                index = -1;
                            } else {
                                index++;
                            }
                            html += toString(child, vNode, disableSplitText, index === 0);
                        }
                    }
                } else {
                    html += toString(children, vNode, true);
                }
            }

            html += '</' + tag + '>';
        }
    } else if (type & _vnode.Types.Text) {
        html = (firstChild || disableSplitText ? '' : '<!---->') + (children === '' ? ' ' : escapeText(children));
    } else if (type & _vnode.Types.HtmlComment) {
        html = '<!--' + children + '-->';
    } else if (type & _vnode.Types.UnescapeText) {
        html = (0, _utils.isNullOrUndefined)(children) ? '' : children;
    } else {
        throw new Error('Unknown vNode: ' + vNode);
    }

    return html;
}

function escapeText(text) {
    var result = text;
    var escapeString = "";
    var start = 0;
    var i = void 0;
    for (i = 0; i < text.length; i++) {
        switch (text.charCodeAt(i)) {
            case 34:
                // "
                escapeString = "&quot;";
                break;
            case 39:
                // \
                escapeString = "&#039;";
                break;
            case 38:
                // &
                escapeString = "&amp;";
                break;
            case 60:
                // <
                escapeString = "&lt;";
                break;
            case 62:
                // >
                escapeString = "&gt;";
                break;
            default:
                continue;
        }
        if (start) {
            result += text.slice(start, i);
        } else {
            result = text.slice(start, i);
        }
        result += escapeString;
        start = i + 1;
    }
    if (start && i !== start) {
        return result + text.slice(start, i);
    }
    return result;
}

function isString(o) {
    return typeof o === 'string';
}

function isNumber(o) {
    return typeof o === 'number';
}

function renderStylesToString(styles) {
    if ((0, _utils.isStringOrNumber)(styles)) {
        return styles;
    } else {
        var renderedString = "";
        for (var styleName in styles) {
            var value = styles[styleName];

            if ((0, _utils.isStringOrNumber)(value)) {
                renderedString += (0, _vpatch.kebabCase)(styleName) + ':' + value + ';';
            }
        }
        return renderedString;
    }
}

function renderDatasetToString(dataset) {
    var renderedString = '';
    for (var key in dataset) {
        var dataKey = 'data-' + (0, _vpatch.kebabCase)(key);
        var value = dataset[key];
        if (isString(value)) {
            renderedString += ' ' + dataKey + '="' + escapeText(value) + '"';
        } else if (isNumber(value)) {
            renderedString += ' ' + dataKey + '="' + value + '"';
        } else if (value === true) {
            renderedString += ' ' + dataKey + '="true"';
        }
    }
    return renderedString;
}

function renderAttributesToString(attributes) {
    var renderedString = '';
    for (var key in attributes) {
        renderedString += renderAttributeToString(key, attributes[key]);
    }
    return renderedString;
}

function renderAttributeToString(key, value) {
    if (isString(value)) {
        return ' ' + key + '="' + escapeText(value) + '"';
    } else if (isNumber(value)) {
        return ' ' + key + '="' + value + '"';
    } else if (value === true) {
        return ' ' + key;
    } else {
        return '';
    }
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.hydrateRoot = hydrateRoot;
exports.hydrate = hydrate;
exports.hydrateElement = hydrateElement;

var _vnode = __webpack_require__(1);

var _vdom = __webpack_require__(4);

var _utils = __webpack_require__(0);

var _vpatch = __webpack_require__(3);

var _process = __webpack_require__(6);

function hydrateRoot(vNode, parentDom, mountedQueue) {
    if (!(0, _utils.isNullOrUndefined)(parentDom)) {
        var dom = parentDom.firstChild;
        var newDom = hydrate(vNode, dom, mountedQueue, parentDom, null);
        dom = parentDom.firstChild;
        if (dom !== null) {
            // should only one entry
            while (dom = dom.nextSibling) {
                parentDom.removeChild(dom);
            }
        }
        return newDom;
    }
    return null;
}

function hydrate(vNode, dom, mountedQueue, parentDom, parentVNode) {
    if (dom !== null) {
        var isTrigger = true;
        if (mountedQueue) {
            isTrigger = false;
        } else {
            mountedQueue = new _utils.MountedQueue();
        }
        dom = hydrateElement(vNode, dom, mountedQueue, parentDom, parentVNode);
        if (isTrigger) {
            mountedQueue.trigger();
        }
    }
    return dom;
}

function hydrateElement(vNode, dom, mountedQueue, parentDom, parentVNode) {
    var type = vNode.type;

    if (type & _vnode.Types.Element) {
        return hydrateHtmlElement(vNode, dom, mountedQueue, parentDom, parentVNode);
    } else if (type & _vnode.Types.Text) {
        return hydrateText(vNode, dom);
    } else if (type & _vnode.Types.HtmlComment) {
        return hydrateComment(vNode, dom);
    } else if (type & _vnode.Types.ComponentClassOrInstance) {
        return hydrateComponentClassOrInstance(vNode, dom, mountedQueue, parentDom, parentVNode);
    }
}

function hydrateComponentClassOrInstance(vNode, dom, mountedQueue, parentDom, parentVNode) {
    var props = vNode.props;
    var instance = vNode.type & _vnode.Types.ComponentClass ? new vNode.tag(props) : vNode.children;
    instance.parentDom = parentDom;
    instance.mountedQueue = mountedQueue;
    instance.isRender = true;
    instance.parentVNode = parentVNode;
    var newDom = instance.hydrate(vNode, dom);

    vNode.dom = newDom;
    vNode.children = instance;

    if (typeof instance.mount === 'function') {
        mountedQueue.push(function () {
            return instance.mount(null, vNode);
        });
    }

    var ref = vNode.ref;
    if (typeof ref === 'function') {
        ref(instance);
    }

    if (dom !== newDom && dom.parentNode) {
        dom.parentNode.replaceChild(newDom, dom);
    }

    return dom;
}

function hydrateComment(vNode, dom) {
    if (dom.nodeType !== 8) {
        var newDom = (0, _vdom.createCommentElement)(vNode, null);
        dom.parentNode.replaceChild(newDom, dom);
        return newDom;
    }
    var comment = vNode.children;
    if (dom.data !== comment) {
        dom.data = comment;
    }
    vNode.dom = dom;
    return dom;
}

function hydrateText(vNode, dom) {
    if (dom.nodeType !== 3) {
        var newDom = (0, _vdom.createTextElement)(vNode, null);
        dom.parentNode.replaceChild(newDom, dom);

        return newDom;
    }

    var text = vNode.children;
    if (dom.nodeValue !== text) {
        dom.nodeValue = text;
    }
    vNode.dom = dom;

    return dom;
}

function hydrateHtmlElement(vNode, dom, mountedQueue, parentDom, parentVNode) {
    var children = vNode.children;
    var props = vNode.props;
    var className = vNode.className;
    var type = vNode.type;
    var ref = vNode.ref;

    vNode.parentVNode = parentVNode;

    if (dom.nodeType !== 1 || dom.tagName.toLowerCase() !== vNode.tag) {
        warning('Server-side markup doesn\'t match client-side markup');
        var newDom = (0, _vdom.createElement)(vNode, null, mountedQueue, parentDom, parentVNode);
        dom.parentNode.replaceChild(newDom, dom);

        return newDom;
    }

    vNode.dom = dom;
    if (!(0, _utils.isNullOrUndefined)(children)) {
        hydrateChildren(children, dom, mountedQueue, vNode);
    } else if (dom.firstChild !== null) {
        (0, _utils.setTextContent)(dom, '');
    }

    if (props !== _vnode.EMPTY_OBJ) {
        var isFormElement = (type & _vnode.Types.FormElement) > 0;
        for (var prop in props) {
            (0, _vpatch.patchProp)(prop, null, props[prop], dom, isFormElement);
        }
        if (isFormElement) {
            (0, _process.processForm)(vNode, dom, props, true);
        }
    }

    if (!(0, _utils.isNullOrUndefined)(className)) {
        dom.className = className;
    } else if (dom.className !== '') {
        dom.removeAttribute('class');
    }

    if (ref) {
        (0, _vdom.createRef)(dom, ref, mountedQueue);
    }

    return dom;
}

function hydrateChildren(children, parentDom, mountedQueue, parentVNode) {
    normalizeChildren(parentDom);
    var dom = parentDom.firstChild;

    if ((0, _utils.isStringOrNumber)(children)) {
        if (dom !== null && dom.nodeType === 3) {
            if (dom.nodeValue !== children) {
                dom.nodeValue = children;
            }
        } else if (children === '') {
            parentDom.appendChild(document.createTextNode(''));
        } else {
            (0, _utils.setTextContent)(parentDom, children);
        }
        if (dom !== null) {
            dom = dom.nextSibling;
        }
    } else if ((0, _utils.isArray)(children)) {
        for (var i = 0; i < children.length; i++) {
            var child = children[i];

            if (!(0, _utils.isNullOrUndefined)(child)) {
                if (dom !== null) {
                    var nextSibling = dom.nextSibling;
                    hydrateElement(child, dom, mountedQueue, parentDom, parentVNode);
                    dom = nextSibling;
                } else {
                    (0, _vdom.createElement)(child, parentDom, mountedQueue, true, parentVNode);
                }
            }
        }
    } else {
        if (dom !== null) {
            hydrateElement(children, dom, mountedQueue, parentDom, parentVNode);
        } else {
            (0, _vdom.createElement)(children, parentDom, mountedQueue, true, parentVNode);
        }
    }

    // clear any other DOM nodes, there should be on a single entry for the root
    // while (dom) {
    // const nextSibling = dom.nextSibling;
    // parentDom.removeChild(dom);
    // dom = nextSibling;
    // }
}

function normalizeChildren(parentDom) {
    var dom = parentDom.firstChild;

    while (dom) {
        if (dom.nodeType === 8 && dom.data === '') {
            var lastDom = dom.previousSibling;
            parentDom.removeChild(dom);
            dom = lastDom || parentDom.firstChild;
        } else {
            dom = dom.nextSibling;
        }
    }
}

var warning = (typeof console === 'undefined' ? 'undefined' : _typeof(console)) === 'object' ? function (message) {
    console.warn(message);
} : function () {};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
exports.nextFrame = nextFrame;

var _intact = __webpack_require__(10);

var _intact2 = _interopRequireDefault(_intact);

var _vnode = __webpack_require__(1);

var _utils = __webpack_require__(11);

var _vdt = __webpack_require__(5);

var _vdt2 = _interopRequireDefault(_vdt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Animate = void 0;
exports.default = Animate = _intact2.default.extend({
    defaults: {
        'a:tag': 'div',
        'a:transition': 'animate',
        'a:appear': false,
        'a:mode': 'both', // out-in | in-out | both
        'a:disabled': false, // 只做动画管理者，自己不进行动画
        'a:move': true // 是否执行move动画
    },

    template: function template() {
        var h = _vdt2.default.miss.h;
        var self = this.data;
        var tagName = self.get('a:tag');
        var props = {};
        var _props = self.get();
        for (var key in _props) {
            if ((key[0] !== 'a' || key[1] !== ':') && key.substr(0, 5) !== 'ev-a:') {
                props[key] = _props[key];
            }
        }
        return h(tagName, props, self.get('children'));
    },


    init: _utils.inBrowser ? function (lastVNode, nextVNode) {
        this.mountChildren = [];
        this.unmountChildren = [];
        this.updateChildren = [];
        this.children = [];
        this._enteringAmount = 0;
        this._leavingAmount = 0;

        if (this.get('a:disabled')) {
            return this._super(lastVNode, nextVNode);
        }

        var parentDom = this.parentVNode && this.parentVNode.dom || this.parentDom;
        if (parentDom && parentDom._reserve) {
            lastVNode = parentDom._reserve[nextVNode.key];
        }
        return this._super(lastVNode, nextVNode);
    } : function () {
        return this._superApply(arguments);
    },

    _mount: function _mount(lastVNode, vNode) {
        var _this = this;

        if (this.get('a:disabled')) return;

        var isAppear = false;
        if (this.isRender) {
            var parent = void 0;
            if (this.get('a:appear') && (this.parentDom || (parent = this.parentVNode) && parent.type & _vnode.Types.ComponentClassOrInstance && !parent.children.isRender)) {
                isAppear = true;
            }
        }

        var element = this.element;
        var initClassName = function initClassName() {
            var transition = _this.get('a:transition');
            var enterClass = void 0;
            var enterActiveClass = void 0;
            if (isAppear) {
                enterClass = transition + '-appear';
                enterActiveClass = transition + '-appear-active';
            } else {
                enterClass = transition + '-enter';
                enterActiveClass = transition + '-enter-active';
            }

            _this.isAppear = isAppear;
            _this.enterClass = enterClass;
            _this.enterActiveClass = enterActiveClass;
            _this.leaveClass = transition + '-leave';
            _this.leaveActiveClass = transition + '-leave-active';
            _this.moveClass = transition + '-move';
            _this.enterEventName = isAppear ? 'a:appear' : 'a:enter';
        };
        this.on('$change:a:transition', initClassName);
        initClassName();

        // 一个动画元素被删除后，会被保存
        // 如果在删除的过程中，又添加了，则要清除上一个动画状态
        // 将这种情况记录下来
        if (this._lastVNode && this._lastVNode !== lastVNode) {
            var lastInstance = this._lastVNode.children;
            if (lastInstance._leaving) {
                this.lastInstance = lastInstance;
            }
        }

        var parentInstance = this.parentInstance = this._getParentAnimate();

        this._enterEnd = function (e) {
            e && e.stopPropagation && e.stopPropagation();
            removeClass(element, _this.enterClass);
            removeClass(element, _this.enterActiveClass);
            TransitionEvents.off(element, _this._enterEnd);
            _this._entering = false;
            if (parentInstance) {
                if (--parentInstance._enteringAmount === 0 && parentInstance.get('a:mode') === 'in-out') {
                    nextFrame(function () {
                        parentInstance._checkMode();
                    });
                }
            }
            _this.trigger(_this.enterEventName + 'End', element);
        };

        element._unmount = function (nouse, parentDom) {
            // 如果该元素是延迟mount的元素，则直接删除
            if (_this._delayEnter) {
                parentDom.removeChild(element);
                _this.destroy(vNode);
                parentInstance._enteringAmount--;
                return;
            }
            _this.vNode = vNode;
            _this.parentDom = parentDom;
            if (parentInstance) {
                parentInstance._leavingAmount++;
                if (parentInstance.get('a:mode') === 'in-out') {
                    parentInstance.updateChildren.push(_this);
                    _this._delayLeave = true;
                } else {
                    parentInstance.unmountChildren.push(_this);
                }
                parentInstance.children.push(_this);
            } else {
                _this._unmount();
            }
        };

        if (parentInstance) {
            // 如果存在父动画组件，则使用父级进行管理
            // 统一做动画
            if (isAppear || !this.isRender) {
                if (this.lastInstance && this.lastInstance._delayLeave) {
                    parentInstance.updateChildren.push(this);
                } else {
                    parentInstance._enteringAmount++;
                    // 如果没有unmount的元素，则直接enter
                    if (parentInstance._leavingAmount > 0 && parentInstance.get('a:mode') === 'out-in') {
                        this._delayEnter = true;
                        element.style.display = 'none';
                    } else {
                        parentInstance.mountChildren.push(this);
                    }
                }
            }
            parentInstance.children.push(this);
        } else if (isAppear || !this.isRender) {
            // 否则单个元素自己动画
            this._enter();
        }
    },
    _getParentAnimate: function _getParentAnimate() {
        // 根节点为Animate，不存在parentVNode
        if (!this.parentVNode) return;
        // this.parentVNode是animate的tag，所以要拿this.parentVNode.parentVNode
        var parentVNode = this.parentVNode.parentVNode;
        if (parentVNode) {
            var parentInstance = parentVNode.children;
            if (parentInstance instanceof Animate) {
                return parentInstance;
            }
        }
    },
    _unmount: function _unmount(onlyInit) {
        var _this2 = this;

        if (this.get('a:disabled')) return;

        var element = this.element;
        var vNode = this.vNode;
        var parentDom = this.parentDom;
        // vNode都会被添加key，当只有一个子元素时，vNode.key === undefined
        // 这种情况，我们也当成有key处理，此时key为undefined
        if (!parentDom._reserve) {
            parentDom._reserve = {};
        }
        parentDom._reserve[vNode.key] = vNode;

        this._leaving = true;

        if (this._entering) {
            TransitionEvents.off(element, this._enterEnd);
            this._enterEnd();
        }

        this._leaveEnd = function (e) {
            e && e.stopPropagation && e.stopPropagation();
            removeClass(element, _this2.leaveClass);
            removeClass(element, _this2.leaveActiveClass);
            var s = element.style;
            s.position = s.top = s.left = s.transform = s.WebkitTransform = '';
            _this2._leaving = false;
            delete parentDom._reserve[vNode.key];
            TransitionEvents.off(element, _this2._leaveEnd);
            if (!_this2._unmountCancelled) {
                parentDom.removeChild(element);
                _this2.destroy(vNode, null, parentDom);
            }
            var parentInstance = _this2.parentInstance;
            if (parentInstance) {
                if (--parentInstance._leavingAmount === 0 && parentInstance.get('a:mode') === 'out-in') {
                    parentInstance._checkMode();
                }
            }
            _this2.trigger('a:leaveEnd', element);
        };

        this._leave(onlyInit);
        // 存在一种情况，相同的dom，同时被子组件和父组件管理的情况
        // 所以unmount后，将其置为空函数，以免再次unmount
        element._unmount = _utils.noop;

        this.trigger('a:leaveStart', element);
    },
    _beforeUpdate: function _beforeUpdate(lastVNode, vNode) {
        // 更新之前，这里的children不包含本次更新mount进来的元素
        var children = this.children;
        var reservedChildren = [];
        var isMove = this.get('a:move');
        for (var i = 0; i < children.length; i++) {
            var instance = children[i];
            if (!instance._leaving && isMove) {
                instance.position = instance._getPosition();
            }
            if (instance._delayLeave) {
                reservedChildren.push(instance);
                this.updateChildren.push(instance);
            }
        }
        this.children = reservedChildren;
    },
    _getPosition: function _getPosition() {
        var element = this.element;
        var transform = getComputedStyle(element).transform;
        if (transform === 'none') {
            return {
                top: element.offsetTop,
                left: element.offsetLeft
            };
        }
        // const transform = element.style.transform;
        var matrix = new CSSMatrix(transform);
        return {
            top: element.offsetTop + matrix.m42,
            left: element.offsetLeft + matrix.m41
        };
    },


    /**
     * 尽量保持动画的连贯性
     */
    _update: function _update(lastVNode, vNode, isFromCheckMode) {
        var parentInstance = void 0;
        if (!this.get('a:disabled')) {
            parentInstance = this.parentInstance;
            if (parentInstance) {
                parentInstance.updateChildren.push(this);
                parentInstance.children.push(this);
            }
        }

        // 更新之后，这里的children包括当前mount/update/unmount的元素
        var children = this.children;
        // 不存在children，则表示没有子动画元素要管理，直接返回
        if (!children.length) return;

        var mountChildren = this.mountChildren;
        var unmountChildren = this.unmountChildren;
        var updateChildren = this.updateChildren;
        var isMove = this.get('a:move');

        // 如果是in-out模式，但是没有元素enter，则直接leave
        if (!isFromCheckMode && this._enteringAmount === 0 && parentInstance && parentInstance.get('a:mode') === 'in-out') {
            for (var i = 0; i < updateChildren.length; i++) {
                var instance = updateChildren[i];
                if (instance._delayLeave) {
                    unmountChildren.push(instance);
                    updateChildren.splice(i, 1);
                    instance._delayLeave = false;
                    i--;
                }
            }
        }

        // 进行mount元素的进入动画
        // 因为存在moving元素被unmount又被mount的情况
        // 所以最先处理
        if (isMove) {
            mountChildren.forEach(function (instance) {
                // 如果当前元素是从上一个unmount的元素来的，
                // 则要初始化最新位置，因为beforeUpdate中
                // 不包括当前mount元素的位置初始化
                // 这样才能保持位置的连贯性
                if (instance.lastInstance) {
                    instance.position = instance._getPosition();
                }
            });
        }
        mountChildren.forEach(function (instance) {
            return instance._enter();
        });

        // 先将之前的动画清空
        // 只有既在move又在enter的unmount元素才清空动画
        // 这种情况保持不了连贯性
        if (isMove) {
            unmountChildren.forEach(function (instance) {
                if (instance._moving) {
                    instance._moveEnd();
                    if (instance._entering) {
                        instance._enterEnd();
                    }
                }
            });

            // 对于更新的元素，如果正在move，则将位置清空，以便确定最终位置
            updateChildren.forEach(function (instance) {
                if (instance._moving) {
                    var s = instance.element.style;
                    s.left = s.top = '';
                }
            });

            // 将要删除的元素，设为absolute，以便确定其它元素最终位置
            unmountChildren.forEach(function (instance) {
                instance.element.style.position = 'absolute';
            });

            // 获取所有元素的新位置
            children.forEach(function (instance) {
                instance.newPosition = instance._getPosition();
            });

            // 分别判断元素是否需要移动，并保持当前位置不变
            // unmount的元素，从当前位置直接leave，不要move了
            unmountChildren.forEach(function (instance) {
                return instance._initMove(true);
            });
            updateChildren.forEach(function (instance) {
                return instance._initMove();
            });
            mountChildren.forEach(function (instance) {
                return instance._initMove();
            });

            // 对于animation动画，enterEnd了entering元素
            // 需要re-layout，来触发move动画
            document.body.offsetWidth;

            // 如果元素需要移动，则进行move动画
            children.forEach(function (instance) {
                if (instance._needMove) {
                    if (!instance._moving) {
                        instance._move();
                    } else {
                        // 如果已经在移动了，那直接改变translate，保持动画连贯
                        instance._triggerMove();
                    }
                }
            });
        }

        // unmount元素做leave动画
        unmountChildren.forEach(function (instance) {
            return instance._unmount();
        });

        this.mountChildren = [];
        this.updateChildren = [];
        this.unmountChildren = [];
    },
    _checkMode: function _checkMode() {
        var mountChildren = [];
        var updateChildren = [];
        var unmountChildren = [];
        var children = this.children = this.children.filter(function (instance) {
            if (instance._delayEnter) {
                instance._delayEnter = false;
                mountChildren.push(instance);
                return false;
            } else if (instance._delayLeave) {
                instance._delayLeave = false;
                unmountChildren.push(instance);
                return true;
            } else if (instance._leaving !== false) {
                updateChildren.push(instance);
                return true;
            }
            return false;
        });
        this._beforeUpdate();
        mountChildren.forEach(function (instance) {
            instance.element.style.display = '';
            instance.position = null;
        });
        this.mountChildren = mountChildren;
        this.updateChildren = updateChildren;
        this.unmountChildren = unmountChildren;
        this.children = children.concat(mountChildren);
        this._update(null, null, true);
    },
    _initMove: function _initMove(isUnmount) {
        var element = this.element;
        var oldPosition = this.position;
        var newPosition = this.newPosition;

        this.position = newPosition;

        // 对于新mount的元素，不进行move判断
        if (!oldPosition) return;

        var dx = oldPosition.left - newPosition.left;
        var dy = oldPosition.top - newPosition.top;
        var oDx = this.dx;
        var oDy = this.dy;

        this.dx = dx;
        this.dy = dy;

        if (dx || dy || oDx || oDy) {
            // 对于move中的元素，需要将它重新回到0
            var s = element.style;
            if (isUnmount) {
                s.left = oldPosition.left + 'px';
                s.top = oldPosition.top + 'px';
                this._needMove = false;
            } else {
                // 如果当前元素正在enter，而且是animation动画，则要enterEnd
                // 否则无法move
                if (this._entering && getAnimateType(element) !== 'transition') {
                    this._enterEnd();
                }
                this._needMove = true;
                s.position = 'relative';
                s.left = dx + 'px';
                s.top = dy + 'px';
            }
        } else {
            this._needMove = false;
        }
    },
    _move: function _move(onlyInit) {
        var _this3 = this;

        this._moving = true;
        var element = this.element;
        var s = element.style;
        addClass(element, this.moveClass);
        this._moveEnd = function (e) {
            e && e.stopPropagation();
            if (!e || /transform$/.test(e.propertyName)) {
                TransitionEvents.off(element, _this3._moveEnd);
                removeClass(element, _this3.moveClass);
                s.position = s.left = s.top = s.transform = s.WebkitTransform = '';
                _this3.dx = _this3.dy = 0;
                _this3._moving = false;
            }
        };
        TransitionEvents.on(element, this._moveEnd);
        if (!onlyInit) {
            this._triggerMove();
            // nextFrame(() => this._triggerMove());
        }
    },
    _triggerMove: function _triggerMove() {
        var s = this.element.style;
        s.transform = s.WebkitTransform = 'translate(' + (0 - this.dx) + 'px, ' + (0 - this.dy) + 'px)';
    },
    _enter: function _enter(onlyInit) {
        var _this4 = this;

        this._entering = true;
        var element = this.element;
        var enterClass = this.enterClass;
        var enterActiveClass = this.enterActiveClass;

        // 如果这个元素是上一个删除的元素，则从当前状态回到原始状态
        if (this.lastInstance) {
            this.lastInstance._unmountCancelled = true;
            this.lastInstance._leaveEnd();
            if (this.lastInstance._triggeredLeave) {
                // addClass(element, enterActiveClass);
                // 保持连贯，添加leaveActiveClass
                addClass(element, this.leaveActiveClass);
            } else {
                // 如果上一个元素还没来得及做动画，则当做新元素处理
                addClass(element, enterClass);
            }
        } else {
            addClass(element, enterClass);
        }
        TransitionEvents.on(element, this._enterEnd);

        this.trigger(this.enterEventName + 'Start', element);

        if (!onlyInit) {
            if (getAnimateType(element, enterActiveClass) !== 'animation') {
                nextFrame(function () {
                    return _this4._triggerEnter();
                });
            } else {
                // 对于animation动画，同步添加enterActiveClass，避免闪动
                this._triggerEnter();
            }
        }
    },
    _triggerEnter: function _triggerEnter() {
        var element = this.element;
        this._triggeredEnter = true;
        if (this._entering === false) {
            return removeClass(element, this.enterActiveClass);
        }
        addClass(element, this.enterActiveClass);
        removeClass(element, this.enterClass);
        removeClass(element, this.leaveActiveClass);
        this.trigger(this.enterEventName, element, this._enterEnd);
    },
    _leave: function _leave(onlyInit) {
        var _this5 = this;

        var element = this.element;
        if (this._triggeredEnter) {
            // 如果当前元素还没有来得及做enter动画，就被删除
            // 则leaveActiveClass和leaveClass都放到下一帧添加
            // 否则leaveClass和enterClass一样就不会有动画效果
            addClass(element, this.leaveActiveClass);
        }
        TransitionEvents.on(element, this._leaveEnd);
        if (!onlyInit) {
            nextFrame(function () {
                _this5._triggerLeave();
            });
        }
    },
    _triggerLeave: function _triggerLeave() {
        this._triggeredLeave = true;
        if (this._leaving === false) {
            return;
        }
        var element = this.element;
        addClass(element, this.leaveActiveClass);
        addClass(element, this.leaveClass);
        this.trigger('a:leave', element, this._leaveEnd);
    },
    destroy: function destroy(lastVNode, nextVNode, parentDom) {
        // 不存在parentDom，则表示parentDom将被删除
        // 那子组件也要直接销毁掉，
        // 否则，所有的动画组件，都等到动画结束才销毁
        if (!parentDom && (!lastVNode || !nextVNode) && this.parentVNode.dom !== this.element || this.get('a:disabled') || this._leaving === false) {
            this._super(lastVNode, nextVNode, parentDom);
        }
    }
});


function addClass(element, className) {
    if (className) {
        if (element.classList) {
            element.classList.add(className);
        } else if (!hasClass(element, className)) {
            element.className += ' ' + className;
        }
    }
    return element;
}

function hasClass(element, className) {
    if (element.classList) {
        return !!className && element.className.contains(className);
    }
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

function removeClass(element, className) {
    if (className) {
        if (element.classList) {
            element.classList.remove(className);
        } else if (hasClass(element, className)) {
            element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ') // multiple spaces to one
            .replace(/^\s*|\s*$/g, ''); // trim the ends
        }
    }
}

var EVENT_NAME_MAP = {
    transitionend: {
        'transition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'mozTransitionEnd',
        'OTransition': 'oTransitionEnd',
        'msTransition': 'MSTransitionEnd'
    },

    animationend: {
        'animation': 'animationend',
        'WebkitAnimation': 'webkitAnimationEnd',
        'MozAnimation': 'mozAnimationEnd',
        'OAnimation': 'oAnimationEnd',
        'msAnimation': 'MSAnimationEnd'
    }
};

var endEvents = [];
var transitionProp = 'transition';
var animationProp = 'animation';

function detectEvents() {
    var testEl = document.createElement('div');
    var style = testEl.style;

    // On some platforms, in particular some releases of Android 4.x,
    // the un-prefixed "animation" and "transition" properties are defined on the
    // style object but the events that fire will still be prefixed, so we need
    // to check if the un-prefixed events are useable, and if not remove them
    // from the map
    if (!('AnimationEvent' in window)) {
        delete EVENT_NAME_MAP.animationend.animation;
    }

    if (!('TransitionEvent' in window)) {
        delete EVENT_NAME_MAP.transitionend.transition;
    }

    for (var baseEventName in EVENT_NAME_MAP) {
        var baseEvents = EVENT_NAME_MAP[baseEventName];
        for (var styleName in baseEvents) {
            if (styleName in style) {
                endEvents.push(baseEvents[styleName]);
                if (baseEventName === 'transitionend') {
                    transitionProp = styleName;
                } else {
                    animationProp = styleName;
                }
                break;
            }
        }
    }
}

function getAnimateType(element, className) {
    if (className) addClass(element, className);
    var style = window.getComputedStyle(element);
    var transitionDurations = style[transitionProp + 'Duration'].split(', ');
    var animationDurations = style[animationProp + 'Duration'].split(', ');
    var transitionDuration = getDuration(transitionDurations);
    var animationDuration = getDuration(animationDurations);
    if (className) removeClass(element, className);
    return transitionDuration > animationDuration ? 'transition' : 'animation';
}

function getDuration(durations) {
    return Math.max.apply(null, durations.map(function (d) {
        return d.slice(0, -1) * 1000;
    }));
}

function addEventListener(node, eventName, eventListener) {
    node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
    node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
    on: function on(node, eventListener) {
        if (endEvents.length === 0) {
            // If CSS transitions are not supported, trigger an "end animation"
            // event immediately.
            window.setTimeout(eventListener, 0);
            return;
        }
        endEvents.forEach(function (endEvent) {
            addEventListener(node, endEvent, eventListener);
        });
    },

    off: function off(node, eventListener) {
        if (endEvents.length === 0) {
            return;
        }
        endEvents.forEach(function (endEvent) {
            removeEventListener(node, endEvent, eventListener);
        });
    },

    one: function one(node, eventListener) {
        var listener = function listener() {
            eventListener.apply(this, arguments);
            TransitionEvents.off(node, listener);
        };
        TransitionEvents.on(node, listener);
    }
};

var raf = void 0;
function nextFrame(fn) {
    raf(function () {
        return raf(fn);
    });
}

if (_utils.inBrowser) {
    raf = window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout;

    detectEvents();
}

var CSSMatrix = typeof WebKitCSSMatrix !== 'undefined' ? WebKitCSSMatrix : function (transform) {
    this.m42 = 0;
    this.m41 = 0;
    var type = transform.slice(0, transform.indexOf('('));
    var parts = void 0;
    if (type === 'matrix3d') {
        parts = transform.slice(9, -1).split(',');
        this.m41 = parseFloat(parts[12]);
        this.m42 = parseFloat(parts[13]);
    } else if (type === 'matrix') {
        parts = transform.slice(7, -1).split(',');
        this.m41 = parseFloat(parts[4]);
        this.m42 = parseFloat(parts[5]);
    }
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Intact) {exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _app = __webpack_require__(26);

var _app2 = _interopRequireDefault(_app);

var _loading = __webpack_require__(27);

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Intact) {
    _inherits(_class, _Intact);

    function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _Intact.apply(this, arguments));
    }

    _class.prototype.defaults = function defaults() {
        return {
            view: undefined,
            loading: false
        };
    };

    _class.prototype.run = function run(data) {
        var _this2 = this;

        return function (Page) {
            _this2.set('loading', true);
            var page = new Page(data);
            _this2.set('view', page);
            if (page.inited) {
                _this2.set('loading', false);
            } else {
                page.one('$inited', function () {
                    _this2.set('loading', false);
                });
            }
        };
    };

    _createClass(_class, [{
        key: 'template',
        get: function get() {
            return _app2.default;
        }
    }]);

    return _class;
}(Intact);

exports.default = _class;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (obj, _Vdt, blocks) {
    if (false) {
        var __this = this;
        module.hot.dispose(function (data) {
            data.vdt = __this;
            data.isParent = __this.data !== obj;
        });
    }

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate;
    return h('div', null, ['\n    ', function () {
        try {
            return [self.get('view')][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), '\n    ', function () {
        try {
            return [self.get('loading')][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h(Animate, { 'key': 'loading', 'className': 'spinner', 'a:transition': 'loading', 'children': [h('div', null, null, 'double-bounce1'), h('div', null, null, 'double-bounce2')] }) : undefined], 'app-wrapper');
};
if (false) {
    module.hot.accept();
    var vdt = module.hot.data && module.hot.data.vdt;
    if (vdt) {
        if (!module.hot.data.isParent) {
            vdt.template = module.exports;
        }
        vdt.update();
    }
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(9)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/stylus-loader/index.js??ref--2-2!./loading.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/stylus-loader/index.js??ref--2-2!./loading.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, ".spinner {\n  width: 40px;\n  height: 40px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin-top: -20px;\n  margin-left: -20px;\n}\n.double-bounce1,\n.double-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #fe4444;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-bounce 2s infinite ease-in-out;\n  animation: sk-bounce 2s infinite ease-in-out;\n}\n.double-bounce2 {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n@-webkit-keyframes sk-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0);\n  }\n  50% {\n    -webkit-transform: scale(1);\n  }\n}\n.loading-enter,\n.loading-leave {\n  opacity: 0;\n}\n.loading-enter-active,\n.loading-leave-active {\n  transition: opacity 0.3s;\n}\n@-moz-keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n  }\n}\n@-webkit-keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n  }\n}\n@-o-keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n  }\n}\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n  }\n}\n", ""]);

// exports


/***/ }),
/* 29 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
// Generated on Tue Dec 16 2014 12:13:47 GMT+0100 (CET) by Charlie Robbins, Paolo Fragomeni & the Contributors (Using Codesurgeon).
// Version 1.2.6
//

(function (exports) {

  /*
   * browser.js: Browser specific functionality for director.
   *
   * (C) 2011, Charlie Robbins, Paolo Fragomeni, & the Contributors.
   * MIT LICENSE
   *
   */

  var dloc = document.location;

  function dlocHashEmpty() {
    // Non-IE browsers return '' when the address bar shows '#'; Director's logic
    // assumes both mean empty.
    return dloc.hash === '' || dloc.hash === '#';
  }

  var listener = {
    mode: 'modern',
    hash: dloc.hash,
    history: false,

    check: function check() {
      var h = dloc.hash;
      if (h != this.hash) {
        this.hash = h;
        this.onHashChanged();
      }
    },

    fire: function fire() {
      if (this.mode === 'modern') {
        this.history === true ? window.onpopstate() : window.onhashchange();
      } else {
        this.onHashChanged();
      }
    },

    init: function init(fn, history) {
      var self = this;
      this.history = history;

      if (!Router.listeners) {
        Router.listeners = [];
      }

      function onchange(onChangeEvent) {
        for (var i = 0, l = Router.listeners.length; i < l; i++) {
          Router.listeners[i](onChangeEvent);
        }
      }

      //note IE8 is being counted as 'modern' because it has the hashchange event
      if ('onhashchange' in window && (document.documentMode === undefined || document.documentMode > 7)) {
        // At least for now HTML5 history is available for 'modern' browsers only
        if (this.history === true) {
          // There is an old bug in Chrome that causes onpopstate to fire even
          // upon initial page load. Since the handler is run manually in init(),
          // this would cause Chrome to run it twise. Currently the only
          // workaround seems to be to set the handler after the initial page load
          // http://code.google.com/p/chromium/issues/detail?id=63040
          setTimeout(function () {
            window.onpopstate = onchange;
          }, 500);
        } else {
          window.onhashchange = onchange;
        }
        this.mode = 'modern';
      } else {
        //
        // IE support, based on a concept by Erik Arvidson ...
        //
        var frame = document.createElement('iframe');
        frame.id = 'state-frame';
        frame.style.display = 'none';
        document.body.appendChild(frame);
        this.writeFrame('');

        if ('onpropertychange' in document && 'attachEvent' in document) {
          document.attachEvent('onpropertychange', function () {
            if (event.propertyName === 'location') {
              self.check();
            }
          });
        }

        window.setInterval(function () {
          self.check();
        }, 50);

        this.onHashChanged = onchange;
        this.mode = 'legacy';
      }

      Router.listeners.push(fn);

      return this.mode;
    },

    destroy: function destroy(fn) {
      if (!Router || !Router.listeners) {
        return;
      }

      var listeners = Router.listeners;

      for (var i = listeners.length - 1; i >= 0; i--) {
        if (listeners[i] === fn) {
          listeners.splice(i, 1);
        }
      }
    },

    setHash: function setHash(s) {
      // Mozilla always adds an entry to the history
      if (this.mode === 'legacy') {
        this.writeFrame(s);
      }

      if (this.history === true) {
        window.history.pushState({}, document.title, s);
        // Fire an onpopstate event manually since pushing does not obviously
        // trigger the pop event.
        this.fire();
      } else {
        dloc.hash = s[0] === '/' ? s : '/' + s;
      }
      return this;
    },

    writeFrame: function writeFrame(s) {
      // IE support...
      var f = document.getElementById('state-frame');
      var d = f.contentDocument || f.contentWindow.document;
      d.open();
      d.write("<script>_hash = '" + s + "'; onload = parent.listener.syncHash;<script>");
      d.close();
    },

    syncHash: function syncHash() {
      // IE support...
      var s = this._hash;
      if (s != dloc.hash) {
        dloc.hash = s;
      }
      return this;
    },

    onHashChanged: function onHashChanged() {}
  };

  var Router = exports.Router = function (routes) {
    if (!(this instanceof Router)) return new Router(routes);

    this.params = {};
    this.routes = {};
    this.methods = ['on', 'once', 'after', 'before'];
    this.scope = [];
    this._methods = {};

    this._insert = this.insert;
    this.insert = this.insertEx;

    this.historySupport = (window.history != null ? window.history.pushState : null) != null;

    this.configure();
    this.mount(routes || {});
  };

  Router.prototype.init = function (r) {
    var self = this,
        routeTo;
    this.handler = function (onChangeEvent) {
      var newURL = onChangeEvent && onChangeEvent.newURL || window.location.hash;
      var url = self.history === true ? self.getPath() : newURL.replace(/.*#/, '');
      self.dispatch('on', url.charAt(0) === '/' ? url : '/' + url);
    };

    listener.init(this.handler, this.history);

    if (this.history === false) {
      if (dlocHashEmpty() && r) {
        dloc.hash = r;
      } else if (!dlocHashEmpty()) {
        self.dispatch('on', '/' + dloc.hash.replace(/^(#\/|#|\/)/, ''));
      }
    } else {
      if (this.convert_hash_in_init) {
        // Use hash as route
        routeTo = dlocHashEmpty() && r ? r : !dlocHashEmpty() ? dloc.hash.replace(/^#/, '') : null;
        if (routeTo) {
          window.history.replaceState({}, document.title, routeTo);
        }
      } else {
        // Use canonical url
        routeTo = this.getPath();
      }

      // Router has been initialized, but due to the chrome bug it will not
      // yet actually route HTML5 history state changes. Thus, decide if should route.
      if (routeTo || this.run_in_init === true) {
        this.handler();
      }
    }

    return this;
  };

  Router.prototype.explode = function () {
    var v = this.history === true ? this.getPath() : dloc.hash;
    if (v.charAt(1) === '/') {
      v = v.slice(1);
    }
    return v.slice(1, v.length).split("/");
  };

  Router.prototype.setRoute = function (i, v, val) {
    var url = this.explode();

    if (typeof i === 'number' && typeof v === 'string') {
      url[i] = v;
    } else if (typeof val === 'string') {
      url.splice(i, v, s);
    } else {
      url = [i];
    }

    listener.setHash(url.join('/'));
    return url;
  };

  //
  // ### function insertEx(method, path, route, parent)
  // #### @method {string} Method to insert the specific `route`.
  // #### @path {Array} Parsed path to insert the `route` at.
  // #### @route {Array|function} Route handlers to insert.
  // #### @parent {Object} **Optional** Parent "routes" to insert into.
  // insert a callback that will only occur once per the matched route.
  //
  Router.prototype.insertEx = function (method, path, route, parent) {
    if (method === "once") {
      method = "on";
      route = function (route) {
        var once = false;
        return function () {
          if (once) return;
          once = true;
          return route.apply(this, arguments);
        };
      }(route);
    }
    return this._insert(method, path, route, parent);
  };

  Router.prototype.getRoute = function (v) {
    var ret = v;

    if (typeof v === "number") {
      ret = this.explode()[v];
    } else if (typeof v === "string") {
      var h = this.explode();
      ret = h.indexOf(v);
    } else {
      ret = this.explode();
    }

    return ret;
  };

  Router.prototype.destroy = function () {
    listener.destroy(this.handler);
    return this;
  };

  Router.prototype.getPath = function () {
    var path = window.location.pathname;
    if (path.substr(0, 1) !== '/') {
      path = '/' + path;
    }
    return path;
  };
  function _every(arr, iterator) {
    for (var i = 0; i < arr.length; i += 1) {
      if (iterator(arr[i], i, arr) === false) {
        return;
      }
    }
  }

  function _flatten(arr) {
    var flat = [];
    for (var i = 0, n = arr.length; i < n; i++) {
      flat = flat.concat(arr[i]);
    }
    return flat;
  }

  function _asyncEverySeries(arr, iterator, callback) {
    if (!arr.length) {
      return callback();
    }
    var completed = 0;
    (function iterate() {
      iterator(arr[completed], function (err) {
        if (err || err === false) {
          callback(err);
          callback = function callback() {};
        } else {
          completed += 1;
          if (completed === arr.length) {
            callback();
          } else {
            iterate();
          }
        }
      });
    })();
  }

  function paramifyString(str, params, mod) {
    mod = str;
    for (var param in params) {
      if (params.hasOwnProperty(param)) {
        mod = params[param](str);
        if (mod !== str) {
          break;
        }
      }
    }
    return mod === str ? "([._a-zA-Z0-9-%()]+)" : mod;
  }

  function regifyString(str, params) {
    var matches,
        last = 0,
        out = "";
    while (matches = str.substr(last).match(/[^\w\d\- %@&]*\*[^\w\d\- %@&]*/)) {
      last = matches.index + matches[0].length;
      matches[0] = matches[0].replace(/^\*/, "([_.()!\\ %@&a-zA-Z0-9-]+)");
      out += str.substr(0, matches.index) + matches[0];
    }
    str = out += str.substr(last);
    var captures = str.match(/:([^\/]+)/ig),
        capture,
        length;
    if (captures) {
      length = captures.length;
      for (var i = 0; i < length; i++) {
        capture = captures[i];
        if (capture.slice(0, 2) === "::") {
          str = capture.slice(1);
        } else {
          str = str.replace(capture, paramifyString(capture, params));
        }
      }
    }
    return str;
  }

  function terminator(routes, delimiter, start, stop) {
    var last = 0,
        left = 0,
        right = 0,
        start = (start || "(").toString(),
        stop = (stop || ")").toString(),
        i;
    for (i = 0; i < routes.length; i++) {
      var chunk = routes[i];
      if (chunk.indexOf(start, last) > chunk.indexOf(stop, last) || ~chunk.indexOf(start, last) && !~chunk.indexOf(stop, last) || !~chunk.indexOf(start, last) && ~chunk.indexOf(stop, last)) {
        left = chunk.indexOf(start, last);
        right = chunk.indexOf(stop, last);
        if (~left && !~right || !~left && ~right) {
          var tmp = routes.slice(0, (i || 1) + 1).join(delimiter);
          routes = [tmp].concat(routes.slice((i || 1) + 1));
        }
        last = (right > left ? right : left) + 1;
        i = 0;
      } else {
        last = 0;
      }
    }
    return routes;
  }

  var QUERY_SEPARATOR = /\?.*/;

  Router.prototype.configure = function (options) {
    options = options || {};
    for (var i = 0; i < this.methods.length; i++) {
      this._methods[this.methods[i]] = true;
    }
    this.recurse = options.recurse || this.recurse || false;
    this.async = options.async || false;
    this.delimiter = options.delimiter || "/";
    this.strict = typeof options.strict === "undefined" ? true : options.strict;
    this.notfound = options.notfound;
    this.resource = options.resource;
    this.history = options.html5history && this.historySupport || false;
    this.run_in_init = this.history === true && options.run_handler_in_init !== false;
    this.convert_hash_in_init = this.history === true && options.convert_hash_in_init !== false;
    this.every = {
      after: options.after || null,
      before: options.before || null,
      on: options.on || null
    };
    return this;
  };

  Router.prototype.param = function (token, matcher) {
    if (token[0] !== ":") {
      token = ":" + token;
    }
    var compiled = new RegExp(token, "g");
    this.params[token] = function (str) {
      return str.replace(compiled, matcher.source || matcher);
    };
    return this;
  };

  Router.prototype.on = Router.prototype.route = function (method, path, route) {
    var self = this;
    if (!route && typeof path == "function") {
      route = path;
      path = method;
      method = "on";
    }
    if (Array.isArray(path)) {
      return path.forEach(function (p) {
        self.on(method, p, route);
      });
    }
    if (path.source) {
      path = path.source.replace(/\\\//ig, "/");
    }
    if (Array.isArray(method)) {
      return method.forEach(function (m) {
        self.on(m.toLowerCase(), path, route);
      });
    }
    path = path.split(new RegExp(this.delimiter));
    path = terminator(path, this.delimiter);
    this.insert(method, this.scope.concat(path), route);
  };

  Router.prototype.path = function (path, routesFn) {
    var self = this,
        length = this.scope.length;
    if (path.source) {
      path = path.source.replace(/\\\//ig, "/");
    }
    path = path.split(new RegExp(this.delimiter));
    path = terminator(path, this.delimiter);
    this.scope = this.scope.concat(path);
    routesFn.call(this, this);
    this.scope.splice(length, path.length);
  };

  Router.prototype.dispatch = function (method, path, callback) {
    var self = this,
        fns = this.traverse(method, path.replace(QUERY_SEPARATOR, ""), this.routes, ""),
        invoked = this._invoked,
        after;
    this._invoked = true;
    if (!fns || fns.length === 0) {
      this.last = [];
      if (typeof this.notfound === "function") {
        this.invoke([this.notfound], {
          method: method,
          path: path
        }, callback);
      }
      return false;
    }
    if (this.recurse === "forward") {
      fns = fns.reverse();
    }
    function updateAndInvoke() {
      self.last = fns.after;
      self.invoke(self.runlist(fns), self, callback);
    }
    after = this.every && this.every.after ? [this.every.after].concat(this.last) : [this.last];
    if (after && after.length > 0 && invoked) {
      if (this.async) {
        this.invoke(after, this, updateAndInvoke);
      } else {
        this.invoke(after, this);
        updateAndInvoke();
      }
      return true;
    }
    updateAndInvoke();
    return true;
  };

  Router.prototype.invoke = function (fns, thisArg, callback) {
    var self = this;
    var _apply2;
    if (this.async) {
      _apply2 = function apply(fn, next) {
        if (Array.isArray(fn)) {
          return _asyncEverySeries(fn, _apply2, next);
        } else if (typeof fn == "function") {
          fn.apply(thisArg, (fns.captures || []).concat(next));
        }
      };
      _asyncEverySeries(fns, _apply2, function () {
        if (callback) {
          callback.apply(thisArg, arguments);
        }
      });
    } else {
      _apply2 = function _apply(fn) {
        if (Array.isArray(fn)) {
          return _every(fn, _apply2);
        } else if (typeof fn === "function") {
          return fn.apply(thisArg, fns.captures || []);
        } else if (typeof fn === "string" && self.resource) {
          self.resource[fn].apply(thisArg, fns.captures || []);
        }
      };
      _every(fns, _apply2);
    }
  };

  Router.prototype.traverse = function (method, path, routes, regexp, filter) {
    var fns = [],
        current,
        exact,
        match,
        next,
        that;
    function filterRoutes(routes) {
      if (!filter) {
        return routes;
      }
      function deepCopy(source) {
        var result = [];
        for (var i = 0; i < source.length; i++) {
          result[i] = Array.isArray(source[i]) ? deepCopy(source[i]) : source[i];
        }
        return result;
      }
      function applyFilter(fns) {
        for (var i = fns.length - 1; i >= 0; i--) {
          if (Array.isArray(fns[i])) {
            applyFilter(fns[i]);
            if (fns[i].length === 0) {
              fns.splice(i, 1);
            }
          } else {
            if (!filter(fns[i])) {
              fns.splice(i, 1);
            }
          }
        }
      }
      var newRoutes = deepCopy(routes);
      newRoutes.matched = routes.matched;
      newRoutes.captures = routes.captures;
      newRoutes.after = routes.after.filter(filter);
      applyFilter(newRoutes);
      return newRoutes;
    }
    if (path === this.delimiter && routes[method]) {
      next = [[routes.before, routes[method]].filter(Boolean)];
      next.after = [routes.after].filter(Boolean);
      next.matched = true;
      next.captures = [];
      return filterRoutes(next);
    }
    for (var r in routes) {
      if (routes.hasOwnProperty(r) && (!this._methods[r] || this._methods[r] && _typeof(routes[r]) === "object" && !Array.isArray(routes[r]))) {
        current = exact = regexp + this.delimiter + r;
        if (!this.strict) {
          exact += "[" + this.delimiter + "]?";
        }
        match = path.match(new RegExp("^" + exact));
        if (!match) {
          continue;
        }
        if (match[0] && match[0] == path && routes[r][method]) {
          next = [[routes[r].before, routes[r][method]].filter(Boolean)];
          next.after = [routes[r].after].filter(Boolean);
          next.matched = true;
          next.captures = match.slice(1);
          if (this.recurse && routes === this.routes) {
            next.push([routes.before, routes.on].filter(Boolean));
            next.after = next.after.concat([routes.after].filter(Boolean));
          }
          return filterRoutes(next);
        }
        next = this.traverse(method, path, routes[r], current);
        if (next.matched) {
          if (next.length > 0) {
            fns = fns.concat(next);
          }
          if (this.recurse) {
            fns.push([routes[r].before, routes[r].on].filter(Boolean));
            next.after = next.after.concat([routes[r].after].filter(Boolean));
            if (routes === this.routes) {
              fns.push([routes["before"], routes["on"]].filter(Boolean));
              next.after = next.after.concat([routes["after"]].filter(Boolean));
            }
          }
          fns.matched = true;
          fns.captures = next.captures;
          fns.after = next.after;
          return filterRoutes(fns);
        }
      }
    }
    return false;
  };

  Router.prototype.insert = function (method, path, route, parent) {
    var methodType, parentType, isArray, nested, part;
    path = path.filter(function (p) {
      return p && p.length > 0;
    });
    parent = parent || this.routes;
    part = path.shift();
    if (/\:|\*/.test(part) && !/\\d|\\w/.test(part)) {
      part = regifyString(part, this.params);
    }
    if (path.length > 0) {
      parent[part] = parent[part] || {};
      return this.insert(method, path, route, parent[part]);
    }
    if (!part && !path.length && parent === this.routes) {
      methodType = _typeof(parent[method]);
      switch (methodType) {
        case "function":
          parent[method] = [parent[method], route];
          return;
        case "object":
          parent[method].push(route);
          return;
        case "undefined":
          parent[method] = route;
          return;
      }
      return;
    }
    parentType = _typeof(parent[part]);
    isArray = Array.isArray(parent[part]);
    if (parent[part] && !isArray && parentType == "object") {
      methodType = _typeof(parent[part][method]);
      switch (methodType) {
        case "function":
          parent[part][method] = [parent[part][method], route];
          return;
        case "object":
          parent[part][method].push(route);
          return;
        case "undefined":
          parent[part][method] = route;
          return;
      }
    } else if (parentType == "undefined") {
      nested = {};
      nested[method] = route;
      parent[part] = nested;
      return;
    }
    throw new Error("Invalid route context: " + parentType);
  };

  Router.prototype.extend = function (methods) {
    var self = this,
        len = methods.length,
        i;
    function extend(method) {
      self._methods[method] = true;
      self[method] = function () {
        var extra = arguments.length === 1 ? [method, ""] : [method];
        self.on.apply(self, extra.concat(Array.prototype.slice.call(arguments)));
      };
    }
    for (i = 0; i < len; i++) {
      extend(methods[i]);
    }
  };

  Router.prototype.runlist = function (fns) {
    var runlist = this.every && this.every.before ? [this.every.before].concat(_flatten(fns)) : _flatten(fns);
    if (this.every && this.every.on) {
      runlist.push(this.every.on);
    }
    runlist.captures = fns.captures;
    runlist.source = fns.source;
    return runlist;
  };

  Router.prototype.mount = function (routes, path) {
    if (!routes || (typeof routes === 'undefined' ? 'undefined' : _typeof(routes)) !== "object" || Array.isArray(routes)) {
      return;
    }
    var self = this;
    path = path || [];
    if (!Array.isArray(path)) {
      path = path.split(self.delimiter);
    }
    function insertOrMount(route, local) {
      var rename = route,
          parts = route.split(self.delimiter),
          routeType = _typeof(routes[route]),
          isRoute = parts[0] === "" || !self._methods[parts[0]],
          event = isRoute ? "on" : rename;
      if (isRoute) {
        rename = rename.slice((rename.match(new RegExp("^" + self.delimiter)) || [""])[0].length);
        parts.shift();
      }
      if (isRoute && routeType === "object" && !Array.isArray(routes[route])) {
        local = local.concat(parts);
        self.mount(routes[route], local);
        return;
      }
      if (isRoute) {
        local = local.concat(rename.split(self.delimiter));
        local = terminator(local, self.delimiter);
      }
      self.insert(event, local, routes[route]);
    }
    for (var route in routes) {
      if (routes.hasOwnProperty(route)) {
        insertOrMount(route, path.slice(0));
      }
    }
  };
})(( false ? 'undefined' : _typeof(exports)) === "object" ? exports : window);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(9)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/stylus-loader/index.js??ref--2-2!./layout.styl", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/stylus-loader/index.js??ref--2-2!./layout.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, "html,\nbody {\n  margin: 0;\n  font-size: 14px;\n  color: #333;\n  background: #efefef;\n  height: 100%;\n}\na {\n  color: #2d8cf0;\n  text-decoration: none;\n  cursor: pointer;\n}\nh1,\nh2,\nh3,\nh4,\nh5 {\n  margin: 0;\n  font-weight: normal;\n  color: #000;\n}\nh2 {\n  font-size: 1.3em;\n}\nh3 {\n  font-size: 1.1em;\n}\ncode {\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px;\n  padding: 0 5px;\n}\nblockquote {\n  margin: 1em 0;\n  padding: 1px 2em;\n  background: #f8f8f8;\n  border-radius: 0 3px 3px 0;\n  border-left: 2px solid #fe4444;\n  position: relative;\n}\nblockquote:before {\n  content: '!';\n  display: block;\n  position: absolute;\n  top: 50%;\n  margin-top: -10px;\n  width: 20px;\n  height: 20px;\n  border-radius: 100%;\n  text-align: center;\n  background: #fe4444;\n  color: #fff;\n  line-height: 20px;\n  left: -11px;\n}\n#page,\n.app-wrapper,\n.main-wrapper {\n  height: 100%;\n}\n.header-wrapper {\n  height: 60px;\n  line-height: 60px;\n  box-shadow: 0 1px 1px rgba(0,0,0,0.08);\n  background: #fff;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 999;\n}\n.header-wrapper header {\n  width: 1080px;\n  margin: 0 auto;\n}\n.header-wrapper .logo {\n  font-size: 24px;\n  color: #333;\n  margin-left: 20px;\n}\n.header-wrapper nav {\n  float: right;\n}\n.header-wrapper nav a {\n  display: inline-block;\n  padding: 0 20px;\n  color: #333;\n}\n.header-wrapper nav a.active {\n  color: #fe4444;\n  border-bottom: 2px solid #fe4444;\n}\n", ""]);

// exports


/***/ })
/******/ ]);