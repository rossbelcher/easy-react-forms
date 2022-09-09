'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var recoil = require('recoil');
var require$$3 = require('@emotion/stylis');
var require$$5 = require('@emotion/is-prop-valid');
var require$$0 = require('react-is');
var require$$7 = require('stream');
var cloneDeep = require('lodash');
require('prop-types');
var require$$2 = require('classnames');
var require$$3$1 = require('date-fns/isDate');
var require$$4 = require('date-fns/isValid');
var require$$5$1 = require('date-fns/format');
var require$$6 = require('date-fns/addMinutes');
var require$$7$1 = require('date-fns/addHours');
var require$$8 = require('date-fns/addDays');
var require$$9 = require('date-fns/addWeeks');
var require$$10 = require('date-fns/addMonths');
var require$$11 = require('date-fns/addYears');
require('date-fns/subMinutes');
require('date-fns/subHours');
var require$$14 = require('date-fns/subDays');
var require$$15 = require('date-fns/subWeeks');
var require$$16 = require('date-fns/subMonths');
var require$$17 = require('date-fns/subYears');
var require$$18 = require('date-fns/getSeconds');
var require$$19 = require('date-fns/getMinutes');
var require$$20 = require('date-fns/getHours');
var require$$21 = require('date-fns/getDay');
var require$$22 = require('date-fns/getDate');
var require$$23 = require('date-fns/getISOWeek');
var require$$24 = require('date-fns/getMonth');
var require$$25 = require('date-fns/getQuarter');
var require$$26 = require('date-fns/getYear');
var require$$27 = require('date-fns/getTime');
var require$$28 = require('date-fns/setSeconds');
var require$$29 = require('date-fns/setMinutes');
var require$$30 = require('date-fns/setHours');
var require$$31 = require('date-fns/setMonth');
var require$$32 = require('date-fns/setQuarter');
var require$$33 = require('date-fns/setYear');
var require$$34 = require('date-fns/min');
var require$$35 = require('date-fns/max');
var require$$36 = require('date-fns/differenceInCalendarDays');
var require$$37 = require('date-fns/differenceInCalendarMonths');
require('date-fns/differenceInCalendarWeeks');
var require$$39 = require('date-fns/differenceInCalendarYears');
var require$$40 = require('date-fns/startOfDay');
var require$$41 = require('date-fns/startOfWeek');
var require$$42 = require('date-fns/startOfMonth');
var require$$43 = require('date-fns/startOfQuarter');
var require$$44 = require('date-fns/startOfYear');
var require$$45 = require('date-fns/endOfDay');
require('date-fns/endOfWeek');
require('date-fns/endOfMonth');
var require$$48 = require('date-fns/isEqual');
var require$$49 = require('date-fns/isSameDay');
var require$$50 = require('date-fns/isSameMonth');
var require$$51 = require('date-fns/isSameYear');
var require$$52 = require('date-fns/isSameQuarter');
var require$$53 = require('date-fns/isAfter');
var require$$54 = require('date-fns/isBefore');
var require$$55 = require('date-fns/isWithinInterval');
var require$$56 = require('date-fns/toDate');
var require$$57 = require('date-fns/parse');
var require$$58 = require('date-fns/parseISO');
var require$$1 = require('react-dom');
var require$$61 = require('react-popper');
var moment$1 = require('moment');
require('moment/locale/en-gb');
var moment = require('moment-timezone');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var require$$3__default = /*#__PURE__*/_interopDefaultLegacy(require$$3);
var require$$5__default = /*#__PURE__*/_interopDefaultLegacy(require$$5);
var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
var require$$7__default = /*#__PURE__*/_interopDefaultLegacy(require$$7);
var cloneDeep__default = /*#__PURE__*/_interopDefaultLegacy(cloneDeep);
var require$$2__default = /*#__PURE__*/_interopDefaultLegacy(require$$2);
var require$$3__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$3$1);
var require$$4__default = /*#__PURE__*/_interopDefaultLegacy(require$$4);
var require$$5__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$5$1);
var require$$6__default = /*#__PURE__*/_interopDefaultLegacy(require$$6);
var require$$7__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$7$1);
var require$$8__default = /*#__PURE__*/_interopDefaultLegacy(require$$8);
var require$$9__default = /*#__PURE__*/_interopDefaultLegacy(require$$9);
var require$$10__default = /*#__PURE__*/_interopDefaultLegacy(require$$10);
var require$$11__default = /*#__PURE__*/_interopDefaultLegacy(require$$11);
var require$$14__default = /*#__PURE__*/_interopDefaultLegacy(require$$14);
var require$$15__default = /*#__PURE__*/_interopDefaultLegacy(require$$15);
var require$$16__default = /*#__PURE__*/_interopDefaultLegacy(require$$16);
var require$$17__default = /*#__PURE__*/_interopDefaultLegacy(require$$17);
var require$$18__default = /*#__PURE__*/_interopDefaultLegacy(require$$18);
var require$$19__default = /*#__PURE__*/_interopDefaultLegacy(require$$19);
var require$$20__default = /*#__PURE__*/_interopDefaultLegacy(require$$20);
var require$$21__default = /*#__PURE__*/_interopDefaultLegacy(require$$21);
var require$$22__default = /*#__PURE__*/_interopDefaultLegacy(require$$22);
var require$$23__default = /*#__PURE__*/_interopDefaultLegacy(require$$23);
var require$$24__default = /*#__PURE__*/_interopDefaultLegacy(require$$24);
var require$$25__default = /*#__PURE__*/_interopDefaultLegacy(require$$25);
var require$$26__default = /*#__PURE__*/_interopDefaultLegacy(require$$26);
var require$$27__default = /*#__PURE__*/_interopDefaultLegacy(require$$27);
var require$$28__default = /*#__PURE__*/_interopDefaultLegacy(require$$28);
var require$$29__default = /*#__PURE__*/_interopDefaultLegacy(require$$29);
var require$$30__default = /*#__PURE__*/_interopDefaultLegacy(require$$30);
var require$$31__default = /*#__PURE__*/_interopDefaultLegacy(require$$31);
var require$$32__default = /*#__PURE__*/_interopDefaultLegacy(require$$32);
var require$$33__default = /*#__PURE__*/_interopDefaultLegacy(require$$33);
var require$$34__default = /*#__PURE__*/_interopDefaultLegacy(require$$34);
var require$$35__default = /*#__PURE__*/_interopDefaultLegacy(require$$35);
var require$$36__default = /*#__PURE__*/_interopDefaultLegacy(require$$36);
var require$$37__default = /*#__PURE__*/_interopDefaultLegacy(require$$37);
var require$$39__default = /*#__PURE__*/_interopDefaultLegacy(require$$39);
var require$$40__default = /*#__PURE__*/_interopDefaultLegacy(require$$40);
var require$$41__default = /*#__PURE__*/_interopDefaultLegacy(require$$41);
var require$$42__default = /*#__PURE__*/_interopDefaultLegacy(require$$42);
var require$$43__default = /*#__PURE__*/_interopDefaultLegacy(require$$43);
var require$$44__default = /*#__PURE__*/_interopDefaultLegacy(require$$44);
var require$$45__default = /*#__PURE__*/_interopDefaultLegacy(require$$45);
var require$$48__default = /*#__PURE__*/_interopDefaultLegacy(require$$48);
var require$$49__default = /*#__PURE__*/_interopDefaultLegacy(require$$49);
var require$$50__default = /*#__PURE__*/_interopDefaultLegacy(require$$50);
var require$$51__default = /*#__PURE__*/_interopDefaultLegacy(require$$51);
var require$$52__default = /*#__PURE__*/_interopDefaultLegacy(require$$52);
var require$$53__default = /*#__PURE__*/_interopDefaultLegacy(require$$53);
var require$$54__default = /*#__PURE__*/_interopDefaultLegacy(require$$54);
var require$$55__default = /*#__PURE__*/_interopDefaultLegacy(require$$55);
var require$$56__default = /*#__PURE__*/_interopDefaultLegacy(require$$56);
var require$$57__default = /*#__PURE__*/_interopDefaultLegacy(require$$57);
var require$$58__default = /*#__PURE__*/_interopDefaultLegacy(require$$58);
var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);
var require$$61__default = /*#__PURE__*/_interopDefaultLegacy(require$$61);
var moment__default$1 = /*#__PURE__*/_interopDefaultLegacy(moment$1);
var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var styledComponents_cjs = {};

var reactIs$1 = {exports: {}};

var reactIs_production_min = {};

/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen"),u;u=Symbol.for("react.module.reference");
	function v(a){if("object"===typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type,a){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof,a){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}reactIs_production_min.ContextConsumer=h;reactIs_production_min.ContextProvider=g;reactIs_production_min.Element=b;reactIs_production_min.ForwardRef=l;reactIs_production_min.Fragment=d;reactIs_production_min.Lazy=q;reactIs_production_min.Memo=p;reactIs_production_min.Portal=c;reactIs_production_min.Profiler=f;reactIs_production_min.StrictMode=e;reactIs_production_min.Suspense=m;
	reactIs_production_min.SuspenseList=n;reactIs_production_min.isAsyncMode=function(){return !1};reactIs_production_min.isConcurrentMode=function(){return !1};reactIs_production_min.isContextConsumer=function(a){return v(a)===h};reactIs_production_min.isContextProvider=function(a){return v(a)===g};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===b};reactIs_production_min.isForwardRef=function(a){return v(a)===l};reactIs_production_min.isFragment=function(a){return v(a)===d};reactIs_production_min.isLazy=function(a){return v(a)===q};reactIs_production_min.isMemo=function(a){return v(a)===p};
	reactIs_production_min.isPortal=function(a){return v(a)===c};reactIs_production_min.isProfiler=function(a){return v(a)===f};reactIs_production_min.isStrictMode=function(a){return v(a)===e};reactIs_production_min.isSuspense=function(a){return v(a)===m};reactIs_production_min.isSuspenseList=function(a){return v(a)===n};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===d||a===f||a===e||a===m||a===n||a===t||"object"===typeof a&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===g||a.$$typeof===h||a.$$typeof===l||a.$$typeof===u||void 0!==a.getModuleId)?!0:!1};reactIs_production_min.typeOf=v;
	return reactIs_production_min;
}

var reactIs_development = {};

/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	// ATTENTION

	var REACT_ELEMENT_TYPE =  Symbol.for('react.element');
	var REACT_PORTAL_TYPE =  Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE =  Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE =  Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE =  Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE =  Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE =  Symbol.for('react.context');
	var REACT_SERVER_CONTEXT_TYPE =  Symbol.for('react.server_context');
	var REACT_FORWARD_REF_TYPE =  Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE =  Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE =  Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE =  Symbol.for('react.memo');
	var REACT_LAZY_TYPE =  Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE =  Symbol.for('react.offscreen');

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	          case REACT_SUSPENSE_LIST_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_SERVER_CONTEXT_TYPE:
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	}
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false;
	var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
	    }
	  }

	  return false;
	}
	function isConcurrentMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
	      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
	    }
	  }

	  return false;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}
	function isSuspenseList(object) {
	  return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
	}

	reactIs_development.ContextConsumer = ContextConsumer;
	reactIs_development.ContextProvider = ContextProvider;
	reactIs_development.Element = Element;
	reactIs_development.ForwardRef = ForwardRef;
	reactIs_development.Fragment = Fragment;
	reactIs_development.Lazy = Lazy;
	reactIs_development.Memo = Memo;
	reactIs_development.Portal = Portal;
	reactIs_development.Profiler = Profiler;
	reactIs_development.StrictMode = StrictMode;
	reactIs_development.Suspense = Suspense;
	reactIs_development.SuspenseList = SuspenseList;
	reactIs_development.isAsyncMode = isAsyncMode;
	reactIs_development.isConcurrentMode = isConcurrentMode;
	reactIs_development.isContextConsumer = isContextConsumer;
	reactIs_development.isContextProvider = isContextProvider;
	reactIs_development.isElement = isElement;
	reactIs_development.isForwardRef = isForwardRef;
	reactIs_development.isFragment = isFragment;
	reactIs_development.isLazy = isLazy;
	reactIs_development.isMemo = isMemo;
	reactIs_development.isPortal = isPortal;
	reactIs_development.isProfiler = isProfiler;
	reactIs_development.isStrictMode = isStrictMode;
	reactIs_development.isSuspense = isSuspense;
	reactIs_development.isSuspenseList = isSuspenseList;
	reactIs_development.isValidElementType = isValidElementType;
	reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

(function (module) {

	if (process.env.NODE_ENV === 'production') {
	  module.exports = requireReactIs_production_min();
	} else {
	  module.exports = requireReactIs_development();
	}
} (reactIs$1));

//

var shallowequal = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};

var unitless_cjs = {exports: {}};

var unitless_cjs_prod = {};

var hasRequiredUnitless_cjs_prod;

function requireUnitless_cjs_prod () {
	if (hasRequiredUnitless_cjs_prod) return unitless_cjs_prod;
	hasRequiredUnitless_cjs_prod = 1;

	Object.defineProperty(unitless_cjs_prod, "__esModule", {
	  value: !0
	});

	var unitlessKeys = {
	  animationIterationCount: 1,
	  borderImageOutset: 1,
	  borderImageSlice: 1,
	  borderImageWidth: 1,
	  boxFlex: 1,
	  boxFlexGroup: 1,
	  boxOrdinalGroup: 1,
	  columnCount: 1,
	  columns: 1,
	  flex: 1,
	  flexGrow: 1,
	  flexPositive: 1,
	  flexShrink: 1,
	  flexNegative: 1,
	  flexOrder: 1,
	  gridRow: 1,
	  gridRowEnd: 1,
	  gridRowSpan: 1,
	  gridRowStart: 1,
	  gridColumn: 1,
	  gridColumnEnd: 1,
	  gridColumnSpan: 1,
	  gridColumnStart: 1,
	  msGridRow: 1,
	  msGridRowSpan: 1,
	  msGridColumn: 1,
	  msGridColumnSpan: 1,
	  fontWeight: 1,
	  lineHeight: 1,
	  opacity: 1,
	  order: 1,
	  orphans: 1,
	  tabSize: 1,
	  widows: 1,
	  zIndex: 1,
	  zoom: 1,
	  WebkitLineClamp: 1,
	  fillOpacity: 1,
	  floodOpacity: 1,
	  stopOpacity: 1,
	  strokeDasharray: 1,
	  strokeDashoffset: 1,
	  strokeMiterlimit: 1,
	  strokeOpacity: 1,
	  strokeWidth: 1
	};

	unitless_cjs_prod.default = unitlessKeys;
	return unitless_cjs_prod;
}

var unitless_cjs_dev = {};

var hasRequiredUnitless_cjs_dev;

function requireUnitless_cjs_dev () {
	if (hasRequiredUnitless_cjs_dev) return unitless_cjs_dev;
	hasRequiredUnitless_cjs_dev = 1;

	Object.defineProperty(unitless_cjs_dev, '__esModule', { value: true });

	var unitlessKeys = {
	  animationIterationCount: 1,
	  borderImageOutset: 1,
	  borderImageSlice: 1,
	  borderImageWidth: 1,
	  boxFlex: 1,
	  boxFlexGroup: 1,
	  boxOrdinalGroup: 1,
	  columnCount: 1,
	  columns: 1,
	  flex: 1,
	  flexGrow: 1,
	  flexPositive: 1,
	  flexShrink: 1,
	  flexNegative: 1,
	  flexOrder: 1,
	  gridRow: 1,
	  gridRowEnd: 1,
	  gridRowSpan: 1,
	  gridRowStart: 1,
	  gridColumn: 1,
	  gridColumnEnd: 1,
	  gridColumnSpan: 1,
	  gridColumnStart: 1,
	  msGridRow: 1,
	  msGridRowSpan: 1,
	  msGridColumn: 1,
	  msGridColumnSpan: 1,
	  fontWeight: 1,
	  lineHeight: 1,
	  opacity: 1,
	  order: 1,
	  orphans: 1,
	  tabSize: 1,
	  widows: 1,
	  zIndex: 1,
	  zoom: 1,
	  WebkitLineClamp: 1,
	  // SVG-related properties
	  fillOpacity: 1,
	  floodOpacity: 1,
	  stopOpacity: 1,
	  strokeDasharray: 1,
	  strokeDashoffset: 1,
	  strokeMiterlimit: 1,
	  strokeOpacity: 1,
	  strokeWidth: 1
	};

	unitless_cjs_dev.default = unitlessKeys;
	return unitless_cjs_dev;
}

(function (module) {

	if (process.env.NODE_ENV === "production") {
	  module.exports = requireUnitless_cjs_prod();
	} else {
	  module.exports = requireUnitless_cjs_dev();
	}
} (unitless_cjs));

var reactIs = require$$0__default["default"];

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

