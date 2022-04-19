/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/matter-js/build/matter.js":
/*!************************************************!*\
  !*** ./node_modules/matter-js/build/matter.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
 * matter-js 0.18.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_1787__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_1787__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_1787__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_1787__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_1787__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_1787__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_1787__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_1787__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_1787__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_1787__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_1787__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_1787__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_1787__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_1787__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_1787__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_1787__(__nested_webpack_require_1787__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
* The `Matter.Common` module contains utility functions that are common to all modules.
*
* @class Common
*/

var Common = {};

module.exports = Common;

(function() {

    Common._nextId = 0;
    Common._seed = 0;
    Common._nowStartTime = +(new Date());
    Common._warnedOnce = {};
    Common._decomp = null;
    
    /**
     * Extends the object in the first argument using the object in the second argument.
     * @method extend
     * @param {} obj
     * @param {boolean} deep
     * @return {} obj extended
     */
    Common.extend = function(obj, deep) {
        var argsStart,
            args,
            deepClone;

        if (typeof deep === 'boolean') {
            argsStart = 2;
            deepClone = deep;
        } else {
            argsStart = 1;
            deepClone = true;
        }

        for (var i = argsStart; i < arguments.length; i++) {
            var source = arguments[i];

            if (source) {
                for (var prop in source) {
                    if (deepClone && source[prop] && source[prop].constructor === Object) {
                        if (!obj[prop] || obj[prop].constructor === Object) {
                            obj[prop] = obj[prop] || {};
                            Common.extend(obj[prop], deepClone, source[prop]);
                        } else {
                            obj[prop] = source[prop];
                        }
                    } else {
                        obj[prop] = source[prop];
                    }
                }
            }
        }
        
        return obj;
    };

    /**
     * Creates a new clone of the object, if deep is true references will also be cloned.
     * @method clone
     * @param {} obj
     * @param {bool} deep
     * @return {} obj cloned
     */
    Common.clone = function(obj, deep) {
        return Common.extend({}, deep, obj);
    };

    /**
     * Returns the list of keys for the given object.
     * @method keys
     * @param {} obj
     * @return {string[]} keys
     */
    Common.keys = function(obj) {
        if (Object.keys)
            return Object.keys(obj);

        // avoid hasOwnProperty for performance
        var keys = [];
        for (var key in obj)
            keys.push(key);
        return keys;
    };

    /**
     * Returns the list of values for the given object.
     * @method values
     * @param {} obj
     * @return {array} Array of the objects property values
     */
    Common.values = function(obj) {
        var values = [];
        
        if (Object.keys) {
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length; i++) {
                values.push(obj[keys[i]]);
            }
            return values;
        }
        
        // avoid hasOwnProperty for performance
        for (var key in obj)
            values.push(obj[key]);
        return values;
    };

    /**
     * Gets a value from `base` relative to the `path` string.
     * @method get
     * @param {} obj The base object
     * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
     * @param {number} [begin] Path slice begin
     * @param {number} [end] Path slice end
     * @return {} The object at the given path
     */
    Common.get = function(obj, path, begin, end) {
        path = path.split('.').slice(begin, end);

        for (var i = 0; i < path.length; i += 1) {
            obj = obj[path[i]];
        }

        return obj;
    };

    /**
     * Sets a value on `base` relative to the given `path` string.
     * @method set
     * @param {} obj The base object
     * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
     * @param {} val The value to set
     * @param {number} [begin] Path slice begin
     * @param {number} [end] Path slice end
     * @return {} Pass through `val` for chaining
     */
    Common.set = function(obj, path, val, begin, end) {
        var parts = path.split('.').slice(begin, end);
        Common.get(obj, path, 0, -1)[parts[parts.length - 1]] = val;
        return val;
    };

    /**
     * Shuffles the given array in-place.
     * The function uses a seeded random generator.
     * @method shuffle
     * @param {array} array
     * @return {array} array shuffled randomly
     */
    Common.shuffle = function(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Common.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };

    /**
     * Randomly chooses a value from a list with equal probability.
     * The function uses a seeded random generator.
     * @method choose
     * @param {array} choices
     * @return {object} A random choice object from the array
     */
    Common.choose = function(choices) {
        return choices[Math.floor(Common.random() * choices.length)];
    };

    /**
     * Returns true if the object is a HTMLElement, otherwise false.
     * @method isElement
     * @param {object} obj
     * @return {boolean} True if the object is a HTMLElement, otherwise false
     */
    Common.isElement = function(obj) {
        if (typeof HTMLElement !== 'undefined') {
            return obj instanceof HTMLElement;
        }

        return !!(obj && obj.nodeType && obj.nodeName);
    };

    /**
     * Returns true if the object is an array.
     * @method isArray
     * @param {object} obj
     * @return {boolean} True if the object is an array, otherwise false
     */
    Common.isArray = function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };

    /**
     * Returns true if the object is a function.
     * @method isFunction
     * @param {object} obj
     * @return {boolean} True if the object is a function, otherwise false
     */
    Common.isFunction = function(obj) {
        return typeof obj === "function";
    };

    /**
     * Returns true if the object is a plain object.
     * @method isPlainObject
     * @param {object} obj
     * @return {boolean} True if the object is a plain object, otherwise false
     */
    Common.isPlainObject = function(obj) {
        return typeof obj === 'object' && obj.constructor === Object;
    };

    /**
     * Returns true if the object is a string.
     * @method isString
     * @param {object} obj
     * @return {boolean} True if the object is a string, otherwise false
     */
    Common.isString = function(obj) {
        return toString.call(obj) === '[object String]';
    };
    
    /**
     * Returns the given value clamped between a minimum and maximum value.
     * @method clamp
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @return {number} The value clamped between min and max inclusive
     */
    Common.clamp = function(value, min, max) {
        if (value < min)
            return min;
        if (value > max)
            return max;
        return value;
    };
    
    /**
     * Returns the sign of the given value.
     * @method sign
     * @param {number} value
     * @return {number} -1 if negative, +1 if 0 or positive
     */
    Common.sign = function(value) {
        return value < 0 ? -1 : 1;
    };
    
    /**
     * Returns the current timestamp since the time origin (e.g. from page load).
     * The result is in milliseconds and will use high-resolution timing if available.
     * @method now
     * @return {number} the current timestamp in milliseconds
     */
    Common.now = function() {
        if (typeof window !== 'undefined' && window.performance) {
            if (window.performance.now) {
                return window.performance.now();
            } else if (window.performance.webkitNow) {
                return window.performance.webkitNow();
            }
        }

        if (Date.now) {
            return Date.now();
        }

        return (new Date()) - Common._nowStartTime;
    };
    
    /**
     * Returns a random value between a minimum and a maximum value inclusive.
     * The function uses a seeded random generator.
     * @method random
     * @param {number} min
     * @param {number} max
     * @return {number} A random number between min and max inclusive
     */
    Common.random = function(min, max) {
        min = (typeof min !== "undefined") ? min : 0;
        max = (typeof max !== "undefined") ? max : 1;
        return min + _seededRandom() * (max - min);
    };

    var _seededRandom = function() {
        // https://en.wikipedia.org/wiki/Linear_congruential_generator
        Common._seed = (Common._seed * 9301 + 49297) % 233280;
        return Common._seed / 233280;
    };

    /**
     * Converts a CSS hex colour string into an integer.
     * @method colorToNumber
     * @param {string} colorString
     * @return {number} An integer representing the CSS hex string
     */
    Common.colorToNumber = function(colorString) {
        colorString = colorString.replace('#','');

        if (colorString.length == 3) {
            colorString = colorString.charAt(0) + colorString.charAt(0)
                        + colorString.charAt(1) + colorString.charAt(1)
                        + colorString.charAt(2) + colorString.charAt(2);
        }

        return parseInt(colorString, 16);
    };

    /**
     * The console logging level to use, where each level includes all levels above and excludes the levels below.
     * The default level is 'debug' which shows all console messages.  
     *
     * Possible level values are:
     * - 0 = None
     * - 1 = Debug
     * - 2 = Info
     * - 3 = Warn
     * - 4 = Error
     * @property Common.logLevel
     * @type {Number}
     * @default 1
     */
    Common.logLevel = 1;

    /**
     * Shows a `console.log` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method log
     * @param ...objs {} The objects to log.
     */
    Common.log = function() {
        if (console && Common.logLevel > 0 && Common.logLevel <= 3) {
            console.log.apply(console, ['matter-js:'].concat(Array.prototype.slice.call(arguments)));
        }
    };

    /**
     * Shows a `console.info` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method info
     * @param ...objs {} The objects to log.
     */
    Common.info = function() {
        if (console && Common.logLevel > 0 && Common.logLevel <= 2) {
            console.info.apply(console, ['matter-js:'].concat(Array.prototype.slice.call(arguments)));
        }
    };

    /**
     * Shows a `console.warn` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method warn
     * @param ...objs {} The objects to log.
     */
    Common.warn = function() {
        if (console && Common.logLevel > 0 && Common.logLevel <= 3) {
            console.warn.apply(console, ['matter-js:'].concat(Array.prototype.slice.call(arguments)));
        }
    };

    /**
     * Uses `Common.warn` to log the given message one time only.
     * @method warnOnce
     * @param ...objs {} The objects to log.
     */
    Common.warnOnce = function() {
        var message = Array.prototype.slice.call(arguments).join(' ');

        if (!Common._warnedOnce[message]) {
            Common.warn(message);
            Common._warnedOnce[message] = true;
        }
    };

    /**
     * Shows a deprecated console warning when the function on the given object is called.
     * The target function will be replaced with a new function that first shows the warning
     * and then calls the original function.
     * @method deprecated
     * @param {object} obj The object or module
     * @param {string} name The property name of the function on obj
     * @param {string} warning The one-time message to show if the function is called
     */
    Common.deprecated = function(obj, prop, warning) {
        obj[prop] = Common.chain(function() {
            Common.warnOnce('🔅 deprecated 🔅', warning);
        }, obj[prop]);
    };

    /**
     * Returns the next unique sequential ID.
     * @method nextId
     * @return {Number} Unique sequential ID
     */
    Common.nextId = function() {
        return Common._nextId++;
    };

    /**
     * A cross browser compatible indexOf implementation.
     * @method indexOf
     * @param {array} haystack
     * @param {object} needle
     * @return {number} The position of needle in haystack, otherwise -1.
     */
    Common.indexOf = function(haystack, needle) {
        if (haystack.indexOf)
            return haystack.indexOf(needle);

        for (var i = 0; i < haystack.length; i++) {
            if (haystack[i] === needle)
                return i;
        }

        return -1;
    };

    /**
     * A cross browser compatible array map implementation.
     * @method map
     * @param {array} list
     * @param {function} func
     * @return {array} Values from list transformed by func.
     */
    Common.map = function(list, func) {
        if (list.map) {
            return list.map(func);
        }

        var mapped = [];

        for (var i = 0; i < list.length; i += 1) {
            mapped.push(func(list[i]));
        }

        return mapped;
    };

    /**
     * Takes a directed graph and returns the partially ordered set of vertices in topological order.
     * Circular dependencies are allowed.
     * @method topologicalSort
     * @param {object} graph
     * @return {array} Partially ordered set of vertices in topological order.
     */
    Common.topologicalSort = function(graph) {
        // https://github.com/mgechev/javascript-algorithms
        // Copyright (c) Minko Gechev (MIT license)
        // Modifications: tidy formatting and naming
        var result = [],
            visited = [],
            temp = [];

        for (var node in graph) {
            if (!visited[node] && !temp[node]) {
                Common._topologicalSort(node, visited, temp, graph, result);
            }
        }

        return result;
    };

    Common._topologicalSort = function(node, visited, temp, graph, result) {
        var neighbors = graph[node] || [];
        temp[node] = true;

        for (var i = 0; i < neighbors.length; i += 1) {
            var neighbor = neighbors[i];

            if (temp[neighbor]) {
                // skip circular dependencies
                continue;
            }

            if (!visited[neighbor]) {
                Common._topologicalSort(neighbor, visited, temp, graph, result);
            }
        }

        temp[node] = false;
        visited[node] = true;

        result.push(node);
    };

    /**
     * Takes _n_ functions as arguments and returns a new function that calls them in order.
     * The arguments applied when calling the new function will also be applied to every function passed.
     * The value of `this` refers to the last value returned in the chain that was not `undefined`.
     * Therefore if a passed function does not return a value, the previously returned value is maintained.
     * After all passed functions have been called the new function returns the last returned value (if any).
     * If any of the passed functions are a chain, then the chain will be flattened.
     * @method chain
     * @param ...funcs {function} The functions to chain.
     * @return {function} A new function that calls the passed functions in order.
     */
    Common.chain = function() {
        var funcs = [];

        for (var i = 0; i < arguments.length; i += 1) {
            var func = arguments[i];

            if (func._chained) {
                // flatten already chained functions
                funcs.push.apply(funcs, func._chained);
            } else {
                funcs.push(func);
            }
        }

        var chain = function() {
            // https://github.com/GoogleChrome/devtools-docs/issues/53#issuecomment-51941358
            var lastResult,
                args = new Array(arguments.length);

            for (var i = 0, l = arguments.length; i < l; i++) {
                args[i] = arguments[i];
            }

            for (i = 0; i < funcs.length; i += 1) {
                var result = funcs[i].apply(lastResult, args);

                if (typeof result !== 'undefined') {
                    lastResult = result;
                }
            }

            return lastResult;
        };

        chain._chained = funcs;

        return chain;
    };

    /**
     * Chains a function to excute before the original function on the given `path` relative to `base`.
     * See also docs for `Common.chain`.
     * @method chainPathBefore
     * @param {} base The base object
     * @param {string} path The path relative to `base`
     * @param {function} func The function to chain before the original
     * @return {function} The chained function that replaced the original
     */
    Common.chainPathBefore = function(base, path, func) {
        return Common.set(base, path, Common.chain(
            func,
            Common.get(base, path)
        ));
    };

    /**
     * Chains a function to excute after the original function on the given `path` relative to `base`.
     * See also docs for `Common.chain`.
     * @method chainPathAfter
     * @param {} base The base object
     * @param {string} path The path relative to `base`
     * @param {function} func The function to chain after the original
     * @return {function} The chained function that replaced the original
     */
    Common.chainPathAfter = function(base, path, func) {
        return Common.set(base, path, Common.chain(
            Common.get(base, path),
            func
        ));
    };

    /**
     * Provide the [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module to enable
     * concave vertex decomposition support when using `Bodies.fromVertices` e.g. `Common.setDecomp(require('poly-decomp'))`.
     * @method setDecomp
     * @param {} decomp The [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module.
     */
    Common.setDecomp = function(decomp) {
        Common._decomp = decomp;
    };

    /**
     * Returns the [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module provided through `Common.setDecomp`,
     * otherwise returns the global `decomp` if set.
     * @method getDecomp
     * @return {} The [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module if provided.
     */
    Common.getDecomp = function() {
        // get user provided decomp if set
        var decomp = Common._decomp;

        try {
            // otherwise from window global
            if (!decomp && typeof window !== 'undefined') {
                decomp = window.decomp;
            }
    
            // otherwise from node global
            if (!decomp && typeof __webpack_require__.g !== 'undefined') {
                decomp = __webpack_require__.g.decomp;
            }
        } catch (e) {
            // decomp not available
            decomp = null;
        }

        return decomp;
    };
})();


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
* The `Matter.Bounds` module contains methods for creating and manipulating axis-aligned bounding boxes (AABB).
*
* @class Bounds
*/

var Bounds = {};

module.exports = Bounds;

(function() {

    /**
     * Creates a new axis-aligned bounding box (AABB) for the given vertices.
     * @method create
     * @param {vertices} vertices
     * @return {bounds} A new bounds object
     */
    Bounds.create = function(vertices) {
        var bounds = { 
            min: { x: 0, y: 0 }, 
            max: { x: 0, y: 0 }
        };

        if (vertices)
            Bounds.update(bounds, vertices);
        
        return bounds;
    };

    /**
     * Updates bounds using the given vertices and extends the bounds given a velocity.
     * @method update
     * @param {bounds} bounds
     * @param {vertices} vertices
     * @param {vector} velocity
     */
    Bounds.update = function(bounds, vertices, velocity) {
        bounds.min.x = Infinity;
        bounds.max.x = -Infinity;
        bounds.min.y = Infinity;
        bounds.max.y = -Infinity;

        for (var i = 0; i < vertices.length; i++) {
            var vertex = vertices[i];
            if (vertex.x > bounds.max.x) bounds.max.x = vertex.x;
            if (vertex.x < bounds.min.x) bounds.min.x = vertex.x;
            if (vertex.y > bounds.max.y) bounds.max.y = vertex.y;
            if (vertex.y < bounds.min.y) bounds.min.y = vertex.y;
        }
        
        if (velocity) {
            if (velocity.x > 0) {
                bounds.max.x += velocity.x;
            } else {
                bounds.min.x += velocity.x;
            }
            
            if (velocity.y > 0) {
                bounds.max.y += velocity.y;
            } else {
                bounds.min.y += velocity.y;
            }
        }
    };

    /**
     * Returns true if the bounds contains the given point.
     * @method contains
     * @param {bounds} bounds
     * @param {vector} point
     * @return {boolean} True if the bounds contain the point, otherwise false
     */
    Bounds.contains = function(bounds, point) {
        return point.x >= bounds.min.x && point.x <= bounds.max.x 
               && point.y >= bounds.min.y && point.y <= bounds.max.y;
    };

    /**
     * Returns true if the two bounds intersect.
     * @method overlaps
     * @param {bounds} boundsA
     * @param {bounds} boundsB
     * @return {boolean} True if the bounds overlap, otherwise false
     */
    Bounds.overlaps = function(boundsA, boundsB) {
        return (boundsA.min.x <= boundsB.max.x && boundsA.max.x >= boundsB.min.x
                && boundsA.max.y >= boundsB.min.y && boundsA.min.y <= boundsB.max.y);
    };

    /**
     * Translates the bounds by the given vector.
     * @method translate
     * @param {bounds} bounds
     * @param {vector} vector
     */
    Bounds.translate = function(bounds, vector) {
        bounds.min.x += vector.x;
        bounds.max.x += vector.x;
        bounds.min.y += vector.y;
        bounds.max.y += vector.y;
    };

    /**
     * Shifts the bounds to the given position.
     * @method shift
     * @param {bounds} bounds
     * @param {vector} position
     */
    Bounds.shift = function(bounds, position) {
        var deltaX = bounds.max.x - bounds.min.x,
            deltaY = bounds.max.y - bounds.min.y;
            
        bounds.min.x = position.x;
        bounds.max.x = position.x + deltaX;
        bounds.min.y = position.y;
        bounds.max.y = position.y + deltaY;
    };
    
})();


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
* The `Matter.Vector` module contains methods for creating and manipulating vectors.
* Vectors are the basis of all the geometry related operations in the engine.
* A `Matter.Vector` object is of the form `{ x: 0, y: 0 }`.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Vector
*/

// TODO: consider params for reusing vector objects

var Vector = {};

module.exports = Vector;

(function() {

    /**
     * Creates a new vector.
     * @method create
     * @param {number} x
     * @param {number} y
     * @return {vector} A new vector
     */
    Vector.create = function(x, y) {
        return { x: x || 0, y: y || 0 };
    };

    /**
     * Returns a new vector with `x` and `y` copied from the given `vector`.
     * @method clone
     * @param {vector} vector
     * @return {vector} A new cloned vector
     */
    Vector.clone = function(vector) {
        return { x: vector.x, y: vector.y };
    };

    /**
     * Returns the magnitude (length) of a vector.
     * @method magnitude
     * @param {vector} vector
     * @return {number} The magnitude of the vector
     */
    Vector.magnitude = function(vector) {
        return Math.sqrt((vector.x * vector.x) + (vector.y * vector.y));
    };

    /**
     * Returns the magnitude (length) of a vector (therefore saving a `sqrt` operation).
     * @method magnitudeSquared
     * @param {vector} vector
     * @return {number} The squared magnitude of the vector
     */
    Vector.magnitudeSquared = function(vector) {
        return (vector.x * vector.x) + (vector.y * vector.y);
    };

    /**
     * Rotates the vector about (0, 0) by specified angle.
     * @method rotate
     * @param {vector} vector
     * @param {number} angle
     * @param {vector} [output]
     * @return {vector} The vector rotated about (0, 0)
     */
    Vector.rotate = function(vector, angle, output) {
        var cos = Math.cos(angle), sin = Math.sin(angle);
        if (!output) output = {};
        var x = vector.x * cos - vector.y * sin;
        output.y = vector.x * sin + vector.y * cos;
        output.x = x;
        return output;
    };

    /**
     * Rotates the vector about a specified point by specified angle.
     * @method rotateAbout
     * @param {vector} vector
     * @param {number} angle
     * @param {vector} point
     * @param {vector} [output]
     * @return {vector} A new vector rotated about the point
     */
    Vector.rotateAbout = function(vector, angle, point, output) {
        var cos = Math.cos(angle), sin = Math.sin(angle);
        if (!output) output = {};
        var x = point.x + ((vector.x - point.x) * cos - (vector.y - point.y) * sin);
        output.y = point.y + ((vector.x - point.x) * sin + (vector.y - point.y) * cos);
        output.x = x;
        return output;
    };

    /**
     * Normalises a vector (such that its magnitude is `1`).
     * @method normalise
     * @param {vector} vector
     * @return {vector} A new vector normalised
     */
    Vector.normalise = function(vector) {
        var magnitude = Vector.magnitude(vector);
        if (magnitude === 0)
            return { x: 0, y: 0 };
        return { x: vector.x / magnitude, y: vector.y / magnitude };
    };

    /**
     * Returns the dot-product of two vectors.
     * @method dot
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The dot product of the two vectors
     */
    Vector.dot = function(vectorA, vectorB) {
        return (vectorA.x * vectorB.x) + (vectorA.y * vectorB.y);
    };

    /**
     * Returns the cross-product of two vectors.
     * @method cross
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The cross product of the two vectors
     */
    Vector.cross = function(vectorA, vectorB) {
        return (vectorA.x * vectorB.y) - (vectorA.y * vectorB.x);
    };

    /**
     * Returns the cross-product of three vectors.
     * @method cross3
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} vectorC
     * @return {number} The cross product of the three vectors
     */
    Vector.cross3 = function(vectorA, vectorB, vectorC) {
        return (vectorB.x - vectorA.x) * (vectorC.y - vectorA.y) - (vectorB.y - vectorA.y) * (vectorC.x - vectorA.x);
    };

    /**
     * Adds the two vectors.
     * @method add
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} [output]
     * @return {vector} A new vector of vectorA and vectorB added
     */
    Vector.add = function(vectorA, vectorB, output) {
        if (!output) output = {};
        output.x = vectorA.x + vectorB.x;
        output.y = vectorA.y + vectorB.y;
        return output;
    };

    /**
     * Subtracts the two vectors.
     * @method sub
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} [output]
     * @return {vector} A new vector of vectorA and vectorB subtracted
     */
    Vector.sub = function(vectorA, vectorB, output) {
        if (!output) output = {};
        output.x = vectorA.x - vectorB.x;
        output.y = vectorA.y - vectorB.y;
        return output;
    };

    /**
     * Multiplies a vector and a scalar.
     * @method mult
     * @param {vector} vector
     * @param {number} scalar
     * @return {vector} A new vector multiplied by scalar
     */
    Vector.mult = function(vector, scalar) {
        return { x: vector.x * scalar, y: vector.y * scalar };
    };

    /**
     * Divides a vector and a scalar.
     * @method div
     * @param {vector} vector
     * @param {number} scalar
     * @return {vector} A new vector divided by scalar
     */
    Vector.div = function(vector, scalar) {
        return { x: vector.x / scalar, y: vector.y / scalar };
    };

    /**
     * Returns the perpendicular vector. Set `negate` to true for the perpendicular in the opposite direction.
     * @method perp
     * @param {vector} vector
     * @param {bool} [negate=false]
     * @return {vector} The perpendicular vector
     */
    Vector.perp = function(vector, negate) {
        negate = negate === true ? -1 : 1;
        return { x: negate * -vector.y, y: negate * vector.x };
    };

    /**
     * Negates both components of a vector such that it points in the opposite direction.
     * @method neg
     * @param {vector} vector
     * @return {vector} The negated vector
     */
    Vector.neg = function(vector) {
        return { x: -vector.x, y: -vector.y };
    };

    /**
     * Returns the angle between the vector `vectorB - vectorA` and the x-axis in radians.
     * @method angle
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The angle in radians
     */
    Vector.angle = function(vectorA, vectorB) {
        return Math.atan2(vectorB.y - vectorA.y, vectorB.x - vectorA.x);
    };

    /**
     * Temporary vector pool (not thread-safe).
     * @property _temp
     * @type {vector[]}
     * @private
     */
    Vector._temp = [
        Vector.create(), Vector.create(), 
        Vector.create(), Vector.create(), 
        Vector.create(), Vector.create()
    ];

})();

/***/ }),
/* 3 */
/***/ (function(module, exports, __nested_webpack_require_35378__) {

/**
* The `Matter.Vertices` module contains methods for creating and manipulating sets of vertices.
* A set of vertices is an array of `Matter.Vector` with additional indexing properties inserted by `Vertices.create`.
* A `Matter.Body` maintains a set of vertices to represent the shape of the object (its convex hull).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Vertices
*/

var Vertices = {};

module.exports = Vertices;

var Vector = __nested_webpack_require_35378__(2);
var Common = __nested_webpack_require_35378__(0);

(function() {

    /**
     * Creates a new set of `Matter.Body` compatible vertices.
     * The `points` argument accepts an array of `Matter.Vector` points orientated around the origin `(0, 0)`, for example:
     *
     *     [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
     *
     * The `Vertices.create` method returns a new array of vertices, which are similar to Matter.Vector objects,
     * but with some additional references required for efficient collision detection routines.
     *
     * Vertices must be specified in clockwise order.
     *
     * Note that the `body` argument is not optional, a `Matter.Body` reference must be provided.
     *
     * @method create
     * @param {vector[]} points
     * @param {body} body
     */
    Vertices.create = function(points, body) {
        var vertices = [];

        for (var i = 0; i < points.length; i++) {
            var point = points[i],
                vertex = {
                    x: point.x,
                    y: point.y,
                    index: i,
                    body: body,
                    isInternal: false
                };

            vertices.push(vertex);
        }

        return vertices;
    };

    /**
     * Parses a string containing ordered x y pairs separated by spaces (and optionally commas), 
     * into a `Matter.Vertices` object for the given `Matter.Body`.
     * For parsing SVG paths, see `Svg.pathToVertices`.
     * @method fromPath
     * @param {string} path
     * @param {body} body
     * @return {vertices} vertices
     */
    Vertices.fromPath = function(path, body) {
        var pathPattern = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,
            points = [];

        path.replace(pathPattern, function(match, x, y) {
            points.push({ x: parseFloat(x), y: parseFloat(y) });
        });

        return Vertices.create(points, body);
    };

    /**
     * Returns the centre (centroid) of the set of vertices.
     * @method centre
     * @param {vertices} vertices
     * @return {vector} The centre point
     */
    Vertices.centre = function(vertices) {
        var area = Vertices.area(vertices, true),
            centre = { x: 0, y: 0 },
            cross,
            temp,
            j;

        for (var i = 0; i < vertices.length; i++) {
            j = (i + 1) % vertices.length;
            cross = Vector.cross(vertices[i], vertices[j]);
            temp = Vector.mult(Vector.add(vertices[i], vertices[j]), cross);
            centre = Vector.add(centre, temp);
        }

        return Vector.div(centre, 6 * area);
    };

    /**
     * Returns the average (mean) of the set of vertices.
     * @method mean
     * @param {vertices} vertices
     * @return {vector} The average point
     */
    Vertices.mean = function(vertices) {
        var average = { x: 0, y: 0 };

        for (var i = 0; i < vertices.length; i++) {
            average.x += vertices[i].x;
            average.y += vertices[i].y;
        }

        return Vector.div(average, vertices.length);
    };

    /**
     * Returns the area of the set of vertices.
     * @method area
     * @param {vertices} vertices
     * @param {bool} signed
     * @return {number} The area
     */
    Vertices.area = function(vertices, signed) {
        var area = 0,
            j = vertices.length - 1;

        for (var i = 0; i < vertices.length; i++) {
            area += (vertices[j].x - vertices[i].x) * (vertices[j].y + vertices[i].y);
            j = i;
        }

        if (signed)
            return area / 2;

        return Math.abs(area) / 2;
    };

    /**
     * Returns the moment of inertia (second moment of area) of the set of vertices given the total mass.
     * @method inertia
     * @param {vertices} vertices
     * @param {number} mass
     * @return {number} The polygon's moment of inertia
     */
    Vertices.inertia = function(vertices, mass) {
        var numerator = 0,
            denominator = 0,
            v = vertices,
            cross,
            j;

        // find the polygon's moment of inertia, using second moment of area
        // from equations at http://www.physicsforums.com/showthread.php?t=25293
        for (var n = 0; n < v.length; n++) {
            j = (n + 1) % v.length;
            cross = Math.abs(Vector.cross(v[j], v[n]));
            numerator += cross * (Vector.dot(v[j], v[j]) + Vector.dot(v[j], v[n]) + Vector.dot(v[n], v[n]));
            denominator += cross;
        }

        return (mass / 6) * (numerator / denominator);
    };

    /**
     * Translates the set of vertices in-place.
     * @method translate
     * @param {vertices} vertices
     * @param {vector} vector
     * @param {number} scalar
     */
    Vertices.translate = function(vertices, vector, scalar) {
        scalar = typeof scalar !== 'undefined' ? scalar : 1;

        var verticesLength = vertices.length,
            translateX = vector.x * scalar,
            translateY = vector.y * scalar,
            i;
        
        for (i = 0; i < verticesLength; i++) {
            vertices[i].x += translateX;
            vertices[i].y += translateY;
        }

        return vertices;
    };

    /**
     * Rotates the set of vertices in-place.
     * @method rotate
     * @param {vertices} vertices
     * @param {number} angle
     * @param {vector} point
     */
    Vertices.rotate = function(vertices, angle, point) {
        if (angle === 0)
            return;

        var cos = Math.cos(angle),
            sin = Math.sin(angle),
            pointX = point.x,
            pointY = point.y,
            verticesLength = vertices.length,
            vertex,
            dx,
            dy,
            i;

        for (i = 0; i < verticesLength; i++) {
            vertex = vertices[i];
            dx = vertex.x - pointX;
            dy = vertex.y - pointY;
            vertex.x = pointX + (dx * cos - dy * sin);
            vertex.y = pointY + (dx * sin + dy * cos);
        }

        return vertices;
    };

    /**
     * Returns `true` if the `point` is inside the set of `vertices`.
     * @method contains
     * @param {vertices} vertices
     * @param {vector} point
     * @return {boolean} True if the vertices contains point, otherwise false
     */
    Vertices.contains = function(vertices, point) {
        var pointX = point.x,
            pointY = point.y,
            verticesLength = vertices.length,
            vertex = vertices[verticesLength - 1],
            nextVertex;

        for (var i = 0; i < verticesLength; i++) {
            nextVertex = vertices[i];

            if ((pointX - vertex.x) * (nextVertex.y - vertex.y) 
                + (pointY - vertex.y) * (vertex.x - nextVertex.x) > 0) {
                return false;
            }

            vertex = nextVertex;
        }

        return true;
    };

    /**
     * Scales the vertices from a point (default is centre) in-place.
     * @method scale
     * @param {vertices} vertices
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} point
     */
    Vertices.scale = function(vertices, scaleX, scaleY, point) {
        if (scaleX === 1 && scaleY === 1)
            return vertices;

        point = point || Vertices.centre(vertices);

        var vertex,
            delta;

        for (var i = 0; i < vertices.length; i++) {
            vertex = vertices[i];
            delta = Vector.sub(vertex, point);
            vertices[i].x = point.x + delta.x * scaleX;
            vertices[i].y = point.y + delta.y * scaleY;
        }

        return vertices;
    };

    /**
     * Chamfers a set of vertices by giving them rounded corners, returns a new set of vertices.
     * The radius parameter is a single number or an array to specify the radius for each vertex.
     * @method chamfer
     * @param {vertices} vertices
     * @param {number[]} radius
     * @param {number} quality
     * @param {number} qualityMin
     * @param {number} qualityMax
     */
    Vertices.chamfer = function(vertices, radius, quality, qualityMin, qualityMax) {
        if (typeof radius === 'number') {
            radius = [radius];
        } else {
            radius = radius || [8];
        }

        // quality defaults to -1, which is auto
        quality = (typeof quality !== 'undefined') ? quality : -1;
        qualityMin = qualityMin || 2;
        qualityMax = qualityMax || 14;

        var newVertices = [];

        for (var i = 0; i < vertices.length; i++) {
            var prevVertex = vertices[i - 1 >= 0 ? i - 1 : vertices.length - 1],
                vertex = vertices[i],
                nextVertex = vertices[(i + 1) % vertices.length],
                currentRadius = radius[i < radius.length ? i : radius.length - 1];

            if (currentRadius === 0) {
                newVertices.push(vertex);
                continue;
            }

            var prevNormal = Vector.normalise({ 
                x: vertex.y - prevVertex.y, 
                y: prevVertex.x - vertex.x
            });

            var nextNormal = Vector.normalise({ 
                x: nextVertex.y - vertex.y, 
                y: vertex.x - nextVertex.x
            });

            var diagonalRadius = Math.sqrt(2 * Math.pow(currentRadius, 2)),
                radiusVector = Vector.mult(Common.clone(prevNormal), currentRadius),
                midNormal = Vector.normalise(Vector.mult(Vector.add(prevNormal, nextNormal), 0.5)),
                scaledVertex = Vector.sub(vertex, Vector.mult(midNormal, diagonalRadius));

            var precision = quality;

            if (quality === -1) {
                // automatically decide precision
                precision = Math.pow(currentRadius, 0.32) * 1.75;
            }

            precision = Common.clamp(precision, qualityMin, qualityMax);

            // use an even value for precision, more likely to reduce axes by using symmetry
            if (precision % 2 === 1)
                precision += 1;

            var alpha = Math.acos(Vector.dot(prevNormal, nextNormal)),
                theta = alpha / precision;

            for (var j = 0; j < precision; j++) {
                newVertices.push(Vector.add(Vector.rotate(radiusVector, theta * j), scaledVertex));
            }
        }

        return newVertices;
    };

    /**
     * Sorts the input vertices into clockwise order in place.
     * @method clockwiseSort
     * @param {vertices} vertices
     * @return {vertices} vertices
     */
    Vertices.clockwiseSort = function(vertices) {
        var centre = Vertices.mean(vertices);

        vertices.sort(function(vertexA, vertexB) {
            return Vector.angle(centre, vertexA) - Vector.angle(centre, vertexB);
        });

        return vertices;
    };

    /**
     * Returns true if the vertices form a convex shape (vertices must be in clockwise order).
     * @method isConvex
     * @param {vertices} vertices
     * @return {bool} `true` if the `vertices` are convex, `false` if not (or `null` if not computable).
     */
    Vertices.isConvex = function(vertices) {
        // http://paulbourke.net/geometry/polygonmesh/
        // Copyright (c) Paul Bourke (use permitted)

        var flag = 0,
            n = vertices.length,
            i,
            j,
            k,
            z;

        if (n < 3)
            return null;

        for (i = 0; i < n; i++) {
            j = (i + 1) % n;
            k = (i + 2) % n;
            z = (vertices[j].x - vertices[i].x) * (vertices[k].y - vertices[j].y);
            z -= (vertices[j].y - vertices[i].y) * (vertices[k].x - vertices[j].x);

            if (z < 0) {
                flag |= 1;
            } else if (z > 0) {
                flag |= 2;
            }

            if (flag === 3) {
                return false;
            }
        }

        if (flag !== 0){
            return true;
        } else {
            return null;
        }
    };

    /**
     * Returns the convex hull of the input vertices as a new array of points.
     * @method hull
     * @param {vertices} vertices
     * @return [vertex] vertices
     */
    Vertices.hull = function(vertices) {
        // http://geomalgorithms.com/a10-_hull-1.html

        var upper = [],
            lower = [], 
            vertex,
            i;

        // sort vertices on x-axis (y-axis for ties)
        vertices = vertices.slice(0);
        vertices.sort(function(vertexA, vertexB) {
            var dx = vertexA.x - vertexB.x;
            return dx !== 0 ? dx : vertexA.y - vertexB.y;
        });

        // build lower hull
        for (i = 0; i < vertices.length; i += 1) {
            vertex = vertices[i];

            while (lower.length >= 2 
                   && Vector.cross3(lower[lower.length - 2], lower[lower.length - 1], vertex) <= 0) {
                lower.pop();
            }

            lower.push(vertex);
        }

        // build upper hull
        for (i = vertices.length - 1; i >= 0; i -= 1) {
            vertex = vertices[i];

            while (upper.length >= 2 
                   && Vector.cross3(upper[upper.length - 2], upper[upper.length - 1], vertex) <= 0) {
                upper.pop();
            }

            upper.push(vertex);
        }

        // concatenation of the lower and upper hulls gives the convex hull
        // omit last points because they are repeated at the beginning of the other list
        upper.pop();
        lower.pop();

        return upper.concat(lower);
    };

})();


/***/ }),
/* 4 */
/***/ (function(module, exports, __nested_webpack_require_49501__) {

/**
* The `Matter.Events` module contains methods to fire and listen to events on other objects.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Events
*/

var Events = {};

module.exports = Events;

var Common = __nested_webpack_require_49501__(0);

(function() {

    /**
     * Subscribes a callback function to the given object's `eventName`.
     * @method on
     * @param {} object
     * @param {string} eventNames
     * @param {function} callback
     */
    Events.on = function(object, eventNames, callback) {
        var names = eventNames.split(' '),
            name;

        for (var i = 0; i < names.length; i++) {
            name = names[i];
            object.events = object.events || {};
            object.events[name] = object.events[name] || [];
            object.events[name].push(callback);
        }

        return callback;
    };

    /**
     * Removes the given event callback. If no callback, clears all callbacks in `eventNames`. If no `eventNames`, clears all events.
     * @method off
     * @param {} object
     * @param {string} eventNames
     * @param {function} callback
     */
    Events.off = function(object, eventNames, callback) {
        if (!eventNames) {
            object.events = {};
            return;
        }

        // handle Events.off(object, callback)
        if (typeof eventNames === 'function') {
            callback = eventNames;
            eventNames = Common.keys(object.events).join(' ');
        }

        var names = eventNames.split(' ');

        for (var i = 0; i < names.length; i++) {
            var callbacks = object.events[names[i]],
                newCallbacks = [];

            if (callback && callbacks) {
                for (var j = 0; j < callbacks.length; j++) {
                    if (callbacks[j] !== callback)
                        newCallbacks.push(callbacks[j]);
                }
            }

            object.events[names[i]] = newCallbacks;
        }
    };

    /**
     * Fires all the callbacks subscribed to the given object's `eventName`, in the order they subscribed, if any.
     * @method trigger
     * @param {} object
     * @param {string} eventNames
     * @param {} event
     */
    Events.trigger = function(object, eventNames, event) {
        var names,
            name,
            callbacks,
            eventClone;

        var events = object.events;
        
        if (events && Common.keys(events).length > 0) {
            if (!event)
                event = {};

            names = eventNames.split(' ');

            for (var i = 0; i < names.length; i++) {
                name = names[i];
                callbacks = events[name];

                if (callbacks) {
                    eventClone = Common.clone(event, false);
                    eventClone.name = name;
                    eventClone.source = object;

                    for (var j = 0; j < callbacks.length; j++) {
                        callbacks[j].apply(object, [eventClone]);
                    }
                }
            }
        }
    };

})();


/***/ }),
/* 5 */
/***/ (function(module, exports, __nested_webpack_require_52699__) {

/**
* A composite is a collection of `Matter.Body`, `Matter.Constraint` and other `Matter.Composite` objects.
*
* They are a container that can represent complex objects made of multiple parts, even if they are not physically connected.
* A composite could contain anything from a single body all the way up to a whole world.
* 
* When making any changes to composites, use the included functions rather than changing their properties directly.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Composite
*/

var Composite = {};

module.exports = Composite;

var Events = __nested_webpack_require_52699__(4);
var Common = __nested_webpack_require_52699__(0);
var Bounds = __nested_webpack_require_52699__(1);
var Body = __nested_webpack_require_52699__(6);

(function() {

    /**
     * Creates a new composite. The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properites section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} [options]
     * @return {composite} A new composite
     */
    Composite.create = function(options) {
        return Common.extend({ 
            id: Common.nextId(),
            type: 'composite',
            parent: null,
            isModified: false,
            bodies: [], 
            constraints: [], 
            composites: [],
            label: 'Composite',
            plugin: {},
            cache: {
                allBodies: null,
                allConstraints: null,
                allComposites: null
            }
        }, options);
    };

    /**
     * Sets the composite's `isModified` flag. 
     * If `updateParents` is true, all parents will be set (default: false).
     * If `updateChildren` is true, all children will be set (default: false).
     * @private
     * @method setModified
     * @param {composite} composite
     * @param {boolean} isModified
     * @param {boolean} [updateParents=false]
     * @param {boolean} [updateChildren=false]
     */
    Composite.setModified = function(composite, isModified, updateParents, updateChildren) {
        composite.isModified = isModified;

        if (isModified && composite.cache) {
            composite.cache.allBodies = null;
            composite.cache.allConstraints = null;
            composite.cache.allComposites = null;
        }

        if (updateParents && composite.parent) {
            Composite.setModified(composite.parent, isModified, updateParents, updateChildren);
        }

        if (updateChildren) {
            for (var i = 0; i < composite.composites.length; i++) {
                var childComposite = composite.composites[i];
                Composite.setModified(childComposite, isModified, updateParents, updateChildren);
            }
        }
    };

    /**
     * Generic single or multi-add function. Adds a single or an array of body(s), constraint(s) or composite(s) to the given composite.
     * Triggers `beforeAdd` and `afterAdd` events on the `composite`.
     * @method add
     * @param {composite} composite
     * @param {object|array} object A single or an array of body(s), constraint(s) or composite(s)
     * @return {composite} The original composite with the objects added
     */
    Composite.add = function(composite, object) {
        var objects = [].concat(object);

        Events.trigger(composite, 'beforeAdd', { object: object });

        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];

            switch (obj.type) {

            case 'body':
                // skip adding compound parts
                if (obj.parent !== obj) {
                    Common.warn('Composite.add: skipped adding a compound body part (you must add its parent instead)');
                    break;
                }

                Composite.addBody(composite, obj);
                break;
            case 'constraint':
                Composite.addConstraint(composite, obj);
                break;
            case 'composite':
                Composite.addComposite(composite, obj);
                break;
            case 'mouseConstraint':
                Composite.addConstraint(composite, obj.constraint);
                break;

            }
        }

        Events.trigger(composite, 'afterAdd', { object: object });

        return composite;
    };

    /**
     * Generic remove function. Removes one or many body(s), constraint(s) or a composite(s) to the given composite.
     * Optionally searching its children recursively.
     * Triggers `beforeRemove` and `afterRemove` events on the `composite`.
     * @method remove
     * @param {composite} composite
     * @param {object|array} object
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the objects removed
     */
    Composite.remove = function(composite, object, deep) {
        var objects = [].concat(object);

        Events.trigger(composite, 'beforeRemove', { object: object });

        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];

            switch (obj.type) {

            case 'body':
                Composite.removeBody(composite, obj, deep);
                break;
            case 'constraint':
                Composite.removeConstraint(composite, obj, deep);
                break;
            case 'composite':
                Composite.removeComposite(composite, obj, deep);
                break;
            case 'mouseConstraint':
                Composite.removeConstraint(composite, obj.constraint);
                break;

            }
        }

        Events.trigger(composite, 'afterRemove', { object: object });

        return composite;
    };

    /**
     * Adds a composite to the given composite.
     * @private
     * @method addComposite
     * @param {composite} compositeA
     * @param {composite} compositeB
     * @return {composite} The original compositeA with the objects from compositeB added
     */
    Composite.addComposite = function(compositeA, compositeB) {
        compositeA.composites.push(compositeB);
        compositeB.parent = compositeA;
        Composite.setModified(compositeA, true, true, false);
        return compositeA;
    };

    /**
     * Removes a composite from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeComposite
     * @param {composite} compositeA
     * @param {composite} compositeB
     * @param {boolean} [deep=false]
     * @return {composite} The original compositeA with the composite removed
     */
    Composite.removeComposite = function(compositeA, compositeB, deep) {
        var position = Common.indexOf(compositeA.composites, compositeB);
        if (position !== -1) {
            Composite.removeCompositeAt(compositeA, position);
        }

        if (deep) {
            for (var i = 0; i < compositeA.composites.length; i++){
                Composite.removeComposite(compositeA.composites[i], compositeB, true);
            }
        }

        return compositeA;
    };

    /**
     * Removes a composite from the given composite.
     * @private
     * @method removeCompositeAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the composite removed
     */
    Composite.removeCompositeAt = function(composite, position) {
        composite.composites.splice(position, 1);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Adds a body to the given composite.
     * @private
     * @method addBody
     * @param {composite} composite
     * @param {body} body
     * @return {composite} The original composite with the body added
     */
    Composite.addBody = function(composite, body) {
        composite.bodies.push(body);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Removes a body from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeBody
     * @param {composite} composite
     * @param {body} body
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the body removed
     */
    Composite.removeBody = function(composite, body, deep) {
        var position = Common.indexOf(composite.bodies, body);
        if (position !== -1) {
            Composite.removeBodyAt(composite, position);
        }

        if (deep) {
            for (var i = 0; i < composite.composites.length; i++){
                Composite.removeBody(composite.composites[i], body, true);
            }
        }

        return composite;
    };

    /**
     * Removes a body from the given composite.
     * @private
     * @method removeBodyAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the body removed
     */
    Composite.removeBodyAt = function(composite, position) {
        composite.bodies.splice(position, 1);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Adds a constraint to the given composite.
     * @private
     * @method addConstraint
     * @param {composite} composite
     * @param {constraint} constraint
     * @return {composite} The original composite with the constraint added
     */
    Composite.addConstraint = function(composite, constraint) {
        composite.constraints.push(constraint);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Removes a constraint from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeConstraint
     * @param {composite} composite
     * @param {constraint} constraint
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the constraint removed
     */
    Composite.removeConstraint = function(composite, constraint, deep) {
        var position = Common.indexOf(composite.constraints, constraint);
        if (position !== -1) {
            Composite.removeConstraintAt(composite, position);
        }

        if (deep) {
            for (var i = 0; i < composite.composites.length; i++){
                Composite.removeConstraint(composite.composites[i], constraint, true);
            }
        }

        return composite;
    };

    /**
     * Removes a body from the given composite.
     * @private
     * @method removeConstraintAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the constraint removed
     */
    Composite.removeConstraintAt = function(composite, position) {
        composite.constraints.splice(position, 1);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Removes all bodies, constraints and composites from the given composite.
     * Optionally clearing its children recursively.
     * @method clear
     * @param {composite} composite
     * @param {boolean} keepStatic
     * @param {boolean} [deep=false]
     */
    Composite.clear = function(composite, keepStatic, deep) {
        if (deep) {
            for (var i = 0; i < composite.composites.length; i++){
                Composite.clear(composite.composites[i], keepStatic, true);
            }
        }
        
        if (keepStatic) {
            composite.bodies = composite.bodies.filter(function(body) { return body.isStatic; });
        } else {
            composite.bodies.length = 0;
        }

        composite.constraints.length = 0;
        composite.composites.length = 0;

        Composite.setModified(composite, true, true, false);

        return composite;
    };

    /**
     * Returns all bodies in the given composite, including all bodies in its children, recursively.
     * @method allBodies
     * @param {composite} composite
     * @return {body[]} All the bodies
     */
    Composite.allBodies = function(composite) {
        if (composite.cache && composite.cache.allBodies) {
            return composite.cache.allBodies;
        }

        var bodies = [].concat(composite.bodies);

        for (var i = 0; i < composite.composites.length; i++)
            bodies = bodies.concat(Composite.allBodies(composite.composites[i]));

        if (composite.cache) {
            composite.cache.allBodies = bodies;
        }

        return bodies;
    };

    /**
     * Returns all constraints in the given composite, including all constraints in its children, recursively.
     * @method allConstraints
     * @param {composite} composite
     * @return {constraint[]} All the constraints
     */
    Composite.allConstraints = function(composite) {
        if (composite.cache && composite.cache.allConstraints) {
            return composite.cache.allConstraints;
        }

        var constraints = [].concat(composite.constraints);

        for (var i = 0; i < composite.composites.length; i++)
            constraints = constraints.concat(Composite.allConstraints(composite.composites[i]));

        if (composite.cache) {
            composite.cache.allConstraints = constraints;
        }

        return constraints;
    };

    /**
     * Returns all composites in the given composite, including all composites in its children, recursively.
     * @method allComposites
     * @param {composite} composite
     * @return {composite[]} All the composites
     */
    Composite.allComposites = function(composite) {
        if (composite.cache && composite.cache.allComposites) {
            return composite.cache.allComposites;
        }

        var composites = [].concat(composite.composites);

        for (var i = 0; i < composite.composites.length; i++)
            composites = composites.concat(Composite.allComposites(composite.composites[i]));

        if (composite.cache) {
            composite.cache.allComposites = composites;
        }

        return composites;
    };

    /**
     * Searches the composite recursively for an object matching the type and id supplied, null if not found.
     * @method get
     * @param {composite} composite
     * @param {number} id
     * @param {string} type
     * @return {object} The requested object, if found
     */
    Composite.get = function(composite, id, type) {
        var objects,
            object;

        switch (type) {
        case 'body':
            objects = Composite.allBodies(composite);
            break;
        case 'constraint':
            objects = Composite.allConstraints(composite);
            break;
        case 'composite':
            objects = Composite.allComposites(composite).concat(composite);
            break;
        }

        if (!objects)
            return null;

        object = objects.filter(function(object) { 
            return object.id.toString() === id.toString(); 
        });

        return object.length === 0 ? null : object[0];
    };

    /**
     * Moves the given object(s) from compositeA to compositeB (equal to a remove followed by an add).
     * @method move
     * @param {compositeA} compositeA
     * @param {object[]} objects
     * @param {compositeB} compositeB
     * @return {composite} Returns compositeA
     */
    Composite.move = function(compositeA, objects, compositeB) {
        Composite.remove(compositeA, objects);
        Composite.add(compositeB, objects);
        return compositeA;
    };

    /**
     * Assigns new ids for all objects in the composite, recursively.
     * @method rebase
     * @param {composite} composite
     * @return {composite} Returns composite
     */
    Composite.rebase = function(composite) {
        var objects = Composite.allBodies(composite)
            .concat(Composite.allConstraints(composite))
            .concat(Composite.allComposites(composite));

        for (var i = 0; i < objects.length; i++) {
            objects[i].id = Common.nextId();
        }

        return composite;
    };

    /**
     * Translates all children in the composite by a given vector relative to their current positions, 
     * without imparting any velocity.
     * @method translate
     * @param {composite} composite
     * @param {vector} translation
     * @param {bool} [recursive=true]
     */
    Composite.translate = function(composite, translation, recursive) {
        var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;

        for (var i = 0; i < bodies.length; i++) {
            Body.translate(bodies[i], translation);
        }

        return composite;
    };

    /**
     * Rotates all children in the composite by a given angle about the given point, without imparting any angular velocity.
     * @method rotate
     * @param {composite} composite
     * @param {number} rotation
     * @param {vector} point
     * @param {bool} [recursive=true]
     */
    Composite.rotate = function(composite, rotation, point, recursive) {
        var cos = Math.cos(rotation),
            sin = Math.sin(rotation),
            bodies = recursive ? Composite.allBodies(composite) : composite.bodies;

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                dx = body.position.x - point.x,
                dy = body.position.y - point.y;
                
            Body.setPosition(body, {
                x: point.x + (dx * cos - dy * sin),
                y: point.y + (dx * sin + dy * cos)
            });

            Body.rotate(body, rotation);
        }

        return composite;
    };

    /**
     * Scales all children in the composite, including updating physical properties (mass, area, axes, inertia), from a world-space point.
     * @method scale
     * @param {composite} composite
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} point
     * @param {bool} [recursive=true]
     */
    Composite.scale = function(composite, scaleX, scaleY, point, recursive) {
        var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                dx = body.position.x - point.x,
                dy = body.position.y - point.y;
                
            Body.setPosition(body, {
                x: point.x + dx * scaleX,
                y: point.y + dy * scaleY
            });

            Body.scale(body, scaleX, scaleY);
        }

        return composite;
    };

    /**
     * Returns the union of the bounds of all of the composite's bodies.
     * @method bounds
     * @param {composite} composite The composite.
     * @returns {bounds} The composite bounds.
     */
    Composite.bounds = function(composite) {
        var bodies = Composite.allBodies(composite),
            vertices = [];

        for (var i = 0; i < bodies.length; i += 1) {
            var body = bodies[i];
            vertices.push(body.bounds.min, body.bounds.max);
        }

        return Bounds.create(vertices);
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired when a call to `Composite.add` is made, before objects have been added.
    *
    * @event beforeAdd
    * @param {} event An event object
    * @param {} event.object The object(s) to be added (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when a call to `Composite.add` is made, after objects have been added.
    *
    * @event afterAdd
    * @param {} event An event object
    * @param {} event.object The object(s) that have been added (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when a call to `Composite.remove` is made, before objects have been removed.
    *
    * @event beforeRemove
    * @param {} event An event object
    * @param {} event.object The object(s) to be removed (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when a call to `Composite.remove` is made, after objects have been removed.
    *
    * @event afterRemove
    * @param {} event An event object
    * @param {} event.object The object(s) that have been removed (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */

    /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "composite"
     * @readOnly
     */

    /**
     * An arbitrary `String` name to help the user identify and manage composites.
     *
     * @property label
     * @type string
     * @default "Composite"
     */

    /**
     * A flag that specifies whether the composite has been modified during the current step.
     * This is automatically managed when bodies, constraints or composites are added or removed.
     *
     * @property isModified
     * @type boolean
     * @default false
     */

    /**
     * The `Composite` that is the parent of this composite. It is automatically managed by the `Matter.Composite` methods.
     *
     * @property parent
     * @type composite
     * @default null
     */

    /**
     * An array of `Body` that are _direct_ children of this composite.
     * To add or remove bodies you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allBodies` method.
     *
     * @property bodies
     * @type body[]
     * @default []
     */

    /**
     * An array of `Constraint` that are _direct_ children of this composite.
     * To add or remove constraints you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allConstraints` method.
     *
     * @property constraints
     * @type constraint[]
     * @default []
     */

    /**
     * An array of `Composite` that are _direct_ children of this composite.
     * To add or remove composites you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allComposites` method.
     *
     * @property composites
     * @type composite[]
     * @default []
     */

    /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */

    /**
     * An object used for storing cached results for performance reasons.
     * This is used internally only and is automatically managed.
     *
     * @private
     * @property cache
     * @type {}
     */

})();


/***/ }),
/* 6 */
/***/ (function(module, exports, __nested_webpack_require_76386__) {

/**
* The `Matter.Body` module contains methods for creating and manipulating body models.
* A `Matter.Body` is a rigid body that can be simulated by a `Matter.Engine`.
* Factories for commonly used body configurations (such as rectangles, circles and other polygons) can be found in the module `Matter.Bodies`.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).

* @class Body
*/

var Body = {};

module.exports = Body;

var Vertices = __nested_webpack_require_76386__(3);
var Vector = __nested_webpack_require_76386__(2);
var Sleeping = __nested_webpack_require_76386__(7);
var Render = __nested_webpack_require_76386__(16);
var Common = __nested_webpack_require_76386__(0);
var Bounds = __nested_webpack_require_76386__(1);
var Axes = __nested_webpack_require_76386__(11);

(function() {

    Body._inertiaScale = 4;
    Body._nextCollidingGroupId = 1;
    Body._nextNonCollidingGroupId = -1;
    Body._nextCategory = 0x0001;

    /**
     * Creates a new rigid body model. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * Vertices must be specified in clockwise order.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} options
     * @return {body} body
     */
    Body.create = function(options) {
        var defaults = {
            id: Common.nextId(),
            type: 'body',
            label: 'Body',
            parts: [],
            plugin: {},
            angle: 0,
            vertices: Vertices.fromPath('L 0 0 L 40 0 L 40 40 L 0 40'),
            position: { x: 0, y: 0 },
            force: { x: 0, y: 0 },
            torque: 0,
            positionImpulse: { x: 0, y: 0 },
            constraintImpulse: { x: 0, y: 0, angle: 0 },
            totalContacts: 0,
            speed: 0,
            angularSpeed: 0,
            velocity: { x: 0, y: 0 },
            angularVelocity: 0,
            isSensor: false,
            isStatic: false,
            isSleeping: false,
            motion: 0,
            sleepThreshold: 60,
            density: 0.001,
            restitution: 0,
            friction: 0.1,
            frictionStatic: 0.5,
            frictionAir: 0.01,
            collisionFilter: {
                category: 0x0001,
                mask: 0xFFFFFFFF,
                group: 0
            },
            slop: 0.05,
            timeScale: 1,
            render: {
                visible: true,
                opacity: 1,
                strokeStyle: null,
                fillStyle: null,
                lineWidth: null,
                sprite: {
                    xScale: 1,
                    yScale: 1,
                    xOffset: 0,
                    yOffset: 0
                }
            },
            events: null,
            bounds: null,
            chamfer: null,
            circleRadius: 0,
            positionPrev: null,
            anglePrev: 0,
            parent: null,
            axes: null,
            area: 0,
            mass: 0,
            inertia: 0,
            _original: null
        };

        var body = Common.extend(defaults, options);

        _initProperties(body, options);

        return body;
    };

    /**
     * Returns the next unique group index for which bodies will collide.
     * If `isNonColliding` is `true`, returns the next unique group index for which bodies will _not_ collide.
     * See `body.collisionFilter` for more information.
     * @method nextGroup
     * @param {bool} [isNonColliding=false]
     * @return {Number} Unique group index
     */
    Body.nextGroup = function(isNonColliding) {
        if (isNonColliding)
            return Body._nextNonCollidingGroupId--;

        return Body._nextCollidingGroupId++;
    };

    /**
     * Returns the next unique category bitfield (starting after the initial default category `0x0001`).
     * There are 32 available. See `body.collisionFilter` for more information.
     * @method nextCategory
     * @return {Number} Unique category bitfield
     */
    Body.nextCategory = function() {
        Body._nextCategory = Body._nextCategory << 1;
        return Body._nextCategory;
    };

    /**
     * Initialises body properties.
     * @method _initProperties
     * @private
     * @param {body} body
     * @param {} [options]
     */
    var _initProperties = function(body, options) {
        options = options || {};

        // init required properties (order is important)
        Body.set(body, {
            bounds: body.bounds || Bounds.create(body.vertices),
            positionPrev: body.positionPrev || Vector.clone(body.position),
            anglePrev: body.anglePrev || body.angle,
            vertices: body.vertices,
            parts: body.parts || [body],
            isStatic: body.isStatic,
            isSleeping: body.isSleeping,
            parent: body.parent || body
        });

        Vertices.rotate(body.vertices, body.angle, body.position);
        Axes.rotate(body.axes, body.angle);
        Bounds.update(body.bounds, body.vertices, body.velocity);

        // allow options to override the automatically calculated properties
        Body.set(body, {
            axes: options.axes || body.axes,
            area: options.area || body.area,
            mass: options.mass || body.mass,
            inertia: options.inertia || body.inertia
        });

        // render properties
        var defaultFillStyle = (body.isStatic ? '#14151f' : Common.choose(['#f19648', '#f5d259', '#f55a3c', '#063e7b', '#ececd1'])),
            defaultStrokeStyle = body.isStatic ? '#555' : '#ccc',
            defaultLineWidth = body.isStatic && body.render.fillStyle === null ? 1 : 0;
        body.render.fillStyle = body.render.fillStyle || defaultFillStyle;
        body.render.strokeStyle = body.render.strokeStyle || defaultStrokeStyle;
        body.render.lineWidth = body.render.lineWidth || defaultLineWidth;
        body.render.sprite.xOffset += -(body.bounds.min.x - body.position.x) / (body.bounds.max.x - body.bounds.min.x);
        body.render.sprite.yOffset += -(body.bounds.min.y - body.position.y) / (body.bounds.max.y - body.bounds.min.y);
    };

    /**
     * Given a property and a value (or map of), sets the property(s) on the body, using the appropriate setter functions if they exist.
     * Prefer to use the actual setter functions in performance critical situations.
     * @method set
     * @param {body} body
     * @param {} settings A property name (or map of properties and values) to set on the body.
     * @param {} value The value to set if `settings` is a single property name.
     */
    Body.set = function(body, settings, value) {
        var property;

        if (typeof settings === 'string') {
            property = settings;
            settings = {};
            settings[property] = value;
        }

        for (property in settings) {
            if (!Object.prototype.hasOwnProperty.call(settings, property))
                continue;

            value = settings[property];
            switch (property) {

            case 'isStatic':
                Body.setStatic(body, value);
                break;
            case 'isSleeping':
                Sleeping.set(body, value);
                break;
            case 'mass':
                Body.setMass(body, value);
                break;
            case 'density':
                Body.setDensity(body, value);
                break;
            case 'inertia':
                Body.setInertia(body, value);
                break;
            case 'vertices':
                Body.setVertices(body, value);
                break;
            case 'position':
                Body.setPosition(body, value);
                break;
            case 'angle':
                Body.setAngle(body, value);
                break;
            case 'velocity':
                Body.setVelocity(body, value);
                break;
            case 'angularVelocity':
                Body.setAngularVelocity(body, value);
                break;
            case 'parts':
                Body.setParts(body, value);
                break;
            case 'centre':
                Body.setCentre(body, value);
                break;
            default:
                body[property] = value;

            }
        }
    };

    /**
     * Sets the body as static, including isStatic flag and setting mass and inertia to Infinity.
     * @method setStatic
     * @param {body} body
     * @param {bool} isStatic
     */
    Body.setStatic = function(body, isStatic) {
        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];
            part.isStatic = isStatic;

            if (isStatic) {
                part._original = {
                    restitution: part.restitution,
                    friction: part.friction,
                    mass: part.mass,
                    inertia: part.inertia,
                    density: part.density,
                    inverseMass: part.inverseMass,
                    inverseInertia: part.inverseInertia
                };

                part.restitution = 0;
                part.friction = 1;
                part.mass = part.inertia = part.density = Infinity;
                part.inverseMass = part.inverseInertia = 0;

                part.positionPrev.x = part.position.x;
                part.positionPrev.y = part.position.y;
                part.anglePrev = part.angle;
                part.angularVelocity = 0;
                part.speed = 0;
                part.angularSpeed = 0;
                part.motion = 0;
            } else if (part._original) {
                part.restitution = part._original.restitution;
                part.friction = part._original.friction;
                part.mass = part._original.mass;
                part.inertia = part._original.inertia;
                part.density = part._original.density;
                part.inverseMass = part._original.inverseMass;
                part.inverseInertia = part._original.inverseInertia;

                part._original = null;
            }
        }
    };

    /**
     * Sets the mass of the body. Inverse mass, density and inertia are automatically updated to reflect the change.
     * @method setMass
     * @param {body} body
     * @param {number} mass
     */
    Body.setMass = function(body, mass) {
        var moment = body.inertia / (body.mass / 6);
        body.inertia = moment * (mass / 6);
        body.inverseInertia = 1 / body.inertia;

        body.mass = mass;
        body.inverseMass = 1 / body.mass;
        body.density = body.mass / body.area;
    };

    /**
     * Sets the density of the body. Mass and inertia are automatically updated to reflect the change.
     * @method setDensity
     * @param {body} body
     * @param {number} density
     */
    Body.setDensity = function(body, density) {
        Body.setMass(body, density * body.area);
        body.density = density;
    };

    /**
     * Sets the moment of inertia (i.e. second moment of area) of the body. 
     * Inverse inertia is automatically updated to reflect the change. Mass is not changed.
     * @method setInertia
     * @param {body} body
     * @param {number} inertia
     */
    Body.setInertia = function(body, inertia) {
        body.inertia = inertia;
        body.inverseInertia = 1 / body.inertia;
    };

    /**
     * Sets the body's vertices and updates body properties accordingly, including inertia, area and mass (with respect to `body.density`).
     * Vertices will be automatically transformed to be orientated around their centre of mass as the origin.
     * They are then automatically translated to world space based on `body.position`.
     *
     * The `vertices` argument should be passed as an array of `Matter.Vector` points (or a `Matter.Vertices` array).
     * Vertices must form a convex hull, concave hulls are not supported.
     *
     * @method setVertices
     * @param {body} body
     * @param {vector[]} vertices
     */
    Body.setVertices = function(body, vertices) {
        // change vertices
        if (vertices[0].body === body) {
            body.vertices = vertices;
        } else {
            body.vertices = Vertices.create(vertices, body);
        }

        // update properties
        body.axes = Axes.fromVertices(body.vertices);
        body.area = Vertices.area(body.vertices);
        Body.setMass(body, body.density * body.area);

        // orient vertices around the centre of mass at origin (0, 0)
        var centre = Vertices.centre(body.vertices);
        Vertices.translate(body.vertices, centre, -1);

        // update inertia while vertices are at origin (0, 0)
        Body.setInertia(body, Body._inertiaScale * Vertices.inertia(body.vertices, body.mass));

        // update geometry
        Vertices.translate(body.vertices, body.position);
        Bounds.update(body.bounds, body.vertices, body.velocity);
    };

    /**
     * Sets the parts of the `body` and updates mass, inertia and centroid.
     * Each part will have its parent set to `body`.
     * By default the convex hull will be automatically computed and set on `body`, unless `autoHull` is set to `false.`
     * Note that this method will ensure that the first part in `body.parts` will always be the `body`.
     * @method setParts
     * @param {body} body
     * @param [body] parts
     * @param {bool} [autoHull=true]
     */
    Body.setParts = function(body, parts, autoHull) {
        var i;

        // add all the parts, ensuring that the first part is always the parent body
        parts = parts.slice(0);
        body.parts.length = 0;
        body.parts.push(body);
        body.parent = body;

        for (i = 0; i < parts.length; i++) {
            var part = parts[i];
            if (part !== body) {
                part.parent = body;
                body.parts.push(part);
            }
        }

        if (body.parts.length === 1)
            return;

        autoHull = typeof autoHull !== 'undefined' ? autoHull : true;

        // find the convex hull of all parts to set on the parent body
        if (autoHull) {
            var vertices = [];
            for (i = 0; i < parts.length; i++) {
                vertices = vertices.concat(parts[i].vertices);
            }

            Vertices.clockwiseSort(vertices);

            var hull = Vertices.hull(vertices),
                hullCentre = Vertices.centre(hull);

            Body.setVertices(body, hull);
            Vertices.translate(body.vertices, hullCentre);
        }

        // sum the properties of all compound parts of the parent body
        var total = Body._totalProperties(body);

        body.area = total.area;
        body.parent = body;
        body.position.x = total.centre.x;
        body.position.y = total.centre.y;
        body.positionPrev.x = total.centre.x;
        body.positionPrev.y = total.centre.y;

        Body.setMass(body, total.mass);
        Body.setInertia(body, total.inertia);
        Body.setPosition(body, total.centre);
    };

    /**
     * Set the centre of mass of the body. 
     * The `centre` is a vector in world-space unless `relative` is set, in which case it is a translation.
     * The centre of mass is the point the body rotates about and can be used to simulate non-uniform density.
     * This is equal to moving `body.position` but not the `body.vertices`.
     * Invalid if the `centre` falls outside the body's convex hull.
     * @method setCentre
     * @param {body} body
     * @param {vector} centre
     * @param {bool} relative
     */
    Body.setCentre = function(body, centre, relative) {
        if (!relative) {
            body.positionPrev.x = centre.x - (body.position.x - body.positionPrev.x);
            body.positionPrev.y = centre.y - (body.position.y - body.positionPrev.y);
            body.position.x = centre.x;
            body.position.y = centre.y;
        } else {
            body.positionPrev.x += centre.x;
            body.positionPrev.y += centre.y;
            body.position.x += centre.x;
            body.position.y += centre.y;
        }
    };

    /**
     * Sets the position of the body instantly. Velocity, angle, force etc. are unchanged.
     * @method setPosition
     * @param {body} body
     * @param {vector} position
     */
    Body.setPosition = function(body, position) {
        var delta = Vector.sub(position, body.position);
        body.positionPrev.x += delta.x;
        body.positionPrev.y += delta.y;

        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];
            part.position.x += delta.x;
            part.position.y += delta.y;
            Vertices.translate(part.vertices, delta);
            Bounds.update(part.bounds, part.vertices, body.velocity);
        }
    };

    /**
     * Sets the angle of the body instantly. Angular velocity, position, force etc. are unchanged.
     * @method setAngle
     * @param {body} body
     * @param {number} angle
     */
    Body.setAngle = function(body, angle) {
        var delta = angle - body.angle;
        body.anglePrev += delta;

        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];
            part.angle += delta;
            Vertices.rotate(part.vertices, delta, body.position);
            Axes.rotate(part.axes, delta);
            Bounds.update(part.bounds, part.vertices, body.velocity);
            if (i > 0) {
                Vector.rotateAbout(part.position, delta, body.position, part.position);
            }
        }
    };

    /**
     * Sets the linear velocity of the body instantly. Position, angle, force etc. are unchanged. See also `Body.applyForce`.
     * @method setVelocity
     * @param {body} body
     * @param {vector} velocity
     */
    Body.setVelocity = function(body, velocity) {
        body.positionPrev.x = body.position.x - velocity.x;
        body.positionPrev.y = body.position.y - velocity.y;
        body.velocity.x = velocity.x;
        body.velocity.y = velocity.y;
        body.speed = Vector.magnitude(body.velocity);
    };

    /**
     * Sets the angular velocity of the body instantly. Position, angle, force etc. are unchanged. See also `Body.applyForce`.
     * @method setAngularVelocity
     * @param {body} body
     * @param {number} velocity
     */
    Body.setAngularVelocity = function(body, velocity) {
        body.anglePrev = body.angle - velocity;
        body.angularVelocity = velocity;
        body.angularSpeed = Math.abs(body.angularVelocity);
    };

    /**
     * Moves a body by a given vector relative to its current position, without imparting any velocity.
     * @method translate
     * @param {body} body
     * @param {vector} translation
     */
    Body.translate = function(body, translation) {
        Body.setPosition(body, Vector.add(body.position, translation));
    };

    /**
     * Rotates a body by a given angle relative to its current angle, without imparting any angular velocity.
     * @method rotate
     * @param {body} body
     * @param {number} rotation
     * @param {vector} [point]
     */
    Body.rotate = function(body, rotation, point) {
        if (!point) {
            Body.setAngle(body, body.angle + rotation);
        } else {
            var cos = Math.cos(rotation),
                sin = Math.sin(rotation),
                dx = body.position.x - point.x,
                dy = body.position.y - point.y;
                
            Body.setPosition(body, {
                x: point.x + (dx * cos - dy * sin),
                y: point.y + (dx * sin + dy * cos)
            });

            Body.setAngle(body, body.angle + rotation);
        }
    };

    /**
     * Scales the body, including updating physical properties (mass, area, axes, inertia), from a world-space point (default is body centre).
     * @method scale
     * @param {body} body
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} [point]
     */
    Body.scale = function(body, scaleX, scaleY, point) {
        var totalArea = 0,
            totalInertia = 0;

        point = point || body.position;

        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];

            // scale vertices
            Vertices.scale(part.vertices, scaleX, scaleY, point);

            // update properties
            part.axes = Axes.fromVertices(part.vertices);
            part.area = Vertices.area(part.vertices);
            Body.setMass(part, body.density * part.area);

            // update inertia (requires vertices to be at origin)
            Vertices.translate(part.vertices, { x: -part.position.x, y: -part.position.y });
            Body.setInertia(part, Body._inertiaScale * Vertices.inertia(part.vertices, part.mass));
            Vertices.translate(part.vertices, { x: part.position.x, y: part.position.y });

            if (i > 0) {
                totalArea += part.area;
                totalInertia += part.inertia;
            }

            // scale position
            part.position.x = point.x + (part.position.x - point.x) * scaleX;
            part.position.y = point.y + (part.position.y - point.y) * scaleY;

            // update bounds
            Bounds.update(part.bounds, part.vertices, body.velocity);
        }

        // handle parent body
        if (body.parts.length > 1) {
            body.area = totalArea;

            if (!body.isStatic) {
                Body.setMass(body, body.density * totalArea);
                Body.setInertia(body, totalInertia);
            }
        }

        // handle circles
        if (body.circleRadius) { 
            if (scaleX === scaleY) {
                body.circleRadius *= scaleX;
            } else {
                // body is no longer a circle
                body.circleRadius = null;
            }
        }
    };

    /**
     * Performs a simulation step for the given `body`, including updating position and angle using Verlet integration.
     * @method update
     * @param {body} body
     * @param {number} deltaTime
     * @param {number} timeScale
     * @param {number} correction
     */
    Body.update = function(body, deltaTime, timeScale, correction) {
        var deltaTimeSquared = Math.pow(deltaTime * timeScale * body.timeScale, 2);

        // from the previous step
        var frictionAir = 1 - body.frictionAir * timeScale * body.timeScale,
            velocityPrevX = body.position.x - body.positionPrev.x,
            velocityPrevY = body.position.y - body.positionPrev.y;

        // update velocity with Verlet integration
        body.velocity.x = (velocityPrevX * frictionAir * correction) + (body.force.x / body.mass) * deltaTimeSquared;
        body.velocity.y = (velocityPrevY * frictionAir * correction) + (body.force.y / body.mass) * deltaTimeSquared;

        body.positionPrev.x = body.position.x;
        body.positionPrev.y = body.position.y;
        body.position.x += body.velocity.x;
        body.position.y += body.velocity.y;

        // update angular velocity with Verlet integration
        body.angularVelocity = ((body.angle - body.anglePrev) * frictionAir * correction) + (body.torque / body.inertia) * deltaTimeSquared;
        body.anglePrev = body.angle;
        body.angle += body.angularVelocity;

        // track speed and acceleration
        body.speed = Vector.magnitude(body.velocity);
        body.angularSpeed = Math.abs(body.angularVelocity);

        // transform the body geometry
        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];

            Vertices.translate(part.vertices, body.velocity);
            
            if (i > 0) {
                part.position.x += body.velocity.x;
                part.position.y += body.velocity.y;
            }

            if (body.angularVelocity !== 0) {
                Vertices.rotate(part.vertices, body.angularVelocity, body.position);
                Axes.rotate(part.axes, body.angularVelocity);
                if (i > 0) {
                    Vector.rotateAbout(part.position, body.angularVelocity, body.position, part.position);
                }
            }

            Bounds.update(part.bounds, part.vertices, body.velocity);
        }
    };

    /**
     * Applies a force to a body from a given world-space position, including resulting torque.
     * @method applyForce
     * @param {body} body
     * @param {vector} position
     * @param {vector} force
     */
    Body.applyForce = function(body, position, force) {
        body.force.x += force.x;
        body.force.y += force.y;
        var offset = { x: position.x - body.position.x, y: position.y - body.position.y };
        body.torque += offset.x * force.y - offset.y * force.x;
    };

    /**
     * Returns the sums of the properties of all compound parts of the parent body.
     * @method _totalProperties
     * @private
     * @param {body} body
     * @return {}
     */
    Body._totalProperties = function(body) {
        // from equations at:
        // https://ecourses.ou.edu/cgi-bin/ebook.cgi?doc=&topic=st&chap_sec=07.2&page=theory
        // http://output.to/sideway/default.asp?qno=121100087

        var properties = {
            mass: 0,
            area: 0,
            inertia: 0,
            centre: { x: 0, y: 0 }
        };

        // sum the properties of all compound parts of the parent body
        for (var i = body.parts.length === 1 ? 0 : 1; i < body.parts.length; i++) {
            var part = body.parts[i],
                mass = part.mass !== Infinity ? part.mass : 1;

            properties.mass += mass;
            properties.area += part.area;
            properties.inertia += part.inertia;
            properties.centre = Vector.add(properties.centre, Vector.mult(part.position, mass));
        }

        properties.centre = Vector.div(properties.centre, properties.mass);

        return properties;
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired when a body starts sleeping (where `this` is the body).
    *
    * @event sleepStart
    * @this {body} The body that has started sleeping
    * @param {} event An event object
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when a body ends sleeping (where `this` is the body).
    *
    * @event sleepEnd
    * @this {body} The body that has ended sleeping
    * @param {} event An event object
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * An integer `Number` uniquely identifying number generated in `Body.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */

    /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "body"
     * @readOnly
     */

    /**
     * An arbitrary `String` name to help the user identify and manage bodies.
     *
     * @property label
     * @type string
     * @default "Body"
     */

    /**
     * An array of bodies that make up this body. 
     * The first body in the array must always be a self reference to the current body instance.
     * All bodies in the `parts` array together form a single rigid compound body.
     * Parts are allowed to overlap, have gaps or holes or even form concave bodies.
     * Parts themselves should never be added to a `World`, only the parent body should be.
     * Use `Body.setParts` when setting parts to ensure correct updates of all properties.
     *
     * @property parts
     * @type body[]
     */

    /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */

    /**
     * A self reference if the body is _not_ a part of another body.
     * Otherwise this is a reference to the body that this is a part of.
     * See `body.parts`.
     *
     * @property parent
     * @type body
     */

    /**
     * A `Number` specifying the angle of the body, in radians.
     *
     * @property angle
     * @type number
     * @default 0
     */

    /**
     * An array of `Vector` objects that specify the convex hull of the rigid body.
     * These should be provided about the origin `(0, 0)`. E.g.
     *
     *     [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
     *
     * When passed via `Body.create`, the vertices are translated relative to `body.position` (i.e. world-space, and constantly updated by `Body.update` during simulation).
     * The `Vector` objects are also augmented with additional properties required for efficient collision detection. 
     *
     * Other properties such as `inertia` and `bounds` are automatically calculated from the passed vertices (unless provided via `options`).
     * Concave hulls are not currently supported. The module `Matter.Vertices` contains useful methods for working with vertices.
     *
     * @property vertices
     * @type vector[]
     */

    /**
     * A `Vector` that specifies the current world-space position of the body.
     *
     * @property position
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Vector` that specifies the force to apply in the current step. It is zeroed after every `Body.update`. See also `Body.applyForce`.
     *
     * @property force
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Number` that specifies the torque (turning force) to apply in the current step. It is zeroed after every `Body.update`.
     *
     * @property torque
     * @type number
     * @default 0
     */

    /**
     * A `Number` that _measures_ the current speed of the body after the last `Body.update`. It is read-only and always positive (it's the magnitude of `body.velocity`).
     *
     * @readOnly
     * @property speed
     * @type number
     * @default 0
     */

    /**
     * A `Number` that _measures_ the current angular speed of the body after the last `Body.update`. It is read-only and always positive (it's the magnitude of `body.angularVelocity`).
     *
     * @readOnly
     * @property angularSpeed
     * @type number
     * @default 0
     */

    /**
     * A `Vector` that _measures_ the current velocity of the body after the last `Body.update`. It is read-only. 
     * If you need to modify a body's velocity directly, you should either apply a force or simply change the body's `position` (as the engine uses position-Verlet integration).
     *
     * @readOnly
     * @property velocity
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Number` that _measures_ the current angular velocity of the body after the last `Body.update`. It is read-only. 
     * If you need to modify a body's angular velocity directly, you should apply a torque or simply change the body's `angle` (as the engine uses position-Verlet integration).
     *
     * @readOnly
     * @property angularVelocity
     * @type number
     * @default 0
     */

    /**
     * A flag that indicates whether a body is considered static. A static body can never change position or angle and is completely fixed.
     * If you need to set a body as static after its creation, you should use `Body.setStatic` as this requires more than just setting this flag.
     *
     * @property isStatic
     * @type boolean
     * @default false
     */

    /**
     * A flag that indicates whether a body is a sensor. Sensor triggers collision events, but doesn't react with colliding body physically.
     *
     * @property isSensor
     * @type boolean
     * @default false
     */

    /**
     * A flag that indicates whether the body is considered sleeping. A sleeping body acts similar to a static body, except it is only temporary and can be awoken.
     * If you need to set a body as sleeping, you should use `Sleeping.set` as this requires more than just setting this flag.
     *
     * @property isSleeping
     * @type boolean
     * @default false
     */

    /**
     * A `Number` that _measures_ the amount of movement a body currently has (a combination of `speed` and `angularSpeed`). It is read-only and always positive.
     * It is used and updated by the `Matter.Sleeping` module during simulation to decide if a body has come to rest.
     *
     * @readOnly
     * @property motion
     * @type number
     * @default 0
     */

    /**
     * A `Number` that defines the number of updates in which this body must have near-zero velocity before it is set as sleeping by the `Matter.Sleeping` module (if sleeping is enabled by the engine).
     *
     * @property sleepThreshold
     * @type number
     * @default 60
     */

    /**
     * A `Number` that defines the density of the body, that is its mass per unit area.
     * If you pass the density via `Body.create` the `mass` property is automatically calculated for you based on the size (area) of the object.
     * This is generally preferable to simply setting mass and allows for more intuitive definition of materials (e.g. rock has a higher density than wood).
     *
     * @property density
     * @type number
     * @default 0.001
     */

    /**
     * A `Number` that defines the mass of the body, although it may be more appropriate to specify the `density` property instead.
     * If you modify this value, you must also modify the `body.inverseMass` property (`1 / mass`).
     *
     * @property mass
     * @type number
     */

    /**
     * A `Number` that defines the inverse mass of the body (`1 / mass`).
     * If you modify this value, you must also modify the `body.mass` property.
     *
     * @property inverseMass
     * @type number
     */

    /**
     * A `Number` that defines the moment of inertia (i.e. second moment of area) of the body.
     * It is automatically calculated from the given convex hull (`vertices` array) and density in `Body.create`.
     * If you modify this value, you must also modify the `body.inverseInertia` property (`1 / inertia`).
     *
     * @property inertia
     * @type number
     */

    /**
     * A `Number` that defines the inverse moment of inertia of the body (`1 / inertia`).
     * If you modify this value, you must also modify the `body.inertia` property.
     *
     * @property inverseInertia
     * @type number
     */

    /**
     * A `Number` that defines the restitution (elasticity) of the body. The value is always positive and is in the range `(0, 1)`.
     * A value of `0` means collisions may be perfectly inelastic and no bouncing may occur. 
     * A value of `0.8` means the body may bounce back with approximately 80% of its kinetic energy.
     * Note that collision response is based on _pairs_ of bodies, and that `restitution` values are _combined_ with the following formula:
     *
     *     Math.max(bodyA.restitution, bodyB.restitution)
     *
     * @property restitution
     * @type number
     * @default 0
     */

    /**
     * A `Number` that defines the friction of the body. The value is always positive and is in the range `(0, 1)`.
     * A value of `0` means that the body may slide indefinitely.
     * A value of `1` means the body may come to a stop almost instantly after a force is applied.
     *
     * The effects of the value may be non-linear. 
     * High values may be unstable depending on the body.
     * The engine uses a Coulomb friction model including static and kinetic friction.
     * Note that collision response is based on _pairs_ of bodies, and that `friction` values are _combined_ with the following formula:
     *
     *     Math.min(bodyA.friction, bodyB.friction)
     *
     * @property friction
     * @type number
     * @default 0.1
     */

    /**
     * A `Number` that defines the static friction of the body (in the Coulomb friction model). 
     * A value of `0` means the body will never 'stick' when it is nearly stationary and only dynamic `friction` is used.
     * The higher the value (e.g. `10`), the more force it will take to initially get the body moving when nearly stationary.
     * This value is multiplied with the `friction` property to make it easier to change `friction` and maintain an appropriate amount of static friction.
     *
     * @property frictionStatic
     * @type number
     * @default 0.5
     */

    /**
     * A `Number` that defines the air friction of the body (air resistance). 
     * A value of `0` means the body will never slow as it moves through space.
     * The higher the value, the faster a body slows when moving through space.
     * The effects of the value are non-linear. 
     *
     * @property frictionAir
     * @type number
     * @default 0.01
     */

    /**
     * An `Object` that specifies the collision filtering properties of this body.
     *
     * Collisions between two bodies will obey the following rules:
     * - If the two bodies have the same non-zero value of `collisionFilter.group`,
     *   they will always collide if the value is positive, and they will never collide
     *   if the value is negative.
     * - If the two bodies have different values of `collisionFilter.group` or if one
     *   (or both) of the bodies has a value of 0, then the category/mask rules apply as follows:
     *
     * Each body belongs to a collision category, given by `collisionFilter.category`. This
     * value is used as a bit field and the category should have only one bit set, meaning that
     * the value of this property is a power of two in the range [1, 2^31]. Thus, there are 32
     * different collision categories available.
     *
     * Each body also defines a collision bitmask, given by `collisionFilter.mask` which specifies
     * the categories it collides with (the value is the bitwise AND value of all these categories).
     *
     * Using the category/mask rules, two bodies `A` and `B` collide if each includes the other's
     * category in its mask, i.e. `(categoryA & maskB) !== 0` and `(categoryB & maskA) !== 0`
     * are both true.
     *
     * @property collisionFilter
     * @type object
     */

    /**
     * An Integer `Number`, that specifies the collision group this body belongs to.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.group
     * @type object
     * @default 0
     */

    /**
     * A bit field that specifies the collision category this body belongs to.
     * The category value should have only one bit set, for example `0x0001`.
     * This means there are up to 32 unique collision categories available.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.category
     * @type object
     * @default 1
     */

    /**
     * A bit mask that specifies the collision categories this body may collide with.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.mask
     * @type object
     * @default -1
     */

    /**
     * A `Number` that specifies a tolerance on how far a body is allowed to 'sink' or rotate into other bodies.
     * Avoid changing this value unless you understand the purpose of `slop` in physics engines.
     * The default should generally suffice, although very large bodies may require larger values for stable stacking.
     *
     * @property slop
     * @type number
     * @default 0.05
     */

    /**
     * A `Number` that allows per-body time scaling, e.g. a force-field where bodies inside are in slow-motion, while others are at full speed.
     *
     * @property timeScale
     * @type number
     * @default 1
     */

    /**
     * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
     *
     * @property render
     * @type object
     */

    /**
     * A flag that indicates if the body should be rendered.
     *
     * @property render.visible
     * @type boolean
     * @default true
     */

    /**
     * Sets the opacity to use when rendering.
     *
     * @property render.opacity
     * @type number
     * @default 1
    */

    /**
     * An `Object` that defines the sprite properties to use when rendering, if any.
     *
     * @property render.sprite
     * @type object
     */

    /**
     * An `String` that defines the path to the image to use as the sprite texture, if any.
     *
     * @property render.sprite.texture
     * @type string
     */
     
    /**
     * A `Number` that defines the scaling in the x-axis for the sprite, if any.
     *
     * @property render.sprite.xScale
     * @type number
     * @default 1
     */

    /**
     * A `Number` that defines the scaling in the y-axis for the sprite, if any.
     *
     * @property render.sprite.yScale
     * @type number
     * @default 1
     */

    /**
      * A `Number` that defines the offset in the x-axis for the sprite (normalised by texture width).
      *
      * @property render.sprite.xOffset
      * @type number
      * @default 0
      */

    /**
      * A `Number` that defines the offset in the y-axis for the sprite (normalised by texture height).
      *
      * @property render.sprite.yOffset
      * @type number
      * @default 0
      */

    /**
     * A `Number` that defines the line width to use when rendering the body outline (if a sprite is not defined).
     * A value of `0` means no outline will be rendered.
     *
     * @property render.lineWidth
     * @type number
     * @default 0
     */

    /**
     * A `String` that defines the fill style to use when rendering the body (if a sprite is not defined).
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.fillStyle
     * @type string
     * @default a random colour
     */

    /**
     * A `String` that defines the stroke style to use when rendering the body outline (if a sprite is not defined).
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.strokeStyle
     * @type string
     * @default a random colour
     */

    /**
     * An array of unique axis vectors (edge normals) used for collision detection.
     * These are automatically calculated from the given convex hull (`vertices` array) in `Body.create`.
     * They are constantly updated by `Body.update` during the simulation.
     *
     * @property axes
     * @type vector[]
     */
     
    /**
     * A `Number` that _measures_ the area of the body's convex hull, calculated at creation by `Body.create`.
     *
     * @property area
     * @type string
     * @default 
     */

    /**
     * A `Bounds` object that defines the AABB region for the body.
     * It is automatically calculated from the given convex hull (`vertices` array) in `Body.create` and constantly updated by `Body.update` during simulation.
     *
     * @property bounds
     * @type bounds
     */

})();


/***/ }),
/* 7 */
/***/ (function(module, exports, __nested_webpack_require_119708__) {

/**
* The `Matter.Sleeping` module contains methods to manage the sleeping state of bodies.
*
* @class Sleeping
*/

var Sleeping = {};

module.exports = Sleeping;

var Events = __nested_webpack_require_119708__(4);

(function() {

    Sleeping._motionWakeThreshold = 0.18;
    Sleeping._motionSleepThreshold = 0.08;
    Sleeping._minBias = 0.9;

    /**
     * Puts bodies to sleep or wakes them up depending on their motion.
     * @method update
     * @param {body[]} bodies
     * @param {number} timeScale
     */
    Sleeping.update = function(bodies, timeScale) {
        var timeFactor = timeScale * timeScale * timeScale;

        // update bodies sleeping status
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                motion = body.speed * body.speed + body.angularSpeed * body.angularSpeed;

            // wake up bodies if they have a force applied
            if (body.force.x !== 0 || body.force.y !== 0) {
                Sleeping.set(body, false);
                continue;
            }

            var minMotion = Math.min(body.motion, motion),
                maxMotion = Math.max(body.motion, motion);
        
            // biased average motion estimation between frames
            body.motion = Sleeping._minBias * minMotion + (1 - Sleeping._minBias) * maxMotion;
            
            if (body.sleepThreshold > 0 && body.motion < Sleeping._motionSleepThreshold * timeFactor) {
                body.sleepCounter += 1;
                
                if (body.sleepCounter >= body.sleepThreshold)
                    Sleeping.set(body, true);
            } else if (body.sleepCounter > 0) {
                body.sleepCounter -= 1;
            }
        }
    };

    /**
     * Given a set of colliding pairs, wakes the sleeping bodies involved.
     * @method afterCollisions
     * @param {pair[]} pairs
     * @param {number} timeScale
     */
    Sleeping.afterCollisions = function(pairs, timeScale) {
        var timeFactor = timeScale * timeScale * timeScale;

        // wake up bodies involved in collisions
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];
            
            // don't wake inactive pairs
            if (!pair.isActive)
                continue;

            var collision = pair.collision,
                bodyA = collision.bodyA.parent, 
                bodyB = collision.bodyB.parent;
        
            // don't wake if at least one body is static
            if ((bodyA.isSleeping && bodyB.isSleeping) || bodyA.isStatic || bodyB.isStatic)
                continue;
        
            if (bodyA.isSleeping || bodyB.isSleeping) {
                var sleepingBody = (bodyA.isSleeping && !bodyA.isStatic) ? bodyA : bodyB,
                    movingBody = sleepingBody === bodyA ? bodyB : bodyA;

                if (!sleepingBody.isStatic && movingBody.motion > Sleeping._motionWakeThreshold * timeFactor) {
                    Sleeping.set(sleepingBody, false);
                }
            }
        }
    };
  
    /**
     * Set a body as sleeping or awake.
     * @method set
     * @param {body} body
     * @param {boolean} isSleeping
     */
    Sleeping.set = function(body, isSleeping) {
        var wasSleeping = body.isSleeping;

        if (isSleeping) {
            body.isSleeping = true;
            body.sleepCounter = body.sleepThreshold;

            body.positionImpulse.x = 0;
            body.positionImpulse.y = 0;

            body.positionPrev.x = body.position.x;
            body.positionPrev.y = body.position.y;

            body.anglePrev = body.angle;
            body.speed = 0;
            body.angularSpeed = 0;
            body.motion = 0;

            if (!wasSleeping) {
                Events.trigger(body, 'sleepStart');
            }
        } else {
            body.isSleeping = false;
            body.sleepCounter = 0;

            if (wasSleeping) {
                Events.trigger(body, 'sleepEnd');
            }
        }
    };

})();


/***/ }),
/* 8 */
/***/ (function(module, exports, __nested_webpack_require_123800__) {

/**
* The `Matter.Collision` module contains methods for detecting collisions between a given pair of bodies.
*
* For efficient detection between a list of bodies, see `Matter.Detector` and `Matter.Query`.
*
* See `Matter.Engine` for collision events.
*
* @class Collision
*/

var Collision = {};

module.exports = Collision;

var Vertices = __nested_webpack_require_123800__(3);
var Pair = __nested_webpack_require_123800__(9);

(function() {
    var _supports = [];

    var _overlapAB = {
        overlap: 0,
        axis: null
    };

    var _overlapBA = {
        overlap: 0,
        axis: null
    };

    /**
     * Creates a new collision record.
     * @method create
     * @param {body} bodyA The first body part represented by the collision record
     * @param {body} bodyB The second body part represented by the collision record
     * @return {collision} A new collision record
     */
    Collision.create = function(bodyA, bodyB) {
        return { 
            pair: null,
            collided: false,
            bodyA: bodyA,
            bodyB: bodyB,
            parentA: bodyA.parent,
            parentB: bodyB.parent,
            depth: 0,
            normal: { x: 0, y: 0 },
            tangent: { x: 0, y: 0 },
            penetration: { x: 0, y: 0 },
            supports: []
        };
    };

    /**
     * Detect collision between two bodies.
     * @method collides
     * @param {body} bodyA
     * @param {body} bodyB
     * @param {pairs} [pairs] Optionally reuse collision records from existing pairs.
     * @return {collision|null} A collision record if detected, otherwise null
     */
    Collision.collides = function(bodyA, bodyB, pairs) {
        Collision._overlapAxes(_overlapAB, bodyA.vertices, bodyB.vertices, bodyA.axes);

        if (_overlapAB.overlap <= 0) {
            return null;
        }

        Collision._overlapAxes(_overlapBA, bodyB.vertices, bodyA.vertices, bodyB.axes);

        if (_overlapBA.overlap <= 0) {
            return null;
        }

        // reuse collision records for gc efficiency
        var pair = pairs && pairs.table[Pair.id(bodyA, bodyB)],
            collision;

        if (!pair) {
            collision = Collision.create(bodyA, bodyB);
            collision.collided = true;
            collision.bodyA = bodyA.id < bodyB.id ? bodyA : bodyB;
            collision.bodyB = bodyA.id < bodyB.id ? bodyB : bodyA;
            collision.parentA = collision.bodyA.parent;
            collision.parentB = collision.bodyB.parent;
        } else {
            collision = pair.collision;
        }

        bodyA = collision.bodyA;
        bodyB = collision.bodyB;

        var minOverlap;

        if (_overlapAB.overlap < _overlapBA.overlap) {
            minOverlap = _overlapAB;
        } else {
            minOverlap = _overlapBA;
        }

        var normal = collision.normal,
            supports = collision.supports,
            minAxis = minOverlap.axis,
            minAxisX = minAxis.x,
            minAxisY = minAxis.y;

        // ensure normal is facing away from bodyA
        if (minAxisX * (bodyB.position.x - bodyA.position.x) + minAxisY * (bodyB.position.y - bodyA.position.y) < 0) {
            normal.x = minAxisX;
            normal.y = minAxisY;
        } else {
            normal.x = -minAxisX;
            normal.y = -minAxisY;
        }
        
        collision.tangent.x = -normal.y;
        collision.tangent.y = normal.x;

        collision.depth = minOverlap.overlap;

        collision.penetration.x = normal.x * collision.depth;
        collision.penetration.y = normal.y * collision.depth;

        // find support points, there is always either exactly one or two
        var supportsB = Collision._findSupports(bodyA, bodyB, normal, 1),
            supportCount = 0;

        // find the supports from bodyB that are inside bodyA
        if (Vertices.contains(bodyA.vertices, supportsB[0])) {
            supports[supportCount++] = supportsB[0];
        }

        if (Vertices.contains(bodyA.vertices, supportsB[1])) {
            supports[supportCount++] = supportsB[1];
        }

        // find the supports from bodyA that are inside bodyB
        if (supportCount < 2) {
            var supportsA = Collision._findSupports(bodyB, bodyA, normal, -1);

            if (Vertices.contains(bodyB.vertices, supportsA[0])) {
                supports[supportCount++] = supportsA[0];
            }

            if (supportCount < 2 && Vertices.contains(bodyB.vertices, supportsA[1])) {
                supports[supportCount++] = supportsA[1];
            }
        }

        // account for the edge case of overlapping but no vertex containment
        if (supportCount === 0) {
            supports[supportCount++] = supportsB[0];
        }

        // update supports array size
        supports.length = supportCount;

        return collision;
    };

    /**
     * Find the overlap between two sets of vertices.
     * @method _overlapAxes
     * @private
     * @param {object} result
     * @param {vertices} verticesA
     * @param {vertices} verticesB
     * @param {axes} axes
     */
    Collision._overlapAxes = function(result, verticesA, verticesB, axes) {
        var verticesALength = verticesA.length,
            verticesBLength = verticesB.length,
            verticesAX = verticesA[0].x,
            verticesAY = verticesA[0].y,
            verticesBX = verticesB[0].x,
            verticesBY = verticesB[0].y,
            axesLength = axes.length,
            overlapMin = Number.MAX_VALUE,
            overlapAxisNumber = 0,
            overlap,
            overlapAB,
            overlapBA,
            dot,
            i,
            j;

        for (i = 0; i < axesLength; i++) {
            var axis = axes[i],
                axisX = axis.x,
                axisY = axis.y,
                minA = verticesAX * axisX + verticesAY * axisY,
                minB = verticesBX * axisX + verticesBY * axisY,
                maxA = minA,
                maxB = minB;
            
            for (j = 1; j < verticesALength; j += 1) {
                dot = verticesA[j].x * axisX + verticesA[j].y * axisY;

                if (dot > maxA) { 
                    maxA = dot;
                } else if (dot < minA) { 
                    minA = dot;
                }
            }

            for (j = 1; j < verticesBLength; j += 1) {
                dot = verticesB[j].x * axisX + verticesB[j].y * axisY;

                if (dot > maxB) { 
                    maxB = dot;
                } else if (dot < minB) { 
                    minB = dot;
                }
            }

            overlapAB = maxA - minB;
            overlapBA = maxB - minA;
            overlap = overlapAB < overlapBA ? overlapAB : overlapBA;

            if (overlap < overlapMin) {
                overlapMin = overlap;
                overlapAxisNumber = i;

                if (overlap <= 0) {
                    // can not be intersecting
                    break;
                }
            } 
        }

        result.axis = axes[overlapAxisNumber];
        result.overlap = overlapMin;
    };

    /**
     * Projects vertices on an axis and returns an interval.
     * @method _projectToAxis
     * @private
     * @param {} projection
     * @param {} vertices
     * @param {} axis
     */
    Collision._projectToAxis = function(projection, vertices, axis) {
        var min = vertices[0].x * axis.x + vertices[0].y * axis.y,
            max = min;

        for (var i = 1; i < vertices.length; i += 1) {
            var dot = vertices[i].x * axis.x + vertices[i].y * axis.y;

            if (dot > max) { 
                max = dot; 
            } else if (dot < min) { 
                min = dot; 
            }
        }

        projection.min = min;
        projection.max = max;
    };

    /**
     * Finds supporting vertices given two bodies along a given direction using hill-climbing.
     * @method _findSupports
     * @private
     * @param {body} bodyA
     * @param {body} bodyB
     * @param {vector} normal
     * @param {number} direction
     * @return [vector]
     */
    Collision._findSupports = function(bodyA, bodyB, normal, direction) {
        var vertices = bodyB.vertices,
            verticesLength = vertices.length,
            bodyAPositionX = bodyA.position.x,
            bodyAPositionY = bodyA.position.y,
            normalX = normal.x * direction,
            normalY = normal.y * direction,
            nearestDistance = Number.MAX_VALUE,
            vertexA,
            vertexB,
            vertexC,
            distance,
            j;

        // find deepest vertex relative to the axis
        for (j = 0; j < verticesLength; j += 1) {
            vertexB = vertices[j];
            distance = normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y);

            // convex hill-climbing
            if (distance < nearestDistance) {
                nearestDistance = distance;
                vertexA = vertexB;
            }
        }

        // measure next vertex
        vertexC = vertices[(verticesLength + vertexA.index - 1) % verticesLength];
        nearestDistance = normalX * (bodyAPositionX - vertexC.x) + normalY * (bodyAPositionY - vertexC.y);

        // compare with previous vertex
        vertexB = vertices[(vertexA.index + 1) % verticesLength];
        if (normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y) < nearestDistance) {
            _supports[0] = vertexA;
            _supports[1] = vertexB;

            return _supports;
        }

        _supports[0] = vertexA;
        _supports[1] = vertexC;

        return _supports;
    };

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * A reference to the pair using this collision record, if there is one.
     *
     * @property pair
     * @type {pair|null}
     * @default null
     */

    /**
     * A flag that indicates if the bodies were colliding when the collision was last updated.
     * 
     * @property collided
     * @type boolean
     * @default false
     */

    /**
     * The first body part represented by the collision (see also `collision.parentA`).
     * 
     * @property bodyA
     * @type body
     */

    /**
     * The second body part represented by the collision (see also `collision.parentB`).
     * 
     * @property bodyB
     * @type body
     */

    /**
     * The first body represented by the collision (i.e. `collision.bodyA.parent`).
     * 
     * @property parentA
     * @type body
     */

    /**
     * The second body represented by the collision (i.e. `collision.bodyB.parent`).
     * 
     * @property parentB
     * @type body
     */

    /**
     * A `Number` that represents the minimum separating distance between the bodies along the collision normal.
     *
     * @readOnly
     * @property depth
     * @type number
     * @default 0
     */

    /**
     * A normalised `Vector` that represents the direction between the bodies that provides the minimum separating distance.
     *
     * @property normal
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A normalised `Vector` that is the tangent direction to the collision normal.
     *
     * @property tangent
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Vector` that represents the direction and depth of the collision.
     *
     * @property penetration
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * An array of body vertices that represent the support points in the collision.
     * These are the deepest vertices (along the collision normal) of each body that are contained by the other body's vertices.
     *
     * @property supports
     * @type vector[]
     * @default []
     */

})();


/***/ }),
/* 9 */
/***/ (function(module, exports, __nested_webpack_require_135703__) {

/**
* The `Matter.Pair` module contains methods for creating and manipulating collision pairs.
*
* @class Pair
*/

var Pair = {};

module.exports = Pair;

var Contact = __nested_webpack_require_135703__(17);

(function() {
    
    /**
     * Creates a pair.
     * @method create
     * @param {collision} collision
     * @param {number} timestamp
     * @return {pair} A new pair
     */
    Pair.create = function(collision, timestamp) {
        var bodyA = collision.bodyA,
            bodyB = collision.bodyB;

        var pair = {
            id: Pair.id(bodyA, bodyB),
            bodyA: bodyA,
            bodyB: bodyB,
            collision: collision,
            contacts: [],
            activeContacts: [],
            separation: 0,
            isActive: true,
            confirmedActive: true,
            isSensor: bodyA.isSensor || bodyB.isSensor,
            timeCreated: timestamp,
            timeUpdated: timestamp,
            inverseMass: 0,
            friction: 0,
            frictionStatic: 0,
            restitution: 0,
            slop: 0
        };

        Pair.update(pair, collision, timestamp);

        return pair;
    };

    /**
     * Updates a pair given a collision.
     * @method update
     * @param {pair} pair
     * @param {collision} collision
     * @param {number} timestamp
     */
    Pair.update = function(pair, collision, timestamp) {
        var contacts = pair.contacts,
            supports = collision.supports,
            activeContacts = pair.activeContacts,
            parentA = collision.parentA,
            parentB = collision.parentB,
            parentAVerticesLength = parentA.vertices.length;
        
        pair.isActive = true;
        pair.timeUpdated = timestamp;
        pair.collision = collision;
        pair.separation = collision.depth;
        pair.inverseMass = parentA.inverseMass + parentB.inverseMass;
        pair.friction = parentA.friction < parentB.friction ? parentA.friction : parentB.friction;
        pair.frictionStatic = parentA.frictionStatic > parentB.frictionStatic ? parentA.frictionStatic : parentB.frictionStatic;
        pair.restitution = parentA.restitution > parentB.restitution ? parentA.restitution : parentB.restitution;
        pair.slop = parentA.slop > parentB.slop ? parentA.slop : parentB.slop;

        collision.pair = pair;
        activeContacts.length = 0;
        
        for (var i = 0; i < supports.length; i++) {
            var support = supports[i],
                contactId = support.body === parentA ? support.index : parentAVerticesLength + support.index,
                contact = contacts[contactId];

            if (contact) {
                activeContacts.push(contact);
            } else {
                activeContacts.push(contacts[contactId] = Contact.create(support));
            }
        }
    };
    
    /**
     * Set a pair as active or inactive.
     * @method setActive
     * @param {pair} pair
     * @param {bool} isActive
     * @param {number} timestamp
     */
    Pair.setActive = function(pair, isActive, timestamp) {
        if (isActive) {
            pair.isActive = true;
            pair.timeUpdated = timestamp;
        } else {
            pair.isActive = false;
            pair.activeContacts.length = 0;
        }
    };

    /**
     * Get the id for the given pair.
     * @method id
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {string} Unique pairId
     */
    Pair.id = function(bodyA, bodyB) {
        if (bodyA.id < bodyB.id) {
            return 'A' + bodyA.id + 'B' + bodyB.id;
        } else {
            return 'A' + bodyB.id + 'B' + bodyA.id;
        }
    };

})();


/***/ }),
/* 10 */
/***/ (function(module, exports, __nested_webpack_require_139447__) {

/**
* The `Matter.Constraint` module contains methods for creating and manipulating constraints.
* Constraints are used for specifying that a fixed distance must be maintained between two bodies (or a body and a fixed world-space position).
* The stiffness of constraints can be modified to create springs or elastic.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Constraint
*/

var Constraint = {};

module.exports = Constraint;

var Vertices = __nested_webpack_require_139447__(3);
var Vector = __nested_webpack_require_139447__(2);
var Sleeping = __nested_webpack_require_139447__(7);
var Bounds = __nested_webpack_require_139447__(1);
var Axes = __nested_webpack_require_139447__(11);
var Common = __nested_webpack_require_139447__(0);

(function() {

    Constraint._warming = 0.4;
    Constraint._torqueDampen = 1;
    Constraint._minLength = 0.000001;

    /**
     * Creates a new constraint.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * To simulate a revolute constraint (or pin joint) set `length: 0` and a high `stiffness` value (e.g. `0.7` or above).
     * If the constraint is unstable, try lowering the `stiffness` value and / or increasing `engine.constraintIterations`.
     * For compound bodies, constraints must be applied to the parent body (not one of its parts).
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} options
     * @return {constraint} constraint
     */
    Constraint.create = function(options) {
        var constraint = options;

        // if bodies defined but no points, use body centre
        if (constraint.bodyA && !constraint.pointA)
            constraint.pointA = { x: 0, y: 0 };
        if (constraint.bodyB && !constraint.pointB)
            constraint.pointB = { x: 0, y: 0 };

        // calculate static length using initial world space points
        var initialPointA = constraint.bodyA ? Vector.add(constraint.bodyA.position, constraint.pointA) : constraint.pointA,
            initialPointB = constraint.bodyB ? Vector.add(constraint.bodyB.position, constraint.pointB) : constraint.pointB,
            length = Vector.magnitude(Vector.sub(initialPointA, initialPointB));
    
        constraint.length = typeof constraint.length !== 'undefined' ? constraint.length : length;

        // option defaults
        constraint.id = constraint.id || Common.nextId();
        constraint.label = constraint.label || 'Constraint';
        constraint.type = 'constraint';
        constraint.stiffness = constraint.stiffness || (constraint.length > 0 ? 1 : 0.7);
        constraint.damping = constraint.damping || 0;
        constraint.angularStiffness = constraint.angularStiffness || 0;
        constraint.angleA = constraint.bodyA ? constraint.bodyA.angle : constraint.angleA;
        constraint.angleB = constraint.bodyB ? constraint.bodyB.angle : constraint.angleB;
        constraint.plugin = {};

        // render
        var render = {
            visible: true,
            lineWidth: 2,
            strokeStyle: '#ffffff',
            type: 'line',
            anchors: true
        };

        if (constraint.length === 0 && constraint.stiffness > 0.1) {
            render.type = 'pin';
            render.anchors = false;
        } else if (constraint.stiffness < 0.9) {
            render.type = 'spring';
        }

        constraint.render = Common.extend(render, constraint.render);

        return constraint;
    };

    /**
     * Prepares for solving by constraint warming.
     * @private
     * @method preSolveAll
     * @param {body[]} bodies
     */
    Constraint.preSolveAll = function(bodies) {
        for (var i = 0; i < bodies.length; i += 1) {
            var body = bodies[i],
                impulse = body.constraintImpulse;

            if (body.isStatic || (impulse.x === 0 && impulse.y === 0 && impulse.angle === 0)) {
                continue;
            }

            body.position.x += impulse.x;
            body.position.y += impulse.y;
            body.angle += impulse.angle;
        }
    };

    /**
     * Solves all constraints in a list of collisions.
     * @private
     * @method solveAll
     * @param {constraint[]} constraints
     * @param {number} timeScale
     */
    Constraint.solveAll = function(constraints, timeScale) {
        // Solve fixed constraints first.
        for (var i = 0; i < constraints.length; i += 1) {
            var constraint = constraints[i],
                fixedA = !constraint.bodyA || (constraint.bodyA && constraint.bodyA.isStatic),
                fixedB = !constraint.bodyB || (constraint.bodyB && constraint.bodyB.isStatic);

            if (fixedA || fixedB) {
                Constraint.solve(constraints[i], timeScale);
            }
        }

        // Solve free constraints last.
        for (i = 0; i < constraints.length; i += 1) {
            constraint = constraints[i];
            fixedA = !constraint.bodyA || (constraint.bodyA && constraint.bodyA.isStatic);
            fixedB = !constraint.bodyB || (constraint.bodyB && constraint.bodyB.isStatic);

            if (!fixedA && !fixedB) {
                Constraint.solve(constraints[i], timeScale);
            }
        }
    };

    /**
     * Solves a distance constraint with Gauss-Siedel method.
     * @private
     * @method solve
     * @param {constraint} constraint
     * @param {number} timeScale
     */
    Constraint.solve = function(constraint, timeScale) {
        var bodyA = constraint.bodyA,
            bodyB = constraint.bodyB,
            pointA = constraint.pointA,
            pointB = constraint.pointB;

        if (!bodyA && !bodyB)
            return;

        // update reference angle
        if (bodyA && !bodyA.isStatic) {
            Vector.rotate(pointA, bodyA.angle - constraint.angleA, pointA);
            constraint.angleA = bodyA.angle;
        }
        
        // update reference angle
        if (bodyB && !bodyB.isStatic) {
            Vector.rotate(pointB, bodyB.angle - constraint.angleB, pointB);
            constraint.angleB = bodyB.angle;
        }

        var pointAWorld = pointA,
            pointBWorld = pointB;

        if (bodyA) pointAWorld = Vector.add(bodyA.position, pointA);
        if (bodyB) pointBWorld = Vector.add(bodyB.position, pointB);

        if (!pointAWorld || !pointBWorld)
            return;

        var delta = Vector.sub(pointAWorld, pointBWorld),
            currentLength = Vector.magnitude(delta);

        // prevent singularity
        if (currentLength < Constraint._minLength) {
            currentLength = Constraint._minLength;
        }

        // solve distance constraint with Gauss-Siedel method
        var difference = (currentLength - constraint.length) / currentLength,
            stiffness = constraint.stiffness < 1 ? constraint.stiffness * timeScale : constraint.stiffness,
            force = Vector.mult(delta, difference * stiffness),
            massTotal = (bodyA ? bodyA.inverseMass : 0) + (bodyB ? bodyB.inverseMass : 0),
            inertiaTotal = (bodyA ? bodyA.inverseInertia : 0) + (bodyB ? bodyB.inverseInertia : 0),
            resistanceTotal = massTotal + inertiaTotal,
            torque,
            share,
            normal,
            normalVelocity,
            relativeVelocity;

        if (constraint.damping) {
            var zero = Vector.create();
            normal = Vector.div(delta, currentLength);

            relativeVelocity = Vector.sub(
                bodyB && Vector.sub(bodyB.position, bodyB.positionPrev) || zero,
                bodyA && Vector.sub(bodyA.position, bodyA.positionPrev) || zero
            );

            normalVelocity = Vector.dot(normal, relativeVelocity);
        }

        if (bodyA && !bodyA.isStatic) {
            share = bodyA.inverseMass / massTotal;

            // keep track of applied impulses for post solving
            bodyA.constraintImpulse.x -= force.x * share;
            bodyA.constraintImpulse.y -= force.y * share;

            // apply forces
            bodyA.position.x -= force.x * share;
            bodyA.position.y -= force.y * share;

            // apply damping
            if (constraint.damping) {
                bodyA.positionPrev.x -= constraint.damping * normal.x * normalVelocity * share;
                bodyA.positionPrev.y -= constraint.damping * normal.y * normalVelocity * share;
            }

            // apply torque
            torque = (Vector.cross(pointA, force) / resistanceTotal) * Constraint._torqueDampen * bodyA.inverseInertia * (1 - constraint.angularStiffness);
            bodyA.constraintImpulse.angle -= torque;
            bodyA.angle -= torque;
        }

        if (bodyB && !bodyB.isStatic) {
            share = bodyB.inverseMass / massTotal;

            // keep track of applied impulses for post solving
            bodyB.constraintImpulse.x += force.x * share;
            bodyB.constraintImpulse.y += force.y * share;
            
            // apply forces
            bodyB.position.x += force.x * share;
            bodyB.position.y += force.y * share;

            // apply damping
            if (constraint.damping) {
                bodyB.positionPrev.x += constraint.damping * normal.x * normalVelocity * share;
                bodyB.positionPrev.y += constraint.damping * normal.y * normalVelocity * share;
            }

            // apply torque
            torque = (Vector.cross(pointB, force) / resistanceTotal) * Constraint._torqueDampen * bodyB.inverseInertia * (1 - constraint.angularStiffness);
            bodyB.constraintImpulse.angle += torque;
            bodyB.angle += torque;
        }

    };

    /**
     * Performs body updates required after solving constraints.
     * @private
     * @method postSolveAll
     * @param {body[]} bodies
     */
    Constraint.postSolveAll = function(bodies) {
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                impulse = body.constraintImpulse;

            if (body.isStatic || (impulse.x === 0 && impulse.y === 0 && impulse.angle === 0)) {
                continue;
            }

            Sleeping.set(body, false);

            // update geometry and reset
            for (var j = 0; j < body.parts.length; j++) {
                var part = body.parts[j];
                
                Vertices.translate(part.vertices, impulse);

                if (j > 0) {
                    part.position.x += impulse.x;
                    part.position.y += impulse.y;
                }

                if (impulse.angle !== 0) {
                    Vertices.rotate(part.vertices, impulse.angle, body.position);
                    Axes.rotate(part.axes, impulse.angle);
                    if (j > 0) {
                        Vector.rotateAbout(part.position, impulse.angle, body.position, part.position);
                    }
                }

                Bounds.update(part.bounds, part.vertices, body.velocity);
            }

            // dampen the cached impulse for warming next step
            impulse.angle *= Constraint._warming;
            impulse.x *= Constraint._warming;
            impulse.y *= Constraint._warming;
        }
    };

    /**
     * Returns the world-space position of `constraint.pointA`, accounting for `constraint.bodyA`.
     * @method pointAWorld
     * @param {constraint} constraint
     * @returns {vector} the world-space position
     */
    Constraint.pointAWorld = function(constraint) {
        return {
            x: (constraint.bodyA ? constraint.bodyA.position.x : 0) + constraint.pointA.x,
            y: (constraint.bodyA ? constraint.bodyA.position.y : 0) + constraint.pointA.y
        };
    };

    /**
     * Returns the world-space position of `constraint.pointB`, accounting for `constraint.bodyB`.
     * @method pointBWorld
     * @param {constraint} constraint
     * @returns {vector} the world-space position
     */
    Constraint.pointBWorld = function(constraint) {
        return {
            x: (constraint.bodyB ? constraint.bodyB.position.x : 0) + constraint.pointB.x,
            y: (constraint.bodyB ? constraint.bodyB.position.y : 0) + constraint.pointB.y
        };
    };

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */

    /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "constraint"
     * @readOnly
     */

    /**
     * An arbitrary `String` name to help the user identify and manage bodies.
     *
     * @property label
     * @type string
     * @default "Constraint"
     */

    /**
     * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
     *
     * @property render
     * @type object
     */

    /**
     * A flag that indicates if the constraint should be rendered.
     *
     * @property render.visible
     * @type boolean
     * @default true
     */

    /**
     * A `Number` that defines the line width to use when rendering the constraint outline.
     * A value of `0` means no outline will be rendered.
     *
     * @property render.lineWidth
     * @type number
     * @default 2
     */

    /**
     * A `String` that defines the stroke style to use when rendering the constraint outline.
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.strokeStyle
     * @type string
     * @default a random colour
     */

    /**
     * A `String` that defines the constraint rendering type. 
     * The possible values are 'line', 'pin', 'spring'.
     * An appropriate render type will be automatically chosen unless one is given in options.
     *
     * @property render.type
     * @type string
     * @default 'line'
     */

    /**
     * A `Boolean` that defines if the constraint's anchor points should be rendered.
     *
     * @property render.anchors
     * @type boolean
     * @default true
     */

    /**
     * The first possible `Body` that this constraint is attached to.
     *
     * @property bodyA
     * @type body
     * @default null
     */

    /**
     * The second possible `Body` that this constraint is attached to.
     *
     * @property bodyB
     * @type body
     * @default null
     */

    /**
     * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyA` if defined, otherwise a world-space position.
     *
     * @property pointA
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyB` if defined, otherwise a world-space position.
     *
     * @property pointB
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Number` that specifies the stiffness of the constraint, i.e. the rate at which it returns to its resting `constraint.length`.
     * A value of `1` means the constraint should be very stiff.
     * A value of `0.2` means the constraint acts like a soft spring.
     *
     * @property stiffness
     * @type number
     * @default 1
     */

    /**
     * A `Number` that specifies the damping of the constraint, 
     * i.e. the amount of resistance applied to each body based on their velocities to limit the amount of oscillation.
     * Damping will only be apparent when the constraint also has a very low `stiffness`.
     * A value of `0.1` means the constraint will apply heavy damping, resulting in little to no oscillation.
     * A value of `0` means the constraint will apply no damping.
     *
     * @property damping
     * @type number
     * @default 0
     */

    /**
     * A `Number` that specifies the target resting length of the constraint. 
     * It is calculated automatically in `Constraint.create` from initial positions of the `constraint.bodyA` and `constraint.bodyB`.
     *
     * @property length
     * @type number
     */

    /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */

})();


/***/ }),
/* 11 */
/***/ (function(module, exports, __nested_webpack_require_155865__) {

/**
* The `Matter.Axes` module contains methods for creating and manipulating sets of axes.
*
* @class Axes
*/

var Axes = {};

module.exports = Axes;

var Vector = __nested_webpack_require_155865__(2);
var Common = __nested_webpack_require_155865__(0);

(function() {

    /**
     * Creates a new set of axes from the given vertices.
     * @method fromVertices
     * @param {vertices} vertices
     * @return {axes} A new axes from the given vertices
     */
    Axes.fromVertices = function(vertices) {
        var axes = {};

        // find the unique axes, using edge normal gradients
        for (var i = 0; i < vertices.length; i++) {
            var j = (i + 1) % vertices.length, 
                normal = Vector.normalise({ 
                    x: vertices[j].y - vertices[i].y, 
                    y: vertices[i].x - vertices[j].x
                }),
                gradient = (normal.y === 0) ? Infinity : (normal.x / normal.y);
            
            // limit precision
            gradient = gradient.toFixed(3).toString();
            axes[gradient] = normal;
        }

        return Common.values(axes);
    };

    /**
     * Rotates a set of axes by the given angle.
     * @method rotate
     * @param {axes} axes
     * @param {number} angle
     */
    Axes.rotate = function(axes, angle) {
        if (angle === 0)
            return;
        
        var cos = Math.cos(angle),
            sin = Math.sin(angle);

        for (var i = 0; i < axes.length; i++) {
            var axis = axes[i],
                xx;
            xx = axis.x * cos - axis.y * sin;
            axis.y = axis.x * sin + axis.y * cos;
            axis.x = xx;
        }
    };

})();


/***/ }),
/* 12 */
/***/ (function(module, exports, __nested_webpack_require_157606__) {

/**
* The `Matter.Bodies` module contains factory methods for creating rigid body models 
* with commonly used body configurations (such as rectangles, circles and other polygons).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Bodies
*/

// TODO: true circle bodies

var Bodies = {};

module.exports = Bodies;

var Vertices = __nested_webpack_require_157606__(3);
var Common = __nested_webpack_require_157606__(0);
var Body = __nested_webpack_require_157606__(6);
var Bounds = __nested_webpack_require_157606__(1);
var Vector = __nested_webpack_require_157606__(2);

(function() {

    /**
     * Creates a new rigid body model with a rectangle hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method rectangle
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {object} [options]
     * @return {body} A new rectangle body
     */
    Bodies.rectangle = function(x, y, width, height, options) {
        options = options || {};

        var rectangle = { 
            label: 'Rectangle Body',
            position: { x: x, y: y },
            vertices: Vertices.fromPath('L 0 0 L ' + width + ' 0 L ' + width + ' ' + height + ' L 0 ' + height)
        };

        if (options.chamfer) {
            var chamfer = options.chamfer;
            rectangle.vertices = Vertices.chamfer(rectangle.vertices, chamfer.radius, 
                chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
            delete options.chamfer;
        }

        return Body.create(Common.extend({}, rectangle, options));
    };
    
    /**
     * Creates a new rigid body model with a trapezoid hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method trapezoid
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {number} slope
     * @param {object} [options]
     * @return {body} A new trapezoid body
     */
    Bodies.trapezoid = function(x, y, width, height, slope, options) {
        options = options || {};

        slope *= 0.5;
        var roof = (1 - (slope * 2)) * width;
        
        var x1 = width * slope,
            x2 = x1 + roof,
            x3 = x2 + x1,
            verticesPath;

        if (slope < 0.5) {
            verticesPath = 'L 0 0 L ' + x1 + ' ' + (-height) + ' L ' + x2 + ' ' + (-height) + ' L ' + x3 + ' 0';
        } else {
            verticesPath = 'L 0 0 L ' + x2 + ' ' + (-height) + ' L ' + x3 + ' 0';
        }

        var trapezoid = { 
            label: 'Trapezoid Body',
            position: { x: x, y: y },
            vertices: Vertices.fromPath(verticesPath)
        };

        if (options.chamfer) {
            var chamfer = options.chamfer;
            trapezoid.vertices = Vertices.chamfer(trapezoid.vertices, chamfer.radius, 
                chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
            delete options.chamfer;
        }

        return Body.create(Common.extend({}, trapezoid, options));
    };

    /**
     * Creates a new rigid body model with a circle hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method circle
     * @param {number} x
     * @param {number} y
     * @param {number} radius
     * @param {object} [options]
     * @param {number} [maxSides]
     * @return {body} A new circle body
     */
    Bodies.circle = function(x, y, radius, options, maxSides) {
        options = options || {};

        var circle = {
            label: 'Circle Body',
            circleRadius: radius
        };
        
        // approximate circles with polygons until true circles implemented in SAT
        maxSides = maxSides || 25;
        var sides = Math.ceil(Math.max(10, Math.min(maxSides, radius)));

        // optimisation: always use even number of sides (half the number of unique axes)
        if (sides % 2 === 1)
            sides += 1;

        return Bodies.polygon(x, y, sides, radius, Common.extend({}, circle, options));
    };

    /**
     * Creates a new rigid body model with a regular polygon hull with the given number of sides. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method polygon
     * @param {number} x
     * @param {number} y
     * @param {number} sides
     * @param {number} radius
     * @param {object} [options]
     * @return {body} A new regular polygon body
     */
    Bodies.polygon = function(x, y, sides, radius, options) {
        options = options || {};

        if (sides < 3)
            return Bodies.circle(x, y, radius, options);

        var theta = 2 * Math.PI / sides,
            path = '',
            offset = theta * 0.5;

        for (var i = 0; i < sides; i += 1) {
            var angle = offset + (i * theta),
                xx = Math.cos(angle) * radius,
                yy = Math.sin(angle) * radius;

            path += 'L ' + xx.toFixed(3) + ' ' + yy.toFixed(3) + ' ';
        }

        var polygon = { 
            label: 'Polygon Body',
            position: { x: x, y: y },
            vertices: Vertices.fromPath(path)
        };

        if (options.chamfer) {
            var chamfer = options.chamfer;
            polygon.vertices = Vertices.chamfer(polygon.vertices, chamfer.radius, 
                chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
            delete options.chamfer;
        }

        return Body.create(Common.extend({}, polygon, options));
    };

    /**
     * Utility to create a compound body based on set(s) of vertices.
     * 
     * _Note:_ To optionally enable automatic concave vertices decomposition the [poly-decomp](https://github.com/schteppe/poly-decomp.js) 
     * package must be first installed and provided see `Common.setDecomp`, otherwise the convex hull of each vertex set will be used.
     * 
     * The resulting vertices are reorientated about their centre of mass,
     * and offset such that `body.position` corresponds to this point.
     * 
     * The resulting offset may be found if needed by subtracting `body.bounds` from the original input bounds.
     * To later move the centre of mass see `Body.setCentre`.
     * 
     * Note that automatic conconcave decomposition results are not always optimal. 
     * For best results, simplify the input vertices as much as possible first.
     * By default this function applies some addtional simplification to help.
     * 
     * Some outputs may also require further manual processing afterwards to be robust.
     * In particular some parts may need to be overlapped to avoid collision gaps.
     * Thin parts and sharp points should be avoided or removed where possible.
     *
     * The options parameter object specifies any `Matter.Body` properties you wish to override the defaults.
     * 
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method fromVertices
     * @param {number} x
     * @param {number} y
     * @param {array} vertexSets One or more arrays of vertex points e.g. `[[{ x: 0, y: 0 }...], ...]`.
     * @param {object} [options] The body options.
     * @param {bool} [flagInternal=false] Optionally marks internal edges with `isInternal`.
     * @param {number} [removeCollinear=0.01] Threshold when simplifying vertices along the same edge.
     * @param {number} [minimumArea=10] Threshold when removing small parts.
     * @param {number} [removeDuplicatePoints=0.01] Threshold when simplifying nearby vertices.
     * @return {body}
     */
    Bodies.fromVertices = function(x, y, vertexSets, options, flagInternal, removeCollinear, minimumArea, removeDuplicatePoints) {
        var decomp = Common.getDecomp(),
            canDecomp,
            body,
            parts,
            isConvex,
            isConcave,
            vertices,
            i,
            j,
            k,
            v,
            z;

        // check decomp is as expected
        canDecomp = Boolean(decomp && decomp.quickDecomp);

        options = options || {};
        parts = [];

        flagInternal = typeof flagInternal !== 'undefined' ? flagInternal : false;
        removeCollinear = typeof removeCollinear !== 'undefined' ? removeCollinear : 0.01;
        minimumArea = typeof minimumArea !== 'undefined' ? minimumArea : 10;
        removeDuplicatePoints = typeof removeDuplicatePoints !== 'undefined' ? removeDuplicatePoints : 0.01;

        // ensure vertexSets is an array of arrays
        if (!Common.isArray(vertexSets[0])) {
            vertexSets = [vertexSets];
        }

        for (v = 0; v < vertexSets.length; v += 1) {
            vertices = vertexSets[v];
            isConvex = Vertices.isConvex(vertices);
            isConcave = !isConvex;

            if (isConcave && !canDecomp) {
                Common.warnOnce(
                    'Bodies.fromVertices: Install the \'poly-decomp\' library and use Common.setDecomp or provide \'decomp\' as a global to decompose concave vertices.'
                );
            }

            if (isConvex || !canDecomp) {
                if (isConvex) {
                    vertices = Vertices.clockwiseSort(vertices);
                } else {
                    // fallback to convex hull when decomposition is not possible
                    vertices = Vertices.hull(vertices);
                }

                parts.push({
                    position: { x: x, y: y },
                    vertices: vertices
                });
            } else {
                // initialise a decomposition
                var concave = vertices.map(function(vertex) {
                    return [vertex.x, vertex.y];
                });

                // vertices are concave and simple, we can decompose into parts
                decomp.makeCCW(concave);
                if (removeCollinear !== false)
                    decomp.removeCollinearPoints(concave, removeCollinear);
                if (removeDuplicatePoints !== false && decomp.removeDuplicatePoints)
                    decomp.removeDuplicatePoints(concave, removeDuplicatePoints);

                // use the quick decomposition algorithm (Bayazit)
                var decomposed = decomp.quickDecomp(concave);

                // for each decomposed chunk
                for (i = 0; i < decomposed.length; i++) {
                    var chunk = decomposed[i];

                    // convert vertices into the correct structure
                    var chunkVertices = chunk.map(function(vertices) {
                        return {
                            x: vertices[0],
                            y: vertices[1]
                        };
                    });

                    // skip small chunks
                    if (minimumArea > 0 && Vertices.area(chunkVertices) < minimumArea)
                        continue;

                    // create a compound part
                    parts.push({
                        position: Vertices.centre(chunkVertices),
                        vertices: chunkVertices
                    });
                }
            }
        }

        // create body parts
        for (i = 0; i < parts.length; i++) {
            parts[i] = Body.create(Common.extend(parts[i], options));
        }

        // flag internal edges (coincident part edges)
        if (flagInternal) {
            var coincident_max_dist = 5;

            for (i = 0; i < parts.length; i++) {
                var partA = parts[i];

                for (j = i + 1; j < parts.length; j++) {
                    var partB = parts[j];

                    if (Bounds.overlaps(partA.bounds, partB.bounds)) {
                        var pav = partA.vertices,
                            pbv = partB.vertices;

                        // iterate vertices of both parts
                        for (k = 0; k < partA.vertices.length; k++) {
                            for (z = 0; z < partB.vertices.length; z++) {
                                // find distances between the vertices
                                var da = Vector.magnitudeSquared(Vector.sub(pav[(k + 1) % pav.length], pbv[z])),
                                    db = Vector.magnitudeSquared(Vector.sub(pav[k], pbv[(z + 1) % pbv.length]));

                                // if both vertices are very close, consider the edge concident (internal)
                                if (da < coincident_max_dist && db < coincident_max_dist) {
                                    pav[k].isInternal = true;
                                    pbv[z].isInternal = true;
                                }
                            }
                        }

                    }
                }
            }
        }

        if (parts.length > 1) {
            // create the parent body to be returned, that contains generated compound parts
            body = Body.create(Common.extend({ parts: parts.slice(0) }, options));

            // offset such that body.position is at the centre off mass
            Body.setPosition(body, { x: x, y: y });

            return body;
        } else {
            return parts[0];
        }
    };

})();


/***/ }),
/* 13 */
/***/ (function(module, exports, __nested_webpack_require_171606__) {

/**
* The `Matter.Mouse` module contains methods for creating and manipulating mouse inputs.
*
* @class Mouse
*/

var Mouse = {};

module.exports = Mouse;

var Common = __nested_webpack_require_171606__(0);

(function() {

    /**
     * Creates a mouse input.
     * @method create
     * @param {HTMLElement} element
     * @return {mouse} A new mouse
     */
    Mouse.create = function(element) {
        var mouse = {};

        if (!element) {
            Common.log('Mouse.create: element was undefined, defaulting to document.body', 'warn');
        }
        
        mouse.element = element || document.body;
        mouse.absolute = { x: 0, y: 0 };
        mouse.position = { x: 0, y: 0 };
        mouse.mousedownPosition = { x: 0, y: 0 };
        mouse.mouseupPosition = { x: 0, y: 0 };
        mouse.offset = { x: 0, y: 0 };
        mouse.scale = { x: 1, y: 1 };
        mouse.wheelDelta = 0;
        mouse.button = -1;
        mouse.pixelRatio = parseInt(mouse.element.getAttribute('data-pixel-ratio'), 10) || 1;

        mouse.sourceEvents = {
            mousemove: null,
            mousedown: null,
            mouseup: null,
            mousewheel: null
        };
        
        mouse.mousemove = function(event) { 
            var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio),
                touches = event.changedTouches;

            if (touches) {
                mouse.button = 0;
                event.preventDefault();
            }

            mouse.absolute.x = position.x;
            mouse.absolute.y = position.y;
            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
            mouse.sourceEvents.mousemove = event;
        };
        
        mouse.mousedown = function(event) {
            var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio),
                touches = event.changedTouches;

            if (touches) {
                mouse.button = 0;
                event.preventDefault();
            } else {
                mouse.button = event.button;
            }

            mouse.absolute.x = position.x;
            mouse.absolute.y = position.y;
            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
            mouse.mousedownPosition.x = mouse.position.x;
            mouse.mousedownPosition.y = mouse.position.y;
            mouse.sourceEvents.mousedown = event;
        };
        
        mouse.mouseup = function(event) {
            var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio),
                touches = event.changedTouches;

            if (touches) {
                event.preventDefault();
            }
            
            mouse.button = -1;
            mouse.absolute.x = position.x;
            mouse.absolute.y = position.y;
            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
            mouse.mouseupPosition.x = mouse.position.x;
            mouse.mouseupPosition.y = mouse.position.y;
            mouse.sourceEvents.mouseup = event;
        };

        mouse.mousewheel = function(event) {
            mouse.wheelDelta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
            event.preventDefault();
        };

        Mouse.setElement(mouse, mouse.element);

        return mouse;
    };

    /**
     * Sets the element the mouse is bound to (and relative to).
     * @method setElement
     * @param {mouse} mouse
     * @param {HTMLElement} element
     */
    Mouse.setElement = function(mouse, element) {
        mouse.element = element;

        element.addEventListener('mousemove', mouse.mousemove);
        element.addEventListener('mousedown', mouse.mousedown);
        element.addEventListener('mouseup', mouse.mouseup);
        
        element.addEventListener('mousewheel', mouse.mousewheel);
        element.addEventListener('DOMMouseScroll', mouse.mousewheel);

        element.addEventListener('touchmove', mouse.mousemove);
        element.addEventListener('touchstart', mouse.mousedown);
        element.addEventListener('touchend', mouse.mouseup);
    };

    /**
     * Clears all captured source events.
     * @method clearSourceEvents
     * @param {mouse} mouse
     */
    Mouse.clearSourceEvents = function(mouse) {
        mouse.sourceEvents.mousemove = null;
        mouse.sourceEvents.mousedown = null;
        mouse.sourceEvents.mouseup = null;
        mouse.sourceEvents.mousewheel = null;
        mouse.wheelDelta = 0;
    };

    /**
     * Sets the mouse position offset.
     * @method setOffset
     * @param {mouse} mouse
     * @param {vector} offset
     */
    Mouse.setOffset = function(mouse, offset) {
        mouse.offset.x = offset.x;
        mouse.offset.y = offset.y;
        mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
        mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
    };

    /**
     * Sets the mouse position scale.
     * @method setScale
     * @param {mouse} mouse
     * @param {vector} scale
     */
    Mouse.setScale = function(mouse, scale) {
        mouse.scale.x = scale.x;
        mouse.scale.y = scale.y;
        mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
        mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
    };
    
    /**
     * Gets the mouse position relative to an element given a screen pixel ratio.
     * @method _getRelativeMousePosition
     * @private
     * @param {} event
     * @param {} element
     * @param {number} pixelRatio
     * @return {}
     */
    Mouse._getRelativeMousePosition = function(event, element, pixelRatio) {
        var elementBounds = element.getBoundingClientRect(),
            rootNode = (document.documentElement || document.body.parentNode || document.body),
            scrollX = (window.pageXOffset !== undefined) ? window.pageXOffset : rootNode.scrollLeft,
            scrollY = (window.pageYOffset !== undefined) ? window.pageYOffset : rootNode.scrollTop,
            touches = event.changedTouches,
            x, y;
        
        if (touches) {
            x = touches[0].pageX - elementBounds.left - scrollX;
            y = touches[0].pageY - elementBounds.top - scrollY;
        } else {
            x = event.pageX - elementBounds.left - scrollX;
            y = event.pageY - elementBounds.top - scrollY;
        }

        return { 
            x: x / (element.clientWidth / (element.width || element.clientWidth) * pixelRatio),
            y: y / (element.clientHeight / (element.height || element.clientHeight) * pixelRatio)
        };
    };

})();


/***/ }),
/* 14 */
/***/ (function(module, exports, __nested_webpack_require_178610__) {

/**
* The `Matter.Detector` module contains methods for efficiently detecting collisions between a list of bodies using a broadphase algorithm.
*
* @class Detector
*/

var Detector = {};

module.exports = Detector;

var Common = __nested_webpack_require_178610__(0);
var Collision = __nested_webpack_require_178610__(8);

(function() {

    /**
     * Creates a new collision detector.
     * @method create
     * @param {} options
     * @return {detector} A new collision detector
     */
    Detector.create = function(options) {
        var defaults = {
            bodies: [],
            pairs: null
        };

        return Common.extend(defaults, options);
    };

    /**
     * Sets the list of bodies in the detector.
     * @method setBodies
     * @param {detector} detector
     * @param {body[]} bodies
     */
    Detector.setBodies = function(detector, bodies) {
        detector.bodies = bodies.slice(0);
    };

    /**
     * Clears the detector including its list of bodies.
     * @method clear
     * @param {detector} detector
     */
    Detector.clear = function(detector) {
        detector.bodies = [];
    };

    /**
     * Efficiently finds all collisions among all the bodies in `detector.bodies` using a broadphase algorithm.
     * 
     * _Note:_ The specific ordering of collisions returned is not guaranteed between releases and may change for performance reasons.
     * If a specific ordering is required then apply a sort to the resulting array.
     * @method collisions
     * @param {detector} detector
     * @return {collision[]} collisions
     */
    Detector.collisions = function(detector) {
        var collisions = [],
            pairs = detector.pairs,
            bodies = detector.bodies,
            bodiesLength = bodies.length,
            canCollide = Detector.canCollide,
            collides = Collision.collides,
            i,
            j;

        bodies.sort(Detector._compareBoundsX);

        for (i = 0; i < bodiesLength; i++) {
            var bodyA = bodies[i],
                boundsA = bodyA.bounds,
                boundXMax = bodyA.bounds.max.x,
                boundYMax = bodyA.bounds.max.y,
                boundYMin = bodyA.bounds.min.y,
                bodyAStatic = bodyA.isStatic || bodyA.isSleeping,
                partsALength = bodyA.parts.length,
                partsASingle = partsALength === 1;

            for (j = i + 1; j < bodiesLength; j++) {
                var bodyB = bodies[j],
                    boundsB = bodyB.bounds;

                if (boundsB.min.x > boundXMax) {
                    break;
                }

                if (boundYMax < boundsB.min.y || boundYMin > boundsB.max.y) {
                    continue;
                }

                if (bodyAStatic && (bodyB.isStatic || bodyB.isSleeping)) {
                    continue;
                }

                if (!canCollide(bodyA.collisionFilter, bodyB.collisionFilter)) {
                    continue;
                }

                var partsBLength = bodyB.parts.length;

                if (partsASingle && partsBLength === 1) {
                    var collision = collides(bodyA, bodyB, pairs);

                    if (collision) {
                        collisions.push(collision);
                    }
                } else {
                    var partsAStart = partsALength > 1 ? 1 : 0,
                        partsBStart = partsBLength > 1 ? 1 : 0;
                    
                    for (var k = partsAStart; k < partsALength; k++) {
                        var partA = bodyA.parts[k],
                            boundsA = partA.bounds;

                        for (var z = partsBStart; z < partsBLength; z++) {
                            var partB = bodyB.parts[z],
                                boundsB = partB.bounds;

                            if (boundsA.min.x > boundsB.max.x || boundsA.max.x < boundsB.min.x
                                || boundsA.max.y < boundsB.min.y || boundsA.min.y > boundsB.max.y) {
                                continue;
                            }

                            var collision = collides(partA, partB, pairs);

                            if (collision) {
                                collisions.push(collision);
                            }
                        }
                    }
                }
            }
        }

        return collisions;
    };

    /**
     * Returns `true` if both supplied collision filters will allow a collision to occur.
     * See `body.collisionFilter` for more information.
     * @method canCollide
     * @param {} filterA
     * @param {} filterB
     * @return {bool} `true` if collision can occur
     */
    Detector.canCollide = function(filterA, filterB) {
        if (filterA.group === filterB.group && filterA.group !== 0)
            return filterA.group > 0;

        return (filterA.mask & filterB.category) !== 0 && (filterB.mask & filterA.category) !== 0;
    };

    /**
     * The comparison function used in the broadphase algorithm.
     * Returns the signed delta of the bodies bounds on the x-axis.
     * @private
     * @method _sortCompare
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {number} The signed delta used for sorting
     */
    Detector._compareBoundsX = function(bodyA, bodyB) {
        return bodyA.bounds.min.x - bodyB.bounds.min.x;
    };

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * The array of `Matter.Body` between which the detector finds collisions.
     * 
     * _Note:_ The order of bodies in this array _is not fixed_ and will be continually managed by the detector.
     * @property bodies
     * @type body[]
     * @default []
     */

    /**
     * Optional. A `Matter.Pairs` object from which previous collision objects may be reused. Intended for internal `Matter.Engine` usage.
     * @property pairs
     * @type {pairs|null}
     * @default null
     */

})();


/***/ }),
/* 15 */
/***/ (function(module, exports, __nested_webpack_require_184655__) {

/**
* The `Matter.Plugin` module contains functions for registering and installing plugins on modules.
*
* @class Plugin
*/

var Plugin = {};

module.exports = Plugin;

var Common = __nested_webpack_require_184655__(0);

(function() {

    Plugin._registry = {};

    /**
     * Registers a plugin object so it can be resolved later by name.
     * @method register
     * @param plugin {} The plugin to register.
     * @return {object} The plugin.
     */
    Plugin.register = function(plugin) {
        if (!Plugin.isPlugin(plugin)) {
            Common.warn('Plugin.register:', Plugin.toString(plugin), 'does not implement all required fields.');
        }

        if (plugin.name in Plugin._registry) {
            var registered = Plugin._registry[plugin.name],
                pluginVersion = Plugin.versionParse(plugin.version).number,
                registeredVersion = Plugin.versionParse(registered.version).number;

            if (pluginVersion > registeredVersion) {
                Common.warn('Plugin.register:', Plugin.toString(registered), 'was upgraded to', Plugin.toString(plugin));
                Plugin._registry[plugin.name] = plugin;
            } else if (pluginVersion < registeredVersion) {
                Common.warn('Plugin.register:', Plugin.toString(registered), 'can not be downgraded to', Plugin.toString(plugin));
            } else if (plugin !== registered) {
                Common.warn('Plugin.register:', Plugin.toString(plugin), 'is already registered to different plugin object');
            }
        } else {
            Plugin._registry[plugin.name] = plugin;
        }

        return plugin;
    };

    /**
     * Resolves a dependency to a plugin object from the registry if it exists. 
     * The `dependency` may contain a version, but only the name matters when resolving.
     * @method resolve
     * @param dependency {string} The dependency.
     * @return {object} The plugin if resolved, otherwise `undefined`.
     */
    Plugin.resolve = function(dependency) {
        return Plugin._registry[Plugin.dependencyParse(dependency).name];
    };

    /**
     * Returns a pretty printed plugin name and version.
     * @method toString
     * @param plugin {} The plugin.
     * @return {string} Pretty printed plugin name and version.
     */
    Plugin.toString = function(plugin) {
        return typeof plugin === 'string' ? plugin : (plugin.name || 'anonymous') + '@' + (plugin.version || plugin.range || '0.0.0');
    };

    /**
     * Returns `true` if the object meets the minimum standard to be considered a plugin.
     * This means it must define the following properties:
     * - `name`
     * - `version`
     * - `install`
     * @method isPlugin
     * @param obj {} The obj to test.
     * @return {boolean} `true` if the object can be considered a plugin otherwise `false`.
     */
    Plugin.isPlugin = function(obj) {
        return obj && obj.name && obj.version && obj.install;
    };

    /**
     * Returns `true` if a plugin with the given `name` been installed on `module`.
     * @method isUsed
     * @param module {} The module.
     * @param name {string} The plugin name.
     * @return {boolean} `true` if a plugin with the given `name` been installed on `module`, otherwise `false`.
     */
    Plugin.isUsed = function(module, name) {
        return module.used.indexOf(name) > -1;
    };

    /**
     * Returns `true` if `plugin.for` is applicable to `module` by comparing against `module.name` and `module.version`.
     * If `plugin.for` is not specified then it is assumed to be applicable.
     * The value of `plugin.for` is a string of the format `'module-name'` or `'module-name@version'`.
     * @method isFor
     * @param plugin {} The plugin.
     * @param module {} The module.
     * @return {boolean} `true` if `plugin.for` is applicable to `module`, otherwise `false`.
     */
    Plugin.isFor = function(plugin, module) {
        var parsed = plugin.for && Plugin.dependencyParse(plugin.for);
        return !plugin.for || (module.name === parsed.name && Plugin.versionSatisfies(module.version, parsed.range));
    };

    /**
     * Installs the plugins by calling `plugin.install` on each plugin specified in `plugins` if passed, otherwise `module.uses`.
     * For installing plugins on `Matter` see the convenience function `Matter.use`.
     * Plugins may be specified either by their name or a reference to the plugin object.
     * Plugins themselves may specify further dependencies, but each plugin is installed only once.
     * Order is important, a topological sort is performed to find the best resulting order of installation.
     * This sorting attempts to satisfy every dependency's requested ordering, but may not be exact in all cases.
     * This function logs the resulting status of each dependency in the console, along with any warnings.
     * - A green tick ✅ indicates a dependency was resolved and installed.
     * - An orange diamond 🔶 indicates a dependency was resolved but a warning was thrown for it or one if its dependencies.
     * - A red cross ❌ indicates a dependency could not be resolved.
     * Avoid calling this function multiple times on the same module unless you intend to manually control installation order.
     * @method use
     * @param module {} The module install plugins on.
     * @param [plugins=module.uses] {} The plugins to install on module (optional, defaults to `module.uses`).
     */
    Plugin.use = function(module, plugins) {
        module.uses = (module.uses || []).concat(plugins || []);

        if (module.uses.length === 0) {
            Common.warn('Plugin.use:', Plugin.toString(module), 'does not specify any dependencies to install.');
            return;
        }

        var dependencies = Plugin.dependencies(module),
            sortedDependencies = Common.topologicalSort(dependencies),
            status = [];

        for (var i = 0; i < sortedDependencies.length; i += 1) {
            if (sortedDependencies[i] === module.name) {
                continue;
            }

            var plugin = Plugin.resolve(sortedDependencies[i]);

            if (!plugin) {
                status.push('❌ ' + sortedDependencies[i]);
                continue;
            }

            if (Plugin.isUsed(module, plugin.name)) {
                continue;
            }

            if (!Plugin.isFor(plugin, module)) {
                Common.warn('Plugin.use:', Plugin.toString(plugin), 'is for', plugin.for, 'but installed on', Plugin.toString(module) + '.');
                plugin._warned = true;
            }

            if (plugin.install) {
                plugin.install(module);
            } else {
                Common.warn('Plugin.use:', Plugin.toString(plugin), 'does not specify an install function.');
                plugin._warned = true;
            }

            if (plugin._warned) {
                status.push('🔶 ' + Plugin.toString(plugin));
                delete plugin._warned;
            } else {
                status.push('✅ ' + Plugin.toString(plugin));
            }

            module.used.push(plugin.name);
        }

        if (status.length > 0) {
            Common.info(status.join('  '));
        }
    };

    /**
     * Recursively finds all of a module's dependencies and returns a flat dependency graph.
     * @method dependencies
     * @param module {} The module.
     * @return {object} A dependency graph.
     */
    Plugin.dependencies = function(module, tracked) {
        var parsedBase = Plugin.dependencyParse(module),
            name = parsedBase.name;

        tracked = tracked || {};

        if (name in tracked) {
            return;
        }

        module = Plugin.resolve(module) || module;

        tracked[name] = Common.map(module.uses || [], function(dependency) {
            if (Plugin.isPlugin(dependency)) {
                Plugin.register(dependency);
            }

            var parsed = Plugin.dependencyParse(dependency),
                resolved = Plugin.resolve(dependency);

            if (resolved && !Plugin.versionSatisfies(resolved.version, parsed.range)) {
                Common.warn(
                    'Plugin.dependencies:', Plugin.toString(resolved), 'does not satisfy',
                    Plugin.toString(parsed), 'used by', Plugin.toString(parsedBase) + '.'
                );

                resolved._warned = true;
                module._warned = true;
            } else if (!resolved) {
                Common.warn(
                    'Plugin.dependencies:', Plugin.toString(dependency), 'used by',
                    Plugin.toString(parsedBase), 'could not be resolved.'
                );

                module._warned = true;
            }

            return parsed.name;
        });

        for (var i = 0; i < tracked[name].length; i += 1) {
            Plugin.dependencies(tracked[name][i], tracked);
        }

        return tracked;
    };

    /**
     * Parses a dependency string into its components.
     * The `dependency` is a string of the format `'module-name'` or `'module-name@version'`.
     * See documentation for `Plugin.versionParse` for a description of the format.
     * This function can also handle dependencies that are already resolved (e.g. a module object).
     * @method dependencyParse
     * @param dependency {string} The dependency of the format `'module-name'` or `'module-name@version'`.
     * @return {object} The dependency parsed into its components.
     */
    Plugin.dependencyParse = function(dependency) {
        if (Common.isString(dependency)) {
            var pattern = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;

            if (!pattern.test(dependency)) {
                Common.warn('Plugin.dependencyParse:', dependency, 'is not a valid dependency string.');
            }

            return {
                name: dependency.split('@')[0],
                range: dependency.split('@')[1] || '*'
            };
        }

        return {
            name: dependency.name,
            range: dependency.range || dependency.version
        };
    };

    /**
     * Parses a version string into its components.  
     * Versions are strictly of the format `x.y.z` (as in [semver](http://semver.org/)).
     * Versions may optionally have a prerelease tag in the format `x.y.z-alpha`.
     * Ranges are a strict subset of [npm ranges](https://docs.npmjs.com/misc/semver#advanced-range-syntax).
     * Only the following range types are supported:
     * - Tilde ranges e.g. `~1.2.3`
     * - Caret ranges e.g. `^1.2.3`
     * - Greater than ranges e.g. `>1.2.3`
     * - Greater than or equal ranges e.g. `>=1.2.3`
     * - Exact version e.g. `1.2.3`
     * - Any version `*`
     * @method versionParse
     * @param range {string} The version string.
     * @return {object} The version range parsed into its components.
     */
    Plugin.versionParse = function(range) {
        var pattern = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;

        if (!pattern.test(range)) {
            Common.warn('Plugin.versionParse:', range, 'is not a valid version or range.');
        }

        var parts = pattern.exec(range);
        var major = Number(parts[4]);
        var minor = Number(parts[5]);
        var patch = Number(parts[6]);

        return {
            isRange: Boolean(parts[1] || parts[2]),
            version: parts[3],
            range: range,
            operator: parts[1] || parts[2] || '',
            major: major,
            minor: minor,
            patch: patch,
            parts: [major, minor, patch],
            prerelease: parts[7],
            number: major * 1e8 + minor * 1e4 + patch
        };
    };

    /**
     * Returns `true` if `version` satisfies the given `range`.
     * See documentation for `Plugin.versionParse` for a description of the format.
     * If a version or range is not specified, then any version (`*`) is assumed to satisfy.
     * @method versionSatisfies
     * @param version {string} The version string.
     * @param range {string} The range string.
     * @return {boolean} `true` if `version` satisfies `range`, otherwise `false`.
     */
    Plugin.versionSatisfies = function(version, range) {
        range = range || '*';

        var r = Plugin.versionParse(range),
            v = Plugin.versionParse(version);

        if (r.isRange) {
            if (r.operator === '*' || version === '*') {
                return true;
            }

            if (r.operator === '>') {
                return v.number > r.number;
            }

            if (r.operator === '>=') {
                return v.number >= r.number;
            }

            if (r.operator === '~') {
                return v.major === r.major && v.minor === r.minor && v.patch >= r.patch;
            }

            if (r.operator === '^') {
                if (r.major > 0) {
                    return v.major === r.major && v.number >= r.number;
                }

                if (r.minor > 0) {
                    return v.minor === r.minor && v.patch >= r.patch;
                }

                return v.patch === r.patch;
            }
        }

        return version === range || version === '*';
    };

})();


/***/ }),
/* 16 */
/***/ (function(module, exports, __nested_webpack_require_198010__) {

/**
* The `Matter.Render` module is a simple canvas based renderer for visualising instances of `Matter.Engine`.
* It is intended for development and debugging purposes, but may also be suitable for simple games.
* It includes a number of drawing options including wireframe, vector with support for sprites and viewports.
*
* @class Render
*/

var Render = {};

module.exports = Render;

var Common = __nested_webpack_require_198010__(0);
var Composite = __nested_webpack_require_198010__(5);
var Bounds = __nested_webpack_require_198010__(1);
var Events = __nested_webpack_require_198010__(4);
var Vector = __nested_webpack_require_198010__(2);
var Mouse = __nested_webpack_require_198010__(13);

(function() {

    var _requestAnimationFrame,
        _cancelAnimationFrame;

    if (typeof window !== 'undefined') {
        _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
                                      || window.mozRequestAnimationFrame || window.msRequestAnimationFrame
                                      || function(callback){ window.setTimeout(function() { callback(Common.now()); }, 1000 / 60); };

        _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame
                                      || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
    }

    Render._goodFps = 30;
    Render._goodDelta = 1000 / 60;

    /**
     * Creates a new renderer. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {object} [options]
     * @return {render} A new renderer
     */
    Render.create = function(options) {
        var defaults = {
            controller: Render,
            engine: null,
            element: null,
            canvas: null,
            mouse: null,
            frameRequestId: null,
            timing: {
                historySize: 60,
                delta: 0,
                deltaHistory: [],
                lastTime: 0,
                lastTimestamp: 0,
                lastElapsed: 0,
                timestampElapsed: 0,
                timestampElapsedHistory: [],
                engineDeltaHistory: [],
                engineElapsedHistory: [],
                elapsedHistory: []
            },
            options: {
                width: 800,
                height: 600,
                pixelRatio: 1,
                background: '#14151f',
                wireframeBackground: '#14151f',
                hasBounds: !!options.bounds,
                enabled: true,
                wireframes: true,
                showSleeping: true,
                showDebug: false,
                showStats: false,
                showPerformance: false,
                showBounds: false,
                showVelocity: false,
                showCollisions: false,
                showSeparations: false,
                showAxes: false,
                showPositions: false,
                showAngleIndicator: false,
                showIds: false,
                showVertexNumbers: false,
                showConvexHulls: false,
                showInternalEdges: false,
                showMousePosition: false
            }
        };

        var render = Common.extend(defaults, options);

        if (render.canvas) {
            render.canvas.width = render.options.width || render.canvas.width;
            render.canvas.height = render.options.height || render.canvas.height;
        }

        render.mouse = options.mouse;
        render.engine = options.engine;
        render.canvas = render.canvas || _createCanvas(render.options.width, render.options.height);
        render.context = render.canvas.getContext('2d');
        render.textures = {};

        render.bounds = render.bounds || {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: render.canvas.width,
                y: render.canvas.height
            }
        };

        // for temporary back compatibility only
        render.options.showBroadphase = false;

        if (render.options.pixelRatio !== 1) {
            Render.setPixelRatio(render, render.options.pixelRatio);
        }

        if (Common.isElement(render.element)) {
            render.element.appendChild(render.canvas);
        } else if (!render.canvas.parentNode) {
            Common.log('Render.create: options.element was undefined, render.canvas was created but not appended', 'warn');
        }

        return render;
    };

    /**
     * Continuously updates the render canvas on the `requestAnimationFrame` event.
     * @method run
     * @param {render} render
     */
    Render.run = function(render) {
        (function loop(time){
            render.frameRequestId = _requestAnimationFrame(loop);
            
            _updateTiming(render, time);

            Render.world(render, time);

            if (render.options.showStats || render.options.showDebug) {
                Render.stats(render, render.context, time);
            }

            if (render.options.showPerformance || render.options.showDebug) {
                Render.performance(render, render.context, time);
            }
        })();
    };

    /**
     * Ends execution of `Render.run` on the given `render`, by canceling the animation frame request event loop.
     * @method stop
     * @param {render} render
     */
    Render.stop = function(render) {
        _cancelAnimationFrame(render.frameRequestId);
    };

    /**
     * Sets the pixel ratio of the renderer and updates the canvas.
     * To automatically detect the correct ratio, pass the string `'auto'` for `pixelRatio`.
     * @method setPixelRatio
     * @param {render} render
     * @param {number} pixelRatio
     */
    Render.setPixelRatio = function(render, pixelRatio) {
        var options = render.options,
            canvas = render.canvas;

        if (pixelRatio === 'auto') {
            pixelRatio = _getPixelRatio(canvas);
        }

        options.pixelRatio = pixelRatio;
        canvas.setAttribute('data-pixel-ratio', pixelRatio);
        canvas.width = options.width * pixelRatio;
        canvas.height = options.height * pixelRatio;
        canvas.style.width = options.width + 'px';
        canvas.style.height = options.height + 'px';
    };

    /**
     * Positions and sizes the viewport around the given object bounds.
     * Objects must have at least one of the following properties:
     * - `object.bounds`
     * - `object.position`
     * - `object.min` and `object.max`
     * - `object.x` and `object.y`
     * @method lookAt
     * @param {render} render
     * @param {object[]} objects
     * @param {vector} [padding]
     * @param {bool} [center=true]
     */
    Render.lookAt = function(render, objects, padding, center) {
        center = typeof center !== 'undefined' ? center : true;
        objects = Common.isArray(objects) ? objects : [objects];
        padding = padding || {
            x: 0,
            y: 0
        };

        // find bounds of all objects
        var bounds = {
            min: { x: Infinity, y: Infinity },
            max: { x: -Infinity, y: -Infinity }
        };

        for (var i = 0; i < objects.length; i += 1) {
            var object = objects[i],
                min = object.bounds ? object.bounds.min : (object.min || object.position || object),
                max = object.bounds ? object.bounds.max : (object.max || object.position || object);

            if (min && max) {
                if (min.x < bounds.min.x)
                    bounds.min.x = min.x;

                if (max.x > bounds.max.x)
                    bounds.max.x = max.x;

                if (min.y < bounds.min.y)
                    bounds.min.y = min.y;

                if (max.y > bounds.max.y)
                    bounds.max.y = max.y;
            }
        }

        // find ratios
        var width = (bounds.max.x - bounds.min.x) + 2 * padding.x,
            height = (bounds.max.y - bounds.min.y) + 2 * padding.y,
            viewHeight = render.canvas.height,
            viewWidth = render.canvas.width,
            outerRatio = viewWidth / viewHeight,
            innerRatio = width / height,
            scaleX = 1,
            scaleY = 1;

        // find scale factor
        if (innerRatio > outerRatio) {
            scaleY = innerRatio / outerRatio;
        } else {
            scaleX = outerRatio / innerRatio;
        }

        // enable bounds
        render.options.hasBounds = true;

        // position and size
        render.bounds.min.x = bounds.min.x;
        render.bounds.max.x = bounds.min.x + width * scaleX;
        render.bounds.min.y = bounds.min.y;
        render.bounds.max.y = bounds.min.y + height * scaleY;

        // center
        if (center) {
            render.bounds.min.x += width * 0.5 - (width * scaleX) * 0.5;
            render.bounds.max.x += width * 0.5 - (width * scaleX) * 0.5;
            render.bounds.min.y += height * 0.5 - (height * scaleY) * 0.5;
            render.bounds.max.y += height * 0.5 - (height * scaleY) * 0.5;
        }

        // padding
        render.bounds.min.x -= padding.x;
        render.bounds.max.x -= padding.x;
        render.bounds.min.y -= padding.y;
        render.bounds.max.y -= padding.y;

        // update mouse
        if (render.mouse) {
            Mouse.setScale(render.mouse, {
                x: (render.bounds.max.x - render.bounds.min.x) / render.canvas.width,
                y: (render.bounds.max.y - render.bounds.min.y) / render.canvas.height
            });

            Mouse.setOffset(render.mouse, render.bounds.min);
        }
    };

    /**
     * Applies viewport transforms based on `render.bounds` to a render context.
     * @method startViewTransform
     * @param {render} render
     */
    Render.startViewTransform = function(render) {
        var boundsWidth = render.bounds.max.x - render.bounds.min.x,
            boundsHeight = render.bounds.max.y - render.bounds.min.y,
            boundsScaleX = boundsWidth / render.options.width,
            boundsScaleY = boundsHeight / render.options.height;

        render.context.setTransform(
            render.options.pixelRatio / boundsScaleX, 0, 0, 
            render.options.pixelRatio / boundsScaleY, 0, 0
        );
        
        render.context.translate(-render.bounds.min.x, -render.bounds.min.y);
    };

    /**
     * Resets all transforms on the render context.
     * @method endViewTransform
     * @param {render} render
     */
    Render.endViewTransform = function(render) {
        render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
    };

    /**
     * Renders the given `engine`'s `Matter.World` object.
     * This is the entry point for all rendering and should be called every time the scene changes.
     * @method world
     * @param {render} render
     */
    Render.world = function(render, time) {
        var startTime = Common.now(),
            engine = render.engine,
            world = engine.world,
            canvas = render.canvas,
            context = render.context,
            options = render.options,
            timing = render.timing;

        var allBodies = Composite.allBodies(world),
            allConstraints = Composite.allConstraints(world),
            background = options.wireframes ? options.wireframeBackground : options.background,
            bodies = [],
            constraints = [],
            i;

        var event = {
            timestamp: engine.timing.timestamp
        };

        Events.trigger(render, 'beforeRender', event);

        // apply background if it has changed
        if (render.currentBackground !== background)
            _applyBackground(render, background);

        // clear the canvas with a transparent fill, to allow the canvas background to show
        context.globalCompositeOperation = 'source-in';
        context.fillStyle = "transparent";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.globalCompositeOperation = 'source-over';

        // handle bounds
        if (options.hasBounds) {
            // filter out bodies that are not in view
            for (i = 0; i < allBodies.length; i++) {
                var body = allBodies[i];
                if (Bounds.overlaps(body.bounds, render.bounds))
                    bodies.push(body);
            }

            // filter out constraints that are not in view
            for (i = 0; i < allConstraints.length; i++) {
                var constraint = allConstraints[i],
                    bodyA = constraint.bodyA,
                    bodyB = constraint.bodyB,
                    pointAWorld = constraint.pointA,
                    pointBWorld = constraint.pointB;

                if (bodyA) pointAWorld = Vector.add(bodyA.position, constraint.pointA);
                if (bodyB) pointBWorld = Vector.add(bodyB.position, constraint.pointB);

                if (!pointAWorld || !pointBWorld)
                    continue;

                if (Bounds.contains(render.bounds, pointAWorld) || Bounds.contains(render.bounds, pointBWorld))
                    constraints.push(constraint);
            }

            // transform the view
            Render.startViewTransform(render);

            // update mouse
            if (render.mouse) {
                Mouse.setScale(render.mouse, {
                    x: (render.bounds.max.x - render.bounds.min.x) / render.options.width,
                    y: (render.bounds.max.y - render.bounds.min.y) / render.options.height
                });

                Mouse.setOffset(render.mouse, render.bounds.min);
            }
        } else {
            constraints = allConstraints;
            bodies = allBodies;

            if (render.options.pixelRatio !== 1) {
                render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
            }
        }

        if (!options.wireframes || (engine.enableSleeping && options.showSleeping)) {
            // fully featured rendering of bodies
            Render.bodies(render, bodies, context);
        } else {
            if (options.showConvexHulls)
                Render.bodyConvexHulls(render, bodies, context);

            // optimised method for wireframes only
            Render.bodyWireframes(render, bodies, context);
        }

        if (options.showBounds)
            Render.bodyBounds(render, bodies, context);

        if (options.showAxes || options.showAngleIndicator)
            Render.bodyAxes(render, bodies, context);

        if (options.showPositions)
            Render.bodyPositions(render, bodies, context);

        if (options.showVelocity)
            Render.bodyVelocity(render, bodies, context);

        if (options.showIds)
            Render.bodyIds(render, bodies, context);

        if (options.showSeparations)
            Render.separations(render, engine.pairs.list, context);

        if (options.showCollisions)
            Render.collisions(render, engine.pairs.list, context);

        if (options.showVertexNumbers)
            Render.vertexNumbers(render, bodies, context);

        if (options.showMousePosition)
            Render.mousePosition(render, render.mouse, context);

        Render.constraints(constraints, context);

        if (options.hasBounds) {
            // revert view transforms
            Render.endViewTransform(render);
        }

        Events.trigger(render, 'afterRender', event);

        // log the time elapsed computing this update
        timing.lastElapsed = Common.now() - startTime;
    };

    /**
     * Renders statistics about the engine and world useful for debugging.
     * @private
     * @method stats
     * @param {render} render
     * @param {RenderingContext} context
     * @param {Number} time
     */
    Render.stats = function(render, context, time) {
        var engine = render.engine,
            world = engine.world,
            bodies = Composite.allBodies(world),
            parts = 0,
            width = 55,
            height = 44,
            x = 0,
            y = 0;
        
        // count parts
        for (var i = 0; i < bodies.length; i += 1) {
            parts += bodies[i].parts.length;
        }

        // sections
        var sections = {
            'Part': parts,
            'Body': bodies.length,
            'Cons': Composite.allConstraints(world).length,
            'Comp': Composite.allComposites(world).length,
            'Pair': engine.pairs.list.length
        };

        // background
        context.fillStyle = '#0e0f19';
        context.fillRect(x, y, width * 5.5, height);

        context.font = '12px Arial';
        context.textBaseline = 'top';
        context.textAlign = 'right';

        // sections
        for (var key in sections) {
            var section = sections[key];
            // label
            context.fillStyle = '#aaa';
            context.fillText(key, x + width, y + 8);

            // value
            context.fillStyle = '#eee';
            context.fillText(section, x + width, y + 26);

            x += width;
        }
    };

    /**
     * Renders engine and render performance information.
     * @private
     * @method performance
     * @param {render} render
     * @param {RenderingContext} context
     */
    Render.performance = function(render, context) {
        var engine = render.engine,
            timing = render.timing,
            deltaHistory = timing.deltaHistory,
            elapsedHistory = timing.elapsedHistory,
            timestampElapsedHistory = timing.timestampElapsedHistory,
            engineDeltaHistory = timing.engineDeltaHistory,
            engineElapsedHistory = timing.engineElapsedHistory,
            lastEngineDelta = engine.timing.lastDelta;
        
        var deltaMean = _mean(deltaHistory),
            elapsedMean = _mean(elapsedHistory),
            engineDeltaMean = _mean(engineDeltaHistory),
            engineElapsedMean = _mean(engineElapsedHistory),
            timestampElapsedMean = _mean(timestampElapsedHistory),
            rateMean = (timestampElapsedMean / deltaMean) || 0,
            fps = (1000 / deltaMean) || 0;

        var graphHeight = 4,
            gap = 12,
            width = 60,
            height = 34,
            x = 10,
            y = 69;

        // background
        context.fillStyle = '#0e0f19';
        context.fillRect(0, 50, gap * 4 + width * 5 + 22, height);

        // show FPS
        Render.status(
            context, x, y, width, graphHeight, deltaHistory.length, 
            Math.round(fps) + ' fps', 
            fps / Render._goodFps,
            function(i) { return (deltaHistory[i] / deltaMean) - 1; }
        );

        // show engine delta
        Render.status(
            context, x + gap + width, y, width, graphHeight, engineDeltaHistory.length,
            lastEngineDelta.toFixed(2) + ' dt', 
            Render._goodDelta / lastEngineDelta,
            function(i) { return (engineDeltaHistory[i] / engineDeltaMean) - 1; }
        );

        // show engine update time
        Render.status(
            context, x + (gap + width) * 2, y, width, graphHeight, engineElapsedHistory.length,
            engineElapsedMean.toFixed(2) + ' ut', 
            1 - (engineElapsedMean / Render._goodFps),
            function(i) { return (engineElapsedHistory[i] / engineElapsedMean) - 1; }
        );

        // show render time
        Render.status(
            context, x + (gap + width) * 3, y, width, graphHeight, elapsedHistory.length,
            elapsedMean.toFixed(2) + ' rt', 
            1 - (elapsedMean / Render._goodFps),
            function(i) { return (elapsedHistory[i] / elapsedMean) - 1; }
        );

        // show effective speed
        Render.status(
            context, x + (gap + width) * 4, y, width, graphHeight, timestampElapsedHistory.length, 
            rateMean.toFixed(2) + ' x', 
            rateMean * rateMean * rateMean,
            function(i) { return (((timestampElapsedHistory[i] / deltaHistory[i]) / rateMean) || 0) - 1; }
        );
    };

    /**
     * Renders a label, indicator and a chart.
     * @private
     * @method status
     * @param {RenderingContext} context
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {number} count
     * @param {string} label
     * @param {string} indicator
     * @param {function} plotY
     */
    Render.status = function(context, x, y, width, height, count, label, indicator, plotY) {
        // background
        context.strokeStyle = '#888';
        context.fillStyle = '#444';
        context.lineWidth = 1;
        context.fillRect(x, y + 7, width, 1);

        // chart
        context.beginPath();
        context.moveTo(x, y + 7 - height * Common.clamp(0.4 * plotY(0), -2, 2));
        for (var i = 0; i < width; i += 1) {
            context.lineTo(x + i, y + 7 - (i < count ? height * Common.clamp(0.4 * plotY(i), -2, 2) : 0));
        }
        context.stroke();

        // indicator
        context.fillStyle = 'hsl(' + Common.clamp(25 + 95 * indicator, 0, 120) + ',100%,60%)';
        context.fillRect(x, y - 7, 4, 4);

        // label
        context.font = '12px Arial';
        context.textBaseline = 'middle';
        context.textAlign = 'right';
        context.fillStyle = '#eee';
        context.fillText(label, x + width, y - 5);
    };

    /**
     * Description
     * @private
     * @method constraints
     * @param {constraint[]} constraints
     * @param {RenderingContext} context
     */
    Render.constraints = function(constraints, context) {
        var c = context;

        for (var i = 0; i < constraints.length; i++) {
            var constraint = constraints[i];

            if (!constraint.render.visible || !constraint.pointA || !constraint.pointB)
                continue;

            var bodyA = constraint.bodyA,
                bodyB = constraint.bodyB,
                start,
                end;

            if (bodyA) {
                start = Vector.add(bodyA.position, constraint.pointA);
            } else {
                start = constraint.pointA;
            }

            if (constraint.render.type === 'pin') {
                c.beginPath();
                c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                c.closePath();
            } else {
                if (bodyB) {
                    end = Vector.add(bodyB.position, constraint.pointB);
                } else {
                    end = constraint.pointB;
                }

                c.beginPath();
                c.moveTo(start.x, start.y);

                if (constraint.render.type === 'spring') {
                    var delta = Vector.sub(end, start),
                        normal = Vector.perp(Vector.normalise(delta)),
                        coils = Math.ceil(Common.clamp(constraint.length / 5, 12, 20)),
                        offset;

                    for (var j = 1; j < coils; j += 1) {
                        offset = j % 2 === 0 ? 1 : -1;

                        c.lineTo(
                            start.x + delta.x * (j / coils) + normal.x * offset * 4,
                            start.y + delta.y * (j / coils) + normal.y * offset * 4
                        );
                    }
                }

                c.lineTo(end.x, end.y);
            }

            if (constraint.render.lineWidth) {
                c.lineWidth = constraint.render.lineWidth;
                c.strokeStyle = constraint.render.strokeStyle;
                c.stroke();
            }

            if (constraint.render.anchors) {
                c.fillStyle = constraint.render.strokeStyle;
                c.beginPath();
                c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                c.arc(end.x, end.y, 3, 0, 2 * Math.PI);
                c.closePath();
                c.fill();
            }
        }
    };

    /**
     * Description
     * @private
     * @method bodies
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodies = function(render, bodies, context) {
        var c = context,
            engine = render.engine,
            options = render.options,
            showInternalEdges = options.showInternalEdges || !options.wireframes,
            body,
            part,
            i,
            k;

        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];

            if (!body.render.visible)
                continue;

            // handle compound parts
            for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
                part = body.parts[k];

                if (!part.render.visible)
                    continue;

                if (options.showSleeping && body.isSleeping) {
                    c.globalAlpha = 0.5 * part.render.opacity;
                } else if (part.render.opacity !== 1) {
                    c.globalAlpha = part.render.opacity;
                }

                if (part.render.sprite && part.render.sprite.texture && !options.wireframes) {
                    // part sprite
                    var sprite = part.render.sprite,
                        texture = _getTexture(render, sprite.texture);

                    c.translate(part.position.x, part.position.y);
                    c.rotate(part.angle);

                    c.drawImage(
                        texture,
                        texture.width * -sprite.xOffset * sprite.xScale,
                        texture.height * -sprite.yOffset * sprite.yScale,
                        texture.width * sprite.xScale,
                        texture.height * sprite.yScale
                    );

                    // revert translation, hopefully faster than save / restore
                    c.rotate(-part.angle);
                    c.translate(-part.position.x, -part.position.y);
                } else {
                    // part polygon
                    if (part.circleRadius) {
                        c.beginPath();
                        c.arc(part.position.x, part.position.y, part.circleRadius, 0, 2 * Math.PI);
                    } else {
                        c.beginPath();
                        c.moveTo(part.vertices[0].x, part.vertices[0].y);

                        for (var j = 1; j < part.vertices.length; j++) {
                            if (!part.vertices[j - 1].isInternal || showInternalEdges) {
                                c.lineTo(part.vertices[j].x, part.vertices[j].y);
                            } else {
                                c.moveTo(part.vertices[j].x, part.vertices[j].y);
                            }

                            if (part.vertices[j].isInternal && !showInternalEdges) {
                                c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                            }
                        }

                        c.lineTo(part.vertices[0].x, part.vertices[0].y);
                        c.closePath();
                    }

                    if (!options.wireframes) {
                        c.fillStyle = part.render.fillStyle;

                        if (part.render.lineWidth) {
                            c.lineWidth = part.render.lineWidth;
                            c.strokeStyle = part.render.strokeStyle;
                            c.stroke();
                        }

                        c.fill();
                    } else {
                        c.lineWidth = 1;
                        c.strokeStyle = '#bbb';
                        c.stroke();
                    }
                }

                c.globalAlpha = 1;
            }
        }
    };

    /**
     * Optimised method for drawing body wireframes in one pass
     * @private
     * @method bodyWireframes
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyWireframes = function(render, bodies, context) {
        var c = context,
            showInternalEdges = render.options.showInternalEdges,
            body,
            part,
            i,
            j,
            k;

        c.beginPath();

        // render all bodies
        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];

            if (!body.render.visible)
                continue;

            // handle compound parts
            for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
                part = body.parts[k];

                c.moveTo(part.vertices[0].x, part.vertices[0].y);

                for (j = 1; j < part.vertices.length; j++) {
                    if (!part.vertices[j - 1].isInternal || showInternalEdges) {
                        c.lineTo(part.vertices[j].x, part.vertices[j].y);
                    } else {
                        c.moveTo(part.vertices[j].x, part.vertices[j].y);
                    }

                    if (part.vertices[j].isInternal && !showInternalEdges) {
                        c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                    }
                }

                c.lineTo(part.vertices[0].x, part.vertices[0].y);
            }
        }

        c.lineWidth = 1;
        c.strokeStyle = '#bbb';
        c.stroke();
    };

    /**
     * Optimised method for drawing body convex hull wireframes in one pass
     * @private
     * @method bodyConvexHulls
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyConvexHulls = function(render, bodies, context) {
        var c = context,
            body,
            part,
            i,
            j,
            k;

        c.beginPath();

        // render convex hulls
        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];

            if (!body.render.visible || body.parts.length === 1)
                continue;

            c.moveTo(body.vertices[0].x, body.vertices[0].y);

            for (j = 1; j < body.vertices.length; j++) {
                c.lineTo(body.vertices[j].x, body.vertices[j].y);
            }

            c.lineTo(body.vertices[0].x, body.vertices[0].y);
        }

        c.lineWidth = 1;
        c.strokeStyle = 'rgba(255,255,255,0.2)';
        c.stroke();
    };

    /**
     * Renders body vertex numbers.
     * @private
     * @method vertexNumbers
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.vertexNumbers = function(render, bodies, context) {
        var c = context,
            i,
            j,
            k;

        for (i = 0; i < bodies.length; i++) {
            var parts = bodies[i].parts;
            for (k = parts.length > 1 ? 1 : 0; k < parts.length; k++) {
                var part = parts[k];
                for (j = 0; j < part.vertices.length; j++) {
                    c.fillStyle = 'rgba(255,255,255,0.2)';
                    c.fillText(i + '_' + j, part.position.x + (part.vertices[j].x - part.position.x) * 0.8, part.position.y + (part.vertices[j].y - part.position.y) * 0.8);
                }
            }
        }
    };

    /**
     * Renders mouse position.
     * @private
     * @method mousePosition
     * @param {render} render
     * @param {mouse} mouse
     * @param {RenderingContext} context
     */
    Render.mousePosition = function(render, mouse, context) {
        var c = context;
        c.fillStyle = 'rgba(255,255,255,0.8)';
        c.fillText(mouse.position.x + '  ' + mouse.position.y, mouse.position.x + 5, mouse.position.y - 5);
    };

    /**
     * Draws body bounds
     * @private
     * @method bodyBounds
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyBounds = function(render, bodies, context) {
        var c = context,
            engine = render.engine,
            options = render.options;

        c.beginPath();

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (body.render.visible) {
                var parts = bodies[i].parts;
                for (var j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                    var part = parts[j];
                    c.rect(part.bounds.min.x, part.bounds.min.y, part.bounds.max.x - part.bounds.min.x, part.bounds.max.y - part.bounds.min.y);
                }
            }
        }

        if (options.wireframes) {
            c.strokeStyle = 'rgba(255,255,255,0.08)';
        } else {
            c.strokeStyle = 'rgba(0,0,0,0.1)';
        }

        c.lineWidth = 1;
        c.stroke();
    };

    /**
     * Draws body angle indicators and axes
     * @private
     * @method bodyAxes
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyAxes = function(render, bodies, context) {
        var c = context,
            engine = render.engine,
            options = render.options,
            part,
            i,
            j,
            k;

        c.beginPath();

        for (i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                parts = body.parts;

            if (!body.render.visible)
                continue;

            if (options.showAxes) {
                // render all axes
                for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                    part = parts[j];
                    for (k = 0; k < part.axes.length; k++) {
                        var axis = part.axes[k];
                        c.moveTo(part.position.x, part.position.y);
                        c.lineTo(part.position.x + axis.x * 20, part.position.y + axis.y * 20);
                    }
                }
            } else {
                for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                    part = parts[j];
                    for (k = 0; k < part.axes.length; k++) {
                        // render a single axis indicator
                        c.moveTo(part.position.x, part.position.y);
                        c.lineTo((part.vertices[0].x + part.vertices[part.vertices.length-1].x) / 2,
                            (part.vertices[0].y + part.vertices[part.vertices.length-1].y) / 2);
                    }
                }
            }
        }

        if (options.wireframes) {
            c.strokeStyle = 'indianred';
            c.lineWidth = 1;
        } else {
            c.strokeStyle = 'rgba(255, 255, 255, 0.4)';
            c.globalCompositeOperation = 'overlay';
            c.lineWidth = 2;
        }

        c.stroke();
        c.globalCompositeOperation = 'source-over';
    };

    /**
     * Draws body positions
     * @private
     * @method bodyPositions
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyPositions = function(render, bodies, context) {
        var c = context,
            engine = render.engine,
            options = render.options,
            body,
            part,
            i,
            k;

        c.beginPath();

        // render current positions
        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];

            if (!body.render.visible)
                continue;

            // handle compound parts
            for (k = 0; k < body.parts.length; k++) {
                part = body.parts[k];
                c.arc(part.position.x, part.position.y, 3, 0, 2 * Math.PI, false);
                c.closePath();
            }
        }

        if (options.wireframes) {
            c.fillStyle = 'indianred';
        } else {
            c.fillStyle = 'rgba(0,0,0,0.5)';
        }
        c.fill();

        c.beginPath();

        // render previous positions
        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];
            if (body.render.visible) {
                c.arc(body.positionPrev.x, body.positionPrev.y, 2, 0, 2 * Math.PI, false);
                c.closePath();
            }
        }

        c.fillStyle = 'rgba(255,165,0,0.8)';
        c.fill();
    };

    /**
     * Draws body velocity
     * @private
     * @method bodyVelocity
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyVelocity = function(render, bodies, context) {
        var c = context;

        c.beginPath();

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (!body.render.visible)
                continue;

            c.moveTo(body.position.x, body.position.y);
            c.lineTo(body.position.x + (body.position.x - body.positionPrev.x) * 2, body.position.y + (body.position.y - body.positionPrev.y) * 2);
        }

        c.lineWidth = 3;
        c.strokeStyle = 'cornflowerblue';
        c.stroke();
    };

    /**
     * Draws body ids
     * @private
     * @method bodyIds
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyIds = function(render, bodies, context) {
        var c = context,
            i,
            j;

        for (i = 0; i < bodies.length; i++) {
            if (!bodies[i].render.visible)
                continue;

            var parts = bodies[i].parts;
            for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                var part = parts[j];
                c.font = "12px Arial";
                c.fillStyle = 'rgba(255,255,255,0.5)';
                c.fillText(part.id, part.position.x + 10, part.position.y - 10);
            }
        }
    };

    /**
     * Description
     * @private
     * @method collisions
     * @param {render} render
     * @param {pair[]} pairs
     * @param {RenderingContext} context
     */
    Render.collisions = function(render, pairs, context) {
        var c = context,
            options = render.options,
            pair,
            collision,
            corrected,
            bodyA,
            bodyB,
            i,
            j;

        c.beginPath();

        // render collision positions
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];

            if (!pair.isActive)
                continue;

            collision = pair.collision;
            for (j = 0; j < pair.activeContacts.length; j++) {
                var contact = pair.activeContacts[j],
                    vertex = contact.vertex;
                c.rect(vertex.x - 1.5, vertex.y - 1.5, 3.5, 3.5);
            }
        }

        if (options.wireframes) {
            c.fillStyle = 'rgba(255,255,255,0.7)';
        } else {
            c.fillStyle = 'orange';
        }
        c.fill();

        c.beginPath();

        // render collision normals
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];

            if (!pair.isActive)
                continue;

            collision = pair.collision;

            if (pair.activeContacts.length > 0) {
                var normalPosX = pair.activeContacts[0].vertex.x,
                    normalPosY = pair.activeContacts[0].vertex.y;

                if (pair.activeContacts.length === 2) {
                    normalPosX = (pair.activeContacts[0].vertex.x + pair.activeContacts[1].vertex.x) / 2;
                    normalPosY = (pair.activeContacts[0].vertex.y + pair.activeContacts[1].vertex.y) / 2;
                }

                if (collision.bodyB === collision.supports[0].body || collision.bodyA.isStatic === true) {
                    c.moveTo(normalPosX - collision.normal.x * 8, normalPosY - collision.normal.y * 8);
                } else {
                    c.moveTo(normalPosX + collision.normal.x * 8, normalPosY + collision.normal.y * 8);
                }

                c.lineTo(normalPosX, normalPosY);
            }
        }

        if (options.wireframes) {
            c.strokeStyle = 'rgba(255,165,0,0.7)';
        } else {
            c.strokeStyle = 'orange';
        }

        c.lineWidth = 1;
        c.stroke();
    };

    /**
     * Description
     * @private
     * @method separations
     * @param {render} render
     * @param {pair[]} pairs
     * @param {RenderingContext} context
     */
    Render.separations = function(render, pairs, context) {
        var c = context,
            options = render.options,
            pair,
            collision,
            corrected,
            bodyA,
            bodyB,
            i,
            j;

        c.beginPath();

        // render separations
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];

            if (!pair.isActive)
                continue;

            collision = pair.collision;
            bodyA = collision.bodyA;
            bodyB = collision.bodyB;

            var k = 1;

            if (!bodyB.isStatic && !bodyA.isStatic) k = 0.5;
            if (bodyB.isStatic) k = 0;

            c.moveTo(bodyB.position.x, bodyB.position.y);
            c.lineTo(bodyB.position.x - collision.penetration.x * k, bodyB.position.y - collision.penetration.y * k);

            k = 1;

            if (!bodyB.isStatic && !bodyA.isStatic) k = 0.5;
            if (bodyA.isStatic) k = 0;

            c.moveTo(bodyA.position.x, bodyA.position.y);
            c.lineTo(bodyA.position.x + collision.penetration.x * k, bodyA.position.y + collision.penetration.y * k);
        }

        if (options.wireframes) {
            c.strokeStyle = 'rgba(255,165,0,0.5)';
        } else {
            c.strokeStyle = 'orange';
        }
        c.stroke();
    };

    /**
     * Description
     * @private
     * @method inspector
     * @param {inspector} inspector
     * @param {RenderingContext} context
     */
    Render.inspector = function(inspector, context) {
        var engine = inspector.engine,
            selected = inspector.selected,
            render = inspector.render,
            options = render.options,
            bounds;

        if (options.hasBounds) {
            var boundsWidth = render.bounds.max.x - render.bounds.min.x,
                boundsHeight = render.bounds.max.y - render.bounds.min.y,
                boundsScaleX = boundsWidth / render.options.width,
                boundsScaleY = boundsHeight / render.options.height;

            context.scale(1 / boundsScaleX, 1 / boundsScaleY);
            context.translate(-render.bounds.min.x, -render.bounds.min.y);
        }

        for (var i = 0; i < selected.length; i++) {
            var item = selected[i].data;

            context.translate(0.5, 0.5);
            context.lineWidth = 1;
            context.strokeStyle = 'rgba(255,165,0,0.9)';
            context.setLineDash([1,2]);

            switch (item.type) {

            case 'body':

                // render body selections
                bounds = item.bounds;
                context.beginPath();
                context.rect(Math.floor(bounds.min.x - 3), Math.floor(bounds.min.y - 3),
                    Math.floor(bounds.max.x - bounds.min.x + 6), Math.floor(bounds.max.y - bounds.min.y + 6));
                context.closePath();
                context.stroke();

                break;

            case 'constraint':

                // render constraint selections
                var point = item.pointA;
                if (item.bodyA)
                    point = item.pointB;
                context.beginPath();
                context.arc(point.x, point.y, 10, 0, 2 * Math.PI);
                context.closePath();
                context.stroke();

                break;

            }

            context.setLineDash([]);
            context.translate(-0.5, -0.5);
        }

        // render selection region
        if (inspector.selectStart !== null) {
            context.translate(0.5, 0.5);
            context.lineWidth = 1;
            context.strokeStyle = 'rgba(255,165,0,0.6)';
            context.fillStyle = 'rgba(255,165,0,0.1)';
            bounds = inspector.selectBounds;
            context.beginPath();
            context.rect(Math.floor(bounds.min.x), Math.floor(bounds.min.y),
                Math.floor(bounds.max.x - bounds.min.x), Math.floor(bounds.max.y - bounds.min.y));
            context.closePath();
            context.stroke();
            context.fill();
            context.translate(-0.5, -0.5);
        }

        if (options.hasBounds)
            context.setTransform(1, 0, 0, 1, 0, 0);
    };

    /**
     * Updates render timing.
     * @method _updateTiming
     * @private
     * @param {render} render
     * @param {number} time
     */
    var _updateTiming = function(render, time) {
        var engine = render.engine,
            timing = render.timing,
            historySize = timing.historySize,
            timestamp = engine.timing.timestamp;

        timing.delta = time - timing.lastTime || Render._goodDelta;
        timing.lastTime = time;

        timing.timestampElapsed = timestamp - timing.lastTimestamp || 0;
        timing.lastTimestamp = timestamp;

        timing.deltaHistory.unshift(timing.delta);
        timing.deltaHistory.length = Math.min(timing.deltaHistory.length, historySize);

        timing.engineDeltaHistory.unshift(engine.timing.lastDelta);
        timing.engineDeltaHistory.length = Math.min(timing.engineDeltaHistory.length, historySize);

        timing.timestampElapsedHistory.unshift(timing.timestampElapsed);
        timing.timestampElapsedHistory.length = Math.min(timing.timestampElapsedHistory.length, historySize);

        timing.engineElapsedHistory.unshift(engine.timing.lastElapsed);
        timing.engineElapsedHistory.length = Math.min(timing.engineElapsedHistory.length, historySize);

        timing.elapsedHistory.unshift(timing.lastElapsed);
        timing.elapsedHistory.length = Math.min(timing.elapsedHistory.length, historySize);
    };

    /**
     * Returns the mean value of the given numbers.
     * @method _mean
     * @private
     * @param {Number[]} values
     * @return {Number} the mean of given values
     */
    var _mean = function(values) {
        var result = 0;
        for (var i = 0; i < values.length; i += 1) {
            result += values[i];
        }
        return (result / values.length) || 0;
    };

    /**
     * @method _createCanvas
     * @private
     * @param {} width
     * @param {} height
     * @return canvas
     */
    var _createCanvas = function(width, height) {
        var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.oncontextmenu = function() { return false; };
        canvas.onselectstart = function() { return false; };
        return canvas;
    };

    /**
     * Gets the pixel ratio of the canvas.
     * @method _getPixelRatio
     * @private
     * @param {HTMLElement} canvas
     * @return {Number} pixel ratio
     */
    var _getPixelRatio = function(canvas) {
        var context = canvas.getContext('2d'),
            devicePixelRatio = window.devicePixelRatio || 1,
            backingStorePixelRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio
                                      || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio
                                      || context.backingStorePixelRatio || 1;

        return devicePixelRatio / backingStorePixelRatio;
    };

    /**
     * Gets the requested texture (an Image) via its path
     * @method _getTexture
     * @private
     * @param {render} render
     * @param {string} imagePath
     * @return {Image} texture
     */
    var _getTexture = function(render, imagePath) {
        var image = render.textures[imagePath];

        if (image)
            return image;

        image = render.textures[imagePath] = new Image();
        image.src = imagePath;

        return image;
    };

    /**
     * Applies the background to the canvas using CSS.
     * @method applyBackground
     * @private
     * @param {render} render
     * @param {string} background
     */
    var _applyBackground = function(render, background) {
        var cssBackground = background;

        if (/(jpg|gif|png)$/.test(background))
            cssBackground = 'url(' + background + ')';

        render.canvas.style.background = cssBackground;
        render.canvas.style.backgroundSize = "contain";
        render.currentBackground = background;
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired before rendering
    *
    * @event beforeRender
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after rendering
    *
    * @event afterRender
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * A back-reference to the `Matter.Render` module.
     *
     * @property controller
     * @type render
     */

    /**
     * A reference to the `Matter.Engine` instance to be used.
     *
     * @property engine
     * @type engine
     */

    /**
     * A reference to the element where the canvas is to be inserted (if `render.canvas` has not been specified)
     *
     * @property element
     * @type HTMLElement
     * @default null
     */

    /**
     * The canvas element to render to. If not specified, one will be created if `render.element` has been specified.
     *
     * @property canvas
     * @type HTMLCanvasElement
     * @default null
     */

    /**
     * A `Bounds` object that specifies the drawing view region.
     * Rendering will be automatically transformed and scaled to fit within the canvas size (`render.options.width` and `render.options.height`).
     * This allows for creating views that can pan or zoom around the scene.
     * You must also set `render.options.hasBounds` to `true` to enable bounded rendering.
     *
     * @property bounds
     * @type bounds
     */

    /**
     * The 2d rendering context from the `render.canvas` element.
     *
     * @property context
     * @type CanvasRenderingContext2D
     */

    /**
     * The sprite texture cache.
     *
     * @property textures
     * @type {}
     */

    /**
     * The mouse to render if `render.options.showMousePosition` is enabled.
     *
     * @property mouse
     * @type mouse
     * @default null
     */

    /**
     * The configuration options of the renderer.
     *
     * @property options
     * @type {}
     */

    /**
     * The target width in pixels of the `render.canvas` to be created.
     * See also the `options.pixelRatio` property to change render quality.
     *
     * @property options.width
     * @type number
     * @default 800
     */

    /**
     * The target height in pixels of the `render.canvas` to be created.
     * See also the `options.pixelRatio` property to change render quality.
     *
     * @property options.height
     * @type number
     * @default 600
     */

    /**
     * The [pixel ratio](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio) to use when rendering.
     *
     * @property options.pixelRatio
     * @type number
     * @default 1
     */

    /**
     * A CSS background color string to use when `render.options.wireframes` is disabled.
     * This may be also set to `'transparent'` or equivalent.
     *
     * @property options.background
     * @type string
     * @default '#14151f'
     */

    /**
     * A CSS background color string to use when `render.options.wireframes` is enabled.
     * This may be also set to `'transparent'` or equivalent.
     *
     * @property options.wireframeBackground
     * @type string
     * @default '#14151f'
     */

    /**
     * A flag that specifies if `render.bounds` should be used when rendering.
     *
     * @property options.hasBounds
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable all debug information overlays together.  
     * This includes and has priority over the values of:
     *
     * - `render.options.showStats`
     * - `render.options.showPerformance`
     *
     * @property options.showDebug
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the engine stats info overlay.  
     * From left to right, the values shown are:
     *
     * - body parts total
     * - body total
     * - constraints total
     * - composites total
     * - collision pairs total
     *
     * @property options.showStats
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable performance charts.  
     * From left to right, the values shown are:
     *
     * - average render frequency (e.g. 60 fps)
     * - exact engine delta time used for last update (e.g. 16.66ms)
     * - average engine execution duration (e.g. 5.00ms)
     * - average render execution duration (e.g. 0.40ms)
     * - average effective play speed (e.g. '1.00x' is 'real-time')
     *
     * Each value is recorded over a fixed sample of past frames (60 frames).
     *
     * A chart shown below each value indicates the variance from the average over the sample.
     * The more stable or fixed the value is the flatter the chart will appear.
     *
     * @property options.showPerformance
     * @type boolean
     * @default false
     */
    
    /**
     * A flag to enable or disable rendering entirely.
     *
     * @property options.enabled
     * @type boolean
     * @default false
     */

    /**
     * A flag to toggle wireframe rendering otherwise solid fill rendering is used.
     *
     * @property options.wireframes
     * @type boolean
     * @default true
     */

    /**
     * A flag to enable or disable sleeping bodies indicators.
     *
     * @property options.showSleeping
     * @type boolean
     * @default true
     */

    /**
     * A flag to enable or disable the debug information overlay.
     *
     * @property options.showDebug
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the collision broadphase debug overlay.
     *
     * @deprecated no longer implemented
     * @property options.showBroadphase
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body bounds debug overlay.
     *
     * @property options.showBounds
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body velocity debug overlay.
     *
     * @property options.showVelocity
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body collisions debug overlay.
     *
     * @property options.showCollisions
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the collision resolver separations debug overlay.
     *
     * @property options.showSeparations
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body axes debug overlay.
     *
     * @property options.showAxes
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body positions debug overlay.
     *
     * @property options.showPositions
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body angle debug overlay.
     *
     * @property options.showAngleIndicator
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body and part ids debug overlay.
     *
     * @property options.showIds
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body vertex numbers debug overlay.
     *
     * @property options.showVertexNumbers
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body convex hulls debug overlay.
     *
     * @property options.showConvexHulls
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body internal edges debug overlay.
     *
     * @property options.showInternalEdges
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the mouse position debug overlay.
     *
     * @property options.showMousePosition
     * @type boolean
     * @default false
     */

})();


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/**
* The `Matter.Contact` module contains methods for creating and manipulating collision contacts.
*
* @class Contact
*/

var Contact = {};

module.exports = Contact;

(function() {

    /**
     * Creates a new contact.
     * @method create
     * @param {vertex} vertex
     * @return {contact} A new contact
     */
    Contact.create = function(vertex) {
        return {
            vertex: vertex,
            normalImpulse: 0,
            tangentImpulse: 0
        };
    };

})();


/***/ }),
/* 18 */
/***/ (function(module, exports, __nested_webpack_require_255897__) {

/**
* The `Matter.Engine` module contains methods for creating and manipulating engines.
* An engine is a controller that manages updating the simulation of the world.
* See `Matter.Runner` for an optional game loop utility.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Engine
*/

var Engine = {};

module.exports = Engine;

var Sleeping = __nested_webpack_require_255897__(7);
var Resolver = __nested_webpack_require_255897__(19);
var Detector = __nested_webpack_require_255897__(14);
var Pairs = __nested_webpack_require_255897__(20);
var Events = __nested_webpack_require_255897__(4);
var Composite = __nested_webpack_require_255897__(5);
var Constraint = __nested_webpack_require_255897__(10);
var Common = __nested_webpack_require_255897__(0);
var Body = __nested_webpack_require_255897__(6);

(function() {

    /**
     * Creates a new engine. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {object} [options]
     * @return {engine} engine
     */
    Engine.create = function(options) {
        options = options || {};

        var defaults = {
            positionIterations: 6,
            velocityIterations: 4,
            constraintIterations: 2,
            enableSleeping: false,
            events: [],
            plugin: {},
            gravity: {
                x: 0,
                y: 1,
                scale: 0.001
            },
            timing: {
                timestamp: 0,
                timeScale: 1,
                lastDelta: 0,
                lastElapsed: 0
            }
        };

        var engine = Common.extend(defaults, options);

        engine.world = options.world || Composite.create({ label: 'World' });
        engine.pairs = options.pairs || Pairs.create();
        engine.detector = options.detector || Detector.create();

        // for temporary back compatibility only
        engine.grid = { buckets: [] };
        engine.world.gravity = engine.gravity;
        engine.broadphase = engine.grid;
        engine.metrics = {};
        
        return engine;
    };

    /**
     * Moves the simulation forward in time by `delta` ms.
     * The `correction` argument is an optional `Number` that specifies the time correction factor to apply to the update.
     * This can help improve the accuracy of the simulation in cases where `delta` is changing between updates.
     * The value of `correction` is defined as `delta / lastDelta`, i.e. the percentage change of `delta` over the last step.
     * Therefore the value is always `1` (no correction) when `delta` constant (or when no correction is desired, which is the default).
     * See the paper on <a href="http://lonesock.net/article/verlet.html">Time Corrected Verlet</a> for more information.
     *
     * Triggers `beforeUpdate` and `afterUpdate` events.
     * Triggers `collisionStart`, `collisionActive` and `collisionEnd` events.
     * @method update
     * @param {engine} engine
     * @param {number} [delta=16.666]
     * @param {number} [correction=1]
     */
    Engine.update = function(engine, delta, correction) {
        var startTime = Common.now();

        delta = delta || 1000 / 60;
        correction = correction || 1;

        var world = engine.world,
            detector = engine.detector,
            pairs = engine.pairs,
            timing = engine.timing,
            timestamp = timing.timestamp,
            i;

        // increment timestamp
        timing.timestamp += delta * timing.timeScale;
        timing.lastDelta = delta * timing.timeScale;

        // create an event object
        var event = {
            timestamp: timing.timestamp
        };

        Events.trigger(engine, 'beforeUpdate', event);

        // get all bodies and all constraints in the world
        var allBodies = Composite.allBodies(world),
            allConstraints = Composite.allConstraints(world);

        // update the detector bodies if they have changed
        if (world.isModified) {
            Detector.setBodies(detector, allBodies);
        }

        // reset all composite modified flags
        if (world.isModified) {
            Composite.setModified(world, false, false, true);
        }

        // update sleeping if enabled
        if (engine.enableSleeping)
            Sleeping.update(allBodies, timing.timeScale);

        // apply gravity to all bodies
        Engine._bodiesApplyGravity(allBodies, engine.gravity);

        // update all body position and rotation by integration
        Engine._bodiesUpdate(allBodies, delta, timing.timeScale, correction, world.bounds);

        // update all constraints (first pass)
        Constraint.preSolveAll(allBodies);
        for (i = 0; i < engine.constraintIterations; i++) {
            Constraint.solveAll(allConstraints, timing.timeScale);
        }
        Constraint.postSolveAll(allBodies);

        // find all collisions
        detector.pairs = engine.pairs;
        var collisions = Detector.collisions(detector);

        // update collision pairs
        Pairs.update(pairs, collisions, timestamp);

        // wake up bodies involved in collisions
        if (engine.enableSleeping)
            Sleeping.afterCollisions(pairs.list, timing.timeScale);

        // trigger collision events
        if (pairs.collisionStart.length > 0)
            Events.trigger(engine, 'collisionStart', { pairs: pairs.collisionStart });

        // iteratively resolve position between collisions
        Resolver.preSolvePosition(pairs.list);
        for (i = 0; i < engine.positionIterations; i++) {
            Resolver.solvePosition(pairs.list, timing.timeScale);
        }
        Resolver.postSolvePosition(allBodies);

        // update all constraints (second pass)
        Constraint.preSolveAll(allBodies);
        for (i = 0; i < engine.constraintIterations; i++) {
            Constraint.solveAll(allConstraints, timing.timeScale);
        }
        Constraint.postSolveAll(allBodies);

        // iteratively resolve velocity between collisions
        Resolver.preSolveVelocity(pairs.list);
        for (i = 0; i < engine.velocityIterations; i++) {
            Resolver.solveVelocity(pairs.list, timing.timeScale);
        }

        // trigger collision events
        if (pairs.collisionActive.length > 0)
            Events.trigger(engine, 'collisionActive', { pairs: pairs.collisionActive });

        if (pairs.collisionEnd.length > 0)
            Events.trigger(engine, 'collisionEnd', { pairs: pairs.collisionEnd });

        // clear force buffers
        Engine._bodiesClearForces(allBodies);

        Events.trigger(engine, 'afterUpdate', event);

        // log the time elapsed computing this update
        engine.timing.lastElapsed = Common.now() - startTime;

        return engine;
    };
    
    /**
     * Merges two engines by keeping the configuration of `engineA` but replacing the world with the one from `engineB`.
     * @method merge
     * @param {engine} engineA
     * @param {engine} engineB
     */
    Engine.merge = function(engineA, engineB) {
        Common.extend(engineA, engineB);
        
        if (engineB.world) {
            engineA.world = engineB.world;

            Engine.clear(engineA);

            var bodies = Composite.allBodies(engineA.world);

            for (var i = 0; i < bodies.length; i++) {
                var body = bodies[i];
                Sleeping.set(body, false);
                body.id = Common.nextId();
            }
        }
    };

    /**
     * Clears the engine pairs and detector.
     * @method clear
     * @param {engine} engine
     */
    Engine.clear = function(engine) {
        Pairs.clear(engine.pairs);
        Detector.clear(engine.detector);
    };

    /**
     * Zeroes the `body.force` and `body.torque` force buffers.
     * @method _bodiesClearForces
     * @private
     * @param {body[]} bodies
     */
    Engine._bodiesClearForces = function(bodies) {
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            // reset force buffers
            body.force.x = 0;
            body.force.y = 0;
            body.torque = 0;
        }
    };

    /**
     * Applys a mass dependant force to all given bodies.
     * @method _bodiesApplyGravity
     * @private
     * @param {body[]} bodies
     * @param {vector} gravity
     */
    Engine._bodiesApplyGravity = function(bodies, gravity) {
        var gravityScale = typeof gravity.scale !== 'undefined' ? gravity.scale : 0.001;

        if ((gravity.x === 0 && gravity.y === 0) || gravityScale === 0) {
            return;
        }
        
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (body.isStatic || body.isSleeping)
                continue;

            // apply gravity
            body.force.y += body.mass * gravity.y * gravityScale;
            body.force.x += body.mass * gravity.x * gravityScale;
        }
    };

    /**
     * Applys `Body.update` to all given `bodies`.
     * @method _bodiesUpdate
     * @private
     * @param {body[]} bodies
     * @param {number} deltaTime 
     * The amount of time elapsed between updates
     * @param {number} timeScale
     * @param {number} correction 
     * The Verlet correction factor (deltaTime / lastDeltaTime)
     * @param {bounds} worldBounds
     */
    Engine._bodiesUpdate = function(bodies, deltaTime, timeScale, correction, worldBounds) {
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (body.isStatic || body.isSleeping)
                continue;

            Body.update(body, deltaTime, timeScale, correction);
        }
    };

    /**
     * A deprecated alias for `Runner.run`, use `Matter.Runner.run(engine)` instead and see `Matter.Runner` for more information.
     * @deprecated use Matter.Runner.run(engine) instead
     * @method run
     * @param {engine} engine
     */

    /**
    * Fired just before an update
    *
    * @event beforeUpdate
    * @param {object} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */

    /**
    * Fired after engine update and all collision events
    *
    * @event afterUpdate
    * @param {object} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */

    /**
    * Fired after engine update, provides a list of all pairs that have started to collide in the current tick (if any)
    *
    * @event collisionStart
    * @param {object} event An event object
    * @param {pair[]} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */

    /**
    * Fired after engine update, provides a list of all pairs that are colliding in the current tick (if any)
    *
    * @event collisionActive
    * @param {object} event An event object
    * @param {pair[]} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */

    /**
    * Fired after engine update, provides a list of all pairs that have ended collision in the current tick (if any)
    *
    * @event collisionEnd
    * @param {object} event An event object
    * @param {pair[]} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * An integer `Number` that specifies the number of position iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     *
     * @property positionIterations
     * @type number
     * @default 6
     */

    /**
     * An integer `Number` that specifies the number of velocity iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     *
     * @property velocityIterations
     * @type number
     * @default 4
     */

    /**
     * An integer `Number` that specifies the number of constraint iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     * The default value of `2` is usually very adequate.
     *
     * @property constraintIterations
     * @type number
     * @default 2
     */

    /**
     * A flag that specifies whether the engine should allow sleeping via the `Matter.Sleeping` module.
     * Sleeping can improve stability and performance, but often at the expense of accuracy.
     *
     * @property enableSleeping
     * @type boolean
     * @default false
     */

    /**
     * An `Object` containing properties regarding the timing systems of the engine. 
     *
     * @property timing
     * @type object
     */

    /**
     * A `Number` that specifies the global scaling factor of time for all bodies.
     * A value of `0` freezes the simulation.
     * A value of `0.1` gives a slow-motion effect.
     * A value of `1.2` gives a speed-up effect.
     *
     * @property timing.timeScale
     * @type number
     * @default 1
     */

    /**
     * A `Number` that specifies the current simulation-time in milliseconds starting from `0`. 
     * It is incremented on every `Engine.update` by the given `delta` argument. 
     *
     * @property timing.timestamp
     * @type number
     * @default 0
     */

    /**
     * A `Number` that represents the total execution time elapsed during the last `Engine.update` in milliseconds.
     * It is updated by timing from the start of the last `Engine.update` call until it ends.
     *
     * This value will also include the total execution time of all event handlers directly or indirectly triggered by the engine update.
     *
     * @property timing.lastElapsed
     * @type number
     * @default 0
     */

    /**
     * A `Number` that represents the `delta` value used in the last engine update.
     *
     * @property timing.lastDelta
     * @type number
     * @default 0
     */

    /**
     * A `Matter.Detector` instance.
     *
     * @property detector
     * @type detector
     * @default a Matter.Detector instance
     */

    /**
     * A `Matter.Grid` instance.
     *
     * @deprecated replaced by `engine.detector`
     * @property grid
     * @type grid
     * @default a Matter.Grid instance
     */

    /**
     * Replaced by and now alias for `engine.grid`.
     *
     * @deprecated replaced by `engine.detector`
     * @property broadphase
     * @type grid
     * @default a Matter.Grid instance
     */

    /**
     * The root `Matter.Composite` instance that will contain all bodies, constraints and other composites to be simulated by this engine.
     *
     * @property world
     * @type composite
     * @default a Matter.Composite instance
     */

    /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */

    /**
     * The gravity to apply on all bodies in `engine.world`.
     *
     * @property gravity
     * @type object
     */

    /**
     * The gravity x component.
     *
     * @property gravity.x
     * @type object
     * @default 0
     */

    /**
     * The gravity y component.
     *
     * @property gravity.y
     * @type object
     * @default 1
     */

    /**
     * The gravity scale factor.
     *
     * @property gravity.scale
     * @type object
     * @default 0.001
     */

})();


/***/ }),
/* 19 */
/***/ (function(module, exports, __nested_webpack_require_272322__) {

/**
* The `Matter.Resolver` module contains methods for resolving collision pairs.
*
* @class Resolver
*/

var Resolver = {};

module.exports = Resolver;

var Vertices = __nested_webpack_require_272322__(3);
var Bounds = __nested_webpack_require_272322__(1);

(function() {

    Resolver._restingThresh = 4;
    Resolver._restingThreshTangent = 6;
    Resolver._positionDampen = 0.9;
    Resolver._positionWarming = 0.8;
    Resolver._frictionNormalMultiplier = 5;

    /**
     * Prepare pairs for position solving.
     * @method preSolvePosition
     * @param {pair[]} pairs
     */
    Resolver.preSolvePosition = function(pairs) {
        var i,
            pair,
            activeCount,
            pairsLength = pairs.length;

        // find total contacts on each body
        for (i = 0; i < pairsLength; i++) {
            pair = pairs[i];
            
            if (!pair.isActive)
                continue;
            
            activeCount = pair.activeContacts.length;
            pair.collision.parentA.totalContacts += activeCount;
            pair.collision.parentB.totalContacts += activeCount;
        }
    };

    /**
     * Find a solution for pair positions.
     * @method solvePosition
     * @param {pair[]} pairs
     * @param {number} timeScale
     */
    Resolver.solvePosition = function(pairs, timeScale) {
        var i,
            pair,
            collision,
            bodyA,
            bodyB,
            normal,
            contactShare,
            positionImpulse,
            positionDampen = Resolver._positionDampen,
            pairsLength = pairs.length;

        // find impulses required to resolve penetration
        for (i = 0; i < pairsLength; i++) {
            pair = pairs[i];
            
            if (!pair.isActive || pair.isSensor)
                continue;

            collision = pair.collision;
            bodyA = collision.parentA;
            bodyB = collision.parentB;
            normal = collision.normal;

            // get current separation between body edges involved in collision
            pair.separation = 
                normal.x * (bodyB.positionImpulse.x + collision.penetration.x - bodyA.positionImpulse.x)
                + normal.y * (bodyB.positionImpulse.y + collision.penetration.y - bodyA.positionImpulse.y);
        }
        
        for (i = 0; i < pairsLength; i++) {
            pair = pairs[i];

            if (!pair.isActive || pair.isSensor)
                continue;
            
            collision = pair.collision;
            bodyA = collision.parentA;
            bodyB = collision.parentB;
            normal = collision.normal;
            positionImpulse = (pair.separation - pair.slop) * timeScale;

            if (bodyA.isStatic || bodyB.isStatic)
                positionImpulse *= 2;
            
            if (!(bodyA.isStatic || bodyA.isSleeping)) {
                contactShare = positionDampen / bodyA.totalContacts;
                bodyA.positionImpulse.x += normal.x * positionImpulse * contactShare;
                bodyA.positionImpulse.y += normal.y * positionImpulse * contactShare;
            }

            if (!(bodyB.isStatic || bodyB.isSleeping)) {
                contactShare = positionDampen / bodyB.totalContacts;
                bodyB.positionImpulse.x -= normal.x * positionImpulse * contactShare;
                bodyB.positionImpulse.y -= normal.y * positionImpulse * contactShare;
            }
        }
    };

    /**
     * Apply position resolution.
     * @method postSolvePosition
     * @param {body[]} bodies
     */
    Resolver.postSolvePosition = function(bodies) {
        var positionWarming = Resolver._positionWarming,
            bodiesLength = bodies.length,
            verticesTranslate = Vertices.translate,
            boundsUpdate = Bounds.update;

        for (var i = 0; i < bodiesLength; i++) {
            var body = bodies[i],
                positionImpulse = body.positionImpulse,
                positionImpulseX = positionImpulse.x,
                positionImpulseY = positionImpulse.y,
                velocity = body.velocity;

            // reset contact count
            body.totalContacts = 0;

            if (positionImpulseX !== 0 || positionImpulseY !== 0) {
                // update body geometry
                for (var j = 0; j < body.parts.length; j++) {
                    var part = body.parts[j];
                    verticesTranslate(part.vertices, positionImpulse);
                    boundsUpdate(part.bounds, part.vertices, velocity);
                    part.position.x += positionImpulseX;
                    part.position.y += positionImpulseY;
                }

                // move the body without changing velocity
                body.positionPrev.x += positionImpulseX;
                body.positionPrev.y += positionImpulseY;

                if (positionImpulseX * velocity.x + positionImpulseY * velocity.y < 0) {
                    // reset cached impulse if the body has velocity along it
                    positionImpulse.x = 0;
                    positionImpulse.y = 0;
                } else {
                    // warm the next iteration
                    positionImpulse.x *= positionWarming;
                    positionImpulse.y *= positionWarming;
                }
            }
        }
    };

    /**
     * Prepare pairs for velocity solving.
     * @method preSolveVelocity
     * @param {pair[]} pairs
     */
    Resolver.preSolveVelocity = function(pairs) {
        var pairsLength = pairs.length,
            i,
            j;
        
        for (i = 0; i < pairsLength; i++) {
            var pair = pairs[i];
            
            if (!pair.isActive || pair.isSensor)
                continue;
            
            var contacts = pair.activeContacts,
                contactsLength = contacts.length,
                collision = pair.collision,
                bodyA = collision.parentA,
                bodyB = collision.parentB,
                normal = collision.normal,
                tangent = collision.tangent;
    
            // resolve each contact
            for (j = 0; j < contactsLength; j++) {
                var contact = contacts[j],
                    contactVertex = contact.vertex,
                    normalImpulse = contact.normalImpulse,
                    tangentImpulse = contact.tangentImpulse;
    
                if (normalImpulse !== 0 || tangentImpulse !== 0) {
                    // total impulse from contact
                    var impulseX = normal.x * normalImpulse + tangent.x * tangentImpulse,
                        impulseY = normal.y * normalImpulse + tangent.y * tangentImpulse;
                    
                    // apply impulse from contact
                    if (!(bodyA.isStatic || bodyA.isSleeping)) {
                        bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
                        bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
                        bodyA.anglePrev += bodyA.inverseInertia * (
                            (contactVertex.x - bodyA.position.x) * impulseY
                            - (contactVertex.y - bodyA.position.y) * impulseX
                        );
                    }
    
                    if (!(bodyB.isStatic || bodyB.isSleeping)) {
                        bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
                        bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
                        bodyB.anglePrev -= bodyB.inverseInertia * (
                            (contactVertex.x - bodyB.position.x) * impulseY 
                            - (contactVertex.y - bodyB.position.y) * impulseX
                        );
                    }
                }
            }
        }
    };

    /**
     * Find a solution for pair velocities.
     * @method solveVelocity
     * @param {pair[]} pairs
     * @param {number} timeScale
     */
    Resolver.solveVelocity = function(pairs, timeScale) {
        var timeScaleSquared = timeScale * timeScale,
            restingThresh = Resolver._restingThresh * timeScaleSquared,
            frictionNormalMultiplier = Resolver._frictionNormalMultiplier,
            restingThreshTangent = Resolver._restingThreshTangent * timeScaleSquared,
            NumberMaxValue = Number.MAX_VALUE,
            pairsLength = pairs.length,
            tangentImpulse,
            maxFriction,
            i,
            j;

        for (i = 0; i < pairsLength; i++) {
            var pair = pairs[i];
            
            if (!pair.isActive || pair.isSensor)
                continue;
            
            var collision = pair.collision,
                bodyA = collision.parentA,
                bodyB = collision.parentB,
                bodyAVelocity = bodyA.velocity,
                bodyBVelocity = bodyB.velocity,
                normalX = collision.normal.x,
                normalY = collision.normal.y,
                tangentX = collision.tangent.x,
                tangentY = collision.tangent.y,
                contacts = pair.activeContacts,
                contactsLength = contacts.length,
                contactShare = 1 / contactsLength,
                inverseMassTotal = bodyA.inverseMass + bodyB.inverseMass,
                friction = pair.friction * pair.frictionStatic * frictionNormalMultiplier * timeScaleSquared;

            // update body velocities
            bodyAVelocity.x = bodyA.position.x - bodyA.positionPrev.x;
            bodyAVelocity.y = bodyA.position.y - bodyA.positionPrev.y;
            bodyBVelocity.x = bodyB.position.x - bodyB.positionPrev.x;
            bodyBVelocity.y = bodyB.position.y - bodyB.positionPrev.y;
            bodyA.angularVelocity = bodyA.angle - bodyA.anglePrev;
            bodyB.angularVelocity = bodyB.angle - bodyB.anglePrev;

            // resolve each contact
            for (j = 0; j < contactsLength; j++) {
                var contact = contacts[j],
                    contactVertex = contact.vertex;

                var offsetAX = contactVertex.x - bodyA.position.x,
                    offsetAY = contactVertex.y - bodyA.position.y,
                    offsetBX = contactVertex.x - bodyB.position.x,
                    offsetBY = contactVertex.y - bodyB.position.y;
 
                var velocityPointAX = bodyAVelocity.x - offsetAY * bodyA.angularVelocity,
                    velocityPointAY = bodyAVelocity.y + offsetAX * bodyA.angularVelocity,
                    velocityPointBX = bodyBVelocity.x - offsetBY * bodyB.angularVelocity,
                    velocityPointBY = bodyBVelocity.y + offsetBX * bodyB.angularVelocity;

                var relativeVelocityX = velocityPointAX - velocityPointBX,
                    relativeVelocityY = velocityPointAY - velocityPointBY;

                var normalVelocity = normalX * relativeVelocityX + normalY * relativeVelocityY,
                    tangentVelocity = tangentX * relativeVelocityX + tangentY * relativeVelocityY;

                // coulomb friction
                var normalOverlap = pair.separation + normalVelocity;
                var normalForce = Math.min(normalOverlap, 1);
                normalForce = normalOverlap < 0 ? 0 : normalForce;
                
                var frictionLimit = normalForce * friction;

                if (tangentVelocity > frictionLimit || -tangentVelocity > frictionLimit) {
                    maxFriction = tangentVelocity > 0 ? tangentVelocity : -tangentVelocity;
                    tangentImpulse = pair.friction * (tangentVelocity > 0 ? 1 : -1) * timeScaleSquared;
                    
                    if (tangentImpulse < -maxFriction) {
                        tangentImpulse = -maxFriction;
                    } else if (tangentImpulse > maxFriction) {
                        tangentImpulse = maxFriction;
                    }
                } else {
                    tangentImpulse = tangentVelocity;
                    maxFriction = NumberMaxValue;
                }

                // account for mass, inertia and contact offset
                var oAcN = offsetAX * normalY - offsetAY * normalX,
                    oBcN = offsetBX * normalY - offsetBY * normalX,
                    share = contactShare / (inverseMassTotal + bodyA.inverseInertia * oAcN * oAcN + bodyB.inverseInertia * oBcN * oBcN);

                // raw impulses
                var normalImpulse = (1 + pair.restitution) * normalVelocity * share;
                tangentImpulse *= share;

                // handle high velocity and resting collisions separately
                if (normalVelocity * normalVelocity > restingThresh && normalVelocity < 0) {
                    // high normal velocity so clear cached contact normal impulse
                    contact.normalImpulse = 0;
                } else {
                    // solve resting collision constraints using Erin Catto's method (GDC08)
                    // impulse constraint tends to 0
                    var contactNormalImpulse = contact.normalImpulse;
                    contact.normalImpulse += normalImpulse;
                    contact.normalImpulse = Math.min(contact.normalImpulse, 0);
                    normalImpulse = contact.normalImpulse - contactNormalImpulse;
                }

                // handle high velocity and resting collisions separately
                if (tangentVelocity * tangentVelocity > restingThreshTangent) {
                    // high tangent velocity so clear cached contact tangent impulse
                    contact.tangentImpulse = 0;
                } else {
                    // solve resting collision constraints using Erin Catto's method (GDC08)
                    // tangent impulse tends to -tangentSpeed or +tangentSpeed
                    var contactTangentImpulse = contact.tangentImpulse;
                    contact.tangentImpulse += tangentImpulse;
                    if (contact.tangentImpulse < -maxFriction) contact.tangentImpulse = -maxFriction;
                    if (contact.tangentImpulse > maxFriction) contact.tangentImpulse = maxFriction;
                    tangentImpulse = contact.tangentImpulse - contactTangentImpulse;
                }

                // total impulse from contact
                var impulseX = normalX * normalImpulse + tangentX * tangentImpulse,
                    impulseY = normalY * normalImpulse + tangentY * tangentImpulse;
                
                // apply impulse from contact
                if (!(bodyA.isStatic || bodyA.isSleeping)) {
                    bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
                    bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
                    bodyA.anglePrev += (offsetAX * impulseY - offsetAY * impulseX) * bodyA.inverseInertia;
                }

                if (!(bodyB.isStatic || bodyB.isSleeping)) {
                    bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
                    bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
                    bodyB.anglePrev -= (offsetBX * impulseY - offsetBY * impulseX) * bodyB.inverseInertia;
                }
            }
        }
    };

})();


/***/ }),
/* 20 */
/***/ (function(module, exports, __nested_webpack_require_287595__) {

/**
* The `Matter.Pairs` module contains methods for creating and manipulating collision pair sets.
*
* @class Pairs
*/

var Pairs = {};

module.exports = Pairs;

var Pair = __nested_webpack_require_287595__(9);
var Common = __nested_webpack_require_287595__(0);

(function() {

    /**
     * Creates a new pairs structure.
     * @method create
     * @param {object} options
     * @return {pairs} A new pairs structure
     */
    Pairs.create = function(options) {
        return Common.extend({ 
            table: {},
            list: [],
            collisionStart: [],
            collisionActive: [],
            collisionEnd: []
        }, options);
    };

    /**
     * Updates pairs given a list of collisions.
     * @method update
     * @param {object} pairs
     * @param {collision[]} collisions
     * @param {number} timestamp
     */
    Pairs.update = function(pairs, collisions, timestamp) {
        var pairsList = pairs.list,
            pairsListLength = pairsList.length,
            pairsTable = pairs.table,
            collisionsLength = collisions.length,
            collisionStart = pairs.collisionStart,
            collisionEnd = pairs.collisionEnd,
            collisionActive = pairs.collisionActive,
            collision,
            pairIndex,
            pair,
            i;

        // clear collision state arrays, but maintain old reference
        collisionStart.length = 0;
        collisionEnd.length = 0;
        collisionActive.length = 0;

        for (i = 0; i < pairsListLength; i++) {
            pairsList[i].confirmedActive = false;
        }

        for (i = 0; i < collisionsLength; i++) {
            collision = collisions[i];
            pair = collision.pair;

            if (pair) {
                // pair already exists (but may or may not be active)
                if (pair.isActive) {
                    // pair exists and is active
                    collisionActive.push(pair);
                } else {
                    // pair exists but was inactive, so a collision has just started again
                    collisionStart.push(pair);
                }

                // update the pair
                Pair.update(pair, collision, timestamp);
                pair.confirmedActive = true;
            } else {
                // pair did not exist, create a new pair
                pair = Pair.create(collision, timestamp);
                pairsTable[pair.id] = pair;

                // push the new pair
                collisionStart.push(pair);
                pairsList.push(pair);
            }
        }

        // find pairs that are no longer active
        var removePairIndex = [];
        pairsListLength = pairsList.length;

        for (i = 0; i < pairsListLength; i++) {
            pair = pairsList[i];
            
            if (!pair.confirmedActive) {
                Pair.setActive(pair, false, timestamp);
                collisionEnd.push(pair);

                if (!pair.collision.bodyA.isSleeping && !pair.collision.bodyB.isSleeping) {
                    removePairIndex.push(i);
                }
            }
        }

        // remove inactive pairs
        for (i = 0; i < removePairIndex.length; i++) {
            pairIndex = removePairIndex[i] - i;
            pair = pairsList[pairIndex];
            pairsList.splice(pairIndex, 1);
            delete pairsTable[pair.id];
        }
    };

    /**
     * Clears the given pairs structure.
     * @method clear
     * @param {pairs} pairs
     * @return {pairs} pairs
     */
    Pairs.clear = function(pairs) {
        pairs.table = {};
        pairs.list.length = 0;
        pairs.collisionStart.length = 0;
        pairs.collisionActive.length = 0;
        pairs.collisionEnd.length = 0;
        return pairs;
    };

})();


/***/ }),
/* 21 */
/***/ (function(module, exports, __nested_webpack_require_291448__) {

var Matter = module.exports = __nested_webpack_require_291448__(22);

Matter.Axes = __nested_webpack_require_291448__(11);
Matter.Bodies = __nested_webpack_require_291448__(12);
Matter.Body = __nested_webpack_require_291448__(6);
Matter.Bounds = __nested_webpack_require_291448__(1);
Matter.Collision = __nested_webpack_require_291448__(8);
Matter.Common = __nested_webpack_require_291448__(0);
Matter.Composite = __nested_webpack_require_291448__(5);
Matter.Composites = __nested_webpack_require_291448__(23);
Matter.Constraint = __nested_webpack_require_291448__(10);
Matter.Contact = __nested_webpack_require_291448__(17);
Matter.Detector = __nested_webpack_require_291448__(14);
Matter.Engine = __nested_webpack_require_291448__(18);
Matter.Events = __nested_webpack_require_291448__(4);
Matter.Grid = __nested_webpack_require_291448__(24);
Matter.Mouse = __nested_webpack_require_291448__(13);
Matter.MouseConstraint = __nested_webpack_require_291448__(25);
Matter.Pair = __nested_webpack_require_291448__(9);
Matter.Pairs = __nested_webpack_require_291448__(20);
Matter.Plugin = __nested_webpack_require_291448__(15);
Matter.Query = __nested_webpack_require_291448__(26);
Matter.Render = __nested_webpack_require_291448__(16);
Matter.Resolver = __nested_webpack_require_291448__(19);
Matter.Runner = __nested_webpack_require_291448__(27);
Matter.SAT = __nested_webpack_require_291448__(28);
Matter.Sleeping = __nested_webpack_require_291448__(7);
Matter.Svg = __nested_webpack_require_291448__(29);
Matter.Vector = __nested_webpack_require_291448__(2);
Matter.Vertices = __nested_webpack_require_291448__(3);
Matter.World = __nested_webpack_require_291448__(30);

// temporary back compatibility
Matter.Engine.run = Matter.Runner.run;
Matter.Common.deprecated(Matter.Engine, 'run', 'Engine.run ➤ use Matter.Runner.run(engine) instead');


/***/ }),
/* 22 */
/***/ (function(module, exports, __nested_webpack_require_292984__) {

/**
* The `Matter` module is the top level namespace. It also includes a function for installing plugins on top of the library.
*
* @class Matter
*/

var Matter = {};

module.exports = Matter;

var Plugin = __nested_webpack_require_292984__(15);
var Common = __nested_webpack_require_292984__(0);

(function() {

    /**
     * The library name.
     * @property name
     * @readOnly
     * @type {String}
     */
    Matter.name = 'matter-js';

    /**
     * The library version.
     * @property version
     * @readOnly
     * @type {String}
     */
    Matter.version =   true ? "0.18.0" : 0;

    /**
     * A list of plugin dependencies to be installed. These are normally set and installed through `Matter.use`.
     * Alternatively you may set `Matter.uses` manually and install them by calling `Plugin.use(Matter)`.
     * @property uses
     * @type {Array}
     */
    Matter.uses = [];

    /**
     * The plugins that have been installed through `Matter.Plugin.install`. Read only.
     * @property used
     * @readOnly
     * @type {Array}
     */
    Matter.used = [];

    /**
     * Installs the given plugins on the `Matter` namespace.
     * This is a short-hand for `Plugin.use`, see it for more information.
     * Call this function once at the start of your code, with all of the plugins you wish to install as arguments.
     * Avoid calling this function multiple times unless you intend to manually control installation order.
     * @method use
     * @param ...plugin {Function} The plugin(s) to install on `base` (multi-argument).
     */
    Matter.use = function() {
        Plugin.use(Matter, Array.prototype.slice.call(arguments));
    };

    /**
     * Chains a function to excute before the original function on the given `path` relative to `Matter`.
     * See also docs for `Common.chain`.
     * @method before
     * @param {string} path The path relative to `Matter`
     * @param {function} func The function to chain before the original
     * @return {function} The chained function that replaced the original
     */
    Matter.before = function(path, func) {
        path = path.replace(/^Matter./, '');
        return Common.chainPathBefore(Matter, path, func);
    };

    /**
     * Chains a function to excute after the original function on the given `path` relative to `Matter`.
     * See also docs for `Common.chain`.
     * @method after
     * @param {string} path The path relative to `Matter`
     * @param {function} func The function to chain after the original
     * @return {function} The chained function that replaced the original
     */
    Matter.after = function(path, func) {
        path = path.replace(/^Matter./, '');
        return Common.chainPathAfter(Matter, path, func);
    };

})();


/***/ }),
/* 23 */
/***/ (function(module, exports, __nested_webpack_require_295892__) {

/**
* The `Matter.Composites` module contains factory methods for creating composite bodies
* with commonly used configurations (such as stacks and chains).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Composites
*/

var Composites = {};

module.exports = Composites;

var Composite = __nested_webpack_require_295892__(5);
var Constraint = __nested_webpack_require_295892__(10);
var Common = __nested_webpack_require_295892__(0);
var Body = __nested_webpack_require_295892__(6);
var Bodies = __nested_webpack_require_295892__(12);
var deprecated = Common.deprecated;

(function() {

    /**
     * Create a new composite containing bodies created in the callback in a grid arrangement.
     * This function uses the body's bounds to prevent overlaps.
     * @method stack
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {function} callback
     * @return {composite} A new composite containing objects created in the callback
     */
    Composites.stack = function(xx, yy, columns, rows, columnGap, rowGap, callback) {
        var stack = Composite.create({ label: 'Stack' }),
            x = xx,
            y = yy,
            lastBody,
            i = 0;

        for (var row = 0; row < rows; row++) {
            var maxHeight = 0;
            
            for (var column = 0; column < columns; column++) {
                var body = callback(x, y, column, row, lastBody, i);
                    
                if (body) {
                    var bodyHeight = body.bounds.max.y - body.bounds.min.y,
                        bodyWidth = body.bounds.max.x - body.bounds.min.x; 

                    if (bodyHeight > maxHeight)
                        maxHeight = bodyHeight;
                    
                    Body.translate(body, { x: bodyWidth * 0.5, y: bodyHeight * 0.5 });

                    x = body.bounds.max.x + columnGap;

                    Composite.addBody(stack, body);
                    
                    lastBody = body;
                    i += 1;
                } else {
                    x += columnGap;
                }
            }
            
            y += maxHeight + rowGap;
            x = xx;
        }

        return stack;
    };
    
    /**
     * Chains all bodies in the given composite together using constraints.
     * @method chain
     * @param {composite} composite
     * @param {number} xOffsetA
     * @param {number} yOffsetA
     * @param {number} xOffsetB
     * @param {number} yOffsetB
     * @param {object} options
     * @return {composite} A new composite containing objects chained together with constraints
     */
    Composites.chain = function(composite, xOffsetA, yOffsetA, xOffsetB, yOffsetB, options) {
        var bodies = composite.bodies;
        
        for (var i = 1; i < bodies.length; i++) {
            var bodyA = bodies[i - 1],
                bodyB = bodies[i],
                bodyAHeight = bodyA.bounds.max.y - bodyA.bounds.min.y,
                bodyAWidth = bodyA.bounds.max.x - bodyA.bounds.min.x, 
                bodyBHeight = bodyB.bounds.max.y - bodyB.bounds.min.y,
                bodyBWidth = bodyB.bounds.max.x - bodyB.bounds.min.x;
        
            var defaults = {
                bodyA: bodyA,
                pointA: { x: bodyAWidth * xOffsetA, y: bodyAHeight * yOffsetA },
                bodyB: bodyB,
                pointB: { x: bodyBWidth * xOffsetB, y: bodyBHeight * yOffsetB }
            };
            
            var constraint = Common.extend(defaults, options);
        
            Composite.addConstraint(composite, Constraint.create(constraint));
        }

        composite.label += ' Chain';
        
        return composite;
    };

    /**
     * Connects bodies in the composite with constraints in a grid pattern, with optional cross braces.
     * @method mesh
     * @param {composite} composite
     * @param {number} columns
     * @param {number} rows
     * @param {boolean} crossBrace
     * @param {object} options
     * @return {composite} The composite containing objects meshed together with constraints
     */
    Composites.mesh = function(composite, columns, rows, crossBrace, options) {
        var bodies = composite.bodies,
            row,
            col,
            bodyA,
            bodyB,
            bodyC;
        
        for (row = 0; row < rows; row++) {
            for (col = 1; col < columns; col++) {
                bodyA = bodies[(col - 1) + (row * columns)];
                bodyB = bodies[col + (row * columns)];
                Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyA, bodyB: bodyB }, options)));
            }

            if (row > 0) {
                for (col = 0; col < columns; col++) {
                    bodyA = bodies[col + ((row - 1) * columns)];
                    bodyB = bodies[col + (row * columns)];
                    Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyA, bodyB: bodyB }, options)));

                    if (crossBrace && col > 0) {
                        bodyC = bodies[(col - 1) + ((row - 1) * columns)];
                        Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB: bodyB }, options)));
                    }

                    if (crossBrace && col < columns - 1) {
                        bodyC = bodies[(col + 1) + ((row - 1) * columns)];
                        Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB: bodyB }, options)));
                    }
                }
            }
        }

        composite.label += ' Mesh';
        
        return composite;
    };
    
    /**
     * Create a new composite containing bodies created in the callback in a pyramid arrangement.
     * This function uses the body's bounds to prevent overlaps.
     * @method pyramid
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {function} callback
     * @return {composite} A new composite containing objects created in the callback
     */
    Composites.pyramid = function(xx, yy, columns, rows, columnGap, rowGap, callback) {
        return Composites.stack(xx, yy, columns, rows, columnGap, rowGap, function(x, y, column, row, lastBody, i) {
            var actualRows = Math.min(rows, Math.ceil(columns / 2)),
                lastBodyWidth = lastBody ? lastBody.bounds.max.x - lastBody.bounds.min.x : 0;
            
            if (row > actualRows)
                return;
            
            // reverse row order
            row = actualRows - row;
            
            var start = row,
                end = columns - 1 - row;

            if (column < start || column > end)
                return;
            
            // retroactively fix the first body's position, since width was unknown
            if (i === 1) {
                Body.translate(lastBody, { x: (column + (columns % 2 === 1 ? 1 : -1)) * lastBodyWidth, y: 0 });
            }

            var xOffset = lastBody ? column * lastBodyWidth : 0;
            
            return callback(xx + xOffset + column * columnGap, y, column, row, lastBody, i);
        });
    };

    /**
     * This has now moved to the [newtonsCradle example](https://github.com/liabru/matter-js/blob/master/examples/newtonsCradle.js), follow that instead as this function is deprecated here.
     * @deprecated moved to newtonsCradle example
     * @method newtonsCradle
     * @param {number} xx
     * @param {number} yy
     * @param {number} number
     * @param {number} size
     * @param {number} length
     * @return {composite} A new composite newtonsCradle body
     */
    Composites.newtonsCradle = function(xx, yy, number, size, length) {
        var newtonsCradle = Composite.create({ label: 'Newtons Cradle' });

        for (var i = 0; i < number; i++) {
            var separation = 1.9,
                circle = Bodies.circle(xx + i * (size * separation), yy + length, size, 
                    { inertia: Infinity, restitution: 1, friction: 0, frictionAir: 0.0001, slop: 1 }),
                constraint = Constraint.create({ pointA: { x: xx + i * (size * separation), y: yy }, bodyB: circle });

            Composite.addBody(newtonsCradle, circle);
            Composite.addConstraint(newtonsCradle, constraint);
        }

        return newtonsCradle;
    };

    deprecated(Composites, 'newtonsCradle', 'Composites.newtonsCradle ➤ moved to newtonsCradle example');
    
    /**
     * This has now moved to the [car example](https://github.com/liabru/matter-js/blob/master/examples/car.js), follow that instead as this function is deprecated here.
     * @deprecated moved to car example
     * @method car
     * @param {number} xx
     * @param {number} yy
     * @param {number} width
     * @param {number} height
     * @param {number} wheelSize
     * @return {composite} A new composite car body
     */
    Composites.car = function(xx, yy, width, height, wheelSize) {
        var group = Body.nextGroup(true),
            wheelBase = 20,
            wheelAOffset = -width * 0.5 + wheelBase,
            wheelBOffset = width * 0.5 - wheelBase,
            wheelYOffset = 0;
    
        var car = Composite.create({ label: 'Car' }),
            body = Bodies.rectangle(xx, yy, width, height, { 
                collisionFilter: {
                    group: group
                },
                chamfer: {
                    radius: height * 0.5
                },
                density: 0.0002
            });
    
        var wheelA = Bodies.circle(xx + wheelAOffset, yy + wheelYOffset, wheelSize, { 
            collisionFilter: {
                group: group
            },
            friction: 0.8
        });
                    
        var wheelB = Bodies.circle(xx + wheelBOffset, yy + wheelYOffset, wheelSize, { 
            collisionFilter: {
                group: group
            },
            friction: 0.8
        });
                    
        var axelA = Constraint.create({
            bodyB: body,
            pointB: { x: wheelAOffset, y: wheelYOffset },
            bodyA: wheelA,
            stiffness: 1,
            length: 0
        });
                        
        var axelB = Constraint.create({
            bodyB: body,
            pointB: { x: wheelBOffset, y: wheelYOffset },
            bodyA: wheelB,
            stiffness: 1,
            length: 0
        });
        
        Composite.addBody(car, body);
        Composite.addBody(car, wheelA);
        Composite.addBody(car, wheelB);
        Composite.addConstraint(car, axelA);
        Composite.addConstraint(car, axelB);

        return car;
    };

    deprecated(Composites, 'car', 'Composites.car ➤ moved to car example');

    /**
     * This has now moved to the [softBody example](https://github.com/liabru/matter-js/blob/master/examples/softBody.js)
     * and the [cloth example](https://github.com/liabru/matter-js/blob/master/examples/cloth.js), follow those instead as this function is deprecated here.
     * @deprecated moved to softBody and cloth examples
     * @method softBody
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {boolean} crossBrace
     * @param {number} particleRadius
     * @param {} particleOptions
     * @param {} constraintOptions
     * @return {composite} A new composite softBody
     */
    Composites.softBody = function(xx, yy, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions) {
        particleOptions = Common.extend({ inertia: Infinity }, particleOptions);
        constraintOptions = Common.extend({ stiffness: 0.2, render: { type: 'line', anchors: false } }, constraintOptions);

        var softBody = Composites.stack(xx, yy, columns, rows, columnGap, rowGap, function(x, y) {
            return Bodies.circle(x, y, particleRadius, particleOptions);
        });

        Composites.mesh(softBody, columns, rows, crossBrace, constraintOptions);

        softBody.label = 'Soft Body';

        return softBody;
    };

    deprecated(Composites, 'softBody', 'Composites.softBody ➤ moved to softBody and cloth examples');
})();


/***/ }),
/* 24 */
/***/ (function(module, exports, __nested_webpack_require_308502__) {

/**
* This module has now been replaced by `Matter.Detector`.
*
* All usage should be migrated to `Matter.Detector` or another alternative.
* For back-compatibility purposes this module will remain for a short term and then later removed in a future release.
*
* The `Matter.Grid` module contains methods for creating and manipulating collision broadphase grid structures.
*
* @class Grid
* @deprecated
*/

var Grid = {};

module.exports = Grid;

var Pair = __nested_webpack_require_308502__(9);
var Common = __nested_webpack_require_308502__(0);
var deprecated = Common.deprecated;

(function() {

    /**
     * Creates a new grid.
     * @deprecated replaced by Matter.Detector
     * @method create
     * @param {} options
     * @return {grid} A new grid
     */
    Grid.create = function(options) {
        var defaults = {
            buckets: {},
            pairs: {},
            pairsList: [],
            bucketWidth: 48,
            bucketHeight: 48
        };

        return Common.extend(defaults, options);
    };

    /**
     * The width of a single grid bucket.
     *
     * @property bucketWidth
     * @type number
     * @default 48
     */

    /**
     * The height of a single grid bucket.
     *
     * @property bucketHeight
     * @type number
     * @default 48
     */

    /**
     * Updates the grid.
     * @deprecated replaced by Matter.Detector
     * @method update
     * @param {grid} grid
     * @param {body[]} bodies
     * @param {engine} engine
     * @param {boolean} forceUpdate
     */
    Grid.update = function(grid, bodies, engine, forceUpdate) {
        var i, col, row,
            world = engine.world,
            buckets = grid.buckets,
            bucket,
            bucketId,
            gridChanged = false;

        for (i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (body.isSleeping && !forceUpdate)
                continue;

            // temporary back compatibility bounds check
            if (world.bounds && (body.bounds.max.x < world.bounds.min.x || body.bounds.min.x > world.bounds.max.x
                || body.bounds.max.y < world.bounds.min.y || body.bounds.min.y > world.bounds.max.y))
                continue;

            var newRegion = Grid._getRegion(grid, body);

            // if the body has changed grid region
            if (!body.region || newRegion.id !== body.region.id || forceUpdate) {

                if (!body.region || forceUpdate)
                    body.region = newRegion;

                var union = Grid._regionUnion(newRegion, body.region);

                // update grid buckets affected by region change
                // iterate over the union of both regions
                for (col = union.startCol; col <= union.endCol; col++) {
                    for (row = union.startRow; row <= union.endRow; row++) {
                        bucketId = Grid._getBucketId(col, row);
                        bucket = buckets[bucketId];

                        var isInsideNewRegion = (col >= newRegion.startCol && col <= newRegion.endCol
                                                && row >= newRegion.startRow && row <= newRegion.endRow);

                        var isInsideOldRegion = (col >= body.region.startCol && col <= body.region.endCol
                                                && row >= body.region.startRow && row <= body.region.endRow);

                        // remove from old region buckets
                        if (!isInsideNewRegion && isInsideOldRegion) {
                            if (isInsideOldRegion) {
                                if (bucket)
                                    Grid._bucketRemoveBody(grid, bucket, body);
                            }
                        }

                        // add to new region buckets
                        if (body.region === newRegion || (isInsideNewRegion && !isInsideOldRegion) || forceUpdate) {
                            if (!bucket)
                                bucket = Grid._createBucket(buckets, bucketId);
                            Grid._bucketAddBody(grid, bucket, body);
                        }
                    }
                }

                // set the new region
                body.region = newRegion;

                // flag changes so we can update pairs
                gridChanged = true;
            }
        }

        // update pairs list only if pairs changed (i.e. a body changed region)
        if (gridChanged)
            grid.pairsList = Grid._createActivePairsList(grid);
    };

    deprecated(Grid, 'update', 'Grid.update ➤ replaced by Matter.Detector');

    /**
     * Clears the grid.
     * @deprecated replaced by Matter.Detector
     * @method clear
     * @param {grid} grid
     */
    Grid.clear = function(grid) {
        grid.buckets = {};
        grid.pairs = {};
        grid.pairsList = [];
    };

    deprecated(Grid, 'clear', 'Grid.clear ➤ replaced by Matter.Detector');

    /**
     * Finds the union of two regions.
     * @method _regionUnion
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} regionA
     * @param {} regionB
     * @return {} region
     */
    Grid._regionUnion = function(regionA, regionB) {
        var startCol = Math.min(regionA.startCol, regionB.startCol),
            endCol = Math.max(regionA.endCol, regionB.endCol),
            startRow = Math.min(regionA.startRow, regionB.startRow),
            endRow = Math.max(regionA.endRow, regionB.endRow);

        return Grid._createRegion(startCol, endCol, startRow, endRow);
    };

    /**
     * Gets the region a given body falls in for a given grid.
     * @method _getRegion
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @param {} body
     * @return {} region
     */
    Grid._getRegion = function(grid, body) {
        var bounds = body.bounds,
            startCol = Math.floor(bounds.min.x / grid.bucketWidth),
            endCol = Math.floor(bounds.max.x / grid.bucketWidth),
            startRow = Math.floor(bounds.min.y / grid.bucketHeight),
            endRow = Math.floor(bounds.max.y / grid.bucketHeight);

        return Grid._createRegion(startCol, endCol, startRow, endRow);
    };

    /**
     * Creates a region.
     * @method _createRegion
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} startCol
     * @param {} endCol
     * @param {} startRow
     * @param {} endRow
     * @return {} region
     */
    Grid._createRegion = function(startCol, endCol, startRow, endRow) {
        return { 
            id: startCol + ',' + endCol + ',' + startRow + ',' + endRow,
            startCol: startCol, 
            endCol: endCol, 
            startRow: startRow, 
            endRow: endRow 
        };
    };

    /**
     * Gets the bucket id at the given position.
     * @method _getBucketId
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} column
     * @param {} row
     * @return {string} bucket id
     */
    Grid._getBucketId = function(column, row) {
        return 'C' + column + 'R' + row;
    };

    /**
     * Creates a bucket.
     * @method _createBucket
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} buckets
     * @param {} bucketId
     * @return {} bucket
     */
    Grid._createBucket = function(buckets, bucketId) {
        var bucket = buckets[bucketId] = [];
        return bucket;
    };

    /**
     * Adds a body to a bucket.
     * @method _bucketAddBody
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @param {} bucket
     * @param {} body
     */
    Grid._bucketAddBody = function(grid, bucket, body) {
        var gridPairs = grid.pairs,
            pairId = Pair.id,
            bucketLength = bucket.length,
            i;

        // add new pairs
        for (i = 0; i < bucketLength; i++) {
            var bodyB = bucket[i];

            if (body.id === bodyB.id || (body.isStatic && bodyB.isStatic))
                continue;

            // keep track of the number of buckets the pair exists in
            // important for Grid.update to work
            var id = pairId(body, bodyB),
                pair = gridPairs[id];

            if (pair) {
                pair[2] += 1;
            } else {
                gridPairs[id] = [body, bodyB, 1];
            }
        }

        // add to bodies (after pairs, otherwise pairs with self)
        bucket.push(body);
    };

    /**
     * Removes a body from a bucket.
     * @method _bucketRemoveBody
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @param {} bucket
     * @param {} body
     */
    Grid._bucketRemoveBody = function(grid, bucket, body) {
        var gridPairs = grid.pairs,
            pairId = Pair.id,
            i;

        // remove from bucket
        bucket.splice(Common.indexOf(bucket, body), 1);

        var bucketLength = bucket.length;

        // update pair counts
        for (i = 0; i < bucketLength; i++) {
            // keep track of the number of buckets the pair exists in
            // important for _createActivePairsList to work
            var pair = gridPairs[pairId(body, bucket[i])];

            if (pair)
                pair[2] -= 1;
        }
    };

    /**
     * Generates a list of the active pairs in the grid.
     * @method _createActivePairsList
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @return [] pairs
     */
    Grid._createActivePairsList = function(grid) {
        var pair,
            gridPairs = grid.pairs,
            pairKeys = Common.keys(gridPairs),
            pairKeysLength = pairKeys.length,
            pairs = [],
            k;

        // iterate over grid.pairs
        for (k = 0; k < pairKeysLength; k++) {
            pair = gridPairs[pairKeys[k]];

            // if pair exists in at least one bucket
            // it is a pair that needs further collision testing so push it
            if (pair[2] > 0) {
                pairs.push(pair);
            } else {
                delete gridPairs[pairKeys[k]];
            }
        }

        return pairs;
    };
    
})();


/***/ }),
/* 25 */
/***/ (function(module, exports, __nested_webpack_require_318832__) {

/**
* The `Matter.MouseConstraint` module contains methods for creating mouse constraints.
* Mouse constraints are used for allowing user interaction, providing the ability to move bodies via the mouse or touch.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class MouseConstraint
*/

var MouseConstraint = {};

module.exports = MouseConstraint;

var Vertices = __nested_webpack_require_318832__(3);
var Sleeping = __nested_webpack_require_318832__(7);
var Mouse = __nested_webpack_require_318832__(13);
var Events = __nested_webpack_require_318832__(4);
var Detector = __nested_webpack_require_318832__(14);
var Constraint = __nested_webpack_require_318832__(10);
var Composite = __nested_webpack_require_318832__(5);
var Common = __nested_webpack_require_318832__(0);
var Bounds = __nested_webpack_require_318832__(1);

(function() {

    /**
     * Creates a new mouse constraint.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {engine} engine
     * @param {} options
     * @return {MouseConstraint} A new MouseConstraint
     */
    MouseConstraint.create = function(engine, options) {
        var mouse = (engine ? engine.mouse : null) || (options ? options.mouse : null);

        if (!mouse) {
            if (engine && engine.render && engine.render.canvas) {
                mouse = Mouse.create(engine.render.canvas);
            } else if (options && options.element) {
                mouse = Mouse.create(options.element);
            } else {
                mouse = Mouse.create();
                Common.warn('MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected');
            }
        }

        var constraint = Constraint.create({ 
            label: 'Mouse Constraint',
            pointA: mouse.position,
            pointB: { x: 0, y: 0 },
            length: 0.01, 
            stiffness: 0.1,
            angularStiffness: 1,
            render: {
                strokeStyle: '#90EE90',
                lineWidth: 3
            }
        });

        var defaults = {
            type: 'mouseConstraint',
            mouse: mouse,
            element: null,
            body: null,
            constraint: constraint,
            collisionFilter: {
                category: 0x0001,
                mask: 0xFFFFFFFF,
                group: 0
            }
        };

        var mouseConstraint = Common.extend(defaults, options);

        Events.on(engine, 'beforeUpdate', function() {
            var allBodies = Composite.allBodies(engine.world);
            MouseConstraint.update(mouseConstraint, allBodies);
            MouseConstraint._triggerEvents(mouseConstraint);
        });

        return mouseConstraint;
    };

    /**
     * Updates the given mouse constraint.
     * @private
     * @method update
     * @param {MouseConstraint} mouseConstraint
     * @param {body[]} bodies
     */
    MouseConstraint.update = function(mouseConstraint, bodies) {
        var mouse = mouseConstraint.mouse,
            constraint = mouseConstraint.constraint,
            body = mouseConstraint.body;

        if (mouse.button === 0) {
            if (!constraint.bodyB) {
                for (var i = 0; i < bodies.length; i++) {
                    body = bodies[i];
                    if (Bounds.contains(body.bounds, mouse.position) 
                            && Detector.canCollide(body.collisionFilter, mouseConstraint.collisionFilter)) {
                        for (var j = body.parts.length > 1 ? 1 : 0; j < body.parts.length; j++) {
                            var part = body.parts[j];
                            if (Vertices.contains(part.vertices, mouse.position)) {
                                constraint.pointA = mouse.position;
                                constraint.bodyB = mouseConstraint.body = body;
                                constraint.pointB = { x: mouse.position.x - body.position.x, y: mouse.position.y - body.position.y };
                                constraint.angleB = body.angle;

                                Sleeping.set(body, false);
                                Events.trigger(mouseConstraint, 'startdrag', { mouse: mouse, body: body });

                                break;
                            }
                        }
                    }
                }
            } else {
                Sleeping.set(constraint.bodyB, false);
                constraint.pointA = mouse.position;
            }
        } else {
            constraint.bodyB = mouseConstraint.body = null;
            constraint.pointB = null;

            if (body)
                Events.trigger(mouseConstraint, 'enddrag', { mouse: mouse, body: body });
        }
    };

    /**
     * Triggers mouse constraint events.
     * @method _triggerEvents
     * @private
     * @param {mouse} mouseConstraint
     */
    MouseConstraint._triggerEvents = function(mouseConstraint) {
        var mouse = mouseConstraint.mouse,
            mouseEvents = mouse.sourceEvents;

        if (mouseEvents.mousemove)
            Events.trigger(mouseConstraint, 'mousemove', { mouse: mouse });

        if (mouseEvents.mousedown)
            Events.trigger(mouseConstraint, 'mousedown', { mouse: mouse });

        if (mouseEvents.mouseup)
            Events.trigger(mouseConstraint, 'mouseup', { mouse: mouse });

        // reset the mouse state ready for the next step
        Mouse.clearSourceEvents(mouse);
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired when the mouse has moved (or a touch moves) during the last step
    *
    * @event mousemove
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when the mouse is down (or a touch has started) during the last step
    *
    * @event mousedown
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when the mouse is up (or a touch has ended) during the last step
    *
    * @event mouseup
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when the user starts dragging a body
    *
    * @event startdrag
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {body} event.body The body being dragged
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when the user ends dragging a body
    *
    * @event enddrag
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {body} event.body The body that has stopped being dragged
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "constraint"
     * @readOnly
     */

    /**
     * The `Mouse` instance in use. If not supplied in `MouseConstraint.create`, one will be created.
     *
     * @property mouse
     * @type mouse
     * @default mouse
     */

    /**
     * The `Body` that is currently being moved by the user, or `null` if no body.
     *
     * @property body
     * @type body
     * @default null
     */

    /**
     * The `Constraint` object that is used to move the body during interaction.
     *
     * @property constraint
     * @type constraint
     */

    /**
     * An `Object` that specifies the collision filter properties.
     * The collision filter allows the user to define which types of body this mouse constraint can interact with.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter
     * @type object
     */

})();


/***/ }),
/* 26 */
/***/ (function(module, exports, __nested_webpack_require_327327__) {

/**
* The `Matter.Query` module contains methods for performing collision queries.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Query
*/

var Query = {};

module.exports = Query;

var Vector = __nested_webpack_require_327327__(2);
var Collision = __nested_webpack_require_327327__(8);
var Bounds = __nested_webpack_require_327327__(1);
var Bodies = __nested_webpack_require_327327__(12);
var Vertices = __nested_webpack_require_327327__(3);

(function() {

    /**
     * Returns a list of collisions between `body` and `bodies`.
     * @method collides
     * @param {body} body
     * @param {body[]} bodies
     * @return {collision[]} Collisions
     */
    Query.collides = function(body, bodies) {
        var collisions = [],
            bodiesLength = bodies.length,
            bounds = body.bounds,
            collides = Collision.collides,
            overlaps = Bounds.overlaps;

        for (var i = 0; i < bodiesLength; i++) {
            var bodyA = bodies[i],
                partsALength = bodyA.parts.length,
                partsAStart = partsALength === 1 ? 0 : 1;
            
            if (overlaps(bodyA.bounds, bounds)) {
                for (var j = partsAStart; j < partsALength; j++) {
                    var part = bodyA.parts[j];

                    if (overlaps(part.bounds, bounds)) {
                        var collision = collides(part, body);

                        if (collision) {
                            collisions.push(collision);
                            break;
                        }
                    }
                }
            }
        }

        return collisions;
    };

    /**
     * Casts a ray segment against a set of bodies and returns all collisions, ray width is optional. Intersection points are not provided.
     * @method ray
     * @param {body[]} bodies
     * @param {vector} startPoint
     * @param {vector} endPoint
     * @param {number} [rayWidth]
     * @return {collision[]} Collisions
     */
    Query.ray = function(bodies, startPoint, endPoint, rayWidth) {
        rayWidth = rayWidth || 1e-100;

        var rayAngle = Vector.angle(startPoint, endPoint),
            rayLength = Vector.magnitude(Vector.sub(startPoint, endPoint)),
            rayX = (endPoint.x + startPoint.x) * 0.5,
            rayY = (endPoint.y + startPoint.y) * 0.5,
            ray = Bodies.rectangle(rayX, rayY, rayLength, rayWidth, { angle: rayAngle }),
            collisions = Query.collides(ray, bodies);

        for (var i = 0; i < collisions.length; i += 1) {
            var collision = collisions[i];
            collision.body = collision.bodyB = collision.bodyA;            
        }

        return collisions;
    };

    /**
     * Returns all bodies whose bounds are inside (or outside if set) the given set of bounds, from the given set of bodies.
     * @method region
     * @param {body[]} bodies
     * @param {bounds} bounds
     * @param {bool} [outside=false]
     * @return {body[]} The bodies matching the query
     */
    Query.region = function(bodies, bounds, outside) {
        var result = [];

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                overlaps = Bounds.overlaps(body.bounds, bounds);
            if ((overlaps && !outside) || (!overlaps && outside))
                result.push(body);
        }

        return result;
    };

    /**
     * Returns all bodies whose vertices contain the given point, from the given set of bodies.
     * @method point
     * @param {body[]} bodies
     * @param {vector} point
     * @return {body[]} The bodies matching the query
     */
    Query.point = function(bodies, point) {
        var result = [];

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];
            
            if (Bounds.contains(body.bounds, point)) {
                for (var j = body.parts.length === 1 ? 0 : 1; j < body.parts.length; j++) {
                    var part = body.parts[j];

                    if (Bounds.contains(part.bounds, point)
                        && Vertices.contains(part.vertices, point)) {
                        result.push(body);
                        break;
                    }
                }
            }
        }

        return result;
    };

})();


/***/ }),
/* 27 */
/***/ (function(module, exports, __nested_webpack_require_331702__) {

/**
* The `Matter.Runner` module is an optional utility which provides a game loop, 
* that handles continuously updating a `Matter.Engine` for you within a browser.
* It is intended for development and debugging purposes, but may also be suitable for simple games.
* If you are using your own game loop instead, then you do not need the `Matter.Runner` module.
* Instead just call `Engine.update(engine, delta)` in your own loop.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Runner
*/

var Runner = {};

module.exports = Runner;

var Events = __nested_webpack_require_331702__(4);
var Engine = __nested_webpack_require_331702__(18);
var Common = __nested_webpack_require_331702__(0);

(function() {

    var _requestAnimationFrame,
        _cancelAnimationFrame;

    if (typeof window !== 'undefined') {
        _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
                                      || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
   
        _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame 
                                      || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
    }

    if (!_requestAnimationFrame) {
        var _frameTimeout;

        _requestAnimationFrame = function(callback){ 
            _frameTimeout = setTimeout(function() { 
                callback(Common.now()); 
            }, 1000 / 60);
        };

        _cancelAnimationFrame = function() {
            clearTimeout(_frameTimeout);
        };
    }

    /**
     * Creates a new Runner. The options parameter is an object that specifies any properties you wish to override the defaults.
     * @method create
     * @param {} options
     */
    Runner.create = function(options) {
        var defaults = {
            fps: 60,
            correction: 1,
            deltaSampleSize: 60,
            counterTimestamp: 0,
            frameCounter: 0,
            deltaHistory: [],
            timePrev: null,
            timeScalePrev: 1,
            frameRequestId: null,
            isFixed: false,
            enabled: true
        };

        var runner = Common.extend(defaults, options);

        runner.delta = runner.delta || 1000 / runner.fps;
        runner.deltaMin = runner.deltaMin || 1000 / runner.fps;
        runner.deltaMax = runner.deltaMax || 1000 / (runner.fps * 0.5);
        runner.fps = 1000 / runner.delta;

        return runner;
    };

    /**
     * Continuously ticks a `Matter.Engine` by calling `Runner.tick` on the `requestAnimationFrame` event.
     * @method run
     * @param {engine} engine
     */
    Runner.run = function(runner, engine) {
        // create runner if engine is first argument
        if (typeof runner.positionIterations !== 'undefined') {
            engine = runner;
            runner = Runner.create();
        }

        (function render(time){
            runner.frameRequestId = _requestAnimationFrame(render);

            if (time && runner.enabled) {
                Runner.tick(runner, engine, time);
            }
        })();

        return runner;
    };

    /**
     * A game loop utility that updates the engine and renderer by one step (a 'tick').
     * Features delta smoothing, time correction and fixed or dynamic timing.
     * Consider just `Engine.update(engine, delta)` if you're using your own loop.
     * @method tick
     * @param {runner} runner
     * @param {engine} engine
     * @param {number} time
     */
    Runner.tick = function(runner, engine, time) {
        var timing = engine.timing,
            correction = 1,
            delta;

        // create an event object
        var event = {
            timestamp: timing.timestamp
        };

        Events.trigger(runner, 'beforeTick', event);

        if (runner.isFixed) {
            // fixed timestep
            delta = runner.delta;
        } else {
            // dynamic timestep based on wall clock between calls
            delta = (time - runner.timePrev) || runner.delta;
            runner.timePrev = time;

            // optimistically filter delta over a few frames, to improve stability
            runner.deltaHistory.push(delta);
            runner.deltaHistory = runner.deltaHistory.slice(-runner.deltaSampleSize);
            delta = Math.min.apply(null, runner.deltaHistory);
            
            // limit delta
            delta = delta < runner.deltaMin ? runner.deltaMin : delta;
            delta = delta > runner.deltaMax ? runner.deltaMax : delta;

            // correction for delta
            correction = delta / runner.delta;

            // update engine timing object
            runner.delta = delta;
        }

        // time correction for time scaling
        if (runner.timeScalePrev !== 0)
            correction *= timing.timeScale / runner.timeScalePrev;

        if (timing.timeScale === 0)
            correction = 0;

        runner.timeScalePrev = timing.timeScale;
        runner.correction = correction;

        // fps counter
        runner.frameCounter += 1;
        if (time - runner.counterTimestamp >= 1000) {
            runner.fps = runner.frameCounter * ((time - runner.counterTimestamp) / 1000);
            runner.counterTimestamp = time;
            runner.frameCounter = 0;
        }

        Events.trigger(runner, 'tick', event);

        // update
        Events.trigger(runner, 'beforeUpdate', event);
        Engine.update(engine, delta, correction);
        Events.trigger(runner, 'afterUpdate', event);

        Events.trigger(runner, 'afterTick', event);
    };

    /**
     * Ends execution of `Runner.run` on the given `runner`, by canceling the animation frame request event loop.
     * If you wish to only temporarily pause the engine, see `engine.enabled` instead.
     * @method stop
     * @param {runner} runner
     */
    Runner.stop = function(runner) {
        _cancelAnimationFrame(runner.frameRequestId);
    };

    /**
     * Alias for `Runner.run`.
     * @method start
     * @param {runner} runner
     * @param {engine} engine
     */
    Runner.start = function(runner, engine) {
        Runner.run(runner, engine);
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired at the start of a tick, before any updates to the engine or timing
    *
    * @event beforeTick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after engine timing updated, but just before update
    *
    * @event tick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired at the end of a tick, after engine update and after rendering
    *
    * @event afterTick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired before update
    *
    * @event beforeUpdate
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after update
    *
    * @event afterUpdate
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * A flag that specifies whether the runner is running or not.
     *
     * @property enabled
     * @type boolean
     * @default true
     */

    /**
     * A `Boolean` that specifies if the runner should use a fixed timestep (otherwise it is variable).
     * If timing is fixed, then the apparent simulation speed will change depending on the frame rate (but behaviour will be deterministic).
     * If the timing is variable, then the apparent simulation speed will be constant (approximately, but at the cost of determininism).
     *
     * @property isFixed
     * @type boolean
     * @default false
     */

    /**
     * A `Number` that specifies the time step between updates in milliseconds.
     * If `engine.timing.isFixed` is set to `true`, then `delta` is fixed.
     * If it is `false`, then `delta` can dynamically change to maintain the correct apparent simulation speed.
     *
     * @property delta
     * @type number
     * @default 1000 / 60
     */

})();


/***/ }),
/* 28 */
/***/ (function(module, exports, __nested_webpack_require_340745__) {

/**
* This module has now been replaced by `Matter.Collision`.
*
* All usage should be migrated to `Matter.Collision`.
* For back-compatibility purposes this module will remain for a short term and then later removed in a future release.
*
* The `Matter.SAT` module contains methods for detecting collisions using the Separating Axis Theorem.
*
* @class SAT
* @deprecated
*/

var SAT = {};

module.exports = SAT;

var Collision = __nested_webpack_require_340745__(8);
var Common = __nested_webpack_require_340745__(0);
var deprecated = Common.deprecated;

(function() {

    /**
     * Detect collision between two bodies using the Separating Axis Theorem.
     * @deprecated replaced by Collision.collides
     * @method collides
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {collision} collision
     */
    SAT.collides = function(bodyA, bodyB) {
        return Collision.collides(bodyA, bodyB);
    };

    deprecated(SAT, 'collides', 'SAT.collides ➤ replaced by Collision.collides');

})();


/***/ }),
/* 29 */
/***/ (function(module, exports, __nested_webpack_require_341815__) {

/**
* The `Matter.Svg` module contains methods for converting SVG images into an array of vector points.
*
* To use this module you also need the SVGPathSeg polyfill: https://github.com/progers/pathseg
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Svg
*/

var Svg = {};

module.exports = Svg;

var Bounds = __nested_webpack_require_341815__(1);
var Common = __nested_webpack_require_341815__(0);

(function() {

    /**
     * Converts an SVG path into an array of vector points.
     * If the input path forms a concave shape, you must decompose the result into convex parts before use.
     * See `Bodies.fromVertices` which provides support for this.
     * Note that this function is not guaranteed to support complex paths (such as those with holes).
     * You must load the `pathseg.js` polyfill on newer browsers.
     * @method pathToVertices
     * @param {SVGPathElement} path
     * @param {Number} [sampleLength=15]
     * @return {Vector[]} points
     */
    Svg.pathToVertices = function(path, sampleLength) {
        if (typeof window !== 'undefined' && !('SVGPathSeg' in window)) {
            Common.warn('Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.');
        }

        // https://github.com/wout/svg.topoly.js/blob/master/svg.topoly.js
        var i, il, total, point, segment, segments, 
            segmentsQueue, lastSegment, 
            lastPoint, segmentIndex, points = [],
            lx, ly, length = 0, x = 0, y = 0;

        sampleLength = sampleLength || 15;

        var addPoint = function(px, py, pathSegType) {
            // all odd-numbered path types are relative except PATHSEG_CLOSEPATH (1)
            var isRelative = pathSegType % 2 === 1 && pathSegType > 1;

            // when the last point doesn't equal the current point add the current point
            if (!lastPoint || px != lastPoint.x || py != lastPoint.y) {
                if (lastPoint && isRelative) {
                    lx = lastPoint.x;
                    ly = lastPoint.y;
                } else {
                    lx = 0;
                    ly = 0;
                }

                var point = {
                    x: lx + px,
                    y: ly + py
                };

                // set last point
                if (isRelative || !lastPoint) {
                    lastPoint = point;
                }

                points.push(point);

                x = lx + px;
                y = ly + py;
            }
        };

        var addSegmentPoint = function(segment) {
            var segType = segment.pathSegTypeAsLetter.toUpperCase();

            // skip path ends
            if (segType === 'Z') 
                return;

            // map segment to x and y
            switch (segType) {

            case 'M':
            case 'L':
            case 'T':
            case 'C':
            case 'S':
            case 'Q':
                x = segment.x;
                y = segment.y;
                break;
            case 'H':
                x = segment.x;
                break;
            case 'V':
                y = segment.y;
                break;
            }

            addPoint(x, y, segment.pathSegType);
        };

        // ensure path is absolute
        Svg._svgPathToAbsolute(path);

        // get total length
        total = path.getTotalLength();

        // queue segments
        segments = [];
        for (i = 0; i < path.pathSegList.numberOfItems; i += 1)
            segments.push(path.pathSegList.getItem(i));

        segmentsQueue = segments.concat();

        // sample through path
        while (length < total) {
            // get segment at position
            segmentIndex = path.getPathSegAtLength(length);
            segment = segments[segmentIndex];

            // new segment
            if (segment != lastSegment) {
                while (segmentsQueue.length && segmentsQueue[0] != segment)
                    addSegmentPoint(segmentsQueue.shift());

                lastSegment = segment;
            }

            // add points in between when curving
            // TODO: adaptive sampling
            switch (segment.pathSegTypeAsLetter.toUpperCase()) {

            case 'C':
            case 'T':
            case 'S':
            case 'Q':
            case 'A':
                point = path.getPointAtLength(length);
                addPoint(point.x, point.y, 0);
                break;

            }

            // increment by sample value
            length += sampleLength;
        }

        // add remaining segments not passed by sampling
        for (i = 0, il = segmentsQueue.length; i < il; ++i)
            addSegmentPoint(segmentsQueue[i]);

        return points;
    };

    Svg._svgPathToAbsolute = function(path) {
        // http://phrogz.net/convert-svg-path-to-all-absolute-commands
        // Copyright (c) Gavin Kistner
        // http://phrogz.net/js/_ReuseLicense.txt
        // Modifications: tidy formatting and naming
        var x0, y0, x1, y1, x2, y2, segs = path.pathSegList,
            x = 0, y = 0, len = segs.numberOfItems;

        for (var i = 0; i < len; ++i) {
            var seg = segs.getItem(i),
                segType = seg.pathSegTypeAsLetter;

            if (/[MLHVCSQTA]/.test(segType)) {
                if ('x' in seg) x = seg.x;
                if ('y' in seg) y = seg.y;
            } else {
                if ('x1' in seg) x1 = x + seg.x1;
                if ('x2' in seg) x2 = x + seg.x2;
                if ('y1' in seg) y1 = y + seg.y1;
                if ('y2' in seg) y2 = y + seg.y2;
                if ('x' in seg) x += seg.x;
                if ('y' in seg) y += seg.y;

                switch (segType) {

                case 'm':
                    segs.replaceItem(path.createSVGPathSegMovetoAbs(x, y), i);
                    break;
                case 'l':
                    segs.replaceItem(path.createSVGPathSegLinetoAbs(x, y), i);
                    break;
                case 'h':
                    segs.replaceItem(path.createSVGPathSegLinetoHorizontalAbs(x), i);
                    break;
                case 'v':
                    segs.replaceItem(path.createSVGPathSegLinetoVerticalAbs(y), i);
                    break;
                case 'c':
                    segs.replaceItem(path.createSVGPathSegCurvetoCubicAbs(x, y, x1, y1, x2, y2), i);
                    break;
                case 's':
                    segs.replaceItem(path.createSVGPathSegCurvetoCubicSmoothAbs(x, y, x2, y2), i);
                    break;
                case 'q':
                    segs.replaceItem(path.createSVGPathSegCurvetoQuadraticAbs(x, y, x1, y1), i);
                    break;
                case 't':
                    segs.replaceItem(path.createSVGPathSegCurvetoQuadraticSmoothAbs(x, y), i);
                    break;
                case 'a':
                    segs.replaceItem(path.createSVGPathSegArcAbs(x, y, seg.r1, seg.r2, seg.angle, seg.largeArcFlag, seg.sweepFlag), i);
                    break;
                case 'z':
                case 'Z':
                    x = x0;
                    y = y0;
                    break;

                }
            }

            if (segType == 'M' || segType == 'm') {
                x0 = x;
                y0 = y;
            }
        }
    };

})();

/***/ }),
/* 30 */
/***/ (function(module, exports, __nested_webpack_require_349276__) {

/**
* This module has now been replaced by `Matter.Composite`.
*
* All usage should be migrated to the equivalent functions found on `Matter.Composite`.
* For example `World.add(world, body)` now becomes `Composite.add(world, body)`.
*
* The property `world.gravity` has been moved to `engine.gravity`.
*
* For back-compatibility purposes this module will remain as a direct alias to `Matter.Composite` in the short term during migration.
* Eventually this alias module will be marked as deprecated and then later removed in a future release.
*
* @class World
*/

var World = {};

module.exports = World;

var Composite = __nested_webpack_require_349276__(5);
var Common = __nested_webpack_require_349276__(0);

(function() {

    /**
     * See above, aliases for back compatibility only
     */
    World.create = Composite.create;
    World.add = Composite.add;
    World.remove = Composite.remove;
    World.clear = Composite.clear;
    World.addComposite = Composite.addComposite;
    World.addBody = Composite.addBody;
    World.addConstraint = Composite.addConstraint;

})();


/***/ })
/******/ ]);
});

/***/ }),

/***/ "./src/GameEngine/World/GameEntities/Moveable.js":
/*!*******************************************************!*\
  !*** ./src/GameEngine/World/GameEntities/Moveable.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Moveable)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ "./src/GameEngine/core.js");


class Moveable {

    initX;
    initY;
    width;
    height;
    options;

    constructor(props={}) {
        this.initX = props.x || 0;
        this.initY = props.y || 0;
        this.width = props.w || 100;
        this.height = props.h || 100;
        this.options = props.options || {};
    }

    static create(props={}) {
        let body = new Moveable(props);
        return _core__WEBPACK_IMPORTED_MODULE_0__["default"].getMatter().Bodies.rectangle(body.initX, body.initY, body.width, body.height, this.options);
    }

}

/***/ }),

/***/ "./src/GameEngine/World/GameEntities/MoveableStack.js":
/*!************************************************************!*\
  !*** ./src/GameEngine/World/GameEntities/MoveableStack.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MoveableStack)
/* harmony export */ });
/* harmony import */ var _Moveable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Moveable */ "./src/GameEngine/World/GameEntities/Moveable.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core */ "./src/GameEngine/core.js");



class MoveableStack {

    rows;
    initX;
    initY;
    columns;
    columnGap;
    rowGap;
    entity;
    entities;
    collisionGroup;
    render;
    defaultOptions;

    constructor(props={}) {
        this.rows = props.row || 20;
        this.columns = props.columns || 7;
        this.initX = props.x || 600;
        this.initY = props.y || 600;
        this.columnGap = props.columnGap || 5;
        this.rowGap = props.rowGap || 5;
        this.entity = _Moveable__WEBPACK_IMPORTED_MODULE_0__["default"];
        this.entities = [];
        this.collisionFilter = props.collisionFilter || {
            category: 0x0001,
            mask: 0xFFFFFFFF,
            group: 0
        };
        this.defaultGroupOptions = {
            collisionFilter: this.collisionFilter
        };

        return this.init();
    }

    init() {

        return _core__WEBPACK_IMPORTED_MODULE_1__["default"].getMatter().Composites.stack(
            this.initX,
            this.initY,
            this.columns,
            this.rows,
            this.columnGap,
            this.rowGap,
            this.createEntity.bind(this)
        );
    }

    createEntity(x, y) {

        this.render = {
            render: {
                fillStyle: '#222'
            }
        };
        this.defaultOptions = {...this.defaultGroupOptions, ...this.render }
        let obj = this.entity.create({
            x: x,
            y: y,
            w: 50,
            h: 50,
            options: this.defaultOptions
        });
        this.entities.push(obj);
        return obj;
    }

}

/***/ }),

/***/ "./src/GameEngine/core.js":
/*!********************************!*\
  !*** ./src/GameEngine/core.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameEngine)
/* harmony export */ });
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! matter-js */ "./node_modules/matter-js/build/matter.js");
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _World_GameEntities_MoveableStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./World/GameEntities/MoveableStack */ "./src/GameEngine/World/GameEntities/MoveableStack.js");


//import Matter from "../../node_modules/matter-js/build/matter.js";

class GameEngine {

    static matter;

    engine;
    world;
    runner;

    gravity;

    renderer;
    debugRenderOptions;

    stage;
    stageWidth;
    stageHeight;

    groups;

    stage01;

    hero;
    chain;
    chainRail;
    chainComposite;
    chainMainConstraint;
    chainHand;
    chainMaxLenght;
    chainMinLenght;

    directionX;
    directionY;
    speedY;
    speedX;
    velocity;
    maxSpeed;
    initSpeed;
    initSpeedY;
    initSpeedX;

    motorTorque;

    gameCollision;
    outOfMainGame;

    bodyStyle;

    constructor(w=800, h=600) {
        this.stageWidth = w;
        this.stageHeight = h;
        this.stage = {
            width: this.stageWidth,
            height: this.stageHeight,
            wireframes: false,
        };
        this.motorTorque = 2;
        this.chainMinLenght = 1;
        this.chainMaxLenght = 200;
        this.debugRenderOptions = {
            showAngleIndicator: false,
            showCollisions: false,
            showVelocity: false
        }
        this.groups = [
            {
                id: "world",
                members: [],
            }
        ];
        this.gameCollision = 0x0001;
        this.outOfMainGame = 0x0002;
    }

    static getMatter() {
        if (GameEngine.matter == null) {
            GameEngine.matter = (matter_js__WEBPACK_IMPORTED_MODULE_0___default());
        }
        return GameEngine.matter;
    }

    init() {
         this.engine = matter_js__WEBPACK_IMPORTED_MODULE_0___default().Engine.create();
         this.world = this.engine.world;

         this.entities();

         this.render();
         this.run();

         this.controls();
         this.actions();

         this.collisions();
         this.gravity = this.world.gravity;
    }

    render() {
        this.renderer = matter_js__WEBPACK_IMPORTED_MODULE_0___default().Render.create({
            element: document.getElementById("craneGame"),
            engine: this.engine,
            options: {...this.stage, ...this.debugRenderOptions},
        });

        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Render.run(this.renderer);
    }

    run() {
        this.runner = matter_js__WEBPACK_IMPORTED_MODULE_0___default().Runner.create();
        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Runner.run(this.runner, this.engine);
    }

    entities() {
        //let group = Matter.Body.nextGroup(true);
        let staticThickness = 50;
        let moveableStack01 = new _World_GameEntities_MoveableStack__WEBPACK_IMPORTED_MODULE_1__["default"]({});
        let floor = matter_js__WEBPACK_IMPORTED_MODULE_0___default().Bodies.rectangle(this.stageWidth/2, this.stageHeight-10, this.stageWidth, staticThickness, { isStatic: true });
        this.chainRail =  matter_js__WEBPACK_IMPORTED_MODULE_0___default().Bodies.rectangle(this.stageWidth/2, this.stageHeight/7, this.stageWidth, staticThickness, { isStatic: true });
        this.chainRail.visibilityState = "showed";

        this.stage01 = matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composite.add(this.world, [
            moveableStack01,
            floor,
            this.chainRail,
            matter_js__WEBPACK_IMPORTED_MODULE_0___default().Bodies.rectangle(0, this.stageHeight/2, staticThickness, this.stageWidth, { isStatic: true }),
            matter_js__WEBPACK_IMPORTED_MODULE_0___default().Bodies.rectangle(this.stageWidth, this.stageHeight/2, staticThickness, this.stageWidth, { isStatic: true })
        ]);

        var startX = 200, startY = 50, lastX = startX, lastY = startY,
            chainLinkHeight=50,
            chainLinkWidth=5,
            dynamicObjectDensity = 0.1;

        //collisionFilter: { group: group },
        this.hero = matter_js__WEBPACK_IMPORTED_MODULE_0___default().Bodies.circle(startX, startY, 25, { chamfer: 0, friction:0.5, density:dynamicObjectDensity });
        //this.hero.isStatic = true;


        //group = Matter.Body.nextGroup(false);


        //group = Matter.Body.nextGroup(true);

        this.chain = matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composites.stack(startX, startY+chainLinkHeight*2, 1, 4, 4, 4, function(x, y) {
            lastX = x; lastY = y;
            return matter_js__WEBPACK_IMPORTED_MODULE_0___default().Bodies.rectangle(x, y, chainLinkWidth, chainLinkHeight, {
                collisionFilter: {
                    category: 0x0002,
                    group: 1
                }
            });
        });

        var chainAnchor = this.chain.bodies[0];
        var chainWrist = this.chain.bodies[this.chain.bodies.length-1];

        this.chainHand = matter_js__WEBPACK_IMPORTED_MODULE_0___default().Bodies.circle(chainWrist.position.x, chainWrist.position.y + chainLinkHeight, 10, { chamfer: 0 });
        this.chain.bodies.push(this.chainHand);

        this.chainComposite = matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composites.chain(this.chain, 0, 0.5, 0, -0.5, { length: 0.001 });
        this.chainMainConstraint = matter_js__WEBPACK_IMPORTED_MODULE_0___default().Constraint.create({
            bodyA: this.hero,
            bodyB: chainAnchor
        });

        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composite.add(this.world, [
            this.hero,
            this.chain,
            this.chainMainConstraint
        ]);
    }

    actions() {
        const keyHandlers = {
            KeyZ: this.handleChainrail.bind(this)
        };
        document.addEventListener("keyup", event => {
            keyHandlers[event.code]?.();
        });
    }

    controls() {
        this.velocity = 0.1;
        this.maxSpeed = 20;
        this.initSpeedX = 0;
        this.initSpeedY = 0;
        this.directionX = 0;
        this.directionY = 0;

        this.speedX = this.initSpeedX;
        this.speedY = this.initSpeedY;


        const keyHandlers = {
            KeyW: this.turnInRope.bind(this),
            KeyS: this.turnOutRope.bind(this),
            KeyD: this.moveRight.bind(this),
            KeyA: this.moveLeft.bind(this),
            ArrowUp: this.moveUp.bind(this),
            ArrowDown: this.moveDown.bind(this),
            ArrowRight: this.moveRight.bind(this),
            ArrowLeft: this.moveLeft.bind(this),
        };

        const keysDown = new Set();
        document.addEventListener("keydown", event => {
            keysDown.add(event.code);
        });

        document.addEventListener("keyup", event => {
            keysDown.delete(event.code);
        });

        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Events.on(this.engine, "beforeUpdate", () => {

            //this.removeGravity(this.hero);

            [...keysDown].forEach(k => {

                keyHandlers[k]?.();
            });

            if (keysDown.size <= 0) {
                this.speedX = this.speedX - (this.directionX * Math.max(Math.abs(this.speedX * this.velocity), 0));
                this.speedY = this.speedY - (this.directionY * Math.max(Math.abs(this.speedY * this.velocity), 0));
            }
            this.moveHero();
           //this.traceSpeed();
        });

        this.mouse();
    }

    collisions() {
        // an example of using collisionStart event on an engine
        /*Matter.Events.on(this.engine, 'collisionStart', function(event) {
            var pairs = event.pairs;

            // change object colours to show those starting a collision
            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i];
                if (pair.BodyA === this.chainHand) {
                    pair.bodyA.render.fillStyle = '#8888CC';
                    pair.bodyB.render.fillStyle = '#8888CC';
                }
            }
        }).bind(this);*/

        // an example of using collisionActive event on an engine
        //Matter.Events.on(this.engine, 'collisionStart', this.chainHandCollision.bind(this));

        // an example of using collisionEnd event on an engine
        /*Matter.Events.on(this.engine, 'collisionEnd', function(event) {
            var pairs = event.pairs;

            // change object colours to show those ending a collision
            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i];
                if (pair.BodyA === this.chainHand) {
                    pair.bodyA.render.fillStyle = '#CC8888';
                    pair.bodyB.render.fillStyle = '#CC8888';
                }

            }
        }).bind(this);*/
    }

    traceSpeed() {
        console.log({x:this.speedX, y: this.speedY})
    }

    moveUp() {
        this.directionY = -1;
        this.speedY = Math.min(this.velocity * this.directionY, this.maxSpeed);// = this.speedY + (this.directionY * Math.min((this.velocity * this.maxSpeed), this.maxSpeed));
    }

    moveDown() {
        this.directionY = 1;
        this.speedY = Math.min(this.velocity * this.directionY, this.maxSpeed);//this.speedY + (this.directionY * Math.min((this.velocity * this.maxSpeed), this.maxSpeed));
    }

    moveLeft() {
        this.directionX = -1;
        this.speedX = Math.min(this.velocity * this.directionX, this.maxSpeed);//this.speedX + (this.directionX * Math.min((this.velocity * this.maxSpeed), this.maxSpeed));
    }

    moveRight() {
        this.directionX = 1;
        this.speedX = Math.min(this.velocity * this.directionX, this.maxSpeed);//this.speedX + (this.directionX * Math.min((this.velocity * this.maxSpeed), this.maxSpeed));
    }

    turnInRope() {
        this.chainMainConstraint.length -= this.motorTorque;
    }
    turnOutRope() {
        this.chainMainConstraint.length += this.motorTorque;
    }

    handleChainrail() {

        if (this.chainRail.visibilityState === "hidden") {
            this.chainRail.visibilityState = "showed";
            matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composite.add(this.world, this.chainRail);
        }
        else if (this.chainRail.visibilityState === "showed") {
            this.chainRail.visibilityState = "hidden";
            matter_js__WEBPACK_IMPORTED_MODULE_0___default().World.remove(this.world, this.chainRail);
        }
    }

    //check this : https://brm.io/matter-js/demo/#sensors
    chainHandCollision(event) {
        var pairs = event.pairs;

        // change object colours to show those in an active collision (e.g. resting contact)
        /*for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];
            if (pair.BodyA === this.chainHand) {
                pair.bodyA.render.fillStyle = '#88CC88';
                pair.bodyB.render.fillStyle = '#88CC88';
            }
        }*/
        console.log(pairs);
    }

    removeGravity(body) {
        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Body.applyForce(body, body.position, {
            x: -this.gravity.x * this.gravity.scale * body.mass,
            y: -this.gravity.y * this.gravity.scale * body.mass
        });
    }

    /**
     * Matter.Body.applyForce(boxA, {
      x: boxA.position.x,
      y: boxA.position.y
    }, {x: -0.02, y: 0})
     */

    moveHero() {
        //Matter.Body.setVelocity(this.hero, {x:this.speedX, y:this.speedY});
        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Body.applyForce(this.hero, {
            x: this.hero.position.x,
            y: this.hero.position.y
        }, {x:this.speedX, y:this.speedY})
        //Matter.Body.translate(this.hero, {x:this.speedX, y:this.speedY});
    }

    mouse() {
        var mouse = matter_js__WEBPACK_IMPORTED_MODULE_0___default().Mouse.create(this.renderer.canvas),
            mouseConstraint = matter_js__WEBPACK_IMPORTED_MODULE_0___default().MouseConstraint.create(this.engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.1,
                    render: {
                        visible: true
                    }
                }
            });

        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composite.add(this.world, mouseConstraint);

        // keep the mouse in sync with rendering
        this.renderer.mouse = (matter_js__WEBPACK_IMPORTED_MODULE_0___default().mouse);

        // fit the render viewport to the scene
        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Render.lookAt(this.renderer, {
            min: { x: 0, y: 0 },
            max: { x: this.stageWidth, y: this.stageHeight }
        });
    }

}



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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./src/engine.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameEngine_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameEngine/core.js */ "./src/GameEngine/core.js");


var game;

window.addEventListener('load', () => {
    //let container = document.getElementById('craneGame')
    let padding = 100;
    game = new _GameEngine_core_js__WEBPACK_IMPORTED_MODULE_0__["default"](document.documentElement.clientWidth - padding, document.documentElement.clientHeight - padding);
    game.init();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JhbmUtZ2FtZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFBeUQ7QUFDN0Q7QUFDQSxNQUFNLEVBS3VCO0FBQzdCLENBQUM7QUFDRCxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsK0JBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLCtCQUFtQjtBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsK0JBQW1CO0FBQzdCO0FBQ0E7QUFDQSxVQUFVLCtCQUFtQjtBQUM3QjtBQUNBO0FBQ0EsVUFBVSwrQkFBbUI7QUFDN0IsZUFBZSwrQkFBbUI7QUFDbEMsbURBQW1ELCtCQUErQjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsK0JBQW1CO0FBQzdCO0FBQ0EsaUVBQWlFLGlCQUFpQjtBQUNsRjtBQUNBLDBEQUEwRCxhQUFhO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwrQkFBbUI7QUFDN0IsZ0NBQWdDLCtCQUFtQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxXQUFXLCtCQUFtQjtBQUM5QixrREFBa0QsZ0NBQWdDO0FBQ2xGLDBFQUEwRSwrQkFBbUIsNEJBQTRCLG9CQUFvQjtBQUM3STtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsK0JBQW1CO0FBQzdCO0FBQ0Esb0NBQW9DLDRCQUE0QjtBQUNoRSwwQ0FBMEM7QUFDMUMsV0FBVywrQkFBbUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLCtCQUFtQixrQ0FBa0M7QUFDL0Q7QUFDQTtBQUNBLFVBQVUsK0JBQW1CO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwrQkFBbUIsQ0FBQywrQkFBbUI7QUFDeEQsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWUsU0FBUztBQUN4QixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyxzQkFBc0I7QUFDdEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZUFBZSxNQUFNO0FBQ3JCLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsK0JBQStCO0FBQy9COztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixnQkFBZ0IsVUFBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixpQkFBaUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQSx1Q0FBdUMsT0FBTztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsVUFBVTtBQUN6QixnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0Isc0JBQXNCO0FBQzlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFVBQVU7QUFDbEMsZ0JBQWdCLFVBQVU7QUFDMUI7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixzQkFBc0I7QUFDOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrREFBa0QsT0FBTztBQUN6RDtBQUNBOztBQUVBLHdCQUF3QixrQkFBa0I7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFVBQVU7QUFDekIsZ0JBQWdCLFVBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsVUFBVTtBQUN6QixnQkFBZ0IsVUFBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxxQkFBTTtBQUN4Qyx5QkFBeUIscUJBQU07QUFDL0I7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQixtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxVQUFVO0FBQ3pCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLHFCQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsWUFBWTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsTUFBTTtBQUNyQixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRCxPQUFPO0FBQ1A7QUFDQSxpQ0FBaUMsZ0NBQW1COztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsYUFBYSxnQ0FBbUI7QUFDaEMsYUFBYSxnQ0FBbUI7O0FBRWhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxZQUFZLElBQUksY0FBYyxJQUFJLGFBQWE7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxVQUFVO0FBQ3pCLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsTUFBTTtBQUNyQixnQkFBZ0IsVUFBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixvQ0FBb0M7QUFDOUQsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsWUFBWTtBQUNuQztBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLHFCQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxVQUFVO0FBQ3pCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQSx3QkFBd0I7O0FBRXhCLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxVQUFVO0FBQ3pCLGVBQWUsTUFBTTtBQUNyQixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxVQUFVO0FBQ3pCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLGNBQWM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFVBQVU7QUFDekIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFVBQVU7QUFDekIsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixvQkFBb0I7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxVQUFVO0FBQ3pCLGVBQWUsVUFBVTtBQUN6QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDRCQUE0QixlQUFlO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QixnQkFBZ0IsVUFBVTtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFVBQVU7QUFDekIsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxDQUFDOzs7QUFHRCxPQUFPO0FBQ1A7QUFDQSxpQ0FBaUMsZ0NBQW1COztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxhQUFhLGdDQUFtQjs7QUFFaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFVBQVU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLGtCQUFrQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFVBQVU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsd0JBQXdCLGtCQUFrQjtBQUMxQztBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLHNCQUFzQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLGtCQUFrQjtBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyxzQkFBc0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7OztBQUdELE9BQU87QUFDUDtBQUNBLGlDQUFpQyxnQ0FBbUI7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxhQUFhLGdDQUFtQjtBQUNoQyxhQUFhLGdDQUFtQjtBQUNoQyxhQUFhLGdDQUFtQjtBQUNoQyxXQUFXLGdDQUFtQjs7QUFFOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZ0JBQWdCLFdBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsV0FBVztBQUMxQixlQUFlLFNBQVM7QUFDeEIsZUFBZSxTQUFTO0FBQ3hCLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsaUNBQWlDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUIsZUFBZSxjQUFjO0FBQzdCLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQSxpREFBaUQsZ0JBQWdCOztBQUVqRSx3QkFBd0Isb0JBQW9CO0FBQzVDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0RBQWdELGdCQUFnQjs7QUFFaEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxXQUFXO0FBQzFCLGVBQWUsY0FBYztBQUM3QixlQUFlLFNBQVM7QUFDeEIsZ0JBQWdCLFdBQVc7QUFDM0I7QUFDQTtBQUNBOztBQUVBLG9EQUFvRCxnQkFBZ0I7O0FBRXBFLHdCQUF3QixvQkFBb0I7QUFDNUM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbURBQW1ELGdCQUFnQjs7QUFFbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsV0FBVztBQUMxQixlQUFlLFdBQVc7QUFDMUIsZ0JBQWdCLFdBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUIsZUFBZSxXQUFXO0FBQzFCLGVBQWUsU0FBUztBQUN4QixnQkFBZ0IsV0FBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsa0NBQWtDO0FBQzlEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxXQUFXO0FBQzFCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsV0FBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUIsZUFBZSxNQUFNO0FBQ3JCLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsV0FBVztBQUMxQixlQUFlLE1BQU07QUFDckIsZUFBZSxTQUFTO0FBQ3hCLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixpQ0FBaUM7QUFDN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUIsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsV0FBVztBQUMxQixlQUFlLFlBQVk7QUFDM0IsZ0JBQWdCLFdBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxXQUFXO0FBQzFCLGVBQWUsWUFBWTtBQUMzQixlQUFlLFNBQVM7QUFDeEIsZ0JBQWdCLFdBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLGlDQUFpQztBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsV0FBVztBQUMxQixlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLFdBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxXQUFXO0FBQzFCLGVBQWUsU0FBUztBQUN4QixlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGlDQUFpQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLHVCQUF1QjtBQUMvRixVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxXQUFXO0FBQzFCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsd0JBQXdCLGlDQUFpQztBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUIsZ0JBQWdCLGNBQWM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx3QkFBd0IsaUNBQWlDO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsV0FBVztBQUMxQixnQkFBZ0IsYUFBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHdCQUF3QixpQ0FBaUM7QUFDekQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxXQUFXO0FBQzFCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCLGVBQWUsVUFBVTtBQUN6QixlQUFlLFlBQVk7QUFDM0IsZ0JBQWdCLFdBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsV0FBVztBQUMxQixnQkFBZ0IsV0FBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixvQkFBb0I7QUFDNUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxXQUFXO0FBQzFCLGVBQWUsUUFBUTtBQUN2QixlQUFlLE1BQU07QUFDckI7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsV0FBVztBQUMxQixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxXQUFXO0FBQzFCLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7O0FBR0QsT0FBTztBQUNQO0FBQ0EsaUNBQWlDLGdDQUFtQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsZUFBZSxnQ0FBbUI7QUFDbEMsYUFBYSxnQ0FBbUI7QUFDaEMsZUFBZSxnQ0FBbUI7QUFDbEMsYUFBYSxnQ0FBbUI7QUFDaEMsYUFBYSxnQ0FBbUI7QUFDaEMsYUFBYSxnQ0FBbUI7QUFDaEMsV0FBVyxnQ0FBbUI7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEMscUJBQXFCLFlBQVk7QUFDakM7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQyxpQ0FBaUMsc0JBQXNCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQixpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVB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Q0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7QUFHRCxPQUFPO0FBQ1A7QUFDQSxpQ0FBaUMsaUNBQW1COztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGFBQWEsaUNBQW1COztBQUVoQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLDJCQUEyQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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UUFBUTtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsYUFBYSxpQ0FBbUI7QUFDaEMsYUFBYSxpQ0FBbUI7QUFDaEMsYUFBYSxpQ0FBbUI7O0FBRWhDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixjQUFjLFFBQVE7QUFDdEIsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixjQUFjLFFBQVE7QUFDdEIsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixjQUFjLFFBQVE7QUFDdEIsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixjQUFjLFFBQVE7QUFDdEIsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixjQUFjLFFBQVE7QUFDdEIsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7O0FBR0QsT0FBTztBQUNQO0FBQ0EsaUNBQWlDLGlDQUFtQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxnQkFBZ0IsaUNBQW1CO0FBQ25DLGFBQWEsaUNBQW1CO0FBQ2hDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsTUFBTTtBQUNyQixnQkFBZ0IsV0FBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDQUFDOzs7QUFHRCxPQUFPO0FBQ1A7QUFDQSxpQ0FBaUMsaUNBQW1COztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsYUFBYSxpQ0FBbUI7QUFDaEMsYUFBYSxpQ0FBbUI7O0FBRWhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0I7QUFDL0IsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixVQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLG9DQUFvQztBQUN4RDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsU0FBUztBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVELE9BQU87QUFDUDtBQUNBLGlDQUFpQyxpQ0FBbUI7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGdCQUFnQixpQ0FBbUI7QUFDbkMsYUFBYSxpQ0FBbUI7O0FBRWhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7OztBQUdELE9BQU87QUFDUDtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyZ1ZtQztBQUNwQztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSxlQUFlLHVEQUFvQjtBQUNuQztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJrQztBQUNFO0FBQ3BDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaURBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1REFBb0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEU4QjtBQUNpQztBQUMvRDtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGtEQUFNO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsOERBQW9CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4REFBb0I7QUFDNUM7QUFDQTtBQUNBLHNCQUFzQiwwQ0FBMEM7QUFDaEUsU0FBUztBQUNUO0FBQ0EsUUFBUSwyREFBaUI7QUFDekI7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDhEQUFvQjtBQUMxQyxRQUFRLDJEQUFpQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHlFQUFhLEdBQUc7QUFDbEQsb0JBQW9CLGlFQUF1Qiw2RUFBNkUsZ0JBQWdCO0FBQ3hJLDBCQUEwQixpRUFBdUIsNEVBQTRFLGdCQUFnQjtBQUM3STtBQUNBO0FBQ0EsdUJBQXVCLDhEQUFvQjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxZQUFZLGlFQUF1Qiw0REFBNEQsZ0JBQWdCO0FBQy9HLFlBQVksaUVBQXVCLDBFQUEwRSxnQkFBZ0I7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQyxvQkFBb0IsOERBQW9CLHVCQUF1Qix3REFBd0Q7QUFDdkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpRUFBdUI7QUFDNUMsdUJBQXVCO0FBQ3ZCLG1CQUFtQixpRUFBdUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDhEQUFvQix1RUFBdUUsWUFBWTtBQUNoSTtBQUNBO0FBQ0EsOEJBQThCLGlFQUF1QixnQ0FBZ0MsZUFBZTtBQUNwRyxtQ0FBbUMsa0VBQXdCO0FBQzNEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxRQUFRLDhEQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsUUFBUSwwREFBZ0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtCQUFrQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGFBQWE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtCQUFrQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsYUFBYTtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsOEJBQThCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4REFBb0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2REFBbUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixrQkFBa0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0VBQXNCO0FBQzlCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxHQUFHLGVBQWU7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsOENBQThDLDZCQUE2QjtBQUMzRSxRQUFRLGdFQUFzQjtBQUM5QjtBQUNBO0FBQ0EsU0FBUyxHQUFHLDZCQUE2QjtBQUN6Qyw0Q0FBNEMsNkJBQTZCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw2REFBbUI7QUFDdkMsOEJBQThCLHVFQUE2QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFFBQVEsOERBQW9CO0FBQzVCO0FBQ0E7QUFDQSw4QkFBOEIsd0RBQVk7QUFDMUM7QUFDQTtBQUNBLFFBQVEsOERBQW9CO0FBQzVCLG1CQUFtQixZQUFZO0FBQy9CLG1CQUFtQjtBQUNuQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN4WEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwyREFBVTtBQUN6QjtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2pldS1jcmFuZS8uL25vZGVfbW9kdWxlcy9tYXR0ZXItanMvYnVpbGQvbWF0dGVyLmpzIiwid2VicGFjazovL2pldS1jcmFuZS8uL3NyYy9HYW1lRW5naW5lL1dvcmxkL0dhbWVFbnRpdGllcy9Nb3ZlYWJsZS5qcyIsIndlYnBhY2s6Ly9qZXUtY3JhbmUvLi9zcmMvR2FtZUVuZ2luZS9Xb3JsZC9HYW1lRW50aXRpZXMvTW92ZWFibGVTdGFjay5qcyIsIndlYnBhY2s6Ly9qZXUtY3JhbmUvLi9zcmMvR2FtZUVuZ2luZS9jb3JlLmpzIiwid2VicGFjazovL2pldS1jcmFuZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZXUtY3JhbmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamV1LWNyYW5lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZXUtY3JhbmUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qZXUtY3JhbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZXUtY3JhbmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZXUtY3JhbmUvLi9zcmMvZW5naW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogbWF0dGVyLWpzIDAuMTguMCBieSBAbGlhYnJ1XG4gKiBodHRwOi8vYnJtLmlvL21hdHRlci1qcy9cbiAqIExpY2Vuc2UgTUlUXG4gKiBcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogXG4gKiBDb3B5cmlnaHQgKGMpIExpYW0gQnJ1bW1pdHQgYW5kIGNvbnRyaWJ1dG9ycy5cbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIk1hdHRlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJNYXR0ZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiTWF0dGVyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyMSk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5Db21tb25gIG1vZHVsZSBjb250YWlucyB1dGlsaXR5IGZ1bmN0aW9ucyB0aGF0IGFyZSBjb21tb24gdG8gYWxsIG1vZHVsZXMuXG4qXG4qIEBjbGFzcyBDb21tb25cbiovXG5cbnZhciBDb21tb24gPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb21tb247XG5cbihmdW5jdGlvbigpIHtcblxuICAgIENvbW1vbi5fbmV4dElkID0gMDtcbiAgICBDb21tb24uX3NlZWQgPSAwO1xuICAgIENvbW1vbi5fbm93U3RhcnRUaW1lID0gKyhuZXcgRGF0ZSgpKTtcbiAgICBDb21tb24uX3dhcm5lZE9uY2UgPSB7fTtcbiAgICBDb21tb24uX2RlY29tcCA9IG51bGw7XG4gICAgXG4gICAgLyoqXG4gICAgICogRXh0ZW5kcyB0aGUgb2JqZWN0IGluIHRoZSBmaXJzdCBhcmd1bWVudCB1c2luZyB0aGUgb2JqZWN0IGluIHRoZSBzZWNvbmQgYXJndW1lbnQuXG4gICAgICogQG1ldGhvZCBleHRlbmRcbiAgICAgKiBAcGFyYW0ge30gb2JqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBkZWVwXG4gICAgICogQHJldHVybiB7fSBvYmogZXh0ZW5kZWRcbiAgICAgKi9cbiAgICBDb21tb24uZXh0ZW5kID0gZnVuY3Rpb24ob2JqLCBkZWVwKSB7XG4gICAgICAgIHZhciBhcmdzU3RhcnQsXG4gICAgICAgICAgICBhcmdzLFxuICAgICAgICAgICAgZGVlcENsb25lO1xuXG4gICAgICAgIGlmICh0eXBlb2YgZGVlcCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBhcmdzU3RhcnQgPSAyO1xuICAgICAgICAgICAgZGVlcENsb25lID0gZGVlcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFyZ3NTdGFydCA9IDE7XG4gICAgICAgICAgICBkZWVwQ2xvbmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IGFyZ3NTdGFydDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gc291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWVwQ2xvbmUgJiYgc291cmNlW3Byb3BdICYmIHNvdXJjZVtwcm9wXS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9ialtwcm9wXSB8fCBvYmpbcHJvcF0uY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialtwcm9wXSA9IG9ialtwcm9wXSB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21tb24uZXh0ZW5kKG9ialtwcm9wXSwgZGVlcENsb25lLCBzb3VyY2VbcHJvcF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgY2xvbmUgb2YgdGhlIG9iamVjdCwgaWYgZGVlcCBpcyB0cnVlIHJlZmVyZW5jZXMgd2lsbCBhbHNvIGJlIGNsb25lZC5cbiAgICAgKiBAbWV0aG9kIGNsb25lXG4gICAgICogQHBhcmFtIHt9IG9ialxuICAgICAqIEBwYXJhbSB7Ym9vbH0gZGVlcFxuICAgICAqIEByZXR1cm4ge30gb2JqIGNsb25lZFxuICAgICAqL1xuICAgIENvbW1vbi5jbG9uZSA9IGZ1bmN0aW9uKG9iaiwgZGVlcCkge1xuICAgICAgICByZXR1cm4gQ29tbW9uLmV4dGVuZCh7fSwgZGVlcCwgb2JqKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGlzdCBvZiBrZXlzIGZvciB0aGUgZ2l2ZW4gb2JqZWN0LlxuICAgICAqIEBtZXRob2Qga2V5c1xuICAgICAqIEBwYXJhbSB7fSBvYmpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmdbXX0ga2V5c1xuICAgICAqL1xuICAgIENvbW1vbi5rZXlzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cylcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopO1xuXG4gICAgICAgIC8vIGF2b2lkIGhhc093blByb3BlcnR5IGZvciBwZXJmb3JtYW5jZVxuICAgICAgICB2YXIga2V5cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKVxuICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgIHJldHVybiBrZXlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsaXN0IG9mIHZhbHVlcyBmb3IgdGhlIGdpdmVuIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIHZhbHVlc1xuICAgICAqIEBwYXJhbSB7fSBvYmpcbiAgICAgKiBAcmV0dXJuIHthcnJheX0gQXJyYXkgb2YgdGhlIG9iamVjdHMgcHJvcGVydHkgdmFsdWVzXG4gICAgICovXG4gICAgQ29tbW9uLnZhbHVlcyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICAgIFxuICAgICAgICBpZiAoT2JqZWN0LmtleXMpIHtcbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKG9ialtrZXlzW2ldXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBhdm9pZCBoYXNPd25Qcm9wZXJ0eSBmb3IgcGVyZm9ybWFuY2VcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iailcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKG9ialtrZXldKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIHZhbHVlIGZyb20gYGJhc2VgIHJlbGF0aXZlIHRvIHRoZSBgcGF0aGAgc3RyaW5nLlxuICAgICAqIEBtZXRob2QgZ2V0XG4gICAgICogQHBhcmFtIHt9IG9iaiBUaGUgYmFzZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCByZWxhdGl2ZSB0byBgYmFzZWAsIGUuZy4gJ0Zvby5CYXIuYmF6J1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbYmVnaW5dIFBhdGggc2xpY2UgYmVnaW5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2VuZF0gUGF0aCBzbGljZSBlbmRcbiAgICAgKiBAcmV0dXJuIHt9IFRoZSBvYmplY3QgYXQgdGhlIGdpdmVuIHBhdGhcbiAgICAgKi9cbiAgICBDb21tb24uZ2V0ID0gZnVuY3Rpb24ob2JqLCBwYXRoLCBiZWdpbiwgZW5kKSB7XG4gICAgICAgIHBhdGggPSBwYXRoLnNwbGl0KCcuJykuc2xpY2UoYmVnaW4sIGVuZCk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBvYmogPSBvYmpbcGF0aFtpXV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGEgdmFsdWUgb24gYGJhc2VgIHJlbGF0aXZlIHRvIHRoZSBnaXZlbiBgcGF0aGAgc3RyaW5nLlxuICAgICAqIEBtZXRob2Qgc2V0XG4gICAgICogQHBhcmFtIHt9IG9iaiBUaGUgYmFzZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCByZWxhdGl2ZSB0byBgYmFzZWAsIGUuZy4gJ0Zvby5CYXIuYmF6J1xuICAgICAqIEBwYXJhbSB7fSB2YWwgVGhlIHZhbHVlIHRvIHNldFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbYmVnaW5dIFBhdGggc2xpY2UgYmVnaW5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2VuZF0gUGF0aCBzbGljZSBlbmRcbiAgICAgKiBAcmV0dXJuIHt9IFBhc3MgdGhyb3VnaCBgdmFsYCBmb3IgY2hhaW5pbmdcbiAgICAgKi9cbiAgICBDb21tb24uc2V0ID0gZnVuY3Rpb24ob2JqLCBwYXRoLCB2YWwsIGJlZ2luLCBlbmQpIHtcbiAgICAgICAgdmFyIHBhcnRzID0gcGF0aC5zcGxpdCgnLicpLnNsaWNlKGJlZ2luLCBlbmQpO1xuICAgICAgICBDb21tb24uZ2V0KG9iaiwgcGF0aCwgMCwgLTEpW3BhcnRzW3BhcnRzLmxlbmd0aCAtIDFdXSA9IHZhbDtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2h1ZmZsZXMgdGhlIGdpdmVuIGFycmF5IGluLXBsYWNlLlxuICAgICAqIFRoZSBmdW5jdGlvbiB1c2VzIGEgc2VlZGVkIHJhbmRvbSBnZW5lcmF0b3IuXG4gICAgICogQG1ldGhvZCBzaHVmZmxlXG4gICAgICogQHBhcmFtIHthcnJheX0gYXJyYXlcbiAgICAgKiBAcmV0dXJuIHthcnJheX0gYXJyYXkgc2h1ZmZsZWQgcmFuZG9tbHlcbiAgICAgKi9cbiAgICBDb21tb24uc2h1ZmZsZSA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgaiA9IE1hdGguZmxvb3IoQ29tbW9uLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgICAgICB2YXIgdGVtcCA9IGFycmF5W2ldO1xuICAgICAgICAgICAgYXJyYXlbaV0gPSBhcnJheVtqXTtcbiAgICAgICAgICAgIGFycmF5W2pdID0gdGVtcDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJhbmRvbWx5IGNob29zZXMgYSB2YWx1ZSBmcm9tIGEgbGlzdCB3aXRoIGVxdWFsIHByb2JhYmlsaXR5LlxuICAgICAqIFRoZSBmdW5jdGlvbiB1c2VzIGEgc2VlZGVkIHJhbmRvbSBnZW5lcmF0b3IuXG4gICAgICogQG1ldGhvZCBjaG9vc2VcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBjaG9pY2VzXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBBIHJhbmRvbSBjaG9pY2Ugb2JqZWN0IGZyb20gdGhlIGFycmF5XG4gICAgICovXG4gICAgQ29tbW9uLmNob29zZSA9IGZ1bmN0aW9uKGNob2ljZXMpIHtcbiAgICAgICAgcmV0dXJuIGNob2ljZXNbTWF0aC5mbG9vcihDb21tb24ucmFuZG9tKCkgKiBjaG9pY2VzLmxlbmd0aCldO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIG9iamVjdCBpcyBhIEhUTUxFbGVtZW50LCBvdGhlcndpc2UgZmFsc2UuXG4gICAgICogQG1ldGhvZCBpc0VsZW1lbnRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgSFRNTEVsZW1lbnQsIG90aGVyd2lzZSBmYWxzZVxuICAgICAqL1xuICAgIENvbW1vbi5pc0VsZW1lbnQgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgaWYgKHR5cGVvZiBIVE1MRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhIShvYmogJiYgb2JqLm5vZGVUeXBlICYmIG9iai5ub2RlTmFtZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGFuIGFycmF5LlxuICAgICAqIEBtZXRob2QgaXNBcnJheVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYW4gYXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICAgICAqL1xuICAgIENvbW1vbi5pc0FycmF5ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBvYmplY3QgaXMgYSBmdW5jdGlvbi5cbiAgICAgKiBAbWV0aG9kIGlzRnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgZnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICAgICAqL1xuICAgIENvbW1vbi5pc0Z1bmN0aW9uID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgcGxhaW4gb2JqZWN0LlxuICAgICAqIEBtZXRob2QgaXNQbGFpbk9iamVjdFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBwbGFpbiBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICAgICAqL1xuICAgIENvbW1vbi5pc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmouY29uc3RydWN0b3IgPT09IE9iamVjdDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBvYmplY3QgaXMgYSBzdHJpbmcuXG4gICAgICogQG1ldGhvZCBpc1N0cmluZ1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBzdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICAgICAqL1xuICAgIENvbW1vbi5pc1N0cmluZyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBTdHJpbmddJztcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGdpdmVuIHZhbHVlIGNsYW1wZWQgYmV0d2VlbiBhIG1pbmltdW0gYW5kIG1heGltdW0gdmFsdWUuXG4gICAgICogQG1ldGhvZCBjbGFtcFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4XG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgdmFsdWUgY2xhbXBlZCBiZXR3ZWVuIG1pbiBhbmQgbWF4IGluY2x1c2l2ZVxuICAgICAqL1xuICAgIENvbW1vbi5jbGFtcCA9IGZ1bmN0aW9uKHZhbHVlLCBtaW4sIG1heCkge1xuICAgICAgICBpZiAodmFsdWUgPCBtaW4pXG4gICAgICAgICAgICByZXR1cm4gbWluO1xuICAgICAgICBpZiAodmFsdWUgPiBtYXgpXG4gICAgICAgICAgICByZXR1cm4gbWF4O1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzaWduIG9mIHRoZSBnaXZlbiB2YWx1ZS5cbiAgICAgKiBAbWV0aG9kIHNpZ25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0xIGlmIG5lZ2F0aXZlLCArMSBpZiAwIG9yIHBvc2l0aXZlXG4gICAgICovXG4gICAgQ29tbW9uLnNpZ24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgPCAwID8gLTEgOiAxO1xuICAgIH07XG4gICAgXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCB0aW1lc3RhbXAgc2luY2UgdGhlIHRpbWUgb3JpZ2luIChlLmcuIGZyb20gcGFnZSBsb2FkKS5cbiAgICAgKiBUaGUgcmVzdWx0IGlzIGluIG1pbGxpc2Vjb25kcyBhbmQgd2lsbCB1c2UgaGlnaC1yZXNvbHV0aW9uIHRpbWluZyBpZiBhdmFpbGFibGUuXG4gICAgICogQG1ldGhvZCBub3dcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBjdXJyZW50IHRpbWVzdGFtcCBpbiBtaWxsaXNlY29uZHNcbiAgICAgKi9cbiAgICBDb21tb24ubm93ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucGVyZm9ybWFuY2UpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2Uubm93KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LnBlcmZvcm1hbmNlLndlYmtpdE5vdykge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cucGVyZm9ybWFuY2Uud2Via2l0Tm93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoRGF0ZS5ub3cpIHtcbiAgICAgICAgICAgIHJldHVybiBEYXRlLm5vdygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChuZXcgRGF0ZSgpKSAtIENvbW1vbi5fbm93U3RhcnRUaW1lO1xuICAgIH07XG4gICAgXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHJhbmRvbSB2YWx1ZSBiZXR3ZWVuIGEgbWluaW11bSBhbmQgYSBtYXhpbXVtIHZhbHVlIGluY2x1c2l2ZS5cbiAgICAgKiBUaGUgZnVuY3Rpb24gdXNlcyBhIHNlZWRlZCByYW5kb20gZ2VuZXJhdG9yLlxuICAgICAqIEBtZXRob2QgcmFuZG9tXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIG1pbiBhbmQgbWF4IGluY2x1c2l2ZVxuICAgICAqL1xuICAgIENvbW1vbi5yYW5kb20gPSBmdW5jdGlvbihtaW4sIG1heCkge1xuICAgICAgICBtaW4gPSAodHlwZW9mIG1pbiAhPT0gXCJ1bmRlZmluZWRcIikgPyBtaW4gOiAwO1xuICAgICAgICBtYXggPSAodHlwZW9mIG1heCAhPT0gXCJ1bmRlZmluZWRcIikgPyBtYXggOiAxO1xuICAgICAgICByZXR1cm4gbWluICsgX3NlZWRlZFJhbmRvbSgpICogKG1heCAtIG1pbik7XG4gICAgfTtcblxuICAgIHZhciBfc2VlZGVkUmFuZG9tID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xpbmVhcl9jb25ncnVlbnRpYWxfZ2VuZXJhdG9yXG4gICAgICAgIENvbW1vbi5fc2VlZCA9IChDb21tb24uX3NlZWQgKiA5MzAxICsgNDkyOTcpICUgMjMzMjgwO1xuICAgICAgICByZXR1cm4gQ29tbW9uLl9zZWVkIC8gMjMzMjgwO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIENTUyBoZXggY29sb3VyIHN0cmluZyBpbnRvIGFuIGludGVnZXIuXG4gICAgICogQG1ldGhvZCBjb2xvclRvTnVtYmVyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yU3RyaW5nXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBBbiBpbnRlZ2VyIHJlcHJlc2VudGluZyB0aGUgQ1NTIGhleCBzdHJpbmdcbiAgICAgKi9cbiAgICBDb21tb24uY29sb3JUb051bWJlciA9IGZ1bmN0aW9uKGNvbG9yU3RyaW5nKSB7XG4gICAgICAgIGNvbG9yU3RyaW5nID0gY29sb3JTdHJpbmcucmVwbGFjZSgnIycsJycpO1xuXG4gICAgICAgIGlmIChjb2xvclN0cmluZy5sZW5ndGggPT0gMykge1xuICAgICAgICAgICAgY29sb3JTdHJpbmcgPSBjb2xvclN0cmluZy5jaGFyQXQoMCkgKyBjb2xvclN0cmluZy5jaGFyQXQoMClcbiAgICAgICAgICAgICAgICAgICAgICAgICsgY29sb3JTdHJpbmcuY2hhckF0KDEpICsgY29sb3JTdHJpbmcuY2hhckF0KDEpXG4gICAgICAgICAgICAgICAgICAgICAgICArIGNvbG9yU3RyaW5nLmNoYXJBdCgyKSArIGNvbG9yU3RyaW5nLmNoYXJBdCgyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJzZUludChjb2xvclN0cmluZywgMTYpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29uc29sZSBsb2dnaW5nIGxldmVsIHRvIHVzZSwgd2hlcmUgZWFjaCBsZXZlbCBpbmNsdWRlcyBhbGwgbGV2ZWxzIGFib3ZlIGFuZCBleGNsdWRlcyB0aGUgbGV2ZWxzIGJlbG93LlxuICAgICAqIFRoZSBkZWZhdWx0IGxldmVsIGlzICdkZWJ1Zycgd2hpY2ggc2hvd3MgYWxsIGNvbnNvbGUgbWVzc2FnZXMuICBcbiAgICAgKlxuICAgICAqIFBvc3NpYmxlIGxldmVsIHZhbHVlcyBhcmU6XG4gICAgICogLSAwID0gTm9uZVxuICAgICAqIC0gMSA9IERlYnVnXG4gICAgICogLSAyID0gSW5mb1xuICAgICAqIC0gMyA9IFdhcm5cbiAgICAgKiAtIDQgPSBFcnJvclxuICAgICAqIEBwcm9wZXJ0eSBDb21tb24ubG9nTGV2ZWxcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cbiAgICBDb21tb24ubG9nTGV2ZWwgPSAxO1xuXG4gICAgLyoqXG4gICAgICogU2hvd3MgYSBgY29uc29sZS5sb2dgIG1lc3NhZ2Ugb25seSBpZiB0aGUgY3VycmVudCBgQ29tbW9uLmxvZ0xldmVsYCBhbGxvd3MgaXQuXG4gICAgICogVGhlIG1lc3NhZ2Ugd2lsbCBiZSBwcmVmaXhlZCB3aXRoICdtYXR0ZXItanMnIHRvIG1ha2UgaXQgZWFzaWx5IGlkZW50aWZpYWJsZS5cbiAgICAgKiBAbWV0aG9kIGxvZ1xuICAgICAqIEBwYXJhbSAuLi5vYmpzIHt9IFRoZSBvYmplY3RzIHRvIGxvZy5cbiAgICAgKi9cbiAgICBDb21tb24ubG9nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChjb25zb2xlICYmIENvbW1vbi5sb2dMZXZlbCA+IDAgJiYgQ29tbW9uLmxvZ0xldmVsIDw9IDMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIFsnbWF0dGVyLWpzOiddLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2hvd3MgYSBgY29uc29sZS5pbmZvYCBtZXNzYWdlIG9ubHkgaWYgdGhlIGN1cnJlbnQgYENvbW1vbi5sb2dMZXZlbGAgYWxsb3dzIGl0LlxuICAgICAqIFRoZSBtZXNzYWdlIHdpbGwgYmUgcHJlZml4ZWQgd2l0aCAnbWF0dGVyLWpzJyB0byBtYWtlIGl0IGVhc2lseSBpZGVudGlmaWFibGUuXG4gICAgICogQG1ldGhvZCBpbmZvXG4gICAgICogQHBhcmFtIC4uLm9ianMge30gVGhlIG9iamVjdHMgdG8gbG9nLlxuICAgICAqL1xuICAgIENvbW1vbi5pbmZvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChjb25zb2xlICYmIENvbW1vbi5sb2dMZXZlbCA+IDAgJiYgQ29tbW9uLmxvZ0xldmVsIDw9IDIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mby5hcHBseShjb25zb2xlLCBbJ21hdHRlci1qczonXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNob3dzIGEgYGNvbnNvbGUud2FybmAgbWVzc2FnZSBvbmx5IGlmIHRoZSBjdXJyZW50IGBDb21tb24ubG9nTGV2ZWxgIGFsbG93cyBpdC5cbiAgICAgKiBUaGUgbWVzc2FnZSB3aWxsIGJlIHByZWZpeGVkIHdpdGggJ21hdHRlci1qcycgdG8gbWFrZSBpdCBlYXNpbHkgaWRlbnRpZmlhYmxlLlxuICAgICAqIEBtZXRob2Qgd2FyblxuICAgICAqIEBwYXJhbSAuLi5vYmpzIHt9IFRoZSBvYmplY3RzIHRvIGxvZy5cbiAgICAgKi9cbiAgICBDb21tb24ud2FybiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoY29uc29sZSAmJiBDb21tb24ubG9nTGV2ZWwgPiAwICYmIENvbW1vbi5sb2dMZXZlbCA8PSAzKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4uYXBwbHkoY29uc29sZSwgWydtYXR0ZXItanM6J10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBVc2VzIGBDb21tb24ud2FybmAgdG8gbG9nIHRoZSBnaXZlbiBtZXNzYWdlIG9uZSB0aW1lIG9ubHkuXG4gICAgICogQG1ldGhvZCB3YXJuT25jZVxuICAgICAqIEBwYXJhbSAuLi5vYmpzIHt9IFRoZSBvYmplY3RzIHRvIGxvZy5cbiAgICAgKi9cbiAgICBDb21tb24ud2Fybk9uY2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLmpvaW4oJyAnKTtcblxuICAgICAgICBpZiAoIUNvbW1vbi5fd2FybmVkT25jZVttZXNzYWdlXSkge1xuICAgICAgICAgICAgQ29tbW9uLndhcm4obWVzc2FnZSk7XG4gICAgICAgICAgICBDb21tb24uX3dhcm5lZE9uY2VbbWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNob3dzIGEgZGVwcmVjYXRlZCBjb25zb2xlIHdhcm5pbmcgd2hlbiB0aGUgZnVuY3Rpb24gb24gdGhlIGdpdmVuIG9iamVjdCBpcyBjYWxsZWQuXG4gICAgICogVGhlIHRhcmdldCBmdW5jdGlvbiB3aWxsIGJlIHJlcGxhY2VkIHdpdGggYSBuZXcgZnVuY3Rpb24gdGhhdCBmaXJzdCBzaG93cyB0aGUgd2FybmluZ1xuICAgICAqIGFuZCB0aGVuIGNhbGxzIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cbiAgICAgKiBAbWV0aG9kIGRlcHJlY2F0ZWRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb2JqIFRoZSBvYmplY3Qgb3IgbW9kdWxlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIHByb3BlcnR5IG5hbWUgb2YgdGhlIGZ1bmN0aW9uIG9uIG9ialxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB3YXJuaW5nIFRoZSBvbmUtdGltZSBtZXNzYWdlIHRvIHNob3cgaWYgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZFxuICAgICAqL1xuICAgIENvbW1vbi5kZXByZWNhdGVkID0gZnVuY3Rpb24ob2JqLCBwcm9wLCB3YXJuaW5nKSB7XG4gICAgICAgIG9ialtwcm9wXSA9IENvbW1vbi5jaGFpbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIENvbW1vbi53YXJuT25jZSgn8J+UhSBkZXByZWNhdGVkIPCflIUnLCB3YXJuaW5nKTtcbiAgICAgICAgfSwgb2JqW3Byb3BdKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmV4dCB1bmlxdWUgc2VxdWVudGlhbCBJRC5cbiAgICAgKiBAbWV0aG9kIG5leHRJZFxuICAgICAqIEByZXR1cm4ge051bWJlcn0gVW5pcXVlIHNlcXVlbnRpYWwgSURcbiAgICAgKi9cbiAgICBDb21tb24ubmV4dElkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBDb21tb24uX25leHRJZCsrO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBIGNyb3NzIGJyb3dzZXIgY29tcGF0aWJsZSBpbmRleE9mIGltcGxlbWVudGF0aW9uLlxuICAgICAqIEBtZXRob2QgaW5kZXhPZlxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGhheXN0YWNrXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG5lZWRsZVxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIHBvc2l0aW9uIG9mIG5lZWRsZSBpbiBoYXlzdGFjaywgb3RoZXJ3aXNlIC0xLlxuICAgICAqL1xuICAgIENvbW1vbi5pbmRleE9mID0gZnVuY3Rpb24oaGF5c3RhY2ssIG5lZWRsZSkge1xuICAgICAgICBpZiAoaGF5c3RhY2suaW5kZXhPZilcbiAgICAgICAgICAgIHJldHVybiBoYXlzdGFjay5pbmRleE9mKG5lZWRsZSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYXlzdGFjay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGhheXN0YWNrW2ldID09PSBuZWVkbGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEEgY3Jvc3MgYnJvd3NlciBjb21wYXRpYmxlIGFycmF5IG1hcCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgKiBAbWV0aG9kIG1hcFxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGxpc3RcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jXG4gICAgICogQHJldHVybiB7YXJyYXl9IFZhbHVlcyBmcm9tIGxpc3QgdHJhbnNmb3JtZWQgYnkgZnVuYy5cbiAgICAgKi9cbiAgICBDb21tb24ubWFwID0gZnVuY3Rpb24obGlzdCwgZnVuYykge1xuICAgICAgICBpZiAobGlzdC5tYXApIHtcbiAgICAgICAgICAgIHJldHVybiBsaXN0Lm1hcChmdW5jKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtYXBwZWQgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIG1hcHBlZC5wdXNoKGZ1bmMobGlzdFtpXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hcHBlZDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGFrZXMgYSBkaXJlY3RlZCBncmFwaCBhbmQgcmV0dXJucyB0aGUgcGFydGlhbGx5IG9yZGVyZWQgc2V0IG9mIHZlcnRpY2VzIGluIHRvcG9sb2dpY2FsIG9yZGVyLlxuICAgICAqIENpcmN1bGFyIGRlcGVuZGVuY2llcyBhcmUgYWxsb3dlZC5cbiAgICAgKiBAbWV0aG9kIHRvcG9sb2dpY2FsU29ydFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBncmFwaFxuICAgICAqIEByZXR1cm4ge2FycmF5fSBQYXJ0aWFsbHkgb3JkZXJlZCBzZXQgb2YgdmVydGljZXMgaW4gdG9wb2xvZ2ljYWwgb3JkZXIuXG4gICAgICovXG4gICAgQ29tbW9uLnRvcG9sb2dpY2FsU29ydCA9IGZ1bmN0aW9uKGdyYXBoKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tZ2VjaGV2L2phdmFzY3JpcHQtYWxnb3JpdGhtc1xuICAgICAgICAvLyBDb3B5cmlnaHQgKGMpIE1pbmtvIEdlY2hldiAoTUlUIGxpY2Vuc2UpXG4gICAgICAgIC8vIE1vZGlmaWNhdGlvbnM6IHRpZHkgZm9ybWF0dGluZyBhbmQgbmFtaW5nXG4gICAgICAgIHZhciByZXN1bHQgPSBbXSxcbiAgICAgICAgICAgIHZpc2l0ZWQgPSBbXSxcbiAgICAgICAgICAgIHRlbXAgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBub2RlIGluIGdyYXBoKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2l0ZWRbbm9kZV0gJiYgIXRlbXBbbm9kZV0pIHtcbiAgICAgICAgICAgICAgICBDb21tb24uX3RvcG9sb2dpY2FsU29ydChub2RlLCB2aXNpdGVkLCB0ZW1wLCBncmFwaCwgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIENvbW1vbi5fdG9wb2xvZ2ljYWxTb3J0ID0gZnVuY3Rpb24obm9kZSwgdmlzaXRlZCwgdGVtcCwgZ3JhcGgsIHJlc3VsdCkge1xuICAgICAgICB2YXIgbmVpZ2hib3JzID0gZ3JhcGhbbm9kZV0gfHwgW107XG4gICAgICAgIHRlbXBbbm9kZV0gPSB0cnVlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmVpZ2hib3JzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgbmVpZ2hib3IgPSBuZWlnaGJvcnNbaV07XG5cbiAgICAgICAgICAgIGlmICh0ZW1wW25laWdoYm9yXSkge1xuICAgICAgICAgICAgICAgIC8vIHNraXAgY2lyY3VsYXIgZGVwZW5kZW5jaWVzXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdmlzaXRlZFtuZWlnaGJvcl0pIHtcbiAgICAgICAgICAgICAgICBDb21tb24uX3RvcG9sb2dpY2FsU29ydChuZWlnaGJvciwgdmlzaXRlZCwgdGVtcCwgZ3JhcGgsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0ZW1wW25vZGVdID0gZmFsc2U7XG4gICAgICAgIHZpc2l0ZWRbbm9kZV0gPSB0cnVlO1xuXG4gICAgICAgIHJlc3VsdC5wdXNoKG5vZGUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUYWtlcyBfbl8gZnVuY3Rpb25zIGFzIGFyZ3VtZW50cyBhbmQgcmV0dXJucyBhIG5ldyBmdW5jdGlvbiB0aGF0IGNhbGxzIHRoZW0gaW4gb3JkZXIuXG4gICAgICogVGhlIGFyZ3VtZW50cyBhcHBsaWVkIHdoZW4gY2FsbGluZyB0aGUgbmV3IGZ1bmN0aW9uIHdpbGwgYWxzbyBiZSBhcHBsaWVkIHRvIGV2ZXJ5IGZ1bmN0aW9uIHBhc3NlZC5cbiAgICAgKiBUaGUgdmFsdWUgb2YgYHRoaXNgIHJlZmVycyB0byB0aGUgbGFzdCB2YWx1ZSByZXR1cm5lZCBpbiB0aGUgY2hhaW4gdGhhdCB3YXMgbm90IGB1bmRlZmluZWRgLlxuICAgICAqIFRoZXJlZm9yZSBpZiBhIHBhc3NlZCBmdW5jdGlvbiBkb2VzIG5vdCByZXR1cm4gYSB2YWx1ZSwgdGhlIHByZXZpb3VzbHkgcmV0dXJuZWQgdmFsdWUgaXMgbWFpbnRhaW5lZC5cbiAgICAgKiBBZnRlciBhbGwgcGFzc2VkIGZ1bmN0aW9ucyBoYXZlIGJlZW4gY2FsbGVkIHRoZSBuZXcgZnVuY3Rpb24gcmV0dXJucyB0aGUgbGFzdCByZXR1cm5lZCB2YWx1ZSAoaWYgYW55KS5cbiAgICAgKiBJZiBhbnkgb2YgdGhlIHBhc3NlZCBmdW5jdGlvbnMgYXJlIGEgY2hhaW4sIHRoZW4gdGhlIGNoYWluIHdpbGwgYmUgZmxhdHRlbmVkLlxuICAgICAqIEBtZXRob2QgY2hhaW5cbiAgICAgKiBAcGFyYW0gLi4uZnVuY3Mge2Z1bmN0aW9ufSBUaGUgZnVuY3Rpb25zIHRvIGNoYWluLlxuICAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBBIG5ldyBmdW5jdGlvbiB0aGF0IGNhbGxzIHRoZSBwYXNzZWQgZnVuY3Rpb25zIGluIG9yZGVyLlxuICAgICAqL1xuICAgIENvbW1vbi5jaGFpbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZnVuY3MgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIGZ1bmMgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgICAgIGlmIChmdW5jLl9jaGFpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gZmxhdHRlbiBhbHJlYWR5IGNoYWluZWQgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgZnVuY3MucHVzaC5hcHBseShmdW5jcywgZnVuYy5fY2hhaW5lZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZ1bmNzLnB1c2goZnVuYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hhaW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvZGV2dG9vbHMtZG9jcy9pc3N1ZXMvNTMjaXNzdWVjb21tZW50LTUxOTQxMzU4XG4gICAgICAgICAgICB2YXIgbGFzdFJlc3VsdCxcbiAgICAgICAgICAgICAgICBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZnVuY3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gZnVuY3NbaV0uYXBwbHkobGFzdFJlc3VsdCwgYXJncyk7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdFJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNoYWluLl9jaGFpbmVkID0gZnVuY3M7XG5cbiAgICAgICAgcmV0dXJuIGNoYWluO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDaGFpbnMgYSBmdW5jdGlvbiB0byBleGN1dGUgYmVmb3JlIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBvbiB0aGUgZ2l2ZW4gYHBhdGhgIHJlbGF0aXZlIHRvIGBiYXNlYC5cbiAgICAgKiBTZWUgYWxzbyBkb2NzIGZvciBgQ29tbW9uLmNoYWluYC5cbiAgICAgKiBAbWV0aG9kIGNoYWluUGF0aEJlZm9yZVxuICAgICAqIEBwYXJhbSB7fSBiYXNlIFRoZSBiYXNlIG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHJlbGF0aXZlIHRvIGBiYXNlYFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoYWluIGJlZm9yZSB0aGUgb3JpZ2luYWxcbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gVGhlIGNoYWluZWQgZnVuY3Rpb24gdGhhdCByZXBsYWNlZCB0aGUgb3JpZ2luYWxcbiAgICAgKi9cbiAgICBDb21tb24uY2hhaW5QYXRoQmVmb3JlID0gZnVuY3Rpb24oYmFzZSwgcGF0aCwgZnVuYykge1xuICAgICAgICByZXR1cm4gQ29tbW9uLnNldChiYXNlLCBwYXRoLCBDb21tb24uY2hhaW4oXG4gICAgICAgICAgICBmdW5jLFxuICAgICAgICAgICAgQ29tbW9uLmdldChiYXNlLCBwYXRoKVxuICAgICAgICApKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2hhaW5zIGEgZnVuY3Rpb24gdG8gZXhjdXRlIGFmdGVyIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBvbiB0aGUgZ2l2ZW4gYHBhdGhgIHJlbGF0aXZlIHRvIGBiYXNlYC5cbiAgICAgKiBTZWUgYWxzbyBkb2NzIGZvciBgQ29tbW9uLmNoYWluYC5cbiAgICAgKiBAbWV0aG9kIGNoYWluUGF0aEFmdGVyXG4gICAgICogQHBhcmFtIHt9IGJhc2UgVGhlIGJhc2Ugb2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggcmVsYXRpdmUgdG8gYGJhc2VgXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hhaW4gYWZ0ZXIgdGhlIG9yaWdpbmFsXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb259IFRoZSBjaGFpbmVkIGZ1bmN0aW9uIHRoYXQgcmVwbGFjZWQgdGhlIG9yaWdpbmFsXG4gICAgICovXG4gICAgQ29tbW9uLmNoYWluUGF0aEFmdGVyID0gZnVuY3Rpb24oYmFzZSwgcGF0aCwgZnVuYykge1xuICAgICAgICByZXR1cm4gQ29tbW9uLnNldChiYXNlLCBwYXRoLCBDb21tb24uY2hhaW4oXG4gICAgICAgICAgICBDb21tb24uZ2V0KGJhc2UsIHBhdGgpLFxuICAgICAgICAgICAgZnVuY1xuICAgICAgICApKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHJvdmlkZSB0aGUgW3BvbHktZGVjb21wXShodHRwczovL2dpdGh1Yi5jb20vc2NodGVwcGUvcG9seS1kZWNvbXAuanMpIGxpYnJhcnkgbW9kdWxlIHRvIGVuYWJsZVxuICAgICAqIGNvbmNhdmUgdmVydGV4IGRlY29tcG9zaXRpb24gc3VwcG9ydCB3aGVuIHVzaW5nIGBCb2RpZXMuZnJvbVZlcnRpY2VzYCBlLmcuIGBDb21tb24uc2V0RGVjb21wKHJlcXVpcmUoJ3BvbHktZGVjb21wJykpYC5cbiAgICAgKiBAbWV0aG9kIHNldERlY29tcFxuICAgICAqIEBwYXJhbSB7fSBkZWNvbXAgVGhlIFtwb2x5LWRlY29tcF0oaHR0cHM6Ly9naXRodWIuY29tL3NjaHRlcHBlL3BvbHktZGVjb21wLmpzKSBsaWJyYXJ5IG1vZHVsZS5cbiAgICAgKi9cbiAgICBDb21tb24uc2V0RGVjb21wID0gZnVuY3Rpb24oZGVjb21wKSB7XG4gICAgICAgIENvbW1vbi5fZGVjb21wID0gZGVjb21wO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBbcG9seS1kZWNvbXBdKGh0dHBzOi8vZ2l0aHViLmNvbS9zY2h0ZXBwZS9wb2x5LWRlY29tcC5qcykgbGlicmFyeSBtb2R1bGUgcHJvdmlkZWQgdGhyb3VnaCBgQ29tbW9uLnNldERlY29tcGAsXG4gICAgICogb3RoZXJ3aXNlIHJldHVybnMgdGhlIGdsb2JhbCBgZGVjb21wYCBpZiBzZXQuXG4gICAgICogQG1ldGhvZCBnZXREZWNvbXBcbiAgICAgKiBAcmV0dXJuIHt9IFRoZSBbcG9seS1kZWNvbXBdKGh0dHBzOi8vZ2l0aHViLmNvbS9zY2h0ZXBwZS9wb2x5LWRlY29tcC5qcykgbGlicmFyeSBtb2R1bGUgaWYgcHJvdmlkZWQuXG4gICAgICovXG4gICAgQ29tbW9uLmdldERlY29tcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBnZXQgdXNlciBwcm92aWRlZCBkZWNvbXAgaWYgc2V0XG4gICAgICAgIHZhciBkZWNvbXAgPSBDb21tb24uX2RlY29tcDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGZyb20gd2luZG93IGdsb2JhbFxuICAgICAgICAgICAgaWYgKCFkZWNvbXAgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBkZWNvbXAgPSB3aW5kb3cuZGVjb21wO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGZyb20gbm9kZSBnbG9iYWxcbiAgICAgICAgICAgIGlmICghZGVjb21wICYmIHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgZGVjb21wID0gZ2xvYmFsLmRlY29tcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gZGVjb21wIG5vdCBhdmFpbGFibGVcbiAgICAgICAgICAgIGRlY29tcCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVjb21wO1xuICAgIH07XG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuQm91bmRzYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBheGlzLWFsaWduZWQgYm91bmRpbmcgYm94ZXMgKEFBQkIpLlxuKlxuKiBAY2xhc3MgQm91bmRzXG4qL1xuXG52YXIgQm91bmRzID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gQm91bmRzO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGF4aXMtYWxpZ25lZCBib3VuZGluZyBib3ggKEFBQkIpIGZvciB0aGUgZ2l2ZW4gdmVydGljZXMuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEByZXR1cm4ge2JvdW5kc30gQSBuZXcgYm91bmRzIG9iamVjdFxuICAgICAqL1xuICAgIEJvdW5kcy5jcmVhdGUgPSBmdW5jdGlvbih2ZXJ0aWNlcykge1xuICAgICAgICB2YXIgYm91bmRzID0geyBcbiAgICAgICAgICAgIG1pbjogeyB4OiAwLCB5OiAwIH0sIFxuICAgICAgICAgICAgbWF4OiB7IHg6IDAsIHk6IDAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh2ZXJ0aWNlcylcbiAgICAgICAgICAgIEJvdW5kcy51cGRhdGUoYm91bmRzLCB2ZXJ0aWNlcyk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYm91bmRzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGJvdW5kcyB1c2luZyB0aGUgZ2l2ZW4gdmVydGljZXMgYW5kIGV4dGVuZHMgdGhlIGJvdW5kcyBnaXZlbiBhIHZlbG9jaXR5LlxuICAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgICogQHBhcmFtIHtib3VuZHN9IGJvdW5kc1xuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlbG9jaXR5XG4gICAgICovXG4gICAgQm91bmRzLnVwZGF0ZSA9IGZ1bmN0aW9uKGJvdW5kcywgdmVydGljZXMsIHZlbG9jaXR5KSB7XG4gICAgICAgIGJvdW5kcy5taW4ueCA9IEluZmluaXR5O1xuICAgICAgICBib3VuZHMubWF4LnggPSAtSW5maW5pdHk7XG4gICAgICAgIGJvdW5kcy5taW4ueSA9IEluZmluaXR5O1xuICAgICAgICBib3VuZHMubWF4LnkgPSAtSW5maW5pdHk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHZlcnRleCA9IHZlcnRpY2VzW2ldO1xuICAgICAgICAgICAgaWYgKHZlcnRleC54ID4gYm91bmRzLm1heC54KSBib3VuZHMubWF4LnggPSB2ZXJ0ZXgueDtcbiAgICAgICAgICAgIGlmICh2ZXJ0ZXgueCA8IGJvdW5kcy5taW4ueCkgYm91bmRzLm1pbi54ID0gdmVydGV4Lng7XG4gICAgICAgICAgICBpZiAodmVydGV4LnkgPiBib3VuZHMubWF4LnkpIGJvdW5kcy5tYXgueSA9IHZlcnRleC55O1xuICAgICAgICAgICAgaWYgKHZlcnRleC55IDwgYm91bmRzLm1pbi55KSBib3VuZHMubWluLnkgPSB2ZXJ0ZXgueTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHZlbG9jaXR5KSB7XG4gICAgICAgICAgICBpZiAodmVsb2NpdHkueCA+IDApIHtcbiAgICAgICAgICAgICAgICBib3VuZHMubWF4LnggKz0gdmVsb2NpdHkueDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYm91bmRzLm1pbi54ICs9IHZlbG9jaXR5Lng7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh2ZWxvY2l0eS55ID4gMCkge1xuICAgICAgICAgICAgICAgIGJvdW5kcy5tYXgueSArPSB2ZWxvY2l0eS55O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBib3VuZHMubWluLnkgKz0gdmVsb2NpdHkueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGJvdW5kcyBjb250YWlucyB0aGUgZ2l2ZW4gcG9pbnQuXG4gICAgICogQG1ldGhvZCBjb250YWluc1xuICAgICAqIEBwYXJhbSB7Ym91bmRzfSBib3VuZHNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gcG9pbnRcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBib3VuZHMgY29udGFpbiB0aGUgcG9pbnQsIG90aGVyd2lzZSBmYWxzZVxuICAgICAqL1xuICAgIEJvdW5kcy5jb250YWlucyA9IGZ1bmN0aW9uKGJvdW5kcywgcG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50LnggPj0gYm91bmRzLm1pbi54ICYmIHBvaW50LnggPD0gYm91bmRzLm1heC54IFxuICAgICAgICAgICAgICAgJiYgcG9pbnQueSA+PSBib3VuZHMubWluLnkgJiYgcG9pbnQueSA8PSBib3VuZHMubWF4Lnk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdHdvIGJvdW5kcyBpbnRlcnNlY3QuXG4gICAgICogQG1ldGhvZCBvdmVybGFwc1xuICAgICAqIEBwYXJhbSB7Ym91bmRzfSBib3VuZHNBXG4gICAgICogQHBhcmFtIHtib3VuZHN9IGJvdW5kc0JcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBib3VuZHMgb3ZlcmxhcCwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgICovXG4gICAgQm91bmRzLm92ZXJsYXBzID0gZnVuY3Rpb24oYm91bmRzQSwgYm91bmRzQikge1xuICAgICAgICByZXR1cm4gKGJvdW5kc0EubWluLnggPD0gYm91bmRzQi5tYXgueCAmJiBib3VuZHNBLm1heC54ID49IGJvdW5kc0IubWluLnhcbiAgICAgICAgICAgICAgICAmJiBib3VuZHNBLm1heC55ID49IGJvdW5kc0IubWluLnkgJiYgYm91bmRzQS5taW4ueSA8PSBib3VuZHNCLm1heC55KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVHJhbnNsYXRlcyB0aGUgYm91bmRzIGJ5IHRoZSBnaXZlbiB2ZWN0b3IuXG4gICAgICogQG1ldGhvZCB0cmFuc2xhdGVcbiAgICAgKiBAcGFyYW0ge2JvdW5kc30gYm91bmRzXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqL1xuICAgIEJvdW5kcy50cmFuc2xhdGUgPSBmdW5jdGlvbihib3VuZHMsIHZlY3Rvcikge1xuICAgICAgICBib3VuZHMubWluLnggKz0gdmVjdG9yLng7XG4gICAgICAgIGJvdW5kcy5tYXgueCArPSB2ZWN0b3IueDtcbiAgICAgICAgYm91bmRzLm1pbi55ICs9IHZlY3Rvci55O1xuICAgICAgICBib3VuZHMubWF4LnkgKz0gdmVjdG9yLnk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNoaWZ0cyB0aGUgYm91bmRzIHRvIHRoZSBnaXZlbiBwb3NpdGlvbi5cbiAgICAgKiBAbWV0aG9kIHNoaWZ0XG4gICAgICogQHBhcmFtIHtib3VuZHN9IGJvdW5kc1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBwb3NpdGlvblxuICAgICAqL1xuICAgIEJvdW5kcy5zaGlmdCA9IGZ1bmN0aW9uKGJvdW5kcywgcG9zaXRpb24pIHtcbiAgICAgICAgdmFyIGRlbHRhWCA9IGJvdW5kcy5tYXgueCAtIGJvdW5kcy5taW4ueCxcbiAgICAgICAgICAgIGRlbHRhWSA9IGJvdW5kcy5tYXgueSAtIGJvdW5kcy5taW4ueTtcbiAgICAgICAgICAgIFxuICAgICAgICBib3VuZHMubWluLnggPSBwb3NpdGlvbi54O1xuICAgICAgICBib3VuZHMubWF4LnggPSBwb3NpdGlvbi54ICsgZGVsdGFYO1xuICAgICAgICBib3VuZHMubWluLnkgPSBwb3NpdGlvbi55O1xuICAgICAgICBib3VuZHMubWF4LnkgPSBwb3NpdGlvbi55ICsgZGVsdGFZO1xuICAgIH07XG4gICAgXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuVmVjdG9yYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyB2ZWN0b3JzLlxuKiBWZWN0b3JzIGFyZSB0aGUgYmFzaXMgb2YgYWxsIHRoZSBnZW9tZXRyeSByZWxhdGVkIG9wZXJhdGlvbnMgaW4gdGhlIGVuZ2luZS5cbiogQSBgTWF0dGVyLlZlY3RvcmAgb2JqZWN0IGlzIG9mIHRoZSBmb3JtIGB7IHg6IDAsIHk6IDAgfWAuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBWZWN0b3JcbiovXG5cbi8vIFRPRE86IGNvbnNpZGVyIHBhcmFtcyBmb3IgcmV1c2luZyB2ZWN0b3Igb2JqZWN0c1xuXG52YXIgVmVjdG9yID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gVmVjdG9yO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHZlY3Rvci5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IEEgbmV3IHZlY3RvclxuICAgICAqL1xuICAgIFZlY3Rvci5jcmVhdGUgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgICAgIHJldHVybiB7IHg6IHggfHwgMCwgeTogeSB8fCAwIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBuZXcgdmVjdG9yIHdpdGggYHhgIGFuZCBgeWAgY29waWVkIGZyb20gdGhlIGdpdmVuIGB2ZWN0b3JgLlxuICAgICAqIEBtZXRob2QgY2xvbmVcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICogQHJldHVybiB7dmVjdG9yfSBBIG5ldyBjbG9uZWQgdmVjdG9yXG4gICAgICovXG4gICAgVmVjdG9yLmNsb25lID0gZnVuY3Rpb24odmVjdG9yKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHZlY3Rvci54LCB5OiB2ZWN0b3IueSB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBtYWduaXR1ZGUgKGxlbmd0aCkgb2YgYSB2ZWN0b3IuXG4gICAgICogQG1ldGhvZCBtYWduaXR1ZGVcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgbWFnbml0dWRlIG9mIHRoZSB2ZWN0b3JcbiAgICAgKi9cbiAgICBWZWN0b3IubWFnbml0dWRlID0gZnVuY3Rpb24odmVjdG9yKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoKHZlY3Rvci54ICogdmVjdG9yLngpICsgKHZlY3Rvci55ICogdmVjdG9yLnkpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbWFnbml0dWRlIChsZW5ndGgpIG9mIGEgdmVjdG9yICh0aGVyZWZvcmUgc2F2aW5nIGEgYHNxcnRgIG9wZXJhdGlvbikuXG4gICAgICogQG1ldGhvZCBtYWduaXR1ZGVTcXVhcmVkXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIHNxdWFyZWQgbWFnbml0dWRlIG9mIHRoZSB2ZWN0b3JcbiAgICAgKi9cbiAgICBWZWN0b3IubWFnbml0dWRlU3F1YXJlZCA9IGZ1bmN0aW9uKHZlY3Rvcikge1xuICAgICAgICByZXR1cm4gKHZlY3Rvci54ICogdmVjdG9yLngpICsgKHZlY3Rvci55ICogdmVjdG9yLnkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSb3RhdGVzIHRoZSB2ZWN0b3IgYWJvdXQgKDAsIDApIGJ5IHNwZWNpZmllZCBhbmdsZS5cbiAgICAgKiBAbWV0aG9kIHJvdGF0ZVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYW5nbGVcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gW291dHB1dF1cbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IFRoZSB2ZWN0b3Igcm90YXRlZCBhYm91dCAoMCwgMClcbiAgICAgKi9cbiAgICBWZWN0b3Iucm90YXRlID0gZnVuY3Rpb24odmVjdG9yLCBhbmdsZSwgb3V0cHV0KSB7XG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhhbmdsZSksIHNpbiA9IE1hdGguc2luKGFuZ2xlKTtcbiAgICAgICAgaWYgKCFvdXRwdXQpIG91dHB1dCA9IHt9O1xuICAgICAgICB2YXIgeCA9IHZlY3Rvci54ICogY29zIC0gdmVjdG9yLnkgKiBzaW47XG4gICAgICAgIG91dHB1dC55ID0gdmVjdG9yLnggKiBzaW4gKyB2ZWN0b3IueSAqIGNvcztcbiAgICAgICAgb3V0cHV0LnggPSB4O1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSb3RhdGVzIHRoZSB2ZWN0b3IgYWJvdXQgYSBzcGVjaWZpZWQgcG9pbnQgYnkgc3BlY2lmaWVkIGFuZ2xlLlxuICAgICAqIEBtZXRob2Qgcm90YXRlQWJvdXRcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHBvaW50XG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IFtvdXRwdXRdXG4gICAgICogQHJldHVybiB7dmVjdG9yfSBBIG5ldyB2ZWN0b3Igcm90YXRlZCBhYm91dCB0aGUgcG9pbnRcbiAgICAgKi9cbiAgICBWZWN0b3Iucm90YXRlQWJvdXQgPSBmdW5jdGlvbih2ZWN0b3IsIGFuZ2xlLCBwb2ludCwgb3V0cHV0KSB7XG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhhbmdsZSksIHNpbiA9IE1hdGguc2luKGFuZ2xlKTtcbiAgICAgICAgaWYgKCFvdXRwdXQpIG91dHB1dCA9IHt9O1xuICAgICAgICB2YXIgeCA9IHBvaW50LnggKyAoKHZlY3Rvci54IC0gcG9pbnQueCkgKiBjb3MgLSAodmVjdG9yLnkgLSBwb2ludC55KSAqIHNpbik7XG4gICAgICAgIG91dHB1dC55ID0gcG9pbnQueSArICgodmVjdG9yLnggLSBwb2ludC54KSAqIHNpbiArICh2ZWN0b3IueSAtIHBvaW50LnkpICogY29zKTtcbiAgICAgICAgb3V0cHV0LnggPSB4O1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBOb3JtYWxpc2VzIGEgdmVjdG9yIChzdWNoIHRoYXQgaXRzIG1hZ25pdHVkZSBpcyBgMWApLlxuICAgICAqIEBtZXRob2Qgbm9ybWFsaXNlXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gQSBuZXcgdmVjdG9yIG5vcm1hbGlzZWRcbiAgICAgKi9cbiAgICBWZWN0b3Iubm9ybWFsaXNlID0gZnVuY3Rpb24odmVjdG9yKSB7XG4gICAgICAgIHZhciBtYWduaXR1ZGUgPSBWZWN0b3IubWFnbml0dWRlKHZlY3Rvcik7XG4gICAgICAgIGlmIChtYWduaXR1ZGUgPT09IDApXG4gICAgICAgICAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gICAgICAgIHJldHVybiB7IHg6IHZlY3Rvci54IC8gbWFnbml0dWRlLCB5OiB2ZWN0b3IueSAvIG1hZ25pdHVkZSB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBkb3QtcHJvZHVjdCBvZiB0d28gdmVjdG9ycy5cbiAgICAgKiBAbWV0aG9kIGRvdFxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JBXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBkb3QgcHJvZHVjdCBvZiB0aGUgdHdvIHZlY3RvcnNcbiAgICAgKi9cbiAgICBWZWN0b3IuZG90ID0gZnVuY3Rpb24odmVjdG9yQSwgdmVjdG9yQikge1xuICAgICAgICByZXR1cm4gKHZlY3RvckEueCAqIHZlY3RvckIueCkgKyAodmVjdG9yQS55ICogdmVjdG9yQi55KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3Jvc3MtcHJvZHVjdCBvZiB0d28gdmVjdG9ycy5cbiAgICAgKiBAbWV0aG9kIGNyb3NzXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckFcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGNyb3NzIHByb2R1Y3Qgb2YgdGhlIHR3byB2ZWN0b3JzXG4gICAgICovXG4gICAgVmVjdG9yLmNyb3NzID0gZnVuY3Rpb24odmVjdG9yQSwgdmVjdG9yQikge1xuICAgICAgICByZXR1cm4gKHZlY3RvckEueCAqIHZlY3RvckIueSkgLSAodmVjdG9yQS55ICogdmVjdG9yQi54KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3Jvc3MtcHJvZHVjdCBvZiB0aHJlZSB2ZWN0b3JzLlxuICAgICAqIEBtZXRob2QgY3Jvc3MzXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckFcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQlxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JDXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgY3Jvc3MgcHJvZHVjdCBvZiB0aGUgdGhyZWUgdmVjdG9yc1xuICAgICAqL1xuICAgIFZlY3Rvci5jcm9zczMgPSBmdW5jdGlvbih2ZWN0b3JBLCB2ZWN0b3JCLCB2ZWN0b3JDKSB7XG4gICAgICAgIHJldHVybiAodmVjdG9yQi54IC0gdmVjdG9yQS54KSAqICh2ZWN0b3JDLnkgLSB2ZWN0b3JBLnkpIC0gKHZlY3RvckIueSAtIHZlY3RvckEueSkgKiAodmVjdG9yQy54IC0gdmVjdG9yQS54KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgdHdvIHZlY3RvcnMuXG4gICAgICogQG1ldGhvZCBhZGRcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JCXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IFtvdXRwdXRdXG4gICAgICogQHJldHVybiB7dmVjdG9yfSBBIG5ldyB2ZWN0b3Igb2YgdmVjdG9yQSBhbmQgdmVjdG9yQiBhZGRlZFxuICAgICAqL1xuICAgIFZlY3Rvci5hZGQgPSBmdW5jdGlvbih2ZWN0b3JBLCB2ZWN0b3JCLCBvdXRwdXQpIHtcbiAgICAgICAgaWYgKCFvdXRwdXQpIG91dHB1dCA9IHt9O1xuICAgICAgICBvdXRwdXQueCA9IHZlY3RvckEueCArIHZlY3RvckIueDtcbiAgICAgICAgb3V0cHV0LnkgPSB2ZWN0b3JBLnkgKyB2ZWN0b3JCLnk7XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0aGUgdHdvIHZlY3RvcnMuXG4gICAgICogQG1ldGhvZCBzdWJcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JCXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IFtvdXRwdXRdXG4gICAgICogQHJldHVybiB7dmVjdG9yfSBBIG5ldyB2ZWN0b3Igb2YgdmVjdG9yQSBhbmQgdmVjdG9yQiBzdWJ0cmFjdGVkXG4gICAgICovXG4gICAgVmVjdG9yLnN1YiA9IGZ1bmN0aW9uKHZlY3RvckEsIHZlY3RvckIsIG91dHB1dCkge1xuICAgICAgICBpZiAoIW91dHB1dCkgb3V0cHV0ID0ge307XG4gICAgICAgIG91dHB1dC54ID0gdmVjdG9yQS54IC0gdmVjdG9yQi54O1xuICAgICAgICBvdXRwdXQueSA9IHZlY3RvckEueSAtIHZlY3RvckIueTtcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyBhIHZlY3RvciBhbmQgYSBzY2FsYXIuXG4gICAgICogQG1ldGhvZCBtdWx0XG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsYXJcbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IEEgbmV3IHZlY3RvciBtdWx0aXBsaWVkIGJ5IHNjYWxhclxuICAgICAqL1xuICAgIFZlY3Rvci5tdWx0ID0gZnVuY3Rpb24odmVjdG9yLCBzY2FsYXIpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdmVjdG9yLnggKiBzY2FsYXIsIHk6IHZlY3Rvci55ICogc2NhbGFyIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgYSB2ZWN0b3IgYW5kIGEgc2NhbGFyLlxuICAgICAqIEBtZXRob2QgZGl2XG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsYXJcbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IEEgbmV3IHZlY3RvciBkaXZpZGVkIGJ5IHNjYWxhclxuICAgICAqL1xuICAgIFZlY3Rvci5kaXYgPSBmdW5jdGlvbih2ZWN0b3IsIHNjYWxhcikge1xuICAgICAgICByZXR1cm4geyB4OiB2ZWN0b3IueCAvIHNjYWxhciwgeTogdmVjdG9yLnkgLyBzY2FsYXIgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcGVycGVuZGljdWxhciB2ZWN0b3IuIFNldCBgbmVnYXRlYCB0byB0cnVlIGZvciB0aGUgcGVycGVuZGljdWxhciBpbiB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uLlxuICAgICAqIEBtZXRob2QgcGVycFxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge2Jvb2x9IFtuZWdhdGU9ZmFsc2VdXG4gICAgICogQHJldHVybiB7dmVjdG9yfSBUaGUgcGVycGVuZGljdWxhciB2ZWN0b3JcbiAgICAgKi9cbiAgICBWZWN0b3IucGVycCA9IGZ1bmN0aW9uKHZlY3RvciwgbmVnYXRlKSB7XG4gICAgICAgIG5lZ2F0ZSA9IG5lZ2F0ZSA9PT0gdHJ1ZSA/IC0xIDogMTtcbiAgICAgICAgcmV0dXJuIHsgeDogbmVnYXRlICogLXZlY3Rvci55LCB5OiBuZWdhdGUgKiB2ZWN0b3IueCB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBOZWdhdGVzIGJvdGggY29tcG9uZW50cyBvZiBhIHZlY3RvciBzdWNoIHRoYXQgaXQgcG9pbnRzIGluIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24uXG4gICAgICogQG1ldGhvZCBuZWdcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICogQHJldHVybiB7dmVjdG9yfSBUaGUgbmVnYXRlZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBWZWN0b3IubmVnID0gZnVuY3Rpb24odmVjdG9yKSB7XG4gICAgICAgIHJldHVybiB7IHg6IC12ZWN0b3IueCwgeTogLXZlY3Rvci55IH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGFuZ2xlIGJldHdlZW4gdGhlIHZlY3RvciBgdmVjdG9yQiAtIHZlY3RvckFgIGFuZCB0aGUgeC1heGlzIGluIHJhZGlhbnMuXG4gICAgICogQG1ldGhvZCBhbmdsZVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JBXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhbmdsZSBpbiByYWRpYW5zXG4gICAgICovXG4gICAgVmVjdG9yLmFuZ2xlID0gZnVuY3Rpb24odmVjdG9yQSwgdmVjdG9yQikge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih2ZWN0b3JCLnkgLSB2ZWN0b3JBLnksIHZlY3RvckIueCAtIHZlY3RvckEueCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRlbXBvcmFyeSB2ZWN0b3IgcG9vbCAobm90IHRocmVhZC1zYWZlKS5cbiAgICAgKiBAcHJvcGVydHkgX3RlbXBcbiAgICAgKiBAdHlwZSB7dmVjdG9yW119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBWZWN0b3IuX3RlbXAgPSBbXG4gICAgICAgIFZlY3Rvci5jcmVhdGUoKSwgVmVjdG9yLmNyZWF0ZSgpLCBcbiAgICAgICAgVmVjdG9yLmNyZWF0ZSgpLCBWZWN0b3IuY3JlYXRlKCksIFxuICAgICAgICBWZWN0b3IuY3JlYXRlKCksIFZlY3Rvci5jcmVhdGUoKVxuICAgIF07XG5cbn0pKCk7XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuVmVydGljZXNgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIHNldHMgb2YgdmVydGljZXMuXG4qIEEgc2V0IG9mIHZlcnRpY2VzIGlzIGFuIGFycmF5IG9mIGBNYXR0ZXIuVmVjdG9yYCB3aXRoIGFkZGl0aW9uYWwgaW5kZXhpbmcgcHJvcGVydGllcyBpbnNlcnRlZCBieSBgVmVydGljZXMuY3JlYXRlYC5cbiogQSBgTWF0dGVyLkJvZHlgIG1haW50YWlucyBhIHNldCBvZiB2ZXJ0aWNlcyB0byByZXByZXNlbnQgdGhlIHNoYXBlIG9mIHRoZSBvYmplY3QgKGl0cyBjb252ZXggaHVsbCkuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBWZXJ0aWNlc1xuKi9cblxudmFyIFZlcnRpY2VzID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGljZXM7XG5cbnZhciBWZWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgc2V0IG9mIGBNYXR0ZXIuQm9keWAgY29tcGF0aWJsZSB2ZXJ0aWNlcy5cbiAgICAgKiBUaGUgYHBvaW50c2AgYXJndW1lbnQgYWNjZXB0cyBhbiBhcnJheSBvZiBgTWF0dGVyLlZlY3RvcmAgcG9pbnRzIG9yaWVudGF0ZWQgYXJvdW5kIHRoZSBvcmlnaW4gYCgwLCAwKWAsIGZvciBleGFtcGxlOlxuICAgICAqXG4gICAgICogICAgIFt7IHg6IDAsIHk6IDAgfSwgeyB4OiAyNSwgeTogNTAgfSwgeyB4OiA1MCwgeTogMCB9XVxuICAgICAqXG4gICAgICogVGhlIGBWZXJ0aWNlcy5jcmVhdGVgIG1ldGhvZCByZXR1cm5zIGEgbmV3IGFycmF5IG9mIHZlcnRpY2VzLCB3aGljaCBhcmUgc2ltaWxhciB0byBNYXR0ZXIuVmVjdG9yIG9iamVjdHMsXG4gICAgICogYnV0IHdpdGggc29tZSBhZGRpdGlvbmFsIHJlZmVyZW5jZXMgcmVxdWlyZWQgZm9yIGVmZmljaWVudCBjb2xsaXNpb24gZGV0ZWN0aW9uIHJvdXRpbmVzLlxuICAgICAqXG4gICAgICogVmVydGljZXMgbXVzdCBiZSBzcGVjaWZpZWQgaW4gY2xvY2t3aXNlIG9yZGVyLlxuICAgICAqXG4gICAgICogTm90ZSB0aGF0IHRoZSBgYm9keWAgYXJndW1lbnQgaXMgbm90IG9wdGlvbmFsLCBhIGBNYXR0ZXIuQm9keWAgcmVmZXJlbmNlIG11c3QgYmUgcHJvdmlkZWQuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7dmVjdG9yW119IHBvaW50c1xuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqL1xuICAgIFZlcnRpY2VzLmNyZWF0ZSA9IGZ1bmN0aW9uKHBvaW50cywgYm9keSkge1xuICAgICAgICB2YXIgdmVydGljZXMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBvaW50ID0gcG9pbnRzW2ldLFxuICAgICAgICAgICAgICAgIHZlcnRleCA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogcG9pbnQueCxcbiAgICAgICAgICAgICAgICAgICAgeTogcG9pbnQueSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGJvZHksXG4gICAgICAgICAgICAgICAgICAgIGlzSW50ZXJuYWw6IGZhbHNlXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmVydGljZXMucHVzaCh2ZXJ0ZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZlcnRpY2VzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgYSBzdHJpbmcgY29udGFpbmluZyBvcmRlcmVkIHggeSBwYWlycyBzZXBhcmF0ZWQgYnkgc3BhY2VzIChhbmQgb3B0aW9uYWxseSBjb21tYXMpLCBcbiAgICAgKiBpbnRvIGEgYE1hdHRlci5WZXJ0aWNlc2Agb2JqZWN0IGZvciB0aGUgZ2l2ZW4gYE1hdHRlci5Cb2R5YC5cbiAgICAgKiBGb3IgcGFyc2luZyBTVkcgcGF0aHMsIHNlZSBgU3ZnLnBhdGhUb1ZlcnRpY2VzYC5cbiAgICAgKiBAbWV0aG9kIGZyb21QYXRoXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcmV0dXJuIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5mcm9tUGF0aCA9IGZ1bmN0aW9uKHBhdGgsIGJvZHkpIHtcbiAgICAgICAgdmFyIHBhdGhQYXR0ZXJuID0gL0w/XFxzKihbLVxcZC5lXSspW1xccyxdKihbLVxcZC5lXSspKi9pZyxcbiAgICAgICAgICAgIHBvaW50cyA9IFtdO1xuXG4gICAgICAgIHBhdGgucmVwbGFjZShwYXRoUGF0dGVybiwgZnVuY3Rpb24obWF0Y2gsIHgsIHkpIHtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHsgeDogcGFyc2VGbG9hdCh4KSwgeTogcGFyc2VGbG9hdCh5KSB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIFZlcnRpY2VzLmNyZWF0ZShwb2ludHMsIGJvZHkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjZW50cmUgKGNlbnRyb2lkKSBvZiB0aGUgc2V0IG9mIHZlcnRpY2VzLlxuICAgICAqIEBtZXRob2QgY2VudHJlXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IFRoZSBjZW50cmUgcG9pbnRcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5jZW50cmUgPSBmdW5jdGlvbih2ZXJ0aWNlcykge1xuICAgICAgICB2YXIgYXJlYSA9IFZlcnRpY2VzLmFyZWEodmVydGljZXMsIHRydWUpLFxuICAgICAgICAgICAgY2VudHJlID0geyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICBjcm9zcyxcbiAgICAgICAgICAgIHRlbXAsXG4gICAgICAgICAgICBqO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGogPSAoaSArIDEpICUgdmVydGljZXMubGVuZ3RoO1xuICAgICAgICAgICAgY3Jvc3MgPSBWZWN0b3IuY3Jvc3ModmVydGljZXNbaV0sIHZlcnRpY2VzW2pdKTtcbiAgICAgICAgICAgIHRlbXAgPSBWZWN0b3IubXVsdChWZWN0b3IuYWRkKHZlcnRpY2VzW2ldLCB2ZXJ0aWNlc1tqXSksIGNyb3NzKTtcbiAgICAgICAgICAgIGNlbnRyZSA9IFZlY3Rvci5hZGQoY2VudHJlLCB0ZW1wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBWZWN0b3IuZGl2KGNlbnRyZSwgNiAqIGFyZWEpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBhdmVyYWdlIChtZWFuKSBvZiB0aGUgc2V0IG9mIHZlcnRpY2VzLlxuICAgICAqIEBtZXRob2QgbWVhblxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHJldHVybiB7dmVjdG9yfSBUaGUgYXZlcmFnZSBwb2ludFxuICAgICAqL1xuICAgIFZlcnRpY2VzLm1lYW4gPSBmdW5jdGlvbih2ZXJ0aWNlcykge1xuICAgICAgICB2YXIgYXZlcmFnZSA9IHsgeDogMCwgeTogMCB9O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGF2ZXJhZ2UueCArPSB2ZXJ0aWNlc1tpXS54O1xuICAgICAgICAgICAgYXZlcmFnZS55ICs9IHZlcnRpY2VzW2ldLnk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gVmVjdG9yLmRpdihhdmVyYWdlLCB2ZXJ0aWNlcy5sZW5ndGgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBhcmVhIG9mIHRoZSBzZXQgb2YgdmVydGljZXMuXG4gICAgICogQG1ldGhvZCBhcmVhXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcGFyYW0ge2Jvb2x9IHNpZ25lZFxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFyZWFcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5hcmVhID0gZnVuY3Rpb24odmVydGljZXMsIHNpZ25lZCkge1xuICAgICAgICB2YXIgYXJlYSA9IDAsXG4gICAgICAgICAgICBqID0gdmVydGljZXMubGVuZ3RoIC0gMTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmVhICs9ICh2ZXJ0aWNlc1tqXS54IC0gdmVydGljZXNbaV0ueCkgKiAodmVydGljZXNbal0ueSArIHZlcnRpY2VzW2ldLnkpO1xuICAgICAgICAgICAgaiA9IGk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2lnbmVkKVxuICAgICAgICAgICAgcmV0dXJuIGFyZWEgLyAyO1xuXG4gICAgICAgIHJldHVybiBNYXRoLmFicyhhcmVhKSAvIDI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG1vbWVudCBvZiBpbmVydGlhIChzZWNvbmQgbW9tZW50IG9mIGFyZWEpIG9mIHRoZSBzZXQgb2YgdmVydGljZXMgZ2l2ZW4gdGhlIHRvdGFsIG1hc3MuXG4gICAgICogQG1ldGhvZCBpbmVydGlhXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWFzc1xuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIHBvbHlnb24ncyBtb21lbnQgb2YgaW5lcnRpYVxuICAgICAqL1xuICAgIFZlcnRpY2VzLmluZXJ0aWEgPSBmdW5jdGlvbih2ZXJ0aWNlcywgbWFzcykge1xuICAgICAgICB2YXIgbnVtZXJhdG9yID0gMCxcbiAgICAgICAgICAgIGRlbm9taW5hdG9yID0gMCxcbiAgICAgICAgICAgIHYgPSB2ZXJ0aWNlcyxcbiAgICAgICAgICAgIGNyb3NzLFxuICAgICAgICAgICAgajtcblxuICAgICAgICAvLyBmaW5kIHRoZSBwb2x5Z29uJ3MgbW9tZW50IG9mIGluZXJ0aWEsIHVzaW5nIHNlY29uZCBtb21lbnQgb2YgYXJlYVxuICAgICAgICAvLyBmcm9tIGVxdWF0aW9ucyBhdCBodHRwOi8vd3d3LnBoeXNpY3Nmb3J1bXMuY29tL3Nob3d0aHJlYWQucGhwP3Q9MjUyOTNcbiAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCB2Lmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICBqID0gKG4gKyAxKSAlIHYubGVuZ3RoO1xuICAgICAgICAgICAgY3Jvc3MgPSBNYXRoLmFicyhWZWN0b3IuY3Jvc3ModltqXSwgdltuXSkpO1xuICAgICAgICAgICAgbnVtZXJhdG9yICs9IGNyb3NzICogKFZlY3Rvci5kb3QodltqXSwgdltqXSkgKyBWZWN0b3IuZG90KHZbal0sIHZbbl0pICsgVmVjdG9yLmRvdCh2W25dLCB2W25dKSk7XG4gICAgICAgICAgICBkZW5vbWluYXRvciArPSBjcm9zcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAobWFzcyAvIDYpICogKG51bWVyYXRvciAvIGRlbm9taW5hdG9yKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVHJhbnNsYXRlcyB0aGUgc2V0IG9mIHZlcnRpY2VzIGluLXBsYWNlLlxuICAgICAqIEBtZXRob2QgdHJhbnNsYXRlXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxhclxuICAgICAqL1xuICAgIFZlcnRpY2VzLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uKHZlcnRpY2VzLCB2ZWN0b3IsIHNjYWxhcikge1xuICAgICAgICBzY2FsYXIgPSB0eXBlb2Ygc2NhbGFyICE9PSAndW5kZWZpbmVkJyA/IHNjYWxhciA6IDE7XG5cbiAgICAgICAgdmFyIHZlcnRpY2VzTGVuZ3RoID0gdmVydGljZXMubGVuZ3RoLFxuICAgICAgICAgICAgdHJhbnNsYXRlWCA9IHZlY3Rvci54ICogc2NhbGFyLFxuICAgICAgICAgICAgdHJhbnNsYXRlWSA9IHZlY3Rvci55ICogc2NhbGFyLFxuICAgICAgICAgICAgaTtcbiAgICAgICAgXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB2ZXJ0aWNlc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2ZXJ0aWNlc1tpXS54ICs9IHRyYW5zbGF0ZVg7XG4gICAgICAgICAgICB2ZXJ0aWNlc1tpXS55ICs9IHRyYW5zbGF0ZVk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmVydGljZXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJvdGF0ZXMgdGhlIHNldCBvZiB2ZXJ0aWNlcyBpbi1wbGFjZS5cbiAgICAgKiBAbWV0aG9kIHJvdGF0ZVxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHBvaW50XG4gICAgICovXG4gICAgVmVydGljZXMucm90YXRlID0gZnVuY3Rpb24odmVydGljZXMsIGFuZ2xlLCBwb2ludCkge1xuICAgICAgICBpZiAoYW5nbGUgPT09IDApXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKGFuZ2xlKSxcbiAgICAgICAgICAgIHNpbiA9IE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgICAgIHBvaW50WCA9IHBvaW50LngsXG4gICAgICAgICAgICBwb2ludFkgPSBwb2ludC55LFxuICAgICAgICAgICAgdmVydGljZXNMZW5ndGggPSB2ZXJ0aWNlcy5sZW5ndGgsXG4gICAgICAgICAgICB2ZXJ0ZXgsXG4gICAgICAgICAgICBkeCxcbiAgICAgICAgICAgIGR5LFxuICAgICAgICAgICAgaTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdmVydGljZXNMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmVydGV4ID0gdmVydGljZXNbaV07XG4gICAgICAgICAgICBkeCA9IHZlcnRleC54IC0gcG9pbnRYO1xuICAgICAgICAgICAgZHkgPSB2ZXJ0ZXgueSAtIHBvaW50WTtcbiAgICAgICAgICAgIHZlcnRleC54ID0gcG9pbnRYICsgKGR4ICogY29zIC0gZHkgKiBzaW4pO1xuICAgICAgICAgICAgdmVydGV4LnkgPSBwb2ludFkgKyAoZHggKiBzaW4gKyBkeSAqIGNvcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmVydGljZXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBgcG9pbnRgIGlzIGluc2lkZSB0aGUgc2V0IG9mIGB2ZXJ0aWNlc2AuXG4gICAgICogQG1ldGhvZCBjb250YWluc1xuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHBvaW50XG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVydGljZXMgY29udGFpbnMgcG9pbnQsIG90aGVyd2lzZSBmYWxzZVxuICAgICAqL1xuICAgIFZlcnRpY2VzLmNvbnRhaW5zID0gZnVuY3Rpb24odmVydGljZXMsIHBvaW50KSB7XG4gICAgICAgIHZhciBwb2ludFggPSBwb2ludC54LFxuICAgICAgICAgICAgcG9pbnRZID0gcG9pbnQueSxcbiAgICAgICAgICAgIHZlcnRpY2VzTGVuZ3RoID0gdmVydGljZXMubGVuZ3RoLFxuICAgICAgICAgICAgdmVydGV4ID0gdmVydGljZXNbdmVydGljZXNMZW5ndGggLSAxXSxcbiAgICAgICAgICAgIG5leHRWZXJ0ZXg7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0aWNlc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuZXh0VmVydGV4ID0gdmVydGljZXNbaV07XG5cbiAgICAgICAgICAgIGlmICgocG9pbnRYIC0gdmVydGV4LngpICogKG5leHRWZXJ0ZXgueSAtIHZlcnRleC55KSBcbiAgICAgICAgICAgICAgICArIChwb2ludFkgLSB2ZXJ0ZXgueSkgKiAodmVydGV4LnggLSBuZXh0VmVydGV4LngpID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmVydGV4ID0gbmV4dFZlcnRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTY2FsZXMgdGhlIHZlcnRpY2VzIGZyb20gYSBwb2ludCAoZGVmYXVsdCBpcyBjZW50cmUpIGluLXBsYWNlLlxuICAgICAqIEBtZXRob2Qgc2NhbGVcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZVhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGVZXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHBvaW50XG4gICAgICovXG4gICAgVmVydGljZXMuc2NhbGUgPSBmdW5jdGlvbih2ZXJ0aWNlcywgc2NhbGVYLCBzY2FsZVksIHBvaW50KSB7XG4gICAgICAgIGlmIChzY2FsZVggPT09IDEgJiYgc2NhbGVZID09PSAxKVxuICAgICAgICAgICAgcmV0dXJuIHZlcnRpY2VzO1xuXG4gICAgICAgIHBvaW50ID0gcG9pbnQgfHwgVmVydGljZXMuY2VudHJlKHZlcnRpY2VzKTtcblxuICAgICAgICB2YXIgdmVydGV4LFxuICAgICAgICAgICAgZGVsdGE7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmVydGV4ID0gdmVydGljZXNbaV07XG4gICAgICAgICAgICBkZWx0YSA9IFZlY3Rvci5zdWIodmVydGV4LCBwb2ludCk7XG4gICAgICAgICAgICB2ZXJ0aWNlc1tpXS54ID0gcG9pbnQueCArIGRlbHRhLnggKiBzY2FsZVg7XG4gICAgICAgICAgICB2ZXJ0aWNlc1tpXS55ID0gcG9pbnQueSArIGRlbHRhLnkgKiBzY2FsZVk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmVydGljZXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENoYW1mZXJzIGEgc2V0IG9mIHZlcnRpY2VzIGJ5IGdpdmluZyB0aGVtIHJvdW5kZWQgY29ybmVycywgcmV0dXJucyBhIG5ldyBzZXQgb2YgdmVydGljZXMuXG4gICAgICogVGhlIHJhZGl1cyBwYXJhbWV0ZXIgaXMgYSBzaW5nbGUgbnVtYmVyIG9yIGFuIGFycmF5IHRvIHNwZWNpZnkgdGhlIHJhZGl1cyBmb3IgZWFjaCB2ZXJ0ZXguXG4gICAgICogQG1ldGhvZCBjaGFtZmVyXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcGFyYW0ge251bWJlcltdfSByYWRpdXNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcXVhbGl0eVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBxdWFsaXR5TWluXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHF1YWxpdHlNYXhcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5jaGFtZmVyID0gZnVuY3Rpb24odmVydGljZXMsIHJhZGl1cywgcXVhbGl0eSwgcXVhbGl0eU1pbiwgcXVhbGl0eU1heCkge1xuICAgICAgICBpZiAodHlwZW9mIHJhZGl1cyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHJhZGl1cyA9IFtyYWRpdXNdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmFkaXVzID0gcmFkaXVzIHx8IFs4XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHF1YWxpdHkgZGVmYXVsdHMgdG8gLTEsIHdoaWNoIGlzIGF1dG9cbiAgICAgICAgcXVhbGl0eSA9ICh0eXBlb2YgcXVhbGl0eSAhPT0gJ3VuZGVmaW5lZCcpID8gcXVhbGl0eSA6IC0xO1xuICAgICAgICBxdWFsaXR5TWluID0gcXVhbGl0eU1pbiB8fCAyO1xuICAgICAgICBxdWFsaXR5TWF4ID0gcXVhbGl0eU1heCB8fCAxNDtcblxuICAgICAgICB2YXIgbmV3VmVydGljZXMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcHJldlZlcnRleCA9IHZlcnRpY2VzW2kgLSAxID49IDAgPyBpIC0gMSA6IHZlcnRpY2VzLmxlbmd0aCAtIDFdLFxuICAgICAgICAgICAgICAgIHZlcnRleCA9IHZlcnRpY2VzW2ldLFxuICAgICAgICAgICAgICAgIG5leHRWZXJ0ZXggPSB2ZXJ0aWNlc1soaSArIDEpICUgdmVydGljZXMubGVuZ3RoXSxcbiAgICAgICAgICAgICAgICBjdXJyZW50UmFkaXVzID0gcmFkaXVzW2kgPCByYWRpdXMubGVuZ3RoID8gaSA6IHJhZGl1cy5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRSYWRpdXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICBuZXdWZXJ0aWNlcy5wdXNoKHZlcnRleCk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwcmV2Tm9ybWFsID0gVmVjdG9yLm5vcm1hbGlzZSh7IFxuICAgICAgICAgICAgICAgIHg6IHZlcnRleC55IC0gcHJldlZlcnRleC55LCBcbiAgICAgICAgICAgICAgICB5OiBwcmV2VmVydGV4LnggLSB2ZXJ0ZXgueFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciBuZXh0Tm9ybWFsID0gVmVjdG9yLm5vcm1hbGlzZSh7IFxuICAgICAgICAgICAgICAgIHg6IG5leHRWZXJ0ZXgueSAtIHZlcnRleC55LCBcbiAgICAgICAgICAgICAgICB5OiB2ZXJ0ZXgueCAtIG5leHRWZXJ0ZXgueFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciBkaWFnb25hbFJhZGl1cyA9IE1hdGguc3FydCgyICogTWF0aC5wb3coY3VycmVudFJhZGl1cywgMikpLFxuICAgICAgICAgICAgICAgIHJhZGl1c1ZlY3RvciA9IFZlY3Rvci5tdWx0KENvbW1vbi5jbG9uZShwcmV2Tm9ybWFsKSwgY3VycmVudFJhZGl1cyksXG4gICAgICAgICAgICAgICAgbWlkTm9ybWFsID0gVmVjdG9yLm5vcm1hbGlzZShWZWN0b3IubXVsdChWZWN0b3IuYWRkKHByZXZOb3JtYWwsIG5leHROb3JtYWwpLCAwLjUpKSxcbiAgICAgICAgICAgICAgICBzY2FsZWRWZXJ0ZXggPSBWZWN0b3Iuc3ViKHZlcnRleCwgVmVjdG9yLm11bHQobWlkTm9ybWFsLCBkaWFnb25hbFJhZGl1cykpO1xuXG4gICAgICAgICAgICB2YXIgcHJlY2lzaW9uID0gcXVhbGl0eTtcblxuICAgICAgICAgICAgaWYgKHF1YWxpdHkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8gYXV0b21hdGljYWxseSBkZWNpZGUgcHJlY2lzaW9uXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uID0gTWF0aC5wb3coY3VycmVudFJhZGl1cywgMC4zMikgKiAxLjc1O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmVjaXNpb24gPSBDb21tb24uY2xhbXAocHJlY2lzaW9uLCBxdWFsaXR5TWluLCBxdWFsaXR5TWF4KTtcblxuICAgICAgICAgICAgLy8gdXNlIGFuIGV2ZW4gdmFsdWUgZm9yIHByZWNpc2lvbiwgbW9yZSBsaWtlbHkgdG8gcmVkdWNlIGF4ZXMgYnkgdXNpbmcgc3ltbWV0cnlcbiAgICAgICAgICAgIGlmIChwcmVjaXNpb24gJSAyID09PSAxKVxuICAgICAgICAgICAgICAgIHByZWNpc2lvbiArPSAxO1xuXG4gICAgICAgICAgICB2YXIgYWxwaGEgPSBNYXRoLmFjb3MoVmVjdG9yLmRvdChwcmV2Tm9ybWFsLCBuZXh0Tm9ybWFsKSksXG4gICAgICAgICAgICAgICAgdGhldGEgPSBhbHBoYSAvIHByZWNpc2lvbjtcblxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwcmVjaXNpb247IGorKykge1xuICAgICAgICAgICAgICAgIG5ld1ZlcnRpY2VzLnB1c2goVmVjdG9yLmFkZChWZWN0b3Iucm90YXRlKHJhZGl1c1ZlY3RvciwgdGhldGEgKiBqKSwgc2NhbGVkVmVydGV4KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3VmVydGljZXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNvcnRzIHRoZSBpbnB1dCB2ZXJ0aWNlcyBpbnRvIGNsb2Nrd2lzZSBvcmRlciBpbiBwbGFjZS5cbiAgICAgKiBAbWV0aG9kIGNsb2Nrd2lzZVNvcnRcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEByZXR1cm4ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqL1xuICAgIFZlcnRpY2VzLmNsb2Nrd2lzZVNvcnQgPSBmdW5jdGlvbih2ZXJ0aWNlcykge1xuICAgICAgICB2YXIgY2VudHJlID0gVmVydGljZXMubWVhbih2ZXJ0aWNlcyk7XG5cbiAgICAgICAgdmVydGljZXMuc29ydChmdW5jdGlvbih2ZXJ0ZXhBLCB2ZXJ0ZXhCKSB7XG4gICAgICAgICAgICByZXR1cm4gVmVjdG9yLmFuZ2xlKGNlbnRyZSwgdmVydGV4QSkgLSBWZWN0b3IuYW5nbGUoY2VudHJlLCB2ZXJ0ZXhCKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHZlcnRpY2VzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZlcnRpY2VzIGZvcm0gYSBjb252ZXggc2hhcGUgKHZlcnRpY2VzIG11c3QgYmUgaW4gY2xvY2t3aXNlIG9yZGVyKS5cbiAgICAgKiBAbWV0aG9kIGlzQ29udmV4XG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcmV0dXJuIHtib29sfSBgdHJ1ZWAgaWYgdGhlIGB2ZXJ0aWNlc2AgYXJlIGNvbnZleCwgYGZhbHNlYCBpZiBub3QgKG9yIGBudWxsYCBpZiBub3QgY29tcHV0YWJsZSkuXG4gICAgICovXG4gICAgVmVydGljZXMuaXNDb252ZXggPSBmdW5jdGlvbih2ZXJ0aWNlcykge1xuICAgICAgICAvLyBodHRwOi8vcGF1bGJvdXJrZS5uZXQvZ2VvbWV0cnkvcG9seWdvbm1lc2gvXG4gICAgICAgIC8vIENvcHlyaWdodCAoYykgUGF1bCBCb3Vya2UgKHVzZSBwZXJtaXR0ZWQpXG5cbiAgICAgICAgdmFyIGZsYWcgPSAwLFxuICAgICAgICAgICAgbiA9IHZlcnRpY2VzLmxlbmd0aCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqLFxuICAgICAgICAgICAgayxcbiAgICAgICAgICAgIHo7XG5cbiAgICAgICAgaWYgKG4gPCAzKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgaiA9IChpICsgMSkgJSBuO1xuICAgICAgICAgICAgayA9IChpICsgMikgJSBuO1xuICAgICAgICAgICAgeiA9ICh2ZXJ0aWNlc1tqXS54IC0gdmVydGljZXNbaV0ueCkgKiAodmVydGljZXNba10ueSAtIHZlcnRpY2VzW2pdLnkpO1xuICAgICAgICAgICAgeiAtPSAodmVydGljZXNbal0ueSAtIHZlcnRpY2VzW2ldLnkpICogKHZlcnRpY2VzW2tdLnggLSB2ZXJ0aWNlc1tqXS54KTtcblxuICAgICAgICAgICAgaWYgKHogPCAwKSB7XG4gICAgICAgICAgICAgICAgZmxhZyB8PSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh6ID4gMCkge1xuICAgICAgICAgICAgICAgIGZsYWcgfD0gMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZsYWcgPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmxhZyAhPT0gMCl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNvbnZleCBodWxsIG9mIHRoZSBpbnB1dCB2ZXJ0aWNlcyBhcyBhIG5ldyBhcnJheSBvZiBwb2ludHMuXG4gICAgICogQG1ldGhvZCBodWxsXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcmV0dXJuIFt2ZXJ0ZXhdIHZlcnRpY2VzXG4gICAgICovXG4gICAgVmVydGljZXMuaHVsbCA9IGZ1bmN0aW9uKHZlcnRpY2VzKSB7XG4gICAgICAgIC8vIGh0dHA6Ly9nZW9tYWxnb3JpdGhtcy5jb20vYTEwLV9odWxsLTEuaHRtbFxuXG4gICAgICAgIHZhciB1cHBlciA9IFtdLFxuICAgICAgICAgICAgbG93ZXIgPSBbXSwgXG4gICAgICAgICAgICB2ZXJ0ZXgsXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIC8vIHNvcnQgdmVydGljZXMgb24geC1heGlzICh5LWF4aXMgZm9yIHRpZXMpXG4gICAgICAgIHZlcnRpY2VzID0gdmVydGljZXMuc2xpY2UoMCk7XG4gICAgICAgIHZlcnRpY2VzLnNvcnQoZnVuY3Rpb24odmVydGV4QSwgdmVydGV4Qikge1xuICAgICAgICAgICAgdmFyIGR4ID0gdmVydGV4QS54IC0gdmVydGV4Qi54O1xuICAgICAgICAgICAgcmV0dXJuIGR4ICE9PSAwID8gZHggOiB2ZXJ0ZXhBLnkgLSB2ZXJ0ZXhCLnk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGJ1aWxkIGxvd2VyIGh1bGxcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2ZXJ0ZXggPSB2ZXJ0aWNlc1tpXTtcblxuICAgICAgICAgICAgd2hpbGUgKGxvd2VyLmxlbmd0aCA+PSAyIFxuICAgICAgICAgICAgICAgICAgICYmIFZlY3Rvci5jcm9zczMobG93ZXJbbG93ZXIubGVuZ3RoIC0gMl0sIGxvd2VyW2xvd2VyLmxlbmd0aCAtIDFdLCB2ZXJ0ZXgpIDw9IDApIHtcbiAgICAgICAgICAgICAgICBsb3dlci5wb3AoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbG93ZXIucHVzaCh2ZXJ0ZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYnVpbGQgdXBwZXIgaHVsbFxuICAgICAgICBmb3IgKGkgPSB2ZXJ0aWNlcy5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgICAgICAgdmVydGV4ID0gdmVydGljZXNbaV07XG5cbiAgICAgICAgICAgIHdoaWxlICh1cHBlci5sZW5ndGggPj0gMiBcbiAgICAgICAgICAgICAgICAgICAmJiBWZWN0b3IuY3Jvc3MzKHVwcGVyW3VwcGVyLmxlbmd0aCAtIDJdLCB1cHBlclt1cHBlci5sZW5ndGggLSAxXSwgdmVydGV4KSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdXBwZXIucG9wKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVwcGVyLnB1c2godmVydGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbmNhdGVuYXRpb24gb2YgdGhlIGxvd2VyIGFuZCB1cHBlciBodWxscyBnaXZlcyB0aGUgY29udmV4IGh1bGxcbiAgICAgICAgLy8gb21pdCBsYXN0IHBvaW50cyBiZWNhdXNlIHRoZXkgYXJlIHJlcGVhdGVkIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIG90aGVyIGxpc3RcbiAgICAgICAgdXBwZXIucG9wKCk7XG4gICAgICAgIGxvd2VyLnBvcCgpO1xuXG4gICAgICAgIHJldHVybiB1cHBlci5jb25jYXQobG93ZXIpO1xuICAgIH07XG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5FdmVudHNgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIHRvIGZpcmUgYW5kIGxpc3RlbiB0byBldmVudHMgb24gb3RoZXIgb2JqZWN0cy5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIEV2ZW50c1xuKi9cblxudmFyIEV2ZW50cyA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50cztcblxudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZXMgYSBjYWxsYmFjayBmdW5jdGlvbiB0byB0aGUgZ2l2ZW4gb2JqZWN0J3MgYGV2ZW50TmFtZWAuXG4gICAgICogQG1ldGhvZCBvblxuICAgICAqIEBwYXJhbSB7fSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lc1xuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgRXZlbnRzLm9uID0gZnVuY3Rpb24ob2JqZWN0LCBldmVudE5hbWVzLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgbmFtZXMgPSBldmVudE5hbWVzLnNwbGl0KCcgJyksXG4gICAgICAgICAgICBuYW1lO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lc1tpXTtcbiAgICAgICAgICAgIG9iamVjdC5ldmVudHMgPSBvYmplY3QuZXZlbnRzIHx8IHt9O1xuICAgICAgICAgICAgb2JqZWN0LmV2ZW50c1tuYW1lXSA9IG9iamVjdC5ldmVudHNbbmFtZV0gfHwgW107XG4gICAgICAgICAgICBvYmplY3QuZXZlbnRzW25hbWVdLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBnaXZlbiBldmVudCBjYWxsYmFjay4gSWYgbm8gY2FsbGJhY2ssIGNsZWFycyBhbGwgY2FsbGJhY2tzIGluIGBldmVudE5hbWVzYC4gSWYgbm8gYGV2ZW50TmFtZXNgLCBjbGVhcnMgYWxsIGV2ZW50cy5cbiAgICAgKiBAbWV0aG9kIG9mZlxuICAgICAqIEBwYXJhbSB7fSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lc1xuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgRXZlbnRzLm9mZiA9IGZ1bmN0aW9uKG9iamVjdCwgZXZlbnROYW1lcywgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFldmVudE5hbWVzKSB7XG4gICAgICAgICAgICBvYmplY3QuZXZlbnRzID0ge307XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYW5kbGUgRXZlbnRzLm9mZihvYmplY3QsIGNhbGxiYWNrKVxuICAgICAgICBpZiAodHlwZW9mIGV2ZW50TmFtZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gZXZlbnROYW1lcztcbiAgICAgICAgICAgIGV2ZW50TmFtZXMgPSBDb21tb24ua2V5cyhvYmplY3QuZXZlbnRzKS5qb2luKCcgJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmFtZXMgPSBldmVudE5hbWVzLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrcyA9IG9iamVjdC5ldmVudHNbbmFtZXNbaV1dLFxuICAgICAgICAgICAgICAgIG5ld0NhbGxiYWNrcyA9IFtdO1xuXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgY2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjYWxsYmFja3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrc1tqXSAhPT0gY2FsbGJhY2spXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDYWxsYmFja3MucHVzaChjYWxsYmFja3Nbal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb2JqZWN0LmV2ZW50c1tuYW1lc1tpXV0gPSBuZXdDYWxsYmFja3M7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRmlyZXMgYWxsIHRoZSBjYWxsYmFja3Mgc3Vic2NyaWJlZCB0byB0aGUgZ2l2ZW4gb2JqZWN0J3MgYGV2ZW50TmFtZWAsIGluIHRoZSBvcmRlciB0aGV5IHN1YnNjcmliZWQsIGlmIGFueS5cbiAgICAgKiBAbWV0aG9kIHRyaWdnZXJcbiAgICAgKiBAcGFyYW0ge30gb2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZXNcbiAgICAgKiBAcGFyYW0ge30gZXZlbnRcbiAgICAgKi9cbiAgICBFdmVudHMudHJpZ2dlciA9IGZ1bmN0aW9uKG9iamVjdCwgZXZlbnROYW1lcywgZXZlbnQpIHtcbiAgICAgICAgdmFyIG5hbWVzLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGNhbGxiYWNrcyxcbiAgICAgICAgICAgIGV2ZW50Q2xvbmU7XG5cbiAgICAgICAgdmFyIGV2ZW50cyA9IG9iamVjdC5ldmVudHM7XG4gICAgICAgIFxuICAgICAgICBpZiAoZXZlbnRzICYmIENvbW1vbi5rZXlzKGV2ZW50cykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKCFldmVudClcbiAgICAgICAgICAgICAgICBldmVudCA9IHt9O1xuXG4gICAgICAgICAgICBuYW1lcyA9IGV2ZW50TmFtZXMuc3BsaXQoJyAnKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG5hbWUgPSBuYW1lc1tpXTtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MgPSBldmVudHNbbmFtZV07XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50Q2xvbmUgPSBDb21tb24uY2xvbmUoZXZlbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRDbG9uZS5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRDbG9uZS5zb3VyY2UgPSBvYmplY3Q7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjYWxsYmFja3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrc1tqXS5hcHBseShvYmplY3QsIFtldmVudENsb25lXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogQSBjb21wb3NpdGUgaXMgYSBjb2xsZWN0aW9uIG9mIGBNYXR0ZXIuQm9keWAsIGBNYXR0ZXIuQ29uc3RyYWludGAgYW5kIG90aGVyIGBNYXR0ZXIuQ29tcG9zaXRlYCBvYmplY3RzLlxuKlxuKiBUaGV5IGFyZSBhIGNvbnRhaW5lciB0aGF0IGNhbiByZXByZXNlbnQgY29tcGxleCBvYmplY3RzIG1hZGUgb2YgbXVsdGlwbGUgcGFydHMsIGV2ZW4gaWYgdGhleSBhcmUgbm90IHBoeXNpY2FsbHkgY29ubmVjdGVkLlxuKiBBIGNvbXBvc2l0ZSBjb3VsZCBjb250YWluIGFueXRoaW5nIGZyb20gYSBzaW5nbGUgYm9keSBhbGwgdGhlIHdheSB1cCB0byBhIHdob2xlIHdvcmxkLlxuKiBcbiogV2hlbiBtYWtpbmcgYW55IGNoYW5nZXMgdG8gY29tcG9zaXRlcywgdXNlIHRoZSBpbmNsdWRlZCBmdW5jdGlvbnMgcmF0aGVyIHRoYW4gY2hhbmdpbmcgdGhlaXIgcHJvcGVydGllcyBkaXJlY3RseS5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIENvbXBvc2l0ZVxuKi9cblxudmFyIENvbXBvc2l0ZSA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvc2l0ZTtcblxudmFyIEV2ZW50cyA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBCb3VuZHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xudmFyIEJvZHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGNvbXBvc2l0ZS4gVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBhbnkgcHJvcGVydGllcyB5b3Ugd2lzaCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHMuXG4gICAgICogU2VlIHRoZSBwcm9wZXJpdGVzIHNlY3Rpb24gYmVsb3cgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7fSBbb3B0aW9uc11cbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IEEgbmV3IGNvbXBvc2l0ZVxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBDb21tb24uZXh0ZW5kKHsgXG4gICAgICAgICAgICBpZDogQ29tbW9uLm5leHRJZCgpLFxuICAgICAgICAgICAgdHlwZTogJ2NvbXBvc2l0ZScsXG4gICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICBpc01vZGlmaWVkOiBmYWxzZSxcbiAgICAgICAgICAgIGJvZGllczogW10sIFxuICAgICAgICAgICAgY29uc3RyYWludHM6IFtdLCBcbiAgICAgICAgICAgIGNvbXBvc2l0ZXM6IFtdLFxuICAgICAgICAgICAgbGFiZWw6ICdDb21wb3NpdGUnLFxuICAgICAgICAgICAgcGx1Z2luOiB7fSxcbiAgICAgICAgICAgIGNhY2hlOiB7XG4gICAgICAgICAgICAgICAgYWxsQm9kaWVzOiBudWxsLFxuICAgICAgICAgICAgICAgIGFsbENvbnN0cmFpbnRzOiBudWxsLFxuICAgICAgICAgICAgICAgIGFsbENvbXBvc2l0ZXM6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGNvbXBvc2l0ZSdzIGBpc01vZGlmaWVkYCBmbGFnLiBcbiAgICAgKiBJZiBgdXBkYXRlUGFyZW50c2AgaXMgdHJ1ZSwgYWxsIHBhcmVudHMgd2lsbCBiZSBzZXQgKGRlZmF1bHQ6IGZhbHNlKS5cbiAgICAgKiBJZiBgdXBkYXRlQ2hpbGRyZW5gIGlzIHRydWUsIGFsbCBjaGlsZHJlbiB3aWxsIGJlIHNldCAoZGVmYXVsdDogZmFsc2UpLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBzZXRNb2RpZmllZFxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzTW9kaWZpZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt1cGRhdGVQYXJlbnRzPWZhbHNlXVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3VwZGF0ZUNoaWxkcmVuPWZhbHNlXVxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZCA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgaXNNb2RpZmllZCwgdXBkYXRlUGFyZW50cywgdXBkYXRlQ2hpbGRyZW4pIHtcbiAgICAgICAgY29tcG9zaXRlLmlzTW9kaWZpZWQgPSBpc01vZGlmaWVkO1xuXG4gICAgICAgIGlmIChpc01vZGlmaWVkICYmIGNvbXBvc2l0ZS5jYWNoZSkge1xuICAgICAgICAgICAgY29tcG9zaXRlLmNhY2hlLmFsbEJvZGllcyA9IG51bGw7XG4gICAgICAgICAgICBjb21wb3NpdGUuY2FjaGUuYWxsQ29uc3RyYWludHMgPSBudWxsO1xuICAgICAgICAgICAgY29tcG9zaXRlLmNhY2hlLmFsbENvbXBvc2l0ZXMgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVwZGF0ZVBhcmVudHMgJiYgY29tcG9zaXRlLnBhcmVudCkge1xuICAgICAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZS5wYXJlbnQsIGlzTW9kaWZpZWQsIHVwZGF0ZVBhcmVudHMsIHVwZGF0ZUNoaWxkcmVuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1cGRhdGVDaGlsZHJlbikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb3NpdGUuY29tcG9zaXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZENvbXBvc2l0ZSA9IGNvbXBvc2l0ZS5jb21wb3NpdGVzW2ldO1xuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjaGlsZENvbXBvc2l0ZSwgaXNNb2RpZmllZCwgdXBkYXRlUGFyZW50cywgdXBkYXRlQ2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdlbmVyaWMgc2luZ2xlIG9yIG11bHRpLWFkZCBmdW5jdGlvbi4gQWRkcyBhIHNpbmdsZSBvciBhbiBhcnJheSBvZiBib2R5KHMpLCBjb25zdHJhaW50KHMpIG9yIGNvbXBvc2l0ZShzKSB0byB0aGUgZ2l2ZW4gY29tcG9zaXRlLlxuICAgICAqIFRyaWdnZXJzIGBiZWZvcmVBZGRgIGFuZCBgYWZ0ZXJBZGRgIGV2ZW50cyBvbiB0aGUgYGNvbXBvc2l0ZWAuXG4gICAgICogQG1ldGhvZCBhZGRcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtvYmplY3R8YXJyYXl9IG9iamVjdCBBIHNpbmdsZSBvciBhbiBhcnJheSBvZiBib2R5KHMpLCBjb25zdHJhaW50KHMpIG9yIGNvbXBvc2l0ZShzKVxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIGNvbXBvc2l0ZSB3aXRoIHRoZSBvYmplY3RzIGFkZGVkXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmFkZCA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgb2JqZWN0KSB7XG4gICAgICAgIHZhciBvYmplY3RzID0gW10uY29uY2F0KG9iamVjdCk7XG5cbiAgICAgICAgRXZlbnRzLnRyaWdnZXIoY29tcG9zaXRlLCAnYmVmb3JlQWRkJywgeyBvYmplY3Q6IG9iamVjdCB9KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBvYmogPSBvYmplY3RzW2ldO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKG9iai50eXBlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ2JvZHknOlxuICAgICAgICAgICAgICAgIC8vIHNraXAgYWRkaW5nIGNvbXBvdW5kIHBhcnRzXG4gICAgICAgICAgICAgICAgaWYgKG9iai5wYXJlbnQgIT09IG9iaikge1xuICAgICAgICAgICAgICAgICAgICBDb21tb24ud2FybignQ29tcG9zaXRlLmFkZDogc2tpcHBlZCBhZGRpbmcgYSBjb21wb3VuZCBib2R5IHBhcnQgKHlvdSBtdXN0IGFkZCBpdHMgcGFyZW50IGluc3RlYWQpJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRCb2R5KGNvbXBvc2l0ZSwgb2JqKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NvbnN0cmFpbnQnOlxuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50KGNvbXBvc2l0ZSwgb2JqKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NvbXBvc2l0ZSc6XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLmFkZENvbXBvc2l0ZShjb21wb3NpdGUsIG9iaik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtb3VzZUNvbnN0cmFpbnQnOlxuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50KGNvbXBvc2l0ZSwgb2JqLmNvbnN0cmFpbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBFdmVudHMudHJpZ2dlcihjb21wb3NpdGUsICdhZnRlckFkZCcsIHsgb2JqZWN0OiBvYmplY3QgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2VuZXJpYyByZW1vdmUgZnVuY3Rpb24uIFJlbW92ZXMgb25lIG9yIG1hbnkgYm9keShzKSwgY29uc3RyYWludChzKSBvciBhIGNvbXBvc2l0ZShzKSB0byB0aGUgZ2l2ZW4gY29tcG9zaXRlLlxuICAgICAqIE9wdGlvbmFsbHkgc2VhcmNoaW5nIGl0cyBjaGlsZHJlbiByZWN1cnNpdmVseS5cbiAgICAgKiBUcmlnZ2VycyBgYmVmb3JlUmVtb3ZlYCBhbmQgYGFmdGVyUmVtb3ZlYCBldmVudHMgb24gdGhlIGBjb21wb3NpdGVgLlxuICAgICAqIEBtZXRob2QgcmVtb3ZlXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtkZWVwPWZhbHNlXVxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIGNvbXBvc2l0ZSB3aXRoIHRoZSBvYmplY3RzIHJlbW92ZWRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUucmVtb3ZlID0gZnVuY3Rpb24oY29tcG9zaXRlLCBvYmplY3QsIGRlZXApIHtcbiAgICAgICAgdmFyIG9iamVjdHMgPSBbXS5jb25jYXQob2JqZWN0KTtcblxuICAgICAgICBFdmVudHMudHJpZ2dlcihjb21wb3NpdGUsICdiZWZvcmVSZW1vdmUnLCB7IG9iamVjdDogb2JqZWN0IH0pO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG9iaiA9IG9iamVjdHNbaV07XG5cbiAgICAgICAgICAgIHN3aXRjaCAob2JqLnR5cGUpIHtcblxuICAgICAgICAgICAgY2FzZSAnYm9keSc6XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLnJlbW92ZUJvZHkoY29tcG9zaXRlLCBvYmosIGRlZXApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY29uc3RyYWludCc6XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLnJlbW92ZUNvbnN0cmFpbnQoY29tcG9zaXRlLCBvYmosIGRlZXApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY29tcG9zaXRlJzpcbiAgICAgICAgICAgICAgICBDb21wb3NpdGUucmVtb3ZlQ29tcG9zaXRlKGNvbXBvc2l0ZSwgb2JqLCBkZWVwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21vdXNlQ29uc3RyYWludCc6XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLnJlbW92ZUNvbnN0cmFpbnQoY29tcG9zaXRlLCBvYmouY29uc3RyYWludCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKGNvbXBvc2l0ZSwgJ2FmdGVyUmVtb3ZlJywgeyBvYmplY3Q6IG9iamVjdCB9KTtcblxuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgY29tcG9zaXRlIHRvIHRoZSBnaXZlbiBjb21wb3NpdGUuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGFkZENvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVBXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZUJcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBvcmlnaW5hbCBjb21wb3NpdGVBIHdpdGggdGhlIG9iamVjdHMgZnJvbSBjb21wb3NpdGVCIGFkZGVkXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmFkZENvbXBvc2l0ZSA9IGZ1bmN0aW9uKGNvbXBvc2l0ZUEsIGNvbXBvc2l0ZUIpIHtcbiAgICAgICAgY29tcG9zaXRlQS5jb21wb3NpdGVzLnB1c2goY29tcG9zaXRlQik7XG4gICAgICAgIGNvbXBvc2l0ZUIucGFyZW50ID0gY29tcG9zaXRlQTtcbiAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZUEsIHRydWUsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZUE7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBjb21wb3NpdGUgZnJvbSB0aGUgZ2l2ZW4gY29tcG9zaXRlLCBhbmQgb3B0aW9uYWxseSBzZWFyY2hpbmcgaXRzIGNoaWxkcmVuIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCByZW1vdmVDb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlQVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVCXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZGVlcD1mYWxzZV1cbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBvcmlnaW5hbCBjb21wb3NpdGVBIHdpdGggdGhlIGNvbXBvc2l0ZSByZW1vdmVkXG4gICAgICovXG4gICAgQ29tcG9zaXRlLnJlbW92ZUNvbXBvc2l0ZSA9IGZ1bmN0aW9uKGNvbXBvc2l0ZUEsIGNvbXBvc2l0ZUIsIGRlZXApIHtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gQ29tbW9uLmluZGV4T2YoY29tcG9zaXRlQS5jb21wb3NpdGVzLCBjb21wb3NpdGVCKTtcbiAgICAgICAgaWYgKHBvc2l0aW9uICE9PSAtMSkge1xuICAgICAgICAgICAgQ29tcG9zaXRlLnJlbW92ZUNvbXBvc2l0ZUF0KGNvbXBvc2l0ZUEsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZWVwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbXBvc2l0ZUEuY29tcG9zaXRlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLnJlbW92ZUNvbXBvc2l0ZShjb21wb3NpdGVBLmNvbXBvc2l0ZXNbaV0sIGNvbXBvc2l0ZUIsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZUE7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBjb21wb3NpdGUgZnJvbSB0aGUgZ2l2ZW4gY29tcG9zaXRlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCByZW1vdmVDb21wb3NpdGVBdFxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcG9zaXRpb25cbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBvcmlnaW5hbCBjb21wb3NpdGUgd2l0aCB0aGUgY29tcG9zaXRlIHJlbW92ZWRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUucmVtb3ZlQ29tcG9zaXRlQXQgPSBmdW5jdGlvbihjb21wb3NpdGUsIHBvc2l0aW9uKSB7XG4gICAgICAgIGNvbXBvc2l0ZS5jb21wb3NpdGVzLnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjb21wb3NpdGUsIHRydWUsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIGJvZHkgdG8gdGhlIGdpdmVuIGNvbXBvc2l0ZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgYWRkQm9keVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBvcmlnaW5hbCBjb21wb3NpdGUgd2l0aCB0aGUgYm9keSBhZGRlZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5hZGRCb2R5ID0gZnVuY3Rpb24oY29tcG9zaXRlLCBib2R5KSB7XG4gICAgICAgIGNvbXBvc2l0ZS5ib2RpZXMucHVzaChib2R5KTtcbiAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgYm9keSBmcm9tIHRoZSBnaXZlbiBjb21wb3NpdGUsIGFuZCBvcHRpb25hbGx5IHNlYXJjaGluZyBpdHMgY2hpbGRyZW4gcmVjdXJzaXZlbHkuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHJlbW92ZUJvZHlcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZGVlcD1mYWxzZV1cbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBvcmlnaW5hbCBjb21wb3NpdGUgd2l0aCB0aGUgYm9keSByZW1vdmVkXG4gICAgICovXG4gICAgQ29tcG9zaXRlLnJlbW92ZUJvZHkgPSBmdW5jdGlvbihjb21wb3NpdGUsIGJvZHksIGRlZXApIHtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gQ29tbW9uLmluZGV4T2YoY29tcG9zaXRlLmJvZGllcywgYm9keSk7XG4gICAgICAgIGlmIChwb3NpdGlvbiAhPT0gLTEpIHtcbiAgICAgICAgICAgIENvbXBvc2l0ZS5yZW1vdmVCb2R5QXQoY29tcG9zaXRlLCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVlcCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb3NpdGUuY29tcG9zaXRlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLnJlbW92ZUJvZHkoY29tcG9zaXRlLmNvbXBvc2l0ZXNbaV0sIGJvZHksIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGJvZHkgZnJvbSB0aGUgZ2l2ZW4gY29tcG9zaXRlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCByZW1vdmVCb2R5QXRcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlIHdpdGggdGhlIGJvZHkgcmVtb3ZlZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5yZW1vdmVCb2R5QXQgPSBmdW5jdGlvbihjb21wb3NpdGUsIHBvc2l0aW9uKSB7XG4gICAgICAgIGNvbXBvc2l0ZS5ib2RpZXMuc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgY29uc3RyYWludCB0byB0aGUgZ2l2ZW4gY29tcG9zaXRlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBhZGRDb25zdHJhaW50XG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7Y29uc3RyYWludH0gY29uc3RyYWludFxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIGNvbXBvc2l0ZSB3aXRoIHRoZSBjb25zdHJhaW50IGFkZGVkXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQgPSBmdW5jdGlvbihjb21wb3NpdGUsIGNvbnN0cmFpbnQpIHtcbiAgICAgICAgY29tcG9zaXRlLmNvbnN0cmFpbnRzLnB1c2goY29uc3RyYWludCk7XG4gICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjb21wb3NpdGUsIHRydWUsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGNvbnN0cmFpbnQgZnJvbSB0aGUgZ2l2ZW4gY29tcG9zaXRlLCBhbmQgb3B0aW9uYWxseSBzZWFyY2hpbmcgaXRzIGNoaWxkcmVuIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCByZW1vdmVDb25zdHJhaW50XG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7Y29uc3RyYWludH0gY29uc3RyYWludFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2RlZXA9ZmFsc2VdXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlIHdpdGggdGhlIGNvbnN0cmFpbnQgcmVtb3ZlZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5yZW1vdmVDb25zdHJhaW50ID0gZnVuY3Rpb24oY29tcG9zaXRlLCBjb25zdHJhaW50LCBkZWVwKSB7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IENvbW1vbi5pbmRleE9mKGNvbXBvc2l0ZS5jb25zdHJhaW50cywgY29uc3RyYWludCk7XG4gICAgICAgIGlmIChwb3NpdGlvbiAhPT0gLTEpIHtcbiAgICAgICAgICAgIENvbXBvc2l0ZS5yZW1vdmVDb25zdHJhaW50QXQoY29tcG9zaXRlLCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVlcCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb3NpdGUuY29tcG9zaXRlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLnJlbW92ZUNvbnN0cmFpbnQoY29tcG9zaXRlLmNvbXBvc2l0ZXNbaV0sIGNvbnN0cmFpbnQsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGJvZHkgZnJvbSB0aGUgZ2l2ZW4gY29tcG9zaXRlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCByZW1vdmVDb25zdHJhaW50QXRcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlIHdpdGggdGhlIGNvbnN0cmFpbnQgcmVtb3ZlZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5yZW1vdmVDb25zdHJhaW50QXQgPSBmdW5jdGlvbihjb21wb3NpdGUsIHBvc2l0aW9uKSB7XG4gICAgICAgIGNvbXBvc2l0ZS5jb25zdHJhaW50cy5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgICAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQoY29tcG9zaXRlLCB0cnVlLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIGJvZGllcywgY29uc3RyYWludHMgYW5kIGNvbXBvc2l0ZXMgZnJvbSB0aGUgZ2l2ZW4gY29tcG9zaXRlLlxuICAgICAqIE9wdGlvbmFsbHkgY2xlYXJpbmcgaXRzIGNoaWxkcmVuIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEBtZXRob2QgY2xlYXJcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBrZWVwU3RhdGljXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZGVlcD1mYWxzZV1cbiAgICAgKi9cbiAgICBDb21wb3NpdGUuY2xlYXIgPSBmdW5jdGlvbihjb21wb3NpdGUsIGtlZXBTdGF0aWMsIGRlZXApIHtcbiAgICAgICAgaWYgKGRlZXApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tcG9zaXRlLmNvbXBvc2l0ZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5jbGVhcihjb21wb3NpdGUuY29tcG9zaXRlc1tpXSwga2VlcFN0YXRpYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChrZWVwU3RhdGljKSB7XG4gICAgICAgICAgICBjb21wb3NpdGUuYm9kaWVzID0gY29tcG9zaXRlLmJvZGllcy5maWx0ZXIoZnVuY3Rpb24oYm9keSkgeyByZXR1cm4gYm9keS5pc1N0YXRpYzsgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb21wb3NpdGUuYm9kaWVzLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb3NpdGUuY29uc3RyYWludHMubGVuZ3RoID0gMDtcbiAgICAgICAgY29tcG9zaXRlLmNvbXBvc2l0ZXMubGVuZ3RoID0gMDtcblxuICAgICAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQoY29tcG9zaXRlLCB0cnVlLCB0cnVlLCBmYWxzZSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgYm9kaWVzIGluIHRoZSBnaXZlbiBjb21wb3NpdGUsIGluY2x1ZGluZyBhbGwgYm9kaWVzIGluIGl0cyBjaGlsZHJlbiwgcmVjdXJzaXZlbHkuXG4gICAgICogQG1ldGhvZCBhbGxCb2RpZXNcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHJldHVybiB7Ym9keVtdfSBBbGwgdGhlIGJvZGllc1xuICAgICAqL1xuICAgIENvbXBvc2l0ZS5hbGxCb2RpZXMgPSBmdW5jdGlvbihjb21wb3NpdGUpIHtcbiAgICAgICAgaWYgKGNvbXBvc2l0ZS5jYWNoZSAmJiBjb21wb3NpdGUuY2FjaGUuYWxsQm9kaWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9zaXRlLmNhY2hlLmFsbEJvZGllcztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBib2RpZXMgPSBbXS5jb25jYXQoY29tcG9zaXRlLmJvZGllcyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb3NpdGUuY29tcG9zaXRlcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIGJvZGllcyA9IGJvZGllcy5jb25jYXQoQ29tcG9zaXRlLmFsbEJvZGllcyhjb21wb3NpdGUuY29tcG9zaXRlc1tpXSkpO1xuXG4gICAgICAgIGlmIChjb21wb3NpdGUuY2FjaGUpIHtcbiAgICAgICAgICAgIGNvbXBvc2l0ZS5jYWNoZS5hbGxCb2RpZXMgPSBib2RpZXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYm9kaWVzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBjb25zdHJhaW50cyBpbiB0aGUgZ2l2ZW4gY29tcG9zaXRlLCBpbmNsdWRpbmcgYWxsIGNvbnN0cmFpbnRzIGluIGl0cyBjaGlsZHJlbiwgcmVjdXJzaXZlbHkuXG4gICAgICogQG1ldGhvZCBhbGxDb25zdHJhaW50c1xuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcmV0dXJuIHtjb25zdHJhaW50W119IEFsbCB0aGUgY29uc3RyYWludHNcbiAgICAgKi9cbiAgICBDb21wb3NpdGUuYWxsQ29uc3RyYWludHMgPSBmdW5jdGlvbihjb21wb3NpdGUpIHtcbiAgICAgICAgaWYgKGNvbXBvc2l0ZS5jYWNoZSAmJiBjb21wb3NpdGUuY2FjaGUuYWxsQ29uc3RyYWludHMpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wb3NpdGUuY2FjaGUuYWxsQ29uc3RyYWludHM7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29uc3RyYWludHMgPSBbXS5jb25jYXQoY29tcG9zaXRlLmNvbnN0cmFpbnRzKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbXBvc2l0ZS5jb21wb3NpdGVzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgY29uc3RyYWludHMgPSBjb25zdHJhaW50cy5jb25jYXQoQ29tcG9zaXRlLmFsbENvbnN0cmFpbnRzKGNvbXBvc2l0ZS5jb21wb3NpdGVzW2ldKSk7XG5cbiAgICAgICAgaWYgKGNvbXBvc2l0ZS5jYWNoZSkge1xuICAgICAgICAgICAgY29tcG9zaXRlLmNhY2hlLmFsbENvbnN0cmFpbnRzID0gY29uc3RyYWludHM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29uc3RyYWludHM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIGNvbXBvc2l0ZXMgaW4gdGhlIGdpdmVuIGNvbXBvc2l0ZSwgaW5jbHVkaW5nIGFsbCBjb21wb3NpdGVzIGluIGl0cyBjaGlsZHJlbiwgcmVjdXJzaXZlbHkuXG4gICAgICogQG1ldGhvZCBhbGxDb21wb3NpdGVzXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZVtdfSBBbGwgdGhlIGNvbXBvc2l0ZXNcbiAgICAgKi9cbiAgICBDb21wb3NpdGUuYWxsQ29tcG9zaXRlcyA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSkge1xuICAgICAgICBpZiAoY29tcG9zaXRlLmNhY2hlICYmIGNvbXBvc2l0ZS5jYWNoZS5hbGxDb21wb3NpdGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9zaXRlLmNhY2hlLmFsbENvbXBvc2l0ZXM7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29tcG9zaXRlcyA9IFtdLmNvbmNhdChjb21wb3NpdGUuY29tcG9zaXRlcyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb3NpdGUuY29tcG9zaXRlcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIGNvbXBvc2l0ZXMgPSBjb21wb3NpdGVzLmNvbmNhdChDb21wb3NpdGUuYWxsQ29tcG9zaXRlcyhjb21wb3NpdGUuY29tcG9zaXRlc1tpXSkpO1xuXG4gICAgICAgIGlmIChjb21wb3NpdGUuY2FjaGUpIHtcbiAgICAgICAgICAgIGNvbXBvc2l0ZS5jYWNoZS5hbGxDb21wb3NpdGVzID0gY29tcG9zaXRlcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGVzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZWFyY2hlcyB0aGUgY29tcG9zaXRlIHJlY3Vyc2l2ZWx5IGZvciBhbiBvYmplY3QgbWF0Y2hpbmcgdGhlIHR5cGUgYW5kIGlkIHN1cHBsaWVkLCBudWxsIGlmIG5vdCBmb3VuZC5cbiAgICAgKiBAbWV0aG9kIGdldFxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgICAqIEByZXR1cm4ge29iamVjdH0gVGhlIHJlcXVlc3RlZCBvYmplY3QsIGlmIGZvdW5kXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmdldCA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgaWQsIHR5cGUpIHtcbiAgICAgICAgdmFyIG9iamVjdHMsXG4gICAgICAgICAgICBvYmplY3Q7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2JvZHknOlxuICAgICAgICAgICAgb2JqZWN0cyA9IENvbXBvc2l0ZS5hbGxCb2RpZXMoY29tcG9zaXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjb25zdHJhaW50JzpcbiAgICAgICAgICAgIG9iamVjdHMgPSBDb21wb3NpdGUuYWxsQ29uc3RyYWludHMoY29tcG9zaXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjb21wb3NpdGUnOlxuICAgICAgICAgICAgb2JqZWN0cyA9IENvbXBvc2l0ZS5hbGxDb21wb3NpdGVzKGNvbXBvc2l0ZSkuY29uY2F0KGNvbXBvc2l0ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghb2JqZWN0cylcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuXG4gICAgICAgIG9iamVjdCA9IG9iamVjdHMuZmlsdGVyKGZ1bmN0aW9uKG9iamVjdCkgeyBcbiAgICAgICAgICAgIHJldHVybiBvYmplY3QuaWQudG9TdHJpbmcoKSA9PT0gaWQudG9TdHJpbmcoKTsgXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBvYmplY3QubGVuZ3RoID09PSAwID8gbnVsbCA6IG9iamVjdFswXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTW92ZXMgdGhlIGdpdmVuIG9iamVjdChzKSBmcm9tIGNvbXBvc2l0ZUEgdG8gY29tcG9zaXRlQiAoZXF1YWwgdG8gYSByZW1vdmUgZm9sbG93ZWQgYnkgYW4gYWRkKS5cbiAgICAgKiBAbWV0aG9kIG1vdmVcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZUF9IGNvbXBvc2l0ZUFcbiAgICAgKiBAcGFyYW0ge29iamVjdFtdfSBvYmplY3RzXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGVCfSBjb21wb3NpdGVCXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBSZXR1cm5zIGNvbXBvc2l0ZUFcbiAgICAgKi9cbiAgICBDb21wb3NpdGUubW92ZSA9IGZ1bmN0aW9uKGNvbXBvc2l0ZUEsIG9iamVjdHMsIGNvbXBvc2l0ZUIpIHtcbiAgICAgICAgQ29tcG9zaXRlLnJlbW92ZShjb21wb3NpdGVBLCBvYmplY3RzKTtcbiAgICAgICAgQ29tcG9zaXRlLmFkZChjb21wb3NpdGVCLCBvYmplY3RzKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZUE7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFzc2lnbnMgbmV3IGlkcyBmb3IgYWxsIG9iamVjdHMgaW4gdGhlIGNvbXBvc2l0ZSwgcmVjdXJzaXZlbHkuXG4gICAgICogQG1ldGhvZCByZWJhc2VcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBSZXR1cm5zIGNvbXBvc2l0ZVxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5yZWJhc2UgPSBmdW5jdGlvbihjb21wb3NpdGUpIHtcbiAgICAgICAgdmFyIG9iamVjdHMgPSBDb21wb3NpdGUuYWxsQm9kaWVzKGNvbXBvc2l0ZSlcbiAgICAgICAgICAgIC5jb25jYXQoQ29tcG9zaXRlLmFsbENvbnN0cmFpbnRzKGNvbXBvc2l0ZSkpXG4gICAgICAgICAgICAuY29uY2F0KENvbXBvc2l0ZS5hbGxDb21wb3NpdGVzKGNvbXBvc2l0ZSkpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgb2JqZWN0c1tpXS5pZCA9IENvbW1vbi5uZXh0SWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRyYW5zbGF0ZXMgYWxsIGNoaWxkcmVuIGluIHRoZSBjb21wb3NpdGUgYnkgYSBnaXZlbiB2ZWN0b3IgcmVsYXRpdmUgdG8gdGhlaXIgY3VycmVudCBwb3NpdGlvbnMsIFxuICAgICAqIHdpdGhvdXQgaW1wYXJ0aW5nIGFueSB2ZWxvY2l0eS5cbiAgICAgKiBAbWV0aG9kIHRyYW5zbGF0ZVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdHJhbnNsYXRpb25cbiAgICAgKiBAcGFyYW0ge2Jvb2x9IFtyZWN1cnNpdmU9dHJ1ZV1cbiAgICAgKi9cbiAgICBDb21wb3NpdGUudHJhbnNsYXRlID0gZnVuY3Rpb24oY29tcG9zaXRlLCB0cmFuc2xhdGlvbiwgcmVjdXJzaXZlKSB7XG4gICAgICAgIHZhciBib2RpZXMgPSByZWN1cnNpdmUgPyBDb21wb3NpdGUuYWxsQm9kaWVzKGNvbXBvc2l0ZSkgOiBjb21wb3NpdGUuYm9kaWVzO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBCb2R5LnRyYW5zbGF0ZShib2RpZXNbaV0sIHRyYW5zbGF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJvdGF0ZXMgYWxsIGNoaWxkcmVuIGluIHRoZSBjb21wb3NpdGUgYnkgYSBnaXZlbiBhbmdsZSBhYm91dCB0aGUgZ2l2ZW4gcG9pbnQsIHdpdGhvdXQgaW1wYXJ0aW5nIGFueSBhbmd1bGFyIHZlbG9jaXR5LlxuICAgICAqIEBtZXRob2Qgcm90YXRlXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3RhdGlvblxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBwb2ludFxuICAgICAqIEBwYXJhbSB7Ym9vbH0gW3JlY3Vyc2l2ZT10cnVlXVxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5yb3RhdGUgPSBmdW5jdGlvbihjb21wb3NpdGUsIHJvdGF0aW9uLCBwb2ludCwgcmVjdXJzaXZlKSB7XG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhyb3RhdGlvbiksXG4gICAgICAgICAgICBzaW4gPSBNYXRoLnNpbihyb3RhdGlvbiksXG4gICAgICAgICAgICBib2RpZXMgPSByZWN1cnNpdmUgPyBDb21wb3NpdGUuYWxsQm9kaWVzKGNvbXBvc2l0ZSkgOiBjb21wb3NpdGUuYm9kaWVzO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXSxcbiAgICAgICAgICAgICAgICBkeCA9IGJvZHkucG9zaXRpb24ueCAtIHBvaW50LngsXG4gICAgICAgICAgICAgICAgZHkgPSBib2R5LnBvc2l0aW9uLnkgLSBwb2ludC55O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgQm9keS5zZXRQb3NpdGlvbihib2R5LCB7XG4gICAgICAgICAgICAgICAgeDogcG9pbnQueCArIChkeCAqIGNvcyAtIGR5ICogc2luKSxcbiAgICAgICAgICAgICAgICB5OiBwb2ludC55ICsgKGR4ICogc2luICsgZHkgKiBjb3MpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgQm9keS5yb3RhdGUoYm9keSwgcm90YXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2NhbGVzIGFsbCBjaGlsZHJlbiBpbiB0aGUgY29tcG9zaXRlLCBpbmNsdWRpbmcgdXBkYXRpbmcgcGh5c2ljYWwgcHJvcGVydGllcyAobWFzcywgYXJlYSwgYXhlcywgaW5lcnRpYSksIGZyb20gYSB3b3JsZC1zcGFjZSBwb2ludC5cbiAgICAgKiBAbWV0aG9kIHNjYWxlXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZVhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGVZXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHBvaW50XG4gICAgICogQHBhcmFtIHtib29sfSBbcmVjdXJzaXZlPXRydWVdXG4gICAgICovXG4gICAgQ29tcG9zaXRlLnNjYWxlID0gZnVuY3Rpb24oY29tcG9zaXRlLCBzY2FsZVgsIHNjYWxlWSwgcG9pbnQsIHJlY3Vyc2l2ZSkge1xuICAgICAgICB2YXIgYm9kaWVzID0gcmVjdXJzaXZlID8gQ29tcG9zaXRlLmFsbEJvZGllcyhjb21wb3NpdGUpIDogY29tcG9zaXRlLmJvZGllcztcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV0sXG4gICAgICAgICAgICAgICAgZHggPSBib2R5LnBvc2l0aW9uLnggLSBwb2ludC54LFxuICAgICAgICAgICAgICAgIGR5ID0gYm9keS5wb3NpdGlvbi55IC0gcG9pbnQueTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIEJvZHkuc2V0UG9zaXRpb24oYm9keSwge1xuICAgICAgICAgICAgICAgIHg6IHBvaW50LnggKyBkeCAqIHNjYWxlWCxcbiAgICAgICAgICAgICAgICB5OiBwb2ludC55ICsgZHkgKiBzY2FsZVlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBCb2R5LnNjYWxlKGJvZHksIHNjYWxlWCwgc2NhbGVZKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHVuaW9uIG9mIHRoZSBib3VuZHMgb2YgYWxsIG9mIHRoZSBjb21wb3NpdGUncyBib2RpZXMuXG4gICAgICogQG1ldGhvZCBib3VuZHNcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlIFRoZSBjb21wb3NpdGUuXG4gICAgICogQHJldHVybnMge2JvdW5kc30gVGhlIGNvbXBvc2l0ZSBib3VuZHMuXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmJvdW5kcyA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSkge1xuICAgICAgICB2YXIgYm9kaWVzID0gQ29tcG9zaXRlLmFsbEJvZGllcyhjb21wb3NpdGUpLFxuICAgICAgICAgICAgdmVydGljZXMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV07XG4gICAgICAgICAgICB2ZXJ0aWNlcy5wdXNoKGJvZHkuYm91bmRzLm1pbiwgYm9keS5ib3VuZHMubWF4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBCb3VuZHMuY3JlYXRlKHZlcnRpY2VzKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgRXZlbnRzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgd2hlbiBhIGNhbGwgdG8gYENvbXBvc2l0ZS5hZGRgIGlzIG1hZGUsIGJlZm9yZSBvYmplY3RzIGhhdmUgYmVlbiBhZGRlZC5cbiAgICAqXG4gICAgKiBAZXZlbnQgYmVmb3JlQWRkXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge30gZXZlbnQub2JqZWN0IFRoZSBvYmplY3QocykgdG8gYmUgYWRkZWQgKG1heSBiZSBhIHNpbmdsZSBib2R5LCBjb25zdHJhaW50LCBjb21wb3NpdGUgb3IgYSBtaXhlZCBhcnJheSBvZiB0aGVzZSlcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIGEgY2FsbCB0byBgQ29tcG9zaXRlLmFkZGAgaXMgbWFkZSwgYWZ0ZXIgb2JqZWN0cyBoYXZlIGJlZW4gYWRkZWQuXG4gICAgKlxuICAgICogQGV2ZW50IGFmdGVyQWRkXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge30gZXZlbnQub2JqZWN0IFRoZSBvYmplY3QocykgdGhhdCBoYXZlIGJlZW4gYWRkZWQgKG1heSBiZSBhIHNpbmdsZSBib2R5LCBjb25zdHJhaW50LCBjb21wb3NpdGUgb3IgYSBtaXhlZCBhcnJheSBvZiB0aGVzZSlcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIGEgY2FsbCB0byBgQ29tcG9zaXRlLnJlbW92ZWAgaXMgbWFkZSwgYmVmb3JlIG9iamVjdHMgaGF2ZSBiZWVuIHJlbW92ZWQuXG4gICAgKlxuICAgICogQGV2ZW50IGJlZm9yZVJlbW92ZVxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm9iamVjdCBUaGUgb2JqZWN0KHMpIHRvIGJlIHJlbW92ZWQgKG1heSBiZSBhIHNpbmdsZSBib2R5LCBjb25zdHJhaW50LCBjb21wb3NpdGUgb3IgYSBtaXhlZCBhcnJheSBvZiB0aGVzZSlcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIGEgY2FsbCB0byBgQ29tcG9zaXRlLnJlbW92ZWAgaXMgbWFkZSwgYWZ0ZXIgb2JqZWN0cyBoYXZlIGJlZW4gcmVtb3ZlZC5cbiAgICAqXG4gICAgKiBAZXZlbnQgYWZ0ZXJSZW1vdmVcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7fSBldmVudC5vYmplY3QgVGhlIG9iamVjdChzKSB0aGF0IGhhdmUgYmVlbiByZW1vdmVkIChtYXkgYmUgYSBzaW5nbGUgYm9keSwgY29uc3RyYWludCwgY29tcG9zaXRlIG9yIGEgbWl4ZWQgYXJyYXkgb2YgdGhlc2UpXG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qXG4gICAgKlxuICAgICogIFByb3BlcnRpZXMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZWdlciBgTnVtYmVyYCB1bmlxdWVseSBpZGVudGlmeWluZyBudW1iZXIgZ2VuZXJhdGVkIGluIGBDb21wb3NpdGUuY3JlYXRlYCBieSBgQ29tbW9uLm5leHRJZGAuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgaWRcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFN0cmluZ2AgZGVub3RpbmcgdGhlIHR5cGUgb2Ygb2JqZWN0LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHR5cGVcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBcImNvbXBvc2l0ZVwiXG4gICAgICogQHJlYWRPbmx5XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcmJpdHJhcnkgYFN0cmluZ2AgbmFtZSB0byBoZWxwIHRoZSB1c2VyIGlkZW50aWZ5IGFuZCBtYW5hZ2UgY29tcG9zaXRlcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBsYWJlbFxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0IFwiQ29tcG9zaXRlXCJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0aGF0IHNwZWNpZmllcyB3aGV0aGVyIHRoZSBjb21wb3NpdGUgaGFzIGJlZW4gbW9kaWZpZWQgZHVyaW5nIHRoZSBjdXJyZW50IHN0ZXAuXG4gICAgICogVGhpcyBpcyBhdXRvbWF0aWNhbGx5IG1hbmFnZWQgd2hlbiBib2RpZXMsIGNvbnN0cmFpbnRzIG9yIGNvbXBvc2l0ZXMgYXJlIGFkZGVkIG9yIHJlbW92ZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgaXNNb2RpZmllZFxuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGBDb21wb3NpdGVgIHRoYXQgaXMgdGhlIHBhcmVudCBvZiB0aGlzIGNvbXBvc2l0ZS4gSXQgaXMgYXV0b21hdGljYWxseSBtYW5hZ2VkIGJ5IHRoZSBgTWF0dGVyLkNvbXBvc2l0ZWAgbWV0aG9kcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwYXJlbnRcbiAgICAgKiBAdHlwZSBjb21wb3NpdGVcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBgQm9keWAgdGhhdCBhcmUgX2RpcmVjdF8gY2hpbGRyZW4gb2YgdGhpcyBjb21wb3NpdGUuXG4gICAgICogVG8gYWRkIG9yIHJlbW92ZSBib2RpZXMgeW91IHNob3VsZCB1c2UgYENvbXBvc2l0ZS5hZGRgIGFuZCBgQ29tcG9zaXRlLnJlbW92ZWAgbWV0aG9kcyByYXRoZXIgdGhhbiBkaXJlY3RseSBtb2RpZnlpbmcgdGhpcyBwcm9wZXJ0eS5cbiAgICAgKiBJZiB5b3Ugd2lzaCB0byByZWN1cnNpdmVseSBmaW5kIGFsbCBkZXNjZW5kYW50cywgeW91IHNob3VsZCB1c2UgdGhlIGBDb21wb3NpdGUuYWxsQm9kaWVzYCBtZXRob2QuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYm9kaWVzXG4gICAgICogQHR5cGUgYm9keVtdXG4gICAgICogQGRlZmF1bHQgW11cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGBDb25zdHJhaW50YCB0aGF0IGFyZSBfZGlyZWN0XyBjaGlsZHJlbiBvZiB0aGlzIGNvbXBvc2l0ZS5cbiAgICAgKiBUbyBhZGQgb3IgcmVtb3ZlIGNvbnN0cmFpbnRzIHlvdSBzaG91bGQgdXNlIGBDb21wb3NpdGUuYWRkYCBhbmQgYENvbXBvc2l0ZS5yZW1vdmVgIG1ldGhvZHMgcmF0aGVyIHRoYW4gZGlyZWN0bHkgbW9kaWZ5aW5nIHRoaXMgcHJvcGVydHkuXG4gICAgICogSWYgeW91IHdpc2ggdG8gcmVjdXJzaXZlbHkgZmluZCBhbGwgZGVzY2VuZGFudHMsIHlvdSBzaG91bGQgdXNlIHRoZSBgQ29tcG9zaXRlLmFsbENvbnN0cmFpbnRzYCBtZXRob2QuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29uc3RyYWludHNcbiAgICAgKiBAdHlwZSBjb25zdHJhaW50W11cbiAgICAgKiBAZGVmYXVsdCBbXVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgYENvbXBvc2l0ZWAgdGhhdCBhcmUgX2RpcmVjdF8gY2hpbGRyZW4gb2YgdGhpcyBjb21wb3NpdGUuXG4gICAgICogVG8gYWRkIG9yIHJlbW92ZSBjb21wb3NpdGVzIHlvdSBzaG91bGQgdXNlIGBDb21wb3NpdGUuYWRkYCBhbmQgYENvbXBvc2l0ZS5yZW1vdmVgIG1ldGhvZHMgcmF0aGVyIHRoYW4gZGlyZWN0bHkgbW9kaWZ5aW5nIHRoaXMgcHJvcGVydHkuXG4gICAgICogSWYgeW91IHdpc2ggdG8gcmVjdXJzaXZlbHkgZmluZCBhbGwgZGVzY2VuZGFudHMsIHlvdSBzaG91bGQgdXNlIHRoZSBgQ29tcG9zaXRlLmFsbENvbXBvc2l0ZXNgIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjb21wb3NpdGVzXG4gICAgICogQHR5cGUgY29tcG9zaXRlW11cbiAgICAgKiBAZGVmYXVsdCBbXVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IHJlc2VydmVkIGZvciBzdG9yaW5nIHBsdWdpbi1zcGVjaWZpYyBwcm9wZXJ0aWVzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBsdWdpblxuICAgICAqIEB0eXBlIHt9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3QgdXNlZCBmb3Igc3RvcmluZyBjYWNoZWQgcmVzdWx0cyBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucy5cbiAgICAgKiBUaGlzIGlzIHVzZWQgaW50ZXJuYWxseSBvbmx5IGFuZCBpcyBhdXRvbWF0aWNhbGx5IG1hbmFnZWQuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwcm9wZXJ0eSBjYWNoZVxuICAgICAqIEB0eXBlIHt9XG4gICAgICovXG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5Cb2R5YCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBib2R5IG1vZGVscy5cbiogQSBgTWF0dGVyLkJvZHlgIGlzIGEgcmlnaWQgYm9keSB0aGF0IGNhbiBiZSBzaW11bGF0ZWQgYnkgYSBgTWF0dGVyLkVuZ2luZWAuXG4qIEZhY3RvcmllcyBmb3IgY29tbW9ubHkgdXNlZCBib2R5IGNvbmZpZ3VyYXRpb25zIChzdWNoIGFzIHJlY3RhbmdsZXMsIGNpcmNsZXMgYW5kIG90aGVyIHBvbHlnb25zKSBjYW4gYmUgZm91bmQgaW4gdGhlIG1vZHVsZSBgTWF0dGVyLkJvZGllc2AuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG5cbiogQGNsYXNzIEJvZHlcbiovXG5cbnZhciBCb2R5ID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gQm9keTtcblxudmFyIFZlcnRpY2VzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbnZhciBWZWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xudmFyIFNsZWVwaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcbnZhciBSZW5kZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KTtcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xudmFyIEJvdW5kcyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG52YXIgQXhlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICBCb2R5Ll9pbmVydGlhU2NhbGUgPSA0O1xuICAgIEJvZHkuX25leHRDb2xsaWRpbmdHcm91cElkID0gMTtcbiAgICBCb2R5Ll9uZXh0Tm9uQ29sbGlkaW5nR3JvdXBJZCA9IC0xO1xuICAgIEJvZHkuX25leHRDYXRlZ29yeSA9IDB4MDAwMTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgcmlnaWQgYm9keSBtb2RlbC4gVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBhbnkgcHJvcGVydGllcyB5b3Ugd2lzaCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHMuXG4gICAgICogQWxsIHByb3BlcnRpZXMgaGF2ZSBkZWZhdWx0IHZhbHVlcywgYW5kIG1hbnkgYXJlIHByZS1jYWxjdWxhdGVkIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gb3RoZXIgcHJvcGVydGllcy5cbiAgICAgKiBWZXJ0aWNlcyBtdXN0IGJlIHNwZWNpZmllZCBpbiBjbG9ja3dpc2Ugb3JkZXIuXG4gICAgICogU2VlIHRoZSBwcm9wZXJ0aWVzIHNlY3Rpb24gYmVsb3cgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7Ym9keX0gYm9keVxuICAgICAqL1xuICAgIEJvZHkuY3JlYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBpZDogQ29tbW9uLm5leHRJZCgpLFxuICAgICAgICAgICAgdHlwZTogJ2JvZHknLFxuICAgICAgICAgICAgbGFiZWw6ICdCb2R5JyxcbiAgICAgICAgICAgIHBhcnRzOiBbXSxcbiAgICAgICAgICAgIHBsdWdpbjoge30sXG4gICAgICAgICAgICBhbmdsZTogMCxcbiAgICAgICAgICAgIHZlcnRpY2VzOiBWZXJ0aWNlcy5mcm9tUGF0aCgnTCAwIDAgTCA0MCAwIEwgNDAgNDAgTCAwIDQwJyksXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICBmb3JjZTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICB0b3JxdWU6IDAsXG4gICAgICAgICAgICBwb3NpdGlvbkltcHVsc2U6IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgY29uc3RyYWludEltcHVsc2U6IHsgeDogMCwgeTogMCwgYW5nbGU6IDAgfSxcbiAgICAgICAgICAgIHRvdGFsQ29udGFjdHM6IDAsXG4gICAgICAgICAgICBzcGVlZDogMCxcbiAgICAgICAgICAgIGFuZ3VsYXJTcGVlZDogMCxcbiAgICAgICAgICAgIHZlbG9jaXR5OiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgIGFuZ3VsYXJWZWxvY2l0eTogMCxcbiAgICAgICAgICAgIGlzU2Vuc29yOiBmYWxzZSxcbiAgICAgICAgICAgIGlzU3RhdGljOiBmYWxzZSxcbiAgICAgICAgICAgIGlzU2xlZXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgbW90aW9uOiAwLFxuICAgICAgICAgICAgc2xlZXBUaHJlc2hvbGQ6IDYwLFxuICAgICAgICAgICAgZGVuc2l0eTogMC4wMDEsXG4gICAgICAgICAgICByZXN0aXR1dGlvbjogMCxcbiAgICAgICAgICAgIGZyaWN0aW9uOiAwLjEsXG4gICAgICAgICAgICBmcmljdGlvblN0YXRpYzogMC41LFxuICAgICAgICAgICAgZnJpY3Rpb25BaXI6IDAuMDEsXG4gICAgICAgICAgICBjb2xsaXNpb25GaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogMHgwMDAxLFxuICAgICAgICAgICAgICAgIG1hc2s6IDB4RkZGRkZGRkYsXG4gICAgICAgICAgICAgICAgZ3JvdXA6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzbG9wOiAwLjA1LFxuICAgICAgICAgICAgdGltZVNjYWxlOiAxLFxuICAgICAgICAgICAgcmVuZGVyOiB7XG4gICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgIHN0cm9rZVN0eWxlOiBudWxsLFxuICAgICAgICAgICAgICAgIGZpbGxTdHlsZTogbnVsbCxcbiAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IG51bGwsXG4gICAgICAgICAgICAgICAgc3ByaXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIHhTY2FsZTogMSxcbiAgICAgICAgICAgICAgICAgICAgeVNjYWxlOiAxLFxuICAgICAgICAgICAgICAgICAgICB4T2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICB5T2Zmc2V0OiAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV2ZW50czogbnVsbCxcbiAgICAgICAgICAgIGJvdW5kczogbnVsbCxcbiAgICAgICAgICAgIGNoYW1mZXI6IG51bGwsXG4gICAgICAgICAgICBjaXJjbGVSYWRpdXM6IDAsXG4gICAgICAgICAgICBwb3NpdGlvblByZXY6IG51bGwsXG4gICAgICAgICAgICBhbmdsZVByZXY6IDAsXG4gICAgICAgICAgICBwYXJlbnQ6IG51bGwsXG4gICAgICAgICAgICBheGVzOiBudWxsLFxuICAgICAgICAgICAgYXJlYTogMCxcbiAgICAgICAgICAgIG1hc3M6IDAsXG4gICAgICAgICAgICBpbmVydGlhOiAwLFxuICAgICAgICAgICAgX29yaWdpbmFsOiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGJvZHkgPSBDb21tb24uZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICBfaW5pdFByb3BlcnRpZXMoYm9keSwgb3B0aW9ucyk7XG5cbiAgICAgICAgcmV0dXJuIGJvZHk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5leHQgdW5pcXVlIGdyb3VwIGluZGV4IGZvciB3aGljaCBib2RpZXMgd2lsbCBjb2xsaWRlLlxuICAgICAqIElmIGBpc05vbkNvbGxpZGluZ2AgaXMgYHRydWVgLCByZXR1cm5zIHRoZSBuZXh0IHVuaXF1ZSBncm91cCBpbmRleCBmb3Igd2hpY2ggYm9kaWVzIHdpbGwgX25vdF8gY29sbGlkZS5cbiAgICAgKiBTZWUgYGJvZHkuY29sbGlzaW9uRmlsdGVyYCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgKiBAbWV0aG9kIG5leHRHcm91cFxuICAgICAqIEBwYXJhbSB7Ym9vbH0gW2lzTm9uQ29sbGlkaW5nPWZhbHNlXVxuICAgICAqIEByZXR1cm4ge051bWJlcn0gVW5pcXVlIGdyb3VwIGluZGV4XG4gICAgICovXG4gICAgQm9keS5uZXh0R3JvdXAgPSBmdW5jdGlvbihpc05vbkNvbGxpZGluZykge1xuICAgICAgICBpZiAoaXNOb25Db2xsaWRpbmcpXG4gICAgICAgICAgICByZXR1cm4gQm9keS5fbmV4dE5vbkNvbGxpZGluZ0dyb3VwSWQtLTtcblxuICAgICAgICByZXR1cm4gQm9keS5fbmV4dENvbGxpZGluZ0dyb3VwSWQrKztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmV4dCB1bmlxdWUgY2F0ZWdvcnkgYml0ZmllbGQgKHN0YXJ0aW5nIGFmdGVyIHRoZSBpbml0aWFsIGRlZmF1bHQgY2F0ZWdvcnkgYDB4MDAwMWApLlxuICAgICAqIFRoZXJlIGFyZSAzMiBhdmFpbGFibGUuIFNlZSBgYm9keS5jb2xsaXNpb25GaWx0ZXJgIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAqIEBtZXRob2QgbmV4dENhdGVnb3J5XG4gICAgICogQHJldHVybiB7TnVtYmVyfSBVbmlxdWUgY2F0ZWdvcnkgYml0ZmllbGRcbiAgICAgKi9cbiAgICBCb2R5Lm5leHRDYXRlZ29yeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBCb2R5Ll9uZXh0Q2F0ZWdvcnkgPSBCb2R5Ll9uZXh0Q2F0ZWdvcnkgPDwgMTtcbiAgICAgICAgcmV0dXJuIEJvZHkuX25leHRDYXRlZ29yeTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGlzZXMgYm9keSBwcm9wZXJ0aWVzLlxuICAgICAqIEBtZXRob2QgX2luaXRQcm9wZXJ0aWVzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge30gW29wdGlvbnNdXG4gICAgICovXG4gICAgdmFyIF9pbml0UHJvcGVydGllcyA9IGZ1bmN0aW9uKGJvZHksIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgLy8gaW5pdCByZXF1aXJlZCBwcm9wZXJ0aWVzIChvcmRlciBpcyBpbXBvcnRhbnQpXG4gICAgICAgIEJvZHkuc2V0KGJvZHksIHtcbiAgICAgICAgICAgIGJvdW5kczogYm9keS5ib3VuZHMgfHwgQm91bmRzLmNyZWF0ZShib2R5LnZlcnRpY2VzKSxcbiAgICAgICAgICAgIHBvc2l0aW9uUHJldjogYm9keS5wb3NpdGlvblByZXYgfHwgVmVjdG9yLmNsb25lKGJvZHkucG9zaXRpb24pLFxuICAgICAgICAgICAgYW5nbGVQcmV2OiBib2R5LmFuZ2xlUHJldiB8fCBib2R5LmFuZ2xlLFxuICAgICAgICAgICAgdmVydGljZXM6IGJvZHkudmVydGljZXMsXG4gICAgICAgICAgICBwYXJ0czogYm9keS5wYXJ0cyB8fCBbYm9keV0sXG4gICAgICAgICAgICBpc1N0YXRpYzogYm9keS5pc1N0YXRpYyxcbiAgICAgICAgICAgIGlzU2xlZXBpbmc6IGJvZHkuaXNTbGVlcGluZyxcbiAgICAgICAgICAgIHBhcmVudDogYm9keS5wYXJlbnQgfHwgYm9keVxuICAgICAgICB9KTtcblxuICAgICAgICBWZXJ0aWNlcy5yb3RhdGUoYm9keS52ZXJ0aWNlcywgYm9keS5hbmdsZSwgYm9keS5wb3NpdGlvbik7XG4gICAgICAgIEF4ZXMucm90YXRlKGJvZHkuYXhlcywgYm9keS5hbmdsZSk7XG4gICAgICAgIEJvdW5kcy51cGRhdGUoYm9keS5ib3VuZHMsIGJvZHkudmVydGljZXMsIGJvZHkudmVsb2NpdHkpO1xuXG4gICAgICAgIC8vIGFsbG93IG9wdGlvbnMgdG8gb3ZlcnJpZGUgdGhlIGF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlZCBwcm9wZXJ0aWVzXG4gICAgICAgIEJvZHkuc2V0KGJvZHksIHtcbiAgICAgICAgICAgIGF4ZXM6IG9wdGlvbnMuYXhlcyB8fCBib2R5LmF4ZXMsXG4gICAgICAgICAgICBhcmVhOiBvcHRpb25zLmFyZWEgfHwgYm9keS5hcmVhLFxuICAgICAgICAgICAgbWFzczogb3B0aW9ucy5tYXNzIHx8IGJvZHkubWFzcyxcbiAgICAgICAgICAgIGluZXJ0aWE6IG9wdGlvbnMuaW5lcnRpYSB8fCBib2R5LmluZXJ0aWFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcmVuZGVyIHByb3BlcnRpZXNcbiAgICAgICAgdmFyIGRlZmF1bHRGaWxsU3R5bGUgPSAoYm9keS5pc1N0YXRpYyA/ICcjMTQxNTFmJyA6IENvbW1vbi5jaG9vc2UoWycjZjE5NjQ4JywgJyNmNWQyNTknLCAnI2Y1NWEzYycsICcjMDYzZTdiJywgJyNlY2VjZDEnXSkpLFxuICAgICAgICAgICAgZGVmYXVsdFN0cm9rZVN0eWxlID0gYm9keS5pc1N0YXRpYyA/ICcjNTU1JyA6ICcjY2NjJyxcbiAgICAgICAgICAgIGRlZmF1bHRMaW5lV2lkdGggPSBib2R5LmlzU3RhdGljICYmIGJvZHkucmVuZGVyLmZpbGxTdHlsZSA9PT0gbnVsbCA/IDEgOiAwO1xuICAgICAgICBib2R5LnJlbmRlci5maWxsU3R5bGUgPSBib2R5LnJlbmRlci5maWxsU3R5bGUgfHwgZGVmYXVsdEZpbGxTdHlsZTtcbiAgICAgICAgYm9keS5yZW5kZXIuc3Ryb2tlU3R5bGUgPSBib2R5LnJlbmRlci5zdHJva2VTdHlsZSB8fCBkZWZhdWx0U3Ryb2tlU3R5bGU7XG4gICAgICAgIGJvZHkucmVuZGVyLmxpbmVXaWR0aCA9IGJvZHkucmVuZGVyLmxpbmVXaWR0aCB8fCBkZWZhdWx0TGluZVdpZHRoO1xuICAgICAgICBib2R5LnJlbmRlci5zcHJpdGUueE9mZnNldCArPSAtKGJvZHkuYm91bmRzLm1pbi54IC0gYm9keS5wb3NpdGlvbi54KSAvIChib2R5LmJvdW5kcy5tYXgueCAtIGJvZHkuYm91bmRzLm1pbi54KTtcbiAgICAgICAgYm9keS5yZW5kZXIuc3ByaXRlLnlPZmZzZXQgKz0gLShib2R5LmJvdW5kcy5taW4ueSAtIGJvZHkucG9zaXRpb24ueSkgLyAoYm9keS5ib3VuZHMubWF4LnkgLSBib2R5LmJvdW5kcy5taW4ueSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdpdmVuIGEgcHJvcGVydHkgYW5kIGEgdmFsdWUgKG9yIG1hcCBvZiksIHNldHMgdGhlIHByb3BlcnR5KHMpIG9uIHRoZSBib2R5LCB1c2luZyB0aGUgYXBwcm9wcmlhdGUgc2V0dGVyIGZ1bmN0aW9ucyBpZiB0aGV5IGV4aXN0LlxuICAgICAqIFByZWZlciB0byB1c2UgdGhlIGFjdHVhbCBzZXR0ZXIgZnVuY3Rpb25zIGluIHBlcmZvcm1hbmNlIGNyaXRpY2FsIHNpdHVhdGlvbnMuXG4gICAgICogQG1ldGhvZCBzZXRcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge30gc2V0dGluZ3MgQSBwcm9wZXJ0eSBuYW1lIChvciBtYXAgb2YgcHJvcGVydGllcyBhbmQgdmFsdWVzKSB0byBzZXQgb24gdGhlIGJvZHkuXG4gICAgICogQHBhcmFtIHt9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQgaWYgYHNldHRpbmdzYCBpcyBhIHNpbmdsZSBwcm9wZXJ0eSBuYW1lLlxuICAgICAqL1xuICAgIEJvZHkuc2V0ID0gZnVuY3Rpb24oYm9keSwgc2V0dGluZ3MsIHZhbHVlKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0eTtcblxuICAgICAgICBpZiAodHlwZW9mIHNldHRpbmdzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcHJvcGVydHkgPSBzZXR0aW5ncztcbiAgICAgICAgICAgIHNldHRpbmdzID0ge307XG4gICAgICAgICAgICBzZXR0aW5nc1twcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAocHJvcGVydHkgaW4gc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNldHRpbmdzLCBwcm9wZXJ0eSkpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIHZhbHVlID0gc2V0dGluZ3NbcHJvcGVydHldO1xuICAgICAgICAgICAgc3dpdGNoIChwcm9wZXJ0eSkge1xuXG4gICAgICAgICAgICBjYXNlICdpc1N0YXRpYyc6XG4gICAgICAgICAgICAgICAgQm9keS5zZXRTdGF0aWMoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaXNTbGVlcGluZyc6XG4gICAgICAgICAgICAgICAgU2xlZXBpbmcuc2V0KGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21hc3MnOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0TWFzcyhib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkZW5zaXR5JzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldERlbnNpdHkoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaW5lcnRpYSc6XG4gICAgICAgICAgICAgICAgQm9keS5zZXRJbmVydGlhKGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3ZlcnRpY2VzJzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldFZlcnRpY2VzKGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Bvc2l0aW9uJzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldFBvc2l0aW9uKGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FuZ2xlJzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldEFuZ2xlKGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3ZlbG9jaXR5JzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldFZlbG9jaXR5KGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FuZ3VsYXJWZWxvY2l0eSc6XG4gICAgICAgICAgICAgICAgQm9keS5zZXRBbmd1bGFyVmVsb2NpdHkoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncGFydHMnOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0UGFydHMoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2VudHJlJzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldENlbnRyZShib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJvZHlbcHJvcGVydHldID0gdmFsdWU7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBib2R5IGFzIHN0YXRpYywgaW5jbHVkaW5nIGlzU3RhdGljIGZsYWcgYW5kIHNldHRpbmcgbWFzcyBhbmQgaW5lcnRpYSB0byBJbmZpbml0eS5cbiAgICAgKiBAbWV0aG9kIHNldFN0YXRpY1xuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7Ym9vbH0gaXNTdGF0aWNcbiAgICAgKi9cbiAgICBCb2R5LnNldFN0YXRpYyA9IGZ1bmN0aW9uKGJvZHksIGlzU3RhdGljKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhcnQgPSBib2R5LnBhcnRzW2ldO1xuICAgICAgICAgICAgcGFydC5pc1N0YXRpYyA9IGlzU3RhdGljO1xuXG4gICAgICAgICAgICBpZiAoaXNTdGF0aWMpIHtcbiAgICAgICAgICAgICAgICBwYXJ0Ll9vcmlnaW5hbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdGl0dXRpb246IHBhcnQucmVzdGl0dXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGZyaWN0aW9uOiBwYXJ0LmZyaWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICBtYXNzOiBwYXJ0Lm1hc3MsXG4gICAgICAgICAgICAgICAgICAgIGluZXJ0aWE6IHBhcnQuaW5lcnRpYSxcbiAgICAgICAgICAgICAgICAgICAgZGVuc2l0eTogcGFydC5kZW5zaXR5LFxuICAgICAgICAgICAgICAgICAgICBpbnZlcnNlTWFzczogcGFydC5pbnZlcnNlTWFzcyxcbiAgICAgICAgICAgICAgICAgICAgaW52ZXJzZUluZXJ0aWE6IHBhcnQuaW52ZXJzZUluZXJ0aWFcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcGFydC5yZXN0aXR1dGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgcGFydC5mcmljdGlvbiA9IDE7XG4gICAgICAgICAgICAgICAgcGFydC5tYXNzID0gcGFydC5pbmVydGlhID0gcGFydC5kZW5zaXR5ID0gSW5maW5pdHk7XG4gICAgICAgICAgICAgICAgcGFydC5pbnZlcnNlTWFzcyA9IHBhcnQuaW52ZXJzZUluZXJ0aWEgPSAwO1xuXG4gICAgICAgICAgICAgICAgcGFydC5wb3NpdGlvblByZXYueCA9IHBhcnQucG9zaXRpb24ueDtcbiAgICAgICAgICAgICAgICBwYXJ0LnBvc2l0aW9uUHJldi55ID0gcGFydC5wb3NpdGlvbi55O1xuICAgICAgICAgICAgICAgIHBhcnQuYW5nbGVQcmV2ID0gcGFydC5hbmdsZTtcbiAgICAgICAgICAgICAgICBwYXJ0LmFuZ3VsYXJWZWxvY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgcGFydC5zcGVlZCA9IDA7XG4gICAgICAgICAgICAgICAgcGFydC5hbmd1bGFyU3BlZWQgPSAwO1xuICAgICAgICAgICAgICAgIHBhcnQubW90aW9uID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFydC5fb3JpZ2luYWwpIHtcbiAgICAgICAgICAgICAgICBwYXJ0LnJlc3RpdHV0aW9uID0gcGFydC5fb3JpZ2luYWwucmVzdGl0dXRpb247XG4gICAgICAgICAgICAgICAgcGFydC5mcmljdGlvbiA9IHBhcnQuX29yaWdpbmFsLmZyaWN0aW9uO1xuICAgICAgICAgICAgICAgIHBhcnQubWFzcyA9IHBhcnQuX29yaWdpbmFsLm1hc3M7XG4gICAgICAgICAgICAgICAgcGFydC5pbmVydGlhID0gcGFydC5fb3JpZ2luYWwuaW5lcnRpYTtcbiAgICAgICAgICAgICAgICBwYXJ0LmRlbnNpdHkgPSBwYXJ0Ll9vcmlnaW5hbC5kZW5zaXR5O1xuICAgICAgICAgICAgICAgIHBhcnQuaW52ZXJzZU1hc3MgPSBwYXJ0Ll9vcmlnaW5hbC5pbnZlcnNlTWFzcztcbiAgICAgICAgICAgICAgICBwYXJ0LmludmVyc2VJbmVydGlhID0gcGFydC5fb3JpZ2luYWwuaW52ZXJzZUluZXJ0aWE7XG5cbiAgICAgICAgICAgICAgICBwYXJ0Ll9vcmlnaW5hbCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbWFzcyBvZiB0aGUgYm9keS4gSW52ZXJzZSBtYXNzLCBkZW5zaXR5IGFuZCBpbmVydGlhIGFyZSBhdXRvbWF0aWNhbGx5IHVwZGF0ZWQgdG8gcmVmbGVjdCB0aGUgY2hhbmdlLlxuICAgICAqIEBtZXRob2Qgc2V0TWFzc1xuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXNzXG4gICAgICovXG4gICAgQm9keS5zZXRNYXNzID0gZnVuY3Rpb24oYm9keSwgbWFzcykge1xuICAgICAgICB2YXIgbW9tZW50ID0gYm9keS5pbmVydGlhIC8gKGJvZHkubWFzcyAvIDYpO1xuICAgICAgICBib2R5LmluZXJ0aWEgPSBtb21lbnQgKiAobWFzcyAvIDYpO1xuICAgICAgICBib2R5LmludmVyc2VJbmVydGlhID0gMSAvIGJvZHkuaW5lcnRpYTtcblxuICAgICAgICBib2R5Lm1hc3MgPSBtYXNzO1xuICAgICAgICBib2R5LmludmVyc2VNYXNzID0gMSAvIGJvZHkubWFzcztcbiAgICAgICAgYm9keS5kZW5zaXR5ID0gYm9keS5tYXNzIC8gYm9keS5hcmVhO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBkZW5zaXR5IG9mIHRoZSBib2R5LiBNYXNzIGFuZCBpbmVydGlhIGFyZSBhdXRvbWF0aWNhbGx5IHVwZGF0ZWQgdG8gcmVmbGVjdCB0aGUgY2hhbmdlLlxuICAgICAqIEBtZXRob2Qgc2V0RGVuc2l0eVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZW5zaXR5XG4gICAgICovXG4gICAgQm9keS5zZXREZW5zaXR5ID0gZnVuY3Rpb24oYm9keSwgZGVuc2l0eSkge1xuICAgICAgICBCb2R5LnNldE1hc3MoYm9keSwgZGVuc2l0eSAqIGJvZHkuYXJlYSk7XG4gICAgICAgIGJvZHkuZGVuc2l0eSA9IGRlbnNpdHk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIG1vbWVudCBvZiBpbmVydGlhIChpLmUuIHNlY29uZCBtb21lbnQgb2YgYXJlYSkgb2YgdGhlIGJvZHkuIFxuICAgICAqIEludmVyc2UgaW5lcnRpYSBpcyBhdXRvbWF0aWNhbGx5IHVwZGF0ZWQgdG8gcmVmbGVjdCB0aGUgY2hhbmdlLiBNYXNzIGlzIG5vdCBjaGFuZ2VkLlxuICAgICAqIEBtZXRob2Qgc2V0SW5lcnRpYVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmVydGlhXG4gICAgICovXG4gICAgQm9keS5zZXRJbmVydGlhID0gZnVuY3Rpb24oYm9keSwgaW5lcnRpYSkge1xuICAgICAgICBib2R5LmluZXJ0aWEgPSBpbmVydGlhO1xuICAgICAgICBib2R5LmludmVyc2VJbmVydGlhID0gMSAvIGJvZHkuaW5lcnRpYTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYm9keSdzIHZlcnRpY2VzIGFuZCB1cGRhdGVzIGJvZHkgcHJvcGVydGllcyBhY2NvcmRpbmdseSwgaW5jbHVkaW5nIGluZXJ0aWEsIGFyZWEgYW5kIG1hc3MgKHdpdGggcmVzcGVjdCB0byBgYm9keS5kZW5zaXR5YCkuXG4gICAgICogVmVydGljZXMgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IHRyYW5zZm9ybWVkIHRvIGJlIG9yaWVudGF0ZWQgYXJvdW5kIHRoZWlyIGNlbnRyZSBvZiBtYXNzIGFzIHRoZSBvcmlnaW4uXG4gICAgICogVGhleSBhcmUgdGhlbiBhdXRvbWF0aWNhbGx5IHRyYW5zbGF0ZWQgdG8gd29ybGQgc3BhY2UgYmFzZWQgb24gYGJvZHkucG9zaXRpb25gLlxuICAgICAqXG4gICAgICogVGhlIGB2ZXJ0aWNlc2AgYXJndW1lbnQgc2hvdWxkIGJlIHBhc3NlZCBhcyBhbiBhcnJheSBvZiBgTWF0dGVyLlZlY3RvcmAgcG9pbnRzIChvciBhIGBNYXR0ZXIuVmVydGljZXNgIGFycmF5KS5cbiAgICAgKiBWZXJ0aWNlcyBtdXN0IGZvcm0gYSBjb252ZXggaHVsbCwgY29uY2F2ZSBodWxscyBhcmUgbm90IHN1cHBvcnRlZC5cbiAgICAgKlxuICAgICAqIEBtZXRob2Qgc2V0VmVydGljZXNcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge3ZlY3RvcltdfSB2ZXJ0aWNlc1xuICAgICAqL1xuICAgIEJvZHkuc2V0VmVydGljZXMgPSBmdW5jdGlvbihib2R5LCB2ZXJ0aWNlcykge1xuICAgICAgICAvLyBjaGFuZ2UgdmVydGljZXNcbiAgICAgICAgaWYgKHZlcnRpY2VzWzBdLmJvZHkgPT09IGJvZHkpIHtcbiAgICAgICAgICAgIGJvZHkudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvZHkudmVydGljZXMgPSBWZXJ0aWNlcy5jcmVhdGUodmVydGljZXMsIGJvZHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlIHByb3BlcnRpZXNcbiAgICAgICAgYm9keS5heGVzID0gQXhlcy5mcm9tVmVydGljZXMoYm9keS52ZXJ0aWNlcyk7XG4gICAgICAgIGJvZHkuYXJlYSA9IFZlcnRpY2VzLmFyZWEoYm9keS52ZXJ0aWNlcyk7XG4gICAgICAgIEJvZHkuc2V0TWFzcyhib2R5LCBib2R5LmRlbnNpdHkgKiBib2R5LmFyZWEpO1xuXG4gICAgICAgIC8vIG9yaWVudCB2ZXJ0aWNlcyBhcm91bmQgdGhlIGNlbnRyZSBvZiBtYXNzIGF0IG9yaWdpbiAoMCwgMClcbiAgICAgICAgdmFyIGNlbnRyZSA9IFZlcnRpY2VzLmNlbnRyZShib2R5LnZlcnRpY2VzKTtcbiAgICAgICAgVmVydGljZXMudHJhbnNsYXRlKGJvZHkudmVydGljZXMsIGNlbnRyZSwgLTEpO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBpbmVydGlhIHdoaWxlIHZlcnRpY2VzIGFyZSBhdCBvcmlnaW4gKDAsIDApXG4gICAgICAgIEJvZHkuc2V0SW5lcnRpYShib2R5LCBCb2R5Ll9pbmVydGlhU2NhbGUgKiBWZXJ0aWNlcy5pbmVydGlhKGJvZHkudmVydGljZXMsIGJvZHkubWFzcykpO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBnZW9tZXRyeVxuICAgICAgICBWZXJ0aWNlcy50cmFuc2xhdGUoYm9keS52ZXJ0aWNlcywgYm9keS5wb3NpdGlvbik7XG4gICAgICAgIEJvdW5kcy51cGRhdGUoYm9keS5ib3VuZHMsIGJvZHkudmVydGljZXMsIGJvZHkudmVsb2NpdHkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwYXJ0cyBvZiB0aGUgYGJvZHlgIGFuZCB1cGRhdGVzIG1hc3MsIGluZXJ0aWEgYW5kIGNlbnRyb2lkLlxuICAgICAqIEVhY2ggcGFydCB3aWxsIGhhdmUgaXRzIHBhcmVudCBzZXQgdG8gYGJvZHlgLlxuICAgICAqIEJ5IGRlZmF1bHQgdGhlIGNvbnZleCBodWxsIHdpbGwgYmUgYXV0b21hdGljYWxseSBjb21wdXRlZCBhbmQgc2V0IG9uIGBib2R5YCwgdW5sZXNzIGBhdXRvSHVsbGAgaXMgc2V0IHRvIGBmYWxzZS5gXG4gICAgICogTm90ZSB0aGF0IHRoaXMgbWV0aG9kIHdpbGwgZW5zdXJlIHRoYXQgdGhlIGZpcnN0IHBhcnQgaW4gYGJvZHkucGFydHNgIHdpbGwgYWx3YXlzIGJlIHRoZSBgYm9keWAuXG4gICAgICogQG1ldGhvZCBzZXRQYXJ0c1xuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSBbYm9keV0gcGFydHNcbiAgICAgKiBAcGFyYW0ge2Jvb2x9IFthdXRvSHVsbD10cnVlXVxuICAgICAqL1xuICAgIEJvZHkuc2V0UGFydHMgPSBmdW5jdGlvbihib2R5LCBwYXJ0cywgYXV0b0h1bGwpIHtcbiAgICAgICAgdmFyIGk7XG5cbiAgICAgICAgLy8gYWRkIGFsbCB0aGUgcGFydHMsIGVuc3VyaW5nIHRoYXQgdGhlIGZpcnN0IHBhcnQgaXMgYWx3YXlzIHRoZSBwYXJlbnQgYm9keVxuICAgICAgICBwYXJ0cyA9IHBhcnRzLnNsaWNlKDApO1xuICAgICAgICBib2R5LnBhcnRzLmxlbmd0aCA9IDA7XG4gICAgICAgIGJvZHkucGFydHMucHVzaChib2R5KTtcbiAgICAgICAgYm9keS5wYXJlbnQgPSBib2R5O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhcnQgPSBwYXJ0c1tpXTtcbiAgICAgICAgICAgIGlmIChwYXJ0ICE9PSBib2R5KSB7XG4gICAgICAgICAgICAgICAgcGFydC5wYXJlbnQgPSBib2R5O1xuICAgICAgICAgICAgICAgIGJvZHkucGFydHMucHVzaChwYXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2R5LnBhcnRzLmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBhdXRvSHVsbCA9IHR5cGVvZiBhdXRvSHVsbCAhPT0gJ3VuZGVmaW5lZCcgPyBhdXRvSHVsbCA6IHRydWU7XG5cbiAgICAgICAgLy8gZmluZCB0aGUgY29udmV4IGh1bGwgb2YgYWxsIHBhcnRzIHRvIHNldCBvbiB0aGUgcGFyZW50IGJvZHlcbiAgICAgICAgaWYgKGF1dG9IdWxsKSB7XG4gICAgICAgICAgICB2YXIgdmVydGljZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZlcnRpY2VzID0gdmVydGljZXMuY29uY2F0KHBhcnRzW2ldLnZlcnRpY2VzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgVmVydGljZXMuY2xvY2t3aXNlU29ydCh2ZXJ0aWNlcyk7XG5cbiAgICAgICAgICAgIHZhciBodWxsID0gVmVydGljZXMuaHVsbCh2ZXJ0aWNlcyksXG4gICAgICAgICAgICAgICAgaHVsbENlbnRyZSA9IFZlcnRpY2VzLmNlbnRyZShodWxsKTtcblxuICAgICAgICAgICAgQm9keS5zZXRWZXJ0aWNlcyhib2R5LCBodWxsKTtcbiAgICAgICAgICAgIFZlcnRpY2VzLnRyYW5zbGF0ZShib2R5LnZlcnRpY2VzLCBodWxsQ2VudHJlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN1bSB0aGUgcHJvcGVydGllcyBvZiBhbGwgY29tcG91bmQgcGFydHMgb2YgdGhlIHBhcmVudCBib2R5XG4gICAgICAgIHZhciB0b3RhbCA9IEJvZHkuX3RvdGFsUHJvcGVydGllcyhib2R5KTtcblxuICAgICAgICBib2R5LmFyZWEgPSB0b3RhbC5hcmVhO1xuICAgICAgICBib2R5LnBhcmVudCA9IGJvZHk7XG4gICAgICAgIGJvZHkucG9zaXRpb24ueCA9IHRvdGFsLmNlbnRyZS54O1xuICAgICAgICBib2R5LnBvc2l0aW9uLnkgPSB0b3RhbC5jZW50cmUueTtcbiAgICAgICAgYm9keS5wb3NpdGlvblByZXYueCA9IHRvdGFsLmNlbnRyZS54O1xuICAgICAgICBib2R5LnBvc2l0aW9uUHJldi55ID0gdG90YWwuY2VudHJlLnk7XG5cbiAgICAgICAgQm9keS5zZXRNYXNzKGJvZHksIHRvdGFsLm1hc3MpO1xuICAgICAgICBCb2R5LnNldEluZXJ0aWEoYm9keSwgdG90YWwuaW5lcnRpYSk7XG4gICAgICAgIEJvZHkuc2V0UG9zaXRpb24oYm9keSwgdG90YWwuY2VudHJlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBjZW50cmUgb2YgbWFzcyBvZiB0aGUgYm9keS4gXG4gICAgICogVGhlIGBjZW50cmVgIGlzIGEgdmVjdG9yIGluIHdvcmxkLXNwYWNlIHVubGVzcyBgcmVsYXRpdmVgIGlzIHNldCwgaW4gd2hpY2ggY2FzZSBpdCBpcyBhIHRyYW5zbGF0aW9uLlxuICAgICAqIFRoZSBjZW50cmUgb2YgbWFzcyBpcyB0aGUgcG9pbnQgdGhlIGJvZHkgcm90YXRlcyBhYm91dCBhbmQgY2FuIGJlIHVzZWQgdG8gc2ltdWxhdGUgbm9uLXVuaWZvcm0gZGVuc2l0eS5cbiAgICAgKiBUaGlzIGlzIGVxdWFsIHRvIG1vdmluZyBgYm9keS5wb3NpdGlvbmAgYnV0IG5vdCB0aGUgYGJvZHkudmVydGljZXNgLlxuICAgICAqIEludmFsaWQgaWYgdGhlIGBjZW50cmVgIGZhbGxzIG91dHNpZGUgdGhlIGJvZHkncyBjb252ZXggaHVsbC5cbiAgICAgKiBAbWV0aG9kIHNldENlbnRyZVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBjZW50cmVcbiAgICAgKiBAcGFyYW0ge2Jvb2x9IHJlbGF0aXZlXG4gICAgICovXG4gICAgQm9keS5zZXRDZW50cmUgPSBmdW5jdGlvbihib2R5LCBjZW50cmUsIHJlbGF0aXZlKSB7XG4gICAgICAgIGlmICghcmVsYXRpdmUpIHtcbiAgICAgICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnggPSBjZW50cmUueCAtIChib2R5LnBvc2l0aW9uLnggLSBib2R5LnBvc2l0aW9uUHJldi54KTtcbiAgICAgICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnkgPSBjZW50cmUueSAtIChib2R5LnBvc2l0aW9uLnkgLSBib2R5LnBvc2l0aW9uUHJldi55KTtcbiAgICAgICAgICAgIGJvZHkucG9zaXRpb24ueCA9IGNlbnRyZS54O1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvbi55ID0gY2VudHJlLnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uUHJldi54ICs9IGNlbnRyZS54O1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvblByZXYueSArPSBjZW50cmUueTtcbiAgICAgICAgICAgIGJvZHkucG9zaXRpb24ueCArPSBjZW50cmUueDtcbiAgICAgICAgICAgIGJvZHkucG9zaXRpb24ueSArPSBjZW50cmUueTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwb3NpdGlvbiBvZiB0aGUgYm9keSBpbnN0YW50bHkuIFZlbG9jaXR5LCBhbmdsZSwgZm9yY2UgZXRjLiBhcmUgdW5jaGFuZ2VkLlxuICAgICAqIEBtZXRob2Qgc2V0UG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gcG9zaXRpb25cbiAgICAgKi9cbiAgICBCb2R5LnNldFBvc2l0aW9uID0gZnVuY3Rpb24oYm9keSwgcG9zaXRpb24pIHtcbiAgICAgICAgdmFyIGRlbHRhID0gVmVjdG9yLnN1Yihwb3NpdGlvbiwgYm9keS5wb3NpdGlvbik7XG4gICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnggKz0gZGVsdGEueDtcbiAgICAgICAgYm9keS5wb3NpdGlvblByZXYueSArPSBkZWx0YS55O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhcnQgPSBib2R5LnBhcnRzW2ldO1xuICAgICAgICAgICAgcGFydC5wb3NpdGlvbi54ICs9IGRlbHRhLng7XG4gICAgICAgICAgICBwYXJ0LnBvc2l0aW9uLnkgKz0gZGVsdGEueTtcbiAgICAgICAgICAgIFZlcnRpY2VzLnRyYW5zbGF0ZShwYXJ0LnZlcnRpY2VzLCBkZWx0YSk7XG4gICAgICAgICAgICBCb3VuZHMudXBkYXRlKHBhcnQuYm91bmRzLCBwYXJ0LnZlcnRpY2VzLCBib2R5LnZlbG9jaXR5KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBhbmdsZSBvZiB0aGUgYm9keSBpbnN0YW50bHkuIEFuZ3VsYXIgdmVsb2NpdHksIHBvc2l0aW9uLCBmb3JjZSBldGMuIGFyZSB1bmNoYW5nZWQuXG4gICAgICogQG1ldGhvZCBzZXRBbmdsZVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZVxuICAgICAqL1xuICAgIEJvZHkuc2V0QW5nbGUgPSBmdW5jdGlvbihib2R5LCBhbmdsZSkge1xuICAgICAgICB2YXIgZGVsdGEgPSBhbmdsZSAtIGJvZHkuYW5nbGU7XG4gICAgICAgIGJvZHkuYW5nbGVQcmV2ICs9IGRlbHRhO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhcnQgPSBib2R5LnBhcnRzW2ldO1xuICAgICAgICAgICAgcGFydC5hbmdsZSArPSBkZWx0YTtcbiAgICAgICAgICAgIFZlcnRpY2VzLnJvdGF0ZShwYXJ0LnZlcnRpY2VzLCBkZWx0YSwgYm9keS5wb3NpdGlvbik7XG4gICAgICAgICAgICBBeGVzLnJvdGF0ZShwYXJ0LmF4ZXMsIGRlbHRhKTtcbiAgICAgICAgICAgIEJvdW5kcy51cGRhdGUocGFydC5ib3VuZHMsIHBhcnQudmVydGljZXMsIGJvZHkudmVsb2NpdHkpO1xuICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgVmVjdG9yLnJvdGF0ZUFib3V0KHBhcnQucG9zaXRpb24sIGRlbHRhLCBib2R5LnBvc2l0aW9uLCBwYXJ0LnBvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBsaW5lYXIgdmVsb2NpdHkgb2YgdGhlIGJvZHkgaW5zdGFudGx5LiBQb3NpdGlvbiwgYW5nbGUsIGZvcmNlIGV0Yy4gYXJlIHVuY2hhbmdlZC4gU2VlIGFsc28gYEJvZHkuYXBwbHlGb3JjZWAuXG4gICAgICogQG1ldGhvZCBzZXRWZWxvY2l0eVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWxvY2l0eVxuICAgICAqL1xuICAgIEJvZHkuc2V0VmVsb2NpdHkgPSBmdW5jdGlvbihib2R5LCB2ZWxvY2l0eSkge1xuICAgICAgICBib2R5LnBvc2l0aW9uUHJldi54ID0gYm9keS5wb3NpdGlvbi54IC0gdmVsb2NpdHkueDtcbiAgICAgICAgYm9keS5wb3NpdGlvblByZXYueSA9IGJvZHkucG9zaXRpb24ueSAtIHZlbG9jaXR5Lnk7XG4gICAgICAgIGJvZHkudmVsb2NpdHkueCA9IHZlbG9jaXR5Lng7XG4gICAgICAgIGJvZHkudmVsb2NpdHkueSA9IHZlbG9jaXR5Lnk7XG4gICAgICAgIGJvZHkuc3BlZWQgPSBWZWN0b3IubWFnbml0dWRlKGJvZHkudmVsb2NpdHkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBhbmd1bGFyIHZlbG9jaXR5IG9mIHRoZSBib2R5IGluc3RhbnRseS4gUG9zaXRpb24sIGFuZ2xlLCBmb3JjZSBldGMuIGFyZSB1bmNoYW5nZWQuIFNlZSBhbHNvIGBCb2R5LmFwcGx5Rm9yY2VgLlxuICAgICAqIEBtZXRob2Qgc2V0QW5ndWxhclZlbG9jaXR5XG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZlbG9jaXR5XG4gICAgICovXG4gICAgQm9keS5zZXRBbmd1bGFyVmVsb2NpdHkgPSBmdW5jdGlvbihib2R5LCB2ZWxvY2l0eSkge1xuICAgICAgICBib2R5LmFuZ2xlUHJldiA9IGJvZHkuYW5nbGUgLSB2ZWxvY2l0eTtcbiAgICAgICAgYm9keS5hbmd1bGFyVmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICAgICAgYm9keS5hbmd1bGFyU3BlZWQgPSBNYXRoLmFicyhib2R5LmFuZ3VsYXJWZWxvY2l0eSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE1vdmVzIGEgYm9keSBieSBhIGdpdmVuIHZlY3RvciByZWxhdGl2ZSB0byBpdHMgY3VycmVudCBwb3NpdGlvbiwgd2l0aG91dCBpbXBhcnRpbmcgYW55IHZlbG9jaXR5LlxuICAgICAqIEBtZXRob2QgdHJhbnNsYXRlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHRyYW5zbGF0aW9uXG4gICAgICovXG4gICAgQm9keS50cmFuc2xhdGUgPSBmdW5jdGlvbihib2R5LCB0cmFuc2xhdGlvbikge1xuICAgICAgICBCb2R5LnNldFBvc2l0aW9uKGJvZHksIFZlY3Rvci5hZGQoYm9keS5wb3NpdGlvbiwgdHJhbnNsYXRpb24pKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUm90YXRlcyBhIGJvZHkgYnkgYSBnaXZlbiBhbmdsZSByZWxhdGl2ZSB0byBpdHMgY3VycmVudCBhbmdsZSwgd2l0aG91dCBpbXBhcnRpbmcgYW55IGFuZ3VsYXIgdmVsb2NpdHkuXG4gICAgICogQG1ldGhvZCByb3RhdGVcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm90YXRpb25cbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gW3BvaW50XVxuICAgICAqL1xuICAgIEJvZHkucm90YXRlID0gZnVuY3Rpb24oYm9keSwgcm90YXRpb24sIHBvaW50KSB7XG4gICAgICAgIGlmICghcG9pbnQpIHtcbiAgICAgICAgICAgIEJvZHkuc2V0QW5nbGUoYm9keSwgYm9keS5hbmdsZSArIHJvdGF0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhyb3RhdGlvbiksXG4gICAgICAgICAgICAgICAgc2luID0gTWF0aC5zaW4ocm90YXRpb24pLFxuICAgICAgICAgICAgICAgIGR4ID0gYm9keS5wb3NpdGlvbi54IC0gcG9pbnQueCxcbiAgICAgICAgICAgICAgICBkeSA9IGJvZHkucG9zaXRpb24ueSAtIHBvaW50Lnk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBCb2R5LnNldFBvc2l0aW9uKGJvZHksIHtcbiAgICAgICAgICAgICAgICB4OiBwb2ludC54ICsgKGR4ICogY29zIC0gZHkgKiBzaW4pLFxuICAgICAgICAgICAgICAgIHk6IHBvaW50LnkgKyAoZHggKiBzaW4gKyBkeSAqIGNvcylcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBCb2R5LnNldEFuZ2xlKGJvZHksIGJvZHkuYW5nbGUgKyByb3RhdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2NhbGVzIHRoZSBib2R5LCBpbmNsdWRpbmcgdXBkYXRpbmcgcGh5c2ljYWwgcHJvcGVydGllcyAobWFzcywgYXJlYSwgYXhlcywgaW5lcnRpYSksIGZyb20gYSB3b3JsZC1zcGFjZSBwb2ludCAoZGVmYXVsdCBpcyBib2R5IGNlbnRyZSkuXG4gICAgICogQG1ldGhvZCBzY2FsZVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZVhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGVZXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IFtwb2ludF1cbiAgICAgKi9cbiAgICBCb2R5LnNjYWxlID0gZnVuY3Rpb24oYm9keSwgc2NhbGVYLCBzY2FsZVksIHBvaW50KSB7XG4gICAgICAgIHZhciB0b3RhbEFyZWEgPSAwLFxuICAgICAgICAgICAgdG90YWxJbmVydGlhID0gMDtcblxuICAgICAgICBwb2ludCA9IHBvaW50IHx8IGJvZHkucG9zaXRpb247XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2R5LnBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFydCA9IGJvZHkucGFydHNbaV07XG5cbiAgICAgICAgICAgIC8vIHNjYWxlIHZlcnRpY2VzXG4gICAgICAgICAgICBWZXJ0aWNlcy5zY2FsZShwYXJ0LnZlcnRpY2VzLCBzY2FsZVgsIHNjYWxlWSwgcG9pbnQpO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgcHJvcGVydGllc1xuICAgICAgICAgICAgcGFydC5heGVzID0gQXhlcy5mcm9tVmVydGljZXMocGFydC52ZXJ0aWNlcyk7XG4gICAgICAgICAgICBwYXJ0LmFyZWEgPSBWZXJ0aWNlcy5hcmVhKHBhcnQudmVydGljZXMpO1xuICAgICAgICAgICAgQm9keS5zZXRNYXNzKHBhcnQsIGJvZHkuZGVuc2l0eSAqIHBhcnQuYXJlYSk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBpbmVydGlhIChyZXF1aXJlcyB2ZXJ0aWNlcyB0byBiZSBhdCBvcmlnaW4pXG4gICAgICAgICAgICBWZXJ0aWNlcy50cmFuc2xhdGUocGFydC52ZXJ0aWNlcywgeyB4OiAtcGFydC5wb3NpdGlvbi54LCB5OiAtcGFydC5wb3NpdGlvbi55IH0pO1xuICAgICAgICAgICAgQm9keS5zZXRJbmVydGlhKHBhcnQsIEJvZHkuX2luZXJ0aWFTY2FsZSAqIFZlcnRpY2VzLmluZXJ0aWEocGFydC52ZXJ0aWNlcywgcGFydC5tYXNzKSk7XG4gICAgICAgICAgICBWZXJ0aWNlcy50cmFuc2xhdGUocGFydC52ZXJ0aWNlcywgeyB4OiBwYXJ0LnBvc2l0aW9uLngsIHk6IHBhcnQucG9zaXRpb24ueSB9KTtcblxuICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgdG90YWxBcmVhICs9IHBhcnQuYXJlYTtcbiAgICAgICAgICAgICAgICB0b3RhbEluZXJ0aWEgKz0gcGFydC5pbmVydGlhO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzY2FsZSBwb3NpdGlvblxuICAgICAgICAgICAgcGFydC5wb3NpdGlvbi54ID0gcG9pbnQueCArIChwYXJ0LnBvc2l0aW9uLnggLSBwb2ludC54KSAqIHNjYWxlWDtcbiAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueSA9IHBvaW50LnkgKyAocGFydC5wb3NpdGlvbi55IC0gcG9pbnQueSkgKiBzY2FsZVk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBib3VuZHNcbiAgICAgICAgICAgIEJvdW5kcy51cGRhdGUocGFydC5ib3VuZHMsIHBhcnQudmVydGljZXMsIGJvZHkudmVsb2NpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaGFuZGxlIHBhcmVudCBib2R5XG4gICAgICAgIGlmIChib2R5LnBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGJvZHkuYXJlYSA9IHRvdGFsQXJlYTtcblxuICAgICAgICAgICAgaWYgKCFib2R5LmlzU3RhdGljKSB7XG4gICAgICAgICAgICAgICAgQm9keS5zZXRNYXNzKGJvZHksIGJvZHkuZGVuc2l0eSAqIHRvdGFsQXJlYSk7XG4gICAgICAgICAgICAgICAgQm9keS5zZXRJbmVydGlhKGJvZHksIHRvdGFsSW5lcnRpYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYW5kbGUgY2lyY2xlc1xuICAgICAgICBpZiAoYm9keS5jaXJjbGVSYWRpdXMpIHsgXG4gICAgICAgICAgICBpZiAoc2NhbGVYID09PSBzY2FsZVkpIHtcbiAgICAgICAgICAgICAgICBib2R5LmNpcmNsZVJhZGl1cyAqPSBzY2FsZVg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGJvZHkgaXMgbm8gbG9uZ2VyIGEgY2lyY2xlXG4gICAgICAgICAgICAgICAgYm9keS5jaXJjbGVSYWRpdXMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgc2ltdWxhdGlvbiBzdGVwIGZvciB0aGUgZ2l2ZW4gYGJvZHlgLCBpbmNsdWRpbmcgdXBkYXRpbmcgcG9zaXRpb24gYW5kIGFuZ2xlIHVzaW5nIFZlcmxldCBpbnRlZ3JhdGlvbi5cbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZWx0YVRpbWVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVNjYWxlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvcnJlY3Rpb25cbiAgICAgKi9cbiAgICBCb2R5LnVwZGF0ZSA9IGZ1bmN0aW9uKGJvZHksIGRlbHRhVGltZSwgdGltZVNjYWxlLCBjb3JyZWN0aW9uKSB7XG4gICAgICAgIHZhciBkZWx0YVRpbWVTcXVhcmVkID0gTWF0aC5wb3coZGVsdGFUaW1lICogdGltZVNjYWxlICogYm9keS50aW1lU2NhbGUsIDIpO1xuXG4gICAgICAgIC8vIGZyb20gdGhlIHByZXZpb3VzIHN0ZXBcbiAgICAgICAgdmFyIGZyaWN0aW9uQWlyID0gMSAtIGJvZHkuZnJpY3Rpb25BaXIgKiB0aW1lU2NhbGUgKiBib2R5LnRpbWVTY2FsZSxcbiAgICAgICAgICAgIHZlbG9jaXR5UHJldlggPSBib2R5LnBvc2l0aW9uLnggLSBib2R5LnBvc2l0aW9uUHJldi54LFxuICAgICAgICAgICAgdmVsb2NpdHlQcmV2WSA9IGJvZHkucG9zaXRpb24ueSAtIGJvZHkucG9zaXRpb25QcmV2Lnk7XG5cbiAgICAgICAgLy8gdXBkYXRlIHZlbG9jaXR5IHdpdGggVmVybGV0IGludGVncmF0aW9uXG4gICAgICAgIGJvZHkudmVsb2NpdHkueCA9ICh2ZWxvY2l0eVByZXZYICogZnJpY3Rpb25BaXIgKiBjb3JyZWN0aW9uKSArIChib2R5LmZvcmNlLnggLyBib2R5Lm1hc3MpICogZGVsdGFUaW1lU3F1YXJlZDtcbiAgICAgICAgYm9keS52ZWxvY2l0eS55ID0gKHZlbG9jaXR5UHJldlkgKiBmcmljdGlvbkFpciAqIGNvcnJlY3Rpb24pICsgKGJvZHkuZm9yY2UueSAvIGJvZHkubWFzcykgKiBkZWx0YVRpbWVTcXVhcmVkO1xuXG4gICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnggPSBib2R5LnBvc2l0aW9uLng7XG4gICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnkgPSBib2R5LnBvc2l0aW9uLnk7XG4gICAgICAgIGJvZHkucG9zaXRpb24ueCArPSBib2R5LnZlbG9jaXR5Lng7XG4gICAgICAgIGJvZHkucG9zaXRpb24ueSArPSBib2R5LnZlbG9jaXR5Lnk7XG5cbiAgICAgICAgLy8gdXBkYXRlIGFuZ3VsYXIgdmVsb2NpdHkgd2l0aCBWZXJsZXQgaW50ZWdyYXRpb25cbiAgICAgICAgYm9keS5hbmd1bGFyVmVsb2NpdHkgPSAoKGJvZHkuYW5nbGUgLSBib2R5LmFuZ2xlUHJldikgKiBmcmljdGlvbkFpciAqIGNvcnJlY3Rpb24pICsgKGJvZHkudG9ycXVlIC8gYm9keS5pbmVydGlhKSAqIGRlbHRhVGltZVNxdWFyZWQ7XG4gICAgICAgIGJvZHkuYW5nbGVQcmV2ID0gYm9keS5hbmdsZTtcbiAgICAgICAgYm9keS5hbmdsZSArPSBib2R5LmFuZ3VsYXJWZWxvY2l0eTtcblxuICAgICAgICAvLyB0cmFjayBzcGVlZCBhbmQgYWNjZWxlcmF0aW9uXG4gICAgICAgIGJvZHkuc3BlZWQgPSBWZWN0b3IubWFnbml0dWRlKGJvZHkudmVsb2NpdHkpO1xuICAgICAgICBib2R5LmFuZ3VsYXJTcGVlZCA9IE1hdGguYWJzKGJvZHkuYW5ndWxhclZlbG9jaXR5KTtcblxuICAgICAgICAvLyB0cmFuc2Zvcm0gdGhlIGJvZHkgZ2VvbWV0cnlcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2R5LnBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFydCA9IGJvZHkucGFydHNbaV07XG5cbiAgICAgICAgICAgIFZlcnRpY2VzLnRyYW5zbGF0ZShwYXJ0LnZlcnRpY2VzLCBib2R5LnZlbG9jaXR5KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgcGFydC5wb3NpdGlvbi54ICs9IGJvZHkudmVsb2NpdHkueDtcbiAgICAgICAgICAgICAgICBwYXJ0LnBvc2l0aW9uLnkgKz0gYm9keS52ZWxvY2l0eS55O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYm9keS5hbmd1bGFyVmVsb2NpdHkgIT09IDApIHtcbiAgICAgICAgICAgICAgICBWZXJ0aWNlcy5yb3RhdGUocGFydC52ZXJ0aWNlcywgYm9keS5hbmd1bGFyVmVsb2NpdHksIGJvZHkucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIEF4ZXMucm90YXRlKHBhcnQuYXhlcywgYm9keS5hbmd1bGFyVmVsb2NpdHkpO1xuICAgICAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBWZWN0b3Iucm90YXRlQWJvdXQocGFydC5wb3NpdGlvbiwgYm9keS5hbmd1bGFyVmVsb2NpdHksIGJvZHkucG9zaXRpb24sIHBhcnQucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQm91bmRzLnVwZGF0ZShwYXJ0LmJvdW5kcywgcGFydC52ZXJ0aWNlcywgYm9keS52ZWxvY2l0eSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyBhIGZvcmNlIHRvIGEgYm9keSBmcm9tIGEgZ2l2ZW4gd29ybGQtc3BhY2UgcG9zaXRpb24sIGluY2x1ZGluZyByZXN1bHRpbmcgdG9ycXVlLlxuICAgICAqIEBtZXRob2QgYXBwbHlGb3JjZVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBwb3NpdGlvblxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBmb3JjZVxuICAgICAqL1xuICAgIEJvZHkuYXBwbHlGb3JjZSA9IGZ1bmN0aW9uKGJvZHksIHBvc2l0aW9uLCBmb3JjZSkge1xuICAgICAgICBib2R5LmZvcmNlLnggKz0gZm9yY2UueDtcbiAgICAgICAgYm9keS5mb3JjZS55ICs9IGZvcmNlLnk7XG4gICAgICAgIHZhciBvZmZzZXQgPSB7IHg6IHBvc2l0aW9uLnggLSBib2R5LnBvc2l0aW9uLngsIHk6IHBvc2l0aW9uLnkgLSBib2R5LnBvc2l0aW9uLnkgfTtcbiAgICAgICAgYm9keS50b3JxdWUgKz0gb2Zmc2V0LnggKiBmb3JjZS55IC0gb2Zmc2V0LnkgKiBmb3JjZS54O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzdW1zIG9mIHRoZSBwcm9wZXJ0aWVzIG9mIGFsbCBjb21wb3VuZCBwYXJ0cyBvZiB0aGUgcGFyZW50IGJvZHkuXG4gICAgICogQG1ldGhvZCBfdG90YWxQcm9wZXJ0aWVzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcmV0dXJuIHt9XG4gICAgICovXG4gICAgQm9keS5fdG90YWxQcm9wZXJ0aWVzID0gZnVuY3Rpb24oYm9keSkge1xuICAgICAgICAvLyBmcm9tIGVxdWF0aW9ucyBhdDpcbiAgICAgICAgLy8gaHR0cHM6Ly9lY291cnNlcy5vdS5lZHUvY2dpLWJpbi9lYm9vay5jZ2k/ZG9jPSZ0b3BpYz1zdCZjaGFwX3NlYz0wNy4yJnBhZ2U9dGhlb3J5XG4gICAgICAgIC8vIGh0dHA6Ly9vdXRwdXQudG8vc2lkZXdheS9kZWZhdWx0LmFzcD9xbm89MTIxMTAwMDg3XG5cbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSB7XG4gICAgICAgICAgICBtYXNzOiAwLFxuICAgICAgICAgICAgYXJlYTogMCxcbiAgICAgICAgICAgIGluZXJ0aWE6IDAsXG4gICAgICAgICAgICBjZW50cmU6IHsgeDogMCwgeTogMCB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gc3VtIHRoZSBwcm9wZXJ0aWVzIG9mIGFsbCBjb21wb3VuZCBwYXJ0cyBvZiB0aGUgcGFyZW50IGJvZHlcbiAgICAgICAgZm9yICh2YXIgaSA9IGJvZHkucGFydHMubGVuZ3RoID09PSAxID8gMCA6IDE7IGkgPCBib2R5LnBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFydCA9IGJvZHkucGFydHNbaV0sXG4gICAgICAgICAgICAgICAgbWFzcyA9IHBhcnQubWFzcyAhPT0gSW5maW5pdHkgPyBwYXJ0Lm1hc3MgOiAxO1xuXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLm1hc3MgKz0gbWFzcztcbiAgICAgICAgICAgIHByb3BlcnRpZXMuYXJlYSArPSBwYXJ0LmFyZWE7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzLmluZXJ0aWEgKz0gcGFydC5pbmVydGlhO1xuICAgICAgICAgICAgcHJvcGVydGllcy5jZW50cmUgPSBWZWN0b3IuYWRkKHByb3BlcnRpZXMuY2VudHJlLCBWZWN0b3IubXVsdChwYXJ0LnBvc2l0aW9uLCBtYXNzKSk7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wZXJ0aWVzLmNlbnRyZSA9IFZlY3Rvci5kaXYocHJvcGVydGllcy5jZW50cmUsIHByb3BlcnRpZXMubWFzcyk7XG5cbiAgICAgICAgcmV0dXJuIHByb3BlcnRpZXM7XG4gICAgfTtcblxuICAgIC8qXG4gICAgKlxuICAgICogIEV2ZW50cyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIHdoZW4gYSBib2R5IHN0YXJ0cyBzbGVlcGluZyAod2hlcmUgYHRoaXNgIGlzIHRoZSBib2R5KS5cbiAgICAqXG4gICAgKiBAZXZlbnQgc2xlZXBTdGFydFxuICAgICogQHRoaXMge2JvZHl9IFRoZSBib2R5IHRoYXQgaGFzIHN0YXJ0ZWQgc2xlZXBpbmdcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIGEgYm9keSBlbmRzIHNsZWVwaW5nICh3aGVyZSBgdGhpc2AgaXMgdGhlIGJvZHkpLlxuICAgICpcbiAgICAqIEBldmVudCBzbGVlcEVuZFxuICAgICogQHRoaXMge2JvZHl9IFRoZSBib2R5IHRoYXQgaGFzIGVuZGVkIHNsZWVwaW5nXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qXG4gICAgKlxuICAgICogIFByb3BlcnRpZXMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZWdlciBgTnVtYmVyYCB1bmlxdWVseSBpZGVudGlmeWluZyBudW1iZXIgZ2VuZXJhdGVkIGluIGBCb2R5LmNyZWF0ZWAgYnkgYENvbW1vbi5uZXh0SWRgLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGlkXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBTdHJpbmdgIGRlbm90aW5nIHRoZSB0eXBlIG9mIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB0eXBlXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgXCJib2R5XCJcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGFyYml0cmFyeSBgU3RyaW5nYCBuYW1lIHRvIGhlbHAgdGhlIHVzZXIgaWRlbnRpZnkgYW5kIG1hbmFnZSBib2RpZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgbGFiZWxcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBcIkJvZHlcIlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgYm9kaWVzIHRoYXQgbWFrZSB1cCB0aGlzIGJvZHkuIFxuICAgICAqIFRoZSBmaXJzdCBib2R5IGluIHRoZSBhcnJheSBtdXN0IGFsd2F5cyBiZSBhIHNlbGYgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IGJvZHkgaW5zdGFuY2UuXG4gICAgICogQWxsIGJvZGllcyBpbiB0aGUgYHBhcnRzYCBhcnJheSB0b2dldGhlciBmb3JtIGEgc2luZ2xlIHJpZ2lkIGNvbXBvdW5kIGJvZHkuXG4gICAgICogUGFydHMgYXJlIGFsbG93ZWQgdG8gb3ZlcmxhcCwgaGF2ZSBnYXBzIG9yIGhvbGVzIG9yIGV2ZW4gZm9ybSBjb25jYXZlIGJvZGllcy5cbiAgICAgKiBQYXJ0cyB0aGVtc2VsdmVzIHNob3VsZCBuZXZlciBiZSBhZGRlZCB0byBhIGBXb3JsZGAsIG9ubHkgdGhlIHBhcmVudCBib2R5IHNob3VsZCBiZS5cbiAgICAgKiBVc2UgYEJvZHkuc2V0UGFydHNgIHdoZW4gc2V0dGluZyBwYXJ0cyB0byBlbnN1cmUgY29ycmVjdCB1cGRhdGVzIG9mIGFsbCBwcm9wZXJ0aWVzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBhcnRzXG4gICAgICogQHR5cGUgYm9keVtdXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3QgcmVzZXJ2ZWQgZm9yIHN0b3JpbmcgcGx1Z2luLXNwZWNpZmljIHByb3BlcnRpZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcGx1Z2luXG4gICAgICogQHR5cGUge31cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgc2VsZiByZWZlcmVuY2UgaWYgdGhlIGJvZHkgaXMgX25vdF8gYSBwYXJ0IG9mIGFub3RoZXIgYm9keS5cbiAgICAgKiBPdGhlcndpc2UgdGhpcyBpcyBhIHJlZmVyZW5jZSB0byB0aGUgYm9keSB0aGF0IHRoaXMgaXMgYSBwYXJ0IG9mLlxuICAgICAqIFNlZSBgYm9keS5wYXJ0c2AuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcGFyZW50XG4gICAgICogQHR5cGUgYm9keVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCBzcGVjaWZ5aW5nIHRoZSBhbmdsZSBvZiB0aGUgYm9keSwgaW4gcmFkaWFucy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBhbmdsZVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGBWZWN0b3JgIG9iamVjdHMgdGhhdCBzcGVjaWZ5IHRoZSBjb252ZXggaHVsbCBvZiB0aGUgcmlnaWQgYm9keS5cbiAgICAgKiBUaGVzZSBzaG91bGQgYmUgcHJvdmlkZWQgYWJvdXQgdGhlIG9yaWdpbiBgKDAsIDApYC4gRS5nLlxuICAgICAqXG4gICAgICogICAgIFt7IHg6IDAsIHk6IDAgfSwgeyB4OiAyNSwgeTogNTAgfSwgeyB4OiA1MCwgeTogMCB9XVxuICAgICAqXG4gICAgICogV2hlbiBwYXNzZWQgdmlhIGBCb2R5LmNyZWF0ZWAsIHRoZSB2ZXJ0aWNlcyBhcmUgdHJhbnNsYXRlZCByZWxhdGl2ZSB0byBgYm9keS5wb3NpdGlvbmAgKGkuZS4gd29ybGQtc3BhY2UsIGFuZCBjb25zdGFudGx5IHVwZGF0ZWQgYnkgYEJvZHkudXBkYXRlYCBkdXJpbmcgc2ltdWxhdGlvbikuXG4gICAgICogVGhlIGBWZWN0b3JgIG9iamVjdHMgYXJlIGFsc28gYXVnbWVudGVkIHdpdGggYWRkaXRpb25hbCBwcm9wZXJ0aWVzIHJlcXVpcmVkIGZvciBlZmZpY2llbnQgY29sbGlzaW9uIGRldGVjdGlvbi4gXG4gICAgICpcbiAgICAgKiBPdGhlciBwcm9wZXJ0aWVzIHN1Y2ggYXMgYGluZXJ0aWFgIGFuZCBgYm91bmRzYCBhcmUgYXV0b21hdGljYWxseSBjYWxjdWxhdGVkIGZyb20gdGhlIHBhc3NlZCB2ZXJ0aWNlcyAodW5sZXNzIHByb3ZpZGVkIHZpYSBgb3B0aW9uc2ApLlxuICAgICAqIENvbmNhdmUgaHVsbHMgYXJlIG5vdCBjdXJyZW50bHkgc3VwcG9ydGVkLiBUaGUgbW9kdWxlIGBNYXR0ZXIuVmVydGljZXNgIGNvbnRhaW5zIHVzZWZ1bCBtZXRob2RzIGZvciB3b3JraW5nIHdpdGggdmVydGljZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdmVydGljZXNcbiAgICAgKiBAdHlwZSB2ZWN0b3JbXVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgVmVjdG9yYCB0aGF0IHNwZWNpZmllcyB0aGUgY3VycmVudCB3b3JsZC1zcGFjZSBwb3NpdGlvbiBvZiB0aGUgYm9keS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwb3NpdGlvblxuICAgICAqIEB0eXBlIHZlY3RvclxuICAgICAqIEBkZWZhdWx0IHsgeDogMCwgeTogMCB9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBWZWN0b3JgIHRoYXQgc3BlY2lmaWVzIHRoZSBmb3JjZSB0byBhcHBseSBpbiB0aGUgY3VycmVudCBzdGVwLiBJdCBpcyB6ZXJvZWQgYWZ0ZXIgZXZlcnkgYEJvZHkudXBkYXRlYC4gU2VlIGFsc28gYEJvZHkuYXBwbHlGb3JjZWAuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZm9yY2VcbiAgICAgKiBAdHlwZSB2ZWN0b3JcbiAgICAgKiBAZGVmYXVsdCB7IHg6IDAsIHk6IDAgfVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IHNwZWNpZmllcyB0aGUgdG9ycXVlICh0dXJuaW5nIGZvcmNlKSB0byBhcHBseSBpbiB0aGUgY3VycmVudCBzdGVwLiBJdCBpcyB6ZXJvZWQgYWZ0ZXIgZXZlcnkgYEJvZHkudXBkYXRlYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB0b3JxdWVcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgX21lYXN1cmVzXyB0aGUgY3VycmVudCBzcGVlZCBvZiB0aGUgYm9keSBhZnRlciB0aGUgbGFzdCBgQm9keS51cGRhdGVgLiBJdCBpcyByZWFkLW9ubHkgYW5kIGFsd2F5cyBwb3NpdGl2ZSAoaXQncyB0aGUgbWFnbml0dWRlIG9mIGBib2R5LnZlbG9jaXR5YCkuXG4gICAgICpcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKiBAcHJvcGVydHkgc3BlZWRcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgX21lYXN1cmVzXyB0aGUgY3VycmVudCBhbmd1bGFyIHNwZWVkIG9mIHRoZSBib2R5IGFmdGVyIHRoZSBsYXN0IGBCb2R5LnVwZGF0ZWAuIEl0IGlzIHJlYWQtb25seSBhbmQgYWx3YXlzIHBvc2l0aXZlIChpdCdzIHRoZSBtYWduaXR1ZGUgb2YgYGJvZHkuYW5ndWxhclZlbG9jaXR5YCkuXG4gICAgICpcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKiBAcHJvcGVydHkgYW5ndWxhclNwZWVkXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgVmVjdG9yYCB0aGF0IF9tZWFzdXJlc18gdGhlIGN1cnJlbnQgdmVsb2NpdHkgb2YgdGhlIGJvZHkgYWZ0ZXIgdGhlIGxhc3QgYEJvZHkudXBkYXRlYC4gSXQgaXMgcmVhZC1vbmx5LiBcbiAgICAgKiBJZiB5b3UgbmVlZCB0byBtb2RpZnkgYSBib2R5J3MgdmVsb2NpdHkgZGlyZWN0bHksIHlvdSBzaG91bGQgZWl0aGVyIGFwcGx5IGEgZm9yY2Ugb3Igc2ltcGx5IGNoYW5nZSB0aGUgYm9keSdzIGBwb3NpdGlvbmAgKGFzIHRoZSBlbmdpbmUgdXNlcyBwb3NpdGlvbi1WZXJsZXQgaW50ZWdyYXRpb24pLlxuICAgICAqXG4gICAgICogQHJlYWRPbmx5XG4gICAgICogQHByb3BlcnR5IHZlbG9jaXR5XG4gICAgICogQHR5cGUgdmVjdG9yXG4gICAgICogQGRlZmF1bHQgeyB4OiAwLCB5OiAwIH1cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBfbWVhc3VyZXNfIHRoZSBjdXJyZW50IGFuZ3VsYXIgdmVsb2NpdHkgb2YgdGhlIGJvZHkgYWZ0ZXIgdGhlIGxhc3QgYEJvZHkudXBkYXRlYC4gSXQgaXMgcmVhZC1vbmx5LiBcbiAgICAgKiBJZiB5b3UgbmVlZCB0byBtb2RpZnkgYSBib2R5J3MgYW5ndWxhciB2ZWxvY2l0eSBkaXJlY3RseSwgeW91IHNob3VsZCBhcHBseSBhIHRvcnF1ZSBvciBzaW1wbHkgY2hhbmdlIHRoZSBib2R5J3MgYGFuZ2xlYCAoYXMgdGhlIGVuZ2luZSB1c2VzIHBvc2l0aW9uLVZlcmxldCBpbnRlZ3JhdGlvbikuXG4gICAgICpcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKiBAcHJvcGVydHkgYW5ndWxhclZlbG9jaXR5XG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgYSBib2R5IGlzIGNvbnNpZGVyZWQgc3RhdGljLiBBIHN0YXRpYyBib2R5IGNhbiBuZXZlciBjaGFuZ2UgcG9zaXRpb24gb3IgYW5nbGUgYW5kIGlzIGNvbXBsZXRlbHkgZml4ZWQuXG4gICAgICogSWYgeW91IG5lZWQgdG8gc2V0IGEgYm9keSBhcyBzdGF0aWMgYWZ0ZXIgaXRzIGNyZWF0aW9uLCB5b3Ugc2hvdWxkIHVzZSBgQm9keS5zZXRTdGF0aWNgIGFzIHRoaXMgcmVxdWlyZXMgbW9yZSB0aGFuIGp1c3Qgc2V0dGluZyB0aGlzIGZsYWcuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgaXNTdGF0aWNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0aGF0IGluZGljYXRlcyB3aGV0aGVyIGEgYm9keSBpcyBhIHNlbnNvci4gU2Vuc29yIHRyaWdnZXJzIGNvbGxpc2lvbiBldmVudHMsIGJ1dCBkb2Vzbid0IHJlYWN0IHdpdGggY29sbGlkaW5nIGJvZHkgcGh5c2ljYWxseS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBpc1NlbnNvclxuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGJvZHkgaXMgY29uc2lkZXJlZCBzbGVlcGluZy4gQSBzbGVlcGluZyBib2R5IGFjdHMgc2ltaWxhciB0byBhIHN0YXRpYyBib2R5LCBleGNlcHQgaXQgaXMgb25seSB0ZW1wb3JhcnkgYW5kIGNhbiBiZSBhd29rZW4uXG4gICAgICogSWYgeW91IG5lZWQgdG8gc2V0IGEgYm9keSBhcyBzbGVlcGluZywgeW91IHNob3VsZCB1c2UgYFNsZWVwaW5nLnNldGAgYXMgdGhpcyByZXF1aXJlcyBtb3JlIHRoYW4ganVzdCBzZXR0aW5nIHRoaXMgZmxhZy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBpc1NsZWVwaW5nXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgX21lYXN1cmVzXyB0aGUgYW1vdW50IG9mIG1vdmVtZW50IGEgYm9keSBjdXJyZW50bHkgaGFzIChhIGNvbWJpbmF0aW9uIG9mIGBzcGVlZGAgYW5kIGBhbmd1bGFyU3BlZWRgKS4gSXQgaXMgcmVhZC1vbmx5IGFuZCBhbHdheXMgcG9zaXRpdmUuXG4gICAgICogSXQgaXMgdXNlZCBhbmQgdXBkYXRlZCBieSB0aGUgYE1hdHRlci5TbGVlcGluZ2AgbW9kdWxlIGR1cmluZyBzaW11bGF0aW9uIHRvIGRlY2lkZSBpZiBhIGJvZHkgaGFzIGNvbWUgdG8gcmVzdC5cbiAgICAgKlxuICAgICAqIEByZWFkT25seVxuICAgICAqIEBwcm9wZXJ0eSBtb3Rpb25cbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgbnVtYmVyIG9mIHVwZGF0ZXMgaW4gd2hpY2ggdGhpcyBib2R5IG11c3QgaGF2ZSBuZWFyLXplcm8gdmVsb2NpdHkgYmVmb3JlIGl0IGlzIHNldCBhcyBzbGVlcGluZyBieSB0aGUgYE1hdHRlci5TbGVlcGluZ2AgbW9kdWxlIChpZiBzbGVlcGluZyBpcyBlbmFibGVkIGJ5IHRoZSBlbmdpbmUpLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHNsZWVwVGhyZXNob2xkXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgNjBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBkZW5zaXR5IG9mIHRoZSBib2R5LCB0aGF0IGlzIGl0cyBtYXNzIHBlciB1bml0IGFyZWEuXG4gICAgICogSWYgeW91IHBhc3MgdGhlIGRlbnNpdHkgdmlhIGBCb2R5LmNyZWF0ZWAgdGhlIGBtYXNzYCBwcm9wZXJ0eSBpcyBhdXRvbWF0aWNhbGx5IGNhbGN1bGF0ZWQgZm9yIHlvdSBiYXNlZCBvbiB0aGUgc2l6ZSAoYXJlYSkgb2YgdGhlIG9iamVjdC5cbiAgICAgKiBUaGlzIGlzIGdlbmVyYWxseSBwcmVmZXJhYmxlIHRvIHNpbXBseSBzZXR0aW5nIG1hc3MgYW5kIGFsbG93cyBmb3IgbW9yZSBpbnR1aXRpdmUgZGVmaW5pdGlvbiBvZiBtYXRlcmlhbHMgKGUuZy4gcm9jayBoYXMgYSBoaWdoZXIgZGVuc2l0eSB0aGFuIHdvb2QpLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGRlbnNpdHlcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwLjAwMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIG1hc3Mgb2YgdGhlIGJvZHksIGFsdGhvdWdoIGl0IG1heSBiZSBtb3JlIGFwcHJvcHJpYXRlIHRvIHNwZWNpZnkgdGhlIGBkZW5zaXR5YCBwcm9wZXJ0eSBpbnN0ZWFkLlxuICAgICAqIElmIHlvdSBtb2RpZnkgdGhpcyB2YWx1ZSwgeW91IG11c3QgYWxzbyBtb2RpZnkgdGhlIGBib2R5LmludmVyc2VNYXNzYCBwcm9wZXJ0eSAoYDEgLyBtYXNzYCkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgbWFzc1xuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIGludmVyc2UgbWFzcyBvZiB0aGUgYm9keSAoYDEgLyBtYXNzYCkuXG4gICAgICogSWYgeW91IG1vZGlmeSB0aGlzIHZhbHVlLCB5b3UgbXVzdCBhbHNvIG1vZGlmeSB0aGUgYGJvZHkubWFzc2AgcHJvcGVydHkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgaW52ZXJzZU1hc3NcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBtb21lbnQgb2YgaW5lcnRpYSAoaS5lLiBzZWNvbmQgbW9tZW50IG9mIGFyZWEpIG9mIHRoZSBib2R5LlxuICAgICAqIEl0IGlzIGF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlZCBmcm9tIHRoZSBnaXZlbiBjb252ZXggaHVsbCAoYHZlcnRpY2VzYCBhcnJheSkgYW5kIGRlbnNpdHkgaW4gYEJvZHkuY3JlYXRlYC5cbiAgICAgKiBJZiB5b3UgbW9kaWZ5IHRoaXMgdmFsdWUsIHlvdSBtdXN0IGFsc28gbW9kaWZ5IHRoZSBgYm9keS5pbnZlcnNlSW5lcnRpYWAgcHJvcGVydHkgKGAxIC8gaW5lcnRpYWApLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGluZXJ0aWFcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBpbnZlcnNlIG1vbWVudCBvZiBpbmVydGlhIG9mIHRoZSBib2R5IChgMSAvIGluZXJ0aWFgKS5cbiAgICAgKiBJZiB5b3UgbW9kaWZ5IHRoaXMgdmFsdWUsIHlvdSBtdXN0IGFsc28gbW9kaWZ5IHRoZSBgYm9keS5pbmVydGlhYCBwcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBpbnZlcnNlSW5lcnRpYVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIHJlc3RpdHV0aW9uIChlbGFzdGljaXR5KSBvZiB0aGUgYm9keS4gVGhlIHZhbHVlIGlzIGFsd2F5cyBwb3NpdGl2ZSBhbmQgaXMgaW4gdGhlIHJhbmdlIGAoMCwgMSlgLlxuICAgICAqIEEgdmFsdWUgb2YgYDBgIG1lYW5zIGNvbGxpc2lvbnMgbWF5IGJlIHBlcmZlY3RseSBpbmVsYXN0aWMgYW5kIG5vIGJvdW5jaW5nIG1heSBvY2N1ci4gXG4gICAgICogQSB2YWx1ZSBvZiBgMC44YCBtZWFucyB0aGUgYm9keSBtYXkgYm91bmNlIGJhY2sgd2l0aCBhcHByb3hpbWF0ZWx5IDgwJSBvZiBpdHMga2luZXRpYyBlbmVyZ3kuXG4gICAgICogTm90ZSB0aGF0IGNvbGxpc2lvbiByZXNwb25zZSBpcyBiYXNlZCBvbiBfcGFpcnNfIG9mIGJvZGllcywgYW5kIHRoYXQgYHJlc3RpdHV0aW9uYCB2YWx1ZXMgYXJlIF9jb21iaW5lZF8gd2l0aCB0aGUgZm9sbG93aW5nIGZvcm11bGE6XG4gICAgICpcbiAgICAgKiAgICAgTWF0aC5tYXgoYm9keUEucmVzdGl0dXRpb24sIGJvZHlCLnJlc3RpdHV0aW9uKVxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlc3RpdHV0aW9uXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIGZyaWN0aW9uIG9mIHRoZSBib2R5LiBUaGUgdmFsdWUgaXMgYWx3YXlzIHBvc2l0aXZlIGFuZCBpcyBpbiB0aGUgcmFuZ2UgYCgwLCAxKWAuXG4gICAgICogQSB2YWx1ZSBvZiBgMGAgbWVhbnMgdGhhdCB0aGUgYm9keSBtYXkgc2xpZGUgaW5kZWZpbml0ZWx5LlxuICAgICAqIEEgdmFsdWUgb2YgYDFgIG1lYW5zIHRoZSBib2R5IG1heSBjb21lIHRvIGEgc3RvcCBhbG1vc3QgaW5zdGFudGx5IGFmdGVyIGEgZm9yY2UgaXMgYXBwbGllZC5cbiAgICAgKlxuICAgICAqIFRoZSBlZmZlY3RzIG9mIHRoZSB2YWx1ZSBtYXkgYmUgbm9uLWxpbmVhci4gXG4gICAgICogSGlnaCB2YWx1ZXMgbWF5IGJlIHVuc3RhYmxlIGRlcGVuZGluZyBvbiB0aGUgYm9keS5cbiAgICAgKiBUaGUgZW5naW5lIHVzZXMgYSBDb3Vsb21iIGZyaWN0aW9uIG1vZGVsIGluY2x1ZGluZyBzdGF0aWMgYW5kIGtpbmV0aWMgZnJpY3Rpb24uXG4gICAgICogTm90ZSB0aGF0IGNvbGxpc2lvbiByZXNwb25zZSBpcyBiYXNlZCBvbiBfcGFpcnNfIG9mIGJvZGllcywgYW5kIHRoYXQgYGZyaWN0aW9uYCB2YWx1ZXMgYXJlIF9jb21iaW5lZF8gd2l0aCB0aGUgZm9sbG93aW5nIGZvcm11bGE6XG4gICAgICpcbiAgICAgKiAgICAgTWF0aC5taW4oYm9keUEuZnJpY3Rpb24sIGJvZHlCLmZyaWN0aW9uKVxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGZyaWN0aW9uXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMC4xXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgc3RhdGljIGZyaWN0aW9uIG9mIHRoZSBib2R5IChpbiB0aGUgQ291bG9tYiBmcmljdGlvbiBtb2RlbCkuIFxuICAgICAqIEEgdmFsdWUgb2YgYDBgIG1lYW5zIHRoZSBib2R5IHdpbGwgbmV2ZXIgJ3N0aWNrJyB3aGVuIGl0IGlzIG5lYXJseSBzdGF0aW9uYXJ5IGFuZCBvbmx5IGR5bmFtaWMgYGZyaWN0aW9uYCBpcyB1c2VkLlxuICAgICAqIFRoZSBoaWdoZXIgdGhlIHZhbHVlIChlLmcuIGAxMGApLCB0aGUgbW9yZSBmb3JjZSBpdCB3aWxsIHRha2UgdG8gaW5pdGlhbGx5IGdldCB0aGUgYm9keSBtb3Zpbmcgd2hlbiBuZWFybHkgc3RhdGlvbmFyeS5cbiAgICAgKiBUaGlzIHZhbHVlIGlzIG11bHRpcGxpZWQgd2l0aCB0aGUgYGZyaWN0aW9uYCBwcm9wZXJ0eSB0byBtYWtlIGl0IGVhc2llciB0byBjaGFuZ2UgYGZyaWN0aW9uYCBhbmQgbWFpbnRhaW4gYW4gYXBwcm9wcmlhdGUgYW1vdW50IG9mIHN0YXRpYyBmcmljdGlvbi5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBmcmljdGlvblN0YXRpY1xuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDAuNVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIGFpciBmcmljdGlvbiBvZiB0aGUgYm9keSAoYWlyIHJlc2lzdGFuY2UpLiBcbiAgICAgKiBBIHZhbHVlIG9mIGAwYCBtZWFucyB0aGUgYm9keSB3aWxsIG5ldmVyIHNsb3cgYXMgaXQgbW92ZXMgdGhyb3VnaCBzcGFjZS5cbiAgICAgKiBUaGUgaGlnaGVyIHRoZSB2YWx1ZSwgdGhlIGZhc3RlciBhIGJvZHkgc2xvd3Mgd2hlbiBtb3ZpbmcgdGhyb3VnaCBzcGFjZS5cbiAgICAgKiBUaGUgZWZmZWN0cyBvZiB0aGUgdmFsdWUgYXJlIG5vbi1saW5lYXIuIFxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGZyaWN0aW9uQWlyXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMC4wMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYE9iamVjdGAgdGhhdCBzcGVjaWZpZXMgdGhlIGNvbGxpc2lvbiBmaWx0ZXJpbmcgcHJvcGVydGllcyBvZiB0aGlzIGJvZHkuXG4gICAgICpcbiAgICAgKiBDb2xsaXNpb25zIGJldHdlZW4gdHdvIGJvZGllcyB3aWxsIG9iZXkgdGhlIGZvbGxvd2luZyBydWxlczpcbiAgICAgKiAtIElmIHRoZSB0d28gYm9kaWVzIGhhdmUgdGhlIHNhbWUgbm9uLXplcm8gdmFsdWUgb2YgYGNvbGxpc2lvbkZpbHRlci5ncm91cGAsXG4gICAgICogICB0aGV5IHdpbGwgYWx3YXlzIGNvbGxpZGUgaWYgdGhlIHZhbHVlIGlzIHBvc2l0aXZlLCBhbmQgdGhleSB3aWxsIG5ldmVyIGNvbGxpZGVcbiAgICAgKiAgIGlmIHRoZSB2YWx1ZSBpcyBuZWdhdGl2ZS5cbiAgICAgKiAtIElmIHRoZSB0d28gYm9kaWVzIGhhdmUgZGlmZmVyZW50IHZhbHVlcyBvZiBgY29sbGlzaW9uRmlsdGVyLmdyb3VwYCBvciBpZiBvbmVcbiAgICAgKiAgIChvciBib3RoKSBvZiB0aGUgYm9kaWVzIGhhcyBhIHZhbHVlIG9mIDAsIHRoZW4gdGhlIGNhdGVnb3J5L21hc2sgcnVsZXMgYXBwbHkgYXMgZm9sbG93czpcbiAgICAgKlxuICAgICAqIEVhY2ggYm9keSBiZWxvbmdzIHRvIGEgY29sbGlzaW9uIGNhdGVnb3J5LCBnaXZlbiBieSBgY29sbGlzaW9uRmlsdGVyLmNhdGVnb3J5YC4gVGhpc1xuICAgICAqIHZhbHVlIGlzIHVzZWQgYXMgYSBiaXQgZmllbGQgYW5kIHRoZSBjYXRlZ29yeSBzaG91bGQgaGF2ZSBvbmx5IG9uZSBiaXQgc2V0LCBtZWFuaW5nIHRoYXRcbiAgICAgKiB0aGUgdmFsdWUgb2YgdGhpcyBwcm9wZXJ0eSBpcyBhIHBvd2VyIG9mIHR3byBpbiB0aGUgcmFuZ2UgWzEsIDJeMzFdLiBUaHVzLCB0aGVyZSBhcmUgMzJcbiAgICAgKiBkaWZmZXJlbnQgY29sbGlzaW9uIGNhdGVnb3JpZXMgYXZhaWxhYmxlLlxuICAgICAqXG4gICAgICogRWFjaCBib2R5IGFsc28gZGVmaW5lcyBhIGNvbGxpc2lvbiBiaXRtYXNrLCBnaXZlbiBieSBgY29sbGlzaW9uRmlsdGVyLm1hc2tgIHdoaWNoIHNwZWNpZmllc1xuICAgICAqIHRoZSBjYXRlZ29yaWVzIGl0IGNvbGxpZGVzIHdpdGggKHRoZSB2YWx1ZSBpcyB0aGUgYml0d2lzZSBBTkQgdmFsdWUgb2YgYWxsIHRoZXNlIGNhdGVnb3JpZXMpLlxuICAgICAqXG4gICAgICogVXNpbmcgdGhlIGNhdGVnb3J5L21hc2sgcnVsZXMsIHR3byBib2RpZXMgYEFgIGFuZCBgQmAgY29sbGlkZSBpZiBlYWNoIGluY2x1ZGVzIHRoZSBvdGhlcidzXG4gICAgICogY2F0ZWdvcnkgaW4gaXRzIG1hc2ssIGkuZS4gYChjYXRlZ29yeUEgJiBtYXNrQikgIT09IDBgIGFuZCBgKGNhdGVnb3J5QiAmIG1hc2tBKSAhPT0gMGBcbiAgICAgKiBhcmUgYm90aCB0cnVlLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGNvbGxpc2lvbkZpbHRlclxuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gSW50ZWdlciBgTnVtYmVyYCwgdGhhdCBzcGVjaWZpZXMgdGhlIGNvbGxpc2lvbiBncm91cCB0aGlzIGJvZHkgYmVsb25ncyB0by5cbiAgICAgKiBTZWUgYGJvZHkuY29sbGlzaW9uRmlsdGVyYCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjb2xsaXNpb25GaWx0ZXIuZ3JvdXBcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGJpdCBmaWVsZCB0aGF0IHNwZWNpZmllcyB0aGUgY29sbGlzaW9uIGNhdGVnb3J5IHRoaXMgYm9keSBiZWxvbmdzIHRvLlxuICAgICAqIFRoZSBjYXRlZ29yeSB2YWx1ZSBzaG91bGQgaGF2ZSBvbmx5IG9uZSBiaXQgc2V0LCBmb3IgZXhhbXBsZSBgMHgwMDAxYC5cbiAgICAgKiBUaGlzIG1lYW5zIHRoZXJlIGFyZSB1cCB0byAzMiB1bmlxdWUgY29sbGlzaW9uIGNhdGVnb3JpZXMgYXZhaWxhYmxlLlxuICAgICAqIFNlZSBgYm9keS5jb2xsaXNpb25GaWx0ZXJgIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGNvbGxpc2lvbkZpbHRlci5jYXRlZ29yeVxuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYml0IG1hc2sgdGhhdCBzcGVjaWZpZXMgdGhlIGNvbGxpc2lvbiBjYXRlZ29yaWVzIHRoaXMgYm9keSBtYXkgY29sbGlkZSB3aXRoLlxuICAgICAqIFNlZSBgYm9keS5jb2xsaXNpb25GaWx0ZXJgIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGNvbGxpc2lvbkZpbHRlci5tYXNrXG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICogQGRlZmF1bHQgLTFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgYSB0b2xlcmFuY2Ugb24gaG93IGZhciBhIGJvZHkgaXMgYWxsb3dlZCB0byAnc2luaycgb3Igcm90YXRlIGludG8gb3RoZXIgYm9kaWVzLlxuICAgICAqIEF2b2lkIGNoYW5naW5nIHRoaXMgdmFsdWUgdW5sZXNzIHlvdSB1bmRlcnN0YW5kIHRoZSBwdXJwb3NlIG9mIGBzbG9wYCBpbiBwaHlzaWNzIGVuZ2luZXMuXG4gICAgICogVGhlIGRlZmF1bHQgc2hvdWxkIGdlbmVyYWxseSBzdWZmaWNlLCBhbHRob3VnaCB2ZXJ5IGxhcmdlIGJvZGllcyBtYXkgcmVxdWlyZSBsYXJnZXIgdmFsdWVzIGZvciBzdGFibGUgc3RhY2tpbmcuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgc2xvcFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDAuMDVcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBhbGxvd3MgcGVyLWJvZHkgdGltZSBzY2FsaW5nLCBlLmcuIGEgZm9yY2UtZmllbGQgd2hlcmUgYm9kaWVzIGluc2lkZSBhcmUgaW4gc2xvdy1tb3Rpb24sIHdoaWxlIG90aGVycyBhcmUgYXQgZnVsbCBzcGVlZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB0aW1lU2NhbGVcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBgT2JqZWN0YCB0aGF0IGRlZmluZXMgdGhlIHJlbmRlcmluZyBwcm9wZXJ0aWVzIHRvIGJlIGNvbnN1bWVkIGJ5IHRoZSBtb2R1bGUgYE1hdHRlci5SZW5kZXJgLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlclxuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSBib2R5IHNob3VsZCBiZSByZW5kZXJlZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIudmlzaWJsZVxuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBvcGFjaXR5IHRvIHVzZSB3aGVuIHJlbmRlcmluZy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIub3BhY2l0eVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYE9iamVjdGAgdGhhdCBkZWZpbmVzIHRoZSBzcHJpdGUgcHJvcGVydGllcyB0byB1c2Ugd2hlbiByZW5kZXJpbmcsIGlmIGFueS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIuc3ByaXRlXG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBgU3RyaW5nYCB0aGF0IGRlZmluZXMgdGhlIHBhdGggdG8gdGhlIGltYWdlIHRvIHVzZSBhcyB0aGUgc3ByaXRlIHRleHR1cmUsIGlmIGFueS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIuc3ByaXRlLnRleHR1cmVcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKi9cbiAgICAgXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIHNjYWxpbmcgaW4gdGhlIHgtYXhpcyBmb3IgdGhlIHNwcml0ZSwgaWYgYW55LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci5zcHJpdGUueFNjYWxlXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIHNjYWxpbmcgaW4gdGhlIHktYXhpcyBmb3IgdGhlIHNwcml0ZSwgaWYgYW55LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci5zcHJpdGUueVNjYWxlXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBvZmZzZXQgaW4gdGhlIHgtYXhpcyBmb3IgdGhlIHNwcml0ZSAobm9ybWFsaXNlZCBieSB0ZXh0dXJlIHdpZHRoKS5cbiAgICAgICpcbiAgICAgICogQHByb3BlcnR5IHJlbmRlci5zcHJpdGUueE9mZnNldFxuICAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgICogQGRlZmF1bHQgMFxuICAgICAgKi9cblxuICAgIC8qKlxuICAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgb2Zmc2V0IGluIHRoZSB5LWF4aXMgZm9yIHRoZSBzcHJpdGUgKG5vcm1hbGlzZWQgYnkgdGV4dHVyZSBoZWlnaHQpLlxuICAgICAgKlxuICAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnNwcml0ZS55T2Zmc2V0XG4gICAgICAqIEB0eXBlIG51bWJlclxuICAgICAgKiBAZGVmYXVsdCAwXG4gICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIGxpbmUgd2lkdGggdG8gdXNlIHdoZW4gcmVuZGVyaW5nIHRoZSBib2R5IG91dGxpbmUgKGlmIGEgc3ByaXRlIGlzIG5vdCBkZWZpbmVkKS5cbiAgICAgKiBBIHZhbHVlIG9mIGAwYCBtZWFucyBubyBvdXRsaW5lIHdpbGwgYmUgcmVuZGVyZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLmxpbmVXaWR0aFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFN0cmluZ2AgdGhhdCBkZWZpbmVzIHRoZSBmaWxsIHN0eWxlIHRvIHVzZSB3aGVuIHJlbmRlcmluZyB0aGUgYm9keSAoaWYgYSBzcHJpdGUgaXMgbm90IGRlZmluZWQpLlxuICAgICAqIEl0IGlzIHRoZSBzYW1lIGFzIHdoZW4gdXNpbmcgYSBjYW52YXMsIHNvIGl0IGFjY2VwdHMgQ1NTIHN0eWxlIHByb3BlcnR5IHZhbHVlcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIuZmlsbFN0eWxlXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgYSByYW5kb20gY29sb3VyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBTdHJpbmdgIHRoYXQgZGVmaW5lcyB0aGUgc3Ryb2tlIHN0eWxlIHRvIHVzZSB3aGVuIHJlbmRlcmluZyB0aGUgYm9keSBvdXRsaW5lIChpZiBhIHNwcml0ZSBpcyBub3QgZGVmaW5lZCkuXG4gICAgICogSXQgaXMgdGhlIHNhbWUgYXMgd2hlbiB1c2luZyBhIGNhbnZhcywgc28gaXQgYWNjZXB0cyBDU1Mgc3R5bGUgcHJvcGVydHkgdmFsdWVzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci5zdHJva2VTdHlsZVxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0IGEgcmFuZG9tIGNvbG91clxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgdW5pcXVlIGF4aXMgdmVjdG9ycyAoZWRnZSBub3JtYWxzKSB1c2VkIGZvciBjb2xsaXNpb24gZGV0ZWN0aW9uLlxuICAgICAqIFRoZXNlIGFyZSBhdXRvbWF0aWNhbGx5IGNhbGN1bGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gY29udmV4IGh1bGwgKGB2ZXJ0aWNlc2AgYXJyYXkpIGluIGBCb2R5LmNyZWF0ZWAuXG4gICAgICogVGhleSBhcmUgY29uc3RhbnRseSB1cGRhdGVkIGJ5IGBCb2R5LnVwZGF0ZWAgZHVyaW5nIHRoZSBzaW11bGF0aW9uLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGF4ZXNcbiAgICAgKiBAdHlwZSB2ZWN0b3JbXVxuICAgICAqL1xuICAgICBcbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgX21lYXN1cmVzXyB0aGUgYXJlYSBvZiB0aGUgYm9keSdzIGNvbnZleCBodWxsLCBjYWxjdWxhdGVkIGF0IGNyZWF0aW9uIGJ5IGBCb2R5LmNyZWF0ZWAuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYXJlYVxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0IFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgQm91bmRzYCBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSBBQUJCIHJlZ2lvbiBmb3IgdGhlIGJvZHkuXG4gICAgICogSXQgaXMgYXV0b21hdGljYWxseSBjYWxjdWxhdGVkIGZyb20gdGhlIGdpdmVuIGNvbnZleCBodWxsIChgdmVydGljZXNgIGFycmF5KSBpbiBgQm9keS5jcmVhdGVgIGFuZCBjb25zdGFudGx5IHVwZGF0ZWQgYnkgYEJvZHkudXBkYXRlYCBkdXJpbmcgc2ltdWxhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBib3VuZHNcbiAgICAgKiBAdHlwZSBib3VuZHNcbiAgICAgKi9cblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLlNsZWVwaW5nYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyB0byBtYW5hZ2UgdGhlIHNsZWVwaW5nIHN0YXRlIG9mIGJvZGllcy5cbipcbiogQGNsYXNzIFNsZWVwaW5nXG4qL1xuXG52YXIgU2xlZXBpbmcgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBTbGVlcGluZztcblxudmFyIEV2ZW50cyA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIFNsZWVwaW5nLl9tb3Rpb25XYWtlVGhyZXNob2xkID0gMC4xODtcbiAgICBTbGVlcGluZy5fbW90aW9uU2xlZXBUaHJlc2hvbGQgPSAwLjA4O1xuICAgIFNsZWVwaW5nLl9taW5CaWFzID0gMC45O1xuXG4gICAgLyoqXG4gICAgICogUHV0cyBib2RpZXMgdG8gc2xlZXAgb3Igd2FrZXMgdGhlbSB1cCBkZXBlbmRpbmcgb24gdGhlaXIgbW90aW9uLlxuICAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU2NhbGVcbiAgICAgKi9cbiAgICBTbGVlcGluZy51cGRhdGUgPSBmdW5jdGlvbihib2RpZXMsIHRpbWVTY2FsZSkge1xuICAgICAgICB2YXIgdGltZUZhY3RvciA9IHRpbWVTY2FsZSAqIHRpbWVTY2FsZSAqIHRpbWVTY2FsZTtcblxuICAgICAgICAvLyB1cGRhdGUgYm9kaWVzIHNsZWVwaW5nIHN0YXR1c1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV0sXG4gICAgICAgICAgICAgICAgbW90aW9uID0gYm9keS5zcGVlZCAqIGJvZHkuc3BlZWQgKyBib2R5LmFuZ3VsYXJTcGVlZCAqIGJvZHkuYW5ndWxhclNwZWVkO1xuXG4gICAgICAgICAgICAvLyB3YWtlIHVwIGJvZGllcyBpZiB0aGV5IGhhdmUgYSBmb3JjZSBhcHBsaWVkXG4gICAgICAgICAgICBpZiAoYm9keS5mb3JjZS54ICE9PSAwIHx8IGJvZHkuZm9yY2UueSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIFNsZWVwaW5nLnNldChib2R5LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBtaW5Nb3Rpb24gPSBNYXRoLm1pbihib2R5Lm1vdGlvbiwgbW90aW9uKSxcbiAgICAgICAgICAgICAgICBtYXhNb3Rpb24gPSBNYXRoLm1heChib2R5Lm1vdGlvbiwgbW90aW9uKTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBiaWFzZWQgYXZlcmFnZSBtb3Rpb24gZXN0aW1hdGlvbiBiZXR3ZWVuIGZyYW1lc1xuICAgICAgICAgICAgYm9keS5tb3Rpb24gPSBTbGVlcGluZy5fbWluQmlhcyAqIG1pbk1vdGlvbiArICgxIC0gU2xlZXBpbmcuX21pbkJpYXMpICogbWF4TW90aW9uO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoYm9keS5zbGVlcFRocmVzaG9sZCA+IDAgJiYgYm9keS5tb3Rpb24gPCBTbGVlcGluZy5fbW90aW9uU2xlZXBUaHJlc2hvbGQgKiB0aW1lRmFjdG9yKSB7XG4gICAgICAgICAgICAgICAgYm9keS5zbGVlcENvdW50ZXIgKz0gMTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoYm9keS5zbGVlcENvdW50ZXIgPj0gYm9keS5zbGVlcFRocmVzaG9sZClcbiAgICAgICAgICAgICAgICAgICAgU2xlZXBpbmcuc2V0KGJvZHksIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChib2R5LnNsZWVwQ291bnRlciA+IDApIHtcbiAgICAgICAgICAgICAgICBib2R5LnNsZWVwQ291bnRlciAtPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdpdmVuIGEgc2V0IG9mIGNvbGxpZGluZyBwYWlycywgd2FrZXMgdGhlIHNsZWVwaW5nIGJvZGllcyBpbnZvbHZlZC5cbiAgICAgKiBAbWV0aG9kIGFmdGVyQ29sbGlzaW9uc1xuICAgICAqIEBwYXJhbSB7cGFpcltdfSBwYWlyc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU2NhbGVcbiAgICAgKi9cbiAgICBTbGVlcGluZy5hZnRlckNvbGxpc2lvbnMgPSBmdW5jdGlvbihwYWlycywgdGltZVNjYWxlKSB7XG4gICAgICAgIHZhciB0aW1lRmFjdG9yID0gdGltZVNjYWxlICogdGltZVNjYWxlICogdGltZVNjYWxlO1xuXG4gICAgICAgIC8vIHdha2UgdXAgYm9kaWVzIGludm9sdmVkIGluIGNvbGxpc2lvbnNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhaXIgPSBwYWlyc1tpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gZG9uJ3Qgd2FrZSBpbmFjdGl2ZSBwYWlyc1xuICAgICAgICAgICAgaWYgKCFwYWlyLmlzQWN0aXZlKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICB2YXIgY29sbGlzaW9uID0gcGFpci5jb2xsaXNpb24sXG4gICAgICAgICAgICAgICAgYm9keUEgPSBjb2xsaXNpb24uYm9keUEucGFyZW50LCBcbiAgICAgICAgICAgICAgICBib2R5QiA9IGNvbGxpc2lvbi5ib2R5Qi5wYXJlbnQ7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gZG9uJ3Qgd2FrZSBpZiBhdCBsZWFzdCBvbmUgYm9keSBpcyBzdGF0aWNcbiAgICAgICAgICAgIGlmICgoYm9keUEuaXNTbGVlcGluZyAmJiBib2R5Qi5pc1NsZWVwaW5nKSB8fCBib2R5QS5pc1N0YXRpYyB8fCBib2R5Qi5pc1N0YXRpYylcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAoYm9keUEuaXNTbGVlcGluZyB8fCBib2R5Qi5pc1NsZWVwaW5nKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNsZWVwaW5nQm9keSA9IChib2R5QS5pc1NsZWVwaW5nICYmICFib2R5QS5pc1N0YXRpYykgPyBib2R5QSA6IGJvZHlCLFxuICAgICAgICAgICAgICAgICAgICBtb3ZpbmdCb2R5ID0gc2xlZXBpbmdCb2R5ID09PSBib2R5QSA/IGJvZHlCIDogYm9keUE7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXNsZWVwaW5nQm9keS5pc1N0YXRpYyAmJiBtb3ZpbmdCb2R5Lm1vdGlvbiA+IFNsZWVwaW5nLl9tb3Rpb25XYWtlVGhyZXNob2xkICogdGltZUZhY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICBTbGVlcGluZy5zZXQoc2xlZXBpbmdCb2R5LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgXG4gICAgLyoqXG4gICAgICogU2V0IGEgYm9keSBhcyBzbGVlcGluZyBvciBhd2FrZS5cbiAgICAgKiBAbWV0aG9kIHNldFxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTbGVlcGluZ1xuICAgICAqL1xuICAgIFNsZWVwaW5nLnNldCA9IGZ1bmN0aW9uKGJvZHksIGlzU2xlZXBpbmcpIHtcbiAgICAgICAgdmFyIHdhc1NsZWVwaW5nID0gYm9keS5pc1NsZWVwaW5nO1xuXG4gICAgICAgIGlmIChpc1NsZWVwaW5nKSB7XG4gICAgICAgICAgICBib2R5LmlzU2xlZXBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgYm9keS5zbGVlcENvdW50ZXIgPSBib2R5LnNsZWVwVGhyZXNob2xkO1xuXG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uSW1wdWxzZS54ID0gMDtcbiAgICAgICAgICAgIGJvZHkucG9zaXRpb25JbXB1bHNlLnkgPSAwO1xuXG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uUHJldi54ID0gYm9keS5wb3NpdGlvbi54O1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvblByZXYueSA9IGJvZHkucG9zaXRpb24ueTtcblxuICAgICAgICAgICAgYm9keS5hbmdsZVByZXYgPSBib2R5LmFuZ2xlO1xuICAgICAgICAgICAgYm9keS5zcGVlZCA9IDA7XG4gICAgICAgICAgICBib2R5LmFuZ3VsYXJTcGVlZCA9IDA7XG4gICAgICAgICAgICBib2R5Lm1vdGlvbiA9IDA7XG5cbiAgICAgICAgICAgIGlmICghd2FzU2xlZXBpbmcpIHtcbiAgICAgICAgICAgICAgICBFdmVudHMudHJpZ2dlcihib2R5LCAnc2xlZXBTdGFydCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm9keS5pc1NsZWVwaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBib2R5LnNsZWVwQ291bnRlciA9IDA7XG5cbiAgICAgICAgICAgIGlmICh3YXNTbGVlcGluZykge1xuICAgICAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKGJvZHksICdzbGVlcEVuZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLkNvbGxpc2lvbmAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGRldGVjdGluZyBjb2xsaXNpb25zIGJldHdlZW4gYSBnaXZlbiBwYWlyIG9mIGJvZGllcy5cbipcbiogRm9yIGVmZmljaWVudCBkZXRlY3Rpb24gYmV0d2VlbiBhIGxpc3Qgb2YgYm9kaWVzLCBzZWUgYE1hdHRlci5EZXRlY3RvcmAgYW5kIGBNYXR0ZXIuUXVlcnlgLlxuKlxuKiBTZWUgYE1hdHRlci5FbmdpbmVgIGZvciBjb2xsaXNpb24gZXZlbnRzLlxuKlxuKiBAY2xhc3MgQ29sbGlzaW9uXG4qL1xuXG52YXIgQ29sbGlzaW9uID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sbGlzaW9uO1xuXG52YXIgVmVydGljZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIFBhaXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXG4oZnVuY3Rpb24oKSB7XG4gICAgdmFyIF9zdXBwb3J0cyA9IFtdO1xuXG4gICAgdmFyIF9vdmVybGFwQUIgPSB7XG4gICAgICAgIG92ZXJsYXA6IDAsXG4gICAgICAgIGF4aXM6IG51bGxcbiAgICB9O1xuXG4gICAgdmFyIF9vdmVybGFwQkEgPSB7XG4gICAgICAgIG92ZXJsYXA6IDAsXG4gICAgICAgIGF4aXM6IG51bGxcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBjb2xsaXNpb24gcmVjb3JkLlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5QSBUaGUgZmlyc3QgYm9keSBwYXJ0IHJlcHJlc2VudGVkIGJ5IHRoZSBjb2xsaXNpb24gcmVjb3JkXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5QiBUaGUgc2Vjb25kIGJvZHkgcGFydCByZXByZXNlbnRlZCBieSB0aGUgY29sbGlzaW9uIHJlY29yZFxuICAgICAqIEByZXR1cm4ge2NvbGxpc2lvbn0gQSBuZXcgY29sbGlzaW9uIHJlY29yZFxuICAgICAqL1xuICAgIENvbGxpc2lvbi5jcmVhdGUgPSBmdW5jdGlvbihib2R5QSwgYm9keUIpIHtcbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICBwYWlyOiBudWxsLFxuICAgICAgICAgICAgY29sbGlkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgYm9keUE6IGJvZHlBLFxuICAgICAgICAgICAgYm9keUI6IGJvZHlCLFxuICAgICAgICAgICAgcGFyZW50QTogYm9keUEucGFyZW50LFxuICAgICAgICAgICAgcGFyZW50QjogYm9keUIucGFyZW50LFxuICAgICAgICAgICAgZGVwdGg6IDAsXG4gICAgICAgICAgICBub3JtYWw6IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgdGFuZ2VudDogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICBwZW5ldHJhdGlvbjogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICBzdXBwb3J0czogW11cbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGV0ZWN0IGNvbGxpc2lvbiBiZXR3ZWVuIHR3byBib2RpZXMuXG4gICAgICogQG1ldGhvZCBjb2xsaWRlc1xuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keUFcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlCXG4gICAgICogQHBhcmFtIHtwYWlyc30gW3BhaXJzXSBPcHRpb25hbGx5IHJldXNlIGNvbGxpc2lvbiByZWNvcmRzIGZyb20gZXhpc3RpbmcgcGFpcnMuXG4gICAgICogQHJldHVybiB7Y29sbGlzaW9ufG51bGx9IEEgY29sbGlzaW9uIHJlY29yZCBpZiBkZXRlY3RlZCwgb3RoZXJ3aXNlIG51bGxcbiAgICAgKi9cbiAgICBDb2xsaXNpb24uY29sbGlkZXMgPSBmdW5jdGlvbihib2R5QSwgYm9keUIsIHBhaXJzKSB7XG4gICAgICAgIENvbGxpc2lvbi5fb3ZlcmxhcEF4ZXMoX292ZXJsYXBBQiwgYm9keUEudmVydGljZXMsIGJvZHlCLnZlcnRpY2VzLCBib2R5QS5heGVzKTtcblxuICAgICAgICBpZiAoX292ZXJsYXBBQi5vdmVybGFwIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgQ29sbGlzaW9uLl9vdmVybGFwQXhlcyhfb3ZlcmxhcEJBLCBib2R5Qi52ZXJ0aWNlcywgYm9keUEudmVydGljZXMsIGJvZHlCLmF4ZXMpO1xuXG4gICAgICAgIGlmIChfb3ZlcmxhcEJBLm92ZXJsYXAgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXVzZSBjb2xsaXNpb24gcmVjb3JkcyBmb3IgZ2MgZWZmaWNpZW5jeVxuICAgICAgICB2YXIgcGFpciA9IHBhaXJzICYmIHBhaXJzLnRhYmxlW1BhaXIuaWQoYm9keUEsIGJvZHlCKV0sXG4gICAgICAgICAgICBjb2xsaXNpb247XG5cbiAgICAgICAgaWYgKCFwYWlyKSB7XG4gICAgICAgICAgICBjb2xsaXNpb24gPSBDb2xsaXNpb24uY3JlYXRlKGJvZHlBLCBib2R5Qik7XG4gICAgICAgICAgICBjb2xsaXNpb24uY29sbGlkZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29sbGlzaW9uLmJvZHlBID0gYm9keUEuaWQgPCBib2R5Qi5pZCA/IGJvZHlBIDogYm9keUI7XG4gICAgICAgICAgICBjb2xsaXNpb24uYm9keUIgPSBib2R5QS5pZCA8IGJvZHlCLmlkID8gYm9keUIgOiBib2R5QTtcbiAgICAgICAgICAgIGNvbGxpc2lvbi5wYXJlbnRBID0gY29sbGlzaW9uLmJvZHlBLnBhcmVudDtcbiAgICAgICAgICAgIGNvbGxpc2lvbi5wYXJlbnRCID0gY29sbGlzaW9uLmJvZHlCLnBhcmVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbGxpc2lvbiA9IHBhaXIuY29sbGlzaW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keUEgPSBjb2xsaXNpb24uYm9keUE7XG4gICAgICAgIGJvZHlCID0gY29sbGlzaW9uLmJvZHlCO1xuXG4gICAgICAgIHZhciBtaW5PdmVybGFwO1xuXG4gICAgICAgIGlmIChfb3ZlcmxhcEFCLm92ZXJsYXAgPCBfb3ZlcmxhcEJBLm92ZXJsYXApIHtcbiAgICAgICAgICAgIG1pbk92ZXJsYXAgPSBfb3ZlcmxhcEFCO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWluT3ZlcmxhcCA9IF9vdmVybGFwQkE7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbm9ybWFsID0gY29sbGlzaW9uLm5vcm1hbCxcbiAgICAgICAgICAgIHN1cHBvcnRzID0gY29sbGlzaW9uLnN1cHBvcnRzLFxuICAgICAgICAgICAgbWluQXhpcyA9IG1pbk92ZXJsYXAuYXhpcyxcbiAgICAgICAgICAgIG1pbkF4aXNYID0gbWluQXhpcy54LFxuICAgICAgICAgICAgbWluQXhpc1kgPSBtaW5BeGlzLnk7XG5cbiAgICAgICAgLy8gZW5zdXJlIG5vcm1hbCBpcyBmYWNpbmcgYXdheSBmcm9tIGJvZHlBXG4gICAgICAgIGlmIChtaW5BeGlzWCAqIChib2R5Qi5wb3NpdGlvbi54IC0gYm9keUEucG9zaXRpb24ueCkgKyBtaW5BeGlzWSAqIChib2R5Qi5wb3NpdGlvbi55IC0gYm9keUEucG9zaXRpb24ueSkgPCAwKSB7XG4gICAgICAgICAgICBub3JtYWwueCA9IG1pbkF4aXNYO1xuICAgICAgICAgICAgbm9ybWFsLnkgPSBtaW5BeGlzWTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vcm1hbC54ID0gLW1pbkF4aXNYO1xuICAgICAgICAgICAgbm9ybWFsLnkgPSAtbWluQXhpc1k7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbGxpc2lvbi50YW5nZW50LnggPSAtbm9ybWFsLnk7XG4gICAgICAgIGNvbGxpc2lvbi50YW5nZW50LnkgPSBub3JtYWwueDtcblxuICAgICAgICBjb2xsaXNpb24uZGVwdGggPSBtaW5PdmVybGFwLm92ZXJsYXA7XG5cbiAgICAgICAgY29sbGlzaW9uLnBlbmV0cmF0aW9uLnggPSBub3JtYWwueCAqIGNvbGxpc2lvbi5kZXB0aDtcbiAgICAgICAgY29sbGlzaW9uLnBlbmV0cmF0aW9uLnkgPSBub3JtYWwueSAqIGNvbGxpc2lvbi5kZXB0aDtcblxuICAgICAgICAvLyBmaW5kIHN1cHBvcnQgcG9pbnRzLCB0aGVyZSBpcyBhbHdheXMgZWl0aGVyIGV4YWN0bHkgb25lIG9yIHR3b1xuICAgICAgICB2YXIgc3VwcG9ydHNCID0gQ29sbGlzaW9uLl9maW5kU3VwcG9ydHMoYm9keUEsIGJvZHlCLCBub3JtYWwsIDEpLFxuICAgICAgICAgICAgc3VwcG9ydENvdW50ID0gMDtcblxuICAgICAgICAvLyBmaW5kIHRoZSBzdXBwb3J0cyBmcm9tIGJvZHlCIHRoYXQgYXJlIGluc2lkZSBib2R5QVxuICAgICAgICBpZiAoVmVydGljZXMuY29udGFpbnMoYm9keUEudmVydGljZXMsIHN1cHBvcnRzQlswXSkpIHtcbiAgICAgICAgICAgIHN1cHBvcnRzW3N1cHBvcnRDb3VudCsrXSA9IHN1cHBvcnRzQlswXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChWZXJ0aWNlcy5jb250YWlucyhib2R5QS52ZXJ0aWNlcywgc3VwcG9ydHNCWzFdKSkge1xuICAgICAgICAgICAgc3VwcG9ydHNbc3VwcG9ydENvdW50KytdID0gc3VwcG9ydHNCWzFdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmluZCB0aGUgc3VwcG9ydHMgZnJvbSBib2R5QSB0aGF0IGFyZSBpbnNpZGUgYm9keUJcbiAgICAgICAgaWYgKHN1cHBvcnRDb3VudCA8IDIpIHtcbiAgICAgICAgICAgIHZhciBzdXBwb3J0c0EgPSBDb2xsaXNpb24uX2ZpbmRTdXBwb3J0cyhib2R5QiwgYm9keUEsIG5vcm1hbCwgLTEpO1xuXG4gICAgICAgICAgICBpZiAoVmVydGljZXMuY29udGFpbnMoYm9keUIudmVydGljZXMsIHN1cHBvcnRzQVswXSkpIHtcbiAgICAgICAgICAgICAgICBzdXBwb3J0c1tzdXBwb3J0Q291bnQrK10gPSBzdXBwb3J0c0FbMF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzdXBwb3J0Q291bnQgPCAyICYmIFZlcnRpY2VzLmNvbnRhaW5zKGJvZHlCLnZlcnRpY2VzLCBzdXBwb3J0c0FbMV0pKSB7XG4gICAgICAgICAgICAgICAgc3VwcG9ydHNbc3VwcG9ydENvdW50KytdID0gc3VwcG9ydHNBWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWNjb3VudCBmb3IgdGhlIGVkZ2UgY2FzZSBvZiBvdmVybGFwcGluZyBidXQgbm8gdmVydGV4IGNvbnRhaW5tZW50XG4gICAgICAgIGlmIChzdXBwb3J0Q291bnQgPT09IDApIHtcbiAgICAgICAgICAgIHN1cHBvcnRzW3N1cHBvcnRDb3VudCsrXSA9IHN1cHBvcnRzQlswXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVwZGF0ZSBzdXBwb3J0cyBhcnJheSBzaXplXG4gICAgICAgIHN1cHBvcnRzLmxlbmd0aCA9IHN1cHBvcnRDb3VudDtcblxuICAgICAgICByZXR1cm4gY29sbGlzaW9uO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIHRoZSBvdmVybGFwIGJldHdlZW4gdHdvIHNldHMgb2YgdmVydGljZXMuXG4gICAgICogQG1ldGhvZCBfb3ZlcmxhcEF4ZXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXN1bHRcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc0FcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc0JcbiAgICAgKiBAcGFyYW0ge2F4ZXN9IGF4ZXNcbiAgICAgKi9cbiAgICBDb2xsaXNpb24uX292ZXJsYXBBeGVzID0gZnVuY3Rpb24ocmVzdWx0LCB2ZXJ0aWNlc0EsIHZlcnRpY2VzQiwgYXhlcykge1xuICAgICAgICB2YXIgdmVydGljZXNBTGVuZ3RoID0gdmVydGljZXNBLmxlbmd0aCxcbiAgICAgICAgICAgIHZlcnRpY2VzQkxlbmd0aCA9IHZlcnRpY2VzQi5sZW5ndGgsXG4gICAgICAgICAgICB2ZXJ0aWNlc0FYID0gdmVydGljZXNBWzBdLngsXG4gICAgICAgICAgICB2ZXJ0aWNlc0FZID0gdmVydGljZXNBWzBdLnksXG4gICAgICAgICAgICB2ZXJ0aWNlc0JYID0gdmVydGljZXNCWzBdLngsXG4gICAgICAgICAgICB2ZXJ0aWNlc0JZID0gdmVydGljZXNCWzBdLnksXG4gICAgICAgICAgICBheGVzTGVuZ3RoID0gYXhlcy5sZW5ndGgsXG4gICAgICAgICAgICBvdmVybGFwTWluID0gTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIG92ZXJsYXBBeGlzTnVtYmVyID0gMCxcbiAgICAgICAgICAgIG92ZXJsYXAsXG4gICAgICAgICAgICBvdmVybGFwQUIsXG4gICAgICAgICAgICBvdmVybGFwQkEsXG4gICAgICAgICAgICBkb3QsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgajtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXhlc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYXhpcyA9IGF4ZXNbaV0sXG4gICAgICAgICAgICAgICAgYXhpc1ggPSBheGlzLngsXG4gICAgICAgICAgICAgICAgYXhpc1kgPSBheGlzLnksXG4gICAgICAgICAgICAgICAgbWluQSA9IHZlcnRpY2VzQVggKiBheGlzWCArIHZlcnRpY2VzQVkgKiBheGlzWSxcbiAgICAgICAgICAgICAgICBtaW5CID0gdmVydGljZXNCWCAqIGF4aXNYICsgdmVydGljZXNCWSAqIGF4aXNZLFxuICAgICAgICAgICAgICAgIG1heEEgPSBtaW5BLFxuICAgICAgICAgICAgICAgIG1heEIgPSBtaW5CO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGogPSAxOyBqIDwgdmVydGljZXNBTGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICBkb3QgPSB2ZXJ0aWNlc0Fbal0ueCAqIGF4aXNYICsgdmVydGljZXNBW2pdLnkgKiBheGlzWTtcblxuICAgICAgICAgICAgICAgIGlmIChkb3QgPiBtYXhBKSB7IFxuICAgICAgICAgICAgICAgICAgICBtYXhBID0gZG90O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZG90IDwgbWluQSkgeyBcbiAgICAgICAgICAgICAgICAgICAgbWluQSA9IGRvdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaiA9IDE7IGogPCB2ZXJ0aWNlc0JMZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgIGRvdCA9IHZlcnRpY2VzQltqXS54ICogYXhpc1ggKyB2ZXJ0aWNlc0Jbal0ueSAqIGF4aXNZO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRvdCA+IG1heEIpIHsgXG4gICAgICAgICAgICAgICAgICAgIG1heEIgPSBkb3Q7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkb3QgPCBtaW5CKSB7IFxuICAgICAgICAgICAgICAgICAgICBtaW5CID0gZG90O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3ZlcmxhcEFCID0gbWF4QSAtIG1pbkI7XG4gICAgICAgICAgICBvdmVybGFwQkEgPSBtYXhCIC0gbWluQTtcbiAgICAgICAgICAgIG92ZXJsYXAgPSBvdmVybGFwQUIgPCBvdmVybGFwQkEgPyBvdmVybGFwQUIgOiBvdmVybGFwQkE7XG5cbiAgICAgICAgICAgIGlmIChvdmVybGFwIDwgb3ZlcmxhcE1pbikge1xuICAgICAgICAgICAgICAgIG92ZXJsYXBNaW4gPSBvdmVybGFwO1xuICAgICAgICAgICAgICAgIG92ZXJsYXBBeGlzTnVtYmVyID0gaTtcblxuICAgICAgICAgICAgICAgIGlmIChvdmVybGFwIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FuIG5vdCBiZSBpbnRlcnNlY3RpbmdcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5heGlzID0gYXhlc1tvdmVybGFwQXhpc051bWJlcl07XG4gICAgICAgIHJlc3VsdC5vdmVybGFwID0gb3ZlcmxhcE1pbjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHJvamVjdHMgdmVydGljZXMgb24gYW4gYXhpcyBhbmQgcmV0dXJucyBhbiBpbnRlcnZhbC5cbiAgICAgKiBAbWV0aG9kIF9wcm9qZWN0VG9BeGlzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gcHJvamVjdGlvblxuICAgICAqIEBwYXJhbSB7fSB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7fSBheGlzXG4gICAgICovXG4gICAgQ29sbGlzaW9uLl9wcm9qZWN0VG9BeGlzID0gZnVuY3Rpb24ocHJvamVjdGlvbiwgdmVydGljZXMsIGF4aXMpIHtcbiAgICAgICAgdmFyIG1pbiA9IHZlcnRpY2VzWzBdLnggKiBheGlzLnggKyB2ZXJ0aWNlc1swXS55ICogYXhpcy55LFxuICAgICAgICAgICAgbWF4ID0gbWluO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBkb3QgPSB2ZXJ0aWNlc1tpXS54ICogYXhpcy54ICsgdmVydGljZXNbaV0ueSAqIGF4aXMueTtcblxuICAgICAgICAgICAgaWYgKGRvdCA+IG1heCkgeyBcbiAgICAgICAgICAgICAgICBtYXggPSBkb3Q7IFxuICAgICAgICAgICAgfSBlbHNlIGlmIChkb3QgPCBtaW4pIHsgXG4gICAgICAgICAgICAgICAgbWluID0gZG90OyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHByb2plY3Rpb24ubWluID0gbWluO1xuICAgICAgICBwcm9qZWN0aW9uLm1heCA9IG1heDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRmluZHMgc3VwcG9ydGluZyB2ZXJ0aWNlcyBnaXZlbiB0d28gYm9kaWVzIGFsb25nIGEgZ2l2ZW4gZGlyZWN0aW9uIHVzaW5nIGhpbGwtY2xpbWJpbmcuXG4gICAgICogQG1ldGhvZCBfZmluZFN1cHBvcnRzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlBXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5QlxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBub3JtYWxcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGlyZWN0aW9uXG4gICAgICogQHJldHVybiBbdmVjdG9yXVxuICAgICAqL1xuICAgIENvbGxpc2lvbi5fZmluZFN1cHBvcnRzID0gZnVuY3Rpb24oYm9keUEsIGJvZHlCLCBub3JtYWwsIGRpcmVjdGlvbikge1xuICAgICAgICB2YXIgdmVydGljZXMgPSBib2R5Qi52ZXJ0aWNlcyxcbiAgICAgICAgICAgIHZlcnRpY2VzTGVuZ3RoID0gdmVydGljZXMubGVuZ3RoLFxuICAgICAgICAgICAgYm9keUFQb3NpdGlvblggPSBib2R5QS5wb3NpdGlvbi54LFxuICAgICAgICAgICAgYm9keUFQb3NpdGlvblkgPSBib2R5QS5wb3NpdGlvbi55LFxuICAgICAgICAgICAgbm9ybWFsWCA9IG5vcm1hbC54ICogZGlyZWN0aW9uLFxuICAgICAgICAgICAgbm9ybWFsWSA9IG5vcm1hbC55ICogZGlyZWN0aW9uLFxuICAgICAgICAgICAgbmVhcmVzdERpc3RhbmNlID0gTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIHZlcnRleEEsXG4gICAgICAgICAgICB2ZXJ0ZXhCLFxuICAgICAgICAgICAgdmVydGV4QyxcbiAgICAgICAgICAgIGRpc3RhbmNlLFxuICAgICAgICAgICAgajtcblxuICAgICAgICAvLyBmaW5kIGRlZXBlc3QgdmVydGV4IHJlbGF0aXZlIHRvIHRoZSBheGlzXG4gICAgICAgIGZvciAoaiA9IDA7IGogPCB2ZXJ0aWNlc0xlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICB2ZXJ0ZXhCID0gdmVydGljZXNbal07XG4gICAgICAgICAgICBkaXN0YW5jZSA9IG5vcm1hbFggKiAoYm9keUFQb3NpdGlvblggLSB2ZXJ0ZXhCLngpICsgbm9ybWFsWSAqIChib2R5QVBvc2l0aW9uWSAtIHZlcnRleEIueSk7XG5cbiAgICAgICAgICAgIC8vIGNvbnZleCBoaWxsLWNsaW1iaW5nXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCBuZWFyZXN0RGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBuZWFyZXN0RGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhBID0gdmVydGV4QjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1lYXN1cmUgbmV4dCB2ZXJ0ZXhcbiAgICAgICAgdmVydGV4QyA9IHZlcnRpY2VzWyh2ZXJ0aWNlc0xlbmd0aCArIHZlcnRleEEuaW5kZXggLSAxKSAlIHZlcnRpY2VzTGVuZ3RoXTtcbiAgICAgICAgbmVhcmVzdERpc3RhbmNlID0gbm9ybWFsWCAqIChib2R5QVBvc2l0aW9uWCAtIHZlcnRleEMueCkgKyBub3JtYWxZICogKGJvZHlBUG9zaXRpb25ZIC0gdmVydGV4Qy55KTtcblxuICAgICAgICAvLyBjb21wYXJlIHdpdGggcHJldmlvdXMgdmVydGV4XG4gICAgICAgIHZlcnRleEIgPSB2ZXJ0aWNlc1sodmVydGV4QS5pbmRleCArIDEpICUgdmVydGljZXNMZW5ndGhdO1xuICAgICAgICBpZiAobm9ybWFsWCAqIChib2R5QVBvc2l0aW9uWCAtIHZlcnRleEIueCkgKyBub3JtYWxZICogKGJvZHlBUG9zaXRpb25ZIC0gdmVydGV4Qi55KSA8IG5lYXJlc3REaXN0YW5jZSkge1xuICAgICAgICAgICAgX3N1cHBvcnRzWzBdID0gdmVydGV4QTtcbiAgICAgICAgICAgIF9zdXBwb3J0c1sxXSA9IHZlcnRleEI7XG5cbiAgICAgICAgICAgIHJldHVybiBfc3VwcG9ydHM7XG4gICAgICAgIH1cblxuICAgICAgICBfc3VwcG9ydHNbMF0gPSB2ZXJ0ZXhBO1xuICAgICAgICBfc3VwcG9ydHNbMV0gPSB2ZXJ0ZXhDO1xuXG4gICAgICAgIHJldHVybiBfc3VwcG9ydHM7XG4gICAgfTtcblxuICAgIC8qXG4gICAgKlxuICAgICogIFByb3BlcnRpZXMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIHBhaXIgdXNpbmcgdGhpcyBjb2xsaXNpb24gcmVjb3JkLCBpZiB0aGVyZSBpcyBvbmUuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcGFpclxuICAgICAqIEB0eXBlIHtwYWlyfG51bGx9XG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSBib2RpZXMgd2VyZSBjb2xsaWRpbmcgd2hlbiB0aGUgY29sbGlzaW9uIHdhcyBsYXN0IHVwZGF0ZWQuXG4gICAgICogXG4gICAgICogQHByb3BlcnR5IGNvbGxpZGVkXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZmlyc3QgYm9keSBwYXJ0IHJlcHJlc2VudGVkIGJ5IHRoZSBjb2xsaXNpb24gKHNlZSBhbHNvIGBjb2xsaXNpb24ucGFyZW50QWApLlxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSBib2R5QVxuICAgICAqIEB0eXBlIGJvZHlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWNvbmQgYm9keSBwYXJ0IHJlcHJlc2VudGVkIGJ5IHRoZSBjb2xsaXNpb24gKHNlZSBhbHNvIGBjb2xsaXNpb24ucGFyZW50QmApLlxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSBib2R5QlxuICAgICAqIEB0eXBlIGJvZHlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBmaXJzdCBib2R5IHJlcHJlc2VudGVkIGJ5IHRoZSBjb2xsaXNpb24gKGkuZS4gYGNvbGxpc2lvbi5ib2R5QS5wYXJlbnRgKS5cbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkgcGFyZW50QVxuICAgICAqIEB0eXBlIGJvZHlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWNvbmQgYm9keSByZXByZXNlbnRlZCBieSB0aGUgY29sbGlzaW9uIChpLmUuIGBjb2xsaXNpb24uYm9keUIucGFyZW50YCkuXG4gICAgICogXG4gICAgICogQHByb3BlcnR5IHBhcmVudEJcbiAgICAgKiBAdHlwZSBib2R5XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgcmVwcmVzZW50cyB0aGUgbWluaW11bSBzZXBhcmF0aW5nIGRpc3RhbmNlIGJldHdlZW4gdGhlIGJvZGllcyBhbG9uZyB0aGUgY29sbGlzaW9uIG5vcm1hbC5cbiAgICAgKlxuICAgICAqIEByZWFkT25seVxuICAgICAqIEBwcm9wZXJ0eSBkZXB0aFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgbm9ybWFsaXNlZCBgVmVjdG9yYCB0aGF0IHJlcHJlc2VudHMgdGhlIGRpcmVjdGlvbiBiZXR3ZWVuIHRoZSBib2RpZXMgdGhhdCBwcm92aWRlcyB0aGUgbWluaW11bSBzZXBhcmF0aW5nIGRpc3RhbmNlLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG5vcm1hbFxuICAgICAqIEB0eXBlIHZlY3RvclxuICAgICAqIEBkZWZhdWx0IHsgeDogMCwgeTogMCB9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIG5vcm1hbGlzZWQgYFZlY3RvcmAgdGhhdCBpcyB0aGUgdGFuZ2VudCBkaXJlY3Rpb24gdG8gdGhlIGNvbGxpc2lvbiBub3JtYWwuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdGFuZ2VudFxuICAgICAqIEB0eXBlIHZlY3RvclxuICAgICAqIEBkZWZhdWx0IHsgeDogMCwgeTogMCB9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBWZWN0b3JgIHRoYXQgcmVwcmVzZW50cyB0aGUgZGlyZWN0aW9uIGFuZCBkZXB0aCBvZiB0aGUgY29sbGlzaW9uLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBlbmV0cmF0aW9uXG4gICAgICogQHR5cGUgdmVjdG9yXG4gICAgICogQGRlZmF1bHQgeyB4OiAwLCB5OiAwIH1cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGJvZHkgdmVydGljZXMgdGhhdCByZXByZXNlbnQgdGhlIHN1cHBvcnQgcG9pbnRzIGluIHRoZSBjb2xsaXNpb24uXG4gICAgICogVGhlc2UgYXJlIHRoZSBkZWVwZXN0IHZlcnRpY2VzIChhbG9uZyB0aGUgY29sbGlzaW9uIG5vcm1hbCkgb2YgZWFjaCBib2R5IHRoYXQgYXJlIGNvbnRhaW5lZCBieSB0aGUgb3RoZXIgYm9keSdzIHZlcnRpY2VzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHN1cHBvcnRzXG4gICAgICogQHR5cGUgdmVjdG9yW11cbiAgICAgKiBAZGVmYXVsdCBbXVxuICAgICAqL1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuUGFpcmAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgY29sbGlzaW9uIHBhaXJzLlxuKlxuKiBAY2xhc3MgUGFpclxuKi9cblxudmFyIFBhaXIgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYWlyO1xuXG52YXIgQ29udGFjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpO1xuXG4oZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHBhaXIuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge2NvbGxpc2lvbn0gY29sbGlzaW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVzdGFtcFxuICAgICAqIEByZXR1cm4ge3BhaXJ9IEEgbmV3IHBhaXJcbiAgICAgKi9cbiAgICBQYWlyLmNyZWF0ZSA9IGZ1bmN0aW9uKGNvbGxpc2lvbiwgdGltZXN0YW1wKSB7XG4gICAgICAgIHZhciBib2R5QSA9IGNvbGxpc2lvbi5ib2R5QSxcbiAgICAgICAgICAgIGJvZHlCID0gY29sbGlzaW9uLmJvZHlCO1xuXG4gICAgICAgIHZhciBwYWlyID0ge1xuICAgICAgICAgICAgaWQ6IFBhaXIuaWQoYm9keUEsIGJvZHlCKSxcbiAgICAgICAgICAgIGJvZHlBOiBib2R5QSxcbiAgICAgICAgICAgIGJvZHlCOiBib2R5QixcbiAgICAgICAgICAgIGNvbGxpc2lvbjogY29sbGlzaW9uLFxuICAgICAgICAgICAgY29udGFjdHM6IFtdLFxuICAgICAgICAgICAgYWN0aXZlQ29udGFjdHM6IFtdLFxuICAgICAgICAgICAgc2VwYXJhdGlvbjogMCxcbiAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlybWVkQWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgaXNTZW5zb3I6IGJvZHlBLmlzU2Vuc29yIHx8IGJvZHlCLmlzU2Vuc29yLFxuICAgICAgICAgICAgdGltZUNyZWF0ZWQ6IHRpbWVzdGFtcCxcbiAgICAgICAgICAgIHRpbWVVcGRhdGVkOiB0aW1lc3RhbXAsXG4gICAgICAgICAgICBpbnZlcnNlTWFzczogMCxcbiAgICAgICAgICAgIGZyaWN0aW9uOiAwLFxuICAgICAgICAgICAgZnJpY3Rpb25TdGF0aWM6IDAsXG4gICAgICAgICAgICByZXN0aXR1dGlvbjogMCxcbiAgICAgICAgICAgIHNsb3A6IDBcbiAgICAgICAgfTtcblxuICAgICAgICBQYWlyLnVwZGF0ZShwYWlyLCBjb2xsaXNpb24sIHRpbWVzdGFtcCk7XG5cbiAgICAgICAgcmV0dXJuIHBhaXI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYSBwYWlyIGdpdmVuIGEgY29sbGlzaW9uLlxuICAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgICogQHBhcmFtIHtwYWlyfSBwYWlyXG4gICAgICogQHBhcmFtIHtjb2xsaXNpb259IGNvbGxpc2lvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lc3RhbXBcbiAgICAgKi9cbiAgICBQYWlyLnVwZGF0ZSA9IGZ1bmN0aW9uKHBhaXIsIGNvbGxpc2lvbiwgdGltZXN0YW1wKSB7XG4gICAgICAgIHZhciBjb250YWN0cyA9IHBhaXIuY29udGFjdHMsXG4gICAgICAgICAgICBzdXBwb3J0cyA9IGNvbGxpc2lvbi5zdXBwb3J0cyxcbiAgICAgICAgICAgIGFjdGl2ZUNvbnRhY3RzID0gcGFpci5hY3RpdmVDb250YWN0cyxcbiAgICAgICAgICAgIHBhcmVudEEgPSBjb2xsaXNpb24ucGFyZW50QSxcbiAgICAgICAgICAgIHBhcmVudEIgPSBjb2xsaXNpb24ucGFyZW50QixcbiAgICAgICAgICAgIHBhcmVudEFWZXJ0aWNlc0xlbmd0aCA9IHBhcmVudEEudmVydGljZXMubGVuZ3RoO1xuICAgICAgICBcbiAgICAgICAgcGFpci5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHBhaXIudGltZVVwZGF0ZWQgPSB0aW1lc3RhbXA7XG4gICAgICAgIHBhaXIuY29sbGlzaW9uID0gY29sbGlzaW9uO1xuICAgICAgICBwYWlyLnNlcGFyYXRpb24gPSBjb2xsaXNpb24uZGVwdGg7XG4gICAgICAgIHBhaXIuaW52ZXJzZU1hc3MgPSBwYXJlbnRBLmludmVyc2VNYXNzICsgcGFyZW50Qi5pbnZlcnNlTWFzcztcbiAgICAgICAgcGFpci5mcmljdGlvbiA9IHBhcmVudEEuZnJpY3Rpb24gPCBwYXJlbnRCLmZyaWN0aW9uID8gcGFyZW50QS5mcmljdGlvbiA6IHBhcmVudEIuZnJpY3Rpb247XG4gICAgICAgIHBhaXIuZnJpY3Rpb25TdGF0aWMgPSBwYXJlbnRBLmZyaWN0aW9uU3RhdGljID4gcGFyZW50Qi5mcmljdGlvblN0YXRpYyA/IHBhcmVudEEuZnJpY3Rpb25TdGF0aWMgOiBwYXJlbnRCLmZyaWN0aW9uU3RhdGljO1xuICAgICAgICBwYWlyLnJlc3RpdHV0aW9uID0gcGFyZW50QS5yZXN0aXR1dGlvbiA+IHBhcmVudEIucmVzdGl0dXRpb24gPyBwYXJlbnRBLnJlc3RpdHV0aW9uIDogcGFyZW50Qi5yZXN0aXR1dGlvbjtcbiAgICAgICAgcGFpci5zbG9wID0gcGFyZW50QS5zbG9wID4gcGFyZW50Qi5zbG9wID8gcGFyZW50QS5zbG9wIDogcGFyZW50Qi5zbG9wO1xuXG4gICAgICAgIGNvbGxpc2lvbi5wYWlyID0gcGFpcjtcbiAgICAgICAgYWN0aXZlQ29udGFjdHMubGVuZ3RoID0gMDtcbiAgICAgICAgXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3VwcG9ydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBzdXBwb3J0ID0gc3VwcG9ydHNbaV0sXG4gICAgICAgICAgICAgICAgY29udGFjdElkID0gc3VwcG9ydC5ib2R5ID09PSBwYXJlbnRBID8gc3VwcG9ydC5pbmRleCA6IHBhcmVudEFWZXJ0aWNlc0xlbmd0aCArIHN1cHBvcnQuaW5kZXgsXG4gICAgICAgICAgICAgICAgY29udGFjdCA9IGNvbnRhY3RzW2NvbnRhY3RJZF07XG5cbiAgICAgICAgICAgIGlmIChjb250YWN0KSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ29udGFjdHMucHVzaChjb250YWN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ29udGFjdHMucHVzaChjb250YWN0c1tjb250YWN0SWRdID0gQ29udGFjdC5jcmVhdGUoc3VwcG9ydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBTZXQgYSBwYWlyIGFzIGFjdGl2ZSBvciBpbmFjdGl2ZS5cbiAgICAgKiBAbWV0aG9kIHNldEFjdGl2ZVxuICAgICAqIEBwYXJhbSB7cGFpcn0gcGFpclxuICAgICAqIEBwYXJhbSB7Ym9vbH0gaXNBY3RpdmVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZXN0YW1wXG4gICAgICovXG4gICAgUGFpci5zZXRBY3RpdmUgPSBmdW5jdGlvbihwYWlyLCBpc0FjdGl2ZSwgdGltZXN0YW1wKSB7XG4gICAgICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgICAgICAgcGFpci5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBwYWlyLnRpbWVVcGRhdGVkID0gdGltZXN0YW1wO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFpci5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgcGFpci5hY3RpdmVDb250YWN0cy5sZW5ndGggPSAwO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaWQgZm9yIHRoZSBnaXZlbiBwYWlyLlxuICAgICAqIEBtZXRob2QgaWRcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlBXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5QlxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gVW5pcXVlIHBhaXJJZFxuICAgICAqL1xuICAgIFBhaXIuaWQgPSBmdW5jdGlvbihib2R5QSwgYm9keUIpIHtcbiAgICAgICAgaWYgKGJvZHlBLmlkIDwgYm9keUIuaWQpIHtcbiAgICAgICAgICAgIHJldHVybiAnQScgKyBib2R5QS5pZCArICdCJyArIGJvZHlCLmlkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdBJyArIGJvZHlCLmlkICsgJ0InICsgYm9keUEuaWQ7XG4gICAgICAgIH1cbiAgICB9O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMTAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLkNvbnN0cmFpbnRgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIGNvbnN0cmFpbnRzLlxuKiBDb25zdHJhaW50cyBhcmUgdXNlZCBmb3Igc3BlY2lmeWluZyB0aGF0IGEgZml4ZWQgZGlzdGFuY2UgbXVzdCBiZSBtYWludGFpbmVkIGJldHdlZW4gdHdvIGJvZGllcyAob3IgYSBib2R5IGFuZCBhIGZpeGVkIHdvcmxkLXNwYWNlIHBvc2l0aW9uKS5cbiogVGhlIHN0aWZmbmVzcyBvZiBjb25zdHJhaW50cyBjYW4gYmUgbW9kaWZpZWQgdG8gY3JlYXRlIHNwcmluZ3Mgb3IgZWxhc3RpYy5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIENvbnN0cmFpbnRcbiovXG5cbnZhciBDb25zdHJhaW50ID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gQ29uc3RyYWludDtcblxudmFyIFZlcnRpY2VzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbnZhciBWZWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xudmFyIFNsZWVwaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcbnZhciBCb3VuZHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xudmFyIEF4ZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICBDb25zdHJhaW50Ll93YXJtaW5nID0gMC40O1xuICAgIENvbnN0cmFpbnQuX3RvcnF1ZURhbXBlbiA9IDE7XG4gICAgQ29uc3RyYWludC5fbWluTGVuZ3RoID0gMC4wMDAwMDE7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGNvbnN0cmFpbnQuXG4gICAgICogQWxsIHByb3BlcnRpZXMgaGF2ZSBkZWZhdWx0IHZhbHVlcywgYW5kIG1hbnkgYXJlIHByZS1jYWxjdWxhdGVkIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gb3RoZXIgcHJvcGVydGllcy5cbiAgICAgKiBUbyBzaW11bGF0ZSBhIHJldm9sdXRlIGNvbnN0cmFpbnQgKG9yIHBpbiBqb2ludCkgc2V0IGBsZW5ndGg6IDBgIGFuZCBhIGhpZ2ggYHN0aWZmbmVzc2AgdmFsdWUgKGUuZy4gYDAuN2Agb3IgYWJvdmUpLlxuICAgICAqIElmIHRoZSBjb25zdHJhaW50IGlzIHVuc3RhYmxlLCB0cnkgbG93ZXJpbmcgdGhlIGBzdGlmZm5lc3NgIHZhbHVlIGFuZCAvIG9yIGluY3JlYXNpbmcgYGVuZ2luZS5jb25zdHJhaW50SXRlcmF0aW9uc2AuXG4gICAgICogRm9yIGNvbXBvdW5kIGJvZGllcywgY29uc3RyYWludHMgbXVzdCBiZSBhcHBsaWVkIHRvIHRoZSBwYXJlbnQgYm9keSAobm90IG9uZSBvZiBpdHMgcGFydHMpLlxuICAgICAqIFNlZSB0aGUgcHJvcGVydGllcyBzZWN0aW9uIGJlbG93IGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge30gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge2NvbnN0cmFpbnR9IGNvbnN0cmFpbnRcbiAgICAgKi9cbiAgICBDb25zdHJhaW50LmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGNvbnN0cmFpbnQgPSBvcHRpb25zO1xuXG4gICAgICAgIC8vIGlmIGJvZGllcyBkZWZpbmVkIGJ1dCBubyBwb2ludHMsIHVzZSBib2R5IGNlbnRyZVxuICAgICAgICBpZiAoY29uc3RyYWludC5ib2R5QSAmJiAhY29uc3RyYWludC5wb2ludEEpXG4gICAgICAgICAgICBjb25zdHJhaW50LnBvaW50QSA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICBpZiAoY29uc3RyYWludC5ib2R5QiAmJiAhY29uc3RyYWludC5wb2ludEIpXG4gICAgICAgICAgICBjb25zdHJhaW50LnBvaW50QiA9IHsgeDogMCwgeTogMCB9O1xuXG4gICAgICAgIC8vIGNhbGN1bGF0ZSBzdGF0aWMgbGVuZ3RoIHVzaW5nIGluaXRpYWwgd29ybGQgc3BhY2UgcG9pbnRzXG4gICAgICAgIHZhciBpbml0aWFsUG9pbnRBID0gY29uc3RyYWludC5ib2R5QSA/IFZlY3Rvci5hZGQoY29uc3RyYWludC5ib2R5QS5wb3NpdGlvbiwgY29uc3RyYWludC5wb2ludEEpIDogY29uc3RyYWludC5wb2ludEEsXG4gICAgICAgICAgICBpbml0aWFsUG9pbnRCID0gY29uc3RyYWludC5ib2R5QiA/IFZlY3Rvci5hZGQoY29uc3RyYWludC5ib2R5Qi5wb3NpdGlvbiwgY29uc3RyYWludC5wb2ludEIpIDogY29uc3RyYWludC5wb2ludEIsXG4gICAgICAgICAgICBsZW5ndGggPSBWZWN0b3IubWFnbml0dWRlKFZlY3Rvci5zdWIoaW5pdGlhbFBvaW50QSwgaW5pdGlhbFBvaW50QikpO1xuICAgIFxuICAgICAgICBjb25zdHJhaW50Lmxlbmd0aCA9IHR5cGVvZiBjb25zdHJhaW50Lmxlbmd0aCAhPT0gJ3VuZGVmaW5lZCcgPyBjb25zdHJhaW50Lmxlbmd0aCA6IGxlbmd0aDtcblxuICAgICAgICAvLyBvcHRpb24gZGVmYXVsdHNcbiAgICAgICAgY29uc3RyYWludC5pZCA9IGNvbnN0cmFpbnQuaWQgfHwgQ29tbW9uLm5leHRJZCgpO1xuICAgICAgICBjb25zdHJhaW50LmxhYmVsID0gY29uc3RyYWludC5sYWJlbCB8fCAnQ29uc3RyYWludCc7XG4gICAgICAgIGNvbnN0cmFpbnQudHlwZSA9ICdjb25zdHJhaW50JztcbiAgICAgICAgY29uc3RyYWludC5zdGlmZm5lc3MgPSBjb25zdHJhaW50LnN0aWZmbmVzcyB8fCAoY29uc3RyYWludC5sZW5ndGggPiAwID8gMSA6IDAuNyk7XG4gICAgICAgIGNvbnN0cmFpbnQuZGFtcGluZyA9IGNvbnN0cmFpbnQuZGFtcGluZyB8fCAwO1xuICAgICAgICBjb25zdHJhaW50LmFuZ3VsYXJTdGlmZm5lc3MgPSBjb25zdHJhaW50LmFuZ3VsYXJTdGlmZm5lc3MgfHwgMDtcbiAgICAgICAgY29uc3RyYWludC5hbmdsZUEgPSBjb25zdHJhaW50LmJvZHlBID8gY29uc3RyYWludC5ib2R5QS5hbmdsZSA6IGNvbnN0cmFpbnQuYW5nbGVBO1xuICAgICAgICBjb25zdHJhaW50LmFuZ2xlQiA9IGNvbnN0cmFpbnQuYm9keUIgPyBjb25zdHJhaW50LmJvZHlCLmFuZ2xlIDogY29uc3RyYWludC5hbmdsZUI7XG4gICAgICAgIGNvbnN0cmFpbnQucGx1Z2luID0ge307XG5cbiAgICAgICAgLy8gcmVuZGVyXG4gICAgICAgIHZhciByZW5kZXIgPSB7XG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgbGluZVdpZHRoOiAyLFxuICAgICAgICAgICAgc3Ryb2tlU3R5bGU6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICAgIGFuY2hvcnM6IHRydWVcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoY29uc3RyYWludC5sZW5ndGggPT09IDAgJiYgY29uc3RyYWludC5zdGlmZm5lc3MgPiAwLjEpIHtcbiAgICAgICAgICAgIHJlbmRlci50eXBlID0gJ3Bpbic7XG4gICAgICAgICAgICByZW5kZXIuYW5jaG9ycyA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbnN0cmFpbnQuc3RpZmZuZXNzIDwgMC45KSB7XG4gICAgICAgICAgICByZW5kZXIudHlwZSA9ICdzcHJpbmcnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3RyYWludC5yZW5kZXIgPSBDb21tb24uZXh0ZW5kKHJlbmRlciwgY29uc3RyYWludC5yZW5kZXIpO1xuXG4gICAgICAgIHJldHVybiBjb25zdHJhaW50O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJlcyBmb3Igc29sdmluZyBieSBjb25zdHJhaW50IHdhcm1pbmcuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHByZVNvbHZlQWxsXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqL1xuICAgIENvbnN0cmFpbnQucHJlU29sdmVBbGwgPSBmdW5jdGlvbihib2RpZXMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldLFxuICAgICAgICAgICAgICAgIGltcHVsc2UgPSBib2R5LmNvbnN0cmFpbnRJbXB1bHNlO1xuXG4gICAgICAgICAgICBpZiAoYm9keS5pc1N0YXRpYyB8fCAoaW1wdWxzZS54ID09PSAwICYmIGltcHVsc2UueSA9PT0gMCAmJiBpbXB1bHNlLmFuZ2xlID09PSAwKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uLnggKz0gaW1wdWxzZS54O1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvbi55ICs9IGltcHVsc2UueTtcbiAgICAgICAgICAgIGJvZHkuYW5nbGUgKz0gaW1wdWxzZS5hbmdsZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTb2x2ZXMgYWxsIGNvbnN0cmFpbnRzIGluIGEgbGlzdCBvZiBjb2xsaXNpb25zLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBzb2x2ZUFsbFxuICAgICAqIEBwYXJhbSB7Y29uc3RyYWludFtdfSBjb25zdHJhaW50c1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU2NhbGVcbiAgICAgKi9cbiAgICBDb25zdHJhaW50LnNvbHZlQWxsID0gZnVuY3Rpb24oY29uc3RyYWludHMsIHRpbWVTY2FsZSkge1xuICAgICAgICAvLyBTb2x2ZSBmaXhlZCBjb25zdHJhaW50cyBmaXJzdC5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25zdHJhaW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIGNvbnN0cmFpbnQgPSBjb25zdHJhaW50c1tpXSxcbiAgICAgICAgICAgICAgICBmaXhlZEEgPSAhY29uc3RyYWludC5ib2R5QSB8fCAoY29uc3RyYWludC5ib2R5QSAmJiBjb25zdHJhaW50LmJvZHlBLmlzU3RhdGljKSxcbiAgICAgICAgICAgICAgICBmaXhlZEIgPSAhY29uc3RyYWludC5ib2R5QiB8fCAoY29uc3RyYWludC5ib2R5QiAmJiBjb25zdHJhaW50LmJvZHlCLmlzU3RhdGljKTtcblxuICAgICAgICAgICAgaWYgKGZpeGVkQSB8fCBmaXhlZEIpIHtcbiAgICAgICAgICAgICAgICBDb25zdHJhaW50LnNvbHZlKGNvbnN0cmFpbnRzW2ldLCB0aW1lU2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU29sdmUgZnJlZSBjb25zdHJhaW50cyBsYXN0LlxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29uc3RyYWludHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0cmFpbnQgPSBjb25zdHJhaW50c1tpXTtcbiAgICAgICAgICAgIGZpeGVkQSA9ICFjb25zdHJhaW50LmJvZHlBIHx8IChjb25zdHJhaW50LmJvZHlBICYmIGNvbnN0cmFpbnQuYm9keUEuaXNTdGF0aWMpO1xuICAgICAgICAgICAgZml4ZWRCID0gIWNvbnN0cmFpbnQuYm9keUIgfHwgKGNvbnN0cmFpbnQuYm9keUIgJiYgY29uc3RyYWludC5ib2R5Qi5pc1N0YXRpYyk7XG5cbiAgICAgICAgICAgIGlmICghZml4ZWRBICYmICFmaXhlZEIpIHtcbiAgICAgICAgICAgICAgICBDb25zdHJhaW50LnNvbHZlKGNvbnN0cmFpbnRzW2ldLCB0aW1lU2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNvbHZlcyBhIGRpc3RhbmNlIGNvbnN0cmFpbnQgd2l0aCBHYXVzcy1TaWVkZWwgbWV0aG9kLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBzb2x2ZVxuICAgICAqIEBwYXJhbSB7Y29uc3RyYWludH0gY29uc3RyYWludFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU2NhbGVcbiAgICAgKi9cbiAgICBDb25zdHJhaW50LnNvbHZlID0gZnVuY3Rpb24oY29uc3RyYWludCwgdGltZVNjYWxlKSB7XG4gICAgICAgIHZhciBib2R5QSA9IGNvbnN0cmFpbnQuYm9keUEsXG4gICAgICAgICAgICBib2R5QiA9IGNvbnN0cmFpbnQuYm9keUIsXG4gICAgICAgICAgICBwb2ludEEgPSBjb25zdHJhaW50LnBvaW50QSxcbiAgICAgICAgICAgIHBvaW50QiA9IGNvbnN0cmFpbnQucG9pbnRCO1xuXG4gICAgICAgIGlmICghYm9keUEgJiYgIWJvZHlCKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIC8vIHVwZGF0ZSByZWZlcmVuY2UgYW5nbGVcbiAgICAgICAgaWYgKGJvZHlBICYmICFib2R5QS5pc1N0YXRpYykge1xuICAgICAgICAgICAgVmVjdG9yLnJvdGF0ZShwb2ludEEsIGJvZHlBLmFuZ2xlIC0gY29uc3RyYWludC5hbmdsZUEsIHBvaW50QSk7XG4gICAgICAgICAgICBjb25zdHJhaW50LmFuZ2xlQSA9IGJvZHlBLmFuZ2xlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyB1cGRhdGUgcmVmZXJlbmNlIGFuZ2xlXG4gICAgICAgIGlmIChib2R5QiAmJiAhYm9keUIuaXNTdGF0aWMpIHtcbiAgICAgICAgICAgIFZlY3Rvci5yb3RhdGUocG9pbnRCLCBib2R5Qi5hbmdsZSAtIGNvbnN0cmFpbnQuYW5nbGVCLCBwb2ludEIpO1xuICAgICAgICAgICAgY29uc3RyYWludC5hbmdsZUIgPSBib2R5Qi5hbmdsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwb2ludEFXb3JsZCA9IHBvaW50QSxcbiAgICAgICAgICAgIHBvaW50QldvcmxkID0gcG9pbnRCO1xuXG4gICAgICAgIGlmIChib2R5QSkgcG9pbnRBV29ybGQgPSBWZWN0b3IuYWRkKGJvZHlBLnBvc2l0aW9uLCBwb2ludEEpO1xuICAgICAgICBpZiAoYm9keUIpIHBvaW50QldvcmxkID0gVmVjdG9yLmFkZChib2R5Qi5wb3NpdGlvbiwgcG9pbnRCKTtcblxuICAgICAgICBpZiAoIXBvaW50QVdvcmxkIHx8ICFwb2ludEJXb3JsZClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB2YXIgZGVsdGEgPSBWZWN0b3Iuc3ViKHBvaW50QVdvcmxkLCBwb2ludEJXb3JsZCksXG4gICAgICAgICAgICBjdXJyZW50TGVuZ3RoID0gVmVjdG9yLm1hZ25pdHVkZShkZWx0YSk7XG5cbiAgICAgICAgLy8gcHJldmVudCBzaW5ndWxhcml0eVxuICAgICAgICBpZiAoY3VycmVudExlbmd0aCA8IENvbnN0cmFpbnQuX21pbkxlbmd0aCkge1xuICAgICAgICAgICAgY3VycmVudExlbmd0aCA9IENvbnN0cmFpbnQuX21pbkxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNvbHZlIGRpc3RhbmNlIGNvbnN0cmFpbnQgd2l0aCBHYXVzcy1TaWVkZWwgbWV0aG9kXG4gICAgICAgIHZhciBkaWZmZXJlbmNlID0gKGN1cnJlbnRMZW5ndGggLSBjb25zdHJhaW50Lmxlbmd0aCkgLyBjdXJyZW50TGVuZ3RoLFxuICAgICAgICAgICAgc3RpZmZuZXNzID0gY29uc3RyYWludC5zdGlmZm5lc3MgPCAxID8gY29uc3RyYWludC5zdGlmZm5lc3MgKiB0aW1lU2NhbGUgOiBjb25zdHJhaW50LnN0aWZmbmVzcyxcbiAgICAgICAgICAgIGZvcmNlID0gVmVjdG9yLm11bHQoZGVsdGEsIGRpZmZlcmVuY2UgKiBzdGlmZm5lc3MpLFxuICAgICAgICAgICAgbWFzc1RvdGFsID0gKGJvZHlBID8gYm9keUEuaW52ZXJzZU1hc3MgOiAwKSArIChib2R5QiA/IGJvZHlCLmludmVyc2VNYXNzIDogMCksXG4gICAgICAgICAgICBpbmVydGlhVG90YWwgPSAoYm9keUEgPyBib2R5QS5pbnZlcnNlSW5lcnRpYSA6IDApICsgKGJvZHlCID8gYm9keUIuaW52ZXJzZUluZXJ0aWEgOiAwKSxcbiAgICAgICAgICAgIHJlc2lzdGFuY2VUb3RhbCA9IG1hc3NUb3RhbCArIGluZXJ0aWFUb3RhbCxcbiAgICAgICAgICAgIHRvcnF1ZSxcbiAgICAgICAgICAgIHNoYXJlLFxuICAgICAgICAgICAgbm9ybWFsLFxuICAgICAgICAgICAgbm9ybWFsVmVsb2NpdHksXG4gICAgICAgICAgICByZWxhdGl2ZVZlbG9jaXR5O1xuXG4gICAgICAgIGlmIChjb25zdHJhaW50LmRhbXBpbmcpIHtcbiAgICAgICAgICAgIHZhciB6ZXJvID0gVmVjdG9yLmNyZWF0ZSgpO1xuICAgICAgICAgICAgbm9ybWFsID0gVmVjdG9yLmRpdihkZWx0YSwgY3VycmVudExlbmd0aCk7XG5cbiAgICAgICAgICAgIHJlbGF0aXZlVmVsb2NpdHkgPSBWZWN0b3Iuc3ViKFxuICAgICAgICAgICAgICAgIGJvZHlCICYmIFZlY3Rvci5zdWIoYm9keUIucG9zaXRpb24sIGJvZHlCLnBvc2l0aW9uUHJldikgfHwgemVybyxcbiAgICAgICAgICAgICAgICBib2R5QSAmJiBWZWN0b3Iuc3ViKGJvZHlBLnBvc2l0aW9uLCBib2R5QS5wb3NpdGlvblByZXYpIHx8IHplcm9cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIG5vcm1hbFZlbG9jaXR5ID0gVmVjdG9yLmRvdChub3JtYWwsIHJlbGF0aXZlVmVsb2NpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHlBICYmICFib2R5QS5pc1N0YXRpYykge1xuICAgICAgICAgICAgc2hhcmUgPSBib2R5QS5pbnZlcnNlTWFzcyAvIG1hc3NUb3RhbDtcblxuICAgICAgICAgICAgLy8ga2VlcCB0cmFjayBvZiBhcHBsaWVkIGltcHVsc2VzIGZvciBwb3N0IHNvbHZpbmdcbiAgICAgICAgICAgIGJvZHlBLmNvbnN0cmFpbnRJbXB1bHNlLnggLT0gZm9yY2UueCAqIHNoYXJlO1xuICAgICAgICAgICAgYm9keUEuY29uc3RyYWludEltcHVsc2UueSAtPSBmb3JjZS55ICogc2hhcmU7XG5cbiAgICAgICAgICAgIC8vIGFwcGx5IGZvcmNlc1xuICAgICAgICAgICAgYm9keUEucG9zaXRpb24ueCAtPSBmb3JjZS54ICogc2hhcmU7XG4gICAgICAgICAgICBib2R5QS5wb3NpdGlvbi55IC09IGZvcmNlLnkgKiBzaGFyZTtcblxuICAgICAgICAgICAgLy8gYXBwbHkgZGFtcGluZ1xuICAgICAgICAgICAgaWYgKGNvbnN0cmFpbnQuZGFtcGluZykge1xuICAgICAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uUHJldi54IC09IGNvbnN0cmFpbnQuZGFtcGluZyAqIG5vcm1hbC54ICogbm9ybWFsVmVsb2NpdHkgKiBzaGFyZTtcbiAgICAgICAgICAgICAgICBib2R5QS5wb3NpdGlvblByZXYueSAtPSBjb25zdHJhaW50LmRhbXBpbmcgKiBub3JtYWwueSAqIG5vcm1hbFZlbG9jaXR5ICogc2hhcmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFwcGx5IHRvcnF1ZVxuICAgICAgICAgICAgdG9ycXVlID0gKFZlY3Rvci5jcm9zcyhwb2ludEEsIGZvcmNlKSAvIHJlc2lzdGFuY2VUb3RhbCkgKiBDb25zdHJhaW50Ll90b3JxdWVEYW1wZW4gKiBib2R5QS5pbnZlcnNlSW5lcnRpYSAqICgxIC0gY29uc3RyYWludC5hbmd1bGFyU3RpZmZuZXNzKTtcbiAgICAgICAgICAgIGJvZHlBLmNvbnN0cmFpbnRJbXB1bHNlLmFuZ2xlIC09IHRvcnF1ZTtcbiAgICAgICAgICAgIGJvZHlBLmFuZ2xlIC09IHRvcnF1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2R5QiAmJiAhYm9keUIuaXNTdGF0aWMpIHtcbiAgICAgICAgICAgIHNoYXJlID0gYm9keUIuaW52ZXJzZU1hc3MgLyBtYXNzVG90YWw7XG5cbiAgICAgICAgICAgIC8vIGtlZXAgdHJhY2sgb2YgYXBwbGllZCBpbXB1bHNlcyBmb3IgcG9zdCBzb2x2aW5nXG4gICAgICAgICAgICBib2R5Qi5jb25zdHJhaW50SW1wdWxzZS54ICs9IGZvcmNlLnggKiBzaGFyZTtcbiAgICAgICAgICAgIGJvZHlCLmNvbnN0cmFpbnRJbXB1bHNlLnkgKz0gZm9yY2UueSAqIHNoYXJlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBhcHBseSBmb3JjZXNcbiAgICAgICAgICAgIGJvZHlCLnBvc2l0aW9uLnggKz0gZm9yY2UueCAqIHNoYXJlO1xuICAgICAgICAgICAgYm9keUIucG9zaXRpb24ueSArPSBmb3JjZS55ICogc2hhcmU7XG5cbiAgICAgICAgICAgIC8vIGFwcGx5IGRhbXBpbmdcbiAgICAgICAgICAgIGlmIChjb25zdHJhaW50LmRhbXBpbmcpIHtcbiAgICAgICAgICAgICAgICBib2R5Qi5wb3NpdGlvblByZXYueCArPSBjb25zdHJhaW50LmRhbXBpbmcgKiBub3JtYWwueCAqIG5vcm1hbFZlbG9jaXR5ICogc2hhcmU7XG4gICAgICAgICAgICAgICAgYm9keUIucG9zaXRpb25QcmV2LnkgKz0gY29uc3RyYWludC5kYW1waW5nICogbm9ybWFsLnkgKiBub3JtYWxWZWxvY2l0eSAqIHNoYXJlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhcHBseSB0b3JxdWVcbiAgICAgICAgICAgIHRvcnF1ZSA9IChWZWN0b3IuY3Jvc3MocG9pbnRCLCBmb3JjZSkgLyByZXNpc3RhbmNlVG90YWwpICogQ29uc3RyYWludC5fdG9ycXVlRGFtcGVuICogYm9keUIuaW52ZXJzZUluZXJ0aWEgKiAoMSAtIGNvbnN0cmFpbnQuYW5ndWxhclN0aWZmbmVzcyk7XG4gICAgICAgICAgICBib2R5Qi5jb25zdHJhaW50SW1wdWxzZS5hbmdsZSArPSB0b3JxdWU7XG4gICAgICAgICAgICBib2R5Qi5hbmdsZSArPSB0b3JxdWU7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBib2R5IHVwZGF0ZXMgcmVxdWlyZWQgYWZ0ZXIgc29sdmluZyBjb25zdHJhaW50cy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgcG9zdFNvbHZlQWxsXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqL1xuICAgIENvbnN0cmFpbnQucG9zdFNvbHZlQWxsID0gZnVuY3Rpb24oYm9kaWVzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXSxcbiAgICAgICAgICAgICAgICBpbXB1bHNlID0gYm9keS5jb25zdHJhaW50SW1wdWxzZTtcblxuICAgICAgICAgICAgaWYgKGJvZHkuaXNTdGF0aWMgfHwgKGltcHVsc2UueCA9PT0gMCAmJiBpbXB1bHNlLnkgPT09IDAgJiYgaW1wdWxzZS5hbmdsZSA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgU2xlZXBpbmcuc2V0KGJvZHksIGZhbHNlKTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIGdlb21ldHJ5IGFuZCByZXNldFxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBib2R5LnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBib2R5LnBhcnRzW2pdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFZlcnRpY2VzLnRyYW5zbGF0ZShwYXJ0LnZlcnRpY2VzLCBpbXB1bHNlKTtcblxuICAgICAgICAgICAgICAgIGlmIChqID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0LnBvc2l0aW9uLnggKz0gaW1wdWxzZS54O1xuICAgICAgICAgICAgICAgICAgICBwYXJ0LnBvc2l0aW9uLnkgKz0gaW1wdWxzZS55O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpbXB1bHNlLmFuZ2xlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFZlcnRpY2VzLnJvdGF0ZShwYXJ0LnZlcnRpY2VzLCBpbXB1bHNlLmFuZ2xlLCBib2R5LnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgQXhlcy5yb3RhdGUocGFydC5heGVzLCBpbXB1bHNlLmFuZ2xlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGogPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBWZWN0b3Iucm90YXRlQWJvdXQocGFydC5wb3NpdGlvbiwgaW1wdWxzZS5hbmdsZSwgYm9keS5wb3NpdGlvbiwgcGFydC5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBCb3VuZHMudXBkYXRlKHBhcnQuYm91bmRzLCBwYXJ0LnZlcnRpY2VzLCBib2R5LnZlbG9jaXR5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZGFtcGVuIHRoZSBjYWNoZWQgaW1wdWxzZSBmb3Igd2FybWluZyBuZXh0IHN0ZXBcbiAgICAgICAgICAgIGltcHVsc2UuYW5nbGUgKj0gQ29uc3RyYWludC5fd2FybWluZztcbiAgICAgICAgICAgIGltcHVsc2UueCAqPSBDb25zdHJhaW50Ll93YXJtaW5nO1xuICAgICAgICAgICAgaW1wdWxzZS55ICo9IENvbnN0cmFpbnQuX3dhcm1pbmc7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgd29ybGQtc3BhY2UgcG9zaXRpb24gb2YgYGNvbnN0cmFpbnQucG9pbnRBYCwgYWNjb3VudGluZyBmb3IgYGNvbnN0cmFpbnQuYm9keUFgLlxuICAgICAqIEBtZXRob2QgcG9pbnRBV29ybGRcbiAgICAgKiBAcGFyYW0ge2NvbnN0cmFpbnR9IGNvbnN0cmFpbnRcbiAgICAgKiBAcmV0dXJucyB7dmVjdG9yfSB0aGUgd29ybGQtc3BhY2UgcG9zaXRpb25cbiAgICAgKi9cbiAgICBDb25zdHJhaW50LnBvaW50QVdvcmxkID0gZnVuY3Rpb24oY29uc3RyYWludCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogKGNvbnN0cmFpbnQuYm9keUEgPyBjb25zdHJhaW50LmJvZHlBLnBvc2l0aW9uLnggOiAwKSArIGNvbnN0cmFpbnQucG9pbnRBLngsXG4gICAgICAgICAgICB5OiAoY29uc3RyYWludC5ib2R5QSA/IGNvbnN0cmFpbnQuYm9keUEucG9zaXRpb24ueSA6IDApICsgY29uc3RyYWludC5wb2ludEEueVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB3b3JsZC1zcGFjZSBwb3NpdGlvbiBvZiBgY29uc3RyYWludC5wb2ludEJgLCBhY2NvdW50aW5nIGZvciBgY29uc3RyYWludC5ib2R5QmAuXG4gICAgICogQG1ldGhvZCBwb2ludEJXb3JsZFxuICAgICAqIEBwYXJhbSB7Y29uc3RyYWludH0gY29uc3RyYWludFxuICAgICAqIEByZXR1cm5zIHt2ZWN0b3J9IHRoZSB3b3JsZC1zcGFjZSBwb3NpdGlvblxuICAgICAqL1xuICAgIENvbnN0cmFpbnQucG9pbnRCV29ybGQgPSBmdW5jdGlvbihjb25zdHJhaW50KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiAoY29uc3RyYWludC5ib2R5QiA/IGNvbnN0cmFpbnQuYm9keUIucG9zaXRpb24ueCA6IDApICsgY29uc3RyYWludC5wb2ludEIueCxcbiAgICAgICAgICAgIHk6IChjb25zdHJhaW50LmJvZHlCID8gY29uc3RyYWludC5ib2R5Qi5wb3NpdGlvbi55IDogMCkgKyBjb25zdHJhaW50LnBvaW50Qi55XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qXG4gICAgKlxuICAgICogIFByb3BlcnRpZXMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZWdlciBgTnVtYmVyYCB1bmlxdWVseSBpZGVudGlmeWluZyBudW1iZXIgZ2VuZXJhdGVkIGluIGBDb21wb3NpdGUuY3JlYXRlYCBieSBgQ29tbW9uLm5leHRJZGAuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgaWRcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFN0cmluZ2AgZGVub3RpbmcgdGhlIHR5cGUgb2Ygb2JqZWN0LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHR5cGVcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBcImNvbnN0cmFpbnRcIlxuICAgICAqIEByZWFkT25seVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJiaXRyYXJ5IGBTdHJpbmdgIG5hbWUgdG8gaGVscCB0aGUgdXNlciBpZGVudGlmeSBhbmQgbWFuYWdlIGJvZGllcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBsYWJlbFxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0IFwiQ29uc3RyYWludFwiXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBgT2JqZWN0YCB0aGF0IGRlZmluZXMgdGhlIHJlbmRlcmluZyBwcm9wZXJ0aWVzIHRvIGJlIGNvbnN1bWVkIGJ5IHRoZSBtb2R1bGUgYE1hdHRlci5SZW5kZXJgLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlclxuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSBjb25zdHJhaW50IHNob3VsZCBiZSByZW5kZXJlZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIudmlzaWJsZVxuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgbGluZSB3aWR0aCB0byB1c2Ugd2hlbiByZW5kZXJpbmcgdGhlIGNvbnN0cmFpbnQgb3V0bGluZS5cbiAgICAgKiBBIHZhbHVlIG9mIGAwYCBtZWFucyBubyBvdXRsaW5lIHdpbGwgYmUgcmVuZGVyZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLmxpbmVXaWR0aFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFN0cmluZ2AgdGhhdCBkZWZpbmVzIHRoZSBzdHJva2Ugc3R5bGUgdG8gdXNlIHdoZW4gcmVuZGVyaW5nIHRoZSBjb25zdHJhaW50IG91dGxpbmUuXG4gICAgICogSXQgaXMgdGhlIHNhbWUgYXMgd2hlbiB1c2luZyBhIGNhbnZhcywgc28gaXQgYWNjZXB0cyBDU1Mgc3R5bGUgcHJvcGVydHkgdmFsdWVzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci5zdHJva2VTdHlsZVxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0IGEgcmFuZG9tIGNvbG91clxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgU3RyaW5nYCB0aGF0IGRlZmluZXMgdGhlIGNvbnN0cmFpbnQgcmVuZGVyaW5nIHR5cGUuIFxuICAgICAqIFRoZSBwb3NzaWJsZSB2YWx1ZXMgYXJlICdsaW5lJywgJ3BpbicsICdzcHJpbmcnLlxuICAgICAqIEFuIGFwcHJvcHJpYXRlIHJlbmRlciB0eXBlIHdpbGwgYmUgYXV0b21hdGljYWxseSBjaG9zZW4gdW5sZXNzIG9uZSBpcyBnaXZlbiBpbiBvcHRpb25zLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci50eXBlXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgJ2xpbmUnXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBCb29sZWFuYCB0aGF0IGRlZmluZXMgaWYgdGhlIGNvbnN0cmFpbnQncyBhbmNob3IgcG9pbnRzIHNob3VsZCBiZSByZW5kZXJlZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIuYW5jaG9yc1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZmlyc3QgcG9zc2libGUgYEJvZHlgIHRoYXQgdGhpcyBjb25zdHJhaW50IGlzIGF0dGFjaGVkIHRvLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGJvZHlBXG4gICAgICogQHR5cGUgYm9keVxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWNvbmQgcG9zc2libGUgYEJvZHlgIHRoYXQgdGhpcyBjb25zdHJhaW50IGlzIGF0dGFjaGVkIHRvLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGJvZHlCXG4gICAgICogQHR5cGUgYm9keVxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFZlY3RvcmAgdGhhdCBzcGVjaWZpZXMgdGhlIG9mZnNldCBvZiB0aGUgY29uc3RyYWludCBmcm9tIGNlbnRlciBvZiB0aGUgYGNvbnN0cmFpbnQuYm9keUFgIGlmIGRlZmluZWQsIG90aGVyd2lzZSBhIHdvcmxkLXNwYWNlIHBvc2l0aW9uLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBvaW50QVxuICAgICAqIEB0eXBlIHZlY3RvclxuICAgICAqIEBkZWZhdWx0IHsgeDogMCwgeTogMCB9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBWZWN0b3JgIHRoYXQgc3BlY2lmaWVzIHRoZSBvZmZzZXQgb2YgdGhlIGNvbnN0cmFpbnQgZnJvbSBjZW50ZXIgb2YgdGhlIGBjb25zdHJhaW50LmJvZHlCYCBpZiBkZWZpbmVkLCBvdGhlcndpc2UgYSB3b3JsZC1zcGFjZSBwb3NpdGlvbi5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwb2ludEJcbiAgICAgKiBAdHlwZSB2ZWN0b3JcbiAgICAgKiBAZGVmYXVsdCB7IHg6IDAsIHk6IDAgfVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IHNwZWNpZmllcyB0aGUgc3RpZmZuZXNzIG9mIHRoZSBjb25zdHJhaW50LCBpLmUuIHRoZSByYXRlIGF0IHdoaWNoIGl0IHJldHVybnMgdG8gaXRzIHJlc3RpbmcgYGNvbnN0cmFpbnQubGVuZ3RoYC5cbiAgICAgKiBBIHZhbHVlIG9mIGAxYCBtZWFucyB0aGUgY29uc3RyYWludCBzaG91bGQgYmUgdmVyeSBzdGlmZi5cbiAgICAgKiBBIHZhbHVlIG9mIGAwLjJgIG1lYW5zIHRoZSBjb25zdHJhaW50IGFjdHMgbGlrZSBhIHNvZnQgc3ByaW5nLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHN0aWZmbmVzc1xuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgdGhlIGRhbXBpbmcgb2YgdGhlIGNvbnN0cmFpbnQsIFxuICAgICAqIGkuZS4gdGhlIGFtb3VudCBvZiByZXNpc3RhbmNlIGFwcGxpZWQgdG8gZWFjaCBib2R5IGJhc2VkIG9uIHRoZWlyIHZlbG9jaXRpZXMgdG8gbGltaXQgdGhlIGFtb3VudCBvZiBvc2NpbGxhdGlvbi5cbiAgICAgKiBEYW1waW5nIHdpbGwgb25seSBiZSBhcHBhcmVudCB3aGVuIHRoZSBjb25zdHJhaW50IGFsc28gaGFzIGEgdmVyeSBsb3cgYHN0aWZmbmVzc2AuXG4gICAgICogQSB2YWx1ZSBvZiBgMC4xYCBtZWFucyB0aGUgY29uc3RyYWludCB3aWxsIGFwcGx5IGhlYXZ5IGRhbXBpbmcsIHJlc3VsdGluZyBpbiBsaXR0bGUgdG8gbm8gb3NjaWxsYXRpb24uXG4gICAgICogQSB2YWx1ZSBvZiBgMGAgbWVhbnMgdGhlIGNvbnN0cmFpbnQgd2lsbCBhcHBseSBubyBkYW1waW5nLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGRhbXBpbmdcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIHRoZSB0YXJnZXQgcmVzdGluZyBsZW5ndGggb2YgdGhlIGNvbnN0cmFpbnQuIFxuICAgICAqIEl0IGlzIGNhbGN1bGF0ZWQgYXV0b21hdGljYWxseSBpbiBgQ29uc3RyYWludC5jcmVhdGVgIGZyb20gaW5pdGlhbCBwb3NpdGlvbnMgb2YgdGhlIGBjb25zdHJhaW50LmJvZHlBYCBhbmQgYGNvbnN0cmFpbnQuYm9keUJgLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGxlbmd0aFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IHJlc2VydmVkIGZvciBzdG9yaW5nIHBsdWdpbi1zcGVjaWZpYyBwcm9wZXJ0aWVzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBsdWdpblxuICAgICAqIEB0eXBlIHt9XG4gICAgICovXG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAxMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuQXhlc2AgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgc2V0cyBvZiBheGVzLlxuKlxuKiBAY2xhc3MgQXhlc1xuKi9cblxudmFyIEF4ZXMgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGVzO1xuXG52YXIgVmVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHNldCBvZiBheGVzIGZyb20gdGhlIGdpdmVuIHZlcnRpY2VzLlxuICAgICAqIEBtZXRob2QgZnJvbVZlcnRpY2VzXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcmV0dXJuIHtheGVzfSBBIG5ldyBheGVzIGZyb20gdGhlIGdpdmVuIHZlcnRpY2VzXG4gICAgICovXG4gICAgQXhlcy5mcm9tVmVydGljZXMgPSBmdW5jdGlvbih2ZXJ0aWNlcykge1xuICAgICAgICB2YXIgYXhlcyA9IHt9O1xuXG4gICAgICAgIC8vIGZpbmQgdGhlIHVuaXF1ZSBheGVzLCB1c2luZyBlZGdlIG5vcm1hbCBncmFkaWVudHNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGogPSAoaSArIDEpICUgdmVydGljZXMubGVuZ3RoLCBcbiAgICAgICAgICAgICAgICBub3JtYWwgPSBWZWN0b3Iubm9ybWFsaXNlKHsgXG4gICAgICAgICAgICAgICAgICAgIHg6IHZlcnRpY2VzW2pdLnkgLSB2ZXJ0aWNlc1tpXS55LCBcbiAgICAgICAgICAgICAgICAgICAgeTogdmVydGljZXNbaV0ueCAtIHZlcnRpY2VzW2pdLnhcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBncmFkaWVudCA9IChub3JtYWwueSA9PT0gMCkgPyBJbmZpbml0eSA6IChub3JtYWwueCAvIG5vcm1hbC55KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gbGltaXQgcHJlY2lzaW9uXG4gICAgICAgICAgICBncmFkaWVudCA9IGdyYWRpZW50LnRvRml4ZWQoMykudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGF4ZXNbZ3JhZGllbnRdID0gbm9ybWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIENvbW1vbi52YWx1ZXMoYXhlcyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJvdGF0ZXMgYSBzZXQgb2YgYXhlcyBieSB0aGUgZ2l2ZW4gYW5nbGUuXG4gICAgICogQG1ldGhvZCByb3RhdGVcbiAgICAgKiBAcGFyYW0ge2F4ZXN9IGF4ZXNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYW5nbGVcbiAgICAgKi9cbiAgICBBeGVzLnJvdGF0ZSA9IGZ1bmN0aW9uKGF4ZXMsIGFuZ2xlKSB7XG4gICAgICAgIGlmIChhbmdsZSA9PT0gMClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhhbmdsZSksXG4gICAgICAgICAgICBzaW4gPSBNYXRoLnNpbihhbmdsZSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBheGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYXhpcyA9IGF4ZXNbaV0sXG4gICAgICAgICAgICAgICAgeHg7XG4gICAgICAgICAgICB4eCA9IGF4aXMueCAqIGNvcyAtIGF4aXMueSAqIHNpbjtcbiAgICAgICAgICAgIGF4aXMueSA9IGF4aXMueCAqIHNpbiArIGF4aXMueSAqIGNvcztcbiAgICAgICAgICAgIGF4aXMueCA9IHh4O1xuICAgICAgICB9XG4gICAgfTtcblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDEyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5Cb2RpZXNgIG1vZHVsZSBjb250YWlucyBmYWN0b3J5IG1ldGhvZHMgZm9yIGNyZWF0aW5nIHJpZ2lkIGJvZHkgbW9kZWxzIFxuKiB3aXRoIGNvbW1vbmx5IHVzZWQgYm9keSBjb25maWd1cmF0aW9ucyAoc3VjaCBhcyByZWN0YW5nbGVzLCBjaXJjbGVzIGFuZCBvdGhlciBwb2x5Z29ucykuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBCb2RpZXNcbiovXG5cbi8vIFRPRE86IHRydWUgY2lyY2xlIGJvZGllc1xuXG52YXIgQm9kaWVzID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gQm9kaWVzO1xuXG52YXIgVmVydGljZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgQm9keSA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG52YXIgQm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbnZhciBWZWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHJpZ2lkIGJvZHkgbW9kZWwgd2l0aCBhIHJlY3RhbmdsZSBodWxsLiBcbiAgICAgKiBUaGUgb3B0aW9ucyBwYXJhbWV0ZXIgaXMgYW4gb2JqZWN0IHRoYXQgc3BlY2lmaWVzIGFueSBwcm9wZXJ0aWVzIHlvdSB3aXNoIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0cy5cbiAgICAgKiBTZWUgdGhlIHByb3BlcnRpZXMgc2VjdGlvbiBvZiB0aGUgYE1hdHRlci5Cb2R5YCBtb2R1bGUgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIHJlY3RhbmdsZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEByZXR1cm4ge2JvZHl9IEEgbmV3IHJlY3RhbmdsZSBib2R5XG4gICAgICovXG4gICAgQm9kaWVzLnJlY3RhbmdsZSA9IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgdmFyIHJlY3RhbmdsZSA9IHsgXG4gICAgICAgICAgICBsYWJlbDogJ1JlY3RhbmdsZSBCb2R5JyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IHgsIHk6IHkgfSxcbiAgICAgICAgICAgIHZlcnRpY2VzOiBWZXJ0aWNlcy5mcm9tUGF0aCgnTCAwIDAgTCAnICsgd2lkdGggKyAnIDAgTCAnICsgd2lkdGggKyAnICcgKyBoZWlnaHQgKyAnIEwgMCAnICsgaGVpZ2h0KVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChvcHRpb25zLmNoYW1mZXIpIHtcbiAgICAgICAgICAgIHZhciBjaGFtZmVyID0gb3B0aW9ucy5jaGFtZmVyO1xuICAgICAgICAgICAgcmVjdGFuZ2xlLnZlcnRpY2VzID0gVmVydGljZXMuY2hhbWZlcihyZWN0YW5nbGUudmVydGljZXMsIGNoYW1mZXIucmFkaXVzLCBcbiAgICAgICAgICAgICAgICBjaGFtZmVyLnF1YWxpdHksIGNoYW1mZXIucXVhbGl0eU1pbiwgY2hhbWZlci5xdWFsaXR5TWF4KTtcbiAgICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLmNoYW1mZXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQm9keS5jcmVhdGUoQ29tbW9uLmV4dGVuZCh7fSwgcmVjdGFuZ2xlLCBvcHRpb25zKSk7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHJpZ2lkIGJvZHkgbW9kZWwgd2l0aCBhIHRyYXBlem9pZCBodWxsLiBcbiAgICAgKiBUaGUgb3B0aW9ucyBwYXJhbWV0ZXIgaXMgYW4gb2JqZWN0IHRoYXQgc3BlY2lmaWVzIGFueSBwcm9wZXJ0aWVzIHlvdSB3aXNoIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0cy5cbiAgICAgKiBTZWUgdGhlIHByb3BlcnRpZXMgc2VjdGlvbiBvZiB0aGUgYE1hdHRlci5Cb2R5YCBtb2R1bGUgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIHRyYXBlem9pZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNsb3BlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEByZXR1cm4ge2JvZHl9IEEgbmV3IHRyYXBlem9pZCBib2R5XG4gICAgICovXG4gICAgQm9kaWVzLnRyYXBlem9pZCA9IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQsIHNsb3BlLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIHNsb3BlICo9IDAuNTtcbiAgICAgICAgdmFyIHJvb2YgPSAoMSAtIChzbG9wZSAqIDIpKSAqIHdpZHRoO1xuICAgICAgICBcbiAgICAgICAgdmFyIHgxID0gd2lkdGggKiBzbG9wZSxcbiAgICAgICAgICAgIHgyID0geDEgKyByb29mLFxuICAgICAgICAgICAgeDMgPSB4MiArIHgxLFxuICAgICAgICAgICAgdmVydGljZXNQYXRoO1xuXG4gICAgICAgIGlmIChzbG9wZSA8IDAuNSkge1xuICAgICAgICAgICAgdmVydGljZXNQYXRoID0gJ0wgMCAwIEwgJyArIHgxICsgJyAnICsgKC1oZWlnaHQpICsgJyBMICcgKyB4MiArICcgJyArICgtaGVpZ2h0KSArICcgTCAnICsgeDMgKyAnIDAnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmVydGljZXNQYXRoID0gJ0wgMCAwIEwgJyArIHgyICsgJyAnICsgKC1oZWlnaHQpICsgJyBMICcgKyB4MyArICcgMCc7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdHJhcGV6b2lkID0geyBcbiAgICAgICAgICAgIGxhYmVsOiAnVHJhcGV6b2lkIEJvZHknLFxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogeCwgeTogeSB9LFxuICAgICAgICAgICAgdmVydGljZXM6IFZlcnRpY2VzLmZyb21QYXRoKHZlcnRpY2VzUGF0aClcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAob3B0aW9ucy5jaGFtZmVyKSB7XG4gICAgICAgICAgICB2YXIgY2hhbWZlciA9IG9wdGlvbnMuY2hhbWZlcjtcbiAgICAgICAgICAgIHRyYXBlem9pZC52ZXJ0aWNlcyA9IFZlcnRpY2VzLmNoYW1mZXIodHJhcGV6b2lkLnZlcnRpY2VzLCBjaGFtZmVyLnJhZGl1cywgXG4gICAgICAgICAgICAgICAgY2hhbWZlci5xdWFsaXR5LCBjaGFtZmVyLnF1YWxpdHlNaW4sIGNoYW1mZXIucXVhbGl0eU1heCk7XG4gICAgICAgICAgICBkZWxldGUgb3B0aW9ucy5jaGFtZmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEJvZHkuY3JlYXRlKENvbW1vbi5leHRlbmQoe30sIHRyYXBlem9pZCwgb3B0aW9ucykpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHJpZ2lkIGJvZHkgbW9kZWwgd2l0aCBhIGNpcmNsZSBodWxsLiBcbiAgICAgKiBUaGUgb3B0aW9ucyBwYXJhbWV0ZXIgaXMgYW4gb2JqZWN0IHRoYXQgc3BlY2lmaWVzIGFueSBwcm9wZXJ0aWVzIHlvdSB3aXNoIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0cy5cbiAgICAgKiBTZWUgdGhlIHByb3BlcnRpZXMgc2VjdGlvbiBvZiB0aGUgYE1hdHRlci5Cb2R5YCBtb2R1bGUgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIGNpcmNsZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWF4U2lkZXNdXG4gICAgICogQHJldHVybiB7Ym9keX0gQSBuZXcgY2lyY2xlIGJvZHlcbiAgICAgKi9cbiAgICBCb2RpZXMuY2lyY2xlID0gZnVuY3Rpb24oeCwgeSwgcmFkaXVzLCBvcHRpb25zLCBtYXhTaWRlcykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICB2YXIgY2lyY2xlID0ge1xuICAgICAgICAgICAgbGFiZWw6ICdDaXJjbGUgQm9keScsXG4gICAgICAgICAgICBjaXJjbGVSYWRpdXM6IHJhZGl1c1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLy8gYXBwcm94aW1hdGUgY2lyY2xlcyB3aXRoIHBvbHlnb25zIHVudGlsIHRydWUgY2lyY2xlcyBpbXBsZW1lbnRlZCBpbiBTQVRcbiAgICAgICAgbWF4U2lkZXMgPSBtYXhTaWRlcyB8fCAyNTtcbiAgICAgICAgdmFyIHNpZGVzID0gTWF0aC5jZWlsKE1hdGgubWF4KDEwLCBNYXRoLm1pbihtYXhTaWRlcywgcmFkaXVzKSkpO1xuXG4gICAgICAgIC8vIG9wdGltaXNhdGlvbjogYWx3YXlzIHVzZSBldmVuIG51bWJlciBvZiBzaWRlcyAoaGFsZiB0aGUgbnVtYmVyIG9mIHVuaXF1ZSBheGVzKVxuICAgICAgICBpZiAoc2lkZXMgJSAyID09PSAxKVxuICAgICAgICAgICAgc2lkZXMgKz0gMTtcblxuICAgICAgICByZXR1cm4gQm9kaWVzLnBvbHlnb24oeCwgeSwgc2lkZXMsIHJhZGl1cywgQ29tbW9uLmV4dGVuZCh7fSwgY2lyY2xlLCBvcHRpb25zKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgcmlnaWQgYm9keSBtb2RlbCB3aXRoIGEgcmVndWxhciBwb2x5Z29uIGh1bGwgd2l0aCB0aGUgZ2l2ZW4gbnVtYmVyIG9mIHNpZGVzLiBcbiAgICAgKiBUaGUgb3B0aW9ucyBwYXJhbWV0ZXIgaXMgYW4gb2JqZWN0IHRoYXQgc3BlY2lmaWVzIGFueSBwcm9wZXJ0aWVzIHlvdSB3aXNoIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0cy5cbiAgICAgKiBTZWUgdGhlIHByb3BlcnRpZXMgc2VjdGlvbiBvZiB0aGUgYE1hdHRlci5Cb2R5YCBtb2R1bGUgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIHBvbHlnb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpZGVzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1c1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcmV0dXJuIHtib2R5fSBBIG5ldyByZWd1bGFyIHBvbHlnb24gYm9keVxuICAgICAqL1xuICAgIEJvZGllcy5wb2x5Z29uID0gZnVuY3Rpb24oeCwgeSwgc2lkZXMsIHJhZGl1cywgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICBpZiAoc2lkZXMgPCAzKVxuICAgICAgICAgICAgcmV0dXJuIEJvZGllcy5jaXJjbGUoeCwgeSwgcmFkaXVzLCBvcHRpb25zKTtcblxuICAgICAgICB2YXIgdGhldGEgPSAyICogTWF0aC5QSSAvIHNpZGVzLFxuICAgICAgICAgICAgcGF0aCA9ICcnLFxuICAgICAgICAgICAgb2Zmc2V0ID0gdGhldGEgKiAwLjU7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaWRlczsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgYW5nbGUgPSBvZmZzZXQgKyAoaSAqIHRoZXRhKSxcbiAgICAgICAgICAgICAgICB4eCA9IE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cyxcbiAgICAgICAgICAgICAgICB5eSA9IE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1cztcblxuICAgICAgICAgICAgcGF0aCArPSAnTCAnICsgeHgudG9GaXhlZCgzKSArICcgJyArIHl5LnRvRml4ZWQoMykgKyAnICc7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcG9seWdvbiA9IHsgXG4gICAgICAgICAgICBsYWJlbDogJ1BvbHlnb24gQm9keScsXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiB4LCB5OiB5IH0sXG4gICAgICAgICAgICB2ZXJ0aWNlczogVmVydGljZXMuZnJvbVBhdGgocGF0aClcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAob3B0aW9ucy5jaGFtZmVyKSB7XG4gICAgICAgICAgICB2YXIgY2hhbWZlciA9IG9wdGlvbnMuY2hhbWZlcjtcbiAgICAgICAgICAgIHBvbHlnb24udmVydGljZXMgPSBWZXJ0aWNlcy5jaGFtZmVyKHBvbHlnb24udmVydGljZXMsIGNoYW1mZXIucmFkaXVzLCBcbiAgICAgICAgICAgICAgICBjaGFtZmVyLnF1YWxpdHksIGNoYW1mZXIucXVhbGl0eU1pbiwgY2hhbWZlci5xdWFsaXR5TWF4KTtcbiAgICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLmNoYW1mZXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQm9keS5jcmVhdGUoQ29tbW9uLmV4dGVuZCh7fSwgcG9seWdvbiwgb3B0aW9ucykpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBVdGlsaXR5IHRvIGNyZWF0ZSBhIGNvbXBvdW5kIGJvZHkgYmFzZWQgb24gc2V0KHMpIG9mIHZlcnRpY2VzLlxuICAgICAqIFxuICAgICAqIF9Ob3RlOl8gVG8gb3B0aW9uYWxseSBlbmFibGUgYXV0b21hdGljIGNvbmNhdmUgdmVydGljZXMgZGVjb21wb3NpdGlvbiB0aGUgW3BvbHktZGVjb21wXShodHRwczovL2dpdGh1Yi5jb20vc2NodGVwcGUvcG9seS1kZWNvbXAuanMpIFxuICAgICAqIHBhY2thZ2UgbXVzdCBiZSBmaXJzdCBpbnN0YWxsZWQgYW5kIHByb3ZpZGVkIHNlZSBgQ29tbW9uLnNldERlY29tcGAsIG90aGVyd2lzZSB0aGUgY29udmV4IGh1bGwgb2YgZWFjaCB2ZXJ0ZXggc2V0IHdpbGwgYmUgdXNlZC5cbiAgICAgKiBcbiAgICAgKiBUaGUgcmVzdWx0aW5nIHZlcnRpY2VzIGFyZSByZW9yaWVudGF0ZWQgYWJvdXQgdGhlaXIgY2VudHJlIG9mIG1hc3MsXG4gICAgICogYW5kIG9mZnNldCBzdWNoIHRoYXQgYGJvZHkucG9zaXRpb25gIGNvcnJlc3BvbmRzIHRvIHRoaXMgcG9pbnQuXG4gICAgICogXG4gICAgICogVGhlIHJlc3VsdGluZyBvZmZzZXQgbWF5IGJlIGZvdW5kIGlmIG5lZWRlZCBieSBzdWJ0cmFjdGluZyBgYm9keS5ib3VuZHNgIGZyb20gdGhlIG9yaWdpbmFsIGlucHV0IGJvdW5kcy5cbiAgICAgKiBUbyBsYXRlciBtb3ZlIHRoZSBjZW50cmUgb2YgbWFzcyBzZWUgYEJvZHkuc2V0Q2VudHJlYC5cbiAgICAgKiBcbiAgICAgKiBOb3RlIHRoYXQgYXV0b21hdGljIGNvbmNvbmNhdmUgZGVjb21wb3NpdGlvbiByZXN1bHRzIGFyZSBub3QgYWx3YXlzIG9wdGltYWwuIFxuICAgICAqIEZvciBiZXN0IHJlc3VsdHMsIHNpbXBsaWZ5IHRoZSBpbnB1dCB2ZXJ0aWNlcyBhcyBtdWNoIGFzIHBvc3NpYmxlIGZpcnN0LlxuICAgICAqIEJ5IGRlZmF1bHQgdGhpcyBmdW5jdGlvbiBhcHBsaWVzIHNvbWUgYWRkdGlvbmFsIHNpbXBsaWZpY2F0aW9uIHRvIGhlbHAuXG4gICAgICogXG4gICAgICogU29tZSBvdXRwdXRzIG1heSBhbHNvIHJlcXVpcmUgZnVydGhlciBtYW51YWwgcHJvY2Vzc2luZyBhZnRlcndhcmRzIHRvIGJlIHJvYnVzdC5cbiAgICAgKiBJbiBwYXJ0aWN1bGFyIHNvbWUgcGFydHMgbWF5IG5lZWQgdG8gYmUgb3ZlcmxhcHBlZCB0byBhdm9pZCBjb2xsaXNpb24gZ2Fwcy5cbiAgICAgKiBUaGluIHBhcnRzIGFuZCBzaGFycCBwb2ludHMgc2hvdWxkIGJlIGF2b2lkZWQgb3IgcmVtb3ZlZCB3aGVyZSBwb3NzaWJsZS5cbiAgICAgKlxuICAgICAqIFRoZSBvcHRpb25zIHBhcmFtZXRlciBvYmplY3Qgc3BlY2lmaWVzIGFueSBgTWF0dGVyLkJvZHlgIHByb3BlcnRpZXMgeW91IHdpc2ggdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzLlxuICAgICAqIFxuICAgICAqIFNlZSB0aGUgcHJvcGVydGllcyBzZWN0aW9uIG9mIHRoZSBgTWF0dGVyLkJvZHlgIG1vZHVsZSBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gd2hhdCB5b3UgY2FuIHBhc3MgdmlhIHRoZSBgb3B0aW9uc2Agb2JqZWN0LlxuICAgICAqIEBtZXRob2QgZnJvbVZlcnRpY2VzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHZlcnRleFNldHMgT25lIG9yIG1vcmUgYXJyYXlzIG9mIHZlcnRleCBwb2ludHMgZS5nLiBgW1t7IHg6IDAsIHk6IDAgfS4uLl0sIC4uLl1gLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gVGhlIGJvZHkgb3B0aW9ucy5cbiAgICAgKiBAcGFyYW0ge2Jvb2x9IFtmbGFnSW50ZXJuYWw9ZmFsc2VdIE9wdGlvbmFsbHkgbWFya3MgaW50ZXJuYWwgZWRnZXMgd2l0aCBgaXNJbnRlcm5hbGAuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtyZW1vdmVDb2xsaW5lYXI9MC4wMV0gVGhyZXNob2xkIHdoZW4gc2ltcGxpZnlpbmcgdmVydGljZXMgYWxvbmcgdGhlIHNhbWUgZWRnZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW21pbmltdW1BcmVhPTEwXSBUaHJlc2hvbGQgd2hlbiByZW1vdmluZyBzbWFsbCBwYXJ0cy5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3JlbW92ZUR1cGxpY2F0ZVBvaW50cz0wLjAxXSBUaHJlc2hvbGQgd2hlbiBzaW1wbGlmeWluZyBuZWFyYnkgdmVydGljZXMuXG4gICAgICogQHJldHVybiB7Ym9keX1cbiAgICAgKi9cbiAgICBCb2RpZXMuZnJvbVZlcnRpY2VzID0gZnVuY3Rpb24oeCwgeSwgdmVydGV4U2V0cywgb3B0aW9ucywgZmxhZ0ludGVybmFsLCByZW1vdmVDb2xsaW5lYXIsIG1pbmltdW1BcmVhLCByZW1vdmVEdXBsaWNhdGVQb2ludHMpIHtcbiAgICAgICAgdmFyIGRlY29tcCA9IENvbW1vbi5nZXREZWNvbXAoKSxcbiAgICAgICAgICAgIGNhbkRlY29tcCxcbiAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICBwYXJ0cyxcbiAgICAgICAgICAgIGlzQ29udmV4LFxuICAgICAgICAgICAgaXNDb25jYXZlLFxuICAgICAgICAgICAgdmVydGljZXMsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIGssXG4gICAgICAgICAgICB2LFxuICAgICAgICAgICAgejtcblxuICAgICAgICAvLyBjaGVjayBkZWNvbXAgaXMgYXMgZXhwZWN0ZWRcbiAgICAgICAgY2FuRGVjb21wID0gQm9vbGVhbihkZWNvbXAgJiYgZGVjb21wLnF1aWNrRGVjb21wKTtcblxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgcGFydHMgPSBbXTtcblxuICAgICAgICBmbGFnSW50ZXJuYWwgPSB0eXBlb2YgZmxhZ0ludGVybmFsICE9PSAndW5kZWZpbmVkJyA/IGZsYWdJbnRlcm5hbCA6IGZhbHNlO1xuICAgICAgICByZW1vdmVDb2xsaW5lYXIgPSB0eXBlb2YgcmVtb3ZlQ29sbGluZWFyICE9PSAndW5kZWZpbmVkJyA/IHJlbW92ZUNvbGxpbmVhciA6IDAuMDE7XG4gICAgICAgIG1pbmltdW1BcmVhID0gdHlwZW9mIG1pbmltdW1BcmVhICE9PSAndW5kZWZpbmVkJyA/IG1pbmltdW1BcmVhIDogMTA7XG4gICAgICAgIHJlbW92ZUR1cGxpY2F0ZVBvaW50cyA9IHR5cGVvZiByZW1vdmVEdXBsaWNhdGVQb2ludHMgIT09ICd1bmRlZmluZWQnID8gcmVtb3ZlRHVwbGljYXRlUG9pbnRzIDogMC4wMTtcblxuICAgICAgICAvLyBlbnN1cmUgdmVydGV4U2V0cyBpcyBhbiBhcnJheSBvZiBhcnJheXNcbiAgICAgICAgaWYgKCFDb21tb24uaXNBcnJheSh2ZXJ0ZXhTZXRzWzBdKSkge1xuICAgICAgICAgICAgdmVydGV4U2V0cyA9IFt2ZXJ0ZXhTZXRzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodiA9IDA7IHYgPCB2ZXJ0ZXhTZXRzLmxlbmd0aDsgdiArPSAxKSB7XG4gICAgICAgICAgICB2ZXJ0aWNlcyA9IHZlcnRleFNldHNbdl07XG4gICAgICAgICAgICBpc0NvbnZleCA9IFZlcnRpY2VzLmlzQ29udmV4KHZlcnRpY2VzKTtcbiAgICAgICAgICAgIGlzQ29uY2F2ZSA9ICFpc0NvbnZleDtcblxuICAgICAgICAgICAgaWYgKGlzQ29uY2F2ZSAmJiAhY2FuRGVjb21wKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLndhcm5PbmNlKFxuICAgICAgICAgICAgICAgICAgICAnQm9kaWVzLmZyb21WZXJ0aWNlczogSW5zdGFsbCB0aGUgXFwncG9seS1kZWNvbXBcXCcgbGlicmFyeSBhbmQgdXNlIENvbW1vbi5zZXREZWNvbXAgb3IgcHJvdmlkZSBcXCdkZWNvbXBcXCcgYXMgYSBnbG9iYWwgdG8gZGVjb21wb3NlIGNvbmNhdmUgdmVydGljZXMuJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc0NvbnZleCB8fCAhY2FuRGVjb21wKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzQ29udmV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2VzID0gVmVydGljZXMuY2xvY2t3aXNlU29ydCh2ZXJ0aWNlcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmFsbGJhY2sgdG8gY29udmV4IGh1bGwgd2hlbiBkZWNvbXBvc2l0aW9uIGlzIG5vdCBwb3NzaWJsZVxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNlcyA9IFZlcnRpY2VzLmh1bGwodmVydGljZXMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiB4LCB5OiB5IH0sXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2VzOiB2ZXJ0aWNlc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpbml0aWFsaXNlIGEgZGVjb21wb3NpdGlvblxuICAgICAgICAgICAgICAgIHZhciBjb25jYXZlID0gdmVydGljZXMubWFwKGZ1bmN0aW9uKHZlcnRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3ZlcnRleC54LCB2ZXJ0ZXgueV07XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyB2ZXJ0aWNlcyBhcmUgY29uY2F2ZSBhbmQgc2ltcGxlLCB3ZSBjYW4gZGVjb21wb3NlIGludG8gcGFydHNcbiAgICAgICAgICAgICAgICBkZWNvbXAubWFrZUNDVyhjb25jYXZlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVtb3ZlQ29sbGluZWFyICE9PSBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgZGVjb21wLnJlbW92ZUNvbGxpbmVhclBvaW50cyhjb25jYXZlLCByZW1vdmVDb2xsaW5lYXIpO1xuICAgICAgICAgICAgICAgIGlmIChyZW1vdmVEdXBsaWNhdGVQb2ludHMgIT09IGZhbHNlICYmIGRlY29tcC5yZW1vdmVEdXBsaWNhdGVQb2ludHMpXG4gICAgICAgICAgICAgICAgICAgIGRlY29tcC5yZW1vdmVEdXBsaWNhdGVQb2ludHMoY29uY2F2ZSwgcmVtb3ZlRHVwbGljYXRlUG9pbnRzKTtcblxuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgcXVpY2sgZGVjb21wb3NpdGlvbiBhbGdvcml0aG0gKEJheWF6aXQpXG4gICAgICAgICAgICAgICAgdmFyIGRlY29tcG9zZWQgPSBkZWNvbXAucXVpY2tEZWNvbXAoY29uY2F2ZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBmb3IgZWFjaCBkZWNvbXBvc2VkIGNodW5rXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRlY29tcG9zZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNodW5rID0gZGVjb21wb3NlZFtpXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjb252ZXJ0IHZlcnRpY2VzIGludG8gdGhlIGNvcnJlY3Qgc3RydWN0dXJlXG4gICAgICAgICAgICAgICAgICAgIHZhciBjaHVua1ZlcnRpY2VzID0gY2h1bmsubWFwKGZ1bmN0aW9uKHZlcnRpY2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHZlcnRpY2VzWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHZlcnRpY2VzWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBza2lwIHNtYWxsIGNodW5rc1xuICAgICAgICAgICAgICAgICAgICBpZiAobWluaW11bUFyZWEgPiAwICYmIFZlcnRpY2VzLmFyZWEoY2h1bmtWZXJ0aWNlcykgPCBtaW5pbXVtQXJlYSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGNvbXBvdW5kIHBhcnRcbiAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogVmVydGljZXMuY2VudHJlKGNodW5rVmVydGljZXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljZXM6IGNodW5rVmVydGljZXNcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY3JlYXRlIGJvZHkgcGFydHNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYXJ0c1tpXSA9IEJvZHkuY3JlYXRlKENvbW1vbi5leHRlbmQocGFydHNbaV0sIG9wdGlvbnMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZsYWcgaW50ZXJuYWwgZWRnZXMgKGNvaW5jaWRlbnQgcGFydCBlZGdlcylcbiAgICAgICAgaWYgKGZsYWdJbnRlcm5hbCkge1xuICAgICAgICAgICAgdmFyIGNvaW5jaWRlbnRfbWF4X2Rpc3QgPSA1O1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFydEEgPSBwYXJ0c1tpXTtcblxuICAgICAgICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgcGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnRCID0gcGFydHNbal07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKEJvdW5kcy5vdmVybGFwcyhwYXJ0QS5ib3VuZHMsIHBhcnRCLmJvdW5kcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXYgPSBwYXJ0QS52ZXJ0aWNlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYnYgPSBwYXJ0Qi52ZXJ0aWNlcztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXRlcmF0ZSB2ZXJ0aWNlcyBvZiBib3RoIHBhcnRzXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgcGFydEEudmVydGljZXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHogPSAwOyB6IDwgcGFydEIudmVydGljZXMubGVuZ3RoOyB6KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmluZCBkaXN0YW5jZXMgYmV0d2VlbiB0aGUgdmVydGljZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhID0gVmVjdG9yLm1hZ25pdHVkZVNxdWFyZWQoVmVjdG9yLnN1YihwYXZbKGsgKyAxKSAlIHBhdi5sZW5ndGhdLCBwYnZbel0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRiID0gVmVjdG9yLm1hZ25pdHVkZVNxdWFyZWQoVmVjdG9yLnN1YihwYXZba10sIHBidlsoeiArIDEpICUgcGJ2Lmxlbmd0aF0pKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBib3RoIHZlcnRpY2VzIGFyZSB2ZXJ5IGNsb3NlLCBjb25zaWRlciB0aGUgZWRnZSBjb25jaWRlbnQgKGludGVybmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGEgPCBjb2luY2lkZW50X21heF9kaXN0ICYmIGRiIDwgY29pbmNpZGVudF9tYXhfZGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF2W2tdLmlzSW50ZXJuYWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJ2W3pdLmlzSW50ZXJuYWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSBwYXJlbnQgYm9keSB0byBiZSByZXR1cm5lZCwgdGhhdCBjb250YWlucyBnZW5lcmF0ZWQgY29tcG91bmQgcGFydHNcbiAgICAgICAgICAgIGJvZHkgPSBCb2R5LmNyZWF0ZShDb21tb24uZXh0ZW5kKHsgcGFydHM6IHBhcnRzLnNsaWNlKDApIH0sIG9wdGlvbnMpKTtcblxuICAgICAgICAgICAgLy8gb2Zmc2V0IHN1Y2ggdGhhdCBib2R5LnBvc2l0aW9uIGlzIGF0IHRoZSBjZW50cmUgb2ZmIG1hc3NcbiAgICAgICAgICAgIEJvZHkuc2V0UG9zaXRpb24oYm9keSwgeyB4OiB4LCB5OiB5IH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gYm9keTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJ0c1swXTtcbiAgICAgICAgfVxuICAgIH07XG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAxMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuTW91c2VgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIG1vdXNlIGlucHV0cy5cbipcbiogQGNsYXNzIE1vdXNlXG4qL1xuXG52YXIgTW91c2UgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb3VzZTtcblxudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBtb3VzZSBpbnB1dC5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICAgKiBAcmV0dXJuIHttb3VzZX0gQSBuZXcgbW91c2VcbiAgICAgKi9cbiAgICBNb3VzZS5jcmVhdGUgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIHZhciBtb3VzZSA9IHt9O1xuXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgQ29tbW9uLmxvZygnTW91c2UuY3JlYXRlOiBlbGVtZW50IHdhcyB1bmRlZmluZWQsIGRlZmF1bHRpbmcgdG8gZG9jdW1lbnQuYm9keScsICd3YXJuJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIG1vdXNlLmVsZW1lbnQgPSBlbGVtZW50IHx8IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIG1vdXNlLmFic29sdXRlID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgIG1vdXNlLnBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgIG1vdXNlLm1vdXNlZG93blBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgIG1vdXNlLm1vdXNldXBQb3NpdGlvbiA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICBtb3VzZS5vZmZzZXQgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgbW91c2Uuc2NhbGUgPSB7IHg6IDEsIHk6IDEgfTtcbiAgICAgICAgbW91c2Uud2hlZWxEZWx0YSA9IDA7XG4gICAgICAgIG1vdXNlLmJ1dHRvbiA9IC0xO1xuICAgICAgICBtb3VzZS5waXhlbFJhdGlvID0gcGFyc2VJbnQobW91c2UuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGl4ZWwtcmF0aW8nKSwgMTApIHx8IDE7XG5cbiAgICAgICAgbW91c2Uuc291cmNlRXZlbnRzID0ge1xuICAgICAgICAgICAgbW91c2Vtb3ZlOiBudWxsLFxuICAgICAgICAgICAgbW91c2Vkb3duOiBudWxsLFxuICAgICAgICAgICAgbW91c2V1cDogbnVsbCxcbiAgICAgICAgICAgIG1vdXNld2hlZWw6IG51bGxcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIG1vdXNlLm1vdXNlbW92ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7IFxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gTW91c2UuX2dldFJlbGF0aXZlTW91c2VQb3NpdGlvbihldmVudCwgbW91c2UuZWxlbWVudCwgbW91c2UucGl4ZWxSYXRpbyksXG4gICAgICAgICAgICAgICAgdG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzO1xuXG4gICAgICAgICAgICBpZiAodG91Y2hlcykge1xuICAgICAgICAgICAgICAgIG1vdXNlLmJ1dHRvbiA9IDA7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW91c2UuYWJzb2x1dGUueCA9IHBvc2l0aW9uLng7XG4gICAgICAgICAgICBtb3VzZS5hYnNvbHV0ZS55ID0gcG9zaXRpb24ueTtcbiAgICAgICAgICAgIG1vdXNlLnBvc2l0aW9uLnggPSBtb3VzZS5hYnNvbHV0ZS54ICogbW91c2Uuc2NhbGUueCArIG1vdXNlLm9mZnNldC54O1xuICAgICAgICAgICAgbW91c2UucG9zaXRpb24ueSA9IG1vdXNlLmFic29sdXRlLnkgKiBtb3VzZS5zY2FsZS55ICsgbW91c2Uub2Zmc2V0Lnk7XG4gICAgICAgICAgICBtb3VzZS5zb3VyY2VFdmVudHMubW91c2Vtb3ZlID0gZXZlbnQ7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBtb3VzZS5tb3VzZWRvd24gPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gTW91c2UuX2dldFJlbGF0aXZlTW91c2VQb3NpdGlvbihldmVudCwgbW91c2UuZWxlbWVudCwgbW91c2UucGl4ZWxSYXRpbyksXG4gICAgICAgICAgICAgICAgdG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzO1xuXG4gICAgICAgICAgICBpZiAodG91Y2hlcykge1xuICAgICAgICAgICAgICAgIG1vdXNlLmJ1dHRvbiA9IDA7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbW91c2UuYnV0dG9uID0gZXZlbnQuYnV0dG9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtb3VzZS5hYnNvbHV0ZS54ID0gcG9zaXRpb24ueDtcbiAgICAgICAgICAgIG1vdXNlLmFic29sdXRlLnkgPSBwb3NpdGlvbi55O1xuICAgICAgICAgICAgbW91c2UucG9zaXRpb24ueCA9IG1vdXNlLmFic29sdXRlLnggKiBtb3VzZS5zY2FsZS54ICsgbW91c2Uub2Zmc2V0Lng7XG4gICAgICAgICAgICBtb3VzZS5wb3NpdGlvbi55ID0gbW91c2UuYWJzb2x1dGUueSAqIG1vdXNlLnNjYWxlLnkgKyBtb3VzZS5vZmZzZXQueTtcbiAgICAgICAgICAgIG1vdXNlLm1vdXNlZG93blBvc2l0aW9uLnggPSBtb3VzZS5wb3NpdGlvbi54O1xuICAgICAgICAgICAgbW91c2UubW91c2Vkb3duUG9zaXRpb24ueSA9IG1vdXNlLnBvc2l0aW9uLnk7XG4gICAgICAgICAgICBtb3VzZS5zb3VyY2VFdmVudHMubW91c2Vkb3duID0gZXZlbnQ7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBtb3VzZS5tb3VzZXVwID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IE1vdXNlLl9nZXRSZWxhdGl2ZU1vdXNlUG9zaXRpb24oZXZlbnQsIG1vdXNlLmVsZW1lbnQsIG1vdXNlLnBpeGVsUmF0aW8pLFxuICAgICAgICAgICAgICAgIHRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlcztcblxuICAgICAgICAgICAgaWYgKHRvdWNoZXMpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBtb3VzZS5idXR0b24gPSAtMTtcbiAgICAgICAgICAgIG1vdXNlLmFic29sdXRlLnggPSBwb3NpdGlvbi54O1xuICAgICAgICAgICAgbW91c2UuYWJzb2x1dGUueSA9IHBvc2l0aW9uLnk7XG4gICAgICAgICAgICBtb3VzZS5wb3NpdGlvbi54ID0gbW91c2UuYWJzb2x1dGUueCAqIG1vdXNlLnNjYWxlLnggKyBtb3VzZS5vZmZzZXQueDtcbiAgICAgICAgICAgIG1vdXNlLnBvc2l0aW9uLnkgPSBtb3VzZS5hYnNvbHV0ZS55ICogbW91c2Uuc2NhbGUueSArIG1vdXNlLm9mZnNldC55O1xuICAgICAgICAgICAgbW91c2UubW91c2V1cFBvc2l0aW9uLnggPSBtb3VzZS5wb3NpdGlvbi54O1xuICAgICAgICAgICAgbW91c2UubW91c2V1cFBvc2l0aW9uLnkgPSBtb3VzZS5wb3NpdGlvbi55O1xuICAgICAgICAgICAgbW91c2Uuc291cmNlRXZlbnRzLm1vdXNldXAgPSBldmVudDtcbiAgICAgICAgfTtcblxuICAgICAgICBtb3VzZS5tb3VzZXdoZWVsID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIG1vdXNlLndoZWVsRGVsdGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgZXZlbnQud2hlZWxEZWx0YSB8fCAtZXZlbnQuZGV0YWlsKSk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIE1vdXNlLnNldEVsZW1lbnQobW91c2UsIG1vdXNlLmVsZW1lbnQpO1xuXG4gICAgICAgIHJldHVybiBtb3VzZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZWxlbWVudCB0aGUgbW91c2UgaXMgYm91bmQgdG8gKGFuZCByZWxhdGl2ZSB0bykuXG4gICAgICogQG1ldGhvZCBzZXRFbGVtZW50XG4gICAgICogQHBhcmFtIHttb3VzZX0gbW91c2VcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgICovXG4gICAgTW91c2Uuc2V0RWxlbWVudCA9IGZ1bmN0aW9uKG1vdXNlLCBlbGVtZW50KSB7XG4gICAgICAgIG1vdXNlLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2UubW91c2Vtb3ZlKTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZS5tb3VzZWRvd24pO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZS5tb3VzZXVwKTtcbiAgICAgICAgXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIG1vdXNlLm1vdXNld2hlZWwpO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgbW91c2UubW91c2V3aGVlbCk7XG5cbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBtb3VzZS5tb3VzZW1vdmUpO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBtb3VzZS5tb3VzZWRvd24pO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgbW91c2UubW91c2V1cCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgY2FwdHVyZWQgc291cmNlIGV2ZW50cy5cbiAgICAgKiBAbWV0aG9kIGNsZWFyU291cmNlRXZlbnRzXG4gICAgICogQHBhcmFtIHttb3VzZX0gbW91c2VcbiAgICAgKi9cbiAgICBNb3VzZS5jbGVhclNvdXJjZUV2ZW50cyA9IGZ1bmN0aW9uKG1vdXNlKSB7XG4gICAgICAgIG1vdXNlLnNvdXJjZUV2ZW50cy5tb3VzZW1vdmUgPSBudWxsO1xuICAgICAgICBtb3VzZS5zb3VyY2VFdmVudHMubW91c2Vkb3duID0gbnVsbDtcbiAgICAgICAgbW91c2Uuc291cmNlRXZlbnRzLm1vdXNldXAgPSBudWxsO1xuICAgICAgICBtb3VzZS5zb3VyY2VFdmVudHMubW91c2V3aGVlbCA9IG51bGw7XG4gICAgICAgIG1vdXNlLndoZWVsRGVsdGEgPSAwO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBtb3VzZSBwb3NpdGlvbiBvZmZzZXQuXG4gICAgICogQG1ldGhvZCBzZXRPZmZzZXRcbiAgICAgKiBAcGFyYW0ge21vdXNlfSBtb3VzZVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBvZmZzZXRcbiAgICAgKi9cbiAgICBNb3VzZS5zZXRPZmZzZXQgPSBmdW5jdGlvbihtb3VzZSwgb2Zmc2V0KSB7XG4gICAgICAgIG1vdXNlLm9mZnNldC54ID0gb2Zmc2V0Lng7XG4gICAgICAgIG1vdXNlLm9mZnNldC55ID0gb2Zmc2V0Lnk7XG4gICAgICAgIG1vdXNlLnBvc2l0aW9uLnggPSBtb3VzZS5hYnNvbHV0ZS54ICogbW91c2Uuc2NhbGUueCArIG1vdXNlLm9mZnNldC54O1xuICAgICAgICBtb3VzZS5wb3NpdGlvbi55ID0gbW91c2UuYWJzb2x1dGUueSAqIG1vdXNlLnNjYWxlLnkgKyBtb3VzZS5vZmZzZXQueTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbW91c2UgcG9zaXRpb24gc2NhbGUuXG4gICAgICogQG1ldGhvZCBzZXRTY2FsZVxuICAgICAqIEBwYXJhbSB7bW91c2V9IG1vdXNlXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHNjYWxlXG4gICAgICovXG4gICAgTW91c2Uuc2V0U2NhbGUgPSBmdW5jdGlvbihtb3VzZSwgc2NhbGUpIHtcbiAgICAgICAgbW91c2Uuc2NhbGUueCA9IHNjYWxlLng7XG4gICAgICAgIG1vdXNlLnNjYWxlLnkgPSBzY2FsZS55O1xuICAgICAgICBtb3VzZS5wb3NpdGlvbi54ID0gbW91c2UuYWJzb2x1dGUueCAqIG1vdXNlLnNjYWxlLnggKyBtb3VzZS5vZmZzZXQueDtcbiAgICAgICAgbW91c2UucG9zaXRpb24ueSA9IG1vdXNlLmFic29sdXRlLnkgKiBtb3VzZS5zY2FsZS55ICsgbW91c2Uub2Zmc2V0Lnk7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBtb3VzZSBwb3NpdGlvbiByZWxhdGl2ZSB0byBhbiBlbGVtZW50IGdpdmVuIGEgc2NyZWVuIHBpeGVsIHJhdGlvLlxuICAgICAqIEBtZXRob2QgX2dldFJlbGF0aXZlTW91c2VQb3NpdGlvblxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHt9IGV2ZW50XG4gICAgICogQHBhcmFtIHt9IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGl4ZWxSYXRpb1xuICAgICAqIEByZXR1cm4ge31cbiAgICAgKi9cbiAgICBNb3VzZS5fZ2V0UmVsYXRpdmVNb3VzZVBvc2l0aW9uID0gZnVuY3Rpb24oZXZlbnQsIGVsZW1lbnQsIHBpeGVsUmF0aW8pIHtcbiAgICAgICAgdmFyIGVsZW1lbnRCb3VuZHMgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgcm9vdE5vZGUgPSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZSB8fCBkb2N1bWVudC5ib2R5KSxcbiAgICAgICAgICAgIHNjcm9sbFggPSAod2luZG93LnBhZ2VYT2Zmc2V0ICE9PSB1bmRlZmluZWQpID8gd2luZG93LnBhZ2VYT2Zmc2V0IDogcm9vdE5vZGUuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgIHNjcm9sbFkgPSAod2luZG93LnBhZ2VZT2Zmc2V0ICE9PSB1bmRlZmluZWQpID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogcm9vdE5vZGUuc2Nyb2xsVG9wLFxuICAgICAgICAgICAgdG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzLFxuICAgICAgICAgICAgeCwgeTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0b3VjaGVzKSB7XG4gICAgICAgICAgICB4ID0gdG91Y2hlc1swXS5wYWdlWCAtIGVsZW1lbnRCb3VuZHMubGVmdCAtIHNjcm9sbFg7XG4gICAgICAgICAgICB5ID0gdG91Y2hlc1swXS5wYWdlWSAtIGVsZW1lbnRCb3VuZHMudG9wIC0gc2Nyb2xsWTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHggPSBldmVudC5wYWdlWCAtIGVsZW1lbnRCb3VuZHMubGVmdCAtIHNjcm9sbFg7XG4gICAgICAgICAgICB5ID0gZXZlbnQucGFnZVkgLSBlbGVtZW50Qm91bmRzLnRvcCAtIHNjcm9sbFk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgIHg6IHggLyAoZWxlbWVudC5jbGllbnRXaWR0aCAvIChlbGVtZW50LndpZHRoIHx8IGVsZW1lbnQuY2xpZW50V2lkdGgpICogcGl4ZWxSYXRpbyksXG4gICAgICAgICAgICB5OiB5IC8gKGVsZW1lbnQuY2xpZW50SGVpZ2h0IC8gKGVsZW1lbnQuaGVpZ2h0IHx8IGVsZW1lbnQuY2xpZW50SGVpZ2h0KSAqIHBpeGVsUmF0aW8pXG4gICAgICAgIH07XG4gICAgfTtcblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDE0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5EZXRlY3RvcmAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGVmZmljaWVudGx5IGRldGVjdGluZyBjb2xsaXNpb25zIGJldHdlZW4gYSBsaXN0IG9mIGJvZGllcyB1c2luZyBhIGJyb2FkcGhhc2UgYWxnb3JpdGhtLlxuKlxuKiBAY2xhc3MgRGV0ZWN0b3JcbiovXG5cbnZhciBEZXRlY3RvciA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERldGVjdG9yO1xuXG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBDb2xsaXNpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGNvbGxpc2lvbiBkZXRlY3Rvci5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7ZGV0ZWN0b3J9IEEgbmV3IGNvbGxpc2lvbiBkZXRlY3RvclxuICAgICAqL1xuICAgIERldGVjdG9yLmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgYm9kaWVzOiBbXSxcbiAgICAgICAgICAgIHBhaXJzOiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIENvbW1vbi5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBsaXN0IG9mIGJvZGllcyBpbiB0aGUgZGV0ZWN0b3IuXG4gICAgICogQG1ldGhvZCBzZXRCb2RpZXNcbiAgICAgKiBAcGFyYW0ge2RldGVjdG9yfSBkZXRlY3RvclxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKi9cbiAgICBEZXRlY3Rvci5zZXRCb2RpZXMgPSBmdW5jdGlvbihkZXRlY3RvciwgYm9kaWVzKSB7XG4gICAgICAgIGRldGVjdG9yLmJvZGllcyA9IGJvZGllcy5zbGljZSgwKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBkZXRlY3RvciBpbmNsdWRpbmcgaXRzIGxpc3Qgb2YgYm9kaWVzLlxuICAgICAqIEBtZXRob2QgY2xlYXJcbiAgICAgKiBAcGFyYW0ge2RldGVjdG9yfSBkZXRlY3RvclxuICAgICAqL1xuICAgIERldGVjdG9yLmNsZWFyID0gZnVuY3Rpb24oZGV0ZWN0b3IpIHtcbiAgICAgICAgZGV0ZWN0b3IuYm9kaWVzID0gW107XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEVmZmljaWVudGx5IGZpbmRzIGFsbCBjb2xsaXNpb25zIGFtb25nIGFsbCB0aGUgYm9kaWVzIGluIGBkZXRlY3Rvci5ib2RpZXNgIHVzaW5nIGEgYnJvYWRwaGFzZSBhbGdvcml0aG0uXG4gICAgICogXG4gICAgICogX05vdGU6XyBUaGUgc3BlY2lmaWMgb3JkZXJpbmcgb2YgY29sbGlzaW9ucyByZXR1cm5lZCBpcyBub3QgZ3VhcmFudGVlZCBiZXR3ZWVuIHJlbGVhc2VzIGFuZCBtYXkgY2hhbmdlIGZvciBwZXJmb3JtYW5jZSByZWFzb25zLlxuICAgICAqIElmIGEgc3BlY2lmaWMgb3JkZXJpbmcgaXMgcmVxdWlyZWQgdGhlbiBhcHBseSBhIHNvcnQgdG8gdGhlIHJlc3VsdGluZyBhcnJheS5cbiAgICAgKiBAbWV0aG9kIGNvbGxpc2lvbnNcbiAgICAgKiBAcGFyYW0ge2RldGVjdG9yfSBkZXRlY3RvclxuICAgICAqIEByZXR1cm4ge2NvbGxpc2lvbltdfSBjb2xsaXNpb25zXG4gICAgICovXG4gICAgRGV0ZWN0b3IuY29sbGlzaW9ucyA9IGZ1bmN0aW9uKGRldGVjdG9yKSB7XG4gICAgICAgIHZhciBjb2xsaXNpb25zID0gW10sXG4gICAgICAgICAgICBwYWlycyA9IGRldGVjdG9yLnBhaXJzLFxuICAgICAgICAgICAgYm9kaWVzID0gZGV0ZWN0b3IuYm9kaWVzLFxuICAgICAgICAgICAgYm9kaWVzTGVuZ3RoID0gYm9kaWVzLmxlbmd0aCxcbiAgICAgICAgICAgIGNhbkNvbGxpZGUgPSBEZXRlY3Rvci5jYW5Db2xsaWRlLFxuICAgICAgICAgICAgY29sbGlkZXMgPSBDb2xsaXNpb24uY29sbGlkZXMsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgajtcblxuICAgICAgICBib2RpZXMuc29ydChEZXRlY3Rvci5fY29tcGFyZUJvdW5kc1gpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2RpZXNMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHlBID0gYm9kaWVzW2ldLFxuICAgICAgICAgICAgICAgIGJvdW5kc0EgPSBib2R5QS5ib3VuZHMsXG4gICAgICAgICAgICAgICAgYm91bmRYTWF4ID0gYm9keUEuYm91bmRzLm1heC54LFxuICAgICAgICAgICAgICAgIGJvdW5kWU1heCA9IGJvZHlBLmJvdW5kcy5tYXgueSxcbiAgICAgICAgICAgICAgICBib3VuZFlNaW4gPSBib2R5QS5ib3VuZHMubWluLnksXG4gICAgICAgICAgICAgICAgYm9keUFTdGF0aWMgPSBib2R5QS5pc1N0YXRpYyB8fCBib2R5QS5pc1NsZWVwaW5nLFxuICAgICAgICAgICAgICAgIHBhcnRzQUxlbmd0aCA9IGJvZHlBLnBhcnRzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBwYXJ0c0FTaW5nbGUgPSBwYXJ0c0FMZW5ndGggPT09IDE7XG5cbiAgICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgYm9kaWVzTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYm9keUIgPSBib2RpZXNbal0sXG4gICAgICAgICAgICAgICAgICAgIGJvdW5kc0IgPSBib2R5Qi5ib3VuZHM7XG5cbiAgICAgICAgICAgICAgICBpZiAoYm91bmRzQi5taW4ueCA+IGJvdW5kWE1heCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoYm91bmRZTWF4IDwgYm91bmRzQi5taW4ueSB8fCBib3VuZFlNaW4gPiBib3VuZHNCLm1heC55KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChib2R5QVN0YXRpYyAmJiAoYm9keUIuaXNTdGF0aWMgfHwgYm9keUIuaXNTbGVlcGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFjYW5Db2xsaWRlKGJvZHlBLmNvbGxpc2lvbkZpbHRlciwgYm9keUIuY29sbGlzaW9uRmlsdGVyKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgcGFydHNCTGVuZ3RoID0gYm9keUIucGFydHMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgaWYgKHBhcnRzQVNpbmdsZSAmJiBwYXJ0c0JMZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbGxpc2lvbiA9IGNvbGxpZGVzKGJvZHlBLCBib2R5QiwgcGFpcnMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xsaXNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbnMucHVzaChjb2xsaXNpb24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnRzQVN0YXJ0ID0gcGFydHNBTGVuZ3RoID4gMSA/IDEgOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydHNCU3RhcnQgPSBwYXJ0c0JMZW5ndGggPiAxID8gMSA6IDA7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gcGFydHNBU3RhcnQ7IGsgPCBwYXJ0c0FMZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnRBID0gYm9keUEucGFydHNba10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm91bmRzQSA9IHBhcnRBLmJvdW5kcztcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeiA9IHBhcnRzQlN0YXJ0OyB6IDwgcGFydHNCTGVuZ3RoOyB6KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFydEIgPSBib2R5Qi5wYXJ0c1t6XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm91bmRzQiA9IHBhcnRCLmJvdW5kcztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib3VuZHNBLm1pbi54ID4gYm91bmRzQi5tYXgueCB8fCBib3VuZHNBLm1heC54IDwgYm91bmRzQi5taW4ueFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBib3VuZHNBLm1heC55IDwgYm91bmRzQi5taW4ueSB8fCBib3VuZHNBLm1pbi55ID4gYm91bmRzQi5tYXgueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sbGlzaW9uID0gY29sbGlkZXMocGFydEEsIHBhcnRCLCBwYWlycyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sbGlzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbnMucHVzaChjb2xsaXNpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2xsaXNpb25zO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiBib3RoIHN1cHBsaWVkIGNvbGxpc2lvbiBmaWx0ZXJzIHdpbGwgYWxsb3cgYSBjb2xsaXNpb24gdG8gb2NjdXIuXG4gICAgICogU2VlIGBib2R5LmNvbGxpc2lvbkZpbHRlcmAgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAgICogQG1ldGhvZCBjYW5Db2xsaWRlXG4gICAgICogQHBhcmFtIHt9IGZpbHRlckFcbiAgICAgKiBAcGFyYW0ge30gZmlsdGVyQlxuICAgICAqIEByZXR1cm4ge2Jvb2x9IGB0cnVlYCBpZiBjb2xsaXNpb24gY2FuIG9jY3VyXG4gICAgICovXG4gICAgRGV0ZWN0b3IuY2FuQ29sbGlkZSA9IGZ1bmN0aW9uKGZpbHRlckEsIGZpbHRlckIpIHtcbiAgICAgICAgaWYgKGZpbHRlckEuZ3JvdXAgPT09IGZpbHRlckIuZ3JvdXAgJiYgZmlsdGVyQS5ncm91cCAhPT0gMClcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJBLmdyb3VwID4gMDtcblxuICAgICAgICByZXR1cm4gKGZpbHRlckEubWFzayAmIGZpbHRlckIuY2F0ZWdvcnkpICE9PSAwICYmIChmaWx0ZXJCLm1hc2sgJiBmaWx0ZXJBLmNhdGVnb3J5KSAhPT0gMDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBhcmlzb24gZnVuY3Rpb24gdXNlZCBpbiB0aGUgYnJvYWRwaGFzZSBhbGdvcml0aG0uXG4gICAgICogUmV0dXJucyB0aGUgc2lnbmVkIGRlbHRhIG9mIHRoZSBib2RpZXMgYm91bmRzIG9uIHRoZSB4LWF4aXMuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIF9zb3J0Q29tcGFyZVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keUFcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlCXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgc2lnbmVkIGRlbHRhIHVzZWQgZm9yIHNvcnRpbmdcbiAgICAgKi9cbiAgICBEZXRlY3Rvci5fY29tcGFyZUJvdW5kc1ggPSBmdW5jdGlvbihib2R5QSwgYm9keUIpIHtcbiAgICAgICAgcmV0dXJuIGJvZHlBLmJvdW5kcy5taW4ueCAtIGJvZHlCLmJvdW5kcy5taW4ueDtcbiAgICB9O1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgUHJvcGVydGllcyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXJyYXkgb2YgYE1hdHRlci5Cb2R5YCBiZXR3ZWVuIHdoaWNoIHRoZSBkZXRlY3RvciBmaW5kcyBjb2xsaXNpb25zLlxuICAgICAqIFxuICAgICAqIF9Ob3RlOl8gVGhlIG9yZGVyIG9mIGJvZGllcyBpbiB0aGlzIGFycmF5IF9pcyBub3QgZml4ZWRfIGFuZCB3aWxsIGJlIGNvbnRpbnVhbGx5IG1hbmFnZWQgYnkgdGhlIGRldGVjdG9yLlxuICAgICAqIEBwcm9wZXJ0eSBib2RpZXNcbiAgICAgKiBAdHlwZSBib2R5W11cbiAgICAgKiBAZGVmYXVsdCBbXVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogT3B0aW9uYWwuIEEgYE1hdHRlci5QYWlyc2Agb2JqZWN0IGZyb20gd2hpY2ggcHJldmlvdXMgY29sbGlzaW9uIG9iamVjdHMgbWF5IGJlIHJldXNlZC4gSW50ZW5kZWQgZm9yIGludGVybmFsIGBNYXR0ZXIuRW5naW5lYCB1c2FnZS5cbiAgICAgKiBAcHJvcGVydHkgcGFpcnNcbiAgICAgKiBAdHlwZSB7cGFpcnN8bnVsbH1cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAxNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuUGx1Z2luYCBtb2R1bGUgY29udGFpbnMgZnVuY3Rpb25zIGZvciByZWdpc3RlcmluZyBhbmQgaW5zdGFsbGluZyBwbHVnaW5zIG9uIG1vZHVsZXMuXG4qXG4qIEBjbGFzcyBQbHVnaW5cbiovXG5cbnZhciBQbHVnaW4gPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBQbHVnaW47XG5cbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICBQbHVnaW4uX3JlZ2lzdHJ5ID0ge307XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYSBwbHVnaW4gb2JqZWN0IHNvIGl0IGNhbiBiZSByZXNvbHZlZCBsYXRlciBieSBuYW1lLlxuICAgICAqIEBtZXRob2QgcmVnaXN0ZXJcbiAgICAgKiBAcGFyYW0gcGx1Z2luIHt9IFRoZSBwbHVnaW4gdG8gcmVnaXN0ZXIuXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBUaGUgcGx1Z2luLlxuICAgICAqL1xuICAgIFBsdWdpbi5yZWdpc3RlciA9IGZ1bmN0aW9uKHBsdWdpbikge1xuICAgICAgICBpZiAoIVBsdWdpbi5pc1BsdWdpbihwbHVnaW4pKSB7XG4gICAgICAgICAgICBDb21tb24ud2FybignUGx1Z2luLnJlZ2lzdGVyOicsIFBsdWdpbi50b1N0cmluZyhwbHVnaW4pLCAnZG9lcyBub3QgaW1wbGVtZW50IGFsbCByZXF1aXJlZCBmaWVsZHMuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGx1Z2luLm5hbWUgaW4gUGx1Z2luLl9yZWdpc3RyeSkge1xuICAgICAgICAgICAgdmFyIHJlZ2lzdGVyZWQgPSBQbHVnaW4uX3JlZ2lzdHJ5W3BsdWdpbi5uYW1lXSxcbiAgICAgICAgICAgICAgICBwbHVnaW5WZXJzaW9uID0gUGx1Z2luLnZlcnNpb25QYXJzZShwbHVnaW4udmVyc2lvbikubnVtYmVyLFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWRWZXJzaW9uID0gUGx1Z2luLnZlcnNpb25QYXJzZShyZWdpc3RlcmVkLnZlcnNpb24pLm51bWJlcjtcblxuICAgICAgICAgICAgaWYgKHBsdWdpblZlcnNpb24gPiByZWdpc3RlcmVkVmVyc2lvbikge1xuICAgICAgICAgICAgICAgIENvbW1vbi53YXJuKCdQbHVnaW4ucmVnaXN0ZXI6JywgUGx1Z2luLnRvU3RyaW5nKHJlZ2lzdGVyZWQpLCAnd2FzIHVwZ3JhZGVkIHRvJywgUGx1Z2luLnRvU3RyaW5nKHBsdWdpbikpO1xuICAgICAgICAgICAgICAgIFBsdWdpbi5fcmVnaXN0cnlbcGx1Z2luLm5hbWVdID0gcGx1Z2luO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwbHVnaW5WZXJzaW9uIDwgcmVnaXN0ZXJlZFZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICBDb21tb24ud2FybignUGx1Z2luLnJlZ2lzdGVyOicsIFBsdWdpbi50b1N0cmluZyhyZWdpc3RlcmVkKSwgJ2NhbiBub3QgYmUgZG93bmdyYWRlZCB0bycsIFBsdWdpbi50b1N0cmluZyhwbHVnaW4pKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGx1Z2luICE9PSByZWdpc3RlcmVkKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLndhcm4oJ1BsdWdpbi5yZWdpc3RlcjonLCBQbHVnaW4udG9TdHJpbmcocGx1Z2luKSwgJ2lzIGFscmVhZHkgcmVnaXN0ZXJlZCB0byBkaWZmZXJlbnQgcGx1Z2luIG9iamVjdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgUGx1Z2luLl9yZWdpc3RyeVtwbHVnaW4ubmFtZV0gPSBwbHVnaW47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGx1Z2luO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXNvbHZlcyBhIGRlcGVuZGVuY3kgdG8gYSBwbHVnaW4gb2JqZWN0IGZyb20gdGhlIHJlZ2lzdHJ5IGlmIGl0IGV4aXN0cy4gXG4gICAgICogVGhlIGBkZXBlbmRlbmN5YCBtYXkgY29udGFpbiBhIHZlcnNpb24sIGJ1dCBvbmx5IHRoZSBuYW1lIG1hdHRlcnMgd2hlbiByZXNvbHZpbmcuXG4gICAgICogQG1ldGhvZCByZXNvbHZlXG4gICAgICogQHBhcmFtIGRlcGVuZGVuY3kge3N0cmluZ30gVGhlIGRlcGVuZGVuY3kuXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBUaGUgcGx1Z2luIGlmIHJlc29sdmVkLCBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gICAgICovXG4gICAgUGx1Z2luLnJlc29sdmUgPSBmdW5jdGlvbihkZXBlbmRlbmN5KSB7XG4gICAgICAgIHJldHVybiBQbHVnaW4uX3JlZ2lzdHJ5W1BsdWdpbi5kZXBlbmRlbmN5UGFyc2UoZGVwZW5kZW5jeSkubmFtZV07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcmV0dHkgcHJpbnRlZCBwbHVnaW4gbmFtZSBhbmQgdmVyc2lvbi5cbiAgICAgKiBAbWV0aG9kIHRvU3RyaW5nXG4gICAgICogQHBhcmFtIHBsdWdpbiB7fSBUaGUgcGx1Z2luLlxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gUHJldHR5IHByaW50ZWQgcGx1Z2luIG5hbWUgYW5kIHZlcnNpb24uXG4gICAgICovXG4gICAgUGx1Z2luLnRvU3RyaW5nID0gZnVuY3Rpb24ocGx1Z2luKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgcGx1Z2luID09PSAnc3RyaW5nJyA/IHBsdWdpbiA6IChwbHVnaW4ubmFtZSB8fCAnYW5vbnltb3VzJykgKyAnQCcgKyAocGx1Z2luLnZlcnNpb24gfHwgcGx1Z2luLnJhbmdlIHx8ICcwLjAuMCcpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0IG1lZXRzIHRoZSBtaW5pbXVtIHN0YW5kYXJkIHRvIGJlIGNvbnNpZGVyZWQgYSBwbHVnaW4uXG4gICAgICogVGhpcyBtZWFucyBpdCBtdXN0IGRlZmluZSB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICogLSBgbmFtZWBcbiAgICAgKiAtIGB2ZXJzaW9uYFxuICAgICAqIC0gYGluc3RhbGxgXG4gICAgICogQG1ldGhvZCBpc1BsdWdpblxuICAgICAqIEBwYXJhbSBvYmoge30gVGhlIG9iaiB0byB0ZXN0LlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgb2JqZWN0IGNhbiBiZSBjb25zaWRlcmVkIGEgcGx1Z2luIG90aGVyd2lzZSBgZmFsc2VgLlxuICAgICAqL1xuICAgIFBsdWdpbi5pc1BsdWdpbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqICYmIG9iai5uYW1lICYmIG9iai52ZXJzaW9uICYmIG9iai5pbnN0YWxsO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiBhIHBsdWdpbiB3aXRoIHRoZSBnaXZlbiBgbmFtZWAgYmVlbiBpbnN0YWxsZWQgb24gYG1vZHVsZWAuXG4gICAgICogQG1ldGhvZCBpc1VzZWRcbiAgICAgKiBAcGFyYW0gbW9kdWxlIHt9IFRoZSBtb2R1bGUuXG4gICAgICogQHBhcmFtIG5hbWUge3N0cmluZ30gVGhlIHBsdWdpbiBuYW1lLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCBpZiBhIHBsdWdpbiB3aXRoIHRoZSBnaXZlbiBgbmFtZWAgYmVlbiBpbnN0YWxsZWQgb24gYG1vZHVsZWAsIG90aGVyd2lzZSBgZmFsc2VgLlxuICAgICAqL1xuICAgIFBsdWdpbi5pc1VzZWQgPSBmdW5jdGlvbihtb2R1bGUsIG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG1vZHVsZS51c2VkLmluZGV4T2YobmFtZSkgPiAtMTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgYHBsdWdpbi5mb3JgIGlzIGFwcGxpY2FibGUgdG8gYG1vZHVsZWAgYnkgY29tcGFyaW5nIGFnYWluc3QgYG1vZHVsZS5uYW1lYCBhbmQgYG1vZHVsZS52ZXJzaW9uYC5cbiAgICAgKiBJZiBgcGx1Z2luLmZvcmAgaXMgbm90IHNwZWNpZmllZCB0aGVuIGl0IGlzIGFzc3VtZWQgdG8gYmUgYXBwbGljYWJsZS5cbiAgICAgKiBUaGUgdmFsdWUgb2YgYHBsdWdpbi5mb3JgIGlzIGEgc3RyaW5nIG9mIHRoZSBmb3JtYXQgYCdtb2R1bGUtbmFtZSdgIG9yIGAnbW9kdWxlLW5hbWVAdmVyc2lvbidgLlxuICAgICAqIEBtZXRob2QgaXNGb3JcbiAgICAgKiBAcGFyYW0gcGx1Z2luIHt9IFRoZSBwbHVnaW4uXG4gICAgICogQHBhcmFtIG1vZHVsZSB7fSBUaGUgbW9kdWxlLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCBpZiBgcGx1Z2luLmZvcmAgaXMgYXBwbGljYWJsZSB0byBgbW9kdWxlYCwgb3RoZXJ3aXNlIGBmYWxzZWAuXG4gICAgICovXG4gICAgUGx1Z2luLmlzRm9yID0gZnVuY3Rpb24ocGx1Z2luLCBtb2R1bGUpIHtcbiAgICAgICAgdmFyIHBhcnNlZCA9IHBsdWdpbi5mb3IgJiYgUGx1Z2luLmRlcGVuZGVuY3lQYXJzZShwbHVnaW4uZm9yKTtcbiAgICAgICAgcmV0dXJuICFwbHVnaW4uZm9yIHx8IChtb2R1bGUubmFtZSA9PT0gcGFyc2VkLm5hbWUgJiYgUGx1Z2luLnZlcnNpb25TYXRpc2ZpZXMobW9kdWxlLnZlcnNpb24sIHBhcnNlZC5yYW5nZSkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnN0YWxscyB0aGUgcGx1Z2lucyBieSBjYWxsaW5nIGBwbHVnaW4uaW5zdGFsbGAgb24gZWFjaCBwbHVnaW4gc3BlY2lmaWVkIGluIGBwbHVnaW5zYCBpZiBwYXNzZWQsIG90aGVyd2lzZSBgbW9kdWxlLnVzZXNgLlxuICAgICAqIEZvciBpbnN0YWxsaW5nIHBsdWdpbnMgb24gYE1hdHRlcmAgc2VlIHRoZSBjb252ZW5pZW5jZSBmdW5jdGlvbiBgTWF0dGVyLnVzZWAuXG4gICAgICogUGx1Z2lucyBtYXkgYmUgc3BlY2lmaWVkIGVpdGhlciBieSB0aGVpciBuYW1lIG9yIGEgcmVmZXJlbmNlIHRvIHRoZSBwbHVnaW4gb2JqZWN0LlxuICAgICAqIFBsdWdpbnMgdGhlbXNlbHZlcyBtYXkgc3BlY2lmeSBmdXJ0aGVyIGRlcGVuZGVuY2llcywgYnV0IGVhY2ggcGx1Z2luIGlzIGluc3RhbGxlZCBvbmx5IG9uY2UuXG4gICAgICogT3JkZXIgaXMgaW1wb3J0YW50LCBhIHRvcG9sb2dpY2FsIHNvcnQgaXMgcGVyZm9ybWVkIHRvIGZpbmQgdGhlIGJlc3QgcmVzdWx0aW5nIG9yZGVyIG9mIGluc3RhbGxhdGlvbi5cbiAgICAgKiBUaGlzIHNvcnRpbmcgYXR0ZW1wdHMgdG8gc2F0aXNmeSBldmVyeSBkZXBlbmRlbmN5J3MgcmVxdWVzdGVkIG9yZGVyaW5nLCBidXQgbWF5IG5vdCBiZSBleGFjdCBpbiBhbGwgY2FzZXMuXG4gICAgICogVGhpcyBmdW5jdGlvbiBsb2dzIHRoZSByZXN1bHRpbmcgc3RhdHVzIG9mIGVhY2ggZGVwZW5kZW5jeSBpbiB0aGUgY29uc29sZSwgYWxvbmcgd2l0aCBhbnkgd2FybmluZ3MuXG4gICAgICogLSBBIGdyZWVuIHRpY2sg4pyFIGluZGljYXRlcyBhIGRlcGVuZGVuY3kgd2FzIHJlc29sdmVkIGFuZCBpbnN0YWxsZWQuXG4gICAgICogLSBBbiBvcmFuZ2UgZGlhbW9uZCDwn5S2IGluZGljYXRlcyBhIGRlcGVuZGVuY3kgd2FzIHJlc29sdmVkIGJ1dCBhIHdhcm5pbmcgd2FzIHRocm93biBmb3IgaXQgb3Igb25lIGlmIGl0cyBkZXBlbmRlbmNpZXMuXG4gICAgICogLSBBIHJlZCBjcm9zcyDinYwgaW5kaWNhdGVzIGEgZGVwZW5kZW5jeSBjb3VsZCBub3QgYmUgcmVzb2x2ZWQuXG4gICAgICogQXZvaWQgY2FsbGluZyB0aGlzIGZ1bmN0aW9uIG11bHRpcGxlIHRpbWVzIG9uIHRoZSBzYW1lIG1vZHVsZSB1bmxlc3MgeW91IGludGVuZCB0byBtYW51YWxseSBjb250cm9sIGluc3RhbGxhdGlvbiBvcmRlci5cbiAgICAgKiBAbWV0aG9kIHVzZVxuICAgICAqIEBwYXJhbSBtb2R1bGUge30gVGhlIG1vZHVsZSBpbnN0YWxsIHBsdWdpbnMgb24uXG4gICAgICogQHBhcmFtIFtwbHVnaW5zPW1vZHVsZS51c2VzXSB7fSBUaGUgcGx1Z2lucyB0byBpbnN0YWxsIG9uIG1vZHVsZSAob3B0aW9uYWwsIGRlZmF1bHRzIHRvIGBtb2R1bGUudXNlc2ApLlxuICAgICAqL1xuICAgIFBsdWdpbi51c2UgPSBmdW5jdGlvbihtb2R1bGUsIHBsdWdpbnMpIHtcbiAgICAgICAgbW9kdWxlLnVzZXMgPSAobW9kdWxlLnVzZXMgfHwgW10pLmNvbmNhdChwbHVnaW5zIHx8IFtdKTtcblxuICAgICAgICBpZiAobW9kdWxlLnVzZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBDb21tb24ud2FybignUGx1Z2luLnVzZTonLCBQbHVnaW4udG9TdHJpbmcobW9kdWxlKSwgJ2RvZXMgbm90IHNwZWNpZnkgYW55IGRlcGVuZGVuY2llcyB0byBpbnN0YWxsLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRlcGVuZGVuY2llcyA9IFBsdWdpbi5kZXBlbmRlbmNpZXMobW9kdWxlKSxcbiAgICAgICAgICAgIHNvcnRlZERlcGVuZGVuY2llcyA9IENvbW1vbi50b3BvbG9naWNhbFNvcnQoZGVwZW5kZW5jaWVzKSxcbiAgICAgICAgICAgIHN0YXR1cyA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc29ydGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoc29ydGVkRGVwZW5kZW5jaWVzW2ldID09PSBtb2R1bGUubmFtZSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcGx1Z2luID0gUGx1Z2luLnJlc29sdmUoc29ydGVkRGVwZW5kZW5jaWVzW2ldKTtcblxuICAgICAgICAgICAgaWYgKCFwbHVnaW4pIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMucHVzaCgn4p2MICcgKyBzb3J0ZWREZXBlbmRlbmNpZXNbaV0pO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoUGx1Z2luLmlzVXNlZChtb2R1bGUsIHBsdWdpbi5uYW1lKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIVBsdWdpbi5pc0ZvcihwbHVnaW4sIG1vZHVsZSkpIHtcbiAgICAgICAgICAgICAgICBDb21tb24ud2FybignUGx1Z2luLnVzZTonLCBQbHVnaW4udG9TdHJpbmcocGx1Z2luKSwgJ2lzIGZvcicsIHBsdWdpbi5mb3IsICdidXQgaW5zdGFsbGVkIG9uJywgUGx1Z2luLnRvU3RyaW5nKG1vZHVsZSkgKyAnLicpO1xuICAgICAgICAgICAgICAgIHBsdWdpbi5fd2FybmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBsdWdpbi5pbnN0YWxsKSB7XG4gICAgICAgICAgICAgICAgcGx1Z2luLmluc3RhbGwobW9kdWxlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLndhcm4oJ1BsdWdpbi51c2U6JywgUGx1Z2luLnRvU3RyaW5nKHBsdWdpbiksICdkb2VzIG5vdCBzcGVjaWZ5IGFuIGluc3RhbGwgZnVuY3Rpb24uJyk7XG4gICAgICAgICAgICAgICAgcGx1Z2luLl93YXJuZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGx1Z2luLl93YXJuZWQpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMucHVzaCgn8J+UtiAnICsgUGx1Z2luLnRvU3RyaW5nKHBsdWdpbikpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBwbHVnaW4uX3dhcm5lZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzLnB1c2goJ+KchSAnICsgUGx1Z2luLnRvU3RyaW5nKHBsdWdpbikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtb2R1bGUudXNlZC5wdXNoKHBsdWdpbi5uYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0dXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgQ29tbW9uLmluZm8oc3RhdHVzLmpvaW4oJyAgJykpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlY3Vyc2l2ZWx5IGZpbmRzIGFsbCBvZiBhIG1vZHVsZSdzIGRlcGVuZGVuY2llcyBhbmQgcmV0dXJucyBhIGZsYXQgZGVwZW5kZW5jeSBncmFwaC5cbiAgICAgKiBAbWV0aG9kIGRlcGVuZGVuY2llc1xuICAgICAqIEBwYXJhbSBtb2R1bGUge30gVGhlIG1vZHVsZS5cbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IEEgZGVwZW5kZW5jeSBncmFwaC5cbiAgICAgKi9cbiAgICBQbHVnaW4uZGVwZW5kZW5jaWVzID0gZnVuY3Rpb24obW9kdWxlLCB0cmFja2VkKSB7XG4gICAgICAgIHZhciBwYXJzZWRCYXNlID0gUGx1Z2luLmRlcGVuZGVuY3lQYXJzZShtb2R1bGUpLFxuICAgICAgICAgICAgbmFtZSA9IHBhcnNlZEJhc2UubmFtZTtcblxuICAgICAgICB0cmFja2VkID0gdHJhY2tlZCB8fCB7fTtcblxuICAgICAgICBpZiAobmFtZSBpbiB0cmFja2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBtb2R1bGUgPSBQbHVnaW4ucmVzb2x2ZShtb2R1bGUpIHx8IG1vZHVsZTtcblxuICAgICAgICB0cmFja2VkW25hbWVdID0gQ29tbW9uLm1hcChtb2R1bGUudXNlcyB8fCBbXSwgZnVuY3Rpb24oZGVwZW5kZW5jeSkge1xuICAgICAgICAgICAgaWYgKFBsdWdpbi5pc1BsdWdpbihkZXBlbmRlbmN5KSkge1xuICAgICAgICAgICAgICAgIFBsdWdpbi5yZWdpc3RlcihkZXBlbmRlbmN5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHBhcnNlZCA9IFBsdWdpbi5kZXBlbmRlbmN5UGFyc2UoZGVwZW5kZW5jeSksXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWQgPSBQbHVnaW4ucmVzb2x2ZShkZXBlbmRlbmN5KTtcblxuICAgICAgICAgICAgaWYgKHJlc29sdmVkICYmICFQbHVnaW4udmVyc2lvblNhdGlzZmllcyhyZXNvbHZlZC52ZXJzaW9uLCBwYXJzZWQucmFuZ2UpKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICdQbHVnaW4uZGVwZW5kZW5jaWVzOicsIFBsdWdpbi50b1N0cmluZyhyZXNvbHZlZCksICdkb2VzIG5vdCBzYXRpc2Z5JyxcbiAgICAgICAgICAgICAgICAgICAgUGx1Z2luLnRvU3RyaW5nKHBhcnNlZCksICd1c2VkIGJ5JywgUGx1Z2luLnRvU3RyaW5nKHBhcnNlZEJhc2UpICsgJy4nXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIHJlc29sdmVkLl93YXJuZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG1vZHVsZS5fd2FybmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXJlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICdQbHVnaW4uZGVwZW5kZW5jaWVzOicsIFBsdWdpbi50b1N0cmluZyhkZXBlbmRlbmN5KSwgJ3VzZWQgYnknLFxuICAgICAgICAgICAgICAgICAgICBQbHVnaW4udG9TdHJpbmcocGFyc2VkQmFzZSksICdjb3VsZCBub3QgYmUgcmVzb2x2ZWQuJ1xuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBtb2R1bGUuX3dhcm5lZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJzZWQubmFtZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmFja2VkW25hbWVdLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBQbHVnaW4uZGVwZW5kZW5jaWVzKHRyYWNrZWRbbmFtZV1baV0sIHRyYWNrZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRyYWNrZWQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyBhIGRlcGVuZGVuY3kgc3RyaW5nIGludG8gaXRzIGNvbXBvbmVudHMuXG4gICAgICogVGhlIGBkZXBlbmRlbmN5YCBpcyBhIHN0cmluZyBvZiB0aGUgZm9ybWF0IGAnbW9kdWxlLW5hbWUnYCBvciBgJ21vZHVsZS1uYW1lQHZlcnNpb24nYC5cbiAgICAgKiBTZWUgZG9jdW1lbnRhdGlvbiBmb3IgYFBsdWdpbi52ZXJzaW9uUGFyc2VgIGZvciBhIGRlc2NyaXB0aW9uIG9mIHRoZSBmb3JtYXQuXG4gICAgICogVGhpcyBmdW5jdGlvbiBjYW4gYWxzbyBoYW5kbGUgZGVwZW5kZW5jaWVzIHRoYXQgYXJlIGFscmVhZHkgcmVzb2x2ZWQgKGUuZy4gYSBtb2R1bGUgb2JqZWN0KS5cbiAgICAgKiBAbWV0aG9kIGRlcGVuZGVuY3lQYXJzZVxuICAgICAqIEBwYXJhbSBkZXBlbmRlbmN5IHtzdHJpbmd9IFRoZSBkZXBlbmRlbmN5IG9mIHRoZSBmb3JtYXQgYCdtb2R1bGUtbmFtZSdgIG9yIGAnbW9kdWxlLW5hbWVAdmVyc2lvbidgLlxuICAgICAqIEByZXR1cm4ge29iamVjdH0gVGhlIGRlcGVuZGVuY3kgcGFyc2VkIGludG8gaXRzIGNvbXBvbmVudHMuXG4gICAgICovXG4gICAgUGx1Z2luLmRlcGVuZGVuY3lQYXJzZSA9IGZ1bmN0aW9uKGRlcGVuZGVuY3kpIHtcbiAgICAgICAgaWYgKENvbW1vbi5pc1N0cmluZyhkZXBlbmRlbmN5KSkge1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSAvXltcXHctXSsoQChcXCp8W1xcXn5dP1xcZCtcXC5cXGQrXFwuXFxkKygtWzAtOUEtWmEtei0rXSspPykpPyQvO1xuXG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4udGVzdChkZXBlbmRlbmN5KSkge1xuICAgICAgICAgICAgICAgIENvbW1vbi53YXJuKCdQbHVnaW4uZGVwZW5kZW5jeVBhcnNlOicsIGRlcGVuZGVuY3ksICdpcyBub3QgYSB2YWxpZCBkZXBlbmRlbmN5IHN0cmluZy4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBkZXBlbmRlbmN5LnNwbGl0KCdAJylbMF0sXG4gICAgICAgICAgICAgICAgcmFuZ2U6IGRlcGVuZGVuY3kuc3BsaXQoJ0AnKVsxXSB8fCAnKidcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogZGVwZW5kZW5jeS5uYW1lLFxuICAgICAgICAgICAgcmFuZ2U6IGRlcGVuZGVuY3kucmFuZ2UgfHwgZGVwZW5kZW5jeS52ZXJzaW9uXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyBhIHZlcnNpb24gc3RyaW5nIGludG8gaXRzIGNvbXBvbmVudHMuICBcbiAgICAgKiBWZXJzaW9ucyBhcmUgc3RyaWN0bHkgb2YgdGhlIGZvcm1hdCBgeC55LnpgIChhcyBpbiBbc2VtdmVyXShodHRwOi8vc2VtdmVyLm9yZy8pKS5cbiAgICAgKiBWZXJzaW9ucyBtYXkgb3B0aW9uYWxseSBoYXZlIGEgcHJlcmVsZWFzZSB0YWcgaW4gdGhlIGZvcm1hdCBgeC55LnotYWxwaGFgLlxuICAgICAqIFJhbmdlcyBhcmUgYSBzdHJpY3Qgc3Vic2V0IG9mIFtucG0gcmFuZ2VzXShodHRwczovL2RvY3MubnBtanMuY29tL21pc2Mvc2VtdmVyI2FkdmFuY2VkLXJhbmdlLXN5bnRheCkuXG4gICAgICogT25seSB0aGUgZm9sbG93aW5nIHJhbmdlIHR5cGVzIGFyZSBzdXBwb3J0ZWQ6XG4gICAgICogLSBUaWxkZSByYW5nZXMgZS5nLiBgfjEuMi4zYFxuICAgICAqIC0gQ2FyZXQgcmFuZ2VzIGUuZy4gYF4xLjIuM2BcbiAgICAgKiAtIEdyZWF0ZXIgdGhhbiByYW5nZXMgZS5nLiBgPjEuMi4zYFxuICAgICAqIC0gR3JlYXRlciB0aGFuIG9yIGVxdWFsIHJhbmdlcyBlLmcuIGA+PTEuMi4zYFxuICAgICAqIC0gRXhhY3QgdmVyc2lvbiBlLmcuIGAxLjIuM2BcbiAgICAgKiAtIEFueSB2ZXJzaW9uIGAqYFxuICAgICAqIEBtZXRob2QgdmVyc2lvblBhcnNlXG4gICAgICogQHBhcmFtIHJhbmdlIHtzdHJpbmd9IFRoZSB2ZXJzaW9uIHN0cmluZy5cbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IFRoZSB2ZXJzaW9uIHJhbmdlIHBhcnNlZCBpbnRvIGl0cyBjb21wb25lbnRzLlxuICAgICAqL1xuICAgIFBsdWdpbi52ZXJzaW9uUGFyc2UgPSBmdW5jdGlvbihyYW5nZSkge1xuICAgICAgICB2YXIgcGF0dGVybiA9IC9eKFxcKil8KFxcXnx+fD49fD4pP1xccyooKFxcZCspXFwuKFxcZCspXFwuKFxcZCspKSgtWzAtOUEtWmEtei0rXSspPyQvO1xuXG4gICAgICAgIGlmICghcGF0dGVybi50ZXN0KHJhbmdlKSkge1xuICAgICAgICAgICAgQ29tbW9uLndhcm4oJ1BsdWdpbi52ZXJzaW9uUGFyc2U6JywgcmFuZ2UsICdpcyBub3QgYSB2YWxpZCB2ZXJzaW9uIG9yIHJhbmdlLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBhcnRzID0gcGF0dGVybi5leGVjKHJhbmdlKTtcbiAgICAgICAgdmFyIG1ham9yID0gTnVtYmVyKHBhcnRzWzRdKTtcbiAgICAgICAgdmFyIG1pbm9yID0gTnVtYmVyKHBhcnRzWzVdKTtcbiAgICAgICAgdmFyIHBhdGNoID0gTnVtYmVyKHBhcnRzWzZdKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNSYW5nZTogQm9vbGVhbihwYXJ0c1sxXSB8fCBwYXJ0c1syXSksXG4gICAgICAgICAgICB2ZXJzaW9uOiBwYXJ0c1szXSxcbiAgICAgICAgICAgIHJhbmdlOiByYW5nZSxcbiAgICAgICAgICAgIG9wZXJhdG9yOiBwYXJ0c1sxXSB8fCBwYXJ0c1syXSB8fCAnJyxcbiAgICAgICAgICAgIG1ham9yOiBtYWpvcixcbiAgICAgICAgICAgIG1pbm9yOiBtaW5vcixcbiAgICAgICAgICAgIHBhdGNoOiBwYXRjaCxcbiAgICAgICAgICAgIHBhcnRzOiBbbWFqb3IsIG1pbm9yLCBwYXRjaF0sXG4gICAgICAgICAgICBwcmVyZWxlYXNlOiBwYXJ0c1s3XSxcbiAgICAgICAgICAgIG51bWJlcjogbWFqb3IgKiAxZTggKyBtaW5vciAqIDFlNCArIHBhdGNoXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIGB2ZXJzaW9uYCBzYXRpc2ZpZXMgdGhlIGdpdmVuIGByYW5nZWAuXG4gICAgICogU2VlIGRvY3VtZW50YXRpb24gZm9yIGBQbHVnaW4udmVyc2lvblBhcnNlYCBmb3IgYSBkZXNjcmlwdGlvbiBvZiB0aGUgZm9ybWF0LlxuICAgICAqIElmIGEgdmVyc2lvbiBvciByYW5nZSBpcyBub3Qgc3BlY2lmaWVkLCB0aGVuIGFueSB2ZXJzaW9uIChgKmApIGlzIGFzc3VtZWQgdG8gc2F0aXNmeS5cbiAgICAgKiBAbWV0aG9kIHZlcnNpb25TYXRpc2ZpZXNcbiAgICAgKiBAcGFyYW0gdmVyc2lvbiB7c3RyaW5nfSBUaGUgdmVyc2lvbiBzdHJpbmcuXG4gICAgICogQHBhcmFtIHJhbmdlIHtzdHJpbmd9IFRoZSByYW5nZSBzdHJpbmcuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIGlmIGB2ZXJzaW9uYCBzYXRpc2ZpZXMgYHJhbmdlYCwgb3RoZXJ3aXNlIGBmYWxzZWAuXG4gICAgICovXG4gICAgUGx1Z2luLnZlcnNpb25TYXRpc2ZpZXMgPSBmdW5jdGlvbih2ZXJzaW9uLCByYW5nZSkge1xuICAgICAgICByYW5nZSA9IHJhbmdlIHx8ICcqJztcblxuICAgICAgICB2YXIgciA9IFBsdWdpbi52ZXJzaW9uUGFyc2UocmFuZ2UpLFxuICAgICAgICAgICAgdiA9IFBsdWdpbi52ZXJzaW9uUGFyc2UodmVyc2lvbik7XG5cbiAgICAgICAgaWYgKHIuaXNSYW5nZSkge1xuICAgICAgICAgICAgaWYgKHIub3BlcmF0b3IgPT09ICcqJyB8fCB2ZXJzaW9uID09PSAnKicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHIub3BlcmF0b3IgPT09ICc+Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiB2Lm51bWJlciA+IHIubnVtYmVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoci5vcGVyYXRvciA9PT0gJz49Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiB2Lm51bWJlciA+PSByLm51bWJlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHIub3BlcmF0b3IgPT09ICd+Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiB2Lm1ham9yID09PSByLm1ham9yICYmIHYubWlub3IgPT09IHIubWlub3IgJiYgdi5wYXRjaCA+PSByLnBhdGNoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoci5vcGVyYXRvciA9PT0gJ14nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHIubWFqb3IgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2Lm1ham9yID09PSByLm1ham9yICYmIHYubnVtYmVyID49IHIubnVtYmVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyLm1pbm9yID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdi5taW5vciA9PT0gci5taW5vciAmJiB2LnBhdGNoID49IHIucGF0Y2g7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHYucGF0Y2ggPT09IHIucGF0Y2g7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmVyc2lvbiA9PT0gcmFuZ2UgfHwgdmVyc2lvbiA9PT0gJyonO1xuICAgIH07XG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAxNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuUmVuZGVyYCBtb2R1bGUgaXMgYSBzaW1wbGUgY2FudmFzIGJhc2VkIHJlbmRlcmVyIGZvciB2aXN1YWxpc2luZyBpbnN0YW5jZXMgb2YgYE1hdHRlci5FbmdpbmVgLlxuKiBJdCBpcyBpbnRlbmRlZCBmb3IgZGV2ZWxvcG1lbnQgYW5kIGRlYnVnZ2luZyBwdXJwb3NlcywgYnV0IG1heSBhbHNvIGJlIHN1aXRhYmxlIGZvciBzaW1wbGUgZ2FtZXMuXG4qIEl0IGluY2x1ZGVzIGEgbnVtYmVyIG9mIGRyYXdpbmcgb3B0aW9ucyBpbmNsdWRpbmcgd2lyZWZyYW1lLCB2ZWN0b3Igd2l0aCBzdXBwb3J0IGZvciBzcHJpdGVzIGFuZCB2aWV3cG9ydHMuXG4qXG4qIEBjbGFzcyBSZW5kZXJcbiovXG5cbnZhciBSZW5kZXIgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZW5kZXI7XG5cbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xudmFyIENvbXBvc2l0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG52YXIgQm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbnZhciBFdmVudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xudmFyIFZlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG52YXIgTW91c2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUsXG4gICAgICAgIF9jYW5jZWxBbmltYXRpb25GcmFtZTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGZ1bmN0aW9uKGNhbGxiYWNrKXsgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGNhbGxiYWNrKENvbW1vbi5ub3coKSk7IH0sIDEwMDAgLyA2MCk7IH07XG5cbiAgICAgICAgX2NhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zQ2FuY2VsQW5pbWF0aW9uRnJhbWU7XG4gICAgfVxuXG4gICAgUmVuZGVyLl9nb29kRnBzID0gMzA7XG4gICAgUmVuZGVyLl9nb29kRGVsdGEgPSAxMDAwIC8gNjA7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHJlbmRlcmVyLiBUaGUgb3B0aW9ucyBwYXJhbWV0ZXIgaXMgYW4gb2JqZWN0IHRoYXQgc3BlY2lmaWVzIGFueSBwcm9wZXJ0aWVzIHlvdSB3aXNoIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0cy5cbiAgICAgKiBBbGwgcHJvcGVydGllcyBoYXZlIGRlZmF1bHQgdmFsdWVzLCBhbmQgbWFueSBhcmUgcHJlLWNhbGN1bGF0ZWQgYXV0b21hdGljYWxseSBiYXNlZCBvbiBvdGhlciBwcm9wZXJ0aWVzLlxuICAgICAqIFNlZSB0aGUgcHJvcGVydGllcyBzZWN0aW9uIGJlbG93IGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAgICogQHJldHVybiB7cmVuZGVyfSBBIG5ldyByZW5kZXJlclxuICAgICAqL1xuICAgIFJlbmRlci5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6IFJlbmRlcixcbiAgICAgICAgICAgIGVuZ2luZTogbnVsbCxcbiAgICAgICAgICAgIGVsZW1lbnQ6IG51bGwsXG4gICAgICAgICAgICBjYW52YXM6IG51bGwsXG4gICAgICAgICAgICBtb3VzZTogbnVsbCxcbiAgICAgICAgICAgIGZyYW1lUmVxdWVzdElkOiBudWxsLFxuICAgICAgICAgICAgdGltaW5nOiB7XG4gICAgICAgICAgICAgICAgaGlzdG9yeVNpemU6IDYwLFxuICAgICAgICAgICAgICAgIGRlbHRhOiAwLFxuICAgICAgICAgICAgICAgIGRlbHRhSGlzdG9yeTogW10sXG4gICAgICAgICAgICAgICAgbGFzdFRpbWU6IDAsXG4gICAgICAgICAgICAgICAgbGFzdFRpbWVzdGFtcDogMCxcbiAgICAgICAgICAgICAgICBsYXN0RWxhcHNlZDogMCxcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXBFbGFwc2VkOiAwLFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcEVsYXBzZWRIaXN0b3J5OiBbXSxcbiAgICAgICAgICAgICAgICBlbmdpbmVEZWx0YUhpc3Rvcnk6IFtdLFxuICAgICAgICAgICAgICAgIGVuZ2luZUVsYXBzZWRIaXN0b3J5OiBbXSxcbiAgICAgICAgICAgICAgICBlbGFwc2VkSGlzdG9yeTogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwMCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICBwaXhlbFJhdGlvOiAxLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjMTQxNTFmJyxcbiAgICAgICAgICAgICAgICB3aXJlZnJhbWVCYWNrZ3JvdW5kOiAnIzE0MTUxZicsXG4gICAgICAgICAgICAgICAgaGFzQm91bmRzOiAhIW9wdGlvbnMuYm91bmRzLFxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgd2lyZWZyYW1lczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzaG93U2xlZXBpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgc2hvd0RlYnVnOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93U3RhdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dQZXJmb3JtYW5jZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd0JvdW5kczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd1ZlbG9jaXR5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93Q29sbGlzaW9uczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd1NlcGFyYXRpb25zOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93QXhlczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd1Bvc2l0aW9uczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd0FuZ2xlSW5kaWNhdG9yOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93SWRzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93VmVydGV4TnVtYmVyczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd0NvbnZleEh1bGxzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93SW50ZXJuYWxFZGdlczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd01vdXNlUG9zaXRpb246IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHJlbmRlciA9IENvbW1vbi5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIGlmIChyZW5kZXIuY2FudmFzKSB7XG4gICAgICAgICAgICByZW5kZXIuY2FudmFzLndpZHRoID0gcmVuZGVyLm9wdGlvbnMud2lkdGggfHwgcmVuZGVyLmNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgIHJlbmRlci5jYW52YXMuaGVpZ2h0ID0gcmVuZGVyLm9wdGlvbnMuaGVpZ2h0IHx8IHJlbmRlci5jYW52YXMuaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyLm1vdXNlID0gb3B0aW9ucy5tb3VzZTtcbiAgICAgICAgcmVuZGVyLmVuZ2luZSA9IG9wdGlvbnMuZW5naW5lO1xuICAgICAgICByZW5kZXIuY2FudmFzID0gcmVuZGVyLmNhbnZhcyB8fCBfY3JlYXRlQ2FudmFzKHJlbmRlci5vcHRpb25zLndpZHRoLCByZW5kZXIub3B0aW9ucy5oZWlnaHQpO1xuICAgICAgICByZW5kZXIuY29udGV4dCA9IHJlbmRlci5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgcmVuZGVyLnRleHR1cmVzID0ge307XG5cbiAgICAgICAgcmVuZGVyLmJvdW5kcyA9IHJlbmRlci5ib3VuZHMgfHwge1xuICAgICAgICAgICAgbWluOiB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWF4OiB7XG4gICAgICAgICAgICAgICAgeDogcmVuZGVyLmNhbnZhcy53aWR0aCxcbiAgICAgICAgICAgICAgICB5OiByZW5kZXIuY2FudmFzLmhlaWdodFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGZvciB0ZW1wb3JhcnkgYmFjayBjb21wYXRpYmlsaXR5IG9ubHlcbiAgICAgICAgcmVuZGVyLm9wdGlvbnMuc2hvd0Jyb2FkcGhhc2UgPSBmYWxzZTtcblxuICAgICAgICBpZiAocmVuZGVyLm9wdGlvbnMucGl4ZWxSYXRpbyAhPT0gMSkge1xuICAgICAgICAgICAgUmVuZGVyLnNldFBpeGVsUmF0aW8ocmVuZGVyLCByZW5kZXIub3B0aW9ucy5waXhlbFJhdGlvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChDb21tb24uaXNFbGVtZW50KHJlbmRlci5lbGVtZW50KSkge1xuICAgICAgICAgICAgcmVuZGVyLmVsZW1lbnQuYXBwZW5kQ2hpbGQocmVuZGVyLmNhbnZhcyk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXJlbmRlci5jYW52YXMucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgQ29tbW9uLmxvZygnUmVuZGVyLmNyZWF0ZTogb3B0aW9ucy5lbGVtZW50IHdhcyB1bmRlZmluZWQsIHJlbmRlci5jYW52YXMgd2FzIGNyZWF0ZWQgYnV0IG5vdCBhcHBlbmRlZCcsICd3YXJuJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVuZGVyO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDb250aW51b3VzbHkgdXBkYXRlcyB0aGUgcmVuZGVyIGNhbnZhcyBvbiB0aGUgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAgZXZlbnQuXG4gICAgICogQG1ldGhvZCBydW5cbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICovXG4gICAgUmVuZGVyLnJ1biA9IGZ1bmN0aW9uKHJlbmRlcikge1xuICAgICAgICAoZnVuY3Rpb24gbG9vcCh0aW1lKXtcbiAgICAgICAgICAgIHJlbmRlci5mcmFtZVJlcXVlc3RJZCA9IF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIF91cGRhdGVUaW1pbmcocmVuZGVyLCB0aW1lKTtcblxuICAgICAgICAgICAgUmVuZGVyLndvcmxkKHJlbmRlciwgdGltZSk7XG5cbiAgICAgICAgICAgIGlmIChyZW5kZXIub3B0aW9ucy5zaG93U3RhdHMgfHwgcmVuZGVyLm9wdGlvbnMuc2hvd0RlYnVnKSB7XG4gICAgICAgICAgICAgICAgUmVuZGVyLnN0YXRzKHJlbmRlciwgcmVuZGVyLmNvbnRleHQsIHRpbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVuZGVyLm9wdGlvbnMuc2hvd1BlcmZvcm1hbmNlIHx8IHJlbmRlci5vcHRpb25zLnNob3dEZWJ1Zykge1xuICAgICAgICAgICAgICAgIFJlbmRlci5wZXJmb3JtYW5jZShyZW5kZXIsIHJlbmRlci5jb250ZXh0LCB0aW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRW5kcyBleGVjdXRpb24gb2YgYFJlbmRlci5ydW5gIG9uIHRoZSBnaXZlbiBgcmVuZGVyYCwgYnkgY2FuY2VsaW5nIHRoZSBhbmltYXRpb24gZnJhbWUgcmVxdWVzdCBldmVudCBsb29wLlxuICAgICAqIEBtZXRob2Qgc3RvcFxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKi9cbiAgICBSZW5kZXIuc3RvcCA9IGZ1bmN0aW9uKHJlbmRlcikge1xuICAgICAgICBfY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVuZGVyLmZyYW1lUmVxdWVzdElkKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcGl4ZWwgcmF0aW8gb2YgdGhlIHJlbmRlcmVyIGFuZCB1cGRhdGVzIHRoZSBjYW52YXMuXG4gICAgICogVG8gYXV0b21hdGljYWxseSBkZXRlY3QgdGhlIGNvcnJlY3QgcmF0aW8sIHBhc3MgdGhlIHN0cmluZyBgJ2F1dG8nYCBmb3IgYHBpeGVsUmF0aW9gLlxuICAgICAqIEBtZXRob2Qgc2V0UGl4ZWxSYXRpb1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGl4ZWxSYXRpb1xuICAgICAqL1xuICAgIFJlbmRlci5zZXRQaXhlbFJhdGlvID0gZnVuY3Rpb24ocmVuZGVyLCBwaXhlbFJhdGlvKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gcmVuZGVyLm9wdGlvbnMsXG4gICAgICAgICAgICBjYW52YXMgPSByZW5kZXIuY2FudmFzO1xuXG4gICAgICAgIGlmIChwaXhlbFJhdGlvID09PSAnYXV0bycpIHtcbiAgICAgICAgICAgIHBpeGVsUmF0aW8gPSBfZ2V0UGl4ZWxSYXRpbyhjYW52YXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9ucy5waXhlbFJhdGlvID0gcGl4ZWxSYXRpbztcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnZGF0YS1waXhlbC1yYXRpbycsIHBpeGVsUmF0aW8pO1xuICAgICAgICBjYW52YXMud2lkdGggPSBvcHRpb25zLndpZHRoICogcGl4ZWxSYXRpbztcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0ICogcGl4ZWxSYXRpbztcbiAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gb3B0aW9ucy53aWR0aCArICdweCc7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBvcHRpb25zLmhlaWdodCArICdweCc7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFBvc2l0aW9ucyBhbmQgc2l6ZXMgdGhlIHZpZXdwb3J0IGFyb3VuZCB0aGUgZ2l2ZW4gb2JqZWN0IGJvdW5kcy5cbiAgICAgKiBPYmplY3RzIG11c3QgaGF2ZSBhdCBsZWFzdCBvbmUgb2YgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAqIC0gYG9iamVjdC5ib3VuZHNgXG4gICAgICogLSBgb2JqZWN0LnBvc2l0aW9uYFxuICAgICAqIC0gYG9iamVjdC5taW5gIGFuZCBgb2JqZWN0Lm1heGBcbiAgICAgKiAtIGBvYmplY3QueGAgYW5kIGBvYmplY3QueWBcbiAgICAgKiBAbWV0aG9kIGxvb2tBdFxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge29iamVjdFtdfSBvYmplY3RzXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IFtwYWRkaW5nXVxuICAgICAqIEBwYXJhbSB7Ym9vbH0gW2NlbnRlcj10cnVlXVxuICAgICAqL1xuICAgIFJlbmRlci5sb29rQXQgPSBmdW5jdGlvbihyZW5kZXIsIG9iamVjdHMsIHBhZGRpbmcsIGNlbnRlcikge1xuICAgICAgICBjZW50ZXIgPSB0eXBlb2YgY2VudGVyICE9PSAndW5kZWZpbmVkJyA/IGNlbnRlciA6IHRydWU7XG4gICAgICAgIG9iamVjdHMgPSBDb21tb24uaXNBcnJheShvYmplY3RzKSA/IG9iamVjdHMgOiBbb2JqZWN0c107XG4gICAgICAgIHBhZGRpbmcgPSBwYWRkaW5nIHx8IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gZmluZCBib3VuZHMgb2YgYWxsIG9iamVjdHNcbiAgICAgICAgdmFyIGJvdW5kcyA9IHtcbiAgICAgICAgICAgIG1pbjogeyB4OiBJbmZpbml0eSwgeTogSW5maW5pdHkgfSxcbiAgICAgICAgICAgIG1heDogeyB4OiAtSW5maW5pdHksIHk6IC1JbmZpbml0eSB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgb2JqZWN0ID0gb2JqZWN0c1tpXSxcbiAgICAgICAgICAgICAgICBtaW4gPSBvYmplY3QuYm91bmRzID8gb2JqZWN0LmJvdW5kcy5taW4gOiAob2JqZWN0Lm1pbiB8fCBvYmplY3QucG9zaXRpb24gfHwgb2JqZWN0KSxcbiAgICAgICAgICAgICAgICBtYXggPSBvYmplY3QuYm91bmRzID8gb2JqZWN0LmJvdW5kcy5tYXggOiAob2JqZWN0Lm1heCB8fCBvYmplY3QucG9zaXRpb24gfHwgb2JqZWN0KTtcblxuICAgICAgICAgICAgaWYgKG1pbiAmJiBtYXgpIHtcbiAgICAgICAgICAgICAgICBpZiAobWluLnggPCBib3VuZHMubWluLngpXG4gICAgICAgICAgICAgICAgICAgIGJvdW5kcy5taW4ueCA9IG1pbi54O1xuXG4gICAgICAgICAgICAgICAgaWYgKG1heC54ID4gYm91bmRzLm1heC54KVxuICAgICAgICAgICAgICAgICAgICBib3VuZHMubWF4LnggPSBtYXgueDtcblxuICAgICAgICAgICAgICAgIGlmIChtaW4ueSA8IGJvdW5kcy5taW4ueSlcbiAgICAgICAgICAgICAgICAgICAgYm91bmRzLm1pbi55ID0gbWluLnk7XG5cbiAgICAgICAgICAgICAgICBpZiAobWF4LnkgPiBib3VuZHMubWF4LnkpXG4gICAgICAgICAgICAgICAgICAgIGJvdW5kcy5tYXgueSA9IG1heC55O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmluZCByYXRpb3NcbiAgICAgICAgdmFyIHdpZHRoID0gKGJvdW5kcy5tYXgueCAtIGJvdW5kcy5taW4ueCkgKyAyICogcGFkZGluZy54LFxuICAgICAgICAgICAgaGVpZ2h0ID0gKGJvdW5kcy5tYXgueSAtIGJvdW5kcy5taW4ueSkgKyAyICogcGFkZGluZy55LFxuICAgICAgICAgICAgdmlld0hlaWdodCA9IHJlbmRlci5jYW52YXMuaGVpZ2h0LFxuICAgICAgICAgICAgdmlld1dpZHRoID0gcmVuZGVyLmNhbnZhcy53aWR0aCxcbiAgICAgICAgICAgIG91dGVyUmF0aW8gPSB2aWV3V2lkdGggLyB2aWV3SGVpZ2h0LFxuICAgICAgICAgICAgaW5uZXJSYXRpbyA9IHdpZHRoIC8gaGVpZ2h0LFxuICAgICAgICAgICAgc2NhbGVYID0gMSxcbiAgICAgICAgICAgIHNjYWxlWSA9IDE7XG5cbiAgICAgICAgLy8gZmluZCBzY2FsZSBmYWN0b3JcbiAgICAgICAgaWYgKGlubmVyUmF0aW8gPiBvdXRlclJhdGlvKSB7XG4gICAgICAgICAgICBzY2FsZVkgPSBpbm5lclJhdGlvIC8gb3V0ZXJSYXRpbztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNjYWxlWCA9IG91dGVyUmF0aW8gLyBpbm5lclJhdGlvO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZW5hYmxlIGJvdW5kc1xuICAgICAgICByZW5kZXIub3B0aW9ucy5oYXNCb3VuZHMgPSB0cnVlO1xuXG4gICAgICAgIC8vIHBvc2l0aW9uIGFuZCBzaXplXG4gICAgICAgIHJlbmRlci5ib3VuZHMubWluLnggPSBib3VuZHMubWluLng7XG4gICAgICAgIHJlbmRlci5ib3VuZHMubWF4LnggPSBib3VuZHMubWluLnggKyB3aWR0aCAqIHNjYWxlWDtcbiAgICAgICAgcmVuZGVyLmJvdW5kcy5taW4ueSA9IGJvdW5kcy5taW4ueTtcbiAgICAgICAgcmVuZGVyLmJvdW5kcy5tYXgueSA9IGJvdW5kcy5taW4ueSArIGhlaWdodCAqIHNjYWxlWTtcblxuICAgICAgICAvLyBjZW50ZXJcbiAgICAgICAgaWYgKGNlbnRlcikge1xuICAgICAgICAgICAgcmVuZGVyLmJvdW5kcy5taW4ueCArPSB3aWR0aCAqIDAuNSAtICh3aWR0aCAqIHNjYWxlWCkgKiAwLjU7XG4gICAgICAgICAgICByZW5kZXIuYm91bmRzLm1heC54ICs9IHdpZHRoICogMC41IC0gKHdpZHRoICogc2NhbGVYKSAqIDAuNTtcbiAgICAgICAgICAgIHJlbmRlci5ib3VuZHMubWluLnkgKz0gaGVpZ2h0ICogMC41IC0gKGhlaWdodCAqIHNjYWxlWSkgKiAwLjU7XG4gICAgICAgICAgICByZW5kZXIuYm91bmRzLm1heC55ICs9IGhlaWdodCAqIDAuNSAtIChoZWlnaHQgKiBzY2FsZVkpICogMC41O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGFkZGluZ1xuICAgICAgICByZW5kZXIuYm91bmRzLm1pbi54IC09IHBhZGRpbmcueDtcbiAgICAgICAgcmVuZGVyLmJvdW5kcy5tYXgueCAtPSBwYWRkaW5nLng7XG4gICAgICAgIHJlbmRlci5ib3VuZHMubWluLnkgLT0gcGFkZGluZy55O1xuICAgICAgICByZW5kZXIuYm91bmRzLm1heC55IC09IHBhZGRpbmcueTtcblxuICAgICAgICAvLyB1cGRhdGUgbW91c2VcbiAgICAgICAgaWYgKHJlbmRlci5tb3VzZSkge1xuICAgICAgICAgICAgTW91c2Uuc2V0U2NhbGUocmVuZGVyLm1vdXNlLCB7XG4gICAgICAgICAgICAgICAgeDogKHJlbmRlci5ib3VuZHMubWF4LnggLSByZW5kZXIuYm91bmRzLm1pbi54KSAvIHJlbmRlci5jYW52YXMud2lkdGgsXG4gICAgICAgICAgICAgICAgeTogKHJlbmRlci5ib3VuZHMubWF4LnkgLSByZW5kZXIuYm91bmRzLm1pbi55KSAvIHJlbmRlci5jYW52YXMuaGVpZ2h0XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgTW91c2Uuc2V0T2Zmc2V0KHJlbmRlci5tb3VzZSwgcmVuZGVyLmJvdW5kcy5taW4pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgdmlld3BvcnQgdHJhbnNmb3JtcyBiYXNlZCBvbiBgcmVuZGVyLmJvdW5kc2AgdG8gYSByZW5kZXIgY29udGV4dC5cbiAgICAgKiBAbWV0aG9kIHN0YXJ0Vmlld1RyYW5zZm9ybVxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKi9cbiAgICBSZW5kZXIuc3RhcnRWaWV3VHJhbnNmb3JtID0gZnVuY3Rpb24ocmVuZGVyKSB7XG4gICAgICAgIHZhciBib3VuZHNXaWR0aCA9IHJlbmRlci5ib3VuZHMubWF4LnggLSByZW5kZXIuYm91bmRzLm1pbi54LFxuICAgICAgICAgICAgYm91bmRzSGVpZ2h0ID0gcmVuZGVyLmJvdW5kcy5tYXgueSAtIHJlbmRlci5ib3VuZHMubWluLnksXG4gICAgICAgICAgICBib3VuZHNTY2FsZVggPSBib3VuZHNXaWR0aCAvIHJlbmRlci5vcHRpb25zLndpZHRoLFxuICAgICAgICAgICAgYm91bmRzU2NhbGVZID0gYm91bmRzSGVpZ2h0IC8gcmVuZGVyLm9wdGlvbnMuaGVpZ2h0O1xuXG4gICAgICAgIHJlbmRlci5jb250ZXh0LnNldFRyYW5zZm9ybShcbiAgICAgICAgICAgIHJlbmRlci5vcHRpb25zLnBpeGVsUmF0aW8gLyBib3VuZHNTY2FsZVgsIDAsIDAsIFxuICAgICAgICAgICAgcmVuZGVyLm9wdGlvbnMucGl4ZWxSYXRpbyAvIGJvdW5kc1NjYWxlWSwgMCwgMFxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgcmVuZGVyLmNvbnRleHQudHJhbnNsYXRlKC1yZW5kZXIuYm91bmRzLm1pbi54LCAtcmVuZGVyLmJvdW5kcy5taW4ueSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlc2V0cyBhbGwgdHJhbnNmb3JtcyBvbiB0aGUgcmVuZGVyIGNvbnRleHQuXG4gICAgICogQG1ldGhvZCBlbmRWaWV3VHJhbnNmb3JtXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqL1xuICAgIFJlbmRlci5lbmRWaWV3VHJhbnNmb3JtID0gZnVuY3Rpb24ocmVuZGVyKSB7XG4gICAgICAgIHJlbmRlci5jb250ZXh0LnNldFRyYW5zZm9ybShyZW5kZXIub3B0aW9ucy5waXhlbFJhdGlvLCAwLCAwLCByZW5kZXIub3B0aW9ucy5waXhlbFJhdGlvLCAwLCAwKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgZ2l2ZW4gYGVuZ2luZWAncyBgTWF0dGVyLldvcmxkYCBvYmplY3QuXG4gICAgICogVGhpcyBpcyB0aGUgZW50cnkgcG9pbnQgZm9yIGFsbCByZW5kZXJpbmcgYW5kIHNob3VsZCBiZSBjYWxsZWQgZXZlcnkgdGltZSB0aGUgc2NlbmUgY2hhbmdlcy5cbiAgICAgKiBAbWV0aG9kIHdvcmxkXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqL1xuICAgIFJlbmRlci53b3JsZCA9IGZ1bmN0aW9uKHJlbmRlciwgdGltZSkge1xuICAgICAgICB2YXIgc3RhcnRUaW1lID0gQ29tbW9uLm5vdygpLFxuICAgICAgICAgICAgZW5naW5lID0gcmVuZGVyLmVuZ2luZSxcbiAgICAgICAgICAgIHdvcmxkID0gZW5naW5lLndvcmxkLFxuICAgICAgICAgICAgY2FudmFzID0gcmVuZGVyLmNhbnZhcyxcbiAgICAgICAgICAgIGNvbnRleHQgPSByZW5kZXIuY29udGV4dCxcbiAgICAgICAgICAgIG9wdGlvbnMgPSByZW5kZXIub3B0aW9ucyxcbiAgICAgICAgICAgIHRpbWluZyA9IHJlbmRlci50aW1pbmc7XG5cbiAgICAgICAgdmFyIGFsbEJvZGllcyA9IENvbXBvc2l0ZS5hbGxCb2RpZXMod29ybGQpLFxuICAgICAgICAgICAgYWxsQ29uc3RyYWludHMgPSBDb21wb3NpdGUuYWxsQ29uc3RyYWludHMod29ybGQpLFxuICAgICAgICAgICAgYmFja2dyb3VuZCA9IG9wdGlvbnMud2lyZWZyYW1lcyA/IG9wdGlvbnMud2lyZWZyYW1lQmFja2dyb3VuZCA6IG9wdGlvbnMuYmFja2dyb3VuZCxcbiAgICAgICAgICAgIGJvZGllcyA9IFtdLFxuICAgICAgICAgICAgY29uc3RyYWludHMgPSBbXSxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgdmFyIGV2ZW50ID0ge1xuICAgICAgICAgICAgdGltZXN0YW1wOiBlbmdpbmUudGltaW5nLnRpbWVzdGFtcFxuICAgICAgICB9O1xuXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKHJlbmRlciwgJ2JlZm9yZVJlbmRlcicsIGV2ZW50KTtcblxuICAgICAgICAvLyBhcHBseSBiYWNrZ3JvdW5kIGlmIGl0IGhhcyBjaGFuZ2VkXG4gICAgICAgIGlmIChyZW5kZXIuY3VycmVudEJhY2tncm91bmQgIT09IGJhY2tncm91bmQpXG4gICAgICAgICAgICBfYXBwbHlCYWNrZ3JvdW5kKHJlbmRlciwgYmFja2dyb3VuZCk7XG5cbiAgICAgICAgLy8gY2xlYXIgdGhlIGNhbnZhcyB3aXRoIGEgdHJhbnNwYXJlbnQgZmlsbCwgdG8gYWxsb3cgdGhlIGNhbnZhcyBiYWNrZ3JvdW5kIHRvIHNob3dcbiAgICAgICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLWluJztcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcInRyYW5zcGFyZW50XCI7XG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuXG4gICAgICAgIC8vIGhhbmRsZSBib3VuZHNcbiAgICAgICAgaWYgKG9wdGlvbnMuaGFzQm91bmRzKSB7XG4gICAgICAgICAgICAvLyBmaWx0ZXIgb3V0IGJvZGllcyB0aGF0IGFyZSBub3QgaW4gdmlld1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFsbEJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gYWxsQm9kaWVzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChCb3VuZHMub3ZlcmxhcHMoYm9keS5ib3VuZHMsIHJlbmRlci5ib3VuZHMpKVxuICAgICAgICAgICAgICAgICAgICBib2RpZXMucHVzaChib2R5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZmlsdGVyIG91dCBjb25zdHJhaW50cyB0aGF0IGFyZSBub3QgaW4gdmlld1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFsbENvbnN0cmFpbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnN0cmFpbnQgPSBhbGxDb25zdHJhaW50c1tpXSxcbiAgICAgICAgICAgICAgICAgICAgYm9keUEgPSBjb25zdHJhaW50LmJvZHlBLFxuICAgICAgICAgICAgICAgICAgICBib2R5QiA9IGNvbnN0cmFpbnQuYm9keUIsXG4gICAgICAgICAgICAgICAgICAgIHBvaW50QVdvcmxkID0gY29uc3RyYWludC5wb2ludEEsXG4gICAgICAgICAgICAgICAgICAgIHBvaW50QldvcmxkID0gY29uc3RyYWludC5wb2ludEI7XG5cbiAgICAgICAgICAgICAgICBpZiAoYm9keUEpIHBvaW50QVdvcmxkID0gVmVjdG9yLmFkZChib2R5QS5wb3NpdGlvbiwgY29uc3RyYWludC5wb2ludEEpO1xuICAgICAgICAgICAgICAgIGlmIChib2R5QikgcG9pbnRCV29ybGQgPSBWZWN0b3IuYWRkKGJvZHlCLnBvc2l0aW9uLCBjb25zdHJhaW50LnBvaW50Qik7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXBvaW50QVdvcmxkIHx8ICFwb2ludEJXb3JsZClcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoQm91bmRzLmNvbnRhaW5zKHJlbmRlci5ib3VuZHMsIHBvaW50QVdvcmxkKSB8fCBCb3VuZHMuY29udGFpbnMocmVuZGVyLmJvdW5kcywgcG9pbnRCV29ybGQpKVxuICAgICAgICAgICAgICAgICAgICBjb25zdHJhaW50cy5wdXNoKGNvbnN0cmFpbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB0cmFuc2Zvcm0gdGhlIHZpZXdcbiAgICAgICAgICAgIFJlbmRlci5zdGFydFZpZXdUcmFuc2Zvcm0ocmVuZGVyKTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIG1vdXNlXG4gICAgICAgICAgICBpZiAocmVuZGVyLm1vdXNlKSB7XG4gICAgICAgICAgICAgICAgTW91c2Uuc2V0U2NhbGUocmVuZGVyLm1vdXNlLCB7XG4gICAgICAgICAgICAgICAgICAgIHg6IChyZW5kZXIuYm91bmRzLm1heC54IC0gcmVuZGVyLmJvdW5kcy5taW4ueCkgLyByZW5kZXIub3B0aW9ucy53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgeTogKHJlbmRlci5ib3VuZHMubWF4LnkgLSByZW5kZXIuYm91bmRzLm1pbi55KSAvIHJlbmRlci5vcHRpb25zLmhlaWdodFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgTW91c2Uuc2V0T2Zmc2V0KHJlbmRlci5tb3VzZSwgcmVuZGVyLmJvdW5kcy5taW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3RyYWludHMgPSBhbGxDb25zdHJhaW50cztcbiAgICAgICAgICAgIGJvZGllcyA9IGFsbEJvZGllcztcblxuICAgICAgICAgICAgaWYgKHJlbmRlci5vcHRpb25zLnBpeGVsUmF0aW8gIT09IDEpIHtcbiAgICAgICAgICAgICAgICByZW5kZXIuY29udGV4dC5zZXRUcmFuc2Zvcm0ocmVuZGVyLm9wdGlvbnMucGl4ZWxSYXRpbywgMCwgMCwgcmVuZGVyLm9wdGlvbnMucGl4ZWxSYXRpbywgMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW9wdGlvbnMud2lyZWZyYW1lcyB8fCAoZW5naW5lLmVuYWJsZVNsZWVwaW5nICYmIG9wdGlvbnMuc2hvd1NsZWVwaW5nKSkge1xuICAgICAgICAgICAgLy8gZnVsbHkgZmVhdHVyZWQgcmVuZGVyaW5nIG9mIGJvZGllc1xuICAgICAgICAgICAgUmVuZGVyLmJvZGllcyhyZW5kZXIsIGJvZGllcywgY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zaG93Q29udmV4SHVsbHMpXG4gICAgICAgICAgICAgICAgUmVuZGVyLmJvZHlDb252ZXhIdWxscyhyZW5kZXIsIGJvZGllcywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIC8vIG9wdGltaXNlZCBtZXRob2QgZm9yIHdpcmVmcmFtZXMgb25seVxuICAgICAgICAgICAgUmVuZGVyLmJvZHlXaXJlZnJhbWVzKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnNob3dCb3VuZHMpXG4gICAgICAgICAgICBSZW5kZXIuYm9keUJvdW5kcyhyZW5kZXIsIGJvZGllcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2hvd0F4ZXMgfHwgb3B0aW9ucy5zaG93QW5nbGVJbmRpY2F0b3IpXG4gICAgICAgICAgICBSZW5kZXIuYm9keUF4ZXMocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNob3dQb3NpdGlvbnMpXG4gICAgICAgICAgICBSZW5kZXIuYm9keVBvc2l0aW9ucyhyZW5kZXIsIGJvZGllcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2hvd1ZlbG9jaXR5KVxuICAgICAgICAgICAgUmVuZGVyLmJvZHlWZWxvY2l0eShyZW5kZXIsIGJvZGllcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2hvd0lkcylcbiAgICAgICAgICAgIFJlbmRlci5ib2R5SWRzKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5zaG93U2VwYXJhdGlvbnMpXG4gICAgICAgICAgICBSZW5kZXIuc2VwYXJhdGlvbnMocmVuZGVyLCBlbmdpbmUucGFpcnMubGlzdCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2hvd0NvbGxpc2lvbnMpXG4gICAgICAgICAgICBSZW5kZXIuY29sbGlzaW9ucyhyZW5kZXIsIGVuZ2luZS5wYWlycy5saXN0LCBjb250ZXh0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5zaG93VmVydGV4TnVtYmVycylcbiAgICAgICAgICAgIFJlbmRlci52ZXJ0ZXhOdW1iZXJzKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5zaG93TW91c2VQb3NpdGlvbilcbiAgICAgICAgICAgIFJlbmRlci5tb3VzZVBvc2l0aW9uKHJlbmRlciwgcmVuZGVyLm1vdXNlLCBjb250ZXh0KTtcblxuICAgICAgICBSZW5kZXIuY29uc3RyYWludHMoY29uc3RyYWludHMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmhhc0JvdW5kcykge1xuICAgICAgICAgICAgLy8gcmV2ZXJ0IHZpZXcgdHJhbnNmb3Jtc1xuICAgICAgICAgICAgUmVuZGVyLmVuZFZpZXdUcmFuc2Zvcm0ocmVuZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKHJlbmRlciwgJ2FmdGVyUmVuZGVyJywgZXZlbnQpO1xuXG4gICAgICAgIC8vIGxvZyB0aGUgdGltZSBlbGFwc2VkIGNvbXB1dGluZyB0aGlzIHVwZGF0ZVxuICAgICAgICB0aW1pbmcubGFzdEVsYXBzZWQgPSBDb21tb24ubm93KCkgLSBzdGFydFRpbWU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgc3RhdGlzdGljcyBhYm91dCB0aGUgZW5naW5lIGFuZCB3b3JsZCB1c2VmdWwgZm9yIGRlYnVnZ2luZy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2Qgc3RhdHNcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHRpbWVcbiAgICAgKi9cbiAgICBSZW5kZXIuc3RhdHMgPSBmdW5jdGlvbihyZW5kZXIsIGNvbnRleHQsIHRpbWUpIHtcbiAgICAgICAgdmFyIGVuZ2luZSA9IHJlbmRlci5lbmdpbmUsXG4gICAgICAgICAgICB3b3JsZCA9IGVuZ2luZS53b3JsZCxcbiAgICAgICAgICAgIGJvZGllcyA9IENvbXBvc2l0ZS5hbGxCb2RpZXMod29ybGQpLFxuICAgICAgICAgICAgcGFydHMgPSAwLFxuICAgICAgICAgICAgd2lkdGggPSA1NSxcbiAgICAgICAgICAgIGhlaWdodCA9IDQ0LFxuICAgICAgICAgICAgeCA9IDAsXG4gICAgICAgICAgICB5ID0gMDtcbiAgICAgICAgXG4gICAgICAgIC8vIGNvdW50IHBhcnRzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBwYXJ0cyArPSBib2RpZXNbaV0ucGFydHMubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2VjdGlvbnNcbiAgICAgICAgdmFyIHNlY3Rpb25zID0ge1xuICAgICAgICAgICAgJ1BhcnQnOiBwYXJ0cyxcbiAgICAgICAgICAgICdCb2R5JzogYm9kaWVzLmxlbmd0aCxcbiAgICAgICAgICAgICdDb25zJzogQ29tcG9zaXRlLmFsbENvbnN0cmFpbnRzKHdvcmxkKS5sZW5ndGgsXG4gICAgICAgICAgICAnQ29tcCc6IENvbXBvc2l0ZS5hbGxDb21wb3NpdGVzKHdvcmxkKS5sZW5ndGgsXG4gICAgICAgICAgICAnUGFpcic6IGVuZ2luZS5wYWlycy5saXN0Lmxlbmd0aFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGJhY2tncm91bmRcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnIzBlMGYxOSc7XG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoeCwgeSwgd2lkdGggKiA1LjUsIGhlaWdodCk7XG5cbiAgICAgICAgY29udGV4dC5mb250ID0gJzEycHggQXJpYWwnO1xuICAgICAgICBjb250ZXh0LnRleHRCYXNlbGluZSA9ICd0b3AnO1xuICAgICAgICBjb250ZXh0LnRleHRBbGlnbiA9ICdyaWdodCc7XG5cbiAgICAgICAgLy8gc2VjdGlvbnNcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNlY3Rpb25zKSB7XG4gICAgICAgICAgICB2YXIgc2VjdGlvbiA9IHNlY3Rpb25zW2tleV07XG4gICAgICAgICAgICAvLyBsYWJlbFxuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnI2FhYSc7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGxUZXh0KGtleSwgeCArIHdpZHRoLCB5ICsgOCk7XG5cbiAgICAgICAgICAgIC8vIHZhbHVlXG4gICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjZWVlJztcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFRleHQoc2VjdGlvbiwgeCArIHdpZHRoLCB5ICsgMjYpO1xuXG4gICAgICAgICAgICB4ICs9IHdpZHRoO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgZW5naW5lIGFuZCByZW5kZXIgcGVyZm9ybWFuY2UgaW5mb3JtYXRpb24uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHBlcmZvcm1hbmNlXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5wZXJmb3JtYW5jZSA9IGZ1bmN0aW9uKHJlbmRlciwgY29udGV4dCkge1xuICAgICAgICB2YXIgZW5naW5lID0gcmVuZGVyLmVuZ2luZSxcbiAgICAgICAgICAgIHRpbWluZyA9IHJlbmRlci50aW1pbmcsXG4gICAgICAgICAgICBkZWx0YUhpc3RvcnkgPSB0aW1pbmcuZGVsdGFIaXN0b3J5LFxuICAgICAgICAgICAgZWxhcHNlZEhpc3RvcnkgPSB0aW1pbmcuZWxhcHNlZEhpc3RvcnksXG4gICAgICAgICAgICB0aW1lc3RhbXBFbGFwc2VkSGlzdG9yeSA9IHRpbWluZy50aW1lc3RhbXBFbGFwc2VkSGlzdG9yeSxcbiAgICAgICAgICAgIGVuZ2luZURlbHRhSGlzdG9yeSA9IHRpbWluZy5lbmdpbmVEZWx0YUhpc3RvcnksXG4gICAgICAgICAgICBlbmdpbmVFbGFwc2VkSGlzdG9yeSA9IHRpbWluZy5lbmdpbmVFbGFwc2VkSGlzdG9yeSxcbiAgICAgICAgICAgIGxhc3RFbmdpbmVEZWx0YSA9IGVuZ2luZS50aW1pbmcubGFzdERlbHRhO1xuICAgICAgICBcbiAgICAgICAgdmFyIGRlbHRhTWVhbiA9IF9tZWFuKGRlbHRhSGlzdG9yeSksXG4gICAgICAgICAgICBlbGFwc2VkTWVhbiA9IF9tZWFuKGVsYXBzZWRIaXN0b3J5KSxcbiAgICAgICAgICAgIGVuZ2luZURlbHRhTWVhbiA9IF9tZWFuKGVuZ2luZURlbHRhSGlzdG9yeSksXG4gICAgICAgICAgICBlbmdpbmVFbGFwc2VkTWVhbiA9IF9tZWFuKGVuZ2luZUVsYXBzZWRIaXN0b3J5KSxcbiAgICAgICAgICAgIHRpbWVzdGFtcEVsYXBzZWRNZWFuID0gX21lYW4odGltZXN0YW1wRWxhcHNlZEhpc3RvcnkpLFxuICAgICAgICAgICAgcmF0ZU1lYW4gPSAodGltZXN0YW1wRWxhcHNlZE1lYW4gLyBkZWx0YU1lYW4pIHx8IDAsXG4gICAgICAgICAgICBmcHMgPSAoMTAwMCAvIGRlbHRhTWVhbikgfHwgMDtcblxuICAgICAgICB2YXIgZ3JhcGhIZWlnaHQgPSA0LFxuICAgICAgICAgICAgZ2FwID0gMTIsXG4gICAgICAgICAgICB3aWR0aCA9IDYwLFxuICAgICAgICAgICAgaGVpZ2h0ID0gMzQsXG4gICAgICAgICAgICB4ID0gMTAsXG4gICAgICAgICAgICB5ID0gNjk7XG5cbiAgICAgICAgLy8gYmFja2dyb3VuZFxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjMGUwZjE5JztcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCA1MCwgZ2FwICogNCArIHdpZHRoICogNSArIDIyLCBoZWlnaHQpO1xuXG4gICAgICAgIC8vIHNob3cgRlBTXG4gICAgICAgIFJlbmRlci5zdGF0dXMoXG4gICAgICAgICAgICBjb250ZXh0LCB4LCB5LCB3aWR0aCwgZ3JhcGhIZWlnaHQsIGRlbHRhSGlzdG9yeS5sZW5ndGgsIFxuICAgICAgICAgICAgTWF0aC5yb3VuZChmcHMpICsgJyBmcHMnLCBcbiAgICAgICAgICAgIGZwcyAvIFJlbmRlci5fZ29vZEZwcyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGkpIHsgcmV0dXJuIChkZWx0YUhpc3RvcnlbaV0gLyBkZWx0YU1lYW4pIC0gMTsgfVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHNob3cgZW5naW5lIGRlbHRhXG4gICAgICAgIFJlbmRlci5zdGF0dXMoXG4gICAgICAgICAgICBjb250ZXh0LCB4ICsgZ2FwICsgd2lkdGgsIHksIHdpZHRoLCBncmFwaEhlaWdodCwgZW5naW5lRGVsdGFIaXN0b3J5Lmxlbmd0aCxcbiAgICAgICAgICAgIGxhc3RFbmdpbmVEZWx0YS50b0ZpeGVkKDIpICsgJyBkdCcsIFxuICAgICAgICAgICAgUmVuZGVyLl9nb29kRGVsdGEgLyBsYXN0RW5naW5lRGVsdGEsXG4gICAgICAgICAgICBmdW5jdGlvbihpKSB7IHJldHVybiAoZW5naW5lRGVsdGFIaXN0b3J5W2ldIC8gZW5naW5lRGVsdGFNZWFuKSAtIDE7IH1cbiAgICAgICAgKTtcblxuICAgICAgICAvLyBzaG93IGVuZ2luZSB1cGRhdGUgdGltZVxuICAgICAgICBSZW5kZXIuc3RhdHVzKFxuICAgICAgICAgICAgY29udGV4dCwgeCArIChnYXAgKyB3aWR0aCkgKiAyLCB5LCB3aWR0aCwgZ3JhcGhIZWlnaHQsIGVuZ2luZUVsYXBzZWRIaXN0b3J5Lmxlbmd0aCxcbiAgICAgICAgICAgIGVuZ2luZUVsYXBzZWRNZWFuLnRvRml4ZWQoMikgKyAnIHV0JywgXG4gICAgICAgICAgICAxIC0gKGVuZ2luZUVsYXBzZWRNZWFuIC8gUmVuZGVyLl9nb29kRnBzKSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGkpIHsgcmV0dXJuIChlbmdpbmVFbGFwc2VkSGlzdG9yeVtpXSAvIGVuZ2luZUVsYXBzZWRNZWFuKSAtIDE7IH1cbiAgICAgICAgKTtcblxuICAgICAgICAvLyBzaG93IHJlbmRlciB0aW1lXG4gICAgICAgIFJlbmRlci5zdGF0dXMoXG4gICAgICAgICAgICBjb250ZXh0LCB4ICsgKGdhcCArIHdpZHRoKSAqIDMsIHksIHdpZHRoLCBncmFwaEhlaWdodCwgZWxhcHNlZEhpc3RvcnkubGVuZ3RoLFxuICAgICAgICAgICAgZWxhcHNlZE1lYW4udG9GaXhlZCgyKSArICcgcnQnLCBcbiAgICAgICAgICAgIDEgLSAoZWxhcHNlZE1lYW4gLyBSZW5kZXIuX2dvb2RGcHMpLFxuICAgICAgICAgICAgZnVuY3Rpb24oaSkgeyByZXR1cm4gKGVsYXBzZWRIaXN0b3J5W2ldIC8gZWxhcHNlZE1lYW4pIC0gMTsgfVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHNob3cgZWZmZWN0aXZlIHNwZWVkXG4gICAgICAgIFJlbmRlci5zdGF0dXMoXG4gICAgICAgICAgICBjb250ZXh0LCB4ICsgKGdhcCArIHdpZHRoKSAqIDQsIHksIHdpZHRoLCBncmFwaEhlaWdodCwgdGltZXN0YW1wRWxhcHNlZEhpc3RvcnkubGVuZ3RoLCBcbiAgICAgICAgICAgIHJhdGVNZWFuLnRvRml4ZWQoMikgKyAnIHgnLCBcbiAgICAgICAgICAgIHJhdGVNZWFuICogcmF0ZU1lYW4gKiByYXRlTWVhbixcbiAgICAgICAgICAgIGZ1bmN0aW9uKGkpIHsgcmV0dXJuICgoKHRpbWVzdGFtcEVsYXBzZWRIaXN0b3J5W2ldIC8gZGVsdGFIaXN0b3J5W2ldKSAvIHJhdGVNZWFuKSB8fCAwKSAtIDE7IH1cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBhIGxhYmVsLCBpbmRpY2F0b3IgYW5kIGEgY2hhcnQuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHN0YXR1c1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGluZGljYXRvclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHBsb3RZXG4gICAgICovXG4gICAgUmVuZGVyLnN0YXR1cyA9IGZ1bmN0aW9uKGNvbnRleHQsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvdW50LCBsYWJlbCwgaW5kaWNhdG9yLCBwbG90WSkge1xuICAgICAgICAvLyBiYWNrZ3JvdW5kXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAnIzg4OCc7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyM0NDQnO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoeCwgeSArIDcsIHdpZHRoLCAxKTtcblxuICAgICAgICAvLyBjaGFydFxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBjb250ZXh0Lm1vdmVUbyh4LCB5ICsgNyAtIGhlaWdodCAqIENvbW1vbi5jbGFtcCgwLjQgKiBwbG90WSgwKSwgLTIsIDIpKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB3aWR0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyh4ICsgaSwgeSArIDcgLSAoaSA8IGNvdW50ID8gaGVpZ2h0ICogQ29tbW9uLmNsYW1wKDAuNCAqIHBsb3RZKGkpLCAtMiwgMikgOiAwKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcblxuICAgICAgICAvLyBpbmRpY2F0b3JcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnaHNsKCcgKyBDb21tb24uY2xhbXAoMjUgKyA5NSAqIGluZGljYXRvciwgMCwgMTIwKSArICcsMTAwJSw2MCUpJztcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCh4LCB5IC0gNywgNCwgNCk7XG5cbiAgICAgICAgLy8gbGFiZWxcbiAgICAgICAgY29udGV4dC5mb250ID0gJzEycHggQXJpYWwnO1xuICAgICAgICBjb250ZXh0LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgICAgICBjb250ZXh0LnRleHRBbGlnbiA9ICdyaWdodCc7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyNlZWUnO1xuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KGxhYmVsLCB4ICsgd2lkdGgsIHkgLSA1KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVzY3JpcHRpb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgY29uc3RyYWludHNcbiAgICAgKiBAcGFyYW0ge2NvbnN0cmFpbnRbXX0gY29uc3RyYWludHNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuY29uc3RyYWludHMgPSBmdW5jdGlvbihjb25zdHJhaW50cywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQ7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25zdHJhaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNvbnN0cmFpbnQgPSBjb25zdHJhaW50c1tpXTtcblxuICAgICAgICAgICAgaWYgKCFjb25zdHJhaW50LnJlbmRlci52aXNpYmxlIHx8ICFjb25zdHJhaW50LnBvaW50QSB8fCAhY29uc3RyYWludC5wb2ludEIpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIHZhciBib2R5QSA9IGNvbnN0cmFpbnQuYm9keUEsXG4gICAgICAgICAgICAgICAgYm9keUIgPSBjb25zdHJhaW50LmJvZHlCLFxuICAgICAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgICAgIGVuZDtcblxuICAgICAgICAgICAgaWYgKGJvZHlBKSB7XG4gICAgICAgICAgICAgICAgc3RhcnQgPSBWZWN0b3IuYWRkKGJvZHlBLnBvc2l0aW9uLCBjb25zdHJhaW50LnBvaW50QSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXJ0ID0gY29uc3RyYWludC5wb2ludEE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb25zdHJhaW50LnJlbmRlci50eXBlID09PSAncGluJykge1xuICAgICAgICAgICAgICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgYy5hcmMoc3RhcnQueCwgc3RhcnQueSwgMywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgIGMuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChib2R5Qikge1xuICAgICAgICAgICAgICAgICAgICBlbmQgPSBWZWN0b3IuYWRkKGJvZHlCLnBvc2l0aW9uLCBjb25zdHJhaW50LnBvaW50Qik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW5kID0gY29uc3RyYWludC5wb2ludEI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYy5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjLm1vdmVUbyhzdGFydC54LCBzdGFydC55KTtcblxuICAgICAgICAgICAgICAgIGlmIChjb25zdHJhaW50LnJlbmRlci50eXBlID09PSAnc3ByaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGEgPSBWZWN0b3Iuc3ViKGVuZCwgc3RhcnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsID0gVmVjdG9yLnBlcnAoVmVjdG9yLm5vcm1hbGlzZShkZWx0YSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29pbHMgPSBNYXRoLmNlaWwoQ29tbW9uLmNsYW1wKGNvbnN0cmFpbnQubGVuZ3RoIC8gNSwgMTIsIDIwKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBjb2lsczsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBqICUgMiA9PT0gMCA/IDEgOiAtMTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYy5saW5lVG8oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQueCArIGRlbHRhLnggKiAoaiAvIGNvaWxzKSArIG5vcm1hbC54ICogb2Zmc2V0ICogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydC55ICsgZGVsdGEueSAqIChqIC8gY29pbHMpICsgbm9ybWFsLnkgKiBvZmZzZXQgKiA0XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYy5saW5lVG8oZW5kLngsIGVuZC55KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbnN0cmFpbnQucmVuZGVyLmxpbmVXaWR0aCkge1xuICAgICAgICAgICAgICAgIGMubGluZVdpZHRoID0gY29uc3RyYWludC5yZW5kZXIubGluZVdpZHRoO1xuICAgICAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSBjb25zdHJhaW50LnJlbmRlci5zdHJva2VTdHlsZTtcbiAgICAgICAgICAgICAgICBjLnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY29uc3RyYWludC5yZW5kZXIuYW5jaG9ycykge1xuICAgICAgICAgICAgICAgIGMuZmlsbFN0eWxlID0gY29uc3RyYWludC5yZW5kZXIuc3Ryb2tlU3R5bGU7XG4gICAgICAgICAgICAgICAgYy5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjLmFyYyhzdGFydC54LCBzdGFydC55LCAzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgICAgICAgYy5hcmMoZW5kLngsIGVuZC55LCAzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgICAgICAgYy5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICBjLmZpbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXNjcmlwdGlvblxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBib2RpZXNcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5ib2RpZXMgPSBmdW5jdGlvbihyZW5kZXIsIGJvZGllcywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBlbmdpbmUgPSByZW5kZXIuZW5naW5lLFxuICAgICAgICAgICAgb3B0aW9ucyA9IHJlbmRlci5vcHRpb25zLFxuICAgICAgICAgICAgc2hvd0ludGVybmFsRWRnZXMgPSBvcHRpb25zLnNob3dJbnRlcm5hbEVkZ2VzIHx8ICFvcHRpb25zLndpcmVmcmFtZXMsXG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgcGFydCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBrO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJvZHkgPSBib2RpZXNbaV07XG5cbiAgICAgICAgICAgIGlmICghYm9keS5yZW5kZXIudmlzaWJsZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8gaGFuZGxlIGNvbXBvdW5kIHBhcnRzXG4gICAgICAgICAgICBmb3IgKGsgPSBib2R5LnBhcnRzLmxlbmd0aCA+IDEgPyAxIDogMDsgayA8IGJvZHkucGFydHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICBwYXJ0ID0gYm9keS5wYXJ0c1trXTtcblxuICAgICAgICAgICAgICAgIGlmICghcGFydC5yZW5kZXIudmlzaWJsZSlcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zaG93U2xlZXBpbmcgJiYgYm9keS5pc1NsZWVwaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGMuZ2xvYmFsQWxwaGEgPSAwLjUgKiBwYXJ0LnJlbmRlci5vcGFjaXR5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFydC5yZW5kZXIub3BhY2l0eSAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjLmdsb2JhbEFscGhhID0gcGFydC5yZW5kZXIub3BhY2l0eTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocGFydC5yZW5kZXIuc3ByaXRlICYmIHBhcnQucmVuZGVyLnNwcml0ZS50ZXh0dXJlICYmICFvcHRpb25zLndpcmVmcmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFydCBzcHJpdGVcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwcml0ZSA9IHBhcnQucmVuZGVyLnNwcml0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmUgPSBfZ2V0VGV4dHVyZShyZW5kZXIsIHNwcml0ZS50ZXh0dXJlKTtcblxuICAgICAgICAgICAgICAgICAgICBjLnRyYW5zbGF0ZShwYXJ0LnBvc2l0aW9uLngsIHBhcnQucG9zaXRpb24ueSk7XG4gICAgICAgICAgICAgICAgICAgIGMucm90YXRlKHBhcnQuYW5nbGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGMuZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmUud2lkdGggKiAtc3ByaXRlLnhPZmZzZXQgKiBzcHJpdGUueFNjYWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZS5oZWlnaHQgKiAtc3ByaXRlLnlPZmZzZXQgKiBzcHJpdGUueVNjYWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZS53aWR0aCAqIHNwcml0ZS54U2NhbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLmhlaWdodCAqIHNwcml0ZS55U2NhbGVcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyByZXZlcnQgdHJhbnNsYXRpb24sIGhvcGVmdWxseSBmYXN0ZXIgdGhhbiBzYXZlIC8gcmVzdG9yZVxuICAgICAgICAgICAgICAgICAgICBjLnJvdGF0ZSgtcGFydC5hbmdsZSk7XG4gICAgICAgICAgICAgICAgICAgIGMudHJhbnNsYXRlKC1wYXJ0LnBvc2l0aW9uLngsIC1wYXJ0LnBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhcnQgcG9seWdvblxuICAgICAgICAgICAgICAgICAgICBpZiAocGFydC5jaXJjbGVSYWRpdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLmFyYyhwYXJ0LnBvc2l0aW9uLngsIHBhcnQucG9zaXRpb24ueSwgcGFydC5jaXJjbGVSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLm1vdmVUbyhwYXJ0LnZlcnRpY2VzWzBdLngsIHBhcnQudmVydGljZXNbMF0ueSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgcGFydC52ZXJ0aWNlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGFydC52ZXJ0aWNlc1tqIC0gMV0uaXNJbnRlcm5hbCB8fCBzaG93SW50ZXJuYWxFZGdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLmxpbmVUbyhwYXJ0LnZlcnRpY2VzW2pdLngsIHBhcnQudmVydGljZXNbal0ueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5tb3ZlVG8ocGFydC52ZXJ0aWNlc1tqXS54LCBwYXJ0LnZlcnRpY2VzW2pdLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJ0LnZlcnRpY2VzW2pdLmlzSW50ZXJuYWwgJiYgIXNob3dJbnRlcm5hbEVkZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMubW92ZVRvKHBhcnQudmVydGljZXNbKGogKyAxKSAlIHBhcnQudmVydGljZXMubGVuZ3RoXS54LCBwYXJ0LnZlcnRpY2VzWyhqICsgMSkgJSBwYXJ0LnZlcnRpY2VzLmxlbmd0aF0ueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjLmxpbmVUbyhwYXJ0LnZlcnRpY2VzWzBdLngsIHBhcnQudmVydGljZXNbMF0ueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zLndpcmVmcmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuZmlsbFN0eWxlID0gcGFydC5yZW5kZXIuZmlsbFN0eWxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFydC5yZW5kZXIubGluZVdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5saW5lV2lkdGggPSBwYXJ0LnJlbmRlci5saW5lV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9IHBhcnQucmVuZGVyLnN0cm9rZVN0eWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGMuZmlsbCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5saW5lV2lkdGggPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9ICcjYmJiJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjLmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBPcHRpbWlzZWQgbWV0aG9kIGZvciBkcmF3aW5nIGJvZHkgd2lyZWZyYW1lcyBpbiBvbmUgcGFzc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBib2R5V2lyZWZyYW1lc1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmJvZHlXaXJlZnJhbWVzID0gZnVuY3Rpb24ocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0LFxuICAgICAgICAgICAgc2hvd0ludGVybmFsRWRnZXMgPSByZW5kZXIub3B0aW9ucy5zaG93SW50ZXJuYWxFZGdlcyxcbiAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICBwYXJ0LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGosXG4gICAgICAgICAgICBrO1xuXG4gICAgICAgIGMuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgLy8gcmVuZGVyIGFsbCBib2RpZXNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYm9keSA9IGJvZGllc1tpXTtcblxuICAgICAgICAgICAgaWYgKCFib2R5LnJlbmRlci52aXNpYmxlKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBoYW5kbGUgY29tcG91bmQgcGFydHNcbiAgICAgICAgICAgIGZvciAoayA9IGJvZHkucGFydHMubGVuZ3RoID4gMSA/IDEgOiAwOyBrIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgIHBhcnQgPSBib2R5LnBhcnRzW2tdO1xuXG4gICAgICAgICAgICAgICAgYy5tb3ZlVG8ocGFydC52ZXJ0aWNlc1swXS54LCBwYXJ0LnZlcnRpY2VzWzBdLnkpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChqID0gMTsgaiA8IHBhcnQudmVydGljZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXJ0LnZlcnRpY2VzW2ogLSAxXS5pc0ludGVybmFsIHx8IHNob3dJbnRlcm5hbEVkZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLmxpbmVUbyhwYXJ0LnZlcnRpY2VzW2pdLngsIHBhcnQudmVydGljZXNbal0ueSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLm1vdmVUbyhwYXJ0LnZlcnRpY2VzW2pdLngsIHBhcnQudmVydGljZXNbal0ueSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocGFydC52ZXJ0aWNlc1tqXS5pc0ludGVybmFsICYmICFzaG93SW50ZXJuYWxFZGdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5tb3ZlVG8ocGFydC52ZXJ0aWNlc1soaiArIDEpICUgcGFydC52ZXJ0aWNlcy5sZW5ndGhdLngsIHBhcnQudmVydGljZXNbKGogKyAxKSAlIHBhcnQudmVydGljZXMubGVuZ3RoXS55KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGMubGluZVRvKHBhcnQudmVydGljZXNbMF0ueCwgcGFydC52ZXJ0aWNlc1swXS55KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGMubGluZVdpZHRoID0gMTtcbiAgICAgICAgYy5zdHJva2VTdHlsZSA9ICcjYmJiJztcbiAgICAgICAgYy5zdHJva2UoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogT3B0aW1pc2VkIG1ldGhvZCBmb3IgZHJhd2luZyBib2R5IGNvbnZleCBodWxsIHdpcmVmcmFtZXMgaW4gb25lIHBhc3NcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgYm9keUNvbnZleEh1bGxzXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuYm9keUNvbnZleEh1bGxzID0gZnVuY3Rpb24ocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0LFxuICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgIHBhcnQsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIGs7XG5cbiAgICAgICAgYy5iZWdpblBhdGgoKTtcblxuICAgICAgICAvLyByZW5kZXIgY29udmV4IGh1bGxzXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJvZHkgPSBib2RpZXNbaV07XG5cbiAgICAgICAgICAgIGlmICghYm9keS5yZW5kZXIudmlzaWJsZSB8fCBib2R5LnBhcnRzLmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgYy5tb3ZlVG8oYm9keS52ZXJ0aWNlc1swXS54LCBib2R5LnZlcnRpY2VzWzBdLnkpO1xuXG4gICAgICAgICAgICBmb3IgKGogPSAxOyBqIDwgYm9keS52ZXJ0aWNlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGMubGluZVRvKGJvZHkudmVydGljZXNbal0ueCwgYm9keS52ZXJ0aWNlc1tqXS55KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYy5saW5lVG8oYm9keS52ZXJ0aWNlc1swXS54LCBib2R5LnZlcnRpY2VzWzBdLnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgYy5saW5lV2lkdGggPSAxO1xuICAgICAgICBjLnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4yKSc7XG4gICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYm9keSB2ZXJ0ZXggbnVtYmVycy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgdmVydGV4TnVtYmVyc1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLnZlcnRleE51bWJlcnMgPSBmdW5jdGlvbihyZW5kZXIsIGJvZGllcywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIGs7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhcnRzID0gYm9kaWVzW2ldLnBhcnRzO1xuICAgICAgICAgICAgZm9yIChrID0gcGFydHMubGVuZ3RoID4gMSA/IDEgOiAwOyBrIDwgcGFydHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFydCA9IHBhcnRzW2tdO1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBwYXJ0LnZlcnRpY2VzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGMuZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4yKSc7XG4gICAgICAgICAgICAgICAgICAgIGMuZmlsbFRleHQoaSArICdfJyArIGosIHBhcnQucG9zaXRpb24ueCArIChwYXJ0LnZlcnRpY2VzW2pdLnggLSBwYXJ0LnBvc2l0aW9uLngpICogMC44LCBwYXJ0LnBvc2l0aW9uLnkgKyAocGFydC52ZXJ0aWNlc1tqXS55IC0gcGFydC5wb3NpdGlvbi55KSAqIDAuOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgbW91c2UgcG9zaXRpb24uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIG1vdXNlUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHttb3VzZX0gbW91c2VcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIubW91c2VQb3NpdGlvbiA9IGZ1bmN0aW9uKHJlbmRlciwgbW91c2UsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0O1xuICAgICAgICBjLmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuOCknO1xuICAgICAgICBjLmZpbGxUZXh0KG1vdXNlLnBvc2l0aW9uLnggKyAnICAnICsgbW91c2UucG9zaXRpb24ueSwgbW91c2UucG9zaXRpb24ueCArIDUsIG1vdXNlLnBvc2l0aW9uLnkgLSA1KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRHJhd3MgYm9keSBib3VuZHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgYm9keUJvdW5kc1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmJvZHlCb3VuZHMgPSBmdW5jdGlvbihyZW5kZXIsIGJvZGllcywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBlbmdpbmUgPSByZW5kZXIuZW5naW5lLFxuICAgICAgICAgICAgb3B0aW9ucyA9IHJlbmRlci5vcHRpb25zO1xuXG4gICAgICAgIGMuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoYm9keS5yZW5kZXIudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHZhciBwYXJ0cyA9IGJvZGllc1tpXS5wYXJ0cztcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gcGFydHMubGVuZ3RoID4gMSA/IDEgOiAwOyBqIDwgcGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBwYXJ0c1tqXTtcbiAgICAgICAgICAgICAgICAgICAgYy5yZWN0KHBhcnQuYm91bmRzLm1pbi54LCBwYXJ0LmJvdW5kcy5taW4ueSwgcGFydC5ib3VuZHMubWF4LnggLSBwYXJ0LmJvdW5kcy5taW4ueCwgcGFydC5ib3VuZHMubWF4LnkgLSBwYXJ0LmJvdW5kcy5taW4ueSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMud2lyZWZyYW1lcykge1xuICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMDgpJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAncmdiYSgwLDAsMCwwLjEpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGMubGluZVdpZHRoID0gMTtcbiAgICAgICAgYy5zdHJva2UoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRHJhd3MgYm9keSBhbmdsZSBpbmRpY2F0b3JzIGFuZCBheGVzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGJvZHlBeGVzXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuYm9keUF4ZXMgPSBmdW5jdGlvbihyZW5kZXIsIGJvZGllcywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBlbmdpbmUgPSByZW5kZXIuZW5naW5lLFxuICAgICAgICAgICAgb3B0aW9ucyA9IHJlbmRlci5vcHRpb25zLFxuICAgICAgICAgICAgcGFydCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqLFxuICAgICAgICAgICAgaztcblxuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldLFxuICAgICAgICAgICAgICAgIHBhcnRzID0gYm9keS5wYXJ0cztcblxuICAgICAgICAgICAgaWYgKCFib2R5LnJlbmRlci52aXNpYmxlKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zaG93QXhlcykge1xuICAgICAgICAgICAgICAgIC8vIHJlbmRlciBhbGwgYXhlc1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IHBhcnRzLmxlbmd0aCA+IDEgPyAxIDogMDsgaiA8IHBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQgPSBwYXJ0c1tqXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IHBhcnQuYXhlcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF4aXMgPSBwYXJ0LmF4ZXNba107XG4gICAgICAgICAgICAgICAgICAgICAgICBjLm1vdmVUbyhwYXJ0LnBvc2l0aW9uLngsIHBhcnQucG9zaXRpb24ueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLmxpbmVUbyhwYXJ0LnBvc2l0aW9uLnggKyBheGlzLnggKiAyMCwgcGFydC5wb3NpdGlvbi55ICsgYXhpcy55ICogMjApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSBwYXJ0cy5sZW5ndGggPiAxID8gMSA6IDA7IGogPCBwYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gcGFydHNbal07XG4gICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBwYXJ0LmF4ZXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbmRlciBhIHNpbmdsZSBheGlzIGluZGljYXRvclxuICAgICAgICAgICAgICAgICAgICAgICAgYy5tb3ZlVG8ocGFydC5wb3NpdGlvbi54LCBwYXJ0LnBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5saW5lVG8oKHBhcnQudmVydGljZXNbMF0ueCArIHBhcnQudmVydGljZXNbcGFydC52ZXJ0aWNlcy5sZW5ndGgtMV0ueCkgLyAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwYXJ0LnZlcnRpY2VzWzBdLnkgKyBwYXJ0LnZlcnRpY2VzW3BhcnQudmVydGljZXMubGVuZ3RoLTFdLnkpIC8gMik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy53aXJlZnJhbWVzKSB7XG4gICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gJ2luZGlhbnJlZCc7XG4gICAgICAgICAgICBjLmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSc7XG4gICAgICAgICAgICBjLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdvdmVybGF5JztcbiAgICAgICAgICAgIGMubGluZVdpZHRoID0gMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgICAgIGMuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRHJhd3MgYm9keSBwb3NpdGlvbnNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgYm9keVBvc2l0aW9uc1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmJvZHlQb3NpdGlvbnMgPSBmdW5jdGlvbihyZW5kZXIsIGJvZGllcywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBlbmdpbmUgPSByZW5kZXIuZW5naW5lLFxuICAgICAgICAgICAgb3B0aW9ucyA9IHJlbmRlci5vcHRpb25zLFxuICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgIHBhcnQsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgaztcblxuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIC8vIHJlbmRlciBjdXJyZW50IHBvc2l0aW9uc1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIWJvZHkucmVuZGVyLnZpc2libGUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIGhhbmRsZSBjb21wb3VuZCBwYXJ0c1xuICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IGJvZHkucGFydHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICBwYXJ0ID0gYm9keS5wYXJ0c1trXTtcbiAgICAgICAgICAgICAgICBjLmFyYyhwYXJ0LnBvc2l0aW9uLngsIHBhcnQucG9zaXRpb24ueSwgMywgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMud2lyZWZyYW1lcykge1xuICAgICAgICAgICAgYy5maWxsU3R5bGUgPSAnaW5kaWFucmVkJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGMuZmlsbFN0eWxlID0gJ3JnYmEoMCwwLDAsMC41KSc7XG4gICAgICAgIH1cbiAgICAgICAgYy5maWxsKCk7XG5cbiAgICAgICAgYy5iZWdpblBhdGgoKTtcblxuICAgICAgICAvLyByZW5kZXIgcHJldmlvdXMgcG9zaXRpb25zXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJvZHkgPSBib2RpZXNbaV07XG4gICAgICAgICAgICBpZiAoYm9keS5yZW5kZXIudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGMuYXJjKGJvZHkucG9zaXRpb25QcmV2LngsIGJvZHkucG9zaXRpb25QcmV2LnksIDIsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYy5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGMuZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDE2NSwwLDAuOCknO1xuICAgICAgICBjLmZpbGwoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRHJhd3MgYm9keSB2ZWxvY2l0eVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBib2R5VmVsb2NpdHlcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5ib2R5VmVsb2NpdHkgPSBmdW5jdGlvbihyZW5kZXIsIGJvZGllcywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQ7XG5cbiAgICAgICAgYy5iZWdpblBhdGgoKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV07XG5cbiAgICAgICAgICAgIGlmICghYm9keS5yZW5kZXIudmlzaWJsZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgYy5tb3ZlVG8oYm9keS5wb3NpdGlvbi54LCBib2R5LnBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgYy5saW5lVG8oYm9keS5wb3NpdGlvbi54ICsgKGJvZHkucG9zaXRpb24ueCAtIGJvZHkucG9zaXRpb25QcmV2LngpICogMiwgYm9keS5wb3NpdGlvbi55ICsgKGJvZHkucG9zaXRpb24ueSAtIGJvZHkucG9zaXRpb25QcmV2LnkpICogMik7XG4gICAgICAgIH1cblxuICAgICAgICBjLmxpbmVXaWR0aCA9IDM7XG4gICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAnY29ybmZsb3dlcmJsdWUnO1xuICAgICAgICBjLnN0cm9rZSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEcmF3cyBib2R5IGlkc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBib2R5SWRzXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuYm9keUlkcyA9IGZ1bmN0aW9uKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghYm9kaWVzW2ldLnJlbmRlci52aXNpYmxlKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICB2YXIgcGFydHMgPSBib2RpZXNbaV0ucGFydHM7XG4gICAgICAgICAgICBmb3IgKGogPSBwYXJ0cy5sZW5ndGggPiAxID8gMSA6IDA7IGogPCBwYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHZhciBwYXJ0ID0gcGFydHNbal07XG4gICAgICAgICAgICAgICAgYy5mb250ID0gXCIxMnB4IEFyaWFsXCI7XG4gICAgICAgICAgICAgICAgYy5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJztcbiAgICAgICAgICAgICAgICBjLmZpbGxUZXh0KHBhcnQuaWQsIHBhcnQucG9zaXRpb24ueCArIDEwLCBwYXJ0LnBvc2l0aW9uLnkgLSAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVzY3JpcHRpb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgY29sbGlzaW9uc1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge3BhaXJbXX0gcGFpcnNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuY29sbGlzaW9ucyA9IGZ1bmN0aW9uKHJlbmRlciwgcGFpcnMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0LFxuICAgICAgICAgICAgb3B0aW9ucyA9IHJlbmRlci5vcHRpb25zLFxuICAgICAgICAgICAgcGFpcixcbiAgICAgICAgICAgIGNvbGxpc2lvbixcbiAgICAgICAgICAgIGNvcnJlY3RlZCxcbiAgICAgICAgICAgIGJvZHlBLFxuICAgICAgICAgICAgYm9keUIsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgajtcblxuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIC8vIHJlbmRlciBjb2xsaXNpb24gcG9zaXRpb25zXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFpciA9IHBhaXJzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIXBhaXIuaXNBY3RpdmUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbGxpc2lvbiA9IHBhaXIuY29sbGlzaW9uO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHBhaXIuYWN0aXZlQ29udGFjdHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGFjdCA9IHBhaXIuYWN0aXZlQ29udGFjdHNbal0sXG4gICAgICAgICAgICAgICAgICAgIHZlcnRleCA9IGNvbnRhY3QudmVydGV4O1xuICAgICAgICAgICAgICAgIGMucmVjdCh2ZXJ0ZXgueCAtIDEuNSwgdmVydGV4LnkgLSAxLjUsIDMuNSwgMy41KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLndpcmVmcmFtZXMpIHtcbiAgICAgICAgICAgIGMuZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC43KSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjLmZpbGxTdHlsZSA9ICdvcmFuZ2UnO1xuICAgICAgICB9XG4gICAgICAgIGMuZmlsbCgpO1xuXG4gICAgICAgIGMuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgLy8gcmVuZGVyIGNvbGxpc2lvbiBub3JtYWxzXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFpciA9IHBhaXJzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIXBhaXIuaXNBY3RpdmUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbGxpc2lvbiA9IHBhaXIuY29sbGlzaW9uO1xuXG4gICAgICAgICAgICBpZiAocGFpci5hY3RpdmVDb250YWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vcm1hbFBvc1ggPSBwYWlyLmFjdGl2ZUNvbnRhY3RzWzBdLnZlcnRleC54LFxuICAgICAgICAgICAgICAgICAgICBub3JtYWxQb3NZID0gcGFpci5hY3RpdmVDb250YWN0c1swXS52ZXJ0ZXgueTtcblxuICAgICAgICAgICAgICAgIGlmIChwYWlyLmFjdGl2ZUNvbnRhY3RzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICBub3JtYWxQb3NYID0gKHBhaXIuYWN0aXZlQ29udGFjdHNbMF0udmVydGV4LnggKyBwYWlyLmFjdGl2ZUNvbnRhY3RzWzFdLnZlcnRleC54KSAvIDI7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbFBvc1kgPSAocGFpci5hY3RpdmVDb250YWN0c1swXS52ZXJ0ZXgueSArIHBhaXIuYWN0aXZlQ29udGFjdHNbMV0udmVydGV4LnkpIC8gMjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY29sbGlzaW9uLmJvZHlCID09PSBjb2xsaXNpb24uc3VwcG9ydHNbMF0uYm9keSB8fCBjb2xsaXNpb24uYm9keUEuaXNTdGF0aWMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgYy5tb3ZlVG8obm9ybWFsUG9zWCAtIGNvbGxpc2lvbi5ub3JtYWwueCAqIDgsIG5vcm1hbFBvc1kgLSBjb2xsaXNpb24ubm9ybWFsLnkgKiA4KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjLm1vdmVUbyhub3JtYWxQb3NYICsgY29sbGlzaW9uLm5vcm1hbC54ICogOCwgbm9ybWFsUG9zWSArIGNvbGxpc2lvbi5ub3JtYWwueSAqIDgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGMubGluZVRvKG5vcm1hbFBvc1gsIG5vcm1hbFBvc1kpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMud2lyZWZyYW1lcykge1xuICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwxNjUsMCwwLjcpJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAnb3JhbmdlJztcbiAgICAgICAgfVxuXG4gICAgICAgIGMubGluZVdpZHRoID0gMTtcbiAgICAgICAgYy5zdHJva2UoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVzY3JpcHRpb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2Qgc2VwYXJhdGlvbnNcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtwYWlyW119IHBhaXJzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLnNlcGFyYXRpb25zID0gZnVuY3Rpb24ocmVuZGVyLCBwYWlycywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBvcHRpb25zID0gcmVuZGVyLm9wdGlvbnMsXG4gICAgICAgICAgICBwYWlyLFxuICAgICAgICAgICAgY29sbGlzaW9uLFxuICAgICAgICAgICAgY29ycmVjdGVkLFxuICAgICAgICAgICAgYm9keUEsXG4gICAgICAgICAgICBib2R5QixcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqO1xuXG4gICAgICAgIGMuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgLy8gcmVuZGVyIHNlcGFyYXRpb25zXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFpciA9IHBhaXJzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIXBhaXIuaXNBY3RpdmUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbGxpc2lvbiA9IHBhaXIuY29sbGlzaW9uO1xuICAgICAgICAgICAgYm9keUEgPSBjb2xsaXNpb24uYm9keUE7XG4gICAgICAgICAgICBib2R5QiA9IGNvbGxpc2lvbi5ib2R5QjtcblxuICAgICAgICAgICAgdmFyIGsgPSAxO1xuXG4gICAgICAgICAgICBpZiAoIWJvZHlCLmlzU3RhdGljICYmICFib2R5QS5pc1N0YXRpYykgayA9IDAuNTtcbiAgICAgICAgICAgIGlmIChib2R5Qi5pc1N0YXRpYykgayA9IDA7XG5cbiAgICAgICAgICAgIGMubW92ZVRvKGJvZHlCLnBvc2l0aW9uLngsIGJvZHlCLnBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgYy5saW5lVG8oYm9keUIucG9zaXRpb24ueCAtIGNvbGxpc2lvbi5wZW5ldHJhdGlvbi54ICogaywgYm9keUIucG9zaXRpb24ueSAtIGNvbGxpc2lvbi5wZW5ldHJhdGlvbi55ICogayk7XG5cbiAgICAgICAgICAgIGsgPSAxO1xuXG4gICAgICAgICAgICBpZiAoIWJvZHlCLmlzU3RhdGljICYmICFib2R5QS5pc1N0YXRpYykgayA9IDAuNTtcbiAgICAgICAgICAgIGlmIChib2R5QS5pc1N0YXRpYykgayA9IDA7XG5cbiAgICAgICAgICAgIGMubW92ZVRvKGJvZHlBLnBvc2l0aW9uLngsIGJvZHlBLnBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgYy5saW5lVG8oYm9keUEucG9zaXRpb24ueCArIGNvbGxpc2lvbi5wZW5ldHJhdGlvbi54ICogaywgYm9keUEucG9zaXRpb24ueSArIGNvbGxpc2lvbi5wZW5ldHJhdGlvbi55ICogayk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy53aXJlZnJhbWVzKSB7XG4gICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDE2NSwwLDAuNSknO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9ICdvcmFuZ2UnO1xuICAgICAgICB9XG4gICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERlc2NyaXB0aW9uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGluc3BlY3RvclxuICAgICAqIEBwYXJhbSB7aW5zcGVjdG9yfSBpbnNwZWN0b3JcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuaW5zcGVjdG9yID0gZnVuY3Rpb24oaW5zcGVjdG9yLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBlbmdpbmUgPSBpbnNwZWN0b3IuZW5naW5lLFxuICAgICAgICAgICAgc2VsZWN0ZWQgPSBpbnNwZWN0b3Iuc2VsZWN0ZWQsXG4gICAgICAgICAgICByZW5kZXIgPSBpbnNwZWN0b3IucmVuZGVyLFxuICAgICAgICAgICAgb3B0aW9ucyA9IHJlbmRlci5vcHRpb25zLFxuICAgICAgICAgICAgYm91bmRzO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmhhc0JvdW5kcykge1xuICAgICAgICAgICAgdmFyIGJvdW5kc1dpZHRoID0gcmVuZGVyLmJvdW5kcy5tYXgueCAtIHJlbmRlci5ib3VuZHMubWluLngsXG4gICAgICAgICAgICAgICAgYm91bmRzSGVpZ2h0ID0gcmVuZGVyLmJvdW5kcy5tYXgueSAtIHJlbmRlci5ib3VuZHMubWluLnksXG4gICAgICAgICAgICAgICAgYm91bmRzU2NhbGVYID0gYm91bmRzV2lkdGggLyByZW5kZXIub3B0aW9ucy53aWR0aCxcbiAgICAgICAgICAgICAgICBib3VuZHNTY2FsZVkgPSBib3VuZHNIZWlnaHQgLyByZW5kZXIub3B0aW9ucy5oZWlnaHQ7XG5cbiAgICAgICAgICAgIGNvbnRleHQuc2NhbGUoMSAvIGJvdW5kc1NjYWxlWCwgMSAvIGJvdW5kc1NjYWxlWSk7XG4gICAgICAgICAgICBjb250ZXh0LnRyYW5zbGF0ZSgtcmVuZGVyLmJvdW5kcy5taW4ueCwgLXJlbmRlci5ib3VuZHMubWluLnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBzZWxlY3RlZFtpXS5kYXRhO1xuXG4gICAgICAgICAgICBjb250ZXh0LnRyYW5zbGF0ZSgwLjUsIDAuNSk7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDE2NSwwLDAuOSknO1xuICAgICAgICAgICAgY29udGV4dC5zZXRMaW5lRGFzaChbMSwyXSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoaXRlbS50eXBlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ2JvZHknOlxuXG4gICAgICAgICAgICAgICAgLy8gcmVuZGVyIGJvZHkgc2VsZWN0aW9uc1xuICAgICAgICAgICAgICAgIGJvdW5kcyA9IGl0ZW0uYm91bmRzO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5yZWN0KE1hdGguZmxvb3IoYm91bmRzLm1pbi54IC0gMyksIE1hdGguZmxvb3IoYm91bmRzLm1pbi55IC0gMyksXG4gICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoYm91bmRzLm1heC54IC0gYm91bmRzLm1pbi54ICsgNiksIE1hdGguZmxvb3IoYm91bmRzLm1heC55IC0gYm91bmRzLm1pbi55ICsgNikpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdjb25zdHJhaW50JzpcblxuICAgICAgICAgICAgICAgIC8vIHJlbmRlciBjb25zdHJhaW50IHNlbGVjdGlvbnNcbiAgICAgICAgICAgICAgICB2YXIgcG9pbnQgPSBpdGVtLnBvaW50QTtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5ib2R5QSlcbiAgICAgICAgICAgICAgICAgICAgcG9pbnQgPSBpdGVtLnBvaW50QjtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYXJjKHBvaW50LngsIHBvaW50LnksIDEwLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGV4dC5zZXRMaW5lRGFzaChbXSk7XG4gICAgICAgICAgICBjb250ZXh0LnRyYW5zbGF0ZSgtMC41LCAtMC41KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlbmRlciBzZWxlY3Rpb24gcmVnaW9uXG4gICAgICAgIGlmIChpbnNwZWN0b3Iuc2VsZWN0U3RhcnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRleHQudHJhbnNsYXRlKDAuNSwgMC41KTtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMTY1LDAsMC42KSc7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwxNjUsMCwwLjEpJztcbiAgICAgICAgICAgIGJvdW5kcyA9IGluc3BlY3Rvci5zZWxlY3RCb3VuZHM7XG4gICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dC5yZWN0KE1hdGguZmxvb3IoYm91bmRzLm1pbi54KSwgTWF0aC5mbG9vcihib3VuZHMubWluLnkpLFxuICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoYm91bmRzLm1heC54IC0gYm91bmRzLm1pbi54KSwgTWF0aC5mbG9vcihib3VuZHMubWF4LnkgLSBib3VuZHMubWluLnkpKTtcbiAgICAgICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICAgICAgICBjb250ZXh0LnRyYW5zbGF0ZSgtMC41LCAtMC41KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmhhc0JvdW5kcylcbiAgICAgICAgICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHJlbmRlciB0aW1pbmcuXG4gICAgICogQG1ldGhvZCBfdXBkYXRlVGltaW5nXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVcbiAgICAgKi9cbiAgICB2YXIgX3VwZGF0ZVRpbWluZyA9IGZ1bmN0aW9uKHJlbmRlciwgdGltZSkge1xuICAgICAgICB2YXIgZW5naW5lID0gcmVuZGVyLmVuZ2luZSxcbiAgICAgICAgICAgIHRpbWluZyA9IHJlbmRlci50aW1pbmcsXG4gICAgICAgICAgICBoaXN0b3J5U2l6ZSA9IHRpbWluZy5oaXN0b3J5U2l6ZSxcbiAgICAgICAgICAgIHRpbWVzdGFtcCA9IGVuZ2luZS50aW1pbmcudGltZXN0YW1wO1xuXG4gICAgICAgIHRpbWluZy5kZWx0YSA9IHRpbWUgLSB0aW1pbmcubGFzdFRpbWUgfHwgUmVuZGVyLl9nb29kRGVsdGE7XG4gICAgICAgIHRpbWluZy5sYXN0VGltZSA9IHRpbWU7XG5cbiAgICAgICAgdGltaW5nLnRpbWVzdGFtcEVsYXBzZWQgPSB0aW1lc3RhbXAgLSB0aW1pbmcubGFzdFRpbWVzdGFtcCB8fCAwO1xuICAgICAgICB0aW1pbmcubGFzdFRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcblxuICAgICAgICB0aW1pbmcuZGVsdGFIaXN0b3J5LnVuc2hpZnQodGltaW5nLmRlbHRhKTtcbiAgICAgICAgdGltaW5nLmRlbHRhSGlzdG9yeS5sZW5ndGggPSBNYXRoLm1pbih0aW1pbmcuZGVsdGFIaXN0b3J5Lmxlbmd0aCwgaGlzdG9yeVNpemUpO1xuXG4gICAgICAgIHRpbWluZy5lbmdpbmVEZWx0YUhpc3RvcnkudW5zaGlmdChlbmdpbmUudGltaW5nLmxhc3REZWx0YSk7XG4gICAgICAgIHRpbWluZy5lbmdpbmVEZWx0YUhpc3RvcnkubGVuZ3RoID0gTWF0aC5taW4odGltaW5nLmVuZ2luZURlbHRhSGlzdG9yeS5sZW5ndGgsIGhpc3RvcnlTaXplKTtcblxuICAgICAgICB0aW1pbmcudGltZXN0YW1wRWxhcHNlZEhpc3RvcnkudW5zaGlmdCh0aW1pbmcudGltZXN0YW1wRWxhcHNlZCk7XG4gICAgICAgIHRpbWluZy50aW1lc3RhbXBFbGFwc2VkSGlzdG9yeS5sZW5ndGggPSBNYXRoLm1pbih0aW1pbmcudGltZXN0YW1wRWxhcHNlZEhpc3RvcnkubGVuZ3RoLCBoaXN0b3J5U2l6ZSk7XG5cbiAgICAgICAgdGltaW5nLmVuZ2luZUVsYXBzZWRIaXN0b3J5LnVuc2hpZnQoZW5naW5lLnRpbWluZy5sYXN0RWxhcHNlZCk7XG4gICAgICAgIHRpbWluZy5lbmdpbmVFbGFwc2VkSGlzdG9yeS5sZW5ndGggPSBNYXRoLm1pbih0aW1pbmcuZW5naW5lRWxhcHNlZEhpc3RvcnkubGVuZ3RoLCBoaXN0b3J5U2l6ZSk7XG5cbiAgICAgICAgdGltaW5nLmVsYXBzZWRIaXN0b3J5LnVuc2hpZnQodGltaW5nLmxhc3RFbGFwc2VkKTtcbiAgICAgICAgdGltaW5nLmVsYXBzZWRIaXN0b3J5Lmxlbmd0aCA9IE1hdGgubWluKHRpbWluZy5lbGFwc2VkSGlzdG9yeS5sZW5ndGgsIGhpc3RvcnlTaXplKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbWVhbiB2YWx1ZSBvZiB0aGUgZ2l2ZW4gbnVtYmVycy5cbiAgICAgKiBAbWV0aG9kIF9tZWFuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge051bWJlcltdfSB2YWx1ZXNcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IHRoZSBtZWFuIG9mIGdpdmVuIHZhbHVlc1xuICAgICAqL1xuICAgIHZhciBfbWVhbiA9IGZ1bmN0aW9uKHZhbHVlcykge1xuICAgICAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChyZXN1bHQgLyB2YWx1ZXMubGVuZ3RoKSB8fCAwO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIF9jcmVhdGVDYW52YXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSB3aWR0aFxuICAgICAqIEBwYXJhbSB7fSBoZWlnaHRcbiAgICAgKiBAcmV0dXJuIGNhbnZhc1xuICAgICAqL1xuICAgIHZhciBfY3JlYXRlQ2FudmFzID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjYW52YXMub25jb250ZXh0bWVudSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2U7IH07XG4gICAgICAgIGNhbnZhcy5vbnNlbGVjdHN0YXJ0ID0gZnVuY3Rpb24oKSB7IHJldHVybiBmYWxzZTsgfTtcbiAgICAgICAgcmV0dXJuIGNhbnZhcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcGl4ZWwgcmF0aW8gb2YgdGhlIGNhbnZhcy5cbiAgICAgKiBAbWV0aG9kIF9nZXRQaXhlbFJhdGlvXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjYW52YXNcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IHBpeGVsIHJhdGlvXG4gICAgICovXG4gICAgdmFyIF9nZXRQaXhlbFJhdGlvID0gZnVuY3Rpb24oY2FudmFzKSB7XG4gICAgICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyksXG4gICAgICAgICAgICBkZXZpY2VQaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSxcbiAgICAgICAgICAgIGJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gPSBjb250ZXh0LndlYmtpdEJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgY29udGV4dC5tb3pCYWNraW5nU3RvcmVQaXhlbFJhdGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGNvbnRleHQubXNCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IGNvbnRleHQub0JhY2tpbmdTdG9yZVBpeGVsUmF0aW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgY29udGV4dC5iYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IDE7XG5cbiAgICAgICAgcmV0dXJuIGRldmljZVBpeGVsUmF0aW8gLyBiYWNraW5nU3RvcmVQaXhlbFJhdGlvO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSByZXF1ZXN0ZWQgdGV4dHVyZSAoYW4gSW1hZ2UpIHZpYSBpdHMgcGF0aFxuICAgICAqIEBtZXRob2QgX2dldFRleHR1cmVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2VQYXRoXG4gICAgICogQHJldHVybiB7SW1hZ2V9IHRleHR1cmVcbiAgICAgKi9cbiAgICB2YXIgX2dldFRleHR1cmUgPSBmdW5jdGlvbihyZW5kZXIsIGltYWdlUGF0aCkge1xuICAgICAgICB2YXIgaW1hZ2UgPSByZW5kZXIudGV4dHVyZXNbaW1hZ2VQYXRoXTtcblxuICAgICAgICBpZiAoaW1hZ2UpXG4gICAgICAgICAgICByZXR1cm4gaW1hZ2U7XG5cbiAgICAgICAgaW1hZ2UgPSByZW5kZXIudGV4dHVyZXNbaW1hZ2VQYXRoXSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZS5zcmMgPSBpbWFnZVBhdGg7XG5cbiAgICAgICAgcmV0dXJuIGltYWdlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIHRoZSBiYWNrZ3JvdW5kIHRvIHRoZSBjYW52YXMgdXNpbmcgQ1NTLlxuICAgICAqIEBtZXRob2QgYXBwbHlCYWNrZ3JvdW5kXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGJhY2tncm91bmRcbiAgICAgKi9cbiAgICB2YXIgX2FwcGx5QmFja2dyb3VuZCA9IGZ1bmN0aW9uKHJlbmRlciwgYmFja2dyb3VuZCkge1xuICAgICAgICB2YXIgY3NzQmFja2dyb3VuZCA9IGJhY2tncm91bmQ7XG5cbiAgICAgICAgaWYgKC8oanBnfGdpZnxwbmcpJC8udGVzdChiYWNrZ3JvdW5kKSlcbiAgICAgICAgICAgIGNzc0JhY2tncm91bmQgPSAndXJsKCcgKyBiYWNrZ3JvdW5kICsgJyknO1xuXG4gICAgICAgIHJlbmRlci5jYW52YXMuc3R5bGUuYmFja2dyb3VuZCA9IGNzc0JhY2tncm91bmQ7XG4gICAgICAgIHJlbmRlci5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcImNvbnRhaW5cIjtcbiAgICAgICAgcmVuZGVyLmN1cnJlbnRCYWNrZ3JvdW5kID0gYmFja2dyb3VuZDtcbiAgICB9O1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgRXZlbnRzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYmVmb3JlIHJlbmRlcmluZ1xuICAgICpcbiAgICAqIEBldmVudCBiZWZvcmVSZW5kZXJcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGFmdGVyIHJlbmRlcmluZ1xuICAgICpcbiAgICAqIEBldmVudCBhZnRlclJlbmRlclxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qXG4gICAgKlxuICAgICogIFByb3BlcnRpZXMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBiYWNrLXJlZmVyZW5jZSB0byB0aGUgYE1hdHRlci5SZW5kZXJgIG1vZHVsZS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjb250cm9sbGVyXG4gICAgICogQHR5cGUgcmVuZGVyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgYE1hdHRlci5FbmdpbmVgIGluc3RhbmNlIHRvIGJlIHVzZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZW5naW5lXG4gICAgICogQHR5cGUgZW5naW5lXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCB3aGVyZSB0aGUgY2FudmFzIGlzIHRvIGJlIGluc2VydGVkIChpZiBgcmVuZGVyLmNhbnZhc2AgaGFzIG5vdCBiZWVuIHNwZWNpZmllZClcbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBlbGVtZW50XG4gICAgICogQHR5cGUgSFRNTEVsZW1lbnRcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2FudmFzIGVsZW1lbnQgdG8gcmVuZGVyIHRvLiBJZiBub3Qgc3BlY2lmaWVkLCBvbmUgd2lsbCBiZSBjcmVhdGVkIGlmIGByZW5kZXIuZWxlbWVudGAgaGFzIGJlZW4gc3BlY2lmaWVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGNhbnZhc1xuICAgICAqIEB0eXBlIEhUTUxDYW52YXNFbGVtZW50XG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgQm91bmRzYCBvYmplY3QgdGhhdCBzcGVjaWZpZXMgdGhlIGRyYXdpbmcgdmlldyByZWdpb24uXG4gICAgICogUmVuZGVyaW5nIHdpbGwgYmUgYXV0b21hdGljYWxseSB0cmFuc2Zvcm1lZCBhbmQgc2NhbGVkIHRvIGZpdCB3aXRoaW4gdGhlIGNhbnZhcyBzaXplIChgcmVuZGVyLm9wdGlvbnMud2lkdGhgIGFuZCBgcmVuZGVyLm9wdGlvbnMuaGVpZ2h0YCkuXG4gICAgICogVGhpcyBhbGxvd3MgZm9yIGNyZWF0aW5nIHZpZXdzIHRoYXQgY2FuIHBhbiBvciB6b29tIGFyb3VuZCB0aGUgc2NlbmUuXG4gICAgICogWW91IG11c3QgYWxzbyBzZXQgYHJlbmRlci5vcHRpb25zLmhhc0JvdW5kc2AgdG8gYHRydWVgIHRvIGVuYWJsZSBib3VuZGVkIHJlbmRlcmluZy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBib3VuZHNcbiAgICAgKiBAdHlwZSBib3VuZHNcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSAyZCByZW5kZXJpbmcgY29udGV4dCBmcm9tIHRoZSBgcmVuZGVyLmNhbnZhc2AgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjb250ZXh0XG4gICAgICogQHR5cGUgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3ByaXRlIHRleHR1cmUgY2FjaGUuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdGV4dHVyZXNcbiAgICAgKiBAdHlwZSB7fVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIG1vdXNlIHRvIHJlbmRlciBpZiBgcmVuZGVyLm9wdGlvbnMuc2hvd01vdXNlUG9zaXRpb25gIGlzIGVuYWJsZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgbW91c2VcbiAgICAgKiBAdHlwZSBtb3VzZVxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgb2YgdGhlIHJlbmRlcmVyLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnNcbiAgICAgKiBAdHlwZSB7fVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRhcmdldCB3aWR0aCBpbiBwaXhlbHMgb2YgdGhlIGByZW5kZXIuY2FudmFzYCB0byBiZSBjcmVhdGVkLlxuICAgICAqIFNlZSBhbHNvIHRoZSBgb3B0aW9ucy5waXhlbFJhdGlvYCBwcm9wZXJ0eSB0byBjaGFuZ2UgcmVuZGVyIHF1YWxpdHkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy53aWR0aFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDgwMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRhcmdldCBoZWlnaHQgaW4gcGl4ZWxzIG9mIHRoZSBgcmVuZGVyLmNhbnZhc2AgdG8gYmUgY3JlYXRlZC5cbiAgICAgKiBTZWUgYWxzbyB0aGUgYG9wdGlvbnMucGl4ZWxSYXRpb2AgcHJvcGVydHkgdG8gY2hhbmdlIHJlbmRlciBxdWFsaXR5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuaGVpZ2h0XG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgNjAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgW3BpeGVsIHJhdGlvXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L2RldmljZVBpeGVsUmF0aW8pIHRvIHVzZSB3aGVuIHJlbmRlcmluZy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnBpeGVsUmF0aW9cbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIENTUyBiYWNrZ3JvdW5kIGNvbG9yIHN0cmluZyB0byB1c2Ugd2hlbiBgcmVuZGVyLm9wdGlvbnMud2lyZWZyYW1lc2AgaXMgZGlzYWJsZWQuXG4gICAgICogVGhpcyBtYXkgYmUgYWxzbyBzZXQgdG8gYCd0cmFuc3BhcmVudCdgIG9yIGVxdWl2YWxlbnQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5iYWNrZ3JvdW5kXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgJyMxNDE1MWYnXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIENTUyBiYWNrZ3JvdW5kIGNvbG9yIHN0cmluZyB0byB1c2Ugd2hlbiBgcmVuZGVyLm9wdGlvbnMud2lyZWZyYW1lc2AgaXMgZW5hYmxlZC5cbiAgICAgKiBUaGlzIG1heSBiZSBhbHNvIHNldCB0byBgJ3RyYW5zcGFyZW50J2Agb3IgZXF1aXZhbGVudC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLndpcmVmcmFtZUJhY2tncm91bmRcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCAnIzE0MTUxZidcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0aGF0IHNwZWNpZmllcyBpZiBgcmVuZGVyLmJvdW5kc2Agc2hvdWxkIGJlIHVzZWQgd2hlbiByZW5kZXJpbmcuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5oYXNCb3VuZHNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSBhbGwgZGVidWcgaW5mb3JtYXRpb24gb3ZlcmxheXMgdG9nZXRoZXIuICBcbiAgICAgKiBUaGlzIGluY2x1ZGVzIGFuZCBoYXMgcHJpb3JpdHkgb3ZlciB0aGUgdmFsdWVzIG9mOlxuICAgICAqXG4gICAgICogLSBgcmVuZGVyLm9wdGlvbnMuc2hvd1N0YXRzYFxuICAgICAqIC0gYHJlbmRlci5vcHRpb25zLnNob3dQZXJmb3JtYW5jZWBcbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dEZWJ1Z1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBlbmdpbmUgc3RhdHMgaW5mbyBvdmVybGF5LiAgXG4gICAgICogRnJvbSBsZWZ0IHRvIHJpZ2h0LCB0aGUgdmFsdWVzIHNob3duIGFyZTpcbiAgICAgKlxuICAgICAqIC0gYm9keSBwYXJ0cyB0b3RhbFxuICAgICAqIC0gYm9keSB0b3RhbFxuICAgICAqIC0gY29uc3RyYWludHMgdG90YWxcbiAgICAgKiAtIGNvbXBvc2l0ZXMgdG90YWxcbiAgICAgKiAtIGNvbGxpc2lvbiBwYWlycyB0b3RhbFxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd1N0YXRzXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgcGVyZm9ybWFuY2UgY2hhcnRzLiAgXG4gICAgICogRnJvbSBsZWZ0IHRvIHJpZ2h0LCB0aGUgdmFsdWVzIHNob3duIGFyZTpcbiAgICAgKlxuICAgICAqIC0gYXZlcmFnZSByZW5kZXIgZnJlcXVlbmN5IChlLmcuIDYwIGZwcylcbiAgICAgKiAtIGV4YWN0IGVuZ2luZSBkZWx0YSB0aW1lIHVzZWQgZm9yIGxhc3QgdXBkYXRlIChlLmcuIDE2LjY2bXMpXG4gICAgICogLSBhdmVyYWdlIGVuZ2luZSBleGVjdXRpb24gZHVyYXRpb24gKGUuZy4gNS4wMG1zKVxuICAgICAqIC0gYXZlcmFnZSByZW5kZXIgZXhlY3V0aW9uIGR1cmF0aW9uIChlLmcuIDAuNDBtcylcbiAgICAgKiAtIGF2ZXJhZ2UgZWZmZWN0aXZlIHBsYXkgc3BlZWQgKGUuZy4gJzEuMDB4JyBpcyAncmVhbC10aW1lJylcbiAgICAgKlxuICAgICAqIEVhY2ggdmFsdWUgaXMgcmVjb3JkZWQgb3ZlciBhIGZpeGVkIHNhbXBsZSBvZiBwYXN0IGZyYW1lcyAoNjAgZnJhbWVzKS5cbiAgICAgKlxuICAgICAqIEEgY2hhcnQgc2hvd24gYmVsb3cgZWFjaCB2YWx1ZSBpbmRpY2F0ZXMgdGhlIHZhcmlhbmNlIGZyb20gdGhlIGF2ZXJhZ2Ugb3ZlciB0aGUgc2FtcGxlLlxuICAgICAqIFRoZSBtb3JlIHN0YWJsZSBvciBmaXhlZCB0aGUgdmFsdWUgaXMgdGhlIGZsYXR0ZXIgdGhlIGNoYXJ0IHdpbGwgYXBwZWFyLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd1BlcmZvcm1hbmNlXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHJlbmRlcmluZyBlbnRpcmVseS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLmVuYWJsZWRcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byB0b2dnbGUgd2lyZWZyYW1lIHJlbmRlcmluZyBvdGhlcndpc2Ugc29saWQgZmlsbCByZW5kZXJpbmcgaXMgdXNlZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLndpcmVmcmFtZXNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHNsZWVwaW5nIGJvZGllcyBpbmRpY2F0b3JzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd1NsZWVwaW5nXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgZGVidWcgaW5mb3JtYXRpb24gb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dEZWJ1Z1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBjb2xsaXNpb24gYnJvYWRwaGFzZSBkZWJ1ZyBvdmVybGF5LlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgbm8gbG9uZ2VyIGltcGxlbWVudGVkXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd0Jyb2FkcGhhc2VcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYm9keSBib3VuZHMgZGVidWcgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dCb3VuZHNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYm9keSB2ZWxvY2l0eSBkZWJ1ZyBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd1ZlbG9jaXR5XG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGJvZHkgY29sbGlzaW9ucyBkZWJ1ZyBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd0NvbGxpc2lvbnNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgY29sbGlzaW9uIHJlc29sdmVyIHNlcGFyYXRpb25zIGRlYnVnIG92ZXJsYXkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93U2VwYXJhdGlvbnNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYm9keSBheGVzIGRlYnVnIG92ZXJsYXkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93QXhlc1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBib2R5IHBvc2l0aW9ucyBkZWJ1ZyBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd1Bvc2l0aW9uc1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBib2R5IGFuZ2xlIGRlYnVnIG92ZXJsYXkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93QW5nbGVJbmRpY2F0b3JcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYm9keSBhbmQgcGFydCBpZHMgZGVidWcgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dJZHNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYm9keSB2ZXJ0ZXggbnVtYmVycyBkZWJ1ZyBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd1ZlcnRleE51bWJlcnNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYm9keSBjb252ZXggaHVsbHMgZGVidWcgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dDb252ZXhIdWxsc1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBib2R5IGludGVybmFsIGVkZ2VzIGRlYnVnIG92ZXJsYXkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93SW50ZXJuYWxFZGdlc1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBtb3VzZSBwb3NpdGlvbiBkZWJ1ZyBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd01vdXNlUG9zaXRpb25cbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDE3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5Db250YWN0YCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBjb2xsaXNpb24gY29udGFjdHMuXG4qXG4qIEBjbGFzcyBDb250YWN0XG4qL1xuXG52YXIgQ29udGFjdCA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRhY3Q7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgY29udGFjdC5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7dmVydGV4fSB2ZXJ0ZXhcbiAgICAgKiBAcmV0dXJuIHtjb250YWN0fSBBIG5ldyBjb250YWN0XG4gICAgICovXG4gICAgQ29udGFjdC5jcmVhdGUgPSBmdW5jdGlvbih2ZXJ0ZXgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZlcnRleDogdmVydGV4LFxuICAgICAgICAgICAgbm9ybWFsSW1wdWxzZTogMCxcbiAgICAgICAgICAgIHRhbmdlbnRJbXB1bHNlOiAwXG4gICAgICAgIH07XG4gICAgfTtcblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDE4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5FbmdpbmVgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIGVuZ2luZXMuXG4qIEFuIGVuZ2luZSBpcyBhIGNvbnRyb2xsZXIgdGhhdCBtYW5hZ2VzIHVwZGF0aW5nIHRoZSBzaW11bGF0aW9uIG9mIHRoZSB3b3JsZC5cbiogU2VlIGBNYXR0ZXIuUnVubmVyYCBmb3IgYW4gb3B0aW9uYWwgZ2FtZSBsb29wIHV0aWxpdHkuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBFbmdpbmVcbiovXG5cbnZhciBFbmdpbmUgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBFbmdpbmU7XG5cbnZhciBTbGVlcGluZyA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG52YXIgUmVzb2x2ZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KTtcbnZhciBEZXRlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xudmFyIFBhaXJzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMCk7XG52YXIgRXZlbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbnZhciBDb21wb3NpdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xudmFyIENvbnN0cmFpbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xudmFyIEJvZHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGVuZ2luZS4gVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBhbnkgcHJvcGVydGllcyB5b3Ugd2lzaCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHMuXG4gICAgICogQWxsIHByb3BlcnRpZXMgaGF2ZSBkZWZhdWx0IHZhbHVlcywgYW5kIG1hbnkgYXJlIHByZS1jYWxjdWxhdGVkIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gb3RoZXIgcHJvcGVydGllcy5cbiAgICAgKiBTZWUgdGhlIHByb3BlcnRpZXMgc2VjdGlvbiBiZWxvdyBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gd2hhdCB5b3UgY2FuIHBhc3MgdmlhIHRoZSBgb3B0aW9uc2Agb2JqZWN0LlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEByZXR1cm4ge2VuZ2luZX0gZW5naW5lXG4gICAgICovXG4gICAgRW5naW5lLmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgcG9zaXRpb25JdGVyYXRpb25zOiA2LFxuICAgICAgICAgICAgdmVsb2NpdHlJdGVyYXRpb25zOiA0LFxuICAgICAgICAgICAgY29uc3RyYWludEl0ZXJhdGlvbnM6IDIsXG4gICAgICAgICAgICBlbmFibGVTbGVlcGluZzogZmFsc2UsXG4gICAgICAgICAgICBldmVudHM6IFtdLFxuICAgICAgICAgICAgcGx1Z2luOiB7fSxcbiAgICAgICAgICAgIGdyYXZpdHk6IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDEsXG4gICAgICAgICAgICAgICAgc2NhbGU6IDAuMDAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGltaW5nOiB7XG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiAwLFxuICAgICAgICAgICAgICAgIHRpbWVTY2FsZTogMSxcbiAgICAgICAgICAgICAgICBsYXN0RGVsdGE6IDAsXG4gICAgICAgICAgICAgICAgbGFzdEVsYXBzZWQ6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgZW5naW5lID0gQ29tbW9uLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgZW5naW5lLndvcmxkID0gb3B0aW9ucy53b3JsZCB8fCBDb21wb3NpdGUuY3JlYXRlKHsgbGFiZWw6ICdXb3JsZCcgfSk7XG4gICAgICAgIGVuZ2luZS5wYWlycyA9IG9wdGlvbnMucGFpcnMgfHwgUGFpcnMuY3JlYXRlKCk7XG4gICAgICAgIGVuZ2luZS5kZXRlY3RvciA9IG9wdGlvbnMuZGV0ZWN0b3IgfHwgRGV0ZWN0b3IuY3JlYXRlKCk7XG5cbiAgICAgICAgLy8gZm9yIHRlbXBvcmFyeSBiYWNrIGNvbXBhdGliaWxpdHkgb25seVxuICAgICAgICBlbmdpbmUuZ3JpZCA9IHsgYnVja2V0czogW10gfTtcbiAgICAgICAgZW5naW5lLndvcmxkLmdyYXZpdHkgPSBlbmdpbmUuZ3Jhdml0eTtcbiAgICAgICAgZW5naW5lLmJyb2FkcGhhc2UgPSBlbmdpbmUuZ3JpZDtcbiAgICAgICAgZW5naW5lLm1ldHJpY3MgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBlbmdpbmU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE1vdmVzIHRoZSBzaW11bGF0aW9uIGZvcndhcmQgaW4gdGltZSBieSBgZGVsdGFgIG1zLlxuICAgICAqIFRoZSBgY29ycmVjdGlvbmAgYXJndW1lbnQgaXMgYW4gb3B0aW9uYWwgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgdGhlIHRpbWUgY29ycmVjdGlvbiBmYWN0b3IgdG8gYXBwbHkgdG8gdGhlIHVwZGF0ZS5cbiAgICAgKiBUaGlzIGNhbiBoZWxwIGltcHJvdmUgdGhlIGFjY3VyYWN5IG9mIHRoZSBzaW11bGF0aW9uIGluIGNhc2VzIHdoZXJlIGBkZWx0YWAgaXMgY2hhbmdpbmcgYmV0d2VlbiB1cGRhdGVzLlxuICAgICAqIFRoZSB2YWx1ZSBvZiBgY29ycmVjdGlvbmAgaXMgZGVmaW5lZCBhcyBgZGVsdGEgLyBsYXN0RGVsdGFgLCBpLmUuIHRoZSBwZXJjZW50YWdlIGNoYW5nZSBvZiBgZGVsdGFgIG92ZXIgdGhlIGxhc3Qgc3RlcC5cbiAgICAgKiBUaGVyZWZvcmUgdGhlIHZhbHVlIGlzIGFsd2F5cyBgMWAgKG5vIGNvcnJlY3Rpb24pIHdoZW4gYGRlbHRhYCBjb25zdGFudCAob3Igd2hlbiBubyBjb3JyZWN0aW9uIGlzIGRlc2lyZWQsIHdoaWNoIGlzIHRoZSBkZWZhdWx0KS5cbiAgICAgKiBTZWUgdGhlIHBhcGVyIG9uIDxhIGhyZWY9XCJodHRwOi8vbG9uZXNvY2submV0L2FydGljbGUvdmVybGV0Lmh0bWxcIj5UaW1lIENvcnJlY3RlZCBWZXJsZXQ8L2E+IGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAqXG4gICAgICogVHJpZ2dlcnMgYGJlZm9yZVVwZGF0ZWAgYW5kIGBhZnRlclVwZGF0ZWAgZXZlbnRzLlxuICAgICAqIFRyaWdnZXJzIGBjb2xsaXNpb25TdGFydGAsIGBjb2xsaXNpb25BY3RpdmVgIGFuZCBgY29sbGlzaW9uRW5kYCBldmVudHMuXG4gICAgICogQG1ldGhvZCB1cGRhdGVcbiAgICAgKiBAcGFyYW0ge2VuZ2luZX0gZW5naW5lXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtkZWx0YT0xNi42NjZdXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtjb3JyZWN0aW9uPTFdXG4gICAgICovXG4gICAgRW5naW5lLnVwZGF0ZSA9IGZ1bmN0aW9uKGVuZ2luZSwgZGVsdGEsIGNvcnJlY3Rpb24pIHtcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IENvbW1vbi5ub3coKTtcblxuICAgICAgICBkZWx0YSA9IGRlbHRhIHx8IDEwMDAgLyA2MDtcbiAgICAgICAgY29ycmVjdGlvbiA9IGNvcnJlY3Rpb24gfHwgMTtcblxuICAgICAgICB2YXIgd29ybGQgPSBlbmdpbmUud29ybGQsXG4gICAgICAgICAgICBkZXRlY3RvciA9IGVuZ2luZS5kZXRlY3RvcixcbiAgICAgICAgICAgIHBhaXJzID0gZW5naW5lLnBhaXJzLFxuICAgICAgICAgICAgdGltaW5nID0gZW5naW5lLnRpbWluZyxcbiAgICAgICAgICAgIHRpbWVzdGFtcCA9IHRpbWluZy50aW1lc3RhbXAsXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIC8vIGluY3JlbWVudCB0aW1lc3RhbXBcbiAgICAgICAgdGltaW5nLnRpbWVzdGFtcCArPSBkZWx0YSAqIHRpbWluZy50aW1lU2NhbGU7XG4gICAgICAgIHRpbWluZy5sYXN0RGVsdGEgPSBkZWx0YSAqIHRpbWluZy50aW1lU2NhbGU7XG5cbiAgICAgICAgLy8gY3JlYXRlIGFuIGV2ZW50IG9iamVjdFxuICAgICAgICB2YXIgZXZlbnQgPSB7XG4gICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWluZy50aW1lc3RhbXBcbiAgICAgICAgfTtcblxuICAgICAgICBFdmVudHMudHJpZ2dlcihlbmdpbmUsICdiZWZvcmVVcGRhdGUnLCBldmVudCk7XG5cbiAgICAgICAgLy8gZ2V0IGFsbCBib2RpZXMgYW5kIGFsbCBjb25zdHJhaW50cyBpbiB0aGUgd29ybGRcbiAgICAgICAgdmFyIGFsbEJvZGllcyA9IENvbXBvc2l0ZS5hbGxCb2RpZXMod29ybGQpLFxuICAgICAgICAgICAgYWxsQ29uc3RyYWludHMgPSBDb21wb3NpdGUuYWxsQ29uc3RyYWludHMod29ybGQpO1xuXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgZGV0ZWN0b3IgYm9kaWVzIGlmIHRoZXkgaGF2ZSBjaGFuZ2VkXG4gICAgICAgIGlmICh3b3JsZC5pc01vZGlmaWVkKSB7XG4gICAgICAgICAgICBEZXRlY3Rvci5zZXRCb2RpZXMoZGV0ZWN0b3IsIGFsbEJvZGllcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXNldCBhbGwgY29tcG9zaXRlIG1vZGlmaWVkIGZsYWdzXG4gICAgICAgIGlmICh3b3JsZC5pc01vZGlmaWVkKSB7XG4gICAgICAgICAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQod29ybGQsIGZhbHNlLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgc2xlZXBpbmcgaWYgZW5hYmxlZFxuICAgICAgICBpZiAoZW5naW5lLmVuYWJsZVNsZWVwaW5nKVxuICAgICAgICAgICAgU2xlZXBpbmcudXBkYXRlKGFsbEJvZGllcywgdGltaW5nLnRpbWVTY2FsZSk7XG5cbiAgICAgICAgLy8gYXBwbHkgZ3Jhdml0eSB0byBhbGwgYm9kaWVzXG4gICAgICAgIEVuZ2luZS5fYm9kaWVzQXBwbHlHcmF2aXR5KGFsbEJvZGllcywgZW5naW5lLmdyYXZpdHkpO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBhbGwgYm9keSBwb3NpdGlvbiBhbmQgcm90YXRpb24gYnkgaW50ZWdyYXRpb25cbiAgICAgICAgRW5naW5lLl9ib2RpZXNVcGRhdGUoYWxsQm9kaWVzLCBkZWx0YSwgdGltaW5nLnRpbWVTY2FsZSwgY29ycmVjdGlvbiwgd29ybGQuYm91bmRzKTtcblxuICAgICAgICAvLyB1cGRhdGUgYWxsIGNvbnN0cmFpbnRzIChmaXJzdCBwYXNzKVxuICAgICAgICBDb25zdHJhaW50LnByZVNvbHZlQWxsKGFsbEJvZGllcyk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBlbmdpbmUuY29uc3RyYWludEl0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgICAgICAgQ29uc3RyYWludC5zb2x2ZUFsbChhbGxDb25zdHJhaW50cywgdGltaW5nLnRpbWVTY2FsZSk7XG4gICAgICAgIH1cbiAgICAgICAgQ29uc3RyYWludC5wb3N0U29sdmVBbGwoYWxsQm9kaWVzKTtcblxuICAgICAgICAvLyBmaW5kIGFsbCBjb2xsaXNpb25zXG4gICAgICAgIGRldGVjdG9yLnBhaXJzID0gZW5naW5lLnBhaXJzO1xuICAgICAgICB2YXIgY29sbGlzaW9ucyA9IERldGVjdG9yLmNvbGxpc2lvbnMoZGV0ZWN0b3IpO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBjb2xsaXNpb24gcGFpcnNcbiAgICAgICAgUGFpcnMudXBkYXRlKHBhaXJzLCBjb2xsaXNpb25zLCB0aW1lc3RhbXApO1xuXG4gICAgICAgIC8vIHdha2UgdXAgYm9kaWVzIGludm9sdmVkIGluIGNvbGxpc2lvbnNcbiAgICAgICAgaWYgKGVuZ2luZS5lbmFibGVTbGVlcGluZylcbiAgICAgICAgICAgIFNsZWVwaW5nLmFmdGVyQ29sbGlzaW9ucyhwYWlycy5saXN0LCB0aW1pbmcudGltZVNjYWxlKTtcblxuICAgICAgICAvLyB0cmlnZ2VyIGNvbGxpc2lvbiBldmVudHNcbiAgICAgICAgaWYgKHBhaXJzLmNvbGxpc2lvblN0YXJ0Lmxlbmd0aCA+IDApXG4gICAgICAgICAgICBFdmVudHMudHJpZ2dlcihlbmdpbmUsICdjb2xsaXNpb25TdGFydCcsIHsgcGFpcnM6IHBhaXJzLmNvbGxpc2lvblN0YXJ0IH0pO1xuXG4gICAgICAgIC8vIGl0ZXJhdGl2ZWx5IHJlc29sdmUgcG9zaXRpb24gYmV0d2VlbiBjb2xsaXNpb25zXG4gICAgICAgIFJlc29sdmVyLnByZVNvbHZlUG9zaXRpb24ocGFpcnMubGlzdCk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBlbmdpbmUucG9zaXRpb25JdGVyYXRpb25zOyBpKyspIHtcbiAgICAgICAgICAgIFJlc29sdmVyLnNvbHZlUG9zaXRpb24ocGFpcnMubGlzdCwgdGltaW5nLnRpbWVTY2FsZSk7XG4gICAgICAgIH1cbiAgICAgICAgUmVzb2x2ZXIucG9zdFNvbHZlUG9zaXRpb24oYWxsQm9kaWVzKTtcblxuICAgICAgICAvLyB1cGRhdGUgYWxsIGNvbnN0cmFpbnRzIChzZWNvbmQgcGFzcylcbiAgICAgICAgQ29uc3RyYWludC5wcmVTb2x2ZUFsbChhbGxCb2RpZXMpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZW5naW5lLmNvbnN0cmFpbnRJdGVyYXRpb25zOyBpKyspIHtcbiAgICAgICAgICAgIENvbnN0cmFpbnQuc29sdmVBbGwoYWxsQ29uc3RyYWludHMsIHRpbWluZy50aW1lU2NhbGUpO1xuICAgICAgICB9XG4gICAgICAgIENvbnN0cmFpbnQucG9zdFNvbHZlQWxsKGFsbEJvZGllcyk7XG5cbiAgICAgICAgLy8gaXRlcmF0aXZlbHkgcmVzb2x2ZSB2ZWxvY2l0eSBiZXR3ZWVuIGNvbGxpc2lvbnNcbiAgICAgICAgUmVzb2x2ZXIucHJlU29sdmVWZWxvY2l0eShwYWlycy5saXN0KTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGVuZ2luZS52ZWxvY2l0eUl0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgICAgICAgUmVzb2x2ZXIuc29sdmVWZWxvY2l0eShwYWlycy5saXN0LCB0aW1pbmcudGltZVNjYWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRyaWdnZXIgY29sbGlzaW9uIGV2ZW50c1xuICAgICAgICBpZiAocGFpcnMuY29sbGlzaW9uQWN0aXZlLmxlbmd0aCA+IDApXG4gICAgICAgICAgICBFdmVudHMudHJpZ2dlcihlbmdpbmUsICdjb2xsaXNpb25BY3RpdmUnLCB7IHBhaXJzOiBwYWlycy5jb2xsaXNpb25BY3RpdmUgfSk7XG5cbiAgICAgICAgaWYgKHBhaXJzLmNvbGxpc2lvbkVuZC5sZW5ndGggPiAwKVxuICAgICAgICAgICAgRXZlbnRzLnRyaWdnZXIoZW5naW5lLCAnY29sbGlzaW9uRW5kJywgeyBwYWlyczogcGFpcnMuY29sbGlzaW9uRW5kIH0pO1xuXG4gICAgICAgIC8vIGNsZWFyIGZvcmNlIGJ1ZmZlcnNcbiAgICAgICAgRW5naW5lLl9ib2RpZXNDbGVhckZvcmNlcyhhbGxCb2RpZXMpO1xuXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKGVuZ2luZSwgJ2FmdGVyVXBkYXRlJywgZXZlbnQpO1xuXG4gICAgICAgIC8vIGxvZyB0aGUgdGltZSBlbGFwc2VkIGNvbXB1dGluZyB0aGlzIHVwZGF0ZVxuICAgICAgICBlbmdpbmUudGltaW5nLmxhc3RFbGFwc2VkID0gQ29tbW9uLm5vdygpIC0gc3RhcnRUaW1lO1xuXG4gICAgICAgIHJldHVybiBlbmdpbmU7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBNZXJnZXMgdHdvIGVuZ2luZXMgYnkga2VlcGluZyB0aGUgY29uZmlndXJhdGlvbiBvZiBgZW5naW5lQWAgYnV0IHJlcGxhY2luZyB0aGUgd29ybGQgd2l0aCB0aGUgb25lIGZyb20gYGVuZ2luZUJgLlxuICAgICAqIEBtZXRob2QgbWVyZ2VcbiAgICAgKiBAcGFyYW0ge2VuZ2luZX0gZW5naW5lQVxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVCXG4gICAgICovXG4gICAgRW5naW5lLm1lcmdlID0gZnVuY3Rpb24oZW5naW5lQSwgZW5naW5lQikge1xuICAgICAgICBDb21tb24uZXh0ZW5kKGVuZ2luZUEsIGVuZ2luZUIpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGVuZ2luZUIud29ybGQpIHtcbiAgICAgICAgICAgIGVuZ2luZUEud29ybGQgPSBlbmdpbmVCLndvcmxkO1xuXG4gICAgICAgICAgICBFbmdpbmUuY2xlYXIoZW5naW5lQSk7XG5cbiAgICAgICAgICAgIHZhciBib2RpZXMgPSBDb21wb3NpdGUuYWxsQm9kaWVzKGVuZ2luZUEud29ybGQpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuICAgICAgICAgICAgICAgIFNsZWVwaW5nLnNldChib2R5LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYm9keS5pZCA9IENvbW1vbi5uZXh0SWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGVuZ2luZSBwYWlycyBhbmQgZGV0ZWN0b3IuXG4gICAgICogQG1ldGhvZCBjbGVhclxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKi9cbiAgICBFbmdpbmUuY2xlYXIgPSBmdW5jdGlvbihlbmdpbmUpIHtcbiAgICAgICAgUGFpcnMuY2xlYXIoZW5naW5lLnBhaXJzKTtcbiAgICAgICAgRGV0ZWN0b3IuY2xlYXIoZW5naW5lLmRldGVjdG9yKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogWmVyb2VzIHRoZSBgYm9keS5mb3JjZWAgYW5kIGBib2R5LnRvcnF1ZWAgZm9yY2UgYnVmZmVycy5cbiAgICAgKiBAbWV0aG9kIF9ib2RpZXNDbGVhckZvcmNlc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqL1xuICAgIEVuZ2luZS5fYm9kaWVzQ2xlYXJGb3JjZXMgPSBmdW5jdGlvbihib2RpZXMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICAvLyByZXNldCBmb3JjZSBidWZmZXJzXG4gICAgICAgICAgICBib2R5LmZvcmNlLnggPSAwO1xuICAgICAgICAgICAgYm9keS5mb3JjZS55ID0gMDtcbiAgICAgICAgICAgIGJvZHkudG9ycXVlID0gMDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBcHBseXMgYSBtYXNzIGRlcGVuZGFudCBmb3JjZSB0byBhbGwgZ2l2ZW4gYm9kaWVzLlxuICAgICAqIEBtZXRob2QgX2JvZGllc0FwcGx5R3Jhdml0eVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBncmF2aXR5XG4gICAgICovXG4gICAgRW5naW5lLl9ib2RpZXNBcHBseUdyYXZpdHkgPSBmdW5jdGlvbihib2RpZXMsIGdyYXZpdHkpIHtcbiAgICAgICAgdmFyIGdyYXZpdHlTY2FsZSA9IHR5cGVvZiBncmF2aXR5LnNjYWxlICE9PSAndW5kZWZpbmVkJyA/IGdyYXZpdHkuc2NhbGUgOiAwLjAwMTtcblxuICAgICAgICBpZiAoKGdyYXZpdHkueCA9PT0gMCAmJiBncmF2aXR5LnkgPT09IDApIHx8IGdyYXZpdHlTY2FsZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV07XG5cbiAgICAgICAgICAgIGlmIChib2R5LmlzU3RhdGljIHx8IGJvZHkuaXNTbGVlcGluZylcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8gYXBwbHkgZ3Jhdml0eVxuICAgICAgICAgICAgYm9keS5mb3JjZS55ICs9IGJvZHkubWFzcyAqIGdyYXZpdHkueSAqIGdyYXZpdHlTY2FsZTtcbiAgICAgICAgICAgIGJvZHkuZm9yY2UueCArPSBib2R5Lm1hc3MgKiBncmF2aXR5LnggKiBncmF2aXR5U2NhbGU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXBwbHlzIGBCb2R5LnVwZGF0ZWAgdG8gYWxsIGdpdmVuIGBib2RpZXNgLlxuICAgICAqIEBtZXRob2QgX2JvZGllc1VwZGF0ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZWx0YVRpbWUgXG4gICAgICogVGhlIGFtb3VudCBvZiB0aW1lIGVsYXBzZWQgYmV0d2VlbiB1cGRhdGVzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTY2FsZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb3JyZWN0aW9uIFxuICAgICAqIFRoZSBWZXJsZXQgY29ycmVjdGlvbiBmYWN0b3IgKGRlbHRhVGltZSAvIGxhc3REZWx0YVRpbWUpXG4gICAgICogQHBhcmFtIHtib3VuZHN9IHdvcmxkQm91bmRzXG4gICAgICovXG4gICAgRW5naW5lLl9ib2RpZXNVcGRhdGUgPSBmdW5jdGlvbihib2RpZXMsIGRlbHRhVGltZSwgdGltZVNjYWxlLCBjb3JyZWN0aW9uLCB3b3JsZEJvdW5kcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV07XG5cbiAgICAgICAgICAgIGlmIChib2R5LmlzU3RhdGljIHx8IGJvZHkuaXNTbGVlcGluZylcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgQm9keS51cGRhdGUoYm9keSwgZGVsdGFUaW1lLCB0aW1lU2NhbGUsIGNvcnJlY3Rpb24pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEEgZGVwcmVjYXRlZCBhbGlhcyBmb3IgYFJ1bm5lci5ydW5gLCB1c2UgYE1hdHRlci5SdW5uZXIucnVuKGVuZ2luZSlgIGluc3RlYWQgYW5kIHNlZSBgTWF0dGVyLlJ1bm5lcmAgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAgICogQGRlcHJlY2F0ZWQgdXNlIE1hdHRlci5SdW5uZXIucnVuKGVuZ2luZSkgaW5zdGVhZFxuICAgICAqIEBtZXRob2QgcnVuXG4gICAgICogQHBhcmFtIHtlbmdpbmV9IGVuZ2luZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCBqdXN0IGJlZm9yZSBhbiB1cGRhdGVcbiAgICAqXG4gICAgKiBAZXZlbnQgYmVmb3JlVXBkYXRlXG4gICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7ZW5naW5lfSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCBhZnRlciBlbmdpbmUgdXBkYXRlIGFuZCBhbGwgY29sbGlzaW9uIGV2ZW50c1xuICAgICpcbiAgICAqIEBldmVudCBhZnRlclVwZGF0ZVxuICAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge2VuZ2luZX0gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYWZ0ZXIgZW5naW5lIHVwZGF0ZSwgcHJvdmlkZXMgYSBsaXN0IG9mIGFsbCBwYWlycyB0aGF0IGhhdmUgc3RhcnRlZCB0byBjb2xsaWRlIGluIHRoZSBjdXJyZW50IHRpY2sgKGlmIGFueSlcbiAgICAqXG4gICAgKiBAZXZlbnQgY29sbGlzaW9uU3RhcnRcbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7cGFpcltdfSBldmVudC5wYWlycyBMaXN0IG9mIGFmZmVjdGVkIHBhaXJzXG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7ZW5naW5lfSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCBhZnRlciBlbmdpbmUgdXBkYXRlLCBwcm92aWRlcyBhIGxpc3Qgb2YgYWxsIHBhaXJzIHRoYXQgYXJlIGNvbGxpZGluZyBpbiB0aGUgY3VycmVudCB0aWNrIChpZiBhbnkpXG4gICAgKlxuICAgICogQGV2ZW50IGNvbGxpc2lvbkFjdGl2ZVxuICAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtwYWlyW119IGV2ZW50LnBhaXJzIExpc3Qgb2YgYWZmZWN0ZWQgcGFpcnNcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHtlbmdpbmV9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGFmdGVyIGVuZ2luZSB1cGRhdGUsIHByb3ZpZGVzIGEgbGlzdCBvZiBhbGwgcGFpcnMgdGhhdCBoYXZlIGVuZGVkIGNvbGxpc2lvbiBpbiB0aGUgY3VycmVudCB0aWNrIChpZiBhbnkpXG4gICAgKlxuICAgICogQGV2ZW50IGNvbGxpc2lvbkVuZFxuICAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtwYWlyW119IGV2ZW50LnBhaXJzIExpc3Qgb2YgYWZmZWN0ZWQgcGFpcnNcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHtlbmdpbmV9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKlxuICAgICpcbiAgICAqICBQcm9wZXJ0aWVzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGludGVnZXIgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgdGhlIG51bWJlciBvZiBwb3NpdGlvbiBpdGVyYXRpb25zIHRvIHBlcmZvcm0gZWFjaCB1cGRhdGUuXG4gICAgICogVGhlIGhpZ2hlciB0aGUgdmFsdWUsIHRoZSBoaWdoZXIgcXVhbGl0eSB0aGUgc2ltdWxhdGlvbiB3aWxsIGJlIGF0IHRoZSBleHBlbnNlIG9mIHBlcmZvcm1hbmNlLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBvc2l0aW9uSXRlcmF0aW9uc1xuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDZcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGludGVnZXIgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgdGhlIG51bWJlciBvZiB2ZWxvY2l0eSBpdGVyYXRpb25zIHRvIHBlcmZvcm0gZWFjaCB1cGRhdGUuXG4gICAgICogVGhlIGhpZ2hlciB0aGUgdmFsdWUsIHRoZSBoaWdoZXIgcXVhbGl0eSB0aGUgc2ltdWxhdGlvbiB3aWxsIGJlIGF0IHRoZSBleHBlbnNlIG9mIHBlcmZvcm1hbmNlLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHZlbG9jaXR5SXRlcmF0aW9uc1xuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDRcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGludGVnZXIgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgdGhlIG51bWJlciBvZiBjb25zdHJhaW50IGl0ZXJhdGlvbnMgdG8gcGVyZm9ybSBlYWNoIHVwZGF0ZS5cbiAgICAgKiBUaGUgaGlnaGVyIHRoZSB2YWx1ZSwgdGhlIGhpZ2hlciBxdWFsaXR5IHRoZSBzaW11bGF0aW9uIHdpbGwgYmUgYXQgdGhlIGV4cGVuc2Ugb2YgcGVyZm9ybWFuY2UuXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgYDJgIGlzIHVzdWFsbHkgdmVyeSBhZGVxdWF0ZS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjb25zdHJhaW50SXRlcmF0aW9uc1xuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0aGF0IHNwZWNpZmllcyB3aGV0aGVyIHRoZSBlbmdpbmUgc2hvdWxkIGFsbG93IHNsZWVwaW5nIHZpYSB0aGUgYE1hdHRlci5TbGVlcGluZ2AgbW9kdWxlLlxuICAgICAqIFNsZWVwaW5nIGNhbiBpbXByb3ZlIHN0YWJpbGl0eSBhbmQgcGVyZm9ybWFuY2UsIGJ1dCBvZnRlbiBhdCB0aGUgZXhwZW5zZSBvZiBhY2N1cmFjeS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBlbmFibGVTbGVlcGluZ1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYE9iamVjdGAgY29udGFpbmluZyBwcm9wZXJ0aWVzIHJlZ2FyZGluZyB0aGUgdGltaW5nIHN5c3RlbXMgb2YgdGhlIGVuZ2luZS4gXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdGltaW5nXG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIHRoZSBnbG9iYWwgc2NhbGluZyBmYWN0b3Igb2YgdGltZSBmb3IgYWxsIGJvZGllcy5cbiAgICAgKiBBIHZhbHVlIG9mIGAwYCBmcmVlemVzIHRoZSBzaW11bGF0aW9uLlxuICAgICAqIEEgdmFsdWUgb2YgYDAuMWAgZ2l2ZXMgYSBzbG93LW1vdGlvbiBlZmZlY3QuXG4gICAgICogQSB2YWx1ZSBvZiBgMS4yYCBnaXZlcyBhIHNwZWVkLXVwIGVmZmVjdC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB0aW1pbmcudGltZVNjYWxlXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IHNwZWNpZmllcyB0aGUgY3VycmVudCBzaW11bGF0aW9uLXRpbWUgaW4gbWlsbGlzZWNvbmRzIHN0YXJ0aW5nIGZyb20gYDBgLiBcbiAgICAgKiBJdCBpcyBpbmNyZW1lbnRlZCBvbiBldmVyeSBgRW5naW5lLnVwZGF0ZWAgYnkgdGhlIGdpdmVuIGBkZWx0YWAgYXJndW1lbnQuIFxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHRpbWluZy50aW1lc3RhbXBcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgcmVwcmVzZW50cyB0aGUgdG90YWwgZXhlY3V0aW9uIHRpbWUgZWxhcHNlZCBkdXJpbmcgdGhlIGxhc3QgYEVuZ2luZS51cGRhdGVgIGluIG1pbGxpc2Vjb25kcy5cbiAgICAgKiBJdCBpcyB1cGRhdGVkIGJ5IHRpbWluZyBmcm9tIHRoZSBzdGFydCBvZiB0aGUgbGFzdCBgRW5naW5lLnVwZGF0ZWAgY2FsbCB1bnRpbCBpdCBlbmRzLlxuICAgICAqXG4gICAgICogVGhpcyB2YWx1ZSB3aWxsIGFsc28gaW5jbHVkZSB0aGUgdG90YWwgZXhlY3V0aW9uIHRpbWUgb2YgYWxsIGV2ZW50IGhhbmRsZXJzIGRpcmVjdGx5IG9yIGluZGlyZWN0bHkgdHJpZ2dlcmVkIGJ5IHRoZSBlbmdpbmUgdXBkYXRlLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHRpbWluZy5sYXN0RWxhcHNlZFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCByZXByZXNlbnRzIHRoZSBgZGVsdGFgIHZhbHVlIHVzZWQgaW4gdGhlIGxhc3QgZW5naW5lIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB0aW1pbmcubGFzdERlbHRhXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTWF0dGVyLkRldGVjdG9yYCBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBkZXRlY3RvclxuICAgICAqIEB0eXBlIGRldGVjdG9yXG4gICAgICogQGRlZmF1bHQgYSBNYXR0ZXIuRGV0ZWN0b3IgaW5zdGFuY2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE1hdHRlci5HcmlkYCBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHJlcGxhY2VkIGJ5IGBlbmdpbmUuZGV0ZWN0b3JgXG4gICAgICogQHByb3BlcnR5IGdyaWRcbiAgICAgKiBAdHlwZSBncmlkXG4gICAgICogQGRlZmF1bHQgYSBNYXR0ZXIuR3JpZCBpbnN0YW5jZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZWQgYnkgYW5kIG5vdyBhbGlhcyBmb3IgYGVuZ2luZS5ncmlkYC5cbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHJlcGxhY2VkIGJ5IGBlbmdpbmUuZGV0ZWN0b3JgXG4gICAgICogQHByb3BlcnR5IGJyb2FkcGhhc2VcbiAgICAgKiBAdHlwZSBncmlkXG4gICAgICogQGRlZmF1bHQgYSBNYXR0ZXIuR3JpZCBpbnN0YW5jZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIHJvb3QgYE1hdHRlci5Db21wb3NpdGVgIGluc3RhbmNlIHRoYXQgd2lsbCBjb250YWluIGFsbCBib2RpZXMsIGNvbnN0cmFpbnRzIGFuZCBvdGhlciBjb21wb3NpdGVzIHRvIGJlIHNpbXVsYXRlZCBieSB0aGlzIGVuZ2luZS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB3b3JsZFxuICAgICAqIEB0eXBlIGNvbXBvc2l0ZVxuICAgICAqIEBkZWZhdWx0IGEgTWF0dGVyLkNvbXBvc2l0ZSBpbnN0YW5jZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IHJlc2VydmVkIGZvciBzdG9yaW5nIHBsdWdpbi1zcGVjaWZpYyBwcm9wZXJ0aWVzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBsdWdpblxuICAgICAqIEB0eXBlIHt9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZ3Jhdml0eSB0byBhcHBseSBvbiBhbGwgYm9kaWVzIGluIGBlbmdpbmUud29ybGRgLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGdyYXZpdHlcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBncmF2aXR5IHggY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGdyYXZpdHkueFxuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBncmF2aXR5IHkgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGdyYXZpdHkueVxuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBncmF2aXR5IHNjYWxlIGZhY3Rvci5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBncmF2aXR5LnNjYWxlXG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICogQGRlZmF1bHQgMC4wMDFcbiAgICAgKi9cblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDE5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5SZXNvbHZlcmAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIHJlc29sdmluZyBjb2xsaXNpb24gcGFpcnMuXG4qXG4qIEBjbGFzcyBSZXNvbHZlclxuKi9cblxudmFyIFJlc29sdmVyID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gUmVzb2x2ZXI7XG5cbnZhciBWZXJ0aWNlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG52YXIgQm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgUmVzb2x2ZXIuX3Jlc3RpbmdUaHJlc2ggPSA0O1xuICAgIFJlc29sdmVyLl9yZXN0aW5nVGhyZXNoVGFuZ2VudCA9IDY7XG4gICAgUmVzb2x2ZXIuX3Bvc2l0aW9uRGFtcGVuID0gMC45O1xuICAgIFJlc29sdmVyLl9wb3NpdGlvbldhcm1pbmcgPSAwLjg7XG4gICAgUmVzb2x2ZXIuX2ZyaWN0aW9uTm9ybWFsTXVsdGlwbGllciA9IDU7XG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJlIHBhaXJzIGZvciBwb3NpdGlvbiBzb2x2aW5nLlxuICAgICAqIEBtZXRob2QgcHJlU29sdmVQb3NpdGlvblxuICAgICAqIEBwYXJhbSB7cGFpcltdfSBwYWlyc1xuICAgICAqL1xuICAgIFJlc29sdmVyLnByZVNvbHZlUG9zaXRpb24gPSBmdW5jdGlvbihwYWlycykge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIHBhaXIsXG4gICAgICAgICAgICBhY3RpdmVDb3VudCxcbiAgICAgICAgICAgIHBhaXJzTGVuZ3RoID0gcGFpcnMubGVuZ3RoO1xuXG4gICAgICAgIC8vIGZpbmQgdG90YWwgY29udGFjdHMgb24gZWFjaCBib2R5XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlyc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYWlyID0gcGFpcnNbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghcGFpci5pc0FjdGl2ZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYWN0aXZlQ291bnQgPSBwYWlyLmFjdGl2ZUNvbnRhY3RzLmxlbmd0aDtcbiAgICAgICAgICAgIHBhaXIuY29sbGlzaW9uLnBhcmVudEEudG90YWxDb250YWN0cyArPSBhY3RpdmVDb3VudDtcbiAgICAgICAgICAgIHBhaXIuY29sbGlzaW9uLnBhcmVudEIudG90YWxDb250YWN0cyArPSBhY3RpdmVDb3VudDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIGEgc29sdXRpb24gZm9yIHBhaXIgcG9zaXRpb25zLlxuICAgICAqIEBtZXRob2Qgc29sdmVQb3NpdGlvblxuICAgICAqIEBwYXJhbSB7cGFpcltdfSBwYWlyc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU2NhbGVcbiAgICAgKi9cbiAgICBSZXNvbHZlci5zb2x2ZVBvc2l0aW9uID0gZnVuY3Rpb24ocGFpcnMsIHRpbWVTY2FsZSkge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIHBhaXIsXG4gICAgICAgICAgICBjb2xsaXNpb24sXG4gICAgICAgICAgICBib2R5QSxcbiAgICAgICAgICAgIGJvZHlCLFxuICAgICAgICAgICAgbm9ybWFsLFxuICAgICAgICAgICAgY29udGFjdFNoYXJlLFxuICAgICAgICAgICAgcG9zaXRpb25JbXB1bHNlLFxuICAgICAgICAgICAgcG9zaXRpb25EYW1wZW4gPSBSZXNvbHZlci5fcG9zaXRpb25EYW1wZW4sXG4gICAgICAgICAgICBwYWlyc0xlbmd0aCA9IHBhaXJzLmxlbmd0aDtcblxuICAgICAgICAvLyBmaW5kIGltcHVsc2VzIHJlcXVpcmVkIHRvIHJlc29sdmUgcGVuZXRyYXRpb25cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhaXJzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhaXIgPSBwYWlyc1tpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCFwYWlyLmlzQWN0aXZlIHx8IHBhaXIuaXNTZW5zb3IpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbGxpc2lvbiA9IHBhaXIuY29sbGlzaW9uO1xuICAgICAgICAgICAgYm9keUEgPSBjb2xsaXNpb24ucGFyZW50QTtcbiAgICAgICAgICAgIGJvZHlCID0gY29sbGlzaW9uLnBhcmVudEI7XG4gICAgICAgICAgICBub3JtYWwgPSBjb2xsaXNpb24ubm9ybWFsO1xuXG4gICAgICAgICAgICAvLyBnZXQgY3VycmVudCBzZXBhcmF0aW9uIGJldHdlZW4gYm9keSBlZGdlcyBpbnZvbHZlZCBpbiBjb2xsaXNpb25cbiAgICAgICAgICAgIHBhaXIuc2VwYXJhdGlvbiA9IFxuICAgICAgICAgICAgICAgIG5vcm1hbC54ICogKGJvZHlCLnBvc2l0aW9uSW1wdWxzZS54ICsgY29sbGlzaW9uLnBlbmV0cmF0aW9uLnggLSBib2R5QS5wb3NpdGlvbkltcHVsc2UueClcbiAgICAgICAgICAgICAgICArIG5vcm1hbC55ICogKGJvZHlCLnBvc2l0aW9uSW1wdWxzZS55ICsgY29sbGlzaW9uLnBlbmV0cmF0aW9uLnkgLSBib2R5QS5wb3NpdGlvbkltcHVsc2UueSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlyc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYWlyID0gcGFpcnNbaV07XG5cbiAgICAgICAgICAgIGlmICghcGFpci5pc0FjdGl2ZSB8fCBwYWlyLmlzU2Vuc29yKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb2xsaXNpb24gPSBwYWlyLmNvbGxpc2lvbjtcbiAgICAgICAgICAgIGJvZHlBID0gY29sbGlzaW9uLnBhcmVudEE7XG4gICAgICAgICAgICBib2R5QiA9IGNvbGxpc2lvbi5wYXJlbnRCO1xuICAgICAgICAgICAgbm9ybWFsID0gY29sbGlzaW9uLm5vcm1hbDtcbiAgICAgICAgICAgIHBvc2l0aW9uSW1wdWxzZSA9IChwYWlyLnNlcGFyYXRpb24gLSBwYWlyLnNsb3ApICogdGltZVNjYWxlO1xuXG4gICAgICAgICAgICBpZiAoYm9keUEuaXNTdGF0aWMgfHwgYm9keUIuaXNTdGF0aWMpXG4gICAgICAgICAgICAgICAgcG9zaXRpb25JbXB1bHNlICo9IDI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghKGJvZHlBLmlzU3RhdGljIHx8IGJvZHlBLmlzU2xlZXBpbmcpKSB7XG4gICAgICAgICAgICAgICAgY29udGFjdFNoYXJlID0gcG9zaXRpb25EYW1wZW4gLyBib2R5QS50b3RhbENvbnRhY3RzO1xuICAgICAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uSW1wdWxzZS54ICs9IG5vcm1hbC54ICogcG9zaXRpb25JbXB1bHNlICogY29udGFjdFNoYXJlO1xuICAgICAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uSW1wdWxzZS55ICs9IG5vcm1hbC55ICogcG9zaXRpb25JbXB1bHNlICogY29udGFjdFNoYXJlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIShib2R5Qi5pc1N0YXRpYyB8fCBib2R5Qi5pc1NsZWVwaW5nKSkge1xuICAgICAgICAgICAgICAgIGNvbnRhY3RTaGFyZSA9IHBvc2l0aW9uRGFtcGVuIC8gYm9keUIudG90YWxDb250YWN0cztcbiAgICAgICAgICAgICAgICBib2R5Qi5wb3NpdGlvbkltcHVsc2UueCAtPSBub3JtYWwueCAqIHBvc2l0aW9uSW1wdWxzZSAqIGNvbnRhY3RTaGFyZTtcbiAgICAgICAgICAgICAgICBib2R5Qi5wb3NpdGlvbkltcHVsc2UueSAtPSBub3JtYWwueSAqIHBvc2l0aW9uSW1wdWxzZSAqIGNvbnRhY3RTaGFyZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSBwb3NpdGlvbiByZXNvbHV0aW9uLlxuICAgICAqIEBtZXRob2QgcG9zdFNvbHZlUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICovXG4gICAgUmVzb2x2ZXIucG9zdFNvbHZlUG9zaXRpb24gPSBmdW5jdGlvbihib2RpZXMpIHtcbiAgICAgICAgdmFyIHBvc2l0aW9uV2FybWluZyA9IFJlc29sdmVyLl9wb3NpdGlvbldhcm1pbmcsXG4gICAgICAgICAgICBib2RpZXNMZW5ndGggPSBib2RpZXMubGVuZ3RoLFxuICAgICAgICAgICAgdmVydGljZXNUcmFuc2xhdGUgPSBWZXJ0aWNlcy50cmFuc2xhdGUsXG4gICAgICAgICAgICBib3VuZHNVcGRhdGUgPSBCb3VuZHMudXBkYXRlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uSW1wdWxzZSA9IGJvZHkucG9zaXRpb25JbXB1bHNlLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uSW1wdWxzZVggPSBwb3NpdGlvbkltcHVsc2UueCxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkltcHVsc2VZID0gcG9zaXRpb25JbXB1bHNlLnksXG4gICAgICAgICAgICAgICAgdmVsb2NpdHkgPSBib2R5LnZlbG9jaXR5O1xuXG4gICAgICAgICAgICAvLyByZXNldCBjb250YWN0IGNvdW50XG4gICAgICAgICAgICBib2R5LnRvdGFsQ29udGFjdHMgPSAwO1xuXG4gICAgICAgICAgICBpZiAocG9zaXRpb25JbXB1bHNlWCAhPT0gMCB8fCBwb3NpdGlvbkltcHVsc2VZICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIGJvZHkgZ2VvbWV0cnlcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGJvZHkucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBib2R5LnBhcnRzW2pdO1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNlc1RyYW5zbGF0ZShwYXJ0LnZlcnRpY2VzLCBwb3NpdGlvbkltcHVsc2UpO1xuICAgICAgICAgICAgICAgICAgICBib3VuZHNVcGRhdGUocGFydC5ib3VuZHMsIHBhcnQudmVydGljZXMsIHZlbG9jaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgcGFydC5wb3NpdGlvbi54ICs9IHBvc2l0aW9uSW1wdWxzZVg7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueSArPSBwb3NpdGlvbkltcHVsc2VZO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIG1vdmUgdGhlIGJvZHkgd2l0aG91dCBjaGFuZ2luZyB2ZWxvY2l0eVxuICAgICAgICAgICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnggKz0gcG9zaXRpb25JbXB1bHNlWDtcbiAgICAgICAgICAgICAgICBib2R5LnBvc2l0aW9uUHJldi55ICs9IHBvc2l0aW9uSW1wdWxzZVk7XG5cbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25JbXB1bHNlWCAqIHZlbG9jaXR5LnggKyBwb3NpdGlvbkltcHVsc2VZICogdmVsb2NpdHkueSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzZXQgY2FjaGVkIGltcHVsc2UgaWYgdGhlIGJvZHkgaGFzIHZlbG9jaXR5IGFsb25nIGl0XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uSW1wdWxzZS54ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25JbXB1bHNlLnkgPSAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdhcm0gdGhlIG5leHQgaXRlcmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uSW1wdWxzZS54ICo9IHBvc2l0aW9uV2FybWluZztcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25JbXB1bHNlLnkgKj0gcG9zaXRpb25XYXJtaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJlIHBhaXJzIGZvciB2ZWxvY2l0eSBzb2x2aW5nLlxuICAgICAqIEBtZXRob2QgcHJlU29sdmVWZWxvY2l0eVxuICAgICAqIEBwYXJhbSB7cGFpcltdfSBwYWlyc1xuICAgICAqL1xuICAgIFJlc29sdmVyLnByZVNvbHZlVmVsb2NpdHkgPSBmdW5jdGlvbihwYWlycykge1xuICAgICAgICB2YXIgcGFpcnNMZW5ndGggPSBwYWlycy5sZW5ndGgsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgajtcbiAgICAgICAgXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlyc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFpciA9IHBhaXJzW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXBhaXIuaXNBY3RpdmUgfHwgcGFpci5pc1NlbnNvcilcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGNvbnRhY3RzID0gcGFpci5hY3RpdmVDb250YWN0cyxcbiAgICAgICAgICAgICAgICBjb250YWN0c0xlbmd0aCA9IGNvbnRhY3RzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBjb2xsaXNpb24gPSBwYWlyLmNvbGxpc2lvbixcbiAgICAgICAgICAgICAgICBib2R5QSA9IGNvbGxpc2lvbi5wYXJlbnRBLFxuICAgICAgICAgICAgICAgIGJvZHlCID0gY29sbGlzaW9uLnBhcmVudEIsXG4gICAgICAgICAgICAgICAgbm9ybWFsID0gY29sbGlzaW9uLm5vcm1hbCxcbiAgICAgICAgICAgICAgICB0YW5nZW50ID0gY29sbGlzaW9uLnRhbmdlbnQ7XG4gICAgXG4gICAgICAgICAgICAvLyByZXNvbHZlIGVhY2ggY29udGFjdFxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGNvbnRhY3RzTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGFjdCA9IGNvbnRhY3RzW2pdLFxuICAgICAgICAgICAgICAgICAgICBjb250YWN0VmVydGV4ID0gY29udGFjdC52ZXJ0ZXgsXG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbEltcHVsc2UgPSBjb250YWN0Lm5vcm1hbEltcHVsc2UsXG4gICAgICAgICAgICAgICAgICAgIHRhbmdlbnRJbXB1bHNlID0gY29udGFjdC50YW5nZW50SW1wdWxzZTtcbiAgICBcbiAgICAgICAgICAgICAgICBpZiAobm9ybWFsSW1wdWxzZSAhPT0gMCB8fCB0YW5nZW50SW1wdWxzZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0b3RhbCBpbXB1bHNlIGZyb20gY29udGFjdFxuICAgICAgICAgICAgICAgICAgICB2YXIgaW1wdWxzZVggPSBub3JtYWwueCAqIG5vcm1hbEltcHVsc2UgKyB0YW5nZW50LnggKiB0YW5nZW50SW1wdWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcHVsc2VZID0gbm9ybWFsLnkgKiBub3JtYWxJbXB1bHNlICsgdGFuZ2VudC55ICogdGFuZ2VudEltcHVsc2U7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBhcHBseSBpbXB1bHNlIGZyb20gY29udGFjdFxuICAgICAgICAgICAgICAgICAgICBpZiAoIShib2R5QS5pc1N0YXRpYyB8fCBib2R5QS5pc1NsZWVwaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keUEucG9zaXRpb25QcmV2LnggKz0gaW1wdWxzZVggKiBib2R5QS5pbnZlcnNlTWFzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uUHJldi55ICs9IGltcHVsc2VZICogYm9keUEuaW52ZXJzZU1hc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5QS5hbmdsZVByZXYgKz0gYm9keUEuaW52ZXJzZUluZXJ0aWEgKiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbnRhY3RWZXJ0ZXgueCAtIGJvZHlBLnBvc2l0aW9uLngpICogaW1wdWxzZVlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIChjb250YWN0VmVydGV4LnkgLSBib2R5QS5wb3NpdGlvbi55KSAqIGltcHVsc2VYXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICghKGJvZHlCLmlzU3RhdGljIHx8IGJvZHlCLmlzU2xlZXBpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5Qi5wb3NpdGlvblByZXYueCAtPSBpbXB1bHNlWCAqIGJvZHlCLmludmVyc2VNYXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keUIucG9zaXRpb25QcmV2LnkgLT0gaW1wdWxzZVkgKiBib2R5Qi5pbnZlcnNlTWFzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlCLmFuZ2xlUHJldiAtPSBib2R5Qi5pbnZlcnNlSW5lcnRpYSAqIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29udGFjdFZlcnRleC54IC0gYm9keUIucG9zaXRpb24ueCkgKiBpbXB1bHNlWSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIChjb250YWN0VmVydGV4LnkgLSBib2R5Qi5wb3NpdGlvbi55KSAqIGltcHVsc2VYXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEZpbmQgYSBzb2x1dGlvbiBmb3IgcGFpciB2ZWxvY2l0aWVzLlxuICAgICAqIEBtZXRob2Qgc29sdmVWZWxvY2l0eVxuICAgICAqIEBwYXJhbSB7cGFpcltdfSBwYWlyc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU2NhbGVcbiAgICAgKi9cbiAgICBSZXNvbHZlci5zb2x2ZVZlbG9jaXR5ID0gZnVuY3Rpb24ocGFpcnMsIHRpbWVTY2FsZSkge1xuICAgICAgICB2YXIgdGltZVNjYWxlU3F1YXJlZCA9IHRpbWVTY2FsZSAqIHRpbWVTY2FsZSxcbiAgICAgICAgICAgIHJlc3RpbmdUaHJlc2ggPSBSZXNvbHZlci5fcmVzdGluZ1RocmVzaCAqIHRpbWVTY2FsZVNxdWFyZWQsXG4gICAgICAgICAgICBmcmljdGlvbk5vcm1hbE11bHRpcGxpZXIgPSBSZXNvbHZlci5fZnJpY3Rpb25Ob3JtYWxNdWx0aXBsaWVyLFxuICAgICAgICAgICAgcmVzdGluZ1RocmVzaFRhbmdlbnQgPSBSZXNvbHZlci5fcmVzdGluZ1RocmVzaFRhbmdlbnQgKiB0aW1lU2NhbGVTcXVhcmVkLFxuICAgICAgICAgICAgTnVtYmVyTWF4VmFsdWUgPSBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICAgICAgcGFpcnNMZW5ndGggPSBwYWlycy5sZW5ndGgsXG4gICAgICAgICAgICB0YW5nZW50SW1wdWxzZSxcbiAgICAgICAgICAgIG1heEZyaWN0aW9uLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGo7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhaXJzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYWlyID0gcGFpcnNbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghcGFpci5pc0FjdGl2ZSB8fCBwYWlyLmlzU2Vuc29yKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgY29sbGlzaW9uID0gcGFpci5jb2xsaXNpb24sXG4gICAgICAgICAgICAgICAgYm9keUEgPSBjb2xsaXNpb24ucGFyZW50QSxcbiAgICAgICAgICAgICAgICBib2R5QiA9IGNvbGxpc2lvbi5wYXJlbnRCLFxuICAgICAgICAgICAgICAgIGJvZHlBVmVsb2NpdHkgPSBib2R5QS52ZWxvY2l0eSxcbiAgICAgICAgICAgICAgICBib2R5QlZlbG9jaXR5ID0gYm9keUIudmVsb2NpdHksXG4gICAgICAgICAgICAgICAgbm9ybWFsWCA9IGNvbGxpc2lvbi5ub3JtYWwueCxcbiAgICAgICAgICAgICAgICBub3JtYWxZID0gY29sbGlzaW9uLm5vcm1hbC55LFxuICAgICAgICAgICAgICAgIHRhbmdlbnRYID0gY29sbGlzaW9uLnRhbmdlbnQueCxcbiAgICAgICAgICAgICAgICB0YW5nZW50WSA9IGNvbGxpc2lvbi50YW5nZW50LnksXG4gICAgICAgICAgICAgICAgY29udGFjdHMgPSBwYWlyLmFjdGl2ZUNvbnRhY3RzLFxuICAgICAgICAgICAgICAgIGNvbnRhY3RzTGVuZ3RoID0gY29udGFjdHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGNvbnRhY3RTaGFyZSA9IDEgLyBjb250YWN0c0xlbmd0aCxcbiAgICAgICAgICAgICAgICBpbnZlcnNlTWFzc1RvdGFsID0gYm9keUEuaW52ZXJzZU1hc3MgKyBib2R5Qi5pbnZlcnNlTWFzcyxcbiAgICAgICAgICAgICAgICBmcmljdGlvbiA9IHBhaXIuZnJpY3Rpb24gKiBwYWlyLmZyaWN0aW9uU3RhdGljICogZnJpY3Rpb25Ob3JtYWxNdWx0aXBsaWVyICogdGltZVNjYWxlU3F1YXJlZDtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIGJvZHkgdmVsb2NpdGllc1xuICAgICAgICAgICAgYm9keUFWZWxvY2l0eS54ID0gYm9keUEucG9zaXRpb24ueCAtIGJvZHlBLnBvc2l0aW9uUHJldi54O1xuICAgICAgICAgICAgYm9keUFWZWxvY2l0eS55ID0gYm9keUEucG9zaXRpb24ueSAtIGJvZHlBLnBvc2l0aW9uUHJldi55O1xuICAgICAgICAgICAgYm9keUJWZWxvY2l0eS54ID0gYm9keUIucG9zaXRpb24ueCAtIGJvZHlCLnBvc2l0aW9uUHJldi54O1xuICAgICAgICAgICAgYm9keUJWZWxvY2l0eS55ID0gYm9keUIucG9zaXRpb24ueSAtIGJvZHlCLnBvc2l0aW9uUHJldi55O1xuICAgICAgICAgICAgYm9keUEuYW5ndWxhclZlbG9jaXR5ID0gYm9keUEuYW5nbGUgLSBib2R5QS5hbmdsZVByZXY7XG4gICAgICAgICAgICBib2R5Qi5hbmd1bGFyVmVsb2NpdHkgPSBib2R5Qi5hbmdsZSAtIGJvZHlCLmFuZ2xlUHJldjtcblxuICAgICAgICAgICAgLy8gcmVzb2x2ZSBlYWNoIGNvbnRhY3RcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBjb250YWN0c0xlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhY3QgPSBjb250YWN0c1tqXSxcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdFZlcnRleCA9IGNvbnRhY3QudmVydGV4O1xuXG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldEFYID0gY29udGFjdFZlcnRleC54IC0gYm9keUEucG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0QVkgPSBjb250YWN0VmVydGV4LnkgLSBib2R5QS5wb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRCWCA9IGNvbnRhY3RWZXJ0ZXgueCAtIGJvZHlCLnBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldEJZID0gY29udGFjdFZlcnRleC55IC0gYm9keUIucG9zaXRpb24ueTtcbiBcbiAgICAgICAgICAgICAgICB2YXIgdmVsb2NpdHlQb2ludEFYID0gYm9keUFWZWxvY2l0eS54IC0gb2Zmc2V0QVkgKiBib2R5QS5hbmd1bGFyVmVsb2NpdHksXG4gICAgICAgICAgICAgICAgICAgIHZlbG9jaXR5UG9pbnRBWSA9IGJvZHlBVmVsb2NpdHkueSArIG9mZnNldEFYICogYm9keUEuYW5ndWxhclZlbG9jaXR5LFxuICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0eVBvaW50QlggPSBib2R5QlZlbG9jaXR5LnggLSBvZmZzZXRCWSAqIGJvZHlCLmFuZ3VsYXJWZWxvY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgdmVsb2NpdHlQb2ludEJZID0gYm9keUJWZWxvY2l0eS55ICsgb2Zmc2V0QlggKiBib2R5Qi5hbmd1bGFyVmVsb2NpdHk7XG5cbiAgICAgICAgICAgICAgICB2YXIgcmVsYXRpdmVWZWxvY2l0eVggPSB2ZWxvY2l0eVBvaW50QVggLSB2ZWxvY2l0eVBvaW50QlgsXG4gICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlVmVsb2NpdHlZID0gdmVsb2NpdHlQb2ludEFZIC0gdmVsb2NpdHlQb2ludEJZO1xuXG4gICAgICAgICAgICAgICAgdmFyIG5vcm1hbFZlbG9jaXR5ID0gbm9ybWFsWCAqIHJlbGF0aXZlVmVsb2NpdHlYICsgbm9ybWFsWSAqIHJlbGF0aXZlVmVsb2NpdHlZLFxuICAgICAgICAgICAgICAgICAgICB0YW5nZW50VmVsb2NpdHkgPSB0YW5nZW50WCAqIHJlbGF0aXZlVmVsb2NpdHlYICsgdGFuZ2VudFkgKiByZWxhdGl2ZVZlbG9jaXR5WTtcblxuICAgICAgICAgICAgICAgIC8vIGNvdWxvbWIgZnJpY3Rpb25cbiAgICAgICAgICAgICAgICB2YXIgbm9ybWFsT3ZlcmxhcCA9IHBhaXIuc2VwYXJhdGlvbiArIG5vcm1hbFZlbG9jaXR5O1xuICAgICAgICAgICAgICAgIHZhciBub3JtYWxGb3JjZSA9IE1hdGgubWluKG5vcm1hbE92ZXJsYXAsIDEpO1xuICAgICAgICAgICAgICAgIG5vcm1hbEZvcmNlID0gbm9ybWFsT3ZlcmxhcCA8IDAgPyAwIDogbm9ybWFsRm9yY2U7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyIGZyaWN0aW9uTGltaXQgPSBub3JtYWxGb3JjZSAqIGZyaWN0aW9uO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRhbmdlbnRWZWxvY2l0eSA+IGZyaWN0aW9uTGltaXQgfHwgLXRhbmdlbnRWZWxvY2l0eSA+IGZyaWN0aW9uTGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4RnJpY3Rpb24gPSB0YW5nZW50VmVsb2NpdHkgPiAwID8gdGFuZ2VudFZlbG9jaXR5IDogLXRhbmdlbnRWZWxvY2l0eTtcbiAgICAgICAgICAgICAgICAgICAgdGFuZ2VudEltcHVsc2UgPSBwYWlyLmZyaWN0aW9uICogKHRhbmdlbnRWZWxvY2l0eSA+IDAgPyAxIDogLTEpICogdGltZVNjYWxlU3F1YXJlZDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YW5nZW50SW1wdWxzZSA8IC1tYXhGcmljdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFuZ2VudEltcHVsc2UgPSAtbWF4RnJpY3Rpb247XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFuZ2VudEltcHVsc2UgPiBtYXhGcmljdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFuZ2VudEltcHVsc2UgPSBtYXhGcmljdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhbmdlbnRJbXB1bHNlID0gdGFuZ2VudFZlbG9jaXR5O1xuICAgICAgICAgICAgICAgICAgICBtYXhGcmljdGlvbiA9IE51bWJlck1heFZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGFjY291bnQgZm9yIG1hc3MsIGluZXJ0aWEgYW5kIGNvbnRhY3Qgb2Zmc2V0XG4gICAgICAgICAgICAgICAgdmFyIG9BY04gPSBvZmZzZXRBWCAqIG5vcm1hbFkgLSBvZmZzZXRBWSAqIG5vcm1hbFgsXG4gICAgICAgICAgICAgICAgICAgIG9CY04gPSBvZmZzZXRCWCAqIG5vcm1hbFkgLSBvZmZzZXRCWSAqIG5vcm1hbFgsXG4gICAgICAgICAgICAgICAgICAgIHNoYXJlID0gY29udGFjdFNoYXJlIC8gKGludmVyc2VNYXNzVG90YWwgKyBib2R5QS5pbnZlcnNlSW5lcnRpYSAqIG9BY04gKiBvQWNOICsgYm9keUIuaW52ZXJzZUluZXJ0aWEgKiBvQmNOICogb0JjTik7XG5cbiAgICAgICAgICAgICAgICAvLyByYXcgaW1wdWxzZXNcbiAgICAgICAgICAgICAgICB2YXIgbm9ybWFsSW1wdWxzZSA9ICgxICsgcGFpci5yZXN0aXR1dGlvbikgKiBub3JtYWxWZWxvY2l0eSAqIHNoYXJlO1xuICAgICAgICAgICAgICAgIHRhbmdlbnRJbXB1bHNlICo9IHNoYXJlO1xuXG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIGhpZ2ggdmVsb2NpdHkgYW5kIHJlc3RpbmcgY29sbGlzaW9ucyBzZXBhcmF0ZWx5XG4gICAgICAgICAgICAgICAgaWYgKG5vcm1hbFZlbG9jaXR5ICogbm9ybWFsVmVsb2NpdHkgPiByZXN0aW5nVGhyZXNoICYmIG5vcm1hbFZlbG9jaXR5IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBoaWdoIG5vcm1hbCB2ZWxvY2l0eSBzbyBjbGVhciBjYWNoZWQgY29udGFjdCBub3JtYWwgaW1wdWxzZVxuICAgICAgICAgICAgICAgICAgICBjb250YWN0Lm5vcm1hbEltcHVsc2UgPSAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNvbHZlIHJlc3RpbmcgY29sbGlzaW9uIGNvbnN0cmFpbnRzIHVzaW5nIEVyaW4gQ2F0dG8ncyBtZXRob2QgKEdEQzA4KVxuICAgICAgICAgICAgICAgICAgICAvLyBpbXB1bHNlIGNvbnN0cmFpbnQgdGVuZHMgdG8gMFxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGFjdE5vcm1hbEltcHVsc2UgPSBjb250YWN0Lm5vcm1hbEltcHVsc2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3Qubm9ybWFsSW1wdWxzZSArPSBub3JtYWxJbXB1bHNlO1xuICAgICAgICAgICAgICAgICAgICBjb250YWN0Lm5vcm1hbEltcHVsc2UgPSBNYXRoLm1pbihjb250YWN0Lm5vcm1hbEltcHVsc2UsIDApO1xuICAgICAgICAgICAgICAgICAgICBub3JtYWxJbXB1bHNlID0gY29udGFjdC5ub3JtYWxJbXB1bHNlIC0gY29udGFjdE5vcm1hbEltcHVsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIGhpZ2ggdmVsb2NpdHkgYW5kIHJlc3RpbmcgY29sbGlzaW9ucyBzZXBhcmF0ZWx5XG4gICAgICAgICAgICAgICAgaWYgKHRhbmdlbnRWZWxvY2l0eSAqIHRhbmdlbnRWZWxvY2l0eSA+IHJlc3RpbmdUaHJlc2hUYW5nZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhpZ2ggdGFuZ2VudCB2ZWxvY2l0eSBzbyBjbGVhciBjYWNoZWQgY29udGFjdCB0YW5nZW50IGltcHVsc2VcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdC50YW5nZW50SW1wdWxzZSA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc29sdmUgcmVzdGluZyBjb2xsaXNpb24gY29uc3RyYWludHMgdXNpbmcgRXJpbiBDYXR0bydzIG1ldGhvZCAoR0RDMDgpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRhbmdlbnQgaW1wdWxzZSB0ZW5kcyB0byAtdGFuZ2VudFNwZWVkIG9yICt0YW5nZW50U3BlZWRcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRhY3RUYW5nZW50SW1wdWxzZSA9IGNvbnRhY3QudGFuZ2VudEltcHVsc2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3QudGFuZ2VudEltcHVsc2UgKz0gdGFuZ2VudEltcHVsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250YWN0LnRhbmdlbnRJbXB1bHNlIDwgLW1heEZyaWN0aW9uKSBjb250YWN0LnRhbmdlbnRJbXB1bHNlID0gLW1heEZyaWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGFjdC50YW5nZW50SW1wdWxzZSA+IG1heEZyaWN0aW9uKSBjb250YWN0LnRhbmdlbnRJbXB1bHNlID0gbWF4RnJpY3Rpb247XG4gICAgICAgICAgICAgICAgICAgIHRhbmdlbnRJbXB1bHNlID0gY29udGFjdC50YW5nZW50SW1wdWxzZSAtIGNvbnRhY3RUYW5nZW50SW1wdWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB0b3RhbCBpbXB1bHNlIGZyb20gY29udGFjdFxuICAgICAgICAgICAgICAgIHZhciBpbXB1bHNlWCA9IG5vcm1hbFggKiBub3JtYWxJbXB1bHNlICsgdGFuZ2VudFggKiB0YW5nZW50SW1wdWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaW1wdWxzZVkgPSBub3JtYWxZICogbm9ybWFsSW1wdWxzZSArIHRhbmdlbnRZICogdGFuZ2VudEltcHVsc2U7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gYXBwbHkgaW1wdWxzZSBmcm9tIGNvbnRhY3RcbiAgICAgICAgICAgICAgICBpZiAoIShib2R5QS5pc1N0YXRpYyB8fCBib2R5QS5pc1NsZWVwaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBib2R5QS5wb3NpdGlvblByZXYueCArPSBpbXB1bHNlWCAqIGJvZHlBLmludmVyc2VNYXNzO1xuICAgICAgICAgICAgICAgICAgICBib2R5QS5wb3NpdGlvblByZXYueSArPSBpbXB1bHNlWSAqIGJvZHlBLmludmVyc2VNYXNzO1xuICAgICAgICAgICAgICAgICAgICBib2R5QS5hbmdsZVByZXYgKz0gKG9mZnNldEFYICogaW1wdWxzZVkgLSBvZmZzZXRBWSAqIGltcHVsc2VYKSAqIGJvZHlBLmludmVyc2VJbmVydGlhO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghKGJvZHlCLmlzU3RhdGljIHx8IGJvZHlCLmlzU2xlZXBpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlCLnBvc2l0aW9uUHJldi54IC09IGltcHVsc2VYICogYm9keUIuaW52ZXJzZU1hc3M7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlCLnBvc2l0aW9uUHJldi55IC09IGltcHVsc2VZICogYm9keUIuaW52ZXJzZU1hc3M7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlCLmFuZ2xlUHJldiAtPSAob2Zmc2V0QlggKiBpbXB1bHNlWSAtIG9mZnNldEJZICogaW1wdWxzZVgpICogYm9keUIuaW52ZXJzZUluZXJ0aWE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDIwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5QYWlyc2AgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgY29sbGlzaW9uIHBhaXIgc2V0cy5cbipcbiogQGNsYXNzIFBhaXJzXG4qL1xuXG52YXIgUGFpcnMgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYWlycztcblxudmFyIFBhaXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgcGFpcnMgc3RydWN0dXJlLlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtwYWlyc30gQSBuZXcgcGFpcnMgc3RydWN0dXJlXG4gICAgICovXG4gICAgUGFpcnMuY3JlYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gQ29tbW9uLmV4dGVuZCh7IFxuICAgICAgICAgICAgdGFibGU6IHt9LFxuICAgICAgICAgICAgbGlzdDogW10sXG4gICAgICAgICAgICBjb2xsaXNpb25TdGFydDogW10sXG4gICAgICAgICAgICBjb2xsaXNpb25BY3RpdmU6IFtdLFxuICAgICAgICAgICAgY29sbGlzaW9uRW5kOiBbXVxuICAgICAgICB9LCBvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBwYWlycyBnaXZlbiBhIGxpc3Qgb2YgY29sbGlzaW9ucy5cbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwYWlyc1xuICAgICAqIEBwYXJhbSB7Y29sbGlzaW9uW119IGNvbGxpc2lvbnNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZXN0YW1wXG4gICAgICovXG4gICAgUGFpcnMudXBkYXRlID0gZnVuY3Rpb24ocGFpcnMsIGNvbGxpc2lvbnMsIHRpbWVzdGFtcCkge1xuICAgICAgICB2YXIgcGFpcnNMaXN0ID0gcGFpcnMubGlzdCxcbiAgICAgICAgICAgIHBhaXJzTGlzdExlbmd0aCA9IHBhaXJzTGlzdC5sZW5ndGgsXG4gICAgICAgICAgICBwYWlyc1RhYmxlID0gcGFpcnMudGFibGUsXG4gICAgICAgICAgICBjb2xsaXNpb25zTGVuZ3RoID0gY29sbGlzaW9ucy5sZW5ndGgsXG4gICAgICAgICAgICBjb2xsaXNpb25TdGFydCA9IHBhaXJzLmNvbGxpc2lvblN0YXJ0LFxuICAgICAgICAgICAgY29sbGlzaW9uRW5kID0gcGFpcnMuY29sbGlzaW9uRW5kLFxuICAgICAgICAgICAgY29sbGlzaW9uQWN0aXZlID0gcGFpcnMuY29sbGlzaW9uQWN0aXZlLFxuICAgICAgICAgICAgY29sbGlzaW9uLFxuICAgICAgICAgICAgcGFpckluZGV4LFxuICAgICAgICAgICAgcGFpcixcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgLy8gY2xlYXIgY29sbGlzaW9uIHN0YXRlIGFycmF5cywgYnV0IG1haW50YWluIG9sZCByZWZlcmVuY2VcbiAgICAgICAgY29sbGlzaW9uU3RhcnQubGVuZ3RoID0gMDtcbiAgICAgICAgY29sbGlzaW9uRW5kLmxlbmd0aCA9IDA7XG4gICAgICAgIGNvbGxpc2lvbkFjdGl2ZS5sZW5ndGggPSAwO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlyc0xpc3RMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFpcnNMaXN0W2ldLmNvbmZpcm1lZEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvbGxpc2lvbnNMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29sbGlzaW9uID0gY29sbGlzaW9uc1tpXTtcbiAgICAgICAgICAgIHBhaXIgPSBjb2xsaXNpb24ucGFpcjtcblxuICAgICAgICAgICAgaWYgKHBhaXIpIHtcbiAgICAgICAgICAgICAgICAvLyBwYWlyIGFscmVhZHkgZXhpc3RzIChidXQgbWF5IG9yIG1heSBub3QgYmUgYWN0aXZlKVxuICAgICAgICAgICAgICAgIGlmIChwYWlyLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhaXIgZXhpc3RzIGFuZCBpcyBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uQWN0aXZlLnB1c2gocGFpcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFpciBleGlzdHMgYnV0IHdhcyBpbmFjdGl2ZSwgc28gYSBjb2xsaXNpb24gaGFzIGp1c3Qgc3RhcnRlZCBhZ2FpblxuICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25TdGFydC5wdXNoKHBhaXIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgcGFpclxuICAgICAgICAgICAgICAgIFBhaXIudXBkYXRlKHBhaXIsIGNvbGxpc2lvbiwgdGltZXN0YW1wKTtcbiAgICAgICAgICAgICAgICBwYWlyLmNvbmZpcm1lZEFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHBhaXIgZGlkIG5vdCBleGlzdCwgY3JlYXRlIGEgbmV3IHBhaXJcbiAgICAgICAgICAgICAgICBwYWlyID0gUGFpci5jcmVhdGUoY29sbGlzaW9uLCB0aW1lc3RhbXApO1xuICAgICAgICAgICAgICAgIHBhaXJzVGFibGVbcGFpci5pZF0gPSBwYWlyO1xuXG4gICAgICAgICAgICAgICAgLy8gcHVzaCB0aGUgbmV3IHBhaXJcbiAgICAgICAgICAgICAgICBjb2xsaXNpb25TdGFydC5wdXNoKHBhaXIpO1xuICAgICAgICAgICAgICAgIHBhaXJzTGlzdC5wdXNoKHBhaXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmluZCBwYWlycyB0aGF0IGFyZSBubyBsb25nZXIgYWN0aXZlXG4gICAgICAgIHZhciByZW1vdmVQYWlySW5kZXggPSBbXTtcbiAgICAgICAgcGFpcnNMaXN0TGVuZ3RoID0gcGFpcnNMaXN0Lmxlbmd0aDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFpcnNMaXN0TGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhaXIgPSBwYWlyc0xpc3RbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghcGFpci5jb25maXJtZWRBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBQYWlyLnNldEFjdGl2ZShwYWlyLCBmYWxzZSwgdGltZXN0YW1wKTtcbiAgICAgICAgICAgICAgICBjb2xsaXNpb25FbmQucHVzaChwYWlyKTtcblxuICAgICAgICAgICAgICAgIGlmICghcGFpci5jb2xsaXNpb24uYm9keUEuaXNTbGVlcGluZyAmJiAhcGFpci5jb2xsaXNpb24uYm9keUIuaXNTbGVlcGluZykge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVQYWlySW5kZXgucHVzaChpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZW1vdmUgaW5hY3RpdmUgcGFpcnNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHJlbW92ZVBhaXJJbmRleC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFpckluZGV4ID0gcmVtb3ZlUGFpckluZGV4W2ldIC0gaTtcbiAgICAgICAgICAgIHBhaXIgPSBwYWlyc0xpc3RbcGFpckluZGV4XTtcbiAgICAgICAgICAgIHBhaXJzTGlzdC5zcGxpY2UocGFpckluZGV4LCAxKTtcbiAgICAgICAgICAgIGRlbGV0ZSBwYWlyc1RhYmxlW3BhaXIuaWRdO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgZ2l2ZW4gcGFpcnMgc3RydWN0dXJlLlxuICAgICAqIEBtZXRob2QgY2xlYXJcbiAgICAgKiBAcGFyYW0ge3BhaXJzfSBwYWlyc1xuICAgICAqIEByZXR1cm4ge3BhaXJzfSBwYWlyc1xuICAgICAqL1xuICAgIFBhaXJzLmNsZWFyID0gZnVuY3Rpb24ocGFpcnMpIHtcbiAgICAgICAgcGFpcnMudGFibGUgPSB7fTtcbiAgICAgICAgcGFpcnMubGlzdC5sZW5ndGggPSAwO1xuICAgICAgICBwYWlycy5jb2xsaXNpb25TdGFydC5sZW5ndGggPSAwO1xuICAgICAgICBwYWlycy5jb2xsaXNpb25BY3RpdmUubGVuZ3RoID0gMDtcbiAgICAgICAgcGFpcnMuY29sbGlzaW9uRW5kLmxlbmd0aCA9IDA7XG4gICAgICAgIHJldHVybiBwYWlycztcbiAgICB9O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMjEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIE1hdHRlciA9IG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMik7XHJcblxyXG5NYXR0ZXIuQXhlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xyXG5NYXR0ZXIuQm9kaWVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XHJcbk1hdHRlci5Cb2R5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcclxuTWF0dGVyLkJvdW5kcyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XHJcbk1hdHRlci5Db2xsaXNpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xyXG5NYXR0ZXIuQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcclxuTWF0dGVyLkNvbXBvc2l0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XHJcbk1hdHRlci5Db21wb3NpdGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMyk7XHJcbk1hdHRlci5Db25zdHJhaW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XHJcbk1hdHRlci5Db250YWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNyk7XHJcbk1hdHRlci5EZXRlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xyXG5NYXR0ZXIuRW5naW5lID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOCk7XHJcbk1hdHRlci5FdmVudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xyXG5NYXR0ZXIuR3JpZCA9IF9fd2VicGFja19yZXF1aXJlX18oMjQpO1xyXG5NYXR0ZXIuTW91c2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcclxuTWF0dGVyLk1vdXNlQ29uc3RyYWludCA9IF9fd2VicGFja19yZXF1aXJlX18oMjUpO1xyXG5NYXR0ZXIuUGFpciA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XHJcbk1hdHRlci5QYWlycyA9IF9fd2VicGFja19yZXF1aXJlX18oMjApO1xyXG5NYXR0ZXIuUGx1Z2luID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNSk7XHJcbk1hdHRlci5RdWVyeSA9IF9fd2VicGFja19yZXF1aXJlX18oMjYpO1xyXG5NYXR0ZXIuUmVuZGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNik7XHJcbk1hdHRlci5SZXNvbHZlciA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpO1xyXG5NYXR0ZXIuUnVubmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNyk7XHJcbk1hdHRlci5TQVQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI4KTtcclxuTWF0dGVyLlNsZWVwaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcclxuTWF0dGVyLlN2ZyA9IF9fd2VicGFja19yZXF1aXJlX18oMjkpO1xyXG5NYXR0ZXIuVmVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcclxuTWF0dGVyLlZlcnRpY2VzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcclxuTWF0dGVyLldvcmxkID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMCk7XHJcblxyXG4vLyB0ZW1wb3JhcnkgYmFjayBjb21wYXRpYmlsaXR5XHJcbk1hdHRlci5FbmdpbmUucnVuID0gTWF0dGVyLlJ1bm5lci5ydW47XHJcbk1hdHRlci5Db21tb24uZGVwcmVjYXRlZChNYXR0ZXIuRW5naW5lLCAncnVuJywgJ0VuZ2luZS5ydW4g4p6kIHVzZSBNYXR0ZXIuUnVubmVyLnJ1bihlbmdpbmUpIGluc3RlYWQnKTtcclxuXG5cbi8qKiovIH0pLFxuLyogMjIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXHJcbiogVGhlIGBNYXR0ZXJgIG1vZHVsZSBpcyB0aGUgdG9wIGxldmVsIG5hbWVzcGFjZS4gSXQgYWxzbyBpbmNsdWRlcyBhIGZ1bmN0aW9uIGZvciBpbnN0YWxsaW5nIHBsdWdpbnMgb24gdG9wIG9mIHRoZSBsaWJyYXJ5LlxyXG4qXHJcbiogQGNsYXNzIE1hdHRlclxyXG4qL1xyXG5cclxudmFyIE1hdHRlciA9IHt9O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBNYXR0ZXI7XHJcblxyXG52YXIgUGx1Z2luID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNSk7XHJcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGxpYnJhcnkgbmFtZS5cclxuICAgICAqIEBwcm9wZXJ0eSBuYW1lXHJcbiAgICAgKiBAcmVhZE9ubHlcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIE1hdHRlci5uYW1lID0gJ21hdHRlci1qcyc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbGlicmFyeSB2ZXJzaW9uLlxyXG4gICAgICogQHByb3BlcnR5IHZlcnNpb25cclxuICAgICAqIEByZWFkT25seVxyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqL1xyXG4gICAgTWF0dGVyLnZlcnNpb24gPSAgdHJ1ZSA/IFwiMC4xOC4wXCIgOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIGxpc3Qgb2YgcGx1Z2luIGRlcGVuZGVuY2llcyB0byBiZSBpbnN0YWxsZWQuIFRoZXNlIGFyZSBub3JtYWxseSBzZXQgYW5kIGluc3RhbGxlZCB0aHJvdWdoIGBNYXR0ZXIudXNlYC5cclxuICAgICAqIEFsdGVybmF0aXZlbHkgeW91IG1heSBzZXQgYE1hdHRlci51c2VzYCBtYW51YWxseSBhbmQgaW5zdGFsbCB0aGVtIGJ5IGNhbGxpbmcgYFBsdWdpbi51c2UoTWF0dGVyKWAuXHJcbiAgICAgKiBAcHJvcGVydHkgdXNlc1xyXG4gICAgICogQHR5cGUge0FycmF5fVxyXG4gICAgICovXHJcbiAgICBNYXR0ZXIudXNlcyA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHBsdWdpbnMgdGhhdCBoYXZlIGJlZW4gaW5zdGFsbGVkIHRocm91Z2ggYE1hdHRlci5QbHVnaW4uaW5zdGFsbGAuIFJlYWQgb25seS5cclxuICAgICAqIEBwcm9wZXJ0eSB1c2VkXHJcbiAgICAgKiBAcmVhZE9ubHlcclxuICAgICAqIEB0eXBlIHtBcnJheX1cclxuICAgICAqL1xyXG4gICAgTWF0dGVyLnVzZWQgPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluc3RhbGxzIHRoZSBnaXZlbiBwbHVnaW5zIG9uIHRoZSBgTWF0dGVyYCBuYW1lc3BhY2UuXHJcbiAgICAgKiBUaGlzIGlzIGEgc2hvcnQtaGFuZCBmb3IgYFBsdWdpbi51c2VgLCBzZWUgaXQgZm9yIG1vcmUgaW5mb3JtYXRpb24uXHJcbiAgICAgKiBDYWxsIHRoaXMgZnVuY3Rpb24gb25jZSBhdCB0aGUgc3RhcnQgb2YgeW91ciBjb2RlLCB3aXRoIGFsbCBvZiB0aGUgcGx1Z2lucyB5b3Ugd2lzaCB0byBpbnN0YWxsIGFzIGFyZ3VtZW50cy5cclxuICAgICAqIEF2b2lkIGNhbGxpbmcgdGhpcyBmdW5jdGlvbiBtdWx0aXBsZSB0aW1lcyB1bmxlc3MgeW91IGludGVuZCB0byBtYW51YWxseSBjb250cm9sIGluc3RhbGxhdGlvbiBvcmRlci5cclxuICAgICAqIEBtZXRob2QgdXNlXHJcbiAgICAgKiBAcGFyYW0gLi4ucGx1Z2luIHtGdW5jdGlvbn0gVGhlIHBsdWdpbihzKSB0byBpbnN0YWxsIG9uIGBiYXNlYCAobXVsdGktYXJndW1lbnQpLlxyXG4gICAgICovXHJcbiAgICBNYXR0ZXIudXNlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgUGx1Z2luLnVzZShNYXR0ZXIsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENoYWlucyBhIGZ1bmN0aW9uIHRvIGV4Y3V0ZSBiZWZvcmUgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIG9uIHRoZSBnaXZlbiBgcGF0aGAgcmVsYXRpdmUgdG8gYE1hdHRlcmAuXHJcbiAgICAgKiBTZWUgYWxzbyBkb2NzIGZvciBgQ29tbW9uLmNoYWluYC5cclxuICAgICAqIEBtZXRob2QgYmVmb3JlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCByZWxhdGl2ZSB0byBgTWF0dGVyYFxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hhaW4gYmVmb3JlIHRoZSBvcmlnaW5hbFxyXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb259IFRoZSBjaGFpbmVkIGZ1bmN0aW9uIHRoYXQgcmVwbGFjZWQgdGhlIG9yaWdpbmFsXHJcbiAgICAgKi9cclxuICAgIE1hdHRlci5iZWZvcmUgPSBmdW5jdGlvbihwYXRoLCBmdW5jKSB7XHJcbiAgICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXk1hdHRlci4vLCAnJyk7XHJcbiAgICAgICAgcmV0dXJuIENvbW1vbi5jaGFpblBhdGhCZWZvcmUoTWF0dGVyLCBwYXRoLCBmdW5jKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGFpbnMgYSBmdW5jdGlvbiB0byBleGN1dGUgYWZ0ZXIgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIG9uIHRoZSBnaXZlbiBgcGF0aGAgcmVsYXRpdmUgdG8gYE1hdHRlcmAuXHJcbiAgICAgKiBTZWUgYWxzbyBkb2NzIGZvciBgQ29tbW9uLmNoYWluYC5cclxuICAgICAqIEBtZXRob2QgYWZ0ZXJcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHJlbGF0aXZlIHRvIGBNYXR0ZXJgXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGFpbiBhZnRlciB0aGUgb3JpZ2luYWxcclxuICAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBUaGUgY2hhaW5lZCBmdW5jdGlvbiB0aGF0IHJlcGxhY2VkIHRoZSBvcmlnaW5hbFxyXG4gICAgICovXHJcbiAgICBNYXR0ZXIuYWZ0ZXIgPSBmdW5jdGlvbihwYXRoLCBmdW5jKSB7XHJcbiAgICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXk1hdHRlci4vLCAnJyk7XHJcbiAgICAgICAgcmV0dXJuIENvbW1vbi5jaGFpblBhdGhBZnRlcihNYXR0ZXIsIHBhdGgsIGZ1bmMpO1xyXG4gICAgfTtcclxuXHJcbn0pKCk7XHJcblxuXG4vKioqLyB9KSxcbi8qIDIzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5Db21wb3NpdGVzYCBtb2R1bGUgY29udGFpbnMgZmFjdG9yeSBtZXRob2RzIGZvciBjcmVhdGluZyBjb21wb3NpdGUgYm9kaWVzXG4qIHdpdGggY29tbW9ubHkgdXNlZCBjb25maWd1cmF0aW9ucyAoc3VjaCBhcyBzdGFja3MgYW5kIGNoYWlucykuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBDb21wb3NpdGVzXG4qL1xuXG52YXIgQ29tcG9zaXRlcyA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvc2l0ZXM7XG5cbnZhciBDb21wb3NpdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xudmFyIENvbnN0cmFpbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xudmFyIEJvZHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xudmFyIEJvZGllcyA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xudmFyIGRlcHJlY2F0ZWQgPSBDb21tb24uZGVwcmVjYXRlZDtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGNvbXBvc2l0ZSBjb250YWluaW5nIGJvZGllcyBjcmVhdGVkIGluIHRoZSBjYWxsYmFjayBpbiBhIGdyaWQgYXJyYW5nZW1lbnQuXG4gICAgICogVGhpcyBmdW5jdGlvbiB1c2VzIHRoZSBib2R5J3MgYm91bmRzIHRvIHByZXZlbnQgb3ZlcmxhcHMuXG4gICAgICogQG1ldGhvZCBzdGFja1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4eFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5eVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5zXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd3NcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uR2FwXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd0dhcFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBBIG5ldyBjb21wb3NpdGUgY29udGFpbmluZyBvYmplY3RzIGNyZWF0ZWQgaW4gdGhlIGNhbGxiYWNrXG4gICAgICovXG4gICAgQ29tcG9zaXRlcy5zdGFjayA9IGZ1bmN0aW9uKHh4LCB5eSwgY29sdW1ucywgcm93cywgY29sdW1uR2FwLCByb3dHYXAsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzdGFjayA9IENvbXBvc2l0ZS5jcmVhdGUoeyBsYWJlbDogJ1N0YWNrJyB9KSxcbiAgICAgICAgICAgIHggPSB4eCxcbiAgICAgICAgICAgIHkgPSB5eSxcbiAgICAgICAgICAgIGxhc3RCb2R5LFxuICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgcm93czsgcm93KyspIHtcbiAgICAgICAgICAgIHZhciBtYXhIZWlnaHQgPSAwO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKHZhciBjb2x1bW4gPSAwOyBjb2x1bW4gPCBjb2x1bW5zOyBjb2x1bW4rKykge1xuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gY2FsbGJhY2soeCwgeSwgY29sdW1uLCByb3csIGxhc3RCb2R5LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJvZHlIZWlnaHQgPSBib2R5LmJvdW5kcy5tYXgueSAtIGJvZHkuYm91bmRzLm1pbi55LFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keVdpZHRoID0gYm9keS5ib3VuZHMubWF4LnggLSBib2R5LmJvdW5kcy5taW4ueDsgXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvZHlIZWlnaHQgPiBtYXhIZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQgPSBib2R5SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgQm9keS50cmFuc2xhdGUoYm9keSwgeyB4OiBib2R5V2lkdGggKiAwLjUsIHk6IGJvZHlIZWlnaHQgKiAwLjUgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgeCA9IGJvZHkuYm91bmRzLm1heC54ICsgY29sdW1uR2FwO1xuXG4gICAgICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRCb2R5KHN0YWNrLCBib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxhc3RCb2R5ID0gYm9keTtcbiAgICAgICAgICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHggKz0gY29sdW1uR2FwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgeSArPSBtYXhIZWlnaHQgKyByb3dHYXA7XG4gICAgICAgICAgICB4ID0geHg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhY2s7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBDaGFpbnMgYWxsIGJvZGllcyBpbiB0aGUgZ2l2ZW4gY29tcG9zaXRlIHRvZ2V0aGVyIHVzaW5nIGNvbnN0cmFpbnRzLlxuICAgICAqIEBtZXRob2QgY2hhaW5cbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhPZmZzZXRBXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlPZmZzZXRBXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhPZmZzZXRCXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlPZmZzZXRCXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IEEgbmV3IGNvbXBvc2l0ZSBjb250YWluaW5nIG9iamVjdHMgY2hhaW5lZCB0b2dldGhlciB3aXRoIGNvbnN0cmFpbnRzXG4gICAgICovXG4gICAgQ29tcG9zaXRlcy5jaGFpbiA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgeE9mZnNldEEsIHlPZmZzZXRBLCB4T2Zmc2V0QiwgeU9mZnNldEIsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGJvZGllcyA9IGNvbXBvc2l0ZS5ib2RpZXM7XG4gICAgICAgIFxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHlBID0gYm9kaWVzW2kgLSAxXSxcbiAgICAgICAgICAgICAgICBib2R5QiA9IGJvZGllc1tpXSxcbiAgICAgICAgICAgICAgICBib2R5QUhlaWdodCA9IGJvZHlBLmJvdW5kcy5tYXgueSAtIGJvZHlBLmJvdW5kcy5taW4ueSxcbiAgICAgICAgICAgICAgICBib2R5QVdpZHRoID0gYm9keUEuYm91bmRzLm1heC54IC0gYm9keUEuYm91bmRzLm1pbi54LCBcbiAgICAgICAgICAgICAgICBib2R5QkhlaWdodCA9IGJvZHlCLmJvdW5kcy5tYXgueSAtIGJvZHlCLmJvdW5kcy5taW4ueSxcbiAgICAgICAgICAgICAgICBib2R5QldpZHRoID0gYm9keUIuYm91bmRzLm1heC54IC0gYm9keUIuYm91bmRzLm1pbi54O1xuICAgICAgICBcbiAgICAgICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgICAgICBib2R5QTogYm9keUEsXG4gICAgICAgICAgICAgICAgcG9pbnRBOiB7IHg6IGJvZHlBV2lkdGggKiB4T2Zmc2V0QSwgeTogYm9keUFIZWlnaHQgKiB5T2Zmc2V0QSB9LFxuICAgICAgICAgICAgICAgIGJvZHlCOiBib2R5QixcbiAgICAgICAgICAgICAgICBwb2ludEI6IHsgeDogYm9keUJXaWR0aCAqIHhPZmZzZXRCLCB5OiBib2R5QkhlaWdodCAqIHlPZmZzZXRCIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBjb25zdHJhaW50ID0gQ29tbW9uLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAgIFxuICAgICAgICAgICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQoY29tcG9zaXRlLCBDb25zdHJhaW50LmNyZWF0ZShjb25zdHJhaW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb3NpdGUubGFiZWwgKz0gJyBDaGFpbic7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDb25uZWN0cyBib2RpZXMgaW4gdGhlIGNvbXBvc2l0ZSB3aXRoIGNvbnN0cmFpbnRzIGluIGEgZ3JpZCBwYXR0ZXJuLCB3aXRoIG9wdGlvbmFsIGNyb3NzIGJyYWNlcy5cbiAgICAgKiBAbWV0aG9kIG1lc2hcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbnNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93c1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gY3Jvc3NCcmFjZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgY29tcG9zaXRlIGNvbnRhaW5pbmcgb2JqZWN0cyBtZXNoZWQgdG9nZXRoZXIgd2l0aCBjb25zdHJhaW50c1xuICAgICAqL1xuICAgIENvbXBvc2l0ZXMubWVzaCA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgY29sdW1ucywgcm93cywgY3Jvc3NCcmFjZSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgYm9kaWVzID0gY29tcG9zaXRlLmJvZGllcyxcbiAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgIGNvbCxcbiAgICAgICAgICAgIGJvZHlBLFxuICAgICAgICAgICAgYm9keUIsXG4gICAgICAgICAgICBib2R5QztcbiAgICAgICAgXG4gICAgICAgIGZvciAocm93ID0gMDsgcm93IDwgcm93czsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAoY29sID0gMTsgY29sIDwgY29sdW1uczsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBib2R5QSA9IGJvZGllc1soY29sIC0gMSkgKyAocm93ICogY29sdW1ucyldO1xuICAgICAgICAgICAgICAgIGJvZHlCID0gYm9kaWVzW2NvbCArIChyb3cgKiBjb2x1bW5zKV07XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQoY29tcG9zaXRlLCBDb25zdHJhaW50LmNyZWF0ZShDb21tb24uZXh0ZW5kKHsgYm9keUE6IGJvZHlBLCBib2R5QjogYm9keUIgfSwgb3B0aW9ucykpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJvdyA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbCA9IDA7IGNvbCA8IGNvbHVtbnM7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlBID0gYm9kaWVzW2NvbCArICgocm93IC0gMSkgKiBjb2x1bW5zKV07XG4gICAgICAgICAgICAgICAgICAgIGJvZHlCID0gYm9kaWVzW2NvbCArIChyb3cgKiBjb2x1bW5zKV07XG4gICAgICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50KGNvbXBvc2l0ZSwgQ29uc3RyYWludC5jcmVhdGUoQ29tbW9uLmV4dGVuZCh7IGJvZHlBOiBib2R5QSwgYm9keUI6IGJvZHlCIH0sIG9wdGlvbnMpKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNyb3NzQnJhY2UgJiYgY29sID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keUMgPSBib2RpZXNbKGNvbCAtIDEpICsgKChyb3cgLSAxKSAqIGNvbHVtbnMpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50KGNvbXBvc2l0ZSwgQ29uc3RyYWludC5jcmVhdGUoQ29tbW9uLmV4dGVuZCh7IGJvZHlBOiBib2R5QywgYm9keUI6IGJvZHlCIH0sIG9wdGlvbnMpKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY3Jvc3NCcmFjZSAmJiBjb2wgPCBjb2x1bW5zIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keUMgPSBib2RpZXNbKGNvbCArIDEpICsgKChyb3cgLSAxKSAqIGNvbHVtbnMpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50KGNvbXBvc2l0ZSwgQ29uc3RyYWludC5jcmVhdGUoQ29tbW9uLmV4dGVuZCh7IGJvZHlBOiBib2R5QywgYm9keUI6IGJvZHlCIH0sIG9wdGlvbnMpKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb3NpdGUubGFiZWwgKz0gJyBNZXNoJztcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgY29tcG9zaXRlIGNvbnRhaW5pbmcgYm9kaWVzIGNyZWF0ZWQgaW4gdGhlIGNhbGxiYWNrIGluIGEgcHlyYW1pZCBhcnJhbmdlbWVudC5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHVzZXMgdGhlIGJvZHkncyBib3VuZHMgdG8gcHJldmVudCBvdmVybGFwcy5cbiAgICAgKiBAbWV0aG9kIHB5cmFtaWRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geXlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbkdhcFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dHYXBcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gQSBuZXcgY29tcG9zaXRlIGNvbnRhaW5pbmcgb2JqZWN0cyBjcmVhdGVkIGluIHRoZSBjYWxsYmFja1xuICAgICAqL1xuICAgIENvbXBvc2l0ZXMucHlyYW1pZCA9IGZ1bmN0aW9uKHh4LCB5eSwgY29sdW1ucywgcm93cywgY29sdW1uR2FwLCByb3dHYXAsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBDb21wb3NpdGVzLnN0YWNrKHh4LCB5eSwgY29sdW1ucywgcm93cywgY29sdW1uR2FwLCByb3dHYXAsIGZ1bmN0aW9uKHgsIHksIGNvbHVtbiwgcm93LCBsYXN0Qm9keSwgaSkge1xuICAgICAgICAgICAgdmFyIGFjdHVhbFJvd3MgPSBNYXRoLm1pbihyb3dzLCBNYXRoLmNlaWwoY29sdW1ucyAvIDIpKSxcbiAgICAgICAgICAgICAgICBsYXN0Qm9keVdpZHRoID0gbGFzdEJvZHkgPyBsYXN0Qm9keS5ib3VuZHMubWF4LnggLSBsYXN0Qm9keS5ib3VuZHMubWluLnggOiAwO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocm93ID4gYWN0dWFsUm93cylcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHJldmVyc2Ugcm93IG9yZGVyXG4gICAgICAgICAgICByb3cgPSBhY3R1YWxSb3dzIC0gcm93O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgc3RhcnQgPSByb3csXG4gICAgICAgICAgICAgICAgZW5kID0gY29sdW1ucyAtIDEgLSByb3c7XG5cbiAgICAgICAgICAgIGlmIChjb2x1bW4gPCBzdGFydCB8fCBjb2x1bW4gPiBlbmQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyByZXRyb2FjdGl2ZWx5IGZpeCB0aGUgZmlyc3QgYm9keSdzIHBvc2l0aW9uLCBzaW5jZSB3aWR0aCB3YXMgdW5rbm93blxuICAgICAgICAgICAgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBCb2R5LnRyYW5zbGF0ZShsYXN0Qm9keSwgeyB4OiAoY29sdW1uICsgKGNvbHVtbnMgJSAyID09PSAxID8gMSA6IC0xKSkgKiBsYXN0Qm9keVdpZHRoLCB5OiAwIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgeE9mZnNldCA9IGxhc3RCb2R5ID8gY29sdW1uICogbGFzdEJvZHlXaWR0aCA6IDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayh4eCArIHhPZmZzZXQgKyBjb2x1bW4gKiBjb2x1bW5HYXAsIHksIGNvbHVtbiwgcm93LCBsYXN0Qm9keSwgaSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGhhcyBub3cgbW92ZWQgdG8gdGhlIFtuZXd0b25zQ3JhZGxlIGV4YW1wbGVdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL2Jsb2IvbWFzdGVyL2V4YW1wbGVzL25ld3RvbnNDcmFkbGUuanMpLCBmb2xsb3cgdGhhdCBpbnN0ZWFkIGFzIHRoaXMgZnVuY3Rpb24gaXMgZGVwcmVjYXRlZCBoZXJlLlxuICAgICAqIEBkZXByZWNhdGVkIG1vdmVkIHRvIG5ld3RvbnNDcmFkbGUgZXhhbXBsZVxuICAgICAqIEBtZXRob2QgbmV3dG9uc0NyYWRsZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4eFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5eVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IEEgbmV3IGNvbXBvc2l0ZSBuZXd0b25zQ3JhZGxlIGJvZHlcbiAgICAgKi9cbiAgICBDb21wb3NpdGVzLm5ld3RvbnNDcmFkbGUgPSBmdW5jdGlvbih4eCwgeXksIG51bWJlciwgc2l6ZSwgbGVuZ3RoKSB7XG4gICAgICAgIHZhciBuZXd0b25zQ3JhZGxlID0gQ29tcG9zaXRlLmNyZWF0ZSh7IGxhYmVsOiAnTmV3dG9ucyBDcmFkbGUnIH0pO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBzZXBhcmF0aW9uID0gMS45LFxuICAgICAgICAgICAgICAgIGNpcmNsZSA9IEJvZGllcy5jaXJjbGUoeHggKyBpICogKHNpemUgKiBzZXBhcmF0aW9uKSwgeXkgKyBsZW5ndGgsIHNpemUsIFxuICAgICAgICAgICAgICAgICAgICB7IGluZXJ0aWE6IEluZmluaXR5LCByZXN0aXR1dGlvbjogMSwgZnJpY3Rpb246IDAsIGZyaWN0aW9uQWlyOiAwLjAwMDEsIHNsb3A6IDEgfSksXG4gICAgICAgICAgICAgICAgY29uc3RyYWludCA9IENvbnN0cmFpbnQuY3JlYXRlKHsgcG9pbnRBOiB7IHg6IHh4ICsgaSAqIChzaXplICogc2VwYXJhdGlvbiksIHk6IHl5IH0sIGJvZHlCOiBjaXJjbGUgfSk7XG5cbiAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRCb2R5KG5ld3RvbnNDcmFkbGUsIGNpcmNsZSk7XG4gICAgICAgICAgICBDb21wb3NpdGUuYWRkQ29uc3RyYWludChuZXd0b25zQ3JhZGxlLCBjb25zdHJhaW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXd0b25zQ3JhZGxlO1xuICAgIH07XG5cbiAgICBkZXByZWNhdGVkKENvbXBvc2l0ZXMsICduZXd0b25zQ3JhZGxlJywgJ0NvbXBvc2l0ZXMubmV3dG9uc0NyYWRsZSDinqQgbW92ZWQgdG8gbmV3dG9uc0NyYWRsZSBleGFtcGxlJyk7XG4gICAgXG4gICAgLyoqXG4gICAgICogVGhpcyBoYXMgbm93IG1vdmVkIHRvIHRoZSBbY2FyIGV4YW1wbGVdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL2Jsb2IvbWFzdGVyL2V4YW1wbGVzL2Nhci5qcyksIGZvbGxvdyB0aGF0IGluc3RlYWQgYXMgdGhpcyBmdW5jdGlvbiBpcyBkZXByZWNhdGVkIGhlcmUuXG4gICAgICogQGRlcHJlY2F0ZWQgbW92ZWQgdG8gY2FyIGV4YW1wbGVcbiAgICAgKiBAbWV0aG9kIGNhclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4eFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5eVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2hlZWxTaXplXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBBIG5ldyBjb21wb3NpdGUgY2FyIGJvZHlcbiAgICAgKi9cbiAgICBDb21wb3NpdGVzLmNhciA9IGZ1bmN0aW9uKHh4LCB5eSwgd2lkdGgsIGhlaWdodCwgd2hlZWxTaXplKSB7XG4gICAgICAgIHZhciBncm91cCA9IEJvZHkubmV4dEdyb3VwKHRydWUpLFxuICAgICAgICAgICAgd2hlZWxCYXNlID0gMjAsXG4gICAgICAgICAgICB3aGVlbEFPZmZzZXQgPSAtd2lkdGggKiAwLjUgKyB3aGVlbEJhc2UsXG4gICAgICAgICAgICB3aGVlbEJPZmZzZXQgPSB3aWR0aCAqIDAuNSAtIHdoZWVsQmFzZSxcbiAgICAgICAgICAgIHdoZWVsWU9mZnNldCA9IDA7XG4gICAgXG4gICAgICAgIHZhciBjYXIgPSBDb21wb3NpdGUuY3JlYXRlKHsgbGFiZWw6ICdDYXInIH0pLFxuICAgICAgICAgICAgYm9keSA9IEJvZGllcy5yZWN0YW5nbGUoeHgsIHl5LCB3aWR0aCwgaGVpZ2h0LCB7IFxuICAgICAgICAgICAgICAgIGNvbGxpc2lvbkZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICBncm91cDogZ3JvdXBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNoYW1mZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiBoZWlnaHQgKiAwLjVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlbnNpdHk6IDAuMDAwMlxuICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIHZhciB3aGVlbEEgPSBCb2RpZXMuY2lyY2xlKHh4ICsgd2hlZWxBT2Zmc2V0LCB5eSArIHdoZWVsWU9mZnNldCwgd2hlZWxTaXplLCB7IFxuICAgICAgICAgICAgY29sbGlzaW9uRmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgZ3JvdXA6IGdyb3VwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnJpY3Rpb246IDAuOFxuICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHZhciB3aGVlbEIgPSBCb2RpZXMuY2lyY2xlKHh4ICsgd2hlZWxCT2Zmc2V0LCB5eSArIHdoZWVsWU9mZnNldCwgd2hlZWxTaXplLCB7IFxuICAgICAgICAgICAgY29sbGlzaW9uRmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgZ3JvdXA6IGdyb3VwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnJpY3Rpb246IDAuOFxuICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHZhciBheGVsQSA9IENvbnN0cmFpbnQuY3JlYXRlKHtcbiAgICAgICAgICAgIGJvZHlCOiBib2R5LFxuICAgICAgICAgICAgcG9pbnRCOiB7IHg6IHdoZWVsQU9mZnNldCwgeTogd2hlZWxZT2Zmc2V0IH0sXG4gICAgICAgICAgICBib2R5QTogd2hlZWxBLFxuICAgICAgICAgICAgc3RpZmZuZXNzOiAxLFxuICAgICAgICAgICAgbGVuZ3RoOiAwXG4gICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHZhciBheGVsQiA9IENvbnN0cmFpbnQuY3JlYXRlKHtcbiAgICAgICAgICAgIGJvZHlCOiBib2R5LFxuICAgICAgICAgICAgcG9pbnRCOiB7IHg6IHdoZWVsQk9mZnNldCwgeTogd2hlZWxZT2Zmc2V0IH0sXG4gICAgICAgICAgICBib2R5QTogd2hlZWxCLFxuICAgICAgICAgICAgc3RpZmZuZXNzOiAxLFxuICAgICAgICAgICAgbGVuZ3RoOiAwXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgQ29tcG9zaXRlLmFkZEJvZHkoY2FyLCBib2R5KTtcbiAgICAgICAgQ29tcG9zaXRlLmFkZEJvZHkoY2FyLCB3aGVlbEEpO1xuICAgICAgICBDb21wb3NpdGUuYWRkQm9keShjYXIsIHdoZWVsQik7XG4gICAgICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50KGNhciwgYXhlbEEpO1xuICAgICAgICBDb21wb3NpdGUuYWRkQ29uc3RyYWludChjYXIsIGF4ZWxCKTtcblxuICAgICAgICByZXR1cm4gY2FyO1xuICAgIH07XG5cbiAgICBkZXByZWNhdGVkKENvbXBvc2l0ZXMsICdjYXInLCAnQ29tcG9zaXRlcy5jYXIg4p6kIG1vdmVkIHRvIGNhciBleGFtcGxlJyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGhhcyBub3cgbW92ZWQgdG8gdGhlIFtzb2Z0Qm9keSBleGFtcGxlXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy9ibG9iL21hc3Rlci9leGFtcGxlcy9zb2Z0Qm9keS5qcylcbiAgICAgKiBhbmQgdGhlIFtjbG90aCBleGFtcGxlXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy9ibG9iL21hc3Rlci9leGFtcGxlcy9jbG90aC5qcyksIGZvbGxvdyB0aG9zZSBpbnN0ZWFkIGFzIHRoaXMgZnVuY3Rpb24gaXMgZGVwcmVjYXRlZCBoZXJlLlxuICAgICAqIEBkZXByZWNhdGVkIG1vdmVkIHRvIHNvZnRCb2R5IGFuZCBjbG90aCBleGFtcGxlc1xuICAgICAqIEBtZXRob2Qgc29mdEJvZHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geXlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbkdhcFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dHYXBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNyb3NzQnJhY2VcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGFydGljbGVSYWRpdXNcbiAgICAgKiBAcGFyYW0ge30gcGFydGljbGVPcHRpb25zXG4gICAgICogQHBhcmFtIHt9IGNvbnN0cmFpbnRPcHRpb25zXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBBIG5ldyBjb21wb3NpdGUgc29mdEJvZHlcbiAgICAgKi9cbiAgICBDb21wb3NpdGVzLnNvZnRCb2R5ID0gZnVuY3Rpb24oeHgsIHl5LCBjb2x1bW5zLCByb3dzLCBjb2x1bW5HYXAsIHJvd0dhcCwgY3Jvc3NCcmFjZSwgcGFydGljbGVSYWRpdXMsIHBhcnRpY2xlT3B0aW9ucywgY29uc3RyYWludE9wdGlvbnMpIHtcbiAgICAgICAgcGFydGljbGVPcHRpb25zID0gQ29tbW9uLmV4dGVuZCh7IGluZXJ0aWE6IEluZmluaXR5IH0sIHBhcnRpY2xlT3B0aW9ucyk7XG4gICAgICAgIGNvbnN0cmFpbnRPcHRpb25zID0gQ29tbW9uLmV4dGVuZCh7IHN0aWZmbmVzczogMC4yLCByZW5kZXI6IHsgdHlwZTogJ2xpbmUnLCBhbmNob3JzOiBmYWxzZSB9IH0sIGNvbnN0cmFpbnRPcHRpb25zKTtcblxuICAgICAgICB2YXIgc29mdEJvZHkgPSBDb21wb3NpdGVzLnN0YWNrKHh4LCB5eSwgY29sdW1ucywgcm93cywgY29sdW1uR2FwLCByb3dHYXAsIGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgICAgICAgIHJldHVybiBCb2RpZXMuY2lyY2xlKHgsIHksIHBhcnRpY2xlUmFkaXVzLCBwYXJ0aWNsZU9wdGlvbnMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBDb21wb3NpdGVzLm1lc2goc29mdEJvZHksIGNvbHVtbnMsIHJvd3MsIGNyb3NzQnJhY2UsIGNvbnN0cmFpbnRPcHRpb25zKTtcblxuICAgICAgICBzb2Z0Qm9keS5sYWJlbCA9ICdTb2Z0IEJvZHknO1xuXG4gICAgICAgIHJldHVybiBzb2Z0Qm9keTtcbiAgICB9O1xuXG4gICAgZGVwcmVjYXRlZChDb21wb3NpdGVzLCAnc29mdEJvZHknLCAnQ29tcG9zaXRlcy5zb2Z0Qm9keSDinqQgbW92ZWQgdG8gc29mdEJvZHkgYW5kIGNsb3RoIGV4YW1wbGVzJyk7XG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMjQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoaXMgbW9kdWxlIGhhcyBub3cgYmVlbiByZXBsYWNlZCBieSBgTWF0dGVyLkRldGVjdG9yYC5cbipcbiogQWxsIHVzYWdlIHNob3VsZCBiZSBtaWdyYXRlZCB0byBgTWF0dGVyLkRldGVjdG9yYCBvciBhbm90aGVyIGFsdGVybmF0aXZlLlxuKiBGb3IgYmFjay1jb21wYXRpYmlsaXR5IHB1cnBvc2VzIHRoaXMgbW9kdWxlIHdpbGwgcmVtYWluIGZvciBhIHNob3J0IHRlcm0gYW5kIHRoZW4gbGF0ZXIgcmVtb3ZlZCBpbiBhIGZ1dHVyZSByZWxlYXNlLlxuKlxuKiBUaGUgYE1hdHRlci5HcmlkYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBjb2xsaXNpb24gYnJvYWRwaGFzZSBncmlkIHN0cnVjdHVyZXMuXG4qXG4qIEBjbGFzcyBHcmlkXG4qIEBkZXByZWNhdGVkXG4qL1xuXG52YXIgR3JpZCA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdyaWQ7XG5cbnZhciBQYWlyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xudmFyIGRlcHJlY2F0ZWQgPSBDb21tb24uZGVwcmVjYXRlZDtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBncmlkLlxuICAgICAqIEBkZXByZWNhdGVkIHJlcGxhY2VkIGJ5IE1hdHRlci5EZXRlY3RvclxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHt9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtncmlkfSBBIG5ldyBncmlkXG4gICAgICovXG4gICAgR3JpZC5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGJ1Y2tldHM6IHt9LFxuICAgICAgICAgICAgcGFpcnM6IHt9LFxuICAgICAgICAgICAgcGFpcnNMaXN0OiBbXSxcbiAgICAgICAgICAgIGJ1Y2tldFdpZHRoOiA0OCxcbiAgICAgICAgICAgIGJ1Y2tldEhlaWdodDogNDhcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gQ29tbW9uLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiBhIHNpbmdsZSBncmlkIGJ1Y2tldC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBidWNrZXRXaWR0aFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDQ4XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIGEgc2luZ2xlIGdyaWQgYnVja2V0LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGJ1Y2tldEhlaWdodFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDQ4XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBncmlkLlxuICAgICAqIEBkZXByZWNhdGVkIHJlcGxhY2VkIGJ5IE1hdHRlci5EZXRlY3RvclxuICAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgICogQHBhcmFtIHtncmlkfSBncmlkXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGZvcmNlVXBkYXRlXG4gICAgICovXG4gICAgR3JpZC51cGRhdGUgPSBmdW5jdGlvbihncmlkLCBib2RpZXMsIGVuZ2luZSwgZm9yY2VVcGRhdGUpIHtcbiAgICAgICAgdmFyIGksIGNvbCwgcm93LFxuICAgICAgICAgICAgd29ybGQgPSBlbmdpbmUud29ybGQsXG4gICAgICAgICAgICBidWNrZXRzID0gZ3JpZC5idWNrZXRzLFxuICAgICAgICAgICAgYnVja2V0LFxuICAgICAgICAgICAgYnVja2V0SWQsXG4gICAgICAgICAgICBncmlkQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoYm9keS5pc1NsZWVwaW5nICYmICFmb3JjZVVwZGF0ZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8gdGVtcG9yYXJ5IGJhY2sgY29tcGF0aWJpbGl0eSBib3VuZHMgY2hlY2tcbiAgICAgICAgICAgIGlmICh3b3JsZC5ib3VuZHMgJiYgKGJvZHkuYm91bmRzLm1heC54IDwgd29ybGQuYm91bmRzLm1pbi54IHx8IGJvZHkuYm91bmRzLm1pbi54ID4gd29ybGQuYm91bmRzLm1heC54XG4gICAgICAgICAgICAgICAgfHwgYm9keS5ib3VuZHMubWF4LnkgPCB3b3JsZC5ib3VuZHMubWluLnkgfHwgYm9keS5ib3VuZHMubWluLnkgPiB3b3JsZC5ib3VuZHMubWF4LnkpKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICB2YXIgbmV3UmVnaW9uID0gR3JpZC5fZ2V0UmVnaW9uKGdyaWQsIGJvZHkpO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGUgYm9keSBoYXMgY2hhbmdlZCBncmlkIHJlZ2lvblxuICAgICAgICAgICAgaWYgKCFib2R5LnJlZ2lvbiB8fCBuZXdSZWdpb24uaWQgIT09IGJvZHkucmVnaW9uLmlkIHx8IGZvcmNlVXBkYXRlKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWJvZHkucmVnaW9uIHx8IGZvcmNlVXBkYXRlKVxuICAgICAgICAgICAgICAgICAgICBib2R5LnJlZ2lvbiA9IG5ld1JlZ2lvbjtcblxuICAgICAgICAgICAgICAgIHZhciB1bmlvbiA9IEdyaWQuX3JlZ2lvblVuaW9uKG5ld1JlZ2lvbiwgYm9keS5yZWdpb24pO1xuXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIGdyaWQgYnVja2V0cyBhZmZlY3RlZCBieSByZWdpb24gY2hhbmdlXG4gICAgICAgICAgICAgICAgLy8gaXRlcmF0ZSBvdmVyIHRoZSB1bmlvbiBvZiBib3RoIHJlZ2lvbnNcbiAgICAgICAgICAgICAgICBmb3IgKGNvbCA9IHVuaW9uLnN0YXJ0Q29sOyBjb2wgPD0gdW5pb24uZW5kQ29sOyBjb2wrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHJvdyA9IHVuaW9uLnN0YXJ0Um93OyByb3cgPD0gdW5pb24uZW5kUm93OyByb3crKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnVja2V0SWQgPSBHcmlkLl9nZXRCdWNrZXRJZChjb2wsIHJvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWNrZXQgPSBidWNrZXRzW2J1Y2tldElkXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzSW5zaWRlTmV3UmVnaW9uID0gKGNvbCA+PSBuZXdSZWdpb24uc3RhcnRDb2wgJiYgY29sIDw9IG5ld1JlZ2lvbi5lbmRDb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHJvdyA+PSBuZXdSZWdpb24uc3RhcnRSb3cgJiYgcm93IDw9IG5ld1JlZ2lvbi5lbmRSb3cpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNJbnNpZGVPbGRSZWdpb24gPSAoY29sID49IGJvZHkucmVnaW9uLnN0YXJ0Q29sICYmIGNvbCA8PSBib2R5LnJlZ2lvbi5lbmRDb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHJvdyA+PSBib2R5LnJlZ2lvbi5zdGFydFJvdyAmJiByb3cgPD0gYm9keS5yZWdpb24uZW5kUm93KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGZyb20gb2xkIHJlZ2lvbiBidWNrZXRzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzSW5zaWRlTmV3UmVnaW9uICYmIGlzSW5zaWRlT2xkUmVnaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzSW5zaWRlT2xkUmVnaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidWNrZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHcmlkLl9idWNrZXRSZW1vdmVCb2R5KGdyaWQsIGJ1Y2tldCwgYm9keSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdG8gbmV3IHJlZ2lvbiBidWNrZXRzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm9keS5yZWdpb24gPT09IG5ld1JlZ2lvbiB8fCAoaXNJbnNpZGVOZXdSZWdpb24gJiYgIWlzSW5zaWRlT2xkUmVnaW9uKSB8fCBmb3JjZVVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYnVja2V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWNrZXQgPSBHcmlkLl9jcmVhdGVCdWNrZXQoYnVja2V0cywgYnVja2V0SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdyaWQuX2J1Y2tldEFkZEJvZHkoZ3JpZCwgYnVja2V0LCBib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHNldCB0aGUgbmV3IHJlZ2lvblxuICAgICAgICAgICAgICAgIGJvZHkucmVnaW9uID0gbmV3UmVnaW9uO1xuXG4gICAgICAgICAgICAgICAgLy8gZmxhZyBjaGFuZ2VzIHNvIHdlIGNhbiB1cGRhdGUgcGFpcnNcbiAgICAgICAgICAgICAgICBncmlkQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgcGFpcnMgbGlzdCBvbmx5IGlmIHBhaXJzIGNoYW5nZWQgKGkuZS4gYSBib2R5IGNoYW5nZWQgcmVnaW9uKVxuICAgICAgICBpZiAoZ3JpZENoYW5nZWQpXG4gICAgICAgICAgICBncmlkLnBhaXJzTGlzdCA9IEdyaWQuX2NyZWF0ZUFjdGl2ZVBhaXJzTGlzdChncmlkKTtcbiAgICB9O1xuXG4gICAgZGVwcmVjYXRlZChHcmlkLCAndXBkYXRlJywgJ0dyaWQudXBkYXRlIOKepCByZXBsYWNlZCBieSBNYXR0ZXIuRGV0ZWN0b3InKTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgZ3JpZC5cbiAgICAgKiBAZGVwcmVjYXRlZCByZXBsYWNlZCBieSBNYXR0ZXIuRGV0ZWN0b3JcbiAgICAgKiBAbWV0aG9kIGNsZWFyXG4gICAgICogQHBhcmFtIHtncmlkfSBncmlkXG4gICAgICovXG4gICAgR3JpZC5jbGVhciA9IGZ1bmN0aW9uKGdyaWQpIHtcbiAgICAgICAgZ3JpZC5idWNrZXRzID0ge307XG4gICAgICAgIGdyaWQucGFpcnMgPSB7fTtcbiAgICAgICAgZ3JpZC5wYWlyc0xpc3QgPSBbXTtcbiAgICB9O1xuXG4gICAgZGVwcmVjYXRlZChHcmlkLCAnY2xlYXInLCAnR3JpZC5jbGVhciDinqQgcmVwbGFjZWQgYnkgTWF0dGVyLkRldGVjdG9yJyk7XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyB0aGUgdW5pb24gb2YgdHdvIHJlZ2lvbnMuXG4gICAgICogQG1ldGhvZCBfcmVnaW9uVW5pb25cbiAgICAgKiBAZGVwcmVjYXRlZCByZXBsYWNlZCBieSBNYXR0ZXIuRGV0ZWN0b3JcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSByZWdpb25BXG4gICAgICogQHBhcmFtIHt9IHJlZ2lvbkJcbiAgICAgKiBAcmV0dXJuIHt9IHJlZ2lvblxuICAgICAqL1xuICAgIEdyaWQuX3JlZ2lvblVuaW9uID0gZnVuY3Rpb24ocmVnaW9uQSwgcmVnaW9uQikge1xuICAgICAgICB2YXIgc3RhcnRDb2wgPSBNYXRoLm1pbihyZWdpb25BLnN0YXJ0Q29sLCByZWdpb25CLnN0YXJ0Q29sKSxcbiAgICAgICAgICAgIGVuZENvbCA9IE1hdGgubWF4KHJlZ2lvbkEuZW5kQ29sLCByZWdpb25CLmVuZENvbCksXG4gICAgICAgICAgICBzdGFydFJvdyA9IE1hdGgubWluKHJlZ2lvbkEuc3RhcnRSb3csIHJlZ2lvbkIuc3RhcnRSb3cpLFxuICAgICAgICAgICAgZW5kUm93ID0gTWF0aC5tYXgocmVnaW9uQS5lbmRSb3csIHJlZ2lvbkIuZW5kUm93KTtcblxuICAgICAgICByZXR1cm4gR3JpZC5fY3JlYXRlUmVnaW9uKHN0YXJ0Q29sLCBlbmRDb2wsIHN0YXJ0Um93LCBlbmRSb3cpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSByZWdpb24gYSBnaXZlbiBib2R5IGZhbGxzIGluIGZvciBhIGdpdmVuIGdyaWQuXG4gICAgICogQG1ldGhvZCBfZ2V0UmVnaW9uXG4gICAgICogQGRlcHJlY2F0ZWQgcmVwbGFjZWQgYnkgTWF0dGVyLkRldGVjdG9yXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gZ3JpZFxuICAgICAqIEBwYXJhbSB7fSBib2R5XG4gICAgICogQHJldHVybiB7fSByZWdpb25cbiAgICAgKi9cbiAgICBHcmlkLl9nZXRSZWdpb24gPSBmdW5jdGlvbihncmlkLCBib2R5KSB7XG4gICAgICAgIHZhciBib3VuZHMgPSBib2R5LmJvdW5kcyxcbiAgICAgICAgICAgIHN0YXJ0Q29sID0gTWF0aC5mbG9vcihib3VuZHMubWluLnggLyBncmlkLmJ1Y2tldFdpZHRoKSxcbiAgICAgICAgICAgIGVuZENvbCA9IE1hdGguZmxvb3IoYm91bmRzLm1heC54IC8gZ3JpZC5idWNrZXRXaWR0aCksXG4gICAgICAgICAgICBzdGFydFJvdyA9IE1hdGguZmxvb3IoYm91bmRzLm1pbi55IC8gZ3JpZC5idWNrZXRIZWlnaHQpLFxuICAgICAgICAgICAgZW5kUm93ID0gTWF0aC5mbG9vcihib3VuZHMubWF4LnkgLyBncmlkLmJ1Y2tldEhlaWdodCk7XG5cbiAgICAgICAgcmV0dXJuIEdyaWQuX2NyZWF0ZVJlZ2lvbihzdGFydENvbCwgZW5kQ29sLCBzdGFydFJvdywgZW5kUm93KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHJlZ2lvbi5cbiAgICAgKiBAbWV0aG9kIF9jcmVhdGVSZWdpb25cbiAgICAgKiBAZGVwcmVjYXRlZCByZXBsYWNlZCBieSBNYXR0ZXIuRGV0ZWN0b3JcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSBzdGFydENvbFxuICAgICAqIEBwYXJhbSB7fSBlbmRDb2xcbiAgICAgKiBAcGFyYW0ge30gc3RhcnRSb3dcbiAgICAgKiBAcGFyYW0ge30gZW5kUm93XG4gICAgICogQHJldHVybiB7fSByZWdpb25cbiAgICAgKi9cbiAgICBHcmlkLl9jcmVhdGVSZWdpb24gPSBmdW5jdGlvbihzdGFydENvbCwgZW5kQ29sLCBzdGFydFJvdywgZW5kUm93KSB7XG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgaWQ6IHN0YXJ0Q29sICsgJywnICsgZW5kQ29sICsgJywnICsgc3RhcnRSb3cgKyAnLCcgKyBlbmRSb3csXG4gICAgICAgICAgICBzdGFydENvbDogc3RhcnRDb2wsIFxuICAgICAgICAgICAgZW5kQ29sOiBlbmRDb2wsIFxuICAgICAgICAgICAgc3RhcnRSb3c6IHN0YXJ0Um93LCBcbiAgICAgICAgICAgIGVuZFJvdzogZW5kUm93IFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBidWNrZXQgaWQgYXQgdGhlIGdpdmVuIHBvc2l0aW9uLlxuICAgICAqIEBtZXRob2QgX2dldEJ1Y2tldElkXG4gICAgICogQGRlcHJlY2F0ZWQgcmVwbGFjZWQgYnkgTWF0dGVyLkRldGVjdG9yXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gY29sdW1uXG4gICAgICogQHBhcmFtIHt9IHJvd1xuICAgICAqIEByZXR1cm4ge3N0cmluZ30gYnVja2V0IGlkXG4gICAgICovXG4gICAgR3JpZC5fZ2V0QnVja2V0SWQgPSBmdW5jdGlvbihjb2x1bW4sIHJvdykge1xuICAgICAgICByZXR1cm4gJ0MnICsgY29sdW1uICsgJ1InICsgcm93O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgYnVja2V0LlxuICAgICAqIEBtZXRob2QgX2NyZWF0ZUJ1Y2tldFxuICAgICAqIEBkZXByZWNhdGVkIHJlcGxhY2VkIGJ5IE1hdHRlci5EZXRlY3RvclxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHt9IGJ1Y2tldHNcbiAgICAgKiBAcGFyYW0ge30gYnVja2V0SWRcbiAgICAgKiBAcmV0dXJuIHt9IGJ1Y2tldFxuICAgICAqL1xuICAgIEdyaWQuX2NyZWF0ZUJ1Y2tldCA9IGZ1bmN0aW9uKGJ1Y2tldHMsIGJ1Y2tldElkKSB7XG4gICAgICAgIHZhciBidWNrZXQgPSBidWNrZXRzW2J1Y2tldElkXSA9IFtdO1xuICAgICAgICByZXR1cm4gYnVja2V0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgYm9keSB0byBhIGJ1Y2tldC5cbiAgICAgKiBAbWV0aG9kIF9idWNrZXRBZGRCb2R5XG4gICAgICogQGRlcHJlY2F0ZWQgcmVwbGFjZWQgYnkgTWF0dGVyLkRldGVjdG9yXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gZ3JpZFxuICAgICAqIEBwYXJhbSB7fSBidWNrZXRcbiAgICAgKiBAcGFyYW0ge30gYm9keVxuICAgICAqL1xuICAgIEdyaWQuX2J1Y2tldEFkZEJvZHkgPSBmdW5jdGlvbihncmlkLCBidWNrZXQsIGJvZHkpIHtcbiAgICAgICAgdmFyIGdyaWRQYWlycyA9IGdyaWQucGFpcnMsXG4gICAgICAgICAgICBwYWlySWQgPSBQYWlyLmlkLFxuICAgICAgICAgICAgYnVja2V0TGVuZ3RoID0gYnVja2V0Lmxlbmd0aCxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgLy8gYWRkIG5ldyBwYWlyc1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYnVja2V0TGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5QiA9IGJ1Y2tldFtpXTtcblxuICAgICAgICAgICAgaWYgKGJvZHkuaWQgPT09IGJvZHlCLmlkIHx8IChib2R5LmlzU3RhdGljICYmIGJvZHlCLmlzU3RhdGljKSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8ga2VlcCB0cmFjayBvZiB0aGUgbnVtYmVyIG9mIGJ1Y2tldHMgdGhlIHBhaXIgZXhpc3RzIGluXG4gICAgICAgICAgICAvLyBpbXBvcnRhbnQgZm9yIEdyaWQudXBkYXRlIHRvIHdvcmtcbiAgICAgICAgICAgIHZhciBpZCA9IHBhaXJJZChib2R5LCBib2R5QiksXG4gICAgICAgICAgICAgICAgcGFpciA9IGdyaWRQYWlyc1tpZF07XG5cbiAgICAgICAgICAgIGlmIChwYWlyKSB7XG4gICAgICAgICAgICAgICAgcGFpclsyXSArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBncmlkUGFpcnNbaWRdID0gW2JvZHksIGJvZHlCLCAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCB0byBib2RpZXMgKGFmdGVyIHBhaXJzLCBvdGhlcndpc2UgcGFpcnMgd2l0aCBzZWxmKVxuICAgICAgICBidWNrZXQucHVzaChib2R5KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGJvZHkgZnJvbSBhIGJ1Y2tldC5cbiAgICAgKiBAbWV0aG9kIF9idWNrZXRSZW1vdmVCb2R5XG4gICAgICogQGRlcHJlY2F0ZWQgcmVwbGFjZWQgYnkgTWF0dGVyLkRldGVjdG9yXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gZ3JpZFxuICAgICAqIEBwYXJhbSB7fSBidWNrZXRcbiAgICAgKiBAcGFyYW0ge30gYm9keVxuICAgICAqL1xuICAgIEdyaWQuX2J1Y2tldFJlbW92ZUJvZHkgPSBmdW5jdGlvbihncmlkLCBidWNrZXQsIGJvZHkpIHtcbiAgICAgICAgdmFyIGdyaWRQYWlycyA9IGdyaWQucGFpcnMsXG4gICAgICAgICAgICBwYWlySWQgPSBQYWlyLmlkLFxuICAgICAgICAgICAgaTtcblxuICAgICAgICAvLyByZW1vdmUgZnJvbSBidWNrZXRcbiAgICAgICAgYnVja2V0LnNwbGljZShDb21tb24uaW5kZXhPZihidWNrZXQsIGJvZHkpLCAxKTtcblxuICAgICAgICB2YXIgYnVja2V0TGVuZ3RoID0gYnVja2V0Lmxlbmd0aDtcblxuICAgICAgICAvLyB1cGRhdGUgcGFpciBjb3VudHNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJ1Y2tldExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIHRoZSBudW1iZXIgb2YgYnVja2V0cyB0aGUgcGFpciBleGlzdHMgaW5cbiAgICAgICAgICAgIC8vIGltcG9ydGFudCBmb3IgX2NyZWF0ZUFjdGl2ZVBhaXJzTGlzdCB0byB3b3JrXG4gICAgICAgICAgICB2YXIgcGFpciA9IGdyaWRQYWlyc1twYWlySWQoYm9keSwgYnVja2V0W2ldKV07XG5cbiAgICAgICAgICAgIGlmIChwYWlyKVxuICAgICAgICAgICAgICAgIHBhaXJbMl0gLT0gMTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBsaXN0IG9mIHRoZSBhY3RpdmUgcGFpcnMgaW4gdGhlIGdyaWQuXG4gICAgICogQG1ldGhvZCBfY3JlYXRlQWN0aXZlUGFpcnNMaXN0XG4gICAgICogQGRlcHJlY2F0ZWQgcmVwbGFjZWQgYnkgTWF0dGVyLkRldGVjdG9yXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gZ3JpZFxuICAgICAqIEByZXR1cm4gW10gcGFpcnNcbiAgICAgKi9cbiAgICBHcmlkLl9jcmVhdGVBY3RpdmVQYWlyc0xpc3QgPSBmdW5jdGlvbihncmlkKSB7XG4gICAgICAgIHZhciBwYWlyLFxuICAgICAgICAgICAgZ3JpZFBhaXJzID0gZ3JpZC5wYWlycyxcbiAgICAgICAgICAgIHBhaXJLZXlzID0gQ29tbW9uLmtleXMoZ3JpZFBhaXJzKSxcbiAgICAgICAgICAgIHBhaXJLZXlzTGVuZ3RoID0gcGFpcktleXMubGVuZ3RoLFxuICAgICAgICAgICAgcGFpcnMgPSBbXSxcbiAgICAgICAgICAgIGs7XG5cbiAgICAgICAgLy8gaXRlcmF0ZSBvdmVyIGdyaWQucGFpcnNcbiAgICAgICAgZm9yIChrID0gMDsgayA8IHBhaXJLZXlzTGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgIHBhaXIgPSBncmlkUGFpcnNbcGFpcktleXNba11dO1xuXG4gICAgICAgICAgICAvLyBpZiBwYWlyIGV4aXN0cyBpbiBhdCBsZWFzdCBvbmUgYnVja2V0XG4gICAgICAgICAgICAvLyBpdCBpcyBhIHBhaXIgdGhhdCBuZWVkcyBmdXJ0aGVyIGNvbGxpc2lvbiB0ZXN0aW5nIHNvIHB1c2ggaXRcbiAgICAgICAgICAgIGlmIChwYWlyWzJdID4gMCkge1xuICAgICAgICAgICAgICAgIHBhaXJzLnB1c2gocGFpcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBncmlkUGFpcnNbcGFpcktleXNba11dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhaXJzO1xuICAgIH07XG4gICAgXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMjUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLk1vdXNlQ29uc3RyYWludGAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIG1vdXNlIGNvbnN0cmFpbnRzLlxuKiBNb3VzZSBjb25zdHJhaW50cyBhcmUgdXNlZCBmb3IgYWxsb3dpbmcgdXNlciBpbnRlcmFjdGlvbiwgcHJvdmlkaW5nIHRoZSBhYmlsaXR5IHRvIG1vdmUgYm9kaWVzIHZpYSB0aGUgbW91c2Ugb3IgdG91Y2guXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBNb3VzZUNvbnN0cmFpbnRcbiovXG5cbnZhciBNb3VzZUNvbnN0cmFpbnQgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb3VzZUNvbnN0cmFpbnQ7XG5cbnZhciBWZXJ0aWNlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG52YXIgU2xlZXBpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xudmFyIE1vdXNlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XG52YXIgRXZlbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbnZhciBEZXRlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xudmFyIENvbnN0cmFpbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcbnZhciBDb21wb3NpdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgQm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBtb3VzZSBjb25zdHJhaW50LlxuICAgICAqIEFsbCBwcm9wZXJ0aWVzIGhhdmUgZGVmYXVsdCB2YWx1ZXMsIGFuZCBtYW55IGFyZSBwcmUtY2FsY3VsYXRlZCBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIG90aGVyIHByb3BlcnRpZXMuXG4gICAgICogU2VlIHRoZSBwcm9wZXJ0aWVzIHNlY3Rpb24gYmVsb3cgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKiBAcGFyYW0ge30gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge01vdXNlQ29uc3RyYWludH0gQSBuZXcgTW91c2VDb25zdHJhaW50XG4gICAgICovXG4gICAgTW91c2VDb25zdHJhaW50LmNyZWF0ZSA9IGZ1bmN0aW9uKGVuZ2luZSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgbW91c2UgPSAoZW5naW5lID8gZW5naW5lLm1vdXNlIDogbnVsbCkgfHwgKG9wdGlvbnMgPyBvcHRpb25zLm1vdXNlIDogbnVsbCk7XG5cbiAgICAgICAgaWYgKCFtb3VzZSkge1xuICAgICAgICAgICAgaWYgKGVuZ2luZSAmJiBlbmdpbmUucmVuZGVyICYmIGVuZ2luZS5yZW5kZXIuY2FudmFzKSB7XG4gICAgICAgICAgICAgICAgbW91c2UgPSBNb3VzZS5jcmVhdGUoZW5naW5lLnJlbmRlci5jYW52YXMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIG1vdXNlID0gTW91c2UuY3JlYXRlKG9wdGlvbnMuZWxlbWVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vdXNlID0gTW91c2UuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgQ29tbW9uLndhcm4oJ01vdXNlQ29uc3RyYWludC5jcmVhdGU6IG9wdGlvbnMubW91c2Ugd2FzIHVuZGVmaW5lZCwgb3B0aW9ucy5lbGVtZW50IHdhcyB1bmRlZmluZWQsIG1heSBub3QgZnVuY3Rpb24gYXMgZXhwZWN0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb25zdHJhaW50ID0gQ29uc3RyYWludC5jcmVhdGUoeyBcbiAgICAgICAgICAgIGxhYmVsOiAnTW91c2UgQ29uc3RyYWludCcsXG4gICAgICAgICAgICBwb2ludEE6IG1vdXNlLnBvc2l0aW9uLFxuICAgICAgICAgICAgcG9pbnRCOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgIGxlbmd0aDogMC4wMSwgXG4gICAgICAgICAgICBzdGlmZm5lc3M6IDAuMSxcbiAgICAgICAgICAgIGFuZ3VsYXJTdGlmZm5lc3M6IDEsXG4gICAgICAgICAgICByZW5kZXI6IHtcbiAgICAgICAgICAgICAgICBzdHJva2VTdHlsZTogJyM5MEVFOTAnLFxuICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogM1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICB0eXBlOiAnbW91c2VDb25zdHJhaW50JyxcbiAgICAgICAgICAgIG1vdXNlOiBtb3VzZSxcbiAgICAgICAgICAgIGVsZW1lbnQ6IG51bGwsXG4gICAgICAgICAgICBib2R5OiBudWxsLFxuICAgICAgICAgICAgY29uc3RyYWludDogY29uc3RyYWludCxcbiAgICAgICAgICAgIGNvbGxpc2lvbkZpbHRlcjoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAweDAwMDEsXG4gICAgICAgICAgICAgICAgbWFzazogMHhGRkZGRkZGRixcbiAgICAgICAgICAgICAgICBncm91cDogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBtb3VzZUNvbnN0cmFpbnQgPSBDb21tb24uZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICBFdmVudHMub24oZW5naW5lLCAnYmVmb3JlVXBkYXRlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgYWxsQm9kaWVzID0gQ29tcG9zaXRlLmFsbEJvZGllcyhlbmdpbmUud29ybGQpO1xuICAgICAgICAgICAgTW91c2VDb25zdHJhaW50LnVwZGF0ZShtb3VzZUNvbnN0cmFpbnQsIGFsbEJvZGllcyk7XG4gICAgICAgICAgICBNb3VzZUNvbnN0cmFpbnQuX3RyaWdnZXJFdmVudHMobW91c2VDb25zdHJhaW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG1vdXNlQ29uc3RyYWludDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgZ2l2ZW4gbW91c2UgY29uc3RyYWludC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgICogQHBhcmFtIHtNb3VzZUNvbnN0cmFpbnR9IG1vdXNlQ29uc3RyYWludFxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKi9cbiAgICBNb3VzZUNvbnN0cmFpbnQudXBkYXRlID0gZnVuY3Rpb24obW91c2VDb25zdHJhaW50LCBib2RpZXMpIHtcbiAgICAgICAgdmFyIG1vdXNlID0gbW91c2VDb25zdHJhaW50Lm1vdXNlLFxuICAgICAgICAgICAgY29uc3RyYWludCA9IG1vdXNlQ29uc3RyYWludC5jb25zdHJhaW50LFxuICAgICAgICAgICAgYm9keSA9IG1vdXNlQ29uc3RyYWludC5ib2R5O1xuXG4gICAgICAgIGlmIChtb3VzZS5idXR0b24gPT09IDApIHtcbiAgICAgICAgICAgIGlmICghY29uc3RyYWludC5ib2R5Qikge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgPSBib2RpZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChCb3VuZHMuY29udGFpbnMoYm9keS5ib3VuZHMsIG1vdXNlLnBvc2l0aW9uKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBEZXRlY3Rvci5jYW5Db2xsaWRlKGJvZHkuY29sbGlzaW9uRmlsdGVyLCBtb3VzZUNvbnN0cmFpbnQuY29sbGlzaW9uRmlsdGVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IGJvZHkucGFydHMubGVuZ3RoID4gMSA/IDEgOiAwOyBqIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keS5wYXJ0c1tqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoVmVydGljZXMuY29udGFpbnMocGFydC52ZXJ0aWNlcywgbW91c2UucG9zaXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQucG9pbnRBID0gbW91c2UucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQuYm9keUIgPSBtb3VzZUNvbnN0cmFpbnQuYm9keSA9IGJvZHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQucG9pbnRCID0geyB4OiBtb3VzZS5wb3NpdGlvbi54IC0gYm9keS5wb3NpdGlvbi54LCB5OiBtb3VzZS5wb3NpdGlvbi55IC0gYm9keS5wb3NpdGlvbi55IH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQuYW5nbGVCID0gYm9keS5hbmdsZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTbGVlcGluZy5zZXQoYm9keSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFdmVudHMudHJpZ2dlcihtb3VzZUNvbnN0cmFpbnQsICdzdGFydGRyYWcnLCB7IG1vdXNlOiBtb3VzZSwgYm9keTogYm9keSB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFNsZWVwaW5nLnNldChjb25zdHJhaW50LmJvZHlCLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgY29uc3RyYWludC5wb2ludEEgPSBtb3VzZS5wb3NpdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0cmFpbnQuYm9keUIgPSBtb3VzZUNvbnN0cmFpbnQuYm9keSA9IG51bGw7XG4gICAgICAgICAgICBjb25zdHJhaW50LnBvaW50QiA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChib2R5KVxuICAgICAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKG1vdXNlQ29uc3RyYWludCwgJ2VuZGRyYWcnLCB7IG1vdXNlOiBtb3VzZSwgYm9keTogYm9keSB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VycyBtb3VzZSBjb25zdHJhaW50IGV2ZW50cy5cbiAgICAgKiBAbWV0aG9kIF90cmlnZ2VyRXZlbnRzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge21vdXNlfSBtb3VzZUNvbnN0cmFpbnRcbiAgICAgKi9cbiAgICBNb3VzZUNvbnN0cmFpbnQuX3RyaWdnZXJFdmVudHMgPSBmdW5jdGlvbihtb3VzZUNvbnN0cmFpbnQpIHtcbiAgICAgICAgdmFyIG1vdXNlID0gbW91c2VDb25zdHJhaW50Lm1vdXNlLFxuICAgICAgICAgICAgbW91c2VFdmVudHMgPSBtb3VzZS5zb3VyY2VFdmVudHM7XG5cbiAgICAgICAgaWYgKG1vdXNlRXZlbnRzLm1vdXNlbW92ZSlcbiAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKG1vdXNlQ29uc3RyYWludCwgJ21vdXNlbW92ZScsIHsgbW91c2U6IG1vdXNlIH0pO1xuXG4gICAgICAgIGlmIChtb3VzZUV2ZW50cy5tb3VzZWRvd24pXG4gICAgICAgICAgICBFdmVudHMudHJpZ2dlcihtb3VzZUNvbnN0cmFpbnQsICdtb3VzZWRvd24nLCB7IG1vdXNlOiBtb3VzZSB9KTtcblxuICAgICAgICBpZiAobW91c2VFdmVudHMubW91c2V1cClcbiAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKG1vdXNlQ29uc3RyYWludCwgJ21vdXNldXAnLCB7IG1vdXNlOiBtb3VzZSB9KTtcblxuICAgICAgICAvLyByZXNldCB0aGUgbW91c2Ugc3RhdGUgcmVhZHkgZm9yIHRoZSBuZXh0IHN0ZXBcbiAgICAgICAgTW91c2UuY2xlYXJTb3VyY2VFdmVudHMobW91c2UpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICpcbiAgICAqICBFdmVudHMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIHRoZSBtb3VzZSBoYXMgbW92ZWQgKG9yIGEgdG91Y2ggbW92ZXMpIGR1cmluZyB0aGUgbGFzdCBzdGVwXG4gICAgKlxuICAgICogQGV2ZW50IG1vdXNlbW92ZVxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHttb3VzZX0gZXZlbnQubW91c2UgVGhlIGVuZ2luZSdzIG1vdXNlIGluc3RhbmNlXG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgd2hlbiB0aGUgbW91c2UgaXMgZG93biAob3IgYSB0b3VjaCBoYXMgc3RhcnRlZCkgZHVyaW5nIHRoZSBsYXN0IHN0ZXBcbiAgICAqXG4gICAgKiBAZXZlbnQgbW91c2Vkb3duXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge21vdXNlfSBldmVudC5tb3VzZSBUaGUgZW5naW5lJ3MgbW91c2UgaW5zdGFuY2VcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIHRoZSBtb3VzZSBpcyB1cCAob3IgYSB0b3VjaCBoYXMgZW5kZWQpIGR1cmluZyB0aGUgbGFzdCBzdGVwXG4gICAgKlxuICAgICogQGV2ZW50IG1vdXNldXBcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bW91c2V9IGV2ZW50Lm1vdXNlIFRoZSBlbmdpbmUncyBtb3VzZSBpbnN0YW5jZVxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIHdoZW4gdGhlIHVzZXIgc3RhcnRzIGRyYWdnaW5nIGEgYm9keVxuICAgICpcbiAgICAqIEBldmVudCBzdGFydGRyYWdcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bW91c2V9IGV2ZW50Lm1vdXNlIFRoZSBlbmdpbmUncyBtb3VzZSBpbnN0YW5jZVxuICAgICogQHBhcmFtIHtib2R5fSBldmVudC5ib2R5IFRoZSBib2R5IGJlaW5nIGRyYWdnZWRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIHRoZSB1c2VyIGVuZHMgZHJhZ2dpbmcgYSBib2R5XG4gICAgKlxuICAgICogQGV2ZW50IGVuZGRyYWdcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bW91c2V9IGV2ZW50Lm1vdXNlIFRoZSBlbmdpbmUncyBtb3VzZSBpbnN0YW5jZVxuICAgICogQHBhcmFtIHtib2R5fSBldmVudC5ib2R5IFRoZSBib2R5IHRoYXQgaGFzIHN0b3BwZWQgYmVpbmcgZHJhZ2dlZFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKlxuICAgICpcbiAgICAqICBQcm9wZXJ0aWVzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFN0cmluZ2AgZGVub3RpbmcgdGhlIHR5cGUgb2Ygb2JqZWN0LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHR5cGVcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBcImNvbnN0cmFpbnRcIlxuICAgICAqIEByZWFkT25seVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGBNb3VzZWAgaW5zdGFuY2UgaW4gdXNlLiBJZiBub3Qgc3VwcGxpZWQgaW4gYE1vdXNlQ29uc3RyYWludC5jcmVhdGVgLCBvbmUgd2lsbCBiZSBjcmVhdGVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG1vdXNlXG4gICAgICogQHR5cGUgbW91c2VcbiAgICAgKiBAZGVmYXVsdCBtb3VzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGBCb2R5YCB0aGF0IGlzIGN1cnJlbnRseSBiZWluZyBtb3ZlZCBieSB0aGUgdXNlciwgb3IgYG51bGxgIGlmIG5vIGJvZHkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYm9keVxuICAgICAqIEB0eXBlIGJvZHlcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYENvbnN0cmFpbnRgIG9iamVjdCB0aGF0IGlzIHVzZWQgdG8gbW92ZSB0aGUgYm9keSBkdXJpbmcgaW50ZXJhY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29uc3RyYWludFxuICAgICAqIEB0eXBlIGNvbnN0cmFpbnRcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGBPYmplY3RgIHRoYXQgc3BlY2lmaWVzIHRoZSBjb2xsaXNpb24gZmlsdGVyIHByb3BlcnRpZXMuXG4gICAgICogVGhlIGNvbGxpc2lvbiBmaWx0ZXIgYWxsb3dzIHRoZSB1c2VyIHRvIGRlZmluZSB3aGljaCB0eXBlcyBvZiBib2R5IHRoaXMgbW91c2UgY29uc3RyYWludCBjYW4gaW50ZXJhY3Qgd2l0aC5cbiAgICAgKiBTZWUgYGJvZHkuY29sbGlzaW9uRmlsdGVyYCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjb2xsaXNpb25GaWx0ZXJcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKi9cblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDI2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5RdWVyeWAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIHBlcmZvcm1pbmcgY29sbGlzaW9uIHF1ZXJpZXMuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBRdWVyeVxuKi9cblxudmFyIFF1ZXJ5ID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gUXVlcnk7XG5cbnZhciBWZWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xudmFyIENvbGxpc2lvbiA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG52YXIgQm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbnZhciBCb2RpZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcbnZhciBWZXJ0aWNlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBsaXN0IG9mIGNvbGxpc2lvbnMgYmV0d2VlbiBgYm9keWAgYW5kIGBib2RpZXNgLlxuICAgICAqIEBtZXRob2QgY29sbGlkZXNcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHJldHVybiB7Y29sbGlzaW9uW119IENvbGxpc2lvbnNcbiAgICAgKi9cbiAgICBRdWVyeS5jb2xsaWRlcyA9IGZ1bmN0aW9uKGJvZHksIGJvZGllcykge1xuICAgICAgICB2YXIgY29sbGlzaW9ucyA9IFtdLFxuICAgICAgICAgICAgYm9kaWVzTGVuZ3RoID0gYm9kaWVzLmxlbmd0aCxcbiAgICAgICAgICAgIGJvdW5kcyA9IGJvZHkuYm91bmRzLFxuICAgICAgICAgICAgY29sbGlkZXMgPSBDb2xsaXNpb24uY29sbGlkZXMsXG4gICAgICAgICAgICBvdmVybGFwcyA9IEJvdW5kcy5vdmVybGFwcztcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keUEgPSBib2RpZXNbaV0sXG4gICAgICAgICAgICAgICAgcGFydHNBTGVuZ3RoID0gYm9keUEucGFydHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIHBhcnRzQVN0YXJ0ID0gcGFydHNBTGVuZ3RoID09PSAxID8gMCA6IDE7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChvdmVybGFwcyhib2R5QS5ib3VuZHMsIGJvdW5kcykpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gcGFydHNBU3RhcnQ7IGogPCBwYXJ0c0FMZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFydCA9IGJvZHlBLnBhcnRzW2pdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvdmVybGFwcyhwYXJ0LmJvdW5kcywgYm91bmRzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbGxpc2lvbiA9IGNvbGxpZGVzKHBhcnQsIGJvZHkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sbGlzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9ucy5wdXNoKGNvbGxpc2lvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29sbGlzaW9ucztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2FzdHMgYSByYXkgc2VnbWVudCBhZ2FpbnN0IGEgc2V0IG9mIGJvZGllcyBhbmQgcmV0dXJucyBhbGwgY29sbGlzaW9ucywgcmF5IHdpZHRoIGlzIG9wdGlvbmFsLiBJbnRlcnNlY3Rpb24gcG9pbnRzIGFyZSBub3QgcHJvdmlkZWQuXG4gICAgICogQG1ldGhvZCByYXlcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHN0YXJ0UG9pbnRcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gZW5kUG9pbnRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3JheVdpZHRoXVxuICAgICAqIEByZXR1cm4ge2NvbGxpc2lvbltdfSBDb2xsaXNpb25zXG4gICAgICovXG4gICAgUXVlcnkucmF5ID0gZnVuY3Rpb24oYm9kaWVzLCBzdGFydFBvaW50LCBlbmRQb2ludCwgcmF5V2lkdGgpIHtcbiAgICAgICAgcmF5V2lkdGggPSByYXlXaWR0aCB8fCAxZS0xMDA7XG5cbiAgICAgICAgdmFyIHJheUFuZ2xlID0gVmVjdG9yLmFuZ2xlKHN0YXJ0UG9pbnQsIGVuZFBvaW50KSxcbiAgICAgICAgICAgIHJheUxlbmd0aCA9IFZlY3Rvci5tYWduaXR1ZGUoVmVjdG9yLnN1YihzdGFydFBvaW50LCBlbmRQb2ludCkpLFxuICAgICAgICAgICAgcmF5WCA9IChlbmRQb2ludC54ICsgc3RhcnRQb2ludC54KSAqIDAuNSxcbiAgICAgICAgICAgIHJheVkgPSAoZW5kUG9pbnQueSArIHN0YXJ0UG9pbnQueSkgKiAwLjUsXG4gICAgICAgICAgICByYXkgPSBCb2RpZXMucmVjdGFuZ2xlKHJheVgsIHJheVksIHJheUxlbmd0aCwgcmF5V2lkdGgsIHsgYW5nbGU6IHJheUFuZ2xlIH0pLFxuICAgICAgICAgICAgY29sbGlzaW9ucyA9IFF1ZXJ5LmNvbGxpZGVzKHJheSwgYm9kaWVzKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbGxpc2lvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBjb2xsaXNpb24gPSBjb2xsaXNpb25zW2ldO1xuICAgICAgICAgICAgY29sbGlzaW9uLmJvZHkgPSBjb2xsaXNpb24uYm9keUIgPSBjb2xsaXNpb24uYm9keUE7ICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29sbGlzaW9ucztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgYm9kaWVzIHdob3NlIGJvdW5kcyBhcmUgaW5zaWRlIChvciBvdXRzaWRlIGlmIHNldCkgdGhlIGdpdmVuIHNldCBvZiBib3VuZHMsIGZyb20gdGhlIGdpdmVuIHNldCBvZiBib2RpZXMuXG4gICAgICogQG1ldGhvZCByZWdpb25cbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtib3VuZHN9IGJvdW5kc1xuICAgICAqIEBwYXJhbSB7Ym9vbH0gW291dHNpZGU9ZmFsc2VdXG4gICAgICogQHJldHVybiB7Ym9keVtdfSBUaGUgYm9kaWVzIG1hdGNoaW5nIHRoZSBxdWVyeVxuICAgICAqL1xuICAgIFF1ZXJ5LnJlZ2lvbiA9IGZ1bmN0aW9uKGJvZGllcywgYm91bmRzLCBvdXRzaWRlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV0sXG4gICAgICAgICAgICAgICAgb3ZlcmxhcHMgPSBCb3VuZHMub3ZlcmxhcHMoYm9keS5ib3VuZHMsIGJvdW5kcyk7XG4gICAgICAgICAgICBpZiAoKG92ZXJsYXBzICYmICFvdXRzaWRlKSB8fCAoIW92ZXJsYXBzICYmIG91dHNpZGUpKVxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGJvZHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgYm9kaWVzIHdob3NlIHZlcnRpY2VzIGNvbnRhaW4gdGhlIGdpdmVuIHBvaW50LCBmcm9tIHRoZSBnaXZlbiBzZXQgb2YgYm9kaWVzLlxuICAgICAqIEBtZXRob2QgcG9pbnRcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHBvaW50XG4gICAgICogQHJldHVybiB7Ym9keVtdfSBUaGUgYm9kaWVzIG1hdGNoaW5nIHRoZSBxdWVyeVxuICAgICAqL1xuICAgIFF1ZXJ5LnBvaW50ID0gZnVuY3Rpb24oYm9kaWVzLCBwb2ludCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoQm91bmRzLmNvbnRhaW5zKGJvZHkuYm91bmRzLCBwb2ludCkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gYm9keS5wYXJ0cy5sZW5ndGggPT09IDEgPyAwIDogMTsgaiA8IGJvZHkucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBib2R5LnBhcnRzW2pdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChCb3VuZHMuY29udGFpbnMocGFydC5ib3VuZHMsIHBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgVmVydGljZXMuY29udGFpbnMocGFydC52ZXJ0aWNlcywgcG9pbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMjcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLlJ1bm5lcmAgbW9kdWxlIGlzIGFuIG9wdGlvbmFsIHV0aWxpdHkgd2hpY2ggcHJvdmlkZXMgYSBnYW1lIGxvb3AsIFxuKiB0aGF0IGhhbmRsZXMgY29udGludW91c2x5IHVwZGF0aW5nIGEgYE1hdHRlci5FbmdpbmVgIGZvciB5b3Ugd2l0aGluIGEgYnJvd3Nlci5cbiogSXQgaXMgaW50ZW5kZWQgZm9yIGRldmVsb3BtZW50IGFuZCBkZWJ1Z2dpbmcgcHVycG9zZXMsIGJ1dCBtYXkgYWxzbyBiZSBzdWl0YWJsZSBmb3Igc2ltcGxlIGdhbWVzLlxuKiBJZiB5b3UgYXJlIHVzaW5nIHlvdXIgb3duIGdhbWUgbG9vcCBpbnN0ZWFkLCB0aGVuIHlvdSBkbyBub3QgbmVlZCB0aGUgYE1hdHRlci5SdW5uZXJgIG1vZHVsZS5cbiogSW5zdGVhZCBqdXN0IGNhbGwgYEVuZ2luZS51cGRhdGUoZW5naW5lLCBkZWx0YSlgIGluIHlvdXIgb3duIGxvb3AuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBSdW5uZXJcbiovXG5cbnZhciBSdW5uZXIgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBSdW5uZXI7XG5cbnZhciBFdmVudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xudmFyIEVuZ2luZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTgpO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIHZhciBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lLFxuICAgICAgICBfY2FuY2VsQW5pbWF0aW9uRnJhbWU7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgX3JlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZTtcbiAgIFxuICAgICAgICBfY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zQ2FuY2VsQW5pbWF0aW9uRnJhbWU7XG4gICAgfVxuXG4gICAgaWYgKCFfcmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICAgIHZhciBfZnJhbWVUaW1lb3V0O1xuXG4gICAgICAgIF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjayl7IFxuICAgICAgICAgICAgX2ZyYW1lVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKENvbW1vbi5ub3coKSk7IFxuICAgICAgICAgICAgfSwgMTAwMCAvIDYwKTtcbiAgICAgICAgfTtcblxuICAgICAgICBfY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfZnJhbWVUaW1lb3V0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IFJ1bm5lci4gVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBhbnkgcHJvcGVydGllcyB5b3Ugd2lzaCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHMuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge30gb3B0aW9uc1xuICAgICAqL1xuICAgIFJ1bm5lci5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGZwczogNjAsXG4gICAgICAgICAgICBjb3JyZWN0aW9uOiAxLFxuICAgICAgICAgICAgZGVsdGFTYW1wbGVTaXplOiA2MCxcbiAgICAgICAgICAgIGNvdW50ZXJUaW1lc3RhbXA6IDAsXG4gICAgICAgICAgICBmcmFtZUNvdW50ZXI6IDAsXG4gICAgICAgICAgICBkZWx0YUhpc3Rvcnk6IFtdLFxuICAgICAgICAgICAgdGltZVByZXY6IG51bGwsXG4gICAgICAgICAgICB0aW1lU2NhbGVQcmV2OiAxLFxuICAgICAgICAgICAgZnJhbWVSZXF1ZXN0SWQ6IG51bGwsXG4gICAgICAgICAgICBpc0ZpeGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcnVubmVyID0gQ29tbW9uLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgcnVubmVyLmRlbHRhID0gcnVubmVyLmRlbHRhIHx8IDEwMDAgLyBydW5uZXIuZnBzO1xuICAgICAgICBydW5uZXIuZGVsdGFNaW4gPSBydW5uZXIuZGVsdGFNaW4gfHwgMTAwMCAvIHJ1bm5lci5mcHM7XG4gICAgICAgIHJ1bm5lci5kZWx0YU1heCA9IHJ1bm5lci5kZWx0YU1heCB8fCAxMDAwIC8gKHJ1bm5lci5mcHMgKiAwLjUpO1xuICAgICAgICBydW5uZXIuZnBzID0gMTAwMCAvIHJ1bm5lci5kZWx0YTtcblxuICAgICAgICByZXR1cm4gcnVubmVyO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDb250aW51b3VzbHkgdGlja3MgYSBgTWF0dGVyLkVuZ2luZWAgYnkgY2FsbGluZyBgUnVubmVyLnRpY2tgIG9uIHRoZSBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBldmVudC5cbiAgICAgKiBAbWV0aG9kIHJ1blxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKi9cbiAgICBSdW5uZXIucnVuID0gZnVuY3Rpb24ocnVubmVyLCBlbmdpbmUpIHtcbiAgICAgICAgLy8gY3JlYXRlIHJ1bm5lciBpZiBlbmdpbmUgaXMgZmlyc3QgYXJndW1lbnRcbiAgICAgICAgaWYgKHR5cGVvZiBydW5uZXIucG9zaXRpb25JdGVyYXRpb25zICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZW5naW5lID0gcnVubmVyO1xuICAgICAgICAgICAgcnVubmVyID0gUnVubmVyLmNyZWF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgKGZ1bmN0aW9uIHJlbmRlcih0aW1lKXtcbiAgICAgICAgICAgIHJ1bm5lci5mcmFtZVJlcXVlc3RJZCA9IF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcblxuICAgICAgICAgICAgaWYgKHRpbWUgJiYgcnVubmVyLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBSdW5uZXIudGljayhydW5uZXIsIGVuZ2luZSwgdGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgcmV0dXJuIHJ1bm5lcjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQSBnYW1lIGxvb3AgdXRpbGl0eSB0aGF0IHVwZGF0ZXMgdGhlIGVuZ2luZSBhbmQgcmVuZGVyZXIgYnkgb25lIHN0ZXAgKGEgJ3RpY2snKS5cbiAgICAgKiBGZWF0dXJlcyBkZWx0YSBzbW9vdGhpbmcsIHRpbWUgY29ycmVjdGlvbiBhbmQgZml4ZWQgb3IgZHluYW1pYyB0aW1pbmcuXG4gICAgICogQ29uc2lkZXIganVzdCBgRW5naW5lLnVwZGF0ZShlbmdpbmUsIGRlbHRhKWAgaWYgeW91J3JlIHVzaW5nIHlvdXIgb3duIGxvb3AuXG4gICAgICogQG1ldGhvZCB0aWNrXG4gICAgICogQHBhcmFtIHtydW5uZXJ9IHJ1bm5lclxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVxuICAgICAqL1xuICAgIFJ1bm5lci50aWNrID0gZnVuY3Rpb24ocnVubmVyLCBlbmdpbmUsIHRpbWUpIHtcbiAgICAgICAgdmFyIHRpbWluZyA9IGVuZ2luZS50aW1pbmcsXG4gICAgICAgICAgICBjb3JyZWN0aW9uID0gMSxcbiAgICAgICAgICAgIGRlbHRhO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBhbiBldmVudCBvYmplY3RcbiAgICAgICAgdmFyIGV2ZW50ID0ge1xuICAgICAgICAgICAgdGltZXN0YW1wOiB0aW1pbmcudGltZXN0YW1wXG4gICAgICAgIH07XG5cbiAgICAgICAgRXZlbnRzLnRyaWdnZXIocnVubmVyLCAnYmVmb3JlVGljaycsIGV2ZW50KTtcblxuICAgICAgICBpZiAocnVubmVyLmlzRml4ZWQpIHtcbiAgICAgICAgICAgIC8vIGZpeGVkIHRpbWVzdGVwXG4gICAgICAgICAgICBkZWx0YSA9IHJ1bm5lci5kZWx0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGR5bmFtaWMgdGltZXN0ZXAgYmFzZWQgb24gd2FsbCBjbG9jayBiZXR3ZWVuIGNhbGxzXG4gICAgICAgICAgICBkZWx0YSA9ICh0aW1lIC0gcnVubmVyLnRpbWVQcmV2KSB8fCBydW5uZXIuZGVsdGE7XG4gICAgICAgICAgICBydW5uZXIudGltZVByZXYgPSB0aW1lO1xuXG4gICAgICAgICAgICAvLyBvcHRpbWlzdGljYWxseSBmaWx0ZXIgZGVsdGEgb3ZlciBhIGZldyBmcmFtZXMsIHRvIGltcHJvdmUgc3RhYmlsaXR5XG4gICAgICAgICAgICBydW5uZXIuZGVsdGFIaXN0b3J5LnB1c2goZGVsdGEpO1xuICAgICAgICAgICAgcnVubmVyLmRlbHRhSGlzdG9yeSA9IHJ1bm5lci5kZWx0YUhpc3Rvcnkuc2xpY2UoLXJ1bm5lci5kZWx0YVNhbXBsZVNpemUpO1xuICAgICAgICAgICAgZGVsdGEgPSBNYXRoLm1pbi5hcHBseShudWxsLCBydW5uZXIuZGVsdGFIaXN0b3J5KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gbGltaXQgZGVsdGFcbiAgICAgICAgICAgIGRlbHRhID0gZGVsdGEgPCBydW5uZXIuZGVsdGFNaW4gPyBydW5uZXIuZGVsdGFNaW4gOiBkZWx0YTtcbiAgICAgICAgICAgIGRlbHRhID0gZGVsdGEgPiBydW5uZXIuZGVsdGFNYXggPyBydW5uZXIuZGVsdGFNYXggOiBkZWx0YTtcblxuICAgICAgICAgICAgLy8gY29ycmVjdGlvbiBmb3IgZGVsdGFcbiAgICAgICAgICAgIGNvcnJlY3Rpb24gPSBkZWx0YSAvIHJ1bm5lci5kZWx0YTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIGVuZ2luZSB0aW1pbmcgb2JqZWN0XG4gICAgICAgICAgICBydW5uZXIuZGVsdGEgPSBkZWx0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRpbWUgY29ycmVjdGlvbiBmb3IgdGltZSBzY2FsaW5nXG4gICAgICAgIGlmIChydW5uZXIudGltZVNjYWxlUHJldiAhPT0gMClcbiAgICAgICAgICAgIGNvcnJlY3Rpb24gKj0gdGltaW5nLnRpbWVTY2FsZSAvIHJ1bm5lci50aW1lU2NhbGVQcmV2O1xuXG4gICAgICAgIGlmICh0aW1pbmcudGltZVNjYWxlID09PSAwKVxuICAgICAgICAgICAgY29ycmVjdGlvbiA9IDA7XG5cbiAgICAgICAgcnVubmVyLnRpbWVTY2FsZVByZXYgPSB0aW1pbmcudGltZVNjYWxlO1xuICAgICAgICBydW5uZXIuY29ycmVjdGlvbiA9IGNvcnJlY3Rpb247XG5cbiAgICAgICAgLy8gZnBzIGNvdW50ZXJcbiAgICAgICAgcnVubmVyLmZyYW1lQ291bnRlciArPSAxO1xuICAgICAgICBpZiAodGltZSAtIHJ1bm5lci5jb3VudGVyVGltZXN0YW1wID49IDEwMDApIHtcbiAgICAgICAgICAgIHJ1bm5lci5mcHMgPSBydW5uZXIuZnJhbWVDb3VudGVyICogKCh0aW1lIC0gcnVubmVyLmNvdW50ZXJUaW1lc3RhbXApIC8gMTAwMCk7XG4gICAgICAgICAgICBydW5uZXIuY291bnRlclRpbWVzdGFtcCA9IHRpbWU7XG4gICAgICAgICAgICBydW5uZXIuZnJhbWVDb3VudGVyID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKHJ1bm5lciwgJ3RpY2snLCBldmVudCk7XG5cbiAgICAgICAgLy8gdXBkYXRlXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKHJ1bm5lciwgJ2JlZm9yZVVwZGF0ZScsIGV2ZW50KTtcbiAgICAgICAgRW5naW5lLnVwZGF0ZShlbmdpbmUsIGRlbHRhLCBjb3JyZWN0aW9uKTtcbiAgICAgICAgRXZlbnRzLnRyaWdnZXIocnVubmVyLCAnYWZ0ZXJVcGRhdGUnLCBldmVudCk7XG5cbiAgICAgICAgRXZlbnRzLnRyaWdnZXIocnVubmVyLCAnYWZ0ZXJUaWNrJywgZXZlbnQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFbmRzIGV4ZWN1dGlvbiBvZiBgUnVubmVyLnJ1bmAgb24gdGhlIGdpdmVuIGBydW5uZXJgLCBieSBjYW5jZWxpbmcgdGhlIGFuaW1hdGlvbiBmcmFtZSByZXF1ZXN0IGV2ZW50IGxvb3AuXG4gICAgICogSWYgeW91IHdpc2ggdG8gb25seSB0ZW1wb3JhcmlseSBwYXVzZSB0aGUgZW5naW5lLCBzZWUgYGVuZ2luZS5lbmFibGVkYCBpbnN0ZWFkLlxuICAgICAqIEBtZXRob2Qgc3RvcFxuICAgICAqIEBwYXJhbSB7cnVubmVyfSBydW5uZXJcbiAgICAgKi9cbiAgICBSdW5uZXIuc3RvcCA9IGZ1bmN0aW9uKHJ1bm5lcikge1xuICAgICAgICBfY2FuY2VsQW5pbWF0aW9uRnJhbWUocnVubmVyLmZyYW1lUmVxdWVzdElkKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIGBSdW5uZXIucnVuYC5cbiAgICAgKiBAbWV0aG9kIHN0YXJ0XG4gICAgICogQHBhcmFtIHtydW5uZXJ9IHJ1bm5lclxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKi9cbiAgICBSdW5uZXIuc3RhcnQgPSBmdW5jdGlvbihydW5uZXIsIGVuZ2luZSkge1xuICAgICAgICBSdW5uZXIucnVuKHJ1bm5lciwgZW5naW5lKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgRXZlbnRzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYXQgdGhlIHN0YXJ0IG9mIGEgdGljaywgYmVmb3JlIGFueSB1cGRhdGVzIHRvIHRoZSBlbmdpbmUgb3IgdGltaW5nXG4gICAgKlxuICAgICogQGV2ZW50IGJlZm9yZVRpY2tcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGFmdGVyIGVuZ2luZSB0aW1pbmcgdXBkYXRlZCwgYnV0IGp1c3QgYmVmb3JlIHVwZGF0ZVxuICAgICpcbiAgICAqIEBldmVudCB0aWNrXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCBhdCB0aGUgZW5kIG9mIGEgdGljaywgYWZ0ZXIgZW5naW5lIHVwZGF0ZSBhbmQgYWZ0ZXIgcmVuZGVyaW5nXG4gICAgKlxuICAgICogQGV2ZW50IGFmdGVyVGlja1xuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYmVmb3JlIHVwZGF0ZVxuICAgICpcbiAgICAqIEBldmVudCBiZWZvcmVVcGRhdGVcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGFmdGVyIHVwZGF0ZVxuICAgICpcbiAgICAqIEBldmVudCBhZnRlclVwZGF0ZVxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qXG4gICAgKlxuICAgICogIFByb3BlcnRpZXMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRoYXQgc3BlY2lmaWVzIHdoZXRoZXIgdGhlIHJ1bm5lciBpcyBydW5uaW5nIG9yIG5vdC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBlbmFibGVkXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYEJvb2xlYW5gIHRoYXQgc3BlY2lmaWVzIGlmIHRoZSBydW5uZXIgc2hvdWxkIHVzZSBhIGZpeGVkIHRpbWVzdGVwIChvdGhlcndpc2UgaXQgaXMgdmFyaWFibGUpLlxuICAgICAqIElmIHRpbWluZyBpcyBmaXhlZCwgdGhlbiB0aGUgYXBwYXJlbnQgc2ltdWxhdGlvbiBzcGVlZCB3aWxsIGNoYW5nZSBkZXBlbmRpbmcgb24gdGhlIGZyYW1lIHJhdGUgKGJ1dCBiZWhhdmlvdXIgd2lsbCBiZSBkZXRlcm1pbmlzdGljKS5cbiAgICAgKiBJZiB0aGUgdGltaW5nIGlzIHZhcmlhYmxlLCB0aGVuIHRoZSBhcHBhcmVudCBzaW11bGF0aW9uIHNwZWVkIHdpbGwgYmUgY29uc3RhbnQgKGFwcHJveGltYXRlbHksIGJ1dCBhdCB0aGUgY29zdCBvZiBkZXRlcm1pbmluaXNtKS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBpc0ZpeGVkXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIHRoZSB0aW1lIHN0ZXAgYmV0d2VlbiB1cGRhdGVzIGluIG1pbGxpc2Vjb25kcy5cbiAgICAgKiBJZiBgZW5naW5lLnRpbWluZy5pc0ZpeGVkYCBpcyBzZXQgdG8gYHRydWVgLCB0aGVuIGBkZWx0YWAgaXMgZml4ZWQuXG4gICAgICogSWYgaXQgaXMgYGZhbHNlYCwgdGhlbiBgZGVsdGFgIGNhbiBkeW5hbWljYWxseSBjaGFuZ2UgdG8gbWFpbnRhaW4gdGhlIGNvcnJlY3QgYXBwYXJlbnQgc2ltdWxhdGlvbiBzcGVlZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBkZWx0YVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDEwMDAgLyA2MFxuICAgICAqL1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMjggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoaXMgbW9kdWxlIGhhcyBub3cgYmVlbiByZXBsYWNlZCBieSBgTWF0dGVyLkNvbGxpc2lvbmAuXG4qXG4qIEFsbCB1c2FnZSBzaG91bGQgYmUgbWlncmF0ZWQgdG8gYE1hdHRlci5Db2xsaXNpb25gLlxuKiBGb3IgYmFjay1jb21wYXRpYmlsaXR5IHB1cnBvc2VzIHRoaXMgbW9kdWxlIHdpbGwgcmVtYWluIGZvciBhIHNob3J0IHRlcm0gYW5kIHRoZW4gbGF0ZXIgcmVtb3ZlZCBpbiBhIGZ1dHVyZSByZWxlYXNlLlxuKlxuKiBUaGUgYE1hdHRlci5TQVRgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBkZXRlY3RpbmcgY29sbGlzaW9ucyB1c2luZyB0aGUgU2VwYXJhdGluZyBBeGlzIFRoZW9yZW0uXG4qXG4qIEBjbGFzcyBTQVRcbiogQGRlcHJlY2F0ZWRcbiovXG5cbnZhciBTQVQgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBTQVQ7XG5cbnZhciBDb2xsaXNpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgZGVwcmVjYXRlZCA9IENvbW1vbi5kZXByZWNhdGVkO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlY3QgY29sbGlzaW9uIGJldHdlZW4gdHdvIGJvZGllcyB1c2luZyB0aGUgU2VwYXJhdGluZyBBeGlzIFRoZW9yZW0uXG4gICAgICogQGRlcHJlY2F0ZWQgcmVwbGFjZWQgYnkgQ29sbGlzaW9uLmNvbGxpZGVzXG4gICAgICogQG1ldGhvZCBjb2xsaWRlc1xuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keUFcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlCXG4gICAgICogQHJldHVybiB7Y29sbGlzaW9ufSBjb2xsaXNpb25cbiAgICAgKi9cbiAgICBTQVQuY29sbGlkZXMgPSBmdW5jdGlvbihib2R5QSwgYm9keUIpIHtcbiAgICAgICAgcmV0dXJuIENvbGxpc2lvbi5jb2xsaWRlcyhib2R5QSwgYm9keUIpO1xuICAgIH07XG5cbiAgICBkZXByZWNhdGVkKFNBVCwgJ2NvbGxpZGVzJywgJ1NBVC5jb2xsaWRlcyDinqQgcmVwbGFjZWQgYnkgQ29sbGlzaW9uLmNvbGxpZGVzJyk7XG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAyOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuU3ZnYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY29udmVydGluZyBTVkcgaW1hZ2VzIGludG8gYW4gYXJyYXkgb2YgdmVjdG9yIHBvaW50cy5cbipcbiogVG8gdXNlIHRoaXMgbW9kdWxlIHlvdSBhbHNvIG5lZWQgdGhlIFNWR1BhdGhTZWcgcG9seWZpbGw6IGh0dHBzOi8vZ2l0aHViLmNvbS9wcm9nZXJzL3BhdGhzZWdcbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIFN2Z1xuKi9cblxudmFyIFN2ZyA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN2ZztcblxudmFyIEJvdW5kcyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYW4gU1ZHIHBhdGggaW50byBhbiBhcnJheSBvZiB2ZWN0b3IgcG9pbnRzLlxuICAgICAqIElmIHRoZSBpbnB1dCBwYXRoIGZvcm1zIGEgY29uY2F2ZSBzaGFwZSwgeW91IG11c3QgZGVjb21wb3NlIHRoZSByZXN1bHQgaW50byBjb252ZXggcGFydHMgYmVmb3JlIHVzZS5cbiAgICAgKiBTZWUgYEJvZGllcy5mcm9tVmVydGljZXNgIHdoaWNoIHByb3ZpZGVzIHN1cHBvcnQgZm9yIHRoaXMuXG4gICAgICogTm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IGd1YXJhbnRlZWQgdG8gc3VwcG9ydCBjb21wbGV4IHBhdGhzIChzdWNoIGFzIHRob3NlIHdpdGggaG9sZXMpLlxuICAgICAqIFlvdSBtdXN0IGxvYWQgdGhlIGBwYXRoc2VnLmpzYCBwb2x5ZmlsbCBvbiBuZXdlciBicm93c2Vycy5cbiAgICAgKiBAbWV0aG9kIHBhdGhUb1ZlcnRpY2VzXG4gICAgICogQHBhcmFtIHtTVkdQYXRoRWxlbWVudH0gcGF0aFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbc2FtcGxlTGVuZ3RoPTE1XVxuICAgICAqIEByZXR1cm4ge1ZlY3RvcltdfSBwb2ludHNcbiAgICAgKi9cbiAgICBTdmcucGF0aFRvVmVydGljZXMgPSBmdW5jdGlvbihwYXRoLCBzYW1wbGVMZW5ndGgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICEoJ1NWR1BhdGhTZWcnIGluIHdpbmRvdykpIHtcbiAgICAgICAgICAgIENvbW1vbi53YXJuKCdTdmcucGF0aFRvVmVydGljZXM6IFNWR1BhdGhTZWcgbm90IGRlZmluZWQsIGEgcG9seWZpbGwgaXMgcmVxdWlyZWQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vd291dC9zdmcudG9wb2x5LmpzL2Jsb2IvbWFzdGVyL3N2Zy50b3BvbHkuanNcbiAgICAgICAgdmFyIGksIGlsLCB0b3RhbCwgcG9pbnQsIHNlZ21lbnQsIHNlZ21lbnRzLCBcbiAgICAgICAgICAgIHNlZ21lbnRzUXVldWUsIGxhc3RTZWdtZW50LCBcbiAgICAgICAgICAgIGxhc3RQb2ludCwgc2VnbWVudEluZGV4LCBwb2ludHMgPSBbXSxcbiAgICAgICAgICAgIGx4LCBseSwgbGVuZ3RoID0gMCwgeCA9IDAsIHkgPSAwO1xuXG4gICAgICAgIHNhbXBsZUxlbmd0aCA9IHNhbXBsZUxlbmd0aCB8fCAxNTtcblxuICAgICAgICB2YXIgYWRkUG9pbnQgPSBmdW5jdGlvbihweCwgcHksIHBhdGhTZWdUeXBlKSB7XG4gICAgICAgICAgICAvLyBhbGwgb2RkLW51bWJlcmVkIHBhdGggdHlwZXMgYXJlIHJlbGF0aXZlIGV4Y2VwdCBQQVRIU0VHX0NMT1NFUEFUSCAoMSlcbiAgICAgICAgICAgIHZhciBpc1JlbGF0aXZlID0gcGF0aFNlZ1R5cGUgJSAyID09PSAxICYmIHBhdGhTZWdUeXBlID4gMTtcblxuICAgICAgICAgICAgLy8gd2hlbiB0aGUgbGFzdCBwb2ludCBkb2Vzbid0IGVxdWFsIHRoZSBjdXJyZW50IHBvaW50IGFkZCB0aGUgY3VycmVudCBwb2ludFxuICAgICAgICAgICAgaWYgKCFsYXN0UG9pbnQgfHwgcHggIT0gbGFzdFBvaW50LnggfHwgcHkgIT0gbGFzdFBvaW50LnkpIHtcbiAgICAgICAgICAgICAgICBpZiAobGFzdFBvaW50ICYmIGlzUmVsYXRpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgbHggPSBsYXN0UG9pbnQueDtcbiAgICAgICAgICAgICAgICAgICAgbHkgPSBsYXN0UG9pbnQueTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBseCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGx5ID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgcG9pbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGx4ICsgcHgsXG4gICAgICAgICAgICAgICAgICAgIHk6IGx5ICsgcHlcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gc2V0IGxhc3QgcG9pbnRcbiAgICAgICAgICAgICAgICBpZiAoaXNSZWxhdGl2ZSB8fCAhbGFzdFBvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RQb2ludCA9IHBvaW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBvaW50cy5wdXNoKHBvaW50KTtcblxuICAgICAgICAgICAgICAgIHggPSBseCArIHB4O1xuICAgICAgICAgICAgICAgIHkgPSBseSArIHB5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBhZGRTZWdtZW50UG9pbnQgPSBmdW5jdGlvbihzZWdtZW50KSB7XG4gICAgICAgICAgICB2YXIgc2VnVHlwZSA9IHNlZ21lbnQucGF0aFNlZ1R5cGVBc0xldHRlci50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgICAgICAvLyBza2lwIHBhdGggZW5kc1xuICAgICAgICAgICAgaWYgKHNlZ1R5cGUgPT09ICdaJykgXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAvLyBtYXAgc2VnbWVudCB0byB4IGFuZCB5XG4gICAgICAgICAgICBzd2l0Y2ggKHNlZ1R5cGUpIHtcblxuICAgICAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgICBjYXNlICdMJzpcbiAgICAgICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgIGNhc2UgJ1EnOlxuICAgICAgICAgICAgICAgIHggPSBzZWdtZW50Lng7XG4gICAgICAgICAgICAgICAgeSA9IHNlZ21lbnQueTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0gnOlxuICAgICAgICAgICAgICAgIHggPSBzZWdtZW50Lng7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdWJzpcbiAgICAgICAgICAgICAgICB5ID0gc2VnbWVudC55O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhZGRQb2ludCh4LCB5LCBzZWdtZW50LnBhdGhTZWdUeXBlKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBlbnN1cmUgcGF0aCBpcyBhYnNvbHV0ZVxuICAgICAgICBTdmcuX3N2Z1BhdGhUb0Fic29sdXRlKHBhdGgpO1xuXG4gICAgICAgIC8vIGdldCB0b3RhbCBsZW5ndGhcbiAgICAgICAgdG90YWwgPSBwYXRoLmdldFRvdGFsTGVuZ3RoKCk7XG5cbiAgICAgICAgLy8gcXVldWUgc2VnbWVudHNcbiAgICAgICAgc2VnbWVudHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhdGgucGF0aFNlZ0xpc3QubnVtYmVyT2ZJdGVtczsgaSArPSAxKVxuICAgICAgICAgICAgc2VnbWVudHMucHVzaChwYXRoLnBhdGhTZWdMaXN0LmdldEl0ZW0oaSkpO1xuXG4gICAgICAgIHNlZ21lbnRzUXVldWUgPSBzZWdtZW50cy5jb25jYXQoKTtcblxuICAgICAgICAvLyBzYW1wbGUgdGhyb3VnaCBwYXRoXG4gICAgICAgIHdoaWxlIChsZW5ndGggPCB0b3RhbCkge1xuICAgICAgICAgICAgLy8gZ2V0IHNlZ21lbnQgYXQgcG9zaXRpb25cbiAgICAgICAgICAgIHNlZ21lbnRJbmRleCA9IHBhdGguZ2V0UGF0aFNlZ0F0TGVuZ3RoKGxlbmd0aCk7XG4gICAgICAgICAgICBzZWdtZW50ID0gc2VnbWVudHNbc2VnbWVudEluZGV4XTtcblxuICAgICAgICAgICAgLy8gbmV3IHNlZ21lbnRcbiAgICAgICAgICAgIGlmIChzZWdtZW50ICE9IGxhc3RTZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHNlZ21lbnRzUXVldWUubGVuZ3RoICYmIHNlZ21lbnRzUXVldWVbMF0gIT0gc2VnbWVudClcbiAgICAgICAgICAgICAgICAgICAgYWRkU2VnbWVudFBvaW50KHNlZ21lbnRzUXVldWUuc2hpZnQoKSk7XG5cbiAgICAgICAgICAgICAgICBsYXN0U2VnbWVudCA9IHNlZ21lbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFkZCBwb2ludHMgaW4gYmV0d2VlbiB3aGVuIGN1cnZpbmdcbiAgICAgICAgICAgIC8vIFRPRE86IGFkYXB0aXZlIHNhbXBsaW5nXG4gICAgICAgICAgICBzd2l0Y2ggKHNlZ21lbnQucGF0aFNlZ1R5cGVBc0xldHRlci50b1VwcGVyQ2FzZSgpKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ0MnOlxuICAgICAgICAgICAgY2FzZSAnVCc6XG4gICAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgIGNhc2UgJ1EnOlxuICAgICAgICAgICAgY2FzZSAnQSc6XG4gICAgICAgICAgICAgICAgcG9pbnQgPSBwYXRoLmdldFBvaW50QXRMZW5ndGgobGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBhZGRQb2ludChwb2ludC54LCBwb2ludC55LCAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpbmNyZW1lbnQgYnkgc2FtcGxlIHZhbHVlXG4gICAgICAgICAgICBsZW5ndGggKz0gc2FtcGxlTGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIHJlbWFpbmluZyBzZWdtZW50cyBub3QgcGFzc2VkIGJ5IHNhbXBsaW5nXG4gICAgICAgIGZvciAoaSA9IDAsIGlsID0gc2VnbWVudHNRdWV1ZS5sZW5ndGg7IGkgPCBpbDsgKytpKVxuICAgICAgICAgICAgYWRkU2VnbWVudFBvaW50KHNlZ21lbnRzUXVldWVbaV0pO1xuXG4gICAgICAgIHJldHVybiBwb2ludHM7XG4gICAgfTtcblxuICAgIFN2Zy5fc3ZnUGF0aFRvQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XG4gICAgICAgIC8vIGh0dHA6Ly9waHJvZ3oubmV0L2NvbnZlcnQtc3ZnLXBhdGgtdG8tYWxsLWFic29sdXRlLWNvbW1hbmRzXG4gICAgICAgIC8vIENvcHlyaWdodCAoYykgR2F2aW4gS2lzdG5lclxuICAgICAgICAvLyBodHRwOi8vcGhyb2d6Lm5ldC9qcy9fUmV1c2VMaWNlbnNlLnR4dFxuICAgICAgICAvLyBNb2RpZmljYXRpb25zOiB0aWR5IGZvcm1hdHRpbmcgYW5kIG5hbWluZ1xuICAgICAgICB2YXIgeDAsIHkwLCB4MSwgeTEsIHgyLCB5Miwgc2VncyA9IHBhdGgucGF0aFNlZ0xpc3QsXG4gICAgICAgICAgICB4ID0gMCwgeSA9IDAsIGxlbiA9IHNlZ3MubnVtYmVyT2ZJdGVtcztcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICB2YXIgc2VnID0gc2Vncy5nZXRJdGVtKGkpLFxuICAgICAgICAgICAgICAgIHNlZ1R5cGUgPSBzZWcucGF0aFNlZ1R5cGVBc0xldHRlcjtcblxuICAgICAgICAgICAgaWYgKC9bTUxIVkNTUVRBXS8udGVzdChzZWdUeXBlKSkge1xuICAgICAgICAgICAgICAgIGlmICgneCcgaW4gc2VnKSB4ID0gc2VnLng7XG4gICAgICAgICAgICAgICAgaWYgKCd5JyBpbiBzZWcpIHkgPSBzZWcueTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCd4MScgaW4gc2VnKSB4MSA9IHggKyBzZWcueDE7XG4gICAgICAgICAgICAgICAgaWYgKCd4MicgaW4gc2VnKSB4MiA9IHggKyBzZWcueDI7XG4gICAgICAgICAgICAgICAgaWYgKCd5MScgaW4gc2VnKSB5MSA9IHkgKyBzZWcueTE7XG4gICAgICAgICAgICAgICAgaWYgKCd5MicgaW4gc2VnKSB5MiA9IHkgKyBzZWcueTI7XG4gICAgICAgICAgICAgICAgaWYgKCd4JyBpbiBzZWcpIHggKz0gc2VnLng7XG4gICAgICAgICAgICAgICAgaWYgKCd5JyBpbiBzZWcpIHkgKz0gc2VnLnk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHNlZ1R5cGUpIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgJ20nOlxuICAgICAgICAgICAgICAgICAgICBzZWdzLnJlcGxhY2VJdGVtKHBhdGguY3JlYXRlU1ZHUGF0aFNlZ01vdmV0b0Ficyh4LCB5KSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2wnOlxuICAgICAgICAgICAgICAgICAgICBzZWdzLnJlcGxhY2VJdGVtKHBhdGguY3JlYXRlU1ZHUGF0aFNlZ0xpbmV0b0Ficyh4LCB5KSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgICAgICAgICBzZWdzLnJlcGxhY2VJdGVtKHBhdGguY3JlYXRlU1ZHUGF0aFNlZ0xpbmV0b0hvcml6b250YWxBYnMoeCksIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICd2JzpcbiAgICAgICAgICAgICAgICAgICAgc2Vncy5yZXBsYWNlSXRlbShwYXRoLmNyZWF0ZVNWR1BhdGhTZWdMaW5ldG9WZXJ0aWNhbEFicyh5KSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgICAgICAgICBzZWdzLnJlcGxhY2VJdGVtKHBhdGguY3JlYXRlU1ZHUGF0aFNlZ0N1cnZldG9DdWJpY0Ficyh4LCB5LCB4MSwgeTEsIHgyLCB5MiksIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgICAgICAgICAgc2Vncy5yZXBsYWNlSXRlbShwYXRoLmNyZWF0ZVNWR1BhdGhTZWdDdXJ2ZXRvQ3ViaWNTbW9vdGhBYnMoeCwgeSwgeDIsIHkyKSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3EnOlxuICAgICAgICAgICAgICAgICAgICBzZWdzLnJlcGxhY2VJdGVtKHBhdGguY3JlYXRlU1ZHUGF0aFNlZ0N1cnZldG9RdWFkcmF0aWNBYnMoeCwgeSwgeDEsIHkxKSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3QnOlxuICAgICAgICAgICAgICAgICAgICBzZWdzLnJlcGxhY2VJdGVtKHBhdGguY3JlYXRlU1ZHUGF0aFNlZ0N1cnZldG9RdWFkcmF0aWNTbW9vdGhBYnMoeCwgeSksIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgICAgICAgICAgICAgc2Vncy5yZXBsYWNlSXRlbShwYXRoLmNyZWF0ZVNWR1BhdGhTZWdBcmNBYnMoeCwgeSwgc2VnLnIxLCBzZWcucjIsIHNlZy5hbmdsZSwgc2VnLmxhcmdlQXJjRmxhZywgc2VnLnN3ZWVwRmxhZyksIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICd6JzpcbiAgICAgICAgICAgICAgICBjYXNlICdaJzpcbiAgICAgICAgICAgICAgICAgICAgeCA9IHgwO1xuICAgICAgICAgICAgICAgICAgICB5ID0geTA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VnVHlwZSA9PSAnTScgfHwgc2VnVHlwZSA9PSAnbScpIHtcbiAgICAgICAgICAgICAgICB4MCA9IHg7XG4gICAgICAgICAgICAgICAgeTAgPSB5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxufSkoKTtcblxuLyoqKi8gfSksXG4vKiAzMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhpcyBtb2R1bGUgaGFzIG5vdyBiZWVuIHJlcGxhY2VkIGJ5IGBNYXR0ZXIuQ29tcG9zaXRlYC5cbipcbiogQWxsIHVzYWdlIHNob3VsZCBiZSBtaWdyYXRlZCB0byB0aGUgZXF1aXZhbGVudCBmdW5jdGlvbnMgZm91bmQgb24gYE1hdHRlci5Db21wb3NpdGVgLlxuKiBGb3IgZXhhbXBsZSBgV29ybGQuYWRkKHdvcmxkLCBib2R5KWAgbm93IGJlY29tZXMgYENvbXBvc2l0ZS5hZGQod29ybGQsIGJvZHkpYC5cbipcbiogVGhlIHByb3BlcnR5IGB3b3JsZC5ncmF2aXR5YCBoYXMgYmVlbiBtb3ZlZCB0byBgZW5naW5lLmdyYXZpdHlgLlxuKlxuKiBGb3IgYmFjay1jb21wYXRpYmlsaXR5IHB1cnBvc2VzIHRoaXMgbW9kdWxlIHdpbGwgcmVtYWluIGFzIGEgZGlyZWN0IGFsaWFzIHRvIGBNYXR0ZXIuQ29tcG9zaXRlYCBpbiB0aGUgc2hvcnQgdGVybSBkdXJpbmcgbWlncmF0aW9uLlxuKiBFdmVudHVhbGx5IHRoaXMgYWxpYXMgbW9kdWxlIHdpbGwgYmUgbWFya2VkIGFzIGRlcHJlY2F0ZWQgYW5kIHRoZW4gbGF0ZXIgcmVtb3ZlZCBpbiBhIGZ1dHVyZSByZWxlYXNlLlxuKlxuKiBAY2xhc3MgV29ybGRcbiovXG5cbnZhciBXb3JsZCA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdvcmxkO1xuXG52YXIgQ29tcG9zaXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBTZWUgYWJvdmUsIGFsaWFzZXMgZm9yIGJhY2sgY29tcGF0aWJpbGl0eSBvbmx5XG4gICAgICovXG4gICAgV29ybGQuY3JlYXRlID0gQ29tcG9zaXRlLmNyZWF0ZTtcbiAgICBXb3JsZC5hZGQgPSBDb21wb3NpdGUuYWRkO1xuICAgIFdvcmxkLnJlbW92ZSA9IENvbXBvc2l0ZS5yZW1vdmU7XG4gICAgV29ybGQuY2xlYXIgPSBDb21wb3NpdGUuY2xlYXI7XG4gICAgV29ybGQuYWRkQ29tcG9zaXRlID0gQ29tcG9zaXRlLmFkZENvbXBvc2l0ZTtcbiAgICBXb3JsZC5hZGRCb2R5ID0gQ29tcG9zaXRlLmFkZEJvZHk7XG4gICAgV29ybGQuYWRkQ29uc3RyYWludCA9IENvbXBvc2l0ZS5hZGRDb25zdHJhaW50O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pOyIsImltcG9ydCBHYW1lRW5naW5lIGZyb20gXCIuLi8uLi9jb3JlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZlYWJsZSB7XHJcblxyXG4gICAgaW5pdFg7XHJcbiAgICBpbml0WTtcclxuICAgIHdpZHRoO1xyXG4gICAgaGVpZ2h0O1xyXG4gICAgb3B0aW9ucztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcz17fSkge1xyXG4gICAgICAgIHRoaXMuaW5pdFggPSBwcm9wcy54IHx8IDA7XHJcbiAgICAgICAgdGhpcy5pbml0WSA9IHByb3BzLnkgfHwgMDtcclxuICAgICAgICB0aGlzLndpZHRoID0gcHJvcHMudyB8fCAxMDA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBwcm9wcy5oIHx8IDEwMDtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBwcm9wcy5vcHRpb25zIHx8IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGUocHJvcHM9e30pIHtcclxuICAgICAgICBsZXQgYm9keSA9IG5ldyBNb3ZlYWJsZShwcm9wcyk7XHJcbiAgICAgICAgcmV0dXJuIEdhbWVFbmdpbmUuZ2V0TWF0dGVyKCkuQm9kaWVzLnJlY3RhbmdsZShib2R5LmluaXRYLCBib2R5LmluaXRZLCBib2R5LndpZHRoLCBib2R5LmhlaWdodCwgdGhpcy5vcHRpb25zKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgTW92ZWFibGUgZnJvbSBcIi4vTW92ZWFibGVcIjtcclxuaW1wb3J0IEdhbWVFbmdpbmUgZnJvbSBcIi4uLy4uL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmVhYmxlU3RhY2sge1xyXG5cclxuICAgIHJvd3M7XHJcbiAgICBpbml0WDtcclxuICAgIGluaXRZO1xyXG4gICAgY29sdW1ucztcclxuICAgIGNvbHVtbkdhcDtcclxuICAgIHJvd0dhcDtcclxuICAgIGVudGl0eTtcclxuICAgIGVudGl0aWVzO1xyXG4gICAgY29sbGlzaW9uR3JvdXA7XHJcbiAgICByZW5kZXI7XHJcbiAgICBkZWZhdWx0T3B0aW9ucztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcz17fSkge1xyXG4gICAgICAgIHRoaXMucm93cyA9IHByb3BzLnJvdyB8fCAyMDtcclxuICAgICAgICB0aGlzLmNvbHVtbnMgPSBwcm9wcy5jb2x1bW5zIHx8IDc7XHJcbiAgICAgICAgdGhpcy5pbml0WCA9IHByb3BzLnggfHwgNjAwO1xyXG4gICAgICAgIHRoaXMuaW5pdFkgPSBwcm9wcy55IHx8IDYwMDtcclxuICAgICAgICB0aGlzLmNvbHVtbkdhcCA9IHByb3BzLmNvbHVtbkdhcCB8fCA1O1xyXG4gICAgICAgIHRoaXMucm93R2FwID0gcHJvcHMucm93R2FwIHx8IDU7XHJcbiAgICAgICAgdGhpcy5lbnRpdHkgPSBNb3ZlYWJsZTtcclxuICAgICAgICB0aGlzLmVudGl0aWVzID0gW107XHJcbiAgICAgICAgdGhpcy5jb2xsaXNpb25GaWx0ZXIgPSBwcm9wcy5jb2xsaXNpb25GaWx0ZXIgfHwge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogMHgwMDAxLFxyXG4gICAgICAgICAgICBtYXNrOiAweEZGRkZGRkZGLFxyXG4gICAgICAgICAgICBncm91cDogMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0R3JvdXBPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBjb2xsaXNpb25GaWx0ZXI6IHRoaXMuY29sbGlzaW9uRmlsdGVyXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBHYW1lRW5naW5lLmdldE1hdHRlcigpLkNvbXBvc2l0ZXMuc3RhY2soXHJcbiAgICAgICAgICAgIHRoaXMuaW5pdFgsXHJcbiAgICAgICAgICAgIHRoaXMuaW5pdFksXHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucyxcclxuICAgICAgICAgICAgdGhpcy5yb3dzLFxyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbkdhcCxcclxuICAgICAgICAgICAgdGhpcy5yb3dHYXAsXHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRW50aXR5LmJpbmQodGhpcylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUVudGl0eSh4LCB5KSB7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyID0ge1xyXG4gICAgICAgICAgICByZW5kZXI6IHtcclxuICAgICAgICAgICAgICAgIGZpbGxTdHlsZTogJyMyMjInXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSB7Li4udGhpcy5kZWZhdWx0R3JvdXBPcHRpb25zLCAuLi50aGlzLnJlbmRlciB9XHJcbiAgICAgICAgbGV0IG9iaiA9IHRoaXMuZW50aXR5LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIHg6IHgsXHJcbiAgICAgICAgICAgIHk6IHksXHJcbiAgICAgICAgICAgIHc6IDUwLFxyXG4gICAgICAgICAgICBoOiA1MCxcclxuICAgICAgICAgICAgb3B0aW9uczogdGhpcy5kZWZhdWx0T3B0aW9uc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZW50aXRpZXMucHVzaChvYmopO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IE1hdHRlciBmcm9tICdtYXR0ZXItanMnXHJcbmltcG9ydCBNb3ZlYWJsZVN0YWNrIGZyb20gXCIuL1dvcmxkL0dhbWVFbnRpdGllcy9Nb3ZlYWJsZVN0YWNrXCI7XHJcbi8vaW1wb3J0IE1hdHRlciBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL21hdHRlci1qcy9idWlsZC9tYXR0ZXIuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVFbmdpbmUge1xyXG5cclxuICAgIHN0YXRpYyBtYXR0ZXI7XHJcblxyXG4gICAgZW5naW5lO1xyXG4gICAgd29ybGQ7XHJcbiAgICBydW5uZXI7XHJcblxyXG4gICAgZ3Jhdml0eTtcclxuXHJcbiAgICByZW5kZXJlcjtcclxuICAgIGRlYnVnUmVuZGVyT3B0aW9ucztcclxuXHJcbiAgICBzdGFnZTtcclxuICAgIHN0YWdlV2lkdGg7XHJcbiAgICBzdGFnZUhlaWdodDtcclxuXHJcbiAgICBncm91cHM7XHJcblxyXG4gICAgc3RhZ2UwMTtcclxuXHJcbiAgICBoZXJvO1xyXG4gICAgY2hhaW47XHJcbiAgICBjaGFpblJhaWw7XHJcbiAgICBjaGFpbkNvbXBvc2l0ZTtcclxuICAgIGNoYWluTWFpbkNvbnN0cmFpbnQ7XHJcbiAgICBjaGFpbkhhbmQ7XHJcbiAgICBjaGFpbk1heExlbmdodDtcclxuICAgIGNoYWluTWluTGVuZ2h0O1xyXG5cclxuICAgIGRpcmVjdGlvblg7XHJcbiAgICBkaXJlY3Rpb25ZO1xyXG4gICAgc3BlZWRZO1xyXG4gICAgc3BlZWRYO1xyXG4gICAgdmVsb2NpdHk7XHJcbiAgICBtYXhTcGVlZDtcclxuICAgIGluaXRTcGVlZDtcclxuICAgIGluaXRTcGVlZFk7XHJcbiAgICBpbml0U3BlZWRYO1xyXG5cclxuICAgIG1vdG9yVG9ycXVlO1xyXG5cclxuICAgIGdhbWVDb2xsaXNpb247XHJcbiAgICBvdXRPZk1haW5HYW1lO1xyXG5cclxuICAgIGJvZHlTdHlsZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih3PTgwMCwgaD02MDApIHtcclxuICAgICAgICB0aGlzLnN0YWdlV2lkdGggPSB3O1xyXG4gICAgICAgIHRoaXMuc3RhZ2VIZWlnaHQgPSBoO1xyXG4gICAgICAgIHRoaXMuc3RhZ2UgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLnN0YWdlV2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5zdGFnZUhlaWdodCxcclxuICAgICAgICAgICAgd2lyZWZyYW1lczogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1vdG9yVG9ycXVlID0gMjtcclxuICAgICAgICB0aGlzLmNoYWluTWluTGVuZ2h0ID0gMTtcclxuICAgICAgICB0aGlzLmNoYWluTWF4TGVuZ2h0ID0gMjAwO1xyXG4gICAgICAgIHRoaXMuZGVidWdSZW5kZXJPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBzaG93QW5nbGVJbmRpY2F0b3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93Q29sbGlzaW9uczogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dWZWxvY2l0eTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ncm91cHMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIndvcmxkXCIsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOiBbXSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5nYW1lQ29sbGlzaW9uID0gMHgwMDAxO1xyXG4gICAgICAgIHRoaXMub3V0T2ZNYWluR2FtZSA9IDB4MDAwMjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0TWF0dGVyKCkge1xyXG4gICAgICAgIGlmIChHYW1lRW5naW5lLm1hdHRlciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIEdhbWVFbmdpbmUubWF0dGVyID0gTWF0dGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gR2FtZUVuZ2luZS5tYXR0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICAgdGhpcy5lbmdpbmUgPSBNYXR0ZXIuRW5naW5lLmNyZWF0ZSgpO1xyXG4gICAgICAgICB0aGlzLndvcmxkID0gdGhpcy5lbmdpbmUud29ybGQ7XHJcblxyXG4gICAgICAgICB0aGlzLmVudGl0aWVzKCk7XHJcblxyXG4gICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICB0aGlzLnJ1bigpO1xyXG5cclxuICAgICAgICAgdGhpcy5jb250cm9scygpO1xyXG4gICAgICAgICB0aGlzLmFjdGlvbnMoKTtcclxuXHJcbiAgICAgICAgIHRoaXMuY29sbGlzaW9ucygpO1xyXG4gICAgICAgICB0aGlzLmdyYXZpdHkgPSB0aGlzLndvcmxkLmdyYXZpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBNYXR0ZXIuUmVuZGVyLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JhbmVHYW1lXCIpLFxyXG4gICAgICAgICAgICBlbmdpbmU6IHRoaXMuZW5naW5lLFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7Li4udGhpcy5zdGFnZSwgLi4udGhpcy5kZWJ1Z1JlbmRlck9wdGlvbnN9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBNYXR0ZXIuUmVuZGVyLnJ1bih0aGlzLnJlbmRlcmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgdGhpcy5ydW5uZXIgPSBNYXR0ZXIuUnVubmVyLmNyZWF0ZSgpO1xyXG4gICAgICAgIE1hdHRlci5SdW5uZXIucnVuKHRoaXMucnVubmVyLCB0aGlzLmVuZ2luZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZW50aXRpZXMoKSB7XHJcbiAgICAgICAgLy9sZXQgZ3JvdXAgPSBNYXR0ZXIuQm9keS5uZXh0R3JvdXAodHJ1ZSk7XHJcbiAgICAgICAgbGV0IHN0YXRpY1RoaWNrbmVzcyA9IDUwO1xyXG4gICAgICAgIGxldCBtb3ZlYWJsZVN0YWNrMDEgPSBuZXcgTW92ZWFibGVTdGFjayh7fSk7XHJcbiAgICAgICAgbGV0IGZsb29yID0gTWF0dGVyLkJvZGllcy5yZWN0YW5nbGUodGhpcy5zdGFnZVdpZHRoLzIsIHRoaXMuc3RhZ2VIZWlnaHQtMTAsIHRoaXMuc3RhZ2VXaWR0aCwgc3RhdGljVGhpY2tuZXNzLCB7IGlzU3RhdGljOiB0cnVlIH0pO1xyXG4gICAgICAgIHRoaXMuY2hhaW5SYWlsID0gIE1hdHRlci5Cb2RpZXMucmVjdGFuZ2xlKHRoaXMuc3RhZ2VXaWR0aC8yLCB0aGlzLnN0YWdlSGVpZ2h0LzcsIHRoaXMuc3RhZ2VXaWR0aCwgc3RhdGljVGhpY2tuZXNzLCB7IGlzU3RhdGljOiB0cnVlIH0pO1xyXG4gICAgICAgIHRoaXMuY2hhaW5SYWlsLnZpc2liaWxpdHlTdGF0ZSA9IFwic2hvd2VkXCI7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhZ2UwMSA9IE1hdHRlci5Db21wb3NpdGUuYWRkKHRoaXMud29ybGQsIFtcclxuICAgICAgICAgICAgbW92ZWFibGVTdGFjazAxLFxyXG4gICAgICAgICAgICBmbG9vcixcclxuICAgICAgICAgICAgdGhpcy5jaGFpblJhaWwsXHJcbiAgICAgICAgICAgIE1hdHRlci5Cb2RpZXMucmVjdGFuZ2xlKDAsIHRoaXMuc3RhZ2VIZWlnaHQvMiwgc3RhdGljVGhpY2tuZXNzLCB0aGlzLnN0YWdlV2lkdGgsIHsgaXNTdGF0aWM6IHRydWUgfSksXHJcbiAgICAgICAgICAgIE1hdHRlci5Cb2RpZXMucmVjdGFuZ2xlKHRoaXMuc3RhZ2VXaWR0aCwgdGhpcy5zdGFnZUhlaWdodC8yLCBzdGF0aWNUaGlja25lc3MsIHRoaXMuc3RhZ2VXaWR0aCwgeyBpc1N0YXRpYzogdHJ1ZSB9KVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICB2YXIgc3RhcnRYID0gMjAwLCBzdGFydFkgPSA1MCwgbGFzdFggPSBzdGFydFgsIGxhc3RZID0gc3RhcnRZLFxyXG4gICAgICAgICAgICBjaGFpbkxpbmtIZWlnaHQ9NTAsXHJcbiAgICAgICAgICAgIGNoYWluTGlua1dpZHRoPTUsXHJcbiAgICAgICAgICAgIGR5bmFtaWNPYmplY3REZW5zaXR5ID0gMC4xO1xyXG5cclxuICAgICAgICAvL2NvbGxpc2lvbkZpbHRlcjogeyBncm91cDogZ3JvdXAgfSxcclxuICAgICAgICB0aGlzLmhlcm8gPSBNYXR0ZXIuQm9kaWVzLmNpcmNsZShzdGFydFgsIHN0YXJ0WSwgMjUsIHsgY2hhbWZlcjogMCwgZnJpY3Rpb246MC41LCBkZW5zaXR5OmR5bmFtaWNPYmplY3REZW5zaXR5IH0pO1xyXG4gICAgICAgIC8vdGhpcy5oZXJvLmlzU3RhdGljID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgIC8vZ3JvdXAgPSBNYXR0ZXIuQm9keS5uZXh0R3JvdXAoZmFsc2UpO1xyXG5cclxuXHJcbiAgICAgICAgLy9ncm91cCA9IE1hdHRlci5Cb2R5Lm5leHRHcm91cCh0cnVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFpbiA9IE1hdHRlci5Db21wb3NpdGVzLnN0YWNrKHN0YXJ0WCwgc3RhcnRZK2NoYWluTGlua0hlaWdodCoyLCAxLCA0LCA0LCA0LCBmdW5jdGlvbih4LCB5KSB7XHJcbiAgICAgICAgICAgIGxhc3RYID0geDsgbGFzdFkgPSB5O1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0dGVyLkJvZGllcy5yZWN0YW5nbGUoeCwgeSwgY2hhaW5MaW5rV2lkdGgsIGNoYWluTGlua0hlaWdodCwge1xyXG4gICAgICAgICAgICAgICAgY29sbGlzaW9uRmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IDB4MDAwMixcclxuICAgICAgICAgICAgICAgICAgICBncm91cDogMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIGNoYWluQW5jaG9yID0gdGhpcy5jaGFpbi5ib2RpZXNbMF07XHJcbiAgICAgICAgdmFyIGNoYWluV3Jpc3QgPSB0aGlzLmNoYWluLmJvZGllc1t0aGlzLmNoYWluLmJvZGllcy5sZW5ndGgtMV07XHJcblxyXG4gICAgICAgIHRoaXMuY2hhaW5IYW5kID0gTWF0dGVyLkJvZGllcy5jaXJjbGUoY2hhaW5XcmlzdC5wb3NpdGlvbi54LCBjaGFpbldyaXN0LnBvc2l0aW9uLnkgKyBjaGFpbkxpbmtIZWlnaHQsIDEwLCB7IGNoYW1mZXI6IDAgfSk7XHJcbiAgICAgICAgdGhpcy5jaGFpbi5ib2RpZXMucHVzaCh0aGlzLmNoYWluSGFuZCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhaW5Db21wb3NpdGUgPSBNYXR0ZXIuQ29tcG9zaXRlcy5jaGFpbih0aGlzLmNoYWluLCAwLCAwLjUsIDAsIC0wLjUsIHsgbGVuZ3RoOiAwLjAwMSB9KTtcclxuICAgICAgICB0aGlzLmNoYWluTWFpbkNvbnN0cmFpbnQgPSBNYXR0ZXIuQ29uc3RyYWludC5jcmVhdGUoe1xyXG4gICAgICAgICAgICBib2R5QTogdGhpcy5oZXJvLFxyXG4gICAgICAgICAgICBib2R5QjogY2hhaW5BbmNob3JcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgTWF0dGVyLkNvbXBvc2l0ZS5hZGQodGhpcy53b3JsZCwgW1xyXG4gICAgICAgICAgICB0aGlzLmhlcm8sXHJcbiAgICAgICAgICAgIHRoaXMuY2hhaW4sXHJcbiAgICAgICAgICAgIHRoaXMuY2hhaW5NYWluQ29uc3RyYWludFxyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGlvbnMoKSB7XHJcbiAgICAgICAgY29uc3Qga2V5SGFuZGxlcnMgPSB7XHJcbiAgICAgICAgICAgIEtleVo6IHRoaXMuaGFuZGxlQ2hhaW5yYWlsLmJpbmQodGhpcylcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGtleUhhbmRsZXJzW2V2ZW50LmNvZGVdPy4oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb250cm9scygpIHtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gMC4xO1xyXG4gICAgICAgIHRoaXMubWF4U3BlZWQgPSAyMDtcclxuICAgICAgICB0aGlzLmluaXRTcGVlZFggPSAwO1xyXG4gICAgICAgIHRoaXMuaW5pdFNwZWVkWSA9IDA7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25YID0gMDtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvblkgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnNwZWVkWCA9IHRoaXMuaW5pdFNwZWVkWDtcclxuICAgICAgICB0aGlzLnNwZWVkWSA9IHRoaXMuaW5pdFNwZWVkWTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGtleUhhbmRsZXJzID0ge1xyXG4gICAgICAgICAgICBLZXlXOiB0aGlzLnR1cm5JblJvcGUuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgS2V5UzogdGhpcy50dXJuT3V0Um9wZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBLZXlEOiB0aGlzLm1vdmVSaWdodC5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBLZXlBOiB0aGlzLm1vdmVMZWZ0LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIEFycm93VXA6IHRoaXMubW92ZVVwLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIEFycm93RG93bjogdGhpcy5tb3ZlRG93bi5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBBcnJvd1JpZ2h0OiB0aGlzLm1vdmVSaWdodC5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBBcnJvd0xlZnQ6IHRoaXMubW92ZUxlZnQuYmluZCh0aGlzKSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBrZXlzRG93biA9IG5ldyBTZXQoKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGtleXNEb3duLmFkZChldmVudC5jb2RlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAga2V5c0Rvd24uZGVsZXRlKGV2ZW50LmNvZGUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBNYXR0ZXIuRXZlbnRzLm9uKHRoaXMuZW5naW5lLCBcImJlZm9yZVVwZGF0ZVwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvL3RoaXMucmVtb3ZlR3Jhdml0eSh0aGlzLmhlcm8pO1xyXG5cclxuICAgICAgICAgICAgWy4uLmtleXNEb3duXS5mb3JFYWNoKGsgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGtleUhhbmRsZXJzW2tdPy4oKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoa2V5c0Rvd24uc2l6ZSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkWCA9IHRoaXMuc3BlZWRYIC0gKHRoaXMuZGlyZWN0aW9uWCAqIE1hdGgubWF4KE1hdGguYWJzKHRoaXMuc3BlZWRYICogdGhpcy52ZWxvY2l0eSksIDApKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRZID0gdGhpcy5zcGVlZFkgLSAodGhpcy5kaXJlY3Rpb25ZICogTWF0aC5tYXgoTWF0aC5hYnModGhpcy5zcGVlZFkgKiB0aGlzLnZlbG9jaXR5KSwgMCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUhlcm8oKTtcclxuICAgICAgICAgICAvL3RoaXMudHJhY2VTcGVlZCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1vdXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlzaW9ucygpIHtcclxuICAgICAgICAvLyBhbiBleGFtcGxlIG9mIHVzaW5nIGNvbGxpc2lvblN0YXJ0IGV2ZW50IG9uIGFuIGVuZ2luZVxyXG4gICAgICAgIC8qTWF0dGVyLkV2ZW50cy5vbih0aGlzLmVuZ2luZSwgJ2NvbGxpc2lvblN0YXJ0JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyIHBhaXJzID0gZXZlbnQucGFpcnM7XHJcblxyXG4gICAgICAgICAgICAvLyBjaGFuZ2Ugb2JqZWN0IGNvbG91cnMgdG8gc2hvdyB0aG9zZSBzdGFydGluZyBhIGNvbGxpc2lvblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFpciA9IHBhaXJzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhaXIuQm9keUEgPT09IHRoaXMuY2hhaW5IYW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFpci5ib2R5QS5yZW5kZXIuZmlsbFN0eWxlID0gJyM4ODg4Q0MnO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhaXIuYm9keUIucmVuZGVyLmZpbGxTdHlsZSA9ICcjODg4OENDJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmJpbmQodGhpcyk7Ki9cclxuXHJcbiAgICAgICAgLy8gYW4gZXhhbXBsZSBvZiB1c2luZyBjb2xsaXNpb25BY3RpdmUgZXZlbnQgb24gYW4gZW5naW5lXHJcbiAgICAgICAgLy9NYXR0ZXIuRXZlbnRzLm9uKHRoaXMuZW5naW5lLCAnY29sbGlzaW9uU3RhcnQnLCB0aGlzLmNoYWluSGFuZENvbGxpc2lvbi5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgLy8gYW4gZXhhbXBsZSBvZiB1c2luZyBjb2xsaXNpb25FbmQgZXZlbnQgb24gYW4gZW5naW5lXHJcbiAgICAgICAgLypNYXR0ZXIuRXZlbnRzLm9uKHRoaXMuZW5naW5lLCAnY29sbGlzaW9uRW5kJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyIHBhaXJzID0gZXZlbnQucGFpcnM7XHJcblxyXG4gICAgICAgICAgICAvLyBjaGFuZ2Ugb2JqZWN0IGNvbG91cnMgdG8gc2hvdyB0aG9zZSBlbmRpbmcgYSBjb2xsaXNpb25cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhaXIgPSBwYWlyc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChwYWlyLkJvZHlBID09PSB0aGlzLmNoYWluSGFuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhaXIuYm9keUEucmVuZGVyLmZpbGxTdHlsZSA9ICcjQ0M4ODg4JztcclxuICAgICAgICAgICAgICAgICAgICBwYWlyLmJvZHlCLnJlbmRlci5maWxsU3R5bGUgPSAnI0NDODg4OCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuYmluZCh0aGlzKTsqL1xyXG4gICAgfVxyXG5cclxuICAgIHRyYWNlU3BlZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coe3g6dGhpcy5zcGVlZFgsIHk6IHRoaXMuc3BlZWRZfSlcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVXAoKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25ZID0gLTE7XHJcbiAgICAgICAgdGhpcy5zcGVlZFkgPSBNYXRoLm1pbih0aGlzLnZlbG9jaXR5ICogdGhpcy5kaXJlY3Rpb25ZLCB0aGlzLm1heFNwZWVkKTsvLyA9IHRoaXMuc3BlZWRZICsgKHRoaXMuZGlyZWN0aW9uWSAqIE1hdGgubWluKCh0aGlzLnZlbG9jaXR5ICogdGhpcy5tYXhTcGVlZCksIHRoaXMubWF4U3BlZWQpKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlRG93bigpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvblkgPSAxO1xyXG4gICAgICAgIHRoaXMuc3BlZWRZID0gTWF0aC5taW4odGhpcy52ZWxvY2l0eSAqIHRoaXMuZGlyZWN0aW9uWSwgdGhpcy5tYXhTcGVlZCk7Ly90aGlzLnNwZWVkWSArICh0aGlzLmRpcmVjdGlvblkgKiBNYXRoLm1pbigodGhpcy52ZWxvY2l0eSAqIHRoaXMubWF4U3BlZWQpLCB0aGlzLm1heFNwZWVkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUxlZnQoKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25YID0gLTE7XHJcbiAgICAgICAgdGhpcy5zcGVlZFggPSBNYXRoLm1pbih0aGlzLnZlbG9jaXR5ICogdGhpcy5kaXJlY3Rpb25YLCB0aGlzLm1heFNwZWVkKTsvL3RoaXMuc3BlZWRYICsgKHRoaXMuZGlyZWN0aW9uWCAqIE1hdGgubWluKCh0aGlzLnZlbG9jaXR5ICogdGhpcy5tYXhTcGVlZCksIHRoaXMubWF4U3BlZWQpKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlUmlnaHQoKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25YID0gMTtcclxuICAgICAgICB0aGlzLnNwZWVkWCA9IE1hdGgubWluKHRoaXMudmVsb2NpdHkgKiB0aGlzLmRpcmVjdGlvblgsIHRoaXMubWF4U3BlZWQpOy8vdGhpcy5zcGVlZFggKyAodGhpcy5kaXJlY3Rpb25YICogTWF0aC5taW4oKHRoaXMudmVsb2NpdHkgKiB0aGlzLm1heFNwZWVkKSwgdGhpcy5tYXhTcGVlZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHR1cm5JblJvcGUoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFpbk1haW5Db25zdHJhaW50Lmxlbmd0aCAtPSB0aGlzLm1vdG9yVG9ycXVlO1xyXG4gICAgfVxyXG4gICAgdHVybk91dFJvcGUoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFpbk1haW5Db25zdHJhaW50Lmxlbmd0aCArPSB0aGlzLm1vdG9yVG9ycXVlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYWlucmFpbCgpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2hhaW5SYWlsLnZpc2liaWxpdHlTdGF0ZSA9PT0gXCJoaWRkZW5cIikge1xyXG4gICAgICAgICAgICB0aGlzLmNoYWluUmFpbC52aXNpYmlsaXR5U3RhdGUgPSBcInNob3dlZFwiO1xyXG4gICAgICAgICAgICBNYXR0ZXIuQ29tcG9zaXRlLmFkZCh0aGlzLndvcmxkLCB0aGlzLmNoYWluUmFpbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY2hhaW5SYWlsLnZpc2liaWxpdHlTdGF0ZSA9PT0gXCJzaG93ZWRcIikge1xyXG4gICAgICAgICAgICB0aGlzLmNoYWluUmFpbC52aXNpYmlsaXR5U3RhdGUgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICBNYXR0ZXIuV29ybGQucmVtb3ZlKHRoaXMud29ybGQsIHRoaXMuY2hhaW5SYWlsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9jaGVjayB0aGlzIDogaHR0cHM6Ly9icm0uaW8vbWF0dGVyLWpzL2RlbW8vI3NlbnNvcnNcclxuICAgIGNoYWluSGFuZENvbGxpc2lvbihldmVudCkge1xyXG4gICAgICAgIHZhciBwYWlycyA9IGV2ZW50LnBhaXJzO1xyXG5cclxuICAgICAgICAvLyBjaGFuZ2Ugb2JqZWN0IGNvbG91cnMgdG8gc2hvdyB0aG9zZSBpbiBhbiBhY3RpdmUgY29sbGlzaW9uIChlLmcuIHJlc3RpbmcgY29udGFjdClcclxuICAgICAgICAvKmZvciAodmFyIGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHBhaXIgPSBwYWlyc1tpXTtcclxuICAgICAgICAgICAgaWYgKHBhaXIuQm9keUEgPT09IHRoaXMuY2hhaW5IYW5kKSB7XHJcbiAgICAgICAgICAgICAgICBwYWlyLmJvZHlBLnJlbmRlci5maWxsU3R5bGUgPSAnIzg4Q0M4OCc7XHJcbiAgICAgICAgICAgICAgICBwYWlyLmJvZHlCLnJlbmRlci5maWxsU3R5bGUgPSAnIzg4Q0M4OCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9Ki9cclxuICAgICAgICBjb25zb2xlLmxvZyhwYWlycyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlR3Jhdml0eShib2R5KSB7XHJcbiAgICAgICAgTWF0dGVyLkJvZHkuYXBwbHlGb3JjZShib2R5LCBib2R5LnBvc2l0aW9uLCB7XHJcbiAgICAgICAgICAgIHg6IC10aGlzLmdyYXZpdHkueCAqIHRoaXMuZ3Jhdml0eS5zY2FsZSAqIGJvZHkubWFzcyxcclxuICAgICAgICAgICAgeTogLXRoaXMuZ3Jhdml0eS55ICogdGhpcy5ncmF2aXR5LnNjYWxlICogYm9keS5tYXNzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXR0ZXIuQm9keS5hcHBseUZvcmNlKGJveEEsIHtcclxuICAgICAgeDogYm94QS5wb3NpdGlvbi54LFxyXG4gICAgICB5OiBib3hBLnBvc2l0aW9uLnlcclxuICAgIH0sIHt4OiAtMC4wMiwgeTogMH0pXHJcbiAgICAgKi9cclxuXHJcbiAgICBtb3ZlSGVybygpIHtcclxuICAgICAgICAvL01hdHRlci5Cb2R5LnNldFZlbG9jaXR5KHRoaXMuaGVybywge3g6dGhpcy5zcGVlZFgsIHk6dGhpcy5zcGVlZFl9KTtcclxuICAgICAgICBNYXR0ZXIuQm9keS5hcHBseUZvcmNlKHRoaXMuaGVybywge1xyXG4gICAgICAgICAgICB4OiB0aGlzLmhlcm8ucG9zaXRpb24ueCxcclxuICAgICAgICAgICAgeTogdGhpcy5oZXJvLnBvc2l0aW9uLnlcclxuICAgICAgICB9LCB7eDp0aGlzLnNwZWVkWCwgeTp0aGlzLnNwZWVkWX0pXHJcbiAgICAgICAgLy9NYXR0ZXIuQm9keS50cmFuc2xhdGUodGhpcy5oZXJvLCB7eDp0aGlzLnNwZWVkWCwgeTp0aGlzLnNwZWVkWX0pO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlKCkge1xyXG4gICAgICAgIHZhciBtb3VzZSA9IE1hdHRlci5Nb3VzZS5jcmVhdGUodGhpcy5yZW5kZXJlci5jYW52YXMpLFxyXG4gICAgICAgICAgICBtb3VzZUNvbnN0cmFpbnQgPSBNYXR0ZXIuTW91c2VDb25zdHJhaW50LmNyZWF0ZSh0aGlzLmVuZ2luZSwge1xyXG4gICAgICAgICAgICAgICAgbW91c2U6IG1vdXNlLFxyXG4gICAgICAgICAgICAgICAgY29uc3RyYWludDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0aWZmbmVzczogMC4xLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgTWF0dGVyLkNvbXBvc2l0ZS5hZGQodGhpcy53b3JsZCwgbW91c2VDb25zdHJhaW50KTtcclxuXHJcbiAgICAgICAgLy8ga2VlcCB0aGUgbW91c2UgaW4gc3luYyB3aXRoIHJlbmRlcmluZ1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIubW91c2UgPSBNYXR0ZXIubW91c2U7XHJcblxyXG4gICAgICAgIC8vIGZpdCB0aGUgcmVuZGVyIHZpZXdwb3J0IHRvIHRoZSBzY2VuZVxyXG4gICAgICAgIE1hdHRlci5SZW5kZXIubG9va0F0KHRoaXMucmVuZGVyZXIsIHtcclxuICAgICAgICAgICAgbWluOiB7IHg6IDAsIHk6IDAgfSxcclxuICAgICAgICAgICAgbWF4OiB7IHg6IHRoaXMuc3RhZ2VXaWR0aCwgeTogdGhpcy5zdGFnZUhlaWdodCB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgR2FtZUVuZ2luZSBmcm9tIFwiLi9HYW1lRW5naW5lL2NvcmUuanNcIjtcclxuXHJcbnZhciBnYW1lO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAvL2xldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JhbmVHYW1lJylcclxuICAgIGxldCBwYWRkaW5nID0gMTAwO1xyXG4gICAgZ2FtZSA9IG5ldyBHYW1lRW5naW5lKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAtIHBhZGRpbmcsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgLSBwYWRkaW5nKTtcclxuICAgIGdhbWUuaW5pdCgpO1xyXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=