import {
  require_react_dom
} from "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/react-fast-compare/index.js
var require_react_fast_compare = __commonJS({
  "node_modules/react-fast-compare/index.js"(exports, module) {
    var hasElementType = typeof Element !== "undefined";
    var hasMap = typeof Map === "function";
    var hasSet = typeof Set === "function";
    var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
    function equal(a, b) {
      if (a === b)
        return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor)
          return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i]))
              return false;
          return true;
        }
        var it;
        if (hasMap && a instanceof Map && b instanceof Map) {
          if (a.size !== b.size)
            return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!b.has(i.value[0]))
              return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!equal(i.value[1], b.get(i.value[0])))
              return false;
          return true;
        }
        if (hasSet && a instanceof Set && b instanceof Set) {
          if (a.size !== b.size)
            return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!b.has(i.value[0]))
              return false;
          return true;
        }
        if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (a[i] !== b[i])
              return false;
          return true;
        }
        if (a.constructor === RegExp)
          return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === "function" && typeof b.valueOf === "function")
          return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString && typeof a.toString === "function" && typeof b.toString === "function")
          return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
            return false;
        if (hasElementType && a instanceof Element)
          return false;
        for (i = length; i-- !== 0; ) {
          if ((keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") && a.$$typeof) {
            continue;
          }
          if (!equal(a[keys[i]], b[keys[i]]))
            return false;
        }
        return true;
      }
      return a !== a && b !== b;
    }
    module.exports = function isEqual3(a, b) {
      try {
        return equal(a, b);
      } catch (error) {
        if ((error.message || "").match(/stack|recursion/i)) {
          console.warn("react-fast-compare cannot handle circular refs");
          return false;
        }
        throw error;
      }
    };
  }
});

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
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
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal2 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
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
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal2;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values2, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values2, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement7, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement7(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement7(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/@shopify/polaris/build/esm/components/AppProvider/AppProvider.js
var import_react19 = __toESM(require_react());

// node_modules/@shopify/polaris-tokens/dist/esm/_virtual/_rollupPluginBabelHelpers.mjs
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@shopify/polaris-tokens/dist/esm/src/utilities.mjs
var _templateObject;
var BASE_FONT_SIZE = 16;
var UNIT_PX = "px";
var UNIT_EM = "em";
var UNIT_REM = "rem";
var DIGIT_REGEX = new RegExp(String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["-?d+(?:.d+|d*)"], ["-?\\d+(?:\\.\\d+|\\d*)"]))));
var UNIT_REGEX = new RegExp("".concat(UNIT_PX, "|").concat(UNIT_EM, "|").concat(UNIT_REM));
function getUnit() {
  var value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  var unit = value.match(new RegExp("".concat(DIGIT_REGEX.source, "(").concat(UNIT_REGEX.source, ")")));
  return unit && unit[1];
}
function toPx() {
  var value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  var unit = getUnit(value);
  if (!unit)
    return value;
  if (unit === UNIT_PX) {
    return value;
  }
  if (unit === UNIT_EM || unit === UNIT_REM) {
    return "".concat(parseFloat(value) * BASE_FONT_SIZE).concat(UNIT_PX);
  }
}
function toEm() {
  var value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  var fontSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : BASE_FONT_SIZE;
  var unit = getUnit(value);
  if (!unit)
    return value;
  if (unit === UNIT_EM) {
    return value;
  }
  if (unit === UNIT_PX) {
    return "".concat(parseFloat(value) / fontSize).concat(UNIT_EM);
  }
  if (unit === UNIT_REM) {
    return "".concat(parseFloat(value) * BASE_FONT_SIZE / fontSize).concat(UNIT_EM);
  }
}
function toRem() {
  var value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  var unit = getUnit(value);
  if (!unit)
    return value;
  if (unit === UNIT_REM) {
    return value;
  }
  if (unit === UNIT_EM) {
    return "".concat(parseFloat(value)).concat(UNIT_REM);
  }
  if (unit === UNIT_PX) {
    return "".concat(parseFloat(value) / BASE_FONT_SIZE).concat(UNIT_REM);
  }
}
function rem(value) {
  return value.replace(new RegExp("".concat(DIGIT_REGEX.source, "(").concat(UNIT_PX, ")"), "g"), function(px) {
    var _toRem;
    return (_toRem = toRem(px)) !== null && _toRem !== void 0 ? _toRem : px;
  });
}
function tokensToRems(tokenGroup) {
  return Object.fromEntries(
    Object.entries(tokenGroup).map(function(_ref) {
      var _ref2 = _slicedToArray(_ref, 2), token = _ref2[0], properties = _ref2[1];
      return [token, _objectSpread2(_objectSpread2({}, properties), {}, {
        value: rem(properties.value)
      })];
    })
    // We loose the `tokenGroup` inference after transforming the object with
    // `Object.fromEntries()` and `Object.entries()`. Thus, we cast the result
    // back to `T` since we are simply converting the `value` from px to rem.
  );
}
function getMediaConditions(breakpoints3) {
  var breakpointEntries = Object.entries(breakpoints3);
  var lastBreakpointIndex = breakpointEntries.length - 1;
  return Object.fromEntries(breakpointEntries.map(function(entry, index) {
    var _ref7 = entry, _ref8 = _slicedToArray(_ref7, 2), breakpointsTokenName = _ref8[0], breakpoint = _ref8[1];
    var upMediaCondition = getUpMediaCondition(breakpoint);
    var downMediaCondition = getDownMediaCondition(breakpoint);
    var onlyMediaCondition = index === lastBreakpointIndex ? upMediaCondition : "".concat(upMediaCondition, " and ").concat(getDownMediaCondition(breakpointEntries[index + 1][1]));
    return [breakpointsTokenName, {
      // Media condition for the current breakpoint and up
      up: upMediaCondition,
      // Media condition for current breakpoint and down
      down: downMediaCondition,
      // Media condition for only the current breakpoint
      only: onlyMediaCondition
    }];
  }));
}
function getUpMediaCondition(breakpoint) {
  return "(min-width: ".concat(toEm(breakpoint), ")");
}
function getDownMediaCondition(breakpoint) {
  var _toPx;
  var offsetBreakpoint = parseFloat((_toPx = toPx(breakpoint)) !== null && _toPx !== void 0 ? _toPx : "") - 0.04;
  return "(max-width: ".concat(toEm("".concat(offsetBreakpoint, "px")), ")");
}

// node_modules/@shopify/polaris-tokens/dist/esm/src/token-groups/breakpoints.mjs
var breakpoints = {
  "breakpoints-xs": {
    value: "0px",
    description: "Commonly used for sizing containers (e.g. max-width). See below for media query usage."
  },
  "breakpoints-sm": {
    value: "490px",
    description: "Commonly used for sizing containers (e.g. max-width). See below for media query usage."
  },
  "breakpoints-md": {
    value: "768px",
    description: "Commonly used for sizing containers (e.g. max-width). See below for media query usage."
  },
  "breakpoints-lg": {
    value: "1040px",
    description: "Commonly used for sizing containers (e.g. max-width). See below for media query usage."
  },
  "breakpoints-xl": {
    value: "1440px",
    description: "Commonly used for sizing containers (e.g. max-width). See below for media query usage."
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/token-groups/border.mjs
var border = {
  "border-radius-05": {
    value: "2px"
  },
  "border-radius-1": {
    value: "4px"
  },
  "border-radius-2": {
    value: "8px"
  },
  "border-radius-3": {
    value: "12px"
  },
  "border-radius-4": {
    value: "16px"
  },
  "border-radius-5": {
    value: "20px"
  },
  "border-radius-6": {
    value: "30px"
  },
  "border-radius-full": {
    value: "9999px"
  },
  "border-width-1": {
    value: "1px"
  },
  "border-width-2": {
    value: "2px"
  },
  "border-width-3": {
    value: "3px"
  },
  "border-width-4": {
    value: "4px"
  },
  "border-width-5": {
    value: "5px"
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/token-groups/depth.mjs
var depth = {
  "shadow-transparent": {
    value: "0 0 0 0 transparent"
  },
  "shadow-faint": {
    value: "0 1px 0 0 rgba(22, 29, 37, 0.05)"
  },
  "shadow-base": {
    value: "0 0 0 1px rgba(63, 63, 68, 0.05), 0 1px 3px 0 rgba(63, 63, 68, 0.15)"
  },
  "shadow-deep": {
    value: "0 0 0 1px rgba(6, 44, 82, 0.1), 0 2px 16px rgba(33, 43, 54, 0.08)"
  },
  "shadow-button": {
    value: "0 1px 0 rgba(0, 0, 0, 0.05)"
  },
  "shadow-top-bar": {
    value: "0 2px 2px -1px rgba(0, 0, 0, 0.15)"
  },
  "shadow-card": {
    value: "0 0 5px rgba(23, 24, 24, 0.05), 0 1px 2px rgba(0, 0, 0, 0.15)"
  },
  "shadow-popover": {
    value: "0 3px 6px -3px rgba(23, 24, 24, 0.08), 0 8px 20px -4px rgba(23, 24, 24, 0.12)"
  },
  "shadow-layer": {
    value: "0 31px 41px 0 rgba(32, 42, 53, 0.2), 0 2px 16px 0 rgba(32, 42, 54, 0.08)"
  },
  "shadow-modal": {
    value: "0 26px 80px rgba(0, 0, 0, 0.2), 0 0px 1px rgba(0, 0, 0, 0.2)"
  },
  "shadows-inset-button": {
    value: "inset 0 -1px 0 rgba(0, 0, 0, 0.2)"
  },
  "shadows-inset-button-pressed": {
    value: "inset 0 1px 0 rgba(0, 0, 0, 0.15)"
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/token-groups/font.mjs
var font = {
  "font-family-sans": {
    value: "-apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
  },
  "font-family-mono": {
    value: "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
  },
  "font-size-75": {
    value: "12px"
  },
  "font-size-100": {
    value: "14px"
  },
  "font-size-200": {
    value: "16px"
  },
  "font-size-300": {
    value: "20px"
  },
  "font-size-400": {
    value: "24px"
  },
  "font-size-500": {
    value: "28px"
  },
  "font-size-600": {
    value: "32px"
  },
  "font-size-700": {
    value: "40px"
  },
  "font-weight-regular": {
    value: "400"
  },
  "font-weight-medium": {
    value: "500"
  },
  "font-weight-semibold": {
    value: "600"
  },
  "font-weight-bold": {
    value: "700"
  },
  "font-line-height-1": {
    value: "16px"
  },
  "font-line-height-2": {
    value: "20px"
  },
  "font-line-height-3": {
    value: "24px"
  },
  "font-line-height-4": {
    value: "28px"
  },
  "font-line-height-5": {
    value: "32px"
  },
  "font-line-height-6": {
    value: "40px"
  },
  "font-line-height-7": {
    value: "48px"
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/token-groups/legacy.mjs
var legacy = {
  "override-loading-z-index": {
    value: "514"
  },
  "choice-size": {
    value: "20px"
  },
  "icon-size-small": {
    value: "8px"
  },
  "icon-size-medium": {
    value: "20px"
  },
  "choice-margin": {
    value: "1px"
  },
  "control-border-width": {
    value: "2px"
  },
  "banner-border-default": {
    value: "inset 0 1px 0 0 var(--p-color-border-strong), inset 0 0 0 1px var(--p-color-border-strong)"
  },
  "banner-border-success": {
    value: "inset 0 1px 0 0 var(--p-color-border-success-subdued), inset 0 0 0 1px var(--p-color-border-success-subdued)"
  },
  "banner-border-highlight": {
    value: "inset 0 1px 0 0 var(--p-color-border-info-subdued), inset 0 0 0 1px var(--p-color-border-info-subdued)"
  },
  "banner-border-warning": {
    value: "inset 0 1px 0 0 var(--p-color-border-caution-subdued), inset 0 0 0 1px var(--p-color-border-caution-subdued)"
  },
  "banner-border-critical": {
    value: "inset 0 1px 0 0 var(--p-color-border-critical-subdued), inset 0 0 0 1px var(--p-color-border-critical-subdued)"
  },
  "thin-border-subdued": {
    value: "1px solid var(--p-color-border-subdued)"
  },
  "text-field-spinner-offset": {
    value: "2px"
  },
  "text-field-focus-ring-offset": {
    value: "-4px"
  },
  "button-group-item-spacing": {
    value: "-1px"
  },
  "range-slider-thumb-size-base": {
    value: "16px"
  },
  "range-slider-thumb-size-active": {
    value: "24px"
  },
  "frame-offset": {
    value: "0px"
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/colors.mjs
var gray = {
  50: "rgba(255, 255, 255, 1)",
  100: "rgba(249, 250, 251, 1)",
  200: "rgba(241, 242, 244, 1)",
  300: "rgba(235, 236, 239, 1)",
  400: "rgba(221, 224, 228, 1)",
  500: "rgba(202, 206, 211, 1)",
  600: "rgba(171, 177, 186, 1)",
  700: "rgba(135, 144, 155, 1)",
  800: "rgba(97, 106, 117, 1)",
  900: "rgba(31, 33, 36, 1)"
};
var green = {
  50: "rgba(240, 253, 248, 1)",
  100: "rgba(224, 248, 238, 1)",
  200: "rgba(192, 242, 221, 1)",
  300: "rgba(161, 237, 208, 1)",
  400: "rgba(80, 220, 169, 1)",
  500: "rgba(35, 196, 140, 1)",
  600: "rgba(22, 166, 121, 1)",
  700: "rgba(0, 122, 92, 1)",
  800: "rgba(18, 84, 67, 1)",
  900: "rgba(12, 59, 47, 1)"
};
var blue = {
  50: "rgba(240, 245, 253, 1)",
  100: "rgba(232, 240, 253, 1)",
  200: "rgba(187, 212, 247, 1)",
  300: "rgba(147, 186, 241, 1)",
  400: "rgba(102, 153, 225, 1)",
  500: "rgba(62, 125, 213, 1)",
  600: "rgba(36, 99, 188, 1)",
  700: "rgba(20, 73, 149, 1)",
  800: "rgba(14, 53, 108, 1)",
  900: "rgba(16, 41, 76, 1)"
};
var red = {
  50: "rgba(254, 243, 241, 1)",
  100: "rgba(253, 226, 221, 1)",
  200: "rgba(251, 197, 188, 1)",
  300: "rgba(247, 148, 130, 1)",
  400: "rgba(245, 107, 82, 1)",
  500: "rgba(242, 65, 34, 1)",
  600: "rgba(197, 40, 12, 1)",
  700: "rgba(159, 32, 10, 1)",
  800: "rgba(115, 24, 7, 1)",
  900: "rgba(67, 14, 4, 1)"
};
var yellow = {
  50: "rgba(254, 248, 236, 1)",
  100: "rgba(252, 240, 212, 1)",
  200: "rgba(250, 229, 178, 1)",
  300: "rgba(248, 217, 144, 1)",
  400: "rgba(245, 196, 82, 1)",
  500: "rgba(242, 179, 34, 1)",
  600: "rgba(216, 155, 13, 1)",
  700: "rgba(183, 126, 11, 1)",
  800: "rgba(135, 92, 8, 1)",
  900: "rgba(77, 46, 5, 1)"
};
var teal = {
  50: "rgba(238, 250, 251, 1)",
  100: "rgba(222, 245, 247, 1)",
  200: "rgba(184, 233, 239, 1)",
  300: "rgba(147, 222, 231, 1)",
  400: "rgba(109, 211, 222, 1)",
  500: "rgba(59, 195, 211, 1)",
  600: "rgba(42, 172, 187, 1)",
  700: "rgba(32, 130, 141, 1)",
  800: "rgba(23, 92, 100, 1)",
  900: "rgba(16, 65, 71, 1)"
};
var orange = {
  50: "rgba(254, 243, 236, 1)",
  100: "rgba(253, 231, 217, 1)",
  200: "rgba(250, 201, 168, 1)",
  300: "rgba(247, 177, 130, 1)",
  400: "rgba(245, 147, 82, 1)",
  500: "rgba(242, 117, 34, 1)",
  600: "rgba(216, 101, 13, 1)",
  700: "rgba(164, 76, 10, 1)",
  800: "rgba(111, 52, 7, 1)",
  900: "rgba(77, 36, 5, 1)"
};
var purple = {
  50: "rgba(242, 237, 253, 1)",
  100: "rgba(236, 227, 253, 1)",
  200: "rgba(226, 214, 250, 1)",
  300: "rgba(203, 180, 248, 1)",
  400: "rgba(173, 139, 241, 1)",
  500: "rgba(121, 69, 227, 1)",
  600: "rgba(90, 36, 205, 1)",
  700: "rgba(67, 21, 158, 1)",
  800: "rgba(49, 13, 120, 1)",
  900: "rgba(36, 8, 73, 1)"
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/token-groups/color.mjs
var color = {
  "color-bg-inverse": {
    value: gray[900],
    description: ""
  },
  "color-bg-inset-strong": {
    value: gray[800],
    description: ""
  },
  "color-bg-inverse-hover": {
    value: gray[800],
    description: ""
  },
  "color-bg-inverse-active": {
    value: gray[700],
    description: ""
  },
  "color-bg-strong-hover": {
    value: gray[500],
    description: ""
  },
  "color-bg-strong-active": {
    value: gray[500],
    description: ""
  },
  "color-bg-strong": {
    value: gray[400],
    description: ""
  },
  "color-bg-subdued-active": {
    value: gray[300],
    description: ""
  },
  "color-bg-disabled": {
    value: gray[300],
    description: ""
  },
  "color-bg-interactive-disabled": {
    value: gray[300],
    description: ""
  },
  "color-bg-app": {
    value: gray[200],
    description: ""
  },
  "color-bg-app-active": {
    value: gray[400],
    description: ""
  },
  "color-bg-app-hover": {
    value: gray[300],
    description: ""
  },
  "color-bg-app-selected": {
    value: gray[300],
    description: ""
  },
  "color-bg-active": {
    value: gray[300],
    description: ""
  },
  "color-bg-subdued-hover": {
    value: gray[200],
    description: ""
  },
  "color-bg-inset": {
    value: gray[200],
    description: ""
  },
  "color-bg-hover": {
    value: gray[200],
    description: ""
  },
  "color-bg-subdued": {
    value: gray[100],
    description: ""
  },
  "color-bg-input": {
    value: gray[50],
    description: ""
  },
  "color-bg": {
    value: gray[50],
    description: ""
  },
  "color-bg-primary-active": {
    value: green[900],
    description: ""
  },
  "color-bg-primary-hover": {
    value: green[800],
    description: ""
  },
  "color-bg-primary": {
    value: green[700],
    description: ""
  },
  "color-bg-success-strong": {
    value: green[600],
    description: ""
  },
  "color-bg-success": {
    value: green[300],
    description: ""
  },
  "color-bg-primary-subdued-active": {
    value: green[200],
    description: ""
  },
  "color-bg-success-subdued-active": {
    value: green[200],
    description: ""
  },
  "color-bg-success-subdued": {
    value: green[100],
    description: ""
  },
  "color-bg-primary-subdued-hover": {
    value: green[100],
    description: ""
  },
  "color-bg-success-subdued-hover": {
    value: green[50],
    description: ""
  },
  "color-bg-primary-subdued": {
    value: green[50],
    description: ""
  },
  "color-bg-primary-subdued-selected": {
    value: green[50],
    description: ""
  },
  "color-bg-critical-strong-active": {
    value: red[800],
    description: ""
  },
  "color-bg-critical-strong-hover": {
    value: red[700],
    description: ""
  },
  "color-bg-critical-strong": {
    value: red[600],
    description: ""
  },
  "color-bg-critical-subdued-active": {
    value: red[200],
    description: ""
  },
  "color-bg-critical": {
    value: red[200],
    description: ""
  },
  "color-bg-critical-subdued": {
    value: red[100],
    description: ""
  },
  "color-bg-critical-subdued-hover": {
    value: red[50],
    description: ""
  },
  "color-bg-caution-strong": {
    value: yellow[600],
    description: ""
  },
  "color-bg-caution": {
    value: yellow[300],
    description: ""
  },
  "color-bg-caution-subdued-active": {
    value: yellow[200],
    description: ""
  },
  "color-bg-caution-subdued": {
    value: yellow[100],
    description: ""
  },
  "color-bg-caution-subdued-hover": {
    value: yellow[50],
    description: ""
  },
  "color-bg-info-strong": {
    value: teal[600],
    description: ""
  },
  "color-bg-info-subdued-active": {
    value: teal[200],
    description: ""
  },
  "color-bg-info": {
    value: teal[200],
    description: ""
  },
  "color-bg-info-subdued": {
    value: teal[100],
    description: ""
  },
  "color-bg-info-subdued-hover": {
    value: teal[50],
    description: ""
  },
  "color-bg-interactive-active": {
    value: blue[800],
    description: ""
  },
  "color-bg-interactive-hover": {
    value: blue[700],
    description: ""
  },
  "color-bg-interactive": {
    value: blue[600],
    description: ""
  },
  "color-bg-interactive-subdued-active": {
    value: blue[200],
    description: ""
  },
  "color-bg-interactive-subdued-hover": {
    value: blue[100],
    description: ""
  },
  "color-bg-interactive-subdued": {
    value: blue[50],
    description: ""
  },
  "color-bg-interactive-selected": {
    value: blue[50],
    description: ""
  },
  "color-bg-warning": {
    value: orange[200],
    description: ""
  },
  "color-bg-magic-strong": {
    value: purple[500],
    description: ""
  },
  "color-bg-magic-hover": {
    value: purple[200],
    description: ""
  },
  "color-bg-magic-active": {
    value: purple[300],
    description: ""
  },
  "color-bg-magic": {
    value: purple[100],
    description: ""
  },
  "color-bg-magic-subdued-hover": {
    value: purple[100],
    description: ""
  },
  "color-bg-magic-subdued-active": {
    value: purple[200],
    description: ""
  },
  "color-bg-magic-subdued": {
    value: purple[50],
    description: ""
  },
  "color-border-input-hover": {
    value: gray[800],
    description: ""
  },
  "color-border-inverse": {
    value: gray[800],
    description: ""
  },
  "color-border-strong-hover": {
    value: gray[700],
    description: ""
  },
  "color-border-input": {
    value: gray[600],
    description: ""
  },
  "color-border-hover": {
    value: gray[600],
    description: ""
  },
  "color-border-strong": {
    value: gray[600],
    description: ""
  },
  "color-border": {
    value: gray[500],
    description: ""
  },
  "color-border-disabled": {
    value: gray[400],
    description: ""
  },
  "color-border-subdued": {
    value: gray[400],
    description: ""
  },
  "color-border-interactive-disabled": {
    value: gray[400],
    description: ""
  },
  "color-border-primary": {
    value: green[700],
    description: ""
  },
  "color-border-success": {
    value: green[600],
    description: ""
  },
  "color-border-success-subdued": {
    value: green[400],
    description: ""
  },
  "color-border-critical-active": {
    value: red[900],
    description: ""
  },
  "color-border-critical-hover": {
    value: red[800],
    description: ""
  },
  "color-border-critical": {
    value: red[600],
    description: ""
  },
  "color-border-critical-subdued": {
    value: red[400],
    description: ""
  },
  "color-border-caution": {
    value: yellow[600],
    description: ""
  },
  "color-border-caution-subdued": {
    value: yellow[400],
    description: ""
  },
  "color-border-info": {
    value: teal[500],
    description: ""
  },
  "color-border-info-subdued": {
    value: teal[400],
    description: ""
  },
  "color-border-interactive-active": {
    value: blue[800],
    description: ""
  },
  "color-border-interactive-hover": {
    value: blue[700],
    description: ""
  },
  "color-border-interactive": {
    value: blue[500],
    description: ""
  },
  "color-border-interactive-focus": {
    value: blue[500],
    description: ""
  },
  "color-border-interactive-subdued": {
    value: blue[200],
    description: ""
  },
  "color-border-magic-strong": {
    value: purple[500],
    description: ""
  },
  "color-border-magic": {
    value: purple[400],
    description: ""
  },
  "color-icon-hover": {
    value: gray[900],
    description: ""
  },
  "color-icon": {
    value: gray[800],
    description: ""
  },
  "color-icon-active": {
    value: gray[900],
    description: ""
  },
  "color-icon-subdued": {
    value: gray[700],
    description: ""
  },
  "color-icon-disabled": {
    value: gray[600],
    description: ""
  },
  "color-icon-interactive-disabled": {
    value: gray[600],
    description: ""
  },
  "color-icon-inverse": {
    value: gray[400],
    description: ""
  },
  "color-icon-on-color": {
    value: gray[50],
    description: ""
  },
  "color-icon-primary": {
    value: green[700],
    description: ""
  },
  "color-icon-success": {
    value: green[600],
    description: ""
  },
  "color-icon-critical": {
    value: red[600],
    description: ""
  },
  "color-icon-caution": {
    value: yellow[700],
    description: ""
  },
  "color-icon-info": {
    value: teal[600],
    description: ""
  },
  "color-icon-warning": {
    value: orange[500],
    description: ""
  },
  "color-icon-interactive-active": {
    value: blue[800],
    description: ""
  },
  "color-icon-interactive-hover": {
    value: blue[700],
    description: ""
  },
  "color-icon-interactive": {
    value: blue[600],
    description: ""
  },
  "color-icon-interactive-inverse": {
    value: blue[400],
    description: ""
  },
  "color-icon-magic": {
    value: purple[500],
    description: ""
  },
  "color-text": {
    value: gray[900],
    description: ""
  },
  "color-text-subdued": {
    value: gray[800],
    description: ""
  },
  "color-text-disabled": {
    value: gray[700],
    description: ""
  },
  "color-text-interactive-disabled": {
    value: gray[700],
    description: ""
  },
  "color-text-inverse-subdued": {
    value: gray[600],
    description: ""
  },
  "color-text-inverse": {
    value: gray[200],
    description: ""
  },
  "color-text-on-color": {
    value: gray[50],
    description: ""
  },
  "color-text-success-strong": {
    value: green[900],
    description: ""
  },
  "color-text-success": {
    value: green[700],
    description: ""
  },
  "color-text-primary": {
    value: green[700],
    description: ""
  },
  "color-text-primary-hover": {
    value: green[800],
    description: ""
  },
  "color-text-critical-strong": {
    value: red[900],
    description: ""
  },
  "color-text-critical-active": {
    value: red[800],
    description: ""
  },
  "color-text-critical": {
    value: red[600],
    description: ""
  },
  "color-text-caution-strong": {
    value: yellow[900],
    description: ""
  },
  "color-text-caution": {
    value: yellow[800],
    description: ""
  },
  "color-text-info-strong": {
    value: teal[900],
    description: ""
  },
  "color-text-info": {
    value: teal[700],
    description: ""
  },
  "color-text-warning-strong": {
    value: orange[900],
    description: ""
  },
  "color-text-interactive-active": {
    value: blue[800],
    description: ""
  },
  "color-text-interactive-hover": {
    value: blue[700],
    description: ""
  },
  "color-text-interactive": {
    value: blue[600],
    description: ""
  },
  "color-text-interactive-inverse": {
    value: blue[400],
    description: ""
  },
  "color-text-magic-strong": {
    value: purple[800],
    description: ""
  },
  "color-text-magic": {
    value: purple[600],
    description: ""
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/token-groups/colors.mjs
var colors = {
  background: {
    value: "rgba(246, 246, 247, 1)",
    description: "For use as a background color, in components such as Page and Frame backgrounds."
  },
  "background-hovered": {
    value: "rgba(241, 242, 243, 1)",
    description: "For use when an action or navigation is used on a background."
  },
  "background-pressed": {
    value: "rgba(237, 238, 239, 1)",
    description: "For use when an action or navigation is used on a background."
  },
  "background-selected": {
    value: "rgba(237, 238, 239, 1)",
    description: "For use in the selected item in navigation"
  },
  surface: {
    value: "rgba(255, 255, 255, 1)",
    description: "For use as a background color, in components such as Card, Modal, and Popover."
  },
  "surface-dark": {
    value: "rgba(32, 33, 35, 1)",
    description: "For use as a dark background color, in components such as Card, Modal, and Popover."
  },
  "surface-neutral": {
    value: "rgba(228, 229, 231, 1)",
    description: "For use as a background color in neutral badges."
  },
  "surface-neutral-hovered": {
    value: "rgba(219, 221, 223, 1)",
    description: "For use as a hovered background color in neutral badges."
  },
  "surface-neutral-pressed": {
    value: "rgba(201, 204, 208, 1)",
    description: "For use as a pressed background color in neutral badges."
  },
  "surface-neutral-disabled": {
    value: "rgba(241, 242, 243, 1)",
    description: "For use as a disabled background color in neutral badges."
  },
  "surface-neutral-subdued": {
    value: "rgba(246, 246, 247, 1)",
    description: "For use as a background color in neutral banners."
  },
  "surface-neutral-subdued-dark": {
    value: "rgba(68, 71, 74, 1)",
    description: "For use as a dark background color in neutral banners."
  },
  "surface-subdued": {
    value: "rgba(250, 251, 251, 1)",
    description: "For use as a subdued background color, in components such as Card, Modal, and Popover."
  },
  "surface-disabled": {
    value: "rgba(250, 251, 251, 1)",
    description: "For use as a surface color on disabled interactive elements such as option list items and action list items when in a disabled state."
  },
  "surface-hovered": {
    value: "rgba(246, 246, 247, 1)",
    description: "For use as a surface color on interactive elements such as resource list items and action list items when in a hovered state."
  },
  "surface-hovered-dark": {
    value: "rgba(47, 49, 51, 1)",
    description: "For use as a dark surface color on interactive elements such as resource list items and action list items when in a hovered state."
  },
  "surface-pressed": {
    value: "rgba(241, 242, 243, 1)",
    description: "For use as a surface color on interactive elements such as resource list items and action list items when in a pressed state."
  },
  "surface-pressed-dark": {
    value: "rgba(62, 64, 67, 1)",
    description: "For use as a dark surface color on interactive elements such as resource list items and action list items when in a pressed state."
  },
  "surface-depressed": {
    value: "rgba(237, 238, 239, 1)",
    description: "For use as a surface color on interactive elements such as resource list items and action list items when in a depressed state."
  },
  "surface-search-field": {
    value: "rgba(241, 242, 243, 1)",
    description: "For use as a background color, in components on surface elements such as SearchField"
  },
  "surface-search-field-dark": {
    value: "rgba(47, 49, 51, 1)",
    description: "For use as a dark background color, in components on surface elements such as SearchField"
  },
  backdrop: {
    value: "rgba(0, 0, 0, 0.5)",
    description: "For use as the background color of the backdrop component for navigation and modal. This color has an alpha of `0.5`."
  },
  overlay: {
    value: "rgba(255, 255, 255, 0.5)",
    description: "For use as the background color of elements which lay on top of surfaces to obscure their contents. This color has an alpha of `0.5`."
  },
  "shadow-color-picker": {
    value: "rgba(0, 0, 0, 0.5)"
  },
  "shadow-color-picker-dragger": {
    value: "rgba(33, 43, 54, 0.32)"
  },
  "hint-from-direct-light": {
    value: "rgba(0, 0, 0, 0.15)",
    description: "For use in building shadows scrollables."
  },
  border: {
    value: "rgba(140, 145, 150, 1)",
    description: "For use as the default border on elements."
  },
  "border-on-dark": {
    value: "rgba(80, 83, 86, 1)",
    description: "For use as the default border on dark elements."
  },
  "border-neutral-subdued": {
    value: "rgba(186, 191, 195, 1)",
    description: "For use as the border on banners."
  },
  "border-hovered": {
    value: "rgba(153, 158, 164, 1)",
    description: "Used for borders on hovered interactive elements"
  },
  "border-disabled": {
    value: "rgba(210, 213, 216, 1)",
    description: "Used for disabled borders on interactive elements"
  },
  "border-subdued": {
    value: "rgba(201, 204, 207, 1)",
    description: "For use as a subdued border on elements."
  },
  "border-depressed": {
    value: "rgba(87, 89, 89, 1)",
    description: "For use as a border on depressed elements."
  },
  "border-shadow": {
    value: "rgba(174, 180, 185, 1)",
    description: "For use as an additional bottom border on elements."
  },
  "border-shadow-subdued": {
    value: "rgba(186, 191, 196, 1)",
    description: "For use as an additional, subdued bottom border on elements."
  },
  divider: {
    value: "rgba(225, 227, 229, 1)",
    description: "For use as a divider between elements."
  },
  "divider-dark": {
    value: "rgba(69, 71, 73, 1)",
    description: "For use as a dark divider between elements."
  },
  icon: {
    value: "rgba(92, 95, 98, 1)",
    description: "For use as the fill color of icons."
  },
  "icon-on-dark": {
    value: "rgba(166, 172, 178, 1)",
    description: "For use as the fill color of dark icons."
  },
  "icon-hovered": {
    value: "rgba(26, 28, 29, 1)",
    description: "For use as the fill color of hovered icons."
  },
  "icon-pressed": {
    value: "rgba(68, 71, 74, 1)",
    description: "For use as the fill color of pressed icons."
  },
  "icon-disabled": {
    value: "rgba(186, 190, 195, 1)",
    description: "For use as the fill color of disabled icons."
  },
  "icon-subdued": {
    value: "rgba(140, 145, 150, 1)",
    description: "For use as the fill color of subdued icons."
  },
  text: {
    value: "rgba(32, 34, 35, 1)",
    description: "For use as a text color."
  },
  "text-on-dark": {
    value: "rgba(227, 229, 231, 1)",
    description: "For use as a text color on dark elements."
  },
  "text-disabled": {
    value: "rgba(140, 145, 150, 1)",
    description: "For use as a disabled text color and as a placeholder text color."
  },
  "text-subdued": {
    value: "rgba(109, 113, 117, 1)",
    description: "For use as a subdued text color."
  },
  "text-subdued-on-dark": {
    value: "rgba(153, 159, 164, 1)",
    description: "For use as a subdued text color on dark elements."
  },
  interactive: {
    value: "rgba(44, 110, 203, 1)",
    description: "Used for links, plain buttons, and as the fill color for selected checkboxes and radio buttons."
  },
  "interactive-on-dark": {
    value: "rgba(54, 163, 255, 1)",
    description: "Used for links, plain buttons, and as the fill color for selected checkboxes and radio buttons when on a dark element."
  },
  "interactive-disabled": {
    value: "rgba(189, 193, 204, 1)",
    description: "Used for disabled links and plain buttons."
  },
  "interactive-hovered": {
    value: "rgba(31, 81, 153, 1)",
    description: "Used for hovered links and plain buttons."
  },
  "interactive-pressed": {
    value: "rgba(16, 50, 98, 1)",
    description: "Used for pressed links and plain buttons."
  },
  "interactive-pressed-on-dark": {
    value: "rgba(136, 188, 255, 1)",
    description: "Used for pressed links and plain buttons on dark elements."
  },
  focused: {
    value: "rgba(69, 143, 255, 1)",
    description: "For use in the focus ring on interactive elements."
  },
  "surface-selected": {
    value: "rgba(242, 247, 254, 1)",
    description: "For use as a surface color in selected interactive elements, in components such as action list and resource list."
  },
  "surface-selected-hovered": {
    value: "rgba(237, 244, 254, 1)",
    description: "For use as a surface color in selected interactive elements that are hovered, in components such as action list and resource list."
  },
  "surface-selected-pressed": {
    value: "rgba(229, 239, 253, 1)",
    description: "For use as a surface color in selected interactive elements that are pressed, in components such as action list and resource list."
  },
  "icon-on-interactive": {
    value: "rgba(255, 255, 255, 1)",
    description: "For use as a fill color for icons on interactive elements."
  },
  "text-on-interactive": {
    value: "rgba(255, 255, 255, 1)",
    description: "For use as a text color on interactive elements."
  },
  "action-secondary": {
    value: "rgba(255, 255, 255, 1)",
    description: "Used for secondary buttons and tertiary buttons, as well as in form elements as a background color and pontentially other secondary surfaces."
  },
  "action-secondary-disabled": {
    value: "rgba(255, 255, 255, 1)",
    description: "Used as a disabled state for secondary buttons"
  },
  "action-secondary-hovered": {
    value: "rgba(246, 246, 247, 1)",
    description: "Used as a hovered state for secondary buttons"
  },
  "action-secondary-hovered-dark": {
    value: "rgba(84, 87, 91, 1)",
    description: "Used as a dark hovered state for secondary buttons"
  },
  "action-secondary-pressed": {
    value: "rgba(241, 242, 243, 1)",
    description: "Used as a pressed state for secondary buttons"
  },
  "action-secondary-pressed-dark": {
    value: "rgba(96, 100, 103, 1)",
    description: "Used as a dark pressed state for secondary buttons"
  },
  "action-secondary-depressed": {
    value: "rgba(109, 113, 117, 1)",
    description: "Used as a depressed state for secondary buttons"
  },
  "action-primary": {
    value: "rgba(0, 128, 96, 1)",
    description: "Used as the background color for primary actions, and as the fill color for icons and the text color in navigation and tabs to communicate interaction states."
  },
  "action-primary-disabled": {
    value: "rgba(241, 241, 241, 1)",
    description: "Used as the background color for disabled primary actions, and as the fill color for icons and the text color in navigation and tabs to communicate interaction states."
  },
  "action-primary-hovered": {
    value: "rgba(0, 110, 82, 1)",
    description: "Used as the background color for hovered primary actions, and as the fill color for icons and the text color in navigation and tabs to communicate interaction states."
  },
  "action-primary-pressed": {
    value: "rgba(0, 94, 70, 1)",
    description: "Used as the background color for pressed primary actions, and as the fill color for icons and the text color in navigation and tabs to communicate interaction states."
  },
  "action-primary-depressed": {
    value: "rgba(0, 61, 44, 1)",
    description: "Used as the background color for pressed primary actions, and as the fill color for icons and the text color in navigation and tabs to communicate interaction states."
  },
  "icon-on-primary": {
    value: "rgba(255, 255, 255, 1)",
    description: "For use as a fill color for icons on primary actions. Not for use in icons on navigation and tabs."
  },
  "text-on-primary": {
    value: "rgba(255, 255, 255, 1)",
    description: "For use as a text color on primary actions. Not for use in text on navigation and tabs."
  },
  "text-primary": {
    value: "rgba(0, 123, 92, 1)",
    description: "For use as primary text color on background. For use in text in components such as Navigation."
  },
  "text-primary-hovered": {
    value: "rgba(0, 108, 80, 1)",
    description: "For use as primary hovered text color on background. For use in text in components such as Navigation."
  },
  "text-primary-pressed": {
    value: "rgba(0, 92, 68, 1)",
    description: "For use as primary pressed text color on background. For use in text in components such as Navigation."
  },
  "surface-primary-selected": {
    value: "rgba(241, 248, 245, 1)",
    description: "Used as a surface color to indicate selected interactive states in navigation and tabs."
  },
  "surface-primary-selected-hovered": {
    value: "rgba(179, 208, 195, 1)",
    description: "Used as a surface color to indicate selected interactive states that are hovered in navigation and tabs."
  },
  "surface-primary-selected-pressed": {
    value: "rgba(162, 188, 176, 1)",
    description: "Used as a surface color to indicate selected interactive states that are pressed in navigation and tabs."
  },
  "border-critical": {
    value: "rgba(253, 87, 73, 1)",
    description: "For use as a border on critical components such as an outline on interactive elements in an error state."
  },
  "border-critical-subdued": {
    value: "rgba(224, 179, 178, 1)",
    description: "For use as a border on critical components such as banners."
  },
  "border-critical-disabled": {
    value: "rgba(255, 167, 163, 1)",
    description: "For use as a disabled border on critical components such as banners, and as an outline on interactive elements in an error state."
  },
  "icon-critical": {
    value: "rgba(215, 44, 13, 1)",
    description: "For use as an icon fill color on top of critical elements."
  },
  "surface-critical": {
    value: "rgba(254, 211, 209, 1)",
    description: "For use as a surface color on critical elements including badges."
  },
  "surface-critical-subdued": {
    value: "rgba(255, 244, 244, 1)",
    description: "For use as a subdued surface color on critical elements including banners."
  },
  "surface-critical-subdued-hovered": {
    value: "rgba(255, 240, 240, 1)",
    description: "For use as a surface color on critical interactive elements including action list items in a hovered state."
  },
  "surface-critical-subdued-pressed": {
    value: "rgba(255, 233, 232, 1)",
    description: "For use as a surface color on critical interactive elements including action list items in a pressed state."
  },
  "surface-critical-subdued-depressed": {
    value: "rgba(254, 188, 185, 1)",
    description: "For use as a surface color on critical interactive elements including action list items in a depressed state."
  },
  "text-critical": {
    value: "rgba(215, 44, 13, 1)",
    description: "For use as a text color in inert critical elements such as exception list. Not for use as a text color on banners and badges."
  },
  "action-critical": {
    value: "rgba(216, 44, 13, 1)",
    description: "For use as the background color for destructive buttons, and as the background color for error toast messages."
  },
  "action-critical-disabled": {
    value: "rgba(241, 241, 241, 1)",
    description: "For use as the background color for disabled destructive buttons, and as the background color for error toast messages."
  },
  "action-critical-hovered": {
    value: "rgba(188, 34, 0, 1)",
    description: "For use as the background color for hovered destructive buttons, and as the background color for error toast messages."
  },
  "action-critical-pressed": {
    value: "rgba(162, 27, 0, 1)",
    description: "For use as the background color for pressed destructive buttons, and as the background color for error toast messages."
  },
  "action-critical-depressed": {
    value: "rgba(108, 15, 0, 1)",
    description: "For use as the background color for depressed destructive buttons, and as the background color for error toast messages."
  },
  "icon-on-critical": {
    value: "rgba(255, 255, 255, 1)",
    description: "For use as a fill color for icons on critical actions."
  },
  "text-on-critical": {
    value: "rgba(255, 255, 255, 1)",
    description: "For use as a text color on critical actions."
  },
  "interactive-critical": {
    value: "rgba(216, 44, 13, 1)",
    description: "For use as the text color for destructive interactive elements: links, plain buttons, error state of selected checkboxes and radio buttons, as well as a text color on destructive action list items. Not for use on critical banners and badges."
  },
  "interactive-critical-disabled": {
    value: "rgba(253, 147, 141, 1)",
    description: "For use as a text color in disabled destructive plain buttons, as well as a text color on destructive action list items. Not for use on critical banners and badges."
  },
  "interactive-critical-hovered": {
    value: "rgba(205, 41, 12, 1)",
    description: "For use as a text color in hovered destructive plain buttons, as well as a text color on destructive action list items. Not for use on critical banners and badges."
  },
  "interactive-critical-pressed": {
    value: "rgba(103, 15, 3, 1)",
    description: "For use as a text color in pressed destructive plain buttons, as well as a text color on destructive action list items. Not for use on critical banners and badges."
  },
  "border-warning": {
    value: "rgba(185, 137, 0, 1)",
    description: "For use as a border on warning components such as..."
  },
  "border-warning-subdued": {
    value: "rgba(225, 184, 120, 1)",
    description: "For use as a border on warning components such as banners."
  },
  "icon-warning": {
    value: "rgba(185, 137, 0, 1)",
    description: "For use as an icon fill color on top of warning elements."
  },
  "surface-warning": {
    value: "rgba(255, 215, 157, 1)",
    description: "For use as a surface color on warning elements including badges."
  },
  "surface-warning-subdued": {
    value: "rgba(255, 245, 234, 1)",
    description: "For use as a subdued surface color on warning elements including banners."
  },
  "surface-warning-subdued-hovered": {
    value: "rgba(255, 242, 226, 1)",
    description: "For use as a subdued surface color on warning elements including banners."
  },
  "surface-warning-subdued-pressed": {
    value: "rgba(255, 235, 211, 1)",
    description: "For use as a subdued surface color on warning elements including banners."
  },
  "text-warning": {
    value: "rgba(145, 106, 0, 1)",
    description: "For use as a text color in inert critical elements such as exception list. Not for use as a text color on banners and badges."
  },
  "border-highlight": {
    value: "rgba(68, 157, 167, 1)",
    description: "For use as a border on informational components such as..."
  },
  "border-highlight-subdued": {
    value: "rgba(152, 198, 205, 1)",
    description: "For use as a border on informational components such as banners."
  },
  "icon-highlight": {
    value: "rgba(0, 160, 172, 1)",
    description: "For use as an icon fill color on top of informational elements."
  },
  "surface-highlight": {
    value: "rgba(164, 232, 242, 1)",
    description: "For use as a surface color on information elements including badges."
  },
  "surface-highlight-subdued": {
    value: "rgba(235, 249, 252, 1)",
    description: "For use as a surface color on information elements including banners."
  },
  "surface-highlight-subdued-hovered": {
    value: "rgba(228, 247, 250, 1)",
    description: "For use as a surface color on information elements including banners."
  },
  "surface-highlight-subdued-pressed": {
    value: "rgba(213, 243, 248, 1)",
    description: "For use as a surface color on information elements including banners."
  },
  "text-highlight": {
    value: "rgba(52, 124, 132, 1)",
    description: "For use as a text color in inert informational elements. Not for use as a text color on banners and badges."
  },
  "border-success": {
    value: "rgba(0, 164, 124, 1)",
    description: "For use as a border on success components such as text inputs."
  },
  "border-success-subdued": {
    value: "rgba(149, 201, 180, 1)",
    description: "For use as a border on success components such as banners."
  },
  "icon-success": {
    value: "rgba(0, 127, 95, 1)",
    description: "For use as an icon fill color on top of success elements."
  },
  "surface-success": {
    value: "rgba(174, 233, 209, 1)",
    description: "For use as a surface color on success elements including badges."
  },
  "surface-success-subdued": {
    value: "rgba(241, 248, 245, 1)",
    description: "For use as a surface color on information elements including banners."
  },
  "surface-success-subdued-hovered": {
    value: "rgba(236, 246, 241, 1)",
    description: "For use as a surface color on information elements including banners."
  },
  "surface-success-subdued-pressed": {
    value: "rgba(226, 241, 234, 1)",
    description: "For use as a surface color on information elements including banners."
  },
  "text-success": {
    value: "rgba(0, 128, 96, 1)",
    description: "For use as a text color in inert success elements. Not for use as a text color on banners and badges."
  },
  "icon-attention": {
    value: "rgba(138, 97, 22, 1)"
  },
  "surface-attention": {
    value: "rgba(255, 234, 138, 1)"
  },
  "decorative-one-icon": {
    value: "rgba(126, 87, 0, 1)",
    description: "For use as a decorative icon color that is applied on a decorative surface."
  },
  "decorative-one-surface": {
    value: "rgba(255, 201, 107, 1)",
    description: "For use as a decorative surface color."
  },
  "decorative-one-text": {
    value: "rgba(61, 40, 0, 1)",
    description: "For use as a decorative text color that is applied on a decorative surface."
  },
  "decorative-two-icon": {
    value: "rgba(175, 41, 78, 1)",
    description: "For use as a decorative icon color that is applied on a decorative surface."
  },
  "decorative-two-surface": {
    value: "rgba(255, 196, 176, 1)",
    description: "For use as a decorative surface color."
  },
  "decorative-two-text": {
    value: "rgba(73, 11, 28, 1)",
    description: "For use as a decorative text color that is applied on a decorative surface."
  },
  "decorative-three-icon": {
    value: "rgba(0, 109, 65, 1)",
    description: "For use as a decorative icon color that is applied on a decorative surface."
  },
  "decorative-three-surface": {
    value: "rgba(146, 230, 181, 1)",
    description: "For use as a decorative surface color."
  },
  "decorative-three-text": {
    value: "rgba(0, 47, 25, 1)",
    description: "For use as a decorative text color that is applied on a decorative surface."
  },
  "decorative-four-icon": {
    value: "rgba(0, 106, 104, 1)",
    description: "For use as a decorative icon color that is applied on a decorative surface."
  },
  "decorative-four-surface": {
    value: "rgba(145, 224, 214, 1)",
    description: "For use as a decorative surface color."
  },
  "decorative-four-text": {
    value: "rgba(0, 45, 45, 1)",
    description: "For use as a decorative text color that is applied on a decorative surface."
  },
  "decorative-five-icon": {
    value: "rgba(174, 43, 76, 1)",
    description: "For use as a decorative icon color that is applied on a decorative surface."
  },
  "decorative-five-surface": {
    value: "rgba(253, 201, 208, 1)",
    description: "For use as a decorative surface color."
  },
  "decorative-five-text": {
    value: "rgba(79, 14, 31, 1)",
    description: "For use as a decorative text color that is applied on a decorative surface."
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/token-groups/motion.mjs
var motion = {
  "duration-0": {
    value: "0ms"
  },
  "duration-50": {
    value: "50ms"
  },
  "duration-100": {
    value: "100ms"
  },
  "duration-150": {
    value: "150ms"
  },
  "duration-200": {
    value: "200ms"
  },
  "duration-250": {
    value: "250ms"
  },
  "duration-300": {
    value: "300ms"
  },
  "duration-350": {
    value: "350ms"
  },
  "duration-400": {
    value: "400ms"
  },
  "duration-450": {
    value: "450ms"
  },
  "duration-500": {
    value: "500ms"
  },
  "duration-5000": {
    value: "5000ms"
  },
  ease: {
    value: "cubic-bezier(0.25, 0.1, 0.25, 1)",
    description: "Responds quickly and finishes with control. A great default for any user interaction."
  },
  "ease-in": {
    value: "cubic-bezier(0.42, 0, 1, 1)",
    description: "Starts slowly and finishes at top speed. Use sparingly."
  },
  "ease-out": {
    value: "cubic-bezier(0, 0, 0.58, 1)",
    description: "Starts at top speed and finishes slowly. Use sparingly."
  },
  "ease-in-out": {
    value: "cubic-bezier(0.42, 0, 0.58, 1)",
    description: "Starts and finishes with equal speed. A good default for transitions triggered by the system."
  },
  linear: {
    value: "cubic-bezier(0, 0, 1, 1)",
    description: "Moves with constant speed. Use for continuous and mechanical animations, such as rotating spinners."
  },
  "keyframes-bounce": {
    value: "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }"
  },
  "keyframes-fade-in": {
    value: "{ to { opacity: 1 } }"
  },
  "keyframes-pulse": {
    value: "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }"
  },
  "keyframes-spin": {
    value: "{ to { transform: rotate(1turn) } }"
  },
  "keyframes-appear-above": {
    value: "{ from { transform: translateY(var(--p-space-1)); opacity: 0; } to { transform: none; opacity: 1; } }"
  },
  "keyframes-appear-below": {
    value: "{ from { transform: translateY(calc(var(--p-space-1) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }"
  },
  "motion-duration-0": {
    value: "0ms"
  },
  "motion-duration-50": {
    value: "50ms"
  },
  "motion-duration-100": {
    value: "100ms"
  },
  "motion-duration-150": {
    value: "150ms"
  },
  "motion-duration-200": {
    value: "200ms"
  },
  "motion-duration-250": {
    value: "250ms"
  },
  "motion-duration-300": {
    value: "300ms"
  },
  "motion-duration-350": {
    value: "350ms"
  },
  "motion-duration-400": {
    value: "400ms"
  },
  "motion-duration-450": {
    value: "450ms"
  },
  "motion-duration-500": {
    value: "500ms"
  },
  "motion-duration-5000": {
    value: "5000ms"
  },
  "motion-ease": {
    value: "cubic-bezier(0.25, 0.1, 0.25, 1)",
    description: "Responds quickly and finishes with control. A great default for any user interaction."
  },
  "motion-ease-in": {
    value: "cubic-bezier(0.42, 0, 1, 1)",
    description: "Starts slowly and finishes at top speed. Use sparingly."
  },
  "motion-ease-out": {
    value: "cubic-bezier(0, 0, 0.58, 1)",
    description: "Starts at top speed and finishes slowly. Use sparingly."
  },
  "motion-ease-in-out": {
    value: "cubic-bezier(0.42, 0, 0.58, 1)",
    description: "Starts and finishes with equal speed. A good default for transitions triggered by the system."
  },
  "motion-linear": {
    value: "cubic-bezier(0, 0, 1, 1)",
    description: "Moves with constant speed. Use for continuous and mechanical animations, such as rotating spinners."
  },
  "motion-keyframes-bounce": {
    value: "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }"
  },
  "motion-keyframes-fade-in": {
    value: "{ to { opacity: 1 } }"
  },
  "motion-keyframes-pulse": {
    value: "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }"
  },
  "motion-keyframes-spin": {
    value: "{ to { transform: rotate(1turn) } }"
  },
  "motion-keyframes-appear-above": {
    value: "{ from { transform: translateY(var(--p-space-1)); opacity: 0; } to { transform: none; opacity: 1; } }"
  },
  "motion-keyframes-appear-below": {
    value: "{ from { transform: translateY(calc(var(--p-space-1) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }"
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/token-groups/shadow.mjs
var shadow = {
  "shadow-inset-lg": {
    value: "inset 0px 0px 7px 2px rgba(31, 33, 36, 0.18)"
  },
  "shadow-inset-md": {
    value: "inset 0px 2px 4px rgba(31, 33, 36, 0.32)"
  },
  "shadow-inset-sm": {
    value: "inset 0px 0px 3px rgba(31, 33, 36, 0.56)"
  },
  "shadow-none": {
    value: "none"
  },
  "shadow-xs": {
    value: "0px 0px 2px rgba(31, 33, 36, 0.24)"
  },
  "shadow-sm": {
    value: "0px 1px 1px rgba(31, 33, 36, 0.1)"
  },
  "shadow-md": {
    value: "0px 2px 4px rgba(31, 33, 36, 0.1), 0px 1px 6px rgba(31, 33, 36, 0.05)"
  },
  "shadow-lg": {
    value: "0px 4px 12px rgba(31, 33, 36, 0.2), 0px 2px 6px rgba(31, 33, 36, 0.05)"
  },
  "shadow-xl": {
    value: "0px 4px 18px -2px rgba(31, 33, 36, 0.08), 0px 12px 18px -2px rgba(31, 33, 36, 0.15)"
  },
  "shadow-2xl": {
    value: "0px 32px 32px rgba(31, 33, 36, 0.15), 0px 32px 56px -2px rgba(31, 33, 36, 0.16)"
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/token-groups/shape.mjs
var shape = {
  "border-radius-05": {
    value: "2px"
  },
  "border-radius-1": {
    value: "4px"
  },
  "border-radius-2": {
    value: "8px"
  },
  "border-radius-3": {
    value: "12px"
  },
  "border-radius-4": {
    value: "16px"
  },
  "border-radius-5": {
    value: "20px"
  },
  "border-radius-6": {
    value: "30px"
  },
  "border-radius-full": {
    value: "9999px"
  },
  "border-radius-base": {
    value: "3px"
  },
  "border-radius-large": {
    value: "6px"
  },
  "border-radius-half": {
    value: "50%"
  },
  "border-width-1": {
    value: "1px"
  },
  "border-width-2": {
    value: "2px"
  },
  "border-width-3": {
    value: "3px"
  },
  "border-width-4": {
    value: "4px"
  },
  "border-width-5": {
    value: "5px"
  },
  "border-base": {
    value: "var(--p-border-width-1) solid var(--p-color-border-subdued)"
  },
  "border-dark": {
    value: "var(--p-border-width-1) solid var(--p-color-border)"
  },
  "border-transparent": {
    value: "var(--p-border-width-1) solid transparent"
  },
  "border-divider": {
    value: "var(--p-border-width-1) solid var(--p-color-border-subdued)"
  },
  "border-divider-on-dark": {
    value: "var(--p-border-width-1) solid var(--p-color-border-inverse)"
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/token-groups/spacing.mjs
var spacing = {
  "space-0": {
    value: "0"
  },
  "space-025": {
    value: "1px"
  },
  "space-05": {
    value: "2px"
  },
  "space-1": {
    value: "4px"
  },
  "space-2": {
    value: "8px"
  },
  "space-3": {
    value: "12px"
  },
  "space-4": {
    value: "16px"
  },
  "space-5": {
    value: "20px"
  },
  "space-6": {
    value: "24px"
  },
  "space-8": {
    value: "32px"
  },
  "space-10": {
    value: "40px"
  },
  "space-12": {
    value: "48px"
  },
  "space-16": {
    value: "64px"
  },
  "space-20": {
    value: "80px"
  },
  "space-24": {
    value: "96px"
  },
  "space-28": {
    value: "112px"
  },
  "space-32": {
    value: "128px"
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/token-groups/space.mjs
var space = {
  "space-0": {
    value: "0"
  },
  "space-025": {
    value: "1px"
  },
  "space-05": {
    value: "2px"
  },
  "space-1": {
    value: "4px"
  },
  "space-2": {
    value: "8px"
  },
  "space-3": {
    value: "12px"
  },
  "space-4": {
    value: "16px"
  },
  "space-5": {
    value: "20px"
  },
  "space-6": {
    value: "24px"
  },
  "space-8": {
    value: "32px"
  },
  "space-10": {
    value: "40px"
  },
  "space-12": {
    value: "48px"
  },
  "space-16": {
    value: "64px"
  },
  "space-20": {
    value: "80px"
  },
  "space-24": {
    value: "96px"
  },
  "space-28": {
    value: "112px"
  },
  "space-32": {
    value: "128px"
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/token-groups/zIndex.mjs
var zIndex = {
  "z-index-1": {
    value: "100"
  },
  "z-index-2": {
    value: "400"
  },
  "z-index-3": {
    value: "510"
  },
  "z-index-4": {
    value: "512"
  },
  "z-index-5": {
    value: "513"
  },
  "z-index-6": {
    value: "514"
  },
  "z-index-7": {
    value: "515"
  },
  "z-index-8": {
    value: "516"
  },
  "z-index-9": {
    value: "517"
  },
  "z-index-10": {
    value: "518"
  },
  "z-index-11": {
    value: "519"
  },
  "z-index-12": {
    value: "520"
  },
  "z-1": {
    value: "100"
  },
  "z-2": {
    value: "400"
  },
  "z-3": {
    value: "510"
  },
  "z-4": {
    value: "512"
  },
  "z-5": {
    value: "513"
  },
  "z-6": {
    value: "514"
  },
  "z-7": {
    value: "515"
  },
  "z-8": {
    value: "516"
  },
  "z-9": {
    value: "517"
  },
  "z-10": {
    value: "518"
  },
  "z-11": {
    value: "519"
  },
  "z-12": {
    value: "520"
  }
};

// node_modules/@shopify/polaris-tokens/dist/esm/src/metadata.mjs
var metadata = createMetadata({
  breakpoints: tokensToRems(breakpoints),
  border: tokensToRems(border),
  color,
  colors,
  depth,
  font: tokensToRems(font),
  legacy: tokensToRems(legacy),
  motion,
  shadow: tokensToRems(shadow),
  shape: tokensToRems(shape),
  spacing: tokensToRems(spacing),
  space: tokensToRems(space),
  zIndex
});
function createMetadata(metadata2) {
  return metadata2;
}

// node_modules/@shopify/polaris-tokens/dist/esm/build/index.mjs
var breakpoints2 = {
  "breakpoints-xs": "0rem",
  "breakpoints-sm": "30.625rem",
  "breakpoints-md": "48rem",
  "breakpoints-lg": "65rem",
  "breakpoints-xl": "90rem"
};
var motion2 = {
  "duration-0": "0ms",
  "duration-50": "50ms",
  "duration-100": "100ms",
  "duration-150": "150ms",
  "duration-200": "200ms",
  "duration-250": "250ms",
  "duration-300": "300ms",
  "duration-350": "350ms",
  "duration-400": "400ms",
  "duration-450": "450ms",
  "duration-500": "500ms",
  "duration-5000": "5000ms",
  "ease": "cubic-bezier(0.25, 0.1, 0.25, 1)",
  "ease-in": "cubic-bezier(0.42, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.58, 1)",
  "ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
  "linear": "cubic-bezier(0, 0, 1, 1)",
  "keyframes-bounce": "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }",
  "keyframes-fade-in": "{ to { opacity: 1 } }",
  "keyframes-pulse": "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }",
  "keyframes-spin": "{ to { transform: rotate(1turn) } }",
  "keyframes-appear-above": "{ from { transform: translateY(var(--p-space-1)); opacity: 0; } to { transform: none; opacity: 1; } }",
  "keyframes-appear-below": "{ from { transform: translateY(calc(var(--p-space-1) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }",
  "motion-duration-0": "0ms",
  "motion-duration-50": "50ms",
  "motion-duration-100": "100ms",
  "motion-duration-150": "150ms",
  "motion-duration-200": "200ms",
  "motion-duration-250": "250ms",
  "motion-duration-300": "300ms",
  "motion-duration-350": "350ms",
  "motion-duration-400": "400ms",
  "motion-duration-450": "450ms",
  "motion-duration-500": "500ms",
  "motion-duration-5000": "5000ms",
  "motion-ease": "cubic-bezier(0.25, 0.1, 0.25, 1)",
  "motion-ease-in": "cubic-bezier(0.42, 0, 1, 1)",
  "motion-ease-out": "cubic-bezier(0, 0, 0.58, 1)",
  "motion-ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
  "motion-linear": "cubic-bezier(0, 0, 1, 1)",
  "motion-keyframes-bounce": "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }",
  "motion-keyframes-fade-in": "{ to { opacity: 1 } }",
  "motion-keyframes-pulse": "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }",
  "motion-keyframes-spin": "{ to { transform: rotate(1turn) } }",
  "motion-keyframes-appear-above": "{ from { transform: translateY(var(--p-space-1)); opacity: 0; } to { transform: none; opacity: 1; } }",
  "motion-keyframes-appear-below": "{ from { transform: translateY(calc(var(--p-space-1) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }"
};
var space2 = {
  "space-0": "0",
  "space-025": "0.0625rem",
  "space-05": "0.125rem",
  "space-1": "0.25rem",
  "space-2": "0.5rem",
  "space-3": "0.75rem",
  "space-4": "1rem",
  "space-5": "1.25rem",
  "space-6": "1.5rem",
  "space-8": "2rem",
  "space-10": "2.5rem",
  "space-12": "3rem",
  "space-16": "4rem",
  "space-20": "5rem",
  "space-24": "6rem",
  "space-28": "7rem",
  "space-32": "8rem"
};

// node_modules/@shopify/polaris/build/esm/utilities/debounce.js
function debounce(func, waitArg, options) {
  let lastArgs;
  let lastThis;
  let maxWait;
  let result;
  let timerId;
  let lastCallTime;
  let lastInvokeTime = 0;
  let leading = false;
  let maxing = false;
  let trailing = true;
  const useRAF = !waitArg && waitArg !== 0;
  if (typeof func !== "function") {
    throw new TypeError("Expected a function");
  }
  const wait = waitArg || 0;
  if (typeof options === "object") {
    leading = Boolean(options.leading);
    maxing = "maxWait" in options;
    maxWait = maxing ? Math.max(Number(options.maxWait) || 0, wait) : void 0;
    trailing = "trailing" in options ? Boolean(options.trailing) : trailing;
  }
  function invokeFunc(time) {
    const args = lastArgs;
    const thisArg = lastThis;
    lastArgs = void 0;
    lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function startTimer(pendingFunc, wait2) {
    if (useRAF) {
      cancelAnimationFrame(timerId);
      return requestAnimationFrame(pendingFunc);
    }
    return setTimeout(pendingFunc, wait2);
  }
  function cancelTimer(id) {
    if (useRAF) {
      return cancelAnimationFrame(id);
    }
    clearTimeout(id);
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = startTimer(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    const timeSinceLastCall = time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;
    const timeWaiting = wait - timeSinceLastCall;
    return maxing && maxWait ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    const timeSinceLastCall = time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && maxWait && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    const time = Date.now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = startTimer(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      cancelTimer(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(Date.now());
  }
  function pending() {
    return timerId !== void 0;
  }
  function debounced(...args) {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);
    lastArgs = args;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        timerId = startTimer(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = startTimer(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  debounced.pending = pending;
  return debounced;
}

// node_modules/@shopify/polaris/build/esm/components/shared.js
var scrollable = {
  props: {
    "data-polaris-scrollable": true
  },
  selector: "[data-polaris-scrollable]"
};
var overlay = {
  props: {
    "data-polaris-overlay": true
  },
  selector: "[data-polaris-overlay]"
};
var layer = {
  props: {
    "data-polaris-layer": true
  },
  selector: "[data-polaris-layer]"
};
var unstyled = {
  props: {
    "data-polaris-unstyled": true
  },
  selector: "[data-polaris-unstyled]"
};
var dataPolarisTopBar = {
  props: {
    "data-polaris-top-bar": true
  },
  selector: "[data-polaris-top-bar]"
};
var headerCell = {
  props: {
    "data-polaris-header-cell": true
  },
  selector: "[data-polaris-header-cell]"
};
var portal = {
  props: ["data-portal-id"],
  selector: "[data-portal-id]"
};

// node_modules/@shopify/polaris/build/esm/utilities/breakpoints.js
var import_react2 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/target.js
var isServer = typeof window === "undefined" || typeof document === "undefined";

// node_modules/@shopify/polaris/build/esm/utilities/use-isomorphic-layout-effect.js
var import_react = __toESM(require_react());
var useIsomorphicLayoutEffect = isServer ? import_react.useEffect : import_react.useLayoutEffect;

// node_modules/@shopify/polaris/build/esm/utilities/breakpoints.js
var Breakpoints = {
  // TODO: Update to smDown
  navigationBarCollapsed: "767.95px",
  // TODO: Update to lgDown
  stackedContent: "1039.95px"
};
var noWindowMatches = {
  media: "",
  addListener: noop,
  removeListener: noop,
  matches: false,
  onchange: noop,
  addEventListener: noop,
  removeEventListener: noop,
  dispatchEvent: (_) => true
};
function noop() {
}
function navigationBarCollapsed() {
  return typeof window === "undefined" ? noWindowMatches : window.matchMedia(`(max-width: ${Breakpoints.navigationBarCollapsed})`);
}
function stackedContent() {
  return typeof window === "undefined" ? noWindowMatches : window.matchMedia(`(max-width: ${Breakpoints.stackedContent})`);
}
var breakpointsQueryEntries = getBreakpointsQueryEntries(breakpoints2);
function getBreakpointsQueryEntries(breakpoints3) {
  const mediaConditionEntries = Object.entries(getMediaConditions(breakpoints3));
  return mediaConditionEntries.map(([breakpointsToken, mediaConditions]) => Object.entries(mediaConditions).map(([direction, mediaCondition]) => {
    const breakpointsAlias = breakpointsToken.split("-")[1];
    const directionAlias = `${breakpointsAlias}${capitalize(direction)}`;
    return [directionAlias, mediaCondition];
  })).flat();
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// node_modules/@shopify/polaris/build/esm/utilities/geometry.js
var Rect = class {
  static get zero() {
    return new Rect();
  }
  constructor({
    top = 0,
    left = 0,
    width = 0,
    height = 0
  } = {}) {
    this.top = void 0;
    this.left = void 0;
    this.width = void 0;
    this.height = void 0;
    this.top = top;
    this.left = left;
    this.width = width;
    this.height = height;
  }
  get center() {
    return {
      x: this.left + this.width / 2,
      y: this.top + this.height / 2
    };
  }
};
function getRectForNode(node) {
  if (!(node instanceof Element)) {
    return new Rect({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }
  const rect = node.getBoundingClientRect();
  return new Rect({
    top: rect.top,
    left: rect.left,
    width: rect.width,
    height: rect.height
  });
}

// node_modules/@shopify/polaris/build/esm/utilities/sticky-manager/sticky-manager.js
var SIXTY_FPS = 1e3 / 60;
var StickyManager = class {
  constructor(container) {
    this.stickyItems = [];
    this.stuckItems = [];
    this.container = null;
    this.topBarOffset = 0;
    this.handleResize = debounce(() => {
      this.manageStickyItems();
    }, SIXTY_FPS, {
      leading: true,
      trailing: true,
      maxWait: SIXTY_FPS
    });
    this.handleScroll = debounce(() => {
      this.manageStickyItems();
    }, SIXTY_FPS, {
      leading: true,
      trailing: true,
      maxWait: SIXTY_FPS
    });
    if (container) {
      this.setContainer(container);
    }
  }
  registerStickyItem(stickyItem) {
    this.stickyItems.push(stickyItem);
  }
  unregisterStickyItem(nodeToRemove) {
    const nodeIndex = this.stickyItems.findIndex(({
      stickyNode
    }) => nodeToRemove === stickyNode);
    this.stickyItems.splice(nodeIndex, 1);
  }
  setContainer(el) {
    this.container = el;
    if (isDocument(el)) {
      this.setTopBarOffset(el);
    }
    this.container.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
    this.manageStickyItems();
  }
  removeScrollListener() {
    if (this.container) {
      this.container.removeEventListener("scroll", this.handleScroll);
      window.removeEventListener("resize", this.handleResize);
    }
  }
  manageStickyItems() {
    if (this.stickyItems.length <= 0) {
      return;
    }
    const scrollTop = this.container ? scrollTopFor(this.container) : 0;
    const containerTop = getRectForNode(this.container).top + this.topBarOffset;
    this.stickyItems.forEach((stickyItem) => {
      const {
        handlePositioning
      } = stickyItem;
      const {
        sticky,
        top,
        left,
        width
      } = this.evaluateStickyItem(stickyItem, scrollTop, containerTop);
      this.updateStuckItems(stickyItem, sticky);
      handlePositioning(sticky, top, left, width);
    });
  }
  evaluateStickyItem(stickyItem, scrollTop, containerTop) {
    const {
      stickyNode,
      placeHolderNode,
      boundingElement,
      offset,
      disableWhenStacked
    } = stickyItem;
    if (disableWhenStacked && stackedContent().matches) {
      return {
        sticky: false,
        top: 0,
        left: 0,
        width: "auto"
      };
    }
    const stickyOffset = offset ? this.getOffset(stickyNode) + parseInt(space2["space-5"], 10) : this.getOffset(stickyNode);
    const scrollPosition2 = scrollTop + stickyOffset;
    const placeHolderNodeCurrentTop = placeHolderNode.getBoundingClientRect().top - containerTop + scrollTop;
    const top = containerTop + stickyOffset;
    const width = placeHolderNode.getBoundingClientRect().width;
    const left = placeHolderNode.getBoundingClientRect().left;
    let sticky;
    if (boundingElement == null) {
      sticky = scrollPosition2 >= placeHolderNodeCurrentTop;
    } else {
      var _stickyNode$firstElem;
      const stickyItemHeight = stickyNode.getBoundingClientRect().height || ((_stickyNode$firstElem = stickyNode.firstElementChild) === null || _stickyNode$firstElem === void 0 ? void 0 : _stickyNode$firstElem.getBoundingClientRect().height) || 0;
      const stickyItemBottomPosition = boundingElement.getBoundingClientRect().bottom - stickyItemHeight + scrollTop - containerTop;
      sticky = scrollPosition2 >= placeHolderNodeCurrentTop && scrollPosition2 < stickyItemBottomPosition;
    }
    return {
      sticky,
      top,
      left,
      width
    };
  }
  updateStuckItems(item, sticky) {
    const {
      stickyNode
    } = item;
    if (sticky && !this.isNodeStuck(stickyNode)) {
      this.addStuckItem(item);
    } else if (!sticky && this.isNodeStuck(stickyNode)) {
      this.removeStuckItem(item);
    }
  }
  addStuckItem(stickyItem) {
    this.stuckItems.push(stickyItem);
  }
  removeStuckItem(stickyItem) {
    const {
      stickyNode: nodeToRemove
    } = stickyItem;
    const nodeIndex = this.stuckItems.findIndex(({
      stickyNode
    }) => nodeToRemove === stickyNode);
    this.stuckItems.splice(nodeIndex, 1);
  }
  getOffset(node) {
    if (this.stuckItems.length === 0) {
      return 0;
    }
    let offset = 0;
    let count = 0;
    const stuckNodesLength = this.stuckItems.length;
    const nodeRect = getRectForNode(node);
    while (count < stuckNodesLength) {
      const stuckNode = this.stuckItems[count].stickyNode;
      if (stuckNode !== node) {
        const stuckNodeRect = getRectForNode(stuckNode);
        if (!horizontallyOverlaps(nodeRect, stuckNodeRect)) {
          offset += getRectForNode(stuckNode).height;
        }
      } else {
        break;
      }
      count++;
    }
    return offset;
  }
  isNodeStuck(node) {
    const nodeFound = this.stuckItems.findIndex(({
      stickyNode
    }) => node === stickyNode);
    return nodeFound >= 0;
  }
  setTopBarOffset(container) {
    const topbarElement = container.querySelector(`:not(${scrollable.selector}) ${dataPolarisTopBar.selector}`);
    this.topBarOffset = topbarElement ? topbarElement.clientHeight : 0;
  }
};
function isDocument(node) {
  return node === document;
}
function scrollTopFor(container) {
  return isDocument(container) ? document.body.scrollTop || document.documentElement.scrollTop : container.scrollTop;
}
function horizontallyOverlaps(rect1, rect2) {
  const rect1Left = rect1.left;
  const rect1Right = rect1.left + rect1.width;
  const rect2Left = rect2.left;
  const rect2Right = rect2.left + rect2.width;
  return rect2Right < rect1Left || rect1Right < rect2Left;
}

// node_modules/@shopify/polaris/build/esm/utilities/scroll-lock-manager/scroll-lock-manager.js
var SCROLL_LOCKING_ATTRIBUTE = "data-lock-scrolling";
var SCROLL_LOCKING_HIDDEN_ATTRIBUTE = "data-lock-scrolling-hidden";
var SCROLL_LOCKING_WRAPPER_ATTRIBUTE = "data-lock-scrolling-wrapper";
var scrollPosition = 0;
function isScrollBarVisible() {
  const {
    body
  } = document;
  return body.scrollHeight > body.clientHeight;
}
var ScrollLockManager = class {
  constructor() {
    this.scrollLocks = 0;
    this.locked = false;
  }
  registerScrollLock() {
    this.scrollLocks += 1;
    this.handleScrollLocking();
  }
  unregisterScrollLock() {
    this.scrollLocks -= 1;
    this.handleScrollLocking();
  }
  handleScrollLocking() {
    if (isServer)
      return;
    const {
      scrollLocks
    } = this;
    const {
      body
    } = document;
    const wrapper = body.firstElementChild;
    if (scrollLocks === 0) {
      body.removeAttribute(SCROLL_LOCKING_ATTRIBUTE);
      body.removeAttribute(SCROLL_LOCKING_HIDDEN_ATTRIBUTE);
      if (wrapper) {
        wrapper.removeAttribute(SCROLL_LOCKING_WRAPPER_ATTRIBUTE);
      }
      window.scroll(0, scrollPosition);
      this.locked = false;
    } else if (scrollLocks > 0 && !this.locked) {
      scrollPosition = window.pageYOffset;
      body.setAttribute(SCROLL_LOCKING_ATTRIBUTE, "");
      if (!isScrollBarVisible()) {
        body.setAttribute(SCROLL_LOCKING_HIDDEN_ATTRIBUTE, "");
      }
      if (wrapper) {
        wrapper.setAttribute(SCROLL_LOCKING_WRAPPER_ATTRIBUTE, "");
        wrapper.scrollTop = scrollPosition;
      }
      this.locked = true;
    }
  }
  resetScrollPosition() {
    scrollPosition = 0;
  }
};

// node_modules/@shopify/polaris/build/esm/utilities/unique-id/unique-id-factory.js
var UniqueIdFactory = class {
  constructor(idGeneratorFactory) {
    this.idGeneratorFactory = void 0;
    this.idGenerators = {};
    this.idGeneratorFactory = idGeneratorFactory;
  }
  nextId(prefix) {
    if (!this.idGenerators[prefix]) {
      this.idGenerators[prefix] = this.idGeneratorFactory(prefix);
    }
    return this.idGenerators[prefix]();
  }
};
function globalIdGeneratorFactory(prefix = "") {
  let index = 1;
  return () => `Polaris${prefix}${index++}`;
}

// node_modules/@shopify/polaris/build/esm/utilities/get.js
var OBJECT_NOTATION_MATCHER = /\[(.*?)\]|(\w+)/g;
function get(obj, keypath, defaultValue) {
  if (obj == null)
    return void 0;
  const keys = Array.isArray(keypath) ? keypath : getKeypath(keypath);
  let acc = obj;
  for (let i = 0; i < keys.length; i++) {
    const val = acc[keys[i]];
    if (val === void 0)
      return defaultValue;
    acc = val;
  }
  return acc;
}
function getKeypath(str) {
  const path = [];
  let result;
  while (result = OBJECT_NOTATION_MATCHER.exec(str)) {
    const [, first, second] = result;
    path.push(first || second);
  }
  return path;
}

// node_modules/@shopify/polaris/build/esm/utilities/merge.js
function merge(...objs) {
  let final = {};
  for (const obj of objs) {
    final = mergeRecursively(final, obj);
  }
  return final;
}
function mergeRecursively(inputObjA, objB) {
  const objA = Array.isArray(inputObjA) ? [...inputObjA] : {
    ...inputObjA
  };
  for (const key in objB) {
    if (!Object.prototype.hasOwnProperty.call(objB, key)) {
      continue;
    } else if (isMergeableValue(objB[key]) && isMergeableValue(objA[key])) {
      objA[key] = mergeRecursively(objA[key], objB[key]);
    } else {
      objA[key] = objB[key];
    }
  }
  return objA;
}
function isMergeableValue(value) {
  return value !== null && typeof value === "object";
}

// node_modules/@shopify/polaris/build/esm/utilities/i18n/I18n.js
var REPLACE_REGEX = /{([^}]*)}/g;
var I18n = class {
  /**
   * @param translation A locale object or array of locale objects that overrides default translations. If specifying an array then your desired language dictionary should come first, followed by your fallback language dictionaries
   */
  constructor(translation) {
    this.translation = {};
    this.translation = Array.isArray(translation) ? merge(...translation.slice().reverse()) : translation;
  }
  translate(id, replacements) {
    const text = get(this.translation, id, "");
    if (!text) {
      return "";
    }
    if (replacements) {
      return text.replace(REPLACE_REGEX, (match) => {
        const replacement = match.substring(1, match.length - 1);
        if (replacements[replacement] === void 0) {
          const replacementData = JSON.stringify(replacements);
          throw new Error(`Error in translation for key '${id}'. No replacement found for key '${replacement}'. The following replacements were passed: '${replacementData}'`);
        }
        return replacements[replacement];
      });
    }
    return text;
  }
  translationKeyExists(path) {
    return Boolean(get(this.translation, path));
  }
};

// node_modules/@shopify/polaris/build/esm/utilities/features/context.js
var import_react3 = __toESM(require_react());
var FeaturesContext = /* @__PURE__ */ (0, import_react3.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/utilities/i18n/context.js
var import_react4 = __toESM(require_react());
var I18nContext = /* @__PURE__ */ (0, import_react4.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/utilities/scroll-lock-manager/context.js
var import_react5 = __toESM(require_react());
var ScrollLockManagerContext = /* @__PURE__ */ (0, import_react5.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/utilities/sticky-manager/context.js
var import_react6 = __toESM(require_react());
var StickyManagerContext = /* @__PURE__ */ (0, import_react6.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/utilities/unique-id/context.js
var import_react7 = __toESM(require_react());
var UniqueIdFactoryContext = /* @__PURE__ */ (0, import_react7.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/utilities/link/context.js
var import_react8 = __toESM(require_react());
var LinkContext = /* @__PURE__ */ (0, import_react8.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/components/MediaQueryProvider/MediaQueryProvider.js
var import_react11 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/media-query/context.js
var import_react9 = __toESM(require_react());
var MediaQueryContext = /* @__PURE__ */ (0, import_react9.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/components/EventListener/EventListener.js
var import_react10 = __toESM(require_react());
var EventListener = class extends import_react10.PureComponent {
  componentDidMount() {
    this.attachListener();
  }
  componentDidUpdate({
    passive,
    ...detachProps
  }) {
    this.detachListener(detachProps);
    this.attachListener();
  }
  componentWillUnmount() {
    this.detachListener();
  }
  render() {
    return null;
  }
  attachListener() {
    const {
      event,
      handler,
      capture,
      passive
    } = this.props;
    window.addEventListener(event, handler, {
      capture,
      passive
    });
  }
  detachListener(prevProps) {
    const {
      event,
      handler,
      capture
    } = prevProps || this.props;
    window.removeEventListener(event, handler, capture);
  }
};

// node_modules/@shopify/polaris/build/esm/components/MediaQueryProvider/MediaQueryProvider.js
var MediaQueryProvider = function MediaQueryProvider2({
  children
}) {
  const [isNavigationCollapsed, setIsNavigationCollapsed] = (0, import_react11.useState)(navigationBarCollapsed().matches);
  const handleResize = (0, import_react11.useCallback)(debounce(() => {
    if (isNavigationCollapsed !== navigationBarCollapsed().matches) {
      setIsNavigationCollapsed(!isNavigationCollapsed);
    }
  }, 40, {
    trailing: true,
    leading: true,
    maxWait: 40
  }), [isNavigationCollapsed]);
  (0, import_react11.useEffect)(() => {
    setIsNavigationCollapsed(navigationBarCollapsed().matches);
  }, []);
  const context = (0, import_react11.useMemo)(() => ({
    isNavigationCollapsed
  }), [isNavigationCollapsed]);
  return /* @__PURE__ */ import_react11.default.createElement(MediaQueryContext.Provider, {
    value: context
  }, /* @__PURE__ */ import_react11.default.createElement(EventListener, {
    event: "resize",
    handler: handleResize
  }), children);
};

// node_modules/@shopify/polaris/build/esm/components/PortalsManager/PortalsManager.js
var import_react14 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/portals/context.js
var import_react12 = __toESM(require_react());
var PortalsManagerContext = /* @__PURE__ */ (0, import_react12.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/components/PortalsManager/components/PortalsContainer/PortalsContainer.js
var import_react13 = __toESM(require_react());
function PortalsContainerComponent(_props, ref) {
  return /* @__PURE__ */ import_react13.default.createElement("div", {
    id: "PolarisPortalsContainer",
    ref
  });
}
var PortalsContainer = /* @__PURE__ */ (0, import_react13.forwardRef)(PortalsContainerComponent);

// node_modules/@shopify/polaris/build/esm/components/PortalsManager/PortalsManager.js
function PortalsManager({
  children,
  container
}) {
  const [portalContainerElement, setPortalContainerElement] = (0, import_react14.useState)(null);
  const currentContainer = container !== null && container !== void 0 ? container : portalContainerElement;
  const contextValue = (0, import_react14.useMemo)(() => ({
    container: currentContainer
  }), [currentContainer]);
  return /* @__PURE__ */ import_react14.default.createElement(PortalsManagerContext.Provider, {
    value: contextValue
  }, children, container ? null : /* @__PURE__ */ import_react14.default.createElement(PortalsContainer, {
    ref: setPortalContainerElement
  }));
}

// node_modules/@shopify/polaris/build/esm/components/FocusManager/FocusManager.js
var import_react16 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/focus-manager/context.js
var import_react15 = __toESM(require_react());
var FocusManagerContext = /* @__PURE__ */ (0, import_react15.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/components/FocusManager/FocusManager.js
function FocusManager({
  children
}) {
  const [trapFocusList, setTrapFocusList] = (0, import_react16.useState)([]);
  const add = (0, import_react16.useCallback)((id) => {
    setTrapFocusList((list) => [...list, id]);
  }, []);
  const remove = (0, import_react16.useCallback)((id) => {
    let removed = true;
    setTrapFocusList((list) => {
      const clone = [...list];
      const index = clone.indexOf(id);
      if (index === -1) {
        removed = false;
      } else {
        clone.splice(index, 1);
      }
      return clone;
    });
    return removed;
  }, []);
  const value = (0, import_react16.useMemo)(() => ({
    trapFocusList,
    add,
    remove
  }), [add, trapFocusList, remove]);
  return /* @__PURE__ */ import_react16.default.createElement(FocusManagerContext.Provider, {
    value
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/EphemeralPresenceManager/EphemeralPresenceManager.js
var import_react18 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/ephemeral-presence-manager/context.js
var import_react17 = __toESM(require_react());
var EphemeralPresenceManagerContext = /* @__PURE__ */ (0, import_react17.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/components/EphemeralPresenceManager/EphemeralPresenceManager.js
var defaultState = {
  tooltip: 0
};
function EphemeralPresenceManager({
  children
}) {
  const [presenceCounter, setPresenceCounter] = (0, import_react18.useState)(defaultState);
  const addPresence = (0, import_react18.useCallback)((key) => {
    setPresenceCounter((prevList) => ({
      ...prevList,
      [key]: prevList[key] + 1
    }));
  }, []);
  const removePresence = (0, import_react18.useCallback)((key) => {
    setPresenceCounter((prevList) => ({
      ...prevList,
      [key]: prevList[key] - 1
    }));
  }, []);
  const value = (0, import_react18.useMemo)(() => ({
    presenceList: Object.entries(presenceCounter).reduce((previousValue, currentValue) => {
      const [key, value2] = currentValue;
      return {
        ...previousValue,
        [key]: value2 >= 1
      };
    }, {}),
    presenceCounter,
    addPresence,
    removePresence
  }), [addPresence, removePresence, presenceCounter]);
  return /* @__PURE__ */ import_react18.default.createElement(EphemeralPresenceManagerContext.Provider, {
    value
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/AppProvider/AppProvider.js
var AppProvider = class extends import_react19.Component {
  constructor(props) {
    super(props);
    this.stickyManager = void 0;
    this.scrollLockManager = void 0;
    this.uniqueIdFactory = void 0;
    this.setBodyStyles = () => {
      document.body.style.backgroundColor = "var(--p-color-bg-app)";
      document.body.style.color = "var(--p-color-text)";
    };
    this.stickyManager = new StickyManager();
    this.scrollLockManager = new ScrollLockManager();
    this.uniqueIdFactory = new UniqueIdFactory(globalIdGeneratorFactory);
    const {
      i18n,
      linkComponent
    } = this.props;
    this.state = {
      link: linkComponent,
      intl: new I18n(i18n)
    };
  }
  componentDidMount() {
    if (document != null) {
      this.stickyManager.setContainer(document);
      this.setBodyStyles();
    }
  }
  componentDidUpdate({
    i18n: prevI18n,
    linkComponent: prevLinkComponent
  }) {
    const {
      i18n,
      linkComponent
    } = this.props;
    if (i18n === prevI18n && linkComponent === prevLinkComponent) {
      return;
    }
    this.setState({
      link: linkComponent,
      intl: new I18n(i18n)
    });
  }
  render() {
    const {
      children,
      features = {}
    } = this.props;
    const {
      intl,
      link
    } = this.state;
    return /* @__PURE__ */ import_react19.default.createElement(FeaturesContext.Provider, {
      value: features
    }, /* @__PURE__ */ import_react19.default.createElement(I18nContext.Provider, {
      value: intl
    }, /* @__PURE__ */ import_react19.default.createElement(ScrollLockManagerContext.Provider, {
      value: this.scrollLockManager
    }, /* @__PURE__ */ import_react19.default.createElement(StickyManagerContext.Provider, {
      value: this.stickyManager
    }, /* @__PURE__ */ import_react19.default.createElement(UniqueIdFactoryContext.Provider, {
      value: this.uniqueIdFactory
    }, /* @__PURE__ */ import_react19.default.createElement(LinkContext.Provider, {
      value: link
    }, /* @__PURE__ */ import_react19.default.createElement(MediaQueryProvider, null, /* @__PURE__ */ import_react19.default.createElement(PortalsManager, null, /* @__PURE__ */ import_react19.default.createElement(FocusManager, null, /* @__PURE__ */ import_react19.default.createElement(EphemeralPresenceManager, null, children))))))))));
  }
};

// node_modules/@shopify/polaris/build/esm/components/Text/Text.js
var import_react20 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/css.js
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function variationName(name, value) {
  return `${name}${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}
function sanitizeCustomProperties(styles69) {
  const nonNullValues = Object.entries(styles69).filter(([_, value]) => value != null);
  return nonNullValues.length ? Object.fromEntries(nonNullValues) : void 0;
}
function getResponsiveProps(componentName, componentProp, tokenSubgroup, responsiveProp) {
  if (!responsiveProp)
    return {};
  if (typeof responsiveProp === "string") {
    return {
      [`--pc-${componentName}-${componentProp}-xs`]: `var(--p-${tokenSubgroup}-${responsiveProp})`
    };
  }
  return Object.fromEntries(Object.entries(responsiveProp).map(([breakpointAlias, aliasOrScale]) => [`--pc-${componentName}-${componentProp}-${breakpointAlias}`, `var(--p-${tokenSubgroup}-${aliasOrScale})`]));
}
function getResponsiveValue(componentName, componentProp, responsiveProp) {
  if (!responsiveProp)
    return {};
  if (typeof responsiveProp === "string") {
    return {
      [`--pc-${componentName}-${componentProp}-xs`]: responsiveProp
    };
  }
  return Object.fromEntries(Object.entries(responsiveProp).map(([breakpointAlias, responsiveValue]) => [`--pc-${componentName}-${componentProp}-${breakpointAlias}`, responsiveValue]));
}

// node_modules/@shopify/polaris/build/esm/components/Text/Text.scss.js
var styles = {
  "root": "Polaris-Text--root",
  "block": "Polaris-Text--block",
  "truncate": "Polaris-Text--truncate",
  "visuallyHidden": "Polaris-Text--visuallyHidden",
  "start": "Polaris-Text--start",
  "center": "Polaris-Text--center",
  "end": "Polaris-Text--end",
  "justify": "Polaris-Text--justify",
  "success": "Polaris-Text--success",
  "critical": "Polaris-Text--critical",
  "warning": "Polaris-Text--warning",
  "subdued": "Polaris-Text--subdued",
  "text-inverse": "Polaris-Text__text--inverse",
  "headingXs": "Polaris-Text--headingXs",
  "headingSm": "Polaris-Text--headingSm",
  "headingMd": "Polaris-Text--headingMd",
  "headingLg": "Polaris-Text--headingLg",
  "headingXl": "Polaris-Text--headingXl",
  "heading2xl": "Polaris-Text--heading2xl",
  "heading3xl": "Polaris-Text--heading3xl",
  "heading4xl": "Polaris-Text--heading4xl",
  "bodySm": "Polaris-Text--bodySm",
  "bodyMd": "Polaris-Text--bodyMd",
  "bodyLg": "Polaris-Text--bodyLg",
  "regular": "Polaris-Text--regular",
  "medium": "Polaris-Text--medium",
  "semibold": "Polaris-Text--semibold",
  "bold": "Polaris-Text--bold",
  "break": "Polaris-Text--break",
  "numeric": "Polaris-Text--numeric"
};

// node_modules/@shopify/polaris/build/esm/components/Text/Text.js
var Text = ({
  alignment,
  as,
  breakWord,
  children,
  color: color2,
  fontWeight,
  id,
  numeric = false,
  truncate = false,
  variant,
  visuallyHidden = false
}) => {
  const Component3 = as || (visuallyHidden ? "span" : "p");
  const className = classNames(styles.root, variant && styles[variant], fontWeight && styles[fontWeight], (alignment || truncate) && styles.block, alignment && styles[alignment], breakWord && styles.break, color2 && styles[color2], numeric && styles.numeric, truncate && styles.truncate, visuallyHidden && styles.visuallyHidden);
  return /* @__PURE__ */ import_react20.default.createElement(Component3, Object.assign({
    className
  }, id && {
    id
  }), children);
};

// node_modules/@shopify/polaris/build/esm/components/Icon/Icon.js
var import_react21 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Icon/Icon.scss.js
var styles2 = {
  "Icon": "Polaris-Icon",
  "applyColor": "Polaris-Icon--applyColor",
  "hasBackdrop": "Polaris-Icon--hasBackdrop",
  "colorBase": "Polaris-Icon--colorBase",
  "colorSubdued": "Polaris-Icon--colorSubdued",
  "colorCritical": "Polaris-Icon--colorCritical",
  "colorInteractive": "Polaris-Icon--colorInteractive",
  "colorWarning": "Polaris-Icon--colorWarning",
  "colorHighlight": "Polaris-Icon--colorHighlight",
  "colorSuccess": "Polaris-Icon--colorSuccess",
  "colorPrimary": "Polaris-Icon--colorPrimary",
  "colorMagic": "Polaris-Icon--colorMagic",
  "Svg": "Polaris-Icon__Svg",
  "Img": "Polaris-Icon__Img",
  "Placeholder": "Polaris-Icon__Placeholder"
};

// node_modules/@shopify/polaris/build/esm/components/Icon/Icon.js
var COLORS_WITH_BACKDROPS = ["base", "critical", "highlight", "success", "warning"];
function Icon({
  source,
  color: color2,
  backdrop,
  accessibilityLabel
}) {
  let sourceType;
  if (typeof source === "function") {
    sourceType = "function";
  } else if (source === "placeholder") {
    sourceType = "placeholder";
  } else {
    sourceType = "external";
  }
  if (color2 && sourceType === "external" && true) {
    console.warn("Recoloring external SVGs is not supported. Set the intended color on your SVG instead.");
  }
  if (backdrop && color2 && !COLORS_WITH_BACKDROPS.includes(color2) && true) {
    console.warn(`The ${color2} variant does not have a supported backdrop color`);
  }
  const className = classNames(styles2.Icon, color2 && styles2[variationName("color", color2)], color2 && styles2.applyColor, backdrop && styles2.hasBackdrop);
  const SourceComponent = source;
  const contentMarkup = {
    function: /* @__PURE__ */ import_react21.default.createElement(SourceComponent, {
      className: styles2.Svg,
      focusable: "false",
      "aria-hidden": "true"
    }),
    placeholder: /* @__PURE__ */ import_react21.default.createElement("div", {
      className: styles2.Placeholder
    }),
    external: /* @__PURE__ */ import_react21.default.createElement("img", {
      className: styles2.Img,
      src: `data:image/svg+xml;utf8,${source}`,
      alt: "",
      "aria-hidden": "true"
    })
  };
  return /* @__PURE__ */ import_react21.default.createElement("span", {
    className
  }, /* @__PURE__ */ import_react21.default.createElement(Text, {
    as: "span",
    visuallyHidden: true
  }, accessibilityLabel), contentMarkup[sourceType]);
}

// node_modules/@shopify/polaris/build/esm/components/Badge/Badge.js
var import_react25 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/within-filter-context.js
var import_react22 = __toESM(require_react());
var WithinFilterContext = /* @__PURE__ */ (0, import_react22.createContext)(false);

// node_modules/@shopify/polaris/build/esm/components/Badge/Badge.scss.js
var styles3 = {
  "Badge": "Polaris-Badge",
  "statusSuccess": "Polaris-Badge--statusSuccess",
  "statusInfo": "Polaris-Badge--statusInfo",
  "statusAttention": "Polaris-Badge--statusAttention",
  "statusWarning": "Polaris-Badge--statusWarning",
  "statusCritical": "Polaris-Badge--statusCritical",
  "statusNew": "Polaris-Badge--statusNew",
  "withinFilter": "Polaris-Badge--withinFilter",
  "Icon": "Polaris-Badge__Icon",
  "PipContainer": "Polaris-Badge__PipContainer"
};

// node_modules/@shopify/polaris/build/esm/components/Badge/types.js
var StatusValue;
(function(StatusValue2) {
  StatusValue2["Info"] = "info";
  StatusValue2["Success"] = "success";
  StatusValue2["Warning"] = "warning";
  StatusValue2["Critical"] = "critical";
  StatusValue2["Attention"] = "attention";
  StatusValue2["New"] = "new";
})(StatusValue || (StatusValue = {}));
var ProgressValue;
(function(ProgressValue2) {
  ProgressValue2["Incomplete"] = "incomplete";
  ProgressValue2["PartiallyComplete"] = "partiallyComplete";
  ProgressValue2["Complete"] = "complete";
})(ProgressValue || (ProgressValue = {}));

// node_modules/@shopify/polaris/build/esm/components/Badge/utils.js
function getDefaultAccessibilityLabel(i18n, progress, status) {
  let progressLabel = "";
  let statusLabel = "";
  if (!progress && !status) {
    return "";
  }
  switch (progress) {
    case ProgressValue.Incomplete:
      progressLabel = i18n.translate("Polaris.Badge.PROGRESS_LABELS.incomplete");
      break;
    case ProgressValue.PartiallyComplete:
      progressLabel = i18n.translate("Polaris.Badge.PROGRESS_LABELS.partiallyComplete");
      break;
    case ProgressValue.Complete:
      progressLabel = i18n.translate("Polaris.Badge.PROGRESS_LABELS.complete");
      break;
  }
  switch (status) {
    case StatusValue.Info:
      statusLabel = i18n.translate("Polaris.Badge.STATUS_LABELS.info");
      break;
    case StatusValue.Success:
      statusLabel = i18n.translate("Polaris.Badge.STATUS_LABELS.success");
      break;
    case StatusValue.Warning:
      statusLabel = i18n.translate("Polaris.Badge.STATUS_LABELS.warning");
      break;
    case StatusValue.Critical:
      statusLabel = i18n.translate("Polaris.Badge.STATUS_LABELS.critical");
      break;
    case StatusValue.Attention:
      statusLabel = i18n.translate("Polaris.Badge.STATUS_LABELS.attention");
      break;
    case StatusValue.New:
      statusLabel = i18n.translate("Polaris.Badge.STATUS_LABELS.new");
      break;
  }
  if (!status && progress) {
    return progressLabel;
  } else if (status && !progress) {
    return statusLabel;
  } else {
    return i18n.translate("Polaris.Badge.progressAndStatus", {
      progressLabel,
      statusLabel
    });
  }
}

// node_modules/@shopify/polaris/build/esm/components/Badge/components/Pip/Pip.js
var import_react24 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Badge/components/Pip/Pip.scss.js
var styles4 = {
  "Pip": "Polaris-Badge-Pip",
  "statusInfo": "Polaris-Badge-Pip--statusInfo",
  "statusSuccess": "Polaris-Badge-Pip--statusSuccess",
  "statusNew": "Polaris-Badge-Pip--statusNew",
  "statusAttention": "Polaris-Badge-Pip--statusAttention",
  "statusWarning": "Polaris-Badge-Pip--statusWarning",
  "statusCritical": "Polaris-Badge-Pip--statusCritical",
  "progressIncomplete": "Polaris-Badge-Pip--progressIncomplete",
  "progressPartiallyComplete": "Polaris-Badge-Pip--progressPartiallyComplete",
  "progressComplete": "Polaris-Badge-Pip--progressComplete"
};

// node_modules/@shopify/polaris/build/esm/utilities/i18n/hooks.js
var import_react23 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/errors.js
var MissingAppProviderError = class extends Error {
  constructor(message = "") {
    super(`${message ? `${message} ` : message}Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.`);
    this.name = "MissingAppProviderError";
  }
};

// node_modules/@shopify/polaris/build/esm/utilities/i18n/hooks.js
function useI18n() {
  const i18n = (0, import_react23.useContext)(I18nContext);
  if (!i18n) {
    throw new MissingAppProviderError("No i18n was provided.");
  }
  return i18n;
}

// node_modules/@shopify/polaris/build/esm/components/Badge/components/Pip/Pip.js
function Pip({
  status,
  progress = "complete",
  accessibilityLabelOverride
}) {
  const i18n = useI18n();
  const className = classNames(styles4.Pip, status && styles4[variationName("status", status)], progress && styles4[variationName("progress", progress)]);
  const accessibilityLabel = accessibilityLabelOverride ? accessibilityLabelOverride : getDefaultAccessibilityLabel(i18n, progress, status);
  return /* @__PURE__ */ import_react24.default.createElement("span", {
    className
  }, /* @__PURE__ */ import_react24.default.createElement(Text, {
    as: "span",
    visuallyHidden: true
  }, accessibilityLabel));
}

// node_modules/@shopify/polaris/build/esm/components/Badge/Badge.js
var DEFAULT_SIZE = "medium";
function Badge({
  children,
  status,
  progress,
  icon,
  size = DEFAULT_SIZE,
  statusAndProgressLabelOverride
}) {
  const i18n = useI18n();
  const withinFilter = (0, import_react25.useContext)(WithinFilterContext);
  const className = classNames(
    styles3.Badge,
    status && styles3[variationName("status", status)],
    icon && styles3.icon,
    // TODO: remove support for the size prop in the next major release
    size && size !== DEFAULT_SIZE && styles3[variationName("size", size)],
    withinFilter && styles3.withinFilter
  );
  const accessibilityLabel = statusAndProgressLabelOverride ? statusAndProgressLabelOverride : getDefaultAccessibilityLabel(i18n, progress, status);
  let accessibilityMarkup = Boolean(accessibilityLabel) && /* @__PURE__ */ import_react25.default.createElement(Text, {
    as: "span",
    visuallyHidden: true
  }, accessibilityLabel);
  if (progress && !icon) {
    accessibilityMarkup = /* @__PURE__ */ import_react25.default.createElement("span", {
      className: styles3.PipContainer
    }, /* @__PURE__ */ import_react25.default.createElement(Pip, {
      progress,
      status,
      accessibilityLabelOverride: accessibilityLabel
    }));
  }
  return /* @__PURE__ */ import_react25.default.createElement("span", {
    className
  }, accessibilityMarkup, icon && /* @__PURE__ */ import_react25.default.createElement("span", {
    className: styles3.Icon
  }, /* @__PURE__ */ import_react25.default.createElement(Icon, {
    source: icon
  })), children && /* @__PURE__ */ import_react25.default.createElement(Text, {
    as: "span",
    variant: "bodySm",
    fontWeight: status === "new" ? "medium" : void 0
  }, children));
}
Badge.Pip = Pip;

// node_modules/@shopify/polaris/build/esm/components/Button/Button.js
var import_react70 = __toESM(require_react());

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/ArrowLeftMinor.svg.mjs
var import_react26 = __toESM(require_react(), 1);
var SvgArrowLeftMinor = function SvgArrowLeftMinor2(props) {
  return /* @__PURE__ */ import_react26.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react26.default.createElement("path", {
    d: "M17 9h-11.586l3.293-3.293a.999.999 0 1 0-1.414-1.414l-5 5a.999.999 0 0 0 0 1.414l5 5a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-3.293-3.293h11.586a1 1 0 1 0 0-2z"
  }));
};

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/CancelSmallMinor.svg.mjs
var import_react27 = __toESM(require_react(), 1);
var SvgCancelSmallMinor = function SvgCancelSmallMinor2(props) {
  return /* @__PURE__ */ import_react27.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react27.default.createElement("path", {
    d: "M6.707 5.293a1 1 0 0 0-1.414 1.414l3.293 3.293-3.293 3.293a1 1 0 1 0 1.414 1.414l3.293-3.293 3.293 3.293a1 1 0 0 0 1.414-1.414l-3.293-3.293 3.293-3.293a1 1 0 0 0-1.414-1.414l-3.293 3.293-3.293-3.293Z"
  }));
};

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/CaretDownMinor.svg.mjs
var import_react28 = __toESM(require_react(), 1);
var SvgCaretDownMinor = function SvgCaretDownMinor2(props) {
  return /* @__PURE__ */ import_react28.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react28.default.createElement("path", {
    d: "M13.098 8h-6.196c-.751 0-1.172.754-.708 1.268l3.098 3.432c.36.399 1.055.399 1.416 0l3.098-3.433c.464-.513.043-1.267-.708-1.267Z"
  }));
};

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/CaretUpMinor.svg.mjs
var import_react29 = __toESM(require_react(), 1);
var SvgCaretUpMinor = function SvgCaretUpMinor2(props) {
  return /* @__PURE__ */ import_react29.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react29.default.createElement("path", {
    d: "M6.902 12h6.196c.751 0 1.172-.754.708-1.268l-3.098-3.432c-.36-.399-1.055-.399-1.416 0l-3.098 3.433c-.464.513-.043 1.267.708 1.267Z"
  }));
};

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/ChevronLeftMinor.svg.mjs
var import_react30 = __toESM(require_react(), 1);
var SvgChevronLeftMinor = function SvgChevronLeftMinor2(props) {
  return /* @__PURE__ */ import_react30.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react30.default.createElement("path", {
    d: "M12 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414l-4.293 4.293 4.293 4.293a.999.999 0 0 1-.707 1.707z"
  }));
};

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/ChevronRightMinor.svg.mjs
var import_react31 = __toESM(require_react(), 1);
var SvgChevronRightMinor = function SvgChevronRightMinor2(props) {
  return /* @__PURE__ */ import_react31.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react31.default.createElement("path", {
    d: "M8 16a.999.999 0 0 1-.707-1.707l4.293-4.293-4.293-4.293a.999.999 0 1 1 1.414-1.414l5 5a.999.999 0 0 1 0 1.414l-5 5a.997.997 0 0 1-.707.293z"
  }));
};

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/CircleAlertMajor.svg.mjs
var import_react32 = __toESM(require_react(), 1);
var SvgCircleAlertMajor = function SvgCircleAlertMajor2(props) {
  return /* @__PURE__ */ import_react32.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react32.default.createElement("path", {
    fillRule: "evenodd",
    d: "M10 0c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zm-1 6a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0v-4zm1 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
  }));
};

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/CircleCancelMinor.svg.mjs
var import_react33 = __toESM(require_react(), 1);
var SvgCircleCancelMinor = function SvgCircleCancelMinor2(props) {
  return /* @__PURE__ */ import_react33.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react33.default.createElement("path", {
    fillRule: "evenodd",
    d: "M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-2.293 4.293a1 1 0 0 0-1.414 1.414l2.293 2.293-2.293 2.293a1 1 0 1 0 1.414 1.414l2.293-2.293 2.293 2.293a1 1 0 1 0 1.414-1.414l-2.293-2.293 2.293-2.293a1 1 0 0 0-1.414-1.414l-2.293 2.293-2.293-2.293z"
  }));
};

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/DiamondAlertMinor.svg.mjs
var import_react34 = __toESM(require_react(), 1);
var SvgDiamondAlertMinor = function SvgDiamondAlertMinor2(props) {
  return /* @__PURE__ */ import_react34.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react34.default.createElement("path", {
    fillRule: "evenodd",
    d: "M11.42 2.588a2.007 2.007 0 0 0-2.84 0l-5.992 5.993a2.007 2.007 0 0 0 0 2.838l5.993 5.993a2.007 2.007 0 0 0 2.838 0l5.993-5.993a2.007 2.007 0 0 0 0-2.838l-5.993-5.993Zm-2.223 4.2a.803.803 0 1 1 1.606 0v3.212a.803.803 0 1 1-1.606 0v-3.211Zm1.606 6.423a.803.803 0 1 1-1.606 0 .803.803 0 0 1 1.606 0Z"
  }));
};

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/HorizontalDotsMinor.svg.mjs
var import_react35 = __toESM(require_react(), 1);
var SvgHorizontalDotsMinor = function SvgHorizontalDotsMinor2(props) {
  return /* @__PURE__ */ import_react35.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react35.default.createElement("path", {
    d: "M6 10a2 2 0 1 1-4.001-.001 2 2 0 0 1 4.001.001zm6 0a2 2 0 1 1-4.001-.001 2 2 0 0 1 4.001.001zm6 0a2 2 0 1 1-4.001-.001 2 2 0 0 1 4.001.001z"
  }));
};

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/MobileCancelMajor.svg.mjs
var import_react36 = __toESM(require_react(), 1);
var SvgMobileCancelMajor = function SvgMobileCancelMajor2(props) {
  return /* @__PURE__ */ import_react36.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react36.default.createElement("path", {
    d: "m11.414 10 6.293-6.293a1 1 0 1 0-1.414-1.414l-6.293 6.293-6.293-6.293a1 1 0 0 0-1.414 1.414l6.293 6.293-6.293 6.293a1 1 0 1 0 1.414 1.414l6.293-6.293 6.293 6.293a.998.998 0 0 0 1.707-.707.999.999 0 0 0-.293-.707l-6.293-6.293z"
  }));
};

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/MobileHamburgerMajor.svg.mjs
var import_react37 = __toESM(require_react(), 1);
var SvgMobileHamburgerMajor = function SvgMobileHamburgerMajor2(props) {
  return /* @__PURE__ */ import_react37.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react37.default.createElement("path", {
    d: "M19 11h-18a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zm0-7h-18a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zm0 14h-18a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z"
  }));
};

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/SearchMinor.svg.mjs
var import_react38 = __toESM(require_react(), 1);
var SvgSearchMinor = function SvgSearchMinor2(props) {
  return /* @__PURE__ */ import_react38.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react38.default.createElement("path", {
    d: "M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm9.707 4.293-4.82-4.82a5.968 5.968 0 0 0 1.113-3.473 6 6 0 0 0-12 0 6 6 0 0 0 6 6 5.968 5.968 0 0 0 3.473-1.113l4.82 4.82a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414z"
  }));
};

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/SelectMinor.svg.mjs
var import_react39 = __toESM(require_react(), 1);
var SvgSelectMinor = function SvgSelectMinor2(props) {
  return /* @__PURE__ */ import_react39.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react39.default.createElement("path", {
    d: "M7.676 9h4.648c.563 0 .879-.603.53-1.014l-2.323-2.746a.708.708 0 0 0-1.062 0l-2.324 2.746c-.347.411-.032 1.014.531 1.014Zm4.648 2h-4.648c-.563 0-.878.603-.53 1.014l2.323 2.746c.27.32.792.32 1.062 0l2.323-2.746c.349-.411.033-1.014-.53-1.014Z"
  }));
};

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/SortAscendingMajor.svg.mjs
var import_react40 = __toESM(require_react(), 1);
var SvgSortAscendingMajor = function SvgSortAscendingMajor2(props) {
  return /* @__PURE__ */ import_react40.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react40.default.createElement("path", {
    d: "M12.324 9h-4.648c-.563 0-.878-.603-.53-1.014l2.323-2.746a.708.708 0 0 1 1.062 0l2.323 2.746c.349.411.033 1.014-.53 1.014Z"
  }), /* @__PURE__ */ import_react40.default.createElement("path", {
    d: "M7.676 11h4.648c.563 0 .879.603.53 1.014l-2.323 2.746a.708.708 0 0 1-1.062 0l-2.324-2.746c-.347-.411-.032-1.014.531-1.014Z",
    fillOpacity: 0.5
  }));
};

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/SortDescendingMajor.svg.mjs
var import_react41 = __toESM(require_react(), 1);
var SvgSortDescendingMajor = function SvgSortDescendingMajor2(props) {
  return /* @__PURE__ */ import_react41.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react41.default.createElement("path", {
    d: "M12.324 9h-4.648c-.563 0-.878-.603-.53-1.014l2.323-2.746a.708.708 0 0 1 1.062 0l2.323 2.746c.349.411.033 1.014-.53 1.014Z",
    fillOpacity: 0.5
  }), /* @__PURE__ */ import_react41.default.createElement("path", {
    d: "M7.676 11h4.648c.563 0 .879.603.53 1.014l-2.323 2.746a.708.708 0 0 1-1.062 0l-2.324-2.746c-.347-.411-.032-1.014.531-1.014Z"
  }));
};

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/icons/UploadMajor.svg.mjs
var import_react42 = __toESM(require_react(), 1);
var SvgUploadMajor = function SvgUploadMajor2(props) {
  return /* @__PURE__ */ import_react42.default.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, props), /* @__PURE__ */ import_react42.default.createElement("path", {
    fillRule: "evenodd",
    d: "M20 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10zm-14.707-1.707 4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414l-2.293-2.293v7.586a1 1 0 1 1-2 0v-7.586l-2.293 2.293a1 1 0 0 1-1.414-1.414z"
  }));
};

// node_modules/@shopify/polaris/node_modules/@shopify/polaris-icons/dist/index.mjs
var import_react43 = __toESM(require_react(), 1);

// node_modules/@shopify/polaris/build/esm/utilities/is-element-in-viewport.js
function isElementInViewport(element) {
  const {
    top,
    left,
    bottom,
    right
  } = element.getBoundingClientRect();
  return top >= 0 && right <= window.innerWidth && bottom <= window.innerHeight && left >= 0;
}

// node_modules/@shopify/polaris/build/esm/utilities/focus.js
var FOCUSABLE_SELECTOR = 'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not([aria-disabled="true"]):not([tabindex="-1"]):not(:disabled),*[tabindex]';
var KEYBOARD_FOCUSABLE_SELECTORS = 'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not([aria-disabled="true"]):not([tabindex="-1"]):not(:disabled),*[tabindex]:not([tabindex="-1"])';
var MENUITEM_FOCUSABLE_SELECTORS = 'a[role="menuitem"],frame[role="menuitem"],iframe[role="menuitem"],input[role="menuitem"]:not([type=hidden]):not(:disabled),select[role="menuitem"]:not(:disabled),textarea[role="menuitem"]:not(:disabled),button[role="menuitem"]:not(:disabled),*[tabindex]:not([tabindex="-1"])';
var handleMouseUpByBlurring = ({
  currentTarget
}) => currentTarget.blur();
function nextFocusableNode(node, filter) {
  const allFocusableElements = [...document.querySelectorAll(FOCUSABLE_SELECTOR)];
  const sliceLocation = allFocusableElements.indexOf(node) + 1;
  const focusableElementsAfterNode = allFocusableElements.slice(sliceLocation);
  for (const focusableElement of focusableElementsAfterNode) {
    if (isElementInViewport(focusableElement) && (!filter || filter && filter(focusableElement))) {
      return focusableElement;
    }
  }
  return null;
}
function findFirstFocusableNode(element, onlyDescendants = true) {
  if (!onlyDescendants && matches(element, FOCUSABLE_SELECTOR)) {
    return element;
  }
  return element.querySelector(FOCUSABLE_SELECTOR);
}
function findFirstFocusableNodeIncludingDisabled(element) {
  const focusableSelector = `a,button,frame,iframe,input:not([type=hidden]),select,textarea,*[tabindex]`;
  if (matches(element, focusableSelector)) {
    return element;
  }
  return element.querySelector(focusableSelector);
}
function focusFirstFocusableNode(element, onlyDescendants = true) {
  var _findFirstFocusableNo;
  (_findFirstFocusableNo = findFirstFocusableNode(element, onlyDescendants)) === null || _findFirstFocusableNo === void 0 ? void 0 : _findFirstFocusableNo.focus();
}
function focusNextFocusableNode(node, filter) {
  const nextFocusable = nextFocusableNode(node, filter);
  if (nextFocusable && nextFocusable instanceof HTMLElement) {
    nextFocusable.focus();
    return true;
  }
  return false;
}
function findFirstKeyboardFocusableNode(element, onlyDescendants = true) {
  if (!onlyDescendants && matches(element, KEYBOARD_FOCUSABLE_SELECTORS)) {
    return element;
  }
  return element.querySelector(KEYBOARD_FOCUSABLE_SELECTORS);
}
function focusFirstKeyboardFocusableNode(element, onlyDescendants = true) {
  const firstFocusable = findFirstKeyboardFocusableNode(element, onlyDescendants);
  if (firstFocusable) {
    firstFocusable.focus();
    return true;
  }
  return false;
}
function findLastKeyboardFocusableNode(element, onlyDescendants = true) {
  if (!onlyDescendants && matches(element, KEYBOARD_FOCUSABLE_SELECTORS)) {
    return element;
  }
  const allFocusable = element.querySelectorAll(KEYBOARD_FOCUSABLE_SELECTORS);
  return allFocusable[allFocusable.length - 1];
}
function focusLastKeyboardFocusableNode(element, onlyDescendants = true) {
  const lastFocusable = findLastKeyboardFocusableNode(element, onlyDescendants);
  if (lastFocusable) {
    lastFocusable.focus();
    return true;
  }
  return false;
}
function wrapFocusPreviousFocusableMenuItem(parentElement, currentFocusedElement) {
  const allFocusableChildren = getMenuFocusableDescendants(parentElement);
  const currentItemIdx = getCurrentFocusedElementIndex(allFocusableChildren, currentFocusedElement);
  if (currentItemIdx === -1) {
    allFocusableChildren[0].focus();
  } else {
    allFocusableChildren[(currentItemIdx - 1 + allFocusableChildren.length) % allFocusableChildren.length].focus();
  }
}
function wrapFocusNextFocusableMenuItem(parentElement, currentFocusedElement) {
  const allFocusableChildren = getMenuFocusableDescendants(parentElement);
  const currentItemIdx = getCurrentFocusedElementIndex(allFocusableChildren, currentFocusedElement);
  if (currentItemIdx === -1) {
    allFocusableChildren[0].focus();
  } else {
    allFocusableChildren[(currentItemIdx + 1) % allFocusableChildren.length].focus();
  }
}
function getMenuFocusableDescendants(element) {
  return element.querySelectorAll(MENUITEM_FOCUSABLE_SELECTORS);
}
function getCurrentFocusedElementIndex(allFocusableChildren, currentFocusedElement) {
  let currentItemIdx = 0;
  for (const focusableChild of allFocusableChildren) {
    if (focusableChild === currentFocusedElement) {
      break;
    }
    currentItemIdx++;
  }
  return currentItemIdx === allFocusableChildren.length ? -1 : currentItemIdx;
}
function matches(node, selector) {
  if (node.matches) {
    return node.matches(selector);
  }
  const matches2 = (node.ownerDocument || document).querySelectorAll(selector);
  let i = matches2.length;
  while (--i >= 0 && matches2.item(i) !== node)
    return i > -1;
}

// node_modules/@shopify/polaris/build/esm/utilities/use-disable-interaction.js
var import_react44 = __toESM(require_react());
function useDisableClick(disabled, handleClick) {
  const handleClickWrapper = (0, import_react44.useCallback)((event) => {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, [disabled]);
  if (!disabled) {
    return handleClick;
  }
  return handleClickWrapper;
}

// node_modules/@shopify/polaris/build/esm/components/Button/Button.scss.js
var styles5 = {
  "Button": "Polaris-Button",
  "pressed": "Polaris-Button--pressed",
  "disabled": "Polaris-Button--disabled",
  "connectedDisclosure": "Polaris-Button--connectedDisclosure",
  "Content": "Polaris-Button__Content",
  "plain": "Polaris-Button--plain",
  "textAlignLeft": "Polaris-Button--textAlignLeft",
  "textAlignStart": "Polaris-Button--textAlignStart",
  "textAlignCenter": "Polaris-Button--textAlignCenter",
  "textAlignRight": "Polaris-Button--textAlignRight",
  "textAlignEnd": "Polaris-Button--textAlignEnd",
  "Icon": "Polaris-Button__Icon",
  "fullWidth": "Polaris-Button--fullWidth",
  "hidden": "Polaris-Button--hidden",
  "Spinner": "Polaris-Button__Spinner",
  "primary": "Polaris-Button--primary",
  "destructive": "Polaris-Button--destructive",
  "primaryPlain": "Polaris-Button--primaryPlain",
  "outline": "Polaris-Button--outline",
  "loading": "Polaris-Button--loading",
  "removeUnderline": "Polaris-Button--removeUnderline",
  "iconOnly": "Polaris-Button--iconOnly",
  "sizeSlim": "Polaris-Button--sizeSlim",
  "sizeLarge": "Polaris-Button--sizeLarge",
  "sizeMicro": "Polaris-Button--sizeMicro",
  "monochrome": "Polaris-Button--monochrome",
  "Text": "Polaris-Button__Text",
  "ConnectedDisclosureWrapper": "Polaris-Button__ConnectedDisclosureWrapper",
  "ConnectedDisclosure": "Polaris-Button__ConnectedDisclosure"
};

// node_modules/@shopify/polaris/build/esm/components/Spinner/Spinner.js
var import_react46 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/use-is-after-initial-mount.js
var import_react45 = __toESM(require_react());
function useIsAfterInitialMount() {
  const [isAfterInitialMount, setIsAfterInitialMount] = (0, import_react45.useState)(false);
  (0, import_react45.useEffect)(() => {
    setIsAfterInitialMount(true);
  }, []);
  return isAfterInitialMount;
}

// node_modules/@shopify/polaris/build/esm/components/Spinner/Spinner.scss.js
var styles6 = {
  "Spinner": "Polaris-Spinner",
  "sizeSmall": "Polaris-Spinner--sizeSmall",
  "sizeLarge": "Polaris-Spinner--sizeLarge"
};

// node_modules/@shopify/polaris/build/esm/components/Spinner/Spinner.js
function Spinner({
  size = "large",
  accessibilityLabel,
  hasFocusableParent
}) {
  const isAfterInitialMount = useIsAfterInitialMount();
  const className = classNames(styles6.Spinner, size && styles6[variationName("size", size)]);
  const spinnerSVGMarkup = size === "large" ? /* @__PURE__ */ import_react46.default.createElement("svg", {
    viewBox: "0 0 44 44",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react46.default.createElement("path", {
    d: "M15.542 1.487A21.507 21.507 0 00.5 22c0 11.874 9.626 21.5 21.5 21.5 9.847 0 18.364-6.675 20.809-16.072a1.5 1.5 0 00-2.904-.756C37.803 34.755 30.473 40.5 22 40.5 11.783 40.5 3.5 32.217 3.5 22c0-8.137 5.3-15.247 12.942-17.65a1.5 1.5 0 10-.9-2.863z"
  })) : /* @__PURE__ */ import_react46.default.createElement("svg", {
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react46.default.createElement("path", {
    d: "M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"
  }));
  const spanAttributes = {
    ...!hasFocusableParent && {
      role: "status"
    }
  };
  const accessibilityLabelMarkup = (isAfterInitialMount || !hasFocusableParent) && /* @__PURE__ */ import_react46.default.createElement(Text, {
    as: "span",
    visuallyHidden: true
  }, accessibilityLabel);
  return /* @__PURE__ */ import_react46.default.createElement(import_react46.default.Fragment, null, /* @__PURE__ */ import_react46.default.createElement("span", {
    className
  }, spinnerSVGMarkup), /* @__PURE__ */ import_react46.default.createElement("span", spanAttributes, accessibilityLabelMarkup));
}

// node_modules/@shopify/polaris/build/esm/components/Popover/Popover.js
var import_react62 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Popover/set-activator-attributes.js
function setActivatorAttributes(activator, {
  id,
  active = false,
  ariaHaspopup,
  activatorDisabled = false
}) {
  if (!activatorDisabled) {
    activator.tabIndex = activator.tabIndex || 0;
  }
  activator.setAttribute("aria-controls", id);
  activator.setAttribute("aria-owns", id);
  activator.setAttribute("aria-expanded", String(active));
  if (ariaHaspopup != null) {
    activator.setAttribute("aria-haspopup", String(ariaHaspopup));
  }
}

// node_modules/@shopify/polaris/build/esm/components/Portal/Portal.js
var import_react49 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/@shopify/polaris/build/esm/utilities/portals/hooks.js
var import_react47 = __toESM(require_react());
function usePortalsManager() {
  const portalsManager = (0, import_react47.useContext)(PortalsManagerContext);
  if (!portalsManager) {
    throw new Error("No portals manager was provided. Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");
  }
  return portalsManager;
}

// node_modules/@shopify/polaris/build/esm/utilities/unique-id/hooks.js
var import_react48 = __toESM(require_react());
function useUniqueId(prefix = "", overrideId = "") {
  const idFactory = (0, import_react48.useContext)(UniqueIdFactoryContext);
  const uniqueIdRef = (0, import_react48.useRef)(null);
  if (!idFactory) {
    throw new MissingAppProviderError("No UniqueIdFactory was provided.");
  }
  if (overrideId) {
    return overrideId;
  }
  if (!uniqueIdRef.current) {
    uniqueIdRef.current = idFactory.nextId(prefix);
  }
  return uniqueIdRef.current;
}

// node_modules/@shopify/polaris/build/esm/components/Portal/Portal.js
function Portal({
  children,
  idPrefix = "",
  onPortalCreated = noop2
}) {
  const {
    container
  } = usePortalsManager();
  const uniqueId = useUniqueId("portal");
  const portalId = idPrefix !== "" ? `${idPrefix}-${uniqueId}` : uniqueId;
  (0, import_react49.useEffect)(() => {
    onPortalCreated();
  }, [onPortalCreated]);
  return container ? /* @__PURE__ */ (0, import_react_dom.createPortal)(/* @__PURE__ */ import_react49.default.createElement("div", {
    "data-portal-id": portalId
  }, children), container) : null;
}
function noop2() {
}

// node_modules/@shopify/polaris/build/esm/components/Popover/components/PopoverOverlay/PopoverOverlay.js
var import_react61 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/components.js
var import_react50 = __toESM(require_react());
function wrapWithComponent(element, Component3, props) {
  if (element == null) {
    return null;
  }
  return isElementOfType(element, Component3) ? element : /* @__PURE__ */ import_react50.default.createElement(Component3, props, element);
}
var isComponent = true ? hotReloadComponentCheck : (AComponent, AnotherComponent) => AComponent === AnotherComponent;
function isElementOfType(element, Component3) {
  var _element$props;
  if (element == null || !/* @__PURE__ */ (0, import_react50.isValidElement)(element) || typeof element.type === "string") {
    return false;
  }
  const {
    type: defaultType
  } = element;
  const overrideType = (_element$props = element.props) === null || _element$props === void 0 ? void 0 : _element$props.__type__;
  const type = overrideType || defaultType;
  const Components = Array.isArray(Component3) ? Component3 : [Component3];
  return Components.some((AComponent) => typeof type !== "string" && isComponent(AComponent, type));
}
function elementChildren(children, predicate = () => true) {
  return import_react50.Children.toArray(children).filter((child) => /* @__PURE__ */ (0, import_react50.isValidElement)(child) && predicate(child));
}
function ConditionalWrapper({
  condition,
  wrapper,
  children
}) {
  return condition ? wrapper(children) : children;
}
function ConditionalRender({
  condition,
  children
}) {
  return condition ? children : null;
}
function hotReloadComponentCheck(AComponent, AnotherComponent) {
  const componentName = AComponent.name;
  const anotherComponentName = AnotherComponent.displayName;
  return AComponent === AnotherComponent || Boolean(componentName) && componentName === anotherComponentName;
}

// node_modules/@shopify/polaris/build/esm/types.js
var Key;
(function(Key2) {
  Key2[Key2["Backspace"] = 8] = "Backspace";
  Key2[Key2["Tab"] = 9] = "Tab";
  Key2[Key2["Enter"] = 13] = "Enter";
  Key2[Key2["Shift"] = 16] = "Shift";
  Key2[Key2["Ctrl"] = 17] = "Ctrl";
  Key2[Key2["Alt"] = 18] = "Alt";
  Key2[Key2["Pause"] = 19] = "Pause";
  Key2[Key2["CapsLock"] = 20] = "CapsLock";
  Key2[Key2["Escape"] = 27] = "Escape";
  Key2[Key2["Space"] = 32] = "Space";
  Key2[Key2["PageUp"] = 33] = "PageUp";
  Key2[Key2["PageDown"] = 34] = "PageDown";
  Key2[Key2["End"] = 35] = "End";
  Key2[Key2["Home"] = 36] = "Home";
  Key2[Key2["LeftArrow"] = 37] = "LeftArrow";
  Key2[Key2["UpArrow"] = 38] = "UpArrow";
  Key2[Key2["RightArrow"] = 39] = "RightArrow";
  Key2[Key2["DownArrow"] = 40] = "DownArrow";
  Key2[Key2["Insert"] = 45] = "Insert";
  Key2[Key2["Delete"] = 46] = "Delete";
  Key2[Key2["Key0"] = 48] = "Key0";
  Key2[Key2["Key1"] = 49] = "Key1";
  Key2[Key2["Key2"] = 50] = "Key2";
  Key2[Key2["Key3"] = 51] = "Key3";
  Key2[Key2["Key4"] = 52] = "Key4";
  Key2[Key2["Key5"] = 53] = "Key5";
  Key2[Key2["Key6"] = 54] = "Key6";
  Key2[Key2["Key7"] = 55] = "Key7";
  Key2[Key2["Key8"] = 56] = "Key8";
  Key2[Key2["Key9"] = 57] = "Key9";
  Key2[Key2["KeyA"] = 65] = "KeyA";
  Key2[Key2["KeyB"] = 66] = "KeyB";
  Key2[Key2["KeyC"] = 67] = "KeyC";
  Key2[Key2["KeyD"] = 68] = "KeyD";
  Key2[Key2["KeyE"] = 69] = "KeyE";
  Key2[Key2["KeyF"] = 70] = "KeyF";
  Key2[Key2["KeyG"] = 71] = "KeyG";
  Key2[Key2["KeyH"] = 72] = "KeyH";
  Key2[Key2["KeyI"] = 73] = "KeyI";
  Key2[Key2["KeyJ"] = 74] = "KeyJ";
  Key2[Key2["KeyK"] = 75] = "KeyK";
  Key2[Key2["KeyL"] = 76] = "KeyL";
  Key2[Key2["KeyM"] = 77] = "KeyM";
  Key2[Key2["KeyN"] = 78] = "KeyN";
  Key2[Key2["KeyO"] = 79] = "KeyO";
  Key2[Key2["KeyP"] = 80] = "KeyP";
  Key2[Key2["KeyQ"] = 81] = "KeyQ";
  Key2[Key2["KeyR"] = 82] = "KeyR";
  Key2[Key2["KeyS"] = 83] = "KeyS";
  Key2[Key2["KeyT"] = 84] = "KeyT";
  Key2[Key2["KeyU"] = 85] = "KeyU";
  Key2[Key2["KeyV"] = 86] = "KeyV";
  Key2[Key2["KeyW"] = 87] = "KeyW";
  Key2[Key2["KeyX"] = 88] = "KeyX";
  Key2[Key2["KeyY"] = 89] = "KeyY";
  Key2[Key2["KeyZ"] = 90] = "KeyZ";
  Key2[Key2["LeftMeta"] = 91] = "LeftMeta";
  Key2[Key2["RightMeta"] = 92] = "RightMeta";
  Key2[Key2["Select"] = 93] = "Select";
  Key2[Key2["Numpad0"] = 96] = "Numpad0";
  Key2[Key2["Numpad1"] = 97] = "Numpad1";
  Key2[Key2["Numpad2"] = 98] = "Numpad2";
  Key2[Key2["Numpad3"] = 99] = "Numpad3";
  Key2[Key2["Numpad4"] = 100] = "Numpad4";
  Key2[Key2["Numpad5"] = 101] = "Numpad5";
  Key2[Key2["Numpad6"] = 102] = "Numpad6";
  Key2[Key2["Numpad7"] = 103] = "Numpad7";
  Key2[Key2["Numpad8"] = 104] = "Numpad8";
  Key2[Key2["Numpad9"] = 105] = "Numpad9";
  Key2[Key2["Multiply"] = 106] = "Multiply";
  Key2[Key2["Add"] = 107] = "Add";
  Key2[Key2["Subtract"] = 109] = "Subtract";
  Key2[Key2["Decimal"] = 110] = "Decimal";
  Key2[Key2["Divide"] = 111] = "Divide";
  Key2[Key2["F1"] = 112] = "F1";
  Key2[Key2["F2"] = 113] = "F2";
  Key2[Key2["F3"] = 114] = "F3";
  Key2[Key2["F4"] = 115] = "F4";
  Key2[Key2["F5"] = 116] = "F5";
  Key2[Key2["F6"] = 117] = "F6";
  Key2[Key2["F7"] = 118] = "F7";
  Key2[Key2["F8"] = 119] = "F8";
  Key2[Key2["F9"] = 120] = "F9";
  Key2[Key2["F10"] = 121] = "F10";
  Key2[Key2["F11"] = 122] = "F11";
  Key2[Key2["F12"] = 123] = "F12";
  Key2[Key2["NumLock"] = 144] = "NumLock";
  Key2[Key2["ScrollLock"] = 145] = "ScrollLock";
  Key2[Key2["Semicolon"] = 186] = "Semicolon";
  Key2[Key2["Equals"] = 187] = "Equals";
  Key2[Key2["Comma"] = 188] = "Comma";
  Key2[Key2["Dash"] = 189] = "Dash";
  Key2[Key2["Period"] = 190] = "Period";
  Key2[Key2["ForwardSlash"] = 191] = "ForwardSlash";
  Key2[Key2["GraveAccent"] = 192] = "GraveAccent";
  Key2[Key2["OpenBracket"] = 219] = "OpenBracket";
  Key2[Key2["BackSlash"] = 220] = "BackSlash";
  Key2[Key2["CloseBracket"] = 221] = "CloseBracket";
  Key2[Key2["SingleQuote"] = 222] = "SingleQuote";
})(Key || (Key = {}));

// node_modules/@shopify/polaris/build/esm/components/Popover/Popover.scss.js
var styles7 = {
  "Popover": "Polaris-Popover",
  "PopoverOverlay": "Polaris-Popover__PopoverOverlay",
  "PopoverOverlay-entering": "Polaris-Popover__PopoverOverlay--entering",
  "PopoverOverlay-open": "Polaris-Popover__PopoverOverlay--open",
  "measuring": "Polaris-Popover--measuring",
  "PopoverOverlay-exiting": "Polaris-Popover__PopoverOverlay--exiting",
  "fullWidth": "Polaris-Popover--fullWidth",
  "Content": "Polaris-Popover__Content",
  "positionedAbove": "Polaris-Popover--positionedAbove",
  "Content-fullHeight": "Polaris-Popover__Content--fullHeight",
  "Content-fluidContent": "Polaris-Popover__Content--fluidContent",
  "Pane": "Polaris-Popover__Pane",
  "Pane-fixed": "Polaris-Popover__Pane--fixed",
  "Pane-captureOverscroll": "Polaris-Popover__Pane--captureOverscroll",
  "Section": "Polaris-Popover__Section",
  "FocusTracker": "Polaris-Popover__FocusTracker",
  "PopoverOverlay-hideOnPrint": "Polaris-Popover__PopoverOverlay--hideOnPrint"
};

// node_modules/@shopify/polaris/build/esm/components/KeypressListener/KeypressListener.js
var import_react51 = __toESM(require_react());
function KeypressListener({
  keyCode,
  handler,
  keyEvent = "keyup",
  options,
  useCapture
}) {
  const tracked = (0, import_react51.useRef)({
    handler,
    keyCode
  });
  useIsomorphicLayoutEffect(() => {
    tracked.current = {
      handler,
      keyCode
    };
  }, [handler, keyCode]);
  const handleKeyEvent = (0, import_react51.useCallback)((event) => {
    const {
      handler: handler2,
      keyCode: keyCode2
    } = tracked.current;
    if (event.keyCode === keyCode2) {
      handler2(event);
    }
  }, []);
  (0, import_react51.useEffect)(() => {
    document.addEventListener(keyEvent, handleKeyEvent, useCapture || options);
    return () => {
      document.removeEventListener(keyEvent, handleKeyEvent, useCapture || options);
    };
  }, [keyEvent, handleKeyEvent, useCapture, options]);
  return null;
}

// node_modules/@shopify/polaris/build/esm/components/PositionedOverlay/PositionedOverlay.js
var import_react57 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/PositionedOverlay/utilities/math.js
function calculateVerticalPosition(activatorRect, overlayRect, overlayMargins, scrollableContainerRect, containerRect, preferredPosition, fixed, topBarOffset = 0) {
  const activatorTop = activatorRect.top;
  const activatorBottom = activatorTop + activatorRect.height;
  const spaceAbove = activatorRect.top - topBarOffset;
  const spaceBelow = containerRect.height - activatorRect.top - activatorRect.height;
  const desiredHeight = overlayRect.height;
  const verticalMargins = overlayMargins.activator + overlayMargins.container;
  const minimumSpaceToScroll = overlayMargins.container;
  const distanceToTopScroll = activatorRect.top - Math.max(scrollableContainerRect.top, 0);
  const distanceToBottomScroll = containerRect.top + Math.min(containerRect.height, scrollableContainerRect.top + scrollableContainerRect.height) - (activatorRect.top + activatorRect.height);
  const enoughSpaceFromTopScroll = distanceToTopScroll >= minimumSpaceToScroll;
  const enoughSpaceFromBottomScroll = distanceToBottomScroll >= minimumSpaceToScroll;
  const heightIfBelow = Math.min(spaceBelow, desiredHeight);
  const heightIfAbove = Math.min(spaceAbove, desiredHeight);
  const containerRectTop = fixed ? 0 : containerRect.top;
  const positionIfAbove = {
    height: heightIfAbove - verticalMargins,
    top: activatorTop + containerRectTop - heightIfAbove,
    positioning: "above"
  };
  const positionIfBelow = {
    height: heightIfBelow - verticalMargins,
    top: activatorBottom + containerRectTop,
    positioning: "below"
  };
  if (preferredPosition === "above") {
    return (enoughSpaceFromTopScroll || distanceToTopScroll >= distanceToBottomScroll && !enoughSpaceFromBottomScroll) && (spaceAbove > desiredHeight || spaceAbove > spaceBelow) ? positionIfAbove : positionIfBelow;
  }
  if (preferredPosition === "below") {
    return (enoughSpaceFromBottomScroll || distanceToBottomScroll >= distanceToTopScroll && !enoughSpaceFromTopScroll) && (spaceBelow > desiredHeight || spaceBelow > spaceAbove) ? positionIfBelow : positionIfAbove;
  }
  if (enoughSpaceFromTopScroll && enoughSpaceFromBottomScroll) {
    return spaceAbove > spaceBelow ? positionIfAbove : positionIfBelow;
  }
  return distanceToTopScroll > minimumSpaceToScroll ? positionIfAbove : positionIfBelow;
}
function calculateHorizontalPosition(activatorRect, overlayRect, containerRect, overlayMargins, preferredAlignment) {
  const maximum = containerRect.width - overlayRect.width;
  if (preferredAlignment === "left") {
    return Math.min(maximum, Math.max(0, activatorRect.left - overlayMargins.horizontal));
  } else if (preferredAlignment === "right") {
    const activatorRight = containerRect.width - (activatorRect.left + activatorRect.width);
    return Math.min(maximum, Math.max(0, activatorRight - overlayMargins.horizontal));
  }
  return Math.min(maximum, Math.max(0, activatorRect.center.x - overlayRect.width / 2));
}
function rectIsOutsideOfRect(inner, outer) {
  const {
    center
  } = inner;
  return center.y < outer.top || center.y > outer.top + outer.height;
}
function intersectionWithViewport(rect, viewport = windowRect()) {
  const top = Math.max(rect.top, 0);
  const left = Math.max(rect.left, 0);
  const bottom = Math.min(rect.top + rect.height, viewport.height);
  const right = Math.min(rect.left + rect.width, viewport.width);
  return new Rect({
    top,
    left,
    height: bottom - top,
    width: right - left
  });
}
function windowRect() {
  return new Rect({
    top: window.scrollY,
    left: window.scrollX,
    height: window.innerHeight,
    width: document.body.clientWidth
  });
}

// node_modules/@shopify/polaris/build/esm/components/PositionedOverlay/PositionedOverlay.scss.js
var styles8 = {
  "PositionedOverlay": "Polaris-PositionedOverlay",
  "fixed": "Polaris-PositionedOverlay--fixed",
  "calculating": "Polaris-PositionedOverlay--calculating",
  "preventInteraction": "Polaris-PositionedOverlay--preventInteraction"
};

// node_modules/@shopify/polaris/build/esm/components/Scrollable/Scrollable.js
var import_react56 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/use-lazy-ref.js
var import_react52 = __toESM(require_react());
var UNIQUE_IDENTIFIER = Symbol("unique_identifier");
function useLazyRef(initialValue) {
  const lazyRef = (0, import_react52.useRef)(UNIQUE_IDENTIFIER);
  if (lazyRef.current === UNIQUE_IDENTIFIER) {
    lazyRef.current = initialValue();
  }
  return lazyRef;
}

// node_modules/@shopify/polaris/build/esm/utilities/use-component-did-mount.js
var import_react53 = __toESM(require_react());
function useComponentDidMount(callback) {
  const isAfterInitialMount = useIsAfterInitialMount();
  const hasInvokedLifeCycle = (0, import_react53.useRef)(false);
  if (isAfterInitialMount && !hasInvokedLifeCycle.current) {
    hasInvokedLifeCycle.current = true;
    return callback();
  }
}

// node_modules/@shopify/polaris/build/esm/components/Scrollable/context.js
var import_react54 = __toESM(require_react());
var ScrollableContext = /* @__PURE__ */ (0, import_react54.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/components/Scrollable/Scrollable.scss.js
var styles9 = {
  "Scrollable": "Polaris-Scrollable",
  "horizontal": "Polaris-Scrollable--horizontal",
  "vertical": "Polaris-Scrollable--vertical",
  "hasTopShadow": "Polaris-Scrollable--hasTopShadow",
  "hasBottomShadow": "Polaris-Scrollable--hasBottomShadow"
};

// node_modules/@shopify/polaris/build/esm/components/Scrollable/components/ScrollTo/ScrollTo.js
var import_react55 = __toESM(require_react());
function ScrollTo() {
  const anchorNode = (0, import_react55.useRef)(null);
  const scrollToPosition = (0, import_react55.useContext)(ScrollableContext);
  (0, import_react55.useEffect)(() => {
    if (!scrollToPosition || !anchorNode.current) {
      return;
    }
    scrollToPosition(anchorNode.current.offsetTop);
  }, [scrollToPosition]);
  const id = useUniqueId(`ScrollTo`);
  return /* @__PURE__ */ import_react55.default.createElement("a", {
    id,
    ref: anchorNode
  });
}

// node_modules/@shopify/polaris/build/esm/components/Scrollable/Scrollable.js
var MAX_SCROLL_HINT_DISTANCE = 100;
var LOW_RES_BUFFER = 2;
var ScrollableComponent = /* @__PURE__ */ (0, import_react56.forwardRef)(({
  children,
  className,
  horizontal = true,
  vertical = true,
  shadow: shadow2,
  hint,
  focusable,
  onScrolledToBottom,
  ...rest
}, forwardedRef) => {
  const [topShadow, setTopShadow] = (0, import_react56.useState)(false);
  const [bottomShadow, setBottomShadow] = (0, import_react56.useState)(false);
  const stickyManager = useLazyRef(() => new StickyManager());
  const scrollArea = (0, import_react56.useRef)(null);
  const scrollTo = (0, import_react56.useCallback)((scrollY, options = {}) => {
    var _scrollArea$current;
    const optionsBehavior = options.behavior || "smooth";
    const behavior = prefersReducedMotion() ? "auto" : optionsBehavior;
    (_scrollArea$current = scrollArea.current) === null || _scrollArea$current === void 0 ? void 0 : _scrollArea$current.scrollTo({
      top: scrollY,
      behavior
    });
  }, []);
  const defaultRef = (0, import_react56.useRef)();
  (0, import_react56.useImperativeHandle)(forwardedRef || defaultRef, () => ({
    scrollTo
  }));
  const handleScroll = (0, import_react56.useCallback)(() => {
    const currentScrollArea = scrollArea.current;
    if (!currentScrollArea) {
      return;
    }
    requestAnimationFrame(() => {
      const {
        scrollTop,
        clientHeight,
        scrollHeight
      } = currentScrollArea;
      const canScroll = Boolean(scrollHeight > clientHeight);
      const isBelowTopOfScroll = Boolean(scrollTop > 0);
      const isAtBottomOfScroll = Boolean(scrollTop + clientHeight >= scrollHeight - LOW_RES_BUFFER);
      setTopShadow(isBelowTopOfScroll);
      setBottomShadow(!isAtBottomOfScroll);
      if (canScroll && isAtBottomOfScroll && onScrolledToBottom) {
        onScrolledToBottom();
      }
    });
  }, [onScrolledToBottom]);
  useComponentDidMount(() => {
    handleScroll();
    if (hint) {
      requestAnimationFrame(() => performScrollHint(scrollArea.current));
    }
  });
  (0, import_react56.useEffect)(() => {
    var _stickyManager$curren;
    const currentScrollArea = scrollArea.current;
    if (!currentScrollArea) {
      return;
    }
    const handleResize = debounce(handleScroll, 50, {
      trailing: true
    });
    (_stickyManager$curren = stickyManager.current) === null || _stickyManager$curren === void 0 ? void 0 : _stickyManager$curren.setContainer(currentScrollArea);
    currentScrollArea.addEventListener("scroll", handleScroll);
    globalThis.addEventListener("resize", handleResize);
    return () => {
      currentScrollArea.removeEventListener("scroll", handleScroll);
      globalThis.removeEventListener("resize", handleResize);
    };
  }, [stickyManager, handleScroll]);
  const finalClassName = classNames(className, styles9.Scrollable, vertical && styles9.vertical, horizontal && styles9.horizontal, shadow2 && topShadow && styles9.hasTopShadow, shadow2 && bottomShadow && styles9.hasBottomShadow);
  return /* @__PURE__ */ import_react56.default.createElement(ScrollableContext.Provider, {
    value: scrollTo
  }, /* @__PURE__ */ import_react56.default.createElement(StickyManagerContext.Provider, {
    value: stickyManager.current
  }, /* @__PURE__ */ import_react56.default.createElement("div", Object.assign({
    className: finalClassName
  }, scrollable.props, rest, {
    ref: scrollArea,
    tabIndex: focusable ? 0 : void 0
  }), children)));
});
ScrollableComponent.displayName = "Scrollable";
function prefersReducedMotion() {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch (err) {
    return false;
  }
}
function performScrollHint(elem) {
  if (!elem || prefersReducedMotion()) {
    return;
  }
  const scrollableDistance = elem.scrollHeight - elem.clientHeight;
  const distanceToPeek = Math.min(MAX_SCROLL_HINT_DISTANCE, scrollableDistance) - LOW_RES_BUFFER;
  const goBackToTop = () => {
    requestAnimationFrame(() => {
      if (elem.scrollTop >= distanceToPeek) {
        elem.removeEventListener("scroll", goBackToTop);
        elem.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    });
  };
  elem.addEventListener("scroll", goBackToTop);
  elem.scrollTo({
    top: MAX_SCROLL_HINT_DISTANCE,
    behavior: "smooth"
  });
}
var forNode = (node) => {
  const closestElement = node.closest(scrollable.selector);
  return closestElement instanceof HTMLElement ? closestElement : document;
};
var Scrollable = ScrollableComponent;
Scrollable.ScrollTo = ScrollTo;
Scrollable.forNode = forNode;

// node_modules/@shopify/polaris/build/esm/components/PositionedOverlay/PositionedOverlay.js
var OBSERVER_CONFIG = {
  childList: true,
  subtree: true,
  characterData: true,
  attributeFilter: ["style"]
};
var PositionedOverlay = class extends import_react57.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      measuring: true,
      activatorRect: getRectForNode(this.props.activator),
      right: void 0,
      left: void 0,
      top: 0,
      height: 0,
      width: null,
      positioning: "below",
      zIndex: null,
      outsideScrollableContainer: false,
      lockPosition: false,
      chevronOffset: 0
    };
    this.overlay = null;
    this.scrollableContainers = [];
    this.observer = void 0;
    this.overlayDetails = () => {
      const {
        measuring,
        left,
        right,
        positioning,
        height,
        activatorRect,
        chevronOffset
      } = this.state;
      return {
        measuring,
        left,
        right,
        desiredHeight: height,
        positioning,
        activatorRect,
        chevronOffset
      };
    };
    this.setOverlay = (node) => {
      this.overlay = node;
    };
    this.setScrollableContainers = () => {
      const containers = [];
      let scrollableContainer = Scrollable.forNode(this.props.activator);
      if (scrollableContainer) {
        containers.push(scrollableContainer);
        while ((_scrollableContainer = scrollableContainer) !== null && _scrollableContainer !== void 0 && _scrollableContainer.parentElement) {
          var _scrollableContainer;
          scrollableContainer = Scrollable.forNode(scrollableContainer.parentElement);
          containers.push(scrollableContainer);
        }
      }
      this.scrollableContainers = containers;
    };
    this.registerScrollHandlers = () => {
      this.scrollableContainers.forEach((node) => {
        node.addEventListener("scroll", this.handleMeasurement);
      });
    };
    this.unregisterScrollHandlers = () => {
      this.scrollableContainers.forEach((node) => {
        node.removeEventListener("scroll", this.handleMeasurement);
      });
    };
    this.handleMeasurement = () => {
      const {
        lockPosition,
        top
      } = this.state;
      this.observer.disconnect();
      this.setState(({
        left,
        top: top2,
        right
      }) => ({
        left,
        right,
        top: top2,
        height: 0,
        positioning: "below",
        measuring: true
      }), () => {
        if (this.overlay == null || this.firstScrollableContainer == null) {
          return;
        }
        const {
          activator,
          preferredPosition = "below",
          preferredAlignment = "center",
          onScrollOut,
          fullWidth,
          fixed,
          preferInputActivator = true
        } = this.props;
        const preferredActivator = preferInputActivator ? activator.querySelector("input") || activator : activator;
        const activatorRect = getRectForNode(preferredActivator);
        const currentOverlayRect = getRectForNode(this.overlay);
        const scrollableElement = isDocument2(this.firstScrollableContainer) ? document.body : this.firstScrollableContainer;
        const scrollableContainerRect = getRectForNode(scrollableElement);
        const overlayRect = fullWidth ? new Rect({
          ...currentOverlayRect,
          width: activatorRect.width
        }) : currentOverlayRect;
        if (scrollableElement === document.body) {
          scrollableContainerRect.height = document.body.scrollHeight;
        }
        let topBarOffset = 0;
        const topBarElement = scrollableElement.querySelector(`${dataPolarisTopBar.selector}`);
        if (topBarElement) {
          topBarOffset = topBarElement.clientHeight;
        }
        const overlayMargins = this.overlay.firstElementChild && this.overlay.firstChild instanceof HTMLElement ? getMarginsForNode(this.overlay.firstElementChild) : {
          activator: 0,
          container: 0,
          horizontal: 0
        };
        const containerRect = windowRect();
        const zIndexForLayer = getZIndexForLayerFromNode(activator);
        const zIndex2 = zIndexForLayer == null ? zIndexForLayer : zIndexForLayer + 1;
        const verticalPosition = calculateVerticalPosition(activatorRect, overlayRect, overlayMargins, scrollableContainerRect, containerRect, preferredPosition, fixed, topBarOffset);
        const horizontalPosition = calculateHorizontalPosition(activatorRect, overlayRect, containerRect, overlayMargins, preferredAlignment);
        const chevronOffset = activatorRect.center.x - horizontalPosition;
        this.setState({
          measuring: false,
          activatorRect: getRectForNode(activator),
          left: preferredAlignment !== "right" ? horizontalPosition : void 0,
          right: preferredAlignment === "right" ? horizontalPosition : void 0,
          top: lockPosition ? top : verticalPosition.top,
          lockPosition: Boolean(fixed),
          height: verticalPosition.height || 0,
          width: fullWidth ? overlayRect.width : null,
          positioning: verticalPosition.positioning,
          outsideScrollableContainer: onScrollOut != null && rectIsOutsideOfRect(activatorRect, intersectionWithViewport(scrollableContainerRect)),
          zIndex: zIndex2,
          chevronOffset
        }, () => {
          if (!this.overlay)
            return;
          this.observer.observe(this.overlay, OBSERVER_CONFIG);
          this.observer.observe(activator, OBSERVER_CONFIG);
        });
      });
    };
    this.observer = new MutationObserver(this.handleMeasurement);
  }
  componentDidMount() {
    this.setScrollableContainers();
    if (this.scrollableContainers.length && !this.props.fixed) {
      this.registerScrollHandlers();
    }
    this.handleMeasurement();
  }
  componentWillUnmount() {
    this.observer.disconnect();
    if (this.scrollableContainers.length && !this.props.fixed) {
      this.unregisterScrollHandlers();
    }
  }
  componentDidUpdate() {
    const {
      outsideScrollableContainer,
      top
    } = this.state;
    const {
      onScrollOut,
      active
    } = this.props;
    if (active && onScrollOut != null && top !== 0 && outsideScrollableContainer) {
      onScrollOut();
    }
  }
  render() {
    const {
      left,
      right,
      top,
      zIndex: zIndex2,
      width
    } = this.state;
    const {
      render,
      fixed,
      preventInteraction,
      classNames: propClassNames,
      zIndexOverride
    } = this.props;
    const style = {
      top: top == null || isNaN(top) ? void 0 : top,
      left: left == null || isNaN(left) ? void 0 : left,
      right: right == null || isNaN(right) ? void 0 : right,
      width: width == null || isNaN(width) ? void 0 : width,
      zIndex: zIndexOverride || zIndex2 || void 0
    };
    const className = classNames(styles8.PositionedOverlay, fixed && styles8.fixed, preventInteraction && styles8.preventInteraction, propClassNames);
    return /* @__PURE__ */ import_react57.default.createElement("div", {
      className,
      style,
      ref: this.setOverlay
    }, /* @__PURE__ */ import_react57.default.createElement(EventListener, {
      event: "resize",
      handler: this.handleMeasurement
    }), render(this.overlayDetails()));
  }
  get firstScrollableContainer() {
    var _this$scrollableConta;
    return (_this$scrollableConta = this.scrollableContainers[0]) !== null && _this$scrollableConta !== void 0 ? _this$scrollableConta : null;
  }
  forceUpdatePosition() {
    requestAnimationFrame(this.handleMeasurement);
  }
};
function getMarginsForNode(node) {
  const nodeStyles = window.getComputedStyle(node);
  return {
    activator: parseFloat(nodeStyles.marginTop || "0"),
    container: parseFloat(nodeStyles.marginBottom || "0"),
    horizontal: parseFloat(nodeStyles.marginLeft || "0")
  };
}
function getZIndexForLayerFromNode(node) {
  const layerNode = node.closest(layer.selector) || document.body;
  const zIndex2 = layerNode === document.body ? "auto" : parseInt(window.getComputedStyle(layerNode).zIndex || "0", 10);
  return zIndex2 === "auto" || isNaN(zIndex2) ? null : zIndex2;
}
function isDocument2(node) {
  return node === document;
}

// node_modules/@shopify/polaris/build/esm/components/Popover/components/Pane/Pane.js
var import_react60 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Popover/components/Section/Section.js
var import_react59 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Box/Box.js
var import_react58 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Box/Box.scss.js
var styles10 = {
  "listReset": "Polaris-Box--listReset",
  "Box": "Polaris-Box",
  "visuallyHidden": "Polaris-Box--visuallyHidden",
  "printHidden": "Polaris-Box--printHidden"
};

// node_modules/@shopify/polaris/build/esm/components/Box/Box.js
var Box = /* @__PURE__ */ (0, import_react58.forwardRef)(({
  as = "div",
  background,
  borderColor,
  borderStyle,
  borderWidth,
  borderBlockStartWidth,
  borderBlockEndWidth,
  borderInlineStartWidth,
  borderInlineEndWidth,
  borderRadius,
  borderRadiusEndStart,
  borderRadiusEndEnd,
  borderRadiusStartStart,
  borderRadiusStartEnd,
  children,
  color: color2,
  id,
  minHeight,
  minWidth,
  maxWidth,
  overflowX,
  overflowY,
  outlineColor,
  outlineStyle,
  outlineWidth,
  padding,
  paddingBlockStart,
  paddingBlockEnd,
  paddingInlineStart,
  paddingInlineEnd,
  role,
  shadow: shadow2,
  tabIndex,
  width,
  printHidden,
  visuallyHidden,
  position,
  insetBlockStart,
  insetBlockEnd,
  insetInlineStart,
  insetInlineEnd,
  zIndex: zIndex2,
  opacity,
  ...restProps
}, ref) => {
  const borderStyleValue = borderStyle ? borderStyle : borderColor || borderWidth || borderBlockStartWidth || borderBlockEndWidth || borderInlineStartWidth || borderInlineEndWidth ? "solid" : void 0;
  const outlineStyleValue = outlineStyle ? outlineStyle : outlineColor || outlineWidth ? "solid" : void 0;
  const style = {
    "--pc-box-color": color2 ? `var(--p-color-${color2})` : void 0,
    "--pc-box-background": background ? `var(--p-color-${background})` : void 0,
    // eslint-disable-next-line no-nested-ternary
    "--pc-box-border-color": borderColor ? borderColor === "transparent" ? "transparent" : `var(--p-color-${borderColor})` : void 0,
    "--pc-box-border-style": borderStyleValue,
    "--pc-box-border-radius": borderRadius ? `var(--p-border-radius-${borderRadius})` : void 0,
    "--pc-box-border-radius-end-start": borderRadiusEndStart ? `var(--p-border-radius-${borderRadiusEndStart})` : void 0,
    "--pc-box-border-radius-end-end": borderRadiusEndEnd ? `var(--p-border-radius-${borderRadiusEndEnd})` : void 0,
    "--pc-box-border-radius-start-start": borderRadiusStartStart ? `var(--p-border-radius-${borderRadiusStartStart})` : void 0,
    "--pc-box-border-radius-start-end": borderRadiusStartEnd ? `var(--p-border-radius-${borderRadiusStartEnd})` : void 0,
    "--pc-box-border-width": borderWidth ? `var(--p-border-width-${borderWidth})` : void 0,
    "--pc-box-border-block-start-width": borderBlockStartWidth ? `var(--p-border-width-${borderBlockStartWidth})` : void 0,
    "--pc-box-border-block-end-width": borderBlockEndWidth ? `var(--p-border-width-${borderBlockEndWidth})` : void 0,
    "--pc-box-border-inline-start-width": borderInlineStartWidth ? `var(--p-border-width-${borderInlineStartWidth})` : void 0,
    "--pc-box-border-inline-end-width": borderInlineEndWidth ? `var(--p-border-width-${borderInlineEndWidth})` : void 0,
    "--pc-box-min-height": minHeight,
    "--pc-box-min-width": minWidth,
    "--pc-box-max-width": maxWidth,
    "--pc-box-outline-color": outlineColor ? `var(--p-color-${outlineColor})` : void 0,
    "--pc-box-outline-style": outlineStyleValue,
    "--pc-box-outline-width": outlineWidth ? `var(--p-border-width-${outlineWidth})` : void 0,
    "--pc-box-overflow-x": overflowX,
    "--pc-box-overflow-y": overflowY,
    ...getResponsiveProps("box", "padding-block-end", "space", paddingBlockEnd || padding),
    ...getResponsiveProps("box", "padding-block-start", "space", paddingBlockStart || padding),
    ...getResponsiveProps("box", "padding-inline-start", "space", paddingInlineStart || padding),
    ...getResponsiveProps("box", "padding-inline-end", "space", paddingInlineEnd || padding),
    "--pc-box-shadow": shadow2 ? `var(--p-shadow-${shadow2})` : void 0,
    "--pc-box-width": width,
    position,
    "--pc-box-inset-block-start": insetBlockStart ? `var(--p-space-${insetBlockStart})` : void 0,
    "--pc-box-inset-block-end": insetBlockEnd ? `var(--p-space-${insetBlockEnd})` : void 0,
    "--pc-box-inset-inline-start": insetInlineStart ? `var(--p-space-${insetInlineStart})` : void 0,
    "--pc-box-inset-inline-end": insetInlineEnd ? `var(--p-space-${insetInlineEnd})` : void 0,
    zIndex: zIndex2,
    opacity
  };
  const className = classNames(styles10.Box, visuallyHidden && styles10.visuallyHidden, printHidden && styles10.printHidden, as === "ul" && styles10.listReset);
  return /* @__PURE__ */ import_react58.default.createElement(as, {
    className,
    id,
    ref,
    style: sanitizeCustomProperties(style),
    role,
    tabIndex,
    ...restProps
  }, children);
});
Box.displayName = "Box";

// node_modules/@shopify/polaris/build/esm/components/Popover/components/Section/Section.js
function Section({
  children
}) {
  return /* @__PURE__ */ import_react59.default.createElement("div", {
    className: styles7.Section
  }, /* @__PURE__ */ import_react59.default.createElement(Box, {
    padding: "4"
  }, children));
}

// node_modules/@shopify/polaris/build/esm/components/Popover/components/Pane/Pane.js
function Pane({
  captureOverscroll = false,
  fixed,
  sectioned,
  children,
  height,
  onScrolledToBottom
}) {
  const className = classNames(styles7.Pane, fixed && styles7["Pane-fixed"], captureOverscroll && styles7["Pane-captureOverscroll"]);
  const content = sectioned ? wrapWithComponent(children, Section, {}) : children;
  const style = height ? {
    height,
    maxHeight: height,
    minHeight: height
  } : void 0;
  return fixed ? /* @__PURE__ */ import_react60.default.createElement("div", {
    style,
    className
  }, content) : /* @__PURE__ */ import_react60.default.createElement(Scrollable, {
    shadow: true,
    className,
    style,
    onScrolledToBottom
  }, content);
}

// node_modules/@shopify/polaris/build/esm/components/Popover/components/PopoverOverlay/PopoverOverlay.js
var PopoverCloseSource;
(function(PopoverCloseSource2) {
  PopoverCloseSource2[PopoverCloseSource2["Click"] = 0] = "Click";
  PopoverCloseSource2[PopoverCloseSource2["EscapeKeypress"] = 1] = "EscapeKeypress";
  PopoverCloseSource2[PopoverCloseSource2["FocusOut"] = 2] = "FocusOut";
  PopoverCloseSource2[PopoverCloseSource2["ScrollOut"] = 3] = "ScrollOut";
})(PopoverCloseSource || (PopoverCloseSource = {}));
var TransitionStatus;
(function(TransitionStatus3) {
  TransitionStatus3["Entering"] = "entering";
  TransitionStatus3["Entered"] = "entered";
  TransitionStatus3["Exiting"] = "exiting";
  TransitionStatus3["Exited"] = "exited";
})(TransitionStatus || (TransitionStatus = {}));
var PopoverOverlay = class extends import_react61.PureComponent {
  constructor(props) {
    super(props);
    this.context = void 0;
    this.state = {
      transitionStatus: this.props.active ? TransitionStatus.Entering : TransitionStatus.Exited
    };
    this.contentNode = /* @__PURE__ */ (0, import_react61.createRef)();
    this.enteringTimer = void 0;
    this.overlayRef = void 0;
    this.renderPopover = (overlayDetails) => {
      const {
        measuring,
        desiredHeight,
        positioning
      } = overlayDetails;
      const {
        id,
        children,
        sectioned,
        fullWidth,
        fullHeight,
        fluidContent,
        hideOnPrint,
        autofocusTarget,
        captureOverscroll
      } = this.props;
      const className = classNames(styles7.Popover, positioning === "above" && styles7.positionedAbove, fullWidth && styles7.fullWidth, measuring && styles7.measuring, hideOnPrint && styles7["PopoverOverlay-hideOnPrint"]);
      const contentStyles = measuring ? void 0 : {
        height: desiredHeight
      };
      const contentClassNames = classNames(styles7.Content, fullHeight && styles7["Content-fullHeight"], fluidContent && styles7["Content-fluidContent"]);
      const content = /* @__PURE__ */ import_react61.default.createElement("div", {
        id,
        tabIndex: autofocusTarget === "none" ? void 0 : -1,
        className: contentClassNames,
        style: contentStyles,
        ref: this.contentNode
      }, renderPopoverContent(children, {
        captureOverscroll,
        sectioned
      }));
      return /* @__PURE__ */ import_react61.default.createElement("div", Object.assign({
        className
      }, overlay.props), /* @__PURE__ */ import_react61.default.createElement(EventListener, {
        event: "click",
        handler: this.handleClick
      }), /* @__PURE__ */ import_react61.default.createElement(EventListener, {
        event: "touchstart",
        handler: this.handleClick
      }), /* @__PURE__ */ import_react61.default.createElement(KeypressListener, {
        keyCode: Key.Escape,
        handler: this.handleEscape
      }), /* @__PURE__ */ import_react61.default.createElement("div", {
        className: styles7.FocusTracker,
        tabIndex: 0,
        onFocus: this.handleFocusFirstItem
      }), /* @__PURE__ */ import_react61.default.createElement(Box, {
        position: "relative",
        overflowX: "hidden",
        overflowY: "hidden",
        background: "bg",
        borderRadius: "2"
      }, content), /* @__PURE__ */ import_react61.default.createElement("div", {
        className: styles7.FocusTracker,
        tabIndex: 0,
        onFocus: this.handleFocusLastItem
      }));
    };
    this.handleClick = (event) => {
      const target = event.target;
      const {
        contentNode,
        props: {
          activator,
          onClose,
          preventCloseOnChildOverlayClick
        }
      } = this;
      const composedPath = event.composedPath();
      const wasDescendant = preventCloseOnChildOverlayClick ? wasPolarisPortalDescendant(composedPath, this.context.container) : wasContentNodeDescendant(composedPath, contentNode);
      const isActivatorDescendant = nodeContainsDescendant(activator, target);
      if (wasDescendant || isActivatorDescendant || this.state.transitionStatus !== TransitionStatus.Entered) {
        return;
      }
      onClose(PopoverCloseSource.Click);
    };
    this.handleScrollOut = () => {
      this.props.onClose(PopoverCloseSource.ScrollOut);
    };
    this.handleEscape = (event) => {
      const target = event.target;
      const {
        contentNode,
        props: {
          activator
        }
      } = this;
      const composedPath = event.composedPath();
      const wasDescendant = wasContentNodeDescendant(composedPath, contentNode);
      const isActivatorDescendant = nodeContainsDescendant(activator, target);
      if (wasDescendant || isActivatorDescendant) {
        this.props.onClose(PopoverCloseSource.EscapeKeypress);
      }
    };
    this.handleFocusFirstItem = () => {
      this.props.onClose(PopoverCloseSource.FocusOut);
    };
    this.handleFocusLastItem = () => {
      this.props.onClose(PopoverCloseSource.FocusOut);
    };
    this.overlayRef = /* @__PURE__ */ (0, import_react61.createRef)();
  }
  forceUpdatePosition() {
    var _this$overlayRef$curr;
    (_this$overlayRef$curr = this.overlayRef.current) === null || _this$overlayRef$curr === void 0 ? void 0 : _this$overlayRef$curr.forceUpdatePosition();
  }
  changeTransitionStatus(transitionStatus, cb) {
    this.setState({
      transitionStatus
    }, cb);
    this.contentNode.current && this.contentNode.current.getBoundingClientRect();
  }
  componentDidMount() {
    if (this.props.active) {
      this.focusContent();
      this.changeTransitionStatus(TransitionStatus.Entered);
    }
  }
  componentDidUpdate(oldProps) {
    if (this.props.active && !oldProps.active) {
      this.focusContent();
      this.changeTransitionStatus(TransitionStatus.Entering, () => {
        this.clearTransitionTimeout();
        this.enteringTimer = window.setTimeout(() => {
          this.setState({
            transitionStatus: TransitionStatus.Entered
          });
        }, parseInt(motion2["duration-100"], 10));
      });
    }
    if (!this.props.active && oldProps.active) {
      this.clearTransitionTimeout();
      this.setState({
        transitionStatus: TransitionStatus.Exited
      });
    }
  }
  componentWillUnmount() {
    this.clearTransitionTimeout();
  }
  render() {
    const {
      active,
      activator,
      fullWidth,
      preferredPosition = "below",
      preferredAlignment = "center",
      preferInputActivator = true,
      fixed,
      zIndexOverride
    } = this.props;
    const {
      transitionStatus
    } = this.state;
    if (transitionStatus === TransitionStatus.Exited && !active)
      return null;
    const className = classNames(styles7.PopoverOverlay, transitionStatus === TransitionStatus.Entering && styles7["PopoverOverlay-entering"], transitionStatus === TransitionStatus.Entered && styles7["PopoverOverlay-open"], transitionStatus === TransitionStatus.Exiting && styles7["PopoverOverlay-exiting"]);
    return /* @__PURE__ */ import_react61.default.createElement(PositionedOverlay, {
      ref: this.overlayRef,
      fullWidth,
      active,
      activator,
      preferInputActivator,
      preferredPosition,
      preferredAlignment,
      render: this.renderPopover.bind(this),
      fixed,
      onScrollOut: this.handleScrollOut,
      classNames: className,
      zIndexOverride
    });
  }
  clearTransitionTimeout() {
    if (this.enteringTimer) {
      window.clearTimeout(this.enteringTimer);
    }
  }
  focusContent() {
    const {
      autofocusTarget = "container"
    } = this.props;
    if (autofocusTarget === "none" || this.contentNode == null) {
      return;
    }
    requestAnimationFrame(() => {
      if (this.contentNode.current == null) {
        return;
      }
      const focusableChild = findFirstKeyboardFocusableNode(this.contentNode.current);
      if (focusableChild && autofocusTarget === "first-node") {
        focusableChild.focus({
          preventScroll: true
        });
      } else {
        this.contentNode.current.focus({
          preventScroll: true
        });
      }
    });
  }
  // eslint-disable-next-line @shopify/react-no-multiple-render-methods
};
PopoverOverlay.contextType = PortalsManagerContext;
function renderPopoverContent(children, props) {
  const childrenArray = import_react61.Children.toArray(children);
  if (isElementOfType(childrenArray[0], Pane)) {
    return childrenArray;
  }
  return wrapWithComponent(childrenArray, Pane, props);
}
function nodeContainsDescendant(rootNode, descendant) {
  if (rootNode === descendant) {
    return true;
  }
  let parent = descendant.parentNode;
  while (parent != null) {
    if (parent === rootNode) {
      return true;
    }
    parent = parent.parentNode;
  }
  return false;
}
function wasContentNodeDescendant(composedPath, contentNode) {
  return contentNode.current != null && composedPath.includes(contentNode.current);
}
function wasPolarisPortalDescendant(composedPath, portalsContainerElement) {
  return composedPath.some((eventTarget) => eventTarget instanceof Node && (portalsContainerElement === null || portalsContainerElement === void 0 ? void 0 : portalsContainerElement.contains(eventTarget)));
}

// node_modules/@shopify/polaris/build/esm/components/Popover/Popover.js
var PopoverComponent = /* @__PURE__ */ (0, import_react62.forwardRef)(function Popover({
  activatorWrapper = "div",
  children,
  onClose,
  activator,
  preventFocusOnClose,
  active,
  fixed,
  ariaHaspopup,
  preferInputActivator = true,
  zIndexOverride,
  ...rest
}, ref) {
  const [activatorNode, setActivatorNode] = (0, import_react62.useState)();
  const overlayRef = (0, import_react62.useRef)(null);
  const activatorContainer = (0, import_react62.useRef)(null);
  const WrapperComponent = activatorWrapper;
  const id = useUniqueId("popover");
  function forceUpdatePosition() {
    var _overlayRef$current;
    (_overlayRef$current = overlayRef.current) === null || _overlayRef$current === void 0 ? void 0 : _overlayRef$current.forceUpdatePosition();
  }
  (0, import_react62.useImperativeHandle)(ref, () => {
    return {
      forceUpdatePosition
    };
  });
  const setAccessibilityAttributes = (0, import_react62.useCallback)(() => {
    if (activatorContainer.current == null) {
      return;
    }
    const firstFocusable = findFirstFocusableNodeIncludingDisabled(activatorContainer.current);
    const focusableActivator = firstFocusable || activatorContainer.current;
    const activatorDisabled = "disabled" in focusableActivator && Boolean(focusableActivator.disabled);
    setActivatorAttributes(focusableActivator, {
      id,
      active,
      ariaHaspopup,
      activatorDisabled
    });
  }, [id, active, ariaHaspopup]);
  const handleClose = (source) => {
    onClose(source);
    if (activatorContainer.current == null || preventFocusOnClose) {
      return;
    }
    if (source === PopoverCloseSource.FocusOut && activatorNode) {
      const focusableActivator = findFirstFocusableNodeIncludingDisabled(activatorNode) || findFirstFocusableNodeIncludingDisabled(activatorContainer.current) || activatorContainer.current;
      if (!focusNextFocusableNode(focusableActivator, isInPortal)) {
        focusableActivator.focus();
      }
    } else if (source === PopoverCloseSource.EscapeKeypress && activatorNode) {
      const focusableActivator = findFirstFocusableNodeIncludingDisabled(activatorNode) || findFirstFocusableNodeIncludingDisabled(activatorContainer.current) || activatorContainer.current;
      if (focusableActivator) {
        focusableActivator.focus();
      } else {
        focusNextFocusableNode(focusableActivator, isInPortal);
      }
    }
  };
  (0, import_react62.useEffect)(() => {
    if (!activatorNode && activatorContainer.current) {
      setActivatorNode(activatorContainer.current.firstElementChild);
    } else if (activatorNode && activatorContainer.current && !activatorContainer.current.contains(activatorNode)) {
      setActivatorNode(activatorContainer.current.firstElementChild);
    }
    setAccessibilityAttributes();
  }, [activatorNode, setAccessibilityAttributes]);
  (0, import_react62.useEffect)(() => {
    if (activatorNode && activatorContainer.current) {
      setActivatorNode(activatorContainer.current.firstElementChild);
    }
    setAccessibilityAttributes();
  }, [activatorNode, setAccessibilityAttributes]);
  const portal2 = activatorNode ? /* @__PURE__ */ import_react62.default.createElement(Portal, {
    idPrefix: "popover"
  }, /* @__PURE__ */ import_react62.default.createElement(PopoverOverlay, Object.assign({
    ref: overlayRef,
    id,
    activator: activatorNode,
    preferInputActivator,
    onClose: handleClose,
    active,
    fixed,
    zIndexOverride
  }, rest), children)) : null;
  return /* @__PURE__ */ import_react62.default.createElement(WrapperComponent, {
    ref: activatorContainer
  }, import_react62.Children.only(activator), portal2);
});
function isInPortal(element) {
  let parentElement = element.parentElement;
  while (parentElement) {
    if (parentElement.matches(portal.selector))
      return false;
    parentElement = parentElement.parentElement;
  }
  return true;
}
var Popover2 = Object.assign(PopoverComponent, {
  Pane,
  Section
});

// node_modules/@shopify/polaris/build/esm/components/ActionList/ActionList.js
var import_react68 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ActionList/components/Section/Section.js
var import_react67 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ActionList/components/Item/Item.js
var import_react66 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ActionList/ActionList.scss.js
var styles11 = {
  "Item": "Polaris-ActionList__Item",
  "active": "Polaris-ActionList--active",
  "destructive": "Polaris-ActionList--destructive",
  "disabled": "Polaris-ActionList--disabled",
  "Prefix": "Polaris-ActionList__Prefix",
  "Suffix": "Polaris-ActionList__Suffix",
  "Text": "Polaris-ActionList__Text"
};

// node_modules/@shopify/polaris/build/esm/components/UnstyledLink/UnstyledLink.js
var import_react64 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/link/hooks.js
var import_react63 = __toESM(require_react());
function useLink() {
  return (0, import_react63.useContext)(LinkContext);
}

// node_modules/@shopify/polaris/build/esm/components/UnstyledLink/UnstyledLink.js
var UnstyledLink = /* @__PURE__ */ (0, import_react64.memo)(/* @__PURE__ */ (0, import_react64.forwardRef)(function UnstyledLink2(props, _ref) {
  const LinkComponent = useLink();
  if (LinkComponent) {
    return /* @__PURE__ */ import_react64.default.createElement(LinkComponent, Object.assign({}, unstyled.props, props));
  }
  const {
    external,
    url,
    target: targetProp,
    ...rest
  } = props;
  let target;
  if (external) {
    target = "_blank";
  } else {
    target = targetProp !== null && targetProp !== void 0 ? targetProp : void 0;
  }
  const rel = target === "_blank" ? "noopener noreferrer" : void 0;
  return /* @__PURE__ */ import_react64.default.createElement("a", Object.assign({
    target
  }, rest, {
    href: url,
    rel
  }, unstyled.props));
}));

// node_modules/@shopify/polaris/build/esm/components/HorizontalStack/HorizontalStack.js
var import_react65 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/HorizontalStack/HorizontalStack.scss.js
var styles12 = {
  "HorizontalStack": "Polaris-HorizontalStack"
};

// node_modules/@shopify/polaris/build/esm/components/HorizontalStack/HorizontalStack.js
var HorizontalStack = function HorizontalStack2({
  align,
  blockAlign,
  gap,
  wrap = true,
  children
}) {
  const style = {
    "--pc-horizontal-stack-align": align,
    "--pc-horizontal-stack-block-align": blockAlign,
    "--pc-horizontal-stack-wrap": wrap ? "wrap" : "nowrap",
    ...getResponsiveProps("horizontal-stack", "gap", "space", gap)
  };
  return /* @__PURE__ */ import_react65.default.createElement("div", {
    className: styles12.HorizontalStack,
    style
  }, children);
};

// node_modules/@shopify/polaris/build/esm/components/ActionList/components/Item/Item.js
function Item({
  id,
  badge,
  content,
  accessibilityLabel,
  helpText,
  url,
  onAction,
  onMouseEnter,
  icon,
  image,
  prefix,
  suffix,
  disabled,
  external,
  destructive,
  ellipsis,
  active,
  role
}) {
  const className = classNames(styles11.Item, disabled && styles11.disabled, destructive && styles11.destructive, active && styles11.active);
  let prefixMarkup = null;
  if (prefix) {
    prefixMarkup = /* @__PURE__ */ import_react66.default.createElement("span", {
      className: styles11.Prefix
    }, prefix);
  } else if (icon) {
    prefixMarkup = /* @__PURE__ */ import_react66.default.createElement("span", {
      className: styles11.Prefix
    }, /* @__PURE__ */ import_react66.default.createElement(Icon, {
      source: icon
    }));
  } else if (image) {
    prefixMarkup = /* @__PURE__ */ import_react66.default.createElement("span", {
      role: "presentation",
      className: styles11.Prefix,
      style: {
        backgroundImage: `url(${image}`
      }
    });
  }
  const contentText = ellipsis && content ? `${content}\u2026` : content;
  const contentMarkup = helpText ? /* @__PURE__ */ import_react66.default.createElement(import_react66.default.Fragment, null, /* @__PURE__ */ import_react66.default.createElement(Box, null, contentText), /* @__PURE__ */ import_react66.default.createElement(Text, {
    color: "subdued",
    as: "span"
  }, helpText)) : contentText;
  const badgeMarkup = badge && /* @__PURE__ */ import_react66.default.createElement("span", {
    className: styles11.Suffix
  }, /* @__PURE__ */ import_react66.default.createElement(Badge, {
    status: badge.status
  }, badge.content));
  const suffixMarkup = suffix && /* @__PURE__ */ import_react66.default.createElement(Box, null, /* @__PURE__ */ import_react66.default.createElement("span", {
    className: styles11.Suffix
  }, suffix));
  const textMarkup = /* @__PURE__ */ import_react66.default.createElement("span", {
    className: styles11.Text
  }, contentMarkup);
  const contentElement = /* @__PURE__ */ import_react66.default.createElement(HorizontalStack, {
    blockAlign: "center",
    gap: "4"
  }, prefixMarkup, textMarkup, badgeMarkup, suffixMarkup);
  const scrollMarkup = active ? /* @__PURE__ */ import_react66.default.createElement(Scrollable.ScrollTo, null) : null;
  const control = url ? /* @__PURE__ */ import_react66.default.createElement(UnstyledLink, {
    id,
    url: disabled ? null : url,
    className,
    external,
    "aria-label": accessibilityLabel,
    onClick: disabled ? null : onAction,
    role
  }, contentElement) : /* @__PURE__ */ import_react66.default.createElement("button", {
    id,
    type: "button",
    className,
    disabled,
    "aria-label": accessibilityLabel,
    onClick: onAction,
    onMouseUp: handleMouseUpByBlurring,
    role,
    onMouseEnter
  }, contentElement);
  return /* @__PURE__ */ import_react66.default.createElement(import_react66.default.Fragment, null, scrollMarkup, control);
}

// node_modules/@shopify/polaris/build/esm/components/ActionList/components/Section/Section.js
function Section2({
  section,
  hasMultipleSections,
  isFirst,
  actionRole,
  onActionAnyItem
}) {
  const handleAction = (itemOnAction) => {
    return () => {
      if (itemOnAction) {
        itemOnAction();
      }
      if (onActionAnyItem) {
        onActionAnyItem();
      }
    };
  };
  const actionMarkup = section.items.map(({
    content,
    helpText,
    onAction,
    ...item
  }, index) => {
    return /* @__PURE__ */ import_react67.default.createElement("li", {
      key: `${content}-${index}`,
      role: actionRole === "menuitem" ? "presentation" : void 0
    }, /* @__PURE__ */ import_react67.default.createElement(Item, Object.assign({
      content,
      helpText,
      role: actionRole,
      onAction: handleAction(onAction)
    }, item)));
  });
  let titleMarkup = null;
  if (section.title) {
    titleMarkup = typeof section.title === "string" ? /* @__PURE__ */ import_react67.default.createElement(Box, {
      paddingBlockStart: "4",
      paddingInlineStart: "4",
      paddingBlockEnd: "2",
      paddingInlineEnd: "4"
    }, /* @__PURE__ */ import_react67.default.createElement(Text, {
      as: "p",
      variant: "headingXs"
    }, section.title)) : /* @__PURE__ */ import_react67.default.createElement(Box, {
      padding: "2"
    }, section.title);
  }
  let sectionRole;
  switch (actionRole) {
    case "option":
      sectionRole = "presentation";
      break;
    case "menuitem":
      sectionRole = !hasMultipleSections ? "menu" : "presentation";
      break;
    default:
      sectionRole = void 0;
      break;
  }
  const sectionMarkup = /* @__PURE__ */ import_react67.default.createElement(import_react67.default.Fragment, null, titleMarkup, /* @__PURE__ */ import_react67.default.createElement(Box, Object.assign({
    as: "ul",
    padding: "2"
  }, hasMultipleSections && {
    paddingBlockStart: "0"
  }, sectionRole && {
    role: sectionRole
  }, {
    tabIndex: !hasMultipleSections ? -1 : void 0
  }), actionMarkup));
  return hasMultipleSections ? /* @__PURE__ */ import_react67.default.createElement(Box, Object.assign({
    as: "li",
    role: "presentation",
    borderColor: "border-subdued"
  }, !isFirst && {
    borderBlockStartWidth: "1"
  }, !section.title && {
    paddingBlockStart: "2"
  }), sectionMarkup) : sectionMarkup;
}

// node_modules/@shopify/polaris/build/esm/components/ActionList/ActionList.js
function ActionList({
  items,
  sections = [],
  actionRole,
  onActionAnyItem
}) {
  let finalSections = [];
  const actionListRef = (0, import_react68.useRef)(null);
  if (items) {
    finalSections = [{
      items
    }, ...sections];
  } else if (sections) {
    finalSections = sections;
  }
  const hasMultipleSections = finalSections.length > 1;
  const elementRole = hasMultipleSections && actionRole === "menuitem" ? "menu" : void 0;
  const elementTabIndex = hasMultipleSections && actionRole === "menuitem" ? -1 : void 0;
  const sectionMarkup = finalSections.map((section, index) => {
    return section.items.length > 0 ? /* @__PURE__ */ import_react68.default.createElement(Section2, {
      key: typeof section.title === "string" ? section.title : index,
      section,
      hasMultipleSections,
      actionRole,
      onActionAnyItem,
      isFirst: index === 0
    }) : null;
  });
  const handleFocusPreviousItem = (evt) => {
    evt.preventDefault();
    if (actionListRef.current && evt.target) {
      if (actionListRef.current.contains(evt.target)) {
        wrapFocusPreviousFocusableMenuItem(actionListRef.current, evt.target);
      }
    }
  };
  const handleFocusNextItem = (evt) => {
    evt.preventDefault();
    if (actionListRef.current && evt.target) {
      if (actionListRef.current.contains(evt.target)) {
        wrapFocusNextFocusableMenuItem(actionListRef.current, evt.target);
      }
    }
  };
  const listeners = actionRole === "menuitem" ? /* @__PURE__ */ import_react68.default.createElement(import_react68.default.Fragment, null, /* @__PURE__ */ import_react68.default.createElement(KeypressListener, {
    keyEvent: "keydown",
    keyCode: Key.DownArrow,
    handler: handleFocusNextItem
  }), /* @__PURE__ */ import_react68.default.createElement(KeypressListener, {
    keyEvent: "keydown",
    keyCode: Key.UpArrow,
    handler: handleFocusPreviousItem
  })) : null;
  return /* @__PURE__ */ import_react68.default.createElement(Box, {
    as: hasMultipleSections ? "ul" : "div",
    ref: actionListRef,
    role: elementRole,
    tabIndex: elementTabIndex
  }, listeners, sectionMarkup);
}
ActionList.Item = Item;

// node_modules/@shopify/polaris/build/esm/components/UnstyledButton/UnstyledButton.js
var import_react69 = __toESM(require_react());
function UnstyledButton({
  id,
  children,
  className,
  url,
  external,
  target,
  download,
  submit,
  disabled,
  loading,
  pressed,
  accessibilityLabel,
  role,
  ariaControls,
  ariaExpanded,
  ariaDescribedBy,
  ariaChecked,
  onClick,
  onFocus,
  onBlur,
  onKeyDown,
  onKeyPress,
  onKeyUp,
  onMouseEnter,
  onTouchStart,
  ...rest
}) {
  let buttonMarkup;
  const commonProps = {
    id,
    className,
    "aria-label": accessibilityLabel
  };
  const interactiveProps = {
    ...commonProps,
    role,
    onClick,
    onFocus,
    onBlur,
    onMouseUp: handleMouseUpByBlurring,
    onMouseEnter,
    onTouchStart
  };
  const handleClick = useDisableClick(disabled, onClick);
  if (url) {
    buttonMarkup = disabled ? (
      // Render an `<a>` so toggling disabled/enabled state changes only the
      // `href` attribute instead of replacing the whole element.
      /* @__PURE__ */ import_react69.default.createElement("a", commonProps, children)
    ) : /* @__PURE__ */ import_react69.default.createElement(UnstyledLink, Object.assign({}, interactiveProps, {
      url,
      external,
      target,
      download
    }, rest), children);
  } else {
    buttonMarkup = /* @__PURE__ */ import_react69.default.createElement("button", Object.assign({}, interactiveProps, {
      "aria-disabled": disabled,
      type: submit ? "submit" : "button",
      "aria-busy": loading ? true : void 0,
      "aria-controls": ariaControls,
      "aria-expanded": ariaExpanded,
      "aria-describedby": ariaDescribedBy,
      "aria-checked": ariaChecked,
      "aria-pressed": pressed,
      onKeyDown,
      onKeyUp,
      onKeyPress,
      onClick: handleClick,
      tabIndex: disabled ? -1 : void 0
    }, rest), children);
  }
  return buttonMarkup;
}

// node_modules/@shopify/polaris/build/esm/components/Button/Button.js
var DEFAULT_SIZE2 = "medium";
function Button({
  id,
  children,
  url,
  disabled,
  external,
  download,
  target,
  submit,
  loading,
  pressed,
  accessibilityLabel,
  role,
  ariaControls,
  ariaExpanded,
  ariaDescribedBy,
  ariaChecked,
  onClick,
  onFocus,
  onBlur,
  onKeyDown,
  onKeyPress,
  onKeyUp,
  onMouseEnter,
  onTouchStart,
  onPointerDown,
  icon,
  primary,
  outline,
  destructive,
  disclosure,
  plain,
  monochrome,
  removeUnderline,
  size = DEFAULT_SIZE2,
  textAlign,
  fullWidth,
  connectedDisclosure,
  dataPrimaryLink
}) {
  const i18n = useI18n();
  const isDisabled = disabled || loading;
  const className = classNames(styles5.Button, primary && styles5.primary, outline && styles5.outline, destructive && styles5.destructive, primary && plain && styles5.primaryPlain, isDisabled && styles5.disabled, loading && styles5.loading, plain && !primary && styles5.plain, pressed && !disabled && !url && styles5.pressed, monochrome && styles5.monochrome, size && size !== DEFAULT_SIZE2 && styles5[variationName("size", size)], textAlign && styles5[variationName("textAlign", textAlign)], fullWidth && styles5.fullWidth, icon && children == null && styles5.iconOnly, connectedDisclosure && styles5.connectedDisclosure, removeUnderline && styles5.removeUnderline);
  const disclosureMarkup = disclosure ? /* @__PURE__ */ import_react70.default.createElement("span", {
    className: styles5.Icon
  }, /* @__PURE__ */ import_react70.default.createElement("div", {
    className: classNames(styles5.DisclosureIcon, loading && styles5.hidden)
  }, /* @__PURE__ */ import_react70.default.createElement(Icon, {
    source: loading ? "placeholder" : getDisclosureIconSource(disclosure)
  }))) : null;
  const iconSource = isIconSource(icon) ? /* @__PURE__ */ import_react70.default.createElement(Icon, {
    source: loading ? "placeholder" : icon
  }) : icon;
  const iconMarkup = iconSource ? /* @__PURE__ */ import_react70.default.createElement("span", {
    className: classNames(styles5.Icon, loading && styles5.hidden)
  }, iconSource) : null;
  const childMarkup = children ? /* @__PURE__ */ import_react70.default.createElement("span", {
    className: classNames(styles5.Text, removeUnderline && styles5.removeUnderline),
    key: disabled ? "text-disabled" : "text"
  }, children) : null;
  const spinnerSVGMarkup = loading ? /* @__PURE__ */ import_react70.default.createElement("span", {
    className: styles5.Spinner
  }, /* @__PURE__ */ import_react70.default.createElement(Spinner, {
    size: "small",
    accessibilityLabel: i18n.translate("Polaris.Button.spinnerAccessibilityLabel")
  })) : null;
  const [disclosureActive, setDisclosureActive] = (0, import_react70.useState)(false);
  const toggleDisclosureActive = (0, import_react70.useCallback)(() => {
    setDisclosureActive((disclosureActive2) => !disclosureActive2);
  }, []);
  const handleClick = useDisableClick(disabled, toggleDisclosureActive);
  let connectedDisclosureMarkup;
  if (connectedDisclosure) {
    const connectedDisclosureClassName = classNames(styles5.Button, primary && styles5.primary, outline && styles5.outline, size && size !== DEFAULT_SIZE2 && styles5[variationName("size", size)], textAlign && styles5[variationName("textAlign", textAlign)], destructive && styles5.destructive, connectedDisclosure.disabled && styles5.disabled, styles5.iconOnly, styles5.ConnectedDisclosure, monochrome && styles5.monochrome);
    const defaultLabel = i18n.translate("Polaris.Button.connectedDisclosureAccessibilityLabel");
    const {
      disabled: disabled2,
      accessibilityLabel: disclosureLabel = defaultLabel
    } = connectedDisclosure;
    const connectedDisclosureActivator = /* @__PURE__ */ import_react70.default.createElement("button", {
      type: "button",
      className: connectedDisclosureClassName,
      "aria-disabled": disabled2,
      "aria-label": disclosureLabel,
      "aria-describedby": ariaDescribedBy,
      "aria-checked": ariaChecked,
      onClick: handleClick,
      onMouseUp: handleMouseUpByBlurring,
      tabIndex: disabled2 ? -1 : void 0
    }, /* @__PURE__ */ import_react70.default.createElement("span", {
      className: styles5.Icon
    }, /* @__PURE__ */ import_react70.default.createElement(Icon, {
      source: SvgCaretDownMinor
    })));
    connectedDisclosureMarkup = /* @__PURE__ */ import_react70.default.createElement(Popover2, {
      active: disclosureActive,
      onClose: toggleDisclosureActive,
      activator: connectedDisclosureActivator,
      preferredAlignment: "right"
    }, /* @__PURE__ */ import_react70.default.createElement(ActionList, {
      items: connectedDisclosure.actions,
      onActionAnyItem: toggleDisclosureActive
    }));
  }
  const commonProps = {
    id,
    className,
    accessibilityLabel,
    ariaDescribedBy,
    role,
    onClick,
    onFocus,
    onBlur,
    onMouseUp: handleMouseUpByBlurring,
    onMouseEnter,
    onTouchStart,
    "data-primary-link": dataPrimaryLink
  };
  const linkProps = {
    url,
    external,
    download,
    target
  };
  const actionProps = {
    submit,
    disabled: isDisabled,
    loading,
    ariaControls,
    ariaExpanded,
    ariaChecked,
    pressed,
    onKeyDown,
    onKeyUp,
    onKeyPress,
    onPointerDown
  };
  const buttonMarkup = /* @__PURE__ */ import_react70.default.createElement(UnstyledButton, Object.assign({}, commonProps, linkProps, actionProps), /* @__PURE__ */ import_react70.default.createElement("span", {
    className: styles5.Content
  }, spinnerSVGMarkup, iconMarkup, childMarkup, disclosureMarkup));
  return connectedDisclosureMarkup ? /* @__PURE__ */ import_react70.default.createElement("div", {
    className: styles5.ConnectedDisclosureWrapper
  }, buttonMarkup, connectedDisclosureMarkup) : buttonMarkup;
}
function isIconSource(x) {
  return typeof x === "string" || typeof x === "object" && x.body || typeof x === "function";
}
function getDisclosureIconSource(disclosure) {
  if (disclosure === "select") {
    return SvgSelectMinor;
  }
  return disclosure === "up" ? SvgCaretUpMinor : SvgCaretDownMinor;
}

// node_modules/@shopify/polaris/build/esm/components/TextField/TextField.js
var import_react81 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/use-event-listener.js
var import_react71 = __toESM(require_react());
function useEventListener(eventName, handler, target, options) {
  const handlerRef = (0, import_react71.useRef)(handler);
  const optionsRef = (0, import_react71.useRef)(options);
  useIsomorphicLayoutEffect(() => {
    handlerRef.current = handler;
  }, [handler]);
  useIsomorphicLayoutEffect(() => {
    optionsRef.current = options;
  }, [options]);
  (0, import_react71.useEffect)(() => {
    if (!(typeof eventName === "string" && target !== null))
      return;
    let targetElement;
    if (typeof target === "undefined") {
      targetElement = window;
    } else if ("current" in target) {
      if (target.current === null)
        return;
      targetElement = target.current;
    } else {
      targetElement = target;
    }
    const eventOptions = optionsRef.current;
    const eventListener = (event) => handlerRef.current(event);
    targetElement.addEventListener(eventName, eventListener, eventOptions);
    return () => {
      targetElement.removeEventListener(eventName, eventListener, eventOptions);
    };
  }, [eventName, target]);
}

// node_modules/@shopify/polaris/build/esm/components/TextField/TextField.scss.js
var styles13 = {
  "TextField": "Polaris-TextField",
  "ClearButton": "Polaris-TextField__ClearButton",
  "multiline": "Polaris-TextField--multiline",
  "Input": "Polaris-TextField__Input",
  "hasValue": "Polaris-TextField--hasValue",
  "focus": "Polaris-TextField--focus",
  "VerticalContent": "Polaris-TextField__VerticalContent",
  "Backdrop": "Polaris-TextField__Backdrop",
  "error": "Polaris-TextField--error",
  "readOnly": "Polaris-TextField--readOnly",
  "disabled": "Polaris-TextField--disabled",
  "Prefix": "Polaris-TextField__Prefix",
  "suggestion": "Polaris-TextField--suggestion",
  "borderless": "Polaris-TextField--borderless",
  "Input-hasClearButton": "Polaris-TextField__Input--hasClearButton",
  "Input-suffixed": "Polaris-TextField__Input--suffixed",
  "Input-alignRight": "Polaris-TextField__Input--alignRight",
  "Input-alignLeft": "Polaris-TextField__Input--alignLeft",
  "Input-alignCenter": "Polaris-TextField__Input--alignCenter",
  "Suffix": "Polaris-TextField__Suffix",
  "CharacterCount": "Polaris-TextField__CharacterCount",
  "AlignFieldBottom": "Polaris-TextField__AlignFieldBottom",
  "Spinner": "Polaris-TextField__Spinner",
  "SpinnerIcon": "Polaris-TextField__SpinnerIcon",
  "Resizer": "Polaris-TextField__Resizer",
  "DummyInput": "Polaris-TextField__DummyInput",
  "Segment": "Polaris-TextField__Segment",
  "monospaced": "Polaris-TextField--monospaced"
};

// node_modules/@shopify/polaris/build/esm/components/TextField/components/Spinner/Spinner.js
var import_react72 = __toESM(require_react());
var Spinner2 = /* @__PURE__ */ import_react72.default.forwardRef(function Spinner3({
  onChange,
  onClick,
  onMouseDown,
  onMouseUp,
  onBlur
}, ref) {
  function handleStep(step) {
    return () => onChange(step);
  }
  function handleMouseDown(onChange2) {
    return (event) => {
      if (event.button !== 0)
        return;
      onMouseDown(onChange2);
    };
  }
  return /* @__PURE__ */ import_react72.default.createElement("div", {
    className: styles13.Spinner,
    onClick,
    "aria-hidden": true,
    ref
  }, /* @__PURE__ */ import_react72.default.createElement("div", {
    role: "button",
    className: styles13.Segment,
    tabIndex: -1,
    onClick: handleStep(1),
    onMouseDown: handleMouseDown(handleStep(1)),
    onMouseUp,
    onBlur
  }, /* @__PURE__ */ import_react72.default.createElement("div", {
    className: styles13.SpinnerIcon
  }, /* @__PURE__ */ import_react72.default.createElement(Icon, {
    source: SvgCaretUpMinor
  }))), /* @__PURE__ */ import_react72.default.createElement("div", {
    role: "button",
    className: styles13.Segment,
    tabIndex: -1,
    onClick: handleStep(-1),
    onMouseDown: handleMouseDown(handleStep(-1)),
    onMouseUp,
    onBlur
  }, /* @__PURE__ */ import_react72.default.createElement("div", {
    className: styles13.SpinnerIcon
  }, /* @__PURE__ */ import_react72.default.createElement(Icon, {
    source: SvgCaretDownMinor
  }))));
});

// node_modules/@shopify/polaris/build/esm/components/Labelled/Labelled.js
var import_react76 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Labelled/Labelled.scss.js
var styles14 = {
  "hidden": "Polaris-Labelled--hidden",
  "LabelWrapper": "Polaris-Labelled__LabelWrapper",
  "HelpText": "Polaris-Labelled__HelpText",
  "Error": "Polaris-Labelled__Error",
  "Action": "Polaris-Labelled__Action"
};

// node_modules/@shopify/polaris/build/esm/components/InlineError/InlineError.js
var import_react73 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/InlineError/InlineError.scss.js
var styles15 = {
  "InlineError": "Polaris-InlineError",
  "Icon": "Polaris-InlineError__Icon"
};

// node_modules/@shopify/polaris/build/esm/components/InlineError/InlineError.js
function InlineError({
  message,
  fieldID
}) {
  if (!message) {
    return null;
  }
  return /* @__PURE__ */ import_react73.default.createElement("div", {
    id: errorTextID(fieldID),
    className: styles15.InlineError
  }, /* @__PURE__ */ import_react73.default.createElement("div", {
    className: styles15.Icon
  }, /* @__PURE__ */ import_react73.default.createElement(Icon, {
    source: SvgDiamondAlertMinor
  })), message);
}
function errorTextID(id) {
  return `${id}Error`;
}

// node_modules/@shopify/polaris/build/esm/components/Label/Label.js
var import_react74 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Label/Label.scss.js
var styles16 = {
  "Label": "Polaris-Label",
  "hidden": "Polaris-Label--hidden",
  "Text": "Polaris-Label__Text",
  "RequiredIndicator": "Polaris-Label__RequiredIndicator"
};

// node_modules/@shopify/polaris/build/esm/components/Label/Label.js
function labelID(id) {
  return `${id}Label`;
}
function Label({
  children,
  id,
  hidden,
  requiredIndicator
}) {
  const className = classNames(styles16.Label, hidden && styles16.hidden);
  return /* @__PURE__ */ import_react74.default.createElement("div", {
    className
  }, /* @__PURE__ */ import_react74.default.createElement("label", {
    id: labelID(id),
    htmlFor: id,
    className: classNames(styles16.Text, requiredIndicator && styles16.RequiredIndicator)
  }, children));
}

// node_modules/@shopify/polaris/build/esm/components/Button/utils.js
var import_react75 = __toESM(require_react());
function buttonsFrom(actions, overrides = {}) {
  if (Array.isArray(actions)) {
    return actions.map((action, index) => buttonFrom(action, overrides, index));
  } else {
    const action = actions;
    return buttonFrom(action, overrides);
  }
}
function buttonFrom({
  content,
  onAction,
  ...action
}, overrides, key) {
  return /* @__PURE__ */ import_react75.default.createElement(Button, Object.assign({
    key,
    onClick: onAction
  }, action, overrides), content);
}

// node_modules/@shopify/polaris/build/esm/components/Labelled/Labelled.js
function Labelled({
  id,
  label,
  error,
  action,
  helpText,
  children,
  labelHidden,
  requiredIndicator,
  ...rest
}) {
  const className = classNames(labelHidden && styles14.hidden);
  const actionMarkup = action ? /* @__PURE__ */ import_react76.default.createElement("div", {
    className: styles14.Action
  }, buttonFrom(action, {
    plain: true
  })) : null;
  const helpTextMarkup = helpText ? /* @__PURE__ */ import_react76.default.createElement("div", {
    className: styles14.HelpText,
    id: helpTextID(id)
  }, /* @__PURE__ */ import_react76.default.createElement(Text, {
    as: "span",
    color: "subdued",
    breakWord: true
  }, helpText)) : null;
  const errorMarkup = error && typeof error !== "boolean" && /* @__PURE__ */ import_react76.default.createElement("div", {
    className: styles14.Error
  }, /* @__PURE__ */ import_react76.default.createElement(InlineError, {
    message: error,
    fieldID: id
  }));
  const labelMarkup = label ? /* @__PURE__ */ import_react76.default.createElement("div", {
    className: styles14.LabelWrapper
  }, /* @__PURE__ */ import_react76.default.createElement(Label, Object.assign({
    id,
    requiredIndicator
  }, rest, {
    hidden: false
  }), label), actionMarkup) : null;
  return /* @__PURE__ */ import_react76.default.createElement("div", {
    className
  }, labelMarkup, children, errorMarkup, helpTextMarkup);
}
function helpTextID(id) {
  return `${id}HelpText`;
}

// node_modules/@shopify/polaris/build/esm/components/Connected/Connected.js
var import_react79 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Connected/Connected.scss.js
var styles17 = {
  "Connected": "Polaris-Connected",
  "Item": "Polaris-Connected__Item",
  "Item-primary": "Polaris-Connected__Item--primary",
  "Item-focused": "Polaris-Connected__Item--focused"
};

// node_modules/@shopify/polaris/build/esm/components/Connected/components/Item/Item.js
var import_react78 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/use-toggle.js
var import_react77 = __toESM(require_react());
function useToggle(initialState) {
  const [value, setState] = (0, import_react77.useState)(initialState);
  return {
    value,
    toggle: (0, import_react77.useCallback)(() => setState((state) => !state), []),
    setTrue: (0, import_react77.useCallback)(() => setState(true), []),
    setFalse: (0, import_react77.useCallback)(() => setState(false), [])
  };
}

// node_modules/@shopify/polaris/build/esm/components/Connected/components/Item/Item.js
function Item2({
  children,
  position
}) {
  const {
    value: focused,
    setTrue: forceTrueFocused,
    setFalse: forceFalseFocused
  } = useToggle(false);
  const className = classNames(styles17.Item, focused && styles17["Item-focused"], position === "primary" ? styles17["Item-primary"] : styles17["Item-connection"]);
  return /* @__PURE__ */ import_react78.default.createElement("div", {
    onBlur: forceFalseFocused,
    onFocus: forceTrueFocused,
    className
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/Connected/Connected.js
function Connected({
  children,
  left,
  right
}) {
  const leftConnectionMarkup = left ? /* @__PURE__ */ import_react79.default.createElement(Item2, {
    position: "left"
  }, left) : null;
  const rightConnectionMarkup = right ? /* @__PURE__ */ import_react79.default.createElement(Item2, {
    position: "right"
  }, right) : null;
  return /* @__PURE__ */ import_react79.default.createElement("div", {
    className: styles17.Connected
  }, leftConnectionMarkup, /* @__PURE__ */ import_react79.default.createElement(Item2, {
    position: "primary"
  }, children), rightConnectionMarkup);
}

// node_modules/@shopify/polaris/build/esm/components/TextField/components/Resizer/Resizer.js
var import_react80 = __toESM(require_react());
function Resizer({
  contents,
  currentHeight: currentHeightProp = null,
  minimumLines,
  onHeightChange
}) {
  const contentNode = (0, import_react80.useRef)(null);
  const minimumLinesNode = (0, import_react80.useRef)(null);
  const animationFrame = (0, import_react80.useRef)();
  const currentHeight = (0, import_react80.useRef)(currentHeightProp);
  if (currentHeightProp !== currentHeight.current) {
    currentHeight.current = currentHeightProp;
  }
  (0, import_react80.useEffect)(() => {
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);
  const minimumLinesMarkup = minimumLines ? /* @__PURE__ */ import_react80.default.createElement("div", {
    ref: minimumLinesNode,
    className: styles13.DummyInput,
    dangerouslySetInnerHTML: {
      __html: getContentsForMinimumLines(minimumLines)
    }
  }) : null;
  const handleHeightCheck = (0, import_react80.useCallback)(() => {
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }
    animationFrame.current = requestAnimationFrame(() => {
      if (!contentNode.current || !minimumLinesNode.current) {
        return;
      }
      const newHeight = Math.max(contentNode.current.offsetHeight, minimumLinesNode.current.offsetHeight);
      if (newHeight !== currentHeight.current) {
        onHeightChange(newHeight);
      }
    });
  }, [onHeightChange]);
  useIsomorphicLayoutEffect(() => {
    handleHeightCheck();
  });
  return /* @__PURE__ */ import_react80.default.createElement("div", {
    "aria-hidden": true,
    className: styles13.Resizer
  }, /* @__PURE__ */ import_react80.default.createElement(EventListener, {
    event: "resize",
    handler: handleHeightCheck
  }), /* @__PURE__ */ import_react80.default.createElement("div", {
    ref: contentNode,
    className: styles13.DummyInput,
    dangerouslySetInnerHTML: {
      __html: getFinalContents(contents)
    }
  }), minimumLinesMarkup);
}
var ENTITIES_TO_REPLACE = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\n": "<br>",
  "\r": ""
};
var REPLACE_REGEX2 = new RegExp(`[${Object.keys(ENTITIES_TO_REPLACE).join()}]`, "g");
function replaceEntity(entity) {
  return ENTITIES_TO_REPLACE[entity];
}
function getContentsForMinimumLines(minimumLines) {
  let content = "";
  for (let line = 0; line < minimumLines; line++) {
    content += "<br>";
  }
  return content;
}
function getFinalContents(contents) {
  return contents ? `${contents.replace(REPLACE_REGEX2, replaceEntity)}<br>` : "<br>";
}

// node_modules/@shopify/polaris/build/esm/components/TextField/TextField.js
function TextField({
  prefix,
  suffix,
  verticalContent,
  placeholder,
  value = "",
  helpText,
  label,
  labelAction,
  labelHidden,
  disabled,
  clearButton,
  readOnly,
  autoFocus,
  focused,
  multiline,
  error,
  connectedRight,
  connectedLeft,
  type = "text",
  name,
  id: idProp,
  role,
  step,
  largeStep,
  autoComplete,
  max,
  maxLength,
  maxHeight,
  min,
  minLength,
  pattern,
  inputMode,
  spellCheck,
  ariaOwns,
  ariaControls,
  ariaExpanded,
  ariaActiveDescendant,
  ariaAutocomplete,
  showCharacterCount,
  align,
  requiredIndicator,
  monospaced,
  selectTextOnFocus,
  suggestion,
  onClearButtonClick,
  onChange,
  onSpinnerChange,
  onFocus,
  onBlur,
  borderless
}) {
  const i18n = useI18n();
  const [height, setHeight] = (0, import_react81.useState)(null);
  const [focus, setFocus] = (0, import_react81.useState)(Boolean(focused));
  const isAfterInitial = useIsAfterInitialMount();
  const id = useUniqueId("TextField", idProp);
  const inputRef = (0, import_react81.useRef)(null);
  const textAreaRef = (0, import_react81.useRef)(null);
  const prefixRef = (0, import_react81.useRef)(null);
  const suffixRef = (0, import_react81.useRef)(null);
  const verticalContentRef = (0, import_react81.useRef)(null);
  const buttonPressTimer = (0, import_react81.useRef)();
  const spinnerRef = (0, import_react81.useRef)(null);
  (0, import_react81.useEffect)(() => {
    const input2 = multiline ? textAreaRef.current : inputRef.current;
    if (!input2 || focused === void 0)
      return;
    focused ? input2.focus() : input2.blur();
  }, [focused, verticalContent, multiline]);
  (0, import_react81.useEffect)(() => {
    const input2 = inputRef.current;
    const isSupportedInputType = type === "text" || type === "tel" || type === "search" || type === "url" || type === "password";
    if (!input2 || !isSupportedInputType || !suggestion) {
      return;
    }
    input2.setSelectionRange(value.length, suggestion.length);
  }, [focus, value, type, suggestion]);
  const normalizedValue = suggestion ? suggestion : value;
  const normalizedStep = step != null ? step : 1;
  const normalizedMax = max != null ? max : Infinity;
  const normalizedMin = min != null ? min : -Infinity;
  const className = classNames(styles13.TextField, Boolean(normalizedValue) && styles13.hasValue, disabled && styles13.disabled, readOnly && styles13.readOnly, error && styles13.error, multiline && styles13.multiline, focus && styles13.focus, borderless && styles13.borderless);
  const inputType = type === "currency" ? "text" : type;
  const isNumericType = type === "number" || type === "integer";
  const prefixMarkup = prefix ? /* @__PURE__ */ import_react81.default.createElement("div", {
    className: styles13.Prefix,
    id: `${id}-Prefix`,
    ref: prefixRef
  }, prefix) : null;
  const suffixMarkup = suffix ? /* @__PURE__ */ import_react81.default.createElement("div", {
    className: styles13.Suffix,
    id: `${id}-Suffix`,
    ref: suffixRef
  }, suffix) : null;
  let characterCountMarkup = null;
  if (showCharacterCount) {
    const characterCount = normalizedValue.length;
    const characterCountLabel = maxLength ? i18n.translate("Polaris.TextField.characterCountWithMaxLength", {
      count: characterCount,
      limit: maxLength
    }) : i18n.translate("Polaris.TextField.characterCount", {
      count: characterCount
    });
    const characterCountClassName = classNames(styles13.CharacterCount, multiline && styles13.AlignFieldBottom);
    const characterCountText = !maxLength ? characterCount : `${characterCount}/${maxLength}`;
    characterCountMarkup = /* @__PURE__ */ import_react81.default.createElement("div", {
      id: `${id}-CharacterCounter`,
      className: characterCountClassName,
      "aria-label": characterCountLabel,
      "aria-live": focus ? "polite" : "off",
      "aria-atomic": "true",
      onClick: handleClickChild
    }, characterCountText);
  }
  const clearButtonVisible = normalizedValue !== "";
  const clearButtonMarkup = clearButton && clearButtonVisible ? /* @__PURE__ */ import_react81.default.createElement("button", {
    type: "button",
    className: styles13.ClearButton,
    onClick: handleClearButtonPress,
    disabled
  }, /* @__PURE__ */ import_react81.default.createElement(Text, {
    as: "span",
    visuallyHidden: true
  }, i18n.translate("Polaris.Common.clear")), /* @__PURE__ */ import_react81.default.createElement(Icon, {
    source: SvgCircleCancelMinor,
    color: "base"
  })) : null;
  const handleNumberChange = (0, import_react81.useCallback)((steps, stepAmount = normalizedStep) => {
    if (onChange == null && onSpinnerChange == null) {
      return;
    }
    const dpl = (num) => (num.toString().split(".")[1] || []).length;
    const numericValue = value ? parseFloat(value) : 0;
    if (isNaN(numericValue)) {
      return;
    }
    const decimalPlaces = type === "integer" ? 0 : Math.max(dpl(numericValue), dpl(stepAmount));
    const newValue = Math.min(Number(normalizedMax), Math.max(numericValue + steps * stepAmount, Number(normalizedMin)));
    if (onSpinnerChange != null) {
      onSpinnerChange(String(newValue.toFixed(decimalPlaces)), id);
    } else if (onChange != null) {
      onChange(String(newValue.toFixed(decimalPlaces)), id);
    }
  }, [id, normalizedMax, normalizedMin, onChange, onSpinnerChange, normalizedStep, type, value]);
  const handleButtonRelease = (0, import_react81.useCallback)(() => {
    clearTimeout(buttonPressTimer.current);
  }, []);
  const handleButtonPress = (0, import_react81.useCallback)((onChange2) => {
    const minInterval = 50;
    const decrementBy = 10;
    let interval = 200;
    const onChangeInterval = () => {
      if (interval > minInterval)
        interval -= decrementBy;
      onChange2(0);
      buttonPressTimer.current = window.setTimeout(onChangeInterval, interval);
    };
    buttonPressTimer.current = window.setTimeout(onChangeInterval, interval);
    document.addEventListener("mouseup", handleButtonRelease, {
      once: true
    });
  }, [handleButtonRelease]);
  const spinnerMarkup = isNumericType && step !== 0 && !disabled && !readOnly ? /* @__PURE__ */ import_react81.default.createElement(Spinner2, {
    onClick: handleClickChild,
    onChange: handleNumberChange,
    onMouseDown: handleButtonPress,
    onMouseUp: handleButtonRelease,
    ref: spinnerRef,
    onBlur: handleOnBlur
  }) : null;
  const style = multiline && height ? {
    height,
    maxHeight
  } : null;
  const handleExpandingResize = (0, import_react81.useCallback)((height2) => {
    setHeight(height2);
  }, []);
  const resizer = multiline && isAfterInitial ? /* @__PURE__ */ import_react81.default.createElement(Resizer, {
    contents: normalizedValue || placeholder,
    currentHeight: height,
    minimumLines: typeof multiline === "number" ? multiline : 1,
    onHeightChange: handleExpandingResize
  }) : null;
  const describedBy = [];
  if (error) {
    describedBy.push(`${id}Error`);
  }
  if (helpText) {
    describedBy.push(helpTextID(id));
  }
  if (showCharacterCount) {
    describedBy.push(`${id}-CharacterCounter`);
  }
  const labelledBy = [];
  if (prefix) {
    labelledBy.push(`${id}-Prefix`);
  }
  if (suffix) {
    labelledBy.push(`${id}-Suffix`);
  }
  if (verticalContent) {
    labelledBy.push(`${id}-VerticalContent`);
  }
  labelledBy.unshift(labelID(id));
  const inputClassName = classNames(styles13.Input, align && styles13[variationName("Input-align", align)], suffix && styles13["Input-suffixed"], clearButton && styles13["Input-hasClearButton"], monospaced && styles13.monospaced, suggestion && styles13.suggestion);
  const handleOnFocus = (event) => {
    setFocus(true);
    if (selectTextOnFocus && !suggestion) {
      const input2 = multiline ? textAreaRef.current : inputRef.current;
      input2 === null || input2 === void 0 ? void 0 : input2.select();
    }
    if (onFocus) {
      onFocus(event);
    }
  };
  useEventListener("wheel", handleOnWheel, inputRef);
  function handleOnWheel(event) {
    if (document.activeElement === event.target && isNumericType) {
      event.stopPropagation();
    }
  }
  const input = /* @__PURE__ */ (0, import_react81.createElement)(multiline ? "textarea" : "input", {
    name,
    id,
    disabled,
    readOnly,
    role,
    autoFocus,
    value: normalizedValue,
    placeholder,
    style,
    autoComplete,
    className: inputClassName,
    ref: multiline ? textAreaRef : inputRef,
    min,
    max,
    step,
    minLength,
    maxLength,
    spellCheck,
    pattern,
    inputMode,
    type: inputType,
    rows: getRows(multiline),
    "aria-describedby": describedBy.length ? describedBy.join(" ") : void 0,
    "aria-labelledby": labelledBy.join(" "),
    "aria-invalid": Boolean(error),
    "aria-owns": ariaOwns,
    "aria-activedescendant": ariaActiveDescendant,
    "aria-autocomplete": ariaAutocomplete,
    "aria-controls": ariaControls,
    "aria-expanded": ariaExpanded,
    "aria-required": requiredIndicator,
    ...normalizeAriaMultiline(multiline),
    onFocus: handleOnFocus,
    onBlur: handleOnBlur,
    onClick: handleClickChild,
    onKeyPress: handleKeyPress,
    onKeyDown: handleKeyDown3,
    onChange: !suggestion ? handleChange : void 0,
    onInput: suggestion ? handleChange : void 0
  });
  const inputWithVerticalContentMarkup = verticalContent ? /* @__PURE__ */ import_react81.default.createElement("div", {
    className: styles13.VerticalContent,
    id: `${id}-VerticalContent`,
    ref: verticalContentRef,
    onClick: handleClickChild
  }, verticalContent, input) : null;
  const inputMarkup = verticalContent ? inputWithVerticalContentMarkup : input;
  const backdropMarkup = /* @__PURE__ */ import_react81.default.createElement("div", {
    className: classNames(styles13.Backdrop, connectedLeft && styles13["Backdrop-connectedLeft"], connectedRight && styles13["Backdrop-connectedRight"])
  });
  return /* @__PURE__ */ import_react81.default.createElement(Labelled, {
    label,
    id,
    error,
    action: labelAction,
    labelHidden,
    helpText,
    requiredIndicator
  }, /* @__PURE__ */ import_react81.default.createElement(Connected, {
    left: connectedLeft,
    right: connectedRight
  }, /* @__PURE__ */ import_react81.default.createElement("div", {
    className,
    onClick: handleClick
  }, prefixMarkup, inputMarkup, suffixMarkup, characterCountMarkup, clearButtonMarkup, spinnerMarkup, backdropMarkup, resizer)));
  function handleChange(event) {
    onChange && onChange(event.currentTarget.value, id);
  }
  function handleClick(event) {
    var _inputRef$current, _inputRef$current3;
    const {
      target
    } = event;
    const inputRefRole = inputRef === null || inputRef === void 0 ? void 0 : (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.getAttribute("role");
    if (target === inputRef.current && inputRefRole === "combobox") {
      var _inputRef$current2;
      (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.focus();
      handleOnFocus(event);
      return;
    }
    if (isPrefixOrSuffix(target) || isVerticalContent(target) || isInput(target) || isSpinner(target) || focus) {
      return;
    }
    (_inputRef$current3 = inputRef.current) === null || _inputRef$current3 === void 0 ? void 0 : _inputRef$current3.focus();
  }
  function handleClickChild(event) {
    if (!isSpinner(event.target) && !isInput(event.target)) {
      event.stopPropagation();
    }
    if (isPrefixOrSuffix(event.target) || isVerticalContent(event.target) || isInput(event.target) || focus) {
      return;
    }
    setFocus(true);
  }
  function handleClearButtonPress() {
    onClearButtonClick && onClearButtonClick(id);
  }
  function handleKeyPress(event) {
    const {
      key,
      which
    } = event;
    const numbersSpec = /[\d.,eE+-]$/;
    const integerSpec = /[\deE+-]$/;
    if (!isNumericType || which === Key.Enter || type === "number" && numbersSpec.test(key) || type === "integer" && integerSpec.test(key)) {
      return;
    }
    event.preventDefault();
  }
  function handleKeyDown3(event) {
    if (!isNumericType) {
      return;
    }
    const {
      key,
      which
    } = event;
    if ((which === Key.Home || key === "Home") && min !== void 0) {
      if (onSpinnerChange != null) {
        onSpinnerChange(String(min), id);
      } else if (onChange != null) {
        onChange(String(min), id);
      }
    }
    if ((which === Key.End || key === "End") && max !== void 0) {
      if (onSpinnerChange != null) {
        onSpinnerChange(String(max), id);
      } else if (onChange != null) {
        onChange(String(max), id);
      }
    }
    if ((which === Key.PageUp || key === "PageUp") && largeStep !== void 0) {
      handleNumberChange(1, largeStep);
    }
    if ((which === Key.PageDown || key === "PageDown") && largeStep !== void 0) {
      handleNumberChange(-1, largeStep);
    }
  }
  function handleOnBlur(event) {
    setFocus(false);
    if (onBlur) {
      onBlur(event);
    }
  }
  function isInput(target) {
    return target instanceof HTMLElement && inputRef.current && (inputRef.current.contains(target) || inputRef.current.contains(document.activeElement));
  }
  function isPrefixOrSuffix(target) {
    return target instanceof Element && (prefixRef.current && prefixRef.current.contains(target) || suffixRef.current && suffixRef.current.contains(target));
  }
  function isSpinner(target) {
    return target instanceof Element && spinnerRef.current && spinnerRef.current.contains(target);
  }
  function isVerticalContent(target) {
    return target instanceof Element && verticalContentRef.current && (verticalContentRef.current.contains(target) || verticalContentRef.current.contains(document.activeElement));
  }
}
function getRows(multiline) {
  if (!multiline)
    return void 0;
  return typeof multiline === "number" ? multiline : 1;
}
function normalizeAriaMultiline(multiline) {
  if (!multiline)
    return void 0;
  return Boolean(multiline) || typeof multiline === "number" && multiline > 0 ? {
    "aria-multiline": true
  } : void 0;
}

// node_modules/@shopify/polaris/build/esm/components/Card/Card.js
var import_react90 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/within-content-context.js
var import_react82 = __toESM(require_react());
var WithinContentContext = /* @__PURE__ */ (0, import_react82.createContext)(false);

// node_modules/@shopify/polaris/build/esm/components/Card/Card.scss.js
var styles18 = {
  "Card": "Polaris-Card",
  "subdued": "Polaris-Card--subdued",
  "Section-hideOnPrint": "Polaris-Card__Section--hideOnPrint",
  "hideOnPrint": "Polaris-Card--hideOnPrint",
  "Header": "Polaris-Card__Header",
  "Section": "Polaris-Card__Section",
  "Section-fullWidth": "Polaris-Card__Section--fullWidth",
  "Section-flush": "Polaris-Card__Section--flush",
  "Section-subdued": "Polaris-Card__Section--subdued",
  "SectionHeader": "Polaris-Card__SectionHeader",
  "Subsection": "Polaris-Card__Subsection",
  "Footer": "Polaris-Card__Footer",
  "LeftJustified": "Polaris-Card__LeftJustified"
};

// node_modules/@shopify/polaris/build/esm/components/Card/components/Header/Header.js
var import_react87 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ButtonGroup/ButtonGroup.js
var import_react84 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ButtonGroup/ButtonGroup.scss.js
var styles19 = {
  "ButtonGroup": "Polaris-ButtonGroup",
  "Item": "Polaris-ButtonGroup__Item",
  "Item-plain": "Polaris-ButtonGroup__Item--plain",
  "segmented": "Polaris-ButtonGroup--segmented",
  "Item-focused": "Polaris-ButtonGroup__Item--focused",
  "fullWidth": "Polaris-ButtonGroup--fullWidth",
  "extraTight": "Polaris-ButtonGroup--extraTight",
  "tight": "Polaris-ButtonGroup--tight",
  "loose": "Polaris-ButtonGroup--loose",
  "noWrap": "Polaris-ButtonGroup--noWrap"
};

// node_modules/@shopify/polaris/build/esm/components/ButtonGroup/components/Item/Item.js
var import_react83 = __toESM(require_react());
function Item3({
  button
}) {
  const {
    value: focused,
    setTrue: forceTrueFocused,
    setFalse: forceFalseFocused
  } = useToggle(false);
  const className = classNames(styles19.Item, focused && styles19["Item-focused"], button.props.plain && styles19["Item-plain"]);
  return /* @__PURE__ */ import_react83.default.createElement("div", {
    className,
    onFocus: forceTrueFocused,
    onBlur: forceFalseFocused
  }, button);
}

// node_modules/@shopify/polaris/build/esm/components/ButtonGroup/ButtonGroup.js
function ButtonGroup({
  children,
  spacing: spacing2,
  segmented,
  fullWidth,
  connectedTop,
  noWrap
}) {
  const className = classNames(styles19.ButtonGroup, spacing2 && styles19[spacing2], segmented && styles19.segmented, fullWidth && styles19.fullWidth, noWrap && styles19.noWrap);
  const contents = elementChildren(children).map((child, index) => /* @__PURE__ */ import_react84.default.createElement(Item3, {
    button: child,
    key: index
  }));
  return /* @__PURE__ */ import_react84.default.createElement("div", {
    className,
    "data-buttongroup-segmented": segmented,
    "data-buttongroup-connected-top": connectedTop,
    "data-buttongroup-full-width": fullWidth,
    "data-buttongroup-no-wrap": noWrap
  }, contents);
}

// node_modules/@shopify/polaris/build/esm/components/LegacyStack/LegacyStack.js
var import_react86 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/LegacyStack/LegacyStack.scss.js
var styles20 = {
  "LegacyStack": "Polaris-LegacyStack",
  "Item": "Polaris-LegacyStack__Item",
  "noWrap": "Polaris-LegacyStack--noWrap",
  "spacingNone": "Polaris-LegacyStack--spacingNone",
  "spacingExtraTight": "Polaris-LegacyStack--spacingExtraTight",
  "spacingTight": "Polaris-LegacyStack--spacingTight",
  "spacingBaseTight": "Polaris-LegacyStack--spacingBaseTight",
  "spacingLoose": "Polaris-LegacyStack--spacingLoose",
  "spacingExtraLoose": "Polaris-LegacyStack--spacingExtraLoose",
  "distributionLeading": "Polaris-LegacyStack--distributionLeading",
  "distributionTrailing": "Polaris-LegacyStack--distributionTrailing",
  "distributionCenter": "Polaris-LegacyStack--distributionCenter",
  "distributionEqualSpacing": "Polaris-LegacyStack--distributionEqualSpacing",
  "distributionFill": "Polaris-LegacyStack--distributionFill",
  "distributionFillEvenly": "Polaris-LegacyStack--distributionFillEvenly",
  "alignmentLeading": "Polaris-LegacyStack--alignmentLeading",
  "alignmentTrailing": "Polaris-LegacyStack--alignmentTrailing",
  "alignmentCenter": "Polaris-LegacyStack--alignmentCenter",
  "alignmentFill": "Polaris-LegacyStack--alignmentFill",
  "alignmentBaseline": "Polaris-LegacyStack--alignmentBaseline",
  "vertical": "Polaris-LegacyStack--vertical",
  "Item-fill": "Polaris-LegacyStack__Item--fill"
};

// node_modules/@shopify/polaris/build/esm/components/LegacyStack/components/Item/Item.js
var import_react85 = __toESM(require_react());
function Item4({
  children,
  fill
}) {
  const className = classNames(styles20.Item, fill && styles20["Item-fill"]);
  return /* @__PURE__ */ import_react85.default.createElement("div", {
    className
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/LegacyStack/LegacyStack.js
var LegacyStack = /* @__PURE__ */ (0, import_react86.memo)(function Stack({
  children,
  vertical,
  spacing: spacing2,
  distribution,
  alignment,
  wrap
}) {
  const className = classNames(styles20.LegacyStack, vertical && styles20.vertical, spacing2 && styles20[variationName("spacing", spacing2)], distribution && styles20[variationName("distribution", distribution)], alignment && styles20[variationName("alignment", alignment)], wrap === false && styles20.noWrap);
  const itemMarkup = elementChildren(children).map((child, index) => {
    const props = {
      key: index
    };
    return wrapWithComponent(child, Item4, props);
  });
  return /* @__PURE__ */ import_react86.default.createElement("div", {
    className
  }, itemMarkup);
});
LegacyStack.Item = Item4;

// node_modules/@shopify/polaris/build/esm/components/Card/components/Header/Header.js
function Header({
  children,
  title,
  actions
}) {
  if (true) {
    console.warn("Deprecation: <Card /> is deprecated. This component will be removed in a future major version of Polaris. Use <LegacyCard /> or <AlphaCard /> instead.");
  }
  const actionMarkup = actions ? /* @__PURE__ */ import_react87.default.createElement(ButtonGroup, null, buttonsFrom(actions, {
    plain: true
  })) : null;
  const titleMarkup = /* @__PURE__ */ (0, import_react87.isValidElement)(title) ? title : /* @__PURE__ */ import_react87.default.createElement(Text, {
    variant: "headingMd",
    as: "h2"
  }, title);
  const headingMarkup = actionMarkup || children ? /* @__PURE__ */ import_react87.default.createElement(LegacyStack, {
    alignment: "baseline"
  }, /* @__PURE__ */ import_react87.default.createElement(LegacyStack.Item, {
    fill: true
  }, titleMarkup), actionMarkup, children) : titleMarkup;
  return /* @__PURE__ */ import_react87.default.createElement("div", {
    className: styles18.Header
  }, headingMarkup);
}

// node_modules/@shopify/polaris/build/esm/components/Card/components/Section/Section.js
var import_react88 = __toESM(require_react());
function Section3({
  children,
  title,
  subdued,
  flush,
  fullWidth,
  actions,
  hideOnPrint
}) {
  if (true) {
    console.warn("Deprecation: <Card /> is deprecated. This component will be removed in a future major version of Polaris. Use <LegacyCard /> or <AlphaCard /> instead.");
  }
  const className = classNames(styles18.Section, flush && styles18["Section-flush"], subdued && styles18["Section-subdued"], fullWidth && styles18["Section-fullWidth"], hideOnPrint && styles18["Section-hideOnPrint"]);
  const actionMarkup = actions ? /* @__PURE__ */ import_react88.default.createElement(ButtonGroup, null, buttonsFrom(actions, {
    plain: true
  })) : null;
  const titleMarkup = typeof title === "string" ? /* @__PURE__ */ import_react88.default.createElement(Text, {
    variant: "headingSm",
    as: "h3"
  }, title) : title;
  const titleAreaMarkup = titleMarkup || actionMarkup ? /* @__PURE__ */ import_react88.default.createElement("div", {
    className: styles18.SectionHeader
  }, actionMarkup ? /* @__PURE__ */ import_react88.default.createElement(LegacyStack, {
    alignment: "baseline"
  }, /* @__PURE__ */ import_react88.default.createElement(LegacyStack.Item, {
    fill: true
  }, titleMarkup), actionMarkup) : titleMarkup) : null;
  return /* @__PURE__ */ import_react88.default.createElement("div", {
    className
  }, titleAreaMarkup, children);
}

// node_modules/@shopify/polaris/build/esm/components/Card/components/Subsection/Subsection.js
var import_react89 = __toESM(require_react());
function Subsection({
  children
}) {
  if (true) {
    console.warn("Deprecation: <Card /> is deprecated. This component will be removed in a future major version of Polaris. Use <LegacyCard /> or <AlphaCard /> instead.");
  }
  return /* @__PURE__ */ import_react89.default.createElement("div", {
    className: styles18.Subsection
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/Card/Card.js
var Card = function Card2({
  children,
  hideOnPrint,
  title,
  subdued,
  sectioned,
  actions,
  primaryFooterAction,
  secondaryFooterActions,
  secondaryFooterActionsDisclosureText,
  footerActionAlignment = "right"
}) {
  if (true) {
    console.warn("Deprecation: <Card /> is deprecated. This component will be removed in a future major version of Polaris. Use <LegacyCard /> or <AlphaCard /> instead.");
  }
  const i18n = useI18n();
  const {
    value: secondaryActionsPopoverOpen,
    toggle: toggleSecondaryActionsPopoverOpen
  } = useToggle(false);
  const className = classNames(styles18.Card, subdued && styles18.subdued, hideOnPrint && styles18.hideOnPrint);
  const headerMarkup = title || actions ? /* @__PURE__ */ import_react90.default.createElement(Header, {
    actions,
    title
  }) : null;
  const content = sectioned ? /* @__PURE__ */ import_react90.default.createElement(Section3, null, children) : children;
  const primaryFooterActionMarkup = primaryFooterAction ? buttonFrom(primaryFooterAction, {
    primary: true
  }) : null;
  let secondaryFooterActionsMarkup = null;
  if (secondaryFooterActions && secondaryFooterActions.length) {
    if (secondaryFooterActions.length === 1) {
      secondaryFooterActionsMarkup = buttonFrom(secondaryFooterActions[0]);
    } else {
      secondaryFooterActionsMarkup = /* @__PURE__ */ import_react90.default.createElement(import_react90.default.Fragment, null, /* @__PURE__ */ import_react90.default.createElement(Popover2, {
        active: secondaryActionsPopoverOpen,
        activator: /* @__PURE__ */ import_react90.default.createElement(Button, {
          disclosure: true,
          onClick: toggleSecondaryActionsPopoverOpen
        }, secondaryFooterActionsDisclosureText || i18n.translate("Polaris.Common.more")),
        onClose: toggleSecondaryActionsPopoverOpen
      }, /* @__PURE__ */ import_react90.default.createElement(ActionList, {
        items: secondaryFooterActions
      })));
    }
  }
  const footerMarkup = primaryFooterActionMarkup || secondaryFooterActionsMarkup ? /* @__PURE__ */ import_react90.default.createElement("div", {
    className: classNames(styles18.Footer, footerActionAlignment === "left" && styles18.LeftJustified)
  }, footerActionAlignment === "right" ? /* @__PURE__ */ import_react90.default.createElement(ButtonGroup, null, secondaryFooterActionsMarkup, primaryFooterActionMarkup) : /* @__PURE__ */ import_react90.default.createElement(ButtonGroup, null, primaryFooterActionMarkup, secondaryFooterActionsMarkup)) : null;
  return /* @__PURE__ */ import_react90.default.createElement(WithinContentContext.Provider, {
    value: true
  }, /* @__PURE__ */ import_react90.default.createElement("div", {
    className
  }, headerMarkup, content, footerMarkup));
};
Card.Header = Header;
Card.Section = Section3;
Card.Subsection = Subsection;

// node_modules/@shopify/polaris/build/esm/components/Collapsible/Collapsible.js
var import_react91 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Collapsible/Collapsible.scss.js
var styles21 = {
  "Collapsible": "Polaris-Collapsible",
  "isFullyClosed": "Polaris-Collapsible--isFullyClosed",
  "expandOnPrint": "Polaris-Collapsible--expandOnPrint"
};

// node_modules/@shopify/polaris/build/esm/components/Collapsible/Collapsible.js
function Collapsible({
  id,
  expandOnPrint,
  open,
  transition = true,
  preventMeasuringOnChildrenUpdate: _preventMeasuringOnChildrenUpdate,
  children,
  onAnimationEnd
}) {
  const [height, setHeight] = (0, import_react91.useState)(0);
  const [isOpen, setIsOpen] = (0, import_react91.useState)(open);
  const [animationState, setAnimationState] = (0, import_react91.useState)("idle");
  const collapsibleContainer = (0, import_react91.useRef)(null);
  const isFullyOpen = animationState === "idle" && open && isOpen;
  const isFullyClosed = animationState === "idle" && !open && !isOpen;
  const content = expandOnPrint || !isFullyClosed ? children : null;
  const wrapperClassName = classNames(styles21.Collapsible, isFullyClosed && styles21.isFullyClosed, expandOnPrint && styles21.expandOnPrint);
  const transitionDisabled = isTransitionDisabled(transition);
  const transitionStyles = typeof transition === "object" && {
    transitionDuration: transition.duration,
    transitionTimingFunction: transition.timingFunction
  };
  const collapsibleStyles = {
    ...transitionStyles,
    ...{
      maxHeight: isFullyOpen ? "none" : `${height}px`,
      overflow: isFullyOpen ? "visible" : "hidden"
    }
  };
  const handleCompleteAnimation = (0, import_react91.useCallback)(({
    target
  }) => {
    if (target === collapsibleContainer.current) {
      setAnimationState("idle");
      setIsOpen(open);
      onAnimationEnd && onAnimationEnd();
    }
  }, [onAnimationEnd, open]);
  const startAnimation = (0, import_react91.useCallback)(() => {
    if (transitionDisabled) {
      setIsOpen(open);
      setAnimationState("idle");
      if (open && collapsibleContainer.current) {
        setHeight(collapsibleContainer.current.scrollHeight);
      } else {
        setHeight(0);
      }
    } else {
      setAnimationState("measuring");
    }
  }, [open, transitionDisabled]);
  (0, import_react91.useEffect)(() => {
    if (open !== isOpen) {
      startAnimation();
    }
  }, [open, isOpen]);
  (0, import_react91.useEffect)(() => {
    if (!open || !collapsibleContainer.current)
      return;
    setHeight(collapsibleContainer.current.scrollHeight);
  }, []);
  (0, import_react91.useEffect)(() => {
    if (!collapsibleContainer.current)
      return;
    switch (animationState) {
      case "idle":
        break;
      case "measuring":
        setHeight(collapsibleContainer.current.scrollHeight);
        setAnimationState("animating");
        break;
      case "animating":
        setHeight(open ? collapsibleContainer.current.scrollHeight : 0);
    }
  }, [animationState, open, isOpen]);
  return /* @__PURE__ */ import_react91.default.createElement("div", {
    id,
    style: collapsibleStyles,
    ref: collapsibleContainer,
    className: wrapperClassName,
    onTransitionEnd: handleCompleteAnimation,
    "aria-hidden": !open
  }, content);
}
var zeroDurationRegex = /^0(ms|s)$/;
function isTransitionDisabled(transitionProp) {
  if (typeof transitionProp === "boolean") {
    return !transitionProp;
  }
  const {
    duration
  } = transitionProp;
  if (duration && zeroDurationRegex.test(duration.trim())) {
    return true;
  }
  return false;
}

// node_modules/@shopify/polaris/build/esm/components/DataTable/DataTable.js
var import_react100 = __toESM(require_react());
var import_react_fast_compare = __toESM(require_react_fast_compare());

// node_modules/@shopify/polaris/build/esm/components/DataTable/utilities.js
function measureColumn(tableData) {
  return function(column, index) {
    const {
      firstVisibleColumnIndex,
      tableLeftVisibleEdge: tableStart,
      tableRightVisibleEdge: tableEnd
    } = tableData;
    const leftEdge = column.offsetLeft;
    const rightEdge = leftEdge + column.offsetWidth;
    const isVisibleLeft = isEdgeVisible(leftEdge, tableStart, tableEnd, "left");
    const isVisibleRight = isEdgeVisible(rightEdge, tableStart, tableEnd, "right");
    const isVisible = isVisibleLeft || isVisibleRight;
    const width = column.offsetWidth;
    if (isVisible) {
      tableData.firstVisibleColumnIndex = Math.min(firstVisibleColumnIndex, index);
    }
    return {
      leftEdge,
      rightEdge,
      isVisible,
      width,
      index
    };
  };
}
function isEdgeVisible(position, start, end, edgeType) {
  const minVisiblePixels = 30;
  return position >= start + (edgeType === "left" ? 0 : minVisiblePixels) && position <= end - minVisiblePixels;
}
function getPrevAndCurrentColumns(tableData, columnData) {
  const {
    firstVisibleColumnIndex
  } = tableData;
  const previousColumnIndex = Math.max(firstVisibleColumnIndex - 1, 0);
  const previousColumn = columnData[previousColumnIndex];
  const currentColumn = columnData[firstVisibleColumnIndex];
  return {
    previousColumn,
    currentColumn
  };
}

// node_modules/@shopify/polaris/build/esm/components/DataTable/DataTable.scss.js
var styles22 = {
  "DataTable": "Polaris-DataTable",
  "condensed": "Polaris-DataTable--condensed",
  "Navigation": "Polaris-DataTable__Navigation",
  "IncreasedTableDensity": "Polaris-DataTable__IncreasedTableDensity",
  "Pip": "Polaris-DataTable__Pip",
  "Pip-visible": "Polaris-DataTable__Pip--visible",
  "ScrollContainer": "Polaris-DataTable__ScrollContainer",
  "Table": "Polaris-DataTable__Table",
  "TableRow": "Polaris-DataTable__TableRow",
  "Cell": "Polaris-DataTable__Cell",
  "ZebraStripingOnData": "Polaris-DataTable__ZebraStripingOnData",
  "RowCountIsEven": "Polaris-DataTable__RowCountIsEven",
  "ShowTotalsInFooter": "Polaris-DataTable__ShowTotalsInFooter",
  "Cell-separate": "Polaris-DataTable__Cell--separate",
  "Cell-firstColumn": "Polaris-DataTable__Cell--firstColumn",
  "Cell-numeric": "Polaris-DataTable__Cell--numeric",
  "Cell-truncated": "Polaris-DataTable__Cell--truncated",
  "Cell-header": "Polaris-DataTable__Cell--header",
  "Cell-sortable": "Polaris-DataTable__Cell--sortable",
  "Heading-left": "Polaris-DataTable__Heading--left",
  "Cell-verticalAlignTop": "Polaris-DataTable__Cell--verticalAlignTop",
  "Cell-verticalAlignBottom": "Polaris-DataTable__Cell--verticalAlignBottom",
  "Cell-verticalAlignMiddle": "Polaris-DataTable__Cell--verticalAlignMiddle",
  "Cell-verticalAlignBaseline": "Polaris-DataTable__Cell--verticalAlignBaseline",
  "hoverable": "Polaris-DataTable--hoverable",
  "Cell-hovered": "Polaris-DataTable__Cell--hovered",
  "Icon": "Polaris-DataTable__Icon",
  "Heading": "Polaris-DataTable__Heading",
  "StickyHeaderEnabled": "Polaris-DataTable__StickyHeaderEnabled",
  "StickyHeaderWrapper": "Polaris-DataTable__StickyHeaderWrapper",
  "Cell-sorted": "Polaris-DataTable__Cell--sorted",
  "Cell-total": "Polaris-DataTable__Cell--total",
  "ShowTotals": "Polaris-DataTable__ShowTotals",
  "Cell-total-footer": "Polaris-DataTable--cellTotalFooter",
  "Footer": "Polaris-DataTable__Footer",
  "StickyHeaderInner": "Polaris-DataTable__StickyHeaderInner",
  "StickyHeaderInner-isSticky": "Polaris-DataTable__StickyHeaderInner--isSticky",
  "StickyHeaderTable": "Polaris-DataTable__StickyHeaderTable",
  "FixedFirstColumn": "Polaris-DataTable__FixedFirstColumn",
  "StickyTableHeadingsRow": "Polaris-DataTable__StickyTableHeadingsRow",
  "TooltipContent": "Polaris-DataTable__TooltipContent"
};

// node_modules/@shopify/polaris/build/esm/components/DataTable/components/Cell/Cell.js
var import_react95 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Tooltip/Tooltip.js
var import_react94 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Tooltip/Tooltip.scss.js
var styles23 = {
  "TooltipContainer": "Polaris-Tooltip__TooltipContainer",
  "HasUnderline": "Polaris-Tooltip__HasUnderline"
};

// node_modules/@shopify/polaris/build/esm/utilities/ephemeral-presence-manager/hooks.js
var import_react92 = __toESM(require_react());
function useEphemeralPresenceManager() {
  const ephemeralPresenceManager = (0, import_react92.useContext)(EphemeralPresenceManagerContext);
  if (!ephemeralPresenceManager) {
    throw new Error("No ephemeral presence manager was provided. Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");
  }
  return ephemeralPresenceManager;
}

// node_modules/@shopify/polaris/build/esm/components/Tooltip/components/TooltipOverlay/TooltipOverlay.js
var import_react93 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Tooltip/components/TooltipOverlay/TooltipOverlay.scss.js
var styles24 = {
  "TooltipOverlay": "Polaris-Tooltip-TooltipOverlay",
  "positionedAbove": "Polaris-Tooltip-TooltipOverlay--positionedAbove",
  "measuring": "Polaris-Tooltip-TooltipOverlay--measuring",
  "measured": "Polaris-Tooltip-TooltipOverlay--measured",
  "instant": "Polaris-Tooltip-TooltipOverlay--instant",
  "Content": "Polaris-Tooltip-TooltipOverlay__Content",
  "default": "Polaris-Tooltip-TooltipOverlay--default",
  "wide": "Polaris-Tooltip-TooltipOverlay--wide"
};

// node_modules/@shopify/polaris/build/esm/components/Tooltip/components/TooltipOverlay/TooltipOverlay.js
function TooltipOverlay({
  active,
  activator,
  preferredPosition = "below",
  preventInteraction,
  id,
  children,
  accessibilityLabel,
  width,
  padding,
  borderRadius,
  zIndexOverride,
  instant
}) {
  const i18n = useI18n();
  const markup = active ? /* @__PURE__ */ import_react93.default.createElement(PositionedOverlay, {
    active,
    activator,
    preferredPosition,
    preventInteraction,
    render: renderTooltip,
    zIndexOverride
  }) : null;
  return markup;
  function renderTooltip(overlayDetails) {
    const {
      measuring,
      desiredHeight,
      positioning,
      chevronOffset
    } = overlayDetails;
    const containerClassName = classNames(styles24.TooltipOverlay, measuring && styles24.measuring, !measuring && styles24.measured, instant && styles24.instant, positioning === "above" && styles24.positionedAbove);
    const contentClassName = classNames(styles24.Content, width && styles24[width]);
    const contentStyles = measuring ? void 0 : {
      minHeight: desiredHeight
    };
    const style = {
      "--pc-tooltip-chevron-x-pos": `${chevronOffset}px`,
      "--pc-tooltip-border-radius": borderRadius ? `var(--p-border-radius-${borderRadius})` : void 0,
      "--pc-tooltip-padding": padding && padding === "default" ? "var(--p-space-1) var(--p-space-2)" : `var(--p-space-${padding})`
    };
    return /* @__PURE__ */ import_react93.default.createElement("div", Object.assign({
      style,
      className: containerClassName
    }, layer.props), /* @__PURE__ */ import_react93.default.createElement("div", {
      id,
      role: "tooltip",
      className: contentClassName,
      style: {
        ...contentStyles,
        ...style
      },
      "aria-label": accessibilityLabel ? i18n.translate("Polaris.TooltipOverlay.accessibilityLabel", {
        label: accessibilityLabel
      }) : void 0
    }, children));
  }
}

// node_modules/@shopify/polaris/build/esm/components/Tooltip/Tooltip.js
var HOVER_OUT_TIMEOUT = 150;
function Tooltip({
  children,
  content,
  dismissOnMouseOut,
  active: originalActive,
  hoverDelay,
  preferredPosition = "below",
  activatorWrapper = "span",
  accessibilityLabel,
  width = "default",
  padding = "default",
  borderRadius = "1",
  zIndexOverride,
  hasUnderline,
  persistOnClick,
  onOpen,
  onClose
}) {
  const WrapperComponent = activatorWrapper;
  const {
    value: active,
    setTrue: handleFocus,
    setFalse: handleBlur
  } = useToggle(Boolean(originalActive));
  const {
    value: persist,
    toggle: togglePersisting
  } = useToggle(Boolean(originalActive) && Boolean(persistOnClick));
  const [activatorNode, setActivatorNode] = (0, import_react94.useState)(null);
  const {
    presenceList,
    addPresence,
    removePresence
  } = useEphemeralPresenceManager();
  const id = useUniqueId("TooltipContent");
  const activatorContainer = (0, import_react94.useRef)(null);
  const mouseEntered = (0, import_react94.useRef)(false);
  const [shouldAnimate, setShouldAnimate] = (0, import_react94.useState)(Boolean(!originalActive));
  const hoverDelayTimeout = (0, import_react94.useRef)(null);
  const hoverOutTimeout = (0, import_react94.useRef)(null);
  (0, import_react94.useEffect)(() => {
    const firstFocusable = activatorContainer.current ? findFirstFocusableNode(activatorContainer.current) : null;
    const accessibilityNode = firstFocusable || activatorContainer.current;
    if (!accessibilityNode)
      return;
    accessibilityNode.tabIndex = 0;
    accessibilityNode.setAttribute("aria-describedby", id);
    accessibilityNode.setAttribute("data-polaris-tooltip-activator", "true");
  }, [id, children]);
  (0, import_react94.useEffect)(() => {
    return () => {
      if (hoverDelayTimeout.current) {
        clearTimeout(hoverDelayTimeout.current);
      }
      if (hoverOutTimeout.current) {
        clearTimeout(hoverOutTimeout.current);
      }
    };
  }, []);
  const handleOpen = (0, import_react94.useCallback)(() => {
    setShouldAnimate(!presenceList.tooltip && !active);
    onOpen === null || onOpen === void 0 ? void 0 : onOpen();
    addPresence("tooltip");
  }, [addPresence, presenceList.tooltip, onOpen, active]);
  const handleClose = (0, import_react94.useCallback)(() => {
    onClose === null || onClose === void 0 ? void 0 : onClose();
    setShouldAnimate(false);
    hoverOutTimeout.current = setTimeout(() => {
      removePresence("tooltip");
    }, HOVER_OUT_TIMEOUT);
  }, [removePresence, onClose]);
  const handleKeyUp = (0, import_react94.useCallback)((event) => {
    if (event.key !== "Escape")
      return;
    handleClose === null || handleClose === void 0 ? void 0 : handleClose();
    handleBlur();
    persistOnClick && togglePersisting();
  }, [handleBlur, handleClose, persistOnClick, togglePersisting]);
  const portal2 = activatorNode ? /* @__PURE__ */ import_react94.default.createElement(Portal, {
    idPrefix: "tooltip"
  }, /* @__PURE__ */ import_react94.default.createElement(TooltipOverlay, {
    id,
    preferredPosition,
    activator: activatorNode,
    active,
    accessibilityLabel,
    onClose: noop3,
    preventInteraction: dismissOnMouseOut,
    width,
    padding,
    borderRadius,
    zIndexOverride,
    instant: !shouldAnimate
  }, content)) : null;
  const wrapperClassNames = classNames(activatorWrapper === "div" && styles23.TooltipContainer, hasUnderline && styles23.HasUnderline);
  return /* @__PURE__ */ import_react94.default.createElement(WrapperComponent, {
    onFocus: () => {
      handleOpen();
      handleFocus();
    },
    onBlur: () => {
      handleClose();
      handleBlur();
      if (persistOnClick) {
        togglePersisting();
      }
    },
    onMouseLeave: handleMouseLeave,
    onMouseOver: handleMouseEnterFix,
    onMouseDown: persistOnClick ? togglePersisting : void 0,
    ref: setActivator,
    onKeyUp: handleKeyUp,
    className: wrapperClassNames
  }, children, portal2);
  function setActivator(node) {
    const activatorContainerRef = activatorContainer;
    if (node == null) {
      activatorContainerRef.current = null;
      setActivatorNode(null);
      return;
    }
    node.firstElementChild instanceof HTMLElement && setActivatorNode(node.firstElementChild);
    activatorContainerRef.current = node;
  }
  function handleMouseEnter() {
    mouseEntered.current = true;
    if (hoverDelay && !presenceList.tooltip) {
      hoverDelayTimeout.current = setTimeout(() => {
        handleOpen();
        handleFocus();
      }, hoverDelay);
    } else {
      handleOpen();
      handleFocus();
    }
  }
  function handleMouseLeave() {
    if (hoverDelayTimeout.current) {
      clearTimeout(hoverDelayTimeout.current);
      hoverDelayTimeout.current = null;
    }
    mouseEntered.current = false;
    handleClose();
    if (!persist) {
      handleBlur();
    }
  }
  function handleMouseEnterFix() {
    !mouseEntered.current && handleMouseEnter();
  }
}
function noop3() {
}

// node_modules/@shopify/polaris/build/esm/components/DataTable/components/Cell/Cell.js
function Cell({
  content,
  contentType,
  nthColumn,
  firstColumn,
  truncate,
  header,
  total,
  totalInFooter,
  sorted,
  sortable,
  sortDirection,
  inFixedNthColumn,
  verticalAlign = "top",
  defaultSortDirection = "ascending",
  onSort,
  colSpan,
  setRef = () => {
  },
  stickyHeadingCell = false,
  stickyCellWidth,
  hovered = false,
  handleFocus = () => {
  },
  hasFixedNthColumn = false,
  fixedCellVisible = false,
  firstColumnMinWidth,
  style,
  lastFixedFirstColumn
}) {
  const i18n = useI18n();
  const numeric = contentType === "numeric";
  const className = classNames(styles22.Cell, styles22[`Cell-${variationName("verticalAlign", verticalAlign)}`], firstColumn && styles22["Cell-firstColumn"], truncate && styles22["Cell-truncated"], header && styles22["Cell-header"], total && styles22["Cell-total"], totalInFooter && styles22["Cell-total-footer"], numeric && styles22["Cell-numeric"], sortable && styles22["Cell-sortable"], sorted && styles22["Cell-sorted"], stickyHeadingCell && styles22.StickyHeaderCell, hovered && styles22["Cell-hovered"], lastFixedFirstColumn && inFixedNthColumn && fixedCellVisible && styles22["Cell-separate"], nthColumn && inFixedNthColumn && stickyHeadingCell && styles22.FixedFirstColumn);
  const headerClassName = classNames(header && styles22.Heading, header && contentType === "text" && styles22["Heading-left"]);
  const iconClassName = classNames(sortable && styles22.Icon);
  const direction = sorted && sortDirection ? sortDirection : defaultSortDirection;
  const source = direction === "descending" ? SvgSortDescendingMajor : SvgSortAscendingMajor;
  const oppositeDirection = sortDirection === "ascending" ? "descending" : "ascending";
  const sortAccessibilityLabel = i18n.translate("Polaris.DataTable.sortAccessibilityLabel", {
    direction: sorted ? oppositeDirection : direction
  });
  const iconMarkup = /* @__PURE__ */ import_react95.default.createElement("span", {
    className: iconClassName
  }, /* @__PURE__ */ import_react95.default.createElement(Icon, {
    source,
    accessibilityLabel: sortAccessibilityLabel
  }));
  const focusable = !(stickyHeadingCell && hasFixedNthColumn && nthColumn && !inFixedNthColumn);
  const sortableHeadingContent = /* @__PURE__ */ import_react95.default.createElement("button", {
    className: headerClassName,
    onClick: onSort,
    onFocus: handleFocus,
    tabIndex: focusable ? 0 : -1
  }, iconMarkup, content);
  const columnHeadingContent = sortable ? sortableHeadingContent : content;
  const colSpanProp = colSpan && colSpan > 1 ? {
    colSpan
  } : {};
  const minWidthStyles = nthColumn && firstColumnMinWidth ? {
    minWidth: firstColumnMinWidth
  } : {
    minWidth: stickyCellWidth
  };
  const stickyHeading = /* @__PURE__ */ import_react95.default.createElement("th", Object.assign({
    ref: setRef
  }, headerCell.props, colSpanProp, {
    className,
    "aria-sort": sortDirection,
    style: {
      ...style,
      ...minWidthStyles
    },
    "data-index-table-sticky-heading": true
  }), columnHeadingContent);
  const headingMarkup = header ? /* @__PURE__ */ import_react95.default.createElement("th", Object.assign({}, headerCell.props, {
    "aria-sort": sortDirection
  }, colSpanProp, {
    ref: setRef,
    className,
    scope: "col",
    style: {
      ...minWidthStyles
    }
  }), columnHeadingContent) : /* @__PURE__ */ import_react95.default.createElement("th", Object.assign({}, colSpanProp, {
    ref: setRef,
    className,
    scope: "row",
    style: {
      ...minWidthStyles
    }
  }), truncate ? /* @__PURE__ */ import_react95.default.createElement(TruncatedText, {
    className: styles22.TooltipContent
  }, content) : content);
  const cellMarkup = header || firstColumn || nthColumn ? headingMarkup : /* @__PURE__ */ import_react95.default.createElement("td", Object.assign({
    className
  }, colSpanProp), content);
  return stickyHeadingCell ? stickyHeading : cellMarkup;
}
var TruncatedText = ({
  children,
  className = ""
}) => {
  const textRef = (0, import_react95.useRef)(null);
  const {
    current
  } = textRef;
  const text = /* @__PURE__ */ import_react95.default.createElement("span", {
    ref: textRef,
    className
  }, children);
  return (current === null || current === void 0 ? void 0 : current.scrollWidth) > (current === null || current === void 0 ? void 0 : current.offsetWidth) ? /* @__PURE__ */ import_react95.default.createElement(Tooltip, {
    content: textRef.current.innerText
  }, text) : text;
};

// node_modules/@shopify/polaris/build/esm/components/AfterInitialMount/AfterInitialMount.js
var import_react96 = __toESM(require_react());
function AfterInitialMount({
  children,
  onMount,
  fallback = null
}) {
  const isMounted = useIsAfterInitialMount();
  const content = isMounted ? children : fallback;
  (0, import_react96.useEffect)(() => {
    if (isMounted && onMount) {
      onMount();
    }
  }, [isMounted, onMount]);
  return /* @__PURE__ */ import_react96.default.createElement(import_react96.default.Fragment, null, content);
}

// node_modules/@shopify/polaris/build/esm/components/Sticky/Sticky.js
var import_react98 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/sticky-manager/hooks.js
var import_react97 = __toESM(require_react());
function useStickyManager() {
  const stickyManager = (0, import_react97.useContext)(StickyManagerContext);
  if (!stickyManager) {
    throw new MissingAppProviderError("No StickyManager was provided.");
  }
  return stickyManager;
}

// node_modules/@shopify/polaris/build/esm/components/Sticky/Sticky.js
var StickyInner = class extends import_react98.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      isSticky: false,
      style: {}
    };
    this.placeHolderNode = null;
    this.stickyNode = null;
    this.setPlaceHolderNode = (node) => {
      this.placeHolderNode = node;
    };
    this.setStickyNode = (node) => {
      this.stickyNode = node;
    };
    this.handlePositioning = (stick, top = 0, left = 0, width = 0) => {
      const {
        isSticky
      } = this.state;
      if (stick && !isSticky || !stick && isSticky) {
        this.adjustPlaceHolderNode(stick);
        this.setState({
          isSticky: !isSticky
        }, () => {
          if (this.props.onStickyChange == null) {
            return null;
          }
          this.props.onStickyChange(!isSticky);
          if (this.props.boundingElement == null) {
            return null;
          }
          this.props.boundingElement.toggleAttribute("data-sticky-active");
        });
      }
      const style = stick ? {
        position: "fixed",
        top,
        left,
        width
      } : {};
      this.setState({
        style
      });
    };
    this.adjustPlaceHolderNode = (add) => {
      if (this.placeHolderNode && this.stickyNode) {
        this.placeHolderNode.style.paddingBottom = add ? `${getRectForNode(this.stickyNode).height}px` : "0px";
      }
    };
  }
  componentDidMount() {
    const {
      boundingElement,
      offset = false,
      disableWhenStacked = false,
      stickyManager
    } = this.props;
    if (!this.stickyNode || !this.placeHolderNode)
      return;
    stickyManager.registerStickyItem({
      stickyNode: this.stickyNode,
      placeHolderNode: this.placeHolderNode,
      handlePositioning: this.handlePositioning,
      offset,
      boundingElement,
      disableWhenStacked
    });
  }
  componentWillUnmount() {
    const {
      stickyManager
    } = this.props;
    if (!this.stickyNode)
      return;
    stickyManager.unregisterStickyItem(this.stickyNode);
  }
  render() {
    const {
      style,
      isSticky
    } = this.state;
    const {
      children
    } = this.props;
    const childrenContent = isFunction(children) ? children(isSticky) : children;
    return /* @__PURE__ */ import_react98.default.createElement("div", null, /* @__PURE__ */ import_react98.default.createElement("div", {
      ref: this.setPlaceHolderNode
    }), /* @__PURE__ */ import_react98.default.createElement("div", {
      ref: this.setStickyNode,
      style
    }, childrenContent));
  }
};
function isFunction(arg) {
  return typeof arg === "function";
}
function Sticky(props) {
  const stickyManager = useStickyManager();
  return /* @__PURE__ */ import_react98.default.createElement(StickyInner, Object.assign({}, props, {
    stickyManager
  }));
}

// node_modules/@shopify/polaris/build/esm/components/DataTable/components/Navigation/Navigation.js
var import_react99 = __toESM(require_react());
function Navigation({
  columnVisibilityData,
  isScrolledFarthestLeft,
  isScrolledFarthestRight,
  navigateTableLeft,
  navigateTableRight,
  fixedFirstColumns,
  setRef = () => {
  }
}) {
  const i18n = useI18n();
  const pipMarkup = columnVisibilityData.map((column, index) => {
    if (index < fixedFirstColumns)
      return;
    const className = classNames(styles22.Pip, column.isVisible && styles22["Pip-visible"]);
    return /* @__PURE__ */ import_react99.default.createElement("div", {
      className,
      key: `pip-${index}`
    });
  });
  const leftA11yLabel = i18n.translate("Polaris.DataTable.navAccessibilityLabel", {
    direction: "left"
  });
  const rightA11yLabel = i18n.translate("Polaris.DataTable.navAccessibilityLabel", {
    direction: "right"
  });
  return /* @__PURE__ */ import_react99.default.createElement("div", {
    className: styles22.Navigation,
    ref: setRef
  }, /* @__PURE__ */ import_react99.default.createElement(Button, {
    plain: true,
    icon: SvgChevronLeftMinor,
    disabled: isScrolledFarthestLeft,
    accessibilityLabel: leftA11yLabel,
    onClick: navigateTableLeft
  }), pipMarkup, /* @__PURE__ */ import_react99.default.createElement(Button, {
    plain: true,
    icon: SvgChevronRightMinor,
    disabled: isScrolledFarthestRight,
    accessibilityLabel: rightA11yLabel,
    onClick: navigateTableRight
  }));
}

// node_modules/@shopify/polaris/build/esm/components/DataTable/DataTable.js
var getRowClientHeights = (rows) => {
  const heights = [];
  if (!rows) {
    return heights;
  }
  rows.forEach((row) => {
    heights.push(row.clientHeight);
  });
  return heights;
};
var DataTableInner = class extends import_react100.PureComponent {
  constructor(...args) {
    super(...args);
    this.state = {
      condensed: false,
      columnVisibilityData: [],
      isScrolledFarthestLeft: true,
      isScrolledFarthestRight: false,
      rowHovered: void 0
    };
    this.dataTable = /* @__PURE__ */ (0, import_react100.createRef)();
    this.scrollContainer = /* @__PURE__ */ (0, import_react100.createRef)();
    this.table = /* @__PURE__ */ (0, import_react100.createRef)();
    this.stickyTable = /* @__PURE__ */ (0, import_react100.createRef)();
    this.stickyNav = null;
    this.headerNav = null;
    this.tableHeadings = [];
    this.stickyHeadings = [];
    this.tableHeadingWidths = [];
    this.stickyHeaderActive = false;
    this.scrollStopTimer = null;
    this.handleResize = debounce(() => {
      const {
        table: {
          current: table
        },
        scrollContainer: {
          current: scrollContainer
        }
      } = this;
      let condensed = false;
      if (table && scrollContainer) {
        condensed = table.scrollWidth > scrollContainer.clientWidth + 1;
      }
      this.setState({
        condensed,
        ...this.calculateColumnVisibilityData(condensed)
      });
    });
    this.setCellRef = ({
      ref,
      index,
      inStickyHeader
    }) => {
      if (ref == null) {
        return;
      }
      if (inStickyHeader) {
        this.stickyHeadings[index] = ref;
        const button = ref.querySelector("button");
        if (button == null) {
          return;
        }
        button.addEventListener("focus", this.handleHeaderButtonFocus);
      } else {
        this.tableHeadings[index] = ref;
        this.tableHeadingWidths[index] = ref.clientWidth;
      }
    };
    this.changeHeadingFocus = () => {
      const {
        tableHeadings,
        stickyHeadings,
        stickyNav,
        headerNav
      } = this;
      const stickyFocusedItemIndex = stickyHeadings.findIndex((item) => {
        var _document$activeEleme;
        return item === ((_document$activeEleme = document.activeElement) === null || _document$activeEleme === void 0 ? void 0 : _document$activeEleme.parentElement);
      });
      const tableFocusedItemIndex = tableHeadings.findIndex((item) => {
        var _document$activeEleme2;
        return item === ((_document$activeEleme2 = document.activeElement) === null || _document$activeEleme2 === void 0 ? void 0 : _document$activeEleme2.parentElement);
      });
      const arrowsInStickyNav = stickyNav === null || stickyNav === void 0 ? void 0 : stickyNav.querySelectorAll("button");
      const arrowsInHeaderNav = headerNav === null || headerNav === void 0 ? void 0 : headerNav.querySelectorAll("button");
      let stickyFocusedNavIndex = -1;
      arrowsInStickyNav === null || arrowsInStickyNav === void 0 ? void 0 : arrowsInStickyNav.forEach((item, index) => {
        if (item === document.activeElement) {
          stickyFocusedNavIndex = index;
        }
      });
      let headerFocusedNavIndex = -1;
      arrowsInHeaderNav === null || arrowsInHeaderNav === void 0 ? void 0 : arrowsInHeaderNav.forEach((item, index) => {
        if (item === document.activeElement) {
          headerFocusedNavIndex = index;
        }
      });
      if (stickyFocusedItemIndex < 0 && tableFocusedItemIndex < 0 && stickyFocusedNavIndex < 0 && headerFocusedNavIndex < 0) {
        return null;
      }
      let button;
      if (stickyFocusedItemIndex >= 0) {
        button = tableHeadings[stickyFocusedItemIndex].querySelector("button");
      } else if (tableFocusedItemIndex >= 0) {
        button = stickyHeadings[tableFocusedItemIndex].querySelector("button");
      }
      if (stickyFocusedNavIndex >= 0) {
        button = arrowsInHeaderNav === null || arrowsInHeaderNav === void 0 ? void 0 : arrowsInHeaderNav[stickyFocusedNavIndex];
      } else if (headerFocusedNavIndex >= 0) {
        button = arrowsInStickyNav === null || arrowsInStickyNav === void 0 ? void 0 : arrowsInStickyNav[headerFocusedNavIndex];
      }
      if (button == null) {
        return null;
      }
      button.style.visibility = "visible";
      button.focus();
      button.style.removeProperty("visibility");
    };
    this.calculateColumnVisibilityData = (condensed) => {
      const fixedFirstColumns = this.fixedFirstColumns();
      const {
        table: {
          current: table
        },
        scrollContainer: {
          current: scrollContainer
        },
        dataTable: {
          current: dataTable
        }
      } = this;
      const {
        stickyHeader
      } = this.props;
      if ((stickyHeader || condensed) && table && scrollContainer && dataTable) {
        const headerCells = table.querySelectorAll(headerCell.selector);
        const rightMostHeader = headerCells[fixedFirstColumns - 1];
        const nthColumnWidth = fixedFirstColumns ? rightMostHeader.offsetLeft + rightMostHeader.offsetWidth : 0;
        if (headerCells.length > 0) {
          const firstVisibleColumnIndex = headerCells.length - 1;
          const tableLeftVisibleEdge = scrollContainer.scrollLeft + nthColumnWidth;
          const tableRightVisibleEdge = scrollContainer.scrollLeft + dataTable.offsetWidth;
          const tableData = {
            firstVisibleColumnIndex,
            tableLeftVisibleEdge,
            tableRightVisibleEdge
          };
          const columnVisibilityData = [...headerCells].map(measureColumn(tableData));
          const lastColumn = columnVisibilityData[columnVisibilityData.length - 1];
          const isScrolledFarthestLeft = fixedFirstColumns ? tableLeftVisibleEdge === nthColumnWidth : tableLeftVisibleEdge === 0;
          return {
            columnVisibilityData,
            ...getPrevAndCurrentColumns(tableData, columnVisibilityData),
            isScrolledFarthestLeft,
            isScrolledFarthestRight: lastColumn.rightEdge <= tableRightVisibleEdge
          };
        }
      }
      return {
        columnVisibilityData: [],
        previousColumn: void 0,
        currentColumn: void 0
      };
    };
    this.handleHeaderButtonFocus = (event) => {
      var _this$state$columnVis;
      const fixedFirstColumns = this.fixedFirstColumns();
      if (this.scrollContainer.current == null || event.target == null || this.state.columnVisibilityData.length === 0) {
        return;
      }
      const target = event.target;
      const currentCell = target.parentNode;
      const tableScrollLeft = this.scrollContainer.current.scrollLeft;
      const tableViewableWidth = this.scrollContainer.current.offsetWidth;
      const tableRightEdge = tableScrollLeft + tableViewableWidth;
      const nthColumnWidth = this.state.columnVisibilityData.length > 0 ? (_this$state$columnVis = this.state.columnVisibilityData[fixedFirstColumns]) === null || _this$state$columnVis === void 0 ? void 0 : _this$state$columnVis.rightEdge : 0;
      const currentColumnLeftEdge = currentCell.offsetLeft;
      const currentColumnRightEdge = currentCell.offsetLeft + currentCell.offsetWidth;
      if (tableScrollLeft > currentColumnLeftEdge - nthColumnWidth) {
        this.scrollContainer.current.scrollLeft = currentColumnLeftEdge - nthColumnWidth;
      }
      if (currentColumnRightEdge > tableRightEdge) {
        this.scrollContainer.current.scrollLeft = currentColumnRightEdge - tableViewableWidth;
      }
    };
    this.stickyHeaderScrolling = () => {
      const {
        current: stickyTable
      } = this.stickyTable;
      const {
        current: scrollContainer
      } = this.scrollContainer;
      if (stickyTable == null || scrollContainer == null) {
        return;
      }
      stickyTable.scrollLeft = scrollContainer.scrollLeft;
    };
    this.scrollListener = () => {
      var _this$scrollContainer;
      if (this.scrollStopTimer) {
        clearTimeout(this.scrollStopTimer);
      }
      this.scrollStopTimer = setTimeout(() => {
        this.setState((prevState) => ({
          ...this.calculateColumnVisibilityData(prevState.condensed)
        }));
      }, 100);
      this.setState({
        isScrolledFarthestLeft: ((_this$scrollContainer = this.scrollContainer.current) === null || _this$scrollContainer === void 0 ? void 0 : _this$scrollContainer.scrollLeft) === 0
      });
      if (this.props.stickyHeader && this.stickyHeaderActive) {
        this.stickyHeaderScrolling();
      }
    };
    this.handleHover = (row) => () => {
      this.setState({
        rowHovered: row
      });
    };
    this.handleFocus = (event) => {
      var _this$state$columnVis2;
      const fixedFirstColumns = this.fixedFirstColumns();
      if (this.scrollContainer.current == null || event.target == null) {
        return;
      }
      const currentCell = event.target.parentNode;
      const fixedNthColumn = this.props;
      const nthColumnWidth = fixedNthColumn ? (_this$state$columnVis2 = this.state.columnVisibilityData[fixedFirstColumns]) === null || _this$state$columnVis2 === void 0 ? void 0 : _this$state$columnVis2.rightEdge : 0;
      const currentColumnLeftEdge = currentCell.offsetLeft;
      const desiredScrollLeft = currentColumnLeftEdge - nthColumnWidth;
      if (this.scrollContainer.current.scrollLeft > desiredScrollLeft) {
        this.scrollContainer.current.scrollLeft = desiredScrollLeft;
      }
    };
    this.navigateTable = (direction) => {
      var _this$state$columnVis3;
      const fixedFirstColumns = this.fixedFirstColumns();
      const {
        currentColumn,
        previousColumn
      } = this.state;
      const nthColumnWidth = (_this$state$columnVis3 = this.state.columnVisibilityData[fixedFirstColumns - 1]) === null || _this$state$columnVis3 === void 0 ? void 0 : _this$state$columnVis3.rightEdge;
      if (!currentColumn || !previousColumn) {
        return;
      }
      let prevWidths = 0;
      for (let index = 0; index < currentColumn.index; index++) {
        prevWidths += this.state.columnVisibilityData[index].width;
      }
      const {
        current: scrollContainer
      } = this.scrollContainer;
      const handleScroll = () => {
        let newScrollLeft = 0;
        if (fixedFirstColumns) {
          newScrollLeft = direction === "right" ? prevWidths - nthColumnWidth + currentColumn.width : prevWidths - previousColumn.width - nthColumnWidth;
        } else {
          newScrollLeft = direction === "right" ? currentColumn.rightEdge : previousColumn.leftEdge;
        }
        if (scrollContainer) {
          scrollContainer.scrollLeft = newScrollLeft;
          requestAnimationFrame(() => {
            this.setState((prevState) => ({
              ...this.calculateColumnVisibilityData(prevState.condensed)
            }));
          });
        }
      };
      return handleScroll;
    };
    this.renderHeading = ({
      heading,
      headingIndex,
      inFixedNthColumn,
      inStickyHeader
    }) => {
      const {
        sortable,
        truncate = false,
        columnContentTypes,
        defaultSortDirection,
        initialSortColumnIndex = 0,
        verticalAlign,
        firstColumnMinWidth
      } = this.props;
      const fixedFirstColumns = this.fixedFirstColumns();
      const {
        sortDirection = defaultSortDirection,
        sortedColumnIndex = initialSortColumnIndex,
        isScrolledFarthestLeft
      } = this.state;
      let sortableHeadingProps;
      const headingCellId = `heading-cell-${headingIndex}`;
      const stickyHeaderId = `stickyheader-${headingIndex}`;
      const id = inStickyHeader ? stickyHeaderId : headingCellId;
      if (sortable) {
        const isSortable = sortable[headingIndex];
        const isSorted = isSortable && sortedColumnIndex === headingIndex;
        const direction = isSorted ? sortDirection : "none";
        sortableHeadingProps = {
          defaultSortDirection,
          sorted: isSorted,
          sortable: isSortable,
          sortDirection: direction,
          onSort: this.defaultOnSort(headingIndex),
          fixedNthColumn: fixedFirstColumns,
          inFixedNthColumn: fixedFirstColumns
        };
      }
      const stickyCellWidth = inStickyHeader ? this.tableHeadingWidths[headingIndex] : void 0;
      const fixedCellVisible = !isScrolledFarthestLeft;
      const cellProps = {
        header: true,
        stickyHeadingCell: inStickyHeader,
        content: heading,
        contentType: columnContentTypes[headingIndex],
        nthColumn: headingIndex < fixedFirstColumns,
        fixedFirstColumns,
        truncate,
        headingIndex,
        ...sortableHeadingProps,
        verticalAlign,
        handleFocus: this.handleFocus,
        stickyCellWidth,
        fixedCellVisible,
        firstColumnMinWidth
      };
      if (inFixedNthColumn && inStickyHeader) {
        var _this$state$columnVis4;
        return [/* @__PURE__ */ import_react100.default.createElement(Cell, Object.assign({
          key: id
        }, cellProps, {
          setRef: (ref) => {
            this.setCellRef({
              ref,
              index: headingIndex,
              inStickyHeader
            });
          },
          inFixedNthColumn: false
        })), /* @__PURE__ */ import_react100.default.createElement(Cell, Object.assign({
          key: `${id}-sticky`
        }, cellProps, {
          setRef: (ref) => {
            this.setCellRef({
              ref,
              index: headingIndex,
              inStickyHeader
            });
          },
          inFixedNthColumn: Boolean(fixedFirstColumns),
          lastFixedFirstColumn: headingIndex === fixedFirstColumns - 1,
          style: {
            left: (_this$state$columnVis4 = this.state.columnVisibilityData[headingIndex]) === null || _this$state$columnVis4 === void 0 ? void 0 : _this$state$columnVis4.leftEdge
          }
        }))];
      }
      return /* @__PURE__ */ import_react100.default.createElement(Cell, Object.assign({
        key: id
      }, cellProps, {
        setRef: (ref) => {
          this.setCellRef({
            ref,
            index: headingIndex,
            inStickyHeader
          });
        },
        lastFixedFirstColumn: headingIndex === fixedFirstColumns - 1,
        inFixedNthColumn
      }));
    };
    this.totalsRowHeading = () => {
      const {
        i18n,
        totals,
        totalsName
      } = this.props;
      const totalsLabel = totalsName ? totalsName : {
        singular: i18n.translate("Polaris.DataTable.totalRowHeading"),
        plural: i18n.translate("Polaris.DataTable.totalsRowHeading")
      };
      return totals && totals.filter((total) => total !== "").length > 1 ? totalsLabel.plural : totalsLabel.singular;
    };
    this.renderTotals = ({
      total,
      index
    }) => {
      const fixedFirstColumns = this.fixedFirstColumns();
      const id = `totals-cell-${index}`;
      const {
        truncate = false,
        verticalAlign,
        columnContentTypes
      } = this.props;
      let content;
      let contentType;
      if (index === 0) {
        content = this.totalsRowHeading();
      }
      if (total !== "" && index > 0) {
        contentType = columnContentTypes[index];
        content = total;
      }
      const totalInFooter = this.props.showTotalsInFooter;
      return /* @__PURE__ */ import_react100.default.createElement(Cell, {
        total: true,
        totalInFooter,
        nthColumn: index <= fixedFirstColumns - 1,
        firstColumn: index === 0,
        key: id,
        content,
        contentType,
        truncate,
        verticalAlign
      });
    };
    this.getColSpan = (rowLength, headingsLength, contentTypesLength, cellIndex) => {
      const fixedFirstColumns = this.fixedFirstColumns();
      if (fixedFirstColumns) {
        return 1;
      }
      const rowLen = rowLength ? rowLength : 1;
      const colLen = headingsLength ? headingsLength : contentTypesLength;
      const colSpan = Math.floor(colLen / rowLen);
      const remainder = colLen % rowLen;
      return cellIndex === 0 ? colSpan + remainder : colSpan;
    };
    this.defaultRenderRow = ({
      row,
      index,
      inFixedNthColumn,
      rowHeights
    }) => {
      const {
        columnContentTypes,
        truncate = false,
        verticalAlign,
        hoverable = true,
        headings
      } = this.props;
      const {
        condensed
      } = this.state;
      const fixedFirstColumns = this.fixedFirstColumns();
      const className = classNames(styles22.TableRow, hoverable && styles22.hoverable);
      return /* @__PURE__ */ import_react100.default.createElement("tr", {
        key: `row-${index}`,
        className,
        onMouseEnter: this.handleHover(index),
        onMouseLeave: this.handleHover()
      }, row.map((content, cellIndex) => {
        const hovered = index === this.state.rowHovered;
        const id = `cell-${cellIndex}-row-${index}`;
        const colSpan = this.getColSpan(row.length, headings.length, columnContentTypes.length, cellIndex);
        return /* @__PURE__ */ import_react100.default.createElement(Cell, {
          key: id,
          content,
          contentType: columnContentTypes[cellIndex],
          nthColumn: cellIndex <= fixedFirstColumns - 1,
          firstColumn: cellIndex === 0,
          truncate,
          verticalAlign,
          colSpan,
          hovered,
          style: rowHeights ? {
            height: `${rowHeights[index]}px`
          } : {},
          inFixedNthColumn: condensed && inFixedNthColumn
        });
      }));
    };
    this.defaultOnSort = (headingIndex) => {
      const {
        onSort,
        defaultSortDirection = "ascending",
        initialSortColumnIndex
      } = this.props;
      const {
        sortDirection = defaultSortDirection,
        sortedColumnIndex = initialSortColumnIndex
      } = this.state;
      let newSortDirection = defaultSortDirection;
      if (sortedColumnIndex === headingIndex) {
        newSortDirection = sortDirection === "ascending" ? "descending" : "ascending";
      }
      const handleSort = () => {
        this.setState({
          sortDirection: newSortDirection,
          sortedColumnIndex: headingIndex
        }, () => {
          if (onSort) {
            onSort(headingIndex, newSortDirection);
          }
        });
      };
      return handleSort;
    };
  }
  componentDidMount() {
    if (true) {
      setTimeout(() => {
        this.handleResize();
      }, 10);
    } else {
      this.handleResize();
    }
  }
  componentDidUpdate(prevProps) {
    if ((0, import_react_fast_compare.default)(prevProps, this.props)) {
      return;
    }
    this.handleResize();
  }
  componentWillUnmount() {
    this.handleResize.cancel();
  }
  render() {
    var _this$table$current, _this$table$current2, _columnVisibilityData;
    const {
      headings,
      totals,
      showTotalsInFooter,
      rows,
      footerContent,
      hideScrollIndicator = false,
      increasedTableDensity = false,
      hasZebraStripingOnData = false,
      stickyHeader = false,
      hasFixedFirstColumn: fixedFirstColumn = false
    } = this.props;
    const {
      condensed,
      columnVisibilityData,
      isScrolledFarthestLeft,
      isScrolledFarthestRight
    } = this.state;
    if (fixedFirstColumn && true) {
      console.warn("Deprecation: The `hasFixedFirstColumn` prop on the `DataTable` has been deprecated. Use fixedFirstColumns={n} instead.");
    }
    const fixedFirstColumns = this.fixedFirstColumns();
    const rowCountIsEven = rows.length % 2 === 0;
    const className = classNames(styles22.DataTable, condensed && styles22.condensed, totals && styles22.ShowTotals, showTotalsInFooter && styles22.ShowTotalsInFooter, hasZebraStripingOnData && styles22.ZebraStripingOnData, hasZebraStripingOnData && rowCountIsEven && styles22.RowCountIsEven);
    const wrapperClassName = classNames(styles22.TableWrapper, condensed && styles22.condensed, increasedTableDensity && styles22.IncreasedTableDensity, stickyHeader && styles22.StickyHeaderEnabled);
    const headingMarkup = /* @__PURE__ */ import_react100.default.createElement("tr", null, headings.map((heading, index) => this.renderHeading({
      heading,
      headingIndex: index,
      inFixedNthColumn: false,
      inStickyHeader: false
    })));
    const totalsMarkup = totals ? /* @__PURE__ */ import_react100.default.createElement("tr", null, totals.map((total, index) => this.renderTotals({
      total,
      index
    }))) : null;
    const nthColumns = rows.map((row) => row.slice(0, fixedFirstColumns));
    const nthHeadings = headings.slice(0, fixedFirstColumns);
    const nthTotals = totals === null || totals === void 0 ? void 0 : totals.slice(0, fixedFirstColumns);
    const tableHeaderRows = (_this$table$current = this.table.current) === null || _this$table$current === void 0 ? void 0 : _this$table$current.children[0].childNodes;
    const tableBodyRows = (_this$table$current2 = this.table.current) === null || _this$table$current2 === void 0 ? void 0 : _this$table$current2.children[1].childNodes;
    const headerRowHeights = getRowClientHeights(tableHeaderRows);
    const bodyRowHeights = getRowClientHeights(tableBodyRows);
    const fixedNthColumnMarkup = condensed && fixedFirstColumns !== 0 && /* @__PURE__ */ import_react100.default.createElement("table", {
      className: classNames(styles22.FixedFirstColumn, !isScrolledFarthestLeft && styles22.separate),
      style: {
        width: `${(_columnVisibilityData = columnVisibilityData[fixedFirstColumns - 1]) === null || _columnVisibilityData === void 0 ? void 0 : _columnVisibilityData.rightEdge}px`
      }
    }, /* @__PURE__ */ import_react100.default.createElement("thead", null, /* @__PURE__ */ import_react100.default.createElement("tr", {
      style: {
        height: `${headerRowHeights[0]}px`
      }
    }, nthHeadings.map((heading, index) => this.renderHeading({
      heading,
      headingIndex: index,
      inFixedNthColumn: true,
      inStickyHeader: false
    }))), totals && !showTotalsInFooter && /* @__PURE__ */ import_react100.default.createElement("tr", {
      style: {
        height: `${headerRowHeights[1]}px`
      }
    }, nthTotals === null || nthTotals === void 0 ? void 0 : nthTotals.map((total, index) => this.renderTotals({
      total,
      index
    })))), /* @__PURE__ */ import_react100.default.createElement("tbody", null, nthColumns.map((row, index) => this.defaultRenderRow({
      row,
      index,
      inFixedNthColumn: true,
      rowHeights: bodyRowHeights
    }))), totals && showTotalsInFooter && /* @__PURE__ */ import_react100.default.createElement("tfoot", null, /* @__PURE__ */ import_react100.default.createElement("tr", null, nthTotals === null || nthTotals === void 0 ? void 0 : nthTotals.map((total, index) => this.renderTotals({
      total,
      index
    })))));
    const bodyMarkup = rows.map((row, index) => this.defaultRenderRow({
      row,
      index,
      inFixedNthColumn: false
    }));
    const footerMarkup = footerContent ? /* @__PURE__ */ import_react100.default.createElement("div", {
      className: styles22.Footer
    }, footerContent) : null;
    const headerTotalsMarkup = !showTotalsInFooter ? totalsMarkup : null;
    const footerTotalsMarkup = showTotalsInFooter ? /* @__PURE__ */ import_react100.default.createElement("tfoot", null, totalsMarkup) : null;
    const navigationMarkup = (location) => hideScrollIndicator ? null : /* @__PURE__ */ import_react100.default.createElement(Navigation, {
      columnVisibilityData,
      isScrolledFarthestLeft,
      isScrolledFarthestRight,
      navigateTableLeft: this.navigateTable("left"),
      navigateTableRight: this.navigateTable("right"),
      fixedFirstColumns,
      setRef: (ref) => {
        if (location === "header") {
          this.headerNav = ref;
        } else if (location === "sticky") {
          this.stickyNav = ref;
        }
      }
    });
    const stickyHeaderMarkup = stickyHeader ? /* @__PURE__ */ import_react100.default.createElement(AfterInitialMount, null, /* @__PURE__ */ import_react100.default.createElement("div", {
      className: styles22.StickyHeaderWrapper,
      role: "presentation"
    }, /* @__PURE__ */ import_react100.default.createElement(Sticky, {
      boundingElement: this.dataTable.current,
      onStickyChange: (isSticky) => {
        this.changeHeadingFocus();
        this.stickyHeaderActive = isSticky;
      }
    }, (isSticky) => {
      const stickyHeaderInnerClassNames = classNames(styles22.StickyHeaderInner, isSticky && styles22["StickyHeaderInner-isSticky"]);
      const stickyHeaderTableClassNames = classNames(styles22.StickyHeaderTable, !isScrolledFarthestLeft && styles22.separate);
      return /* @__PURE__ */ import_react100.default.createElement("div", {
        className: stickyHeaderInnerClassNames
      }, /* @__PURE__ */ import_react100.default.createElement("div", null, navigationMarkup("sticky")), /* @__PURE__ */ import_react100.default.createElement("table", {
        className: stickyHeaderTableClassNames,
        ref: this.stickyTable
      }, /* @__PURE__ */ import_react100.default.createElement("thead", null, /* @__PURE__ */ import_react100.default.createElement("tr", {
        className: styles22.StickyTableHeadingsRow
      }, headings.map((heading, index) => {
        return this.renderHeading({
          heading,
          headingIndex: index,
          inFixedNthColumn: Boolean(index <= fixedFirstColumns - 1 && fixedFirstColumns),
          inStickyHeader: true
        });
      })))));
    }))) : null;
    return /* @__PURE__ */ import_react100.default.createElement("div", {
      className: wrapperClassName,
      ref: this.dataTable
    }, stickyHeaderMarkup, navigationMarkup("header"), /* @__PURE__ */ import_react100.default.createElement("div", {
      className
    }, /* @__PURE__ */ import_react100.default.createElement("div", {
      className: styles22.ScrollContainer,
      ref: this.scrollContainer
    }, /* @__PURE__ */ import_react100.default.createElement(EventListener, {
      event: "resize",
      handler: this.handleResize
    }), /* @__PURE__ */ import_react100.default.createElement(EventListener, {
      capture: true,
      passive: true,
      event: "scroll",
      handler: this.scrollListener
    }), fixedNthColumnMarkup, /* @__PURE__ */ import_react100.default.createElement("table", {
      className: styles22.Table,
      ref: this.table
    }, /* @__PURE__ */ import_react100.default.createElement("thead", null, headingMarkup, headerTotalsMarkup), /* @__PURE__ */ import_react100.default.createElement("tbody", null, bodyMarkup), footerTotalsMarkup)), footerMarkup));
  }
  fixedFirstColumns() {
    const {
      hasFixedFirstColumn,
      fixedFirstColumns = 0,
      headings
    } = this.props;
    const numberOfFixedFirstColumns = hasFixedFirstColumn && !fixedFirstColumns ? 1 : fixedFirstColumns;
    if (numberOfFixedFirstColumns >= headings.length) {
      return 0;
    }
    return numberOfFixedFirstColumns;
  }
};
function DataTable(props) {
  const i18n = useI18n();
  return /* @__PURE__ */ import_react100.default.createElement(DataTableInner, Object.assign({}, props, {
    i18n
  }));
}

// node_modules/@shopify/polaris/build/esm/components/DropZone/DropZone.js
var import_react104 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/capitalize.js
function capitalize2(word = "") {
  const wordLower = word.toLowerCase();
  return wordLower.charAt(0).toUpperCase() + wordLower.slice(1);
}

// node_modules/@shopify/polaris/build/esm/components/DropZone/context.js
var import_react101 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/DropZone/utils/index.js
var dragEvents = ["dragover", "dragenter", "drop"];
function fileAccepted(file, accept) {
  return file.type === "application/x-moz-file" || accepts(file, accept);
}
function getDataTransferFiles(event) {
  if (isDragEvent(event) && event.dataTransfer) {
    const dt = event.dataTransfer;
    if (dt.files && dt.files.length) {
      return Array.from(dt.files);
    } else if (dt.items && dt.items.length) {
      return Array.from(dt.items);
    }
  } else if (isChangeEvent(event) && event.target.files) {
    return Array.from(event.target.files);
  }
  return [];
}
function accepts(file, acceptedFiles) {
  if (file && acceptedFiles) {
    const fileName = file.name || "";
    const mimeType = file.type || "";
    const baseMimeType = mimeType.replace(/\/.*$/, "");
    const acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(",");
    return acceptedFilesArray.some((type) => {
      const validType = type.trim();
      if (validType.startsWith(".")) {
        return fileName.toLowerCase().endsWith(validType.toLowerCase());
      } else if (validType.endsWith("/*")) {
        return baseMimeType === validType.replace(/\/.*$/, "");
      }
      return mimeType === validType;
    });
  }
  return true;
}
function isDragEvent(event) {
  return dragEvents.indexOf(event.type) > 0;
}
function isChangeEvent(event) {
  return Object.prototype.hasOwnProperty.call(event, "target");
}
var defaultAllowMultiple = true;
function createAllowMultipleKey(allowMultiple) {
  return allowMultiple ? "allowMultiple" : "single";
}

// node_modules/@shopify/polaris/build/esm/components/DropZone/context.js
var DropZoneContext = /* @__PURE__ */ (0, import_react101.createContext)({
  disabled: false,
  focused: false,
  size: "extraLarge",
  type: "file",
  measuring: false,
  allowMultiple: defaultAllowMultiple
});

// node_modules/@shopify/polaris/build/esm/components/DropZone/DropZone.scss.js
var styles25 = {
  "DropZone": "Polaris-DropZone",
  "focused": "Polaris-DropZone--focused",
  "hasOutline": "Polaris-DropZone--hasOutline",
  "isDisabled": "Polaris-DropZone--isDisabled",
  "isDragging": "Polaris-DropZone--isDragging",
  "sizeLarge": "Polaris-DropZone--sizeLarge",
  "sizeMedium": "Polaris-DropZone--sizeMedium",
  "sizeSmall": "Polaris-DropZone--sizeSmall",
  "measuring": "Polaris-DropZone--measuring",
  "Container": "Polaris-DropZone__Container",
  "Overlay": "Polaris-DropZone__Overlay",
  "hasError": "Polaris-DropZone--hasError"
};

// node_modules/@shopify/polaris/build/esm/components/DropZone/components/FileUpload/FileUpload.js
var import_react103 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/DropZone/components/FileUpload/FileUpload.scss.js
var styles26 = {
  "FileUpload": "Polaris-DropZone-FileUpload",
  "large": "Polaris-DropZone-FileUpload--large",
  "small": "Polaris-DropZone-FileUpload--small",
  "Action": "Polaris-DropZone-FileUpload__Action",
  "disabled": "Polaris-DropZone-FileUpload--disabled",
  "ActionTitle": "Polaris-DropZone-FileUpload__ActionTitle",
  "ActionTitle-disabled": "Polaris-DropZone-FileUpload__ActionTitle--disabled",
  "ActionTitle-focused": "Polaris-DropZone-FileUpload__ActionTitle--focused"
};

// node_modules/@shopify/polaris/build/esm/components/DropZone/images/upload-arrow.svg.js
var img = "data:image/svg+xml,%3csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M20 10a10 10 0 11-20 0 10 10 0 0120 0zM5.3 8.3l4-4a1 1 0 011.4 0l4 4a1 1 0 01-1.4 1.4L11 7.4V15a1 1 0 11-2 0V7.4L6.7 9.7a1 1 0 01-1.4-1.4z' fill='%235C5F62'/%3e%3c/svg%3e";
var uploadArrow = img;

// node_modules/@shopify/polaris/build/esm/components/VerticalStack/VerticalStack.js
var import_react102 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/VerticalStack/VerticalStack.scss.js
var styles27 = {
  "VerticalStack": "Polaris-VerticalStack",
  "listReset": "Polaris-VerticalStack--listReset",
  "fieldsetReset": "Polaris-VerticalStack--fieldsetReset"
};

// node_modules/@shopify/polaris/build/esm/components/VerticalStack/VerticalStack.js
var VerticalStack = ({
  as = "div",
  children,
  align,
  inlineAlign,
  gap,
  id,
  reverseOrder = false,
  ...restProps
}) => {
  const className = classNames(styles27.VerticalStack, (as === "ul" || as === "ol") && styles27.listReset, as === "fieldset" && styles27.fieldsetReset);
  const style = {
    "--pc-vertical-stack-align": align ? `${align}` : "",
    "--pc-vertical-stack-inline-align": inlineAlign ? `${inlineAlign}` : "",
    "--pc-vertical-stack-order": reverseOrder ? "column-reverse" : "column",
    ...getResponsiveProps("vertical-stack", "gap", "space", gap)
  };
  return /* @__PURE__ */ import_react102.default.createElement(as, {
    className,
    style: sanitizeCustomProperties(style),
    ...restProps
  }, children);
};

// node_modules/@shopify/polaris/build/esm/components/DropZone/components/FileUpload/FileUpload.js
function FileUpload(props) {
  const i18n = useI18n();
  const {
    size,
    measuring,
    type,
    disabled,
    allowMultiple
  } = (0, import_react103.useContext)(DropZoneContext);
  const typeSuffix = capitalize2(type);
  const allowMultipleKey = createAllowMultipleKey(allowMultiple);
  const {
    actionTitle = i18n.translate(`Polaris.DropZone.${allowMultipleKey}.actionTitle${typeSuffix}`),
    actionHint
  } = props;
  const actionClassNames = classNames(styles26.Action, disabled && styles26.disabled);
  const actionMarkup = /* @__PURE__ */ import_react103.default.createElement("div", {
    className: actionClassNames
  }, actionTitle);
  const fileUploadClassName = classNames(styles26.FileUpload, measuring && styles26.measuring, size === "large" && styles26.large, size === "small" && styles26.small);
  const actionHintMarkup = actionHint && /* @__PURE__ */ import_react103.default.createElement(Text, {
    variant: "bodySm",
    as: "p",
    color: "subdued"
  }, actionHint);
  let viewMarkup;
  switch (size) {
    case "large":
      viewMarkup = /* @__PURE__ */ import_react103.default.createElement(VerticalStack, {
        inlineAlign: "center",
        gap: "2"
      }, actionMarkup, actionHintMarkup);
      break;
    case "medium":
      viewMarkup = /* @__PURE__ */ import_react103.default.createElement(VerticalStack, {
        inlineAlign: "center",
        gap: "2"
      }, actionMarkup, actionHintMarkup);
      break;
    case "small":
      viewMarkup = /* @__PURE__ */ import_react103.default.createElement("img", {
        width: "20",
        src: uploadArrow,
        alt: ""
      });
      break;
  }
  return /* @__PURE__ */ import_react103.default.createElement("div", {
    className: fileUploadClassName
  }, viewMarkup);
}

// node_modules/@shopify/polaris/build/esm/components/DropZone/DropZone.js
var DropZone = function DropZone2({
  dropOnPage,
  label,
  labelAction,
  labelHidden,
  children,
  disabled = false,
  outline = true,
  accept,
  active,
  overlay: overlay2 = true,
  allowMultiple = defaultAllowMultiple,
  overlayText,
  errorOverlayText,
  id: idProp,
  type = "file",
  onClick,
  error,
  openFileDialog,
  variableHeight,
  onFileDialogClose,
  customValidator,
  onDrop,
  onDropAccepted,
  onDropRejected,
  onDragEnter,
  onDragOver,
  onDragLeave
}) {
  const node = (0, import_react104.useRef)(null);
  const inputRef = (0, import_react104.useRef)(null);
  const dragTargets = (0, import_react104.useRef)([]);
  const adjustSize = (0, import_react104.useCallback)(debounce(() => {
    if (!node.current) {
      return;
    }
    if (variableHeight) {
      setMeasuring(false);
      return;
    }
    let size2 = "large";
    const width = node.current.getBoundingClientRect().width;
    if (width < 100) {
      size2 = "small";
    } else if (width < 160) {
      size2 = "medium";
    }
    setSize(size2);
    measuring && setMeasuring(false);
  }, 50, {
    trailing: true
  }), []);
  const [dragging, setDragging] = (0, import_react104.useState)(false);
  const [internalError, setInternalError] = (0, import_react104.useState)(false);
  const {
    value: focused,
    setTrue: handleFocus,
    setFalse: handleBlur
  } = useToggle(false);
  const [size, setSize] = (0, import_react104.useState)("large");
  const [measuring, setMeasuring] = (0, import_react104.useState)(true);
  const i18n = useI18n();
  const getValidatedFiles = (0, import_react104.useCallback)((files) => {
    const acceptedFiles = [];
    const rejectedFiles = [];
    Array.from(files).forEach((file) => {
      !fileAccepted(file, accept) || customValidator && !customValidator(file) ? rejectedFiles.push(file) : acceptedFiles.push(file);
    });
    if (!allowMultiple) {
      acceptedFiles.splice(1, acceptedFiles.length);
      rejectedFiles.push(...acceptedFiles.slice(1));
    }
    return {
      files,
      acceptedFiles,
      rejectedFiles
    };
  }, [accept, allowMultiple, customValidator]);
  const handleDrop = (0, import_react104.useCallback)((event) => {
    stopEvent(event);
    if (disabled)
      return;
    const fileList = getDataTransferFiles(event);
    const {
      files,
      acceptedFiles,
      rejectedFiles
    } = getValidatedFiles(fileList);
    dragTargets.current = [];
    setDragging(false);
    setInternalError(rejectedFiles.length > 0);
    onDrop && onDrop(files, acceptedFiles, rejectedFiles);
    onDropAccepted && acceptedFiles.length && onDropAccepted(acceptedFiles);
    onDropRejected && rejectedFiles.length && onDropRejected(rejectedFiles);
    if (!(event.target && "value" in event.target))
      return;
    event.target.value = "";
  }, [disabled, getValidatedFiles, onDrop, onDropAccepted, onDropRejected]);
  const handleDragEnter = (0, import_react104.useCallback)((event) => {
    stopEvent(event);
    if (disabled)
      return;
    const fileList = getDataTransferFiles(event);
    if (event.target && !dragTargets.current.includes(event.target)) {
      dragTargets.current.push(event.target);
    }
    if (dragging)
      return;
    const {
      rejectedFiles
    } = getValidatedFiles(fileList);
    setDragging(true);
    setInternalError(rejectedFiles.length > 0);
    onDragEnter && onDragEnter();
  }, [disabled, dragging, getValidatedFiles, onDragEnter]);
  const handleDragOver = (0, import_react104.useCallback)((event) => {
    stopEvent(event);
    if (disabled)
      return;
    onDragOver && onDragOver();
  }, [disabled, onDragOver]);
  const handleDragLeave = (0, import_react104.useCallback)((event) => {
    event.preventDefault();
    if (disabled)
      return;
    dragTargets.current = dragTargets.current.filter((el) => {
      const compareNode = dropOnPage && !isServer ? document : node.current;
      return el !== event.target && compareNode && compareNode.contains(el);
    });
    if (dragTargets.current.length > 0)
      return;
    setDragging(false);
    setInternalError(false);
    onDragLeave && onDragLeave();
  }, [dropOnPage, disabled, onDragLeave]);
  const dropNode = dropOnPage && !isServer ? document : node.current;
  useEventListener("drop", handleDrop, dropNode);
  useEventListener("dragover", handleDragOver, dropNode);
  useEventListener("dragenter", handleDragEnter, dropNode);
  useEventListener("dragleave", handleDragLeave, dropNode);
  useEventListener("resize", adjustSize, isServer ? null : window);
  useComponentDidMount(() => {
    adjustSize();
  });
  const id = useUniqueId("DropZone", idProp);
  const typeSuffix = capitalize2(type);
  const allowMultipleKey = createAllowMultipleKey(allowMultiple);
  const overlayTextWithDefault = overlayText === void 0 ? i18n.translate(`Polaris.DropZone.${allowMultipleKey}.overlayText${typeSuffix}`) : overlayText;
  const errorOverlayTextWithDefault = errorOverlayText === void 0 ? i18n.translate(`Polaris.DropZone.errorOverlayText${typeSuffix}`) : errorOverlayText;
  const labelValue = label || i18n.translate(`Polaris.DropZone.${allowMultipleKey}.label${typeSuffix}`);
  const labelHiddenValue = label ? labelHidden : true;
  const classes = classNames(styles25.DropZone, outline && styles25.hasOutline, focused && styles25.focused, (active || dragging) && styles25.isDragging, disabled && styles25.isDisabled, (internalError || error) && styles25.hasError, !variableHeight && styles25[variationName("size", size)], measuring && styles25.measuring);
  const dragOverlay = (active || dragging) && !internalError && !error && overlay2 && overlayMarkup(SvgUploadMajor, "interactive", overlayTextWithDefault);
  const dragErrorOverlay = dragging && (internalError || error) && overlayMarkup(SvgCircleAlertMajor, "critical", errorOverlayTextWithDefault);
  const context = (0, import_react104.useMemo)(() => ({
    disabled,
    focused,
    size,
    type: type || "file",
    measuring,
    allowMultiple
  }), [disabled, focused, measuring, size, type, allowMultiple]);
  const open = (0, import_react104.useCallback)(() => {
    if (!inputRef.current)
      return;
    inputRef.current.click();
  }, [inputRef]);
  const triggerFileDialog = (0, import_react104.useCallback)(() => {
    open();
    onFileDialogClose === null || onFileDialogClose === void 0 ? void 0 : onFileDialogClose();
  }, [open, onFileDialogClose]);
  function overlayMarkup(icon, color2, text) {
    return /* @__PURE__ */ import_react104.default.createElement("div", {
      className: styles25.Overlay
    }, /* @__PURE__ */ import_react104.default.createElement(VerticalStack, {
      gap: "2",
      inlineAlign: "center"
    }, size === "small" && /* @__PURE__ */ import_react104.default.createElement(Icon, {
      source: icon,
      color: color2
    }), (size === "medium" || size === "large") && /* @__PURE__ */ import_react104.default.createElement(Text, {
      variant: "bodySm",
      as: "p",
      fontWeight: "bold"
    }, text)));
  }
  function handleClick(event) {
    if (disabled)
      return;
    return onClick ? onClick(event) : open();
  }
  (0, import_react104.useEffect)(() => {
    if (openFileDialog)
      triggerFileDialog();
  }, [openFileDialog, triggerFileDialog]);
  return /* @__PURE__ */ import_react104.default.createElement(DropZoneContext.Provider, {
    value: context
  }, /* @__PURE__ */ import_react104.default.createElement(Labelled, {
    id,
    label: labelValue,
    action: labelAction,
    labelHidden: labelHiddenValue
  }, /* @__PURE__ */ import_react104.default.createElement("div", {
    ref: node,
    className: classes,
    "aria-disabled": disabled,
    onClick: handleClick,
    onDragStart: stopEvent
  }, dragOverlay, dragErrorOverlay, /* @__PURE__ */ import_react104.default.createElement(Text, {
    variant: "bodySm",
    as: "span",
    visuallyHidden: true
  }, /* @__PURE__ */ import_react104.default.createElement("input", {
    id,
    accept,
    disabled,
    multiple: allowMultiple,
    onChange: handleDrop,
    onFocus: handleFocus,
    onBlur: handleBlur,
    type: "file",
    ref: inputRef,
    autoComplete: "off"
  })), /* @__PURE__ */ import_react104.default.createElement("div", {
    className: styles25.Container
  }, children))));
};
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}
DropZone.FileUpload = FileUpload;

// node_modules/@shopify/polaris/build/esm/components/Layout/Layout.js
var import_react108 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Layout/Layout.scss.js
var styles28 = {
  "Layout": "Polaris-Layout",
  "Section": "Polaris-Layout__Section",
  "Section-secondary": "Polaris-Layout__Section--secondary",
  "Section-fullWidth": "Polaris-Layout__Section--fullWidth",
  "Section-oneHalf": "Polaris-Layout__Section--oneHalf",
  "Section-oneThird": "Polaris-Layout__Section--oneThird",
  "AnnotatedSection": "Polaris-Layout__AnnotatedSection",
  "AnnotationWrapper": "Polaris-Layout__AnnotationWrapper",
  "AnnotationContent": "Polaris-Layout__AnnotationContent",
  "Annotation": "Polaris-Layout__Annotation"
};

// node_modules/@shopify/polaris/build/esm/components/Layout/components/AnnotatedSection/AnnotatedSection.js
var import_react106 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/TextContainer/TextContainer.js
var import_react105 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/TextContainer/TextContainer.scss.js
var styles29 = {
  "TextContainer": "Polaris-TextContainer",
  "spacingTight": "Polaris-TextContainer--spacingTight",
  "spacingLoose": "Polaris-TextContainer--spacingLoose"
};

// node_modules/@shopify/polaris/build/esm/components/TextContainer/TextContainer.js
function TextContainer({
  spacing: spacing2,
  children
}) {
  const className = classNames(styles29.TextContainer, spacing2 && styles29[variationName("spacing", spacing2)]);
  return /* @__PURE__ */ import_react105.default.createElement("div", {
    className
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/Layout/components/AnnotatedSection/AnnotatedSection.js
function AnnotatedSection({
  children,
  title,
  description,
  id
}) {
  const descriptionMarkup = typeof description === "string" ? /* @__PURE__ */ import_react106.default.createElement("p", null, description) : description;
  return /* @__PURE__ */ import_react106.default.createElement("div", {
    className: styles28.AnnotatedSection
  }, /* @__PURE__ */ import_react106.default.createElement("div", {
    className: styles28.AnnotationWrapper
  }, /* @__PURE__ */ import_react106.default.createElement("div", {
    className: styles28.Annotation
  }, /* @__PURE__ */ import_react106.default.createElement(TextContainer, null, /* @__PURE__ */ import_react106.default.createElement(Text, {
    id,
    variant: "headingMd",
    as: "h2"
  }, title), descriptionMarkup && /* @__PURE__ */ import_react106.default.createElement(Box, {
    color: "text-subdued"
  }, descriptionMarkup))), /* @__PURE__ */ import_react106.default.createElement("div", {
    className: styles28.AnnotationContent
  }, children)));
}

// node_modules/@shopify/polaris/build/esm/components/Layout/components/Section/Section.js
var import_react107 = __toESM(require_react());
function Section4({
  children,
  secondary,
  fullWidth,
  oneHalf,
  oneThird
}) {
  const className = classNames(styles28.Section, secondary && styles28["Section-secondary"], fullWidth && styles28["Section-fullWidth"], oneHalf && styles28["Section-oneHalf"], oneThird && styles28["Section-oneThird"]);
  return /* @__PURE__ */ import_react107.default.createElement("div", {
    className
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/Layout/Layout.js
var Layout = function Layout2({
  sectioned,
  children
}) {
  const content = sectioned ? /* @__PURE__ */ import_react108.default.createElement(Section4, null, children) : children;
  return /* @__PURE__ */ import_react108.default.createElement("div", {
    className: styles28.Layout
  }, content);
};
Layout.AnnotatedSection = AnnotatedSection;
Layout.Section = Section4;

// node_modules/@shopify/polaris/build/esm/components/Page/Page.js
var import_react121 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/is-interface.js
var import_react109 = __toESM(require_react());
function isInterface(x) {
  return !/* @__PURE__ */ (0, import_react109.isValidElement)(x) && x !== void 0;
}

// node_modules/@shopify/polaris/build/esm/utilities/is-react-element.js
var import_react110 = __toESM(require_react());
function isReactElement(x) {
  return /* @__PURE__ */ (0, import_react110.isValidElement)(x) && x !== void 0;
}

// node_modules/@shopify/polaris/build/esm/components/Page/Page.scss.js
var styles30 = {
  "Page": "Polaris-Page",
  "fullWidth": "Polaris-Page--fullWidth",
  "narrowWidth": "Polaris-Page--narrowWidth",
  "Content": "Polaris-Page__Content",
  "divider": "Polaris-Page--divider"
};

// node_modules/@shopify/polaris/build/esm/components/Page/components/Header/Header.js
var import_react120 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Page/components/Header/Header.scss.js
var styles31 = {
  "TitleWrapper": "Polaris-Page-Header__TitleWrapper",
  "BreadcrumbWrapper": "Polaris-Page-Header__BreadcrumbWrapper",
  "PaginationWrapper": "Polaris-Page-Header__PaginationWrapper",
  "PrimaryActionWrapper": "Polaris-Page-Header__PrimaryActionWrapper",
  "Row": "Polaris-Page-Header__Row",
  "mobileView": "Polaris-Page-Header--mobileView",
  "RightAlign": "Polaris-Page-Header__RightAlign",
  "noBreadcrumbs": "Polaris-Page-Header--noBreadcrumbs",
  "AdditionalMetaData": "Polaris-Page-Header__AdditionalMetaData",
  "Actions": "Polaris-Page-Header__Actions",
  "longTitle": "Polaris-Page-Header--longTitle",
  "mediumTitle": "Polaris-Page-Header--mediumTitle",
  "isSingleRow": "Polaris-Page-Header--isSingleRow"
};

// node_modules/@shopify/polaris/build/esm/components/Breadcrumbs/Breadcrumbs.js
var import_react111 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Breadcrumbs/Breadcrumbs.scss.js
var styles32 = {
  "Breadcrumb": "Polaris-Breadcrumbs__Breadcrumb",
  "Icon": "Polaris-Breadcrumbs__Icon",
  "Content": "Polaris-Breadcrumbs__Content"
};

// node_modules/@shopify/polaris/build/esm/components/Breadcrumbs/Breadcrumbs.js
function Breadcrumbs({
  breadcrumbs,
  backAction
}) {
  const breadcrumb = backAction !== null && backAction !== void 0 ? backAction : Array.isArray(breadcrumbs) ? breadcrumbs[breadcrumbs.length - 1] : breadcrumbs;
  if (breadcrumb == null) {
    if (true) {
      console.warn("Please provide a value to backAction, it will become required in the next major release.");
    }
    return null;
  }
  const {
    content
  } = breadcrumb;
  const contentMarkup = /* @__PURE__ */ import_react111.default.createElement(import_react111.default.Fragment, null, /* @__PURE__ */ import_react111.default.createElement("span", {
    className: styles32.Icon
  }, /* @__PURE__ */ import_react111.default.createElement(Icon, {
    source: SvgArrowLeftMinor
  })), /* @__PURE__ */ import_react111.default.createElement(Text, {
    as: "span",
    visuallyHidden: true
  }, content));
  const breadcrumbMarkup = "url" in breadcrumb ? /* @__PURE__ */ import_react111.default.createElement(UnstyledLink, {
    key: content,
    url: breadcrumb.url,
    className: styles32.Breadcrumb,
    onMouseUp: handleMouseUpByBlurring,
    "aria-label": breadcrumb.accessibilityLabel
  }, contentMarkup) : /* @__PURE__ */ import_react111.default.createElement("button", {
    key: content,
    className: styles32.Breadcrumb,
    onClick: breadcrumb.onAction,
    onMouseUp: handleMouseUpByBlurring,
    type: "button",
    "aria-label": breadcrumb.accessibilityLabel
  }, contentMarkup);
  return /* @__PURE__ */ import_react111.default.createElement("nav", {
    role: "navigation"
  }, breadcrumbMarkup);
}

// node_modules/@shopify/polaris/build/esm/components/Pagination/Pagination.js
var import_react112 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/is-input-focused.js
var EditableTarget;
(function(EditableTarget2) {
  EditableTarget2["Input"] = "INPUT";
  EditableTarget2["Textarea"] = "TEXTAREA";
  EditableTarget2["Select"] = "SELECT";
  EditableTarget2["ContentEditable"] = "contenteditable";
})(EditableTarget || (EditableTarget = {}));
function isInputFocused() {
  if (document == null || document.activeElement == null) {
    return false;
  }
  const {
    tagName
  } = document.activeElement;
  return tagName === EditableTarget.Input || tagName === EditableTarget.Textarea || tagName === EditableTarget.Select || document.activeElement.hasAttribute(EditableTarget.ContentEditable);
}

// node_modules/@shopify/polaris/build/esm/components/Pagination/Pagination.js
function Pagination({
  hasNext,
  hasPrevious,
  nextURL,
  previousURL,
  onNext,
  onPrevious,
  nextTooltip,
  previousTooltip,
  nextKeys,
  previousKeys,
  accessibilityLabel,
  accessibilityLabels,
  label
}) {
  const i18n = useI18n();
  const node = /* @__PURE__ */ (0, import_react112.createRef)();
  const navLabel = accessibilityLabel || i18n.translate("Polaris.Pagination.pagination");
  const previousLabel = (accessibilityLabels === null || accessibilityLabels === void 0 ? void 0 : accessibilityLabels.previous) || i18n.translate("Polaris.Pagination.previous");
  const nextLabel = (accessibilityLabels === null || accessibilityLabels === void 0 ? void 0 : accessibilityLabels.next) || i18n.translate("Polaris.Pagination.next");
  const prev = /* @__PURE__ */ import_react112.default.createElement(Button, {
    outline: true,
    icon: SvgChevronLeftMinor,
    accessibilityLabel: previousLabel,
    url: previousURL,
    onClick: onPrevious,
    disabled: !hasPrevious,
    id: "previousURL"
  });
  const constructedPrevious = previousTooltip && hasPrevious ? /* @__PURE__ */ import_react112.default.createElement(Tooltip, {
    activatorWrapper: "span",
    content: previousTooltip
  }, prev) : prev;
  const next = /* @__PURE__ */ import_react112.default.createElement(Button, {
    outline: true,
    icon: SvgChevronRightMinor,
    accessibilityLabel: nextLabel,
    url: nextURL,
    onClick: onNext,
    disabled: !hasNext,
    id: "nextURL"
  });
  const constructedNext = nextTooltip && hasNext ? /* @__PURE__ */ import_react112.default.createElement(Tooltip, {
    activatorWrapper: "span",
    content: nextTooltip
  }, next) : next;
  const previousHandler = onPrevious || noop4;
  const previousButtonEvents = previousKeys && (previousURL || onPrevious) && hasPrevious && previousKeys.map((key) => /* @__PURE__ */ import_react112.default.createElement(KeypressListener, {
    key,
    keyCode: key,
    handler: previousURL ? handleCallback(clickPaginationLink("previousURL", node)) : handleCallback(previousHandler)
  }));
  const nextHandler = onNext || noop4;
  const nextButtonEvents = nextKeys && (nextURL || onNext) && hasNext && nextKeys.map((key) => /* @__PURE__ */ import_react112.default.createElement(KeypressListener, {
    key,
    keyCode: key,
    handler: nextURL ? handleCallback(clickPaginationLink("nextURL", node)) : handleCallback(nextHandler)
  }));
  const labelTextMarkup = hasNext && hasPrevious ? /* @__PURE__ */ import_react112.default.createElement("span", null, label) : /* @__PURE__ */ import_react112.default.createElement(Text, {
    color: "subdued",
    as: "span"
  }, label);
  const labelMarkup = label ? /* @__PURE__ */ import_react112.default.createElement("div", {
    "aria-live": "polite"
  }, labelTextMarkup) : null;
  return /* @__PURE__ */ import_react112.default.createElement("nav", {
    "aria-label": navLabel,
    ref: node
  }, previousButtonEvents, nextButtonEvents, /* @__PURE__ */ import_react112.default.createElement(ButtonGroup, {
    segmented: !label
  }, constructedPrevious, labelMarkup, constructedNext));
}
function clickPaginationLink(id, node) {
  return () => {
    if (node.current == null) {
      return;
    }
    const link = node.current.querySelector(`#${id}`);
    if (link) {
      link.click();
    }
  };
}
function handleCallback(fn) {
  return () => {
    if (isInputFocused()) {
      return;
    }
    fn();
  };
}
function noop4() {
}

// node_modules/@shopify/polaris/build/esm/components/Page/components/Header/components/Title/Title.js
var import_react113 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Page/components/Header/components/Title/Title.scss.js
var styles33 = {
  "Title": "Polaris-Header-Title",
  "TitleWithSubtitle": "Polaris-Header-Title__TitleWithSubtitle",
  "SubTitle": "Polaris-Header-Title__SubTitle",
  "SubtitleCompact": "Polaris-Header-Title__SubtitleCompact",
  "TitleWithMetadataWrapper": "Polaris-Header-Title__TitleWithMetadataWrapper",
  "TitleMetadata": "Polaris-Header-Title__TitleMetadata"
};

// node_modules/@shopify/polaris/build/esm/components/Page/components/Header/components/Title/Title.js
function Title({
  title,
  subtitle,
  titleMetadata,
  compactTitle
}) {
  const className = classNames(styles33.Title, subtitle && styles33.TitleWithSubtitle);
  const titleMarkup = title ? /* @__PURE__ */ import_react113.default.createElement("h1", {
    className
  }, title) : null;
  const titleMetadataMarkup = titleMetadata ? /* @__PURE__ */ import_react113.default.createElement("div", {
    className: styles33.TitleMetadata
  }, titleMetadata) : null;
  const wrappedTitleMarkup = titleMetadata ? /* @__PURE__ */ import_react113.default.createElement("div", {
    className: styles33.TitleWithMetadataWrapper
  }, titleMarkup, titleMetadataMarkup) : titleMarkup;
  const subtitleMarkup = subtitle ? /* @__PURE__ */ import_react113.default.createElement("div", {
    className: classNames(styles33.SubTitle, compactTitle && styles33.SubtitleCompact)
  }, /* @__PURE__ */ import_react113.default.createElement("p", null, subtitle)) : null;
  return /* @__PURE__ */ import_react113.default.createElement(import_react113.default.Fragment, null, wrappedTitleMarkup, subtitleMarkup);
}

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/ActionMenu.js
var import_react118 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/ActionMenu.scss.js
var styles34 = {
  "ActionMenu": "Polaris-ActionMenu"
};

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/RollupActions/RollupActions.js
var import_react114 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/RollupActions/RollupActions.scss.js
var styles35 = {
  "RollupActivator": "Polaris-ActionMenu-RollupActions__RollupActivator"
};

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/RollupActions/RollupActions.js
function RollupActions({
  accessibilityLabel,
  items = [],
  sections = []
}) {
  const i18n = useI18n();
  const {
    value: rollupOpen,
    toggle: toggleRollupOpen
  } = useToggle(false);
  if (items.length === 0 && sections.length === 0) {
    return null;
  }
  const activatorMarkup = /* @__PURE__ */ import_react114.default.createElement("div", {
    className: styles35.RollupActivator
  }, /* @__PURE__ */ import_react114.default.createElement(Button, {
    outline: true,
    icon: SvgHorizontalDotsMinor,
    accessibilityLabel: accessibilityLabel || i18n.translate("Polaris.ActionMenu.RollupActions.rollupButton"),
    onClick: toggleRollupOpen
  }));
  return /* @__PURE__ */ import_react114.default.createElement(Popover2, {
    active: rollupOpen,
    activator: activatorMarkup,
    preferredAlignment: "right",
    onClose: toggleRollupOpen,
    hideOnPrint: true
  }, /* @__PURE__ */ import_react114.default.createElement(ActionList, {
    items,
    sections,
    onActionAnyItem: toggleRollupOpen
  }));
}

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/Actions/Actions.js
var import_react117 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/Actions/Actions.scss.js
var styles36 = {
  "ActionsLayout": "Polaris-ActionMenu-Actions__ActionsLayout"
};

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/MenuGroup/MenuGroup.js
var import_react116 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/MenuGroup/MenuGroup.scss.js
var styles37 = {
  "Details": "Polaris-ActionMenu-MenuGroup__Details"
};

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/SecondaryAction/SecondaryAction.js
var import_react115 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/SecondaryAction/SecondaryAction.scss.js
var styles38 = {
  "SecondaryAction": "Polaris-ActionMenu-SecondaryAction",
  "destructive": "Polaris-ActionMenu-SecondaryAction--destructive"
};

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/SecondaryAction/SecondaryAction.js
function SecondaryAction({
  children,
  destructive,
  helpText,
  onAction,
  getOffsetWidth,
  ...rest
}) {
  const secondaryActionsRef = (0, import_react115.useRef)(null);
  (0, import_react115.useEffect)(() => {
    var _secondaryActionsRef$;
    if (!getOffsetWidth || !secondaryActionsRef.current)
      return;
    getOffsetWidth((_secondaryActionsRef$ = secondaryActionsRef.current) === null || _secondaryActionsRef$ === void 0 ? void 0 : _secondaryActionsRef$.offsetWidth);
  }, [getOffsetWidth]);
  const buttonMarkup = /* @__PURE__ */ import_react115.default.createElement(Button, Object.assign({
    onClick: onAction
  }, rest), children);
  const actionMarkup = helpText ? /* @__PURE__ */ import_react115.default.createElement(Tooltip, {
    content: helpText
  }, buttonMarkup) : buttonMarkup;
  return /* @__PURE__ */ import_react115.default.createElement("span", {
    className: classNames(styles38.SecondaryAction, destructive && styles38.destructive),
    ref: secondaryActionsRef
  }, actionMarkup);
}

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/MenuGroup/MenuGroup.js
function MenuGroup({
  accessibilityLabel,
  active,
  actions,
  details,
  title,
  icon,
  disabled,
  onClick,
  onClose,
  onOpen,
  getOffsetWidth,
  sections
}) {
  const handleClose = (0, import_react116.useCallback)(() => {
    onClose(title);
  }, [onClose, title]);
  const handleOpen = (0, import_react116.useCallback)(() => {
    onOpen(title);
  }, [onOpen, title]);
  const handleClick = (0, import_react116.useCallback)(() => {
    if (onClick) {
      onClick(handleOpen);
    } else {
      handleOpen();
    }
  }, [onClick, handleOpen]);
  const handleOffsetWidth = (0, import_react116.useCallback)((width) => {
    if (!getOffsetWidth)
      return;
    getOffsetWidth(width);
  }, [getOffsetWidth]);
  const popoverActivator = /* @__PURE__ */ import_react116.default.createElement(SecondaryAction, {
    disclosure: true,
    disabled,
    icon,
    accessibilityLabel,
    onClick: handleClick,
    getOffsetWidth: handleOffsetWidth
  }, title);
  return /* @__PURE__ */ import_react116.default.createElement(Popover2, {
    active: Boolean(active),
    activator: popoverActivator,
    preferredAlignment: "left",
    onClose: handleClose,
    hideOnPrint: true
  }, /* @__PURE__ */ import_react116.default.createElement(ActionList, {
    items: actions,
    sections,
    onActionAnyItem: handleClose
  }), details && /* @__PURE__ */ import_react116.default.createElement("div", {
    className: styles37.Details
  }, details));
}

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/components/Actions/Actions.js
var ACTION_SPACING = 8;
function Actions({
  actions = [],
  groups = [],
  onActionRollup
}) {
  const i18n = useI18n();
  const actionsLayoutRef = (0, import_react117.useRef)(null);
  const menuGroupWidthRef = (0, import_react117.useRef)(0);
  const availableWidthRef = (0, import_react117.useRef)(0);
  const actionsAndGroupsLengthRef = (0, import_react117.useRef)(0);
  const timesMeasured = (0, import_react117.useRef)(0);
  const actionWidthsRef = (0, import_react117.useRef)([]);
  const rollupActiveRef = (0, import_react117.useRef)(null);
  const [activeMenuGroup, setActiveMenuGroup] = (0, import_react117.useState)(void 0);
  const [measuredActions, setMeasuredActions] = (0, import_react117.useState)({
    showable: [],
    rolledUp: []
  });
  const defaultRollupGroup = {
    title: i18n.translate("Polaris.ActionMenu.Actions.moreActions"),
    actions: []
  };
  const lastMenuGroup = [...groups].pop();
  const lastMenuGroupWidth = [...actionWidthsRef.current].pop() || 0;
  const handleActionsOffsetWidth = (0, import_react117.useCallback)((width) => {
    actionWidthsRef.current = [...actionWidthsRef.current, width];
  }, []);
  const handleMenuGroupToggle = (0, import_react117.useCallback)((group) => setActiveMenuGroup(activeMenuGroup ? void 0 : group), [activeMenuGroup]);
  const handleMenuGroupClose = (0, import_react117.useCallback)(() => setActiveMenuGroup(void 0), []);
  const updateActions = (0, import_react117.useCallback)(() => {
    let actionsAndGroups = [...actions, ...groups];
    if (groups.length > 0) {
      actionsAndGroups = [...actionsAndGroups].slice(0, actionsAndGroups.length - 1);
    }
    setMeasuredActions((currentMeasuredActions) => {
      const showable = actionsAndGroups.slice(0, currentMeasuredActions.showable.length);
      const rolledUp = actionsAndGroups.slice(currentMeasuredActions.showable.length, actionsAndGroups.length);
      return {
        showable,
        rolledUp
      };
    });
  }, [actions, groups]);
  const measureActions = (0, import_react117.useCallback)(() => {
    if (actionWidthsRef.current.length === 0 || availableWidthRef.current === 0) {
      return;
    }
    const actionsAndGroups = [...actions, ...groups];
    if (actionsAndGroups.length === 1) {
      setMeasuredActions({
        showable: actionsAndGroups,
        rolledUp: []
      });
      return;
    }
    let currentAvailableWidth = availableWidthRef.current;
    let newShowableActions = [];
    let newRolledUpActions = [];
    actionsAndGroups.forEach((action, index) => {
      const canFitAction = actionWidthsRef.current[index] + menuGroupWidthRef.current + ACTION_SPACING + lastMenuGroupWidth <= currentAvailableWidth;
      if (canFitAction) {
        currentAvailableWidth -= actionWidthsRef.current[index] + ACTION_SPACING * 2;
        newShowableActions = [...newShowableActions, action];
      } else {
        currentAvailableWidth = 0;
        if (action === lastMenuGroup)
          return;
        newRolledUpActions = [...newRolledUpActions, action];
      }
    });
    if (onActionRollup) {
      const isRollupActive = newShowableActions.length < actionsAndGroups.length - 1;
      if (rollupActiveRef.current !== isRollupActive) {
        onActionRollup(isRollupActive);
        rollupActiveRef.current = isRollupActive;
      }
    }
    setMeasuredActions({
      showable: newShowableActions,
      rolledUp: newRolledUpActions
    });
    timesMeasured.current += 1;
    actionsAndGroupsLengthRef.current = actionsAndGroups.length;
  }, [actions, groups, lastMenuGroup, lastMenuGroupWidth, onActionRollup]);
  const handleResize = (0, import_react117.useMemo)(() => debounce(() => {
    if (!actionsLayoutRef.current)
      return;
    availableWidthRef.current = actionsLayoutRef.current.offsetWidth;
    timesMeasured.current = 0;
    measureActions();
  }, 50, {
    leading: false,
    trailing: true
  }), [measureActions]);
  useEventListener("resize", handleResize);
  useIsomorphicLayoutEffect(() => {
    if (!actionsLayoutRef.current)
      return;
    availableWidthRef.current = actionsLayoutRef.current.offsetWidth;
    if (
      // Allow measuring twice
      // This accounts for the initial paint and re-flow
      timesMeasured.current >= 2 && [...actions, ...groups].length === actionsAndGroupsLengthRef.current
    ) {
      updateActions();
      return;
    }
    measureActions();
  }, [actions, groups, measureActions, updateActions]);
  const actionsMarkup = actions.map((action) => {
    if (measuredActions.showable.length > 0 || measuredActions.rolledUp.includes(action))
      return null;
    const {
      content,
      onAction,
      ...rest
    } = action;
    return /* @__PURE__ */ import_react117.default.createElement(SecondaryAction, Object.assign({
      key: content,
      onClick: onAction
    }, rest, {
      getOffsetWidth: handleActionsOffsetWidth
    }), content);
  });
  const rollUppableActionsMarkup = measuredActions.showable.length > 0 ? measuredActions.showable.map((action) => action.content && /* @__PURE__ */ import_react117.default.createElement(SecondaryAction, Object.assign({
    key: action.content
  }, action, {
    getOffsetWidth: handleActionsOffsetWidth
  }), action.content)) : null;
  const filteredGroups = [...groups, defaultRollupGroup].filter((group) => {
    return groups.length === 0 ? group : group === lastMenuGroup || !measuredActions.rolledUp.some((rolledUpGroup) => isMenuGroup(rolledUpGroup) && rolledUpGroup.title === group.title);
  });
  const groupsMarkup = filteredGroups.map((group) => {
    const {
      title,
      actions: groupActions,
      ...rest
    } = group;
    const isDefaultGroup = group === defaultRollupGroup;
    const isLastMenuGroup = group === lastMenuGroup;
    const [finalRolledUpActions, finalRolledUpSectionGroups] = measuredActions.rolledUp.reduce(([actions2, sections], action) => {
      if (isMenuGroup(action)) {
        sections.push({
          title: action.title,
          items: action.actions.map((sectionAction) => ({
            ...sectionAction,
            disabled: action.disabled || sectionAction.disabled
          }))
        });
      } else {
        actions2.push(action);
      }
      return [actions2, sections];
    }, [[], []]);
    if (!isDefaultGroup && !isLastMenuGroup) {
      return /* @__PURE__ */ import_react117.default.createElement(MenuGroup, Object.assign({
        key: title,
        title,
        active: title === activeMenuGroup,
        actions: groupActions
      }, rest, {
        onOpen: handleMenuGroupToggle,
        onClose: handleMenuGroupClose,
        getOffsetWidth: handleActionsOffsetWidth
      }));
    } else if (!isDefaultGroup && isLastMenuGroup) {
      return /* @__PURE__ */ import_react117.default.createElement(MenuGroup, Object.assign({
        key: title,
        title,
        active: title === activeMenuGroup,
        actions: [...finalRolledUpActions, ...groupActions],
        sections: finalRolledUpSectionGroups
      }, rest, {
        onOpen: handleMenuGroupToggle,
        onClose: handleMenuGroupClose,
        getOffsetWidth: handleActionsOffsetWidth
      }));
    } else if (isDefaultGroup && groups.length === 0 && finalRolledUpActions.length) {
      return /* @__PURE__ */ import_react117.default.createElement(MenuGroup, Object.assign({
        key: title,
        title,
        active: title === activeMenuGroup,
        actions: finalRolledUpActions,
        sections: finalRolledUpSectionGroups
      }, rest, {
        onOpen: handleMenuGroupToggle,
        onClose: handleMenuGroupClose,
        getOffsetWidth: handleActionsOffsetWidth
      }));
    }
  });
  const groupedActionsMarkup = /* @__PURE__ */ import_react117.default.createElement(ButtonGroup, {
    spacing: "extraTight"
  }, rollUppableActionsMarkup, actionsMarkup, groupsMarkup);
  return /* @__PURE__ */ import_react117.default.createElement("div", {
    className: styles36.ActionsLayout,
    ref: actionsLayoutRef
  }, groupedActionsMarkup);
}
function isMenuGroup(actionOrMenuGroup) {
  return "title" in actionOrMenuGroup;
}

// node_modules/@shopify/polaris/build/esm/components/ActionMenu/ActionMenu.js
function ActionMenu({
  actions = [],
  groups = [],
  rollup,
  rollupActionsLabel,
  onActionRollup
}) {
  if (actions.length === 0 && groups.length === 0) {
    return null;
  }
  const actionMenuClassNames = classNames(styles34.ActionMenu, rollup && styles34.rollup);
  const rollupSections = groups.map((group) => convertGroupToSection(group));
  return /* @__PURE__ */ import_react118.default.createElement("div", {
    className: actionMenuClassNames
  }, rollup ? /* @__PURE__ */ import_react118.default.createElement(RollupActions, {
    accessibilityLabel: rollupActionsLabel,
    items: actions,
    sections: rollupSections
  }) : /* @__PURE__ */ import_react118.default.createElement(Actions, {
    actions,
    groups,
    onActionRollup
  }));
}
function hasGroupsWithActions(groups = []) {
  return groups.length === 0 ? false : groups.some((group) => group.actions.length > 0);
}
function convertGroupToSection({
  title,
  actions,
  disabled
}) {
  return {
    title,
    items: actions.map((action) => ({
      ...action,
      disabled: disabled || action.disabled
    }))
  };
}

// node_modules/@shopify/polaris/build/esm/utilities/media-query/hooks.js
var import_react119 = __toESM(require_react());
function useMediaQuery() {
  const mediaQuery = (0, import_react119.useContext)(MediaQueryContext);
  if (!mediaQuery) {
    throw new Error("No mediaQuery was provided. Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");
  }
  return mediaQuery;
}

// node_modules/@shopify/polaris/build/esm/components/Page/components/Header/Header.js
var SHORT_TITLE = 20;
var REALLY_SHORT_TITLE = 8;
var LONG_TITLE = 34;
function Header2({
  title,
  subtitle,
  titleMetadata,
  additionalMetadata,
  titleHidden = false,
  primaryAction,
  pagination,
  additionalNavigation,
  breadcrumbs,
  backAction,
  secondaryActions = [],
  actionGroups = [],
  compactTitle = false,
  onActionRollup
}) {
  const i18n = useI18n();
  const {
    isNavigationCollapsed
  } = useMediaQuery();
  if (additionalNavigation && true) {
    console.warn("Deprecation: The `additionalNavigation` on Page is deprecated and will be removed in the next major version.");
  }
  if (breadcrumbs && true) {
    console.warn("Deprecation: The `breadcrumbs` prop on Page is deprecated and will be removed in the next major version. Please replace with a single `backAction`.");
  }
  const isSingleRow = !primaryAction && !pagination && (isInterface(secondaryActions) && !secondaryActions.length || isReactElement(secondaryActions)) && !actionGroups.length;
  let breadcrumbMarkup = null;
  if (backAction) {
    breadcrumbMarkup = /* @__PURE__ */ import_react120.default.createElement("div", {
      className: styles31.BreadcrumbWrapper
    }, /* @__PURE__ */ import_react120.default.createElement(Box, {
      maxWidth: "100%",
      paddingInlineEnd: "4",
      printHidden: true
    }, /* @__PURE__ */ import_react120.default.createElement(Breadcrumbs, {
      backAction
    })));
  } else if (Array.isArray(breadcrumbs) && breadcrumbs.length > 0 || !Array.isArray(breadcrumbs) && breadcrumbs) {
    breadcrumbMarkup = /* @__PURE__ */ import_react120.default.createElement("div", {
      className: styles31.BreadcrumbWrapper
    }, /* @__PURE__ */ import_react120.default.createElement(Box, {
      maxWidth: "100%",
      paddingInlineEnd: "4",
      printHidden: true
    }, /* @__PURE__ */ import_react120.default.createElement(Breadcrumbs, {
      breadcrumbs
    })));
  }
  const paginationMarkup = pagination && !isNavigationCollapsed ? /* @__PURE__ */ import_react120.default.createElement("div", {
    className: styles31.PaginationWrapper
  }, /* @__PURE__ */ import_react120.default.createElement(Box, {
    printHidden: true
  }, /* @__PURE__ */ import_react120.default.createElement(Pagination, pagination))) : null;
  const additionalNavigationMarkup = additionalNavigation ? /* @__PURE__ */ import_react120.default.createElement(HorizontalStack, {
    gap: "4",
    align: "end"
  }, /* @__PURE__ */ import_react120.default.createElement(Box, {
    printHidden: true
  }, additionalNavigation)) : null;
  const pageTitleMarkup = /* @__PURE__ */ import_react120.default.createElement("div", {
    className: styles31.TitleWrapper
  }, /* @__PURE__ */ import_react120.default.createElement(Title, {
    title,
    subtitle,
    titleMetadata,
    compactTitle
  }));
  const primaryActionMarkup = primaryAction ? /* @__PURE__ */ import_react120.default.createElement(PrimaryActionMarkup, {
    primaryAction
  }) : null;
  let actionMenuMarkup = null;
  if (isInterface(secondaryActions) && (secondaryActions.length > 0 || hasGroupsWithActions(actionGroups))) {
    actionMenuMarkup = /* @__PURE__ */ import_react120.default.createElement(ActionMenu, {
      actions: secondaryActions,
      groups: actionGroups,
      rollup: isNavigationCollapsed,
      rollupActionsLabel: title ? i18n.translate("Polaris.Page.Header.rollupActionsLabel", {
        title
      }) : void 0,
      onActionRollup
    });
  } else if (isReactElement(secondaryActions)) {
    actionMenuMarkup = /* @__PURE__ */ import_react120.default.createElement(import_react120.default.Fragment, null, secondaryActions);
  }
  const navigationMarkup = breadcrumbMarkup || paginationMarkup || additionalNavigationMarkup ? /* @__PURE__ */ import_react120.default.createElement(Box, {
    printHidden: true,
    paddingBlockEnd: "1",
    paddingInlineEnd: actionMenuMarkup && isNavigationCollapsed ? "10" : void 0
  }, /* @__PURE__ */ import_react120.default.createElement(HorizontalStack, {
    gap: "4",
    align: "space-between",
    blockAlign: "center"
  }, breadcrumbMarkup, additionalNavigationMarkup, paginationMarkup)) : null;
  const additionalMetadataMarkup = additionalMetadata ? /* @__PURE__ */ import_react120.default.createElement("div", {
    className: styles31.AdditionalMetaData
  }, /* @__PURE__ */ import_react120.default.createElement(Text, {
    color: "subdued",
    as: "span"
  }, additionalMetadata)) : null;
  const headerClassNames = classNames(isSingleRow && styles31.isSingleRow, navigationMarkup && styles31.hasNavigation, actionMenuMarkup && styles31.hasActionMenu, isNavigationCollapsed && styles31.mobileView, !breadcrumbMarkup && styles31.noBreadcrumbs, title && title.length < LONG_TITLE && styles31.mediumTitle, title && title.length > LONG_TITLE && styles31.longTitle);
  const {
    slot1,
    slot2,
    slot3,
    slot4,
    slot5,
    slot6
  } = determineLayout({
    actionMenuMarkup,
    additionalMetadataMarkup,
    additionalNavigationMarkup,
    breadcrumbMarkup,
    isNavigationCollapsed,
    pageTitleMarkup,
    paginationMarkup,
    primaryActionMarkup,
    title
  });
  return /* @__PURE__ */ import_react120.default.createElement(Box, {
    position: "relative",
    paddingBlockStart: {
      xs: "4",
      md: "5"
    },
    paddingBlockEnd: {
      xs: "4",
      md: "5"
    },
    paddingInlineStart: {
      xs: "4",
      sm: "0"
    },
    paddingInlineEnd: {
      xs: "4",
      sm: "0"
    },
    visuallyHidden: titleHidden
  }, /* @__PURE__ */ import_react120.default.createElement("div", {
    className: headerClassNames
  }, /* @__PURE__ */ import_react120.default.createElement(ConditionalRender, {
    condition: [slot1, slot2, slot3, slot4].some(notNull)
  }, /* @__PURE__ */ import_react120.default.createElement("div", {
    className: styles31.Row
  }, slot1, slot2, /* @__PURE__ */ import_react120.default.createElement(ConditionalRender, {
    condition: [slot3, slot4].some(notNull)
  }, /* @__PURE__ */ import_react120.default.createElement("div", {
    className: styles31.RightAlign
  }, /* @__PURE__ */ import_react120.default.createElement(ConditionalWrapper, {
    condition: [slot3, slot4].every(notNull),
    wrapper: (children) => /* @__PURE__ */ import_react120.default.createElement("div", {
      className: styles31.Actions
    }, children)
  }, slot3, slot4))))), /* @__PURE__ */ import_react120.default.createElement(ConditionalRender, {
    condition: [slot5, slot6].some(notNull)
  }, /* @__PURE__ */ import_react120.default.createElement("div", {
    className: styles31.Row
  }, /* @__PURE__ */ import_react120.default.createElement(HorizontalStack, {
    gap: "4"
  }, slot5), /* @__PURE__ */ import_react120.default.createElement(ConditionalRender, {
    condition: slot6 != null
  }, /* @__PURE__ */ import_react120.default.createElement("div", {
    className: styles31.RightAlign
  }, slot6))))));
}
function PrimaryActionMarkup({
  primaryAction
}) {
  const {
    isNavigationCollapsed
  } = useMediaQuery();
  let actionMarkup;
  if (isInterface(primaryAction)) {
    const {
      primary: isPrimary,
      helpText
    } = primaryAction;
    const primary = isPrimary === void 0 ? true : isPrimary;
    const content = buttonFrom(shouldShowIconOnly(isNavigationCollapsed, primaryAction), {
      primary
    });
    actionMarkup = helpText ? /* @__PURE__ */ import_react120.default.createElement(Tooltip, {
      content: helpText
    }, content) : content;
  } else {
    actionMarkup = primaryAction;
  }
  return /* @__PURE__ */ import_react120.default.createElement("div", {
    className: styles31.PrimaryActionWrapper
  }, /* @__PURE__ */ import_react120.default.createElement(Box, {
    printHidden: true
  }, actionMarkup));
}
function shouldShowIconOnly(isMobile, action) {
  let {
    content,
    accessibilityLabel,
    icon
  } = action;
  if (icon == null)
    return {
      ...action,
      icon: void 0
    };
  if (isMobile) {
    accessibilityLabel = accessibilityLabel || content;
    content = void 0;
  } else {
    icon = void 0;
  }
  return {
    ...action,
    content,
    accessibilityLabel,
    icon
  };
}
function notNull(value) {
  return value != null;
}
function determineLayout({
  actionMenuMarkup,
  additionalMetadataMarkup,
  additionalNavigationMarkup,
  breadcrumbMarkup,
  isNavigationCollapsed,
  pageTitleMarkup,
  paginationMarkup,
  primaryActionMarkup,
  title
}) {
  const layouts = {
    mobileCompact: {
      slots: {
        slot1: null,
        slot2: pageTitleMarkup,
        slot3: actionMenuMarkup,
        slot4: primaryActionMarkup,
        slot5: additionalMetadataMarkup,
        slot6: additionalNavigationMarkup
      },
      condition: isNavigationCollapsed && breadcrumbMarkup == null && title != null && title.length <= REALLY_SHORT_TITLE
    },
    mobileDefault: {
      slots: {
        slot1: breadcrumbMarkup,
        slot2: pageTitleMarkup,
        slot3: actionMenuMarkup,
        slot4: primaryActionMarkup,
        slot5: additionalMetadataMarkup,
        slot6: additionalNavigationMarkup
      },
      condition: isNavigationCollapsed
    },
    desktopCompact: {
      slots: {
        slot1: breadcrumbMarkup,
        slot2: pageTitleMarkup,
        slot3: actionMenuMarkup,
        slot4: primaryActionMarkup,
        slot5: additionalMetadataMarkup,
        slot6: additionalNavigationMarkup
      },
      condition: !isNavigationCollapsed && paginationMarkup == null && actionMenuMarkup == null && title != null && title.length <= SHORT_TITLE
    },
    desktopDefault: {
      slots: {
        slot1: breadcrumbMarkup,
        slot2: pageTitleMarkup,
        slot3: /* @__PURE__ */ import_react120.default.createElement(import_react120.default.Fragment, null, actionMenuMarkup, primaryActionMarkup),
        slot4: paginationMarkup,
        slot5: additionalMetadataMarkup,
        slot6: additionalNavigationMarkup
      },
      condition: !isNavigationCollapsed
    }
  };
  const layout = Object.values(layouts).find((layout2) => layout2.condition) || layouts.desktopDefault;
  return layout.slots;
}

// node_modules/@shopify/polaris/build/esm/components/Page/Page.js
function Page({
  children,
  fullWidth,
  narrowWidth,
  divider,
  ...rest
}) {
  const pageClassName = classNames(styles30.Page, fullWidth && styles30.fullWidth, narrowWidth && styles30.narrowWidth);
  const hasHeaderContent = rest.title != null && rest.title !== "" || rest.subtitle != null && rest.subtitle !== "" || rest.primaryAction != null || rest.secondaryActions != null && (isInterface(rest.secondaryActions) && rest.secondaryActions.length > 0 || isReactElement(rest.secondaryActions)) || rest.actionGroups != null && rest.actionGroups.length > 0 || rest.breadcrumbs != null && Array.isArray(rest.breadcrumbs) && rest.breadcrumbs.length > 0 || rest.breadcrumbs != null || rest.backAction != null;
  const contentClassName = classNames(!hasHeaderContent && styles30.Content, divider && hasHeaderContent && styles30.divider);
  const headerMarkup = hasHeaderContent ? /* @__PURE__ */ import_react121.default.createElement(Header2, rest) : null;
  return /* @__PURE__ */ import_react121.default.createElement("div", {
    className: pageClassName
  }, headerMarkup, /* @__PURE__ */ import_react121.default.createElement("div", {
    className: contentClassName
  }, children));
}

// node_modules/@shopify/polaris/build/esm/components/Select/Select.js
var import_react122 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Select/Select.scss.js
var styles39 = {
  "Select": "Polaris-Select",
  "disabled": "Polaris-Select--disabled",
  "Content": "Polaris-Select__Content",
  "InlineLabel": "Polaris-Select__InlineLabel",
  "Icon": "Polaris-Select__Icon",
  "Backdrop": "Polaris-Select__Backdrop",
  "SelectedOption": "Polaris-Select__SelectedOption",
  "Prefix": "Polaris-Select__Prefix",
  "Input": "Polaris-Select__Input",
  "error": "Polaris-Select--error",
  "hover": "Polaris-Select--hover"
};

// node_modules/@shopify/polaris/build/esm/components/Select/Select.js
var PLACEHOLDER_VALUE = "";
function Select({
  options: optionsProp,
  label,
  labelAction,
  labelHidden: labelHiddenProp,
  labelInline,
  disabled,
  helpText,
  placeholder,
  id: idProp,
  name,
  value = PLACEHOLDER_VALUE,
  error,
  onChange,
  onFocus,
  onBlur,
  requiredIndicator
}) {
  const id = useUniqueId("Select", idProp);
  const labelHidden = labelInline ? true : labelHiddenProp;
  const className = classNames(styles39.Select, error && styles39.error, disabled && styles39.disabled);
  const handleChange = onChange ? (event) => onChange(event.currentTarget.value, id) : void 0;
  const describedBy = [];
  if (helpText) {
    describedBy.push(helpTextID(id));
  }
  if (error) {
    describedBy.push(`${id}Error`);
  }
  const options = optionsProp || [];
  let normalizedOptions = options.map(normalizeOption);
  if (placeholder) {
    normalizedOptions = [{
      label: placeholder,
      value: PLACEHOLDER_VALUE,
      disabled: true
    }, ...normalizedOptions];
  }
  const inlineLabelMarkup = labelInline && /* @__PURE__ */ import_react122.default.createElement(Box, {
    paddingInlineEnd: "1"
  }, /* @__PURE__ */ import_react122.default.createElement(Text, {
    as: "span",
    color: "subdued",
    truncate: true
  }, label));
  const selectedOption = getSelectedOption(normalizedOptions, value);
  const prefixMarkup = selectedOption.prefix && /* @__PURE__ */ import_react122.default.createElement("div", {
    className: styles39.Prefix
  }, selectedOption.prefix);
  const contentMarkup = /* @__PURE__ */ import_react122.default.createElement("div", {
    className: styles39.Content,
    "aria-hidden": true,
    "aria-disabled": disabled
  }, inlineLabelMarkup, prefixMarkup, /* @__PURE__ */ import_react122.default.createElement("span", {
    className: styles39.SelectedOption
  }, selectedOption.label), /* @__PURE__ */ import_react122.default.createElement("span", {
    className: styles39.Icon
  }, /* @__PURE__ */ import_react122.default.createElement(Icon, {
    source: SvgSelectMinor
  })));
  const optionsMarkup = normalizedOptions.map(renderOption);
  return /* @__PURE__ */ import_react122.default.createElement(Labelled, {
    id,
    label,
    error,
    action: labelAction,
    labelHidden,
    helpText,
    requiredIndicator
  }, /* @__PURE__ */ import_react122.default.createElement("div", {
    className
  }, /* @__PURE__ */ import_react122.default.createElement("select", {
    id,
    name,
    value,
    className: styles39.Input,
    disabled,
    onFocus,
    onBlur,
    onChange: handleChange,
    "aria-invalid": Boolean(error),
    "aria-describedby": describedBy.length ? describedBy.join(" ") : void 0,
    "aria-required": requiredIndicator
  }, optionsMarkup), contentMarkup, /* @__PURE__ */ import_react122.default.createElement("div", {
    className: styles39.Backdrop
  })));
}
function isString(option) {
  return typeof option === "string";
}
function isGroup(option) {
  return typeof option === "object" && "options" in option && option.options != null;
}
function normalizeStringOption(option) {
  return {
    label: option,
    value: option
  };
}
function normalizeOption(option) {
  if (isString(option)) {
    return normalizeStringOption(option);
  } else if (isGroup(option)) {
    const {
      title,
      options
    } = option;
    return {
      title,
      options: options.map((option2) => {
        return isString(option2) ? normalizeStringOption(option2) : option2;
      })
    };
  }
  return option;
}
function getSelectedOption(options, value) {
  const flatOptions = flattenOptions(options);
  let selectedOption = flatOptions.find((option) => value === option.value);
  if (selectedOption === void 0) {
    selectedOption = flatOptions.find((option) => !option.hidden);
  }
  return selectedOption || {
    value: "",
    label: ""
  };
}
function flattenOptions(options) {
  let flatOptions = [];
  options.forEach((optionOrGroup) => {
    if (isGroup(optionOrGroup)) {
      flatOptions = flatOptions.concat(optionOrGroup.options);
    } else {
      flatOptions.push(optionOrGroup);
    }
  });
  return flatOptions;
}
function renderSingleOption(option) {
  const {
    value,
    label,
    prefix: _prefix,
    ...rest
  } = option;
  return /* @__PURE__ */ import_react122.default.createElement("option", Object.assign({
    key: value,
    value
  }, rest), label);
}
function renderOption(optionOrGroup) {
  if (isGroup(optionOrGroup)) {
    const {
      title,
      options
    } = optionOrGroup;
    return /* @__PURE__ */ import_react122.default.createElement("optgroup", {
      label: title,
      key: title
    }, options.map(renderSingleOption));
  }
  return renderSingleOption(optionOrGroup);
}

// node_modules/@shopify/polaris/build/esm/components/SettingToggle/SettingToggle.js
var import_react128 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/LegacyCard/LegacyCard.js
var import_react126 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/LegacyCard/LegacyCard.scss.js
var styles40 = {
  "LegacyCard": "Polaris-LegacyCard",
  "subdued": "Polaris-LegacyCard--subdued",
  "Section-hideOnPrint": "Polaris-LegacyCard__Section--hideOnPrint",
  "hideOnPrint": "Polaris-LegacyCard--hideOnPrint",
  "Header": "Polaris-LegacyCard__Header",
  "Section": "Polaris-LegacyCard__Section",
  "Section-fullWidth": "Polaris-LegacyCard__Section--fullWidth",
  "Section-flush": "Polaris-LegacyCard__Section--flush",
  "Section-subdued": "Polaris-LegacyCard__Section--subdued",
  "SectionHeader": "Polaris-LegacyCard__SectionHeader",
  "Subsection": "Polaris-LegacyCard__Subsection",
  "Footer": "Polaris-LegacyCard__Footer",
  "LeftJustified": "Polaris-LegacyCard__LeftJustified"
};

// node_modules/@shopify/polaris/build/esm/components/LegacyCard/components/Header/Header.js
var import_react123 = __toESM(require_react());
function Header3({
  children,
  title,
  actions
}) {
  const actionMarkup = actions ? /* @__PURE__ */ import_react123.default.createElement(ButtonGroup, null, buttonsFrom(actions, {
    plain: true
  })) : null;
  const titleMarkup = /* @__PURE__ */ (0, import_react123.isValidElement)(title) ? title : /* @__PURE__ */ import_react123.default.createElement(Text, {
    variant: "headingMd",
    as: "h2"
  }, title);
  const headingMarkup = actionMarkup || children ? /* @__PURE__ */ import_react123.default.createElement(LegacyStack, {
    alignment: "baseline"
  }, /* @__PURE__ */ import_react123.default.createElement(LegacyStack.Item, {
    fill: true
  }, titleMarkup), actionMarkup, children) : titleMarkup;
  return /* @__PURE__ */ import_react123.default.createElement("div", {
    className: styles40.Header
  }, headingMarkup);
}

// node_modules/@shopify/polaris/build/esm/components/LegacyCard/components/Section/Section.js
var import_react124 = __toESM(require_react());
function Section5({
  children,
  title,
  subdued,
  flush,
  fullWidth,
  actions,
  hideOnPrint
}) {
  const className = classNames(styles40.Section, flush && styles40["Section-flush"], subdued && styles40["Section-subdued"], fullWidth && styles40["Section-fullWidth"], hideOnPrint && styles40["Section-hideOnPrint"]);
  const actionMarkup = actions ? /* @__PURE__ */ import_react124.default.createElement(ButtonGroup, null, buttonsFrom(actions, {
    plain: true
  })) : null;
  const titleMarkup = typeof title === "string" ? /* @__PURE__ */ import_react124.default.createElement(Text, {
    variant: "headingSm",
    as: "h3"
  }, title) : title;
  const titleAreaMarkup = titleMarkup || actionMarkup ? /* @__PURE__ */ import_react124.default.createElement("div", {
    className: styles40.SectionHeader
  }, actionMarkup ? /* @__PURE__ */ import_react124.default.createElement(LegacyStack, {
    alignment: "baseline"
  }, /* @__PURE__ */ import_react124.default.createElement(LegacyStack.Item, {
    fill: true
  }, titleMarkup), actionMarkup) : titleMarkup) : null;
  return /* @__PURE__ */ import_react124.default.createElement("div", {
    className
  }, titleAreaMarkup, children);
}

// node_modules/@shopify/polaris/build/esm/components/LegacyCard/components/Subsection/Subsection.js
var import_react125 = __toESM(require_react());
function Subsection2({
  children
}) {
  return /* @__PURE__ */ import_react125.default.createElement("div", {
    className: styles40.Subsection
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/LegacyCard/LegacyCard.js
var LegacyCard = function LegacyCard2({
  children,
  hideOnPrint,
  title,
  subdued,
  sectioned,
  actions,
  primaryFooterAction,
  secondaryFooterActions,
  secondaryFooterActionsDisclosureText,
  footerActionAlignment = "right"
}) {
  const i18n = useI18n();
  const {
    value: secondaryActionsPopoverOpen,
    toggle: toggleSecondaryActionsPopoverOpen
  } = useToggle(false);
  const className = classNames(styles40.LegacyCard, subdued && styles40.subdued, hideOnPrint && styles40.hideOnPrint);
  const headerMarkup = title || actions ? /* @__PURE__ */ import_react126.default.createElement(Header3, {
    actions,
    title
  }) : null;
  const content = sectioned ? /* @__PURE__ */ import_react126.default.createElement(Section5, null, children) : children;
  const primaryFooterActionMarkup = primaryFooterAction ? buttonFrom(primaryFooterAction, {
    primary: true
  }) : null;
  let secondaryFooterActionsMarkup = null;
  if (secondaryFooterActions && secondaryFooterActions.length) {
    if (secondaryFooterActions.length === 1) {
      secondaryFooterActionsMarkup = buttonFrom(secondaryFooterActions[0]);
    } else {
      secondaryFooterActionsMarkup = /* @__PURE__ */ import_react126.default.createElement(import_react126.default.Fragment, null, /* @__PURE__ */ import_react126.default.createElement(Popover2, {
        active: secondaryActionsPopoverOpen,
        activator: /* @__PURE__ */ import_react126.default.createElement(Button, {
          disclosure: true,
          onClick: toggleSecondaryActionsPopoverOpen
        }, secondaryFooterActionsDisclosureText || i18n.translate("Polaris.Common.more")),
        onClose: toggleSecondaryActionsPopoverOpen
      }, /* @__PURE__ */ import_react126.default.createElement(ActionList, {
        items: secondaryFooterActions
      })));
    }
  }
  const footerMarkup = primaryFooterActionMarkup || secondaryFooterActionsMarkup ? /* @__PURE__ */ import_react126.default.createElement("div", {
    className: classNames(styles40.Footer, footerActionAlignment === "left" && styles40.LeftJustified)
  }, footerActionAlignment === "right" ? /* @__PURE__ */ import_react126.default.createElement(ButtonGroup, null, secondaryFooterActionsMarkup, primaryFooterActionMarkup) : /* @__PURE__ */ import_react126.default.createElement(ButtonGroup, null, primaryFooterActionMarkup, secondaryFooterActionsMarkup)) : null;
  return /* @__PURE__ */ import_react126.default.createElement(WithinContentContext.Provider, {
    value: true
  }, /* @__PURE__ */ import_react126.default.createElement("div", {
    className
  }, headerMarkup, content, footerMarkup));
};
LegacyCard.Header = Header3;
LegacyCard.Section = Section5;
LegacyCard.Subsection = Subsection2;

// node_modules/@shopify/polaris/build/esm/components/SettingAction/SettingAction.js
var import_react127 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/SettingAction/SettingAction.scss.js
var styles41 = {
  "SettingAction": "Polaris-SettingAction",
  "Setting": "Polaris-SettingAction__Setting",
  "Action": "Polaris-SettingAction__Action"
};

// node_modules/@shopify/polaris/build/esm/components/SettingAction/SettingAction.js
function SettingAction({
  action,
  children
}) {
  return /* @__PURE__ */ import_react127.default.createElement("div", {
    className: styles41.SettingAction
  }, /* @__PURE__ */ import_react127.default.createElement("div", {
    className: styles41.Setting
  }, children), /* @__PURE__ */ import_react127.default.createElement("div", {
    className: styles41.Action
  }, action));
}

// node_modules/@shopify/polaris/build/esm/components/SettingToggle/SettingToggle.js
var getUniqueSettingToggleId = globalIdGeneratorFactory("SettingToggle");
function SettingToggle({
  enabled,
  action,
  children
}) {
  const id = (0, import_react128.useMemo)(getUniqueSettingToggleId, []);
  if (true) {
    console.warn(`Deprecation: <SettingToggle /> is deprecated. This component will be removed in a future major version of Polaris. Use the primitive layout and typography components to compose a setting toggle card.
      See the "With primitive components" example in https://polaris.shopify.com/components/deprecated/setting-toggle`);
  }
  const actionMarkup = action ? buttonFrom(action, {
    role: "switch",
    id,
    ariaChecked: enabled ? "true" : "false",
    size: "slim"
  }) : null;
  return /* @__PURE__ */ import_react128.default.createElement(LegacyCard, {
    sectioned: true
  }, /* @__PURE__ */ import_react128.default.createElement(SettingAction, {
    action: actionMarkup
  }, /* @__PURE__ */ import_react128.default.createElement("label", {
    htmlFor: id
  }, children)));
}

// node_modules/@shopify/polaris/build/esm/components/Stack/Stack.js
var import_react130 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Stack/Stack.scss.js
var styles42 = {
  "Stack": "Polaris-Stack",
  "Item": "Polaris-Stack__Item",
  "noWrap": "Polaris-Stack--noWrap",
  "spacingNone": "Polaris-Stack--spacingNone",
  "spacingExtraTight": "Polaris-Stack--spacingExtraTight",
  "spacingTight": "Polaris-Stack--spacingTight",
  "spacingBaseTight": "Polaris-Stack--spacingBaseTight",
  "spacingLoose": "Polaris-Stack--spacingLoose",
  "spacingExtraLoose": "Polaris-Stack--spacingExtraLoose",
  "distributionLeading": "Polaris-Stack--distributionLeading",
  "distributionTrailing": "Polaris-Stack--distributionTrailing",
  "distributionCenter": "Polaris-Stack--distributionCenter",
  "distributionEqualSpacing": "Polaris-Stack--distributionEqualSpacing",
  "distributionFill": "Polaris-Stack--distributionFill",
  "distributionFillEvenly": "Polaris-Stack--distributionFillEvenly",
  "alignmentLeading": "Polaris-Stack--alignmentLeading",
  "alignmentTrailing": "Polaris-Stack--alignmentTrailing",
  "alignmentCenter": "Polaris-Stack--alignmentCenter",
  "alignmentFill": "Polaris-Stack--alignmentFill",
  "alignmentBaseline": "Polaris-Stack--alignmentBaseline",
  "vertical": "Polaris-Stack--vertical",
  "Item-fill": "Polaris-Stack__Item--fill"
};

// node_modules/@shopify/polaris/build/esm/components/Stack/components/Item/Item.js
var import_react129 = __toESM(require_react());
function Item5({
  children,
  fill
}) {
  if (true) {
    console.warn("Deprecation: <Stack /> is deprecated. This component will be removed in a future major version of Polaris. Use <LegacyStack /> or <VerticalStack /> instead.");
  }
  const className = classNames(styles42.Item, fill && styles42["Item-fill"]);
  return /* @__PURE__ */ import_react129.default.createElement("div", {
    className
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/Stack/Stack.js
var Stack2 = /* @__PURE__ */ (0, import_react130.memo)(function Stack3({
  children,
  vertical,
  spacing: spacing2,
  distribution,
  alignment,
  wrap
}) {
  if (true) {
    console.warn("Deprecation: <Stack /> is deprecated. This component will be removed in a future major version of Polaris. Use <LegacyStack /> or <VerticalStack /> instead.");
  }
  const className = classNames(styles42.Stack, vertical && styles42.vertical, spacing2 && styles42[variationName("spacing", spacing2)], distribution && styles42[variationName("distribution", distribution)], alignment && styles42[variationName("alignment", alignment)], wrap === false && styles42.noWrap);
  const itemMarkup = elementChildren(children).map((child, index) => {
    const props = {
      key: index
    };
    return wrapWithComponent(child, Item5, props);
  });
  return /* @__PURE__ */ import_react130.default.createElement("div", {
    className
  }, itemMarkup);
});
Stack2.Item = Item5;

// node_modules/@shopify/polaris/build/esm/components/Tabs/Tabs.js
var import_react136 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Tabs/utilities.js
function getVisibleAndHiddenTabIndices(tabs, selected, disclosureWidth, tabWidths, containerWidth) {
  const sumTabWidths = tabWidths.reduce((sum, width) => sum + width, 0);
  const arrayOfTabIndices = tabs.map((_, index) => {
    return index;
  });
  const visibleTabs = [];
  const hiddenTabs = [];
  if (containerWidth > sumTabWidths) {
    visibleTabs.push(...arrayOfTabIndices);
  } else {
    visibleTabs.push(selected);
    let tabListWidth = tabWidths[selected];
    arrayOfTabIndices.forEach((currentTabIndex) => {
      if (currentTabIndex !== selected) {
        const currentTabWidth = tabWidths[currentTabIndex];
        if (tabListWidth + currentTabWidth >= containerWidth - disclosureWidth) {
          hiddenTabs.push(currentTabIndex);
          return;
        }
        visibleTabs.push(currentTabIndex);
        tabListWidth += currentTabWidth;
      }
    });
  }
  return {
    visibleTabs,
    hiddenTabs
  };
}

// node_modules/@shopify/polaris/build/esm/components/Tabs/Tabs.scss.js
var styles43 = {
  "Tabs": "Polaris-Tabs",
  "fitted": "Polaris-Tabs--fitted",
  "TabContainer": "Polaris-Tabs__TabContainer",
  "Title": "Polaris-Tabs__Title",
  "fillSpace": "Polaris-Tabs--fillSpace",
  "Tab": "Polaris-Tabs__Tab",
  "Tab-selected": "Polaris-Tabs__Tab--selected",
  "titleWithIcon": "Polaris-Tabs--titleWithIcon",
  "Panel": "Polaris-Tabs__Panel",
  "Panel-hidden": "Polaris-Tabs__Panel--hidden",
  "Item": "Polaris-Tabs__Item",
  "DisclosureTab": "Polaris-Tabs__DisclosureTab",
  "DisclosureTab-visible": "Polaris-Tabs__DisclosureTab--visible",
  "DisclosureActivator": "Polaris-Tabs__DisclosureActivator",
  "TabMeasurer": "Polaris-Tabs__TabMeasurer"
};

// node_modules/@shopify/polaris/build/esm/components/Tabs/components/Panel/Panel.js
var import_react131 = __toESM(require_react());
function Panel({
  hidden,
  id,
  tabID,
  children
}) {
  const className = classNames(styles43.Panel, hidden && styles43["Panel-hidden"]);
  return /* @__PURE__ */ import_react131.default.createElement("div", {
    className,
    id,
    role: "tabpanel",
    "aria-labelledby": tabID,
    tabIndex: -1
  }, children);
}

// node_modules/@shopify/polaris/build/esm/components/Tabs/components/TabMeasurer/TabMeasurer.js
var import_react133 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Tabs/components/Tab/Tab.js
var import_react132 = __toESM(require_react());
function Tab({
  id,
  focused,
  siblingTabHasFocus,
  children,
  onClick,
  selected,
  url,
  panelID,
  measuring,
  accessibilityLabel
}) {
  const wasSelected = (0, import_react132.useRef)(selected);
  const panelFocused = (0, import_react132.useRef)(false);
  const node = (0, import_react132.useRef)(null);
  (0, import_react132.useEffect)(() => {
    if (measuring) {
      return;
    }
    const itemHadFocus = focused || document.activeElement && document.activeElement.id === id;
    if (itemHadFocus && selected && panelID != null && !panelFocused.current) {
      focusPanelID(panelID);
      panelFocused.current = true;
    }
    if (selected && !wasSelected.current && panelID != null) {
      focusPanelID(panelID);
    } else if (focused && node.current != null) {
      focusFirstFocusableNode(node.current);
    }
    wasSelected.current = selected;
  }, [focused, id, measuring, panelID, selected]);
  const handleClick = onClick && onClick.bind(null, id);
  const className = classNames(styles43.Tab, selected && styles43["Tab-selected"]);
  let tabIndex;
  if (selected && !siblingTabHasFocus && !measuring) {
    tabIndex = 0;
  } else if (focused && !measuring) {
    tabIndex = 0;
  } else {
    tabIndex = -1;
  }
  const tabContainerClassNames = classNames(styles43.TabContainer, selected && styles43.Underline);
  const markup = url ? /* @__PURE__ */ import_react132.default.createElement(UnstyledLink, {
    id,
    url,
    role: "tab",
    tabIndex,
    onClick: handleClick,
    className,
    "aria-selected": selected,
    "aria-controls": panelID,
    "aria-label": accessibilityLabel,
    onMouseUp: handleMouseUpByBlurring
  }, /* @__PURE__ */ import_react132.default.createElement("span", {
    className: styles43.Title
  }, children)) : /* @__PURE__ */ import_react132.default.createElement("button", {
    id,
    role: "tab",
    type: "button",
    tabIndex,
    className,
    onClick: handleClick,
    "aria-selected": selected,
    "aria-controls": panelID,
    "aria-label": accessibilityLabel,
    onMouseUp: handleMouseUpByBlurring
  }, /* @__PURE__ */ import_react132.default.createElement("span", {
    className: styles43.Title
  }, children));
  return /* @__PURE__ */ import_react132.default.createElement("li", {
    className: tabContainerClassNames,
    ref: node,
    role: "presentation"
  }, markup);
}
function focusPanelID(panelID) {
  const panel = document.getElementById(panelID);
  if (panel) {
    panel.focus({
      preventScroll: true
    });
  }
}

// node_modules/@shopify/polaris/build/esm/components/Tabs/components/TabMeasurer/TabMeasurer.js
var TabMeasurer = /* @__PURE__ */ (0, import_react133.memo)(function TabMeasurer2({
  selected,
  tabs,
  activator,
  tabToFocus,
  siblingTabHasFocus,
  handleMeasurement: handleMeasurementProp
}) {
  const containerNode = (0, import_react133.useRef)(null);
  const animationFrame = (0, import_react133.useRef)(null);
  const handleMeasurement = (0, import_react133.useCallback)(() => {
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }
    animationFrame.current = requestAnimationFrame(() => {
      if (!containerNode.current) {
        return;
      }
      const containerWidth = containerNode.current.offsetWidth;
      const hiddenTabNodes = containerNode.current.children;
      const hiddenTabNodesArray = Array.from(hiddenTabNodes);
      const hiddenTabWidths = hiddenTabNodesArray.map((node) => {
        return Math.ceil(node.getBoundingClientRect().width);
      });
      const disclosureWidth = hiddenTabWidths.pop() || 0;
      handleMeasurementProp({
        containerWidth,
        disclosureWidth,
        hiddenTabWidths
      });
    });
  }, [handleMeasurementProp]);
  (0, import_react133.useEffect)(() => {
    handleMeasurement();
  }, [handleMeasurement, tabs]);
  useComponentDidMount(() => {
    if (true) {
      setTimeout(handleMeasurement, 0);
    }
  });
  const tabsMarkup = tabs.map((tab, index) => {
    return /* @__PURE__ */ import_react133.default.createElement(Tab, {
      measuring: true,
      key: `${index}${tab.id}Hidden`,
      id: `${tab.id}Measurer`,
      siblingTabHasFocus,
      focused: index === tabToFocus,
      selected: index === selected,
      onClick: noop5,
      url: tab.url
    }, tab.content);
  });
  const classname = classNames(styles43.Tabs, styles43.TabMeasurer);
  return /* @__PURE__ */ import_react133.default.createElement("div", {
    className: classname,
    ref: containerNode
  }, /* @__PURE__ */ import_react133.default.createElement(EventListener, {
    event: "resize",
    handler: handleMeasurement
  }), tabsMarkup, activator);
});
function noop5() {
}

// node_modules/@shopify/polaris/build/esm/components/Tabs/components/List/List.js
var import_react135 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Tabs/components/Item/Item.js
var import_react134 = __toESM(require_react());
var Item6 = class extends import_react134.PureComponent {
  constructor(...args) {
    super(...args);
    this.context = void 0;
    this.focusedNode = null;
    this.setFocusedNode = (node) => {
      this.focusedNode = node;
    };
  }
  componentDidMount() {
    const {
      focusedNode
    } = this;
    const {
      focused
    } = this.props;
    if (focusedNode && focusedNode instanceof HTMLElement && focused) {
      focusedNode.focus();
    }
  }
  componentDidUpdate() {
    const {
      focusedNode
    } = this;
    const {
      focused
    } = this.props;
    if (focusedNode && focusedNode instanceof HTMLElement && focused) {
      focusedNode.focus();
    }
  }
  render() {
    const {
      id,
      panelID,
      children,
      url,
      accessibilityLabel,
      onClick = noop6
    } = this.props;
    const classname = classNames(styles43.Item);
    const sharedProps = {
      id,
      ref: this.setFocusedNode,
      onClick,
      className: classname,
      "aria-controls": panelID,
      "aria-selected": false,
      "aria-label": accessibilityLabel
    };
    const markup = url ? /* @__PURE__ */ import_react134.default.createElement(UnstyledLink, Object.assign({}, sharedProps, {
      url
    }), children) : /* @__PURE__ */ import_react134.default.createElement("button", Object.assign({}, sharedProps, {
      type: "button"
    }), children);
    return /* @__PURE__ */ import_react134.default.createElement("li", null, markup);
  }
};
Item6.contextType = FeaturesContext;
function noop6() {
}

// node_modules/@shopify/polaris/build/esm/components/Tabs/components/List/List.js
function List({
  focusIndex,
  disclosureTabs,
  onClick = noop7,
  onKeyPress = noop7
}) {
  const tabs = disclosureTabs.map(({
    id,
    content,
    ...tabProps
  }, index) => {
    return /* @__PURE__ */ import_react135.default.createElement(Item6, Object.assign({
      key: id
    }, tabProps, {
      id,
      focused: index === focusIndex,
      onClick: onClick.bind(null, id)
    }), content);
  });
  return /* @__PURE__ */ import_react135.default.createElement("div", {
    onKeyDown: handleKeyDown,
    onKeyUp: onKeyPress
  }, /* @__PURE__ */ import_react135.default.createElement(Box, {
    as: "ul",
    padding: "2"
  }, tabs));
}
function noop7() {
}
function handleKeyDown(event) {
  const {
    key
  } = event;
  if (key === "ArrowLeft" || key === "ArrowRight") {
    event.preventDefault();
    event.stopPropagation();
  }
}

// node_modules/@shopify/polaris/build/esm/components/Tabs/Tabs.js
var TabsInner = class extends import_react136.PureComponent {
  constructor(...args) {
    super(...args);
    this.state = {
      disclosureWidth: 0,
      containerWidth: Infinity,
      tabWidths: [],
      visibleTabs: [],
      hiddenTabs: [],
      showDisclosure: false,
      tabToFocus: -1
    };
    this.handleKeyPress = (event) => {
      const {
        tabToFocus,
        visibleTabs,
        hiddenTabs,
        showDisclosure
      } = this.state;
      const key = event.key;
      const tabsArrayInOrder = showDisclosure ? visibleTabs.concat(hiddenTabs) : [...visibleTabs];
      let newFocus = tabsArrayInOrder.indexOf(tabToFocus);
      if (key === "ArrowRight") {
        newFocus += 1;
        if (newFocus === tabsArrayInOrder.length) {
          newFocus = 0;
        }
      }
      if (key === "ArrowLeft") {
        if (newFocus === -1 || newFocus === 0) {
          newFocus = tabsArrayInOrder.length - 1;
        } else {
          newFocus -= 1;
        }
      }
      this.setState({
        tabToFocus: tabsArrayInOrder[newFocus]
      });
    };
    this.renderTabMarkup = (tab, index) => {
      const {
        selected,
        children
      } = this.props;
      const {
        tabToFocus
      } = this.state;
      const tabPanelID = tab.panelID || `${tab.id}-panel`;
      return /* @__PURE__ */ import_react136.default.createElement(Tab, {
        key: `${index}-${tab.id}`,
        id: tab.id,
        siblingTabHasFocus: tabToFocus > -1,
        focused: index === tabToFocus,
        selected: index === selected,
        onClick: this.handleTabClick,
        panelID: children ? tabPanelID : void 0,
        accessibilityLabel: tab.accessibilityLabel,
        url: tab.url
      }, tab.content);
    };
    this.handleFocus = (event) => {
      const {
        selected,
        tabs
      } = this.props;
      const target = event.target;
      if (target.classList.contains(styles43.Tab) || target.classList.contains(styles43.Item)) {
        let tabToFocus = -1;
        tabs.every((tab, index) => {
          if (tab.id === target.id) {
            tabToFocus = index;
            return false;
          }
          return true;
        });
        this.setState({
          tabToFocus
        });
        return;
      }
      if (target.classList.contains(styles43.DisclosureActivator)) {
        return;
      }
      if (!event.relatedTarget) {
        this.setState({
          tabToFocus: selected
        });
        return;
      }
      const relatedTarget = event.relatedTarget;
      if (relatedTarget instanceof HTMLElement && !relatedTarget.classList.contains(styles43.Tab) && !relatedTarget.classList.contains(styles43.Item) && !relatedTarget.classList.contains(styles43.DisclosureActivator)) {
        this.setState({
          tabToFocus: selected
        });
      }
    };
    this.handleBlur = (event) => {
      if (event.relatedTarget == null) {
        this.setState({
          tabToFocus: -1
        });
        return;
      }
      const target = event.relatedTarget;
      if (target instanceof HTMLElement && !target.classList.contains(styles43.Tab) && !target.classList.contains(styles43.Item)) {
        this.setState({
          tabToFocus: -1
        });
      }
    };
    this.handleDisclosureActivatorClick = () => {
      this.setState(({
        showDisclosure
      }) => ({
        showDisclosure: !showDisclosure
      }));
    };
    this.handleClose = () => {
      this.setState({
        showDisclosure: false
      });
    };
    this.handleMeasurement = (measurements) => {
      const {
        tabs,
        selected
      } = this.props;
      const {
        tabToFocus
      } = this.state;
      const {
        hiddenTabWidths: tabWidths,
        containerWidth,
        disclosureWidth
      } = measurements;
      const {
        visibleTabs,
        hiddenTabs
      } = getVisibleAndHiddenTabIndices(tabs, selected, disclosureWidth, tabWidths, containerWidth);
      this.setState({
        tabToFocus: tabToFocus === -1 ? -1 : selected,
        visibleTabs,
        hiddenTabs,
        disclosureWidth,
        containerWidth,
        tabWidths
      });
    };
    this.handleTabClick = (id) => {
      const {
        tabs,
        onSelect = noop8
      } = this.props;
      const tab = tabs.find((aTab) => aTab.id === id);
      if (tab == null) {
        return;
      }
      const selectedIndex = tabs.indexOf(tab);
      onSelect(selectedIndex);
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      disclosureWidth,
      tabWidths,
      containerWidth
    } = prevState;
    const {
      visibleTabs,
      hiddenTabs
    } = getVisibleAndHiddenTabIndices(nextProps.tabs, nextProps.selected, disclosureWidth, tabWidths, containerWidth);
    return {
      visibleTabs,
      hiddenTabs,
      selected: nextProps.selected
    };
  }
  render() {
    const {
      tabs,
      selected,
      fitted,
      children,
      i18n,
      disclosureText
    } = this.props;
    const {
      tabToFocus,
      visibleTabs,
      hiddenTabs,
      showDisclosure
    } = this.state;
    const disclosureTabs = hiddenTabs.map((tabIndex) => tabs[tabIndex]);
    const panelMarkup = children ? tabs.map((_tab, index) => {
      return selected === index ? /* @__PURE__ */ import_react136.default.createElement(Panel, {
        id: tabs[index].panelID || `${tabs[index].id}-panel`,
        tabID: tabs[index].id,
        key: tabs[index].id
      }, children) : /* @__PURE__ */ import_react136.default.createElement(Panel, {
        id: tabs[index].panelID || `${tabs[index].id}-panel`,
        tabID: tabs[index].id,
        key: tabs[index].id,
        hidden: true
      });
    }) : null;
    const tabsMarkup = visibleTabs.sort((tabA, tabB) => tabA - tabB).map((tabIndex) => this.renderTabMarkup(tabs[tabIndex], tabIndex));
    const disclosureActivatorVisible = visibleTabs.length < tabs.length;
    const hasCustomDisclosure = Boolean(disclosureText);
    const classname = classNames(styles43.Tabs, fitted && styles43.fitted, disclosureActivatorVisible && styles43.fillSpace);
    const disclosureTabClassName = classNames(styles43.DisclosureTab, disclosureActivatorVisible && styles43["DisclosureTab-visible"]);
    const disclosureButtonClassName = classNames(styles43.DisclosureActivator, hasCustomDisclosure && styles43.Tab);
    const disclosureButtonContentWrapperClassName = classNames(styles43.Title, hasCustomDisclosure && styles43.titleWithIcon);
    const disclosureButtonContent = hasCustomDisclosure ? /* @__PURE__ */ import_react136.default.createElement(import_react136.default.Fragment, null, disclosureText, /* @__PURE__ */ import_react136.default.createElement(Icon, {
      source: SvgCaretDownMinor,
      color: "subdued"
    })) : /* @__PURE__ */ import_react136.default.createElement(Icon, {
      source: SvgHorizontalDotsMinor,
      color: "subdued"
    });
    const disclosureButton = /* @__PURE__ */ import_react136.default.createElement("button", {
      type: "button",
      className: disclosureButtonClassName,
      onClick: this.handleDisclosureActivatorClick,
      "aria-label": i18n.translate("Polaris.Tabs.toggleTabsLabel")
    }, /* @__PURE__ */ import_react136.default.createElement("span", {
      className: disclosureButtonContentWrapperClassName
    }, disclosureButtonContent));
    const activator = disclosureText ? /* @__PURE__ */ import_react136.default.createElement("div", {
      className: styles43.TabContainer
    }, disclosureButton) : disclosureButton;
    return /* @__PURE__ */ import_react136.default.createElement("div", null, /* @__PURE__ */ import_react136.default.createElement(Box, {
      borderBlockEndWidth: "1",
      borderColor: "border-subdued",
      paddingInlineStart: "2",
      paddingInlineEnd: "2"
    }, /* @__PURE__ */ import_react136.default.createElement(TabMeasurer, {
      tabToFocus,
      activator,
      selected,
      tabs,
      siblingTabHasFocus: tabToFocus > -1,
      handleMeasurement: this.handleMeasurement
    }), /* @__PURE__ */ import_react136.default.createElement("ul", {
      role: "tablist",
      className: classname,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onKeyDown: handleKeyDown2,
      onKeyUp: this.handleKeyPress
    }, tabsMarkup, /* @__PURE__ */ import_react136.default.createElement("li", {
      className: disclosureTabClassName,
      role: "presentation"
    }, /* @__PURE__ */ import_react136.default.createElement(Popover2, {
      preferredPosition: "below",
      activator,
      active: disclosureActivatorVisible && showDisclosure,
      onClose: this.handleClose,
      autofocusTarget: "first-node"
    }, /* @__PURE__ */ import_react136.default.createElement(List, {
      focusIndex: hiddenTabs.indexOf(tabToFocus),
      disclosureTabs,
      onClick: this.handleTabClick,
      onKeyPress: this.handleKeyPress
    }))))), panelMarkup);
  }
};
function noop8() {
}
function handleKeyDown2(event) {
  const {
    key
  } = event;
  if (key === "ArrowLeft" || key === "ArrowRight") {
    event.preventDefault();
    event.stopPropagation();
  }
}
function Tabs(props) {
  const i18n = useI18n();
  return /* @__PURE__ */ import_react136.default.createElement(TabsInner, Object.assign({}, props, {
    i18n
  }));
}

// node_modules/@shopify/polaris/build/esm/components/Thumbnail/Thumbnail.js
var import_react138 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Thumbnail/Thumbnail.scss.js
var styles44 = {
  "Thumbnail": "Polaris-Thumbnail",
  "sizeExtraSmall": "Polaris-Thumbnail--sizeExtraSmall",
  "sizeSmall": "Polaris-Thumbnail--sizeSmall",
  "sizeMedium": "Polaris-Thumbnail--sizeMedium",
  "sizeLarge": "Polaris-Thumbnail--sizeLarge",
  "transparent": "Polaris-Thumbnail--transparent"
};

// node_modules/@shopify/polaris/build/esm/components/Image/Image.js
var import_react137 = __toESM(require_react());
function Image({
  alt,
  sourceSet,
  source,
  crossOrigin,
  onLoad,
  className,
  ...rest
}) {
  const finalSourceSet = sourceSet ? sourceSet.map(({
    source: subSource,
    descriptor
  }) => `${subSource} ${descriptor}`).join(",") : null;
  const handleLoad = (0, import_react137.useCallback)(() => {
    if (onLoad)
      onLoad();
  }, [onLoad]);
  return /* @__PURE__ */ import_react137.default.createElement("img", Object.assign({
    alt,
    src: source,
    crossOrigin,
    className,
    onLoad: handleLoad
  }, finalSourceSet ? {
    srcSet: finalSourceSet
  } : {}, rest));
}

// node_modules/@shopify/polaris/build/esm/components/Thumbnail/Thumbnail.js
function Thumbnail({
  source,
  alt,
  size = "medium",
  transparent
}) {
  const className = classNames(styles44.Thumbnail, size && styles44[variationName("size", size)], transparent && styles44.transparent);
  const content = typeof source === "string" ? /* @__PURE__ */ import_react138.default.createElement(Image, {
    alt,
    source
  }) : /* @__PURE__ */ import_react138.default.createElement(Icon, {
    accessibilityLabel: alt,
    source
  });
  return /* @__PURE__ */ import_react138.default.createElement("span", {
    className
  }, content);
}

// node_modules/@shopify/polaris/build/esm/components/Avatar/Avatar.js
var import_react139 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Avatar/Avatar.scss.js
var styles45 = {
  "Avatar": "Polaris-Avatar",
  "Text": "Polaris-Avatar__Text",
  "long": "Polaris-Avatar--long",
  "shapeRound": "Polaris-Avatar--shapeRound",
  "shapeSquare": "Polaris-Avatar--shapeSquare",
  "hidden": "Polaris-Avatar--hidden",
  "sizeExtraSmall": "Polaris-Avatar--sizeExtraSmall",
  "sizeSmall": "Polaris-Avatar--sizeSmall",
  "sizeMedium": "Polaris-Avatar--sizeMedium",
  "sizeLarge": "Polaris-Avatar--sizeLarge",
  "styleOne": "Polaris-Avatar--styleOne",
  "styleTwo": "Polaris-Avatar--styleTwo",
  "styleThree": "Polaris-Avatar--styleThree",
  "styleFour": "Polaris-Avatar--styleFour",
  "styleFive": "Polaris-Avatar--styleFive",
  "imageHasLoaded": "Polaris-Avatar--imageHasLoaded",
  "Image": "Polaris-Avatar__Image",
  "Initials": "Polaris-Avatar__Initials",
  "Svg": "Polaris-Avatar__Svg"
};

// node_modules/@shopify/polaris/build/esm/components/Avatar/Avatar.js
var Status;
(function(Status2) {
  Status2["Pending"] = "PENDING";
  Status2["Loaded"] = "LOADED";
  Status2["Errored"] = "ERRORED";
})(Status || (Status = {}));
var STYLE_CLASSES = ["one", "two", "three", "four", "five"];
function xorHash(str) {
  let hash = 0;
  for (const char of str) {
    hash ^= char.charCodeAt(0);
  }
  return hash;
}
function styleClass(name) {
  return name ? STYLE_CLASSES[xorHash(name) % STYLE_CLASSES.length] : STYLE_CLASSES[0];
}
function Avatar({
  name,
  source,
  onError,
  initials,
  customer,
  size = "medium",
  shape: shape2 = "round",
  accessibilityLabel
}) {
  const i18n = useI18n();
  const isAfterInitialMount = useIsAfterInitialMount();
  const [status, setStatus] = (0, import_react139.useState)(Status.Pending);
  (0, import_react139.useEffect)(() => {
    setStatus(Status.Pending);
  }, [source]);
  const handleError = (0, import_react139.useCallback)(() => {
    setStatus(Status.Errored);
    if (onError) {
      onError();
    }
  }, [onError]);
  const handleLoad = (0, import_react139.useCallback)(() => {
    setStatus(Status.Loaded);
  }, []);
  const hasImage = source && status !== Status.Errored;
  const nameString = name || initials;
  let label;
  if (accessibilityLabel) {
    label = accessibilityLabel;
  } else if (name) {
    label = name;
  } else if (initials) {
    const splitInitials = initials.split("").join(" ");
    label = i18n.translate("Polaris.Avatar.labelWithInitials", {
      initials: splitInitials
    });
  } else {
    label = i18n.translate("Polaris.Avatar.label");
  }
  const className = classNames(styles45.Avatar, size && styles45[variationName("size", size)], hasImage && status === Status.Loaded && styles45.imageHasLoaded, shape2 && styles45[variationName("shape", shape2)], !customer && !source && styles45[variationName("style", styleClass(nameString))]);
  const textClassName = classNames(styles45.Text, ((initials === null || initials === void 0 ? void 0 : initials.length) || 0) > 2 && styles45.long);
  const imageClassName = classNames(styles45.Image, status !== Status.Loaded && styles45.hidden);
  const imageMarkUp = source && isAfterInitialMount && status !== Status.Errored ? /* @__PURE__ */ import_react139.default.createElement(Image, {
    className: imageClassName,
    source,
    alt: "",
    role: "presentation",
    onLoad: handleLoad,
    onError: handleError
  }) : null;
  const verticalOffset = "0.35em";
  const avatarBody = customer || !initials ? /* @__PURE__ */ import_react139.default.createElement("path", {
    fill: "currentColor",
    d: "M8.28 27.5A14.95 14.95 0 0120 21.8c4.76 0 8.97 2.24 11.72 5.7a14.02 14.02 0 01-8.25 5.91 14.82 14.82 0 01-6.94 0 14.02 14.02 0 01-8.25-5.9zM13.99 12.78a6.02 6.02 0 1112.03 0 6.02 6.02 0 01-12.03 0z"
  }) : /* @__PURE__ */ import_react139.default.createElement("text", {
    className: textClassName,
    x: "50%",
    y: "50%",
    dy: verticalOffset,
    fill: "currentColor",
    textAnchor: "middle"
  }, initials);
  const svgMarkup = hasImage ? null : /* @__PURE__ */ import_react139.default.createElement("span", {
    className: styles45.Initials
  }, /* @__PURE__ */ import_react139.default.createElement("svg", {
    className: styles45.Svg,
    viewBox: "0 0 40 40"
  }, avatarBody));
  return /* @__PURE__ */ import_react139.default.createElement("span", {
    "aria-label": label,
    role: "img",
    className
  }, svgMarkup, imageMarkUp);
}

// node_modules/@shopify/polaris/build/esm/components/Modal/Modal.js
var import_react157 = __toESM(require_react());

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r)
    return {};
  var t = {};
  for (var n in r)
    if ({}.hasOwnProperty.call(r, n)) {
      if (-1 !== e.indexOf(n))
        continue;
      t[n] = r[n];
    }
  return t;
}

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}

// node_modules/react-transition-group/esm/CSSTransition.js
var import_prop_types3 = __toESM(require_prop_types());

// node_modules/dom-helpers/esm/hasClass.js
function hasClass(element, className) {
  if (element.classList)
    return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

// node_modules/dom-helpers/esm/addClass.js
function addClass(element, className) {
  if (element.classList)
    element.classList.add(className);
  else if (!hasClass(element, className))
    if (typeof element.className === "string")
      element.className = element.className + " " + className;
    else
      element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
}

// node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === "string") {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
  }
}

// node_modules/react-transition-group/esm/CSSTransition.js
var import_react142 = __toESM(require_react());

// node_modules/react-transition-group/esm/Transition.js
var import_prop_types2 = __toESM(require_prop_types());
var import_react141 = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());

// node_modules/react-transition-group/esm/config.js
var config_default = {
  disabled: false
};

// node_modules/react-transition-group/esm/utils/PropTypes.js
var import_prop_types = __toESM(require_prop_types());
var timeoutsShape = true ? import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.shape({
  enter: import_prop_types.default.number,
  exit: import_prop_types.default.number,
  appear: import_prop_types.default.number
}).isRequired]) : null;
var classNamesShape = true ? import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.shape({
  enter: import_prop_types.default.string,
  exit: import_prop_types.default.string,
  active: import_prop_types.default.string
}), import_prop_types.default.shape({
  enter: import_prop_types.default.string,
  enterDone: import_prop_types.default.string,
  enterActive: import_prop_types.default.string,
  exit: import_prop_types.default.string,
  exitDone: import_prop_types.default.string,
  exitActive: import_prop_types.default.string
})]) : null;

// node_modules/react-transition-group/esm/TransitionGroupContext.js
var import_react140 = __toESM(require_react());
var TransitionGroupContext_default = import_react140.default.createContext(null);

// node_modules/react-transition-group/esm/utils/reflow.js
var forceReflow = function forceReflow2(node) {
  return node.scrollTop;
};

// node_modules/react-transition-group/esm/Transition.js
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout2 = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout2;
    if (timeout2 != null && typeof timeout2 !== "number") {
      exit = timeout2.exit;
      enter = timeout2.enter;
      appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom2.default.findDOMNode(this);
          if (node)
            forceReflow(node);
        }
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [import_react_dom2.default.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config_default.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : import_react_dom2.default.findDOMNode(this);
    if (!exit || config_default.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom2.default.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout2 != null) {
      setTimeout(this.nextCallback, timeout2);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children = _this$props.children, _in = _this$props.in, _mountOnEnter = _this$props.mountOnEnter, _unmountOnExit = _this$props.unmountOnExit, _appear = _this$props.appear, _enter = _this$props.enter, _exit = _this$props.exit, _timeout = _this$props.timeout, _addEndListener = _this$props.addEndListener, _onEnter = _this$props.onEnter, _onEntering = _this$props.onEntering, _onEntered = _this$props.onEntered, _onExit = _this$props.onExit, _onExiting = _this$props.onExiting, _onExited = _this$props.onExited, _nodeRef = _this$props.nodeRef, childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ import_react141.default.createElement(TransitionGroupContext_default.Provider, {
        value: null
      }, typeof children === "function" ? children(status, childProps) : import_react141.default.cloneElement(import_react141.default.Children.only(children), childProps))
    );
  };
  return Transition2;
}(import_react141.default.Component);
Transition.contextType = TransitionGroupContext_default;
Transition.propTypes = true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: import_prop_types2.default.shape({
    current: typeof Element === "undefined" ? import_prop_types2.default.any : function(propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return import_prop_types2.default.instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: import_prop_types2.default.oneOfType([import_prop_types2.default.func.isRequired, import_prop_types2.default.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: import_prop_types2.default.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: import_prop_types2.default.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: import_prop_types2.default.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: import_prop_types2.default.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: import_prop_types2.default.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: import_prop_types2.default.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener)
      pt = pt.isRequired;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return pt.apply(void 0, [props].concat(args));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: import_prop_types2.default.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: import_prop_types2.default.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: import_prop_types2.default.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: import_prop_types2.default.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: import_prop_types2.default.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: import_prop_types2.default.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: import_prop_types2.default.func
} : {};
function noop9() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop9,
  onEntering: noop9,
  onEntered: noop9,
  onExit: noop9,
  onExiting: noop9,
  onExited: noop9
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition_default = Transition;

// node_modules/react-transition-group/esm/CSSTransition.js
var _addClass = function addClass2(node, classes) {
  return node && classes && classes.split(" ").forEach(function(c) {
    return addClass(node, c);
  });
};
var removeClass2 = function removeClass3(node, classes) {
  return node && classes && classes.split(" ").forEach(function(c) {
    return removeClass(node, c);
  });
};
var CSSTransition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(CSSTransition2, _React$Component);
  function CSSTransition2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };
    _this.onEnter = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument[0], appearing = _this$resolveArgument[1];
      _this.removeClasses(node, "exit");
      _this.addClass(node, appearing ? "appear" : "enter", "base");
      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };
    _this.onEntering = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument2[0], appearing = _this$resolveArgument2[1];
      var type = appearing ? "appear" : "enter";
      _this.addClass(node, type, "active");
      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };
    _this.onEntered = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument3[0], appearing = _this$resolveArgument3[1];
      var type = appearing ? "appear" : "enter";
      _this.removeClasses(node, type);
      _this.addClass(node, type, "done");
      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };
    _this.onExit = function(maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode), node = _this$resolveArgument4[0];
      _this.removeClasses(node, "appear");
      _this.removeClasses(node, "enter");
      _this.addClass(node, "exit", "base");
      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };
    _this.onExiting = function(maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode), node = _this$resolveArgument5[0];
      _this.addClass(node, "exit", "active");
      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };
    _this.onExited = function(maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode), node = _this$resolveArgument6[0];
      _this.removeClasses(node, "exit");
      _this.addClass(node, "exit", "done");
      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };
    _this.resolveArguments = function(maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] : [maybeNode, maybeAppearing];
    };
    _this.getClassNames = function(type) {
      var classNames2 = _this.props.classNames;
      var isStringClassNames = typeof classNames2 === "string";
      var prefix = isStringClassNames && classNames2 ? classNames2 + "-" : "";
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames2[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames2[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames2[type + "Done"];
      return {
        baseClassName,
        activeClassName,
        doneClassName
      };
    };
    return _this;
  }
  var _proto = CSSTransition2.prototype;
  _proto.addClass = function addClass3(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];
    var _this$getClassNames = this.getClassNames("enter"), doneClassName = _this$getClassNames.doneClassName;
    if (type === "appear" && phase === "done" && doneClassName) {
      className += " " + doneClassName;
    }
    if (phase === "active") {
      if (node)
        forceReflow(node);
    }
    if (className) {
      this.appliedClasses[type][phase] = className;
      _addClass(node, className);
    }
  };
  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type], baseClassName = _this$appliedClasses$.base, activeClassName = _this$appliedClasses$.active, doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};
    if (baseClassName) {
      removeClass2(node, baseClassName);
    }
    if (activeClassName) {
      removeClass2(node, activeClassName);
    }
    if (doneClassName) {
      removeClass2(node, doneClassName);
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, _ = _this$props.classNames, props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);
    return /* @__PURE__ */ import_react142.default.createElement(Transition_default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };
  return CSSTransition2;
}(import_react142.default.Component);
CSSTransition.defaultProps = {
  classNames: ""
};
CSSTransition.propTypes = true ? _extends({}, Transition_default.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: classNamesShape,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: import_prop_types3.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: import_prop_types3.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: import_prop_types3.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: import_prop_types3.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: import_prop_types3.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: import_prop_types3.default.func
}) : {};
var CSSTransition_default = CSSTransition;

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e) {
  if (void 0 === e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

// node_modules/react-transition-group/esm/TransitionGroup.js
var import_prop_types4 = __toESM(require_prop_types());
var import_react144 = __toESM(require_react());

// node_modules/react-transition-group/esm/utils/ChildMapping.js
var import_react143 = __toESM(require_react());
function getChildMapping(children, mapFn) {
  var mapper = function mapper2(child) {
    return mapFn && (0, import_react143.isValidElement)(child) ? mapFn(child) : child;
  };
  var result = /* @__PURE__ */ Object.create(null);
  if (children)
    import_react143.Children.map(children, function(c) {
      return c;
    }).forEach(function(child) {
      result[child.key] = mapper(child);
    });
  return result;
}
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};
  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  }
  var nextKeysPending = /* @__PURE__ */ Object.create(null);
  var pendingKeys = [];
  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }
  var i;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }
  return childMapping;
}
function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}
function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function(child) {
    return (0, import_react143.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, "appear", props),
      enter: getProp(child, "enter", props),
      exit: getProp(child, "exit", props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function(key) {
    var child = children[key];
    if (!(0, import_react143.isValidElement)(child))
      return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, import_react143.isValidElement)(prevChild) && !prevChild.props.in;
    if (hasNext && (!hasPrev || isLeaving)) {
      children[key] = (0, import_react143.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      children[key] = (0, import_react143.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, import_react143.isValidElement)(prevChild)) {
      children[key] = (0, import_react143.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    }
  });
  return children;
}

// node_modules/react-transition-group/esm/TransitionGroup.js
var values = Object.values || function(obj) {
  return Object.keys(obj).map(function(k) {
    return obj[k];
  });
};
var defaultProps = {
  component: "div",
  childFactory: function childFactory(child) {
    return child;
  }
};
var TransitionGroup = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(TransitionGroup2, _React$Component);
  function TransitionGroup2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited,
      firstRender: true
    };
    return _this;
  }
  var _proto = TransitionGroup2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };
  TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };
  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping)
      return;
    if (child.props.onExited) {
      child.props.onExited(node);
    }
    if (this.mounted) {
      this.setState(function(state) {
        var children = _extends({}, state.children);
        delete children[child.key];
        return {
          children
        };
      });
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, Component3 = _this$props.component, childFactory2 = _this$props.childFactory, props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory2);
    delete props.appear;
    delete props.enter;
    delete props.exit;
    if (Component3 === null) {
      return /* @__PURE__ */ import_react144.default.createElement(TransitionGroupContext_default.Provider, {
        value: contextValue
      }, children);
    }
    return /* @__PURE__ */ import_react144.default.createElement(TransitionGroupContext_default.Provider, {
      value: contextValue
    }, /* @__PURE__ */ import_react144.default.createElement(Component3, props, children));
  };
  return TransitionGroup2;
}(import_react144.default.Component);
TransitionGroup.propTypes = true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: import_prop_types4.default.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: import_prop_types4.default.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: import_prop_types4.default.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: import_prop_types4.default.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: import_prop_types4.default.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: import_prop_types4.default.func
} : {};
TransitionGroup.defaultProps = defaultProps;
var TransitionGroup_default = TransitionGroup;

// node_modules/@shopify/polaris/build/esm/components/Modal/Modal.scss.js
var styles46 = {
  "Body": "Polaris-Modal__Body",
  "IFrame": "Polaris-Modal__IFrame"
};

// node_modules/@shopify/polaris/build/esm/components/Modal/components/Section/Section.js
var import_react145 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Modal/components/Section/Section.scss.js
var styles47 = {
  "Section": "Polaris-Modal-Section",
  "titleHidden": "Polaris-Modal-Section--titleHidden"
};

// node_modules/@shopify/polaris/build/esm/components/Modal/components/Section/Section.js
function Section6({
  children,
  flush = false,
  subdued = false,
  titleHidden = false
}) {
  const className = classNames(styles47.Section, titleHidden && styles47.titleHidden);
  return /* @__PURE__ */ import_react145.default.createElement("div", {
    className
  }, /* @__PURE__ */ import_react145.default.createElement(Box, Object.assign({
    as: "section",
    padding: flush ? "0" : "5"
  }, titleHidden && {
    paddingInlineEnd: "0"
  }, subdued && {
    background: "bg-subdued"
  }), children));
}

// node_modules/@shopify/polaris/build/esm/components/Modal/components/Dialog/Dialog.js
var import_react149 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Modal/components/Dialog/Dialog.scss.js
var styles48 = {
  "Container": "Polaris-Modal-Dialog__Container",
  "Dialog": "Polaris-Modal-Dialog",
  "Modal": "Polaris-Modal-Dialog__Modal",
  "limitHeight": "Polaris-Modal-Dialog--limitHeight",
  "sizeSmall": "Polaris-Modal-Dialog--sizeSmall",
  "sizeLarge": "Polaris-Modal-Dialog--sizeLarge",
  "fullScreen": "Polaris-Modal-Dialog--fullScreen",
  "animateFadeUp": "Polaris-Modal-Dialog--animateFadeUp",
  "entering": "Polaris-Modal-Dialog--entering",
  "exiting": "Polaris-Modal-Dialog--exiting",
  "exited": "Polaris-Modal-Dialog--exited",
  "entered": "Polaris-Modal-Dialog--entered"
};

// node_modules/@shopify/polaris/build/esm/components/TrapFocus/TrapFocus.js
var import_react148 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/focus-manager/hooks.js
var import_react146 = __toESM(require_react());
function useFocusManager({
  trapping
}) {
  const focusManager = (0, import_react146.useContext)(FocusManagerContext);
  const id = useUniqueId();
  if (!focusManager) {
    throw new MissingAppProviderError("No FocusManager was provided.");
  }
  const {
    trapFocusList,
    add: addFocusItem,
    remove: removeFocusItem
  } = focusManager;
  const canSafelyFocus = trapFocusList[0] === id;
  const value = (0, import_react146.useMemo)(() => ({
    canSafelyFocus
  }), [canSafelyFocus]);
  (0, import_react146.useEffect)(() => {
    if (!trapping)
      return;
    addFocusItem(id);
    return () => {
      removeFocusItem(id);
    };
  }, [addFocusItem, id, removeFocusItem, trapping]);
  return value;
}

// node_modules/@shopify/polaris/build/esm/components/Focus/Focus.js
var import_react147 = __toESM(require_react());
var Focus = /* @__PURE__ */ (0, import_react147.memo)(function Focus2({
  children,
  disabled,
  root
}) {
  (0, import_react147.useEffect)(() => {
    if (disabled || !root) {
      return;
    }
    const node = isRef(root) ? root.current : root;
    if (!node || node.querySelector("[autofocus]")) {
      return;
    }
    focusFirstFocusableNode(node, false);
  }, [disabled, root]);
  return /* @__PURE__ */ import_react147.default.createElement(import_react147.default.Fragment, null, children);
});
function isRef(ref) {
  return ref.current !== void 0;
}

// node_modules/@shopify/polaris/build/esm/components/TrapFocus/TrapFocus.js
function TrapFocus({
  trapping = true,
  children
}) {
  const {
    canSafelyFocus
  } = useFocusManager({
    trapping
  });
  const focusTrapWrapper = (0, import_react148.useRef)(null);
  const [disableFocus, setDisableFocus] = (0, import_react148.useState)(true);
  (0, import_react148.useEffect)(() => {
    const disable = canSafelyFocus && !(focusTrapWrapper.current && focusTrapWrapper.current.contains(document.activeElement)) ? !trapping : true;
    setDisableFocus(disable);
  }, [canSafelyFocus, trapping]);
  const handleFocusIn = (event) => {
    const containerContentsHaveFocus = focusTrapWrapper.current && focusTrapWrapper.current.contains(document.activeElement);
    if (trapping === false || !focusTrapWrapper.current || containerContentsHaveFocus || event.target instanceof Element && event.target.matches(`${portal.selector} *`)) {
      return;
    }
    if (canSafelyFocus && event.target instanceof HTMLElement && focusTrapWrapper.current !== event.target && !focusTrapWrapper.current.contains(event.target)) {
      focusFirstFocusableNode(focusTrapWrapper.current);
    }
  };
  const handleTab = (event) => {
    if (trapping === false || !focusTrapWrapper.current) {
      return;
    }
    const firstFocusableNode = findFirstKeyboardFocusableNode(focusTrapWrapper.current);
    const lastFocusableNode = findLastKeyboardFocusableNode(focusTrapWrapper.current);
    if (event.target === lastFocusableNode && !event.shiftKey) {
      event.preventDefault();
      focusFirstKeyboardFocusableNode(focusTrapWrapper.current);
    }
    if (event.target === firstFocusableNode && event.shiftKey) {
      event.preventDefault();
      focusLastKeyboardFocusableNode(focusTrapWrapper.current);
    }
  };
  return /* @__PURE__ */ import_react148.default.createElement(Focus, {
    disabled: disableFocus,
    root: focusTrapWrapper.current
  }, /* @__PURE__ */ import_react148.default.createElement("div", {
    ref: focusTrapWrapper
  }, /* @__PURE__ */ import_react148.default.createElement(EventListener, {
    event: "focusin",
    handler: handleFocusIn
  }), /* @__PURE__ */ import_react148.default.createElement(KeypressListener, {
    keyCode: Key.Tab,
    keyEvent: "keydown",
    handler: handleTab
  }), children));
}

// node_modules/@shopify/polaris/build/esm/components/Modal/components/Dialog/Dialog.js
function Dialog({
  instant,
  labelledBy,
  children,
  onClose,
  onExited,
  onEntered,
  large,
  small,
  limitHeight,
  fullScreen,
  setClosing,
  ...props
}) {
  const containerNode = (0, import_react149.useRef)(null);
  const classes = classNames(styles48.Modal, small && styles48.sizeSmall, large && styles48.sizeLarge, limitHeight && styles48.limitHeight, fullScreen && styles48.fullScreen);
  const TransitionChild = instant ? Transition_default : FadeUp;
  (0, import_react149.useEffect)(() => {
    containerNode.current && !containerNode.current.contains(document.activeElement) && focusFirstFocusableNode(containerNode.current);
  }, []);
  const handleKeyDown3 = () => {
    if (setClosing) {
      setClosing(true);
    }
  };
  const handleKeyUp = () => {
    if (setClosing) {
      setClosing(false);
    }
    onClose();
  };
  return /* @__PURE__ */ import_react149.default.createElement(TransitionChild, Object.assign({}, props, {
    nodeRef: containerNode,
    mountOnEnter: true,
    unmountOnExit: true,
    timeout: parseInt(motion2["duration-200"], 10),
    onEntered,
    onExited
  }), /* @__PURE__ */ import_react149.default.createElement("div", {
    className: styles48.Container,
    "data-polaris-layer": true,
    "data-polaris-overlay": true,
    ref: containerNode
  }, /* @__PURE__ */ import_react149.default.createElement(TrapFocus, null, /* @__PURE__ */ import_react149.default.createElement("div", {
    role: "dialog",
    "aria-modal": true,
    "aria-label": labelledBy,
    "aria-labelledby": labelledBy,
    tabIndex: -1,
    className: styles48.Dialog
  }, /* @__PURE__ */ import_react149.default.createElement("div", {
    className: classes
  }, /* @__PURE__ */ import_react149.default.createElement(KeypressListener, {
    keyCode: Key.Escape,
    keyEvent: "keydown",
    handler: handleKeyDown3
  }), /* @__PURE__ */ import_react149.default.createElement(KeypressListener, {
    keyCode: Key.Escape,
    handler: handleKeyUp
  }), children)))));
}
var fadeUpClasses = {
  appear: classNames(styles48.animateFadeUp, styles48.entering),
  appearActive: classNames(styles48.animateFadeUp, styles48.entered),
  enter: classNames(styles48.animateFadeUp, styles48.entering),
  enterActive: classNames(styles48.animateFadeUp, styles48.entered),
  exit: classNames(styles48.animateFadeUp, styles48.exiting),
  exitActive: classNames(styles48.animateFadeUp, styles48.exited)
};
function FadeUp({
  children,
  ...props
}) {
  return /* @__PURE__ */ import_react149.default.createElement(CSSTransition_default, Object.assign({}, props, {
    classNames: fadeUpClasses
  }), children);
}

// node_modules/@shopify/polaris/build/esm/components/Modal/components/Header/Header.js
var import_react152 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/HorizontalGrid/HorizontalGrid.js
var import_react150 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/HorizontalGrid/HorizontalGrid.scss.js
var styles49 = {
  "HorizontalGrid": "Polaris-HorizontalGrid"
};

// node_modules/@shopify/polaris/build/esm/components/HorizontalGrid/HorizontalGrid.js
function HorizontalGrid({
  children,
  columns,
  gap,
  alignItems
}) {
  const style = {
    ...getResponsiveValue("horizontal-grid", "grid-template-columns", formatHorizontalGrid(columns)),
    ...getResponsiveProps("horizontal-grid", "gap", "space", gap),
    "--pc-horizontal-grid-align-items": alignItems
  };
  return /* @__PURE__ */ import_react150.default.createElement("div", {
    className: styles49.HorizontalGrid,
    style: sanitizeCustomProperties(style)
  }, children);
}
function formatHorizontalGrid(columns) {
  if (typeof columns === "object" && columns !== null && !Array.isArray(columns)) {
    return Object.fromEntries(Object.entries(columns).map(([breakpointAlias, breakpointHorizontalGrid]) => [breakpointAlias, getColumnValue(breakpointHorizontalGrid)]));
  }
  return getColumnValue(columns);
}
function getColumnValue(columns) {
  if (!columns)
    return void 0;
  if (typeof columns === "number" || !isNaN(Number(columns))) {
    return `repeat(${Number(columns)}, minmax(0, 1fr))`;
  }
  if (typeof columns === "string")
    return columns;
  return columns.map((column) => {
    switch (column) {
      case "oneThird":
        return "minmax(0, 1fr)";
      case "oneHalf":
        return "minmax(0, 1fr)";
      case "twoThirds":
        return "minmax(0, 2fr)";
    }
  }).join(" ");
}

// node_modules/@shopify/polaris/build/esm/components/Modal/components/CloseButton/CloseButton.js
var import_react151 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Modal/components/CloseButton/CloseButton.scss.js
var styles50 = {
  "CloseButton": "Polaris-Modal-CloseButton",
  "pressed": "Polaris-Modal-CloseButton--pressed",
  "titleHidden": "Polaris-Modal-CloseButton--titleHidden"
};

// node_modules/@shopify/polaris/build/esm/components/Modal/components/CloseButton/CloseButton.js
function CloseButton({
  pressed,
  titleHidden = false,
  onClick
}) {
  const i18n = useI18n();
  return /* @__PURE__ */ import_react151.default.createElement("button", {
    onClick,
    className: classNames(styles50.CloseButton, titleHidden && styles50.titleHidden, pressed && styles50.pressed),
    "aria-label": i18n.translate("Polaris.Common.close")
  }, /* @__PURE__ */ import_react151.default.createElement(Icon, {
    source: SvgMobileCancelMajor,
    color: "base"
  }));
}

// node_modules/@shopify/polaris/build/esm/components/Modal/components/Header/Header.js
function Header4({
  id,
  children,
  closing,
  titleHidden,
  onClose
}) {
  const titleHiddenMarkup = /* @__PURE__ */ import_react152.default.createElement(Box, {
    position: "absolute",
    insetInlineEnd: "0",
    zIndex: "1"
  }, /* @__PURE__ */ import_react152.default.createElement(HorizontalStack, {
    gap: "4",
    align: "end",
    blockAlign: "center"
  }, /* @__PURE__ */ import_react152.default.createElement(CloseButton, {
    titleHidden,
    onClick: onClose
  })));
  if (titleHidden || !children) {
    return titleHiddenMarkup;
  }
  return /* @__PURE__ */ import_react152.default.createElement(Box, {
    paddingBlockStart: "4",
    paddingBlockEnd: "4",
    paddingInlineStart: "5",
    paddingInlineEnd: "5",
    borderBlockEndWidth: "1",
    borderColor: "border-subdued"
  }, /* @__PURE__ */ import_react152.default.createElement(HorizontalGrid, {
    columns: {
      xs: "1fr auto"
    },
    gap: "4"
  }, /* @__PURE__ */ import_react152.default.createElement(HorizontalStack, {
    gap: "4",
    blockAlign: "center"
  }, /* @__PURE__ */ import_react152.default.createElement(Text, {
    id,
    as: "h2",
    variant: "headingLg",
    breakWord: true
  }, children)), /* @__PURE__ */ import_react152.default.createElement(CloseButton, {
    pressed: closing,
    titleHidden,
    onClick: onClose
  })));
}

// node_modules/@shopify/polaris/build/esm/components/Backdrop/Backdrop.js
var import_react155 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Backdrop/Backdrop.scss.js
var styles51 = {
  "Backdrop": "Polaris-Backdrop",
  "transparent": "Polaris-Backdrop--transparent",
  "belowNavigation": "Polaris-Backdrop--belowNavigation"
};

// node_modules/@shopify/polaris/build/esm/components/ScrollLock/ScrollLock.js
var import_react154 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/scroll-lock-manager/hooks.js
var import_react153 = __toESM(require_react());
function useScrollLockManager() {
  const scrollLockManager = (0, import_react153.useContext)(ScrollLockManagerContext);
  if (!scrollLockManager) {
    throw new MissingAppProviderError("No ScrollLockManager was provided.");
  }
  return scrollLockManager;
}

// node_modules/@shopify/polaris/build/esm/components/ScrollLock/ScrollLock.js
function ScrollLock(_) {
  const scrollLockManager = useScrollLockManager();
  (0, import_react154.useEffect)(() => {
    scrollLockManager.registerScrollLock();
    return () => {
      scrollLockManager.unregisterScrollLock();
    };
  }, [scrollLockManager]);
  return null;
}

// node_modules/@shopify/polaris/build/esm/components/Backdrop/Backdrop.js
function Backdrop(props) {
  const {
    onClick,
    onTouchStart,
    belowNavigation,
    transparent,
    setClosing
  } = props;
  const className = classNames(styles51.Backdrop, belowNavigation && styles51.belowNavigation, transparent && styles51.transparent);
  const handleMouseDown = () => {
    if (setClosing) {
      setClosing(true);
    }
  };
  const handleClick = () => {
    if (setClosing) {
      setClosing(false);
    }
    if (onClick) {
      onClick();
    }
  };
  return /* @__PURE__ */ import_react155.default.createElement(import_react155.default.Fragment, null, /* @__PURE__ */ import_react155.default.createElement(ScrollLock, null), /* @__PURE__ */ import_react155.default.createElement("div", {
    className,
    onClick: handleClick,
    onTouchStart,
    onMouseDown: handleMouseDown
  }));
}

// node_modules/@shopify/polaris/build/esm/components/Modal/components/Footer/Footer.js
var import_react156 = __toESM(require_react());
function Footer({
  primaryAction,
  secondaryActions,
  children
}) {
  const primaryActionButton = primaryAction && buttonsFrom(primaryAction, {
    primary: true
  }) || null;
  const secondaryActionButtons = secondaryActions && buttonsFrom(secondaryActions) || null;
  const actions = primaryActionButton || secondaryActionButtons ? /* @__PURE__ */ import_react156.default.createElement(HorizontalStack, {
    gap: "2"
  }, secondaryActionButtons, primaryActionButton) : null;
  return /* @__PURE__ */ import_react156.default.createElement(HorizontalStack, {
    gap: "4",
    blockAlign: "center"
  }, /* @__PURE__ */ import_react156.default.createElement(Box, {
    borderColor: "border-subdued",
    borderBlockStartWidth: "1",
    minHeight: "var(--p-space-16)",
    padding: "4",
    width: "100%"
  }, /* @__PURE__ */ import_react156.default.createElement(HorizontalStack, {
    gap: "4",
    blockAlign: "center",
    align: "space-between"
  }, /* @__PURE__ */ import_react156.default.createElement(Box, null, children), actions)));
}

// node_modules/@shopify/polaris/build/esm/components/Modal/Modal.js
var IFRAME_LOADING_HEIGHT = 200;
var DEFAULT_IFRAME_CONTENT_HEIGHT = 400;
var Modal = function Modal2({
  children,
  title,
  titleHidden = false,
  src,
  iFrameName,
  open,
  instant,
  sectioned,
  loading,
  large,
  small,
  limitHeight,
  footer,
  primaryAction,
  secondaryActions,
  onScrolledToBottom,
  activator,
  onClose,
  onIFrameLoad,
  onTransitionEnd,
  noScroll,
  fullScreen
}) {
  const [iframeHeight, setIframeHeight] = (0, import_react157.useState)(IFRAME_LOADING_HEIGHT);
  const [closing, setClosing] = (0, import_react157.useState)(false);
  const headerId = useUniqueId("modal-header");
  const activatorRef = (0, import_react157.useRef)(null);
  const i18n = useI18n();
  const iframeTitle = i18n.translate("Polaris.Modal.iFrameTitle");
  let dialog;
  let backdrop;
  const handleEntered = (0, import_react157.useCallback)(() => {
    if (onTransitionEnd) {
      onTransitionEnd();
    }
  }, [onTransitionEnd]);
  const handleExited = (0, import_react157.useCallback)(() => {
    setIframeHeight(IFRAME_LOADING_HEIGHT);
    const activatorElement = activator && isRef2(activator) ? activator && activator.current : activatorRef.current;
    if (activatorElement) {
      requestAnimationFrame(() => focusFirstFocusableNode(activatorElement));
    }
  }, [activator]);
  const handleIFrameLoad = (0, import_react157.useCallback)((evt) => {
    const iframe = evt.target;
    if (iframe && iframe.contentWindow) {
      try {
        setIframeHeight(iframe.contentWindow.document.body.scrollHeight);
      } catch (_error) {
        setIframeHeight(DEFAULT_IFRAME_CONTENT_HEIGHT);
      }
    }
    if (onIFrameLoad != null) {
      onIFrameLoad(evt);
    }
  }, [onIFrameLoad]);
  if (open) {
    const footerMarkup = !footer && !primaryAction && !secondaryActions ? null : /* @__PURE__ */ import_react157.default.createElement(Footer, {
      primaryAction,
      secondaryActions
    }, footer);
    const content = sectioned ? wrapWithComponent(children, Section6, {
      titleHidden
    }) : children;
    const body = loading ? /* @__PURE__ */ import_react157.default.createElement(Box, {
      padding: "4"
    }, /* @__PURE__ */ import_react157.default.createElement(HorizontalStack, {
      gap: "4",
      align: "center",
      blockAlign: "center"
    }, /* @__PURE__ */ import_react157.default.createElement(Spinner, null))) : content;
    const scrollContainerMarkup = noScroll ? /* @__PURE__ */ import_react157.default.createElement(Box, {
      width: "100%",
      overflowX: "hidden"
    }, body) : /* @__PURE__ */ import_react157.default.createElement(Scrollable, {
      shadow: true,
      className: styles46.Body,
      onScrolledToBottom
    }, body);
    const bodyMarkup = src ? /* @__PURE__ */ import_react157.default.createElement("iframe", {
      name: iFrameName,
      title: iframeTitle,
      src,
      className: styles46.IFrame,
      onLoad: handleIFrameLoad,
      style: {
        height: `${iframeHeight}px`
      }
    }) : scrollContainerMarkup;
    dialog = /* @__PURE__ */ import_react157.default.createElement(Dialog, {
      instant,
      labelledBy: headerId,
      onClose,
      onEntered: handleEntered,
      onExited: handleExited,
      large,
      small,
      limitHeight,
      fullScreen,
      setClosing
    }, /* @__PURE__ */ import_react157.default.createElement(Header4, {
      titleHidden,
      id: headerId,
      closing,
      onClose
    }, title), bodyMarkup, footerMarkup);
    backdrop = /* @__PURE__ */ import_react157.default.createElement(Backdrop, {
      setClosing,
      onClick: onClose
    });
  }
  const animated = !instant;
  const activatorMarkup = activator && !isRef2(activator) ? /* @__PURE__ */ import_react157.default.createElement(Box, {
    ref: activatorRef
  }, activator) : null;
  return /* @__PURE__ */ import_react157.default.createElement(WithinContentContext.Provider, {
    value: true
  }, activatorMarkup, /* @__PURE__ */ import_react157.default.createElement(Portal, {
    idPrefix: "modal"
  }, /* @__PURE__ */ import_react157.default.createElement(TransitionGroup_default, {
    appear: animated,
    enter: animated,
    exit: animated
  }, dialog), backdrop));
};
function isRef2(ref) {
  return Object.prototype.hasOwnProperty.call(ref, "current");
}
Modal.Section = Section6;

// node_modules/@shopify/polaris/build/esm/utilities/banner-context.js
var import_react158 = __toESM(require_react());
var BannerContext = /* @__PURE__ */ (0, import_react158.createContext)(false);

// node_modules/@shopify/polaris/build/esm/components/Indicator/Indicator.js
var import_react159 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Indicator/Indicator.scss.js
var styles52 = {
  "Indicator": "Polaris-Indicator",
  "pulseIndicator": "Polaris-Indicator--pulseIndicator"
};

// node_modules/@shopify/polaris/build/esm/components/Indicator/Indicator.js
function Indicator({
  pulse = true
}) {
  const className = classNames(styles52.Indicator, pulse && styles52.pulseIndicator);
  return /* @__PURE__ */ import_react159.default.createElement("span", {
    className
  });
}

// node_modules/@shopify/polaris/build/esm/utilities/frame/hooks.js
var import_react161 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/frame/context.js
var import_react160 = __toESM(require_react());
var FrameContext = /* @__PURE__ */ (0, import_react160.createContext)(void 0);

// node_modules/@shopify/polaris/build/esm/utilities/frame/hooks.js
function useFrame() {
  const frame = (0, import_react161.useContext)(FrameContext);
  if (!frame) {
    throw new Error("No Frame context was provided. Your component must be wrapped in a <Frame> component. See https://polaris.shopify.com/components/frame for implementation instructions.");
  }
  return frame;
}

// node_modules/@shopify/polaris/build/esm/components/Frame/Frame.js
var import_react172 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/set-root-property.js
function setRootProperty(name, value, node) {
  if (!document)
    return;
  const element = node || document.documentElement;
  element.style.setProperty(name, value);
}

// node_modules/@shopify/polaris/build/esm/components/Frame/Frame.scss.js
var styles53 = {
  "Frame": "Polaris-Frame",
  "Navigation": "Polaris-Frame__Navigation",
  "hasTopBar": "Polaris-Frame--hasTopBar",
  "Navigation-enter": "Polaris-Frame__Navigation--enter",
  "Navigation-enterActive": "Polaris-Frame__Navigation--enterActive",
  "Navigation-exit": "Polaris-Frame__Navigation--exit",
  "Navigation-exitActive": "Polaris-Frame__Navigation--exitActive",
  "NavigationDismiss": "Polaris-Frame__NavigationDismiss",
  "Navigation-visible": "Polaris-Frame__Navigation--visible",
  "TopBar": "Polaris-Frame__TopBar",
  "ContextualSaveBar": "Polaris-Frame__ContextualSaveBar",
  "Main": "Polaris-Frame__Main",
  "hasNav": "Polaris-Frame--hasNav",
  "Content": "Polaris-Frame__Content",
  "GlobalRibbonContainer": "Polaris-Frame__GlobalRibbonContainer",
  "LoadingBar": "Polaris-Frame__LoadingBar",
  "Skip": "Polaris-Frame__Skip",
  "focused": "Polaris-Frame--focused",
  "pressed": "Polaris-Frame--pressed"
};

// node_modules/@shopify/polaris/build/esm/components/Frame/components/Loading/Loading.js
var import_react163 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/use-is-mounted-ref.js
var import_react162 = __toESM(require_react());
function useIsMountedRef() {
  const isMounted = (0, import_react162.useRef)(false);
  (0, import_react162.useEffect)(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
}

// node_modules/@shopify/polaris/build/esm/components/Frame/components/Loading/Loading.scss.js
var styles54 = {
  "Loading": "Polaris-Frame-Loading",
  "Level": "Polaris-Frame-Loading__Level"
};

// node_modules/@shopify/polaris/build/esm/components/Frame/components/Loading/Loading.js
var STUCK_THRESHOLD = 99;
function Loading() {
  const i18n = useI18n();
  const isMountedRef = useIsMountedRef();
  const [progress, setProgress] = (0, import_react163.useState)(0);
  const [animating, setAnimating] = (0, import_react163.useState)(false);
  (0, import_react163.useEffect)(() => {
    if (progress >= STUCK_THRESHOLD || animating) {
      return;
    }
    requestAnimationFrame(() => {
      if (!isMountedRef.current)
        return;
      const step = Math.max((STUCK_THRESHOLD - progress) / 10, 1);
      setAnimating(true);
      setProgress(progress + step);
    });
  }, [progress, animating, isMountedRef]);
  const customStyles = {
    transform: `scaleX(${Math.floor(progress) / 100})`
  };
  return /* @__PURE__ */ import_react163.default.createElement("div", {
    className: styles54.Loading,
    "aria-valuenow": progress,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    role: "progressbar",
    "aria-label": i18n.translate("Polaris.Loading.label")
  }, /* @__PURE__ */ import_react163.default.createElement("div", {
    className: styles54.Level,
    style: customStyles,
    onTransitionEnd: () => setAnimating(false)
  }));
}

// node_modules/@shopify/polaris/build/esm/components/Frame/components/CSSAnimation/CSSAnimation.js
var import_react164 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Frame/components/CSSAnimation/CSSAnimation.scss.js
var styles55 = {
  "startFade": "Polaris-Frame-CSSAnimation--startFade",
  "endFade": "Polaris-Frame-CSSAnimation--endFade"
};

// node_modules/@shopify/polaris/build/esm/components/Frame/components/CSSAnimation/CSSAnimation.js
var TransitionStatus2;
(function(TransitionStatus3) {
  TransitionStatus3["Entering"] = "entering";
  TransitionStatus3["Entered"] = "entered";
  TransitionStatus3["Exiting"] = "exiting";
  TransitionStatus3["Exited"] = "exited";
})(TransitionStatus2 || (TransitionStatus2 = {}));
function CSSAnimation({
  in: inProp,
  className,
  type,
  children
}) {
  const [transitionStatus, setTransitionStatus] = (0, import_react164.useState)(inProp ? TransitionStatus2.Entering : TransitionStatus2.Exited);
  const isMounted = (0, import_react164.useRef)(false);
  const node = (0, import_react164.useRef)(null);
  (0, import_react164.useEffect)(() => {
    if (!isMounted.current)
      return;
    transitionStatus === TransitionStatus2.Entering && changeTransitionStatus(TransitionStatus2.Entered);
  }, [transitionStatus]);
  (0, import_react164.useEffect)(() => {
    if (!isMounted.current)
      return;
    inProp && changeTransitionStatus(TransitionStatus2.Entering);
    !inProp && changeTransitionStatus(TransitionStatus2.Exiting);
  }, [inProp]);
  (0, import_react164.useEffect)(() => {
    isMounted.current = true;
  }, []);
  const wrapperClassName = classNames(className, styles55[variationName("start", type)], inProp && styles55[variationName("end", type)]);
  const content = transitionStatus === TransitionStatus2.Exited && !inProp ? null : children;
  return /* @__PURE__ */ import_react164.default.createElement("div", {
    className: wrapperClassName,
    ref: node,
    onTransitionEnd: handleTransitionEnd
  }, content);
  function handleTransitionEnd() {
    transitionStatus === TransitionStatus2.Exiting && changeTransitionStatus(TransitionStatus2.Exited);
  }
  function changeTransitionStatus(transitionStatus2) {
    setTransitionStatus(transitionStatus2);
    if (transitionStatus2 === TransitionStatus2.Entering)
      node.current && node.current.getBoundingClientRect();
  }
}

// node_modules/@shopify/polaris/build/esm/components/Frame/components/ContextualSaveBar/ContextualSaveBar.js
var import_react166 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/is-object.js
function isObject(value) {
  const type = typeof value;
  return value != null && (type === "object" || type === "function");
}

// node_modules/@shopify/polaris/build/esm/utilities/pluck-deep.js
function pluckDeep(obj, key) {
  if (!obj) {
    return null;
  }
  const keys = Object.keys(obj);
  for (const currKey of keys) {
    if (currKey === key) {
      return obj[key];
    }
    if (isObject(obj[currKey])) {
      const plucked = pluckDeep(obj[currKey], key);
      if (plucked) {
        return plucked;
      }
    }
  }
  return null;
}

// node_modules/@shopify/polaris/build/esm/utilities/get-width.js
function getWidth(value = {}, defaultWidth = 0, key = "width") {
  const width = typeof value === "number" ? value : pluckDeep(value, key);
  return width ? `${width}px` : `${defaultWidth}px`;
}

// node_modules/@shopify/polaris/build/esm/components/Frame/components/ContextualSaveBar/ContextualSaveBar.scss.js
var styles56 = {
  "ContextualSaveBar": "Polaris-Frame-ContextualSaveBar",
  "LogoContainer": "Polaris-Frame-ContextualSaveBar__LogoContainer",
  "ContextControl": "Polaris-Frame-ContextualSaveBar__ContextControl",
  "Contents": "Polaris-Frame-ContextualSaveBar__Contents",
  "fullWidth": "Polaris-Frame-ContextualSaveBar--fullWidth",
  "ActionContainer": "Polaris-Frame-ContextualSaveBar__ActionContainer",
  "Action": "Polaris-Frame-ContextualSaveBar__Action"
};

// node_modules/@shopify/polaris/build/esm/components/Frame/components/ContextualSaveBar/components/DiscardConfirmationModal/DiscardConfirmationModal.js
var import_react165 = __toESM(require_react());
function DiscardConfirmationModal({
  open,
  onDiscard,
  onCancel
}) {
  const i18n = useI18n();
  return /* @__PURE__ */ import_react165.default.createElement(Modal, {
    title: i18n.translate("Polaris.DiscardConfirmationModal.title"),
    open,
    onClose: onCancel,
    primaryAction: {
      content: i18n.translate("Polaris.DiscardConfirmationModal.primaryAction"),
      destructive: true,
      onAction: onDiscard
    },
    secondaryActions: [{
      content: i18n.translate("Polaris.DiscardConfirmationModal.secondaryAction"),
      onAction: onCancel
    }],
    sectioned: true
  }, i18n.translate("Polaris.DiscardConfirmationModal.message"));
}

// node_modules/@shopify/polaris/build/esm/components/Frame/components/ContextualSaveBar/ContextualSaveBar.js
function ContextualSaveBar({
  alignContentFlush,
  message,
  saveAction,
  discardAction,
  fullWidth,
  contextControl,
  secondaryMenu
}) {
  const i18n = useI18n();
  const {
    logo
  } = useFrame();
  const {
    value: discardConfirmationModalVisible,
    toggle: toggleDiscardConfirmationModal,
    setFalse: closeDiscardConfirmationModal
  } = useToggle(false);
  const handleDiscardAction = (0, import_react166.useCallback)(() => {
    if (discardAction && discardAction.onAction) {
      discardAction.onAction();
    }
    closeDiscardConfirmationModal();
  }, [closeDiscardConfirmationModal, discardAction]);
  const discardActionContent = discardAction && discardAction.content ? discardAction.content : i18n.translate("Polaris.ContextualSaveBar.discard");
  let discardActionHandler;
  if (discardAction && discardAction.discardConfirmationModal) {
    discardActionHandler = toggleDiscardConfirmationModal;
  } else if (discardAction) {
    discardActionHandler = discardAction.onAction;
  }
  const discardConfirmationModalMarkup = discardAction && discardAction.onAction && discardAction.discardConfirmationModal && /* @__PURE__ */ import_react166.default.createElement(DiscardConfirmationModal, {
    open: discardConfirmationModalVisible,
    onCancel: toggleDiscardConfirmationModal,
    onDiscard: handleDiscardAction
  });
  const discardActionMarkup = discardAction && /* @__PURE__ */ import_react166.default.createElement(Button, {
    url: discardAction.url,
    onClick: discardActionHandler,
    loading: discardAction.loading,
    disabled: discardAction.disabled,
    accessibilityLabel: discardAction.content
  }, discardActionContent);
  const saveActionContent = saveAction && saveAction.content ? saveAction.content : i18n.translate("Polaris.ContextualSaveBar.save");
  const saveActionMarkup = saveAction && /* @__PURE__ */ import_react166.default.createElement(Button, {
    primary: true,
    url: saveAction.url,
    onClick: saveAction.onAction,
    loading: saveAction.loading,
    disabled: saveAction.disabled,
    accessibilityLabel: saveAction.content
  }, saveActionContent);
  const width = getWidth(logo, 104);
  const imageMarkup = logo && /* @__PURE__ */ import_react166.default.createElement(Image, {
    style: {
      width
    },
    source: logo.contextualSaveBarSource || "",
    alt: ""
  });
  const logoMarkup = alignContentFlush || contextControl ? null : /* @__PURE__ */ import_react166.default.createElement("div", {
    className: styles56.LogoContainer,
    style: {
      width
    }
  }, imageMarkup);
  const contextControlMarkup = contextControl ? /* @__PURE__ */ import_react166.default.createElement("div", {
    className: styles56.ContextControl
  }, contextControl) : null;
  const contentsClassName = classNames(styles56.Contents, fullWidth && styles56.fullWidth);
  return /* @__PURE__ */ import_react166.default.createElement(import_react166.default.Fragment, null, /* @__PURE__ */ import_react166.default.createElement("div", {
    className: styles56.ContextualSaveBar
  }, contextControlMarkup, logoMarkup, /* @__PURE__ */ import_react166.default.createElement("div", {
    className: contentsClassName
  }, message && /* @__PURE__ */ import_react166.default.createElement(Text, {
    as: "h2",
    variant: "headingMd",
    color: "text-inverse",
    truncate: true
  }, message), /* @__PURE__ */ import_react166.default.createElement("div", {
    className: styles56.ActionContainer
  }, /* @__PURE__ */ import_react166.default.createElement(LegacyStack, {
    spacing: "tight",
    wrap: false
  }, secondaryMenu, discardActionMarkup, saveActionMarkup)))), discardConfirmationModalMarkup);
}

// node_modules/@shopify/polaris/build/esm/components/Frame/components/ToastManager/ToastManager.js
var import_react171 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/use-deep-effect.js
var import_react168 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/utilities/use-deep-compare-ref.js
var import_react167 = __toESM(require_react());
var import_react_fast_compare2 = __toESM(require_react_fast_compare());
function useDeepCompareRef(dependencies, comparator = import_react_fast_compare2.default) {
  const dependencyList = (0, import_react167.useRef)(dependencies);
  if (!comparator(dependencyList.current, dependencies)) {
    dependencyList.current = dependencies;
  }
  return dependencyList.current;
}

// node_modules/@shopify/polaris/build/esm/utilities/use-deep-effect.js
function useDeepEffect(callback, dependencies, customCompare) {
  (0, import_react168.useEffect)(callback, useDeepCompareRef(dependencies, customCompare));
}

// node_modules/@shopify/polaris/build/esm/utilities/use-deep-callback.js
var import_react169 = __toESM(require_react());
function useDeepCallback(callback, dependencies, customCompare) {
  return (0, import_react169.useCallback)(callback, useDeepCompareRef(dependencies, customCompare));
}

// node_modules/@shopify/polaris/build/esm/components/Frame/components/ToastManager/ToastManager.scss.js
var styles57 = {
  "ToastManager": "Polaris-Frame-ToastManager",
  "ToastWrapper": "Polaris-Frame-ToastManager__ToastWrapper",
  "ToastWrapper-enter": "Polaris-Frame-ToastManager__ToastWrapper--enter",
  "ToastWrapper-exit": "Polaris-Frame-ToastManager__ToastWrapper--exit",
  "ToastWrapper-enter-done": "Polaris-Frame-ToastManager--toastWrapperEnterDone"
};

// node_modules/@shopify/polaris/build/esm/components/Frame/components/Toast/Toast.js
var import_react170 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Frame/components/Toast/Toast.scss.js
var styles58 = {
  "Toast": "Polaris-Frame-Toast",
  "Action": "Polaris-Frame-Toast__Action",
  "error": "Polaris-Frame-Toast--error",
  "CloseButton": "Polaris-Frame-Toast__CloseButton",
  "LeadingIcon": "Polaris-Frame-Toast__LeadingIcon"
};

// node_modules/@shopify/polaris/build/esm/components/Frame/components/Toast/Toast.js
var DEFAULT_TOAST_DURATION = 5e3;
var DEFAULT_TOAST_DURATION_WITH_ACTION = 1e4;
function Toast({
  content,
  onDismiss,
  duration,
  error,
  action
}) {
  (0, import_react170.useEffect)(() => {
    let timeoutDuration = duration || DEFAULT_TOAST_DURATION;
    if (action && !duration) {
      timeoutDuration = DEFAULT_TOAST_DURATION_WITH_ACTION;
    } else if (action && duration && duration < DEFAULT_TOAST_DURATION_WITH_ACTION) {
      console.log("Toast with action should persist for at least 10,000 milliseconds to give the merchant enough time to act on it.");
    }
    const timer = setTimeout(onDismiss, timeoutDuration);
    return () => {
      clearTimeout(timer);
    };
  }, [action, duration, onDismiss]);
  const dismissMarkup = /* @__PURE__ */ import_react170.default.createElement("button", {
    type: "button",
    className: styles58.CloseButton,
    onClick: onDismiss
  }, /* @__PURE__ */ import_react170.default.createElement(Icon, {
    source: SvgCancelSmallMinor
  }));
  const actionMarkup = action ? /* @__PURE__ */ import_react170.default.createElement("div", {
    className: styles58.Action
  }, /* @__PURE__ */ import_react170.default.createElement(Button, {
    plain: true,
    monochrome: true,
    size: "slim",
    onClick: action.onAction
  }, action.content)) : null;
  const leadingIconMarkup = error ? /* @__PURE__ */ import_react170.default.createElement("div", {
    className: styles58.LeadingIcon
  }, /* @__PURE__ */ import_react170.default.createElement(Icon, {
    source: SvgDiamondAlertMinor,
    color: "base"
  })) : null;
  const className = classNames(styles58.Toast, error && styles58.error);
  return /* @__PURE__ */ import_react170.default.createElement("div", {
    className
  }, /* @__PURE__ */ import_react170.default.createElement(KeypressListener, {
    keyCode: Key.Escape,
    handler: onDismiss
  }), leadingIconMarkup, /* @__PURE__ */ import_react170.default.createElement(HorizontalStack, {
    gap: "4",
    blockAlign: "center"
  }, /* @__PURE__ */ import_react170.default.createElement(Text, {
    as: "span",
    fontWeight: "medium"
  }, content)), actionMarkup, dismissMarkup);
}

// node_modules/@shopify/polaris/build/esm/components/Frame/components/ToastManager/ToastManager.js
var ToastManager = /* @__PURE__ */ (0, import_react171.memo)(function ToastManager2({
  toastMessages
}) {
  const toastNodes = [];
  const updateToasts = useDeepCallback(() => {
    let targetInPos = 0;
    toastMessages.forEach((_, index) => {
      const currentToast = toastNodes[index];
      if (!currentToast.current)
        return;
      targetInPos += currentToast.current.clientHeight;
      currentToast.current.style.setProperty("--pc-toast-manager-translate-y-in", `-${targetInPos}px`);
      currentToast.current.style.setProperty("--pc-toast-manager-translate-y-out", `${-targetInPos + 150}px`);
    });
  }, [toastMessages, toastNodes]);
  useDeepEffect(() => {
    updateToasts();
  }, [toastMessages]);
  const toastsMarkup = toastMessages.map((toast, index) => {
    const toastNode = /* @__PURE__ */ (0, import_react171.createRef)();
    toastNodes[index] = toastNode;
    return /* @__PURE__ */ import_react171.default.createElement(CSSTransition_default, {
      nodeRef: toastNodes[index],
      key: toast.id,
      timeout: {
        enter: 0,
        exit: 400
      },
      classNames: toastClasses
    }, /* @__PURE__ */ import_react171.default.createElement("div", {
      ref: toastNode
    }, /* @__PURE__ */ import_react171.default.createElement(Toast, toast)));
  });
  return /* @__PURE__ */ import_react171.default.createElement(Portal, null, /* @__PURE__ */ import_react171.default.createElement(EventListener, {
    event: "resize",
    handler: updateToasts
  }), /* @__PURE__ */ import_react171.default.createElement("div", {
    className: styles57.ToastManager,
    "aria-live": "assertive"
  }, /* @__PURE__ */ import_react171.default.createElement(TransitionGroup_default, {
    component: null
  }, toastsMarkup)));
});
var toastClasses = {
  enter: classNames(styles57.ToastWrapper, styles57["ToastWrapper-enter"]),
  enterDone: classNames(styles57.ToastWrapper, styles57["ToastWrapper-enter-done"]),
  exit: classNames(styles57.ToastWrapper, styles57["ToastWrapper-exit"])
};

// node_modules/@shopify/polaris/build/esm/components/Frame/Frame.js
var APP_FRAME_MAIN = "AppFrameMain";
var APP_FRAME_NAV = "AppFrameNav";
var APP_FRAME_TOP_BAR = "AppFrameTopBar";
var APP_FRAME_LOADING_BAR = "AppFrameLoadingBar";
var FrameInner = class extends import_react172.PureComponent {
  constructor(...args) {
    super(...args);
    this.state = {
      skipFocused: false,
      globalRibbonHeight: 0,
      loadingStack: 0,
      toastMessages: [],
      showContextualSaveBar: false
    };
    this.contextualSaveBar = null;
    this.globalRibbonContainer = null;
    this.navigationNode = /* @__PURE__ */ (0, import_react172.createRef)();
    this.setGlobalRibbonHeight = () => {
      const {
        globalRibbonContainer
      } = this;
      if (globalRibbonContainer) {
        this.setState({
          globalRibbonHeight: globalRibbonContainer.offsetHeight
        }, this.setGlobalRibbonRootProperty);
      }
    };
    this.setOffset = () => {
      const {
        offset = "0px"
      } = this.props;
      setRootProperty("--pc-frame-offset", offset);
    };
    this.setGlobalRibbonRootProperty = () => {
      const {
        globalRibbonHeight
      } = this.state;
      setRootProperty("--pc-frame-global-ribbon-height", `${globalRibbonHeight}px`);
    };
    this.showToast = (toast) => {
      this.setState(({
        toastMessages
      }) => {
        const hasToastById = toastMessages.find(({
          id
        }) => id === toast.id) != null;
        return {
          toastMessages: hasToastById ? toastMessages : [...toastMessages, toast]
        };
      });
    };
    this.hideToast = ({
      id
    }) => {
      this.setState(({
        toastMessages
      }) => {
        return {
          toastMessages: toastMessages.filter(({
            id: toastId
          }) => id !== toastId)
        };
      });
    };
    this.setContextualSaveBar = (props) => {
      const {
        showContextualSaveBar
      } = this.state;
      this.contextualSaveBar = {
        ...props
      };
      if (showContextualSaveBar === true) {
        this.forceUpdate();
      } else {
        this.setState({
          showContextualSaveBar: true
        });
      }
    };
    this.removeContextualSaveBar = () => {
      this.contextualSaveBar = null;
      this.setState({
        showContextualSaveBar: false
      });
    };
    this.startLoading = () => {
      this.setState(({
        loadingStack
      }) => ({
        loadingStack: loadingStack + 1
      }));
    };
    this.stopLoading = () => {
      this.setState(({
        loadingStack
      }) => ({
        loadingStack: Math.max(0, loadingStack - 1)
      }));
    };
    this.handleResize = () => {
      if (this.props.globalRibbon) {
        this.setGlobalRibbonHeight();
      }
    };
    this.handleFocus = () => {
      this.setState({
        skipFocused: true
      });
    };
    this.handleBlur = () => {
      this.setState({
        skipFocused: false
      });
    };
    this.handleClick = (event) => {
      const {
        skipToContentTarget
      } = this.props;
      if (skipToContentTarget && skipToContentTarget.current) {
        skipToContentTarget.current.focus();
        event === null || event === void 0 ? void 0 : event.preventDefault();
      }
    };
    this.handleNavigationDismiss = () => {
      const {
        onNavigationDismiss
      } = this.props;
      if (onNavigationDismiss != null) {
        onNavigationDismiss();
      }
    };
    this.setGlobalRibbonContainer = (node) => {
      this.globalRibbonContainer = node;
    };
    this.handleNavKeydown = (event) => {
      const {
        key
      } = event;
      const {
        mediaQuery: {
          isNavigationCollapsed
        },
        showMobileNavigation
      } = this.props;
      const mobileNavShowing = isNavigationCollapsed && showMobileNavigation;
      if (mobileNavShowing && key === "Escape") {
        this.handleNavigationDismiss();
      }
    };
  }
  componentDidMount() {
    this.handleResize();
    if (this.props.globalRibbon) {
      return;
    }
    this.setGlobalRibbonRootProperty();
    this.setOffset();
  }
  componentDidUpdate(prevProps) {
    if (this.props.globalRibbon !== prevProps.globalRibbon) {
      this.setGlobalRibbonHeight();
    }
    this.setOffset();
  }
  render() {
    const {
      skipFocused,
      loadingStack,
      toastMessages,
      showContextualSaveBar
    } = this.state;
    const {
      logo,
      children,
      navigation,
      topBar,
      globalRibbon,
      showMobileNavigation = false,
      skipToContentTarget,
      i18n,
      mediaQuery: {
        isNavigationCollapsed
      }
    } = this.props;
    const navClassName = classNames(styles53.Navigation, showMobileNavigation && styles53["Navigation-visible"]);
    const mobileNavHidden = isNavigationCollapsed && !showMobileNavigation;
    const mobileNavShowing = isNavigationCollapsed && showMobileNavigation;
    const tabIndex = mobileNavShowing ? 0 : -1;
    const mobileNavAttributes = {
      ...mobileNavShowing && {
        "aria-modal": true,
        role: "dialog"
      }
    };
    const navigationMarkup = navigation ? /* @__PURE__ */ import_react172.default.createElement(TrapFocus, {
      trapping: mobileNavShowing
    }, /* @__PURE__ */ import_react172.default.createElement(CSSTransition_default, {
      nodeRef: this.navigationNode,
      appear: isNavigationCollapsed,
      exit: isNavigationCollapsed,
      in: showMobileNavigation,
      timeout: parseInt(motion2["duration-300"], 10),
      classNames: navTransitionClasses
    }, /* @__PURE__ */ import_react172.default.createElement("div", Object.assign({
      key: "NavContent"
    }, mobileNavAttributes, {
      "aria-label": i18n.translate("Polaris.Frame.navigationLabel"),
      ref: this.navigationNode,
      className: navClassName,
      onKeyDown: this.handleNavKeydown,
      id: APP_FRAME_NAV,
      hidden: mobileNavHidden
    }), navigation, /* @__PURE__ */ import_react172.default.createElement("button", {
      type: "button",
      className: styles53.NavigationDismiss,
      onClick: this.handleNavigationDismiss,
      "aria-hidden": mobileNavHidden || !isNavigationCollapsed && !showMobileNavigation,
      "aria-label": i18n.translate("Polaris.Frame.Navigation.closeMobileNavigationLabel"),
      tabIndex
    }, /* @__PURE__ */ import_react172.default.createElement(Icon, {
      source: SvgMobileCancelMajor
    }))))) : null;
    const loadingMarkup = loadingStack > 0 ? /* @__PURE__ */ import_react172.default.createElement("div", {
      className: styles53.LoadingBar,
      id: APP_FRAME_LOADING_BAR
    }, /* @__PURE__ */ import_react172.default.createElement(Loading, null)) : null;
    const contextualSaveBarMarkup = /* @__PURE__ */ import_react172.default.createElement(CSSAnimation, {
      in: showContextualSaveBar,
      className: styles53.ContextualSaveBar,
      type: "fade"
    }, /* @__PURE__ */ import_react172.default.createElement(ContextualSaveBar, this.contextualSaveBar));
    const topBarMarkup = topBar ? /* @__PURE__ */ import_react172.default.createElement("div", Object.assign({
      className: styles53.TopBar
    }, layer.props, dataPolarisTopBar.props, {
      id: APP_FRAME_TOP_BAR
    }), topBar) : null;
    const globalRibbonMarkup = globalRibbon ? /* @__PURE__ */ import_react172.default.createElement("div", {
      className: styles53.GlobalRibbonContainer,
      ref: this.setGlobalRibbonContainer
    }, globalRibbon) : null;
    const skipClassName = classNames(styles53.Skip, skipFocused && styles53.focused);
    const skipTarget = skipToContentTarget !== null && skipToContentTarget !== void 0 && skipToContentTarget.current ? skipToContentTarget.current.id : APP_FRAME_MAIN;
    const skipMarkup = /* @__PURE__ */ import_react172.default.createElement("div", {
      className: skipClassName
    }, /* @__PURE__ */ import_react172.default.createElement("a", {
      href: `#${skipTarget}`,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onClick: this.handleClick
    }, i18n.translate("Polaris.Frame.skipToContent")));
    const navigationAttributes = navigation ? {
      "data-has-navigation": true
    } : {};
    const frameClassName = classNames(styles53.Frame, navigation && styles53.hasNav, topBar && styles53.hasTopBar);
    const navigationOverlayMarkup = showMobileNavigation && isNavigationCollapsed ? /* @__PURE__ */ import_react172.default.createElement(Backdrop, {
      belowNavigation: true,
      onClick: this.handleNavigationDismiss,
      onTouchStart: this.handleNavigationDismiss
    }) : null;
    const context = {
      logo,
      showToast: this.showToast,
      hideToast: this.hideToast,
      startLoading: this.startLoading,
      stopLoading: this.stopLoading,
      setContextualSaveBar: this.setContextualSaveBar,
      removeContextualSaveBar: this.removeContextualSaveBar
    };
    return /* @__PURE__ */ import_react172.default.createElement(FrameContext.Provider, {
      value: context
    }, /* @__PURE__ */ import_react172.default.createElement("div", Object.assign({
      className: frameClassName
    }, layer.props, navigationAttributes), skipMarkup, topBarMarkup, navigationMarkup, contextualSaveBarMarkup, loadingMarkup, navigationOverlayMarkup, /* @__PURE__ */ import_react172.default.createElement("main", {
      className: styles53.Main,
      id: APP_FRAME_MAIN,
      "data-has-global-ribbon": Boolean(globalRibbon)
    }, /* @__PURE__ */ import_react172.default.createElement("div", {
      className: styles53.Content
    }, children)), /* @__PURE__ */ import_react172.default.createElement(ToastManager, {
      toastMessages
    }), globalRibbonMarkup, /* @__PURE__ */ import_react172.default.createElement(EventListener, {
      event: "resize",
      handler: this.handleResize
    })));
  }
};
var navTransitionClasses = {
  enter: classNames(styles53["Navigation-enter"]),
  enterActive: classNames(styles53["Navigation-enterActive"]),
  enterDone: classNames(styles53["Navigation-enterActive"]),
  exit: classNames(styles53["Navigation-exit"]),
  exitActive: classNames(styles53["Navigation-exitActive"])
};
function Frame(props) {
  const i18n = useI18n();
  const mediaQuery = useMediaQuery();
  return /* @__PURE__ */ import_react172.default.createElement(FrameInner, Object.assign({}, props, {
    i18n,
    mediaQuery
  }));
}

// node_modules/@shopify/polaris/build/esm/components/Link/Link.js
var import_react173 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Link/Link.scss.js
var styles59 = {
  "Link": "Polaris-Link",
  "monochrome": "Polaris-Link--monochrome",
  "removeUnderline": "Polaris-Link--removeUnderline"
};

// node_modules/@shopify/polaris/build/esm/components/Link/Link.js
function Link({
  url,
  children,
  onClick,
  external,
  target,
  id,
  monochrome,
  removeUnderline,
  accessibilityLabel,
  dataPrimaryLink
}) {
  return /* @__PURE__ */ import_react173.default.createElement(BannerContext.Consumer, null, (BannerContext2) => {
    const shouldBeMonochrome = monochrome || BannerContext2;
    const className = classNames(styles59.Link, shouldBeMonochrome && styles59.monochrome, removeUnderline && styles59.removeUnderline);
    return url ? /* @__PURE__ */ import_react173.default.createElement(UnstyledLink, {
      onClick,
      className,
      url,
      external,
      target,
      id,
      "aria-label": accessibilityLabel,
      "data-primary-link": dataPrimaryLink
    }, children) : /* @__PURE__ */ import_react173.default.createElement("button", {
      type: "button",
      onClick,
      className,
      id,
      "aria-label": accessibilityLabel,
      "data-primary-link": dataPrimaryLink
    }, children);
  });
}

// node_modules/@shopify/polaris/build/esm/components/Navigation/Navigation.js
var import_react178 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Navigation/context.js
var import_react174 = __toESM(require_react());
var NavigationContext = /* @__PURE__ */ (0, import_react174.createContext)({
  location: ""
});

// node_modules/@shopify/polaris/build/esm/components/Navigation/Navigation.scss.js
var styles60 = {
  "Navigation": "Polaris-Navigation",
  "UserMenu": "Polaris-Navigation__UserMenu",
  "ContextControl": "Polaris-Navigation__ContextControl",
  "PrimaryNavigation": "Polaris-Navigation__PrimaryNavigation",
  "LogoContainer": "Polaris-Navigation__LogoContainer",
  "hasLogoSuffix": "Polaris-Navigation--hasLogoSuffix",
  "Logo": "Polaris-Navigation__Logo",
  "LogoLink": "Polaris-Navigation__LogoLink",
  "Item": "Polaris-Navigation__Item",
  "Icon-resized": "Polaris-Navigation__Icon--resized",
  "ItemInnerWrapper": "Polaris-Navigation__ItemInnerWrapper",
  "Item-selected": "Polaris-Navigation__Item--selected",
  "Item-disabled": "Polaris-Navigation__Item--disabled",
  "Icon": "Polaris-Navigation__Icon",
  "Badge": "Polaris-Navigation__Badge",
  "ListItem-hasAction": "Polaris-Navigation__ListItem--hasAction",
  "subNavigationActive": "Polaris-Navigation--subNavigationActive",
  "Item-child-active": "Polaris-Navigation--itemChildActive",
  "ListItem": "Polaris-Navigation__ListItem",
  "RollupSection": "Polaris-Navigation__RollupSection",
  "SecondaryNavigation": "Polaris-Navigation__SecondaryNavigation",
  "ItemWrapper": "Polaris-Navigation__ItemWrapper",
  "ItemInnerDisabled": "Polaris-Navigation__ItemInnerDisabled",
  "ItemInnerWrapper-selected": "Polaris-Navigation__ItemInnerWrapper--selected",
  "Text": "Polaris-Navigation__Text",
  "Text-truncated": "Polaris-Navigation__Text--truncated",
  "SecondaryActions": "Polaris-Navigation__SecondaryActions",
  "ItemWithFloatingActions": "Polaris-Navigation__ItemWithFloatingActions",
  "ItemInnerWrapper-display-actions-on-hover": "Polaris-Navigation--itemInnerWrapperDisplayActionsOnHover",
  "SecondaryAction": "Polaris-Navigation__SecondaryAction",
  "List": "Polaris-Navigation__List",
  "SecondaryNavigation-noIcon": "Polaris-Navigation__SecondaryNavigation--noIcon",
  "Section": "Polaris-Navigation__Section",
  "Section-fill": "Polaris-Navigation__Section--fill",
  "Section-withSeparator": "Polaris-Navigation__Section--withSeparator",
  "SectionHeading": "Polaris-Navigation__SectionHeading",
  "Action": "Polaris-Navigation__Action",
  "RollupToggle": "Polaris-Navigation__RollupToggle",
  "Indicator": "Polaris-Navigation__Indicator"
};

// node_modules/@shopify/polaris/build/esm/components/Navigation/components/Section/Section.js
var import_react177 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Navigation/components/Item/Item.js
var import_react176 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/Navigation/components/Item/components/Secondary/Secondary.js
var import_react175 = __toESM(require_react());
function Secondary({
  id,
  children,
  expanded
}) {
  const uid = useUniqueId("SecondaryNavigation");
  return /* @__PURE__ */ import_react175.default.createElement(Collapsible, {
    id: id || uid,
    open: expanded,
    transition: false
  }, /* @__PURE__ */ import_react175.default.createElement("ul", {
    className: styles60.List
  }, children));
}

// node_modules/@shopify/polaris/build/esm/components/Navigation/components/Item/Item.js
var MAX_SECONDARY_ACTIONS = 2;
var TOOLTIP_HOVER_DELAY = 1e3;
var MatchState;
(function(MatchState2) {
  MatchState2[MatchState2["MatchForced"] = 0] = "MatchForced";
  MatchState2[MatchState2["MatchUrl"] = 1] = "MatchUrl";
  MatchState2[MatchState2["MatchPaths"] = 2] = "MatchPaths";
  MatchState2[MatchState2["Excluded"] = 3] = "Excluded";
  MatchState2[MatchState2["NoMatch"] = 4] = "NoMatch";
})(MatchState || (MatchState = {}));
function Item7({
  url,
  icon,
  label,
  subNavigationItems = [],
  secondaryAction,
  secondaryActions,
  displayActionsOnHover,
  disabled,
  onClick,
  accessibilityLabel,
  selected: selectedOverride,
  badge,
  new: isNew,
  matches: matches2,
  exactMatch,
  matchPaths,
  excludePaths,
  external,
  onToggleExpandedState,
  expanded,
  shouldResizeIcon,
  truncateText
}) {
  const i18n = useI18n();
  const {
    isNavigationCollapsed
  } = useMediaQuery();
  const secondaryNavigationId = useUniqueId("SecondaryNavigation");
  const {
    location,
    onNavigationDismiss
  } = (0, import_react176.useContext)(NavigationContext);
  const navTextRef = (0, import_react176.useRef)(null);
  const [isTruncated, setIsTruncated] = (0, import_react176.useState)(false);
  (0, import_react176.useEffect)(() => {
    if (!isNavigationCollapsed && expanded) {
      onToggleExpandedState === null || onToggleExpandedState === void 0 ? void 0 : onToggleExpandedState();
    }
  }, [expanded, isNavigationCollapsed, onToggleExpandedState]);
  useIsomorphicLayoutEffect(() => {
    const navTextNode = navTextRef.current;
    if (truncateText && navTextNode) {
      setIsTruncated(navTextNode.scrollHeight > navTextNode.clientHeight);
    }
  }, [truncateText]);
  const tabIndex = disabled ? -1 : 0;
  const hasNewChild = subNavigationItems.filter((subNavigationItem) => subNavigationItem.new).length > 0;
  const indicatorMarkup = hasNewChild ? /* @__PURE__ */ import_react176.default.createElement("span", {
    className: styles60.Indicator
  }, /* @__PURE__ */ import_react176.default.createElement(Indicator, {
    pulse: true
  })) : null;
  const iconMarkup = icon ? /* @__PURE__ */ import_react176.default.createElement("div", {
    className: classNames(styles60.Icon, shouldResizeIcon && styles60["Icon-resized"])
  }, /* @__PURE__ */ import_react176.default.createElement(Icon, {
    source: icon
  })) : null;
  let badgeMarkup = null;
  if (isNew) {
    badgeMarkup = /* @__PURE__ */ import_react176.default.createElement(Badge, {
      status: "new"
    }, i18n.translate("Polaris.Badge.STATUS_LABELS.new"));
  } else if (typeof badge === "string") {
    badgeMarkup = /* @__PURE__ */ import_react176.default.createElement(Badge, {
      status: "new"
    }, badge);
  } else {
    badgeMarkup = badge;
  }
  const wrappedBadgeMarkup = badgeMarkup == null ? null : /* @__PURE__ */ import_react176.default.createElement("div", {
    className: styles60.Badge
  }, badgeMarkup);
  const itemLabelMarkup = /* @__PURE__ */ import_react176.default.createElement("span", {
    className: classNames(styles60.Text, truncateText && styles60["Text-truncated"]),
    ref: navTextRef
  }, label, indicatorMarkup);
  if (url == null) {
    const className2 = classNames(styles60.Item, disabled && styles60["Item-disabled"], selectedOverride && styles60["Item-selected"]);
    return /* @__PURE__ */ import_react176.default.createElement("li", {
      className: styles60.ListItem
    }, /* @__PURE__ */ import_react176.default.createElement("div", {
      className: styles60.ItemWrapper
    }, /* @__PURE__ */ import_react176.default.createElement("div", {
      className: classNames(styles60.ItemInnerWrapper, disabled && styles60.ItemInnerDisabled)
    }, /* @__PURE__ */ import_react176.default.createElement("button", {
      type: "button",
      className: className2,
      disabled,
      "aria-disabled": disabled,
      "aria-label": accessibilityLabel,
      onClick: getClickHandler(onClick)
    }, iconMarkup, itemLabelMarkup, wrappedBadgeMarkup))));
  }
  if (secondaryAction && true) {
    console.warn("Deprecation: The `secondaryAction` prop on the `Navigation.Item` has been deprecated. Use `secondaryActions` instead.");
  }
  const actions = secondaryActions || secondaryAction && [secondaryAction];
  if (actions && actions.length > MAX_SECONDARY_ACTIONS) {
    actions.length = MAX_SECONDARY_ACTIONS;
    if (true) {
      console.warn(`secondaryActions must have a maximum of ${MAX_SECONDARY_ACTIONS} actions. Only the first ${MAX_SECONDARY_ACTIONS} actions will be rendered.`);
    }
  }
  const secondaryActionMarkup = actions !== null && actions !== void 0 && actions.length ? /* @__PURE__ */ import_react176.default.createElement("span", {
    className: styles60.SecondaryActions
  }, actions.map((action) => /* @__PURE__ */ import_react176.default.createElement(ItemSecondaryAction, Object.assign({
    key: action.accessibilityLabel
  }, action, {
    tabIndex,
    disabled
  })))) : null;
  const itemContentMarkup = /* @__PURE__ */ import_react176.default.createElement(import_react176.default.Fragment, null, iconMarkup, itemLabelMarkup, secondaryActionMarkup ? null : wrappedBadgeMarkup);
  const outerContentMarkup = /* @__PURE__ */ import_react176.default.createElement(import_react176.default.Fragment, null, secondaryActionMarkup ? wrappedBadgeMarkup : null);
  const matchState = matchStateForItem({
    url,
    matches: matches2,
    exactMatch,
    matchPaths,
    excludePaths
  }, location);
  const matchingSubNavigationItems = subNavigationItems.filter((item) => {
    const subMatchState = matchStateForItem(item, location);
    return subMatchState === MatchState.MatchForced || subMatchState === MatchState.MatchUrl || subMatchState === MatchState.MatchPaths;
  });
  const childIsActive = matchingSubNavigationItems.length > 0;
  const selected = selectedOverride == null ? matchState === MatchState.MatchForced || matchState === MatchState.MatchUrl || matchState === MatchState.MatchPaths : selectedOverride;
  const showExpanded = selected || expanded || childIsActive;
  const canBeActive = subNavigationItems.length === 0 || !childIsActive;
  const itemClassName = classNames(styles60.Item, disabled && styles60["Item-disabled"], selected && canBeActive && styles60["Item-selected"], showExpanded && styles60.subNavigationActive, childIsActive && styles60["Item-child-active"]);
  let secondaryNavigationMarkup = null;
  if (subNavigationItems.length > 0) {
    const longestMatch = matchingSubNavigationItems.sort(({
      url: firstUrl
    }, {
      url: secondUrl
    }) => secondUrl.length - firstUrl.length)[0];
    const SecondaryNavigationClassName = classNames(styles60.SecondaryNavigation, !icon && styles60["SecondaryNavigation-noIcon"]);
    secondaryNavigationMarkup = /* @__PURE__ */ import_react176.default.createElement("div", {
      className: SecondaryNavigationClassName
    }, /* @__PURE__ */ import_react176.default.createElement(Secondary, {
      expanded: showExpanded,
      id: secondaryNavigationId
    }, subNavigationItems.map((item) => {
      const {
        label: label2,
        ...rest
      } = item;
      const onClick2 = () => {
        if (onNavigationDismiss) {
          onNavigationDismiss();
        }
        if (item.onClick && item.onClick !== onNavigationDismiss) {
          item.onClick();
        }
      };
      return /* @__PURE__ */ import_react176.default.createElement(Item7, Object.assign({
        key: label2
      }, rest, {
        label: label2,
        matches: item === longestMatch,
        onClick: onClick2,
        truncateText
      }));
    })));
  }
  const className = classNames(styles60.ListItem, Boolean(actions && actions.length) && styles60["ListItem-hasAction"]);
  const itemLinkMarkup = () => {
    const linkMarkup = /* @__PURE__ */ import_react176.default.createElement(UnstyledLink, Object.assign({
      url,
      className: itemClassName,
      external,
      tabIndex,
      "aria-disabled": disabled,
      "aria-label": accessibilityLabel,
      onClick: getClickHandler(onClick)
    }, normalizeAriaAttributes(secondaryNavigationId, subNavigationItems.length > 0, showExpanded)), itemContentMarkup);
    return isTruncated ? /* @__PURE__ */ import_react176.default.createElement(Tooltip, {
      hoverDelay: TOOLTIP_HOVER_DELAY,
      content: label,
      preferredPosition: "above"
    }, linkMarkup) : linkMarkup;
  };
  return /* @__PURE__ */ import_react176.default.createElement("li", {
    className
  }, /* @__PURE__ */ import_react176.default.createElement("div", {
    className: styles60.ItemWrapper
  }, /* @__PURE__ */ import_react176.default.createElement("div", {
    className: classNames(styles60.ItemInnerWrapper, selected && canBeActive && styles60["ItemInnerWrapper-selected"], displayActionsOnHover && styles60["ItemInnerWrapper-display-actions-on-hover"], disabled && styles60.ItemInnerDisabled)
  }, displayActionsOnHover && secondaryActionMarkup && wrappedBadgeMarkup ? /* @__PURE__ */ import_react176.default.createElement("span", {
    className: styles60.ItemWithFloatingActions
  }, itemLinkMarkup(), secondaryActionMarkup) : /* @__PURE__ */ import_react176.default.createElement(import_react176.default.Fragment, null, itemLinkMarkup(), secondaryActionMarkup), outerContentMarkup)), secondaryNavigationMarkup);
  function getClickHandler(onClick2) {
    return (event) => {
      const {
        currentTarget
      } = event;
      if (currentTarget.getAttribute("href") === location) {
        event.preventDefault();
      }
      if (subNavigationItems && subNavigationItems.length > 0 && isNavigationCollapsed) {
        event.preventDefault();
        onToggleExpandedState === null || onToggleExpandedState === void 0 ? void 0 : onToggleExpandedState();
      } else if (onNavigationDismiss) {
        onNavigationDismiss();
        if (onClick2 && onClick2 !== onNavigationDismiss) {
          onClick2();
        }
        return;
      }
      if (onClick2) {
        onClick2();
      }
    };
  }
}
function ItemSecondaryAction({
  url,
  icon,
  accessibilityLabel,
  tooltip,
  onClick,
  disabled,
  tabIndex
}) {
  const markup = url ? /* @__PURE__ */ import_react176.default.createElement(UnstyledLink, {
    external: true,
    url,
    className: styles60.SecondaryAction,
    tabIndex,
    "aria-disabled": disabled,
    "aria-label": accessibilityLabel,
    onClick
  }, /* @__PURE__ */ import_react176.default.createElement(Icon, {
    source: icon
  })) : /* @__PURE__ */ import_react176.default.createElement(UnstyledButton, {
    className: styles60.SecondaryAction,
    tabIndex,
    disabled,
    accessibilityLabel,
    onClick
  }, /* @__PURE__ */ import_react176.default.createElement(Icon, {
    source: icon
  }));
  return tooltip ? /* @__PURE__ */ import_react176.default.createElement(Tooltip, tooltip, " ", markup, " ") : markup;
}
function normalizePathname(pathname) {
  const barePathname = pathname.split("?")[0].split("#")[0];
  return barePathname.endsWith("/") ? barePathname : `${barePathname}/`;
}
function safeEqual(location, path) {
  return normalizePathname(location) === normalizePathname(path);
}
function safeStartsWith(location, path) {
  return normalizePathname(location).startsWith(normalizePathname(path));
}
function matchStateForItem({
  url,
  matches: matches2,
  exactMatch,
  matchPaths,
  excludePaths
}, location) {
  if (url == null) {
    return MatchState.NoMatch;
  }
  if (matches2) {
    return MatchState.MatchForced;
  }
  if (matches2 === false || excludePaths && excludePaths.some((path) => safeStartsWith(location, path))) {
    return MatchState.Excluded;
  }
  if (matchPaths && matchPaths.some((path) => safeStartsWith(location, path))) {
    return MatchState.MatchPaths;
  }
  const matchesUrl = exactMatch ? safeEqual(location, url) : safeStartsWith(location, url);
  return matchesUrl ? MatchState.MatchUrl : MatchState.NoMatch;
}
function normalizeAriaAttributes(controlId, hasSubMenu, expanded) {
  return hasSubMenu ? {
    "aria-expanded": expanded,
    "aria-controls": controlId
  } : void 0;
}

// node_modules/@shopify/polaris/build/esm/components/Navigation/components/Section/Section.js
function Section7({
  title,
  fill,
  action,
  items,
  rollup,
  separator
}) {
  const {
    value: expanded,
    toggle: toggleExpanded,
    setFalse: setExpandedFalse
  } = useToggle(false);
  const animationFrame = (0, import_react177.useRef)(null);
  const {
    isNavigationCollapsed
  } = useMediaQuery();
  const [expandedIndex, setExpandedIndex] = (0, import_react177.useState)();
  const handleClick = (onClick, hasSubNavItems) => {
    return () => {
      if (onClick) {
        onClick();
      }
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      if (!hasSubNavItems || !isNavigationCollapsed) {
        animationFrame.current = requestAnimationFrame(setExpandedFalse);
      }
    };
  };
  (0, import_react177.useEffect)(() => {
    return () => {
      animationFrame.current && cancelAnimationFrame(animationFrame.current);
    };
  });
  const className = classNames(styles60.Section, separator && styles60["Section-withSeparator"], fill && styles60["Section-fill"]);
  const buttonMarkup = action && /* @__PURE__ */ import_react177.default.createElement("button", {
    type: "button",
    className: styles60.Action,
    "aria-label": action.accessibilityLabel,
    onClick: action.onClick
  }, /* @__PURE__ */ import_react177.default.createElement(Icon, {
    source: action.icon
  }));
  const actionMarkup = action && (action.tooltip ? /* @__PURE__ */ import_react177.default.createElement(Tooltip, action.tooltip, buttonMarkup) : buttonMarkup);
  const sectionHeadingMarkup = title && /* @__PURE__ */ import_react177.default.createElement("li", {
    className: styles60.SectionHeading
  }, /* @__PURE__ */ import_react177.default.createElement(Text, {
    as: "span",
    variant: "headingXs",
    color: "subdued"
  }, title), actionMarkup);
  const itemsMarkup = items.map((item, index) => {
    const {
      onClick,
      label,
      subNavigationItems,
      ...rest
    } = item;
    const hasSubNavItems = subNavigationItems != null && subNavigationItems.length > 0;
    const handleToggleExpandedState = () => {
      if (expandedIndex === index) {
        setExpandedIndex(-1);
      } else {
        setExpandedIndex(index);
      }
    };
    return /* @__PURE__ */ import_react177.default.createElement(Item7, Object.assign({
      key: label
    }, rest, {
      label,
      subNavigationItems,
      onClick: handleClick(onClick, hasSubNavItems),
      onToggleExpandedState: handleToggleExpandedState,
      expanded: expandedIndex === index
    }));
  });
  const toggleClassName = classNames(styles60.Item, styles60.RollupToggle);
  const ariaLabel = rollup && (expanded ? rollup.hide : rollup.view);
  const toggleRollup = rollup && items.length > rollup.after && /* @__PURE__ */ import_react177.default.createElement("div", {
    className: styles60.ListItem,
    key: "List Item"
  }, /* @__PURE__ */ import_react177.default.createElement("div", {
    className: styles60.ItemWrapper
  }, /* @__PURE__ */ import_react177.default.createElement("div", {
    className: styles60.ItemInnerWrapper
  }, /* @__PURE__ */ import_react177.default.createElement("button", {
    type: "button",
    className: toggleClassName,
    onClick: toggleExpanded,
    "aria-label": ariaLabel
  }, /* @__PURE__ */ import_react177.default.createElement("span", {
    className: styles60.Icon
  }, /* @__PURE__ */ import_react177.default.createElement(Icon, {
    source: SvgHorizontalDotsMinor
  }))))));
  const activeItemIndex = items.findIndex((item) => {
    if (!rollup) {
      return false;
    }
    return rollup.activePath === item.url || item.url && rollup.activePath.startsWith(item.url) || (item.subNavigationItems ? item.subNavigationItems.some(({
      url: itemUrl
    }) => rollup.activePath.startsWith(itemUrl)) : false);
  });
  const sectionItems = rollup ? itemsMarkup.slice(0, rollup.after) : itemsMarkup;
  const additionalItems = rollup ? itemsMarkup.slice(rollup.after) : [];
  if (rollup && activeItemIndex !== -1 && activeItemIndex > rollup.after - 1) {
    sectionItems.push(...additionalItems.splice(activeItemIndex - rollup.after, 1));
  }
  const additionalItemsId = useUniqueId("AdditionalItems");
  const activeItemsMarkup = rollup && additionalItems.length > 0 && /* @__PURE__ */ import_react177.default.createElement("li", {
    className: styles60.RollupSection
  }, /* @__PURE__ */ import_react177.default.createElement(Collapsible, {
    id: additionalItemsId,
    open: expanded
  }, /* @__PURE__ */ import_react177.default.createElement("ul", {
    className: styles60.List
  }, additionalItems)), toggleRollup);
  return /* @__PURE__ */ import_react177.default.createElement("ul", {
    className
  }, sectionHeadingMarkup, sectionItems, activeItemsMarkup);
}

// node_modules/@shopify/polaris/build/esm/components/Navigation/Navigation.js
var Navigation2 = function Navigation3({
  children,
  contextControl,
  location,
  onDismiss,
  ariaLabelledBy,
  logoSuffix
}) {
  const {
    logo
  } = useFrame();
  const width = getWidth(logo, 104);
  const logoMarkup = logo ? /* @__PURE__ */ import_react178.default.createElement("div", {
    className: classNames(styles60.LogoContainer, logoSuffix && styles60.hasLogoSuffix)
  }, /* @__PURE__ */ import_react178.default.createElement(UnstyledLink, {
    url: logo.url || "",
    className: styles60.LogoLink,
    style: {
      width
    }
  }, /* @__PURE__ */ import_react178.default.createElement(Image, {
    source: logo.topBarSource || "",
    alt: logo.accessibilityLabel || "",
    className: styles60.Logo,
    style: {
      width
    }
  })), logoSuffix) : null;
  const mediaMarkup = contextControl ? /* @__PURE__ */ import_react178.default.createElement("div", {
    className: styles60.ContextControl
  }, contextControl) : logoMarkup;
  const context = (0, import_react178.useMemo)(() => ({
    location,
    onNavigationDismiss: onDismiss
  }), [location, onDismiss]);
  return /* @__PURE__ */ import_react178.default.createElement(NavigationContext.Provider, {
    value: context
  }, /* @__PURE__ */ import_react178.default.createElement(WithinContentContext.Provider, {
    value: true
  }, /* @__PURE__ */ import_react178.default.createElement("nav", {
    className: styles60.Navigation,
    "aria-labelledby": ariaLabelledBy
  }, mediaMarkup, /* @__PURE__ */ import_react178.default.createElement(Scrollable, {
    className: styles60.PrimaryNavigation
  }, children))));
};
Navigation2.Item = Item7;
Navigation2.Section = Section7;

// node_modules/@shopify/polaris/build/esm/components/TopBar/TopBar.js
var import_react186 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/TopBar/TopBar.scss.js
var styles61 = {
  "TopBar": "Polaris-TopBar",
  "LogoDisplayControl": "Polaris-TopBar__LogoDisplayControl",
  "LogoDisplayContainer": "Polaris-TopBar__LogoDisplayContainer",
  "LogoContainer": "Polaris-TopBar__LogoContainer",
  "hasLogoSuffix": "Polaris-TopBar--hasLogoSuffix",
  "Logo": "Polaris-TopBar__Logo",
  "LogoLink": "Polaris-TopBar__LogoLink",
  "ContextControl": "Polaris-TopBar__ContextControl",
  "NavigationIcon": "Polaris-TopBar__NavigationIcon",
  "focused": "Polaris-TopBar--focused",
  "IconWrapper": "Polaris-TopBar__IconWrapper",
  "Contents": "Polaris-TopBar__Contents",
  "SearchField": "Polaris-TopBar__SearchField",
  "SecondaryMenu": "Polaris-TopBar__SecondaryMenu"
};

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/Search/Search.js
var import_react180 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/Search/Search.scss.js
var styles62 = {
  "Search": "Polaris-TopBar-Search",
  "SearchContent": "Polaris-TopBar-Search__SearchContent",
  "visible": "Polaris-TopBar-Search--visible",
  "Results": "Polaris-TopBar-Search__Results"
};

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/SearchDismissOverlay/SearchDismissOverlay.js
var import_react179 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/SearchDismissOverlay/SearchDismissOverlay.scss.js
var styles63 = {
  "SearchDismissOverlay": "Polaris-TopBar-SearchDismissOverlay",
  "visible": "Polaris-TopBar-SearchDismissOverlay--visible"
};

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/SearchDismissOverlay/SearchDismissOverlay.js
function SearchDismissOverlay({
  onDismiss,
  visible
}) {
  const node = (0, import_react179.useRef)(null);
  const handleDismiss = (0, import_react179.useCallback)(({
    target
  }) => {
    if (target === node.current && onDismiss != null) {
      onDismiss();
    }
  }, [onDismiss]);
  return /* @__PURE__ */ import_react179.default.createElement(import_react179.default.Fragment, null, visible ? /* @__PURE__ */ import_react179.default.createElement(ScrollLock, null) : null, /* @__PURE__ */ import_react179.default.createElement("div", {
    ref: node,
    className: classNames(styles63.SearchDismissOverlay, visible && styles63.visible),
    onClick: handleDismiss
  }));
}

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/Search/Search.js
function Search({
  visible,
  children,
  onDismiss,
  overlayVisible = false
}) {
  if (children == null) {
    return null;
  }
  const overlayMarkup = visible ? /* @__PURE__ */ import_react180.default.createElement(SearchDismissOverlay, {
    onDismiss,
    visible: overlayVisible
  }) : null;
  return /* @__PURE__ */ import_react180.default.createElement(import_react180.default.Fragment, null, overlayMarkup, /* @__PURE__ */ import_react180.default.createElement("div", {
    className: classNames(styles62.Search, visible && styles62.visible)
  }, /* @__PURE__ */ import_react180.default.createElement("div", {
    className: styles62.SearchContent
  }, /* @__PURE__ */ import_react180.default.createElement("div", {
    className: styles62.Results
  }, children))));
}

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/SearchField/SearchField.js
var import_react181 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/SearchField/SearchField.scss.js
var styles64 = {
  "SearchField": "Polaris-TopBar-SearchField",
  "focused": "Polaris-TopBar-SearchField--focused",
  "Input": "Polaris-TopBar-SearchField__Input",
  "Backdrop": "Polaris-TopBar-SearchField__Backdrop",
  "BackdropShowFocusBorder": "Polaris-TopBar-SearchField__BackdropShowFocusBorder",
  "Icon": "Polaris-TopBar-SearchField__Icon",
  "Clear": "Polaris-TopBar-SearchField__Clear"
};

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/SearchField/SearchField.js
function SearchField({
  value,
  focused,
  active,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  onCancel,
  showFocusBorder
}) {
  const i18n = useI18n();
  const [forceActive, setForceActive] = (0, import_react181.useState)(false);
  const input = (0, import_react181.useRef)(null);
  const searchId = useUniqueId("SearchField");
  const handleChange = (0, import_react181.useCallback)(({
    currentTarget
  }) => {
    onChange(currentTarget.value);
  }, [onChange]);
  const handleFocus = (0, import_react181.useCallback)(() => onFocus && onFocus(), [onFocus]);
  const handleBlur = (0, import_react181.useCallback)(() => onBlur && onBlur(), [onBlur]);
  const handleClear = (0, import_react181.useCallback)(() => {
    onCancel && onCancel();
    if (!input.current) {
      return;
    }
    input.current.value = "";
    onChange("");
    input.current.focus();
  }, [onCancel, onChange]);
  (0, import_react181.useEffect)(() => {
    if (!input.current) {
      return;
    }
    if (focused) {
      input.current.focus();
    } else {
      input.current.blur();
    }
  }, [focused]);
  const clearMarkup = value !== "" && /* @__PURE__ */ import_react181.default.createElement("button", {
    type: "button",
    "aria-label": i18n.translate("Polaris.TopBar.SearchField.clearButtonLabel"),
    className: styles64.Clear,
    onClick: handleClear,
    onBlur: () => {
      setForceActive(false);
      handleClear();
    },
    onFocus: () => {
      handleFocus();
      setForceActive(true);
    }
  }, /* @__PURE__ */ import_react181.default.createElement(Icon, {
    source: SvgCircleCancelMinor
  }));
  const className = classNames(styles64.SearchField, (focused || active || forceActive) && styles64.focused);
  return /* @__PURE__ */ import_react181.default.createElement("div", {
    className,
    onFocus: handleFocus,
    onBlur: handleBlur
  }, /* @__PURE__ */ import_react181.default.createElement(Text, {
    as: "span",
    visuallyHidden: true
  }, /* @__PURE__ */ import_react181.default.createElement("label", {
    htmlFor: searchId
  }, i18n.translate("Polaris.TopBar.SearchField.search"))), /* @__PURE__ */ import_react181.default.createElement("input", {
    id: searchId,
    className: styles64.Input,
    placeholder,
    type: "search",
    autoCapitalize: "off",
    autoComplete: "off",
    autoCorrect: "off",
    ref: input,
    value,
    onChange: handleChange,
    onKeyDown: preventDefault
  }), /* @__PURE__ */ import_react181.default.createElement("span", {
    className: styles64.Icon
  }, /* @__PURE__ */ import_react181.default.createElement(Icon, {
    source: SvgSearchMinor
  })), clearMarkup, /* @__PURE__ */ import_react181.default.createElement("div", {
    className: classNames(styles64.Backdrop, showFocusBorder && styles64.BackdropShowFocusBorder)
  }));
}
function preventDefault(event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
}

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/UserMenu/UserMenu.js
var import_react185 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/UserMenu/UserMenu.scss.js
var styles65 = {
  "Details": "Polaris-TopBar-UserMenu__Details"
};

// node_modules/@shopify/polaris/build/esm/components/MessageIndicator/MessageIndicator.js
var import_react182 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/MessageIndicator/MessageIndicator.scss.js
var styles66 = {
  "MessageIndicatorWrapper": "Polaris-MessageIndicator__MessageIndicatorWrapper",
  "MessageIndicator": "Polaris-MessageIndicator"
};

// node_modules/@shopify/polaris/build/esm/components/MessageIndicator/MessageIndicator.js
function MessageIndicator({
  children,
  active
}) {
  const indicatorMarkup = active && /* @__PURE__ */ import_react182.default.createElement("div", {
    className: styles66.MessageIndicator
  });
  return /* @__PURE__ */ import_react182.default.createElement("div", {
    className: styles66.MessageIndicatorWrapper
  }, indicatorMarkup, children);
}

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/Menu/Menu.js
var import_react184 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/Menu/Menu.scss.js
var styles67 = {
  "ActivatorWrapper": "Polaris-TopBar-Menu__ActivatorWrapper",
  "Activator": "Polaris-TopBar-Menu__Activator",
  "Section": "Polaris-TopBar-Menu__Section"
};

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/Menu/components/Message/Message.js
var import_react183 = __toESM(require_react());

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/Menu/components/Message/Message.scss.js
var styles68 = {
  "Section": "Polaris-Menu-Message__Section"
};

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/Menu/components/Message/Message.js
function Message({
  title,
  description,
  action,
  link,
  badge
}) {
  const badgeMarkup = badge && /* @__PURE__ */ import_react183.default.createElement(Badge, {
    status: badge.status
  }, badge.content);
  const {
    to,
    content: linkContent
  } = link;
  const {
    onClick,
    content: actionContent
  } = action;
  return /* @__PURE__ */ import_react183.default.createElement("div", {
    className: styles68.Section
  }, /* @__PURE__ */ import_react183.default.createElement(Popover2.Section, null, /* @__PURE__ */ import_react183.default.createElement(LegacyStack, {
    vertical: true,
    spacing: "tight"
  }, /* @__PURE__ */ import_react183.default.createElement(TextContainer, null, /* @__PURE__ */ import_react183.default.createElement(Text, {
    variant: "headingMd",
    as: "h2"
  }, title, badgeMarkup), /* @__PURE__ */ import_react183.default.createElement("p", null, description)), /* @__PURE__ */ import_react183.default.createElement(Link, {
    url: to
  }, linkContent), /* @__PURE__ */ import_react183.default.createElement(Button, {
    plain: true,
    onClick
  }, actionContent))));
}

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/Menu/Menu.js
function Menu(props) {
  const {
    actions,
    onOpen,
    onClose,
    open,
    activatorContent,
    message,
    accessibilityLabel
  } = props;
  const badgeProps = message && message.badge && {
    content: message.badge.content,
    status: message.badge.status
  };
  const messageMarkup = message && /* @__PURE__ */ import_react184.default.createElement(Message, {
    title: message.title,
    description: message.description,
    action: {
      onClick: message.action.onClick,
      content: message.action.content
    },
    link: {
      to: message.link.to,
      content: message.link.content
    },
    badge: badgeProps
  });
  return /* @__PURE__ */ import_react184.default.createElement(Popover2, {
    activator: /* @__PURE__ */ import_react184.default.createElement("div", {
      className: styles67.ActivatorWrapper
    }, /* @__PURE__ */ import_react184.default.createElement("button", {
      type: "button",
      className: styles67.Activator,
      onClick: onOpen,
      "aria-label": accessibilityLabel
    }, activatorContent)),
    active: open,
    onClose,
    fixed: true,
    fullHeight: true,
    preferredAlignment: "right"
  }, /* @__PURE__ */ import_react184.default.createElement(ActionList, {
    onActionAnyItem: onClose,
    sections: actions
  }), messageMarkup);
}

// node_modules/@shopify/polaris/build/esm/components/TopBar/components/UserMenu/UserMenu.js
function UserMenu({
  name,
  detail,
  avatar,
  initials,
  actions,
  message,
  onToggle,
  open,
  accessibilityLabel,
  customActivator
}) {
  const showIndicator = Boolean(message);
  const activatorContentMarkup = customActivator ? customActivator : /* @__PURE__ */ import_react185.default.createElement(import_react185.default.Fragment, null, /* @__PURE__ */ import_react185.default.createElement("span", {
    className: styles65.Details
  }, /* @__PURE__ */ import_react185.default.createElement(Text, {
    as: "p",
    alignment: "start",
    fontWeight: "medium",
    truncate: true
  }, name), /* @__PURE__ */ import_react185.default.createElement(Text, {
    as: "p",
    variant: "bodySm",
    alignment: "start",
    color: "subdued",
    truncate: true
  }, detail)), /* @__PURE__ */ import_react185.default.createElement(MessageIndicator, {
    active: showIndicator
  }, /* @__PURE__ */ import_react185.default.createElement(Avatar, {
    shape: "square",
    size: "small",
    initials: initials && initials.replace(" ", ""),
    source: avatar
  })));
  return /* @__PURE__ */ import_react185.default.createElement(Menu, {
    activatorContent: activatorContentMarkup,
    open,
    onOpen: onToggle,
    onClose: onToggle,
    actions,
    message,
    accessibilityLabel
  });
}

// node_modules/@shopify/polaris/build/esm/components/TopBar/TopBar.js
var TopBar = function TopBar2({
  showNavigationToggle,
  userMenu,
  searchResults,
  searchField,
  secondaryMenu,
  searchResultsVisible,
  searchResultsOverlayVisible = false,
  onNavigationToggle,
  onSearchResultsDismiss,
  contextControl,
  logoSuffix
}) {
  const i18n = useI18n();
  const {
    logo
  } = useFrame();
  const {
    value: focused,
    setTrue: forceTrueFocused,
    setFalse: forceFalseFocused
  } = useToggle(false);
  const iconClassName = classNames(styles61.NavigationIcon, focused && styles61.focused);
  const navigationButtonMarkup = showNavigationToggle ? /* @__PURE__ */ import_react186.default.createElement("button", {
    type: "button",
    className: iconClassName,
    onClick: onNavigationToggle,
    onFocus: forceTrueFocused,
    onBlur: forceFalseFocused,
    "aria-label": i18n.translate("Polaris.TopBar.toggleMenuLabel")
  }, /* @__PURE__ */ import_react186.default.createElement("div", {
    className: styles61.IconWrapper
  }, /* @__PURE__ */ import_react186.default.createElement(Icon, {
    source: SvgMobileHamburgerMajor
  }))) : null;
  const width = getWidth(logo, 104);
  let contextMarkup;
  if (contextControl) {
    contextMarkup = /* @__PURE__ */ import_react186.default.createElement("div", {
      className: styles61.ContextControl
    }, contextControl);
  } else if (logo) {
    const className = classNames(styles61.LogoContainer, showNavigationToggle || searchField ? styles61.LogoDisplayControl : styles61.LogoDisplayContainer, logoSuffix && styles61.hasLogoSuffix);
    contextMarkup = /* @__PURE__ */ import_react186.default.createElement("div", {
      className
    }, /* @__PURE__ */ import_react186.default.createElement(UnstyledLink, {
      url: logo.url || "",
      className: styles61.LogoLink,
      style: {
        width
      }
    }, /* @__PURE__ */ import_react186.default.createElement(Image, {
      source: logo.topBarSource || "",
      alt: logo.accessibilityLabel || "",
      className: styles61.Logo,
      style: {
        width
      }
    })), logoSuffix);
  }
  const searchMarkup = searchField ? /* @__PURE__ */ import_react186.default.createElement(import_react186.default.Fragment, null, searchField, /* @__PURE__ */ import_react186.default.createElement(Search, {
    visible: searchResultsVisible,
    onDismiss: onSearchResultsDismiss,
    overlayVisible: searchResultsOverlayVisible
  }, searchResults)) : null;
  return /* @__PURE__ */ import_react186.default.createElement("div", {
    className: styles61.TopBar
  }, navigationButtonMarkup, contextMarkup, /* @__PURE__ */ import_react186.default.createElement("div", {
    className: styles61.Contents
  }, /* @__PURE__ */ import_react186.default.createElement("div", {
    className: styles61.SearchField
  }, searchMarkup), /* @__PURE__ */ import_react186.default.createElement("div", {
    className: styles61.SecondaryMenu
  }, secondaryMenu), userMenu));
};
TopBar.Menu = Menu;
TopBar.SearchField = SearchField;
TopBar.UserMenu = UserMenu;

export {
  AppProvider,
  Text,
  Icon,
  Badge,
  Button,
  TextField,
  Card,
  Collapsible,
  DataTable,
  DropZone,
  Frame,
  Layout,
  Navigation2 as Navigation,
  Page,
  Select,
  SettingToggle,
  Stack2 as Stack,
  Tabs,
  Thumbnail,
  TopBar
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=/build/_shared/chunk-4DMPU7RK.js.map