var _default$1;
var createGlobalStyle;
function e$1(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(styledComponents_cjs,"__esModule",{value:!0});var t$1=reactIs$1.exports,n$1=React__default["default"],r$1=e$1(n$1),o$1=e$1(shallowequal),s$1=e$1(require$$3__default["default"]),i$1=e$1(unitless_cjs.exports),a$1=e$1(require$$5__default["default"]),c$1=e$1(hoistNonReactStatics_cjs);function u$1(){return (u$1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e}).apply(this,arguments)}var l$1=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},d$1=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!t$1.typeOf(e)},h$1=Object.freeze([]),p$1=Object.freeze({});function f$1(e){return "function"==typeof e}function m$1(e){return "production"!==process.env.NODE_ENV&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function y$1(e){return e&&"string"==typeof e.styledComponentId}var v$1="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",g$1="undefined"!=typeof window&&"HTMLElement"in window,S$1=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!==process.env.NODE_ENV),w$1={},E$1="production"!==process.env.NODE_ENV?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:{};function b$1(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t);})),e}function _$1(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw "production"===process.env.NODE_ENV?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):"")):new Error(b$1.apply(void 0,[E$1[e]].concat(n)).trim())}var N$1=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e;}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&_$1(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0;}for(var i=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++);},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n);}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),C$1=new Map,A$1=new Map,I$1=1,P$1=function(e){if(C$1.has(e))return C$1.get(e);for(;A$1.has(I$1);)I$1++;var t=I$1++;return "production"!==process.env.NODE_ENV&&((0|t)<0||t>1<<30)&&_$1(16,""+t),C$1.set(e,t),A$1.set(t,e),t},x$1=function(e){return A$1.get(e)},O$1=function(e,t){t>=I$1&&(I$1=t+1),C$1.set(e,t),A$1.set(t,e);},R$1="style["+v$1+'][data-styled-version="5.3.5"]',D$1=new RegExp("^"+v$1+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),T$1=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r);},j$1=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(D$1);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(O$1(u,c),T$1(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0;}else r.push(i);}}},k$1=function(){return "undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},V$1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(v$1))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(v$1,"active"),r.setAttribute("data-styled-version","5.3.5");var i=k$1();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},M$1=function(){function e(e){var t=this.element=V$1(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}_$1(17);}(t),this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return !1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--;},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),z$1=function(){function e(e){var t=this.element=V$1(e);this.nodes=t.childNodes,this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return !1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--;},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),B$1=function(){function e(e){this.rules=[],this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--;},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),q$1=g$1,G$1={isServer:!g$1,useCSSOMInjection:!S$1},L$1=function(){function e(e,t,n){void 0===e&&(e=p$1),void 0===t&&(t={}),this.options=u$1({},G$1,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&g$1&&q$1&&(q$1=!1,function(e){for(var t=document.querySelectorAll(R$1),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(v$1)&&(j$1(e,o),o.parentNode&&o.parentNode.removeChild(o));}}(this));}e.registerId=function(e){return P$1(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(u$1({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new B$1(o):r?new M$1(o):new z$1(o),new N$1(e)));var e,t,n,r,o;},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(P$1(e),this.names.has(e))this.names.get(e).add(t);else {var n=new Set;n.add(t),this.names.set(e,n);}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(P$1(e),n);},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear();},t.clearRules=function(e){this.getTag().clearGroup(P$1(e)),this.clearNames(e);},t.clearTag=function(){this.tag=void 0;},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=x$1(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(i&&a&&i.size){var c=v$1+".g"+o+'[id="'+s+'"]',u="";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+",");})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n';}}}return r}(this)},e}(),F$1=/(a)(d)/gi,Y$1=function(e){return String.fromCharCode(e+(e>25?39:97))};function H$1(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Y$1(t%52)+n;return (Y$1(t%52)+n).replace(F$1,"$1-$2")}var $$1=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},W$1=function(e){return $$1(5381,e)};function U$1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(f$1(n)&&!y$1(n))return !1}return !0}var J$1=W$1("5.3.5"),X$1=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic="production"===process.env.NODE_ENV&&(void 0===n||n.isStatic)&&U$1(e),this.componentId=t,this.baseHash=$$1(J$1,t),this.baseStyle=n,L$1.registerId(t);}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else {var s=me$1(this.rules,e,t,n).join(""),i=H$1($$1(this.baseHash,s)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,"."+i,void 0,r);t.insertRules(r,i,a);}o.push(i),this.staticRulesId=i;}else {for(var c=this.rules.length,u=$$1(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h,"production"!==process.env.NODE_ENV&&(u=$$1(u,h+d));else if(h){var p=me$1(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=$$1(u,f+d),l+=f;}}if(l){var m=H$1(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y);}o.push(m);}}return o.join(" ")},e}(),Z$1=/^\s*\/\/.*$/gm,K$1=[":","[",".","#"];function Q$1(e){var t,n,r,o,i=void 0===e?p$1:e,a=i.options,c=void 0===a?p$1:a,u=i.plugins,l=void 0===u?h$1:u,d=new s$1(c),f=[],m=function(e){function t(t){if(t)try{e(t+"}");}catch(e){}}return function(n,r,o,s,i,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t);}}}((function(e){f.push(e);})),y=function(e,r,s){return 0===r&&-1!==K$1.indexOf(s[n.length])||s.match(o)?e:"."+t};function v(e,s,i,a){void 0===a&&(a="&");var c=e.replace(Z$1,""),u=s&&i?i+" "+s+" { "+c+" }":c;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),d(i||!s?"":s,u)}return d.use([].concat(l,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,y));},m,function(e){if(-2===e){var t=f;return f=[],t}}])),v.hash=l.length?l.reduce((function(e,t){return t.name||_$1(15),$$1(e,t.name)}),5381).toString():"",v}var ee$1=r$1.createContext(),te$1=ee$1.Consumer,ne$1=r$1.createContext(),re$1=(ne$1.Consumer,new L$1),oe$1=Q$1();function se$1(){return n$1.useContext(ee$1)||re$1}function ie$1(){return n$1.useContext(ne$1)||oe$1}function ae$1(e){var t=n$1.useState(e.stylisPlugins),s=t[0],i=t[1],a=se$1(),c=n$1.useMemo((function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),u=n$1.useMemo((function(){return Q$1({options:{prefix:!e.disableVendorPrefixes},plugins:s})}),[e.disableVendorPrefixes,s]);return n$1.useEffect((function(){o$1(s,e.stylisPlugins)||i(e.stylisPlugins);}),[e.stylisPlugins]),r$1.createElement(ee$1.Provider,{value:c},r$1.createElement(ne$1.Provider,{value:u},"production"!==process.env.NODE_ENV?r$1.Children.only(e.children):e.children))}var ce$1=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=oe$1);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"));},this.toString=function(){return _$1(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t;}return e.prototype.getName=function(e){return void 0===e&&(e=oe$1),this.name+e.hash},e}(),ue$1=/([A-Z])/,le$1=/([A-Z])/g,de$1=/^ms-/,he$1=function(e){return "-"+e.toLowerCase()};function pe$1(e){return ue$1.test(e)?e.replace(le$1,he$1).replace(de$1,"-ms-"):e}var fe$1=function(e){return null==e||!1===e||""===e};function me$1(e,n,r,o){if(Array.isArray(e)){for(var s,a=[],c=0,u=e.length;c<u;c+=1)""!==(s=me$1(e[c],n,r,o))&&(Array.isArray(s)?a.push.apply(a,s):a.push(s));return a}if(fe$1(e))return "";if(y$1(e))return "."+e.styledComponentId;if(f$1(e)){if("function"!=typeof(h=e)||h.prototype&&h.prototype.isReactComponent||!n)return e;var l=e(n);return "production"!==process.env.NODE_ENV&&t$1.isElement(l)&&console.warn(m$1(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),me$1(l,n,r,o)}var h;return e instanceof ce$1?r?(e.inject(r,o),e.getName(o)):e:d$1(e)?function e(t,n){var r,o,s=[];for(var a in t)t.hasOwnProperty(a)&&!fe$1(t[a])&&(Array.isArray(t[a])&&t[a].isCss||f$1(t[a])?s.push(pe$1(a)+":",t[a],";"):d$1(t[a])?s.push.apply(s,e(t[a],a)):s.push(pe$1(a)+": "+(r=a,null==(o=t[a])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in i$1?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}var ye$1=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ve$1(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return f$1(e)||d$1(e)?ye$1(me$1(l$1(h$1,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:ye$1(me$1(l$1(e,n)))}var ge$1=/invalid hook call/i,Se$1=new Set,we$1=function(e,t){if("production"!==process.env.NODE_ENV){var r="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",o=console.error;try{var s=!0;console.error=function(e){if(ge$1.test(e))s=!1,Se$1.delete(r);else {for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];o.apply(void 0,[e].concat(n));}},n$1.useRef(),s&&!Se$1.has(r)&&(console.warn(r),Se$1.add(r));}catch(e){ge$1.test(e.message)&&Se$1.delete(r);}finally{console.error=o;}}},Ee$1=function(e,t,n){return void 0===n&&(n=p$1),e.theme!==n.theme&&e.theme||t||n.theme},be$1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_e$1=/(^-|-$)/g;function Ne$1(e){return e.replace(be$1,"-").replace(_e$1,"")}var Ce$1=function(e){return H$1(W$1(e)>>>0)};function Ae$1(e){return "string"==typeof e&&("production"===process.env.NODE_ENV||e.charAt(0)===e.charAt(0).toLowerCase())}var Ie$1=function(e){return "function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Pe$1=function(e){return "__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function xe$1(e,t,n){var r=e[n];Ie$1(t)&&Ie$1(r)?Oe$1(r,t):e[n]=t;}function Oe$1(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(Ie$1(i))for(var a in i)Pe$1(a)&&xe$1(e,i[a],a);}return e}var Re$1=r$1.createContext(),De$1=Re$1.Consumer,Te$1={};function je$1(e,t,o){var s=y$1(e),i=!Ae$1(e),l=t.attrs,d=void 0===l?h$1:l,v=t.componentId,g=void 0===v?function(e,t){var n="string"!=typeof e?"sc":Ne$1(e);Te$1[n]=(Te$1[n]||0)+1;var r=n+"-"+Ce$1("5.3.5"+n+Te$1[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):v,S=t.displayName,w=void 0===S?function(e){return Ae$1(e)?"styled."+e:"Styled("+m$1(e)+")"}(e):S,E=t.displayName&&t.componentId?Ne$1(t.displayName)+"-"+t.componentId:t.componentId||g,b=s&&e.attrs?Array.prototype.concat(e.attrs,d).filter(Boolean):d,_=t.shouldForwardProp;s&&e.shouldForwardProp&&(_=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var N,C=new X$1(o,E,s?e.componentStyle:void 0),A=C.isStatic&&0===d.length,I=function(e,t){return function(e,t,r,o){var s=e.attrs,i=e.componentStyle,c=e.defaultProps,l=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,m=e.target;"production"!==process.env.NODE_ENV&&n$1.useDebugValue(h);var y=function(e,t,n){void 0===e&&(e=p$1);var r=u$1({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in f$1(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],s=i[t],n&&s?n+" "+s:n||s):i[t];})),[r,o]}(Ee$1(t,n$1.useContext(Re$1),c)||p$1,t,s),v=y[0],g=y[1],S=function(e,t,r,o){var s=se$1(),i=ie$1(),a=t?e.generateAndInjectStyles(p$1,s,i):e.generateAndInjectStyles(r,s,i);return "production"!==process.env.NODE_ENV&&n$1.useDebugValue(a),"production"!==process.env.NODE_ENV&&!t&&o&&o(a),a}(i,o,v,"production"!==process.env.NODE_ENV?e.warnTooManyClasses:void 0),w=r,E=g.$as||t.$as||g.as||t.as||m,b=Ae$1(E),_=g!==t?u$1({},t,{},g):t,N={};for(var C in _)"$"!==C[0]&&"as"!==C&&("forwardedAs"===C?N.as=_[C]:(d?d(C,a$1,E):!b||a$1(C))&&(N[C]=_[C]));return t.style&&g.style!==t.style&&(N.style=u$1({},t.style,{},g.style)),N.className=Array.prototype.concat(l,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),N.ref=w,n$1.createElement(E,N)}(N,e,t,A)};return I.displayName=w,(N=r$1.forwardRef(I)).attrs=b,N.componentStyle=C,N.displayName=w,N.shouldForwardProp=_,N.foldedComponentIds=s?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):h$1,N.styledComponentId=E,N.target=s?e.target:e,N.withComponent=function(e){var n=t.componentId,r=function(e,t){if(null==e)return {};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),s=n&&n+"-"+(Ae$1(e)?e:Ne$1(m$1(e)));return je$1(e,u$1({},r,{attrs:b,componentId:s}),o)},Object.defineProperty(N,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=s?Oe$1({},e.defaultProps,t):t;}}),"production"!==process.env.NODE_ENV&&(we$1(w,E),N.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+s+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={};}}}(w,E)),N.toString=function(){return "."+N.styledComponentId},i&&c$1(N,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),N}var ke$1=function(e){return function e(n,r,o){if(void 0===o&&(o=p$1),!t$1.isValidElementType(r))return _$1(1,String(r));var s=function(){return n(r,o,ve$1.apply(void 0,arguments))};return s.withConfig=function(t){return e(n,r,u$1({},o,{},t))},s.attrs=function(t){return e(n,r,u$1({},o,{attrs:Array.prototype.concat(o.attrs,t).filter(Boolean)}))},s}(je$1,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){ke$1[e]=ke$1(e);}));var Ve$1=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=U$1(e),L$1.registerId(this.componentId+1);}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(me$1(this.rules,t,n,r).join(""),""),s=this.componentId+e;n.insertRules(s,s,o);},t.removeStyles=function(e,t){t.clearRules(this.componentId+e);},t.renderStyles=function(e,t,n,r){e>2&&L$1.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r);},e}(),Me$1=/^\s*<\/[a-z]/i,ze$1=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return "";var n=k$1();return "<style "+[n&&'nonce="'+n+'"',v$1+'="true"','data-styled-version="5.3.5"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?_$1(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return _$1(2);var n=((t={})[v$1]="",t["data-styled-version"]="5.3.5",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=k$1();return o&&(n.nonce=o),[r$1.createElement("style",u$1({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0;},this.instance=new L$1({isServer:!0}),this.sealed=!1;}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?_$1(2):r$1.createElement(ae$1,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){if(g$1)return _$1(3);if(this.sealed)return _$1(2);this.seal();var t=require$$7__default["default"],n=(t.Readable,t.Transform),r=e,o=this.instance,s=this._emitSheetCSS,i=new n({transform:function(e,t,n){var r=e.toString(),i=s();if(o.clearTag(),Me$1.test(r)){var a=r.indexOf(">")+1,c=r.slice(0,a),u=r.slice(a);this.push(c+i+u);}else this.push(i+r);n();}});return r.on("error",(function(e){i.emit("error",e);})),r.pipe(i)},e}(),Be$1={StyleSheet:L$1,masterSheet:re$1};"production"!==process.env.NODE_ENV&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"),"production"!==process.env.NODE_ENV&&"test"!==process.env.NODE_ENV&&"undefined"!=typeof window&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1),styledComponents_cjs.ServerStyleSheet=ze$1,styledComponents_cjs.StyleSheetConsumer=te$1,styledComponents_cjs.StyleSheetContext=ee$1,styledComponents_cjs.StyleSheetManager=ae$1,styledComponents_cjs.ThemeConsumer=De$1,styledComponents_cjs.ThemeContext=Re$1,styledComponents_cjs.ThemeProvider=function(e){var t=n$1.useContext(Re$1),o=n$1.useMemo((function(){return function(e,t){if(!e)return _$1(14);if(f$1(e)){var n=e(t);return "production"===process.env.NODE_ENV||null!==n&&!Array.isArray(n)&&"object"==typeof n?n:_$1(7)}return Array.isArray(e)||"object"!=typeof e?_$1(8):t?u$1({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?r$1.createElement(Re$1.Provider,{value:o},e.children):null},styledComponents_cjs.__PRIVATE__=Be$1,createGlobalStyle = styledComponents_cjs.createGlobalStyle=function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),s=1;s<t;s++)o[s-1]=arguments[s];var i=ve$1.apply(void 0,[e].concat(o)),a="sc-global-"+Ce$1(JSON.stringify(i)),c=new Ve$1(i,a);function l(e){var t=se$1(),o=ie$1(),s=n$1.useContext(Re$1),c=n$1.useRef(t.allocateGSInstance(a)).current;return "production"!==process.env.NODE_ENV&&r$1.Children.count(e.children)&&console.warn("The global style component "+a+" was given child JSX. createGlobalStyle does not render children."),"production"!==process.env.NODE_ENV&&i.some((function(e){return "string"==typeof e&&-1!==e.indexOf("@import")}))&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),t.server&&d(c,e,t,s,o),null}function d(e,t,n,r,o){if(c.isStatic)c.renderStyles(e,w$1,n,o);else {var s=u$1({},t,{theme:Ee$1(t,r,l.defaultProps)});c.renderStyles(e,s,n,o);}}return "production"!==process.env.NODE_ENV&&we$1(a),r$1.memo(l)},styledComponents_cjs.css=ve$1,_default$1 = styledComponents_cjs.default=ke$1,styledComponents_cjs.isStyledComponent=y$1,styledComponents_cjs.keyframes=function(e){"production"!==process.env.NODE_ENV&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=ve$1.apply(void 0,[e].concat(n)).join(""),s=Ce$1(o);return new ce$1(s,o)},styledComponents_cjs.useTheme=function(){return n$1.useContext(Re$1)},styledComponents_cjs.version="5.3.5",styledComponents_cjs.withTheme=function(e){var t=r$1.forwardRef((function(t,o){var s=n$1.useContext(Re$1),i=e.defaultProps,a=Ee$1(t,s,i);return "production"!==process.env.NODE_ENV&&void 0===a&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'+m$1(e)+'"'),r$1.createElement(e,u$1({},t,{theme:a,ref:o}))}));return c$1(t,e),t.displayName="WithTheme("+m$1(e)+")",t};

var base = "\n    padding: 0.5em;\n    background-color: #FFFFFF;\n    border: 1px solid #d6d6d6;\n    transition: all ease 0.5s;\n    outline: none;\n\n    &.error {\n        border: 1px solid red;\n    }\n\n    &:focus {\n        border-color: black;\n    }\n";
var BaseInputStyle = _default$1.input(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n    ", "\n"], ["\n    ", "\n"])), base);
var BaseSelectStyle = _default$1.select(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", "\n"], ["\n    ", "\n"])), base);
var BaseCalendarStyle = _default$1.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    input {\n        ", "\n    }\n\n    .react-datepicker__triangle {\n        transform: translate(20px, 0px) !important;\n    }\n\n"], ["\n    input {\n        ", "\n    }\n\n    .react-datepicker__triangle {\n        transform: translate(20px, 0px) !important;\n    }\n\n"])), base);
var BaseLabelStyle = _default$1.label(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    margin-bottom: 0.5rem;\n    display: block;\n\n    &.required::after {\n        content: ' *';\n        color: red;\n    }\n"], ["\n    margin-bottom: 0.5rem;\n    display: block;\n\n    &.required::after {\n        content: ' *';\n        color: red;\n    }\n"])));
var BaseErrorMessage = _default$1.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    color: red;\n    font-size: 0.9em;\n"], ["\n    color: red;\n    font-size: 0.9em;\n"])));
var BaseTextareaStyle = _default$1.textarea(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    ", "\n"], ["\n    ", "\n"])), base);
var templateObject_1$1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

var FormControlState = function (formId, model) { return recoil.atom({
    key: "".concat(formId, "--").concat(model),
    default: {}
}); };
var EasyFormConsumer = function (_a) {
    var children = _a.children;
    return (React__default["default"].createElement(recoil.RecoilRoot, null, children));
};

var FormController = /** @class */ (function () {
    function FormController() {
    }
    FormController.register = function (formUpdate, id) {
        if (!this.formUpdate)
            this.formUpdate = {};
        this.formUpdate[id] = formUpdate;
    };
    FormController.updateFormState = function (value, name, valid, id) {
        var _this = this;
        if (name == undefined)
            return;
        if (!window.formStateData) {
            window.formStateData = {};
        }
        if (!window.formStateData[id])
            window.formStateData[id] = {};
        var nodeToSet = window.formStateData[id];
        if (name.indexOf('.') > -1) {
            var nameSplit = name.split('.');
            name = nameSplit[nameSplit.length - 1];
            nameSplit.splice(nameSplit.length - 1, 1);
            nameSplit.forEach(function (property) {
                if (!nodeToSet[property])
                    nodeToSet[property] = {};
                nodeToSet = nodeToSet[property];
            });
        }
        nodeToSet[name] = {
            value: value,
            name: name,
            valid: valid
        };
        this.updateQueue.push(id);
        setTimeout(function () {
            _this.updateQueue.splice(_this.updateQueue.indexOf(id), 1);
            if (!_this.updateQueue.find(function (x) { return x === id; }))
                _this.updateForm(id);
        }, 50);
    };
    FormController.updateForm = function (id) {
        if (this.formUpdate[id])
            this.formUpdate[id](window.formStateData[id]);
    };
    FormController.getFormData = function (id) {
        return window.formStateData && window.formStateData[id] ? window.formStateData[id] : null;
    };
    FormController.setState = function (element, state, callback) {
        var _a;
        if (callback === void 0) { callback = null; }
        var formId = element === null || element === void 0 ? void 0 : element.formId;
        var model = (_a = element === null || element === void 0 ? void 0 : element.props) === null || _a === void 0 ? void 0 : _a.model;
        if (!formId || !model) {
            element.setState(state);
            if (callback)
                callback();
            return;
        }
        var formState = cloneDeep__default["default"](this.formState);
        var keys = Object.keys(state);
        if (!formState[formId])
            formState[formId] = {};
        if (!formState[formId][model])
            formState[formId][model] = {};
        var form = formState[formId][model];
        var prevForm = JSON.stringify(form);
        for (var i = 0; i < keys.length; i++) {
            form[keys[i]] = state[keys[i]];
        }
        this.formState = formState;
        if (JSON.stringify(form) !== prevForm)
            element.setState(state);
        if (callback)
            callback();
    };
    FormController.getState = function (element) {
        var _a, _b, _c;
        if (element === null || element === void 0 ? void 0 : element.formId) {
            var state = (_b = (_a = this.formState) === null || _a === void 0 ? void 0 : _a[element === null || element === void 0 ? void 0 : element.formId]) === null || _b === void 0 ? void 0 : _b[(_c = element === null || element === void 0 ? void 0 : element.props) === null || _c === void 0 ? void 0 : _c.model];
            return state ? state : {};
        }
        return element.state;
    };
    FormController.updateQueue = [];
    FormController.formState = {};
    return FormController;
}());

var useFormUpdate = function (formId, model) {
    var updateFormData = function (value, valid) {
        FormController.updateFormState(value, model, valid, formId);
    };
    return updateFormData;
};

// import Moment from 'moment';
// export function formatTime(time) {
//   const duration: any = Moment.duration(time, 'seconds');
//   return `${duration._data.hours}H ${duration._data.minutes}M ${duration._data.seconds}S`;
// }
function createUUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

var Translations = {
    'Required': {
        'fr-fr': 'Obligatoire',
        'hr-hr': 'Potreban',
    },
    'Departs between': {
        'fr-fr': 'Départ entre',
        'hr-hr': 'Odlazi između',
    },
    'Total Price': {
        'fr-fr': 'Prix Total',
        'hr-hr': 'Ukupna Cijena',
    },
    'Total Cost': {
        'fr-fr': 'Coût Total',
        'hr-hr': 'Ukupni Trošak',
    }
};

function i18n(inputText) {
    var locale = document.documentElement.lang;
    if (Translations[inputText] && Translations[inputText][locale.toLowerCase()]) {
        return Translations[inputText][locale.toLowerCase()];
    }
    return inputText;
}

function isNullOrWhitespace(input) {
    if (typeof input === 'undefined' || input == null || input === undefined)
        return true;
    return input.toString().replace(/\s/g, '').length < 1;
}

var FormContext = React.createContext(null);
var FormAttibuteContext = React.createContext({ disabled: false });
var FormWrapper = /** @class */ (function (_super) {
    __extends(FormWrapper, _super);
    function FormWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this.valueChange = function (formData) {
            var data = formData ? formData : FormController.getFormData(_this.props.formId ? _this.props.formId : _this.state.id);
            if (!data)
                return;
            var dataToSend = {};
            var valid = _this.setValues(data, dataToSend);
            _this.setState({ valid: valid });
            if (_this.props.onUpdate)
                _this.props.onUpdate(dataToSend, valid);
        };
        _this.setValues = function (data, dataToSend) {
            var valid = true;
            Object.keys(data).forEach(function (key) {
                if (data[key].hasOwnProperty('value') && data[key].hasOwnProperty('valid')) {
                    dataToSend[key] = data[key].value;
                    if (!data[key].valid) {
                        valid = false;
                    }
                }
                else {
                    dataToSend[key] = {};
                    var subValid = _this.setValues(data[key], dataToSend[key]);
                    if (!subValid)
                        valid = false;
                }
            });
            return valid;
        };
        _this.state = {
            id: _this.props.formId ? _this.props.formId : createUUID(),
            valid: true
        };
        _this.valueChange = _this.valueChange.bind(_this);
        return _this;
    }
    FormWrapper.prototype.componentDidMount = function () {
        FormController.register(this.valueChange, this.props.formId ? this.props.formId : this.state.id);
    };
    FormWrapper.prototype.componentDidUpdate = function () {
        var _this = this;
        if (this.props.formId && this.props.formId !== this.state.id) {
            this.setState({ id: this.props.formId }, function () { return FormController.register(_this.valueChange, _this.state.id); });
        }
    };
    FormWrapper.prototype.render = function () {
        if (!this.props.children)
            return null;
        var formId = this.props.formId ? this.props.formId : this.state.id;
        var element = this.props.renderWrapperAsDiv ? 'div' : 'form';
        var props = { id: formId, ref: this.props.formRef, className: this.props.className };
        var children = this.props.children && this.props.children({ id: formId, valid: this.state.valid });
        return (React__default["default"].createElement(FormContext.Provider, { value: formId },
            React__default["default"].createElement(FormAttibuteContext.Provider, { value: { disabled: this.props.disabled } }, React__default["default"].createElement(element, props, children))));
    };
    return FormWrapper;
}(React.Component));

var DefaultNumericMax$2 = 10000000000000000000;
var EasyTextInput$1 = function (_a) {
    var model = _a.model, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus, inputName = _a.inputName, value = _a.value, required = _a.required, label = _a.label, id = _a.id, min = _a.min, _b = _a.max, max = _b === void 0 ? DefaultNumericMax$2 : _b, disabled = _a.disabled, testingId = _a.testingId, defaultValue = _a.defaultValue, unlink = _a.unlink, alphanumeric = _a.alphanumeric, validateOnLoad = _a.validateOnLoad, placeholder = _a.placeholder, className = _a.className, password = _a.password;
    var context = React.useContext(FormContext);
    var uuid = React.useRef(createUUID());
    var formId = unlink || !context ? null : context;
    var nameToUse = inputName ? inputName : model;
    var _c = recoil.useRecoilState(FormControlState(formId || uuid.current, model || inputName)), componentState = _c[0], setComponentState = _c[1];
    var setComponentData = useFormUpdate(formId, model);
    var inputRef = React.useRef();
    var mounted = React.useRef(false);
    var error = componentState.error, internalValue = componentState.internalValue;
    var valueToUse = isNullOrWhitespace(internalValue) ? '' : internalValue;
    React.useEffect(function () {
        return function () {
            if (mounted.current)
                setComponentData(value, true);
        };
    }, [model]);
    React.useEffect(function () {
        if (model && formId) {
            setComponentData(value, isValid(value) || !required);
        }
        var newValue = value;
        if (defaultValue) {
            newValue = defaultValue;
        }
        setComponentState({ internalValue: newValue, error: error });
        if (validateOnLoad)
            validate(value);
        mounted.current = true;
    }, []);
    React.useEffect(function () {
        if (internalValue != value && mounted.current) {
            setComponentState({ internalValue: value, error: error });
            if (model && formId) {
                var _a = validate(value), valid = _a[0]; _a[1]; _a[2];
                setComponentData(value, valid);
            }
        }
    }, [value]);
    React.useEffect(function () {
        if (mounted.current && !isNullOrWhitespace(internalValue)) {
            validate(internalValue);
        }
    }, [min, max]);
    var isValid = function (value) {
        return !!value;
    };
    var setValue = function (e, blur) {
        if (blur === void 0) { blur = false; }
        var value = e.target.value;
        var _a = validate(value), valid = _a[0], newError = _a[1], focused = _a[2];
        if (model && formId)
            setComponentData(value, valid);
        if (onChange)
            onChange(e, valid);
        setComponentState({ internalValue: blur ? value : e.target.value, error: focused ? error : newError });
    };
    var checkAlphanumeric = function (e) {
        if (!alphanumeric)
            return;
        var regex = new RegExp(/^[a-z0-9]+$/i);
        var passesRegex = regex.test(e.target.value + e.key);
        if (!passesRegex)
            return e.preventDefault();
    };
    var validate = function (value, blur, passthrough) {
        if (blur === void 0) { blur = false; }
        if (passthrough === void 0) { passthrough = false; }
        // Essentially we don't want the page jumping around when the user is typing
        // This checks if our input is focused, if so clear errors until they finish typing
        var focused = false;
        if (document.activeElement === inputRef.current) {
            focused = isNullOrWhitespace(error) && !blur;
        }
        var preventStateSet = passthrough || focused;
        if (!isValid(value) && required) {
            var error_1 = i18n('Required');
            if (!preventStateSet)
                setComponentState({ error: error_1, internalValue: value });
            return [false, error_1, focused];
        }
        else if ((min || min === 0) && value.length < min) {
            var error_2 = i18n('The value entered must be greater than or equal to ') + String(min) + i18n(' characters');
            if (!preventStateSet)
                setComponentState({ error: error_2, internalValue: value });
            return [false, error_2, focused];
        }
        else if ((max || max === 0) && value.length > max) {
            var error_3 = i18n('The value entered must be less than or equal to ') + String(max) + i18n(' characters');
            if (!preventStateSet)
                setComponentState({ error: error_3, internalValue: value });
            return [false, error_3, focused];
        }
        else {
            if (!preventStateSet)
                setComponentState({ error: null, internalValue: value });
            return [true, null, focused];
        }
    };
    return (React__default["default"].createElement("div", { className: className },
        React__default["default"].createElement(FormAttibuteContext.Consumer, null, function (attr) { return (React__default["default"].createElement(React__default["default"].Fragment, null,
            label &&
                React__default["default"].createElement(BaseLabelStyle, { className: required ? 'required' : '', htmlFor: id ? id : nameToUse }, label),
            React__default["default"].createElement(BaseInputStyle, { type: password ? 'password' : 'text', className: error ? 'error' : '', name: nameToUse, id: id ? id : nameToUse, value: valueToUse, required: required, disabled: disabled || attr.disabled, "data-e2e-id": testingId ? testingId : (id ? id : nameToUse), ref: inputRef, autoComplete: 'off', onBlur: function (e) { setValue(e, true); if (onBlur)
                    onBlur(e); }, onFocus: function (e) { return onFocus ? onFocus(e) : null; }, placeholder: placeholder, onKeyDown: function (e) { return checkAlphanumeric(e); }, onChange: function (e) { return setValue(e); } }),
            error &&
                React__default["default"].createElement(BaseErrorMessage, { className: 'error-message' }, error))); })));
};

var dist = {};

var reactOnclickoutside_cjs = {};

Object.defineProperty(reactOnclickoutside_cjs,'__esModule',{value:true});var react=React__default["default"],reactDom=require$$1__default["default"];function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}/**
 * Check whether some DOM node is our Component's node.
 */
function isNodeFound(current, componentNode, ignoreClass) {
  if (current === componentNode) {
    return true;
  } // SVG <use/> elements do not technically reside in the rendered DOM, so
  // they do not have classList directly, but they offer a link to their
  // corresponding element, which can have classList. This extra check is for
  // that case.
  // See: http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGUseElement
  // Discussion: https://github.com/Pomax/react-onclickoutside/pull/17


  if (current.correspondingElement) {
    return current.correspondingElement.classList.contains(ignoreClass);
  }

  return current.classList.contains(ignoreClass);
}
/**
 * Try to find our node in a hierarchy of nodes, returning the document
 * node as highest node if our node is not found in the path up.
 */

function findHighest(current, componentNode, ignoreClass) {
  if (current === componentNode) {
    return true;
  } // If source=local then this event came from 'somewhere'
  // inside and should be ignored. We could handle this with
  // a layered approach, too, but that requires going back to
  // thinking in terms of Dom node nesting, running counter
  // to React's 'you shouldn't care about the DOM' philosophy.
  // Also cover shadowRoot node by checking current.host


  while (current.parentNode || current.host) {
    // Only check normal node without shadowRoot
    if (current.parentNode && isNodeFound(current, componentNode, ignoreClass)) {
      return true;
    }

    current = current.parentNode || current.host;
  }

  return current;
}
/**
 * Check if the browser scrollbar was clicked
 */

function clickedScrollbar(evt) {
  return document.documentElement.clientWidth <= evt.clientX || document.documentElement.clientHeight <= evt.clientY;
}// ideally will get replaced with external dep
// when rafrex/detect-passive-events#4 and rafrex/detect-passive-events#5 get merged in
var testPassiveEventSupport = function testPassiveEventSupport() {
  if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') {
    return;
  }

  var passive = false;
  var options = Object.defineProperty({}, 'passive', {
    get: function get() {
      passive = true;
    }
  });

  var noop = function noop() {};

  window.addEventListener('testPassiveEventSupport', noop, options);
  window.removeEventListener('testPassiveEventSupport', noop, options);
  return passive;
};function autoInc(seed) {
  if (seed === void 0) {
    seed = 0;
  }

  return function () {
    return ++seed;
  };
}

var uid = autoInc();var passiveEventSupport;
var handlersMap = {};
var enabledInstances = {};
var touchEvents = ['touchstart', 'touchmove'];
var IGNORE_CLASS_NAME = 'ignore-react-onclickoutside';
/**
 * Options for addEventHandler and removeEventHandler
 */

function getEventHandlerOptions(instance, eventName) {
  var handlerOptions = null;
  var isTouchEvent = touchEvents.indexOf(eventName) !== -1;

  if (isTouchEvent && passiveEventSupport) {
    handlerOptions = {
      passive: !instance.props.preventDefault
    };
  }

  return handlerOptions;
}
/**
 * This function generates the HOC function that you'll use
 * in order to impart onOutsideClick listening to an
 * arbitrary component. It gets called at the end of the
 * bootstrapping code to yield an instance of the
 * onClickOutsideHOC function defined inside setupHOC().
 */


function onClickOutsideHOC(WrappedComponent, config) {
  var _class, _temp;

  var componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  return _temp = _class = /*#__PURE__*/function (_Component) {
    _inheritsLoose(onClickOutside, _Component);

    function onClickOutside(props) {
      var _this;

      _this = _Component.call(this, props) || this;

      _this.__outsideClickHandler = function (event) {
        if (typeof _this.__clickOutsideHandlerProp === 'function') {
          _this.__clickOutsideHandlerProp(event);

          return;
        }

        var instance = _this.getInstance();

        if (typeof instance.props.handleClickOutside === 'function') {
          instance.props.handleClickOutside(event);
          return;
        }

        if (typeof instance.handleClickOutside === 'function') {
          instance.handleClickOutside(event);
          return;
        }

        throw new Error("WrappedComponent: " + componentName + " lacks a handleClickOutside(event) function for processing outside click events.");
      };

      _this.__getComponentNode = function () {
        var instance = _this.getInstance();

        if (config && typeof config.setClickOutsideRef === 'function') {
          return config.setClickOutsideRef()(instance);
        }

        if (typeof instance.setClickOutsideRef === 'function') {
          return instance.setClickOutsideRef();
        }

        return reactDom.findDOMNode(instance);
      };

      _this.enableOnClickOutside = function () {
        if (typeof document === 'undefined' || enabledInstances[_this._uid]) {
          return;
        }

        if (typeof passiveEventSupport === 'undefined') {
          passiveEventSupport = testPassiveEventSupport();
        }

        enabledInstances[_this._uid] = true;
        var events = _this.props.eventTypes;

        if (!events.forEach) {
          events = [events];
        }

        handlersMap[_this._uid] = function (event) {
          if (_this.componentNode === null) return;

          if (_this.props.preventDefault) {
            event.preventDefault();
          }

          if (_this.props.stopPropagation) {
            event.stopPropagation();
          }

          if (_this.props.excludeScrollbar && clickedScrollbar(event)) return;
          var current = event.composed && event.composedPath && event.composedPath().shift() || event.target;

          if (findHighest(current, _this.componentNode, _this.props.outsideClickIgnoreClass) !== document) {
            return;
          }

          _this.__outsideClickHandler(event);
        };

        events.forEach(function (eventName) {
          document.addEventListener(eventName, handlersMap[_this._uid], getEventHandlerOptions(_assertThisInitialized(_this), eventName));
        });
      };

      _this.disableOnClickOutside = function () {
        delete enabledInstances[_this._uid];
        var fn = handlersMap[_this._uid];

        if (fn && typeof document !== 'undefined') {
          var events = _this.props.eventTypes;

          if (!events.forEach) {
            events = [events];
          }

          events.forEach(function (eventName) {
            return document.removeEventListener(eventName, fn, getEventHandlerOptions(_assertThisInitialized(_this), eventName));
          });
          delete handlersMap[_this._uid];
        }
      };

      _this.getRef = function (ref) {
        return _this.instanceRef = ref;
      };

      _this._uid = uid();
      return _this;
    }
    /**
     * Access the WrappedComponent's instance.
     */


    var _proto = onClickOutside.prototype;

    _proto.getInstance = function getInstance() {
      if (WrappedComponent.prototype && !WrappedComponent.prototype.isReactComponent) {
        return this;
      }

      var ref = this.instanceRef;
      return ref.getInstance ? ref.getInstance() : ref;
    };

    /**
     * Add click listeners to the current document,
     * linked to this component's state.
     */
    _proto.componentDidMount = function componentDidMount() {
      // If we are in an environment without a DOM such
      // as shallow rendering or snapshots then we exit
      // early to prevent any unhandled errors being thrown.
      if (typeof document === 'undefined' || !document.createElement) {
        return;
      }

      var instance = this.getInstance();

      if (config && typeof config.handleClickOutside === 'function') {
        this.__clickOutsideHandlerProp = config.handleClickOutside(instance);

        if (typeof this.__clickOutsideHandlerProp !== 'function') {
          throw new Error("WrappedComponent: " + componentName + " lacks a function for processing outside click events specified by the handleClickOutside config option.");
        }
      }

      this.componentNode = this.__getComponentNode(); // return early so we dont initiate onClickOutside

      if (this.props.disableOnClickOutside) return;
      this.enableOnClickOutside();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      this.componentNode = this.__getComponentNode();
    }
    /**
     * Remove all document's event listeners for this component
     */
    ;

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.disableOnClickOutside();
    }
    /**
     * Can be called to explicitly enable event listening
     * for clicks and touches outside of this element.
     */
    ;

    /**
     * Pass-through render
     */
    _proto.render = function render() {
      // eslint-disable-next-line no-unused-vars
      var _this$props = this.props;
          _this$props.excludeScrollbar;
          var props = _objectWithoutPropertiesLoose(_this$props, ["excludeScrollbar"]);

      if (WrappedComponent.prototype && WrappedComponent.prototype.isReactComponent) {
        props.ref = this.getRef;
      } else {
        props.wrappedRef = this.getRef;
      }

      props.disableOnClickOutside = this.disableOnClickOutside;
      props.enableOnClickOutside = this.enableOnClickOutside;
      return react.createElement(WrappedComponent, props);
    };

    return onClickOutside;
  }(react.Component), _class.displayName = "OnClickOutside(" + componentName + ")", _class.defaultProps = {
    eventTypes: ['mousedown', 'touchstart'],
    excludeScrollbar: config && config.excludeScrollbar || false,
    outsideClickIgnoreClass: IGNORE_CLASS_NAME,
    preventDefault: false,
    stopPropagation: false
  }, _class.getClass = function () {
    return WrappedComponent.getClass ? WrappedComponent.getClass() : WrappedComponent;
  }, _temp;
}reactOnclickoutside_cjs.IGNORE_CLASS_NAME=IGNORE_CLASS_NAME;reactOnclickoutside_cjs.default=onClickOutsideHOC;

var _default;
Object.defineProperty(dist,"__esModule",{value:!0});var e=React__default["default"];var t=require$$2__default["default"],r=require$$3__default$1["default"],a=require$$4__default["default"],n=require$$5__default$1["default"],o=require$$6__default["default"],s=require$$7__default$1["default"],i=require$$8__default["default"],p=require$$9__default["default"],l=require$$10__default["default"],c=require$$11__default["default"];var d=require$$14__default["default"],u=require$$15__default["default"],f=require$$16__default["default"],h=require$$17__default["default"],m=require$$18__default["default"],y=require$$19__default["default"],v=require$$20__default["default"],D=require$$21__default["default"],w=require$$22__default["default"],g=require$$23__default["default"],k=require$$24__default["default"],b=require$$25__default["default"],C=require$$26__default["default"],S=require$$27__default["default"],_=require$$28__default["default"],M=require$$29__default["default"],P=require$$30__default["default"],E=require$$31__default["default"],N=require$$32__default["default"],x=require$$33__default["default"],Y=require$$34__default["default"],O=require$$35__default["default"],I=require$$36__default["default"],T=require$$37__default["default"];var L=require$$39__default["default"],R=require$$40__default["default"],F=require$$41__default["default"],A=require$$42__default["default"],q=require$$43__default["default"],B=require$$44__default["default"],K=require$$45__default["default"];var W=require$$48__default["default"],j=require$$49__default["default"],H=require$$50__default["default"],Q=require$$51__default["default"],V=require$$52__default["default"],U=require$$53__default["default"],$=require$$54__default["default"],z=require$$55__default["default"],G=require$$56__default["default"],J=require$$57__default["default"],X=require$$58__default["default"],Z=reactOnclickoutside_cjs,ee=require$$1__default["default"],te=require$$61__default["default"];function re(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var ae=re(e),ne=re(t),oe=re(r),se=re(a),ie=re(n),pe=re(o),le=re(s),ce=re(i),de=re(p),ue=re(l),fe=re(c),he=re(d),me=re(u),ye=re(f),ve=re(h),De=re(m),we=re(y),ge=re(v),ke=re(D),be=re(w),Ce=re(g),Se=re(k),_e=re(b),Me=re(C),Pe=re(S),Ee=re(_),Ne=re(M),xe=re(P),Ye=re(E),Oe=re(N),Ie=re(x),Te=re(Y),Le=re(O),Re=re(I),Fe=re(T),Ae=re(L),qe=re(R),Be=re(F),Ke=re(A),We=re(q),je=re(B),He=re(K),Qe=re(W),Ve=re(j),Ue=re(H),$e=re(Q),ze=re(V),Ge=re(U),Je=re($),Xe=re(z),Ze=re(G),et=re(J),tt=re(X),rt=re(Z),at=re(ee);function nt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a);}return r}function ot(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?nt(Object(r),!0).forEach((function(t){ct(e,t,r[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):nt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t));}));}return e}function st(e){return (st="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function it(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function pt(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a);}}function lt(e,t,r){return t&&pt(e.prototype,t),r&&pt(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function ct(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function dt(){return (dt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);}return e}).apply(this,arguments)}function ut(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&ht(e,t);}function ft(e){return (ft=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ht(e,t){return (ht=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function mt(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function yt(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return mt(e)}function vt(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return !1;if(Reflect.construct.sham)return !1;if("function"==typeof Proxy)return !0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return !1}}();return function(){var r,a=ft(e);if(t){var n=ft(this).constructor;r=Reflect.construct(a,arguments,n);}else r=a.apply(this,arguments);return yt(this,r)}}function Dt(e){return function(e){if(Array.isArray(e))return wt(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return wt(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return wt(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function wt(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function gt(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function kt(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var bt={p:kt,P:function(e,t){var r,a=e.match(/(P+)(p+)?/)||[],n=a[1],o=a[2];if(!o)return gt(e,t);switch(n){case"P":r=t.dateTime({width:"short"});break;case"PP":r=t.dateTime({width:"medium"});break;case"PPP":r=t.dateTime({width:"long"});break;case"PPPP":default:r=t.dateTime({width:"full"});}return r.replace("{{date}}",gt(n,t)).replace("{{time}}",kt(o,t))}},Ct=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;function St(e){var t=e?"string"==typeof e||e instanceof String?tt.default(e):Ze.default(e):new Date;return Mt(t)?t:null}function _t(e,t,r,a,n){var o=null,s=Ht(r)||Ht(jt()),i=!0;return Array.isArray(t)?(t.forEach((function(t){var p=et.default(e,t,new Date,{locale:s});a&&(i=Mt(p,n)&&e===Pt(p,t,r)),Mt(p,n)&&i&&(o=p);})),o):(o=et.default(e,t,new Date,{locale:s}),a?i=Mt(o)&&e===Pt(o,t,r):Mt(o)||(t=t.match(Ct).map((function(e){var t=e[0];return "p"===t||"P"===t?s?(0, bt[t])(e,s.formatLong):t:e})).join(""),e.length>0&&(o=et.default(e,t.slice(0,e.length),new Date)),Mt(o)||(o=new Date(e))),Mt(o)&&i?o:null)}function Mt(e,t){return t=t||new Date("1/1/1000"),se.default(e)&&!Je.default(e,t)}function Pt(e,t,r){if("en"===r)return ie.default(e,t,{awareOfUnicodeTokens:!0});var a=Ht(r);return r&&!a&&console.warn('A locale object was not found for the provided string ["'.concat(r,'"].')),!a&&jt()&&Ht(jt())&&(a=Ht(jt())),ie.default(e,t,{locale:a||null,awareOfUnicodeTokens:!0})}function Et(e,t){var r=t.dateFormat,a=t.locale;return e&&Pt(e,Array.isArray(r)?r[0]:r,a)||""}function Nt(e,t){var r=t.hour,a=void 0===r?0:r,n=t.minute,o=void 0===n?0:n,s=t.second,i=void 0===s?0:s;return xe.default(Ne.default(Ee.default(e,i),o),a)}function xt(e,t){var r=t&&Ht(t)||jt()&&Ht(jt());return Ce.default(e,r?{locale:r}:null)}function Yt(e,t){return Pt(e,"ddd",t)}function Ot(e){return qe.default(e)}function It(e,t,r){var a=Ht(t||jt());return Be.default(e,{locale:a,weekStartsOn:r})}function Tt(e){return Ke.default(e)}function Lt(e){return je.default(e)}function Rt(e){return We.default(e)}function Ft(e,t){return e&&t?$e.default(e,t):!e&&!t}function At(e,t){return e&&t?Ue.default(e,t):!e&&!t}function qt(e,t){return e&&t?ze.default(e,t):!e&&!t}function Bt(e,t){return e&&t?Ve.default(e,t):!e&&!t}function Kt(e,t){return e&&t?Qe.default(e,t):!e&&!t}function Wt(e,t,r){var a,n=qe.default(t),o=He.default(r);try{a=Xe.default(e,{start:n,end:o});}catch(e){a=!1;}return a}function jt(){return ("undefined"!=typeof window?window:globalThis).__localeId__}function Ht(e){if("string"==typeof e){var t="undefined"!=typeof window?window:globalThis;return t.__localeData__?t.__localeData__[e]:null}return e}function Qt(e,t){return Pt(Ye.default(St(),e),"LLLL",t)}function Vt(e,t){return Pt(Ye.default(St(),e),"LLL",t)}function Ut(e,t){return Pt(Oe.default(St(),e),"QQQ",t)}function $t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,a=t.maxDate,n=t.excludeDates,o=t.excludeDateIntervals,s=t.includeDates,i=t.includeDateIntervals,p=t.filterDate;return tr(e,{minDate:r,maxDate:a})||n&&n.some((function(t){return Bt(e,t)}))||o&&o.some((function(t){var r=t.start,a=t.end;return Xe.default(e,{start:r,end:a})}))||s&&!s.some((function(t){return Bt(e,t)}))||i&&!i.some((function(t){var r=t.start,a=t.end;return Xe.default(e,{start:r,end:a})}))||p&&!p(St(e))||!1}function zt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.excludeDates,a=t.excludeDateIntervals;return a&&a.length>0?a.some((function(t){var r=t.start,a=t.end;return Xe.default(e,{start:r,end:a})})):r&&r.some((function(t){return Bt(e,t)}))||!1}function Gt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,a=t.maxDate,n=t.excludeDates,o=t.includeDates,s=t.filterDate;return tr(e,{minDate:r,maxDate:a})||n&&n.some((function(t){return At(e,t)}))||o&&!o.some((function(t){return At(e,t)}))||s&&!s(St(e))||!1}function Jt(e,t,r,a){var n=Me.default(e),o=Se.default(e),s=Me.default(t),i=Se.default(t),p=Me.default(a);return n===s&&n===p?o<=r&&r<=i:n<s?p===n&&o<=r||p===s&&i>=r||p<s&&p>n:void 0}function Xt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,a=t.maxDate,n=t.excludeDates,o=t.includeDates,s=t.filterDate;return tr(e,{minDate:r,maxDate:a})||n&&n.some((function(t){return qt(e,t)}))||o&&!o.some((function(t){return qt(e,t)}))||s&&!s(St(e))||!1}function Zt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,a=t.maxDate,n=new Date(e,0,1);return tr(n,{minDate:r,maxDate:a})||!1}function er(e,t,r,a){var n=Me.default(e),o=_e.default(e),s=Me.default(t),i=_e.default(t),p=Me.default(a);return n===s&&n===p?o<=r&&r<=i:n<s?p===n&&o<=r||p===s&&i>=r||p<s&&p>n:void 0}function tr(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,a=t.maxDate;return r&&Re.default(e,r)<0||a&&Re.default(e,a)>0}function rr(e,t){return t.some((function(t){return ge.default(t)===ge.default(e)&&we.default(t)===we.default(e)}))}function ar(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.excludeTimes,a=t.includeTimes,n=t.filterTime;return r&&rr(e,r)||a&&!rr(e,a)||n&&!n(e)||!1}function nr(e,t){var r=t.minTime,a=t.maxTime;if(!r||!a)throw new Error("Both minTime and maxTime props required");var n,o=St(),s=xe.default(Ne.default(o,we.default(e)),ge.default(e)),i=xe.default(Ne.default(o,we.default(r)),ge.default(r)),p=xe.default(Ne.default(o,we.default(a)),ge.default(a));try{n=!Xe.default(s,{start:i,end:p});}catch(e){n=!1;}return n}function or(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,a=t.includeDates,n=ye.default(e,1);return r&&Fe.default(r,n)>0||a&&a.every((function(e){return Fe.default(e,n)>0}))||!1}function sr(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.maxDate,a=t.includeDates,n=ue.default(e,1);return r&&Fe.default(n,r)>0||a&&a.every((function(e){return Fe.default(n,e)>0}))||!1}function ir(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,a=t.includeDates,n=ve.default(e,1);return r&&Ae.default(r,n)>0||a&&a.every((function(e){return Ae.default(e,n)>0}))||!1}function pr(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.maxDate,a=t.includeDates,n=fe.default(e,1);return r&&Ae.default(n,r)>0||a&&a.every((function(e){return Ae.default(n,e)>0}))||!1}function lr(e){var t=e.minDate,r=e.includeDates;if(r&&t){var a=r.filter((function(e){return Re.default(e,t)>=0}));return Te.default(a)}return r?Te.default(r):t}function cr(e){var t=e.maxDate,r=e.includeDates;if(r&&t){var a=r.filter((function(e){return Re.default(e,t)<=0}));return Le.default(a)}return r?Le.default(r):t}function dr(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"react-datepicker__day--highlighted",r=new Map,a=0,n=e.length;a<n;a++){var o=e[a];if(oe.default(o)){var s=Pt(o,"MM.dd.yyyy"),i=r.get(s)||[];i.includes(t)||(i.push(t),r.set(s,i));}else if("object"===st(o)){var p=Object.keys(o),l=p[0],c=o[p[0]];if("string"==typeof l&&c.constructor===Array)for(var d=0,u=c.length;d<u;d++){var f=Pt(c[d],"MM.dd.yyyy"),h=r.get(f)||[];h.includes(l)||(h.push(l),r.set(f,h));}}}return r}function ur(e,t,r,a,n){for(var o=n.length,s=[],i=0;i<o;i++){var p=pe.default(le.default(e,ge.default(n[i])),we.default(n[i])),l=pe.default(e,(r+1)*a);Ge.default(p,t)&&Je.default(p,l)&&s.push(n[i]);}return s}function fr(e){return e<10?"0".concat(e):"".concat(e)}function hr(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12,r=Math.ceil(Me.default(e)/t)*t,a=r-(t-1);return {startPeriod:a,endPeriod:r}}function mr(e,t,r,a){for(var n=[],o=0;o<2*t+1;o++){var s=e+t-o,i=!0;r&&(i=Me.default(r)<=s),a&&i&&(i=Me.default(a)>=s),i&&n.push(s);}return n}var yr=function(t){ut(a,ae["default"].Component);var r=vt(a);function a(t){var n;it(this,a),ct(mt(n=r.call(this,t)),"renderOptions",(function(){var e=n.props.year,t=n.state.yearsList.map((function(t){return ae.default.createElement("div",{className:e===t?"react-datepicker__year-option react-datepicker__year-option--selected_year":"react-datepicker__year-option",key:t,onClick:n.onChange.bind(mt(n),t),"aria-selected":e===t?"true":void 0},e===t?ae.default.createElement("span",{className:"react-datepicker__year-option--selected"},"✓"):"",t)})),r=n.props.minDate?Me.default(n.props.minDate):null,a=n.props.maxDate?Me.default(n.props.maxDate):null;return a&&n.state.yearsList.find((function(e){return e===a}))||t.unshift(ae.default.createElement("div",{className:"react-datepicker__year-option",key:"upcoming",onClick:n.incrementYears},ae.default.createElement("a",{className:"react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming"}))),r&&n.state.yearsList.find((function(e){return e===r}))||t.push(ae.default.createElement("div",{className:"react-datepicker__year-option",key:"previous",onClick:n.decrementYears},ae.default.createElement("a",{className:"react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous"}))),t})),ct(mt(n),"onChange",(function(e){n.props.onChange(e);})),ct(mt(n),"handleClickOutside",(function(){n.props.onCancel();})),ct(mt(n),"shiftYears",(function(e){var t=n.state.yearsList.map((function(t){return t+e}));n.setState({yearsList:t});})),ct(mt(n),"incrementYears",(function(){return n.shiftYears(1)})),ct(mt(n),"decrementYears",(function(){return n.shiftYears(-1)}));var o=t.yearDropdownItemNumber,s=t.scrollableYearDropdown,i=o||(s?10:5);return n.state={yearsList:mr(n.props.year,i,n.props.minDate,n.props.maxDate)},n.dropdownRef=e.createRef(),n}return lt(a,[{key:"componentDidMount",value:function(){var e=this.dropdownRef.current;e&&(e.scrollTop=e.scrollHeight/2-e.clientHeight/2);}},{key:"render",value:function(){var e=ne.default({"react-datepicker__year-dropdown":!0,"react-datepicker__year-dropdown--scrollable":this.props.scrollableYearDropdown});return ae.default.createElement("div",{className:e,ref:this.dropdownRef},this.renderOptions())}}]),a}(),vr=rt.default(yr),Dr=function(e){ut(r,ae["default"].Component);var t=vt(r);function r(){var e;it(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return ct(mt(e=t.call.apply(t,[this].concat(n))),"state",{dropdownVisible:!1}),ct(mt(e),"renderSelectOptions",(function(){for(var t=e.props.minDate?Me.default(e.props.minDate):1900,r=e.props.maxDate?Me.default(e.props.maxDate):2100,a=[],n=t;n<=r;n++)a.push(ae.default.createElement("option",{key:n,value:n},n));return a})),ct(mt(e),"onSelectChange",(function(t){e.onChange(t.target.value);})),ct(mt(e),"renderSelectMode",(function(){return ae.default.createElement("select",{value:e.props.year,className:"react-datepicker__year-select",onChange:e.onSelectChange},e.renderSelectOptions())})),ct(mt(e),"renderReadView",(function(t){return ae.default.createElement("div",{key:"read",style:{visibility:t?"visible":"hidden"},className:"react-datepicker__year-read-view",onClick:function(t){return e.toggleDropdown(t)}},ae.default.createElement("span",{className:"react-datepicker__year-read-view--down-arrow"}),ae.default.createElement("span",{className:"react-datepicker__year-read-view--selected-year"},e.props.year))})),ct(mt(e),"renderDropdown",(function(){return ae.default.createElement(vr,{key:"dropdown",year:e.props.year,onChange:e.onChange,onCancel:e.toggleDropdown,minDate:e.props.minDate,maxDate:e.props.maxDate,scrollableYearDropdown:e.props.scrollableYearDropdown,yearDropdownItemNumber:e.props.yearDropdownItemNumber})})),ct(mt(e),"renderScrollMode",(function(){var t=e.state.dropdownVisible,r=[e.renderReadView(!t)];return t&&r.unshift(e.renderDropdown()),r})),ct(mt(e),"onChange",(function(t){e.toggleDropdown(),t!==e.props.year&&e.props.onChange(t);})),ct(mt(e),"toggleDropdown",(function(t){e.setState({dropdownVisible:!e.state.dropdownVisible},(function(){e.props.adjustDateOnChange&&e.handleYearChange(e.props.date,t);}));})),ct(mt(e),"handleYearChange",(function(t,r){e.onSelect(t,r),e.setOpen();})),ct(mt(e),"onSelect",(function(t,r){e.props.onSelect&&e.props.onSelect(t,r);})),ct(mt(e),"setOpen",(function(){e.props.setOpen&&e.props.setOpen(!0);})),e}return lt(r,[{key:"render",value:function(){var e;switch(this.props.dropdownMode){case"scroll":e=this.renderScrollMode();break;case"select":e=this.renderSelectMode();}return ae.default.createElement("div",{className:"react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(this.props.dropdownMode)},e)}}]),r}(),wr=function(e){ut(r,ae["default"].Component);var t=vt(r);function r(){var e;it(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return ct(mt(e=t.call.apply(t,[this].concat(n))),"isSelectedMonth",(function(t){return e.props.month===t})),ct(mt(e),"renderOptions",(function(){return e.props.monthNames.map((function(t,r){return ae.default.createElement("div",{className:e.isSelectedMonth(r)?"react-datepicker__month-option react-datepicker__month-option--selected_month":"react-datepicker__month-option",key:t,onClick:e.onChange.bind(mt(e),r),"aria-selected":e.isSelectedMonth(r)?"true":void 0},e.isSelectedMonth(r)?ae.default.createElement("span",{className:"react-datepicker__month-option--selected"},"✓"):"",t)}))})),ct(mt(e),"onChange",(function(t){return e.props.onChange(t)})),ct(mt(e),"handleClickOutside",(function(){return e.props.onCancel()})),e}return lt(r,[{key:"render",value:function(){return ae.default.createElement("div",{className:"react-datepicker__month-dropdown"},this.renderOptions())}}]),r}(),gr=rt.default(wr),kr=function(e){ut(r,ae["default"].Component);var t=vt(r);function r(){var e;it(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return ct(mt(e=t.call.apply(t,[this].concat(n))),"state",{dropdownVisible:!1}),ct(mt(e),"renderSelectOptions",(function(e){return e.map((function(e,t){return ae.default.createElement("option",{key:t,value:t},e)}))})),ct(mt(e),"renderSelectMode",(function(t){return ae.default.createElement("select",{value:e.props.month,className:"react-datepicker__month-select",onChange:function(t){return e.onChange(t.target.value)}},e.renderSelectOptions(t))})),ct(mt(e),"renderReadView",(function(t,r){return ae.default.createElement("div",{key:"read",style:{visibility:t?"visible":"hidden"},className:"react-datepicker__month-read-view",onClick:e.toggleDropdown},ae.default.createElement("span",{className:"react-datepicker__month-read-view--down-arrow"}),ae.default.createElement("span",{className:"react-datepicker__month-read-view--selected-month"},r[e.props.month]))})),ct(mt(e),"renderDropdown",(function(t){return ae.default.createElement(gr,{key:"dropdown",month:e.props.month,monthNames:t,onChange:e.onChange,onCancel:e.toggleDropdown})})),ct(mt(e),"renderScrollMode",(function(t){var r=e.state.dropdownVisible,a=[e.renderReadView(!r,t)];return r&&a.unshift(e.renderDropdown(t)),a})),ct(mt(e),"onChange",(function(t){e.toggleDropdown(),t!==e.props.month&&e.props.onChange(t);})),ct(mt(e),"toggleDropdown",(function(){return e.setState({dropdownVisible:!e.state.dropdownVisible})})),e}return lt(r,[{key:"render",value:function(){var e,t=this,r=[0,1,2,3,4,5,6,7,8,9,10,11].map(this.props.useShortMonthInDropdown?function(e){return Vt(e,t.props.locale)}:function(e){return Qt(e,t.props.locale)});switch(this.props.dropdownMode){case"scroll":e=this.renderScrollMode(r);break;case"select":e=this.renderSelectMode(r);}return ae.default.createElement("div",{className:"react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(this.props.dropdownMode)},e)}}]),r}();function br(e,t){for(var r=[],a=Tt(e),n=Tt(t);!Ge.default(a,n);)r.push(St(a)),a=ue.default(a,1);return r}var Cr=function(e){ut(r,ae["default"].Component);var t=vt(r);function r(e){var a;return it(this,r),ct(mt(a=t.call(this,e)),"renderOptions",(function(){return a.state.monthYearsList.map((function(e){var t=Pe.default(e),r=Ft(a.props.date,e)&&At(a.props.date,e);return ae.default.createElement("div",{className:r?"react-datepicker__month-year-option--selected_month-year":"react-datepicker__month-year-option",key:t,onClick:a.onChange.bind(mt(a),t),"aria-selected":r?"true":void 0},r?ae.default.createElement("span",{className:"react-datepicker__month-year-option--selected"},"✓"):"",Pt(e,a.props.dateFormat,a.props.locale))}))})),ct(mt(a),"onChange",(function(e){return a.props.onChange(e)})),ct(mt(a),"handleClickOutside",(function(){a.props.onCancel();})),a.state={monthYearsList:br(a.props.minDate,a.props.maxDate)},a}return lt(r,[{key:"render",value:function(){var e=ne.default({"react-datepicker__month-year-dropdown":!0,"react-datepicker__month-year-dropdown--scrollable":this.props.scrollableMonthYearDropdown});return ae.default.createElement("div",{className:e},this.renderOptions())}}]),r}(),Sr=rt.default(Cr),_r=function(e){ut(r,ae["default"].Component);var t=vt(r);function r(){var e;it(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return ct(mt(e=t.call.apply(t,[this].concat(n))),"state",{dropdownVisible:!1}),ct(mt(e),"renderSelectOptions",(function(){for(var t=Tt(e.props.minDate),r=Tt(e.props.maxDate),a=[];!Ge.default(t,r);){var n=Pe.default(t);a.push(ae.default.createElement("option",{key:n,value:n},Pt(t,e.props.dateFormat,e.props.locale))),t=ue.default(t,1);}return a})),ct(mt(e),"onSelectChange",(function(t){e.onChange(t.target.value);})),ct(mt(e),"renderSelectMode",(function(){return ae.default.createElement("select",{value:Pe.default(Tt(e.props.date)),className:"react-datepicker__month-year-select",onChange:e.onSelectChange},e.renderSelectOptions())})),ct(mt(e),"renderReadView",(function(t){var r=Pt(e.props.date,e.props.dateFormat,e.props.locale);return ae.default.createElement("div",{key:"read",style:{visibility:t?"visible":"hidden"},className:"react-datepicker__month-year-read-view",onClick:function(t){return e.toggleDropdown(t)}},ae.default.createElement("span",{className:"react-datepicker__month-year-read-view--down-arrow"}),ae.default.createElement("span",{className:"react-datepicker__month-year-read-view--selected-month-year"},r))})),ct(mt(e),"renderDropdown",(function(){return ae.default.createElement(Sr,{key:"dropdown",date:e.props.date,dateFormat:e.props.dateFormat,onChange:e.onChange,onCancel:e.toggleDropdown,minDate:e.props.minDate,maxDate:e.props.maxDate,scrollableMonthYearDropdown:e.props.scrollableMonthYearDropdown,locale:e.props.locale})})),ct(mt(e),"renderScrollMode",(function(){var t=e.state.dropdownVisible,r=[e.renderReadView(!t)];return t&&r.unshift(e.renderDropdown()),r})),ct(mt(e),"onChange",(function(t){e.toggleDropdown();var r=St(parseInt(t));Ft(e.props.date,r)&&At(e.props.date,r)||e.props.onChange(r);})),ct(mt(e),"toggleDropdown",(function(){return e.setState({dropdownVisible:!e.state.dropdownVisible})})),e}return lt(r,[{key:"render",value:function(){var e;switch(this.props.dropdownMode){case"scroll":e=this.renderScrollMode();break;case"select":e=this.renderSelectMode();}return ae.default.createElement("div",{className:"react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(this.props.dropdownMode)},e)}}]),r}(),Mr=function(e){ut(r,ae["default"].Component);var t=vt(r);function r(){var e;it(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return ct(mt(e=t.call.apply(t,[this].concat(n))),"dayEl",ae.default.createRef()),ct(mt(e),"handleClick",(function(t){!e.isDisabled()&&e.props.onClick&&e.props.onClick(t);})),ct(mt(e),"handleMouseEnter",(function(t){!e.isDisabled()&&e.props.onMouseEnter&&e.props.onMouseEnter(t);})),ct(mt(e),"handleOnKeyDown",(function(t){" "===t.key&&(t.preventDefault(),t.key="Enter"),e.props.handleOnKeyDown(t);})),ct(mt(e),"isSameDay",(function(t){return Bt(e.props.day,t)})),ct(mt(e),"isKeyboardSelected",(function(){return !e.props.disabledKeyboardNavigation&&!e.isSameDay(e.props.selected)&&e.isSameDay(e.props.preSelection)})),ct(mt(e),"isDisabled",(function(){return $t(e.props.day,e.props)})),ct(mt(e),"isExcluded",(function(){return zt(e.props.day,e.props)})),ct(mt(e),"getHighLightedClass",(function(t){var r=e.props,a=r.day,n=r.highlightDates;if(!n)return !1;var o=Pt(a,"MM.dd.yyyy");return n.get(o)})),ct(mt(e),"isInRange",(function(){var t=e.props,r=t.day,a=t.startDate,n=t.endDate;return !(!a||!n)&&Wt(r,a,n)})),ct(mt(e),"isInSelectingRange",(function(){var t,r=e.props,a=r.day,n=r.selectsStart,o=r.selectsEnd,s=r.selectsRange,i=r.selectsDisabledDaysInRange,p=r.startDate,l=r.endDate,c=null!==(t=e.props.selectingDate)&&void 0!==t?t:e.props.preSelection;return !(!(n||o||s)||!c||!i&&e.isDisabled())&&(n&&l&&(Je.default(c,l)||Kt(c,l))?Wt(a,c,l):(o&&p&&(Ge.default(c,p)||Kt(c,p))||!(!s||!p||l||!Ge.default(c,p)&&!Kt(c,p)))&&Wt(a,p,c))})),ct(mt(e),"isSelectingRangeStart",(function(){var t;if(!e.isInSelectingRange())return !1;var r=e.props,a=r.day,n=r.startDate,o=r.selectsStart,s=null!==(t=e.props.selectingDate)&&void 0!==t?t:e.props.preSelection;return Bt(a,o?s:n)})),ct(mt(e),"isSelectingRangeEnd",(function(){var t;if(!e.isInSelectingRange())return !1;var r=e.props,a=r.day,n=r.endDate,o=r.selectsEnd,s=null!==(t=e.props.selectingDate)&&void 0!==t?t:e.props.preSelection;return Bt(a,o?s:n)})),ct(mt(e),"isRangeStart",(function(){var t=e.props,r=t.day,a=t.startDate,n=t.endDate;return !(!a||!n)&&Bt(a,r)})),ct(mt(e),"isRangeEnd",(function(){var t=e.props,r=t.day,a=t.startDate,n=t.endDate;return !(!a||!n)&&Bt(n,r)})),ct(mt(e),"isWeekend",(function(){var t=ke.default(e.props.day);return 0===t||6===t})),ct(mt(e),"isAfterMonth",(function(){return void 0!==e.props.month&&(e.props.month+1)%12===Se.default(e.props.day)})),ct(mt(e),"isBeforeMonth",(function(){return void 0!==e.props.month&&(Se.default(e.props.day)+1)%12===e.props.month})),ct(mt(e),"isCurrentDay",(function(){return e.isSameDay(St())})),ct(mt(e),"isSelected",(function(){return e.isSameDay(e.props.selected)})),ct(mt(e),"getClassNames",(function(t){var r=e.props.dayClassName?e.props.dayClassName(t):void 0;return ne.default("react-datepicker__day",r,"react-datepicker__day--"+Yt(e.props.day),{"react-datepicker__day--disabled":e.isDisabled(),"react-datepicker__day--excluded":e.isExcluded(),"react-datepicker__day--selected":e.isSelected(),"react-datepicker__day--keyboard-selected":e.isKeyboardSelected(),"react-datepicker__day--range-start":e.isRangeStart(),"react-datepicker__day--range-end":e.isRangeEnd(),"react-datepicker__day--in-range":e.isInRange(),"react-datepicker__day--in-selecting-range":e.isInSelectingRange(),"react-datepicker__day--selecting-range-start":e.isSelectingRangeStart(),"react-datepicker__day--selecting-range-end":e.isSelectingRangeEnd(),"react-datepicker__day--today":e.isCurrentDay(),"react-datepicker__day--weekend":e.isWeekend(),"react-datepicker__day--outside-month":e.isAfterMonth()||e.isBeforeMonth()},e.getHighLightedClass("react-datepicker__day--highlighted"))})),ct(mt(e),"getAriaLabel",(function(){var t=e.props,r=t.day,a=t.ariaLabelPrefixWhenEnabled,n=void 0===a?"Choose":a,o=t.ariaLabelPrefixWhenDisabled,s=void 0===o?"Not available":o,i=e.isDisabled()||e.isExcluded()?s:n;return "".concat(i," ").concat(Pt(r,"PPPP",e.props.locale))})),ct(mt(e),"getTabIndex",(function(t,r){var a=t||e.props.selected,n=r||e.props.preSelection;return e.isKeyboardSelected()||e.isSameDay(a)&&Bt(n,a)?0:-1})),ct(mt(e),"handleFocusDay",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=!1;0===e.getTabIndex()&&!t.isInputFocused&&e.isSameDay(e.props.preSelection)&&(document.activeElement&&document.activeElement!==document.body||(r=!0),e.props.inline&&!e.props.shouldFocusDayInline&&(r=!1),e.props.containerRef&&e.props.containerRef.current&&e.props.containerRef.current.contains(document.activeElement)&&document.activeElement.classList.contains("react-datepicker__day")&&(r=!0)),r&&e.dayEl.current.focus({preventScroll:!0});})),ct(mt(e),"renderDayContents",(function(){return e.props.monthShowsDuplicateDaysEnd&&e.isAfterMonth()||e.props.monthShowsDuplicateDaysStart&&e.isBeforeMonth()?null:e.props.renderDayContents?e.props.renderDayContents(be.default(e.props.day),e.props.day):be.default(e.props.day)})),ct(mt(e),"render",(function(){return ae.default.createElement("div",{ref:e.dayEl,className:e.getClassNames(e.props.day),onKeyDown:e.handleOnKeyDown,onClick:e.handleClick,onMouseEnter:e.handleMouseEnter,tabIndex:e.getTabIndex(),"aria-label":e.getAriaLabel(),role:"option","aria-disabled":e.isDisabled(),"aria-current":e.isCurrentDay()?"date":void 0,"aria-selected":e.isSelected()},e.renderDayContents())})),e}return lt(r,[{key:"componentDidMount",value:function(){this.handleFocusDay();}},{key:"componentDidUpdate",value:function(e){this.handleFocusDay(e);}}]),r}(),Pr=function(e){ut(r,ae["default"].Component);var t=vt(r);function r(){var e;it(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return ct(mt(e=t.call.apply(t,[this].concat(n))),"handleClick",(function(t){e.props.onClick&&e.props.onClick(t);})),e}return lt(r,[{key:"render",value:function(){var e=this.props,t=e.weekNumber,r=e.ariaLabelPrefix,a=void 0===r?"week ":r,n={"react-datepicker__week-number":!0,"react-datepicker__week-number--clickable":!!e.onClick};return ae.default.createElement("div",{className:ne.default(n),"aria-label":"".concat(a," ").concat(this.props.weekNumber),onClick:this.handleClick},t)}}]),r}(),Er=function(e){ut(r,ae["default"].Component);var t=vt(r);function r(){var e;it(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return ct(mt(e=t.call.apply(t,[this].concat(n))),"handleDayClick",(function(t,r){e.props.onDayClick&&e.props.onDayClick(t,r);})),ct(mt(e),"handleDayMouseEnter",(function(t){e.props.onDayMouseEnter&&e.props.onDayMouseEnter(t);})),ct(mt(e),"handleWeekClick",(function(t,r,a){"function"==typeof e.props.onWeekSelect&&e.props.onWeekSelect(t,r,a),e.props.shouldCloseOnSelect&&e.props.setOpen(!1);})),ct(mt(e),"formatWeekNumber",(function(t){return e.props.formatWeekNumber?e.props.formatWeekNumber(t):xt(t)})),ct(mt(e),"renderDays",(function(){var t=It(e.props.day,e.props.locale,e.props.calendarStartDay),r=[],a=e.formatWeekNumber(t);if(e.props.showWeekNumber){var n=e.props.onWeekSelect?e.handleWeekClick.bind(mt(e),t,a):void 0;r.push(ae.default.createElement(Pr,{key:"W",weekNumber:a,onClick:n,ariaLabelPrefix:e.props.ariaLabelPrefix}));}return r.concat([0,1,2,3,4,5,6].map((function(r){var a=ce.default(t,r);return ae.default.createElement(Mr,{ariaLabelPrefixWhenEnabled:e.props.chooseDayAriaLabelPrefix,ariaLabelPrefixWhenDisabled:e.props.disabledDayAriaLabelPrefix,key:a.valueOf(),day:a,month:e.props.month,onClick:e.handleDayClick.bind(mt(e),a),onMouseEnter:e.handleDayMouseEnter.bind(mt(e),a),minDate:e.props.minDate,maxDate:e.props.maxDate,excludeDates:e.props.excludeDates,excludeDateIntervals:e.props.excludeDateIntervals,includeDates:e.props.includeDates,includeDateIntervals:e.props.includeDateIntervals,highlightDates:e.props.highlightDates,selectingDate:e.props.selectingDate,filterDate:e.props.filterDate,preSelection:e.props.preSelection,selected:e.props.selected,selectsStart:e.props.selectsStart,selectsEnd:e.props.selectsEnd,selectsRange:e.props.selectsRange,selectsDisabledDaysInRange:e.props.selectsDisabledDaysInRange,startDate:e.props.startDate,endDate:e.props.endDate,dayClassName:e.props.dayClassName,renderDayContents:e.props.renderDayContents,disabledKeyboardNavigation:e.props.disabledKeyboardNavigation,handleOnKeyDown:e.props.handleOnKeyDown,isInputFocused:e.props.isInputFocused,containerRef:e.props.containerRef,inline:e.props.inline,shouldFocusDayInline:e.props.shouldFocusDayInline,monthShowsDuplicateDaysEnd:e.props.monthShowsDuplicateDaysEnd,monthShowsDuplicateDaysStart:e.props.monthShowsDuplicateDaysStart,locale:e.props.locale})})))})),e}return lt(r,[{key:"render",value:function(){return ae.default.createElement("div",{className:"react-datepicker__week"},this.renderDays())}}],[{key:"defaultProps",get:function(){return {shouldCloseOnSelect:!0}}}]),r}(),Nr=function(e){ut(r,ae["default"].Component);var t=vt(r);function r(){var e;it(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return ct(mt(e=t.call.apply(t,[this].concat(n))),"MONTH_REFS",Dt(Array(12)).map((function(){return ae.default.createRef()}))),ct(mt(e),"isDisabled",(function(t){return $t(t,e.props)})),ct(mt(e),"isExcluded",(function(t){return zt(t,e.props)})),ct(mt(e),"handleDayClick",(function(t,r){e.props.onDayClick&&e.props.onDayClick(t,r,e.props.orderInDisplay);})),ct(mt(e),"handleDayMouseEnter",(function(t){e.props.onDayMouseEnter&&e.props.onDayMouseEnter(t);})),ct(mt(e),"handleMouseLeave",(function(){e.props.onMouseLeave&&e.props.onMouseLeave();})),ct(mt(e),"isRangeStartMonth",(function(t){var r=e.props,a=r.day,n=r.startDate,o=r.endDate;return !(!n||!o)&&At(Ye.default(a,t),n)})),ct(mt(e),"isRangeStartQuarter",(function(t){var r=e.props,a=r.day,n=r.startDate,o=r.endDate;return !(!n||!o)&&qt(Oe.default(a,t),n)})),ct(mt(e),"isRangeEndMonth",(function(t){var r=e.props,a=r.day,n=r.startDate,o=r.endDate;return !(!n||!o)&&At(Ye.default(a,t),o)})),ct(mt(e),"isRangeEndQuarter",(function(t){var r=e.props,a=r.day,n=r.startDate,o=r.endDate;return !(!n||!o)&&qt(Oe.default(a,t),o)})),ct(mt(e),"isWeekInMonth",(function(t){var r=e.props.day,a=ce.default(t,6);return At(t,r)||At(a,r)})),ct(mt(e),"isCurrentMonth",(function(e,t){return Me.default(e)===Me.default(St())&&t===Se.default(St())})),ct(mt(e),"isSelectedMonth",(function(e,t,r){return Se.default(e)===t&&Me.default(e)===Me.default(r)})),ct(mt(e),"isSelectedQuarter",(function(e,t,r){return _e.default(e)===t&&Me.default(e)===Me.default(r)})),ct(mt(e),"renderWeeks",(function(){for(var t=[],r=e.props.fixedHeight,a=0,n=!1,o=It(Tt(e.props.day),e.props.locale,e.props.calendarStartDay);t.push(ae.default.createElement(Er,{ariaLabelPrefix:e.props.weekAriaLabelPrefix,chooseDayAriaLabelPrefix:e.props.chooseDayAriaLabelPrefix,disabledDayAriaLabelPrefix:e.props.disabledDayAriaLabelPrefix,key:a,day:o,month:Se.default(e.props.day),onDayClick:e.handleDayClick,onDayMouseEnter:e.handleDayMouseEnter,onWeekSelect:e.props.onWeekSelect,formatWeekNumber:e.props.formatWeekNumber,locale:e.props.locale,minDate:e.props.minDate,maxDate:e.props.maxDate,excludeDates:e.props.excludeDates,excludeDateIntervals:e.props.excludeDateIntervals,includeDates:e.props.includeDates,includeDateIntervals:e.props.includeDateIntervals,inline:e.props.inline,shouldFocusDayInline:e.props.shouldFocusDayInline,highlightDates:e.props.highlightDates,selectingDate:e.props.selectingDate,filterDate:e.props.filterDate,preSelection:e.props.preSelection,selected:e.props.selected,selectsStart:e.props.selectsStart,selectsEnd:e.props.selectsEnd,selectsRange:e.props.selectsRange,selectsDisabledDaysInRange:e.props.selectsDisabledDaysInRange,showWeekNumber:e.props.showWeekNumbers,startDate:e.props.startDate,endDate:e.props.endDate,dayClassName:e.props.dayClassName,setOpen:e.props.setOpen,shouldCloseOnSelect:e.props.shouldCloseOnSelect,disabledKeyboardNavigation:e.props.disabledKeyboardNavigation,renderDayContents:e.props.renderDayContents,handleOnKeyDown:e.props.handleOnKeyDown,isInputFocused:e.props.isInputFocused,containerRef:e.props.containerRef,calendarStartDay:e.props.calendarStartDay,monthShowsDuplicateDaysEnd:e.props.monthShowsDuplicateDaysEnd,monthShowsDuplicateDaysStart:e.props.monthShowsDuplicateDaysStart})),!n;){a++,o=de.default(o,1);var s=r&&a>=6,i=!r&&!e.isWeekInMonth(o);if(s||i){if(!e.props.peekNextMonth)break;n=!0;}}return t})),ct(mt(e),"onMonthClick",(function(t,r){e.handleDayClick(Tt(Ye.default(e.props.day,r)),t);})),ct(mt(e),"handleMonthNavigation",(function(t,r){e.isDisabled(r)||e.isExcluded(r)||(e.props.setPreSelection(r),e.MONTH_REFS[t].current&&e.MONTH_REFS[t].current.focus());})),ct(mt(e),"onMonthKeyDown",(function(t,r){var a=t.key;if(!e.props.disabledKeyboardNavigation)switch(a){case"Enter":e.onMonthClick(t,r),e.props.setPreSelection(e.props.selected);break;case"ArrowRight":e.handleMonthNavigation(11===r?0:r+1,ue.default(e.props.preSelection,1));break;case"ArrowLeft":e.handleMonthNavigation(0===r?11:r-1,ye.default(e.props.preSelection,1));}})),ct(mt(e),"onQuarterClick",(function(t,r){e.handleDayClick(Rt(Oe.default(e.props.day,r)),t);})),ct(mt(e),"getMonthClassNames",(function(t){var r=e.props,a=r.day,n=r.startDate,o=r.endDate,s=r.selected,i=r.minDate,p=r.maxDate,l=r.preSelection,c=r.monthClassName,d=c?c(a):void 0;return ne.default("react-datepicker__month-text","react-datepicker__month-".concat(t),d,{"react-datepicker__month--disabled":(i||p)&&Gt(Ye.default(a,t),e.props),"react-datepicker__month--selected":e.isSelectedMonth(a,t,s),"react-datepicker__month-text--keyboard-selected":Se.default(l)===t,"react-datepicker__month--in-range":Jt(n,o,t,a),"react-datepicker__month--range-start":e.isRangeStartMonth(t),"react-datepicker__month--range-end":e.isRangeEndMonth(t),"react-datepicker__month-text--today":e.isCurrentMonth(a,t)})})),ct(mt(e),"getTabIndex",(function(t){var r=Se.default(e.props.preSelection);return e.props.disabledKeyboardNavigation||t!==r?"-1":"0"})),ct(mt(e),"getAriaLabel",(function(t){var r=e.props,a=r.ariaLabelPrefix,n=void 0===a?"Choose":a,o=r.disabledDayAriaLabelPrefix,s=void 0===o?"Not available":o,i=r.day,p=Ye.default(i,t),l=e.isDisabled(p)||e.isExcluded(p)?s:n;return "".concat(l," ").concat(Pt(p,"MMMM yyyy"))})),ct(mt(e),"getQuarterClassNames",(function(t){var r=e.props,a=r.day,n=r.startDate,o=r.endDate,s=r.selected,i=r.minDate,p=r.maxDate;return ne.default("react-datepicker__quarter-text","react-datepicker__quarter-".concat(t),{"react-datepicker__quarter--disabled":(i||p)&&Xt(Oe.default(a,t),e.props),"react-datepicker__quarter--selected":e.isSelectedQuarter(a,t,s),"react-datepicker__quarter--in-range":er(n,o,t,a),"react-datepicker__quarter--range-start":e.isRangeStartQuarter(t),"react-datepicker__quarter--range-end":e.isRangeEndQuarter(t)})})),ct(mt(e),"renderMonths",(function(){var t=e.props,r=t.showFullMonthYearPicker,a=t.showTwoColumnMonthYearPicker,n=t.showFourColumnMonthYearPicker,o=t.locale,s=t.day,i=t.selected;return (n?[[0,1,2,3],[4,5,6,7],[8,9,10,11]]:a?[[0,1],[2,3],[4,5],[6,7],[8,9],[10,11]]:[[0,1,2],[3,4,5],[6,7,8],[9,10,11]]).map((function(t,a){return ae.default.createElement("div",{className:"react-datepicker__month-wrapper",key:a},t.map((function(t,a){return ae.default.createElement("div",{ref:e.MONTH_REFS[t],key:a,onClick:function(r){e.onMonthClick(r,t);},onKeyDown:function(r){e.onMonthKeyDown(r,t);},tabIndex:e.getTabIndex(t),className:e.getMonthClassNames(t),role:"option","aria-label":e.getAriaLabel(t),"aria-current":e.isCurrentMonth(s,t)?"date":void 0,"aria-selected":e.isSelectedMonth(s,t,i)},r?Qt(t,o):Vt(t,o))})))}))})),ct(mt(e),"renderQuarters",(function(){var t=e.props,r=t.day,a=t.selected;return ae.default.createElement("div",{className:"react-datepicker__quarter-wrapper"},[1,2,3,4].map((function(t,n){return ae.default.createElement("div",{key:n,role:"option",onClick:function(r){e.onQuarterClick(r,t);},className:e.getQuarterClassNames(t),"aria-selected":e.isSelectedQuarter(r,t,a)},Ut(t,e.props.locale))})))})),ct(mt(e),"getClassNames",(function(){var t=e.props;t.day;var r=t.selectingDate,a=t.selectsStart,n=t.selectsEnd,o=t.showMonthYearPicker,s=t.showQuarterYearPicker;return ne.default("react-datepicker__month",{"react-datepicker__month--selecting-range":r&&(a||n)},{"react-datepicker__monthPicker":o},{"react-datepicker__quarterPicker":s})})),e}return lt(r,[{key:"render",value:function(){var e=this.props,t=e.showMonthYearPicker,r=e.showQuarterYearPicker,a=e.day,n=e.ariaLabelPrefix,o=void 0===n?"month ":n;return ae.default.createElement("div",{className:this.getClassNames(),onMouseLeave:this.handleMouseLeave,"aria-label":"".concat(o," ").concat(Pt(a,"yyyy-MM")),role:"listbox"},t?this.renderMonths():r?this.renderQuarters():this.renderWeeks())}}]),r}(),xr=function(e){ut(r,ae["default"].Component);var t=vt(r);function r(){var e;it(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return ct(mt(e=t.call.apply(t,[this].concat(n))),"state",{height:null}),ct(mt(e),"handleClick",(function(t){(e.props.minTime||e.props.maxTime)&&nr(t,e.props)||(e.props.excludeTimes||e.props.includeTimes||e.props.filterTime)&&ar(t,e.props)||e.props.onChange(t);})),ct(mt(e),"isSelectedTime",(function(t,r,a){return e.props.selected&&r===ge.default(t)&&a===we.default(t)})),ct(mt(e),"liClasses",(function(t,r,a){var n=["react-datepicker__time-list-item",e.props.timeClassName?e.props.timeClassName(t,r,a):void 0];return e.isSelectedTime(t,r,a)&&n.push("react-datepicker__time-list-item--selected"),((e.props.minTime||e.props.maxTime)&&nr(t,e.props)||(e.props.excludeTimes||e.props.includeTimes||e.props.filterTime)&&ar(t,e.props))&&n.push("react-datepicker__time-list-item--disabled"),e.props.injectTimes&&(60*ge.default(t)+we.default(t))%e.props.intervals!=0&&n.push("react-datepicker__time-list-item--injected"),n.join(" ")})),ct(mt(e),"handleOnKeyDown",(function(t,r){" "===t.key&&(t.preventDefault(),t.key="Enter"),"Enter"===t.key&&e.handleClick(r),e.props.handleOnKeyDown(t);})),ct(mt(e),"renderTimes",(function(){for(var t=[],r=e.props.format?e.props.format:"p",a=e.props.intervals,n=Ot(St(e.props.selected)),o=1440/a,s=e.props.injectTimes&&e.props.injectTimes.sort((function(e,t){return e-t})),i=e.props.selected||e.props.openToDate||St(),p=ge.default(i),l=we.default(i),c=xe.default(Ne.default(n,l),p),d=0;d<o;d++){var u=pe.default(n,d*a);if(t.push(u),s){var f=ur(n,u,d,a,s);t=t.concat(f);}}return t.map((function(t,a){return ae.default.createElement("li",{key:a,onClick:e.handleClick.bind(mt(e),t),className:e.liClasses(t,p,l),ref:function(r){(Je.default(t,c)||Kt(t,c))&&(e.centerLi=r);},onKeyDown:function(r){e.handleOnKeyDown(r,t);},tabIndex:"0","aria-selected":e.isSelectedTime(t,p,l)?"true":void 0},Pt(t,r,e.props.locale))}))})),e}return lt(r,[{key:"componentDidMount",value:function(){this.list.scrollTop=r.calcCenterPosition(this.props.monthRef?this.props.monthRef.clientHeight-this.header.clientHeight:this.list.clientHeight,this.centerLi),this.props.monthRef&&this.header&&this.setState({height:this.props.monthRef.clientHeight-this.header.clientHeight});}},{key:"render",value:function(){var e=this,t=this.state.height;return ae.default.createElement("div",{className:"react-datepicker__time-container ".concat(this.props.todayButton?"react-datepicker__time-container--with-today-button":"")},ae.default.createElement("div",{className:"react-datepicker__header react-datepicker__header--time ".concat(this.props.showTimeSelectOnly?"react-datepicker__header--time--only":""),ref:function(t){e.header=t;}},ae.default.createElement("div",{className:"react-datepicker-time__header"},this.props.timeCaption)),ae.default.createElement("div",{className:"react-datepicker__time"},ae.default.createElement("div",{className:"react-datepicker__time-box"},ae.default.createElement("ul",{className:"react-datepicker__time-list",ref:function(t){e.list=t;},style:t?{height:t}:{},tabIndex:"0"},this.renderTimes()))))}}],[{key:"defaultProps",get:function(){return {intervals:30,onTimeChange:function(){},todayButton:null,timeCaption:"Time"}}}]),r}();ct(xr,"calcCenterPosition",(function(e,t){return t.offsetTop-(e/2-t.clientHeight/2)}));var Yr=function(e){ut(r,ae["default"].Component);var t=vt(r);function r(e){var a;return it(this,r),ct(mt(a=t.call(this,e)),"YEAR_REFS",Dt(Array(a.props.yearItemNumber)).map((function(){return ae.default.createRef()}))),ct(mt(a),"isDisabled",(function(e){return $t(e,a.props)})),ct(mt(a),"isExcluded",(function(e){return zt(e,a.props)})),ct(mt(a),"updateFocusOnPaginate",(function(e){var t=function(){this.YEAR_REFS[e].current.focus();}.bind(mt(a));window.requestAnimationFrame(t);})),ct(mt(a),"handleYearClick",(function(e,t){a.props.onDayClick&&a.props.onDayClick(e,t);})),ct(mt(a),"handleYearNavigation",(function(e,t){var r=a.props,n=r.date,o=r.yearItemNumber,s=hr(n,o).startPeriod;a.isDisabled(t)||a.isExcluded(t)||(a.props.setPreSelection(t),e-s==-1?a.updateFocusOnPaginate(o-1):e-s===o?a.updateFocusOnPaginate(0):a.YEAR_REFS[e-s].current.focus());})),ct(mt(a),"isSameDay",(function(e,t){return Bt(e,t)})),ct(mt(a),"isCurrentYear",(function(e){return e===Me.default(St())})),ct(mt(a),"isKeyboardSelected",(function(e){var t=Lt(Ie.default(a.props.date,e));return !a.props.disabledKeyboardNavigation&&!a.props.inline&&!Bt(t,Lt(a.props.selected))&&Bt(t,Lt(a.props.preSelection))})),ct(mt(a),"onYearClick",(function(e,t){var r=a.props.date;a.handleYearClick(Lt(Ie.default(r,t)),e);})),ct(mt(a),"onYearKeyDown",(function(e,t){var r=e.key;if(!a.props.disabledKeyboardNavigation)switch(r){case"Enter":a.onYearClick(e,t),a.props.setPreSelection(a.props.selected);break;case"ArrowRight":a.handleYearNavigation(t+1,fe.default(a.props.preSelection,1));break;case"ArrowLeft":a.handleYearNavigation(t-1,ve.default(a.props.preSelection,1));}})),ct(mt(a),"getYearClassNames",(function(e){var t=a.props,r=t.minDate,n=t.maxDate,o=t.selected;return ne.default("react-datepicker__year-text",{"react-datepicker__year-text--selected":e===Me.default(o),"react-datepicker__year-text--disabled":(r||n)&&Zt(e,a.props),"react-datepicker__year-text--keyboard-selected":a.isKeyboardSelected(e),"react-datepicker__year-text--today":a.isCurrentYear(e)})})),ct(mt(a),"getYearTabIndex",(function(e){return a.props.disabledKeyboardNavigation?"-1":e===Me.default(a.props.preSelection)?"0":"-1"})),a}return lt(r,[{key:"render",value:function(){for(var e=this,t=[],r=this.props,a=hr(r.date,r.yearItemNumber),n=a.startPeriod,o=a.endPeriod,s=function(r){t.push(ae.default.createElement("div",{ref:e.YEAR_REFS[r-n],onClick:function(t){e.onYearClick(t,r);},onKeyDown:function(t){e.onYearKeyDown(t,r);},tabIndex:e.getYearTabIndex(r),className:e.getYearClassNames(r),key:r,"aria-current":e.isCurrentYear(r)?"date":void 0},r));},i=n;i<=o;i++)s(i);return ae.default.createElement("div",{className:"react-datepicker__year"},ae.default.createElement("div",{className:"react-datepicker__year-wrapper"},t))}}]),r}(),Or=function(e){ut(r,ae["default"].Component);var t=vt(r);function r(e){var a;return it(this,r),ct(mt(a=t.call(this,e)),"onTimeChange",(function(e){a.setState({time:e});var t=new Date;t.setHours(e.split(":")[0]),t.setMinutes(e.split(":")[1]),a.props.onChange(t);})),ct(mt(a),"renderTimeInput",(function(){var e=a.state.time,t=a.props,r=t.date,n=t.timeString,o=t.customTimeInput;return o?ae.default.cloneElement(o,{date:r,value:e,onChange:a.onTimeChange}):ae.default.createElement("input",{type:"time",className:"react-datepicker-time__input",placeholder:"Time",name:"time-input",required:!0,value:e,onChange:function(e){a.onTimeChange(e.target.value||n);}})})),a.state={time:a.props.timeString},a}return lt(r,[{key:"render",value:function(){return ae.default.createElement("div",{className:"react-datepicker__input-time-container"},ae.default.createElement("div",{className:"react-datepicker-time__caption"},this.props.timeInputLabel),ae.default.createElement("div",{className:"react-datepicker-time__input-container"},ae.default.createElement("div",{className:"react-datepicker-time__input"},this.renderTimeInput())))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.timeString!==t.time?{time:e.timeString}:null}}]),r}();function Ir(e){var t=e.className,r=e.children,a=e.showPopperArrow,n=e.arrowProps,o=void 0===n?{}:n;return ae.default.createElement("div",{className:t},a&&ae.default.createElement("div",dt({className:"react-datepicker__triangle"},o)),r)}var Tr=["react-datepicker__year-select","react-datepicker__month-select","react-datepicker__month-year-select"],Lr=function(e){ut(r,ae["default"].Component);var t=vt(r);function r(e){var a;return it(this,r),ct(mt(a=t.call(this,e)),"handleClickOutside",(function(e){a.props.onClickOutside(e);})),ct(mt(a),"setClickOutsideRef",(function(){return a.containerRef.current})),ct(mt(a),"handleDropdownFocus",(function(e){(function(){var e=((arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).className||"").split(/\s+/);return Tr.some((function(t){return e.indexOf(t)>=0}))})(e.target)&&a.props.onDropdownFocus();})),ct(mt(a),"getDateInView",(function(){var e=a.props,t=e.preSelection,r=e.selected,n=e.openToDate,o=lr(a.props),s=cr(a.props),i=St(),p=n||r||t;return p||(o&&Je.default(i,o)?o:s&&Ge.default(i,s)?s:i)})),ct(mt(a),"increaseMonth",(function(){a.setState((function(e){var t=e.date;return {date:ue.default(t,1)}}),(function(){return a.handleMonthChange(a.state.date)}));})),ct(mt(a),"decreaseMonth",(function(){a.setState((function(e){var t=e.date;return {date:ye.default(t,1)}}),(function(){return a.handleMonthChange(a.state.date)}));})),ct(mt(a),"handleDayClick",(function(e,t,r){a.props.onSelect(e,t,r),a.props.setPreSelection&&a.props.setPreSelection(e);})),ct(mt(a),"handleDayMouseEnter",(function(e){a.setState({selectingDate:e}),a.props.onDayMouseEnter&&a.props.onDayMouseEnter(e);})),ct(mt(a),"handleMonthMouseLeave",(function(){a.setState({selectingDate:null}),a.props.onMonthMouseLeave&&a.props.onMonthMouseLeave();})),ct(mt(a),"handleYearChange",(function(e){a.props.onYearChange&&a.props.onYearChange(e),a.props.adjustDateOnChange&&(a.props.onSelect&&a.props.onSelect(e),a.props.setOpen&&a.props.setOpen(!0)),a.props.setPreSelection&&a.props.setPreSelection(e);})),ct(mt(a),"handleMonthChange",(function(e){a.props.onMonthChange&&a.props.onMonthChange(e),a.props.adjustDateOnChange&&(a.props.onSelect&&a.props.onSelect(e),a.props.setOpen&&a.props.setOpen(!0)),a.props.setPreSelection&&a.props.setPreSelection(e);})),ct(mt(a),"handleMonthYearChange",(function(e){a.handleYearChange(e),a.handleMonthChange(e);})),ct(mt(a),"changeYear",(function(e){a.setState((function(t){var r=t.date;return {date:Ie.default(r,e)}}),(function(){return a.handleYearChange(a.state.date)}));})),ct(mt(a),"changeMonth",(function(e){a.setState((function(t){var r=t.date;return {date:Ye.default(r,e)}}),(function(){return a.handleMonthChange(a.state.date)}));})),ct(mt(a),"changeMonthYear",(function(e){a.setState((function(t){var r=t.date;return {date:Ie.default(Ye.default(r,Se.default(e)),Me.default(e))}}),(function(){return a.handleMonthYearChange(a.state.date)}));})),ct(mt(a),"header",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.state.date,t=It(e,a.props.locale,a.props.calendarStartDay),r=[];return a.props.showWeekNumbers&&r.push(ae.default.createElement("div",{key:"W",className:"react-datepicker__day-name"},a.props.weekLabel||"#")),r.concat([0,1,2,3,4,5,6].map((function(e){var r=ce.default(t,e),n=a.formatWeekday(r,a.props.locale),o=a.props.weekDayClassName?a.props.weekDayClassName(r):void 0;return ae.default.createElement("div",{key:e,className:ne.default("react-datepicker__day-name",o)},n)})))})),ct(mt(a),"formatWeekday",(function(e,t){return a.props.formatWeekDay?function(e,t,r){return t(Pt(e,"EEEE",r))}(e,a.props.formatWeekDay,t):a.props.useWeekdaysShort?function(e,t){return Pt(e,"EEE",t)}(e,t):function(e,t){return Pt(e,"EEEEEE",t)}(e,t)})),ct(mt(a),"decreaseYear",(function(){a.setState((function(e){var t=e.date;return {date:ve.default(t,a.props.showYearPicker?a.props.yearItemNumber:1)}}),(function(){return a.handleYearChange(a.state.date)}));})),ct(mt(a),"renderPreviousButton",(function(){if(!a.props.renderCustomHeader){var e;switch(!0){case a.props.showMonthYearPicker:e=ir(a.state.date,a.props);break;case a.props.showYearPicker:e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,a=t.yearItemNumber,n=void 0===a?12:a,o=hr(Lt(ve.default(e,n)),n).endPeriod,s=r&&Me.default(r);return s&&s>o||!1}(a.state.date,a.props);break;default:e=or(a.state.date,a.props);}if((a.props.forceShowMonthNavigation||a.props.showDisabledMonthNavigation||!e)&&!a.props.showTimeSelectOnly){var t=["react-datepicker__navigation","react-datepicker__navigation--previous"],r=a.decreaseMonth;(a.props.showMonthYearPicker||a.props.showQuarterYearPicker||a.props.showYearPicker)&&(r=a.decreaseYear),e&&a.props.showDisabledMonthNavigation&&(t.push("react-datepicker__navigation--previous--disabled"),r=null);var n=a.props.showMonthYearPicker||a.props.showQuarterYearPicker||a.props.showYearPicker,o=a.props,s=o.previousMonthButtonLabel,i=o.previousYearButtonLabel,p=a.props,l=p.previousMonthAriaLabel,c=void 0===l?"string"==typeof s?s:"Previous Month":l,d=p.previousYearAriaLabel,u=void 0===d?"string"==typeof i?i:"Previous Year":d;return ae.default.createElement("button",{type:"button",className:t.join(" "),onClick:r,onKeyDown:a.props.handleOnKeyDown,"aria-label":n?u:c},ae.default.createElement("span",{className:["react-datepicker__navigation-icon","react-datepicker__navigation-icon--previous"].join(" ")},n?a.props.previousYearButtonLabel:a.props.previousMonthButtonLabel))}}})),ct(mt(a),"increaseYear",(function(){a.setState((function(e){var t=e.date;return {date:fe.default(t,a.props.showYearPicker?a.props.yearItemNumber:1)}}),(function(){return a.handleYearChange(a.state.date)}));})),ct(mt(a),"renderNextButton",(function(){if(!a.props.renderCustomHeader){var e;switch(!0){case a.props.showMonthYearPicker:e=pr(a.state.date,a.props);break;case a.props.showYearPicker:e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.maxDate,a=t.yearItemNumber,n=void 0===a?12:a,o=hr(fe.default(e,n),n).startPeriod,s=r&&Me.default(r);return s&&s<o||!1}(a.state.date,a.props);break;default:e=sr(a.state.date,a.props);}if((a.props.forceShowMonthNavigation||a.props.showDisabledMonthNavigation||!e)&&!a.props.showTimeSelectOnly){var t=["react-datepicker__navigation","react-datepicker__navigation--next"];a.props.showTimeSelect&&t.push("react-datepicker__navigation--next--with-time"),a.props.todayButton&&t.push("react-datepicker__navigation--next--with-today-button");var r=a.increaseMonth;(a.props.showMonthYearPicker||a.props.showQuarterYearPicker||a.props.showYearPicker)&&(r=a.increaseYear),e&&a.props.showDisabledMonthNavigation&&(t.push("react-datepicker__navigation--next--disabled"),r=null);var n=a.props.showMonthYearPicker||a.props.showQuarterYearPicker||a.props.showYearPicker,o=a.props,s=o.nextMonthButtonLabel,i=o.nextYearButtonLabel,p=a.props,l=p.nextMonthAriaLabel,c=void 0===l?"string"==typeof s?s:"Next Month":l,d=p.nextYearAriaLabel,u=void 0===d?"string"==typeof i?i:"Next Year":d;return ae.default.createElement("button",{type:"button",className:t.join(" "),onClick:r,onKeyDown:a.props.handleOnKeyDown,"aria-label":n?u:c},ae.default.createElement("span",{className:["react-datepicker__navigation-icon","react-datepicker__navigation-icon--next"].join(" ")},n?a.props.nextYearButtonLabel:a.props.nextMonthButtonLabel))}}})),ct(mt(a),"renderCurrentMonth",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.state.date,t=["react-datepicker__current-month"];return a.props.showYearDropdown&&t.push("react-datepicker__current-month--hasYearDropdown"),a.props.showMonthDropdown&&t.push("react-datepicker__current-month--hasMonthDropdown"),a.props.showMonthYearDropdown&&t.push("react-datepicker__current-month--hasMonthYearDropdown"),ae.default.createElement("div",{className:t.join(" ")},Pt(e,a.props.dateFormat,a.props.locale))})),ct(mt(a),"renderYearDropdown",(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(a.props.showYearDropdown&&!e)return ae.default.createElement(Dr,{adjustDateOnChange:a.props.adjustDateOnChange,date:a.state.date,onSelect:a.props.onSelect,setOpen:a.props.setOpen,dropdownMode:a.props.dropdownMode,onChange:a.changeYear,minDate:a.props.minDate,maxDate:a.props.maxDate,year:Me.default(a.state.date),scrollableYearDropdown:a.props.scrollableYearDropdown,yearDropdownItemNumber:a.props.yearDropdownItemNumber})})),ct(mt(a),"renderMonthDropdown",(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(a.props.showMonthDropdown&&!e)return ae.default.createElement(kr,{dropdownMode:a.props.dropdownMode,locale:a.props.locale,onChange:a.changeMonth,month:Se.default(a.state.date),useShortMonthInDropdown:a.props.useShortMonthInDropdown})})),ct(mt(a),"renderMonthYearDropdown",(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(a.props.showMonthYearDropdown&&!e)return ae.default.createElement(_r,{dropdownMode:a.props.dropdownMode,locale:a.props.locale,dateFormat:a.props.dateFormat,onChange:a.changeMonthYear,minDate:a.props.minDate,maxDate:a.props.maxDate,date:a.state.date,scrollableMonthYearDropdown:a.props.scrollableMonthYearDropdown})})),ct(mt(a),"renderTodayButton",(function(){if(a.props.todayButton&&!a.props.showTimeSelectOnly)return ae.default.createElement("div",{className:"react-datepicker__today-button",onClick:function(e){return a.props.onSelect(qe.default(St()),e)}},a.props.todayButton)})),ct(mt(a),"renderDefaultHeader",(function(e){var t=e.monthDate,r=e.i;return ae.default.createElement("div",{className:"react-datepicker__header ".concat(a.props.showTimeSelect?"react-datepicker__header--has-time-select":"")},a.renderCurrentMonth(t),ae.default.createElement("div",{className:"react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(a.props.dropdownMode),onFocus:a.handleDropdownFocus},a.renderMonthDropdown(0!==r),a.renderMonthYearDropdown(0!==r),a.renderYearDropdown(0!==r)),ae.default.createElement("div",{className:"react-datepicker__day-names"},a.header(t)))})),ct(mt(a),"renderCustomHeader",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.monthDate,r=e.i;if(a.props.showTimeSelect&&!a.state.monthContainer||a.props.showTimeSelectOnly)return null;var n=or(a.state.date,a.props),o=sr(a.state.date,a.props),s=ir(a.state.date,a.props),i=pr(a.state.date,a.props),p=!a.props.showMonthYearPicker&&!a.props.showQuarterYearPicker&&!a.props.showYearPicker;return ae.default.createElement("div",{className:"react-datepicker__header react-datepicker__header--custom",onFocus:a.props.onDropdownFocus},a.props.renderCustomHeader(ot(ot({},a.state),{},{customHeaderCount:r,monthDate:t,changeMonth:a.changeMonth,changeYear:a.changeYear,decreaseMonth:a.decreaseMonth,increaseMonth:a.increaseMonth,decreaseYear:a.decreaseYear,increaseYear:a.increaseYear,prevMonthButtonDisabled:n,nextMonthButtonDisabled:o,prevYearButtonDisabled:s,nextYearButtonDisabled:i})),p&&ae.default.createElement("div",{className:"react-datepicker__day-names"},a.header(t)))})),ct(mt(a),"renderYearHeader",(function(){var e=a.state.date,t=a.props,r=t.showYearPicker,n=hr(e,t.yearItemNumber),o=n.startPeriod,s=n.endPeriod;return ae.default.createElement("div",{className:"react-datepicker__header react-datepicker-year-header"},r?"".concat(o," - ").concat(s):Me.default(e))})),ct(mt(a),"renderHeader",(function(e){switch(!0){case void 0!==a.props.renderCustomHeader:return a.renderCustomHeader(e);case a.props.showMonthYearPicker||a.props.showQuarterYearPicker||a.props.showYearPicker:return a.renderYearHeader(e);default:return a.renderDefaultHeader(e)}})),ct(mt(a),"renderMonths",(function(){if(!a.props.showTimeSelectOnly&&!a.props.showYearPicker){for(var e=[],t=a.props.showPreviousMonths?a.props.monthsShown-1:0,r=ye.default(a.state.date,t),n=0;n<a.props.monthsShown;++n){var o=n-a.props.monthSelectedIn,s=ue.default(r,o),i="month-".concat(n),p=n<a.props.monthsShown-1,l=n>0;e.push(ae.default.createElement("div",{key:i,ref:function(e){a.monthContainer=e;},className:"react-datepicker__month-container"},a.renderHeader({monthDate:s,i:n}),ae.default.createElement(Nr,{chooseDayAriaLabelPrefix:a.props.chooseDayAriaLabelPrefix,disabledDayAriaLabelPrefix:a.props.disabledDayAriaLabelPrefix,weekAriaLabelPrefix:a.props.weekAriaLabelPrefix,onChange:a.changeMonthYear,day:s,dayClassName:a.props.dayClassName,calendarStartDay:a.props.calendarStartDay,monthClassName:a.props.monthClassName,onDayClick:a.handleDayClick,handleOnKeyDown:a.props.handleOnDayKeyDown,onDayMouseEnter:a.handleDayMouseEnter,onMouseLeave:a.handleMonthMouseLeave,onWeekSelect:a.props.onWeekSelect,orderInDisplay:n,formatWeekNumber:a.props.formatWeekNumber,locale:a.props.locale,minDate:a.props.minDate,maxDate:a.props.maxDate,excludeDates:a.props.excludeDates,excludeDateIntervals:a.props.excludeDateIntervals,highlightDates:a.props.highlightDates,selectingDate:a.state.selectingDate,includeDates:a.props.includeDates,includeDateIntervals:a.props.includeDateIntervals,inline:a.props.inline,shouldFocusDayInline:a.props.shouldFocusDayInline,fixedHeight:a.props.fixedHeight,filterDate:a.props.filterDate,preSelection:a.props.preSelection,setPreSelection:a.props.setPreSelection,selected:a.props.selected,selectsStart:a.props.selectsStart,selectsEnd:a.props.selectsEnd,selectsRange:a.props.selectsRange,selectsDisabledDaysInRange:a.props.selectsDisabledDaysInRange,showWeekNumbers:a.props.showWeekNumbers,startDate:a.props.startDate,endDate:a.props.endDate,peekNextMonth:a.props.peekNextMonth,setOpen:a.props.setOpen,shouldCloseOnSelect:a.props.shouldCloseOnSelect,renderDayContents:a.props.renderDayContents,disabledKeyboardNavigation:a.props.disabledKeyboardNavigation,showMonthYearPicker:a.props.showMonthYearPicker,showFullMonthYearPicker:a.props.showFullMonthYearPicker,showTwoColumnMonthYearPicker:a.props.showTwoColumnMonthYearPicker,showFourColumnMonthYearPicker:a.props.showFourColumnMonthYearPicker,showYearPicker:a.props.showYearPicker,showQuarterYearPicker:a.props.showQuarterYearPicker,isInputFocused:a.props.isInputFocused,containerRef:a.containerRef,monthShowsDuplicateDaysEnd:p,monthShowsDuplicateDaysStart:l})));}return e}})),ct(mt(a),"renderYears",(function(){if(!a.props.showTimeSelectOnly)return a.props.showYearPicker?ae.default.createElement("div",{className:"react-datepicker__year--container"},a.renderHeader(),ae.default.createElement(Yr,dt({onDayClick:a.handleDayClick,date:a.state.date},a.props))):void 0})),ct(mt(a),"renderTimeSection",(function(){if(a.props.showTimeSelect&&(a.state.monthContainer||a.props.showTimeSelectOnly))return ae.default.createElement(xr,{selected:a.props.selected,openToDate:a.props.openToDate,onChange:a.props.onTimeChange,timeClassName:a.props.timeClassName,format:a.props.timeFormat,includeTimes:a.props.includeTimes,intervals:a.props.timeIntervals,minTime:a.props.minTime,maxTime:a.props.maxTime,excludeTimes:a.props.excludeTimes,filterTime:a.props.filterTime,timeCaption:a.props.timeCaption,todayButton:a.props.todayButton,showMonthDropdown:a.props.showMonthDropdown,showMonthYearDropdown:a.props.showMonthYearDropdown,showYearDropdown:a.props.showYearDropdown,withPortal:a.props.withPortal,monthRef:a.state.monthContainer,injectTimes:a.props.injectTimes,locale:a.props.locale,handleOnKeyDown:a.props.handleOnKeyDown,showTimeSelectOnly:a.props.showTimeSelectOnly})})),ct(mt(a),"renderInputTimeSection",(function(){var e=new Date(a.props.selected),t=Mt(e)&&Boolean(a.props.selected)?"".concat(fr(e.getHours()),":").concat(fr(e.getMinutes())):"";if(a.props.showTimeInput)return ae.default.createElement(Or,{date:e,timeString:t,timeInputLabel:a.props.timeInputLabel,onChange:a.props.onTimeChange,customTimeInput:a.props.customTimeInput})})),a.containerRef=ae.default.createRef(),a.state={date:a.getDateInView(),selectingDate:null,monthContainer:null},a}return lt(r,[{key:"componentDidMount",value:function(){var e=this;this.props.showTimeSelect&&(this.assignMonthContainer=void e.setState({monthContainer:e.monthContainer}));}},{key:"componentDidUpdate",value:function(e){this.props.preSelection&&!Bt(this.props.preSelection,e.preSelection)?this.setState({date:this.props.preSelection}):this.props.openToDate&&!Bt(this.props.openToDate,e.openToDate)&&this.setState({date:this.props.openToDate});}},{key:"render",value:function(){var e=this.props.container||Ir;return ae.default.createElement("div",{ref:this.containerRef},ae.default.createElement(e,{className:ne.default("react-datepicker",this.props.className,{"react-datepicker--time-only":this.props.showTimeSelectOnly}),showPopperArrow:this.props.showPopperArrow,arrowProps:this.props.arrowProps},this.renderPreviousButton(),this.renderNextButton(),this.renderMonths(),this.renderYears(),this.renderTodayButton(),this.renderTimeSection(),this.renderInputTimeSection(),this.props.children))}}],[{key:"defaultProps",get:function(){return {onDropdownFocus:function(){},monthsShown:1,monthSelectedIn:0,forceShowMonthNavigation:!1,timeCaption:"Time",previousYearButtonLabel:"Previous Year",nextYearButtonLabel:"Next Year",previousMonthButtonLabel:"Previous Month",nextMonthButtonLabel:"Next Month",customTimeInput:null,yearItemNumber:12}}}]),r}(),Rr=function(e){ut(r,ae["default"].Component);var t=vt(r);function r(e){var a;return it(this,r),(a=t.call(this,e)).el=document.createElement("div"),a}return lt(r,[{key:"componentDidMount",value:function(){this.portalRoot=(this.props.portalHost||document).getElementById(this.props.portalId),this.portalRoot||(this.portalRoot=document.createElement("div"),this.portalRoot.setAttribute("id",this.props.portalId),(this.props.portalHost||document.body).appendChild(this.portalRoot)),this.portalRoot.appendChild(this.el);}},{key:"componentWillUnmount",value:function(){this.portalRoot.removeChild(this.el);}},{key:"render",value:function(){return at.default.createPortal(this.props.children,this.el)}}]),r}(),Fr=function(e){return !e.disabled&&-1!==e.tabIndex},Ar=function(e){ut(r,ae["default"].Component);var t=vt(r);function r(e){var a;return it(this,r),ct(mt(a=t.call(this,e)),"getTabChildren",(function(){return Array.prototype.slice.call(a.tabLoopRef.current.querySelectorAll("[tabindex], a, button, input, select, textarea"),1,-1).filter(Fr)})),ct(mt(a),"handleFocusStart",(function(e){var t=a.getTabChildren();t&&t.length>1&&t[t.length-1].focus();})),ct(mt(a),"handleFocusEnd",(function(e){var t=a.getTabChildren();t&&t.length>1&&t[0].focus();})),a.tabLoopRef=ae.default.createRef(),a}return lt(r,[{key:"render",value:function(){return this.props.enableTabLoop?ae.default.createElement("div",{className:"react-datepicker__tab-loop",ref:this.tabLoopRef},ae.default.createElement("div",{className:"react-datepicker__tab-loop__start",tabIndex:"0",onFocus:this.handleFocusStart}),this.props.children,ae.default.createElement("div",{className:"react-datepicker__tab-loop__end",tabIndex:"0",onFocus:this.handleFocusEnd})):this.props.children}}],[{key:"defaultProps",get:function(){return {enableTabLoop:!0}}}]),r}(),qr=function(e){ut(r,ae["default"].Component);var t=vt(r);function r(){return it(this,r),t.apply(this,arguments)}return lt(r,[{key:"render",value:function(){var e,t=this.props,r=t.className,a=t.wrapperClassName,n=t.hidePopper,o=t.popperComponent,s=t.popperModifiers,i=t.popperPlacement,p=t.popperProps,l=t.targetComponent,c=t.enableTabLoop,d=t.popperOnKeyDown,u=t.portalId,f=t.portalHost;if(!n){var h=ne.default("react-datepicker-popper",r);e=ae.default.createElement(te.Popper,dt({modifiers:s,placement:i},p),(function(e){var t=e.ref,r=e.style,a=e.placement,n=e.arrowProps;return ae.default.createElement(Ar,{enableTabLoop:c},ae.default.createElement("div",{ref:t,style:r,className:h,"data-placement":a,onKeyDown:d},ae.default.cloneElement(o,{arrowProps:n})))}));}this.props.popperContainer&&(e=ae.default.createElement(this.props.popperContainer,{},e)),u&&!n&&(e=ae.default.createElement(Rr,{portalId:u,portalHost:f},e));var m=ne.default("react-datepicker-wrapper",a);return ae.default.createElement(te.Manager,{className:"react-datepicker-manager"},ae.default.createElement(te.Reference,null,(function(e){var t=e.ref;return ae.default.createElement("div",{ref:t,className:m},l)})),e)}}],[{key:"defaultProps",get:function(){return {hidePopper:!0,popperModifiers:[],popperProps:{},popperPlacement:"bottom-start"}}}]),r}(),Br=rt.default(Lr);var Kr=function(e){ut(r,ae["default"].Component);var t=vt(r);function r(e){var a;return it(this,r),ct(mt(a=t.call(this,e)),"getPreSelection",(function(){return a.props.openToDate?a.props.openToDate:a.props.selectsEnd&&a.props.startDate?a.props.startDate:a.props.selectsStart&&a.props.endDate?a.props.endDate:St()})),ct(mt(a),"calcInitialState",(function(){var e,t=a.getPreSelection(),r=lr(a.props),n=cr(a.props),o=r&&Je.default(t,qe.default(r))?r:n&&Ge.default(t,He.default(n))?n:t;return {open:a.props.startOpen||!1,preventFocus:!1,preSelection:null!==(e=a.props.selectsRange?a.props.startDate:a.props.selected)&&void 0!==e?e:o,highlightDates:dr(a.props.highlightDates),focused:!1,shouldFocusDayInline:!1}})),ct(mt(a),"clearPreventFocusTimeout",(function(){a.preventFocusTimeout&&clearTimeout(a.preventFocusTimeout);})),ct(mt(a),"setFocus",(function(){a.input&&a.input.focus&&a.input.focus({preventScroll:!0});})),ct(mt(a),"setBlur",(function(){a.input&&a.input.blur&&a.input.blur(),a.cancelFocusInput();})),ct(mt(a),"setOpen",(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];a.setState({open:e,preSelection:e&&a.state.open?a.state.preSelection:a.calcInitialState().preSelection,lastPreSelectChange:jr},(function(){e||a.setState((function(e){return {focused:!!t&&e.focused}}),(function(){!t&&a.setBlur(),a.setState({inputValue:null});}));}));})),ct(mt(a),"inputOk",(function(){return oe.default(a.state.preSelection)})),ct(mt(a),"isCalendarOpen",(function(){return void 0===a.props.open?a.state.open&&!a.props.disabled&&!a.props.readOnly:a.props.open})),ct(mt(a),"handleFocus",(function(e){a.state.preventFocus||(a.props.onFocus(e),a.props.preventOpenOnFocus||a.props.readOnly||a.setOpen(!0)),a.setState({focused:!0});})),ct(mt(a),"cancelFocusInput",(function(){clearTimeout(a.inputFocusTimeout),a.inputFocusTimeout=null;})),ct(mt(a),"deferFocusInput",(function(){a.cancelFocusInput(),a.inputFocusTimeout=setTimeout((function(){return a.setFocus()}),1);})),ct(mt(a),"handleDropdownFocus",(function(){a.cancelFocusInput();})),ct(mt(a),"handleBlur",(function(e){(!a.state.open||a.props.withPortal||a.props.showTimeInput)&&a.props.onBlur(e),a.setState({focused:!1});})),ct(mt(a),"handleCalendarClickOutside",(function(e){a.props.inline||a.setOpen(!1),a.props.onClickOutside(e),a.props.withPortal&&e.preventDefault();})),ct(mt(a),"handleChange",(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=t[0];if(!a.props.onChangeRaw||(a.props.onChangeRaw.apply(mt(a),t),"function"==typeof n.isDefaultPrevented&&!n.isDefaultPrevented())){a.setState({inputValue:n.target.value,lastPreSelectChange:Wr});var o=_t(n.target.value,a.props.dateFormat,a.props.locale,a.props.strictParsing,a.props.minDate);!o&&n.target.value||a.setSelected(o,n,!0);}})),ct(mt(a),"handleSelect",(function(e,t,r){if(a.setState({preventFocus:!0},(function(){return a.preventFocusTimeout=setTimeout((function(){return a.setState({preventFocus:!1})}),50),a.preventFocusTimeout})),a.props.onChangeRaw&&a.props.onChangeRaw(t),a.setSelected(e,t,!1,r),!a.props.shouldCloseOnSelect||a.props.showTimeSelect)a.setPreSelection(e);else if(!a.props.inline){a.props.selectsRange||a.setOpen(!1);var n=a.props,o=n.startDate,s=n.endDate;!o||s||Je.default(e,o)||a.setOpen(!1);}})),ct(mt(a),"setSelected",(function(e,t,r,n){var o=e;if(null===o||!$t(o,a.props)){var s=a.props,i=s.onChange,p=s.selectsRange,l=s.startDate,c=s.endDate;if(!Kt(a.props.selected,o)||a.props.allowSameDay||p)if(null!==o&&(!a.props.selected||r&&(a.props.showTimeSelect||a.props.showTimeSelectOnly||a.props.showTimeInput)||(o=Nt(o,{hour:ge.default(a.props.selected),minute:we.default(a.props.selected),second:De.default(a.props.selected)})),a.props.inline||a.setState({preSelection:o}),a.props.focusSelectedMonth||a.setState({monthSelectedIn:n})),p){var d=l&&!c,u=l&&c;!l&&!c?i([o,null],t):d&&(Je.default(o,l)?i([o,null],t):i([l,o],t)),u&&i([o,null],t);}else i(o,t);r||(a.props.onSelect(o,t),a.setState({inputValue:null}));}})),ct(mt(a),"setPreSelection",(function(e){var t=void 0!==a.props.minDate,r=void 0!==a.props.maxDate,n=!0;if(e){var o=qe.default(e);if(t&&r)n=Wt(e,a.props.minDate,a.props.maxDate);else if(t){var s=qe.default(a.props.minDate);n=Ge.default(e,s)||Kt(o,s);}else if(r){var i=He.default(a.props.maxDate);n=Je.default(e,i)||Kt(o,i);}}n&&a.setState({preSelection:e});})),ct(mt(a),"handleTimeChange",(function(e){var t=Nt(a.props.selected?a.props.selected:a.getPreSelection(),{hour:ge.default(e),minute:we.default(e)});a.setState({preSelection:t}),a.props.onChange(t),a.props.shouldCloseOnSelect&&a.setOpen(!1),a.props.showTimeInput&&a.setOpen(!0),a.setState({inputValue:null});})),ct(mt(a),"onInputClick",(function(){a.props.disabled||a.props.readOnly||a.setOpen(!0),a.props.onInputClick();})),ct(mt(a),"onInputKeyDown",(function(e){a.props.onKeyDown(e);var t=e.key;if(a.state.open||a.props.inline||a.props.preventOpenOnFocus){if(a.state.open){if("ArrowDown"===t||"ArrowUp"===t){e.preventDefault();var r=a.calendar.componentNode&&a.calendar.componentNode.querySelector('.react-datepicker__day[tabindex="0"]');return void(r&&r.focus({preventScroll:!0}))}var n=St(a.state.preSelection);"Enter"===t?(e.preventDefault(),a.inputOk()&&a.state.lastPreSelectChange===jr?(a.handleSelect(n,e),!a.props.shouldCloseOnSelect&&a.setPreSelection(n)):a.setOpen(!1)):"Escape"===t&&(e.preventDefault(),a.setOpen(!1)),a.inputOk()||a.props.onInputError({code:1,msg:"Date input not valid."});}}else "ArrowDown"!==t&&"ArrowUp"!==t&&"Enter"!==t||a.onInputClick();})),ct(mt(a),"onDayKeyDown",(function(e){a.props.onKeyDown(e);var t=e.key,r=St(a.state.preSelection);if("Enter"===t)e.preventDefault(),a.handleSelect(r,e),!a.props.shouldCloseOnSelect&&a.setPreSelection(r);else if("Escape"===t)e.preventDefault(),a.setOpen(!1),a.inputOk()||a.props.onInputError({code:1,msg:"Date input not valid."});else if(!a.props.disabledKeyboardNavigation){var n;switch(t){case"ArrowLeft":n=he.default(r,1);break;case"ArrowRight":n=ce.default(r,1);break;case"ArrowUp":n=me.default(r,1);break;case"ArrowDown":n=de.default(r,1);break;case"PageUp":n=ye.default(r,1);break;case"PageDown":n=ue.default(r,1);break;case"Home":n=ve.default(r,1);break;case"End":n=fe.default(r,1);}if(!n)return void(a.props.onInputError&&a.props.onInputError({code:1,msg:"Date input not valid."}));if(e.preventDefault(),a.setState({lastPreSelectChange:jr}),a.props.adjustDateOnChange&&a.setSelected(n),a.setPreSelection(n),a.props.inline){var o=Se.default(r),s=Se.default(n),i=Me.default(r),p=Me.default(n);o!==s||i!==p?a.setState({shouldFocusDayInline:!0}):a.setState({shouldFocusDayInline:!1});}}})),ct(mt(a),"onPopperKeyDown",(function(e){"Escape"===e.key&&(e.preventDefault(),a.setState({preventFocus:!0},(function(){a.setOpen(!1),setTimeout((function(){a.setFocus(),a.setState({preventFocus:!1});}));})));})),ct(mt(a),"onClearClick",(function(e){e&&e.preventDefault&&e.preventDefault(),a.props.selectsRange?a.props.onChange([null,null],e):a.props.onChange(null,e),a.setState({inputValue:null});})),ct(mt(a),"clear",(function(){a.onClearClick();})),ct(mt(a),"onScroll",(function(e){"boolean"==typeof a.props.closeOnScroll&&a.props.closeOnScroll?e.target!==document&&e.target!==document.documentElement&&e.target!==document.body||a.setOpen(!1):"function"==typeof a.props.closeOnScroll&&a.props.closeOnScroll(e)&&a.setOpen(!1);})),ct(mt(a),"renderCalendar",(function(){return a.props.inline||a.isCalendarOpen()?ae.default.createElement(Br,{ref:function(e){a.calendar=e;},locale:a.props.locale,calendarStartDay:a.props.calendarStartDay,chooseDayAriaLabelPrefix:a.props.chooseDayAriaLabelPrefix,disabledDayAriaLabelPrefix:a.props.disabledDayAriaLabelPrefix,weekAriaLabelPrefix:a.props.weekAriaLabelPrefix,adjustDateOnChange:a.props.adjustDateOnChange,setOpen:a.setOpen,shouldCloseOnSelect:a.props.shouldCloseOnSelect,dateFormat:a.props.dateFormatCalendar,useWeekdaysShort:a.props.useWeekdaysShort,formatWeekDay:a.props.formatWeekDay,dropdownMode:a.props.dropdownMode,selected:a.props.selected,preSelection:a.state.preSelection,onSelect:a.handleSelect,onWeekSelect:a.props.onWeekSelect,openToDate:a.props.openToDate,minDate:a.props.minDate,maxDate:a.props.maxDate,selectsStart:a.props.selectsStart,selectsEnd:a.props.selectsEnd,selectsRange:a.props.selectsRange,startDate:a.props.startDate,endDate:a.props.endDate,excludeDates:a.props.excludeDates,excludeDateIntervals:a.props.excludeDateIntervals,filterDate:a.props.filterDate,onClickOutside:a.handleCalendarClickOutside,formatWeekNumber:a.props.formatWeekNumber,highlightDates:a.state.highlightDates,includeDates:a.props.includeDates,includeDateIntervals:a.props.includeDateIntervals,includeTimes:a.props.includeTimes,injectTimes:a.props.injectTimes,inline:a.props.inline,shouldFocusDayInline:a.state.shouldFocusDayInline,peekNextMonth:a.props.peekNextMonth,showMonthDropdown:a.props.showMonthDropdown,showPreviousMonths:a.props.showPreviousMonths,useShortMonthInDropdown:a.props.useShortMonthInDropdown,showMonthYearDropdown:a.props.showMonthYearDropdown,showWeekNumbers:a.props.showWeekNumbers,showYearDropdown:a.props.showYearDropdown,withPortal:a.props.withPortal,forceShowMonthNavigation:a.props.forceShowMonthNavigation,showDisabledMonthNavigation:a.props.showDisabledMonthNavigation,scrollableYearDropdown:a.props.scrollableYearDropdown,scrollableMonthYearDropdown:a.props.scrollableMonthYearDropdown,todayButton:a.props.todayButton,weekLabel:a.props.weekLabel,outsideClickIgnoreClass:"react-datepicker-ignore-onclickoutside",fixedHeight:a.props.fixedHeight,monthsShown:a.props.monthsShown,monthSelectedIn:a.state.monthSelectedIn,onDropdownFocus:a.handleDropdownFocus,onMonthChange:a.props.onMonthChange,onYearChange:a.props.onYearChange,dayClassName:a.props.dayClassName,weekDayClassName:a.props.weekDayClassName,monthClassName:a.props.monthClassName,timeClassName:a.props.timeClassName,showTimeSelect:a.props.showTimeSelect,showTimeSelectOnly:a.props.showTimeSelectOnly,onTimeChange:a.handleTimeChange,timeFormat:a.props.timeFormat,timeIntervals:a.props.timeIntervals,minTime:a.props.minTime,maxTime:a.props.maxTime,excludeTimes:a.props.excludeTimes,filterTime:a.props.filterTime,timeCaption:a.props.timeCaption,className:a.props.calendarClassName,container:a.props.calendarContainer,yearItemNumber:a.props.yearItemNumber,yearDropdownItemNumber:a.props.yearDropdownItemNumber,previousMonthAriaLabel:a.props.previousMonthAriaLabel,previousMonthButtonLabel:a.props.previousMonthButtonLabel,nextMonthAriaLabel:a.props.nextMonthAriaLabel,nextMonthButtonLabel:a.props.nextMonthButtonLabel,previousYearAriaLabel:a.props.previousYearAriaLabel,previousYearButtonLabel:a.props.previousYearButtonLabel,nextYearAriaLabel:a.props.nextYearAriaLabel,nextYearButtonLabel:a.props.nextYearButtonLabel,timeInputLabel:a.props.timeInputLabel,disabledKeyboardNavigation:a.props.disabledKeyboardNavigation,renderCustomHeader:a.props.renderCustomHeader,popperProps:a.props.popperProps,renderDayContents:a.props.renderDayContents,onDayMouseEnter:a.props.onDayMouseEnter,onMonthMouseLeave:a.props.onMonthMouseLeave,selectsDisabledDaysInRange:a.props.selectsDisabledDaysInRange,showTimeInput:a.props.showTimeInput,showMonthYearPicker:a.props.showMonthYearPicker,showFullMonthYearPicker:a.props.showFullMonthYearPicker,showTwoColumnMonthYearPicker:a.props.showTwoColumnMonthYearPicker,showFourColumnMonthYearPicker:a.props.showFourColumnMonthYearPicker,showYearPicker:a.props.showYearPicker,showQuarterYearPicker:a.props.showQuarterYearPicker,showPopperArrow:a.props.showPopperArrow,excludeScrollbar:a.props.excludeScrollbar,handleOnKeyDown:a.props.onKeyDown,handleOnDayKeyDown:a.onDayKeyDown,isInputFocused:a.state.focused,customTimeInput:a.props.customTimeInput,setPreSelection:a.setPreSelection},a.props.children):null})),ct(mt(a),"renderDateInput",(function(){var e,t=ne.default(a.props.className,ct({},"react-datepicker-ignore-onclickoutside",a.state.open)),r=a.props.customInput||ae.default.createElement("input",{type:"text"}),n=a.props.customInputRef||"ref",o="string"==typeof a.props.value?a.props.value:"string"==typeof a.state.inputValue?a.state.inputValue:a.props.selectsRange?function(e,t,r){if(!e)return "";var a=Et(e,r),n=t?Et(t,r):"";return "".concat(a," - ").concat(n)}(a.props.startDate,a.props.endDate,a.props):Et(a.props.selected,a.props);return ae.default.cloneElement(r,(ct(e={},n,(function(e){a.input=e;})),ct(e,"value",o),ct(e,"onBlur",a.handleBlur),ct(e,"onChange",a.handleChange),ct(e,"onClick",a.onInputClick),ct(e,"onFocus",a.handleFocus),ct(e,"onKeyDown",a.onInputKeyDown),ct(e,"id",a.props.id),ct(e,"name",a.props.name),ct(e,"autoFocus",a.props.autoFocus),ct(e,"placeholder",a.props.placeholderText),ct(e,"disabled",a.props.disabled),ct(e,"autoComplete",a.props.autoComplete),ct(e,"className",ne.default(r.props.className,t)),ct(e,"title",a.props.title),ct(e,"readOnly",a.props.readOnly),ct(e,"required",a.props.required),ct(e,"tabIndex",a.props.tabIndex),ct(e,"aria-describedby",a.props.ariaDescribedBy),ct(e,"aria-invalid",a.props.ariaInvalid),ct(e,"aria-labelledby",a.props.ariaLabelledBy),ct(e,"aria-required",a.props.ariaRequired),e))})),ct(mt(a),"renderClearButton",(function(){var e=a.props,t=e.isClearable,r=e.selected,n=e.startDate,o=e.endDate,s=e.clearButtonTitle,i=e.clearButtonClassName,p=void 0===i?"":i,l=e.ariaLabelClose,c=void 0===l?"Close":l;return !t||null==r&&null==n&&null==o?null:ae.default.createElement("button",{type:"button",className:"react-datepicker__close-icon ".concat(p).trim(),"aria-label":c,onClick:a.onClearClick,title:s,tabIndex:-1})})),a.state=a.calcInitialState(),a}return lt(r,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.onScroll,!0);}},{key:"componentDidUpdate",value:function(e,t){var r,a;e.inline&&(r=e.selected,a=this.props.selected,r&&a?Se.default(r)!==Se.default(a)||Me.default(r)!==Me.default(a):r!==a)&&this.setPreSelection(this.props.selected),void 0!==this.state.monthSelectedIn&&e.monthsShown!==this.props.monthsShown&&this.setState({monthSelectedIn:0}),e.highlightDates!==this.props.highlightDates&&this.setState({highlightDates:dr(this.props.highlightDates)}),t.focused||Kt(e.selected,this.props.selected)||this.setState({inputValue:null}),t.open!==this.state.open&&(!1===t.open&&!0===this.state.open&&this.props.onCalendarOpen(),!0===t.open&&!1===this.state.open&&this.props.onCalendarClose());}},{key:"componentWillUnmount",value:function(){this.clearPreventFocusTimeout(),window.removeEventListener("scroll",this.onScroll,!0);}},{key:"renderInputContainer",value:function(){return ae.default.createElement("div",{className:"react-datepicker__input-container"},this.renderDateInput(),this.renderClearButton())}},{key:"render",value:function(){var e=this.renderCalendar();if(this.props.inline)return e;if(this.props.withPortal){var t=this.state.open?ae.default.createElement("div",{className:"react-datepicker__portal"},e):null;return this.state.open&&this.props.portalId&&(t=ae.default.createElement(Rr,{portalId:this.props.portalId,portalHost:this.props.portalHost},t)),ae.default.createElement("div",null,this.renderInputContainer(),t)}return ae.default.createElement(qr,{className:this.props.popperClassName,wrapperClassName:this.props.wrapperClassName,hidePopper:!this.isCalendarOpen(),portalId:this.props.portalId,portalHost:this.props.portalHost,popperModifiers:this.props.popperModifiers,targetComponent:this.renderInputContainer(),popperContainer:this.props.popperContainer,popperComponent:e,popperPlacement:this.props.popperPlacement,popperProps:this.props.popperProps,popperOnKeyDown:this.onPopperKeyDown,enableTabLoop:this.props.enableTabLoop})}}],[{key:"defaultProps",get:function(){return {allowSameDay:!1,dateFormat:"MM/dd/yyyy",dateFormatCalendar:"LLLL yyyy",onChange:function(){},disabled:!1,disabledKeyboardNavigation:!1,dropdownMode:"scroll",onFocus:function(){},onBlur:function(){},onKeyDown:function(){},onInputClick:function(){},onSelect:function(){},onClickOutside:function(){},onMonthChange:function(){},onCalendarOpen:function(){},onCalendarClose:function(){},preventOpenOnFocus:!1,onYearChange:function(){},onInputError:function(){},monthsShown:1,readOnly:!1,withPortal:!1,selectsDisabledDaysInRange:!1,shouldCloseOnSelect:!0,showTimeSelect:!1,showTimeInput:!1,showPreviousMonths:!1,showMonthYearPicker:!1,showFullMonthYearPicker:!1,showTwoColumnMonthYearPicker:!1,showFourColumnMonthYearPicker:!1,showYearPicker:!1,showQuarterYearPicker:!1,strictParsing:!1,timeIntervals:30,timeCaption:"Time",previousMonthAriaLabel:"Previous Month",previousMonthButtonLabel:"Previous Month",nextMonthAriaLabel:"Next Month",nextMonthButtonLabel:"Next Month",previousYearAriaLabel:"Previous Year",previousYearButtonLabel:"Previous Year",nextYearAriaLabel:"Next Year",nextYearButtonLabel:"Next Year",timeInputLabel:"Time",enableTabLoop:!0,yearItemNumber:12,renderDayContents:function(e){return e},focusSelectedMonth:!1,showPopperArrow:!0,excludeScrollbar:!0,customTimeInput:null,calendarStartDay:void 0}}}]),r}(),Wr="input",jr="navigate";dist.CalendarContainer=Ir,_default = dist.default=Kr,dist.getDefaultLocale=jt,dist.registerLocale=function(e,t){var r="undefined"!=typeof window?window:globalThis;r.__localeData__||(r.__localeData__={}),r.__localeData__[e]=t;},dist.setDefaultLocale=function(e){("undefined"!=typeof window?window:globalThis).__localeId__=e;};

var DEFAULT_DATE_FORMAT = 'DD/MM/YYYY';
var SUPPORTED_DATE_FORMATS = [
    'DD/MM/YYYY',
    'D/M/YYYY',
    'DD.MM.YYYY',
    'DD.MM.YY',
    'D.M.YYYY',
    'D.M.YY',
    'DD. MM. YYYY',
    'DD. MM. YY',
    'D. M. YYYY',
    'D. M. YY',
    'DD MMM YYYY',
    'DD-MM-YY',
    'DD-MM-YYYY',
    'DD/MM/YY',
    'MMM DD YYYY',
    'MMMM DD YYYY',
    'DD MMM YY',
    'DD MMMM YYYY',
    'DD MMMM YY',
    'YYYY-MM-DDTHH:mm:ss.SSSZ',
    'YYYY-MM-DDTHH:mm:ssZ',
    'YYYY-MM-DDTHH:mm:ss',
    'YYYY-MM-DD',
];
function toDate(value) {
    var regex = RegExp('^([0-1]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$');
    if (typeof value === 'string' && regex.test(value)) {
        var newDate = new Date();
        newDate.setHours(parseInt(value.split(':')[0]));
        newDate.setMinutes(parseInt(value.split(':')[1]));
        value = newDate;
    }
    var momentObject = createMomentFromValue(value);
    if (momentObject.isValid()) {
        return momentObject.toDate();
    }
    return undefined;
}
function isValidDate(value) {
    return createMomentFromValue(value).isValid();
}
function resetTime(date) {
    return createMomentFromValue(date).startOf('day');
}
function createMomentFromValue(value) {
    moment__default["default"].locale('en-gb');
    // examples for supported formats https://jsfiddle.net/johnhornsby/sL0y3pcm/
    return moment__default["default"](value, SUPPORTED_DATE_FORMATS, 'L', true);
}

var BaseThirdPartyCalendarStyle = createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n@charset \"UTF-8\";\n.react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-year-read-view--down-arrow, .react-datepicker__navigation-icon::before {\n  border-color: #ccc;\n  border-style: solid;\n  border-width: 3px 3px 0 0;\n  content: \"\";\n  display: block;\n  height: 9px;\n  position: absolute;\n  top: 6px;\n  width: 9px;\n}\n.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle {\n  margin-left: -4px;\n  position: absolute;\n  width: 0;\n}\n.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::after, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after {\n  box-sizing: content-box;\n  position: absolute;\n  border: 8px solid transparent;\n  height: 0;\n  width: 1px;\n  content: \"\";\n  z-index: -1;\n  border-width: 8px;\n  left: -8px;\n}\n.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before {\n  border-bottom-color: #aeaeae;\n}\n\n.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle {\n  top: 0;\n  margin-top: -8px;\n}\n.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after {\n  border-top: none;\n  border-bottom-color: #f0f0f0;\n}\n.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after {\n  top: 0;\n}\n.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before {\n  top: -1px;\n  border-bottom-color: #aeaeae;\n}\n\n.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle {\n  bottom: 0;\n  margin-bottom: -8px;\n}\n.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::after {\n  border-bottom: none;\n  border-top-color: #fff;\n}\n.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::after {\n  bottom: 0;\n}\n.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::before {\n  bottom: -1px;\n  border-top-color: #aeaeae;\n}\n\n.react-datepicker-wrapper {\n  display: inline-block;\n  padding: 0;\n  border: 0;\n  width: 100%;\n}\n\n.react-datepicker {\n  font-family: \"Helvetica Neue\", helvetica, arial, sans-serif;\n  font-size: 0.8rem;\n  background-color: #fff;\n  color: #000;\n  border: 1px solid #aeaeae;\n  border-radius: 0.3rem;\n  display: inline-block;\n  position: relative;\n}\n\n.react-datepicker--time-only .react-datepicker__triangle {\n  left: 35px;\n}\n.react-datepicker--time-only .react-datepicker__time-container {\n  border-left: 0;\n}\n.react-datepicker--time-only .react-datepicker__time,\n.react-datepicker--time-only .react-datepicker__time-box {\n  border-bottom-left-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n}\n\n.react-datepicker__triangle {\n  position: absolute;\n  left: 50px;\n}\n\n.react-datepicker-popper {\n  z-index: 1;\n}\n.react-datepicker-popper[data-placement^=bottom] {\n  padding-top: 10px;\n}\n.react-datepicker-popper[data-placement=bottom-end] .react-datepicker__triangle, .react-datepicker-popper[data-placement=top-end] .react-datepicker__triangle {\n  left: auto;\n  right: 50px;\n}\n.react-datepicker-popper[data-placement^=top] {\n  padding-bottom: 10px;\n}\n.react-datepicker-popper[data-placement^=right] {\n  padding-left: 8px;\n}\n.react-datepicker-popper[data-placement^=right] .react-datepicker__triangle {\n  left: auto;\n  right: 42px;\n}\n.react-datepicker-popper[data-placement^=left] {\n  padding-right: 8px;\n}\n.react-datepicker-popper[data-placement^=left] .react-datepicker__triangle {\n  left: 42px;\n  right: auto;\n}\n\n.react-datepicker__header {\n  text-align: center;\n  background-color: #f0f0f0;\n  border-bottom: 1px solid #aeaeae;\n  border-top-left-radius: 0.3rem;\n  padding: 8px 0;\n  position: relative;\n}\n.react-datepicker__header--time {\n  padding-bottom: 8px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.react-datepicker__header--time:not(.react-datepicker__header--time--only) {\n  border-top-left-radius: 0;\n}\n.react-datepicker__header:not(.react-datepicker__header--has-time-select) {\n  border-top-right-radius: 0.3rem;\n}\n\n.react-datepicker__year-dropdown-container--select,\n.react-datepicker__month-dropdown-container--select,\n.react-datepicker__month-year-dropdown-container--select,\n.react-datepicker__year-dropdown-container--scroll,\n.react-datepicker__month-dropdown-container--scroll,\n.react-datepicker__month-year-dropdown-container--scroll {\n  display: inline-block;\n  margin: 0 2px;\n}\n\n.react-datepicker__current-month,\n.react-datepicker-time__header,\n.react-datepicker-year-header {\n  margin-top: 0;\n  color: #000;\n  font-weight: bold;\n  font-size: 0.944rem;\n}\n\n.react-datepicker-time__header {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.react-datepicker__navigation {\n  align-items: center;\n  background: none;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  cursor: pointer;\n  position: absolute;\n  top: 2px;\n  padding: 0;\n  border: none;\n  z-index: 1;\n  height: 32px;\n  width: 32px;\n  text-indent: -999em;\n  overflow: hidden;\n}\n.react-datepicker__navigation--previous {\n  left: 2px;\n}\n.react-datepicker__navigation--next {\n  right: 2px;\n}\n.react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {\n  right: 85px;\n}\n.react-datepicker__navigation--years {\n  position: relative;\n  top: 0;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.react-datepicker__navigation--years-previous {\n  top: 4px;\n}\n.react-datepicker__navigation--years-upcoming {\n  top: -4px;\n}\n.react-datepicker__navigation:hover *::before {\n  border-color: #a6a6a6;\n}\n\n.react-datepicker__navigation-icon {\n  position: relative;\n  top: -1px;\n  font-size: 20px;\n  width: 0;\n}\n.react-datepicker__navigation-icon--next {\n  left: -2px;\n}\n.react-datepicker__navigation-icon--next::before {\n  transform: rotate(45deg);\n  left: -7px;\n}\n.react-datepicker__navigation-icon--previous {\n  right: -2px;\n}\n.react-datepicker__navigation-icon--previous::before {\n  transform: rotate(225deg);\n  right: -7px;\n}\n\n.react-datepicker__month-container {\n  float: left;\n}\n\n.react-datepicker__year {\n  margin: 0.4rem;\n  text-align: center;\n}\n.react-datepicker__year-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 180px;\n}\n.react-datepicker__year .react-datepicker__year-text {\n  display: inline-block;\n  width: 4rem;\n  margin: 2px;\n}\n\n.react-datepicker__month {\n  margin: 0.4rem;\n  text-align: center;\n}\n.react-datepicker__month .react-datepicker__month-text,\n.react-datepicker__month .react-datepicker__quarter-text {\n  display: inline-block;\n  width: 4rem;\n  margin: 2px;\n}\n\n.react-datepicker__input-time-container {\n  clear: both;\n  width: 100%;\n  float: left;\n  margin: 5px 0 10px 15px;\n  text-align: left;\n}\n.react-datepicker__input-time-container .react-datepicker-time__caption {\n  display: inline-block;\n}\n.react-datepicker__input-time-container .react-datepicker-time__input-container {\n  display: inline-block;\n}\n.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input {\n  display: inline-block;\n  margin-left: 10px;\n}\n.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input {\n  width: auto;\n}\n.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type=time]::-webkit-inner-spin-button,\n.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type=time]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type=time] {\n  -moz-appearance: textfield;\n}\n.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__delimiter {\n  margin-left: 5px;\n  display: inline-block;\n}\n\n.react-datepicker__time-container {\n  float: right;\n  border-left: 1px solid #aeaeae;\n  width: 85px;\n}\n.react-datepicker__time-container--with-today-button {\n  display: inline;\n  border: 1px solid #aeaeae;\n  border-radius: 0.3rem;\n  position: absolute;\n  right: -72px;\n  top: 0;\n}\n.react-datepicker__time-container .react-datepicker__time {\n  position: relative;\n  background: white;\n  border-bottom-right-radius: 0.3rem;\n}\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {\n  width: 85px;\n  overflow-x: hidden;\n  margin: 0 auto;\n  text-align: center;\n  border-bottom-right-radius: 0.3rem;\n}\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {\n  list-style: none;\n  margin: 0;\n  height: calc(195px + (1.7rem / 2));\n  overflow-y: scroll;\n  padding-right: 0;\n  padding-left: 0;\n  width: 100%;\n  box-sizing: content-box;\n}\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {\n  height: 30px;\n  padding: 5px 10px;\n  white-space: nowrap;\n}\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {\n  cursor: pointer;\n  background-color: #f0f0f0;\n}\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {\n  background-color: #216ba5;\n  color: white;\n  font-weight: bold;\n}\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover {\n  background-color: #216ba5;\n}\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled {\n  color: #ccc;\n}\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled:hover {\n  cursor: default;\n  background-color: transparent;\n}\n\n.react-datepicker__week-number {\n  color: #ccc;\n  display: inline-block;\n  width: 1.7rem;\n  line-height: 1.7rem;\n  text-align: center;\n  margin: 0.166rem;\n}\n.react-datepicker__week-number.react-datepicker__week-number--clickable {\n  cursor: pointer;\n}\n.react-datepicker__week-number.react-datepicker__week-number--clickable:hover {\n  border-radius: 0.3rem;\n  background-color: #f0f0f0;\n}\n\n.react-datepicker__day-names,\n.react-datepicker__week {\n  white-space: nowrap;\n}\n\n.react-datepicker__day-names {\n  margin-bottom: -8px;\n}\n\n.react-datepicker__day-name,\n.react-datepicker__day,\n.react-datepicker__time-name {\n  color: #000;\n  display: inline-block;\n  width: 1.7rem;\n  line-height: 1.7rem;\n  text-align: center;\n  margin: 0.166rem;\n}\n\n.react-datepicker__month--selected, .react-datepicker__month--in-selecting-range, .react-datepicker__month--in-range,\n.react-datepicker__quarter--selected,\n.react-datepicker__quarter--in-selecting-range,\n.react-datepicker__quarter--in-range {\n  border-radius: 0.3rem;\n  background-color: #216ba5;\n  color: #fff;\n}\n.react-datepicker__month--selected:hover, .react-datepicker__month--in-selecting-range:hover, .react-datepicker__month--in-range:hover,\n.react-datepicker__quarter--selected:hover,\n.react-datepicker__quarter--in-selecting-range:hover,\n.react-datepicker__quarter--in-range:hover {\n  background-color: #1d5d90;\n}\n.react-datepicker__month--disabled,\n.react-datepicker__quarter--disabled {\n  color: #ccc;\n  pointer-events: none;\n}\n.react-datepicker__month--disabled:hover,\n.react-datepicker__quarter--disabled:hover {\n  cursor: default;\n  background-color: transparent;\n}\n\n.react-datepicker__day,\n.react-datepicker__month-text,\n.react-datepicker__quarter-text,\n.react-datepicker__year-text {\n  cursor: pointer;\n}\n.react-datepicker__day:hover,\n.react-datepicker__month-text:hover,\n.react-datepicker__quarter-text:hover,\n.react-datepicker__year-text:hover {\n  border-radius: 0.3rem;\n  background-color: #f0f0f0;\n}\n.react-datepicker__day--today,\n.react-datepicker__month-text--today,\n.react-datepicker__quarter-text--today,\n.react-datepicker__year-text--today {\n  font-weight: bold;\n}\n.react-datepicker__day--highlighted,\n.react-datepicker__month-text--highlighted,\n.react-datepicker__quarter-text--highlighted,\n.react-datepicker__year-text--highlighted {\n  border-radius: 0.3rem;\n  background-color: #3dcc4a;\n  color: #fff;\n}\n.react-datepicker__day--highlighted:hover,\n.react-datepicker__month-text--highlighted:hover,\n.react-datepicker__quarter-text--highlighted:hover,\n.react-datepicker__year-text--highlighted:hover {\n  background-color: #32be3f;\n}\n.react-datepicker__day--highlighted-custom-1,\n.react-datepicker__month-text--highlighted-custom-1,\n.react-datepicker__quarter-text--highlighted-custom-1,\n.react-datepicker__year-text--highlighted-custom-1 {\n  color: magenta;\n}\n.react-datepicker__day--highlighted-custom-2,\n.react-datepicker__month-text--highlighted-custom-2,\n.react-datepicker__quarter-text--highlighted-custom-2,\n.react-datepicker__year-text--highlighted-custom-2 {\n  color: green;\n}\n.react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range,\n.react-datepicker__month-text--selected,\n.react-datepicker__month-text--in-selecting-range,\n.react-datepicker__month-text--in-range,\n.react-datepicker__quarter-text--selected,\n.react-datepicker__quarter-text--in-selecting-range,\n.react-datepicker__quarter-text--in-range,\n.react-datepicker__year-text--selected,\n.react-datepicker__year-text--in-selecting-range,\n.react-datepicker__year-text--in-range {\n  border-radius: 0.3rem;\n  background-color: #216ba5;\n  color: #fff;\n}\n.react-datepicker__day--selected:hover, .react-datepicker__day--in-selecting-range:hover, .react-datepicker__day--in-range:hover,\n.react-datepicker__month-text--selected:hover,\n.react-datepicker__month-text--in-selecting-range:hover,\n.react-datepicker__month-text--in-range:hover,\n.react-datepicker__quarter-text--selected:hover,\n.react-datepicker__quarter-text--in-selecting-range:hover,\n.react-datepicker__quarter-text--in-range:hover,\n.react-datepicker__year-text--selected:hover,\n.react-datepicker__year-text--in-selecting-range:hover,\n.react-datepicker__year-text--in-range:hover {\n  background-color: #1d5d90;\n}\n.react-datepicker__day--keyboard-selected,\n.react-datepicker__month-text--keyboard-selected,\n.react-datepicker__quarter-text--keyboard-selected,\n.react-datepicker__year-text--keyboard-selected {\n  border-radius: 0.3rem;\n  background-color: #2579ba;\n  color: #fff;\n}\n.react-datepicker__day--keyboard-selected:hover,\n.react-datepicker__month-text--keyboard-selected:hover,\n.react-datepicker__quarter-text--keyboard-selected:hover,\n.react-datepicker__year-text--keyboard-selected:hover {\n  background-color: #1d5d90;\n}\n.react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range,\n.react-datepicker__month-text--in-range,\n.react-datepicker__quarter-text--in-range,\n.react-datepicker__year-text--in-range),\n.react-datepicker__month-text--in-selecting-range:not(.react-datepicker__day--in-range,\n.react-datepicker__month-text--in-range,\n.react-datepicker__quarter-text--in-range,\n.react-datepicker__year-text--in-range),\n.react-datepicker__quarter-text--in-selecting-range:not(.react-datepicker__day--in-range,\n.react-datepicker__month-text--in-range,\n.react-datepicker__quarter-text--in-range,\n.react-datepicker__year-text--in-range),\n.react-datepicker__year-text--in-selecting-range:not(.react-datepicker__day--in-range,\n.react-datepicker__month-text--in-range,\n.react-datepicker__quarter-text--in-range,\n.react-datepicker__year-text--in-range) {\n  background-color: rgba(33, 107, 165, 0.5);\n}\n.react-datepicker__month--selecting-range .react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range,\n.react-datepicker__month-text--in-selecting-range,\n.react-datepicker__quarter-text--in-selecting-range,\n.react-datepicker__year-text--in-selecting-range),\n.react-datepicker__month--selecting-range .react-datepicker__month-text--in-range:not(.react-datepicker__day--in-selecting-range,\n.react-datepicker__month-text--in-selecting-range,\n.react-datepicker__quarter-text--in-selecting-range,\n.react-datepicker__year-text--in-selecting-range),\n.react-datepicker__month--selecting-range .react-datepicker__quarter-text--in-range:not(.react-datepicker__day--in-selecting-range,\n.react-datepicker__month-text--in-selecting-range,\n.react-datepicker__quarter-text--in-selecting-range,\n.react-datepicker__year-text--in-selecting-range),\n.react-datepicker__month--selecting-range .react-datepicker__year-text--in-range:not(.react-datepicker__day--in-selecting-range,\n.react-datepicker__month-text--in-selecting-range,\n.react-datepicker__quarter-text--in-selecting-range,\n.react-datepicker__year-text--in-selecting-range) {\n  background-color: #f0f0f0;\n  color: #000;\n}\n.react-datepicker__day--disabled,\n.react-datepicker__month-text--disabled,\n.react-datepicker__quarter-text--disabled,\n.react-datepicker__year-text--disabled {\n  cursor: default;\n  color: #ccc;\n}\n.react-datepicker__day--disabled:hover,\n.react-datepicker__month-text--disabled:hover,\n.react-datepicker__quarter-text--disabled:hover,\n.react-datepicker__year-text--disabled:hover {\n  background-color: transparent;\n}\n\n.react-datepicker__month-text.react-datepicker__month--selected:hover, .react-datepicker__month-text.react-datepicker__month--in-range:hover, .react-datepicker__month-text.react-datepicker__quarter--selected:hover, .react-datepicker__month-text.react-datepicker__quarter--in-range:hover,\n.react-datepicker__quarter-text.react-datepicker__month--selected:hover,\n.react-datepicker__quarter-text.react-datepicker__month--in-range:hover,\n.react-datepicker__quarter-text.react-datepicker__quarter--selected:hover,\n.react-datepicker__quarter-text.react-datepicker__quarter--in-range:hover {\n  background-color: #216ba5;\n}\n.react-datepicker__month-text:hover,\n.react-datepicker__quarter-text:hover {\n  background-color: #f0f0f0;\n}\n\n.react-datepicker__input-container {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n}\n\n.react-datepicker__year-read-view,\n.react-datepicker__month-read-view,\n.react-datepicker__month-year-read-view {\n  border: 1px solid transparent;\n  border-radius: 0.3rem;\n  position: relative;\n}\n.react-datepicker__year-read-view:hover,\n.react-datepicker__month-read-view:hover,\n.react-datepicker__month-year-read-view:hover {\n  cursor: pointer;\n}\n.react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-year-read-view:hover .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-year-read-view:hover .react-datepicker__month-read-view--down-arrow {\n  border-top-color: #b3b3b3;\n}\n.react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-year-read-view--down-arrow {\n  transform: rotate(135deg);\n  right: -16px;\n  top: 0;\n}\n\n.react-datepicker__year-dropdown,\n.react-datepicker__month-dropdown,\n.react-datepicker__month-year-dropdown {\n  background-color: #f0f0f0;\n  position: absolute;\n  width: 50%;\n  left: 25%;\n  top: 30px;\n  z-index: 1;\n  text-align: center;\n  border-radius: 0.3rem;\n  border: 1px solid #aeaeae;\n}\n.react-datepicker__year-dropdown:hover,\n.react-datepicker__month-dropdown:hover,\n.react-datepicker__month-year-dropdown:hover {\n  cursor: pointer;\n}\n.react-datepicker__year-dropdown--scrollable,\n.react-datepicker__month-dropdown--scrollable,\n.react-datepicker__month-year-dropdown--scrollable {\n  height: 150px;\n  overflow-y: scroll;\n}\n\n.react-datepicker__year-option,\n.react-datepicker__month-option,\n.react-datepicker__month-year-option {\n  line-height: 20px;\n  width: 100%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.react-datepicker__year-option:first-of-type,\n.react-datepicker__month-option:first-of-type,\n.react-datepicker__month-year-option:first-of-type {\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem;\n}\n.react-datepicker__year-option:last-of-type,\n.react-datepicker__month-option:last-of-type,\n.react-datepicker__month-year-option:last-of-type {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border-bottom-left-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n}\n.react-datepicker__year-option:hover,\n.react-datepicker__month-option:hover,\n.react-datepicker__month-year-option:hover {\n  background-color: #ccc;\n}\n.react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming,\n.react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming,\n.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-upcoming {\n  border-bottom-color: #b3b3b3;\n}\n.react-datepicker__year-option:hover .react-datepicker__navigation--years-previous,\n.react-datepicker__month-option:hover .react-datepicker__navigation--years-previous,\n.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-previous {\n  border-top-color: #b3b3b3;\n}\n.react-datepicker__year-option--selected,\n.react-datepicker__month-option--selected,\n.react-datepicker__month-year-option--selected {\n  position: absolute;\n  left: 15px;\n}\n\n.react-datepicker__close-icon {\n  cursor: pointer;\n  background-color: transparent;\n  border: 0;\n  outline: 0;\n  padding: 0 6px 0 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  display: table-cell;\n  vertical-align: middle;\n}\n.react-datepicker__close-icon::after {\n  cursor: pointer;\n  background-color: #216ba5;\n  color: #fff;\n  border-radius: 50%;\n  height: 16px;\n  width: 16px;\n  padding: 2px;\n  font-size: 12px;\n  line-height: 1;\n  text-align: center;\n  display: table-cell;\n  vertical-align: middle;\n  content: \"\u00D7\";\n}\n\n.react-datepicker__today-button {\n  background: #f0f0f0;\n  border-top: 1px solid #aeaeae;\n  cursor: pointer;\n  text-align: center;\n  font-weight: bold;\n  padding: 5px 0;\n  clear: left;\n}\n\n.react-datepicker__portal {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.8);\n  left: 0;\n  top: 0;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  z-index: 2147483647;\n}\n.react-datepicker__portal .react-datepicker__day-name,\n.react-datepicker__portal .react-datepicker__day,\n.react-datepicker__portal .react-datepicker__time-name {\n  width: 3rem;\n  line-height: 3rem;\n}\n@media (max-width: 400px), (max-height: 550px) {\n  .react-datepicker__portal .react-datepicker__day-name,\n.react-datepicker__portal .react-datepicker__day,\n.react-datepicker__portal .react-datepicker__time-name {\n    width: 2rem;\n    line-height: 2rem;\n  }\n}\n.react-datepicker__portal .react-datepicker__current-month,\n.react-datepicker__portal .react-datepicker-time__header {\n  font-size: 1.44rem;\n}\n\n"], ["\n@charset \"UTF-8\";\n.react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-year-read-view--down-arrow, .react-datepicker__navigation-icon::before {\n  border-color: #ccc;\n  border-style: solid;\n  border-width: 3px 3px 0 0;\n  content: \"\";\n  display: block;\n  height: 9px;\n  position: absolute;\n  top: 6px;\n  width: 9px;\n}\n.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle {\n  margin-left: -4px;\n  position: absolute;\n  width: 0;\n}\n.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::after, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after {\n  box-sizing: content-box;\n  position: absolute;\n  border: 8px solid transparent;\n  height: 0;\n  width: 1px;\n  content: \"\";\n  z-index: -1;\n  border-width: 8px;\n  left: -8px;\n}\n.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before {\n  border-bottom-color: #aeaeae;\n}\n\n.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle {\n  top: 0;\n  margin-top: -8px;\n}\n.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after {\n  border-top: none;\n  border-bottom-color: #f0f0f0;\n}\n.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after {\n  top: 0;\n}\n.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before {\n  top: -1px;\n  border-bottom-color: #aeaeae;\n}\n\n.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle {\n  bottom: 0;\n  margin-bottom: -8px;\n}\n.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::after {\n  border-bottom: none;\n  border-top-color: #fff;\n}\n.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::after {\n  bottom: 0;\n}\n.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::before {\n  bottom: -1px;\n  border-top-color: #aeaeae;\n}\n\n.react-datepicker-wrapper {\n  display: inline-block;\n  padding: 0;\n  border: 0;\n  width: 100%;\n}\n\n.react-datepicker {\n  font-family: \"Helvetica Neue\", helvetica, arial, sans-serif;\n  font-size: 0.8rem;\n  background-color: #fff;\n  color: #000;\n  border: 1px solid #aeaeae;\n  border-radius: 0.3rem;\n  display: inline-block;\n  position: relative;\n}\n\n.react-datepicker--time-only .react-datepicker__triangle {\n  left: 35px;\n}\n.react-datepicker--time-only .react-datepicker__time-container {\n  border-left: 0;\n}\n.react-datepicker--time-only .react-datepicker__time,\n.react-datepicker--time-only .react-datepicker__time-box {\n  border-bottom-left-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n}\n\n.react-datepicker__triangle {\n  position: absolute;\n  left: 50px;\n}\n\n.react-datepicker-popper {\n  z-index: 1;\n}\n.react-datepicker-popper[data-placement^=bottom] {\n  padding-top: 10px;\n}\n.react-datepicker-popper[data-placement=bottom-end] .react-datepicker__triangle, .react-datepicker-popper[data-placement=top-end] .react-datepicker__triangle {\n  left: auto;\n  right: 50px;\n}\n.react-datepicker-popper[data-placement^=top] {\n  padding-bottom: 10px;\n}\n.react-datepicker-popper[data-placement^=right] {\n  padding-left: 8px;\n}\n.react-datepicker-popper[data-placement^=right] .react-datepicker__triangle {\n  left: auto;\n  right: 42px;\n}\n.react-datepicker-popper[data-placement^=left] {\n  padding-right: 8px;\n}\n.react-datepicker-popper[data-placement^=left] .react-datepicker__triangle {\n  left: 42px;\n  right: auto;\n}\n\n.react-datepicker__header {\n  text-align: center;\n  background-color: #f0f0f0;\n  border-bottom: 1px solid #aeaeae;\n  border-top-left-radius: 0.3rem;\n  padding: 8px 0;\n  position: relative;\n}\n.react-datepicker__header--time {\n  padding-bottom: 8px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.react-datepicker__header--time:not(.react-datepicker__header--time--only) {\n  border-top-left-radius: 0;\n}\n.react-datepicker__header:not(.react-datepicker__header--has-time-select) {\n  border-top-right-radius: 0.3rem;\n}\n\n.react-datepicker__year-dropdown-container--select,\n.react-datepicker__month-dropdown-container--select,\n.react-datepicker__month-year-dropdown-container--select,\n.react-datepicker__year-dropdown-container--scroll,\n.react-datepicker__month-dropdown-container--scroll,\n.react-datepicker__month-year-dropdown-container--scroll {\n  display: inline-block;\n  margin: 0 2px;\n}\n\n.react-datepicker__current-month,\n.react-datepicker-time__header,\n.react-datepicker-year-header {\n  margin-top: 0;\n  color: #000;\n  font-weight: bold;\n  font-size: 0.944rem;\n}\n\n.react-datepicker-time__header {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.react-datepicker__navigation {\n  align-items: center;\n  background: none;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  cursor: pointer;\n  position: absolute;\n  top: 2px;\n  padding: 0;\n  border: none;\n  z-index: 1;\n  height: 32px;\n  width: 32px;\n  text-indent: -999em;\n  overflow: hidden;\n}\n.react-datepicker__navigation--previous {\n  left: 2px;\n}\n.react-datepicker__navigation--next {\n  right: 2px;\n}\n.react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {\n  right: 85px;\n}\n.react-datepicker__navigation--years {\n  position: relative;\n  top: 0;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.react-datepicker__navigation--years-previous {\n  top: 4px;\n}\n.react-datepicker__navigation--years-upcoming {\n  top: -4px;\n}\n.react-datepicker__navigation:hover *::before {\n  border-color: #a6a6a6;\n}\n\n.react-datepicker__navigation-icon {\n  position: relative;\n  top: -1px;\n  font-size: 20px;\n  width: 0;\n}\n.react-datepicker__navigation-icon--next {\n  left: -2px;\n}\n.react-datepicker__navigation-icon--next::before {\n  transform: rotate(45deg);\n  left: -7px;\n}\n.react-datepicker__navigation-icon--previous {\n  right: -2px;\n}\n.react-datepicker__navigation-icon--previous::before {\n  transform: rotate(225deg);\n  right: -7px;\n}\n\n.react-datepicker__month-container {\n  float: left;\n}\n\n.react-datepicker__year {\n  margin: 0.4rem;\n  text-align: center;\n}\n.react-datepicker__year-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 180px;\n}\n.react-datepicker__year .react-datepicker__year-text {\n  display: inline-block;\n  width: 4rem;\n  margin: 2px;\n}\n\n.react-datepicker__month {\n  margin: 0.4rem;\n  text-align: center;\n}\n.react-datepicker__month .react-datepicker__month-text,\n.react-datepicker__month .react-datepicker__quarter-text {\n  display: inline-block;\n  width: 4rem;\n  margin: 2px;\n}\n\n.react-datepicker__input-time-container {\n  clear: both;\n  width: 100%;\n  float: left;\n  margin: 5px 0 10px 15px;\n  text-align: left;\n}\n.react-datepicker__input-time-container .react-datepicker-time__caption {\n  display: inline-block;\n}\n.react-datepicker__input-time-container .react-datepicker-time__input-container {\n  display: inline-block;\n}\n.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input {\n  display: inline-block;\n  margin-left: 10px;\n}\n.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input {\n  width: auto;\n}\n.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type=time]::-webkit-inner-spin-button,\n.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type=time]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type=time] {\n  -moz-appearance: textfield;\n}\n.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__delimiter {\n  margin-left: 5px;\n  display: inline-block;\n}\n\n.react-datepicker__time-container {\n  float: right;\n  border-left: 1px solid #aeaeae;\n  width: 85px;\n}\n.react-datepicker__time-container--with-today-button {\n  display: inline;\n  border: 1px solid #aeaeae;\n  border-radius: 0.3rem;\n  position: absolute;\n  right: -72px;\n  top: 0;\n}\n.react-datepicker__time-container .react-datepicker__time {\n  position: relative;\n  background: white;\n  border-bottom-right-radius: 0.3rem;\n}\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {\n  width: 85px;\n  overflow-x: hidden;\n  margin: 0 auto;\n  text-align: center;\n  border-bottom-right-radius: 0.3rem;\n}\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {\n  list-style: none;\n  margin: 0;\n  height: calc(195px + (1.7rem / 2));\n  overflow-y: scroll;\n  padding-right: 0;\n  padding-left: 0;\n  width: 100%;\n  box-sizing: content-box;\n}\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {\n  height: 30px;\n  padding: 5px 10px;\n  white-space: nowrap;\n}\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {\n  cursor: pointer;\n  background-color: #f0f0f0;\n}\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {\n  background-color: #216ba5;\n  color: white;\n  font-weight: bold;\n}\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover {\n  background-color: #216ba5;\n}\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled {\n  color: #ccc;\n}\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled:hover {\n  cursor: default;\n  background-color: transparent;\n}\n\n.react-datepicker__week-number {\n  color: #ccc;\n  display: inline-block;\n  width: 1.7rem;\n  line-height: 1.7rem;\n  text-align: center;\n  margin: 0.166rem;\n}\n.react-datepicker__week-number.react-datepicker__week-number--clickable {\n  cursor: pointer;\n}\n.react-datepicker__week-number.react-datepicker__week-number--clickable:hover {\n  border-radius: 0.3rem;\n  background-color: #f0f0f0;\n}\n\n.react-datepicker__day-names,\n.react-datepicker__week {\n  white-space: nowrap;\n}\n\n.react-datepicker__day-names {\n  margin-bottom: -8px;\n}\n\n.react-datepicker__day-name,\n.react-datepicker__day,\n.react-datepicker__time-name {\n  color: #000;\n  display: inline-block;\n  width: 1.7rem;\n  line-height: 1.7rem;\n  text-align: center;\n  margin: 0.166rem;\n}\n\n.react-datepicker__month--selected, .react-datepicker__month--in-selecting-range, .react-datepicker__month--in-range,\n.react-datepicker__quarter--selected,\n.react-datepicker__quarter--in-selecting-range,\n.react-datepicker__quarter--in-range {\n  border-radius: 0.3rem;\n  background-color: #216ba5;\n  color: #fff;\n}\n.react-datepicker__month--selected:hover, .react-datepicker__month--in-selecting-range:hover, .react-datepicker__month--in-range:hover,\n.react-datepicker__quarter--selected:hover,\n.react-datepicker__quarter--in-selecting-range:hover,\n.react-datepicker__quarter--in-range:hover {\n  background-color: #1d5d90;\n}\n.react-datepicker__month--disabled,\n.react-datepicker__quarter--disabled {\n  color: #ccc;\n  pointer-events: none;\n}\n.react-datepicker__month--disabled:hover,\n.react-datepicker__quarter--disabled:hover {\n  cursor: default;\n  background-color: transparent;\n}\n\n.react-datepicker__day,\n.react-datepicker__month-text,\n.react-datepicker__quarter-text,\n.react-datepicker__year-text {\n  cursor: pointer;\n}\n.react-datepicker__day:hover,\n.react-datepicker__month-text:hover,\n.react-datepicker__quarter-text:hover,\n.react-datepicker__year-text:hover {\n  border-radius: 0.3rem;\n  background-color: #f0f0f0;\n}\n.react-datepicker__day--today,\n.react-datepicker__month-text--today,\n.react-datepicker__quarter-text--today,\n.react-datepicker__year-text--today {\n  font-weight: bold;\n}\n.react-datepicker__day--highlighted,\n.react-datepicker__month-text--highlighted,\n.react-datepicker__quarter-text--highlighted,\n.react-datepicker__year-text--highlighted {\n  border-radius: 0.3rem;\n  background-color: #3dcc4a;\n  color: #fff;\n}\n.react-datepicker__day--highlighted:hover,\n.react-datepicker__month-text--highlighted:hover,\n.react-datepicker__quarter-text--highlighted:hover,\n.react-datepicker__year-text--highlighted:hover {\n  background-color: #32be3f;\n}\n.react-datepicker__day--highlighted-custom-1,\n.react-datepicker__month-text--highlighted-custom-1,\n.react-datepicker__quarter-text--highlighted-custom-1,\n.react-datepicker__year-text--highlighted-custom-1 {\n  color: magenta;\n}\n.react-datepicker__day--highlighted-custom-2,\n.react-datepicker__month-text--highlighted-custom-2,\n.react-datepicker__quarter-text--highlighted-custom-2,\n.react-datepicker__year-text--highlighted-custom-2 {\n  color: green;\n}\n.react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range,\n.react-datepicker__month-text--selected,\n.react-datepicker__month-text--in-selecting-range,\n.react-datepicker__month-text--in-range,\n.react-datepicker__quarter-text--selected,\n.react-datepicker__quarter-text--in-selecting-range,\n.react-datepicker__quarter-text--in-range,\n.react-datepicker__year-text--selected,\n.react-datepicker__year-text--in-selecting-range,\n.react-datepicker__year-text--in-range {\n  border-radius: 0.3rem;\n  background-color: #216ba5;\n  color: #fff;\n}\n.react-datepicker__day--selected:hover, .react-datepicker__day--in-selecting-range:hover, .react-datepicker__day--in-range:hover,\n.react-datepicker__month-text--selected:hover,\n.react-datepicker__month-text--in-selecting-range:hover,\n.react-datepicker__month-text--in-range:hover,\n.react-datepicker__quarter-text--selected:hover,\n.react-datepicker__quarter-text--in-selecting-range:hover,\n.react-datepicker__quarter-text--in-range:hover,\n.react-datepicker__year-text--selected:hover,\n.react-datepicker__year-text--in-selecting-range:hover,\n.react-datepicker__year-text--in-range:hover {\n  background-color: #1d5d90;\n}\n.react-datepicker__day--keyboard-selected,\n.react-datepicker__month-text--keyboard-selected,\n.react-datepicker__quarter-text--keyboard-selected,\n.react-datepicker__year-text--keyboard-selected {\n  border-radius: 0.3rem;\n  background-color: #2579ba;\n  color: #fff;\n}\n.react-datepicker__day--keyboard-selected:hover,\n.react-datepicker__month-text--keyboard-selected:hover,\n.react-datepicker__quarter-text--keyboard-selected:hover,\n.react-datepicker__year-text--keyboard-selected:hover {\n  background-color: #1d5d90;\n}\n.react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range,\n.react-datepicker__month-text--in-range,\n.react-datepicker__quarter-text--in-range,\n.react-datepicker__year-text--in-range),\n.react-datepicker__month-text--in-selecting-range:not(.react-datepicker__day--in-range,\n.react-datepicker__month-text--in-range,\n.react-datepicker__quarter-text--in-range,\n.react-datepicker__year-text--in-range),\n.react-datepicker__quarter-text--in-selecting-range:not(.react-datepicker__day--in-range,\n.react-datepicker__month-text--in-range,\n.react-datepicker__quarter-text--in-range,\n.react-datepicker__year-text--in-range),\n.react-datepicker__year-text--in-selecting-range:not(.react-datepicker__day--in-range,\n.react-datepicker__month-text--in-range,\n.react-datepicker__quarter-text--in-range,\n.react-datepicker__year-text--in-range) {\n  background-color: rgba(33, 107, 165, 0.5);\n}\n.react-datepicker__month--selecting-range .react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range,\n.react-datepicker__month-text--in-selecting-range,\n.react-datepicker__quarter-text--in-selecting-range,\n.react-datepicker__year-text--in-selecting-range),\n.react-datepicker__month--selecting-range .react-datepicker__month-text--in-range:not(.react-datepicker__day--in-selecting-range,\n.react-datepicker__month-text--in-selecting-range,\n.react-datepicker__quarter-text--in-selecting-range,\n.react-datepicker__year-text--in-selecting-range),\n.react-datepicker__month--selecting-range .react-datepicker__quarter-text--in-range:not(.react-datepicker__day--in-selecting-range,\n.react-datepicker__month-text--in-selecting-range,\n.react-datepicker__quarter-text--in-selecting-range,\n.react-datepicker__year-text--in-selecting-range),\n.react-datepicker__month--selecting-range .react-datepicker__year-text--in-range:not(.react-datepicker__day--in-selecting-range,\n.react-datepicker__month-text--in-selecting-range,\n.react-datepicker__quarter-text--in-selecting-range,\n.react-datepicker__year-text--in-selecting-range) {\n  background-color: #f0f0f0;\n  color: #000;\n}\n.react-datepicker__day--disabled,\n.react-datepicker__month-text--disabled,\n.react-datepicker__quarter-text--disabled,\n.react-datepicker__year-text--disabled {\n  cursor: default;\n  color: #ccc;\n}\n.react-datepicker__day--disabled:hover,\n.react-datepicker__month-text--disabled:hover,\n.react-datepicker__quarter-text--disabled:hover,\n.react-datepicker__year-text--disabled:hover {\n  background-color: transparent;\n}\n\n.react-datepicker__month-text.react-datepicker__month--selected:hover, .react-datepicker__month-text.react-datepicker__month--in-range:hover, .react-datepicker__month-text.react-datepicker__quarter--selected:hover, .react-datepicker__month-text.react-datepicker__quarter--in-range:hover,\n.react-datepicker__quarter-text.react-datepicker__month--selected:hover,\n.react-datepicker__quarter-text.react-datepicker__month--in-range:hover,\n.react-datepicker__quarter-text.react-datepicker__quarter--selected:hover,\n.react-datepicker__quarter-text.react-datepicker__quarter--in-range:hover {\n  background-color: #216ba5;\n}\n.react-datepicker__month-text:hover,\n.react-datepicker__quarter-text:hover {\n  background-color: #f0f0f0;\n}\n\n.react-datepicker__input-container {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n}\n\n.react-datepicker__year-read-view,\n.react-datepicker__month-read-view,\n.react-datepicker__month-year-read-view {\n  border: 1px solid transparent;\n  border-radius: 0.3rem;\n  position: relative;\n}\n.react-datepicker__year-read-view:hover,\n.react-datepicker__month-read-view:hover,\n.react-datepicker__month-year-read-view:hover {\n  cursor: pointer;\n}\n.react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-year-read-view:hover .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-year-read-view:hover .react-datepicker__month-read-view--down-arrow {\n  border-top-color: #b3b3b3;\n}\n.react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-year-read-view--down-arrow {\n  transform: rotate(135deg);\n  right: -16px;\n  top: 0;\n}\n\n.react-datepicker__year-dropdown,\n.react-datepicker__month-dropdown,\n.react-datepicker__month-year-dropdown {\n  background-color: #f0f0f0;\n  position: absolute;\n  width: 50%;\n  left: 25%;\n  top: 30px;\n  z-index: 1;\n  text-align: center;\n  border-radius: 0.3rem;\n  border: 1px solid #aeaeae;\n}\n.react-datepicker__year-dropdown:hover,\n.react-datepicker__month-dropdown:hover,\n.react-datepicker__month-year-dropdown:hover {\n  cursor: pointer;\n}\n.react-datepicker__year-dropdown--scrollable,\n.react-datepicker__month-dropdown--scrollable,\n.react-datepicker__month-year-dropdown--scrollable {\n  height: 150px;\n  overflow-y: scroll;\n}\n\n.react-datepicker__year-option,\n.react-datepicker__month-option,\n.react-datepicker__month-year-option {\n  line-height: 20px;\n  width: 100%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.react-datepicker__year-option:first-of-type,\n.react-datepicker__month-option:first-of-type,\n.react-datepicker__month-year-option:first-of-type {\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem;\n}\n.react-datepicker__year-option:last-of-type,\n.react-datepicker__month-option:last-of-type,\n.react-datepicker__month-year-option:last-of-type {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border-bottom-left-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n}\n.react-datepicker__year-option:hover,\n.react-datepicker__month-option:hover,\n.react-datepicker__month-year-option:hover {\n  background-color: #ccc;\n}\n.react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming,\n.react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming,\n.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-upcoming {\n  border-bottom-color: #b3b3b3;\n}\n.react-datepicker__year-option:hover .react-datepicker__navigation--years-previous,\n.react-datepicker__month-option:hover .react-datepicker__navigation--years-previous,\n.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-previous {\n  border-top-color: #b3b3b3;\n}\n.react-datepicker__year-option--selected,\n.react-datepicker__month-option--selected,\n.react-datepicker__month-year-option--selected {\n  position: absolute;\n  left: 15px;\n}\n\n.react-datepicker__close-icon {\n  cursor: pointer;\n  background-color: transparent;\n  border: 0;\n  outline: 0;\n  padding: 0 6px 0 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  display: table-cell;\n  vertical-align: middle;\n}\n.react-datepicker__close-icon::after {\n  cursor: pointer;\n  background-color: #216ba5;\n  color: #fff;\n  border-radius: 50%;\n  height: 16px;\n  width: 16px;\n  padding: 2px;\n  font-size: 12px;\n  line-height: 1;\n  text-align: center;\n  display: table-cell;\n  vertical-align: middle;\n  content: \"\u00D7\";\n}\n\n.react-datepicker__today-button {\n  background: #f0f0f0;\n  border-top: 1px solid #aeaeae;\n  cursor: pointer;\n  text-align: center;\n  font-weight: bold;\n  padding: 5px 0;\n  clear: left;\n}\n\n.react-datepicker__portal {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.8);\n  left: 0;\n  top: 0;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  z-index: 2147483647;\n}\n.react-datepicker__portal .react-datepicker__day-name,\n.react-datepicker__portal .react-datepicker__day,\n.react-datepicker__portal .react-datepicker__time-name {\n  width: 3rem;\n  line-height: 3rem;\n}\n@media (max-width: 400px), (max-height: 550px) {\n  .react-datepicker__portal .react-datepicker__day-name,\n.react-datepicker__portal .react-datepicker__day,\n.react-datepicker__portal .react-datepicker__time-name {\n    width: 2rem;\n    line-height: 2rem;\n  }\n}\n.react-datepicker__portal .react-datepicker__current-month,\n.react-datepicker__portal .react-datepicker-time__header {\n  font-size: 1.44rem;\n}\n\n"])));
var templateObject_1;

var EasyCalendar = function (_a) {
    var model = _a.model, onChange = _a.onChange, inputName = _a.inputName, value = _a.value, maxDate = _a.maxDate, minDate = _a.minDate, required = _a.required, label = _a.label, id = _a.id, months = _a.months, unlink = _a.unlink, placeholder = _a.placeholder, className = _a.className, _b = _a.calendarProps, calendarProps = _b === void 0 ? {} : _b;
    var context = React.useContext(FormContext);
    var uuid = React.useRef(createUUID());
    var formId = unlink || !context ? null : context;
    var nameToUse = inputName ? inputName : model;
    var _c = recoil.useRecoilState(FormControlState(formId || uuid.current, model || inputName)), componentState = _c[0], setComponentState = _c[1];
    var setComponentData = useFormUpdate(formId, model);
    var error = componentState.error, internalValue = componentState.internalValue;
    var valueToUse = value || internalValue;
    var hasLoaded = React.useRef(false);
    React.useEffect(function () {
        if (model) {
            var rawValue = value;
            var date = toDate(resetTime(rawValue));
            var _a = validate(false, date), valid = _a[0]; _a[1];
            setComponentData(date, valid);
        }
    }, []);
    React.useEffect(function () {
        if (hasLoaded.current) {
            var valueDate = toDate(resetTime(value));
            var _a = validate(true, valueDate), valid = _a[0]; _a[1];
            setComponentData(value, valid);
        }
        else {
            hasLoaded.current = true;
        }
    }, [value, minDate, maxDate]);
    var setValue = function (newDate) {
        var value = newDate ? createMomentFromValue(newDate).utcOffset("+00:00", true) : undefined;
        var _a = validate(false, value), valid = _a[0], newError = _a[1];
        if (model && formId) {
            setComponentData(value, valid);
        }
        setComponentState({ error: newError, internalValue: value });
        if (onChange)
            onChange(value);
    };
    var validate = function (setState, date) {
        if (setState === void 0) { setState = true; }
        if (date === void 0) { date = null; }
        if (!date && required) {
            var error_3 = i18n('Required');
            if (setState)
                setComponentState({ error: error_3, internalValue: internalValue });
            if (setState)
                setValue(null); // force remove date, we don't get a change event if date is deleted.
            if (setState)
                setComponentData(date, false);
            return [false, error_3];
        }
        if (!isFieldValid(date)) {
            var error_4 = 'This is not a valid date';
            if (setState)
                setComponentState({ error: error_4, internalValue: internalValue });
            if (setState)
                setComponentData(date, false);
            return [false, error_4];
        }
        else if (minDate && resetTime(createMomentFromValue(date)).utcOffset("+00:00", true).isBefore(resetTime(createMomentFromValue(minDate)))) {
            var error_5 = "Date must be after: ".concat(moment__default$1["default"](minDate).format(DEFAULT_DATE_FORMAT));
            if (setState)
                setComponentState({ error: error_5, internalValue: internalValue });
            if (setState)
                setComponentData(date, false);
            return [false, error_5];
        }
        else if (maxDate && resetTime(createMomentFromValue(date)).isAfter(resetTime(createMomentFromValue(maxDate)))) {
            var error_6 = "Date must be before: ".concat(moment__default$1["default"](maxDate).format(DEFAULT_DATE_FORMAT));
            if (setState)
                setComponentState({ error: error_6, internalValue: internalValue });
            if (setState)
                setComponentData(date, false);
            return [false, error_6];
        }
        else {
            if (setState)
                setComponentState({ error: null, internalValue: internalValue });
            if (setState)
                setComponentData(date, true);
            if (setState)
                setValue(createMomentFromValue(date));
            return [true, null];
        }
    };
    var isFieldValid = function (value) {
        if (required && isValidDate(value)) {
            return true;
        }
        else if (!required && (!value || isValidDate(value))) {
            return true;
        }
        return false;
    };
    var parsedMinDate = isNullOrWhitespace(minDate) ? null : toDate(minDate);
    var parsedMaxDate = isNullOrWhitespace(maxDate) ? null : toDate(maxDate);
    var parsedValue = valueToUse ? createMomentFromValue(valueToUse) : null;
    return (React__default["default"].createElement("div", { className: className },
        React__default["default"].createElement(BaseThirdPartyCalendarStyle, null),
        React__default["default"].createElement(FormAttibuteContext.Consumer, null, function (attr) { return (React__default["default"].createElement(BaseCalendarStyle, { error: error },
            label &&
                React__default["default"].createElement(BaseLabelStyle, { className: required ? 'required' : '', htmlFor: id ? id : nameToUse }, label),
            React__default["default"].createElement(_default, __assign({ selected: parsedValue === null || parsedValue === void 0 ? void 0 : parsedValue.toDate(), className: error ? 'error' : '', onChange: setValue, onClose: setValue, dateFormat: 'dd/MM/yyyy', disabled: attr.disabled, monthsShown: months ? months : 2, minDate: parsedMinDate, maxDate: parsedMaxDate, placeholder: placeholder }, calendarProps)),
            error &&
                React__default["default"].createElement(BaseErrorMessage, null, error))); })));
};

var EasyCheckbox = function (_a) {
    var model = _a.model, onChange = _a.onChange, inputName = _a.inputName, checked = _a.checked, required = _a.required, label = _a.label, labelClass = _a.labelClass, id = _a.id, disabled = _a.disabled, unlink = _a.unlink, className = _a.className;
    var context = React.useContext(FormContext);
    var uuid = React.useRef(createUUID());
    var formId = unlink || !context ? null : context;
    var nameToUse = inputName ? inputName : model;
    var _b = recoil.useRecoilState(FormControlState(formId || uuid.current, model || inputName)), componentState = _b[0], setComponentState = _b[1];
    var setComponentData = useFormUpdate(formId, model);
    var error = componentState.error, isChecked = componentState.isChecked;
    React.useEffect(function () {
        if (formId && model) {
            var valid = required ? required && checked : true;
            setComponentData(checked, valid);
        }
        setComponentState({ isChecked: !!checked, error: error });
    }, []);
    React.useEffect(function () {
        setComponentState({ isChecked: checked, error: error });
        var valid = validate(checked);
        if (formId && model) {
            setComponentData(checked, valid);
        }
    }, [checked]);
    var validate = function (value) {
        if (required && value) {
            var error_1 = i18n('Required');
            setComponentState({ isChecked: isChecked, error: error_1 });
            return false;
        }
        else {
            setComponentState({ isChecked: isChecked, error: null });
            return true;
        }
    };
    var setValue = function (e) {
        var value = e.target.checked;
        var valid = validate(e.target.checked);
        if (model && formId) {
            setComponentData(value, valid);
        }
        if (onChange)
            onChange(e);
        setComponentState({ isChecked: value, error: error });
    };
    return (React__default["default"].createElement("div", { className: className },
        React__default["default"].createElement(FormAttibuteContext.Consumer, null, function (attr) { return (React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement("input", { type: 'checkbox', className: 'chkbx', checked: !!isChecked, name: nameToUse, id: id ? id : nameToUse, required: required, disabled: disabled || attr.disabled, onChange: function (e) { return setValue(e); } }),
            label &&
                React__default["default"].createElement("label", { htmlFor: id ? id : nameToUse, className: labelClass }, label),
            error &&
                React__default["default"].createElement(BaseErrorMessage, { className: '' }, error))); })));
};

function formatNumberToText(number, decimalPlaces) {
    if (decimalPlaces && number) {
        return number.toFixed(decimalPlaces);
    }
    else if (number === undefined || number === null || Number.isNaN(number)) {
        return '';
    }
    return String(number);
}
function cleanNumber(e, wholeNumbersOnly) {
    var allowedKeys = [
        8, 46, 37, 39, 9, 110, 109, 189, '.', '-', (UseCommaInCurrency() ? ',' : null)
    ];
    var keyVal = e.keyCode || e.charCode;
    if (!isFinite(e.key) && !allowedKeys.find(function (x) { return x == keyVal; }) && !allowedKeys.find(function (x) { return x == e.key; }))
        return e.preventDefault();
    if (e.key === '+')
        return e.preventDefault();
    if (allowedKeys.find(function (x) { return x === e.key; }) && wholeNumbersOnly)
        return e.preventDefault();
}
function isValidValue(value) {
    return !!value || value === 0;
}

var commaCurrencies = ['al', 'ad', 'ar', 'at', 'az', 'be', 'bo', 'by', 'da', 'fr', 'fx', 'de'];
function UseCommaInCurrency() {
    return commaCurrencies.find(function (x) { return x === document.documentElement.lang.toLowerCase(); });
}

var DefaultNumericMax$1 = 10000000000000000000;
var decimalPlaces = 2;
var EasyCurrencyInput = function (_a) {
    var model = _a.model, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus, inputName = _a.inputName, value = _a.value, required = _a.required, label = _a.label, id = _a.id, disabled = _a.disabled, wholeNumbersOnly = _a.wholeNumbersOnly, testingId = _a.testingId, defaultValue = _a.defaultValue, unlink = _a.unlink, validateOnLoad = _a.validateOnLoad, placeholder = _a.placeholder, min = _a.min, _b = _a.max, max = _b === void 0 ? DefaultNumericMax$1 : _b, className = _a.className;
    var context = React.useContext(FormContext);
    var uuid = React.useRef(createUUID());
    var formId = unlink || !context ? null : context;
    var nameToUse = inputName ? inputName : model;
    var _c = recoil.useRecoilState(FormControlState(formId || uuid.current, model || inputName)), componentState = _c[0], setComponentState = _c[1];
    var setComponentData = useFormUpdate(formId, model);
    var inputRef = React.useRef();
    var error = componentState.error, internalValue = componentState.internalValue;
    var valueToUse = isNullOrWhitespace(internalValue) ? '' : internalValue;
    React.useEffect(function () {
        return function () {
            setComponentData(value, true);
        };
    }, [model]);
    React.useEffect(function () {
        if (model && formId) {
            setComponentData(value, isValidValue(value) || !required);
        }
        var newValue = value;
        if (defaultValue) {
            newValue = defaultValue;
        }
        newValue = formatDisplay(parseFloat(newValue));
        setComponentState({ internalValue: newValue, error: error });
        if (validateOnLoad)
            validate(newValue);
    }, []);
    React.useEffect(function () {
        if (value == '-') {
            setComponentState({
                internalValue: value
            });
        }
        else if (!isNaN(value)) {
            if (document.activeElement !== inputRef.current) {
                setComponentState({ internalValue: formatDisplay(parseFloat(value)), error: error });
            }
            else {
                setComponentState({ internalValue: value, error: error });
            }
            if (model && formId) {
                var valid = validate(value)[0];
                setComponentData(value, valid);
            }
        }
        else {
            setComponentState({ internalValue: value, error: error });
        }
    }, [value]);
    React.useEffect(function () {
        if (!isNullOrWhitespace(internalValue)) {
            validate(internalValue);
        }
    }, [min, max]);
    var setValue = function (e, cleanNumber, blur) {
        if (cleanNumber === void 0) { cleanNumber = false; }
        if (blur === void 0) { blur = false; }
        var value = '';
        if (!isNullOrWhitespace(e.target.value)) {
            value = formatCommaNumber(e.target.value, true);
            var split = value.split(UseCommaInCurrency() ? ',' : '.');
            if (split[1] && split[1].length > decimalPlaces)
                return e.preventDefault();
            if (value != '-') {
                if (isNaN(parseFloat(value)))
                    return;
                value = parseFloat(value);
            }
            if (cleanNumber && !isNullOrWhitespace(value) && value != '-') {
                value = formatNumberToText(value, decimalPlaces);
            }
        }
        var _a = validate(value, false, true), valid = _a[0], newError = _a[1], focused = _a[2];
        if (model && formId) {
            setComponentData(value, valid);
        }
        if (onChange) {
            onChange(e, valid);
        }
        setComponentState({ internalValue: blur ? value : e.target.value, error: focused ? error : newError });
    };
    var formatCommaNumber = function (value, output) {
        if (output === void 0) { output = false; }
        if (isNullOrWhitespace(value))
            return '';
        if (UseCommaInCurrency()) {
            return output ? value.toString().replace(',', '.') : value.toString().replace('.', ',');
        }
        return value;
    };
    var validate = function (value, blur, passthrough) {
        if (blur === void 0) { blur = false; }
        if (passthrough === void 0) { passthrough = false; }
        // Essentially we don't want the page jumping around when the user is typing
        // This checks if our input is focused, if so clear errors until they finish typing
        var focused = false;
        if (document.activeElement === inputRef.current) {
            focused = isNullOrWhitespace(error) && !blur;
        }
        var preventStateSet = passthrough || focused;
        if (!isValidValue(value) && required) {
            var error_1 = i18n('The value entered must be numeric');
            if (!preventStateSet)
                setComponentState({ error: error_1, internalValue: internalValue });
            return [false, error_1, focused];
        }
        else if (isNaN(Number(value))) {
            var error_2 = i18n('The value entered must be numeric');
            if (!preventStateSet)
                setComponentState({ error: error_2, internalValue: internalValue });
            return [false, error_2, focused];
        }
        else if ((min || min === 0) && Number(value) < min) {
            var error_3 = i18n('The number entered must be greater than or equal to ') + String(min);
            if (!preventStateSet)
                setComponentState({ error: error_3, internalValue: internalValue });
            return [false, error_3, focused];
        }
        else if ((max || max === 0) && Number(value) > max) {
            var error_4 = i18n('The number entered must be less than or equal to ') + String(max);
            if (!preventStateSet)
                setComponentState({ error: error_4, internalValue: internalValue });
            return [false, error_4, focused];
        }
        else {
            if (!preventStateSet)
                setComponentState({ error: null, internalValue: internalValue });
            return [true, null, focused];
        }
    };
    var formatDisplay = function (value) {
        return formatNumberToText(value, decimalPlaces);
    };
    return (React__default["default"].createElement("div", { className: className },
        React__default["default"].createElement(FormAttibuteContext.Consumer, null, function (attr) { return (React__default["default"].createElement(React__default["default"].Fragment, null,
            label &&
                React__default["default"].createElement(BaseLabelStyle, { className: required ? 'required' : '', htmlFor: id ? id : nameToUse }, label),
            React__default["default"].createElement(BaseInputStyle, { type: 'text', className: error ? 'error' : '', name: nameToUse, id: id ? id : nameToUse, value: formatCommaNumber(valueToUse), disabled: disabled || attr.disabled, "data-e2e-id": testingId ? testingId : (id ? id : nameToUse), required: required, ref: inputRef, onKeyDown: function (e) { return cleanNumber(e, wholeNumbersOnly); }, onChange: function (e) { return setValue(e); }, onFocus: function (e) { return onFocus ? onFocus(e) : null; }, placeholder: placeholder, onBlur: function (e) { setValue(e, true, true); if (onBlur)
                    onBlur(); } }),
            error &&
                React__default["default"].createElement(BaseErrorMessage, { className: 'error-message' }, error))); })));
};

var DefaultNumericMax = 10000000000000000000;
var EasyNumberInput = function (_a) {
    var model = _a.model, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus, inputName = _a.inputName, value = _a.value, required = _a.required, label = _a.label, id = _a.id, decimalPlaces = _a.decimalPlaces, min = _a.min, _b = _a.max, max = _b === void 0 ? DefaultNumericMax : _b, disabled = _a.disabled, wholeNumbersOnly = _a.wholeNumbersOnly, testingId = _a.testingId, defaultValue = _a.defaultValue, unlink = _a.unlink, validateOnLoad = _a.validateOnLoad, placeholder = _a.placeholder, className = _a.className;
    var context = React.useContext(FormContext);
    var uuid = React.useRef(createUUID());
    var formId = unlink || !context ? null : context;
    var nameToUse = inputName ? inputName : model;
    var _c = recoil.useRecoilState(FormControlState(formId || uuid.current, model || inputName)), componentState = _c[0], setComponentState = _c[1];
    var setComponentData = useFormUpdate(formId, model);
    var inputRef = React.useRef();
    var mounted = React.useRef(false);
    var error = componentState.error, internalValue = componentState.internalValue;
    var valueToUse = isNullOrWhitespace(internalValue) ? '' : internalValue;
    React.useEffect(function () {
        return function () {
            if (mounted.current)
                setComponentData(value, true);
        };
    }, [model]);
    React.useEffect(function () {
        if (model && formId) {
            setComponentData(value, isValidValue(value) || !required);
        }
        var newValue = value;
        if (defaultValue) {
            newValue = defaultValue;
        }
        newValue = formatDisplay(parseFloat(newValue));
        setComponentState({ internalValue: newValue, error: error });
        if (validateOnLoad)
            validate(newValue);
        mounted.current = true;
    }, []);
    React.useEffect(function () {
        if (mounted.current) {
            if (value == '-') {
                setComponentState({
                    internalValue: value
                });
            }
            else if (!isNaN(value)) {
                if (document.activeElement !== inputRef.current) {
                    setComponentState({ internalValue: formatDisplay(parseFloat(value)), error: error });
                }
                else {
                    setComponentState({ internalValue: value, error: error });
                }
                if (model && formId) {
                    var valid = validate(value)[0];
                    setComponentData(value, valid);
                }
            }
            else {
                setComponentState({ internalValue: value, error: error });
            }
        }
    }, [value]);
    React.useEffect(function () {
        if (mounted.current && !isNullOrWhitespace(internalValue)) {
            validate(internalValue);
        }
    }, [min, max]);
    var setValue = function (e, cleanNumber, blur) {
        if (cleanNumber === void 0) { cleanNumber = false; }
        if (blur === void 0) { blur = false; }
        var value = e.target.value;
        if (!isNullOrWhitespace(e.target.value)) {
            if (decimalPlaces) {
                var split = value.split(UseCommaInCurrency() ? ',' : '.');
                if (split[1] && split[1].length > decimalPlaces)
                    return e.preventDefault();
            }
            if (value != '-') {
                if (isNaN(parseFloat(value)))
                    return;
                value = parseFloat(value);
            }
            if (cleanNumber && !isNullOrWhitespace(value) && value != '-') {
                value = formatNumberToText(value, decimalPlaces);
            }
        }
        var _a = validate(value, false, true), valid = _a[0], newError = _a[1], focused = _a[2];
        if (model && formId) {
            setComponentData(value, valid);
        }
        if (onChange) {
            onChange(e, valid);
        }
        setComponentState({ internalValue: blur ? value : e.target.value, error: focused ? error : newError });
    };
    var validate = function (value, blur, passthrough) {
        if (blur === void 0) { blur = false; }
        if (passthrough === void 0) { passthrough = false; }
        // Essentially we don't want the page jumping around when the user is typing
        // This checks if our input is focused, if so clear errors until they finish typing
        var focused = false;
        if (document.activeElement === inputRef.current) {
            focused = isNullOrWhitespace(error) && !blur;
        }
        var preventStateSet = passthrough || focused;
        if (!isValidValue(value) && required) {
            var error_1 = i18n('The value entered must be numeric');
            if (!preventStateSet)
                setComponentState({ error: error_1, internalValue: value });
            return [false, error_1, focused];
        }
        else if (isNaN(Number(value))) {
            var error_2 = i18n('The value entered must be numeric');
            if (!preventStateSet)
                setComponentState({ error: error_2, internalValue: value });
            return [false, error_2, focused];
        }
        else if ((min || min === 0) && Number(value) < min) {
            var error_3 = i18n('The number entered must be greater than or equal to ') + String(min);
            if (!preventStateSet)
                setComponentState({ error: error_3, internalValue: value });
            return [false, error_3, focused];
        }
        else if ((max || max === 0) && Number(value) > max) {
            var error_4 = i18n('The number entered must be less than or equal to ') + String(max);
            if (!preventStateSet)
                setComponentState({ error: error_4, internalValue: value });
            return [false, error_4, focused];
        }
        else {
            if (!preventStateSet)
                setComponentState({ error: null, internalValue: value });
            return [true, null, focused];
        }
    };
    var formatDisplay = function (value) {
        if (decimalPlaces) {
            return formatNumberToText(value, decimalPlaces);
        }
        else if (value === undefined || value === null || Number.isNaN(value)) {
            return '';
        }
        return value;
    };
    return (React__default["default"].createElement("div", { className: className },
        React__default["default"].createElement(FormAttibuteContext.Consumer, null, function (attr) { return (React__default["default"].createElement(React__default["default"].Fragment, null,
            label &&
                React__default["default"].createElement(BaseLabelStyle, { className: required ? 'required' : '', htmlFor: id ? id : nameToUse }, label),
            React__default["default"].createElement(BaseInputStyle, { type: 'number', className: error ? 'error' : '', name: nameToUse, id: id ? id : nameToUse, value: valueToUse, disabled: disabled || attr.disabled, "data-e2e-id": testingId ? testingId : (id ? id : nameToUse), required: required, ref: inputRef, onKeyDown: function (e) { return cleanNumber(e, wholeNumbersOnly); }, onChange: function (e) { return setValue(e); }, onFocus: function (e) { return onFocus ? onFocus(e) : null; }, placeholder: placeholder, onBlur: function (e) { setValue(e, true, true); if (onBlur)
                    onBlur(); } }),
            error &&
                React__default["default"].createElement(BaseErrorMessage, { className: '' }, error))); })));
};

var EasyRadioInput = function (_a) {
    var model = _a.model, onChange = _a.onChange, checked = _a.checked, required = _a.required, label = _a.label, id = _a.id, value = _a.value, unlink = _a.unlink, inputName = _a.inputName, className = _a.className;
    var context = React.useContext(FormContext);
    var uuid = React.useRef(createUUID());
    var formId = unlink || !context ? null : context;
    var nameToUse = inputName ? inputName : model;
    var _b = recoil.useRecoilState(FormControlState(formId || uuid.current, model || inputName)), componentState = _b[0], setComponentState = _b[1];
    var setComponentData = useFormUpdate(formId, model);
    var error = componentState.error, isChecked = componentState.isChecked;
    React.useEffect(function () {
        if (formId && model) {
            var valid = required ? checked : true;
            setComponentData(checked, valid);
        }
        setComponentState({ isChecked: !!checked, error: error });
    }, []);
    React.useEffect(function () {
        setComponentState({ isChecked: checked, error: error });
        if (formId && model) {
            setComponentData(checked, true);
        }
    }, [checked]);
    var setValue = function (e) {
        if (model && formId)
            setComponentData(e.target.value, true);
        if (onChange)
            onChange(e);
        setComponentState({ isChecked: e.target.checked });
    };
    return (React__default["default"].createElement("div", { className: className },
        React__default["default"].createElement(FormAttibuteContext.Consumer, null, function (attr) { return (React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement("input", { type: 'radio', checked: isChecked, name: nameToUse, id: id, disabled: attr.disabled, required: required, onChange: function (e) { return setValue(e); }, value: value }),
            label &&
                React__default["default"].createElement("label", { htmlFor: id }, label),
            error &&
                React__default["default"].createElement(BaseErrorMessage, { className: '' }, error))); })));
};

