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

    constructor(props={}) {
        this.initX = props.x | 0;
        this.initY = props.y | 0;
        this.width = props.w | 15;
        this.height = props.h | 15;
    }

    static create(props={}) {
        let body = new Moveable(props);
        return _core__WEBPACK_IMPORTED_MODULE_0__["default"].getMatter().Bodies.rectangle(body.initX, body.initY, body.width, body.height);
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

    constructor(props={}) {
        this.rows = props.row || 10;
        this.initX = props.x || 400;
        this.initY = props.y || 200;
        this.columns = props.columns || 3;
        this.columnGap = props.columnGap || 0;
        this.rowGap = props.rowGap || 0;
        this.entity = _Moveable__WEBPACK_IMPORTED_MODULE_0__["default"];
        this.entities = [];

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
        let obj = this.entity.create({
            x: x,
            y: y,
            w: 20,
            h: 20
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

    renderer;
    debugRenderOptions;

    stage;
    stageWidth;
    stageHeight;

    groups;

    hero;
    chain;
    chainComposite;
    chainMainConstraint;
    chainMaxLenght;
    chainMinLenght;

    constructor(w=800, h=600) {
        this.stageWidth = w;
        this.stageHeight = h;
        this.stage = {
            width: this.stageWidth,
            height: this.stageHeight,
        };
        this.chainMinLenght = 1;
        this.chainMaxLenght = 200;
        this.debugRenderOptions = {
            showAngleIndicator: true,
            //showCollisions: true,
            //showVelocity: true
        }
        this.groups = [
            {
                id: "world",
                members: [],
            }
        ]
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
         this.render();
         this.run();

         this.entities();

         this.controls();
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
        var group = matter_js__WEBPACK_IMPORTED_MODULE_0___default().Body.nextGroup(true);

        let moveableStack01 = new _World_GameEntities_MoveableStack__WEBPACK_IMPORTED_MODULE_1__["default"]({});
        let floor = matter_js__WEBPACK_IMPORTED_MODULE_0___default().Bodies.rectangle(this.stageWidth/2, this.stageHeight-10, this.stageWidth, 10, { isStatic: true });

        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composite.add(this.world, [
            moveableStack01,
            floor
        ]);

        var startX = 200, startY = 50, lastX = startX, lastY = startY,
            chainLinkHeight=30,
            chainLinkWidth=5;

        this.hero = matter_js__WEBPACK_IMPORTED_MODULE_0___default().Bodies.circle(startX, startY, 30, { collisionFilter: { group: group }, chamfer: 0 });
        this.hero.isStatic = true;

        var chainHand = matter_js__WEBPACK_IMPORTED_MODULE_0___default().Bodies.circle(startX, startY, 10, { collisionFilter: { group: group }, chamfer: 0, density: 0.1 });

        this.chain = matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composites.stack(startX+15, startY+15, 15, 1, 1, 1, function(x, y) {
            lastX = x; lastY = y;
            return matter_js__WEBPACK_IMPORTED_MODULE_0___default().Bodies.rectangle(x - 30, y -30, chainLinkHeight, chainLinkWidth, { collisionFilter: { group: group }, chamfer: 0.1, density: 0.1 });
        });


        var chainAnchor = this.chain.bodies[0];
        this.chain.bodies.push(chainHand);

        this.chainComposite = matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composites.chain(this.chain , 0.4, 0, -0.4, 0, { length: 0.001 });
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

    controls() {
        const speed = 3;
        const muscular = 2;
        const rotation = 0.01;

        const keyHandlers = {
            KeyQ: () => {
                matter_js__WEBPACK_IMPORTED_MODULE_0___default().Body.rotate(this.hero, rotation);

            },
            KeyE: () => {
                matter_js__WEBPACK_IMPORTED_MODULE_0___default().Body.rotate(this.hero, -rotation);

            },
            KeyW: () => {
                //Matter.Body.translate(this.hero, {x:0, y: -muscular});
                this.chain.bodies.forEach(function(body) {
                    body.density += 0.001;
                    console.log(body);
                });
            },
            KeyS: () => {
                //Matter.Body.translate(this.hero, {x:0, y: +muscular});
                this.chain.bodies.forEach(function(body) {
                    body.density -= 0.001;
                    console.log(body);
                });

            },
            KeyD: () => {
                matter_js__WEBPACK_IMPORTED_MODULE_0___default().Body.translate(this.hero, {x:speed, y: 0});
            },
            KeyA: () => {
                matter_js__WEBPACK_IMPORTED_MODULE_0___default().Body.translate(this.hero, {x:-speed, y:0});
            },
        };
        const keysDown = new Set();
        document.addEventListener("keydown", event => {
            keysDown.add(event.code);
        });
        document.addEventListener("keyup", event => {
            keysDown.delete(event.code);
        });

        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Events.on(this.engine, "beforeUpdate", event => {
            [...keysDown].forEach(k => {
                keyHandlers[k]?.();
            });
        });

        this.mouse();
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


const game = new _GameEngine_core_js__WEBPACK_IMPORTED_MODULE_0__["default"](1920, 1080);
game.init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQixpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVB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Q0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7QUFHRCxPQUFPO0FBQ1A7QUFDQSxpQ0FBaUMsaUNBQW1COztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGFBQWEsaUNBQW1COztBQUVoQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLDJCQUEyQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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UUFBUTtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsYUFBYSxpQ0FBbUI7QUFDaEMsYUFBYSxpQ0FBbUI7QUFDaEMsYUFBYSxpQ0FBbUI7O0FBRWhDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjhDO0FBQzlDO0FBQ0EsaUJBQWlCLDJEQUFVO0FBQzNCLFkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZXUtY3JhbmUvLi9ub2RlX21vZHVsZXMvbWF0dGVyLWpzL2J1aWxkL21hdHRlci5qcyIsIndlYnBhY2s6Ly9qZXUtY3JhbmUvLi9zcmMvR2FtZUVuZ2luZS9Xb3JsZC9HYW1lRW50aXRpZXMvTW92ZWFibGUuanMiLCJ3ZWJwYWNrOi8vamV1LWNyYW5lLy4vc3JjL0dhbWVFbmdpbmUvV29ybGQvR2FtZUVudGl0aWVzL01vdmVhYmxlU3RhY2suanMiLCJ3ZWJwYWNrOi8vamV1LWNyYW5lLy4vc3JjL0dhbWVFbmdpbmUvY29yZS5qcyIsIndlYnBhY2s6Ly9qZXUtY3JhbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamV1LWNyYW5lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pldS1jcmFuZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamV1LWNyYW5lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vamV1LWNyYW5lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamV1LWNyYW5lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamV1LWNyYW5lLy4vc3JjL2VuZ2luZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIG1hdHRlci1qcyAwLjE4LjAgYnkgQGxpYWJydVxuICogaHR0cDovL2JybS5pby9tYXR0ZXItanMvXG4gKiBMaWNlbnNlIE1JVFxuICogXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIFxuICogQ29weXJpZ2h0IChjKSBMaWFtIEJydW1taXR0IGFuZCBjb250cmlidXRvcnMuXG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJNYXR0ZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiTWF0dGVyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIk1hdHRlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjEpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuQ29tbW9uYCBtb2R1bGUgY29udGFpbnMgdXRpbGl0eSBmdW5jdGlvbnMgdGhhdCBhcmUgY29tbW9uIHRvIGFsbCBtb2R1bGVzLlxuKlxuKiBAY2xhc3MgQ29tbW9uXG4qL1xuXG52YXIgQ29tbW9uID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICBDb21tb24uX25leHRJZCA9IDA7XG4gICAgQ29tbW9uLl9zZWVkID0gMDtcbiAgICBDb21tb24uX25vd1N0YXJ0VGltZSA9ICsobmV3IERhdGUoKSk7XG4gICAgQ29tbW9uLl93YXJuZWRPbmNlID0ge307XG4gICAgQ29tbW9uLl9kZWNvbXAgPSBudWxsO1xuICAgIFxuICAgIC8qKlxuICAgICAqIEV4dGVuZHMgdGhlIG9iamVjdCBpbiB0aGUgZmlyc3QgYXJndW1lbnQgdXNpbmcgdGhlIG9iamVjdCBpbiB0aGUgc2Vjb25kIGFyZ3VtZW50LlxuICAgICAqIEBtZXRob2QgZXh0ZW5kXG4gICAgICogQHBhcmFtIHt9IG9ialxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZGVlcFxuICAgICAqIEByZXR1cm4ge30gb2JqIGV4dGVuZGVkXG4gICAgICovXG4gICAgQ29tbW9uLmV4dGVuZCA9IGZ1bmN0aW9uKG9iaiwgZGVlcCkge1xuICAgICAgICB2YXIgYXJnc1N0YXJ0LFxuICAgICAgICAgICAgYXJncyxcbiAgICAgICAgICAgIGRlZXBDbG9uZTtcblxuICAgICAgICBpZiAodHlwZW9mIGRlZXAgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgYXJnc1N0YXJ0ID0gMjtcbiAgICAgICAgICAgIGRlZXBDbG9uZSA9IGRlZXA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcmdzU3RhcnQgPSAxO1xuICAgICAgICAgICAgZGVlcENsb25lID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSBhcmdzU3RhcnQ7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIHNvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVlcENsb25lICYmIHNvdXJjZVtwcm9wXSAmJiBzb3VyY2VbcHJvcF0uY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvYmpbcHJvcF0gfHwgb2JqW3Byb3BdLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpbcHJvcF0gPSBvYmpbcHJvcF0gfHwge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tbW9uLmV4dGVuZChvYmpbcHJvcF0sIGRlZXBDbG9uZSwgc291cmNlW3Byb3BdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGNsb25lIG9mIHRoZSBvYmplY3QsIGlmIGRlZXAgaXMgdHJ1ZSByZWZlcmVuY2VzIHdpbGwgYWxzbyBiZSBjbG9uZWQuXG4gICAgICogQG1ldGhvZCBjbG9uZVxuICAgICAqIEBwYXJhbSB7fSBvYmpcbiAgICAgKiBAcGFyYW0ge2Jvb2x9IGRlZXBcbiAgICAgKiBAcmV0dXJuIHt9IG9iaiBjbG9uZWRcbiAgICAgKi9cbiAgICBDb21tb24uY2xvbmUgPSBmdW5jdGlvbihvYmosIGRlZXApIHtcbiAgICAgICAgcmV0dXJuIENvbW1vbi5leHRlbmQoe30sIGRlZXAsIG9iaik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxpc3Qgb2Yga2V5cyBmb3IgdGhlIGdpdmVuIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIGtleXNcbiAgICAgKiBAcGFyYW0ge30gb2JqXG4gICAgICogQHJldHVybiB7c3RyaW5nW119IGtleXNcbiAgICAgKi9cbiAgICBDb21tb24ua2V5cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMpXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKTtcblxuICAgICAgICAvLyBhdm9pZCBoYXNPd25Qcm9wZXJ0eSBmb3IgcGVyZm9ybWFuY2VcbiAgICAgICAgdmFyIGtleXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iailcbiAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGlzdCBvZiB2YWx1ZXMgZm9yIHRoZSBnaXZlbiBvYmplY3QuXG4gICAgICogQG1ldGhvZCB2YWx1ZXNcbiAgICAgKiBAcGFyYW0ge30gb2JqXG4gICAgICogQHJldHVybiB7YXJyYXl9IEFycmF5IG9mIHRoZSBvYmplY3RzIHByb3BlcnR5IHZhbHVlc1xuICAgICAqL1xuICAgIENvbW1vbi52YWx1ZXMgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKSB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaChvYmpba2V5c1tpXV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gYXZvaWQgaGFzT3duUHJvcGVydHkgZm9yIHBlcmZvcm1hbmNlXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvYmopXG4gICAgICAgICAgICB2YWx1ZXMucHVzaChvYmpba2V5XSk7XG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgYSB2YWx1ZSBmcm9tIGBiYXNlYCByZWxhdGl2ZSB0byB0aGUgYHBhdGhgIHN0cmluZy5cbiAgICAgKiBAbWV0aG9kIGdldFxuICAgICAqIEBwYXJhbSB7fSBvYmogVGhlIGJhc2Ugb2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggcmVsYXRpdmUgdG8gYGJhc2VgLCBlLmcuICdGb28uQmFyLmJheidcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2JlZ2luXSBQYXRoIHNsaWNlIGJlZ2luXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtlbmRdIFBhdGggc2xpY2UgZW5kXG4gICAgICogQHJldHVybiB7fSBUaGUgb2JqZWN0IGF0IHRoZSBnaXZlbiBwYXRoXG4gICAgICovXG4gICAgQ29tbW9uLmdldCA9IGZ1bmN0aW9uKG9iaiwgcGF0aCwgYmVnaW4sIGVuZCkge1xuICAgICAgICBwYXRoID0gcGF0aC5zcGxpdCgnLicpLnNsaWNlKGJlZ2luLCBlbmQpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgb2JqID0gb2JqW3BhdGhbaV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyBhIHZhbHVlIG9uIGBiYXNlYCByZWxhdGl2ZSB0byB0aGUgZ2l2ZW4gYHBhdGhgIHN0cmluZy5cbiAgICAgKiBAbWV0aG9kIHNldFxuICAgICAqIEBwYXJhbSB7fSBvYmogVGhlIGJhc2Ugb2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggcmVsYXRpdmUgdG8gYGJhc2VgLCBlLmcuICdGb28uQmFyLmJheidcbiAgICAgKiBAcGFyYW0ge30gdmFsIFRoZSB2YWx1ZSB0byBzZXRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2JlZ2luXSBQYXRoIHNsaWNlIGJlZ2luXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtlbmRdIFBhdGggc2xpY2UgZW5kXG4gICAgICogQHJldHVybiB7fSBQYXNzIHRocm91Z2ggYHZhbGAgZm9yIGNoYWluaW5nXG4gICAgICovXG4gICAgQ29tbW9uLnNldCA9IGZ1bmN0aW9uKG9iaiwgcGF0aCwgdmFsLCBiZWdpbiwgZW5kKSB7XG4gICAgICAgIHZhciBwYXJ0cyA9IHBhdGguc3BsaXQoJy4nKS5zbGljZShiZWdpbiwgZW5kKTtcbiAgICAgICAgQ29tbW9uLmdldChvYmosIHBhdGgsIDAsIC0xKVtwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXV0gPSB2YWw7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNodWZmbGVzIHRoZSBnaXZlbiBhcnJheSBpbi1wbGFjZS5cbiAgICAgKiBUaGUgZnVuY3Rpb24gdXNlcyBhIHNlZWRlZCByYW5kb20gZ2VuZXJhdG9yLlxuICAgICAqIEBtZXRob2Qgc2h1ZmZsZVxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGFycmF5XG4gICAgICogQHJldHVybiB7YXJyYXl9IGFycmF5IHNodWZmbGVkIHJhbmRvbWx5XG4gICAgICovXG4gICAgQ29tbW9uLnNodWZmbGUgPSBmdW5jdGlvbihhcnJheSkge1xuICAgICAgICBmb3IgKHZhciBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGogPSBNYXRoLmZsb29yKENvbW1vbi5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgICAgICAgdmFyIHRlbXAgPSBhcnJheVtpXTtcbiAgICAgICAgICAgIGFycmF5W2ldID0gYXJyYXlbal07XG4gICAgICAgICAgICBhcnJheVtqXSA9IHRlbXA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSYW5kb21seSBjaG9vc2VzIGEgdmFsdWUgZnJvbSBhIGxpc3Qgd2l0aCBlcXVhbCBwcm9iYWJpbGl0eS5cbiAgICAgKiBUaGUgZnVuY3Rpb24gdXNlcyBhIHNlZWRlZCByYW5kb20gZ2VuZXJhdG9yLlxuICAgICAqIEBtZXRob2QgY2hvb3NlXG4gICAgICogQHBhcmFtIHthcnJheX0gY2hvaWNlc1xuICAgICAqIEByZXR1cm4ge29iamVjdH0gQSByYW5kb20gY2hvaWNlIG9iamVjdCBmcm9tIHRoZSBhcnJheVxuICAgICAqL1xuICAgIENvbW1vbi5jaG9vc2UgPSBmdW5jdGlvbihjaG9pY2VzKSB7XG4gICAgICAgIHJldHVybiBjaG9pY2VzW01hdGguZmxvb3IoQ29tbW9uLnJhbmRvbSgpICogY2hvaWNlcy5sZW5ndGgpXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBvYmplY3QgaXMgYSBIVE1MRWxlbWVudCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgICAqIEBtZXRob2QgaXNFbGVtZW50XG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIEhUTUxFbGVtZW50LCBvdGhlcndpc2UgZmFsc2VcbiAgICAgKi9cbiAgICBDb21tb24uaXNFbGVtZW50ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIGlmICh0eXBlb2YgSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEob2JqICYmIG9iai5ub2RlVHlwZSAmJiBvYmoubm9kZU5hbWUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIG9iamVjdCBpcyBhbiBhcnJheS5cbiAgICAgKiBAbWV0aG9kIGlzQXJyYXlcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGFuIGFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAgICAgKi9cbiAgICBDb21tb24uaXNBcnJheSA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgZnVuY3Rpb24uXG4gICAgICogQG1ldGhvZCBpc0Z1bmN0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIGZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAgICAgKi9cbiAgICBDb21tb24uaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIG9iamVjdCBpcyBhIHBsYWluIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIGlzUGxhaW5PYmplY3RcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgcGxhaW4gb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAgICAgKi9cbiAgICBDb21tb24uaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBPYmplY3Q7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgc3RyaW5nLlxuICAgICAqIEBtZXRob2QgaXNTdHJpbmdcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgc3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAgICAgKi9cbiAgICBDb21tb24uaXNTdHJpbmcgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBnaXZlbiB2YWx1ZSBjbGFtcGVkIGJldHdlZW4gYSBtaW5pbXVtIGFuZCBtYXhpbXVtIHZhbHVlLlxuICAgICAqIEBtZXRob2QgY2xhbXBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIHZhbHVlIGNsYW1wZWQgYmV0d2VlbiBtaW4gYW5kIG1heCBpbmNsdXNpdmVcbiAgICAgKi9cbiAgICBDb21tb24uY2xhbXAgPSBmdW5jdGlvbih2YWx1ZSwgbWluLCBtYXgpIHtcbiAgICAgICAgaWYgKHZhbHVlIDwgbWluKVxuICAgICAgICAgICAgcmV0dXJuIG1pbjtcbiAgICAgICAgaWYgKHZhbHVlID4gbWF4KVxuICAgICAgICAgICAgcmV0dXJuIG1heDtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc2lnbiBvZiB0aGUgZ2l2ZW4gdmFsdWUuXG4gICAgICogQG1ldGhvZCBzaWduXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtMSBpZiBuZWdhdGl2ZSwgKzEgaWYgMCBvciBwb3NpdGl2ZVxuICAgICAqL1xuICAgIENvbW1vbi5zaWduID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlIDwgMCA/IC0xIDogMTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgdGltZXN0YW1wIHNpbmNlIHRoZSB0aW1lIG9yaWdpbiAoZS5nLiBmcm9tIHBhZ2UgbG9hZCkuXG4gICAgICogVGhlIHJlc3VsdCBpcyBpbiBtaWxsaXNlY29uZHMgYW5kIHdpbGwgdXNlIGhpZ2gtcmVzb2x1dGlvbiB0aW1pbmcgaWYgYXZhaWxhYmxlLlxuICAgICAqIEBtZXRob2Qgbm93XG4gICAgICogQHJldHVybiB7bnVtYmVyfSB0aGUgY3VycmVudCB0aW1lc3RhbXAgaW4gbWlsbGlzZWNvbmRzXG4gICAgICovXG4gICAgQ29tbW9uLm5vdyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnBlcmZvcm1hbmNlKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnBlcmZvcm1hbmNlLm5vdykge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZS53ZWJraXROb3cpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LnBlcmZvcm1hbmNlLndlYmtpdE5vdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKERhdGUubm93KSB7XG4gICAgICAgICAgICByZXR1cm4gRGF0ZS5ub3coKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAobmV3IERhdGUoKSkgLSBDb21tb24uX25vd1N0YXJ0VGltZTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSByYW5kb20gdmFsdWUgYmV0d2VlbiBhIG1pbmltdW0gYW5kIGEgbWF4aW11bSB2YWx1ZSBpbmNsdXNpdmUuXG4gICAgICogVGhlIGZ1bmN0aW9uIHVzZXMgYSBzZWVkZWQgcmFuZG9tIGdlbmVyYXRvci5cbiAgICAgKiBAbWV0aG9kIHJhbmRvbVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4XG4gICAgICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gYW5kIG1heCBpbmNsdXNpdmVcbiAgICAgKi9cbiAgICBDb21tb24ucmFuZG9tID0gZnVuY3Rpb24obWluLCBtYXgpIHtcbiAgICAgICAgbWluID0gKHR5cGVvZiBtaW4gIT09IFwidW5kZWZpbmVkXCIpID8gbWluIDogMDtcbiAgICAgICAgbWF4ID0gKHR5cGVvZiBtYXggIT09IFwidW5kZWZpbmVkXCIpID8gbWF4IDogMTtcbiAgICAgICAgcmV0dXJuIG1pbiArIF9zZWVkZWRSYW5kb20oKSAqIChtYXggLSBtaW4pO1xuICAgIH07XG5cbiAgICB2YXIgX3NlZWRlZFJhbmRvbSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MaW5lYXJfY29uZ3J1ZW50aWFsX2dlbmVyYXRvclxuICAgICAgICBDb21tb24uX3NlZWQgPSAoQ29tbW9uLl9zZWVkICogOTMwMSArIDQ5Mjk3KSAlIDIzMzI4MDtcbiAgICAgICAgcmV0dXJuIENvbW1vbi5fc2VlZCAvIDIzMzI4MDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBDU1MgaGV4IGNvbG91ciBzdHJpbmcgaW50byBhbiBpbnRlZ2VyLlxuICAgICAqIEBtZXRob2QgY29sb3JUb051bWJlclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvclN0cmluZ1xuICAgICAqIEByZXR1cm4ge251bWJlcn0gQW4gaW50ZWdlciByZXByZXNlbnRpbmcgdGhlIENTUyBoZXggc3RyaW5nXG4gICAgICovXG4gICAgQ29tbW9uLmNvbG9yVG9OdW1iZXIgPSBmdW5jdGlvbihjb2xvclN0cmluZykge1xuICAgICAgICBjb2xvclN0cmluZyA9IGNvbG9yU3RyaW5nLnJlcGxhY2UoJyMnLCcnKTtcblxuICAgICAgICBpZiAoY29sb3JTdHJpbmcubGVuZ3RoID09IDMpIHtcbiAgICAgICAgICAgIGNvbG9yU3RyaW5nID0gY29sb3JTdHJpbmcuY2hhckF0KDApICsgY29sb3JTdHJpbmcuY2hhckF0KDApXG4gICAgICAgICAgICAgICAgICAgICAgICArIGNvbG9yU3RyaW5nLmNoYXJBdCgxKSArIGNvbG9yU3RyaW5nLmNoYXJBdCgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgKyBjb2xvclN0cmluZy5jaGFyQXQoMikgKyBjb2xvclN0cmluZy5jaGFyQXQoMik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyc2VJbnQoY29sb3JTdHJpbmcsIDE2KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbnNvbGUgbG9nZ2luZyBsZXZlbCB0byB1c2UsIHdoZXJlIGVhY2ggbGV2ZWwgaW5jbHVkZXMgYWxsIGxldmVscyBhYm92ZSBhbmQgZXhjbHVkZXMgdGhlIGxldmVscyBiZWxvdy5cbiAgICAgKiBUaGUgZGVmYXVsdCBsZXZlbCBpcyAnZGVidWcnIHdoaWNoIHNob3dzIGFsbCBjb25zb2xlIG1lc3NhZ2VzLiAgXG4gICAgICpcbiAgICAgKiBQb3NzaWJsZSBsZXZlbCB2YWx1ZXMgYXJlOlxuICAgICAqIC0gMCA9IE5vbmVcbiAgICAgKiAtIDEgPSBEZWJ1Z1xuICAgICAqIC0gMiA9IEluZm9cbiAgICAgKiAtIDMgPSBXYXJuXG4gICAgICogLSA0ID0gRXJyb3JcbiAgICAgKiBAcHJvcGVydHkgQ29tbW9uLmxvZ0xldmVsXG4gICAgICogQHR5cGUge051bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG4gICAgQ29tbW9uLmxvZ0xldmVsID0gMTtcblxuICAgIC8qKlxuICAgICAqIFNob3dzIGEgYGNvbnNvbGUubG9nYCBtZXNzYWdlIG9ubHkgaWYgdGhlIGN1cnJlbnQgYENvbW1vbi5sb2dMZXZlbGAgYWxsb3dzIGl0LlxuICAgICAqIFRoZSBtZXNzYWdlIHdpbGwgYmUgcHJlZml4ZWQgd2l0aCAnbWF0dGVyLWpzJyB0byBtYWtlIGl0IGVhc2lseSBpZGVudGlmaWFibGUuXG4gICAgICogQG1ldGhvZCBsb2dcbiAgICAgKiBAcGFyYW0gLi4ub2JqcyB7fSBUaGUgb2JqZWN0cyB0byBsb2cuXG4gICAgICovXG4gICAgQ29tbW9uLmxvZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoY29uc29sZSAmJiBDb21tb24ubG9nTGV2ZWwgPiAwICYmIENvbW1vbi5sb2dMZXZlbCA8PSAzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBbJ21hdHRlci1qczonXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNob3dzIGEgYGNvbnNvbGUuaW5mb2AgbWVzc2FnZSBvbmx5IGlmIHRoZSBjdXJyZW50IGBDb21tb24ubG9nTGV2ZWxgIGFsbG93cyBpdC5cbiAgICAgKiBUaGUgbWVzc2FnZSB3aWxsIGJlIHByZWZpeGVkIHdpdGggJ21hdHRlci1qcycgdG8gbWFrZSBpdCBlYXNpbHkgaWRlbnRpZmlhYmxlLlxuICAgICAqIEBtZXRob2QgaW5mb1xuICAgICAqIEBwYXJhbSAuLi5vYmpzIHt9IFRoZSBvYmplY3RzIHRvIGxvZy5cbiAgICAgKi9cbiAgICBDb21tb24uaW5mbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoY29uc29sZSAmJiBDb21tb24ubG9nTGV2ZWwgPiAwICYmIENvbW1vbi5sb2dMZXZlbCA8PSAyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8uYXBwbHkoY29uc29sZSwgWydtYXR0ZXItanM6J10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBhIGBjb25zb2xlLndhcm5gIG1lc3NhZ2Ugb25seSBpZiB0aGUgY3VycmVudCBgQ29tbW9uLmxvZ0xldmVsYCBhbGxvd3MgaXQuXG4gICAgICogVGhlIG1lc3NhZ2Ugd2lsbCBiZSBwcmVmaXhlZCB3aXRoICdtYXR0ZXItanMnIHRvIG1ha2UgaXQgZWFzaWx5IGlkZW50aWZpYWJsZS5cbiAgICAgKiBAbWV0aG9kIHdhcm5cbiAgICAgKiBAcGFyYW0gLi4ub2JqcyB7fSBUaGUgb2JqZWN0cyB0byBsb2cuXG4gICAgICovXG4gICAgQ29tbW9uLndhcm4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGNvbnNvbGUgJiYgQ29tbW9uLmxvZ0xldmVsID4gMCAmJiBDb21tb24ubG9nTGV2ZWwgPD0gMykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuLmFwcGx5KGNvbnNvbGUsIFsnbWF0dGVyLWpzOiddLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXNlcyBgQ29tbW9uLndhcm5gIHRvIGxvZyB0aGUgZ2l2ZW4gbWVzc2FnZSBvbmUgdGltZSBvbmx5LlxuICAgICAqIEBtZXRob2Qgd2Fybk9uY2VcbiAgICAgKiBAcGFyYW0gLi4ub2JqcyB7fSBUaGUgb2JqZWN0cyB0byBsb2cuXG4gICAgICovXG4gICAgQ29tbW9uLndhcm5PbmNlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5qb2luKCcgJyk7XG5cbiAgICAgICAgaWYgKCFDb21tb24uX3dhcm5lZE9uY2VbbWVzc2FnZV0pIHtcbiAgICAgICAgICAgIENvbW1vbi53YXJuKG1lc3NhZ2UpO1xuICAgICAgICAgICAgQ29tbW9uLl93YXJuZWRPbmNlW21lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBhIGRlcHJlY2F0ZWQgY29uc29sZSB3YXJuaW5nIHdoZW4gdGhlIGZ1bmN0aW9uIG9uIHRoZSBnaXZlbiBvYmplY3QgaXMgY2FsbGVkLlxuICAgICAqIFRoZSB0YXJnZXQgZnVuY3Rpb24gd2lsbCBiZSByZXBsYWNlZCB3aXRoIGEgbmV3IGZ1bmN0aW9uIHRoYXQgZmlyc3Qgc2hvd3MgdGhlIHdhcm5pbmdcbiAgICAgKiBhbmQgdGhlbiBjYWxscyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24uXG4gICAgICogQG1ldGhvZCBkZXByZWNhdGVkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9iaiBUaGUgb2JqZWN0IG9yIG1vZHVsZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBwcm9wZXJ0eSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBvbiBvYmpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gd2FybmluZyBUaGUgb25lLXRpbWUgbWVzc2FnZSB0byBzaG93IGlmIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWRcbiAgICAgKi9cbiAgICBDb21tb24uZGVwcmVjYXRlZCA9IGZ1bmN0aW9uKG9iaiwgcHJvcCwgd2FybmluZykge1xuICAgICAgICBvYmpbcHJvcF0gPSBDb21tb24uY2hhaW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBDb21tb24ud2Fybk9uY2UoJ/CflIUgZGVwcmVjYXRlZCDwn5SFJywgd2FybmluZyk7XG4gICAgICAgIH0sIG9ialtwcm9wXSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5leHQgdW5pcXVlIHNlcXVlbnRpYWwgSUQuXG4gICAgICogQG1ldGhvZCBuZXh0SWRcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IFVuaXF1ZSBzZXF1ZW50aWFsIElEXG4gICAgICovXG4gICAgQ29tbW9uLm5leHRJZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gQ29tbW9uLl9uZXh0SWQrKztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQSBjcm9zcyBicm93c2VyIGNvbXBhdGlibGUgaW5kZXhPZiBpbXBsZW1lbnRhdGlvbi5cbiAgICAgKiBAbWV0aG9kIGluZGV4T2ZcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBoYXlzdGFja1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBuZWVkbGVcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBwb3NpdGlvbiBvZiBuZWVkbGUgaW4gaGF5c3RhY2ssIG90aGVyd2lzZSAtMS5cbiAgICAgKi9cbiAgICBDb21tb24uaW5kZXhPZiA9IGZ1bmN0aW9uKGhheXN0YWNrLCBuZWVkbGUpIHtcbiAgICAgICAgaWYgKGhheXN0YWNrLmluZGV4T2YpXG4gICAgICAgICAgICByZXR1cm4gaGF5c3RhY2suaW5kZXhPZihuZWVkbGUpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGF5c3RhY2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChoYXlzdGFja1tpXSA9PT0gbmVlZGxlKVxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBIGNyb3NzIGJyb3dzZXIgY29tcGF0aWJsZSBhcnJheSBtYXAgaW1wbGVtZW50YXRpb24uXG4gICAgICogQG1ldGhvZCBtYXBcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBsaXN0XG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuY1xuICAgICAqIEByZXR1cm4ge2FycmF5fSBWYWx1ZXMgZnJvbSBsaXN0IHRyYW5zZm9ybWVkIGJ5IGZ1bmMuXG4gICAgICovXG4gICAgQ29tbW9uLm1hcCA9IGZ1bmN0aW9uKGxpc3QsIGZ1bmMpIHtcbiAgICAgICAgaWYgKGxpc3QubWFwKSB7XG4gICAgICAgICAgICByZXR1cm4gbGlzdC5tYXAoZnVuYyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbWFwcGVkID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBtYXBwZWQucHVzaChmdW5jKGxpc3RbaV0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXBwZWQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRha2VzIGEgZGlyZWN0ZWQgZ3JhcGggYW5kIHJldHVybnMgdGhlIHBhcnRpYWxseSBvcmRlcmVkIHNldCBvZiB2ZXJ0aWNlcyBpbiB0b3BvbG9naWNhbCBvcmRlci5cbiAgICAgKiBDaXJjdWxhciBkZXBlbmRlbmNpZXMgYXJlIGFsbG93ZWQuXG4gICAgICogQG1ldGhvZCB0b3BvbG9naWNhbFNvcnRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZ3JhcGhcbiAgICAgKiBAcmV0dXJuIHthcnJheX0gUGFydGlhbGx5IG9yZGVyZWQgc2V0IG9mIHZlcnRpY2VzIGluIHRvcG9sb2dpY2FsIG9yZGVyLlxuICAgICAqL1xuICAgIENvbW1vbi50b3BvbG9naWNhbFNvcnQgPSBmdW5jdGlvbihncmFwaCkge1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWdlY2hldi9qYXZhc2NyaXB0LWFsZ29yaXRobXNcbiAgICAgICAgLy8gQ29weXJpZ2h0IChjKSBNaW5rbyBHZWNoZXYgKE1JVCBsaWNlbnNlKVxuICAgICAgICAvLyBNb2RpZmljYXRpb25zOiB0aWR5IGZvcm1hdHRpbmcgYW5kIG5hbWluZ1xuICAgICAgICB2YXIgcmVzdWx0ID0gW10sXG4gICAgICAgICAgICB2aXNpdGVkID0gW10sXG4gICAgICAgICAgICB0ZW1wID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgbm9kZSBpbiBncmFwaCkge1xuICAgICAgICAgICAgaWYgKCF2aXNpdGVkW25vZGVdICYmICF0ZW1wW25vZGVdKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLl90b3BvbG9naWNhbFNvcnQobm9kZSwgdmlzaXRlZCwgdGVtcCwgZ3JhcGgsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICBDb21tb24uX3RvcG9sb2dpY2FsU29ydCA9IGZ1bmN0aW9uKG5vZGUsIHZpc2l0ZWQsIHRlbXAsIGdyYXBoLCByZXN1bHQpIHtcbiAgICAgICAgdmFyIG5laWdoYm9ycyA9IGdyYXBoW25vZGVdIHx8IFtdO1xuICAgICAgICB0ZW1wW25vZGVdID0gdHJ1ZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5laWdoYm9ycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIG5laWdoYm9yID0gbmVpZ2hib3JzW2ldO1xuXG4gICAgICAgICAgICBpZiAodGVtcFtuZWlnaGJvcl0pIHtcbiAgICAgICAgICAgICAgICAvLyBza2lwIGNpcmN1bGFyIGRlcGVuZGVuY2llc1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXZpc2l0ZWRbbmVpZ2hib3JdKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLl90b3BvbG9naWNhbFNvcnQobmVpZ2hib3IsIHZpc2l0ZWQsIHRlbXAsIGdyYXBoLCByZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGVtcFtub2RlXSA9IGZhbHNlO1xuICAgICAgICB2aXNpdGVkW25vZGVdID0gdHJ1ZTtcblxuICAgICAgICByZXN1bHQucHVzaChub2RlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGFrZXMgX25fIGZ1bmN0aW9ucyBhcyBhcmd1bWVudHMgYW5kIHJldHVybnMgYSBuZXcgZnVuY3Rpb24gdGhhdCBjYWxscyB0aGVtIGluIG9yZGVyLlxuICAgICAqIFRoZSBhcmd1bWVudHMgYXBwbGllZCB3aGVuIGNhbGxpbmcgdGhlIG5ldyBmdW5jdGlvbiB3aWxsIGFsc28gYmUgYXBwbGllZCB0byBldmVyeSBmdW5jdGlvbiBwYXNzZWQuXG4gICAgICogVGhlIHZhbHVlIG9mIGB0aGlzYCByZWZlcnMgdG8gdGhlIGxhc3QgdmFsdWUgcmV0dXJuZWQgaW4gdGhlIGNoYWluIHRoYXQgd2FzIG5vdCBgdW5kZWZpbmVkYC5cbiAgICAgKiBUaGVyZWZvcmUgaWYgYSBwYXNzZWQgZnVuY3Rpb24gZG9lcyBub3QgcmV0dXJuIGEgdmFsdWUsIHRoZSBwcmV2aW91c2x5IHJldHVybmVkIHZhbHVlIGlzIG1haW50YWluZWQuXG4gICAgICogQWZ0ZXIgYWxsIHBhc3NlZCBmdW5jdGlvbnMgaGF2ZSBiZWVuIGNhbGxlZCB0aGUgbmV3IGZ1bmN0aW9uIHJldHVybnMgdGhlIGxhc3QgcmV0dXJuZWQgdmFsdWUgKGlmIGFueSkuXG4gICAgICogSWYgYW55IG9mIHRoZSBwYXNzZWQgZnVuY3Rpb25zIGFyZSBhIGNoYWluLCB0aGVuIHRoZSBjaGFpbiB3aWxsIGJlIGZsYXR0ZW5lZC5cbiAgICAgKiBAbWV0aG9kIGNoYWluXG4gICAgICogQHBhcmFtIC4uLmZ1bmNzIHtmdW5jdGlvbn0gVGhlIGZ1bmN0aW9ucyB0byBjaGFpbi5cbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gQSBuZXcgZnVuY3Rpb24gdGhhdCBjYWxscyB0aGUgcGFzc2VkIGZ1bmN0aW9ucyBpbiBvcmRlci5cbiAgICAgKi9cbiAgICBDb21tb24uY2hhaW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGZ1bmNzID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBmdW5jID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICAgICAgICBpZiAoZnVuYy5fY2hhaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vIGZsYXR0ZW4gYWxyZWFkeSBjaGFpbmVkIGZ1bmN0aW9uc1xuICAgICAgICAgICAgICAgIGZ1bmNzLnB1c2guYXBwbHkoZnVuY3MsIGZ1bmMuX2NoYWluZWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmdW5jcy5wdXNoKGZ1bmMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoYWluID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL2RldnRvb2xzLWRvY3MvaXNzdWVzLzUzI2lzc3VlY29tbWVudC01MTk0MTM1OFxuICAgICAgICAgICAgdmFyIGxhc3RSZXN1bHQsXG4gICAgICAgICAgICAgICAgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGZ1bmNzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGZ1bmNzW2ldLmFwcGx5KGxhc3RSZXN1bHQsIGFyZ3MpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgICAgICAgfTtcblxuICAgICAgICBjaGFpbi5fY2hhaW5lZCA9IGZ1bmNzO1xuXG4gICAgICAgIHJldHVybiBjaGFpbjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2hhaW5zIGEgZnVuY3Rpb24gdG8gZXhjdXRlIGJlZm9yZSB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gb24gdGhlIGdpdmVuIGBwYXRoYCByZWxhdGl2ZSB0byBgYmFzZWAuXG4gICAgICogU2VlIGFsc28gZG9jcyBmb3IgYENvbW1vbi5jaGFpbmAuXG4gICAgICogQG1ldGhvZCBjaGFpblBhdGhCZWZvcmVcbiAgICAgKiBAcGFyYW0ge30gYmFzZSBUaGUgYmFzZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCByZWxhdGl2ZSB0byBgYmFzZWBcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGFpbiBiZWZvcmUgdGhlIG9yaWdpbmFsXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb259IFRoZSBjaGFpbmVkIGZ1bmN0aW9uIHRoYXQgcmVwbGFjZWQgdGhlIG9yaWdpbmFsXG4gICAgICovXG4gICAgQ29tbW9uLmNoYWluUGF0aEJlZm9yZSA9IGZ1bmN0aW9uKGJhc2UsIHBhdGgsIGZ1bmMpIHtcbiAgICAgICAgcmV0dXJuIENvbW1vbi5zZXQoYmFzZSwgcGF0aCwgQ29tbW9uLmNoYWluKFxuICAgICAgICAgICAgZnVuYyxcbiAgICAgICAgICAgIENvbW1vbi5nZXQoYmFzZSwgcGF0aClcbiAgICAgICAgKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENoYWlucyBhIGZ1bmN0aW9uIHRvIGV4Y3V0ZSBhZnRlciB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gb24gdGhlIGdpdmVuIGBwYXRoYCByZWxhdGl2ZSB0byBgYmFzZWAuXG4gICAgICogU2VlIGFsc28gZG9jcyBmb3IgYENvbW1vbi5jaGFpbmAuXG4gICAgICogQG1ldGhvZCBjaGFpblBhdGhBZnRlclxuICAgICAqIEBwYXJhbSB7fSBiYXNlIFRoZSBiYXNlIG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHJlbGF0aXZlIHRvIGBiYXNlYFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoYWluIGFmdGVyIHRoZSBvcmlnaW5hbFxuICAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBUaGUgY2hhaW5lZCBmdW5jdGlvbiB0aGF0IHJlcGxhY2VkIHRoZSBvcmlnaW5hbFxuICAgICAqL1xuICAgIENvbW1vbi5jaGFpblBhdGhBZnRlciA9IGZ1bmN0aW9uKGJhc2UsIHBhdGgsIGZ1bmMpIHtcbiAgICAgICAgcmV0dXJuIENvbW1vbi5zZXQoYmFzZSwgcGF0aCwgQ29tbW9uLmNoYWluKFxuICAgICAgICAgICAgQ29tbW9uLmdldChiYXNlLCBwYXRoKSxcbiAgICAgICAgICAgIGZ1bmNcbiAgICAgICAgKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFByb3ZpZGUgdGhlIFtwb2x5LWRlY29tcF0oaHR0cHM6Ly9naXRodWIuY29tL3NjaHRlcHBlL3BvbHktZGVjb21wLmpzKSBsaWJyYXJ5IG1vZHVsZSB0byBlbmFibGVcbiAgICAgKiBjb25jYXZlIHZlcnRleCBkZWNvbXBvc2l0aW9uIHN1cHBvcnQgd2hlbiB1c2luZyBgQm9kaWVzLmZyb21WZXJ0aWNlc2AgZS5nLiBgQ29tbW9uLnNldERlY29tcChyZXF1aXJlKCdwb2x5LWRlY29tcCcpKWAuXG4gICAgICogQG1ldGhvZCBzZXREZWNvbXBcbiAgICAgKiBAcGFyYW0ge30gZGVjb21wIFRoZSBbcG9seS1kZWNvbXBdKGh0dHBzOi8vZ2l0aHViLmNvbS9zY2h0ZXBwZS9wb2x5LWRlY29tcC5qcykgbGlicmFyeSBtb2R1bGUuXG4gICAgICovXG4gICAgQ29tbW9uLnNldERlY29tcCA9IGZ1bmN0aW9uKGRlY29tcCkge1xuICAgICAgICBDb21tb24uX2RlY29tcCA9IGRlY29tcDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgW3BvbHktZGVjb21wXShodHRwczovL2dpdGh1Yi5jb20vc2NodGVwcGUvcG9seS1kZWNvbXAuanMpIGxpYnJhcnkgbW9kdWxlIHByb3ZpZGVkIHRocm91Z2ggYENvbW1vbi5zZXREZWNvbXBgLFxuICAgICAqIG90aGVyd2lzZSByZXR1cm5zIHRoZSBnbG9iYWwgYGRlY29tcGAgaWYgc2V0LlxuICAgICAqIEBtZXRob2QgZ2V0RGVjb21wXG4gICAgICogQHJldHVybiB7fSBUaGUgW3BvbHktZGVjb21wXShodHRwczovL2dpdGh1Yi5jb20vc2NodGVwcGUvcG9seS1kZWNvbXAuanMpIGxpYnJhcnkgbW9kdWxlIGlmIHByb3ZpZGVkLlxuICAgICAqL1xuICAgIENvbW1vbi5nZXREZWNvbXAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gZ2V0IHVzZXIgcHJvdmlkZWQgZGVjb21wIGlmIHNldFxuICAgICAgICB2YXIgZGVjb21wID0gQ29tbW9uLl9kZWNvbXA7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBmcm9tIHdpbmRvdyBnbG9iYWxcbiAgICAgICAgICAgIGlmICghZGVjb21wICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgZGVjb21wID0gd2luZG93LmRlY29tcDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBmcm9tIG5vZGUgZ2xvYmFsXG4gICAgICAgICAgICBpZiAoIWRlY29tcCAmJiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGRlY29tcCA9IGdsb2JhbC5kZWNvbXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIGRlY29tcCBub3QgYXZhaWxhYmxlXG4gICAgICAgICAgICBkZWNvbXAgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRlY29tcDtcbiAgICB9O1xufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLkJvdW5kc2AgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgYXhpcy1hbGlnbmVkIGJvdW5kaW5nIGJveGVzIChBQUJCKS5cbipcbiogQGNsYXNzIEJvdW5kc1xuKi9cblxudmFyIEJvdW5kcyA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJvdW5kcztcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBheGlzLWFsaWduZWQgYm91bmRpbmcgYm94IChBQUJCKSBmb3IgdGhlIGdpdmVuIHZlcnRpY2VzLlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcmV0dXJuIHtib3VuZHN9IEEgbmV3IGJvdW5kcyBvYmplY3RcbiAgICAgKi9cbiAgICBCb3VuZHMuY3JlYXRlID0gZnVuY3Rpb24odmVydGljZXMpIHtcbiAgICAgICAgdmFyIGJvdW5kcyA9IHsgXG4gICAgICAgICAgICBtaW46IHsgeDogMCwgeTogMCB9LCBcbiAgICAgICAgICAgIG1heDogeyB4OiAwLCB5OiAwIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodmVydGljZXMpXG4gICAgICAgICAgICBCb3VuZHMudXBkYXRlKGJvdW5kcywgdmVydGljZXMpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGJvdW5kcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBib3VuZHMgdXNpbmcgdGhlIGdpdmVuIHZlcnRpY2VzIGFuZCBleHRlbmRzIHRoZSBib3VuZHMgZ2l2ZW4gYSB2ZWxvY2l0eS5cbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVxuICAgICAqIEBwYXJhbSB7Ym91bmRzfSBib3VuZHNcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWxvY2l0eVxuICAgICAqL1xuICAgIEJvdW5kcy51cGRhdGUgPSBmdW5jdGlvbihib3VuZHMsIHZlcnRpY2VzLCB2ZWxvY2l0eSkge1xuICAgICAgICBib3VuZHMubWluLnggPSBJbmZpbml0eTtcbiAgICAgICAgYm91bmRzLm1heC54ID0gLUluZmluaXR5O1xuICAgICAgICBib3VuZHMubWluLnkgPSBJbmZpbml0eTtcbiAgICAgICAgYm91bmRzLm1heC55ID0gLUluZmluaXR5O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB2ZXJ0ZXggPSB2ZXJ0aWNlc1tpXTtcbiAgICAgICAgICAgIGlmICh2ZXJ0ZXgueCA+IGJvdW5kcy5tYXgueCkgYm91bmRzLm1heC54ID0gdmVydGV4Lng7XG4gICAgICAgICAgICBpZiAodmVydGV4LnggPCBib3VuZHMubWluLngpIGJvdW5kcy5taW4ueCA9IHZlcnRleC54O1xuICAgICAgICAgICAgaWYgKHZlcnRleC55ID4gYm91bmRzLm1heC55KSBib3VuZHMubWF4LnkgPSB2ZXJ0ZXgueTtcbiAgICAgICAgICAgIGlmICh2ZXJ0ZXgueSA8IGJvdW5kcy5taW4ueSkgYm91bmRzLm1pbi55ID0gdmVydGV4Lnk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh2ZWxvY2l0eSkge1xuICAgICAgICAgICAgaWYgKHZlbG9jaXR5LnggPiAwKSB7XG4gICAgICAgICAgICAgICAgYm91bmRzLm1heC54ICs9IHZlbG9jaXR5Lng7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJvdW5kcy5taW4ueCArPSB2ZWxvY2l0eS54O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodmVsb2NpdHkueSA+IDApIHtcbiAgICAgICAgICAgICAgICBib3VuZHMubWF4LnkgKz0gdmVsb2NpdHkueTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYm91bmRzLm1pbi55ICs9IHZlbG9jaXR5Lnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBib3VuZHMgY29udGFpbnMgdGhlIGdpdmVuIHBvaW50LlxuICAgICAqIEBtZXRob2QgY29udGFpbnNcbiAgICAgKiBAcGFyYW0ge2JvdW5kc30gYm91bmRzXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHBvaW50XG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgYm91bmRzIGNvbnRhaW4gdGhlIHBvaW50LCBvdGhlcndpc2UgZmFsc2VcbiAgICAgKi9cbiAgICBCb3VuZHMuY29udGFpbnMgPSBmdW5jdGlvbihib3VuZHMsIHBvaW50KSB7XG4gICAgICAgIHJldHVybiBwb2ludC54ID49IGJvdW5kcy5taW4ueCAmJiBwb2ludC54IDw9IGJvdW5kcy5tYXgueCBcbiAgICAgICAgICAgICAgICYmIHBvaW50LnkgPj0gYm91bmRzLm1pbi55ICYmIHBvaW50LnkgPD0gYm91bmRzLm1heC55O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHR3byBib3VuZHMgaW50ZXJzZWN0LlxuICAgICAqIEBtZXRob2Qgb3ZlcmxhcHNcbiAgICAgKiBAcGFyYW0ge2JvdW5kc30gYm91bmRzQVxuICAgICAqIEBwYXJhbSB7Ym91bmRzfSBib3VuZHNCXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgYm91bmRzIG92ZXJsYXAsIG90aGVyd2lzZSBmYWxzZVxuICAgICAqL1xuICAgIEJvdW5kcy5vdmVybGFwcyA9IGZ1bmN0aW9uKGJvdW5kc0EsIGJvdW5kc0IpIHtcbiAgICAgICAgcmV0dXJuIChib3VuZHNBLm1pbi54IDw9IGJvdW5kc0IubWF4LnggJiYgYm91bmRzQS5tYXgueCA+PSBib3VuZHNCLm1pbi54XG4gICAgICAgICAgICAgICAgJiYgYm91bmRzQS5tYXgueSA+PSBib3VuZHNCLm1pbi55ICYmIGJvdW5kc0EubWluLnkgPD0gYm91bmRzQi5tYXgueSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRyYW5zbGF0ZXMgdGhlIGJvdW5kcyBieSB0aGUgZ2l2ZW4gdmVjdG9yLlxuICAgICAqIEBtZXRob2QgdHJhbnNsYXRlXG4gICAgICogQHBhcmFtIHtib3VuZHN9IGJvdW5kc1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKi9cbiAgICBCb3VuZHMudHJhbnNsYXRlID0gZnVuY3Rpb24oYm91bmRzLCB2ZWN0b3IpIHtcbiAgICAgICAgYm91bmRzLm1pbi54ICs9IHZlY3Rvci54O1xuICAgICAgICBib3VuZHMubWF4LnggKz0gdmVjdG9yLng7XG4gICAgICAgIGJvdW5kcy5taW4ueSArPSB2ZWN0b3IueTtcbiAgICAgICAgYm91bmRzLm1heC55ICs9IHZlY3Rvci55O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTaGlmdHMgdGhlIGJvdW5kcyB0byB0aGUgZ2l2ZW4gcG9zaXRpb24uXG4gICAgICogQG1ldGhvZCBzaGlmdFxuICAgICAqIEBwYXJhbSB7Ym91bmRzfSBib3VuZHNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gcG9zaXRpb25cbiAgICAgKi9cbiAgICBCb3VuZHMuc2hpZnQgPSBmdW5jdGlvbihib3VuZHMsIHBvc2l0aW9uKSB7XG4gICAgICAgIHZhciBkZWx0YVggPSBib3VuZHMubWF4LnggLSBib3VuZHMubWluLngsXG4gICAgICAgICAgICBkZWx0YVkgPSBib3VuZHMubWF4LnkgLSBib3VuZHMubWluLnk7XG4gICAgICAgICAgICBcbiAgICAgICAgYm91bmRzLm1pbi54ID0gcG9zaXRpb24ueDtcbiAgICAgICAgYm91bmRzLm1heC54ID0gcG9zaXRpb24ueCArIGRlbHRhWDtcbiAgICAgICAgYm91bmRzLm1pbi55ID0gcG9zaXRpb24ueTtcbiAgICAgICAgYm91bmRzLm1heC55ID0gcG9zaXRpb24ueSArIGRlbHRhWTtcbiAgICB9O1xuICAgIFxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLlZlY3RvcmAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgdmVjdG9ycy5cbiogVmVjdG9ycyBhcmUgdGhlIGJhc2lzIG9mIGFsbCB0aGUgZ2VvbWV0cnkgcmVsYXRlZCBvcGVyYXRpb25zIGluIHRoZSBlbmdpbmUuXG4qIEEgYE1hdHRlci5WZWN0b3JgIG9iamVjdCBpcyBvZiB0aGUgZm9ybSBgeyB4OiAwLCB5OiAwIH1gLlxuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgVmVjdG9yXG4qL1xuXG4vLyBUT0RPOiBjb25zaWRlciBwYXJhbXMgZm9yIHJldXNpbmcgdmVjdG9yIG9iamVjdHNcblxudmFyIFZlY3RvciA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZlY3RvcjtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyB2ZWN0b3IuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHJldHVybiB7dmVjdG9yfSBBIG5ldyB2ZWN0b3JcbiAgICAgKi9cbiAgICBWZWN0b3IuY3JlYXRlID0gZnVuY3Rpb24oeCwgeSkge1xuICAgICAgICByZXR1cm4geyB4OiB4IHx8IDAsIHk6IHkgfHwgMCB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbmV3IHZlY3RvciB3aXRoIGB4YCBhbmQgYHlgIGNvcGllZCBmcm9tIHRoZSBnaXZlbiBgdmVjdG9yYC5cbiAgICAgKiBAbWV0aG9kIGNsb25lXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gQSBuZXcgY2xvbmVkIHZlY3RvclxuICAgICAqL1xuICAgIFZlY3Rvci5jbG9uZSA9IGZ1bmN0aW9uKHZlY3Rvcikge1xuICAgICAgICByZXR1cm4geyB4OiB2ZWN0b3IueCwgeTogdmVjdG9yLnkgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbWFnbml0dWRlIChsZW5ndGgpIG9mIGEgdmVjdG9yLlxuICAgICAqIEBtZXRob2QgbWFnbml0dWRlXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIG1hZ25pdHVkZSBvZiB0aGUgdmVjdG9yXG4gICAgICovXG4gICAgVmVjdG9yLm1hZ25pdHVkZSA9IGZ1bmN0aW9uKHZlY3Rvcikge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KCh2ZWN0b3IueCAqIHZlY3Rvci54KSArICh2ZWN0b3IueSAqIHZlY3Rvci55KSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG1hZ25pdHVkZSAobGVuZ3RoKSBvZiBhIHZlY3RvciAodGhlcmVmb3JlIHNhdmluZyBhIGBzcXJ0YCBvcGVyYXRpb24pLlxuICAgICAqIEBtZXRob2QgbWFnbml0dWRlU3F1YXJlZFxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBzcXVhcmVkIG1hZ25pdHVkZSBvZiB0aGUgdmVjdG9yXG4gICAgICovXG4gICAgVmVjdG9yLm1hZ25pdHVkZVNxdWFyZWQgPSBmdW5jdGlvbih2ZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuICh2ZWN0b3IueCAqIHZlY3Rvci54KSArICh2ZWN0b3IueSAqIHZlY3Rvci55KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUm90YXRlcyB0aGUgdmVjdG9yIGFib3V0ICgwLCAwKSBieSBzcGVjaWZpZWQgYW5nbGUuXG4gICAgICogQG1ldGhvZCByb3RhdGVcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IFtvdXRwdXRdXG4gICAgICogQHJldHVybiB7dmVjdG9yfSBUaGUgdmVjdG9yIHJvdGF0ZWQgYWJvdXQgKDAsIDApXG4gICAgICovXG4gICAgVmVjdG9yLnJvdGF0ZSA9IGZ1bmN0aW9uKHZlY3RvciwgYW5nbGUsIG91dHB1dCkge1xuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MoYW5nbGUpLCBzaW4gPSBNYXRoLnNpbihhbmdsZSk7XG4gICAgICAgIGlmICghb3V0cHV0KSBvdXRwdXQgPSB7fTtcbiAgICAgICAgdmFyIHggPSB2ZWN0b3IueCAqIGNvcyAtIHZlY3Rvci55ICogc2luO1xuICAgICAgICBvdXRwdXQueSA9IHZlY3Rvci54ICogc2luICsgdmVjdG9yLnkgKiBjb3M7XG4gICAgICAgIG91dHB1dC54ID0geDtcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUm90YXRlcyB0aGUgdmVjdG9yIGFib3V0IGEgc3BlY2lmaWVkIHBvaW50IGJ5IHNwZWNpZmllZCBhbmdsZS5cbiAgICAgKiBAbWV0aG9kIHJvdGF0ZUFib3V0XG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBwb2ludFxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBbb3V0cHV0XVxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gQSBuZXcgdmVjdG9yIHJvdGF0ZWQgYWJvdXQgdGhlIHBvaW50XG4gICAgICovXG4gICAgVmVjdG9yLnJvdGF0ZUFib3V0ID0gZnVuY3Rpb24odmVjdG9yLCBhbmdsZSwgcG9pbnQsIG91dHB1dCkge1xuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MoYW5nbGUpLCBzaW4gPSBNYXRoLnNpbihhbmdsZSk7XG4gICAgICAgIGlmICghb3V0cHV0KSBvdXRwdXQgPSB7fTtcbiAgICAgICAgdmFyIHggPSBwb2ludC54ICsgKCh2ZWN0b3IueCAtIHBvaW50LngpICogY29zIC0gKHZlY3Rvci55IC0gcG9pbnQueSkgKiBzaW4pO1xuICAgICAgICBvdXRwdXQueSA9IHBvaW50LnkgKyAoKHZlY3Rvci54IC0gcG9pbnQueCkgKiBzaW4gKyAodmVjdG9yLnkgLSBwb2ludC55KSAqIGNvcyk7XG4gICAgICAgIG91dHB1dC54ID0geDtcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTm9ybWFsaXNlcyBhIHZlY3RvciAoc3VjaCB0aGF0IGl0cyBtYWduaXR1ZGUgaXMgYDFgKS5cbiAgICAgKiBAbWV0aG9kIG5vcm1hbGlzZVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IEEgbmV3IHZlY3RvciBub3JtYWxpc2VkXG4gICAgICovXG4gICAgVmVjdG9yLm5vcm1hbGlzZSA9IGZ1bmN0aW9uKHZlY3Rvcikge1xuICAgICAgICB2YXIgbWFnbml0dWRlID0gVmVjdG9yLm1hZ25pdHVkZSh2ZWN0b3IpO1xuICAgICAgICBpZiAobWFnbml0dWRlID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCB9O1xuICAgICAgICByZXR1cm4geyB4OiB2ZWN0b3IueCAvIG1hZ25pdHVkZSwgeTogdmVjdG9yLnkgLyBtYWduaXR1ZGUgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZG90LXByb2R1Y3Qgb2YgdHdvIHZlY3RvcnMuXG4gICAgICogQG1ldGhvZCBkb3RcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JCXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgZG90IHByb2R1Y3Qgb2YgdGhlIHR3byB2ZWN0b3JzXG4gICAgICovXG4gICAgVmVjdG9yLmRvdCA9IGZ1bmN0aW9uKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgICAgICAgcmV0dXJuICh2ZWN0b3JBLnggKiB2ZWN0b3JCLngpICsgKHZlY3RvckEueSAqIHZlY3RvckIueSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNyb3NzLXByb2R1Y3Qgb2YgdHdvIHZlY3RvcnMuXG4gICAgICogQG1ldGhvZCBjcm9zc1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JBXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBjcm9zcyBwcm9kdWN0IG9mIHRoZSB0d28gdmVjdG9yc1xuICAgICAqL1xuICAgIFZlY3Rvci5jcm9zcyA9IGZ1bmN0aW9uKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgICAgICAgcmV0dXJuICh2ZWN0b3JBLnggKiB2ZWN0b3JCLnkpIC0gKHZlY3RvckEueSAqIHZlY3RvckIueCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNyb3NzLXByb2R1Y3Qgb2YgdGhyZWUgdmVjdG9ycy5cbiAgICAgKiBAbWV0aG9kIGNyb3NzM1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JBXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckJcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQ1xuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGNyb3NzIHByb2R1Y3Qgb2YgdGhlIHRocmVlIHZlY3RvcnNcbiAgICAgKi9cbiAgICBWZWN0b3IuY3Jvc3MzID0gZnVuY3Rpb24odmVjdG9yQSwgdmVjdG9yQiwgdmVjdG9yQykge1xuICAgICAgICByZXR1cm4gKHZlY3RvckIueCAtIHZlY3RvckEueCkgKiAodmVjdG9yQy55IC0gdmVjdG9yQS55KSAtICh2ZWN0b3JCLnkgLSB2ZWN0b3JBLnkpICogKHZlY3RvckMueCAtIHZlY3RvckEueCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIHR3byB2ZWN0b3JzLlxuICAgICAqIEBtZXRob2QgYWRkXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckFcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQlxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBbb3V0cHV0XVxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gQSBuZXcgdmVjdG9yIG9mIHZlY3RvckEgYW5kIHZlY3RvckIgYWRkZWRcbiAgICAgKi9cbiAgICBWZWN0b3IuYWRkID0gZnVuY3Rpb24odmVjdG9yQSwgdmVjdG9yQiwgb3V0cHV0KSB7XG4gICAgICAgIGlmICghb3V0cHV0KSBvdXRwdXQgPSB7fTtcbiAgICAgICAgb3V0cHV0LnggPSB2ZWN0b3JBLnggKyB2ZWN0b3JCLng7XG4gICAgICAgIG91dHB1dC55ID0gdmVjdG9yQS55ICsgdmVjdG9yQi55O1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIHR3byB2ZWN0b3JzLlxuICAgICAqIEBtZXRob2Qgc3ViXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckFcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQlxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBbb3V0cHV0XVxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gQSBuZXcgdmVjdG9yIG9mIHZlY3RvckEgYW5kIHZlY3RvckIgc3VidHJhY3RlZFxuICAgICAqL1xuICAgIFZlY3Rvci5zdWIgPSBmdW5jdGlvbih2ZWN0b3JBLCB2ZWN0b3JCLCBvdXRwdXQpIHtcbiAgICAgICAgaWYgKCFvdXRwdXQpIG91dHB1dCA9IHt9O1xuICAgICAgICBvdXRwdXQueCA9IHZlY3RvckEueCAtIHZlY3RvckIueDtcbiAgICAgICAgb3V0cHV0LnkgPSB2ZWN0b3JBLnkgLSB2ZWN0b3JCLnk7XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgYSB2ZWN0b3IgYW5kIGEgc2NhbGFyLlxuICAgICAqIEBtZXRob2QgbXVsdFxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGFyXG4gICAgICogQHJldHVybiB7dmVjdG9yfSBBIG5ldyB2ZWN0b3IgbXVsdGlwbGllZCBieSBzY2FsYXJcbiAgICAgKi9cbiAgICBWZWN0b3IubXVsdCA9IGZ1bmN0aW9uKHZlY3Rvciwgc2NhbGFyKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHZlY3Rvci54ICogc2NhbGFyLCB5OiB2ZWN0b3IueSAqIHNjYWxhciB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIGEgdmVjdG9yIGFuZCBhIHNjYWxhci5cbiAgICAgKiBAbWV0aG9kIGRpdlxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGFyXG4gICAgICogQHJldHVybiB7dmVjdG9yfSBBIG5ldyB2ZWN0b3IgZGl2aWRlZCBieSBzY2FsYXJcbiAgICAgKi9cbiAgICBWZWN0b3IuZGl2ID0gZnVuY3Rpb24odmVjdG9yLCBzY2FsYXIpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdmVjdG9yLnggLyBzY2FsYXIsIHk6IHZlY3Rvci55IC8gc2NhbGFyIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBlcnBlbmRpY3VsYXIgdmVjdG9yLiBTZXQgYG5lZ2F0ZWAgdG8gdHJ1ZSBmb3IgdGhlIHBlcnBlbmRpY3VsYXIgaW4gdGhlIG9wcG9zaXRlIGRpcmVjdGlvbi5cbiAgICAgKiBAbWV0aG9kIHBlcnBcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICogQHBhcmFtIHtib29sfSBbbmVnYXRlPWZhbHNlXVxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gVGhlIHBlcnBlbmRpY3VsYXIgdmVjdG9yXG4gICAgICovXG4gICAgVmVjdG9yLnBlcnAgPSBmdW5jdGlvbih2ZWN0b3IsIG5lZ2F0ZSkge1xuICAgICAgICBuZWdhdGUgPSBuZWdhdGUgPT09IHRydWUgPyAtMSA6IDE7XG4gICAgICAgIHJldHVybiB7IHg6IG5lZ2F0ZSAqIC12ZWN0b3IueSwgeTogbmVnYXRlICogdmVjdG9yLnggfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTmVnYXRlcyBib3RoIGNvbXBvbmVudHMgb2YgYSB2ZWN0b3Igc3VjaCB0aGF0IGl0IHBvaW50cyBpbiB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uLlxuICAgICAqIEBtZXRob2QgbmVnXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gVGhlIG5lZ2F0ZWQgdmVjdG9yXG4gICAgICovXG4gICAgVmVjdG9yLm5lZyA9IGZ1bmN0aW9uKHZlY3Rvcikge1xuICAgICAgICByZXR1cm4geyB4OiAtdmVjdG9yLngsIHk6IC12ZWN0b3IueSB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBhbmdsZSBiZXR3ZWVuIHRoZSB2ZWN0b3IgYHZlY3RvckIgLSB2ZWN0b3JBYCBhbmQgdGhlIHgtYXhpcyBpbiByYWRpYW5zLlxuICAgICAqIEBtZXRob2QgYW5nbGVcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JCXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgaW4gcmFkaWFuc1xuICAgICAqL1xuICAgIFZlY3Rvci5hbmdsZSA9IGZ1bmN0aW9uKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodmVjdG9yQi55IC0gdmVjdG9yQS55LCB2ZWN0b3JCLnggLSB2ZWN0b3JBLngpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUZW1wb3JhcnkgdmVjdG9yIHBvb2wgKG5vdCB0aHJlYWQtc2FmZSkuXG4gICAgICogQHByb3BlcnR5IF90ZW1wXG4gICAgICogQHR5cGUge3ZlY3RvcltdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgVmVjdG9yLl90ZW1wID0gW1xuICAgICAgICBWZWN0b3IuY3JlYXRlKCksIFZlY3Rvci5jcmVhdGUoKSwgXG4gICAgICAgIFZlY3Rvci5jcmVhdGUoKSwgVmVjdG9yLmNyZWF0ZSgpLCBcbiAgICAgICAgVmVjdG9yLmNyZWF0ZSgpLCBWZWN0b3IuY3JlYXRlKClcbiAgICBdO1xuXG59KSgpO1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLlZlcnRpY2VzYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBzZXRzIG9mIHZlcnRpY2VzLlxuKiBBIHNldCBvZiB2ZXJ0aWNlcyBpcyBhbiBhcnJheSBvZiBgTWF0dGVyLlZlY3RvcmAgd2l0aCBhZGRpdGlvbmFsIGluZGV4aW5nIHByb3BlcnRpZXMgaW5zZXJ0ZWQgYnkgYFZlcnRpY2VzLmNyZWF0ZWAuXG4qIEEgYE1hdHRlci5Cb2R5YCBtYWludGFpbnMgYSBzZXQgb2YgdmVydGljZXMgdG8gcmVwcmVzZW50IHRoZSBzaGFwZSBvZiB0aGUgb2JqZWN0IChpdHMgY29udmV4IGh1bGwpLlxuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgVmVydGljZXNcbiovXG5cbnZhciBWZXJ0aWNlcyA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRpY2VzO1xuXG52YXIgVmVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHNldCBvZiBgTWF0dGVyLkJvZHlgIGNvbXBhdGlibGUgdmVydGljZXMuXG4gICAgICogVGhlIGBwb2ludHNgIGFyZ3VtZW50IGFjY2VwdHMgYW4gYXJyYXkgb2YgYE1hdHRlci5WZWN0b3JgIHBvaW50cyBvcmllbnRhdGVkIGFyb3VuZCB0aGUgb3JpZ2luIGAoMCwgMClgLCBmb3IgZXhhbXBsZTpcbiAgICAgKlxuICAgICAqICAgICBbeyB4OiAwLCB5OiAwIH0sIHsgeDogMjUsIHk6IDUwIH0sIHsgeDogNTAsIHk6IDAgfV1cbiAgICAgKlxuICAgICAqIFRoZSBgVmVydGljZXMuY3JlYXRlYCBtZXRob2QgcmV0dXJucyBhIG5ldyBhcnJheSBvZiB2ZXJ0aWNlcywgd2hpY2ggYXJlIHNpbWlsYXIgdG8gTWF0dGVyLlZlY3RvciBvYmplY3RzLFxuICAgICAqIGJ1dCB3aXRoIHNvbWUgYWRkaXRpb25hbCByZWZlcmVuY2VzIHJlcXVpcmVkIGZvciBlZmZpY2llbnQgY29sbGlzaW9uIGRldGVjdGlvbiByb3V0aW5lcy5cbiAgICAgKlxuICAgICAqIFZlcnRpY2VzIG11c3QgYmUgc3BlY2lmaWVkIGluIGNsb2Nrd2lzZSBvcmRlci5cbiAgICAgKlxuICAgICAqIE5vdGUgdGhhdCB0aGUgYGJvZHlgIGFyZ3VtZW50IGlzIG5vdCBvcHRpb25hbCwgYSBgTWF0dGVyLkJvZHlgIHJlZmVyZW5jZSBtdXN0IGJlIHByb3ZpZGVkLlxuICAgICAqXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge3ZlY3RvcltdfSBwb2ludHNcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5jcmVhdGUgPSBmdW5jdGlvbihwb2ludHMsIGJvZHkpIHtcbiAgICAgICAgdmFyIHZlcnRpY2VzID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwb2ludCA9IHBvaW50c1tpXSxcbiAgICAgICAgICAgICAgICB2ZXJ0ZXggPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IHBvaW50LngsXG4gICAgICAgICAgICAgICAgICAgIHk6IHBvaW50LnksXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICAgICAgICAgICAgICBpc0ludGVybmFsOiBmYWxzZVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZlcnRpY2VzLnB1c2godmVydGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZXJ0aWNlcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIGEgc3RyaW5nIGNvbnRhaW5pbmcgb3JkZXJlZCB4IHkgcGFpcnMgc2VwYXJhdGVkIGJ5IHNwYWNlcyAoYW5kIG9wdGlvbmFsbHkgY29tbWFzKSwgXG4gICAgICogaW50byBhIGBNYXR0ZXIuVmVydGljZXNgIG9iamVjdCBmb3IgdGhlIGdpdmVuIGBNYXR0ZXIuQm9keWAuXG4gICAgICogRm9yIHBhcnNpbmcgU1ZHIHBhdGhzLCBzZWUgYFN2Zy5wYXRoVG9WZXJ0aWNlc2AuXG4gICAgICogQG1ldGhvZCBmcm9tUGF0aFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHJldHVybiB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICovXG4gICAgVmVydGljZXMuZnJvbVBhdGggPSBmdW5jdGlvbihwYXRoLCBib2R5KSB7XG4gICAgICAgIHZhciBwYXRoUGF0dGVybiA9IC9MP1xccyooWy1cXGQuZV0rKVtcXHMsXSooWy1cXGQuZV0rKSovaWcsXG4gICAgICAgICAgICBwb2ludHMgPSBbXTtcblxuICAgICAgICBwYXRoLnJlcGxhY2UocGF0aFBhdHRlcm4sIGZ1bmN0aW9uKG1hdGNoLCB4LCB5KSB7XG4gICAgICAgICAgICBwb2ludHMucHVzaCh7IHg6IHBhcnNlRmxvYXQoeCksIHk6IHBhcnNlRmxvYXQoeSkgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBWZXJ0aWNlcy5jcmVhdGUocG9pbnRzLCBib2R5KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY2VudHJlIChjZW50cm9pZCkgb2YgdGhlIHNldCBvZiB2ZXJ0aWNlcy5cbiAgICAgKiBAbWV0aG9kIGNlbnRyZVxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHJldHVybiB7dmVjdG9yfSBUaGUgY2VudHJlIHBvaW50XG4gICAgICovXG4gICAgVmVydGljZXMuY2VudHJlID0gZnVuY3Rpb24odmVydGljZXMpIHtcbiAgICAgICAgdmFyIGFyZWEgPSBWZXJ0aWNlcy5hcmVhKHZlcnRpY2VzLCB0cnVlKSxcbiAgICAgICAgICAgIGNlbnRyZSA9IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgY3Jvc3MsXG4gICAgICAgICAgICB0ZW1wLFxuICAgICAgICAgICAgajtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBqID0gKGkgKyAxKSAlIHZlcnRpY2VzLmxlbmd0aDtcbiAgICAgICAgICAgIGNyb3NzID0gVmVjdG9yLmNyb3NzKHZlcnRpY2VzW2ldLCB2ZXJ0aWNlc1tqXSk7XG4gICAgICAgICAgICB0ZW1wID0gVmVjdG9yLm11bHQoVmVjdG9yLmFkZCh2ZXJ0aWNlc1tpXSwgdmVydGljZXNbal0pLCBjcm9zcyk7XG4gICAgICAgICAgICBjZW50cmUgPSBWZWN0b3IuYWRkKGNlbnRyZSwgdGVtcCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gVmVjdG9yLmRpdihjZW50cmUsIDYgKiBhcmVhKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYXZlcmFnZSAobWVhbikgb2YgdGhlIHNldCBvZiB2ZXJ0aWNlcy5cbiAgICAgKiBAbWV0aG9kIG1lYW5cbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gVGhlIGF2ZXJhZ2UgcG9pbnRcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5tZWFuID0gZnVuY3Rpb24odmVydGljZXMpIHtcbiAgICAgICAgdmFyIGF2ZXJhZ2UgPSB7IHg6IDAsIHk6IDAgfTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhdmVyYWdlLnggKz0gdmVydGljZXNbaV0ueDtcbiAgICAgICAgICAgIGF2ZXJhZ2UueSArPSB2ZXJ0aWNlc1tpXS55O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFZlY3Rvci5kaXYoYXZlcmFnZSwgdmVydGljZXMubGVuZ3RoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYXJlYSBvZiB0aGUgc2V0IG9mIHZlcnRpY2VzLlxuICAgICAqIEBtZXRob2QgYXJlYVxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHBhcmFtIHtib29sfSBzaWduZWRcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhcmVhXG4gICAgICovXG4gICAgVmVydGljZXMuYXJlYSA9IGZ1bmN0aW9uKHZlcnRpY2VzLCBzaWduZWQpIHtcbiAgICAgICAgdmFyIGFyZWEgPSAwLFxuICAgICAgICAgICAgaiA9IHZlcnRpY2VzLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJlYSArPSAodmVydGljZXNbal0ueCAtIHZlcnRpY2VzW2ldLngpICogKHZlcnRpY2VzW2pdLnkgKyB2ZXJ0aWNlc1tpXS55KTtcbiAgICAgICAgICAgIGogPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNpZ25lZClcbiAgICAgICAgICAgIHJldHVybiBhcmVhIC8gMjtcblxuICAgICAgICByZXR1cm4gTWF0aC5hYnMoYXJlYSkgLyAyO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBtb21lbnQgb2YgaW5lcnRpYSAoc2Vjb25kIG1vbWVudCBvZiBhcmVhKSBvZiB0aGUgc2V0IG9mIHZlcnRpY2VzIGdpdmVuIHRoZSB0b3RhbCBtYXNzLlxuICAgICAqIEBtZXRob2QgaW5lcnRpYVxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1hc3NcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBwb2x5Z29uJ3MgbW9tZW50IG9mIGluZXJ0aWFcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5pbmVydGlhID0gZnVuY3Rpb24odmVydGljZXMsIG1hc3MpIHtcbiAgICAgICAgdmFyIG51bWVyYXRvciA9IDAsXG4gICAgICAgICAgICBkZW5vbWluYXRvciA9IDAsXG4gICAgICAgICAgICB2ID0gdmVydGljZXMsXG4gICAgICAgICAgICBjcm9zcyxcbiAgICAgICAgICAgIGo7XG5cbiAgICAgICAgLy8gZmluZCB0aGUgcG9seWdvbidzIG1vbWVudCBvZiBpbmVydGlhLCB1c2luZyBzZWNvbmQgbW9tZW50IG9mIGFyZWFcbiAgICAgICAgLy8gZnJvbSBlcXVhdGlvbnMgYXQgaHR0cDovL3d3dy5waHlzaWNzZm9ydW1zLmNvbS9zaG93dGhyZWFkLnBocD90PTI1MjkzXG4gICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgdi5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgaiA9IChuICsgMSkgJSB2Lmxlbmd0aDtcbiAgICAgICAgICAgIGNyb3NzID0gTWF0aC5hYnMoVmVjdG9yLmNyb3NzKHZbal0sIHZbbl0pKTtcbiAgICAgICAgICAgIG51bWVyYXRvciArPSBjcm9zcyAqIChWZWN0b3IuZG90KHZbal0sIHZbal0pICsgVmVjdG9yLmRvdCh2W2pdLCB2W25dKSArIFZlY3Rvci5kb3QodltuXSwgdltuXSkpO1xuICAgICAgICAgICAgZGVub21pbmF0b3IgKz0gY3Jvc3M7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKG1hc3MgLyA2KSAqIChudW1lcmF0b3IgLyBkZW5vbWluYXRvcik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRyYW5zbGF0ZXMgdGhlIHNldCBvZiB2ZXJ0aWNlcyBpbi1wbGFjZS5cbiAgICAgKiBAbWV0aG9kIHRyYW5zbGF0ZVxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsYXJcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy50cmFuc2xhdGUgPSBmdW5jdGlvbih2ZXJ0aWNlcywgdmVjdG9yLCBzY2FsYXIpIHtcbiAgICAgICAgc2NhbGFyID0gdHlwZW9mIHNjYWxhciAhPT0gJ3VuZGVmaW5lZCcgPyBzY2FsYXIgOiAxO1xuXG4gICAgICAgIHZhciB2ZXJ0aWNlc0xlbmd0aCA9IHZlcnRpY2VzLmxlbmd0aCxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVggPSB2ZWN0b3IueCAqIHNjYWxhcixcbiAgICAgICAgICAgIHRyYW5zbGF0ZVkgPSB2ZWN0b3IueSAqIHNjYWxhcixcbiAgICAgICAgICAgIGk7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdmVydGljZXNMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmVydGljZXNbaV0ueCArPSB0cmFuc2xhdGVYO1xuICAgICAgICAgICAgdmVydGljZXNbaV0ueSArPSB0cmFuc2xhdGVZO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZlcnRpY2VzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSb3RhdGVzIHRoZSBzZXQgb2YgdmVydGljZXMgaW4tcGxhY2UuXG4gICAgICogQG1ldGhvZCByb3RhdGVcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBwb2ludFxuICAgICAqL1xuICAgIFZlcnRpY2VzLnJvdGF0ZSA9IGZ1bmN0aW9uKHZlcnRpY2VzLCBhbmdsZSwgcG9pbnQpIHtcbiAgICAgICAgaWYgKGFuZ2xlID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhhbmdsZSksXG4gICAgICAgICAgICBzaW4gPSBNYXRoLnNpbihhbmdsZSksXG4gICAgICAgICAgICBwb2ludFggPSBwb2ludC54LFxuICAgICAgICAgICAgcG9pbnRZID0gcG9pbnQueSxcbiAgICAgICAgICAgIHZlcnRpY2VzTGVuZ3RoID0gdmVydGljZXMubGVuZ3RoLFxuICAgICAgICAgICAgdmVydGV4LFxuICAgICAgICAgICAgZHgsXG4gICAgICAgICAgICBkeSxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHZlcnRpY2VzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZlcnRleCA9IHZlcnRpY2VzW2ldO1xuICAgICAgICAgICAgZHggPSB2ZXJ0ZXgueCAtIHBvaW50WDtcbiAgICAgICAgICAgIGR5ID0gdmVydGV4LnkgLSBwb2ludFk7XG4gICAgICAgICAgICB2ZXJ0ZXgueCA9IHBvaW50WCArIChkeCAqIGNvcyAtIGR5ICogc2luKTtcbiAgICAgICAgICAgIHZlcnRleC55ID0gcG9pbnRZICsgKGR4ICogc2luICsgZHkgKiBjb3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZlcnRpY2VzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYHBvaW50YCBpcyBpbnNpZGUgdGhlIHNldCBvZiBgdmVydGljZXNgLlxuICAgICAqIEBtZXRob2QgY29udGFpbnNcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBwb2ludFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZlcnRpY2VzIGNvbnRhaW5zIHBvaW50LCBvdGhlcndpc2UgZmFsc2VcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5jb250YWlucyA9IGZ1bmN0aW9uKHZlcnRpY2VzLCBwb2ludCkge1xuICAgICAgICB2YXIgcG9pbnRYID0gcG9pbnQueCxcbiAgICAgICAgICAgIHBvaW50WSA9IHBvaW50LnksXG4gICAgICAgICAgICB2ZXJ0aWNlc0xlbmd0aCA9IHZlcnRpY2VzLmxlbmd0aCxcbiAgICAgICAgICAgIHZlcnRleCA9IHZlcnRpY2VzW3ZlcnRpY2VzTGVuZ3RoIC0gMV0sXG4gICAgICAgICAgICBuZXh0VmVydGV4O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGljZXNMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmV4dFZlcnRleCA9IHZlcnRpY2VzW2ldO1xuXG4gICAgICAgICAgICBpZiAoKHBvaW50WCAtIHZlcnRleC54KSAqIChuZXh0VmVydGV4LnkgLSB2ZXJ0ZXgueSkgXG4gICAgICAgICAgICAgICAgKyAocG9pbnRZIC0gdmVydGV4LnkpICogKHZlcnRleC54IC0gbmV4dFZlcnRleC54KSA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZlcnRleCA9IG5leHRWZXJ0ZXg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2NhbGVzIHRoZSB2ZXJ0aWNlcyBmcm9tIGEgcG9pbnQgKGRlZmF1bHQgaXMgY2VudHJlKSBpbi1wbGFjZS5cbiAgICAgKiBAbWV0aG9kIHNjYWxlXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGVYXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlWVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBwb2ludFxuICAgICAqL1xuICAgIFZlcnRpY2VzLnNjYWxlID0gZnVuY3Rpb24odmVydGljZXMsIHNjYWxlWCwgc2NhbGVZLCBwb2ludCkge1xuICAgICAgICBpZiAoc2NhbGVYID09PSAxICYmIHNjYWxlWSA9PT0gMSlcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0aWNlcztcblxuICAgICAgICBwb2ludCA9IHBvaW50IHx8IFZlcnRpY2VzLmNlbnRyZSh2ZXJ0aWNlcyk7XG5cbiAgICAgICAgdmFyIHZlcnRleCxcbiAgICAgICAgICAgIGRlbHRhO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZlcnRleCA9IHZlcnRpY2VzW2ldO1xuICAgICAgICAgICAgZGVsdGEgPSBWZWN0b3Iuc3ViKHZlcnRleCwgcG9pbnQpO1xuICAgICAgICAgICAgdmVydGljZXNbaV0ueCA9IHBvaW50LnggKyBkZWx0YS54ICogc2NhbGVYO1xuICAgICAgICAgICAgdmVydGljZXNbaV0ueSA9IHBvaW50LnkgKyBkZWx0YS55ICogc2NhbGVZO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZlcnRpY2VzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDaGFtZmVycyBhIHNldCBvZiB2ZXJ0aWNlcyBieSBnaXZpbmcgdGhlbSByb3VuZGVkIGNvcm5lcnMsIHJldHVybnMgYSBuZXcgc2V0IG9mIHZlcnRpY2VzLlxuICAgICAqIFRoZSByYWRpdXMgcGFyYW1ldGVyIGlzIGEgc2luZ2xlIG51bWJlciBvciBhbiBhcnJheSB0byBzcGVjaWZ5IHRoZSByYWRpdXMgZm9yIGVhY2ggdmVydGV4LlxuICAgICAqIEBtZXRob2QgY2hhbWZlclxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHBhcmFtIHtudW1iZXJbXX0gcmFkaXVzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHF1YWxpdHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcXVhbGl0eU1pblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBxdWFsaXR5TWF4XG4gICAgICovXG4gICAgVmVydGljZXMuY2hhbWZlciA9IGZ1bmN0aW9uKHZlcnRpY2VzLCByYWRpdXMsIHF1YWxpdHksIHF1YWxpdHlNaW4sIHF1YWxpdHlNYXgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByYWRpdXMgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICByYWRpdXMgPSBbcmFkaXVzXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJhZGl1cyA9IHJhZGl1cyB8fCBbOF07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBxdWFsaXR5IGRlZmF1bHRzIHRvIC0xLCB3aGljaCBpcyBhdXRvXG4gICAgICAgIHF1YWxpdHkgPSAodHlwZW9mIHF1YWxpdHkgIT09ICd1bmRlZmluZWQnKSA/IHF1YWxpdHkgOiAtMTtcbiAgICAgICAgcXVhbGl0eU1pbiA9IHF1YWxpdHlNaW4gfHwgMjtcbiAgICAgICAgcXVhbGl0eU1heCA9IHF1YWxpdHlNYXggfHwgMTQ7XG5cbiAgICAgICAgdmFyIG5ld1ZlcnRpY2VzID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHByZXZWZXJ0ZXggPSB2ZXJ0aWNlc1tpIC0gMSA+PSAwID8gaSAtIDEgOiB2ZXJ0aWNlcy5sZW5ndGggLSAxXSxcbiAgICAgICAgICAgICAgICB2ZXJ0ZXggPSB2ZXJ0aWNlc1tpXSxcbiAgICAgICAgICAgICAgICBuZXh0VmVydGV4ID0gdmVydGljZXNbKGkgKyAxKSAlIHZlcnRpY2VzLmxlbmd0aF0sXG4gICAgICAgICAgICAgICAgY3VycmVudFJhZGl1cyA9IHJhZGl1c1tpIDwgcmFkaXVzLmxlbmd0aCA/IGkgOiByYWRpdXMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50UmFkaXVzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbmV3VmVydGljZXMucHVzaCh2ZXJ0ZXgpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcHJldk5vcm1hbCA9IFZlY3Rvci5ub3JtYWxpc2UoeyBcbiAgICAgICAgICAgICAgICB4OiB2ZXJ0ZXgueSAtIHByZXZWZXJ0ZXgueSwgXG4gICAgICAgICAgICAgICAgeTogcHJldlZlcnRleC54IC0gdmVydGV4LnhcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgbmV4dE5vcm1hbCA9IFZlY3Rvci5ub3JtYWxpc2UoeyBcbiAgICAgICAgICAgICAgICB4OiBuZXh0VmVydGV4LnkgLSB2ZXJ0ZXgueSwgXG4gICAgICAgICAgICAgICAgeTogdmVydGV4LnggLSBuZXh0VmVydGV4LnhcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgZGlhZ29uYWxSYWRpdXMgPSBNYXRoLnNxcnQoMiAqIE1hdGgucG93KGN1cnJlbnRSYWRpdXMsIDIpKSxcbiAgICAgICAgICAgICAgICByYWRpdXNWZWN0b3IgPSBWZWN0b3IubXVsdChDb21tb24uY2xvbmUocHJldk5vcm1hbCksIGN1cnJlbnRSYWRpdXMpLFxuICAgICAgICAgICAgICAgIG1pZE5vcm1hbCA9IFZlY3Rvci5ub3JtYWxpc2UoVmVjdG9yLm11bHQoVmVjdG9yLmFkZChwcmV2Tm9ybWFsLCBuZXh0Tm9ybWFsKSwgMC41KSksXG4gICAgICAgICAgICAgICAgc2NhbGVkVmVydGV4ID0gVmVjdG9yLnN1Yih2ZXJ0ZXgsIFZlY3Rvci5tdWx0KG1pZE5vcm1hbCwgZGlhZ29uYWxSYWRpdXMpKTtcblxuICAgICAgICAgICAgdmFyIHByZWNpc2lvbiA9IHF1YWxpdHk7XG5cbiAgICAgICAgICAgIGlmIChxdWFsaXR5ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIGF1dG9tYXRpY2FsbHkgZGVjaWRlIHByZWNpc2lvblxuICAgICAgICAgICAgICAgIHByZWNpc2lvbiA9IE1hdGgucG93KGN1cnJlbnRSYWRpdXMsIDAuMzIpICogMS43NTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJlY2lzaW9uID0gQ29tbW9uLmNsYW1wKHByZWNpc2lvbiwgcXVhbGl0eU1pbiwgcXVhbGl0eU1heCk7XG5cbiAgICAgICAgICAgIC8vIHVzZSBhbiBldmVuIHZhbHVlIGZvciBwcmVjaXNpb24sIG1vcmUgbGlrZWx5IHRvIHJlZHVjZSBheGVzIGJ5IHVzaW5nIHN5bW1ldHJ5XG4gICAgICAgICAgICBpZiAocHJlY2lzaW9uICUgMiA9PT0gMSlcbiAgICAgICAgICAgICAgICBwcmVjaXNpb24gKz0gMTtcblxuICAgICAgICAgICAgdmFyIGFscGhhID0gTWF0aC5hY29zKFZlY3Rvci5kb3QocHJldk5vcm1hbCwgbmV4dE5vcm1hbCkpLFxuICAgICAgICAgICAgICAgIHRoZXRhID0gYWxwaGEgLyBwcmVjaXNpb247XG5cbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcHJlY2lzaW9uOyBqKyspIHtcbiAgICAgICAgICAgICAgICBuZXdWZXJ0aWNlcy5wdXNoKFZlY3Rvci5hZGQoVmVjdG9yLnJvdGF0ZShyYWRpdXNWZWN0b3IsIHRoZXRhICogaiksIHNjYWxlZFZlcnRleCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld1ZlcnRpY2VzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTb3J0cyB0aGUgaW5wdXQgdmVydGljZXMgaW50byBjbG9ja3dpc2Ugb3JkZXIgaW4gcGxhY2UuXG4gICAgICogQG1ldGhvZCBjbG9ja3dpc2VTb3J0XG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcmV0dXJuIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5jbG9ja3dpc2VTb3J0ID0gZnVuY3Rpb24odmVydGljZXMpIHtcbiAgICAgICAgdmFyIGNlbnRyZSA9IFZlcnRpY2VzLm1lYW4odmVydGljZXMpO1xuXG4gICAgICAgIHZlcnRpY2VzLnNvcnQoZnVuY3Rpb24odmVydGV4QSwgdmVydGV4Qikge1xuICAgICAgICAgICAgcmV0dXJuIFZlY3Rvci5hbmdsZShjZW50cmUsIHZlcnRleEEpIC0gVmVjdG9yLmFuZ2xlKGNlbnRyZSwgdmVydGV4Qik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB2ZXJ0aWNlcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSB2ZXJ0aWNlcyBmb3JtIGEgY29udmV4IHNoYXBlICh2ZXJ0aWNlcyBtdXN0IGJlIGluIGNsb2Nrd2lzZSBvcmRlcikuXG4gICAgICogQG1ldGhvZCBpc0NvbnZleFxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHJldHVybiB7Ym9vbH0gYHRydWVgIGlmIHRoZSBgdmVydGljZXNgIGFyZSBjb252ZXgsIGBmYWxzZWAgaWYgbm90IChvciBgbnVsbGAgaWYgbm90IGNvbXB1dGFibGUpLlxuICAgICAqL1xuICAgIFZlcnRpY2VzLmlzQ29udmV4ID0gZnVuY3Rpb24odmVydGljZXMpIHtcbiAgICAgICAgLy8gaHR0cDovL3BhdWxib3Vya2UubmV0L2dlb21ldHJ5L3BvbHlnb25tZXNoL1xuICAgICAgICAvLyBDb3B5cmlnaHQgKGMpIFBhdWwgQm91cmtlICh1c2UgcGVybWl0dGVkKVxuXG4gICAgICAgIHZhciBmbGFnID0gMCxcbiAgICAgICAgICAgIG4gPSB2ZXJ0aWNlcy5sZW5ndGgsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIGssXG4gICAgICAgICAgICB6O1xuXG4gICAgICAgIGlmIChuIDwgMylcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGogPSAoaSArIDEpICUgbjtcbiAgICAgICAgICAgIGsgPSAoaSArIDIpICUgbjtcbiAgICAgICAgICAgIHogPSAodmVydGljZXNbal0ueCAtIHZlcnRpY2VzW2ldLngpICogKHZlcnRpY2VzW2tdLnkgLSB2ZXJ0aWNlc1tqXS55KTtcbiAgICAgICAgICAgIHogLT0gKHZlcnRpY2VzW2pdLnkgLSB2ZXJ0aWNlc1tpXS55KSAqICh2ZXJ0aWNlc1trXS54IC0gdmVydGljZXNbal0ueCk7XG5cbiAgICAgICAgICAgIGlmICh6IDwgMCkge1xuICAgICAgICAgICAgICAgIGZsYWcgfD0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeiA+IDApIHtcbiAgICAgICAgICAgICAgICBmbGFnIHw9IDI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmbGFnID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZsYWcgIT09IDApe1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjb252ZXggaHVsbCBvZiB0aGUgaW5wdXQgdmVydGljZXMgYXMgYSBuZXcgYXJyYXkgb2YgcG9pbnRzLlxuICAgICAqIEBtZXRob2QgaHVsbFxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHJldHVybiBbdmVydGV4XSB2ZXJ0aWNlc1xuICAgICAqL1xuICAgIFZlcnRpY2VzLmh1bGwgPSBmdW5jdGlvbih2ZXJ0aWNlcykge1xuICAgICAgICAvLyBodHRwOi8vZ2VvbWFsZ29yaXRobXMuY29tL2ExMC1faHVsbC0xLmh0bWxcblxuICAgICAgICB2YXIgdXBwZXIgPSBbXSxcbiAgICAgICAgICAgIGxvd2VyID0gW10sIFxuICAgICAgICAgICAgdmVydGV4LFxuICAgICAgICAgICAgaTtcblxuICAgICAgICAvLyBzb3J0IHZlcnRpY2VzIG9uIHgtYXhpcyAoeS1heGlzIGZvciB0aWVzKVxuICAgICAgICB2ZXJ0aWNlcyA9IHZlcnRpY2VzLnNsaWNlKDApO1xuICAgICAgICB2ZXJ0aWNlcy5zb3J0KGZ1bmN0aW9uKHZlcnRleEEsIHZlcnRleEIpIHtcbiAgICAgICAgICAgIHZhciBkeCA9IHZlcnRleEEueCAtIHZlcnRleEIueDtcbiAgICAgICAgICAgIHJldHVybiBkeCAhPT0gMCA/IGR4IDogdmVydGV4QS55IC0gdmVydGV4Qi55O1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBidWlsZCBsb3dlciBodWxsXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmVydGV4ID0gdmVydGljZXNbaV07XG5cbiAgICAgICAgICAgIHdoaWxlIChsb3dlci5sZW5ndGggPj0gMiBcbiAgICAgICAgICAgICAgICAgICAmJiBWZWN0b3IuY3Jvc3MzKGxvd2VyW2xvd2VyLmxlbmd0aCAtIDJdLCBsb3dlcltsb3dlci5sZW5ndGggLSAxXSwgdmVydGV4KSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgbG93ZXIucG9wKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxvd2VyLnB1c2godmVydGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGJ1aWxkIHVwcGVyIGh1bGxcbiAgICAgICAgZm9yIChpID0gdmVydGljZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgICAgICAgIHZlcnRleCA9IHZlcnRpY2VzW2ldO1xuXG4gICAgICAgICAgICB3aGlsZSAodXBwZXIubGVuZ3RoID49IDIgXG4gICAgICAgICAgICAgICAgICAgJiYgVmVjdG9yLmNyb3NzMyh1cHBlclt1cHBlci5sZW5ndGggLSAyXSwgdXBwZXJbdXBwZXIubGVuZ3RoIC0gMV0sIHZlcnRleCkgPD0gMCkge1xuICAgICAgICAgICAgICAgIHVwcGVyLnBvcCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cHBlci5wdXNoKHZlcnRleCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25jYXRlbmF0aW9uIG9mIHRoZSBsb3dlciBhbmQgdXBwZXIgaHVsbHMgZ2l2ZXMgdGhlIGNvbnZleCBodWxsXG4gICAgICAgIC8vIG9taXQgbGFzdCBwb2ludHMgYmVjYXVzZSB0aGV5IGFyZSByZXBlYXRlZCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBvdGhlciBsaXN0XG4gICAgICAgIHVwcGVyLnBvcCgpO1xuICAgICAgICBsb3dlci5wb3AoKTtcblxuICAgICAgICByZXR1cm4gdXBwZXIuY29uY2F0KGxvd2VyKTtcbiAgICB9O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuRXZlbnRzYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyB0byBmaXJlIGFuZCBsaXN0ZW4gdG8gZXZlbnRzIG9uIG90aGVyIG9iamVjdHMuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBFdmVudHNcbiovXG5cbnZhciBFdmVudHMgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBFdmVudHM7XG5cbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIGEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gdGhlIGdpdmVuIG9iamVjdCdzIGBldmVudE5hbWVgLlxuICAgICAqIEBtZXRob2Qgb25cbiAgICAgKiBAcGFyYW0ge30gb2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZXNcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIEV2ZW50cy5vbiA9IGZ1bmN0aW9uKG9iamVjdCwgZXZlbnROYW1lcywgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIG5hbWVzID0gZXZlbnROYW1lcy5zcGxpdCgnICcpLFxuICAgICAgICAgICAgbmFtZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuYW1lID0gbmFtZXNbaV07XG4gICAgICAgICAgICBvYmplY3QuZXZlbnRzID0gb2JqZWN0LmV2ZW50cyB8fCB7fTtcbiAgICAgICAgICAgIG9iamVjdC5ldmVudHNbbmFtZV0gPSBvYmplY3QuZXZlbnRzW25hbWVdIHx8IFtdO1xuICAgICAgICAgICAgb2JqZWN0LmV2ZW50c1tuYW1lXS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYWxsYmFjaztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgZ2l2ZW4gZXZlbnQgY2FsbGJhY2suIElmIG5vIGNhbGxiYWNrLCBjbGVhcnMgYWxsIGNhbGxiYWNrcyBpbiBgZXZlbnROYW1lc2AuIElmIG5vIGBldmVudE5hbWVzYCwgY2xlYXJzIGFsbCBldmVudHMuXG4gICAgICogQG1ldGhvZCBvZmZcbiAgICAgKiBAcGFyYW0ge30gb2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZXNcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIEV2ZW50cy5vZmYgPSBmdW5jdGlvbihvYmplY3QsIGV2ZW50TmFtZXMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghZXZlbnROYW1lcykge1xuICAgICAgICAgICAgb2JqZWN0LmV2ZW50cyA9IHt9O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaGFuZGxlIEV2ZW50cy5vZmYob2JqZWN0LCBjYWxsYmFjaylcbiAgICAgICAgaWYgKHR5cGVvZiBldmVudE5hbWVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IGV2ZW50TmFtZXM7XG4gICAgICAgICAgICBldmVudE5hbWVzID0gQ29tbW9uLmtleXMob2JqZWN0LmV2ZW50cykuam9pbignICcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5hbWVzID0gZXZlbnROYW1lcy5zcGxpdCgnICcpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjYWxsYmFja3MgPSBvYmplY3QuZXZlbnRzW25hbWVzW2ldXSxcbiAgICAgICAgICAgICAgICBuZXdDYWxsYmFja3MgPSBbXTtcblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGNhbGxiYWNrcykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY2FsbGJhY2tzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja3Nbal0gIT09IGNhbGxiYWNrKVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2FsbGJhY2tzLnB1c2goY2FsbGJhY2tzW2pdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9iamVjdC5ldmVudHNbbmFtZXNbaV1dID0gbmV3Q2FsbGJhY2tzO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEZpcmVzIGFsbCB0aGUgY2FsbGJhY2tzIHN1YnNjcmliZWQgdG8gdGhlIGdpdmVuIG9iamVjdCdzIGBldmVudE5hbWVgLCBpbiB0aGUgb3JkZXIgdGhleSBzdWJzY3JpYmVkLCBpZiBhbnkuXG4gICAgICogQG1ldGhvZCB0cmlnZ2VyXG4gICAgICogQHBhcmFtIHt9IG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVzXG4gICAgICogQHBhcmFtIHt9IGV2ZW50XG4gICAgICovXG4gICAgRXZlbnRzLnRyaWdnZXIgPSBmdW5jdGlvbihvYmplY3QsIGV2ZW50TmFtZXMsIGV2ZW50KSB7XG4gICAgICAgIHZhciBuYW1lcyxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBjYWxsYmFja3MsXG4gICAgICAgICAgICBldmVudENsb25lO1xuXG4gICAgICAgIHZhciBldmVudHMgPSBvYmplY3QuZXZlbnRzO1xuICAgICAgICBcbiAgICAgICAgaWYgKGV2ZW50cyAmJiBDb21tb24ua2V5cyhldmVudHMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmICghZXZlbnQpXG4gICAgICAgICAgICAgICAgZXZlbnQgPSB7fTtcblxuICAgICAgICAgICAgbmFtZXMgPSBldmVudE5hbWVzLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gbmFtZXNbaV07XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzID0gZXZlbnRzW25hbWVdO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrcykge1xuICAgICAgICAgICAgICAgICAgICBldmVudENsb25lID0gQ29tbW9uLmNsb25lKGV2ZW50LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50Q2xvbmUubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50Q2xvbmUuc291cmNlID0gb2JqZWN0O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY2FsbGJhY2tzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3Nbal0uYXBwbHkob2JqZWN0LCBbZXZlbnRDbG9uZV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIEEgY29tcG9zaXRlIGlzIGEgY29sbGVjdGlvbiBvZiBgTWF0dGVyLkJvZHlgLCBgTWF0dGVyLkNvbnN0cmFpbnRgIGFuZCBvdGhlciBgTWF0dGVyLkNvbXBvc2l0ZWAgb2JqZWN0cy5cbipcbiogVGhleSBhcmUgYSBjb250YWluZXIgdGhhdCBjYW4gcmVwcmVzZW50IGNvbXBsZXggb2JqZWN0cyBtYWRlIG9mIG11bHRpcGxlIHBhcnRzLCBldmVuIGlmIHRoZXkgYXJlIG5vdCBwaHlzaWNhbGx5IGNvbm5lY3RlZC5cbiogQSBjb21wb3NpdGUgY291bGQgY29udGFpbiBhbnl0aGluZyBmcm9tIGEgc2luZ2xlIGJvZHkgYWxsIHRoZSB3YXkgdXAgdG8gYSB3aG9sZSB3b3JsZC5cbiogXG4qIFdoZW4gbWFraW5nIGFueSBjaGFuZ2VzIHRvIGNvbXBvc2l0ZXMsIHVzZSB0aGUgaW5jbHVkZWQgZnVuY3Rpb25zIHJhdGhlciB0aGFuIGNoYW5naW5nIHRoZWlyIHByb3BlcnRpZXMgZGlyZWN0bHkuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBDb21wb3NpdGVcbiovXG5cbnZhciBDb21wb3NpdGUgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb3NpdGU7XG5cbnZhciBFdmVudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgQm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbnZhciBCb2R5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBjb21wb3NpdGUuIFRoZSBvcHRpb25zIHBhcmFtZXRlciBpcyBhbiBvYmplY3QgdGhhdCBzcGVjaWZpZXMgYW55IHByb3BlcnRpZXMgeW91IHdpc2ggdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzLlxuICAgICAqIFNlZSB0aGUgcHJvcGVyaXRlcyBzZWN0aW9uIGJlbG93IGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge30gW29wdGlvbnNdXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBBIG5ldyBjb21wb3NpdGVcbiAgICAgKi9cbiAgICBDb21wb3NpdGUuY3JlYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gQ29tbW9uLmV4dGVuZCh7IFxuICAgICAgICAgICAgaWQ6IENvbW1vbi5uZXh0SWQoKSxcbiAgICAgICAgICAgIHR5cGU6ICdjb21wb3NpdGUnLFxuICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgaXNNb2RpZmllZDogZmFsc2UsXG4gICAgICAgICAgICBib2RpZXM6IFtdLCBcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzOiBbXSwgXG4gICAgICAgICAgICBjb21wb3NpdGVzOiBbXSxcbiAgICAgICAgICAgIGxhYmVsOiAnQ29tcG9zaXRlJyxcbiAgICAgICAgICAgIHBsdWdpbjoge30sXG4gICAgICAgICAgICBjYWNoZToge1xuICAgICAgICAgICAgICAgIGFsbEJvZGllczogbnVsbCxcbiAgICAgICAgICAgICAgICBhbGxDb25zdHJhaW50czogbnVsbCxcbiAgICAgICAgICAgICAgICBhbGxDb21wb3NpdGVzOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjb21wb3NpdGUncyBgaXNNb2RpZmllZGAgZmxhZy4gXG4gICAgICogSWYgYHVwZGF0ZVBhcmVudHNgIGlzIHRydWUsIGFsbCBwYXJlbnRzIHdpbGwgYmUgc2V0IChkZWZhdWx0OiBmYWxzZSkuXG4gICAgICogSWYgYHVwZGF0ZUNoaWxkcmVuYCBpcyB0cnVlLCBhbGwgY2hpbGRyZW4gd2lsbCBiZSBzZXQgKGRlZmF1bHQ6IGZhbHNlKS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2Qgc2V0TW9kaWZpZWRcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc01vZGlmaWVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbdXBkYXRlUGFyZW50cz1mYWxzZV1cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt1cGRhdGVDaGlsZHJlbj1mYWxzZV1cbiAgICAgKi9cbiAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQgPSBmdW5jdGlvbihjb21wb3NpdGUsIGlzTW9kaWZpZWQsIHVwZGF0ZVBhcmVudHMsIHVwZGF0ZUNoaWxkcmVuKSB7XG4gICAgICAgIGNvbXBvc2l0ZS5pc01vZGlmaWVkID0gaXNNb2RpZmllZDtcblxuICAgICAgICBpZiAoaXNNb2RpZmllZCAmJiBjb21wb3NpdGUuY2FjaGUpIHtcbiAgICAgICAgICAgIGNvbXBvc2l0ZS5jYWNoZS5hbGxCb2RpZXMgPSBudWxsO1xuICAgICAgICAgICAgY29tcG9zaXRlLmNhY2hlLmFsbENvbnN0cmFpbnRzID0gbnVsbDtcbiAgICAgICAgICAgIGNvbXBvc2l0ZS5jYWNoZS5hbGxDb21wb3NpdGVzID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1cGRhdGVQYXJlbnRzICYmIGNvbXBvc2l0ZS5wYXJlbnQpIHtcbiAgICAgICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjb21wb3NpdGUucGFyZW50LCBpc01vZGlmaWVkLCB1cGRhdGVQYXJlbnRzLCB1cGRhdGVDaGlsZHJlbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXBkYXRlQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tcG9zaXRlLmNvbXBvc2l0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRDb21wb3NpdGUgPSBjb21wb3NpdGUuY29tcG9zaXRlc1tpXTtcbiAgICAgICAgICAgICAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQoY2hpbGRDb21wb3NpdGUsIGlzTW9kaWZpZWQsIHVwZGF0ZVBhcmVudHMsIHVwZGF0ZUNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmljIHNpbmdsZSBvciBtdWx0aS1hZGQgZnVuY3Rpb24uIEFkZHMgYSBzaW5nbGUgb3IgYW4gYXJyYXkgb2YgYm9keShzKSwgY29uc3RyYWludChzKSBvciBjb21wb3NpdGUocykgdG8gdGhlIGdpdmVuIGNvbXBvc2l0ZS5cbiAgICAgKiBUcmlnZ2VycyBgYmVmb3JlQWRkYCBhbmQgYGFmdGVyQWRkYCBldmVudHMgb24gdGhlIGBjb21wb3NpdGVgLlxuICAgICAqIEBtZXRob2QgYWRkXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fSBvYmplY3QgQSBzaW5nbGUgb3IgYW4gYXJyYXkgb2YgYm9keShzKSwgY29uc3RyYWludChzKSBvciBjb21wb3NpdGUocylcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBvcmlnaW5hbCBjb21wb3NpdGUgd2l0aCB0aGUgb2JqZWN0cyBhZGRlZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5hZGQgPSBmdW5jdGlvbihjb21wb3NpdGUsIG9iamVjdCkge1xuICAgICAgICB2YXIgb2JqZWN0cyA9IFtdLmNvbmNhdChvYmplY3QpO1xuXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKGNvbXBvc2l0ZSwgJ2JlZm9yZUFkZCcsIHsgb2JqZWN0OiBvYmplY3QgfSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgb2JqID0gb2JqZWN0c1tpXTtcblxuICAgICAgICAgICAgc3dpdGNoIChvYmoudHlwZSkge1xuXG4gICAgICAgICAgICBjYXNlICdib2R5JzpcbiAgICAgICAgICAgICAgICAvLyBza2lwIGFkZGluZyBjb21wb3VuZCBwYXJ0c1xuICAgICAgICAgICAgICAgIGlmIChvYmoucGFyZW50ICE9PSBvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgQ29tbW9uLndhcm4oJ0NvbXBvc2l0ZS5hZGQ6IHNraXBwZWQgYWRkaW5nIGEgY29tcG91bmQgYm9keSBwYXJ0ICh5b3UgbXVzdCBhZGQgaXRzIHBhcmVudCBpbnN0ZWFkKScpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBDb21wb3NpdGUuYWRkQm9keShjb21wb3NpdGUsIG9iaik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjb25zdHJhaW50JzpcbiAgICAgICAgICAgICAgICBDb21wb3NpdGUuYWRkQ29uc3RyYWludChjb21wb3NpdGUsIG9iaik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjb21wb3NpdGUnOlxuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRDb21wb3NpdGUoY29tcG9zaXRlLCBvYmopO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbW91c2VDb25zdHJhaW50JzpcbiAgICAgICAgICAgICAgICBDb21wb3NpdGUuYWRkQ29uc3RyYWludChjb21wb3NpdGUsIG9iai5jb25zdHJhaW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgRXZlbnRzLnRyaWdnZXIoY29tcG9zaXRlLCAnYWZ0ZXJBZGQnLCB7IG9iamVjdDogb2JqZWN0IH0pO1xuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdlbmVyaWMgcmVtb3ZlIGZ1bmN0aW9uLiBSZW1vdmVzIG9uZSBvciBtYW55IGJvZHkocyksIGNvbnN0cmFpbnQocykgb3IgYSBjb21wb3NpdGUocykgdG8gdGhlIGdpdmVuIGNvbXBvc2l0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHNlYXJjaGluZyBpdHMgY2hpbGRyZW4gcmVjdXJzaXZlbHkuXG4gICAgICogVHJpZ2dlcnMgYGJlZm9yZVJlbW92ZWAgYW5kIGBhZnRlclJlbW92ZWAgZXZlbnRzIG9uIHRoZSBgY29tcG9zaXRlYC5cbiAgICAgKiBAbWV0aG9kIHJlbW92ZVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge29iamVjdHxhcnJheX0gb2JqZWN0XG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZGVlcD1mYWxzZV1cbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBvcmlnaW5hbCBjb21wb3NpdGUgd2l0aCB0aGUgb2JqZWN0cyByZW1vdmVkXG4gICAgICovXG4gICAgQ29tcG9zaXRlLnJlbW92ZSA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgb2JqZWN0LCBkZWVwKSB7XG4gICAgICAgIHZhciBvYmplY3RzID0gW10uY29uY2F0KG9iamVjdCk7XG5cbiAgICAgICAgRXZlbnRzLnRyaWdnZXIoY29tcG9zaXRlLCAnYmVmb3JlUmVtb3ZlJywgeyBvYmplY3Q6IG9iamVjdCB9KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBvYmogPSBvYmplY3RzW2ldO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKG9iai50eXBlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ2JvZHknOlxuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5yZW1vdmVCb2R5KGNvbXBvc2l0ZSwgb2JqLCBkZWVwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NvbnN0cmFpbnQnOlxuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5yZW1vdmVDb25zdHJhaW50KGNvbXBvc2l0ZSwgb2JqLCBkZWVwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NvbXBvc2l0ZSc6XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLnJlbW92ZUNvbXBvc2l0ZShjb21wb3NpdGUsIG9iaiwgZGVlcCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtb3VzZUNvbnN0cmFpbnQnOlxuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5yZW1vdmVDb25zdHJhaW50KGNvbXBvc2l0ZSwgb2JqLmNvbnN0cmFpbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBFdmVudHMudHJpZ2dlcihjb21wb3NpdGUsICdhZnRlclJlbW92ZScsIHsgb2JqZWN0OiBvYmplY3QgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIGNvbXBvc2l0ZSB0byB0aGUgZ2l2ZW4gY29tcG9zaXRlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBhZGRDb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlQVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVCXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlQSB3aXRoIHRoZSBvYmplY3RzIGZyb20gY29tcG9zaXRlQiBhZGRlZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5hZGRDb21wb3NpdGUgPSBmdW5jdGlvbihjb21wb3NpdGVBLCBjb21wb3NpdGVCKSB7XG4gICAgICAgIGNvbXBvc2l0ZUEuY29tcG9zaXRlcy5wdXNoKGNvbXBvc2l0ZUIpO1xuICAgICAgICBjb21wb3NpdGVCLnBhcmVudCA9IGNvbXBvc2l0ZUE7XG4gICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjb21wb3NpdGVBLCB0cnVlLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBjb21wb3NpdGVBO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgY29tcG9zaXRlIGZyb20gdGhlIGdpdmVuIGNvbXBvc2l0ZSwgYW5kIG9wdGlvbmFsbHkgc2VhcmNoaW5nIGl0cyBjaGlsZHJlbiByZWN1cnNpdmVseS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgcmVtb3ZlQ29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZUFcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlQlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2RlZXA9ZmFsc2VdXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlQSB3aXRoIHRoZSBjb21wb3NpdGUgcmVtb3ZlZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5yZW1vdmVDb21wb3NpdGUgPSBmdW5jdGlvbihjb21wb3NpdGVBLCBjb21wb3NpdGVCLCBkZWVwKSB7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IENvbW1vbi5pbmRleE9mKGNvbXBvc2l0ZUEuY29tcG9zaXRlcywgY29tcG9zaXRlQik7XG4gICAgICAgIGlmIChwb3NpdGlvbiAhPT0gLTEpIHtcbiAgICAgICAgICAgIENvbXBvc2l0ZS5yZW1vdmVDb21wb3NpdGVBdChjb21wb3NpdGVBLCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVlcCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb3NpdGVBLmNvbXBvc2l0ZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5yZW1vdmVDb21wb3NpdGUoY29tcG9zaXRlQS5jb21wb3NpdGVzW2ldLCBjb21wb3NpdGVCLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGVBO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgY29tcG9zaXRlIGZyb20gdGhlIGdpdmVuIGNvbXBvc2l0ZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgcmVtb3ZlQ29tcG9zaXRlQXRcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlIHdpdGggdGhlIGNvbXBvc2l0ZSByZW1vdmVkXG4gICAgICovXG4gICAgQ29tcG9zaXRlLnJlbW92ZUNvbXBvc2l0ZUF0ID0gZnVuY3Rpb24oY29tcG9zaXRlLCBwb3NpdGlvbikge1xuICAgICAgICBjb21wb3NpdGUuY29tcG9zaXRlcy5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgICAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQoY29tcG9zaXRlLCB0cnVlLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBib2R5IHRvIHRoZSBnaXZlbiBjb21wb3NpdGUuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGFkZEJvZHlcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlIHdpdGggdGhlIGJvZHkgYWRkZWRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUuYWRkQm9keSA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgYm9keSkge1xuICAgICAgICBjb21wb3NpdGUuYm9kaWVzLnB1c2goYm9keSk7XG4gICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjb21wb3NpdGUsIHRydWUsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGJvZHkgZnJvbSB0aGUgZ2l2ZW4gY29tcG9zaXRlLCBhbmQgb3B0aW9uYWxseSBzZWFyY2hpbmcgaXRzIGNoaWxkcmVuIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCByZW1vdmVCb2R5XG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2RlZXA9ZmFsc2VdXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlIHdpdGggdGhlIGJvZHkgcmVtb3ZlZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5yZW1vdmVCb2R5ID0gZnVuY3Rpb24oY29tcG9zaXRlLCBib2R5LCBkZWVwKSB7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IENvbW1vbi5pbmRleE9mKGNvbXBvc2l0ZS5ib2RpZXMsIGJvZHkpO1xuICAgICAgICBpZiAocG9zaXRpb24gIT09IC0xKSB7XG4gICAgICAgICAgICBDb21wb3NpdGUucmVtb3ZlQm9keUF0KGNvbXBvc2l0ZSwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlZXApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tcG9zaXRlLmNvbXBvc2l0ZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5yZW1vdmVCb2R5KGNvbXBvc2l0ZS5jb21wb3NpdGVzW2ldLCBib2R5LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBib2R5IGZyb20gdGhlIGdpdmVuIGNvbXBvc2l0ZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgcmVtb3ZlQm9keUF0XG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvblxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIGNvbXBvc2l0ZSB3aXRoIHRoZSBib2R5IHJlbW92ZWRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUucmVtb3ZlQm9keUF0ID0gZnVuY3Rpb24oY29tcG9zaXRlLCBwb3NpdGlvbikge1xuICAgICAgICBjb21wb3NpdGUuYm9kaWVzLnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjb21wb3NpdGUsIHRydWUsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIGNvbnN0cmFpbnQgdG8gdGhlIGdpdmVuIGNvbXBvc2l0ZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgYWRkQ29uc3RyYWludFxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge2NvbnN0cmFpbnR9IGNvbnN0cmFpbnRcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBvcmlnaW5hbCBjb21wb3NpdGUgd2l0aCB0aGUgY29uc3RyYWludCBhZGRlZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50ID0gZnVuY3Rpb24oY29tcG9zaXRlLCBjb25zdHJhaW50KSB7XG4gICAgICAgIGNvbXBvc2l0ZS5jb25zdHJhaW50cy5wdXNoKGNvbnN0cmFpbnQpO1xuICAgICAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQoY29tcG9zaXRlLCB0cnVlLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBjb25zdHJhaW50IGZyb20gdGhlIGdpdmVuIGNvbXBvc2l0ZSwgYW5kIG9wdGlvbmFsbHkgc2VhcmNoaW5nIGl0cyBjaGlsZHJlbiByZWN1cnNpdmVseS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgcmVtb3ZlQ29uc3RyYWludFxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge2NvbnN0cmFpbnR9IGNvbnN0cmFpbnRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtkZWVwPWZhbHNlXVxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIGNvbXBvc2l0ZSB3aXRoIHRoZSBjb25zdHJhaW50IHJlbW92ZWRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUucmVtb3ZlQ29uc3RyYWludCA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgY29uc3RyYWludCwgZGVlcCkge1xuICAgICAgICB2YXIgcG9zaXRpb24gPSBDb21tb24uaW5kZXhPZihjb21wb3NpdGUuY29uc3RyYWludHMsIGNvbnN0cmFpbnQpO1xuICAgICAgICBpZiAocG9zaXRpb24gIT09IC0xKSB7XG4gICAgICAgICAgICBDb21wb3NpdGUucmVtb3ZlQ29uc3RyYWludEF0KGNvbXBvc2l0ZSwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlZXApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tcG9zaXRlLmNvbXBvc2l0ZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5yZW1vdmVDb25zdHJhaW50KGNvbXBvc2l0ZS5jb21wb3NpdGVzW2ldLCBjb25zdHJhaW50LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBib2R5IGZyb20gdGhlIGdpdmVuIGNvbXBvc2l0ZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgcmVtb3ZlQ29uc3RyYWludEF0XG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvblxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIGNvbXBvc2l0ZSB3aXRoIHRoZSBjb25zdHJhaW50IHJlbW92ZWRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUucmVtb3ZlQ29uc3RyYWludEF0ID0gZnVuY3Rpb24oY29tcG9zaXRlLCBwb3NpdGlvbikge1xuICAgICAgICBjb21wb3NpdGUuY29uc3RyYWludHMuc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBib2RpZXMsIGNvbnN0cmFpbnRzIGFuZCBjb21wb3NpdGVzIGZyb20gdGhlIGdpdmVuIGNvbXBvc2l0ZS5cbiAgICAgKiBPcHRpb25hbGx5IGNsZWFyaW5nIGl0cyBjaGlsZHJlbiByZWN1cnNpdmVseS5cbiAgICAgKiBAbWV0aG9kIGNsZWFyXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0ga2VlcFN0YXRpY1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2RlZXA9ZmFsc2VdXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmNsZWFyID0gZnVuY3Rpb24oY29tcG9zaXRlLCBrZWVwU3RhdGljLCBkZWVwKSB7XG4gICAgICAgIGlmIChkZWVwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbXBvc2l0ZS5jb21wb3NpdGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBDb21wb3NpdGUuY2xlYXIoY29tcG9zaXRlLmNvbXBvc2l0ZXNbaV0sIGtlZXBTdGF0aWMsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoa2VlcFN0YXRpYykge1xuICAgICAgICAgICAgY29tcG9zaXRlLmJvZGllcyA9IGNvbXBvc2l0ZS5ib2RpZXMuZmlsdGVyKGZ1bmN0aW9uKGJvZHkpIHsgcmV0dXJuIGJvZHkuaXNTdGF0aWM7IH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29tcG9zaXRlLmJvZGllcy5sZW5ndGggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9zaXRlLmNvbnN0cmFpbnRzLmxlbmd0aCA9IDA7XG4gICAgICAgIGNvbXBvc2l0ZS5jb21wb3NpdGVzLmxlbmd0aCA9IDA7XG5cbiAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIGJvZGllcyBpbiB0aGUgZ2l2ZW4gY29tcG9zaXRlLCBpbmNsdWRpbmcgYWxsIGJvZGllcyBpbiBpdHMgY2hpbGRyZW4sIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEBtZXRob2QgYWxsQm9kaWVzXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEByZXR1cm4ge2JvZHlbXX0gQWxsIHRoZSBib2RpZXNcbiAgICAgKi9cbiAgICBDb21wb3NpdGUuYWxsQm9kaWVzID0gZnVuY3Rpb24oY29tcG9zaXRlKSB7XG4gICAgICAgIGlmIChjb21wb3NpdGUuY2FjaGUgJiYgY29tcG9zaXRlLmNhY2hlLmFsbEJvZGllcykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZS5jYWNoZS5hbGxCb2RpZXM7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYm9kaWVzID0gW10uY29uY2F0KGNvbXBvc2l0ZS5ib2RpZXMpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tcG9zaXRlLmNvbXBvc2l0ZXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICBib2RpZXMgPSBib2RpZXMuY29uY2F0KENvbXBvc2l0ZS5hbGxCb2RpZXMoY29tcG9zaXRlLmNvbXBvc2l0ZXNbaV0pKTtcblxuICAgICAgICBpZiAoY29tcG9zaXRlLmNhY2hlKSB7XG4gICAgICAgICAgICBjb21wb3NpdGUuY2FjaGUuYWxsQm9kaWVzID0gYm9kaWVzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJvZGllcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgY29uc3RyYWludHMgaW4gdGhlIGdpdmVuIGNvbXBvc2l0ZSwgaW5jbHVkaW5nIGFsbCBjb25zdHJhaW50cyBpbiBpdHMgY2hpbGRyZW4sIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEBtZXRob2QgYWxsQ29uc3RyYWludHNcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHJldHVybiB7Y29uc3RyYWludFtdfSBBbGwgdGhlIGNvbnN0cmFpbnRzXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmFsbENvbnN0cmFpbnRzID0gZnVuY3Rpb24oY29tcG9zaXRlKSB7XG4gICAgICAgIGlmIChjb21wb3NpdGUuY2FjaGUgJiYgY29tcG9zaXRlLmNhY2hlLmFsbENvbnN0cmFpbnRzKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9zaXRlLmNhY2hlLmFsbENvbnN0cmFpbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvbnN0cmFpbnRzID0gW10uY29uY2F0KGNvbXBvc2l0ZS5jb25zdHJhaW50cyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb3NpdGUuY29tcG9zaXRlcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzID0gY29uc3RyYWludHMuY29uY2F0KENvbXBvc2l0ZS5hbGxDb25zdHJhaW50cyhjb21wb3NpdGUuY29tcG9zaXRlc1tpXSkpO1xuXG4gICAgICAgIGlmIChjb21wb3NpdGUuY2FjaGUpIHtcbiAgICAgICAgICAgIGNvbXBvc2l0ZS5jYWNoZS5hbGxDb25zdHJhaW50cyA9IGNvbnN0cmFpbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnN0cmFpbnRzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBjb21wb3NpdGVzIGluIHRoZSBnaXZlbiBjb21wb3NpdGUsIGluY2x1ZGluZyBhbGwgY29tcG9zaXRlcyBpbiBpdHMgY2hpbGRyZW4sIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEBtZXRob2QgYWxsQ29tcG9zaXRlc1xuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGVbXX0gQWxsIHRoZSBjb21wb3NpdGVzXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmFsbENvbXBvc2l0ZXMgPSBmdW5jdGlvbihjb21wb3NpdGUpIHtcbiAgICAgICAgaWYgKGNvbXBvc2l0ZS5jYWNoZSAmJiBjb21wb3NpdGUuY2FjaGUuYWxsQ29tcG9zaXRlcykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZS5jYWNoZS5hbGxDb21wb3NpdGVzO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvbXBvc2l0ZXMgPSBbXS5jb25jYXQoY29tcG9zaXRlLmNvbXBvc2l0ZXMpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tcG9zaXRlLmNvbXBvc2l0ZXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICBjb21wb3NpdGVzID0gY29tcG9zaXRlcy5jb25jYXQoQ29tcG9zaXRlLmFsbENvbXBvc2l0ZXMoY29tcG9zaXRlLmNvbXBvc2l0ZXNbaV0pKTtcblxuICAgICAgICBpZiAoY29tcG9zaXRlLmNhY2hlKSB7XG4gICAgICAgICAgICBjb21wb3NpdGUuY2FjaGUuYWxsQ29tcG9zaXRlcyA9IGNvbXBvc2l0ZXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9zaXRlcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2VhcmNoZXMgdGhlIGNvbXBvc2l0ZSByZWN1cnNpdmVseSBmb3IgYW4gb2JqZWN0IG1hdGNoaW5nIHRoZSB0eXBlIGFuZCBpZCBzdXBwbGllZCwgbnVsbCBpZiBub3QgZm91bmQuXG4gICAgICogQG1ldGhvZCBnZXRcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGlkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IFRoZSByZXF1ZXN0ZWQgb2JqZWN0LCBpZiBmb3VuZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5nZXQgPSBmdW5jdGlvbihjb21wb3NpdGUsIGlkLCB0eXBlKSB7XG4gICAgICAgIHZhciBvYmplY3RzLFxuICAgICAgICAgICAgb2JqZWN0O1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdib2R5JzpcbiAgICAgICAgICAgIG9iamVjdHMgPSBDb21wb3NpdGUuYWxsQm9kaWVzKGNvbXBvc2l0ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY29uc3RyYWludCc6XG4gICAgICAgICAgICBvYmplY3RzID0gQ29tcG9zaXRlLmFsbENvbnN0cmFpbnRzKGNvbXBvc2l0ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY29tcG9zaXRlJzpcbiAgICAgICAgICAgIG9iamVjdHMgPSBDb21wb3NpdGUuYWxsQ29tcG9zaXRlcyhjb21wb3NpdGUpLmNvbmNhdChjb21wb3NpdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW9iamVjdHMpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgICAgICBvYmplY3QgPSBvYmplY3RzLmZpbHRlcihmdW5jdGlvbihvYmplY3QpIHsgXG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0LmlkLnRvU3RyaW5nKCkgPT09IGlkLnRvU3RyaW5nKCk7IFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gb2JqZWN0Lmxlbmd0aCA9PT0gMCA/IG51bGwgOiBvYmplY3RbMF07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE1vdmVzIHRoZSBnaXZlbiBvYmplY3QocykgZnJvbSBjb21wb3NpdGVBIHRvIGNvbXBvc2l0ZUIgKGVxdWFsIHRvIGEgcmVtb3ZlIGZvbGxvd2VkIGJ5IGFuIGFkZCkuXG4gICAgICogQG1ldGhvZCBtb3ZlXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGVBfSBjb21wb3NpdGVBXG4gICAgICogQHBhcmFtIHtvYmplY3RbXX0gb2JqZWN0c1xuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlQn0gY29tcG9zaXRlQlxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gUmV0dXJucyBjb21wb3NpdGVBXG4gICAgICovXG4gICAgQ29tcG9zaXRlLm1vdmUgPSBmdW5jdGlvbihjb21wb3NpdGVBLCBvYmplY3RzLCBjb21wb3NpdGVCKSB7XG4gICAgICAgIENvbXBvc2l0ZS5yZW1vdmUoY29tcG9zaXRlQSwgb2JqZWN0cyk7XG4gICAgICAgIENvbXBvc2l0ZS5hZGQoY29tcG9zaXRlQiwgb2JqZWN0cyk7XG4gICAgICAgIHJldHVybiBjb21wb3NpdGVBO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBc3NpZ25zIG5ldyBpZHMgZm9yIGFsbCBvYmplY3RzIGluIHRoZSBjb21wb3NpdGUsIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEBtZXRob2QgcmViYXNlXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gUmV0dXJucyBjb21wb3NpdGVcbiAgICAgKi9cbiAgICBDb21wb3NpdGUucmViYXNlID0gZnVuY3Rpb24oY29tcG9zaXRlKSB7XG4gICAgICAgIHZhciBvYmplY3RzID0gQ29tcG9zaXRlLmFsbEJvZGllcyhjb21wb3NpdGUpXG4gICAgICAgICAgICAuY29uY2F0KENvbXBvc2l0ZS5hbGxDb25zdHJhaW50cyhjb21wb3NpdGUpKVxuICAgICAgICAgICAgLmNvbmNhdChDb21wb3NpdGUuYWxsQ29tcG9zaXRlcyhjb21wb3NpdGUpKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG9iamVjdHNbaV0uaWQgPSBDb21tb24ubmV4dElkKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2xhdGVzIGFsbCBjaGlsZHJlbiBpbiB0aGUgY29tcG9zaXRlIGJ5IGEgZ2l2ZW4gdmVjdG9yIHJlbGF0aXZlIHRvIHRoZWlyIGN1cnJlbnQgcG9zaXRpb25zLCBcbiAgICAgKiB3aXRob3V0IGltcGFydGluZyBhbnkgdmVsb2NpdHkuXG4gICAgICogQG1ldGhvZCB0cmFuc2xhdGVcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHRyYW5zbGF0aW9uXG4gICAgICogQHBhcmFtIHtib29sfSBbcmVjdXJzaXZlPXRydWVdXG4gICAgICovXG4gICAgQ29tcG9zaXRlLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgdHJhbnNsYXRpb24sIHJlY3Vyc2l2ZSkge1xuICAgICAgICB2YXIgYm9kaWVzID0gcmVjdXJzaXZlID8gQ29tcG9zaXRlLmFsbEJvZGllcyhjb21wb3NpdGUpIDogY29tcG9zaXRlLmJvZGllcztcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgQm9keS50cmFuc2xhdGUoYm9kaWVzW2ldLCB0cmFuc2xhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSb3RhdGVzIGFsbCBjaGlsZHJlbiBpbiB0aGUgY29tcG9zaXRlIGJ5IGEgZ2l2ZW4gYW5nbGUgYWJvdXQgdGhlIGdpdmVuIHBvaW50LCB3aXRob3V0IGltcGFydGluZyBhbnkgYW5ndWxhciB2ZWxvY2l0eS5cbiAgICAgKiBAbWV0aG9kIHJvdGF0ZVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm90YXRpb25cbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gcG9pbnRcbiAgICAgKiBAcGFyYW0ge2Jvb2x9IFtyZWN1cnNpdmU9dHJ1ZV1cbiAgICAgKi9cbiAgICBDb21wb3NpdGUucm90YXRlID0gZnVuY3Rpb24oY29tcG9zaXRlLCByb3RhdGlvbiwgcG9pbnQsIHJlY3Vyc2l2ZSkge1xuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3Mocm90YXRpb24pLFxuICAgICAgICAgICAgc2luID0gTWF0aC5zaW4ocm90YXRpb24pLFxuICAgICAgICAgICAgYm9kaWVzID0gcmVjdXJzaXZlID8gQ29tcG9zaXRlLmFsbEJvZGllcyhjb21wb3NpdGUpIDogY29tcG9zaXRlLmJvZGllcztcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV0sXG4gICAgICAgICAgICAgICAgZHggPSBib2R5LnBvc2l0aW9uLnggLSBwb2ludC54LFxuICAgICAgICAgICAgICAgIGR5ID0gYm9keS5wb3NpdGlvbi55IC0gcG9pbnQueTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIEJvZHkuc2V0UG9zaXRpb24oYm9keSwge1xuICAgICAgICAgICAgICAgIHg6IHBvaW50LnggKyAoZHggKiBjb3MgLSBkeSAqIHNpbiksXG4gICAgICAgICAgICAgICAgeTogcG9pbnQueSArIChkeCAqIHNpbiArIGR5ICogY29zKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIEJvZHkucm90YXRlKGJvZHksIHJvdGF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNjYWxlcyBhbGwgY2hpbGRyZW4gaW4gdGhlIGNvbXBvc2l0ZSwgaW5jbHVkaW5nIHVwZGF0aW5nIHBoeXNpY2FsIHByb3BlcnRpZXMgKG1hc3MsIGFyZWEsIGF4ZXMsIGluZXJ0aWEpLCBmcm9tIGEgd29ybGQtc3BhY2UgcG9pbnQuXG4gICAgICogQG1ldGhvZCBzY2FsZVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGVYXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlWVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBwb2ludFxuICAgICAqIEBwYXJhbSB7Ym9vbH0gW3JlY3Vyc2l2ZT10cnVlXVxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5zY2FsZSA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgc2NhbGVYLCBzY2FsZVksIHBvaW50LCByZWN1cnNpdmUpIHtcbiAgICAgICAgdmFyIGJvZGllcyA9IHJlY3Vyc2l2ZSA/IENvbXBvc2l0ZS5hbGxCb2RpZXMoY29tcG9zaXRlKSA6IGNvbXBvc2l0ZS5ib2RpZXM7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldLFxuICAgICAgICAgICAgICAgIGR4ID0gYm9keS5wb3NpdGlvbi54IC0gcG9pbnQueCxcbiAgICAgICAgICAgICAgICBkeSA9IGJvZHkucG9zaXRpb24ueSAtIHBvaW50Lnk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBCb2R5LnNldFBvc2l0aW9uKGJvZHksIHtcbiAgICAgICAgICAgICAgICB4OiBwb2ludC54ICsgZHggKiBzY2FsZVgsXG4gICAgICAgICAgICAgICAgeTogcG9pbnQueSArIGR5ICogc2NhbGVZXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgQm9keS5zY2FsZShib2R5LCBzY2FsZVgsIHNjYWxlWSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB1bmlvbiBvZiB0aGUgYm91bmRzIG9mIGFsbCBvZiB0aGUgY29tcG9zaXRlJ3MgYm9kaWVzLlxuICAgICAqIEBtZXRob2QgYm91bmRzXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZSBUaGUgY29tcG9zaXRlLlxuICAgICAqIEByZXR1cm5zIHtib3VuZHN9IFRoZSBjb21wb3NpdGUgYm91bmRzLlxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5ib3VuZHMgPSBmdW5jdGlvbihjb21wb3NpdGUpIHtcbiAgICAgICAgdmFyIGJvZGllcyA9IENvbXBvc2l0ZS5hbGxCb2RpZXMoY29tcG9zaXRlKSxcbiAgICAgICAgICAgIHZlcnRpY2VzID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuICAgICAgICAgICAgdmVydGljZXMucHVzaChib2R5LmJvdW5kcy5taW4sIGJvZHkuYm91bmRzLm1heCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQm91bmRzLmNyZWF0ZSh2ZXJ0aWNlcyk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgKlxuICAgICogIEV2ZW50cyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIHdoZW4gYSBjYWxsIHRvIGBDb21wb3NpdGUuYWRkYCBpcyBtYWRlLCBiZWZvcmUgb2JqZWN0cyBoYXZlIGJlZW4gYWRkZWQuXG4gICAgKlxuICAgICogQGV2ZW50IGJlZm9yZUFkZFxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm9iamVjdCBUaGUgb2JqZWN0KHMpIHRvIGJlIGFkZGVkIChtYXkgYmUgYSBzaW5nbGUgYm9keSwgY29uc3RyYWludCwgY29tcG9zaXRlIG9yIGEgbWl4ZWQgYXJyYXkgb2YgdGhlc2UpXG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgd2hlbiBhIGNhbGwgdG8gYENvbXBvc2l0ZS5hZGRgIGlzIG1hZGUsIGFmdGVyIG9iamVjdHMgaGF2ZSBiZWVuIGFkZGVkLlxuICAgICpcbiAgICAqIEBldmVudCBhZnRlckFkZFxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm9iamVjdCBUaGUgb2JqZWN0KHMpIHRoYXQgaGF2ZSBiZWVuIGFkZGVkIChtYXkgYmUgYSBzaW5nbGUgYm9keSwgY29uc3RyYWludCwgY29tcG9zaXRlIG9yIGEgbWl4ZWQgYXJyYXkgb2YgdGhlc2UpXG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgd2hlbiBhIGNhbGwgdG8gYENvbXBvc2l0ZS5yZW1vdmVgIGlzIG1hZGUsIGJlZm9yZSBvYmplY3RzIGhhdmUgYmVlbiByZW1vdmVkLlxuICAgICpcbiAgICAqIEBldmVudCBiZWZvcmVSZW1vdmVcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7fSBldmVudC5vYmplY3QgVGhlIG9iamVjdChzKSB0byBiZSByZW1vdmVkIChtYXkgYmUgYSBzaW5nbGUgYm9keSwgY29uc3RyYWludCwgY29tcG9zaXRlIG9yIGEgbWl4ZWQgYXJyYXkgb2YgdGhlc2UpXG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgd2hlbiBhIGNhbGwgdG8gYENvbXBvc2l0ZS5yZW1vdmVgIGlzIG1hZGUsIGFmdGVyIG9iamVjdHMgaGF2ZSBiZWVuIHJlbW92ZWQuXG4gICAgKlxuICAgICogQGV2ZW50IGFmdGVyUmVtb3ZlXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge30gZXZlbnQub2JqZWN0IFRoZSBvYmplY3QocykgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZCAobWF5IGJlIGEgc2luZ2xlIGJvZHksIGNvbnN0cmFpbnQsIGNvbXBvc2l0ZSBvciBhIG1peGVkIGFycmF5IG9mIHRoZXNlKVxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKlxuICAgICpcbiAgICAqICBQcm9wZXJ0aWVzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGludGVnZXIgYE51bWJlcmAgdW5pcXVlbHkgaWRlbnRpZnlpbmcgbnVtYmVyIGdlbmVyYXRlZCBpbiBgQ29tcG9zaXRlLmNyZWF0ZWAgYnkgYENvbW1vbi5uZXh0SWRgLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGlkXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBTdHJpbmdgIGRlbm90aW5nIHRoZSB0eXBlIG9mIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB0eXBlXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgXCJjb21wb3NpdGVcIlxuICAgICAqIEByZWFkT25seVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJiaXRyYXJ5IGBTdHJpbmdgIG5hbWUgdG8gaGVscCB0aGUgdXNlciBpZGVudGlmeSBhbmQgbWFuYWdlIGNvbXBvc2l0ZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgbGFiZWxcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBcIkNvbXBvc2l0ZVwiXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdGhhdCBzcGVjaWZpZXMgd2hldGhlciB0aGUgY29tcG9zaXRlIGhhcyBiZWVuIG1vZGlmaWVkIGR1cmluZyB0aGUgY3VycmVudCBzdGVwLlxuICAgICAqIFRoaXMgaXMgYXV0b21hdGljYWxseSBtYW5hZ2VkIHdoZW4gYm9kaWVzLCBjb25zdHJhaW50cyBvciBjb21wb3NpdGVzIGFyZSBhZGRlZCBvciByZW1vdmVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGlzTW9kaWZpZWRcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBgQ29tcG9zaXRlYCB0aGF0IGlzIHRoZSBwYXJlbnQgb2YgdGhpcyBjb21wb3NpdGUuIEl0IGlzIGF1dG9tYXRpY2FsbHkgbWFuYWdlZCBieSB0aGUgYE1hdHRlci5Db21wb3NpdGVgIG1ldGhvZHMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcGFyZW50XG4gICAgICogQHR5cGUgY29tcG9zaXRlXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgYEJvZHlgIHRoYXQgYXJlIF9kaXJlY3RfIGNoaWxkcmVuIG9mIHRoaXMgY29tcG9zaXRlLlxuICAgICAqIFRvIGFkZCBvciByZW1vdmUgYm9kaWVzIHlvdSBzaG91bGQgdXNlIGBDb21wb3NpdGUuYWRkYCBhbmQgYENvbXBvc2l0ZS5yZW1vdmVgIG1ldGhvZHMgcmF0aGVyIHRoYW4gZGlyZWN0bHkgbW9kaWZ5aW5nIHRoaXMgcHJvcGVydHkuXG4gICAgICogSWYgeW91IHdpc2ggdG8gcmVjdXJzaXZlbHkgZmluZCBhbGwgZGVzY2VuZGFudHMsIHlvdSBzaG91bGQgdXNlIHRoZSBgQ29tcG9zaXRlLmFsbEJvZGllc2AgbWV0aG9kLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGJvZGllc1xuICAgICAqIEB0eXBlIGJvZHlbXVxuICAgICAqIEBkZWZhdWx0IFtdXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBgQ29uc3RyYWludGAgdGhhdCBhcmUgX2RpcmVjdF8gY2hpbGRyZW4gb2YgdGhpcyBjb21wb3NpdGUuXG4gICAgICogVG8gYWRkIG9yIHJlbW92ZSBjb25zdHJhaW50cyB5b3Ugc2hvdWxkIHVzZSBgQ29tcG9zaXRlLmFkZGAgYW5kIGBDb21wb3NpdGUucmVtb3ZlYCBtZXRob2RzIHJhdGhlciB0aGFuIGRpcmVjdGx5IG1vZGlmeWluZyB0aGlzIHByb3BlcnR5LlxuICAgICAqIElmIHlvdSB3aXNoIHRvIHJlY3Vyc2l2ZWx5IGZpbmQgYWxsIGRlc2NlbmRhbnRzLCB5b3Ugc2hvdWxkIHVzZSB0aGUgYENvbXBvc2l0ZS5hbGxDb25zdHJhaW50c2AgbWV0aG9kLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGNvbnN0cmFpbnRzXG4gICAgICogQHR5cGUgY29uc3RyYWludFtdXG4gICAgICogQGRlZmF1bHQgW11cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGBDb21wb3NpdGVgIHRoYXQgYXJlIF9kaXJlY3RfIGNoaWxkcmVuIG9mIHRoaXMgY29tcG9zaXRlLlxuICAgICAqIFRvIGFkZCBvciByZW1vdmUgY29tcG9zaXRlcyB5b3Ugc2hvdWxkIHVzZSBgQ29tcG9zaXRlLmFkZGAgYW5kIGBDb21wb3NpdGUucmVtb3ZlYCBtZXRob2RzIHJhdGhlciB0aGFuIGRpcmVjdGx5IG1vZGlmeWluZyB0aGlzIHByb3BlcnR5LlxuICAgICAqIElmIHlvdSB3aXNoIHRvIHJlY3Vyc2l2ZWx5IGZpbmQgYWxsIGRlc2NlbmRhbnRzLCB5b3Ugc2hvdWxkIHVzZSB0aGUgYENvbXBvc2l0ZS5hbGxDb21wb3NpdGVzYCBtZXRob2QuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29tcG9zaXRlc1xuICAgICAqIEB0eXBlIGNvbXBvc2l0ZVtdXG4gICAgICogQGRlZmF1bHQgW11cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCByZXNlcnZlZCBmb3Igc3RvcmluZyBwbHVnaW4tc3BlY2lmaWMgcHJvcGVydGllcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwbHVnaW5cbiAgICAgKiBAdHlwZSB7fVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IHVzZWQgZm9yIHN0b3JpbmcgY2FjaGVkIHJlc3VsdHMgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMuXG4gICAgICogVGhpcyBpcyB1c2VkIGludGVybmFsbHkgb25seSBhbmQgaXMgYXV0b21hdGljYWxseSBtYW5hZ2VkLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcHJvcGVydHkgY2FjaGVcbiAgICAgKiBAdHlwZSB7fVxuICAgICAqL1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuQm9keWAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgYm9keSBtb2RlbHMuXG4qIEEgYE1hdHRlci5Cb2R5YCBpcyBhIHJpZ2lkIGJvZHkgdGhhdCBjYW4gYmUgc2ltdWxhdGVkIGJ5IGEgYE1hdHRlci5FbmdpbmVgLlxuKiBGYWN0b3JpZXMgZm9yIGNvbW1vbmx5IHVzZWQgYm9keSBjb25maWd1cmF0aW9ucyAoc3VjaCBhcyByZWN0YW5nbGVzLCBjaXJjbGVzIGFuZCBvdGhlciBwb2x5Z29ucykgY2FuIGJlIGZvdW5kIGluIHRoZSBtb2R1bGUgYE1hdHRlci5Cb2RpZXNgLlxuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuXG4qIEBjbGFzcyBCb2R5XG4qL1xuXG52YXIgQm9keSA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJvZHk7XG5cbnZhciBWZXJ0aWNlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG52YXIgVmVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbnZhciBTbGVlcGluZyA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG52YXIgUmVuZGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNik7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBCb3VuZHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xudmFyIEF4ZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgQm9keS5faW5lcnRpYVNjYWxlID0gNDtcbiAgICBCb2R5Ll9uZXh0Q29sbGlkaW5nR3JvdXBJZCA9IDE7XG4gICAgQm9keS5fbmV4dE5vbkNvbGxpZGluZ0dyb3VwSWQgPSAtMTtcbiAgICBCb2R5Ll9uZXh0Q2F0ZWdvcnkgPSAweDAwMDE7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHJpZ2lkIGJvZHkgbW9kZWwuIFRoZSBvcHRpb25zIHBhcmFtZXRlciBpcyBhbiBvYmplY3QgdGhhdCBzcGVjaWZpZXMgYW55IHByb3BlcnRpZXMgeW91IHdpc2ggdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzLlxuICAgICAqIEFsbCBwcm9wZXJ0aWVzIGhhdmUgZGVmYXVsdCB2YWx1ZXMsIGFuZCBtYW55IGFyZSBwcmUtY2FsY3VsYXRlZCBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIG90aGVyIHByb3BlcnRpZXMuXG4gICAgICogVmVydGljZXMgbXVzdCBiZSBzcGVjaWZpZWQgaW4gY2xvY2t3aXNlIG9yZGVyLlxuICAgICAqIFNlZSB0aGUgcHJvcGVydGllcyBzZWN0aW9uIGJlbG93IGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge30gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge2JvZHl9IGJvZHlcbiAgICAgKi9cbiAgICBCb2R5LmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgaWQ6IENvbW1vbi5uZXh0SWQoKSxcbiAgICAgICAgICAgIHR5cGU6ICdib2R5JyxcbiAgICAgICAgICAgIGxhYmVsOiAnQm9keScsXG4gICAgICAgICAgICBwYXJ0czogW10sXG4gICAgICAgICAgICBwbHVnaW46IHt9LFxuICAgICAgICAgICAgYW5nbGU6IDAsXG4gICAgICAgICAgICB2ZXJ0aWNlczogVmVydGljZXMuZnJvbVBhdGgoJ0wgMCAwIEwgNDAgMCBMIDQwIDQwIEwgMCA0MCcpLFxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgZm9yY2U6IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgdG9ycXVlOiAwLFxuICAgICAgICAgICAgcG9zaXRpb25JbXB1bHNlOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgIGNvbnN0cmFpbnRJbXB1bHNlOiB7IHg6IDAsIHk6IDAsIGFuZ2xlOiAwIH0sXG4gICAgICAgICAgICB0b3RhbENvbnRhY3RzOiAwLFxuICAgICAgICAgICAgc3BlZWQ6IDAsXG4gICAgICAgICAgICBhbmd1bGFyU3BlZWQ6IDAsXG4gICAgICAgICAgICB2ZWxvY2l0eTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICBhbmd1bGFyVmVsb2NpdHk6IDAsXG4gICAgICAgICAgICBpc1NlbnNvcjogZmFsc2UsXG4gICAgICAgICAgICBpc1N0YXRpYzogZmFsc2UsXG4gICAgICAgICAgICBpc1NsZWVwaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIG1vdGlvbjogMCxcbiAgICAgICAgICAgIHNsZWVwVGhyZXNob2xkOiA2MCxcbiAgICAgICAgICAgIGRlbnNpdHk6IDAuMDAxLFxuICAgICAgICAgICAgcmVzdGl0dXRpb246IDAsXG4gICAgICAgICAgICBmcmljdGlvbjogMC4xLFxuICAgICAgICAgICAgZnJpY3Rpb25TdGF0aWM6IDAuNSxcbiAgICAgICAgICAgIGZyaWN0aW9uQWlyOiAwLjAxLFxuICAgICAgICAgICAgY29sbGlzaW9uRmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IDB4MDAwMSxcbiAgICAgICAgICAgICAgICBtYXNrOiAweEZGRkZGRkZGLFxuICAgICAgICAgICAgICAgIGdyb3VwOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2xvcDogMC4wNSxcbiAgICAgICAgICAgIHRpbWVTY2FsZTogMSxcbiAgICAgICAgICAgIHJlbmRlcjoge1xuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICBzdHJva2VTdHlsZTogbnVsbCxcbiAgICAgICAgICAgICAgICBmaWxsU3R5bGU6IG51bGwsXG4gICAgICAgICAgICAgICAgbGluZVdpZHRoOiBudWxsLFxuICAgICAgICAgICAgICAgIHNwcml0ZToge1xuICAgICAgICAgICAgICAgICAgICB4U2NhbGU6IDEsXG4gICAgICAgICAgICAgICAgICAgIHlTY2FsZTogMSxcbiAgICAgICAgICAgICAgICAgICAgeE9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBldmVudHM6IG51bGwsXG4gICAgICAgICAgICBib3VuZHM6IG51bGwsXG4gICAgICAgICAgICBjaGFtZmVyOiBudWxsLFxuICAgICAgICAgICAgY2lyY2xlUmFkaXVzOiAwLFxuICAgICAgICAgICAgcG9zaXRpb25QcmV2OiBudWxsLFxuICAgICAgICAgICAgYW5nbGVQcmV2OiAwLFxuICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgYXhlczogbnVsbCxcbiAgICAgICAgICAgIGFyZWE6IDAsXG4gICAgICAgICAgICBtYXNzOiAwLFxuICAgICAgICAgICAgaW5lcnRpYTogMCxcbiAgICAgICAgICAgIF9vcmlnaW5hbDogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBib2R5ID0gQ29tbW9uLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgX2luaXRQcm9wZXJ0aWVzKGJvZHksIG9wdGlvbnMpO1xuXG4gICAgICAgIHJldHVybiBib2R5O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBuZXh0IHVuaXF1ZSBncm91cCBpbmRleCBmb3Igd2hpY2ggYm9kaWVzIHdpbGwgY29sbGlkZS5cbiAgICAgKiBJZiBgaXNOb25Db2xsaWRpbmdgIGlzIGB0cnVlYCwgcmV0dXJucyB0aGUgbmV4dCB1bmlxdWUgZ3JvdXAgaW5kZXggZm9yIHdoaWNoIGJvZGllcyB3aWxsIF9ub3RfIGNvbGxpZGUuXG4gICAgICogU2VlIGBib2R5LmNvbGxpc2lvbkZpbHRlcmAgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAgICogQG1ldGhvZCBuZXh0R3JvdXBcbiAgICAgKiBAcGFyYW0ge2Jvb2x9IFtpc05vbkNvbGxpZGluZz1mYWxzZV1cbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IFVuaXF1ZSBncm91cCBpbmRleFxuICAgICAqL1xuICAgIEJvZHkubmV4dEdyb3VwID0gZnVuY3Rpb24oaXNOb25Db2xsaWRpbmcpIHtcbiAgICAgICAgaWYgKGlzTm9uQ29sbGlkaW5nKVxuICAgICAgICAgICAgcmV0dXJuIEJvZHkuX25leHROb25Db2xsaWRpbmdHcm91cElkLS07XG5cbiAgICAgICAgcmV0dXJuIEJvZHkuX25leHRDb2xsaWRpbmdHcm91cElkKys7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5leHQgdW5pcXVlIGNhdGVnb3J5IGJpdGZpZWxkIChzdGFydGluZyBhZnRlciB0aGUgaW5pdGlhbCBkZWZhdWx0IGNhdGVnb3J5IGAweDAwMDFgKS5cbiAgICAgKiBUaGVyZSBhcmUgMzIgYXZhaWxhYmxlLiBTZWUgYGJvZHkuY29sbGlzaW9uRmlsdGVyYCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgKiBAbWV0aG9kIG5leHRDYXRlZ29yeVxuICAgICAqIEByZXR1cm4ge051bWJlcn0gVW5pcXVlIGNhdGVnb3J5IGJpdGZpZWxkXG4gICAgICovXG4gICAgQm9keS5uZXh0Q2F0ZWdvcnkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgQm9keS5fbmV4dENhdGVnb3J5ID0gQm9keS5fbmV4dENhdGVnb3J5IDw8IDE7XG4gICAgICAgIHJldHVybiBCb2R5Ll9uZXh0Q2F0ZWdvcnk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2VzIGJvZHkgcHJvcGVydGllcy5cbiAgICAgKiBAbWV0aG9kIF9pbml0UHJvcGVydGllc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHt9IFtvcHRpb25zXVxuICAgICAqL1xuICAgIHZhciBfaW5pdFByb3BlcnRpZXMgPSBmdW5jdGlvbihib2R5LCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIC8vIGluaXQgcmVxdWlyZWQgcHJvcGVydGllcyAob3JkZXIgaXMgaW1wb3J0YW50KVxuICAgICAgICBCb2R5LnNldChib2R5LCB7XG4gICAgICAgICAgICBib3VuZHM6IGJvZHkuYm91bmRzIHx8IEJvdW5kcy5jcmVhdGUoYm9keS52ZXJ0aWNlcyksXG4gICAgICAgICAgICBwb3NpdGlvblByZXY6IGJvZHkucG9zaXRpb25QcmV2IHx8IFZlY3Rvci5jbG9uZShib2R5LnBvc2l0aW9uKSxcbiAgICAgICAgICAgIGFuZ2xlUHJldjogYm9keS5hbmdsZVByZXYgfHwgYm9keS5hbmdsZSxcbiAgICAgICAgICAgIHZlcnRpY2VzOiBib2R5LnZlcnRpY2VzLFxuICAgICAgICAgICAgcGFydHM6IGJvZHkucGFydHMgfHwgW2JvZHldLFxuICAgICAgICAgICAgaXNTdGF0aWM6IGJvZHkuaXNTdGF0aWMsXG4gICAgICAgICAgICBpc1NsZWVwaW5nOiBib2R5LmlzU2xlZXBpbmcsXG4gICAgICAgICAgICBwYXJlbnQ6IGJvZHkucGFyZW50IHx8IGJvZHlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgVmVydGljZXMucm90YXRlKGJvZHkudmVydGljZXMsIGJvZHkuYW5nbGUsIGJvZHkucG9zaXRpb24pO1xuICAgICAgICBBeGVzLnJvdGF0ZShib2R5LmF4ZXMsIGJvZHkuYW5nbGUpO1xuICAgICAgICBCb3VuZHMudXBkYXRlKGJvZHkuYm91bmRzLCBib2R5LnZlcnRpY2VzLCBib2R5LnZlbG9jaXR5KTtcblxuICAgICAgICAvLyBhbGxvdyBvcHRpb25zIHRvIG92ZXJyaWRlIHRoZSBhdXRvbWF0aWNhbGx5IGNhbGN1bGF0ZWQgcHJvcGVydGllc1xuICAgICAgICBCb2R5LnNldChib2R5LCB7XG4gICAgICAgICAgICBheGVzOiBvcHRpb25zLmF4ZXMgfHwgYm9keS5heGVzLFxuICAgICAgICAgICAgYXJlYTogb3B0aW9ucy5hcmVhIHx8IGJvZHkuYXJlYSxcbiAgICAgICAgICAgIG1hc3M6IG9wdGlvbnMubWFzcyB8fCBib2R5Lm1hc3MsXG4gICAgICAgICAgICBpbmVydGlhOiBvcHRpb25zLmluZXJ0aWEgfHwgYm9keS5pbmVydGlhXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHJlbmRlciBwcm9wZXJ0aWVzXG4gICAgICAgIHZhciBkZWZhdWx0RmlsbFN0eWxlID0gKGJvZHkuaXNTdGF0aWMgPyAnIzE0MTUxZicgOiBDb21tb24uY2hvb3NlKFsnI2YxOTY0OCcsICcjZjVkMjU5JywgJyNmNTVhM2MnLCAnIzA2M2U3YicsICcjZWNlY2QxJ10pKSxcbiAgICAgICAgICAgIGRlZmF1bHRTdHJva2VTdHlsZSA9IGJvZHkuaXNTdGF0aWMgPyAnIzU1NScgOiAnI2NjYycsXG4gICAgICAgICAgICBkZWZhdWx0TGluZVdpZHRoID0gYm9keS5pc1N0YXRpYyAmJiBib2R5LnJlbmRlci5maWxsU3R5bGUgPT09IG51bGwgPyAxIDogMDtcbiAgICAgICAgYm9keS5yZW5kZXIuZmlsbFN0eWxlID0gYm9keS5yZW5kZXIuZmlsbFN0eWxlIHx8IGRlZmF1bHRGaWxsU3R5bGU7XG4gICAgICAgIGJvZHkucmVuZGVyLnN0cm9rZVN0eWxlID0gYm9keS5yZW5kZXIuc3Ryb2tlU3R5bGUgfHwgZGVmYXVsdFN0cm9rZVN0eWxlO1xuICAgICAgICBib2R5LnJlbmRlci5saW5lV2lkdGggPSBib2R5LnJlbmRlci5saW5lV2lkdGggfHwgZGVmYXVsdExpbmVXaWR0aDtcbiAgICAgICAgYm9keS5yZW5kZXIuc3ByaXRlLnhPZmZzZXQgKz0gLShib2R5LmJvdW5kcy5taW4ueCAtIGJvZHkucG9zaXRpb24ueCkgLyAoYm9keS5ib3VuZHMubWF4LnggLSBib2R5LmJvdW5kcy5taW4ueCk7XG4gICAgICAgIGJvZHkucmVuZGVyLnNwcml0ZS55T2Zmc2V0ICs9IC0oYm9keS5ib3VuZHMubWluLnkgLSBib2R5LnBvc2l0aW9uLnkpIC8gKGJvZHkuYm91bmRzLm1heC55IC0gYm9keS5ib3VuZHMubWluLnkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHaXZlbiBhIHByb3BlcnR5IGFuZCBhIHZhbHVlIChvciBtYXAgb2YpLCBzZXRzIHRoZSBwcm9wZXJ0eShzKSBvbiB0aGUgYm9keSwgdXNpbmcgdGhlIGFwcHJvcHJpYXRlIHNldHRlciBmdW5jdGlvbnMgaWYgdGhleSBleGlzdC5cbiAgICAgKiBQcmVmZXIgdG8gdXNlIHRoZSBhY3R1YWwgc2V0dGVyIGZ1bmN0aW9ucyBpbiBwZXJmb3JtYW5jZSBjcml0aWNhbCBzaXR1YXRpb25zLlxuICAgICAqIEBtZXRob2Qgc2V0XG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHt9IHNldHRpbmdzIEEgcHJvcGVydHkgbmFtZSAob3IgbWFwIG9mIHByb3BlcnRpZXMgYW5kIHZhbHVlcykgdG8gc2V0IG9uIHRoZSBib2R5LlxuICAgICAqIEBwYXJhbSB7fSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0IGlmIGBzZXR0aW5nc2AgaXMgYSBzaW5nbGUgcHJvcGVydHkgbmFtZS5cbiAgICAgKi9cbiAgICBCb2R5LnNldCA9IGZ1bmN0aW9uKGJvZHksIHNldHRpbmdzLCB2YWx1ZSkge1xuICAgICAgICB2YXIgcHJvcGVydHk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBzZXR0aW5ncyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHByb3BlcnR5ID0gc2V0dGluZ3M7XG4gICAgICAgICAgICBzZXR0aW5ncyA9IHt9O1xuICAgICAgICAgICAgc2V0dGluZ3NbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHByb3BlcnR5IGluIHNldHRpbmdzKSB7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzZXR0aW5ncywgcHJvcGVydHkpKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICB2YWx1ZSA9IHNldHRpbmdzW3Byb3BlcnR5XTtcbiAgICAgICAgICAgIHN3aXRjaCAocHJvcGVydHkpIHtcblxuICAgICAgICAgICAgY2FzZSAnaXNTdGF0aWMnOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0U3RhdGljKGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2lzU2xlZXBpbmcnOlxuICAgICAgICAgICAgICAgIFNsZWVwaW5nLnNldChib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtYXNzJzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldE1hc3MoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGVuc2l0eSc6XG4gICAgICAgICAgICAgICAgQm9keS5zZXREZW5zaXR5KGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2luZXJ0aWEnOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0SW5lcnRpYShib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd2ZXJ0aWNlcyc6XG4gICAgICAgICAgICAgICAgQm9keS5zZXRWZXJ0aWNlcyhib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwb3NpdGlvbic6XG4gICAgICAgICAgICAgICAgQm9keS5zZXRQb3NpdGlvbihib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhbmdsZSc6XG4gICAgICAgICAgICAgICAgQm9keS5zZXRBbmdsZShib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd2ZWxvY2l0eSc6XG4gICAgICAgICAgICAgICAgQm9keS5zZXRWZWxvY2l0eShib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhbmd1bGFyVmVsb2NpdHknOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0QW5ndWxhclZlbG9jaXR5KGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3BhcnRzJzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldFBhcnRzKGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NlbnRyZSc6XG4gICAgICAgICAgICAgICAgQm9keS5zZXRDZW50cmUoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBib2R5W3Byb3BlcnR5XSA9IHZhbHVlO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYm9keSBhcyBzdGF0aWMsIGluY2x1ZGluZyBpc1N0YXRpYyBmbGFnIGFuZCBzZXR0aW5nIG1hc3MgYW5kIGluZXJ0aWEgdG8gSW5maW5pdHkuXG4gICAgICogQG1ldGhvZCBzZXRTdGF0aWNcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge2Jvb2x9IGlzU3RhdGljXG4gICAgICovXG4gICAgQm9keS5zZXRTdGF0aWMgPSBmdW5jdGlvbihib2R5LCBpc1N0YXRpYykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZHkucGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keS5wYXJ0c1tpXTtcbiAgICAgICAgICAgIHBhcnQuaXNTdGF0aWMgPSBpc1N0YXRpYztcblxuICAgICAgICAgICAgaWYgKGlzU3RhdGljKSB7XG4gICAgICAgICAgICAgICAgcGFydC5fb3JpZ2luYWwgPSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3RpdHV0aW9uOiBwYXJ0LnJlc3RpdHV0aW9uLFxuICAgICAgICAgICAgICAgICAgICBmcmljdGlvbjogcGFydC5mcmljdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbWFzczogcGFydC5tYXNzLFxuICAgICAgICAgICAgICAgICAgICBpbmVydGlhOiBwYXJ0LmluZXJ0aWEsXG4gICAgICAgICAgICAgICAgICAgIGRlbnNpdHk6IHBhcnQuZGVuc2l0eSxcbiAgICAgICAgICAgICAgICAgICAgaW52ZXJzZU1hc3M6IHBhcnQuaW52ZXJzZU1hc3MsXG4gICAgICAgICAgICAgICAgICAgIGludmVyc2VJbmVydGlhOiBwYXJ0LmludmVyc2VJbmVydGlhXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHBhcnQucmVzdGl0dXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIHBhcnQuZnJpY3Rpb24gPSAxO1xuICAgICAgICAgICAgICAgIHBhcnQubWFzcyA9IHBhcnQuaW5lcnRpYSA9IHBhcnQuZGVuc2l0eSA9IEluZmluaXR5O1xuICAgICAgICAgICAgICAgIHBhcnQuaW52ZXJzZU1hc3MgPSBwYXJ0LmludmVyc2VJbmVydGlhID0gMDtcblxuICAgICAgICAgICAgICAgIHBhcnQucG9zaXRpb25QcmV2LnggPSBwYXJ0LnBvc2l0aW9uLng7XG4gICAgICAgICAgICAgICAgcGFydC5wb3NpdGlvblByZXYueSA9IHBhcnQucG9zaXRpb24ueTtcbiAgICAgICAgICAgICAgICBwYXJ0LmFuZ2xlUHJldiA9IHBhcnQuYW5nbGU7XG4gICAgICAgICAgICAgICAgcGFydC5hbmd1bGFyVmVsb2NpdHkgPSAwO1xuICAgICAgICAgICAgICAgIHBhcnQuc3BlZWQgPSAwO1xuICAgICAgICAgICAgICAgIHBhcnQuYW5ndWxhclNwZWVkID0gMDtcbiAgICAgICAgICAgICAgICBwYXJ0Lm1vdGlvbiA9IDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnQuX29yaWdpbmFsKSB7XG4gICAgICAgICAgICAgICAgcGFydC5yZXN0aXR1dGlvbiA9IHBhcnQuX29yaWdpbmFsLnJlc3RpdHV0aW9uO1xuICAgICAgICAgICAgICAgIHBhcnQuZnJpY3Rpb24gPSBwYXJ0Ll9vcmlnaW5hbC5mcmljdGlvbjtcbiAgICAgICAgICAgICAgICBwYXJ0Lm1hc3MgPSBwYXJ0Ll9vcmlnaW5hbC5tYXNzO1xuICAgICAgICAgICAgICAgIHBhcnQuaW5lcnRpYSA9IHBhcnQuX29yaWdpbmFsLmluZXJ0aWE7XG4gICAgICAgICAgICAgICAgcGFydC5kZW5zaXR5ID0gcGFydC5fb3JpZ2luYWwuZGVuc2l0eTtcbiAgICAgICAgICAgICAgICBwYXJ0LmludmVyc2VNYXNzID0gcGFydC5fb3JpZ2luYWwuaW52ZXJzZU1hc3M7XG4gICAgICAgICAgICAgICAgcGFydC5pbnZlcnNlSW5lcnRpYSA9IHBhcnQuX29yaWdpbmFsLmludmVyc2VJbmVydGlhO1xuXG4gICAgICAgICAgICAgICAgcGFydC5fb3JpZ2luYWwgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIG1hc3Mgb2YgdGhlIGJvZHkuIEludmVyc2UgbWFzcywgZGVuc2l0eSBhbmQgaW5lcnRpYSBhcmUgYXV0b21hdGljYWxseSB1cGRhdGVkIHRvIHJlZmxlY3QgdGhlIGNoYW5nZS5cbiAgICAgKiBAbWV0aG9kIHNldE1hc3NcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWFzc1xuICAgICAqL1xuICAgIEJvZHkuc2V0TWFzcyA9IGZ1bmN0aW9uKGJvZHksIG1hc3MpIHtcbiAgICAgICAgdmFyIG1vbWVudCA9IGJvZHkuaW5lcnRpYSAvIChib2R5Lm1hc3MgLyA2KTtcbiAgICAgICAgYm9keS5pbmVydGlhID0gbW9tZW50ICogKG1hc3MgLyA2KTtcbiAgICAgICAgYm9keS5pbnZlcnNlSW5lcnRpYSA9IDEgLyBib2R5LmluZXJ0aWE7XG5cbiAgICAgICAgYm9keS5tYXNzID0gbWFzcztcbiAgICAgICAgYm9keS5pbnZlcnNlTWFzcyA9IDEgLyBib2R5Lm1hc3M7XG4gICAgICAgIGJvZHkuZGVuc2l0eSA9IGJvZHkubWFzcyAvIGJvZHkuYXJlYTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZGVuc2l0eSBvZiB0aGUgYm9keS4gTWFzcyBhbmQgaW5lcnRpYSBhcmUgYXV0b21hdGljYWxseSB1cGRhdGVkIHRvIHJlZmxlY3QgdGhlIGNoYW5nZS5cbiAgICAgKiBAbWV0aG9kIHNldERlbnNpdHlcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVuc2l0eVxuICAgICAqL1xuICAgIEJvZHkuc2V0RGVuc2l0eSA9IGZ1bmN0aW9uKGJvZHksIGRlbnNpdHkpIHtcbiAgICAgICAgQm9keS5zZXRNYXNzKGJvZHksIGRlbnNpdHkgKiBib2R5LmFyZWEpO1xuICAgICAgICBib2R5LmRlbnNpdHkgPSBkZW5zaXR5O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBtb21lbnQgb2YgaW5lcnRpYSAoaS5lLiBzZWNvbmQgbW9tZW50IG9mIGFyZWEpIG9mIHRoZSBib2R5LiBcbiAgICAgKiBJbnZlcnNlIGluZXJ0aWEgaXMgYXV0b21hdGljYWxseSB1cGRhdGVkIHRvIHJlZmxlY3QgdGhlIGNoYW5nZS4gTWFzcyBpcyBub3QgY2hhbmdlZC5cbiAgICAgKiBAbWV0aG9kIHNldEluZXJ0aWFcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5lcnRpYVxuICAgICAqL1xuICAgIEJvZHkuc2V0SW5lcnRpYSA9IGZ1bmN0aW9uKGJvZHksIGluZXJ0aWEpIHtcbiAgICAgICAgYm9keS5pbmVydGlhID0gaW5lcnRpYTtcbiAgICAgICAgYm9keS5pbnZlcnNlSW5lcnRpYSA9IDEgLyBib2R5LmluZXJ0aWE7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGJvZHkncyB2ZXJ0aWNlcyBhbmQgdXBkYXRlcyBib2R5IHByb3BlcnRpZXMgYWNjb3JkaW5nbHksIGluY2x1ZGluZyBpbmVydGlhLCBhcmVhIGFuZCBtYXNzICh3aXRoIHJlc3BlY3QgdG8gYGJvZHkuZGVuc2l0eWApLlxuICAgICAqIFZlcnRpY2VzIHdpbGwgYmUgYXV0b21hdGljYWxseSB0cmFuc2Zvcm1lZCB0byBiZSBvcmllbnRhdGVkIGFyb3VuZCB0aGVpciBjZW50cmUgb2YgbWFzcyBhcyB0aGUgb3JpZ2luLlxuICAgICAqIFRoZXkgYXJlIHRoZW4gYXV0b21hdGljYWxseSB0cmFuc2xhdGVkIHRvIHdvcmxkIHNwYWNlIGJhc2VkIG9uIGBib2R5LnBvc2l0aW9uYC5cbiAgICAgKlxuICAgICAqIFRoZSBgdmVydGljZXNgIGFyZ3VtZW50IHNob3VsZCBiZSBwYXNzZWQgYXMgYW4gYXJyYXkgb2YgYE1hdHRlci5WZWN0b3JgIHBvaW50cyAob3IgYSBgTWF0dGVyLlZlcnRpY2VzYCBhcnJheSkuXG4gICAgICogVmVydGljZXMgbXVzdCBmb3JtIGEgY29udmV4IGh1bGwsIGNvbmNhdmUgaHVsbHMgYXJlIG5vdCBzdXBwb3J0ZWQuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHNldFZlcnRpY2VzXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHt2ZWN0b3JbXX0gdmVydGljZXNcbiAgICAgKi9cbiAgICBCb2R5LnNldFZlcnRpY2VzID0gZnVuY3Rpb24oYm9keSwgdmVydGljZXMpIHtcbiAgICAgICAgLy8gY2hhbmdlIHZlcnRpY2VzXG4gICAgICAgIGlmICh2ZXJ0aWNlc1swXS5ib2R5ID09PSBib2R5KSB7XG4gICAgICAgICAgICBib2R5LnZlcnRpY2VzID0gdmVydGljZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2R5LnZlcnRpY2VzID0gVmVydGljZXMuY3JlYXRlKHZlcnRpY2VzLCBib2R5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVwZGF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgIGJvZHkuYXhlcyA9IEF4ZXMuZnJvbVZlcnRpY2VzKGJvZHkudmVydGljZXMpO1xuICAgICAgICBib2R5LmFyZWEgPSBWZXJ0aWNlcy5hcmVhKGJvZHkudmVydGljZXMpO1xuICAgICAgICBCb2R5LnNldE1hc3MoYm9keSwgYm9keS5kZW5zaXR5ICogYm9keS5hcmVhKTtcblxuICAgICAgICAvLyBvcmllbnQgdmVydGljZXMgYXJvdW5kIHRoZSBjZW50cmUgb2YgbWFzcyBhdCBvcmlnaW4gKDAsIDApXG4gICAgICAgIHZhciBjZW50cmUgPSBWZXJ0aWNlcy5jZW50cmUoYm9keS52ZXJ0aWNlcyk7XG4gICAgICAgIFZlcnRpY2VzLnRyYW5zbGF0ZShib2R5LnZlcnRpY2VzLCBjZW50cmUsIC0xKTtcblxuICAgICAgICAvLyB1cGRhdGUgaW5lcnRpYSB3aGlsZSB2ZXJ0aWNlcyBhcmUgYXQgb3JpZ2luICgwLCAwKVxuICAgICAgICBCb2R5LnNldEluZXJ0aWEoYm9keSwgQm9keS5faW5lcnRpYVNjYWxlICogVmVydGljZXMuaW5lcnRpYShib2R5LnZlcnRpY2VzLCBib2R5Lm1hc3MpKTtcblxuICAgICAgICAvLyB1cGRhdGUgZ2VvbWV0cnlcbiAgICAgICAgVmVydGljZXMudHJhbnNsYXRlKGJvZHkudmVydGljZXMsIGJvZHkucG9zaXRpb24pO1xuICAgICAgICBCb3VuZHMudXBkYXRlKGJvZHkuYm91bmRzLCBib2R5LnZlcnRpY2VzLCBib2R5LnZlbG9jaXR5KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcGFydHMgb2YgdGhlIGBib2R5YCBhbmQgdXBkYXRlcyBtYXNzLCBpbmVydGlhIGFuZCBjZW50cm9pZC5cbiAgICAgKiBFYWNoIHBhcnQgd2lsbCBoYXZlIGl0cyBwYXJlbnQgc2V0IHRvIGBib2R5YC5cbiAgICAgKiBCeSBkZWZhdWx0IHRoZSBjb252ZXggaHVsbCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgY29tcHV0ZWQgYW5kIHNldCBvbiBgYm9keWAsIHVubGVzcyBgYXV0b0h1bGxgIGlzIHNldCB0byBgZmFsc2UuYFxuICAgICAqIE5vdGUgdGhhdCB0aGlzIG1ldGhvZCB3aWxsIGVuc3VyZSB0aGF0IHRoZSBmaXJzdCBwYXJ0IGluIGBib2R5LnBhcnRzYCB3aWxsIGFsd2F5cyBiZSB0aGUgYGJvZHlgLlxuICAgICAqIEBtZXRob2Qgc2V0UGFydHNcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0gW2JvZHldIHBhcnRzXG4gICAgICogQHBhcmFtIHtib29sfSBbYXV0b0h1bGw9dHJ1ZV1cbiAgICAgKi9cbiAgICBCb2R5LnNldFBhcnRzID0gZnVuY3Rpb24oYm9keSwgcGFydHMsIGF1dG9IdWxsKSB7XG4gICAgICAgIHZhciBpO1xuXG4gICAgICAgIC8vIGFkZCBhbGwgdGhlIHBhcnRzLCBlbnN1cmluZyB0aGF0IHRoZSBmaXJzdCBwYXJ0IGlzIGFsd2F5cyB0aGUgcGFyZW50IGJvZHlcbiAgICAgICAgcGFydHMgPSBwYXJ0cy5zbGljZSgwKTtcbiAgICAgICAgYm9keS5wYXJ0cy5sZW5ndGggPSAwO1xuICAgICAgICBib2R5LnBhcnRzLnB1c2goYm9keSk7XG4gICAgICAgIGJvZHkucGFyZW50ID0gYm9keTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gcGFydHNbaV07XG4gICAgICAgICAgICBpZiAocGFydCAhPT0gYm9keSkge1xuICAgICAgICAgICAgICAgIHBhcnQucGFyZW50ID0gYm9keTtcbiAgICAgICAgICAgICAgICBib2R5LnBhcnRzLnB1c2gocGFydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9keS5wYXJ0cy5sZW5ndGggPT09IDEpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgYXV0b0h1bGwgPSB0eXBlb2YgYXV0b0h1bGwgIT09ICd1bmRlZmluZWQnID8gYXV0b0h1bGwgOiB0cnVlO1xuXG4gICAgICAgIC8vIGZpbmQgdGhlIGNvbnZleCBodWxsIG9mIGFsbCBwYXJ0cyB0byBzZXQgb24gdGhlIHBhcmVudCBib2R5XG4gICAgICAgIGlmIChhdXRvSHVsbCkge1xuICAgICAgICAgICAgdmFyIHZlcnRpY2VzID0gW107XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNlcyA9IHZlcnRpY2VzLmNvbmNhdChwYXJ0c1tpXS52ZXJ0aWNlcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFZlcnRpY2VzLmNsb2Nrd2lzZVNvcnQodmVydGljZXMpO1xuXG4gICAgICAgICAgICB2YXIgaHVsbCA9IFZlcnRpY2VzLmh1bGwodmVydGljZXMpLFxuICAgICAgICAgICAgICAgIGh1bGxDZW50cmUgPSBWZXJ0aWNlcy5jZW50cmUoaHVsbCk7XG5cbiAgICAgICAgICAgIEJvZHkuc2V0VmVydGljZXMoYm9keSwgaHVsbCk7XG4gICAgICAgICAgICBWZXJ0aWNlcy50cmFuc2xhdGUoYm9keS52ZXJ0aWNlcywgaHVsbENlbnRyZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdW0gdGhlIHByb3BlcnRpZXMgb2YgYWxsIGNvbXBvdW5kIHBhcnRzIG9mIHRoZSBwYXJlbnQgYm9keVxuICAgICAgICB2YXIgdG90YWwgPSBCb2R5Ll90b3RhbFByb3BlcnRpZXMoYm9keSk7XG5cbiAgICAgICAgYm9keS5hcmVhID0gdG90YWwuYXJlYTtcbiAgICAgICAgYm9keS5wYXJlbnQgPSBib2R5O1xuICAgICAgICBib2R5LnBvc2l0aW9uLnggPSB0b3RhbC5jZW50cmUueDtcbiAgICAgICAgYm9keS5wb3NpdGlvbi55ID0gdG90YWwuY2VudHJlLnk7XG4gICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnggPSB0b3RhbC5jZW50cmUueDtcbiAgICAgICAgYm9keS5wb3NpdGlvblByZXYueSA9IHRvdGFsLmNlbnRyZS55O1xuXG4gICAgICAgIEJvZHkuc2V0TWFzcyhib2R5LCB0b3RhbC5tYXNzKTtcbiAgICAgICAgQm9keS5zZXRJbmVydGlhKGJvZHksIHRvdGFsLmluZXJ0aWEpO1xuICAgICAgICBCb2R5LnNldFBvc2l0aW9uKGJvZHksIHRvdGFsLmNlbnRyZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgY2VudHJlIG9mIG1hc3Mgb2YgdGhlIGJvZHkuIFxuICAgICAqIFRoZSBgY2VudHJlYCBpcyBhIHZlY3RvciBpbiB3b3JsZC1zcGFjZSB1bmxlc3MgYHJlbGF0aXZlYCBpcyBzZXQsIGluIHdoaWNoIGNhc2UgaXQgaXMgYSB0cmFuc2xhdGlvbi5cbiAgICAgKiBUaGUgY2VudHJlIG9mIG1hc3MgaXMgdGhlIHBvaW50IHRoZSBib2R5IHJvdGF0ZXMgYWJvdXQgYW5kIGNhbiBiZSB1c2VkIHRvIHNpbXVsYXRlIG5vbi11bmlmb3JtIGRlbnNpdHkuXG4gICAgICogVGhpcyBpcyBlcXVhbCB0byBtb3ZpbmcgYGJvZHkucG9zaXRpb25gIGJ1dCBub3QgdGhlIGBib2R5LnZlcnRpY2VzYC5cbiAgICAgKiBJbnZhbGlkIGlmIHRoZSBgY2VudHJlYCBmYWxscyBvdXRzaWRlIHRoZSBib2R5J3MgY29udmV4IGh1bGwuXG4gICAgICogQG1ldGhvZCBzZXRDZW50cmVcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gY2VudHJlXG4gICAgICogQHBhcmFtIHtib29sfSByZWxhdGl2ZVxuICAgICAqL1xuICAgIEJvZHkuc2V0Q2VudHJlID0gZnVuY3Rpb24oYm9keSwgY2VudHJlLCByZWxhdGl2ZSkge1xuICAgICAgICBpZiAoIXJlbGF0aXZlKSB7XG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uUHJldi54ID0gY2VudHJlLnggLSAoYm9keS5wb3NpdGlvbi54IC0gYm9keS5wb3NpdGlvblByZXYueCk7XG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uUHJldi55ID0gY2VudHJlLnkgLSAoYm9keS5wb3NpdGlvbi55IC0gYm9keS5wb3NpdGlvblByZXYueSk7XG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uLnggPSBjZW50cmUueDtcbiAgICAgICAgICAgIGJvZHkucG9zaXRpb24ueSA9IGNlbnRyZS55O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvblByZXYueCArPSBjZW50cmUueDtcbiAgICAgICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnkgKz0gY2VudHJlLnk7XG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uLnggKz0gY2VudHJlLng7XG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uLnkgKz0gY2VudHJlLnk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcG9zaXRpb24gb2YgdGhlIGJvZHkgaW5zdGFudGx5LiBWZWxvY2l0eSwgYW5nbGUsIGZvcmNlIGV0Yy4gYXJlIHVuY2hhbmdlZC5cbiAgICAgKiBAbWV0aG9kIHNldFBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHBvc2l0aW9uXG4gICAgICovXG4gICAgQm9keS5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKGJvZHksIHBvc2l0aW9uKSB7XG4gICAgICAgIHZhciBkZWx0YSA9IFZlY3Rvci5zdWIocG9zaXRpb24sIGJvZHkucG9zaXRpb24pO1xuICAgICAgICBib2R5LnBvc2l0aW9uUHJldi54ICs9IGRlbHRhLng7XG4gICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnkgKz0gZGVsdGEueTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZHkucGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keS5wYXJ0c1tpXTtcbiAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueCArPSBkZWx0YS54O1xuICAgICAgICAgICAgcGFydC5wb3NpdGlvbi55ICs9IGRlbHRhLnk7XG4gICAgICAgICAgICBWZXJ0aWNlcy50cmFuc2xhdGUocGFydC52ZXJ0aWNlcywgZGVsdGEpO1xuICAgICAgICAgICAgQm91bmRzLnVwZGF0ZShwYXJ0LmJvdW5kcywgcGFydC52ZXJ0aWNlcywgYm9keS52ZWxvY2l0eSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYW5nbGUgb2YgdGhlIGJvZHkgaW5zdGFudGx5LiBBbmd1bGFyIHZlbG9jaXR5LCBwb3NpdGlvbiwgZm9yY2UgZXRjLiBhcmUgdW5jaGFuZ2VkLlxuICAgICAqIEBtZXRob2Qgc2V0QW5nbGVcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYW5nbGVcbiAgICAgKi9cbiAgICBCb2R5LnNldEFuZ2xlID0gZnVuY3Rpb24oYm9keSwgYW5nbGUpIHtcbiAgICAgICAgdmFyIGRlbHRhID0gYW5nbGUgLSBib2R5LmFuZ2xlO1xuICAgICAgICBib2R5LmFuZ2xlUHJldiArPSBkZWx0YTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZHkucGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keS5wYXJ0c1tpXTtcbiAgICAgICAgICAgIHBhcnQuYW5nbGUgKz0gZGVsdGE7XG4gICAgICAgICAgICBWZXJ0aWNlcy5yb3RhdGUocGFydC52ZXJ0aWNlcywgZGVsdGEsIGJvZHkucG9zaXRpb24pO1xuICAgICAgICAgICAgQXhlcy5yb3RhdGUocGFydC5heGVzLCBkZWx0YSk7XG4gICAgICAgICAgICBCb3VuZHMudXBkYXRlKHBhcnQuYm91bmRzLCBwYXJ0LnZlcnRpY2VzLCBib2R5LnZlbG9jaXR5KTtcbiAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgIFZlY3Rvci5yb3RhdGVBYm91dChwYXJ0LnBvc2l0aW9uLCBkZWx0YSwgYm9keS5wb3NpdGlvbiwgcGFydC5wb3NpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbGluZWFyIHZlbG9jaXR5IG9mIHRoZSBib2R5IGluc3RhbnRseS4gUG9zaXRpb24sIGFuZ2xlLCBmb3JjZSBldGMuIGFyZSB1bmNoYW5nZWQuIFNlZSBhbHNvIGBCb2R5LmFwcGx5Rm9yY2VgLlxuICAgICAqIEBtZXRob2Qgc2V0VmVsb2NpdHlcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVsb2NpdHlcbiAgICAgKi9cbiAgICBCb2R5LnNldFZlbG9jaXR5ID0gZnVuY3Rpb24oYm9keSwgdmVsb2NpdHkpIHtcbiAgICAgICAgYm9keS5wb3NpdGlvblByZXYueCA9IGJvZHkucG9zaXRpb24ueCAtIHZlbG9jaXR5Lng7XG4gICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnkgPSBib2R5LnBvc2l0aW9uLnkgLSB2ZWxvY2l0eS55O1xuICAgICAgICBib2R5LnZlbG9jaXR5LnggPSB2ZWxvY2l0eS54O1xuICAgICAgICBib2R5LnZlbG9jaXR5LnkgPSB2ZWxvY2l0eS55O1xuICAgICAgICBib2R5LnNwZWVkID0gVmVjdG9yLm1hZ25pdHVkZShib2R5LnZlbG9jaXR5KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYW5ndWxhciB2ZWxvY2l0eSBvZiB0aGUgYm9keSBpbnN0YW50bHkuIFBvc2l0aW9uLCBhbmdsZSwgZm9yY2UgZXRjLiBhcmUgdW5jaGFuZ2VkLiBTZWUgYWxzbyBgQm9keS5hcHBseUZvcmNlYC5cbiAgICAgKiBAbWV0aG9kIHNldEFuZ3VsYXJWZWxvY2l0eVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2ZWxvY2l0eVxuICAgICAqL1xuICAgIEJvZHkuc2V0QW5ndWxhclZlbG9jaXR5ID0gZnVuY3Rpb24oYm9keSwgdmVsb2NpdHkpIHtcbiAgICAgICAgYm9keS5hbmdsZVByZXYgPSBib2R5LmFuZ2xlIC0gdmVsb2NpdHk7XG4gICAgICAgIGJvZHkuYW5ndWxhclZlbG9jaXR5ID0gdmVsb2NpdHk7XG4gICAgICAgIGJvZHkuYW5ndWxhclNwZWVkID0gTWF0aC5hYnMoYm9keS5hbmd1bGFyVmVsb2NpdHkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlcyBhIGJvZHkgYnkgYSBnaXZlbiB2ZWN0b3IgcmVsYXRpdmUgdG8gaXRzIGN1cnJlbnQgcG9zaXRpb24sIHdpdGhvdXQgaW1wYXJ0aW5nIGFueSB2ZWxvY2l0eS5cbiAgICAgKiBAbWV0aG9kIHRyYW5zbGF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB0cmFuc2xhdGlvblxuICAgICAqL1xuICAgIEJvZHkudHJhbnNsYXRlID0gZnVuY3Rpb24oYm9keSwgdHJhbnNsYXRpb24pIHtcbiAgICAgICAgQm9keS5zZXRQb3NpdGlvbihib2R5LCBWZWN0b3IuYWRkKGJvZHkucG9zaXRpb24sIHRyYW5zbGF0aW9uKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJvdGF0ZXMgYSBib2R5IGJ5IGEgZ2l2ZW4gYW5nbGUgcmVsYXRpdmUgdG8gaXRzIGN1cnJlbnQgYW5nbGUsIHdpdGhvdXQgaW1wYXJ0aW5nIGFueSBhbmd1bGFyIHZlbG9jaXR5LlxuICAgICAqIEBtZXRob2Qgcm90YXRlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvdGF0aW9uXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IFtwb2ludF1cbiAgICAgKi9cbiAgICBCb2R5LnJvdGF0ZSA9IGZ1bmN0aW9uKGJvZHksIHJvdGF0aW9uLCBwb2ludCkge1xuICAgICAgICBpZiAoIXBvaW50KSB7XG4gICAgICAgICAgICBCb2R5LnNldEFuZ2xlKGJvZHksIGJvZHkuYW5nbGUgKyByb3RhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgY29zID0gTWF0aC5jb3Mocm90YXRpb24pLFxuICAgICAgICAgICAgICAgIHNpbiA9IE1hdGguc2luKHJvdGF0aW9uKSxcbiAgICAgICAgICAgICAgICBkeCA9IGJvZHkucG9zaXRpb24ueCAtIHBvaW50LngsXG4gICAgICAgICAgICAgICAgZHkgPSBib2R5LnBvc2l0aW9uLnkgLSBwb2ludC55O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgQm9keS5zZXRQb3NpdGlvbihib2R5LCB7XG4gICAgICAgICAgICAgICAgeDogcG9pbnQueCArIChkeCAqIGNvcyAtIGR5ICogc2luKSxcbiAgICAgICAgICAgICAgICB5OiBwb2ludC55ICsgKGR4ICogc2luICsgZHkgKiBjb3MpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgQm9keS5zZXRBbmdsZShib2R5LCBib2R5LmFuZ2xlICsgcm90YXRpb24pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNjYWxlcyB0aGUgYm9keSwgaW5jbHVkaW5nIHVwZGF0aW5nIHBoeXNpY2FsIHByb3BlcnRpZXMgKG1hc3MsIGFyZWEsIGF4ZXMsIGluZXJ0aWEpLCBmcm9tIGEgd29ybGQtc3BhY2UgcG9pbnQgKGRlZmF1bHQgaXMgYm9keSBjZW50cmUpLlxuICAgICAqIEBtZXRob2Qgc2NhbGVcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGVYXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlWVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBbcG9pbnRdXG4gICAgICovXG4gICAgQm9keS5zY2FsZSA9IGZ1bmN0aW9uKGJvZHksIHNjYWxlWCwgc2NhbGVZLCBwb2ludCkge1xuICAgICAgICB2YXIgdG90YWxBcmVhID0gMCxcbiAgICAgICAgICAgIHRvdGFsSW5lcnRpYSA9IDA7XG5cbiAgICAgICAgcG9pbnQgPSBwb2ludCB8fCBib2R5LnBvc2l0aW9uO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhcnQgPSBib2R5LnBhcnRzW2ldO1xuXG4gICAgICAgICAgICAvLyBzY2FsZSB2ZXJ0aWNlc1xuICAgICAgICAgICAgVmVydGljZXMuc2NhbGUocGFydC52ZXJ0aWNlcywgc2NhbGVYLCBzY2FsZVksIHBvaW50KTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIHByb3BlcnRpZXNcbiAgICAgICAgICAgIHBhcnQuYXhlcyA9IEF4ZXMuZnJvbVZlcnRpY2VzKHBhcnQudmVydGljZXMpO1xuICAgICAgICAgICAgcGFydC5hcmVhID0gVmVydGljZXMuYXJlYShwYXJ0LnZlcnRpY2VzKTtcbiAgICAgICAgICAgIEJvZHkuc2V0TWFzcyhwYXJ0LCBib2R5LmRlbnNpdHkgKiBwYXJ0LmFyZWEpO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgaW5lcnRpYSAocmVxdWlyZXMgdmVydGljZXMgdG8gYmUgYXQgb3JpZ2luKVxuICAgICAgICAgICAgVmVydGljZXMudHJhbnNsYXRlKHBhcnQudmVydGljZXMsIHsgeDogLXBhcnQucG9zaXRpb24ueCwgeTogLXBhcnQucG9zaXRpb24ueSB9KTtcbiAgICAgICAgICAgIEJvZHkuc2V0SW5lcnRpYShwYXJ0LCBCb2R5Ll9pbmVydGlhU2NhbGUgKiBWZXJ0aWNlcy5pbmVydGlhKHBhcnQudmVydGljZXMsIHBhcnQubWFzcykpO1xuICAgICAgICAgICAgVmVydGljZXMudHJhbnNsYXRlKHBhcnQudmVydGljZXMsIHsgeDogcGFydC5wb3NpdGlvbi54LCB5OiBwYXJ0LnBvc2l0aW9uLnkgfSk7XG5cbiAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgIHRvdGFsQXJlYSArPSBwYXJ0LmFyZWE7XG4gICAgICAgICAgICAgICAgdG90YWxJbmVydGlhICs9IHBhcnQuaW5lcnRpYTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc2NhbGUgcG9zaXRpb25cbiAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueCA9IHBvaW50LnggKyAocGFydC5wb3NpdGlvbi54IC0gcG9pbnQueCkgKiBzY2FsZVg7XG4gICAgICAgICAgICBwYXJ0LnBvc2l0aW9uLnkgPSBwb2ludC55ICsgKHBhcnQucG9zaXRpb24ueSAtIHBvaW50LnkpICogc2NhbGVZO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgYm91bmRzXG4gICAgICAgICAgICBCb3VuZHMudXBkYXRlKHBhcnQuYm91bmRzLCBwYXJ0LnZlcnRpY2VzLCBib2R5LnZlbG9jaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhhbmRsZSBwYXJlbnQgYm9keVxuICAgICAgICBpZiAoYm9keS5wYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBib2R5LmFyZWEgPSB0b3RhbEFyZWE7XG5cbiAgICAgICAgICAgIGlmICghYm9keS5pc1N0YXRpYykge1xuICAgICAgICAgICAgICAgIEJvZHkuc2V0TWFzcyhib2R5LCBib2R5LmRlbnNpdHkgKiB0b3RhbEFyZWEpO1xuICAgICAgICAgICAgICAgIEJvZHkuc2V0SW5lcnRpYShib2R5LCB0b3RhbEluZXJ0aWEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaGFuZGxlIGNpcmNsZXNcbiAgICAgICAgaWYgKGJvZHkuY2lyY2xlUmFkaXVzKSB7IFxuICAgICAgICAgICAgaWYgKHNjYWxlWCA9PT0gc2NhbGVZKSB7XG4gICAgICAgICAgICAgICAgYm9keS5jaXJjbGVSYWRpdXMgKj0gc2NhbGVYO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBib2R5IGlzIG5vIGxvbmdlciBhIGNpcmNsZVxuICAgICAgICAgICAgICAgIGJvZHkuY2lyY2xlUmFkaXVzID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIHNpbXVsYXRpb24gc3RlcCBmb3IgdGhlIGdpdmVuIGBib2R5YCwgaW5jbHVkaW5nIHVwZGF0aW5nIHBvc2l0aW9uIGFuZCBhbmdsZSB1c2luZyBWZXJsZXQgaW50ZWdyYXRpb24uXG4gICAgICogQG1ldGhvZCB1cGRhdGVcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVsdGFUaW1lXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTY2FsZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb3JyZWN0aW9uXG4gICAgICovXG4gICAgQm9keS51cGRhdGUgPSBmdW5jdGlvbihib2R5LCBkZWx0YVRpbWUsIHRpbWVTY2FsZSwgY29ycmVjdGlvbikge1xuICAgICAgICB2YXIgZGVsdGFUaW1lU3F1YXJlZCA9IE1hdGgucG93KGRlbHRhVGltZSAqIHRpbWVTY2FsZSAqIGJvZHkudGltZVNjYWxlLCAyKTtcblxuICAgICAgICAvLyBmcm9tIHRoZSBwcmV2aW91cyBzdGVwXG4gICAgICAgIHZhciBmcmljdGlvbkFpciA9IDEgLSBib2R5LmZyaWN0aW9uQWlyICogdGltZVNjYWxlICogYm9keS50aW1lU2NhbGUsXG4gICAgICAgICAgICB2ZWxvY2l0eVByZXZYID0gYm9keS5wb3NpdGlvbi54IC0gYm9keS5wb3NpdGlvblByZXYueCxcbiAgICAgICAgICAgIHZlbG9jaXR5UHJldlkgPSBib2R5LnBvc2l0aW9uLnkgLSBib2R5LnBvc2l0aW9uUHJldi55O1xuXG4gICAgICAgIC8vIHVwZGF0ZSB2ZWxvY2l0eSB3aXRoIFZlcmxldCBpbnRlZ3JhdGlvblxuICAgICAgICBib2R5LnZlbG9jaXR5LnggPSAodmVsb2NpdHlQcmV2WCAqIGZyaWN0aW9uQWlyICogY29ycmVjdGlvbikgKyAoYm9keS5mb3JjZS54IC8gYm9keS5tYXNzKSAqIGRlbHRhVGltZVNxdWFyZWQ7XG4gICAgICAgIGJvZHkudmVsb2NpdHkueSA9ICh2ZWxvY2l0eVByZXZZICogZnJpY3Rpb25BaXIgKiBjb3JyZWN0aW9uKSArIChib2R5LmZvcmNlLnkgLyBib2R5Lm1hc3MpICogZGVsdGFUaW1lU3F1YXJlZDtcblxuICAgICAgICBib2R5LnBvc2l0aW9uUHJldi54ID0gYm9keS5wb3NpdGlvbi54O1xuICAgICAgICBib2R5LnBvc2l0aW9uUHJldi55ID0gYm9keS5wb3NpdGlvbi55O1xuICAgICAgICBib2R5LnBvc2l0aW9uLnggKz0gYm9keS52ZWxvY2l0eS54O1xuICAgICAgICBib2R5LnBvc2l0aW9uLnkgKz0gYm9keS52ZWxvY2l0eS55O1xuXG4gICAgICAgIC8vIHVwZGF0ZSBhbmd1bGFyIHZlbG9jaXR5IHdpdGggVmVybGV0IGludGVncmF0aW9uXG4gICAgICAgIGJvZHkuYW5ndWxhclZlbG9jaXR5ID0gKChib2R5LmFuZ2xlIC0gYm9keS5hbmdsZVByZXYpICogZnJpY3Rpb25BaXIgKiBjb3JyZWN0aW9uKSArIChib2R5LnRvcnF1ZSAvIGJvZHkuaW5lcnRpYSkgKiBkZWx0YVRpbWVTcXVhcmVkO1xuICAgICAgICBib2R5LmFuZ2xlUHJldiA9IGJvZHkuYW5nbGU7XG4gICAgICAgIGJvZHkuYW5nbGUgKz0gYm9keS5hbmd1bGFyVmVsb2NpdHk7XG5cbiAgICAgICAgLy8gdHJhY2sgc3BlZWQgYW5kIGFjY2VsZXJhdGlvblxuICAgICAgICBib2R5LnNwZWVkID0gVmVjdG9yLm1hZ25pdHVkZShib2R5LnZlbG9jaXR5KTtcbiAgICAgICAgYm9keS5hbmd1bGFyU3BlZWQgPSBNYXRoLmFicyhib2R5LmFuZ3VsYXJWZWxvY2l0eSk7XG5cbiAgICAgICAgLy8gdHJhbnNmb3JtIHRoZSBib2R5IGdlb21ldHJ5XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhcnQgPSBib2R5LnBhcnRzW2ldO1xuXG4gICAgICAgICAgICBWZXJ0aWNlcy50cmFuc2xhdGUocGFydC52ZXJ0aWNlcywgYm9keS52ZWxvY2l0eSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueCArPSBib2R5LnZlbG9jaXR5Lng7XG4gICAgICAgICAgICAgICAgcGFydC5wb3NpdGlvbi55ICs9IGJvZHkudmVsb2NpdHkueTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJvZHkuYW5ndWxhclZlbG9jaXR5ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgVmVydGljZXMucm90YXRlKHBhcnQudmVydGljZXMsIGJvZHkuYW5ndWxhclZlbG9jaXR5LCBib2R5LnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBBeGVzLnJvdGF0ZShwYXJ0LmF4ZXMsIGJvZHkuYW5ndWxhclZlbG9jaXR5KTtcbiAgICAgICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVmVjdG9yLnJvdGF0ZUFib3V0KHBhcnQucG9zaXRpb24sIGJvZHkuYW5ndWxhclZlbG9jaXR5LCBib2R5LnBvc2l0aW9uLCBwYXJ0LnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEJvdW5kcy51cGRhdGUocGFydC5ib3VuZHMsIHBhcnQudmVydGljZXMsIGJvZHkudmVsb2NpdHkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgYSBmb3JjZSB0byBhIGJvZHkgZnJvbSBhIGdpdmVuIHdvcmxkLXNwYWNlIHBvc2l0aW9uLCBpbmNsdWRpbmcgcmVzdWx0aW5nIHRvcnF1ZS5cbiAgICAgKiBAbWV0aG9kIGFwcGx5Rm9yY2VcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gcG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gZm9yY2VcbiAgICAgKi9cbiAgICBCb2R5LmFwcGx5Rm9yY2UgPSBmdW5jdGlvbihib2R5LCBwb3NpdGlvbiwgZm9yY2UpIHtcbiAgICAgICAgYm9keS5mb3JjZS54ICs9IGZvcmNlLng7XG4gICAgICAgIGJvZHkuZm9yY2UueSArPSBmb3JjZS55O1xuICAgICAgICB2YXIgb2Zmc2V0ID0geyB4OiBwb3NpdGlvbi54IC0gYm9keS5wb3NpdGlvbi54LCB5OiBwb3NpdGlvbi55IC0gYm9keS5wb3NpdGlvbi55IH07XG4gICAgICAgIGJvZHkudG9ycXVlICs9IG9mZnNldC54ICogZm9yY2UueSAtIG9mZnNldC55ICogZm9yY2UueDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc3VtcyBvZiB0aGUgcHJvcGVydGllcyBvZiBhbGwgY29tcG91bmQgcGFydHMgb2YgdGhlIHBhcmVudCBib2R5LlxuICAgICAqIEBtZXRob2QgX3RvdGFsUHJvcGVydGllc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHJldHVybiB7fVxuICAgICAqL1xuICAgIEJvZHkuX3RvdGFsUHJvcGVydGllcyA9IGZ1bmN0aW9uKGJvZHkpIHtcbiAgICAgICAgLy8gZnJvbSBlcXVhdGlvbnMgYXQ6XG4gICAgICAgIC8vIGh0dHBzOi8vZWNvdXJzZXMub3UuZWR1L2NnaS1iaW4vZWJvb2suY2dpP2RvYz0mdG9waWM9c3QmY2hhcF9zZWM9MDcuMiZwYWdlPXRoZW9yeVxuICAgICAgICAvLyBodHRwOi8vb3V0cHV0LnRvL3NpZGV3YXkvZGVmYXVsdC5hc3A/cW5vPTEyMTEwMDA4N1xuXG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0ge1xuICAgICAgICAgICAgbWFzczogMCxcbiAgICAgICAgICAgIGFyZWE6IDAsXG4gICAgICAgICAgICBpbmVydGlhOiAwLFxuICAgICAgICAgICAgY2VudHJlOiB7IHg6IDAsIHk6IDAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHN1bSB0aGUgcHJvcGVydGllcyBvZiBhbGwgY29tcG91bmQgcGFydHMgb2YgdGhlIHBhcmVudCBib2R5XG4gICAgICAgIGZvciAodmFyIGkgPSBib2R5LnBhcnRzLmxlbmd0aCA9PT0gMSA/IDAgOiAxOyBpIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhcnQgPSBib2R5LnBhcnRzW2ldLFxuICAgICAgICAgICAgICAgIG1hc3MgPSBwYXJ0Lm1hc3MgIT09IEluZmluaXR5ID8gcGFydC5tYXNzIDogMTtcblxuICAgICAgICAgICAgcHJvcGVydGllcy5tYXNzICs9IG1hc3M7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzLmFyZWEgKz0gcGFydC5hcmVhO1xuICAgICAgICAgICAgcHJvcGVydGllcy5pbmVydGlhICs9IHBhcnQuaW5lcnRpYTtcbiAgICAgICAgICAgIHByb3BlcnRpZXMuY2VudHJlID0gVmVjdG9yLmFkZChwcm9wZXJ0aWVzLmNlbnRyZSwgVmVjdG9yLm11bHQocGFydC5wb3NpdGlvbiwgbWFzcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvcGVydGllcy5jZW50cmUgPSBWZWN0b3IuZGl2KHByb3BlcnRpZXMuY2VudHJlLCBwcm9wZXJ0aWVzLm1hc3MpO1xuXG4gICAgICAgIHJldHVybiBwcm9wZXJ0aWVzO1xuICAgIH07XG5cbiAgICAvKlxuICAgICpcbiAgICAqICBFdmVudHMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIGEgYm9keSBzdGFydHMgc2xlZXBpbmcgKHdoZXJlIGB0aGlzYCBpcyB0aGUgYm9keSkuXG4gICAgKlxuICAgICogQGV2ZW50IHNsZWVwU3RhcnRcbiAgICAqIEB0aGlzIHtib2R5fSBUaGUgYm9keSB0aGF0IGhhcyBzdGFydGVkIHNsZWVwaW5nXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgd2hlbiBhIGJvZHkgZW5kcyBzbGVlcGluZyAod2hlcmUgYHRoaXNgIGlzIHRoZSBib2R5KS5cbiAgICAqXG4gICAgKiBAZXZlbnQgc2xlZXBFbmRcbiAgICAqIEB0aGlzIHtib2R5fSBUaGUgYm9keSB0aGF0IGhhcyBlbmRlZCBzbGVlcGluZ1xuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKlxuICAgICpcbiAgICAqICBQcm9wZXJ0aWVzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGludGVnZXIgYE51bWJlcmAgdW5pcXVlbHkgaWRlbnRpZnlpbmcgbnVtYmVyIGdlbmVyYXRlZCBpbiBgQm9keS5jcmVhdGVgIGJ5IGBDb21tb24ubmV4dElkYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBpZFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgU3RyaW5nYCBkZW5vdGluZyB0aGUgdHlwZSBvZiBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdHlwZVxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0IFwiYm9keVwiXG4gICAgICogQHJlYWRPbmx5XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcmJpdHJhcnkgYFN0cmluZ2AgbmFtZSB0byBoZWxwIHRoZSB1c2VyIGlkZW50aWZ5IGFuZCBtYW5hZ2UgYm9kaWVzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGxhYmVsXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgXCJCb2R5XCJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGJvZGllcyB0aGF0IG1ha2UgdXAgdGhpcyBib2R5LiBcbiAgICAgKiBUaGUgZmlyc3QgYm9keSBpbiB0aGUgYXJyYXkgbXVzdCBhbHdheXMgYmUgYSBzZWxmIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCBib2R5IGluc3RhbmNlLlxuICAgICAqIEFsbCBib2RpZXMgaW4gdGhlIGBwYXJ0c2AgYXJyYXkgdG9nZXRoZXIgZm9ybSBhIHNpbmdsZSByaWdpZCBjb21wb3VuZCBib2R5LlxuICAgICAqIFBhcnRzIGFyZSBhbGxvd2VkIHRvIG92ZXJsYXAsIGhhdmUgZ2FwcyBvciBob2xlcyBvciBldmVuIGZvcm0gY29uY2F2ZSBib2RpZXMuXG4gICAgICogUGFydHMgdGhlbXNlbHZlcyBzaG91bGQgbmV2ZXIgYmUgYWRkZWQgdG8gYSBgV29ybGRgLCBvbmx5IHRoZSBwYXJlbnQgYm9keSBzaG91bGQgYmUuXG4gICAgICogVXNlIGBCb2R5LnNldFBhcnRzYCB3aGVuIHNldHRpbmcgcGFydHMgdG8gZW5zdXJlIGNvcnJlY3QgdXBkYXRlcyBvZiBhbGwgcHJvcGVydGllcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwYXJ0c1xuICAgICAqIEB0eXBlIGJvZHlbXVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IHJlc2VydmVkIGZvciBzdG9yaW5nIHBsdWdpbi1zcGVjaWZpYyBwcm9wZXJ0aWVzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBsdWdpblxuICAgICAqIEB0eXBlIHt9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIHNlbGYgcmVmZXJlbmNlIGlmIHRoZSBib2R5IGlzIF9ub3RfIGEgcGFydCBvZiBhbm90aGVyIGJvZHkuXG4gICAgICogT3RoZXJ3aXNlIHRoaXMgaXMgYSByZWZlcmVuY2UgdG8gdGhlIGJvZHkgdGhhdCB0aGlzIGlzIGEgcGFydCBvZi5cbiAgICAgKiBTZWUgYGJvZHkucGFydHNgLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBhcmVudFxuICAgICAqIEB0eXBlIGJvZHlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgc3BlY2lmeWluZyB0aGUgYW5nbGUgb2YgdGhlIGJvZHksIGluIHJhZGlhbnMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYW5nbGVcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBgVmVjdG9yYCBvYmplY3RzIHRoYXQgc3BlY2lmeSB0aGUgY29udmV4IGh1bGwgb2YgdGhlIHJpZ2lkIGJvZHkuXG4gICAgICogVGhlc2Ugc2hvdWxkIGJlIHByb3ZpZGVkIGFib3V0IHRoZSBvcmlnaW4gYCgwLCAwKWAuIEUuZy5cbiAgICAgKlxuICAgICAqICAgICBbeyB4OiAwLCB5OiAwIH0sIHsgeDogMjUsIHk6IDUwIH0sIHsgeDogNTAsIHk6IDAgfV1cbiAgICAgKlxuICAgICAqIFdoZW4gcGFzc2VkIHZpYSBgQm9keS5jcmVhdGVgLCB0aGUgdmVydGljZXMgYXJlIHRyYW5zbGF0ZWQgcmVsYXRpdmUgdG8gYGJvZHkucG9zaXRpb25gIChpLmUuIHdvcmxkLXNwYWNlLCBhbmQgY29uc3RhbnRseSB1cGRhdGVkIGJ5IGBCb2R5LnVwZGF0ZWAgZHVyaW5nIHNpbXVsYXRpb24pLlxuICAgICAqIFRoZSBgVmVjdG9yYCBvYmplY3RzIGFyZSBhbHNvIGF1Z21lbnRlZCB3aXRoIGFkZGl0aW9uYWwgcHJvcGVydGllcyByZXF1aXJlZCBmb3IgZWZmaWNpZW50IGNvbGxpc2lvbiBkZXRlY3Rpb24uIFxuICAgICAqXG4gICAgICogT3RoZXIgcHJvcGVydGllcyBzdWNoIGFzIGBpbmVydGlhYCBhbmQgYGJvdW5kc2AgYXJlIGF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlZCBmcm9tIHRoZSBwYXNzZWQgdmVydGljZXMgKHVubGVzcyBwcm92aWRlZCB2aWEgYG9wdGlvbnNgKS5cbiAgICAgKiBDb25jYXZlIGh1bGxzIGFyZSBub3QgY3VycmVudGx5IHN1cHBvcnRlZC4gVGhlIG1vZHVsZSBgTWF0dGVyLlZlcnRpY2VzYCBjb250YWlucyB1c2VmdWwgbWV0aG9kcyBmb3Igd29ya2luZyB3aXRoIHZlcnRpY2VzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHZlcnRpY2VzXG4gICAgICogQHR5cGUgdmVjdG9yW11cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFZlY3RvcmAgdGhhdCBzcGVjaWZpZXMgdGhlIGN1cnJlbnQgd29ybGQtc3BhY2UgcG9zaXRpb24gb2YgdGhlIGJvZHkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcG9zaXRpb25cbiAgICAgKiBAdHlwZSB2ZWN0b3JcbiAgICAgKiBAZGVmYXVsdCB7IHg6IDAsIHk6IDAgfVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgVmVjdG9yYCB0aGF0IHNwZWNpZmllcyB0aGUgZm9yY2UgdG8gYXBwbHkgaW4gdGhlIGN1cnJlbnQgc3RlcC4gSXQgaXMgemVyb2VkIGFmdGVyIGV2ZXJ5IGBCb2R5LnVwZGF0ZWAuIFNlZSBhbHNvIGBCb2R5LmFwcGx5Rm9yY2VgLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGZvcmNlXG4gICAgICogQHR5cGUgdmVjdG9yXG4gICAgICogQGRlZmF1bHQgeyB4OiAwLCB5OiAwIH1cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgdGhlIHRvcnF1ZSAodHVybmluZyBmb3JjZSkgdG8gYXBwbHkgaW4gdGhlIGN1cnJlbnQgc3RlcC4gSXQgaXMgemVyb2VkIGFmdGVyIGV2ZXJ5IGBCb2R5LnVwZGF0ZWAuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdG9ycXVlXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IF9tZWFzdXJlc18gdGhlIGN1cnJlbnQgc3BlZWQgb2YgdGhlIGJvZHkgYWZ0ZXIgdGhlIGxhc3QgYEJvZHkudXBkYXRlYC4gSXQgaXMgcmVhZC1vbmx5IGFuZCBhbHdheXMgcG9zaXRpdmUgKGl0J3MgdGhlIG1hZ25pdHVkZSBvZiBgYm9keS52ZWxvY2l0eWApLlxuICAgICAqXG4gICAgICogQHJlYWRPbmx5XG4gICAgICogQHByb3BlcnR5IHNwZWVkXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IF9tZWFzdXJlc18gdGhlIGN1cnJlbnQgYW5ndWxhciBzcGVlZCBvZiB0aGUgYm9keSBhZnRlciB0aGUgbGFzdCBgQm9keS51cGRhdGVgLiBJdCBpcyByZWFkLW9ubHkgYW5kIGFsd2F5cyBwb3NpdGl2ZSAoaXQncyB0aGUgbWFnbml0dWRlIG9mIGBib2R5LmFuZ3VsYXJWZWxvY2l0eWApLlxuICAgICAqXG4gICAgICogQHJlYWRPbmx5XG4gICAgICogQHByb3BlcnR5IGFuZ3VsYXJTcGVlZFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFZlY3RvcmAgdGhhdCBfbWVhc3VyZXNfIHRoZSBjdXJyZW50IHZlbG9jaXR5IG9mIHRoZSBib2R5IGFmdGVyIHRoZSBsYXN0IGBCb2R5LnVwZGF0ZWAuIEl0IGlzIHJlYWQtb25seS4gXG4gICAgICogSWYgeW91IG5lZWQgdG8gbW9kaWZ5IGEgYm9keSdzIHZlbG9jaXR5IGRpcmVjdGx5LCB5b3Ugc2hvdWxkIGVpdGhlciBhcHBseSBhIGZvcmNlIG9yIHNpbXBseSBjaGFuZ2UgdGhlIGJvZHkncyBgcG9zaXRpb25gIChhcyB0aGUgZW5naW5lIHVzZXMgcG9zaXRpb24tVmVybGV0IGludGVncmF0aW9uKS5cbiAgICAgKlxuICAgICAqIEByZWFkT25seVxuICAgICAqIEBwcm9wZXJ0eSB2ZWxvY2l0eVxuICAgICAqIEB0eXBlIHZlY3RvclxuICAgICAqIEBkZWZhdWx0IHsgeDogMCwgeTogMCB9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgX21lYXN1cmVzXyB0aGUgY3VycmVudCBhbmd1bGFyIHZlbG9jaXR5IG9mIHRoZSBib2R5IGFmdGVyIHRoZSBsYXN0IGBCb2R5LnVwZGF0ZWAuIEl0IGlzIHJlYWQtb25seS4gXG4gICAgICogSWYgeW91IG5lZWQgdG8gbW9kaWZ5IGEgYm9keSdzIGFuZ3VsYXIgdmVsb2NpdHkgZGlyZWN0bHksIHlvdSBzaG91bGQgYXBwbHkgYSB0b3JxdWUgb3Igc2ltcGx5IGNoYW5nZSB0aGUgYm9keSdzIGBhbmdsZWAgKGFzIHRoZSBlbmdpbmUgdXNlcyBwb3NpdGlvbi1WZXJsZXQgaW50ZWdyYXRpb24pLlxuICAgICAqXG4gICAgICogQHJlYWRPbmx5XG4gICAgICogQHByb3BlcnR5IGFuZ3VsYXJWZWxvY2l0eVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0aGF0IGluZGljYXRlcyB3aGV0aGVyIGEgYm9keSBpcyBjb25zaWRlcmVkIHN0YXRpYy4gQSBzdGF0aWMgYm9keSBjYW4gbmV2ZXIgY2hhbmdlIHBvc2l0aW9uIG9yIGFuZ2xlIGFuZCBpcyBjb21wbGV0ZWx5IGZpeGVkLlxuICAgICAqIElmIHlvdSBuZWVkIHRvIHNldCBhIGJvZHkgYXMgc3RhdGljIGFmdGVyIGl0cyBjcmVhdGlvbiwgeW91IHNob3VsZCB1c2UgYEJvZHkuc2V0U3RhdGljYCBhcyB0aGlzIHJlcXVpcmVzIG1vcmUgdGhhbiBqdXN0IHNldHRpbmcgdGhpcyBmbGFnLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGlzU3RhdGljXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdGhhdCBpbmRpY2F0ZXMgd2hldGhlciBhIGJvZHkgaXMgYSBzZW5zb3IuIFNlbnNvciB0cmlnZ2VycyBjb2xsaXNpb24gZXZlbnRzLCBidXQgZG9lc24ndCByZWFjdCB3aXRoIGNvbGxpZGluZyBib2R5IHBoeXNpY2FsbHkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgaXNTZW5zb3JcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHRoZSBib2R5IGlzIGNvbnNpZGVyZWQgc2xlZXBpbmcuIEEgc2xlZXBpbmcgYm9keSBhY3RzIHNpbWlsYXIgdG8gYSBzdGF0aWMgYm9keSwgZXhjZXB0IGl0IGlzIG9ubHkgdGVtcG9yYXJ5IGFuZCBjYW4gYmUgYXdva2VuLlxuICAgICAqIElmIHlvdSBuZWVkIHRvIHNldCBhIGJvZHkgYXMgc2xlZXBpbmcsIHlvdSBzaG91bGQgdXNlIGBTbGVlcGluZy5zZXRgIGFzIHRoaXMgcmVxdWlyZXMgbW9yZSB0aGFuIGp1c3Qgc2V0dGluZyB0aGlzIGZsYWcuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgaXNTbGVlcGluZ1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IF9tZWFzdXJlc18gdGhlIGFtb3VudCBvZiBtb3ZlbWVudCBhIGJvZHkgY3VycmVudGx5IGhhcyAoYSBjb21iaW5hdGlvbiBvZiBgc3BlZWRgIGFuZCBgYW5ndWxhclNwZWVkYCkuIEl0IGlzIHJlYWQtb25seSBhbmQgYWx3YXlzIHBvc2l0aXZlLlxuICAgICAqIEl0IGlzIHVzZWQgYW5kIHVwZGF0ZWQgYnkgdGhlIGBNYXR0ZXIuU2xlZXBpbmdgIG1vZHVsZSBkdXJpbmcgc2ltdWxhdGlvbiB0byBkZWNpZGUgaWYgYSBib2R5IGhhcyBjb21lIHRvIHJlc3QuXG4gICAgICpcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKiBAcHJvcGVydHkgbW90aW9uXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIG51bWJlciBvZiB1cGRhdGVzIGluIHdoaWNoIHRoaXMgYm9keSBtdXN0IGhhdmUgbmVhci16ZXJvIHZlbG9jaXR5IGJlZm9yZSBpdCBpcyBzZXQgYXMgc2xlZXBpbmcgYnkgdGhlIGBNYXR0ZXIuU2xlZXBpbmdgIG1vZHVsZSAoaWYgc2xlZXBpbmcgaXMgZW5hYmxlZCBieSB0aGUgZW5naW5lKS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBzbGVlcFRocmVzaG9sZFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDYwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgZGVuc2l0eSBvZiB0aGUgYm9keSwgdGhhdCBpcyBpdHMgbWFzcyBwZXIgdW5pdCBhcmVhLlxuICAgICAqIElmIHlvdSBwYXNzIHRoZSBkZW5zaXR5IHZpYSBgQm9keS5jcmVhdGVgIHRoZSBgbWFzc2AgcHJvcGVydHkgaXMgYXV0b21hdGljYWxseSBjYWxjdWxhdGVkIGZvciB5b3UgYmFzZWQgb24gdGhlIHNpemUgKGFyZWEpIG9mIHRoZSBvYmplY3QuXG4gICAgICogVGhpcyBpcyBnZW5lcmFsbHkgcHJlZmVyYWJsZSB0byBzaW1wbHkgc2V0dGluZyBtYXNzIGFuZCBhbGxvd3MgZm9yIG1vcmUgaW50dWl0aXZlIGRlZmluaXRpb24gb2YgbWF0ZXJpYWxzIChlLmcuIHJvY2sgaGFzIGEgaGlnaGVyIGRlbnNpdHkgdGhhbiB3b29kKS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBkZW5zaXR5XG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMC4wMDFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBtYXNzIG9mIHRoZSBib2R5LCBhbHRob3VnaCBpdCBtYXkgYmUgbW9yZSBhcHByb3ByaWF0ZSB0byBzcGVjaWZ5IHRoZSBgZGVuc2l0eWAgcHJvcGVydHkgaW5zdGVhZC5cbiAgICAgKiBJZiB5b3UgbW9kaWZ5IHRoaXMgdmFsdWUsIHlvdSBtdXN0IGFsc28gbW9kaWZ5IHRoZSBgYm9keS5pbnZlcnNlTWFzc2AgcHJvcGVydHkgKGAxIC8gbWFzc2ApLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG1hc3NcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBpbnZlcnNlIG1hc3Mgb2YgdGhlIGJvZHkgKGAxIC8gbWFzc2ApLlxuICAgICAqIElmIHlvdSBtb2RpZnkgdGhpcyB2YWx1ZSwgeW91IG11c3QgYWxzbyBtb2RpZnkgdGhlIGBib2R5Lm1hc3NgIHByb3BlcnR5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGludmVyc2VNYXNzXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgbW9tZW50IG9mIGluZXJ0aWEgKGkuZS4gc2Vjb25kIG1vbWVudCBvZiBhcmVhKSBvZiB0aGUgYm9keS5cbiAgICAgKiBJdCBpcyBhdXRvbWF0aWNhbGx5IGNhbGN1bGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gY29udmV4IGh1bGwgKGB2ZXJ0aWNlc2AgYXJyYXkpIGFuZCBkZW5zaXR5IGluIGBCb2R5LmNyZWF0ZWAuXG4gICAgICogSWYgeW91IG1vZGlmeSB0aGlzIHZhbHVlLCB5b3UgbXVzdCBhbHNvIG1vZGlmeSB0aGUgYGJvZHkuaW52ZXJzZUluZXJ0aWFgIHByb3BlcnR5IChgMSAvIGluZXJ0aWFgKS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBpbmVydGlhXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgaW52ZXJzZSBtb21lbnQgb2YgaW5lcnRpYSBvZiB0aGUgYm9keSAoYDEgLyBpbmVydGlhYCkuXG4gICAgICogSWYgeW91IG1vZGlmeSB0aGlzIHZhbHVlLCB5b3UgbXVzdCBhbHNvIG1vZGlmeSB0aGUgYGJvZHkuaW5lcnRpYWAgcHJvcGVydHkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgaW52ZXJzZUluZXJ0aWFcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSByZXN0aXR1dGlvbiAoZWxhc3RpY2l0eSkgb2YgdGhlIGJvZHkuIFRoZSB2YWx1ZSBpcyBhbHdheXMgcG9zaXRpdmUgYW5kIGlzIGluIHRoZSByYW5nZSBgKDAsIDEpYC5cbiAgICAgKiBBIHZhbHVlIG9mIGAwYCBtZWFucyBjb2xsaXNpb25zIG1heSBiZSBwZXJmZWN0bHkgaW5lbGFzdGljIGFuZCBubyBib3VuY2luZyBtYXkgb2NjdXIuIFxuICAgICAqIEEgdmFsdWUgb2YgYDAuOGAgbWVhbnMgdGhlIGJvZHkgbWF5IGJvdW5jZSBiYWNrIHdpdGggYXBwcm94aW1hdGVseSA4MCUgb2YgaXRzIGtpbmV0aWMgZW5lcmd5LlxuICAgICAqIE5vdGUgdGhhdCBjb2xsaXNpb24gcmVzcG9uc2UgaXMgYmFzZWQgb24gX3BhaXJzXyBvZiBib2RpZXMsIGFuZCB0aGF0IGByZXN0aXR1dGlvbmAgdmFsdWVzIGFyZSBfY29tYmluZWRfIHdpdGggdGhlIGZvbGxvd2luZyBmb3JtdWxhOlxuICAgICAqXG4gICAgICogICAgIE1hdGgubWF4KGJvZHlBLnJlc3RpdHV0aW9uLCBib2R5Qi5yZXN0aXR1dGlvbilcbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZXN0aXR1dGlvblxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBmcmljdGlvbiBvZiB0aGUgYm9keS4gVGhlIHZhbHVlIGlzIGFsd2F5cyBwb3NpdGl2ZSBhbmQgaXMgaW4gdGhlIHJhbmdlIGAoMCwgMSlgLlxuICAgICAqIEEgdmFsdWUgb2YgYDBgIG1lYW5zIHRoYXQgdGhlIGJvZHkgbWF5IHNsaWRlIGluZGVmaW5pdGVseS5cbiAgICAgKiBBIHZhbHVlIG9mIGAxYCBtZWFucyB0aGUgYm9keSBtYXkgY29tZSB0byBhIHN0b3AgYWxtb3N0IGluc3RhbnRseSBhZnRlciBhIGZvcmNlIGlzIGFwcGxpZWQuXG4gICAgICpcbiAgICAgKiBUaGUgZWZmZWN0cyBvZiB0aGUgdmFsdWUgbWF5IGJlIG5vbi1saW5lYXIuIFxuICAgICAqIEhpZ2ggdmFsdWVzIG1heSBiZSB1bnN0YWJsZSBkZXBlbmRpbmcgb24gdGhlIGJvZHkuXG4gICAgICogVGhlIGVuZ2luZSB1c2VzIGEgQ291bG9tYiBmcmljdGlvbiBtb2RlbCBpbmNsdWRpbmcgc3RhdGljIGFuZCBraW5ldGljIGZyaWN0aW9uLlxuICAgICAqIE5vdGUgdGhhdCBjb2xsaXNpb24gcmVzcG9uc2UgaXMgYmFzZWQgb24gX3BhaXJzXyBvZiBib2RpZXMsIGFuZCB0aGF0IGBmcmljdGlvbmAgdmFsdWVzIGFyZSBfY29tYmluZWRfIHdpdGggdGhlIGZvbGxvd2luZyBmb3JtdWxhOlxuICAgICAqXG4gICAgICogICAgIE1hdGgubWluKGJvZHlBLmZyaWN0aW9uLCBib2R5Qi5mcmljdGlvbilcbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBmcmljdGlvblxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDAuMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIHN0YXRpYyBmcmljdGlvbiBvZiB0aGUgYm9keSAoaW4gdGhlIENvdWxvbWIgZnJpY3Rpb24gbW9kZWwpLiBcbiAgICAgKiBBIHZhbHVlIG9mIGAwYCBtZWFucyB0aGUgYm9keSB3aWxsIG5ldmVyICdzdGljaycgd2hlbiBpdCBpcyBuZWFybHkgc3RhdGlvbmFyeSBhbmQgb25seSBkeW5hbWljIGBmcmljdGlvbmAgaXMgdXNlZC5cbiAgICAgKiBUaGUgaGlnaGVyIHRoZSB2YWx1ZSAoZS5nLiBgMTBgKSwgdGhlIG1vcmUgZm9yY2UgaXQgd2lsbCB0YWtlIHRvIGluaXRpYWxseSBnZXQgdGhlIGJvZHkgbW92aW5nIHdoZW4gbmVhcmx5IHN0YXRpb25hcnkuXG4gICAgICogVGhpcyB2YWx1ZSBpcyBtdWx0aXBsaWVkIHdpdGggdGhlIGBmcmljdGlvbmAgcHJvcGVydHkgdG8gbWFrZSBpdCBlYXNpZXIgdG8gY2hhbmdlIGBmcmljdGlvbmAgYW5kIG1haW50YWluIGFuIGFwcHJvcHJpYXRlIGFtb3VudCBvZiBzdGF0aWMgZnJpY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZnJpY3Rpb25TdGF0aWNcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwLjVcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBhaXIgZnJpY3Rpb24gb2YgdGhlIGJvZHkgKGFpciByZXNpc3RhbmNlKS4gXG4gICAgICogQSB2YWx1ZSBvZiBgMGAgbWVhbnMgdGhlIGJvZHkgd2lsbCBuZXZlciBzbG93IGFzIGl0IG1vdmVzIHRocm91Z2ggc3BhY2UuXG4gICAgICogVGhlIGhpZ2hlciB0aGUgdmFsdWUsIHRoZSBmYXN0ZXIgYSBib2R5IHNsb3dzIHdoZW4gbW92aW5nIHRocm91Z2ggc3BhY2UuXG4gICAgICogVGhlIGVmZmVjdHMgb2YgdGhlIHZhbHVlIGFyZSBub24tbGluZWFyLiBcbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBmcmljdGlvbkFpclxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDAuMDFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGBPYmplY3RgIHRoYXQgc3BlY2lmaWVzIHRoZSBjb2xsaXNpb24gZmlsdGVyaW5nIHByb3BlcnRpZXMgb2YgdGhpcyBib2R5LlxuICAgICAqXG4gICAgICogQ29sbGlzaW9ucyBiZXR3ZWVuIHR3byBib2RpZXMgd2lsbCBvYmV5IHRoZSBmb2xsb3dpbmcgcnVsZXM6XG4gICAgICogLSBJZiB0aGUgdHdvIGJvZGllcyBoYXZlIHRoZSBzYW1lIG5vbi16ZXJvIHZhbHVlIG9mIGBjb2xsaXNpb25GaWx0ZXIuZ3JvdXBgLFxuICAgICAqICAgdGhleSB3aWxsIGFsd2F5cyBjb2xsaWRlIGlmIHRoZSB2YWx1ZSBpcyBwb3NpdGl2ZSwgYW5kIHRoZXkgd2lsbCBuZXZlciBjb2xsaWRlXG4gICAgICogICBpZiB0aGUgdmFsdWUgaXMgbmVnYXRpdmUuXG4gICAgICogLSBJZiB0aGUgdHdvIGJvZGllcyBoYXZlIGRpZmZlcmVudCB2YWx1ZXMgb2YgYGNvbGxpc2lvbkZpbHRlci5ncm91cGAgb3IgaWYgb25lXG4gICAgICogICAob3IgYm90aCkgb2YgdGhlIGJvZGllcyBoYXMgYSB2YWx1ZSBvZiAwLCB0aGVuIHRoZSBjYXRlZ29yeS9tYXNrIHJ1bGVzIGFwcGx5IGFzIGZvbGxvd3M6XG4gICAgICpcbiAgICAgKiBFYWNoIGJvZHkgYmVsb25ncyB0byBhIGNvbGxpc2lvbiBjYXRlZ29yeSwgZ2l2ZW4gYnkgYGNvbGxpc2lvbkZpbHRlci5jYXRlZ29yeWAuIFRoaXNcbiAgICAgKiB2YWx1ZSBpcyB1c2VkIGFzIGEgYml0IGZpZWxkIGFuZCB0aGUgY2F0ZWdvcnkgc2hvdWxkIGhhdmUgb25seSBvbmUgYml0IHNldCwgbWVhbmluZyB0aGF0XG4gICAgICogdGhlIHZhbHVlIG9mIHRoaXMgcHJvcGVydHkgaXMgYSBwb3dlciBvZiB0d28gaW4gdGhlIHJhbmdlIFsxLCAyXjMxXS4gVGh1cywgdGhlcmUgYXJlIDMyXG4gICAgICogZGlmZmVyZW50IGNvbGxpc2lvbiBjYXRlZ29yaWVzIGF2YWlsYWJsZS5cbiAgICAgKlxuICAgICAqIEVhY2ggYm9keSBhbHNvIGRlZmluZXMgYSBjb2xsaXNpb24gYml0bWFzaywgZ2l2ZW4gYnkgYGNvbGxpc2lvbkZpbHRlci5tYXNrYCB3aGljaCBzcGVjaWZpZXNcbiAgICAgKiB0aGUgY2F0ZWdvcmllcyBpdCBjb2xsaWRlcyB3aXRoICh0aGUgdmFsdWUgaXMgdGhlIGJpdHdpc2UgQU5EIHZhbHVlIG9mIGFsbCB0aGVzZSBjYXRlZ29yaWVzKS5cbiAgICAgKlxuICAgICAqIFVzaW5nIHRoZSBjYXRlZ29yeS9tYXNrIHJ1bGVzLCB0d28gYm9kaWVzIGBBYCBhbmQgYEJgIGNvbGxpZGUgaWYgZWFjaCBpbmNsdWRlcyB0aGUgb3RoZXInc1xuICAgICAqIGNhdGVnb3J5IGluIGl0cyBtYXNrLCBpLmUuIGAoY2F0ZWdvcnlBICYgbWFza0IpICE9PSAwYCBhbmQgYChjYXRlZ29yeUIgJiBtYXNrQSkgIT09IDBgXG4gICAgICogYXJlIGJvdGggdHJ1ZS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjb2xsaXNpb25GaWx0ZXJcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIEludGVnZXIgYE51bWJlcmAsIHRoYXQgc3BlY2lmaWVzIHRoZSBjb2xsaXNpb24gZ3JvdXAgdGhpcyBib2R5IGJlbG9uZ3MgdG8uXG4gICAgICogU2VlIGBib2R5LmNvbGxpc2lvbkZpbHRlcmAgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29sbGlzaW9uRmlsdGVyLmdyb3VwXG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBiaXQgZmllbGQgdGhhdCBzcGVjaWZpZXMgdGhlIGNvbGxpc2lvbiBjYXRlZ29yeSB0aGlzIGJvZHkgYmVsb25ncyB0by5cbiAgICAgKiBUaGUgY2F0ZWdvcnkgdmFsdWUgc2hvdWxkIGhhdmUgb25seSBvbmUgYml0IHNldCwgZm9yIGV4YW1wbGUgYDB4MDAwMWAuXG4gICAgICogVGhpcyBtZWFucyB0aGVyZSBhcmUgdXAgdG8gMzIgdW5pcXVlIGNvbGxpc2lvbiBjYXRlZ29yaWVzIGF2YWlsYWJsZS5cbiAgICAgKiBTZWUgYGJvZHkuY29sbGlzaW9uRmlsdGVyYCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjb2xsaXNpb25GaWx0ZXIuY2F0ZWdvcnlcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGJpdCBtYXNrIHRoYXQgc3BlY2lmaWVzIHRoZSBjb2xsaXNpb24gY2F0ZWdvcmllcyB0aGlzIGJvZHkgbWF5IGNvbGxpZGUgd2l0aC5cbiAgICAgKiBTZWUgYGJvZHkuY29sbGlzaW9uRmlsdGVyYCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjb2xsaXNpb25GaWx0ZXIubWFza1xuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqIEBkZWZhdWx0IC0xXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIGEgdG9sZXJhbmNlIG9uIGhvdyBmYXIgYSBib2R5IGlzIGFsbG93ZWQgdG8gJ3NpbmsnIG9yIHJvdGF0ZSBpbnRvIG90aGVyIGJvZGllcy5cbiAgICAgKiBBdm9pZCBjaGFuZ2luZyB0aGlzIHZhbHVlIHVubGVzcyB5b3UgdW5kZXJzdGFuZCB0aGUgcHVycG9zZSBvZiBgc2xvcGAgaW4gcGh5c2ljcyBlbmdpbmVzLlxuICAgICAqIFRoZSBkZWZhdWx0IHNob3VsZCBnZW5lcmFsbHkgc3VmZmljZSwgYWx0aG91Z2ggdmVyeSBsYXJnZSBib2RpZXMgbWF5IHJlcXVpcmUgbGFyZ2VyIHZhbHVlcyBmb3Igc3RhYmxlIHN0YWNraW5nLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHNsb3BcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwLjA1XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgYWxsb3dzIHBlci1ib2R5IHRpbWUgc2NhbGluZywgZS5nLiBhIGZvcmNlLWZpZWxkIHdoZXJlIGJvZGllcyBpbnNpZGUgYXJlIGluIHNsb3ctbW90aW9uLCB3aGlsZSBvdGhlcnMgYXJlIGF0IGZ1bGwgc3BlZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdGltZVNjYWxlXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYE9iamVjdGAgdGhhdCBkZWZpbmVzIHRoZSByZW5kZXJpbmcgcHJvcGVydGllcyB0byBiZSBjb25zdW1lZCBieSB0aGUgbW9kdWxlIGBNYXR0ZXIuUmVuZGVyYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXJcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0aGF0IGluZGljYXRlcyBpZiB0aGUgYm9keSBzaG91bGQgYmUgcmVuZGVyZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnZpc2libGVcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgb3BhY2l0eSB0byB1c2Ugd2hlbiByZW5kZXJpbmcuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLm9wYWNpdHlcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGBPYmplY3RgIHRoYXQgZGVmaW5lcyB0aGUgc3ByaXRlIHByb3BlcnRpZXMgdG8gdXNlIHdoZW4gcmVuZGVyaW5nLCBpZiBhbnkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnNwcml0ZVxuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYFN0cmluZ2AgdGhhdCBkZWZpbmVzIHRoZSBwYXRoIHRvIHRoZSBpbWFnZSB0byB1c2UgYXMgdGhlIHNwcml0ZSB0ZXh0dXJlLCBpZiBhbnkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnNwcml0ZS50ZXh0dXJlXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICovXG4gICAgIFxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBzY2FsaW5nIGluIHRoZSB4LWF4aXMgZm9yIHRoZSBzcHJpdGUsIGlmIGFueS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIuc3ByaXRlLnhTY2FsZVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBzY2FsaW5nIGluIHRoZSB5LWF4aXMgZm9yIHRoZSBzcHJpdGUsIGlmIGFueS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIuc3ByaXRlLnlTY2FsZVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgb2Zmc2V0IGluIHRoZSB4LWF4aXMgZm9yIHRoZSBzcHJpdGUgKG5vcm1hbGlzZWQgYnkgdGV4dHVyZSB3aWR0aCkuXG4gICAgICAqXG4gICAgICAqIEBwcm9wZXJ0eSByZW5kZXIuc3ByaXRlLnhPZmZzZXRcbiAgICAgICogQHR5cGUgbnVtYmVyXG4gICAgICAqIEBkZWZhdWx0IDBcbiAgICAgICovXG5cbiAgICAvKipcbiAgICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIG9mZnNldCBpbiB0aGUgeS1heGlzIGZvciB0aGUgc3ByaXRlIChub3JtYWxpc2VkIGJ5IHRleHR1cmUgaGVpZ2h0KS5cbiAgICAgICpcbiAgICAgICogQHByb3BlcnR5IHJlbmRlci5zcHJpdGUueU9mZnNldFxuICAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgICogQGRlZmF1bHQgMFxuICAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBsaW5lIHdpZHRoIHRvIHVzZSB3aGVuIHJlbmRlcmluZyB0aGUgYm9keSBvdXRsaW5lIChpZiBhIHNwcml0ZSBpcyBub3QgZGVmaW5lZCkuXG4gICAgICogQSB2YWx1ZSBvZiBgMGAgbWVhbnMgbm8gb3V0bGluZSB3aWxsIGJlIHJlbmRlcmVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci5saW5lV2lkdGhcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBTdHJpbmdgIHRoYXQgZGVmaW5lcyB0aGUgZmlsbCBzdHlsZSB0byB1c2Ugd2hlbiByZW5kZXJpbmcgdGhlIGJvZHkgKGlmIGEgc3ByaXRlIGlzIG5vdCBkZWZpbmVkKS5cbiAgICAgKiBJdCBpcyB0aGUgc2FtZSBhcyB3aGVuIHVzaW5nIGEgY2FudmFzLCBzbyBpdCBhY2NlcHRzIENTUyBzdHlsZSBwcm9wZXJ0eSB2YWx1ZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLmZpbGxTdHlsZVxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0IGEgcmFuZG9tIGNvbG91clxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgU3RyaW5nYCB0aGF0IGRlZmluZXMgdGhlIHN0cm9rZSBzdHlsZSB0byB1c2Ugd2hlbiByZW5kZXJpbmcgdGhlIGJvZHkgb3V0bGluZSAoaWYgYSBzcHJpdGUgaXMgbm90IGRlZmluZWQpLlxuICAgICAqIEl0IGlzIHRoZSBzYW1lIGFzIHdoZW4gdXNpbmcgYSBjYW52YXMsIHNvIGl0IGFjY2VwdHMgQ1NTIHN0eWxlIHByb3BlcnR5IHZhbHVlcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIuc3Ryb2tlU3R5bGVcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBhIHJhbmRvbSBjb2xvdXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIHVuaXF1ZSBheGlzIHZlY3RvcnMgKGVkZ2Ugbm9ybWFscykgdXNlZCBmb3IgY29sbGlzaW9uIGRldGVjdGlvbi5cbiAgICAgKiBUaGVzZSBhcmUgYXV0b21hdGljYWxseSBjYWxjdWxhdGVkIGZyb20gdGhlIGdpdmVuIGNvbnZleCBodWxsIChgdmVydGljZXNgIGFycmF5KSBpbiBgQm9keS5jcmVhdGVgLlxuICAgICAqIFRoZXkgYXJlIGNvbnN0YW50bHkgdXBkYXRlZCBieSBgQm9keS51cGRhdGVgIGR1cmluZyB0aGUgc2ltdWxhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBheGVzXG4gICAgICogQHR5cGUgdmVjdG9yW11cbiAgICAgKi9cbiAgICAgXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IF9tZWFzdXJlc18gdGhlIGFyZWEgb2YgdGhlIGJvZHkncyBjb252ZXggaHVsbCwgY2FsY3VsYXRlZCBhdCBjcmVhdGlvbiBieSBgQm9keS5jcmVhdGVgLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGFyZWFcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYEJvdW5kc2Agb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgQUFCQiByZWdpb24gZm9yIHRoZSBib2R5LlxuICAgICAqIEl0IGlzIGF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlZCBmcm9tIHRoZSBnaXZlbiBjb252ZXggaHVsbCAoYHZlcnRpY2VzYCBhcnJheSkgaW4gYEJvZHkuY3JlYXRlYCBhbmQgY29uc3RhbnRseSB1cGRhdGVkIGJ5IGBCb2R5LnVwZGF0ZWAgZHVyaW5nIHNpbXVsYXRpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYm91bmRzXG4gICAgICogQHR5cGUgYm91bmRzXG4gICAgICovXG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiA3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5TbGVlcGluZ2AgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgdG8gbWFuYWdlIHRoZSBzbGVlcGluZyBzdGF0ZSBvZiBib2RpZXMuXG4qXG4qIEBjbGFzcyBTbGVlcGluZ1xuKi9cblxudmFyIFNsZWVwaW5nID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gU2xlZXBpbmc7XG5cbnZhciBFdmVudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICBTbGVlcGluZy5fbW90aW9uV2FrZVRocmVzaG9sZCA9IDAuMTg7XG4gICAgU2xlZXBpbmcuX21vdGlvblNsZWVwVGhyZXNob2xkID0gMC4wODtcbiAgICBTbGVlcGluZy5fbWluQmlhcyA9IDAuOTtcblxuICAgIC8qKlxuICAgICAqIFB1dHMgYm9kaWVzIHRvIHNsZWVwIG9yIHdha2VzIHRoZW0gdXAgZGVwZW5kaW5nIG9uIHRoZWlyIG1vdGlvbi5cbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVNjYWxlXG4gICAgICovXG4gICAgU2xlZXBpbmcudXBkYXRlID0gZnVuY3Rpb24oYm9kaWVzLCB0aW1lU2NhbGUpIHtcbiAgICAgICAgdmFyIHRpbWVGYWN0b3IgPSB0aW1lU2NhbGUgKiB0aW1lU2NhbGUgKiB0aW1lU2NhbGU7XG5cbiAgICAgICAgLy8gdXBkYXRlIGJvZGllcyBzbGVlcGluZyBzdGF0dXNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldLFxuICAgICAgICAgICAgICAgIG1vdGlvbiA9IGJvZHkuc3BlZWQgKiBib2R5LnNwZWVkICsgYm9keS5hbmd1bGFyU3BlZWQgKiBib2R5LmFuZ3VsYXJTcGVlZDtcblxuICAgICAgICAgICAgLy8gd2FrZSB1cCBib2RpZXMgaWYgdGhleSBoYXZlIGEgZm9yY2UgYXBwbGllZFxuICAgICAgICAgICAgaWYgKGJvZHkuZm9yY2UueCAhPT0gMCB8fCBib2R5LmZvcmNlLnkgIT09IDApIHtcbiAgICAgICAgICAgICAgICBTbGVlcGluZy5zZXQoYm9keSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbWluTW90aW9uID0gTWF0aC5taW4oYm9keS5tb3Rpb24sIG1vdGlvbiksXG4gICAgICAgICAgICAgICAgbWF4TW90aW9uID0gTWF0aC5tYXgoYm9keS5tb3Rpb24sIG1vdGlvbik7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gYmlhc2VkIGF2ZXJhZ2UgbW90aW9uIGVzdGltYXRpb24gYmV0d2VlbiBmcmFtZXNcbiAgICAgICAgICAgIGJvZHkubW90aW9uID0gU2xlZXBpbmcuX21pbkJpYXMgKiBtaW5Nb3Rpb24gKyAoMSAtIFNsZWVwaW5nLl9taW5CaWFzKSAqIG1heE1vdGlvbjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGJvZHkuc2xlZXBUaHJlc2hvbGQgPiAwICYmIGJvZHkubW90aW9uIDwgU2xlZXBpbmcuX21vdGlvblNsZWVwVGhyZXNob2xkICogdGltZUZhY3Rvcikge1xuICAgICAgICAgICAgICAgIGJvZHkuc2xlZXBDb3VudGVyICs9IDE7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGJvZHkuc2xlZXBDb3VudGVyID49IGJvZHkuc2xlZXBUaHJlc2hvbGQpXG4gICAgICAgICAgICAgICAgICAgIFNsZWVwaW5nLnNldChib2R5LCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYm9keS5zbGVlcENvdW50ZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgYm9keS5zbGVlcENvdW50ZXIgLT0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHaXZlbiBhIHNldCBvZiBjb2xsaWRpbmcgcGFpcnMsIHdha2VzIHRoZSBzbGVlcGluZyBib2RpZXMgaW52b2x2ZWQuXG4gICAgICogQG1ldGhvZCBhZnRlckNvbGxpc2lvbnNcbiAgICAgKiBAcGFyYW0ge3BhaXJbXX0gcGFpcnNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVNjYWxlXG4gICAgICovXG4gICAgU2xlZXBpbmcuYWZ0ZXJDb2xsaXNpb25zID0gZnVuY3Rpb24ocGFpcnMsIHRpbWVTY2FsZSkge1xuICAgICAgICB2YXIgdGltZUZhY3RvciA9IHRpbWVTY2FsZSAqIHRpbWVTY2FsZSAqIHRpbWVTY2FsZTtcblxuICAgICAgICAvLyB3YWtlIHVwIGJvZGllcyBpbnZvbHZlZCBpbiBjb2xsaXNpb25zXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYWlyID0gcGFpcnNbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGRvbid0IHdha2UgaW5hY3RpdmUgcGFpcnNcbiAgICAgICAgICAgIGlmICghcGFpci5pc0FjdGl2ZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgdmFyIGNvbGxpc2lvbiA9IHBhaXIuY29sbGlzaW9uLFxuICAgICAgICAgICAgICAgIGJvZHlBID0gY29sbGlzaW9uLmJvZHlBLnBhcmVudCwgXG4gICAgICAgICAgICAgICAgYm9keUIgPSBjb2xsaXNpb24uYm9keUIucGFyZW50O1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIGRvbid0IHdha2UgaWYgYXQgbGVhc3Qgb25lIGJvZHkgaXMgc3RhdGljXG4gICAgICAgICAgICBpZiAoKGJvZHlBLmlzU2xlZXBpbmcgJiYgYm9keUIuaXNTbGVlcGluZykgfHwgYm9keUEuaXNTdGF0aWMgfHwgYm9keUIuaXNTdGF0aWMpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKGJvZHlBLmlzU2xlZXBpbmcgfHwgYm9keUIuaXNTbGVlcGluZykge1xuICAgICAgICAgICAgICAgIHZhciBzbGVlcGluZ0JvZHkgPSAoYm9keUEuaXNTbGVlcGluZyAmJiAhYm9keUEuaXNTdGF0aWMpID8gYm9keUEgOiBib2R5QixcbiAgICAgICAgICAgICAgICAgICAgbW92aW5nQm9keSA9IHNsZWVwaW5nQm9keSA9PT0gYm9keUEgPyBib2R5QiA6IGJvZHlBO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFzbGVlcGluZ0JvZHkuaXNTdGF0aWMgJiYgbW92aW5nQm9keS5tb3Rpb24gPiBTbGVlcGluZy5fbW90aW9uV2FrZVRocmVzaG9sZCAqIHRpbWVGYWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgU2xlZXBpbmcuc2V0KHNsZWVwaW5nQm9keSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gIFxuICAgIC8qKlxuICAgICAqIFNldCBhIGJvZHkgYXMgc2xlZXBpbmcgb3IgYXdha2UuXG4gICAgICogQG1ldGhvZCBzZXRcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzU2xlZXBpbmdcbiAgICAgKi9cbiAgICBTbGVlcGluZy5zZXQgPSBmdW5jdGlvbihib2R5LCBpc1NsZWVwaW5nKSB7XG4gICAgICAgIHZhciB3YXNTbGVlcGluZyA9IGJvZHkuaXNTbGVlcGluZztcblxuICAgICAgICBpZiAoaXNTbGVlcGluZykge1xuICAgICAgICAgICAgYm9keS5pc1NsZWVwaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGJvZHkuc2xlZXBDb3VudGVyID0gYm9keS5zbGVlcFRocmVzaG9sZDtcblxuICAgICAgICAgICAgYm9keS5wb3NpdGlvbkltcHVsc2UueCA9IDA7XG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uSW1wdWxzZS55ID0gMDtcblxuICAgICAgICAgICAgYm9keS5wb3NpdGlvblByZXYueCA9IGJvZHkucG9zaXRpb24ueDtcbiAgICAgICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnkgPSBib2R5LnBvc2l0aW9uLnk7XG5cbiAgICAgICAgICAgIGJvZHkuYW5nbGVQcmV2ID0gYm9keS5hbmdsZTtcbiAgICAgICAgICAgIGJvZHkuc3BlZWQgPSAwO1xuICAgICAgICAgICAgYm9keS5hbmd1bGFyU3BlZWQgPSAwO1xuICAgICAgICAgICAgYm9keS5tb3Rpb24gPSAwO1xuXG4gICAgICAgICAgICBpZiAoIXdhc1NsZWVwaW5nKSB7XG4gICAgICAgICAgICAgICAgRXZlbnRzLnRyaWdnZXIoYm9keSwgJ3NsZWVwU3RhcnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvZHkuaXNTbGVlcGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgYm9keS5zbGVlcENvdW50ZXIgPSAwO1xuXG4gICAgICAgICAgICBpZiAod2FzU2xlZXBpbmcpIHtcbiAgICAgICAgICAgICAgICBFdmVudHMudHJpZ2dlcihib2R5LCAnc2xlZXBFbmQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiA4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5Db2xsaXNpb25gIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBkZXRlY3RpbmcgY29sbGlzaW9ucyBiZXR3ZWVuIGEgZ2l2ZW4gcGFpciBvZiBib2RpZXMuXG4qXG4qIEZvciBlZmZpY2llbnQgZGV0ZWN0aW9uIGJldHdlZW4gYSBsaXN0IG9mIGJvZGllcywgc2VlIGBNYXR0ZXIuRGV0ZWN0b3JgIGFuZCBgTWF0dGVyLlF1ZXJ5YC5cbipcbiogU2VlIGBNYXR0ZXIuRW5naW5lYCBmb3IgY29sbGlzaW9uIGV2ZW50cy5cbipcbiogQGNsYXNzIENvbGxpc2lvblxuKi9cblxudmFyIENvbGxpc2lvbiA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbGxpc2lvbjtcblxudmFyIFZlcnRpY2VzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbnZhciBQYWlyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblxuKGZ1bmN0aW9uKCkge1xuICAgIHZhciBfc3VwcG9ydHMgPSBbXTtcblxuICAgIHZhciBfb3ZlcmxhcEFCID0ge1xuICAgICAgICBvdmVybGFwOiAwLFxuICAgICAgICBheGlzOiBudWxsXG4gICAgfTtcblxuICAgIHZhciBfb3ZlcmxhcEJBID0ge1xuICAgICAgICBvdmVybGFwOiAwLFxuICAgICAgICBheGlzOiBudWxsXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgY29sbGlzaW9uIHJlY29yZC5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keUEgVGhlIGZpcnN0IGJvZHkgcGFydCByZXByZXNlbnRlZCBieSB0aGUgY29sbGlzaW9uIHJlY29yZFxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keUIgVGhlIHNlY29uZCBib2R5IHBhcnQgcmVwcmVzZW50ZWQgYnkgdGhlIGNvbGxpc2lvbiByZWNvcmRcbiAgICAgKiBAcmV0dXJuIHtjb2xsaXNpb259IEEgbmV3IGNvbGxpc2lvbiByZWNvcmRcbiAgICAgKi9cbiAgICBDb2xsaXNpb24uY3JlYXRlID0gZnVuY3Rpb24oYm9keUEsIGJvZHlCKSB7XG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgcGFpcjogbnVsbCxcbiAgICAgICAgICAgIGNvbGxpZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGJvZHlBOiBib2R5QSxcbiAgICAgICAgICAgIGJvZHlCOiBib2R5QixcbiAgICAgICAgICAgIHBhcmVudEE6IGJvZHlBLnBhcmVudCxcbiAgICAgICAgICAgIHBhcmVudEI6IGJvZHlCLnBhcmVudCxcbiAgICAgICAgICAgIGRlcHRoOiAwLFxuICAgICAgICAgICAgbm9ybWFsOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgIHRhbmdlbnQ6IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgcGVuZXRyYXRpb246IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgc3VwcG9ydHM6IFtdXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERldGVjdCBjb2xsaXNpb24gYmV0d2VlbiB0d28gYm9kaWVzLlxuICAgICAqIEBtZXRob2QgY29sbGlkZXNcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlBXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5QlxuICAgICAqIEBwYXJhbSB7cGFpcnN9IFtwYWlyc10gT3B0aW9uYWxseSByZXVzZSBjb2xsaXNpb24gcmVjb3JkcyBmcm9tIGV4aXN0aW5nIHBhaXJzLlxuICAgICAqIEByZXR1cm4ge2NvbGxpc2lvbnxudWxsfSBBIGNvbGxpc2lvbiByZWNvcmQgaWYgZGV0ZWN0ZWQsIG90aGVyd2lzZSBudWxsXG4gICAgICovXG4gICAgQ29sbGlzaW9uLmNvbGxpZGVzID0gZnVuY3Rpb24oYm9keUEsIGJvZHlCLCBwYWlycykge1xuICAgICAgICBDb2xsaXNpb24uX292ZXJsYXBBeGVzKF9vdmVybGFwQUIsIGJvZHlBLnZlcnRpY2VzLCBib2R5Qi52ZXJ0aWNlcywgYm9keUEuYXhlcyk7XG5cbiAgICAgICAgaWYgKF9vdmVybGFwQUIub3ZlcmxhcCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIENvbGxpc2lvbi5fb3ZlcmxhcEF4ZXMoX292ZXJsYXBCQSwgYm9keUIudmVydGljZXMsIGJvZHlBLnZlcnRpY2VzLCBib2R5Qi5heGVzKTtcblxuICAgICAgICBpZiAoX292ZXJsYXBCQS5vdmVybGFwIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmV1c2UgY29sbGlzaW9uIHJlY29yZHMgZm9yIGdjIGVmZmljaWVuY3lcbiAgICAgICAgdmFyIHBhaXIgPSBwYWlycyAmJiBwYWlycy50YWJsZVtQYWlyLmlkKGJvZHlBLCBib2R5QildLFxuICAgICAgICAgICAgY29sbGlzaW9uO1xuXG4gICAgICAgIGlmICghcGFpcikge1xuICAgICAgICAgICAgY29sbGlzaW9uID0gQ29sbGlzaW9uLmNyZWF0ZShib2R5QSwgYm9keUIpO1xuICAgICAgICAgICAgY29sbGlzaW9uLmNvbGxpZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbGxpc2lvbi5ib2R5QSA9IGJvZHlBLmlkIDwgYm9keUIuaWQgPyBib2R5QSA6IGJvZHlCO1xuICAgICAgICAgICAgY29sbGlzaW9uLmJvZHlCID0gYm9keUEuaWQgPCBib2R5Qi5pZCA/IGJvZHlCIDogYm9keUE7XG4gICAgICAgICAgICBjb2xsaXNpb24ucGFyZW50QSA9IGNvbGxpc2lvbi5ib2R5QS5wYXJlbnQ7XG4gICAgICAgICAgICBjb2xsaXNpb24ucGFyZW50QiA9IGNvbGxpc2lvbi5ib2R5Qi5wYXJlbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb2xsaXNpb24gPSBwYWlyLmNvbGxpc2lvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHlBID0gY29sbGlzaW9uLmJvZHlBO1xuICAgICAgICBib2R5QiA9IGNvbGxpc2lvbi5ib2R5QjtcblxuICAgICAgICB2YXIgbWluT3ZlcmxhcDtcblxuICAgICAgICBpZiAoX292ZXJsYXBBQi5vdmVybGFwIDwgX292ZXJsYXBCQS5vdmVybGFwKSB7XG4gICAgICAgICAgICBtaW5PdmVybGFwID0gX292ZXJsYXBBQjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1pbk92ZXJsYXAgPSBfb3ZlcmxhcEJBO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5vcm1hbCA9IGNvbGxpc2lvbi5ub3JtYWwsXG4gICAgICAgICAgICBzdXBwb3J0cyA9IGNvbGxpc2lvbi5zdXBwb3J0cyxcbiAgICAgICAgICAgIG1pbkF4aXMgPSBtaW5PdmVybGFwLmF4aXMsXG4gICAgICAgICAgICBtaW5BeGlzWCA9IG1pbkF4aXMueCxcbiAgICAgICAgICAgIG1pbkF4aXNZID0gbWluQXhpcy55O1xuXG4gICAgICAgIC8vIGVuc3VyZSBub3JtYWwgaXMgZmFjaW5nIGF3YXkgZnJvbSBib2R5QVxuICAgICAgICBpZiAobWluQXhpc1ggKiAoYm9keUIucG9zaXRpb24ueCAtIGJvZHlBLnBvc2l0aW9uLngpICsgbWluQXhpc1kgKiAoYm9keUIucG9zaXRpb24ueSAtIGJvZHlBLnBvc2l0aW9uLnkpIDwgMCkge1xuICAgICAgICAgICAgbm9ybWFsLnggPSBtaW5BeGlzWDtcbiAgICAgICAgICAgIG5vcm1hbC55ID0gbWluQXhpc1k7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub3JtYWwueCA9IC1taW5BeGlzWDtcbiAgICAgICAgICAgIG5vcm1hbC55ID0gLW1pbkF4aXNZO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb2xsaXNpb24udGFuZ2VudC54ID0gLW5vcm1hbC55O1xuICAgICAgICBjb2xsaXNpb24udGFuZ2VudC55ID0gbm9ybWFsLng7XG5cbiAgICAgICAgY29sbGlzaW9uLmRlcHRoID0gbWluT3ZlcmxhcC5vdmVybGFwO1xuXG4gICAgICAgIGNvbGxpc2lvbi5wZW5ldHJhdGlvbi54ID0gbm9ybWFsLnggKiBjb2xsaXNpb24uZGVwdGg7XG4gICAgICAgIGNvbGxpc2lvbi5wZW5ldHJhdGlvbi55ID0gbm9ybWFsLnkgKiBjb2xsaXNpb24uZGVwdGg7XG5cbiAgICAgICAgLy8gZmluZCBzdXBwb3J0IHBvaW50cywgdGhlcmUgaXMgYWx3YXlzIGVpdGhlciBleGFjdGx5IG9uZSBvciB0d29cbiAgICAgICAgdmFyIHN1cHBvcnRzQiA9IENvbGxpc2lvbi5fZmluZFN1cHBvcnRzKGJvZHlBLCBib2R5Qiwgbm9ybWFsLCAxKSxcbiAgICAgICAgICAgIHN1cHBvcnRDb3VudCA9IDA7XG5cbiAgICAgICAgLy8gZmluZCB0aGUgc3VwcG9ydHMgZnJvbSBib2R5QiB0aGF0IGFyZSBpbnNpZGUgYm9keUFcbiAgICAgICAgaWYgKFZlcnRpY2VzLmNvbnRhaW5zKGJvZHlBLnZlcnRpY2VzLCBzdXBwb3J0c0JbMF0pKSB7XG4gICAgICAgICAgICBzdXBwb3J0c1tzdXBwb3J0Q291bnQrK10gPSBzdXBwb3J0c0JbMF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVmVydGljZXMuY29udGFpbnMoYm9keUEudmVydGljZXMsIHN1cHBvcnRzQlsxXSkpIHtcbiAgICAgICAgICAgIHN1cHBvcnRzW3N1cHBvcnRDb3VudCsrXSA9IHN1cHBvcnRzQlsxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZpbmQgdGhlIHN1cHBvcnRzIGZyb20gYm9keUEgdGhhdCBhcmUgaW5zaWRlIGJvZHlCXG4gICAgICAgIGlmIChzdXBwb3J0Q291bnQgPCAyKSB7XG4gICAgICAgICAgICB2YXIgc3VwcG9ydHNBID0gQ29sbGlzaW9uLl9maW5kU3VwcG9ydHMoYm9keUIsIGJvZHlBLCBub3JtYWwsIC0xKTtcblxuICAgICAgICAgICAgaWYgKFZlcnRpY2VzLmNvbnRhaW5zKGJvZHlCLnZlcnRpY2VzLCBzdXBwb3J0c0FbMF0pKSB7XG4gICAgICAgICAgICAgICAgc3VwcG9ydHNbc3VwcG9ydENvdW50KytdID0gc3VwcG9ydHNBWzBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3VwcG9ydENvdW50IDwgMiAmJiBWZXJ0aWNlcy5jb250YWlucyhib2R5Qi52ZXJ0aWNlcywgc3VwcG9ydHNBWzFdKSkge1xuICAgICAgICAgICAgICAgIHN1cHBvcnRzW3N1cHBvcnRDb3VudCsrXSA9IHN1cHBvcnRzQVsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFjY291bnQgZm9yIHRoZSBlZGdlIGNhc2Ugb2Ygb3ZlcmxhcHBpbmcgYnV0IG5vIHZlcnRleCBjb250YWlubWVudFxuICAgICAgICBpZiAoc3VwcG9ydENvdW50ID09PSAwKSB7XG4gICAgICAgICAgICBzdXBwb3J0c1tzdXBwb3J0Q291bnQrK10gPSBzdXBwb3J0c0JbMF07XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgc3VwcG9ydHMgYXJyYXkgc2l6ZVxuICAgICAgICBzdXBwb3J0cy5sZW5ndGggPSBzdXBwb3J0Q291bnQ7XG5cbiAgICAgICAgcmV0dXJuIGNvbGxpc2lvbjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRmluZCB0aGUgb3ZlcmxhcCBiZXR3ZWVuIHR3byBzZXRzIG9mIHZlcnRpY2VzLlxuICAgICAqIEBtZXRob2QgX292ZXJsYXBBeGVzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVzdWx0XG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNBXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNCXG4gICAgICogQHBhcmFtIHtheGVzfSBheGVzXG4gICAgICovXG4gICAgQ29sbGlzaW9uLl9vdmVybGFwQXhlcyA9IGZ1bmN0aW9uKHJlc3VsdCwgdmVydGljZXNBLCB2ZXJ0aWNlc0IsIGF4ZXMpIHtcbiAgICAgICAgdmFyIHZlcnRpY2VzQUxlbmd0aCA9IHZlcnRpY2VzQS5sZW5ndGgsXG4gICAgICAgICAgICB2ZXJ0aWNlc0JMZW5ndGggPSB2ZXJ0aWNlc0IubGVuZ3RoLFxuICAgICAgICAgICAgdmVydGljZXNBWCA9IHZlcnRpY2VzQVswXS54LFxuICAgICAgICAgICAgdmVydGljZXNBWSA9IHZlcnRpY2VzQVswXS55LFxuICAgICAgICAgICAgdmVydGljZXNCWCA9IHZlcnRpY2VzQlswXS54LFxuICAgICAgICAgICAgdmVydGljZXNCWSA9IHZlcnRpY2VzQlswXS55LFxuICAgICAgICAgICAgYXhlc0xlbmd0aCA9IGF4ZXMubGVuZ3RoLFxuICAgICAgICAgICAgb3ZlcmxhcE1pbiA9IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBvdmVybGFwQXhpc051bWJlciA9IDAsXG4gICAgICAgICAgICBvdmVybGFwLFxuICAgICAgICAgICAgb3ZlcmxhcEFCLFxuICAgICAgICAgICAgb3ZlcmxhcEJBLFxuICAgICAgICAgICAgZG90LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGo7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGF4ZXNMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGF4aXMgPSBheGVzW2ldLFxuICAgICAgICAgICAgICAgIGF4aXNYID0gYXhpcy54LFxuICAgICAgICAgICAgICAgIGF4aXNZID0gYXhpcy55LFxuICAgICAgICAgICAgICAgIG1pbkEgPSB2ZXJ0aWNlc0FYICogYXhpc1ggKyB2ZXJ0aWNlc0FZICogYXhpc1ksXG4gICAgICAgICAgICAgICAgbWluQiA9IHZlcnRpY2VzQlggKiBheGlzWCArIHZlcnRpY2VzQlkgKiBheGlzWSxcbiAgICAgICAgICAgICAgICBtYXhBID0gbWluQSxcbiAgICAgICAgICAgICAgICBtYXhCID0gbWluQjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yIChqID0gMTsgaiA8IHZlcnRpY2VzQUxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgZG90ID0gdmVydGljZXNBW2pdLnggKiBheGlzWCArIHZlcnRpY2VzQVtqXS55ICogYXhpc1k7XG5cbiAgICAgICAgICAgICAgICBpZiAoZG90ID4gbWF4QSkgeyBcbiAgICAgICAgICAgICAgICAgICAgbWF4QSA9IGRvdDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRvdCA8IG1pbkEpIHsgXG4gICAgICAgICAgICAgICAgICAgIG1pbkEgPSBkb3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGogPSAxOyBqIDwgdmVydGljZXNCTGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICBkb3QgPSB2ZXJ0aWNlc0Jbal0ueCAqIGF4aXNYICsgdmVydGljZXNCW2pdLnkgKiBheGlzWTtcblxuICAgICAgICAgICAgICAgIGlmIChkb3QgPiBtYXhCKSB7IFxuICAgICAgICAgICAgICAgICAgICBtYXhCID0gZG90O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZG90IDwgbWluQikgeyBcbiAgICAgICAgICAgICAgICAgICAgbWluQiA9IGRvdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG92ZXJsYXBBQiA9IG1heEEgLSBtaW5CO1xuICAgICAgICAgICAgb3ZlcmxhcEJBID0gbWF4QiAtIG1pbkE7XG4gICAgICAgICAgICBvdmVybGFwID0gb3ZlcmxhcEFCIDwgb3ZlcmxhcEJBID8gb3ZlcmxhcEFCIDogb3ZlcmxhcEJBO1xuXG4gICAgICAgICAgICBpZiAob3ZlcmxhcCA8IG92ZXJsYXBNaW4pIHtcbiAgICAgICAgICAgICAgICBvdmVybGFwTWluID0gb3ZlcmxhcDtcbiAgICAgICAgICAgICAgICBvdmVybGFwQXhpc051bWJlciA9IGk7XG5cbiAgICAgICAgICAgICAgICBpZiAob3ZlcmxhcCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbiBub3QgYmUgaW50ZXJzZWN0aW5nXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQuYXhpcyA9IGF4ZXNbb3ZlcmxhcEF4aXNOdW1iZXJdO1xuICAgICAgICByZXN1bHQub3ZlcmxhcCA9IG92ZXJsYXBNaW47XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFByb2plY3RzIHZlcnRpY2VzIG9uIGFuIGF4aXMgYW5kIHJldHVybnMgYW4gaW50ZXJ2YWwuXG4gICAgICogQG1ldGhvZCBfcHJvamVjdFRvQXhpc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHt9IHByb2plY3Rpb25cbiAgICAgKiBAcGFyYW0ge30gdmVydGljZXNcbiAgICAgKiBAcGFyYW0ge30gYXhpc1xuICAgICAqL1xuICAgIENvbGxpc2lvbi5fcHJvamVjdFRvQXhpcyA9IGZ1bmN0aW9uKHByb2plY3Rpb24sIHZlcnRpY2VzLCBheGlzKSB7XG4gICAgICAgIHZhciBtaW4gPSB2ZXJ0aWNlc1swXS54ICogYXhpcy54ICsgdmVydGljZXNbMF0ueSAqIGF4aXMueSxcbiAgICAgICAgICAgIG1heCA9IG1pbjtcblxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgZG90ID0gdmVydGljZXNbaV0ueCAqIGF4aXMueCArIHZlcnRpY2VzW2ldLnkgKiBheGlzLnk7XG5cbiAgICAgICAgICAgIGlmIChkb3QgPiBtYXgpIHsgXG4gICAgICAgICAgICAgICAgbWF4ID0gZG90OyBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZG90IDwgbWluKSB7IFxuICAgICAgICAgICAgICAgIG1pbiA9IGRvdDsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwcm9qZWN0aW9uLm1pbiA9IG1pbjtcbiAgICAgICAgcHJvamVjdGlvbi5tYXggPSBtYXg7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEZpbmRzIHN1cHBvcnRpbmcgdmVydGljZXMgZ2l2ZW4gdHdvIGJvZGllcyBhbG9uZyBhIGdpdmVuIGRpcmVjdGlvbiB1c2luZyBoaWxsLWNsaW1iaW5nLlxuICAgICAqIEBtZXRob2QgX2ZpbmRTdXBwb3J0c1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5QVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keUJcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gbm9ybWFsXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRpcmVjdGlvblxuICAgICAqIEByZXR1cm4gW3ZlY3Rvcl1cbiAgICAgKi9cbiAgICBDb2xsaXNpb24uX2ZpbmRTdXBwb3J0cyA9IGZ1bmN0aW9uKGJvZHlBLCBib2R5Qiwgbm9ybWFsLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIHZlcnRpY2VzID0gYm9keUIudmVydGljZXMsXG4gICAgICAgICAgICB2ZXJ0aWNlc0xlbmd0aCA9IHZlcnRpY2VzLmxlbmd0aCxcbiAgICAgICAgICAgIGJvZHlBUG9zaXRpb25YID0gYm9keUEucG9zaXRpb24ueCxcbiAgICAgICAgICAgIGJvZHlBUG9zaXRpb25ZID0gYm9keUEucG9zaXRpb24ueSxcbiAgICAgICAgICAgIG5vcm1hbFggPSBub3JtYWwueCAqIGRpcmVjdGlvbixcbiAgICAgICAgICAgIG5vcm1hbFkgPSBub3JtYWwueSAqIGRpcmVjdGlvbixcbiAgICAgICAgICAgIG5lYXJlc3REaXN0YW5jZSA9IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICB2ZXJ0ZXhBLFxuICAgICAgICAgICAgdmVydGV4QixcbiAgICAgICAgICAgIHZlcnRleEMsXG4gICAgICAgICAgICBkaXN0YW5jZSxcbiAgICAgICAgICAgIGo7XG5cbiAgICAgICAgLy8gZmluZCBkZWVwZXN0IHZlcnRleCByZWxhdGl2ZSB0byB0aGUgYXhpc1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgdmVydGljZXNMZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgdmVydGV4QiA9IHZlcnRpY2VzW2pdO1xuICAgICAgICAgICAgZGlzdGFuY2UgPSBub3JtYWxYICogKGJvZHlBUG9zaXRpb25YIC0gdmVydGV4Qi54KSArIG5vcm1hbFkgKiAoYm9keUFQb3NpdGlvblkgLSB2ZXJ0ZXhCLnkpO1xuXG4gICAgICAgICAgICAvLyBjb252ZXggaGlsbC1jbGltYmluZ1xuICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgbmVhcmVzdERpc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgbmVhcmVzdERpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgdmVydGV4QSA9IHZlcnRleEI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtZWFzdXJlIG5leHQgdmVydGV4XG4gICAgICAgIHZlcnRleEMgPSB2ZXJ0aWNlc1sodmVydGljZXNMZW5ndGggKyB2ZXJ0ZXhBLmluZGV4IC0gMSkgJSB2ZXJ0aWNlc0xlbmd0aF07XG4gICAgICAgIG5lYXJlc3REaXN0YW5jZSA9IG5vcm1hbFggKiAoYm9keUFQb3NpdGlvblggLSB2ZXJ0ZXhDLngpICsgbm9ybWFsWSAqIChib2R5QVBvc2l0aW9uWSAtIHZlcnRleEMueSk7XG5cbiAgICAgICAgLy8gY29tcGFyZSB3aXRoIHByZXZpb3VzIHZlcnRleFxuICAgICAgICB2ZXJ0ZXhCID0gdmVydGljZXNbKHZlcnRleEEuaW5kZXggKyAxKSAlIHZlcnRpY2VzTGVuZ3RoXTtcbiAgICAgICAgaWYgKG5vcm1hbFggKiAoYm9keUFQb3NpdGlvblggLSB2ZXJ0ZXhCLngpICsgbm9ybWFsWSAqIChib2R5QVBvc2l0aW9uWSAtIHZlcnRleEIueSkgPCBuZWFyZXN0RGlzdGFuY2UpIHtcbiAgICAgICAgICAgIF9zdXBwb3J0c1swXSA9IHZlcnRleEE7XG4gICAgICAgICAgICBfc3VwcG9ydHNbMV0gPSB2ZXJ0ZXhCO1xuXG4gICAgICAgICAgICByZXR1cm4gX3N1cHBvcnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgX3N1cHBvcnRzWzBdID0gdmVydGV4QTtcbiAgICAgICAgX3N1cHBvcnRzWzFdID0gdmVydGV4QztcblxuICAgICAgICByZXR1cm4gX3N1cHBvcnRzO1xuICAgIH07XG5cbiAgICAvKlxuICAgICpcbiAgICAqICBQcm9wZXJ0aWVzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBwYWlyIHVzaW5nIHRoaXMgY29sbGlzaW9uIHJlY29yZCwgaWYgdGhlcmUgaXMgb25lLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBhaXJcbiAgICAgKiBAdHlwZSB7cGFpcnxudWxsfVxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0aGF0IGluZGljYXRlcyBpZiB0aGUgYm9kaWVzIHdlcmUgY29sbGlkaW5nIHdoZW4gdGhlIGNvbGxpc2lvbiB3YXMgbGFzdCB1cGRhdGVkLlxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSBjb2xsaWRlZFxuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZpcnN0IGJvZHkgcGFydCByZXByZXNlbnRlZCBieSB0aGUgY29sbGlzaW9uIChzZWUgYWxzbyBgY29sbGlzaW9uLnBhcmVudEFgKS5cbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkgYm9keUFcbiAgICAgKiBAdHlwZSBib2R5XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2Vjb25kIGJvZHkgcGFydCByZXByZXNlbnRlZCBieSB0aGUgY29sbGlzaW9uIChzZWUgYWxzbyBgY29sbGlzaW9uLnBhcmVudEJgKS5cbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkgYm9keUJcbiAgICAgKiBAdHlwZSBib2R5XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZmlyc3QgYm9keSByZXByZXNlbnRlZCBieSB0aGUgY29sbGlzaW9uIChpLmUuIGBjb2xsaXNpb24uYm9keUEucGFyZW50YCkuXG4gICAgICogXG4gICAgICogQHByb3BlcnR5IHBhcmVudEFcbiAgICAgKiBAdHlwZSBib2R5XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2Vjb25kIGJvZHkgcmVwcmVzZW50ZWQgYnkgdGhlIGNvbGxpc2lvbiAoaS5lLiBgY29sbGlzaW9uLmJvZHlCLnBhcmVudGApLlxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSBwYXJlbnRCXG4gICAgICogQHR5cGUgYm9keVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IHJlcHJlc2VudHMgdGhlIG1pbmltdW0gc2VwYXJhdGluZyBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBib2RpZXMgYWxvbmcgdGhlIGNvbGxpc2lvbiBub3JtYWwuXG4gICAgICpcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKiBAcHJvcGVydHkgZGVwdGhcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIG5vcm1hbGlzZWQgYFZlY3RvcmAgdGhhdCByZXByZXNlbnRzIHRoZSBkaXJlY3Rpb24gYmV0d2VlbiB0aGUgYm9kaWVzIHRoYXQgcHJvdmlkZXMgdGhlIG1pbmltdW0gc2VwYXJhdGluZyBkaXN0YW5jZS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBub3JtYWxcbiAgICAgKiBAdHlwZSB2ZWN0b3JcbiAgICAgKiBAZGVmYXVsdCB7IHg6IDAsIHk6IDAgfVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBub3JtYWxpc2VkIGBWZWN0b3JgIHRoYXQgaXMgdGhlIHRhbmdlbnQgZGlyZWN0aW9uIHRvIHRoZSBjb2xsaXNpb24gbm9ybWFsLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHRhbmdlbnRcbiAgICAgKiBAdHlwZSB2ZWN0b3JcbiAgICAgKiBAZGVmYXVsdCB7IHg6IDAsIHk6IDAgfVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgVmVjdG9yYCB0aGF0IHJlcHJlc2VudHMgdGhlIGRpcmVjdGlvbiBhbmQgZGVwdGggb2YgdGhlIGNvbGxpc2lvbi5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwZW5ldHJhdGlvblxuICAgICAqIEB0eXBlIHZlY3RvclxuICAgICAqIEBkZWZhdWx0IHsgeDogMCwgeTogMCB9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBib2R5IHZlcnRpY2VzIHRoYXQgcmVwcmVzZW50IHRoZSBzdXBwb3J0IHBvaW50cyBpbiB0aGUgY29sbGlzaW9uLlxuICAgICAqIFRoZXNlIGFyZSB0aGUgZGVlcGVzdCB2ZXJ0aWNlcyAoYWxvbmcgdGhlIGNvbGxpc2lvbiBub3JtYWwpIG9mIGVhY2ggYm9keSB0aGF0IGFyZSBjb250YWluZWQgYnkgdGhlIG90aGVyIGJvZHkncyB2ZXJ0aWNlcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBzdXBwb3J0c1xuICAgICAqIEB0eXBlIHZlY3RvcltdXG4gICAgICogQGRlZmF1bHQgW11cbiAgICAgKi9cblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLlBhaXJgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIGNvbGxpc2lvbiBwYWlycy5cbipcbiogQGNsYXNzIFBhaXJcbiovXG5cbnZhciBQYWlyID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gUGFpcjtcblxudmFyIENvbnRhY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KTtcblxuKGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBwYWlyLlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHtjb2xsaXNpb259IGNvbGxpc2lvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lc3RhbXBcbiAgICAgKiBAcmV0dXJuIHtwYWlyfSBBIG5ldyBwYWlyXG4gICAgICovXG4gICAgUGFpci5jcmVhdGUgPSBmdW5jdGlvbihjb2xsaXNpb24sIHRpbWVzdGFtcCkge1xuICAgICAgICB2YXIgYm9keUEgPSBjb2xsaXNpb24uYm9keUEsXG4gICAgICAgICAgICBib2R5QiA9IGNvbGxpc2lvbi5ib2R5QjtcblxuICAgICAgICB2YXIgcGFpciA9IHtcbiAgICAgICAgICAgIGlkOiBQYWlyLmlkKGJvZHlBLCBib2R5QiksXG4gICAgICAgICAgICBib2R5QTogYm9keUEsXG4gICAgICAgICAgICBib2R5QjogYm9keUIsXG4gICAgICAgICAgICBjb2xsaXNpb246IGNvbGxpc2lvbixcbiAgICAgICAgICAgIGNvbnRhY3RzOiBbXSxcbiAgICAgICAgICAgIGFjdGl2ZUNvbnRhY3RzOiBbXSxcbiAgICAgICAgICAgIHNlcGFyYXRpb246IDAsXG4gICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpcm1lZEFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIGlzU2Vuc29yOiBib2R5QS5pc1NlbnNvciB8fCBib2R5Qi5pc1NlbnNvcixcbiAgICAgICAgICAgIHRpbWVDcmVhdGVkOiB0aW1lc3RhbXAsXG4gICAgICAgICAgICB0aW1lVXBkYXRlZDogdGltZXN0YW1wLFxuICAgICAgICAgICAgaW52ZXJzZU1hc3M6IDAsXG4gICAgICAgICAgICBmcmljdGlvbjogMCxcbiAgICAgICAgICAgIGZyaWN0aW9uU3RhdGljOiAwLFxuICAgICAgICAgICAgcmVzdGl0dXRpb246IDAsXG4gICAgICAgICAgICBzbG9wOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgUGFpci51cGRhdGUocGFpciwgY29sbGlzaW9uLCB0aW1lc3RhbXApO1xuXG4gICAgICAgIHJldHVybiBwYWlyO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGEgcGFpciBnaXZlbiBhIGNvbGxpc2lvbi5cbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVxuICAgICAqIEBwYXJhbSB7cGFpcn0gcGFpclxuICAgICAqIEBwYXJhbSB7Y29sbGlzaW9ufSBjb2xsaXNpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZXN0YW1wXG4gICAgICovXG4gICAgUGFpci51cGRhdGUgPSBmdW5jdGlvbihwYWlyLCBjb2xsaXNpb24sIHRpbWVzdGFtcCkge1xuICAgICAgICB2YXIgY29udGFjdHMgPSBwYWlyLmNvbnRhY3RzLFxuICAgICAgICAgICAgc3VwcG9ydHMgPSBjb2xsaXNpb24uc3VwcG9ydHMsXG4gICAgICAgICAgICBhY3RpdmVDb250YWN0cyA9IHBhaXIuYWN0aXZlQ29udGFjdHMsXG4gICAgICAgICAgICBwYXJlbnRBID0gY29sbGlzaW9uLnBhcmVudEEsXG4gICAgICAgICAgICBwYXJlbnRCID0gY29sbGlzaW9uLnBhcmVudEIsXG4gICAgICAgICAgICBwYXJlbnRBVmVydGljZXNMZW5ndGggPSBwYXJlbnRBLnZlcnRpY2VzLmxlbmd0aDtcbiAgICAgICAgXG4gICAgICAgIHBhaXIuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICBwYWlyLnRpbWVVcGRhdGVkID0gdGltZXN0YW1wO1xuICAgICAgICBwYWlyLmNvbGxpc2lvbiA9IGNvbGxpc2lvbjtcbiAgICAgICAgcGFpci5zZXBhcmF0aW9uID0gY29sbGlzaW9uLmRlcHRoO1xuICAgICAgICBwYWlyLmludmVyc2VNYXNzID0gcGFyZW50QS5pbnZlcnNlTWFzcyArIHBhcmVudEIuaW52ZXJzZU1hc3M7XG4gICAgICAgIHBhaXIuZnJpY3Rpb24gPSBwYXJlbnRBLmZyaWN0aW9uIDwgcGFyZW50Qi5mcmljdGlvbiA/IHBhcmVudEEuZnJpY3Rpb24gOiBwYXJlbnRCLmZyaWN0aW9uO1xuICAgICAgICBwYWlyLmZyaWN0aW9uU3RhdGljID0gcGFyZW50QS5mcmljdGlvblN0YXRpYyA+IHBhcmVudEIuZnJpY3Rpb25TdGF0aWMgPyBwYXJlbnRBLmZyaWN0aW9uU3RhdGljIDogcGFyZW50Qi5mcmljdGlvblN0YXRpYztcbiAgICAgICAgcGFpci5yZXN0aXR1dGlvbiA9IHBhcmVudEEucmVzdGl0dXRpb24gPiBwYXJlbnRCLnJlc3RpdHV0aW9uID8gcGFyZW50QS5yZXN0aXR1dGlvbiA6IHBhcmVudEIucmVzdGl0dXRpb247XG4gICAgICAgIHBhaXIuc2xvcCA9IHBhcmVudEEuc2xvcCA+IHBhcmVudEIuc2xvcCA/IHBhcmVudEEuc2xvcCA6IHBhcmVudEIuc2xvcDtcblxuICAgICAgICBjb2xsaXNpb24ucGFpciA9IHBhaXI7XG4gICAgICAgIGFjdGl2ZUNvbnRhY3RzLmxlbmd0aCA9IDA7XG4gICAgICAgIFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN1cHBvcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgc3VwcG9ydCA9IHN1cHBvcnRzW2ldLFxuICAgICAgICAgICAgICAgIGNvbnRhY3RJZCA9IHN1cHBvcnQuYm9keSA9PT0gcGFyZW50QSA/IHN1cHBvcnQuaW5kZXggOiBwYXJlbnRBVmVydGljZXNMZW5ndGggKyBzdXBwb3J0LmluZGV4LFxuICAgICAgICAgICAgICAgIGNvbnRhY3QgPSBjb250YWN0c1tjb250YWN0SWRdO1xuXG4gICAgICAgICAgICBpZiAoY29udGFjdCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNvbnRhY3RzLnB1c2goY29udGFjdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNvbnRhY3RzLnB1c2goY29udGFjdHNbY29udGFjdElkXSA9IENvbnRhY3QuY3JlYXRlKHN1cHBvcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgLyoqXG4gICAgICogU2V0IGEgcGFpciBhcyBhY3RpdmUgb3IgaW5hY3RpdmUuXG4gICAgICogQG1ldGhvZCBzZXRBY3RpdmVcbiAgICAgKiBAcGFyYW0ge3BhaXJ9IHBhaXJcbiAgICAgKiBAcGFyYW0ge2Jvb2x9IGlzQWN0aXZlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVzdGFtcFxuICAgICAqL1xuICAgIFBhaXIuc2V0QWN0aXZlID0gZnVuY3Rpb24ocGFpciwgaXNBY3RpdmUsIHRpbWVzdGFtcCkge1xuICAgICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIHBhaXIuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgcGFpci50aW1lVXBkYXRlZCA9IHRpbWVzdGFtcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhaXIuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHBhaXIuYWN0aXZlQ29udGFjdHMubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGlkIGZvciB0aGUgZ2l2ZW4gcGFpci5cbiAgICAgKiBAbWV0aG9kIGlkXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5QVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keUJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFVuaXF1ZSBwYWlySWRcbiAgICAgKi9cbiAgICBQYWlyLmlkID0gZnVuY3Rpb24oYm9keUEsIGJvZHlCKSB7XG4gICAgICAgIGlmIChib2R5QS5pZCA8IGJvZHlCLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gJ0EnICsgYm9keUEuaWQgKyAnQicgKyBib2R5Qi5pZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnQScgKyBib2R5Qi5pZCArICdCJyArIGJvZHlBLmlkO1xuICAgICAgICB9XG4gICAgfTtcblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDEwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5Db25zdHJhaW50YCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBjb25zdHJhaW50cy5cbiogQ29uc3RyYWludHMgYXJlIHVzZWQgZm9yIHNwZWNpZnlpbmcgdGhhdCBhIGZpeGVkIGRpc3RhbmNlIG11c3QgYmUgbWFpbnRhaW5lZCBiZXR3ZWVuIHR3byBib2RpZXMgKG9yIGEgYm9keSBhbmQgYSBmaXhlZCB3b3JsZC1zcGFjZSBwb3NpdGlvbikuXG4qIFRoZSBzdGlmZm5lc3Mgb2YgY29uc3RyYWludHMgY2FuIGJlIG1vZGlmaWVkIHRvIGNyZWF0ZSBzcHJpbmdzIG9yIGVsYXN0aWMuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBDb25zdHJhaW50XG4qL1xuXG52YXIgQ29uc3RyYWludCA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnN0cmFpbnQ7XG5cbnZhciBWZXJ0aWNlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG52YXIgVmVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbnZhciBTbGVlcGluZyA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG52YXIgQm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbnZhciBBeGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgQ29uc3RyYWludC5fd2FybWluZyA9IDAuNDtcbiAgICBDb25zdHJhaW50Ll90b3JxdWVEYW1wZW4gPSAxO1xuICAgIENvbnN0cmFpbnQuX21pbkxlbmd0aCA9IDAuMDAwMDAxO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBjb25zdHJhaW50LlxuICAgICAqIEFsbCBwcm9wZXJ0aWVzIGhhdmUgZGVmYXVsdCB2YWx1ZXMsIGFuZCBtYW55IGFyZSBwcmUtY2FsY3VsYXRlZCBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIG90aGVyIHByb3BlcnRpZXMuXG4gICAgICogVG8gc2ltdWxhdGUgYSByZXZvbHV0ZSBjb25zdHJhaW50IChvciBwaW4gam9pbnQpIHNldCBgbGVuZ3RoOiAwYCBhbmQgYSBoaWdoIGBzdGlmZm5lc3NgIHZhbHVlIChlLmcuIGAwLjdgIG9yIGFib3ZlKS5cbiAgICAgKiBJZiB0aGUgY29uc3RyYWludCBpcyB1bnN0YWJsZSwgdHJ5IGxvd2VyaW5nIHRoZSBgc3RpZmZuZXNzYCB2YWx1ZSBhbmQgLyBvciBpbmNyZWFzaW5nIGBlbmdpbmUuY29uc3RyYWludEl0ZXJhdGlvbnNgLlxuICAgICAqIEZvciBjb21wb3VuZCBib2RpZXMsIGNvbnN0cmFpbnRzIG11c3QgYmUgYXBwbGllZCB0byB0aGUgcGFyZW50IGJvZHkgKG5vdCBvbmUgb2YgaXRzIHBhcnRzKS5cbiAgICAgKiBTZWUgdGhlIHByb3BlcnRpZXMgc2VjdGlvbiBiZWxvdyBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gd2hhdCB5b3UgY2FuIHBhc3MgdmlhIHRoZSBgb3B0aW9uc2Agb2JqZWN0LlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHt9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtjb25zdHJhaW50fSBjb25zdHJhaW50XG4gICAgICovXG4gICAgQ29uc3RyYWludC5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHZhciBjb25zdHJhaW50ID0gb3B0aW9ucztcblxuICAgICAgICAvLyBpZiBib2RpZXMgZGVmaW5lZCBidXQgbm8gcG9pbnRzLCB1c2UgYm9keSBjZW50cmVcbiAgICAgICAgaWYgKGNvbnN0cmFpbnQuYm9keUEgJiYgIWNvbnN0cmFpbnQucG9pbnRBKVxuICAgICAgICAgICAgY29uc3RyYWludC5wb2ludEEgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgaWYgKGNvbnN0cmFpbnQuYm9keUIgJiYgIWNvbnN0cmFpbnQucG9pbnRCKVxuICAgICAgICAgICAgY29uc3RyYWludC5wb2ludEIgPSB7IHg6IDAsIHk6IDAgfTtcblxuICAgICAgICAvLyBjYWxjdWxhdGUgc3RhdGljIGxlbmd0aCB1c2luZyBpbml0aWFsIHdvcmxkIHNwYWNlIHBvaW50c1xuICAgICAgICB2YXIgaW5pdGlhbFBvaW50QSA9IGNvbnN0cmFpbnQuYm9keUEgPyBWZWN0b3IuYWRkKGNvbnN0cmFpbnQuYm9keUEucG9zaXRpb24sIGNvbnN0cmFpbnQucG9pbnRBKSA6IGNvbnN0cmFpbnQucG9pbnRBLFxuICAgICAgICAgICAgaW5pdGlhbFBvaW50QiA9IGNvbnN0cmFpbnQuYm9keUIgPyBWZWN0b3IuYWRkKGNvbnN0cmFpbnQuYm9keUIucG9zaXRpb24sIGNvbnN0cmFpbnQucG9pbnRCKSA6IGNvbnN0cmFpbnQucG9pbnRCLFxuICAgICAgICAgICAgbGVuZ3RoID0gVmVjdG9yLm1hZ25pdHVkZShWZWN0b3Iuc3ViKGluaXRpYWxQb2ludEEsIGluaXRpYWxQb2ludEIpKTtcbiAgICBcbiAgICAgICAgY29uc3RyYWludC5sZW5ndGggPSB0eXBlb2YgY29uc3RyYWludC5sZW5ndGggIT09ICd1bmRlZmluZWQnID8gY29uc3RyYWludC5sZW5ndGggOiBsZW5ndGg7XG5cbiAgICAgICAgLy8gb3B0aW9uIGRlZmF1bHRzXG4gICAgICAgIGNvbnN0cmFpbnQuaWQgPSBjb25zdHJhaW50LmlkIHx8IENvbW1vbi5uZXh0SWQoKTtcbiAgICAgICAgY29uc3RyYWludC5sYWJlbCA9IGNvbnN0cmFpbnQubGFiZWwgfHwgJ0NvbnN0cmFpbnQnO1xuICAgICAgICBjb25zdHJhaW50LnR5cGUgPSAnY29uc3RyYWludCc7XG4gICAgICAgIGNvbnN0cmFpbnQuc3RpZmZuZXNzID0gY29uc3RyYWludC5zdGlmZm5lc3MgfHwgKGNvbnN0cmFpbnQubGVuZ3RoID4gMCA/IDEgOiAwLjcpO1xuICAgICAgICBjb25zdHJhaW50LmRhbXBpbmcgPSBjb25zdHJhaW50LmRhbXBpbmcgfHwgMDtcbiAgICAgICAgY29uc3RyYWludC5hbmd1bGFyU3RpZmZuZXNzID0gY29uc3RyYWludC5hbmd1bGFyU3RpZmZuZXNzIHx8IDA7XG4gICAgICAgIGNvbnN0cmFpbnQuYW5nbGVBID0gY29uc3RyYWludC5ib2R5QSA/IGNvbnN0cmFpbnQuYm9keUEuYW5nbGUgOiBjb25zdHJhaW50LmFuZ2xlQTtcbiAgICAgICAgY29uc3RyYWludC5hbmdsZUIgPSBjb25zdHJhaW50LmJvZHlCID8gY29uc3RyYWludC5ib2R5Qi5hbmdsZSA6IGNvbnN0cmFpbnQuYW5nbGVCO1xuICAgICAgICBjb25zdHJhaW50LnBsdWdpbiA9IHt9O1xuXG4gICAgICAgIC8vIHJlbmRlclxuICAgICAgICB2YXIgcmVuZGVyID0ge1xuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGxpbmVXaWR0aDogMixcbiAgICAgICAgICAgIHN0cm9rZVN0eWxlOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgICAgICBhbmNob3JzOiB0cnVlXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGNvbnN0cmFpbnQubGVuZ3RoID09PSAwICYmIGNvbnN0cmFpbnQuc3RpZmZuZXNzID4gMC4xKSB7XG4gICAgICAgICAgICByZW5kZXIudHlwZSA9ICdwaW4nO1xuICAgICAgICAgICAgcmVuZGVyLmFuY2hvcnMgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChjb25zdHJhaW50LnN0aWZmbmVzcyA8IDAuOSkge1xuICAgICAgICAgICAgcmVuZGVyLnR5cGUgPSAnc3ByaW5nJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0cmFpbnQucmVuZGVyID0gQ29tbW9uLmV4dGVuZChyZW5kZXIsIGNvbnN0cmFpbnQucmVuZGVyKTtcblxuICAgICAgICByZXR1cm4gY29uc3RyYWludDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHJlcGFyZXMgZm9yIHNvbHZpbmcgYnkgY29uc3RyYWludCB3YXJtaW5nLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBwcmVTb2x2ZUFsbFxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKi9cbiAgICBDb25zdHJhaW50LnByZVNvbHZlQWxsID0gZnVuY3Rpb24oYm9kaWVzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXSxcbiAgICAgICAgICAgICAgICBpbXB1bHNlID0gYm9keS5jb25zdHJhaW50SW1wdWxzZTtcblxuICAgICAgICAgICAgaWYgKGJvZHkuaXNTdGF0aWMgfHwgKGltcHVsc2UueCA9PT0gMCAmJiBpbXB1bHNlLnkgPT09IDAgJiYgaW1wdWxzZS5hbmdsZSA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYm9keS5wb3NpdGlvbi54ICs9IGltcHVsc2UueDtcbiAgICAgICAgICAgIGJvZHkucG9zaXRpb24ueSArPSBpbXB1bHNlLnk7XG4gICAgICAgICAgICBib2R5LmFuZ2xlICs9IGltcHVsc2UuYW5nbGU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU29sdmVzIGFsbCBjb25zdHJhaW50cyBpbiBhIGxpc3Qgb2YgY29sbGlzaW9ucy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2Qgc29sdmVBbGxcbiAgICAgKiBAcGFyYW0ge2NvbnN0cmFpbnRbXX0gY29uc3RyYWludHNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVNjYWxlXG4gICAgICovXG4gICAgQ29uc3RyYWludC5zb2x2ZUFsbCA9IGZ1bmN0aW9uKGNvbnN0cmFpbnRzLCB0aW1lU2NhbGUpIHtcbiAgICAgICAgLy8gU29sdmUgZml4ZWQgY29uc3RyYWludHMgZmlyc3QuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29uc3RyYWludHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBjb25zdHJhaW50ID0gY29uc3RyYWludHNbaV0sXG4gICAgICAgICAgICAgICAgZml4ZWRBID0gIWNvbnN0cmFpbnQuYm9keUEgfHwgKGNvbnN0cmFpbnQuYm9keUEgJiYgY29uc3RyYWludC5ib2R5QS5pc1N0YXRpYyksXG4gICAgICAgICAgICAgICAgZml4ZWRCID0gIWNvbnN0cmFpbnQuYm9keUIgfHwgKGNvbnN0cmFpbnQuYm9keUIgJiYgY29uc3RyYWludC5ib2R5Qi5pc1N0YXRpYyk7XG5cbiAgICAgICAgICAgIGlmIChmaXhlZEEgfHwgZml4ZWRCKSB7XG4gICAgICAgICAgICAgICAgQ29uc3RyYWludC5zb2x2ZShjb25zdHJhaW50c1tpXSwgdGltZVNjYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNvbHZlIGZyZWUgY29uc3RyYWludHMgbGFzdC5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvbnN0cmFpbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdHJhaW50ID0gY29uc3RyYWludHNbaV07XG4gICAgICAgICAgICBmaXhlZEEgPSAhY29uc3RyYWludC5ib2R5QSB8fCAoY29uc3RyYWludC5ib2R5QSAmJiBjb25zdHJhaW50LmJvZHlBLmlzU3RhdGljKTtcbiAgICAgICAgICAgIGZpeGVkQiA9ICFjb25zdHJhaW50LmJvZHlCIHx8IChjb25zdHJhaW50LmJvZHlCICYmIGNvbnN0cmFpbnQuYm9keUIuaXNTdGF0aWMpO1xuXG4gICAgICAgICAgICBpZiAoIWZpeGVkQSAmJiAhZml4ZWRCKSB7XG4gICAgICAgICAgICAgICAgQ29uc3RyYWludC5zb2x2ZShjb25zdHJhaW50c1tpXSwgdGltZVNjYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTb2x2ZXMgYSBkaXN0YW5jZSBjb25zdHJhaW50IHdpdGggR2F1c3MtU2llZGVsIG1ldGhvZC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2Qgc29sdmVcbiAgICAgKiBAcGFyYW0ge2NvbnN0cmFpbnR9IGNvbnN0cmFpbnRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVNjYWxlXG4gICAgICovXG4gICAgQ29uc3RyYWludC5zb2x2ZSA9IGZ1bmN0aW9uKGNvbnN0cmFpbnQsIHRpbWVTY2FsZSkge1xuICAgICAgICB2YXIgYm9keUEgPSBjb25zdHJhaW50LmJvZHlBLFxuICAgICAgICAgICAgYm9keUIgPSBjb25zdHJhaW50LmJvZHlCLFxuICAgICAgICAgICAgcG9pbnRBID0gY29uc3RyYWludC5wb2ludEEsXG4gICAgICAgICAgICBwb2ludEIgPSBjb25zdHJhaW50LnBvaW50QjtcblxuICAgICAgICBpZiAoIWJvZHlBICYmICFib2R5QilcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAvLyB1cGRhdGUgcmVmZXJlbmNlIGFuZ2xlXG4gICAgICAgIGlmIChib2R5QSAmJiAhYm9keUEuaXNTdGF0aWMpIHtcbiAgICAgICAgICAgIFZlY3Rvci5yb3RhdGUocG9pbnRBLCBib2R5QS5hbmdsZSAtIGNvbnN0cmFpbnQuYW5nbGVBLCBwb2ludEEpO1xuICAgICAgICAgICAgY29uc3RyYWludC5hbmdsZUEgPSBib2R5QS5hbmdsZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gdXBkYXRlIHJlZmVyZW5jZSBhbmdsZVxuICAgICAgICBpZiAoYm9keUIgJiYgIWJvZHlCLmlzU3RhdGljKSB7XG4gICAgICAgICAgICBWZWN0b3Iucm90YXRlKHBvaW50QiwgYm9keUIuYW5nbGUgLSBjb25zdHJhaW50LmFuZ2xlQiwgcG9pbnRCKTtcbiAgICAgICAgICAgIGNvbnN0cmFpbnQuYW5nbGVCID0gYm9keUIuYW5nbGU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcG9pbnRBV29ybGQgPSBwb2ludEEsXG4gICAgICAgICAgICBwb2ludEJXb3JsZCA9IHBvaW50QjtcblxuICAgICAgICBpZiAoYm9keUEpIHBvaW50QVdvcmxkID0gVmVjdG9yLmFkZChib2R5QS5wb3NpdGlvbiwgcG9pbnRBKTtcbiAgICAgICAgaWYgKGJvZHlCKSBwb2ludEJXb3JsZCA9IFZlY3Rvci5hZGQoYm9keUIucG9zaXRpb24sIHBvaW50Qik7XG5cbiAgICAgICAgaWYgKCFwb2ludEFXb3JsZCB8fCAhcG9pbnRCV29ybGQpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgdmFyIGRlbHRhID0gVmVjdG9yLnN1Yihwb2ludEFXb3JsZCwgcG9pbnRCV29ybGQpLFxuICAgICAgICAgICAgY3VycmVudExlbmd0aCA9IFZlY3Rvci5tYWduaXR1ZGUoZGVsdGEpO1xuXG4gICAgICAgIC8vIHByZXZlbnQgc2luZ3VsYXJpdHlcbiAgICAgICAgaWYgKGN1cnJlbnRMZW5ndGggPCBDb25zdHJhaW50Ll9taW5MZW5ndGgpIHtcbiAgICAgICAgICAgIGN1cnJlbnRMZW5ndGggPSBDb25zdHJhaW50Ll9taW5MZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzb2x2ZSBkaXN0YW5jZSBjb25zdHJhaW50IHdpdGggR2F1c3MtU2llZGVsIG1ldGhvZFxuICAgICAgICB2YXIgZGlmZmVyZW5jZSA9IChjdXJyZW50TGVuZ3RoIC0gY29uc3RyYWludC5sZW5ndGgpIC8gY3VycmVudExlbmd0aCxcbiAgICAgICAgICAgIHN0aWZmbmVzcyA9IGNvbnN0cmFpbnQuc3RpZmZuZXNzIDwgMSA/IGNvbnN0cmFpbnQuc3RpZmZuZXNzICogdGltZVNjYWxlIDogY29uc3RyYWludC5zdGlmZm5lc3MsXG4gICAgICAgICAgICBmb3JjZSA9IFZlY3Rvci5tdWx0KGRlbHRhLCBkaWZmZXJlbmNlICogc3RpZmZuZXNzKSxcbiAgICAgICAgICAgIG1hc3NUb3RhbCA9IChib2R5QSA/IGJvZHlBLmludmVyc2VNYXNzIDogMCkgKyAoYm9keUIgPyBib2R5Qi5pbnZlcnNlTWFzcyA6IDApLFxuICAgICAgICAgICAgaW5lcnRpYVRvdGFsID0gKGJvZHlBID8gYm9keUEuaW52ZXJzZUluZXJ0aWEgOiAwKSArIChib2R5QiA/IGJvZHlCLmludmVyc2VJbmVydGlhIDogMCksXG4gICAgICAgICAgICByZXNpc3RhbmNlVG90YWwgPSBtYXNzVG90YWwgKyBpbmVydGlhVG90YWwsXG4gICAgICAgICAgICB0b3JxdWUsXG4gICAgICAgICAgICBzaGFyZSxcbiAgICAgICAgICAgIG5vcm1hbCxcbiAgICAgICAgICAgIG5vcm1hbFZlbG9jaXR5LFxuICAgICAgICAgICAgcmVsYXRpdmVWZWxvY2l0eTtcblxuICAgICAgICBpZiAoY29uc3RyYWludC5kYW1waW5nKSB7XG4gICAgICAgICAgICB2YXIgemVybyA9IFZlY3Rvci5jcmVhdGUoKTtcbiAgICAgICAgICAgIG5vcm1hbCA9IFZlY3Rvci5kaXYoZGVsdGEsIGN1cnJlbnRMZW5ndGgpO1xuXG4gICAgICAgICAgICByZWxhdGl2ZVZlbG9jaXR5ID0gVmVjdG9yLnN1YihcbiAgICAgICAgICAgICAgICBib2R5QiAmJiBWZWN0b3Iuc3ViKGJvZHlCLnBvc2l0aW9uLCBib2R5Qi5wb3NpdGlvblByZXYpIHx8IHplcm8sXG4gICAgICAgICAgICAgICAgYm9keUEgJiYgVmVjdG9yLnN1Yihib2R5QS5wb3NpdGlvbiwgYm9keUEucG9zaXRpb25QcmV2KSB8fCB6ZXJvXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBub3JtYWxWZWxvY2l0eSA9IFZlY3Rvci5kb3Qobm9ybWFsLCByZWxhdGl2ZVZlbG9jaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2R5QSAmJiAhYm9keUEuaXNTdGF0aWMpIHtcbiAgICAgICAgICAgIHNoYXJlID0gYm9keUEuaW52ZXJzZU1hc3MgLyBtYXNzVG90YWw7XG5cbiAgICAgICAgICAgIC8vIGtlZXAgdHJhY2sgb2YgYXBwbGllZCBpbXB1bHNlcyBmb3IgcG9zdCBzb2x2aW5nXG4gICAgICAgICAgICBib2R5QS5jb25zdHJhaW50SW1wdWxzZS54IC09IGZvcmNlLnggKiBzaGFyZTtcbiAgICAgICAgICAgIGJvZHlBLmNvbnN0cmFpbnRJbXB1bHNlLnkgLT0gZm9yY2UueSAqIHNoYXJlO1xuXG4gICAgICAgICAgICAvLyBhcHBseSBmb3JjZXNcbiAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uLnggLT0gZm9yY2UueCAqIHNoYXJlO1xuICAgICAgICAgICAgYm9keUEucG9zaXRpb24ueSAtPSBmb3JjZS55ICogc2hhcmU7XG5cbiAgICAgICAgICAgIC8vIGFwcGx5IGRhbXBpbmdcbiAgICAgICAgICAgIGlmIChjb25zdHJhaW50LmRhbXBpbmcpIHtcbiAgICAgICAgICAgICAgICBib2R5QS5wb3NpdGlvblByZXYueCAtPSBjb25zdHJhaW50LmRhbXBpbmcgKiBub3JtYWwueCAqIG5vcm1hbFZlbG9jaXR5ICogc2hhcmU7XG4gICAgICAgICAgICAgICAgYm9keUEucG9zaXRpb25QcmV2LnkgLT0gY29uc3RyYWludC5kYW1waW5nICogbm9ybWFsLnkgKiBub3JtYWxWZWxvY2l0eSAqIHNoYXJlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhcHBseSB0b3JxdWVcbiAgICAgICAgICAgIHRvcnF1ZSA9IChWZWN0b3IuY3Jvc3MocG9pbnRBLCBmb3JjZSkgLyByZXNpc3RhbmNlVG90YWwpICogQ29uc3RyYWludC5fdG9ycXVlRGFtcGVuICogYm9keUEuaW52ZXJzZUluZXJ0aWEgKiAoMSAtIGNvbnN0cmFpbnQuYW5ndWxhclN0aWZmbmVzcyk7XG4gICAgICAgICAgICBib2R5QS5jb25zdHJhaW50SW1wdWxzZS5hbmdsZSAtPSB0b3JxdWU7XG4gICAgICAgICAgICBib2R5QS5hbmdsZSAtPSB0b3JxdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9keUIgJiYgIWJvZHlCLmlzU3RhdGljKSB7XG4gICAgICAgICAgICBzaGFyZSA9IGJvZHlCLmludmVyc2VNYXNzIC8gbWFzc1RvdGFsO1xuXG4gICAgICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIGFwcGxpZWQgaW1wdWxzZXMgZm9yIHBvc3Qgc29sdmluZ1xuICAgICAgICAgICAgYm9keUIuY29uc3RyYWludEltcHVsc2UueCArPSBmb3JjZS54ICogc2hhcmU7XG4gICAgICAgICAgICBib2R5Qi5jb25zdHJhaW50SW1wdWxzZS55ICs9IGZvcmNlLnkgKiBzaGFyZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gYXBwbHkgZm9yY2VzXG4gICAgICAgICAgICBib2R5Qi5wb3NpdGlvbi54ICs9IGZvcmNlLnggKiBzaGFyZTtcbiAgICAgICAgICAgIGJvZHlCLnBvc2l0aW9uLnkgKz0gZm9yY2UueSAqIHNoYXJlO1xuXG4gICAgICAgICAgICAvLyBhcHBseSBkYW1waW5nXG4gICAgICAgICAgICBpZiAoY29uc3RyYWludC5kYW1waW5nKSB7XG4gICAgICAgICAgICAgICAgYm9keUIucG9zaXRpb25QcmV2LnggKz0gY29uc3RyYWludC5kYW1waW5nICogbm9ybWFsLnggKiBub3JtYWxWZWxvY2l0eSAqIHNoYXJlO1xuICAgICAgICAgICAgICAgIGJvZHlCLnBvc2l0aW9uUHJldi55ICs9IGNvbnN0cmFpbnQuZGFtcGluZyAqIG5vcm1hbC55ICogbm9ybWFsVmVsb2NpdHkgKiBzaGFyZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYXBwbHkgdG9ycXVlXG4gICAgICAgICAgICB0b3JxdWUgPSAoVmVjdG9yLmNyb3NzKHBvaW50QiwgZm9yY2UpIC8gcmVzaXN0YW5jZVRvdGFsKSAqIENvbnN0cmFpbnQuX3RvcnF1ZURhbXBlbiAqIGJvZHlCLmludmVyc2VJbmVydGlhICogKDEgLSBjb25zdHJhaW50LmFuZ3VsYXJTdGlmZm5lc3MpO1xuICAgICAgICAgICAgYm9keUIuY29uc3RyYWludEltcHVsc2UuYW5nbGUgKz0gdG9ycXVlO1xuICAgICAgICAgICAgYm9keUIuYW5nbGUgKz0gdG9ycXVlO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYm9keSB1cGRhdGVzIHJlcXVpcmVkIGFmdGVyIHNvbHZpbmcgY29uc3RyYWludHMuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHBvc3RTb2x2ZUFsbFxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKi9cbiAgICBDb25zdHJhaW50LnBvc3RTb2x2ZUFsbCA9IGZ1bmN0aW9uKGJvZGllcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV0sXG4gICAgICAgICAgICAgICAgaW1wdWxzZSA9IGJvZHkuY29uc3RyYWludEltcHVsc2U7XG5cbiAgICAgICAgICAgIGlmIChib2R5LmlzU3RhdGljIHx8IChpbXB1bHNlLnggPT09IDAgJiYgaW1wdWxzZS55ID09PSAwICYmIGltcHVsc2UuYW5nbGUgPT09IDApKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFNsZWVwaW5nLnNldChib2R5LCBmYWxzZSk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBnZW9tZXRyeSBhbmQgcmVzZXRcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keS5wYXJ0c1tqXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBWZXJ0aWNlcy50cmFuc2xhdGUocGFydC52ZXJ0aWNlcywgaW1wdWxzZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydC5wb3NpdGlvbi54ICs9IGltcHVsc2UueDtcbiAgICAgICAgICAgICAgICAgICAgcGFydC5wb3NpdGlvbi55ICs9IGltcHVsc2UueTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaW1wdWxzZS5hbmdsZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBWZXJ0aWNlcy5yb3RhdGUocGFydC52ZXJ0aWNlcywgaW1wdWxzZS5hbmdsZSwgYm9keS5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIEF4ZXMucm90YXRlKHBhcnQuYXhlcywgaW1wdWxzZS5hbmdsZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgVmVjdG9yLnJvdGF0ZUFib3V0KHBhcnQucG9zaXRpb24sIGltcHVsc2UuYW5nbGUsIGJvZHkucG9zaXRpb24sIHBhcnQucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQm91bmRzLnVwZGF0ZShwYXJ0LmJvdW5kcywgcGFydC52ZXJ0aWNlcywgYm9keS52ZWxvY2l0eSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGRhbXBlbiB0aGUgY2FjaGVkIGltcHVsc2UgZm9yIHdhcm1pbmcgbmV4dCBzdGVwXG4gICAgICAgICAgICBpbXB1bHNlLmFuZ2xlICo9IENvbnN0cmFpbnQuX3dhcm1pbmc7XG4gICAgICAgICAgICBpbXB1bHNlLnggKj0gQ29uc3RyYWludC5fd2FybWluZztcbiAgICAgICAgICAgIGltcHVsc2UueSAqPSBDb25zdHJhaW50Ll93YXJtaW5nO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHdvcmxkLXNwYWNlIHBvc2l0aW9uIG9mIGBjb25zdHJhaW50LnBvaW50QWAsIGFjY291bnRpbmcgZm9yIGBjb25zdHJhaW50LmJvZHlBYC5cbiAgICAgKiBAbWV0aG9kIHBvaW50QVdvcmxkXG4gICAgICogQHBhcmFtIHtjb25zdHJhaW50fSBjb25zdHJhaW50XG4gICAgICogQHJldHVybnMge3ZlY3Rvcn0gdGhlIHdvcmxkLXNwYWNlIHBvc2l0aW9uXG4gICAgICovXG4gICAgQ29uc3RyYWludC5wb2ludEFXb3JsZCA9IGZ1bmN0aW9uKGNvbnN0cmFpbnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IChjb25zdHJhaW50LmJvZHlBID8gY29uc3RyYWludC5ib2R5QS5wb3NpdGlvbi54IDogMCkgKyBjb25zdHJhaW50LnBvaW50QS54LFxuICAgICAgICAgICAgeTogKGNvbnN0cmFpbnQuYm9keUEgPyBjb25zdHJhaW50LmJvZHlBLnBvc2l0aW9uLnkgOiAwKSArIGNvbnN0cmFpbnQucG9pbnRBLnlcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgd29ybGQtc3BhY2UgcG9zaXRpb24gb2YgYGNvbnN0cmFpbnQucG9pbnRCYCwgYWNjb3VudGluZyBmb3IgYGNvbnN0cmFpbnQuYm9keUJgLlxuICAgICAqIEBtZXRob2QgcG9pbnRCV29ybGRcbiAgICAgKiBAcGFyYW0ge2NvbnN0cmFpbnR9IGNvbnN0cmFpbnRcbiAgICAgKiBAcmV0dXJucyB7dmVjdG9yfSB0aGUgd29ybGQtc3BhY2UgcG9zaXRpb25cbiAgICAgKi9cbiAgICBDb25zdHJhaW50LnBvaW50QldvcmxkID0gZnVuY3Rpb24oY29uc3RyYWludCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogKGNvbnN0cmFpbnQuYm9keUIgPyBjb25zdHJhaW50LmJvZHlCLnBvc2l0aW9uLnggOiAwKSArIGNvbnN0cmFpbnQucG9pbnRCLngsXG4gICAgICAgICAgICB5OiAoY29uc3RyYWludC5ib2R5QiA/IGNvbnN0cmFpbnQuYm9keUIucG9zaXRpb24ueSA6IDApICsgY29uc3RyYWludC5wb2ludEIueVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKlxuICAgICpcbiAgICAqICBQcm9wZXJ0aWVzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGludGVnZXIgYE51bWJlcmAgdW5pcXVlbHkgaWRlbnRpZnlpbmcgbnVtYmVyIGdlbmVyYXRlZCBpbiBgQ29tcG9zaXRlLmNyZWF0ZWAgYnkgYENvbW1vbi5uZXh0SWRgLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGlkXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBTdHJpbmdgIGRlbm90aW5nIHRoZSB0eXBlIG9mIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB0eXBlXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgXCJjb25zdHJhaW50XCJcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGFyYml0cmFyeSBgU3RyaW5nYCBuYW1lIHRvIGhlbHAgdGhlIHVzZXIgaWRlbnRpZnkgYW5kIG1hbmFnZSBib2RpZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgbGFiZWxcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBcIkNvbnN0cmFpbnRcIlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYE9iamVjdGAgdGhhdCBkZWZpbmVzIHRoZSByZW5kZXJpbmcgcHJvcGVydGllcyB0byBiZSBjb25zdW1lZCBieSB0aGUgbW9kdWxlIGBNYXR0ZXIuUmVuZGVyYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXJcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0aGF0IGluZGljYXRlcyBpZiB0aGUgY29uc3RyYWludCBzaG91bGQgYmUgcmVuZGVyZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnZpc2libGVcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIGxpbmUgd2lkdGggdG8gdXNlIHdoZW4gcmVuZGVyaW5nIHRoZSBjb25zdHJhaW50IG91dGxpbmUuXG4gICAgICogQSB2YWx1ZSBvZiBgMGAgbWVhbnMgbm8gb3V0bGluZSB3aWxsIGJlIHJlbmRlcmVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci5saW5lV2lkdGhcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBTdHJpbmdgIHRoYXQgZGVmaW5lcyB0aGUgc3Ryb2tlIHN0eWxlIHRvIHVzZSB3aGVuIHJlbmRlcmluZyB0aGUgY29uc3RyYWludCBvdXRsaW5lLlxuICAgICAqIEl0IGlzIHRoZSBzYW1lIGFzIHdoZW4gdXNpbmcgYSBjYW52YXMsIHNvIGl0IGFjY2VwdHMgQ1NTIHN0eWxlIHByb3BlcnR5IHZhbHVlcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIuc3Ryb2tlU3R5bGVcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBhIHJhbmRvbSBjb2xvdXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFN0cmluZ2AgdGhhdCBkZWZpbmVzIHRoZSBjb25zdHJhaW50IHJlbmRlcmluZyB0eXBlLiBcbiAgICAgKiBUaGUgcG9zc2libGUgdmFsdWVzIGFyZSAnbGluZScsICdwaW4nLCAnc3ByaW5nJy5cbiAgICAgKiBBbiBhcHByb3ByaWF0ZSByZW5kZXIgdHlwZSB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgY2hvc2VuIHVubGVzcyBvbmUgaXMgZ2l2ZW4gaW4gb3B0aW9ucy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIudHlwZVxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0ICdsaW5lJ1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgQm9vbGVhbmAgdGhhdCBkZWZpbmVzIGlmIHRoZSBjb25zdHJhaW50J3MgYW5jaG9yIHBvaW50cyBzaG91bGQgYmUgcmVuZGVyZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLmFuY2hvcnNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZpcnN0IHBvc3NpYmxlIGBCb2R5YCB0aGF0IHRoaXMgY29uc3RyYWludCBpcyBhdHRhY2hlZCB0by5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBib2R5QVxuICAgICAqIEB0eXBlIGJvZHlcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2Vjb25kIHBvc3NpYmxlIGBCb2R5YCB0aGF0IHRoaXMgY29uc3RyYWludCBpcyBhdHRhY2hlZCB0by5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBib2R5QlxuICAgICAqIEB0eXBlIGJvZHlcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBWZWN0b3JgIHRoYXQgc3BlY2lmaWVzIHRoZSBvZmZzZXQgb2YgdGhlIGNvbnN0cmFpbnQgZnJvbSBjZW50ZXIgb2YgdGhlIGBjb25zdHJhaW50LmJvZHlBYCBpZiBkZWZpbmVkLCBvdGhlcndpc2UgYSB3b3JsZC1zcGFjZSBwb3NpdGlvbi5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwb2ludEFcbiAgICAgKiBAdHlwZSB2ZWN0b3JcbiAgICAgKiBAZGVmYXVsdCB7IHg6IDAsIHk6IDAgfVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgVmVjdG9yYCB0aGF0IHNwZWNpZmllcyB0aGUgb2Zmc2V0IG9mIHRoZSBjb25zdHJhaW50IGZyb20gY2VudGVyIG9mIHRoZSBgY29uc3RyYWludC5ib2R5QmAgaWYgZGVmaW5lZCwgb3RoZXJ3aXNlIGEgd29ybGQtc3BhY2UgcG9zaXRpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcG9pbnRCXG4gICAgICogQHR5cGUgdmVjdG9yXG4gICAgICogQGRlZmF1bHQgeyB4OiAwLCB5OiAwIH1cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgdGhlIHN0aWZmbmVzcyBvZiB0aGUgY29uc3RyYWludCwgaS5lLiB0aGUgcmF0ZSBhdCB3aGljaCBpdCByZXR1cm5zIHRvIGl0cyByZXN0aW5nIGBjb25zdHJhaW50Lmxlbmd0aGAuXG4gICAgICogQSB2YWx1ZSBvZiBgMWAgbWVhbnMgdGhlIGNvbnN0cmFpbnQgc2hvdWxkIGJlIHZlcnkgc3RpZmYuXG4gICAgICogQSB2YWx1ZSBvZiBgMC4yYCBtZWFucyB0aGUgY29uc3RyYWludCBhY3RzIGxpa2UgYSBzb2Z0IHNwcmluZy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBzdGlmZm5lc3NcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIHRoZSBkYW1waW5nIG9mIHRoZSBjb25zdHJhaW50LCBcbiAgICAgKiBpLmUuIHRoZSBhbW91bnQgb2YgcmVzaXN0YW5jZSBhcHBsaWVkIHRvIGVhY2ggYm9keSBiYXNlZCBvbiB0aGVpciB2ZWxvY2l0aWVzIHRvIGxpbWl0IHRoZSBhbW91bnQgb2Ygb3NjaWxsYXRpb24uXG4gICAgICogRGFtcGluZyB3aWxsIG9ubHkgYmUgYXBwYXJlbnQgd2hlbiB0aGUgY29uc3RyYWludCBhbHNvIGhhcyBhIHZlcnkgbG93IGBzdGlmZm5lc3NgLlxuICAgICAqIEEgdmFsdWUgb2YgYDAuMWAgbWVhbnMgdGhlIGNvbnN0cmFpbnQgd2lsbCBhcHBseSBoZWF2eSBkYW1waW5nLCByZXN1bHRpbmcgaW4gbGl0dGxlIHRvIG5vIG9zY2lsbGF0aW9uLlxuICAgICAqIEEgdmFsdWUgb2YgYDBgIG1lYW5zIHRoZSBjb25zdHJhaW50IHdpbGwgYXBwbHkgbm8gZGFtcGluZy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBkYW1waW5nXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IHNwZWNpZmllcyB0aGUgdGFyZ2V0IHJlc3RpbmcgbGVuZ3RoIG9mIHRoZSBjb25zdHJhaW50LiBcbiAgICAgKiBJdCBpcyBjYWxjdWxhdGVkIGF1dG9tYXRpY2FsbHkgaW4gYENvbnN0cmFpbnQuY3JlYXRlYCBmcm9tIGluaXRpYWwgcG9zaXRpb25zIG9mIHRoZSBgY29uc3RyYWludC5ib2R5QWAgYW5kIGBjb25zdHJhaW50LmJvZHlCYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBsZW5ndGhcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCByZXNlcnZlZCBmb3Igc3RvcmluZyBwbHVnaW4tc3BlY2lmaWMgcHJvcGVydGllcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwbHVnaW5cbiAgICAgKiBAdHlwZSB7fVxuICAgICAqL1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMTEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLkF4ZXNgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIHNldHMgb2YgYXhlcy5cbipcbiogQGNsYXNzIEF4ZXNcbiovXG5cbnZhciBBeGVzID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gQXhlcztcblxudmFyIFZlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBzZXQgb2YgYXhlcyBmcm9tIHRoZSBnaXZlbiB2ZXJ0aWNlcy5cbiAgICAgKiBAbWV0aG9kIGZyb21WZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHJldHVybiB7YXhlc30gQSBuZXcgYXhlcyBmcm9tIHRoZSBnaXZlbiB2ZXJ0aWNlc1xuICAgICAqL1xuICAgIEF4ZXMuZnJvbVZlcnRpY2VzID0gZnVuY3Rpb24odmVydGljZXMpIHtcbiAgICAgICAgdmFyIGF4ZXMgPSB7fTtcblxuICAgICAgICAvLyBmaW5kIHRoZSB1bmlxdWUgYXhlcywgdXNpbmcgZWRnZSBub3JtYWwgZ3JhZGllbnRzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBqID0gKGkgKyAxKSAlIHZlcnRpY2VzLmxlbmd0aCwgXG4gICAgICAgICAgICAgICAgbm9ybWFsID0gVmVjdG9yLm5vcm1hbGlzZSh7IFxuICAgICAgICAgICAgICAgICAgICB4OiB2ZXJ0aWNlc1tqXS55IC0gdmVydGljZXNbaV0ueSwgXG4gICAgICAgICAgICAgICAgICAgIHk6IHZlcnRpY2VzW2ldLnggLSB2ZXJ0aWNlc1tqXS54XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgZ3JhZGllbnQgPSAobm9ybWFsLnkgPT09IDApID8gSW5maW5pdHkgOiAobm9ybWFsLnggLyBub3JtYWwueSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGxpbWl0IHByZWNpc2lvblxuICAgICAgICAgICAgZ3JhZGllbnQgPSBncmFkaWVudC50b0ZpeGVkKDMpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBheGVzW2dyYWRpZW50XSA9IG5vcm1hbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBDb21tb24udmFsdWVzKGF4ZXMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSb3RhdGVzIGEgc2V0IG9mIGF4ZXMgYnkgdGhlIGdpdmVuIGFuZ2xlLlxuICAgICAqIEBtZXRob2Qgcm90YXRlXG4gICAgICogQHBhcmFtIHtheGVzfSBheGVzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlXG4gICAgICovXG4gICAgQXhlcy5yb3RhdGUgPSBmdW5jdGlvbihheGVzLCBhbmdsZSkge1xuICAgICAgICBpZiAoYW5nbGUgPT09IDApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAgICAgc2luID0gTWF0aC5zaW4oYW5nbGUpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXhlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGF4aXMgPSBheGVzW2ldLFxuICAgICAgICAgICAgICAgIHh4O1xuICAgICAgICAgICAgeHggPSBheGlzLnggKiBjb3MgLSBheGlzLnkgKiBzaW47XG4gICAgICAgICAgICBheGlzLnkgPSBheGlzLnggKiBzaW4gKyBheGlzLnkgKiBjb3M7XG4gICAgICAgICAgICBheGlzLnggPSB4eDtcbiAgICAgICAgfVxuICAgIH07XG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAxMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuQm9kaWVzYCBtb2R1bGUgY29udGFpbnMgZmFjdG9yeSBtZXRob2RzIGZvciBjcmVhdGluZyByaWdpZCBib2R5IG1vZGVscyBcbiogd2l0aCBjb21tb25seSB1c2VkIGJvZHkgY29uZmlndXJhdGlvbnMgKHN1Y2ggYXMgcmVjdGFuZ2xlcywgY2lyY2xlcyBhbmQgb3RoZXIgcG9seWdvbnMpLlxuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgQm9kaWVzXG4qL1xuXG4vLyBUT0RPOiB0cnVlIGNpcmNsZSBib2RpZXNcblxudmFyIEJvZGllcyA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJvZGllcztcblxudmFyIFZlcnRpY2VzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xudmFyIEJvZHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xudmFyIEJvdW5kcyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG52YXIgVmVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyByaWdpZCBib2R5IG1vZGVsIHdpdGggYSByZWN0YW5nbGUgaHVsbC4gXG4gICAgICogVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBhbnkgcHJvcGVydGllcyB5b3Ugd2lzaCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHMuXG4gICAgICogU2VlIHRoZSBwcm9wZXJ0aWVzIHNlY3Rpb24gb2YgdGhlIGBNYXR0ZXIuQm9keWAgbW9kdWxlIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCByZWN0YW5nbGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcmV0dXJuIHtib2R5fSBBIG5ldyByZWN0YW5nbGUgYm9keVxuICAgICAqL1xuICAgIEJvZGllcy5yZWN0YW5nbGUgPSBmdW5jdGlvbih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIHZhciByZWN0YW5nbGUgPSB7IFxuICAgICAgICAgICAgbGFiZWw6ICdSZWN0YW5nbGUgQm9keScsXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiB4LCB5OiB5IH0sXG4gICAgICAgICAgICB2ZXJ0aWNlczogVmVydGljZXMuZnJvbVBhdGgoJ0wgMCAwIEwgJyArIHdpZHRoICsgJyAwIEwgJyArIHdpZHRoICsgJyAnICsgaGVpZ2h0ICsgJyBMIDAgJyArIGhlaWdodClcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAob3B0aW9ucy5jaGFtZmVyKSB7XG4gICAgICAgICAgICB2YXIgY2hhbWZlciA9IG9wdGlvbnMuY2hhbWZlcjtcbiAgICAgICAgICAgIHJlY3RhbmdsZS52ZXJ0aWNlcyA9IFZlcnRpY2VzLmNoYW1mZXIocmVjdGFuZ2xlLnZlcnRpY2VzLCBjaGFtZmVyLnJhZGl1cywgXG4gICAgICAgICAgICAgICAgY2hhbWZlci5xdWFsaXR5LCBjaGFtZmVyLnF1YWxpdHlNaW4sIGNoYW1mZXIucXVhbGl0eU1heCk7XG4gICAgICAgICAgICBkZWxldGUgb3B0aW9ucy5jaGFtZmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEJvZHkuY3JlYXRlKENvbW1vbi5leHRlbmQoe30sIHJlY3RhbmdsZSwgb3B0aW9ucykpO1xuICAgIH07XG4gICAgXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyByaWdpZCBib2R5IG1vZGVsIHdpdGggYSB0cmFwZXpvaWQgaHVsbC4gXG4gICAgICogVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBhbnkgcHJvcGVydGllcyB5b3Ugd2lzaCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHMuXG4gICAgICogU2VlIHRoZSBwcm9wZXJ0aWVzIHNlY3Rpb24gb2YgdGhlIGBNYXR0ZXIuQm9keWAgbW9kdWxlIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCB0cmFwZXpvaWRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzbG9wZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcmV0dXJuIHtib2R5fSBBIG5ldyB0cmFwZXpvaWQgYm9keVxuICAgICAqL1xuICAgIEJvZGllcy50cmFwZXpvaWQgPSBmdW5jdGlvbih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzbG9wZSwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICBzbG9wZSAqPSAwLjU7XG4gICAgICAgIHZhciByb29mID0gKDEgLSAoc2xvcGUgKiAyKSkgKiB3aWR0aDtcbiAgICAgICAgXG4gICAgICAgIHZhciB4MSA9IHdpZHRoICogc2xvcGUsXG4gICAgICAgICAgICB4MiA9IHgxICsgcm9vZixcbiAgICAgICAgICAgIHgzID0geDIgKyB4MSxcbiAgICAgICAgICAgIHZlcnRpY2VzUGF0aDtcblxuICAgICAgICBpZiAoc2xvcGUgPCAwLjUpIHtcbiAgICAgICAgICAgIHZlcnRpY2VzUGF0aCA9ICdMIDAgMCBMICcgKyB4MSArICcgJyArICgtaGVpZ2h0KSArICcgTCAnICsgeDIgKyAnICcgKyAoLWhlaWdodCkgKyAnIEwgJyArIHgzICsgJyAwJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZlcnRpY2VzUGF0aCA9ICdMIDAgMCBMICcgKyB4MiArICcgJyArICgtaGVpZ2h0KSArICcgTCAnICsgeDMgKyAnIDAnO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRyYXBlem9pZCA9IHsgXG4gICAgICAgICAgICBsYWJlbDogJ1RyYXBlem9pZCBCb2R5JyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IHgsIHk6IHkgfSxcbiAgICAgICAgICAgIHZlcnRpY2VzOiBWZXJ0aWNlcy5mcm9tUGF0aCh2ZXJ0aWNlc1BhdGgpXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuY2hhbWZlcikge1xuICAgICAgICAgICAgdmFyIGNoYW1mZXIgPSBvcHRpb25zLmNoYW1mZXI7XG4gICAgICAgICAgICB0cmFwZXpvaWQudmVydGljZXMgPSBWZXJ0aWNlcy5jaGFtZmVyKHRyYXBlem9pZC52ZXJ0aWNlcywgY2hhbWZlci5yYWRpdXMsIFxuICAgICAgICAgICAgICAgIGNoYW1mZXIucXVhbGl0eSwgY2hhbWZlci5xdWFsaXR5TWluLCBjaGFtZmVyLnF1YWxpdHlNYXgpO1xuICAgICAgICAgICAgZGVsZXRlIG9wdGlvbnMuY2hhbWZlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBCb2R5LmNyZWF0ZShDb21tb24uZXh0ZW5kKHt9LCB0cmFwZXpvaWQsIG9wdGlvbnMpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyByaWdpZCBib2R5IG1vZGVsIHdpdGggYSBjaXJjbGUgaHVsbC4gXG4gICAgICogVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBhbnkgcHJvcGVydGllcyB5b3Ugd2lzaCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHMuXG4gICAgICogU2VlIHRoZSBwcm9wZXJ0aWVzIHNlY3Rpb24gb2YgdGhlIGBNYXR0ZXIuQm9keWAgbW9kdWxlIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCBjaXJjbGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1c1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW21heFNpZGVzXVxuICAgICAqIEByZXR1cm4ge2JvZHl9IEEgbmV3IGNpcmNsZSBib2R5XG4gICAgICovXG4gICAgQm9kaWVzLmNpcmNsZSA9IGZ1bmN0aW9uKHgsIHksIHJhZGl1cywgb3B0aW9ucywgbWF4U2lkZXMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgdmFyIGNpcmNsZSA9IHtcbiAgICAgICAgICAgIGxhYmVsOiAnQ2lyY2xlIEJvZHknLFxuICAgICAgICAgICAgY2lyY2xlUmFkaXVzOiByYWRpdXNcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8vIGFwcHJveGltYXRlIGNpcmNsZXMgd2l0aCBwb2x5Z29ucyB1bnRpbCB0cnVlIGNpcmNsZXMgaW1wbGVtZW50ZWQgaW4gU0FUXG4gICAgICAgIG1heFNpZGVzID0gbWF4U2lkZXMgfHwgMjU7XG4gICAgICAgIHZhciBzaWRlcyA9IE1hdGguY2VpbChNYXRoLm1heCgxMCwgTWF0aC5taW4obWF4U2lkZXMsIHJhZGl1cykpKTtcblxuICAgICAgICAvLyBvcHRpbWlzYXRpb246IGFsd2F5cyB1c2UgZXZlbiBudW1iZXIgb2Ygc2lkZXMgKGhhbGYgdGhlIG51bWJlciBvZiB1bmlxdWUgYXhlcylcbiAgICAgICAgaWYgKHNpZGVzICUgMiA9PT0gMSlcbiAgICAgICAgICAgIHNpZGVzICs9IDE7XG5cbiAgICAgICAgcmV0dXJuIEJvZGllcy5wb2x5Z29uKHgsIHksIHNpZGVzLCByYWRpdXMsIENvbW1vbi5leHRlbmQoe30sIGNpcmNsZSwgb3B0aW9ucykpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHJpZ2lkIGJvZHkgbW9kZWwgd2l0aCBhIHJlZ3VsYXIgcG9seWdvbiBodWxsIHdpdGggdGhlIGdpdmVuIG51bWJlciBvZiBzaWRlcy4gXG4gICAgICogVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBhbnkgcHJvcGVydGllcyB5b3Ugd2lzaCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHMuXG4gICAgICogU2VlIHRoZSBwcm9wZXJ0aWVzIHNlY3Rpb24gb2YgdGhlIGBNYXR0ZXIuQm9keWAgbW9kdWxlIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCBwb2x5Z29uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaWRlc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAgICogQHJldHVybiB7Ym9keX0gQSBuZXcgcmVndWxhciBwb2x5Z29uIGJvZHlcbiAgICAgKi9cbiAgICBCb2RpZXMucG9seWdvbiA9IGZ1bmN0aW9uKHgsIHksIHNpZGVzLCByYWRpdXMsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgaWYgKHNpZGVzIDwgMylcbiAgICAgICAgICAgIHJldHVybiBCb2RpZXMuY2lyY2xlKHgsIHksIHJhZGl1cywgb3B0aW9ucyk7XG5cbiAgICAgICAgdmFyIHRoZXRhID0gMiAqIE1hdGguUEkgLyBzaWRlcyxcbiAgICAgICAgICAgIHBhdGggPSAnJyxcbiAgICAgICAgICAgIG9mZnNldCA9IHRoZXRhICogMC41O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lkZXM7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIGFuZ2xlID0gb2Zmc2V0ICsgKGkgKiB0aGV0YSksXG4gICAgICAgICAgICAgICAgeHggPSBNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsXG4gICAgICAgICAgICAgICAgeXkgPSBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXM7XG5cbiAgICAgICAgICAgIHBhdGggKz0gJ0wgJyArIHh4LnRvRml4ZWQoMykgKyAnICcgKyB5eS50b0ZpeGVkKDMpICsgJyAnO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBvbHlnb24gPSB7IFxuICAgICAgICAgICAgbGFiZWw6ICdQb2x5Z29uIEJvZHknLFxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogeCwgeTogeSB9LFxuICAgICAgICAgICAgdmVydGljZXM6IFZlcnRpY2VzLmZyb21QYXRoKHBhdGgpXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuY2hhbWZlcikge1xuICAgICAgICAgICAgdmFyIGNoYW1mZXIgPSBvcHRpb25zLmNoYW1mZXI7XG4gICAgICAgICAgICBwb2x5Z29uLnZlcnRpY2VzID0gVmVydGljZXMuY2hhbWZlcihwb2x5Z29uLnZlcnRpY2VzLCBjaGFtZmVyLnJhZGl1cywgXG4gICAgICAgICAgICAgICAgY2hhbWZlci5xdWFsaXR5LCBjaGFtZmVyLnF1YWxpdHlNaW4sIGNoYW1mZXIucXVhbGl0eU1heCk7XG4gICAgICAgICAgICBkZWxldGUgb3B0aW9ucy5jaGFtZmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEJvZHkuY3JlYXRlKENvbW1vbi5leHRlbmQoe30sIHBvbHlnb24sIG9wdGlvbnMpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXRpbGl0eSB0byBjcmVhdGUgYSBjb21wb3VuZCBib2R5IGJhc2VkIG9uIHNldChzKSBvZiB2ZXJ0aWNlcy5cbiAgICAgKiBcbiAgICAgKiBfTm90ZTpfIFRvIG9wdGlvbmFsbHkgZW5hYmxlIGF1dG9tYXRpYyBjb25jYXZlIHZlcnRpY2VzIGRlY29tcG9zaXRpb24gdGhlIFtwb2x5LWRlY29tcF0oaHR0cHM6Ly9naXRodWIuY29tL3NjaHRlcHBlL3BvbHktZGVjb21wLmpzKSBcbiAgICAgKiBwYWNrYWdlIG11c3QgYmUgZmlyc3QgaW5zdGFsbGVkIGFuZCBwcm92aWRlZCBzZWUgYENvbW1vbi5zZXREZWNvbXBgLCBvdGhlcndpc2UgdGhlIGNvbnZleCBodWxsIG9mIGVhY2ggdmVydGV4IHNldCB3aWxsIGJlIHVzZWQuXG4gICAgICogXG4gICAgICogVGhlIHJlc3VsdGluZyB2ZXJ0aWNlcyBhcmUgcmVvcmllbnRhdGVkIGFib3V0IHRoZWlyIGNlbnRyZSBvZiBtYXNzLFxuICAgICAqIGFuZCBvZmZzZXQgc3VjaCB0aGF0IGBib2R5LnBvc2l0aW9uYCBjb3JyZXNwb25kcyB0byB0aGlzIHBvaW50LlxuICAgICAqIFxuICAgICAqIFRoZSByZXN1bHRpbmcgb2Zmc2V0IG1heSBiZSBmb3VuZCBpZiBuZWVkZWQgYnkgc3VidHJhY3RpbmcgYGJvZHkuYm91bmRzYCBmcm9tIHRoZSBvcmlnaW5hbCBpbnB1dCBib3VuZHMuXG4gICAgICogVG8gbGF0ZXIgbW92ZSB0aGUgY2VudHJlIG9mIG1hc3Mgc2VlIGBCb2R5LnNldENlbnRyZWAuXG4gICAgICogXG4gICAgICogTm90ZSB0aGF0IGF1dG9tYXRpYyBjb25jb25jYXZlIGRlY29tcG9zaXRpb24gcmVzdWx0cyBhcmUgbm90IGFsd2F5cyBvcHRpbWFsLiBcbiAgICAgKiBGb3IgYmVzdCByZXN1bHRzLCBzaW1wbGlmeSB0aGUgaW5wdXQgdmVydGljZXMgYXMgbXVjaCBhcyBwb3NzaWJsZSBmaXJzdC5cbiAgICAgKiBCeSBkZWZhdWx0IHRoaXMgZnVuY3Rpb24gYXBwbGllcyBzb21lIGFkZHRpb25hbCBzaW1wbGlmaWNhdGlvbiB0byBoZWxwLlxuICAgICAqIFxuICAgICAqIFNvbWUgb3V0cHV0cyBtYXkgYWxzbyByZXF1aXJlIGZ1cnRoZXIgbWFudWFsIHByb2Nlc3NpbmcgYWZ0ZXJ3YXJkcyB0byBiZSByb2J1c3QuXG4gICAgICogSW4gcGFydGljdWxhciBzb21lIHBhcnRzIG1heSBuZWVkIHRvIGJlIG92ZXJsYXBwZWQgdG8gYXZvaWQgY29sbGlzaW9uIGdhcHMuXG4gICAgICogVGhpbiBwYXJ0cyBhbmQgc2hhcnAgcG9pbnRzIHNob3VsZCBiZSBhdm9pZGVkIG9yIHJlbW92ZWQgd2hlcmUgcG9zc2libGUuXG4gICAgICpcbiAgICAgKiBUaGUgb3B0aW9ucyBwYXJhbWV0ZXIgb2JqZWN0IHNwZWNpZmllcyBhbnkgYE1hdHRlci5Cb2R5YCBwcm9wZXJ0aWVzIHlvdSB3aXNoIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0cy5cbiAgICAgKiBcbiAgICAgKiBTZWUgdGhlIHByb3BlcnRpZXMgc2VjdGlvbiBvZiB0aGUgYE1hdHRlci5Cb2R5YCBtb2R1bGUgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIGZyb21WZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKiBAcGFyYW0ge2FycmF5fSB2ZXJ0ZXhTZXRzIE9uZSBvciBtb3JlIGFycmF5cyBvZiB2ZXJ0ZXggcG9pbnRzIGUuZy4gYFtbeyB4OiAwLCB5OiAwIH0uLi5dLCAuLi5dYC5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIFRoZSBib2R5IG9wdGlvbnMuXG4gICAgICogQHBhcmFtIHtib29sfSBbZmxhZ0ludGVybmFsPWZhbHNlXSBPcHRpb25hbGx5IG1hcmtzIGludGVybmFsIGVkZ2VzIHdpdGggYGlzSW50ZXJuYWxgLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbcmVtb3ZlQ29sbGluZWFyPTAuMDFdIFRocmVzaG9sZCB3aGVuIHNpbXBsaWZ5aW5nIHZlcnRpY2VzIGFsb25nIHRoZSBzYW1lIGVkZ2UuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFttaW5pbXVtQXJlYT0xMF0gVGhyZXNob2xkIHdoZW4gcmVtb3Zpbmcgc21hbGwgcGFydHMuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtyZW1vdmVEdXBsaWNhdGVQb2ludHM9MC4wMV0gVGhyZXNob2xkIHdoZW4gc2ltcGxpZnlpbmcgbmVhcmJ5IHZlcnRpY2VzLlxuICAgICAqIEByZXR1cm4ge2JvZHl9XG4gICAgICovXG4gICAgQm9kaWVzLmZyb21WZXJ0aWNlcyA9IGZ1bmN0aW9uKHgsIHksIHZlcnRleFNldHMsIG9wdGlvbnMsIGZsYWdJbnRlcm5hbCwgcmVtb3ZlQ29sbGluZWFyLCBtaW5pbXVtQXJlYSwgcmVtb3ZlRHVwbGljYXRlUG9pbnRzKSB7XG4gICAgICAgIHZhciBkZWNvbXAgPSBDb21tb24uZ2V0RGVjb21wKCksXG4gICAgICAgICAgICBjYW5EZWNvbXAsXG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgcGFydHMsXG4gICAgICAgICAgICBpc0NvbnZleCxcbiAgICAgICAgICAgIGlzQ29uY2F2ZSxcbiAgICAgICAgICAgIHZlcnRpY2VzLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGosXG4gICAgICAgICAgICBrLFxuICAgICAgICAgICAgdixcbiAgICAgICAgICAgIHo7XG5cbiAgICAgICAgLy8gY2hlY2sgZGVjb21wIGlzIGFzIGV4cGVjdGVkXG4gICAgICAgIGNhbkRlY29tcCA9IEJvb2xlYW4oZGVjb21wICYmIGRlY29tcC5xdWlja0RlY29tcCk7XG5cbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHBhcnRzID0gW107XG5cbiAgICAgICAgZmxhZ0ludGVybmFsID0gdHlwZW9mIGZsYWdJbnRlcm5hbCAhPT0gJ3VuZGVmaW5lZCcgPyBmbGFnSW50ZXJuYWwgOiBmYWxzZTtcbiAgICAgICAgcmVtb3ZlQ29sbGluZWFyID0gdHlwZW9mIHJlbW92ZUNvbGxpbmVhciAhPT0gJ3VuZGVmaW5lZCcgPyByZW1vdmVDb2xsaW5lYXIgOiAwLjAxO1xuICAgICAgICBtaW5pbXVtQXJlYSA9IHR5cGVvZiBtaW5pbXVtQXJlYSAhPT0gJ3VuZGVmaW5lZCcgPyBtaW5pbXVtQXJlYSA6IDEwO1xuICAgICAgICByZW1vdmVEdXBsaWNhdGVQb2ludHMgPSB0eXBlb2YgcmVtb3ZlRHVwbGljYXRlUG9pbnRzICE9PSAndW5kZWZpbmVkJyA/IHJlbW92ZUR1cGxpY2F0ZVBvaW50cyA6IDAuMDE7XG5cbiAgICAgICAgLy8gZW5zdXJlIHZlcnRleFNldHMgaXMgYW4gYXJyYXkgb2YgYXJyYXlzXG4gICAgICAgIGlmICghQ29tbW9uLmlzQXJyYXkodmVydGV4U2V0c1swXSkpIHtcbiAgICAgICAgICAgIHZlcnRleFNldHMgPSBbdmVydGV4U2V0c107XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHYgPSAwOyB2IDwgdmVydGV4U2V0cy5sZW5ndGg7IHYgKz0gMSkge1xuICAgICAgICAgICAgdmVydGljZXMgPSB2ZXJ0ZXhTZXRzW3ZdO1xuICAgICAgICAgICAgaXNDb252ZXggPSBWZXJ0aWNlcy5pc0NvbnZleCh2ZXJ0aWNlcyk7XG4gICAgICAgICAgICBpc0NvbmNhdmUgPSAhaXNDb252ZXg7XG5cbiAgICAgICAgICAgIGlmIChpc0NvbmNhdmUgJiYgIWNhbkRlY29tcCkge1xuICAgICAgICAgICAgICAgIENvbW1vbi53YXJuT25jZShcbiAgICAgICAgICAgICAgICAgICAgJ0JvZGllcy5mcm9tVmVydGljZXM6IEluc3RhbGwgdGhlIFxcJ3BvbHktZGVjb21wXFwnIGxpYnJhcnkgYW5kIHVzZSBDb21tb24uc2V0RGVjb21wIG9yIHByb3ZpZGUgXFwnZGVjb21wXFwnIGFzIGEgZ2xvYmFsIHRvIGRlY29tcG9zZSBjb25jYXZlIHZlcnRpY2VzLidcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNDb252ZXggfHwgIWNhbkRlY29tcCkge1xuICAgICAgICAgICAgICAgIGlmIChpc0NvbnZleCkge1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNlcyA9IFZlcnRpY2VzLmNsb2Nrd2lzZVNvcnQodmVydGljZXMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZhbGxiYWNrIHRvIGNvbnZleCBodWxsIHdoZW4gZGVjb21wb3NpdGlvbiBpcyBub3QgcG9zc2libGVcbiAgICAgICAgICAgICAgICAgICAgdmVydGljZXMgPSBWZXJ0aWNlcy5odWxsKHZlcnRpY2VzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogeCwgeTogeSB9LFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNlczogdmVydGljZXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaW5pdGlhbGlzZSBhIGRlY29tcG9zaXRpb25cbiAgICAgICAgICAgICAgICB2YXIgY29uY2F2ZSA9IHZlcnRpY2VzLm1hcChmdW5jdGlvbih2ZXJ0ZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt2ZXJ0ZXgueCwgdmVydGV4LnldO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gdmVydGljZXMgYXJlIGNvbmNhdmUgYW5kIHNpbXBsZSwgd2UgY2FuIGRlY29tcG9zZSBpbnRvIHBhcnRzXG4gICAgICAgICAgICAgICAgZGVjb21wLm1ha2VDQ1coY29uY2F2ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlbW92ZUNvbGxpbmVhciAhPT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIGRlY29tcC5yZW1vdmVDb2xsaW5lYXJQb2ludHMoY29uY2F2ZSwgcmVtb3ZlQ29sbGluZWFyKTtcbiAgICAgICAgICAgICAgICBpZiAocmVtb3ZlRHVwbGljYXRlUG9pbnRzICE9PSBmYWxzZSAmJiBkZWNvbXAucmVtb3ZlRHVwbGljYXRlUG9pbnRzKVxuICAgICAgICAgICAgICAgICAgICBkZWNvbXAucmVtb3ZlRHVwbGljYXRlUG9pbnRzKGNvbmNhdmUsIHJlbW92ZUR1cGxpY2F0ZVBvaW50cyk7XG5cbiAgICAgICAgICAgICAgICAvLyB1c2UgdGhlIHF1aWNrIGRlY29tcG9zaXRpb24gYWxnb3JpdGhtIChCYXlheml0KVxuICAgICAgICAgICAgICAgIHZhciBkZWNvbXBvc2VkID0gZGVjb21wLnF1aWNrRGVjb21wKGNvbmNhdmUpO1xuXG4gICAgICAgICAgICAgICAgLy8gZm9yIGVhY2ggZGVjb21wb3NlZCBjaHVua1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkZWNvbXBvc2VkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaHVuayA9IGRlY29tcG9zZWRbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29udmVydCB2ZXJ0aWNlcyBpbnRvIHRoZSBjb3JyZWN0IHN0cnVjdHVyZVxuICAgICAgICAgICAgICAgICAgICB2YXIgY2h1bmtWZXJ0aWNlcyA9IGNodW5rLm1hcChmdW5jdGlvbih2ZXJ0aWNlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiB2ZXJ0aWNlc1swXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB2ZXJ0aWNlc1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc2tpcCBzbWFsbCBjaHVua3NcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pbmltdW1BcmVhID4gMCAmJiBWZXJ0aWNlcy5hcmVhKGNodW5rVmVydGljZXMpIDwgbWluaW11bUFyZWEpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYSBjb21wb3VuZCBwYXJ0XG4gICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFZlcnRpY2VzLmNlbnRyZShjaHVua1ZlcnRpY2VzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2VzOiBjaHVua1ZlcnRpY2VzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNyZWF0ZSBib2R5IHBhcnRzXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFydHNbaV0gPSBCb2R5LmNyZWF0ZShDb21tb24uZXh0ZW5kKHBhcnRzW2ldLCBvcHRpb25zKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmbGFnIGludGVybmFsIGVkZ2VzIChjb2luY2lkZW50IHBhcnQgZWRnZXMpXG4gICAgICAgIGlmIChmbGFnSW50ZXJuYWwpIHtcbiAgICAgICAgICAgIHZhciBjb2luY2lkZW50X21heF9kaXN0ID0gNTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcnRBID0gcGFydHNbaV07XG5cbiAgICAgICAgICAgICAgICBmb3IgKGogPSBpICsgMTsgaiA8IHBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0QiA9IHBhcnRzW2pdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChCb3VuZHMub3ZlcmxhcHMocGFydEEuYm91bmRzLCBwYXJ0Qi5ib3VuZHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGF2ID0gcGFydEEudmVydGljZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJ2ID0gcGFydEIudmVydGljZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0ZXJhdGUgdmVydGljZXMgb2YgYm90aCBwYXJ0c1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IHBhcnRBLnZlcnRpY2VzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh6ID0gMDsgeiA8IHBhcnRCLnZlcnRpY2VzLmxlbmd0aDsgeisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZpbmQgZGlzdGFuY2VzIGJldHdlZW4gdGhlIHZlcnRpY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYSA9IFZlY3Rvci5tYWduaXR1ZGVTcXVhcmVkKFZlY3Rvci5zdWIocGF2WyhrICsgMSkgJSBwYXYubGVuZ3RoXSwgcGJ2W3pdKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYiA9IFZlY3Rvci5tYWduaXR1ZGVTcXVhcmVkKFZlY3Rvci5zdWIocGF2W2tdLCBwYnZbKHogKyAxKSAlIHBidi5sZW5ndGhdKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgYm90aCB2ZXJ0aWNlcyBhcmUgdmVyeSBjbG9zZSwgY29uc2lkZXIgdGhlIGVkZ2UgY29uY2lkZW50IChpbnRlcm5hbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhIDwgY29pbmNpZGVudF9tYXhfZGlzdCAmJiBkYiA8IGNvaW5jaWRlbnRfbWF4X2Rpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdltrXS5pc0ludGVybmFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBidlt6XS5pc0ludGVybmFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgcGFyZW50IGJvZHkgdG8gYmUgcmV0dXJuZWQsIHRoYXQgY29udGFpbnMgZ2VuZXJhdGVkIGNvbXBvdW5kIHBhcnRzXG4gICAgICAgICAgICBib2R5ID0gQm9keS5jcmVhdGUoQ29tbW9uLmV4dGVuZCh7IHBhcnRzOiBwYXJ0cy5zbGljZSgwKSB9LCBvcHRpb25zKSk7XG5cbiAgICAgICAgICAgIC8vIG9mZnNldCBzdWNoIHRoYXQgYm9keS5wb3NpdGlvbiBpcyBhdCB0aGUgY2VudHJlIG9mZiBtYXNzXG4gICAgICAgICAgICBCb2R5LnNldFBvc2l0aW9uKGJvZHksIHsgeDogeCwgeTogeSB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGJvZHk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcGFydHNbMF07XG4gICAgICAgIH1cbiAgICB9O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMTMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLk1vdXNlYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBtb3VzZSBpbnB1dHMuXG4qXG4qIEBjbGFzcyBNb3VzZVxuKi9cblxudmFyIE1vdXNlID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gTW91c2U7XG5cbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbW91c2UgaW5wdXQuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgICogQHJldHVybiB7bW91c2V9IEEgbmV3IG1vdXNlXG4gICAgICovXG4gICAgTW91c2UuY3JlYXRlID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICB2YXIgbW91c2UgPSB7fTtcblxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIENvbW1vbi5sb2coJ01vdXNlLmNyZWF0ZTogZWxlbWVudCB3YXMgdW5kZWZpbmVkLCBkZWZhdWx0aW5nIHRvIGRvY3VtZW50LmJvZHknLCAnd2FybicpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBtb3VzZS5lbGVtZW50ID0gZWxlbWVudCB8fCBkb2N1bWVudC5ib2R5O1xuICAgICAgICBtb3VzZS5hYnNvbHV0ZSA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICBtb3VzZS5wb3NpdGlvbiA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICBtb3VzZS5tb3VzZWRvd25Qb3NpdGlvbiA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICBtb3VzZS5tb3VzZXVwUG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgbW91c2Uub2Zmc2V0ID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgIG1vdXNlLnNjYWxlID0geyB4OiAxLCB5OiAxIH07XG4gICAgICAgIG1vdXNlLndoZWVsRGVsdGEgPSAwO1xuICAgICAgICBtb3VzZS5idXR0b24gPSAtMTtcbiAgICAgICAgbW91c2UucGl4ZWxSYXRpbyA9IHBhcnNlSW50KG1vdXNlLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBpeGVsLXJhdGlvJyksIDEwKSB8fCAxO1xuXG4gICAgICAgIG1vdXNlLnNvdXJjZUV2ZW50cyA9IHtcbiAgICAgICAgICAgIG1vdXNlbW92ZTogbnVsbCxcbiAgICAgICAgICAgIG1vdXNlZG93bjogbnVsbCxcbiAgICAgICAgICAgIG1vdXNldXA6IG51bGwsXG4gICAgICAgICAgICBtb3VzZXdoZWVsOiBudWxsXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBtb3VzZS5tb3VzZW1vdmUgPSBmdW5jdGlvbihldmVudCkgeyBcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IE1vdXNlLl9nZXRSZWxhdGl2ZU1vdXNlUG9zaXRpb24oZXZlbnQsIG1vdXNlLmVsZW1lbnQsIG1vdXNlLnBpeGVsUmF0aW8pLFxuICAgICAgICAgICAgICAgIHRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlcztcblxuICAgICAgICAgICAgaWYgKHRvdWNoZXMpIHtcbiAgICAgICAgICAgICAgICBtb3VzZS5idXR0b24gPSAwO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1vdXNlLmFic29sdXRlLnggPSBwb3NpdGlvbi54O1xuICAgICAgICAgICAgbW91c2UuYWJzb2x1dGUueSA9IHBvc2l0aW9uLnk7XG4gICAgICAgICAgICBtb3VzZS5wb3NpdGlvbi54ID0gbW91c2UuYWJzb2x1dGUueCAqIG1vdXNlLnNjYWxlLnggKyBtb3VzZS5vZmZzZXQueDtcbiAgICAgICAgICAgIG1vdXNlLnBvc2l0aW9uLnkgPSBtb3VzZS5hYnNvbHV0ZS55ICogbW91c2Uuc2NhbGUueSArIG1vdXNlLm9mZnNldC55O1xuICAgICAgICAgICAgbW91c2Uuc291cmNlRXZlbnRzLm1vdXNlbW92ZSA9IGV2ZW50O1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgbW91c2UubW91c2Vkb3duID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IE1vdXNlLl9nZXRSZWxhdGl2ZU1vdXNlUG9zaXRpb24oZXZlbnQsIG1vdXNlLmVsZW1lbnQsIG1vdXNlLnBpeGVsUmF0aW8pLFxuICAgICAgICAgICAgICAgIHRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlcztcblxuICAgICAgICAgICAgaWYgKHRvdWNoZXMpIHtcbiAgICAgICAgICAgICAgICBtb3VzZS5idXR0b24gPSAwO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vdXNlLmJ1dHRvbiA9IGV2ZW50LmJ1dHRvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW91c2UuYWJzb2x1dGUueCA9IHBvc2l0aW9uLng7XG4gICAgICAgICAgICBtb3VzZS5hYnNvbHV0ZS55ID0gcG9zaXRpb24ueTtcbiAgICAgICAgICAgIG1vdXNlLnBvc2l0aW9uLnggPSBtb3VzZS5hYnNvbHV0ZS54ICogbW91c2Uuc2NhbGUueCArIG1vdXNlLm9mZnNldC54O1xuICAgICAgICAgICAgbW91c2UucG9zaXRpb24ueSA9IG1vdXNlLmFic29sdXRlLnkgKiBtb3VzZS5zY2FsZS55ICsgbW91c2Uub2Zmc2V0Lnk7XG4gICAgICAgICAgICBtb3VzZS5tb3VzZWRvd25Qb3NpdGlvbi54ID0gbW91c2UucG9zaXRpb24ueDtcbiAgICAgICAgICAgIG1vdXNlLm1vdXNlZG93blBvc2l0aW9uLnkgPSBtb3VzZS5wb3NpdGlvbi55O1xuICAgICAgICAgICAgbW91c2Uuc291cmNlRXZlbnRzLm1vdXNlZG93biA9IGV2ZW50O1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgbW91c2UubW91c2V1cCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSBNb3VzZS5fZ2V0UmVsYXRpdmVNb3VzZVBvc2l0aW9uKGV2ZW50LCBtb3VzZS5lbGVtZW50LCBtb3VzZS5waXhlbFJhdGlvKSxcbiAgICAgICAgICAgICAgICB0b3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXM7XG5cbiAgICAgICAgICAgIGlmICh0b3VjaGVzKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbW91c2UuYnV0dG9uID0gLTE7XG4gICAgICAgICAgICBtb3VzZS5hYnNvbHV0ZS54ID0gcG9zaXRpb24ueDtcbiAgICAgICAgICAgIG1vdXNlLmFic29sdXRlLnkgPSBwb3NpdGlvbi55O1xuICAgICAgICAgICAgbW91c2UucG9zaXRpb24ueCA9IG1vdXNlLmFic29sdXRlLnggKiBtb3VzZS5zY2FsZS54ICsgbW91c2Uub2Zmc2V0Lng7XG4gICAgICAgICAgICBtb3VzZS5wb3NpdGlvbi55ID0gbW91c2UuYWJzb2x1dGUueSAqIG1vdXNlLnNjYWxlLnkgKyBtb3VzZS5vZmZzZXQueTtcbiAgICAgICAgICAgIG1vdXNlLm1vdXNldXBQb3NpdGlvbi54ID0gbW91c2UucG9zaXRpb24ueDtcbiAgICAgICAgICAgIG1vdXNlLm1vdXNldXBQb3NpdGlvbi55ID0gbW91c2UucG9zaXRpb24ueTtcbiAgICAgICAgICAgIG1vdXNlLnNvdXJjZUV2ZW50cy5tb3VzZXVwID0gZXZlbnQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgbW91c2UubW91c2V3aGVlbCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBtb3VzZS53aGVlbERlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIGV2ZW50LndoZWVsRGVsdGEgfHwgLWV2ZW50LmRldGFpbCkpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBNb3VzZS5zZXRFbGVtZW50KG1vdXNlLCBtb3VzZS5lbGVtZW50KTtcblxuICAgICAgICByZXR1cm4gbW91c2U7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGVsZW1lbnQgdGhlIG1vdXNlIGlzIGJvdW5kIHRvIChhbmQgcmVsYXRpdmUgdG8pLlxuICAgICAqIEBtZXRob2Qgc2V0RWxlbWVudFxuICAgICAqIEBwYXJhbSB7bW91c2V9IG1vdXNlXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgICAqL1xuICAgIE1vdXNlLnNldEVsZW1lbnQgPSBmdW5jdGlvbihtb3VzZSwgZWxlbWVudCkge1xuICAgICAgICBtb3VzZS5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlLm1vdXNlbW92ZSk7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW91c2UubW91c2Vkb3duKTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2UubW91c2V1cCk7XG4gICAgICAgIFxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBtb3VzZS5tb3VzZXdoZWVsKTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIG1vdXNlLm1vdXNld2hlZWwpO1xuXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgbW91c2UubW91c2Vtb3ZlKTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgbW91c2UubW91c2Vkb3duKTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG1vdXNlLm1vdXNldXApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIGNhcHR1cmVkIHNvdXJjZSBldmVudHMuXG4gICAgICogQG1ldGhvZCBjbGVhclNvdXJjZUV2ZW50c1xuICAgICAqIEBwYXJhbSB7bW91c2V9IG1vdXNlXG4gICAgICovXG4gICAgTW91c2UuY2xlYXJTb3VyY2VFdmVudHMgPSBmdW5jdGlvbihtb3VzZSkge1xuICAgICAgICBtb3VzZS5zb3VyY2VFdmVudHMubW91c2Vtb3ZlID0gbnVsbDtcbiAgICAgICAgbW91c2Uuc291cmNlRXZlbnRzLm1vdXNlZG93biA9IG51bGw7XG4gICAgICAgIG1vdXNlLnNvdXJjZUV2ZW50cy5tb3VzZXVwID0gbnVsbDtcbiAgICAgICAgbW91c2Uuc291cmNlRXZlbnRzLm1vdXNld2hlZWwgPSBudWxsO1xuICAgICAgICBtb3VzZS53aGVlbERlbHRhID0gMDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbW91c2UgcG9zaXRpb24gb2Zmc2V0LlxuICAgICAqIEBtZXRob2Qgc2V0T2Zmc2V0XG4gICAgICogQHBhcmFtIHttb3VzZX0gbW91c2VcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gb2Zmc2V0XG4gICAgICovXG4gICAgTW91c2Uuc2V0T2Zmc2V0ID0gZnVuY3Rpb24obW91c2UsIG9mZnNldCkge1xuICAgICAgICBtb3VzZS5vZmZzZXQueCA9IG9mZnNldC54O1xuICAgICAgICBtb3VzZS5vZmZzZXQueSA9IG9mZnNldC55O1xuICAgICAgICBtb3VzZS5wb3NpdGlvbi54ID0gbW91c2UuYWJzb2x1dGUueCAqIG1vdXNlLnNjYWxlLnggKyBtb3VzZS5vZmZzZXQueDtcbiAgICAgICAgbW91c2UucG9zaXRpb24ueSA9IG1vdXNlLmFic29sdXRlLnkgKiBtb3VzZS5zY2FsZS55ICsgbW91c2Uub2Zmc2V0Lnk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIG1vdXNlIHBvc2l0aW9uIHNjYWxlLlxuICAgICAqIEBtZXRob2Qgc2V0U2NhbGVcbiAgICAgKiBAcGFyYW0ge21vdXNlfSBtb3VzZVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBzY2FsZVxuICAgICAqL1xuICAgIE1vdXNlLnNldFNjYWxlID0gZnVuY3Rpb24obW91c2UsIHNjYWxlKSB7XG4gICAgICAgIG1vdXNlLnNjYWxlLnggPSBzY2FsZS54O1xuICAgICAgICBtb3VzZS5zY2FsZS55ID0gc2NhbGUueTtcbiAgICAgICAgbW91c2UucG9zaXRpb24ueCA9IG1vdXNlLmFic29sdXRlLnggKiBtb3VzZS5zY2FsZS54ICsgbW91c2Uub2Zmc2V0Lng7XG4gICAgICAgIG1vdXNlLnBvc2l0aW9uLnkgPSBtb3VzZS5hYnNvbHV0ZS55ICogbW91c2Uuc2NhbGUueSArIG1vdXNlLm9mZnNldC55O1xuICAgIH07XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgbW91c2UgcG9zaXRpb24gcmVsYXRpdmUgdG8gYW4gZWxlbWVudCBnaXZlbiBhIHNjcmVlbiBwaXhlbCByYXRpby5cbiAgICAgKiBAbWV0aG9kIF9nZXRSZWxhdGl2ZU1vdXNlUG9zaXRpb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSBldmVudFxuICAgICAqIEBwYXJhbSB7fSBlbGVtZW50XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBpeGVsUmF0aW9cbiAgICAgKiBAcmV0dXJuIHt9XG4gICAgICovXG4gICAgTW91c2UuX2dldFJlbGF0aXZlTW91c2VQb3NpdGlvbiA9IGZ1bmN0aW9uKGV2ZW50LCBlbGVtZW50LCBwaXhlbFJhdGlvKSB7XG4gICAgICAgIHZhciBlbGVtZW50Qm91bmRzID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgIHJvb3ROb2RlID0gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUgfHwgZG9jdW1lbnQuYm9keSksXG4gICAgICAgICAgICBzY3JvbGxYID0gKHdpbmRvdy5wYWdlWE9mZnNldCAhPT0gdW5kZWZpbmVkKSA/IHdpbmRvdy5wYWdlWE9mZnNldCA6IHJvb3ROb2RlLnNjcm9sbExlZnQsXG4gICAgICAgICAgICBzY3JvbGxZID0gKHdpbmRvdy5wYWdlWU9mZnNldCAhPT0gdW5kZWZpbmVkKSA/IHdpbmRvdy5wYWdlWU9mZnNldCA6IHJvb3ROb2RlLnNjcm9sbFRvcCxcbiAgICAgICAgICAgIHRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlcyxcbiAgICAgICAgICAgIHgsIHk7XG4gICAgICAgIFxuICAgICAgICBpZiAodG91Y2hlcykge1xuICAgICAgICAgICAgeCA9IHRvdWNoZXNbMF0ucGFnZVggLSBlbGVtZW50Qm91bmRzLmxlZnQgLSBzY3JvbGxYO1xuICAgICAgICAgICAgeSA9IHRvdWNoZXNbMF0ucGFnZVkgLSBlbGVtZW50Qm91bmRzLnRvcCAtIHNjcm9sbFk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4ID0gZXZlbnQucGFnZVggLSBlbGVtZW50Qm91bmRzLmxlZnQgLSBzY3JvbGxYO1xuICAgICAgICAgICAgeSA9IGV2ZW50LnBhZ2VZIC0gZWxlbWVudEJvdW5kcy50b3AgLSBzY3JvbGxZO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICB4OiB4IC8gKGVsZW1lbnQuY2xpZW50V2lkdGggLyAoZWxlbWVudC53aWR0aCB8fCBlbGVtZW50LmNsaWVudFdpZHRoKSAqIHBpeGVsUmF0aW8pLFxuICAgICAgICAgICAgeTogeSAvIChlbGVtZW50LmNsaWVudEhlaWdodCAvIChlbGVtZW50LmhlaWdodCB8fCBlbGVtZW50LmNsaWVudEhlaWdodCkgKiBwaXhlbFJhdGlvKVxuICAgICAgICB9O1xuICAgIH07XG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAxNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuRGV0ZWN0b3JgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBlZmZpY2llbnRseSBkZXRlY3RpbmcgY29sbGlzaW9ucyBiZXR3ZWVuIGEgbGlzdCBvZiBib2RpZXMgdXNpbmcgYSBicm9hZHBoYXNlIGFsZ29yaXRobS5cbipcbiogQGNsYXNzIERldGVjdG9yXG4qL1xuXG52YXIgRGV0ZWN0b3IgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBEZXRlY3RvcjtcblxudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgQ29sbGlzaW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBjb2xsaXNpb24gZGV0ZWN0b3IuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge30gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge2RldGVjdG9yfSBBIG5ldyBjb2xsaXNpb24gZGV0ZWN0b3JcbiAgICAgKi9cbiAgICBEZXRlY3Rvci5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGJvZGllczogW10sXG4gICAgICAgICAgICBwYWlyczogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBDb21tb24uZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbGlzdCBvZiBib2RpZXMgaW4gdGhlIGRldGVjdG9yLlxuICAgICAqIEBtZXRob2Qgc2V0Qm9kaWVzXG4gICAgICogQHBhcmFtIHtkZXRlY3Rvcn0gZGV0ZWN0b3JcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICovXG4gICAgRGV0ZWN0b3Iuc2V0Qm9kaWVzID0gZnVuY3Rpb24oZGV0ZWN0b3IsIGJvZGllcykge1xuICAgICAgICBkZXRlY3Rvci5ib2RpZXMgPSBib2RpZXMuc2xpY2UoMCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgZGV0ZWN0b3IgaW5jbHVkaW5nIGl0cyBsaXN0IG9mIGJvZGllcy5cbiAgICAgKiBAbWV0aG9kIGNsZWFyXG4gICAgICogQHBhcmFtIHtkZXRlY3Rvcn0gZGV0ZWN0b3JcbiAgICAgKi9cbiAgICBEZXRlY3Rvci5jbGVhciA9IGZ1bmN0aW9uKGRldGVjdG9yKSB7XG4gICAgICAgIGRldGVjdG9yLmJvZGllcyA9IFtdO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFZmZpY2llbnRseSBmaW5kcyBhbGwgY29sbGlzaW9ucyBhbW9uZyBhbGwgdGhlIGJvZGllcyBpbiBgZGV0ZWN0b3IuYm9kaWVzYCB1c2luZyBhIGJyb2FkcGhhc2UgYWxnb3JpdGhtLlxuICAgICAqIFxuICAgICAqIF9Ob3RlOl8gVGhlIHNwZWNpZmljIG9yZGVyaW5nIG9mIGNvbGxpc2lvbnMgcmV0dXJuZWQgaXMgbm90IGd1YXJhbnRlZWQgYmV0d2VlbiByZWxlYXNlcyBhbmQgbWF5IGNoYW5nZSBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucy5cbiAgICAgKiBJZiBhIHNwZWNpZmljIG9yZGVyaW5nIGlzIHJlcXVpcmVkIHRoZW4gYXBwbHkgYSBzb3J0IHRvIHRoZSByZXN1bHRpbmcgYXJyYXkuXG4gICAgICogQG1ldGhvZCBjb2xsaXNpb25zXG4gICAgICogQHBhcmFtIHtkZXRlY3Rvcn0gZGV0ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtjb2xsaXNpb25bXX0gY29sbGlzaW9uc1xuICAgICAqL1xuICAgIERldGVjdG9yLmNvbGxpc2lvbnMgPSBmdW5jdGlvbihkZXRlY3Rvcikge1xuICAgICAgICB2YXIgY29sbGlzaW9ucyA9IFtdLFxuICAgICAgICAgICAgcGFpcnMgPSBkZXRlY3Rvci5wYWlycyxcbiAgICAgICAgICAgIGJvZGllcyA9IGRldGVjdG9yLmJvZGllcyxcbiAgICAgICAgICAgIGJvZGllc0xlbmd0aCA9IGJvZGllcy5sZW5ndGgsXG4gICAgICAgICAgICBjYW5Db2xsaWRlID0gRGV0ZWN0b3IuY2FuQ29sbGlkZSxcbiAgICAgICAgICAgIGNvbGxpZGVzID0gQ29sbGlzaW9uLmNvbGxpZGVzLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGo7XG5cbiAgICAgICAgYm9kaWVzLnNvcnQoRGV0ZWN0b3IuX2NvbXBhcmVCb3VuZHNYKTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYm9kaWVzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5QSA9IGJvZGllc1tpXSxcbiAgICAgICAgICAgICAgICBib3VuZHNBID0gYm9keUEuYm91bmRzLFxuICAgICAgICAgICAgICAgIGJvdW5kWE1heCA9IGJvZHlBLmJvdW5kcy5tYXgueCxcbiAgICAgICAgICAgICAgICBib3VuZFlNYXggPSBib2R5QS5ib3VuZHMubWF4LnksXG4gICAgICAgICAgICAgICAgYm91bmRZTWluID0gYm9keUEuYm91bmRzLm1pbi55LFxuICAgICAgICAgICAgICAgIGJvZHlBU3RhdGljID0gYm9keUEuaXNTdGF0aWMgfHwgYm9keUEuaXNTbGVlcGluZyxcbiAgICAgICAgICAgICAgICBwYXJ0c0FMZW5ndGggPSBib2R5QS5wYXJ0cy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgcGFydHNBU2luZ2xlID0gcGFydHNBTGVuZ3RoID09PSAxO1xuXG4gICAgICAgICAgICBmb3IgKGogPSBpICsgMTsgaiA8IGJvZGllc0xlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJvZHlCID0gYm9kaWVzW2pdLFxuICAgICAgICAgICAgICAgICAgICBib3VuZHNCID0gYm9keUIuYm91bmRzO1xuXG4gICAgICAgICAgICAgICAgaWYgKGJvdW5kc0IubWluLnggPiBib3VuZFhNYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGJvdW5kWU1heCA8IGJvdW5kc0IubWluLnkgfHwgYm91bmRZTWluID4gYm91bmRzQi5tYXgueSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoYm9keUFTdGF0aWMgJiYgKGJvZHlCLmlzU3RhdGljIHx8IGJvZHlCLmlzU2xlZXBpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghY2FuQ29sbGlkZShib2R5QS5jb2xsaXNpb25GaWx0ZXIsIGJvZHlCLmNvbGxpc2lvbkZpbHRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHBhcnRzQkxlbmd0aCA9IGJvZHlCLnBhcnRzLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGlmIChwYXJ0c0FTaW5nbGUgJiYgcGFydHNCTGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2xsaXNpb24gPSBjb2xsaWRlcyhib2R5QSwgYm9keUIsIHBhaXJzKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY29sbGlzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25zLnB1c2goY29sbGlzaW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0c0FTdGFydCA9IHBhcnRzQUxlbmd0aCA+IDEgPyAxIDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRzQlN0YXJ0ID0gcGFydHNCTGVuZ3RoID4gMSA/IDEgOiAwO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IHBhcnRzQVN0YXJ0OyBrIDwgcGFydHNBTGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0QSA9IGJvZHlBLnBhcnRzW2tdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdW5kc0EgPSBwYXJ0QS5ib3VuZHM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHogPSBwYXJ0c0JTdGFydDsgeiA8IHBhcnRzQkxlbmd0aDsgeisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnRCID0gYm9keUIucGFydHNbel0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdW5kc0IgPSBwYXJ0Qi5ib3VuZHM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm91bmRzQS5taW4ueCA+IGJvdW5kc0IubWF4LnggfHwgYm91bmRzQS5tYXgueCA8IGJvdW5kc0IubWluLnhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgYm91bmRzQS5tYXgueSA8IGJvdW5kc0IubWluLnkgfHwgYm91bmRzQS5taW4ueSA+IGJvdW5kc0IubWF4LnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbGxpc2lvbiA9IGNvbGxpZGVzKHBhcnRBLCBwYXJ0QiwgcGFpcnMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbGxpc2lvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25zLnB1c2goY29sbGlzaW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29sbGlzaW9ucztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgYm90aCBzdXBwbGllZCBjb2xsaXNpb24gZmlsdGVycyB3aWxsIGFsbG93IGEgY29sbGlzaW9uIHRvIG9jY3VyLlxuICAgICAqIFNlZSBgYm9keS5jb2xsaXNpb25GaWx0ZXJgIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAqIEBtZXRob2QgY2FuQ29sbGlkZVxuICAgICAqIEBwYXJhbSB7fSBmaWx0ZXJBXG4gICAgICogQHBhcmFtIHt9IGZpbHRlckJcbiAgICAgKiBAcmV0dXJuIHtib29sfSBgdHJ1ZWAgaWYgY29sbGlzaW9uIGNhbiBvY2N1clxuICAgICAqL1xuICAgIERldGVjdG9yLmNhbkNvbGxpZGUgPSBmdW5jdGlvbihmaWx0ZXJBLCBmaWx0ZXJCKSB7XG4gICAgICAgIGlmIChmaWx0ZXJBLmdyb3VwID09PSBmaWx0ZXJCLmdyb3VwICYmIGZpbHRlckEuZ3JvdXAgIT09IDApXG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyQS5ncm91cCA+IDA7XG5cbiAgICAgICAgcmV0dXJuIChmaWx0ZXJBLm1hc2sgJiBmaWx0ZXJCLmNhdGVnb3J5KSAhPT0gMCAmJiAoZmlsdGVyQi5tYXNrICYgZmlsdGVyQS5jYXRlZ29yeSkgIT09IDA7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb21wYXJpc29uIGZ1bmN0aW9uIHVzZWQgaW4gdGhlIGJyb2FkcGhhc2UgYWxnb3JpdGhtLlxuICAgICAqIFJldHVybnMgdGhlIHNpZ25lZCBkZWx0YSBvZiB0aGUgYm9kaWVzIGJvdW5kcyBvbiB0aGUgeC1heGlzLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBfc29ydENvbXBhcmVcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlBXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5QlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIHNpZ25lZCBkZWx0YSB1c2VkIGZvciBzb3J0aW5nXG4gICAgICovXG4gICAgRGV0ZWN0b3IuX2NvbXBhcmVCb3VuZHNYID0gZnVuY3Rpb24oYm9keUEsIGJvZHlCKSB7XG4gICAgICAgIHJldHVybiBib2R5QS5ib3VuZHMubWluLnggLSBib2R5Qi5ib3VuZHMubWluLng7XG4gICAgfTtcblxuICAgIC8qXG4gICAgKlxuICAgICogIFByb3BlcnRpZXMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFycmF5IG9mIGBNYXR0ZXIuQm9keWAgYmV0d2VlbiB3aGljaCB0aGUgZGV0ZWN0b3IgZmluZHMgY29sbGlzaW9ucy5cbiAgICAgKiBcbiAgICAgKiBfTm90ZTpfIFRoZSBvcmRlciBvZiBib2RpZXMgaW4gdGhpcyBhcnJheSBfaXMgbm90IGZpeGVkXyBhbmQgd2lsbCBiZSBjb250aW51YWxseSBtYW5hZ2VkIGJ5IHRoZSBkZXRlY3Rvci5cbiAgICAgKiBAcHJvcGVydHkgYm9kaWVzXG4gICAgICogQHR5cGUgYm9keVtdXG4gICAgICogQGRlZmF1bHQgW11cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIE9wdGlvbmFsLiBBIGBNYXR0ZXIuUGFpcnNgIG9iamVjdCBmcm9tIHdoaWNoIHByZXZpb3VzIGNvbGxpc2lvbiBvYmplY3RzIG1heSBiZSByZXVzZWQuIEludGVuZGVkIGZvciBpbnRlcm5hbCBgTWF0dGVyLkVuZ2luZWAgdXNhZ2UuXG4gICAgICogQHByb3BlcnR5IHBhaXJzXG4gICAgICogQHR5cGUge3BhaXJzfG51bGx9XG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMTUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLlBsdWdpbmAgbW9kdWxlIGNvbnRhaW5zIGZ1bmN0aW9ucyBmb3IgcmVnaXN0ZXJpbmcgYW5kIGluc3RhbGxpbmcgcGx1Z2lucyBvbiBtb2R1bGVzLlxuKlxuKiBAY2xhc3MgUGx1Z2luXG4qL1xuXG52YXIgUGx1Z2luID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gUGx1Z2luO1xuXG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgUGx1Z2luLl9yZWdpc3RyeSA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgcGx1Z2luIG9iamVjdCBzbyBpdCBjYW4gYmUgcmVzb2x2ZWQgbGF0ZXIgYnkgbmFtZS5cbiAgICAgKiBAbWV0aG9kIHJlZ2lzdGVyXG4gICAgICogQHBhcmFtIHBsdWdpbiB7fSBUaGUgcGx1Z2luIHRvIHJlZ2lzdGVyLlxuICAgICAqIEByZXR1cm4ge29iamVjdH0gVGhlIHBsdWdpbi5cbiAgICAgKi9cbiAgICBQbHVnaW4ucmVnaXN0ZXIgPSBmdW5jdGlvbihwbHVnaW4pIHtcbiAgICAgICAgaWYgKCFQbHVnaW4uaXNQbHVnaW4ocGx1Z2luKSkge1xuICAgICAgICAgICAgQ29tbW9uLndhcm4oJ1BsdWdpbi5yZWdpc3RlcjonLCBQbHVnaW4udG9TdHJpbmcocGx1Z2luKSwgJ2RvZXMgbm90IGltcGxlbWVudCBhbGwgcmVxdWlyZWQgZmllbGRzLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBsdWdpbi5uYW1lIGluIFBsdWdpbi5fcmVnaXN0cnkpIHtcbiAgICAgICAgICAgIHZhciByZWdpc3RlcmVkID0gUGx1Z2luLl9yZWdpc3RyeVtwbHVnaW4ubmFtZV0sXG4gICAgICAgICAgICAgICAgcGx1Z2luVmVyc2lvbiA9IFBsdWdpbi52ZXJzaW9uUGFyc2UocGx1Z2luLnZlcnNpb24pLm51bWJlcixcbiAgICAgICAgICAgICAgICByZWdpc3RlcmVkVmVyc2lvbiA9IFBsdWdpbi52ZXJzaW9uUGFyc2UocmVnaXN0ZXJlZC52ZXJzaW9uKS5udW1iZXI7XG5cbiAgICAgICAgICAgIGlmIChwbHVnaW5WZXJzaW9uID4gcmVnaXN0ZXJlZFZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICBDb21tb24ud2FybignUGx1Z2luLnJlZ2lzdGVyOicsIFBsdWdpbi50b1N0cmluZyhyZWdpc3RlcmVkKSwgJ3dhcyB1cGdyYWRlZCB0bycsIFBsdWdpbi50b1N0cmluZyhwbHVnaW4pKTtcbiAgICAgICAgICAgICAgICBQbHVnaW4uX3JlZ2lzdHJ5W3BsdWdpbi5uYW1lXSA9IHBsdWdpbjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGx1Z2luVmVyc2lvbiA8IHJlZ2lzdGVyZWRWZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLndhcm4oJ1BsdWdpbi5yZWdpc3RlcjonLCBQbHVnaW4udG9TdHJpbmcocmVnaXN0ZXJlZCksICdjYW4gbm90IGJlIGRvd25ncmFkZWQgdG8nLCBQbHVnaW4udG9TdHJpbmcocGx1Z2luKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBsdWdpbiAhPT0gcmVnaXN0ZXJlZCkge1xuICAgICAgICAgICAgICAgIENvbW1vbi53YXJuKCdQbHVnaW4ucmVnaXN0ZXI6JywgUGx1Z2luLnRvU3RyaW5nKHBsdWdpbiksICdpcyBhbHJlYWR5IHJlZ2lzdGVyZWQgdG8gZGlmZmVyZW50IHBsdWdpbiBvYmplY3QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFBsdWdpbi5fcmVnaXN0cnlbcGx1Z2luLm5hbWVdID0gcGx1Z2luO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBsdWdpbjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVzb2x2ZXMgYSBkZXBlbmRlbmN5IHRvIGEgcGx1Z2luIG9iamVjdCBmcm9tIHRoZSByZWdpc3RyeSBpZiBpdCBleGlzdHMuIFxuICAgICAqIFRoZSBgZGVwZW5kZW5jeWAgbWF5IGNvbnRhaW4gYSB2ZXJzaW9uLCBidXQgb25seSB0aGUgbmFtZSBtYXR0ZXJzIHdoZW4gcmVzb2x2aW5nLlxuICAgICAqIEBtZXRob2QgcmVzb2x2ZVxuICAgICAqIEBwYXJhbSBkZXBlbmRlbmN5IHtzdHJpbmd9IFRoZSBkZXBlbmRlbmN5LlxuICAgICAqIEByZXR1cm4ge29iamVjdH0gVGhlIHBsdWdpbiBpZiByZXNvbHZlZCwgb3RoZXJ3aXNlIGB1bmRlZmluZWRgLlxuICAgICAqL1xuICAgIFBsdWdpbi5yZXNvbHZlID0gZnVuY3Rpb24oZGVwZW5kZW5jeSkge1xuICAgICAgICByZXR1cm4gUGx1Z2luLl9yZWdpc3RyeVtQbHVnaW4uZGVwZW5kZW5jeVBhcnNlKGRlcGVuZGVuY3kpLm5hbWVdO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJldHR5IHByaW50ZWQgcGx1Z2luIG5hbWUgYW5kIHZlcnNpb24uXG4gICAgICogQG1ldGhvZCB0b1N0cmluZ1xuICAgICAqIEBwYXJhbSBwbHVnaW4ge30gVGhlIHBsdWdpbi5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFByZXR0eSBwcmludGVkIHBsdWdpbiBuYW1lIGFuZCB2ZXJzaW9uLlxuICAgICAqL1xuICAgIFBsdWdpbi50b1N0cmluZyA9IGZ1bmN0aW9uKHBsdWdpbikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHBsdWdpbiA9PT0gJ3N0cmluZycgPyBwbHVnaW4gOiAocGx1Z2luLm5hbWUgfHwgJ2Fub255bW91cycpICsgJ0AnICsgKHBsdWdpbi52ZXJzaW9uIHx8IHBsdWdpbi5yYW5nZSB8fCAnMC4wLjAnKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdCBtZWV0cyB0aGUgbWluaW11bSBzdGFuZGFyZCB0byBiZSBjb25zaWRlcmVkIGEgcGx1Z2luLlxuICAgICAqIFRoaXMgbWVhbnMgaXQgbXVzdCBkZWZpbmUgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICAgICAqIC0gYG5hbWVgXG4gICAgICogLSBgdmVyc2lvbmBcbiAgICAgKiAtIGBpbnN0YWxsYFxuICAgICAqIEBtZXRob2QgaXNQbHVnaW5cbiAgICAgKiBAcGFyYW0gb2JqIHt9IFRoZSBvYmogdG8gdGVzdC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhlIG9iamVjdCBjYW4gYmUgY29uc2lkZXJlZCBhIHBsdWdpbiBvdGhlcndpc2UgYGZhbHNlYC5cbiAgICAgKi9cbiAgICBQbHVnaW4uaXNQbHVnaW4gPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiBvYmoubmFtZSAmJiBvYmoudmVyc2lvbiAmJiBvYmouaW5zdGFsbDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgYSBwbHVnaW4gd2l0aCB0aGUgZ2l2ZW4gYG5hbWVgIGJlZW4gaW5zdGFsbGVkIG9uIGBtb2R1bGVgLlxuICAgICAqIEBtZXRob2QgaXNVc2VkXG4gICAgICogQHBhcmFtIG1vZHVsZSB7fSBUaGUgbW9kdWxlLlxuICAgICAqIEBwYXJhbSBuYW1lIHtzdHJpbmd9IFRoZSBwbHVnaW4gbmFtZS5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgaWYgYSBwbHVnaW4gd2l0aCB0aGUgZ2l2ZW4gYG5hbWVgIGJlZW4gaW5zdGFsbGVkIG9uIGBtb2R1bGVgLCBvdGhlcndpc2UgYGZhbHNlYC5cbiAgICAgKi9cbiAgICBQbHVnaW4uaXNVc2VkID0gZnVuY3Rpb24obW9kdWxlLCBuYW1lKSB7XG4gICAgICAgIHJldHVybiBtb2R1bGUudXNlZC5pbmRleE9mKG5hbWUpID4gLTE7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIGBwbHVnaW4uZm9yYCBpcyBhcHBsaWNhYmxlIHRvIGBtb2R1bGVgIGJ5IGNvbXBhcmluZyBhZ2FpbnN0IGBtb2R1bGUubmFtZWAgYW5kIGBtb2R1bGUudmVyc2lvbmAuXG4gICAgICogSWYgYHBsdWdpbi5mb3JgIGlzIG5vdCBzcGVjaWZpZWQgdGhlbiBpdCBpcyBhc3N1bWVkIHRvIGJlIGFwcGxpY2FibGUuXG4gICAgICogVGhlIHZhbHVlIG9mIGBwbHVnaW4uZm9yYCBpcyBhIHN0cmluZyBvZiB0aGUgZm9ybWF0IGAnbW9kdWxlLW5hbWUnYCBvciBgJ21vZHVsZS1uYW1lQHZlcnNpb24nYC5cbiAgICAgKiBAbWV0aG9kIGlzRm9yXG4gICAgICogQHBhcmFtIHBsdWdpbiB7fSBUaGUgcGx1Z2luLlxuICAgICAqIEBwYXJhbSBtb2R1bGUge30gVGhlIG1vZHVsZS5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgaWYgYHBsdWdpbi5mb3JgIGlzIGFwcGxpY2FibGUgdG8gYG1vZHVsZWAsIG90aGVyd2lzZSBgZmFsc2VgLlxuICAgICAqL1xuICAgIFBsdWdpbi5pc0ZvciA9IGZ1bmN0aW9uKHBsdWdpbiwgbW9kdWxlKSB7XG4gICAgICAgIHZhciBwYXJzZWQgPSBwbHVnaW4uZm9yICYmIFBsdWdpbi5kZXBlbmRlbmN5UGFyc2UocGx1Z2luLmZvcik7XG4gICAgICAgIHJldHVybiAhcGx1Z2luLmZvciB8fCAobW9kdWxlLm5hbWUgPT09IHBhcnNlZC5uYW1lICYmIFBsdWdpbi52ZXJzaW9uU2F0aXNmaWVzKG1vZHVsZS52ZXJzaW9uLCBwYXJzZWQucmFuZ2UpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW5zdGFsbHMgdGhlIHBsdWdpbnMgYnkgY2FsbGluZyBgcGx1Z2luLmluc3RhbGxgIG9uIGVhY2ggcGx1Z2luIHNwZWNpZmllZCBpbiBgcGx1Z2luc2AgaWYgcGFzc2VkLCBvdGhlcndpc2UgYG1vZHVsZS51c2VzYC5cbiAgICAgKiBGb3IgaW5zdGFsbGluZyBwbHVnaW5zIG9uIGBNYXR0ZXJgIHNlZSB0aGUgY29udmVuaWVuY2UgZnVuY3Rpb24gYE1hdHRlci51c2VgLlxuICAgICAqIFBsdWdpbnMgbWF5IGJlIHNwZWNpZmllZCBlaXRoZXIgYnkgdGhlaXIgbmFtZSBvciBhIHJlZmVyZW5jZSB0byB0aGUgcGx1Z2luIG9iamVjdC5cbiAgICAgKiBQbHVnaW5zIHRoZW1zZWx2ZXMgbWF5IHNwZWNpZnkgZnVydGhlciBkZXBlbmRlbmNpZXMsIGJ1dCBlYWNoIHBsdWdpbiBpcyBpbnN0YWxsZWQgb25seSBvbmNlLlxuICAgICAqIE9yZGVyIGlzIGltcG9ydGFudCwgYSB0b3BvbG9naWNhbCBzb3J0IGlzIHBlcmZvcm1lZCB0byBmaW5kIHRoZSBiZXN0IHJlc3VsdGluZyBvcmRlciBvZiBpbnN0YWxsYXRpb24uXG4gICAgICogVGhpcyBzb3J0aW5nIGF0dGVtcHRzIHRvIHNhdGlzZnkgZXZlcnkgZGVwZW5kZW5jeSdzIHJlcXVlc3RlZCBvcmRlcmluZywgYnV0IG1heSBub3QgYmUgZXhhY3QgaW4gYWxsIGNhc2VzLlxuICAgICAqIFRoaXMgZnVuY3Rpb24gbG9ncyB0aGUgcmVzdWx0aW5nIHN0YXR1cyBvZiBlYWNoIGRlcGVuZGVuY3kgaW4gdGhlIGNvbnNvbGUsIGFsb25nIHdpdGggYW55IHdhcm5pbmdzLlxuICAgICAqIC0gQSBncmVlbiB0aWNrIOKchSBpbmRpY2F0ZXMgYSBkZXBlbmRlbmN5IHdhcyByZXNvbHZlZCBhbmQgaW5zdGFsbGVkLlxuICAgICAqIC0gQW4gb3JhbmdlIGRpYW1vbmQg8J+UtiBpbmRpY2F0ZXMgYSBkZXBlbmRlbmN5IHdhcyByZXNvbHZlZCBidXQgYSB3YXJuaW5nIHdhcyB0aHJvd24gZm9yIGl0IG9yIG9uZSBpZiBpdHMgZGVwZW5kZW5jaWVzLlxuICAgICAqIC0gQSByZWQgY3Jvc3Mg4p2MIGluZGljYXRlcyBhIGRlcGVuZGVuY3kgY291bGQgbm90IGJlIHJlc29sdmVkLlxuICAgICAqIEF2b2lkIGNhbGxpbmcgdGhpcyBmdW5jdGlvbiBtdWx0aXBsZSB0aW1lcyBvbiB0aGUgc2FtZSBtb2R1bGUgdW5sZXNzIHlvdSBpbnRlbmQgdG8gbWFudWFsbHkgY29udHJvbCBpbnN0YWxsYXRpb24gb3JkZXIuXG4gICAgICogQG1ldGhvZCB1c2VcbiAgICAgKiBAcGFyYW0gbW9kdWxlIHt9IFRoZSBtb2R1bGUgaW5zdGFsbCBwbHVnaW5zIG9uLlxuICAgICAqIEBwYXJhbSBbcGx1Z2lucz1tb2R1bGUudXNlc10ge30gVGhlIHBsdWdpbnMgdG8gaW5zdGFsbCBvbiBtb2R1bGUgKG9wdGlvbmFsLCBkZWZhdWx0cyB0byBgbW9kdWxlLnVzZXNgKS5cbiAgICAgKi9cbiAgICBQbHVnaW4udXNlID0gZnVuY3Rpb24obW9kdWxlLCBwbHVnaW5zKSB7XG4gICAgICAgIG1vZHVsZS51c2VzID0gKG1vZHVsZS51c2VzIHx8IFtdKS5jb25jYXQocGx1Z2lucyB8fCBbXSk7XG5cbiAgICAgICAgaWYgKG1vZHVsZS51c2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgQ29tbW9uLndhcm4oJ1BsdWdpbi51c2U6JywgUGx1Z2luLnRvU3RyaW5nKG1vZHVsZSksICdkb2VzIG5vdCBzcGVjaWZ5IGFueSBkZXBlbmRlbmNpZXMgdG8gaW5zdGFsbC4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkZXBlbmRlbmNpZXMgPSBQbHVnaW4uZGVwZW5kZW5jaWVzKG1vZHVsZSksXG4gICAgICAgICAgICBzb3J0ZWREZXBlbmRlbmNpZXMgPSBDb21tb24udG9wb2xvZ2ljYWxTb3J0KGRlcGVuZGVuY2llcyksXG4gICAgICAgICAgICBzdGF0dXMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvcnRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHNvcnRlZERlcGVuZGVuY2llc1tpXSA9PT0gbW9kdWxlLm5hbWUpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHBsdWdpbiA9IFBsdWdpbi5yZXNvbHZlKHNvcnRlZERlcGVuZGVuY2llc1tpXSk7XG5cbiAgICAgICAgICAgIGlmICghcGx1Z2luKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzLnB1c2goJ+KdjCAnICsgc29ydGVkRGVwZW5kZW5jaWVzW2ldKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFBsdWdpbi5pc1VzZWQobW9kdWxlLCBwbHVnaW4ubmFtZSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFQbHVnaW4uaXNGb3IocGx1Z2luLCBtb2R1bGUpKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLndhcm4oJ1BsdWdpbi51c2U6JywgUGx1Z2luLnRvU3RyaW5nKHBsdWdpbiksICdpcyBmb3InLCBwbHVnaW4uZm9yLCAnYnV0IGluc3RhbGxlZCBvbicsIFBsdWdpbi50b1N0cmluZyhtb2R1bGUpICsgJy4nKTtcbiAgICAgICAgICAgICAgICBwbHVnaW4uX3dhcm5lZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwbHVnaW4uaW5zdGFsbCkge1xuICAgICAgICAgICAgICAgIHBsdWdpbi5pbnN0YWxsKG1vZHVsZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIENvbW1vbi53YXJuKCdQbHVnaW4udXNlOicsIFBsdWdpbi50b1N0cmluZyhwbHVnaW4pLCAnZG9lcyBub3Qgc3BlY2lmeSBhbiBpbnN0YWxsIGZ1bmN0aW9uLicpO1xuICAgICAgICAgICAgICAgIHBsdWdpbi5fd2FybmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBsdWdpbi5fd2FybmVkKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzLnB1c2goJ/CflLYgJyArIFBsdWdpbi50b1N0cmluZyhwbHVnaW4pKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgcGx1Z2luLl93YXJuZWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXR1cy5wdXNoKCfinIUgJyArIFBsdWdpbi50b1N0cmluZyhwbHVnaW4pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW9kdWxlLnVzZWQucHVzaChwbHVnaW4ubmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhdHVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIENvbW1vbi5pbmZvKHN0YXR1cy5qb2luKCcgICcpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZWN1cnNpdmVseSBmaW5kcyBhbGwgb2YgYSBtb2R1bGUncyBkZXBlbmRlbmNpZXMgYW5kIHJldHVybnMgYSBmbGF0IGRlcGVuZGVuY3kgZ3JhcGguXG4gICAgICogQG1ldGhvZCBkZXBlbmRlbmNpZXNcbiAgICAgKiBAcGFyYW0gbW9kdWxlIHt9IFRoZSBtb2R1bGUuXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBBIGRlcGVuZGVuY3kgZ3JhcGguXG4gICAgICovXG4gICAgUGx1Z2luLmRlcGVuZGVuY2llcyA9IGZ1bmN0aW9uKG1vZHVsZSwgdHJhY2tlZCkge1xuICAgICAgICB2YXIgcGFyc2VkQmFzZSA9IFBsdWdpbi5kZXBlbmRlbmN5UGFyc2UobW9kdWxlKSxcbiAgICAgICAgICAgIG5hbWUgPSBwYXJzZWRCYXNlLm5hbWU7XG5cbiAgICAgICAgdHJhY2tlZCA9IHRyYWNrZWQgfHwge307XG5cbiAgICAgICAgaWYgKG5hbWUgaW4gdHJhY2tlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbW9kdWxlID0gUGx1Z2luLnJlc29sdmUobW9kdWxlKSB8fCBtb2R1bGU7XG5cbiAgICAgICAgdHJhY2tlZFtuYW1lXSA9IENvbW1vbi5tYXAobW9kdWxlLnVzZXMgfHwgW10sIGZ1bmN0aW9uKGRlcGVuZGVuY3kpIHtcbiAgICAgICAgICAgIGlmIChQbHVnaW4uaXNQbHVnaW4oZGVwZW5kZW5jeSkpIHtcbiAgICAgICAgICAgICAgICBQbHVnaW4ucmVnaXN0ZXIoZGVwZW5kZW5jeSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwYXJzZWQgPSBQbHVnaW4uZGVwZW5kZW5jeVBhcnNlKGRlcGVuZGVuY3kpLFxuICAgICAgICAgICAgICAgIHJlc29sdmVkID0gUGx1Z2luLnJlc29sdmUoZGVwZW5kZW5jeSk7XG5cbiAgICAgICAgICAgIGlmIChyZXNvbHZlZCAmJiAhUGx1Z2luLnZlcnNpb25TYXRpc2ZpZXMocmVzb2x2ZWQudmVyc2lvbiwgcGFyc2VkLnJhbmdlKSkge1xuICAgICAgICAgICAgICAgIENvbW1vbi53YXJuKFxuICAgICAgICAgICAgICAgICAgICAnUGx1Z2luLmRlcGVuZGVuY2llczonLCBQbHVnaW4udG9TdHJpbmcocmVzb2x2ZWQpLCAnZG9lcyBub3Qgc2F0aXNmeScsXG4gICAgICAgICAgICAgICAgICAgIFBsdWdpbi50b1N0cmluZyhwYXJzZWQpLCAndXNlZCBieScsIFBsdWdpbi50b1N0cmluZyhwYXJzZWRCYXNlKSArICcuJ1xuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlZC5fd2FybmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBtb2R1bGUuX3dhcm5lZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgICAgICAgICAgIENvbW1vbi53YXJuKFxuICAgICAgICAgICAgICAgICAgICAnUGx1Z2luLmRlcGVuZGVuY2llczonLCBQbHVnaW4udG9TdHJpbmcoZGVwZW5kZW5jeSksICd1c2VkIGJ5JyxcbiAgICAgICAgICAgICAgICAgICAgUGx1Z2luLnRvU3RyaW5nKHBhcnNlZEJhc2UpLCAnY291bGQgbm90IGJlIHJlc29sdmVkLidcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgbW9kdWxlLl93YXJuZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VkLm5hbWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJhY2tlZFtuYW1lXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgUGx1Z2luLmRlcGVuZGVuY2llcyh0cmFja2VkW25hbWVdW2ldLCB0cmFja2VkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cmFja2VkO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgYSBkZXBlbmRlbmN5IHN0cmluZyBpbnRvIGl0cyBjb21wb25lbnRzLlxuICAgICAqIFRoZSBgZGVwZW5kZW5jeWAgaXMgYSBzdHJpbmcgb2YgdGhlIGZvcm1hdCBgJ21vZHVsZS1uYW1lJ2Agb3IgYCdtb2R1bGUtbmFtZUB2ZXJzaW9uJ2AuXG4gICAgICogU2VlIGRvY3VtZW50YXRpb24gZm9yIGBQbHVnaW4udmVyc2lvblBhcnNlYCBmb3IgYSBkZXNjcmlwdGlvbiBvZiB0aGUgZm9ybWF0LlxuICAgICAqIFRoaXMgZnVuY3Rpb24gY2FuIGFsc28gaGFuZGxlIGRlcGVuZGVuY2llcyB0aGF0IGFyZSBhbHJlYWR5IHJlc29sdmVkIChlLmcuIGEgbW9kdWxlIG9iamVjdCkuXG4gICAgICogQG1ldGhvZCBkZXBlbmRlbmN5UGFyc2VcbiAgICAgKiBAcGFyYW0gZGVwZW5kZW5jeSB7c3RyaW5nfSBUaGUgZGVwZW5kZW5jeSBvZiB0aGUgZm9ybWF0IGAnbW9kdWxlLW5hbWUnYCBvciBgJ21vZHVsZS1uYW1lQHZlcnNpb24nYC5cbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IFRoZSBkZXBlbmRlbmN5IHBhcnNlZCBpbnRvIGl0cyBjb21wb25lbnRzLlxuICAgICAqL1xuICAgIFBsdWdpbi5kZXBlbmRlbmN5UGFyc2UgPSBmdW5jdGlvbihkZXBlbmRlbmN5KSB7XG4gICAgICAgIGlmIChDb21tb24uaXNTdHJpbmcoZGVwZW5kZW5jeSkpIHtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gL15bXFx3LV0rKEAoXFwqfFtcXF5+XT9cXGQrXFwuXFxkK1xcLlxcZCsoLVswLTlBLVphLXotK10rKT8pKT8kLztcblxuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuLnRlc3QoZGVwZW5kZW5jeSkpIHtcbiAgICAgICAgICAgICAgICBDb21tb24ud2FybignUGx1Z2luLmRlcGVuZGVuY3lQYXJzZTonLCBkZXBlbmRlbmN5LCAnaXMgbm90IGEgdmFsaWQgZGVwZW5kZW5jeSBzdHJpbmcuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogZGVwZW5kZW5jeS5zcGxpdCgnQCcpWzBdLFxuICAgICAgICAgICAgICAgIHJhbmdlOiBkZXBlbmRlbmN5LnNwbGl0KCdAJylbMV0gfHwgJyonXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IGRlcGVuZGVuY3kubmFtZSxcbiAgICAgICAgICAgIHJhbmdlOiBkZXBlbmRlbmN5LnJhbmdlIHx8IGRlcGVuZGVuY3kudmVyc2lvblxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgYSB2ZXJzaW9uIHN0cmluZyBpbnRvIGl0cyBjb21wb25lbnRzLiAgXG4gICAgICogVmVyc2lvbnMgYXJlIHN0cmljdGx5IG9mIHRoZSBmb3JtYXQgYHgueS56YCAoYXMgaW4gW3NlbXZlcl0oaHR0cDovL3NlbXZlci5vcmcvKSkuXG4gICAgICogVmVyc2lvbnMgbWF5IG9wdGlvbmFsbHkgaGF2ZSBhIHByZXJlbGVhc2UgdGFnIGluIHRoZSBmb3JtYXQgYHgueS56LWFscGhhYC5cbiAgICAgKiBSYW5nZXMgYXJlIGEgc3RyaWN0IHN1YnNldCBvZiBbbnBtIHJhbmdlc10oaHR0cHM6Ly9kb2NzLm5wbWpzLmNvbS9taXNjL3NlbXZlciNhZHZhbmNlZC1yYW5nZS1zeW50YXgpLlxuICAgICAqIE9ubHkgdGhlIGZvbGxvd2luZyByYW5nZSB0eXBlcyBhcmUgc3VwcG9ydGVkOlxuICAgICAqIC0gVGlsZGUgcmFuZ2VzIGUuZy4gYH4xLjIuM2BcbiAgICAgKiAtIENhcmV0IHJhbmdlcyBlLmcuIGBeMS4yLjNgXG4gICAgICogLSBHcmVhdGVyIHRoYW4gcmFuZ2VzIGUuZy4gYD4xLjIuM2BcbiAgICAgKiAtIEdyZWF0ZXIgdGhhbiBvciBlcXVhbCByYW5nZXMgZS5nLiBgPj0xLjIuM2BcbiAgICAgKiAtIEV4YWN0IHZlcnNpb24gZS5nLiBgMS4yLjNgXG4gICAgICogLSBBbnkgdmVyc2lvbiBgKmBcbiAgICAgKiBAbWV0aG9kIHZlcnNpb25QYXJzZVxuICAgICAqIEBwYXJhbSByYW5nZSB7c3RyaW5nfSBUaGUgdmVyc2lvbiBzdHJpbmcuXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBUaGUgdmVyc2lvbiByYW5nZSBwYXJzZWQgaW50byBpdHMgY29tcG9uZW50cy5cbiAgICAgKi9cbiAgICBQbHVnaW4udmVyc2lvblBhcnNlID0gZnVuY3Rpb24ocmFuZ2UpIHtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSAvXihcXCopfChcXF58fnw+PXw+KT9cXHMqKChcXGQrKVxcLihcXGQrKVxcLihcXGQrKSkoLVswLTlBLVphLXotK10rKT8kLztcblxuICAgICAgICBpZiAoIXBhdHRlcm4udGVzdChyYW5nZSkpIHtcbiAgICAgICAgICAgIENvbW1vbi53YXJuKCdQbHVnaW4udmVyc2lvblBhcnNlOicsIHJhbmdlLCAnaXMgbm90IGEgdmFsaWQgdmVyc2lvbiBvciByYW5nZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwYXJ0cyA9IHBhdHRlcm4uZXhlYyhyYW5nZSk7XG4gICAgICAgIHZhciBtYWpvciA9IE51bWJlcihwYXJ0c1s0XSk7XG4gICAgICAgIHZhciBtaW5vciA9IE51bWJlcihwYXJ0c1s1XSk7XG4gICAgICAgIHZhciBwYXRjaCA9IE51bWJlcihwYXJ0c1s2XSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzUmFuZ2U6IEJvb2xlYW4ocGFydHNbMV0gfHwgcGFydHNbMl0pLFxuICAgICAgICAgICAgdmVyc2lvbjogcGFydHNbM10sXG4gICAgICAgICAgICByYW5nZTogcmFuZ2UsXG4gICAgICAgICAgICBvcGVyYXRvcjogcGFydHNbMV0gfHwgcGFydHNbMl0gfHwgJycsXG4gICAgICAgICAgICBtYWpvcjogbWFqb3IsXG4gICAgICAgICAgICBtaW5vcjogbWlub3IsXG4gICAgICAgICAgICBwYXRjaDogcGF0Y2gsXG4gICAgICAgICAgICBwYXJ0czogW21ham9yLCBtaW5vciwgcGF0Y2hdLFxuICAgICAgICAgICAgcHJlcmVsZWFzZTogcGFydHNbN10sXG4gICAgICAgICAgICBudW1iZXI6IG1ham9yICogMWU4ICsgbWlub3IgKiAxZTQgKyBwYXRjaFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiBgdmVyc2lvbmAgc2F0aXNmaWVzIHRoZSBnaXZlbiBgcmFuZ2VgLlxuICAgICAqIFNlZSBkb2N1bWVudGF0aW9uIGZvciBgUGx1Z2luLnZlcnNpb25QYXJzZWAgZm9yIGEgZGVzY3JpcHRpb24gb2YgdGhlIGZvcm1hdC5cbiAgICAgKiBJZiBhIHZlcnNpb24gb3IgcmFuZ2UgaXMgbm90IHNwZWNpZmllZCwgdGhlbiBhbnkgdmVyc2lvbiAoYCpgKSBpcyBhc3N1bWVkIHRvIHNhdGlzZnkuXG4gICAgICogQG1ldGhvZCB2ZXJzaW9uU2F0aXNmaWVzXG4gICAgICogQHBhcmFtIHZlcnNpb24ge3N0cmluZ30gVGhlIHZlcnNpb24gc3RyaW5nLlxuICAgICAqIEBwYXJhbSByYW5nZSB7c3RyaW5nfSBUaGUgcmFuZ2Ugc3RyaW5nLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCBpZiBgdmVyc2lvbmAgc2F0aXNmaWVzIGByYW5nZWAsIG90aGVyd2lzZSBgZmFsc2VgLlxuICAgICAqL1xuICAgIFBsdWdpbi52ZXJzaW9uU2F0aXNmaWVzID0gZnVuY3Rpb24odmVyc2lvbiwgcmFuZ2UpIHtcbiAgICAgICAgcmFuZ2UgPSByYW5nZSB8fCAnKic7XG5cbiAgICAgICAgdmFyIHIgPSBQbHVnaW4udmVyc2lvblBhcnNlKHJhbmdlKSxcbiAgICAgICAgICAgIHYgPSBQbHVnaW4udmVyc2lvblBhcnNlKHZlcnNpb24pO1xuXG4gICAgICAgIGlmIChyLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIGlmIChyLm9wZXJhdG9yID09PSAnKicgfHwgdmVyc2lvbiA9PT0gJyonKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyLm9wZXJhdG9yID09PSAnPicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdi5udW1iZXIgPiByLm51bWJlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHIub3BlcmF0b3IgPT09ICc+PScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdi5udW1iZXIgPj0gci5udW1iZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyLm9wZXJhdG9yID09PSAnficpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdi5tYWpvciA9PT0gci5tYWpvciAmJiB2Lm1pbm9yID09PSByLm1pbm9yICYmIHYucGF0Y2ggPj0gci5wYXRjaDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHIub3BlcmF0b3IgPT09ICdeJykge1xuICAgICAgICAgICAgICAgIGlmIChyLm1ham9yID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdi5tYWpvciA9PT0gci5tYWpvciAmJiB2Lm51bWJlciA+PSByLm51bWJlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoci5taW5vciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHYubWlub3IgPT09IHIubWlub3IgJiYgdi5wYXRjaCA+PSByLnBhdGNoO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB2LnBhdGNoID09PSByLnBhdGNoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZlcnNpb24gPT09IHJhbmdlIHx8IHZlcnNpb24gPT09ICcqJztcbiAgICB9O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMTYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLlJlbmRlcmAgbW9kdWxlIGlzIGEgc2ltcGxlIGNhbnZhcyBiYXNlZCByZW5kZXJlciBmb3IgdmlzdWFsaXNpbmcgaW5zdGFuY2VzIG9mIGBNYXR0ZXIuRW5naW5lYC5cbiogSXQgaXMgaW50ZW5kZWQgZm9yIGRldmVsb3BtZW50IGFuZCBkZWJ1Z2dpbmcgcHVycG9zZXMsIGJ1dCBtYXkgYWxzbyBiZSBzdWl0YWJsZSBmb3Igc2ltcGxlIGdhbWVzLlxuKiBJdCBpbmNsdWRlcyBhIG51bWJlciBvZiBkcmF3aW5nIG9wdGlvbnMgaW5jbHVkaW5nIHdpcmVmcmFtZSwgdmVjdG9yIHdpdGggc3VwcG9ydCBmb3Igc3ByaXRlcyBhbmQgdmlld3BvcnRzLlxuKlxuKiBAY2xhc3MgUmVuZGVyXG4qL1xuXG52YXIgUmVuZGVyID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gUmVuZGVyO1xuXG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBDb21wb3NpdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xudmFyIEJvdW5kcyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG52YXIgRXZlbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbnZhciBWZWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xudmFyIE1vdXNlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIHZhciBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lLFxuICAgICAgICBfY2FuY2VsQW5pbWF0aW9uRnJhbWU7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgX3JlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBmdW5jdGlvbihjYWxsYmFjayl7IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBjYWxsYmFjayhDb21tb24ubm93KCkpOyB9LCAxMDAwIC8gNjApOyB9O1xuXG4gICAgICAgIF9jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc0NhbmNlbEFuaW1hdGlvbkZyYW1lO1xuICAgIH1cblxuICAgIFJlbmRlci5fZ29vZEZwcyA9IDMwO1xuICAgIFJlbmRlci5fZ29vZERlbHRhID0gMTAwMCAvIDYwO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyByZW5kZXJlci4gVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBhbnkgcHJvcGVydGllcyB5b3Ugd2lzaCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHMuXG4gICAgICogQWxsIHByb3BlcnRpZXMgaGF2ZSBkZWZhdWx0IHZhbHVlcywgYW5kIG1hbnkgYXJlIHByZS1jYWxjdWxhdGVkIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gb3RoZXIgcHJvcGVydGllcy5cbiAgICAgKiBTZWUgdGhlIHByb3BlcnRpZXMgc2VjdGlvbiBiZWxvdyBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gd2hhdCB5b3UgY2FuIHBhc3MgdmlhIHRoZSBgb3B0aW9uc2Agb2JqZWN0LlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEByZXR1cm4ge3JlbmRlcn0gQSBuZXcgcmVuZGVyZXJcbiAgICAgKi9cbiAgICBSZW5kZXIuY3JlYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBjb250cm9sbGVyOiBSZW5kZXIsXG4gICAgICAgICAgICBlbmdpbmU6IG51bGwsXG4gICAgICAgICAgICBlbGVtZW50OiBudWxsLFxuICAgICAgICAgICAgY2FudmFzOiBudWxsLFxuICAgICAgICAgICAgbW91c2U6IG51bGwsXG4gICAgICAgICAgICBmcmFtZVJlcXVlc3RJZDogbnVsbCxcbiAgICAgICAgICAgIHRpbWluZzoge1xuICAgICAgICAgICAgICAgIGhpc3RvcnlTaXplOiA2MCxcbiAgICAgICAgICAgICAgICBkZWx0YTogMCxcbiAgICAgICAgICAgICAgICBkZWx0YUhpc3Rvcnk6IFtdLFxuICAgICAgICAgICAgICAgIGxhc3RUaW1lOiAwLFxuICAgICAgICAgICAgICAgIGxhc3RUaW1lc3RhbXA6IDAsXG4gICAgICAgICAgICAgICAgbGFzdEVsYXBzZWQ6IDAsXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wRWxhcHNlZDogMCxcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXBFbGFwc2VkSGlzdG9yeTogW10sXG4gICAgICAgICAgICAgICAgZW5naW5lRGVsdGFIaXN0b3J5OiBbXSxcbiAgICAgICAgICAgICAgICBlbmdpbmVFbGFwc2VkSGlzdG9yeTogW10sXG4gICAgICAgICAgICAgICAgZWxhcHNlZEhpc3Rvcnk6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgcGl4ZWxSYXRpbzogMSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzE0MTUxZicsXG4gICAgICAgICAgICAgICAgd2lyZWZyYW1lQmFja2dyb3VuZDogJyMxNDE1MWYnLFxuICAgICAgICAgICAgICAgIGhhc0JvdW5kczogISFvcHRpb25zLmJvdW5kcyxcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHdpcmVmcmFtZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgc2hvd1NsZWVwaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNob3dEZWJ1ZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd1N0YXRzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93UGVyZm9ybWFuY2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dCb3VuZHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dWZWxvY2l0eTogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd0NvbGxpc2lvbnM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dTZXBhcmF0aW9uczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd0F4ZXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dQb3NpdGlvbnM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dBbmdsZUluZGljYXRvcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd0lkczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd1ZlcnRleE51bWJlcnM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dDb252ZXhIdWxsczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd0ludGVybmFsRWRnZXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dNb3VzZVBvc2l0aW9uOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciByZW5kZXIgPSBDb21tb24uZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICBpZiAocmVuZGVyLmNhbnZhcykge1xuICAgICAgICAgICAgcmVuZGVyLmNhbnZhcy53aWR0aCA9IHJlbmRlci5vcHRpb25zLndpZHRoIHx8IHJlbmRlci5jYW52YXMud2lkdGg7XG4gICAgICAgICAgICByZW5kZXIuY2FudmFzLmhlaWdodCA9IHJlbmRlci5vcHRpb25zLmhlaWdodCB8fCByZW5kZXIuY2FudmFzLmhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbmRlci5tb3VzZSA9IG9wdGlvbnMubW91c2U7XG4gICAgICAgIHJlbmRlci5lbmdpbmUgPSBvcHRpb25zLmVuZ2luZTtcbiAgICAgICAgcmVuZGVyLmNhbnZhcyA9IHJlbmRlci5jYW52YXMgfHwgX2NyZWF0ZUNhbnZhcyhyZW5kZXIub3B0aW9ucy53aWR0aCwgcmVuZGVyLm9wdGlvbnMuaGVpZ2h0KTtcbiAgICAgICAgcmVuZGVyLmNvbnRleHQgPSByZW5kZXIuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHJlbmRlci50ZXh0dXJlcyA9IHt9O1xuXG4gICAgICAgIHJlbmRlci5ib3VuZHMgPSByZW5kZXIuYm91bmRzIHx8IHtcbiAgICAgICAgICAgIG1pbjoge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1heDoge1xuICAgICAgICAgICAgICAgIHg6IHJlbmRlci5jYW52YXMud2lkdGgsXG4gICAgICAgICAgICAgICAgeTogcmVuZGVyLmNhbnZhcy5oZWlnaHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBmb3IgdGVtcG9yYXJ5IGJhY2sgY29tcGF0aWJpbGl0eSBvbmx5XG4gICAgICAgIHJlbmRlci5vcHRpb25zLnNob3dCcm9hZHBoYXNlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHJlbmRlci5vcHRpb25zLnBpeGVsUmF0aW8gIT09IDEpIHtcbiAgICAgICAgICAgIFJlbmRlci5zZXRQaXhlbFJhdGlvKHJlbmRlciwgcmVuZGVyLm9wdGlvbnMucGl4ZWxSYXRpbyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQ29tbW9uLmlzRWxlbWVudChyZW5kZXIuZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHJlbmRlci5lbGVtZW50LmFwcGVuZENoaWxkKHJlbmRlci5jYW52YXMpO1xuICAgICAgICB9IGVsc2UgaWYgKCFyZW5kZXIuY2FudmFzLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIENvbW1vbi5sb2coJ1JlbmRlci5jcmVhdGU6IG9wdGlvbnMuZWxlbWVudCB3YXMgdW5kZWZpbmVkLCByZW5kZXIuY2FudmFzIHdhcyBjcmVhdGVkIGJ1dCBub3QgYXBwZW5kZWQnLCAnd2FybicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlbmRlcjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ29udGludW91c2x5IHVwZGF0ZXMgdGhlIHJlbmRlciBjYW52YXMgb24gdGhlIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGV2ZW50LlxuICAgICAqIEBtZXRob2QgcnVuXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqL1xuICAgIFJlbmRlci5ydW4gPSBmdW5jdGlvbihyZW5kZXIpIHtcbiAgICAgICAgKGZ1bmN0aW9uIGxvb3AodGltZSl7XG4gICAgICAgICAgICByZW5kZXIuZnJhbWVSZXF1ZXN0SWQgPSBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBfdXBkYXRlVGltaW5nKHJlbmRlciwgdGltZSk7XG5cbiAgICAgICAgICAgIFJlbmRlci53b3JsZChyZW5kZXIsIHRpbWUpO1xuXG4gICAgICAgICAgICBpZiAocmVuZGVyLm9wdGlvbnMuc2hvd1N0YXRzIHx8IHJlbmRlci5vcHRpb25zLnNob3dEZWJ1Zykge1xuICAgICAgICAgICAgICAgIFJlbmRlci5zdGF0cyhyZW5kZXIsIHJlbmRlci5jb250ZXh0LCB0aW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlbmRlci5vcHRpb25zLnNob3dQZXJmb3JtYW5jZSB8fCByZW5kZXIub3B0aW9ucy5zaG93RGVidWcpIHtcbiAgICAgICAgICAgICAgICBSZW5kZXIucGVyZm9ybWFuY2UocmVuZGVyLCByZW5kZXIuY29udGV4dCwgdGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEVuZHMgZXhlY3V0aW9uIG9mIGBSZW5kZXIucnVuYCBvbiB0aGUgZ2l2ZW4gYHJlbmRlcmAsIGJ5IGNhbmNlbGluZyB0aGUgYW5pbWF0aW9uIGZyYW1lIHJlcXVlc3QgZXZlbnQgbG9vcC5cbiAgICAgKiBAbWV0aG9kIHN0b3BcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICovXG4gICAgUmVuZGVyLnN0b3AgPSBmdW5jdGlvbihyZW5kZXIpIHtcbiAgICAgICAgX2NhbmNlbEFuaW1hdGlvbkZyYW1lKHJlbmRlci5mcmFtZVJlcXVlc3RJZCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHBpeGVsIHJhdGlvIG9mIHRoZSByZW5kZXJlciBhbmQgdXBkYXRlcyB0aGUgY2FudmFzLlxuICAgICAqIFRvIGF1dG9tYXRpY2FsbHkgZGV0ZWN0IHRoZSBjb3JyZWN0IHJhdGlvLCBwYXNzIHRoZSBzdHJpbmcgYCdhdXRvJ2AgZm9yIGBwaXhlbFJhdGlvYC5cbiAgICAgKiBAbWV0aG9kIHNldFBpeGVsUmF0aW9cbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBpeGVsUmF0aW9cbiAgICAgKi9cbiAgICBSZW5kZXIuc2V0UGl4ZWxSYXRpbyA9IGZ1bmN0aW9uKHJlbmRlciwgcGl4ZWxSYXRpbykge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHJlbmRlci5vcHRpb25zLFxuICAgICAgICAgICAgY2FudmFzID0gcmVuZGVyLmNhbnZhcztcblxuICAgICAgICBpZiAocGl4ZWxSYXRpbyA9PT0gJ2F1dG8nKSB7XG4gICAgICAgICAgICBwaXhlbFJhdGlvID0gX2dldFBpeGVsUmF0aW8oY2FudmFzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMucGl4ZWxSYXRpbyA9IHBpeGVsUmF0aW87XG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGl4ZWwtcmF0aW8nLCBwaXhlbFJhdGlvKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gb3B0aW9ucy53aWR0aCAqIHBpeGVsUmF0aW87XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodCAqIHBpeGVsUmF0aW87XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IG9wdGlvbnMud2lkdGggKyAncHgnO1xuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgKyAncHgnO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQb3NpdGlvbnMgYW5kIHNpemVzIHRoZSB2aWV3cG9ydCBhcm91bmQgdGhlIGdpdmVuIG9iamVjdCBib3VuZHMuXG4gICAgICogT2JqZWN0cyBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIG9mIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgKiAtIGBvYmplY3QuYm91bmRzYFxuICAgICAqIC0gYG9iamVjdC5wb3NpdGlvbmBcbiAgICAgKiAtIGBvYmplY3QubWluYCBhbmQgYG9iamVjdC5tYXhgXG4gICAgICogLSBgb2JqZWN0LnhgIGFuZCBgb2JqZWN0LnlgXG4gICAgICogQG1ldGhvZCBsb29rQXRcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtvYmplY3RbXX0gb2JqZWN0c1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBbcGFkZGluZ11cbiAgICAgKiBAcGFyYW0ge2Jvb2x9IFtjZW50ZXI9dHJ1ZV1cbiAgICAgKi9cbiAgICBSZW5kZXIubG9va0F0ID0gZnVuY3Rpb24ocmVuZGVyLCBvYmplY3RzLCBwYWRkaW5nLCBjZW50ZXIpIHtcbiAgICAgICAgY2VudGVyID0gdHlwZW9mIGNlbnRlciAhPT0gJ3VuZGVmaW5lZCcgPyBjZW50ZXIgOiB0cnVlO1xuICAgICAgICBvYmplY3RzID0gQ29tbW9uLmlzQXJyYXkob2JqZWN0cykgPyBvYmplY3RzIDogW29iamVjdHNdO1xuICAgICAgICBwYWRkaW5nID0gcGFkZGluZyB8fCB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGZpbmQgYm91bmRzIG9mIGFsbCBvYmplY3RzXG4gICAgICAgIHZhciBib3VuZHMgPSB7XG4gICAgICAgICAgICBtaW46IHsgeDogSW5maW5pdHksIHk6IEluZmluaXR5IH0sXG4gICAgICAgICAgICBtYXg6IHsgeDogLUluZmluaXR5LCB5OiAtSW5maW5pdHkgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIG9iamVjdCA9IG9iamVjdHNbaV0sXG4gICAgICAgICAgICAgICAgbWluID0gb2JqZWN0LmJvdW5kcyA/IG9iamVjdC5ib3VuZHMubWluIDogKG9iamVjdC5taW4gfHwgb2JqZWN0LnBvc2l0aW9uIHx8IG9iamVjdCksXG4gICAgICAgICAgICAgICAgbWF4ID0gb2JqZWN0LmJvdW5kcyA/IG9iamVjdC5ib3VuZHMubWF4IDogKG9iamVjdC5tYXggfHwgb2JqZWN0LnBvc2l0aW9uIHx8IG9iamVjdCk7XG5cbiAgICAgICAgICAgIGlmIChtaW4gJiYgbWF4KSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbi54IDwgYm91bmRzLm1pbi54KVxuICAgICAgICAgICAgICAgICAgICBib3VuZHMubWluLnggPSBtaW4ueDtcblxuICAgICAgICAgICAgICAgIGlmIChtYXgueCA+IGJvdW5kcy5tYXgueClcbiAgICAgICAgICAgICAgICAgICAgYm91bmRzLm1heC54ID0gbWF4Lng7XG5cbiAgICAgICAgICAgICAgICBpZiAobWluLnkgPCBib3VuZHMubWluLnkpXG4gICAgICAgICAgICAgICAgICAgIGJvdW5kcy5taW4ueSA9IG1pbi55O1xuXG4gICAgICAgICAgICAgICAgaWYgKG1heC55ID4gYm91bmRzLm1heC55KVxuICAgICAgICAgICAgICAgICAgICBib3VuZHMubWF4LnkgPSBtYXgueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZpbmQgcmF0aW9zXG4gICAgICAgIHZhciB3aWR0aCA9IChib3VuZHMubWF4LnggLSBib3VuZHMubWluLngpICsgMiAqIHBhZGRpbmcueCxcbiAgICAgICAgICAgIGhlaWdodCA9IChib3VuZHMubWF4LnkgLSBib3VuZHMubWluLnkpICsgMiAqIHBhZGRpbmcueSxcbiAgICAgICAgICAgIHZpZXdIZWlnaHQgPSByZW5kZXIuY2FudmFzLmhlaWdodCxcbiAgICAgICAgICAgIHZpZXdXaWR0aCA9IHJlbmRlci5jYW52YXMud2lkdGgsXG4gICAgICAgICAgICBvdXRlclJhdGlvID0gdmlld1dpZHRoIC8gdmlld0hlaWdodCxcbiAgICAgICAgICAgIGlubmVyUmF0aW8gPSB3aWR0aCAvIGhlaWdodCxcbiAgICAgICAgICAgIHNjYWxlWCA9IDEsXG4gICAgICAgICAgICBzY2FsZVkgPSAxO1xuXG4gICAgICAgIC8vIGZpbmQgc2NhbGUgZmFjdG9yXG4gICAgICAgIGlmIChpbm5lclJhdGlvID4gb3V0ZXJSYXRpbykge1xuICAgICAgICAgICAgc2NhbGVZID0gaW5uZXJSYXRpbyAvIG91dGVyUmF0aW87XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzY2FsZVggPSBvdXRlclJhdGlvIC8gaW5uZXJSYXRpbztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVuYWJsZSBib3VuZHNcbiAgICAgICAgcmVuZGVyLm9wdGlvbnMuaGFzQm91bmRzID0gdHJ1ZTtcblxuICAgICAgICAvLyBwb3NpdGlvbiBhbmQgc2l6ZVxuICAgICAgICByZW5kZXIuYm91bmRzLm1pbi54ID0gYm91bmRzLm1pbi54O1xuICAgICAgICByZW5kZXIuYm91bmRzLm1heC54ID0gYm91bmRzLm1pbi54ICsgd2lkdGggKiBzY2FsZVg7XG4gICAgICAgIHJlbmRlci5ib3VuZHMubWluLnkgPSBib3VuZHMubWluLnk7XG4gICAgICAgIHJlbmRlci5ib3VuZHMubWF4LnkgPSBib3VuZHMubWluLnkgKyBoZWlnaHQgKiBzY2FsZVk7XG5cbiAgICAgICAgLy8gY2VudGVyXG4gICAgICAgIGlmIChjZW50ZXIpIHtcbiAgICAgICAgICAgIHJlbmRlci5ib3VuZHMubWluLnggKz0gd2lkdGggKiAwLjUgLSAod2lkdGggKiBzY2FsZVgpICogMC41O1xuICAgICAgICAgICAgcmVuZGVyLmJvdW5kcy5tYXgueCArPSB3aWR0aCAqIDAuNSAtICh3aWR0aCAqIHNjYWxlWCkgKiAwLjU7XG4gICAgICAgICAgICByZW5kZXIuYm91bmRzLm1pbi55ICs9IGhlaWdodCAqIDAuNSAtIChoZWlnaHQgKiBzY2FsZVkpICogMC41O1xuICAgICAgICAgICAgcmVuZGVyLmJvdW5kcy5tYXgueSArPSBoZWlnaHQgKiAwLjUgLSAoaGVpZ2h0ICogc2NhbGVZKSAqIDAuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhZGRpbmdcbiAgICAgICAgcmVuZGVyLmJvdW5kcy5taW4ueCAtPSBwYWRkaW5nLng7XG4gICAgICAgIHJlbmRlci5ib3VuZHMubWF4LnggLT0gcGFkZGluZy54O1xuICAgICAgICByZW5kZXIuYm91bmRzLm1pbi55IC09IHBhZGRpbmcueTtcbiAgICAgICAgcmVuZGVyLmJvdW5kcy5tYXgueSAtPSBwYWRkaW5nLnk7XG5cbiAgICAgICAgLy8gdXBkYXRlIG1vdXNlXG4gICAgICAgIGlmIChyZW5kZXIubW91c2UpIHtcbiAgICAgICAgICAgIE1vdXNlLnNldFNjYWxlKHJlbmRlci5tb3VzZSwge1xuICAgICAgICAgICAgICAgIHg6IChyZW5kZXIuYm91bmRzLm1heC54IC0gcmVuZGVyLmJvdW5kcy5taW4ueCkgLyByZW5kZXIuY2FudmFzLndpZHRoLFxuICAgICAgICAgICAgICAgIHk6IChyZW5kZXIuYm91bmRzLm1heC55IC0gcmVuZGVyLmJvdW5kcy5taW4ueSkgLyByZW5kZXIuY2FudmFzLmhlaWdodFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIE1vdXNlLnNldE9mZnNldChyZW5kZXIubW91c2UsIHJlbmRlci5ib3VuZHMubWluKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIHZpZXdwb3J0IHRyYW5zZm9ybXMgYmFzZWQgb24gYHJlbmRlci5ib3VuZHNgIHRvIGEgcmVuZGVyIGNvbnRleHQuXG4gICAgICogQG1ldGhvZCBzdGFydFZpZXdUcmFuc2Zvcm1cbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICovXG4gICAgUmVuZGVyLnN0YXJ0Vmlld1RyYW5zZm9ybSA9IGZ1bmN0aW9uKHJlbmRlcikge1xuICAgICAgICB2YXIgYm91bmRzV2lkdGggPSByZW5kZXIuYm91bmRzLm1heC54IC0gcmVuZGVyLmJvdW5kcy5taW4ueCxcbiAgICAgICAgICAgIGJvdW5kc0hlaWdodCA9IHJlbmRlci5ib3VuZHMubWF4LnkgLSByZW5kZXIuYm91bmRzLm1pbi55LFxuICAgICAgICAgICAgYm91bmRzU2NhbGVYID0gYm91bmRzV2lkdGggLyByZW5kZXIub3B0aW9ucy53aWR0aCxcbiAgICAgICAgICAgIGJvdW5kc1NjYWxlWSA9IGJvdW5kc0hlaWdodCAvIHJlbmRlci5vcHRpb25zLmhlaWdodDtcblxuICAgICAgICByZW5kZXIuY29udGV4dC5zZXRUcmFuc2Zvcm0oXG4gICAgICAgICAgICByZW5kZXIub3B0aW9ucy5waXhlbFJhdGlvIC8gYm91bmRzU2NhbGVYLCAwLCAwLCBcbiAgICAgICAgICAgIHJlbmRlci5vcHRpb25zLnBpeGVsUmF0aW8gLyBib3VuZHNTY2FsZVksIDAsIDBcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHJlbmRlci5jb250ZXh0LnRyYW5zbGF0ZSgtcmVuZGVyLmJvdW5kcy5taW4ueCwgLXJlbmRlci5ib3VuZHMubWluLnkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgYWxsIHRyYW5zZm9ybXMgb24gdGhlIHJlbmRlciBjb250ZXh0LlxuICAgICAqIEBtZXRob2QgZW5kVmlld1RyYW5zZm9ybVxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKi9cbiAgICBSZW5kZXIuZW5kVmlld1RyYW5zZm9ybSA9IGZ1bmN0aW9uKHJlbmRlcikge1xuICAgICAgICByZW5kZXIuY29udGV4dC5zZXRUcmFuc2Zvcm0ocmVuZGVyLm9wdGlvbnMucGl4ZWxSYXRpbywgMCwgMCwgcmVuZGVyLm9wdGlvbnMucGl4ZWxSYXRpbywgMCwgMCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIGdpdmVuIGBlbmdpbmVgJ3MgYE1hdHRlci5Xb3JsZGAgb2JqZWN0LlxuICAgICAqIFRoaXMgaXMgdGhlIGVudHJ5IHBvaW50IGZvciBhbGwgcmVuZGVyaW5nIGFuZCBzaG91bGQgYmUgY2FsbGVkIGV2ZXJ5IHRpbWUgdGhlIHNjZW5lIGNoYW5nZXMuXG4gICAgICogQG1ldGhvZCB3b3JsZFxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKi9cbiAgICBSZW5kZXIud29ybGQgPSBmdW5jdGlvbihyZW5kZXIsIHRpbWUpIHtcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IENvbW1vbi5ub3coKSxcbiAgICAgICAgICAgIGVuZ2luZSA9IHJlbmRlci5lbmdpbmUsXG4gICAgICAgICAgICB3b3JsZCA9IGVuZ2luZS53b3JsZCxcbiAgICAgICAgICAgIGNhbnZhcyA9IHJlbmRlci5jYW52YXMsXG4gICAgICAgICAgICBjb250ZXh0ID0gcmVuZGVyLmNvbnRleHQsXG4gICAgICAgICAgICBvcHRpb25zID0gcmVuZGVyLm9wdGlvbnMsXG4gICAgICAgICAgICB0aW1pbmcgPSByZW5kZXIudGltaW5nO1xuXG4gICAgICAgIHZhciBhbGxCb2RpZXMgPSBDb21wb3NpdGUuYWxsQm9kaWVzKHdvcmxkKSxcbiAgICAgICAgICAgIGFsbENvbnN0cmFpbnRzID0gQ29tcG9zaXRlLmFsbENvbnN0cmFpbnRzKHdvcmxkKSxcbiAgICAgICAgICAgIGJhY2tncm91bmQgPSBvcHRpb25zLndpcmVmcmFtZXMgPyBvcHRpb25zLndpcmVmcmFtZUJhY2tncm91bmQgOiBvcHRpb25zLmJhY2tncm91bmQsXG4gICAgICAgICAgICBib2RpZXMgPSBbXSxcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzID0gW10sXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIHZhciBldmVudCA9IHtcbiAgICAgICAgICAgIHRpbWVzdGFtcDogZW5naW5lLnRpbWluZy50aW1lc3RhbXBcbiAgICAgICAgfTtcblxuICAgICAgICBFdmVudHMudHJpZ2dlcihyZW5kZXIsICdiZWZvcmVSZW5kZXInLCBldmVudCk7XG5cbiAgICAgICAgLy8gYXBwbHkgYmFja2dyb3VuZCBpZiBpdCBoYXMgY2hhbmdlZFxuICAgICAgICBpZiAocmVuZGVyLmN1cnJlbnRCYWNrZ3JvdW5kICE9PSBiYWNrZ3JvdW5kKVxuICAgICAgICAgICAgX2FwcGx5QmFja2dyb3VuZChyZW5kZXIsIGJhY2tncm91bmQpO1xuXG4gICAgICAgIC8vIGNsZWFyIHRoZSBjYW52YXMgd2l0aCBhIHRyYW5zcGFyZW50IGZpbGwsIHRvIGFsbG93IHRoZSBjYW52YXMgYmFja2dyb3VuZCB0byBzaG93XG4gICAgICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1pbic7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJ0cmFuc3BhcmVudFwiO1xuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcblxuICAgICAgICAvLyBoYW5kbGUgYm91bmRzXG4gICAgICAgIGlmIChvcHRpb25zLmhhc0JvdW5kcykge1xuICAgICAgICAgICAgLy8gZmlsdGVyIG91dCBib2RpZXMgdGhhdCBhcmUgbm90IGluIHZpZXdcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhbGxCb2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IGFsbEJvZGllc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoQm91bmRzLm92ZXJsYXBzKGJvZHkuYm91bmRzLCByZW5kZXIuYm91bmRzKSlcbiAgICAgICAgICAgICAgICAgICAgYm9kaWVzLnB1c2goYm9keSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGZpbHRlciBvdXQgY29uc3RyYWludHMgdGhhdCBhcmUgbm90IGluIHZpZXdcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhbGxDb25zdHJhaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBjb25zdHJhaW50ID0gYWxsQ29uc3RyYWludHNbaV0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHlBID0gY29uc3RyYWludC5ib2R5QSxcbiAgICAgICAgICAgICAgICAgICAgYm9keUIgPSBjb25zdHJhaW50LmJvZHlCLFxuICAgICAgICAgICAgICAgICAgICBwb2ludEFXb3JsZCA9IGNvbnN0cmFpbnQucG9pbnRBLFxuICAgICAgICAgICAgICAgICAgICBwb2ludEJXb3JsZCA9IGNvbnN0cmFpbnQucG9pbnRCO1xuXG4gICAgICAgICAgICAgICAgaWYgKGJvZHlBKSBwb2ludEFXb3JsZCA9IFZlY3Rvci5hZGQoYm9keUEucG9zaXRpb24sIGNvbnN0cmFpbnQucG9pbnRBKTtcbiAgICAgICAgICAgICAgICBpZiAoYm9keUIpIHBvaW50QldvcmxkID0gVmVjdG9yLmFkZChib2R5Qi5wb3NpdGlvbiwgY29uc3RyYWludC5wb2ludEIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFwb2ludEFXb3JsZCB8fCAhcG9pbnRCV29ybGQpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKEJvdW5kcy5jb250YWlucyhyZW5kZXIuYm91bmRzLCBwb2ludEFXb3JsZCkgfHwgQm91bmRzLmNvbnRhaW5zKHJlbmRlci5ib3VuZHMsIHBvaW50QldvcmxkKSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3RyYWludHMucHVzaChjb25zdHJhaW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdHJhbnNmb3JtIHRoZSB2aWV3XG4gICAgICAgICAgICBSZW5kZXIuc3RhcnRWaWV3VHJhbnNmb3JtKHJlbmRlcik7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBtb3VzZVxuICAgICAgICAgICAgaWYgKHJlbmRlci5tb3VzZSkge1xuICAgICAgICAgICAgICAgIE1vdXNlLnNldFNjYWxlKHJlbmRlci5tb3VzZSwge1xuICAgICAgICAgICAgICAgICAgICB4OiAocmVuZGVyLmJvdW5kcy5tYXgueCAtIHJlbmRlci5ib3VuZHMubWluLngpIC8gcmVuZGVyLm9wdGlvbnMud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHk6IChyZW5kZXIuYm91bmRzLm1heC55IC0gcmVuZGVyLmJvdW5kcy5taW4ueSkgLyByZW5kZXIub3B0aW9ucy5oZWlnaHRcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIE1vdXNlLnNldE9mZnNldChyZW5kZXIubW91c2UsIHJlbmRlci5ib3VuZHMubWluKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzID0gYWxsQ29uc3RyYWludHM7XG4gICAgICAgICAgICBib2RpZXMgPSBhbGxCb2RpZXM7XG5cbiAgICAgICAgICAgIGlmIChyZW5kZXIub3B0aW9ucy5waXhlbFJhdGlvICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyLmNvbnRleHQuc2V0VHJhbnNmb3JtKHJlbmRlci5vcHRpb25zLnBpeGVsUmF0aW8sIDAsIDAsIHJlbmRlci5vcHRpb25zLnBpeGVsUmF0aW8sIDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFvcHRpb25zLndpcmVmcmFtZXMgfHwgKGVuZ2luZS5lbmFibGVTbGVlcGluZyAmJiBvcHRpb25zLnNob3dTbGVlcGluZykpIHtcbiAgICAgICAgICAgIC8vIGZ1bGx5IGZlYXR1cmVkIHJlbmRlcmluZyBvZiBib2RpZXNcbiAgICAgICAgICAgIFJlbmRlci5ib2RpZXMocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2hvd0NvbnZleEh1bGxzKVxuICAgICAgICAgICAgICAgIFJlbmRlci5ib2R5Q29udmV4SHVsbHMocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAvLyBvcHRpbWlzZWQgbWV0aG9kIGZvciB3aXJlZnJhbWVzIG9ubHlcbiAgICAgICAgICAgIFJlbmRlci5ib2R5V2lyZWZyYW1lcyhyZW5kZXIsIGJvZGllcywgY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5zaG93Qm91bmRzKVxuICAgICAgICAgICAgUmVuZGVyLmJvZHlCb3VuZHMocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNob3dBeGVzIHx8IG9wdGlvbnMuc2hvd0FuZ2xlSW5kaWNhdG9yKVxuICAgICAgICAgICAgUmVuZGVyLmJvZHlBeGVzKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5zaG93UG9zaXRpb25zKVxuICAgICAgICAgICAgUmVuZGVyLmJvZHlQb3NpdGlvbnMocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNob3dWZWxvY2l0eSlcbiAgICAgICAgICAgIFJlbmRlci5ib2R5VmVsb2NpdHkocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNob3dJZHMpXG4gICAgICAgICAgICBSZW5kZXIuYm9keUlkcyhyZW5kZXIsIGJvZGllcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2hvd1NlcGFyYXRpb25zKVxuICAgICAgICAgICAgUmVuZGVyLnNlcGFyYXRpb25zKHJlbmRlciwgZW5naW5lLnBhaXJzLmxpc3QsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNob3dDb2xsaXNpb25zKVxuICAgICAgICAgICAgUmVuZGVyLmNvbGxpc2lvbnMocmVuZGVyLCBlbmdpbmUucGFpcnMubGlzdCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2hvd1ZlcnRleE51bWJlcnMpXG4gICAgICAgICAgICBSZW5kZXIudmVydGV4TnVtYmVycyhyZW5kZXIsIGJvZGllcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2hvd01vdXNlUG9zaXRpb24pXG4gICAgICAgICAgICBSZW5kZXIubW91c2VQb3NpdGlvbihyZW5kZXIsIHJlbmRlci5tb3VzZSwgY29udGV4dCk7XG5cbiAgICAgICAgUmVuZGVyLmNvbnN0cmFpbnRzKGNvbnN0cmFpbnRzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5oYXNCb3VuZHMpIHtcbiAgICAgICAgICAgIC8vIHJldmVydCB2aWV3IHRyYW5zZm9ybXNcbiAgICAgICAgICAgIFJlbmRlci5lbmRWaWV3VHJhbnNmb3JtKHJlbmRlcik7XG4gICAgICAgIH1cblxuICAgICAgICBFdmVudHMudHJpZ2dlcihyZW5kZXIsICdhZnRlclJlbmRlcicsIGV2ZW50KTtcblxuICAgICAgICAvLyBsb2cgdGhlIHRpbWUgZWxhcHNlZCBjb21wdXRpbmcgdGhpcyB1cGRhdGVcbiAgICAgICAgdGltaW5nLmxhc3RFbGFwc2VkID0gQ29tbW9uLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHN0YXRpc3RpY3MgYWJvdXQgdGhlIGVuZ2luZSBhbmQgd29ybGQgdXNlZnVsIGZvciBkZWJ1Z2dpbmcuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHN0YXRzXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB0aW1lXG4gICAgICovXG4gICAgUmVuZGVyLnN0YXRzID0gZnVuY3Rpb24ocmVuZGVyLCBjb250ZXh0LCB0aW1lKSB7XG4gICAgICAgIHZhciBlbmdpbmUgPSByZW5kZXIuZW5naW5lLFxuICAgICAgICAgICAgd29ybGQgPSBlbmdpbmUud29ybGQsXG4gICAgICAgICAgICBib2RpZXMgPSBDb21wb3NpdGUuYWxsQm9kaWVzKHdvcmxkKSxcbiAgICAgICAgICAgIHBhcnRzID0gMCxcbiAgICAgICAgICAgIHdpZHRoID0gNTUsXG4gICAgICAgICAgICBoZWlnaHQgPSA0NCxcbiAgICAgICAgICAgIHggPSAwLFxuICAgICAgICAgICAgeSA9IDA7XG4gICAgICAgIFxuICAgICAgICAvLyBjb3VudCBwYXJ0c1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgcGFydHMgKz0gYm9kaWVzW2ldLnBhcnRzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNlY3Rpb25zXG4gICAgICAgIHZhciBzZWN0aW9ucyA9IHtcbiAgICAgICAgICAgICdQYXJ0JzogcGFydHMsXG4gICAgICAgICAgICAnQm9keSc6IGJvZGllcy5sZW5ndGgsXG4gICAgICAgICAgICAnQ29ucyc6IENvbXBvc2l0ZS5hbGxDb25zdHJhaW50cyh3b3JsZCkubGVuZ3RoLFxuICAgICAgICAgICAgJ0NvbXAnOiBDb21wb3NpdGUuYWxsQ29tcG9zaXRlcyh3b3JsZCkubGVuZ3RoLFxuICAgICAgICAgICAgJ1BhaXInOiBlbmdpbmUucGFpcnMubGlzdC5sZW5ndGhcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBiYWNrZ3JvdW5kXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyMwZTBmMTknO1xuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHgsIHksIHdpZHRoICogNS41LCBoZWlnaHQpO1xuXG4gICAgICAgIGNvbnRleHQuZm9udCA9ICcxMnB4IEFyaWFsJztcbiAgICAgICAgY29udGV4dC50ZXh0QmFzZWxpbmUgPSAndG9wJztcbiAgICAgICAgY29udGV4dC50ZXh0QWxpZ24gPSAncmlnaHQnO1xuXG4gICAgICAgIC8vIHNlY3Rpb25zXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzZWN0aW9ucykge1xuICAgICAgICAgICAgdmFyIHNlY3Rpb24gPSBzZWN0aW9uc1trZXldO1xuICAgICAgICAgICAgLy8gbGFiZWxcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyNhYWEnO1xuICAgICAgICAgICAgY29udGV4dC5maWxsVGV4dChrZXksIHggKyB3aWR0aCwgeSArIDgpO1xuXG4gICAgICAgICAgICAvLyB2YWx1ZVxuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnI2VlZSc7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGxUZXh0KHNlY3Rpb24sIHggKyB3aWR0aCwgeSArIDI2KTtcblxuICAgICAgICAgICAgeCArPSB3aWR0aDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGVuZ2luZSBhbmQgcmVuZGVyIHBlcmZvcm1hbmNlIGluZm9ybWF0aW9uLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBwZXJmb3JtYW5jZVxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIucGVyZm9ybWFuY2UgPSBmdW5jdGlvbihyZW5kZXIsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGVuZ2luZSA9IHJlbmRlci5lbmdpbmUsXG4gICAgICAgICAgICB0aW1pbmcgPSByZW5kZXIudGltaW5nLFxuICAgICAgICAgICAgZGVsdGFIaXN0b3J5ID0gdGltaW5nLmRlbHRhSGlzdG9yeSxcbiAgICAgICAgICAgIGVsYXBzZWRIaXN0b3J5ID0gdGltaW5nLmVsYXBzZWRIaXN0b3J5LFxuICAgICAgICAgICAgdGltZXN0YW1wRWxhcHNlZEhpc3RvcnkgPSB0aW1pbmcudGltZXN0YW1wRWxhcHNlZEhpc3RvcnksXG4gICAgICAgICAgICBlbmdpbmVEZWx0YUhpc3RvcnkgPSB0aW1pbmcuZW5naW5lRGVsdGFIaXN0b3J5LFxuICAgICAgICAgICAgZW5naW5lRWxhcHNlZEhpc3RvcnkgPSB0aW1pbmcuZW5naW5lRWxhcHNlZEhpc3RvcnksXG4gICAgICAgICAgICBsYXN0RW5naW5lRGVsdGEgPSBlbmdpbmUudGltaW5nLmxhc3REZWx0YTtcbiAgICAgICAgXG4gICAgICAgIHZhciBkZWx0YU1lYW4gPSBfbWVhbihkZWx0YUhpc3RvcnkpLFxuICAgICAgICAgICAgZWxhcHNlZE1lYW4gPSBfbWVhbihlbGFwc2VkSGlzdG9yeSksXG4gICAgICAgICAgICBlbmdpbmVEZWx0YU1lYW4gPSBfbWVhbihlbmdpbmVEZWx0YUhpc3RvcnkpLFxuICAgICAgICAgICAgZW5naW5lRWxhcHNlZE1lYW4gPSBfbWVhbihlbmdpbmVFbGFwc2VkSGlzdG9yeSksXG4gICAgICAgICAgICB0aW1lc3RhbXBFbGFwc2VkTWVhbiA9IF9tZWFuKHRpbWVzdGFtcEVsYXBzZWRIaXN0b3J5KSxcbiAgICAgICAgICAgIHJhdGVNZWFuID0gKHRpbWVzdGFtcEVsYXBzZWRNZWFuIC8gZGVsdGFNZWFuKSB8fCAwLFxuICAgICAgICAgICAgZnBzID0gKDEwMDAgLyBkZWx0YU1lYW4pIHx8IDA7XG5cbiAgICAgICAgdmFyIGdyYXBoSGVpZ2h0ID0gNCxcbiAgICAgICAgICAgIGdhcCA9IDEyLFxuICAgICAgICAgICAgd2lkdGggPSA2MCxcbiAgICAgICAgICAgIGhlaWdodCA9IDM0LFxuICAgICAgICAgICAgeCA9IDEwLFxuICAgICAgICAgICAgeSA9IDY5O1xuXG4gICAgICAgIC8vIGJhY2tncm91bmRcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnIzBlMGYxOSc7XG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgNTAsIGdhcCAqIDQgKyB3aWR0aCAqIDUgKyAyMiwgaGVpZ2h0KTtcblxuICAgICAgICAvLyBzaG93IEZQU1xuICAgICAgICBSZW5kZXIuc3RhdHVzKFxuICAgICAgICAgICAgY29udGV4dCwgeCwgeSwgd2lkdGgsIGdyYXBoSGVpZ2h0LCBkZWx0YUhpc3RvcnkubGVuZ3RoLCBcbiAgICAgICAgICAgIE1hdGgucm91bmQoZnBzKSArICcgZnBzJywgXG4gICAgICAgICAgICBmcHMgLyBSZW5kZXIuX2dvb2RGcHMsXG4gICAgICAgICAgICBmdW5jdGlvbihpKSB7IHJldHVybiAoZGVsdGFIaXN0b3J5W2ldIC8gZGVsdGFNZWFuKSAtIDE7IH1cbiAgICAgICAgKTtcblxuICAgICAgICAvLyBzaG93IGVuZ2luZSBkZWx0YVxuICAgICAgICBSZW5kZXIuc3RhdHVzKFxuICAgICAgICAgICAgY29udGV4dCwgeCArIGdhcCArIHdpZHRoLCB5LCB3aWR0aCwgZ3JhcGhIZWlnaHQsIGVuZ2luZURlbHRhSGlzdG9yeS5sZW5ndGgsXG4gICAgICAgICAgICBsYXN0RW5naW5lRGVsdGEudG9GaXhlZCgyKSArICcgZHQnLCBcbiAgICAgICAgICAgIFJlbmRlci5fZ29vZERlbHRhIC8gbGFzdEVuZ2luZURlbHRhLFxuICAgICAgICAgICAgZnVuY3Rpb24oaSkgeyByZXR1cm4gKGVuZ2luZURlbHRhSGlzdG9yeVtpXSAvIGVuZ2luZURlbHRhTWVhbikgLSAxOyB9XG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gc2hvdyBlbmdpbmUgdXBkYXRlIHRpbWVcbiAgICAgICAgUmVuZGVyLnN0YXR1cyhcbiAgICAgICAgICAgIGNvbnRleHQsIHggKyAoZ2FwICsgd2lkdGgpICogMiwgeSwgd2lkdGgsIGdyYXBoSGVpZ2h0LCBlbmdpbmVFbGFwc2VkSGlzdG9yeS5sZW5ndGgsXG4gICAgICAgICAgICBlbmdpbmVFbGFwc2VkTWVhbi50b0ZpeGVkKDIpICsgJyB1dCcsIFxuICAgICAgICAgICAgMSAtIChlbmdpbmVFbGFwc2VkTWVhbiAvIFJlbmRlci5fZ29vZEZwcyksXG4gICAgICAgICAgICBmdW5jdGlvbihpKSB7IHJldHVybiAoZW5naW5lRWxhcHNlZEhpc3RvcnlbaV0gLyBlbmdpbmVFbGFwc2VkTWVhbikgLSAxOyB9XG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gc2hvdyByZW5kZXIgdGltZVxuICAgICAgICBSZW5kZXIuc3RhdHVzKFxuICAgICAgICAgICAgY29udGV4dCwgeCArIChnYXAgKyB3aWR0aCkgKiAzLCB5LCB3aWR0aCwgZ3JhcGhIZWlnaHQsIGVsYXBzZWRIaXN0b3J5Lmxlbmd0aCxcbiAgICAgICAgICAgIGVsYXBzZWRNZWFuLnRvRml4ZWQoMikgKyAnIHJ0JywgXG4gICAgICAgICAgICAxIC0gKGVsYXBzZWRNZWFuIC8gUmVuZGVyLl9nb29kRnBzKSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGkpIHsgcmV0dXJuIChlbGFwc2VkSGlzdG9yeVtpXSAvIGVsYXBzZWRNZWFuKSAtIDE7IH1cbiAgICAgICAgKTtcblxuICAgICAgICAvLyBzaG93IGVmZmVjdGl2ZSBzcGVlZFxuICAgICAgICBSZW5kZXIuc3RhdHVzKFxuICAgICAgICAgICAgY29udGV4dCwgeCArIChnYXAgKyB3aWR0aCkgKiA0LCB5LCB3aWR0aCwgZ3JhcGhIZWlnaHQsIHRpbWVzdGFtcEVsYXBzZWRIaXN0b3J5Lmxlbmd0aCwgXG4gICAgICAgICAgICByYXRlTWVhbi50b0ZpeGVkKDIpICsgJyB4JywgXG4gICAgICAgICAgICByYXRlTWVhbiAqIHJhdGVNZWFuICogcmF0ZU1lYW4sXG4gICAgICAgICAgICBmdW5jdGlvbihpKSB7IHJldHVybiAoKCh0aW1lc3RhbXBFbGFwc2VkSGlzdG9yeVtpXSAvIGRlbHRhSGlzdG9yeVtpXSkgLyByYXRlTWVhbikgfHwgMCkgLSAxOyB9XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYSBsYWJlbCwgaW5kaWNhdG9yIGFuZCBhIGNoYXJ0LlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBzdGF0dXNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpbmRpY2F0b3JcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwbG90WVxuICAgICAqL1xuICAgIFJlbmRlci5zdGF0dXMgPSBmdW5jdGlvbihjb250ZXh0LCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb3VudCwgbGFiZWwsIGluZGljYXRvciwgcGxvdFkpIHtcbiAgICAgICAgLy8gYmFja2dyb3VuZFxuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJyM4ODgnO1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjNDQ0JztcbiAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSAxO1xuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHgsIHkgKyA3LCB3aWR0aCwgMSk7XG5cbiAgICAgICAgLy8gY2hhcnRcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgY29udGV4dC5tb3ZlVG8oeCwgeSArIDcgLSBoZWlnaHQgKiBDb21tb24uY2xhbXAoMC40ICogcGxvdFkoMCksIC0yLCAyKSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgd2lkdGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29udGV4dC5saW5lVG8oeCArIGksIHkgKyA3IC0gKGkgPCBjb3VudCA/IGhlaWdodCAqIENvbW1vbi5jbGFtcCgwLjQgKiBwbG90WShpKSwgLTIsIDIpIDogMCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG5cbiAgICAgICAgLy8gaW5kaWNhdG9yXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ2hzbCgnICsgQ29tbW9uLmNsYW1wKDI1ICsgOTUgKiBpbmRpY2F0b3IsIDAsIDEyMCkgKyAnLDEwMCUsNjAlKSc7XG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoeCwgeSAtIDcsIDQsIDQpO1xuXG4gICAgICAgIC8vIGxhYmVsXG4gICAgICAgIGNvbnRleHQuZm9udCA9ICcxMnB4IEFyaWFsJztcbiAgICAgICAgY29udGV4dC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICAgICAgY29udGV4dC50ZXh0QWxpZ24gPSAncmlnaHQnO1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjZWVlJztcbiAgICAgICAgY29udGV4dC5maWxsVGV4dChsYWJlbCwgeCArIHdpZHRoLCB5IC0gNSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERlc2NyaXB0aW9uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGNvbnN0cmFpbnRzXG4gICAgICogQHBhcmFtIHtjb25zdHJhaW50W119IGNvbnN0cmFpbnRzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmNvbnN0cmFpbnRzID0gZnVuY3Rpb24oY29uc3RyYWludHMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29uc3RyYWludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjb25zdHJhaW50ID0gY29uc3RyYWludHNbaV07XG5cbiAgICAgICAgICAgIGlmICghY29uc3RyYWludC5yZW5kZXIudmlzaWJsZSB8fCAhY29uc3RyYWludC5wb2ludEEgfHwgIWNvbnN0cmFpbnQucG9pbnRCKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICB2YXIgYm9keUEgPSBjb25zdHJhaW50LmJvZHlBLFxuICAgICAgICAgICAgICAgIGJvZHlCID0gY29uc3RyYWludC5ib2R5QixcbiAgICAgICAgICAgICAgICBzdGFydCxcbiAgICAgICAgICAgICAgICBlbmQ7XG5cbiAgICAgICAgICAgIGlmIChib2R5QSkge1xuICAgICAgICAgICAgICAgIHN0YXJ0ID0gVmVjdG9yLmFkZChib2R5QS5wb3NpdGlvbiwgY29uc3RyYWludC5wb2ludEEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGFydCA9IGNvbnN0cmFpbnQucG9pbnRBO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY29uc3RyYWludC5yZW5kZXIudHlwZSA9PT0gJ3BpbicpIHtcbiAgICAgICAgICAgICAgICBjLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMuYXJjKHN0YXJ0LngsIHN0YXJ0LnksIDMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgICAgICBjLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9keUIpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5kID0gVmVjdG9yLmFkZChib2R5Qi5wb3NpdGlvbiwgY29uc3RyYWludC5wb2ludEIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IGNvbnN0cmFpbnQucG9pbnRCO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgYy5tb3ZlVG8oc3RhcnQueCwgc3RhcnQueSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29uc3RyYWludC5yZW5kZXIudHlwZSA9PT0gJ3NwcmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHRhID0gVmVjdG9yLnN1YihlbmQsIHN0YXJ0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbCA9IFZlY3Rvci5wZXJwKFZlY3Rvci5ub3JtYWxpc2UoZGVsdGEpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvaWxzID0gTWF0aC5jZWlsKENvbW1vbi5jbGFtcChjb25zdHJhaW50Lmxlbmd0aCAvIDUsIDEyLCAyMCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgY29pbHM7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gaiAlIDIgPT09IDAgPyAxIDogLTE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGMubGluZVRvKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0LnggKyBkZWx0YS54ICogKGogLyBjb2lscykgKyBub3JtYWwueCAqIG9mZnNldCAqIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQueSArIGRlbHRhLnkgKiAoaiAvIGNvaWxzKSArIG5vcm1hbC55ICogb2Zmc2V0ICogNFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGMubGluZVRvKGVuZC54LCBlbmQueSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb25zdHJhaW50LnJlbmRlci5saW5lV2lkdGgpIHtcbiAgICAgICAgICAgICAgICBjLmxpbmVXaWR0aCA9IGNvbnN0cmFpbnQucmVuZGVyLmxpbmVXaWR0aDtcbiAgICAgICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gY29uc3RyYWludC5yZW5kZXIuc3Ryb2tlU3R5bGU7XG4gICAgICAgICAgICAgICAgYy5zdHJva2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbnN0cmFpbnQucmVuZGVyLmFuY2hvcnMpIHtcbiAgICAgICAgICAgICAgICBjLmZpbGxTdHlsZSA9IGNvbnN0cmFpbnQucmVuZGVyLnN0cm9rZVN0eWxlO1xuICAgICAgICAgICAgICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgYy5hcmMoc3RhcnQueCwgc3RhcnQueSwgMywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgIGMuYXJjKGVuZC54LCBlbmQueSwgMywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgIGMuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgYy5maWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVzY3JpcHRpb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgYm9kaWVzXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuYm9kaWVzID0gZnVuY3Rpb24ocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0LFxuICAgICAgICAgICAgZW5naW5lID0gcmVuZGVyLmVuZ2luZSxcbiAgICAgICAgICAgIG9wdGlvbnMgPSByZW5kZXIub3B0aW9ucyxcbiAgICAgICAgICAgIHNob3dJbnRlcm5hbEVkZ2VzID0gb3B0aW9ucy5zaG93SW50ZXJuYWxFZGdlcyB8fCAhb3B0aW9ucy53aXJlZnJhbWVzLFxuICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgIHBhcnQsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgaztcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIWJvZHkucmVuZGVyLnZpc2libGUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIGhhbmRsZSBjb21wb3VuZCBwYXJ0c1xuICAgICAgICAgICAgZm9yIChrID0gYm9keS5wYXJ0cy5sZW5ndGggPiAxID8gMSA6IDA7IGsgPCBib2R5LnBhcnRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgcGFydCA9IGJvZHkucGFydHNba107XG5cbiAgICAgICAgICAgICAgICBpZiAoIXBhcnQucmVuZGVyLnZpc2libGUpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2hvd1NsZWVwaW5nICYmIGJvZHkuaXNTbGVlcGluZykge1xuICAgICAgICAgICAgICAgICAgICBjLmdsb2JhbEFscGhhID0gMC41ICogcGFydC5yZW5kZXIub3BhY2l0eTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnQucmVuZGVyLm9wYWNpdHkgIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYy5nbG9iYWxBbHBoYSA9IHBhcnQucmVuZGVyLm9wYWNpdHk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHBhcnQucmVuZGVyLnNwcml0ZSAmJiBwYXJ0LnJlbmRlci5zcHJpdGUudGV4dHVyZSAmJiAhb3B0aW9ucy53aXJlZnJhbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhcnQgc3ByaXRlXG4gICAgICAgICAgICAgICAgICAgIHZhciBzcHJpdGUgPSBwYXJ0LnJlbmRlci5zcHJpdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlID0gX2dldFRleHR1cmUocmVuZGVyLCBzcHJpdGUudGV4dHVyZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgYy50cmFuc2xhdGUocGFydC5wb3NpdGlvbi54LCBwYXJ0LnBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgICAgICAgICBjLnJvdGF0ZShwYXJ0LmFuZ2xlKTtcblxuICAgICAgICAgICAgICAgICAgICBjLmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLndpZHRoICogLXNwcml0ZS54T2Zmc2V0ICogc3ByaXRlLnhTY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmUuaGVpZ2h0ICogLXNwcml0ZS55T2Zmc2V0ICogc3ByaXRlLnlTY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmUud2lkdGggKiBzcHJpdGUueFNjYWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZS5oZWlnaHQgKiBzcHJpdGUueVNjYWxlXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcmV2ZXJ0IHRyYW5zbGF0aW9uLCBob3BlZnVsbHkgZmFzdGVyIHRoYW4gc2F2ZSAvIHJlc3RvcmVcbiAgICAgICAgICAgICAgICAgICAgYy5yb3RhdGUoLXBhcnQuYW5nbGUpO1xuICAgICAgICAgICAgICAgICAgICBjLnRyYW5zbGF0ZSgtcGFydC5wb3NpdGlvbi54LCAtcGFydC5wb3NpdGlvbi55KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBwYXJ0IHBvbHlnb25cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnQuY2lyY2xlUmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5hcmMocGFydC5wb3NpdGlvbi54LCBwYXJ0LnBvc2l0aW9uLnksIHBhcnQuY2lyY2xlUmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5tb3ZlVG8ocGFydC52ZXJ0aWNlc1swXS54LCBwYXJ0LnZlcnRpY2VzWzBdLnkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IHBhcnQudmVydGljZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcnQudmVydGljZXNbaiAtIDFdLmlzSW50ZXJuYWwgfHwgc2hvd0ludGVybmFsRWRnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5saW5lVG8ocGFydC52ZXJ0aWNlc1tqXS54LCBwYXJ0LnZlcnRpY2VzW2pdLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMubW92ZVRvKHBhcnQudmVydGljZXNbal0ueCwgcGFydC52ZXJ0aWNlc1tqXS55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFydC52ZXJ0aWNlc1tqXS5pc0ludGVybmFsICYmICFzaG93SW50ZXJuYWxFZGdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLm1vdmVUbyhwYXJ0LnZlcnRpY2VzWyhqICsgMSkgJSBwYXJ0LnZlcnRpY2VzLmxlbmd0aF0ueCwgcGFydC52ZXJ0aWNlc1soaiArIDEpICUgcGFydC52ZXJ0aWNlcy5sZW5ndGhdLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgYy5saW5lVG8ocGFydC52ZXJ0aWNlc1swXS54LCBwYXJ0LnZlcnRpY2VzWzBdLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy53aXJlZnJhbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLmZpbGxTdHlsZSA9IHBhcnQucmVuZGVyLmZpbGxTdHlsZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnQucmVuZGVyLmxpbmVXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMubGluZVdpZHRoID0gcGFydC5yZW5kZXIubGluZVdpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSBwYXJ0LnJlbmRlci5zdHJva2VTdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjLmZpbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAnI2JiYic7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYy5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogT3B0aW1pc2VkIG1ldGhvZCBmb3IgZHJhd2luZyBib2R5IHdpcmVmcmFtZXMgaW4gb25lIHBhc3NcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgYm9keVdpcmVmcmFtZXNcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5ib2R5V2lyZWZyYW1lcyA9IGZ1bmN0aW9uKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dCxcbiAgICAgICAgICAgIHNob3dJbnRlcm5hbEVkZ2VzID0gcmVuZGVyLm9wdGlvbnMuc2hvd0ludGVybmFsRWRnZXMsXG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgcGFydCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqLFxuICAgICAgICAgICAgaztcblxuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIC8vIHJlbmRlciBhbGwgYm9kaWVzXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJvZHkgPSBib2RpZXNbaV07XG5cbiAgICAgICAgICAgIGlmICghYm9keS5yZW5kZXIudmlzaWJsZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8gaGFuZGxlIGNvbXBvdW5kIHBhcnRzXG4gICAgICAgICAgICBmb3IgKGsgPSBib2R5LnBhcnRzLmxlbmd0aCA+IDEgPyAxIDogMDsgayA8IGJvZHkucGFydHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICBwYXJ0ID0gYm9keS5wYXJ0c1trXTtcblxuICAgICAgICAgICAgICAgIGMubW92ZVRvKHBhcnQudmVydGljZXNbMF0ueCwgcGFydC52ZXJ0aWNlc1swXS55KTtcblxuICAgICAgICAgICAgICAgIGZvciAoaiA9IDE7IGogPCBwYXJ0LnZlcnRpY2VzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcGFydC52ZXJ0aWNlc1tqIC0gMV0uaXNJbnRlcm5hbCB8fCBzaG93SW50ZXJuYWxFZGdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5saW5lVG8ocGFydC52ZXJ0aWNlc1tqXS54LCBwYXJ0LnZlcnRpY2VzW2pdLnkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5tb3ZlVG8ocGFydC52ZXJ0aWNlc1tqXS54LCBwYXJ0LnZlcnRpY2VzW2pdLnkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnQudmVydGljZXNbal0uaXNJbnRlcm5hbCAmJiAhc2hvd0ludGVybmFsRWRnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMubW92ZVRvKHBhcnQudmVydGljZXNbKGogKyAxKSAlIHBhcnQudmVydGljZXMubGVuZ3RoXS54LCBwYXJ0LnZlcnRpY2VzWyhqICsgMSkgJSBwYXJ0LnZlcnRpY2VzLmxlbmd0aF0ueSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjLmxpbmVUbyhwYXJ0LnZlcnRpY2VzWzBdLngsIHBhcnQudmVydGljZXNbMF0ueSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjLmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAnI2JiYic7XG4gICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE9wdGltaXNlZCBtZXRob2QgZm9yIGRyYXdpbmcgYm9keSBjb252ZXggaHVsbCB3aXJlZnJhbWVzIGluIG9uZSBwYXNzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGJvZHlDb252ZXhIdWxsc1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmJvZHlDb252ZXhIdWxscyA9IGZ1bmN0aW9uKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dCxcbiAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICBwYXJ0LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGosXG4gICAgICAgICAgICBrO1xuXG4gICAgICAgIGMuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgLy8gcmVuZGVyIGNvbnZleCBodWxsc1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIWJvZHkucmVuZGVyLnZpc2libGUgfHwgYm9keS5wYXJ0cy5sZW5ndGggPT09IDEpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIGMubW92ZVRvKGJvZHkudmVydGljZXNbMF0ueCwgYm9keS52ZXJ0aWNlc1swXS55KTtcblxuICAgICAgICAgICAgZm9yIChqID0gMTsgaiA8IGJvZHkudmVydGljZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjLmxpbmVUbyhib2R5LnZlcnRpY2VzW2pdLngsIGJvZHkudmVydGljZXNbal0ueSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGMubGluZVRvKGJvZHkudmVydGljZXNbMF0ueCwgYm9keS52ZXJ0aWNlc1swXS55KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGMubGluZVdpZHRoID0gMTtcbiAgICAgICAgYy5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMiknO1xuICAgICAgICBjLnN0cm9rZSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGJvZHkgdmVydGV4IG51bWJlcnMuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHZlcnRleE51bWJlcnNcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci52ZXJ0ZXhOdW1iZXJzID0gZnVuY3Rpb24ocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGosXG4gICAgICAgICAgICBrO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IGJvZGllc1tpXS5wYXJ0cztcbiAgICAgICAgICAgIGZvciAoayA9IHBhcnRzLmxlbmd0aCA+IDEgPyAxIDogMDsgayA8IHBhcnRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBwYXJ0c1trXTtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgcGFydC52ZXJ0aWNlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjLmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMiknO1xuICAgICAgICAgICAgICAgICAgICBjLmZpbGxUZXh0KGkgKyAnXycgKyBqLCBwYXJ0LnBvc2l0aW9uLnggKyAocGFydC52ZXJ0aWNlc1tqXS54IC0gcGFydC5wb3NpdGlvbi54KSAqIDAuOCwgcGFydC5wb3NpdGlvbi55ICsgKHBhcnQudmVydGljZXNbal0ueSAtIHBhcnQucG9zaXRpb24ueSkgKiAwLjgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIG1vdXNlIHBvc2l0aW9uLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBtb3VzZVBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7bW91c2V9IG1vdXNlXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLm1vdXNlUG9zaXRpb24gPSBmdW5jdGlvbihyZW5kZXIsIG1vdXNlLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dDtcbiAgICAgICAgYy5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjgpJztcbiAgICAgICAgYy5maWxsVGV4dChtb3VzZS5wb3NpdGlvbi54ICsgJyAgJyArIG1vdXNlLnBvc2l0aW9uLnksIG1vdXNlLnBvc2l0aW9uLnggKyA1LCBtb3VzZS5wb3NpdGlvbi55IC0gNSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERyYXdzIGJvZHkgYm91bmRzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGJvZHlCb3VuZHNcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5ib2R5Qm91bmRzID0gZnVuY3Rpb24ocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0LFxuICAgICAgICAgICAgZW5naW5lID0gcmVuZGVyLmVuZ2luZSxcbiAgICAgICAgICAgIG9wdGlvbnMgPSByZW5kZXIub3B0aW9ucztcblxuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXTtcblxuICAgICAgICAgICAgaWYgKGJvZHkucmVuZGVyLnZpc2libGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFydHMgPSBib2RpZXNbaV0ucGFydHM7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IHBhcnRzLmxlbmd0aCA+IDEgPyAxIDogMDsgaiA8IHBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0ID0gcGFydHNbal07XG4gICAgICAgICAgICAgICAgICAgIGMucmVjdChwYXJ0LmJvdW5kcy5taW4ueCwgcGFydC5ib3VuZHMubWluLnksIHBhcnQuYm91bmRzLm1heC54IC0gcGFydC5ib3VuZHMubWluLngsIHBhcnQuYm91bmRzLm1heC55IC0gcGFydC5ib3VuZHMubWluLnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLndpcmVmcmFtZXMpIHtcbiAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjA4KSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gJ3JnYmEoMCwwLDAsMC4xKSc7XG4gICAgICAgIH1cblxuICAgICAgICBjLmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERyYXdzIGJvZHkgYW5nbGUgaW5kaWNhdG9ycyBhbmQgYXhlc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBib2R5QXhlc1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmJvZHlBeGVzID0gZnVuY3Rpb24ocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0LFxuICAgICAgICAgICAgZW5naW5lID0gcmVuZGVyLmVuZ2luZSxcbiAgICAgICAgICAgIG9wdGlvbnMgPSByZW5kZXIub3B0aW9ucyxcbiAgICAgICAgICAgIHBhcnQsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIGs7XG5cbiAgICAgICAgYy5iZWdpblBhdGgoKTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXSxcbiAgICAgICAgICAgICAgICBwYXJ0cyA9IGJvZHkucGFydHM7XG5cbiAgICAgICAgICAgIGlmICghYm9keS5yZW5kZXIudmlzaWJsZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2hvd0F4ZXMpIHtcbiAgICAgICAgICAgICAgICAvLyByZW5kZXIgYWxsIGF4ZXNcbiAgICAgICAgICAgICAgICBmb3IgKGogPSBwYXJ0cy5sZW5ndGggPiAxID8gMSA6IDA7IGogPCBwYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gcGFydHNbal07XG4gICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBwYXJ0LmF4ZXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBheGlzID0gcGFydC5heGVzW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5tb3ZlVG8ocGFydC5wb3NpdGlvbi54LCBwYXJ0LnBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5saW5lVG8ocGFydC5wb3NpdGlvbi54ICsgYXhpcy54ICogMjAsIHBhcnQucG9zaXRpb24ueSArIGF4aXMueSAqIDIwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gcGFydHMubGVuZ3RoID4gMSA/IDEgOiAwOyBqIDwgcGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydCA9IHBhcnRzW2pdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgcGFydC5heGVzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW5kZXIgYSBzaW5nbGUgYXhpcyBpbmRpY2F0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgIGMubW92ZVRvKHBhcnQucG9zaXRpb24ueCwgcGFydC5wb3NpdGlvbi55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMubGluZVRvKChwYXJ0LnZlcnRpY2VzWzBdLnggKyBwYXJ0LnZlcnRpY2VzW3BhcnQudmVydGljZXMubGVuZ3RoLTFdLngpIC8gMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocGFydC52ZXJ0aWNlc1swXS55ICsgcGFydC52ZXJ0aWNlc1twYXJ0LnZlcnRpY2VzLmxlbmd0aC0xXS55KSAvIDIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMud2lyZWZyYW1lcykge1xuICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9ICdpbmRpYW5yZWQnO1xuICAgICAgICAgICAgYy5saW5lV2lkdGggPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCknO1xuICAgICAgICAgICAgYy5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnb3ZlcmxheSc7XG4gICAgICAgICAgICBjLmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIH1cblxuICAgICAgICBjLnN0cm9rZSgpO1xuICAgICAgICBjLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERyYXdzIGJvZHkgcG9zaXRpb25zXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGJvZHlQb3NpdGlvbnNcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5ib2R5UG9zaXRpb25zID0gZnVuY3Rpb24ocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0LFxuICAgICAgICAgICAgZW5naW5lID0gcmVuZGVyLmVuZ2luZSxcbiAgICAgICAgICAgIG9wdGlvbnMgPSByZW5kZXIub3B0aW9ucyxcbiAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICBwYXJ0LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGs7XG5cbiAgICAgICAgYy5iZWdpblBhdGgoKTtcblxuICAgICAgICAvLyByZW5kZXIgY3VycmVudCBwb3NpdGlvbnNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYm9keSA9IGJvZGllc1tpXTtcblxuICAgICAgICAgICAgaWYgKCFib2R5LnJlbmRlci52aXNpYmxlKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBoYW5kbGUgY29tcG91bmQgcGFydHNcbiAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBib2R5LnBhcnRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgcGFydCA9IGJvZHkucGFydHNba107XG4gICAgICAgICAgICAgICAgYy5hcmMocGFydC5wb3NpdGlvbi54LCBwYXJ0LnBvc2l0aW9uLnksIDMsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYy5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLndpcmVmcmFtZXMpIHtcbiAgICAgICAgICAgIGMuZmlsbFN0eWxlID0gJ2luZGlhbnJlZCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjLmZpbGxTdHlsZSA9ICdyZ2JhKDAsMCwwLDAuNSknO1xuICAgICAgICB9XG4gICAgICAgIGMuZmlsbCgpO1xuXG4gICAgICAgIGMuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgLy8gcmVuZGVyIHByZXZpb3VzIHBvc2l0aW9uc1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBib2R5ID0gYm9kaWVzW2ldO1xuICAgICAgICAgICAgaWYgKGJvZHkucmVuZGVyLnZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjLmFyYyhib2R5LnBvc2l0aW9uUHJldi54LCBib2R5LnBvc2l0aW9uUHJldi55LCAyLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGMuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjLmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwxNjUsMCwwLjgpJztcbiAgICAgICAgYy5maWxsKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERyYXdzIGJvZHkgdmVsb2NpdHlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgYm9keVZlbG9jaXR5XG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuYm9keVZlbG9jaXR5ID0gZnVuY3Rpb24ocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0O1xuXG4gICAgICAgIGMuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIWJvZHkucmVuZGVyLnZpc2libGUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIGMubW92ZVRvKGJvZHkucG9zaXRpb24ueCwgYm9keS5wb3NpdGlvbi55KTtcbiAgICAgICAgICAgIGMubGluZVRvKGJvZHkucG9zaXRpb24ueCArIChib2R5LnBvc2l0aW9uLnggLSBib2R5LnBvc2l0aW9uUHJldi54KSAqIDIsIGJvZHkucG9zaXRpb24ueSArIChib2R5LnBvc2l0aW9uLnkgLSBib2R5LnBvc2l0aW9uUHJldi55KSAqIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYy5saW5lV2lkdGggPSAzO1xuICAgICAgICBjLnN0cm9rZVN0eWxlID0gJ2Nvcm5mbG93ZXJibHVlJztcbiAgICAgICAgYy5zdHJva2UoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRHJhd3MgYm9keSBpZHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgYm9keUlkc1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmJvZHlJZHMgPSBmdW5jdGlvbihyZW5kZXIsIGJvZGllcywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgajtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIWJvZGllc1tpXS5yZW5kZXIudmlzaWJsZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgdmFyIHBhcnRzID0gYm9kaWVzW2ldLnBhcnRzO1xuICAgICAgICAgICAgZm9yIChqID0gcGFydHMubGVuZ3RoID4gMSA/IDEgOiAwOyBqIDwgcGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFydCA9IHBhcnRzW2pdO1xuICAgICAgICAgICAgICAgIGMuZm9udCA9IFwiMTJweCBBcmlhbFwiO1xuICAgICAgICAgICAgICAgIGMuZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC41KSc7XG4gICAgICAgICAgICAgICAgYy5maWxsVGV4dChwYXJ0LmlkLCBwYXJ0LnBvc2l0aW9uLnggKyAxMCwgcGFydC5wb3NpdGlvbi55IC0gMTApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERlc2NyaXB0aW9uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGNvbGxpc2lvbnNcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtwYWlyW119IHBhaXJzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmNvbGxpc2lvbnMgPSBmdW5jdGlvbihyZW5kZXIsIHBhaXJzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dCxcbiAgICAgICAgICAgIG9wdGlvbnMgPSByZW5kZXIub3B0aW9ucyxcbiAgICAgICAgICAgIHBhaXIsXG4gICAgICAgICAgICBjb2xsaXNpb24sXG4gICAgICAgICAgICBjb3JyZWN0ZWQsXG4gICAgICAgICAgICBib2R5QSxcbiAgICAgICAgICAgIGJvZHlCLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGo7XG5cbiAgICAgICAgYy5iZWdpblBhdGgoKTtcblxuICAgICAgICAvLyByZW5kZXIgY29sbGlzaW9uIHBvc2l0aW9uc1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhaXIgPSBwYWlyc1tpXTtcblxuICAgICAgICAgICAgaWYgKCFwYWlyLmlzQWN0aXZlKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb2xsaXNpb24gPSBwYWlyLmNvbGxpc2lvbjtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBwYWlyLmFjdGl2ZUNvbnRhY3RzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhY3QgPSBwYWlyLmFjdGl2ZUNvbnRhY3RzW2pdLFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXggPSBjb250YWN0LnZlcnRleDtcbiAgICAgICAgICAgICAgICBjLnJlY3QodmVydGV4LnggLSAxLjUsIHZlcnRleC55IC0gMS41LCAzLjUsIDMuNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy53aXJlZnJhbWVzKSB7XG4gICAgICAgICAgICBjLmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNyknO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYy5maWxsU3R5bGUgPSAnb3JhbmdlJztcbiAgICAgICAgfVxuICAgICAgICBjLmZpbGwoKTtcblxuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIC8vIHJlbmRlciBjb2xsaXNpb24gbm9ybWFsc1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhaXIgPSBwYWlyc1tpXTtcblxuICAgICAgICAgICAgaWYgKCFwYWlyLmlzQWN0aXZlKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb2xsaXNpb24gPSBwYWlyLmNvbGxpc2lvbjtcblxuICAgICAgICAgICAgaWYgKHBhaXIuYWN0aXZlQ29udGFjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBub3JtYWxQb3NYID0gcGFpci5hY3RpdmVDb250YWN0c1swXS52ZXJ0ZXgueCxcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsUG9zWSA9IHBhaXIuYWN0aXZlQ29udGFjdHNbMF0udmVydGV4Lnk7XG5cbiAgICAgICAgICAgICAgICBpZiAocGFpci5hY3RpdmVDb250YWN0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsUG9zWCA9IChwYWlyLmFjdGl2ZUNvbnRhY3RzWzBdLnZlcnRleC54ICsgcGFpci5hY3RpdmVDb250YWN0c1sxXS52ZXJ0ZXgueCkgLyAyO1xuICAgICAgICAgICAgICAgICAgICBub3JtYWxQb3NZID0gKHBhaXIuYWN0aXZlQ29udGFjdHNbMF0udmVydGV4LnkgKyBwYWlyLmFjdGl2ZUNvbnRhY3RzWzFdLnZlcnRleC55KSAvIDI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNvbGxpc2lvbi5ib2R5QiA9PT0gY29sbGlzaW9uLnN1cHBvcnRzWzBdLmJvZHkgfHwgY29sbGlzaW9uLmJvZHlBLmlzU3RhdGljID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGMubW92ZVRvKG5vcm1hbFBvc1ggLSBjb2xsaXNpb24ubm9ybWFsLnggKiA4LCBub3JtYWxQb3NZIC0gY29sbGlzaW9uLm5vcm1hbC55ICogOCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYy5tb3ZlVG8obm9ybWFsUG9zWCArIGNvbGxpc2lvbi5ub3JtYWwueCAqIDgsIG5vcm1hbFBvc1kgKyBjb2xsaXNpb24ubm9ybWFsLnkgKiA4KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjLmxpbmVUbyhub3JtYWxQb3NYLCBub3JtYWxQb3NZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLndpcmVmcmFtZXMpIHtcbiAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMTY1LDAsMC43KSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gJ29yYW5nZSc7XG4gICAgICAgIH1cblxuICAgICAgICBjLmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERlc2NyaXB0aW9uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHNlcGFyYXRpb25zXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7cGFpcltdfSBwYWlyc1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5zZXBhcmF0aW9ucyA9IGZ1bmN0aW9uKHJlbmRlciwgcGFpcnMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0LFxuICAgICAgICAgICAgb3B0aW9ucyA9IHJlbmRlci5vcHRpb25zLFxuICAgICAgICAgICAgcGFpcixcbiAgICAgICAgICAgIGNvbGxpc2lvbixcbiAgICAgICAgICAgIGNvcnJlY3RlZCxcbiAgICAgICAgICAgIGJvZHlBLFxuICAgICAgICAgICAgYm9keUIsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgajtcblxuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIC8vIHJlbmRlciBzZXBhcmF0aW9uc1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhaXIgPSBwYWlyc1tpXTtcblxuICAgICAgICAgICAgaWYgKCFwYWlyLmlzQWN0aXZlKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb2xsaXNpb24gPSBwYWlyLmNvbGxpc2lvbjtcbiAgICAgICAgICAgIGJvZHlBID0gY29sbGlzaW9uLmJvZHlBO1xuICAgICAgICAgICAgYm9keUIgPSBjb2xsaXNpb24uYm9keUI7XG5cbiAgICAgICAgICAgIHZhciBrID0gMTtcblxuICAgICAgICAgICAgaWYgKCFib2R5Qi5pc1N0YXRpYyAmJiAhYm9keUEuaXNTdGF0aWMpIGsgPSAwLjU7XG4gICAgICAgICAgICBpZiAoYm9keUIuaXNTdGF0aWMpIGsgPSAwO1xuXG4gICAgICAgICAgICBjLm1vdmVUbyhib2R5Qi5wb3NpdGlvbi54LCBib2R5Qi5wb3NpdGlvbi55KTtcbiAgICAgICAgICAgIGMubGluZVRvKGJvZHlCLnBvc2l0aW9uLnggLSBjb2xsaXNpb24ucGVuZXRyYXRpb24ueCAqIGssIGJvZHlCLnBvc2l0aW9uLnkgLSBjb2xsaXNpb24ucGVuZXRyYXRpb24ueSAqIGspO1xuXG4gICAgICAgICAgICBrID0gMTtcblxuICAgICAgICAgICAgaWYgKCFib2R5Qi5pc1N0YXRpYyAmJiAhYm9keUEuaXNTdGF0aWMpIGsgPSAwLjU7XG4gICAgICAgICAgICBpZiAoYm9keUEuaXNTdGF0aWMpIGsgPSAwO1xuXG4gICAgICAgICAgICBjLm1vdmVUbyhib2R5QS5wb3NpdGlvbi54LCBib2R5QS5wb3NpdGlvbi55KTtcbiAgICAgICAgICAgIGMubGluZVRvKGJvZHlBLnBvc2l0aW9uLnggKyBjb2xsaXNpb24ucGVuZXRyYXRpb24ueCAqIGssIGJvZHlBLnBvc2l0aW9uLnkgKyBjb2xsaXNpb24ucGVuZXRyYXRpb24ueSAqIGspO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMud2lyZWZyYW1lcykge1xuICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwxNjUsMCwwLjUpJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAnb3JhbmdlJztcbiAgICAgICAgfVxuICAgICAgICBjLnN0cm9rZSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXNjcmlwdGlvblxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBpbnNwZWN0b3JcbiAgICAgKiBAcGFyYW0ge2luc3BlY3Rvcn0gaW5zcGVjdG9yXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmluc3BlY3RvciA9IGZ1bmN0aW9uKGluc3BlY3RvciwgY29udGV4dCkge1xuICAgICAgICB2YXIgZW5naW5lID0gaW5zcGVjdG9yLmVuZ2luZSxcbiAgICAgICAgICAgIHNlbGVjdGVkID0gaW5zcGVjdG9yLnNlbGVjdGVkLFxuICAgICAgICAgICAgcmVuZGVyID0gaW5zcGVjdG9yLnJlbmRlcixcbiAgICAgICAgICAgIG9wdGlvbnMgPSByZW5kZXIub3B0aW9ucyxcbiAgICAgICAgICAgIGJvdW5kcztcblxuICAgICAgICBpZiAob3B0aW9ucy5oYXNCb3VuZHMpIHtcbiAgICAgICAgICAgIHZhciBib3VuZHNXaWR0aCA9IHJlbmRlci5ib3VuZHMubWF4LnggLSByZW5kZXIuYm91bmRzLm1pbi54LFxuICAgICAgICAgICAgICAgIGJvdW5kc0hlaWdodCA9IHJlbmRlci5ib3VuZHMubWF4LnkgLSByZW5kZXIuYm91bmRzLm1pbi55LFxuICAgICAgICAgICAgICAgIGJvdW5kc1NjYWxlWCA9IGJvdW5kc1dpZHRoIC8gcmVuZGVyLm9wdGlvbnMud2lkdGgsXG4gICAgICAgICAgICAgICAgYm91bmRzU2NhbGVZID0gYm91bmRzSGVpZ2h0IC8gcmVuZGVyLm9wdGlvbnMuaGVpZ2h0O1xuXG4gICAgICAgICAgICBjb250ZXh0LnNjYWxlKDEgLyBib3VuZHNTY2FsZVgsIDEgLyBib3VuZHNTY2FsZVkpO1xuICAgICAgICAgICAgY29udGV4dC50cmFuc2xhdGUoLXJlbmRlci5ib3VuZHMubWluLngsIC1yZW5kZXIuYm91bmRzLm1pbi55KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gc2VsZWN0ZWRbaV0uZGF0YTtcblxuICAgICAgICAgICAgY29udGV4dC50cmFuc2xhdGUoMC41LCAwLjUpO1xuICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSAxO1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwxNjUsMCwwLjkpJztcbiAgICAgICAgICAgIGNvbnRleHQuc2V0TGluZURhc2goWzEsMl0pO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGl0ZW0udHlwZSkge1xuXG4gICAgICAgICAgICBjYXNlICdib2R5JzpcblxuICAgICAgICAgICAgICAgIC8vIHJlbmRlciBib2R5IHNlbGVjdGlvbnNcbiAgICAgICAgICAgICAgICBib3VuZHMgPSBpdGVtLmJvdW5kcztcbiAgICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQucmVjdChNYXRoLmZsb29yKGJvdW5kcy5taW4ueCAtIDMpLCBNYXRoLmZsb29yKGJvdW5kcy5taW4ueSAtIDMpLFxuICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKGJvdW5kcy5tYXgueCAtIGJvdW5kcy5taW4ueCArIDYpLCBNYXRoLmZsb29yKGJvdW5kcy5tYXgueSAtIGJvdW5kcy5taW4ueSArIDYpKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnY29uc3RyYWludCc6XG5cbiAgICAgICAgICAgICAgICAvLyByZW5kZXIgY29uc3RyYWludCBzZWxlY3Rpb25zXG4gICAgICAgICAgICAgICAgdmFyIHBvaW50ID0gaXRlbS5wb2ludEE7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uYm9keUEpXG4gICAgICAgICAgICAgICAgICAgIHBvaW50ID0gaXRlbS5wb2ludEI7XG4gICAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmFyYyhwb2ludC54LCBwb2ludC55LCAxMCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRleHQuc2V0TGluZURhc2goW10pO1xuICAgICAgICAgICAgY29udGV4dC50cmFuc2xhdGUoLTAuNSwgLTAuNSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZW5kZXIgc2VsZWN0aW9uIHJlZ2lvblxuICAgICAgICBpZiAoaW5zcGVjdG9yLnNlbGVjdFN0YXJ0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb250ZXh0LnRyYW5zbGF0ZSgwLjUsIDAuNSk7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDE2NSwwLDAuNiknO1xuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMTY1LDAsMC4xKSc7XG4gICAgICAgICAgICBib3VuZHMgPSBpbnNwZWN0b3Iuc2VsZWN0Qm91bmRzO1xuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQucmVjdChNYXRoLmZsb29yKGJvdW5kcy5taW4ueCksIE1hdGguZmxvb3IoYm91bmRzLm1pbi55KSxcbiAgICAgICAgICAgICAgICBNYXRoLmZsb29yKGJvdW5kcy5tYXgueCAtIGJvdW5kcy5taW4ueCksIE1hdGguZmxvb3IoYm91bmRzLm1heC55IC0gYm91bmRzLm1pbi55KSk7XG4gICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICAgICAgY29udGV4dC50cmFuc2xhdGUoLTAuNSwgLTAuNSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5oYXNCb3VuZHMpXG4gICAgICAgICAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyByZW5kZXIgdGltaW5nLlxuICAgICAqIEBtZXRob2QgX3VwZGF0ZVRpbWluZ1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lXG4gICAgICovXG4gICAgdmFyIF91cGRhdGVUaW1pbmcgPSBmdW5jdGlvbihyZW5kZXIsIHRpbWUpIHtcbiAgICAgICAgdmFyIGVuZ2luZSA9IHJlbmRlci5lbmdpbmUsXG4gICAgICAgICAgICB0aW1pbmcgPSByZW5kZXIudGltaW5nLFxuICAgICAgICAgICAgaGlzdG9yeVNpemUgPSB0aW1pbmcuaGlzdG9yeVNpemUsXG4gICAgICAgICAgICB0aW1lc3RhbXAgPSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcDtcblxuICAgICAgICB0aW1pbmcuZGVsdGEgPSB0aW1lIC0gdGltaW5nLmxhc3RUaW1lIHx8IFJlbmRlci5fZ29vZERlbHRhO1xuICAgICAgICB0aW1pbmcubGFzdFRpbWUgPSB0aW1lO1xuXG4gICAgICAgIHRpbWluZy50aW1lc3RhbXBFbGFwc2VkID0gdGltZXN0YW1wIC0gdGltaW5nLmxhc3RUaW1lc3RhbXAgfHwgMDtcbiAgICAgICAgdGltaW5nLmxhc3RUaW1lc3RhbXAgPSB0aW1lc3RhbXA7XG5cbiAgICAgICAgdGltaW5nLmRlbHRhSGlzdG9yeS51bnNoaWZ0KHRpbWluZy5kZWx0YSk7XG4gICAgICAgIHRpbWluZy5kZWx0YUhpc3RvcnkubGVuZ3RoID0gTWF0aC5taW4odGltaW5nLmRlbHRhSGlzdG9yeS5sZW5ndGgsIGhpc3RvcnlTaXplKTtcblxuICAgICAgICB0aW1pbmcuZW5naW5lRGVsdGFIaXN0b3J5LnVuc2hpZnQoZW5naW5lLnRpbWluZy5sYXN0RGVsdGEpO1xuICAgICAgICB0aW1pbmcuZW5naW5lRGVsdGFIaXN0b3J5Lmxlbmd0aCA9IE1hdGgubWluKHRpbWluZy5lbmdpbmVEZWx0YUhpc3RvcnkubGVuZ3RoLCBoaXN0b3J5U2l6ZSk7XG5cbiAgICAgICAgdGltaW5nLnRpbWVzdGFtcEVsYXBzZWRIaXN0b3J5LnVuc2hpZnQodGltaW5nLnRpbWVzdGFtcEVsYXBzZWQpO1xuICAgICAgICB0aW1pbmcudGltZXN0YW1wRWxhcHNlZEhpc3RvcnkubGVuZ3RoID0gTWF0aC5taW4odGltaW5nLnRpbWVzdGFtcEVsYXBzZWRIaXN0b3J5Lmxlbmd0aCwgaGlzdG9yeVNpemUpO1xuXG4gICAgICAgIHRpbWluZy5lbmdpbmVFbGFwc2VkSGlzdG9yeS51bnNoaWZ0KGVuZ2luZS50aW1pbmcubGFzdEVsYXBzZWQpO1xuICAgICAgICB0aW1pbmcuZW5naW5lRWxhcHNlZEhpc3RvcnkubGVuZ3RoID0gTWF0aC5taW4odGltaW5nLmVuZ2luZUVsYXBzZWRIaXN0b3J5Lmxlbmd0aCwgaGlzdG9yeVNpemUpO1xuXG4gICAgICAgIHRpbWluZy5lbGFwc2VkSGlzdG9yeS51bnNoaWZ0KHRpbWluZy5sYXN0RWxhcHNlZCk7XG4gICAgICAgIHRpbWluZy5lbGFwc2VkSGlzdG9yeS5sZW5ndGggPSBNYXRoLm1pbih0aW1pbmcuZWxhcHNlZEhpc3RvcnkubGVuZ3RoLCBoaXN0b3J5U2l6ZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG1lYW4gdmFsdWUgb2YgdGhlIGdpdmVuIG51bWJlcnMuXG4gICAgICogQG1ldGhvZCBfbWVhblxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtOdW1iZXJbXX0gdmFsdWVzXG4gICAgICogQHJldHVybiB7TnVtYmVyfSB0aGUgbWVhbiBvZiBnaXZlbiB2YWx1ZXNcbiAgICAgKi9cbiAgICB2YXIgX21lYW4gPSBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAocmVzdWx0IC8gdmFsdWVzLmxlbmd0aCkgfHwgMDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQG1ldGhvZCBfY3JlYXRlQ2FudmFzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gd2lkdGhcbiAgICAgKiBAcGFyYW0ge30gaGVpZ2h0XG4gICAgICogQHJldHVybiBjYW52YXNcbiAgICAgKi9cbiAgICB2YXIgX2NyZWF0ZUNhbnZhcyA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY2FudmFzLm9uY29udGV4dG1lbnUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9O1xuICAgICAgICBjYW52YXMub25zZWxlY3RzdGFydCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2U7IH07XG4gICAgICAgIHJldHVybiBjYW52YXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHBpeGVsIHJhdGlvIG9mIHRoZSBjYW52YXMuXG4gICAgICogQG1ldGhvZCBfZ2V0UGl4ZWxSYXRpb1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY2FudmFzXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBwaXhlbCByYXRpb1xuICAgICAqL1xuICAgIHZhciBfZ2V0UGl4ZWxSYXRpbyA9IGZ1bmN0aW9uKGNhbnZhcykge1xuICAgICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLFxuICAgICAgICAgICAgZGV2aWNlUGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEsXG4gICAgICAgICAgICBiYWNraW5nU3RvcmVQaXhlbFJhdGlvID0gY29udGV4dC53ZWJraXRCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IGNvbnRleHQubW96QmFja2luZ1N0b3JlUGl4ZWxSYXRpb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBjb250ZXh0Lm1zQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fCBjb250ZXh0Lm9CYWNraW5nU3RvcmVQaXhlbFJhdGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGNvbnRleHQuYmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fCAxO1xuXG4gICAgICAgIHJldHVybiBkZXZpY2VQaXhlbFJhdGlvIC8gYmFja2luZ1N0b3JlUGl4ZWxSYXRpbztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcmVxdWVzdGVkIHRleHR1cmUgKGFuIEltYWdlKSB2aWEgaXRzIHBhdGhcbiAgICAgKiBAbWV0aG9kIF9nZXRUZXh0dXJlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGltYWdlUGF0aFxuICAgICAqIEByZXR1cm4ge0ltYWdlfSB0ZXh0dXJlXG4gICAgICovXG4gICAgdmFyIF9nZXRUZXh0dXJlID0gZnVuY3Rpb24ocmVuZGVyLCBpbWFnZVBhdGgpIHtcbiAgICAgICAgdmFyIGltYWdlID0gcmVuZGVyLnRleHR1cmVzW2ltYWdlUGF0aF07XG5cbiAgICAgICAgaWYgKGltYWdlKVxuICAgICAgICAgICAgcmV0dXJuIGltYWdlO1xuXG4gICAgICAgIGltYWdlID0gcmVuZGVyLnRleHR1cmVzW2ltYWdlUGF0aF0gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gaW1hZ2VQYXRoO1xuXG4gICAgICAgIHJldHVybiBpbWFnZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyB0aGUgYmFja2dyb3VuZCB0byB0aGUgY2FudmFzIHVzaW5nIENTUy5cbiAgICAgKiBAbWV0aG9kIGFwcGx5QmFja2dyb3VuZFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBiYWNrZ3JvdW5kXG4gICAgICovXG4gICAgdmFyIF9hcHBseUJhY2tncm91bmQgPSBmdW5jdGlvbihyZW5kZXIsIGJhY2tncm91bmQpIHtcbiAgICAgICAgdmFyIGNzc0JhY2tncm91bmQgPSBiYWNrZ3JvdW5kO1xuXG4gICAgICAgIGlmICgvKGpwZ3xnaWZ8cG5nKSQvLnRlc3QoYmFja2dyb3VuZCkpXG4gICAgICAgICAgICBjc3NCYWNrZ3JvdW5kID0gJ3VybCgnICsgYmFja2dyb3VuZCArICcpJztcblxuICAgICAgICByZW5kZXIuY2FudmFzLnN0eWxlLmJhY2tncm91bmQgPSBjc3NCYWNrZ3JvdW5kO1xuICAgICAgICByZW5kZXIuY2FudmFzLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb250YWluXCI7XG4gICAgICAgIHJlbmRlci5jdXJyZW50QmFja2dyb3VuZCA9IGJhY2tncm91bmQ7XG4gICAgfTtcblxuICAgIC8qXG4gICAgKlxuICAgICogIEV2ZW50cyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGJlZm9yZSByZW5kZXJpbmdcbiAgICAqXG4gICAgKiBAZXZlbnQgYmVmb3JlUmVuZGVyXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCBhZnRlciByZW5kZXJpbmdcbiAgICAqXG4gICAgKiBAZXZlbnQgYWZ0ZXJSZW5kZXJcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKlxuICAgICpcbiAgICAqICBQcm9wZXJ0aWVzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYmFjay1yZWZlcmVuY2UgdG8gdGhlIGBNYXR0ZXIuUmVuZGVyYCBtb2R1bGUuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29udHJvbGxlclxuICAgICAqIEB0eXBlIHJlbmRlclxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGBNYXR0ZXIuRW5naW5lYCBpbnN0YW5jZSB0byBiZSB1c2VkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGVuZ2luZVxuICAgICAqIEB0eXBlIGVuZ2luZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgd2hlcmUgdGhlIGNhbnZhcyBpcyB0byBiZSBpbnNlcnRlZCAoaWYgYHJlbmRlci5jYW52YXNgIGhhcyBub3QgYmVlbiBzcGVjaWZpZWQpXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZWxlbWVudFxuICAgICAqIEB0eXBlIEhUTUxFbGVtZW50XG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNhbnZhcyBlbGVtZW50IHRvIHJlbmRlciB0by4gSWYgbm90IHNwZWNpZmllZCwgb25lIHdpbGwgYmUgY3JlYXRlZCBpZiBgcmVuZGVyLmVsZW1lbnRgIGhhcyBiZWVuIHNwZWNpZmllZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjYW52YXNcbiAgICAgKiBAdHlwZSBIVE1MQ2FudmFzRWxlbWVudFxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYEJvdW5kc2Agb2JqZWN0IHRoYXQgc3BlY2lmaWVzIHRoZSBkcmF3aW5nIHZpZXcgcmVnaW9uLlxuICAgICAqIFJlbmRlcmluZyB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgdHJhbnNmb3JtZWQgYW5kIHNjYWxlZCB0byBmaXQgd2l0aGluIHRoZSBjYW52YXMgc2l6ZSAoYHJlbmRlci5vcHRpb25zLndpZHRoYCBhbmQgYHJlbmRlci5vcHRpb25zLmhlaWdodGApLlxuICAgICAqIFRoaXMgYWxsb3dzIGZvciBjcmVhdGluZyB2aWV3cyB0aGF0IGNhbiBwYW4gb3Igem9vbSBhcm91bmQgdGhlIHNjZW5lLlxuICAgICAqIFlvdSBtdXN0IGFsc28gc2V0IGByZW5kZXIub3B0aW9ucy5oYXNCb3VuZHNgIHRvIGB0cnVlYCB0byBlbmFibGUgYm91bmRlZCByZW5kZXJpbmcuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYm91bmRzXG4gICAgICogQHR5cGUgYm91bmRzXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgMmQgcmVuZGVyaW5nIGNvbnRleHQgZnJvbSB0aGUgYHJlbmRlci5jYW52YXNgIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29udGV4dFxuICAgICAqIEB0eXBlIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNwcml0ZSB0ZXh0dXJlIGNhY2hlLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHRleHR1cmVzXG4gICAgICogQHR5cGUge31cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBtb3VzZSB0byByZW5kZXIgaWYgYHJlbmRlci5vcHRpb25zLnNob3dNb3VzZVBvc2l0aW9uYCBpcyBlbmFibGVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG1vdXNlXG4gICAgICogQHR5cGUgbW91c2VcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIG9mIHRoZSByZW5kZXJlci5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zXG4gICAgICogQHR5cGUge31cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSB0YXJnZXQgd2lkdGggaW4gcGl4ZWxzIG9mIHRoZSBgcmVuZGVyLmNhbnZhc2AgdG8gYmUgY3JlYXRlZC5cbiAgICAgKiBTZWUgYWxzbyB0aGUgYG9wdGlvbnMucGl4ZWxSYXRpb2AgcHJvcGVydHkgdG8gY2hhbmdlIHJlbmRlciBxdWFsaXR5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMud2lkdGhcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCA4MDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSB0YXJnZXQgaGVpZ2h0IGluIHBpeGVscyBvZiB0aGUgYHJlbmRlci5jYW52YXNgIHRvIGJlIGNyZWF0ZWQuXG4gICAgICogU2VlIGFsc28gdGhlIGBvcHRpb25zLnBpeGVsUmF0aW9gIHByb3BlcnR5IHRvIGNoYW5nZSByZW5kZXIgcXVhbGl0eS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLmhlaWdodFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDYwMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIFtwaXhlbCByYXRpb10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9kZXZpY2VQaXhlbFJhdGlvKSB0byB1c2Ugd2hlbiByZW5kZXJpbmcuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5waXhlbFJhdGlvXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBDU1MgYmFja2dyb3VuZCBjb2xvciBzdHJpbmcgdG8gdXNlIHdoZW4gYHJlbmRlci5vcHRpb25zLndpcmVmcmFtZXNgIGlzIGRpc2FibGVkLlxuICAgICAqIFRoaXMgbWF5IGJlIGFsc28gc2V0IHRvIGAndHJhbnNwYXJlbnQnYCBvciBlcXVpdmFsZW50LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuYmFja2dyb3VuZFxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0ICcjMTQxNTFmJ1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBDU1MgYmFja2dyb3VuZCBjb2xvciBzdHJpbmcgdG8gdXNlIHdoZW4gYHJlbmRlci5vcHRpb25zLndpcmVmcmFtZXNgIGlzIGVuYWJsZWQuXG4gICAgICogVGhpcyBtYXkgYmUgYWxzbyBzZXQgdG8gYCd0cmFuc3BhcmVudCdgIG9yIGVxdWl2YWxlbnQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy53aXJlZnJhbWVCYWNrZ3JvdW5kXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgJyMxNDE1MWYnXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdGhhdCBzcGVjaWZpZXMgaWYgYHJlbmRlci5ib3VuZHNgIHNob3VsZCBiZSB1c2VkIHdoZW4gcmVuZGVyaW5nLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuaGFzQm91bmRzXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgYWxsIGRlYnVnIGluZm9ybWF0aW9uIG92ZXJsYXlzIHRvZ2V0aGVyLiAgXG4gICAgICogVGhpcyBpbmNsdWRlcyBhbmQgaGFzIHByaW9yaXR5IG92ZXIgdGhlIHZhbHVlcyBvZjpcbiAgICAgKlxuICAgICAqIC0gYHJlbmRlci5vcHRpb25zLnNob3dTdGF0c2BcbiAgICAgKiAtIGByZW5kZXIub3B0aW9ucy5zaG93UGVyZm9ybWFuY2VgXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93RGVidWdcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgZW5naW5lIHN0YXRzIGluZm8gb3ZlcmxheS4gIFxuICAgICAqIEZyb20gbGVmdCB0byByaWdodCwgdGhlIHZhbHVlcyBzaG93biBhcmU6XG4gICAgICpcbiAgICAgKiAtIGJvZHkgcGFydHMgdG90YWxcbiAgICAgKiAtIGJvZHkgdG90YWxcbiAgICAgKiAtIGNvbnN0cmFpbnRzIHRvdGFsXG4gICAgICogLSBjb21wb3NpdGVzIHRvdGFsXG4gICAgICogLSBjb2xsaXNpb24gcGFpcnMgdG90YWxcbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dTdGF0c1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHBlcmZvcm1hbmNlIGNoYXJ0cy4gIFxuICAgICAqIEZyb20gbGVmdCB0byByaWdodCwgdGhlIHZhbHVlcyBzaG93biBhcmU6XG4gICAgICpcbiAgICAgKiAtIGF2ZXJhZ2UgcmVuZGVyIGZyZXF1ZW5jeSAoZS5nLiA2MCBmcHMpXG4gICAgICogLSBleGFjdCBlbmdpbmUgZGVsdGEgdGltZSB1c2VkIGZvciBsYXN0IHVwZGF0ZSAoZS5nLiAxNi42Nm1zKVxuICAgICAqIC0gYXZlcmFnZSBlbmdpbmUgZXhlY3V0aW9uIGR1cmF0aW9uIChlLmcuIDUuMDBtcylcbiAgICAgKiAtIGF2ZXJhZ2UgcmVuZGVyIGV4ZWN1dGlvbiBkdXJhdGlvbiAoZS5nLiAwLjQwbXMpXG4gICAgICogLSBhdmVyYWdlIGVmZmVjdGl2ZSBwbGF5IHNwZWVkIChlLmcuICcxLjAweCcgaXMgJ3JlYWwtdGltZScpXG4gICAgICpcbiAgICAgKiBFYWNoIHZhbHVlIGlzIHJlY29yZGVkIG92ZXIgYSBmaXhlZCBzYW1wbGUgb2YgcGFzdCBmcmFtZXMgKDYwIGZyYW1lcykuXG4gICAgICpcbiAgICAgKiBBIGNoYXJ0IHNob3duIGJlbG93IGVhY2ggdmFsdWUgaW5kaWNhdGVzIHRoZSB2YXJpYW5jZSBmcm9tIHRoZSBhdmVyYWdlIG92ZXIgdGhlIHNhbXBsZS5cbiAgICAgKiBUaGUgbW9yZSBzdGFibGUgb3IgZml4ZWQgdGhlIHZhbHVlIGlzIHRoZSBmbGF0dGVyIHRoZSBjaGFydCB3aWxsIGFwcGVhci5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dQZXJmb3JtYW5jZVxuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIFxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSByZW5kZXJpbmcgZW50aXJlbHkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5lbmFibGVkXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gdG9nZ2xlIHdpcmVmcmFtZSByZW5kZXJpbmcgb3RoZXJ3aXNlIHNvbGlkIGZpbGwgcmVuZGVyaW5nIGlzIHVzZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy53aXJlZnJhbWVzXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSBzbGVlcGluZyBib2RpZXMgaW5kaWNhdG9ycy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dTbGVlcGluZ1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGRlYnVnIGluZm9ybWF0aW9uIG92ZXJsYXkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93RGVidWdcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgY29sbGlzaW9uIGJyb2FkcGhhc2UgZGVidWcgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIG5vIGxvbmdlciBpbXBsZW1lbnRlZFxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dCcm9hZHBoYXNlXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGJvZHkgYm91bmRzIGRlYnVnIG92ZXJsYXkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93Qm91bmRzXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGJvZHkgdmVsb2NpdHkgZGVidWcgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dWZWxvY2l0eVxuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBib2R5IGNvbGxpc2lvbnMgZGVidWcgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dDb2xsaXNpb25zXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGNvbGxpc2lvbiByZXNvbHZlciBzZXBhcmF0aW9ucyBkZWJ1ZyBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd1NlcGFyYXRpb25zXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGJvZHkgYXhlcyBkZWJ1ZyBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd0F4ZXNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYm9keSBwb3NpdGlvbnMgZGVidWcgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dQb3NpdGlvbnNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYm9keSBhbmdsZSBkZWJ1ZyBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd0FuZ2xlSW5kaWNhdG9yXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGJvZHkgYW5kIHBhcnQgaWRzIGRlYnVnIG92ZXJsYXkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93SWRzXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGJvZHkgdmVydGV4IG51bWJlcnMgZGVidWcgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dWZXJ0ZXhOdW1iZXJzXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGJvZHkgY29udmV4IGh1bGxzIGRlYnVnIG92ZXJsYXkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93Q29udmV4SHVsbHNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYm9keSBpbnRlcm5hbCBlZGdlcyBkZWJ1ZyBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd0ludGVybmFsRWRnZXNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgbW91c2UgcG9zaXRpb24gZGVidWcgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dNb3VzZVBvc2l0aW9uXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAxNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuQ29udGFjdGAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgY29sbGlzaW9uIGNvbnRhY3RzLlxuKlxuKiBAY2xhc3MgQ29udGFjdFxuKi9cblxudmFyIENvbnRhY3QgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb250YWN0O1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGNvbnRhY3QuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge3ZlcnRleH0gdmVydGV4XG4gICAgICogQHJldHVybiB7Y29udGFjdH0gQSBuZXcgY29udGFjdFxuICAgICAqL1xuICAgIENvbnRhY3QuY3JlYXRlID0gZnVuY3Rpb24odmVydGV4KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2ZXJ0ZXg6IHZlcnRleCxcbiAgICAgICAgICAgIG5vcm1hbEltcHVsc2U6IDAsXG4gICAgICAgICAgICB0YW5nZW50SW1wdWxzZTogMFxuICAgICAgICB9O1xuICAgIH07XG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAxOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuRW5naW5lYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBlbmdpbmVzLlxuKiBBbiBlbmdpbmUgaXMgYSBjb250cm9sbGVyIHRoYXQgbWFuYWdlcyB1cGRhdGluZyB0aGUgc2ltdWxhdGlvbiBvZiB0aGUgd29ybGQuXG4qIFNlZSBgTWF0dGVyLlJ1bm5lcmAgZm9yIGFuIG9wdGlvbmFsIGdhbWUgbG9vcCB1dGlsaXR5LlxuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgRW5naW5lXG4qL1xuXG52YXIgRW5naW5lID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gRW5naW5lO1xuXG52YXIgU2xlZXBpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xudmFyIFJlc29sdmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSk7XG52YXIgRGV0ZWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcbnZhciBQYWlycyA9IF9fd2VicGFja19yZXF1aXJlX18oMjApO1xudmFyIEV2ZW50cyA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG52YXIgQ29tcG9zaXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcbnZhciBDb25zdHJhaW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBCb2R5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBlbmdpbmUuIFRoZSBvcHRpb25zIHBhcmFtZXRlciBpcyBhbiBvYmplY3QgdGhhdCBzcGVjaWZpZXMgYW55IHByb3BlcnRpZXMgeW91IHdpc2ggdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzLlxuICAgICAqIEFsbCBwcm9wZXJ0aWVzIGhhdmUgZGVmYXVsdCB2YWx1ZXMsIGFuZCBtYW55IGFyZSBwcmUtY2FsY3VsYXRlZCBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIG90aGVyIHByb3BlcnRpZXMuXG4gICAgICogU2VlIHRoZSBwcm9wZXJ0aWVzIHNlY3Rpb24gYmVsb3cgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcmV0dXJuIHtlbmdpbmV9IGVuZ2luZVxuICAgICAqL1xuICAgIEVuZ2luZS5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIHBvc2l0aW9uSXRlcmF0aW9uczogNixcbiAgICAgICAgICAgIHZlbG9jaXR5SXRlcmF0aW9uczogNCxcbiAgICAgICAgICAgIGNvbnN0cmFpbnRJdGVyYXRpb25zOiAyLFxuICAgICAgICAgICAgZW5hYmxlU2xlZXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZXZlbnRzOiBbXSxcbiAgICAgICAgICAgIHBsdWdpbjoge30sXG4gICAgICAgICAgICBncmF2aXR5OiB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAxLFxuICAgICAgICAgICAgICAgIHNjYWxlOiAwLjAwMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpbWluZzoge1xuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogMCxcbiAgICAgICAgICAgICAgICB0aW1lU2NhbGU6IDEsXG4gICAgICAgICAgICAgICAgbGFzdERlbHRhOiAwLFxuICAgICAgICAgICAgICAgIGxhc3RFbGFwc2VkOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGVuZ2luZSA9IENvbW1vbi5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIGVuZ2luZS53b3JsZCA9IG9wdGlvbnMud29ybGQgfHwgQ29tcG9zaXRlLmNyZWF0ZSh7IGxhYmVsOiAnV29ybGQnIH0pO1xuICAgICAgICBlbmdpbmUucGFpcnMgPSBvcHRpb25zLnBhaXJzIHx8IFBhaXJzLmNyZWF0ZSgpO1xuICAgICAgICBlbmdpbmUuZGV0ZWN0b3IgPSBvcHRpb25zLmRldGVjdG9yIHx8IERldGVjdG9yLmNyZWF0ZSgpO1xuXG4gICAgICAgIC8vIGZvciB0ZW1wb3JhcnkgYmFjayBjb21wYXRpYmlsaXR5IG9ubHlcbiAgICAgICAgZW5naW5lLmdyaWQgPSB7IGJ1Y2tldHM6IFtdIH07XG4gICAgICAgIGVuZ2luZS53b3JsZC5ncmF2aXR5ID0gZW5naW5lLmdyYXZpdHk7XG4gICAgICAgIGVuZ2luZS5icm9hZHBoYXNlID0gZW5naW5lLmdyaWQ7XG4gICAgICAgIGVuZ2luZS5tZXRyaWNzID0ge307XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZW5naW5lO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlcyB0aGUgc2ltdWxhdGlvbiBmb3J3YXJkIGluIHRpbWUgYnkgYGRlbHRhYCBtcy5cbiAgICAgKiBUaGUgYGNvcnJlY3Rpb25gIGFyZ3VtZW50IGlzIGFuIG9wdGlvbmFsIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIHRoZSB0aW1lIGNvcnJlY3Rpb24gZmFjdG9yIHRvIGFwcGx5IHRvIHRoZSB1cGRhdGUuXG4gICAgICogVGhpcyBjYW4gaGVscCBpbXByb3ZlIHRoZSBhY2N1cmFjeSBvZiB0aGUgc2ltdWxhdGlvbiBpbiBjYXNlcyB3aGVyZSBgZGVsdGFgIGlzIGNoYW5naW5nIGJldHdlZW4gdXBkYXRlcy5cbiAgICAgKiBUaGUgdmFsdWUgb2YgYGNvcnJlY3Rpb25gIGlzIGRlZmluZWQgYXMgYGRlbHRhIC8gbGFzdERlbHRhYCwgaS5lLiB0aGUgcGVyY2VudGFnZSBjaGFuZ2Ugb2YgYGRlbHRhYCBvdmVyIHRoZSBsYXN0IHN0ZXAuXG4gICAgICogVGhlcmVmb3JlIHRoZSB2YWx1ZSBpcyBhbHdheXMgYDFgIChubyBjb3JyZWN0aW9uKSB3aGVuIGBkZWx0YWAgY29uc3RhbnQgKG9yIHdoZW4gbm8gY29ycmVjdGlvbiBpcyBkZXNpcmVkLCB3aGljaCBpcyB0aGUgZGVmYXVsdCkuXG4gICAgICogU2VlIHRoZSBwYXBlciBvbiA8YSBocmVmPVwiaHR0cDovL2xvbmVzb2NrLm5ldC9hcnRpY2xlL3ZlcmxldC5odG1sXCI+VGltZSBDb3JyZWN0ZWQgVmVybGV0PC9hPiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgKlxuICAgICAqIFRyaWdnZXJzIGBiZWZvcmVVcGRhdGVgIGFuZCBgYWZ0ZXJVcGRhdGVgIGV2ZW50cy5cbiAgICAgKiBUcmlnZ2VycyBgY29sbGlzaW9uU3RhcnRgLCBgY29sbGlzaW9uQWN0aXZlYCBhbmQgYGNvbGxpc2lvbkVuZGAgZXZlbnRzLlxuICAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgICogQHBhcmFtIHtlbmdpbmV9IGVuZ2luZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsdGE9MTYuNjY2XVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbY29ycmVjdGlvbj0xXVxuICAgICAqL1xuICAgIEVuZ2luZS51cGRhdGUgPSBmdW5jdGlvbihlbmdpbmUsIGRlbHRhLCBjb3JyZWN0aW9uKSB7XG4gICAgICAgIHZhciBzdGFydFRpbWUgPSBDb21tb24ubm93KCk7XG5cbiAgICAgICAgZGVsdGEgPSBkZWx0YSB8fCAxMDAwIC8gNjA7XG4gICAgICAgIGNvcnJlY3Rpb24gPSBjb3JyZWN0aW9uIHx8IDE7XG5cbiAgICAgICAgdmFyIHdvcmxkID0gZW5naW5lLndvcmxkLFxuICAgICAgICAgICAgZGV0ZWN0b3IgPSBlbmdpbmUuZGV0ZWN0b3IsXG4gICAgICAgICAgICBwYWlycyA9IGVuZ2luZS5wYWlycyxcbiAgICAgICAgICAgIHRpbWluZyA9IGVuZ2luZS50aW1pbmcsXG4gICAgICAgICAgICB0aW1lc3RhbXAgPSB0aW1pbmcudGltZXN0YW1wLFxuICAgICAgICAgICAgaTtcblxuICAgICAgICAvLyBpbmNyZW1lbnQgdGltZXN0YW1wXG4gICAgICAgIHRpbWluZy50aW1lc3RhbXAgKz0gZGVsdGEgKiB0aW1pbmcudGltZVNjYWxlO1xuICAgICAgICB0aW1pbmcubGFzdERlbHRhID0gZGVsdGEgKiB0aW1pbmcudGltZVNjYWxlO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBhbiBldmVudCBvYmplY3RcbiAgICAgICAgdmFyIGV2ZW50ID0ge1xuICAgICAgICAgICAgdGltZXN0YW1wOiB0aW1pbmcudGltZXN0YW1wXG4gICAgICAgIH07XG5cbiAgICAgICAgRXZlbnRzLnRyaWdnZXIoZW5naW5lLCAnYmVmb3JlVXBkYXRlJywgZXZlbnQpO1xuXG4gICAgICAgIC8vIGdldCBhbGwgYm9kaWVzIGFuZCBhbGwgY29uc3RyYWludHMgaW4gdGhlIHdvcmxkXG4gICAgICAgIHZhciBhbGxCb2RpZXMgPSBDb21wb3NpdGUuYWxsQm9kaWVzKHdvcmxkKSxcbiAgICAgICAgICAgIGFsbENvbnN0cmFpbnRzID0gQ29tcG9zaXRlLmFsbENvbnN0cmFpbnRzKHdvcmxkKTtcblxuICAgICAgICAvLyB1cGRhdGUgdGhlIGRldGVjdG9yIGJvZGllcyBpZiB0aGV5IGhhdmUgY2hhbmdlZFxuICAgICAgICBpZiAod29ybGQuaXNNb2RpZmllZCkge1xuICAgICAgICAgICAgRGV0ZWN0b3Iuc2V0Qm9kaWVzKGRldGVjdG9yLCBhbGxCb2RpZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVzZXQgYWxsIGNvbXBvc2l0ZSBtb2RpZmllZCBmbGFnc1xuICAgICAgICBpZiAod29ybGQuaXNNb2RpZmllZCkge1xuICAgICAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKHdvcmxkLCBmYWxzZSwgZmFsc2UsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlIHNsZWVwaW5nIGlmIGVuYWJsZWRcbiAgICAgICAgaWYgKGVuZ2luZS5lbmFibGVTbGVlcGluZylcbiAgICAgICAgICAgIFNsZWVwaW5nLnVwZGF0ZShhbGxCb2RpZXMsIHRpbWluZy50aW1lU2NhbGUpO1xuXG4gICAgICAgIC8vIGFwcGx5IGdyYXZpdHkgdG8gYWxsIGJvZGllc1xuICAgICAgICBFbmdpbmUuX2JvZGllc0FwcGx5R3Jhdml0eShhbGxCb2RpZXMsIGVuZ2luZS5ncmF2aXR5KTtcblxuICAgICAgICAvLyB1cGRhdGUgYWxsIGJvZHkgcG9zaXRpb24gYW5kIHJvdGF0aW9uIGJ5IGludGVncmF0aW9uXG4gICAgICAgIEVuZ2luZS5fYm9kaWVzVXBkYXRlKGFsbEJvZGllcywgZGVsdGEsIHRpbWluZy50aW1lU2NhbGUsIGNvcnJlY3Rpb24sIHdvcmxkLmJvdW5kcyk7XG5cbiAgICAgICAgLy8gdXBkYXRlIGFsbCBjb25zdHJhaW50cyAoZmlyc3QgcGFzcylcbiAgICAgICAgQ29uc3RyYWludC5wcmVTb2x2ZUFsbChhbGxCb2RpZXMpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZW5naW5lLmNvbnN0cmFpbnRJdGVyYXRpb25zOyBpKyspIHtcbiAgICAgICAgICAgIENvbnN0cmFpbnQuc29sdmVBbGwoYWxsQ29uc3RyYWludHMsIHRpbWluZy50aW1lU2NhbGUpO1xuICAgICAgICB9XG4gICAgICAgIENvbnN0cmFpbnQucG9zdFNvbHZlQWxsKGFsbEJvZGllcyk7XG5cbiAgICAgICAgLy8gZmluZCBhbGwgY29sbGlzaW9uc1xuICAgICAgICBkZXRlY3Rvci5wYWlycyA9IGVuZ2luZS5wYWlycztcbiAgICAgICAgdmFyIGNvbGxpc2lvbnMgPSBEZXRlY3Rvci5jb2xsaXNpb25zKGRldGVjdG9yKTtcblxuICAgICAgICAvLyB1cGRhdGUgY29sbGlzaW9uIHBhaXJzXG4gICAgICAgIFBhaXJzLnVwZGF0ZShwYWlycywgY29sbGlzaW9ucywgdGltZXN0YW1wKTtcblxuICAgICAgICAvLyB3YWtlIHVwIGJvZGllcyBpbnZvbHZlZCBpbiBjb2xsaXNpb25zXG4gICAgICAgIGlmIChlbmdpbmUuZW5hYmxlU2xlZXBpbmcpXG4gICAgICAgICAgICBTbGVlcGluZy5hZnRlckNvbGxpc2lvbnMocGFpcnMubGlzdCwgdGltaW5nLnRpbWVTY2FsZSk7XG5cbiAgICAgICAgLy8gdHJpZ2dlciBjb2xsaXNpb24gZXZlbnRzXG4gICAgICAgIGlmIChwYWlycy5jb2xsaXNpb25TdGFydC5sZW5ndGggPiAwKVxuICAgICAgICAgICAgRXZlbnRzLnRyaWdnZXIoZW5naW5lLCAnY29sbGlzaW9uU3RhcnQnLCB7IHBhaXJzOiBwYWlycy5jb2xsaXNpb25TdGFydCB9KTtcblxuICAgICAgICAvLyBpdGVyYXRpdmVseSByZXNvbHZlIHBvc2l0aW9uIGJldHdlZW4gY29sbGlzaW9uc1xuICAgICAgICBSZXNvbHZlci5wcmVTb2x2ZVBvc2l0aW9uKHBhaXJzLmxpc3QpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZW5naW5lLnBvc2l0aW9uSXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAgICAgICBSZXNvbHZlci5zb2x2ZVBvc2l0aW9uKHBhaXJzLmxpc3QsIHRpbWluZy50aW1lU2NhbGUpO1xuICAgICAgICB9XG4gICAgICAgIFJlc29sdmVyLnBvc3RTb2x2ZVBvc2l0aW9uKGFsbEJvZGllcyk7XG5cbiAgICAgICAgLy8gdXBkYXRlIGFsbCBjb25zdHJhaW50cyAoc2Vjb25kIHBhc3MpXG4gICAgICAgIENvbnN0cmFpbnQucHJlU29sdmVBbGwoYWxsQm9kaWVzKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGVuZ2luZS5jb25zdHJhaW50SXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAgICAgICBDb25zdHJhaW50LnNvbHZlQWxsKGFsbENvbnN0cmFpbnRzLCB0aW1pbmcudGltZVNjYWxlKTtcbiAgICAgICAgfVxuICAgICAgICBDb25zdHJhaW50LnBvc3RTb2x2ZUFsbChhbGxCb2RpZXMpO1xuXG4gICAgICAgIC8vIGl0ZXJhdGl2ZWx5IHJlc29sdmUgdmVsb2NpdHkgYmV0d2VlbiBjb2xsaXNpb25zXG4gICAgICAgIFJlc29sdmVyLnByZVNvbHZlVmVsb2NpdHkocGFpcnMubGlzdCk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBlbmdpbmUudmVsb2NpdHlJdGVyYXRpb25zOyBpKyspIHtcbiAgICAgICAgICAgIFJlc29sdmVyLnNvbHZlVmVsb2NpdHkocGFpcnMubGlzdCwgdGltaW5nLnRpbWVTY2FsZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0cmlnZ2VyIGNvbGxpc2lvbiBldmVudHNcbiAgICAgICAgaWYgKHBhaXJzLmNvbGxpc2lvbkFjdGl2ZS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgRXZlbnRzLnRyaWdnZXIoZW5naW5lLCAnY29sbGlzaW9uQWN0aXZlJywgeyBwYWlyczogcGFpcnMuY29sbGlzaW9uQWN0aXZlIH0pO1xuXG4gICAgICAgIGlmIChwYWlycy5jb2xsaXNpb25FbmQubGVuZ3RoID4gMClcbiAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKGVuZ2luZSwgJ2NvbGxpc2lvbkVuZCcsIHsgcGFpcnM6IHBhaXJzLmNvbGxpc2lvbkVuZCB9KTtcblxuICAgICAgICAvLyBjbGVhciBmb3JjZSBidWZmZXJzXG4gICAgICAgIEVuZ2luZS5fYm9kaWVzQ2xlYXJGb3JjZXMoYWxsQm9kaWVzKTtcblxuICAgICAgICBFdmVudHMudHJpZ2dlcihlbmdpbmUsICdhZnRlclVwZGF0ZScsIGV2ZW50KTtcblxuICAgICAgICAvLyBsb2cgdGhlIHRpbWUgZWxhcHNlZCBjb21wdXRpbmcgdGhpcyB1cGRhdGVcbiAgICAgICAgZW5naW5lLnRpbWluZy5sYXN0RWxhcHNlZCA9IENvbW1vbi5ub3coKSAtIHN0YXJ0VGltZTtcblxuICAgICAgICByZXR1cm4gZW5naW5lO1xuICAgIH07XG4gICAgXG4gICAgLyoqXG4gICAgICogTWVyZ2VzIHR3byBlbmdpbmVzIGJ5IGtlZXBpbmcgdGhlIGNvbmZpZ3VyYXRpb24gb2YgYGVuZ2luZUFgIGJ1dCByZXBsYWNpbmcgdGhlIHdvcmxkIHdpdGggdGhlIG9uZSBmcm9tIGBlbmdpbmVCYC5cbiAgICAgKiBAbWV0aG9kIG1lcmdlXG4gICAgICogQHBhcmFtIHtlbmdpbmV9IGVuZ2luZUFcbiAgICAgKiBAcGFyYW0ge2VuZ2luZX0gZW5naW5lQlxuICAgICAqL1xuICAgIEVuZ2luZS5tZXJnZSA9IGZ1bmN0aW9uKGVuZ2luZUEsIGVuZ2luZUIpIHtcbiAgICAgICAgQ29tbW9uLmV4dGVuZChlbmdpbmVBLCBlbmdpbmVCKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChlbmdpbmVCLndvcmxkKSB7XG4gICAgICAgICAgICBlbmdpbmVBLndvcmxkID0gZW5naW5lQi53b3JsZDtcblxuICAgICAgICAgICAgRW5naW5lLmNsZWFyKGVuZ2luZUEpO1xuXG4gICAgICAgICAgICB2YXIgYm9kaWVzID0gQ29tcG9zaXRlLmFsbEJvZGllcyhlbmdpbmVBLndvcmxkKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXTtcbiAgICAgICAgICAgICAgICBTbGVlcGluZy5zZXQoYm9keSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJvZHkuaWQgPSBDb21tb24ubmV4dElkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBlbmdpbmUgcGFpcnMgYW5kIGRldGVjdG9yLlxuICAgICAqIEBtZXRob2QgY2xlYXJcbiAgICAgKiBAcGFyYW0ge2VuZ2luZX0gZW5naW5lXG4gICAgICovXG4gICAgRW5naW5lLmNsZWFyID0gZnVuY3Rpb24oZW5naW5lKSB7XG4gICAgICAgIFBhaXJzLmNsZWFyKGVuZ2luZS5wYWlycyk7XG4gICAgICAgIERldGVjdG9yLmNsZWFyKGVuZ2luZS5kZXRlY3Rvcik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFplcm9lcyB0aGUgYGJvZHkuZm9yY2VgIGFuZCBgYm9keS50b3JxdWVgIGZvcmNlIGJ1ZmZlcnMuXG4gICAgICogQG1ldGhvZCBfYm9kaWVzQ2xlYXJGb3JjZXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKi9cbiAgICBFbmdpbmUuX2JvZGllc0NsZWFyRm9yY2VzID0gZnVuY3Rpb24oYm9kaWVzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXTtcblxuICAgICAgICAgICAgLy8gcmVzZXQgZm9yY2UgYnVmZmVyc1xuICAgICAgICAgICAgYm9keS5mb3JjZS54ID0gMDtcbiAgICAgICAgICAgIGJvZHkuZm9yY2UueSA9IDA7XG4gICAgICAgICAgICBib2R5LnRvcnF1ZSA9IDA7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXBwbHlzIGEgbWFzcyBkZXBlbmRhbnQgZm9yY2UgdG8gYWxsIGdpdmVuIGJvZGllcy5cbiAgICAgKiBAbWV0aG9kIF9ib2RpZXNBcHBseUdyYXZpdHlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gZ3Jhdml0eVxuICAgICAqL1xuICAgIEVuZ2luZS5fYm9kaWVzQXBwbHlHcmF2aXR5ID0gZnVuY3Rpb24oYm9kaWVzLCBncmF2aXR5KSB7XG4gICAgICAgIHZhciBncmF2aXR5U2NhbGUgPSB0eXBlb2YgZ3Jhdml0eS5zY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBncmF2aXR5LnNjYWxlIDogMC4wMDE7XG5cbiAgICAgICAgaWYgKChncmF2aXR5LnggPT09IDAgJiYgZ3Jhdml0eS55ID09PSAwKSB8fCBncmF2aXR5U2NhbGUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoYm9keS5pc1N0YXRpYyB8fCBib2R5LmlzU2xlZXBpbmcpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIGFwcGx5IGdyYXZpdHlcbiAgICAgICAgICAgIGJvZHkuZm9yY2UueSArPSBib2R5Lm1hc3MgKiBncmF2aXR5LnkgKiBncmF2aXR5U2NhbGU7XG4gICAgICAgICAgICBib2R5LmZvcmNlLnggKz0gYm9keS5tYXNzICogZ3Jhdml0eS54ICogZ3Jhdml0eVNjYWxlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFwcGx5cyBgQm9keS51cGRhdGVgIHRvIGFsbCBnaXZlbiBgYm9kaWVzYC5cbiAgICAgKiBAbWV0aG9kIF9ib2RpZXNVcGRhdGVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVsdGFUaW1lIFxuICAgICAqIFRoZSBhbW91bnQgb2YgdGltZSBlbGFwc2VkIGJldHdlZW4gdXBkYXRlc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU2NhbGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29ycmVjdGlvbiBcbiAgICAgKiBUaGUgVmVybGV0IGNvcnJlY3Rpb24gZmFjdG9yIChkZWx0YVRpbWUgLyBsYXN0RGVsdGFUaW1lKVxuICAgICAqIEBwYXJhbSB7Ym91bmRzfSB3b3JsZEJvdW5kc1xuICAgICAqL1xuICAgIEVuZ2luZS5fYm9kaWVzVXBkYXRlID0gZnVuY3Rpb24oYm9kaWVzLCBkZWx0YVRpbWUsIHRpbWVTY2FsZSwgY29ycmVjdGlvbiwgd29ybGRCb3VuZHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoYm9keS5pc1N0YXRpYyB8fCBib2R5LmlzU2xlZXBpbmcpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIEJvZHkudXBkYXRlKGJvZHksIGRlbHRhVGltZSwgdGltZVNjYWxlLCBjb3JyZWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBIGRlcHJlY2F0ZWQgYWxpYXMgZm9yIGBSdW5uZXIucnVuYCwgdXNlIGBNYXR0ZXIuUnVubmVyLnJ1bihlbmdpbmUpYCBpbnN0ZWFkIGFuZCBzZWUgYE1hdHRlci5SdW5uZXJgIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAqIEBkZXByZWNhdGVkIHVzZSBNYXR0ZXIuUnVubmVyLnJ1bihlbmdpbmUpIGluc3RlYWRcbiAgICAgKiBAbWV0aG9kIHJ1blxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQganVzdCBiZWZvcmUgYW4gdXBkYXRlXG4gICAgKlxuICAgICogQGV2ZW50IGJlZm9yZVVwZGF0ZVxuICAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge2VuZ2luZX0gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYWZ0ZXIgZW5naW5lIHVwZGF0ZSBhbmQgYWxsIGNvbGxpc2lvbiBldmVudHNcbiAgICAqXG4gICAgKiBAZXZlbnQgYWZ0ZXJVcGRhdGVcbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHtlbmdpbmV9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGFmdGVyIGVuZ2luZSB1cGRhdGUsIHByb3ZpZGVzIGEgbGlzdCBvZiBhbGwgcGFpcnMgdGhhdCBoYXZlIHN0YXJ0ZWQgdG8gY29sbGlkZSBpbiB0aGUgY3VycmVudCB0aWNrIChpZiBhbnkpXG4gICAgKlxuICAgICogQGV2ZW50IGNvbGxpc2lvblN0YXJ0XG4gICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge3BhaXJbXX0gZXZlbnQucGFpcnMgTGlzdCBvZiBhZmZlY3RlZCBwYWlyc1xuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge2VuZ2luZX0gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYWZ0ZXIgZW5naW5lIHVwZGF0ZSwgcHJvdmlkZXMgYSBsaXN0IG9mIGFsbCBwYWlycyB0aGF0IGFyZSBjb2xsaWRpbmcgaW4gdGhlIGN1cnJlbnQgdGljayAoaWYgYW55KVxuICAgICpcbiAgICAqIEBldmVudCBjb2xsaXNpb25BY3RpdmVcbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7cGFpcltdfSBldmVudC5wYWlycyBMaXN0IG9mIGFmZmVjdGVkIHBhaXJzXG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7ZW5naW5lfSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCBhZnRlciBlbmdpbmUgdXBkYXRlLCBwcm92aWRlcyBhIGxpc3Qgb2YgYWxsIHBhaXJzIHRoYXQgaGF2ZSBlbmRlZCBjb2xsaXNpb24gaW4gdGhlIGN1cnJlbnQgdGljayAoaWYgYW55KVxuICAgICpcbiAgICAqIEBldmVudCBjb2xsaXNpb25FbmRcbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7cGFpcltdfSBldmVudC5wYWlycyBMaXN0IG9mIGFmZmVjdGVkIHBhaXJzXG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7ZW5naW5lfSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgUHJvcGVydGllcyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlZ2VyIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIHRoZSBudW1iZXIgb2YgcG9zaXRpb24gaXRlcmF0aW9ucyB0byBwZXJmb3JtIGVhY2ggdXBkYXRlLlxuICAgICAqIFRoZSBoaWdoZXIgdGhlIHZhbHVlLCB0aGUgaGlnaGVyIHF1YWxpdHkgdGhlIHNpbXVsYXRpb24gd2lsbCBiZSBhdCB0aGUgZXhwZW5zZSBvZiBwZXJmb3JtYW5jZS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwb3NpdGlvbkl0ZXJhdGlvbnNcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCA2XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlZ2VyIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIHRoZSBudW1iZXIgb2YgdmVsb2NpdHkgaXRlcmF0aW9ucyB0byBwZXJmb3JtIGVhY2ggdXBkYXRlLlxuICAgICAqIFRoZSBoaWdoZXIgdGhlIHZhbHVlLCB0aGUgaGlnaGVyIHF1YWxpdHkgdGhlIHNpbXVsYXRpb24gd2lsbCBiZSBhdCB0aGUgZXhwZW5zZSBvZiBwZXJmb3JtYW5jZS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB2ZWxvY2l0eUl0ZXJhdGlvbnNcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCA0XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlZ2VyIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIHRoZSBudW1iZXIgb2YgY29uc3RyYWludCBpdGVyYXRpb25zIHRvIHBlcmZvcm0gZWFjaCB1cGRhdGUuXG4gICAgICogVGhlIGhpZ2hlciB0aGUgdmFsdWUsIHRoZSBoaWdoZXIgcXVhbGl0eSB0aGUgc2ltdWxhdGlvbiB3aWxsIGJlIGF0IHRoZSBleHBlbnNlIG9mIHBlcmZvcm1hbmNlLlxuICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIG9mIGAyYCBpcyB1c3VhbGx5IHZlcnkgYWRlcXVhdGUuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29uc3RyYWludEl0ZXJhdGlvbnNcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdGhhdCBzcGVjaWZpZXMgd2hldGhlciB0aGUgZW5naW5lIHNob3VsZCBhbGxvdyBzbGVlcGluZyB2aWEgdGhlIGBNYXR0ZXIuU2xlZXBpbmdgIG1vZHVsZS5cbiAgICAgKiBTbGVlcGluZyBjYW4gaW1wcm92ZSBzdGFiaWxpdHkgYW5kIHBlcmZvcm1hbmNlLCBidXQgb2Z0ZW4gYXQgdGhlIGV4cGVuc2Ugb2YgYWNjdXJhY3kuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZW5hYmxlU2xlZXBpbmdcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGBPYmplY3RgIGNvbnRhaW5pbmcgcHJvcGVydGllcyByZWdhcmRpbmcgdGhlIHRpbWluZyBzeXN0ZW1zIG9mIHRoZSBlbmdpbmUuIFxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHRpbWluZ1xuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IHNwZWNpZmllcyB0aGUgZ2xvYmFsIHNjYWxpbmcgZmFjdG9yIG9mIHRpbWUgZm9yIGFsbCBib2RpZXMuXG4gICAgICogQSB2YWx1ZSBvZiBgMGAgZnJlZXplcyB0aGUgc2ltdWxhdGlvbi5cbiAgICAgKiBBIHZhbHVlIG9mIGAwLjFgIGdpdmVzIGEgc2xvdy1tb3Rpb24gZWZmZWN0LlxuICAgICAqIEEgdmFsdWUgb2YgYDEuMmAgZ2l2ZXMgYSBzcGVlZC11cCBlZmZlY3QuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdGltaW5nLnRpbWVTY2FsZVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgdGhlIGN1cnJlbnQgc2ltdWxhdGlvbi10aW1lIGluIG1pbGxpc2Vjb25kcyBzdGFydGluZyBmcm9tIGAwYC4gXG4gICAgICogSXQgaXMgaW5jcmVtZW50ZWQgb24gZXZlcnkgYEVuZ2luZS51cGRhdGVgIGJ5IHRoZSBnaXZlbiBgZGVsdGFgIGFyZ3VtZW50LiBcbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB0aW1pbmcudGltZXN0YW1wXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IHJlcHJlc2VudHMgdGhlIHRvdGFsIGV4ZWN1dGlvbiB0aW1lIGVsYXBzZWQgZHVyaW5nIHRoZSBsYXN0IGBFbmdpbmUudXBkYXRlYCBpbiBtaWxsaXNlY29uZHMuXG4gICAgICogSXQgaXMgdXBkYXRlZCBieSB0aW1pbmcgZnJvbSB0aGUgc3RhcnQgb2YgdGhlIGxhc3QgYEVuZ2luZS51cGRhdGVgIGNhbGwgdW50aWwgaXQgZW5kcy5cbiAgICAgKlxuICAgICAqIFRoaXMgdmFsdWUgd2lsbCBhbHNvIGluY2x1ZGUgdGhlIHRvdGFsIGV4ZWN1dGlvbiB0aW1lIG9mIGFsbCBldmVudCBoYW5kbGVycyBkaXJlY3RseSBvciBpbmRpcmVjdGx5IHRyaWdnZXJlZCBieSB0aGUgZW5naW5lIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB0aW1pbmcubGFzdEVsYXBzZWRcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgcmVwcmVzZW50cyB0aGUgYGRlbHRhYCB2YWx1ZSB1c2VkIGluIHRoZSBsYXN0IGVuZ2luZSB1cGRhdGUuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdGltaW5nLmxhc3REZWx0YVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE1hdHRlci5EZXRlY3RvcmAgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZGV0ZWN0b3JcbiAgICAgKiBAdHlwZSBkZXRlY3RvclxuICAgICAqIEBkZWZhdWx0IGEgTWF0dGVyLkRldGVjdG9yIGluc3RhbmNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBNYXR0ZXIuR3JpZGAgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCByZXBsYWNlZCBieSBgZW5naW5lLmRldGVjdG9yYFxuICAgICAqIEBwcm9wZXJ0eSBncmlkXG4gICAgICogQHR5cGUgZ3JpZFxuICAgICAqIEBkZWZhdWx0IGEgTWF0dGVyLkdyaWQgaW5zdGFuY2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VkIGJ5IGFuZCBub3cgYWxpYXMgZm9yIGBlbmdpbmUuZ3JpZGAuXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCByZXBsYWNlZCBieSBgZW5naW5lLmRldGVjdG9yYFxuICAgICAqIEBwcm9wZXJ0eSBicm9hZHBoYXNlXG4gICAgICogQHR5cGUgZ3JpZFxuICAgICAqIEBkZWZhdWx0IGEgTWF0dGVyLkdyaWQgaW5zdGFuY2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSByb290IGBNYXR0ZXIuQ29tcG9zaXRlYCBpbnN0YW5jZSB0aGF0IHdpbGwgY29udGFpbiBhbGwgYm9kaWVzLCBjb25zdHJhaW50cyBhbmQgb3RoZXIgY29tcG9zaXRlcyB0byBiZSBzaW11bGF0ZWQgYnkgdGhpcyBlbmdpbmUuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgd29ybGRcbiAgICAgKiBAdHlwZSBjb21wb3NpdGVcbiAgICAgKiBAZGVmYXVsdCBhIE1hdHRlci5Db21wb3NpdGUgaW5zdGFuY2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCByZXNlcnZlZCBmb3Igc3RvcmluZyBwbHVnaW4tc3BlY2lmaWMgcHJvcGVydGllcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwbHVnaW5cbiAgICAgKiBAdHlwZSB7fVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGdyYXZpdHkgdG8gYXBwbHkgb24gYWxsIGJvZGllcyBpbiBgZW5naW5lLndvcmxkYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBncmF2aXR5XG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZ3Jhdml0eSB4IGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBncmF2aXR5LnhcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZ3Jhdml0eSB5IGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBncmF2aXR5LnlcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZ3Jhdml0eSBzY2FsZSBmYWN0b3IuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZ3Jhdml0eS5zY2FsZVxuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqIEBkZWZhdWx0IDAuMDAxXG4gICAgICovXG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAxOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuUmVzb2x2ZXJgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciByZXNvbHZpbmcgY29sbGlzaW9uIHBhaXJzLlxuKlxuKiBAY2xhc3MgUmVzb2x2ZXJcbiovXG5cbnZhciBSZXNvbHZlciA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlc29sdmVyO1xuXG52YXIgVmVydGljZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIEJvdW5kcyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIFJlc29sdmVyLl9yZXN0aW5nVGhyZXNoID0gNDtcbiAgICBSZXNvbHZlci5fcmVzdGluZ1RocmVzaFRhbmdlbnQgPSA2O1xuICAgIFJlc29sdmVyLl9wb3NpdGlvbkRhbXBlbiA9IDAuOTtcbiAgICBSZXNvbHZlci5fcG9zaXRpb25XYXJtaW5nID0gMC44O1xuICAgIFJlc29sdmVyLl9mcmljdGlvbk5vcm1hbE11bHRpcGxpZXIgPSA1O1xuXG4gICAgLyoqXG4gICAgICogUHJlcGFyZSBwYWlycyBmb3IgcG9zaXRpb24gc29sdmluZy5cbiAgICAgKiBAbWV0aG9kIHByZVNvbHZlUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge3BhaXJbXX0gcGFpcnNcbiAgICAgKi9cbiAgICBSZXNvbHZlci5wcmVTb2x2ZVBvc2l0aW9uID0gZnVuY3Rpb24ocGFpcnMpIHtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICBwYWlyLFxuICAgICAgICAgICAgYWN0aXZlQ291bnQsXG4gICAgICAgICAgICBwYWlyc0xlbmd0aCA9IHBhaXJzLmxlbmd0aDtcblxuICAgICAgICAvLyBmaW5kIHRvdGFsIGNvbnRhY3RzIG9uIGVhY2ggYm9keVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFpcnNMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFpciA9IHBhaXJzW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXBhaXIuaXNBY3RpdmUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGFjdGl2ZUNvdW50ID0gcGFpci5hY3RpdmVDb250YWN0cy5sZW5ndGg7XG4gICAgICAgICAgICBwYWlyLmNvbGxpc2lvbi5wYXJlbnRBLnRvdGFsQ29udGFjdHMgKz0gYWN0aXZlQ291bnQ7XG4gICAgICAgICAgICBwYWlyLmNvbGxpc2lvbi5wYXJlbnRCLnRvdGFsQ29udGFjdHMgKz0gYWN0aXZlQ291bnQ7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRmluZCBhIHNvbHV0aW9uIGZvciBwYWlyIHBvc2l0aW9ucy5cbiAgICAgKiBAbWV0aG9kIHNvbHZlUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge3BhaXJbXX0gcGFpcnNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVNjYWxlXG4gICAgICovXG4gICAgUmVzb2x2ZXIuc29sdmVQb3NpdGlvbiA9IGZ1bmN0aW9uKHBhaXJzLCB0aW1lU2NhbGUpIHtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICBwYWlyLFxuICAgICAgICAgICAgY29sbGlzaW9uLFxuICAgICAgICAgICAgYm9keUEsXG4gICAgICAgICAgICBib2R5QixcbiAgICAgICAgICAgIG5vcm1hbCxcbiAgICAgICAgICAgIGNvbnRhY3RTaGFyZSxcbiAgICAgICAgICAgIHBvc2l0aW9uSW1wdWxzZSxcbiAgICAgICAgICAgIHBvc2l0aW9uRGFtcGVuID0gUmVzb2x2ZXIuX3Bvc2l0aW9uRGFtcGVuLFxuICAgICAgICAgICAgcGFpcnNMZW5ndGggPSBwYWlycy5sZW5ndGg7XG5cbiAgICAgICAgLy8gZmluZCBpbXB1bHNlcyByZXF1aXJlZCB0byByZXNvbHZlIHBlbmV0cmF0aW9uXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlyc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYWlyID0gcGFpcnNbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghcGFpci5pc0FjdGl2ZSB8fCBwYWlyLmlzU2Vuc29yKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb2xsaXNpb24gPSBwYWlyLmNvbGxpc2lvbjtcbiAgICAgICAgICAgIGJvZHlBID0gY29sbGlzaW9uLnBhcmVudEE7XG4gICAgICAgICAgICBib2R5QiA9IGNvbGxpc2lvbi5wYXJlbnRCO1xuICAgICAgICAgICAgbm9ybWFsID0gY29sbGlzaW9uLm5vcm1hbDtcblxuICAgICAgICAgICAgLy8gZ2V0IGN1cnJlbnQgc2VwYXJhdGlvbiBiZXR3ZWVuIGJvZHkgZWRnZXMgaW52b2x2ZWQgaW4gY29sbGlzaW9uXG4gICAgICAgICAgICBwYWlyLnNlcGFyYXRpb24gPSBcbiAgICAgICAgICAgICAgICBub3JtYWwueCAqIChib2R5Qi5wb3NpdGlvbkltcHVsc2UueCArIGNvbGxpc2lvbi5wZW5ldHJhdGlvbi54IC0gYm9keUEucG9zaXRpb25JbXB1bHNlLngpXG4gICAgICAgICAgICAgICAgKyBub3JtYWwueSAqIChib2R5Qi5wb3NpdGlvbkltcHVsc2UueSArIGNvbGxpc2lvbi5wZW5ldHJhdGlvbi55IC0gYm9keUEucG9zaXRpb25JbXB1bHNlLnkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFpcnNMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFpciA9IHBhaXJzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIXBhaXIuaXNBY3RpdmUgfHwgcGFpci5pc1NlbnNvcilcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29sbGlzaW9uID0gcGFpci5jb2xsaXNpb247XG4gICAgICAgICAgICBib2R5QSA9IGNvbGxpc2lvbi5wYXJlbnRBO1xuICAgICAgICAgICAgYm9keUIgPSBjb2xsaXNpb24ucGFyZW50QjtcbiAgICAgICAgICAgIG5vcm1hbCA9IGNvbGxpc2lvbi5ub3JtYWw7XG4gICAgICAgICAgICBwb3NpdGlvbkltcHVsc2UgPSAocGFpci5zZXBhcmF0aW9uIC0gcGFpci5zbG9wKSAqIHRpbWVTY2FsZTtcblxuICAgICAgICAgICAgaWYgKGJvZHlBLmlzU3RhdGljIHx8IGJvZHlCLmlzU3RhdGljKVxuICAgICAgICAgICAgICAgIHBvc2l0aW9uSW1wdWxzZSAqPSAyO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIShib2R5QS5pc1N0YXRpYyB8fCBib2R5QS5pc1NsZWVwaW5nKSkge1xuICAgICAgICAgICAgICAgIGNvbnRhY3RTaGFyZSA9IHBvc2l0aW9uRGFtcGVuIC8gYm9keUEudG90YWxDb250YWN0cztcbiAgICAgICAgICAgICAgICBib2R5QS5wb3NpdGlvbkltcHVsc2UueCArPSBub3JtYWwueCAqIHBvc2l0aW9uSW1wdWxzZSAqIGNvbnRhY3RTaGFyZTtcbiAgICAgICAgICAgICAgICBib2R5QS5wb3NpdGlvbkltcHVsc2UueSArPSBub3JtYWwueSAqIHBvc2l0aW9uSW1wdWxzZSAqIGNvbnRhY3RTaGFyZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEoYm9keUIuaXNTdGF0aWMgfHwgYm9keUIuaXNTbGVlcGluZykpIHtcbiAgICAgICAgICAgICAgICBjb250YWN0U2hhcmUgPSBwb3NpdGlvbkRhbXBlbiAvIGJvZHlCLnRvdGFsQ29udGFjdHM7XG4gICAgICAgICAgICAgICAgYm9keUIucG9zaXRpb25JbXB1bHNlLnggLT0gbm9ybWFsLnggKiBwb3NpdGlvbkltcHVsc2UgKiBjb250YWN0U2hhcmU7XG4gICAgICAgICAgICAgICAgYm9keUIucG9zaXRpb25JbXB1bHNlLnkgLT0gbm9ybWFsLnkgKiBwb3NpdGlvbkltcHVsc2UgKiBjb250YWN0U2hhcmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXBwbHkgcG9zaXRpb24gcmVzb2x1dGlvbi5cbiAgICAgKiBAbWV0aG9kIHBvc3RTb2x2ZVBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqL1xuICAgIFJlc29sdmVyLnBvc3RTb2x2ZVBvc2l0aW9uID0gZnVuY3Rpb24oYm9kaWVzKSB7XG4gICAgICAgIHZhciBwb3NpdGlvbldhcm1pbmcgPSBSZXNvbHZlci5fcG9zaXRpb25XYXJtaW5nLFxuICAgICAgICAgICAgYm9kaWVzTGVuZ3RoID0gYm9kaWVzLmxlbmd0aCxcbiAgICAgICAgICAgIHZlcnRpY2VzVHJhbnNsYXRlID0gVmVydGljZXMudHJhbnNsYXRlLFxuICAgICAgICAgICAgYm91bmRzVXBkYXRlID0gQm91bmRzLnVwZGF0ZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkltcHVsc2UgPSBib2R5LnBvc2l0aW9uSW1wdWxzZSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkltcHVsc2VYID0gcG9zaXRpb25JbXB1bHNlLngsXG4gICAgICAgICAgICAgICAgcG9zaXRpb25JbXB1bHNlWSA9IHBvc2l0aW9uSW1wdWxzZS55LFxuICAgICAgICAgICAgICAgIHZlbG9jaXR5ID0gYm9keS52ZWxvY2l0eTtcblxuICAgICAgICAgICAgLy8gcmVzZXQgY29udGFjdCBjb3VudFxuICAgICAgICAgICAgYm9keS50b3RhbENvbnRhY3RzID0gMDtcblxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uSW1wdWxzZVggIT09IDAgfHwgcG9zaXRpb25JbXB1bHNlWSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBib2R5IGdlb21ldHJ5XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBib2R5LnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keS5wYXJ0c1tqXTtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljZXNUcmFuc2xhdGUocGFydC52ZXJ0aWNlcywgcG9zaXRpb25JbXB1bHNlKTtcbiAgICAgICAgICAgICAgICAgICAgYm91bmRzVXBkYXRlKHBhcnQuYm91bmRzLCBwYXJ0LnZlcnRpY2VzLCB2ZWxvY2l0eSk7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueCArPSBwb3NpdGlvbkltcHVsc2VYO1xuICAgICAgICAgICAgICAgICAgICBwYXJ0LnBvc2l0aW9uLnkgKz0gcG9zaXRpb25JbXB1bHNlWTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBtb3ZlIHRoZSBib2R5IHdpdGhvdXQgY2hhbmdpbmcgdmVsb2NpdHlcbiAgICAgICAgICAgICAgICBib2R5LnBvc2l0aW9uUHJldi54ICs9IHBvc2l0aW9uSW1wdWxzZVg7XG4gICAgICAgICAgICAgICAgYm9keS5wb3NpdGlvblByZXYueSArPSBwb3NpdGlvbkltcHVsc2VZO1xuXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uSW1wdWxzZVggKiB2ZWxvY2l0eS54ICsgcG9zaXRpb25JbXB1bHNlWSAqIHZlbG9jaXR5LnkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc2V0IGNhY2hlZCBpbXB1bHNlIGlmIHRoZSBib2R5IGhhcyB2ZWxvY2l0eSBhbG9uZyBpdFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkltcHVsc2UueCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uSW1wdWxzZS55ID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyB3YXJtIHRoZSBuZXh0IGl0ZXJhdGlvblxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkltcHVsc2UueCAqPSBwb3NpdGlvbldhcm1pbmc7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uSW1wdWxzZS55ICo9IHBvc2l0aW9uV2FybWluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHJlcGFyZSBwYWlycyBmb3IgdmVsb2NpdHkgc29sdmluZy5cbiAgICAgKiBAbWV0aG9kIHByZVNvbHZlVmVsb2NpdHlcbiAgICAgKiBAcGFyYW0ge3BhaXJbXX0gcGFpcnNcbiAgICAgKi9cbiAgICBSZXNvbHZlci5wcmVTb2x2ZVZlbG9jaXR5ID0gZnVuY3Rpb24ocGFpcnMpIHtcbiAgICAgICAgdmFyIHBhaXJzTGVuZ3RoID0gcGFpcnMubGVuZ3RoLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGo7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFpcnNMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhaXIgPSBwYWlyc1tpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCFwYWlyLmlzQWN0aXZlIHx8IHBhaXIuaXNTZW5zb3IpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBjb250YWN0cyA9IHBhaXIuYWN0aXZlQ29udGFjdHMsXG4gICAgICAgICAgICAgICAgY29udGFjdHNMZW5ndGggPSBjb250YWN0cy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgY29sbGlzaW9uID0gcGFpci5jb2xsaXNpb24sXG4gICAgICAgICAgICAgICAgYm9keUEgPSBjb2xsaXNpb24ucGFyZW50QSxcbiAgICAgICAgICAgICAgICBib2R5QiA9IGNvbGxpc2lvbi5wYXJlbnRCLFxuICAgICAgICAgICAgICAgIG5vcm1hbCA9IGNvbGxpc2lvbi5ub3JtYWwsXG4gICAgICAgICAgICAgICAgdGFuZ2VudCA9IGNvbGxpc2lvbi50YW5nZW50O1xuICAgIFxuICAgICAgICAgICAgLy8gcmVzb2x2ZSBlYWNoIGNvbnRhY3RcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBjb250YWN0c0xlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhY3QgPSBjb250YWN0c1tqXSxcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdFZlcnRleCA9IGNvbnRhY3QudmVydGV4LFxuICAgICAgICAgICAgICAgICAgICBub3JtYWxJbXB1bHNlID0gY29udGFjdC5ub3JtYWxJbXB1bHNlLFxuICAgICAgICAgICAgICAgICAgICB0YW5nZW50SW1wdWxzZSA9IGNvbnRhY3QudGFuZ2VudEltcHVsc2U7XG4gICAgXG4gICAgICAgICAgICAgICAgaWYgKG5vcm1hbEltcHVsc2UgIT09IDAgfHwgdGFuZ2VudEltcHVsc2UgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdG90YWwgaW1wdWxzZSBmcm9tIGNvbnRhY3RcbiAgICAgICAgICAgICAgICAgICAgdmFyIGltcHVsc2VYID0gbm9ybWFsLnggKiBub3JtYWxJbXB1bHNlICsgdGFuZ2VudC54ICogdGFuZ2VudEltcHVsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbXB1bHNlWSA9IG5vcm1hbC55ICogbm9ybWFsSW1wdWxzZSArIHRhbmdlbnQueSAqIHRhbmdlbnRJbXB1bHNlO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gYXBwbHkgaW1wdWxzZSBmcm9tIGNvbnRhY3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoYm9keUEuaXNTdGF0aWMgfHwgYm9keUEuaXNTbGVlcGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uUHJldi54ICs9IGltcHVsc2VYICogYm9keUEuaW52ZXJzZU1hc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5QS5wb3NpdGlvblByZXYueSArPSBpbXB1bHNlWSAqIGJvZHlBLmludmVyc2VNYXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keUEuYW5nbGVQcmV2ICs9IGJvZHlBLmludmVyc2VJbmVydGlhICogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb250YWN0VmVydGV4LnggLSBib2R5QS5wb3NpdGlvbi54KSAqIGltcHVsc2VZXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLSAoY29udGFjdFZlcnRleC55IC0gYm9keUEucG9zaXRpb24ueSkgKiBpbXB1bHNlWFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIShib2R5Qi5pc1N0YXRpYyB8fCBib2R5Qi5pc1NsZWVwaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keUIucG9zaXRpb25QcmV2LnggLT0gaW1wdWxzZVggKiBib2R5Qi5pbnZlcnNlTWFzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlCLnBvc2l0aW9uUHJldi55IC09IGltcHVsc2VZICogYm9keUIuaW52ZXJzZU1hc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5Qi5hbmdsZVByZXYgLT0gYm9keUIuaW52ZXJzZUluZXJ0aWEgKiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbnRhY3RWZXJ0ZXgueCAtIGJvZHlCLnBvc2l0aW9uLngpICogaW1wdWxzZVkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLSAoY29udGFjdFZlcnRleC55IC0gYm9keUIucG9zaXRpb24ueSkgKiBpbXB1bHNlWFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIGEgc29sdXRpb24gZm9yIHBhaXIgdmVsb2NpdGllcy5cbiAgICAgKiBAbWV0aG9kIHNvbHZlVmVsb2NpdHlcbiAgICAgKiBAcGFyYW0ge3BhaXJbXX0gcGFpcnNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVNjYWxlXG4gICAgICovXG4gICAgUmVzb2x2ZXIuc29sdmVWZWxvY2l0eSA9IGZ1bmN0aW9uKHBhaXJzLCB0aW1lU2NhbGUpIHtcbiAgICAgICAgdmFyIHRpbWVTY2FsZVNxdWFyZWQgPSB0aW1lU2NhbGUgKiB0aW1lU2NhbGUsXG4gICAgICAgICAgICByZXN0aW5nVGhyZXNoID0gUmVzb2x2ZXIuX3Jlc3RpbmdUaHJlc2ggKiB0aW1lU2NhbGVTcXVhcmVkLFxuICAgICAgICAgICAgZnJpY3Rpb25Ob3JtYWxNdWx0aXBsaWVyID0gUmVzb2x2ZXIuX2ZyaWN0aW9uTm9ybWFsTXVsdGlwbGllcixcbiAgICAgICAgICAgIHJlc3RpbmdUaHJlc2hUYW5nZW50ID0gUmVzb2x2ZXIuX3Jlc3RpbmdUaHJlc2hUYW5nZW50ICogdGltZVNjYWxlU3F1YXJlZCxcbiAgICAgICAgICAgIE51bWJlck1heFZhbHVlID0gTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIHBhaXJzTGVuZ3RoID0gcGFpcnMubGVuZ3RoLFxuICAgICAgICAgICAgdGFuZ2VudEltcHVsc2UsXG4gICAgICAgICAgICBtYXhGcmljdGlvbixcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlyc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFpciA9IHBhaXJzW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXBhaXIuaXNBY3RpdmUgfHwgcGFpci5pc1NlbnNvcilcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGNvbGxpc2lvbiA9IHBhaXIuY29sbGlzaW9uLFxuICAgICAgICAgICAgICAgIGJvZHlBID0gY29sbGlzaW9uLnBhcmVudEEsXG4gICAgICAgICAgICAgICAgYm9keUIgPSBjb2xsaXNpb24ucGFyZW50QixcbiAgICAgICAgICAgICAgICBib2R5QVZlbG9jaXR5ID0gYm9keUEudmVsb2NpdHksXG4gICAgICAgICAgICAgICAgYm9keUJWZWxvY2l0eSA9IGJvZHlCLnZlbG9jaXR5LFxuICAgICAgICAgICAgICAgIG5vcm1hbFggPSBjb2xsaXNpb24ubm9ybWFsLngsXG4gICAgICAgICAgICAgICAgbm9ybWFsWSA9IGNvbGxpc2lvbi5ub3JtYWwueSxcbiAgICAgICAgICAgICAgICB0YW5nZW50WCA9IGNvbGxpc2lvbi50YW5nZW50LngsXG4gICAgICAgICAgICAgICAgdGFuZ2VudFkgPSBjb2xsaXNpb24udGFuZ2VudC55LFxuICAgICAgICAgICAgICAgIGNvbnRhY3RzID0gcGFpci5hY3RpdmVDb250YWN0cyxcbiAgICAgICAgICAgICAgICBjb250YWN0c0xlbmd0aCA9IGNvbnRhY3RzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBjb250YWN0U2hhcmUgPSAxIC8gY29udGFjdHNMZW5ndGgsXG4gICAgICAgICAgICAgICAgaW52ZXJzZU1hc3NUb3RhbCA9IGJvZHlBLmludmVyc2VNYXNzICsgYm9keUIuaW52ZXJzZU1hc3MsXG4gICAgICAgICAgICAgICAgZnJpY3Rpb24gPSBwYWlyLmZyaWN0aW9uICogcGFpci5mcmljdGlvblN0YXRpYyAqIGZyaWN0aW9uTm9ybWFsTXVsdGlwbGllciAqIHRpbWVTY2FsZVNxdWFyZWQ7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBib2R5IHZlbG9jaXRpZXNcbiAgICAgICAgICAgIGJvZHlBVmVsb2NpdHkueCA9IGJvZHlBLnBvc2l0aW9uLnggLSBib2R5QS5wb3NpdGlvblByZXYueDtcbiAgICAgICAgICAgIGJvZHlBVmVsb2NpdHkueSA9IGJvZHlBLnBvc2l0aW9uLnkgLSBib2R5QS5wb3NpdGlvblByZXYueTtcbiAgICAgICAgICAgIGJvZHlCVmVsb2NpdHkueCA9IGJvZHlCLnBvc2l0aW9uLnggLSBib2R5Qi5wb3NpdGlvblByZXYueDtcbiAgICAgICAgICAgIGJvZHlCVmVsb2NpdHkueSA9IGJvZHlCLnBvc2l0aW9uLnkgLSBib2R5Qi5wb3NpdGlvblByZXYueTtcbiAgICAgICAgICAgIGJvZHlBLmFuZ3VsYXJWZWxvY2l0eSA9IGJvZHlBLmFuZ2xlIC0gYm9keUEuYW5nbGVQcmV2O1xuICAgICAgICAgICAgYm9keUIuYW5ndWxhclZlbG9jaXR5ID0gYm9keUIuYW5nbGUgLSBib2R5Qi5hbmdsZVByZXY7XG5cbiAgICAgICAgICAgIC8vIHJlc29sdmUgZWFjaCBjb250YWN0XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY29udGFjdHNMZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHZhciBjb250YWN0ID0gY29udGFjdHNbal0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3RWZXJ0ZXggPSBjb250YWN0LnZlcnRleDtcblxuICAgICAgICAgICAgICAgIHZhciBvZmZzZXRBWCA9IGNvbnRhY3RWZXJ0ZXgueCAtIGJvZHlBLnBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldEFZID0gY29udGFjdFZlcnRleC55IC0gYm9keUEucG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0QlggPSBjb250YWN0VmVydGV4LnggLSBib2R5Qi5wb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRCWSA9IGNvbnRhY3RWZXJ0ZXgueSAtIGJvZHlCLnBvc2l0aW9uLnk7XG4gXG4gICAgICAgICAgICAgICAgdmFyIHZlbG9jaXR5UG9pbnRBWCA9IGJvZHlBVmVsb2NpdHkueCAtIG9mZnNldEFZICogYm9keUEuYW5ndWxhclZlbG9jaXR5LFxuICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0eVBvaW50QVkgPSBib2R5QVZlbG9jaXR5LnkgKyBvZmZzZXRBWCAqIGJvZHlBLmFuZ3VsYXJWZWxvY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgdmVsb2NpdHlQb2ludEJYID0gYm9keUJWZWxvY2l0eS54IC0gb2Zmc2V0QlkgKiBib2R5Qi5hbmd1bGFyVmVsb2NpdHksXG4gICAgICAgICAgICAgICAgICAgIHZlbG9jaXR5UG9pbnRCWSA9IGJvZHlCVmVsb2NpdHkueSArIG9mZnNldEJYICogYm9keUIuYW5ndWxhclZlbG9jaXR5O1xuXG4gICAgICAgICAgICAgICAgdmFyIHJlbGF0aXZlVmVsb2NpdHlYID0gdmVsb2NpdHlQb2ludEFYIC0gdmVsb2NpdHlQb2ludEJYLFxuICAgICAgICAgICAgICAgICAgICByZWxhdGl2ZVZlbG9jaXR5WSA9IHZlbG9jaXR5UG9pbnRBWSAtIHZlbG9jaXR5UG9pbnRCWTtcblxuICAgICAgICAgICAgICAgIHZhciBub3JtYWxWZWxvY2l0eSA9IG5vcm1hbFggKiByZWxhdGl2ZVZlbG9jaXR5WCArIG5vcm1hbFkgKiByZWxhdGl2ZVZlbG9jaXR5WSxcbiAgICAgICAgICAgICAgICAgICAgdGFuZ2VudFZlbG9jaXR5ID0gdGFuZ2VudFggKiByZWxhdGl2ZVZlbG9jaXR5WCArIHRhbmdlbnRZICogcmVsYXRpdmVWZWxvY2l0eVk7XG5cbiAgICAgICAgICAgICAgICAvLyBjb3Vsb21iIGZyaWN0aW9uXG4gICAgICAgICAgICAgICAgdmFyIG5vcm1hbE92ZXJsYXAgPSBwYWlyLnNlcGFyYXRpb24gKyBub3JtYWxWZWxvY2l0eTtcbiAgICAgICAgICAgICAgICB2YXIgbm9ybWFsRm9yY2UgPSBNYXRoLm1pbihub3JtYWxPdmVybGFwLCAxKTtcbiAgICAgICAgICAgICAgICBub3JtYWxGb3JjZSA9IG5vcm1hbE92ZXJsYXAgPCAwID8gMCA6IG5vcm1hbEZvcmNlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBmcmljdGlvbkxpbWl0ID0gbm9ybWFsRm9yY2UgKiBmcmljdGlvbjtcblxuICAgICAgICAgICAgICAgIGlmICh0YW5nZW50VmVsb2NpdHkgPiBmcmljdGlvbkxpbWl0IHx8IC10YW5nZW50VmVsb2NpdHkgPiBmcmljdGlvbkxpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgIG1heEZyaWN0aW9uID0gdGFuZ2VudFZlbG9jaXR5ID4gMCA/IHRhbmdlbnRWZWxvY2l0eSA6IC10YW5nZW50VmVsb2NpdHk7XG4gICAgICAgICAgICAgICAgICAgIHRhbmdlbnRJbXB1bHNlID0gcGFpci5mcmljdGlvbiAqICh0YW5nZW50VmVsb2NpdHkgPiAwID8gMSA6IC0xKSAqIHRpbWVTY2FsZVNxdWFyZWQ7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAodGFuZ2VudEltcHVsc2UgPCAtbWF4RnJpY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhbmdlbnRJbXB1bHNlID0gLW1heEZyaWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhbmdlbnRJbXB1bHNlID4gbWF4RnJpY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhbmdlbnRJbXB1bHNlID0gbWF4RnJpY3Rpb247XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YW5nZW50SW1wdWxzZSA9IHRhbmdlbnRWZWxvY2l0eTtcbiAgICAgICAgICAgICAgICAgICAgbWF4RnJpY3Rpb24gPSBOdW1iZXJNYXhWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBhY2NvdW50IGZvciBtYXNzLCBpbmVydGlhIGFuZCBjb250YWN0IG9mZnNldFxuICAgICAgICAgICAgICAgIHZhciBvQWNOID0gb2Zmc2V0QVggKiBub3JtYWxZIC0gb2Zmc2V0QVkgKiBub3JtYWxYLFxuICAgICAgICAgICAgICAgICAgICBvQmNOID0gb2Zmc2V0QlggKiBub3JtYWxZIC0gb2Zmc2V0QlkgKiBub3JtYWxYLFxuICAgICAgICAgICAgICAgICAgICBzaGFyZSA9IGNvbnRhY3RTaGFyZSAvIChpbnZlcnNlTWFzc1RvdGFsICsgYm9keUEuaW52ZXJzZUluZXJ0aWEgKiBvQWNOICogb0FjTiArIGJvZHlCLmludmVyc2VJbmVydGlhICogb0JjTiAqIG9CY04pO1xuXG4gICAgICAgICAgICAgICAgLy8gcmF3IGltcHVsc2VzXG4gICAgICAgICAgICAgICAgdmFyIG5vcm1hbEltcHVsc2UgPSAoMSArIHBhaXIucmVzdGl0dXRpb24pICogbm9ybWFsVmVsb2NpdHkgKiBzaGFyZTtcbiAgICAgICAgICAgICAgICB0YW5nZW50SW1wdWxzZSAqPSBzaGFyZTtcblxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBoaWdoIHZlbG9jaXR5IGFuZCByZXN0aW5nIGNvbGxpc2lvbnMgc2VwYXJhdGVseVxuICAgICAgICAgICAgICAgIGlmIChub3JtYWxWZWxvY2l0eSAqIG5vcm1hbFZlbG9jaXR5ID4gcmVzdGluZ1RocmVzaCAmJiBub3JtYWxWZWxvY2l0eSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGlnaCBub3JtYWwgdmVsb2NpdHkgc28gY2xlYXIgY2FjaGVkIGNvbnRhY3Qgbm9ybWFsIGltcHVsc2VcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdC5ub3JtYWxJbXB1bHNlID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBzb2x2ZSByZXN0aW5nIGNvbGxpc2lvbiBjb25zdHJhaW50cyB1c2luZyBFcmluIENhdHRvJ3MgbWV0aG9kIChHREMwOClcbiAgICAgICAgICAgICAgICAgICAgLy8gaW1wdWxzZSBjb25zdHJhaW50IHRlbmRzIHRvIDBcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRhY3ROb3JtYWxJbXB1bHNlID0gY29udGFjdC5ub3JtYWxJbXB1bHNlO1xuICAgICAgICAgICAgICAgICAgICBjb250YWN0Lm5vcm1hbEltcHVsc2UgKz0gbm9ybWFsSW1wdWxzZTtcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdC5ub3JtYWxJbXB1bHNlID0gTWF0aC5taW4oY29udGFjdC5ub3JtYWxJbXB1bHNlLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsSW1wdWxzZSA9IGNvbnRhY3Qubm9ybWFsSW1wdWxzZSAtIGNvbnRhY3ROb3JtYWxJbXB1bHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBoaWdoIHZlbG9jaXR5IGFuZCByZXN0aW5nIGNvbGxpc2lvbnMgc2VwYXJhdGVseVxuICAgICAgICAgICAgICAgIGlmICh0YW5nZW50VmVsb2NpdHkgKiB0YW5nZW50VmVsb2NpdHkgPiByZXN0aW5nVGhyZXNoVGFuZ2VudCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBoaWdoIHRhbmdlbnQgdmVsb2NpdHkgc28gY2xlYXIgY2FjaGVkIGNvbnRhY3QgdGFuZ2VudCBpbXB1bHNlXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3QudGFuZ2VudEltcHVsc2UgPSAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNvbHZlIHJlc3RpbmcgY29sbGlzaW9uIGNvbnN0cmFpbnRzIHVzaW5nIEVyaW4gQ2F0dG8ncyBtZXRob2QgKEdEQzA4KVxuICAgICAgICAgICAgICAgICAgICAvLyB0YW5nZW50IGltcHVsc2UgdGVuZHMgdG8gLXRhbmdlbnRTcGVlZCBvciArdGFuZ2VudFNwZWVkXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250YWN0VGFuZ2VudEltcHVsc2UgPSBjb250YWN0LnRhbmdlbnRJbXB1bHNlO1xuICAgICAgICAgICAgICAgICAgICBjb250YWN0LnRhbmdlbnRJbXB1bHNlICs9IHRhbmdlbnRJbXB1bHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGFjdC50YW5nZW50SW1wdWxzZSA8IC1tYXhGcmljdGlvbikgY29udGFjdC50YW5nZW50SW1wdWxzZSA9IC1tYXhGcmljdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhY3QudGFuZ2VudEltcHVsc2UgPiBtYXhGcmljdGlvbikgY29udGFjdC50YW5nZW50SW1wdWxzZSA9IG1heEZyaWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICB0YW5nZW50SW1wdWxzZSA9IGNvbnRhY3QudGFuZ2VudEltcHVsc2UgLSBjb250YWN0VGFuZ2VudEltcHVsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gdG90YWwgaW1wdWxzZSBmcm9tIGNvbnRhY3RcbiAgICAgICAgICAgICAgICB2YXIgaW1wdWxzZVggPSBub3JtYWxYICogbm9ybWFsSW1wdWxzZSArIHRhbmdlbnRYICogdGFuZ2VudEltcHVsc2UsXG4gICAgICAgICAgICAgICAgICAgIGltcHVsc2VZID0gbm9ybWFsWSAqIG5vcm1hbEltcHVsc2UgKyB0YW5nZW50WSAqIHRhbmdlbnRJbXB1bHNlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIGFwcGx5IGltcHVsc2UgZnJvbSBjb250YWN0XG4gICAgICAgICAgICAgICAgaWYgKCEoYm9keUEuaXNTdGF0aWMgfHwgYm9keUEuaXNTbGVlcGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keUEucG9zaXRpb25QcmV2LnggKz0gaW1wdWxzZVggKiBib2R5QS5pbnZlcnNlTWFzcztcbiAgICAgICAgICAgICAgICAgICAgYm9keUEucG9zaXRpb25QcmV2LnkgKz0gaW1wdWxzZVkgKiBib2R5QS5pbnZlcnNlTWFzcztcbiAgICAgICAgICAgICAgICAgICAgYm9keUEuYW5nbGVQcmV2ICs9IChvZmZzZXRBWCAqIGltcHVsc2VZIC0gb2Zmc2V0QVkgKiBpbXB1bHNlWCkgKiBib2R5QS5pbnZlcnNlSW5lcnRpYTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIShib2R5Qi5pc1N0YXRpYyB8fCBib2R5Qi5pc1NsZWVwaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBib2R5Qi5wb3NpdGlvblByZXYueCAtPSBpbXB1bHNlWCAqIGJvZHlCLmludmVyc2VNYXNzO1xuICAgICAgICAgICAgICAgICAgICBib2R5Qi5wb3NpdGlvblByZXYueSAtPSBpbXB1bHNlWSAqIGJvZHlCLmludmVyc2VNYXNzO1xuICAgICAgICAgICAgICAgICAgICBib2R5Qi5hbmdsZVByZXYgLT0gKG9mZnNldEJYICogaW1wdWxzZVkgLSBvZmZzZXRCWSAqIGltcHVsc2VYKSAqIGJvZHlCLmludmVyc2VJbmVydGlhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAyMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuUGFpcnNgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIGNvbGxpc2lvbiBwYWlyIHNldHMuXG4qXG4qIEBjbGFzcyBQYWlyc1xuKi9cblxudmFyIFBhaXJzID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gUGFpcnM7XG5cbnZhciBQYWlyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHBhaXJzIHN0cnVjdHVyZS5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7cGFpcnN9IEEgbmV3IHBhaXJzIHN0cnVjdHVyZVxuICAgICAqL1xuICAgIFBhaXJzLmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIENvbW1vbi5leHRlbmQoeyBcbiAgICAgICAgICAgIHRhYmxlOiB7fSxcbiAgICAgICAgICAgIGxpc3Q6IFtdLFxuICAgICAgICAgICAgY29sbGlzaW9uU3RhcnQ6IFtdLFxuICAgICAgICAgICAgY29sbGlzaW9uQWN0aXZlOiBbXSxcbiAgICAgICAgICAgIGNvbGxpc2lvbkVuZDogW11cbiAgICAgICAgfSwgb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgcGFpcnMgZ2l2ZW4gYSBsaXN0IG9mIGNvbGxpc2lvbnMuXG4gICAgICogQG1ldGhvZCB1cGRhdGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFpcnNcbiAgICAgKiBAcGFyYW0ge2NvbGxpc2lvbltdfSBjb2xsaXNpb25zXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVzdGFtcFxuICAgICAqL1xuICAgIFBhaXJzLnVwZGF0ZSA9IGZ1bmN0aW9uKHBhaXJzLCBjb2xsaXNpb25zLCB0aW1lc3RhbXApIHtcbiAgICAgICAgdmFyIHBhaXJzTGlzdCA9IHBhaXJzLmxpc3QsXG4gICAgICAgICAgICBwYWlyc0xpc3RMZW5ndGggPSBwYWlyc0xpc3QubGVuZ3RoLFxuICAgICAgICAgICAgcGFpcnNUYWJsZSA9IHBhaXJzLnRhYmxlLFxuICAgICAgICAgICAgY29sbGlzaW9uc0xlbmd0aCA9IGNvbGxpc2lvbnMubGVuZ3RoLFxuICAgICAgICAgICAgY29sbGlzaW9uU3RhcnQgPSBwYWlycy5jb2xsaXNpb25TdGFydCxcbiAgICAgICAgICAgIGNvbGxpc2lvbkVuZCA9IHBhaXJzLmNvbGxpc2lvbkVuZCxcbiAgICAgICAgICAgIGNvbGxpc2lvbkFjdGl2ZSA9IHBhaXJzLmNvbGxpc2lvbkFjdGl2ZSxcbiAgICAgICAgICAgIGNvbGxpc2lvbixcbiAgICAgICAgICAgIHBhaXJJbmRleCxcbiAgICAgICAgICAgIHBhaXIsXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIC8vIGNsZWFyIGNvbGxpc2lvbiBzdGF0ZSBhcnJheXMsIGJ1dCBtYWludGFpbiBvbGQgcmVmZXJlbmNlXG4gICAgICAgIGNvbGxpc2lvblN0YXJ0Lmxlbmd0aCA9IDA7XG4gICAgICAgIGNvbGxpc2lvbkVuZC5sZW5ndGggPSAwO1xuICAgICAgICBjb2xsaXNpb25BY3RpdmUubGVuZ3RoID0gMDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFpcnNMaXN0TGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhaXJzTGlzdFtpXS5jb25maXJtZWRBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb2xsaXNpb25zTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbGxpc2lvbiA9IGNvbGxpc2lvbnNbaV07XG4gICAgICAgICAgICBwYWlyID0gY29sbGlzaW9uLnBhaXI7XG5cbiAgICAgICAgICAgIGlmIChwYWlyKSB7XG4gICAgICAgICAgICAgICAgLy8gcGFpciBhbHJlYWR5IGV4aXN0cyAoYnV0IG1heSBvciBtYXkgbm90IGJlIGFjdGl2ZSlcbiAgICAgICAgICAgICAgICBpZiAocGFpci5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBwYWlyIGV4aXN0cyBhbmQgaXMgYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbkFjdGl2ZS5wdXNoKHBhaXIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhaXIgZXhpc3RzIGJ1dCB3YXMgaW5hY3RpdmUsIHNvIGEgY29sbGlzaW9uIGhhcyBqdXN0IHN0YXJ0ZWQgYWdhaW5cbiAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uU3RhcnQucHVzaChwYWlyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIHBhaXJcbiAgICAgICAgICAgICAgICBQYWlyLnVwZGF0ZShwYWlyLCBjb2xsaXNpb24sIHRpbWVzdGFtcCk7XG4gICAgICAgICAgICAgICAgcGFpci5jb25maXJtZWRBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBwYWlyIGRpZCBub3QgZXhpc3QsIGNyZWF0ZSBhIG5ldyBwYWlyXG4gICAgICAgICAgICAgICAgcGFpciA9IFBhaXIuY3JlYXRlKGNvbGxpc2lvbiwgdGltZXN0YW1wKTtcbiAgICAgICAgICAgICAgICBwYWlyc1RhYmxlW3BhaXIuaWRdID0gcGFpcjtcblxuICAgICAgICAgICAgICAgIC8vIHB1c2ggdGhlIG5ldyBwYWlyXG4gICAgICAgICAgICAgICAgY29sbGlzaW9uU3RhcnQucHVzaChwYWlyKTtcbiAgICAgICAgICAgICAgICBwYWlyc0xpc3QucHVzaChwYWlyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZpbmQgcGFpcnMgdGhhdCBhcmUgbm8gbG9uZ2VyIGFjdGl2ZVxuICAgICAgICB2YXIgcmVtb3ZlUGFpckluZGV4ID0gW107XG4gICAgICAgIHBhaXJzTGlzdExlbmd0aCA9IHBhaXJzTGlzdC5sZW5ndGg7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhaXJzTGlzdExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYWlyID0gcGFpcnNMaXN0W2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXBhaXIuY29uZmlybWVkQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgUGFpci5zZXRBY3RpdmUocGFpciwgZmFsc2UsIHRpbWVzdGFtcCk7XG4gICAgICAgICAgICAgICAgY29sbGlzaW9uRW5kLnB1c2gocGFpcik7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXBhaXIuY29sbGlzaW9uLmJvZHlBLmlzU2xlZXBpbmcgJiYgIXBhaXIuY29sbGlzaW9uLmJvZHlCLmlzU2xlZXBpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUGFpckluZGV4LnB1c2goaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVtb3ZlIGluYWN0aXZlIHBhaXJzXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByZW1vdmVQYWlySW5kZXgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhaXJJbmRleCA9IHJlbW92ZVBhaXJJbmRleFtpXSAtIGk7XG4gICAgICAgICAgICBwYWlyID0gcGFpcnNMaXN0W3BhaXJJbmRleF07XG4gICAgICAgICAgICBwYWlyc0xpc3Quc3BsaWNlKHBhaXJJbmRleCwgMSk7XG4gICAgICAgICAgICBkZWxldGUgcGFpcnNUYWJsZVtwYWlyLmlkXTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGdpdmVuIHBhaXJzIHN0cnVjdHVyZS5cbiAgICAgKiBAbWV0aG9kIGNsZWFyXG4gICAgICogQHBhcmFtIHtwYWlyc30gcGFpcnNcbiAgICAgKiBAcmV0dXJuIHtwYWlyc30gcGFpcnNcbiAgICAgKi9cbiAgICBQYWlycy5jbGVhciA9IGZ1bmN0aW9uKHBhaXJzKSB7XG4gICAgICAgIHBhaXJzLnRhYmxlID0ge307XG4gICAgICAgIHBhaXJzLmxpc3QubGVuZ3RoID0gMDtcbiAgICAgICAgcGFpcnMuY29sbGlzaW9uU3RhcnQubGVuZ3RoID0gMDtcbiAgICAgICAgcGFpcnMuY29sbGlzaW9uQWN0aXZlLmxlbmd0aCA9IDA7XG4gICAgICAgIHBhaXJzLmNvbGxpc2lvbkVuZC5sZW5ndGggPSAwO1xuICAgICAgICByZXR1cm4gcGFpcnM7XG4gICAgfTtcblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDIxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBNYXR0ZXIgPSBtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMjIpO1xyXG5cclxuTWF0dGVyLkF4ZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcclxuTWF0dGVyLkJvZGllcyA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xyXG5NYXR0ZXIuQm9keSA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XHJcbk1hdHRlci5Cb3VuZHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xyXG5NYXR0ZXIuQ29sbGlzaW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcclxuTWF0dGVyLkNvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XHJcbk1hdHRlci5Db21wb3NpdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xyXG5NYXR0ZXIuQ29tcG9zaXRlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpO1xyXG5NYXR0ZXIuQ29uc3RyYWludCA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xyXG5NYXR0ZXIuQ29udGFjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpO1xyXG5NYXR0ZXIuRGV0ZWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcclxuTWF0dGVyLkVuZ2luZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTgpO1xyXG5NYXR0ZXIuRXZlbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcclxuTWF0dGVyLkdyaWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI0KTtcclxuTWF0dGVyLk1vdXNlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XHJcbk1hdHRlci5Nb3VzZUNvbnN0cmFpbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI1KTtcclxuTWF0dGVyLlBhaXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xyXG5NYXR0ZXIuUGFpcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwKTtcclxuTWF0dGVyLlBsdWdpbiA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpO1xyXG5NYXR0ZXIuUXVlcnkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI2KTtcclxuTWF0dGVyLlJlbmRlciA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpO1xyXG5NYXR0ZXIuUmVzb2x2ZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KTtcclxuTWF0dGVyLlJ1bm5lciA9IF9fd2VicGFja19yZXF1aXJlX18oMjcpO1xyXG5NYXR0ZXIuU0FUID0gX193ZWJwYWNrX3JlcXVpcmVfXygyOCk7XHJcbk1hdHRlci5TbGVlcGluZyA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XHJcbk1hdHRlci5TdmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI5KTtcclxuTWF0dGVyLlZlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XHJcbk1hdHRlci5WZXJ0aWNlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XHJcbk1hdHRlci5Xb3JsZCA9IF9fd2VicGFja19yZXF1aXJlX18oMzApO1xyXG5cclxuLy8gdGVtcG9yYXJ5IGJhY2sgY29tcGF0aWJpbGl0eVxyXG5NYXR0ZXIuRW5naW5lLnJ1biA9IE1hdHRlci5SdW5uZXIucnVuO1xyXG5NYXR0ZXIuQ29tbW9uLmRlcHJlY2F0ZWQoTWF0dGVyLkVuZ2luZSwgJ3J1bicsICdFbmdpbmUucnVuIOKepCB1c2UgTWF0dGVyLlJ1bm5lci5ydW4oZW5naW5lKSBpbnN0ZWFkJyk7XHJcblxuXG4vKioqLyB9KSxcbi8qIDIyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxyXG4qIFRoZSBgTWF0dGVyYCBtb2R1bGUgaXMgdGhlIHRvcCBsZXZlbCBuYW1lc3BhY2UuIEl0IGFsc28gaW5jbHVkZXMgYSBmdW5jdGlvbiBmb3IgaW5zdGFsbGluZyBwbHVnaW5zIG9uIHRvcCBvZiB0aGUgbGlicmFyeS5cclxuKlxyXG4qIEBjbGFzcyBNYXR0ZXJcclxuKi9cclxuXHJcbnZhciBNYXR0ZXIgPSB7fTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTWF0dGVyO1xyXG5cclxudmFyIFBsdWdpbiA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpO1xyXG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcclxuXHJcbihmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsaWJyYXJ5IG5hbWUuXHJcbiAgICAgKiBAcHJvcGVydHkgbmFtZVxyXG4gICAgICogQHJlYWRPbmx5XHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBNYXR0ZXIubmFtZSA9ICdtYXR0ZXItanMnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGxpYnJhcnkgdmVyc2lvbi5cclxuICAgICAqIEBwcm9wZXJ0eSB2ZXJzaW9uXHJcbiAgICAgKiBAcmVhZE9ubHlcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIE1hdHRlci52ZXJzaW9uID0gIHRydWUgPyBcIjAuMTguMFwiIDogdW5kZWZpbmVkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBsaXN0IG9mIHBsdWdpbiBkZXBlbmRlbmNpZXMgdG8gYmUgaW5zdGFsbGVkLiBUaGVzZSBhcmUgbm9ybWFsbHkgc2V0IGFuZCBpbnN0YWxsZWQgdGhyb3VnaCBgTWF0dGVyLnVzZWAuXHJcbiAgICAgKiBBbHRlcm5hdGl2ZWx5IHlvdSBtYXkgc2V0IGBNYXR0ZXIudXNlc2AgbWFudWFsbHkgYW5kIGluc3RhbGwgdGhlbSBieSBjYWxsaW5nIGBQbHVnaW4udXNlKE1hdHRlcilgLlxyXG4gICAgICogQHByb3BlcnR5IHVzZXNcclxuICAgICAqIEB0eXBlIHtBcnJheX1cclxuICAgICAqL1xyXG4gICAgTWF0dGVyLnVzZXMgPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBwbHVnaW5zIHRoYXQgaGF2ZSBiZWVuIGluc3RhbGxlZCB0aHJvdWdoIGBNYXR0ZXIuUGx1Z2luLmluc3RhbGxgLiBSZWFkIG9ubHkuXHJcbiAgICAgKiBAcHJvcGVydHkgdXNlZFxyXG4gICAgICogQHJlYWRPbmx5XHJcbiAgICAgKiBAdHlwZSB7QXJyYXl9XHJcbiAgICAgKi9cclxuICAgIE1hdHRlci51c2VkID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnN0YWxscyB0aGUgZ2l2ZW4gcGx1Z2lucyBvbiB0aGUgYE1hdHRlcmAgbmFtZXNwYWNlLlxyXG4gICAgICogVGhpcyBpcyBhIHNob3J0LWhhbmQgZm9yIGBQbHVnaW4udXNlYCwgc2VlIGl0IGZvciBtb3JlIGluZm9ybWF0aW9uLlxyXG4gICAgICogQ2FsbCB0aGlzIGZ1bmN0aW9uIG9uY2UgYXQgdGhlIHN0YXJ0IG9mIHlvdXIgY29kZSwgd2l0aCBhbGwgb2YgdGhlIHBsdWdpbnMgeW91IHdpc2ggdG8gaW5zdGFsbCBhcyBhcmd1bWVudHMuXHJcbiAgICAgKiBBdm9pZCBjYWxsaW5nIHRoaXMgZnVuY3Rpb24gbXVsdGlwbGUgdGltZXMgdW5sZXNzIHlvdSBpbnRlbmQgdG8gbWFudWFsbHkgY29udHJvbCBpbnN0YWxsYXRpb24gb3JkZXIuXHJcbiAgICAgKiBAbWV0aG9kIHVzZVxyXG4gICAgICogQHBhcmFtIC4uLnBsdWdpbiB7RnVuY3Rpb259IFRoZSBwbHVnaW4ocykgdG8gaW5zdGFsbCBvbiBgYmFzZWAgKG11bHRpLWFyZ3VtZW50KS5cclxuICAgICAqL1xyXG4gICAgTWF0dGVyLnVzZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFBsdWdpbi51c2UoTWF0dGVyLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGFpbnMgYSBmdW5jdGlvbiB0byBleGN1dGUgYmVmb3JlIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBvbiB0aGUgZ2l2ZW4gYHBhdGhgIHJlbGF0aXZlIHRvIGBNYXR0ZXJgLlxyXG4gICAgICogU2VlIGFsc28gZG9jcyBmb3IgYENvbW1vbi5jaGFpbmAuXHJcbiAgICAgKiBAbWV0aG9kIGJlZm9yZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggcmVsYXRpdmUgdG8gYE1hdHRlcmBcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoYWluIGJlZm9yZSB0aGUgb3JpZ2luYWxcclxuICAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBUaGUgY2hhaW5lZCBmdW5jdGlvbiB0aGF0IHJlcGxhY2VkIHRoZSBvcmlnaW5hbFxyXG4gICAgICovXHJcbiAgICBNYXR0ZXIuYmVmb3JlID0gZnVuY3Rpb24ocGF0aCwgZnVuYykge1xyXG4gICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL15NYXR0ZXIuLywgJycpO1xyXG4gICAgICAgIHJldHVybiBDb21tb24uY2hhaW5QYXRoQmVmb3JlKE1hdHRlciwgcGF0aCwgZnVuYyk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhaW5zIGEgZnVuY3Rpb24gdG8gZXhjdXRlIGFmdGVyIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBvbiB0aGUgZ2l2ZW4gYHBhdGhgIHJlbGF0aXZlIHRvIGBNYXR0ZXJgLlxyXG4gICAgICogU2VlIGFsc28gZG9jcyBmb3IgYENvbW1vbi5jaGFpbmAuXHJcbiAgICAgKiBAbWV0aG9kIGFmdGVyXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCByZWxhdGl2ZSB0byBgTWF0dGVyYFxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hhaW4gYWZ0ZXIgdGhlIG9yaWdpbmFsXHJcbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gVGhlIGNoYWluZWQgZnVuY3Rpb24gdGhhdCByZXBsYWNlZCB0aGUgb3JpZ2luYWxcclxuICAgICAqL1xyXG4gICAgTWF0dGVyLmFmdGVyID0gZnVuY3Rpb24ocGF0aCwgZnVuYykge1xyXG4gICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL15NYXR0ZXIuLywgJycpO1xyXG4gICAgICAgIHJldHVybiBDb21tb24uY2hhaW5QYXRoQWZ0ZXIoTWF0dGVyLCBwYXRoLCBmdW5jKTtcclxuICAgIH07XHJcblxyXG59KSgpO1xyXG5cblxuLyoqKi8gfSksXG4vKiAyMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuQ29tcG9zaXRlc2AgbW9kdWxlIGNvbnRhaW5zIGZhY3RvcnkgbWV0aG9kcyBmb3IgY3JlYXRpbmcgY29tcG9zaXRlIGJvZGllc1xuKiB3aXRoIGNvbW1vbmx5IHVzZWQgY29uZmlndXJhdGlvbnMgKHN1Y2ggYXMgc3RhY2tzIGFuZCBjaGFpbnMpLlxuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgQ29tcG9zaXRlc1xuKi9cblxudmFyIENvbXBvc2l0ZXMgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb3NpdGVzO1xuXG52YXIgQ29tcG9zaXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcbnZhciBDb25zdHJhaW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBCb2R5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcbnZhciBCb2RpZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcbnZhciBkZXByZWNhdGVkID0gQ29tbW9uLmRlcHJlY2F0ZWQ7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBjb21wb3NpdGUgY29udGFpbmluZyBib2RpZXMgY3JlYXRlZCBpbiB0aGUgY2FsbGJhY2sgaW4gYSBncmlkIGFycmFuZ2VtZW50LlxuICAgICAqIFRoaXMgZnVuY3Rpb24gdXNlcyB0aGUgYm9keSdzIGJvdW5kcyB0byBwcmV2ZW50IG92ZXJsYXBzLlxuICAgICAqIEBtZXRob2Qgc3RhY2tcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geXlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbkdhcFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dHYXBcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gQSBuZXcgY29tcG9zaXRlIGNvbnRhaW5pbmcgb2JqZWN0cyBjcmVhdGVkIGluIHRoZSBjYWxsYmFja1xuICAgICAqL1xuICAgIENvbXBvc2l0ZXMuc3RhY2sgPSBmdW5jdGlvbih4eCwgeXksIGNvbHVtbnMsIHJvd3MsIGNvbHVtbkdhcCwgcm93R2FwLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgc3RhY2sgPSBDb21wb3NpdGUuY3JlYXRlKHsgbGFiZWw6ICdTdGFjaycgfSksXG4gICAgICAgICAgICB4ID0geHgsXG4gICAgICAgICAgICB5ID0geXksXG4gICAgICAgICAgICBsYXN0Qm9keSxcbiAgICAgICAgICAgIGkgPSAwO1xuXG4gICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IHJvd3M7IHJvdysrKSB7XG4gICAgICAgICAgICB2YXIgbWF4SGVpZ2h0ID0gMDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yICh2YXIgY29sdW1uID0gMDsgY29sdW1uIDwgY29sdW1uczsgY29sdW1uKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IGNhbGxiYWNrKHgsIHksIGNvbHVtbiwgcm93LCBsYXN0Qm9keSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChib2R5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBib2R5SGVpZ2h0ID0gYm9keS5ib3VuZHMubWF4LnkgLSBib2R5LmJvdW5kcy5taW4ueSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlXaWR0aCA9IGJvZHkuYm91bmRzLm1heC54IC0gYm9keS5ib3VuZHMubWluLng7IFxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChib2R5SGVpZ2h0ID4gbWF4SGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0ID0gYm9keUhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIEJvZHkudHJhbnNsYXRlKGJvZHksIHsgeDogYm9keVdpZHRoICogMC41LCB5OiBib2R5SGVpZ2h0ICogMC41IH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHggPSBib2R5LmJvdW5kcy5tYXgueCArIGNvbHVtbkdhcDtcblxuICAgICAgICAgICAgICAgICAgICBDb21wb3NpdGUuYWRkQm9keShzdGFjaywgYm9keSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsYXN0Qm9keSA9IGJvZHk7XG4gICAgICAgICAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB4ICs9IGNvbHVtbkdhcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHkgKz0gbWF4SGVpZ2h0ICsgcm93R2FwO1xuICAgICAgICAgICAgeCA9IHh4O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YWNrO1xuICAgIH07XG4gICAgXG4gICAgLyoqXG4gICAgICogQ2hhaW5zIGFsbCBib2RpZXMgaW4gdGhlIGdpdmVuIGNvbXBvc2l0ZSB0b2dldGhlciB1c2luZyBjb25zdHJhaW50cy5cbiAgICAgKiBAbWV0aG9kIGNoYWluXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4T2Zmc2V0QVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5T2Zmc2V0QVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4T2Zmc2V0QlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5T2Zmc2V0QlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBBIG5ldyBjb21wb3NpdGUgY29udGFpbmluZyBvYmplY3RzIGNoYWluZWQgdG9nZXRoZXIgd2l0aCBjb25zdHJhaW50c1xuICAgICAqL1xuICAgIENvbXBvc2l0ZXMuY2hhaW4gPSBmdW5jdGlvbihjb21wb3NpdGUsIHhPZmZzZXRBLCB5T2Zmc2V0QSwgeE9mZnNldEIsIHlPZmZzZXRCLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBib2RpZXMgPSBjb21wb3NpdGUuYm9kaWVzO1xuICAgICAgICBcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5QSA9IGJvZGllc1tpIC0gMV0sXG4gICAgICAgICAgICAgICAgYm9keUIgPSBib2RpZXNbaV0sXG4gICAgICAgICAgICAgICAgYm9keUFIZWlnaHQgPSBib2R5QS5ib3VuZHMubWF4LnkgLSBib2R5QS5ib3VuZHMubWluLnksXG4gICAgICAgICAgICAgICAgYm9keUFXaWR0aCA9IGJvZHlBLmJvdW5kcy5tYXgueCAtIGJvZHlBLmJvdW5kcy5taW4ueCwgXG4gICAgICAgICAgICAgICAgYm9keUJIZWlnaHQgPSBib2R5Qi5ib3VuZHMubWF4LnkgLSBib2R5Qi5ib3VuZHMubWluLnksXG4gICAgICAgICAgICAgICAgYm9keUJXaWR0aCA9IGJvZHlCLmJvdW5kcy5tYXgueCAtIGJvZHlCLmJvdW5kcy5taW4ueDtcbiAgICAgICAgXG4gICAgICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICAgICAgYm9keUE6IGJvZHlBLFxuICAgICAgICAgICAgICAgIHBvaW50QTogeyB4OiBib2R5QVdpZHRoICogeE9mZnNldEEsIHk6IGJvZHlBSGVpZ2h0ICogeU9mZnNldEEgfSxcbiAgICAgICAgICAgICAgICBib2R5QjogYm9keUIsXG4gICAgICAgICAgICAgICAgcG9pbnRCOiB7IHg6IGJvZHlCV2lkdGggKiB4T2Zmc2V0QiwgeTogYm9keUJIZWlnaHQgKiB5T2Zmc2V0QiB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgY29uc3RyYWludCA9IENvbW1vbi5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgICBcbiAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50KGNvbXBvc2l0ZSwgQ29uc3RyYWludC5jcmVhdGUoY29uc3RyYWludCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9zaXRlLmxhYmVsICs9ICcgQ2hhaW4nO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ29ubmVjdHMgYm9kaWVzIGluIHRoZSBjb21wb3NpdGUgd2l0aCBjb25zdHJhaW50cyBpbiBhIGdyaWQgcGF0dGVybiwgd2l0aCBvcHRpb25hbCBjcm9zcyBicmFjZXMuXG4gICAgICogQG1ldGhvZCBtZXNoXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5zXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd3NcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNyb3NzQnJhY2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIGNvbXBvc2l0ZSBjb250YWluaW5nIG9iamVjdHMgbWVzaGVkIHRvZ2V0aGVyIHdpdGggY29uc3RyYWludHNcbiAgICAgKi9cbiAgICBDb21wb3NpdGVzLm1lc2ggPSBmdW5jdGlvbihjb21wb3NpdGUsIGNvbHVtbnMsIHJvd3MsIGNyb3NzQnJhY2UsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGJvZGllcyA9IGNvbXBvc2l0ZS5ib2RpZXMsXG4gICAgICAgICAgICByb3csXG4gICAgICAgICAgICBjb2wsXG4gICAgICAgICAgICBib2R5QSxcbiAgICAgICAgICAgIGJvZHlCLFxuICAgICAgICAgICAgYm9keUM7XG4gICAgICAgIFxuICAgICAgICBmb3IgKHJvdyA9IDA7IHJvdyA8IHJvd3M7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKGNvbCA9IDE7IGNvbCA8IGNvbHVtbnM7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgYm9keUEgPSBib2RpZXNbKGNvbCAtIDEpICsgKHJvdyAqIGNvbHVtbnMpXTtcbiAgICAgICAgICAgICAgICBib2R5QiA9IGJvZGllc1tjb2wgKyAocm93ICogY29sdW1ucyldO1xuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50KGNvbXBvc2l0ZSwgQ29uc3RyYWludC5jcmVhdGUoQ29tbW9uLmV4dGVuZCh7IGJvZHlBOiBib2R5QSwgYm9keUI6IGJvZHlCIH0sIG9wdGlvbnMpKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyb3cgPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb2wgPSAwOyBjb2wgPCBjb2x1bW5zOyBjb2wrKykge1xuICAgICAgICAgICAgICAgICAgICBib2R5QSA9IGJvZGllc1tjb2wgKyAoKHJvdyAtIDEpICogY29sdW1ucyldO1xuICAgICAgICAgICAgICAgICAgICBib2R5QiA9IGJvZGllc1tjb2wgKyAocm93ICogY29sdW1ucyldO1xuICAgICAgICAgICAgICAgICAgICBDb21wb3NpdGUuYWRkQ29uc3RyYWludChjb21wb3NpdGUsIENvbnN0cmFpbnQuY3JlYXRlKENvbW1vbi5leHRlbmQoeyBib2R5QTogYm9keUEsIGJvZHlCOiBib2R5QiB9LCBvcHRpb25zKSkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjcm9zc0JyYWNlICYmIGNvbCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlDID0gYm9kaWVzWyhjb2wgLSAxKSArICgocm93IC0gMSkgKiBjb2x1bW5zKV07XG4gICAgICAgICAgICAgICAgICAgICAgICBDb21wb3NpdGUuYWRkQ29uc3RyYWludChjb21wb3NpdGUsIENvbnN0cmFpbnQuY3JlYXRlKENvbW1vbi5leHRlbmQoeyBib2R5QTogYm9keUMsIGJvZHlCOiBib2R5QiB9LCBvcHRpb25zKSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNyb3NzQnJhY2UgJiYgY29sIDwgY29sdW1ucyAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlDID0gYm9kaWVzWyhjb2wgKyAxKSArICgocm93IC0gMSkgKiBjb2x1bW5zKV07XG4gICAgICAgICAgICAgICAgICAgICAgICBDb21wb3NpdGUuYWRkQ29uc3RyYWludChjb21wb3NpdGUsIENvbnN0cmFpbnQuY3JlYXRlKENvbW1vbi5leHRlbmQoeyBib2R5QTogYm9keUMsIGJvZHlCOiBib2R5QiB9LCBvcHRpb25zKSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9zaXRlLmxhYmVsICs9ICcgTWVzaCc7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG4gICAgXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGNvbXBvc2l0ZSBjb250YWluaW5nIGJvZGllcyBjcmVhdGVkIGluIHRoZSBjYWxsYmFjayBpbiBhIHB5cmFtaWQgYXJyYW5nZW1lbnQuXG4gICAgICogVGhpcyBmdW5jdGlvbiB1c2VzIHRoZSBib2R5J3MgYm91bmRzIHRvIHByZXZlbnQgb3ZlcmxhcHMuXG4gICAgICogQG1ldGhvZCBweXJhbWlkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHh4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHl5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbnNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93c1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5HYXBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93R2FwXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IEEgbmV3IGNvbXBvc2l0ZSBjb250YWluaW5nIG9iamVjdHMgY3JlYXRlZCBpbiB0aGUgY2FsbGJhY2tcbiAgICAgKi9cbiAgICBDb21wb3NpdGVzLnB5cmFtaWQgPSBmdW5jdGlvbih4eCwgeXksIGNvbHVtbnMsIHJvd3MsIGNvbHVtbkdhcCwgcm93R2FwLCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gQ29tcG9zaXRlcy5zdGFjayh4eCwgeXksIGNvbHVtbnMsIHJvd3MsIGNvbHVtbkdhcCwgcm93R2FwLCBmdW5jdGlvbih4LCB5LCBjb2x1bW4sIHJvdywgbGFzdEJvZHksIGkpIHtcbiAgICAgICAgICAgIHZhciBhY3R1YWxSb3dzID0gTWF0aC5taW4ocm93cywgTWF0aC5jZWlsKGNvbHVtbnMgLyAyKSksXG4gICAgICAgICAgICAgICAgbGFzdEJvZHlXaWR0aCA9IGxhc3RCb2R5ID8gbGFzdEJvZHkuYm91bmRzLm1heC54IC0gbGFzdEJvZHkuYm91bmRzLm1pbi54IDogMDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHJvdyA+IGFjdHVhbFJvd3MpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyByZXZlcnNlIHJvdyBvcmRlclxuICAgICAgICAgICAgcm93ID0gYWN0dWFsUm93cyAtIHJvdztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gcm93LFxuICAgICAgICAgICAgICAgIGVuZCA9IGNvbHVtbnMgLSAxIC0gcm93O1xuXG4gICAgICAgICAgICBpZiAoY29sdW1uIDwgc3RhcnQgfHwgY29sdW1uID4gZW5kKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gcmV0cm9hY3RpdmVseSBmaXggdGhlIGZpcnN0IGJvZHkncyBwb3NpdGlvbiwgc2luY2Ugd2lkdGggd2FzIHVua25vd25cbiAgICAgICAgICAgIGlmIChpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgQm9keS50cmFuc2xhdGUobGFzdEJvZHksIHsgeDogKGNvbHVtbiArIChjb2x1bW5zICUgMiA9PT0gMSA/IDEgOiAtMSkpICogbGFzdEJvZHlXaWR0aCwgeTogMCB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHhPZmZzZXQgPSBsYXN0Qm9keSA/IGNvbHVtbiAqIGxhc3RCb2R5V2lkdGggOiAwO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soeHggKyB4T2Zmc2V0ICsgY29sdW1uICogY29sdW1uR2FwLCB5LCBjb2x1bW4sIHJvdywgbGFzdEJvZHksIGkpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBoYXMgbm93IG1vdmVkIHRvIHRoZSBbbmV3dG9uc0NyYWRsZSBleGFtcGxlXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy9ibG9iL21hc3Rlci9leGFtcGxlcy9uZXd0b25zQ3JhZGxlLmpzKSwgZm9sbG93IHRoYXQgaW5zdGVhZCBhcyB0aGlzIGZ1bmN0aW9uIGlzIGRlcHJlY2F0ZWQgaGVyZS5cbiAgICAgKiBAZGVwcmVjYXRlZCBtb3ZlZCB0byBuZXd0b25zQ3JhZGxlIGV4YW1wbGVcbiAgICAgKiBAbWV0aG9kIG5ld3RvbnNDcmFkbGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geXlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBBIG5ldyBjb21wb3NpdGUgbmV3dG9uc0NyYWRsZSBib2R5XG4gICAgICovXG4gICAgQ29tcG9zaXRlcy5uZXd0b25zQ3JhZGxlID0gZnVuY3Rpb24oeHgsIHl5LCBudW1iZXIsIHNpemUsIGxlbmd0aCkge1xuICAgICAgICB2YXIgbmV3dG9uc0NyYWRsZSA9IENvbXBvc2l0ZS5jcmVhdGUoeyBsYWJlbDogJ05ld3RvbnMgQ3JhZGxlJyB9KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlcjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgc2VwYXJhdGlvbiA9IDEuOSxcbiAgICAgICAgICAgICAgICBjaXJjbGUgPSBCb2RpZXMuY2lyY2xlKHh4ICsgaSAqIChzaXplICogc2VwYXJhdGlvbiksIHl5ICsgbGVuZ3RoLCBzaXplLCBcbiAgICAgICAgICAgICAgICAgICAgeyBpbmVydGlhOiBJbmZpbml0eSwgcmVzdGl0dXRpb246IDEsIGZyaWN0aW9uOiAwLCBmcmljdGlvbkFpcjogMC4wMDAxLCBzbG9wOiAxIH0pLFxuICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQgPSBDb25zdHJhaW50LmNyZWF0ZSh7IHBvaW50QTogeyB4OiB4eCArIGkgKiAoc2l6ZSAqIHNlcGFyYXRpb24pLCB5OiB5eSB9LCBib2R5QjogY2lyY2xlIH0pO1xuXG4gICAgICAgICAgICBDb21wb3NpdGUuYWRkQm9keShuZXd0b25zQ3JhZGxlLCBjaXJjbGUpO1xuICAgICAgICAgICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQobmV3dG9uc0NyYWRsZSwgY29uc3RyYWludCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3dG9uc0NyYWRsZTtcbiAgICB9O1xuXG4gICAgZGVwcmVjYXRlZChDb21wb3NpdGVzLCAnbmV3dG9uc0NyYWRsZScsICdDb21wb3NpdGVzLm5ld3RvbnNDcmFkbGUg4p6kIG1vdmVkIHRvIG5ld3RvbnNDcmFkbGUgZXhhbXBsZScpO1xuICAgIFxuICAgIC8qKlxuICAgICAqIFRoaXMgaGFzIG5vdyBtb3ZlZCB0byB0aGUgW2NhciBleGFtcGxlXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy9ibG9iL21hc3Rlci9leGFtcGxlcy9jYXIuanMpLCBmb2xsb3cgdGhhdCBpbnN0ZWFkIGFzIHRoaXMgZnVuY3Rpb24gaXMgZGVwcmVjYXRlZCBoZXJlLlxuICAgICAqIEBkZXByZWNhdGVkIG1vdmVkIHRvIGNhciBleGFtcGxlXG4gICAgICogQG1ldGhvZCBjYXJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geXlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdoZWVsU2l6ZVxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gQSBuZXcgY29tcG9zaXRlIGNhciBib2R5XG4gICAgICovXG4gICAgQ29tcG9zaXRlcy5jYXIgPSBmdW5jdGlvbih4eCwgeXksIHdpZHRoLCBoZWlnaHQsIHdoZWVsU2l6ZSkge1xuICAgICAgICB2YXIgZ3JvdXAgPSBCb2R5Lm5leHRHcm91cCh0cnVlKSxcbiAgICAgICAgICAgIHdoZWVsQmFzZSA9IDIwLFxuICAgICAgICAgICAgd2hlZWxBT2Zmc2V0ID0gLXdpZHRoICogMC41ICsgd2hlZWxCYXNlLFxuICAgICAgICAgICAgd2hlZWxCT2Zmc2V0ID0gd2lkdGggKiAwLjUgLSB3aGVlbEJhc2UsXG4gICAgICAgICAgICB3aGVlbFlPZmZzZXQgPSAwO1xuICAgIFxuICAgICAgICB2YXIgY2FyID0gQ29tcG9zaXRlLmNyZWF0ZSh7IGxhYmVsOiAnQ2FyJyB9KSxcbiAgICAgICAgICAgIGJvZHkgPSBCb2RpZXMucmVjdGFuZ2xlKHh4LCB5eSwgd2lkdGgsIGhlaWdodCwgeyBcbiAgICAgICAgICAgICAgICBjb2xsaXNpb25GaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXA6IGdyb3VwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjaGFtZmVyOiB7XG4gICAgICAgICAgICAgICAgICAgIHJhZGl1czogaGVpZ2h0ICogMC41XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZW5zaXR5OiAwLjAwMDJcbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICB2YXIgd2hlZWxBID0gQm9kaWVzLmNpcmNsZSh4eCArIHdoZWVsQU9mZnNldCwgeXkgKyB3aGVlbFlPZmZzZXQsIHdoZWVsU2l6ZSwgeyBcbiAgICAgICAgICAgIGNvbGxpc2lvbkZpbHRlcjoge1xuICAgICAgICAgICAgICAgIGdyb3VwOiBncm91cFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZyaWN0aW9uOiAwLjhcbiAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB2YXIgd2hlZWxCID0gQm9kaWVzLmNpcmNsZSh4eCArIHdoZWVsQk9mZnNldCwgeXkgKyB3aGVlbFlPZmZzZXQsIHdoZWVsU2l6ZSwgeyBcbiAgICAgICAgICAgIGNvbGxpc2lvbkZpbHRlcjoge1xuICAgICAgICAgICAgICAgIGdyb3VwOiBncm91cFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZyaWN0aW9uOiAwLjhcbiAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB2YXIgYXhlbEEgPSBDb25zdHJhaW50LmNyZWF0ZSh7XG4gICAgICAgICAgICBib2R5QjogYm9keSxcbiAgICAgICAgICAgIHBvaW50QjogeyB4OiB3aGVlbEFPZmZzZXQsIHk6IHdoZWVsWU9mZnNldCB9LFxuICAgICAgICAgICAgYm9keUE6IHdoZWVsQSxcbiAgICAgICAgICAgIHN0aWZmbmVzczogMSxcbiAgICAgICAgICAgIGxlbmd0aDogMFxuICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB2YXIgYXhlbEIgPSBDb25zdHJhaW50LmNyZWF0ZSh7XG4gICAgICAgICAgICBib2R5QjogYm9keSxcbiAgICAgICAgICAgIHBvaW50QjogeyB4OiB3aGVlbEJPZmZzZXQsIHk6IHdoZWVsWU9mZnNldCB9LFxuICAgICAgICAgICAgYm9keUE6IHdoZWVsQixcbiAgICAgICAgICAgIHN0aWZmbmVzczogMSxcbiAgICAgICAgICAgIGxlbmd0aDogMFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIENvbXBvc2l0ZS5hZGRCb2R5KGNhciwgYm9keSk7XG4gICAgICAgIENvbXBvc2l0ZS5hZGRCb2R5KGNhciwgd2hlZWxBKTtcbiAgICAgICAgQ29tcG9zaXRlLmFkZEJvZHkoY2FyLCB3aGVlbEIpO1xuICAgICAgICBDb21wb3NpdGUuYWRkQ29uc3RyYWludChjYXIsIGF4ZWxBKTtcbiAgICAgICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQoY2FyLCBheGVsQik7XG5cbiAgICAgICAgcmV0dXJuIGNhcjtcbiAgICB9O1xuXG4gICAgZGVwcmVjYXRlZChDb21wb3NpdGVzLCAnY2FyJywgJ0NvbXBvc2l0ZXMuY2FyIOKepCBtb3ZlZCB0byBjYXIgZXhhbXBsZScpO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBoYXMgbm93IG1vdmVkIHRvIHRoZSBbc29mdEJvZHkgZXhhbXBsZV0oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvYmxvYi9tYXN0ZXIvZXhhbXBsZXMvc29mdEJvZHkuanMpXG4gICAgICogYW5kIHRoZSBbY2xvdGggZXhhbXBsZV0oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvYmxvYi9tYXN0ZXIvZXhhbXBsZXMvY2xvdGguanMpLCBmb2xsb3cgdGhvc2UgaW5zdGVhZCBhcyB0aGlzIGZ1bmN0aW9uIGlzIGRlcHJlY2F0ZWQgaGVyZS5cbiAgICAgKiBAZGVwcmVjYXRlZCBtb3ZlZCB0byBzb2Z0Qm9keSBhbmQgY2xvdGggZXhhbXBsZXNcbiAgICAgKiBAbWV0aG9kIHNvZnRCb2R5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHh4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHl5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbnNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93c1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5HYXBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93R2FwXG4gICAgICogQHBhcmFtIHtib29sZWFufSBjcm9zc0JyYWNlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBhcnRpY2xlUmFkaXVzXG4gICAgICogQHBhcmFtIHt9IHBhcnRpY2xlT3B0aW9uc1xuICAgICAqIEBwYXJhbSB7fSBjb25zdHJhaW50T3B0aW9uc1xuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gQSBuZXcgY29tcG9zaXRlIHNvZnRCb2R5XG4gICAgICovXG4gICAgQ29tcG9zaXRlcy5zb2Z0Qm9keSA9IGZ1bmN0aW9uKHh4LCB5eSwgY29sdW1ucywgcm93cywgY29sdW1uR2FwLCByb3dHYXAsIGNyb3NzQnJhY2UsIHBhcnRpY2xlUmFkaXVzLCBwYXJ0aWNsZU9wdGlvbnMsIGNvbnN0cmFpbnRPcHRpb25zKSB7XG4gICAgICAgIHBhcnRpY2xlT3B0aW9ucyA9IENvbW1vbi5leHRlbmQoeyBpbmVydGlhOiBJbmZpbml0eSB9LCBwYXJ0aWNsZU9wdGlvbnMpO1xuICAgICAgICBjb25zdHJhaW50T3B0aW9ucyA9IENvbW1vbi5leHRlbmQoeyBzdGlmZm5lc3M6IDAuMiwgcmVuZGVyOiB7IHR5cGU6ICdsaW5lJywgYW5jaG9yczogZmFsc2UgfSB9LCBjb25zdHJhaW50T3B0aW9ucyk7XG5cbiAgICAgICAgdmFyIHNvZnRCb2R5ID0gQ29tcG9zaXRlcy5zdGFjayh4eCwgeXksIGNvbHVtbnMsIHJvd3MsIGNvbHVtbkdhcCwgcm93R2FwLCBmdW5jdGlvbih4LCB5KSB7XG4gICAgICAgICAgICByZXR1cm4gQm9kaWVzLmNpcmNsZSh4LCB5LCBwYXJ0aWNsZVJhZGl1cywgcGFydGljbGVPcHRpb25zKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgQ29tcG9zaXRlcy5tZXNoKHNvZnRCb2R5LCBjb2x1bW5zLCByb3dzLCBjcm9zc0JyYWNlLCBjb25zdHJhaW50T3B0aW9ucyk7XG5cbiAgICAgICAgc29mdEJvZHkubGFiZWwgPSAnU29mdCBCb2R5JztcblxuICAgICAgICByZXR1cm4gc29mdEJvZHk7XG4gICAgfTtcblxuICAgIGRlcHJlY2F0ZWQoQ29tcG9zaXRlcywgJ3NvZnRCb2R5JywgJ0NvbXBvc2l0ZXMuc29mdEJvZHkg4p6kIG1vdmVkIHRvIHNvZnRCb2R5IGFuZCBjbG90aCBleGFtcGxlcycpO1xufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDI0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGlzIG1vZHVsZSBoYXMgbm93IGJlZW4gcmVwbGFjZWQgYnkgYE1hdHRlci5EZXRlY3RvcmAuXG4qXG4qIEFsbCB1c2FnZSBzaG91bGQgYmUgbWlncmF0ZWQgdG8gYE1hdHRlci5EZXRlY3RvcmAgb3IgYW5vdGhlciBhbHRlcm5hdGl2ZS5cbiogRm9yIGJhY2stY29tcGF0aWJpbGl0eSBwdXJwb3NlcyB0aGlzIG1vZHVsZSB3aWxsIHJlbWFpbiBmb3IgYSBzaG9ydCB0ZXJtIGFuZCB0aGVuIGxhdGVyIHJlbW92ZWQgaW4gYSBmdXR1cmUgcmVsZWFzZS5cbipcbiogVGhlIGBNYXR0ZXIuR3JpZGAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgY29sbGlzaW9uIGJyb2FkcGhhc2UgZ3JpZCBzdHJ1Y3R1cmVzLlxuKlxuKiBAY2xhc3MgR3JpZFxuKiBAZGVwcmVjYXRlZFxuKi9cblxudmFyIEdyaWQgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBHcmlkO1xuXG52YXIgUGFpciA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBkZXByZWNhdGVkID0gQ29tbW9uLmRlcHJlY2F0ZWQ7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgZ3JpZC5cbiAgICAgKiBAZGVwcmVjYXRlZCByZXBsYWNlZCBieSBNYXR0ZXIuRGV0ZWN0b3JcbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7Z3JpZH0gQSBuZXcgZ3JpZFxuICAgICAqL1xuICAgIEdyaWQuY3JlYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBidWNrZXRzOiB7fSxcbiAgICAgICAgICAgIHBhaXJzOiB7fSxcbiAgICAgICAgICAgIHBhaXJzTGlzdDogW10sXG4gICAgICAgICAgICBidWNrZXRXaWR0aDogNDgsXG4gICAgICAgICAgICBidWNrZXRIZWlnaHQ6IDQ4XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIENvbW1vbi5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgd2lkdGggb2YgYSBzaW5nbGUgZ3JpZCBidWNrZXQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYnVja2V0V2lkdGhcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCA0OFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiBhIHNpbmdsZSBncmlkIGJ1Y2tldC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBidWNrZXRIZWlnaHRcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCA0OFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgZ3JpZC5cbiAgICAgKiBAZGVwcmVjYXRlZCByZXBsYWNlZCBieSBNYXR0ZXIuRGV0ZWN0b3JcbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVxuICAgICAqIEBwYXJhbSB7Z3JpZH0gZ3JpZFxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge2VuZ2luZX0gZW5naW5lXG4gICAgICogQHBhcmFtIHtib29sZWFufSBmb3JjZVVwZGF0ZVxuICAgICAqL1xuICAgIEdyaWQudXBkYXRlID0gZnVuY3Rpb24oZ3JpZCwgYm9kaWVzLCBlbmdpbmUsIGZvcmNlVXBkYXRlKSB7XG4gICAgICAgIHZhciBpLCBjb2wsIHJvdyxcbiAgICAgICAgICAgIHdvcmxkID0gZW5naW5lLndvcmxkLFxuICAgICAgICAgICAgYnVja2V0cyA9IGdyaWQuYnVja2V0cyxcbiAgICAgICAgICAgIGJ1Y2tldCxcbiAgICAgICAgICAgIGJ1Y2tldElkLFxuICAgICAgICAgICAgZ3JpZENoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXTtcblxuICAgICAgICAgICAgaWYgKGJvZHkuaXNTbGVlcGluZyAmJiAhZm9yY2VVcGRhdGUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIHRlbXBvcmFyeSBiYWNrIGNvbXBhdGliaWxpdHkgYm91bmRzIGNoZWNrXG4gICAgICAgICAgICBpZiAod29ybGQuYm91bmRzICYmIChib2R5LmJvdW5kcy5tYXgueCA8IHdvcmxkLmJvdW5kcy5taW4ueCB8fCBib2R5LmJvdW5kcy5taW4ueCA+IHdvcmxkLmJvdW5kcy5tYXgueFxuICAgICAgICAgICAgICAgIHx8IGJvZHkuYm91bmRzLm1heC55IDwgd29ybGQuYm91bmRzLm1pbi55IHx8IGJvZHkuYm91bmRzLm1pbi55ID4gd29ybGQuYm91bmRzLm1heC55KSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgdmFyIG5ld1JlZ2lvbiA9IEdyaWQuX2dldFJlZ2lvbihncmlkLCBib2R5KTtcblxuICAgICAgICAgICAgLy8gaWYgdGhlIGJvZHkgaGFzIGNoYW5nZWQgZ3JpZCByZWdpb25cbiAgICAgICAgICAgIGlmICghYm9keS5yZWdpb24gfHwgbmV3UmVnaW9uLmlkICE9PSBib2R5LnJlZ2lvbi5pZCB8fCBmb3JjZVVwZGF0ZSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCFib2R5LnJlZ2lvbiB8fCBmb3JjZVVwZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgYm9keS5yZWdpb24gPSBuZXdSZWdpb247XG5cbiAgICAgICAgICAgICAgICB2YXIgdW5pb24gPSBHcmlkLl9yZWdpb25VbmlvbihuZXdSZWdpb24sIGJvZHkucmVnaW9uKTtcblxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBncmlkIGJ1Y2tldHMgYWZmZWN0ZWQgYnkgcmVnaW9uIGNoYW5nZVxuICAgICAgICAgICAgICAgIC8vIGl0ZXJhdGUgb3ZlciB0aGUgdW5pb24gb2YgYm90aCByZWdpb25zXG4gICAgICAgICAgICAgICAgZm9yIChjb2wgPSB1bmlvbi5zdGFydENvbDsgY29sIDw9IHVuaW9uLmVuZENvbDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChyb3cgPSB1bmlvbi5zdGFydFJvdzsgcm93IDw9IHVuaW9uLmVuZFJvdzsgcm93KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1Y2tldElkID0gR3JpZC5fZ2V0QnVja2V0SWQoY29sLCByb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnVja2V0ID0gYnVja2V0c1tidWNrZXRJZF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0luc2lkZU5ld1JlZ2lvbiA9IChjb2wgPj0gbmV3UmVnaW9uLnN0YXJ0Q29sICYmIGNvbCA8PSBuZXdSZWdpb24uZW5kQ29sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiByb3cgPj0gbmV3UmVnaW9uLnN0YXJ0Um93ICYmIHJvdyA8PSBuZXdSZWdpb24uZW5kUm93KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzSW5zaWRlT2xkUmVnaW9uID0gKGNvbCA+PSBib2R5LnJlZ2lvbi5zdGFydENvbCAmJiBjb2wgPD0gYm9keS5yZWdpb24uZW5kQ29sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiByb3cgPj0gYm9keS5yZWdpb24uc3RhcnRSb3cgJiYgcm93IDw9IGJvZHkucmVnaW9uLmVuZFJvdyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBmcm9tIG9sZCByZWdpb24gYnVja2V0c1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0luc2lkZU5ld1JlZ2lvbiAmJiBpc0luc2lkZU9sZFJlZ2lvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0luc2lkZU9sZFJlZ2lvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnVja2V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR3JpZC5fYnVja2V0UmVtb3ZlQm9keShncmlkLCBidWNrZXQsIGJvZHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHRvIG5ldyByZWdpb24gYnVja2V0c1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJvZHkucmVnaW9uID09PSBuZXdSZWdpb24gfHwgKGlzSW5zaWRlTmV3UmVnaW9uICYmICFpc0luc2lkZU9sZFJlZ2lvbikgfHwgZm9yY2VVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJ1Y2tldClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVja2V0ID0gR3JpZC5fY3JlYXRlQnVja2V0KGJ1Y2tldHMsIGJ1Y2tldElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHcmlkLl9idWNrZXRBZGRCb2R5KGdyaWQsIGJ1Y2tldCwgYm9keSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIG5ldyByZWdpb25cbiAgICAgICAgICAgICAgICBib2R5LnJlZ2lvbiA9IG5ld1JlZ2lvbjtcblxuICAgICAgICAgICAgICAgIC8vIGZsYWcgY2hhbmdlcyBzbyB3ZSBjYW4gdXBkYXRlIHBhaXJzXG4gICAgICAgICAgICAgICAgZ3JpZENoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlIHBhaXJzIGxpc3Qgb25seSBpZiBwYWlycyBjaGFuZ2VkIChpLmUuIGEgYm9keSBjaGFuZ2VkIHJlZ2lvbilcbiAgICAgICAgaWYgKGdyaWRDaGFuZ2VkKVxuICAgICAgICAgICAgZ3JpZC5wYWlyc0xpc3QgPSBHcmlkLl9jcmVhdGVBY3RpdmVQYWlyc0xpc3QoZ3JpZCk7XG4gICAgfTtcblxuICAgIGRlcHJlY2F0ZWQoR3JpZCwgJ3VwZGF0ZScsICdHcmlkLnVwZGF0ZSDinqQgcmVwbGFjZWQgYnkgTWF0dGVyLkRldGVjdG9yJyk7XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGdyaWQuXG4gICAgICogQGRlcHJlY2F0ZWQgcmVwbGFjZWQgYnkgTWF0dGVyLkRldGVjdG9yXG4gICAgICogQG1ldGhvZCBjbGVhclxuICAgICAqIEBwYXJhbSB7Z3JpZH0gZ3JpZFxuICAgICAqL1xuICAgIEdyaWQuY2xlYXIgPSBmdW5jdGlvbihncmlkKSB7XG4gICAgICAgIGdyaWQuYnVja2V0cyA9IHt9O1xuICAgICAgICBncmlkLnBhaXJzID0ge307XG4gICAgICAgIGdyaWQucGFpcnNMaXN0ID0gW107XG4gICAgfTtcblxuICAgIGRlcHJlY2F0ZWQoR3JpZCwgJ2NsZWFyJywgJ0dyaWQuY2xlYXIg4p6kIHJlcGxhY2VkIGJ5IE1hdHRlci5EZXRlY3RvcicpO1xuXG4gICAgLyoqXG4gICAgICogRmluZHMgdGhlIHVuaW9uIG9mIHR3byByZWdpb25zLlxuICAgICAqIEBtZXRob2QgX3JlZ2lvblVuaW9uXG4gICAgICogQGRlcHJlY2F0ZWQgcmVwbGFjZWQgYnkgTWF0dGVyLkRldGVjdG9yXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gcmVnaW9uQVxuICAgICAqIEBwYXJhbSB7fSByZWdpb25CXG4gICAgICogQHJldHVybiB7fSByZWdpb25cbiAgICAgKi9cbiAgICBHcmlkLl9yZWdpb25VbmlvbiA9IGZ1bmN0aW9uKHJlZ2lvbkEsIHJlZ2lvbkIpIHtcbiAgICAgICAgdmFyIHN0YXJ0Q29sID0gTWF0aC5taW4ocmVnaW9uQS5zdGFydENvbCwgcmVnaW9uQi5zdGFydENvbCksXG4gICAgICAgICAgICBlbmRDb2wgPSBNYXRoLm1heChyZWdpb25BLmVuZENvbCwgcmVnaW9uQi5lbmRDb2wpLFxuICAgICAgICAgICAgc3RhcnRSb3cgPSBNYXRoLm1pbihyZWdpb25BLnN0YXJ0Um93LCByZWdpb25CLnN0YXJ0Um93KSxcbiAgICAgICAgICAgIGVuZFJvdyA9IE1hdGgubWF4KHJlZ2lvbkEuZW5kUm93LCByZWdpb25CLmVuZFJvdyk7XG5cbiAgICAgICAgcmV0dXJuIEdyaWQuX2NyZWF0ZVJlZ2lvbihzdGFydENvbCwgZW5kQ29sLCBzdGFydFJvdywgZW5kUm93KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcmVnaW9uIGEgZ2l2ZW4gYm9keSBmYWxscyBpbiBmb3IgYSBnaXZlbiBncmlkLlxuICAgICAqIEBtZXRob2QgX2dldFJlZ2lvblxuICAgICAqIEBkZXByZWNhdGVkIHJlcGxhY2VkIGJ5IE1hdHRlci5EZXRlY3RvclxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHt9IGdyaWRcbiAgICAgKiBAcGFyYW0ge30gYm9keVxuICAgICAqIEByZXR1cm4ge30gcmVnaW9uXG4gICAgICovXG4gICAgR3JpZC5fZ2V0UmVnaW9uID0gZnVuY3Rpb24oZ3JpZCwgYm9keSkge1xuICAgICAgICB2YXIgYm91bmRzID0gYm9keS5ib3VuZHMsXG4gICAgICAgICAgICBzdGFydENvbCA9IE1hdGguZmxvb3IoYm91bmRzLm1pbi54IC8gZ3JpZC5idWNrZXRXaWR0aCksXG4gICAgICAgICAgICBlbmRDb2wgPSBNYXRoLmZsb29yKGJvdW5kcy5tYXgueCAvIGdyaWQuYnVja2V0V2lkdGgpLFxuICAgICAgICAgICAgc3RhcnRSb3cgPSBNYXRoLmZsb29yKGJvdW5kcy5taW4ueSAvIGdyaWQuYnVja2V0SGVpZ2h0KSxcbiAgICAgICAgICAgIGVuZFJvdyA9IE1hdGguZmxvb3IoYm91bmRzLm1heC55IC8gZ3JpZC5idWNrZXRIZWlnaHQpO1xuXG4gICAgICAgIHJldHVybiBHcmlkLl9jcmVhdGVSZWdpb24oc3RhcnRDb2wsIGVuZENvbCwgc3RhcnRSb3csIGVuZFJvdyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSByZWdpb24uXG4gICAgICogQG1ldGhvZCBfY3JlYXRlUmVnaW9uXG4gICAgICogQGRlcHJlY2F0ZWQgcmVwbGFjZWQgYnkgTWF0dGVyLkRldGVjdG9yXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gc3RhcnRDb2xcbiAgICAgKiBAcGFyYW0ge30gZW5kQ29sXG4gICAgICogQHBhcmFtIHt9IHN0YXJ0Um93XG4gICAgICogQHBhcmFtIHt9IGVuZFJvd1xuICAgICAqIEByZXR1cm4ge30gcmVnaW9uXG4gICAgICovXG4gICAgR3JpZC5fY3JlYXRlUmVnaW9uID0gZnVuY3Rpb24oc3RhcnRDb2wsIGVuZENvbCwgc3RhcnRSb3csIGVuZFJvdykge1xuICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgIGlkOiBzdGFydENvbCArICcsJyArIGVuZENvbCArICcsJyArIHN0YXJ0Um93ICsgJywnICsgZW5kUm93LFxuICAgICAgICAgICAgc3RhcnRDb2w6IHN0YXJ0Q29sLCBcbiAgICAgICAgICAgIGVuZENvbDogZW5kQ29sLCBcbiAgICAgICAgICAgIHN0YXJ0Um93OiBzdGFydFJvdywgXG4gICAgICAgICAgICBlbmRSb3c6IGVuZFJvdyBcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYnVja2V0IGlkIGF0IHRoZSBnaXZlbiBwb3NpdGlvbi5cbiAgICAgKiBAbWV0aG9kIF9nZXRCdWNrZXRJZFxuICAgICAqIEBkZXByZWNhdGVkIHJlcGxhY2VkIGJ5IE1hdHRlci5EZXRlY3RvclxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHt9IGNvbHVtblxuICAgICAqIEBwYXJhbSB7fSByb3dcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IGJ1Y2tldCBpZFxuICAgICAqL1xuICAgIEdyaWQuX2dldEJ1Y2tldElkID0gZnVuY3Rpb24oY29sdW1uLCByb3cpIHtcbiAgICAgICAgcmV0dXJuICdDJyArIGNvbHVtbiArICdSJyArIHJvdztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGJ1Y2tldC5cbiAgICAgKiBAbWV0aG9kIF9jcmVhdGVCdWNrZXRcbiAgICAgKiBAZGVwcmVjYXRlZCByZXBsYWNlZCBieSBNYXR0ZXIuRGV0ZWN0b3JcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSBidWNrZXRzXG4gICAgICogQHBhcmFtIHt9IGJ1Y2tldElkXG4gICAgICogQHJldHVybiB7fSBidWNrZXRcbiAgICAgKi9cbiAgICBHcmlkLl9jcmVhdGVCdWNrZXQgPSBmdW5jdGlvbihidWNrZXRzLCBidWNrZXRJZCkge1xuICAgICAgICB2YXIgYnVja2V0ID0gYnVja2V0c1tidWNrZXRJZF0gPSBbXTtcbiAgICAgICAgcmV0dXJuIGJ1Y2tldDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIGJvZHkgdG8gYSBidWNrZXQuXG4gICAgICogQG1ldGhvZCBfYnVja2V0QWRkQm9keVxuICAgICAqIEBkZXByZWNhdGVkIHJlcGxhY2VkIGJ5IE1hdHRlci5EZXRlY3RvclxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHt9IGdyaWRcbiAgICAgKiBAcGFyYW0ge30gYnVja2V0XG4gICAgICogQHBhcmFtIHt9IGJvZHlcbiAgICAgKi9cbiAgICBHcmlkLl9idWNrZXRBZGRCb2R5ID0gZnVuY3Rpb24oZ3JpZCwgYnVja2V0LCBib2R5KSB7XG4gICAgICAgIHZhciBncmlkUGFpcnMgPSBncmlkLnBhaXJzLFxuICAgICAgICAgICAgcGFpcklkID0gUGFpci5pZCxcbiAgICAgICAgICAgIGJ1Y2tldExlbmd0aCA9IGJ1Y2tldC5sZW5ndGgsXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIC8vIGFkZCBuZXcgcGFpcnNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJ1Y2tldExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keUIgPSBidWNrZXRbaV07XG5cbiAgICAgICAgICAgIGlmIChib2R5LmlkID09PSBib2R5Qi5pZCB8fCAoYm9keS5pc1N0YXRpYyAmJiBib2R5Qi5pc1N0YXRpYykpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIGtlZXAgdHJhY2sgb2YgdGhlIG51bWJlciBvZiBidWNrZXRzIHRoZSBwYWlyIGV4aXN0cyBpblxuICAgICAgICAgICAgLy8gaW1wb3J0YW50IGZvciBHcmlkLnVwZGF0ZSB0byB3b3JrXG4gICAgICAgICAgICB2YXIgaWQgPSBwYWlySWQoYm9keSwgYm9keUIpLFxuICAgICAgICAgICAgICAgIHBhaXIgPSBncmlkUGFpcnNbaWRdO1xuXG4gICAgICAgICAgICBpZiAocGFpcikge1xuICAgICAgICAgICAgICAgIHBhaXJbMl0gKz0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZ3JpZFBhaXJzW2lkXSA9IFtib2R5LCBib2R5QiwgMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgdG8gYm9kaWVzIChhZnRlciBwYWlycywgb3RoZXJ3aXNlIHBhaXJzIHdpdGggc2VsZilcbiAgICAgICAgYnVja2V0LnB1c2goYm9keSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBib2R5IGZyb20gYSBidWNrZXQuXG4gICAgICogQG1ldGhvZCBfYnVja2V0UmVtb3ZlQm9keVxuICAgICAqIEBkZXByZWNhdGVkIHJlcGxhY2VkIGJ5IE1hdHRlci5EZXRlY3RvclxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHt9IGdyaWRcbiAgICAgKiBAcGFyYW0ge30gYnVja2V0XG4gICAgICogQHBhcmFtIHt9IGJvZHlcbiAgICAgKi9cbiAgICBHcmlkLl9idWNrZXRSZW1vdmVCb2R5ID0gZnVuY3Rpb24oZ3JpZCwgYnVja2V0LCBib2R5KSB7XG4gICAgICAgIHZhciBncmlkUGFpcnMgPSBncmlkLnBhaXJzLFxuICAgICAgICAgICAgcGFpcklkID0gUGFpci5pZCxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIGZyb20gYnVja2V0XG4gICAgICAgIGJ1Y2tldC5zcGxpY2UoQ29tbW9uLmluZGV4T2YoYnVja2V0LCBib2R5KSwgMSk7XG5cbiAgICAgICAgdmFyIGJ1Y2tldExlbmd0aCA9IGJ1Y2tldC5sZW5ndGg7XG5cbiAgICAgICAgLy8gdXBkYXRlIHBhaXIgY291bnRzXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBidWNrZXRMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8ga2VlcCB0cmFjayBvZiB0aGUgbnVtYmVyIG9mIGJ1Y2tldHMgdGhlIHBhaXIgZXhpc3RzIGluXG4gICAgICAgICAgICAvLyBpbXBvcnRhbnQgZm9yIF9jcmVhdGVBY3RpdmVQYWlyc0xpc3QgdG8gd29ya1xuICAgICAgICAgICAgdmFyIHBhaXIgPSBncmlkUGFpcnNbcGFpcklkKGJvZHksIGJ1Y2tldFtpXSldO1xuXG4gICAgICAgICAgICBpZiAocGFpcilcbiAgICAgICAgICAgICAgICBwYWlyWzJdIC09IDE7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgbGlzdCBvZiB0aGUgYWN0aXZlIHBhaXJzIGluIHRoZSBncmlkLlxuICAgICAqIEBtZXRob2QgX2NyZWF0ZUFjdGl2ZVBhaXJzTGlzdFxuICAgICAqIEBkZXByZWNhdGVkIHJlcGxhY2VkIGJ5IE1hdHRlci5EZXRlY3RvclxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHt9IGdyaWRcbiAgICAgKiBAcmV0dXJuIFtdIHBhaXJzXG4gICAgICovXG4gICAgR3JpZC5fY3JlYXRlQWN0aXZlUGFpcnNMaXN0ID0gZnVuY3Rpb24oZ3JpZCkge1xuICAgICAgICB2YXIgcGFpcixcbiAgICAgICAgICAgIGdyaWRQYWlycyA9IGdyaWQucGFpcnMsXG4gICAgICAgICAgICBwYWlyS2V5cyA9IENvbW1vbi5rZXlzKGdyaWRQYWlycyksXG4gICAgICAgICAgICBwYWlyS2V5c0xlbmd0aCA9IHBhaXJLZXlzLmxlbmd0aCxcbiAgICAgICAgICAgIHBhaXJzID0gW10sXG4gICAgICAgICAgICBrO1xuXG4gICAgICAgIC8vIGl0ZXJhdGUgb3ZlciBncmlkLnBhaXJzXG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBwYWlyS2V5c0xlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICBwYWlyID0gZ3JpZFBhaXJzW3BhaXJLZXlzW2tdXTtcblxuICAgICAgICAgICAgLy8gaWYgcGFpciBleGlzdHMgaW4gYXQgbGVhc3Qgb25lIGJ1Y2tldFxuICAgICAgICAgICAgLy8gaXQgaXMgYSBwYWlyIHRoYXQgbmVlZHMgZnVydGhlciBjb2xsaXNpb24gdGVzdGluZyBzbyBwdXNoIGl0XG4gICAgICAgICAgICBpZiAocGFpclsyXSA+IDApIHtcbiAgICAgICAgICAgICAgICBwYWlycy5wdXNoKHBhaXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgZ3JpZFBhaXJzW3BhaXJLZXlzW2tdXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYWlycztcbiAgICB9O1xuICAgIFxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDI1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5Nb3VzZUNvbnN0cmFpbnRgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBtb3VzZSBjb25zdHJhaW50cy5cbiogTW91c2UgY29uc3RyYWludHMgYXJlIHVzZWQgZm9yIGFsbG93aW5nIHVzZXIgaW50ZXJhY3Rpb24sIHByb3ZpZGluZyB0aGUgYWJpbGl0eSB0byBtb3ZlIGJvZGllcyB2aWEgdGhlIG1vdXNlIG9yIHRvdWNoLlxuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgTW91c2VDb25zdHJhaW50XG4qL1xuXG52YXIgTW91c2VDb25zdHJhaW50ID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gTW91c2VDb25zdHJhaW50O1xuXG52YXIgVmVydGljZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIFNsZWVwaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcbnZhciBNb3VzZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpO1xudmFyIEV2ZW50cyA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG52YXIgRGV0ZWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcbnZhciBDb25zdHJhaW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG52YXIgQ29tcG9zaXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xudmFyIEJvdW5kcyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgbW91c2UgY29uc3RyYWludC5cbiAgICAgKiBBbGwgcHJvcGVydGllcyBoYXZlIGRlZmF1bHQgdmFsdWVzLCBhbmQgbWFueSBhcmUgcHJlLWNhbGN1bGF0ZWQgYXV0b21hdGljYWxseSBiYXNlZCBvbiBvdGhlciBwcm9wZXJ0aWVzLlxuICAgICAqIFNlZSB0aGUgcHJvcGVydGllcyBzZWN0aW9uIGJlbG93IGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge2VuZ2luZX0gZW5naW5lXG4gICAgICogQHBhcmFtIHt9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtNb3VzZUNvbnN0cmFpbnR9IEEgbmV3IE1vdXNlQ29uc3RyYWludFxuICAgICAqL1xuICAgIE1vdXNlQ29uc3RyYWludC5jcmVhdGUgPSBmdW5jdGlvbihlbmdpbmUsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIG1vdXNlID0gKGVuZ2luZSA/IGVuZ2luZS5tb3VzZSA6IG51bGwpIHx8IChvcHRpb25zID8gb3B0aW9ucy5tb3VzZSA6IG51bGwpO1xuXG4gICAgICAgIGlmICghbW91c2UpIHtcbiAgICAgICAgICAgIGlmIChlbmdpbmUgJiYgZW5naW5lLnJlbmRlciAmJiBlbmdpbmUucmVuZGVyLmNhbnZhcykge1xuICAgICAgICAgICAgICAgIG1vdXNlID0gTW91c2UuY3JlYXRlKGVuZ2luZS5yZW5kZXIuY2FudmFzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBtb3VzZSA9IE1vdXNlLmNyZWF0ZShvcHRpb25zLmVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb3VzZSA9IE1vdXNlLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgIENvbW1vbi53YXJuKCdNb3VzZUNvbnN0cmFpbnQuY3JlYXRlOiBvcHRpb25zLm1vdXNlIHdhcyB1bmRlZmluZWQsIG9wdGlvbnMuZWxlbWVudCB3YXMgdW5kZWZpbmVkLCBtYXkgbm90IGZ1bmN0aW9uIGFzIGV4cGVjdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29uc3RyYWludCA9IENvbnN0cmFpbnQuY3JlYXRlKHsgXG4gICAgICAgICAgICBsYWJlbDogJ01vdXNlIENvbnN0cmFpbnQnLFxuICAgICAgICAgICAgcG9pbnRBOiBtb3VzZS5wb3NpdGlvbixcbiAgICAgICAgICAgIHBvaW50QjogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICBsZW5ndGg6IDAuMDEsIFxuICAgICAgICAgICAgc3RpZmZuZXNzOiAwLjEsXG4gICAgICAgICAgICBhbmd1bGFyU3RpZmZuZXNzOiAxLFxuICAgICAgICAgICAgcmVuZGVyOiB7XG4gICAgICAgICAgICAgICAgc3Ryb2tlU3R5bGU6ICcjOTBFRTkwJyxcbiAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgdHlwZTogJ21vdXNlQ29uc3RyYWludCcsXG4gICAgICAgICAgICBtb3VzZTogbW91c2UsXG4gICAgICAgICAgICBlbGVtZW50OiBudWxsLFxuICAgICAgICAgICAgYm9keTogbnVsbCxcbiAgICAgICAgICAgIGNvbnN0cmFpbnQ6IGNvbnN0cmFpbnQsXG4gICAgICAgICAgICBjb2xsaXNpb25GaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogMHgwMDAxLFxuICAgICAgICAgICAgICAgIG1hc2s6IDB4RkZGRkZGRkYsXG4gICAgICAgICAgICAgICAgZ3JvdXA6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgbW91c2VDb25zdHJhaW50ID0gQ29tbW9uLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgRXZlbnRzLm9uKGVuZ2luZSwgJ2JlZm9yZVVwZGF0ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGFsbEJvZGllcyA9IENvbXBvc2l0ZS5hbGxCb2RpZXMoZW5naW5lLndvcmxkKTtcbiAgICAgICAgICAgIE1vdXNlQ29uc3RyYWludC51cGRhdGUobW91c2VDb25zdHJhaW50LCBhbGxCb2RpZXMpO1xuICAgICAgICAgICAgTW91c2VDb25zdHJhaW50Ll90cmlnZ2VyRXZlbnRzKG1vdXNlQ29uc3RyYWludCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBtb3VzZUNvbnN0cmFpbnQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGdpdmVuIG1vdXNlIGNvbnN0cmFpbnQuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVxuICAgICAqIEBwYXJhbSB7TW91c2VDb25zdHJhaW50fSBtb3VzZUNvbnN0cmFpbnRcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICovXG4gICAgTW91c2VDb25zdHJhaW50LnVwZGF0ZSA9IGZ1bmN0aW9uKG1vdXNlQ29uc3RyYWludCwgYm9kaWVzKSB7XG4gICAgICAgIHZhciBtb3VzZSA9IG1vdXNlQ29uc3RyYWludC5tb3VzZSxcbiAgICAgICAgICAgIGNvbnN0cmFpbnQgPSBtb3VzZUNvbnN0cmFpbnQuY29uc3RyYWludCxcbiAgICAgICAgICAgIGJvZHkgPSBtb3VzZUNvbnN0cmFpbnQuYm9keTtcblxuICAgICAgICBpZiAobW91c2UuYnV0dG9uID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoIWNvbnN0cmFpbnQuYm9keUIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBib2R5ID0gYm9kaWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoQm91bmRzLmNvbnRhaW5zKGJvZHkuYm91bmRzLCBtb3VzZS5wb3NpdGlvbikgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgRGV0ZWN0b3IuY2FuQ29sbGlkZShib2R5LmNvbGxpc2lvbkZpbHRlciwgbW91c2VDb25zdHJhaW50LmNvbGxpc2lvbkZpbHRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSBib2R5LnBhcnRzLmxlbmd0aCA+IDEgPyAxIDogMDsgaiA8IGJvZHkucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFydCA9IGJvZHkucGFydHNbal07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFZlcnRpY2VzLmNvbnRhaW5zKHBhcnQudmVydGljZXMsIG1vdXNlLnBvc2l0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdHJhaW50LnBvaW50QSA9IG1vdXNlLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdHJhaW50LmJvZHlCID0gbW91c2VDb25zdHJhaW50LmJvZHkgPSBib2R5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdHJhaW50LnBvaW50QiA9IHsgeDogbW91c2UucG9zaXRpb24ueCAtIGJvZHkucG9zaXRpb24ueCwgeTogbW91c2UucG9zaXRpb24ueSAtIGJvZHkucG9zaXRpb24ueSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdHJhaW50LmFuZ2xlQiA9IGJvZHkuYW5nbGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2xlZXBpbmcuc2V0KGJvZHksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXZlbnRzLnRyaWdnZXIobW91c2VDb25zdHJhaW50LCAnc3RhcnRkcmFnJywgeyBtb3VzZTogbW91c2UsIGJvZHk6IGJvZHkgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBTbGVlcGluZy5zZXQoY29uc3RyYWludC5ib2R5QiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQucG9pbnRBID0gbW91c2UucG9zaXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdHJhaW50LmJvZHlCID0gbW91c2VDb25zdHJhaW50LmJvZHkgPSBudWxsO1xuICAgICAgICAgICAgY29uc3RyYWludC5wb2ludEIgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoYm9keSlcbiAgICAgICAgICAgICAgICBFdmVudHMudHJpZ2dlcihtb3VzZUNvbnN0cmFpbnQsICdlbmRkcmFnJywgeyBtb3VzZTogbW91c2UsIGJvZHk6IGJvZHkgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgbW91c2UgY29uc3RyYWludCBldmVudHMuXG4gICAgICogQG1ldGhvZCBfdHJpZ2dlckV2ZW50c1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHttb3VzZX0gbW91c2VDb25zdHJhaW50XG4gICAgICovXG4gICAgTW91c2VDb25zdHJhaW50Ll90cmlnZ2VyRXZlbnRzID0gZnVuY3Rpb24obW91c2VDb25zdHJhaW50KSB7XG4gICAgICAgIHZhciBtb3VzZSA9IG1vdXNlQ29uc3RyYWludC5tb3VzZSxcbiAgICAgICAgICAgIG1vdXNlRXZlbnRzID0gbW91c2Uuc291cmNlRXZlbnRzO1xuXG4gICAgICAgIGlmIChtb3VzZUV2ZW50cy5tb3VzZW1vdmUpXG4gICAgICAgICAgICBFdmVudHMudHJpZ2dlcihtb3VzZUNvbnN0cmFpbnQsICdtb3VzZW1vdmUnLCB7IG1vdXNlOiBtb3VzZSB9KTtcblxuICAgICAgICBpZiAobW91c2VFdmVudHMubW91c2Vkb3duKVxuICAgICAgICAgICAgRXZlbnRzLnRyaWdnZXIobW91c2VDb25zdHJhaW50LCAnbW91c2Vkb3duJywgeyBtb3VzZTogbW91c2UgfSk7XG5cbiAgICAgICAgaWYgKG1vdXNlRXZlbnRzLm1vdXNldXApXG4gICAgICAgICAgICBFdmVudHMudHJpZ2dlcihtb3VzZUNvbnN0cmFpbnQsICdtb3VzZXVwJywgeyBtb3VzZTogbW91c2UgfSk7XG5cbiAgICAgICAgLy8gcmVzZXQgdGhlIG1vdXNlIHN0YXRlIHJlYWR5IGZvciB0aGUgbmV4dCBzdGVwXG4gICAgICAgIE1vdXNlLmNsZWFyU291cmNlRXZlbnRzKG1vdXNlKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgRXZlbnRzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgd2hlbiB0aGUgbW91c2UgaGFzIG1vdmVkIChvciBhIHRvdWNoIG1vdmVzKSBkdXJpbmcgdGhlIGxhc3Qgc3RlcFxuICAgICpcbiAgICAqIEBldmVudCBtb3VzZW1vdmVcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bW91c2V9IGV2ZW50Lm1vdXNlIFRoZSBlbmdpbmUncyBtb3VzZSBpbnN0YW5jZVxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIHdoZW4gdGhlIG1vdXNlIGlzIGRvd24gKG9yIGEgdG91Y2ggaGFzIHN0YXJ0ZWQpIGR1cmluZyB0aGUgbGFzdCBzdGVwXG4gICAgKlxuICAgICogQGV2ZW50IG1vdXNlZG93blxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHttb3VzZX0gZXZlbnQubW91c2UgVGhlIGVuZ2luZSdzIG1vdXNlIGluc3RhbmNlXG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgd2hlbiB0aGUgbW91c2UgaXMgdXAgKG9yIGEgdG91Y2ggaGFzIGVuZGVkKSBkdXJpbmcgdGhlIGxhc3Qgc3RlcFxuICAgICpcbiAgICAqIEBldmVudCBtb3VzZXVwXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge21vdXNlfSBldmVudC5tb3VzZSBUaGUgZW5naW5lJ3MgbW91c2UgaW5zdGFuY2VcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIHRoZSB1c2VyIHN0YXJ0cyBkcmFnZ2luZyBhIGJvZHlcbiAgICAqXG4gICAgKiBAZXZlbnQgc3RhcnRkcmFnXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge21vdXNlfSBldmVudC5tb3VzZSBUaGUgZW5naW5lJ3MgbW91c2UgaW5zdGFuY2VcbiAgICAqIEBwYXJhbSB7Ym9keX0gZXZlbnQuYm9keSBUaGUgYm9keSBiZWluZyBkcmFnZ2VkXG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgd2hlbiB0aGUgdXNlciBlbmRzIGRyYWdnaW5nIGEgYm9keVxuICAgICpcbiAgICAqIEBldmVudCBlbmRkcmFnXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge21vdXNlfSBldmVudC5tb3VzZSBUaGUgZW5naW5lJ3MgbW91c2UgaW5zdGFuY2VcbiAgICAqIEBwYXJhbSB7Ym9keX0gZXZlbnQuYm9keSBUaGUgYm9keSB0aGF0IGhhcyBzdG9wcGVkIGJlaW5nIGRyYWdnZWRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgUHJvcGVydGllcyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBTdHJpbmdgIGRlbm90aW5nIHRoZSB0eXBlIG9mIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB0eXBlXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgXCJjb25zdHJhaW50XCJcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBgTW91c2VgIGluc3RhbmNlIGluIHVzZS4gSWYgbm90IHN1cHBsaWVkIGluIGBNb3VzZUNvbnN0cmFpbnQuY3JlYXRlYCwgb25lIHdpbGwgYmUgY3JlYXRlZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBtb3VzZVxuICAgICAqIEB0eXBlIG1vdXNlXG4gICAgICogQGRlZmF1bHQgbW91c2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBgQm9keWAgdGhhdCBpcyBjdXJyZW50bHkgYmVpbmcgbW92ZWQgYnkgdGhlIHVzZXIsIG9yIGBudWxsYCBpZiBubyBib2R5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGJvZHlcbiAgICAgKiBAdHlwZSBib2R5XG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGBDb25zdHJhaW50YCBvYmplY3QgdGhhdCBpcyB1c2VkIHRvIG1vdmUgdGhlIGJvZHkgZHVyaW5nIGludGVyYWN0aW9uLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGNvbnN0cmFpbnRcbiAgICAgKiBAdHlwZSBjb25zdHJhaW50XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBgT2JqZWN0YCB0aGF0IHNwZWNpZmllcyB0aGUgY29sbGlzaW9uIGZpbHRlciBwcm9wZXJ0aWVzLlxuICAgICAqIFRoZSBjb2xsaXNpb24gZmlsdGVyIGFsbG93cyB0aGUgdXNlciB0byBkZWZpbmUgd2hpY2ggdHlwZXMgb2YgYm9keSB0aGlzIG1vdXNlIGNvbnN0cmFpbnQgY2FuIGludGVyYWN0IHdpdGguXG4gICAgICogU2VlIGBib2R5LmNvbGxpc2lvbkZpbHRlcmAgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29sbGlzaW9uRmlsdGVyXG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICovXG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAyNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuUXVlcnlgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBwZXJmb3JtaW5nIGNvbGxpc2lvbiBxdWVyaWVzLlxuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgUXVlcnlcbiovXG5cbnZhciBRdWVyeSA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXJ5O1xuXG52YXIgVmVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbnZhciBDb2xsaXNpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xudmFyIEJvdW5kcyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG52YXIgQm9kaWVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG52YXIgVmVydGljZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBjb2xsaXNpb25zIGJldHdlZW4gYGJvZHlgIGFuZCBgYm9kaWVzYC5cbiAgICAgKiBAbWV0aG9kIGNvbGxpZGVzXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEByZXR1cm4ge2NvbGxpc2lvbltdfSBDb2xsaXNpb25zXG4gICAgICovXG4gICAgUXVlcnkuY29sbGlkZXMgPSBmdW5jdGlvbihib2R5LCBib2RpZXMpIHtcbiAgICAgICAgdmFyIGNvbGxpc2lvbnMgPSBbXSxcbiAgICAgICAgICAgIGJvZGllc0xlbmd0aCA9IGJvZGllcy5sZW5ndGgsXG4gICAgICAgICAgICBib3VuZHMgPSBib2R5LmJvdW5kcyxcbiAgICAgICAgICAgIGNvbGxpZGVzID0gQ29sbGlzaW9uLmNvbGxpZGVzLFxuICAgICAgICAgICAgb3ZlcmxhcHMgPSBCb3VuZHMub3ZlcmxhcHM7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXNMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHlBID0gYm9kaWVzW2ldLFxuICAgICAgICAgICAgICAgIHBhcnRzQUxlbmd0aCA9IGJvZHlBLnBhcnRzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBwYXJ0c0FTdGFydCA9IHBhcnRzQUxlbmd0aCA9PT0gMSA/IDAgOiAxO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAob3ZlcmxhcHMoYm9keUEuYm91bmRzLCBib3VuZHMpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IHBhcnRzQVN0YXJ0OyBqIDwgcGFydHNBTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBib2R5QS5wYXJ0c1tqXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAob3ZlcmxhcHMocGFydC5ib3VuZHMsIGJvdW5kcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2xsaXNpb24gPSBjb2xsaWRlcyhwYXJ0LCBib2R5KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbGxpc2lvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbnMucHVzaChjb2xsaXNpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbGxpc2lvbnM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENhc3RzIGEgcmF5IHNlZ21lbnQgYWdhaW5zdCBhIHNldCBvZiBib2RpZXMgYW5kIHJldHVybnMgYWxsIGNvbGxpc2lvbnMsIHJheSB3aWR0aCBpcyBvcHRpb25hbC4gSW50ZXJzZWN0aW9uIHBvaW50cyBhcmUgbm90IHByb3ZpZGVkLlxuICAgICAqIEBtZXRob2QgcmF5XG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBzdGFydFBvaW50XG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IGVuZFBvaW50XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtyYXlXaWR0aF1cbiAgICAgKiBAcmV0dXJuIHtjb2xsaXNpb25bXX0gQ29sbGlzaW9uc1xuICAgICAqL1xuICAgIFF1ZXJ5LnJheSA9IGZ1bmN0aW9uKGJvZGllcywgc3RhcnRQb2ludCwgZW5kUG9pbnQsIHJheVdpZHRoKSB7XG4gICAgICAgIHJheVdpZHRoID0gcmF5V2lkdGggfHwgMWUtMTAwO1xuXG4gICAgICAgIHZhciByYXlBbmdsZSA9IFZlY3Rvci5hbmdsZShzdGFydFBvaW50LCBlbmRQb2ludCksXG4gICAgICAgICAgICByYXlMZW5ndGggPSBWZWN0b3IubWFnbml0dWRlKFZlY3Rvci5zdWIoc3RhcnRQb2ludCwgZW5kUG9pbnQpKSxcbiAgICAgICAgICAgIHJheVggPSAoZW5kUG9pbnQueCArIHN0YXJ0UG9pbnQueCkgKiAwLjUsXG4gICAgICAgICAgICByYXlZID0gKGVuZFBvaW50LnkgKyBzdGFydFBvaW50LnkpICogMC41LFxuICAgICAgICAgICAgcmF5ID0gQm9kaWVzLnJlY3RhbmdsZShyYXlYLCByYXlZLCByYXlMZW5ndGgsIHJheVdpZHRoLCB7IGFuZ2xlOiByYXlBbmdsZSB9KSxcbiAgICAgICAgICAgIGNvbGxpc2lvbnMgPSBRdWVyeS5jb2xsaWRlcyhyYXksIGJvZGllcyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2xsaXNpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgY29sbGlzaW9uID0gY29sbGlzaW9uc1tpXTtcbiAgICAgICAgICAgIGNvbGxpc2lvbi5ib2R5ID0gY29sbGlzaW9uLmJvZHlCID0gY29sbGlzaW9uLmJvZHlBOyAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbGxpc2lvbnM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIGJvZGllcyB3aG9zZSBib3VuZHMgYXJlIGluc2lkZSAob3Igb3V0c2lkZSBpZiBzZXQpIHRoZSBnaXZlbiBzZXQgb2YgYm91bmRzLCBmcm9tIHRoZSBnaXZlbiBzZXQgb2YgYm9kaWVzLlxuICAgICAqIEBtZXRob2QgcmVnaW9uXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7Ym91bmRzfSBib3VuZHNcbiAgICAgKiBAcGFyYW0ge2Jvb2x9IFtvdXRzaWRlPWZhbHNlXVxuICAgICAqIEByZXR1cm4ge2JvZHlbXX0gVGhlIGJvZGllcyBtYXRjaGluZyB0aGUgcXVlcnlcbiAgICAgKi9cbiAgICBRdWVyeS5yZWdpb24gPSBmdW5jdGlvbihib2RpZXMsIGJvdW5kcywgb3V0c2lkZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldLFxuICAgICAgICAgICAgICAgIG92ZXJsYXBzID0gQm91bmRzLm92ZXJsYXBzKGJvZHkuYm91bmRzLCBib3VuZHMpO1xuICAgICAgICAgICAgaWYgKChvdmVybGFwcyAmJiAhb3V0c2lkZSkgfHwgKCFvdmVybGFwcyAmJiBvdXRzaWRlKSlcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChib2R5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIGJvZGllcyB3aG9zZSB2ZXJ0aWNlcyBjb250YWluIHRoZSBnaXZlbiBwb2ludCwgZnJvbSB0aGUgZ2l2ZW4gc2V0IG9mIGJvZGllcy5cbiAgICAgKiBAbWV0aG9kIHBvaW50XG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBwb2ludFxuICAgICAqIEByZXR1cm4ge2JvZHlbXX0gVGhlIGJvZGllcyBtYXRjaGluZyB0aGUgcXVlcnlcbiAgICAgKi9cbiAgICBRdWVyeS5wb2ludCA9IGZ1bmN0aW9uKGJvZGllcywgcG9pbnQpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKEJvdW5kcy5jb250YWlucyhib2R5LmJvdW5kcywgcG9pbnQpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IGJvZHkucGFydHMubGVuZ3RoID09PSAxID8gMCA6IDE7IGogPCBib2R5LnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keS5wYXJ0c1tqXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoQm91bmRzLmNvbnRhaW5zKHBhcnQuYm91bmRzLCBwb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIFZlcnRpY2VzLmNvbnRhaW5zKHBhcnQudmVydGljZXMsIHBvaW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYm9keSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDI3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5SdW5uZXJgIG1vZHVsZSBpcyBhbiBvcHRpb25hbCB1dGlsaXR5IHdoaWNoIHByb3ZpZGVzIGEgZ2FtZSBsb29wLCBcbiogdGhhdCBoYW5kbGVzIGNvbnRpbnVvdXNseSB1cGRhdGluZyBhIGBNYXR0ZXIuRW5naW5lYCBmb3IgeW91IHdpdGhpbiBhIGJyb3dzZXIuXG4qIEl0IGlzIGludGVuZGVkIGZvciBkZXZlbG9wbWVudCBhbmQgZGVidWdnaW5nIHB1cnBvc2VzLCBidXQgbWF5IGFsc28gYmUgc3VpdGFibGUgZm9yIHNpbXBsZSBnYW1lcy5cbiogSWYgeW91IGFyZSB1c2luZyB5b3VyIG93biBnYW1lIGxvb3AgaW5zdGVhZCwgdGhlbiB5b3UgZG8gbm90IG5lZWQgdGhlIGBNYXR0ZXIuUnVubmVyYCBtb2R1bGUuXG4qIEluc3RlYWQganVzdCBjYWxsIGBFbmdpbmUudXBkYXRlKGVuZ2luZSwgZGVsdGEpYCBpbiB5b3VyIG93biBsb29wLlxuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgUnVubmVyXG4qL1xuXG52YXIgUnVubmVyID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gUnVubmVyO1xuXG52YXIgRXZlbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbnZhciBFbmdpbmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KTtcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgX3JlcXVlc3RBbmltYXRpb25GcmFtZSxcbiAgICAgICAgX2NhbmNlbEFuaW1hdGlvbkZyYW1lO1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG4gICBcbiAgICAgICAgX2NhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc0NhbmNlbEFuaW1hdGlvbkZyYW1lO1xuICAgIH1cblxuICAgIGlmICghX3JlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgICAgICB2YXIgX2ZyYW1lVGltZW91dDtcblxuICAgICAgICBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2speyBcbiAgICAgICAgICAgIF9mcmFtZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhDb21tb24ubm93KCkpOyBcbiAgICAgICAgICAgIH0sIDEwMDAgLyA2MCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgX2NhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoX2ZyYW1lVGltZW91dCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBSdW5uZXIuIFRoZSBvcHRpb25zIHBhcmFtZXRlciBpcyBhbiBvYmplY3QgdGhhdCBzcGVjaWZpZXMgYW55IHByb3BlcnRpZXMgeW91IHdpc2ggdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzLlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHt9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBSdW5uZXIuY3JlYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBmcHM6IDYwLFxuICAgICAgICAgICAgY29ycmVjdGlvbjogMSxcbiAgICAgICAgICAgIGRlbHRhU2FtcGxlU2l6ZTogNjAsXG4gICAgICAgICAgICBjb3VudGVyVGltZXN0YW1wOiAwLFxuICAgICAgICAgICAgZnJhbWVDb3VudGVyOiAwLFxuICAgICAgICAgICAgZGVsdGFIaXN0b3J5OiBbXSxcbiAgICAgICAgICAgIHRpbWVQcmV2OiBudWxsLFxuICAgICAgICAgICAgdGltZVNjYWxlUHJldjogMSxcbiAgICAgICAgICAgIGZyYW1lUmVxdWVzdElkOiBudWxsLFxuICAgICAgICAgICAgaXNGaXhlZDogZmFsc2UsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHJ1bm5lciA9IENvbW1vbi5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHJ1bm5lci5kZWx0YSA9IHJ1bm5lci5kZWx0YSB8fCAxMDAwIC8gcnVubmVyLmZwcztcbiAgICAgICAgcnVubmVyLmRlbHRhTWluID0gcnVubmVyLmRlbHRhTWluIHx8IDEwMDAgLyBydW5uZXIuZnBzO1xuICAgICAgICBydW5uZXIuZGVsdGFNYXggPSBydW5uZXIuZGVsdGFNYXggfHwgMTAwMCAvIChydW5uZXIuZnBzICogMC41KTtcbiAgICAgICAgcnVubmVyLmZwcyA9IDEwMDAgLyBydW5uZXIuZGVsdGE7XG5cbiAgICAgICAgcmV0dXJuIHJ1bm5lcjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ29udGludW91c2x5IHRpY2tzIGEgYE1hdHRlci5FbmdpbmVgIGJ5IGNhbGxpbmcgYFJ1bm5lci50aWNrYCBvbiB0aGUgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAgZXZlbnQuXG4gICAgICogQG1ldGhvZCBydW5cbiAgICAgKiBAcGFyYW0ge2VuZ2luZX0gZW5naW5lXG4gICAgICovXG4gICAgUnVubmVyLnJ1biA9IGZ1bmN0aW9uKHJ1bm5lciwgZW5naW5lKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBydW5uZXIgaWYgZW5naW5lIGlzIGZpcnN0IGFyZ3VtZW50XG4gICAgICAgIGlmICh0eXBlb2YgcnVubmVyLnBvc2l0aW9uSXRlcmF0aW9ucyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGVuZ2luZSA9IHJ1bm5lcjtcbiAgICAgICAgICAgIHJ1bm5lciA9IFJ1bm5lci5jcmVhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIChmdW5jdGlvbiByZW5kZXIodGltZSl7XG4gICAgICAgICAgICBydW5uZXIuZnJhbWVSZXF1ZXN0SWQgPSBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG5cbiAgICAgICAgICAgIGlmICh0aW1lICYmIHJ1bm5lci5lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgUnVubmVyLnRpY2socnVubmVyLCBlbmdpbmUsIHRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuXG4gICAgICAgIHJldHVybiBydW5uZXI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEEgZ2FtZSBsb29wIHV0aWxpdHkgdGhhdCB1cGRhdGVzIHRoZSBlbmdpbmUgYW5kIHJlbmRlcmVyIGJ5IG9uZSBzdGVwIChhICd0aWNrJykuXG4gICAgICogRmVhdHVyZXMgZGVsdGEgc21vb3RoaW5nLCB0aW1lIGNvcnJlY3Rpb24gYW5kIGZpeGVkIG9yIGR5bmFtaWMgdGltaW5nLlxuICAgICAqIENvbnNpZGVyIGp1c3QgYEVuZ2luZS51cGRhdGUoZW5naW5lLCBkZWx0YSlgIGlmIHlvdSdyZSB1c2luZyB5b3VyIG93biBsb29wLlxuICAgICAqIEBtZXRob2QgdGlja1xuICAgICAqIEBwYXJhbSB7cnVubmVyfSBydW5uZXJcbiAgICAgKiBAcGFyYW0ge2VuZ2luZX0gZW5naW5lXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVcbiAgICAgKi9cbiAgICBSdW5uZXIudGljayA9IGZ1bmN0aW9uKHJ1bm5lciwgZW5naW5lLCB0aW1lKSB7XG4gICAgICAgIHZhciB0aW1pbmcgPSBlbmdpbmUudGltaW5nLFxuICAgICAgICAgICAgY29ycmVjdGlvbiA9IDEsXG4gICAgICAgICAgICBkZWx0YTtcblxuICAgICAgICAvLyBjcmVhdGUgYW4gZXZlbnQgb2JqZWN0XG4gICAgICAgIHZhciBldmVudCA9IHtcbiAgICAgICAgICAgIHRpbWVzdGFtcDogdGltaW5nLnRpbWVzdGFtcFxuICAgICAgICB9O1xuXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKHJ1bm5lciwgJ2JlZm9yZVRpY2snLCBldmVudCk7XG5cbiAgICAgICAgaWYgKHJ1bm5lci5pc0ZpeGVkKSB7XG4gICAgICAgICAgICAvLyBmaXhlZCB0aW1lc3RlcFxuICAgICAgICAgICAgZGVsdGEgPSBydW5uZXIuZGVsdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBkeW5hbWljIHRpbWVzdGVwIGJhc2VkIG9uIHdhbGwgY2xvY2sgYmV0d2VlbiBjYWxsc1xuICAgICAgICAgICAgZGVsdGEgPSAodGltZSAtIHJ1bm5lci50aW1lUHJldikgfHwgcnVubmVyLmRlbHRhO1xuICAgICAgICAgICAgcnVubmVyLnRpbWVQcmV2ID0gdGltZTtcblxuICAgICAgICAgICAgLy8gb3B0aW1pc3RpY2FsbHkgZmlsdGVyIGRlbHRhIG92ZXIgYSBmZXcgZnJhbWVzLCB0byBpbXByb3ZlIHN0YWJpbGl0eVxuICAgICAgICAgICAgcnVubmVyLmRlbHRhSGlzdG9yeS5wdXNoKGRlbHRhKTtcbiAgICAgICAgICAgIHJ1bm5lci5kZWx0YUhpc3RvcnkgPSBydW5uZXIuZGVsdGFIaXN0b3J5LnNsaWNlKC1ydW5uZXIuZGVsdGFTYW1wbGVTaXplKTtcbiAgICAgICAgICAgIGRlbHRhID0gTWF0aC5taW4uYXBwbHkobnVsbCwgcnVubmVyLmRlbHRhSGlzdG9yeSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGxpbWl0IGRlbHRhXG4gICAgICAgICAgICBkZWx0YSA9IGRlbHRhIDwgcnVubmVyLmRlbHRhTWluID8gcnVubmVyLmRlbHRhTWluIDogZGVsdGE7XG4gICAgICAgICAgICBkZWx0YSA9IGRlbHRhID4gcnVubmVyLmRlbHRhTWF4ID8gcnVubmVyLmRlbHRhTWF4IDogZGVsdGE7XG5cbiAgICAgICAgICAgIC8vIGNvcnJlY3Rpb24gZm9yIGRlbHRhXG4gICAgICAgICAgICBjb3JyZWN0aW9uID0gZGVsdGEgLyBydW5uZXIuZGVsdGE7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBlbmdpbmUgdGltaW5nIG9iamVjdFxuICAgICAgICAgICAgcnVubmVyLmRlbHRhID0gZGVsdGE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aW1lIGNvcnJlY3Rpb24gZm9yIHRpbWUgc2NhbGluZ1xuICAgICAgICBpZiAocnVubmVyLnRpbWVTY2FsZVByZXYgIT09IDApXG4gICAgICAgICAgICBjb3JyZWN0aW9uICo9IHRpbWluZy50aW1lU2NhbGUgLyBydW5uZXIudGltZVNjYWxlUHJldjtcblxuICAgICAgICBpZiAodGltaW5nLnRpbWVTY2FsZSA9PT0gMClcbiAgICAgICAgICAgIGNvcnJlY3Rpb24gPSAwO1xuXG4gICAgICAgIHJ1bm5lci50aW1lU2NhbGVQcmV2ID0gdGltaW5nLnRpbWVTY2FsZTtcbiAgICAgICAgcnVubmVyLmNvcnJlY3Rpb24gPSBjb3JyZWN0aW9uO1xuXG4gICAgICAgIC8vIGZwcyBjb3VudGVyXG4gICAgICAgIHJ1bm5lci5mcmFtZUNvdW50ZXIgKz0gMTtcbiAgICAgICAgaWYgKHRpbWUgLSBydW5uZXIuY291bnRlclRpbWVzdGFtcCA+PSAxMDAwKSB7XG4gICAgICAgICAgICBydW5uZXIuZnBzID0gcnVubmVyLmZyYW1lQ291bnRlciAqICgodGltZSAtIHJ1bm5lci5jb3VudGVyVGltZXN0YW1wKSAvIDEwMDApO1xuICAgICAgICAgICAgcnVubmVyLmNvdW50ZXJUaW1lc3RhbXAgPSB0aW1lO1xuICAgICAgICAgICAgcnVubmVyLmZyYW1lQ291bnRlciA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBFdmVudHMudHJpZ2dlcihydW5uZXIsICd0aWNrJywgZXZlbnQpO1xuXG4gICAgICAgIC8vIHVwZGF0ZVxuICAgICAgICBFdmVudHMudHJpZ2dlcihydW5uZXIsICdiZWZvcmVVcGRhdGUnLCBldmVudCk7XG4gICAgICAgIEVuZ2luZS51cGRhdGUoZW5naW5lLCBkZWx0YSwgY29ycmVjdGlvbik7XG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKHJ1bm5lciwgJ2FmdGVyVXBkYXRlJywgZXZlbnQpO1xuXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKHJ1bm5lciwgJ2FmdGVyVGljaycsIGV2ZW50KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRW5kcyBleGVjdXRpb24gb2YgYFJ1bm5lci5ydW5gIG9uIHRoZSBnaXZlbiBgcnVubmVyYCwgYnkgY2FuY2VsaW5nIHRoZSBhbmltYXRpb24gZnJhbWUgcmVxdWVzdCBldmVudCBsb29wLlxuICAgICAqIElmIHlvdSB3aXNoIHRvIG9ubHkgdGVtcG9yYXJpbHkgcGF1c2UgdGhlIGVuZ2luZSwgc2VlIGBlbmdpbmUuZW5hYmxlZGAgaW5zdGVhZC5cbiAgICAgKiBAbWV0aG9kIHN0b3BcbiAgICAgKiBAcGFyYW0ge3J1bm5lcn0gcnVubmVyXG4gICAgICovXG4gICAgUnVubmVyLnN0b3AgPSBmdW5jdGlvbihydW5uZXIpIHtcbiAgICAgICAgX2NhbmNlbEFuaW1hdGlvbkZyYW1lKHJ1bm5lci5mcmFtZVJlcXVlc3RJZCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciBgUnVubmVyLnJ1bmAuXG4gICAgICogQG1ldGhvZCBzdGFydFxuICAgICAqIEBwYXJhbSB7cnVubmVyfSBydW5uZXJcbiAgICAgKiBAcGFyYW0ge2VuZ2luZX0gZW5naW5lXG4gICAgICovXG4gICAgUnVubmVyLnN0YXJ0ID0gZnVuY3Rpb24ocnVubmVyLCBlbmdpbmUpIHtcbiAgICAgICAgUnVubmVyLnJ1bihydW5uZXIsIGVuZ2luZSk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgKlxuICAgICogIEV2ZW50cyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGF0IHRoZSBzdGFydCBvZiBhIHRpY2ssIGJlZm9yZSBhbnkgdXBkYXRlcyB0byB0aGUgZW5naW5lIG9yIHRpbWluZ1xuICAgICpcbiAgICAqIEBldmVudCBiZWZvcmVUaWNrXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCBhZnRlciBlbmdpbmUgdGltaW5nIHVwZGF0ZWQsIGJ1dCBqdXN0IGJlZm9yZSB1cGRhdGVcbiAgICAqXG4gICAgKiBAZXZlbnQgdGlja1xuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYXQgdGhlIGVuZCBvZiBhIHRpY2ssIGFmdGVyIGVuZ2luZSB1cGRhdGUgYW5kIGFmdGVyIHJlbmRlcmluZ1xuICAgICpcbiAgICAqIEBldmVudCBhZnRlclRpY2tcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGJlZm9yZSB1cGRhdGVcbiAgICAqXG4gICAgKiBAZXZlbnQgYmVmb3JlVXBkYXRlXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCBhZnRlciB1cGRhdGVcbiAgICAqXG4gICAgKiBAZXZlbnQgYWZ0ZXJVcGRhdGVcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKlxuICAgICpcbiAgICAqICBQcm9wZXJ0aWVzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0aGF0IHNwZWNpZmllcyB3aGV0aGVyIHRoZSBydW5uZXIgaXMgcnVubmluZyBvciBub3QuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZW5hYmxlZFxuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBCb29sZWFuYCB0aGF0IHNwZWNpZmllcyBpZiB0aGUgcnVubmVyIHNob3VsZCB1c2UgYSBmaXhlZCB0aW1lc3RlcCAob3RoZXJ3aXNlIGl0IGlzIHZhcmlhYmxlKS5cbiAgICAgKiBJZiB0aW1pbmcgaXMgZml4ZWQsIHRoZW4gdGhlIGFwcGFyZW50IHNpbXVsYXRpb24gc3BlZWQgd2lsbCBjaGFuZ2UgZGVwZW5kaW5nIG9uIHRoZSBmcmFtZSByYXRlIChidXQgYmVoYXZpb3VyIHdpbGwgYmUgZGV0ZXJtaW5pc3RpYykuXG4gICAgICogSWYgdGhlIHRpbWluZyBpcyB2YXJpYWJsZSwgdGhlbiB0aGUgYXBwYXJlbnQgc2ltdWxhdGlvbiBzcGVlZCB3aWxsIGJlIGNvbnN0YW50IChhcHByb3hpbWF0ZWx5LCBidXQgYXQgdGhlIGNvc3Qgb2YgZGV0ZXJtaW5pbmlzbSkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgaXNGaXhlZFxuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IHNwZWNpZmllcyB0aGUgdGltZSBzdGVwIGJldHdlZW4gdXBkYXRlcyBpbiBtaWxsaXNlY29uZHMuXG4gICAgICogSWYgYGVuZ2luZS50aW1pbmcuaXNGaXhlZGAgaXMgc2V0IHRvIGB0cnVlYCwgdGhlbiBgZGVsdGFgIGlzIGZpeGVkLlxuICAgICAqIElmIGl0IGlzIGBmYWxzZWAsIHRoZW4gYGRlbHRhYCBjYW4gZHluYW1pY2FsbHkgY2hhbmdlIHRvIG1haW50YWluIHRoZSBjb3JyZWN0IGFwcGFyZW50IHNpbXVsYXRpb24gc3BlZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZGVsdGFcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAxMDAwIC8gNjBcbiAgICAgKi9cblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDI4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGlzIG1vZHVsZSBoYXMgbm93IGJlZW4gcmVwbGFjZWQgYnkgYE1hdHRlci5Db2xsaXNpb25gLlxuKlxuKiBBbGwgdXNhZ2Ugc2hvdWxkIGJlIG1pZ3JhdGVkIHRvIGBNYXR0ZXIuQ29sbGlzaW9uYC5cbiogRm9yIGJhY2stY29tcGF0aWJpbGl0eSBwdXJwb3NlcyB0aGlzIG1vZHVsZSB3aWxsIHJlbWFpbiBmb3IgYSBzaG9ydCB0ZXJtIGFuZCB0aGVuIGxhdGVyIHJlbW92ZWQgaW4gYSBmdXR1cmUgcmVsZWFzZS5cbipcbiogVGhlIGBNYXR0ZXIuU0FUYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgZGV0ZWN0aW5nIGNvbGxpc2lvbnMgdXNpbmcgdGhlIFNlcGFyYXRpbmcgQXhpcyBUaGVvcmVtLlxuKlxuKiBAY2xhc3MgU0FUXG4qIEBkZXByZWNhdGVkXG4qL1xuXG52YXIgU0FUID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gU0FUO1xuXG52YXIgQ29sbGlzaW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xudmFyIGRlcHJlY2F0ZWQgPSBDb21tb24uZGVwcmVjYXRlZDtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogRGV0ZWN0IGNvbGxpc2lvbiBiZXR3ZWVuIHR3byBib2RpZXMgdXNpbmcgdGhlIFNlcGFyYXRpbmcgQXhpcyBUaGVvcmVtLlxuICAgICAqIEBkZXByZWNhdGVkIHJlcGxhY2VkIGJ5IENvbGxpc2lvbi5jb2xsaWRlc1xuICAgICAqIEBtZXRob2QgY29sbGlkZXNcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlBXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5QlxuICAgICAqIEByZXR1cm4ge2NvbGxpc2lvbn0gY29sbGlzaW9uXG4gICAgICovXG4gICAgU0FULmNvbGxpZGVzID0gZnVuY3Rpb24oYm9keUEsIGJvZHlCKSB7XG4gICAgICAgIHJldHVybiBDb2xsaXNpb24uY29sbGlkZXMoYm9keUEsIGJvZHlCKTtcbiAgICB9O1xuXG4gICAgZGVwcmVjYXRlZChTQVQsICdjb2xsaWRlcycsICdTQVQuY29sbGlkZXMg4p6kIHJlcGxhY2VkIGJ5IENvbGxpc2lvbi5jb2xsaWRlcycpO1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMjkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLlN2Z2AgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNvbnZlcnRpbmcgU1ZHIGltYWdlcyBpbnRvIGFuIGFycmF5IG9mIHZlY3RvciBwb2ludHMuXG4qXG4qIFRvIHVzZSB0aGlzIG1vZHVsZSB5b3UgYWxzbyBuZWVkIHRoZSBTVkdQYXRoU2VnIHBvbHlmaWxsOiBodHRwczovL2dpdGh1Yi5jb20vcHJvZ2Vycy9wYXRoc2VnXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBTdmdcbiovXG5cbnZhciBTdmcgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBTdmc7XG5cbnZhciBCb3VuZHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGFuIFNWRyBwYXRoIGludG8gYW4gYXJyYXkgb2YgdmVjdG9yIHBvaW50cy5cbiAgICAgKiBJZiB0aGUgaW5wdXQgcGF0aCBmb3JtcyBhIGNvbmNhdmUgc2hhcGUsIHlvdSBtdXN0IGRlY29tcG9zZSB0aGUgcmVzdWx0IGludG8gY29udmV4IHBhcnRzIGJlZm9yZSB1c2UuXG4gICAgICogU2VlIGBCb2RpZXMuZnJvbVZlcnRpY2VzYCB3aGljaCBwcm92aWRlcyBzdXBwb3J0IGZvciB0aGlzLlxuICAgICAqIE5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBndWFyYW50ZWVkIHRvIHN1cHBvcnQgY29tcGxleCBwYXRocyAoc3VjaCBhcyB0aG9zZSB3aXRoIGhvbGVzKS5cbiAgICAgKiBZb3UgbXVzdCBsb2FkIHRoZSBgcGF0aHNlZy5qc2AgcG9seWZpbGwgb24gbmV3ZXIgYnJvd3NlcnMuXG4gICAgICogQG1ldGhvZCBwYXRoVG9WZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7U1ZHUGF0aEVsZW1lbnR9IHBhdGhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3NhbXBsZUxlbmd0aD0xNV1cbiAgICAgKiBAcmV0dXJuIHtWZWN0b3JbXX0gcG9pbnRzXG4gICAgICovXG4gICAgU3ZnLnBhdGhUb1ZlcnRpY2VzID0gZnVuY3Rpb24ocGF0aCwgc2FtcGxlTGVuZ3RoKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhKCdTVkdQYXRoU2VnJyBpbiB3aW5kb3cpKSB7XG4gICAgICAgICAgICBDb21tb24ud2FybignU3ZnLnBhdGhUb1ZlcnRpY2VzOiBTVkdQYXRoU2VnIG5vdCBkZWZpbmVkLCBhIHBvbHlmaWxsIGlzIHJlcXVpcmVkLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dvdXQvc3ZnLnRvcG9seS5qcy9ibG9iL21hc3Rlci9zdmcudG9wb2x5LmpzXG4gICAgICAgIHZhciBpLCBpbCwgdG90YWwsIHBvaW50LCBzZWdtZW50LCBzZWdtZW50cywgXG4gICAgICAgICAgICBzZWdtZW50c1F1ZXVlLCBsYXN0U2VnbWVudCwgXG4gICAgICAgICAgICBsYXN0UG9pbnQsIHNlZ21lbnRJbmRleCwgcG9pbnRzID0gW10sXG4gICAgICAgICAgICBseCwgbHksIGxlbmd0aCA9IDAsIHggPSAwLCB5ID0gMDtcblxuICAgICAgICBzYW1wbGVMZW5ndGggPSBzYW1wbGVMZW5ndGggfHwgMTU7XG5cbiAgICAgICAgdmFyIGFkZFBvaW50ID0gZnVuY3Rpb24ocHgsIHB5LCBwYXRoU2VnVHlwZSkge1xuICAgICAgICAgICAgLy8gYWxsIG9kZC1udW1iZXJlZCBwYXRoIHR5cGVzIGFyZSByZWxhdGl2ZSBleGNlcHQgUEFUSFNFR19DTE9TRVBBVEggKDEpXG4gICAgICAgICAgICB2YXIgaXNSZWxhdGl2ZSA9IHBhdGhTZWdUeXBlICUgMiA9PT0gMSAmJiBwYXRoU2VnVHlwZSA+IDE7XG5cbiAgICAgICAgICAgIC8vIHdoZW4gdGhlIGxhc3QgcG9pbnQgZG9lc24ndCBlcXVhbCB0aGUgY3VycmVudCBwb2ludCBhZGQgdGhlIGN1cnJlbnQgcG9pbnRcbiAgICAgICAgICAgIGlmICghbGFzdFBvaW50IHx8IHB4ICE9IGxhc3RQb2ludC54IHx8IHB5ICE9IGxhc3RQb2ludC55KSB7XG4gICAgICAgICAgICAgICAgaWYgKGxhc3RQb2ludCAmJiBpc1JlbGF0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGx4ID0gbGFzdFBvaW50Lng7XG4gICAgICAgICAgICAgICAgICAgIGx5ID0gbGFzdFBvaW50Lnk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbHggPSAwO1xuICAgICAgICAgICAgICAgICAgICBseSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHBvaW50ID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiBseCArIHB4LFxuICAgICAgICAgICAgICAgICAgICB5OiBseSArIHB5XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIHNldCBsYXN0IHBvaW50XG4gICAgICAgICAgICAgICAgaWYgKGlzUmVsYXRpdmUgfHwgIWxhc3RQb2ludCkge1xuICAgICAgICAgICAgICAgICAgICBsYXN0UG9pbnQgPSBwb2ludDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwb2ludHMucHVzaChwb2ludCk7XG5cbiAgICAgICAgICAgICAgICB4ID0gbHggKyBweDtcbiAgICAgICAgICAgICAgICB5ID0gbHkgKyBweTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgYWRkU2VnbWVudFBvaW50ID0gZnVuY3Rpb24oc2VnbWVudCkge1xuICAgICAgICAgICAgdmFyIHNlZ1R5cGUgPSBzZWdtZW50LnBhdGhTZWdUeXBlQXNMZXR0ZXIudG9VcHBlckNhc2UoKTtcblxuICAgICAgICAgICAgLy8gc2tpcCBwYXRoIGVuZHNcbiAgICAgICAgICAgIGlmIChzZWdUeXBlID09PSAnWicpIFxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgLy8gbWFwIHNlZ21lbnQgdG8geCBhbmQgeVxuICAgICAgICAgICAgc3dpdGNoIChzZWdUeXBlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgY2FzZSAnTCc6XG4gICAgICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICAgIGNhc2UgJ0MnOlxuICAgICAgICAgICAgY2FzZSAnUyc6XG4gICAgICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICAgICAgICB4ID0gc2VnbWVudC54O1xuICAgICAgICAgICAgICAgIHkgPSBzZWdtZW50Lnk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdIJzpcbiAgICAgICAgICAgICAgICB4ID0gc2VnbWVudC54O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnVic6XG4gICAgICAgICAgICAgICAgeSA9IHNlZ21lbnQueTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWRkUG9pbnQoeCwgeSwgc2VnbWVudC5wYXRoU2VnVHlwZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gZW5zdXJlIHBhdGggaXMgYWJzb2x1dGVcbiAgICAgICAgU3ZnLl9zdmdQYXRoVG9BYnNvbHV0ZShwYXRoKTtcblxuICAgICAgICAvLyBnZXQgdG90YWwgbGVuZ3RoXG4gICAgICAgIHRvdGFsID0gcGF0aC5nZXRUb3RhbExlbmd0aCgpO1xuXG4gICAgICAgIC8vIHF1ZXVlIHNlZ21lbnRzXG4gICAgICAgIHNlZ21lbnRzID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXRoLnBhdGhTZWdMaXN0Lm51bWJlck9mSXRlbXM7IGkgKz0gMSlcbiAgICAgICAgICAgIHNlZ21lbnRzLnB1c2gocGF0aC5wYXRoU2VnTGlzdC5nZXRJdGVtKGkpKTtcblxuICAgICAgICBzZWdtZW50c1F1ZXVlID0gc2VnbWVudHMuY29uY2F0KCk7XG5cbiAgICAgICAgLy8gc2FtcGxlIHRocm91Z2ggcGF0aFxuICAgICAgICB3aGlsZSAobGVuZ3RoIDwgdG90YWwpIHtcbiAgICAgICAgICAgIC8vIGdldCBzZWdtZW50IGF0IHBvc2l0aW9uXG4gICAgICAgICAgICBzZWdtZW50SW5kZXggPSBwYXRoLmdldFBhdGhTZWdBdExlbmd0aChsZW5ndGgpO1xuICAgICAgICAgICAgc2VnbWVudCA9IHNlZ21lbnRzW3NlZ21lbnRJbmRleF07XG5cbiAgICAgICAgICAgIC8vIG5ldyBzZWdtZW50XG4gICAgICAgICAgICBpZiAoc2VnbWVudCAhPSBsYXN0U2VnbWVudCkge1xuICAgICAgICAgICAgICAgIHdoaWxlIChzZWdtZW50c1F1ZXVlLmxlbmd0aCAmJiBzZWdtZW50c1F1ZXVlWzBdICE9IHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICAgIGFkZFNlZ21lbnRQb2ludChzZWdtZW50c1F1ZXVlLnNoaWZ0KCkpO1xuXG4gICAgICAgICAgICAgICAgbGFzdFNlZ21lbnQgPSBzZWdtZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhZGQgcG9pbnRzIGluIGJldHdlZW4gd2hlbiBjdXJ2aW5nXG4gICAgICAgICAgICAvLyBUT0RPOiBhZGFwdGl2ZSBzYW1wbGluZ1xuICAgICAgICAgICAgc3dpdGNoIChzZWdtZW50LnBhdGhTZWdUeXBlQXNMZXR0ZXIudG9VcHBlckNhc2UoKSkge1xuXG4gICAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgICAgY2FzZSAnUyc6XG4gICAgICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICAgIGNhc2UgJ0EnOlxuICAgICAgICAgICAgICAgIHBvaW50ID0gcGF0aC5nZXRQb2ludEF0TGVuZ3RoKGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgYWRkUG9pbnQocG9pbnQueCwgcG9pbnQueSwgMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaW5jcmVtZW50IGJ5IHNhbXBsZSB2YWx1ZVxuICAgICAgICAgICAgbGVuZ3RoICs9IHNhbXBsZUxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCByZW1haW5pbmcgc2VnbWVudHMgbm90IHBhc3NlZCBieSBzYW1wbGluZ1xuICAgICAgICBmb3IgKGkgPSAwLCBpbCA9IHNlZ21lbnRzUXVldWUubGVuZ3RoOyBpIDwgaWw7ICsraSlcbiAgICAgICAgICAgIGFkZFNlZ21lbnRQb2ludChzZWdtZW50c1F1ZXVlW2ldKTtcblxuICAgICAgICByZXR1cm4gcG9pbnRzO1xuICAgIH07XG5cbiAgICBTdmcuX3N2Z1BhdGhUb0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICAgICAgICAvLyBodHRwOi8vcGhyb2d6Lm5ldC9jb252ZXJ0LXN2Zy1wYXRoLXRvLWFsbC1hYnNvbHV0ZS1jb21tYW5kc1xuICAgICAgICAvLyBDb3B5cmlnaHQgKGMpIEdhdmluIEtpc3RuZXJcbiAgICAgICAgLy8gaHR0cDovL3Bocm9nei5uZXQvanMvX1JldXNlTGljZW5zZS50eHRcbiAgICAgICAgLy8gTW9kaWZpY2F0aW9uczogdGlkeSBmb3JtYXR0aW5nIGFuZCBuYW1pbmdcbiAgICAgICAgdmFyIHgwLCB5MCwgeDEsIHkxLCB4MiwgeTIsIHNlZ3MgPSBwYXRoLnBhdGhTZWdMaXN0LFxuICAgICAgICAgICAgeCA9IDAsIHkgPSAwLCBsZW4gPSBzZWdzLm51bWJlck9mSXRlbXM7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgdmFyIHNlZyA9IHNlZ3MuZ2V0SXRlbShpKSxcbiAgICAgICAgICAgICAgICBzZWdUeXBlID0gc2VnLnBhdGhTZWdUeXBlQXNMZXR0ZXI7XG5cbiAgICAgICAgICAgIGlmICgvW01MSFZDU1FUQV0vLnRlc3Qoc2VnVHlwZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoJ3gnIGluIHNlZykgeCA9IHNlZy54O1xuICAgICAgICAgICAgICAgIGlmICgneScgaW4gc2VnKSB5ID0gc2VnLnk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgneDEnIGluIHNlZykgeDEgPSB4ICsgc2VnLngxO1xuICAgICAgICAgICAgICAgIGlmICgneDInIGluIHNlZykgeDIgPSB4ICsgc2VnLngyO1xuICAgICAgICAgICAgICAgIGlmICgneTEnIGluIHNlZykgeTEgPSB5ICsgc2VnLnkxO1xuICAgICAgICAgICAgICAgIGlmICgneTInIGluIHNlZykgeTIgPSB5ICsgc2VnLnkyO1xuICAgICAgICAgICAgICAgIGlmICgneCcgaW4gc2VnKSB4ICs9IHNlZy54O1xuICAgICAgICAgICAgICAgIGlmICgneScgaW4gc2VnKSB5ICs9IHNlZy55O1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChzZWdUeXBlKSB7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgICAgICAgICAgc2Vncy5yZXBsYWNlSXRlbShwYXRoLmNyZWF0ZVNWR1BhdGhTZWdNb3ZldG9BYnMoeCwgeSksIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdsJzpcbiAgICAgICAgICAgICAgICAgICAgc2Vncy5yZXBsYWNlSXRlbShwYXRoLmNyZWF0ZVNWR1BhdGhTZWdMaW5ldG9BYnMoeCwgeSksIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICAgICAgICAgICAgc2Vncy5yZXBsYWNlSXRlbShwYXRoLmNyZWF0ZVNWR1BhdGhTZWdMaW5ldG9Ib3Jpem9udGFsQWJzKHgpLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAndic6XG4gICAgICAgICAgICAgICAgICAgIHNlZ3MucmVwbGFjZUl0ZW0ocGF0aC5jcmVhdGVTVkdQYXRoU2VnTGluZXRvVmVydGljYWxBYnMoeSksIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjJzpcbiAgICAgICAgICAgICAgICAgICAgc2Vncy5yZXBsYWNlSXRlbShwYXRoLmNyZWF0ZVNWR1BhdGhTZWdDdXJ2ZXRvQ3ViaWNBYnMoeCwgeSwgeDEsIHkxLCB4MiwgeTIpLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAgICAgIHNlZ3MucmVwbGFjZUl0ZW0ocGF0aC5jcmVhdGVTVkdQYXRoU2VnQ3VydmV0b0N1YmljU21vb3RoQWJzKHgsIHksIHgyLCB5MiksIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdxJzpcbiAgICAgICAgICAgICAgICAgICAgc2Vncy5yZXBsYWNlSXRlbShwYXRoLmNyZWF0ZVNWR1BhdGhTZWdDdXJ2ZXRvUXVhZHJhdGljQWJzKHgsIHksIHgxLCB5MSksIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICd0JzpcbiAgICAgICAgICAgICAgICAgICAgc2Vncy5yZXBsYWNlSXRlbShwYXRoLmNyZWF0ZVNWR1BhdGhTZWdDdXJ2ZXRvUXVhZHJhdGljU21vb3RoQWJzKHgsIHkpLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYSc6XG4gICAgICAgICAgICAgICAgICAgIHNlZ3MucmVwbGFjZUl0ZW0ocGF0aC5jcmVhdGVTVkdQYXRoU2VnQXJjQWJzKHgsIHksIHNlZy5yMSwgc2VnLnIyLCBzZWcuYW5nbGUsIHNlZy5sYXJnZUFyY0ZsYWcsIHNlZy5zd2VlcEZsYWcpLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAneic6XG4gICAgICAgICAgICAgICAgY2FzZSAnWic6XG4gICAgICAgICAgICAgICAgICAgIHggPSB4MDtcbiAgICAgICAgICAgICAgICAgICAgeSA9IHkwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlZ1R5cGUgPT0gJ00nIHx8IHNlZ1R5cGUgPT0gJ20nKSB7XG4gICAgICAgICAgICAgICAgeDAgPSB4O1xuICAgICAgICAgICAgICAgIHkwID0geTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbn0pKCk7XG5cbi8qKiovIH0pLFxuLyogMzAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoaXMgbW9kdWxlIGhhcyBub3cgYmVlbiByZXBsYWNlZCBieSBgTWF0dGVyLkNvbXBvc2l0ZWAuXG4qXG4qIEFsbCB1c2FnZSBzaG91bGQgYmUgbWlncmF0ZWQgdG8gdGhlIGVxdWl2YWxlbnQgZnVuY3Rpb25zIGZvdW5kIG9uIGBNYXR0ZXIuQ29tcG9zaXRlYC5cbiogRm9yIGV4YW1wbGUgYFdvcmxkLmFkZCh3b3JsZCwgYm9keSlgIG5vdyBiZWNvbWVzIGBDb21wb3NpdGUuYWRkKHdvcmxkLCBib2R5KWAuXG4qXG4qIFRoZSBwcm9wZXJ0eSBgd29ybGQuZ3Jhdml0eWAgaGFzIGJlZW4gbW92ZWQgdG8gYGVuZ2luZS5ncmF2aXR5YC5cbipcbiogRm9yIGJhY2stY29tcGF0aWJpbGl0eSBwdXJwb3NlcyB0aGlzIG1vZHVsZSB3aWxsIHJlbWFpbiBhcyBhIGRpcmVjdCBhbGlhcyB0byBgTWF0dGVyLkNvbXBvc2l0ZWAgaW4gdGhlIHNob3J0IHRlcm0gZHVyaW5nIG1pZ3JhdGlvbi5cbiogRXZlbnR1YWxseSB0aGlzIGFsaWFzIG1vZHVsZSB3aWxsIGJlIG1hcmtlZCBhcyBkZXByZWNhdGVkIGFuZCB0aGVuIGxhdGVyIHJlbW92ZWQgaW4gYSBmdXR1cmUgcmVsZWFzZS5cbipcbiogQGNsYXNzIFdvcmxkXG4qL1xuXG52YXIgV29ybGQgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBXb3JsZDtcblxudmFyIENvbXBvc2l0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogU2VlIGFib3ZlLCBhbGlhc2VzIGZvciBiYWNrIGNvbXBhdGliaWxpdHkgb25seVxuICAgICAqL1xuICAgIFdvcmxkLmNyZWF0ZSA9IENvbXBvc2l0ZS5jcmVhdGU7XG4gICAgV29ybGQuYWRkID0gQ29tcG9zaXRlLmFkZDtcbiAgICBXb3JsZC5yZW1vdmUgPSBDb21wb3NpdGUucmVtb3ZlO1xuICAgIFdvcmxkLmNsZWFyID0gQ29tcG9zaXRlLmNsZWFyO1xuICAgIFdvcmxkLmFkZENvbXBvc2l0ZSA9IENvbXBvc2l0ZS5hZGRDb21wb3NpdGU7XG4gICAgV29ybGQuYWRkQm9keSA9IENvbXBvc2l0ZS5hZGRCb2R5O1xuICAgIFdvcmxkLmFkZENvbnN0cmFpbnQgPSBDb21wb3NpdGUuYWRkQ29uc3RyYWludDtcblxufSkoKTtcblxuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTsiLCJpbXBvcnQgR2FtZUVuZ2luZSBmcm9tIFwiLi4vLi4vY29yZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92ZWFibGUge1xyXG5cclxuICAgIGluaXRYO1xyXG4gICAgaW5pdFk7XHJcbiAgICB3aWR0aDtcclxuICAgIGhlaWdodDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcz17fSkge1xyXG4gICAgICAgIHRoaXMuaW5pdFggPSBwcm9wcy54IHwgMDtcclxuICAgICAgICB0aGlzLmluaXRZID0gcHJvcHMueSB8IDA7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHByb3BzLncgfCAxNTtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHByb3BzLmggfCAxNTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlKHByb3BzPXt9KSB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSBuZXcgTW92ZWFibGUocHJvcHMpO1xyXG4gICAgICAgIHJldHVybiBHYW1lRW5naW5lLmdldE1hdHRlcigpLkJvZGllcy5yZWN0YW5nbGUoYm9keS5pbml0WCwgYm9keS5pbml0WSwgYm9keS53aWR0aCwgYm9keS5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBNb3ZlYWJsZSBmcm9tIFwiLi9Nb3ZlYWJsZVwiO1xyXG5pbXBvcnQgR2FtZUVuZ2luZSBmcm9tIFwiLi4vLi4vY29yZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92ZWFibGVTdGFjayB7XHJcblxyXG4gICAgcm93cztcclxuICAgIGluaXRYO1xyXG4gICAgaW5pdFk7XHJcbiAgICBjb2x1bW5zO1xyXG4gICAgY29sdW1uR2FwO1xyXG4gICAgcm93R2FwO1xyXG4gICAgZW50aXR5O1xyXG4gICAgZW50aXRpZXM7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM9e30pIHtcclxuICAgICAgICB0aGlzLnJvd3MgPSBwcm9wcy5yb3cgfHwgMTA7XHJcbiAgICAgICAgdGhpcy5pbml0WCA9IHByb3BzLnggfHwgNDAwO1xyXG4gICAgICAgIHRoaXMuaW5pdFkgPSBwcm9wcy55IHx8IDIwMDtcclxuICAgICAgICB0aGlzLmNvbHVtbnMgPSBwcm9wcy5jb2x1bW5zIHx8IDM7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5HYXAgPSBwcm9wcy5jb2x1bW5HYXAgfHwgMDtcclxuICAgICAgICB0aGlzLnJvd0dhcCA9IHByb3BzLnJvd0dhcCB8fCAwO1xyXG4gICAgICAgIHRoaXMuZW50aXR5ID0gTW92ZWFibGU7XHJcbiAgICAgICAgdGhpcy5lbnRpdGllcyA9IFtdO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIEdhbWVFbmdpbmUuZ2V0TWF0dGVyKCkuQ29tcG9zaXRlcy5zdGFjayhcclxuICAgICAgICAgICAgdGhpcy5pbml0WCxcclxuICAgICAgICAgICAgdGhpcy5pbml0WSxcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLFxyXG4gICAgICAgICAgICB0aGlzLnJvd3MsXHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1uR2FwLFxyXG4gICAgICAgICAgICB0aGlzLnJvd0dhcCxcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVFbnRpdHkuYmluZCh0aGlzKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRW50aXR5KHgsIHkpIHtcclxuICAgICAgICBsZXQgb2JqID0gdGhpcy5lbnRpdHkuY3JlYXRlKHtcclxuICAgICAgICAgICAgeDogeCxcclxuICAgICAgICAgICAgeTogeSxcclxuICAgICAgICAgICAgdzogMjAsXHJcbiAgICAgICAgICAgIGg6IDIwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbnRpdGllcy5wdXNoKG9iaik7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgTWF0dGVyIGZyb20gJ21hdHRlci1qcydcclxuaW1wb3J0IE1vdmVhYmxlU3RhY2sgZnJvbSBcIi4vV29ybGQvR2FtZUVudGl0aWVzL01vdmVhYmxlU3RhY2tcIjtcclxuLy9pbXBvcnQgTWF0dGVyIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbWF0dGVyLWpzL2J1aWxkL21hdHRlci5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUVuZ2luZSB7XHJcblxyXG4gICAgc3RhdGljIG1hdHRlcjtcclxuXHJcbiAgICBlbmdpbmU7XHJcbiAgICB3b3JsZDtcclxuICAgIHJ1bm5lcjtcclxuXHJcbiAgICByZW5kZXJlcjtcclxuICAgIGRlYnVnUmVuZGVyT3B0aW9ucztcclxuXHJcbiAgICBzdGFnZTtcclxuICAgIHN0YWdlV2lkdGg7XHJcbiAgICBzdGFnZUhlaWdodDtcclxuXHJcbiAgICBncm91cHM7XHJcblxyXG4gICAgaGVybztcclxuICAgIGNoYWluO1xyXG4gICAgY2hhaW5Db21wb3NpdGU7XHJcbiAgICBjaGFpbk1haW5Db25zdHJhaW50O1xyXG4gICAgY2hhaW5NYXhMZW5naHQ7XHJcbiAgICBjaGFpbk1pbkxlbmdodDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih3PTgwMCwgaD02MDApIHtcclxuICAgICAgICB0aGlzLnN0YWdlV2lkdGggPSB3O1xyXG4gICAgICAgIHRoaXMuc3RhZ2VIZWlnaHQgPSBoO1xyXG4gICAgICAgIHRoaXMuc3RhZ2UgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLnN0YWdlV2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5zdGFnZUhlaWdodCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2hhaW5NaW5MZW5naHQgPSAxO1xyXG4gICAgICAgIHRoaXMuY2hhaW5NYXhMZW5naHQgPSAyMDA7XHJcbiAgICAgICAgdGhpcy5kZWJ1Z1JlbmRlck9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNob3dBbmdsZUluZGljYXRvcjogdHJ1ZSxcclxuICAgICAgICAgICAgLy9zaG93Q29sbGlzaW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgLy9zaG93VmVsb2NpdHk6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ncm91cHMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIndvcmxkXCIsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOiBbXSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0TWF0dGVyKCkge1xyXG4gICAgICAgIGlmIChHYW1lRW5naW5lLm1hdHRlciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIEdhbWVFbmdpbmUubWF0dGVyID0gTWF0dGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gR2FtZUVuZ2luZS5tYXR0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICAgdGhpcy5lbmdpbmUgPSBNYXR0ZXIuRW5naW5lLmNyZWF0ZSgpO1xyXG4gICAgICAgICB0aGlzLndvcmxkID0gdGhpcy5lbmdpbmUud29ybGQ7XHJcbiAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgIHRoaXMucnVuKCk7XHJcblxyXG4gICAgICAgICB0aGlzLmVudGl0aWVzKCk7XHJcblxyXG4gICAgICAgICB0aGlzLmNvbnRyb2xzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBNYXR0ZXIuUmVuZGVyLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JhbmVHYW1lXCIpLFxyXG4gICAgICAgICAgICBlbmdpbmU6IHRoaXMuZW5naW5lLFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7Li4udGhpcy5zdGFnZSwgLi4udGhpcy5kZWJ1Z1JlbmRlck9wdGlvbnN9LFxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgTWF0dGVyLlJlbmRlci5ydW4odGhpcy5yZW5kZXJlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIHRoaXMucnVubmVyID0gTWF0dGVyLlJ1bm5lci5jcmVhdGUoKTtcclxuICAgICAgICBNYXR0ZXIuUnVubmVyLnJ1bih0aGlzLnJ1bm5lciwgdGhpcy5lbmdpbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGl0aWVzKCkge1xyXG4gICAgICAgIHZhciBncm91cCA9IE1hdHRlci5Cb2R5Lm5leHRHcm91cCh0cnVlKTtcclxuXHJcbiAgICAgICAgbGV0IG1vdmVhYmxlU3RhY2swMSA9IG5ldyBNb3ZlYWJsZVN0YWNrKHt9KTtcclxuICAgICAgICBsZXQgZmxvb3IgPSBNYXR0ZXIuQm9kaWVzLnJlY3RhbmdsZSh0aGlzLnN0YWdlV2lkdGgvMiwgdGhpcy5zdGFnZUhlaWdodC0xMCwgdGhpcy5zdGFnZVdpZHRoLCAxMCwgeyBpc1N0YXRpYzogdHJ1ZSB9KTtcclxuXHJcbiAgICAgICAgTWF0dGVyLkNvbXBvc2l0ZS5hZGQodGhpcy53b3JsZCwgW1xyXG4gICAgICAgICAgICBtb3ZlYWJsZVN0YWNrMDEsXHJcbiAgICAgICAgICAgIGZsb29yXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHZhciBzdGFydFggPSAyMDAsIHN0YXJ0WSA9IDUwLCBsYXN0WCA9IHN0YXJ0WCwgbGFzdFkgPSBzdGFydFksXHJcbiAgICAgICAgICAgIGNoYWluTGlua0hlaWdodD0zMCxcclxuICAgICAgICAgICAgY2hhaW5MaW5rV2lkdGg9NTtcclxuXHJcbiAgICAgICAgdGhpcy5oZXJvID0gTWF0dGVyLkJvZGllcy5jaXJjbGUoc3RhcnRYLCBzdGFydFksIDMwLCB7IGNvbGxpc2lvbkZpbHRlcjogeyBncm91cDogZ3JvdXAgfSwgY2hhbWZlcjogMCB9KTtcclxuICAgICAgICB0aGlzLmhlcm8uaXNTdGF0aWMgPSB0cnVlO1xyXG5cclxuICAgICAgICB2YXIgY2hhaW5IYW5kID0gTWF0dGVyLkJvZGllcy5jaXJjbGUoc3RhcnRYLCBzdGFydFksIDEwLCB7IGNvbGxpc2lvbkZpbHRlcjogeyBncm91cDogZ3JvdXAgfSwgY2hhbWZlcjogMCwgZGVuc2l0eTogMC4xIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNoYWluID0gTWF0dGVyLkNvbXBvc2l0ZXMuc3RhY2soc3RhcnRYKzE1LCBzdGFydFkrMTUsIDE1LCAxLCAxLCAxLCBmdW5jdGlvbih4LCB5KSB7XHJcbiAgICAgICAgICAgIGxhc3RYID0geDsgbGFzdFkgPSB5O1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0dGVyLkJvZGllcy5yZWN0YW5nbGUoeCAtIDMwLCB5IC0zMCwgY2hhaW5MaW5rSGVpZ2h0LCBjaGFpbkxpbmtXaWR0aCwgeyBjb2xsaXNpb25GaWx0ZXI6IHsgZ3JvdXA6IGdyb3VwIH0sIGNoYW1mZXI6IDAuMSwgZGVuc2l0eTogMC4xIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgdmFyIGNoYWluQW5jaG9yID0gdGhpcy5jaGFpbi5ib2RpZXNbMF07XHJcbiAgICAgICAgdGhpcy5jaGFpbi5ib2RpZXMucHVzaChjaGFpbkhhbmQpO1xyXG5cclxuICAgICAgICB0aGlzLmNoYWluQ29tcG9zaXRlID0gTWF0dGVyLkNvbXBvc2l0ZXMuY2hhaW4odGhpcy5jaGFpbiAsIDAuNCwgMCwgLTAuNCwgMCwgeyBsZW5ndGg6IDAuMDAxIH0pO1xyXG4gICAgICAgIHRoaXMuY2hhaW5NYWluQ29uc3RyYWludCA9IE1hdHRlci5Db25zdHJhaW50LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGJvZHlBOiB0aGlzLmhlcm8sXHJcbiAgICAgICAgICAgIGJvZHlCOiBjaGFpbkFuY2hvclxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBNYXR0ZXIuQ29tcG9zaXRlLmFkZCh0aGlzLndvcmxkLCBbXHJcbiAgICAgICAgICAgIHRoaXMuaGVybyxcclxuICAgICAgICAgICAgdGhpcy5jaGFpbixcclxuICAgICAgICAgICAgdGhpcy5jaGFpbk1haW5Db25zdHJhaW50XHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udHJvbHMoKSB7XHJcbiAgICAgICAgY29uc3Qgc3BlZWQgPSAzO1xyXG4gICAgICAgIGNvbnN0IG11c2N1bGFyID0gMjtcclxuICAgICAgICBjb25zdCByb3RhdGlvbiA9IDAuMDE7XHJcblxyXG4gICAgICAgIGNvbnN0IGtleUhhbmRsZXJzID0ge1xyXG4gICAgICAgICAgICBLZXlROiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBNYXR0ZXIuQm9keS5yb3RhdGUodGhpcy5oZXJvLCByb3RhdGlvbik7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBLZXlFOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBNYXR0ZXIuQm9keS5yb3RhdGUodGhpcy5oZXJvLCAtcm90YXRpb24pO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgS2V5VzogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9NYXR0ZXIuQm9keS50cmFuc2xhdGUodGhpcy5oZXJvLCB7eDowLCB5OiAtbXVzY3VsYXJ9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhaW4uYm9kaWVzLmZvckVhY2goZnVuY3Rpb24oYm9keSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkuZGVuc2l0eSArPSAwLjAwMTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhib2R5KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBLZXlTOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL01hdHRlci5Cb2R5LnRyYW5zbGF0ZSh0aGlzLmhlcm8sIHt4OjAsIHk6ICttdXNjdWxhcn0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFpbi5ib2RpZXMuZm9yRWFjaChmdW5jdGlvbihib2R5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keS5kZW5zaXR5IC09IDAuMDAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJvZHkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBLZXlEOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBNYXR0ZXIuQm9keS50cmFuc2xhdGUodGhpcy5oZXJvLCB7eDpzcGVlZCwgeTogMH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBLZXlBOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBNYXR0ZXIuQm9keS50cmFuc2xhdGUodGhpcy5oZXJvLCB7eDotc3BlZWQsIHk6MH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3Qga2V5c0Rvd24gPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBrZXlzRG93bi5hZGQoZXZlbnQuY29kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAga2V5c0Rvd24uZGVsZXRlKGV2ZW50LmNvZGUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBNYXR0ZXIuRXZlbnRzLm9uKHRoaXMuZW5naW5lLCBcImJlZm9yZVVwZGF0ZVwiLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIFsuLi5rZXlzRG93bl0uZm9yRWFjaChrID0+IHtcclxuICAgICAgICAgICAgICAgIGtleUhhbmRsZXJzW2tdPy4oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubW91c2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3VzZSgpIHtcclxuICAgICAgICB2YXIgbW91c2UgPSBNYXR0ZXIuTW91c2UuY3JlYXRlKHRoaXMucmVuZGVyZXIuY2FudmFzKSxcclxuICAgICAgICAgICAgbW91c2VDb25zdHJhaW50ID0gTWF0dGVyLk1vdXNlQ29uc3RyYWludC5jcmVhdGUodGhpcy5lbmdpbmUsIHtcclxuICAgICAgICAgICAgICAgIG1vdXNlOiBtb3VzZSxcclxuICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGlmZm5lc3M6IDAuMSxcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIE1hdHRlci5Db21wb3NpdGUuYWRkKHRoaXMud29ybGQsIG1vdXNlQ29uc3RyYWludCk7XHJcblxyXG4gICAgICAgIC8vIGtlZXAgdGhlIG1vdXNlIGluIHN5bmMgd2l0aCByZW5kZXJpbmdcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLm1vdXNlID0gTWF0dGVyLm1vdXNlO1xyXG5cclxuICAgICAgICAvLyBmaXQgdGhlIHJlbmRlciB2aWV3cG9ydCB0byB0aGUgc2NlbmVcclxuICAgICAgICBNYXR0ZXIuUmVuZGVyLmxvb2tBdCh0aGlzLnJlbmRlcmVyLCB7XHJcbiAgICAgICAgICAgIG1pbjogeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgICAgICAgIG1heDogeyB4OiB0aGlzLnN0YWdlV2lkdGgsIHk6IHRoaXMuc3RhZ2VIZWlnaHQgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEdhbWVFbmdpbmUgZnJvbSBcIi4vR2FtZUVuZ2luZS9jb3JlLmpzXCI7XHJcblxyXG5jb25zdCBnYW1lID0gbmV3IEdhbWVFbmdpbmUoMTkyMCwgMTA4MCk7XHJcbmdhbWUuaW5pdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==