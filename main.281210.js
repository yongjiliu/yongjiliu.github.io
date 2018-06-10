/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(436);

	var tags = __webpack_require__(438);
	var archiveInner = __webpack_require__(439);
	var tools = __webpack_require__(440);
	var browser = __webpack_require__(424);
	var fixPage = __webpack_require__(441);
	var mobile = __webpack_require__(422);
	var viewer = __webpack_require__(14);
	var ins = __webpack_require__(451);

	$(function () {
		viewer.init();
		archiveInner.init();
		fixPage.init();
		tags.init();
		// todo: resize destrop
		if (browser.versions.mobile === true && $(window).width() < 800) {
			mobile.init();
		} else {
			tools.init();
			$('.js-smart-menu').click(function (e) {
				e.stopPropagation();
				tools.show($(this).data('idx'));
			});
			$('.left-col,.mid-col').click(function () {
				tools.hide();
			});
		}

		if (window.location.pathname === '/instagram/') {
			ins.init();
		}
	});

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(442);
	__webpack_require__(443);

	var fancyInit = function () {
		var isFancy = $(".isFancy");
		if (isFancy.length != 0) {
			var imgArr = $(".article-inner img");
			for (var i = 0, len = imgArr.length; i < len; i++) {
				var src = imgArr.eq(i).attr("src");
				var title = imgArr.eq(i).attr("alt");
				imgArr.eq(i).replaceWith("<a href='" + src + "' title='" + title + "' rel='fancy-group' class='fancy-ctn fancybox'><img src='" + src + "' title='" + title + "'></a>");
			}
			$(".article-inner .fancy-ctn").fancybox();
		}
	};

	module.exports = {
		init: fancyInit

		/*var PhotoSwipe = require('../photoSwipe/photoswipe')
	 var PhotoSwipeUI_Default = require('../photoSwipe/photoswipe-ui-default')
	 require('../photoSwipe/default-skin/default-skin.scss')
	 require('../photoSwipe/photoswipe.scss')
	 
	 module.exports = {
	 	init: function() {
	 		var pswpElement = document.querySelectorAll('.pswp')[0];
	 		// build items array
	 		var imgArr = $(".body-wrap img");
	 		var items = []
	 		for(var i=0,len=imgArr.length;i<len;i++){
	 			var img = imgArr.eq(i).attr('data-idx', i)
	 			var src = img.attr("data-target") || img.attr("src");
	 			var title = img.attr("alt");
	 			items.push({
	 				src: src,
	 				w: img.width(),
	 				h: img.height(),
	 				title: title
	 			})
	 		}
	 
	 		// Initializes and opens PhotoSwipe
	 		
	 		imgArr.click(function(e) {
	 			var idx = $(this).attr('data-idx')
	 			console.log(idx)
	 			var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, {
	 				index: parseInt(idx)
	 			});
	 			gallery.init()
	 		})
	 		
	 	}
	 }*/

	};

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

	var e = function () {
	    function r(e, r, n) {
	        return r || n ? String.fromCharCode(r || n) : u[e] || e;
	    }
	    function n(e) {
	        return p[e];
	    }
	    var t = /&quot;|&lt;|&gt;|&amp;|&nbsp;|&apos;|&#(\d+);|&#(\d+)/g,
	        o = /['<> "&]/g,
	        u = {
	        "&quot;": '"',
	        "&lt;": "<",
	        "&gt;": ">",
	        "&amp;": "&",
	        "&nbsp;": " "
	    },
	        c = /\u00a0/g,
	        a = /<br\s*\/?>/gi,
	        i = /\r?\n/g,
	        f = /\s/g,
	        p = {};
	    for (var s in u) p[u[s]] = s;
	    return u["&apos;"] = "'", p["'"] = "&#39;", {
	        encode: function (e) {
	            return e ? ("" + e).replace(o, n).replace(i, "<br/>").replace(f, "&nbsp;") : "";
	        },
	        decode: function (e) {
	            return e ? ("" + e).replace(a, "\n").replace(t, r).replace(c, " ") : "";
	        },
	        encodeBase16: function (e) {
	            if (!e) return e;
	            e += "";
	            for (var r = [], n = 0, t = e.length; t > n; n++) r.push(e.charCodeAt(n).toString(16).toUpperCase());
	            return r.join("");
	        },
	        encodeBase16forJSON: function (e) {
	            if (!e) return e;
	            e = e.replace(/[\u4E00-\u9FBF]/gi, function (e) {
	                return escape(e).replace("%u", "\\u");
	            });
	            for (var r = [], n = 0, t = e.length; t > n; n++) r.push(e.charCodeAt(n).toString(16).toUpperCase());
	            return r.join("");
	        },
	        decodeBase16: function (e) {
	            if (!e) return e;
	            e += "";
	            for (var r = [], n = 0, t = e.length; t > n; n += 2) r.push(String.fromCharCode("0x" + e.slice(n, n + 2)));
	            return r.join("");
	        },
	        encodeObject: function (r) {
	            if (r instanceof Array) for (var n = 0, t = r.length; t > n; n++) r[n] = e.encodeObject(r[n]);else if ("object" == typeof r) for (var o in r) r[o] = e.encodeObject(r[o]);else if ("string" == typeof r) return e.encode(r);
	            return r;
	        }
	    };
	}();

	module.exports = e;

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

	var Util = __webpack_require__(28);
	var _isShow = false;
	var $menu, $tag, $aboutme, $friends;
	var hasInnerArchive;
	var ctn, radio, scaleW, idx, basicwrap;

	//第一步 -- 初始化
	var reset = function () {
		//设定窗口比率
		radio = document.body.scrollHeight / document.body.scrollWidth;
		//设定一页的宽度
		scaleW = document.body.scrollWidth;
		//设定初始的索引值
		idx = 0;
	};
	//第一步 -- 组合
	var combine = function () {
		if ($tag) {
			document.getElementById("js-mobile-tagcloud").innerHTML = $tag.innerHTML;
		}
		if ($aboutme) {
			document.getElementById("js-mobile-aboutme").innerHTML = Util.decode($aboutme.innerHTML);
		}
		if ($friends) {
			document.getElementById("js-mobile-friends").innerHTML = $friends.innerHTML;
		}
		document.getElementById("js-mobile-menu").innerHTML = $menu.innerHTML;
	};
	//第三步 -- 根据数据渲染DOM
	var renderDOM = function () {
		//生成节点
		var $viewer = document.createElement("div");
		$viewer.id = "viewer";
		$viewer.className = "hide";
		$menu = document.getElementsByClassName("header-menu")[0];
		$tag = document.getElementById("js-tagcloud");
		$aboutme = document.getElementById("js-aboutme");
		$friends = document.getElementById("js-friends");

		// 插入“全部文章”
		hasInnerArchive = !!$('.js-archives-frame').length;
		if (hasInnerArchive) {
			var str = $('.js-smart-menu').first().html();
			$('.header-menu ul').append('<li><a href="/archives">' + str + '</a></li>');
		}

		var menuStr = '<span class="viewer-title">菜单</span><div class="viewer-div menu" id="js-mobile-menu"></div>';
		var tagStr = $tag ? '<span class="viewer-title">标签</span><div class="viewer-div tagcloud" id="js-mobile-tagcloud"></div>' : "";
		var friendsStr = $friends ? '<span class="viewer-title">友情链接</span><div class="viewer-div friends" id="js-mobile-friends"></div>' : "";
		var aboutmeStr = $aboutme ? '<span class="viewer-title">关于我</span><div class="viewer-div aboutme" id="js-mobile-aboutme"></div>' : "";

		$viewer.innerHTML = '<div id="viewer-box">\
		<div class="viewer-box-l">\
			<div class="viewer-box-wrap">' + menuStr + aboutmeStr + friendsStr + tagStr + '</div>\
		</div>\
		<div class="viewer-box-r"></div>\
		</div>';

		//主要图片节点
		document.getElementsByTagName("body")[0].appendChild($viewer);
		var wrap = document.getElementById("viewer-box");
		basicwrap = wrap;
		wrap.style.height = document.body.scrollHeight + 'px';
	};

	var show = function (target, idx) {
		document.getElementById("viewer").className = "";
		setTimeout(function () {
			basicwrap.className = "anm-swipe";
		}, 0);
		_isShow = true;
		document.ontouchstart = function (e) {
			if (e.target.tagName != "A") {
				return false;
			}
		};
	};

	var hide = function () {
		document.getElementById("viewer-box").className = "";
		_isShow = false;
		document.ontouchstart = function () {
			return true;
		};
	};

	//第四步 -- 绑定 DOM 事件
	var bindDOM = function () {
		var scaleW = scaleW;

		//滑动隐藏
		document.getElementById("viewer-box").addEventListener("webkitTransitionEnd", function () {

			if (_isShow == false) {
				document.getElementById("viewer").className = "hide";
				_isShow = true;
			} else {}
		}, false);

		//点击展示和隐藏
		ctn.addEventListener("touchend", function () {
			show();
		}, false);

		var $right = document.getElementsByClassName("viewer-box-r")[0];
		var touchStartTime;
		var touchEndTime;
		$right.addEventListener("touchstart", function () {
			touchStartTime = +new Date();
		}, false);
		$right.addEventListener("touchend", function () {
			touchEndTime = +new Date();
			if (touchEndTime - touchStartTime < 300) {
				hide();
			}
			touchStartTime = 0;
			touchEndTime = 0;
		}, false);

		//滚动样式
		var $overlay = $("#mobile-nav .overlay");
		var $header = $(".js-mobile-header");
		window.onscroll = function () {
			var scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
			if (scrollTop >= 69) {
				$overlay.addClass("fixed");
			} else {
				$overlay.removeClass("fixed");
			}
			if (scrollTop >= 160) {
				$header.removeClass("hide").addClass("fixed");
			} else {
				$header.addClass("hide").removeClass("fixed");
			}
		};
		$header[0].addEventListener("touchstart", function () {
			$('html, body').animate({ scrollTop: 0 }, 'slow');
		}, false);
	};

	module.exports = {
		init: function () {
			//构造函数需要的参数
			ctn = document.getElementsByClassName("slider-trigger")[0];
			//构造四步
			reset();
			renderDOM();
			combine();
			bindDOM();
		}
	};

/***/ }),

/***/ 424:
/***/ (function(module, exports) {

	var browser = {
					versions: function () {
									var u = window.navigator.userAgent;
									return {
													trident: u.indexOf('Trident') > -1, //IE内核
													presto: u.indexOf('Presto') > -1, //opera内核
													webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
													gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
													mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
													ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
													android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
													iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者安卓QQ浏览器
													iPad: u.indexOf('iPad') > -1, //是否为iPad
													webApp: u.indexOf('Safari') == -1, //是否为web应用程序，没有头部与底部
													weixin: u.indexOf('MicroMessenger') == -1 //是否为微信浏览器
									};
					}()
	};

	module.exports = browser;

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v1.9.0
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2013-1-14
	 */
	(function (window, undefined) {
		"use strict";

		var
		// A central reference to the root jQuery(document)
		rootjQuery,


		// The deferred used on DOM ready
		readyList,


		// Use the correct document accordingly with window argument (sandbox)
		document = window.document,
		    location = window.location,


		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,


		// Map over the $ in case of overwrite
		_$ = window.$,


		// [[Class]] -> type pairs
		class2type = {},


		// List of deleted data cache ids, so we can reuse them
		core_deletedIds = [],
		    core_version = "1.9.0",


		// Save a reference to some core methods
		core_concat = core_deletedIds.concat,
		    core_push = core_deletedIds.push,
		    core_slice = core_deletedIds.slice,
		    core_indexOf = core_deletedIds.indexOf,
		    core_toString = class2type.toString,
		    core_hasOwn = class2type.hasOwnProperty,
		    core_trim = core_version.trim,


		// Define a local copy of jQuery
		jQuery = function (selector, context) {
			// The jQuery object is actually just the init constructor 'enhanced'
			return new jQuery.fn.init(selector, context, rootjQuery);
		},


		// Used for matching numbers
		core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,


		// Used for splitting on whitespace
		core_rnotwhite = /\S+/g,


		// Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,


		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,


		// Match a standalone tag
		rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,


		// JSON RegExp
		rvalidchars = /^[\],:{}\s]*$/,
		    rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
		    rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		    rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,


		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		    rdashAlpha = /-([\da-z])/gi,


		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function (all, letter) {
			return letter.toUpperCase();
		},


		// The ready event handler and self cleanup method
		DOMContentLoaded = function () {
			if (document.addEventListener) {
				document.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
				jQuery.ready();
			} else if (document.readyState === "complete") {
				// we're here because readyState === "complete" in oldIE
				// which is good enough for us to call the dom ready!
				document.detachEvent("onreadystatechange", DOMContentLoaded);
				jQuery.ready();
			}
		};

		jQuery.fn = jQuery.prototype = {
			// The current version of jQuery being used
			jquery: core_version,

			constructor: jQuery,
			init: function (selector, context, rootjQuery) {
				var match, elem;

				// HANDLE: $(""), $(null), $(undefined), $(false)
				if (!selector) {
					return this;
				}

				// Handle HTML strings
				if (typeof selector === "string") {
					if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
						// Assume that strings that start and end with <> are HTML and skip the regex check
						match = [null, selector, null];
					} else {
						match = rquickExpr.exec(selector);
					}

					// Match html or make sure no context is specified for #id
					if (match && (match[1] || !context)) {

						// HANDLE: $(html) -> $(array)
						if (match[1]) {
							context = context instanceof jQuery ? context[0] : context;

							// scripts is true for back-compat
							jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));

							// HANDLE: $(html, props)
							if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
								for (match in context) {
									// Properties of context are called as methods if possible
									if (jQuery.isFunction(this[match])) {
										this[match](context[match]);

										// ...and otherwise set as attributes
									} else {
										this.attr(match, context[match]);
									}
								}
							}

							return this;

							// HANDLE: $(#id)
						} else {
							elem = document.getElementById(match[2]);

							// Check parentNode to catch when Blackberry 4.6 returns
							// nodes that are no longer in the document #6963
							if (elem && elem.parentNode) {
								// Handle the case where IE and Opera return items
								// by name instead of ID
								if (elem.id !== match[2]) {
									return rootjQuery.find(selector);
								}

								// Otherwise, we inject the element directly into the jQuery object
								this.length = 1;
								this[0] = elem;
							}

							this.context = document;
							this.selector = selector;
							return this;
						}

						// HANDLE: $(expr, $(...))
					} else if (!context || context.jquery) {
						return (context || rootjQuery).find(selector);

						// HANDLE: $(expr, context)
						// (which is just equivalent to: $(context).find(expr)
					} else {
						return this.constructor(context).find(selector);
					}

					// HANDLE: $(DOMElement)
				} else if (selector.nodeType) {
					this.context = this[0] = selector;
					this.length = 1;
					return this;

					// HANDLE: $(function)
					// Shortcut for document ready
				} else if (jQuery.isFunction(selector)) {
					return rootjQuery.ready(selector);
				}

				if (selector.selector !== undefined) {
					this.selector = selector.selector;
					this.context = selector.context;
				}

				return jQuery.makeArray(selector, this);
			},

			// Start with an empty selector
			selector: "",

			// The default length of a jQuery object is 0
			length: 0,

			// The number of elements contained in the matched element set
			size: function () {
				return this.length;
			},

			toArray: function () {
				return core_slice.call(this);
			},

			// Get the Nth element in the matched element set OR
			// Get the whole matched element set as a clean array
			get: function (num) {
				return num == null ?

				// Return a 'clean' array
				this.toArray() :

				// Return just the object
				num < 0 ? this[this.length + num] : this[num];
			},

			// Take an array of elements and push it onto the stack
			// (returning the new matched element set)
			pushStack: function (elems) {

				// Build a new jQuery matched element set
				var ret = jQuery.merge(this.constructor(), elems);

				// Add the old object onto the stack (as a reference)
				ret.prevObject = this;
				ret.context = this.context;

				// Return the newly-formed element set
				return ret;
			},

			// Execute a callback for every element in the matched set.
			// (You can seed the arguments with an array of args, but this is
			// only used internally.)
			each: function (callback, args) {
				return jQuery.each(this, callback, args);
			},

			ready: function (fn) {
				// Add the callback
				jQuery.ready.promise().done(fn);

				return this;
			},

			slice: function () {
				return this.pushStack(core_slice.apply(this, arguments));
			},

			first: function () {
				return this.eq(0);
			},

			last: function () {
				return this.eq(-1);
			},

			eq: function (i) {
				var len = this.length,
				    j = +i + (i < 0 ? len : 0);
				return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
			},

			map: function (callback) {
				return this.pushStack(jQuery.map(this, function (elem, i) {
					return callback.call(elem, i, elem);
				}));
			},

			end: function () {
				return this.prevObject || this.constructor(null);
			},

			// For internal use only.
			// Behaves like an Array's method, not like a jQuery method.
			push: core_push,
			sort: [].sort,
			splice: [].splice
		};

		// Give the init function the jQuery prototype for later instantiation
		jQuery.fn.init.prototype = jQuery.fn;

		jQuery.extend = jQuery.fn.extend = function () {
			var options,
			    name,
			    src,
			    copy,
			    copyIsArray,
			    clone,
			    target = arguments[0] || {},
			    i = 1,
			    length = arguments.length,
			    deep = false;

			// Handle a deep copy situation
			if (typeof target === "boolean") {
				deep = target;
				target = arguments[1] || {};
				// skip the boolean and the target
				i = 2;
			}

			// Handle case when target is a string or something (possible in deep copy)
			if (typeof target !== "object" && !jQuery.isFunction(target)) {
				target = {};
			}

			// extend jQuery itself if only one argument is passed
			if (length === i) {
				target = this;
				--i;
			}

			for (; i < length; i++) {
				// Only deal with non-null/undefined values
				if ((options = arguments[i]) != null) {
					// Extend the base object
					for (name in options) {
						src = target[name];
						copy = options[name];

						// Prevent never-ending loop
						if (target === copy) {
							continue;
						}

						// Recurse if we're merging plain objects or arrays
						if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && jQuery.isArray(src) ? src : [];
							} else {
								clone = src && jQuery.isPlainObject(src) ? src : {};
							}

							// Never move original objects, clone them
							target[name] = jQuery.extend(deep, clone, copy);

							// Don't bring in undefined values
						} else if (copy !== undefined) {
							target[name] = copy;
						}
					}
				}
			}

			// Return the modified object
			return target;
		};

		jQuery.extend({
			noConflict: function (deep) {
				if (window.$ === jQuery) {
					window.$ = _$;
				}

				if (deep && window.jQuery === jQuery) {
					window.jQuery = _jQuery;
				}

				return jQuery;
			},

			// Is the DOM ready to be used? Set to true once it occurs.
			isReady: false,

			// A counter to track how many items to wait for before
			// the ready event fires. See #6781
			readyWait: 1,

			// Hold (or release) the ready event
			holdReady: function (hold) {
				if (hold) {
					jQuery.readyWait++;
				} else {
					jQuery.ready(true);
				}
			},

			// Handle when the DOM is ready
			ready: function (wait) {

				// Abort if there are pending holds or we're already ready
				if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
					return;
				}

				// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
				if (!document.body) {
					return setTimeout(jQuery.ready);
				}

				// Remember that the DOM is ready
				jQuery.isReady = true;

				// If a normal DOM Ready event fired, decrement, and wait if need be
				if (wait !== true && --jQuery.readyWait > 0) {
					return;
				}

				// If there are functions bound, to execute
				readyList.resolveWith(document, [jQuery]);

				// Trigger any bound ready events
				if (jQuery.fn.trigger) {
					jQuery(document).trigger("ready").off("ready");
				}
			},

			// See test/unit/core.js for details concerning isFunction.
			// Since version 1.3, DOM methods and functions like alert
			// aren't supported. They return false on IE (#2968).
			isFunction: function (obj) {
				return jQuery.type(obj) === "function";
			},

			isArray: Array.isArray || function (obj) {
				return jQuery.type(obj) === "array";
			},

			isWindow: function (obj) {
				return obj != null && obj == obj.window;
			},

			isNumeric: function (obj) {
				return !isNaN(parseFloat(obj)) && isFinite(obj);
			},

			type: function (obj) {
				if (obj == null) {
					return String(obj);
				}
				return typeof obj === "object" || typeof obj === "function" ? class2type[core_toString.call(obj)] || "object" : typeof obj;
			},

			isPlainObject: function (obj) {
				// Must be an Object.
				// Because of IE, we also have to check the presence of the constructor property.
				// Make sure that DOM nodes and window objects don't pass through, as well
				if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
					return false;
				}

				try {
					// Not own constructor property must be Object
					if (obj.constructor && !core_hasOwn.call(obj, "constructor") && !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
						return false;
					}
				} catch (e) {
					// IE8,9 Will throw exceptions on certain host objects #9897
					return false;
				}

				// Own properties are enumerated firstly, so to speed up,
				// if last one is own, then all properties are own.

				var key;
				for (key in obj) {}

				return key === undefined || core_hasOwn.call(obj, key);
			},

			isEmptyObject: function (obj) {
				var name;
				for (name in obj) {
					return false;
				}
				return true;
			},

			error: function (msg) {
				throw new Error(msg);
			},

			// data: string of html
			// context (optional): If specified, the fragment will be created in this context, defaults to document
			// keepScripts (optional): If true, will include scripts passed in the html string
			parseHTML: function (data, context, keepScripts) {
				if (!data || typeof data !== "string") {
					return null;
				}
				if (typeof context === "boolean") {
					keepScripts = context;
					context = false;
				}
				context = context || document;

				var parsed = rsingleTag.exec(data),
				    scripts = !keepScripts && [];

				// Single tag
				if (parsed) {
					return [context.createElement(parsed[1])];
				}

				parsed = jQuery.buildFragment([data], context, scripts);
				if (scripts) {
					jQuery(scripts).remove();
				}
				return jQuery.merge([], parsed.childNodes);
			},

			parseJSON: function (data) {
				// Attempt to parse using the native JSON parser first
				if (window.JSON && window.JSON.parse) {
					return window.JSON.parse(data);
				}

				if (data === null) {
					return data;
				}

				if (typeof data === "string") {

					// Make sure leading/trailing whitespace is removed (IE can't handle it)
					data = jQuery.trim(data);

					if (data) {
						// Make sure the incoming data is actual JSON
						// Logic borrowed from http://json.org/json2.js
						if (rvalidchars.test(data.replace(rvalidescape, "@").replace(rvalidtokens, "]").replace(rvalidbraces, ""))) {

							return new Function("return " + data)();
						}
					}
				}

				jQuery.error("Invalid JSON: " + data);
			},

			// Cross-browser xml parsing
			parseXML: function (data) {
				var xml, tmp;
				if (!data || typeof data !== "string") {
					return null;
				}
				try {
					if (window.DOMParser) {
						// Standard
						tmp = new DOMParser();
						xml = tmp.parseFromString(data, "text/xml");
					} else {
						// IE
						xml = new ActiveXObject("Microsoft.XMLDOM");
						xml.async = "false";
						xml.loadXML(data);
					}
				} catch (e) {
					xml = undefined;
				}
				if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
					jQuery.error("Invalid XML: " + data);
				}
				return xml;
			},

			noop: function () {},

			// Evaluates a script in a global context
			// Workarounds based on findings by Jim Driscoll
			// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
			globalEval: function (data) {
				if (data && jQuery.trim(data)) {
					// We use execScript on Internet Explorer
					// We use an anonymous function so that context is window
					// rather than jQuery in Firefox
					(window.execScript || function (data) {
						window["eval"].call(window, data);
					})(data);
				}
			},

			// Convert dashed to camelCase; used by the css and data modules
			// Microsoft forgot to hump their vendor prefix (#9572)
			camelCase: function (string) {
				return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
			},

			nodeName: function (elem, name) {
				return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
			},

			// args is for internal usage only
			each: function (obj, callback, args) {
				var value,
				    i = 0,
				    length = obj.length,
				    isArray = isArraylike(obj);

				if (args) {
					if (isArray) {
						for (; i < length; i++) {
							value = callback.apply(obj[i], args);

							if (value === false) {
								break;
							}
						}
					} else {
						for (i in obj) {
							value = callback.apply(obj[i], args);

							if (value === false) {
								break;
							}
						}
					}

					// A special, fast, case for the most common use of each
				} else {
					if (isArray) {
						for (; i < length; i++) {
							value = callback.call(obj[i], i, obj[i]);

							if (value === false) {
								break;
							}
						}
					} else {
						for (i in obj) {
							value = callback.call(obj[i], i, obj[i]);

							if (value === false) {
								break;
							}
						}
					}
				}

				return obj;
			},

			// Use native String.trim function wherever possible
			trim: core_trim && !core_trim.call("\uFEFF\xA0") ? function (text) {
				return text == null ? "" : core_trim.call(text);
			} :

			// Otherwise use our own trimming functionality
			function (text) {
				return text == null ? "" : (text + "").replace(rtrim, "");
			},

			// results is for internal usage only
			makeArray: function (arr, results) {
				var ret = results || [];

				if (arr != null) {
					if (isArraylike(Object(arr))) {
						jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
					} else {
						core_push.call(ret, arr);
					}
				}

				return ret;
			},

			inArray: function (elem, arr, i) {
				var len;

				if (arr) {
					if (core_indexOf) {
						return core_indexOf.call(arr, elem, i);
					}

					len = arr.length;
					i = i ? i < 0 ? Math.max(0, len + i) : i : 0;

					for (; i < len; i++) {
						// Skip accessing in sparse arrays
						if (i in arr && arr[i] === elem) {
							return i;
						}
					}
				}

				return -1;
			},

			merge: function (first, second) {
				var l = second.length,
				    i = first.length,
				    j = 0;

				if (typeof l === "number") {
					for (; j < l; j++) {
						first[i++] = second[j];
					}
				} else {
					while (second[j] !== undefined) {
						first[i++] = second[j++];
					}
				}

				first.length = i;

				return first;
			},

			grep: function (elems, callback, inv) {
				var retVal,
				    ret = [],
				    i = 0,
				    length = elems.length;
				inv = !!inv;

				// Go through the array, only saving the items
				// that pass the validator function
				for (; i < length; i++) {
					retVal = !!callback(elems[i], i);
					if (inv !== retVal) {
						ret.push(elems[i]);
					}
				}

				return ret;
			},

			// arg is for internal usage only
			map: function (elems, callback, arg) {
				var value,
				    i = 0,
				    length = elems.length,
				    isArray = isArraylike(elems),
				    ret = [];

				// Go through the array, translating each of the items to their
				if (isArray) {
					for (; i < length; i++) {
						value = callback(elems[i], i, arg);

						if (value != null) {
							ret[ret.length] = value;
						}
					}

					// Go through every key on the object,
				} else {
					for (i in elems) {
						value = callback(elems[i], i, arg);

						if (value != null) {
							ret[ret.length] = value;
						}
					}
				}

				// Flatten any nested arrays
				return core_concat.apply([], ret);
			},

			// A global GUID counter for objects
			guid: 1,

			// Bind a function to a context, optionally partially applying any
			// arguments.
			proxy: function (fn, context) {
				var tmp, args, proxy;

				if (typeof context === "string") {
					tmp = fn[context];
					context = fn;
					fn = tmp;
				}

				// Quick check to determine if target is callable, in the spec
				// this throws a TypeError, but we will just return undefined.
				if (!jQuery.isFunction(fn)) {
					return undefined;
				}

				// Simulated bind
				args = core_slice.call(arguments, 2);
				proxy = function () {
					return fn.apply(context || this, args.concat(core_slice.call(arguments)));
				};

				// Set the guid of unique handler to the same of original handler, so it can be removed
				proxy.guid = fn.guid = fn.guid || jQuery.guid++;

				return proxy;
			},

			// Multifunctional method to get and set values of a collection
			// The value/s can optionally be executed if it's a function
			access: function (elems, fn, key, value, chainable, emptyGet, raw) {
				var i = 0,
				    length = elems.length,
				    bulk = key == null;

				// Sets many values
				if (jQuery.type(key) === "object") {
					chainable = true;
					for (i in key) {
						jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
					}

					// Sets one value
				} else if (value !== undefined) {
					chainable = true;

					if (!jQuery.isFunction(value)) {
						raw = true;
					}

					if (bulk) {
						// Bulk operations run against the entire set
						if (raw) {
							fn.call(elems, value);
							fn = null;

							// ...except when executing function values
						} else {
							bulk = fn;
							fn = function (elem, key, value) {
								return bulk.call(jQuery(elem), value);
							};
						}
					}

					if (fn) {
						for (; i < length; i++) {
							fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
						}
					}
				}

				return chainable ? elems :

				// Gets
				bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet;
			},

			now: function () {
				return new Date().getTime();
			}
		});

		jQuery.ready.promise = function (obj) {
			if (!readyList) {

				readyList = jQuery.Deferred();

				// Catch cases where $(document).ready() is called after the browser event has already occurred.
				// we once tried to use readyState "interactive" here, but it caused issues like the one
				// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
				if (document.readyState === "complete") {
					// Handle it asynchronously to allow scripts the opportunity to delay ready
					setTimeout(jQuery.ready);

					// Standards-based browsers support DOMContentLoaded
				} else if (document.addEventListener) {
					// Use the handy event callback
					document.addEventListener("DOMContentLoaded", DOMContentLoaded, false);

					// A fallback to window.onload, that will always work
					window.addEventListener("load", jQuery.ready, false);

					// If IE event model is used
				} else {
					// Ensure firing before onload, maybe late but safe also for iframes
					document.attachEvent("onreadystatechange", DOMContentLoaded);

					// A fallback to window.onload, that will always work
					window.attachEvent("onload", jQuery.ready);

					// If IE and not a frame
					// continually check to see if the document is ready
					var top = false;

					try {
						top = window.frameElement == null && document.documentElement;
					} catch (e) {}

					if (top && top.doScroll) {
						(function doScrollCheck() {
							if (!jQuery.isReady) {

								try {
									// Use the trick by Diego Perini
									// http://javascript.nwbox.com/IEContentLoaded/
									top.doScroll("left");
								} catch (e) {
									return setTimeout(doScrollCheck, 50);
								}

								// and execute any waiting functions
								jQuery.ready();
							}
						})();
					}
				}
			}
			return readyList.promise(obj);
		};

		// Populate the class2type map
		jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
			class2type["[object " + name + "]"] = name.toLowerCase();
		});

		function isArraylike(obj) {
			var length = obj.length,
			    type = jQuery.type(obj);

			if (jQuery.isWindow(obj)) {
				return false;
			}

			if (obj.nodeType === 1 && length) {
				return true;
			}

			return type === "array" || type !== "function" && (length === 0 || typeof length === "number" && length > 0 && length - 1 in obj);
		}

		// All jQuery objects should point back to these
		rootjQuery = jQuery(document);
		// String to Object options format cache
		var optionsCache = {};

		// Convert String-formatted options into Object-formatted ones and store in cache
		function createOptions(options) {
			var object = optionsCache[options] = {};
			jQuery.each(options.match(core_rnotwhite) || [], function (_, flag) {
				object[flag] = true;
			});
			return object;
		}

		/*
	  * Create a callback list using the following parameters:
	  *
	  *	options: an optional list of space-separated options that will change how
	  *			the callback list behaves or a more traditional option object
	  *
	  * By default a callback list will act like an event callback list and can be
	  * "fired" multiple times.
	  *
	  * Possible options:
	  *
	  *	once:			will ensure the callback list can only be fired once (like a Deferred)
	  *
	  *	memory:			will keep track of previous values and will call any callback added
	  *					after the list has been fired right away with the latest "memorized"
	  *					values (like a Deferred)
	  *
	  *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	  *
	  *	stopOnFalse:	interrupt callings when a callback returns false
	  *
	  */
		jQuery.Callbacks = function (options) {

			// Convert options from String-formatted to Object-formatted if needed
			// (we check in cache first)
			options = typeof options === "string" ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);

			var // Last fire value (for non-forgettable lists)
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to know if list is currently firing
			firing,

			// First callback to fire (used internally by add and fireWith)
			firingStart,

			// End of the loop when firing
			firingLength,

			// Index of currently firing callback (modified by remove if needed)
			firingIndex,

			// Actual callback list
			list = [],

			// Stack of fire calls for repeatable lists
			stack = !options.once && [],

			// Fire callbacks
			fire = function (data) {
				memory = options.memory && data;
				fired = true;
				firingIndex = firingStart || 0;
				firingStart = 0;
				firingLength = list.length;
				firing = true;
				for (; list && firingIndex < firingLength; firingIndex++) {
					if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
						memory = false; // To prevent further calls using add
						break;
					}
				}
				firing = false;
				if (list) {
					if (stack) {
						if (stack.length) {
							fire(stack.shift());
						}
					} else if (memory) {
						list = [];
					} else {
						self.disable();
					}
				}
			},

			// Actual Callbacks object
			self = {
				// Add a callback or a collection of callbacks to the list
				add: function () {
					if (list) {
						// First, we save the current length
						var start = list.length;
						(function add(args) {
							jQuery.each(args, function (_, arg) {
								var type = jQuery.type(arg);
								if (type === "function") {
									if (!options.unique || !self.has(arg)) {
										list.push(arg);
									}
								} else if (arg && arg.length && type !== "string") {
									// Inspect recursively
									add(arg);
								}
							});
						})(arguments);
						// Do we need to add the callbacks to the
						// current firing batch?
						if (firing) {
							firingLength = list.length;
							// With memory, if we're not firing then
							// we should call right away
						} else if (memory) {
							firingStart = start;
							fire(memory);
						}
					}
					return this;
				},
				// Remove a callback from the list
				remove: function () {
					if (list) {
						jQuery.each(arguments, function (_, arg) {
							var index;
							while ((index = jQuery.inArray(arg, list, index)) > -1) {
								list.splice(index, 1);
								// Handle firing indexes
								if (firing) {
									if (index <= firingLength) {
										firingLength--;
									}
									if (index <= firingIndex) {
										firingIndex--;
									}
								}
							}
						});
					}
					return this;
				},
				// Control if a given callback is in the list
				has: function (fn) {
					return jQuery.inArray(fn, list) > -1;
				},
				// Remove all callbacks from the list
				empty: function () {
					list = [];
					return this;
				},
				// Have the list do nothing anymore
				disable: function () {
					list = stack = memory = undefined;
					return this;
				},
				// Is it disabled?
				disabled: function () {
					return !list;
				},
				// Lock the list in its current state
				lock: function () {
					stack = undefined;
					if (!memory) {
						self.disable();
					}
					return this;
				},
				// Is it locked?
				locked: function () {
					return !stack;
				},
				// Call all callbacks with the given context and arguments
				fireWith: function (context, args) {
					args = args || [];
					args = [context, args.slice ? args.slice() : args];
					if (list && (!fired || stack)) {
						if (firing) {
							stack.push(args);
						} else {
							fire(args);
						}
					}
					return this;
				},
				// Call all the callbacks with the given arguments
				fire: function () {
					self.fireWith(this, arguments);
					return this;
				},
				// To know if the callbacks have already been called at least once
				fired: function () {
					return !!fired;
				}
			};

			return self;
		};
		jQuery.extend({

			Deferred: function (func) {
				var tuples = [
				// action, add listener, listener list, final state
				["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]],
				    state = "pending",
				    promise = {
					state: function () {
						return state;
					},
					always: function () {
						deferred.done(arguments).fail(arguments);
						return this;
					},
					then: function () /* fnDone, fnFail, fnProgress */{
						var fns = arguments;
						return jQuery.Deferred(function (newDefer) {
							jQuery.each(tuples, function (i, tuple) {
								var action = tuple[0],
								    fn = jQuery.isFunction(fns[i]) && fns[i];
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[tuple[1]](function () {
									var returned = fn && fn.apply(this, arguments);
									if (returned && jQuery.isFunction(returned.promise)) {
										returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
									} else {
										newDefer[action + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
									}
								});
							});
							fns = null;
						}).promise();
					},
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function (obj) {
						return obj != null ? jQuery.extend(obj, promise) : promise;
					}
				},
				    deferred = {};

				// Keep pipe for back-compat
				promise.pipe = promise.then;

				// Add list-specific methods
				jQuery.each(tuples, function (i, tuple) {
					var list = tuple[2],
					    stateString = tuple[3];

					// promise[ done | fail | progress ] = list.add
					promise[tuple[1]] = list.add;

					// Handle state
					if (stateString) {
						list.add(function () {
							// state = [ resolved | rejected ]
							state = stateString;

							// [ reject_list | resolve_list ].disable; progress_list.lock
						}, tuples[i ^ 1][2].disable, tuples[2][2].lock);
					}

					// deferred[ resolve | reject | notify ]
					deferred[tuple[0]] = function () {
						deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
						return this;
					};
					deferred[tuple[0] + "With"] = list.fireWith;
				});

				// Make the deferred a promise
				promise.promise(deferred);

				// Call given func if any
				if (func) {
					func.call(deferred, deferred);
				}

				// All done!
				return deferred;
			},

			// Deferred helper
			when: function (subordinate /* , ..., subordinateN */) {
				var i = 0,
				    resolveValues = core_slice.call(arguments),
				    length = resolveValues.length,


				// the count of uncompleted subordinates
				remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0,


				// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),


				// Update function for both resolve and progress values
				updateFunc = function (i, contexts, values) {
					return function (value) {
						contexts[i] = this;
						values[i] = arguments.length > 1 ? core_slice.call(arguments) : value;
						if (values === progressValues) {
							deferred.notifyWith(contexts, values);
						} else if (! --remaining) {
							deferred.resolveWith(contexts, values);
						}
					};
				},
				    progressValues,
				    progressContexts,
				    resolveContexts;

				// add listeners to Deferred subordinates; treat others as resolved
				if (length > 1) {
					progressValues = new Array(length);
					progressContexts = new Array(length);
					resolveContexts = new Array(length);
					for (; i < length; i++) {
						if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
							resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
						} else {
							--remaining;
						}
					}
				}

				// if we're not waiting on anything, resolve the master
				if (!remaining) {
					deferred.resolveWith(resolveContexts, resolveValues);
				}

				return deferred.promise();
			}
		});
		jQuery.support = function () {

			var support,
			    all,
			    a,
			    select,
			    opt,
			    input,
			    fragment,
			    eventName,
			    isSupported,
			    i,
			    div = document.createElement("div");

			// Setup
			div.setAttribute("className", "t");
			div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

			// Support tests won't run in some limited or non-browser environments
			all = div.getElementsByTagName("*");
			a = div.getElementsByTagName("a")[0];
			if (!all || !a || !all.length) {
				return {};
			}

			// First batch of tests
			select = document.createElement("select");
			opt = select.appendChild(document.createElement("option"));
			input = div.getElementsByTagName("input")[0];

			a.style.cssText = "top:1px;float:left;opacity:.5";
			support = {
				// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
				getSetAttribute: div.className !== "t",

				// IE strips leading whitespace when .innerHTML is used
				leadingWhitespace: div.firstChild.nodeType === 3,

				// Make sure that tbody elements aren't automatically inserted
				// IE will insert them into empty tables
				tbody: !div.getElementsByTagName("tbody").length,

				// Make sure that link elements get serialized correctly by innerHTML
				// This requires a wrapper element in IE
				htmlSerialize: !!div.getElementsByTagName("link").length,

				// Get the style information from getAttribute
				// (IE uses .cssText instead)
				style: /top/.test(a.getAttribute("style")),

				// Make sure that URLs aren't manipulated
				// (IE normalizes it by default)
				hrefNormalized: a.getAttribute("href") === "/a",

				// Make sure that element opacity exists
				// (IE uses filter instead)
				// Use a regex to work around a WebKit issue. See #5145
				opacity: /^0.5/.test(a.style.opacity),

				// Verify style float existence
				// (IE uses styleFloat instead of cssFloat)
				cssFloat: !!a.style.cssFloat,

				// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
				checkOn: !!input.value,

				// Make sure that a selected-by-default option has a working selected property.
				// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
				optSelected: opt.selected,

				// Tests for enctype support on a form (#6743)
				enctype: !!document.createElement("form").enctype,

				// Makes sure cloning an html5 element does not cause problems
				// Where outerHTML is undefined, this still works
				html5Clone: document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>",

				// jQuery.support.boxModel DEPRECATED in 1.8 since we don't support Quirks Mode
				boxModel: document.compatMode === "CSS1Compat",

				// Will be defined later
				deleteExpando: true,
				noCloneEvent: true,
				inlineBlockNeedsLayout: false,
				shrinkWrapBlocks: false,
				reliableMarginRight: true,
				boxSizingReliable: true,
				pixelPosition: false
			};

			// Make sure checked status is properly cloned
			input.checked = true;
			support.noCloneChecked = input.cloneNode(true).checked;

			// Make sure that the options inside disabled selects aren't marked as disabled
			// (WebKit marks them as disabled)
			select.disabled = true;
			support.optDisabled = !opt.disabled;

			// Support: IE<9
			try {
				delete div.test;
			} catch (e) {
				support.deleteExpando = false;
			}

			// Check if we can trust getAttribute("value")
			input = document.createElement("input");
			input.setAttribute("value", "");
			support.input = input.getAttribute("value") === "";

			// Check if an input maintains its value after becoming a radio
			input.value = "t";
			input.setAttribute("type", "radio");
			support.radioValue = input.value === "t";

			// #11217 - WebKit loses check when the name is after the checked attribute
			input.setAttribute("checked", "t");
			input.setAttribute("name", "t");

			fragment = document.createDocumentFragment();
			fragment.appendChild(input);

			// Check if a disconnected checkbox will retain its checked
			// value of true after appended to the DOM (IE6/7)
			support.appendChecked = input.checked;

			// WebKit doesn't clone checked state correctly in fragments
			support.checkClone = fragment.cloneNode(true).cloneNode(true).lastChild.checked;

			// Support: IE<9
			// Opera does not clone events (and typeof div.attachEvent === undefined).
			// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
			if (div.attachEvent) {
				div.attachEvent("onclick", function () {
					support.noCloneEvent = false;
				});

				div.cloneNode(true).click();
			}

			// Support: IE<9 (lack submit/change bubble), Firefox 17+ (lack focusin event)
			// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP), test/csp.php
			for (i in { submit: true, change: true, focusin: true }) {
				div.setAttribute(eventName = "on" + i, "t");

				support[i + "Bubbles"] = eventName in window || div.attributes[eventName].expando === false;
			}

			div.style.backgroundClip = "content-box";
			div.cloneNode(true).style.backgroundClip = "";
			support.clearCloneStyle = div.style.backgroundClip === "content-box";

			// Run tests that need a body at doc ready
			jQuery(function () {
				var container,
				    marginDiv,
				    tds,
				    divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
				    body = document.getElementsByTagName("body")[0];

				if (!body) {
					// Return for frameset docs that don't have a body
					return;
				}

				container = document.createElement("div");
				container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";

				body.appendChild(container).appendChild(div);

				// Support: IE8
				// Check if table cells still have offsetWidth/Height when they are set
				// to display:none and there are still other visible table cells in a
				// table row; if so, offsetWidth/Height are not reliable for use when
				// determining if an element has been hidden directly using
				// display:none (it is still safe to use offsets if a parent element is
				// hidden; don safety goggles and see bug #4512 for more information).
				div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
				tds = div.getElementsByTagName("td");
				tds[0].style.cssText = "padding:0;margin:0;border:0;display:none";
				isSupported = tds[0].offsetHeight === 0;

				tds[0].style.display = "";
				tds[1].style.display = "none";

				// Support: IE8
				// Check if empty table cells still have offsetWidth/Height
				support.reliableHiddenOffsets = isSupported && tds[0].offsetHeight === 0;

				// Check box-sizing and margin behavior
				div.innerHTML = "";
				div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
				support.boxSizing = div.offsetWidth === 4;
				support.doesNotIncludeMarginInBodyOffset = body.offsetTop !== 1;

				// Use window.getComputedStyle because jsdom on node.js will break without it.
				if (window.getComputedStyle) {
					support.pixelPosition = (window.getComputedStyle(div, null) || {}).top !== "1%";
					support.boxSizingReliable = (window.getComputedStyle(div, null) || { width: "4px" }).width === "4px";

					// Check if div with explicit width and no margin-right incorrectly
					// gets computed margin-right based on width of container. (#3333)
					// Fails in WebKit before Feb 2011 nightlies
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					marginDiv = div.appendChild(document.createElement("div"));
					marginDiv.style.cssText = div.style.cssText = divReset;
					marginDiv.style.marginRight = marginDiv.style.width = "0";
					div.style.width = "1px";

					support.reliableMarginRight = !parseFloat((window.getComputedStyle(marginDiv, null) || {}).marginRight);
				}

				if (typeof div.style.zoom !== "undefined") {
					// Support: IE<8
					// Check if natively block-level elements act like inline-block
					// elements when setting their display to 'inline' and giving
					// them layout
					div.innerHTML = "";
					div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
					support.inlineBlockNeedsLayout = div.offsetWidth === 3;

					// Support: IE6
					// Check if elements with layout shrink-wrap their children
					div.style.display = "block";
					div.innerHTML = "<div></div>";
					div.firstChild.style.width = "5px";
					support.shrinkWrapBlocks = div.offsetWidth !== 3;

					// Prevent IE 6 from affecting layout for positioned elements #11048
					// Prevent IE from shrinking the body in IE 7 mode #12869
					body.style.zoom = 1;
				}

				body.removeChild(container);

				// Null elements to avoid leaks in IE
				container = div = tds = marginDiv = null;
			});

			// Null elements to avoid leaks in IE
			all = select = fragment = opt = a = input = null;

			return support;
		}();

		var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		    rmultiDash = /([A-Z])/g;

		function internalData(elem, name, data, pvt /* Internal Use Only */) {
			if (!jQuery.acceptData(elem)) {
				return;
			}

			var thisCache,
			    ret,
			    internalKey = jQuery.expando,
			    getByName = typeof name === "string",


			// We have to handle DOM nodes and JS objects differently because IE6-7
			// can't GC object references properly across the DOM-JS boundary
			isNode = elem.nodeType,


			// Only DOM nodes need the global jQuery cache; JS object data is
			// attached directly to the object so GC can occur automatically
			cache = isNode ? jQuery.cache : elem,


			// Only defining an ID for JS objects if its cache already exists allows
			// the code to shortcut on the same path as a DOM node with no cache
			id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;

			// Avoid doing any more work than we need to when trying to get data on an
			// object that has no data at all
			if ((!id || !cache[id] || !pvt && !cache[id].data) && getByName && data === undefined) {
				return;
			}

			if (!id) {
				// Only DOM nodes need a new unique ID for each element since their data
				// ends up in the global cache
				if (isNode) {
					elem[internalKey] = id = core_deletedIds.pop() || jQuery.guid++;
				} else {
					id = internalKey;
				}
			}

			if (!cache[id]) {
				cache[id] = {};

				// Avoids exposing jQuery metadata on plain JS objects when the object
				// is serialized using JSON.stringify
				if (!isNode) {
					cache[id].toJSON = jQuery.noop;
				}
			}

			// An object can be passed to jQuery.data instead of a key/value pair; this gets
			// shallow copied over onto the existing cache
			if (typeof name === "object" || typeof name === "function") {
				if (pvt) {
					cache[id] = jQuery.extend(cache[id], name);
				} else {
					cache[id].data = jQuery.extend(cache[id].data, name);
				}
			}

			thisCache = cache[id];

			// jQuery data() is stored in a separate object inside the object's internal data
			// cache in order to avoid key collisions between internal data and user-defined
			// data.
			if (!pvt) {
				if (!thisCache.data) {
					thisCache.data = {};
				}

				thisCache = thisCache.data;
			}

			if (data !== undefined) {
				thisCache[jQuery.camelCase(name)] = data;
			}

			// Check for both converted-to-camel and non-converted data property names
			// If a data property was specified
			if (getByName) {

				// First Try to find as-is property data
				ret = thisCache[name];

				// Test for null|undefined property data
				if (ret == null) {

					// Try to find the camelCased property
					ret = thisCache[jQuery.camelCase(name)];
				}
			} else {
				ret = thisCache;
			}

			return ret;
		}

		function internalRemoveData(elem, name, pvt /* For internal use only */) {
			if (!jQuery.acceptData(elem)) {
				return;
			}

			var thisCache,
			    i,
			    l,
			    isNode = elem.nodeType,


			// See jQuery.data for more information
			cache = isNode ? jQuery.cache : elem,
			    id = isNode ? elem[jQuery.expando] : jQuery.expando;

			// If there is already no cache entry for this object, there is no
			// purpose in continuing
			if (!cache[id]) {
				return;
			}

			if (name) {

				thisCache = pvt ? cache[id] : cache[id].data;

				if (thisCache) {

					// Support array or space separated string names for data keys
					if (!jQuery.isArray(name)) {

						// try the string as a key before any manipulation
						if (name in thisCache) {
							name = [name];
						} else {

							// split the camel cased version by spaces unless a key with the spaces exists
							name = jQuery.camelCase(name);
							if (name in thisCache) {
								name = [name];
							} else {
								name = name.split(" ");
							}
						}
					} else {
						// If "name" is an array of keys...
						// When data is initially created, via ("key", "val") signature,
						// keys will be converted to camelCase.
						// Since there is no way to tell _how_ a key was added, remove
						// both plain key and camelCase key. #12786
						// This will only penalize the array argument path.
						name = name.concat(jQuery.map(name, jQuery.camelCase));
					}

					for (i = 0, l = name.length; i < l; i++) {
						delete thisCache[name[i]];
					}

					// If there is no data left in the cache, we want to continue
					// and let the cache object itself get destroyed
					if (!(pvt ? isEmptyDataObject : jQuery.isEmptyObject)(thisCache)) {
						return;
					}
				}
			}

			// See jQuery.data for more information
			if (!pvt) {
				delete cache[id].data;

				// Don't destroy the parent cache unless the internal data object
				// had been the only thing left in it
				if (!isEmptyDataObject(cache[id])) {
					return;
				}
			}

			// Destroy the cache
			if (isNode) {
				jQuery.cleanData([elem], true);

				// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
			} else if (jQuery.support.deleteExpando || cache != cache.window) {
				delete cache[id];

				// When all else fails, null
			} else {
				cache[id] = null;
			}
		}

		jQuery.extend({
			cache: {},

			// Unique for each copy of jQuery on the page
			// Non-digits removed to match rinlinejQuery
			expando: "jQuery" + (core_version + Math.random()).replace(/\D/g, ""),

			// The following elements throw uncatchable exceptions if you
			// attempt to add expando properties to them.
			noData: {
				"embed": true,
				// Ban all objects except for Flash (which handle expandos)
				"object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
				"applet": true
			},

			hasData: function (elem) {
				elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
				return !!elem && !isEmptyDataObject(elem);
			},

			data: function (elem, name, data) {
				return internalData(elem, name, data, false);
			},

			removeData: function (elem, name) {
				return internalRemoveData(elem, name, false);
			},

			// For internal use only.
			_data: function (elem, name, data) {
				return internalData(elem, name, data, true);
			},

			_removeData: function (elem, name) {
				return internalRemoveData(elem, name, true);
			},

			// A method for determining if a DOM node can handle the data expando
			acceptData: function (elem) {
				var noData = elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()];

				// nodes accept data unless otherwise specified; rejection can be conditional
				return !noData || noData !== true && elem.getAttribute("classid") === noData;
			}
		});

		jQuery.fn.extend({
			data: function (key, value) {
				var attrs,
				    name,
				    elem = this[0],
				    i = 0,
				    data = null;

				// Gets all values
				if (key === undefined) {
					if (this.length) {
						data = jQuery.data(elem);

						if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
							attrs = elem.attributes;
							for (; i < attrs.length; i++) {
								name = attrs[i].name;

								if (!name.indexOf("data-")) {
									name = jQuery.camelCase(name.substring(5));

									dataAttr(elem, name, data[name]);
								}
							}
							jQuery._data(elem, "parsedAttrs", true);
						}
					}

					return data;
				}

				// Sets multiple values
				if (typeof key === "object") {
					return this.each(function () {
						jQuery.data(this, key);
					});
				}

				return jQuery.access(this, function (value) {

					if (value === undefined) {
						// Try to fetch any internally stored data first
						return elem ? dataAttr(elem, key, jQuery.data(elem, key)) : null;
					}

					this.each(function () {
						jQuery.data(this, key, value);
					});
				}, null, value, arguments.length > 1, null, true);
			},

			removeData: function (key) {
				return this.each(function () {
					jQuery.removeData(this, key);
				});
			}
		});

		function dataAttr(elem, key, data) {
			// If nothing was found internally, try to fetch any
			// data from the HTML5 data-* attribute
			if (data === undefined && elem.nodeType === 1) {

				var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();

				data = elem.getAttribute(name);

				if (typeof data === "string") {
					try {
						data = data === "true" ? true : data === "false" ? false : data === "null" ? null :
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
					} catch (e) {}

					// Make sure we set the data so it isn't changed later
					jQuery.data(elem, key, data);
				} else {
					data = undefined;
				}
			}

			return data;
		}

		// checks a cache object for emptiness
		function isEmptyDataObject(obj) {
			var name;
			for (name in obj) {

				// if the public data object is empty, the private is still empty
				if (name === "data" && jQuery.isEmptyObject(obj[name])) {
					continue;
				}
				if (name !== "toJSON") {
					return false;
				}
			}

			return true;
		}
		jQuery.extend({
			queue: function (elem, type, data) {
				var queue;

				if (elem) {
					type = (type || "fx") + "queue";
					queue = jQuery._data(elem, type);

					// Speed up dequeue by getting out quickly if this is just a lookup
					if (data) {
						if (!queue || jQuery.isArray(data)) {
							queue = jQuery._data(elem, type, jQuery.makeArray(data));
						} else {
							queue.push(data);
						}
					}
					return queue || [];
				}
			},

			dequeue: function (elem, type) {
				type = type || "fx";

				var queue = jQuery.queue(elem, type),
				    startLength = queue.length,
				    fn = queue.shift(),
				    hooks = jQuery._queueHooks(elem, type),
				    next = function () {
					jQuery.dequeue(elem, type);
				};

				// If the fx queue is dequeued, always remove the progress sentinel
				if (fn === "inprogress") {
					fn = queue.shift();
					startLength--;
				}

				hooks.cur = fn;
				if (fn) {

					// Add a progress sentinel to prevent the fx queue from being
					// automatically dequeued
					if (type === "fx") {
						queue.unshift("inprogress");
					}

					// clear up the last queue stop function
					delete hooks.stop;
					fn.call(elem, next, hooks);
				}

				if (!startLength && hooks) {
					hooks.empty.fire();
				}
			},

			// not intended for public consumption - generates a queueHooks object, or returns the current one
			_queueHooks: function (elem, type) {
				var key = type + "queueHooks";
				return jQuery._data(elem, key) || jQuery._data(elem, key, {
					empty: jQuery.Callbacks("once memory").add(function () {
						jQuery._removeData(elem, type + "queue");
						jQuery._removeData(elem, key);
					})
				});
			}
		});

		jQuery.fn.extend({
			queue: function (type, data) {
				var setter = 2;

				if (typeof type !== "string") {
					data = type;
					type = "fx";
					setter--;
				}

				if (arguments.length < setter) {
					return jQuery.queue(this[0], type);
				}

				return data === undefined ? this : this.each(function () {
					var queue = jQuery.queue(this, type, data);

					// ensure a hooks for this queue
					jQuery._queueHooks(this, type);

					if (type === "fx" && queue[0] !== "inprogress") {
						jQuery.dequeue(this, type);
					}
				});
			},
			dequeue: function (type) {
				return this.each(function () {
					jQuery.dequeue(this, type);
				});
			},
			// Based off of the plugin by Clint Helfers, with permission.
			// http://blindsignals.com/index.php/2009/07/jquery-delay/
			delay: function (time, type) {
				time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
				type = type || "fx";

				return this.queue(type, function (next, hooks) {
					var timeout = setTimeout(next, time);
					hooks.stop = function () {
						clearTimeout(timeout);
					};
				});
			},
			clearQueue: function (type) {
				return this.queue(type || "fx", []);
			},
			// Get a promise resolved when queues of a certain type
			// are emptied (fx is the type by default)
			promise: function (type, obj) {
				var tmp,
				    count = 1,
				    defer = jQuery.Deferred(),
				    elements = this,
				    i = this.length,
				    resolve = function () {
					if (! --count) {
						defer.resolveWith(elements, [elements]);
					}
				};

				if (typeof type !== "string") {
					obj = type;
					type = undefined;
				}
				type = type || "fx";

				while (i--) {
					tmp = jQuery._data(elements[i], type + "queueHooks");
					if (tmp && tmp.empty) {
						count++;
						tmp.empty.add(resolve);
					}
				}
				resolve();
				return defer.promise(obj);
			}
		});
		var nodeHook,
		    boolHook,
		    rclass = /[\t\r\n]/g,
		    rreturn = /\r/g,
		    rfocusable = /^(?:input|select|textarea|button|object)$/i,
		    rclickable = /^(?:a|area)$/i,
		    rboolean = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
		    ruseDefault = /^(?:checked|selected)$/i,
		    getSetAttribute = jQuery.support.getSetAttribute,
		    getSetInput = jQuery.support.input;

		jQuery.fn.extend({
			attr: function (name, value) {
				return jQuery.access(this, jQuery.attr, name, value, arguments.length > 1);
			},

			removeAttr: function (name) {
				return this.each(function () {
					jQuery.removeAttr(this, name);
				});
			},

			prop: function (name, value) {
				return jQuery.access(this, jQuery.prop, name, value, arguments.length > 1);
			},

			removeProp: function (name) {
				name = jQuery.propFix[name] || name;
				return this.each(function () {
					// try/catch handles cases where IE balks (such as removing a property on window)
					try {
						this[name] = undefined;
						delete this[name];
					} catch (e) {}
				});
			},

			addClass: function (value) {
				var classes,
				    elem,
				    cur,
				    clazz,
				    j,
				    i = 0,
				    len = this.length,
				    proceed = typeof value === "string" && value;

				if (jQuery.isFunction(value)) {
					return this.each(function (j) {
						jQuery(this).addClass(value.call(this, j, this.className));
					});
				}

				if (proceed) {
					// The disjunction here is for better compressibility (see removeClass)
					classes = (value || "").match(core_rnotwhite) || [];

					for (; i < len; i++) {
						elem = this[i];
						cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");

						if (cur) {
							j = 0;
							while (clazz = classes[j++]) {
								if (cur.indexOf(" " + clazz + " ") < 0) {
									cur += clazz + " ";
								}
							}
							elem.className = jQuery.trim(cur);
						}
					}
				}

				return this;
			},

			removeClass: function (value) {
				var classes,
				    elem,
				    cur,
				    clazz,
				    j,
				    i = 0,
				    len = this.length,
				    proceed = arguments.length === 0 || typeof value === "string" && value;

				if (jQuery.isFunction(value)) {
					return this.each(function (j) {
						jQuery(this).removeClass(value.call(this, j, this.className));
					});
				}
				if (proceed) {
					classes = (value || "").match(core_rnotwhite) || [];

					for (; i < len; i++) {
						elem = this[i];
						// This expression is here for better compressibility (see addClass)
						cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");

						if (cur) {
							j = 0;
							while (clazz = classes[j++]) {
								// Remove *all* instances
								while (cur.indexOf(" " + clazz + " ") >= 0) {
									cur = cur.replace(" " + clazz + " ", " ");
								}
							}
							elem.className = value ? jQuery.trim(cur) : "";
						}
					}
				}

				return this;
			},

			toggleClass: function (value, stateVal) {
				var type = typeof value,
				    isBool = typeof stateVal === "boolean";

				if (jQuery.isFunction(value)) {
					return this.each(function (i) {
						jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
					});
				}

				return this.each(function () {
					if (type === "string") {
						// toggle individual class names
						var className,
						    i = 0,
						    self = jQuery(this),
						    state = stateVal,
						    classNames = value.match(core_rnotwhite) || [];

						while (className = classNames[i++]) {
							// check each className given, space separated list
							state = isBool ? state : !self.hasClass(className);
							self[state ? "addClass" : "removeClass"](className);
						}

						// Toggle whole class name
					} else if (type === "undefined" || type === "boolean") {
						if (this.className) {
							// store className if set
							jQuery._data(this, "__className__", this.className);
						}

						// If the element has a class name or if we're passed "false",
						// then remove the whole classname (if there was one, the above saved it).
						// Otherwise bring back whatever was previously saved (if anything),
						// falling back to the empty string if nothing was stored.
						this.className = this.className || value === false ? "" : jQuery._data(this, "__className__") || "";
					}
				});
			},

			hasClass: function (selector) {
				var className = " " + selector + " ",
				    i = 0,
				    l = this.length;
				for (; i < l; i++) {
					if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
						return true;
					}
				}

				return false;
			},

			val: function (value) {
				var hooks,
				    ret,
				    isFunction,
				    elem = this[0];

				if (!arguments.length) {
					if (elem) {
						hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

						if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
							return ret;
						}

						ret = elem.value;

						return typeof ret === "string" ?
						// handle most common string cases
						ret.replace(rreturn, "") :
						// handle cases where value is null/undef or number
						ret == null ? "" : ret;
					}

					return;
				}

				isFunction = jQuery.isFunction(value);

				return this.each(function (i) {
					var val,
					    self = jQuery(this);

					if (this.nodeType !== 1) {
						return;
					}

					if (isFunction) {
						val = value.call(this, i, self.val());
					} else {
						val = value;
					}

					// Treat null/undefined as ""; convert numbers to string
					if (val == null) {
						val = "";
					} else if (typeof val === "number") {
						val += "";
					} else if (jQuery.isArray(val)) {
						val = jQuery.map(val, function (value) {
							return value == null ? "" : value + "";
						});
					}

					hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

					// If set returns undefined, fall back to normal setting
					if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
						this.value = val;
					}
				});
			}
		});

		jQuery.extend({
			valHooks: {
				option: {
					get: function (elem) {
						// attributes.value is undefined in Blackberry 4.7 but
						// uses .value. See #6932
						var val = elem.attributes.value;
						return !val || val.specified ? elem.value : elem.text;
					}
				},
				select: {
					get: function (elem) {
						var value,
						    option,
						    options = elem.options,
						    index = elem.selectedIndex,
						    one = elem.type === "select-one" || index < 0,
						    values = one ? null : [],
						    max = one ? index + 1 : options.length,
						    i = index < 0 ? max : one ? index : 0;

						// Loop through all the selected options
						for (; i < max; i++) {
							option = options[i];

							// oldIE doesn't update selected after form reset (#2551)
							if ((option.selected || i === index) && (
							// Don't return options that are disabled or in a disabled optgroup
							jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {

								// Get the specific value for the option
								value = jQuery(option).val();

								// We don't need an array for one selects
								if (one) {
									return value;
								}

								// Multi-Selects return an array
								values.push(value);
							}
						}

						return values;
					},

					set: function (elem, value) {
						var values = jQuery.makeArray(value);

						jQuery(elem).find("option").each(function () {
							this.selected = jQuery.inArray(jQuery(this).val(), values) >= 0;
						});

						if (!values.length) {
							elem.selectedIndex = -1;
						}
						return values;
					}
				}
			},

			attr: function (elem, name, value) {
				var ret,
				    hooks,
				    notxml,
				    nType = elem.nodeType;

				// don't get/set attributes on text, comment and attribute nodes
				if (!elem || nType === 3 || nType === 8 || nType === 2) {
					return;
				}

				// Fallback to prop when attributes are not supported
				if (typeof elem.getAttribute === "undefined") {
					return jQuery.prop(elem, name, value);
				}

				notxml = nType !== 1 || !jQuery.isXMLDoc(elem);

				// All attributes are lowercase
				// Grab necessary hook if one is defined
				if (notxml) {
					name = name.toLowerCase();
					hooks = jQuery.attrHooks[name] || (rboolean.test(name) ? boolHook : nodeHook);
				}

				if (value !== undefined) {

					if (value === null) {
						jQuery.removeAttr(elem, name);
					} else if (hooks && notxml && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
						return ret;
					} else {
						elem.setAttribute(name, value + "");
						return value;
					}
				} else if (hooks && notxml && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
					return ret;
				} else {

					// In IE9+, Flash objects don't have .getAttribute (#12945)
					// Support: IE9+
					if (typeof elem.getAttribute !== "undefined") {
						ret = elem.getAttribute(name);
					}

					// Non-existent attributes return null, we normalize to undefined
					return ret == null ? undefined : ret;
				}
			},

			removeAttr: function (elem, value) {
				var name,
				    propName,
				    i = 0,
				    attrNames = value && value.match(core_rnotwhite);

				if (attrNames && elem.nodeType === 1) {
					while (name = attrNames[i++]) {
						propName = jQuery.propFix[name] || name;

						// Boolean attributes get special treatment (#10870)
						if (rboolean.test(name)) {
							// Set corresponding property to false for boolean attributes
							// Also clear defaultChecked/defaultSelected (if appropriate) for IE<8
							if (!getSetAttribute && ruseDefault.test(name)) {
								elem[jQuery.camelCase("default-" + name)] = elem[propName] = false;
							} else {
								elem[propName] = false;
							}

							// See #9699 for explanation of this approach (setting first, then removal)
						} else {
							jQuery.attr(elem, name, "");
						}

						elem.removeAttribute(getSetAttribute ? name : propName);
					}
				}
			},

			attrHooks: {
				type: {
					set: function (elem, value) {
						if (!jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
							// Setting the type on a radio button after the value resets the value in IE6-9
							// Reset value to default in case type is set after value during creation
							var val = elem.value;
							elem.setAttribute("type", value);
							if (val) {
								elem.value = val;
							}
							return value;
						}
					}
				}
			},

			propFix: {
				tabindex: "tabIndex",
				readonly: "readOnly",
				"for": "htmlFor",
				"class": "className",
				maxlength: "maxLength",
				cellspacing: "cellSpacing",
				cellpadding: "cellPadding",
				rowspan: "rowSpan",
				colspan: "colSpan",
				usemap: "useMap",
				frameborder: "frameBorder",
				contenteditable: "contentEditable"
			},

			prop: function (elem, name, value) {
				var ret,
				    hooks,
				    notxml,
				    nType = elem.nodeType;

				// don't get/set properties on text, comment and attribute nodes
				if (!elem || nType === 3 || nType === 8 || nType === 2) {
					return;
				}

				notxml = nType !== 1 || !jQuery.isXMLDoc(elem);

				if (notxml) {
					// Fix name and attach hooks
					name = jQuery.propFix[name] || name;
					hooks = jQuery.propHooks[name];
				}

				if (value !== undefined) {
					if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
						return ret;
					} else {
						return elem[name] = value;
					}
				} else {
					if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
						return ret;
					} else {
						return elem[name];
					}
				}
			},

			propHooks: {
				tabIndex: {
					get: function (elem) {
						// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
						// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
						var attributeNode = elem.getAttributeNode("tabindex");

						return attributeNode && attributeNode.specified ? parseInt(attributeNode.value, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : undefined;
					}
				}
			}
		});

		// Hook for boolean attributes
		boolHook = {
			get: function (elem, name) {
				var
				// Use .prop to determine if this attribute is understood as boolean
				prop = jQuery.prop(elem, name),


				// Fetch it accordingly
				attr = typeof prop === "boolean" && elem.getAttribute(name),
				    detail = typeof prop === "boolean" ? getSetInput && getSetAttribute ? attr != null :
				// oldIE fabricates an empty string for missing boolean attributes
				// and conflates checked/selected into attroperties
				ruseDefault.test(name) ? elem[jQuery.camelCase("default-" + name)] : !!attr :

				// fetch an attribute node for properties not recognized as boolean
				elem.getAttributeNode(name);

				return detail && detail.value !== false ? name.toLowerCase() : undefined;
			},
			set: function (elem, value, name) {
				if (value === false) {
					// Remove boolean attributes when set to false
					jQuery.removeAttr(elem, name);
				} else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
					// IE<8 needs the *property* name
					elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name);

					// Use defaultChecked and defaultSelected for oldIE
				} else {
					elem[jQuery.camelCase("default-" + name)] = elem[name] = true;
				}

				return name;
			}
		};

		// fix oldIE value attroperty
		if (!getSetInput || !getSetAttribute) {
			jQuery.attrHooks.value = {
				get: function (elem, name) {
					var ret = elem.getAttributeNode(name);
					return jQuery.nodeName(elem, "input") ?

					// Ignore the value *property* by using defaultValue
					elem.defaultValue : ret && ret.specified ? ret.value : undefined;
				},
				set: function (elem, value, name) {
					if (jQuery.nodeName(elem, "input")) {
						// Does not return so that setAttribute is also used
						elem.defaultValue = value;
					} else {
						// Use nodeHook if defined (#1954); otherwise setAttribute is fine
						return nodeHook && nodeHook.set(elem, value, name);
					}
				}
			};
		}

		// IE6/7 do not support getting/setting some attributes with get/setAttribute
		if (!getSetAttribute) {

			// Use this for any attribute in IE6/7
			// This fixes almost every IE6/7 issue
			nodeHook = jQuery.valHooks.button = {
				get: function (elem, name) {
					var ret = elem.getAttributeNode(name);
					return ret && (name === "id" || name === "name" || name === "coords" ? ret.value !== "" : ret.specified) ? ret.value : undefined;
				},
				set: function (elem, value, name) {
					// Set the existing or create a new attribute node
					var ret = elem.getAttributeNode(name);
					if (!ret) {
						elem.setAttributeNode(ret = elem.ownerDocument.createAttribute(name));
					}

					ret.value = value += "";

					// Break association with cloned elements by also using setAttribute (#9646)
					return name === "value" || value === elem.getAttribute(name) ? value : undefined;
				}
			};

			// Set contenteditable to false on removals(#10429)
			// Setting to empty string throws an error as an invalid value
			jQuery.attrHooks.contenteditable = {
				get: nodeHook.get,
				set: function (elem, value, name) {
					nodeHook.set(elem, value === "" ? false : value, name);
				}
			};

			// Set width and height to auto instead of 0 on empty string( Bug #8150 )
			// This is for removals
			jQuery.each(["width", "height"], function (i, name) {
				jQuery.attrHooks[name] = jQuery.extend(jQuery.attrHooks[name], {
					set: function (elem, value) {
						if (value === "") {
							elem.setAttribute(name, "auto");
							return value;
						}
					}
				});
			});
		}

		// Some attributes require a special call on IE
		// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
		if (!jQuery.support.hrefNormalized) {
			jQuery.each(["href", "src", "width", "height"], function (i, name) {
				jQuery.attrHooks[name] = jQuery.extend(jQuery.attrHooks[name], {
					get: function (elem) {
						var ret = elem.getAttribute(name, 2);
						return ret == null ? undefined : ret;
					}
				});
			});

			// href/src property should get the full normalized URL (#10299/#12915)
			jQuery.each(["href", "src"], function (i, name) {
				jQuery.propHooks[name] = {
					get: function (elem) {
						return elem.getAttribute(name, 4);
					}
				};
			});
		}

		if (!jQuery.support.style) {
			jQuery.attrHooks.style = {
				get: function (elem) {
					// Return undefined in the case of empty string
					// Note: IE uppercases css property names, but if we were to .toLowerCase()
					// .cssText, that would destroy case senstitivity in URL's, like in "background"
					return elem.style.cssText || undefined;
				},
				set: function (elem, value) {
					return elem.style.cssText = value + "";
				}
			};
		}

		// Safari mis-reports the default selected property of an option
		// Accessing the parent's selectedIndex property fixes it
		if (!jQuery.support.optSelected) {
			jQuery.propHooks.selected = jQuery.extend(jQuery.propHooks.selected, {
				get: function (elem) {
					var parent = elem.parentNode;

					if (parent) {
						parent.selectedIndex;

						// Make sure that it also works with optgroups, see #5701
						if (parent.parentNode) {
							parent.parentNode.selectedIndex;
						}
					}
					return null;
				}
			});
		}

		// IE6/7 call enctype encoding
		if (!jQuery.support.enctype) {
			jQuery.propFix.enctype = "encoding";
		}

		// Radios and checkboxes getter/setter
		if (!jQuery.support.checkOn) {
			jQuery.each(["radio", "checkbox"], function () {
				jQuery.valHooks[this] = {
					get: function (elem) {
						// Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
						return elem.getAttribute("value") === null ? "on" : elem.value;
					}
				};
			});
		}
		jQuery.each(["radio", "checkbox"], function () {
			jQuery.valHooks[this] = jQuery.extend(jQuery.valHooks[this], {
				set: function (elem, value) {
					if (jQuery.isArray(value)) {
						return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0;
					}
				}
			});
		});
		var rformElems = /^(?:input|select|textarea)$/i,
		    rkeyEvent = /^key/,
		    rmouseEvent = /^(?:mouse|contextmenu)|click/,
		    rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		    rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

		function returnTrue() {
			return true;
		}

		function returnFalse() {
			return false;
		}

		/*
	  * Helper functions for managing events -- not part of the public interface.
	  * Props to Dean Edwards' addEvent library for many of the ideas.
	  */
		jQuery.event = {

			global: {},

			add: function (elem, types, handler, data, selector) {

				var handleObjIn,
				    eventHandle,
				    tmp,
				    events,
				    t,
				    handleObj,
				    special,
				    handlers,
				    type,
				    namespaces,
				    origType,

				// Don't attach events to noData or text/comment nodes (but allow plain objects)
				elemData = elem.nodeType !== 3 && elem.nodeType !== 8 && jQuery._data(elem);

				if (!elemData) {
					return;
				}

				// Caller can pass in an object of custom data in lieu of the handler
				if (handler.handler) {
					handleObjIn = handler;
					handler = handleObjIn.handler;
					selector = handleObjIn.selector;
				}

				// Make sure that the handler has a unique ID, used to find/remove it later
				if (!handler.guid) {
					handler.guid = jQuery.guid++;
				}

				// Init the element's event structure and main handler, if this is the first
				if (!(events = elemData.events)) {
					events = elemData.events = {};
				}
				if (!(eventHandle = elemData.handle)) {
					eventHandle = elemData.handle = function (e) {
						// Discard the second event of a jQuery.event.trigger() and
						// when an event is called after a page has unloaded
						return typeof jQuery !== "undefined" && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(eventHandle.elem, arguments) : undefined;
					};
					// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
					eventHandle.elem = elem;
				}

				// Handle multiple events separated by a space
				// jQuery(...).bind("mouseover mouseout", fn);
				types = (types || "").match(core_rnotwhite) || [""];
				t = types.length;
				while (t--) {
					tmp = rtypenamespace.exec(types[t]) || [];
					type = origType = tmp[1];
					namespaces = (tmp[2] || "").split(".").sort();

					// If event changes its type, use the special event handlers for the changed type
					special = jQuery.event.special[type] || {};

					// If selector defined, determine special event api type, otherwise given type
					type = (selector ? special.delegateType : special.bindType) || type;

					// Update special based on newly reset type
					special = jQuery.event.special[type] || {};

					// handleObj is passed to all event handlers
					handleObj = jQuery.extend({
						type: type,
						origType: origType,
						data: data,
						handler: handler,
						guid: handler.guid,
						selector: selector,
						needsContext: selector && jQuery.expr.match.needsContext.test(selector),
						namespace: namespaces.join(".")
					}, handleObjIn);

					// Init the event handler queue if we're the first
					if (!(handlers = events[type])) {
						handlers = events[type] = [];
						handlers.delegateCount = 0;

						// Only use addEventListener/attachEvent if the special events handler returns false
						if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
							// Bind the global event handler to the element
							if (elem.addEventListener) {
								elem.addEventListener(type, eventHandle, false);
							} else if (elem.attachEvent) {
								elem.attachEvent("on" + type, eventHandle);
							}
						}
					}

					if (special.add) {
						special.add.call(elem, handleObj);

						if (!handleObj.handler.guid) {
							handleObj.handler.guid = handler.guid;
						}
					}

					// Add to the element's handler list, delegates in front
					if (selector) {
						handlers.splice(handlers.delegateCount++, 0, handleObj);
					} else {
						handlers.push(handleObj);
					}

					// Keep track of which events have ever been used, for event optimization
					jQuery.event.global[type] = true;
				}

				// Nullify elem to prevent memory leaks in IE
				elem = null;
			},

			// Detach an event or set of events from an element
			remove: function (elem, types, handler, selector, mappedTypes) {

				var j,
				    origCount,
				    tmp,
				    events,
				    t,
				    handleObj,
				    special,
				    handlers,
				    type,
				    namespaces,
				    origType,
				    elemData = jQuery.hasData(elem) && jQuery._data(elem);

				if (!elemData || !(events = elemData.events)) {
					return;
				}

				// Once for each type.namespace in types; type may be omitted
				types = (types || "").match(core_rnotwhite) || [""];
				t = types.length;
				while (t--) {
					tmp = rtypenamespace.exec(types[t]) || [];
					type = origType = tmp[1];
					namespaces = (tmp[2] || "").split(".").sort();

					// Unbind all events (on this namespace, if provided) for the element
					if (!type) {
						for (type in events) {
							jQuery.event.remove(elem, type + types[t], handler, selector, true);
						}
						continue;
					}

					special = jQuery.event.special[type] || {};
					type = (selector ? special.delegateType : special.bindType) || type;
					handlers = events[type] || [];
					tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

					// Remove matching events
					origCount = j = handlers.length;
					while (j--) {
						handleObj = handlers[j];

						if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
							handlers.splice(j, 1);

							if (handleObj.selector) {
								handlers.delegateCount--;
							}
							if (special.remove) {
								special.remove.call(elem, handleObj);
							}
						}
					}

					// Remove generic event handler if we removed something and no more handlers exist
					// (avoids potential for endless recursion during removal of special event handlers)
					if (origCount && !handlers.length) {
						if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
							jQuery.removeEvent(elem, type, elemData.handle);
						}

						delete events[type];
					}
				}

				// Remove the expando if it's no longer used
				if (jQuery.isEmptyObject(events)) {
					delete elemData.handle;

					// removeData also checks for emptiness and clears the expando if empty
					// so use it instead of delete
					jQuery._removeData(elem, "events");
				}
			},

			trigger: function (event, data, elem, onlyHandlers) {

				var i,
				    cur,
				    tmp,
				    bubbleType,
				    ontype,
				    handle,
				    special,
				    eventPath = [elem || document],
				    type = event.type || event,
				    namespaces = event.namespace ? event.namespace.split(".") : [];

				cur = tmp = elem = elem || document;

				// Don't do events on text and comment nodes
				if (elem.nodeType === 3 || elem.nodeType === 8) {
					return;
				}

				// focus/blur morphs to focusin/out; ensure we're not firing them right now
				if (rfocusMorph.test(type + jQuery.event.triggered)) {
					return;
				}

				if (type.indexOf(".") >= 0) {
					// Namespaced trigger; create a regexp to match event type in handle()
					namespaces = type.split(".");
					type = namespaces.shift();
					namespaces.sort();
				}
				ontype = type.indexOf(":") < 0 && "on" + type;

				// Caller can pass in a jQuery.Event object, Object, or just an event type string
				event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);

				event.isTrigger = true;
				event.namespace = namespaces.join(".");
				event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

				// Clean up the event in case it is being reused
				event.result = undefined;
				if (!event.target) {
					event.target = elem;
				}

				// Clone any incoming data and prepend the event, creating the handler arg list
				data = data == null ? [event] : jQuery.makeArray(data, [event]);

				// Allow special events to draw outside the lines
				special = jQuery.event.special[type] || {};
				if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
					return;
				}

				// Determine event propagation path in advance, per W3C events spec (#9951)
				// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
				if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {

					bubbleType = special.delegateType || type;
					if (!rfocusMorph.test(bubbleType + type)) {
						cur = cur.parentNode;
					}
					for (; cur; cur = cur.parentNode) {
						eventPath.push(cur);
						tmp = cur;
					}

					// Only add window if we got to document (e.g., not plain obj or detached DOM)
					if (tmp === (elem.ownerDocument || document)) {
						eventPath.push(tmp.defaultView || tmp.parentWindow || window);
					}
				}

				// Fire handlers on the event path
				i = 0;
				while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {

					event.type = i > 1 ? bubbleType : special.bindType || type;

					// jQuery handler
					handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");
					if (handle) {
						handle.apply(cur, data);
					}

					// Native handler
					handle = ontype && cur[ontype];
					if (handle && jQuery.acceptData(cur) && handle.apply && handle.apply(cur, data) === false) {
						event.preventDefault();
					}
				}
				event.type = type;

				// If nobody prevented the default action, do it now
				if (!onlyHandlers && !event.isDefaultPrevented()) {

					if ((!special._default || special._default.apply(elem.ownerDocument, data) === false) && !(type === "click" && jQuery.nodeName(elem, "a")) && jQuery.acceptData(elem)) {

						// Call a native DOM method on the target with the same name name as the event.
						// Can't use an .isFunction() check here because IE6/7 fails that test.
						// Don't do default actions on window, that's where global variables be (#6170)
						if (ontype && elem[type] && !jQuery.isWindow(elem)) {

							// Don't re-trigger an onFOO event when we call its FOO() method
							tmp = elem[ontype];

							if (tmp) {
								elem[ontype] = null;
							}

							// Prevent re-triggering of the same event, since we already bubbled it above
							jQuery.event.triggered = type;
							try {
								elem[type]();
							} catch (e) {
								// IE<9 dies on focus/blur to hidden element (#1486,#12518)
								// only reproducible on winXP IE8 native, not IE9 in IE8 mode
							}
							jQuery.event.triggered = undefined;

							if (tmp) {
								elem[ontype] = tmp;
							}
						}
					}
				}

				return event.result;
			},

			dispatch: function (event) {

				// Make a writable jQuery.Event from the native event object
				event = jQuery.event.fix(event);

				var i,
				    j,
				    ret,
				    matched,
				    handleObj,
				    handlerQueue = [],
				    args = core_slice.call(arguments),
				    handlers = (jQuery._data(this, "events") || {})[event.type] || [],
				    special = jQuery.event.special[event.type] || {};

				// Use the fix-ed jQuery.Event rather than the (read-only) native event
				args[0] = event;
				event.delegateTarget = this;

				// Call the preDispatch hook for the mapped type, and let it bail if desired
				if (special.preDispatch && special.preDispatch.call(this, event) === false) {
					return;
				}

				// Determine handlers
				handlerQueue = jQuery.event.handlers.call(this, event, handlers);

				// Run delegates first; they may want to stop propagation beneath us
				i = 0;
				while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
					event.currentTarget = matched.elem;

					j = 0;
					while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {

						// Triggered event must either 1) have no namespace, or
						// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
						if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {

							event.handleObj = handleObj;
							event.data = handleObj.data;

							ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

							if (ret !== undefined) {
								if ((event.result = ret) === false) {
									event.preventDefault();
									event.stopPropagation();
								}
							}
						}
					}
				}

				// Call the postDispatch hook for the mapped type
				if (special.postDispatch) {
					special.postDispatch.call(this, event);
				}

				return event.result;
			},

			handlers: function (event, handlers) {
				var i,
				    matches,
				    sel,
				    handleObj,
				    handlerQueue = [],
				    delegateCount = handlers.delegateCount,
				    cur = event.target;

				// Find delegate handlers
				// Black-hole SVG <use> instance trees (#13180)
				// Avoid non-left-click bubbling in Firefox (#3861)
				if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {

					for (; cur != this; cur = cur.parentNode || this) {

						// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
						if (cur.disabled !== true || event.type !== "click") {
							matches = [];
							for (i = 0; i < delegateCount; i++) {
								handleObj = handlers[i];

								// Don't conflict with Object.prototype properties (#13203)
								sel = handleObj.selector + " ";

								if (matches[sel] === undefined) {
									matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length;
								}
								if (matches[sel]) {
									matches.push(handleObj);
								}
							}
							if (matches.length) {
								handlerQueue.push({ elem: cur, handlers: matches });
							}
						}
					}
				}

				// Add the remaining (directly-bound) handlers
				if (delegateCount < handlers.length) {
					handlerQueue.push({ elem: this, handlers: handlers.slice(delegateCount) });
				}

				return handlerQueue;
			},

			fix: function (event) {
				if (event[jQuery.expando]) {
					return event;
				}

				// Create a writable copy of the event object and normalize some properties
				var i,
				    prop,
				    originalEvent = event,
				    fixHook = jQuery.event.fixHooks[event.type] || {},
				    copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;

				event = new jQuery.Event(originalEvent);

				i = copy.length;
				while (i--) {
					prop = copy[i];
					event[prop] = originalEvent[prop];
				}

				// Support: IE<9
				// Fix target property (#1925)
				if (!event.target) {
					event.target = originalEvent.srcElement || document;
				}

				// Support: Chrome 23+, Safari?
				// Target should not be a text node (#504, #13143)
				if (event.target.nodeType === 3) {
					event.target = event.target.parentNode;
				}

				// Support: IE<9
				// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
				event.metaKey = !!event.metaKey;

				return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
			},

			// Includes some event props shared by KeyEvent and MouseEvent
			props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

			fixHooks: {},

			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function (event, original) {

					// Add which for key events
					if (event.which == null) {
						event.which = original.charCode != null ? original.charCode : original.keyCode;
					}

					return event;
				}
			},

			mouseHooks: {
				props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function (event, original) {
					var eventDoc,
					    doc,
					    body,
					    button = original.button,
					    fromElement = original.fromElement;

					// Calculate pageX/Y if missing and clientX/Y available
					if (event.pageX == null && original.clientX != null) {
						eventDoc = event.target.ownerDocument || document;
						doc = eventDoc.documentElement;
						body = eventDoc.body;

						event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
						event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
					}

					// Add relatedTarget, if necessary
					if (!event.relatedTarget && fromElement) {
						event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
					}

					// Add which for click: 1 === left; 2 === middle; 3 === right
					// Note: button is not normalized, so don't use it
					if (!event.which && button !== undefined) {
						event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
					}

					return event;
				}
			},

			special: {
				load: {
					// Prevent triggered image.load events from bubbling to window.load
					noBubble: true
				},
				click: {
					// For checkbox, fire native event so checked state will be right
					trigger: function () {
						if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
							this.click();
							return false;
						}
					}
				},
				focus: {
					// Fire native event if possible so blur/focus sequence is correct
					trigger: function () {
						if (this !== document.activeElement && this.focus) {
							try {
								this.focus();
								return false;
							} catch (e) {
								// Support: IE<9
								// If we error on focus to hidden element (#1486, #12518),
								// let .trigger() run the handlers
							}
						}
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function () {
						if (this === document.activeElement && this.blur) {
							this.blur();
							return false;
						}
					},
					delegateType: "focusout"
				},

				beforeunload: {
					postDispatch: function (event) {

						// Even when returnValue equals to undefined Firefox will still show alert
						if (event.result !== undefined) {
							event.originalEvent.returnValue = event.result;
						}
					}
				}
			},

			simulate: function (type, elem, event, bubble) {
				// Piggyback on a donor event to simulate a different one.
				// Fake originalEvent to avoid donor's stopPropagation, but if the
				// simulated event prevents default then we do the same on the donor.
				var e = jQuery.extend(new jQuery.Event(), event, { type: type,
					isSimulated: true,
					originalEvent: {}
				});
				if (bubble) {
					jQuery.event.trigger(e, null, elem);
				} else {
					jQuery.event.dispatch.call(elem, e);
				}
				if (e.isDefaultPrevented()) {
					event.preventDefault();
				}
			}
		};

		jQuery.removeEvent = document.removeEventListener ? function (elem, type, handle) {
			if (elem.removeEventListener) {
				elem.removeEventListener(type, handle, false);
			}
		} : function (elem, type, handle) {
			var name = "on" + type;

			if (elem.detachEvent) {

				// #8545, #7054, preventing memory leaks for custom events in IE6-8
				// detachEvent needed property on element, by name of that event, to properly expose it to GC
				if (typeof elem[name] === "undefined") {
					elem[name] = null;
				}

				elem.detachEvent(name, handle);
			}
		};

		jQuery.Event = function (src, props) {
			// Allow instantiation without the 'new' keyword
			if (!(this instanceof jQuery.Event)) {
				return new jQuery.Event(src, props);
			}

			// Event object
			if (src && src.type) {
				this.originalEvent = src;
				this.type = src.type;

				// Events bubbling up the document may have been marked as prevented
				// by a handler lower down the tree; reflect the correct value.
				this.isDefaultPrevented = src.defaultPrevented || src.returnValue === false || src.getPreventDefault && src.getPreventDefault() ? returnTrue : returnFalse;

				// Event type
			} else {
				this.type = src;
			}

			// Put explicitly provided properties onto the event object
			if (props) {
				jQuery.extend(this, props);
			}

			// Create a timestamp if incoming event doesn't have one
			this.timeStamp = src && src.timeStamp || jQuery.now();

			// Mark it as fixed
			this[jQuery.expando] = true;
		};

		// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
		// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
		jQuery.Event.prototype = {
			isDefaultPrevented: returnFalse,
			isPropagationStopped: returnFalse,
			isImmediatePropagationStopped: returnFalse,

			preventDefault: function () {
				var e = this.originalEvent;

				this.isDefaultPrevented = returnTrue;
				if (!e) {
					return;
				}

				// If preventDefault exists, run it on the original event
				if (e.preventDefault) {
					e.preventDefault();

					// Support: IE
					// Otherwise set the returnValue property of the original event to false
				} else {
					e.returnValue = false;
				}
			},
			stopPropagation: function () {
				var e = this.originalEvent;

				this.isPropagationStopped = returnTrue;
				if (!e) {
					return;
				}
				// If stopPropagation exists, run it on the original event
				if (e.stopPropagation) {
					e.stopPropagation();
				}

				// Support: IE
				// Set the cancelBubble property of the original event to true
				e.cancelBubble = true;
			},
			stopImmediatePropagation: function () {
				this.isImmediatePropagationStopped = returnTrue;
				this.stopPropagation();
			}
		};

		// Create mouseenter/leave events using mouseover/out and event-time checks
		jQuery.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		}, function (orig, fix) {
			jQuery.event.special[orig] = {
				delegateType: fix,
				bindType: fix,

				handle: function (event) {
					var ret,
					    target = this,
					    related = event.relatedTarget,
					    handleObj = event.handleObj;

					// For mousenter/leave call the handler if related is outside the target.
					// NB: No relatedTarget if the mouse left/entered the browser window
					if (!related || related !== target && !jQuery.contains(target, related)) {
						event.type = handleObj.origType;
						ret = handleObj.handler.apply(this, arguments);
						event.type = fix;
					}
					return ret;
				}
			};
		});

		// IE submit delegation
		if (!jQuery.support.submitBubbles) {

			jQuery.event.special.submit = {
				setup: function () {
					// Only need this for delegated form submit events
					if (jQuery.nodeName(this, "form")) {
						return false;
					}

					// Lazy-add a submit handler when a descendant form may potentially be submitted
					jQuery.event.add(this, "click._submit keypress._submit", function (e) {
						// Node name check avoids a VML-related crash in IE (#9807)
						var elem = e.target,
						    form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : undefined;
						if (form && !jQuery._data(form, "submitBubbles")) {
							jQuery.event.add(form, "submit._submit", function (event) {
								event._submit_bubble = true;
							});
							jQuery._data(form, "submitBubbles", true);
						}
					});
					// return undefined since we don't need an event listener
				},

				postDispatch: function (event) {
					// If form was submitted by the user, bubble the event up the tree
					if (event._submit_bubble) {
						delete event._submit_bubble;
						if (this.parentNode && !event.isTrigger) {
							jQuery.event.simulate("submit", this.parentNode, event, true);
						}
					}
				},

				teardown: function () {
					// Only need this for delegated form submit events
					if (jQuery.nodeName(this, "form")) {
						return false;
					}

					// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
					jQuery.event.remove(this, "._submit");
				}
			};
		}

		// IE change delegation and checkbox/radio fix
		if (!jQuery.support.changeBubbles) {

			jQuery.event.special.change = {

				setup: function () {

					if (rformElems.test(this.nodeName)) {
						// IE doesn't fire change on a check/radio until blur; trigger it on click
						// after a propertychange. Eat the blur-change in special.change.handle.
						// This still fires onchange a second time for check/radio after blur.
						if (this.type === "checkbox" || this.type === "radio") {
							jQuery.event.add(this, "propertychange._change", function (event) {
								if (event.originalEvent.propertyName === "checked") {
									this._just_changed = true;
								}
							});
							jQuery.event.add(this, "click._change", function (event) {
								if (this._just_changed && !event.isTrigger) {
									this._just_changed = false;
								}
								// Allow triggered, simulated change events (#11500)
								jQuery.event.simulate("change", this, event, true);
							});
						}
						return false;
					}
					// Delegated event; lazy-add a change handler on descendant inputs
					jQuery.event.add(this, "beforeactivate._change", function (e) {
						var elem = e.target;

						if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles")) {
							jQuery.event.add(elem, "change._change", function (event) {
								if (this.parentNode && !event.isSimulated && !event.isTrigger) {
									jQuery.event.simulate("change", this.parentNode, event, true);
								}
							});
							jQuery._data(elem, "changeBubbles", true);
						}
					});
				},

				handle: function (event) {
					var elem = event.target;

					// Swallow native change events from checkbox/radio, we already triggered them above
					if (this !== elem || event.isSimulated || event.isTrigger || elem.type !== "radio" && elem.type !== "checkbox") {
						return event.handleObj.handler.apply(this, arguments);
					}
				},

				teardown: function () {
					jQuery.event.remove(this, "._change");

					return !rformElems.test(this.nodeName);
				}
			};
		}

		// Create "bubbling" focus and blur events
		if (!jQuery.support.focusinBubbles) {
			jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {

				// Attach a single capturing handler while someone wants focusin/focusout
				var attaches = 0,
				    handler = function (event) {
					jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
				};

				jQuery.event.special[fix] = {
					setup: function () {
						if (attaches++ === 0) {
							document.addEventListener(orig, handler, true);
						}
					},
					teardown: function () {
						if (--attaches === 0) {
							document.removeEventListener(orig, handler, true);
						}
					}
				};
			});
		}

		jQuery.fn.extend({

			on: function (types, selector, data, fn, /*INTERNAL*/one) {
				var origFn, type;

				// Types can be a map of types/handlers
				if (typeof types === "object") {
					// ( types-Object, selector, data )
					if (typeof selector !== "string") {
						// ( types-Object, data )
						data = data || selector;
						selector = undefined;
					}
					for (type in types) {
						this.on(type, selector, data, types[type], one);
					}
					return this;
				}

				if (data == null && fn == null) {
					// ( types, fn )
					fn = selector;
					data = selector = undefined;
				} else if (fn == null) {
					if (typeof selector === "string") {
						// ( types, selector, fn )
						fn = data;
						data = undefined;
					} else {
						// ( types, data, fn )
						fn = data;
						data = selector;
						selector = undefined;
					}
				}
				if (fn === false) {
					fn = returnFalse;
				} else if (!fn) {
					return this;
				}

				if (one === 1) {
					origFn = fn;
					fn = function (event) {
						// Can use an empty set, since event contains the info
						jQuery().off(event);
						return origFn.apply(this, arguments);
					};
					// Use same guid so caller can remove using origFn
					fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
				}
				return this.each(function () {
					jQuery.event.add(this, types, fn, data, selector);
				});
			},
			one: function (types, selector, data, fn) {
				return this.on(types, selector, data, fn, 1);
			},
			off: function (types, selector, fn) {
				var handleObj, type;
				if (types && types.preventDefault && types.handleObj) {
					// ( event )  dispatched jQuery.Event
					handleObj = types.handleObj;
					jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
					return this;
				}
				if (typeof types === "object") {
					// ( types-object [, selector] )
					for (type in types) {
						this.off(type, selector, types[type]);
					}
					return this;
				}
				if (selector === false || typeof selector === "function") {
					// ( types [, fn] )
					fn = selector;
					selector = undefined;
				}
				if (fn === false) {
					fn = returnFalse;
				}
				return this.each(function () {
					jQuery.event.remove(this, types, fn, selector);
				});
			},

			bind: function (types, data, fn) {
				return this.on(types, null, data, fn);
			},
			unbind: function (types, fn) {
				return this.off(types, null, fn);
			},

			delegate: function (selector, types, data, fn) {
				return this.on(types, selector, data, fn);
			},
			undelegate: function (selector, types, fn) {
				// ( namespace ) or ( selector, types [, fn] )
				return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
			},

			trigger: function (type, data) {
				return this.each(function () {
					jQuery.event.trigger(type, data, this);
				});
			},
			triggerHandler: function (type, data) {
				var elem = this[0];
				if (elem) {
					return jQuery.event.trigger(type, data, elem, true);
				}
			},

			hover: function (fnOver, fnOut) {
				return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
			}
		});

		jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function (i, name) {

			// Handle event binding
			jQuery.fn[name] = function (data, fn) {
				return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
			};

			if (rkeyEvent.test(name)) {
				jQuery.event.fixHooks[name] = jQuery.event.keyHooks;
			}

			if (rmouseEvent.test(name)) {
				jQuery.event.fixHooks[name] = jQuery.event.mouseHooks;
			}
		});
		/*!
	  * Sizzle CSS Selector Engine
	  * Copyright 2012 jQuery Foundation and other contributors
	  * Released under the MIT license
	  * http://sizzlejs.com/
	  */
		(function (window, undefined) {

			var i,
			    cachedruns,
			    Expr,
			    getText,
			    isXML,
			    compile,
			    hasDuplicate,
			    outermostContext,


			// Local document vars
			setDocument,
			    document,
			    docElem,
			    documentIsXML,
			    rbuggyQSA,
			    rbuggyMatches,
			    matches,
			    contains,
			    sortOrder,


			// Instance-specific data
			expando = "sizzle" + -new Date(),
			    preferredDoc = window.document,
			    support = {},
			    dirruns = 0,
			    done = 0,
			    classCache = createCache(),
			    tokenCache = createCache(),
			    compilerCache = createCache(),


			// General-purpose constants
			strundefined = typeof undefined,
			    MAX_NEGATIVE = 1 << 31,


			// Array methods
			arr = [],
			    pop = arr.pop,
			    push = arr.push,
			    slice = arr.slice,

			// Use a stripped-down indexOf if we can't use a native one
			indexOf = arr.indexOf || function (elem) {
				var i = 0,
				    len = this.length;
				for (; i < len; i++) {
					if (this[i] === elem) {
						return i;
					}
				}
				return -1;
			},


			// Regular expressions

			// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
			whitespace = "[\\x20\\t\\r\\n\\f]",

			// http://www.w3.org/TR/css3-syntax/#characters
			characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",


			// Loosely modeled on CSS identifier characters
			// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
			// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
			identifier = characterEncoding.replace("w", "w#"),


			// Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
			operators = "([*^$|!~]?=)",
			    attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace + "*(?:" + operators + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",


			// Prefer arguments quoted,
			//   then not containing pseudos/brackets,
			//   then attribute selectors/non-parenthetical expressions,
			//   then anything else
			// These preferences are here to reduce the number of selectors
			//   needing tokenize in the PSEUDO preFilter
			pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace(3, 8) + ")*)|.*)\\)|)",


			// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
			rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
			    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
			    rcombinators = new RegExp("^" + whitespace + "*([\\x20\\t\\r\\n\\f>+~])" + whitespace + "*"),
			    rpseudo = new RegExp(pseudos),
			    ridentifier = new RegExp("^" + identifier + "$"),
			    matchExpr = {
				"ID": new RegExp("^#(" + characterEncoding + ")"),
				"CLASS": new RegExp("^\\.(" + characterEncoding + ")"),
				"NAME": new RegExp("^\\[name=['\"]?(" + characterEncoding + ")['\"]?\\]"),
				"TAG": new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
				"ATTR": new RegExp("^" + attributes),
				"PSEUDO": new RegExp("^" + pseudos),
				"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
				// For use in libraries implementing .is()
				// We use this for POS matching in `select`
				"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
			},
			    rsibling = /[\x20\t\r\n\f]*[+~]/,
			    rnative = /\{\s*\[native code\]\s*\}/,


			// Easily-parseable/retrievable ID or TAG or CLASS selectors
			rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			    rinputs = /^(?:input|select|textarea|button)$/i,
			    rheader = /^h\d$/i,
			    rescape = /'|\\/g,
			    rattributeQuotes = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,


			// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
			runescape = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
			    funescape = function (_, escaped) {
				var high = "0x" + escaped - 0x10000;
				// NaN means non-codepoint
				return high !== high ? escaped :
				// BMP codepoint
				high < 0 ? String.fromCharCode(high + 0x10000) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
			};

			// Use a stripped-down slice if we can't use a native one
			try {
				slice.call(docElem.childNodes, 0)[0].nodeType;
			} catch (e) {
				slice = function (i) {
					var elem,
					    results = [];
					for (; elem = this[i]; i++) {
						results.push(elem);
					}
					return results;
				};
			}

			/**
	   * For feature detection
	   * @param {Function} fn The function to test for native support
	   */
			function isNative(fn) {
				return rnative.test(fn + "");
			}

			/**
	   * Create key-value caches of limited size
	   * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
	   *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	   *	deleting the oldest entry
	   */
			function createCache() {
				var cache,
				    keys = [];

				return cache = function (key, value) {
					// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
					if (keys.push(key += " ") > Expr.cacheLength) {
						// Only keep the most recent entries
						delete cache[keys.shift()];
					}
					return cache[key] = value;
				};
			}

			/**
	   * Mark a function for special use by Sizzle
	   * @param {Function} fn The function to mark
	   */
			function markFunction(fn) {
				fn[expando] = true;
				return fn;
			}

			/**
	   * Support testing using an element
	   * @param {Function} fn Passed the created div and expects a boolean result
	   */
			function assert(fn) {
				var div = document.createElement("div");

				try {
					return fn(div);
				} catch (e) {
					return false;
				} finally {
					// release memory in IE
					div = null;
				}
			}

			function Sizzle(selector, context, results, seed) {
				var match, elem, m, nodeType,
				// QSA vars
				i, groups, old, nid, newContext, newSelector;

				if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
					setDocument(context);
				}

				context = context || document;
				results = results || [];

				if (!selector || typeof selector !== "string") {
					return results;
				}

				if ((nodeType = context.nodeType) !== 1 && nodeType !== 9) {
					return [];
				}

				if (!documentIsXML && !seed) {

					// Shortcuts
					if (match = rquickExpr.exec(selector)) {
						// Speed-up: Sizzle("#ID")
						if (m = match[1]) {
							if (nodeType === 9) {
								elem = context.getElementById(m);
								// Check parentNode to catch when Blackberry 4.6 returns
								// nodes that are no longer in the document #6963
								if (elem && elem.parentNode) {
									// Handle the case where IE, Opera, and Webkit return items
									// by name instead of ID
									if (elem.id === m) {
										results.push(elem);
										return results;
									}
								} else {
									return results;
								}
							} else {
								// Context is not a document
								if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
									results.push(elem);
									return results;
								}
							}

							// Speed-up: Sizzle("TAG")
						} else if (match[2]) {
							push.apply(results, slice.call(context.getElementsByTagName(selector), 0));
							return results;

							// Speed-up: Sizzle(".CLASS")
						} else if ((m = match[3]) && support.getByClassName && context.getElementsByClassName) {
							push.apply(results, slice.call(context.getElementsByClassName(m), 0));
							return results;
						}
					}

					// QSA path
					if (support.qsa && !rbuggyQSA.test(selector)) {
						old = true;
						nid = expando;
						newContext = context;
						newSelector = nodeType === 9 && selector;

						// qSA works strangely on Element-rooted queries
						// We can work around this by specifying an extra ID on the root
						// and working up from there (Thanks to Andrew Dupont for the technique)
						// IE 8 doesn't work on object elements
						if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
							groups = tokenize(selector);

							if (old = context.getAttribute("id")) {
								nid = old.replace(rescape, "\\$&");
							} else {
								context.setAttribute("id", nid);
							}
							nid = "[id='" + nid + "'] ";

							i = groups.length;
							while (i--) {
								groups[i] = nid + toSelector(groups[i]);
							}
							newContext = rsibling.test(selector) && context.parentNode || context;
							newSelector = groups.join(",");
						}

						if (newSelector) {
							try {
								push.apply(results, slice.call(newContext.querySelectorAll(newSelector), 0));
								return results;
							} catch (qsaError) {} finally {
								if (!old) {
									context.removeAttribute("id");
								}
							}
						}
					}
				}

				// All others
				return select(selector.replace(rtrim, "$1"), context, results, seed);
			}

			/**
	   * Detect xml
	   * @param {Element|Object} elem An element or a document
	   */
			isXML = Sizzle.isXML = function (elem) {
				// documentElement is verified for cases where it doesn't yet exist
				// (such as loading iframes in IE - #4833)
				var documentElement = elem && (elem.ownerDocument || elem).documentElement;
				return documentElement ? documentElement.nodeName !== "HTML" : false;
			};

			/**
	   * Sets document-related variables once based on the current document
	   * @param {Element|Object} [doc] An element or document object to use to set the document
	   * @returns {Object} Returns the current document
	   */
			setDocument = Sizzle.setDocument = function (node) {
				var doc = node ? node.ownerDocument || node : preferredDoc;

				// If no document and documentElement is available, return
				if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
					return document;
				}

				// Set our document
				document = doc;
				docElem = doc.documentElement;

				// Support tests
				documentIsXML = isXML(doc);

				// Check if getElementsByTagName("*") returns only elements
				support.tagNameNoComments = assert(function (div) {
					div.appendChild(doc.createComment(""));
					return !div.getElementsByTagName("*").length;
				});

				// Check if attributes should be retrieved by attribute nodes
				support.attributes = assert(function (div) {
					div.innerHTML = "<select></select>";
					var type = typeof div.lastChild.getAttribute("multiple");
					// IE8 returns a string for some attributes even when not present
					return type !== "boolean" && type !== "string";
				});

				// Check if getElementsByClassName can be trusted
				support.getByClassName = assert(function (div) {
					// Opera can't find a second classname (in 9.6)
					div.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
					if (!div.getElementsByClassName || !div.getElementsByClassName("e").length) {
						return false;
					}

					// Safari 3.2 caches class attributes and doesn't catch changes
					div.lastChild.className = "e";
					return div.getElementsByClassName("e").length === 2;
				});

				// Check if getElementById returns elements by name
				// Check if getElementsByName privileges form controls or returns elements by ID
				support.getByName = assert(function (div) {
					// Inject content
					div.id = expando + 0;
					div.innerHTML = "<a name='" + expando + "'></a><div name='" + expando + "'></div>";
					docElem.insertBefore(div, docElem.firstChild);

					// Test
					var pass = doc.getElementsByName &&
					// buggy browsers will return fewer than the correct 2
					doc.getElementsByName(expando).length === 2 +
					// buggy browsers will return more than the correct 0
					doc.getElementsByName(expando + 0).length;
					support.getIdNotName = !doc.getElementById(expando);

					// Cleanup
					docElem.removeChild(div);

					return pass;
				});

				// IE6/7 return modified attributes
				Expr.attrHandle = assert(function (div) {
					div.innerHTML = "<a href='#'></a>";
					return div.firstChild && typeof div.firstChild.getAttribute !== strundefined && div.firstChild.getAttribute("href") === "#";
				}) ? {} : {
					"href": function (elem) {
						return elem.getAttribute("href", 2);
					},
					"type": function (elem) {
						return elem.getAttribute("type");
					}
				};

				// ID find and filter
				if (support.getIdNotName) {
					Expr.find["ID"] = function (id, context) {
						if (typeof context.getElementById !== strundefined && !documentIsXML) {
							var m = context.getElementById(id);
							// Check parentNode to catch when Blackberry 4.6 returns
							// nodes that are no longer in the document #6963
							return m && m.parentNode ? [m] : [];
						}
					};
					Expr.filter["ID"] = function (id) {
						var attrId = id.replace(runescape, funescape);
						return function (elem) {
							return elem.getAttribute("id") === attrId;
						};
					};
				} else {
					Expr.find["ID"] = function (id, context) {
						if (typeof context.getElementById !== strundefined && !documentIsXML) {
							var m = context.getElementById(id);

							return m ? m.id === id || typeof m.getAttributeNode !== strundefined && m.getAttributeNode("id").value === id ? [m] : undefined : [];
						}
					};
					Expr.filter["ID"] = function (id) {
						var attrId = id.replace(runescape, funescape);
						return function (elem) {
							var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
							return node && node.value === attrId;
						};
					};
				}

				// Tag
				Expr.find["TAG"] = support.tagNameNoComments ? function (tag, context) {
					if (typeof context.getElementsByTagName !== strundefined) {
						return context.getElementsByTagName(tag);
					}
				} : function (tag, context) {
					var elem,
					    tmp = [],
					    i = 0,
					    results = context.getElementsByTagName(tag);

					// Filter out possible comments
					if (tag === "*") {
						for (; elem = results[i]; i++) {
							if (elem.nodeType === 1) {
								tmp.push(elem);
							}
						}

						return tmp;
					}
					return results;
				};

				// Name
				Expr.find["NAME"] = support.getByName && function (tag, context) {
					if (typeof context.getElementsByName !== strundefined) {
						return context.getElementsByName(name);
					}
				};

				// Class
				Expr.find["CLASS"] = support.getByClassName && function (className, context) {
					if (typeof context.getElementsByClassName !== strundefined && !documentIsXML) {
						return context.getElementsByClassName(className);
					}
				};

				// QSA and matchesSelector support

				// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
				rbuggyMatches = [];

				// qSa(:focus) reports false when true (Chrome 21),
				// no need to also add to buggyMatches since matches checks buggyQSA
				// A support test would require too much code (would include document ready)
				rbuggyQSA = [":focus"];

				if (support.qsa = isNative(doc.querySelectorAll)) {
					// Build QSA regex
					// Regex strategy adopted from Diego Perini
					assert(function (div) {
						// Select is set to empty string on purpose
						// This is to test IE's treatment of not explictly
						// setting a boolean content attribute,
						// since its presence should be enough
						// http://bugs.jquery.com/ticket/12359
						div.innerHTML = "<select><option selected=''></option></select>";

						// IE8 - Some boolean attributes are not treated correctly
						if (!div.querySelectorAll("[selected]").length) {
							rbuggyQSA.push("\\[" + whitespace + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
						}

						// Webkit/Opera - :checked should return selected option elements
						// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
						// IE8 throws error here and will not see later tests
						if (!div.querySelectorAll(":checked").length) {
							rbuggyQSA.push(":checked");
						}
					});

					assert(function (div) {

						// Opera 10-12/IE8 - ^= $= *= and empty values
						// Should not select anything
						div.innerHTML = "<input type='hidden' i=''/>";
						if (div.querySelectorAll("[i^='']").length) {
							rbuggyQSA.push("[*^$]=" + whitespace + "*(?:\"\"|'')");
						}

						// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
						// IE8 throws error here and will not see later tests
						if (!div.querySelectorAll(":enabled").length) {
							rbuggyQSA.push(":enabled", ":disabled");
						}

						// Opera 10-11 does not throw on post-comma invalid pseudos
						div.querySelectorAll("*,:x");
						rbuggyQSA.push(",.*:");
					});
				}

				if (support.matchesSelector = isNative(matches = docElem.matchesSelector || docElem.mozMatchesSelector || docElem.webkitMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {

					assert(function (div) {
						// Check to see if it's possible to do matchesSelector
						// on a disconnected node (IE 9)
						support.disconnectedMatch = matches.call(div, "div");

						// This should fail with an exception
						// Gecko does not error, returns false instead
						matches.call(div, "[s!='']:x");
						rbuggyMatches.push("!=", pseudos);
					});
				}

				rbuggyQSA = new RegExp(rbuggyQSA.join("|"));
				rbuggyMatches = new RegExp(rbuggyMatches.join("|"));

				// Element contains another
				// Purposefully does not implement inclusive descendent
				// As in, an element does not contain itself
				contains = isNative(docElem.contains) || docElem.compareDocumentPosition ? function (a, b) {
					var adown = a.nodeType === 9 ? a.documentElement : a,
					    bup = b && b.parentNode;
					return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
				} : function (a, b) {
					if (b) {
						while (b = b.parentNode) {
							if (b === a) {
								return true;
							}
						}
					}
					return false;
				};

				// Document order sorting
				sortOrder = docElem.compareDocumentPosition ? function (a, b) {
					var compare;

					if (a === b) {
						hasDuplicate = true;
						return 0;
					}

					if (compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b)) {
						if (compare & 1 || a.parentNode && a.parentNode.nodeType === 11) {
							if (a === doc || contains(preferredDoc, a)) {
								return -1;
							}
							if (b === doc || contains(preferredDoc, b)) {
								return 1;
							}
							return 0;
						}
						return compare & 4 ? -1 : 1;
					}

					return a.compareDocumentPosition ? -1 : 1;
				} : function (a, b) {
					var cur,
					    i = 0,
					    aup = a.parentNode,
					    bup = b.parentNode,
					    ap = [a],
					    bp = [b];

					// The nodes are identical, we can exit early
					if (a === b) {
						hasDuplicate = true;
						return 0;

						// Fallback to using sourceIndex (in IE) if it's available on both nodes
					} else if (a.sourceIndex && b.sourceIndex) {
						return (~b.sourceIndex || MAX_NEGATIVE) - (contains(preferredDoc, a) && ~a.sourceIndex || MAX_NEGATIVE);

						// Parentless nodes are either documents or disconnected
					} else if (!aup || !bup) {
						return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : 0;

						// If the nodes are siblings, we can do a quick check
					} else if (aup === bup) {
						return siblingCheck(a, b);
					}

					// Otherwise we need full lists of their ancestors for comparison
					cur = a;
					while (cur = cur.parentNode) {
						ap.unshift(cur);
					}
					cur = b;
					while (cur = cur.parentNode) {
						bp.unshift(cur);
					}

					// Walk down the tree looking for a discrepancy
					while (ap[i] === bp[i]) {
						i++;
					}

					return i ?
					// Do a sibling check if the nodes have a common ancestor
					siblingCheck(ap[i], bp[i]) :

					// Otherwise nodes in our document sort first
					ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
				};

				// Always assume the presence of duplicates if sort doesn't
				// pass them to our comparison function (as in Google Chrome).
				hasDuplicate = false;
				[0, 0].sort(sortOrder);
				support.detectDuplicates = hasDuplicate;

				return document;
			};

			Sizzle.matches = function (expr, elements) {
				return Sizzle(expr, null, null, elements);
			};

			Sizzle.matchesSelector = function (elem, expr) {
				// Set document vars if needed
				if ((elem.ownerDocument || elem) !== document) {
					setDocument(elem);
				}

				// Make sure that attribute selectors are quoted
				expr = expr.replace(rattributeQuotes, "='$1']");

				// rbuggyQSA always contains :focus, so no need for an existence check
				if (support.matchesSelector && !documentIsXML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && !rbuggyQSA.test(expr)) {
					try {
						var ret = matches.call(elem, expr);

						// IE 9's matchesSelector returns false on disconnected nodes
						if (ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11) {
							return ret;
						}
					} catch (e) {}
				}

				return Sizzle(expr, document, null, [elem]).length > 0;
			};

			Sizzle.contains = function (context, elem) {
				// Set document vars if needed
				if ((context.ownerDocument || context) !== document) {
					setDocument(context);
				}
				return contains(context, elem);
			};

			Sizzle.attr = function (elem, name) {
				var val;

				// Set document vars if needed
				if ((elem.ownerDocument || elem) !== document) {
					setDocument(elem);
				}

				if (!documentIsXML) {
					name = name.toLowerCase();
				}
				if (val = Expr.attrHandle[name]) {
					return val(elem);
				}
				if (documentIsXML || support.attributes) {
					return elem.getAttribute(name);
				}
				return ((val = elem.getAttributeNode(name)) || elem.getAttribute(name)) && elem[name] === true ? name : val && val.specified ? val.value : null;
			};

			Sizzle.error = function (msg) {
				throw new Error("Syntax error, unrecognized expression: " + msg);
			};

			// Document sorting and removing duplicates
			Sizzle.uniqueSort = function (results) {
				var elem,
				    duplicates = [],
				    i = 1,
				    j = 0;

				// Unless we *know* we can detect duplicates, assume their presence
				hasDuplicate = !support.detectDuplicates;
				results.sort(sortOrder);

				if (hasDuplicate) {
					for (; elem = results[i]; i++) {
						if (elem === results[i - 1]) {
							j = duplicates.push(i);
						}
					}
					while (j--) {
						results.splice(duplicates[j], 1);
					}
				}

				return results;
			};

			function siblingCheck(a, b) {
				var cur = a && b && a.nextSibling;

				for (; cur; cur = cur.nextSibling) {
					if (cur === b) {
						return -1;
					}
				}

				return a ? 1 : -1;
			}

			// Returns a function to use in pseudos for input types
			function createInputPseudo(type) {
				return function (elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === type;
				};
			}

			// Returns a function to use in pseudos for buttons
			function createButtonPseudo(type) {
				return function (elem) {
					var name = elem.nodeName.toLowerCase();
					return (name === "input" || name === "button") && elem.type === type;
				};
			}

			// Returns a function to use in pseudos for positionals
			function createPositionalPseudo(fn) {
				return markFunction(function (argument) {
					argument = +argument;
					return markFunction(function (seed, matches) {
						var j,
						    matchIndexes = fn([], seed.length, argument),
						    i = matchIndexes.length;

						// Match elements found at the specified indexes
						while (i--) {
							if (seed[j = matchIndexes[i]]) {
								seed[j] = !(matches[j] = seed[j]);
							}
						}
					});
				});
			}

			/**
	   * Utility function for retrieving the text value of an array of DOM nodes
	   * @param {Array|Element} elem
	   */
			getText = Sizzle.getText = function (elem) {
				var node,
				    ret = "",
				    i = 0,
				    nodeType = elem.nodeType;

				if (!nodeType) {
					// If no nodeType, this is expected to be an array
					for (; node = elem[i]; i++) {
						// Do not traverse comment nodes
						ret += getText(node);
					}
				} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
					// Use textContent for elements
					// innerText usage removed for consistency of new lines (see #11153)
					if (typeof elem.textContent === "string") {
						return elem.textContent;
					} else {
						// Traverse its children
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							ret += getText(elem);
						}
					}
				} else if (nodeType === 3 || nodeType === 4) {
					return elem.nodeValue;
				}
				// Do not include comment or processing instruction nodes

				return ret;
			};

			Expr = Sizzle.selectors = {

				// Can be adjusted by the user
				cacheLength: 50,

				createPseudo: markFunction,

				match: matchExpr,

				find: {},

				relative: {
					">": { dir: "parentNode", first: true },
					" ": { dir: "parentNode" },
					"+": { dir: "previousSibling", first: true },
					"~": { dir: "previousSibling" }
				},

				preFilter: {
					"ATTR": function (match) {
						match[1] = match[1].replace(runescape, funescape);

						// Move the given value to match[3] whether quoted or unquoted
						match[3] = (match[4] || match[5] || "").replace(runescape, funescape);

						if (match[2] === "~=") {
							match[3] = " " + match[3] + " ";
						}

						return match.slice(0, 4);
					},

					"CHILD": function (match) {
						/* matches from matchExpr["CHILD"]
	     	1 type (only|nth|...)
	     	2 what (child|of-type)
	     	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
	     	4 xn-component of xn+y argument ([+-]?\d*n|)
	     	5 sign of xn-component
	     	6 x of xn-component
	     	7 sign of y-component
	     	8 y of y-component
	     */
						match[1] = match[1].toLowerCase();

						if (match[1].slice(0, 3) === "nth") {
							// nth-* requires argument
							if (!match[3]) {
								Sizzle.error(match[0]);
							}

							// numeric x and y parameters for Expr.filter.CHILD
							// remember that false/true cast respectively to 0/1
							match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
							match[5] = +(match[7] + match[8] || match[3] === "odd");

							// other types prohibit arguments
						} else if (match[3]) {
							Sizzle.error(match[0]);
						}

						return match;
					},

					"PSEUDO": function (match) {
						var excess,
						    unquoted = !match[5] && match[2];

						if (matchExpr["CHILD"].test(match[0])) {
							return null;
						}

						// Accept quoted arguments as-is
						if (match[4]) {
							match[2] = match[4];

							// Strip excess characters from unquoted arguments
						} else if (unquoted && rpseudo.test(unquoted) && (
						// Get excess from tokenize (recursively)
						excess = tokenize(unquoted, true)) && (
						// advance to the next closing parenthesis
						excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

							// excess is a negative index
							match[0] = match[0].slice(0, excess);
							match[2] = unquoted.slice(0, excess);
						}

						// Return only captures needed by the pseudo filter method (type and argument)
						return match.slice(0, 3);
					}
				},

				filter: {

					"TAG": function (nodeName) {
						if (nodeName === "*") {
							return function () {
								return true;
							};
						}

						nodeName = nodeName.replace(runescape, funescape).toLowerCase();
						return function (elem) {
							return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
						};
					},

					"CLASS": function (className) {
						var pattern = classCache[className + " "];

						return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
							return pattern.test(elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "");
						});
					},

					"ATTR": function (name, operator, check) {
						return function (elem) {
							var result = Sizzle.attr(elem, name);

							if (result == null) {
								return operator === "!=";
							}
							if (!operator) {
								return true;
							}

							result += "";

							return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.substr(result.length - check.length) === check : operator === "~=" ? (" " + result + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.substr(0, check.length + 1) === check + "-" : false;
						};
					},

					"CHILD": function (type, what, argument, first, last) {
						var simple = type.slice(0, 3) !== "nth",
						    forward = type.slice(-4) !== "last",
						    ofType = what === "of-type";

						return first === 1 && last === 0 ?

						// Shortcut for :nth-*(n)
						function (elem) {
							return !!elem.parentNode;
						} : function (elem, context, xml) {
							var cache,
							    outerCache,
							    node,
							    diff,
							    nodeIndex,
							    start,
							    dir = simple !== forward ? "nextSibling" : "previousSibling",
							    parent = elem.parentNode,
							    name = ofType && elem.nodeName.toLowerCase(),
							    useCache = !xml && !ofType;

							if (parent) {

								// :(first|last|only)-(child|of-type)
								if (simple) {
									while (dir) {
										node = elem;
										while (node = node[dir]) {
											if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
												return false;
											}
										}
										// Reverse direction for :only-* (if we haven't yet done so)
										start = dir = type === "only" && !start && "nextSibling";
									}
									return true;
								}

								start = [forward ? parent.firstChild : parent.lastChild];

								// non-xml :nth-child(...) stores cache data on `parent`
								if (forward && useCache) {
									// Seek `elem` from a previously-cached index
									outerCache = parent[expando] || (parent[expando] = {});
									cache = outerCache[type] || [];
									nodeIndex = cache[0] === dirruns && cache[1];
									diff = cache[0] === dirruns && cache[2];
									node = nodeIndex && parent.childNodes[nodeIndex];

									while (node = ++nodeIndex && node && node[dir] || (

									// Fallback to seeking `elem` from the start
									diff = nodeIndex = 0) || start.pop()) {

										// When found, cache indexes on `parent` and break
										if (node.nodeType === 1 && ++diff && node === elem) {
											outerCache[type] = [dirruns, nodeIndex, diff];
											break;
										}
									}

									// Use previously-cached element index if available
								} else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
									diff = cache[1];

									// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
								} else {
									// Use the same loop as above to seek `elem` from the start
									while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {

										if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
											// Cache the index of each encountered element
											if (useCache) {
												(node[expando] || (node[expando] = {}))[type] = [dirruns, diff];
											}

											if (node === elem) {
												break;
											}
										}
									}
								}

								// Incorporate the offset, then check against cycle size
								diff -= last;
								return diff === first || diff % first === 0 && diff / first >= 0;
							}
						};
					},

					"PSEUDO": function (pseudo, argument) {
						// pseudo-class names are case-insensitive
						// http://www.w3.org/TR/selectors/#pseudo-classes
						// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
						// Remember that setFilters inherits from pseudos
						var args,
						    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);

						// The user may use createPseudo to indicate that
						// arguments are needed to create the filter function
						// just as Sizzle does
						if (fn[expando]) {
							return fn(argument);
						}

						// But maintain support for old signatures
						if (fn.length > 1) {
							args = [pseudo, pseudo, "", argument];
							return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
								var idx,
								    matched = fn(seed, argument),
								    i = matched.length;
								while (i--) {
									idx = indexOf.call(seed, matched[i]);
									seed[idx] = !(matches[idx] = matched[i]);
								}
							}) : function (elem) {
								return fn(elem, 0, args);
							};
						}

						return fn;
					}
				},

				pseudos: {
					// Potentially complex pseudos
					"not": markFunction(function (selector) {
						// Trim the selector passed to compile
						// to avoid treating leading and trailing
						// spaces as combinators
						var input = [],
						    results = [],
						    matcher = compile(selector.replace(rtrim, "$1"));

						return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
							var elem,
							    unmatched = matcher(seed, null, xml, []),
							    i = seed.length;

							// Match elements unmatched by `matcher`
							while (i--) {
								if (elem = unmatched[i]) {
									seed[i] = !(matches[i] = elem);
								}
							}
						}) : function (elem, context, xml) {
							input[0] = elem;
							matcher(input, null, xml, results);
							return !results.pop();
						};
					}),

					"has": markFunction(function (selector) {
						return function (elem) {
							return Sizzle(selector, elem).length > 0;
						};
					}),

					"contains": markFunction(function (text) {
						return function (elem) {
							return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
						};
					}),

					// "Whether an element is represented by a :lang() selector
					// is based solely on the element's language value
					// being equal to the identifier C,
					// or beginning with the identifier C immediately followed by "-".
					// The matching of C against the element's language value is performed case-insensitively.
					// The identifier C does not have to be a valid language name."
					// http://www.w3.org/TR/selectors/#lang-pseudo
					"lang": markFunction(function (lang) {
						// lang value must be a valid identifider
						if (!ridentifier.test(lang || "")) {
							Sizzle.error("unsupported lang: " + lang);
						}
						lang = lang.replace(runescape, funescape).toLowerCase();
						return function (elem) {
							var elemLang;
							do {
								if (elemLang = documentIsXML ? elem.getAttribute("xml:lang") || elem.getAttribute("lang") : elem.lang) {

									elemLang = elemLang.toLowerCase();
									return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
								}
							} while ((elem = elem.parentNode) && elem.nodeType === 1);
							return false;
						};
					}),

					// Miscellaneous
					"target": function (elem) {
						var hash = window.location && window.location.hash;
						return hash && hash.slice(1) === elem.id;
					},

					"root": function (elem) {
						return elem === docElem;
					},

					"focus": function (elem) {
						return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
					},

					// Boolean properties
					"enabled": function (elem) {
						return elem.disabled === false;
					},

					"disabled": function (elem) {
						return elem.disabled === true;
					},

					"checked": function (elem) {
						// In CSS3, :checked should return both checked and selected elements
						// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
						var nodeName = elem.nodeName.toLowerCase();
						return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
					},

					"selected": function (elem) {
						// Accessing this property makes selected-by-default
						// options in Safari work properly
						if (elem.parentNode) {
							elem.parentNode.selectedIndex;
						}

						return elem.selected === true;
					},

					// Contents
					"empty": function (elem) {
						// http://www.w3.org/TR/selectors/#empty-pseudo
						// :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
						//   not comment, processing instructions, or others
						// Thanks to Diego Perini for the nodeName shortcut
						//   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							if (elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4) {
								return false;
							}
						}
						return true;
					},

					"parent": function (elem) {
						return !Expr.pseudos["empty"](elem);
					},

					// Element/input types
					"header": function (elem) {
						return rheader.test(elem.nodeName);
					},

					"input": function (elem) {
						return rinputs.test(elem.nodeName);
					},

					"button": function (elem) {
						var name = elem.nodeName.toLowerCase();
						return name === "input" && elem.type === "button" || name === "button";
					},

					"text": function (elem) {
						var attr;
						// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
						// use getAttribute instead to test this case
						return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type);
					},

					// Position-in-collection
					"first": createPositionalPseudo(function () {
						return [0];
					}),

					"last": createPositionalPseudo(function (matchIndexes, length) {
						return [length - 1];
					}),

					"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
						return [argument < 0 ? argument + length : argument];
					}),

					"even": createPositionalPseudo(function (matchIndexes, length) {
						var i = 0;
						for (; i < length; i += 2) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),

					"odd": createPositionalPseudo(function (matchIndexes, length) {
						var i = 1;
						for (; i < length; i += 2) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),

					"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
						var i = argument < 0 ? argument + length : argument;
						for (; --i >= 0;) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),

					"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
						var i = argument < 0 ? argument + length : argument;
						for (; ++i < length;) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					})
				}
			};

			// Add button/input type pseudos
			for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
				Expr.pseudos[i] = createInputPseudo(i);
			}
			for (i in { submit: true, reset: true }) {
				Expr.pseudos[i] = createButtonPseudo(i);
			}

			function tokenize(selector, parseOnly) {
				var matched,
				    match,
				    tokens,
				    type,
				    soFar,
				    groups,
				    preFilters,
				    cached = tokenCache[selector + " "];

				if (cached) {
					return parseOnly ? 0 : cached.slice(0);
				}

				soFar = selector;
				groups = [];
				preFilters = Expr.preFilter;

				while (soFar) {

					// Comma and first run
					if (!matched || (match = rcomma.exec(soFar))) {
						if (match) {
							// Don't consume trailing commas as valid
							soFar = soFar.slice(match[0].length) || soFar;
						}
						groups.push(tokens = []);
					}

					matched = false;

					// Combinators
					if (match = rcombinators.exec(soFar)) {
						matched = match.shift();
						tokens.push({
							value: matched,
							// Cast descendant combinators to space
							type: match[0].replace(rtrim, " ")
						});
						soFar = soFar.slice(matched.length);
					}

					// Filters
					for (type in Expr.filter) {
						if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
							matched = match.shift();
							tokens.push({
								value: matched,
								type: type,
								matches: match
							});
							soFar = soFar.slice(matched.length);
						}
					}

					if (!matched) {
						break;
					}
				}

				// Return the length of the invalid excess
				// if we're just parsing
				// Otherwise, throw an error or return tokens
				return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) :
				// Cache the tokens
				tokenCache(selector, groups).slice(0);
			}

			function toSelector(tokens) {
				var i = 0,
				    len = tokens.length,
				    selector = "";
				for (; i < len; i++) {
					selector += tokens[i].value;
				}
				return selector;
			}

			function addCombinator(matcher, combinator, base) {
				var dir = combinator.dir,
				    checkNonElements = base && combinator.dir === "parentNode",
				    doneName = done++;

				return combinator.first ?
				// Check against closest ancestor/preceding element
				function (elem, context, xml) {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							return matcher(elem, context, xml);
						}
					}
				} :

				// Check against all ancestor/preceding elements
				function (elem, context, xml) {
					var data,
					    cache,
					    outerCache,
					    dirkey = dirruns + " " + doneName;

					// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
					if (xml) {
						while (elem = elem[dir]) {
							if (elem.nodeType === 1 || checkNonElements) {
								if (matcher(elem, context, xml)) {
									return true;
								}
							}
						}
					} else {
						while (elem = elem[dir]) {
							if (elem.nodeType === 1 || checkNonElements) {
								outerCache = elem[expando] || (elem[expando] = {});
								if ((cache = outerCache[dir]) && cache[0] === dirkey) {
									if ((data = cache[1]) === true || data === cachedruns) {
										return data === true;
									}
								} else {
									cache = outerCache[dir] = [dirkey];
									cache[1] = matcher(elem, context, xml) || cachedruns;
									if (cache[1] === true) {
										return true;
									}
								}
							}
						}
					}
				};
			}

			function elementMatcher(matchers) {
				return matchers.length > 1 ? function (elem, context, xml) {
					var i = matchers.length;
					while (i--) {
						if (!matchers[i](elem, context, xml)) {
							return false;
						}
					}
					return true;
				} : matchers[0];
			}

			function condense(unmatched, map, filter, context, xml) {
				var elem,
				    newUnmatched = [],
				    i = 0,
				    len = unmatched.length,
				    mapped = map != null;

				for (; i < len; i++) {
					if (elem = unmatched[i]) {
						if (!filter || filter(elem, context, xml)) {
							newUnmatched.push(elem);
							if (mapped) {
								map.push(i);
							}
						}
					}
				}

				return newUnmatched;
			}

			function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
				if (postFilter && !postFilter[expando]) {
					postFilter = setMatcher(postFilter);
				}
				if (postFinder && !postFinder[expando]) {
					postFinder = setMatcher(postFinder, postSelector);
				}
				return markFunction(function (seed, results, context, xml) {
					var temp,
					    i,
					    elem,
					    preMap = [],
					    postMap = [],
					    preexisting = results.length,


					// Get initial elements from seed or context
					elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),


					// Prefilter to get matcher input, preserving a map for seed-results synchronization
					matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
					    matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || (seed ? preFilter : preexisting || postFilter) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results : matcherIn;

					// Find primary matches
					if (matcher) {
						matcher(matcherIn, matcherOut, context, xml);
					}

					// Apply postFilter
					if (postFilter) {
						temp = condense(matcherOut, postMap);
						postFilter(temp, [], context, xml);

						// Un-match failing elements by moving them back to matcherIn
						i = temp.length;
						while (i--) {
							if (elem = temp[i]) {
								matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
							}
						}
					}

					if (seed) {
						if (postFinder || preFilter) {
							if (postFinder) {
								// Get the final matcherOut by condensing this intermediate into postFinder contexts
								temp = [];
								i = matcherOut.length;
								while (i--) {
									if (elem = matcherOut[i]) {
										// Restore matcherIn since elem is not yet a final match
										temp.push(matcherIn[i] = elem);
									}
								}
								postFinder(null, matcherOut = [], temp, xml);
							}

							// Move matched elements from seed to results to keep them synchronized
							i = matcherOut.length;
							while (i--) {
								if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) {

									seed[temp] = !(results[temp] = elem);
								}
							}
						}

						// Add elements to results, through postFinder if defined
					} else {
						matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
						if (postFinder) {
							postFinder(null, results, matcherOut, xml);
						} else {
							push.apply(results, matcherOut);
						}
					}
				});
			}

			function matcherFromTokens(tokens) {
				var checkContext,
				    matcher,
				    j,
				    len = tokens.length,
				    leadingRelative = Expr.relative[tokens[0].type],
				    implicitRelative = leadingRelative || Expr.relative[" "],
				    i = leadingRelative ? 1 : 0,


				// The foundational matcher ensures that elements are reachable from top-level context(s)
				matchContext = addCombinator(function (elem) {
					return elem === checkContext;
				}, implicitRelative, true),
				    matchAnyContext = addCombinator(function (elem) {
					return indexOf.call(checkContext, elem) > -1;
				}, implicitRelative, true),
				    matchers = [function (elem, context, xml) {
					return !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
				}];

				for (; i < len; i++) {
					if (matcher = Expr.relative[tokens[i].type]) {
						matchers = [addCombinator(elementMatcher(matchers), matcher)];
					} else {
						matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

						// Return special upon seeing a positional matcher
						if (matcher[expando]) {
							// Find the next relative operator (if any) for proper handling
							j = ++i;
							for (; j < len; j++) {
								if (Expr.relative[tokens[j].type]) {
									break;
								}
							}
							return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1)).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
						}
						matchers.push(matcher);
					}
				}

				return elementMatcher(matchers);
			}

			function matcherFromGroupMatchers(elementMatchers, setMatchers) {
				// A counter to specify which element is currently being matched
				var matcherCachedRuns = 0,
				    bySet = setMatchers.length > 0,
				    byElement = elementMatchers.length > 0,
				    superMatcher = function (seed, context, xml, results, expandContext) {
					var elem,
					    j,
					    matcher,
					    setMatched = [],
					    matchedCount = 0,
					    i = "0",
					    unmatched = seed && [],
					    outermost = expandContext != null,
					    contextBackup = outermostContext,

					// We must always have either seed elements or context
					elems = seed || byElement && Expr.find["TAG"]("*", expandContext && context.parentNode || context),

					// Nested matchers should use non-integer dirruns
					dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.E;

					if (outermost) {
						outermostContext = context !== document && context;
						cachedruns = matcherCachedRuns;
					}

					// Add elements passing elementMatchers directly to results
					for (; (elem = elems[i]) != null; i++) {
						if (byElement && elem) {
							for (j = 0; matcher = elementMatchers[j]; j++) {
								if (matcher(elem, context, xml)) {
									results.push(elem);
									break;
								}
							}
							if (outermost) {
								dirruns = dirrunsUnique;
								cachedruns = ++matcherCachedRuns;
							}
						}

						// Track unmatched elements for set filters
						if (bySet) {
							// They will have gone through all possible matchers
							if (elem = !matcher && elem) {
								matchedCount--;
							}

							// Lengthen the array for every element, matched or not
							if (seed) {
								unmatched.push(elem);
							}
						}
					}

					// Apply set filters to unmatched elements
					// `i` starts as a string, so matchedCount would equal "00" if there are no elements
					matchedCount += i;
					if (bySet && i !== matchedCount) {
						for (j = 0; matcher = setMatchers[j]; j++) {
							matcher(unmatched, setMatched, context, xml);
						}

						if (seed) {
							// Reintegrate element matches to eliminate the need for sorting
							if (matchedCount > 0) {
								while (i--) {
									if (!(unmatched[i] || setMatched[i])) {
										setMatched[i] = pop.call(results);
									}
								}
							}

							// Discard index placeholder values to get only actual matches
							setMatched = condense(setMatched);
						}

						// Add matches to results
						push.apply(results, setMatched);

						// Seedless set matches succeeding multiple successful matchers stipulate sorting
						if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {

							Sizzle.uniqueSort(results);
						}
					}

					// Override manipulation of globals by nested matchers
					if (outermost) {
						dirruns = dirrunsUnique;
						outermostContext = contextBackup;
					}

					return unmatched;
				};

				return bySet ? markFunction(superMatcher) : superMatcher;
			}

			compile = Sizzle.compile = function (selector, group /* Internal Use Only */) {
				var i,
				    setMatchers = [],
				    elementMatchers = [],
				    cached = compilerCache[selector + " "];

				if (!cached) {
					// Generate a function of recursive functions that can be used to check each element
					if (!group) {
						group = tokenize(selector);
					}
					i = group.length;
					while (i--) {
						cached = matcherFromTokens(group[i]);
						if (cached[expando]) {
							setMatchers.push(cached);
						} else {
							elementMatchers.push(cached);
						}
					}

					// Cache the compiled function
					cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
				}
				return cached;
			};

			function multipleContexts(selector, contexts, results) {
				var i = 0,
				    len = contexts.length;
				for (; i < len; i++) {
					Sizzle(selector, contexts[i], results);
				}
				return results;
			}

			function select(selector, context, results, seed) {
				var i,
				    tokens,
				    token,
				    type,
				    find,
				    match = tokenize(selector);

				if (!seed) {
					// Try to minimize operations if there is only one group
					if (match.length === 1) {

						// Take a shortcut and set the context if the root selector is an ID
						tokens = match[0] = match[0].slice(0);
						if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && !documentIsXML && Expr.relative[tokens[1].type]) {

							context = Expr.find["ID"](token.matches[0].replace(runescape, funescape), context)[0];
							if (!context) {
								return results;
							}

							selector = selector.slice(tokens.shift().value.length);
						}

						// Fetch a seed set for right-to-left matching
						for (i = matchExpr["needsContext"].test(selector) ? -1 : tokens.length - 1; i >= 0; i--) {
							token = tokens[i];

							// Abort if we hit a combinator
							if (Expr.relative[type = token.type]) {
								break;
							}
							if (find = Expr.find[type]) {
								// Search, expanding context for leading sibling combinators
								if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && context.parentNode || context)) {

									// If seed is empty or no tokens remain, we can return early
									tokens.splice(i, 1);
									selector = seed.length && toSelector(tokens);
									if (!selector) {
										push.apply(results, slice.call(seed, 0));
										return results;
									}

									break;
								}
							}
						}
					}
				}

				// Compile and execute a filtering function
				// Provide `match` to avoid retokenization if we modified the selector above
				compile(selector, match)(seed, context, documentIsXML, results, rsibling.test(selector));
				return results;
			}

			// Deprecated
			Expr.pseudos["nth"] = Expr.pseudos["eq"];

			// Easy API for creating new setFilters
			function setFilters() {}
			Expr.filters = setFilters.prototype = Expr.pseudos;
			Expr.setFilters = new setFilters();

			// Initialize with the default document
			setDocument();

			// Override sizzle attribute retrieval
			Sizzle.attr = jQuery.attr;
			jQuery.find = Sizzle;
			jQuery.expr = Sizzle.selectors;
			jQuery.expr[":"] = jQuery.expr.pseudos;
			jQuery.unique = Sizzle.uniqueSort;
			jQuery.text = Sizzle.getText;
			jQuery.isXMLDoc = Sizzle.isXML;
			jQuery.contains = Sizzle.contains;
		})(window);
		var runtil = /Until$/,
		    rparentsprev = /^(?:parents|prev(?:Until|All))/,
		    isSimple = /^.[^:#\[\.,]*$/,
		    rneedsContext = jQuery.expr.match.needsContext,

		// methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

		jQuery.fn.extend({
			find: function (selector) {
				var i, ret, self;

				if (typeof selector !== "string") {
					self = this;
					return this.pushStack(jQuery(selector).filter(function () {
						for (i = 0; i < self.length; i++) {
							if (jQuery.contains(self[i], this)) {
								return true;
							}
						}
					}));
				}

				ret = [];
				for (i = 0; i < this.length; i++) {
					jQuery.find(selector, this[i], ret);
				}

				// Needed because $( selector, context ) becomes $( context ).find( selector )
				ret = this.pushStack(jQuery.unique(ret));
				ret.selector = (this.selector ? this.selector + " " : "") + selector;
				return ret;
			},

			has: function (target) {
				var i,
				    targets = jQuery(target, this),
				    len = targets.length;

				return this.filter(function () {
					for (i = 0; i < len; i++) {
						if (jQuery.contains(this, targets[i])) {
							return true;
						}
					}
				});
			},

			not: function (selector) {
				return this.pushStack(winnow(this, selector, false));
			},

			filter: function (selector) {
				return this.pushStack(winnow(this, selector, true));
			},

			is: function (selector) {
				return !!selector && (typeof selector === "string" ?
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				rneedsContext.test(selector) ? jQuery(selector, this.context).index(this[0]) >= 0 : jQuery.filter(selector, this).length > 0 : this.filter(selector).length > 0);
			},

			closest: function (selectors, context) {
				var cur,
				    i = 0,
				    l = this.length,
				    ret = [],
				    pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;

				for (; i < l; i++) {
					cur = this[i];

					while (cur && cur.ownerDocument && cur !== context && cur.nodeType !== 11) {
						if (pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors)) {
							ret.push(cur);
							break;
						}
						cur = cur.parentNode;
					}
				}

				return this.pushStack(ret.length > 1 ? jQuery.unique(ret) : ret);
			},

			// Determine the position of an element within
			// the matched set of elements
			index: function (elem) {

				// No argument, return index in parent
				if (!elem) {
					return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
				}

				// index in selector
				if (typeof elem === "string") {
					return jQuery.inArray(this[0], jQuery(elem));
				}

				// Locate the position of the desired element
				return jQuery.inArray(
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[0] : elem, this);
			},

			add: function (selector, context) {
				var set = typeof selector === "string" ? jQuery(selector, context) : jQuery.makeArray(selector && selector.nodeType ? [selector] : selector),
				    all = jQuery.merge(this.get(), set);

				return this.pushStack(jQuery.unique(all));
			},

			addBack: function (selector) {
				return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
			}
		});

		jQuery.fn.andSelf = jQuery.fn.addBack;

		function sibling(cur, dir) {
			do {
				cur = cur[dir];
			} while (cur && cur.nodeType !== 1);

			return cur;
		}

		jQuery.each({
			parent: function (elem) {
				var parent = elem.parentNode;
				return parent && parent.nodeType !== 11 ? parent : null;
			},
			parents: function (elem) {
				return jQuery.dir(elem, "parentNode");
			},
			parentsUntil: function (elem, i, until) {
				return jQuery.dir(elem, "parentNode", until);
			},
			next: function (elem) {
				return sibling(elem, "nextSibling");
			},
			prev: function (elem) {
				return sibling(elem, "previousSibling");
			},
			nextAll: function (elem) {
				return jQuery.dir(elem, "nextSibling");
			},
			prevAll: function (elem) {
				return jQuery.dir(elem, "previousSibling");
			},
			nextUntil: function (elem, i, until) {
				return jQuery.dir(elem, "nextSibling", until);
			},
			prevUntil: function (elem, i, until) {
				return jQuery.dir(elem, "previousSibling", until);
			},
			siblings: function (elem) {
				return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
			},
			children: function (elem) {
				return jQuery.sibling(elem.firstChild);
			},
			contents: function (elem) {
				return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes);
			}
		}, function (name, fn) {
			jQuery.fn[name] = function (until, selector) {
				var ret = jQuery.map(this, fn, until);

				if (!runtil.test(name)) {
					selector = until;
				}

				if (selector && typeof selector === "string") {
					ret = jQuery.filter(selector, ret);
				}

				ret = this.length > 1 && !guaranteedUnique[name] ? jQuery.unique(ret) : ret;

				if (this.length > 1 && rparentsprev.test(name)) {
					ret = ret.reverse();
				}

				return this.pushStack(ret);
			};
		});

		jQuery.extend({
			filter: function (expr, elems, not) {
				if (not) {
					expr = ":not(" + expr + ")";
				}

				return elems.length === 1 ? jQuery.find.matchesSelector(elems[0], expr) ? [elems[0]] : [] : jQuery.find.matches(expr, elems);
			},

			dir: function (elem, dir, until) {
				var matched = [],
				    cur = elem[dir];

				while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
					if (cur.nodeType === 1) {
						matched.push(cur);
					}
					cur = cur[dir];
				}
				return matched;
			},

			sibling: function (n, elem) {
				var r = [];

				for (; n; n = n.nextSibling) {
					if (n.nodeType === 1 && n !== elem) {
						r.push(n);
					}
				}

				return r;
			}
		});

		// Implement the identical functionality for filter and not
		function winnow(elements, qualifier, keep) {

			// Can't pass null or undefined to indexOf in Firefox 4
			// Set to 0 to skip string check
			qualifier = qualifier || 0;

			if (jQuery.isFunction(qualifier)) {
				return jQuery.grep(elements, function (elem, i) {
					var retVal = !!qualifier.call(elem, i, elem);
					return retVal === keep;
				});
			} else if (qualifier.nodeType) {
				return jQuery.grep(elements, function (elem) {
					return elem === qualifier === keep;
				});
			} else if (typeof qualifier === "string") {
				var filtered = jQuery.grep(elements, function (elem) {
					return elem.nodeType === 1;
				});

				if (isSimple.test(qualifier)) {
					return jQuery.filter(qualifier, filtered, !keep);
				} else {
					qualifier = jQuery.filter(qualifier, filtered);
				}
			}

			return jQuery.grep(elements, function (elem) {
				return jQuery.inArray(elem, qualifier) >= 0 === keep;
			});
		}
		function createSafeFragment(document) {
			var list = nodeNames.split("|"),
			    safeFrag = document.createDocumentFragment();

			if (safeFrag.createElement) {
				while (list.length) {
					safeFrag.createElement(list.pop());
				}
			}
			return safeFrag;
		}

		var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		    rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
		    rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
		    rleadingWhitespace = /^\s+/,
		    rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		    rtagName = /<([\w:]+)/,
		    rtbody = /<tbody/i,
		    rhtml = /<|&#?\w+;/,
		    rnoInnerhtml = /<(?:script|style|link)/i,
		    manipulation_rcheckableType = /^(?:checkbox|radio)$/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		    rscriptType = /^$|\/(?:java|ecma)script/i,
		    rscriptTypeMasked = /^true\/(.*)/,
		    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,


		// We have to close these tags to support XHTML (#13200)
		wrapMap = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

			// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
			// unless wrapped in a div with non-breaking characters in front of it.
			_default: jQuery.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		    safeFragment = createSafeFragment(document),
		    fragmentDiv = safeFragment.appendChild(document.createElement("div"));

		wrapMap.optgroup = wrapMap.option;
		wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
		wrapMap.th = wrapMap.td;

		jQuery.fn.extend({
			text: function (value) {
				return jQuery.access(this, function (value) {
					return value === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
				}, null, value, arguments.length);
			},

			wrapAll: function (html) {
				if (jQuery.isFunction(html)) {
					return this.each(function (i) {
						jQuery(this).wrapAll(html.call(this, i));
					});
				}

				if (this[0]) {
					// The elements to wrap the target around
					var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

					if (this[0].parentNode) {
						wrap.insertBefore(this[0]);
					}

					wrap.map(function () {
						var elem = this;

						while (elem.firstChild && elem.firstChild.nodeType === 1) {
							elem = elem.firstChild;
						}

						return elem;
					}).append(this);
				}

				return this;
			},

			wrapInner: function (html) {
				if (jQuery.isFunction(html)) {
					return this.each(function (i) {
						jQuery(this).wrapInner(html.call(this, i));
					});
				}

				return this.each(function () {
					var self = jQuery(this),
					    contents = self.contents();

					if (contents.length) {
						contents.wrapAll(html);
					} else {
						self.append(html);
					}
				});
			},

			wrap: function (html) {
				var isFunction = jQuery.isFunction(html);

				return this.each(function (i) {
					jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
				});
			},

			unwrap: function () {
				return this.parent().each(function () {
					if (!jQuery.nodeName(this, "body")) {
						jQuery(this).replaceWith(this.childNodes);
					}
				}).end();
			},

			append: function () {
				return this.domManip(arguments, true, function (elem) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						this.appendChild(elem);
					}
				});
			},

			prepend: function () {
				return this.domManip(arguments, true, function (elem) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						this.insertBefore(elem, this.firstChild);
					}
				});
			},

			before: function () {
				return this.domManip(arguments, false, function (elem) {
					if (this.parentNode) {
						this.parentNode.insertBefore(elem, this);
					}
				});
			},

			after: function () {
				return this.domManip(arguments, false, function (elem) {
					if (this.parentNode) {
						this.parentNode.insertBefore(elem, this.nextSibling);
					}
				});
			},

			// keepData is for internal use only--do not document
			remove: function (selector, keepData) {
				var elem,
				    i = 0;

				for (; (elem = this[i]) != null; i++) {
					if (!selector || jQuery.filter(selector, [elem]).length > 0) {
						if (!keepData && elem.nodeType === 1) {
							jQuery.cleanData(getAll(elem));
						}

						if (elem.parentNode) {
							if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
								setGlobalEval(getAll(elem, "script"));
							}
							elem.parentNode.removeChild(elem);
						}
					}
				}

				return this;
			},

			empty: function () {
				var elem,
				    i = 0;

				for (; (elem = this[i]) != null; i++) {
					// Remove element nodes and prevent memory leaks
					if (elem.nodeType === 1) {
						jQuery.cleanData(getAll(elem, false));
					}

					// Remove any remaining nodes
					while (elem.firstChild) {
						elem.removeChild(elem.firstChild);
					}

					// If this is a select, ensure that it displays empty (#12336)
					// Support: IE<9
					if (elem.options && jQuery.nodeName(elem, "select")) {
						elem.options.length = 0;
					}
				}

				return this;
			},

			clone: function (dataAndEvents, deepDataAndEvents) {
				dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
				deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

				return this.map(function () {
					return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
				});
			},

			html: function (value) {
				return jQuery.access(this, function (value) {
					var elem = this[0] || {},
					    i = 0,
					    l = this.length;

					if (value === undefined) {
						return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, "") : undefined;
					}

					// See if we can take a shortcut and just use innerHTML
					if (typeof value === "string" && !rnoInnerhtml.test(value) && (jQuery.support.htmlSerialize || !rnoshimcache.test(value)) && (jQuery.support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

						value = value.replace(rxhtmlTag, "<$1></$2>");

						try {
							for (; i < l; i++) {
								// Remove element nodes and prevent memory leaks
								elem = this[i] || {};
								if (elem.nodeType === 1) {
									jQuery.cleanData(getAll(elem, false));
									elem.innerHTML = value;
								}
							}

							elem = 0;

							// If using innerHTML throws an exception, use the fallback method
						} catch (e) {}
					}

					if (elem) {
						this.empty().append(value);
					}
				}, null, value, arguments.length);
			},

			replaceWith: function (value) {
				var isFunc = jQuery.isFunction(value);

				// Make sure that the elements are removed from the DOM before they are inserted
				// this can help fix replacing a parent with child elements
				if (!isFunc && typeof value !== "string") {
					value = jQuery(value).not(this).detach();
				}

				return this.domManip([value], true, function (elem) {
					var next = this.nextSibling,
					    parent = this.parentNode;

					if (parent && this.nodeType === 1 || this.nodeType === 11) {

						jQuery(this).remove();

						if (next) {
							next.parentNode.insertBefore(elem, next);
						} else {
							parent.appendChild(elem);
						}
					}
				});
			},

			detach: function (selector) {
				return this.remove(selector, true);
			},

			domManip: function (args, table, callback) {

				// Flatten any nested arrays
				args = core_concat.apply([], args);

				var fragment,
				    first,
				    scripts,
				    hasScripts,
				    node,
				    doc,
				    i = 0,
				    l = this.length,
				    set = this,
				    iNoClone = l - 1,
				    value = args[0],
				    isFunction = jQuery.isFunction(value);

				// We can't cloneNode fragments that contain checked, in WebKit
				if (isFunction || !(l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test(value))) {
					return this.each(function (index) {
						var self = set.eq(index);
						if (isFunction) {
							args[0] = value.call(this, index, table ? self.html() : undefined);
						}
						self.domManip(args, table, callback);
					});
				}

				if (l) {
					fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, this);
					first = fragment.firstChild;

					if (fragment.childNodes.length === 1) {
						fragment = first;
					}

					if (first) {
						table = table && jQuery.nodeName(first, "tr");
						scripts = jQuery.map(getAll(fragment, "script"), disableScript);
						hasScripts = scripts.length;

						// Use the original fragment for the last item instead of the first because it can end up
						// being emptied incorrectly in certain situations (#8070).
						for (; i < l; i++) {
							node = fragment;

							if (i !== iNoClone) {
								node = jQuery.clone(node, true, true);

								// Keep references to cloned scripts for later restoration
								if (hasScripts) {
									jQuery.merge(scripts, getAll(node, "script"));
								}
							}

							callback.call(table && jQuery.nodeName(this[i], "table") ? findOrAppend(this[i], "tbody") : this[i], node, i);
						}

						if (hasScripts) {
							doc = scripts[scripts.length - 1].ownerDocument;

							// Reenable scripts
							jQuery.map(scripts, restoreScript);

							// Evaluate executable scripts on first document insertion
							for (i = 0; i < hasScripts; i++) {
								node = scripts[i];
								if (rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node)) {

									if (node.src) {
										// Hope ajax is available...
										jQuery.ajax({
											url: node.src,
											type: "GET",
											dataType: "script",
											async: false,
											global: false,
											"throws": true
										});
									} else {
										jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, ""));
									}
								}
							}
						}

						// Fix #11809: Avoid leaking memory
						fragment = first = null;
					}
				}

				return this;
			}
		});

		function findOrAppend(elem, tag) {
			return elem.getElementsByTagName(tag)[0] || elem.appendChild(elem.ownerDocument.createElement(tag));
		}

		// Replace/restore the type attribute of script elements for safe DOM manipulation
		function disableScript(elem) {
			var attr = elem.getAttributeNode("type");
			elem.type = (attr && attr.specified) + "/" + elem.type;
			return elem;
		}
		function restoreScript(elem) {
			var match = rscriptTypeMasked.exec(elem.type);
			if (match) {
				elem.type = match[1];
			} else {
				elem.removeAttribute("type");
			}
			return elem;
		}

		// Mark scripts as having already been evaluated
		function setGlobalEval(elems, refElements) {
			var elem,
			    i = 0;
			for (; (elem = elems[i]) != null; i++) {
				jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"));
			}
		}

		function cloneCopyEvent(src, dest) {

			if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
				return;
			}

			var type,
			    i,
			    l,
			    oldData = jQuery._data(src),
			    curData = jQuery._data(dest, oldData),
			    events = oldData.events;

			if (events) {
				delete curData.handle;
				curData.events = {};

				for (type in events) {
					for (i = 0, l = events[type].length; i < l; i++) {
						jQuery.event.add(dest, type, events[type][i]);
					}
				}
			}

			// make the cloned public data object a copy from the original
			if (curData.data) {
				curData.data = jQuery.extend({}, curData.data);
			}
		}

		function fixCloneNodeIssues(src, dest) {
			var nodeName, data, e;

			// We do not need to do anything for non-Elements
			if (dest.nodeType !== 1) {
				return;
			}

			nodeName = dest.nodeName.toLowerCase();

			// IE6-8 copies events bound via attachEvent when using cloneNode.
			if (!jQuery.support.noCloneEvent && dest[jQuery.expando]) {
				data = jQuery._data(dest);

				for (e in data.events) {
					jQuery.removeEvent(dest, e, data.handle);
				}

				// Event data gets referenced instead of copied if the expando gets copied too
				dest.removeAttribute(jQuery.expando);
			}

			// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
			if (nodeName === "script" && dest.text !== src.text) {
				disableScript(dest).text = src.text;
				restoreScript(dest);

				// IE6-10 improperly clones children of object elements using classid.
				// IE10 throws NoModificationAllowedError if parent is null, #12132.
			} else if (nodeName === "object") {
				if (dest.parentNode) {
					dest.outerHTML = src.outerHTML;
				}

				// This path appears unavoidable for IE9. When cloning an object
				// element in IE9, the outerHTML strategy above is not sufficient.
				// If the src has innerHTML and the destination does not,
				// copy the src.innerHTML into the dest.innerHTML. #10324
				if (jQuery.support.html5Clone && src.innerHTML && !jQuery.trim(dest.innerHTML)) {
					dest.innerHTML = src.innerHTML;
				}
			} else if (nodeName === "input" && manipulation_rcheckableType.test(src.type)) {
				// IE6-8 fails to persist the checked state of a cloned checkbox
				// or radio button. Worse, IE6-7 fail to give the cloned element
				// a checked appearance if the defaultChecked value isn't also set

				dest.defaultChecked = dest.checked = src.checked;

				// IE6-7 get confused and end up setting the value of a cloned
				// checkbox/radio button to an empty string instead of "on"
				if (dest.value !== src.value) {
					dest.value = src.value;
				}

				// IE6-8 fails to return the selected option to the default selected
				// state when cloning options
			} else if (nodeName === "option") {
				dest.defaultSelected = dest.selected = src.defaultSelected;

				// IE6-8 fails to set the defaultValue to the correct value when
				// cloning other types of input fields
			} else if (nodeName === "input" || nodeName === "textarea") {
				dest.defaultValue = src.defaultValue;
			}
		}

		jQuery.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function (name, original) {
			jQuery.fn[name] = function (selector) {
				var elems,
				    i = 0,
				    ret = [],
				    insert = jQuery(selector),
				    last = insert.length - 1;

				for (; i <= last; i++) {
					elems = i === last ? this : this.clone(true);
					jQuery(insert[i])[original](elems);

					// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
					core_push.apply(ret, elems.get());
				}

				return this.pushStack(ret);
			};
		});

		function getAll(context, tag) {
			var elems,
			    elem,
			    i = 0,
			    found = typeof context.getElementsByTagName !== "undefined" ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== "undefined" ? context.querySelectorAll(tag || "*") : undefined;

			if (!found) {
				for (found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++) {
					if (!tag || jQuery.nodeName(elem, tag)) {
						found.push(elem);
					} else {
						jQuery.merge(found, getAll(elem, tag));
					}
				}
			}

			return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], found) : found;
		}

		// Used in buildFragment, fixes the defaultChecked property
		function fixDefaultChecked(elem) {
			if (manipulation_rcheckableType.test(elem.type)) {
				elem.defaultChecked = elem.checked;
			}
		}

		jQuery.extend({
			clone: function (elem, dataAndEvents, deepDataAndEvents) {
				var destElements,
				    srcElements,
				    node,
				    i,
				    clone,
				    inPage = jQuery.contains(elem.ownerDocument, elem);

				if (jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
					clone = elem.cloneNode(true);

					// IE<=8 does not properly clone detached, unknown element nodes
				} else {
					fragmentDiv.innerHTML = elem.outerHTML;
					fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
				}

				if ((!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {

					// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
					destElements = getAll(clone);
					srcElements = getAll(elem);

					// Fix all IE cloning issues
					for (i = 0; (node = srcElements[i]) != null; ++i) {
						// Ensure that the destination node is not null; Fixes #9587
						if (destElements[i]) {
							fixCloneNodeIssues(node, destElements[i]);
						}
					}
				}

				// Copy the events from the original to the clone
				if (dataAndEvents) {
					if (deepDataAndEvents) {
						srcElements = srcElements || getAll(elem);
						destElements = destElements || getAll(clone);

						for (i = 0; (node = srcElements[i]) != null; i++) {
							cloneCopyEvent(node, destElements[i]);
						}
					} else {
						cloneCopyEvent(elem, clone);
					}
				}

				// Preserve script evaluation history
				destElements = getAll(clone, "script");
				if (destElements.length > 0) {
					setGlobalEval(destElements, !inPage && getAll(elem, "script"));
				}

				destElements = srcElements = node = null;

				// Return the cloned set
				return clone;
			},

			buildFragment: function (elems, context, scripts, selection) {
				var contains,
				    elem,
				    tag,
				    tmp,
				    wrap,
				    tbody,
				    j,
				    l = elems.length,


				// Ensure a safe fragment
				safe = createSafeFragment(context),
				    nodes = [],
				    i = 0;

				for (; i < l; i++) {
					elem = elems[i];

					if (elem || elem === 0) {

						// Add nodes directly
						if (jQuery.type(elem) === "object") {
							jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

							// Convert non-html into a text node
						} else if (!rhtml.test(elem)) {
							nodes.push(context.createTextNode(elem));

							// Convert html into DOM nodes
						} else {
							tmp = tmp || safe.appendChild(context.createElement("div"));

							// Deserialize a standard representation
							tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
							wrap = wrapMap[tag] || wrapMap._default;

							tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];

							// Descend through wrappers to the right content
							j = wrap[0];
							while (j--) {
								tmp = tmp.lastChild;
							}

							// Manually add leading whitespace removed by IE
							if (!jQuery.support.leadingWhitespace && rleadingWhitespace.test(elem)) {
								nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
							}

							// Remove IE's autoinserted <tbody> from table fragments
							if (!jQuery.support.tbody) {

								// String was a <table>, *may* have spurious <tbody>
								elem = tag === "table" && !rtbody.test(elem) ? tmp.firstChild :

								// String was a bare <thead> or <tfoot>
								wrap[1] === "<table>" && !rtbody.test(elem) ? tmp : 0;

								j = elem && elem.childNodes.length;
								while (j--) {
									if (jQuery.nodeName(tbody = elem.childNodes[j], "tbody") && !tbody.childNodes.length) {
										elem.removeChild(tbody);
									}
								}
							}

							jQuery.merge(nodes, tmp.childNodes);

							// Fix #12392 for WebKit and IE > 9
							tmp.textContent = "";

							// Fix #12392 for oldIE
							while (tmp.firstChild) {
								tmp.removeChild(tmp.firstChild);
							}

							// Remember the top-level container for proper cleanup
							tmp = safe.lastChild;
						}
					}
				}

				// Fix #11356: Clear elements from fragment
				if (tmp) {
					safe.removeChild(tmp);
				}

				// Reset defaultChecked for any radios and checkboxes
				// about to be appended to the DOM in IE 6/7 (#8060)
				if (!jQuery.support.appendChecked) {
					jQuery.grep(getAll(nodes, "input"), fixDefaultChecked);
				}

				i = 0;
				while (elem = nodes[i++]) {

					// #4087 - If origin and destination elements are the same, and this is
					// that element, do not do anything
					if (selection && jQuery.inArray(elem, selection) !== -1) {
						continue;
					}

					contains = jQuery.contains(elem.ownerDocument, elem);

					// Append to fragment
					tmp = getAll(safe.appendChild(elem), "script");

					// Preserve script evaluation history
					if (contains) {
						setGlobalEval(tmp);
					}

					// Capture executables
					if (scripts) {
						j = 0;
						while (elem = tmp[j++]) {
							if (rscriptType.test(elem.type || "")) {
								scripts.push(elem);
							}
						}
					}
				}

				tmp = null;

				return safe;
			},

			cleanData: function (elems, /* internal */acceptData) {
				var data,
				    id,
				    elem,
				    type,
				    i = 0,
				    internalKey = jQuery.expando,
				    cache = jQuery.cache,
				    deleteExpando = jQuery.support.deleteExpando,
				    special = jQuery.event.special;

				for (; (elem = elems[i]) != null; i++) {

					if (acceptData || jQuery.acceptData(elem)) {

						id = elem[internalKey];
						data = id && cache[id];

						if (data) {
							if (data.events) {
								for (type in data.events) {
									if (special[type]) {
										jQuery.event.remove(elem, type);

										// This is a shortcut to avoid jQuery.event.remove's overhead
									} else {
										jQuery.removeEvent(elem, type, data.handle);
									}
								}
							}

							// Remove cache only if it was not already removed by jQuery.event.remove
							if (cache[id]) {

								delete cache[id];

								// IE does not allow us to delete expando properties from nodes,
								// nor does it have a removeAttribute function on Document nodes;
								// we must handle all of these cases
								if (deleteExpando) {
									delete elem[internalKey];
								} else if (typeof elem.removeAttribute !== "undefined") {
									elem.removeAttribute(internalKey);
								} else {
									elem[internalKey] = null;
								}

								core_deletedIds.push(id);
							}
						}
					}
				}
			}
		});
		var curCSS,
		    getStyles,
		    iframe,
		    ralpha = /alpha\([^)]*\)/i,
		    ropacity = /opacity\s*=\s*([^)]*)/,
		    rposition = /^(top|right|bottom|left)$/,

		// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
		// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		    rmargin = /^margin/,
		    rnumsplit = new RegExp("^(" + core_pnum + ")(.*)$", "i"),
		    rnumnonpx = new RegExp("^(" + core_pnum + ")(?!px)[a-z%]+$", "i"),
		    rrelNum = new RegExp("^([+-])=(" + core_pnum + ")", "i"),
		    elemdisplay = { BODY: "block" },
		    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		    cssNormalTransform = {
			letterSpacing: 0,
			fontWeight: 400
		},
		    cssExpand = ["Top", "Right", "Bottom", "Left"],
		    cssPrefixes = ["Webkit", "O", "Moz", "ms"];

		// return a css property mapped to a potentially vendor prefixed property
		function vendorPropName(style, name) {

			// shortcut for names that are not vendor prefixed
			if (name in style) {
				return name;
			}

			// check for vendor prefixed names
			var capName = name.charAt(0).toUpperCase() + name.slice(1),
			    origName = name,
			    i = cssPrefixes.length;

			while (i--) {
				name = cssPrefixes[i] + capName;
				if (name in style) {
					return name;
				}
			}

			return origName;
		}

		function isHidden(elem, el) {
			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
		}

		function showHide(elements, show) {
			var elem,
			    values = [],
			    index = 0,
			    length = elements.length;

			for (; index < length; index++) {
				elem = elements[index];
				if (!elem.style) {
					continue;
				}
				values[index] = jQuery._data(elem, "olddisplay");
				if (show) {
					// Reset the inline display of this element to learn if it is
					// being hidden by cascaded rules or not
					if (!values[index] && elem.style.display === "none") {
						elem.style.display = "";
					}

					// Set elements which have been overridden with display: none
					// in a stylesheet to whatever the default browser style is
					// for such an element
					if (elem.style.display === "" && isHidden(elem)) {
						values[index] = jQuery._data(elem, "olddisplay", css_defaultDisplay(elem.nodeName));
					}
				} else if (!values[index] && !isHidden(elem)) {
					jQuery._data(elem, "olddisplay", jQuery.css(elem, "display"));
				}
			}

			// Set the display of most of the elements in a second loop
			// to avoid the constant reflow
			for (index = 0; index < length; index++) {
				elem = elements[index];
				if (!elem.style) {
					continue;
				}
				if (!show || elem.style.display === "none" || elem.style.display === "") {
					elem.style.display = show ? values[index] || "" : "none";
				}
			}

			return elements;
		}

		jQuery.fn.extend({
			css: function (name, value) {
				return jQuery.access(this, function (elem, name, value) {
					var styles,
					    len,
					    map = {},
					    i = 0;

					if (jQuery.isArray(name)) {
						styles = getStyles(elem);
						len = name.length;

						for (; i < len; i++) {
							map[name[i]] = jQuery.css(elem, name[i], false, styles);
						}

						return map;
					}

					return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
				}, name, value, arguments.length > 1);
			},
			show: function () {
				return showHide(this, true);
			},
			hide: function () {
				return showHide(this);
			},
			toggle: function (state) {
				var bool = typeof state === "boolean";

				return this.each(function () {
					if (bool ? state : isHidden(this)) {
						jQuery(this).show();
					} else {
						jQuery(this).hide();
					}
				});
			}
		});

		jQuery.extend({
			// Add in style property hooks for overriding the default
			// behavior of getting and setting a style property
			cssHooks: {
				opacity: {
					get: function (elem, computed) {
						if (computed) {
							// We should always get a number back from opacity
							var ret = curCSS(elem, "opacity");
							return ret === "" ? "1" : ret;
						}
					}
				}
			},

			// Exclude the following css properties to add px
			cssNumber: {
				"columnCount": true,
				"fillOpacity": true,
				"fontWeight": true,
				"lineHeight": true,
				"opacity": true,
				"orphans": true,
				"widows": true,
				"zIndex": true,
				"zoom": true
			},

			// Add in properties whose names you wish to fix before
			// setting or getting the value
			cssProps: {
				// normalize float css property
				"float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
			},

			// Get and set the style property on a DOM Node
			style: function (elem, name, value, extra) {
				// Don't set styles on text and comment nodes
				if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
					return;
				}

				// Make sure that we're working with the right name
				var ret,
				    type,
				    hooks,
				    origName = jQuery.camelCase(name),
				    style = elem.style;

				name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));

				// gets hook for the prefixed version
				// followed by the unprefixed version
				hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

				// Check if we're setting a value
				if (value !== undefined) {
					type = typeof value;

					// convert relative number strings (+= or -=) to relative numbers. #7345
					if (type === "string" && (ret = rrelNum.exec(value))) {
						value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
						// Fixes bug #9237
						type = "number";
					}

					// Make sure that NaN and null values aren't set. See: #7116
					if (value == null || type === "number" && isNaN(value)) {
						return;
					}

					// If a number was passed in, add 'px' to the (except for certain CSS properties)
					if (type === "number" && !jQuery.cssNumber[origName]) {
						value += "px";
					}

					// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
					// but it would mean to define eight (for every problematic property) identical functions
					if (!jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
						style[name] = "inherit";
					}

					// If a hook was provided, use that value, otherwise just set the specified value
					if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {

						// Wrapped to prevent IE from throwing errors when 'invalid' values are provided
						// Fixes bug #5509
						try {
							style[name] = value;
						} catch (e) {}
					}
				} else {
					// If a hook was provided get the non-computed value from there
					if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
						return ret;
					}

					// Otherwise just get the value from the style object
					return style[name];
				}
			},

			css: function (elem, name, extra, styles) {
				var val,
				    num,
				    hooks,
				    origName = jQuery.camelCase(name);

				// Make sure that we're working with the right name
				name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));

				// gets hook for the prefixed version
				// followed by the unprefixed version
				hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

				// If a hook was provided get the computed value from there
				if (hooks && "get" in hooks) {
					val = hooks.get(elem, true, extra);
				}

				// Otherwise, if a way to get the computed value exists, use that
				if (val === undefined) {
					val = curCSS(elem, name, styles);
				}

				//convert "normal" to computed value
				if (val === "normal" && name in cssNormalTransform) {
					val = cssNormalTransform[name];
				}

				// Return, converting to number if forced or a qualifier was provided and val looks numeric
				if (extra) {
					num = parseFloat(val);
					return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
				}
				return val;
			},

			// A method for quickly swapping in/out CSS properties to get correct calculations
			swap: function (elem, options, callback, args) {
				var ret,
				    name,
				    old = {};

				// Remember the old values, and insert the new ones
				for (name in options) {
					old[name] = elem.style[name];
					elem.style[name] = options[name];
				}

				ret = callback.apply(elem, args || []);

				// Revert the old values
				for (name in options) {
					elem.style[name] = old[name];
				}

				return ret;
			}
		});

		// NOTE: we've included the "window" in window.getComputedStyle
		// because jsdom on node.js will break without it.
		if (window.getComputedStyle) {
			getStyles = function (elem) {
				return window.getComputedStyle(elem, null);
			};

			curCSS = function (elem, name, _computed) {
				var width,
				    minWidth,
				    maxWidth,
				    computed = _computed || getStyles(elem),


				// getPropertyValue is only needed for .css('filter') in IE9, see #12537
				ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined,
				    style = elem.style;

				if (computed) {

					if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
						ret = jQuery.style(elem, name);
					}

					// A tribute to the "awesome hack by Dean Edwards"
					// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
					// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
					// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
					if (rnumnonpx.test(ret) && rmargin.test(name)) {

						// Remember the original values
						width = style.width;
						minWidth = style.minWidth;
						maxWidth = style.maxWidth;

						// Put in the new values to get a computed value out
						style.minWidth = style.maxWidth = style.width = ret;
						ret = computed.width;

						// Revert the changed values
						style.width = width;
						style.minWidth = minWidth;
						style.maxWidth = maxWidth;
					}
				}

				return ret;
			};
		} else if (document.documentElement.currentStyle) {
			getStyles = function (elem) {
				return elem.currentStyle;
			};

			curCSS = function (elem, name, _computed) {
				var left,
				    rs,
				    rsLeft,
				    computed = _computed || getStyles(elem),
				    ret = computed ? computed[name] : undefined,
				    style = elem.style;

				// Avoid setting ret to empty string here
				// so we don't default to auto
				if (ret == null && style && style[name]) {
					ret = style[name];
				}

				// From the awesome hack by Dean Edwards
				// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

				// If we're not dealing with a regular pixel number
				// but a number that has a weird ending, we need to convert it to pixels
				// but not position css attributes, as those are proportional to the parent element instead
				// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
				if (rnumnonpx.test(ret) && !rposition.test(name)) {

					// Remember the original values
					left = style.left;
					rs = elem.runtimeStyle;
					rsLeft = rs && rs.left;

					// Put in the new values to get a computed value out
					if (rsLeft) {
						rs.left = elem.currentStyle.left;
					}
					style.left = name === "fontSize" ? "1em" : ret;
					ret = style.pixelLeft + "px";

					// Revert the changed values
					style.left = left;
					if (rsLeft) {
						rs.left = rsLeft;
					}
				}

				return ret === "" ? "auto" : ret;
			};
		}

		function setPositiveNumber(elem, value, subtract) {
			var matches = rnumsplit.exec(value);
			return matches ?
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
		}

		function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
			var i = extra === (isBorderBox ? "border" : "content") ?
			// If we already have the right measurement, avoid augmentation
			4 :
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,
			    val = 0;

			for (; i < 4; i += 2) {
				// both box models exclude margin, so add it if we want it
				if (extra === "margin") {
					val += jQuery.css(elem, extra + cssExpand[i], true, styles);
				}

				if (isBorderBox) {
					// border-box includes padding, so remove it if we want content
					if (extra === "content") {
						val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
					}

					// at this point, extra isn't border nor margin, so remove border
					if (extra !== "margin") {
						val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
					}
				} else {
					// at this point, extra isn't content, so add padding
					val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

					// at this point, extra isn't content nor padding, so add border
					if (extra !== "padding") {
						val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
					}
				}
			}

			return val;
		}

		function getWidthOrHeight(elem, name, extra) {

			// Start with offset property, which is equivalent to the border-box value
			var valueIsBorderBox = true,
			    val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			    styles = getStyles(elem),
			    isBorderBox = jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box";

			// some non-html elements return undefined for offsetWidth, so check for null/undefined
			// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
			// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
			if (val <= 0 || val == null) {
				// Fall back to computed then uncomputed css if necessary
				val = curCSS(elem, name, styles);
				if (val < 0 || val == null) {
					val = elem.style[name];
				}

				// Computed unit is not pixels. Stop here and return.
				if (rnumnonpx.test(val)) {
					return val;
				}

				// we need the check for style in case a browser which returns unreliable values
				// for getComputedStyle silently falls back to the reliable elem.style
				valueIsBorderBox = isBorderBox && (jQuery.support.boxSizingReliable || val === elem.style[name]);

				// Normalize "", auto, and prepare for extra
				val = parseFloat(val) || 0;
			}

			// use the active box-sizing model to add/subtract irrelevant styles
			return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
		}

		// Try to determine the default display value of an element
		function css_defaultDisplay(nodeName) {
			var doc = document,
			    display = elemdisplay[nodeName];

			if (!display) {
				display = actualDisplay(nodeName, doc);

				// If the simple way fails, read from inside an iframe
				if (display === "none" || !display) {
					// Use the already-created iframe if possible
					iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(doc.documentElement);

					// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
					doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;
					doc.write("<!doctype html><html><body>");
					doc.close();

					display = actualDisplay(nodeName, doc);
					iframe.detach();
				}

				// Store the correct default display
				elemdisplay[nodeName] = display;
			}

			return display;
		}

		// Called ONLY from within css_defaultDisplay
		function actualDisplay(name, doc) {
			var elem = jQuery(doc.createElement(name)).appendTo(doc.body),
			    display = jQuery.css(elem[0], "display");
			elem.remove();
			return display;
		}

		jQuery.each(["height", "width"], function (i, name) {
			jQuery.cssHooks[name] = {
				get: function (elem, computed, extra) {
					if (computed) {
						// certain elements can have dimension info if we invisibly show them
						// however, it must have a current display style that would benefit from this
						return elem.offsetWidth === 0 && rdisplayswap.test(jQuery.css(elem, "display")) ? jQuery.swap(elem, cssShow, function () {
							return getWidthOrHeight(elem, name, extra);
						}) : getWidthOrHeight(elem, name, extra);
					}
				},

				set: function (elem, value, extra) {
					var styles = extra && getStyles(elem);
					return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
				}
			};
		});

		if (!jQuery.support.opacity) {
			jQuery.cssHooks.opacity = {
				get: function (elem, computed) {
					// IE uses filters for opacity
					return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : computed ? "1" : "";
				},

				set: function (elem, value) {
					var style = elem.style,
					    currentStyle = elem.currentStyle,
					    opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "",
					    filter = currentStyle && currentStyle.filter || style.filter || "";

					// IE has trouble with opacity if it does not have layout
					// Force it by setting the zoom level
					style.zoom = 1;

					// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
					// if value === "", then remove inline opacity #12685
					if ((value >= 1 || value === "") && jQuery.trim(filter.replace(ralpha, "")) === "" && style.removeAttribute) {

						// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
						// if "filter:" is present at all, clearType is disabled, we want to avoid this
						// style.removeAttribute is IE Only, but so apparently is this code path...
						style.removeAttribute("filter");

						// if there is no filter style applied in a css rule or unset inline opacity, we are done
						if (value === "" || currentStyle && !currentStyle.filter) {
							return;
						}
					}

					// otherwise, set new filter values
					style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity;
				}
			};
		}

		// These hooks cannot be added until DOM ready because the support test
		// for it is not run until after DOM ready
		jQuery(function () {
			if (!jQuery.support.reliableMarginRight) {
				jQuery.cssHooks.marginRight = {
					get: function (elem, computed) {
						if (computed) {
							// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
							// Work around by temporarily setting element display to inline-block
							return jQuery.swap(elem, { "display": "inline-block" }, curCSS, [elem, "marginRight"]);
						}
					}
				};
			}

			// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
			// getComputedStyle returns percent when specified for top/left/bottom/right
			// rather than make the css module depend on the offset module, we just check for it here
			if (!jQuery.support.pixelPosition && jQuery.fn.position) {
				jQuery.each(["top", "left"], function (i, prop) {
					jQuery.cssHooks[prop] = {
						get: function (elem, computed) {
							if (computed) {
								computed = curCSS(elem, prop);
								// if curCSS returns percentage, fallback to offset
								return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
							}
						}
					};
				});
			}
		});

		if (jQuery.expr && jQuery.expr.filters) {
			jQuery.expr.filters.hidden = function (elem) {
				return elem.offsetWidth === 0 && elem.offsetHeight === 0 || !jQuery.support.reliableHiddenOffsets && (elem.style && elem.style.display || jQuery.css(elem, "display")) === "none";
			};

			jQuery.expr.filters.visible = function (elem) {
				return !jQuery.expr.filters.hidden(elem);
			};
		}

		// These hooks are used by animate to expand properties
		jQuery.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function (prefix, suffix) {
			jQuery.cssHooks[prefix + suffix] = {
				expand: function (value) {
					var i = 0,
					    expanded = {},


					// assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [value];

					for (; i < 4; i++) {
						expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
					}

					return expanded;
				}
			};

			if (!rmargin.test(prefix)) {
				jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
			}
		});
		var r20 = /%20/g,
		    rbracket = /\[\]$/,
		    rCRLF = /\r?\n/g,
		    rsubmitterTypes = /^(?:submit|button|image|reset)$/i,
		    rsubmittable = /^(?:input|select|textarea|keygen)/i;

		jQuery.fn.extend({
			serialize: function () {
				return jQuery.param(this.serializeArray());
			},
			serializeArray: function () {
				return this.map(function () {
					// Can add propHook for "elements" to filter or add form elements
					var elements = jQuery.prop(this, "elements");
					return elements ? jQuery.makeArray(elements) : this;
				}).filter(function () {
					var type = this.type;
					// Use .is(":disabled") so that fieldset[disabled] works
					return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
				}).map(function (i, elem) {
					var val = jQuery(this).val();

					return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
						return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
					}) : { name: elem.name, value: val.replace(rCRLF, "\r\n") };
				}).get();
			}
		});

		//Serialize an array of form elements or a set of
		//key/values into a query string
		jQuery.param = function (a, traditional) {
			var prefix,
			    s = [],
			    add = function (key, value) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
				s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
			};

			// Set traditional to true for jQuery <= 1.3.2 behavior.
			if (traditional === undefined) {
				traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
			}

			// If an array was passed in, assume that it is an array of form elements.
			if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
				// Serialize the form elements
				jQuery.each(a, function () {
					add(this.name, this.value);
				});
			} else {
				// If traditional, encode the "old" way (the way 1.3.2 or older
				// did it), otherwise encode params recursively.
				for (prefix in a) {
					buildParams(prefix, a[prefix], traditional, add);
				}
			}

			// Return the resulting serialization
			return s.join("&").replace(r20, "+");
		};

		function buildParams(prefix, obj, traditional, add) {
			var name;

			if (jQuery.isArray(obj)) {
				// Serialize array item.
				jQuery.each(obj, function (i, v) {
					if (traditional || rbracket.test(prefix)) {
						// Treat each array item as a scalar.
						add(prefix, v);
					} else {
						// Item is non-scalar (array or object), encode its numeric index.
						buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add);
					}
				});
			} else if (!traditional && jQuery.type(obj) === "object") {
				// Serialize object item.
				for (name in obj) {
					buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
				}
			} else {
				// Serialize scalar item.
				add(prefix, obj);
			}
		}
		var
		// Document location
		ajaxLocParts,
		    ajaxLocation,
		    ajax_nonce = jQuery.now(),
		    ajax_rquery = /\?/,
		    rhash = /#.*$/,
		    rts = /([?&])_=[^&]*/,
		    rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
		    // IE leaves an \r character at EOL
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		    rnoContent = /^(?:GET|HEAD)$/,
		    rprotocol = /^\/\//,
		    rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,


		// Keep a copy of the old load method
		_load = jQuery.fn.load,


		/* Prefilters
	  * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	  * 2) These are called:
	  *    - BEFORE asking for a transport
	  *    - AFTER param serialization (s.data is a string if s.processData is true)
	  * 3) key is the dataType
	  * 4) the catchall symbol "*" can be used
	  * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	  */
		prefilters = {},


		/* Transports bindings
	  * 1) key is the dataType
	  * 2) the catchall symbol "*" can be used
	  * 3) selection will start with transport dataType and THEN go to "*" if needed
	  */
		transports = {},


		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat("*");

		// #8138, IE may throw an exception when accessing
		// a field from window.location if document.domain has been set
		try {
			ajaxLocation = location.href;
		} catch (e) {
			// Use the href attribute of an A element
			// since IE will modify it given document.location
			ajaxLocation = document.createElement("a");
			ajaxLocation.href = "";
			ajaxLocation = ajaxLocation.href;
		}

		// Segment location into parts
		ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];

		// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
		function addToPrefiltersOrTransports(structure) {

			// dataTypeExpression is optional and defaults to "*"
			return function (dataTypeExpression, func) {

				if (typeof dataTypeExpression !== "string") {
					func = dataTypeExpression;
					dataTypeExpression = "*";
				}

				var dataType,
				    i = 0,
				    dataTypes = dataTypeExpression.toLowerCase().match(core_rnotwhite) || [];

				if (jQuery.isFunction(func)) {
					// For each dataType in the dataTypeExpression
					while (dataType = dataTypes[i++]) {
						// Prepend if requested
						if (dataType[0] === "+") {
							dataType = dataType.slice(1) || "*";
							(structure[dataType] = structure[dataType] || []).unshift(func);

							// Otherwise append
						} else {
							(structure[dataType] = structure[dataType] || []).push(func);
						}
					}
				}
			};
		}

		// Base inspection function for prefilters and transports
		function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

			var inspected = {},
			    seekingTransport = structure === transports;

			function inspect(dataType) {
				var selected;
				inspected[dataType] = true;
				jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
					var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
					if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
						options.dataTypes.unshift(dataTypeOrTransport);
						inspect(dataTypeOrTransport);
						return false;
					} else if (seekingTransport) {
						return !(selected = dataTypeOrTransport);
					}
				});
				return selected;
			}

			return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
		}

		// A special extend for ajax options
		// that takes "flat" options (not to be deep extended)
		// Fixes #9887
		function ajaxExtend(target, src) {
			var key,
			    deep,
			    flatOptions = jQuery.ajaxSettings.flatOptions || {};

			for (key in src) {
				if (src[key] !== undefined) {
					(flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
				}
			}
			if (deep) {
				jQuery.extend(true, target, deep);
			}

			return target;
		}

		jQuery.fn.load = function (url, params, callback) {
			if (typeof url !== "string" && _load) {
				return _load.apply(this, arguments);
			}

			var selector,
			    type,
			    response,
			    self = this,
			    off = url.indexOf(" ");

			if (off >= 0) {
				selector = url.slice(off, url.length);
				url = url.slice(0, off);
			}

			// If it's a function
			if (jQuery.isFunction(params)) {

				// We assume that it's the callback
				callback = params;
				params = undefined;

				// Otherwise, build a param string
			} else if (params && typeof params === "object") {
				type = "POST";
			}

			// If we have elements to modify, make the request
			if (self.length > 0) {
				jQuery.ajax({
					url: url,

					// if "type" variable is undefined, then "GET" method will be used
					type: type,
					dataType: "html",
					data: params
				}).done(function (responseText) {

					// Save response for use in complete callback
					response = arguments;

					self.html(selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

					// Otherwise use the full result
					responseText);
				}).complete(callback && function (jqXHR, status) {
					self.each(callback, response || [jqXHR.responseText, status, jqXHR]);
				});
			}

			return this;
		};

		// Attach a bunch of functions for handling common AJAX events
		jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
			jQuery.fn[type] = function (fn) {
				return this.on(type, fn);
			};
		});

		jQuery.each(["get", "post"], function (i, method) {
			jQuery[method] = function (url, data, callback, type) {
				// shift arguments if data argument was omitted
				if (jQuery.isFunction(data)) {
					type = type || callback;
					callback = data;
					data = undefined;
				}

				return jQuery.ajax({
					url: url,
					type: method,
					dataType: type,
					data: data,
					success: callback
				});
			};
		});

		jQuery.extend({

			// Counter for holding the number of active queries
			active: 0,

			// Last-Modified header cache for next request
			lastModified: {},
			etag: {},

			ajaxSettings: {
				url: ajaxLocation,
				type: "GET",
				isLocal: rlocalProtocol.test(ajaxLocParts[1]),
				global: true,
				processData: true,
				async: true,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				/*
	   timeout: 0,
	   data: null,
	   dataType: null,
	   username: null,
	   password: null,
	   cache: null,
	   throws: false,
	   traditional: false,
	   headers: {},
	   */

				accepts: {
					"*": allTypes,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},

				contents: {
					xml: /xml/,
					html: /html/,
					json: /json/
				},

				responseFields: {
					xml: "responseXML",
					text: "responseText"
				},

				// Data converters
				// Keys separate source (or catchall "*") and destination types with a single space
				converters: {

					// Convert anything to text
					"* text": window.String,

					// Text to html (true = no transformation)
					"text html": true,

					// Evaluate text as a json expression
					"text json": jQuery.parseJSON,

					// Parse text as xml
					"text xml": jQuery.parseXML
				},

				// For options that shouldn't be deep extended:
				// you can add your own custom options here if
				// and when you create one that shouldn't be
				// deep extended (see ajaxExtend)
				flatOptions: {
					url: true,
					context: true
				}
			},

			// Creates a full fledged settings object into target
			// with both ajaxSettings and settings fields.
			// If target is omitted, writes into ajaxSettings.
			ajaxSetup: function (target, settings) {
				return settings ?

				// Building a settings object
				ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

				// Extending ajaxSettings
				ajaxExtend(jQuery.ajaxSettings, target);
			},

			ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
			ajaxTransport: addToPrefiltersOrTransports(transports),

			// Main method
			ajax: function (url, options) {

				// If url is an object, simulate pre-1.5 signature
				if (typeof url === "object") {
					options = url;
					url = undefined;
				}

				// Force options to be an object
				options = options || {};

				var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				    responseHeaders,

				// timeout handle
				timeoutTimer,

				// Cross-domain detection vars
				parts,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// Create the final options object
				s = jQuery.ajaxSetup({}, options),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				    completeDeferred = jQuery.Callbacks("once memory"),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				    requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function (key) {
						var match;
						if (state === 2) {
							if (!responseHeaders) {
								responseHeaders = {};
								while (match = rheaders.exec(responseHeadersString)) {
									responseHeaders[match[1].toLowerCase()] = match[2];
								}
							}
							match = responseHeaders[key.toLowerCase()];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function () {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function (name, value) {
						var lname = name.toLowerCase();
						if (!state) {
							name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
							requestHeaders[name] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function (type) {
						if (!state) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function (map) {
						var code;
						if (map) {
							if (state < 2) {
								for (code in map) {
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[code] = [statusCode[code], map[code]];
								}
							} else {
								// Execute the appropriate callbacks
								jqXHR.always(map[jqXHR.status]);
							}
						}
						return this;
					},

					// Cancel the request
					abort: function (statusText) {
						var finalText = statusText || strAbort;
						if (transport) {
							transport.abort(finalText);
						}
						done(0, finalText);
						return this;
					}
				};

				// Attach deferreds
				deferred.promise(jqXHR).complete = completeDeferred.add;
				jqXHR.success = jqXHR.done;
				jqXHR.error = jqXHR.fail;

				// Remove hash character (#7531: and string promotion)
				// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
				// Handle falsy url in the settings object (#10093: consistency with old signature)
				// We also use the url parameter if available
				s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");

				// Alias method option to type as per ticket #12004
				s.type = options.method || options.type || s.method || s.type;

				// Extract dataTypes list
				s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(core_rnotwhite) || [""];

				// A cross-domain request is in order when we have a protocol:host:port mismatch
				if (s.crossDomain == null) {
					parts = rurl.exec(s.url.toLowerCase());
					s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? 80 : 443)) != (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? 80 : 443))));
				}

				// Convert data if not already a string
				if (s.data && s.processData && typeof s.data !== "string") {
					s.data = jQuery.param(s.data, s.traditional);
				}

				// Apply prefilters
				inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

				// If request was aborted inside a prefilter, stop there
				if (state === 2) {
					return jqXHR;
				}

				// We can fire global events as of now if asked to
				fireGlobals = s.global;

				// Watch for a new set of requests
				if (fireGlobals && jQuery.active++ === 0) {
					jQuery.event.trigger("ajaxStart");
				}

				// Uppercase the type
				s.type = s.type.toUpperCase();

				// Determine if request has content
				s.hasContent = !rnoContent.test(s.type);

				// Save the URL in case we're toying with the If-Modified-Since
				// and/or If-None-Match header later on
				cacheURL = s.url;

				// More options handling for requests with no content
				if (!s.hasContent) {

					// If data is available, append data to url
					if (s.data) {
						cacheURL = s.url += (ajax_rquery.test(cacheURL) ? "&" : "?") + s.data;
						// #9682: remove data so that it's not used in an eventual retry
						delete s.data;
					}

					// Add anti-cache in url if needed
					if (s.cache === false) {
						s.url = rts.test(cacheURL) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace(rts, "$1_=" + ajax_nonce++) :

						// Otherwise add one to the end
						cacheURL + (ajax_rquery.test(cacheURL) ? "&" : "?") + "_=" + ajax_nonce++;
					}
				}

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if (s.ifModified) {
					if (jQuery.lastModified[cacheURL]) {
						jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
					}
					if (jQuery.etag[cacheURL]) {
						jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
					}
				}

				// Set the correct header, if data is being sent
				if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
					jqXHR.setRequestHeader("Content-Type", s.contentType);
				}

				// Set the Accepts header for the server, depending on the dataType
				jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);

				// Check for headers option
				for (i in s.headers) {
					jqXHR.setRequestHeader(i, s.headers[i]);
				}

				// Allow custom headers/mimetypes and early abort
				if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
					// Abort if not done already and return
					return jqXHR.abort();
				}

				// aborting is no longer a cancellation
				strAbort = "abort";

				// Install callbacks on deferreds
				for (i in { success: 1, error: 1, complete: 1 }) {
					jqXHR[i](s[i]);
				}

				// Get transport
				transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

				// If no transport, we auto-abort
				if (!transport) {
					done(-1, "No Transport");
				} else {
					jqXHR.readyState = 1;

					// Send global event
					if (fireGlobals) {
						globalEventContext.trigger("ajaxSend", [jqXHR, s]);
					}
					// Timeout
					if (s.async && s.timeout > 0) {
						timeoutTimer = setTimeout(function () {
							jqXHR.abort("timeout");
						}, s.timeout);
					}

					try {
						state = 1;
						transport.send(requestHeaders, done);
					} catch (e) {
						// Propagate exception as error if not done
						if (state < 2) {
							done(-1, e);
							// Simply rethrow otherwise
						} else {
							throw e;
						}
					}
				}

				// Callback for when everything is done
				function done(status, nativeStatusText, responses, headers) {
					var isSuccess,
					    success,
					    error,
					    response,
					    modified,
					    statusText = nativeStatusText;

					// Called once
					if (state === 2) {
						return;
					}

					// State is "done" now
					state = 2;

					// Clear timeout if it exists
					if (timeoutTimer) {
						clearTimeout(timeoutTimer);
					}

					// Dereference transport for early garbage collection
					// (no matter how long the jqXHR object will be used)
					transport = undefined;

					// Cache response headers
					responseHeadersString = headers || "";

					// Set readyState
					jqXHR.readyState = status > 0 ? 4 : 0;

					// Get response data
					if (responses) {
						response = ajaxHandleResponses(s, jqXHR, responses);
					}

					// If successful, handle type chaining
					if (status >= 200 && status < 300 || status === 304) {

						// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
						if (s.ifModified) {
							modified = jqXHR.getResponseHeader("Last-Modified");
							if (modified) {
								jQuery.lastModified[cacheURL] = modified;
							}
							modified = jqXHR.getResponseHeader("etag");
							if (modified) {
								jQuery.etag[cacheURL] = modified;
							}
						}

						// If not modified
						if (status === 304) {
							isSuccess = true;
							statusText = "notmodified";

							// If we have data
						} else {
							isSuccess = ajaxConvert(s, response);
							statusText = isSuccess.state;
							success = isSuccess.data;
							error = isSuccess.error;
							isSuccess = !error;
						}
					} else {
						// We extract error from statusText
						// then normalize statusText and status for non-aborts
						error = statusText;
						if (status || !statusText) {
							statusText = "error";
							if (status < 0) {
								status = 0;
							}
						}
					}

					// Set data for the fake xhr object
					jqXHR.status = status;
					jqXHR.statusText = (nativeStatusText || statusText) + "";

					// Success/Error
					if (isSuccess) {
						deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
					} else {
						deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
					}

					// Status-dependent callbacks
					jqXHR.statusCode(statusCode);
					statusCode = undefined;

					if (fireGlobals) {
						globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
					}

					// Complete
					completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

					if (fireGlobals) {
						globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
						// Handle the global AJAX counter
						if (! --jQuery.active) {
							jQuery.event.trigger("ajaxStop");
						}
					}
				}

				return jqXHR;
			},

			getScript: function (url, callback) {
				return jQuery.get(url, undefined, callback, "script");
			},

			getJSON: function (url, data, callback) {
				return jQuery.get(url, data, callback, "json");
			}
		});

		/* Handles responses to an ajax request:
	  * - sets all responseXXX fields accordingly
	  * - finds the right dataType (mediates between content-type and expected dataType)
	  * - returns the corresponding response
	  */
		function ajaxHandleResponses(s, jqXHR, responses) {

			var ct,
			    type,
			    finalDataType,
			    firstDataType,
			    contents = s.contents,
			    dataTypes = s.dataTypes,
			    responseFields = s.responseFields;

			// Fill responseXXX fields
			for (type in responseFields) {
				if (type in responses) {
					jqXHR[responseFields[type]] = responses[type];
				}
			}

			// Remove auto dataType and get content-type in the process
			while (dataTypes[0] === "*") {
				dataTypes.shift();
				if (ct === undefined) {
					ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
				}
			}

			// Check if we're dealing with a known content-type
			if (ct) {
				for (type in contents) {
					if (contents[type] && contents[type].test(ct)) {
						dataTypes.unshift(type);
						break;
					}
				}
			}

			// Check to see if we have a response for the expected dataType
			if (dataTypes[0] in responses) {
				finalDataType = dataTypes[0];
			} else {
				// Try convertible dataTypes
				for (type in responses) {
					if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
						finalDataType = type;
						break;
					}
					if (!firstDataType) {
						firstDataType = type;
					}
				}
				// Or just use first one
				finalDataType = finalDataType || firstDataType;
			}

			// If we found a dataType
			// We add the dataType to the list if needed
			// and return the corresponding response
			if (finalDataType) {
				if (finalDataType !== dataTypes[0]) {
					dataTypes.unshift(finalDataType);
				}
				return responses[finalDataType];
			}
		}

		// Chain conversions given the request and the original response
		function ajaxConvert(s, response) {

			var conv,
			    conv2,
			    current,
			    tmp,
			    converters = {},
			    i = 0,

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice(),
			    prev = dataTypes[0];

			// Apply the dataFilter if provided
			if (s.dataFilter) {
				response = s.dataFilter(response, s.dataType);
			}

			// Create converters map with lowercased keys
			if (dataTypes[1]) {
				for (conv in s.converters) {
					converters[conv.toLowerCase()] = s.converters[conv];
				}
			}

			// Convert to each sequential dataType, tolerating list modification
			for (; current = dataTypes[++i];) {

				// There's only work to do if current dataType is non-auto
				if (current !== "*") {

					// Convert response if prev dataType is non-auto and differs from current
					if (prev !== "*" && prev !== current) {

						// Seek a direct converter
						conv = converters[prev + " " + current] || converters["* " + current];

						// If none found, seek a pair
						if (!conv) {
							for (conv2 in converters) {

								// If conv2 outputs current
								tmp = conv2.split(" ");
								if (tmp[1] === current) {

									// If prev can be converted to accepted input
									conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
									if (conv) {
										// Condense equivalence converters
										if (conv === true) {
											conv = converters[conv2];

											// Otherwise, insert the intermediate dataType
										} else if (converters[conv2] !== true) {
											current = tmp[0];
											dataTypes.splice(i--, 0, current);
										}

										break;
									}
								}
							}
						}

						// Apply converter (if not an equivalence)
						if (conv !== true) {

							// Unless errors are allowed to bubble, catch and return them
							if (conv && s["throws"]) {
								response = conv(response);
							} else {
								try {
									response = conv(response);
								} catch (e) {
									return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
								}
							}
						}
					}

					// Update prev for next iteration
					prev = current;
				}
			}

			return { state: "success", data: response };
		}
		// Install script dataType
		jQuery.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /(?:java|ecma)script/
			},
			converters: {
				"text script": function (text) {
					jQuery.globalEval(text);
					return text;
				}
			}
		});

		// Handle cache's special case and global
		jQuery.ajaxPrefilter("script", function (s) {
			if (s.cache === undefined) {
				s.cache = false;
			}
			if (s.crossDomain) {
				s.type = "GET";
				s.global = false;
			}
		});

		// Bind script tag hack transport
		jQuery.ajaxTransport("script", function (s) {

			// This transport only deals with cross domain requests
			if (s.crossDomain) {

				var script,
				    head = document.head || jQuery("head")[0] || document.documentElement;

				return {

					send: function (_, callback) {

						script = document.createElement("script");

						script.async = true;

						if (s.scriptCharset) {
							script.charset = s.scriptCharset;
						}

						script.src = s.url;

						// Attach handlers for all browsers
						script.onload = script.onreadystatechange = function (_, isAbort) {

							if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {

								// Handle memory leak in IE
								script.onload = script.onreadystatechange = null;

								// Remove the script
								if (script.parentNode) {
									script.parentNode.removeChild(script);
								}

								// Dereference the script
								script = null;

								// Callback if not abort
								if (!isAbort) {
									callback(200, "success");
								}
							}
						};

						// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
						// Use native DOM manipulation to avoid our domManip AJAX trickery
						head.insertBefore(script, head.firstChild);
					},

					abort: function () {
						if (script) {
							script.onload(undefined, true);
						}
					}
				};
			}
		});
		var oldCallbacks = [],
		    rjsonp = /(=)\?(?=&|$)|\?\?/;

		// Default jsonp settings
		jQuery.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function () {
				var callback = oldCallbacks.pop() || jQuery.expando + "_" + ajax_nonce++;
				this[callback] = true;
				return callback;
			}
		});

		// Detect, normalize options and install callbacks for jsonp requests
		jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

			var callbackName,
			    overwritten,
			    responseContainer,
			    jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");

			// Handle iff the expected data type is "jsonp" or we have a parameter to set
			if (jsonProp || s.dataTypes[0] === "jsonp") {

				// Get callback name, remembering preexisting value associated with it
				callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;

				// Insert callback into url or form data
				if (jsonProp) {
					s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
				} else if (s.jsonp !== false) {
					s.url += (ajax_rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
				}

				// Use data converter to retrieve json after script execution
				s.converters["script json"] = function () {
					if (!responseContainer) {
						jQuery.error(callbackName + " was not called");
					}
					return responseContainer[0];
				};

				// force json dataType
				s.dataTypes[0] = "json";

				// Install callback
				overwritten = window[callbackName];
				window[callbackName] = function () {
					responseContainer = arguments;
				};

				// Clean-up function (fires after converters)
				jqXHR.always(function () {
					// Restore preexisting value
					window[callbackName] = overwritten;

					// Save back as free
					if (s[callbackName]) {
						// make sure that re-using the options doesn't screw things around
						s.jsonpCallback = originalSettings.jsonpCallback;

						// save the callback name for future use
						oldCallbacks.push(callbackName);
					}

					// Call if it was a function and we have a response
					if (responseContainer && jQuery.isFunction(overwritten)) {
						overwritten(responseContainer[0]);
					}

					responseContainer = overwritten = undefined;
				});

				// Delegate to script
				return "script";
			}
		});
		var xhrCallbacks,
		    xhrSupported,
		    xhrId = 0,

		// #5280: Internet Explorer will keep connections alive if we don't abort on unload
		xhrOnUnloadAbort = window.ActiveXObject && function () {
			// Abort all pending requests
			var key;
			for (key in xhrCallbacks) {
				xhrCallbacks[key](undefined, true);
			}
		};

		// Functions to create xhrs
		function createStandardXHR() {
			try {
				return new window.XMLHttpRequest();
			} catch (e) {}
		}

		function createActiveXHR() {
			try {
				return new window.ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {}
		}

		// Create the request object
		// (This is still attached to ajaxSettings for backward compatibility)
		jQuery.ajaxSettings.xhr = window.ActiveXObject ?
		/* Microsoft failed to properly
	  * implement the XMLHttpRequest in IE7 (can't request local files),
	  * so we use the ActiveXObject when it is available
	  * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
	  * we need a fallback.
	  */
		function () {
			return !this.isLocal && createStandardXHR() || createActiveXHR();
		} :
		// For all other browsers, use the standard XMLHttpRequest object
		createStandardXHR;

		// Determine support properties
		xhrSupported = jQuery.ajaxSettings.xhr();
		jQuery.support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
		xhrSupported = jQuery.support.ajax = !!xhrSupported;

		// Create transport if the browser can provide an xhr
		if (xhrSupported) {

			jQuery.ajaxTransport(function (s) {
				// Cross domain only allowed if supported through XMLHttpRequest
				if (!s.crossDomain || jQuery.support.cors) {

					var callback;

					return {
						send: function (headers, complete) {

							// Get a new xhr
							var handle,
							    i,
							    xhr = s.xhr();

							// Open the socket
							// Passing null username, generates a login popup on Opera (#2865)
							if (s.username) {
								xhr.open(s.type, s.url, s.async, s.username, s.password);
							} else {
								xhr.open(s.type, s.url, s.async);
							}

							// Apply custom fields if provided
							if (s.xhrFields) {
								for (i in s.xhrFields) {
									xhr[i] = s.xhrFields[i];
								}
							}

							// Override mime type if needed
							if (s.mimeType && xhr.overrideMimeType) {
								xhr.overrideMimeType(s.mimeType);
							}

							// X-Requested-With header
							// For cross-domain requests, seeing as conditions for a preflight are
							// akin to a jigsaw puzzle, we simply never set it to be sure.
							// (it can always be set on a per-request basis or even using ajaxSetup)
							// For same-domain requests, won't change header if already provided.
							if (!s.crossDomain && !headers["X-Requested-With"]) {
								headers["X-Requested-With"] = "XMLHttpRequest";
							}

							// Need an extra try/catch for cross domain requests in Firefox 3
							try {
								for (i in headers) {
									xhr.setRequestHeader(i, headers[i]);
								}
							} catch (err) {}

							// Do send the request
							// This may raise an exception which is actually
							// handled in jQuery.ajax (so no try/catch here)
							xhr.send(s.hasContent && s.data || null);

							// Listener
							callback = function (_, isAbort) {

								var status, statusText, responseHeaders, responses, xml;

								// Firefox throws exceptions when accessing properties
								// of an xhr when a network error occurred
								// http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
								try {

									// Was never called and is aborted or complete
									if (callback && (isAbort || xhr.readyState === 4)) {

										// Only called once
										callback = undefined;

										// Do not keep as active anymore
										if (handle) {
											xhr.onreadystatechange = jQuery.noop;
											if (xhrOnUnloadAbort) {
												delete xhrCallbacks[handle];
											}
										}

										// If it's an abort
										if (isAbort) {
											// Abort it manually if needed
											if (xhr.readyState !== 4) {
												xhr.abort();
											}
										} else {
											responses = {};
											status = xhr.status;
											xml = xhr.responseXML;
											responseHeaders = xhr.getAllResponseHeaders();

											// Construct response list
											if (xml && xml.documentElement /* #4958 */) {
													responses.xml = xml;
												}

											// When requesting binary data, IE6-9 will throw an exception
											// on any attempt to access responseText (#11426)
											if (typeof xhr.responseText === "string") {
												responses.text = xhr.responseText;
											}

											// Firefox throws an exception when accessing
											// statusText for faulty cross-domain requests
											try {
												statusText = xhr.statusText;
											} catch (e) {
												// We normalize with Webkit giving an empty statusText
												statusText = "";
											}

											// Filter status for non standard behaviors

											// If the request is local and we have data: assume a success
											// (success with no data won't get notified, that's the best we
											// can do given current implementations)
											if (!status && s.isLocal && !s.crossDomain) {
												status = responses.text ? 200 : 404;
												// IE - #1450: sometimes returns 1223 when it should be 204
											} else if (status === 1223) {
												status = 204;
											}
										}
									}
								} catch (firefoxAccessException) {
									if (!isAbort) {
										complete(-1, firefoxAccessException);
									}
								}

								// Call complete if needed
								if (responses) {
									complete(status, statusText, responses, responseHeaders);
								}
							};

							if (!s.async) {
								// if we're in sync mode we fire the callback
								callback();
							} else if (xhr.readyState === 4) {
								// (IE6 & IE7) if it's in cache and has been
								// retrieved directly we need to fire the callback
								setTimeout(callback);
							} else {
								handle = ++xhrId;
								if (xhrOnUnloadAbort) {
									// Create the active xhrs callbacks list if needed
									// and attach the unload handler
									if (!xhrCallbacks) {
										xhrCallbacks = {};
										jQuery(window).unload(xhrOnUnloadAbort);
									}
									// Add to list of active xhrs callbacks
									xhrCallbacks[handle] = callback;
								}
								xhr.onreadystatechange = callback;
							}
						},

						abort: function () {
							if (callback) {
								callback(undefined, true);
							}
						}
					};
				}
			});
		}
		var fxNow,
		    timerId,
		    rfxtypes = /^(?:toggle|show|hide)$/,
		    rfxnum = new RegExp("^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i"),
		    rrun = /queueHooks$/,
		    animationPrefilters = [defaultPrefilter],
		    tweeners = {
			"*": [function (prop, value) {
				var end,
				    unit,
				    tween = this.createTween(prop, value),
				    parts = rfxnum.exec(value),
				    target = tween.cur(),
				    start = +target || 0,
				    scale = 1,
				    maxIterations = 20;

				if (parts) {
					end = +parts[2];
					unit = parts[3] || (jQuery.cssNumber[prop] ? "" : "px");

					// We need to compute starting value
					if (unit !== "px" && start) {
						// Iteratively approximate from a nonzero starting point
						// Prefer the current property, because this process will be trivial if it uses the same units
						// Fallback to end or a simple constant
						start = jQuery.css(tween.elem, prop, true) || end || 1;

						do {
							// If previous iteration zeroed out, double until we get *something*
							// Use a string for doubling factor so we don't accidentally see scale as unchanged below
							scale = scale || ".5";

							// Adjust and apply
							start = start / scale;
							jQuery.style(tween.elem, prop, start + unit);

							// Update scale, tolerating zero or NaN from tween.cur()
							// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
						} while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
					}

					tween.unit = unit;
					tween.start = start;
					// If a +=/-= token was provided, we're doing a relative animation
					tween.end = parts[1] ? start + (parts[1] + 1) * end : end;
				}
				return tween;
			}]
		};

		// Animations created synchronously will run synchronously
		function createFxNow() {
			setTimeout(function () {
				fxNow = undefined;
			});
			return fxNow = jQuery.now();
		}

		function createTweens(animation, props) {
			jQuery.each(props, function (prop, value) {
				var collection = (tweeners[prop] || []).concat(tweeners["*"]),
				    index = 0,
				    length = collection.length;
				for (; index < length; index++) {
					if (collection[index].call(animation, prop, value)) {

						// we're done with this property
						return;
					}
				}
			});
		}

		function Animation(elem, properties, options) {
			var result,
			    stopped,
			    index = 0,
			    length = animationPrefilters.length,
			    deferred = jQuery.Deferred().always(function () {
				// don't match elem in the :animated selector
				delete tick.elem;
			}),
			    tick = function () {
				if (stopped) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
				    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),

				// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
				temp = remaining / animation.duration || 0,
				    percent = 1 - temp,
				    index = 0,
				    length = animation.tweens.length;

				for (; index < length; index++) {
					animation.tweens[index].run(percent);
				}

				deferred.notifyWith(elem, [animation, percent, remaining]);

				if (percent < 1 && length) {
					return remaining;
				} else {
					deferred.resolveWith(elem, [animation]);
					return false;
				}
			},
			    animation = deferred.promise({
				elem: elem,
				props: jQuery.extend({}, properties),
				opts: jQuery.extend(true, { specialEasing: {} }, options),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function (prop, end) {
					var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
					animation.tweens.push(tween);
					return tween;
				},
				stop: function (gotoEnd) {
					var index = 0,

					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
					if (stopped) {
						return this;
					}
					stopped = true;
					for (; index < length; index++) {
						animation.tweens[index].run(1);
					}

					// resolve when we played the last frame
					// otherwise, reject
					if (gotoEnd) {
						deferred.resolveWith(elem, [animation, gotoEnd]);
					} else {
						deferred.rejectWith(elem, [animation, gotoEnd]);
					}
					return this;
				}
			}),
			    props = animation.props;

			propFilter(props, animation.opts.specialEasing);

			for (; index < length; index++) {
				result = animationPrefilters[index].call(animation, elem, props, animation.opts);
				if (result) {
					return result;
				}
			}

			createTweens(animation, props);

			if (jQuery.isFunction(animation.opts.start)) {
				animation.opts.start.call(elem, animation);
			}

			jQuery.fx.timer(jQuery.extend(tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			}));

			// attach callbacks from options
			return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
		}

		function propFilter(props, specialEasing) {
			var index, name, easing, value, hooks;

			// camelCase, specialEasing and expand cssHook pass
			for (index in props) {
				name = jQuery.camelCase(index);
				easing = specialEasing[name];
				value = props[index];
				if (jQuery.isArray(value)) {
					easing = value[1];
					value = props[index] = value[0];
				}

				if (index !== name) {
					props[name] = value;
					delete props[index];
				}

				hooks = jQuery.cssHooks[name];
				if (hooks && "expand" in hooks) {
					value = hooks.expand(value);
					delete props[name];

					// not quite $.extend, this wont overwrite keys already present.
					// also - reusing 'index' from above because we have the correct "name"
					for (index in value) {
						if (!(index in props)) {
							props[index] = value[index];
							specialEasing[index] = easing;
						}
					}
				} else {
					specialEasing[name] = easing;
				}
			}
		}

		jQuery.Animation = jQuery.extend(Animation, {

			tweener: function (props, callback) {
				if (jQuery.isFunction(props)) {
					callback = props;
					props = ["*"];
				} else {
					props = props.split(" ");
				}

				var prop,
				    index = 0,
				    length = props.length;

				for (; index < length; index++) {
					prop = props[index];
					tweeners[prop] = tweeners[prop] || [];
					tweeners[prop].unshift(callback);
				}
			},

			prefilter: function (callback, prepend) {
				if (prepend) {
					animationPrefilters.unshift(callback);
				} else {
					animationPrefilters.push(callback);
				}
			}
		});

		function defaultPrefilter(elem, props, opts) {
			/*jshint validthis:true */
			var index,
			    prop,
			    value,
			    length,
			    dataShow,
			    toggle,
			    tween,
			    hooks,
			    oldfire,
			    anim = this,
			    style = elem.style,
			    orig = {},
			    handled = [],
			    hidden = elem.nodeType && isHidden(elem);

			// handle queue: false promises
			if (!opts.queue) {
				hooks = jQuery._queueHooks(elem, "fx");
				if (hooks.unqueued == null) {
					hooks.unqueued = 0;
					oldfire = hooks.empty.fire;
					hooks.empty.fire = function () {
						if (!hooks.unqueued) {
							oldfire();
						}
					};
				}
				hooks.unqueued++;

				anim.always(function () {
					// doing this makes sure that the complete handler will be called
					// before this completes
					anim.always(function () {
						hooks.unqueued--;
						if (!jQuery.queue(elem, "fx").length) {
							hooks.empty.fire();
						}
					});
				});
			}

			// height/width overflow pass
			if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
				// Make sure that nothing sneaks out
				// Record all 3 overflow attributes because IE does not
				// change the overflow attribute when overflowX and
				// overflowY are set to the same value
				opts.overflow = [style.overflow, style.overflowX, style.overflowY];

				// Set display property to inline-block for height/width
				// animations on inline elements that are having width/height animated
				if (jQuery.css(elem, "display") === "inline" && jQuery.css(elem, "float") === "none") {

					// inline-level elements accept inline-block;
					// block-level elements need to be inline with layout
					if (!jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay(elem.nodeName) === "inline") {
						style.display = "inline-block";
					} else {
						style.zoom = 1;
					}
				}
			}

			if (opts.overflow) {
				style.overflow = "hidden";
				if (!jQuery.support.shrinkWrapBlocks) {
					anim.done(function () {
						style.overflow = opts.overflow[0];
						style.overflowX = opts.overflow[1];
						style.overflowY = opts.overflow[2];
					});
				}
			}

			// show/hide pass
			for (index in props) {
				value = props[index];
				if (rfxtypes.exec(value)) {
					delete props[index];
					toggle = toggle || value === "toggle";
					if (value === (hidden ? "hide" : "show")) {
						continue;
					}
					handled.push(index);
				}
			}

			length = handled.length;
			if (length) {
				dataShow = jQuery._data(elem, "fxshow") || jQuery._data(elem, "fxshow", {});
				if ("hidden" in dataShow) {
					hidden = dataShow.hidden;
				}

				// store state if its toggle - enables .stop().toggle() to "reverse"
				if (toggle) {
					dataShow.hidden = !hidden;
				}
				if (hidden) {
					jQuery(elem).show();
				} else {
					anim.done(function () {
						jQuery(elem).hide();
					});
				}
				anim.done(function () {
					var prop;
					jQuery._removeData(elem, "fxshow");
					for (prop in orig) {
						jQuery.style(elem, prop, orig[prop]);
					}
				});
				for (index = 0; index < length; index++) {
					prop = handled[index];
					tween = anim.createTween(prop, hidden ? dataShow[prop] : 0);
					orig[prop] = dataShow[prop] || jQuery.style(elem, prop);

					if (!(prop in dataShow)) {
						dataShow[prop] = tween.start;
						if (hidden) {
							tween.end = tween.start;
							tween.start = prop === "width" || prop === "height" ? 1 : 0;
						}
					}
				}
			}
		}

		function Tween(elem, options, prop, end, easing) {
			return new Tween.prototype.init(elem, options, prop, end, easing);
		}
		jQuery.Tween = Tween;

		Tween.prototype = {
			constructor: Tween,
			init: function (elem, options, prop, end, easing, unit) {
				this.elem = elem;
				this.prop = prop;
				this.easing = easing || "swing";
				this.options = options;
				this.start = this.now = this.cur();
				this.end = end;
				this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
			},
			cur: function () {
				var hooks = Tween.propHooks[this.prop];

				return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
			},
			run: function (percent) {
				var eased,
				    hooks = Tween.propHooks[this.prop];

				if (this.options.duration) {
					this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
				} else {
					this.pos = eased = percent;
				}
				this.now = (this.end - this.start) * eased + this.start;

				if (this.options.step) {
					this.options.step.call(this.elem, this.now, this);
				}

				if (hooks && hooks.set) {
					hooks.set(this);
				} else {
					Tween.propHooks._default.set(this);
				}
				return this;
			}
		};

		Tween.prototype.init.prototype = Tween.prototype;

		Tween.propHooks = {
			_default: {
				get: function (tween) {
					var result;

					if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
						return tween.elem[tween.prop];
					}

					// passing a non empty string as a 3rd parameter to .css will automatically
					// attempt a parseFloat and fallback to a string if the parse fails
					// so, simple values such as "10px" are parsed to Float.
					// complex values such as "rotate(1rad)" are returned as is.
					result = jQuery.css(tween.elem, tween.prop, "auto");
					// Empty strings, null, undefined and "auto" are converted to 0.
					return !result || result === "auto" ? 0 : result;
				},
				set: function (tween) {
					// use step hook for back compat - use cssHook if its there - use .style if its
					// available and use plain properties where available
					if (jQuery.fx.step[tween.prop]) {
						jQuery.fx.step[tween.prop](tween);
					} else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
						jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
					} else {
						tween.elem[tween.prop] = tween.now;
					}
				}
			}
		};

		// Remove in 2.0 - this supports IE8's panic based approach
		// to setting things on disconnected nodes

		Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
			set: function (tween) {
				if (tween.elem.nodeType && tween.elem.parentNode) {
					tween.elem[tween.prop] = tween.now;
				}
			}
		};

		jQuery.each(["toggle", "show", "hide"], function (i, name) {
			var cssFn = jQuery.fn[name];
			jQuery.fn[name] = function (speed, easing, callback) {
				return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
			};
		});

		jQuery.fn.extend({
			fadeTo: function (speed, to, easing, callback) {

				// show any hidden elements after setting opacity to 0
				return this.filter(isHidden).css("opacity", 0).show()

				// animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback);
			},
			animate: function (prop, speed, easing, callback) {
				var empty = jQuery.isEmptyObject(prop),
				    optall = jQuery.speed(speed, easing, callback),
				    doAnimation = function () {
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation(this, jQuery.extend({}, prop), optall);
					doAnimation.finish = function () {
						anim.stop(true);
					};
					// Empty animations, or finishing resolves immediately
					if (empty || jQuery._data(this, "finish")) {
						anim.stop(true);
					}
				};
				doAnimation.finish = doAnimation;

				return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
			},
			stop: function (type, clearQueue, gotoEnd) {
				var stopQueue = function (hooks) {
					var stop = hooks.stop;
					delete hooks.stop;
					stop(gotoEnd);
				};

				if (typeof type !== "string") {
					gotoEnd = clearQueue;
					clearQueue = type;
					type = undefined;
				}
				if (clearQueue && type !== false) {
					this.queue(type || "fx", []);
				}

				return this.each(function () {
					var dequeue = true,
					    index = type != null && type + "queueHooks",
					    timers = jQuery.timers,
					    data = jQuery._data(this);

					if (index) {
						if (data[index] && data[index].stop) {
							stopQueue(data[index]);
						}
					} else {
						for (index in data) {
							if (data[index] && data[index].stop && rrun.test(index)) {
								stopQueue(data[index]);
							}
						}
					}

					for (index = timers.length; index--;) {
						if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
							timers[index].anim.stop(gotoEnd);
							dequeue = false;
							timers.splice(index, 1);
						}
					}

					// start the next in the queue if the last step wasn't forced
					// timers currently will call their complete callbacks, which will dequeue
					// but only if they were gotoEnd
					if (dequeue || !gotoEnd) {
						jQuery.dequeue(this, type);
					}
				});
			},
			finish: function (type) {
				if (type !== false) {
					type = type || "fx";
				}
				return this.each(function () {
					var index,
					    data = jQuery._data(this),
					    queue = data[type + "queue"],
					    hooks = data[type + "queueHooks"],
					    timers = jQuery.timers,
					    length = queue ? queue.length : 0;

					// enable finishing flag on private data
					data.finish = true;

					// empty the queue first
					jQuery.queue(this, type, []);

					if (hooks && hooks.cur && hooks.cur.finish) {
						hooks.cur.finish.call(this);
					}

					// look for any active animations, and finish them
					for (index = timers.length; index--;) {
						if (timers[index].elem === this && timers[index].queue === type) {
							timers[index].anim.stop(true);
							timers.splice(index, 1);
						}
					}

					// look for any animations in the old queue and finish them
					for (index = 0; index < length; index++) {
						if (queue[index] && queue[index].finish) {
							queue[index].finish.call(this);
						}
					}

					// turn off finishing flag
					delete data.finish;
				});
			}
		});

		// Generate parameters to create a standard animation
		function genFx(type, includeWidth) {
			var which,
			    attrs = { height: type },
			    i = 0;

			// if we include width, step value is 1 to do all cssExpand values,
			// if we don't include width, step value is 2 to skip over Left and Right
			includeWidth = includeWidth ? 1 : 0;
			for (; i < 4; i += 2 - includeWidth) {
				which = cssExpand[i];
				attrs["margin" + which] = attrs["padding" + which] = type;
			}

			if (includeWidth) {
				attrs.opacity = attrs.width = type;
			}

			return attrs;
		}

		// Generate shortcuts for custom animations
		jQuery.each({
			slideDown: genFx("show"),
			slideUp: genFx("hide"),
			slideToggle: genFx("toggle"),
			fadeIn: { opacity: "show" },
			fadeOut: { opacity: "hide" },
			fadeToggle: { opacity: "toggle" }
		}, function (name, props) {
			jQuery.fn[name] = function (speed, easing, callback) {
				return this.animate(props, speed, easing, callback);
			};
		});

		jQuery.speed = function (speed, easing, fn) {
			var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
				complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
				duration: speed,
				easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
			};

			opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;

			// normalize opt.queue - true/undefined/null -> "fx"
			if (opt.queue == null || opt.queue === true) {
				opt.queue = "fx";
			}

			// Queueing
			opt.old = opt.complete;

			opt.complete = function () {
				if (jQuery.isFunction(opt.old)) {
					opt.old.call(this);
				}

				if (opt.queue) {
					jQuery.dequeue(this, opt.queue);
				}
			};

			return opt;
		};

		jQuery.easing = {
			linear: function (p) {
				return p;
			},
			swing: function (p) {
				return 0.5 - Math.cos(p * Math.PI) / 2;
			}
		};

		jQuery.timers = [];
		jQuery.fx = Tween.prototype.init;
		jQuery.fx.tick = function () {
			var timer,
			    timers = jQuery.timers,
			    i = 0;

			fxNow = jQuery.now();

			for (; i < timers.length; i++) {
				timer = timers[i];
				// Checks the timer has not already been removed
				if (!timer() && timers[i] === timer) {
					timers.splice(i--, 1);
				}
			}

			if (!timers.length) {
				jQuery.fx.stop();
			}
			fxNow = undefined;
		};

		jQuery.fx.timer = function (timer) {
			if (timer() && jQuery.timers.push(timer)) {
				jQuery.fx.start();
			}
		};

		jQuery.fx.interval = 13;

		jQuery.fx.start = function () {
			if (!timerId) {
				timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
			}
		};

		jQuery.fx.stop = function () {
			clearInterval(timerId);
			timerId = null;
		};

		jQuery.fx.speeds = {
			slow: 600,
			fast: 200,
			// Default speed
			_default: 400
		};

		// Back Compat <1.8 extension point
		jQuery.fx.step = {};

		if (jQuery.expr && jQuery.expr.filters) {
			jQuery.expr.filters.animated = function (elem) {
				return jQuery.grep(jQuery.timers, function (fn) {
					return elem === fn.elem;
				}).length;
			};
		}
		jQuery.fn.offset = function (options) {
			if (arguments.length) {
				return options === undefined ? this : this.each(function (i) {
					jQuery.offset.setOffset(this, options, i);
				});
			}

			var docElem,
			    win,
			    box = { top: 0, left: 0 },
			    elem = this[0],
			    doc = elem && elem.ownerDocument;

			if (!doc) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if (!jQuery.contains(docElem, elem)) {
				return box;
			}

			// If we don't have gBCR, just use 0,0 rather than error
			// BlackBerry 5, iOS 3 (original iPhone)
			if (typeof elem.getBoundingClientRect !== "undefined") {
				box = elem.getBoundingClientRect();
			}
			win = getWindow(doc);
			return {
				top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
				left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
			};
		};

		jQuery.offset = {

			setOffset: function (elem, options, i) {
				var position = jQuery.css(elem, "position");

				// set position first, in-case top/left are set even on static elem
				if (position === "static") {
					elem.style.position = "relative";
				}

				var curElem = jQuery(elem),
				    curOffset = curElem.offset(),
				    curCSSTop = jQuery.css(elem, "top"),
				    curCSSLeft = jQuery.css(elem, "left"),
				    calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
				    props = {},
				    curPosition = {},
				    curTop,
				    curLeft;

				// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
				if (calculatePosition) {
					curPosition = curElem.position();
					curTop = curPosition.top;
					curLeft = curPosition.left;
				} else {
					curTop = parseFloat(curCSSTop) || 0;
					curLeft = parseFloat(curCSSLeft) || 0;
				}

				if (jQuery.isFunction(options)) {
					options = options.call(elem, i, curOffset);
				}

				if (options.top != null) {
					props.top = options.top - curOffset.top + curTop;
				}
				if (options.left != null) {
					props.left = options.left - curOffset.left + curLeft;
				}

				if ("using" in options) {
					options.using.call(elem, props);
				} else {
					curElem.css(props);
				}
			}
		};

		jQuery.fn.extend({

			position: function () {
				if (!this[0]) {
					return;
				}

				var offsetParent,
				    offset,
				    parentOffset = { top: 0, left: 0 },
				    elem = this[0];

				// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
				if (jQuery.css(elem, "position") === "fixed") {
					// we assume that getBoundingClientRect is available when computed position is fixed
					offset = elem.getBoundingClientRect();
				} else {
					// Get *real* offsetParent
					offsetParent = this.offsetParent();

					// Get correct offsets
					offset = this.offset();
					if (!jQuery.nodeName(offsetParent[0], "html")) {
						parentOffset = offsetParent.offset();
					}

					// Add offsetParent borders
					parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
					parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
				}

				// Subtract parent offsets and element margins
				// note: when an element has margin: auto the offsetLeft and marginLeft
				// are the same in Safari causing offset.left to incorrectly be 0
				return {
					top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
					left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
				};
			},

			offsetParent: function () {
				return this.map(function () {
					var offsetParent = this.offsetParent || document.documentElement;
					while (offsetParent && !jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static") {
						offsetParent = offsetParent.offsetParent;
					}
					return offsetParent || document.documentElement;
				});
			}
		});

		// Create scrollLeft and scrollTop methods
		jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
			var top = /Y/.test(prop);

			jQuery.fn[method] = function (val) {
				return jQuery.access(this, function (elem, method, val) {
					var win = getWindow(elem);

					if (val === undefined) {
						return win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method];
					}

					if (win) {
						win.scrollTo(!top ? val : jQuery(win).scrollLeft(), top ? val : jQuery(win).scrollTop());
					} else {
						elem[method] = val;
					}
				}, method, val, arguments.length, null);
			};
		});

		function getWindow(elem) {
			return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
		}
		// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
		jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
			jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {
				// margin is only for outerHeight, outerWidth
				jQuery.fn[funcName] = function (margin, value) {
					var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
					    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

					return jQuery.access(this, function (elem, type, value) {
						var doc;

						if (jQuery.isWindow(elem)) {
							// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
							// isn't a whole lot we can do. See pull request at this URL for discussion:
							// https://github.com/jquery/jquery/pull/764
							return elem.document.documentElement["client" + name];
						}

						// Get document width or height
						if (elem.nodeType === 9) {
							doc = elem.documentElement;

							// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
							// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
							return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
						}

						return value === undefined ?
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css(elem, type, extra) :

						// Set width or height on the element
						jQuery.style(elem, type, value, extra);
					}, type, chainable ? margin : undefined, chainable, null);
				};
			});
		});
		// Limit scope pollution from any deprecated API
		// (function() {

		// })();
		// Expose jQuery to the global object
		window.jQuery = window.$ = jQuery;

		// Expose jQuery as an AMD module, but only for AMD loaders that
		// understand the issues with loading multiple versions of jQuery
		// in a page that all might call define(). The loader will indicate
		// they have special allowances for multiple jQuery versions by
		// specifying define.amd.jQuery = true. Register as a named module,
		// since jQuery can be concatenated with other files that may use define,
		// but not use a proper concatenation script that understands anonymous
		// AMD modules. A named AMD is safest and most robust way to register.
		// Lowercase jquery is used because AMD module names are derived from
		// file names, and jQuery is normally delivered in a lowercase file name.
		// Do this after creating the global so that if an AMD module wants to call
		// noConflict to hide this version of jQuery, it will work.
		if ("function" === "function" && __webpack_require__(437) && __webpack_require__(437).jQuery) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return jQuery;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}
	})(window);

/***/ }),

/***/ 437:
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),

/***/ 438:
/***/ (function(module, exports) {

	function init() {
		var tags = $(".tagcloud a");
		tags.css({ "font-size": "12px" });
		for (var i = 0, len = tags.length; i < len; i++) {
			var num = tags.eq(i).html().length % 5 + 1;
			tags[i].className = "";
			tags.eq(i).addClass("color" + num);
		}
	}

	module.exports = {
		init: init
	};

/***/ }),

/***/ 439:
/***/ (function(module, exports) {

	function init() {
		var frameClass = 'js-archives-frame';

		if (top !== window) {
			// 子级

			// 特殊样式
			$('body').addClass('archive-inner');
			// 父级跳转
			$('.archive-article-title').click(function () {
				var link = $(this).attr('href');
				top.location.href = link;
				return false;
			});
			// 页码
			$('.page-number').click(function () {
				$(top.document).find('.' + frameClass).hide();
			});
			// 去掉日期点击
			$('.archive-article-date').attr('href', 'javascript:void(0);');
		} else if (!/\/archives\/(.*)/.test(window.location.pathname)) {
			// 父级
			var $frame = $('<iframe class="' + frameClass + '"></iframe>').attr('src', '/archives/');
			$('.tools-section-all').append($frame);
			// 避免闪动
			$frame[0].onload = function () {
				var timeout = setInterval(function () {
					var framebody = $($('.js-archives-frame')[0].contentWindow.document).find('.archive-inner');
					if (framebody.length) {
						$frame.show();
						clearTimeout(timeout);
					}
				}, 50);
			};
		}
	}

	module.exports = {
		init: init
	};

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

	var Util = __webpack_require__(28);
	var $article, $tools;
	var localKey = 'yilia-menu';

	function triggerClk(idx) {
		$('.btn-wrap li').eq(idx).trigger('click');
	}
	function init() {
		// 变量初始化
		$article = $('.mid-col');
		$tools = $('.tools-col');

		// 切换
		$('.btn-wrap li').click(function () {
			var idx = $(this).index();
			window.localStorage.setItem(localKey, idx);
			$('.btn-wrap li').removeClass('chose');
			$(this).addClass('chose');
			$('.tools-section').removeClass('chose');
			$('.tools-wrap .tools-section').eq(idx).addClass('chose');
		});

		// 本地缓存
		var initIndex = parseInt(window.localStorage.getItem(localKey) || 0);
		triggerClk(initIndex);

		// about me
		var $about = $('.aboutme-wrap');
		var aboutStr = $about.html();
		$about.html(Util.decode(aboutStr));
	}

	function toggle() {
		$article.toggleClass('show');
		$tools.toggleClass('show');
	}

	function show(idx) {
		triggerClk(idx);
		$article.addClass('show');
		$tools.addClass('show');
	}

	function hide() {
		$article.removeClass('show');
		$tools.removeClass('show');
	}

	module.exports = {
		init: init,
		toggle: toggle,
		show: show,
		hide: hide
	};

/***/ }),

/***/ 441:
/***/ (function(module, exports) {

	// 由于hexo分页不支持，手工美化

	function init() {
		var $nav = $('#page-nav');
		if (!$nav.find('.extend.prev').length) {
			$nav.prepend('<a class="extend prev disabled" rel="prev">&laquo; Prev</a>');
		}
		if (!$nav.find('.extend.next').length) {
			$nav.append('<a class="extend next disabled" rel="next">Next &raquo;</a>');
		}
	}

	module.exports = {
		init: init
	};

/***/ }),

/***/ 442:
/***/ (function(module, exports) {

	/*!
	 * fancyBox - jQuery Plugin
	 * version: 2.1.5 (Fri, 14 Jun 2013)
	 * requires jQuery v1.6 or later
	 *
	 * Examples at http://fancyapps.com/fancybox/
	 * License: www.fancyapps.com/fancybox/#license
	 *
	 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
	 *
	 */

	;(function (window, document, $, undefined) {
		"use strict";

		var H = $("html"),
		    W = $(window),
		    D = $(document),
		    F = $.fancybox = function () {
			F.open.apply(this, arguments);
		},
		    IE = navigator.userAgent.match(/msie/i),
		    didUpdate = null,
		    isTouch = document.createTouch !== undefined,
		    isQuery = function (obj) {
			return obj && obj.hasOwnProperty && obj instanceof $;
		},
		    isString = function (str) {
			return str && $.type(str) === "string";
		},
		    isPercentage = function (str) {
			return isString(str) && str.indexOf('%') > 0;
		},
		    isScrollable = function (el) {
			return el && !(el.style.overflow && el.style.overflow === 'hidden') && (el.clientWidth && el.scrollWidth > el.clientWidth || el.clientHeight && el.scrollHeight > el.clientHeight);
		},
		    getScalar = function (orig, dim) {
			var value = parseInt(orig, 10) || 0;

			if (dim && isPercentage(orig)) {
				value = F.getViewport()[dim] / 100 * value;
			}

			return Math.ceil(value);
		},
		    getValue = function (value, dim) {
			return getScalar(value, dim) + 'px';
		};

		$.extend(F, {
			// The current version of fancyBox
			version: '2.1.5',

			defaults: {
				padding: 15,
				margin: 20,

				width: 800,
				height: 600,
				minWidth: 100,
				minHeight: 100,
				maxWidth: 9999,
				maxHeight: 9999,
				pixelRatio: 1, // Set to 2 for retina display support

				autoSize: true,
				autoHeight: false,
				autoWidth: false,

				autoResize: true,
				autoCenter: !isTouch,
				fitToView: true,
				aspectRatio: false,
				topRatio: 0.5,
				leftRatio: 0.5,

				scrolling: 'auto', // 'auto', 'yes' or 'no'
				wrapCSS: '',

				arrows: true,
				closeBtn: true,
				closeClick: false,
				nextClick: false,
				mouseWheel: true,
				autoPlay: false,
				playSpeed: 3000,
				preload: 3,
				modal: false,
				loop: true,

				ajax: {
					dataType: 'html',
					headers: { 'X-fancyBox': true }
				},
				iframe: {
					scrolling: 'auto',
					preload: true
				},
				swf: {
					wmode: 'transparent',
					allowfullscreen: 'true',
					allowscriptaccess: 'always'
				},

				keys: {
					next: {
						13: 'left', // enter
						34: 'up', // page down
						39: 'left', // right arrow
						40: 'up' // down arrow
					},
					prev: {
						8: 'right', // backspace
						33: 'down', // page up
						37: 'right', // left arrow
						38: 'down' // up arrow
					},
					close: [27], // escape key
					play: [32], // space - start/stop slideshow
					toggle: [70] // letter "f" - toggle fullscreen
				},

				direction: {
					next: 'left',
					prev: 'right'
				},

				scrollOutside: true,

				// Override some properties
				index: 0,
				type: null,
				href: null,
				content: null,
				title: null,

				// HTML templates
				tpl: {
					wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
					image: '<img class="fancybox-image" src="{href}" alt="" />',
					video: '<video class="fancybox-video" autoplay="" loop="" name="media"><source src="{target}" type="video/mp4"></video>',
					iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
					error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
					closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
					next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
					prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
					loading: '<div id="fancybox-loading"><div></div></div>'
				},

				// Properties for each animation type
				// Opening fancyBox
				openEffect: 'fade', // 'elastic', 'fade' or 'none'
				openSpeed: 250,
				openEasing: 'swing',
				openOpacity: true,
				openMethod: 'zoomIn',

				// Closing fancyBox
				closeEffect: 'fade', // 'elastic', 'fade' or 'none'
				closeSpeed: 250,
				closeEasing: 'swing',
				closeOpacity: true,
				closeMethod: 'zoomOut',

				// Changing next gallery item
				nextEffect: 'elastic', // 'elastic', 'fade' or 'none'
				nextSpeed: 250,
				nextEasing: 'swing',
				nextMethod: 'changeIn',

				// Changing previous gallery item
				prevEffect: 'elastic', // 'elastic', 'fade' or 'none'
				prevSpeed: 250,
				prevEasing: 'swing',
				prevMethod: 'changeOut',

				// Enable default helpers
				helpers: {
					overlay: true,
					title: true
				},

				// Callbacks
				onCancel: $.noop, // If canceling
				beforeLoad: $.noop, // Before loading
				afterLoad: $.noop, // After loading
				beforeShow: $.noop, // Before changing in current item
				afterShow: $.noop, // After opening
				beforeChange: $.noop, // Before changing gallery item
				beforeClose: $.noop, // Before closing
				afterClose: $.noop // After closing
			},

			//Current state
			group: {}, // Selected group
			opts: {}, // Group options
			previous: null, // Previous element
			coming: null, // Element being loaded
			current: null, // Currently loaded element
			isActive: false, // Is activated
			isOpen: false, // Is currently open
			isOpened: false, // Have been fully opened at least once

			wrap: null,
			skin: null,
			outer: null,
			inner: null,

			player: {
				timer: null,
				isActive: false
			},

			// Loaders
			ajaxLoad: null,
			imgPreload: null,

			// Some collections
			transitions: {},
			helpers: {},

			/*
	   *	Static methods
	   */

			open: function (group, opts) {
				if (!group) {
					return;
				}

				if (!$.isPlainObject(opts)) {
					opts = {};
				}

				// Close if already active
				if (false === F.close(true)) {
					return;
				}

				// Normalize group
				if (!$.isArray(group)) {
					group = isQuery(group) ? $(group).get() : [group];
				}

				// Recheck if the type of each element is `object` and set content type (image, ajax, etc)
				$.each(group, function (i, element) {
					var obj = {},
					    href,
					    title,
					    content,
					    type,
					    rez,
					    hrefParts,
					    selector;

					if ($.type(element) === "object") {
						// Check if is DOM element
						if (element.nodeType) {
							element = $(element);
						}

						if (isQuery(element)) {
							obj = {
								href: element.data('fancybox-href') || element.attr('href'),
								title: $('<div/>').text(element.data('fancybox-title') || element.attr('title') || '').html(),
								isDom: true,
								element: element
							};

							if ($.metadata) {
								$.extend(true, obj, element.metadata());
							}
						} else {
							obj = element;
						}
					}

					href = opts.href || obj.href || (isString(element) ? element : null);
					title = opts.title !== undefined ? opts.title : obj.title || '';

					content = opts.content || obj.content;
					type = content ? 'html' : opts.type || obj.type;

					if (!type && obj.isDom) {
						type = element.data('fancybox-type');

						if (!type) {
							rez = element.prop('class').match(/fancybox\.(\w+)/);
							type = rez ? rez[1] : null;
						}
					}

					if (isString(href)) {
						// Try to guess the content type
						if (!type) {
							if (F.isImage(href)) {
								type = 'image';
							} else if (F.isSWF(href)) {
								type = 'swf';
							} else if (href.charAt(0) === '#') {
								type = 'inline';
							} else if (isString(element)) {
								type = 'html';
								content = element;
							}
						}

						// Split url into two pieces with source url and content selector, e.g,
						// "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
						if (type === 'ajax') {
							hrefParts = href.split(/\s+/, 2);
							href = hrefParts.shift();
							selector = hrefParts.shift();
						}
					}

					if (!content) {
						if (type === 'inline') {
							if (href) {
								content = $(isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href); //strip for ie7
							} else if (obj.isDom) {
								content = element;
							}
						} else if (type === 'html') {
							content = href;
						} else if (!type && !href && obj.isDom) {
							type = 'inline';
							content = element;
						}
					}

					$.extend(obj, {
						href: href,
						type: type,
						content: content,
						title: title,
						selector: selector
					});

					group[i] = obj;
				});

				// Extend the defaults
				F.opts = $.extend(true, {}, F.defaults, opts);

				// All options are merged recursive except keys
				if (opts.keys !== undefined) {
					F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
				}

				F.group = group;

				return F._start(F.opts.index);
			},

			// Cancel image loading or abort ajax request
			cancel: function () {
				var coming = F.coming;

				if (coming && false === F.trigger('onCancel')) {
					return;
				}

				F.hideLoading();

				if (!coming) {
					return;
				}

				if (F.ajaxLoad) {
					F.ajaxLoad.abort();
				}

				F.ajaxLoad = null;

				if (F.imgPreload) {
					F.imgPreload.onload = F.imgPreload.onerror = null;
				}

				if (coming.wrap) {
					coming.wrap.stop(true, true).trigger('onReset').remove();
				}

				F.coming = null;

				// If the first item has been canceled, then clear everything
				if (!F.current) {
					F._afterZoomOut(coming);
				}
			},

			// Start closing animation if is open; remove immediately if opening/closing
			close: function (event) {
				F.cancel();

				if (false === F.trigger('beforeClose')) {
					return;
				}

				F.unbindEvents();

				if (!F.isActive) {
					return;
				}

				if (!F.isOpen || event === true) {
					$('.fancybox-wrap').stop(true).trigger('onReset').remove();

					F._afterZoomOut();
				} else {
					F.isOpen = F.isOpened = false;
					F.isClosing = true;

					$('.fancybox-item, .fancybox-nav').remove();

					F.wrap.stop(true, true).removeClass('fancybox-opened');

					F.transitions[F.current.closeMethod]();
				}
			},

			// Manage slideshow:
			//   $.fancybox.play(); - toggle slideshow
			//   $.fancybox.play( true ); - start
			//   $.fancybox.play( false ); - stop
			play: function (action) {
				var clear = function () {
					clearTimeout(F.player.timer);
				},
				    set = function () {
					clear();

					if (F.current && F.player.isActive) {
						F.player.timer = setTimeout(F.next, F.current.playSpeed);
					}
				},
				    stop = function () {
					clear();

					D.unbind('.player');

					F.player.isActive = false;

					F.trigger('onPlayEnd');
				},
				    start = function () {
					if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
						F.player.isActive = true;

						D.bind({
							'onCancel.player beforeClose.player': stop,
							'onUpdate.player': set,
							'beforeLoad.player': clear
						});

						set();

						F.trigger('onPlayStart');
					}
				};

				if (action === true || !F.player.isActive && action !== false) {
					start();
				} else {
					stop();
				}
			},

			// Navigate to next gallery item
			next: function (direction) {
				var current = F.current;

				if (current) {
					if (!isString(direction)) {
						direction = current.direction.next;
					}

					F.jumpto(current.index + 1, direction, 'next');
				}
			},

			// Navigate to previous gallery item
			prev: function (direction) {
				var current = F.current;

				if (current) {
					if (!isString(direction)) {
						direction = current.direction.prev;
					}

					F.jumpto(current.index - 1, direction, 'prev');
				}
			},

			// Navigate to gallery item by index
			jumpto: function (index, direction, router) {
				var current = F.current;

				if (!current) {
					return;
				}

				index = getScalar(index);

				F.direction = direction || current.direction[index >= current.index ? 'next' : 'prev'];
				F.router = router || 'jumpto';

				if (current.loop) {
					if (index < 0) {
						index = current.group.length + index % current.group.length;
					}

					index = index % current.group.length;
				}

				if (current.group[index] !== undefined) {
					F.cancel();

					F._start(index);
				}
			},

			// Center inside viewport and toggle position type to fixed or absolute if needed
			reposition: function (e, onlyAbsolute) {
				var current = F.current,
				    wrap = current ? current.wrap : null,
				    pos;

				if (wrap) {
					pos = F._getPosition(onlyAbsolute);

					if (e && e.type === 'scroll') {
						delete pos.position;

						wrap.stop(true, true).animate(pos, 200);
					} else {
						wrap.css(pos);

						current.pos = $.extend({}, current.dim, pos);
					}
				}
			},

			update: function (e) {
				var type = e && e.originalEvent && e.originalEvent.type,
				    anyway = !type || type === 'orientationchange';

				if (anyway) {
					clearTimeout(didUpdate);

					didUpdate = null;
				}

				if (!F.isOpen || didUpdate) {
					return;
				}

				didUpdate = setTimeout(function () {
					var current = F.current;

					if (!current || F.isClosing) {
						return;
					}

					F.wrap.removeClass('fancybox-tmp');

					if (anyway || type === 'load' || type === 'resize' && current.autoResize) {
						F._setDimension();
					}

					if (!(type === 'scroll' && current.canShrink)) {
						F.reposition(e);
					}

					F.trigger('onUpdate');

					didUpdate = null;
				}, anyway && !isTouch ? 0 : 300);
			},

			// Shrink content to fit inside viewport or restore if resized
			toggle: function (action) {
				if (F.isOpen) {
					F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

					// Help browser to restore document dimensions
					if (isTouch) {
						F.wrap.removeAttr('style').addClass('fancybox-tmp');

						F.trigger('onUpdate');
					}

					F.update();
				}
			},

			hideLoading: function () {
				D.unbind('.loading');

				$('#fancybox-loading').remove();
			},

			showLoading: function () {
				var el, viewport;

				F.hideLoading();

				el = $(F.opts.tpl.loading).click(F.cancel).appendTo('body');

				// If user will press the escape-button, the request will be canceled
				D.bind('keydown.loading', function (e) {
					if ((e.which || e.keyCode) === 27) {
						e.preventDefault();

						F.cancel();
					}
				});

				if (!F.defaults.fixed) {
					viewport = F.getViewport();

					el.css({
						position: 'absolute',
						top: viewport.h * 0.5 + viewport.y,
						left: viewport.w * 0.5 + viewport.x
					});
				}

				F.trigger('onLoading');
			},

			getViewport: function () {
				var locked = F.current && F.current.locked || false,
				    rez = {
					x: W.scrollLeft(),
					y: W.scrollTop()
				};

				if (locked && locked.length) {
					rez.w = locked[0].clientWidth;
					rez.h = locked[0].clientHeight;
				} else {
					// See http://bugs.jquery.com/ticket/6724
					rez.w = isTouch && window.innerWidth ? window.innerWidth : W.width();
					rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
				}

				return rez;
			},

			// Unbind the keyboard / clicking actions
			unbindEvents: function () {
				if (F.wrap && isQuery(F.wrap)) {
					F.wrap.unbind('.fb');
				}

				D.unbind('.fb');
				W.unbind('.fb');
			},

			bindEvents: function () {
				var current = F.current,
				    keys;

				if (!current) {
					return;
				}

				// Changing document height on iOS devices triggers a 'resize' event,
				// that can change document height... repeating infinitely
				W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

				keys = current.keys;

				if (keys) {
					D.bind('keydown.fb', function (e) {
						var code = e.which || e.keyCode,
						    target = e.target || e.srcElement;

						// Skip esc key if loading, because showLoading will cancel preloading
						if (code === 27 && F.coming) {
							return false;
						}

						// Ignore key combinations and key events within form elements
						if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
							$.each(keys, function (i, val) {
								if (current.group.length > 1 && val[code] !== undefined) {
									F[i](val[code]);

									e.preventDefault();
									return false;
								}

								if ($.inArray(code, val) > -1) {
									F[i]();

									e.preventDefault();
									return false;
								}
							});
						}
					});
				}

				if ($.fn.mousewheel && current.mouseWheel) {
					F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
						var target = e.target || null,
						    parent = $(target),
						    canScroll = false;

						while (parent.length) {
							if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
								break;
							}

							canScroll = isScrollable(parent[0]);
							parent = $(parent).parent();
						}

						if (delta !== 0 && !canScroll) {
							if (F.group.length > 1 && !current.canShrink) {
								if (deltaY > 0 || deltaX > 0) {
									F.prev(deltaY > 0 ? 'down' : 'left');
								} else if (deltaY < 0 || deltaX < 0) {
									F.next(deltaY < 0 ? 'up' : 'right');
								}

								e.preventDefault();
							}
						}
					});
				}
			},

			trigger: function (event, o) {
				var ret,
				    obj = o || F.coming || F.current;

				if (obj) {
					if ($.isFunction(obj[event])) {
						ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
					}

					if (ret === false) {
						return false;
					}

					if (obj.helpers) {
						$.each(obj.helpers, function (helper, opts) {
							if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
								F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
							}
						});
					}
				}

				D.trigger(event);
			},

			isImage: function (str) {
				return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
			},

			isSWF: function (str) {
				return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
			},

			_start: function (index) {
				var coming = {},
				    obj,
				    href,
				    type,
				    margin,
				    padding;

				index = getScalar(index);
				obj = F.group[index] || null;

				if (!obj) {
					return false;
				}

				coming = $.extend(true, {}, F.opts, obj);

				// Convert margin and padding properties to array - top, right, bottom, left
				margin = coming.margin;
				padding = coming.padding;

				if ($.type(margin) === 'number') {
					coming.margin = [margin, margin, margin, margin];
				}

				if ($.type(padding) === 'number') {
					coming.padding = [padding, padding, padding, padding];
				}

				// 'modal' propery is just a shortcut
				if (coming.modal) {
					$.extend(true, coming, {
						closeBtn: false,
						closeClick: false,
						nextClick: false,
						arrows: false,
						mouseWheel: false,
						keys: null,
						helpers: {
							overlay: {
								closeClick: false
							}
						}
					});
				}

				// 'autoSize' property is a shortcut, too
				if (coming.autoSize) {
					coming.autoWidth = coming.autoHeight = true;
				}

				if (coming.width === 'auto') {
					coming.autoWidth = true;
				}

				if (coming.height === 'auto') {
					coming.autoHeight = true;
				}

				/*
	    * Add reference to the group, so it`s possible to access from callbacks, example:
	    * afterLoad : function() {
	    *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
	    * }
	    */

				coming.group = F.group;
				coming.index = index;

				// Give a chance for callback or helpers to update coming item (type, title, etc)
				F.coming = coming;

				if (false === F.trigger('beforeLoad')) {
					F.coming = null;

					return;
				}

				type = coming.type;
				href = coming.href;

				if (!type) {
					F.coming = null;

					//If we can not determine content type then drop silently or display next/prev item if looping through gallery
					if (F.current && F.router && F.router !== 'jumpto') {
						F.current.index = index;

						return F[F.router](F.direction);
					}

					return false;
				}

				F.isActive = true;

				if (type === 'image' || type === 'swf') {
					coming.autoHeight = coming.autoWidth = false;
					coming.scrolling = 'visible';
				}

				if (type === 'image') {
					coming.aspectRatio = true;
				}

				if (type === 'iframe' && isTouch) {
					coming.scrolling = 'scroll';
				}

				// Build the neccessary markup
				coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo(coming.parent || 'body');

				$.extend(coming, {
					skin: $('.fancybox-skin', coming.wrap),
					outer: $('.fancybox-outer', coming.wrap),
					inner: $('.fancybox-inner', coming.wrap)
				});

				$.each(["Top", "Right", "Bottom", "Left"], function (i, v) {
					coming.skin.css('padding' + v, getValue(coming.padding[i]));
				});

				F.trigger('onReady');

				// Check before try to load; 'inline' and 'html' types need content, others - href
				if (type === 'inline' || type === 'html') {
					if (!coming.content || !coming.content.length) {
						return F._error('content');
					}
				} else if (!href) {
					return F._error('href');
				}

				if (type === 'image') {
					F._loadImage();
				} else if (type === 'ajax') {
					F._loadAjax();
				} else if (type === 'iframe') {
					F._loadIframe();
				} else {
					F._afterLoad();
				}
			},

			_error: function (type) {
				$.extend(F.coming, {
					type: 'html',
					autoWidth: true,
					autoHeight: true,
					minWidth: 0,
					minHeight: 0,
					scrolling: 'no',
					hasError: type,
					content: F.coming.tpl.error
				});

				F._afterLoad();
			},

			_loadImage: function () {
				// Reset preload image so it is later possible to check "complete" property
				var img = F.imgPreload = new Image();

				img.onload = function () {
					this.onload = this.onerror = null;

					F.coming.width = this.width / F.opts.pixelRatio;
					F.coming.height = this.height / F.opts.pixelRatio;

					F._afterLoad();
				};

				img.onerror = function () {
					this.onload = this.onerror = null;

					F._error('image');
				};

				img.src = F.coming.href;

				if (img.complete !== true) {
					F.showLoading();
				}
			},

			_loadAjax: function () {
				var coming = F.coming;

				F.showLoading();

				F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
					url: coming.href,
					error: function (jqXHR, textStatus) {
						if (F.coming && textStatus !== 'abort') {
							F._error('ajax', jqXHR);
						} else {
							F.hideLoading();
						}
					},
					success: function (data, textStatus) {
						if (textStatus === 'success') {
							coming.content = data;

							F._afterLoad();
						}
					}
				}));
			},

			_loadIframe: function () {
				var coming = F.coming,
				    iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime())).attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling).attr('src', coming.href);

				// This helps IE
				$(coming.wrap).bind('onReset', function () {
					try {
						$(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
					} catch (e) {}
				});

				if (coming.iframe.preload) {
					F.showLoading();

					iframe.one('load', function () {
						$(this).data('ready', 1);

						// iOS will lose scrolling if we resize
						if (!isTouch) {
							$(this).bind('load.fb', F.update);
						}

						// Without this trick:
						//   - iframe won't scroll on iOS devices
						//   - IE7 sometimes displays empty iframe
						$(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

						F._afterLoad();
					});
				}

				coming.content = iframe.appendTo(coming.inner);

				if (!coming.iframe.preload) {
					F._afterLoad();
				}
			},

			_preloadImages: function () {
				var group = F.group,
				    current = F.current,
				    len = group.length,
				    cnt = current.preload ? Math.min(current.preload, len - 1) : 0,
				    item,
				    i;

				for (i = 1; i <= cnt; i += 1) {
					item = group[(current.index + i) % len];

					if (item.type === 'image' && item.href) {
						new Image().src = item.href;
					}
				}
			},

			_afterLoad: function () {
				var coming = F.coming,
				    previous = F.current,
				    placeholder = 'fancybox-placeholder',
				    current,
				    content,
				    type,
				    scrolling,
				    href,
				    embed;

				F.hideLoading();

				if (!coming || F.isActive === false) {
					return;
				}

				if (false === F.trigger('afterLoad', coming, previous)) {
					coming.wrap.stop(true).trigger('onReset').remove();

					F.coming = null;

					return;
				}

				if (previous) {
					F.trigger('beforeChange', previous);

					previous.wrap.stop(true).removeClass('fancybox-opened').find('.fancybox-item, .fancybox-nav').remove();
				}

				F.unbindEvents();

				// hack
				if ($(coming.element).data('type') == 'video') {
					coming.type = 'video';
					coming.target = $(coming.element).data('target');
				}

				current = coming;
				content = coming.content;
				type = coming.type;
				scrolling = coming.scrolling;

				$.extend(F, {
					wrap: current.wrap,
					skin: current.skin,
					outer: current.outer,
					inner: current.inner,
					current: current,
					previous: previous
				});

				href = current.href;

				console.log(coming);

				switch (type) {
					case 'inline':
					case 'ajax':
					case 'html':
						if (current.selector) {
							content = $('<div>').html(content).find(current.selector);
						} else if (isQuery(content)) {
							if (!content.data(placeholder)) {
								content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter(content).hide());
							}

							content = content.show().detach();

							current.wrap.bind('onReset', function () {
								if ($(this).find(content).length) {
									content.hide().replaceAll(content.data(placeholder)).data(placeholder, false);
								}
							});
						}
						break;

					case 'image':
						content = current.tpl.image.replace(/\{href\}/g, href);
						break;

					case 'video':
						content = current.tpl.video.replace(/\{target\}/g, coming.target);
						break;

					case 'swf':
						content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
						embed = '';

						$.each(current.swf, function (name, val) {
							content += '<param name="' + name + '" value="' + val + '"></param>';
							embed += ' ' + name + '="' + val + '"';
						});

						content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
						break;
				}

				if (!(isQuery(content) && content.parent().is(current.inner))) {
					current.inner.append(content);
				}

				// Give a chance for helpers or callbacks to update elements
				F.trigger('beforeShow');

				// Set scrolling before calculating dimensions
				current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : scrolling === 'no' ? 'hidden' : scrolling);

				// Set initial dimensions and start position
				F._setDimension();

				F.reposition();

				F.isOpen = false;
				F.coming = null;

				F.bindEvents();

				if (!F.isOpened) {
					$('.fancybox-wrap').not(current.wrap).stop(true).trigger('onReset').remove();
				} else if (previous.prevMethod) {
					F.transitions[previous.prevMethod]();
				}

				F.transitions[F.isOpened ? current.nextMethod : current.openMethod]();

				F._preloadImages();
			},

			_setDimension: function () {
				var viewport = F.getViewport(),
				    steps = 0,
				    canShrink = false,
				    canExpand = false,
				    wrap = F.wrap,
				    skin = F.skin,
				    inner = F.inner,
				    current = F.current,
				    width = current.width,
				    height = current.height,
				    minWidth = current.minWidth,
				    minHeight = current.minHeight,
				    maxWidth = current.maxWidth,
				    maxHeight = current.maxHeight,
				    scrolling = current.scrolling,
				    scrollOut = current.scrollOutside ? current.scrollbarWidth : 0,
				    margin = current.margin,
				    wMargin = getScalar(margin[1] + margin[3]),
				    hMargin = getScalar(margin[0] + margin[2]),
				    wPadding,
				    hPadding,
				    wSpace,
				    hSpace,
				    origWidth,
				    origHeight,
				    origMaxWidth,
				    origMaxHeight,
				    ratio,
				    width_,
				    height_,
				    maxWidth_,
				    maxHeight_,
				    iframe,
				    body;

				// Reset dimensions so we could re-check actual size
				wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

				wPadding = getScalar(skin.outerWidth(true) - skin.width());
				hPadding = getScalar(skin.outerHeight(true) - skin.height());

				// Any space between content and viewport (margin, padding, border, title)
				wSpace = wMargin + wPadding;
				hSpace = hMargin + hPadding;

				origWidth = isPercentage(width) ? (viewport.w - wSpace) * getScalar(width) / 100 : width;
				origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

				if (current.type === 'iframe') {
					iframe = current.content;

					if (current.autoHeight && iframe.data('ready') === 1) {
						try {
							if (iframe[0].contentWindow.document.location) {
								inner.width(origWidth).height(9999);

								body = iframe.contents().find('body');

								if (scrollOut) {
									body.css('overflow-x', 'hidden');
								}

								origHeight = body.outerHeight(true);
							}
						} catch (e) {}
					}
				} else if (current.autoWidth || current.autoHeight) {
					inner.addClass('fancybox-tmp');

					// Set width or height in case we need to calculate only one dimension
					if (!current.autoWidth) {
						inner.width(origWidth);
					}

					if (!current.autoHeight) {
						inner.height(origHeight);
					}

					if (current.autoWidth) {
						origWidth = inner.width();
					}

					if (current.autoHeight) {
						origHeight = inner.height();
					}

					inner.removeClass('fancybox-tmp');
				}

				width = getScalar(origWidth);
				height = getScalar(origHeight);

				ratio = origWidth / origHeight;

				// Calculations for the content
				minWidth = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
				maxWidth = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

				minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
				maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

				// These will be used to determine if wrap can fit in the viewport
				origMaxWidth = maxWidth;
				origMaxHeight = maxHeight;

				if (current.fitToView) {
					maxWidth = Math.min(viewport.w - wSpace, maxWidth);
					maxHeight = Math.min(viewport.h - hSpace, maxHeight);
				}

				maxWidth_ = viewport.w - wMargin;
				maxHeight_ = viewport.h - hMargin;

				if (current.aspectRatio) {
					if (width > maxWidth) {
						width = maxWidth;
						height = getScalar(width / ratio);
					}

					if (height > maxHeight) {
						height = maxHeight;
						width = getScalar(height * ratio);
					}

					if (width < minWidth) {
						width = minWidth;
						height = getScalar(width / ratio);
					}

					if (height < minHeight) {
						height = minHeight;
						width = getScalar(height * ratio);
					}
				} else {
					width = Math.max(minWidth, Math.min(width, maxWidth));

					if (current.autoHeight && current.type !== 'iframe') {
						inner.width(width);

						height = inner.height();
					}

					height = Math.max(minHeight, Math.min(height, maxHeight));
				}

				// Try to fit inside viewport (including the title)
				if (current.fitToView) {
					inner.width(width).height(height);

					wrap.width(width + wPadding);

					// Real wrap dimensions
					width_ = wrap.width();
					height_ = wrap.height();

					if (current.aspectRatio) {
						while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
							if (steps++ > 19) {
								break;
							}

							height = Math.max(minHeight, Math.min(maxHeight, height - 10));
							width = getScalar(height * ratio);

							if (width < minWidth) {
								width = minWidth;
								height = getScalar(width / ratio);
							}

							if (width > maxWidth) {
								width = maxWidth;
								height = getScalar(width / ratio);
							}

							inner.width(width).height(height);

							wrap.width(width + wPadding);

							width_ = wrap.width();
							height_ = wrap.height();
						}
					} else {
						width = Math.max(minWidth, Math.min(width, width - (width_ - maxWidth_)));
						height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
					}
				}

				if (scrollOut && scrolling === 'auto' && height < origHeight && width + wPadding + scrollOut < maxWidth_) {
					width += scrollOut;
				}

				inner.width(width).height(height);

				wrap.width(width + wPadding);

				width_ = wrap.width();
				height_ = wrap.height();

				canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
				canExpand = current.aspectRatio ? width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight : (width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight);

				$.extend(current, {
					dim: {
						width: getValue(width_),
						height: getValue(height_)
					},
					origWidth: origWidth,
					origHeight: origHeight,
					canShrink: canShrink,
					canExpand: canExpand,
					wPadding: wPadding,
					hPadding: hPadding,
					wrapSpace: height_ - skin.outerHeight(true),
					skinSpace: skin.height() - height
				});

				if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
					inner.height('auto');
				}
			},

			_getPosition: function (onlyAbsolute) {
				var current = F.current,
				    viewport = F.getViewport(),
				    margin = current.margin,
				    width = F.wrap.width() + margin[1] + margin[3],
				    height = F.wrap.height() + margin[0] + margin[2],
				    rez = {
					position: 'absolute',
					top: margin[0],
					left: margin[3]
				};

				if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
					rez.position = 'fixed';
				} else if (!current.locked) {
					rez.top += viewport.y;
					rez.left += viewport.x;
				}

				rez.top = getValue(Math.max(rez.top, rez.top + (viewport.h - height) * current.topRatio));
				rez.left = getValue(Math.max(rez.left, rez.left + (viewport.w - width) * current.leftRatio));

				return rez;
			},

			_afterZoomIn: function () {
				var current = F.current;

				if (!current) {
					return;
				}

				F.isOpen = F.isOpened = true;

				F.wrap.css('overflow', 'visible').addClass('fancybox-opened').hide().show(0);

				F.update();

				// Assign a click event
				if (current.closeClick || current.nextClick && F.group.length > 1) {
					F.inner.css('cursor', 'pointer').bind('click.fb', function (e) {
						if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
							e.preventDefault();

							F[current.closeClick ? 'close' : 'next']();
						}
					});
				}

				// Create a close button
				if (current.closeBtn) {
					$(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function (e) {
						e.preventDefault();

						F.close();
					});
				}

				// Create navigation arrows
				if (current.arrows && F.group.length > 1) {
					if (current.loop || current.index > 0) {
						$(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
					}

					if (current.loop || current.index < F.group.length - 1) {
						$(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
					}
				}

				F.trigger('afterShow');

				// Stop the slideshow if this is the last item
				if (!current.loop && current.index === current.group.length - 1) {

					F.play(false);
				} else if (F.opts.autoPlay && !F.player.isActive) {
					F.opts.autoPlay = false;

					F.play(true);
				}
			},

			_afterZoomOut: function (obj) {
				obj = obj || F.current;

				$('.fancybox-wrap').trigger('onReset').remove();

				$.extend(F, {
					group: {},
					opts: {},
					router: false,
					current: null,
					isActive: false,
					isOpened: false,
					isOpen: false,
					isClosing: false,
					wrap: null,
					skin: null,
					outer: null,
					inner: null
				});

				F.trigger('afterClose', obj);
			}
		});

		/*
	  *	Default transitions
	  */

		F.transitions = {
			getOrigPosition: function () {
				var current = F.current,
				    element = current.element,
				    orig = current.orig,
				    pos = {},
				    width = 50,
				    height = 50,
				    hPadding = current.hPadding,
				    wPadding = current.wPadding,
				    viewport = F.getViewport();

				if (!orig && current.isDom && element.is(':visible')) {
					orig = element.find('img:first');

					if (!orig.length) {
						orig = element;
					}
				}

				if (isQuery(orig)) {
					pos = orig.offset();

					if (orig.is('img')) {
						width = orig.outerWidth();
						height = orig.outerHeight();
					}
				} else {
					pos.top = viewport.y + (viewport.h - height) * current.topRatio;
					pos.left = viewport.x + (viewport.w - width) * current.leftRatio;
				}

				if (F.wrap.css('position') === 'fixed' || current.locked) {
					pos.top -= viewport.y;
					pos.left -= viewport.x;
				}

				pos = {
					top: getValue(pos.top - hPadding * current.topRatio),
					left: getValue(pos.left - wPadding * current.leftRatio),
					width: getValue(width + wPadding),
					height: getValue(height + hPadding)
				};

				return pos;
			},

			step: function (now, fx) {
				var ratio,
				    padding,
				    value,
				    prop = fx.prop,
				    current = F.current,
				    wrapSpace = current.wrapSpace,
				    skinSpace = current.skinSpace;

				if (prop === 'width' || prop === 'height') {
					ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

					if (F.isClosing) {
						ratio = 1 - ratio;
					}

					padding = prop === 'width' ? current.wPadding : current.hPadding;
					value = now - padding;

					F.skin[prop](getScalar(prop === 'width' ? value : value - wrapSpace * ratio));
					F.inner[prop](getScalar(prop === 'width' ? value : value - wrapSpace * ratio - skinSpace * ratio));
				}
			},

			zoomIn: function () {
				var current = F.current,
				    startPos = current.pos,
				    effect = current.openEffect,
				    elastic = effect === 'elastic',
				    endPos = $.extend({ opacity: 1 }, startPos);

				// Remove "position" property that breaks older IE
				delete endPos.position;

				if (elastic) {
					startPos = this.getOrigPosition();

					if (current.openOpacity) {
						startPos.opacity = 0.1;
					}
				} else if (effect === 'fade') {
					startPos.opacity = 0.1;
				}

				F.wrap.css(startPos).animate(endPos, {
					duration: effect === 'none' ? 0 : current.openSpeed,
					easing: current.openEasing,
					step: elastic ? this.step : null,
					complete: F._afterZoomIn
				});
			},

			zoomOut: function () {
				var current = F.current,
				    effect = current.closeEffect,
				    elastic = effect === 'elastic',
				    endPos = { opacity: 0.1 };

				if (elastic) {
					endPos = this.getOrigPosition();

					if (current.closeOpacity) {
						endPos.opacity = 0.1;
					}
				}

				F.wrap.animate(endPos, {
					duration: effect === 'none' ? 0 : current.closeSpeed,
					easing: current.closeEasing,
					step: elastic ? this.step : null,
					complete: F._afterZoomOut
				});
			},

			changeIn: function () {
				var current = F.current,
				    effect = current.nextEffect,
				    startPos = current.pos,
				    endPos = { opacity: 1 },
				    direction = F.direction,
				    distance = 200,
				    field;

				startPos.opacity = 0.1;

				if (effect === 'elastic') {
					field = direction === 'down' || direction === 'up' ? 'top' : 'left';

					if (direction === 'down' || direction === 'right') {
						startPos[field] = getValue(getScalar(startPos[field]) - distance);
						endPos[field] = '+=' + distance + 'px';
					} else {
						startPos[field] = getValue(getScalar(startPos[field]) + distance);
						endPos[field] = '-=' + distance + 'px';
					}
				}

				// Workaround for http://bugs.jquery.com/ticket/12273
				if (effect === 'none') {
					F._afterZoomIn();
				} else {
					F.wrap.css(startPos).animate(endPos, {
						duration: current.nextSpeed,
						easing: current.nextEasing,
						complete: F._afterZoomIn
					});
				}
			},

			changeOut: function () {
				var previous = F.previous,
				    effect = previous.prevEffect,
				    endPos = { opacity: 0.1 },
				    direction = F.direction,
				    distance = 200;

				if (effect === 'elastic') {
					endPos[direction === 'down' || direction === 'up' ? 'top' : 'left'] = (direction === 'up' || direction === 'left' ? '-' : '+') + '=' + distance + 'px';
				}

				previous.wrap.animate(endPos, {
					duration: effect === 'none' ? 0 : previous.prevSpeed,
					easing: previous.prevEasing,
					complete: function () {
						$(this).trigger('onReset').remove();
					}
				});
			}
		};

		/*
	  *	Overlay helper
	  */

		F.helpers.overlay = {
			defaults: {
				closeClick: true, // if true, fancyBox will be closed when user clicks on the overlay
				speedOut: 200, // duration of fadeOut animation
				showEarly: true, // indicates if should be opened immediately or wait until the content is ready
				css: {}, // custom CSS properties
				locked: !isTouch, // if true, the content will be locked into overlay
				fixed: true // if false, the overlay CSS position property will not be set to "fixed"
			},

			overlay: null, // current handle
			fixed: false, // indicates if the overlay has position "fixed"
			el: $('html'), // element that contains "the lock"

			// Public methods
			create: function (opts) {
				var parent;

				opts = $.extend({}, this.defaults, opts);

				if (this.overlay) {
					this.close();
				}

				parent = F.coming ? F.coming.parent : opts.parent;

				this.overlay = $('<div class="fancybox-overlay"></div>').appendTo(parent && parent.length ? parent : 'body');
				this.fixed = false;

				if (opts.fixed && F.defaults.fixed) {
					this.overlay.addClass('fancybox-overlay-fixed');

					this.fixed = true;
				}
			},

			open: function (opts) {
				var that = this;

				opts = $.extend({}, this.defaults, opts);

				if (this.overlay) {
					this.overlay.unbind('.overlay').width('auto').height('auto');
				} else {
					this.create(opts);
				}

				if (!this.fixed) {
					W.bind('resize.overlay', $.proxy(this.update, this));

					this.update();
				}

				if (opts.closeClick) {
					this.overlay.bind('click.overlay', function (e) {
						if ($(e.target).hasClass('fancybox-overlay')) {
							if (F.isActive) {
								F.close();
							} else {
								that.close();
							}

							return false;
						}
					});
				}

				this.overlay.css(opts.css).show();
			},

			close: function () {
				W.unbind('resize.overlay');

				if (this.el.hasClass('fancybox-lock')) {
					$('.fancybox-margin').removeClass('fancybox-margin');

					this.el.removeClass('fancybox-lock');

					W.scrollTop(this.scrollV).scrollLeft(this.scrollH);
				}

				$('.fancybox-overlay').remove().hide();

				$.extend(this, {
					overlay: null,
					fixed: false
				});
			},

			// Private, callbacks

			update: function () {
				var width = '100%',
				    offsetWidth;

				// Reset width/height so it will not mess
				this.overlay.width(width).height('100%');

				// jQuery does not return reliable result for IE
				if (IE) {
					offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

					if (D.width() > offsetWidth) {
						width = D.width();
					}
				} else if (D.width() > W.width()) {
					width = D.width();
				}

				this.overlay.width(width).height(D.height());
			},

			// This is where we can manipulate DOM, because later it would cause iframes to reload
			onReady: function (opts, obj) {
				var overlay = this.overlay;

				$('.fancybox-overlay').stop(true, true);

				if (!overlay) {
					this.create(opts);
				}

				if (opts.locked && this.fixed && obj.fixed) {
					obj.locked = this.overlay.append(obj.wrap);
					obj.fixed = false;
				}

				if (opts.showEarly === true) {
					this.beforeShow.apply(this, arguments);
				}
			},

			beforeShow: function (opts, obj) {
				if (obj.locked && !this.el.hasClass('fancybox-lock')) {
					if (this.fixPosition !== false) {
						$('*').filter(function () {
							return $(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap");
						}).addClass('fancybox-margin');
					}

					this.el.addClass('fancybox-margin');

					this.scrollV = W.scrollTop();
					this.scrollH = W.scrollLeft();

					this.el.addClass('fancybox-lock');

					W.scrollTop(this.scrollV).scrollLeft(this.scrollH);
				}

				this.open(opts);
			},

			onUpdate: function () {
				if (!this.fixed) {
					this.update();
				}
			},

			afterClose: function (opts) {
				// Remove overlay if exists and fancyBox is not opening
				// (e.g., it is not being open using afterClose callback)
				if (this.overlay && !F.coming) {
					this.overlay.fadeOut(opts.speedOut, $.proxy(this.close, this));
				}
			}
		};

		/*
	  *	Title helper
	  */

		F.helpers.title = {
			defaults: {
				type: 'float', // 'float', 'inside', 'outside' or 'over',
				position: 'bottom' // 'top' or 'bottom'
			},

			beforeShow: function (opts) {
				var current = F.current,
				    text = current.title,
				    type = opts.type,
				    title,
				    target;

				if ($.isFunction(text)) {
					text = text.call(current.element, current);
				}

				if (!isString(text) || $.trim(text) === '') {
					return;
				}

				title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

				switch (type) {
					case 'inside':
						target = F.skin;
						break;

					case 'outside':
						target = F.wrap;
						break;

					case 'over':
						target = F.inner;
						break;

					default:
						// 'float'
						target = F.skin;

						title.appendTo('body');

						if (IE) {
							title.width(title.width());
						}

						title.wrapInner('<span class="child"></span>');

						//Increase bottom margin so this title will also fit into viewport
						F.current.margin[2] += Math.abs(getScalar(title.css('margin-bottom')));
						break;
				}

				title[opts.position === 'top' ? 'prependTo' : 'appendTo'](target);
			}
		};

		// jQuery plugin initialization
		$.fn.fancybox = function (options) {
			var index,
			    that = $(this),
			    selector = this.selector || '',
			    run = function (e) {
				var what = $(this).blur(),
				    idx = index,
				    relType,
				    relVal;

				if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
					relType = options.groupAttr || 'data-fancybox-group';
					relVal = what.attr(relType);

					if (!relVal) {
						relType = 'rel';
						relVal = what.get(0)[relType];
					}

					if (relVal && relVal !== '' && relVal !== 'nofollow') {
						what = selector.length ? $(selector) : that;
						what = what.filter('[' + relType + '="' + relVal + '"]');
						idx = what.index(this);
					}

					options.index = idx;

					// Stop an event from bubbling if everything is fine
					if (F.open(what, options) !== false) {
						e.preventDefault();
					}
				}
			};

			options = options || {};
			index = options.index || 0;

			if (!selector || options.live === false) {
				that.unbind('click.fb-start').bind('click.fb-start', run);
			} else {
				D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
			}

			this.filter('[data-fancybox-start=1]').trigger('click');

			return this;
		};

		// Tests that need a body at doc ready
		D.ready(function () {
			var w1, w2;

			if ($.scrollbarWidth === undefined) {
				// http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
				$.scrollbarWidth = function () {
					var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
					    child = parent.children(),
					    width = child.innerWidth() - child.height(99).innerWidth();

					parent.remove();

					return width;
				};
			}

			if ($.support.fixedPosition === undefined) {
				$.support.fixedPosition = function () {
					var elem = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
					    fixed = elem[0].offsetTop === 20 || elem[0].offsetTop === 15;

					elem.remove();

					return fixed;
				}();
			}

			$.extend(F.defaults, {
				scrollbarWidth: $.scrollbarWidth(),
				fixed: $.support.fixedPosition,
				parent: $('body')
			});

			//Get real width of page scroll-bar
			w1 = $(window).width();

			H.addClass('fancybox-lock-test');

			w2 = $(window).width();

			H.removeClass('fancybox-lock-test');

			$("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
		});
	})(window, document, jQuery);

/***/ }),

/***/ 443:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(452);

	var _collection = [];
	var _count = 0;

	var render = function (res) {

		var ulTmpl = "";
		for (var j = 0, len2 = res.list.length; j < len2; j++) {
			var data = res.list[j].arr;
			var liTmpl = "";
			for (var i = 0, len = data.link.length; i < len; i++) {
				var src = 'http://120.24.181.238/ins/' + data.link[i];
				var type = data.type[i];
				var target = src + (type === 'video' ? '.mp4' : '.jpg');
				src += '.jpg';

				liTmpl += '<li>\
								<div class="img-box">\
									<a class="img-bg" rel="example_group" href="' + src + '" title="' + data.text[i] + '" data-type="' + type + '" data-target="' + target + '"></a>\
									<img lazy-src="' + src + '">\
									<i class="icon icon-hour-glass"></i>\
								</div>\
							</li>';
			}
			ulTmpl = ulTmpl + '<section class="archives album"><h1 class="year">' + data.year + '<em>' + data.month + '月</em></h1>\
				<ul class="img-box-ul">' + liTmpl + '</ul>\
				</section>';
		}
		$(ulTmpl).appendTo($(".instagram"));

		$(".instagram").lazyload({
			container: $('#container')
		});

		$("a[rel=example_group]").fancybox();
	};

	var replacer = function (str) {
		var arr = str.split("/");
		return "/assets/ins/" + arr[arr.length - 1];
	};

	var ctrler = function (data) {
		var imgObj = {};
		for (var i = 0, len = data.length; i < len; i++) {
			var y = data[i].y;
			var m = data[i].m;
			var src = replacer(data[i].src);
			var text = data[i].text;
			var key = y + "" + ((m + "").length == 1 ? "0" + m : m);
			if (imgObj[key]) {
				imgObj[key].srclist.push(src);
				imgObj[key].text.push(text);
			} else {
				imgObj[key] = {
					year: y,
					month: m,
					srclist: [src],
					text: [text]
				};
			}
		}
		render(imgObj);
	};

	module.exports = {
		init: function () {
			render({
				"list": [{
					"date": "2016-09",
					"arr": {
						"year": 2016,
						"month": 9,
						"src": ["", ""],
						"link": ["BKTJUOdgkLm", "BKIiijpAvmT"],
						"text": ["…", "hello，好久不见"],
						"type": ["image", "image"]
					}
				}, {
					"date": "2015-12",
					"arr": {
						"year": 2015,
						"month": 12,
						"src": ["https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/12317949_812027942276002_800384968_n.jpg"],
						"link": ["-wSMLcI7sl"],
						"text": ["秦教练教学得很好，三小时已可征服中级场。滑雪真是项迷人的活动，还没回去就约好了下次再来"],
						"type": ["video"]
					}
				}, {
					"date": "2015-11",
					"arr": {
						"year": 2015,
						"month": 11,
						"src": ["https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/s640x640/sh0.08/e35/12269862_894338194013437_1805169379_n.jpg", "https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/s640x640/sh0.08/e35/12276891_172191463131445_911534090_n.jpg", "https://scontent.cdninstagram.com/hphotos-xtp1/t51.2885-15/s640x640/sh0.08/e35/12237527_913338585386151_2037194016_n.jpg", "https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/11934646_1088170014540783_209449183_n.jpg"],
						"link": ["-tqoLXo7v-", "-qKfKxo7nw", "-nE5BQo7uP", "9qjBpWI7lk"],
						"text": ["雪上鸦飞", "行走于结了冰的松花江上，遇到一群放生的人。佛经飘扬，鱼虾入河，河面转瞬又恢复了平静。而后在饭店，服务员说我们的鱼，就来自这松花江里。\n\n佛的安排奇妙又令人啼笑，鱼让俩群不同的人都收获了快乐？那么我想，鱼就是佛", "月上枝头", "在天黑后的日光岩顶呆了很久，一个人看一座岛，孤单也自由。后来遇到一位姑娘，我们一同下山。带着她逛遍整条龙头路找吃的，但她什么也不愿吃，问她，她说，想吃酸辣土豆丝。\n\n只有笑着承认，真是意料之外的答案。我出来玩，就是为了吃平时吃不到的东西，她则是觉得家乡的菜最熟悉，在哪都是愿意吃的。\n\n好吧，陪你吃。因为，离开武汉这么久，我也挺想念这道菜。"],
						"type": ["image", "image", "image", "video"]
					}
				}, {
					"date": "2015-10",
					"arr": {
						"year": 2015,
						"month": 10,
						"src": ["https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/s640x640/sh0.08/e35/12145229_1722399741326075_2063247708_n.jpg", "https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/s640x640/sh0.08/e35/12080493_892409564169375_1626542651_n.jpg", "https://scontent.cdninstagram.com/hphotos-xtp1/t51.2885-15/s640x640/sh0.08/e35/11849199_203248513340142_1615092499_n.jpg", "https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/e15/12132912_162625974083441_1400003063_n.jpg", "https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/s640x640/sh0.08/e35/12135478_1700175696879683_933151519_n.jpg"],
						"link": ["9VYE8YI7sk", "9BkX3xo7od", "8-Ba4MI7lt", "88Neujo7r2", "8uKqhDo7vp"],
						"text": ["在路上", "11点的时候，不想睡，借一只手电，一人夜游古村。这事情很刺激，转角遇到的神像，榕树的垂枝，摇曳的灯笼，自己投射到土楼的巨大影子，莫名的恐惧自心底升起。然而后来又不怕了，却总是想起以前去的思溪源村…with my friends", "古城的砖瓦年代久了，就很容易长出猫来", "以前吉他老师说，对于一首天空之城，听过与弹过是完全不一样的。弹过后才知道，从开始的吉他2品就一直在递增，仿佛自身也在飞翔，云层渐开，空城显现，情绪是那么容易被调动。然而我的水平只够感动自己，要抓紧时间努力学习了。不说了，玩游戏去了", "海上日出"],
						"type": ["image", "image", "image", "video", "image"]
					}
				}, {
					"date": "2015-9",
					"arr": {
						"year": 2015,
						"month": 9,
						"src": ["https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/s640x640/sh0.08/e35/11875445_885316994870904_706284789_n.jpg", "https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/s640x640/sh0.08/e35/11352715_138879086461968_2066668148_n.jpg"],
						"link": ["8NKC9RI7oZ", "8DOh_to7p0"],
						"text": ["沙滩总有数不完的沙子，数不完的故事。在这突然想起那本还没看完的《岛上书店》，是时候继续做些什么了", "陌上花开"],
						"type": ["image", "image"]
					}
				}, {
					"date": "2015-6",
					"arr": {
						"year": 2015,
						"month": 6,
						"src": ["https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e15/11429225_720390118073037_768409912_n.jpg", "https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/11420780_1012574008772885_1569805305_n.jpg", "https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e15/11252784_879698105429690_2109453469_n.jpg", "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/11267410_925161560884785_371811288_n.jpg", "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/11375982_491190547696110_2013240096_n.jpg"],
						"link": ["4T1Lfgo7gX", "3-mmN3o7mn", "3uts9do7jI", "3iK7kwI7j1", "3glBKbI7jm"],
						"text": ["大雨之后", "一脸无辜的王尼玛大哥，从肚腩来看，果然是正品？", "感觉迷上风筝了。有次做梦，想到一根根拉伸向上的线，像是在钓空中的鱼。而一个技术娴熟的“渔夫”，收杆时是这么干净利落。", "起飞", "小萝莉不愿回家，跟奶奶说：“再让我玩会，明天要学钢琴，后天要学跳舞，就来不了这儿玩了。”"],
						"type": ["image", "image", "video", "video", "image"]
					}
				}, {
					"date": "2015-5",
					"arr": {
						"year": 2015,
						"month": 5,
						"src": ["https://scontent.cdninstagram.com/hphotos-xtp1/t51.2885-15/e15/11252751_1444216632541093_1558227860_n.jpg", "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/11226595_701075516681953_1354085958_n.jpg"],
						"link": ["24-dd6o7uB", "2uQeuaI7nv"],
						"text": ["风雨欲来", "野生海带"],
						"type": ["image", "video"]
					}
				}, {
					"date": "2015-4",
					"arr": {
						"year": 2015,
						"month": 4,
						"src": ["https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/11142212_609961145801361_1913577076_n.jpg", "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/11049421_1375007652828983_401355534_n.jpg", "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/11137852_1649834698581861_1050691792_n.jpg", "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/11055751_1573536912901494_1683773508_n.jpg", "https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e15/11055897_1407191599597961_1763496348_n.jpg"],
						"link": ["1IUZByo7vP", "1ISKRxo7r8", "1GPBzpo7qW", "1FtGO3I7kN", "1C03iPI7hZ"],
						"text": ["要回去啦，再见北流河", "灵芝get√", "这里的清明是个很重要的节日，子孙们都会回来，跋山涉水，竹排渡江，荒山寻路，凭集体的记忆寻找列祖列宗的宝地，寄哀思，也求福德。一路上可以听他们唠叨旧事，也有超级靠谱的风水科普", "为了部落", "在清明的山路遇到了天然松香"],
						"type": ["video", "image", "image", "image", "image"]
					}
				}, {
					"date": "2015-3",
					"arr": {
						"year": 2015,
						"month": 3,
						"src": ["https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e15/11123665_1542600796003839_1576473443_n.jpg", "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/11008101_1593505510894691_369067449_n.jpg"],
						"link": ["04_8fwo7gL", "zzfe7Oo7uc"],
						"text": ["如果你飞得像月亮这么高，就不会搁浅在树上", "喜欢这个季节的天空，你找个草坪一躺，飞机，风筝，鸟儿就都在上边，天气好时还能看到白天的月亮"],
						"type": ["image", "image"]
					}
				}, {
					"date": "2015-2",
					"arr": {
						"year": 2015,
						"month": 2,
						"src": ["https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/10958252_1405701033068537_2023890854_n.jpg", "https://scontent.cdninstagram.com/hphotos-xtp1/t51.2885-15/e15/10832246_413065338853260_183697882_n.jpg", "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/10268927_436139166536328_1377561628_n.jpg", "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/11008343_410508022446936_713236389_n.jpg"],
						"link": ["zcWez6I7uo", "zRPazvI7ol", "zPN2LtI7sT", "zKrDWlo7gZ"],
						"text": ["很多东西随着慢慢长大，变得不像小时候那样盼望热切，比如巧克力麦当劳薯片雪糕。只有对担子粉的爱永远不变的说…", "据说是一年一度考验演技的时候…", "锈迹斑斑的香炉", "回老家了，小时候跟我打过玻璃珠的小伙伴们呢？你们一个在北京，一个在安徽，一个在澳洲，一个我都不知道了…但你们看到玻璃珠的时候，要想起我来啊"],
						"type": ["image", "image", "image", "image"]
					}
				}, {
					"date": "2015-1",
					"arr": {
						"year": 2015,
						"month": 1,
						"src": ["https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e15/10932550_620643038062978_1729442807_n.jpg", "https://scontent.cdninstagram.com/hphotos-xtp1/t51.2885-15/e15/891532_1563899373855738_1180535181_n.jpg", "https://scontent.cdninstagram.com/hphotos-prn/t51.2885-15/e15/10005439_338105566394046_854247264_n.jpg", "https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/10903312_693622147425934_1766884651_n.jpg", "https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/e15/10914460_1546003772305181_1301162053_n.jpg", "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/10903277_832760670116494_255352239_n.jpg", "https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e15/924083_1539057536347062_2062767438_n.jpg", "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/10890944_765121966897759_2039585477_n.jpg"],
						"link": ["yb8uaCI7tt", "yKBopho7mX", "yAOcawI7pA", "x5U25kI7sN", "x1TTZUo7gW", "xeGbWuo7if", "xXr70fI7iD", "xUB4dOI7g1"],
						"text": ["草地上遗落的鞋子", "有位很久没联系的朋友寄来明信片，说：我很少看到海，正如你没见过几次雪", "深夜总是灵感乍现的最佳时期，只是几个设计方案都没法使自己满意。累了打开窗看到天上有个大月亮，只想用图章工具把它干掉。", "面朝大海冬暖花开", "分享日常不正常生活照一张", "其实我想，那些古老的渔民们，每天看着海岸线的日落日出，肯定是有人想过地球是圆的。而“想法”与“证明”之间，却跨越了一整条麦哲伦航道", "鱼山鱼海中，只有你，肯安静的趴在65厘米厚的亚克力板子上与我合影，大丑鱼", "新年单人旅行走起。其实从九洲港码头开始，珠海并没有给人很惊喜的感觉，包括盛名之下的沿海风光与渔女雕塑。倒是交通不通畅，从轮渡到公交都给我带来了许多麻烦。直到，晚上吃烤生蚝的第一口，我又觉得什么事情都是可以原谅的……"],
						"type": ["image", "image", "image", "image", "image", "image", "image", "image"]
					}
				}, {
					"date": "2014-12",
					"arr": {
						"year": 2014,
						"month": 12,
						"src": ["https://scontent.cdninstagram.com/hphotos-prn/t51.2885-15/e15/10899183_999582293404177_745539859_n.jpg", "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/10894909_702627706517406_1277557620_n.jpg", "https://scontent.cdninstagram.com/hphotos-xtp1/t51.2885-15/e15/10831989_483313928477468_40906631_n.jpg"],
						"link": ["xRWN47I7pW", "xO3qREI7iW", "wEQykeo7tU"],
						"text": ["2014年最后的阳光", "最后一节吉他课结束后，马路上那风一直吹，才感觉南方的冬天终于是来了。其实吉他在冬天会有许多神奇的事情。比如琴弦如肌肉一样因冷而紧绷，发出比以往沉闷的低语；而空旷的大教室里，如有其他同伴拨响和弦，手中本已按灭的琴弦又会因共鸣微微颤动。像有生命一样。", "有棵丑树，我经常去看，又胖又歪，秃得可笑。在变冷的一天，它突然就开花了。冬天的花我知道得很少，南方没有梅花，那就是异木棉了"],
						"type": ["image", "image", "image"]
					}
				}, {
					"date": "2014-11",
					"arr": {
						"year": 2014,
						"month": 11,
						"src": ["https://scontent.cdninstagram.com/hphotos-prn/t51.2885-15/e15/10784965_1518537748403855_176956695_n.jpg", "https://scontent.cdninstagram.com/hphotos-prn/t51.2885-15/e15/10735195_1505939246340704_1984926778_n.jpg", "https://scontent.cdninstagram.com/hphotos-prn/t51.2885-15/e15/10747711_429336373885590_422028037_n.jpg"],
						"link": ["vP2ywuo7pq", "vA68BLo7tN", "u7zEVxo7vw"],
						"text": ["通灵之术！", "现场气氛果然不一样，马上就可以看到小伞在大哥胯下疯狂输出…是时候来首选一记薇恩了", "有朋友跟我说，挪威的森林根本看不下去；又有朋友说，看这书一发不可收拾。差别好大呀！我倒觉得有个简单的方法：翻到开篇的这几个字，如果心中一紧，那就说明这本书适合你，否则请弃之"],
						"type": ["image", "image", "image"]
					}
				}, {
					"date": "2014-10",
					"arr": {
						"year": 2014,
						"month": 10,
						"src": ["https://scontent.cdninstagram.com/hphotos-frc/t51.2885-15/e15/10735112_730529873702428_413107753_n.jpg", "https://scontent.cdninstagram.com/hphotos-prn/t51.2885-15/e15/10725177_573652486072155_1401604216_n.jpg", "https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e15/10724868_302191016652312_2097904817_n.jpg", "https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e15/10731727_461314204008708_386749273_n.jpg"],
						"link": ["uu70zJo7qb", "uQnvluo7sK", "uLi56Wo7oO", "uEv-tCo7rJ"],
						"text": ["天下的小饼干遇到我，貌似就只有一种下场！！", "一个人，一支口琴，一片海，一瓶酒", "《论夜归，打的，以及发票的正确用法》", "童年真好。我以后一定不要跟孩子说：希望你快高长大这种傻话…"],
						"type": ["image", "image", "image", "image"]
					}
				}, {
					"date": "2014-9",
					"arr": {
						"year": 2014,
						"month": 9,
						"src": ["https://scontent.cdninstagram.com/hphotos-frc/t51.2885-15/e15/10616983_1382591478697855_2107473552_n.jpg", "https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e15/925287_1464119273867077_427071626_n.jpg", "https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/925284_1534308033454310_855505111_n.jpg", "https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e15/10666267_1550871771803214_2074300649_n.jpg", "https://scontent.cdninstagram.com/hphotos-prn/t51.2885-15/e15/10693244_734401199942901_1572709880_n.jpg", "https://scontent.cdninstagram.com/hphotos-prn/t51.2885-15/e15/10693771_1517437541834868_665867908_n.jpg", "https://scontent.cdninstagram.com/hphotos-prn/t51.2885-15/e15/10693822_497709657032441_1125408654_n.jpg", "https://scontent.cdninstagram.com/hphotos-prn/t51.2885-15/e15/10683941_796597910390683_12441123_n.jpg", "https://scontent.cdninstagram.com/hphotos-ash/t51.2885-15/e15/10661142_164227523747936_1526737465_n.jpg", "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/10661182_550889531706942_2043749716_n.jpg", "https://scontent.cdninstagram.com/hphotos-ash/t51.2885-15/e15/10520334_1523531751215211_1344090061_n.jpg", "https://scontent.cdninstagram.com/hphotos-prn/t51.2885-15/e15/10693390_547748238660649_761529890_n.jpg", "https://scontent.cdninstagram.com/hphotos-prn/t51.2885-15/e15/10693650_837768039589771_1793184733_n.jpg", "https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e15/914812_1529561143923493_1662159287_n.jpg", "https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e15/10644019_368509079979549_2085033896_n.jpg", "https://scontent.cdninstagram.com/hphotos-xta1/t51.2885-15/e15/10684161_918887498139099_2081383304_n.jpg", "https://scontent.cdninstagram.com/hphotos-ash/t51.2885-15/e15/10683828_327931784041264_894089329_n.jpg", "https://scontent.cdninstagram.com/hphotos-prn/t51.2885-15/e15/10666028_872988212713750_1345360858_n.jpg", "https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/e15/10665501_1452353738387652_2075798065_n.jpg"],
						"link": ["tXuIHso7qK", "tJjQlAo7kH", "tDYyUeo7oX", "tCBULHo7sW", "tB_Xmao7qG", "s8cKzLI7pM", "s6-lOFo7ip", "s5GifkI7q7", "s3uZcmo7uj", "s2bb5io7p-", "s2P72tI7o6", "s2FPpGI7o_", "s1LPQPo7v8", "szZP5Io7lY", "sr9rtNo7lM", "sr7gXKI7h_", "srG7fjo7sV", "spAnrio7oh", "sj4BGgI7t_"],
						"text": ["我的好朋友——超级高冷超级磨人的丝瓜", "沉眠的店主失眠的狗。想起大学的最后时光，宿舍24小时都有人醒着，自由的人生，自由的酒和曲终人散，大家通常没有另一半，没有钱，没有忧愁，爽成狗", "如果他是程序员…\nvar date = lifetime;\rif(rotate(mountain, water, stupa)){ /*return nextLifetime;*/ return meetyou(journey);\r}", "听着山寨的民谣电子乐，看着美好的姑娘。功德无量。", "弥里塘太宁静。在这我一直想起每一个被深圳车水马龙声吵醒的早晨，真是光辉的岁月", "进藏。天空挂满着云，黑的白的都有。云朵转眼飘散，它却依然是蓝色。", "“音浪太强不晃会被撞到地上…”", "陌生的朋友，愿下次再能与你们相聚在丽江love wine & half。我无法融解你悲观现实的想法，你也无法说服我旅行并不是逃避。但这都很有意思。只是想起以前有个人叫我不能喝太多的酒，一想到这个呀我就越喝越多", "玉龙雪山", "以前想去丽江，但去过的人都灌输着你也许会失望的观念，因而甚至不敢动身。这是一种“怕”。有时候真得自己去看看才会了然。第一天在丽江，民谣吉他缓缓流过商业化的街道，原来没有惊喜，也没有失望，一切刚刚好。", "我注定要回到老路上", "彩云之南", "云南，向往已久的地方", "QQ同时在线人数破2亿纪念，作为一颗小小螺丝钉，名字正好镶到企鹅的大嘴巴上。这时觉得有一丝光荣，一种努力被实化的错觉；然后又有点不舒服，感觉此时的自己，和名字身边的人一样。可我想要的就是不一样。", "陪伴一定得是件漫长的事呵。和奶奶在一起的中秋节。", "中秋和家人一起去看孔明灯，热闹而安逸，这是小城市的美好。", "老家的葡萄藤，从我初中时就挂在这，再见已是十一年", "家里橄榄熟了，盐渍，暴晒，蘸蜜，简直人间美味!", "在一场太阳雨里回到家中"],
						"type": ["image", "image", "image", "image", "image", "image", "video", "image", "video", "image", "video", "image", "image", "image", "image", "video", "image", "image", "image"]
					}
				}, {
					"date": "2014-8",
					"arr": {
						"year": 2014,
						"month": 8,
						"src": ["https://scontent.cdninstagram.com/hphotos-ash/t51.2885-15/e15/10654876_610857929023752_364709543_n.jpg", "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/10644013_777642448965989_544517718_n.jpg", "https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/924456_1471485796442896_1699836323_n.jpg", "https://scontent.cdninstagram.com/hphotos-xtp1/t51.2885-15/e15/10607913_692632367472666_1829853902_n.jpg", "https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e15/10611052_1466241683635233_830264506_n.jpg", "https://scontent.cdninstagram.com/hphotos-frc/t51.2885-15/e15/10617144_829548960388746_1611410337_n.jpg", "https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e15/10453953_542161702576881_1621059386_n.jpg"],
						"link": ["sXa9g6I7jB", "sPt4u4I7kA", "sC18G0o7qb", "sAMmEWI7oC", "rzSow4o7lH", "ro28LPI7oc", "rR37wLo7iu"],
						"text": ["在书店的晚上终于把新专反复听完。太柔了…打一星两星的人肯定是真爱粉，这点有人敢怀疑？我不是，打四星！停不下来，直到书店响起:深圳即将入眠。但22点还是深圳的早晨呀", "慢三的华尔兹，大篇幅的爵士即兴。感觉生活得太浮躁。也太安逸。", "好久没看话剧，这部果然没让人失望。导演太会讲故事了，1024个赞", "纵有一万种悲伤的美丽，也比不过这段。", "在书城里看到的<后会无期>分镜图。电影那么美，分镜是这样，这就是现实~", "如果你从北京来看我，我会很感动;如果你像光，从太阳那头过来，我不以为然。因为光到地球只要8.3分钟。我们经常错用代价来衡量情感", "相聚总有时:)"],
						"type": ["image", "video", "image", "image", "image", "image", "image"]
					}
				}, {
					"date": "2014-7",
					"arr": {
						"year": 2014,
						"month": 7,
						"src": ["https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e15/925559_1482425071996009_1940959046_n.jpg", "https://scontent.cdninstagram.com/hphotos-frc/t51.2885-15/e15/10554006_501929086608023_917623457_n.jpg", "https://scontent.cdninstagram.com/hphotos-frc/t51.2885-15/e15/10576105_624878090953161_638111947_n.jpg", "https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/e15/10570119_332808380211109_125412512_n.jpg", "https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e15/926536_828142997203682_1319760676_n.jpg", "https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/923702_252705761596555_721784545_n.jpg", "https://scontent.cdninstagram.com/hphotos-ash/t51.2885-15/e15/10549755_708603639175850_2095584541_n.jpg", "https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e15/928307_1442957109299429_297849354_n.jpg", "https://scontent.cdninstagram.com/hphotos-ash/t51.2885-15/e15/10488451_303926969784787_1278259348_n.jpg"],
						"link": ["q5e2KpI7qn", "qyXXpNI7q5", "qxfUe0I7lp", "qq9usdo7hr", "qn4WCIo7hi", "ql0brho7vN", "qkiaYDo7t9", "qURC9fI7r-", "p4A8IuI7py"],
						"text": ["随便走走，发现世界还是很美好的。当拥有美好事物时，经常习惯性的熟视无睹;当努力抓住你想要的东西时，它又可能瞬间破碎。但依旧需要不妥协。", "荔枝——我心目中的水果之王（有之一）", "高中时代最新款的mp4，现已成了老古董", "台风来临时，刚好会是暑假。但我已没有暑假。", "看着一场雨由远及近的淋湿院子，太漂亮", "归来却空空的行囊  那故乡的云  那故乡的风  啦啦啦啦啦 啦啦啦。", "在今年第一个狂风大作的早上，回家去", "98年，世界杯第一次在我脑中留下记忆，和爸，围着那台很小的tcl。今天，爸还打电话给我，让我别看太晚影响到明天工作，但我知道他自己也会去看的。是的，我们爱足球，今生今世", "这几天深圳的天空很美，无论晴雨"],
						"type": ["image", "image", "image", "image", "image", "image", "image", "image", "image"]
					}
				}, {
					"date": "2014-6",
					"arr": {
						"year": 2014,
						"month": 6,
						"src": ["https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/10362316_1434933843444633_1187384207_n.jpg", "https://scontent.cdninstagram.com/hphotos-prn/t51.2885-15/e15/10471930_507725875994902_393186392_n.jpg", "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/10454011_484872768311603_738380027_n.jpg", "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/923661_248502122024084_2086692261_n.jpg", "https://scontent.cdninstagram.com/hphotos-xtp1/t51.2885-15/e15/10424605_774238262594769_78480252_n.jpg"],
						"link": ["p06uEZI7tG", "pytFNpo7sD", "poMFteI7q0", "pMt5tgI7vj", "o3eroFo7gK"],
						"text": ["“往事依稀浑似梦，都随风雨到心头”——梅表姐", "navy blue", "今天我遇到一朵枯玫瑰。她只是枯萎，从未凋零。", "上届卫冕冠军被打成筛子的…是热火…", "我和大神的差距——web工程师的自我修养"],
						"type": ["image", "image", "image", "image", "image"]
					}
				}, {
					"date": "2014-5",
					"arr": {
						"year": 2014,
						"month": 5,
						"src": ["https://scontent.cdninstagram.com/hphotos-xat1/t51.2885-15/e15/10387796_255697041300477_753213015_n.jpg", "https://scontent.cdninstagram.com/hphotos-frc/t51.2885-15/e15/10005623_779769878723970_627922376_n.jpg", "https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/e15/10358172_1495900567292387_640174442_n.jpg", "https://scontent.cdninstagram.com/hphotos-xta1/t51.2885-15/e15/10369281_674379822637848_233362820_n.jpg", "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/928251_430572373746575_786910314_n.jpg", "https://scontent.cdninstagram.com/hphotos-frc/t51.2885-15/e15/10358301_256481271142988_1088114034_n.jpg", "https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/10296597_1413560715589179_392570057_n.jpg", "https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e15/10299642_561366610636165_721929935_n.jpg", "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/10268965_1446530205590326_114108738_n.jpg"],
						"link": ["op03boo7lW", "ops-ZUI7t-", "ofqhBpI7mQ", "odP0cno7ue", "oLX-4GI7ne", "oBl6WtI7qC", "nvPChzI7vU", "ngAyz8o7qj", "ndTggdI7jn"],
						"text": ["突然发现我还是挺喜欢大晴天的", "单人旅行走起！开心", "不久就可以吃了", "黄昏时分", "大雨倾城", "今天路过公园，一朵玉兰掉在身边。想起小时候陪伴我的三棵树，两棵木棉，一棵玉兰。当然玉兰这名字是后来才知道的，记忆里的那朵永远叫做香花。三年级的某天放学，这三棵树一并倒下了。", "雨中深大。雨季再来不再来。", "say hey to may", "故事中的小黄花"],
						"type": ["image", "image", "image", "image", "image", "image", "image", "image", "image"]
					}
				}, {
					"date": "2014-4",
					"arr": {
						"year": 2014,
						"month": 4,
						"src": ["https://scontent.cdninstagram.com/hphotos-ash/t51.2885-15/e15/10261258_711820055527911_220271949_n.jpg", "https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/e15/10249356_695726313802446_881680057_n.jpg", "https://scontent.cdninstagram.com/hphotos-ash/t51.2885-15/e15/10268929_597082527053970_1060360934_n.jpg", "https://scontent.cdninstagram.com/hphotos-ash/t51.2885-15/e15/10268941_490697914386538_1148834228_n.jpg", "https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e15/10254195_545488182236276_1930978882_n.jpg", "https://scontent.cdninstagram.com/hphotos-xtp1/t51.2885-15/e15/917572_539124756205696_1549712749_n.jpg", "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/927273_657564254280429_578859844_n.jpg", "https://scontent.cdninstagram.com/hphotos-frc/t51.2885-15/e15/10175316_650834874981595_1358429831_n.jpg", "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/926422_245144379006241_1254093305_n.jpg", "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/891289_302574849898688_205313988_n.jpg", "https://scontent.cdninstagram.com/hphotos-frc/t51.2885-15/e15/10175309_510867459023322_1700312549_n.jpg"],
						"link": ["nOGNjUI7op", "nGJfYAo7lW", "nATIxlI7tR", "mxsNwto7pQ", "mm7JTUI7p0", "mhER0lo7oe", "mfvVUYI7hu", "mdF-nNo7pE", "mcVLQzo7nl", "mb5cFho7sd", "maqYInI7if"],
						"text": ["谢谢亲们的蛋糕和礼物;谢谢我们始终用“同学”来称呼彼此。", "处女座老榕树", "放风筝的人们", "现在我的状态，像极了一只被推上战场僵尸", "这几天我耳边是都是这样的话语:1、“就是敲敲键盘，挺清闲的哈！”2、“别太挑剔，给个一两千就先做着”3、“什么？你那一碗粉要十二块钱？！”我回深圳了，几天的清静生活，谢谢乡亲们的招待。", "good luck", "瓦上花开", "好吧，这是一艘船", "石表山，思罗河，四年后的清明我又来到了这儿", "清明，一路向西", "清明一回到家，老妈就开始炫耀她试验种的豆芽。愿君多采撷，此物最好吃？"],
						"type": ["image", "image", "image", "image", "image", "image", "image", "image", "image", "image", "image"]
					}
				}, {
					"date": "2014-3",
					"arr": {
						"year": 2014,
						"month": 3,
						"src": ["https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e15/10012487_604746702952671_676907736_n.jpg", "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/1171265_389602547845527_1588547561_n.jpg", "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/11376491_1614984048759908_413209146_n.jpg", "https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e15/11251074_365441270314698_1015057085_n.jpg", "https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e15/11380079_1581430378786145_504181803_n.jpg", "https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e15/11330604_837683999618217_506172540_n.jpg", "https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e15/11273047_110162449318540_1639646034_n.jpg", "https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/11375356_908792249164254_112740693_n.jpg", "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/11357539_388432694679963_1281450994_n.jpg", "https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e15/11311124_1611430865770700_1482115931_n.jpg", "https://scontent.cdninstagram.com/hphotos-ash/t51.2885-15/e15/1741772_1426622784247263_147777246_n.jpg"],
						"link": ["mIgOdio7jT", "mIAS5lo7hb", "lrhVmio7lF", "lmADv6I7rU", "lhPFVeI7g6", "lcyrKSI7h_", "lSda6Ko7nG", "lSSxd8I7kB", "lK0xswI7s6", "lA4KaBI7go", "k902HUI7ms"],
						"text": ["转角遇到戏台，耳熟却不知道是哪一出了。想起爷爷以前的二胡与杨琴，自己精削细磨的琴竹，还有他组织的“菊山楼”粤剧队，真是一晃好些年。今年清明，一定回去。", "这本书超赞！好书好书好书", "四五点写程序太累，就不写了。不告诉任何人，跑到这个立交桥底，我已来过好几回。这里有一棵白色的紫荆花，满墙爬山虎，和刚放学的小朋友，出去，右拐，再右拐，转角可以遇到你，我的肉夹馍…", "越来越认生了，到步行街买衣服，找到比较适合的，却因为店员太过热情…跑了出来。闹市中居然藏有一古庙，还是这里自在，漫天神佛只是笑笑，不理物我，无论喜悲。对了我来这干嘛", "爬山的好处:强身健体，磨砺意志，开阔胸怀…坏处是:没有wifi。", "又见回南天", "老妈说，今天要我送个礼物！离家万里，只好迅速开发出这个app，摇后就会播放我唱的真的爱你。可惜她说摇后没反应，后来才知道，她拿的ipad在摇…但我是真的爱你", "今天下雨，的士司机都不肯理我。头上路灯光芒遥不可及，脚下路面棱角冰冷鲜明", "起风吧，明天。喜欢偏冷的日子，假如是春天，假如是风大，太完美了", "腾讯的凌晨四点半。第一次在此过夜，听着耳熟不能详的歌，看着平静不微笑的人。然后记起，家里打来被我按掉的电话，忘了回", "从前有一座腾讯大厦，里面有一个老程序员，在跟一个小程序员讲故事。讲的什么故事呢？从前有一座腾讯大厦…在这种递归函数的紧密封装中，小程序员喊道:我不听！不要剧透啊！用这种方式，他break了出去！星夜逃奔，敛影潜形。现在我觉得自己似乎是个英雄…虽然这错觉只有一瞬"],
						"type": ["image", "image", "image", "image", "image", "image", "image", "image", "image", "image", "image"]
					}
				}, {
					"date": "2014-2",
					"arr": {
						"year": 2014,
						"month": 2,
						"src": ["https://scontent.cdninstagram.com/hphotos-ash/t51.2885-15/e15/1737225_591794970889160_1849235580_n.jpg", "https://scontent.cdninstagram.com/hphotos-prn/t51.2885-15/e15/1741200_451260698337036_577792061_n.jpg"],
						"link": ["kv3jNgI7sw", "kr8sW8I7nR"],
						"text": ["“不能吃太胖喔，会被杀掉的！”", "今晚，已经看到两个小女生在问，这里有《九云梦》吗？"],
						"type": ["image", "image"]
					}
				}]
			});
			$(".open-ins").html("图片同步自instagram");
		}
	};

/***/ }),

/***/ 452:
/***/ (function(module, exports) {

	$.fn.lazyload = function (options) {
	    return this.each(function () {

	        options = options || {};
	        var defualts = {};

	        var opts = $.extend({}, defualts, options);
	        var obj = $(this);
	        var dom = this;

	        var srcSign = options.srcSign || "lazy-src";
	        var errCallBack = options.errCallBack || function () {};
	        var container = options.container || $(window);

	        /**
	         * @description src正常
	         */
	        var imgload = function (e, target) {}
	        //todo: 上报


	        /**
	         * @description src失效
	         */
	        ;var imgerr = function (e, target, fn, src) {
	            if (target[0].src && (target[0].src.indexOf("img-err.png") > 0 || target[0].src.indexOf("img-err2.png") > 0)) {
	                return;
	            }
	            var w = target.width();
	            var h = target.height();
	            //target[0].src = "/img/img-err.png";

	            fn();
	            //todo: 上报
	        };

	        var tempImg = function (target) {
	            var w = target.width();
	            var h = target.height();
	            var t = target.offset().top;
	            var l = target.offset().left;
	            var tempDom = target.clone().addClass("lazy-loding").insertBefore(target);
	            //tempDom[0].src = "/img/img-loading.png";
	            target.hide();
	        };
	        /**
	         * @description src替换，loading过程中添加类lazy-loading;
	         */
	        var setSrc = function (target, srcSign, errCallBack) {

	            if (target.attr("src")) return;

	            if (options.cache == true) {
	                console.log(target);
	                //存进localstorage
	                var canvas1 = document.getElementById('canvas1');
	                var ctx1 = canvas1.getContext('2d');
	                var imageData;

	                image = new Image();
	                image.src = target.attr(srcSign);
	                image.onload = function () {
	                    ctx1.drawImage(image, 0, 0);
	                    imageData = ctx1.getImageData(0, 0, 500, 250);
	                    console.log(imageData);
	                };
	            } else {
	                tempImg(target);

	                var src = target.attr(srcSign);
	                target[0].onerror = function (e) {
	                    imgerr(e, target, errCallBack, src);
	                };
	                target[0].onload = function (e) {
	                    target.parent().find(".lazy-loding").remove();
	                    target.show();
	                    imgload(e, target);
	                };
	                target[0].src = src;
	            }
	        };

	        /**
	         * @description 重组
	         */
	        opts.cache = [];

	        if (dom.tagName == "IMG") {
	            var data = {
	                obj: obj,
	                tag: "img",
	                url: obj.attr(srcSign)
	            };
	            opts.cache.push(data);
	        } else {
	            var imgArr = obj.find("img");
	            imgArr.each(function (index) {
	                var node = this.nodeName.toLowerCase(),
	                    url = $(this).attr(srcSign);
	                //重组
	                var data = {
	                    obj: imgArr.eq(index),
	                    tag: node,
	                    url: url
	                };
	                opts.cache.push(data);
	            });
	        }

	        //动态显示数据
	        var scrollHandle = function () {
	            var contHeight = container.height();
	            var contop;
	            if ($(window).get(0) === window) {
	                contop = $(window).scrollTop();
	            } else {
	                contop = container.offset().top;
	            }
	            $.each(opts.cache, function (i, data) {
	                var o = data.obj,
	                    tag = data.tag,
	                    url = data.url,
	                    post,
	                    posb;
	                if (o) {
	                    post = o.offset().top - contop, post + o.height();

	                    if (post >= 0 && post < contHeight || posb > 0 && posb <= contHeight) {
	                        if (url) {
	                            //在浏览器窗口内
	                            if (tag === "img") {
	                                //改变src
	                                setSrc(o, srcSign, errCallBack);
	                            }
	                        }
	                        data.obj = null;
	                    }
	                }
	            });
	        };

	        //加载完毕即执行
	        scrollHandle();
	        //滚动执行
	        container.bind("scroll", scrollHandle);
	        container.bind("resize", scrollHandle);
	    });
	};

	module.exports = {};

/***/ })

/******/ });