var EasyTextArea = function (_a) {
    var model = _a.model, onChange = _a.onChange, inputName = _a.inputName, value = _a.value, required = _a.required, rows = _a.rows, label = _a.label, id = _a.id, placeholder = _a.placeholder, disabled = _a.disabled, maxLength = _a.maxLength, minLength = _a.minLength, unlink = _a.unlink, testingId = _a.testingId, className = _a.className;
    var context = React.useContext(FormContext);
    var uuid = React.useRef(createUUID());
    var formId = unlink || !context ? null : context;
    var nameToUse = inputName ? inputName : model;
    var _b = recoil.useRecoilState(FormControlState(formId || uuid.current, model || inputName)), componentState = _b[0], setComponentState = _b[1];
    var setComponentData = useFormUpdate(formId, model);
    var error = componentState.error, internalValue = componentState.internalValue;
    var valueToUse = isNullOrWhitespace(internalValue) ? '' : internalValue;
    var _c = React.useState(false), mounted = _c[0], setMounted = _c[1];
    React.useEffect(function () {
        var _a = validate(value, mounted), valid = _a[0]; _a[1];
        if (model && formId)
            setComponentData(value, valid);
        setComponentState({ internalValue: value, error: error });
        if (!mounted)
            setMounted(true);
    }, [value]);
    var setValue = function (e) {
        var _a = validate(e.target.value, false), valid = _a[0], newError = _a[1];
        if (model && formId)
            setComponentData(e.target.value, valid);
        if (onChange)
            onChange(e);
        setComponentState({ internalValue: e.target.value, error: newError });
    };
    var validate = function (value, setState) {
        if (setState === void 0) { setState = true; }
        if (!value && required) {
            var error_1 = i18n('Required');
            if (setState)
                setComponentState({ error: error_1, internalValue: internalValue });
            return [false, error_1];
        }
        else if (value && minLength && value.length < minLength) {
            var error_2 = i18n('Minimum number of characters is ') + minLength.toString();
            if (setState)
                setComponentState({ error: error_2, internalValue: internalValue });
            return [false, error_2];
        }
        else if (value && maxLength && value.length > maxLength) {
            var error_3 = i18n('Maximum number of characters is ') + maxLength.toString();
            if (setState)
                setComponentState({ error: error_3, internalValue: internalValue });
            return [false, error_3];
        }
        else {
            if (setState)
                setComponentState({ error: null, internalValue: internalValue });
            return [true, null];
        }
    };
    return (React__default["default"].createElement("div", { className: className },
        React__default["default"].createElement(FormAttibuteContext.Consumer, null, function (attr) { return (React__default["default"].createElement(React__default["default"].Fragment, null,
            label &&
                React__default["default"].createElement(BaseLabelStyle, { className: required ? 'required' : '', htmlFor: id ? id : nameToUse }, label),
            React__default["default"].createElement(BaseTextareaStyle, { error: error, name: nameToUse, id: id ? id : nameToUse, className: error ? 'error' : '', value: valueToUse, required: required, disabled: disabled || attr.disabled, rows: rows, placeholder: placeholder, autoComplete: 'off', "data-e2e-id": testingId ? testingId : (id ? id : nameToUse), onBlur: function (e) { return validate(e.target.value); }, onChange: function (e) { return setValue(e); } }),
            error &&
                React__default["default"].createElement(BaseErrorMessage, null, error))); })));
};

var EasyTextInput = function (_a) {
    var model = _a.model, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus, inputName = _a.inputName, value = _a.value, required = _a.required, label = _a.label, id = _a.id, disabled = _a.disabled, testingId = _a.testingId, defaultValue = _a.defaultValue, unlink = _a.unlink, validateOnLoad = _a.validateOnLoad, placeholder = _a.placeholder, className = _a.className, items = _a.items, defaultText = _a.defaultText, _b = _a.addDefault, addDefault = _b === void 0 ? true : _b;
    var context = React.useContext(FormContext);
    var uuid = React.useRef(createUUID());
    var formId = unlink || !context ? null : context;
    var nameToUse = inputName ? inputName : model;
    var _c = recoil.useRecoilState(FormControlState(formId || uuid.current, model || inputName)), componentState = _c[0], setComponentState = _c[1];
    var setComponentData = useFormUpdate(formId, model);
    var mounted = React.useRef(false);
    var error = componentState.error, internalValue = componentState.internalValue;
    var valueToUse = isNullOrWhitespace(internalValue) ? '' : internalValue;
    React.useEffect(function () {
        return function () {
            if (mounted.current)
                setComponentData(value, true);
        };
    }, [model]);
    React.useEffect(function () {
        if (model && formId) {
            setComponentData(value, isValid(value) || !required);
        }
        var newValue = value;
        if (defaultValue) {
            newValue = defaultValue;
        }
        setComponentState({ internalValue: newValue, error: error });
        if (validateOnLoad)
            validate(value);
        mounted.current = true;
    }, []);
    React.useEffect(function () {
        if (!valueMatches(internalValue, value) && mounted.current) {
            setComponentState({ internalValue: value, error: error });
            if (model && formId) {
                var _a = validate(value), valid = _a[0]; _a[1];
                setComponentData(value, valid);
            }
        }
    }, [value]);
    var valueMatches = function (val1, val2) {
        val1 = val1 === null || val1 === void 0 ? void 0 : val1.toString();
        val2 = val2 === null || val2 === void 0 ? void 0 : val2.toString();
        return (val1 === null || val1 === void 0 ? void 0 : val1.toLowerCase()) === (val2 === null || val2 === void 0 ? void 0 : val2.toLowerCase());
    };
    var isValid = function (value) {
        return !(value == null || value == undefined || value == '');
    };
    var setValue = function (e) {
        var value = e.target.value;
        var _a = validate(value), valid = _a[0], newError = _a[1];
        if (model && formId)
            setComponentData(value, valid);
        if (onChange)
            onChange(e, valid);
        setComponentState({ internalValue: value, error: newError });
    };
    var validate = function (value) {
        if (!isValid(value) && required) {
            var error_1 = i18n('Required');
            setComponentState({ error: error_1, internalValue: value });
            return [false, error_1];
        }
        else {
            setComponentState({ error: null, internalValue: value });
            return [true, null];
        }
    };
    return (React__default["default"].createElement("div", { className: className },
        React__default["default"].createElement(FormAttibuteContext.Consumer, null, function (attr) { return (React__default["default"].createElement(React__default["default"].Fragment, null,
            label &&
                React__default["default"].createElement(BaseLabelStyle, { className: required ? 'required' : '', htmlFor: id ? id : nameToUse }, label),
            React__default["default"].createElement(BaseSelectStyle, { className: error ? 'error' : '', name: nameToUse, id: id ? id : nameToUse, value: valueToUse, required: required, disabled: disabled || attr.disabled, "data-e2e-id": testingId ? testingId : (id ? id : nameToUse), onBlur: function (e) { setValue(e); if (onBlur)
                    onBlur(e); }, onFocus: function (e) { return onFocus ? onFocus(e) : null; }, placeholder: placeholder, onChange: function (e) { return setValue(e); } },
                addDefault &&
                    React__default["default"].createElement("option", { value: '' }, defaultText ? defaultText : 'Please Select'),
                items && items.map(function (item, index) {
                    if (item.value !== null && item.value !== undefined)
                        return (React__default["default"].createElement("option", { key: "".concat(item.value, "-").concat(index), value: item.value }, item.text === undefined || item.text === null ? item.value : item.text));
                })),
            error &&
                React__default["default"].createElement(BaseErrorMessage, { className: 'error-message' }, error))); })));
};

exports.EasyCalendar = EasyCalendar;
exports.EasyCheckbox = EasyCheckbox;
exports.EasyCurrencyInput = EasyCurrencyInput;
exports.EasyDropdown = EasyTextInput;
exports.EasyFormConsumer = EasyFormConsumer;
exports.EasyFormWrapper = FormWrapper;
exports.EasyNumberInput = EasyNumberInput;
exports.EasyRadioInput = EasyRadioInput;
exports.EasyTextInput = EasyTextInput$1;
exports.EasyTextarea = EasyTextArea;
//# sourceMappingURL=index.js.map
