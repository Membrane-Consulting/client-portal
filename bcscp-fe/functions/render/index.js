var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = {exports: {}}).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module2) {
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
    module2.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s2 = 1; s2 < arguments.length; s2++) {
        from = Object(arguments[s2]);
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

// node_modules/rxjs/internal/util/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/rxjs/internal/util/isFunction.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    function isFunction(x) {
      return typeof x === "function";
    }
    exports.isFunction = isFunction;
  }
});

// node_modules/rxjs/internal/config.js
var require_config = __commonJS({
  "node_modules/rxjs/internal/config.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var _enable_super_gross_mode_that_will_cause_bad_things = false;
    exports.config = {
      Promise: void 0,
      set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
          var error3 = new Error();
          console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + error3.stack);
        } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
          console.log("RxJS: Back to a better error behavior. Thank you. <3");
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
      },
      get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
      }
    };
  }
});

// node_modules/rxjs/internal/util/hostReportError.js
var require_hostReportError = __commonJS({
  "node_modules/rxjs/internal/util/hostReportError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    function hostReportError(err) {
      setTimeout(function() {
        throw err;
      }, 0);
    }
    exports.hostReportError = hostReportError;
  }
});

// node_modules/rxjs/internal/Observer.js
var require_Observer = __commonJS({
  "node_modules/rxjs/internal/Observer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var config_1 = require_config();
    var hostReportError_1 = require_hostReportError();
    exports.empty = {
      closed: true,
      next: function(value) {
      },
      error: function(err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
          throw err;
        } else {
          hostReportError_1.hostReportError(err);
        }
      },
      complete: function() {
      }
    };
  }
});

// node_modules/rxjs/internal/util/isArray.js
var require_isArray = __commonJS({
  "node_modules/rxjs/internal/util/isArray.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.isArray = function() {
      return Array.isArray || function(x) {
        return x && typeof x.length === "number";
      };
    }();
  }
});

// node_modules/rxjs/internal/util/isObject.js
var require_isObject = __commonJS({
  "node_modules/rxjs/internal/util/isObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    function isObject(x) {
      return x !== null && typeof x === "object";
    }
    exports.isObject = isObject;
  }
});

// node_modules/rxjs/internal/util/UnsubscriptionError.js
var require_UnsubscriptionError = __commonJS({
  "node_modules/rxjs/internal/util/UnsubscriptionError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var UnsubscriptionErrorImpl = function() {
      function UnsubscriptionErrorImpl2(errors) {
        Error.call(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
          return i + 1 + ") " + err.toString();
        }).join("\n  ") : "";
        this.name = "UnsubscriptionError";
        this.errors = errors;
        return this;
      }
      UnsubscriptionErrorImpl2.prototype = Object.create(Error.prototype);
      return UnsubscriptionErrorImpl2;
    }();
    exports.UnsubscriptionError = UnsubscriptionErrorImpl;
  }
});

// node_modules/rxjs/internal/Subscription.js
var require_Subscription = __commonJS({
  "node_modules/rxjs/internal/Subscription.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var isArray_1 = require_isArray();
    var isObject_1 = require_isObject();
    var isFunction_1 = require_isFunction();
    var UnsubscriptionError_1 = require_UnsubscriptionError();
    var Subscription = function() {
      function Subscription2(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
          this._ctorUnsubscribe = true;
          this._unsubscribe = unsubscribe;
        }
      }
      Subscription2.prototype.unsubscribe = function() {
        var errors;
        if (this.closed) {
          return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription2) {
          _parentOrParents.remove(this);
        } else if (_parentOrParents !== null) {
          for (var index2 = 0; index2 < _parentOrParents.length; ++index2) {
            var parent_1 = _parentOrParents[index2];
            parent_1.remove(this);
          }
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
          if (_ctorUnsubscribe) {
            this._unsubscribe = void 0;
          }
          try {
            _unsubscribe.call(this);
          } catch (e) {
            errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
          }
        }
        if (isArray_1.isArray(_subscriptions)) {
          var index2 = -1;
          var len = _subscriptions.length;
          while (++index2 < len) {
            var sub = _subscriptions[index2];
            if (isObject_1.isObject(sub)) {
              try {
                sub.unsubscribe();
              } catch (e) {
                errors = errors || [];
                if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                  errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                } else {
                  errors.push(e);
                }
              }
            }
          }
        }
        if (errors) {
          throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
      };
      Subscription2.prototype.add = function(teardown) {
        var subscription = teardown;
        if (!teardown) {
          return Subscription2.EMPTY;
        }
        switch (typeof teardown) {
          case "function":
            subscription = new Subscription2(teardown);
          case "object":
            if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== "function") {
              return subscription;
            } else if (this.closed) {
              subscription.unsubscribe();
              return subscription;
            } else if (!(subscription instanceof Subscription2)) {
              var tmp = subscription;
              subscription = new Subscription2();
              subscription._subscriptions = [tmp];
            }
            break;
          default: {
            throw new Error("unrecognized teardown " + teardown + " added to Subscription.");
          }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
          subscription._parentOrParents = this;
        } else if (_parentOrParents instanceof Subscription2) {
          if (_parentOrParents === this) {
            return subscription;
          }
          subscription._parentOrParents = [_parentOrParents, this];
        } else if (_parentOrParents.indexOf(this) === -1) {
          _parentOrParents.push(this);
        } else {
          return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
          this._subscriptions = [subscription];
        } else {
          subscriptions.push(subscription);
        }
        return subscription;
      };
      Subscription2.prototype.remove = function(subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
          var subscriptionIndex = subscriptions.indexOf(subscription);
          if (subscriptionIndex !== -1) {
            subscriptions.splice(subscriptionIndex, 1);
          }
        }
      };
      Subscription2.EMPTY = function(empty2) {
        empty2.closed = true;
        return empty2;
      }(new Subscription2());
      return Subscription2;
    }();
    exports.Subscription = Subscription;
    function flattenUnsubscriptionErrors(errors) {
      return errors.reduce(function(errs, err) {
        return errs.concat(err instanceof UnsubscriptionError_1.UnsubscriptionError ? err.errors : err);
      }, []);
    }
  }
});

// node_modules/rxjs/internal/symbol/rxSubscriber.js
var require_rxSubscriber = __commonJS({
  "node_modules/rxjs/internal/symbol/rxSubscriber.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.rxSubscriber = function() {
      return typeof Symbol === "function" ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random();
    }();
    exports.$$rxSubscriber = exports.rxSubscriber;
  }
});

// node_modules/rxjs/internal/Subscriber.js
var require_Subscriber = __commonJS({
  "node_modules/rxjs/internal/Subscriber.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {value: true});
    var isFunction_1 = require_isFunction();
    var Observer_1 = require_Observer();
    var Subscription_1 = require_Subscription();
    var rxSubscriber_1 = require_rxSubscriber();
    var config_1 = require_config();
    var hostReportError_1 = require_hostReportError();
    var Subscriber = function(_super) {
      __extends(Subscriber2, _super);
      function Subscriber2(destinationOrNext, error3, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
          case 0:
            _this.destination = Observer_1.empty;
            break;
          case 1:
            if (!destinationOrNext) {
              _this.destination = Observer_1.empty;
              break;
            }
            if (typeof destinationOrNext === "object") {
              if (destinationOrNext instanceof Subscriber2) {
                _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                _this.destination = destinationOrNext;
                destinationOrNext.add(_this);
              } else {
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext);
              }
              break;
            }
          default:
            _this.syncErrorThrowable = true;
            _this.destination = new SafeSubscriber(_this, destinationOrNext, error3, complete);
            break;
        }
        return _this;
      }
      Subscriber2.prototype[rxSubscriber_1.rxSubscriber] = function() {
        return this;
      };
      Subscriber2.create = function(next, error3, complete) {
        var subscriber = new Subscriber2(next, error3, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
      };
      Subscriber2.prototype.next = function(value) {
        if (!this.isStopped) {
          this._next(value);
        }
      };
      Subscriber2.prototype.error = function(err) {
        if (!this.isStopped) {
          this.isStopped = true;
          this._error(err);
        }
      };
      Subscriber2.prototype.complete = function() {
        if (!this.isStopped) {
          this.isStopped = true;
          this._complete();
        }
      };
      Subscriber2.prototype.unsubscribe = function() {
        if (this.closed) {
          return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
      };
      Subscriber2.prototype._next = function(value) {
        this.destination.next(value);
      };
      Subscriber2.prototype._error = function(err) {
        this.destination.error(err);
        this.unsubscribe();
      };
      Subscriber2.prototype._complete = function() {
        this.destination.complete();
        this.unsubscribe();
      };
      Subscriber2.prototype._unsubscribeAndRecycle = function() {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
      };
      return Subscriber2;
    }(Subscription_1.Subscription);
    exports.Subscriber = Subscriber;
    var SafeSubscriber = function(_super) {
      __extends(SafeSubscriber2, _super);
      function SafeSubscriber2(_parentSubscriber, observerOrNext, error3, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context2 = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
          next = observerOrNext;
        } else if (observerOrNext) {
          next = observerOrNext.next;
          error3 = observerOrNext.error;
          complete = observerOrNext.complete;
          if (observerOrNext !== Observer_1.empty) {
            context2 = Object.create(observerOrNext);
            if (isFunction_1.isFunction(context2.unsubscribe)) {
              _this.add(context2.unsubscribe.bind(context2));
            }
            context2.unsubscribe = _this.unsubscribe.bind(_this);
          }
        }
        _this._context = context2;
        _this._next = next;
        _this._error = error3;
        _this._complete = complete;
        return _this;
      }
      SafeSubscriber2.prototype.next = function(value) {
        if (!this.isStopped && this._next) {
          var _parentSubscriber = this._parentSubscriber;
          if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
            this.__tryOrUnsub(this._next, value);
          } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
            this.unsubscribe();
          }
        }
      };
      SafeSubscriber2.prototype.error = function(err) {
        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;
          var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
          if (this._error) {
            if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(this._error, err);
              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, this._error, err);
              this.unsubscribe();
            }
          } else if (!_parentSubscriber.syncErrorThrowable) {
            this.unsubscribe();
            if (useDeprecatedSynchronousErrorHandling) {
              throw err;
            }
            hostReportError_1.hostReportError(err);
          } else {
            if (useDeprecatedSynchronousErrorHandling) {
              _parentSubscriber.syncErrorValue = err;
              _parentSubscriber.syncErrorThrown = true;
            } else {
              hostReportError_1.hostReportError(err);
            }
            this.unsubscribe();
          }
        }
      };
      SafeSubscriber2.prototype.complete = function() {
        var _this = this;
        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;
          if (this._complete) {
            var wrappedComplete = function() {
              return _this._complete.call(_this._context);
            };
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(wrappedComplete);
              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, wrappedComplete);
              this.unsubscribe();
            }
          } else {
            this.unsubscribe();
          }
        }
      };
      SafeSubscriber2.prototype.__tryOrUnsub = function(fn, value) {
        try {
          fn.call(this._context, value);
        } catch (err) {
          this.unsubscribe();
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
          } else {
            hostReportError_1.hostReportError(err);
          }
        }
      };
      SafeSubscriber2.prototype.__tryOrSetError = function(parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
          throw new Error("bad call");
        }
        try {
          fn.call(this._context, value);
        } catch (err) {
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
          } else {
            hostReportError_1.hostReportError(err);
            return true;
          }
        }
        return false;
      };
      SafeSubscriber2.prototype._unsubscribe = function() {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
      };
      return SafeSubscriber2;
    }(Subscriber);
    exports.SafeSubscriber = SafeSubscriber;
  }
});

// node_modules/rxjs/internal/operators/filter.js
var require_filter = __commonJS({
  "node_modules/rxjs/internal/operators/filter.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {value: true});
    var Subscriber_1 = require_Subscriber();
    function filter(predicate, thisArg) {
      return function filterOperatorFunction(source) {
        return source.lift(new FilterOperator(predicate, thisArg));
      };
    }
    exports.filter = filter;
    var FilterOperator = function() {
      function FilterOperator2(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
      }
      FilterOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
      };
      return FilterOperator2;
    }();
    var FilterSubscriber = function(_super) {
      __extends(FilterSubscriber2, _super);
      function FilterSubscriber2(destination, predicate, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.thisArg = thisArg;
        _this.count = 0;
        return _this;
      }
      FilterSubscriber2.prototype._next = function(value) {
        var result;
        try {
          result = this.predicate.call(this.thisArg, value, this.count++);
        } catch (err) {
          this.destination.error(err);
          return;
        }
        if (result) {
          this.destination.next(value);
        }
      };
      return FilterSubscriber2;
    }(Subscriber_1.Subscriber);
  }
});

// node_modules/@sanity/observable/operators/filter.js
var require_filter2 = __commonJS({
  "node_modules/@sanity/observable/operators/filter.js"(exports) {
    exports.filter = require_filter().filter;
  }
});

// node_modules/rxjs/internal/operators/map.js
var require_map = __commonJS({
  "node_modules/rxjs/internal/operators/map.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {value: true});
    var Subscriber_1 = require_Subscriber();
    function map(project, thisArg) {
      return function mapOperation(source) {
        if (typeof project !== "function") {
          throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
        }
        return source.lift(new MapOperator(project, thisArg));
      };
    }
    exports.map = map;
    var MapOperator = function() {
      function MapOperator2(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
      }
      MapOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
      };
      return MapOperator2;
    }();
    exports.MapOperator = MapOperator;
    var MapSubscriber = function(_super) {
      __extends(MapSubscriber2, _super);
      function MapSubscriber2(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
      }
      MapSubscriber2.prototype._next = function(value) {
        var result;
        try {
          result = this.project.call(this.thisArg, value, this.count++);
        } catch (err) {
          this.destination.error(err);
          return;
        }
        this.destination.next(result);
      };
      return MapSubscriber2;
    }(Subscriber_1.Subscriber);
  }
});

// node_modules/@sanity/observable/operators/map.js
var require_map2 = __commonJS({
  "node_modules/@sanity/observable/operators/map.js"(exports) {
    exports.map = require_map().map;
  }
});

// node_modules/is-obj/index.js
var require_is_obj = __commonJS({
  "node_modules/is-obj/index.js"(exports, module2) {
    "use strict";
    module2.exports = function(x) {
      var type = typeof x;
      return x !== null && (type === "object" || type === "function");
    };
  }
});

// node_modules/deep-assign/index.js
var require_deep_assign = __commonJS({
  "node_modules/deep-assign/index.js"(exports, module2) {
    "use strict";
    var isObj = require_is_obj();
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Sources cannot be null or undefined");
      }
      return Object(val);
    }
    function assignKey(to, from, key) {
      var val = from[key];
      if (val === void 0 || val === null) {
        return;
      }
      if (hasOwnProperty.call(to, key)) {
        if (to[key] === void 0 || to[key] === null) {
          throw new TypeError("Cannot convert undefined or null to object (" + key + ")");
        }
      }
      if (!hasOwnProperty.call(to, key) || !isObj(val)) {
        to[key] = val;
      } else {
        to[key] = assign2(Object(to[key]), from[key]);
      }
    }
    function assign2(to, from) {
      if (to === from) {
        return to;
      }
      from = Object(from);
      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          assignKey(to, from, key);
        }
      }
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            assignKey(to, from, symbols[i]);
          }
        }
      }
      return to;
    }
    module2.exports = function deepAssign(target) {
      target = toObject(target);
      for (var s2 = 1; s2 < arguments.length; s2++) {
        assign2(target, arguments[s2]);
      }
      return target;
    };
  }
});

// node_modules/@sanity/client/lib/util/getSelection.js
var require_getSelection = __commonJS({
  "node_modules/@sanity/client/lib/util/getSelection.js"(exports, module2) {
    "use strict";
    module2.exports = function getSelection(sel) {
      if (typeof sel === "string" || Array.isArray(sel)) {
        return {
          id: sel
        };
      }
      if (sel && sel.query) {
        return {
          query: sel.query
        };
      }
      var selectionOpts = ["* Document ID (<docId>)", "* Array of document IDs", "* Object containing `query`"].join("\n");
      throw new Error("Unknown selection - must be one of:\n\n".concat(selectionOpts));
    };
  }
});

// node_modules/@sanity/client/lib/validators.js
var require_validators = __commonJS({
  "node_modules/@sanity/client/lib/validators.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    var VALID_ASSET_TYPES = ["image", "file"];
    var VALID_INSERT_LOCATIONS = ["before", "after", "replace"];
    exports.dataset = function(name) {
      if (!/^(~[a-z0-9]{1}[-\w]{0,25}|[a-z0-9]{1}[-\w]{0,19})$/.test(name)) {
        throw new Error("Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 20 characters");
      }
    };
    exports.projectId = function(id) {
      if (!/^[-a-z0-9]+$/i.test(id)) {
        throw new Error("`projectId` can only contain only a-z, 0-9 and dashes");
      }
    };
    exports.validateAssetType = function(type) {
      if (VALID_ASSET_TYPES.indexOf(type) === -1) {
        throw new Error("Invalid asset type: ".concat(type, ". Must be one of ").concat(VALID_ASSET_TYPES.join(", ")));
      }
    };
    exports.validateObject = function(op, val) {
      if (val === null || _typeof(val) !== "object" || Array.isArray(val)) {
        throw new Error("".concat(op, "() takes an object of properties"));
      }
    };
    exports.requireDocumentId = function(op, doc) {
      if (!doc._id) {
        throw new Error("".concat(op, '() requires that the document contains an ID ("_id" property)'));
      }
      exports.validateDocumentId(op, doc._id);
    };
    exports.validateDocumentId = function(op, id) {
      if (typeof id !== "string" || !/^[a-z0-9_.-]+$/i.test(id)) {
        throw new Error("".concat(op, '(): "').concat(id, '" is not a valid document ID'));
      }
    };
    exports.validateInsert = function(at, selector, items) {
      var signature = "insert(at, selector, items)";
      if (VALID_INSERT_LOCATIONS.indexOf(at) === -1) {
        var valid = VALID_INSERT_LOCATIONS.map(function(loc) {
          return '"'.concat(loc, '"');
        }).join(", ");
        throw new Error("".concat(signature, ' takes an "at"-argument which is one of: ').concat(valid));
      }
      if (typeof selector !== "string") {
        throw new Error("".concat(signature, ' takes a "selector"-argument which must be a string'));
      }
      if (!Array.isArray(items)) {
        throw new Error("".concat(signature, ' takes an "items"-argument which must be an array'));
      }
    };
    exports.hasDataset = function(config) {
      if (!config.gradientMode && !config.dataset) {
        throw new Error("`dataset` must be provided to perform queries");
      }
      return config.dataset || "";
    };
  }
});

// node_modules/@sanity/client/lib/data/patch.js
var require_patch = __commonJS({
  "node_modules/@sanity/client/lib/data/patch.js"(exports, module2) {
    "use strict";
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var deepAssign = require_deep_assign();
    var assign2 = require_object_assign();
    var getSelection = require_getSelection();
    var validate = require_validators();
    var validateObject = validate.validateObject;
    var validateInsert = validate.validateInsert;
    function Patch(selection) {
      var operations = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var client2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      this.selection = selection;
      this.operations = assign2({}, operations);
      this.client = client2;
    }
    assign2(Patch.prototype, {
      clone: function clone2() {
        return new Patch(this.selection, assign2({}, this.operations), this.client);
      },
      merge: function merge(props) {
        validateObject("merge", props);
        var stack = new Error().stack.toString().split("\n").filter(function(str) {
          return str.trim();
        }).slice(2);
        console.warn('The "merge" patch has been deprecated and will be removed in the future\n'.concat(stack.join("\n")));
        return this._assign("merge", deepAssign(this.operations.merge || {}, props));
      },
      set: function set(props) {
        return this._assign("set", props);
      },
      diffMatchPatch: function diffMatchPatch(props) {
        validateObject("diffMatchPatch", props);
        return this._assign("diffMatchPatch", props);
      },
      unset: function unset(attrs) {
        if (!Array.isArray(attrs)) {
          throw new Error("unset(attrs) takes an array of attributes to unset, non-array given");
        }
        this.operations = assign2({}, this.operations, {
          unset: attrs
        });
        return this;
      },
      setIfMissing: function setIfMissing(props) {
        return this._assign("setIfMissing", props);
      },
      replace: function replace(props) {
        validateObject("replace", props);
        return this._set("set", {
          $: props
        });
      },
      inc: function inc(props) {
        return this._assign("inc", props);
      },
      dec: function dec(props) {
        return this._assign("dec", props);
      },
      insert: function insert(at, selector, items) {
        var _this$_assign;
        validateInsert(at, selector, items);
        return this._assign("insert", (_this$_assign = {}, _defineProperty(_this$_assign, at, selector), _defineProperty(_this$_assign, "items", items), _this$_assign));
      },
      append: function append(selector, items) {
        return this.insert("after", "".concat(selector, "[-1]"), items);
      },
      prepend: function prepend(selector, items) {
        return this.insert("before", "".concat(selector, "[0]"), items);
      },
      splice: function splice(selector, start, deleteCount, items) {
        var delAll = typeof deleteCount === "undefined" || deleteCount === -1;
        var startIndex = start < 0 ? start - 1 : start;
        var delCount = delAll ? -1 : Math.max(0, start + deleteCount);
        var delRange = startIndex < 0 && delCount >= 0 ? "" : delCount;
        var rangeSelector = "".concat(selector, "[").concat(startIndex, ":").concat(delRange, "]");
        return this.insert("replace", rangeSelector, items || []);
      },
      ifRevisionId: function ifRevisionId(rev) {
        this.operations.ifRevisionID = rev;
        return this;
      },
      serialize: function serialize() {
        return assign2(getSelection(this.selection), this.operations);
      },
      toJSON: function toJSON() {
        return this.serialize();
      },
      commit: function commit() {
        var options2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (!this.client) {
          throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
        }
        var returnFirst = typeof this.selection === "string";
        var opts = assign2({
          returnFirst,
          returnDocuments: true
        }, options2);
        return this.client.mutate({
          patch: this.serialize()
        }, opts);
      },
      reset: function reset() {
        this.operations = {};
        return this;
      },
      _set: function _set(op, props) {
        return this._assign(op, props, false);
      },
      _assign: function _assign(op, props) {
        var merge = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
        validateObject(op, props);
        this.operations = assign2({}, this.operations, _defineProperty({}, op, assign2({}, merge && this.operations[op] || {}, props)));
        return this;
      }
    });
    module2.exports = Patch;
  }
});

// node_modules/@sanity/client/lib/data/transaction.js
var require_transaction = __commonJS({
  "node_modules/@sanity/client/lib/data/transaction.js"(exports, module2) {
    "use strict";
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var assign2 = require_object_assign();
    var validators = require_validators();
    var Patch = require_patch();
    var defaultMutateOptions = {
      returnDocuments: false
    };
    function Transaction() {
      var operations = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var client2 = arguments.length > 1 ? arguments[1] : void 0;
      var transactionId = arguments.length > 2 ? arguments[2] : void 0;
      this.trxId = transactionId;
      this.operations = operations;
      this.client = client2;
    }
    assign2(Transaction.prototype, {
      clone: function clone2() {
        return new Transaction(this.operations.slice(0), this.client, this.trxId);
      },
      create: function create(doc) {
        validators.validateObject("create", doc);
        return this._add({
          create: doc
        });
      },
      createIfNotExists: function createIfNotExists(doc) {
        var op = "createIfNotExists";
        validators.validateObject(op, doc);
        validators.requireDocumentId(op, doc);
        return this._add(_defineProperty({}, op, doc));
      },
      createOrReplace: function createOrReplace(doc) {
        var op = "createOrReplace";
        validators.validateObject(op, doc);
        validators.requireDocumentId(op, doc);
        return this._add(_defineProperty({}, op, doc));
      },
      delete: function _delete(documentId) {
        validators.validateDocumentId("delete", documentId);
        return this._add({
          delete: {
            id: documentId
          }
        });
      },
      patch: function patch(documentId, patchOps) {
        var isBuilder = typeof patchOps === "function";
        var isPatch = documentId instanceof Patch;
        if (isPatch) {
          return this._add({
            patch: documentId.serialize()
          });
        }
        if (isBuilder) {
          var patch2 = patchOps(new Patch(documentId, {}, this.client));
          if (!(patch2 instanceof Patch)) {
            throw new Error("function passed to `patch()` must return the patch");
          }
          return this._add({
            patch: patch2.serialize()
          });
        }
        return this._add({
          patch: assign2({
            id: documentId
          }, patchOps)
        });
      },
      transactionId: function transactionId(id) {
        if (!id) {
          return this.trxId;
        }
        this.trxId = id;
        return this;
      },
      serialize: function serialize() {
        return this.operations.slice();
      },
      toJSON: function toJSON() {
        return this.serialize();
      },
      commit: function commit(options2) {
        if (!this.client) {
          throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
        }
        return this.client.mutate(this.serialize(), assign2({
          transactionId: this.trxId
        }, defaultMutateOptions, options2 || {}));
      },
      reset: function reset() {
        this.operations = [];
        return this;
      },
      _add: function _add(mut) {
        this.operations.push(mut);
        return this;
      }
    });
    module2.exports = Transaction;
  }
});

// node_modules/@sanity/client/lib/data/encodeQueryString.js
var require_encodeQueryString = __commonJS({
  "node_modules/@sanity/client/lib/data/encodeQueryString.js"(exports, module2) {
    "use strict";
    var enc = encodeURIComponent;
    module2.exports = function(_ref) {
      var query = _ref.query, _ref$params = _ref.params, params = _ref$params === void 0 ? {} : _ref$params, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options;
      var base = "?query=".concat(enc(query));
      var qString = Object.keys(params).reduce(function(qs, param) {
        return "".concat(qs, "&").concat(enc("$".concat(param)), "=").concat(enc(JSON.stringify(params[param])));
      }, base);
      return Object.keys(options2).reduce(function(qs, option) {
        return options2[option] ? "".concat(qs, "&").concat(enc(option), "=").concat(enc(options2[option])) : qs;
      }, qString);
    };
  }
});

// node_modules/rxjs/internal/util/canReportError.js
var require_canReportError = __commonJS({
  "node_modules/rxjs/internal/util/canReportError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var Subscriber_1 = require_Subscriber();
    function canReportError(observer) {
      while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
          return false;
        } else if (destination && destination instanceof Subscriber_1.Subscriber) {
          observer = destination;
        } else {
          observer = null;
        }
      }
      return true;
    }
    exports.canReportError = canReportError;
  }
});

// node_modules/rxjs/internal/util/toSubscriber.js
var require_toSubscriber = __commonJS({
  "node_modules/rxjs/internal/util/toSubscriber.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var Subscriber_1 = require_Subscriber();
    var rxSubscriber_1 = require_rxSubscriber();
    var Observer_1 = require_Observer();
    function toSubscriber(nextOrObserver, error3, complete) {
      if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
          return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
          return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
      }
      if (!nextOrObserver && !error3 && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
      }
      return new Subscriber_1.Subscriber(nextOrObserver, error3, complete);
    }
    exports.toSubscriber = toSubscriber;
  }
});

// node_modules/rxjs/internal/symbol/observable.js
var require_observable = __commonJS({
  "node_modules/rxjs/internal/symbol/observable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.observable = function() {
      return typeof Symbol === "function" && Symbol.observable || "@@observable";
    }();
  }
});

// node_modules/rxjs/internal/util/identity.js
var require_identity = __commonJS({
  "node_modules/rxjs/internal/util/identity.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    function identity2(x) {
      return x;
    }
    exports.identity = identity2;
  }
});

// node_modules/rxjs/internal/util/pipe.js
var require_pipe = __commonJS({
  "node_modules/rxjs/internal/util/pipe.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var identity_1 = require_identity();
    function pipe() {
      var fns = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
      }
      return pipeFromArray(fns);
    }
    exports.pipe = pipe;
    function pipeFromArray(fns) {
      if (fns.length === 0) {
        return identity_1.identity;
      }
      if (fns.length === 1) {
        return fns[0];
      }
      return function piped(input) {
        return fns.reduce(function(prev, fn) {
          return fn(prev);
        }, input);
      };
    }
    exports.pipeFromArray = pipeFromArray;
  }
});

// node_modules/rxjs/internal/Observable.js
var require_Observable = __commonJS({
  "node_modules/rxjs/internal/Observable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var canReportError_1 = require_canReportError();
    var toSubscriber_1 = require_toSubscriber();
    var observable_1 = require_observable();
    var pipe_1 = require_pipe();
    var config_1 = require_config();
    var Observable = function() {
      function Observable2(subscribe2) {
        this._isScalar = false;
        if (subscribe2) {
          this._subscribe = subscribe2;
        }
      }
      Observable2.prototype.lift = function(operator) {
        var observable = new Observable2();
        observable.source = this;
        observable.operator = operator;
        return observable;
      };
      Observable2.prototype.subscribe = function(observerOrNext, error3, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error3, complete);
        if (operator) {
          sink.add(operator.call(sink, this.source));
        } else {
          sink.add(this.source || config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
        }
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
          if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
              throw sink.syncErrorValue;
            }
          }
        }
        return sink;
      };
      Observable2.prototype._trySubscribe = function(sink) {
        try {
          return this._subscribe(sink);
        } catch (err) {
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
          }
          if (canReportError_1.canReportError(sink)) {
            sink.error(err);
          } else {
            console.warn(err);
          }
        }
      };
      Observable2.prototype.forEach = function(next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve2, reject) {
          var subscription;
          subscription = _this.subscribe(function(value) {
            try {
              next(value);
            } catch (err) {
              reject(err);
              if (subscription) {
                subscription.unsubscribe();
              }
            }
          }, reject, resolve2);
        });
      };
      Observable2.prototype._subscribe = function(subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
      };
      Observable2.prototype[observable_1.observable] = function() {
        return this;
      };
      Observable2.prototype.pipe = function() {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
          return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
      };
      Observable2.prototype.toPromise = function(promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve2, reject) {
          var value;
          _this.subscribe(function(x) {
            return value = x;
          }, function(err) {
            return reject(err);
          }, function() {
            return resolve2(value);
          });
        });
      };
      Observable2.create = function(subscribe2) {
        return new Observable2(subscribe2);
      };
      return Observable2;
    }();
    exports.Observable = Observable;
    function getPromiseCtor(promiseCtor) {
      if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
      }
      if (!promiseCtor) {
        throw new Error("no Promise impl found");
      }
      return promiseCtor;
    }
  }
});

// node_modules/rxjs/internal/operators/scan.js
var require_scan = __commonJS({
  "node_modules/rxjs/internal/operators/scan.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {value: true});
    var Subscriber_1 = require_Subscriber();
    function scan(accumulator, seed) {
      var hasSeed = false;
      if (arguments.length >= 2) {
        hasSeed = true;
      }
      return function scanOperatorFunction(source) {
        return source.lift(new ScanOperator(accumulator, seed, hasSeed));
      };
    }
    exports.scan = scan;
    var ScanOperator = function() {
      function ScanOperator2(accumulator, seed, hasSeed) {
        if (hasSeed === void 0) {
          hasSeed = false;
        }
        this.accumulator = accumulator;
        this.seed = seed;
        this.hasSeed = hasSeed;
      }
      ScanOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
      };
      return ScanOperator2;
    }();
    var ScanSubscriber = function(_super) {
      __extends(ScanSubscriber2, _super);
      function ScanSubscriber2(destination, accumulator, _seed, hasSeed) {
        var _this = _super.call(this, destination) || this;
        _this.accumulator = accumulator;
        _this._seed = _seed;
        _this.hasSeed = hasSeed;
        _this.index = 0;
        return _this;
      }
      Object.defineProperty(ScanSubscriber2.prototype, "seed", {
        get: function() {
          return this._seed;
        },
        set: function(value) {
          this.hasSeed = true;
          this._seed = value;
        },
        enumerable: true,
        configurable: true
      });
      ScanSubscriber2.prototype._next = function(value) {
        if (!this.hasSeed) {
          this.seed = value;
          this.destination.next(value);
        } else {
          return this._tryNext(value);
        }
      };
      ScanSubscriber2.prototype._tryNext = function(value) {
        var index2 = this.index++;
        var result;
        try {
          result = this.accumulator(this.seed, value, index2);
        } catch (err) {
          this.destination.error(err);
        }
        this.seed = result;
        this.destination.next(result);
      };
      return ScanSubscriber2;
    }(Subscriber_1.Subscriber);
  }
});

// node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js
var require_ArgumentOutOfRangeError = __commonJS({
  "node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var ArgumentOutOfRangeErrorImpl = function() {
      function ArgumentOutOfRangeErrorImpl2() {
        Error.call(this);
        this.message = "argument out of range";
        this.name = "ArgumentOutOfRangeError";
        return this;
      }
      ArgumentOutOfRangeErrorImpl2.prototype = Object.create(Error.prototype);
      return ArgumentOutOfRangeErrorImpl2;
    }();
    exports.ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
  }
});

// node_modules/rxjs/internal/observable/empty.js
var require_empty = __commonJS({
  "node_modules/rxjs/internal/observable/empty.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var Observable_1 = require_Observable();
    exports.EMPTY = new Observable_1.Observable(function(subscriber) {
      return subscriber.complete();
    });
    function empty2(scheduler) {
      return scheduler ? emptyScheduled(scheduler) : exports.EMPTY;
    }
    exports.empty = empty2;
    function emptyScheduled(scheduler) {
      return new Observable_1.Observable(function(subscriber) {
        return scheduler.schedule(function() {
          return subscriber.complete();
        });
      });
    }
  }
});

// node_modules/rxjs/internal/operators/takeLast.js
var require_takeLast = __commonJS({
  "node_modules/rxjs/internal/operators/takeLast.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {value: true});
    var Subscriber_1 = require_Subscriber();
    var ArgumentOutOfRangeError_1 = require_ArgumentOutOfRangeError();
    var empty_1 = require_empty();
    function takeLast(count) {
      return function takeLastOperatorFunction(source) {
        if (count === 0) {
          return empty_1.empty();
        } else {
          return source.lift(new TakeLastOperator(count));
        }
      };
    }
    exports.takeLast = takeLast;
    var TakeLastOperator = function() {
      function TakeLastOperator2(total) {
        this.total = total;
        if (this.total < 0) {
          throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
        }
      }
      TakeLastOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new TakeLastSubscriber(subscriber, this.total));
      };
      return TakeLastOperator2;
    }();
    var TakeLastSubscriber = function(_super) {
      __extends(TakeLastSubscriber2, _super);
      function TakeLastSubscriber2(destination, total) {
        var _this = _super.call(this, destination) || this;
        _this.total = total;
        _this.ring = new Array();
        _this.count = 0;
        return _this;
      }
      TakeLastSubscriber2.prototype._next = function(value) {
        var ring = this.ring;
        var total = this.total;
        var count = this.count++;
        if (ring.length < total) {
          ring.push(value);
        } else {
          var index2 = count % total;
          ring[index2] = value;
        }
      };
      TakeLastSubscriber2.prototype._complete = function() {
        var destination = this.destination;
        var count = this.count;
        if (count > 0) {
          var total = this.count >= this.total ? this.total : this.count;
          var ring = this.ring;
          for (var i = 0; i < total; i++) {
            var idx = count++ % total;
            destination.next(ring[idx]);
          }
        }
        destination.complete();
      };
      return TakeLastSubscriber2;
    }(Subscriber_1.Subscriber);
  }
});

// node_modules/rxjs/internal/operators/defaultIfEmpty.js
var require_defaultIfEmpty = __commonJS({
  "node_modules/rxjs/internal/operators/defaultIfEmpty.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {value: true});
    var Subscriber_1 = require_Subscriber();
    function defaultIfEmpty(defaultValue) {
      if (defaultValue === void 0) {
        defaultValue = null;
      }
      return function(source) {
        return source.lift(new DefaultIfEmptyOperator(defaultValue));
      };
    }
    exports.defaultIfEmpty = defaultIfEmpty;
    var DefaultIfEmptyOperator = function() {
      function DefaultIfEmptyOperator2(defaultValue) {
        this.defaultValue = defaultValue;
      }
      DefaultIfEmptyOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
      };
      return DefaultIfEmptyOperator2;
    }();
    var DefaultIfEmptySubscriber = function(_super) {
      __extends(DefaultIfEmptySubscriber2, _super);
      function DefaultIfEmptySubscriber2(destination, defaultValue) {
        var _this = _super.call(this, destination) || this;
        _this.defaultValue = defaultValue;
        _this.isEmpty = true;
        return _this;
      }
      DefaultIfEmptySubscriber2.prototype._next = function(value) {
        this.isEmpty = false;
        this.destination.next(value);
      };
      DefaultIfEmptySubscriber2.prototype._complete = function() {
        if (this.isEmpty) {
          this.destination.next(this.defaultValue);
        }
        this.destination.complete();
      };
      return DefaultIfEmptySubscriber2;
    }(Subscriber_1.Subscriber);
  }
});

// node_modules/rxjs/internal/operators/reduce.js
var require_reduce = __commonJS({
  "node_modules/rxjs/internal/operators/reduce.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var scan_1 = require_scan();
    var takeLast_1 = require_takeLast();
    var defaultIfEmpty_1 = require_defaultIfEmpty();
    var pipe_1 = require_pipe();
    function reduce(accumulator, seed) {
      if (arguments.length >= 2) {
        return function reduceOperatorFunctionWithSeed(source) {
          return pipe_1.pipe(scan_1.scan(accumulator, seed), takeLast_1.takeLast(1), defaultIfEmpty_1.defaultIfEmpty(seed))(source);
        };
      }
      return function reduceOperatorFunction(source) {
        return pipe_1.pipe(scan_1.scan(function(acc, value, index2) {
          return accumulator(acc, value, index2 + 1);
        }), takeLast_1.takeLast(1))(source);
      };
    }
    exports.reduce = reduce;
  }
});

// node_modules/@sanity/observable/operators/reduce.js
var require_reduce2 = __commonJS({
  "node_modules/@sanity/observable/operators/reduce.js"(exports) {
    exports.reduce = require_reduce().reduce;
  }
});

// node_modules/@sanity/observable/lib/SanityObservableMinimal.js
var require_SanityObservableMinimal = __commonJS({
  "node_modules/@sanity/observable/lib/SanityObservableMinimal.js"(exports, module2) {
    "use strict";
    var _require = require_Observable();
    var Observable = _require.Observable;
    var assign2 = require_object_assign();
    var _require2 = require_map2();
    var map = _require2.map;
    var _require3 = require_filter2();
    var filter = _require3.filter;
    var _require4 = require_reduce2();
    var reduce = _require4.reduce;
    function SanityObservableMinimal() {
      Observable.apply(this, arguments);
    }
    SanityObservableMinimal.prototype = Object.create(assign2(Object.create(null), Observable.prototype));
    Object.defineProperty(SanityObservableMinimal.prototype, "constructor", {
      value: SanityObservableMinimal,
      enumerable: false,
      writable: true,
      configurable: true
    });
    SanityObservableMinimal.prototype.lift = function lift(operator) {
      var observable = new SanityObservableMinimal();
      observable.source = this;
      observable.operator = operator;
      return observable;
    };
    function createDeprecatedMemberOp(name, op) {
      var hasWarned = false;
      return function deprecatedOperator() {
        if (!hasWarned) {
          hasWarned = true;
          console.warn(new Error("Calling observable.".concat(name, "(...) is deprecated. Please use observable.pipe(").concat(name, "(...)) instead")));
        }
        return this.pipe(op.apply(this, arguments));
      };
    }
    SanityObservableMinimal.prototype.map = createDeprecatedMemberOp("map", map);
    SanityObservableMinimal.prototype.filter = createDeprecatedMemberOp("filter", filter);
    SanityObservableMinimal.prototype.reduce = createDeprecatedMemberOp("filter", reduce);
    module2.exports = SanityObservableMinimal;
  }
});

// node_modules/@sanity/observable/minimal.js
var require_minimal = __commonJS({
  "node_modules/@sanity/observable/minimal.js"(exports, module2) {
    module2.exports = require_SanityObservableMinimal();
  }
});

// node_modules/requires-port/index.js
var require_requires_port = __commonJS({
  "node_modules/requires-port/index.js"(exports, module2) {
    "use strict";
    module2.exports = function required(port, protocol) {
      protocol = protocol.split(":")[0];
      port = +port;
      if (!port)
        return false;
      switch (protocol) {
        case "http":
        case "ws":
          return port !== 80;
        case "https":
        case "wss":
          return port !== 443;
        case "ftp":
          return port !== 21;
        case "gopher":
          return port !== 70;
        case "file":
          return false;
      }
      return port !== 0;
    };
  }
});

// node_modules/querystringify/index.js
var require_querystringify = __commonJS({
  "node_modules/querystringify/index.js"(exports) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var undef;
    function decode(input) {
      try {
        return decodeURIComponent(input.replace(/\+/g, " "));
      } catch (e) {
        return null;
      }
    }
    function encode(input) {
      try {
        return encodeURIComponent(input);
      } catch (e) {
        return null;
      }
    }
    function querystring(query) {
      var parser = /([^=?#&]+)=?([^&]*)/g, result = {}, part;
      while (part = parser.exec(query)) {
        var key = decode(part[1]), value = decode(part[2]);
        if (key === null || value === null || key in result)
          continue;
        result[key] = value;
      }
      return result;
    }
    function querystringify(obj, prefix) {
      prefix = prefix || "";
      var pairs = [], value, key;
      if (typeof prefix !== "string")
        prefix = "?";
      for (key in obj) {
        if (has.call(obj, key)) {
          value = obj[key];
          if (!value && (value === null || value === undef || isNaN(value))) {
            value = "";
          }
          key = encode(key);
          value = encode(value);
          if (key === null || value === null)
            continue;
          pairs.push(key + "=" + value);
        }
      }
      return pairs.length ? prefix + pairs.join("&") : "";
    }
    exports.stringify = querystringify;
    exports.parse = querystring;
  }
});

// node_modules/url-parse/index.js
var require_url_parse = __commonJS({
  "node_modules/url-parse/index.js"(exports, module2) {
    "use strict";
    var required = require_requires_port();
    var qs = require_querystringify();
    var slashes = /^[A-Za-z][A-Za-z0-9+-.]*:[\\/]+/;
    var protocolre = /^([a-z][a-z0-9.+-]*:)?([\\/]{1,})?([\S\s]*)/i;
    var whitespace = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]";
    var left = new RegExp("^" + whitespace + "+");
    function trimLeft(str) {
      return (str ? str : "").toString().replace(left, "");
    }
    var rules = [
      ["#", "hash"],
      ["?", "query"],
      function sanitize(address) {
        return address.replace("\\", "/");
      },
      ["/", "pathname"],
      ["@", "auth", 1],
      [NaN, "host", void 0, 1, 1],
      [/:(\d+)$/, "port", void 0, 1],
      [NaN, "hostname", void 0, 1, 1]
    ];
    var ignore = {hash: 1, query: 1};
    function lolcation(loc) {
      var globalVar;
      if (typeof window !== "undefined")
        globalVar = window;
      else if (typeof global !== "undefined")
        globalVar = global;
      else if (typeof self !== "undefined")
        globalVar = self;
      else
        globalVar = {};
      var location = globalVar.location || {};
      loc = loc || location;
      var finaldestination = {}, type = typeof loc, key;
      if (loc.protocol === "blob:") {
        finaldestination = new Url(unescape(loc.pathname), {});
      } else if (type === "string") {
        finaldestination = new Url(loc, {});
        for (key in ignore)
          delete finaldestination[key];
      } else if (type === "object") {
        for (key in loc) {
          if (key in ignore)
            continue;
          finaldestination[key] = loc[key];
        }
        if (finaldestination.slashes === void 0) {
          finaldestination.slashes = slashes.test(loc.href);
        }
      }
      return finaldestination;
    }
    function extractProtocol(address) {
      address = trimLeft(address);
      var match = protocolre.exec(address), protocol = match[1] ? match[1].toLowerCase() : "", slashes2 = !!(match[2] && match[2].length >= 2), rest = match[2] && match[2].length === 1 ? "/" + match[3] : match[3];
      return {
        protocol,
        slashes: slashes2,
        rest
      };
    }
    function resolve2(relative, base) {
      if (relative === "")
        return base;
      var path = (base || "/").split("/").slice(0, -1).concat(relative.split("/")), i = path.length, last = path[i - 1], unshift = false, up = 0;
      while (i--) {
        if (path[i] === ".") {
          path.splice(i, 1);
        } else if (path[i] === "..") {
          path.splice(i, 1);
          up++;
        } else if (up) {
          if (i === 0)
            unshift = true;
          path.splice(i, 1);
          up--;
        }
      }
      if (unshift)
        path.unshift("");
      if (last === "." || last === "..")
        path.push("");
      return path.join("/");
    }
    function Url(address, location, parser) {
      address = trimLeft(address);
      if (!(this instanceof Url)) {
        return new Url(address, location, parser);
      }
      var relative, extracted, parse, instruction, index2, key, instructions = rules.slice(), type = typeof location, url = this, i = 0;
      if (type !== "object" && type !== "string") {
        parser = location;
        location = null;
      }
      if (parser && typeof parser !== "function")
        parser = qs.parse;
      location = lolcation(location);
      extracted = extractProtocol(address || "");
      relative = !extracted.protocol && !extracted.slashes;
      url.slashes = extracted.slashes || relative && location.slashes;
      url.protocol = extracted.protocol || location.protocol || "";
      address = extracted.rest;
      if (!extracted.slashes)
        instructions[3] = [/(.*)/, "pathname"];
      for (; i < instructions.length; i++) {
        instruction = instructions[i];
        if (typeof instruction === "function") {
          address = instruction(address);
          continue;
        }
        parse = instruction[0];
        key = instruction[1];
        if (parse !== parse) {
          url[key] = address;
        } else if (typeof parse === "string") {
          if (~(index2 = address.indexOf(parse))) {
            if (typeof instruction[2] === "number") {
              url[key] = address.slice(0, index2);
              address = address.slice(index2 + instruction[2]);
            } else {
              url[key] = address.slice(index2);
              address = address.slice(0, index2);
            }
          }
        } else if (index2 = parse.exec(address)) {
          url[key] = index2[1];
          address = address.slice(0, index2.index);
        }
        url[key] = url[key] || (relative && instruction[3] ? location[key] || "" : "");
        if (instruction[4])
          url[key] = url[key].toLowerCase();
      }
      if (parser)
        url.query = parser(url.query);
      if (relative && location.slashes && url.pathname.charAt(0) !== "/" && (url.pathname !== "" || location.pathname !== "")) {
        url.pathname = resolve2(url.pathname, location.pathname);
      }
      if (url.pathname.charAt(0) !== "/" && url.hostname) {
        url.pathname = "/" + url.pathname;
      }
      if (!required(url.port, url.protocol)) {
        url.host = url.hostname;
        url.port = "";
      }
      url.username = url.password = "";
      if (url.auth) {
        instruction = url.auth.split(":");
        url.username = instruction[0] || "";
        url.password = instruction[1] || "";
      }
      url.origin = url.protocol && url.host && url.protocol !== "file:" ? url.protocol + "//" + url.host : "null";
      url.href = url.toString();
    }
    function set(part, value, fn) {
      var url = this;
      switch (part) {
        case "query":
          if (typeof value === "string" && value.length) {
            value = (fn || qs.parse)(value);
          }
          url[part] = value;
          break;
        case "port":
          url[part] = value;
          if (!required(value, url.protocol)) {
            url.host = url.hostname;
            url[part] = "";
          } else if (value) {
            url.host = url.hostname + ":" + value;
          }
          break;
        case "hostname":
          url[part] = value;
          if (url.port)
            value += ":" + url.port;
          url.host = value;
          break;
        case "host":
          url[part] = value;
          if (/:\d+$/.test(value)) {
            value = value.split(":");
            url.port = value.pop();
            url.hostname = value.join(":");
          } else {
            url.hostname = value;
            url.port = "";
          }
          break;
        case "protocol":
          url.protocol = value.toLowerCase();
          url.slashes = !fn;
          break;
        case "pathname":
        case "hash":
          if (value) {
            var char = part === "pathname" ? "/" : "#";
            url[part] = value.charAt(0) !== char ? char + value : value;
          } else {
            url[part] = value;
          }
          break;
        default:
          url[part] = value;
      }
      for (var i = 0; i < rules.length; i++) {
        var ins = rules[i];
        if (ins[4])
          url[ins[1]] = url[ins[1]].toLowerCase();
      }
      url.origin = url.protocol && url.host && url.protocol !== "file:" ? url.protocol + "//" + url.host : "null";
      url.href = url.toString();
      return url;
    }
    function toString(stringify) {
      if (!stringify || typeof stringify !== "function")
        stringify = qs.stringify;
      var query, url = this, protocol = url.protocol;
      if (protocol && protocol.charAt(protocol.length - 1) !== ":")
        protocol += ":";
      var result = protocol + (url.slashes ? "//" : "");
      if (url.username) {
        result += url.username;
        if (url.password)
          result += ":" + url.password;
        result += "@";
      }
      result += url.host + url.pathname;
      query = typeof url.query === "object" ? stringify(url.query) : url.query;
      if (query)
        result += query.charAt(0) !== "?" ? "?" + query : query;
      if (url.hash)
        result += url.hash;
      return result;
    }
    Url.prototype = {set, toString};
    Url.extractProtocol = extractProtocol;
    Url.location = lolcation;
    Url.trimLeft = trimLeft;
    Url.qs = qs;
    module2.exports = Url;
  }
});

// node_modules/original/index.js
var require_original = __commonJS({
  "node_modules/original/index.js"(exports, module2) {
    "use strict";
    var parse = require_url_parse();
    function origin(url) {
      if (typeof url === "string")
        url = parse(url);
      if (!url.protocol || !url.hostname)
        return "null";
      return (url.protocol + "//" + url.host).toLowerCase();
    }
    origin.same = function same(a, b) {
      return origin(a) === origin(b);
    };
    module2.exports = origin;
  }
});

// node_modules/eventsource/lib/eventsource.js
var require_eventsource = __commonJS({
  "node_modules/eventsource/lib/eventsource.js"(exports, module2) {
    var original = require_original();
    var parse = require("url").parse;
    var events = require("events");
    var https2 = require("https");
    var http2 = require("http");
    var util = require("util");
    var httpsOptions = [
      "pfx",
      "key",
      "passphrase",
      "cert",
      "ca",
      "ciphers",
      "rejectUnauthorized",
      "secureProtocol",
      "servername",
      "checkServerIdentity"
    ];
    var bom = [239, 187, 191];
    var colon = 58;
    var space = 32;
    var lineFeed = 10;
    var carriageReturn = 13;
    function hasBom(buf) {
      return bom.every(function(charCode, index2) {
        return buf[index2] === charCode;
      });
    }
    function EventSource(url, eventSourceInitDict) {
      var readyState = EventSource.CONNECTING;
      Object.defineProperty(this, "readyState", {
        get: function() {
          return readyState;
        }
      });
      Object.defineProperty(this, "url", {
        get: function() {
          return url;
        }
      });
      var self2 = this;
      self2.reconnectInterval = 1e3;
      self2.connectionInProgress = false;
      function onConnectionClosed(message) {
        if (readyState === EventSource.CLOSED)
          return;
        readyState = EventSource.CONNECTING;
        _emit("error", new Event("error", {message}));
        if (reconnectUrl) {
          url = reconnectUrl;
          reconnectUrl = null;
        }
        setTimeout(function() {
          if (readyState !== EventSource.CONNECTING || self2.connectionInProgress) {
            return;
          }
          self2.connectionInProgress = true;
          connect();
        }, self2.reconnectInterval);
      }
      var req;
      var lastEventId = "";
      if (eventSourceInitDict && eventSourceInitDict.headers && eventSourceInitDict.headers["Last-Event-ID"]) {
        lastEventId = eventSourceInitDict.headers["Last-Event-ID"];
        delete eventSourceInitDict.headers["Last-Event-ID"];
      }
      var discardTrailingNewline = false;
      var data = "";
      var eventName = "";
      var reconnectUrl = null;
      function connect() {
        var options2 = parse(url);
        var isSecure = options2.protocol === "https:";
        options2.headers = {"Cache-Control": "no-cache", "Accept": "text/event-stream"};
        if (lastEventId)
          options2.headers["Last-Event-ID"] = lastEventId;
        if (eventSourceInitDict && eventSourceInitDict.headers) {
          for (var i in eventSourceInitDict.headers) {
            var header = eventSourceInitDict.headers[i];
            if (header) {
              options2.headers[i] = header;
            }
          }
        }
        options2.rejectUnauthorized = !(eventSourceInitDict && !eventSourceInitDict.rejectUnauthorized);
        if (eventSourceInitDict && eventSourceInitDict.createConnection !== void 0) {
          options2.createConnection = eventSourceInitDict.createConnection;
        }
        var useProxy = eventSourceInitDict && eventSourceInitDict.proxy;
        if (useProxy) {
          var proxy = parse(eventSourceInitDict.proxy);
          isSecure = proxy.protocol === "https:";
          options2.protocol = isSecure ? "https:" : "http:";
          options2.path = url;
          options2.headers.Host = options2.host;
          options2.hostname = proxy.hostname;
          options2.host = proxy.host;
          options2.port = proxy.port;
        }
        if (eventSourceInitDict && eventSourceInitDict.https) {
          for (var optName in eventSourceInitDict.https) {
            if (httpsOptions.indexOf(optName) === -1) {
              continue;
            }
            var option = eventSourceInitDict.https[optName];
            if (option !== void 0) {
              options2[optName] = option;
            }
          }
        }
        if (eventSourceInitDict && eventSourceInitDict.withCredentials !== void 0) {
          options2.withCredentials = eventSourceInitDict.withCredentials;
        }
        req = (isSecure ? https2 : http2).request(options2, function(res) {
          self2.connectionInProgress = false;
          if (res.statusCode === 500 || res.statusCode === 502 || res.statusCode === 503 || res.statusCode === 504) {
            _emit("error", new Event("error", {status: res.statusCode, message: res.statusMessage}));
            onConnectionClosed();
            return;
          }
          if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307) {
            if (!res.headers.location) {
              _emit("error", new Event("error", {status: res.statusCode, message: res.statusMessage}));
              return;
            }
            if (res.statusCode === 307)
              reconnectUrl = url;
            url = res.headers.location;
            process.nextTick(connect);
            return;
          }
          if (res.statusCode !== 200) {
            _emit("error", new Event("error", {status: res.statusCode, message: res.statusMessage}));
            return self2.close();
          }
          readyState = EventSource.OPEN;
          res.on("close", function() {
            res.removeAllListeners("close");
            res.removeAllListeners("end");
            onConnectionClosed();
          });
          res.on("end", function() {
            res.removeAllListeners("close");
            res.removeAllListeners("end");
            onConnectionClosed();
          });
          _emit("open", new Event("open"));
          var isFirst = true;
          var buf;
          var startingPos = 0;
          var startingFieldLength = -1;
          res.on("data", function(chunk) {
            buf = buf ? Buffer.concat([buf, chunk]) : chunk;
            if (isFirst && hasBom(buf)) {
              buf = buf.slice(bom.length);
            }
            isFirst = false;
            var pos = 0;
            var length = buf.length;
            while (pos < length) {
              if (discardTrailingNewline) {
                if (buf[pos] === lineFeed) {
                  ++pos;
                }
                discardTrailingNewline = false;
              }
              var lineLength = -1;
              var fieldLength = startingFieldLength;
              var c;
              for (var i2 = startingPos; lineLength < 0 && i2 < length; ++i2) {
                c = buf[i2];
                if (c === colon) {
                  if (fieldLength < 0) {
                    fieldLength = i2 - pos;
                  }
                } else if (c === carriageReturn) {
                  discardTrailingNewline = true;
                  lineLength = i2 - pos;
                } else if (c === lineFeed) {
                  lineLength = i2 - pos;
                }
              }
              if (lineLength < 0) {
                startingPos = length - pos;
                startingFieldLength = fieldLength;
                break;
              } else {
                startingPos = 0;
                startingFieldLength = -1;
              }
              parseEventStreamLine(buf, pos, fieldLength, lineLength);
              pos += lineLength + 1;
            }
            if (pos === length) {
              buf = void 0;
            } else if (pos > 0) {
              buf = buf.slice(pos);
            }
          });
        });
        req.on("error", function(err) {
          self2.connectionInProgress = false;
          onConnectionClosed(err.message);
        });
        if (req.setNoDelay)
          req.setNoDelay(true);
        req.end();
      }
      connect();
      function _emit() {
        if (self2.listeners(arguments[0]).length > 0) {
          self2.emit.apply(self2, arguments);
        }
      }
      this._close = function() {
        if (readyState === EventSource.CLOSED)
          return;
        readyState = EventSource.CLOSED;
        if (req.abort)
          req.abort();
        if (req.xhr && req.xhr.abort)
          req.xhr.abort();
      };
      function parseEventStreamLine(buf, pos, fieldLength, lineLength) {
        if (lineLength === 0) {
          if (data.length > 0) {
            var type = eventName || "message";
            _emit(type, new MessageEvent(type, {
              data: data.slice(0, -1),
              lastEventId,
              origin: original(url)
            }));
            data = "";
          }
          eventName = void 0;
        } else if (fieldLength > 0) {
          var noValue = fieldLength < 0;
          var step = 0;
          var field = buf.slice(pos, pos + (noValue ? lineLength : fieldLength)).toString();
          if (noValue) {
            step = lineLength;
          } else if (buf[pos + fieldLength + 1] !== space) {
            step = fieldLength + 1;
          } else {
            step = fieldLength + 2;
          }
          pos += step;
          var valueLength = lineLength - step;
          var value = buf.slice(pos, pos + valueLength).toString();
          if (field === "data") {
            data += value + "\n";
          } else if (field === "event") {
            eventName = value;
          } else if (field === "id") {
            lastEventId = value;
          } else if (field === "retry") {
            var retry = parseInt(value, 10);
            if (!Number.isNaN(retry)) {
              self2.reconnectInterval = retry;
            }
          }
        }
      }
    }
    module2.exports = EventSource;
    util.inherits(EventSource, events.EventEmitter);
    EventSource.prototype.constructor = EventSource;
    ["open", "error", "message"].forEach(function(method) {
      Object.defineProperty(EventSource.prototype, "on" + method, {
        get: function get() {
          var listener = this.listeners(method)[0];
          return listener ? listener._listener ? listener._listener : listener : void 0;
        },
        set: function set(listener) {
          this.removeAllListeners(method);
          this.addEventListener(method, listener);
        }
      });
    });
    Object.defineProperty(EventSource, "CONNECTING", {enumerable: true, value: 0});
    Object.defineProperty(EventSource, "OPEN", {enumerable: true, value: 1});
    Object.defineProperty(EventSource, "CLOSED", {enumerable: true, value: 2});
    EventSource.prototype.CONNECTING = 0;
    EventSource.prototype.OPEN = 1;
    EventSource.prototype.CLOSED = 2;
    EventSource.prototype.close = function() {
      this._close();
    };
    EventSource.prototype.addEventListener = function addEventListener(type, listener) {
      if (typeof listener === "function") {
        listener._listener = listener;
        this.on(type, listener);
      }
    };
    EventSource.prototype.dispatchEvent = function dispatchEvent(event) {
      if (!event.type) {
        throw new Error("UNSPECIFIED_EVENT_TYPE_ERR");
      }
      this.emit(event.type, event.detail);
    };
    EventSource.prototype.removeEventListener = function removeEventListener(type, listener) {
      if (typeof listener === "function") {
        listener._listener = void 0;
        this.removeListener(type, listener);
      }
    };
    function Event(type, optionalProperties) {
      Object.defineProperty(this, "type", {writable: false, value: type, enumerable: true});
      if (optionalProperties) {
        for (var f in optionalProperties) {
          if (optionalProperties.hasOwnProperty(f)) {
            Object.defineProperty(this, f, {writable: false, value: optionalProperties[f], enumerable: true});
          }
        }
      }
    }
    function MessageEvent(type, eventInitDict) {
      Object.defineProperty(this, "type", {writable: false, value: type, enumerable: true});
      for (var f in eventInitDict) {
        if (eventInitDict.hasOwnProperty(f)) {
          Object.defineProperty(this, f, {writable: false, value: eventInitDict[f], enumerable: true});
        }
      }
    }
  }
});

// node_modules/@sanity/eventsource/node.js
var require_node = __commonJS({
  "node_modules/@sanity/eventsource/node.js"(exports, module2) {
    module2.exports = require_eventsource();
  }
});

// node_modules/@sanity/client/lib/util/pick.js
var require_pick = __commonJS({
  "node_modules/@sanity/client/lib/util/pick.js"(exports, module2) {
    "use strict";
    module2.exports = function(obj, props) {
      return props.reduce(function(selection, prop) {
        if (typeof obj[prop] === "undefined") {
          return selection;
        }
        selection[prop] = obj[prop];
        return selection;
      }, {});
    };
  }
});

// node_modules/@sanity/client/lib/util/defaults.js
var require_defaults = __commonJS({
  "node_modules/@sanity/client/lib/util/defaults.js"(exports, module2) {
    "use strict";
    module2.exports = function(obj, defaults) {
      return Object.keys(defaults).concat(Object.keys(obj)).reduce(function(target, prop) {
        target[prop] = typeof obj[prop] === "undefined" ? defaults[prop] : obj[prop];
        return target;
      }, {});
    };
  }
});

// node_modules/@sanity/generate-help-url/index.js
var require_generate_help_url = __commonJS({
  "node_modules/@sanity/generate-help-url/index.js"(exports, module2) {
    var baseUrl = "https://docs.sanity.io/help/";
    module2.exports = function generateHelpUrl(slug) {
      return baseUrl + slug;
    };
  }
});

// node_modules/@sanity/client/lib/util/once.js
var require_once = __commonJS({
  "node_modules/@sanity/client/lib/util/once.js"(exports, module2) {
    "use strict";
    module2.exports = function(fn) {
      var didCall = false;
      var returnValue;
      return function() {
        if (didCall) {
          return returnValue;
        }
        returnValue = fn.apply(void 0, arguments);
        didCall = true;
        return returnValue;
      };
    };
  }
});

// node_modules/@sanity/client/lib/data/listen.js
var require_listen = __commonJS({
  "node_modules/@sanity/client/lib/data/listen.js"(exports, module2) {
    "use strict";
    var assign2 = require_object_assign();
    var Observable = require_minimal();
    var polyfilledEventSource = require_node();
    var pick = require_pick();
    var defaults = require_defaults();
    var encodeQueryString = require_encodeQueryString();
    var generateHelpUrl = require_generate_help_url();
    var once = require_once();
    var tokenWarning = ["Using token with listeners is not supported in browsers. ", "For more info, see ".concat(generateHelpUrl("js-client-listener-tokens-browser"), ".")];
    var printTokenWarning = once(function() {
      return console.warn(tokenWarning.join(" "));
    });
    var isWindowEventSource = Boolean(typeof window !== "undefined" && window.EventSource);
    var EventSource = isWindowEventSource ? window.EventSource : polyfilledEventSource;
    var possibleOptions = ["includePreviousRevision", "includeResult", "visibility", "effectFormat"];
    var defaultOptions = {
      includeResult: true
    };
    module2.exports = function listen(query, params) {
      var opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var options2 = defaults(opts, defaultOptions);
      var listenOpts = pick(options2, possibleOptions);
      var qs = encodeQueryString({
        query,
        params,
        options: listenOpts
      });
      var _this$clientConfig = this.clientConfig, url = _this$clientConfig.url, token = _this$clientConfig.token, withCredentials = _this$clientConfig.withCredentials;
      var uri = "".concat(url).concat(this.getDataUrl("listen", qs));
      var listenFor = options2.events ? options2.events : ["mutation"];
      var shouldEmitReconnect = listenFor.indexOf("reconnect") !== -1;
      if (token && isWindowEventSource) {
        printTokenWarning();
      }
      var esOptions = {};
      if (token || withCredentials) {
        esOptions.withCredentials = true;
      }
      if (token) {
        esOptions.headers = {
          Authorization: "Bearer ".concat(token)
        };
      }
      return new Observable(function(observer) {
        var es = getEventSource();
        var reconnectTimer;
        var stopped = false;
        function onError() {
          if (stopped) {
            return;
          }
          emitReconnect();
          if (stopped) {
            return;
          }
          if (es.readyState === EventSource.CLOSED) {
            unsubscribe();
            clearTimeout(reconnectTimer);
            reconnectTimer = setTimeout(open, 100);
          }
        }
        function onChannelError(err) {
          observer.error(cooerceError(err));
        }
        function onMessage(evt) {
          var event = parseEvent(evt);
          return event instanceof Error ? observer.error(event) : observer.next(event);
        }
        function onDisconnect(evt) {
          stopped = true;
          unsubscribe();
          observer.complete();
        }
        function unsubscribe() {
          es.removeEventListener("error", onError, false);
          es.removeEventListener("channelError", onChannelError, false);
          es.removeEventListener("disconnect", onDisconnect, false);
          listenFor.forEach(function(type) {
            return es.removeEventListener(type, onMessage, false);
          });
          es.close();
        }
        function emitReconnect() {
          if (shouldEmitReconnect) {
            observer.next({
              type: "reconnect"
            });
          }
        }
        function getEventSource() {
          var evs = new EventSource(uri, esOptions);
          evs.addEventListener("error", onError, false);
          evs.addEventListener("channelError", onChannelError, false);
          evs.addEventListener("disconnect", onDisconnect, false);
          listenFor.forEach(function(type) {
            return evs.addEventListener(type, onMessage, false);
          });
          return evs;
        }
        function open() {
          es = getEventSource();
        }
        function stop() {
          stopped = true;
          unsubscribe();
        }
        return stop;
      });
    };
    function parseEvent(event) {
      try {
        var data = event.data && JSON.parse(event.data) || {};
        return assign2({
          type: event.type
        }, data);
      } catch (err) {
        return err;
      }
    }
    function cooerceError(err) {
      if (err instanceof Error) {
        return err;
      }
      var evt = parseEvent(err);
      return evt instanceof Error ? evt : new Error(extractErrorMessage(evt));
    }
    function extractErrorMessage(err) {
      if (!err.error) {
        return err.message || "Unknown listener error";
      }
      if (err.error.description) {
        return err.error.description;
      }
      return typeof err.error === "string" ? err.error : JSON.stringify(err.error, null, 2);
    }
  }
});

// node_modules/@sanity/client/lib/data/dataMethods.js
var require_dataMethods = __commonJS({
  "node_modules/@sanity/client/lib/data/dataMethods.js"(exports, module2) {
    "use strict";
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var assign2 = require_object_assign();
    var _require = require_filter2();
    var filter = _require.filter;
    var _require2 = require_map2();
    var map = _require2.map;
    var validators = require_validators();
    var getSelection = require_getSelection();
    var encodeQueryString = require_encodeQueryString();
    var Transaction = require_transaction();
    var Patch = require_patch();
    var listen = require_listen();
    var excludeFalsey = function excludeFalsey2(param, defValue) {
      var value = typeof param === "undefined" ? defValue : param;
      return param === false ? void 0 : value;
    };
    var getMutationQuery = function getMutationQuery2() {
      var options2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return {
        returnIds: true,
        returnDocuments: excludeFalsey(options2.returnDocuments, true),
        visibility: options2.visibility || "sync"
      };
    };
    var isResponse = function isResponse2(event) {
      return event.type === "response";
    };
    var getBody = function getBody2(event) {
      return event.body;
    };
    var indexBy = function indexBy2(docs, attr) {
      return docs.reduce(function(indexed, doc) {
        indexed[attr(doc)] = doc;
        return indexed;
      }, Object.create(null));
    };
    var toPromise = function toPromise2(observable) {
      return observable.toPromise();
    };
    var getQuerySizeLimit = 11264;
    module2.exports = {
      listen,
      getDataUrl: function getDataUrl(operation, path) {
        var config = this.clientConfig;
        var catalog = config.gradientMode ? config.namespace : validators.hasDataset(config);
        var baseUri = "/".concat(operation, "/").concat(catalog);
        var uri = path ? "".concat(baseUri, "/").concat(path) : baseUri;
        return (this.clientConfig.gradientMode ? uri : "/data".concat(uri)).replace(/\/($|\?)/, "$1");
      },
      fetch: function fetch3(query, params) {
        var options2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var mapResponse = options2.filterResponse === false ? function(res) {
          return res;
        } : function(res) {
          return res.result;
        };
        var observable = this._dataRequest("query", {
          query,
          params
        }, options2).pipe(map(mapResponse));
        return this.isPromiseAPI() ? toPromise(observable) : observable;
      },
      getDocument: function getDocument(id) {
        var options2 = {
          uri: this.getDataUrl("doc", id),
          json: true
        };
        var observable = this._requestObservable(options2).pipe(filter(isResponse), map(function(event) {
          return event.body.documents && event.body.documents[0];
        }));
        return this.isPromiseAPI() ? toPromise(observable) : observable;
      },
      getDocuments: function getDocuments(ids) {
        var options2 = {
          uri: this.getDataUrl("doc", ids.join(",")),
          json: true
        };
        var observable = this._requestObservable(options2).pipe(filter(isResponse), map(function(event) {
          var indexed = indexBy(event.body.documents || [], function(doc) {
            return doc._id;
          });
          return ids.map(function(id) {
            return indexed[id] || null;
          });
        }));
        return this.isPromiseAPI() ? toPromise(observable) : observable;
      },
      create: function create(doc, options2) {
        return this._create(doc, "create", options2);
      },
      createIfNotExists: function createIfNotExists(doc, options2) {
        validators.requireDocumentId("createIfNotExists", doc);
        return this._create(doc, "createIfNotExists", options2);
      },
      createOrReplace: function createOrReplace(doc, options2) {
        validators.requireDocumentId("createOrReplace", doc);
        return this._create(doc, "createOrReplace", options2);
      },
      patch: function patch(selector, operations) {
        return new Patch(selector, operations, this);
      },
      delete: function _delete(selection, options2) {
        return this.dataRequest("mutate", {
          mutations: [{
            delete: getSelection(selection)
          }]
        }, options2);
      },
      mutate: function mutate(mutations, options2) {
        var mut = mutations instanceof Patch || mutations instanceof Transaction ? mutations.serialize() : mutations;
        var muts = Array.isArray(mut) ? mut : [mut];
        var transactionId = options2 && options2.transactionId;
        return this.dataRequest("mutate", {
          mutations: muts,
          transactionId
        }, options2);
      },
      transaction: function transaction(operations) {
        return new Transaction(operations, this);
      },
      dataRequest: function dataRequest(endpoint, body) {
        var options2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var request = this._dataRequest(endpoint, body, options2);
        return this.isPromiseAPI() ? toPromise(request) : request;
      },
      _dataRequest: function _dataRequest(endpoint, body) {
        var options2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var isMutation = endpoint === "mutate";
        var strQuery = !isMutation && encodeQueryString(body);
        var useGet = !isMutation && strQuery.length < getQuerySizeLimit;
        var stringQuery = useGet ? strQuery : "";
        var returnFirst = options2.returnFirst;
        var timeout = options2.timeout, token = options2.token;
        var uri = this.getDataUrl(endpoint, stringQuery);
        var reqOptions = {
          method: useGet ? "GET" : "POST",
          uri,
          json: true,
          body: useGet ? void 0 : body,
          query: isMutation && getMutationQuery(options2),
          timeout,
          token
        };
        return this._requestObservable(reqOptions).pipe(filter(isResponse), map(getBody), map(function(res) {
          if (!isMutation) {
            return res;
          }
          var results = res.results || [];
          if (options2.returnDocuments) {
            return returnFirst ? results[0] && results[0].document : results.map(function(mut) {
              return mut.document;
            });
          }
          var key = returnFirst ? "documentId" : "documentIds";
          var ids = returnFirst ? results[0] && results[0].id : results.map(function(mut) {
            return mut.id;
          });
          return _defineProperty({
            transactionId: res.transactionId,
            results
          }, key, ids);
        }));
      },
      _create: function _create(doc, op) {
        var options2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var mutation = _defineProperty({}, op, doc);
        var opts = assign2({
          returnFirst: true,
          returnDocuments: true
        }, options2);
        return this.dataRequest("mutate", {
          mutations: [mutation]
        }, opts);
      }
    };
  }
});

// node_modules/@sanity/client/lib/datasets/datasetsClient.js
var require_datasetsClient = __commonJS({
  "node_modules/@sanity/client/lib/datasets/datasetsClient.js"(exports, module2) {
    "use strict";
    var assign2 = require_object_assign();
    var validate = require_validators();
    function DatasetsClient(client2) {
      this.request = client2.request.bind(client2);
    }
    assign2(DatasetsClient.prototype, {
      create: function create(name, options2) {
        return this._modify("PUT", name, options2);
      },
      edit: function edit(name, options2) {
        return this._modify("PATCH", name, options2);
      },
      delete: function _delete(name) {
        return this._modify("DELETE", name);
      },
      list: function list() {
        return this.request({
          uri: "/datasets"
        });
      },
      _modify: function _modify(method, name, body) {
        validate.dataset(name);
        return this.request({
          method,
          uri: "/datasets/".concat(name),
          body
        });
      }
    });
    module2.exports = DatasetsClient;
  }
});

// node_modules/@sanity/client/lib/projects/projectsClient.js
var require_projectsClient = __commonJS({
  "node_modules/@sanity/client/lib/projects/projectsClient.js"(exports, module2) {
    "use strict";
    var assign2 = require_object_assign();
    function ProjectsClient(client2) {
      this.client = client2;
    }
    assign2(ProjectsClient.prototype, {
      list: function list() {
        return this.client.request({
          uri: "/projects"
        });
      },
      getById: function getById(id) {
        return this.client.request({
          uri: "/projects/".concat(id)
        });
      }
    });
    module2.exports = ProjectsClient;
  }
});

// node_modules/@sanity/client/lib/http/queryString.js
var require_queryString = __commonJS({
  "node_modules/@sanity/client/lib/http/queryString.js"(exports, module2) {
    "use strict";
    module2.exports = function(params) {
      var qs = [];
      for (var key in params) {
        if (params.hasOwnProperty(key)) {
          qs.push("".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(params[key])));
        }
      }
      return qs.length > 0 ? "?".concat(qs.join("&")) : "";
    };
  }
});

// node_modules/@sanity/client/lib/assets/assetsClient.js
var require_assetsClient = __commonJS({
  "node_modules/@sanity/client/lib/assets/assetsClient.js"(exports, module2) {
    "use strict";
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function _iterableToArrayLimit(arr, i) {
      if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = void 0;
      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    var assign2 = require_object_assign();
    var _require = require_map2();
    var map = _require.map;
    var _require2 = require_filter2();
    var filter = _require2.filter;
    var queryString = require_queryString();
    var validators = require_validators();
    function AssetsClient(client2) {
      this.client = client2;
    }
    function toDocument(body) {
      var document2 = body.document;
      Object.defineProperty(document2, "document", {
        enumerable: false,
        get: function get() {
          console.warn("The promise returned from client.asset.upload(...) now resolves with the asset document");
          return document2;
        }
      });
      return document2;
    }
    function optionsFromFile(opts, file) {
      if (typeof window === "undefined" || !(file instanceof window.File)) {
        return opts;
      }
      return assign2({
        filename: opts.preserveFilename === false ? void 0 : file.name,
        contentType: file.type
      }, opts);
    }
    assign2(AssetsClient.prototype, {
      upload: function upload(assetType, body) {
        var opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        validators.validateAssetType(assetType);
        var meta = opts.extract || void 0;
        if (meta && !meta.length) {
          meta = ["none"];
        }
        var dataset = validators.hasDataset(this.client.clientConfig);
        var assetEndpoint = assetType === "image" ? "images" : "files";
        var options2 = optionsFromFile(opts, body);
        var label = options2.label, title = options2.title, description = options2.description, creditLine = options2.creditLine, filename = options2.filename, source = options2.source;
        var query = {
          label,
          title,
          description,
          filename,
          meta,
          creditLine
        };
        if (source) {
          query.sourceId = source.id;
          query.sourceName = source.name;
          query.sourceUrl = source.url;
        }
        var observable = this.client._requestObservable({
          method: "POST",
          timeout: options2.timeout || 0,
          uri: "/assets/".concat(assetEndpoint, "/").concat(dataset),
          headers: options2.contentType ? {
            "Content-Type": options2.contentType
          } : {},
          query,
          body
        });
        return this.client.isPromiseAPI() ? observable.pipe(filter(function(event) {
          return event.type === "response";
        }), map(function(event) {
          return toDocument(event.body);
        })).toPromise() : observable;
      },
      delete: function _delete(type, id) {
        console.warn("client.assets.delete() is deprecated, please use client.delete(<document-id>)");
        var docId = id || "";
        if (!/^(image|file)-/.test(docId)) {
          docId = "".concat(type, "-").concat(docId);
        } else if (type._id) {
          docId = type._id;
        }
        validators.hasDataset(this.client.clientConfig);
        return this.client.delete(docId);
      },
      getImageUrl: function getImageUrl(ref, query) {
        var id = ref._ref || ref;
        if (typeof id !== "string") {
          throw new Error("getImageUrl() needs either an object with a _ref, or a string with an asset document ID");
        }
        if (!/^image-[A-Za-z0-9_]+-\d+x\d+-[a-z]{1,5}$/.test(id)) {
          throw new Error('Unsupported asset ID "'.concat(id, '". URL generation only works for auto-generated IDs.'));
        }
        var _id$split = id.split("-"), _id$split2 = _slicedToArray(_id$split, 4), assetId = _id$split2[1], size = _id$split2[2], format2 = _id$split2[3];
        validators.hasDataset(this.client.clientConfig);
        var _this$client$clientCo = this.client.clientConfig, projectId = _this$client$clientCo.projectId, dataset = _this$client$clientCo.dataset;
        var qs = query ? queryString(query) : "";
        return "https://cdn.sanity.io/images/".concat(projectId, "/").concat(dataset, "/").concat(assetId, "-").concat(size, ".").concat(format2).concat(qs);
      }
    });
    module2.exports = AssetsClient;
  }
});

// node_modules/@sanity/client/lib/users/usersClient.js
var require_usersClient = __commonJS({
  "node_modules/@sanity/client/lib/users/usersClient.js"(exports, module2) {
    "use strict";
    var assign2 = require_object_assign();
    function UsersClient(client2) {
      this.client = client2;
    }
    assign2(UsersClient.prototype, {
      getById: function getById(id) {
        return this.client.request({
          uri: "/users/".concat(id)
        });
      }
    });
    module2.exports = UsersClient;
  }
});

// node_modules/@sanity/client/lib/auth/authClient.js
var require_authClient = __commonJS({
  "node_modules/@sanity/client/lib/auth/authClient.js"(exports, module2) {
    "use strict";
    var assign2 = require_object_assign();
    function AuthClient(client2) {
      this.client = client2;
    }
    assign2(AuthClient.prototype, {
      getLoginProviders: function getLoginProviders() {
        return this.client.request({
          uri: "/auth/providers"
        });
      },
      logout: function logout() {
        return this.client.request({
          uri: "/auth/logout",
          method: "POST"
        });
      }
    });
    module2.exports = AuthClient;
  }
});

// node_modules/nano-pubsub/index.js
var require_nano_pubsub = __commonJS({
  "node_modules/nano-pubsub/index.js"(exports, module2) {
    module2.exports = function Pubsub() {
      var subscribers = [];
      return {
        subscribe: subscribe2,
        publish
      };
      function subscribe2(subscriber) {
        subscribers.push(subscriber);
        return function unsubscribe() {
          var idx = subscribers.indexOf(subscriber);
          if (idx > -1) {
            subscribers.splice(idx, 1);
          }
        };
      }
      function publish() {
        for (var i = 0; i < subscribers.length; i++) {
          subscribers[i].apply(null, arguments);
        }
      }
    };
  }
});

// node_modules/get-it/lib-node/util/middlewareReducer.js
var require_middlewareReducer = __commonJS({
  "node_modules/get-it/lib-node/util/middlewareReducer.js"(exports, module2) {
    "use strict";
    module2.exports = (middleware) => {
      const applyMiddleware = function applyMiddleware2(hook, defaultValue) {
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }
        const bailEarly = hook === "onError";
        let value = defaultValue;
        for (let i = 0; i < middleware[hook].length; i++) {
          const handler2 = middleware[hook][i];
          value = handler2.apply(void 0, [value].concat(args));
          if (bailEarly && !value) {
            break;
          }
        }
        return value;
      };
      return applyMiddleware;
    };
  }
});

// node_modules/get-it/lib-node/middleware/defaultOptionsProcessor.js
var require_defaultOptionsProcessor = __commonJS({
  "node_modules/get-it/lib-node/middleware/defaultOptionsProcessor.js"(exports, module2) {
    "use strict";
    var objectAssign = require_object_assign();
    var urlParse = require_url_parse();
    var isReactNative = typeof navigator === "undefined" ? false : navigator.product === "ReactNative";
    var has = Object.prototype.hasOwnProperty;
    var defaultOptions = {timeout: isReactNative ? 6e4 : 12e4};
    module2.exports = (opts) => {
      const options2 = typeof opts === "string" ? objectAssign({url: opts}, defaultOptions) : objectAssign({}, defaultOptions, opts);
      const url = urlParse(options2.url, {}, true);
      options2.timeout = normalizeTimeout(options2.timeout);
      if (options2.query) {
        url.query = objectAssign({}, url.query, removeUndefined(options2.query));
      }
      options2.method = options2.body && !options2.method ? "POST" : (options2.method || "GET").toUpperCase();
      options2.url = url.toString(stringifyQueryString);
      return options2;
    };
    function stringifyQueryString(obj) {
      const pairs = [];
      for (const key in obj) {
        if (has.call(obj, key)) {
          push(key, obj[key]);
        }
      }
      return pairs.length ? pairs.join("&") : "";
      function push(key, val) {
        if (Array.isArray(val)) {
          val.forEach((item) => push(key, item));
        } else {
          pairs.push([key, val].map(encodeURIComponent).join("="));
        }
      }
    }
    function normalizeTimeout(time) {
      if (time === false || time === 0) {
        return false;
      }
      if (time.connect || time.socket) {
        return time;
      }
      const delay = Number(time);
      if (isNaN(delay)) {
        return normalizeTimeout(defaultOptions.timeout);
      }
      return {connect: delay, socket: delay};
    }
    function removeUndefined(obj) {
      const target = {};
      for (const key in obj) {
        if (obj[key] !== void 0) {
          target[key] = obj[key];
        }
      }
      return target;
    }
  }
});

// node_modules/get-it/lib-node/middleware/defaultOptionsValidator.js
var require_defaultOptionsValidator = __commonJS({
  "node_modules/get-it/lib-node/middleware/defaultOptionsValidator.js"(exports, module2) {
    "use strict";
    var validUrl = /^https?:\/\//i;
    module2.exports = (options2) => {
      if (!validUrl.test(options2.url)) {
        throw new Error(`"${options2.url}" is not a valid URL`);
      }
    };
  }
});

// node_modules/simple-concat/index.js
var require_simple_concat = __commonJS({
  "node_modules/simple-concat/index.js"(exports, module2) {
    module2.exports = function(stream, cb) {
      var chunks = [];
      stream.on("data", function(chunk) {
        chunks.push(chunk);
      });
      stream.once("end", function() {
        if (cb)
          cb(null, Buffer.concat(chunks));
        cb = null;
      });
      stream.once("error", function(err) {
        if (cb)
          cb(err);
        cb = null;
      });
    };
  }
});

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports, module2) {
    var s2 = 1e3;
    var m = s2 * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module2.exports = function(val, options2) {
      options2 = options2 || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options2.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s2;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s2) {
        return Math.round(ms / s2) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s2) {
        return plural(ms, msAbs, s2, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// node_modules/debug/src/common.js
var require_common = __commonJS({
  "node_modules/debug/src/common.js"(exports, module2) {
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash2 = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash2 = (hash2 << 5) - hash2 + namespace.charCodeAt(i);
          hash2 |= 0;
        }
        return createDebug.colors[Math.abs(hash2) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
          if (!debug.enabled) {
            return;
          }
          const self2 = debug;
          const curr = Number(new Date());
          const ms = curr - (prevTime || curr);
          self2.diff = ms;
          self2.prev = prevTime;
          self2.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index2 = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format2) => {
            if (match === "%%") {
              return "%";
            }
            index2++;
            const formatter = createDebug.formatters[format2];
            if (typeof formatter === "function") {
              const val = args[index2];
              match = formatter.call(self2, val);
              args.splice(index2, 1);
              index2--;
            }
            return match;
          });
          createDebug.formatArgs.call(self2, args);
          const logFn = self2.log || createDebug.log;
          logFn.apply(self2, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug);
        }
        return debug;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for (i = 0; i < len; i++) {
          if (!split[i]) {
            continue;
          }
          namespaces = split[i].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }
      function disable() {
        const namespaces = [
          ...createDebug.names.map(toNamespace),
          ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        if (name[name.length - 1] === "*") {
          return true;
        }
        let i;
        let len;
        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }
      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module2.exports = setup;
  }
});

// node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/debug/src/browser.js"(exports, module2) {
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load2;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module2.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index2 = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index2++;
        if (match === "%c") {
          lastC = index2;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error3) {
      }
    }
    function load2() {
      let r;
      try {
        r = exports.storage.getItem("debug");
      } catch (error3) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error3) {
      }
    }
    module2.exports = require_common()(exports);
    var {formatters} = module2.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error3) {
        return "[UnexpectedJSONParseError]: " + error3.message;
      }
    };
  }
});

// node_modules/has-flag/index.js
var require_has_flag = __commonJS({
  "node_modules/has-flag/index.js"(exports, module2) {
    "use strict";
    module2.exports = (flag, argv = process.argv) => {
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const position = argv.indexOf(prefix + flag);
      const terminatorPosition = argv.indexOf("--");
      return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
    };
  }
});

// node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "node_modules/supports-color/index.js"(exports, module2) {
    "use strict";
    var os = require("os");
    var tty = require("tty");
    var hasFlag = require_has_flag();
    var {env} = process;
    var forceColor;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
      forceColor = 0;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = 1;
    }
    if ("FORCE_COLOR" in env) {
      if (env.FORCE_COLOR === "true") {
        forceColor = 1;
      } else if (env.FORCE_COLOR === "false") {
        forceColor = 0;
      } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
      }
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor(haveStream, streamIsTTY) {
      if (forceColor === 0) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (haveStream && !streamIsTTY && forceColor === void 0) {
        return 0;
      }
      const min = forceColor || 0;
      if (env.TERM === "dumb") {
        return min;
      }
      if (process.platform === "win32") {
        const osRelease = os.release().split(".");
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      return min;
    }
    function getSupportLevel(stream) {
      const level = supportsColor(stream, stream && stream.isTTY);
      return translateLevel(level);
    }
    module2.exports = {
      supportsColor: getSupportLevel,
      stdout: translateLevel(supportsColor(true, tty.isatty(1))),
      stderr: translateLevel(supportsColor(true, tty.isatty(2)))
    };
  }
});

// node_modules/debug/src/node.js
var require_node2 = __commonJS({
  "node_modules/debug/src/node.js"(exports, module2) {
    var tty = require("tty");
    var util = require("util");
    exports.init = init2;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load2;
    exports.useColors = useColors;
    exports.destroy = util.deprecate(() => {
    }, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    exports.colors = [6, 2, 3, 4, 5, 1];
    try {
      const supportsColor = require_supports_color();
      if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
          20,
          21,
          26,
          27,
          32,
          33,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          56,
          57,
          62,
          63,
          68,
          69,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          92,
          93,
          98,
          99,
          112,
          113,
          128,
          129,
          134,
          135,
          148,
          149,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171,
          172,
          173,
          178,
          179,
          184,
          185,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          209,
          214,
          215,
          220,
          221
        ];
      }
    } catch (error3) {
    }
    exports.inspectOpts = Object.keys(process.env).filter((key) => {
      return /^debug_/i.test(key);
    }).reduce((obj, key) => {
      const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
        return k.toUpperCase();
      });
      let val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
      } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
      } else if (val === "null") {
        val = null;
      } else {
        val = Number(val);
      }
      obj[prop] = val;
      return obj;
    }, {});
    function useColors() {
      return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
    }
    function formatArgs(args) {
      const {namespace: name, useColors: useColors2} = this;
      if (useColors2) {
        const c = this.color;
        const colorCode = "[3" + (c < 8 ? c : "8;5;" + c);
        const prefix = `  ${colorCode};1m${name} [0m`;
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push(colorCode + "m+" + module2.exports.humanize(this.diff) + "[0m");
      } else {
        args[0] = getDate() + name + " " + args[0];
      }
    }
    function getDate() {
      if (exports.inspectOpts.hideDate) {
        return "";
      }
      return new Date().toISOString() + " ";
    }
    function log(...args) {
      return process.stderr.write(util.format(...args) + "\n");
    }
    function save(namespaces) {
      if (namespaces) {
        process.env.DEBUG = namespaces;
      } else {
        delete process.env.DEBUG;
      }
    }
    function load2() {
      return process.env.DEBUG;
    }
    function init2(debug) {
      debug.inspectOpts = {};
      const keys = Object.keys(exports.inspectOpts);
      for (let i = 0; i < keys.length; i++) {
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
      }
    }
    module2.exports = require_common()(exports);
    var {formatters} = module2.exports;
    formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
    };
    formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
  }
});

// node_modules/debug/src/index.js
var require_src = __commonJS({
  "node_modules/debug/src/index.js"(exports, module2) {
    if (typeof process === "undefined" || process.type === "renderer" || process.browser === true || process.__nwjs) {
      module2.exports = require_browser();
    } else {
      module2.exports = require_node2();
    }
  }
});

// node_modules/follow-redirects/debug.js
var require_debug = __commonJS({
  "node_modules/follow-redirects/debug.js"(exports, module2) {
    var debug;
    module2.exports = function() {
      if (!debug) {
        try {
          debug = require_src()("follow-redirects");
        } catch (error3) {
          debug = function() {
          };
        }
      }
      debug.apply(null, arguments);
    };
  }
});

// node_modules/follow-redirects/index.js
var require_follow_redirects = __commonJS({
  "node_modules/follow-redirects/index.js"(exports, module2) {
    var url = require("url");
    var URL2 = url.URL;
    var http2 = require("http");
    var https2 = require("https");
    var Writable = require("stream").Writable;
    var assert = require("assert");
    var debug = require_debug();
    var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
    var eventHandlers = Object.create(null);
    events.forEach(function(event) {
      eventHandlers[event] = function(arg1, arg2, arg3) {
        this._redirectable.emit(event, arg1, arg2, arg3);
      };
    });
    var RedirectionError = createErrorType("ERR_FR_REDIRECTION_FAILURE", "");
    var TooManyRedirectsError = createErrorType("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded");
    var MaxBodyLengthExceededError = createErrorType("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit");
    var WriteAfterEndError = createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
    function RedirectableRequest(options2, responseCallback) {
      Writable.call(this);
      this._sanitizeOptions(options2);
      this._options = options2;
      this._ended = false;
      this._ending = false;
      this._redirectCount = 0;
      this._redirects = [];
      this._requestBodyLength = 0;
      this._requestBodyBuffers = [];
      if (responseCallback) {
        this.on("response", responseCallback);
      }
      var self2 = this;
      this._onNativeResponse = function(response) {
        self2._processResponse(response);
      };
      this._performRequest();
    }
    RedirectableRequest.prototype = Object.create(Writable.prototype);
    RedirectableRequest.prototype.abort = function() {
      abortRequest(this._currentRequest);
      this.emit("abort");
    };
    RedirectableRequest.prototype.write = function(data, encoding, callback) {
      if (this._ending) {
        throw new WriteAfterEndError();
      }
      if (!(typeof data === "string" || typeof data === "object" && "length" in data)) {
        throw new TypeError("data should be a string, Buffer or Uint8Array");
      }
      if (typeof encoding === "function") {
        callback = encoding;
        encoding = null;
      }
      if (data.length === 0) {
        if (callback) {
          callback();
        }
        return;
      }
      if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
        this._requestBodyLength += data.length;
        this._requestBodyBuffers.push({data, encoding});
        this._currentRequest.write(data, encoding, callback);
      } else {
        this.emit("error", new MaxBodyLengthExceededError());
        this.abort();
      }
    };
    RedirectableRequest.prototype.end = function(data, encoding, callback) {
      if (typeof data === "function") {
        callback = data;
        data = encoding = null;
      } else if (typeof encoding === "function") {
        callback = encoding;
        encoding = null;
      }
      if (!data) {
        this._ended = this._ending = true;
        this._currentRequest.end(null, null, callback);
      } else {
        var self2 = this;
        var currentRequest = this._currentRequest;
        this.write(data, encoding, function() {
          self2._ended = true;
          currentRequest.end(null, null, callback);
        });
        this._ending = true;
      }
    };
    RedirectableRequest.prototype.setHeader = function(name, value) {
      this._options.headers[name] = value;
      this._currentRequest.setHeader(name, value);
    };
    RedirectableRequest.prototype.removeHeader = function(name) {
      delete this._options.headers[name];
      this._currentRequest.removeHeader(name);
    };
    RedirectableRequest.prototype.setTimeout = function(msecs, callback) {
      var self2 = this;
      if (callback) {
        this.on("timeout", callback);
      }
      function destroyOnTimeout(socket) {
        socket.setTimeout(msecs);
        socket.removeListener("timeout", socket.destroy);
        socket.addListener("timeout", socket.destroy);
      }
      function startTimer(socket) {
        if (self2._timeout) {
          clearTimeout(self2._timeout);
        }
        self2._timeout = setTimeout(function() {
          self2.emit("timeout");
          clearTimer();
        }, msecs);
        destroyOnTimeout(socket);
      }
      function clearTimer() {
        clearTimeout(this._timeout);
        if (callback) {
          self2.removeListener("timeout", callback);
        }
        if (!this.socket) {
          self2._currentRequest.removeListener("socket", startTimer);
        }
      }
      if (this.socket) {
        startTimer(this.socket);
      } else {
        this._currentRequest.once("socket", startTimer);
      }
      this.on("socket", destroyOnTimeout);
      this.once("response", clearTimer);
      this.once("error", clearTimer);
      return this;
    };
    [
      "flushHeaders",
      "getHeader",
      "setNoDelay",
      "setSocketKeepAlive"
    ].forEach(function(method) {
      RedirectableRequest.prototype[method] = function(a, b) {
        return this._currentRequest[method](a, b);
      };
    });
    ["aborted", "connection", "socket"].forEach(function(property) {
      Object.defineProperty(RedirectableRequest.prototype, property, {
        get: function() {
          return this._currentRequest[property];
        }
      });
    });
    RedirectableRequest.prototype._sanitizeOptions = function(options2) {
      if (!options2.headers) {
        options2.headers = {};
      }
      if (options2.host) {
        if (!options2.hostname) {
          options2.hostname = options2.host;
        }
        delete options2.host;
      }
      if (!options2.pathname && options2.path) {
        var searchPos = options2.path.indexOf("?");
        if (searchPos < 0) {
          options2.pathname = options2.path;
        } else {
          options2.pathname = options2.path.substring(0, searchPos);
          options2.search = options2.path.substring(searchPos);
        }
      }
    };
    RedirectableRequest.prototype._performRequest = function() {
      var protocol = this._options.protocol;
      var nativeProtocol = this._options.nativeProtocols[protocol];
      if (!nativeProtocol) {
        this.emit("error", new TypeError("Unsupported protocol " + protocol));
        return;
      }
      if (this._options.agents) {
        var scheme = protocol.substr(0, protocol.length - 1);
        this._options.agent = this._options.agents[scheme];
      }
      var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
      this._currentUrl = url.format(this._options);
      request._redirectable = this;
      for (var e = 0; e < events.length; e++) {
        request.on(events[e], eventHandlers[events[e]]);
      }
      if (this._isRedirect) {
        var i = 0;
        var self2 = this;
        var buffers = this._requestBodyBuffers;
        (function writeNext(error3) {
          if (request === self2._currentRequest) {
            if (error3) {
              self2.emit("error", error3);
            } else if (i < buffers.length) {
              var buffer = buffers[i++];
              if (!request.finished) {
                request.write(buffer.data, buffer.encoding, writeNext);
              }
            } else if (self2._ended) {
              request.end();
            }
          }
        })();
      }
    };
    RedirectableRequest.prototype._processResponse = function(response) {
      var statusCode = response.statusCode;
      if (this._options.trackRedirects) {
        this._redirects.push({
          url: this._currentUrl,
          headers: response.headers,
          statusCode
        });
      }
      var location = response.headers.location;
      if (location && this._options.followRedirects !== false && statusCode >= 300 && statusCode < 400) {
        abortRequest(this._currentRequest);
        response.destroy();
        if (++this._redirectCount > this._options.maxRedirects) {
          this.emit("error", new TooManyRedirectsError());
          return;
        }
        if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" || statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
          this._options.method = "GET";
          this._requestBodyBuffers = [];
          removeMatchingHeaders(/^content-/i, this._options.headers);
        }
        var previousHostName = removeMatchingHeaders(/^host$/i, this._options.headers) || url.parse(this._currentUrl).hostname;
        var redirectUrl = url.resolve(this._currentUrl, location);
        debug("redirecting to", redirectUrl);
        this._isRedirect = true;
        var redirectUrlParts = url.parse(redirectUrl);
        Object.assign(this._options, redirectUrlParts);
        if (redirectUrlParts.hostname !== previousHostName) {
          removeMatchingHeaders(/^authorization$/i, this._options.headers);
        }
        if (typeof this._options.beforeRedirect === "function") {
          var responseDetails = {headers: response.headers};
          try {
            this._options.beforeRedirect.call(null, this._options, responseDetails);
          } catch (err) {
            this.emit("error", err);
            return;
          }
          this._sanitizeOptions(this._options);
        }
        try {
          this._performRequest();
        } catch (cause) {
          var error3 = new RedirectionError("Redirected request failed: " + cause.message);
          error3.cause = cause;
          this.emit("error", error3);
        }
      } else {
        response.responseUrl = this._currentUrl;
        response.redirects = this._redirects;
        this.emit("response", response);
        this._requestBodyBuffers = [];
      }
    };
    function wrap(protocols) {
      var exports2 = {
        maxRedirects: 21,
        maxBodyLength: 10 * 1024 * 1024
      };
      var nativeProtocols = {};
      Object.keys(protocols).forEach(function(scheme) {
        var protocol = scheme + ":";
        var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
        var wrappedProtocol = exports2[scheme] = Object.create(nativeProtocol);
        function request(input, options2, callback) {
          if (typeof input === "string") {
            var urlStr = input;
            try {
              input = urlToOptions(new URL2(urlStr));
            } catch (err) {
              input = url.parse(urlStr);
            }
          } else if (URL2 && input instanceof URL2) {
            input = urlToOptions(input);
          } else {
            callback = options2;
            options2 = input;
            input = {protocol};
          }
          if (typeof options2 === "function") {
            callback = options2;
            options2 = null;
          }
          options2 = Object.assign({
            maxRedirects: exports2.maxRedirects,
            maxBodyLength: exports2.maxBodyLength
          }, input, options2);
          options2.nativeProtocols = nativeProtocols;
          assert.equal(options2.protocol, protocol, "protocol mismatch");
          debug("options", options2);
          return new RedirectableRequest(options2, callback);
        }
        function get(input, options2, callback) {
          var wrappedRequest = wrappedProtocol.request(input, options2, callback);
          wrappedRequest.end();
          return wrappedRequest;
        }
        Object.defineProperties(wrappedProtocol, {
          request: {value: request, configurable: true, enumerable: true, writable: true},
          get: {value: get, configurable: true, enumerable: true, writable: true}
        });
      });
      return exports2;
    }
    function noop3() {
    }
    function urlToOptions(urlObject) {
      var options2 = {
        protocol: urlObject.protocol,
        hostname: urlObject.hostname.startsWith("[") ? urlObject.hostname.slice(1, -1) : urlObject.hostname,
        hash: urlObject.hash,
        search: urlObject.search,
        pathname: urlObject.pathname,
        path: urlObject.pathname + urlObject.search,
        href: urlObject.href
      };
      if (urlObject.port !== "") {
        options2.port = Number(urlObject.port);
      }
      return options2;
    }
    function removeMatchingHeaders(regex, headers) {
      var lastValue;
      for (var header in headers) {
        if (regex.test(header)) {
          lastValue = headers[header];
          delete headers[header];
        }
      }
      return lastValue;
    }
    function createErrorType(code, defaultMessage) {
      function CustomError(message) {
        Error.captureStackTrace(this, this.constructor);
        this.message = message || defaultMessage;
      }
      CustomError.prototype = new Error();
      CustomError.prototype.constructor = CustomError;
      CustomError.prototype.name = "Error [" + code + "]";
      CustomError.prototype.code = code;
      return CustomError;
    }
    function abortRequest(request) {
      for (var e = 0; e < events.length; e++) {
        request.removeListener(events[e], eventHandlers[events[e]]);
      }
      request.on("error", noop3);
      request.abort();
    }
    module2.exports = wrap({http: http2, https: https2});
    module2.exports.wrap = wrap;
  }
});

// node_modules/@sanity/timed-out/index.js
var require_timed_out = __commonJS({
  "node_modules/@sanity/timed-out/index.js"(exports, module2) {
    "use strict";
    module2.exports = function(req, time) {
      if (req.timeoutTimer) {
        return req;
      }
      var delays = isNaN(time) ? time : {socket: time, connect: time};
      var hostHeader = req.getHeader("host");
      var host = hostHeader ? " to " + hostHeader : "";
      if (delays.connect !== void 0) {
        req.timeoutTimer = setTimeout(function timeoutHandler() {
          req.abort();
          var e = new Error("Connection timed out on request" + host);
          e.code = "ETIMEDOUT";
          req.emit("error", e);
        }, delays.connect);
      }
      req.on("socket", function assign2(socket) {
        if (!(socket.connecting || socket._connecting)) {
          connect();
          return;
        }
        socket.once("connect", connect);
      });
      function clear() {
        if (req.timeoutTimer) {
          clearTimeout(req.timeoutTimer);
          req.timeoutTimer = null;
        }
      }
      function connect() {
        clear();
        if (delays.socket !== void 0) {
          req.setTimeout(delays.socket, function socketTimeoutHandler() {
            req.abort();
            var e = new Error("Socket timed out on request" + host);
            e.code = "ESOCKETTIMEDOUT";
            req.emit("error", e);
          });
        }
      }
      return req.on("error", clear);
    };
  }
});

// node_modules/is-stream/index.js
var require_is_stream = __commonJS({
  "node_modules/is-stream/index.js"(exports, module2) {
    "use strict";
    var isStream = module2.exports = function(stream) {
      return stream !== null && typeof stream === "object" && typeof stream.pipe === "function";
    };
    isStream.writable = function(stream) {
      return isStream(stream) && stream.writable !== false && typeof stream._write === "function" && typeof stream._writableState === "object";
    };
    isStream.readable = function(stream) {
      return isStream(stream) && stream.readable !== false && typeof stream._read === "function" && typeof stream._readableState === "object";
    };
    isStream.duplex = function(stream) {
      return isStream.writable(stream) && isStream.readable(stream);
    };
    isStream.transform = function(stream) {
      return isStream.duplex(stream) && typeof stream._transform === "function" && typeof stream._transformState === "object";
    };
  }
});

// node_modules/process-nextick-args/index.js
var require_process_nextick_args = __commonJS({
  "node_modules/process-nextick-args/index.js"(exports, module2) {
    "use strict";
    if (typeof process === "undefined" || !process.version || process.version.indexOf("v0.") === 0 || process.version.indexOf("v1.") === 0 && process.version.indexOf("v1.8.") !== 0) {
      module2.exports = {nextTick};
    } else {
      module2.exports = process;
    }
    function nextTick(fn, arg1, arg2, arg3) {
      if (typeof fn !== "function") {
        throw new TypeError('"callback" argument must be a function');
      }
      var len = arguments.length;
      var args, i;
      switch (len) {
        case 0:
        case 1:
          return process.nextTick(fn);
        case 2:
          return process.nextTick(function afterTickOne() {
            fn.call(null, arg1);
          });
        case 3:
          return process.nextTick(function afterTickTwo() {
            fn.call(null, arg1, arg2);
          });
        case 4:
          return process.nextTick(function afterTickThree() {
            fn.call(null, arg1, arg2, arg3);
          });
        default:
          args = new Array(len - 1);
          i = 0;
          while (i < args.length) {
            args[i++] = arguments[i];
          }
          return process.nextTick(function afterTick() {
            fn.apply(null, args);
          });
      }
    }
  }
});

// node_modules/isarray/index.js
var require_isarray = __commonJS({
  "node_modules/isarray/index.js"(exports, module2) {
    var toString = {}.toString;
    module2.exports = Array.isArray || function(arr) {
      return toString.call(arr) == "[object Array]";
    };
  }
});

// node_modules/readable-stream/lib/internal/streams/stream.js
var require_stream = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/stream.js"(exports, module2) {
    module2.exports = require("stream");
  }
});

// node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "node_modules/safe-buffer/index.js"(exports, module2) {
    var buffer = require("buffer");
    var Buffer2 = buffer.Buffer;
    function copyProps(src2, dst) {
      for (var key in src2) {
        dst[key] = src2[key];
      }
    }
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module2.exports = buffer;
    } else {
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// node_modules/core-util-is/lib/util.js
var require_util = __commonJS({
  "node_modules/core-util-is/lib/util.js"(exports) {
    function isArray(arg) {
      if (Array.isArray) {
        return Array.isArray(arg);
      }
      return objectToString(arg) === "[object Array]";
    }
    exports.isArray = isArray;
    function isBoolean(arg) {
      return typeof arg === "boolean";
    }
    exports.isBoolean = isBoolean;
    function isNull(arg) {
      return arg === null;
    }
    exports.isNull = isNull;
    function isNullOrUndefined(arg) {
      return arg == null;
    }
    exports.isNullOrUndefined = isNullOrUndefined;
    function isNumber(arg) {
      return typeof arg === "number";
    }
    exports.isNumber = isNumber;
    function isString(arg) {
      return typeof arg === "string";
    }
    exports.isString = isString;
    function isSymbol(arg) {
      return typeof arg === "symbol";
    }
    exports.isSymbol = isSymbol;
    function isUndefined(arg) {
      return arg === void 0;
    }
    exports.isUndefined = isUndefined;
    function isRegExp(re) {
      return objectToString(re) === "[object RegExp]";
    }
    exports.isRegExp = isRegExp;
    function isObject(arg) {
      return typeof arg === "object" && arg !== null;
    }
    exports.isObject = isObject;
    function isDate(d) {
      return objectToString(d) === "[object Date]";
    }
    exports.isDate = isDate;
    function isError(e) {
      return objectToString(e) === "[object Error]" || e instanceof Error;
    }
    exports.isError = isError;
    function isFunction(arg) {
      return typeof arg === "function";
    }
    exports.isFunction = isFunction;
    function isPrimitive2(arg) {
      return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || typeof arg === "undefined";
    }
    exports.isPrimitive = isPrimitive2;
    exports.isBuffer = Buffer.isBuffer;
    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }
  }
});

// node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  "node_modules/inherits/inherits_browser.js"(exports, module2) {
    if (typeof Object.create === "function") {
      module2.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      module2.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {
          };
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
  }
});

// node_modules/inherits/inherits.js
var require_inherits = __commonJS({
  "node_modules/inherits/inherits.js"(exports, module2) {
    try {
      util = require("util");
      if (typeof util.inherits !== "function")
        throw "";
      module2.exports = util.inherits;
    } catch (e) {
      module2.exports = require_inherits_browser();
    }
    var util;
  }
});

// node_modules/readable-stream/lib/internal/streams/BufferList.js
var require_BufferList = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/BufferList.js"(exports, module2) {
    "use strict";
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var Buffer2 = require_safe_buffer().Buffer;
    var util = require("util");
    function copyBuffer(src2, target, offset) {
      src2.copy(target, offset);
    }
    module2.exports = function() {
      function BufferList() {
        _classCallCheck(this, BufferList);
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
      BufferList.prototype.push = function push(v) {
        var entry = {data: v, next: null};
        if (this.length > 0)
          this.tail.next = entry;
        else
          this.head = entry;
        this.tail = entry;
        ++this.length;
      };
      BufferList.prototype.unshift = function unshift(v) {
        var entry = {data: v, next: this.head};
        if (this.length === 0)
          this.tail = entry;
        this.head = entry;
        ++this.length;
      };
      BufferList.prototype.shift = function shift() {
        if (this.length === 0)
          return;
        var ret = this.head.data;
        if (this.length === 1)
          this.head = this.tail = null;
        else
          this.head = this.head.next;
        --this.length;
        return ret;
      };
      BufferList.prototype.clear = function clear() {
        this.head = this.tail = null;
        this.length = 0;
      };
      BufferList.prototype.join = function join(s2) {
        if (this.length === 0)
          return "";
        var p = this.head;
        var ret = "" + p.data;
        while (p = p.next) {
          ret += s2 + p.data;
        }
        return ret;
      };
      BufferList.prototype.concat = function concat(n) {
        if (this.length === 0)
          return Buffer2.alloc(0);
        if (this.length === 1)
          return this.head.data;
        var ret = Buffer2.allocUnsafe(n >>> 0);
        var p = this.head;
        var i = 0;
        while (p) {
          copyBuffer(p.data, ret, i);
          i += p.data.length;
          p = p.next;
        }
        return ret;
      };
      return BufferList;
    }();
    if (util && util.inspect && util.inspect.custom) {
      module2.exports.prototype[util.inspect.custom] = function() {
        var obj = util.inspect({length: this.length});
        return this.constructor.name + " " + obj;
      };
    }
  }
});

// node_modules/readable-stream/lib/internal/streams/destroy.js
var require_destroy = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/destroy.js"(exports, module2) {
    "use strict";
    var pna = require_process_nextick_args();
    function destroy(err, cb) {
      var _this = this;
      var readableDestroyed = this._readableState && this._readableState.destroyed;
      var writableDestroyed = this._writableState && this._writableState.destroyed;
      if (readableDestroyed || writableDestroyed) {
        if (cb) {
          cb(err);
        } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
          pna.nextTick(emitErrorNT, this, err);
        }
        return this;
      }
      if (this._readableState) {
        this._readableState.destroyed = true;
      }
      if (this._writableState) {
        this._writableState.destroyed = true;
      }
      this._destroy(err || null, function(err2) {
        if (!cb && err2) {
          pna.nextTick(emitErrorNT, _this, err2);
          if (_this._writableState) {
            _this._writableState.errorEmitted = true;
          }
        } else if (cb) {
          cb(err2);
        }
      });
      return this;
    }
    function undestroy() {
      if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
      }
      if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
      }
    }
    function emitErrorNT(self2, err) {
      self2.emit("error", err);
    }
    module2.exports = {
      destroy,
      undestroy
    };
  }
});

// node_modules/util-deprecate/node.js
var require_node3 = __commonJS({
  "node_modules/util-deprecate/node.js"(exports, module2) {
    module2.exports = require("util").deprecate;
  }
});

// node_modules/readable-stream/lib/_stream_writable.js
var require_stream_writable = __commonJS({
  "node_modules/readable-stream/lib/_stream_writable.js"(exports, module2) {
    "use strict";
    var pna = require_process_nextick_args();
    module2.exports = Writable;
    function CorkedRequest(state) {
      var _this = this;
      this.next = null;
      this.entry = null;
      this.finish = function() {
        onCorkedFinish(_this, state);
      };
    }
    var asyncWrite = !process.browser && ["v0.10", "v0.9."].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
    var Duplex;
    Writable.WritableState = WritableState;
    var util = Object.create(require_util());
    util.inherits = require_inherits();
    var internalUtil = {
      deprecate: require_node3()
    };
    var Stream2 = require_stream();
    var Buffer2 = require_safe_buffer().Buffer;
    var OurUint8Array = global.Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var destroyImpl = require_destroy();
    util.inherits(Writable, Stream2);
    function nop() {
    }
    function WritableState(options2, stream) {
      Duplex = Duplex || require_stream_duplex();
      options2 = options2 || {};
      var isDuplex = stream instanceof Duplex;
      this.objectMode = !!options2.objectMode;
      if (isDuplex)
        this.objectMode = this.objectMode || !!options2.writableObjectMode;
      var hwm = options2.highWaterMark;
      var writableHwm = options2.writableHighWaterMark;
      var defaultHwm = this.objectMode ? 16 : 16 * 1024;
      if (hwm || hwm === 0)
        this.highWaterMark = hwm;
      else if (isDuplex && (writableHwm || writableHwm === 0))
        this.highWaterMark = writableHwm;
      else
        this.highWaterMark = defaultHwm;
      this.highWaterMark = Math.floor(this.highWaterMark);
      this.finalCalled = false;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      this.destroyed = false;
      var noDecode = options2.decodeStrings === false;
      this.decodeStrings = !noDecode;
      this.defaultEncoding = options2.defaultEncoding || "utf8";
      this.length = 0;
      this.writing = false;
      this.corked = 0;
      this.sync = true;
      this.bufferProcessing = false;
      this.onwrite = function(er) {
        onwrite(stream, er);
      };
      this.writecb = null;
      this.writelen = 0;
      this.bufferedRequest = null;
      this.lastBufferedRequest = null;
      this.pendingcb = 0;
      this.prefinished = false;
      this.errorEmitted = false;
      this.bufferedRequestCount = 0;
      this.corkedRequestsFree = new CorkedRequest(this);
    }
    WritableState.prototype.getBuffer = function getBuffer() {
      var current = this.bufferedRequest;
      var out = [];
      while (current) {
        out.push(current);
        current = current.next;
      }
      return out;
    };
    (function() {
      try {
        Object.defineProperty(WritableState.prototype, "buffer", {
          get: internalUtil.deprecate(function() {
            return this.getBuffer();
          }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
      } catch (_) {
      }
    })();
    var realHasInstance;
    if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
      realHasInstance = Function.prototype[Symbol.hasInstance];
      Object.defineProperty(Writable, Symbol.hasInstance, {
        value: function(object) {
          if (realHasInstance.call(this, object))
            return true;
          if (this !== Writable)
            return false;
          return object && object._writableState instanceof WritableState;
        }
      });
    } else {
      realHasInstance = function(object) {
        return object instanceof this;
      };
    }
    function Writable(options2) {
      Duplex = Duplex || require_stream_duplex();
      if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
        return new Writable(options2);
      }
      this._writableState = new WritableState(options2, this);
      this.writable = true;
      if (options2) {
        if (typeof options2.write === "function")
          this._write = options2.write;
        if (typeof options2.writev === "function")
          this._writev = options2.writev;
        if (typeof options2.destroy === "function")
          this._destroy = options2.destroy;
        if (typeof options2.final === "function")
          this._final = options2.final;
      }
      Stream2.call(this);
    }
    Writable.prototype.pipe = function() {
      this.emit("error", new Error("Cannot pipe, not readable"));
    };
    function writeAfterEnd(stream, cb) {
      var er = new Error("write after end");
      stream.emit("error", er);
      pna.nextTick(cb, er);
    }
    function validChunk(stream, state, chunk, cb) {
      var valid = true;
      var er = false;
      if (chunk === null) {
        er = new TypeError("May not write null values to stream");
      } else if (typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
        er = new TypeError("Invalid non-string/buffer chunk");
      }
      if (er) {
        stream.emit("error", er);
        pna.nextTick(cb, er);
        valid = false;
      }
      return valid;
    }
    Writable.prototype.write = function(chunk, encoding, cb) {
      var state = this._writableState;
      var ret = false;
      var isBuf = !state.objectMode && _isUint8Array(chunk);
      if (isBuf && !Buffer2.isBuffer(chunk)) {
        chunk = _uint8ArrayToBuffer(chunk);
      }
      if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (isBuf)
        encoding = "buffer";
      else if (!encoding)
        encoding = state.defaultEncoding;
      if (typeof cb !== "function")
        cb = nop;
      if (state.ended)
        writeAfterEnd(this, cb);
      else if (isBuf || validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
      }
      return ret;
    };
    Writable.prototype.cork = function() {
      var state = this._writableState;
      state.corked++;
    };
    Writable.prototype.uncork = function() {
      var state = this._writableState;
      if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest)
          clearBuffer(this, state);
      }
    };
    Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
      if (typeof encoding === "string")
        encoding = encoding.toLowerCase();
      if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1))
        throw new TypeError("Unknown encoding: " + encoding);
      this._writableState.defaultEncoding = encoding;
      return this;
    };
    function decodeChunk(state, chunk, encoding) {
      if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
        chunk = Buffer2.from(chunk, encoding);
      }
      return chunk;
    }
    Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
      enumerable: false,
      get: function() {
        return this._writableState.highWaterMark;
      }
    });
    function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
      if (!isBuf) {
        var newChunk = decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
          isBuf = true;
          encoding = "buffer";
          chunk = newChunk;
        }
      }
      var len = state.objectMode ? 1 : chunk.length;
      state.length += len;
      var ret = state.length < state.highWaterMark;
      if (!ret)
        state.needDrain = true;
      if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
          chunk,
          encoding,
          isBuf,
          callback: cb,
          next: null
        };
        if (last) {
          last.next = state.lastBufferedRequest;
        } else {
          state.bufferedRequest = state.lastBufferedRequest;
        }
        state.bufferedRequestCount += 1;
      } else {
        doWrite(stream, state, false, len, chunk, encoding, cb);
      }
      return ret;
    }
    function doWrite(stream, state, writev, len, chunk, encoding, cb) {
      state.writelen = len;
      state.writecb = cb;
      state.writing = true;
      state.sync = true;
      if (writev)
        stream._writev(chunk, state.onwrite);
      else
        stream._write(chunk, encoding, state.onwrite);
      state.sync = false;
    }
    function onwriteError(stream, state, sync, er, cb) {
      --state.pendingcb;
      if (sync) {
        pna.nextTick(cb, er);
        pna.nextTick(finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        stream.emit("error", er);
      } else {
        cb(er);
        stream._writableState.errorEmitted = true;
        stream.emit("error", er);
        finishMaybe(stream, state);
      }
    }
    function onwriteStateUpdate(state) {
      state.writing = false;
      state.writecb = null;
      state.length -= state.writelen;
      state.writelen = 0;
    }
    function onwrite(stream, er) {
      var state = stream._writableState;
      var sync = state.sync;
      var cb = state.writecb;
      onwriteStateUpdate(state);
      if (er)
        onwriteError(stream, state, sync, er, cb);
      else {
        var finished = needFinish(state);
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
          clearBuffer(stream, state);
        }
        if (sync) {
          asyncWrite(afterWrite, stream, state, finished, cb);
        } else {
          afterWrite(stream, state, finished, cb);
        }
      }
    }
    function afterWrite(stream, state, finished, cb) {
      if (!finished)
        onwriteDrain(stream, state);
      state.pendingcb--;
      cb();
      finishMaybe(stream, state);
    }
    function onwriteDrain(stream, state) {
      if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit("drain");
      }
    }
    function clearBuffer(stream, state) {
      state.bufferProcessing = true;
      var entry = state.bufferedRequest;
      if (stream._writev && entry && entry.next) {
        var l = state.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        var allBuffers = true;
        while (entry) {
          buffer[count] = entry;
          if (!entry.isBuf)
            allBuffers = false;
          entry = entry.next;
          count += 1;
        }
        buffer.allBuffers = allBuffers;
        doWrite(stream, state, true, state.length, buffer, "", holder.finish);
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
          state.corkedRequestsFree = holder.next;
          holder.next = null;
        } else {
          state.corkedRequestsFree = new CorkedRequest(state);
        }
        state.bufferedRequestCount = 0;
      } else {
        while (entry) {
          var chunk = entry.chunk;
          var encoding = entry.encoding;
          var cb = entry.callback;
          var len = state.objectMode ? 1 : chunk.length;
          doWrite(stream, state, false, len, chunk, encoding, cb);
          entry = entry.next;
          state.bufferedRequestCount--;
          if (state.writing) {
            break;
          }
        }
        if (entry === null)
          state.lastBufferedRequest = null;
      }
      state.bufferedRequest = entry;
      state.bufferProcessing = false;
    }
    Writable.prototype._write = function(chunk, encoding, cb) {
      cb(new Error("_write() is not implemented"));
    };
    Writable.prototype._writev = null;
    Writable.prototype.end = function(chunk, encoding, cb) {
      var state = this._writableState;
      if (typeof chunk === "function") {
        cb = chunk;
        chunk = null;
        encoding = null;
      } else if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (chunk !== null && chunk !== void 0)
        this.write(chunk, encoding);
      if (state.corked) {
        state.corked = 1;
        this.uncork();
      }
      if (!state.ending && !state.finished)
        endWritable(this, state, cb);
    };
    function needFinish(state) {
      return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
    }
    function callFinal(stream, state) {
      stream._final(function(err) {
        state.pendingcb--;
        if (err) {
          stream.emit("error", err);
        }
        state.prefinished = true;
        stream.emit("prefinish");
        finishMaybe(stream, state);
      });
    }
    function prefinish(stream, state) {
      if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === "function") {
          state.pendingcb++;
          state.finalCalled = true;
          pna.nextTick(callFinal, stream, state);
        } else {
          state.prefinished = true;
          stream.emit("prefinish");
        }
      }
    }
    function finishMaybe(stream, state) {
      var need = needFinish(state);
      if (need) {
        prefinish(stream, state);
        if (state.pendingcb === 0) {
          state.finished = true;
          stream.emit("finish");
        }
      }
      return need;
    }
    function endWritable(stream, state, cb) {
      state.ending = true;
      finishMaybe(stream, state);
      if (cb) {
        if (state.finished)
          pna.nextTick(cb);
        else
          stream.once("finish", cb);
      }
      state.ended = true;
      stream.writable = false;
    }
    function onCorkedFinish(corkReq, state, err) {
      var entry = corkReq.entry;
      corkReq.entry = null;
      while (entry) {
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
      }
      if (state.corkedRequestsFree) {
        state.corkedRequestsFree.next = corkReq;
      } else {
        state.corkedRequestsFree = corkReq;
      }
    }
    Object.defineProperty(Writable.prototype, "destroyed", {
      get: function() {
        if (this._writableState === void 0) {
          return false;
        }
        return this._writableState.destroyed;
      },
      set: function(value) {
        if (!this._writableState) {
          return;
        }
        this._writableState.destroyed = value;
      }
    });
    Writable.prototype.destroy = destroyImpl.destroy;
    Writable.prototype._undestroy = destroyImpl.undestroy;
    Writable.prototype._destroy = function(err, cb) {
      this.end();
      cb(err);
    };
  }
});

// node_modules/readable-stream/lib/_stream_duplex.js
var require_stream_duplex = __commonJS({
  "node_modules/readable-stream/lib/_stream_duplex.js"(exports, module2) {
    "use strict";
    var pna = require_process_nextick_args();
    var objectKeys = Object.keys || function(obj) {
      var keys2 = [];
      for (var key in obj) {
        keys2.push(key);
      }
      return keys2;
    };
    module2.exports = Duplex;
    var util = Object.create(require_util());
    util.inherits = require_inherits();
    var Readable2 = require_stream_readable();
    var Writable = require_stream_writable();
    util.inherits(Duplex, Readable2);
    {
      keys = objectKeys(Writable.prototype);
      for (v = 0; v < keys.length; v++) {
        method = keys[v];
        if (!Duplex.prototype[method])
          Duplex.prototype[method] = Writable.prototype[method];
      }
    }
    var keys;
    var method;
    var v;
    function Duplex(options2) {
      if (!(this instanceof Duplex))
        return new Duplex(options2);
      Readable2.call(this, options2);
      Writable.call(this, options2);
      if (options2 && options2.readable === false)
        this.readable = false;
      if (options2 && options2.writable === false)
        this.writable = false;
      this.allowHalfOpen = true;
      if (options2 && options2.allowHalfOpen === false)
        this.allowHalfOpen = false;
      this.once("end", onend);
    }
    Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
      enumerable: false,
      get: function() {
        return this._writableState.highWaterMark;
      }
    });
    function onend() {
      if (this.allowHalfOpen || this._writableState.ended)
        return;
      pna.nextTick(onEndNT, this);
    }
    function onEndNT(self2) {
      self2.end();
    }
    Object.defineProperty(Duplex.prototype, "destroyed", {
      get: function() {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return false;
        }
        return this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function(value) {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return;
        }
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
      }
    });
    Duplex.prototype._destroy = function(err, cb) {
      this.push(null);
      this.end();
      pna.nextTick(cb, err);
    };
  }
});

// node_modules/readable-stream/lib/_stream_readable.js
var require_stream_readable = __commonJS({
  "node_modules/readable-stream/lib/_stream_readable.js"(exports, module2) {
    "use strict";
    var pna = require_process_nextick_args();
    module2.exports = Readable2;
    var isArray = require_isarray();
    var Duplex;
    Readable2.ReadableState = ReadableState;
    var EE = require("events").EventEmitter;
    var EElistenerCount = function(emitter, type) {
      return emitter.listeners(type).length;
    };
    var Stream2 = require_stream();
    var Buffer2 = require_safe_buffer().Buffer;
    var OurUint8Array = global.Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var util = Object.create(require_util());
    util.inherits = require_inherits();
    var debugUtil = require("util");
    var debug = void 0;
    if (debugUtil && debugUtil.debuglog) {
      debug = debugUtil.debuglog("stream");
    } else {
      debug = function() {
      };
    }
    var BufferList = require_BufferList();
    var destroyImpl = require_destroy();
    var StringDecoder;
    util.inherits(Readable2, Stream2);
    var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
    function prependListener(emitter, event, fn) {
      if (typeof emitter.prependListener === "function")
        return emitter.prependListener(event, fn);
      if (!emitter._events || !emitter._events[event])
        emitter.on(event, fn);
      else if (isArray(emitter._events[event]))
        emitter._events[event].unshift(fn);
      else
        emitter._events[event] = [fn, emitter._events[event]];
    }
    function ReadableState(options2, stream) {
      Duplex = Duplex || require_stream_duplex();
      options2 = options2 || {};
      var isDuplex = stream instanceof Duplex;
      this.objectMode = !!options2.objectMode;
      if (isDuplex)
        this.objectMode = this.objectMode || !!options2.readableObjectMode;
      var hwm = options2.highWaterMark;
      var readableHwm = options2.readableHighWaterMark;
      var defaultHwm = this.objectMode ? 16 : 16 * 1024;
      if (hwm || hwm === 0)
        this.highWaterMark = hwm;
      else if (isDuplex && (readableHwm || readableHwm === 0))
        this.highWaterMark = readableHwm;
      else
        this.highWaterMark = defaultHwm;
      this.highWaterMark = Math.floor(this.highWaterMark);
      this.buffer = new BufferList();
      this.length = 0;
      this.pipes = null;
      this.pipesCount = 0;
      this.flowing = null;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;
      this.sync = true;
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.resumeScheduled = false;
      this.destroyed = false;
      this.defaultEncoding = options2.defaultEncoding || "utf8";
      this.awaitDrain = 0;
      this.readingMore = false;
      this.decoder = null;
      this.encoding = null;
      if (options2.encoding) {
        if (!StringDecoder)
          StringDecoder = require("string_decoder/").StringDecoder;
        this.decoder = new StringDecoder(options2.encoding);
        this.encoding = options2.encoding;
      }
    }
    function Readable2(options2) {
      Duplex = Duplex || require_stream_duplex();
      if (!(this instanceof Readable2))
        return new Readable2(options2);
      this._readableState = new ReadableState(options2, this);
      this.readable = true;
      if (options2) {
        if (typeof options2.read === "function")
          this._read = options2.read;
        if (typeof options2.destroy === "function")
          this._destroy = options2.destroy;
      }
      Stream2.call(this);
    }
    Object.defineProperty(Readable2.prototype, "destroyed", {
      get: function() {
        if (this._readableState === void 0) {
          return false;
        }
        return this._readableState.destroyed;
      },
      set: function(value) {
        if (!this._readableState) {
          return;
        }
        this._readableState.destroyed = value;
      }
    });
    Readable2.prototype.destroy = destroyImpl.destroy;
    Readable2.prototype._undestroy = destroyImpl.undestroy;
    Readable2.prototype._destroy = function(err, cb) {
      this.push(null);
      cb(err);
    };
    Readable2.prototype.push = function(chunk, encoding) {
      var state = this._readableState;
      var skipChunkCheck;
      if (!state.objectMode) {
        if (typeof chunk === "string") {
          encoding = encoding || state.defaultEncoding;
          if (encoding !== state.encoding) {
            chunk = Buffer2.from(chunk, encoding);
            encoding = "";
          }
          skipChunkCheck = true;
        }
      } else {
        skipChunkCheck = true;
      }
      return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
    };
    Readable2.prototype.unshift = function(chunk) {
      return readableAddChunk(this, chunk, null, true, false);
    };
    function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
      var state = stream._readableState;
      if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
      } else {
        var er;
        if (!skipChunkCheck)
          er = chunkInvalid(state, chunk);
        if (er) {
          stream.emit("error", er);
        } else if (state.objectMode || chunk && chunk.length > 0) {
          if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer2.prototype) {
            chunk = _uint8ArrayToBuffer(chunk);
          }
          if (addToFront) {
            if (state.endEmitted)
              stream.emit("error", new Error("stream.unshift() after end event"));
            else
              addChunk(stream, state, chunk, true);
          } else if (state.ended) {
            stream.emit("error", new Error("stream.push() after EOF"));
          } else {
            state.reading = false;
            if (state.decoder && !encoding) {
              chunk = state.decoder.write(chunk);
              if (state.objectMode || chunk.length !== 0)
                addChunk(stream, state, chunk, false);
              else
                maybeReadMore(stream, state);
            } else {
              addChunk(stream, state, chunk, false);
            }
          }
        } else if (!addToFront) {
          state.reading = false;
        }
      }
      return needMoreData(state);
    }
    function addChunk(stream, state, chunk, addToFront) {
      if (state.flowing && state.length === 0 && !state.sync) {
        stream.emit("data", chunk);
        stream.read(0);
      } else {
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront)
          state.buffer.unshift(chunk);
        else
          state.buffer.push(chunk);
        if (state.needReadable)
          emitReadable(stream);
      }
      maybeReadMore(stream, state);
    }
    function chunkInvalid(state, chunk) {
      var er;
      if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
        er = new TypeError("Invalid non-string/buffer chunk");
      }
      return er;
    }
    function needMoreData(state) {
      return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
    }
    Readable2.prototype.isPaused = function() {
      return this._readableState.flowing === false;
    };
    Readable2.prototype.setEncoding = function(enc) {
      if (!StringDecoder)
        StringDecoder = require("string_decoder/").StringDecoder;
      this._readableState.decoder = new StringDecoder(enc);
      this._readableState.encoding = enc;
      return this;
    };
    var MAX_HWM = 8388608;
    function computeNewHighWaterMark(n) {
      if (n >= MAX_HWM) {
        n = MAX_HWM;
      } else {
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
      }
      return n;
    }
    function howMuchToRead(n, state) {
      if (n <= 0 || state.length === 0 && state.ended)
        return 0;
      if (state.objectMode)
        return 1;
      if (n !== n) {
        if (state.flowing && state.length)
          return state.buffer.head.data.length;
        else
          return state.length;
      }
      if (n > state.highWaterMark)
        state.highWaterMark = computeNewHighWaterMark(n);
      if (n <= state.length)
        return n;
      if (!state.ended) {
        state.needReadable = true;
        return 0;
      }
      return state.length;
    }
    Readable2.prototype.read = function(n) {
      debug("read", n);
      n = parseInt(n, 10);
      var state = this._readableState;
      var nOrig = n;
      if (n !== 0)
        state.emittedReadable = false;
      if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
        debug("read: emitReadable", state.length, state.ended);
        if (state.length === 0 && state.ended)
          endReadable(this);
        else
          emitReadable(this);
        return null;
      }
      n = howMuchToRead(n, state);
      if (n === 0 && state.ended) {
        if (state.length === 0)
          endReadable(this);
        return null;
      }
      var doRead = state.needReadable;
      debug("need readable", doRead);
      if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug("length less than watermark", doRead);
      }
      if (state.ended || state.reading) {
        doRead = false;
        debug("reading or ended", doRead);
      } else if (doRead) {
        debug("do read");
        state.reading = true;
        state.sync = true;
        if (state.length === 0)
          state.needReadable = true;
        this._read(state.highWaterMark);
        state.sync = false;
        if (!state.reading)
          n = howMuchToRead(nOrig, state);
      }
      var ret;
      if (n > 0)
        ret = fromList(n, state);
      else
        ret = null;
      if (ret === null) {
        state.needReadable = true;
        n = 0;
      } else {
        state.length -= n;
      }
      if (state.length === 0) {
        if (!state.ended)
          state.needReadable = true;
        if (nOrig !== n && state.ended)
          endReadable(this);
      }
      if (ret !== null)
        this.emit("data", ret);
      return ret;
    };
    function onEofChunk(stream, state) {
      if (state.ended)
        return;
      if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
          state.buffer.push(chunk);
          state.length += state.objectMode ? 1 : chunk.length;
        }
      }
      state.ended = true;
      emitReadable(stream);
    }
    function emitReadable(stream) {
      var state = stream._readableState;
      state.needReadable = false;
      if (!state.emittedReadable) {
        debug("emitReadable", state.flowing);
        state.emittedReadable = true;
        if (state.sync)
          pna.nextTick(emitReadable_, stream);
        else
          emitReadable_(stream);
      }
    }
    function emitReadable_(stream) {
      debug("emit readable");
      stream.emit("readable");
      flow(stream);
    }
    function maybeReadMore(stream, state) {
      if (!state.readingMore) {
        state.readingMore = true;
        pna.nextTick(maybeReadMore_, stream, state);
      }
    }
    function maybeReadMore_(stream, state) {
      var len = state.length;
      while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
        debug("maybeReadMore read 0");
        stream.read(0);
        if (len === state.length)
          break;
        else
          len = state.length;
      }
      state.readingMore = false;
    }
    Readable2.prototype._read = function(n) {
      this.emit("error", new Error("_read() is not implemented"));
    };
    Readable2.prototype.pipe = function(dest, pipeOpts) {
      var src2 = this;
      var state = this._readableState;
      switch (state.pipesCount) {
        case 0:
          state.pipes = dest;
          break;
        case 1:
          state.pipes = [state.pipes, dest];
          break;
        default:
          state.pipes.push(dest);
          break;
      }
      state.pipesCount += 1;
      debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
      var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
      var endFn = doEnd ? onend : unpipe;
      if (state.endEmitted)
        pna.nextTick(endFn);
      else
        src2.once("end", endFn);
      dest.on("unpipe", onunpipe);
      function onunpipe(readable, unpipeInfo) {
        debug("onunpipe");
        if (readable === src2) {
          if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
            unpipeInfo.hasUnpiped = true;
            cleanup();
          }
        }
      }
      function onend() {
        debug("onend");
        dest.end();
      }
      var ondrain = pipeOnDrain(src2);
      dest.on("drain", ondrain);
      var cleanedUp = false;
      function cleanup() {
        debug("cleanup");
        dest.removeListener("close", onclose);
        dest.removeListener("finish", onfinish);
        dest.removeListener("drain", ondrain);
        dest.removeListener("error", onerror);
        dest.removeListener("unpipe", onunpipe);
        src2.removeListener("end", onend);
        src2.removeListener("end", unpipe);
        src2.removeListener("data", ondata);
        cleanedUp = true;
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
          ondrain();
      }
      var increasedAwaitDrain = false;
      src2.on("data", ondata);
      function ondata(chunk) {
        debug("ondata");
        increasedAwaitDrain = false;
        var ret = dest.write(chunk);
        if (ret === false && !increasedAwaitDrain) {
          if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
            debug("false write response, pause", src2._readableState.awaitDrain);
            src2._readableState.awaitDrain++;
            increasedAwaitDrain = true;
          }
          src2.pause();
        }
      }
      function onerror(er) {
        debug("onerror", er);
        unpipe();
        dest.removeListener("error", onerror);
        if (EElistenerCount(dest, "error") === 0)
          dest.emit("error", er);
      }
      prependListener(dest, "error", onerror);
      function onclose() {
        dest.removeListener("finish", onfinish);
        unpipe();
      }
      dest.once("close", onclose);
      function onfinish() {
        debug("onfinish");
        dest.removeListener("close", onclose);
        unpipe();
      }
      dest.once("finish", onfinish);
      function unpipe() {
        debug("unpipe");
        src2.unpipe(dest);
      }
      dest.emit("pipe", src2);
      if (!state.flowing) {
        debug("pipe resume");
        src2.resume();
      }
      return dest;
    };
    function pipeOnDrain(src2) {
      return function() {
        var state = src2._readableState;
        debug("pipeOnDrain", state.awaitDrain);
        if (state.awaitDrain)
          state.awaitDrain--;
        if (state.awaitDrain === 0 && EElistenerCount(src2, "data")) {
          state.flowing = true;
          flow(src2);
        }
      };
    }
    Readable2.prototype.unpipe = function(dest) {
      var state = this._readableState;
      var unpipeInfo = {hasUnpiped: false};
      if (state.pipesCount === 0)
        return this;
      if (state.pipesCount === 1) {
        if (dest && dest !== state.pipes)
          return this;
        if (!dest)
          dest = state.pipes;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest)
          dest.emit("unpipe", this, unpipeInfo);
        return this;
      }
      if (!dest) {
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for (var i = 0; i < len; i++) {
          dests[i].emit("unpipe", this, unpipeInfo);
        }
        return this;
      }
      var index2 = indexOf(state.pipes, dest);
      if (index2 === -1)
        return this;
      state.pipes.splice(index2, 1);
      state.pipesCount -= 1;
      if (state.pipesCount === 1)
        state.pipes = state.pipes[0];
      dest.emit("unpipe", this, unpipeInfo);
      return this;
    };
    Readable2.prototype.on = function(ev, fn) {
      var res = Stream2.prototype.on.call(this, ev, fn);
      if (ev === "data") {
        if (this._readableState.flowing !== false)
          this.resume();
      } else if (ev === "readable") {
        var state = this._readableState;
        if (!state.endEmitted && !state.readableListening) {
          state.readableListening = state.needReadable = true;
          state.emittedReadable = false;
          if (!state.reading) {
            pna.nextTick(nReadingNextTick, this);
          } else if (state.length) {
            emitReadable(this);
          }
        }
      }
      return res;
    };
    Readable2.prototype.addListener = Readable2.prototype.on;
    function nReadingNextTick(self2) {
      debug("readable nexttick read 0");
      self2.read(0);
    }
    Readable2.prototype.resume = function() {
      var state = this._readableState;
      if (!state.flowing) {
        debug("resume");
        state.flowing = true;
        resume(this, state);
      }
      return this;
    };
    function resume(stream, state) {
      if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        pna.nextTick(resume_, stream, state);
      }
    }
    function resume_(stream, state) {
      if (!state.reading) {
        debug("resume read 0");
        stream.read(0);
      }
      state.resumeScheduled = false;
      state.awaitDrain = 0;
      stream.emit("resume");
      flow(stream);
      if (state.flowing && !state.reading)
        stream.read(0);
    }
    Readable2.prototype.pause = function() {
      debug("call pause flowing=%j", this._readableState.flowing);
      if (this._readableState.flowing !== false) {
        debug("pause");
        this._readableState.flowing = false;
        this.emit("pause");
      }
      return this;
    };
    function flow(stream) {
      var state = stream._readableState;
      debug("flow", state.flowing);
      while (state.flowing && stream.read() !== null) {
      }
    }
    Readable2.prototype.wrap = function(stream) {
      var _this = this;
      var state = this._readableState;
      var paused = false;
      stream.on("end", function() {
        debug("wrapped end");
        if (state.decoder && !state.ended) {
          var chunk = state.decoder.end();
          if (chunk && chunk.length)
            _this.push(chunk);
        }
        _this.push(null);
      });
      stream.on("data", function(chunk) {
        debug("wrapped data");
        if (state.decoder)
          chunk = state.decoder.write(chunk);
        if (state.objectMode && (chunk === null || chunk === void 0))
          return;
        else if (!state.objectMode && (!chunk || !chunk.length))
          return;
        var ret = _this.push(chunk);
        if (!ret) {
          paused = true;
          stream.pause();
        }
      });
      for (var i in stream) {
        if (this[i] === void 0 && typeof stream[i] === "function") {
          this[i] = function(method) {
            return function() {
              return stream[method].apply(stream, arguments);
            };
          }(i);
        }
      }
      for (var n = 0; n < kProxyEvents.length; n++) {
        stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
      }
      this._read = function(n2) {
        debug("wrapped _read", n2);
        if (paused) {
          paused = false;
          stream.resume();
        }
      };
      return this;
    };
    Object.defineProperty(Readable2.prototype, "readableHighWaterMark", {
      enumerable: false,
      get: function() {
        return this._readableState.highWaterMark;
      }
    });
    Readable2._fromList = fromList;
    function fromList(n, state) {
      if (state.length === 0)
        return null;
      var ret;
      if (state.objectMode)
        ret = state.buffer.shift();
      else if (!n || n >= state.length) {
        if (state.decoder)
          ret = state.buffer.join("");
        else if (state.buffer.length === 1)
          ret = state.buffer.head.data;
        else
          ret = state.buffer.concat(state.length);
        state.buffer.clear();
      } else {
        ret = fromListPartial(n, state.buffer, state.decoder);
      }
      return ret;
    }
    function fromListPartial(n, list, hasStrings) {
      var ret;
      if (n < list.head.data.length) {
        ret = list.head.data.slice(0, n);
        list.head.data = list.head.data.slice(n);
      } else if (n === list.head.data.length) {
        ret = list.shift();
      } else {
        ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
      }
      return ret;
    }
    function copyFromBufferString(n, list) {
      var p = list.head;
      var c = 1;
      var ret = p.data;
      n -= ret.length;
      while (p = p.next) {
        var str = p.data;
        var nb = n > str.length ? str.length : n;
        if (nb === str.length)
          ret += str;
        else
          ret += str.slice(0, n);
        n -= nb;
        if (n === 0) {
          if (nb === str.length) {
            ++c;
            if (p.next)
              list.head = p.next;
            else
              list.head = list.tail = null;
          } else {
            list.head = p;
            p.data = str.slice(nb);
          }
          break;
        }
        ++c;
      }
      list.length -= c;
      return ret;
    }
    function copyFromBuffer(n, list) {
      var ret = Buffer2.allocUnsafe(n);
      var p = list.head;
      var c = 1;
      p.data.copy(ret);
      n -= p.data.length;
      while (p = p.next) {
        var buf = p.data;
        var nb = n > buf.length ? buf.length : n;
        buf.copy(ret, ret.length - n, 0, nb);
        n -= nb;
        if (n === 0) {
          if (nb === buf.length) {
            ++c;
            if (p.next)
              list.head = p.next;
            else
              list.head = list.tail = null;
          } else {
            list.head = p;
            p.data = buf.slice(nb);
          }
          break;
        }
        ++c;
      }
      list.length -= c;
      return ret;
    }
    function endReadable(stream) {
      var state = stream._readableState;
      if (state.length > 0)
        throw new Error('"endReadable()" called on non-empty stream');
      if (!state.endEmitted) {
        state.ended = true;
        pna.nextTick(endReadableNT, state, stream);
      }
    }
    function endReadableNT(state, stream) {
      if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit("end");
      }
    }
    function indexOf(xs, x) {
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x)
          return i;
      }
      return -1;
    }
  }
});

// node_modules/readable-stream/lib/_stream_transform.js
var require_stream_transform = __commonJS({
  "node_modules/readable-stream/lib/_stream_transform.js"(exports, module2) {
    "use strict";
    module2.exports = Transform;
    var Duplex = require_stream_duplex();
    var util = Object.create(require_util());
    util.inherits = require_inherits();
    util.inherits(Transform, Duplex);
    function afterTransform(er, data) {
      var ts = this._transformState;
      ts.transforming = false;
      var cb = ts.writecb;
      if (!cb) {
        return this.emit("error", new Error("write callback called multiple times"));
      }
      ts.writechunk = null;
      ts.writecb = null;
      if (data != null)
        this.push(data);
      cb(er);
      var rs = this._readableState;
      rs.reading = false;
      if (rs.needReadable || rs.length < rs.highWaterMark) {
        this._read(rs.highWaterMark);
      }
    }
    function Transform(options2) {
      if (!(this instanceof Transform))
        return new Transform(options2);
      Duplex.call(this, options2);
      this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
      };
      this._readableState.needReadable = true;
      this._readableState.sync = false;
      if (options2) {
        if (typeof options2.transform === "function")
          this._transform = options2.transform;
        if (typeof options2.flush === "function")
          this._flush = options2.flush;
      }
      this.on("prefinish", prefinish);
    }
    function prefinish() {
      var _this = this;
      if (typeof this._flush === "function") {
        this._flush(function(er, data) {
          done(_this, er, data);
        });
      } else {
        done(this, null, null);
      }
    }
    Transform.prototype.push = function(chunk, encoding) {
      this._transformState.needTransform = false;
      return Duplex.prototype.push.call(this, chunk, encoding);
    };
    Transform.prototype._transform = function(chunk, encoding, cb) {
      throw new Error("_transform() is not implemented");
    };
    Transform.prototype._write = function(chunk, encoding, cb) {
      var ts = this._transformState;
      ts.writecb = cb;
      ts.writechunk = chunk;
      ts.writeencoding = encoding;
      if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
          this._read(rs.highWaterMark);
      }
    };
    Transform.prototype._read = function(n) {
      var ts = this._transformState;
      if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
      } else {
        ts.needTransform = true;
      }
    };
    Transform.prototype._destroy = function(err, cb) {
      var _this2 = this;
      Duplex.prototype._destroy.call(this, err, function(err2) {
        cb(err2);
        _this2.emit("close");
      });
    };
    function done(stream, er, data) {
      if (er)
        return stream.emit("error", er);
      if (data != null)
        stream.push(data);
      if (stream._writableState.length)
        throw new Error("Calling transform done when ws.length != 0");
      if (stream._transformState.transforming)
        throw new Error("Calling transform done when still transforming");
      return stream.push(null);
    }
  }
});

// node_modules/readable-stream/lib/_stream_passthrough.js
var require_stream_passthrough = __commonJS({
  "node_modules/readable-stream/lib/_stream_passthrough.js"(exports, module2) {
    "use strict";
    module2.exports = PassThrough2;
    var Transform = require_stream_transform();
    var util = Object.create(require_util());
    util.inherits = require_inherits();
    util.inherits(PassThrough2, Transform);
    function PassThrough2(options2) {
      if (!(this instanceof PassThrough2))
        return new PassThrough2(options2);
      Transform.call(this, options2);
    }
    PassThrough2.prototype._transform = function(chunk, encoding, cb) {
      cb(null, chunk);
    };
  }
});

// node_modules/readable-stream/readable.js
var require_readable = __commonJS({
  "node_modules/readable-stream/readable.js"(exports, module2) {
    var Stream2 = require("stream");
    if (process.env.READABLE_STREAM === "disable" && Stream2) {
      module2.exports = Stream2;
      exports = module2.exports = Stream2.Readable;
      exports.Readable = Stream2.Readable;
      exports.Writable = Stream2.Writable;
      exports.Duplex = Stream2.Duplex;
      exports.Transform = Stream2.Transform;
      exports.PassThrough = Stream2.PassThrough;
      exports.Stream = Stream2;
    } else {
      exports = module2.exports = require_stream_readable();
      exports.Stream = Stream2 || exports;
      exports.Readable = exports;
      exports.Writable = require_stream_writable();
      exports.Duplex = require_stream_duplex();
      exports.Transform = require_stream_transform();
      exports.PassThrough = require_stream_passthrough();
    }
  }
});

// node_modules/from2/index.js
var require_from2 = __commonJS({
  "node_modules/from2/index.js"(exports, module2) {
    var Readable2 = require_readable().Readable;
    var inherits = require_inherits();
    module2.exports = from2;
    from2.ctor = ctor;
    from2.obj = obj;
    var Proto = ctor();
    function toFunction(list) {
      list = list.slice();
      return function(_, cb) {
        var err = null;
        var item = list.length ? list.shift() : null;
        if (item instanceof Error) {
          err = item;
          item = null;
        }
        cb(err, item);
      };
    }
    function from2(opts, read2) {
      if (typeof opts !== "object" || Array.isArray(opts)) {
        read2 = opts;
        opts = {};
      }
      var rs = new Proto(opts);
      rs._from = Array.isArray(read2) ? toFunction(read2) : read2 || noop3;
      return rs;
    }
    function ctor(opts, read2) {
      if (typeof opts === "function") {
        read2 = opts;
        opts = {};
      }
      opts = defaults(opts);
      inherits(Class, Readable2);
      function Class(override) {
        if (!(this instanceof Class))
          return new Class(override);
        this._reading = false;
        this._callback = check;
        this.destroyed = false;
        Readable2.call(this, override || opts);
        var self2 = this;
        var hwm = this._readableState.highWaterMark;
        function check(err, data) {
          if (self2.destroyed)
            return;
          if (err)
            return self2.destroy(err);
          if (data === null)
            return self2.push(null);
          self2._reading = false;
          if (self2.push(data))
            self2._read(hwm);
        }
      }
      Class.prototype._from = read2 || noop3;
      Class.prototype._read = function(size) {
        if (this._reading || this.destroyed)
          return;
        this._reading = true;
        this._from(size, this._callback);
      };
      Class.prototype.destroy = function(err) {
        if (this.destroyed)
          return;
        this.destroyed = true;
        var self2 = this;
        process.nextTick(function() {
          if (err)
            self2.emit("error", err);
          self2.emit("close");
        });
      };
      return Class;
    }
    function obj(opts, read2) {
      if (typeof opts === "function" || Array.isArray(opts)) {
        read2 = opts;
        opts = {};
      }
      opts = defaults(opts);
      opts.objectMode = true;
      opts.highWaterMark = 16;
      return from2(opts, read2);
    }
    function noop3() {
    }
    function defaults(opts) {
      opts = opts || {};
      return opts;
    }
  }
});

// node_modules/p-is-promise/index.js
var require_p_is_promise = __commonJS({
  "node_modules/p-is-promise/index.js"(exports, module2) {
    "use strict";
    module2.exports = (x) => x instanceof Promise || x !== null && typeof x === "object" && typeof x.then === "function" && typeof x.catch === "function";
  }
});

// node_modules/into-stream/index.js
var require_into_stream = __commonJS({
  "node_modules/into-stream/index.js"(exports, module2) {
    "use strict";
    var from = require_from2();
    var pIsPromise = require_p_is_promise();
    module2.exports = (x) => {
      if (Array.isArray(x)) {
        x = x.slice();
      }
      let promise;
      let iterator;
      prepare(x);
      function prepare(value) {
        x = value;
        promise = pIsPromise(x) ? x : null;
        const shouldIterate = !promise && x[Symbol.iterator] && typeof x !== "string" && !Buffer.isBuffer(x);
        iterator = shouldIterate ? x[Symbol.iterator]() : null;
      }
      return from(function reader(size, cb) {
        if (promise) {
          promise.then(prepare).then(() => reader.call(this, size, cb), cb);
          return;
        }
        if (iterator) {
          const obj = iterator.next();
          setImmediate(cb, null, obj.done ? null : obj.value);
          return;
        }
        if (x.length === 0) {
          setImmediate(cb, null, null);
          return;
        }
        const chunk = x.slice(0, size);
        x = x.slice(size);
        setImmediate(cb, null, chunk);
      });
    };
    module2.exports.obj = (x) => {
      if (Array.isArray(x)) {
        x = x.slice();
      }
      let promise;
      let iterator;
      prepare(x);
      function prepare(value) {
        x = value;
        promise = pIsPromise(x) ? x : null;
        iterator = !promise && x[Symbol.iterator] ? x[Symbol.iterator]() : null;
      }
      return from.obj(function reader(size, cb) {
        if (promise) {
          promise.then(prepare).then(() => reader.call(this, size, cb), cb);
          return;
        }
        if (iterator) {
          const obj = iterator.next();
          setImmediate(cb, null, obj.done ? null : obj.value);
          return;
        }
        this.push(x);
        setImmediate(cb, null, null);
      });
    };
  }
});

// node_modules/xtend/immutable.js
var require_immutable = __commonJS({
  "node_modules/xtend/immutable.js"(exports, module2) {
    module2.exports = extend;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function extend() {
      var target = {};
      for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    }
  }
});

// node_modules/through2/through2.js
var require_through2 = __commonJS({
  "node_modules/through2/through2.js"(exports, module2) {
    var Transform = require_readable().Transform;
    var inherits = require("util").inherits;
    var xtend = require_immutable();
    function DestroyableTransform(opts) {
      Transform.call(this, opts);
      this._destroyed = false;
    }
    inherits(DestroyableTransform, Transform);
    DestroyableTransform.prototype.destroy = function(err) {
      if (this._destroyed)
        return;
      this._destroyed = true;
      var self2 = this;
      process.nextTick(function() {
        if (err)
          self2.emit("error", err);
        self2.emit("close");
      });
    };
    function noop3(chunk, enc, callback) {
      callback(null, chunk);
    }
    function through2(construct) {
      return function(options2, transform, flush) {
        if (typeof options2 == "function") {
          flush = transform;
          transform = options2;
          options2 = {};
        }
        if (typeof transform != "function")
          transform = noop3;
        if (typeof flush != "function")
          flush = null;
        return construct(options2, transform, flush);
      };
    }
    module2.exports = through2(function(options2, transform, flush) {
      var t2 = new DestroyableTransform(options2);
      t2._transform = transform;
      if (flush)
        t2._flush = flush;
      return t2;
    });
    module2.exports.ctor = through2(function(options2, transform, flush) {
      function Through2(override) {
        if (!(this instanceof Through2))
          return new Through2(override);
        this.options = xtend(options2, override);
        DestroyableTransform.call(this, this.options);
      }
      inherits(Through2, DestroyableTransform);
      Through2.prototype._transform = transform;
      if (flush)
        Through2.prototype._flush = flush;
      return Through2;
    });
    module2.exports.obj = through2(function(options2, transform, flush) {
      var t2 = new DestroyableTransform(xtend({objectMode: true, highWaterMark: 16}, options2));
      t2._transform = transform;
      if (flush)
        t2._flush = flush;
      return t2;
    });
  }
});

// node_modules/speedometer/index.js
var require_speedometer = __commonJS({
  "node_modules/speedometer/index.js"(exports, module2) {
    var tick2 = 1;
    var maxTick = 65535;
    var resolution = 4;
    var inc = function() {
      tick2 = tick2 + 1 & maxTick;
    };
    var timer = setInterval(inc, 1e3 / resolution | 0);
    if (timer.unref)
      timer.unref();
    module2.exports = function(seconds) {
      var size = resolution * (seconds || 5);
      var buffer = [0];
      var pointer = 1;
      var last = tick2 - 1 & maxTick;
      return function(delta) {
        var dist = tick2 - last & maxTick;
        if (dist > size)
          dist = size;
        last = tick2;
        while (dist--) {
          if (pointer === size)
            pointer = 0;
          buffer[pointer] = buffer[pointer === 0 ? size - 1 : pointer - 1];
          pointer++;
        }
        if (delta)
          buffer[pointer - 1] += delta;
        var top = buffer[pointer - 1];
        var btm = buffer.length < size ? 0 : buffer[pointer === size ? 0 : pointer];
        return buffer.length < resolution ? top : (top - btm) * resolution / buffer.length;
      };
    };
  }
});

// node_modules/progress-stream/index.js
var require_progress_stream = __commonJS({
  "node_modules/progress-stream/index.js"(exports, module2) {
    var through = require_through2();
    var speedometer = require_speedometer();
    module2.exports = function(options2, onprogress) {
      if (typeof options2 === "function")
        return module2.exports(null, options2);
      options2 = options2 || {};
      var length = options2.length || 0;
      var time = options2.time || 0;
      var drain = options2.drain || false;
      var transferred = options2.transferred || 0;
      var nextUpdate = Date.now() + time;
      var delta = 0;
      var speed = speedometer(options2.speed || 5e3);
      var startTime = Date.now();
      var update = {
        percentage: 0,
        transferred,
        length,
        remaining: length,
        eta: 0,
        runtime: 0
      };
      var emit = function(ended) {
        update.delta = delta;
        update.percentage = ended ? 100 : length ? transferred / length * 100 : 0;
        update.speed = speed(delta);
        update.eta = Math.round(update.remaining / update.speed);
        update.runtime = parseInt((Date.now() - startTime) / 1e3);
        nextUpdate = Date.now() + time;
        delta = 0;
        tr.emit("progress", update);
      };
      var write = function(chunk, enc, callback) {
        var len = options2.objectMode ? 1 : chunk.length;
        transferred += len;
        delta += len;
        update.transferred = transferred;
        update.remaining = length >= transferred ? length - transferred : 0;
        if (Date.now() >= nextUpdate)
          emit(false);
        callback(null, chunk);
      };
      var end = function(callback) {
        emit(true);
        callback();
      };
      var tr = through(options2.objectMode ? {objectMode: true, highWaterMark: 16} : {}, write, end);
      var onlength = function(newLength) {
        length = newLength;
        update.length = length;
        update.remaining = length - update.transferred;
        tr.emit("length", length);
      };
      tr.setLength = onlength;
      tr.on("pipe", function(stream) {
        if (typeof length === "number")
          return;
        if (stream.readable && !stream.writable && stream.headers) {
          return onlength(parseInt(stream.headers["content-length"] || 0));
        }
        if (typeof stream.length === "number") {
          return onlength(stream.length);
        }
        stream.on("response", function(res) {
          if (!res || !res.headers)
            return;
          if (res.headers["content-encoding"] === "gzip")
            return;
          if (res.headers["content-length"]) {
            return onlength(parseInt(res.headers["content-length"]));
          }
        });
      });
      if (drain)
        tr.resume();
      if (onprogress)
        tr.on("progress", onprogress);
      tr.progress = function() {
        update.speed = speed(0);
        update.eta = Math.round(update.remaining / update.speed);
        return update;
      };
      return tr;
    };
  }
});

// node_modules/mimic-response/index.js
var require_mimic_response = __commonJS({
  "node_modules/mimic-response/index.js"(exports, module2) {
    "use strict";
    var knownProps = [
      "destroy",
      "setTimeout",
      "socket",
      "headers",
      "trailers",
      "rawHeaders",
      "statusCode",
      "httpVersion",
      "httpVersionMinor",
      "httpVersionMajor",
      "rawTrailers",
      "statusMessage"
    ];
    module2.exports = (fromStream, toStream) => {
      const fromProps = new Set(Object.keys(fromStream).concat(knownProps));
      for (const prop of fromProps) {
        if (prop in toStream) {
          continue;
        }
        toStream[prop] = typeof fromStream[prop] === "function" ? fromStream[prop].bind(fromStream) : fromStream[prop];
      }
    };
  }
});

// node_modules/decompress-response/index.js
var require_decompress_response = __commonJS({
  "node_modules/decompress-response/index.js"(exports, module2) {
    "use strict";
    var PassThrough2 = require("stream").PassThrough;
    var zlib2 = require("zlib");
    var mimicResponse = require_mimic_response();
    module2.exports = (response) => {
      if (["gzip", "deflate"].indexOf(response.headers["content-encoding"]) === -1) {
        return response;
      }
      const unzip = zlib2.createUnzip();
      const stream = new PassThrough2();
      mimicResponse(response, stream);
      unzip.on("error", (err) => {
        if (err.code === "Z_BUF_ERROR") {
          stream.end();
          return;
        }
        stream.emit("error", err);
      });
      response.pipe(unzip).pipe(stream);
      return stream;
    };
  }
});

// node_modules/get-it/lib-node/request/node/proxy.js
var require_proxy = __commonJS({
  "node_modules/get-it/lib-node/request/node/proxy.js"(exports) {
    "use strict";
    var url = require("url");
    var objectAssign = require_object_assign();
    function formatHostname(hostname) {
      return hostname.replace(/^\.*/, ".").toLowerCase();
    }
    function parseNoProxyZone(zoneStr) {
      const zone = zoneStr.trim().toLowerCase();
      const zoneParts = zone.split(":", 2);
      const zoneHost = formatHostname(zoneParts[0]);
      const zonePort = zoneParts[1];
      const hasPort = zone.indexOf(":") > -1;
      return {hostname: zoneHost, port: zonePort, hasPort};
    }
    function uriInNoProxy(uri, noProxy) {
      const port = uri.port || (uri.protocol === "https:" ? "443" : "80");
      const hostname = formatHostname(uri.hostname);
      const noProxyList = noProxy.split(",");
      return noProxyList.map(parseNoProxyZone).some((noProxyZone) => {
        const isMatchedAt = hostname.indexOf(noProxyZone.hostname);
        const hostnameMatched = isMatchedAt > -1 && isMatchedAt === hostname.length - noProxyZone.hostname.length;
        if (noProxyZone.hasPort) {
          return port === noProxyZone.port && hostnameMatched;
        }
        return hostnameMatched;
      });
    }
    function getProxyFromUri(uri) {
      const noProxy = process.env.NO_PROXY || process.env.no_proxy || "";
      if (noProxy === "*") {
        return null;
      }
      if (noProxy !== "" && uriInNoProxy(uri, noProxy)) {
        return null;
      }
      if (uri.protocol === "http:") {
        return process.env.HTTP_PROXY || process.env.http_proxy || null;
      }
      if (uri.protocol === "https:") {
        return process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy || null;
      }
      return null;
    }
    function getHostFromUri(uri) {
      let host = uri.host;
      if (uri.port) {
        if (uri.port === "80" && uri.protocol === "http:" || uri.port === "443" && uri.protocol === "https:") {
          host = uri.hostname;
        }
      }
      return host;
    }
    function getHostHeaderWithPort(uri) {
      const port = uri.port || (uri.protocol === "https:" ? "443" : "80");
      return `${uri.hostname}:${port}`;
    }
    function rewriteUriForProxy(reqOpts, uri, proxy) {
      const headers = reqOpts.headers || {};
      const options2 = objectAssign({}, reqOpts, {headers});
      headers.host = headers.host || getHostHeaderWithPort(uri);
      options2.protocol = proxy.protocol || options2.protocol;
      options2.hostname = proxy.host.replace(/:\d+/, "");
      options2.port = proxy.port;
      options2.host = getHostFromUri(objectAssign({}, uri, proxy));
      options2.href = `${options2.protocol}//${options2.host}${options2.path}`;
      options2.path = url.format(uri);
      return options2;
    }
    function getProxyOptions(options2) {
      let proxy;
      if (options2.hasOwnProperty("proxy")) {
        proxy = options2.proxy;
      } else {
        const uri = url.parse(options2.url);
        proxy = getProxyFromUri(uri);
      }
      return typeof proxy === "string" ? url.parse(proxy) : proxy;
    }
    exports.rewriteUriForProxy = rewriteUriForProxy;
    exports.getProxyOptions = getProxyOptions;
  }
});

// node_modules/tunnel-agent/index.js
var require_tunnel_agent = __commonJS({
  "node_modules/tunnel-agent/index.js"(exports) {
    "use strict";
    var net = require("net");
    var tls = require("tls");
    var http2 = require("http");
    var https2 = require("https");
    var events = require("events");
    var assert = require("assert");
    var util = require("util");
    var Buffer2 = require_safe_buffer().Buffer;
    exports.httpOverHttp = httpOverHttp;
    exports.httpsOverHttp = httpsOverHttp;
    exports.httpOverHttps = httpOverHttps;
    exports.httpsOverHttps = httpsOverHttps;
    function httpOverHttp(options2) {
      var agent = new TunnelingAgent(options2);
      agent.request = http2.request;
      return agent;
    }
    function httpsOverHttp(options2) {
      var agent = new TunnelingAgent(options2);
      agent.request = http2.request;
      agent.createSocket = createSecureSocket;
      agent.defaultPort = 443;
      return agent;
    }
    function httpOverHttps(options2) {
      var agent = new TunnelingAgent(options2);
      agent.request = https2.request;
      return agent;
    }
    function httpsOverHttps(options2) {
      var agent = new TunnelingAgent(options2);
      agent.request = https2.request;
      agent.createSocket = createSecureSocket;
      agent.defaultPort = 443;
      return agent;
    }
    function TunnelingAgent(options2) {
      var self2 = this;
      self2.options = options2 || {};
      self2.proxyOptions = self2.options.proxy || {};
      self2.maxSockets = self2.options.maxSockets || http2.Agent.defaultMaxSockets;
      self2.requests = [];
      self2.sockets = [];
      self2.on("free", function onFree(socket, host, port) {
        for (var i = 0, len = self2.requests.length; i < len; ++i) {
          var pending = self2.requests[i];
          if (pending.host === host && pending.port === port) {
            self2.requests.splice(i, 1);
            pending.request.onSocket(socket);
            return;
          }
        }
        socket.destroy();
        self2.removeSocket(socket);
      });
    }
    util.inherits(TunnelingAgent, events.EventEmitter);
    TunnelingAgent.prototype.addRequest = function addRequest(req, options2) {
      var self2 = this;
      if (typeof options2 === "string") {
        options2 = {
          host: options2,
          port: arguments[2],
          path: arguments[3]
        };
      }
      if (self2.sockets.length >= this.maxSockets) {
        self2.requests.push({host: options2.host, port: options2.port, request: req});
        return;
      }
      self2.createConnection({host: options2.host, port: options2.port, request: req});
    };
    TunnelingAgent.prototype.createConnection = function createConnection(pending) {
      var self2 = this;
      self2.createSocket(pending, function(socket) {
        socket.on("free", onFree);
        socket.on("close", onCloseOrRemove);
        socket.on("agentRemove", onCloseOrRemove);
        pending.request.onSocket(socket);
        function onFree() {
          self2.emit("free", socket, pending.host, pending.port);
        }
        function onCloseOrRemove(err) {
          self2.removeSocket(socket);
          socket.removeListener("free", onFree);
          socket.removeListener("close", onCloseOrRemove);
          socket.removeListener("agentRemove", onCloseOrRemove);
        }
      });
    };
    TunnelingAgent.prototype.createSocket = function createSocket(options2, cb) {
      var self2 = this;
      var placeholder = {};
      self2.sockets.push(placeholder);
      var connectOptions = mergeOptions({}, self2.proxyOptions, {
        method: "CONNECT",
        path: options2.host + ":" + options2.port,
        agent: false
      });
      if (connectOptions.proxyAuth) {
        connectOptions.headers = connectOptions.headers || {};
        connectOptions.headers["Proxy-Authorization"] = "Basic " + Buffer2.from(connectOptions.proxyAuth).toString("base64");
      }
      debug("making CONNECT request");
      var connectReq = self2.request(connectOptions);
      connectReq.useChunkedEncodingByDefault = false;
      connectReq.once("response", onResponse);
      connectReq.once("upgrade", onUpgrade);
      connectReq.once("connect", onConnect);
      connectReq.once("error", onError);
      connectReq.end();
      function onResponse(res) {
        res.upgrade = true;
      }
      function onUpgrade(res, socket, head) {
        process.nextTick(function() {
          onConnect(res, socket, head);
        });
      }
      function onConnect(res, socket, head) {
        connectReq.removeAllListeners();
        socket.removeAllListeners();
        if (res.statusCode === 200) {
          assert.equal(head.length, 0);
          debug("tunneling connection has established");
          self2.sockets[self2.sockets.indexOf(placeholder)] = socket;
          cb(socket);
        } else {
          debug("tunneling socket could not be established, statusCode=%d", res.statusCode);
          var error3 = new Error("tunneling socket could not be established, statusCode=" + res.statusCode);
          error3.code = "ECONNRESET";
          options2.request.emit("error", error3);
          self2.removeSocket(placeholder);
        }
      }
      function onError(cause) {
        connectReq.removeAllListeners();
        debug("tunneling socket could not be established, cause=%s\n", cause.message, cause.stack);
        var error3 = new Error("tunneling socket could not be established, cause=" + cause.message);
        error3.code = "ECONNRESET";
        options2.request.emit("error", error3);
        self2.removeSocket(placeholder);
      }
    };
    TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
      var pos = this.sockets.indexOf(socket);
      if (pos === -1)
        return;
      this.sockets.splice(pos, 1);
      var pending = this.requests.shift();
      if (pending) {
        this.createConnection(pending);
      }
    };
    function createSecureSocket(options2, cb) {
      var self2 = this;
      TunnelingAgent.prototype.createSocket.call(self2, options2, function(socket) {
        var secureSocket = tls.connect(0, mergeOptions({}, self2.options, {
          servername: options2.host,
          socket
        }));
        self2.sockets[self2.sockets.indexOf(socket)] = secureSocket;
        cb(secureSocket);
      });
    }
    function mergeOptions(target) {
      for (var i = 1, len = arguments.length; i < len; ++i) {
        var overrides = arguments[i];
        if (typeof overrides === "object") {
          var keys = Object.keys(overrides);
          for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
            var k = keys[j];
            if (overrides[k] !== void 0) {
              target[k] = overrides[k];
            }
          }
        }
      }
      return target;
    }
    var debug;
    if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
      debug = function() {
        var args = Array.prototype.slice.call(arguments);
        if (typeof args[0] === "string") {
          args[0] = "TUNNEL: " + args[0];
        } else {
          args.unshift("TUNNEL:");
        }
        console.error.apply(console, args);
      };
    } else {
      debug = function() {
      };
    }
    exports.debug = debug;
  }
});

// node_modules/get-it/lib-node/request/node/tunnel.js
var require_tunnel = __commonJS({
  "node_modules/get-it/lib-node/request/node/tunnel.js"(exports) {
    "use strict";
    var url = require("url");
    var tunnel = require_tunnel_agent();
    var objectAssign = require_object_assign();
    var uriParts = ["protocol", "slashes", "auth", "host", "port", "hostname", "hash", "search", "query", "pathname", "path", "href"];
    var defaultProxyHeaderWhiteList = ["accept", "accept-charset", "accept-encoding", "accept-language", "accept-ranges", "cache-control", "content-encoding", "content-language", "content-location", "content-md5", "content-range", "content-type", "connection", "date", "expect", "max-forwards", "pragma", "referer", "te", "user-agent", "via"];
    var defaultProxyHeaderExclusiveList = ["proxy-authorization"];
    exports.shouldEnable = (options2, tunnelOption) => {
      if (typeof options2.tunnel !== "undefined") {
        return Boolean(options2.tunnel);
      }
      const uri = url.parse(options2.url);
      if (uri.protocol === "https:") {
        return true;
      }
      return false;
    };
    exports.applyAgent = function() {
      let opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      let proxy = arguments[1];
      const options2 = objectAssign({}, opts);
      const proxyHeaderWhiteList = defaultProxyHeaderWhiteList.concat(options2.proxyHeaderWhiteList || []).map((header) => header.toLowerCase());
      const proxyHeaderExclusiveList = defaultProxyHeaderExclusiveList.concat(options2.proxyHeaderExclusiveList || []).map((header) => header.toLowerCase());
      const proxyHeaders = getAllowedProxyHeaders(options2.headers, proxyHeaderWhiteList);
      proxyHeaders.host = constructProxyHost(options2);
      options2.headers = Object.keys(options2.headers || {}).reduce((headers, header) => {
        const isAllowed = proxyHeaderExclusiveList.indexOf(header.toLowerCase()) === -1;
        if (isAllowed) {
          headers[header] = options2.headers[header];
        }
        return headers;
      }, {});
      const tunnelFn = getTunnelFn(options2, proxy);
      const tunnelOptions = constructTunnelOptions(options2, proxy, proxyHeaders);
      options2.agent = tunnelFn(tunnelOptions);
      return options2;
    };
    function getTunnelFn(options2, proxy) {
      const uri = getUriParts(options2);
      const tunnelFnName = constructTunnelFnName(uri, proxy);
      return tunnel[tunnelFnName];
    }
    function getUriParts(options2) {
      return uriParts.reduce((uri, part) => {
        uri[part] = options2[part];
        return uri;
      }, {});
    }
    function constructTunnelFnName(uri, proxy) {
      const uriProtocol = uri.protocol === "https:" ? "https" : "http";
      const proxyProtocol = proxy.protocol === "https:" ? "Https" : "Http";
      return [uriProtocol, proxyProtocol].join("Over");
    }
    function constructProxyHost(uri) {
      const port = uri.port;
      const protocol = uri.protocol;
      let proxyHost = `${uri.hostname}:`;
      if (port) {
        proxyHost += port;
      } else if (protocol === "https:") {
        proxyHost += "443";
      } else {
        proxyHost += "80";
      }
      return proxyHost;
    }
    function getAllowedProxyHeaders(headers, whiteList) {
      return Object.keys(headers).filter((header) => whiteList.indexOf(header.toLowerCase()) !== -1).reduce((set, header) => {
        set[header] = headers[header];
        return set;
      }, {});
    }
    function constructTunnelOptions(options2, proxy, proxyHeaders) {
      return {
        proxy: {
          host: proxy.hostname,
          port: +proxy.port,
          proxyAuth: proxy.auth,
          headers: proxyHeaders
        },
        headers: options2.headers,
        ca: options2.ca,
        cert: options2.cert,
        key: options2.key,
        passphrase: options2.passphrase,
        pfx: options2.pfx,
        ciphers: options2.ciphers,
        rejectUnauthorized: options2.rejectUnauthorized,
        secureOptions: options2.secureOptions,
        secureProtocol: options2.secureProtocol
      };
    }
  }
});

// node_modules/get-it/lib-node/request/node-request.js
var require_node_request = __commonJS({
  "node_modules/get-it/lib-node/request/node-request.js"(exports, module2) {
    "use strict";
    var _slicedToArray = function() {
      function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = void 0;
        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"])
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      return function(arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if (Symbol.iterator in Object(arr)) {
          return sliceIterator(arr, i);
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    }();
    var qs = require("querystring");
    var url = require("url");
    var http2 = require("http");
    var https2 = require("https");
    var concat = require_simple_concat();
    var follow = require_follow_redirects();
    var timedOut = require_timed_out();
    var isStream = require_is_stream();
    var toStream = require_into_stream();
    var objectAssign = require_object_assign();
    var progressStream = require_progress_stream();
    var decompressResponse = require_decompress_response();
    var _require = require_proxy();
    var getProxyOptions = _require.getProxyOptions;
    var rewriteUriForProxy = _require.rewriteUriForProxy;
    var tunneling = require_tunnel();
    var adapter = "node";
    var reduceResponse = (res, reqUrl, method, body) => ({
      body,
      url: reqUrl,
      method,
      headers: res.headers,
      statusCode: res.statusCode,
      statusMessage: res.statusMessage
    });
    module2.exports = (context2, cb) => {
      const options2 = context2.options;
      const uri = objectAssign({}, url.parse(options2.url));
      const bodyType = isStream(options2.body) ? "stream" : typeof options2.body;
      if (bodyType !== "undefined" && bodyType !== "stream" && bodyType !== "string" && !Buffer.isBuffer(options2.body)) {
        throw new Error(`Request body must be a string, buffer or stream, got ${bodyType}`);
      }
      const lengthHeader = {};
      if (options2.bodySize) {
        lengthHeader["content-length"] = options2.bodySize;
      } else if (options2.body && Buffer.isBuffer(options2.body)) {
        lengthHeader["content-length"] = options2.body.length;
      }
      let aborted = false;
      const callback = (err, res) => !aborted && cb(err, res);
      context2.channels.abort.subscribe(() => {
        aborted = true;
      });
      let reqOpts = objectAssign({}, uri, {
        method: options2.method,
        headers: objectAssign({}, lowerCaseHeaders(options2.headers), lengthHeader),
        maxRedirects: options2.maxRedirects
      });
      const proxy = getProxyOptions(options2);
      const tunnel = proxy && tunneling.shouldEnable(options2);
      const injectedResponse = context2.applyMiddleware("interceptRequest", void 0, {
        adapter,
        context: context2
      });
      if (injectedResponse) {
        const cbTimer = setImmediate(callback, null, injectedResponse);
        const abort = () => clearImmediate(cbTimer);
        return {abort};
      }
      if (options2.maxRedirects !== 0) {
        reqOpts.maxRedirects = options2.maxRedirects || 5;
      }
      if (proxy && tunnel) {
        reqOpts = tunneling.applyAgent(reqOpts, proxy);
      } else if (proxy && !tunnel) {
        reqOpts = rewriteUriForProxy(reqOpts, uri, proxy);
      }
      if (!tunnel && proxy && proxy.auth && !reqOpts.headers["proxy-authorization"]) {
        var _ref = proxy.auth.username ? [proxy.auth.username, proxy.auth.password] : proxy.auth.split(":").map((item) => qs.unescape(item)), _ref2 = _slicedToArray(_ref, 2);
        const username = _ref2[0], password = _ref2[1];
        const auth = Buffer.from(`${username}:${password}`, "utf8");
        const authBase64 = auth.toString("base64");
        reqOpts.headers["proxy-authorization"] = `Basic ${authBase64}`;
      }
      const transport = getRequestTransport(reqOpts, proxy, tunnel);
      if (typeof options2.debug === "function" && proxy) {
        options2.debug("Proxying using %s", reqOpts.agent ? "tunnel agent" : `${reqOpts.host}:${reqOpts.port}`);
      }
      const finalOptions = context2.applyMiddleware("finalizeOptions", reqOpts);
      const request = transport.request(finalOptions, (response) => {
        const tryDecompress = reqOpts.method !== "HEAD";
        const res = tryDecompress ? decompressResponse(response) : response;
        const resStream = context2.applyMiddleware("onHeaders", res, {
          headers: response.headers,
          adapter,
          context: context2
        });
        concat(resStream, (err, data) => {
          if (err) {
            return callback(err);
          }
          const body = options2.rawBody ? data : data.toString();
          const reduced = reduceResponse(res, response.responseUrl || options2.url, reqOpts.method, body);
          return callback(null, reduced);
        });
      });
      if (options2.timeout) {
        timedOut(request, options2.timeout);
      }
      request.once("error", callback);
      var _getProgressStream = getProgressStream(options2);
      const bodyStream = _getProgressStream.bodyStream, progress = _getProgressStream.progress;
      context2.applyMiddleware("onRequest", {options: options2, adapter, request, context: context2, progress});
      if (bodyStream) {
        bodyStream.pipe(request);
      } else {
        request.end(options2.body);
      }
      return {abort: () => request.abort()};
    };
    function getProgressStream(options2) {
      if (!options2.body) {
        return {};
      }
      const bodyIsStream = isStream(options2.body);
      const length = options2.bodySize || (bodyIsStream ? null : Buffer.byteLength(options2.body));
      if (!length) {
        return bodyIsStream ? {bodyStream: options2.body} : {};
      }
      const progress = progressStream({time: 16, length});
      const bodyStream = bodyIsStream ? options2.body : toStream(options2.body);
      return {bodyStream: bodyStream.pipe(progress), progress};
    }
    function getRequestTransport(reqOpts, proxy, tunnel) {
      const isHttpsRequest = reqOpts.protocol === "https:";
      const transports = reqOpts.maxRedirects === 0 ? {http: http2, https: https2} : {http: follow.http, https: follow.https};
      if (!proxy || tunnel) {
        return isHttpsRequest ? transports.https : transports.http;
      }
      let isHttpsProxy = proxy.port === 443;
      if (proxy.protocol) {
        isHttpsProxy = /^https:?/.test(proxy.protocol);
      }
      return isHttpsProxy ? transports.https : transports.http;
    }
    function lowerCaseHeaders(headers) {
      return Object.keys(headers || {}).reduce((acc, header) => {
        acc[header.toLowerCase()] = headers[header];
        return acc;
      }, {});
    }
  }
});

// node_modules/get-it/lib-node/request/index.js
var require_request = __commonJS({
  "node_modules/get-it/lib-node/request/index.js"(exports, module2) {
    "use strict";
    module2.exports = require_node_request();
  }
});

// node_modules/get-it/lib-node/index.js
var require_lib_node = __commonJS({
  "node_modules/get-it/lib-node/index.js"(exports, module2) {
    "use strict";
    var pubsub = require_nano_pubsub();
    var middlewareReducer = require_middlewareReducer();
    var processOptions = require_defaultOptionsProcessor();
    var validateOptions = require_defaultOptionsValidator();
    var httpRequest = require_request();
    var channelNames = ["request", "response", "progress", "error", "abort"];
    var middlehooks = ["processOptions", "validateOptions", "interceptRequest", "finalizeOptions", "onRequest", "onResponse", "onError", "onReturn", "onHeaders"];
    module2.exports = function createRequester() {
      let initMiddleware = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      const loadedMiddleware = [];
      const middleware = middlehooks.reduce((ware, name) => {
        ware[name] = ware[name] || [];
        return ware;
      }, {
        processOptions: [processOptions],
        validateOptions: [validateOptions]
      });
      function request(opts) {
        const channels = channelNames.reduce((target, name) => {
          target[name] = pubsub();
          return target;
        }, {});
        const applyMiddleware = middlewareReducer(middleware);
        const options2 = applyMiddleware("processOptions", opts);
        applyMiddleware("validateOptions", options2);
        const context2 = {
          options: options2,
          channels,
          applyMiddleware
        };
        let ongoingRequest = null;
        const unsubscribe = channels.request.subscribe((ctx) => {
          ongoingRequest = httpRequest(ctx, (err, res) => onResponse(err, res, ctx));
        });
        channels.abort.subscribe(() => {
          unsubscribe();
          if (ongoingRequest) {
            ongoingRequest.abort();
          }
        });
        const returnValue = applyMiddleware("onReturn", channels, context2);
        if (returnValue === channels) {
          channels.request.publish(context2);
        }
        return returnValue;
        function onResponse(reqErr, res, ctx) {
          let error3 = reqErr;
          let response = res;
          if (!error3) {
            try {
              response = applyMiddleware("onResponse", res, ctx);
            } catch (err) {
              response = null;
              error3 = err;
            }
          }
          error3 = error3 && applyMiddleware("onError", error3, ctx);
          if (error3) {
            channels.error.publish(error3);
          } else if (response) {
            channels.response.publish(response);
          }
        }
      }
      request.use = function use(newMiddleware) {
        if (!newMiddleware) {
          throw new Error("Tried to add middleware that resolved to falsey value");
        }
        if (typeof newMiddleware === "function") {
          throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
        }
        if (newMiddleware.onReturn && middleware.onReturn.length > 0) {
          throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
        }
        middlehooks.forEach((key) => {
          if (newMiddleware[key]) {
            middleware[key].push(newMiddleware[key]);
          }
        });
        loadedMiddleware.push(newMiddleware);
        return request;
      };
      request.clone = function clone2() {
        return createRequester(loadedMiddleware);
      };
      initMiddleware.forEach(request.use);
      return request;
    };
  }
});

// node_modules/get-it/index.js
var require_get_it = __commonJS({
  "node_modules/get-it/index.js"(exports, module2) {
    module2.exports = require_lib_node();
  }
});

// node_modules/get-it/lib/util/global.js
var require_global = __commonJS({
  "node_modules/get-it/lib/util/global.js"(exports, module2) {
    "use strict";
    if (typeof window !== "undefined") {
      module2.exports = window;
    } else if (typeof global !== "undefined") {
      module2.exports = global;
    } else if (typeof self !== "undefined") {
      module2.exports = self;
    } else {
      module2.exports = {};
    }
  }
});

// node_modules/get-it/lib/middleware/observable.js
var require_observable2 = __commonJS({
  "node_modules/get-it/lib/middleware/observable.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var objectAssign = require_object_assign();
    module2.exports = function() {
      var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var Observable = opts.implementation || global2.Observable;
      if (!Observable) {
        throw new Error("`Observable` is not available in global scope, and no implementation was passed");
      }
      return {
        onReturn: function onReturn(channels, context2) {
          return new Observable(function(observer) {
            channels.error.subscribe(function(err) {
              return observer.error(err);
            });
            channels.progress.subscribe(function(event) {
              return observer.next(objectAssign({type: "progress"}, event));
            });
            channels.response.subscribe(function(response) {
              observer.next(objectAssign({type: "response"}, response));
              observer.complete();
            });
            channels.request.publish(context2);
            return function() {
              return channels.abort.publish();
            };
          });
        }
      };
    };
  }
});

// node_modules/isobject/index.js
var require_isobject = __commonJS({
  "node_modules/isobject/index.js"(exports, module2) {
    "use strict";
    module2.exports = function isObject(val) {
      return val != null && typeof val === "object" && Array.isArray(val) === false;
    };
  }
});

// node_modules/is-plain-object/index.js
var require_is_plain_object = __commonJS({
  "node_modules/is-plain-object/index.js"(exports, module2) {
    "use strict";
    var isObject = require_isobject();
    function isObjectObject(o) {
      return isObject(o) === true && Object.prototype.toString.call(o) === "[object Object]";
    }
    module2.exports = function isPlainObject(o) {
      var ctor, prot;
      if (isObjectObject(o) === false)
        return false;
      ctor = o.constructor;
      if (typeof ctor !== "function")
        return false;
      prot = ctor.prototype;
      if (isObjectObject(prot) === false)
        return false;
      if (prot.hasOwnProperty("isPrototypeOf") === false) {
        return false;
      }
      return true;
    };
  }
});

// node_modules/get-it/lib/middleware/jsonRequest.js
var require_jsonRequest = __commonJS({
  "node_modules/get-it/lib/middleware/jsonRequest.js"(exports, module2) {
    "use strict";
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var objectAssign = require_object_assign();
    var isPlainObject = require_is_plain_object();
    var serializeTypes = ["boolean", "string", "number"];
    var isBuffer = function isBuffer2(obj) {
      return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
    };
    module2.exports = function() {
      return {
        processOptions: function processOptions(options2) {
          var body = options2.body;
          if (!body) {
            return options2;
          }
          var isStream = typeof body.pipe === "function";
          var shouldSerialize = !isStream && !isBuffer(body) && (serializeTypes.indexOf(typeof body === "undefined" ? "undefined" : _typeof(body)) !== -1 || Array.isArray(body) || isPlainObject(body));
          if (!shouldSerialize) {
            return options2;
          }
          return objectAssign({}, options2, {
            body: JSON.stringify(options2.body),
            headers: objectAssign({}, options2.headers, {
              "Content-Type": "application/json"
            })
          });
        }
      };
    };
  }
});

// node_modules/get-it/lib/middleware/jsonResponse.js
var require_jsonResponse = __commonJS({
  "node_modules/get-it/lib/middleware/jsonResponse.js"(exports, module2) {
    "use strict";
    var objectAssign = require_object_assign();
    module2.exports = function(opts) {
      return {
        onResponse: function onResponse(response) {
          var contentType = response.headers["content-type"] || "";
          var shouldDecode = opts && opts.force || contentType.indexOf("application/json") !== -1;
          if (!response.body || !contentType || !shouldDecode) {
            return response;
          }
          return objectAssign({}, response, {body: tryParse(response.body)});
        },
        processOptions: function processOptions(options2) {
          return objectAssign({}, options2, {
            headers: objectAssign({Accept: "application/json"}, options2.headers)
          });
        }
      };
    };
    function tryParse(body) {
      try {
        return JSON.parse(body);
      } catch (err) {
        err.message = "Failed to parsed response body as JSON: " + err.message;
        throw err;
      }
    }
  }
});

// node_modules/get-it/lib/middleware/progress/node-progress.js
var require_node_progress = __commonJS({
  "node_modules/get-it/lib/middleware/progress/node-progress.js"(exports, module2) {
    "use strict";
    var progressStream = require_progress_stream();
    function normalizer(stage) {
      return function(prog) {
        return {
          stage,
          percent: prog.percentage,
          total: prog.length,
          loaded: prog.transferred,
          lengthComputable: !(prog.length === 0 && prog.percentage === 0)
        };
      };
    }
    module2.exports = function() {
      return {
        onHeaders: function onHeaders(response, evt) {
          var progress = progressStream({time: 16});
          var normalize2 = normalizer("download");
          var contentLength = response.headers["content-length"];
          var length = contentLength && Number(contentLength);
          if (!isNaN(length) && length > 0) {
            progress.setLength(length);
          }
          progress.on("progress", function(prog) {
            return evt.context.channels.progress.publish(normalize2(prog));
          });
          return response.pipe(progress);
        },
        onRequest: function onRequest(evt) {
          if (!evt.progress) {
            return;
          }
          var normalize2 = normalizer("upload");
          evt.progress.on("progress", function(prog) {
            return evt.context.channels.progress.publish(normalize2(prog));
          });
        }
      };
    };
  }
});

// node_modules/get-it/lib/middleware/progress/index.js
var require_progress = __commonJS({
  "node_modules/get-it/lib/middleware/progress/index.js"(exports, module2) {
    "use strict";
    module2.exports = require_node_progress();
  }
});

// node_modules/make-error/index.js
var require_make_error = __commonJS({
  "node_modules/make-error/index.js"(exports, module2) {
    "use strict";
    var construct = typeof Reflect !== "undefined" ? Reflect.construct : void 0;
    var defineProperty = Object.defineProperty;
    var captureStackTrace = Error.captureStackTrace;
    if (captureStackTrace === void 0) {
      captureStackTrace = function captureStackTrace2(error3) {
        var container = new Error();
        defineProperty(error3, "stack", {
          configurable: true,
          get: function getStack() {
            var stack = container.stack;
            defineProperty(this, "stack", {
              configurable: true,
              value: stack,
              writable: true
            });
            return stack;
          },
          set: function setStack(stack) {
            defineProperty(error3, "stack", {
              configurable: true,
              value: stack,
              writable: true
            });
          }
        });
      };
    }
    function BaseError(message) {
      if (message !== void 0) {
        defineProperty(this, "message", {
          configurable: true,
          value: message,
          writable: true
        });
      }
      var cname = this.constructor.name;
      if (cname !== void 0 && cname !== this.name) {
        defineProperty(this, "name", {
          configurable: true,
          value: cname,
          writable: true
        });
      }
      captureStackTrace(this, this.constructor);
    }
    BaseError.prototype = Object.create(Error.prototype, {
      constructor: {
        configurable: true,
        value: BaseError,
        writable: true
      }
    });
    var setFunctionName = function() {
      function setFunctionName2(fn, name) {
        return defineProperty(fn, "name", {
          configurable: true,
          value: name
        });
      }
      try {
        var f = function() {
        };
        setFunctionName2(f, "foo");
        if (f.name === "foo") {
          return setFunctionName2;
        }
      } catch (_) {
      }
    }();
    function makeError(constructor, super_) {
      if (super_ == null || super_ === Error) {
        super_ = BaseError;
      } else if (typeof super_ !== "function") {
        throw new TypeError("super_ should be a function");
      }
      var name;
      if (typeof constructor === "string") {
        name = constructor;
        constructor = construct !== void 0 ? function() {
          return construct(super_, arguments, this.constructor);
        } : function() {
          super_.apply(this, arguments);
        };
        if (setFunctionName !== void 0) {
          setFunctionName(constructor, name);
          name = void 0;
        }
      } else if (typeof constructor !== "function") {
        throw new TypeError("constructor should be either a string or a function");
      }
      constructor.super_ = constructor["super"] = super_;
      var properties = {
        constructor: {
          configurable: true,
          value: constructor,
          writable: true
        }
      };
      if (name !== void 0) {
        properties.name = {
          configurable: true,
          value: name,
          writable: true
        };
      }
      constructor.prototype = Object.create(super_.prototype, properties);
      return constructor;
    }
    exports = module2.exports = makeError;
    exports.BaseError = BaseError;
  }
});

// node_modules/@sanity/client/lib/http/errors.js
var require_errors = __commonJS({
  "node_modules/@sanity/client/lib/http/errors.js"(exports) {
    "use strict";
    var makeError = require_make_error();
    var assign2 = require_object_assign();
    function ClientError(res) {
      var props = extractErrorProps(res);
      ClientError.super.call(this, props.message);
      assign2(this, props);
    }
    function ServerError(res) {
      var props = extractErrorProps(res);
      ServerError.super.call(this, props.message);
      assign2(this, props);
    }
    function extractErrorProps(res) {
      var body = res.body;
      var props = {
        response: res,
        statusCode: res.statusCode,
        responseBody: stringifyBody(body, res)
      };
      if (body.error && body.message) {
        props.message = "".concat(body.error, " - ").concat(body.message);
        return props;
      }
      if (body.error && body.error.description) {
        props.message = body.error.description;
        props.details = body.error;
        return props;
      }
      props.message = body.error || body.message || httpErrorMessage(res);
      return props;
    }
    function httpErrorMessage(res) {
      var statusMessage = res.statusMessage ? " ".concat(res.statusMessage) : "";
      return "".concat(res.method, "-request to ").concat(res.url, " resulted in HTTP ").concat(res.statusCode).concat(statusMessage);
    }
    function stringifyBody(body, res) {
      var contentType = (res.headers["content-type"] || "").toLowerCase();
      var isJson = contentType.indexOf("application/json") !== -1;
      return isJson ? JSON.stringify(body, null, 2) : body;
    }
    makeError(ClientError);
    makeError(ServerError);
    exports.ClientError = ClientError;
    exports.ServerError = ServerError;
  }
});

// node_modules/is-retry-allowed/index.js
var require_is_retry_allowed = __commonJS({
  "node_modules/is-retry-allowed/index.js"(exports, module2) {
    "use strict";
    var WHITELIST = [
      "ETIMEDOUT",
      "ECONNRESET",
      "EADDRINUSE",
      "ESOCKETTIMEDOUT",
      "ECONNREFUSED",
      "EPIPE",
      "EHOSTUNREACH",
      "EAI_AGAIN"
    ];
    var BLACKLIST = [
      "ENOTFOUND",
      "ENETUNREACH",
      "UNABLE_TO_GET_ISSUER_CERT",
      "UNABLE_TO_GET_CRL",
      "UNABLE_TO_DECRYPT_CERT_SIGNATURE",
      "UNABLE_TO_DECRYPT_CRL_SIGNATURE",
      "UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY",
      "CERT_SIGNATURE_FAILURE",
      "CRL_SIGNATURE_FAILURE",
      "CERT_NOT_YET_VALID",
      "CERT_HAS_EXPIRED",
      "CRL_NOT_YET_VALID",
      "CRL_HAS_EXPIRED",
      "ERROR_IN_CERT_NOT_BEFORE_FIELD",
      "ERROR_IN_CERT_NOT_AFTER_FIELD",
      "ERROR_IN_CRL_LAST_UPDATE_FIELD",
      "ERROR_IN_CRL_NEXT_UPDATE_FIELD",
      "OUT_OF_MEM",
      "DEPTH_ZERO_SELF_SIGNED_CERT",
      "SELF_SIGNED_CERT_IN_CHAIN",
      "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
      "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
      "CERT_CHAIN_TOO_LONG",
      "CERT_REVOKED",
      "INVALID_CA",
      "PATH_LENGTH_EXCEEDED",
      "INVALID_PURPOSE",
      "CERT_UNTRUSTED",
      "CERT_REJECTED"
    ];
    module2.exports = function(err) {
      if (!err || !err.code) {
        return true;
      }
      if (WHITELIST.indexOf(err.code) !== -1) {
        return true;
      }
      if (BLACKLIST.indexOf(err.code) !== -1) {
        return false;
      }
      return true;
    };
  }
});

// node_modules/get-it/lib-node/util/node-shouldRetry.js
var require_node_shouldRetry = __commonJS({
  "node_modules/get-it/lib-node/util/node-shouldRetry.js"(exports, module2) {
    "use strict";
    var allowed = require_is_retry_allowed();
    module2.exports = (err, num, options2) => {
      if (options2.method !== "GET" && options2.method !== "HEAD") {
        return false;
      }
      if (err.response && err.response.statusCode) {
        return false;
      }
      return allowed(err);
    };
  }
});

// node_modules/get-it/lib-node/middleware/retry.js
var require_retry = __commonJS({
  "node_modules/get-it/lib-node/middleware/retry.js"(exports, module2) {
    "use strict";
    var objectAssign = require_object_assign();
    var defaultShouldRetry = require_node_shouldRetry();
    var isStream = (stream) => stream !== null && typeof stream === "object" && typeof stream.pipe === "function";
    var retry = function retry2() {
      let opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const maxRetries = opts.maxRetries || 5;
      const retryDelay = opts.retryDelay || getRetryDelay;
      const allowRetry = opts.shouldRetry || defaultShouldRetry;
      return {
        onError: (err, context2) => {
          const options2 = context2.options;
          const max = options2.maxRetries || maxRetries;
          const shouldRetry = options2.shouldRetry || allowRetry;
          const attemptNumber = options2.attemptNumber || 0;
          if (isStream(options2.body)) {
            return err;
          }
          if (!shouldRetry(err, attemptNumber, options2) || attemptNumber >= max) {
            return err;
          }
          const newContext = objectAssign({}, context2, {
            options: objectAssign({}, options2, {attemptNumber: attemptNumber + 1})
          });
          setTimeout(() => context2.channels.request.publish(newContext), retryDelay(attemptNumber));
          return null;
        }
      };
    };
    retry.shouldRetry = defaultShouldRetry;
    module2.exports = retry;
    function getRetryDelay(attemptNum) {
      return 100 * Math.pow(2, attemptNum) + Math.random() * 100;
    }
  }
});

// node_modules/get-it/node_modules/ms/index.js
var require_ms2 = __commonJS({
  "node_modules/get-it/node_modules/ms/index.js"(exports, module2) {
    var s2 = 1e3;
    var m = s2 * 60;
    var h = m * 60;
    var d = h * 24;
    var y = d * 365.25;
    module2.exports = function(val, options2) {
      options2 = options2 || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isNaN(val) === false) {
        return options2.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s2;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      if (ms >= d) {
        return Math.round(ms / d) + "d";
      }
      if (ms >= h) {
        return Math.round(ms / h) + "h";
      }
      if (ms >= m) {
        return Math.round(ms / m) + "m";
      }
      if (ms >= s2) {
        return Math.round(ms / s2) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      return plural(ms, d, "day") || plural(ms, h, "hour") || plural(ms, m, "minute") || plural(ms, s2, "second") || ms + " ms";
    }
    function plural(ms, n, name) {
      if (ms < n) {
        return;
      }
      if (ms < n * 1.5) {
        return Math.floor(ms / n) + " " + name;
      }
      return Math.ceil(ms / n) + " " + name + "s";
    }
  }
});

// node_modules/get-it/node_modules/debug/src/debug.js
var require_debug2 = __commonJS({
  "node_modules/get-it/node_modules/debug/src/debug.js"(exports, module2) {
    exports = module2.exports = createDebug.debug = createDebug["default"] = createDebug;
    exports.coerce = coerce;
    exports.disable = disable;
    exports.enable = enable;
    exports.enabled = enabled;
    exports.humanize = require_ms2();
    exports.names = [];
    exports.skips = [];
    exports.formatters = {};
    var prevTime;
    function selectColor(namespace) {
      var hash2 = 0, i;
      for (i in namespace) {
        hash2 = (hash2 << 5) - hash2 + namespace.charCodeAt(i);
        hash2 |= 0;
      }
      return exports.colors[Math.abs(hash2) % exports.colors.length];
    }
    function createDebug(namespace) {
      function debug() {
        if (!debug.enabled)
          return;
        var self2 = debug;
        var curr = +new Date();
        var ms = curr - (prevTime || curr);
        self2.diff = ms;
        self2.prev = prevTime;
        self2.curr = curr;
        prevTime = curr;
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        args[0] = exports.coerce(args[0]);
        if (typeof args[0] !== "string") {
          args.unshift("%O");
        }
        var index2 = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format2) {
          if (match === "%%")
            return match;
          index2++;
          var formatter = exports.formatters[format2];
          if (typeof formatter === "function") {
            var val = args[index2];
            match = formatter.call(self2, val);
            args.splice(index2, 1);
            index2--;
          }
          return match;
        });
        exports.formatArgs.call(self2, args);
        var logFn = debug.log || exports.log || console.log.bind(console);
        logFn.apply(self2, args);
      }
      debug.namespace = namespace;
      debug.enabled = exports.enabled(namespace);
      debug.useColors = exports.useColors();
      debug.color = selectColor(namespace);
      if (typeof exports.init === "function") {
        exports.init(debug);
      }
      return debug;
    }
    function enable(namespaces) {
      exports.save(namespaces);
      exports.names = [];
      exports.skips = [];
      var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
      var len = split.length;
      for (var i = 0; i < len; i++) {
        if (!split[i])
          continue;
        namespaces = split[i].replace(/\*/g, ".*?");
        if (namespaces[0] === "-") {
          exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
        } else {
          exports.names.push(new RegExp("^" + namespaces + "$"));
        }
      }
    }
    function disable() {
      exports.enable("");
    }
    function enabled(name) {
      var i, len;
      for (i = 0, len = exports.skips.length; i < len; i++) {
        if (exports.skips[i].test(name)) {
          return false;
        }
      }
      for (i = 0, len = exports.names.length; i < len; i++) {
        if (exports.names[i].test(name)) {
          return true;
        }
      }
      return false;
    }
    function coerce(val) {
      if (val instanceof Error)
        return val.stack || val.message;
      return val;
    }
  }
});

// node_modules/get-it/node_modules/debug/src/browser.js
var require_browser2 = __commonJS({
  "node_modules/get-it/node_modules/debug/src/browser.js"(exports, module2) {
    exports = module2.exports = require_debug2();
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load2;
    exports.useColors = useColors;
    exports.storage = typeof chrome != "undefined" && typeof chrome.storage != "undefined" ? chrome.storage.local : localstorage();
    exports.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
        return true;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    exports.formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (err) {
        return "[UnexpectedJSONParseError]: " + err.message;
      }
    };
    function formatArgs(args) {
      var useColors2 = this.useColors;
      args[0] = (useColors2 ? "%c" : "") + this.namespace + (useColors2 ? " %c" : " ") + args[0] + (useColors2 ? "%c " : " ") + "+" + exports.humanize(this.diff);
      if (!useColors2)
        return;
      var c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      var index2 = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function(match) {
        if (match === "%%")
          return;
        index2++;
        if (match === "%c") {
          lastC = index2;
        }
      });
      args.splice(lastC, 0, c);
    }
    function log() {
      return typeof console === "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function save(namespaces) {
      try {
        if (namespaces == null) {
          exports.storage.removeItem("debug");
        } else {
          exports.storage.debug = namespaces;
        }
      } catch (e) {
      }
    }
    function load2() {
      var r;
      try {
        r = exports.storage.debug;
      } catch (e) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    exports.enable(load2());
    function localstorage() {
      try {
        return window.localStorage;
      } catch (e) {
      }
    }
  }
});

// node_modules/get-it/node_modules/debug/src/node.js
var require_node4 = __commonJS({
  "node_modules/get-it/node_modules/debug/src/node.js"(exports, module2) {
    var tty = require("tty");
    var util = require("util");
    exports = module2.exports = require_debug2();
    exports.init = init2;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load2;
    exports.useColors = useColors;
    exports.colors = [6, 2, 3, 4, 5, 1];
    exports.inspectOpts = Object.keys(process.env).filter(function(key) {
      return /^debug_/i.test(key);
    }).reduce(function(obj, key) {
      var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function(_, k) {
        return k.toUpperCase();
      });
      var val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val))
        val = true;
      else if (/^(no|off|false|disabled)$/i.test(val))
        val = false;
      else if (val === "null")
        val = null;
      else
        val = Number(val);
      obj[prop] = val;
      return obj;
    }, {});
    var fd = parseInt(process.env.DEBUG_FD, 10) || 2;
    if (fd !== 1 && fd !== 2) {
      util.deprecate(function() {
      }, "except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)")();
    }
    var stream = fd === 1 ? process.stdout : fd === 2 ? process.stderr : createWritableStdioStream(fd);
    function useColors() {
      return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(fd);
    }
    exports.formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split("\n").map(function(str) {
        return str.trim();
      }).join(" ");
    };
    exports.formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
    function formatArgs(args) {
      var name = this.namespace;
      var useColors2 = this.useColors;
      if (useColors2) {
        var c = this.color;
        var prefix = "  [3" + c + ";1m" + name + " [0m";
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push("[3" + c + "m+" + exports.humanize(this.diff) + "[0m");
      } else {
        args[0] = new Date().toUTCString() + " " + name + " " + args[0];
      }
    }
    function log() {
      return stream.write(util.format.apply(util, arguments) + "\n");
    }
    function save(namespaces) {
      if (namespaces == null) {
        delete process.env.DEBUG;
      } else {
        process.env.DEBUG = namespaces;
      }
    }
    function load2() {
      return process.env.DEBUG;
    }
    function createWritableStdioStream(fd2) {
      var stream2;
      var tty_wrap = process.binding("tty_wrap");
      switch (tty_wrap.guessHandleType(fd2)) {
        case "TTY":
          stream2 = new tty.WriteStream(fd2);
          stream2._type = "tty";
          if (stream2._handle && stream2._handle.unref) {
            stream2._handle.unref();
          }
          break;
        case "FILE":
          var fs = require("fs");
          stream2 = new fs.SyncWriteStream(fd2, {autoClose: false});
          stream2._type = "fs";
          break;
        case "PIPE":
        case "TCP":
          var net = require("net");
          stream2 = new net.Socket({
            fd: fd2,
            readable: false,
            writable: true
          });
          stream2.readable = false;
          stream2.read = null;
          stream2._type = "pipe";
          if (stream2._handle && stream2._handle.unref) {
            stream2._handle.unref();
          }
          break;
        default:
          throw new Error("Implement me. Unknown stream file type!");
      }
      stream2.fd = fd2;
      stream2._isStdio = true;
      return stream2;
    }
    function init2(debug) {
      debug.inspectOpts = {};
      var keys = Object.keys(exports.inspectOpts);
      for (var i = 0; i < keys.length; i++) {
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
      }
    }
    exports.enable(load2());
  }
});

// node_modules/get-it/node_modules/debug/src/index.js
var require_src2 = __commonJS({
  "node_modules/get-it/node_modules/debug/src/index.js"(exports, module2) {
    if (typeof process !== "undefined" && process.type === "renderer") {
      module2.exports = require_browser2();
    } else {
      module2.exports = require_node4();
    }
  }
});

// node_modules/get-it/lib-node/middleware/debug.js
var require_debug3 = __commonJS({
  "node_modules/get-it/lib-node/middleware/debug.js"(exports, module2) {
    "use strict";
    var debugIt = require_src2();
    var SENSITIVE_HEADERS = ["Cookie", "Authorization"];
    var hasOwn = Object.prototype.hasOwnProperty;
    var redactKeys = (source, keys) => {
      const target = {};
      for (const key in source) {
        if (hasOwn.call(source, key)) {
          target[key] = keys.indexOf(key) > -1 ? "<redacted>" : source[key];
        }
      }
      return target;
    };
    module2.exports = function() {
      let opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const verbose = opts.verbose;
      const namespace = opts.namespace || "get-it";
      const defaultLogger = debugIt(namespace);
      const log = opts.log || defaultLogger;
      const shortCircuit = log === defaultLogger && !debugIt.enabled(namespace);
      let requestId = 0;
      return {
        processOptions: (options2) => {
          options2.debug = log;
          options2.requestId = options2.requestId || ++requestId;
          return options2;
        },
        onRequest: (event) => {
          if (shortCircuit || !event) {
            return event;
          }
          const options2 = event.options;
          log("[%s] HTTP %s %s", options2.requestId, options2.method, options2.url);
          if (verbose && options2.body && typeof options2.body === "string") {
            log("[%s] Request body: %s", options2.requestId, options2.body);
          }
          if (verbose && options2.headers) {
            const headers = opts.redactSensitiveHeaders === false ? options2.headers : redactKeys(options2.headers, SENSITIVE_HEADERS);
            log("[%s] Request headers: %s", options2.requestId, JSON.stringify(headers, null, 2));
          }
          return event;
        },
        onResponse: (res, context2) => {
          if (shortCircuit || !res) {
            return res;
          }
          const reqId = context2.options.requestId;
          log("[%s] Response code: %s %s", reqId, res.statusCode, res.statusMessage);
          if (verbose && res.body) {
            log("[%s] Response body: %s", reqId, stringifyBody(res));
          }
          return res;
        },
        onError: (err, context2) => {
          const reqId = context2.options.requestId;
          if (!err) {
            log("[%s] Error encountered, but handled by an earlier middleware", reqId);
            return err;
          }
          log("[%s] ERROR: %s", reqId, err.message);
          return err;
        }
      };
    };
    function stringifyBody(res) {
      const contentType = (res.headers["content-type"] || "").toLowerCase();
      const isJson = contentType.indexOf("application/json") !== -1;
      return isJson ? tryFormat(res.body) : res.body;
    }
    function tryFormat(body) {
      try {
        const parsed = typeof body === "string" ? JSON.parse(body) : body;
        return JSON.stringify(parsed, null, 2);
      } catch (err) {
        return body;
      }
    }
  }
});

// node_modules/get-it/lib-node/middleware/headers.js
var require_headers = __commonJS({
  "node_modules/get-it/lib-node/middleware/headers.js"(exports, module2) {
    "use strict";
    var objectAssign = require_object_assign();
    module2.exports = function(headers) {
      let opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return {
        processOptions: (options2) => {
          const existing = options2.headers || {};
          options2.headers = opts.override ? objectAssign({}, existing, headers) : objectAssign({}, headers, existing);
          return options2;
        }
      };
    };
  }
});

// node_modules/@sanity/client/package.json
var require_package = __commonJS({
  "node_modules/@sanity/client/package.json"(exports, module2) {
    module2.exports = {
      name: "@sanity/client",
      version: "2.8.0",
      description: "Client for retrieving data from Sanity",
      main: "lib/sanityClient.js",
      umd: "umd/sanityClient.min.js",
      unpkg: "umd/sanityClient.min.js",
      types: "./sanityClient.d.ts",
      scripts: {
        analyze: "NODE_ENV=production BROWSERIFY_ENV=build DEBUG='' browserify --full-paths -t envify -g uglifyify lib/sanityClient.js --standalone=SanityClient | discify --open",
        browserify: "NODE_ENV=production BROWSERIFY_ENV=build DEBUG='' browserify -t envify -g uglifyify lib/sanityClient.js -o umd/sanityClient.js --standalone=SanityClient",
        build: "babel src --copy-files --out-dir lib && npm run browserify && npm run minify && npm run size",
        size: "node -r @babel/register src/scripts/print-bundle-size",
        clean: "rimraf lib coverage .nyc_output umd/*.js",
        coverage: "DEBUG=sanity NODE_ENV=test nyc --reporter=html --reporter=lcov --reporter=text npm test",
        minify: "terser -c -m -- umd/sanityClient.js > umd/sanityClient.min.js",
        prepublishOnly: "npm run build",
        test: "NODE_ENV=test tape -r @babel/register test/*.test.js"
      },
      browser: {
        "./src/http/nodeMiddleware.js": "./src/http/browserMiddleware.js",
        "./lib/http/nodeMiddleware.js": "./lib/http/browserMiddleware.js"
      },
      dependencies: {
        "@sanity/eventsource": "2.2.6",
        "@sanity/generate-help-url": "2.2.6",
        "@sanity/observable": "2.0.9",
        "deep-assign": "^2.0.0",
        "get-it": "^5.0.3",
        "make-error": "^1.3.0",
        "object-assign": "^4.1.1"
      },
      devDependencies: {
        "@babel/cli": "^7.11.6",
        "@babel/core": "^7.11.6",
        "@babel/preset-env": "^7.11.5",
        boxen: "^4.1.0",
        browserify: "^14.3.0",
        chalk: "^2.3.0",
        disc: "^1.3.2",
        envify: "^4.0.0",
        "gzip-size": "^3.0.0",
        "hard-rejection": "^2.1.0",
        nock: "^9.0.5",
        nyc: "^11.0.3",
        "pretty-bytes": "^4.0.2",
        rimraf: "^2.7.1",
        "sse-channel": "^2.0.6",
        tape: "^4.8.0",
        terser: "4.6.7",
        uglifyify: "^5.0.1"
      },
      repository: {
        type: "git",
        url: "git+https://github.com/sanity-io/sanity.git",
        directory: "packages/@sanity/client"
      },
      keywords: [
        "sanity",
        "cms",
        "headless",
        "realtime",
        "content",
        "client",
        "fetch",
        "api",
        "gradient"
      ],
      author: "Sanity.io <hello@sanity.io>",
      license: "MIT",
      bugs: {
        url: "https://github.com/sanity-io/sanity/issues"
      },
      homepage: "https://www.sanity.io/",
      nyc: {
        include: [
          "src/**/*.js"
        ],
        require: [
          "@babel/register"
        ],
        sourceMap: false
      },
      gitHead: "f20ee861cb4b398b7db5c025cdee9c6bfc7ecaaf"
    };
  }
});

// node_modules/@sanity/client/lib/http/nodeMiddleware.js
var require_nodeMiddleware = __commonJS({
  "node_modules/@sanity/client/lib/http/nodeMiddleware.js"(exports, module2) {
    "use strict";
    var retry = require_retry();
    var debug = require_debug3();
    var headers = require_headers();
    var pkg = require_package();
    var middleware = [debug({
      verbose: true,
      namespace: "sanity:client"
    }), headers({
      "User-Agent": "".concat(pkg.name, " ").concat(pkg.version)
    }), retry({
      maxRetries: 3
    })];
    module2.exports = middleware;
  }
});

// node_modules/@sanity/client/lib/http/request.js
var require_request2 = __commonJS({
  "node_modules/@sanity/client/lib/http/request.js"(exports, module2) {
    "use strict";
    var getIt = require_get_it();
    var assign2 = require_object_assign();
    var observable = require_observable2();
    var jsonRequest = require_jsonRequest();
    var jsonResponse = require_jsonResponse();
    var progress = require_progress();
    var Observable = require_minimal();
    var _require = require_errors();
    var ClientError = _require.ClientError;
    var ServerError = _require.ServerError;
    var httpError = {
      onResponse: function onResponse(res) {
        if (res.statusCode >= 500) {
          throw new ServerError(res);
        } else if (res.statusCode >= 400) {
          throw new ClientError(res);
        }
        return res;
      }
    };
    var printWarnings = {
      onResponse: function onResponse(res) {
        var warn = res.headers["x-sanity-warning"];
        var warnings = Array.isArray(warn) ? warn : [warn];
        warnings.filter(Boolean).forEach(function(msg) {
          return console.warn(msg);
        });
        return res;
      }
    };
    var envSpecific = require_nodeMiddleware();
    var middleware = envSpecific.concat([printWarnings, jsonRequest(), jsonResponse(), progress(), httpError, observable({
      implementation: Observable
    })]);
    var request = getIt(middleware);
    function httpRequest(options2) {
      var requester = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : request;
      return requester(assign2({
        maxRedirects: 0
      }, options2));
    }
    httpRequest.defaultRequester = request;
    httpRequest.ClientError = ClientError;
    httpRequest.ServerError = ServerError;
    module2.exports = httpRequest;
  }
});

// node_modules/@sanity/client/lib/http/requestOptions.js
var require_requestOptions = __commonJS({
  "node_modules/@sanity/client/lib/http/requestOptions.js"(exports, module2) {
    "use strict";
    var assign2 = require_object_assign();
    var projectHeader = "X-Sanity-Project-ID";
    module2.exports = function(config) {
      var overrides = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var headers = {};
      var token = overrides.token || config.token;
      if (token) {
        headers.Authorization = "Bearer ".concat(token);
      }
      if (!overrides.useGlobalApi && !config.useProjectHostname && config.projectId) {
        headers[projectHeader] = config.projectId;
      }
      var withCredentials = Boolean(typeof overrides.withCredentials === "undefined" ? config.token || config.withCredentials : overrides.withCredentials);
      var timeout = typeof overrides.timeout === "undefined" ? config.timeout : overrides.timeout;
      return assign2({}, overrides, {
        headers: assign2({}, headers, overrides.headers || {}),
        timeout: typeof timeout === "undefined" ? 5 * 60 * 1e3 : timeout,
        json: true,
        withCredentials
      });
    };
  }
});

// node_modules/@sanity/client/lib/warnings.js
var require_warnings = __commonJS({
  "node_modules/@sanity/client/lib/warnings.js"(exports) {
    "use strict";
    var generateHelpUrl = require_generate_help_url();
    var once = require_once();
    var createWarningPrinter = function createWarningPrinter2(message) {
      return once(function() {
        var _console;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return (_console = console).warn.apply(_console, [message.join(" ")].concat(args));
      });
    };
    exports.printCdnWarning = createWarningPrinter(["You are not using the Sanity CDN. That means your data is always fresh, but the CDN is faster and", "cheaper. Think about it! For more info, see ".concat(generateHelpUrl("js-client-cdn-configuration"), "."), "To hide this warning, please set the `useCdn` option to either `true` or `false` when creating", "the client."]);
    exports.printBrowserTokenWarning = createWarningPrinter(["You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.", "See ".concat(generateHelpUrl("js-client-browser-token"), " for more information and how to hide this warning.")]);
    exports.printCdnTokenWarning = createWarningPrinter(["You have set `useCdn` to `true` while also specifying a token. This is usually not what you", "want. The CDN cannot be used with an authorization token, since private data cannot be cached.", "See ".concat(generateHelpUrl("js-client-usecdn-token"), " for more information.")]);
    exports.printNoApiVersionSpecifiedWarning = createWarningPrinter(["Using the Sanity client without specifying an API version is deprecated.", "See ".concat(generateHelpUrl("js-client-api-version"))]);
  }
});

// node_modules/@sanity/client/lib/config.js
var require_config2 = __commonJS({
  "node_modules/@sanity/client/lib/config.js"(exports) {
    "use strict";
    var generateHelpUrl = require_generate_help_url();
    var assign2 = require_object_assign();
    var validate = require_validators();
    var warnings = require_warnings();
    var defaultCdnHost = "apicdn.sanity.io";
    var defaultConfig = {
      apiHost: "https://api.sanity.io",
      apiVersion: "1",
      useProjectHostname: true,
      gradientMode: false,
      isPromiseAPI: true
    };
    var LOCALHOSTS = ["localhost", "127.0.0.1", "0.0.0.0"];
    var isLocal = function isLocal2(host) {
      return LOCALHOSTS.indexOf(host) !== -1;
    };
    exports.defaultConfig = defaultConfig;
    exports.initConfig = function(config, prevConfig) {
      var specifiedConfig = assign2({}, prevConfig, config);
      if (!specifiedConfig.apiVersion) {
        warnings.printNoApiVersionSpecifiedWarning();
      }
      var newConfig = assign2({}, defaultConfig, specifiedConfig);
      var gradientMode = newConfig.gradientMode;
      var projectBased = !gradientMode && newConfig.useProjectHostname;
      if (typeof Promise === "undefined") {
        var helpUrl = generateHelpUrl("js-client-promise-polyfill");
        throw new Error("No native Promise-implementation found, polyfill needed - see ".concat(helpUrl));
      }
      if (gradientMode && !newConfig.namespace) {
        throw new Error("Configuration must contain `namespace` when running in gradient mode");
      }
      if (projectBased && !newConfig.projectId) {
        throw new Error("Configuration must contain `projectId`");
      }
      var isBrowser = typeof window !== "undefined" && window.location && window.location.hostname;
      var isLocalhost = isBrowser && isLocal(window.location.hostname);
      if (isBrowser && isLocalhost && newConfig.token && newConfig.ignoreBrowserTokenWarning !== true) {
        warnings.printBrowserTokenWarning();
      } else if ((!isBrowser || isLocalhost) && newConfig.useCdn && newConfig.token) {
        warnings.printCdnTokenWarning();
      } else if (typeof newConfig.useCdn === "undefined") {
        warnings.printCdnWarning();
      }
      if (projectBased) {
        validate.projectId(newConfig.projectId);
      }
      if (!gradientMode && newConfig.dataset) {
        validate.dataset(newConfig.dataset, newConfig.gradientMode);
      }
      newConfig.apiVersion = "".concat(newConfig.apiVersion).replace(/^v/, "");
      newConfig.isDefaultApi = newConfig.apiHost === defaultConfig.apiHost;
      newConfig.useCdn = Boolean(newConfig.useCdn) && !newConfig.token && !newConfig.withCredentials;
      exports.validateApiVersion(newConfig.apiVersion);
      if (newConfig.gradientMode) {
        newConfig.url = newConfig.apiHost;
        newConfig.cdnUrl = newConfig.apiHost;
      } else {
        var hostParts = newConfig.apiHost.split("://", 2);
        var protocol = hostParts[0];
        var host = hostParts[1];
        var cdnHost = newConfig.isDefaultApi ? defaultCdnHost : host;
        if (newConfig.useProjectHostname) {
          newConfig.url = "".concat(protocol, "://").concat(newConfig.projectId, ".").concat(host, "/v").concat(newConfig.apiVersion);
          newConfig.cdnUrl = "".concat(protocol, "://").concat(newConfig.projectId, ".").concat(cdnHost, "/v").concat(newConfig.apiVersion);
        } else {
          newConfig.url = "".concat(newConfig.apiHost, "/v").concat(newConfig.apiVersion);
          newConfig.cdnUrl = newConfig.url;
        }
      }
      return newConfig;
    };
    exports.validateApiVersion = function validateApiVersion(apiVersion) {
      if (apiVersion === "1" || apiVersion === "X") {
        return;
      }
      var apiDate = new Date(apiVersion);
      var apiVersionValid = /^\d{4}-\d{2}-\d{2}$/.test(apiVersion) && apiDate instanceof Date && apiDate.getTime() > 0;
      if (!apiVersionValid) {
        throw new Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`");
      }
    };
  }
});

// node_modules/@sanity/client/lib/sanityClient.js
var require_sanityClient = __commonJS({
  "node_modules/@sanity/client/lib/sanityClient.js"(exports, module2) {
    "use strict";
    var assign2 = require_object_assign();
    var _require = require_filter2();
    var filter = _require.filter;
    var _require2 = require_map2();
    var map = _require2.map;
    var Patch = require_patch();
    var Transaction = require_transaction();
    var dataMethods = require_dataMethods();
    var DatasetsClient = require_datasetsClient();
    var ProjectsClient = require_projectsClient();
    var AssetsClient = require_assetsClient();
    var UsersClient = require_usersClient();
    var AuthClient = require_authClient();
    var httpRequest = require_request2();
    var getRequestOptions = require_requestOptions();
    var _require3 = require_config2();
    var defaultConfig = _require3.defaultConfig;
    var initConfig = _require3.initConfig;
    var toPromise = function toPromise2(observable) {
      return observable.toPromise();
    };
    function SanityClient() {
      var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultConfig;
      if (!(this instanceof SanityClient)) {
        return new SanityClient(config);
      }
      this.config(config);
      this.assets = new AssetsClient(this);
      this.datasets = new DatasetsClient(this);
      this.projects = new ProjectsClient(this);
      this.users = new UsersClient(this);
      this.auth = new AuthClient(this);
      if (this.clientConfig.isPromiseAPI) {
        var observableConfig = assign2({}, this.clientConfig, {
          isPromiseAPI: false
        });
        this.observable = new SanityClient(observableConfig);
      }
    }
    assign2(SanityClient.prototype, dataMethods);
    assign2(SanityClient.prototype, {
      clone: function clone2() {
        return new SanityClient(this.config());
      },
      config: function config(newConfig) {
        if (typeof newConfig === "undefined") {
          return assign2({}, this.clientConfig);
        }
        if (this.observable) {
          var observableConfig = assign2({}, newConfig, {
            isPromiseAPI: false
          });
          this.observable.config(observableConfig);
        }
        this.clientConfig = initConfig(newConfig, this.clientConfig || {});
        return this;
      },
      withConfig: function withConfig(newConfig) {
        return this.clone().config(newConfig);
      },
      getUrl: function getUrl(uri) {
        var canUseCdn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var base = canUseCdn ? this.clientConfig.cdnUrl : this.clientConfig.url;
        return "".concat(base, "/").concat(uri.replace(/^\//, ""));
      },
      isPromiseAPI: function isPromiseAPI() {
        return this.clientConfig.isPromiseAPI;
      },
      _requestObservable: function _requestObservable(options2) {
        var uri = options2.url || options2.uri;
        var canUseCdn = this.clientConfig.useCdn && ["GET", "HEAD"].indexOf(options2.method || "GET") >= 0 && uri.indexOf("/data/") === 0;
        var reqOptions = getRequestOptions(this.clientConfig, assign2({}, options2, {
          url: this.getUrl(uri, canUseCdn)
        }));
        return httpRequest(reqOptions, this.clientConfig.requester);
      },
      request: function request(options2) {
        var observable = this._requestObservable(options2).pipe(filter(function(event) {
          return event.type === "response";
        }), map(function(event) {
          return event.body;
        }));
        return this.isPromiseAPI() ? toPromise(observable) : observable;
      }
    });
    SanityClient.Patch = Patch;
    SanityClient.Transaction = Transaction;
    SanityClient.ClientError = httpRequest.ClientError;
    SanityClient.ServerError = httpRequest.ServerError;
    SanityClient.requester = httpRequest.defaultRequester;
    module2.exports = SanityClient;
  }
});

// node_modules/@sanity/image-url/lib/node/parseAssetId.js
var require_parseAssetId = __commonJS({
  "node_modules/@sanity/image-url/lib/node/parseAssetId.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var example = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
    function parseAssetId(ref) {
      var _a = ref.split("-"), id = _a[1], dimensionString = _a[2], format2 = _a[3];
      if (!id || !dimensionString || !format2) {
        throw new Error("Malformed asset _ref '" + ref + `'. Expected an id like "` + example + '".');
      }
      var _b = dimensionString.split("x"), imgWidthStr = _b[0], imgHeightStr = _b[1];
      var width = +imgWidthStr;
      var height = +imgHeightStr;
      var isValidAssetId = isFinite(width) && isFinite(height);
      if (!isValidAssetId) {
        throw new Error("Malformed asset _ref '" + ref + `'. Expected an id like "` + example + '".');
      }
      return {id, width, height, format: format2};
    }
    exports.default = parseAssetId;
  }
});

// node_modules/@sanity/image-url/lib/node/parseSource.js
var require_parseSource = __commonJS({
  "node_modules/@sanity/image-url/lib/node/parseSource.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s2, i = 1, n = arguments.length; i < n; i++) {
          s2 = arguments[i];
          for (var p in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p))
              t[p] = s2[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    var isRef = function(src2) {
      var source = src2;
      return source ? typeof source._ref === "string" : false;
    };
    var isAsset = function(src2) {
      var source = src2;
      return source ? typeof source._id === "string" : false;
    };
    var isAssetStub = function(src2) {
      var source = src2;
      return source && source.asset ? typeof source.asset.url === "string" : false;
    };
    function parseSource(source) {
      if (!source) {
        return null;
      }
      var image;
      if (typeof source === "string" && isUrl(source)) {
        image = {
          asset: {_ref: urlToId(source)}
        };
      } else if (typeof source === "string") {
        image = {
          asset: {_ref: source}
        };
      } else if (isRef(source)) {
        image = {
          asset: source
        };
      } else if (isAsset(source)) {
        image = {
          asset: {
            _ref: source._id || ""
          }
        };
      } else if (isAssetStub(source)) {
        image = {
          asset: {
            _ref: urlToId(source.asset.url)
          }
        };
      } else if (typeof source.asset === "object") {
        image = source;
      } else {
        return null;
      }
      var img = source;
      if (img.crop) {
        image.crop = img.crop;
      }
      if (img.hotspot) {
        image.hotspot = img.hotspot;
      }
      return applyDefaults(image);
    }
    exports.default = parseSource;
    function isUrl(url) {
      return /^https?:\/\//.test("" + url);
    }
    function urlToId(url) {
      var parts = url.split("/").slice(-1);
      return ("image-" + parts[0]).replace(/\.([a-z]+)$/, "-$1");
    }
    function applyDefaults(image) {
      if (image.crop && image.hotspot) {
        return image;
      }
      var result = __assign({}, image);
      if (!result.crop) {
        result.crop = {
          left: 0,
          top: 0,
          bottom: 0,
          right: 0
        };
      }
      if (!result.hotspot) {
        result.hotspot = {
          x: 0.5,
          y: 0.5,
          height: 1,
          width: 1
        };
      }
      return result;
    }
  }
});

// node_modules/@sanity/image-url/lib/node/urlForImage.js
var require_urlForImage = __commonJS({
  "node_modules/@sanity/image-url/lib/node/urlForImage.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s2, i = 1, n = arguments.length; i < n; i++) {
          s2 = arguments[i];
          for (var p in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p))
              t[p] = s2[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {"default": mod};
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    var parseAssetId_1 = __importDefault(require_parseAssetId());
    var parseSource_1 = __importDefault(require_parseSource());
    exports.parseSource = parseSource_1.default;
    exports.SPEC_NAME_TO_URL_NAME_MAPPINGS = [
      ["width", "w"],
      ["height", "h"],
      ["format", "fm"],
      ["download", "dl"],
      ["blur", "blur"],
      ["sharpen", "sharp"],
      ["invert", "invert"],
      ["orientation", "or"],
      ["minHeight", "min-h"],
      ["maxHeight", "max-h"],
      ["minWidth", "min-w"],
      ["maxWidth", "max-w"],
      ["quality", "q"],
      ["fit", "fit"],
      ["crop", "crop"],
      ["saturation", "sat"],
      ["auto", "auto"],
      ["dpr", "dpr"],
      ["pad", "pad"]
    ];
    function urlForImage(options2) {
      var spec = __assign({}, options2 || {});
      var source = spec.source;
      delete spec.source;
      var image = parseSource_1.default(source);
      if (!image) {
        return null;
      }
      var id = image.asset._ref || image.asset._id || "";
      var asset = parseAssetId_1.default(id);
      var cropLeft = Math.round(image.crop.left * asset.width);
      var cropTop = Math.round(image.crop.top * asset.height);
      var crop = {
        left: cropLeft,
        top: cropTop,
        width: Math.round(asset.width - image.crop.right * asset.width - cropLeft),
        height: Math.round(asset.height - image.crop.bottom * asset.height - cropTop)
      };
      var hotSpotVerticalRadius = image.hotspot.height * asset.height / 2;
      var hotSpotHorizontalRadius = image.hotspot.width * asset.width / 2;
      var hotSpotCenterX = image.hotspot.x * asset.width;
      var hotSpotCenterY = image.hotspot.y * asset.height;
      var hotspot = {
        left: hotSpotCenterX - hotSpotHorizontalRadius,
        top: hotSpotCenterY - hotSpotVerticalRadius,
        right: hotSpotCenterX + hotSpotHorizontalRadius,
        bottom: hotSpotCenterY + hotSpotVerticalRadius
      };
      if (!(spec.rect || spec.focalPoint || spec.ignoreImageParams || spec.crop)) {
        spec = __assign(__assign({}, spec), fit({crop, hotspot}, spec));
      }
      return specToImageUrl(__assign(__assign({}, spec), {asset}));
    }
    exports.default = urlForImage;
    function specToImageUrl(spec) {
      var cdnUrl = spec.baseUrl || "https://cdn.sanity.io";
      var filename = spec.asset.id + "-" + spec.asset.width + "x" + spec.asset.height + "." + spec.asset.format;
      var baseUrl = cdnUrl + "/images/" + spec.projectId + "/" + spec.dataset + "/" + filename;
      var params = [];
      if (spec.rect) {
        var _a = spec.rect, left = _a.left, top_1 = _a.top, width = _a.width, height = _a.height;
        var isEffectiveCrop = left !== 0 || top_1 !== 0 || height !== spec.asset.height || width !== spec.asset.width;
        if (isEffectiveCrop) {
          params.push("rect=" + left + "," + top_1 + "," + width + "," + height);
        }
      }
      if (spec.bg) {
        params.push("bg=" + spec.bg);
      }
      if (spec.focalPoint) {
        params.push("fp-x=" + spec.focalPoint.x);
        params.push("fp-y=" + spec.focalPoint.y);
      }
      var flip = [spec.flipHorizontal && "h", spec.flipVertical && "v"].filter(Boolean).join("");
      if (flip) {
        params.push("flip=" + flip);
      }
      exports.SPEC_NAME_TO_URL_NAME_MAPPINGS.forEach(function(mapping) {
        var specName = mapping[0], param = mapping[1];
        if (typeof spec[specName] !== "undefined") {
          params.push(param + "=" + encodeURIComponent(spec[specName]));
        } else if (typeof spec[param] !== "undefined") {
          params.push(param + "=" + encodeURIComponent(spec[param]));
        }
      });
      if (params.length === 0) {
        return baseUrl;
      }
      return baseUrl + "?" + params.join("&");
    }
    function fit(source, spec) {
      var cropRect;
      var imgWidth = spec.width;
      var imgHeight = spec.height;
      if (!(imgWidth && imgHeight)) {
        return {width: imgWidth, height: imgHeight, rect: source.crop};
      }
      var crop = source.crop;
      var hotspot = source.hotspot;
      var desiredAspectRatio = imgWidth / imgHeight;
      var cropAspectRatio = crop.width / crop.height;
      if (cropAspectRatio > desiredAspectRatio) {
        var height = crop.height;
        var width = height * desiredAspectRatio;
        var top_2 = crop.top;
        var hotspotXCenter = (hotspot.right - hotspot.left) / 2 + hotspot.left;
        var left = hotspotXCenter - width / 2;
        if (left < crop.left) {
          left = crop.left;
        } else if (left + width > crop.left + crop.width) {
          left = crop.left + crop.width - width;
        }
        cropRect = {
          left: Math.round(left),
          top: Math.round(top_2),
          width: Math.round(width),
          height: Math.round(height)
        };
      } else {
        var width = crop.width;
        var height = width / desiredAspectRatio;
        var left = crop.left;
        var hotspotYCenter = (hotspot.bottom - hotspot.top) / 2 + hotspot.top;
        var top_3 = hotspotYCenter - height / 2;
        if (top_3 < crop.top) {
          top_3 = crop.top;
        } else if (top_3 + height > crop.top + crop.height) {
          top_3 = crop.top + crop.height - height;
        }
        cropRect = {
          left: Math.max(0, Math.floor(left)),
          top: Math.max(0, Math.floor(top_3)),
          width: Math.round(width),
          height: Math.round(height)
        };
      }
      return {
        width: imgWidth,
        height: imgHeight,
        rect: cropRect
      };
    }
  }
});

// node_modules/@sanity/image-url/lib/node/builder.js
var require_builder = __commonJS({
  "node_modules/@sanity/image-url/lib/node/builder.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s2, i = 1, n = arguments.length; i < n; i++) {
          s2 = arguments[i];
          for (var p in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p))
              t[p] = s2[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (Object.hasOwnProperty.call(mod, k))
            result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    var urlForImage_1 = __importStar(require_urlForImage());
    var validFits = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"];
    var validCrops = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"];
    var validAutoModes = ["format"];
    function isSanityClientLike(client2) {
      return client2 ? typeof client2.clientConfig === "object" : false;
    }
    function rewriteSpecName(key) {
      var specs = urlForImage_1.SPEC_NAME_TO_URL_NAME_MAPPINGS;
      for (var _i = 0, specs_1 = specs; _i < specs_1.length; _i++) {
        var entry = specs_1[_i];
        var specName = entry[0], param = entry[1];
        if (key === specName || key === param) {
          return specName;
        }
      }
      return key;
    }
    function urlBuilder(options2) {
      var client2 = options2;
      if (isSanityClientLike(client2)) {
        var _a = client2.clientConfig, apiUrl = _a.apiHost, projectId = _a.projectId, dataset = _a.dataset;
        var apiHost = apiUrl || "https://api.sanity.io";
        return new ImageUrlBuilder(null, {
          baseUrl: apiHost.replace(/^https:\/\/api\./, "https://cdn."),
          projectId,
          dataset
        });
      }
      return new ImageUrlBuilder(null, options2);
    }
    exports.default = urlBuilder;
    var ImageUrlBuilder = function() {
      function ImageUrlBuilder2(parent, options2) {
        this.options = parent ? __assign(__assign({}, parent.options || {}), options2 || {}) : __assign({}, options2 || {});
      }
      ImageUrlBuilder2.prototype.withOptions = function(options2) {
        var baseUrl = options2.baseUrl || this.options.baseUrl;
        var newOptions = {baseUrl};
        for (var key in options2) {
          if (options2.hasOwnProperty(key)) {
            var specKey = rewriteSpecName(key);
            newOptions[specKey] = options2[key];
          }
        }
        return new ImageUrlBuilder2(this, __assign({baseUrl}, newOptions));
      };
      ImageUrlBuilder2.prototype.image = function(source) {
        return this.withOptions({source});
      };
      ImageUrlBuilder2.prototype.dataset = function(dataset) {
        return this.withOptions({dataset});
      };
      ImageUrlBuilder2.prototype.projectId = function(projectId) {
        return this.withOptions({projectId});
      };
      ImageUrlBuilder2.prototype.bg = function(bg) {
        return this.withOptions({bg});
      };
      ImageUrlBuilder2.prototype.dpr = function(dpr) {
        return this.withOptions({dpr});
      };
      ImageUrlBuilder2.prototype.width = function(width) {
        return this.withOptions({width});
      };
      ImageUrlBuilder2.prototype.height = function(height) {
        return this.withOptions({height});
      };
      ImageUrlBuilder2.prototype.focalPoint = function(x, y) {
        return this.withOptions({focalPoint: {x, y}});
      };
      ImageUrlBuilder2.prototype.maxWidth = function(maxWidth) {
        return this.withOptions({maxWidth});
      };
      ImageUrlBuilder2.prototype.minWidth = function(minWidth) {
        return this.withOptions({minWidth});
      };
      ImageUrlBuilder2.prototype.maxHeight = function(maxHeight) {
        return this.withOptions({maxHeight});
      };
      ImageUrlBuilder2.prototype.minHeight = function(minHeight) {
        return this.withOptions({minHeight});
      };
      ImageUrlBuilder2.prototype.size = function(width, height) {
        return this.withOptions({width, height});
      };
      ImageUrlBuilder2.prototype.blur = function(blur) {
        return this.withOptions({blur});
      };
      ImageUrlBuilder2.prototype.sharpen = function(sharpen) {
        return this.withOptions({sharpen});
      };
      ImageUrlBuilder2.prototype.rect = function(left, top, width, height) {
        return this.withOptions({rect: {left, top, width, height}});
      };
      ImageUrlBuilder2.prototype.format = function(format2) {
        return this.withOptions({format: format2});
      };
      ImageUrlBuilder2.prototype.invert = function(invert) {
        return this.withOptions({invert});
      };
      ImageUrlBuilder2.prototype.orientation = function(orientation) {
        return this.withOptions({orientation});
      };
      ImageUrlBuilder2.prototype.quality = function(quality) {
        return this.withOptions({quality});
      };
      ImageUrlBuilder2.prototype.forceDownload = function(download) {
        return this.withOptions({download});
      };
      ImageUrlBuilder2.prototype.flipHorizontal = function() {
        return this.withOptions({flipHorizontal: true});
      };
      ImageUrlBuilder2.prototype.flipVertical = function() {
        return this.withOptions({flipVertical: true});
      };
      ImageUrlBuilder2.prototype.ignoreImageParams = function() {
        return this.withOptions({ignoreImageParams: true});
      };
      ImageUrlBuilder2.prototype.fit = function(value) {
        if (validFits.indexOf(value) === -1) {
          throw new Error('Invalid fit mode "' + value + '"');
        }
        return this.withOptions({fit: value});
      };
      ImageUrlBuilder2.prototype.crop = function(value) {
        if (validCrops.indexOf(value) === -1) {
          throw new Error('Invalid crop mode "' + value + '"');
        }
        return this.withOptions({crop: value});
      };
      ImageUrlBuilder2.prototype.saturation = function(saturation) {
        return this.withOptions({saturation});
      };
      ImageUrlBuilder2.prototype.auto = function(value) {
        if (validAutoModes.indexOf(value) === -1) {
          throw new Error('Invalid auto mode "' + value + '"');
        }
        return this.withOptions({auto: value});
      };
      ImageUrlBuilder2.prototype.pad = function(pad) {
        return this.withOptions({pad});
      };
      ImageUrlBuilder2.prototype.url = function() {
        return urlForImage_1.default(this.options);
      };
      ImageUrlBuilder2.prototype.toString = function() {
        return this.url();
      };
      return ImageUrlBuilder2;
    }();
    exports.ImageUrlBuilder = ImageUrlBuilder;
  }
});

// node_modules/@sanity/image-url/lib/node/index.js
var require_node5 = __commonJS({
  "node_modules/@sanity/image-url/lib/node/index.js"(exports, module2) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {"default": mod};
    };
    var builder_1 = __importDefault(require_builder());
    module2.exports = builder_1.default;
  }
});

// node_modules/@supabase/supabase-js/dist/main/lib/constants.js
var require_constants = __commonJS({
  "node_modules/@supabase/supabase-js/dist/main/lib/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.DEFAULT_HEADERS = void 0;
    exports.DEFAULT_HEADERS = {};
  }
});

// node_modules/node-fetch/lib/index.js
var require_lib = __commonJS({
  "node_modules/node-fetch/lib/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
    }
    var Stream2 = _interopDefault(require("stream"));
    var http2 = _interopDefault(require("http"));
    var Url = _interopDefault(require("url"));
    var https2 = _interopDefault(require("https"));
    var zlib2 = _interopDefault(require("zlib"));
    var Readable2 = Stream2.Readable;
    var BUFFER = Symbol("buffer");
    var TYPE = Symbol("type");
    var Blob2 = class {
      constructor() {
        this[TYPE] = "";
        const blobParts = arguments[0];
        const options2 = arguments[1];
        const buffers = [];
        let size = 0;
        if (blobParts) {
          const a = blobParts;
          const length = Number(a.length);
          for (let i = 0; i < length; i++) {
            const element = a[i];
            let buffer;
            if (element instanceof Buffer) {
              buffer = element;
            } else if (ArrayBuffer.isView(element)) {
              buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
            } else if (element instanceof ArrayBuffer) {
              buffer = Buffer.from(element);
            } else if (element instanceof Blob2) {
              buffer = element[BUFFER];
            } else {
              buffer = Buffer.from(typeof element === "string" ? element : String(element));
            }
            size += buffer.length;
            buffers.push(buffer);
          }
        }
        this[BUFFER] = Buffer.concat(buffers);
        let type = options2 && options2.type !== void 0 && String(options2.type).toLowerCase();
        if (type && !/[^\u0020-\u007E]/.test(type)) {
          this[TYPE] = type;
        }
      }
      get size() {
        return this[BUFFER].length;
      }
      get type() {
        return this[TYPE];
      }
      text() {
        return Promise.resolve(this[BUFFER].toString());
      }
      arrayBuffer() {
        const buf = this[BUFFER];
        const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
        return Promise.resolve(ab);
      }
      stream() {
        const readable = new Readable2();
        readable._read = function() {
        };
        readable.push(this[BUFFER]);
        readable.push(null);
        return readable;
      }
      toString() {
        return "[object Blob]";
      }
      slice() {
        const size = this.size;
        const start = arguments[0];
        const end = arguments[1];
        let relativeStart, relativeEnd;
        if (start === void 0) {
          relativeStart = 0;
        } else if (start < 0) {
          relativeStart = Math.max(size + start, 0);
        } else {
          relativeStart = Math.min(start, size);
        }
        if (end === void 0) {
          relativeEnd = size;
        } else if (end < 0) {
          relativeEnd = Math.max(size + end, 0);
        } else {
          relativeEnd = Math.min(end, size);
        }
        const span = Math.max(relativeEnd - relativeStart, 0);
        const buffer = this[BUFFER];
        const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
        const blob = new Blob2([], {type: arguments[2]});
        blob[BUFFER] = slicedBuffer;
        return blob;
      }
    };
    Object.defineProperties(Blob2.prototype, {
      size: {enumerable: true},
      type: {enumerable: true},
      slice: {enumerable: true}
    });
    Object.defineProperty(Blob2.prototype, Symbol.toStringTag, {
      value: "Blob",
      writable: false,
      enumerable: false,
      configurable: true
    });
    function FetchError2(message, type, systemError) {
      Error.call(this, message);
      this.message = message;
      this.type = type;
      if (systemError) {
        this.code = this.errno = systemError.code;
      }
      Error.captureStackTrace(this, this.constructor);
    }
    FetchError2.prototype = Object.create(Error.prototype);
    FetchError2.prototype.constructor = FetchError2;
    FetchError2.prototype.name = "FetchError";
    var convert;
    try {
      convert = require("encoding").convert;
    } catch (e) {
    }
    var INTERNALS2 = Symbol("Body internals");
    var PassThrough2 = Stream2.PassThrough;
    function Body2(body) {
      var _this = this;
      var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$size = _ref.size;
      let size = _ref$size === void 0 ? 0 : _ref$size;
      var _ref$timeout = _ref.timeout;
      let timeout = _ref$timeout === void 0 ? 0 : _ref$timeout;
      if (body == null) {
        body = null;
      } else if (isURLSearchParams(body)) {
        body = Buffer.from(body.toString());
      } else if (isBlob2(body))
        ;
      else if (Buffer.isBuffer(body))
        ;
      else if (Object.prototype.toString.call(body) === "[object ArrayBuffer]") {
        body = Buffer.from(body);
      } else if (ArrayBuffer.isView(body)) {
        body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
      } else if (body instanceof Stream2)
        ;
      else {
        body = Buffer.from(String(body));
      }
      this[INTERNALS2] = {
        body,
        disturbed: false,
        error: null
      };
      this.size = size;
      this.timeout = timeout;
      if (body instanceof Stream2) {
        body.on("error", function(err) {
          const error3 = err.name === "AbortError" ? err : new FetchError2(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, "system", err);
          _this[INTERNALS2].error = error3;
        });
      }
    }
    Body2.prototype = {
      get body() {
        return this[INTERNALS2].body;
      },
      get bodyUsed() {
        return this[INTERNALS2].disturbed;
      },
      arrayBuffer() {
        return consumeBody2.call(this).then(function(buf) {
          return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
        });
      },
      blob() {
        let ct = this.headers && this.headers.get("content-type") || "";
        return consumeBody2.call(this).then(function(buf) {
          return Object.assign(new Blob2([], {
            type: ct.toLowerCase()
          }), {
            [BUFFER]: buf
          });
        });
      },
      json() {
        var _this2 = this;
        return consumeBody2.call(this).then(function(buffer) {
          try {
            return JSON.parse(buffer.toString());
          } catch (err) {
            return Body2.Promise.reject(new FetchError2(`invalid json response body at ${_this2.url} reason: ${err.message}`, "invalid-json"));
          }
        });
      },
      text() {
        return consumeBody2.call(this).then(function(buffer) {
          return buffer.toString();
        });
      },
      buffer() {
        return consumeBody2.call(this);
      },
      textConverted() {
        var _this3 = this;
        return consumeBody2.call(this).then(function(buffer) {
          return convertBody(buffer, _this3.headers);
        });
      }
    };
    Object.defineProperties(Body2.prototype, {
      body: {enumerable: true},
      bodyUsed: {enumerable: true},
      arrayBuffer: {enumerable: true},
      blob: {enumerable: true},
      json: {enumerable: true},
      text: {enumerable: true}
    });
    Body2.mixIn = function(proto) {
      for (const name of Object.getOwnPropertyNames(Body2.prototype)) {
        if (!(name in proto)) {
          const desc = Object.getOwnPropertyDescriptor(Body2.prototype, name);
          Object.defineProperty(proto, name, desc);
        }
      }
    };
    function consumeBody2() {
      var _this4 = this;
      if (this[INTERNALS2].disturbed) {
        return Body2.Promise.reject(new TypeError(`body used already for: ${this.url}`));
      }
      this[INTERNALS2].disturbed = true;
      if (this[INTERNALS2].error) {
        return Body2.Promise.reject(this[INTERNALS2].error);
      }
      let body = this.body;
      if (body === null) {
        return Body2.Promise.resolve(Buffer.alloc(0));
      }
      if (isBlob2(body)) {
        body = body.stream();
      }
      if (Buffer.isBuffer(body)) {
        return Body2.Promise.resolve(body);
      }
      if (!(body instanceof Stream2)) {
        return Body2.Promise.resolve(Buffer.alloc(0));
      }
      let accum = [];
      let accumBytes = 0;
      let abort = false;
      return new Body2.Promise(function(resolve2, reject) {
        let resTimeout;
        if (_this4.timeout) {
          resTimeout = setTimeout(function() {
            abort = true;
            reject(new FetchError2(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, "body-timeout"));
          }, _this4.timeout);
        }
        body.on("error", function(err) {
          if (err.name === "AbortError") {
            abort = true;
            reject(err);
          } else {
            reject(new FetchError2(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, "system", err));
          }
        });
        body.on("data", function(chunk) {
          if (abort || chunk === null) {
            return;
          }
          if (_this4.size && accumBytes + chunk.length > _this4.size) {
            abort = true;
            reject(new FetchError2(`content size at ${_this4.url} over limit: ${_this4.size}`, "max-size"));
            return;
          }
          accumBytes += chunk.length;
          accum.push(chunk);
        });
        body.on("end", function() {
          if (abort) {
            return;
          }
          clearTimeout(resTimeout);
          try {
            resolve2(Buffer.concat(accum, accumBytes));
          } catch (err) {
            reject(new FetchError2(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, "system", err));
          }
        });
      });
    }
    function convertBody(buffer, headers) {
      if (typeof convert !== "function") {
        throw new Error("The package `encoding` must be installed to use the textConverted() function");
      }
      const ct = headers.get("content-type");
      let charset = "utf-8";
      let res, str;
      if (ct) {
        res = /charset=([^;]*)/i.exec(ct);
      }
      str = buffer.slice(0, 1024).toString();
      if (!res && str) {
        res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
      }
      if (!res && str) {
        res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
        if (!res) {
          res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
          if (res) {
            res.pop();
          }
        }
        if (res) {
          res = /charset=(.*)/i.exec(res.pop());
        }
      }
      if (!res && str) {
        res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
      }
      if (res) {
        charset = res.pop();
        if (charset === "gb2312" || charset === "gbk") {
          charset = "gb18030";
        }
      }
      return convert(buffer, "UTF-8", charset).toString();
    }
    function isURLSearchParams(obj) {
      if (typeof obj !== "object" || typeof obj.append !== "function" || typeof obj.delete !== "function" || typeof obj.get !== "function" || typeof obj.getAll !== "function" || typeof obj.has !== "function" || typeof obj.set !== "function") {
        return false;
      }
      return obj.constructor.name === "URLSearchParams" || Object.prototype.toString.call(obj) === "[object URLSearchParams]" || typeof obj.sort === "function";
    }
    function isBlob2(obj) {
      return typeof obj === "object" && typeof obj.arrayBuffer === "function" && typeof obj.type === "string" && typeof obj.stream === "function" && typeof obj.constructor === "function" && typeof obj.constructor.name === "string" && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
    }
    function clone2(instance) {
      let p1, p2;
      let body = instance.body;
      if (instance.bodyUsed) {
        throw new Error("cannot clone body after it is used");
      }
      if (body instanceof Stream2 && typeof body.getBoundary !== "function") {
        p1 = new PassThrough2();
        p2 = new PassThrough2();
        body.pipe(p1);
        body.pipe(p2);
        instance[INTERNALS2].body = p1;
        body = p2;
      }
      return body;
    }
    function extractContentType2(body) {
      if (body === null) {
        return null;
      } else if (typeof body === "string") {
        return "text/plain;charset=UTF-8";
      } else if (isURLSearchParams(body)) {
        return "application/x-www-form-urlencoded;charset=UTF-8";
      } else if (isBlob2(body)) {
        return body.type || null;
      } else if (Buffer.isBuffer(body)) {
        return null;
      } else if (Object.prototype.toString.call(body) === "[object ArrayBuffer]") {
        return null;
      } else if (ArrayBuffer.isView(body)) {
        return null;
      } else if (typeof body.getBoundary === "function") {
        return `multipart/form-data;boundary=${body.getBoundary()}`;
      } else if (body instanceof Stream2) {
        return null;
      } else {
        return "text/plain;charset=UTF-8";
      }
    }
    function getTotalBytes2(instance) {
      const body = instance.body;
      if (body === null) {
        return 0;
      } else if (isBlob2(body)) {
        return body.size;
      } else if (Buffer.isBuffer(body)) {
        return body.length;
      } else if (body && typeof body.getLengthSync === "function") {
        if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || body.hasKnownLength && body.hasKnownLength()) {
          return body.getLengthSync();
        }
        return null;
      } else {
        return null;
      }
    }
    function writeToStream2(dest, instance) {
      const body = instance.body;
      if (body === null) {
        dest.end();
      } else if (isBlob2(body)) {
        body.stream().pipe(dest);
      } else if (Buffer.isBuffer(body)) {
        dest.write(body);
        dest.end();
      } else {
        body.pipe(dest);
      }
    }
    Body2.Promise = global.Promise;
    var invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
    var invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;
    function validateName(name) {
      name = `${name}`;
      if (invalidTokenRegex.test(name) || name === "") {
        throw new TypeError(`${name} is not a legal HTTP header name`);
      }
    }
    function validateValue(value) {
      value = `${value}`;
      if (invalidHeaderCharRegex.test(value)) {
        throw new TypeError(`${value} is not a legal HTTP header value`);
      }
    }
    function find(map, name) {
      name = name.toLowerCase();
      for (const key in map) {
        if (key.toLowerCase() === name) {
          return key;
        }
      }
      return void 0;
    }
    var MAP = Symbol("map");
    var Headers2 = class {
      constructor() {
        let init2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
        this[MAP] = Object.create(null);
        if (init2 instanceof Headers2) {
          const rawHeaders = init2.raw();
          const headerNames = Object.keys(rawHeaders);
          for (const headerName of headerNames) {
            for (const value of rawHeaders[headerName]) {
              this.append(headerName, value);
            }
          }
          return;
        }
        if (init2 == null)
          ;
        else if (typeof init2 === "object") {
          const method = init2[Symbol.iterator];
          if (method != null) {
            if (typeof method !== "function") {
              throw new TypeError("Header pairs must be iterable");
            }
            const pairs = [];
            for (const pair of init2) {
              if (typeof pair !== "object" || typeof pair[Symbol.iterator] !== "function") {
                throw new TypeError("Each header pair must be iterable");
              }
              pairs.push(Array.from(pair));
            }
            for (const pair of pairs) {
              if (pair.length !== 2) {
                throw new TypeError("Each header pair must be a name/value tuple");
              }
              this.append(pair[0], pair[1]);
            }
          } else {
            for (const key of Object.keys(init2)) {
              const value = init2[key];
              this.append(key, value);
            }
          }
        } else {
          throw new TypeError("Provided initializer must be an object");
        }
      }
      get(name) {
        name = `${name}`;
        validateName(name);
        const key = find(this[MAP], name);
        if (key === void 0) {
          return null;
        }
        return this[MAP][key].join(", ");
      }
      forEach(callback) {
        let thisArg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
        let pairs = getHeaders(this);
        let i = 0;
        while (i < pairs.length) {
          var _pairs$i = pairs[i];
          const name = _pairs$i[0], value = _pairs$i[1];
          callback.call(thisArg, value, name, this);
          pairs = getHeaders(this);
          i++;
        }
      }
      set(name, value) {
        name = `${name}`;
        value = `${value}`;
        validateName(name);
        validateValue(value);
        const key = find(this[MAP], name);
        this[MAP][key !== void 0 ? key : name] = [value];
      }
      append(name, value) {
        name = `${name}`;
        value = `${value}`;
        validateName(name);
        validateValue(value);
        const key = find(this[MAP], name);
        if (key !== void 0) {
          this[MAP][key].push(value);
        } else {
          this[MAP][name] = [value];
        }
      }
      has(name) {
        name = `${name}`;
        validateName(name);
        return find(this[MAP], name) !== void 0;
      }
      delete(name) {
        name = `${name}`;
        validateName(name);
        const key = find(this[MAP], name);
        if (key !== void 0) {
          delete this[MAP][key];
        }
      }
      raw() {
        return this[MAP];
      }
      keys() {
        return createHeadersIterator(this, "key");
      }
      values() {
        return createHeadersIterator(this, "value");
      }
      [Symbol.iterator]() {
        return createHeadersIterator(this, "key+value");
      }
    };
    Headers2.prototype.entries = Headers2.prototype[Symbol.iterator];
    Object.defineProperty(Headers2.prototype, Symbol.toStringTag, {
      value: "Headers",
      writable: false,
      enumerable: false,
      configurable: true
    });
    Object.defineProperties(Headers2.prototype, {
      get: {enumerable: true},
      forEach: {enumerable: true},
      set: {enumerable: true},
      append: {enumerable: true},
      has: {enumerable: true},
      delete: {enumerable: true},
      keys: {enumerable: true},
      values: {enumerable: true},
      entries: {enumerable: true}
    });
    function getHeaders(headers) {
      let kind = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "key+value";
      const keys = Object.keys(headers[MAP]).sort();
      return keys.map(kind === "key" ? function(k) {
        return k.toLowerCase();
      } : kind === "value" ? function(k) {
        return headers[MAP][k].join(", ");
      } : function(k) {
        return [k.toLowerCase(), headers[MAP][k].join(", ")];
      });
    }
    var INTERNAL = Symbol("internal");
    function createHeadersIterator(target, kind) {
      const iterator = Object.create(HeadersIteratorPrototype);
      iterator[INTERNAL] = {
        target,
        kind,
        index: 0
      };
      return iterator;
    }
    var HeadersIteratorPrototype = Object.setPrototypeOf({
      next() {
        if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
          throw new TypeError("Value of `this` is not a HeadersIterator");
        }
        var _INTERNAL = this[INTERNAL];
        const target = _INTERNAL.target, kind = _INTERNAL.kind, index2 = _INTERNAL.index;
        const values = getHeaders(target, kind);
        const len = values.length;
        if (index2 >= len) {
          return {
            value: void 0,
            done: true
          };
        }
        this[INTERNAL].index = index2 + 1;
        return {
          value: values[index2],
          done: false
        };
      }
    }, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));
    Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
      value: "HeadersIterator",
      writable: false,
      enumerable: false,
      configurable: true
    });
    function exportNodeCompatibleHeaders(headers) {
      const obj = Object.assign({__proto__: null}, headers[MAP]);
      const hostHeaderKey = find(headers[MAP], "Host");
      if (hostHeaderKey !== void 0) {
        obj[hostHeaderKey] = obj[hostHeaderKey][0];
      }
      return obj;
    }
    function createHeadersLenient(obj) {
      const headers = new Headers2();
      for (const name of Object.keys(obj)) {
        if (invalidTokenRegex.test(name)) {
          continue;
        }
        if (Array.isArray(obj[name])) {
          for (const val of obj[name]) {
            if (invalidHeaderCharRegex.test(val)) {
              continue;
            }
            if (headers[MAP][name] === void 0) {
              headers[MAP][name] = [val];
            } else {
              headers[MAP][name].push(val);
            }
          }
        } else if (!invalidHeaderCharRegex.test(obj[name])) {
          headers[MAP][name] = [obj[name]];
        }
      }
      return headers;
    }
    var INTERNALS$12 = Symbol("Response internals");
    var STATUS_CODES = http2.STATUS_CODES;
    var Response3 = class {
      constructor() {
        let body = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        let opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        Body2.call(this, body, opts);
        const status = opts.status || 200;
        const headers = new Headers2(opts.headers);
        if (body != null && !headers.has("Content-Type")) {
          const contentType = extractContentType2(body);
          if (contentType) {
            headers.append("Content-Type", contentType);
          }
        }
        this[INTERNALS$12] = {
          url: opts.url,
          status,
          statusText: opts.statusText || STATUS_CODES[status],
          headers,
          counter: opts.counter
        };
      }
      get url() {
        return this[INTERNALS$12].url || "";
      }
      get status() {
        return this[INTERNALS$12].status;
      }
      get ok() {
        return this[INTERNALS$12].status >= 200 && this[INTERNALS$12].status < 300;
      }
      get redirected() {
        return this[INTERNALS$12].counter > 0;
      }
      get statusText() {
        return this[INTERNALS$12].statusText;
      }
      get headers() {
        return this[INTERNALS$12].headers;
      }
      clone() {
        return new Response3(clone2(this), {
          url: this.url,
          status: this.status,
          statusText: this.statusText,
          headers: this.headers,
          ok: this.ok,
          redirected: this.redirected
        });
      }
    };
    Body2.mixIn(Response3.prototype);
    Object.defineProperties(Response3.prototype, {
      url: {enumerable: true},
      status: {enumerable: true},
      ok: {enumerable: true},
      redirected: {enumerable: true},
      statusText: {enumerable: true},
      headers: {enumerable: true},
      clone: {enumerable: true}
    });
    Object.defineProperty(Response3.prototype, Symbol.toStringTag, {
      value: "Response",
      writable: false,
      enumerable: false,
      configurable: true
    });
    var INTERNALS$22 = Symbol("Request internals");
    var parse_url = Url.parse;
    var format_url = Url.format;
    var streamDestructionSupported = "destroy" in Stream2.Readable.prototype;
    function isRequest2(input) {
      return typeof input === "object" && typeof input[INTERNALS$22] === "object";
    }
    function isAbortSignal2(signal) {
      const proto = signal && typeof signal === "object" && Object.getPrototypeOf(signal);
      return !!(proto && proto.constructor.name === "AbortSignal");
    }
    var Request2 = class {
      constructor(input) {
        let init2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        let parsedURL;
        if (!isRequest2(input)) {
          if (input && input.href) {
            parsedURL = parse_url(input.href);
          } else {
            parsedURL = parse_url(`${input}`);
          }
          input = {};
        } else {
          parsedURL = parse_url(input.url);
        }
        let method = init2.method || input.method || "GET";
        method = method.toUpperCase();
        if ((init2.body != null || isRequest2(input) && input.body !== null) && (method === "GET" || method === "HEAD")) {
          throw new TypeError("Request with GET/HEAD method cannot have body");
        }
        let inputBody = init2.body != null ? init2.body : isRequest2(input) && input.body !== null ? clone2(input) : null;
        Body2.call(this, inputBody, {
          timeout: init2.timeout || input.timeout || 0,
          size: init2.size || input.size || 0
        });
        const headers = new Headers2(init2.headers || input.headers || {});
        if (inputBody != null && !headers.has("Content-Type")) {
          const contentType = extractContentType2(inputBody);
          if (contentType) {
            headers.append("Content-Type", contentType);
          }
        }
        let signal = isRequest2(input) ? input.signal : null;
        if ("signal" in init2)
          signal = init2.signal;
        if (signal != null && !isAbortSignal2(signal)) {
          throw new TypeError("Expected signal to be an instanceof AbortSignal");
        }
        this[INTERNALS$22] = {
          method,
          redirect: init2.redirect || input.redirect || "follow",
          headers,
          parsedURL,
          signal
        };
        this.follow = init2.follow !== void 0 ? init2.follow : input.follow !== void 0 ? input.follow : 20;
        this.compress = init2.compress !== void 0 ? init2.compress : input.compress !== void 0 ? input.compress : true;
        this.counter = init2.counter || input.counter || 0;
        this.agent = init2.agent || input.agent;
      }
      get method() {
        return this[INTERNALS$22].method;
      }
      get url() {
        return format_url(this[INTERNALS$22].parsedURL);
      }
      get headers() {
        return this[INTERNALS$22].headers;
      }
      get redirect() {
        return this[INTERNALS$22].redirect;
      }
      get signal() {
        return this[INTERNALS$22].signal;
      }
      clone() {
        return new Request2(this);
      }
    };
    Body2.mixIn(Request2.prototype);
    Object.defineProperty(Request2.prototype, Symbol.toStringTag, {
      value: "Request",
      writable: false,
      enumerable: false,
      configurable: true
    });
    Object.defineProperties(Request2.prototype, {
      method: {enumerable: true},
      url: {enumerable: true},
      headers: {enumerable: true},
      redirect: {enumerable: true},
      clone: {enumerable: true},
      signal: {enumerable: true}
    });
    function getNodeRequestOptions2(request) {
      const parsedURL = request[INTERNALS$22].parsedURL;
      const headers = new Headers2(request[INTERNALS$22].headers);
      if (!headers.has("Accept")) {
        headers.set("Accept", "*/*");
      }
      if (!parsedURL.protocol || !parsedURL.hostname) {
        throw new TypeError("Only absolute URLs are supported");
      }
      if (!/^https?:$/.test(parsedURL.protocol)) {
        throw new TypeError("Only HTTP(S) protocols are supported");
      }
      if (request.signal && request.body instanceof Stream2.Readable && !streamDestructionSupported) {
        throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");
      }
      let contentLengthValue = null;
      if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
        contentLengthValue = "0";
      }
      if (request.body != null) {
        const totalBytes = getTotalBytes2(request);
        if (typeof totalBytes === "number") {
          contentLengthValue = String(totalBytes);
        }
      }
      if (contentLengthValue) {
        headers.set("Content-Length", contentLengthValue);
      }
      if (!headers.has("User-Agent")) {
        headers.set("User-Agent", "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)");
      }
      if (request.compress && !headers.has("Accept-Encoding")) {
        headers.set("Accept-Encoding", "gzip,deflate");
      }
      let agent = request.agent;
      if (typeof agent === "function") {
        agent = agent(parsedURL);
      }
      if (!headers.has("Connection") && !agent) {
        headers.set("Connection", "close");
      }
      return Object.assign({}, parsedURL, {
        method: request.method,
        headers: exportNodeCompatibleHeaders(headers),
        agent
      });
    }
    function AbortError2(message) {
      Error.call(this, message);
      this.type = "aborted";
      this.message = message;
      Error.captureStackTrace(this, this.constructor);
    }
    AbortError2.prototype = Object.create(Error.prototype);
    AbortError2.prototype.constructor = AbortError2;
    AbortError2.prototype.name = "AbortError";
    var PassThrough$1 = Stream2.PassThrough;
    var resolve_url = Url.resolve;
    function fetch3(url, opts) {
      if (!fetch3.Promise) {
        throw new Error("native promise missing, set fetch.Promise to your favorite alternative");
      }
      Body2.Promise = fetch3.Promise;
      return new fetch3.Promise(function(resolve2, reject) {
        const request = new Request2(url, opts);
        const options2 = getNodeRequestOptions2(request);
        const send = (options2.protocol === "https:" ? https2 : http2).request;
        const signal = request.signal;
        let response = null;
        const abort = function abort2() {
          let error3 = new AbortError2("The user aborted a request.");
          reject(error3);
          if (request.body && request.body instanceof Stream2.Readable) {
            request.body.destroy(error3);
          }
          if (!response || !response.body)
            return;
          response.body.emit("error", error3);
        };
        if (signal && signal.aborted) {
          abort();
          return;
        }
        const abortAndFinalize = function abortAndFinalize2() {
          abort();
          finalize();
        };
        const req = send(options2);
        let reqTimeout;
        if (signal) {
          signal.addEventListener("abort", abortAndFinalize);
        }
        function finalize() {
          req.abort();
          if (signal)
            signal.removeEventListener("abort", abortAndFinalize);
          clearTimeout(reqTimeout);
        }
        if (request.timeout) {
          req.once("socket", function(socket) {
            reqTimeout = setTimeout(function() {
              reject(new FetchError2(`network timeout at: ${request.url}`, "request-timeout"));
              finalize();
            }, request.timeout);
          });
        }
        req.on("error", function(err) {
          reject(new FetchError2(`request to ${request.url} failed, reason: ${err.message}`, "system", err));
          finalize();
        });
        req.on("response", function(res) {
          clearTimeout(reqTimeout);
          const headers = createHeadersLenient(res.headers);
          if (fetch3.isRedirect(res.statusCode)) {
            const location = headers.get("Location");
            const locationURL = location === null ? null : resolve_url(request.url, location);
            switch (request.redirect) {
              case "error":
                reject(new FetchError2(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, "no-redirect"));
                finalize();
                return;
              case "manual":
                if (locationURL !== null) {
                  try {
                    headers.set("Location", locationURL);
                  } catch (err) {
                    reject(err);
                  }
                }
                break;
              case "follow":
                if (locationURL === null) {
                  break;
                }
                if (request.counter >= request.follow) {
                  reject(new FetchError2(`maximum redirect reached at: ${request.url}`, "max-redirect"));
                  finalize();
                  return;
                }
                const requestOpts = {
                  headers: new Headers2(request.headers),
                  follow: request.follow,
                  counter: request.counter + 1,
                  agent: request.agent,
                  compress: request.compress,
                  method: request.method,
                  body: request.body,
                  signal: request.signal,
                  timeout: request.timeout,
                  size: request.size
                };
                if (res.statusCode !== 303 && request.body && getTotalBytes2(request) === null) {
                  reject(new FetchError2("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
                  finalize();
                  return;
                }
                if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === "POST") {
                  requestOpts.method = "GET";
                  requestOpts.body = void 0;
                  requestOpts.headers.delete("content-length");
                }
                resolve2(fetch3(new Request2(locationURL, requestOpts)));
                finalize();
                return;
            }
          }
          res.once("end", function() {
            if (signal)
              signal.removeEventListener("abort", abortAndFinalize);
          });
          let body = res.pipe(new PassThrough$1());
          const response_options = {
            url: request.url,
            status: res.statusCode,
            statusText: res.statusMessage,
            headers,
            size: request.size,
            timeout: request.timeout,
            counter: request.counter
          };
          const codings = headers.get("Content-Encoding");
          if (!request.compress || request.method === "HEAD" || codings === null || res.statusCode === 204 || res.statusCode === 304) {
            response = new Response3(body, response_options);
            resolve2(response);
            return;
          }
          const zlibOptions = {
            flush: zlib2.Z_SYNC_FLUSH,
            finishFlush: zlib2.Z_SYNC_FLUSH
          };
          if (codings == "gzip" || codings == "x-gzip") {
            body = body.pipe(zlib2.createGunzip(zlibOptions));
            response = new Response3(body, response_options);
            resolve2(response);
            return;
          }
          if (codings == "deflate" || codings == "x-deflate") {
            const raw = res.pipe(new PassThrough$1());
            raw.once("data", function(chunk) {
              if ((chunk[0] & 15) === 8) {
                body = body.pipe(zlib2.createInflate());
              } else {
                body = body.pipe(zlib2.createInflateRaw());
              }
              response = new Response3(body, response_options);
              resolve2(response);
            });
            return;
          }
          if (codings == "br" && typeof zlib2.createBrotliDecompress === "function") {
            body = body.pipe(zlib2.createBrotliDecompress());
            response = new Response3(body, response_options);
            resolve2(response);
            return;
          }
          response = new Response3(body, response_options);
          resolve2(response);
        });
        writeToStream2(req, request);
      });
    }
    fetch3.isRedirect = function(code) {
      return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
    };
    fetch3.Promise = global.Promise;
    module2.exports = exports = fetch3;
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.default = exports;
    exports.Headers = Headers2;
    exports.Request = Request2;
    exports.Response = Response3;
    exports.FetchError = FetchError2;
  }
});

// node_modules/cross-fetch/dist/node-ponyfill.js
var require_node_ponyfill = __commonJS({
  "node_modules/cross-fetch/dist/node-ponyfill.js"(exports, module2) {
    var nodeFetch = require_lib();
    var realFetch = nodeFetch.default || nodeFetch;
    var fetch3 = function(url, options2) {
      if (/^\/\//.test(url)) {
        url = "https:" + url;
      }
      return realFetch.call(this, url, options2);
    };
    fetch3.ponyfill = true;
    module2.exports = exports = fetch3;
    exports.fetch = fetch3;
    exports.Headers = nodeFetch.Headers;
    exports.Request = nodeFetch.Request;
    exports.Response = nodeFetch.Response;
    exports.default = fetch3;
  }
});

// node_modules/@supabase/gotrue-js/dist/main/lib/fetch.js
var require_fetch = __commonJS({
  "node_modules/@supabase/gotrue-js/dist/main/lib/fetch.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve2) {
          resolve2(value);
        });
      }
      return new (P || (P = Promise))(function(resolve2, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {"default": mod};
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.remove = exports.put = exports.post = exports.get = void 0;
    var cross_fetch_1 = __importDefault(require_node_ponyfill());
    var _getErrorMessage = (err) => err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
    var handleError = (error3, reject) => {
      if (typeof error3.json !== "function") {
        return reject(error3);
      }
      error3.json().then((err) => {
        return reject({
          message: _getErrorMessage(err),
          status: (error3 === null || error3 === void 0 ? void 0 : error3.status) || 500
        });
      });
    };
    var _getRequestParams = (method, options2, body) => {
      const params = {method, headers: (options2 === null || options2 === void 0 ? void 0 : options2.headers) || {}};
      if (method === "GET") {
        return params;
      }
      params.headers = Object.assign({"Content-Type": "text/plain;charset=UTF-8"}, options2 === null || options2 === void 0 ? void 0 : options2.headers);
      params.body = JSON.stringify(body);
      return params;
    };
    function _handleRequest(method, url, options2, body) {
      return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve2, reject) => {
          cross_fetch_1.default(url, _getRequestParams(method, options2, body)).then((result) => {
            if (!result.ok)
              throw result;
            if (options2 === null || options2 === void 0 ? void 0 : options2.noResolveJson)
              return resolve2;
            return result.json();
          }).then((data) => resolve2(data)).catch((error3) => handleError(error3, reject));
        });
      });
    }
    function get(url, options2) {
      return __awaiter(this, void 0, void 0, function* () {
        return _handleRequest("GET", url, options2);
      });
    }
    exports.get = get;
    function post(url, body, options2) {
      return __awaiter(this, void 0, void 0, function* () {
        return _handleRequest("POST", url, options2, body);
      });
    }
    exports.post = post;
    function put(url, body, options2) {
      return __awaiter(this, void 0, void 0, function* () {
        return _handleRequest("PUT", url, options2, body);
      });
    }
    exports.put = put;
    function remove(url, body, options2) {
      return __awaiter(this, void 0, void 0, function* () {
        return _handleRequest("DELETE", url, options2, body);
      });
    }
    exports.remove = remove;
  }
});

// node_modules/@supabase/gotrue-js/dist/main/lib/constants.js
var require_constants2 = __commonJS({
  "node_modules/@supabase/gotrue-js/dist/main/lib/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.COOKIE_OPTIONS = exports.STORAGE_KEY = exports.EXPIRY_MARGIN = exports.DEFAULT_HEADERS = exports.AUDIENCE = exports.GOTRUE_URL = void 0;
    exports.GOTRUE_URL = "http://localhost:9999";
    exports.AUDIENCE = "";
    exports.DEFAULT_HEADERS = {};
    exports.EXPIRY_MARGIN = 60 * 1e3;
    exports.STORAGE_KEY = "supabase.auth.token";
    exports.COOKIE_OPTIONS = {
      name: "sb:token",
      lifetime: 60 * 60 * 8,
      domain: "",
      path: "/",
      sameSite: "lax"
    };
  }
});

// node_modules/@supabase/gotrue-js/dist/main/lib/cookies.js
var require_cookies = __commonJS({
  "node_modules/@supabase/gotrue-js/dist/main/lib/cookies.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.deleteCookie = exports.setCookie = exports.setCookies = void 0;
    function serialize(name, val, options2) {
      const opt = options2 || {};
      const enc = encodeURIComponent;
      const fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      const value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      let str = name + "=" + value;
      if (opt.maxAge != null) {
        const maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        if (typeof opt.expires.toUTCString !== "function") {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + opt.expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.sameSite) {
        const sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function isSecureEnvironment(req) {
      if (!req || !req.headers || !req.headers.host) {
        throw new Error('The "host" request header is not available');
      }
      const host = req.headers.host.indexOf(":") > -1 && req.headers.host.split(":")[0] || req.headers.host;
      if (["localhost", "127.0.0.1"].indexOf(host) > -1 || host.endsWith(".local")) {
        return false;
      }
      return true;
    }
    function serializeCookie(cookie, secure) {
      var _a, _b, _c;
      return serialize(cookie.name, cookie.value, {
        maxAge: cookie.maxAge,
        expires: new Date(Date.now() + cookie.maxAge * 1e3),
        httpOnly: true,
        secure,
        path: (_a = cookie.path) !== null && _a !== void 0 ? _a : "/",
        domain: (_b = cookie.domain) !== null && _b !== void 0 ? _b : "",
        sameSite: (_c = cookie.sameSite) !== null && _c !== void 0 ? _c : "lax"
      });
    }
    function setCookies(req, res, cookies) {
      const strCookies = cookies.map((c) => serializeCookie(c, isSecureEnvironment(req)));
      const previousCookies = res.getHeader("Set-Cookie");
      if (previousCookies) {
        if (previousCookies instanceof Array) {
          Array.prototype.push.apply(strCookies, previousCookies);
        } else if (typeof previousCookies === "string") {
          strCookies.push(previousCookies);
        }
      }
      res.setHeader("Set-Cookie", strCookies);
    }
    exports.setCookies = setCookies;
    function setCookie(req, res, cookie) {
      setCookies(req, res, [cookie]);
    }
    exports.setCookie = setCookie;
    function deleteCookie(req, res, name) {
      setCookie(req, res, {
        name,
        value: "",
        maxAge: -1
      });
    }
    exports.deleteCookie = deleteCookie;
  }
});

// node_modules/@supabase/gotrue-js/dist/main/lib/helpers.js
var require_helpers = __commonJS({
  "node_modules/@supabase/gotrue-js/dist/main/lib/helpers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.LocalStorage = exports.getParameterByName = exports.isBrowser = exports.uuid = exports.expiresAt = void 0;
    function expiresAt(expiresIn) {
      const timeNow = Math.round(Date.now() / 1e3);
      return timeNow + expiresIn;
    }
    exports.expiresAt = expiresAt;
    function uuid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == "x" ? r : r & 3 | 8;
        return v.toString(16);
      });
    }
    exports.uuid = uuid;
    exports.isBrowser = () => typeof window !== "undefined";
    function getParameterByName(name, url) {
      if (!url)
        url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&#]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
      if (!results)
        return null;
      if (!results[2])
        return "";
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    exports.getParameterByName = getParameterByName;
    var LocalStorage = class {
      constructor(localStorage2) {
        this.localStorage = localStorage2 || globalThis.localStorage;
      }
      clear() {
        return this.localStorage.clear();
      }
      key(index2) {
        return this.localStorage.key(index2);
      }
      setItem(key, value) {
        return this.localStorage.setItem(key, value);
      }
      getItem(key) {
        return this.localStorage.getItem(key);
      }
      removeItem(key) {
        return this.localStorage.removeItem(key);
      }
    };
    exports.LocalStorage = LocalStorage;
  }
});

// node_modules/@supabase/gotrue-js/dist/main/GoTrueApi.js
var require_GoTrueApi = __commonJS({
  "node_modules/@supabase/gotrue-js/dist/main/GoTrueApi.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve2) {
          resolve2(value);
        });
      }
      return new (P || (P = Promise))(function(resolve2, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    var fetch_1 = require_fetch();
    var constants_1 = require_constants2();
    var cookies_1 = require_cookies();
    var helpers_1 = require_helpers();
    var GoTrueApi = class {
      constructor({url = "", headers = {}, cookieOptions}) {
        this.url = url;
        this.headers = headers;
        this.cookieOptions = Object.assign(Object.assign({}, constants_1.COOKIE_OPTIONS), cookieOptions);
      }
      signUpWithEmail(email, password, options2 = {}) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            let headers = Object.assign({}, this.headers);
            if (options2.redirectTo) {
              headers["referer"] = options2.redirectTo;
            }
            const data = yield fetch_1.post(`${this.url}/signup`, {email, password}, {headers});
            let session2 = Object.assign({}, data);
            if (session2.expires_in)
              session2.expires_at = helpers_1.expiresAt(data.expires_in);
            return {data: session2, error: null};
          } catch (error3) {
            return {data: null, error: error3};
          }
        });
      }
      signInWithEmail(email, password, options2 = {}) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            let headers = Object.assign({}, this.headers);
            if (options2.redirectTo) {
              headers["referer"] = options2.redirectTo;
            }
            const data = yield fetch_1.post(`${this.url}/token?grant_type=password`, {email, password}, {headers});
            let session2 = Object.assign({}, data);
            if (session2.expires_in)
              session2.expires_at = helpers_1.expiresAt(data.expires_in);
            return {data: session2, error: null};
          } catch (error3) {
            return {data: null, error: error3};
          }
        });
      }
      sendMagicLinkEmail(email, options2 = {}) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            let headers = Object.assign({}, this.headers);
            if (options2.redirectTo) {
              headers["referer"] = options2.redirectTo;
            }
            const data = yield fetch_1.post(`${this.url}/magiclink`, {email}, {headers});
            return {data, error: null};
          } catch (error3) {
            return {data: null, error: error3};
          }
        });
      }
      inviteUserByEmail(email, options2 = {}) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            let headers = Object.assign({}, this.headers);
            if (options2.redirectTo) {
              headers["referer"] = options2.redirectTo;
            }
            const data = yield fetch_1.post(`${this.url}/invite`, {email}, {headers});
            return {data, error: null};
          } catch (error3) {
            return {data: null, error: error3};
          }
        });
      }
      resetPasswordForEmail(email, options2 = {}) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            let headers = Object.assign({}, this.headers);
            if (options2.redirectTo) {
              headers["referer"] = options2.redirectTo;
            }
            const data = yield fetch_1.post(`${this.url}/recover`, {email}, {headers});
            return {data, error: null};
          } catch (error3) {
            return {data: null, error: error3};
          }
        });
      }
      _createRequestHeaders(jwt) {
        const headers = Object.assign({}, this.headers);
        headers["Authorization"] = `Bearer ${jwt}`;
        return headers;
      }
      signOut(jwt) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            yield fetch_1.post(`${this.url}/logout`, {}, {headers: this._createRequestHeaders(jwt), noResolveJson: true});
            return {error: null};
          } catch (error3) {
            return {error: error3};
          }
        });
      }
      getUrlForProvider(provider, options2) {
        let urlParams = [`provider=${provider}`];
        if (options2 === null || options2 === void 0 ? void 0 : options2.redirectTo) {
          urlParams.push(`redirect_to=${options2.redirectTo}`);
        }
        if (options2 === null || options2 === void 0 ? void 0 : options2.scopes) {
          urlParams.push(`scopes=${options2.scopes}`);
        }
        return `${this.url}/authorize?${urlParams.join("&")}`;
      }
      getUser(jwt) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const data = yield fetch_1.get(`${this.url}/user`, {headers: this._createRequestHeaders(jwt)});
            return {user: data, data, error: null};
          } catch (error3) {
            return {user: null, data: null, error: error3};
          }
        });
      }
      updateUser(jwt, attributes) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const data = yield fetch_1.put(`${this.url}/user`, attributes, {
              headers: this._createRequestHeaders(jwt)
            });
            return {user: data, data, error: null};
          } catch (error3) {
            return {user: null, data: null, error: error3};
          }
        });
      }
      deleteUser(uid, jwt) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const data = yield fetch_1.remove(`${this.url}/admin/users/${uid}`, {}, {
              headers: this._createRequestHeaders(jwt)
            });
            return {user: data, data, error: null};
          } catch (error3) {
            return {user: null, data: null, error: error3};
          }
        });
      }
      refreshAccessToken(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const data = yield fetch_1.post(`${this.url}/token?grant_type=refresh_token`, {refresh_token: refreshToken}, {headers: this.headers});
            let session2 = Object.assign({}, data);
            if (session2.expires_in)
              session2.expires_at = helpers_1.expiresAt(data.expires_in);
            return {data: session2, error: null};
          } catch (error3) {
            return {data: null, error: error3};
          }
        });
      }
      setAuthCookie(req, res) {
        if (req.method !== "POST") {
          res.setHeader("Allow", "POST");
          res.status(405).end("Method Not Allowed");
        }
        const {event, session: session2} = req.body;
        if (!event)
          throw new Error("Auth event missing!");
        if (event === "SIGNED_IN") {
          if (!session2)
            throw new Error("Auth session missing!");
          cookies_1.setCookie(req, res, {
            name: this.cookieOptions.name,
            value: session2.access_token,
            domain: this.cookieOptions.domain,
            maxAge: this.cookieOptions.lifetime,
            path: this.cookieOptions.path,
            sameSite: this.cookieOptions.sameSite
          });
        }
        if (event === "SIGNED_OUT")
          cookies_1.deleteCookie(req, res, this.cookieOptions.name);
        res.status(200).json({});
      }
      getUserByCookie(req) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            if (!req.cookies)
              throw new Error("Not able to parse cookies! When using Express make sure the cookie-parser middleware is in use!");
            if (!req.cookies[this.cookieOptions.name])
              throw new Error("No cookie found!");
            const token = req.cookies[this.cookieOptions.name];
            const {user, error: error3} = yield this.getUser(token);
            if (error3)
              throw error3;
            return {user, data: user, error: null};
          } catch (error3) {
            return {user: null, data: null, error: error3};
          }
        });
      }
    };
    exports.default = GoTrueApi;
  }
});

// node_modules/@supabase/gotrue-js/dist/main/lib/polyfills.js
var require_polyfills = __commonJS({
  "node_modules/@supabase/gotrue-js/dist/main/lib/polyfills.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.polyfillGlobalThis = void 0;
    function polyfillGlobalThis() {
      if (typeof globalThis === "object")
        return;
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function() {
          return this;
        },
        configurable: true
      });
      __magic__.globalThis = __magic__;
      delete Object.prototype.__magic__;
    }
    exports.polyfillGlobalThis = polyfillGlobalThis;
  }
});

// node_modules/@supabase/gotrue-js/dist/main/GoTrueClient.js
var require_GoTrueClient = __commonJS({
  "node_modules/@supabase/gotrue-js/dist/main/GoTrueClient.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve2) {
          resolve2(value);
        });
      }
      return new (P || (P = Promise))(function(resolve2, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {"default": mod};
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    var GoTrueApi_1 = __importDefault(require_GoTrueApi());
    var helpers_1 = require_helpers();
    var constants_1 = require_constants2();
    var polyfills_1 = require_polyfills();
    polyfills_1.polyfillGlobalThis();
    var DEFAULT_OPTIONS = {
      url: constants_1.GOTRUE_URL,
      autoRefreshToken: true,
      persistSession: true,
      localStorage: globalThis.localStorage,
      detectSessionInUrl: true,
      headers: constants_1.DEFAULT_HEADERS
    };
    var GoTrueClient = class {
      constructor(options2) {
        this.stateChangeEmitters = new Map();
        const settings = Object.assign(Object.assign({}, DEFAULT_OPTIONS), options2);
        this.currentUser = null;
        this.currentSession = null;
        this.autoRefreshToken = settings.autoRefreshToken;
        this.persistSession = settings.persistSession;
        this.localStorage = new helpers_1.LocalStorage(settings.localStorage);
        this.api = new GoTrueApi_1.default({
          url: settings.url,
          headers: settings.headers,
          cookieOptions: settings.cookieOptions
        });
        this._recoverSession();
        this._recoverAndRefresh();
        try {
          if (settings.detectSessionInUrl && helpers_1.isBrowser() && !!helpers_1.getParameterByName("access_token")) {
            this.getSessionFromUrl({storeSession: true});
          }
        } catch (error3) {
          console.log("Error getting session from URL.");
        }
      }
      signUp({email, password}, options2 = {}) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            this._removeSession();
            const {data, error: error3} = yield this.api.signUpWithEmail(email, password, {
              redirectTo: options2.redirectTo
            });
            if (error3) {
              throw error3;
            }
            if (!data) {
              throw "An error occurred on sign up.";
            }
            let session2 = null;
            let user = null;
            if (data.access_token) {
              session2 = data;
              user = session2.user;
              this._saveSession(session2);
              this._notifyAllSubscribers("SIGNED_IN");
            }
            if (data.id) {
              user = data;
            }
            return {data, user, session: session2, error: null};
          } catch (error3) {
            return {data: null, user: null, session: null, error: error3};
          }
        });
      }
      signIn({email, password, provider}, options2 = {}) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            this._removeSession();
            if (email && !password) {
              const {error: error3} = yield this.api.sendMagicLinkEmail(email, {
                redirectTo: options2.redirectTo
              });
              return {data: null, user: null, session: null, error: error3};
            }
            if (email && password) {
              return this._handleEmailSignIn(email, password, {
                redirectTo: options2.redirectTo
              });
            }
            if (provider) {
              return this._handleProviderSignIn(provider, {
                redirectTo: options2.redirectTo,
                scopes: options2.scopes
              });
            }
            throw new Error(`You must provide either an email or a third-party provider.`);
          } catch (error3) {
            return {data: null, user: null, session: null, error: error3};
          }
        });
      }
      user() {
        return this.currentUser;
      }
      session() {
        return this.currentSession;
      }
      refreshSession() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
          try {
            if (!((_a = this.currentSession) === null || _a === void 0 ? void 0 : _a.access_token))
              throw new Error("Not logged in.");
            const {error: error3} = yield this._callRefreshToken();
            if (error3)
              throw error3;
            return {data: this.currentSession, user: this.currentUser, error: null};
          } catch (error3) {
            return {data: null, user: null, error: error3};
          }
        });
      }
      update(attributes) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
          try {
            if (!((_a = this.currentSession) === null || _a === void 0 ? void 0 : _a.access_token))
              throw new Error("Not logged in.");
            const {user, error: error3} = yield this.api.updateUser(this.currentSession.access_token, attributes);
            if (error3)
              throw error3;
            if (!user)
              throw Error("Invalid user data.");
            const session2 = Object.assign(Object.assign({}, this.currentSession), {user});
            this._saveSession(session2);
            this._notifyAllSubscribers("USER_UPDATED");
            return {data: user, user, error: null};
          } catch (error3) {
            return {data: null, user: null, error: error3};
          }
        });
      }
      setSession(refresh_token) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            if (!refresh_token) {
              throw new Error("No current session.");
            }
            const {data, error: error3} = yield this.api.refreshAccessToken(refresh_token);
            if (error3) {
              return {session: null, error: error3};
            }
            if (!data) {
              return {
                session: null,
                error: {name: "Invalid refresh_token", message: "JWT token provided is Invalid"}
              };
            }
            this._saveSession(data);
            this._notifyAllSubscribers("SIGNED_IN");
            return {session: data, error: null};
          } catch (error3) {
            return {error: error3, session: null};
          }
        });
      }
      setAuth(access_token) {
        this.currentSession = Object.assign(Object.assign({}, this.currentSession), {access_token, token_type: "bearer", user: null});
        return this.currentSession;
      }
      getSessionFromUrl(options2) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            if (!helpers_1.isBrowser())
              throw new Error("No browser detected.");
            const error_description = helpers_1.getParameterByName("error_description");
            if (error_description)
              throw new Error(error_description);
            const provider_token = helpers_1.getParameterByName("provider_token");
            const access_token = helpers_1.getParameterByName("access_token");
            if (!access_token)
              throw new Error("No access_token detected.");
            const expires_in = helpers_1.getParameterByName("expires_in");
            if (!expires_in)
              throw new Error("No expires_in detected.");
            const refresh_token = helpers_1.getParameterByName("refresh_token");
            if (!refresh_token)
              throw new Error("No refresh_token detected.");
            const token_type = helpers_1.getParameterByName("token_type");
            if (!token_type)
              throw new Error("No token_type detected.");
            const timeNow = Math.round(Date.now() / 1e3);
            const expires_at = timeNow + parseInt(expires_in);
            const {user, error: error3} = yield this.api.getUser(access_token);
            if (error3)
              throw error3;
            const session2 = {
              provider_token,
              access_token,
              expires_in: parseInt(expires_in),
              expires_at,
              refresh_token,
              token_type,
              user
            };
            if (options2 === null || options2 === void 0 ? void 0 : options2.storeSession) {
              this._saveSession(session2);
              this._notifyAllSubscribers("SIGNED_IN");
              if (helpers_1.getParameterByName("type") === "recovery") {
                this._notifyAllSubscribers("PASSWORD_RECOVERY");
              }
            }
            window.location.hash = "";
            return {data: session2, error: null};
          } catch (error3) {
            return {data: null, error: error3};
          }
        });
      }
      signOut() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
          const accessToken = (_a = this.currentSession) === null || _a === void 0 ? void 0 : _a.access_token;
          this._removeSession();
          this._notifyAllSubscribers("SIGNED_OUT");
          if (accessToken) {
            const {error: error3} = yield this.api.signOut(accessToken);
            if (error3)
              return {error: error3};
          }
          return {error: null};
        });
      }
      onAuthStateChange(callback) {
        try {
          const id = helpers_1.uuid();
          const self2 = this;
          const subscription = {
            id,
            callback,
            unsubscribe: () => {
              self2.stateChangeEmitters.delete(id);
            }
          };
          this.stateChangeEmitters.set(id, subscription);
          return {data: subscription, error: null};
        } catch (error3) {
          return {data: null, error: error3};
        }
      }
      _handleEmailSignIn(email, password, options2 = {}) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const {data, error: error3} = yield this.api.signInWithEmail(email, password, {
              redirectTo: options2.redirectTo
            });
            if (error3 || !data)
              return {data: null, user: null, session: null, error: error3};
            if ((_a = data === null || data === void 0 ? void 0 : data.user) === null || _a === void 0 ? void 0 : _a.confirmed_at) {
              this._saveSession(data);
              this._notifyAllSubscribers("SIGNED_IN");
            }
            return {data, user: data.user, session: data, error: null};
          } catch (error3) {
            return {data: null, user: null, session: null, error: error3};
          }
        });
      }
      _handleProviderSignIn(provider, options2 = {}) {
        const url = this.api.getUrlForProvider(provider, {
          redirectTo: options2.redirectTo,
          scopes: options2.scopes
        });
        try {
          if (helpers_1.isBrowser()) {
            window.location.href = url;
          }
          return {provider, url, data: null, session: null, user: null, error: null};
        } catch (error3) {
          if (!!url)
            return {provider, url, data: null, session: null, user: null, error: null};
          return {data: null, user: null, session: null, error: error3};
        }
      }
      _recoverSession() {
        var _a;
        try {
          const json = helpers_1.isBrowser() && ((_a = this.localStorage) === null || _a === void 0 ? void 0 : _a.getItem(constants_1.STORAGE_KEY));
          if (!json || typeof json !== "string") {
            return null;
          }
          const data = JSON.parse(json);
          const {currentSession, expiresAt} = data;
          const timeNow = Math.round(Date.now() / 1e3);
          if (expiresAt >= timeNow && (currentSession === null || currentSession === void 0 ? void 0 : currentSession.user)) {
            this._saveSession(currentSession);
            this._notifyAllSubscribers("SIGNED_IN");
          }
        } catch (error3) {
          console.log("error", error3);
        }
      }
      _recoverAndRefresh() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const json = helpers_1.isBrowser() && (yield this.localStorage.getItem(constants_1.STORAGE_KEY));
            if (!json) {
              return null;
            }
            const data = JSON.parse(json);
            const {currentSession, expiresAt} = data;
            const timeNow = Math.round(Date.now() / 1e3);
            if (expiresAt < timeNow) {
              if (this.autoRefreshToken && currentSession.refresh_token) {
                const {error: error3} = yield this._callRefreshToken(currentSession.refresh_token);
                if (error3) {
                  console.log(error3.message);
                  yield this._removeSession();
                }
              } else {
                this._removeSession();
              }
            } else if (!currentSession || !currentSession.user) {
              console.log("Current session is missing data.");
              this._removeSession();
            } else {
              this._saveSession(currentSession);
              this._notifyAllSubscribers("SIGNED_IN");
            }
          } catch (err) {
            console.error(err);
            return null;
          }
        });
      }
      _callRefreshToken(refresh_token) {
        var _a;
        if (refresh_token === void 0) {
          refresh_token = (_a = this.currentSession) === null || _a === void 0 ? void 0 : _a.refresh_token;
        }
        return __awaiter(this, void 0, void 0, function* () {
          try {
            if (!refresh_token) {
              throw new Error("No current session.");
            }
            const {data, error: error3} = yield this.api.refreshAccessToken(refresh_token);
            if (error3)
              throw error3;
            if (!data)
              throw Error("Invalid session data.");
            this._saveSession(data);
            this._notifyAllSubscribers("SIGNED_IN");
            return {data, error: null};
          } catch (error3) {
            return {data: null, error: error3};
          }
        });
      }
      _notifyAllSubscribers(event) {
        this.stateChangeEmitters.forEach((x) => x.callback(event, this.currentSession));
      }
      _saveSession(session2) {
        this.currentSession = session2;
        this.currentUser = session2.user;
        const expiresAt = session2.expires_at;
        const timeNow = Math.round(Date.now() / 1e3);
        if (expiresAt)
          this._startAutoRefreshToken((expiresAt - timeNow - 60) * 1e3);
        if (this.persistSession && session2.expires_at) {
          this._persistSession(this.currentSession);
        }
      }
      _persistSession(currentSession) {
        const data = {currentSession, expiresAt: currentSession.expires_at};
        helpers_1.isBrowser() && this.localStorage.setItem(constants_1.STORAGE_KEY, JSON.stringify(data));
      }
      _removeSession() {
        return __awaiter(this, void 0, void 0, function* () {
          this.currentSession = null;
          this.currentUser = null;
          if (this.refreshTokenTimer)
            clearTimeout(this.refreshTokenTimer);
          helpers_1.isBrowser() && (yield this.localStorage.removeItem(constants_1.STORAGE_KEY));
        });
      }
      _startAutoRefreshToken(value) {
        if (this.refreshTokenTimer)
          clearTimeout(this.refreshTokenTimer);
        if (!value || !this.autoRefreshToken)
          return;
        this.refreshTokenTimer = setTimeout(() => this._callRefreshToken(), value);
      }
    };
    exports.default = GoTrueClient;
  }
});

// node_modules/@supabase/gotrue-js/dist/main/lib/types.js
var require_types = __commonJS({
  "node_modules/@supabase/gotrue-js/dist/main/lib/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
  }
});

// node_modules/@supabase/gotrue-js/dist/main/index.js
var require_main = __commonJS({
  "node_modules/@supabase/gotrue-js/dist/main/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, {enumerable: true, get: function() {
        return m[k];
      }});
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {"default": mod};
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.GoTrueClient = exports.GoTrueApi = void 0;
    var GoTrueApi_1 = __importDefault(require_GoTrueApi());
    exports.GoTrueApi = GoTrueApi_1.default;
    var GoTrueClient_1 = __importDefault(require_GoTrueClient());
    exports.GoTrueClient = GoTrueClient_1.default;
    __exportStar(require_types(), exports);
  }
});

// node_modules/@supabase/supabase-js/dist/main/lib/SupabaseAuthClient.js
var require_SupabaseAuthClient = __commonJS({
  "node_modules/@supabase/supabase-js/dist/main/lib/SupabaseAuthClient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.SupabaseAuthClient = void 0;
    var gotrue_js_1 = require_main();
    var SupabaseAuthClient = class extends gotrue_js_1.GoTrueClient {
      constructor(options2) {
        super(options2);
      }
    };
    exports.SupabaseAuthClient = SupabaseAuthClient;
  }
});

// node_modules/@supabase/postgrest-js/dist/main/lib/types.js
var require_types2 = __commonJS({
  "node_modules/@supabase/postgrest-js/dist/main/lib/types.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve2) {
          resolve2(value);
        });
      }
      return new (P || (P = Promise))(function(resolve2, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {"default": mod};
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.PostgrestBuilder = void 0;
    var cross_fetch_1 = __importDefault(require_node_ponyfill());
    var PostgrestBuilder = class {
      constructor(builder2) {
        Object.assign(this, builder2);
      }
      then(onfulfilled, onrejected) {
        if (typeof this.schema === "undefined") {
        } else if (["GET", "HEAD"].includes(this.method)) {
          this.headers["Accept-Profile"] = this.schema;
        } else {
          this.headers["Content-Profile"] = this.schema;
        }
        if (this.method !== "GET" && this.method !== "HEAD") {
          this.headers["Content-Type"] = "application/json";
        }
        return cross_fetch_1.default(this.url.toString(), {
          method: this.method,
          headers: this.headers,
          body: JSON.stringify(this.body)
        }).then((res) => __awaiter(this, void 0, void 0, function* () {
          var _a, _b, _c;
          let error3 = null;
          let data = null;
          let count = null;
          if (res.ok) {
            const isReturnMinimal = (_a = this.headers["Prefer"]) === null || _a === void 0 ? void 0 : _a.split(",").includes("return=minimal");
            if (this.method !== "HEAD" && !isReturnMinimal) {
              const text = yield res.text();
              if (text && text !== "")
                data = JSON.parse(text);
            }
            const countHeader = (_b = this.headers["Prefer"]) === null || _b === void 0 ? void 0 : _b.match(/count=(exact|planned|estimated)/);
            const contentRange = (_c = res.headers.get("content-range")) === null || _c === void 0 ? void 0 : _c.split("/");
            if (countHeader && contentRange && contentRange.length > 1) {
              count = parseInt(contentRange[1]);
            }
          } else {
            error3 = yield res.json();
          }
          const postgrestResponse = {
            error: error3,
            data,
            count,
            status: res.status,
            statusText: res.statusText,
            body: data
          };
          return postgrestResponse;
        })).then(onfulfilled, onrejected);
      }
    };
    exports.PostgrestBuilder = PostgrestBuilder;
  }
});

// node_modules/@supabase/postgrest-js/dist/main/lib/PostgrestTransformBuilder.js
var require_PostgrestTransformBuilder = __commonJS({
  "node_modules/@supabase/postgrest-js/dist/main/lib/PostgrestTransformBuilder.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var types_1 = require_types2();
    var PostgrestTransformBuilder = class extends types_1.PostgrestBuilder {
      select(columns = "*") {
        let quoted = false;
        const cleanedColumns = columns.split("").map((c) => {
          if (/\s/.test(c) && !quoted) {
            return "";
          }
          if (c === '"') {
            quoted = !quoted;
          }
          return c;
        }).join("");
        this.url.searchParams.set("select", cleanedColumns);
        return this;
      }
      order(column, {ascending = true, nullsFirst = false, foreignTable} = {}) {
        const key = typeof foreignTable === "undefined" ? "order" : `${foreignTable}.order`;
        const existingOrder = this.url.searchParams.get(key);
        this.url.searchParams.set(key, `${existingOrder ? `${existingOrder},` : ""}${column}.${ascending ? "asc" : "desc"}.${nullsFirst ? "nullsfirst" : "nullslast"}`);
        return this;
      }
      limit(count, {foreignTable} = {}) {
        const key = typeof foreignTable === "undefined" ? "limit" : `${foreignTable}.limit`;
        this.url.searchParams.set(key, `${count}`);
        return this;
      }
      range(from, to, {foreignTable} = {}) {
        const keyOffset = typeof foreignTable === "undefined" ? "offset" : `${foreignTable}.offset`;
        const keyLimit = typeof foreignTable === "undefined" ? "limit" : `${foreignTable}.limit`;
        this.url.searchParams.set(keyOffset, `${from}`);
        this.url.searchParams.set(keyLimit, `${to - from + 1}`);
        return this;
      }
      single() {
        this.headers["Accept"] = "application/vnd.pgrst.object+json";
        return this;
      }
    };
    exports.default = PostgrestTransformBuilder;
  }
});

// node_modules/@supabase/postgrest-js/dist/main/lib/PostgrestFilterBuilder.js
var require_PostgrestFilterBuilder = __commonJS({
  "node_modules/@supabase/postgrest-js/dist/main/lib/PostgrestFilterBuilder.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {"default": mod};
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    var PostgrestTransformBuilder_1 = __importDefault(require_PostgrestTransformBuilder());
    var PostgrestFilterBuilder = class extends PostgrestTransformBuilder_1.default {
      constructor() {
        super(...arguments);
        this.cs = this.contains;
        this.cd = this.containedBy;
        this.sl = this.rangeLt;
        this.sr = this.rangeGt;
        this.nxl = this.rangeGte;
        this.nxr = this.rangeLte;
        this.adj = this.rangeAdjacent;
        this.ov = this.overlaps;
      }
      not(column, operator, value) {
        this.url.searchParams.append(`${column}`, `not.${operator}.${value}`);
        return this;
      }
      or(filters, {foreignTable} = {}) {
        const key = typeof foreignTable === "undefined" ? "or" : `${foreignTable}.or`;
        this.url.searchParams.append(key, `(${filters})`);
        return this;
      }
      eq(column, value) {
        this.url.searchParams.append(`${column}`, `eq.${value}`);
        return this;
      }
      neq(column, value) {
        this.url.searchParams.append(`${column}`, `neq.${value}`);
        return this;
      }
      gt(column, value) {
        this.url.searchParams.append(`${column}`, `gt.${value}`);
        return this;
      }
      gte(column, value) {
        this.url.searchParams.append(`${column}`, `gte.${value}`);
        return this;
      }
      lt(column, value) {
        this.url.searchParams.append(`${column}`, `lt.${value}`);
        return this;
      }
      lte(column, value) {
        this.url.searchParams.append(`${column}`, `lte.${value}`);
        return this;
      }
      like(column, pattern) {
        this.url.searchParams.append(`${column}`, `like.${pattern}`);
        return this;
      }
      ilike(column, pattern) {
        this.url.searchParams.append(`${column}`, `ilike.${pattern}`);
        return this;
      }
      is(column, value) {
        this.url.searchParams.append(`${column}`, `is.${value}`);
        return this;
      }
      in(column, values) {
        const cleanedValues = values.map((s2) => {
          if (typeof s2 === "string" && new RegExp("[,()]").test(s2))
            return `"${s2}"`;
          else
            return `${s2}`;
        }).join(",");
        this.url.searchParams.append(`${column}`, `in.(${cleanedValues})`);
        return this;
      }
      contains(column, value) {
        if (typeof value === "string") {
          this.url.searchParams.append(`${column}`, `cs.${value}`);
        } else if (Array.isArray(value)) {
          this.url.searchParams.append(`${column}`, `cs.{${value.join(",")}}`);
        } else {
          this.url.searchParams.append(`${column}`, `cs.${JSON.stringify(value)}`);
        }
        return this;
      }
      containedBy(column, value) {
        if (typeof value === "string") {
          this.url.searchParams.append(`${column}`, `cd.${value}`);
        } else if (Array.isArray(value)) {
          this.url.searchParams.append(`${column}`, `cd.{${value.join(",")}}`);
        } else {
          this.url.searchParams.append(`${column}`, `cd.${JSON.stringify(value)}`);
        }
        return this;
      }
      rangeLt(column, range2) {
        this.url.searchParams.append(`${column}`, `sl.${range2}`);
        return this;
      }
      rangeGt(column, range2) {
        this.url.searchParams.append(`${column}`, `sr.${range2}`);
        return this;
      }
      rangeGte(column, range2) {
        this.url.searchParams.append(`${column}`, `nxl.${range2}`);
        return this;
      }
      rangeLte(column, range2) {
        this.url.searchParams.append(`${column}`, `nxr.${range2}`);
        return this;
      }
      rangeAdjacent(column, range2) {
        this.url.searchParams.append(`${column}`, `adj.${range2}`);
        return this;
      }
      overlaps(column, value) {
        if (typeof value === "string") {
          this.url.searchParams.append(`${column}`, `ov.${value}`);
        } else {
          this.url.searchParams.append(`${column}`, `ov.{${value.join(",")}}`);
        }
        return this;
      }
      textSearch(column, query, {config, type = null} = {}) {
        let typePart = "";
        if (type === "plain") {
          typePart = "pl";
        } else if (type === "phrase") {
          typePart = "ph";
        } else if (type === "websearch") {
          typePart = "w";
        }
        const configPart = config === void 0 ? "" : `(${config})`;
        this.url.searchParams.append(`${column}`, `${typePart}fts${configPart}.${query}`);
        return this;
      }
      fts(column, query, {config} = {}) {
        const configPart = typeof config === "undefined" ? "" : `(${config})`;
        this.url.searchParams.append(`${column}`, `fts${configPart}.${query}`);
        return this;
      }
      plfts(column, query, {config} = {}) {
        const configPart = typeof config === "undefined" ? "" : `(${config})`;
        this.url.searchParams.append(`${column}`, `plfts${configPart}.${query}`);
        return this;
      }
      phfts(column, query, {config} = {}) {
        const configPart = typeof config === "undefined" ? "" : `(${config})`;
        this.url.searchParams.append(`${column}`, `phfts${configPart}.${query}`);
        return this;
      }
      wfts(column, query, {config} = {}) {
        const configPart = typeof config === "undefined" ? "" : `(${config})`;
        this.url.searchParams.append(`${column}`, `wfts${configPart}.${query}`);
        return this;
      }
      filter(column, operator, value) {
        this.url.searchParams.append(`${column}`, `${operator}.${value}`);
        return this;
      }
      match(query) {
        Object.keys(query).forEach((key) => {
          this.url.searchParams.append(`${key}`, `eq.${query[key]}`);
        });
        return this;
      }
    };
    exports.default = PostgrestFilterBuilder;
  }
});

// node_modules/@supabase/postgrest-js/dist/main/lib/PostgrestQueryBuilder.js
var require_PostgrestQueryBuilder = __commonJS({
  "node_modules/@supabase/postgrest-js/dist/main/lib/PostgrestQueryBuilder.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {"default": mod};
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    var types_1 = require_types2();
    var PostgrestFilterBuilder_1 = __importDefault(require_PostgrestFilterBuilder());
    var PostgrestQueryBuilder = class extends types_1.PostgrestBuilder {
      constructor(url, {headers = {}, schema} = {}) {
        super({});
        this.url = new URL(url);
        this.headers = Object.assign({}, headers);
        this.schema = schema;
      }
      select(columns = "*", {head = false, count = null} = {}) {
        this.method = "GET";
        let quoted = false;
        const cleanedColumns = columns.split("").map((c) => {
          if (/\s/.test(c) && !quoted) {
            return "";
          }
          if (c === '"') {
            quoted = !quoted;
          }
          return c;
        }).join("");
        this.url.searchParams.set("select", cleanedColumns);
        if (count) {
          this.headers["Prefer"] = `count=${count}`;
        }
        if (head) {
          this.method = "HEAD";
        }
        return new PostgrestFilterBuilder_1.default(this);
      }
      insert(values, {upsert = false, onConflict, returning = "representation", count = null} = {}) {
        this.method = "POST";
        const prefersHeaders = [`return=${returning}`];
        if (upsert)
          prefersHeaders.push("resolution=merge-duplicates");
        if (upsert && onConflict !== void 0)
          this.url.searchParams.set("on_conflict", onConflict);
        this.body = values;
        if (count) {
          prefersHeaders.push(`count=${count}`);
        }
        this.headers["Prefer"] = prefersHeaders.join(",");
        if (Array.isArray(values)) {
          const columns = values.reduce((acc, x) => acc.concat(Object.keys(x)), []);
          const uniqueColumns = [...new Set(columns)];
          this.url.searchParams.set("columns", uniqueColumns.join(","));
        }
        return new PostgrestFilterBuilder_1.default(this);
      }
      upsert(values, {onConflict, returning = "representation", count = null} = {}) {
        this.method = "POST";
        const prefersHeaders = ["resolution=merge-duplicates", `return=${returning}`];
        if (onConflict !== void 0)
          this.url.searchParams.set("on_conflict", onConflict);
        this.body = values;
        if (count) {
          prefersHeaders.push(`count=${count}`);
        }
        this.headers["Prefer"] = prefersHeaders.join(",");
        return new PostgrestFilterBuilder_1.default(this);
      }
      update(values, {returning = "representation", count = null} = {}) {
        this.method = "PATCH";
        const prefersHeaders = [`return=${returning}`];
        this.body = values;
        if (count) {
          prefersHeaders.push(`count=${count}`);
        }
        this.headers["Prefer"] = prefersHeaders.join(",");
        return new PostgrestFilterBuilder_1.default(this);
      }
      delete({returning = "representation", count = null} = {}) {
        this.method = "DELETE";
        const prefersHeaders = [`return=${returning}`];
        if (count) {
          prefersHeaders.push(`count=${count}`);
        }
        this.headers["Prefer"] = prefersHeaders.join(",");
        return new PostgrestFilterBuilder_1.default(this);
      }
    };
    exports.default = PostgrestQueryBuilder;
  }
});

// node_modules/@supabase/postgrest-js/dist/main/lib/PostgrestRpcBuilder.js
var require_PostgrestRpcBuilder = __commonJS({
  "node_modules/@supabase/postgrest-js/dist/main/lib/PostgrestRpcBuilder.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {"default": mod};
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    var types_1 = require_types2();
    var PostgrestFilterBuilder_1 = __importDefault(require_PostgrestFilterBuilder());
    var PostgrestRpcBuilder = class extends types_1.PostgrestBuilder {
      constructor(url, {headers = {}, schema} = {}) {
        super({});
        this.url = new URL(url);
        this.headers = Object.assign({}, headers);
        this.schema = schema;
      }
      rpc(params, {count = null} = {}) {
        this.method = "POST";
        this.body = params;
        if (count) {
          if (this.headers["Prefer"] !== void 0)
            this.headers["Prefer"] += `,count=${count}`;
          else
            this.headers["Prefer"] = `count=${count}`;
        }
        return new PostgrestFilterBuilder_1.default(this);
      }
    };
    exports.default = PostgrestRpcBuilder;
  }
});

// node_modules/@supabase/postgrest-js/dist/main/PostgrestClient.js
var require_PostgrestClient = __commonJS({
  "node_modules/@supabase/postgrest-js/dist/main/PostgrestClient.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {"default": mod};
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    var PostgrestQueryBuilder_1 = __importDefault(require_PostgrestQueryBuilder());
    var PostgrestRpcBuilder_1 = __importDefault(require_PostgrestRpcBuilder());
    var PostgrestClient = class {
      constructor(url, {headers = {}, schema} = {}) {
        this.url = url;
        this.headers = headers;
        this.schema = schema;
      }
      auth(token) {
        this.headers["Authorization"] = `Bearer ${token}`;
        return this;
      }
      from(table) {
        const url = `${this.url}/${table}`;
        return new PostgrestQueryBuilder_1.default(url, {headers: this.headers, schema: this.schema});
      }
      rpc(fn, params, {count = null} = {}) {
        const url = `${this.url}/rpc/${fn}`;
        return new PostgrestRpcBuilder_1.default(url, {
          headers: this.headers,
          schema: this.schema
        }).rpc(params, {count});
      }
    };
    exports.default = PostgrestClient;
  }
});

// node_modules/@supabase/postgrest-js/dist/main/index.js
var require_main2 = __commonJS({
  "node_modules/@supabase/postgrest-js/dist/main/index.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {"default": mod};
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.PostgrestBuilder = exports.PostgrestQueryBuilder = exports.PostgrestFilterBuilder = exports.PostgrestClient = void 0;
    var PostgrestClient_1 = __importDefault(require_PostgrestClient());
    exports.PostgrestClient = PostgrestClient_1.default;
    var PostgrestFilterBuilder_1 = __importDefault(require_PostgrestFilterBuilder());
    exports.PostgrestFilterBuilder = PostgrestFilterBuilder_1.default;
    var PostgrestQueryBuilder_1 = __importDefault(require_PostgrestQueryBuilder());
    exports.PostgrestQueryBuilder = PostgrestQueryBuilder_1.default;
    var types_1 = require_types2();
    Object.defineProperty(exports, "PostgrestBuilder", {enumerable: true, get: function() {
      return types_1.PostgrestBuilder;
    }});
  }
});

// node_modules/@supabase/realtime-js/dist/main/lib/transformers.js
var require_transformers = __commonJS({
  "node_modules/@supabase/realtime-js/dist/main/lib/transformers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.toTimestampString = exports.toArray = exports.toJson = exports.toIntRange = exports.toInt = exports.toFloat = exports.toDateRange = exports.toDate = exports.toBoolean = exports.convertCell = exports.convertColumn = exports.convertChangeData = exports.PostgresTypes = void 0;
    var PostgresTypes;
    (function(PostgresTypes2) {
      PostgresTypes2["abstime"] = "abstime";
      PostgresTypes2["bool"] = "bool";
      PostgresTypes2["date"] = "date";
      PostgresTypes2["daterange"] = "daterange";
      PostgresTypes2["float4"] = "float4";
      PostgresTypes2["float8"] = "float8";
      PostgresTypes2["int2"] = "int2";
      PostgresTypes2["int4"] = "int4";
      PostgresTypes2["int4range"] = "int4range";
      PostgresTypes2["int8"] = "int8";
      PostgresTypes2["int8range"] = "int8range";
      PostgresTypes2["json"] = "json";
      PostgresTypes2["jsonb"] = "jsonb";
      PostgresTypes2["money"] = "money";
      PostgresTypes2["numeric"] = "numeric";
      PostgresTypes2["oid"] = "oid";
      PostgresTypes2["reltime"] = "reltime";
      PostgresTypes2["time"] = "time";
      PostgresTypes2["timestamp"] = "timestamp";
      PostgresTypes2["timestamptz"] = "timestamptz";
      PostgresTypes2["timetz"] = "timetz";
      PostgresTypes2["tsrange"] = "tsrange";
      PostgresTypes2["tstzrange"] = "tstzrange";
    })(PostgresTypes = exports.PostgresTypes || (exports.PostgresTypes = {}));
    exports.convertChangeData = (columns, records, options2 = {}) => {
      let result = {};
      let skipTypes = typeof options2.skipTypes !== "undefined" ? options2.skipTypes : [];
      Object.entries(records).map(([key, value]) => {
        result[key] = exports.convertColumn(key, columns, records, skipTypes);
      });
      return result;
    };
    exports.convertColumn = (columnName, columns, records, skipTypes) => {
      let column = columns.find((x) => x.name == columnName);
      if (!column || skipTypes.includes(column.type)) {
        return noop3(records[columnName]);
      } else {
        return exports.convertCell(column.type, records[columnName]);
      }
    };
    exports.convertCell = (type, stringValue) => {
      try {
        if (stringValue === null)
          return null;
        if (type.charAt(0) === "_") {
          let arrayValue = type.slice(1, type.length);
          return exports.toArray(stringValue, arrayValue);
        }
        switch (type) {
          case PostgresTypes.abstime:
            return noop3(stringValue);
          case PostgresTypes.bool:
            return exports.toBoolean(stringValue);
          case PostgresTypes.date:
            return noop3(stringValue);
          case PostgresTypes.daterange:
            return exports.toDateRange(stringValue);
          case PostgresTypes.float4:
            return exports.toFloat(stringValue);
          case PostgresTypes.float8:
            return exports.toFloat(stringValue);
          case PostgresTypes.int2:
            return exports.toInt(stringValue);
          case PostgresTypes.int4:
            return exports.toInt(stringValue);
          case PostgresTypes.int4range:
            return exports.toIntRange(stringValue);
          case PostgresTypes.int8:
            return exports.toInt(stringValue);
          case PostgresTypes.int8range:
            return exports.toIntRange(stringValue);
          case PostgresTypes.json:
            return exports.toJson(stringValue);
          case PostgresTypes.jsonb:
            return exports.toJson(stringValue);
          case PostgresTypes.money:
            return exports.toFloat(stringValue);
          case PostgresTypes.numeric:
            return exports.toFloat(stringValue);
          case PostgresTypes.oid:
            return exports.toInt(stringValue);
          case PostgresTypes.reltime:
            return noop3(stringValue);
          case PostgresTypes.time:
            return noop3(stringValue);
          case PostgresTypes.timestamp:
            return exports.toTimestampString(stringValue);
          case PostgresTypes.timestamptz:
            return noop3(stringValue);
          case PostgresTypes.timetz:
            return noop3(stringValue);
          case PostgresTypes.tsrange:
            return exports.toDateRange(stringValue);
          case PostgresTypes.tstzrange:
            return exports.toDateRange(stringValue);
          default:
            return noop3(stringValue);
        }
      } catch (error3) {
        console.log(`Could not convert cell of type ${type} and value ${stringValue}`);
        console.log(`This is the error: ${error3}`);
        return stringValue;
      }
    };
    var noop3 = (stringValue) => {
      return stringValue;
    };
    exports.toBoolean = (stringValue) => {
      switch (stringValue) {
        case "t":
          return true;
        case "f":
          return false;
        default:
          return null;
      }
    };
    exports.toDate = (stringValue) => {
      return new Date(stringValue);
    };
    exports.toDateRange = (stringValue) => {
      let arr = JSON.parse(stringValue);
      return [new Date(arr[0]), new Date(arr[1])];
    };
    exports.toFloat = (stringValue) => {
      return parseFloat(stringValue);
    };
    exports.toInt = (stringValue) => {
      return parseInt(stringValue);
    };
    exports.toIntRange = (stringValue) => {
      let arr = JSON.parse(stringValue);
      return [parseInt(arr[0]), parseInt(arr[1])];
    };
    exports.toJson = (stringValue) => {
      return JSON.parse(stringValue);
    };
    exports.toArray = (stringValue, type) => {
      let stringEnriched = stringValue.slice(1, stringValue.length - 1);
      let stringArray = stringEnriched.length > 0 ? stringEnriched.split(",") : [];
      let array = stringArray.map((string) => {
        return exports.convertCell(type, string);
      });
      return array;
    };
    exports.toTimestampString = (stringValue) => {
      return stringValue.replace(" ", "T");
    };
  }
});

// node_modules/@supabase/realtime-js/dist/main/lib/constants.js
var require_constants3 = __commonJS({
  "node_modules/@supabase/realtime-js/dist/main/lib/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.TRANSPORTS = exports.CHANNEL_EVENTS = exports.CHANNEL_STATES = exports.SOCKET_STATES = exports.WS_CLOSE_NORMAL = exports.DEFAULT_TIMEOUT = exports.VSN = void 0;
    exports.VSN = "1.0.0";
    exports.DEFAULT_TIMEOUT = 1e4;
    exports.WS_CLOSE_NORMAL = 1e3;
    var SOCKET_STATES;
    (function(SOCKET_STATES2) {
      SOCKET_STATES2[SOCKET_STATES2["connecting"] = 0] = "connecting";
      SOCKET_STATES2[SOCKET_STATES2["open"] = 1] = "open";
      SOCKET_STATES2[SOCKET_STATES2["closing"] = 2] = "closing";
      SOCKET_STATES2[SOCKET_STATES2["closed"] = 3] = "closed";
    })(SOCKET_STATES = exports.SOCKET_STATES || (exports.SOCKET_STATES = {}));
    var CHANNEL_STATES;
    (function(CHANNEL_STATES2) {
      CHANNEL_STATES2["closed"] = "closed";
      CHANNEL_STATES2["errored"] = "errored";
      CHANNEL_STATES2["joined"] = "joined";
      CHANNEL_STATES2["joining"] = "joining";
      CHANNEL_STATES2["leaving"] = "leaving";
    })(CHANNEL_STATES = exports.CHANNEL_STATES || (exports.CHANNEL_STATES = {}));
    var CHANNEL_EVENTS;
    (function(CHANNEL_EVENTS2) {
      CHANNEL_EVENTS2["close"] = "phx_close";
      CHANNEL_EVENTS2["error"] = "phx_error";
      CHANNEL_EVENTS2["join"] = "phx_join";
      CHANNEL_EVENTS2["reply"] = "phx_reply";
      CHANNEL_EVENTS2["leave"] = "phx_leave";
    })(CHANNEL_EVENTS = exports.CHANNEL_EVENTS || (exports.CHANNEL_EVENTS = {}));
    var TRANSPORTS;
    (function(TRANSPORTS2) {
      TRANSPORTS2["websocket"] = "websocket";
    })(TRANSPORTS = exports.TRANSPORTS || (exports.TRANSPORTS = {}));
  }
});

// node_modules/@supabase/realtime-js/dist/main/lib/timer.js
var require_timer = __commonJS({
  "node_modules/@supabase/realtime-js/dist/main/lib/timer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var Timer = class {
      constructor(callback, timerCalc) {
        this.callback = callback;
        this.timerCalc = timerCalc;
        this.timer = void 0;
        this.tries = 0;
        this.callback = callback;
        this.timerCalc = timerCalc;
      }
      reset() {
        this.tries = 0;
        clearTimeout(this.timer);
      }
      scheduleTimeout() {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.tries = this.tries + 1;
          this.callback();
        }, this.timerCalc(this.tries + 1));
      }
    };
    exports.default = Timer;
  }
});

// node_modules/@supabase/realtime-js/dist/main/lib/push.js
var require_push = __commonJS({
  "node_modules/@supabase/realtime-js/dist/main/lib/push.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var constants_1 = require_constants3();
    var Push = class {
      constructor(channel, event, payload = {}, timeout = constants_1.DEFAULT_TIMEOUT) {
        this.channel = channel;
        this.event = event;
        this.payload = payload;
        this.timeout = timeout;
        this.sent = false;
        this.timeoutTimer = void 0;
        this.ref = "";
        this.receivedResp = null;
        this.recHooks = [];
        this.refEvent = null;
      }
      resend(timeout) {
        this.timeout = timeout;
        this._cancelRefEvent();
        this.ref = "";
        this.refEvent = null;
        this.receivedResp = null;
        this.sent = false;
        this.send();
      }
      send() {
        if (this._hasReceived("timeout")) {
          return;
        }
        this.startTimeout();
        this.sent = true;
        this.channel.socket.push({
          topic: this.channel.topic,
          event: this.event,
          payload: this.payload,
          ref: this.ref
        });
      }
      receive(status, callback) {
        var _a;
        if (this._hasReceived(status)) {
          callback((_a = this.receivedResp) === null || _a === void 0 ? void 0 : _a.response);
        }
        this.recHooks.push({status, callback});
        return this;
      }
      startTimeout() {
        if (this.timeoutTimer) {
          return;
        }
        this.ref = this.channel.socket.makeRef();
        this.refEvent = this.channel.replyEventName(this.ref);
        this.channel.on(this.refEvent, (payload) => {
          this._cancelRefEvent();
          this._cancelTimeout();
          this.receivedResp = payload;
          this._matchReceive(payload);
        });
        this.timeoutTimer = setTimeout(() => {
          this.trigger("timeout", {});
        }, this.timeout);
      }
      trigger(status, response) {
        if (this.refEvent)
          this.channel.trigger(this.refEvent, {status, response});
      }
      _cancelRefEvent() {
        if (!this.refEvent) {
          return;
        }
        this.channel.off(this.refEvent);
      }
      _cancelTimeout() {
        clearTimeout(this.timeoutTimer);
        this.timeoutTimer = void 0;
      }
      _matchReceive({status, response}) {
        this.recHooks.filter((h) => h.status === status).forEach((h) => h.callback(response));
      }
      _hasReceived(status) {
        return this.receivedResp && this.receivedResp.status === status;
      }
    };
    exports.default = Push;
  }
});

// node_modules/@supabase/realtime-js/dist/main/RealtimeSubscription.js
var require_RealtimeSubscription = __commonJS({
  "node_modules/@supabase/realtime-js/dist/main/RealtimeSubscription.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {"default": mod};
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    var constants_1 = require_constants3();
    var push_1 = __importDefault(require_push());
    var timer_1 = __importDefault(require_timer());
    var RealtimeSubscription = class {
      constructor(topic, params = {}, socket) {
        this.topic = topic;
        this.params = params;
        this.socket = socket;
        this.bindings = [];
        this.state = constants_1.CHANNEL_STATES.closed;
        this.joinedOnce = false;
        this.pushBuffer = [];
        this.timeout = this.socket.timeout;
        this.joinPush = new push_1.default(this, constants_1.CHANNEL_EVENTS.join, this.params, this.timeout);
        this.rejoinTimer = new timer_1.default(() => this.rejoinUntilConnected(), this.socket.reconnectAfterMs);
        this.joinPush.receive("ok", () => {
          this.state = constants_1.CHANNEL_STATES.joined;
          this.rejoinTimer.reset();
          this.pushBuffer.forEach((pushEvent) => pushEvent.send());
          this.pushBuffer = [];
        });
        this.onClose(() => {
          this.rejoinTimer.reset();
          this.socket.log("channel", `close ${this.topic} ${this.joinRef()}`);
          this.state = constants_1.CHANNEL_STATES.closed;
          this.socket.remove(this);
        });
        this.onError((reason) => {
          if (this.isLeaving() || this.isClosed()) {
            return;
          }
          this.socket.log("channel", `error ${this.topic}`, reason);
          this.state = constants_1.CHANNEL_STATES.errored;
          this.rejoinTimer.scheduleTimeout();
        });
        this.joinPush.receive("timeout", () => {
          if (!this.isJoining()) {
            return;
          }
          this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout);
          this.state = constants_1.CHANNEL_STATES.errored;
          this.rejoinTimer.scheduleTimeout();
        });
        this.on(constants_1.CHANNEL_EVENTS.reply, (payload, ref) => {
          this.trigger(this.replyEventName(ref), payload);
        });
      }
      rejoinUntilConnected() {
        this.rejoinTimer.scheduleTimeout();
        if (this.socket.isConnected()) {
          this.rejoin();
        }
      }
      subscribe(timeout = this.timeout) {
        if (this.joinedOnce) {
          throw `tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance`;
        } else {
          this.joinedOnce = true;
          this.rejoin(timeout);
          return this.joinPush;
        }
      }
      onClose(callback) {
        this.on(constants_1.CHANNEL_EVENTS.close, callback);
      }
      onError(callback) {
        this.on(constants_1.CHANNEL_EVENTS.error, (reason) => callback(reason));
      }
      on(event, callback) {
        this.bindings.push({event, callback});
      }
      off(event) {
        this.bindings = this.bindings.filter((bind2) => bind2.event !== event);
      }
      canPush() {
        return this.socket.isConnected() && this.isJoined();
      }
      push(event, payload, timeout = this.timeout) {
        if (!this.joinedOnce) {
          throw `tried to push '${event}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
        }
        let pushEvent = new push_1.default(this, event, payload, timeout);
        if (this.canPush()) {
          pushEvent.send();
        } else {
          pushEvent.startTimeout();
          this.pushBuffer.push(pushEvent);
        }
        return pushEvent;
      }
      unsubscribe(timeout = this.timeout) {
        this.state = constants_1.CHANNEL_STATES.leaving;
        let onClose = () => {
          this.socket.log("channel", `leave ${this.topic}`);
          this.trigger(constants_1.CHANNEL_EVENTS.close, "leave", this.joinRef());
        };
        let leavePush = new push_1.default(this, constants_1.CHANNEL_EVENTS.leave, {}, timeout);
        leavePush.receive("ok", () => onClose()).receive("timeout", () => onClose());
        leavePush.send();
        if (!this.canPush()) {
          leavePush.trigger("ok", {});
        }
        return leavePush;
      }
      onMessage(event, payload, ref) {
        return payload;
      }
      isMember(topic) {
        return this.topic === topic;
      }
      joinRef() {
        return this.joinPush.ref;
      }
      sendJoin(timeout) {
        this.state = constants_1.CHANNEL_STATES.joining;
        this.joinPush.resend(timeout);
      }
      rejoin(timeout = this.timeout) {
        if (this.isLeaving()) {
          return;
        }
        this.sendJoin(timeout);
      }
      trigger(event, payload, ref) {
        let {close, error: error3, leave, join} = constants_1.CHANNEL_EVENTS;
        let events = [close, error3, leave, join];
        if (ref && events.indexOf(event) >= 0 && ref !== this.joinRef()) {
          return;
        }
        let handledPayload = this.onMessage(event, payload, ref);
        if (payload && !handledPayload) {
          throw "channel onMessage callbacks must return the payload, modified or unmodified";
        }
        this.bindings.filter((bind2) => {
          if (bind2.event === "*") {
            return event === (payload === null || payload === void 0 ? void 0 : payload.type);
          } else {
            return bind2.event === event;
          }
        }).map((bind2) => bind2.callback(handledPayload, ref));
      }
      replyEventName(ref) {
        return `chan_reply_${ref}`;
      }
      isClosed() {
        return this.state === constants_1.CHANNEL_STATES.closed;
      }
      isErrored() {
        return this.state === constants_1.CHANNEL_STATES.errored;
      }
      isJoined() {
        return this.state === constants_1.CHANNEL_STATES.joined;
      }
      isJoining() {
        return this.state === constants_1.CHANNEL_STATES.joining;
      }
      isLeaving() {
        return this.state === constants_1.CHANNEL_STATES.leaving;
      }
    };
    exports.default = RealtimeSubscription;
  }
});

// node_modules/websocket/node_modules/ms/index.js
var require_ms3 = __commonJS({
  "node_modules/websocket/node_modules/ms/index.js"(exports, module2) {
    var s2 = 1e3;
    var m = s2 * 60;
    var h = m * 60;
    var d = h * 24;
    var y = d * 365.25;
    module2.exports = function(val, options2) {
      options2 = options2 || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isNaN(val) === false) {
        return options2.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s2;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      if (ms >= d) {
        return Math.round(ms / d) + "d";
      }
      if (ms >= h) {
        return Math.round(ms / h) + "h";
      }
      if (ms >= m) {
        return Math.round(ms / m) + "m";
      }
      if (ms >= s2) {
        return Math.round(ms / s2) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      return plural(ms, d, "day") || plural(ms, h, "hour") || plural(ms, m, "minute") || plural(ms, s2, "second") || ms + " ms";
    }
    function plural(ms, n, name) {
      if (ms < n) {
        return;
      }
      if (ms < n * 1.5) {
        return Math.floor(ms / n) + " " + name;
      }
      return Math.ceil(ms / n) + " " + name + "s";
    }
  }
});

// node_modules/websocket/node_modules/debug/src/debug.js
var require_debug4 = __commonJS({
  "node_modules/websocket/node_modules/debug/src/debug.js"(exports, module2) {
    exports = module2.exports = createDebug.debug = createDebug["default"] = createDebug;
    exports.coerce = coerce;
    exports.disable = disable;
    exports.enable = enable;
    exports.enabled = enabled;
    exports.humanize = require_ms3();
    exports.names = [];
    exports.skips = [];
    exports.formatters = {};
    var prevTime;
    function selectColor(namespace) {
      var hash2 = 0, i;
      for (i in namespace) {
        hash2 = (hash2 << 5) - hash2 + namespace.charCodeAt(i);
        hash2 |= 0;
      }
      return exports.colors[Math.abs(hash2) % exports.colors.length];
    }
    function createDebug(namespace) {
      function debug() {
        if (!debug.enabled)
          return;
        var self2 = debug;
        var curr = +new Date();
        var ms = curr - (prevTime || curr);
        self2.diff = ms;
        self2.prev = prevTime;
        self2.curr = curr;
        prevTime = curr;
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        args[0] = exports.coerce(args[0]);
        if (typeof args[0] !== "string") {
          args.unshift("%O");
        }
        var index2 = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format2) {
          if (match === "%%")
            return match;
          index2++;
          var formatter = exports.formatters[format2];
          if (typeof formatter === "function") {
            var val = args[index2];
            match = formatter.call(self2, val);
            args.splice(index2, 1);
            index2--;
          }
          return match;
        });
        exports.formatArgs.call(self2, args);
        var logFn = debug.log || exports.log || console.log.bind(console);
        logFn.apply(self2, args);
      }
      debug.namespace = namespace;
      debug.enabled = exports.enabled(namespace);
      debug.useColors = exports.useColors();
      debug.color = selectColor(namespace);
      if (typeof exports.init === "function") {
        exports.init(debug);
      }
      return debug;
    }
    function enable(namespaces) {
      exports.save(namespaces);
      exports.names = [];
      exports.skips = [];
      var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
      var len = split.length;
      for (var i = 0; i < len; i++) {
        if (!split[i])
          continue;
        namespaces = split[i].replace(/\*/g, ".*?");
        if (namespaces[0] === "-") {
          exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
        } else {
          exports.names.push(new RegExp("^" + namespaces + "$"));
        }
      }
    }
    function disable() {
      exports.enable("");
    }
    function enabled(name) {
      var i, len;
      for (i = 0, len = exports.skips.length; i < len; i++) {
        if (exports.skips[i].test(name)) {
          return false;
        }
      }
      for (i = 0, len = exports.names.length; i < len; i++) {
        if (exports.names[i].test(name)) {
          return true;
        }
      }
      return false;
    }
    function coerce(val) {
      if (val instanceof Error)
        return val.stack || val.message;
      return val;
    }
  }
});

// node_modules/websocket/node_modules/debug/src/browser.js
var require_browser3 = __commonJS({
  "node_modules/websocket/node_modules/debug/src/browser.js"(exports, module2) {
    exports = module2.exports = require_debug4();
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load2;
    exports.useColors = useColors;
    exports.storage = typeof chrome != "undefined" && typeof chrome.storage != "undefined" ? chrome.storage.local : localstorage();
    exports.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
        return true;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    exports.formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (err) {
        return "[UnexpectedJSONParseError]: " + err.message;
      }
    };
    function formatArgs(args) {
      var useColors2 = this.useColors;
      args[0] = (useColors2 ? "%c" : "") + this.namespace + (useColors2 ? " %c" : " ") + args[0] + (useColors2 ? "%c " : " ") + "+" + exports.humanize(this.diff);
      if (!useColors2)
        return;
      var c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      var index2 = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function(match) {
        if (match === "%%")
          return;
        index2++;
        if (match === "%c") {
          lastC = index2;
        }
      });
      args.splice(lastC, 0, c);
    }
    function log() {
      return typeof console === "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function save(namespaces) {
      try {
        if (namespaces == null) {
          exports.storage.removeItem("debug");
        } else {
          exports.storage.debug = namespaces;
        }
      } catch (e) {
      }
    }
    function load2() {
      var r;
      try {
        r = exports.storage.debug;
      } catch (e) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    exports.enable(load2());
    function localstorage() {
      try {
        return window.localStorage;
      } catch (e) {
      }
    }
  }
});

// node_modules/websocket/node_modules/debug/src/node.js
var require_node6 = __commonJS({
  "node_modules/websocket/node_modules/debug/src/node.js"(exports, module2) {
    var tty = require("tty");
    var util = require("util");
    exports = module2.exports = require_debug4();
    exports.init = init2;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load2;
    exports.useColors = useColors;
    exports.colors = [6, 2, 3, 4, 5, 1];
    exports.inspectOpts = Object.keys(process.env).filter(function(key) {
      return /^debug_/i.test(key);
    }).reduce(function(obj, key) {
      var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function(_, k) {
        return k.toUpperCase();
      });
      var val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val))
        val = true;
      else if (/^(no|off|false|disabled)$/i.test(val))
        val = false;
      else if (val === "null")
        val = null;
      else
        val = Number(val);
      obj[prop] = val;
      return obj;
    }, {});
    var fd = parseInt(process.env.DEBUG_FD, 10) || 2;
    if (fd !== 1 && fd !== 2) {
      util.deprecate(function() {
      }, "except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)")();
    }
    var stream = fd === 1 ? process.stdout : fd === 2 ? process.stderr : createWritableStdioStream(fd);
    function useColors() {
      return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(fd);
    }
    exports.formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split("\n").map(function(str) {
        return str.trim();
      }).join(" ");
    };
    exports.formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
    function formatArgs(args) {
      var name = this.namespace;
      var useColors2 = this.useColors;
      if (useColors2) {
        var c = this.color;
        var prefix = "  [3" + c + ";1m" + name + " [0m";
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push("[3" + c + "m+" + exports.humanize(this.diff) + "[0m");
      } else {
        args[0] = new Date().toUTCString() + " " + name + " " + args[0];
      }
    }
    function log() {
      return stream.write(util.format.apply(util, arguments) + "\n");
    }
    function save(namespaces) {
      if (namespaces == null) {
        delete process.env.DEBUG;
      } else {
        process.env.DEBUG = namespaces;
      }
    }
    function load2() {
      return process.env.DEBUG;
    }
    function createWritableStdioStream(fd2) {
      var stream2;
      var tty_wrap = process.binding("tty_wrap");
      switch (tty_wrap.guessHandleType(fd2)) {
        case "TTY":
          stream2 = new tty.WriteStream(fd2);
          stream2._type = "tty";
          if (stream2._handle && stream2._handle.unref) {
            stream2._handle.unref();
          }
          break;
        case "FILE":
          var fs = require("fs");
          stream2 = new fs.SyncWriteStream(fd2, {autoClose: false});
          stream2._type = "fs";
          break;
        case "PIPE":
        case "TCP":
          var net = require("net");
          stream2 = new net.Socket({
            fd: fd2,
            readable: false,
            writable: true
          });
          stream2.readable = false;
          stream2.read = null;
          stream2._type = "pipe";
          if (stream2._handle && stream2._handle.unref) {
            stream2._handle.unref();
          }
          break;
        default:
          throw new Error("Implement me. Unknown stream file type!");
      }
      stream2.fd = fd2;
      stream2._isStdio = true;
      return stream2;
    }
    function init2(debug) {
      debug.inspectOpts = {};
      var keys = Object.keys(exports.inspectOpts);
      for (var i = 0; i < keys.length; i++) {
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
      }
    }
    exports.enable(load2());
  }
});

// node_modules/websocket/node_modules/debug/src/index.js
var require_src3 = __commonJS({
  "node_modules/websocket/node_modules/debug/src/index.js"(exports, module2) {
    if (typeof process !== "undefined" && process.type === "renderer") {
      module2.exports = require_browser3();
    } else {
      module2.exports = require_node6();
    }
  }
});

// node_modules/websocket/lib/utils.js
var require_utils = __commonJS({
  "node_modules/websocket/lib/utils.js"(exports) {
    var noop3 = exports.noop = function() {
    };
    exports.extend = function extend(dest, source) {
      for (var prop in source) {
        dest[prop] = source[prop];
      }
    };
    exports.eventEmitterListenerCount = require("events").EventEmitter.listenerCount || function(emitter, type) {
      return emitter.listeners(type).length;
    };
    exports.bufferAllocUnsafe = Buffer.allocUnsafe ? Buffer.allocUnsafe : function oldBufferAllocUnsafe(size) {
      return new Buffer(size);
    };
    exports.bufferFromString = Buffer.from ? Buffer.from : function oldBufferFromString(string, encoding) {
      return new Buffer(string, encoding);
    };
    exports.BufferingLogger = function createBufferingLogger(identifier, uniqueID) {
      var logFunction = require_src3()(identifier);
      if (logFunction.enabled) {
        var logger = new BufferingLogger(identifier, uniqueID, logFunction);
        var debug = logger.log.bind(logger);
        debug.printOutput = logger.printOutput.bind(logger);
        debug.enabled = logFunction.enabled;
        return debug;
      }
      logFunction.printOutput = noop3;
      return logFunction;
    };
    function BufferingLogger(identifier, uniqueID, logFunction) {
      this.logFunction = logFunction;
      this.identifier = identifier;
      this.uniqueID = uniqueID;
      this.buffer = [];
    }
    BufferingLogger.prototype.log = function() {
      this.buffer.push([new Date(), Array.prototype.slice.call(arguments)]);
      return this;
    };
    BufferingLogger.prototype.clear = function() {
      this.buffer = [];
      return this;
    };
    BufferingLogger.prototype.printOutput = function(logFunction) {
      if (!logFunction) {
        logFunction = this.logFunction;
      }
      var uniqueID = this.uniqueID;
      this.buffer.forEach(function(entry) {
        var date = entry[0].toLocaleString();
        var args = entry[1].slice();
        var formatString = args[0];
        if (formatString !== void 0 && formatString !== null) {
          formatString = "%s - %s - " + formatString.toString();
          args.splice(0, 1, formatString, date, uniqueID);
          logFunction.apply(global, args);
        }
      });
    };
  }
});

// node_modules/node-gyp-build/index.js
var require_node_gyp_build = __commonJS({
  "node_modules/node-gyp-build/index.js"(exports, module2) {
    var fs = require("fs");
    var path = require("path");
    var os = require("os");
    var runtimeRequire = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require;
    var vars = process.config && process.config.variables || {};
    var prebuildsOnly = !!process.env.PREBUILDS_ONLY;
    var abi = process.versions.modules;
    var runtime = isElectron() ? "electron" : "node";
    var arch = os.arch();
    var platform = os.platform();
    var libc = process.env.LIBC || (isAlpine(platform) ? "musl" : "glibc");
    var armv = process.env.ARM_VERSION || (arch === "arm64" ? "8" : vars.arm_version) || "";
    var uv = (process.versions.uv || "").split(".")[0];
    module2.exports = load2;
    function load2(dir) {
      return runtimeRequire(load2.path(dir));
    }
    load2.path = function(dir) {
      dir = path.resolve(dir || ".");
      try {
        var name = runtimeRequire(path.join(dir, "package.json")).name.toUpperCase().replace(/-/g, "_");
        if (process.env[name + "_PREBUILD"])
          dir = process.env[name + "_PREBUILD"];
      } catch (err) {
      }
      if (!prebuildsOnly) {
        var release = getFirst(path.join(dir, "build/Release"), matchBuild);
        if (release)
          return release;
        var debug = getFirst(path.join(dir, "build/Debug"), matchBuild);
        if (debug)
          return debug;
      }
      var prebuild = resolve2(dir);
      if (prebuild)
        return prebuild;
      var nearby = resolve2(path.dirname(process.execPath));
      if (nearby)
        return nearby;
      var target = [
        "platform=" + platform,
        "arch=" + arch,
        "runtime=" + runtime,
        "abi=" + abi,
        "uv=" + uv,
        armv ? "armv=" + armv : "",
        "libc=" + libc,
        "node=" + process.versions.node,
        process.versions && process.versions.electron ? "electron=" + process.versions.electron : "",
        typeof __webpack_require__ === "function" ? "webpack=true" : ""
      ].filter(Boolean).join(" ");
      throw new Error("No native build was found for " + target + "\n    loaded from: " + dir + "\n");
      function resolve2(dir2) {
        var prebuilds = path.join(dir2, "prebuilds", platform + "-" + arch);
        var parsed = readdirSync(prebuilds).map(parseTags);
        var candidates = parsed.filter(matchTags(runtime, abi));
        var winner = candidates.sort(compareTags(runtime))[0];
        if (winner)
          return path.join(prebuilds, winner.file);
      }
    };
    function readdirSync(dir) {
      try {
        return fs.readdirSync(dir);
      } catch (err) {
        return [];
      }
    }
    function getFirst(dir, filter) {
      var files = readdirSync(dir).filter(filter);
      return files[0] && path.join(dir, files[0]);
    }
    function matchBuild(name) {
      return /\.node$/.test(name);
    }
    function parseTags(file) {
      var arr = file.split(".");
      var extension = arr.pop();
      var tags = {file, specificity: 0};
      if (extension !== "node")
        return;
      for (var i = 0; i < arr.length; i++) {
        var tag = arr[i];
        if (tag === "node" || tag === "electron" || tag === "node-webkit") {
          tags.runtime = tag;
        } else if (tag === "napi") {
          tags.napi = true;
        } else if (tag.slice(0, 3) === "abi") {
          tags.abi = tag.slice(3);
        } else if (tag.slice(0, 2) === "uv") {
          tags.uv = tag.slice(2);
        } else if (tag.slice(0, 4) === "armv") {
          tags.armv = tag.slice(4);
        } else if (tag === "glibc" || tag === "musl") {
          tags.libc = tag;
        } else {
          continue;
        }
        tags.specificity++;
      }
      return tags;
    }
    function matchTags(runtime2, abi2) {
      return function(tags) {
        if (tags == null)
          return false;
        if (tags.runtime !== runtime2 && !runtimeAgnostic(tags))
          return false;
        if (tags.abi !== abi2 && !tags.napi)
          return false;
        if (tags.uv && tags.uv !== uv)
          return false;
        if (tags.armv && tags.armv !== armv)
          return false;
        if (tags.libc && tags.libc !== libc)
          return false;
        return true;
      };
    }
    function runtimeAgnostic(tags) {
      return tags.runtime === "node" && tags.napi;
    }
    function compareTags(runtime2) {
      return function(a, b) {
        if (a.runtime !== b.runtime) {
          return a.runtime === runtime2 ? -1 : 1;
        } else if (a.abi !== b.abi) {
          return a.abi ? -1 : 1;
        } else if (a.specificity !== b.specificity) {
          return a.specificity > b.specificity ? -1 : 1;
        } else {
          return 0;
        }
      };
    }
    function isElectron() {
      if (process.versions && process.versions.electron)
        return true;
      if (process.env.ELECTRON_RUN_AS_NODE)
        return true;
      return typeof window !== "undefined" && window.process && window.process.type === "renderer";
    }
    function isAlpine(platform2) {
      return platform2 === "linux" && fs.existsSync("/etc/alpine-release");
    }
    load2.parseTags = parseTags;
    load2.matchTags = matchTags;
    load2.compareTags = compareTags;
  }
});

// node_modules/bufferutil/fallback.js
var require_fallback = __commonJS({
  "node_modules/bufferutil/fallback.js"(exports, module2) {
    "use strict";
    var mask = (source, mask2, output, offset, length) => {
      for (var i = 0; i < length; i++) {
        output[offset + i] = source[i] ^ mask2[i & 3];
      }
    };
    var unmask = (buffer, mask2) => {
      const length = buffer.length;
      for (var i = 0; i < length; i++) {
        buffer[i] ^= mask2[i & 3];
      }
    };
    module2.exports = {mask, unmask};
  }
});

// node_modules/bufferutil/index.js
var require_bufferutil = __commonJS({
  "node_modules/bufferutil/index.js"(exports, module2) {
    "use strict";
    try {
      module2.exports = require_node_gyp_build()(__dirname);
    } catch (e) {
      module2.exports = require_fallback();
    }
  }
});

// node_modules/websocket/lib/WebSocketFrame.js
var require_WebSocketFrame = __commonJS({
  "node_modules/websocket/lib/WebSocketFrame.js"(exports, module2) {
    var bufferUtil = require_bufferutil();
    var bufferAllocUnsafe = require_utils().bufferAllocUnsafe;
    var DECODE_HEADER = 1;
    var WAITING_FOR_16_BIT_LENGTH = 2;
    var WAITING_FOR_64_BIT_LENGTH = 3;
    var WAITING_FOR_MASK_KEY = 4;
    var WAITING_FOR_PAYLOAD = 5;
    var COMPLETE = 6;
    function WebSocketFrame(maskBytes, frameHeader, config) {
      this.maskBytes = maskBytes;
      this.frameHeader = frameHeader;
      this.config = config;
      this.maxReceivedFrameSize = config.maxReceivedFrameSize;
      this.protocolError = false;
      this.frameTooLarge = false;
      this.invalidCloseFrameLength = false;
      this.parseState = DECODE_HEADER;
      this.closeStatus = -1;
    }
    WebSocketFrame.prototype.addData = function(bufferList) {
      if (this.parseState === DECODE_HEADER) {
        if (bufferList.length >= 2) {
          bufferList.joinInto(this.frameHeader, 0, 0, 2);
          bufferList.advance(2);
          var firstByte = this.frameHeader[0];
          var secondByte = this.frameHeader[1];
          this.fin = Boolean(firstByte & 128);
          this.rsv1 = Boolean(firstByte & 64);
          this.rsv2 = Boolean(firstByte & 32);
          this.rsv3 = Boolean(firstByte & 16);
          this.mask = Boolean(secondByte & 128);
          this.opcode = firstByte & 15;
          this.length = secondByte & 127;
          if (this.opcode >= 8) {
            if (this.length > 125) {
              this.protocolError = true;
              this.dropReason = "Illegal control frame longer than 125 bytes.";
              return true;
            }
            if (!this.fin) {
              this.protocolError = true;
              this.dropReason = "Control frames must not be fragmented.";
              return true;
            }
          }
          if (this.length === 126) {
            this.parseState = WAITING_FOR_16_BIT_LENGTH;
          } else if (this.length === 127) {
            this.parseState = WAITING_FOR_64_BIT_LENGTH;
          } else {
            this.parseState = WAITING_FOR_MASK_KEY;
          }
        }
      }
      if (this.parseState === WAITING_FOR_16_BIT_LENGTH) {
        if (bufferList.length >= 2) {
          bufferList.joinInto(this.frameHeader, 2, 0, 2);
          bufferList.advance(2);
          this.length = this.frameHeader.readUInt16BE(2);
          this.parseState = WAITING_FOR_MASK_KEY;
        }
      } else if (this.parseState === WAITING_FOR_64_BIT_LENGTH) {
        if (bufferList.length >= 8) {
          bufferList.joinInto(this.frameHeader, 2, 0, 8);
          bufferList.advance(8);
          var lengthPair = [
            this.frameHeader.readUInt32BE(2),
            this.frameHeader.readUInt32BE(2 + 4)
          ];
          if (lengthPair[0] !== 0) {
            this.protocolError = true;
            this.dropReason = "Unsupported 64-bit length frame received";
            return true;
          }
          this.length = lengthPair[1];
          this.parseState = WAITING_FOR_MASK_KEY;
        }
      }
      if (this.parseState === WAITING_FOR_MASK_KEY) {
        if (this.mask) {
          if (bufferList.length >= 4) {
            bufferList.joinInto(this.maskBytes, 0, 0, 4);
            bufferList.advance(4);
            this.parseState = WAITING_FOR_PAYLOAD;
          }
        } else {
          this.parseState = WAITING_FOR_PAYLOAD;
        }
      }
      if (this.parseState === WAITING_FOR_PAYLOAD) {
        if (this.length > this.maxReceivedFrameSize) {
          this.frameTooLarge = true;
          this.dropReason = "Frame size of " + this.length.toString(10) + " bytes exceeds maximum accepted frame size";
          return true;
        }
        if (this.length === 0) {
          this.binaryPayload = bufferAllocUnsafe(0);
          this.parseState = COMPLETE;
          return true;
        }
        if (bufferList.length >= this.length) {
          this.binaryPayload = bufferList.take(this.length);
          bufferList.advance(this.length);
          if (this.mask) {
            bufferUtil.unmask(this.binaryPayload, this.maskBytes);
          }
          if (this.opcode === 8) {
            if (this.length === 1) {
              this.binaryPayload = bufferAllocUnsafe(0);
              this.invalidCloseFrameLength = true;
            }
            if (this.length >= 2) {
              this.closeStatus = this.binaryPayload.readUInt16BE(0);
              this.binaryPayload = this.binaryPayload.slice(2);
            }
          }
          this.parseState = COMPLETE;
          return true;
        }
      }
      return false;
    };
    WebSocketFrame.prototype.throwAwayPayload = function(bufferList) {
      if (bufferList.length >= this.length) {
        bufferList.advance(this.length);
        this.parseState = COMPLETE;
        return true;
      }
      return false;
    };
    WebSocketFrame.prototype.toBuffer = function(nullMask) {
      var maskKey;
      var headerLength = 2;
      var data;
      var outputPos;
      var firstByte = 0;
      var secondByte = 0;
      if (this.fin) {
        firstByte |= 128;
      }
      if (this.rsv1) {
        firstByte |= 64;
      }
      if (this.rsv2) {
        firstByte |= 32;
      }
      if (this.rsv3) {
        firstByte |= 16;
      }
      if (this.mask) {
        secondByte |= 128;
      }
      firstByte |= this.opcode & 15;
      if (this.opcode === 8) {
        this.length = 2;
        if (this.binaryPayload) {
          this.length += this.binaryPayload.length;
        }
        data = bufferAllocUnsafe(this.length);
        data.writeUInt16BE(this.closeStatus, 0);
        if (this.length > 2) {
          this.binaryPayload.copy(data, 2);
        }
      } else if (this.binaryPayload) {
        data = this.binaryPayload;
        this.length = data.length;
      } else {
        this.length = 0;
      }
      if (this.length <= 125) {
        secondByte |= this.length & 127;
      } else if (this.length > 125 && this.length <= 65535) {
        secondByte |= 126;
        headerLength += 2;
      } else if (this.length > 65535) {
        secondByte |= 127;
        headerLength += 8;
      }
      var output = bufferAllocUnsafe(this.length + headerLength + (this.mask ? 4 : 0));
      output[0] = firstByte;
      output[1] = secondByte;
      outputPos = 2;
      if (this.length > 125 && this.length <= 65535) {
        output.writeUInt16BE(this.length, outputPos);
        outputPos += 2;
      } else if (this.length > 65535) {
        output.writeUInt32BE(0, outputPos);
        output.writeUInt32BE(this.length, outputPos + 4);
        outputPos += 8;
      }
      if (this.mask) {
        maskKey = nullMask ? 0 : Math.random() * 4294967295 >>> 0;
        this.maskBytes.writeUInt32BE(maskKey, 0);
        this.maskBytes.copy(output, outputPos);
        outputPos += 4;
        if (data) {
          bufferUtil.mask(data, this.maskBytes, output, outputPos, this.length);
        }
      } else if (data) {
        data.copy(output, outputPos);
      }
      return output;
    };
    WebSocketFrame.prototype.toString = function() {
      return "Opcode: " + this.opcode + ", fin: " + this.fin + ", length: " + this.length + ", hasPayload: " + Boolean(this.binaryPayload) + ", masked: " + this.mask;
    };
    module2.exports = WebSocketFrame;
  }
});

// node_modules/websocket/vendor/FastBufferList.js
var require_FastBufferList = __commonJS({
  "node_modules/websocket/vendor/FastBufferList.js"(exports, module2) {
    var Buffer2 = require("buffer").Buffer;
    var EventEmitter = require("events").EventEmitter;
    var bufferAllocUnsafe = require_utils().bufferAllocUnsafe;
    module2.exports = BufferList;
    module2.exports.BufferList = BufferList;
    function BufferList(opts) {
      if (!(this instanceof BufferList))
        return new BufferList(opts);
      EventEmitter.call(this);
      var self2 = this;
      if (typeof opts == "undefined")
        opts = {};
      self2.encoding = opts.encoding;
      var head = {next: null, buffer: null};
      var last = {next: null, buffer: null};
      var length = 0;
      self2.__defineGetter__("length", function() {
        return length;
      });
      var offset = 0;
      self2.write = function(buf) {
        if (!head.buffer) {
          head.buffer = buf;
          last = head;
        } else {
          last.next = {next: null, buffer: buf};
          last = last.next;
        }
        length += buf.length;
        self2.emit("write", buf);
        return true;
      };
      self2.end = function(buf) {
        if (Buffer2.isBuffer(buf))
          self2.write(buf);
      };
      self2.push = function() {
        var args = [].concat.apply([], arguments);
        args.forEach(self2.write);
        return self2;
      };
      self2.forEach = function(fn) {
        if (!head.buffer)
          return bufferAllocUnsafe(0);
        if (head.buffer.length - offset <= 0)
          return self2;
        var firstBuf = head.buffer.slice(offset);
        var b = {buffer: firstBuf, next: head.next};
        while (b && b.buffer) {
          var r = fn(b.buffer);
          if (r)
            break;
          b = b.next;
        }
        return self2;
      };
      self2.join = function(start, end) {
        if (!head.buffer)
          return bufferAllocUnsafe(0);
        if (start == void 0)
          start = 0;
        if (end == void 0)
          end = self2.length;
        var big = bufferAllocUnsafe(end - start);
        var ix = 0;
        self2.forEach(function(buffer) {
          if (start < ix + buffer.length && ix < end) {
            buffer.copy(big, Math.max(0, ix - start), Math.max(0, start - ix), Math.min(buffer.length, end - ix));
          }
          ix += buffer.length;
          if (ix > end)
            return true;
        });
        return big;
      };
      self2.joinInto = function(targetBuffer, targetStart, sourceStart, sourceEnd) {
        if (!head.buffer)
          return new bufferAllocUnsafe(0);
        if (sourceStart == void 0)
          sourceStart = 0;
        if (sourceEnd == void 0)
          sourceEnd = self2.length;
        var big = targetBuffer;
        if (big.length - targetStart < sourceEnd - sourceStart) {
          throw new Error("Insufficient space available in target Buffer.");
        }
        var ix = 0;
        self2.forEach(function(buffer) {
          if (sourceStart < ix + buffer.length && ix < sourceEnd) {
            buffer.copy(big, Math.max(targetStart, targetStart + ix - sourceStart), Math.max(0, sourceStart - ix), Math.min(buffer.length, sourceEnd - ix));
          }
          ix += buffer.length;
          if (ix > sourceEnd)
            return true;
        });
        return big;
      };
      self2.advance = function(n) {
        offset += n;
        length -= n;
        while (head.buffer && offset >= head.buffer.length) {
          offset -= head.buffer.length;
          head = head.next ? head.next : {buffer: null, next: null};
        }
        if (head.buffer === null)
          last = {next: null, buffer: null};
        self2.emit("advance", n);
        return self2;
      };
      self2.take = function(n, encoding) {
        if (n == void 0)
          n = self2.length;
        else if (typeof n !== "number") {
          encoding = n;
          n = self2.length;
        }
        var b = head;
        if (!encoding)
          encoding = self2.encoding;
        if (encoding) {
          var acc = "";
          self2.forEach(function(buffer) {
            if (n <= 0)
              return true;
            acc += buffer.toString(encoding, 0, Math.min(n, buffer.length));
            n -= buffer.length;
          });
          return acc;
        } else {
          return self2.join(0, n);
        }
      };
      self2.toString = function() {
        return self2.take("binary");
      };
    }
    require("util").inherits(BufferList, EventEmitter);
  }
});

// node_modules/utf-8-validate/fallback.js
var require_fallback2 = __commonJS({
  "node_modules/utf-8-validate/fallback.js"(exports, module2) {
    "use strict";
    function isValidUTF8(buf) {
      const len = buf.length;
      let i = 0;
      while (i < len) {
        if ((buf[i] & 128) === 0) {
          i++;
        } else if ((buf[i] & 224) === 192) {
          if (i + 1 === len || (buf[i + 1] & 192) !== 128 || (buf[i] & 254) === 192) {
            return false;
          }
          i += 2;
        } else if ((buf[i] & 240) === 224) {
          if (i + 2 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || buf[i] === 224 && (buf[i + 1] & 224) === 128 || buf[i] === 237 && (buf[i + 1] & 224) === 160) {
            return false;
          }
          i += 3;
        } else if ((buf[i] & 248) === 240) {
          if (i + 3 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || (buf[i + 3] & 192) !== 128 || buf[i] === 240 && (buf[i + 1] & 240) === 128 || buf[i] === 244 && buf[i + 1] > 143 || buf[i] > 244) {
            return false;
          }
          i += 4;
        } else {
          return false;
        }
      }
      return true;
    }
    module2.exports = isValidUTF8;
  }
});

// node_modules/utf-8-validate/index.js
var require_utf_8_validate = __commonJS({
  "node_modules/utf-8-validate/index.js"(exports, module2) {
    "use strict";
    try {
      module2.exports = require_node_gyp_build()(__dirname);
    } catch (e) {
      module2.exports = require_fallback2();
    }
  }
});

// node_modules/websocket/lib/WebSocketConnection.js
var require_WebSocketConnection = __commonJS({
  "node_modules/websocket/lib/WebSocketConnection.js"(exports, module2) {
    var util = require("util");
    var utils = require_utils();
    var EventEmitter = require("events").EventEmitter;
    var WebSocketFrame = require_WebSocketFrame();
    var BufferList = require_FastBufferList();
    var isValidUTF8 = require_utf_8_validate();
    var bufferAllocUnsafe = utils.bufferAllocUnsafe;
    var bufferFromString = utils.bufferFromString;
    var STATE_OPEN = "open";
    var STATE_PEER_REQUESTED_CLOSE = "peer_requested_close";
    var STATE_ENDING = "ending";
    var STATE_CLOSED = "closed";
    var setImmediateImpl = "setImmediate" in global ? global.setImmediate.bind(global) : process.nextTick.bind(process);
    var idCounter = 0;
    function WebSocketConnection(socket, extensions, protocol, maskOutgoingPackets, config) {
      this._debug = utils.BufferingLogger("websocket:connection", ++idCounter);
      this._debug("constructor");
      if (this._debug.enabled) {
        instrumentSocketForDebugging(this, socket);
      }
      EventEmitter.call(this);
      this._pingListenerCount = 0;
      this.on("newListener", function(ev) {
        if (ev === "ping") {
          this._pingListenerCount++;
        }
      }).on("removeListener", function(ev) {
        if (ev === "ping") {
          this._pingListenerCount--;
        }
      });
      this.config = config;
      this.socket = socket;
      this.protocol = protocol;
      this.extensions = extensions;
      this.remoteAddress = socket.remoteAddress;
      this.closeReasonCode = -1;
      this.closeDescription = null;
      this.closeEventEmitted = false;
      this.maskOutgoingPackets = maskOutgoingPackets;
      this.maskBytes = bufferAllocUnsafe(4);
      this.frameHeader = bufferAllocUnsafe(10);
      this.bufferList = new BufferList();
      this.currentFrame = new WebSocketFrame(this.maskBytes, this.frameHeader, this.config);
      this.fragmentationSize = 0;
      this.frameQueue = [];
      this.connected = true;
      this.state = STATE_OPEN;
      this.waitingForCloseResponse = false;
      this.receivedEnd = false;
      this.closeTimeout = this.config.closeTimeout;
      this.assembleFragments = this.config.assembleFragments;
      this.maxReceivedMessageSize = this.config.maxReceivedMessageSize;
      this.outputBufferFull = false;
      this.inputPaused = false;
      this.receivedDataHandler = this.processReceivedData.bind(this);
      this._closeTimerHandler = this.handleCloseTimer.bind(this);
      this.socket.setNoDelay(this.config.disableNagleAlgorithm);
      this.socket.setTimeout(0);
      if (this.config.keepalive && !this.config.useNativeKeepalive) {
        if (typeof this.config.keepaliveInterval !== "number") {
          throw new Error("keepaliveInterval must be specified and numeric if keepalive is true.");
        }
        this._keepaliveTimerHandler = this.handleKeepaliveTimer.bind(this);
        this.setKeepaliveTimer();
        if (this.config.dropConnectionOnKeepaliveTimeout) {
          if (typeof this.config.keepaliveGracePeriod !== "number") {
            throw new Error("keepaliveGracePeriod  must be specified and numeric if dropConnectionOnKeepaliveTimeout is true.");
          }
          this._gracePeriodTimerHandler = this.handleGracePeriodTimer.bind(this);
        }
      } else if (this.config.keepalive && this.config.useNativeKeepalive) {
        if (!("setKeepAlive" in this.socket)) {
          throw new Error("Unable to use native keepalive: unsupported by this version of Node.");
        }
        this.socket.setKeepAlive(true, this.config.keepaliveInterval);
      }
      this.socket.removeAllListeners("error");
    }
    WebSocketConnection.CLOSE_REASON_NORMAL = 1e3;
    WebSocketConnection.CLOSE_REASON_GOING_AWAY = 1001;
    WebSocketConnection.CLOSE_REASON_PROTOCOL_ERROR = 1002;
    WebSocketConnection.CLOSE_REASON_UNPROCESSABLE_INPUT = 1003;
    WebSocketConnection.CLOSE_REASON_RESERVED = 1004;
    WebSocketConnection.CLOSE_REASON_NOT_PROVIDED = 1005;
    WebSocketConnection.CLOSE_REASON_ABNORMAL = 1006;
    WebSocketConnection.CLOSE_REASON_INVALID_DATA = 1007;
    WebSocketConnection.CLOSE_REASON_POLICY_VIOLATION = 1008;
    WebSocketConnection.CLOSE_REASON_MESSAGE_TOO_BIG = 1009;
    WebSocketConnection.CLOSE_REASON_EXTENSION_REQUIRED = 1010;
    WebSocketConnection.CLOSE_REASON_INTERNAL_SERVER_ERROR = 1011;
    WebSocketConnection.CLOSE_REASON_TLS_HANDSHAKE_FAILED = 1015;
    WebSocketConnection.CLOSE_DESCRIPTIONS = {
      1e3: "Normal connection closure",
      1001: "Remote peer is going away",
      1002: "Protocol error",
      1003: "Unprocessable input",
      1004: "Reserved",
      1005: "Reason not provided",
      1006: "Abnormal closure, no further detail available",
      1007: "Invalid data received",
      1008: "Policy violation",
      1009: "Message too big",
      1010: "Extension requested by client is required",
      1011: "Internal Server Error",
      1015: "TLS Handshake Failed"
    };
    function validateCloseReason(code) {
      if (code < 1e3) {
        return false;
      }
      if (code >= 1e3 && code <= 2999) {
        return [1e3, 1001, 1002, 1003, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015].indexOf(code) !== -1;
      }
      if (code >= 3e3 && code <= 3999) {
        return true;
      }
      if (code >= 4e3 && code <= 4999) {
        return true;
      }
      if (code >= 5e3) {
        return false;
      }
    }
    util.inherits(WebSocketConnection, EventEmitter);
    WebSocketConnection.prototype._addSocketEventListeners = function() {
      this.socket.on("error", this.handleSocketError.bind(this));
      this.socket.on("end", this.handleSocketEnd.bind(this));
      this.socket.on("close", this.handleSocketClose.bind(this));
      this.socket.on("drain", this.handleSocketDrain.bind(this));
      this.socket.on("pause", this.handleSocketPause.bind(this));
      this.socket.on("resume", this.handleSocketResume.bind(this));
      this.socket.on("data", this.handleSocketData.bind(this));
    };
    WebSocketConnection.prototype.setKeepaliveTimer = function() {
      this._debug("setKeepaliveTimer");
      if (!this.config.keepalive || this.config.useNativeKeepalive) {
        return;
      }
      this.clearKeepaliveTimer();
      this.clearGracePeriodTimer();
      this._keepaliveTimeoutID = setTimeout(this._keepaliveTimerHandler, this.config.keepaliveInterval);
    };
    WebSocketConnection.prototype.clearKeepaliveTimer = function() {
      if (this._keepaliveTimeoutID) {
        clearTimeout(this._keepaliveTimeoutID);
      }
    };
    WebSocketConnection.prototype.handleKeepaliveTimer = function() {
      this._debug("handleKeepaliveTimer");
      this._keepaliveTimeoutID = null;
      this.ping();
      if (this.config.dropConnectionOnKeepaliveTimeout) {
        this.setGracePeriodTimer();
      } else {
        this.setKeepaliveTimer();
      }
    };
    WebSocketConnection.prototype.setGracePeriodTimer = function() {
      this._debug("setGracePeriodTimer");
      this.clearGracePeriodTimer();
      this._gracePeriodTimeoutID = setTimeout(this._gracePeriodTimerHandler, this.config.keepaliveGracePeriod);
    };
    WebSocketConnection.prototype.clearGracePeriodTimer = function() {
      if (this._gracePeriodTimeoutID) {
        clearTimeout(this._gracePeriodTimeoutID);
      }
    };
    WebSocketConnection.prototype.handleGracePeriodTimer = function() {
      this._debug("handleGracePeriodTimer");
      this._gracePeriodTimeoutID = null;
      this.drop(WebSocketConnection.CLOSE_REASON_ABNORMAL, "Peer not responding.", true);
    };
    WebSocketConnection.prototype.handleSocketData = function(data) {
      this._debug("handleSocketData");
      this.setKeepaliveTimer();
      this.bufferList.write(data);
      this.processReceivedData();
    };
    WebSocketConnection.prototype.processReceivedData = function() {
      this._debug("processReceivedData");
      if (!this.connected) {
        return;
      }
      if (this.inputPaused) {
        return;
      }
      var frame = this.currentFrame;
      if (!frame.addData(this.bufferList)) {
        this._debug("-- insufficient data for frame");
        return;
      }
      var self2 = this;
      if (frame.protocolError) {
        this._debug("-- protocol error");
        process.nextTick(function() {
          self2.drop(WebSocketConnection.CLOSE_REASON_PROTOCOL_ERROR, frame.dropReason);
        });
        return;
      } else if (frame.frameTooLarge) {
        this._debug("-- frame too large");
        process.nextTick(function() {
          self2.drop(WebSocketConnection.CLOSE_REASON_MESSAGE_TOO_BIG, frame.dropReason);
        });
        return;
      }
      if (frame.rsv1 || frame.rsv2 || frame.rsv3) {
        this._debug("-- illegal rsv flag");
        process.nextTick(function() {
          self2.drop(WebSocketConnection.CLOSE_REASON_PROTOCOL_ERROR, "Unsupported usage of rsv bits without negotiated extension.");
        });
        return;
      }
      if (!this.assembleFragments) {
        this._debug("-- emitting frame");
        process.nextTick(function() {
          self2.emit("frame", frame);
        });
      }
      process.nextTick(function() {
        self2.processFrame(frame);
      });
      this.currentFrame = new WebSocketFrame(this.maskBytes, this.frameHeader, this.config);
      if (this.bufferList.length > 0) {
        setImmediateImpl(this.receivedDataHandler);
      }
    };
    WebSocketConnection.prototype.handleSocketError = function(error3) {
      this._debug("handleSocketError: %j", error3);
      if (this.state === STATE_CLOSED) {
        this._debug("  --- Socket 'error' after 'close'");
        return;
      }
      this.closeReasonCode = WebSocketConnection.CLOSE_REASON_ABNORMAL;
      this.closeDescription = "Socket Error: " + error3.syscall + " " + error3.code;
      this.connected = false;
      this.state = STATE_CLOSED;
      this.fragmentationSize = 0;
      if (utils.eventEmitterListenerCount(this, "error") > 0) {
        this.emit("error", error3);
      }
      this.socket.destroy();
      this._debug.printOutput();
    };
    WebSocketConnection.prototype.handleSocketEnd = function() {
      this._debug("handleSocketEnd: received socket end.  state = %s", this.state);
      this.receivedEnd = true;
      if (this.state === STATE_CLOSED) {
        this._debug("  --- Socket 'end' after 'close'");
        return;
      }
      if (this.state !== STATE_PEER_REQUESTED_CLOSE && this.state !== STATE_ENDING) {
        this._debug("  --- UNEXPECTED socket end.");
        this.socket.end();
      }
    };
    WebSocketConnection.prototype.handleSocketClose = function(hadError) {
      this._debug("handleSocketClose: received socket close");
      this.socketHadError = hadError;
      this.connected = false;
      this.state = STATE_CLOSED;
      if (this.closeReasonCode === -1) {
        this.closeReasonCode = WebSocketConnection.CLOSE_REASON_ABNORMAL;
        this.closeDescription = "Connection dropped by remote peer.";
      }
      this.clearCloseTimer();
      this.clearKeepaliveTimer();
      this.clearGracePeriodTimer();
      if (!this.closeEventEmitted) {
        this.closeEventEmitted = true;
        this._debug("-- Emitting WebSocketConnection close event");
        this.emit("close", this.closeReasonCode, this.closeDescription);
      }
    };
    WebSocketConnection.prototype.handleSocketDrain = function() {
      this._debug("handleSocketDrain: socket drain event");
      this.outputBufferFull = false;
      this.emit("drain");
    };
    WebSocketConnection.prototype.handleSocketPause = function() {
      this._debug("handleSocketPause: socket pause event");
      this.inputPaused = true;
      this.emit("pause");
    };
    WebSocketConnection.prototype.handleSocketResume = function() {
      this._debug("handleSocketResume: socket resume event");
      this.inputPaused = false;
      this.emit("resume");
      this.processReceivedData();
    };
    WebSocketConnection.prototype.pause = function() {
      this._debug("pause: pause requested");
      this.socket.pause();
    };
    WebSocketConnection.prototype.resume = function() {
      this._debug("resume: resume requested");
      this.socket.resume();
    };
    WebSocketConnection.prototype.close = function(reasonCode, description) {
      if (this.connected) {
        this._debug("close: Initating clean WebSocket close sequence.");
        if (typeof reasonCode !== "number") {
          reasonCode = WebSocketConnection.CLOSE_REASON_NORMAL;
        }
        if (!validateCloseReason(reasonCode)) {
          throw new Error("Close code " + reasonCode + " is not valid.");
        }
        if (typeof description !== "string") {
          description = WebSocketConnection.CLOSE_DESCRIPTIONS[reasonCode];
        }
        this.closeReasonCode = reasonCode;
        this.closeDescription = description;
        this.setCloseTimer();
        this.sendCloseFrame(this.closeReasonCode, this.closeDescription);
        this.state = STATE_ENDING;
        this.connected = false;
      }
    };
    WebSocketConnection.prototype.drop = function(reasonCode, description, skipCloseFrame) {
      this._debug("drop");
      if (typeof reasonCode !== "number") {
        reasonCode = WebSocketConnection.CLOSE_REASON_PROTOCOL_ERROR;
      }
      if (typeof description !== "string") {
        description = WebSocketConnection.CLOSE_DESCRIPTIONS[reasonCode];
      }
      this._debug("Forcefully dropping connection. skipCloseFrame: %s, code: %d, description: %s", skipCloseFrame, reasonCode, description);
      this.closeReasonCode = reasonCode;
      this.closeDescription = description;
      this.frameQueue = [];
      this.fragmentationSize = 0;
      if (!skipCloseFrame) {
        this.sendCloseFrame(reasonCode, description);
      }
      this.connected = false;
      this.state = STATE_CLOSED;
      this.clearCloseTimer();
      this.clearKeepaliveTimer();
      this.clearGracePeriodTimer();
      if (!this.closeEventEmitted) {
        this.closeEventEmitted = true;
        this._debug("Emitting WebSocketConnection close event");
        this.emit("close", this.closeReasonCode, this.closeDescription);
      }
      this._debug("Drop: destroying socket");
      this.socket.destroy();
    };
    WebSocketConnection.prototype.setCloseTimer = function() {
      this._debug("setCloseTimer");
      this.clearCloseTimer();
      this._debug("Setting close timer");
      this.waitingForCloseResponse = true;
      this.closeTimer = setTimeout(this._closeTimerHandler, this.closeTimeout);
    };
    WebSocketConnection.prototype.clearCloseTimer = function() {
      this._debug("clearCloseTimer");
      if (this.closeTimer) {
        this._debug("Clearing close timer");
        clearTimeout(this.closeTimer);
        this.waitingForCloseResponse = false;
        this.closeTimer = null;
      }
    };
    WebSocketConnection.prototype.handleCloseTimer = function() {
      this._debug("handleCloseTimer");
      this.closeTimer = null;
      if (this.waitingForCloseResponse) {
        this._debug("Close response not received from client.  Forcing socket end.");
        this.waitingForCloseResponse = false;
        this.state = STATE_CLOSED;
        this.socket.end();
      }
    };
    WebSocketConnection.prototype.processFrame = function(frame) {
      this._debug("processFrame");
      this._debug(" -- frame: %s", frame);
      if (this.frameQueue.length !== 0 && (frame.opcode > 0 && frame.opcode < 8)) {
        this.drop(WebSocketConnection.CLOSE_REASON_PROTOCOL_ERROR, "Illegal frame opcode 0x" + frame.opcode.toString(16) + " received in middle of fragmented message.");
        return;
      }
      switch (frame.opcode) {
        case 2:
          this._debug("-- Binary Frame");
          if (this.assembleFragments) {
            if (frame.fin) {
              this._debug("---- Emitting 'message' event");
              this.emit("message", {
                type: "binary",
                binaryData: frame.binaryPayload
              });
            } else {
              this.frameQueue.push(frame);
              this.fragmentationSize = frame.length;
            }
          }
          break;
        case 1:
          this._debug("-- Text Frame");
          if (this.assembleFragments) {
            if (frame.fin) {
              if (!isValidUTF8(frame.binaryPayload)) {
                this.drop(WebSocketConnection.CLOSE_REASON_INVALID_DATA, "Invalid UTF-8 Data Received");
                return;
              }
              this._debug("---- Emitting 'message' event");
              this.emit("message", {
                type: "utf8",
                utf8Data: frame.binaryPayload.toString("utf8")
              });
            } else {
              this.frameQueue.push(frame);
              this.fragmentationSize = frame.length;
            }
          }
          break;
        case 0:
          this._debug("-- Continuation Frame");
          if (this.assembleFragments) {
            if (this.frameQueue.length === 0) {
              this.drop(WebSocketConnection.CLOSE_REASON_PROTOCOL_ERROR, "Unexpected Continuation Frame");
              return;
            }
            this.fragmentationSize += frame.length;
            if (this.fragmentationSize > this.maxReceivedMessageSize) {
              this.drop(WebSocketConnection.CLOSE_REASON_MESSAGE_TOO_BIG, "Maximum message size exceeded.");
              return;
            }
            this.frameQueue.push(frame);
            if (frame.fin) {
              var bytesCopied = 0;
              var binaryPayload = bufferAllocUnsafe(this.fragmentationSize);
              var opcode = this.frameQueue[0].opcode;
              this.frameQueue.forEach(function(currentFrame) {
                currentFrame.binaryPayload.copy(binaryPayload, bytesCopied);
                bytesCopied += currentFrame.binaryPayload.length;
              });
              this.frameQueue = [];
              this.fragmentationSize = 0;
              switch (opcode) {
                case 2:
                  this.emit("message", {
                    type: "binary",
                    binaryData: binaryPayload
                  });
                  break;
                case 1:
                  if (!isValidUTF8(binaryPayload)) {
                    this.drop(WebSocketConnection.CLOSE_REASON_INVALID_DATA, "Invalid UTF-8 Data Received");
                    return;
                  }
                  this.emit("message", {
                    type: "utf8",
                    utf8Data: binaryPayload.toString("utf8")
                  });
                  break;
                default:
                  this.drop(WebSocketConnection.CLOSE_REASON_PROTOCOL_ERROR, "Unexpected first opcode in fragmentation sequence: 0x" + opcode.toString(16));
                  return;
              }
            }
          }
          break;
        case 9:
          this._debug("-- Ping Frame");
          if (this._pingListenerCount > 0) {
            var cancelled = false;
            var cancel = function() {
              cancelled = true;
            };
            this.emit("ping", cancel, frame.binaryPayload);
            if (!cancelled) {
              this.pong(frame.binaryPayload);
            }
          } else {
            this.pong(frame.binaryPayload);
          }
          break;
        case 10:
          this._debug("-- Pong Frame");
          this.emit("pong", frame.binaryPayload);
          break;
        case 8:
          this._debug("-- Close Frame");
          if (this.waitingForCloseResponse) {
            this._debug("---- Got close response from peer.  Completing closing handshake.");
            this.clearCloseTimer();
            this.waitingForCloseResponse = false;
            this.state = STATE_CLOSED;
            this.socket.end();
            return;
          }
          this._debug("---- Closing handshake initiated by peer.");
          this.state = STATE_PEER_REQUESTED_CLOSE;
          var respondCloseReasonCode;
          if (frame.invalidCloseFrameLength) {
            this.closeReasonCode = 1005;
            respondCloseReasonCode = WebSocketConnection.CLOSE_REASON_PROTOCOL_ERROR;
          } else if (frame.closeStatus === -1 || validateCloseReason(frame.closeStatus)) {
            this.closeReasonCode = frame.closeStatus;
            respondCloseReasonCode = WebSocketConnection.CLOSE_REASON_NORMAL;
          } else {
            this.closeReasonCode = frame.closeStatus;
            respondCloseReasonCode = WebSocketConnection.CLOSE_REASON_PROTOCOL_ERROR;
          }
          if (frame.binaryPayload.length > 1) {
            if (!isValidUTF8(frame.binaryPayload)) {
              this.drop(WebSocketConnection.CLOSE_REASON_INVALID_DATA, "Invalid UTF-8 Data Received");
              return;
            }
            this.closeDescription = frame.binaryPayload.toString("utf8");
          } else {
            this.closeDescription = WebSocketConnection.CLOSE_DESCRIPTIONS[this.closeReasonCode];
          }
          this._debug("------ Remote peer %s - code: %d - %s - close frame payload length: %d", this.remoteAddress, this.closeReasonCode, this.closeDescription, frame.length);
          this._debug("------ responding to remote peer's close request.");
          this.sendCloseFrame(respondCloseReasonCode, null);
          this.connected = false;
          break;
        default:
          this._debug("-- Unrecognized Opcode %d", frame.opcode);
          this.drop(WebSocketConnection.CLOSE_REASON_PROTOCOL_ERROR, "Unrecognized Opcode: 0x" + frame.opcode.toString(16));
          break;
      }
    };
    WebSocketConnection.prototype.send = function(data, cb) {
      this._debug("send");
      if (Buffer.isBuffer(data)) {
        this.sendBytes(data, cb);
      } else if (typeof data["toString"] === "function") {
        this.sendUTF(data, cb);
      } else {
        throw new Error("Data provided must either be a Node Buffer or implement toString()");
      }
    };
    WebSocketConnection.prototype.sendUTF = function(data, cb) {
      data = bufferFromString(data.toString(), "utf8");
      this._debug("sendUTF: %d bytes", data.length);
      var frame = new WebSocketFrame(this.maskBytes, this.frameHeader, this.config);
      frame.opcode = 1;
      frame.binaryPayload = data;
      this.fragmentAndSend(frame, cb);
    };
    WebSocketConnection.prototype.sendBytes = function(data, cb) {
      this._debug("sendBytes");
      if (!Buffer.isBuffer(data)) {
        throw new Error("You must pass a Node Buffer object to WebSocketConnection.prototype.sendBytes()");
      }
      var frame = new WebSocketFrame(this.maskBytes, this.frameHeader, this.config);
      frame.opcode = 2;
      frame.binaryPayload = data;
      this.fragmentAndSend(frame, cb);
    };
    WebSocketConnection.prototype.ping = function(data) {
      this._debug("ping");
      var frame = new WebSocketFrame(this.maskBytes, this.frameHeader, this.config);
      frame.opcode = 9;
      frame.fin = true;
      if (data) {
        if (!Buffer.isBuffer(data)) {
          data = bufferFromString(data.toString(), "utf8");
        }
        if (data.length > 125) {
          this._debug("WebSocket: Data for ping is longer than 125 bytes.  Truncating.");
          data = data.slice(0, 124);
        }
        frame.binaryPayload = data;
      }
      this.sendFrame(frame);
    };
    WebSocketConnection.prototype.pong = function(binaryPayload) {
      this._debug("pong");
      var frame = new WebSocketFrame(this.maskBytes, this.frameHeader, this.config);
      frame.opcode = 10;
      if (Buffer.isBuffer(binaryPayload) && binaryPayload.length > 125) {
        this._debug("WebSocket: Data for pong is longer than 125 bytes.  Truncating.");
        binaryPayload = binaryPayload.slice(0, 124);
      }
      frame.binaryPayload = binaryPayload;
      frame.fin = true;
      this.sendFrame(frame);
    };
    WebSocketConnection.prototype.fragmentAndSend = function(frame, cb) {
      this._debug("fragmentAndSend");
      if (frame.opcode > 7) {
        throw new Error("You cannot fragment control frames.");
      }
      var threshold = this.config.fragmentationThreshold;
      var length = frame.binaryPayload.length;
      if (!this.config.fragmentOutgoingMessages || frame.binaryPayload && length <= threshold) {
        frame.fin = true;
        this.sendFrame(frame, cb);
        return;
      }
      var numFragments = Math.ceil(length / threshold);
      var sentFragments = 0;
      var sentCallback = function fragmentSentCallback(err) {
        if (err) {
          if (typeof cb === "function") {
            cb(err);
            cb = null;
          }
          return;
        }
        ++sentFragments;
        if (sentFragments === numFragments && typeof cb === "function") {
          cb();
        }
      };
      for (var i = 1; i <= numFragments; i++) {
        var currentFrame = new WebSocketFrame(this.maskBytes, this.frameHeader, this.config);
        currentFrame.opcode = i === 1 ? frame.opcode : 0;
        currentFrame.fin = i === numFragments;
        var currentLength = i === numFragments ? length - threshold * (i - 1) : threshold;
        var sliceStart = threshold * (i - 1);
        currentFrame.binaryPayload = frame.binaryPayload.slice(sliceStart, sliceStart + currentLength);
        this.sendFrame(currentFrame, sentCallback);
      }
    };
    WebSocketConnection.prototype.sendCloseFrame = function(reasonCode, description, cb) {
      if (typeof reasonCode !== "number") {
        reasonCode = WebSocketConnection.CLOSE_REASON_NORMAL;
      }
      this._debug("sendCloseFrame state: %s, reasonCode: %d, description: %s", this.state, reasonCode, description);
      if (this.state !== STATE_OPEN && this.state !== STATE_PEER_REQUESTED_CLOSE) {
        return;
      }
      var frame = new WebSocketFrame(this.maskBytes, this.frameHeader, this.config);
      frame.fin = true;
      frame.opcode = 8;
      frame.closeStatus = reasonCode;
      if (typeof description === "string") {
        frame.binaryPayload = bufferFromString(description, "utf8");
      }
      this.sendFrame(frame, cb);
      this.socket.end();
    };
    WebSocketConnection.prototype.sendFrame = function(frame, cb) {
      this._debug("sendFrame");
      frame.mask = this.maskOutgoingPackets;
      var flushed = this.socket.write(frame.toBuffer(), cb);
      this.outputBufferFull = !flushed;
      return flushed;
    };
    module2.exports = WebSocketConnection;
    function instrumentSocketForDebugging(connection, socket) {
      if (!connection._debug.enabled) {
        return;
      }
      var originalSocketEmit = socket.emit;
      socket.emit = function(event) {
        connection._debug("||| Socket Event  '%s'", event);
        originalSocketEmit.apply(this, arguments);
      };
      for (var key in socket) {
        if (typeof socket[key] !== "function") {
          continue;
        }
        if (["emit"].indexOf(key) !== -1) {
          continue;
        }
        (function(key2) {
          var original = socket[key2];
          if (key2 === "on") {
            socket[key2] = function proxyMethod__EventEmitter__On() {
              connection._debug("||| Socket method called:  %s (%s)", key2, arguments[0]);
              return original.apply(this, arguments);
            };
            return;
          }
          socket[key2] = function proxyMethod() {
            connection._debug("||| Socket method called:  %s", key2);
            return original.apply(this, arguments);
          };
        })(key);
      }
    }
  }
});

// node_modules/websocket/lib/WebSocketRequest.js
var require_WebSocketRequest = __commonJS({
  "node_modules/websocket/lib/WebSocketRequest.js"(exports, module2) {
    var crypto = require("crypto");
    var util = require("util");
    var url = require("url");
    var EventEmitter = require("events").EventEmitter;
    var WebSocketConnection = require_WebSocketConnection();
    var headerValueSplitRegExp = /,\s*/;
    var headerParamSplitRegExp = /;\s*/;
    var headerSanitizeRegExp = /[\r\n]/g;
    var xForwardedForSeparatorRegExp = /,\s*/;
    var separators = [
      "(",
      ")",
      "<",
      ">",
      "@",
      ",",
      ";",
      ":",
      "\\",
      '"',
      "/",
      "[",
      "]",
      "?",
      "=",
      "{",
      "}",
      " ",
      String.fromCharCode(9)
    ];
    var controlChars = [String.fromCharCode(127)];
    for (var i = 0; i < 31; i++) {
      controlChars.push(String.fromCharCode(i));
    }
    var cookieNameValidateRegEx = /([\x00-\x20\x22\x28\x29\x2c\x2f\x3a-\x3f\x40\x5b-\x5e\x7b\x7d\x7f])/;
    var cookieValueValidateRegEx = /[^\x21\x23-\x2b\x2d-\x3a\x3c-\x5b\x5d-\x7e]/;
    var cookieValueDQuoteValidateRegEx = /^"[^"]*"$/;
    var controlCharsAndSemicolonRegEx = /[\x00-\x20\x3b]/g;
    var cookieSeparatorRegEx = /[;,] */;
    var httpStatusDescriptions = {
      100: "Continue",
      101: "Switching Protocols",
      200: "OK",
      201: "Created",
      203: "Non-Authoritative Information",
      204: "No Content",
      205: "Reset Content",
      206: "Partial Content",
      300: "Multiple Choices",
      301: "Moved Permanently",
      302: "Found",
      303: "See Other",
      304: "Not Modified",
      305: "Use Proxy",
      307: "Temporary Redirect",
      400: "Bad Request",
      401: "Unauthorized",
      402: "Payment Required",
      403: "Forbidden",
      404: "Not Found",
      406: "Not Acceptable",
      407: "Proxy Authorization Required",
      408: "Request Timeout",
      409: "Conflict",
      410: "Gone",
      411: "Length Required",
      412: "Precondition Failed",
      413: "Request Entity Too Long",
      414: "Request-URI Too Long",
      415: "Unsupported Media Type",
      416: "Requested Range Not Satisfiable",
      417: "Expectation Failed",
      426: "Upgrade Required",
      500: "Internal Server Error",
      501: "Not Implemented",
      502: "Bad Gateway",
      503: "Service Unavailable",
      504: "Gateway Timeout",
      505: "HTTP Version Not Supported"
    };
    function WebSocketRequest(socket, httpRequest, serverConfig) {
      EventEmitter.call(this);
      this.socket = socket;
      this.httpRequest = httpRequest;
      this.resource = httpRequest.url;
      this.remoteAddress = socket.remoteAddress;
      this.remoteAddresses = [this.remoteAddress];
      this.serverConfig = serverConfig;
      this._socketIsClosing = false;
      this._socketCloseHandler = this._handleSocketCloseBeforeAccept.bind(this);
      this.socket.on("end", this._socketCloseHandler);
      this.socket.on("close", this._socketCloseHandler);
      this._resolved = false;
    }
    util.inherits(WebSocketRequest, EventEmitter);
    WebSocketRequest.prototype.readHandshake = function() {
      var self2 = this;
      var request = this.httpRequest;
      this.resourceURL = url.parse(this.resource, true);
      this.host = request.headers["host"];
      if (!this.host) {
        throw new Error("Client must provide a Host header.");
      }
      this.key = request.headers["sec-websocket-key"];
      if (!this.key) {
        throw new Error("Client must provide a value for Sec-WebSocket-Key.");
      }
      this.webSocketVersion = parseInt(request.headers["sec-websocket-version"], 10);
      if (!this.webSocketVersion || isNaN(this.webSocketVersion)) {
        throw new Error("Client must provide a value for Sec-WebSocket-Version.");
      }
      switch (this.webSocketVersion) {
        case 8:
        case 13:
          break;
        default:
          var e = new Error("Unsupported websocket client version: " + this.webSocketVersion + "Only versions 8 and 13 are supported.");
          e.httpCode = 426;
          e.headers = {
            "Sec-WebSocket-Version": "13"
          };
          throw e;
      }
      if (this.webSocketVersion === 13) {
        this.origin = request.headers["origin"];
      } else if (this.webSocketVersion === 8) {
        this.origin = request.headers["sec-websocket-origin"];
      }
      var protocolString = request.headers["sec-websocket-protocol"];
      this.protocolFullCaseMap = {};
      this.requestedProtocols = [];
      if (protocolString) {
        var requestedProtocolsFullCase = protocolString.split(headerValueSplitRegExp);
        requestedProtocolsFullCase.forEach(function(protocol) {
          var lcProtocol = protocol.toLocaleLowerCase();
          self2.requestedProtocols.push(lcProtocol);
          self2.protocolFullCaseMap[lcProtocol] = protocol;
        });
      }
      if (!this.serverConfig.ignoreXForwardedFor && request.headers["x-forwarded-for"]) {
        var immediatePeerIP = this.remoteAddress;
        this.remoteAddresses = request.headers["x-forwarded-for"].split(xForwardedForSeparatorRegExp);
        this.remoteAddresses.push(immediatePeerIP);
        this.remoteAddress = this.remoteAddresses[0];
      }
      if (this.serverConfig.parseExtensions) {
        var extensionsString = request.headers["sec-websocket-extensions"];
        this.requestedExtensions = this.parseExtensions(extensionsString);
      } else {
        this.requestedExtensions = [];
      }
      if (this.serverConfig.parseCookies) {
        var cookieString = request.headers["cookie"];
        this.cookies = this.parseCookies(cookieString);
      } else {
        this.cookies = [];
      }
    };
    WebSocketRequest.prototype.parseExtensions = function(extensionsString) {
      if (!extensionsString || extensionsString.length === 0) {
        return [];
      }
      var extensions = extensionsString.toLocaleLowerCase().split(headerValueSplitRegExp);
      extensions.forEach(function(extension, index2, array) {
        var params = extension.split(headerParamSplitRegExp);
        var extensionName = params[0];
        var extensionParams = params.slice(1);
        extensionParams.forEach(function(rawParam, index3, array2) {
          var arr = rawParam.split("=");
          var obj2 = {
            name: arr[0],
            value: arr[1]
          };
          array2.splice(index3, 1, obj2);
        });
        var obj = {
          name: extensionName,
          params: extensionParams
        };
        array.splice(index2, 1, obj);
      });
      return extensions;
    };
    WebSocketRequest.prototype.parseCookies = function(str) {
      if (!str || typeof str !== "string") {
        return [];
      }
      var cookies = [];
      var pairs = str.split(cookieSeparatorRegEx);
      pairs.forEach(function(pair) {
        var eq_idx = pair.indexOf("=");
        if (eq_idx === -1) {
          cookies.push({
            name: pair,
            value: null
          });
          return;
        }
        var key = pair.substr(0, eq_idx).trim();
        var val = pair.substr(++eq_idx, pair.length).trim();
        if (val[0] === '"') {
          val = val.slice(1, -1);
        }
        cookies.push({
          name: key,
          value: decodeURIComponent(val)
        });
      });
      return cookies;
    };
    WebSocketRequest.prototype.accept = function(acceptedProtocol, allowedOrigin, cookies) {
      this._verifyResolution();
      var protocolFullCase;
      if (acceptedProtocol) {
        protocolFullCase = this.protocolFullCaseMap[acceptedProtocol.toLocaleLowerCase()];
        if (typeof protocolFullCase === "undefined") {
          protocolFullCase = acceptedProtocol;
        }
      } else {
        protocolFullCase = acceptedProtocol;
      }
      this.protocolFullCaseMap = null;
      var sha1 = crypto.createHash("sha1");
      sha1.update(this.key + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11");
      var acceptKey = sha1.digest("base64");
      var response = "HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: " + acceptKey + "\r\n";
      if (protocolFullCase) {
        for (var i2 = 0; i2 < protocolFullCase.length; i2++) {
          var charCode = protocolFullCase.charCodeAt(i2);
          var character = protocolFullCase.charAt(i2);
          if (charCode < 33 || charCode > 126 || separators.indexOf(character) !== -1) {
            this.reject(500);
            throw new Error('Illegal character "' + String.fromCharCode(character) + '" in subprotocol.');
          }
        }
        if (this.requestedProtocols.indexOf(acceptedProtocol) === -1) {
          this.reject(500);
          throw new Error("Specified protocol was not requested by the client.");
        }
        protocolFullCase = protocolFullCase.replace(headerSanitizeRegExp, "");
        response += "Sec-WebSocket-Protocol: " + protocolFullCase + "\r\n";
      }
      this.requestedProtocols = null;
      if (allowedOrigin) {
        allowedOrigin = allowedOrigin.replace(headerSanitizeRegExp, "");
        if (this.webSocketVersion === 13) {
          response += "Origin: " + allowedOrigin + "\r\n";
        } else if (this.webSocketVersion === 8) {
          response += "Sec-WebSocket-Origin: " + allowedOrigin + "\r\n";
        }
      }
      if (cookies) {
        if (!Array.isArray(cookies)) {
          this.reject(500);
          throw new Error('Value supplied for "cookies" argument must be an array.');
        }
        var seenCookies = {};
        cookies.forEach(function(cookie) {
          if (!cookie.name || !cookie.value) {
            this.reject(500);
            throw new Error('Each cookie to set must at least provide a "name" and "value"');
          }
          cookie.name = cookie.name.replace(controlCharsAndSemicolonRegEx, "");
          cookie.value = cookie.value.replace(controlCharsAndSemicolonRegEx, "");
          if (seenCookies[cookie.name]) {
            this.reject(500);
            throw new Error("You may not specify the same cookie name twice.");
          }
          seenCookies[cookie.name] = true;
          var invalidChar = cookie.name.match(cookieNameValidateRegEx);
          if (invalidChar) {
            this.reject(500);
            throw new Error("Illegal character " + invalidChar[0] + " in cookie name");
          }
          if (cookie.value.match(cookieValueDQuoteValidateRegEx)) {
            invalidChar = cookie.value.slice(1, -1).match(cookieValueValidateRegEx);
          } else {
            invalidChar = cookie.value.match(cookieValueValidateRegEx);
          }
          if (invalidChar) {
            this.reject(500);
            throw new Error("Illegal character " + invalidChar[0] + " in cookie value");
          }
          var cookieParts = [cookie.name + "=" + cookie.value];
          if (cookie.path) {
            invalidChar = cookie.path.match(controlCharsAndSemicolonRegEx);
            if (invalidChar) {
              this.reject(500);
              throw new Error("Illegal character " + invalidChar[0] + " in cookie path");
            }
            cookieParts.push("Path=" + cookie.path);
          }
          if (cookie.domain) {
            if (typeof cookie.domain !== "string") {
              this.reject(500);
              throw new Error("Domain must be specified and must be a string.");
            }
            invalidChar = cookie.domain.match(controlCharsAndSemicolonRegEx);
            if (invalidChar) {
              this.reject(500);
              throw new Error("Illegal character " + invalidChar[0] + " in cookie domain");
            }
            cookieParts.push("Domain=" + cookie.domain.toLowerCase());
          }
          if (cookie.expires) {
            if (!(cookie.expires instanceof Date)) {
              this.reject(500);
              throw new Error('Value supplied for cookie "expires" must be a vaild date object');
            }
            cookieParts.push("Expires=" + cookie.expires.toGMTString());
          }
          if (cookie.maxage) {
            var maxage = cookie.maxage;
            if (typeof maxage === "string") {
              maxage = parseInt(maxage, 10);
            }
            if (isNaN(maxage) || maxage <= 0) {
              this.reject(500);
              throw new Error('Value supplied for cookie "maxage" must be a non-zero number');
            }
            maxage = Math.round(maxage);
            cookieParts.push("Max-Age=" + maxage.toString(10));
          }
          if (cookie.secure) {
            if (typeof cookie.secure !== "boolean") {
              this.reject(500);
              throw new Error('Value supplied for cookie "secure" must be of type boolean');
            }
            cookieParts.push("Secure");
          }
          if (cookie.httponly) {
            if (typeof cookie.httponly !== "boolean") {
              this.reject(500);
              throw new Error('Value supplied for cookie "httponly" must be of type boolean');
            }
            cookieParts.push("HttpOnly");
          }
          response += "Set-Cookie: " + cookieParts.join(";") + "\r\n";
        }.bind(this));
      }
      this._resolved = true;
      this.emit("requestResolved", this);
      response += "\r\n";
      var connection = new WebSocketConnection(this.socket, [], acceptedProtocol, false, this.serverConfig);
      connection.webSocketVersion = this.webSocketVersion;
      connection.remoteAddress = this.remoteAddress;
      connection.remoteAddresses = this.remoteAddresses;
      var self2 = this;
      if (this._socketIsClosing) {
        cleanupFailedConnection(connection);
      } else {
        this.socket.write(response, "ascii", function(error3) {
          if (error3) {
            cleanupFailedConnection(connection);
            return;
          }
          self2._removeSocketCloseListeners();
          connection._addSocketEventListeners();
        });
      }
      this.emit("requestAccepted", connection);
      return connection;
    };
    WebSocketRequest.prototype.reject = function(status, reason, extraHeaders) {
      this._verifyResolution();
      this._resolved = true;
      this.emit("requestResolved", this);
      if (typeof status !== "number") {
        status = 403;
      }
      var response = "HTTP/1.1 " + status + " " + httpStatusDescriptions[status] + "\r\nConnection: close\r\n";
      if (reason) {
        reason = reason.replace(headerSanitizeRegExp, "");
        response += "X-WebSocket-Reject-Reason: " + reason + "\r\n";
      }
      if (extraHeaders) {
        for (var key in extraHeaders) {
          var sanitizedValue = extraHeaders[key].toString().replace(headerSanitizeRegExp, "");
          var sanitizedKey = key.replace(headerSanitizeRegExp, "");
          response += sanitizedKey + ": " + sanitizedValue + "\r\n";
        }
      }
      response += "\r\n";
      this.socket.end(response, "ascii");
      this.emit("requestRejected", this);
    };
    WebSocketRequest.prototype._handleSocketCloseBeforeAccept = function() {
      this._socketIsClosing = true;
      this._removeSocketCloseListeners();
    };
    WebSocketRequest.prototype._removeSocketCloseListeners = function() {
      this.socket.removeListener("end", this._socketCloseHandler);
      this.socket.removeListener("close", this._socketCloseHandler);
    };
    WebSocketRequest.prototype._verifyResolution = function() {
      if (this._resolved) {
        throw new Error("WebSocketRequest may only be accepted or rejected one time.");
      }
    };
    function cleanupFailedConnection(connection) {
      process.nextTick(function() {
        connection.drop(1006, "TCP connection lost before handshake completed.", true);
      });
    }
    module2.exports = WebSocketRequest;
  }
});

// node_modules/websocket/lib/WebSocketServer.js
var require_WebSocketServer = __commonJS({
  "node_modules/websocket/lib/WebSocketServer.js"(exports, module2) {
    var extend = require_utils().extend;
    var utils = require_utils();
    var util = require("util");
    var debug = require_src3()("websocket:server");
    var EventEmitter = require("events").EventEmitter;
    var WebSocketRequest = require_WebSocketRequest();
    var WebSocketServer = function WebSocketServer2(config) {
      EventEmitter.call(this);
      this._handlers = {
        upgrade: this.handleUpgrade.bind(this),
        requestAccepted: this.handleRequestAccepted.bind(this),
        requestResolved: this.handleRequestResolved.bind(this)
      };
      this.connections = [];
      this.pendingRequests = [];
      if (config) {
        this.mount(config);
      }
    };
    util.inherits(WebSocketServer, EventEmitter);
    WebSocketServer.prototype.mount = function(config) {
      this.config = {
        httpServer: null,
        maxReceivedFrameSize: 65536,
        maxReceivedMessageSize: 1048576,
        fragmentOutgoingMessages: true,
        fragmentationThreshold: 16384,
        keepalive: true,
        keepaliveInterval: 2e4,
        dropConnectionOnKeepaliveTimeout: true,
        keepaliveGracePeriod: 1e4,
        useNativeKeepalive: false,
        assembleFragments: true,
        autoAcceptConnections: false,
        ignoreXForwardedFor: false,
        parseCookies: true,
        parseExtensions: true,
        disableNagleAlgorithm: true,
        closeTimeout: 5e3
      };
      extend(this.config, config);
      if (this.config.httpServer) {
        if (!Array.isArray(this.config.httpServer)) {
          this.config.httpServer = [this.config.httpServer];
        }
        var upgradeHandler = this._handlers.upgrade;
        this.config.httpServer.forEach(function(httpServer) {
          httpServer.on("upgrade", upgradeHandler);
        });
      } else {
        throw new Error("You must specify an httpServer on which to mount the WebSocket server.");
      }
    };
    WebSocketServer.prototype.unmount = function() {
      var upgradeHandler = this._handlers.upgrade;
      this.config.httpServer.forEach(function(httpServer) {
        httpServer.removeListener("upgrade", upgradeHandler);
      });
    };
    WebSocketServer.prototype.closeAllConnections = function() {
      this.connections.forEach(function(connection) {
        connection.close();
      });
      this.pendingRequests.forEach(function(request) {
        process.nextTick(function() {
          request.reject(503);
        });
      });
    };
    WebSocketServer.prototype.broadcast = function(data) {
      if (Buffer.isBuffer(data)) {
        this.broadcastBytes(data);
      } else if (typeof data.toString === "function") {
        this.broadcastUTF(data);
      }
    };
    WebSocketServer.prototype.broadcastUTF = function(utfData) {
      this.connections.forEach(function(connection) {
        connection.sendUTF(utfData);
      });
    };
    WebSocketServer.prototype.broadcastBytes = function(binaryData) {
      this.connections.forEach(function(connection) {
        connection.sendBytes(binaryData);
      });
    };
    WebSocketServer.prototype.shutDown = function() {
      this.unmount();
      this.closeAllConnections();
    };
    WebSocketServer.prototype.handleUpgrade = function(request, socket) {
      var self2 = this;
      var wsRequest = new WebSocketRequest(socket, request, this.config);
      try {
        wsRequest.readHandshake();
      } catch (e) {
        wsRequest.reject(e.httpCode ? e.httpCode : 400, e.message, e.headers);
        debug("Invalid handshake: %s", e.message);
        this.emit("upgradeError", e);
        return;
      }
      this.pendingRequests.push(wsRequest);
      wsRequest.once("requestAccepted", this._handlers.requestAccepted);
      wsRequest.once("requestResolved", this._handlers.requestResolved);
      socket.once("close", function() {
        self2._handlers.requestResolved(wsRequest);
      });
      if (!this.config.autoAcceptConnections && utils.eventEmitterListenerCount(this, "request") > 0) {
        this.emit("request", wsRequest);
      } else if (this.config.autoAcceptConnections) {
        wsRequest.accept(wsRequest.requestedProtocols[0], wsRequest.origin);
      } else {
        wsRequest.reject(404, "No handler is configured to accept the connection.");
      }
    };
    WebSocketServer.prototype.handleRequestAccepted = function(connection) {
      var self2 = this;
      connection.once("close", function(closeReason, description) {
        self2.handleConnectionClose(connection, closeReason, description);
      });
      this.connections.push(connection);
      this.emit("connect", connection);
    };
    WebSocketServer.prototype.handleConnectionClose = function(connection, closeReason, description) {
      var index2 = this.connections.indexOf(connection);
      if (index2 !== -1) {
        this.connections.splice(index2, 1);
      }
      this.emit("close", connection, closeReason, description);
    };
    WebSocketServer.prototype.handleRequestResolved = function(request) {
      var index2 = this.pendingRequests.indexOf(request);
      if (index2 !== -1) {
        this.pendingRequests.splice(index2, 1);
      }
    };
    module2.exports = WebSocketServer;
  }
});

// node_modules/websocket/lib/WebSocketClient.js
var require_WebSocketClient = __commonJS({
  "node_modules/websocket/lib/WebSocketClient.js"(exports, module2) {
    var utils = require_utils();
    var extend = utils.extend;
    var util = require("util");
    var EventEmitter = require("events").EventEmitter;
    var http2 = require("http");
    var https2 = require("https");
    var url = require("url");
    var crypto = require("crypto");
    var WebSocketConnection = require_WebSocketConnection();
    var bufferAllocUnsafe = utils.bufferAllocUnsafe;
    var protocolSeparators = [
      "(",
      ")",
      "<",
      ">",
      "@",
      ",",
      ";",
      ":",
      "\\",
      '"',
      "/",
      "[",
      "]",
      "?",
      "=",
      "{",
      "}",
      " ",
      String.fromCharCode(9)
    ];
    var excludedTlsOptions = ["hostname", "port", "method", "path", "headers"];
    function WebSocketClient(config) {
      EventEmitter.call(this);
      this.config = {
        maxReceivedFrameSize: 1048576,
        maxReceivedMessageSize: 8388608,
        fragmentOutgoingMessages: true,
        fragmentationThreshold: 16384,
        webSocketVersion: 13,
        assembleFragments: true,
        disableNagleAlgorithm: true,
        closeTimeout: 5e3,
        tlsOptions: {}
      };
      if (config) {
        var tlsOptions;
        if (config.tlsOptions) {
          tlsOptions = config.tlsOptions;
          delete config.tlsOptions;
        } else {
          tlsOptions = {};
        }
        extend(this.config, config);
        extend(this.config.tlsOptions, tlsOptions);
      }
      this._req = null;
      switch (this.config.webSocketVersion) {
        case 8:
        case 13:
          break;
        default:
          throw new Error("Requested webSocketVersion is not supported. Allowed values are 8 and 13.");
      }
    }
    util.inherits(WebSocketClient, EventEmitter);
    WebSocketClient.prototype.connect = function(requestUrl, protocols, origin, headers, extraRequestOptions) {
      var self2 = this;
      if (typeof protocols === "string") {
        if (protocols.length > 0) {
          protocols = [protocols];
        } else {
          protocols = [];
        }
      }
      if (!(protocols instanceof Array)) {
        protocols = [];
      }
      this.protocols = protocols;
      this.origin = origin;
      if (typeof requestUrl === "string") {
        this.url = url.parse(requestUrl);
      } else {
        this.url = requestUrl;
      }
      if (!this.url.protocol) {
        throw new Error("You must specify a full WebSocket URL, including protocol.");
      }
      if (!this.url.host) {
        throw new Error("You must specify a full WebSocket URL, including hostname. Relative URLs are not supported.");
      }
      this.secure = this.url.protocol === "wss:";
      this.protocols.forEach(function(protocol) {
        for (var i2 = 0; i2 < protocol.length; i2++) {
          var charCode = protocol.charCodeAt(i2);
          var character = protocol.charAt(i2);
          if (charCode < 33 || charCode > 126 || protocolSeparators.indexOf(character) !== -1) {
            throw new Error('Protocol list contains invalid character "' + String.fromCharCode(charCode) + '"');
          }
        }
      });
      var defaultPorts = {
        "ws:": "80",
        "wss:": "443"
      };
      if (!this.url.port) {
        this.url.port = defaultPorts[this.url.protocol];
      }
      var nonce = bufferAllocUnsafe(16);
      for (var i = 0; i < 16; i++) {
        nonce[i] = Math.round(Math.random() * 255);
      }
      this.base64nonce = nonce.toString("base64");
      var hostHeaderValue = this.url.hostname;
      if (this.url.protocol === "ws:" && this.url.port !== "80" || this.url.protocol === "wss:" && this.url.port !== "443") {
        hostHeaderValue += ":" + this.url.port;
      }
      var reqHeaders = {};
      if (this.secure && this.config.tlsOptions.hasOwnProperty("headers")) {
        extend(reqHeaders, this.config.tlsOptions.headers);
      }
      if (headers) {
        extend(reqHeaders, headers);
      }
      extend(reqHeaders, {
        "Upgrade": "websocket",
        "Connection": "Upgrade",
        "Sec-WebSocket-Version": this.config.webSocketVersion.toString(10),
        "Sec-WebSocket-Key": this.base64nonce,
        "Host": reqHeaders.Host || hostHeaderValue
      });
      if (this.protocols.length > 0) {
        reqHeaders["Sec-WebSocket-Protocol"] = this.protocols.join(", ");
      }
      if (this.origin) {
        if (this.config.webSocketVersion === 13) {
          reqHeaders["Origin"] = this.origin;
        } else if (this.config.webSocketVersion === 8) {
          reqHeaders["Sec-WebSocket-Origin"] = this.origin;
        }
      }
      var pathAndQuery;
      if (this.url.pathname) {
        pathAndQuery = this.url.path;
      } else if (this.url.path) {
        pathAndQuery = "/" + this.url.path;
      } else {
        pathAndQuery = "/";
      }
      function handleRequestError(error3) {
        self2._req = null;
        self2.emit("connectFailed", error3);
      }
      var requestOptions = {
        agent: false
      };
      if (extraRequestOptions) {
        extend(requestOptions, extraRequestOptions);
      }
      extend(requestOptions, {
        hostname: this.url.hostname,
        port: this.url.port,
        method: "GET",
        path: pathAndQuery,
        headers: reqHeaders
      });
      if (this.secure) {
        var tlsOptions = this.config.tlsOptions;
        for (var key in tlsOptions) {
          if (tlsOptions.hasOwnProperty(key) && excludedTlsOptions.indexOf(key) === -1) {
            requestOptions[key] = tlsOptions[key];
          }
        }
      }
      var req = this._req = (this.secure ? https2 : http2).request(requestOptions);
      req.on("upgrade", function handleRequestUpgrade(response, socket, head) {
        self2._req = null;
        req.removeListener("error", handleRequestError);
        self2.socket = socket;
        self2.response = response;
        self2.firstDataChunk = head;
        self2.validateHandshake();
      });
      req.on("error", handleRequestError);
      req.on("response", function(response) {
        self2._req = null;
        if (utils.eventEmitterListenerCount(self2, "httpResponse") > 0) {
          self2.emit("httpResponse", response, self2);
          if (response.socket) {
            response.socket.end();
          }
        } else {
          var headerDumpParts = [];
          for (var headerName in response.headers) {
            headerDumpParts.push(headerName + ": " + response.headers[headerName]);
          }
          self2.failHandshake("Server responded with a non-101 status: " + response.statusCode + " " + response.statusMessage + "\nResponse Headers Follow:\n" + headerDumpParts.join("\n") + "\n");
        }
      });
      req.end();
    };
    WebSocketClient.prototype.validateHandshake = function() {
      var headers = this.response.headers;
      if (this.protocols.length > 0) {
        this.protocol = headers["sec-websocket-protocol"];
        if (this.protocol) {
          if (this.protocols.indexOf(this.protocol) === -1) {
            this.failHandshake("Server did not respond with a requested protocol.");
            return;
          }
        } else {
          this.failHandshake("Expected a Sec-WebSocket-Protocol header.");
          return;
        }
      }
      if (!(headers["connection"] && headers["connection"].toLocaleLowerCase() === "upgrade")) {
        this.failHandshake("Expected a Connection: Upgrade header from the server");
        return;
      }
      if (!(headers["upgrade"] && headers["upgrade"].toLocaleLowerCase() === "websocket")) {
        this.failHandshake("Expected an Upgrade: websocket header from the server");
        return;
      }
      var sha1 = crypto.createHash("sha1");
      sha1.update(this.base64nonce + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11");
      var expectedKey = sha1.digest("base64");
      if (!headers["sec-websocket-accept"]) {
        this.failHandshake("Expected Sec-WebSocket-Accept header from server");
        return;
      }
      if (headers["sec-websocket-accept"] !== expectedKey) {
        this.failHandshake("Sec-WebSocket-Accept header from server didn't match expected value of " + expectedKey);
        return;
      }
      this.succeedHandshake();
    };
    WebSocketClient.prototype.failHandshake = function(errorDescription) {
      if (this.socket && this.socket.writable) {
        this.socket.end();
      }
      this.emit("connectFailed", new Error(errorDescription));
    };
    WebSocketClient.prototype.succeedHandshake = function() {
      var connection = new WebSocketConnection(this.socket, [], this.protocol, true, this.config);
      connection.webSocketVersion = this.config.webSocketVersion;
      connection._addSocketEventListeners();
      this.emit("connect", connection);
      if (this.firstDataChunk.length > 0) {
        connection.handleSocketData(this.firstDataChunk);
      }
      this.firstDataChunk = null;
    };
    WebSocketClient.prototype.abort = function() {
      if (this._req) {
        this._req.abort();
      }
    };
    module2.exports = WebSocketClient;
  }
});

// node_modules/websocket/lib/WebSocketRouterRequest.js
var require_WebSocketRouterRequest = __commonJS({
  "node_modules/websocket/lib/WebSocketRouterRequest.js"(exports, module2) {
    var util = require("util");
    var EventEmitter = require("events").EventEmitter;
    function WebSocketRouterRequest(webSocketRequest, resolvedProtocol) {
      EventEmitter.call(this);
      this.webSocketRequest = webSocketRequest;
      if (resolvedProtocol === "____no_protocol____") {
        this.protocol = null;
      } else {
        this.protocol = resolvedProtocol;
      }
      this.origin = webSocketRequest.origin;
      this.resource = webSocketRequest.resource;
      this.resourceURL = webSocketRequest.resourceURL;
      this.httpRequest = webSocketRequest.httpRequest;
      this.remoteAddress = webSocketRequest.remoteAddress;
      this.webSocketVersion = webSocketRequest.webSocketVersion;
      this.requestedExtensions = webSocketRequest.requestedExtensions;
      this.cookies = webSocketRequest.cookies;
    }
    util.inherits(WebSocketRouterRequest, EventEmitter);
    WebSocketRouterRequest.prototype.accept = function(origin, cookies) {
      var connection = this.webSocketRequest.accept(this.protocol, origin, cookies);
      this.emit("requestAccepted", connection);
      return connection;
    };
    WebSocketRouterRequest.prototype.reject = function(status, reason, extraHeaders) {
      this.webSocketRequest.reject(status, reason, extraHeaders);
      this.emit("requestRejected", this);
    };
    module2.exports = WebSocketRouterRequest;
  }
});

// node_modules/websocket/lib/WebSocketRouter.js
var require_WebSocketRouter = __commonJS({
  "node_modules/websocket/lib/WebSocketRouter.js"(exports, module2) {
    var extend = require_utils().extend;
    var util = require("util");
    var EventEmitter = require("events").EventEmitter;
    var WebSocketRouterRequest = require_WebSocketRouterRequest();
    function WebSocketRouter(config) {
      EventEmitter.call(this);
      this.config = {
        server: null
      };
      if (config) {
        extend(this.config, config);
      }
      this.handlers = [];
      this._requestHandler = this.handleRequest.bind(this);
      if (this.config.server) {
        this.attachServer(this.config.server);
      }
    }
    util.inherits(WebSocketRouter, EventEmitter);
    WebSocketRouter.prototype.attachServer = function(server) {
      if (server) {
        this.server = server;
        this.server.on("request", this._requestHandler);
      } else {
        throw new Error("You must specify a WebSocketServer instance to attach to.");
      }
    };
    WebSocketRouter.prototype.detachServer = function() {
      if (this.server) {
        this.server.removeListener("request", this._requestHandler);
        this.server = null;
      } else {
        throw new Error("Cannot detach from server: not attached.");
      }
    };
    WebSocketRouter.prototype.mount = function(path, protocol, callback) {
      if (!path) {
        throw new Error("You must specify a path for this handler.");
      }
      if (!protocol) {
        protocol = "____no_protocol____";
      }
      if (!callback) {
        throw new Error("You must specify a callback for this handler.");
      }
      path = this.pathToRegExp(path);
      if (!(path instanceof RegExp)) {
        throw new Error("Path must be specified as either a string or a RegExp.");
      }
      var pathString = path.toString();
      protocol = protocol.toLocaleLowerCase();
      if (this.findHandlerIndex(pathString, protocol) !== -1) {
        throw new Error("You may only mount one handler per path/protocol combination.");
      }
      this.handlers.push({
        "path": path,
        "pathString": pathString,
        "protocol": protocol,
        "callback": callback
      });
    };
    WebSocketRouter.prototype.unmount = function(path, protocol) {
      var index2 = this.findHandlerIndex(this.pathToRegExp(path).toString(), protocol);
      if (index2 !== -1) {
        this.handlers.splice(index2, 1);
      } else {
        throw new Error("Unable to find a route matching the specified path and protocol.");
      }
    };
    WebSocketRouter.prototype.findHandlerIndex = function(pathString, protocol) {
      protocol = protocol.toLocaleLowerCase();
      for (var i = 0, len = this.handlers.length; i < len; i++) {
        var handler2 = this.handlers[i];
        if (handler2.pathString === pathString && handler2.protocol === protocol) {
          return i;
        }
      }
      return -1;
    };
    WebSocketRouter.prototype.pathToRegExp = function(path) {
      if (typeof path === "string") {
        if (path === "*") {
          path = /^.*$/;
        } else {
          path = path.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
          path = new RegExp("^" + path + "$");
        }
      }
      return path;
    };
    WebSocketRouter.prototype.handleRequest = function(request) {
      var requestedProtocols = request.requestedProtocols;
      if (requestedProtocols.length === 0) {
        requestedProtocols = ["____no_protocol____"];
      }
      for (var i = 0; i < requestedProtocols.length; i++) {
        var requestedProtocol = requestedProtocols[i].toLocaleLowerCase();
        for (var j = 0, len = this.handlers.length; j < len; j++) {
          var handler2 = this.handlers[j];
          if (handler2.path.test(request.resourceURL.pathname)) {
            if (requestedProtocol === handler2.protocol || handler2.protocol === "*") {
              var routerRequest = new WebSocketRouterRequest(request, requestedProtocol);
              handler2.callback(routerRequest);
              return;
            }
          }
        }
      }
      request.reject(404, "No handler is available for the given request.");
    };
    module2.exports = WebSocketRouter;
  }
});

// node_modules/is-typedarray/index.js
var require_is_typedarray = __commonJS({
  "node_modules/is-typedarray/index.js"(exports, module2) {
    module2.exports = isTypedArray;
    isTypedArray.strict = isStrictTypedArray;
    isTypedArray.loose = isLooseTypedArray;
    var toString = Object.prototype.toString;
    var names = {
      "[object Int8Array]": true,
      "[object Int16Array]": true,
      "[object Int32Array]": true,
      "[object Uint8Array]": true,
      "[object Uint8ClampedArray]": true,
      "[object Uint16Array]": true,
      "[object Uint32Array]": true,
      "[object Float32Array]": true,
      "[object Float64Array]": true
    };
    function isTypedArray(arr) {
      return isStrictTypedArray(arr) || isLooseTypedArray(arr);
    }
    function isStrictTypedArray(arr) {
      return arr instanceof Int8Array || arr instanceof Int16Array || arr instanceof Int32Array || arr instanceof Uint8Array || arr instanceof Uint8ClampedArray || arr instanceof Uint16Array || arr instanceof Uint32Array || arr instanceof Float32Array || arr instanceof Float64Array;
    }
    function isLooseTypedArray(arr) {
      return names[toString.call(arr)];
    }
  }
});

// node_modules/typedarray-to-buffer/index.js
var require_typedarray_to_buffer = __commonJS({
  "node_modules/typedarray-to-buffer/index.js"(exports, module2) {
    var isTypedArray = require_is_typedarray().strict;
    module2.exports = function typedarrayToBuffer(arr) {
      if (isTypedArray(arr)) {
        var buf = Buffer.from(arr.buffer);
        if (arr.byteLength !== arr.buffer.byteLength) {
          buf = buf.slice(arr.byteOffset, arr.byteOffset + arr.byteLength);
        }
        return buf;
      } else {
        return Buffer.from(arr);
      }
    };
  }
});

// node_modules/yaeti/lib/EventTarget.js
var require_EventTarget = __commonJS({
  "node_modules/yaeti/lib/EventTarget.js"(exports, module2) {
    module2.exports = _EventTarget;
    function _EventTarget() {
      if (typeof this.addEventListener === "function") {
        return;
      }
      this._listeners = {};
      this.addEventListener = _addEventListener;
      this.removeEventListener = _removeEventListener;
      this.dispatchEvent = _dispatchEvent;
    }
    Object.defineProperties(_EventTarget.prototype, {
      listeners: {
        get: function() {
          return this._listeners;
        }
      }
    });
    function _addEventListener(type, newListener) {
      var listenersType, i, listener;
      if (!type || !newListener) {
        return;
      }
      listenersType = this._listeners[type];
      if (listenersType === void 0) {
        this._listeners[type] = listenersType = [];
      }
      for (i = 0; !!(listener = listenersType[i]); i++) {
        if (listener === newListener) {
          return;
        }
      }
      listenersType.push(newListener);
    }
    function _removeEventListener(type, oldListener) {
      var listenersType, i, listener;
      if (!type || !oldListener) {
        return;
      }
      listenersType = this._listeners[type];
      if (listenersType === void 0) {
        return;
      }
      for (i = 0; !!(listener = listenersType[i]); i++) {
        if (listener === oldListener) {
          listenersType.splice(i, 1);
          break;
        }
      }
      if (listenersType.length === 0) {
        delete this._listeners[type];
      }
    }
    function _dispatchEvent(event) {
      var type, listenersType, dummyListener, stopImmediatePropagation = false, i, listener;
      if (!event || typeof event.type !== "string") {
        throw new Error("`event` must have a valid `type` property");
      }
      if (event._yaeti) {
        event.target = this;
        event.cancelable = true;
      }
      try {
        event.stopImmediatePropagation = function() {
          stopImmediatePropagation = true;
        };
      } catch (error3) {
      }
      type = event.type;
      listenersType = this._listeners[type] || [];
      dummyListener = this["on" + type];
      if (typeof dummyListener === "function") {
        dummyListener.call(this, event);
      }
      for (i = 0; !!(listener = listenersType[i]); i++) {
        if (stopImmediatePropagation) {
          break;
        }
        listener.call(this, event);
      }
      return !event.defaultPrevented;
    }
  }
});

// node_modules/yaeti/lib/Event.js
var require_Event = __commonJS({
  "node_modules/yaeti/lib/Event.js"(exports, module2) {
    module2.exports = _Event;
    function _Event(type) {
      this.type = type;
      this.isTrusted = false;
      this._yaeti = true;
    }
  }
});

// node_modules/yaeti/index.js
var require_yaeti = __commonJS({
  "node_modules/yaeti/index.js"(exports, module2) {
    module2.exports = {
      EventTarget: require_EventTarget(),
      Event: require_Event()
    };
  }
});

// node_modules/websocket/lib/W3CWebSocket.js
var require_W3CWebSocket = __commonJS({
  "node_modules/websocket/lib/W3CWebSocket.js"(exports, module2) {
    var WebSocketClient = require_WebSocketClient();
    var toBuffer = require_typedarray_to_buffer();
    var yaeti = require_yaeti();
    var CONNECTING = 0;
    var OPEN = 1;
    var CLOSING = 2;
    var CLOSED = 3;
    module2.exports = W3CWebSocket;
    function W3CWebSocket(url, protocols, origin, headers, requestOptions, clientConfig) {
      yaeti.EventTarget.call(this);
      clientConfig = clientConfig || {};
      clientConfig.assembleFragments = true;
      var self2 = this;
      this._url = url;
      this._readyState = CONNECTING;
      this._protocol = void 0;
      this._extensions = "";
      this._bufferedAmount = 0;
      this._binaryType = "arraybuffer";
      this._connection = void 0;
      this._client = new WebSocketClient(clientConfig);
      this._client.on("connect", function(connection) {
        onConnect.call(self2, connection);
      });
      this._client.on("connectFailed", function() {
        onConnectFailed.call(self2);
      });
      this._client.connect(url, protocols, origin, headers, requestOptions);
    }
    Object.defineProperties(W3CWebSocket.prototype, {
      url: {get: function() {
        return this._url;
      }},
      readyState: {get: function() {
        return this._readyState;
      }},
      protocol: {get: function() {
        return this._protocol;
      }},
      extensions: {get: function() {
        return this._extensions;
      }},
      bufferedAmount: {get: function() {
        return this._bufferedAmount;
      }}
    });
    Object.defineProperties(W3CWebSocket.prototype, {
      binaryType: {
        get: function() {
          return this._binaryType;
        },
        set: function(type) {
          if (type !== "arraybuffer") {
            throw new SyntaxError('just "arraybuffer" type allowed for "binaryType" attribute');
          }
          this._binaryType = type;
        }
      }
    });
    [["CONNECTING", CONNECTING], ["OPEN", OPEN], ["CLOSING", CLOSING], ["CLOSED", CLOSED]].forEach(function(property) {
      Object.defineProperty(W3CWebSocket.prototype, property[0], {
        get: function() {
          return property[1];
        }
      });
    });
    [["CONNECTING", CONNECTING], ["OPEN", OPEN], ["CLOSING", CLOSING], ["CLOSED", CLOSED]].forEach(function(property) {
      Object.defineProperty(W3CWebSocket, property[0], {
        get: function() {
          return property[1];
        }
      });
    });
    W3CWebSocket.prototype.send = function(data) {
      if (this._readyState !== OPEN) {
        throw new Error("cannot call send() while not connected");
      }
      if (typeof data === "string" || data instanceof String) {
        this._connection.sendUTF(data);
      } else {
        if (data instanceof Buffer) {
          this._connection.sendBytes(data);
        } else if (data.byteLength || data.byteLength === 0) {
          data = toBuffer(data);
          this._connection.sendBytes(data);
        } else {
          throw new Error("unknown binary data:", data);
        }
      }
    };
    W3CWebSocket.prototype.close = function(code, reason) {
      switch (this._readyState) {
        case CONNECTING:
          onConnectFailed.call(this);
          this._client.on("connect", function(connection) {
            if (code) {
              connection.close(code, reason);
            } else {
              connection.close();
            }
          });
          break;
        case OPEN:
          this._readyState = CLOSING;
          if (code) {
            this._connection.close(code, reason);
          } else {
            this._connection.close();
          }
          break;
        case CLOSING:
        case CLOSED:
          break;
      }
    };
    function createCloseEvent(code, reason) {
      var event = new yaeti.Event("close");
      event.code = code;
      event.reason = reason;
      event.wasClean = typeof code === "undefined" || code === 1e3;
      return event;
    }
    function createMessageEvent(data) {
      var event = new yaeti.Event("message");
      event.data = data;
      return event;
    }
    function onConnect(connection) {
      var self2 = this;
      this._readyState = OPEN;
      this._connection = connection;
      this._protocol = connection.protocol;
      this._extensions = connection.extensions;
      this._connection.on("close", function(code, reason) {
        onClose.call(self2, code, reason);
      });
      this._connection.on("message", function(msg) {
        onMessage.call(self2, msg);
      });
      this.dispatchEvent(new yaeti.Event("open"));
    }
    function onConnectFailed() {
      destroy.call(this);
      this._readyState = CLOSED;
      try {
        this.dispatchEvent(new yaeti.Event("error"));
      } finally {
        this.dispatchEvent(createCloseEvent(1006, "connection failed"));
      }
    }
    function onClose(code, reason) {
      destroy.call(this);
      this._readyState = CLOSED;
      this.dispatchEvent(createCloseEvent(code, reason || ""));
    }
    function onMessage(message) {
      if (message.utf8Data) {
        this.dispatchEvent(createMessageEvent(message.utf8Data));
      } else if (message.binaryData) {
        if (this.binaryType === "arraybuffer") {
          var buffer = message.binaryData;
          var arraybuffer = new ArrayBuffer(buffer.length);
          var view = new Uint8Array(arraybuffer);
          for (var i = 0, len = buffer.length; i < len; ++i) {
            view[i] = buffer[i];
          }
          this.dispatchEvent(createMessageEvent(arraybuffer));
        }
      }
    }
    function destroy() {
      this._client.removeAllListeners();
      if (this._connection) {
        this._connection.removeAllListeners();
      }
    }
  }
});

// node_modules/websocket/lib/Deprecation.js
var require_Deprecation = __commonJS({
  "node_modules/websocket/lib/Deprecation.js"(exports, module2) {
    var Deprecation = {
      disableWarnings: false,
      deprecationWarningMap: {},
      warn: function(deprecationName) {
        if (!this.disableWarnings && this.deprecationWarningMap[deprecationName]) {
          console.warn("DEPRECATION WARNING: " + this.deprecationWarningMap[deprecationName]);
          this.deprecationWarningMap[deprecationName] = false;
        }
      }
    };
    module2.exports = Deprecation;
  }
});

// node_modules/websocket/package.json
var require_package2 = __commonJS({
  "node_modules/websocket/package.json"(exports, module2) {
    module2.exports = {
      name: "websocket",
      description: "Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.",
      keywords: [
        "websocket",
        "websockets",
        "socket",
        "networking",
        "comet",
        "push",
        "RFC-6455",
        "realtime",
        "server",
        "client"
      ],
      author: "Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)",
      contributors: [
        "I\xF1aki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"
      ],
      version: "1.0.34",
      repository: {
        type: "git",
        url: "https://github.com/theturtle32/WebSocket-Node.git"
      },
      homepage: "https://github.com/theturtle32/WebSocket-Node",
      engines: {
        node: ">=4.0.0"
      },
      dependencies: {
        bufferutil: "^4.0.1",
        debug: "^2.2.0",
        "es5-ext": "^0.10.50",
        "typedarray-to-buffer": "^3.1.5",
        "utf-8-validate": "^5.0.2",
        yaeti: "^0.0.6"
      },
      devDependencies: {
        "buffer-equal": "^1.0.0",
        gulp: "^4.0.2",
        "gulp-jshint": "^2.0.4",
        "jshint-stylish": "^2.2.1",
        jshint: "^2.0.0",
        tape: "^4.9.1"
      },
      config: {
        verbose: false
      },
      scripts: {
        test: "tape test/unit/*.js",
        gulp: "gulp"
      },
      main: "index",
      directories: {
        lib: "./lib"
      },
      browser: "lib/browser.js",
      license: "Apache-2.0"
    };
  }
});

// node_modules/websocket/lib/version.js
var require_version = __commonJS({
  "node_modules/websocket/lib/version.js"(exports, module2) {
    module2.exports = require_package2().version;
  }
});

// node_modules/websocket/lib/websocket.js
var require_websocket = __commonJS({
  "node_modules/websocket/lib/websocket.js"(exports, module2) {
    module2.exports = {
      "server": require_WebSocketServer(),
      "client": require_WebSocketClient(),
      "router": require_WebSocketRouter(),
      "frame": require_WebSocketFrame(),
      "request": require_WebSocketRequest(),
      "connection": require_WebSocketConnection(),
      "w3cwebsocket": require_W3CWebSocket(),
      "deprecation": require_Deprecation(),
      "version": require_version()
    };
  }
});

// node_modules/websocket/index.js
var require_websocket2 = __commonJS({
  "node_modules/websocket/index.js"(exports, module2) {
    module2.exports = require_websocket();
  }
});

// node_modules/@supabase/realtime-js/dist/main/RealtimeClient.js
var require_RealtimeClient = __commonJS({
  "node_modules/@supabase/realtime-js/dist/main/RealtimeClient.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve2) {
          resolve2(value);
        });
      }
      return new (P || (P = Promise))(function(resolve2, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {"default": mod};
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    var constants_1 = require_constants3();
    var timer_1 = __importDefault(require_timer());
    var RealtimeSubscription_1 = __importDefault(require_RealtimeSubscription());
    var websocket_1 = require_websocket2();
    var noop3 = () => {
    };
    var RealtimeClient = class {
      constructor(endPoint, options2) {
        this.channels = [];
        this.endPoint = "";
        this.headers = {};
        this.params = {};
        this.timeout = constants_1.DEFAULT_TIMEOUT;
        this.transport = websocket_1.w3cwebsocket;
        this.heartbeatIntervalMs = 3e4;
        this.longpollerTimeout = 2e4;
        this.heartbeatTimer = void 0;
        this.pendingHeartbeatRef = null;
        this.ref = 0;
        this.logger = noop3;
        this.conn = null;
        this.sendBuffer = [];
        this.stateChangeCallbacks = {
          open: [],
          close: [],
          error: [],
          message: []
        };
        this.endPoint = `${endPoint}/${constants_1.TRANSPORTS.websocket}`;
        if (options2 === null || options2 === void 0 ? void 0 : options2.params)
          this.params = options2.params;
        if (options2 === null || options2 === void 0 ? void 0 : options2.headers)
          this.headers = options2.headers;
        if (options2 === null || options2 === void 0 ? void 0 : options2.timeout)
          this.timeout = options2.timeout;
        if (options2 === null || options2 === void 0 ? void 0 : options2.logger)
          this.logger = options2.logger;
        if (options2 === null || options2 === void 0 ? void 0 : options2.transport)
          this.transport = options2.transport;
        if (options2 === null || options2 === void 0 ? void 0 : options2.heartbeatIntervalMs)
          this.heartbeatIntervalMs = options2.heartbeatIntervalMs;
        if (options2 === null || options2 === void 0 ? void 0 : options2.longpollerTimeout)
          this.longpollerTimeout = options2.longpollerTimeout;
        this.reconnectAfterMs = (options2 === null || options2 === void 0 ? void 0 : options2.reconnectAfterMs) ? options2.reconnectAfterMs : (tries) => {
          return [1e3, 2e3, 5e3, 1e4][tries - 1] || 1e4;
        };
        this.encode = (options2 === null || options2 === void 0 ? void 0 : options2.encode) ? options2.encode : (payload, callback) => {
          return callback(JSON.stringify(payload));
        };
        this.decode = (options2 === null || options2 === void 0 ? void 0 : options2.decode) ? options2.decode : (payload, callback) => {
          return callback(JSON.parse(payload));
        };
        this.reconnectTimer = new timer_1.default(() => __awaiter(this, void 0, void 0, function* () {
          yield this.disconnect();
          this.connect();
        }), this.reconnectAfterMs);
      }
      connect() {
        if (this.conn) {
          return;
        }
        this.conn = new this.transport(this.endPointURL(), [], null, this.headers);
        if (this.conn) {
          this.conn.onopen = () => this._onConnOpen();
          this.conn.onerror = (error3) => this._onConnError(error3);
          this.conn.onmessage = (event) => this.onConnMessage(event);
          this.conn.onclose = (event) => this._onConnClose(event);
        }
      }
      disconnect(code, reason) {
        return new Promise((resolve2, _reject) => {
          try {
            if (this.conn) {
              this.conn.onclose = function() {
              };
              if (code) {
                this.conn.close(code, reason || "");
              } else {
                this.conn.close();
              }
              this.conn = null;
            }
            resolve2({error: null, data: true});
          } catch (error3) {
            resolve2({error: error3, data: false});
          }
        });
      }
      log(kind, msg, data) {
        this.logger(kind, msg, data);
      }
      onOpen(callback) {
        this.stateChangeCallbacks.open.push(callback);
      }
      onClose(callback) {
        this.stateChangeCallbacks.close.push(callback);
      }
      onError(callback) {
        this.stateChangeCallbacks.error.push(callback);
      }
      onMessage(callback) {
        this.stateChangeCallbacks.message.push(callback);
      }
      connectionState() {
        switch (this.conn && this.conn.readyState) {
          case constants_1.SOCKET_STATES.connecting:
            return "connecting";
          case constants_1.SOCKET_STATES.open:
            return "open";
          case constants_1.SOCKET_STATES.closing:
            return "closing";
          default:
            return "closed";
        }
      }
      isConnected() {
        return this.connectionState() === "open";
      }
      remove(channel) {
        this.channels = this.channels.filter((c) => c.joinRef() !== channel.joinRef());
      }
      channel(topic, chanParams = {}) {
        let chan = new RealtimeSubscription_1.default(topic, chanParams, this);
        this.channels.push(chan);
        return chan;
      }
      push(data) {
        let {topic, event, payload, ref} = data;
        let callback = () => {
          this.encode(data, (result) => {
            var _a;
            (_a = this.conn) === null || _a === void 0 ? void 0 : _a.send(result);
          });
        };
        this.log("push", `${topic} ${event} (${ref})`, payload);
        if (this.isConnected()) {
          callback();
        } else {
          this.sendBuffer.push(callback);
        }
      }
      onConnMessage(rawMessage) {
        this.decode(rawMessage.data, (msg) => {
          let {topic, event, payload, ref} = msg;
          if (ref && ref === this.pendingHeartbeatRef) {
            this.pendingHeartbeatRef = null;
          }
          this.log("receive", `${payload.status || ""} ${topic} ${event} ${ref && "(" + ref + ")" || ""}`, payload);
          this.channels.filter((channel) => channel.isMember(topic)).forEach((channel) => channel.trigger(event, payload, ref));
          this.stateChangeCallbacks.message.forEach((callback) => callback(msg));
        });
      }
      endPointURL() {
        return this._appendParams(this.endPoint, Object.assign({}, this.params, {vsn: constants_1.VSN}));
      }
      makeRef() {
        let newRef = this.ref + 1;
        if (newRef === this.ref) {
          this.ref = 0;
        } else {
          this.ref = newRef;
        }
        return this.ref.toString();
      }
      _onConnOpen() {
        this.log("transport", `connected to ${this.endPointURL()}`);
        this._flushSendBuffer();
        this.reconnectTimer.reset();
        clearInterval(this.heartbeatTimer);
        this.heartbeatTimer = setInterval(() => this._sendHeartbeat(), this.heartbeatIntervalMs);
        this.stateChangeCallbacks.open.forEach((callback) => callback());
      }
      _onConnClose(event) {
        this.log("transport", "close", event);
        this._triggerChanError();
        clearInterval(this.heartbeatTimer);
        this.reconnectTimer.scheduleTimeout();
        this.stateChangeCallbacks.close.forEach((callback) => callback(event));
      }
      _onConnError(error3) {
        this.log("transport", error3.message);
        this._triggerChanError();
        this.stateChangeCallbacks.error.forEach((callback) => callback(error3));
      }
      _triggerChanError() {
        this.channels.forEach((channel) => channel.trigger(constants_1.CHANNEL_EVENTS.error));
      }
      _appendParams(url, params) {
        if (Object.keys(params).length === 0) {
          return url;
        }
        const prefix = url.match(/\?/) ? "&" : "?";
        const query = new URLSearchParams(params);
        return `${url}${prefix}${query}`;
      }
      _flushSendBuffer() {
        if (this.isConnected() && this.sendBuffer.length > 0) {
          this.sendBuffer.forEach((callback) => callback());
          this.sendBuffer = [];
        }
      }
      _sendHeartbeat() {
        var _a;
        if (!this.isConnected()) {
          return;
        }
        if (this.pendingHeartbeatRef) {
          this.pendingHeartbeatRef = null;
          this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
          (_a = this.conn) === null || _a === void 0 ? void 0 : _a.close(constants_1.WS_CLOSE_NORMAL, "hearbeat timeout");
          return;
        }
        this.pendingHeartbeatRef = this.makeRef();
        this.push({
          topic: "phoenix",
          event: "heartbeat",
          payload: {},
          ref: this.pendingHeartbeatRef
        });
      }
    };
    exports.default = RealtimeClient;
  }
});

// node_modules/@supabase/realtime-js/dist/main/index.js
var require_main3 = __commonJS({
  "node_modules/@supabase/realtime-js/dist/main/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, {enumerable: true, get: function() {
        return m[k];
      }});
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", {enumerable: true, value: v});
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {"default": mod};
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.Transformers = exports.RealtimeSubscription = exports.RealtimeClient = void 0;
    var Transformers = __importStar(require_transformers());
    exports.Transformers = Transformers;
    var RealtimeClient_1 = __importDefault(require_RealtimeClient());
    exports.RealtimeClient = RealtimeClient_1.default;
    var RealtimeSubscription_1 = __importDefault(require_RealtimeSubscription());
    exports.RealtimeSubscription = RealtimeSubscription_1.default;
  }
});

// node_modules/@supabase/supabase-js/dist/main/lib/SupabaseRealtimeClient.js
var require_SupabaseRealtimeClient = __commonJS({
  "node_modules/@supabase/supabase-js/dist/main/lib/SupabaseRealtimeClient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.SupabaseRealtimeClient = void 0;
    var realtime_js_1 = require_main3();
    var SupabaseRealtimeClient = class {
      constructor(socket, schema, tableName) {
        const topic = tableName === "*" ? `realtime:${schema}` : `realtime:${schema}:${tableName}`;
        this.subscription = socket.channel(topic);
      }
      getPayloadRecords(payload) {
        const records = {
          new: {},
          old: {}
        };
        if (payload.type === "INSERT" || payload.type === "UPDATE") {
          records.new = realtime_js_1.Transformers.convertChangeData(payload.columns, payload.record);
        }
        if (payload.type === "UPDATE" || payload.type === "DELETE") {
          records.old = realtime_js_1.Transformers.convertChangeData(payload.columns, payload.old_record);
        }
        return records;
      }
      on(event, callback) {
        this.subscription.on(event, (payload) => {
          let enrichedPayload = {
            schema: payload.schema,
            table: payload.table,
            commit_timestamp: payload.commit_timestamp,
            eventType: payload.type,
            new: {},
            old: {}
          };
          enrichedPayload = Object.assign(Object.assign({}, enrichedPayload), this.getPayloadRecords(payload));
          callback(enrichedPayload);
        });
        return this;
      }
      subscribe(callback = () => {
      }) {
        this.subscription.onError((e) => callback("SUBSCRIPTION_ERROR", e));
        this.subscription.onClose(() => callback("CLOSED"));
        this.subscription.subscribe().receive("ok", () => callback("SUBSCRIBED")).receive("error", (e) => callback("SUBSCRIPTION_ERROR", e)).receive("timeout", () => callback("RETRYING_AFTER_TIMEOUT"));
        return this.subscription;
      }
    };
    exports.SupabaseRealtimeClient = SupabaseRealtimeClient;
  }
});

// node_modules/@supabase/supabase-js/dist/main/lib/SupabaseQueryBuilder.js
var require_SupabaseQueryBuilder = __commonJS({
  "node_modules/@supabase/supabase-js/dist/main/lib/SupabaseQueryBuilder.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.SupabaseQueryBuilder = void 0;
    var postgrest_js_1 = require_main2();
    var SupabaseRealtimeClient_1 = require_SupabaseRealtimeClient();
    var SupabaseQueryBuilder = class extends postgrest_js_1.PostgrestQueryBuilder {
      constructor(url, {headers = {}, schema, realtime, table}) {
        super(url, {headers, schema});
        this._subscription = new SupabaseRealtimeClient_1.SupabaseRealtimeClient(realtime, schema, table);
        this._realtime = realtime;
      }
      on(event, callback) {
        if (!this._realtime.isConnected()) {
          this._realtime.connect();
        }
        return this._subscription.on(event, callback);
      }
    };
    exports.SupabaseQueryBuilder = SupabaseQueryBuilder;
  }
});

// node_modules/@supabase/storage-js/dist/main/lib/fetch.js
var require_fetch2 = __commonJS({
  "node_modules/@supabase/storage-js/dist/main/lib/fetch.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve2) {
          resolve2(value);
        });
      }
      return new (P || (P = Promise))(function(resolve2, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {"default": mod};
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.remove = exports.put = exports.post = exports.get = void 0;
    var cross_fetch_1 = __importDefault(require_node_ponyfill());
    var _getErrorMessage = (err) => err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
    var handleError = (error3, reject) => {
      if (typeof error3.json !== "function") {
        return reject(error3);
      }
      error3.json().then((err) => {
        return reject({
          message: _getErrorMessage(err),
          status: (error3 === null || error3 === void 0 ? void 0 : error3.status) || 500
        });
      });
    };
    var _getRequestParams = (method, options2, parameters, body) => {
      const params = {method, headers: (options2 === null || options2 === void 0 ? void 0 : options2.headers) || {}};
      if (method === "GET") {
        return params;
      }
      params.headers = Object.assign({"Content-Type": "application/json"}, options2 === null || options2 === void 0 ? void 0 : options2.headers);
      params.body = JSON.stringify(body);
      return Object.assign(Object.assign({}, params), parameters);
    };
    function _handleRequest(method, url, options2, parameters, body) {
      return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve2, reject) => {
          cross_fetch_1.default(url, _getRequestParams(method, options2, parameters, body)).then((result) => {
            if (!result.ok)
              throw result;
            if (options2 === null || options2 === void 0 ? void 0 : options2.noResolveJson)
              return resolve2(result);
            return result.json();
          }).then((data) => resolve2(data)).catch((error3) => handleError(error3, reject));
        });
      });
    }
    function get(url, options2, parameters) {
      return __awaiter(this, void 0, void 0, function* () {
        return _handleRequest("GET", url, options2, parameters);
      });
    }
    exports.get = get;
    function post(url, body, options2, parameters) {
      return __awaiter(this, void 0, void 0, function* () {
        return _handleRequest("POST", url, options2, parameters, body);
      });
    }
    exports.post = post;
    function put(url, body, options2, parameters) {
      return __awaiter(this, void 0, void 0, function* () {
        return _handleRequest("PUT", url, options2, parameters, body);
      });
    }
    exports.put = put;
    function remove(url, body, options2, parameters) {
      return __awaiter(this, void 0, void 0, function* () {
        return _handleRequest("DELETE", url, options2, parameters, body);
      });
    }
    exports.remove = remove;
  }
});

// node_modules/@supabase/storage-js/dist/main/lib/StorageBucketApi.js
var require_StorageBucketApi = __commonJS({
  "node_modules/@supabase/storage-js/dist/main/lib/StorageBucketApi.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve2) {
          resolve2(value);
        });
      }
      return new (P || (P = Promise))(function(resolve2, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.StorageBucketApi = void 0;
    var fetch_1 = require_fetch2();
    var StorageBucketApi = class {
      constructor(url, headers = {}) {
        this.url = url;
        this.headers = headers;
      }
      listBuckets() {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const data = yield fetch_1.get(`${this.url}/bucket`, {headers: this.headers});
            return {data, error: null};
          } catch (error3) {
            return {data: null, error: error3};
          }
        });
      }
      getBucket(id) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const data = yield fetch_1.get(`${this.url}/bucket/${id}`, {headers: this.headers});
            return {data, error: null};
          } catch (error3) {
            return {data: null, error: error3};
          }
        });
      }
      createBucket(id) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const data = yield fetch_1.post(`${this.url}/bucket`, {id, name: id}, {headers: this.headers});
            return {data: data.name, error: null};
          } catch (error3) {
            return {data: null, error: error3};
          }
        });
      }
      emptyBucket(id) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const data = yield fetch_1.post(`${this.url}/bucket/${id}/empty`, {}, {headers: this.headers});
            return {data, error: null};
          } catch (error3) {
            return {data: null, error: error3};
          }
        });
      }
      deleteBucket(id) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const data = yield fetch_1.remove(`${this.url}/bucket/${id}`, {}, {headers: this.headers});
            return {data, error: null};
          } catch (error3) {
            return {data: null, error: error3};
          }
        });
      }
    };
    exports.StorageBucketApi = StorageBucketApi;
  }
});

// node_modules/@supabase/storage-js/dist/main/lib/helpers.js
var require_helpers2 = __commonJS({
  "node_modules/@supabase/storage-js/dist/main/lib/helpers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.isBrowser = void 0;
    exports.isBrowser = () => typeof window !== "undefined";
  }
});

// node_modules/@supabase/storage-js/dist/main/lib/StorageFileApi.js
var require_StorageFileApi = __commonJS({
  "node_modules/@supabase/storage-js/dist/main/lib/StorageFileApi.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve2) {
          resolve2(value);
        });
      }
      return new (P || (P = Promise))(function(resolve2, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.StorageFileApi = void 0;
    var fetch_1 = require_fetch2();
    var helpers_1 = require_helpers2();
    var DEFAULT_SEARCH_OPTIONS = {
      limit: 100,
      offset: 0,
      sortBy: {
        column: "name",
        order: "asc"
      }
    };
    var DEFAULT_FILE_OPTIONS = {
      cacheControl: "3600"
    };
    var StorageFileApi = class {
      constructor(url, headers = {}, bucketId) {
        this.url = url;
        this.headers = headers;
        this.bucketId = bucketId;
      }
      upload(path, file, fileOptions) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            if (!helpers_1.isBrowser())
              throw new Error("No browser detected.");
            const formData = new FormData();
            const options2 = Object.assign(Object.assign({}, DEFAULT_FILE_OPTIONS), fileOptions);
            formData.append("cacheControl", options2.cacheControl);
            formData.append("", file, file.name);
            const _path = this._getFinalPath(path);
            const res = yield fetch(`${this.url}/object/${_path}`, {
              method: "POST",
              body: formData,
              headers: Object.assign({}, this.headers)
            });
            if (res.ok) {
              return {data: {Key: _path}, error: null};
            } else {
              const error3 = yield res.json();
              return {data: null, error: error3};
            }
          } catch (error3) {
            return {data: null, error: error3};
          }
        });
      }
      update(path, file, fileOptions) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            if (!helpers_1.isBrowser())
              throw new Error("No browser detected.");
            const formData = new FormData();
            const options2 = Object.assign(Object.assign({}, DEFAULT_FILE_OPTIONS), fileOptions);
            formData.append("cacheControl", options2.cacheControl);
            formData.append("", file, file.name);
            const _path = this._getFinalPath(path);
            const res = yield fetch(`${this.url}/object/${_path}`, {
              method: "PUT",
              body: formData,
              headers: Object.assign({}, this.headers)
            });
            if (res.ok) {
              return {data: {Key: _path}, error: null};
            } else {
              const error3 = yield res.json();
              return {data: null, error: error3};
            }
          } catch (error3) {
            return {data: null, error: error3};
          }
        });
      }
      move(fromPath, toPath) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const data = yield fetch_1.post(`${this.url}/object/move`, {bucketId: this.bucketId, sourceKey: fromPath, destinationKey: toPath}, {headers: this.headers});
            return {data, error: null};
          } catch (error3) {
            return {data: null, error: error3};
          }
        });
      }
      createSignedUrl(path, expiresIn) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const _path = this._getFinalPath(path);
            let data = yield fetch_1.post(`${this.url}/object/sign/${_path}`, {expiresIn}, {headers: this.headers});
            const signedURL = `${this.url}${data.signedURL}`;
            data = {signedURL};
            return {data, error: null, signedURL};
          } catch (error3) {
            return {data: null, error: error3, signedURL: null};
          }
        });
      }
      download(path) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const _path = this._getFinalPath(path);
            const res = yield fetch_1.get(`${this.url}/object/${_path}`, {
              headers: this.headers,
              noResolveJson: true
            });
            const data = yield res.blob();
            return {data, error: null};
          } catch (error3) {
            return {data: null, error: error3};
          }
        });
      }
      remove(paths) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const data = yield fetch_1.remove(`${this.url}/object/${this.bucketId}`, {prefixes: paths}, {headers: this.headers});
            return {data, error: null};
          } catch (error3) {
            return {data: null, error: error3};
          }
        });
      }
      list(path, options2, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            const body = Object.assign(Object.assign(Object.assign({}, DEFAULT_SEARCH_OPTIONS), options2), {prefix: path || ""});
            const data = yield fetch_1.post(`${this.url}/object/list/${this.bucketId}`, body, {headers: this.headers}, parameters);
            return {data, error: null};
          } catch (error3) {
            return {data: null, error: error3};
          }
        });
      }
      _getFinalPath(path) {
        return `${this.bucketId}/${path}`;
      }
    };
    exports.StorageFileApi = StorageFileApi;
  }
});

// node_modules/@supabase/storage-js/dist/main/lib/types.js
var require_types3 = __commonJS({
  "node_modules/@supabase/storage-js/dist/main/lib/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
  }
});

// node_modules/@supabase/storage-js/dist/main/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/@supabase/storage-js/dist/main/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, {enumerable: true, get: function() {
        return m[k];
      }});
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    __exportStar(require_StorageBucketApi(), exports);
    __exportStar(require_StorageFileApi(), exports);
    __exportStar(require_types3(), exports);
  }
});

// node_modules/@supabase/storage-js/dist/main/SupabaseStorageClient.js
var require_SupabaseStorageClient = __commonJS({
  "node_modules/@supabase/storage-js/dist/main/SupabaseStorageClient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.SupabaseStorageClient = void 0;
    var lib_1 = require_lib2();
    var SupabaseStorageClient = class extends lib_1.StorageBucketApi {
      constructor(url, headers = {}) {
        super(url, headers);
      }
      from(id) {
        return new lib_1.StorageFileApi(this.url, this.headers, id);
      }
    };
    exports.SupabaseStorageClient = SupabaseStorageClient;
  }
});

// node_modules/@supabase/storage-js/dist/main/index.js
var require_main4 = __commonJS({
  "node_modules/@supabase/storage-js/dist/main/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, {enumerable: true, get: function() {
        return m[k];
      }});
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.SupabaseStorageClient = void 0;
    var SupabaseStorageClient_1 = require_SupabaseStorageClient();
    Object.defineProperty(exports, "SupabaseStorageClient", {enumerable: true, get: function() {
      return SupabaseStorageClient_1.SupabaseStorageClient;
    }});
    __exportStar(require_types3(), exports);
  }
});

// node_modules/@supabase/supabase-js/dist/main/SupabaseClient.js
var require_SupabaseClient = __commonJS({
  "node_modules/@supabase/supabase-js/dist/main/SupabaseClient.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve2) {
          resolve2(value);
        });
      }
      return new (P || (P = Promise))(function(resolve2, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    var constants_1 = require_constants();
    var SupabaseAuthClient_1 = require_SupabaseAuthClient();
    var SupabaseQueryBuilder_1 = require_SupabaseQueryBuilder();
    var storage_js_1 = require_main4();
    var postgrest_js_1 = require_main2();
    var realtime_js_1 = require_main3();
    var DEFAULT_OPTIONS = {
      schema: "public",
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
      localStorage: globalThis.localStorage,
      headers: constants_1.DEFAULT_HEADERS
    };
    var SupabaseClient = class {
      constructor(supabaseUrl, supabaseKey, options2) {
        this.supabaseUrl = supabaseUrl;
        this.supabaseKey = supabaseKey;
        if (!supabaseUrl)
          throw new Error("supabaseUrl is required.");
        if (!supabaseKey)
          throw new Error("supabaseKey is required.");
        const settings = Object.assign(Object.assign({}, DEFAULT_OPTIONS), options2);
        this.restUrl = `${supabaseUrl}/rest/v1`;
        this.realtimeUrl = `${supabaseUrl}/realtime/v1`.replace("http", "ws");
        this.authUrl = `${supabaseUrl}/auth/v1`;
        this.storageUrl = `${supabaseUrl}/storage/v1`;
        this.schema = settings.schema;
        this.auth = this._initSupabaseAuthClient(settings);
        this.realtime = this._initRealtimeClient();
      }
      get storage() {
        return new storage_js_1.SupabaseStorageClient(this.storageUrl, this._getAuthHeaders());
      }
      from(table) {
        const url = `${this.restUrl}/${table}`;
        return new SupabaseQueryBuilder_1.SupabaseQueryBuilder(url, {
          headers: this._getAuthHeaders(),
          schema: this.schema,
          realtime: this.realtime,
          table
        });
      }
      rpc(fn, params) {
        const rest = this._initPostgRESTClient();
        return rest.rpc(fn, params);
      }
      removeSubscription(subscription) {
        return new Promise((resolve2) => __awaiter(this, void 0, void 0, function* () {
          try {
            yield this._closeSubscription(subscription);
            const openSubscriptions = this.getSubscriptions().length;
            if (!openSubscriptions) {
              const {error: error3} = yield this.realtime.disconnect();
              if (error3)
                return resolve2({error: error3});
            }
            return resolve2({error: null, data: {openSubscriptions}});
          } catch (error3) {
            return resolve2({error: error3});
          }
        }));
      }
      _closeSubscription(subscription) {
        return __awaiter(this, void 0, void 0, function* () {
          if (!subscription.isClosed()) {
            yield this._closeChannel(subscription);
          }
        });
      }
      getSubscriptions() {
        return this.realtime.channels;
      }
      _initSupabaseAuthClient({autoRefreshToken, persistSession, detectSessionInUrl, localStorage: localStorage2}) {
        return new SupabaseAuthClient_1.SupabaseAuthClient({
          url: this.authUrl,
          headers: {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`
          },
          autoRefreshToken,
          persistSession,
          detectSessionInUrl,
          localStorage: localStorage2
        });
      }
      _initRealtimeClient() {
        return new realtime_js_1.RealtimeClient(this.realtimeUrl, {
          params: {apikey: this.supabaseKey}
        });
      }
      _initPostgRESTClient() {
        return new postgrest_js_1.PostgrestClient(this.restUrl, {
          headers: this._getAuthHeaders(),
          schema: this.schema
        });
      }
      _getAuthHeaders() {
        var _a, _b;
        const headers = {};
        const authBearer = (_b = (_a = this.auth.session()) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : this.supabaseKey;
        headers["apikey"] = this.supabaseKey;
        headers["Authorization"] = `Bearer ${authBearer}`;
        return headers;
      }
      _closeChannel(subscription) {
        return new Promise((resolve2, reject) => {
          subscription.unsubscribe().receive("ok", () => {
            this.realtime.remove(subscription);
            return resolve2(true);
          }).receive("error", (e) => reject(e));
        });
      }
    };
    exports.default = SupabaseClient;
  }
});

// node_modules/@supabase/supabase-js/dist/main/index.js
var require_main5 = __commonJS({
  "node_modules/@supabase/supabase-js/dist/main/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, {enumerable: true, get: function() {
        return m[k];
      }});
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {"default": mod};
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.SupabaseClient = exports.createClient = void 0;
    var SupabaseClient_1 = __importDefault(require_SupabaseClient());
    exports.SupabaseClient = SupabaseClient_1.default;
    __exportStar(require_main(), exports);
    __exportStar(require_main3(), exports);
    var createClient2 = (supabaseUrl, supabaseKey, options2) => {
      return new SupabaseClient_1.default(supabaseUrl, supabaseKey, options2);
    };
    exports.createClient = createClient2;
  }
});

// .svelte-kit/netlify/entry.js
__markAsModule(exports);
__export(exports, {
  handler: () => handler
});

// node_modules/@sveltejs/kit/dist/install-fetch.js
var import_http = __toModule(require("http"));
var import_https = __toModule(require("https"));
var import_zlib = __toModule(require("zlib"));
var import_stream = __toModule(require("stream"));
var import_util = __toModule(require("util"));
var import_crypto = __toModule(require("crypto"));
var import_url = __toModule(require("url"));
function dataUriToBuffer(uri) {
  if (!/^data:/i.test(uri)) {
    throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  }
  uri = uri.replace(/\r?\n/g, "");
  const firstComma = uri.indexOf(",");
  if (firstComma === -1 || firstComma <= 4) {
    throw new TypeError("malformed data: URI");
  }
  const meta = uri.substring(5, firstComma).split(";");
  let charset = "";
  let base64 = false;
  const type = meta[0] || "text/plain";
  let typeFull = type;
  for (let i = 1; i < meta.length; i++) {
    if (meta[i] === "base64") {
      base64 = true;
    } else {
      typeFull += `;${meta[i]}`;
      if (meta[i].indexOf("charset=") === 0) {
        charset = meta[i].substring(8);
      }
    }
  }
  if (!meta[0] && !charset.length) {
    typeFull += ";charset=US-ASCII";
    charset = "US-ASCII";
  }
  const encoding = base64 ? "base64" : "ascii";
  const data = unescape(uri.substring(firstComma + 1));
  const buffer = Buffer.from(data, encoding);
  buffer.type = type;
  buffer.typeFull = typeFull;
  buffer.charset = charset;
  return buffer;
}
var src = dataUriToBuffer;
var {Readable} = import_stream.default;
var wm = new WeakMap();
async function* read(parts) {
  for (const part of parts) {
    if ("stream" in part) {
      yield* part.stream();
    } else {
      yield part;
    }
  }
}
var Blob = class {
  constructor(blobParts = [], options2 = {}) {
    let size = 0;
    const parts = blobParts.map((element) => {
      let buffer;
      if (element instanceof Buffer) {
        buffer = element;
      } else if (ArrayBuffer.isView(element)) {
        buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
      } else if (element instanceof ArrayBuffer) {
        buffer = Buffer.from(element);
      } else if (element instanceof Blob) {
        buffer = element;
      } else {
        buffer = Buffer.from(typeof element === "string" ? element : String(element));
      }
      size += buffer.length || buffer.size || 0;
      return buffer;
    });
    const type = options2.type === void 0 ? "" : String(options2.type).toLowerCase();
    wm.set(this, {
      type: /[^\u0020-\u007E]/.test(type) ? "" : type,
      size,
      parts
    });
  }
  get size() {
    return wm.get(this).size;
  }
  get type() {
    return wm.get(this).type;
  }
  async text() {
    return Buffer.from(await this.arrayBuffer()).toString();
  }
  async arrayBuffer() {
    const data = new Uint8Array(this.size);
    let offset = 0;
    for await (const chunk of this.stream()) {
      data.set(chunk, offset);
      offset += chunk.length;
    }
    return data.buffer;
  }
  stream() {
    return Readable.from(read(wm.get(this).parts));
  }
  slice(start = 0, end = this.size, type = "") {
    const {size} = this;
    let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
    let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
    const span = Math.max(relativeEnd - relativeStart, 0);
    const parts = wm.get(this).parts.values();
    const blobParts = [];
    let added = 0;
    for (const part of parts) {
      const size2 = ArrayBuffer.isView(part) ? part.byteLength : part.size;
      if (relativeStart && size2 <= relativeStart) {
        relativeStart -= size2;
        relativeEnd -= size2;
      } else {
        const chunk = part.slice(relativeStart, Math.min(size2, relativeEnd));
        blobParts.push(chunk);
        added += ArrayBuffer.isView(chunk) ? chunk.byteLength : chunk.size;
        relativeStart = 0;
        if (added >= span) {
          break;
        }
      }
    }
    const blob = new Blob([], {type: String(type).toLowerCase()});
    Object.assign(wm.get(blob), {size: span, parts: blobParts});
    return blob;
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
  static [Symbol.hasInstance](object) {
    return object && typeof object === "object" && typeof object.stream === "function" && object.stream.length === 0 && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
  }
};
Object.defineProperties(Blob.prototype, {
  size: {enumerable: true},
  type: {enumerable: true},
  slice: {enumerable: true}
});
var fetchBlob = Blob;
var FetchBaseError = class extends Error {
  constructor(message, type) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.type = type;
  }
  get name() {
    return this.constructor.name;
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
};
var FetchError = class extends FetchBaseError {
  constructor(message, type, systemError) {
    super(message, type);
    if (systemError) {
      this.code = this.errno = systemError.code;
      this.erroredSysCall = systemError.syscall;
    }
  }
};
var NAME = Symbol.toStringTag;
var isURLSearchParameters = (object) => {
  return typeof object === "object" && typeof object.append === "function" && typeof object.delete === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.has === "function" && typeof object.set === "function" && typeof object.sort === "function" && object[NAME] === "URLSearchParams";
};
var isBlob = (object) => {
  return typeof object === "object" && typeof object.arrayBuffer === "function" && typeof object.type === "string" && typeof object.stream === "function" && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[NAME]);
};
function isFormData(object) {
  return typeof object === "object" && typeof object.append === "function" && typeof object.set === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.delete === "function" && typeof object.keys === "function" && typeof object.values === "function" && typeof object.entries === "function" && typeof object.constructor === "function" && object[NAME] === "FormData";
}
var isAbortSignal = (object) => {
  return typeof object === "object" && object[NAME] === "AbortSignal";
};
var carriage = "\r\n";
var dashes = "-".repeat(2);
var carriageLength = Buffer.byteLength(carriage);
var getFooter = (boundary) => `${dashes}${boundary}${dashes}${carriage.repeat(2)}`;
function getHeader(boundary, name, field) {
  let header = "";
  header += `${dashes}${boundary}${carriage}`;
  header += `Content-Disposition: form-data; name="${name}"`;
  if (isBlob(field)) {
    header += `; filename="${field.name}"${carriage}`;
    header += `Content-Type: ${field.type || "application/octet-stream"}`;
  }
  return `${header}${carriage.repeat(2)}`;
}
var getBoundary = () => (0, import_crypto.randomBytes)(8).toString("hex");
async function* formDataIterator(form, boundary) {
  for (const [name, value] of form) {
    yield getHeader(boundary, name, value);
    if (isBlob(value)) {
      yield* value.stream();
    } else {
      yield value;
    }
    yield carriage;
  }
  yield getFooter(boundary);
}
function getFormDataLength(form, boundary) {
  let length = 0;
  for (const [name, value] of form) {
    length += Buffer.byteLength(getHeader(boundary, name, value));
    if (isBlob(value)) {
      length += value.size;
    } else {
      length += Buffer.byteLength(String(value));
    }
    length += carriageLength;
  }
  length += Buffer.byteLength(getFooter(boundary));
  return length;
}
var INTERNALS$2 = Symbol("Body internals");
var Body = class {
  constructor(body, {
    size = 0
  } = {}) {
    let boundary = null;
    if (body === null) {
      body = null;
    } else if (isURLSearchParameters(body)) {
      body = Buffer.from(body.toString());
    } else if (isBlob(body))
      ;
    else if (Buffer.isBuffer(body))
      ;
    else if (import_util.types.isAnyArrayBuffer(body)) {
      body = Buffer.from(body);
    } else if (ArrayBuffer.isView(body)) {
      body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
    } else if (body instanceof import_stream.default)
      ;
    else if (isFormData(body)) {
      boundary = `NodeFetchFormDataBoundary${getBoundary()}`;
      body = import_stream.default.Readable.from(formDataIterator(body, boundary));
    } else {
      body = Buffer.from(String(body));
    }
    this[INTERNALS$2] = {
      body,
      boundary,
      disturbed: false,
      error: null
    };
    this.size = size;
    if (body instanceof import_stream.default) {
      body.on("error", (err) => {
        const error3 = err instanceof FetchBaseError ? err : new FetchError(`Invalid response body while trying to fetch ${this.url}: ${err.message}`, "system", err);
        this[INTERNALS$2].error = error3;
      });
    }
  }
  get body() {
    return this[INTERNALS$2].body;
  }
  get bodyUsed() {
    return this[INTERNALS$2].disturbed;
  }
  async arrayBuffer() {
    const {buffer, byteOffset, byteLength} = await consumeBody(this);
    return buffer.slice(byteOffset, byteOffset + byteLength);
  }
  async blob() {
    const ct = this.headers && this.headers.get("content-type") || this[INTERNALS$2].body && this[INTERNALS$2].body.type || "";
    const buf = await this.buffer();
    return new fetchBlob([buf], {
      type: ct
    });
  }
  async json() {
    const buffer = await consumeBody(this);
    return JSON.parse(buffer.toString());
  }
  async text() {
    const buffer = await consumeBody(this);
    return buffer.toString();
  }
  buffer() {
    return consumeBody(this);
  }
};
Object.defineProperties(Body.prototype, {
  body: {enumerable: true},
  bodyUsed: {enumerable: true},
  arrayBuffer: {enumerable: true},
  blob: {enumerable: true},
  json: {enumerable: true},
  text: {enumerable: true}
});
async function consumeBody(data) {
  if (data[INTERNALS$2].disturbed) {
    throw new TypeError(`body used already for: ${data.url}`);
  }
  data[INTERNALS$2].disturbed = true;
  if (data[INTERNALS$2].error) {
    throw data[INTERNALS$2].error;
  }
  let {body} = data;
  if (body === null) {
    return Buffer.alloc(0);
  }
  if (isBlob(body)) {
    body = body.stream();
  }
  if (Buffer.isBuffer(body)) {
    return body;
  }
  if (!(body instanceof import_stream.default)) {
    return Buffer.alloc(0);
  }
  const accum = [];
  let accumBytes = 0;
  try {
    for await (const chunk of body) {
      if (data.size > 0 && accumBytes + chunk.length > data.size) {
        const err = new FetchError(`content size at ${data.url} over limit: ${data.size}`, "max-size");
        body.destroy(err);
        throw err;
      }
      accumBytes += chunk.length;
      accum.push(chunk);
    }
  } catch (error3) {
    if (error3 instanceof FetchBaseError) {
      throw error3;
    } else {
      throw new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error3.message}`, "system", error3);
    }
  }
  if (body.readableEnded === true || body._readableState.ended === true) {
    try {
      if (accum.every((c) => typeof c === "string")) {
        return Buffer.from(accum.join(""));
      }
      return Buffer.concat(accum, accumBytes);
    } catch (error3) {
      throw new FetchError(`Could not create Buffer from response body for ${data.url}: ${error3.message}`, "system", error3);
    }
  } else {
    throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`);
  }
}
var clone = (instance, highWaterMark) => {
  let p1;
  let p2;
  let {body} = instance;
  if (instance.bodyUsed) {
    throw new Error("cannot clone body after it is used");
  }
  if (body instanceof import_stream.default && typeof body.getBoundary !== "function") {
    p1 = new import_stream.PassThrough({highWaterMark});
    p2 = new import_stream.PassThrough({highWaterMark});
    body.pipe(p1);
    body.pipe(p2);
    instance[INTERNALS$2].body = p1;
    body = p2;
  }
  return body;
};
var extractContentType = (body, request) => {
  if (body === null) {
    return null;
  }
  if (typeof body === "string") {
    return "text/plain;charset=UTF-8";
  }
  if (isURLSearchParameters(body)) {
    return "application/x-www-form-urlencoded;charset=UTF-8";
  }
  if (isBlob(body)) {
    return body.type || null;
  }
  if (Buffer.isBuffer(body) || import_util.types.isAnyArrayBuffer(body) || ArrayBuffer.isView(body)) {
    return null;
  }
  if (body && typeof body.getBoundary === "function") {
    return `multipart/form-data;boundary=${body.getBoundary()}`;
  }
  if (isFormData(body)) {
    return `multipart/form-data; boundary=${request[INTERNALS$2].boundary}`;
  }
  if (body instanceof import_stream.default) {
    return null;
  }
  return "text/plain;charset=UTF-8";
};
var getTotalBytes = (request) => {
  const {body} = request;
  if (body === null) {
    return 0;
  }
  if (isBlob(body)) {
    return body.size;
  }
  if (Buffer.isBuffer(body)) {
    return body.length;
  }
  if (body && typeof body.getLengthSync === "function") {
    return body.hasKnownLength && body.hasKnownLength() ? body.getLengthSync() : null;
  }
  if (isFormData(body)) {
    return getFormDataLength(request[INTERNALS$2].boundary);
  }
  return null;
};
var writeToStream = (dest, {body}) => {
  if (body === null) {
    dest.end();
  } else if (isBlob(body)) {
    body.stream().pipe(dest);
  } else if (Buffer.isBuffer(body)) {
    dest.write(body);
    dest.end();
  } else {
    body.pipe(dest);
  }
};
var validateHeaderName = typeof import_http.default.validateHeaderName === "function" ? import_http.default.validateHeaderName : (name) => {
  if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
    const err = new TypeError(`Header name must be a valid HTTP token [${name}]`);
    Object.defineProperty(err, "code", {value: "ERR_INVALID_HTTP_TOKEN"});
    throw err;
  }
};
var validateHeaderValue = typeof import_http.default.validateHeaderValue === "function" ? import_http.default.validateHeaderValue : (name, value) => {
  if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
    const err = new TypeError(`Invalid character in header content ["${name}"]`);
    Object.defineProperty(err, "code", {value: "ERR_INVALID_CHAR"});
    throw err;
  }
};
var Headers = class extends URLSearchParams {
  constructor(init2) {
    let result = [];
    if (init2 instanceof Headers) {
      const raw = init2.raw();
      for (const [name, values] of Object.entries(raw)) {
        result.push(...values.map((value) => [name, value]));
      }
    } else if (init2 == null)
      ;
    else if (typeof init2 === "object" && !import_util.types.isBoxedPrimitive(init2)) {
      const method = init2[Symbol.iterator];
      if (method == null) {
        result.push(...Object.entries(init2));
      } else {
        if (typeof method !== "function") {
          throw new TypeError("Header pairs must be iterable");
        }
        result = [...init2].map((pair) => {
          if (typeof pair !== "object" || import_util.types.isBoxedPrimitive(pair)) {
            throw new TypeError("Each header pair must be an iterable object");
          }
          return [...pair];
        }).map((pair) => {
          if (pair.length !== 2) {
            throw new TypeError("Each header pair must be a name/value tuple");
          }
          return [...pair];
        });
      }
    } else {
      throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
    }
    result = result.length > 0 ? result.map(([name, value]) => {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return [String(name).toLowerCase(), String(value)];
    }) : void 0;
    super(result);
    return new Proxy(this, {
      get(target, p, receiver) {
        switch (p) {
          case "append":
          case "set":
            return (name, value) => {
              validateHeaderName(name);
              validateHeaderValue(name, String(value));
              return URLSearchParams.prototype[p].call(receiver, String(name).toLowerCase(), String(value));
            };
          case "delete":
          case "has":
          case "getAll":
            return (name) => {
              validateHeaderName(name);
              return URLSearchParams.prototype[p].call(receiver, String(name).toLowerCase());
            };
          case "keys":
            return () => {
              target.sort();
              return new Set(URLSearchParams.prototype.keys.call(target)).keys();
            };
          default:
            return Reflect.get(target, p, receiver);
        }
      }
    });
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
  toString() {
    return Object.prototype.toString.call(this);
  }
  get(name) {
    const values = this.getAll(name);
    if (values.length === 0) {
      return null;
    }
    let value = values.join(", ");
    if (/^content-encoding$/i.test(name)) {
      value = value.toLowerCase();
    }
    return value;
  }
  forEach(callback) {
    for (const name of this.keys()) {
      callback(this.get(name), name);
    }
  }
  *values() {
    for (const name of this.keys()) {
      yield this.get(name);
    }
  }
  *entries() {
    for (const name of this.keys()) {
      yield [name, this.get(name)];
    }
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  raw() {
    return [...this.keys()].reduce((result, key) => {
      result[key] = this.getAll(key);
      return result;
    }, {});
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return [...this.keys()].reduce((result, key) => {
      const values = this.getAll(key);
      if (key === "host") {
        result[key] = values[0];
      } else {
        result[key] = values.length > 1 ? values : values[0];
      }
      return result;
    }, {});
  }
};
Object.defineProperties(Headers.prototype, ["get", "entries", "forEach", "values"].reduce((result, property) => {
  result[property] = {enumerable: true};
  return result;
}, {}));
function fromRawHeaders(headers = []) {
  return new Headers(headers.reduce((result, value, index2, array) => {
    if (index2 % 2 === 0) {
      result.push(array.slice(index2, index2 + 2));
    }
    return result;
  }, []).filter(([name, value]) => {
    try {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return true;
    } catch {
      return false;
    }
  }));
}
var redirectStatus = new Set([301, 302, 303, 307, 308]);
var isRedirect = (code) => {
  return redirectStatus.has(code);
};
var INTERNALS$1 = Symbol("Response internals");
var Response2 = class extends Body {
  constructor(body = null, options2 = {}) {
    super(body, options2);
    const status = options2.status || 200;
    const headers = new Headers(options2.headers);
    if (body !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(body);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    this[INTERNALS$1] = {
      url: options2.url,
      status,
      statusText: options2.statusText || "",
      headers,
      counter: options2.counter,
      highWaterMark: options2.highWaterMark
    };
  }
  get url() {
    return this[INTERNALS$1].url || "";
  }
  get status() {
    return this[INTERNALS$1].status;
  }
  get ok() {
    return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
  }
  get redirected() {
    return this[INTERNALS$1].counter > 0;
  }
  get statusText() {
    return this[INTERNALS$1].statusText;
  }
  get headers() {
    return this[INTERNALS$1].headers;
  }
  get highWaterMark() {
    return this[INTERNALS$1].highWaterMark;
  }
  clone() {
    return new Response2(clone(this, this.highWaterMark), {
      url: this.url,
      status: this.status,
      statusText: this.statusText,
      headers: this.headers,
      ok: this.ok,
      redirected: this.redirected,
      size: this.size
    });
  }
  static redirect(url, status = 302) {
    if (!isRedirect(status)) {
      throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
    }
    return new Response2(null, {
      headers: {
        location: new URL(url).toString()
      },
      status
    });
  }
  get [Symbol.toStringTag]() {
    return "Response";
  }
};
Object.defineProperties(Response2.prototype, {
  url: {enumerable: true},
  status: {enumerable: true},
  ok: {enumerable: true},
  redirected: {enumerable: true},
  statusText: {enumerable: true},
  headers: {enumerable: true},
  clone: {enumerable: true}
});
var getSearch = (parsedURL) => {
  if (parsedURL.search) {
    return parsedURL.search;
  }
  const lastOffset = parsedURL.href.length - 1;
  const hash2 = parsedURL.hash || (parsedURL.href[lastOffset] === "#" ? "#" : "");
  return parsedURL.href[lastOffset - hash2.length] === "?" ? "?" : "";
};
var INTERNALS = Symbol("Request internals");
var isRequest = (object) => {
  return typeof object === "object" && typeof object[INTERNALS] === "object";
};
var Request = class extends Body {
  constructor(input, init2 = {}) {
    let parsedURL;
    if (isRequest(input)) {
      parsedURL = new URL(input.url);
    } else {
      parsedURL = new URL(input);
      input = {};
    }
    let method = init2.method || input.method || "GET";
    method = method.toUpperCase();
    if ((init2.body != null || isRequest(input)) && input.body !== null && (method === "GET" || method === "HEAD")) {
      throw new TypeError("Request with GET/HEAD method cannot have body");
    }
    const inputBody = init2.body ? init2.body : isRequest(input) && input.body !== null ? clone(input) : null;
    super(inputBody, {
      size: init2.size || input.size || 0
    });
    const headers = new Headers(init2.headers || input.headers || {});
    if (inputBody !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(inputBody, this);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    let signal = isRequest(input) ? input.signal : null;
    if ("signal" in init2) {
      signal = init2.signal;
    }
    if (signal !== null && !isAbortSignal(signal)) {
      throw new TypeError("Expected signal to be an instanceof AbortSignal");
    }
    this[INTERNALS] = {
      method,
      redirect: init2.redirect || input.redirect || "follow",
      headers,
      parsedURL,
      signal
    };
    this.follow = init2.follow === void 0 ? input.follow === void 0 ? 20 : input.follow : init2.follow;
    this.compress = init2.compress === void 0 ? input.compress === void 0 ? true : input.compress : init2.compress;
    this.counter = init2.counter || input.counter || 0;
    this.agent = init2.agent || input.agent;
    this.highWaterMark = init2.highWaterMark || input.highWaterMark || 16384;
    this.insecureHTTPParser = init2.insecureHTTPParser || input.insecureHTTPParser || false;
  }
  get method() {
    return this[INTERNALS].method;
  }
  get url() {
    return (0, import_url.format)(this[INTERNALS].parsedURL);
  }
  get headers() {
    return this[INTERNALS].headers;
  }
  get redirect() {
    return this[INTERNALS].redirect;
  }
  get signal() {
    return this[INTERNALS].signal;
  }
  clone() {
    return new Request(this);
  }
  get [Symbol.toStringTag]() {
    return "Request";
  }
};
Object.defineProperties(Request.prototype, {
  method: {enumerable: true},
  url: {enumerable: true},
  headers: {enumerable: true},
  redirect: {enumerable: true},
  clone: {enumerable: true},
  signal: {enumerable: true}
});
var getNodeRequestOptions = (request) => {
  const {parsedURL} = request[INTERNALS];
  const headers = new Headers(request[INTERNALS].headers);
  if (!headers.has("Accept")) {
    headers.set("Accept", "*/*");
  }
  let contentLengthValue = null;
  if (request.body === null && /^(post|put)$/i.test(request.method)) {
    contentLengthValue = "0";
  }
  if (request.body !== null) {
    const totalBytes = getTotalBytes(request);
    if (typeof totalBytes === "number" && !Number.isNaN(totalBytes)) {
      contentLengthValue = String(totalBytes);
    }
  }
  if (contentLengthValue) {
    headers.set("Content-Length", contentLengthValue);
  }
  if (!headers.has("User-Agent")) {
    headers.set("User-Agent", "node-fetch");
  }
  if (request.compress && !headers.has("Accept-Encoding")) {
    headers.set("Accept-Encoding", "gzip,deflate,br");
  }
  let {agent} = request;
  if (typeof agent === "function") {
    agent = agent(parsedURL);
  }
  if (!headers.has("Connection") && !agent) {
    headers.set("Connection", "close");
  }
  const search = getSearch(parsedURL);
  const requestOptions = {
    path: parsedURL.pathname + search,
    pathname: parsedURL.pathname,
    hostname: parsedURL.hostname,
    protocol: parsedURL.protocol,
    port: parsedURL.port,
    hash: parsedURL.hash,
    search: parsedURL.search,
    query: parsedURL.query,
    href: parsedURL.href,
    method: request.method,
    headers: headers[Symbol.for("nodejs.util.inspect.custom")](),
    insecureHTTPParser: request.insecureHTTPParser,
    agent
  };
  return requestOptions;
};
var AbortError = class extends FetchBaseError {
  constructor(message, type = "aborted") {
    super(message, type);
  }
};
var supportedSchemas = new Set(["data:", "http:", "https:"]);
async function fetch2(url, options_) {
  return new Promise((resolve2, reject) => {
    const request = new Request(url, options_);
    const options2 = getNodeRequestOptions(request);
    if (!supportedSchemas.has(options2.protocol)) {
      throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${options2.protocol.replace(/:$/, "")}" is not supported.`);
    }
    if (options2.protocol === "data:") {
      const data = src(request.url);
      const response2 = new Response2(data, {headers: {"Content-Type": data.typeFull}});
      resolve2(response2);
      return;
    }
    const send = (options2.protocol === "https:" ? import_https.default : import_http.default).request;
    const {signal} = request;
    let response = null;
    const abort = () => {
      const error3 = new AbortError("The operation was aborted.");
      reject(error3);
      if (request.body && request.body instanceof import_stream.default.Readable) {
        request.body.destroy(error3);
      }
      if (!response || !response.body) {
        return;
      }
      response.body.emit("error", error3);
    };
    if (signal && signal.aborted) {
      abort();
      return;
    }
    const abortAndFinalize = () => {
      abort();
      finalize();
    };
    const request_ = send(options2);
    if (signal) {
      signal.addEventListener("abort", abortAndFinalize);
    }
    const finalize = () => {
      request_.abort();
      if (signal) {
        signal.removeEventListener("abort", abortAndFinalize);
      }
    };
    request_.on("error", (err) => {
      reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, "system", err));
      finalize();
    });
    request_.on("response", (response_) => {
      request_.setTimeout(0);
      const headers = fromRawHeaders(response_.rawHeaders);
      if (isRedirect(response_.statusCode)) {
        const location = headers.get("Location");
        const locationURL = location === null ? null : new URL(location, request.url);
        switch (request.redirect) {
          case "error":
            reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, "no-redirect"));
            finalize();
            return;
          case "manual":
            if (locationURL !== null) {
              try {
                headers.set("Location", locationURL);
              } catch (error3) {
                reject(error3);
              }
            }
            break;
          case "follow": {
            if (locationURL === null) {
              break;
            }
            if (request.counter >= request.follow) {
              reject(new FetchError(`maximum redirect reached at: ${request.url}`, "max-redirect"));
              finalize();
              return;
            }
            const requestOptions = {
              headers: new Headers(request.headers),
              follow: request.follow,
              counter: request.counter + 1,
              agent: request.agent,
              compress: request.compress,
              method: request.method,
              body: request.body,
              signal: request.signal,
              size: request.size
            };
            if (response_.statusCode !== 303 && request.body && options_.body instanceof import_stream.default.Readable) {
              reject(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
              finalize();
              return;
            }
            if (response_.statusCode === 303 || (response_.statusCode === 301 || response_.statusCode === 302) && request.method === "POST") {
              requestOptions.method = "GET";
              requestOptions.body = void 0;
              requestOptions.headers.delete("content-length");
            }
            resolve2(fetch2(new Request(locationURL, requestOptions)));
            finalize();
            return;
          }
        }
      }
      response_.once("end", () => {
        if (signal) {
          signal.removeEventListener("abort", abortAndFinalize);
        }
      });
      let body = (0, import_stream.pipeline)(response_, new import_stream.PassThrough(), (error3) => {
        reject(error3);
      });
      if (process.version < "v12.10") {
        response_.on("aborted", abortAndFinalize);
      }
      const responseOptions = {
        url: request.url,
        status: response_.statusCode,
        statusText: response_.statusMessage,
        headers,
        size: request.size,
        counter: request.counter,
        highWaterMark: request.highWaterMark
      };
      const codings = headers.get("Content-Encoding");
      if (!request.compress || request.method === "HEAD" || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      const zlibOptions = {
        flush: import_zlib.default.Z_SYNC_FLUSH,
        finishFlush: import_zlib.default.Z_SYNC_FLUSH
      };
      if (codings === "gzip" || codings === "x-gzip") {
        body = (0, import_stream.pipeline)(body, import_zlib.default.createGunzip(zlibOptions), (error3) => {
          reject(error3);
        });
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      if (codings === "deflate" || codings === "x-deflate") {
        const raw = (0, import_stream.pipeline)(response_, new import_stream.PassThrough(), (error3) => {
          reject(error3);
        });
        raw.once("data", (chunk) => {
          if ((chunk[0] & 15) === 8) {
            body = (0, import_stream.pipeline)(body, import_zlib.default.createInflate(), (error3) => {
              reject(error3);
            });
          } else {
            body = (0, import_stream.pipeline)(body, import_zlib.default.createInflateRaw(), (error3) => {
              reject(error3);
            });
          }
          response = new Response2(body, responseOptions);
          resolve2(response);
        });
        return;
      }
      if (codings === "br") {
        body = (0, import_stream.pipeline)(body, import_zlib.default.createBrotliDecompress(), (error3) => {
          reject(error3);
        });
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      response = new Response2(body, responseOptions);
      resolve2(response);
    });
    writeToStream(request_, request);
  });
}
globalThis.fetch = fetch2;
globalThis.Response = Response2;
globalThis.Request = Request;
globalThis.Headers = Headers;

// node_modules/@sveltejs/kit/dist/ssr.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  var counts = new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new Error("Cannot stringify a function");
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          var proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            throw new Error("Cannot stringify arbitrary non-POJOs");
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new Error("Cannot stringify POJOs with symbolic keys");
          }
          Object.keys(thing).forEach(function(key) {
            return walk(thing[key]);
          });
      }
    }
  }
  walk(value);
  var names = new Map();
  Array.from(counts).filter(function(entry) {
    return entry[1] > 1;
  }).sort(function(a, b) {
    return b[1] - a[1];
  }).forEach(function(entry, i) {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    var type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return "Object(" + stringify(thing.valueOf()) + ")";
      case "RegExp":
        return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
      case "Date":
        return "new Date(" + thing.getTime() + ")";
      case "Array":
        var members = thing.map(function(v, i) {
          return i in thing ? stringify(v) : "";
        });
        var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return "[" + members.join(",") + tail + "]";
      case "Set":
      case "Map":
        return "new " + type + "([" + Array.from(thing).map(stringify).join(",") + "])";
      default:
        var obj = "{" + Object.keys(thing).map(function(key) {
          return safeKey(key) + ":" + stringify(thing[key]);
        }).join(",") + "}";
        var proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
        }
        return obj;
    }
  }
  var str = stringify(value);
  if (names.size) {
    var params_1 = [];
    var statements_1 = [];
    var values_1 = [];
    names.forEach(function(name, thing) {
      params_1.push(name);
      if (isPrimitive(thing)) {
        values_1.push(stringifyPrimitive(thing));
        return;
      }
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values_1.push("Object(" + stringify(thing.valueOf()) + ")");
          break;
        case "RegExp":
          values_1.push(thing.toString());
          break;
        case "Date":
          values_1.push("new Date(" + thing.getTime() + ")");
          break;
        case "Array":
          values_1.push("Array(" + thing.length + ")");
          thing.forEach(function(v, i) {
            statements_1.push(name + "[" + i + "]=" + stringify(v));
          });
          break;
        case "Set":
          values_1.push("new Set");
          statements_1.push(name + "." + Array.from(thing).map(function(v) {
            return "add(" + stringify(v) + ")";
          }).join("."));
          break;
        case "Map":
          values_1.push("new Map");
          statements_1.push(name + "." + Array.from(thing).map(function(_a) {
            var k = _a[0], v = _a[1];
            return "set(" + stringify(k) + ", " + stringify(v) + ")";
          }).join("."));
          break;
        default:
          values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach(function(key) {
            statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
          });
      }
    });
    statements_1.push("return " + str);
    return "(function(" + params_1.join(",") + "){" + statements_1.join(";") + "}(" + values_1.join(",") + "))";
  } else {
    return str;
  }
}
function getName(num) {
  var name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string")
    return stringifyString(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  var str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
  var result = '"';
  for (var i = 0; i < str.length; i += 1) {
    var char = str.charAt(i);
    var code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped$1) {
      result += escaped$1[char];
    } else if (code >= 55296 && code <= 57343) {
      var next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += "\\u" + code.toString(16).toUpperCase();
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
function noop() {
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
var subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = [];
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (let i = 0; i < subscribers.length; i += 1) {
          const s2 = subscribers[i];
          s2[1]();
          subscriber_queue.push(s2, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.push(subscriber);
    if (subscribers.length === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      const index2 = subscribers.indexOf(subscriber);
      if (index2 !== -1) {
        subscribers.splice(index2, 1);
      }
      if (subscribers.length === 0) {
        stop();
        stop = null;
      }
    };
  }
  return {set, update, subscribe: subscribe2};
}
function hash(value) {
  let hash2 = 5381;
  let i = value.length;
  if (typeof value === "string") {
    while (i)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i);
  } else {
    while (i)
      hash2 = hash2 * 33 ^ value[--i];
  }
  return (hash2 >>> 0).toString(36);
}
var s$1 = JSON.stringify;
async function render_response({
  options: options2,
  $session,
  page_config,
  status,
  error: error3,
  branch,
  page: page2
}) {
  const css2 = new Set(options2.entry.css);
  const js = new Set(options2.entry.js);
  const styles = new Set();
  const serialized_data = [];
  let rendered;
  let is_private = false;
  let maxage;
  if (error3) {
    error3.stack = options2.get_stack(error3);
  }
  if (branch) {
    branch.forEach(({node, loaded, fetched, uses_credentials}) => {
      if (node.css)
        node.css.forEach((url) => css2.add(url));
      if (node.js)
        node.js.forEach((url) => js.add(url));
      if (node.styles)
        node.styles.forEach((content) => styles.add(content));
      if (fetched && page_config.hydrate)
        serialized_data.push(...fetched);
      if (uses_credentials)
        is_private = true;
      maxage = loaded.maxage;
    });
    const session2 = writable($session);
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        session: session2
      },
      page: page2,
      components: branch.map(({node}) => node.module.default)
    };
    for (let i = 0; i < branch.length; i += 1) {
      props[`props_${i}`] = await branch[i].loaded.props;
    }
    let session_tracking_active = false;
    const unsubscribe = session2.subscribe(() => {
      if (session_tracking_active)
        is_private = true;
    });
    session_tracking_active = true;
    try {
      rendered = options2.root.render(props);
    } finally {
      unsubscribe();
    }
  } else {
    rendered = {head: "", html: "", css: {code: "", map: null}};
  }
  const include_js = page_config.router || page_config.hydrate;
  if (!include_js)
    js.clear();
  const links = options2.amp ? styles.size > 0 || rendered.css.code.length > 0 ? `<style amp-custom>${Array.from(styles).concat(rendered.css.code).join("\n")}</style>` : "" : [
    ...Array.from(js).map((dep) => `<link rel="modulepreload" href="${dep}">`),
    ...Array.from(css2).map((dep) => `<link rel="stylesheet" href="${dep}">`)
  ].join("\n		");
  let init2 = "";
  if (options2.amp) {
    init2 = `
		<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
		<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
		<script async src="https://cdn.ampproject.org/v0.js"></script>`;
  } else if (include_js) {
    init2 = `<script type="module">
			import { start } from ${s$1(options2.entry.file)};
			start({
				target: ${options2.target ? `document.querySelector(${s$1(options2.target)})` : "document.body"},
				paths: ${s$1(options2.paths)},
				session: ${try_serialize($session, (error4) => {
      throw new Error(`Failed to serialize session data: ${error4.message}`);
    })},
				host: ${page2 && page2.host ? s$1(page2.host) : "location.host"},
				route: ${!!page_config.router},
				spa: ${!page_config.ssr},
				trailing_slash: ${s$1(options2.trailing_slash)},
				hydrate: ${page_config.ssr && page_config.hydrate ? `{
					status: ${status},
					error: ${serialize_error(error3)},
					nodes: [
						${branch.map(({node}) => `import(${s$1(node.entry)})`).join(",\n						")}
					],
					page: {
						host: ${page2.host ? s$1(page2.host) : "location.host"}, // TODO this is redundant
						path: ${s$1(page2.path)},
						query: new URLSearchParams(${s$1(page2.query.toString())}),
						params: ${s$1(page2.params)}
					}
				}` : "null"}
			});
		</script>`;
  }
  const head = [
    rendered.head,
    styles.size && !options2.amp ? `<style data-svelte>${Array.from(styles).join("\n")}</style>` : "",
    links,
    init2
  ].join("\n\n		");
  const body = options2.amp ? rendered.html : `${rendered.html}

			${serialized_data.map(({url, body: body2, json}) => {
    return body2 ? `<script type="svelte-data" url="${url}" body="${hash(body2)}">${json}</script>` : `<script type="svelte-data" url="${url}">${json}</script>`;
  }).join("\n\n			")}
		`.replace(/^\t{2}/gm, "");
  const headers = {
    "content-type": "text/html"
  };
  if (maxage) {
    headers["cache-control"] = `${is_private ? "private" : "public"}, max-age=${maxage}`;
  }
  if (!options2.floc) {
    headers["permissions-policy"] = "interest-cohort=()";
  }
  return {
    status,
    headers,
    body: options2.template({head, body})
  };
}
function try_serialize(data, fail) {
  try {
    return devalue(data);
  } catch (err) {
    if (fail)
      fail(err);
    return null;
  }
}
function serialize_error(error3) {
  if (!error3)
    return null;
  let serialized = try_serialize(error3);
  if (!serialized) {
    const {name, message, stack} = error3;
    serialized = try_serialize({name, message, stack});
  }
  if (!serialized) {
    serialized = "{}";
  }
  return serialized;
}
function normalize(loaded) {
  if (loaded.error) {
    const error3 = typeof loaded.error === "string" ? new Error(loaded.error) : loaded.error;
    const status = loaded.status;
    if (!(error3 instanceof Error)) {
      return {
        status: 500,
        error: new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof error3}"`)
      };
    }
    if (!status || status < 400 || status > 599) {
      console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500');
      return {status: 500, error: error3};
    }
    return {status, error: error3};
  }
  if (loaded.redirect) {
    if (!loaded.status || Math.floor(loaded.status / 100) !== 3) {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')
      };
    }
    if (typeof loaded.redirect !== "string") {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be a string')
      };
    }
  }
  return loaded;
}
function resolve(base, path) {
  const baseparts = path[0] === "/" ? [] : base.slice(1).split("/");
  const pathparts = path[0] === "/" ? path.slice(1).split("/") : path.split("/");
  baseparts.pop();
  for (let i = 0; i < pathparts.length; i += 1) {
    const part = pathparts[i];
    if (part === ".")
      continue;
    else if (part === "..")
      baseparts.pop();
    else
      baseparts.push(part);
  }
  return `/${baseparts.join("/")}`;
}
var s = JSON.stringify;
async function load_node({
  request,
  options: options2,
  state,
  route,
  page: page2,
  node,
  $session,
  context: context2,
  is_leaf,
  is_error,
  status,
  error: error3
}) {
  const {module: module2} = node;
  let uses_credentials = false;
  const fetched = [];
  let loaded;
  if (module2.load) {
    const load_input = {
      page: page2,
      get session() {
        uses_credentials = true;
        return $session;
      },
      fetch: async (resource, opts = {}) => {
        let url;
        if (typeof resource === "string") {
          url = resource;
        } else {
          url = resource.url;
          opts = {
            method: resource.method,
            headers: resource.headers,
            body: resource.body,
            mode: resource.mode,
            credentials: resource.credentials,
            cache: resource.cache,
            redirect: resource.redirect,
            referrer: resource.referrer,
            integrity: resource.integrity,
            ...opts
          };
        }
        if (options2.read && url.startsWith(options2.paths.assets)) {
          url = url.replace(options2.paths.assets, "");
        }
        if (url.startsWith("//")) {
          throw new Error(`Cannot request protocol-relative URL (${url}) in server-side fetch`);
        }
        let response;
        if (/^[a-zA-Z]+:/.test(url)) {
          response = await fetch(url, opts);
        } else {
          const [path, search] = url.split("?");
          const resolved = resolve(request.path, path);
          const filename = resolved.slice(1);
          const filename_html = `${filename}/index.html`;
          const asset = options2.manifest.assets.find((d) => d.file === filename || d.file === filename_html);
          if (asset) {
            if (options2.read) {
              response = new Response(options2.read(asset.file), {
                headers: {
                  "content-type": asset.type
                }
              });
            } else {
              response = await fetch(`http://${page2.host}/${asset.file}`, opts);
            }
          }
          if (!response) {
            const headers = {...opts.headers};
            if (opts.credentials !== "omit") {
              uses_credentials = true;
              headers.cookie = request.headers.cookie;
              if (!headers.authorization) {
                headers.authorization = request.headers.authorization;
              }
            }
            if (opts.body && typeof opts.body !== "string") {
              throw new Error("Request body must be a string");
            }
            const rendered = await respond({
              host: request.host,
              method: opts.method || "GET",
              headers,
              path: resolved,
              rawBody: opts.body,
              query: new URLSearchParams(search)
            }, options2, {
              fetched: url,
              initiator: route
            });
            if (rendered) {
              if (state.prerender) {
                state.prerender.dependencies.set(resolved, rendered);
              }
              response = new Response(rendered.body, {
                status: rendered.status,
                headers: rendered.headers
              });
            }
          }
        }
        if (response) {
          const proxy = new Proxy(response, {
            get(response2, key, receiver) {
              async function text() {
                const body = await response2.text();
                const headers = {};
                for (const [key2, value] of response2.headers) {
                  if (key2 !== "etag" && key2 !== "set-cookie")
                    headers[key2] = value;
                }
                if (!opts.body || typeof opts.body === "string") {
                  fetched.push({
                    url,
                    body: opts.body,
                    json: `{"status":${response2.status},"statusText":${s(response2.statusText)},"headers":${s(headers)},"body":${escape(body)}}`
                  });
                }
                return body;
              }
              if (key === "text") {
                return text;
              }
              if (key === "json") {
                return async () => {
                  return JSON.parse(await text());
                };
              }
              return Reflect.get(response2, key, response2);
            }
          });
          return proxy;
        }
        return response || new Response("Not found", {
          status: 404
        });
      },
      context: {...context2}
    };
    if (is_error) {
      load_input.status = status;
      load_input.error = error3;
    }
    loaded = await module2.load.call(null, load_input);
  } else {
    loaded = {};
  }
  if (!loaded && is_leaf && !is_error)
    return;
  return {
    node,
    loaded: normalize(loaded),
    context: loaded.context || context2,
    fetched,
    uses_credentials
  };
}
var escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
function escape(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
async function respond_with_error({request, options: options2, state, $session, status, error: error3}) {
  const default_layout = await options2.load_component(options2.manifest.layout);
  const default_error = await options2.load_component(options2.manifest.error);
  const page2 = {
    host: request.host,
    path: request.path,
    query: request.query,
    params: {}
  };
  const loaded = await load_node({
    request,
    options: options2,
    state,
    route: null,
    page: page2,
    node: default_layout,
    $session,
    context: {},
    is_leaf: false,
    is_error: false
  });
  const branch = [
    loaded,
    await load_node({
      request,
      options: options2,
      state,
      route: null,
      page: page2,
      node: default_error,
      $session,
      context: loaded.context,
      is_leaf: false,
      is_error: true,
      status,
      error: error3
    })
  ];
  try {
    return await render_response({
      options: options2,
      $session,
      page_config: {
        hydrate: options2.hydrate,
        router: options2.router,
        ssr: options2.ssr
      },
      status,
      error: error3,
      branch,
      page: page2
    });
  } catch (error4) {
    options2.handle_error(error4);
    return {
      status: 500,
      headers: {},
      body: error4.stack
    };
  }
}
async function respond$1({request, options: options2, state, $session, route}) {
  const match = route.pattern.exec(request.path);
  const params = route.params(match);
  const page2 = {
    host: request.host,
    path: request.path,
    query: request.query,
    params
  };
  let nodes;
  try {
    nodes = await Promise.all(route.a.map((id) => id && options2.load_component(id)));
  } catch (error4) {
    options2.handle_error(error4);
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 500,
      error: error4
    });
  }
  const leaf = nodes[nodes.length - 1].module;
  const page_config = {
    ssr: "ssr" in leaf ? leaf.ssr : options2.ssr,
    router: "router" in leaf ? leaf.router : options2.router,
    hydrate: "hydrate" in leaf ? leaf.hydrate : options2.hydrate
  };
  if (!leaf.prerender && state.prerender && !state.prerender.all) {
    return {
      status: 204,
      headers: {},
      body: null
    };
  }
  let branch;
  let status = 200;
  let error3;
  ssr:
    if (page_config.ssr) {
      let context2 = {};
      branch = [];
      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        let loaded;
        if (node) {
          try {
            loaded = await load_node({
              request,
              options: options2,
              state,
              route,
              page: page2,
              node,
              $session,
              context: context2,
              is_leaf: i === nodes.length - 1,
              is_error: false
            });
            if (!loaded)
              return;
            if (loaded.loaded.redirect) {
              return {
                status: loaded.loaded.status,
                headers: {
                  location: encodeURI(loaded.loaded.redirect)
                }
              };
            }
            if (loaded.loaded.error) {
              ({status, error: error3} = loaded.loaded);
            }
          } catch (e) {
            options2.handle_error(e);
            status = 500;
            error3 = e;
          }
          if (error3) {
            while (i--) {
              if (route.b[i]) {
                const error_node = await options2.load_component(route.b[i]);
                let error_loaded;
                let node_loaded;
                let j = i;
                while (!(node_loaded = branch[j])) {
                  j -= 1;
                }
                try {
                  error_loaded = await load_node({
                    request,
                    options: options2,
                    state,
                    route,
                    page: page2,
                    node: error_node,
                    $session,
                    context: node_loaded.context,
                    is_leaf: false,
                    is_error: true,
                    status,
                    error: error3
                  });
                  if (error_loaded.loaded.error) {
                    continue;
                  }
                  branch = branch.slice(0, j + 1).concat(error_loaded);
                  break ssr;
                } catch (e) {
                  options2.handle_error(e);
                  continue;
                }
              }
            }
            return await respond_with_error({
              request,
              options: options2,
              state,
              $session,
              status,
              error: error3
            });
          }
        }
        branch.push(loaded);
        if (loaded && loaded.loaded.context) {
          context2 = {
            ...context2,
            ...loaded.loaded.context
          };
        }
      }
    }
  try {
    return await render_response({
      options: options2,
      $session,
      page_config,
      status,
      error: error3,
      branch: branch && branch.filter(Boolean),
      page: page2
    });
  } catch (error4) {
    options2.handle_error(error4);
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 500,
      error: error4
    });
  }
}
async function render_page(request, route, options2, state) {
  if (state.initiator === route) {
    return {
      status: 404,
      headers: {},
      body: `Not found: ${request.path}`
    };
  }
  const $session = await options2.hooks.getSession(request);
  if (route) {
    const response = await respond$1({
      request,
      options: options2,
      state,
      $session,
      route
    });
    if (response) {
      return response;
    }
    if (state.fetched) {
      return {
        status: 500,
        headers: {},
        body: `Bad request in load function: failed to fetch ${state.fetched}`
      };
    }
  } else {
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 404,
      error: new Error(`Not found: ${request.path}`)
    });
  }
}
function lowercase_keys(obj) {
  const clone2 = {};
  for (const key in obj) {
    clone2[key.toLowerCase()] = obj[key];
  }
  return clone2;
}
function error(body) {
  return {
    status: 500,
    body,
    headers: {}
  };
}
async function render_route(request, route) {
  const mod = await route.load();
  const handler2 = mod[request.method.toLowerCase().replace("delete", "del")];
  if (handler2) {
    const match = route.pattern.exec(request.path);
    const params = route.params(match);
    const response = await handler2({...request, params});
    if (response) {
      if (typeof response !== "object") {
        return error(`Invalid response from route ${request.path}: expected an object, got ${typeof response}`);
      }
      let {status = 200, body, headers = {}} = response;
      headers = lowercase_keys(headers);
      const type = headers["content-type"];
      if (type === "application/octet-stream" && !(body instanceof Uint8Array)) {
        return error(`Invalid response from route ${request.path}: body must be an instance of Uint8Array if content type is application/octet-stream`);
      }
      if (body instanceof Uint8Array && type !== "application/octet-stream") {
        return error(`Invalid response from route ${request.path}: Uint8Array body must be accompanied by content-type: application/octet-stream header`);
      }
      let normalized_body;
      if (typeof body === "object" && (!type || type === "application/json")) {
        headers = {...headers, "content-type": "application/json"};
        normalized_body = JSON.stringify(body);
      } else {
        normalized_body = body;
      }
      return {status, body: normalized_body, headers};
    }
  }
}
function read_only_form_data() {
  const map = new Map();
  return {
    append(key, value) {
      if (map.has(key)) {
        map.get(key).push(value);
      } else {
        map.set(key, [value]);
      }
    },
    data: new ReadOnlyFormData(map)
  };
}
var ReadOnlyFormData = class {
  #map;
  constructor(map) {
    this.#map = map;
  }
  get(key) {
    const value = this.#map.get(key);
    return value && value[0];
  }
  getAll(key) {
    return this.#map.get(key);
  }
  has(key) {
    return this.#map.has(key);
  }
  *[Symbol.iterator]() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *entries() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *keys() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield key;
      }
    }
  }
  *values() {
    for (const [, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield value;
      }
    }
  }
};
function parse_body(req) {
  const raw = req.rawBody;
  if (!raw)
    return raw;
  const [type, ...directives] = req.headers["content-type"].split(/;\s*/);
  if (typeof raw === "string") {
    switch (type) {
      case "text/plain":
        return raw;
      case "application/json":
        return JSON.parse(raw);
      case "application/x-www-form-urlencoded":
        return get_urlencoded(raw);
      case "multipart/form-data": {
        const boundary = directives.find((directive) => directive.startsWith("boundary="));
        if (!boundary)
          throw new Error("Missing boundary");
        return get_multipart(raw, boundary.slice("boundary=".length));
      }
      default:
        throw new Error(`Invalid Content-Type ${type}`);
    }
  }
  return raw;
}
function get_urlencoded(text) {
  const {data, append} = read_only_form_data();
  text.replace(/\+/g, " ").split("&").forEach((str) => {
    const [key, value] = str.split("=");
    append(decodeURIComponent(key), decodeURIComponent(value));
  });
  return data;
}
function get_multipart(text, boundary) {
  const parts = text.split(`--${boundary}`);
  const nope = () => {
    throw new Error("Malformed form data");
  };
  if (parts[0] !== "" || parts[parts.length - 1].trim() !== "--") {
    nope();
  }
  const {data, append} = read_only_form_data();
  parts.slice(1, -1).forEach((part) => {
    const match = /\s*([\s\S]+?)\r\n\r\n([\s\S]*)\s*/.exec(part);
    const raw_headers = match[1];
    const body = match[2].trim();
    let key;
    raw_headers.split("\r\n").forEach((str) => {
      const [raw_header, ...raw_directives] = str.split("; ");
      let [name, value] = raw_header.split(": ");
      name = name.toLowerCase();
      const directives = {};
      raw_directives.forEach((raw_directive) => {
        const [name2, value2] = raw_directive.split("=");
        directives[name2] = JSON.parse(value2);
      });
      if (name === "content-disposition") {
        if (value !== "form-data")
          nope();
        if (directives.filename) {
          throw new Error("File upload is not yet implemented");
        }
        if (directives.name) {
          key = directives.name;
        }
      }
    });
    if (!key)
      nope();
    append(key, body);
  });
  return data;
}
async function respond(incoming, options2, state = {}) {
  if (incoming.path !== "/" && options2.trailing_slash !== "ignore") {
    const has_trailing_slash = incoming.path.endsWith("/");
    if (has_trailing_slash && options2.trailing_slash === "never" || !has_trailing_slash && options2.trailing_slash === "always" && !incoming.path.split("/").pop().includes(".")) {
      const path = has_trailing_slash ? incoming.path.slice(0, -1) : incoming.path + "/";
      const q = incoming.query.toString();
      return {
        status: 301,
        headers: {
          location: encodeURI(path + (q ? `?${q}` : ""))
        }
      };
    }
  }
  try {
    return await options2.hooks.handle({
      request: {
        ...incoming,
        headers: lowercase_keys(incoming.headers),
        body: parse_body(incoming),
        params: null,
        locals: {}
      },
      render: async (request) => {
        if (state.prerender && state.prerender.fallback) {
          return await render_response({
            options: options2,
            $session: await options2.hooks.getSession(request),
            page_config: {ssr: false, router: true, hydrate: true},
            status: 200,
            error: null,
            branch: [],
            page: null
          });
        }
        for (const route of options2.manifest.routes) {
          if (!route.pattern.test(request.path))
            continue;
          const response = route.type === "endpoint" ? await render_route(request, route) : await render_page(request, route, options2, state);
          if (response) {
            if (response.status === 200) {
              if (!/(no-store|immutable)/.test(response.headers["cache-control"])) {
                const etag = `"${hash(response.body)}"`;
                if (request.headers["if-none-match"] === etag) {
                  return {
                    status: 304,
                    headers: {},
                    body: null
                  };
                }
                response.headers["etag"] = etag;
              }
            }
            return response;
          }
        }
        return await render_page(request, null, options2, state);
      }
    });
  } catch (e) {
    options2.handle_error(e);
    return {
      status: 500,
      headers: {},
      body: options2.dev ? e.stack : e.message
    };
  }
}

// node_modules/svelte/internal/index.mjs
function noop2() {
}
var identity = (x) => x;
function run(fn) {
  return fn();
}
function blank_object() {
  return Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal2(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function subscribe(store2, ...callbacks) {
  if (store2 == null) {
    return noop2;
  }
  const unsub = store2.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function null_to_empty(value) {
  return value == null ? "" : value;
}
var tasks = new Set();
function custom_event(type, detail) {
  const e = document.createEvent("CustomEvent");
  e.initCustomEvent(type, false, false, detail);
  return e;
}
var active_docs = new Set();
var current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}
function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}
function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = custom_event(type, detail);
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
    }
  };
}
function setContext(key, context2) {
  get_current_component().$$.context.set(key, context2);
}
function getContext(key) {
  return get_current_component().$$.context.get(key);
}
var resolved_promise = Promise.resolve();
var seen_callbacks = new Set();
var outroing = new Set();
var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
var boolean_attributes = new Set([
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
]);
var escaped2 = {
  '"': "&quot;",
  "'": "&#39;",
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;"
};
function escape2(html) {
  return String(html).replace(/["'&<>]/g, (match) => escaped2[match]);
}
function each(items, fn) {
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
var missing_component = {
  $$render: () => ""
};
function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component;
}
var on_destroy;
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context2) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(parent_component ? parent_component.$$.context : context2 || []),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({$$});
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, {$$slots = {}, context: context2 = new Map()} = {}) => {
      on_destroy = [];
      const result = {title: "", head: "", css: new Set()};
      const html = $$render(result, props, {}, $$slots, context2);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  return ` ${name}${value === true ? "" : `=${typeof value === "string" ? JSON.stringify(escape2(value)) : `"${value}"`}`}`;
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: "open"});
    }
    connectedCallback() {
      const {on_mount} = this.$$;
      this.$$.on_disconnect = on_mount.map(run).filter(is_function);
      for (const key in this.$$.slotted) {
        this.appendChild(this.$$.slotted[key]);
      }
    }
    attributeChangedCallback(attr, _oldValue, newValue) {
      this[attr] = newValue;
    }
    disconnectedCallback() {
      run_all(this.$$.on_disconnect);
    }
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop2;
    }
    $on(type, callback) {
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index2 = callbacks.indexOf(callback);
        if (index2 !== -1)
          callbacks.splice(index2, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };
}

// node_modules/svelte/transition/index.mjs
function fade(node, {delay = 0, duration: duration2 = 400, easing = identity} = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration: duration2,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}

// node_modules/svelte/store/index.mjs
var subscriber_queue2 = [];
function writable2(value, start = noop2) {
  let stop;
  const subscribers = [];
  function set(new_value) {
    if (safe_not_equal2(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue2.length;
        for (let i = 0; i < subscribers.length; i += 1) {
          const s2 = subscribers[i];
          s2[1]();
          subscriber_queue2.push(s2, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue2.length; i += 2) {
            subscriber_queue2[i][0](subscriber_queue2[i + 1]);
          }
          subscriber_queue2.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop2) {
    const subscriber = [run2, invalidate];
    subscribers.push(subscriber);
    if (subscribers.length === 1) {
      stop = start(set) || noop2;
    }
    run2(value);
    return () => {
      const index2 = subscribers.indexOf(subscriber);
      if (index2 !== -1) {
        subscribers.splice(index2, 1);
      }
      if (subscribers.length === 0) {
        stop();
        stop = null;
      }
    };
  }
  return {set, update, subscribe: subscribe2};
}

// .svelte-kit/output/server/app.js
var import_client = __toModule(require_sanityClient());
var import_image_url = __toModule(require_node5());
var import_supabase_js = __toModule(require_main5());
var css$K = {
  code: "#svelte-announcer.svelte-1j55zn5{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}",
  map: `{"version":3,"file":"root.svelte","sources":["root.svelte"],"sourcesContent":["<!-- This file is generated by @sveltejs/kit \u2014 do not edit it! -->\\n<script>\\n\\timport { setContext, afterUpdate, onMount } from 'svelte';\\n\\n\\t// stores\\n\\texport let stores;\\n\\texport let page;\\n\\n\\texport let components;\\n\\texport let props_0 = null;\\n\\texport let props_1 = null;\\n\\texport let props_2 = null;\\n\\texport let props_3 = null;\\n\\n\\tsetContext('__svelte__', stores);\\n\\n\\t$: stores.page.set(page);\\n\\tafterUpdate(stores.page.notify);\\n\\n\\tlet mounted = false;\\n\\tlet navigated = false;\\n\\tlet title = null;\\n\\n\\tonMount(() => {\\n\\t\\tconst unsubscribe = stores.page.subscribe(() => {\\n\\t\\t\\tif (mounted) {\\n\\t\\t\\t\\tnavigated = true;\\n\\t\\t\\t\\ttitle = document.title || 'untitled page';\\n\\t\\t\\t}\\n\\t\\t});\\n\\n\\t\\tmounted = true;\\n\\t\\treturn unsubscribe;\\n\\t});\\n</script>\\n\\n<svelte:component this={components[0]} {...(props_0 || {})}>\\n\\t{#if components[1]}\\n\\t\\t<svelte:component this={components[1]} {...(props_1 || {})}>\\n\\t\\t\\t{#if components[2]}\\n\\t\\t\\t\\t<svelte:component this={components[2]} {...(props_2 || {})}>\\n\\t\\t\\t\\t\\t{#if components[3]}\\n\\t\\t\\t\\t\\t\\t<svelte:component this={components[3]} {...(props_3 || {})}/>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</svelte:component>\\n\\t\\t\\t{/if}\\n\\t\\t</svelte:component>\\n\\t{/if}\\n</svelte:component>\\n\\n{#if mounted}\\n\\t<div id=\\"svelte-announcer\\" aria-live=\\"assertive\\" aria-atomic=\\"true\\">\\n\\t\\t{#if navigated}\\n\\t\\t\\t{title}\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t#svelte-announcer {\\n\\t\\tposition: absolute;\\n\\t\\tleft: 0;\\n\\t\\ttop: 0;\\n\\t\\tclip: rect(0 0 0 0);\\n\\t\\tclip-path: inset(50%);\\n\\t\\toverflow: hidden;\\n\\t\\twhite-space: nowrap;\\n\\t\\twidth: 1px;\\n\\t\\theight: 1px;\\n\\t}\\n</style>"],"names":[],"mappings":"AA2DC,iBAAiB,eAAC,CAAC,AAClB,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,AACZ,CAAC"}`
};
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {stores} = $$props;
  let {page: page2} = $$props;
  let {components} = $$props;
  let {props_0 = null} = $$props;
  let {props_1 = null} = $$props;
  let {props_2 = null} = $$props;
  let {props_3 = null} = $$props;
  setContext("__svelte__", stores);
  afterUpdate(stores.page.notify);
  let mounted = false;
  let navigated = false;
  let title = null;
  onMount(() => {
    const unsubscribe = stores.page.subscribe(() => {
      if (mounted) {
        navigated = true;
        title = document.title || "untitled page";
      }
    });
    mounted = true;
    return unsubscribe;
  });
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  if ($$props.props_3 === void 0 && $$bindings.props_3 && props_3 !== void 0)
    $$bindings.props_3(props_3);
  $$result.css.add(css$K);
  {
    stores.page.set(page2);
  }
  return `


${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => `${components[1] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
      default: () => `${components[2] ? `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {
        default: () => `${components[3] ? `${validate_component(components[3] || missing_component, "svelte:component").$$render($$result, Object.assign(props_3 || {}), {}, {})}` : ``}`
      })}` : ``}`
    })}` : ``}`
  })}

${mounted ? `<div id="${"svelte-announcer"}" aria-live="${"assertive"}" aria-atomic="${"true"}" class="${"svelte-1j55zn5"}">${navigated ? `${escape2(title)}` : ``}</div>` : ``}`;
});
function set_paths(paths) {
}
function set_prerendering(value) {
}
var user_hooks = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module"
});
var template = ({head, body}) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="/favicon.ico" />\n		<link rel="preconnect" href="https://fonts.gstatic.com">\n		<link href="https://fonts.googleapis.com/css2?family=Mukta+Mahee:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n		' + head + '\n	</head>\n	<body>\n		<div id="svelte" style="z-index: 0;\n		position: relative;">' + body + "</div>\n	</body>\n</html>\n";
var options$1 = null;
function init(settings) {
  set_paths(settings.paths);
  set_prerendering(settings.prerendering || false);
  options$1 = {
    amp: false,
    dev: false,
    entry: {
      file: "/./_app/start-d300fb95.js",
      css: ["/./_app/assets/start-a8cd1609.css", "/./_app/assets/vendor-77443691.css"],
      js: ["/./_app/start-d300fb95.js", "/./_app/chunks/vendor-775787cd.js", "/./_app/chunks/singletons-bb9012b7.js"]
    },
    fetched: void 0,
    floc: false,
    get_component_path: (id) => "/./_app/" + entry_lookup[id],
    get_stack: (error22) => String(error22),
    handle_error: (error22) => {
      console.error(error22.stack);
      error22.stack = options$1.get_stack(error22);
    },
    hooks: get_hooks(user_hooks),
    hydrate: true,
    initiator: void 0,
    load_component,
    manifest,
    paths: settings.paths,
    read: settings.read,
    root: Root,
    router: true,
    ssr: true,
    target: "#svelte",
    template,
    trailing_slash: "never"
  };
}
var empty = () => ({});
var manifest = {
  assets: [],
  layout: "src/routes/__layout.svelte",
  error: ".svelte-kit/build/components/error.svelte",
  routes: [
    {
      type: "page",
      pattern: /^\/$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/dashboard\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/dashboard/__layout.svelte", "src/routes/dashboard/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/dashboard\/contracts\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/dashboard/__layout.svelte", "src/routes/dashboard/contracts.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/dashboard\/invoices\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/dashboard/__layout.svelte", "src/routes/dashboard/invoices.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/dashboard\/assets\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/dashboard/__layout.svelte", "src/routes/dashboard/assets.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/sign-in\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/sign-in.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/sign-up\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/sign-up.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    }
  ]
};
var get_hooks = (hooks) => ({
  getSession: hooks.getSession || (() => ({})),
  handle: hooks.handle || (({request, render: render2}) => render2(request))
});
var module_lookup = {
  "src/routes/__layout.svelte": () => Promise.resolve().then(function() {
    return __layout$1;
  }),
  ".svelte-kit/build/components/error.svelte": () => Promise.resolve().then(function() {
    return error2;
  }),
  "src/routes/index.svelte": () => Promise.resolve().then(function() {
    return index$1;
  }),
  "src/routes/dashboard/__layout.svelte": () => Promise.resolve().then(function() {
    return __layout;
  }),
  "src/routes/dashboard/index.svelte": () => Promise.resolve().then(function() {
    return index;
  }),
  "src/routes/dashboard/contracts.svelte": () => Promise.resolve().then(function() {
    return contracts;
  }),
  "src/routes/dashboard/invoices.svelte": () => Promise.resolve().then(function() {
    return invoices;
  }),
  "src/routes/dashboard/assets.svelte": () => Promise.resolve().then(function() {
    return assets;
  }),
  "src/routes/sign-in.svelte": () => Promise.resolve().then(function() {
    return signIn;
  }),
  "src/routes/sign-up.svelte": () => Promise.resolve().then(function() {
    return signUp;
  })
};
var metadata_lookup = {"src/routes/__layout.svelte": {"entry": "/./_app/pages/__layout.svelte-f56d9861.js", "css": ["/./_app/assets/pages/__layout.svelte-4ed406b4.css", "/./_app/assets/vendor-77443691.css"], "js": ["/./_app/pages/__layout.svelte-f56d9861.js", "/./_app/chunks/vendor-775787cd.js", "/./_app/chunks/db-e170d62c.js", "/./_app/chunks/stores-5e0a1a75.js", "/./_app/chunks/navigation-20968cc5.js", "/./_app/chunks/singletons-bb9012b7.js"], "styles": null}, ".svelte-kit/build/components/error.svelte": {"entry": "/./_app/error.svelte-510e1b76.js", "css": ["/./_app/assets/vendor-77443691.css"], "js": ["/./_app/error.svelte-510e1b76.js", "/./_app/chunks/vendor-775787cd.js"], "styles": null}, "src/routes/index.svelte": {"entry": "/./_app/pages/index.svelte-d370d69b.js", "css": ["/./_app/assets/pages/index.svelte-d88f015f.css", "/./_app/assets/vendor-77443691.css", "/./_app/assets/SignInForm-599fd1ee.css"], "js": ["/./_app/pages/index.svelte-d370d69b.js", "/./_app/chunks/vendor-775787cd.js", "/./_app/chunks/SignInForm-86647afd.js", "/./_app/chunks/db-e170d62c.js", "/./_app/chunks/navigation-20968cc5.js", "/./_app/chunks/singletons-bb9012b7.js"], "styles": null}, "src/routes/dashboard/__layout.svelte": {"entry": "/./_app/pages/dashboard/__layout.svelte-c279c5b5.js", "css": ["/./_app/assets/pages/dashboard/__layout.svelte-db589773.css", "/./_app/assets/vendor-77443691.css"], "js": ["/./_app/pages/dashboard/__layout.svelte-c279c5b5.js", "/./_app/chunks/vendor-775787cd.js", "/./_app/chunks/stores-5e0a1a75.js"], "styles": null}, "src/routes/dashboard/index.svelte": {"entry": "/./_app/pages/dashboard/index.svelte-6064831a.js", "css": ["/./_app/assets/pages/dashboard/index.svelte-9294f439.css", "/./_app/assets/vendor-77443691.css", "/./_app/assets/Loading-16631e13.css"], "js": ["/./_app/pages/dashboard/index.svelte-6064831a.js", "/./_app/chunks/vendor-775787cd.js", "/./_app/chunks/stores-5e0a1a75.js", "/./_app/chunks/Loading-bec7fd4d.js", "/./_app/chunks/utils-ce207ac5.js"], "styles": null}, "src/routes/dashboard/contracts.svelte": {"entry": "/./_app/pages/dashboard/contracts.svelte-f136e543.js", "css": ["/./_app/assets/vendor-77443691.css", "/./_app/assets/Loading-16631e13.css"], "js": ["/./_app/pages/dashboard/contracts.svelte-f136e543.js", "/./_app/chunks/vendor-775787cd.js", "/./_app/chunks/stores-5e0a1a75.js", "/./_app/chunks/Loading-bec7fd4d.js", "/./_app/chunks/utils-ce207ac5.js"], "styles": null}, "src/routes/dashboard/invoices.svelte": {"entry": "/./_app/pages/dashboard/invoices.svelte-e3353ad1.js", "css": ["/./_app/assets/pages/dashboard/invoices.svelte-e317d7b5.css", "/./_app/assets/vendor-77443691.css", "/./_app/assets/Loading-16631e13.css"], "js": ["/./_app/pages/dashboard/invoices.svelte-e3353ad1.js", "/./_app/chunks/vendor-775787cd.js", "/./_app/chunks/stores-5e0a1a75.js", "/./_app/chunks/Loading-bec7fd4d.js"], "styles": null}, "src/routes/dashboard/assets.svelte": {"entry": "/./_app/pages/dashboard/assets.svelte-6d989632.js", "css": ["/./_app/assets/pages/dashboard/assets.svelte-fe4f8d14.css", "/./_app/assets/vendor-77443691.css", "/./_app/assets/Loading-16631e13.css"], "js": ["/./_app/pages/dashboard/assets.svelte-6d989632.js", "/./_app/chunks/vendor-775787cd.js", "/./_app/chunks/stores-5e0a1a75.js", "/./_app/chunks/Loading-bec7fd4d.js"], "styles": null}, "src/routes/sign-in.svelte": {"entry": "/./_app/pages/sign-in.svelte-e360c715.js", "css": ["/./_app/assets/vendor-77443691.css", "/./_app/assets/SignInForm-599fd1ee.css"], "js": ["/./_app/pages/sign-in.svelte-e360c715.js", "/./_app/chunks/vendor-775787cd.js", "/./_app/chunks/SignInForm-86647afd.js", "/./_app/chunks/db-e170d62c.js", "/./_app/chunks/navigation-20968cc5.js", "/./_app/chunks/singletons-bb9012b7.js"], "styles": null}, "src/routes/sign-up.svelte": {"entry": "/./_app/pages/sign-up.svelte-0db386e3.js", "css": ["/./_app/assets/pages/sign-up.svelte-c00177d9.css", "/./_app/assets/vendor-77443691.css"], "js": ["/./_app/pages/sign-up.svelte-0db386e3.js", "/./_app/chunks/vendor-775787cd.js", "/./_app/chunks/db-e170d62c.js"], "styles": null}};
async function load_component(file) {
  return {
    module: await module_lookup[file](),
    ...metadata_lookup[file]
  };
}
init({paths: {"base": "", "assets": "/."}});
function render(request, {
  prerender
} = {}) {
  const host = request.headers["host"];
  return respond({...request, host}, options$1, {prerender});
}
var supabase = (0, import_supabase_js.createClient)("https://apolvnmnuukyrpsnjxoi.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxOTc1NjIyMywiZXhwIjoxOTM1MzMyMjIzfQ.ux-O_QOS-qf2x7st49kE_-zJN9G5ncPoZcan3ST3Gqg");
var ssr = typeof window === "undefined";
var getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
var page = {
  subscribe(fn) {
    const store2 = getStores().page;
    return store2.subscribe(fn);
  }
};
var error$1 = (verb) => {
  throw new Error(ssr ? `Can only ${verb} session store in browser` : `Cannot ${verb} session store before subscribing`);
};
var session = {
  subscribe(fn) {
    const store2 = getStores().session;
    if (!ssr) {
      session.set = store2.set;
      session.update = store2.update;
    }
    return store2.subscribe(fn);
  },
  set: (value) => {
    error$1("set");
  },
  update: (updater) => {
    error$1("update");
  }
};
var css$J = {
  code: "a.svelte-1w9122c{background:var(--white);padding:.3rem .5rem;border-radius:0.35rem}",
  map: `{"version":3,"file":"SignOutButton.svelte","sources":["SignOutButton.svelte"],"sourcesContent":["<script lang=\\"ts\\">var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\\n    return new (P || (P = Promise))(function (resolve, reject) {\\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\\n        function rejected(value) { try { step(generator[\\"throw\\"](value)); } catch (e) { reject(e); } }\\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\\n    });\\n};\\nimport supabase from '$lib/db';\\nimport { goto } from '$app/navigation';\\nexport let styles;\\nfunction signOut() {\\n    return __awaiter(this, void 0, void 0, function* () {\\n        const { error } = yield supabase.auth.signOut();\\n        if (error) {\\n            alert(error.message);\\n        }\\n        goto('/');\\n    });\\n}\\n;\\n</script>\\n\\n<a style={styles} href=\\"/\\" on:click={signOut}>Sign Out</a>\\n\\n<style>\\n  a {\\n    background: var(--white);\\n    padding: .3rem .5rem;\\n    border-radius: 0.35rem;\\n  }\\n</style>"],"names":[],"mappings":"AA2BE,CAAC,eAAC,CAAC,AACD,UAAU,CAAE,IAAI,OAAO,CAAC,CACxB,OAAO,CAAE,KAAK,CAAC,KAAK,CACpB,aAAa,CAAE,OAAO,AACxB,CAAC"}`
};
var SignOutButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  (function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve2) {
        resolve2(value);
      });
    }
    return new (P || (P = Promise))(function(resolve2, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  });
  let {styles} = $$props;
  if ($$props.styles === void 0 && $$bindings.styles && styles !== void 0)
    $$bindings.styles(styles);
  $$result.css.add(css$J);
  return `<a${add_attribute("style", styles, 0)} href="${"/"}" class="${"svelte-1w9122c"}">Sign Out</a>`;
});
var css$I = {
  code: "header.svelte-18d20hk.svelte-18d20hk{background:var(--black);color:var(--white);z-index:-2;position:relative;display:flex;align-items:center;justify-content:space-between;padding:1.5rem;padding-bottom:300px;margin:-8px -8px 0 -8px}nav.svelte-18d20hk.svelte-18d20hk{z-index:0}ul.svelte-18d20hk.svelte-18d20hk{display:flex;list-style:none;padding:0}li.svelte-18d20hk.svelte-18d20hk{margin:0.4rem 0.6rem}a{text-decoration:none;color:var(--black)}a.svelte-18d20hk.svelte-18d20hk{color:var(--white)}@media screen and (max-width: 410px){header.svelte-18d20hk.svelte-18d20hk{flex-direction:column}header.svelte-18d20hk>div.svelte-18d20hk{display:flex;flex-direction:column;align-items:center}}",
  map: `{"version":3,"file":"Header.svelte","sources":["Header.svelte"],"sourcesContent":["<script>\\n\\timport { page, session } from '$app/stores';\\n\\timport SignOutButton from '$lib/components/auth/SignOutButton.svelte';\\n\\n\\t$: ({ path } = $page);\\n</script>\\n\\n<header>\\n\\t<div>\\n\\t\\t<h1>Black Cat Studio</h1>\\n\\t\\t<h2>Client Portal</h2>\\n\\t</div>\\n\\t<nav>\\n\\t\\t<ul>\\n\\t\\t\\t{#if $session && path === '/'}\\n\\t\\t\\t\\t<li><a href=\\"/dashboard\\">Dashboard</a></li>\\n\\t\\t\\t{/if}\\n\\t\\t\\t{#if $session}\\n\\t\\t\\t\\t<li><SignOutButton /></li>\\n\\t\\t\\t{/if}\\n\\t\\t</ul>\\n\\t</nav>\\n</header>\\n\\n<style>\\n\\theader {\\n\\t\\tbackground: var(--black);\\n\\t\\tcolor: var(--white);\\n\\t\\tz-index: -2;\\n\\t\\tposition: relative;\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: space-between;\\n\\t\\tpadding: 1.5rem;\\n\\t\\tpadding-bottom: 300px;\\n\\t\\tmargin: -8px -8px 0 -8px;\\n\\t}\\n\\n\\tnav {\\n\\t\\tz-index: 0;\\n\\t}\\n\\n\\tul {\\n\\t\\tdisplay: flex;\\n\\t\\tlist-style: none;\\n\\t\\tpadding: 0;\\n\\t}\\n\\n\\tli {\\n\\t\\tmargin: 0.4rem 0.6rem;\\n\\t}\\n\\n\\t:global(a) {\\n\\t\\ttext-decoration: none;\\n\\t\\tcolor: var(--black);\\n\\t}\\n\\n\\ta {\\n\\t\\tcolor: var(--white);\\n\\t}\\n\\n\\t@media screen and (max-width: 410px) {\\n\\t\\theader {\\n\\t\\t\\tflex-direction: column;\\n\\t\\t}\\n\\t\\theader > div {\\n\\t\\t\\tdisplay: flex;\\n\\t\\t\\tflex-direction: column;\\n\\t\\t\\talign-items: center;\\n\\t\\t}\\n\\t}\\n</style>\\n\\n"],"names":[],"mappings":"AAyBC,MAAM,8BAAC,CAAC,AACP,UAAU,CAAE,IAAI,OAAO,CAAC,CACxB,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,aAAa,CAC9B,OAAO,CAAE,MAAM,CACf,cAAc,CAAE,KAAK,CACrB,MAAM,CAAE,IAAI,CAAC,IAAI,CAAC,CAAC,CAAC,IAAI,AACzB,CAAC,AAED,GAAG,8BAAC,CAAC,AACJ,OAAO,CAAE,CAAC,AACX,CAAC,AAED,EAAE,8BAAC,CAAC,AACH,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,CAAC,AACX,CAAC,AAED,EAAE,8BAAC,CAAC,AACH,MAAM,CAAE,MAAM,CAAC,MAAM,AACtB,CAAC,AAEO,CAAC,AAAE,CAAC,AACX,eAAe,CAAE,IAAI,CACrB,KAAK,CAAE,IAAI,OAAO,CAAC,AACpB,CAAC,AAED,CAAC,8BAAC,CAAC,AACF,KAAK,CAAE,IAAI,OAAO,CAAC,AACpB,CAAC,AAED,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACrC,MAAM,8BAAC,CAAC,AACP,cAAc,CAAE,MAAM,AACvB,CAAC,AACD,qBAAM,CAAG,GAAG,eAAC,CAAC,AACb,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,AACpB,CAAC,AACF,CAAC"}`
};
var Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let path;
  let $page, $$unsubscribe_page;
  let $session, $$unsubscribe_session;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  $$result.css.add(css$I);
  ({path} = $page);
  $$unsubscribe_page();
  $$unsubscribe_session();
  return `<header class="${"svelte-18d20hk"}"><div class="${"svelte-18d20hk"}"><h1>Black Cat Studio</h1>
		<h2>Client Portal</h2></div>
	<nav class="${"svelte-18d20hk"}"><ul class="${"svelte-18d20hk"}">${$session && path === "/" ? `<li class="${"svelte-18d20hk"}"><a href="${"/dashboard"}" class="${"svelte-18d20hk"}">Dashboard</a></li>` : ``}
			${$session ? `<li class="${"svelte-18d20hk"}">${validate_component(SignOutButton, "SignOutButton").$$render($$result, {}, {}, {})}</li>` : ``}</ul></nav>
</header>`;
});
var css$H = {
  code: "footer.svelte-xdozpz{text-align:center;margin-top:5rem}",
  map: '{"version":3,"file":"Footer.svelte","sources":["Footer.svelte"],"sourcesContent":["<footer>\\n  <p>Copyright {new Date().getFullYear()} | Built with \u2665\uFE0F by <a href=\\"https://blkcatstudio.com\\">Black Cat Studio</a></p>\\n</footer>\\n\\n<style>\\n  footer {\\n    text-align: center;\\n    margin-top: 5rem;\\n  }\\n</style>"],"names":[],"mappings":"AAKE,MAAM,cAAC,CAAC,AACN,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,IAAI,AAClB,CAAC"}'
};
var Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$H);
  return `<footer class="${"svelte-xdozpz"}"><p>Copyright ${escape2(new Date().getFullYear())} | Built with \u2665\uFE0F by <a href="${"https://blkcatstudio.com"}">Black Cat Studio</a></p>
</footer>`;
});
var context = {
  subscribe: null,
  addNotification: null,
  removeNotification: null,
  clearNotifications: null
};
var getNotificationsContext = () => getContext(context);
var Notification = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {item} = $$props;
  let {notification: notification2 = {}} = $$props;
  let {withoutStyles = false} = $$props;
  const {removeNotification: removeNotification2} = getNotificationsContext();
  const {id, removeAfter, customClass = ""} = notification2;
  const removeNotificationHandler = () => removeNotification2(id);
  let timeout = null;
  if (removeAfter) {
    timeout = setTimeout(removeNotificationHandler, removeAfter);
  }
  onDestroy(() => {
    if (removeAfter && timeout)
      clearTimeout(timeout);
  });
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.notification === void 0 && $$bindings.notification && notification2 !== void 0)
    $$bindings.notification(notification2);
  if ($$props.withoutStyles === void 0 && $$bindings.withoutStyles && withoutStyles !== void 0)
    $$bindings.withoutStyles(withoutStyles);
  return `${validate_component(item || missing_component, "svelte:component").$$render($$result, {
    notification: notification2,
    withoutStyles,
    onRemove: removeNotificationHandler
  }, {}, {})}`;
});
var css$G = {
  code: ".default-notification-style.svelte-4t58gn.svelte-4t58gn{position:relative;display:flex;align-items:stretch;justify-content:space-between;margin:12px;background:#fff;color:#000;border-radius:6px;box-shadow:0 4px 10px rgba(0, 0, 0, 0.08);min-height:0;overflow:hidden}.default-notification-style-content.svelte-4t58gn.svelte-4t58gn{width:210px;padding:12px 6px 12px 12px;box-sizing:border-box;word-wrap:break-word}.default-notification-style-button.svelte-4t58gn.svelte-4t58gn{display:block;width:40px;padding:0 0 2px;margin:0;border:none;border-left:1px solid #eee;outline:none;background:none;cursor:pointer;font-size:20px;color:#000;box-sizing:border-box}.default-notification-style-button.svelte-4t58gn.svelte-4t58gn:hover{background:rgba(0, 0, 0, 0.01)}.default-notification-danger.svelte-4t58gn.svelte-4t58gn{background:#f3555a;color:#fff}.default-notification-danger.svelte-4t58gn .default-notification-style-button.svelte-4t58gn{border-left:1px solid rgba(255, 255, 255, 0.4);color:#fff}.default-notification-warning.svelte-4t58gn.svelte-4t58gn{background:#ffb900;color:#000}.default-notification-warning.svelte-4t58gn .default-notification-style-button.svelte-4t58gn{border-left:1px solid rgba(0, 0, 0, 0.2);color:#000}.default-notification-success.svelte-4t58gn.svelte-4t58gn{background:#22ce6c;color:#fff}.default-notification-success.svelte-4t58gn .default-notification-style-button.svelte-4t58gn{border-left:1px solid rgba(255, 255, 255, 0.4);color:#fff}",
  map: '{"version":3,"file":"DefaultNotification.svelte","sources":["DefaultNotification.svelte"],"sourcesContent":["<style>\\n  .default-notification-style {\\n    position: relative;\\n    display: flex;\\n    align-items: stretch;\\n    justify-content: space-between;\\n    margin: 12px;\\n    background: #fff;\\n    color: #000;\\n    border-radius: 6px;\\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);\\n    min-height: 0;\\n    overflow: hidden;\\n  }\\n\\n  .default-notification-style-content {\\n    width: 210px;\\n    padding: 12px 6px 12px 12px;\\n    box-sizing: border-box;\\n    word-wrap: break-word;\\n  }\\n\\n  .default-notification-style-button {\\n    display: block;\\n    width: 40px;\\n    padding: 0 0 2px;\\n    margin: 0;\\n    border: none;\\n    border-left: 1px solid #eee;\\n    outline: none;\\n    background: none;\\n    cursor: pointer;\\n    font-size: 20px;\\n    color: #000;\\n    box-sizing: border-box;\\n  }\\n\\n  .default-notification-style-button:hover {\\n    background: rgba(0, 0, 0, 0.01);\\n  }\\n\\n  .default-notification-danger {\\n    background: #f3555a;\\n    color: #fff;\\n  }\\n\\n  .default-notification-danger .default-notification-style-button {\\n    border-left: 1px solid rgba(255, 255, 255, 0.4);\\n    color: #fff;\\n  }\\n\\n  .default-notification-warning {\\n    background: #ffb900;\\n    color: #000;\\n  }\\n\\n  .default-notification-warning .default-notification-style-button {\\n    border-left: 1px solid rgba(0, 0, 0, 0.2);\\n    color: #000;\\n  }\\n\\n  .default-notification-success {\\n    background: #22ce6c;\\n    color: #fff;\\n  }\\n\\n  .default-notification-success .default-notification-style-button {\\n    border-left: 1px solid rgba(255, 255, 255, 0.4);\\n    color: #fff;\\n  }\\n</style>\\n<script>\\n  import { fade } from \'svelte/transition\';\\n\\n  export let notification = {};\\n  export let withoutStyles = false;\\n  export let onRemove = null;\\n\\n  const {\\n    id,\\n    text,\\n    type,\\n  } = notification;\\n\\n  const getClass = (suffix) => {\\n    const defaultSuffix = suffix ? `-${suffix}` : \'\';\\n    const defaultNotificationClass = ` default-notification-style${defaultSuffix}`;\\n    const defaultNotificationType = type && !suffix ? ` default-notification-${type}` : \'\';\\n\\n    return `notification${defaultSuffix}${withoutStyles ? \'\' : defaultNotificationClass}${defaultNotificationType}`;\\n  };\\n</script>\\n\\n<div\\n  class={getClass()}\\n  role=\\"status\\"\\n  aria-live=\\"polite\\"\\n  in:fade\\n  out:fade\\n>\\n  <div class={getClass(\'content\')}>\\n    <slot>{text}</slot>\\n  </div>\\n  <button\\n    class={getClass(\'button\')}\\n    on:click={onRemove}\\n    aria-label=\\"delete notification\\"\\n  >\\n    &times;\\n  </button>\\n</div>\\n"],"names":[],"mappings":"AACE,2BAA2B,4BAAC,CAAC,AAC3B,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,OAAO,CACpB,eAAe,CAAE,aAAa,CAC9B,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC1C,UAAU,CAAE,CAAC,CACb,QAAQ,CAAE,MAAM,AAClB,CAAC,AAED,mCAAmC,4BAAC,CAAC,AACnC,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CAAC,GAAG,CAAC,IAAI,CAAC,IAAI,CAC3B,UAAU,CAAE,UAAU,CACtB,SAAS,CAAE,UAAU,AACvB,CAAC,AAED,kCAAkC,4BAAC,CAAC,AAClC,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAChB,MAAM,CAAE,CAAC,CACT,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CAC3B,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,OAAO,CACf,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,UAAU,AACxB,CAAC,AAED,8DAAkC,MAAM,AAAC,CAAC,AACxC,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,AACjC,CAAC,AAED,4BAA4B,4BAAC,CAAC,AAC5B,UAAU,CAAE,OAAO,CACnB,KAAK,CAAE,IAAI,AACb,CAAC,AAED,0CAA4B,CAAC,kCAAkC,cAAC,CAAC,AAC/D,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC/C,KAAK,CAAE,IAAI,AACb,CAAC,AAED,6BAA6B,4BAAC,CAAC,AAC7B,UAAU,CAAE,OAAO,CACnB,KAAK,CAAE,IAAI,AACb,CAAC,AAED,2CAA6B,CAAC,kCAAkC,cAAC,CAAC,AAChE,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACzC,KAAK,CAAE,IAAI,AACb,CAAC,AAED,6BAA6B,4BAAC,CAAC,AAC7B,UAAU,CAAE,OAAO,CACnB,KAAK,CAAE,IAAI,AACb,CAAC,AAED,2CAA6B,CAAC,kCAAkC,cAAC,CAAC,AAChE,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC/C,KAAK,CAAE,IAAI,AACb,CAAC"}'
};
var DefaultNotification = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {notification: notification2 = {}} = $$props;
  let {withoutStyles = false} = $$props;
  let {onRemove = null} = $$props;
  const {id, text, type} = notification2;
  const getClass = (suffix) => {
    const defaultSuffix = suffix ? `-${suffix}` : "";
    const defaultNotificationClass = ` default-notification-style${defaultSuffix}`;
    const defaultNotificationType = type && !suffix ? ` default-notification-${type}` : "";
    return `notification${defaultSuffix}${withoutStyles ? "" : defaultNotificationClass}${defaultNotificationType}`;
  };
  if ($$props.notification === void 0 && $$bindings.notification && notification2 !== void 0)
    $$bindings.notification(notification2);
  if ($$props.withoutStyles === void 0 && $$bindings.withoutStyles && withoutStyles !== void 0)
    $$bindings.withoutStyles(withoutStyles);
  if ($$props.onRemove === void 0 && $$bindings.onRemove && onRemove !== void 0)
    $$bindings.onRemove(onRemove);
  $$result.css.add(css$G);
  return `<div class="${escape2(null_to_empty(getClass())) + " svelte-4t58gn"}" role="${"status"}" aria-live="${"polite"}"><div class="${escape2(null_to_empty(getClass("content"))) + " svelte-4t58gn"}">${slots.default ? slots.default({}) : `${escape2(text)}`}</div>
  <button class="${escape2(null_to_empty(getClass("button"))) + " svelte-4t58gn"}" aria-label="${"delete notification"}">\xD7
  </button></div>`;
});
var positions = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right"
];
var isNotificationValid = (notification2) => {
  if (!notification2 || !notification2.text)
    return false;
  if (typeof notification2.text !== "string")
    return false;
  if (!positions.includes(notification2.position))
    return false;
  return true;
};
var addNotification = (notification2, update) => {
  if (!isNotificationValid(notification2))
    throw new Error("Notification object is not valid");
  const {
    id = new Date().getTime(),
    removeAfter = +notification2.removeAfter,
    ...rest
  } = notification2;
  update((notifications) => {
    return [...notifications, {
      id,
      removeAfter,
      ...rest
    }];
  });
};
var removeNotification = (notificationId, update) => update((notifications) => {
  return notifications.filter((n) => n.id !== notificationId);
});
var clearNotifications = (set) => set([]);
var createNotificationsStore = () => {
  const {
    subscribe: subscribe2,
    set,
    update
  } = writable2([]);
  return {
    subscribe: subscribe2,
    addNotification: (notification2) => addNotification(notification2, update),
    removeNotification: (notificationId) => removeNotification(notificationId, update),
    clearNotifications: () => clearNotifications(set)
  };
};
var store = createNotificationsStore();
var css$F = {
  code: ".default-position-style-top-left.svelte-7avcjj,.default-position-style-top-center.svelte-7avcjj,.default-position-style-top-right.svelte-7avcjj,.default-position-style-bottom-left.svelte-7avcjj,.default-position-style-bottom-center.svelte-7avcjj,.default-position-style-bottom-right.svelte-7avcjj{position:fixed;width:270px}.default-position-style-top-left.svelte-7avcjj{top:0;left:0}.default-position-style-top-center.svelte-7avcjj{top:0;left:50%;transform:translateX(-50%)}.default-position-style-top-right.svelte-7avcjj{top:0;right:0}.default-position-style-bottom-left.svelte-7avcjj{bottom:0;left:0}.default-position-style-bottom-center.svelte-7avcjj{bottom:0;left:50%;transform:translateX(-50%)}.default-position-style-bottom-right.svelte-7avcjj{bottom:0;right:0}",
  map: `{"version":3,"file":"Notifications.svelte","sources":["Notifications.svelte"],"sourcesContent":["<style>\\n  .default-position-style-top-left,\\n  .default-position-style-top-center,\\n  .default-position-style-top-right,\\n  .default-position-style-bottom-left,\\n  .default-position-style-bottom-center,\\n  .default-position-style-bottom-right {\\n    position: fixed;\\n    width: 270px;\\n  }\\n\\n  .default-position-style-top-left {\\n    top: 0;\\n    left: 0;\\n  }\\n\\n  .default-position-style-top-center {\\n    top: 0;\\n    left: 50%;\\n    transform: translateX(-50%);\\n  }\\n\\n  .default-position-style-top-right {\\n    top: 0;\\n    right: 0;\\n  }\\n\\n  .default-position-style-bottom-left {\\n    bottom: 0;\\n    left: 0;\\n  }\\n\\n  .default-position-style-bottom-center {\\n    bottom: 0;\\n    left: 50%;\\n    transform: translateX(-50%);\\n  }\\n\\n  .default-position-style-bottom-right {\\n    bottom: 0;\\n    right: 0;\\n  }\\n</style>\\n<script>\\n  import { setContext } from 'svelte';\\n\\n  import Notification from './Notification.svelte';\\n  import DefaultNotification from './DefaultNotification.svelte';\\n\\n  import context from '../context';\\n  import store from '../store';\\n  import positions from '../positions';\\n\\n  export let item = null;\\n  export let withoutStyles = false;\\n\\n  const getClass = (position = '') => {\\n    const defaultPositionClass = \` default-position-style-\${position}\`;\\n\\n    return \`position-\${position}\${withoutStyles ? '' : defaultPositionClass}\`;\\n  };\\n\\n  setContext(context, store);\\n</script>\\n\\n<slot></slot>\\n<div class=\\"notifications\\">\\n  {#each positions as position}\\n    <div class={getClass(position)}>\\n      {#each $store as notification (notification.id)}\\n        {#if notification.position === position}\\n          <Notification\\n            {notification}\\n            {withoutStyles}\\n            item={item ? item : DefaultNotification}\\n          />\\n        {/if}\\n      {/each}\\n    </div>\\n  {/each}\\n</div>\\n"],"names":[],"mappings":"AACE,8CAAgC,CAChC,gDAAkC,CAClC,+CAAiC,CACjC,iDAAmC,CACnC,mDAAqC,CACrC,oCAAoC,cAAC,CAAC,AACpC,QAAQ,CAAE,KAAK,CACf,KAAK,CAAE,KAAK,AACd,CAAC,AAED,gCAAgC,cAAC,CAAC,AAChC,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,AACT,CAAC,AAED,kCAAkC,cAAC,CAAC,AAClC,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,WAAW,IAAI,CAAC,AAC7B,CAAC,AAED,iCAAiC,cAAC,CAAC,AACjC,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,CAAC,AACV,CAAC,AAED,mCAAmC,cAAC,CAAC,AACnC,MAAM,CAAE,CAAC,CACT,IAAI,CAAE,CAAC,AACT,CAAC,AAED,qCAAqC,cAAC,CAAC,AACrC,MAAM,CAAE,CAAC,CACT,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,WAAW,IAAI,CAAC,AAC7B,CAAC,AAED,oCAAoC,cAAC,CAAC,AACpC,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,CAAC,AACV,CAAC"}`
};
var Notifications$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  let {item = null} = $$props;
  let {withoutStyles = false} = $$props;
  const getClass = (position = "") => {
    const defaultPositionClass = ` default-position-style-${position}`;
    return `position-${position}${withoutStyles ? "" : defaultPositionClass}`;
  };
  setContext(context, store);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.withoutStyles === void 0 && $$bindings.withoutStyles && withoutStyles !== void 0)
    $$bindings.withoutStyles(withoutStyles);
  $$result.css.add(css$F);
  $$unsubscribe_store();
  return `${slots.default ? slots.default({}) : ``}
<div class="${"notifications"}">${each(positions, (position) => `<div class="${escape2(null_to_empty(getClass(position))) + " svelte-7avcjj"}">${each($store, (notification2) => `${notification2.position === position ? `${validate_component(Notification, "Notification").$$render($$result, {
    notification: notification2,
    withoutStyles,
    item: item ? item : DefaultNotification
  }, {}, {})}` : ``}`)}
    </div>`)}</div>`;
});
var NotificationChild = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const {addNotification: addNotification2} = getNotificationsContext();
  {
    supabase.auth.onAuthStateChange((event) => {
      addNotification2({
        text: `${event.replace("_", " ").toLowerCase()}`,
        position: "bottom-center",
        removeAfter: 4e3
      });
    });
  }
  return ``;
});
var css$E = {
  code: "main.svelte-1h7cnm9{padding-left:calc(100vw - 100%)}:root{--bg:#D8E2E6;--black:#1F1F1F;--gray:#C5CFD6;--dark-gray:#5f5f61;--white:#FFFFFF;--blue:#2B44FF;--dark-blue:#1F28CF;--teal:#89C5CC;--dark-teal:#69A1AC;--shadow:#1f1f1f21;--radius:0.35rem}body{font-family:'Mukta Mahee', sans-serif;background-color:var(--bg)}h1,h2,h3{margin:.5rem 0;line-height:1}a{color:var(--black)}.svelte-1h7cnm9a:hover{color:var(--dark-green);text-decoration:underline}",
  map: `{"version":3,"file":"__layout.svelte","sources":["__layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import supabase from '$lib/db';\\nimport { session } from '$app/stores';\\nimport { browser } from '$app/env';\\nimport Header from '$lib/components/ui/Header.svelte';\\nimport Footer from '$lib/components/ui/Footer.svelte';\\nimport Notifications from 'svelte-notifications';\\nimport NotificationChild from '$lib/components/auth/NotificationChild.svelte';\\nif (browser) {\\n    $session = supabase.auth.session();\\n    supabase.auth.onAuthStateChange((event, s) => {\\n        console.log(\`AUTH_STATE_CHANGE: \${event}\`);\\n        $session = s;\\n    });\\n}\\n</script>\\n\\n<Notifications>\\n  <NotificationChild />\\n  <Header />\\n    <main>\\n      <slot></slot>\\n    </main>\\n  <Footer />\\n</Notifications>\\n\\n<style>\\n  main {\\n    padding-left: calc(100vw - 100%);\\n  }\\n\\n  :global(:root) {\\n    --bg: #D8E2E6;\\n    --black: #1F1F1F;\\n    --gray: #C5CFD6;\\n    --dark-gray: #5f5f61;\\n    --white: #FFFFFF;\\n    --blue: #2B44FF;\\n    --dark-blue: #1F28CF;\\n    --teal: #89C5CC;\\n    --dark-teal: #69A1AC;\\n    --shadow: #1f1f1f21;\\n\\n    --radius: 0.35rem;\\n  }\\n\\n  :global(body) {\\n    font-family: 'Mukta Mahee', sans-serif;\\n    background-color: var(--bg);\\n  }\\n\\n  :global(h1), :global(h2), :global(h3) {\\n    margin: .5rem 0;\\n    line-height: 1;\\n  }\\n\\n  :global(a) {\\n    color: var(--black);\\n  }\\n\\n  :global(a):hover {\\n    color: var(--dark-green);\\n    text-decoration: underline;\\n  }\\n</style>"],"names":[],"mappings":"AA0BE,IAAI,eAAC,CAAC,AACJ,YAAY,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,IAAI,CAAC,AAClC,CAAC,AAEO,KAAK,AAAE,CAAC,AACd,IAAI,CAAE,OAAO,CACb,OAAO,CAAE,OAAO,CAChB,MAAM,CAAE,OAAO,CACf,WAAW,CAAE,OAAO,CACpB,OAAO,CAAE,OAAO,CAChB,MAAM,CAAE,OAAO,CACf,WAAW,CAAE,OAAO,CACpB,MAAM,CAAE,OAAO,CACf,WAAW,CAAE,OAAO,CACpB,QAAQ,CAAE,SAAS,CAEnB,QAAQ,CAAE,OAAO,AACnB,CAAC,AAEO,IAAI,AAAE,CAAC,AACb,WAAW,CAAE,aAAa,CAAC,CAAC,UAAU,CACtC,gBAAgB,CAAE,IAAI,IAAI,CAAC,AAC7B,CAAC,AAEO,EAAE,AAAC,CAAU,EAAE,AAAC,CAAU,EAAE,AAAE,CAAC,AACrC,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,WAAW,CAAE,CAAC,AAChB,CAAC,AAEO,CAAC,AAAE,CAAC,AACV,KAAK,CAAE,IAAI,OAAO,CAAC,AACrB,CAAC,eAEO,CAAC,AAAC,MAAM,AAAC,CAAC,AAChB,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,eAAe,CAAE,SAAS,AAC5B,CAAC"}`
};
var _layout$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => value);
  $$result.css.add(css$E);
  $$unsubscribe_session();
  return `${validate_component(Notifications$1, "Notifications").$$render($$result, {}, {}, {
    default: () => `${validate_component(NotificationChild, "NotificationChild").$$render($$result, {}, {}, {})}
  ${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
    <main class="${"svelte-1h7cnm9"}">${slots.default ? slots.default({}) : ``}</main>
  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`
  })}`;
});
var __layout$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _layout$1
});
function load({error: error22, status}) {
  return {props: {error: error22, status}};
}
var Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {status} = $$props;
  let {error: error22} = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error22 !== void 0)
    $$bindings.error(error22);
  return `<h1>${escape2(status)}</h1>

<p>${escape2(error22.message)}</p>


${error22.stack ? `<pre>${escape2(error22.stack)}</pre>` : ``}`;
});
var error2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Error$1,
  load
});
var css$D = {
  code: "form{margin:auto;width:100%;display:flex;flex-direction:column;gap:.6rem}label{line-height:1}.svelte-1yprphiform > input[type=submit]:hover{cursor:pointer}label{width:80%;margin:auto}input{width:80%;height:35px;margin:auto;border-radius:0.35rem;border:none;padding:.3rem .5rem;box-shadow:#1f1f1f30 3px 3px 4px}input[type=submit]{background-color:var(--black);border:none;color:var(--white);margin-top:1rem}",
  map: `{"version":3,"file":"SignInForm.svelte","sources":["SignInForm.svelte"],"sourcesContent":["<script lang=\\"ts\\">var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\\n    return new (P || (P = Promise))(function (resolve, reject) {\\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\\n        function rejected(value) { try { step(generator[\\"throw\\"](value)); } catch (e) { reject(e); } }\\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\\n    });\\n};\\nimport supabase from '$lib/db';\\nimport { goto } from '$app/navigation';\\nlet userEmail;\\nlet userPassword;\\nfunction signIn() {\\n    return __awaiter(this, void 0, void 0, function* () {\\n        const { session: sesh, error } = yield supabase.auth.signIn({\\n            email: userEmail,\\n            password: userPassword\\n        });\\n        if (error) {\\n            alert(error.message);\\n        }\\n        goto('dashboard');\\n    });\\n}\\n;\\n</script>\\n\\n<form on:submit|preventDefault={signIn}>\\n  <label for=\\"Email\\">Email</label>\\n  <input type=\\"email\\" name=\\"Email\\" bind:value={userEmail} placeholder=\\"person@example.com\\">\\n\\n  <label for=\\"Pass\\">Password</label>\\n  <input type=\\"password\\" name=\\"Pass\\" bind:value={userPassword} placeholder=\\"*********\\">\\n\\n  <input type=\\"submit\\" value=\\"Sign In\\"/>\\n</form>\\n\\n<style>\\n  :global(form) {\\n    margin: auto;\\n    width: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    gap: .6rem;\\n  }\\n  :global(label) {\\n    line-height: 1;\\n  }\\n\\n  :global(form > input[type=submit]):hover {\\n    cursor: pointer;\\n  }\\n\\n  :global(label){\\n    width: 80%;\\n    margin: auto;\\n  }\\n\\n  :global(input){\\n    width: 80%;\\n    height: 35px;\\n    margin: auto;\\n    border-radius: 0.35rem;\\n    border: none;\\n    padding: .3rem .5rem;\\n    box-shadow: #1f1f1f30 3px 3px 4px;\\n  }\\n\\n  :global(input[type=submit]){\\n    background-color: var(--black);\\n    border: none;\\n    color: var(--white);\\n    margin-top: 1rem;\\n  }\\n</style>"],"names":[],"mappings":"AAuCU,IAAI,AAAE,CAAC,AACb,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,KAAK,AACZ,CAAC,AACO,KAAK,AAAE,CAAC,AACd,WAAW,CAAE,CAAC,AAChB,CAAC,eAEO,yBAAyB,AAAC,MAAM,AAAC,CAAC,AACxC,MAAM,CAAE,OAAO,AACjB,CAAC,AAEO,KAAK,AAAC,CAAC,AACb,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IAAI,AACd,CAAC,AAEO,KAAK,AAAC,CAAC,AACb,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,OAAO,CACtB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,KAAK,CAAC,KAAK,CACpB,UAAU,CAAE,SAAS,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,AACnC,CAAC,AAEO,kBAAkB,AAAC,CAAC,AAC1B,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,UAAU,CAAE,IAAI,AAClB,CAAC"}`
};
var SignInForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  (function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve2) {
        resolve2(value);
      });
    }
    return new (P || (P = Promise))(function(resolve2, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  });
  let userEmail;
  let userPassword;
  $$result.css.add(css$D);
  return `<form class="${"svelte-1yprphi"}"><label for="${"Email"}" class="${"svelte-1yprphi"}">Email</label>
  <input type="${"email"}" name="${"Email"}" placeholder="${"person@example.com"}" class="${"svelte-1yprphi"}"${add_attribute("value", userEmail, 1)}>

  <label for="${"Pass"}" class="${"svelte-1yprphi"}">Password</label>
  <input type="${"password"}" name="${"Pass"}" placeholder="${"*********"}" class="${"svelte-1yprphi"}"${add_attribute("value", userPassword, 1)}>

  <input type="${"submit"}" value="${"Sign In"}" class="${"svelte-1yprphi"}">
</form>`;
});
var css$C = {
  code: "svg.svelte-y7po9d{width:300px;max-width:80vw;max-height:300px;filter:drop-shadow(#1f1f1f13 5px 5px 7px)}",
  map: '{"version":3,"file":"humans.svelte","sources":["humans.svelte"],"sourcesContent":["<style>\\n  svg {\\n    width: 300px;\\n    max-width: 80vw;\\n    max-height: 300px;\\n    filter: drop-shadow(#1f1f1f13 5px 5px 7px);\\n  }\\n</style>\\n\\n<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"615.107\\" height=\\"457.309\\" viewBox=\\"0 0 615.107 457.309\\">\\n  <g id=\\"Group_3\\" data-name=\\"Group 3\\" transform=\\"translate(0 -86.83)\\">\\n    <g id=\\"Group_1\\" data-name=\\"Group 1\\" transform=\\"translate(-62)\\">\\n      <g id=\\"Symbols\\" transform=\\"translate(87.009 320.798)\\" opacity=\\"0.413\\">\\n        <g id=\\"Scene_Home\\" data-name=\\"Scene/Home\\" transform=\\"translate(0 0)\\">\\n          <g id=\\"Big-Leaf-Plant\\" transform=\\"translate(0)\\">\\n            <g id=\\"Big-Ass-Leaf\\" transform=\\"translate(19.007)\\">\\n              <path id=\\"leaf\\" d=\\"M21.047,1.143a13.979,13.979,0,0,1,7.1.747C32.824,3.878,34.155,9.408,34.09,13.9c-.069,4.838-1.1,10.123,2.582,14.021,1.691,1.792,3.794,3.164,5.455,4.989a23.583,23.583,0,0,1,4.2,6.578c1.893,4.4,2.821,9.578,1.091,14.2-1.524,4.065-5.357,7.735-4.529,12.358.864,4.822,5.726,8.509,8.766,12.1,3.44,4.065,6.608,9.26,7.128,14.591.5,5.109-1.725,10.276-5.138,14.137-6.819,7.717-17.068,11.5-27.4,11.476-4.388-.01-9.356-.208-13.142-2.566a7.242,7.242,0,0,1-2.483-2.683,8.748,8.748,0,0,0-2.4-2.4,14.256,14.256,0,0,1-4.574-6.109c-3.75-9.283-.753-20.767,4.5-29.01,1.244-1.953,2.262-3.832,1.658-6.16C9.16,66.988,7.61,64.8,6.24,62.707a53.98,53.98,0,0,1-3.96-6.266A14.219,14.219,0,0,1,1.055,49.1,24.988,24.988,0,0,1,6.436,35.987c2.83-3.724,6.152-7.287,6.16-12.166C12.6,18.65,9.147,14.05,10.619,8.792a10.019,10.019,0,0,1,3.809-5.716A15.524,15.524,0,0,1,21.047,1.143Z\\" transform=\\"translate(-1 -1)\\" fill=\\"#dde3e9\\" fill-rule=\\"evenodd\\"/>\\n              <path id=\\"middle-thing\\" d=\\"M23.146,10.972a1.192,1.192,0,0,1,1.517-.93c.854.239.837,1.036.815,1.747a23.479,23.479,0,0,0,.772,6.426c1.091,4.406,3.108,8.466,4.706,12.7a23.116,23.116,0,0,1,1.409,13.071c-.883,4.219-2.27,8.329-3.174,12.554-.8,3.724-1.644,7.65-.431,11.364,1.167,3.575,3.747,6.487,5.605,9.717a45.816,45.816,0,0,1,5.781,21.743,40.657,40.657,0,0,1-.812,10.6c-.473,2-1.11,4.708-2.825,6.091a1.96,1.96,0,0,1-2.81-.086c-.625-.885-.077-2.256.122-3.2a48.507,48.507,0,0,0,.827-12.409,44.8,44.8,0,0,0-1.939-11.867,40.16,40.16,0,0,0-5.055-9.875c-2.138-3.175-4.362-6.356-5.245-10.118-.9-3.821-.168-7.708.807-11.456,1.031-3.964,2.382-7.814,3.779-11.671a20.478,20.478,0,0,0,1.092-11.247C26.6,26.358,22.628,19.064,23.146,10.972Z\\" transform=\\"translate(-4.645 -2.562)\\" fill=\\"#c5cfd6\\" fill-rule=\\"evenodd\\"/>\\n            </g>\\n            <g id=\\"Big-Ass-Leaf-2\\" data-name=\\"Big-Ass-Leaf\\" transform=\\"translate(26.445 8.264)\\">\\n              <path id=\\"leaf-2\\" data-name=\\"leaf\\" d=\\"M75.115,1.308a17.762,17.762,0,0,1,7.927,4.575c4.44,4.785,3.078,12.018.627,17.3-2.638,5.686-6.637,11.4-4.383,17.925,1.036,3,2.778,5.715,3.761,8.738a30.471,30.471,0,0,1,1.445,9.963c-.107,6.19-1.753,12.8-6.224,17.356C74.332,81.18,67.9,83.525,66.424,89.423c-1.536,6.153,2.218,13.042,3.885,18.871,1.886,6.6,2.855,14.389.648,20.964-2.115,6.3-7.454,11.255-13.5,14.047-12.076,5.579-26.1,4.72-38.207-.684-5.141-2.295-10.863-5.113-14.058-9.872A9.309,9.309,0,0,1,3.7,128.284a11.232,11.232,0,0,0-1.546-4.092,18.379,18.379,0,0,1-2.136-9.6C.524,101.658,10.11,89.636,20.624,82.618c2.491-1.663,4.679-3.355,5.2-6.423.545-3.2-.115-6.6-.618-9.784a69.755,69.755,0,0,1-1.333-9.47,18.55,18.55,0,0,1,2.446-9.325,32.631,32.631,0,0,1,13.24-12.7C44.847,31.982,50.627,29.5,53.215,23.73c2.743-6.111,1.119-13.35,5.626-18.8A13.034,13.034,0,0,1,66.329.151C69.211-.345,72.359.471,75.115,1.308Z\\" transform=\\"translate(0 0)\\" fill=\\"#dde3e9\\" fill-rule=\\"evenodd\\"/>\\n              <path id=\\"middle-thing-2\\" data-name=\\"middle-thing\\" d=\\"M74.685,13.67a1.519,1.519,0,0,1,2.261-.306c.873.73.436,1.666.038,2.5a30.759,30.759,0,0,0-2.463,8.015c-1.032,5.79-.8,11.655-1.148,17.505s-1.759,11.409-5.2,16.218c-3.242,4.534-7.017,8.674-10.286,13.2-2.881,3.992-5.929,8.2-6.456,13.232-.508,4.845.984,9.646,1.465,14.445a60.027,60.027,0,0,1-4.628,28.778,53.127,53.127,0,0,1-6.5,12.129c-1.6,2.123-3.763,4.994-6.494,5.732-1.259.34-2.957-.108-3.241-1.575-.267-1.376,1.092-2.712,1.818-3.726a63.4,63.4,0,0,0,7.465-14.262,58.708,58.708,0,0,0,3.948-15.069,52.522,52.522,0,0,0-.739-14.344c-.838-4.88-1.771-9.813-.834-14.731.951-5,3.84-9.217,6.943-13.143,3.282-4.154,6.878-8.005,10.531-11.84a26.74,26.74,0,0,0,7.167-12.746C70.668,33.7,69.842,22.982,74.685,13.67Z\\" transform=\\"translate(-5.555 -2.257)\\" fill=\\"#c5cfd6\\" fill-rule=\\"evenodd\\"/>\\n            </g>\\n            <g id=\\"Big-Ass-Leaf-3\\" data-name=\\"Big-Ass-Leaf\\" transform=\\"translate(0 46.279)\\">\\n              <path id=\\"leaf-3\\" data-name=\\"leaf\\" d=\\"M11,0A15.726,15.726,0,0,1,23.1,6.246c3.454,4.289,4.152,9.527,5.555,14.639a13.068,13.068,0,0,0,4,6.8c1.913,1.572,4.343,1.886,6.633,2.654a15.479,15.479,0,0,1,9.733,9.743c1.781,5.5-.105,11.052.219,16.629.3,5.122,5.348,8.317,9.411,10.772,4.006,2.421,7.615,4.687,8.822,9.4,1.28,5,1.709,10.585-.063,15.527-2.951,8.228-11.586,11.851-19.93,12.412-7.572.51-17.094-.291-22.78-5.787-3.4-3.289-4.635-7.889-4.482-12.466a37.949,37.949,0,0,1,1.388-8.416,37.969,37.969,0,0,0,1.413-5.9c.529-5.359-4.424-6.388-8.64-7.859A20.561,20.561,0,0,1,2.664,54.068C.236,49.487-.784,44.344.672,39.3a17.242,17.242,0,0,1,3.922-6.9c.805-.875,1.94-1.6,2.667-2.524a3.405,3.405,0,0,0,.3-2.976C6.477,22.256,3.109,18.41,1.9,13.775.817,9.591,1.46,4.383,5.285,1.684A9.991,9.991,0,0,1,11,0Z\\" transform=\\"translate(0 0)\\" fill=\\"#c5cfd6\\" fill-rule=\\"evenodd\\"/>\\n              <path id=\\"middle-thing-3\\" data-name=\\"middle-thing\\" d=\\"M20.758,14.53c5.163,5.5,6.566,12.961,6.978,20.193.231,4.055-.009,8.333,1.182,12.266,1.019,3.367,3.409,5.94,5.873,8.373,4.959,4.9,10.489,9.874,11.94,16.961.851,4.159.277,8.454,1.453,12.567a34.567,34.567,0,0,0,5.242,10.568c1.844,2.542,4.246,4.488,6.261,6.858.615.723,1.5,1.788,1.242,2.809-.3,1.2-1.82,1.575-2.9,1.387-2.52-.438-4.641-2.844-6.289-4.594a39.566,39.566,0,0,1-6.121-8.4,35.3,35.3,0,0,1-3.97-10.91c-.66-3.989-.331-8.147-1.837-11.975C37.275,64.2,31.128,60.395,26.684,55.374c-5.537-6.256-4.711-14.043-4.144-21.739.312-4.229.621-9.005-1.516-12.867-.816-1.474-2.635-2.848-2.985-4.524C17.717,14.709,19.471,13.158,20.758,14.53Z\\" transform=\\"translate(-3.125 -2.43)\\" fill=\\"#afb9c5\\" fill-rule=\\"evenodd\\"/>\\n            </g>\\n            <path id=\\"Base\\" d=\\"M28,181c0,31.452,5.133,47.932,32.23,47.932S92.46,212.452,92.46,181Z\\" transform=\\"translate(-4.86 -32.246)\\" fill=\\"#89c5cc\\" fill-rule=\\"evenodd\\"/>\\n          </g>\\n        </g>\\n      </g>\\n      <g id=\\"humaaans_standing-1\\" data-name=\\"humaaans/standing-1\\" transform=\\"translate(44.443 71.238)\\">\\n        <g id=\\"humaaan-11\\" transform=\\"translate(34 17)\\">\\n          <g id=\\"Head_Front_Airy\\" data-name=\\"Head/Front/Airy\\" transform=\\"translate(55.87 17.63) rotate(-7)\\">\\n            <g id=\\"Head\\" transform=\\"translate(56.316 32.33)\\">\\n              <path id=\\"Path_1\\" data-name=\\"Path 1\\" d=\\"M8.617,35.97C3.811,30.329.559,23.416,1.1,15.67,2.668-6.648,33.736-1.739,39.78,9.526S45.1,49.363,37.294,51.377c-3.115.8-9.75-1.164-16.5-5.234l4.239,29.989H0Z\\" fill=\\"#915b3c\\" fill-rule=\\"evenodd\\"/>\\n            </g>\\n            <path id=\\"hair\\" d=\\"M81.83,28.873c-3.3-.541-12.181-.913-13.819-.913-1.047,0-2.181.239-2.8-.722-.508-.787-.322-2.118-.473-3.032-.176-1.061-.426-2.108-.679-3.153A32.06,32.06,0,0,0,60.729,12.6,25.993,25.993,0,0,0,48.408,1.442C42.575-1.065,35.976-1.639,29.7-1.131c-6.713.544-12.791,2.76-19.129,4.846a40.091,40.091,0,0,1-18.685,1.8c-6.365-.978-11.175-4.428-16.544-7.7-5.5-3.352-11.777-5.545-18.275-5.041C-49-6.758-54.586-4.253-59.6-.908c-4.692,3.13-8.564,6.9-10.75,12.2-2.352,5.7-2.349,11.96,1.518,17,5.605,7.3,16.011,9.192,24.668,9a47.131,47.131,0,0,0,14.653-2.685c6.3-2.218,11.753-5.976,17.652-9.026a45.934,45.934,0,0,1,8.628-3.453c2.91-.822,5.777-1.2,8.412.559,2.788,1.86,5.285,3.687,8.474,4.851a27.33,27.33,0,0,0,9.559,1.717c6.341-.049,12.593-2.025,18.752-3.348,5.023-1.079,10.4-2.155,15.517-1.117,2.137.433,5.258,1.327,6.029,3.547-12.989,2.354-18.09,18.417-14.428,30.21C51.059,64.91,62.939,72.35,67.558,69c2.926-2.12,1.15-4.9,0-6.74-2.2-3.518-2.955-8.037,1.119-10.487,3.514-2.112,7.209,2.9,7.279,2.9.966-.076,9.312-4.8,15.062-11.684,5.673.336,6.533-3.4,5.179-6.463S86.388,29.621,81.83,28.873Z\\" fill=\\"#191847\\" fill-rule=\\"evenodd\\"/>\\n          </g>\\n          <g id=\\"Bottom_Standing_Sweatpants\\" data-name=\\"Bottom/Standing/Sweatpants\\" transform=\\"translate(0 203.686)\\">\\n            <path id=\\"Leg\\" d=\\"M133.491,0l38.2,131.641,17.968,98.838H207.7L189.693,0Z\\" fill=\\"#784931\\" fill-rule=\\"evenodd\\"/>\\n            <path id=\\"Leg-2\\" data-name=\\"Leg\\" d=\\"M116.322,0c2.666,68.387,1.614,105.687,1.018,111.9s-3.984,47.826-27.063,120.665h18.758C139.6,162.688,150.27,121.076,153.775,111.9S167.634,65.425,182.75,0Z\\" fill=\\"#915b3c\\" fill-rule=\\"evenodd\\"/>\\n            <path id=\\"Pant\\" d=\\"M132.671,0q14.905,67.947,51.56,216.922h26.378C212.557,114.983,204.269,47.89,189.916,0Z\\" fill=\\"#69a1ac\\" fill-rule=\\"evenodd\\"/>\\n            <path id=\\"Pant-2\\" data-name=\\"Pant\\" d=\\"M116.189,0c2.611,68.387-4.155,135.761-25.112,217.987H119.22C149.842,149.153,171.789,82.111,186.788,0Z\\" fill=\\"#c5cfd6\\" fill-rule=\\"evenodd\\"/>\\n            <g id=\\"Accessories_Shoe_Flat-Simple\\" data-name=\\"Accessories/Shoe/Flat-Simple\\" transform=\\"translate(87.603 207.536)\\">\\n              <path id=\\"Shoe\\" d=\\"M0,38.587,1.035,21.9q9.09,2.658,22.77-2.086Q38.514,30.234,60.84,34.044A2.086,2.086,0,0,1,62.5,36.67l-1.431,5.046H2.07Z\\" fill=\\"#191847\\" fill-rule=\\"evenodd\\"/>\\n            </g>\\n            <g id=\\"Accessories_Shoe_Flat-Simple-2\\" data-name=\\"Accessories/Shoe/Flat-Simple\\" transform=\\"translate(185.635 207.536)\\">\\n              <path id=\\"Shoe-2\\" data-name=\\"Shoe\\" d=\\"M0,38.587,1.035,21.9q9.09,2.658,22.77-2.086Q38.514,30.234,60.84,34.044A2.086,2.086,0,0,1,62.5,36.67l-1.431,5.046H2.07Z\\" fill=\\"#191847\\" fill-rule=\\"evenodd\\"/>\\n            </g>\\n          </g>\\n          <g id=\\"Body_Hoodie\\" data-name=\\"Body/Hoodie\\" transform=\\"translate(6.973 119.855) rotate(-10)\\">\\n            <path id=\\"Skin\\" d=\\"M198.965,96.167,232.231,120.6a89.546,89.546,0,0,1,22.614,9.087c1.43,1.3,3.158,3.942-2.772,3.486s-12.189-.669-13.007,1.354,2.77,4.442,1.116,7.171q-1.654,2.729-15.629-13.687l-32.943-13.66ZM71.238,97.01l21.794.086q-20.185,65.161-21.794,69.148c-2.413,5.981,2.693,15.089,4.877,19.983-7.113,3.183-6.355-8.6-15.327-4.43-8.19,3.81-14.419,10.714-23.881,4.875-1.163-.718-2.438-3.42.642-5.532,7.673-5.262,18.731-14.47,20.225-17.5Q60.83,157.439,71.238,97.01Z\\" fill=\\"#915b3c\\" fill-rule=\\"evenodd\\"/>\\n            <path id=\\"Coat-Back\\" d=\\"M128,9.991l8.849-2.327c35.851,25.878,54.382,80,97.8,105.727l-8.768,13.05C154.233,123.866,130.762,57.93,128,9.991Z\\" transform=\\"translate(6.534 -15.548) rotate(5)\\" fill=\\"#1f28cf\\" fill-rule=\\"evenodd\\"/>\\n            <path id=\\"Shirt\\" d=\\"M93.861,118.89h79.793c3.646,0,2.959-5.265,2.432-7.922C170,80.307,146.257,47.255,146.257,3.609L123.241,0C104.2,30.618,97.62,68.314,93.861,118.89Z\\" fill=\\"#dde3e9\\" fill-rule=\\"evenodd\\"/>\\n            <path id=\\"Coat-Front\\" d=\\"M94.5,30.1a13.163,13.163,0,0,1-7.941-6.723C78.148,8.193,81.186-.164,90.176-2.911S107.184,0,121.508,0a14.416,14.416,0,0,1,2.141.147l7.205.411q31.009,105.093,17.1,140.233h-62.8a214.215,214.215,0,0,1-10.682,21.9H57.359Q54.943,84.579,94.5,30.1Z\\" fill=\\"#2b44ff\\" fill-rule=\\"evenodd\\"/>\\n            <path id=\\"Shade\\" d=\\"M98.83,104.809q2.963,24.789,9.631,35.982H85.154q6.511-15.182,13.676-35.982Z\\" fill=\\"rgba(0,0,0,0.1)\\" fill-rule=\\"evenodd\\"/>\\n          </g>\\n        </g>\\n      </g>\\n    </g>\\n    <g id=\\"Group_2\\" data-name=\\"Group 2\\">\\n      <g id=\\"Symbols-2\\" data-name=\\"Symbols\\" transform=\\"translate(472 215.363)\\">\\n        <g id=\\"Scene_Plants\\" data-name=\\"Scene/Plants\\" transform=\\"translate(0 -0.596)\\">\\n          <path id=\\"Leaf-Top\\" d=\\"M68.581,6.009c1.845-.8,4.189.362,3.065,2.668-1.2,2.469-5.166,2.292-7.4,2.125.225,0,1.067-2.277,1.332-2.614A7.593,7.593,0,0,1,68.581,6.009ZM45.462,50.925C44.8,51.435,45.407,50.973,45.462,50.925Zm24.6-33.085a2.15,2.15,0,0,1,.078,3.239c-1.108,1.1-3.016.963-4.437.776-.643-.085-4.073-.537-3.227-1.053a2.812,2.812,0,0,0-.343.141q-.135.4-.281.8c.02.013.036.026.057.039-.023-.011-.039-.023-.059-.035a31.242,31.242,0,0,1-3.96,7.522,7.511,7.511,0,0,1,1.808-.379c1.809-.132,5.517,1.448,3.381,3.713-2.048,2.172-4.92-.421-7.09-.871a101.841,101.841,0,0,1-7.362,8.1.583.583,0,0,1,.342.313,14.476,14.476,0,0,1,2.993-1.241c1.328-.208,4.031-.235,4.962.981,1.145,1.5-.225,2.59-1.683,2.79-2.113.29-4.8-.865-6.775-1.653a.668.668,0,0,1-.621-.242l-.13-.049c-2.626,2.575-5.343,5.056-8.041,7.48h.083a7.01,7.01,0,0,1,2.214-.865c1.821-.341,3.936-.233,5.327,1.131s1.781,3.628.2,4.99c-3.162,2.727-7.248-4.077-8.751-4.43-2.74,2.436-5.621,4.7-8.542,6.9a5.023,5.023,0,0,1,.99-.147c2.756-.118,9.017,3.546,5.478,6.647-3.084,2.7-6.188-2.968-8.45-5.013-2.752,2.057-5.517,4.1-8.212,6.229a7.572,7.572,0,0,1,4.267.248c1.533.548,3.986,1.843,2.891,3.876-1.114,2.067-4.082.946-5.619.192a42.759,42.759,0,0,0-3.974-2.339A51.434,51.434,0,0,0,6.518,78.165a44.664,44.664,0,0,0-4.379,9.656C1.45,89.973.126,93.579.2,96.43c-.778-5.74,1.534-12.465,3.9-17.436a42.784,42.784,0,0,1,8.868-12.038C12.257,64.381,5.3,60.36,9.7,58.23c2.336-1.125,4.552,1.058,4.933,3.269a9.187,9.187,0,0,1-.986,4.807q1.687-1.605,3.486-3.1c1.654-1.373,3.343-2.7,5.047-4.013-2.554-2.638-4.718-9.914-1.055-10.9,5.409-1.444,2.333,8.167,1.865,9.974a.291.291,0,0,1-.243-.106c.021.169.046.349.079.532,3.26-2.495,6.564-4.935,9.77-7.5a13.924,13.924,0,0,1-.986-1.439A15.574,15.574,0,0,1,29.7,46.684c-.769-1.756-1.453-4.529.878-5.417,2.535-.968,3.548,2.18,3.468,4.023A24.252,24.252,0,0,1,33.328,49c-.078.386.049,2.153-.447,1.37a3.693,3.693,0,0,1-.017.624q.863-.693,1.716-1.4a.657.657,0,0,1-.037-.214.644.644,0,0,1,.952-.552q1.126-.954,2.227-1.94c1.552-1.4,3.128-2.833,4.695-4.3-.308-.291-.159-.664-.445-.971s-.87-.5-1.209-.785a8.486,8.486,0,0,1-2.022-2.753c-.8-1.654-1.756-5.086.858-5.719,2.695-.654,3.869,2.664,3.933,4.7a51.387,51.387,0,0,1-.768,5.2c2.9-2.732,5.761-5.574,8.37-8.482-.742-.045-2.767-1.661-3.171-2.094-.985-1.057-2.519-3.358-.636-4.436,1.674-.956,3.589.654,4.2,2.154a20.367,20.367,0,0,1,.361,3.519c1.082-1.234,2.117-2.478,3.085-3.73q.968-1.248,1.825-2.567a1.206,1.206,0,0,1-.339-.367c-2.676-.594-5.9-4.944-2.649-6.23,1.546-.612,3.108.9,3.786,2.1a15.415,15.415,0,0,1,.47,2.415A49.864,49.864,0,0,0,62.111,15.3a.585.585,0,0,1-.432-.565,8.019,8.019,0,0,1-3.114-2.948c-.522-.913-1.438-2.986.258-3.39,2.207-.525,3.4,2.833,3.491,4.461.011.189-.019.736-.053,1.236a.74.74,0,0,1,.226.016c.606-1.989,1.112-4.009,1.537-6.037-1.166-.44-1.045-6.62-.209-7.458,1.87-1.875,2.965,1.031,2.791,2.528a9.881,9.881,0,0,1-2.141,4.713c-.112.146-.082.14-.1-.072a.422.422,0,0,1-.115.232,26.591,26.591,0,0,1-.043,2.716,62.336,62.336,0,0,1-1.189,7.027q-.192.843-.426,1.67a13.875,13.875,0,0,1,2.834-1.6C66.767,17.312,68.812,16.791,70.057,17.84ZM0,96.195a4.337,4.337,0,0,0,.513,2.052A11.2,11.2,0,0,1,0,96.195Z\\" transform=\\"translate(39.024 3.765) rotate(-3)\\" fill=\\"#c1dee2\\" fill-rule=\\"evenodd\\" opacity=\\"0.2\\"/>\\n          <g id=\\"Plant-Left\\" transform=\\"translate(0 26.465)\\" opacity=\\"0.5\\">\\n            <path id=\\"Leaf-4\\" data-name=\\"Leaf\\" d=\\"M146.455,100.025c2.156-3.073,6.155-10.879,9.189-11.977,1.954-.707,1.384,6.61,1.408,8.005a116.954,116.954,0,0,1-1.08,16.114c-1.169,9.653-4.992,18.25-10.236,26.466-2.7,4.228-5.863,8.507-10.247,11.144-2.018,1.215-4.446,1.418-6.438,2.465-2.321,1.218-1.057.233-2.1,2.652-1.452,3.357-1.917,7.689-2.589,11.271-3.085,16.446-10.555,103.382-9.26,120.11.115,1.483-1.952,1.837-2.056.027-.549-9.6,4.2-76.061,6.593-97.8s4.818-40.938,7.249-48.458c2.948-9.123,8.272-20.094,12.7-28.6A101.17,101.17,0,0,1,146.455,100.025Z\\" transform=\\"translate(-55.039 -42.862)\\" fill=\\"#69a1ac\\" fill-rule=\\"evenodd\\"/>\\n            <path id=\\"Leaf-5\\" data-name=\\"Leaf\\" d=\\"M160.505,318.168c5.609-4.118,11.68,3.654,6.6,7.772a5.084,5.084,0,0,1-7.391-.43c-1.072,1.307-2.075,2.673-3.04,3.827-2.937,3.517-5.714,7.117-8.367,10.8-5.512,7.655-10.235,15.741-15.174,23.68-4.874,7.835-9.709,15.711-14.127,23.745-3.742,6.807-8.731,14.814-10.012,22.276,1.944-15.826,9.321-31.037,18.105-44.989,8.713-13.837,18.712-28.948,32.2-39.868A4.778,4.778,0,0,1,160.505,318.168Z\\" transform=\\"translate(-53.091 -154.402)\\" fill=\\"#c1dee2\\" fill-rule=\\"evenodd\\"/>\\n            <path id=\\"Leaf-6\\" data-name=\\"Leaf\\" d=\\"M.981,244.016c3.139.614,8.267,7.714,10.855,10.419a101.328,101.328,0,0,1,8.494,10.232,173.048,173.048,0,0,1,15.028,24.512,227.837,227.837,0,0,1,16.721,43.516,179.508,179.508,0,0,1,5.073,28.543c.181,1.807,2.076,15.741-.654,16.116-2.456.338-1.7-10.58-1.816-12.065-1.339-16.755-5.351-33.057-10.931-48.85-1.215-3.44-2.345-7.654-4.288-10.75-1.4-2.23-.01-1.452-2.47-2.3-2.112-.725-4.519-.548-6.682-1.435-4.7-1.927-8.461-5.668-11.759-9.43C12.144,285.214,7.065,277.3,4.418,267.933A118.411,118.411,0,0,1,.851,252.156C.657,250.772-1.04,243.62.981,244.016Z\\" transform=\\"translate(0 -118.846)\\" fill=\\"#69a1ac\\" fill-rule=\\"evenodd\\"/>\\n            <path id=\\"Leaf-7\\" data-name=\\"Leaf\\" d=\\"M19.212,7.035A284.432,284.432,0,0,1,47.024,72.875c3.8,13.822,6.459,28.005,9.1,42.086,4.089,21.8,7.957,43.6,9.057,65.793,1.107,22.318,3.3,48.06-4.012,69.556,3.65-21.824.175-45.054-.44-67.014-.294-10.483-1.146-20.864-2.264-31.286-1.085-10.11-2.857-20.172-4.507-30.2q-1.206-7.327-2.508-14.638c-.257-1.454-.365-5.77-1.288-6.764S44.5,99,43.009,98.264a38.407,38.407,0,0,1-8.306-5.8A66.349,66.349,0,0,1,22.482,77.181c-7.594-12.674-10.63-28.14-10.477-42.818C12.035,31.513,16.618.826,14.777.4q.166-.195.314-.4Q17.182,3.5,19.212,7.035Z\\" transform=\\"translate(-5.845)\\" fill=\\"#89c5cc\\" fill-rule=\\"evenodd\\"/>\\n            <path id=\\"Leaf-8\\" data-name=\\"Leaf\\" d=\\"M194.554,155.994c.182-.263,1.37-2.093.772-1.976,1.217-.238-1.674,2.018,1.359.634-1.44,1.36-.609,3.127-.59,4.958a44.4,44.4,0,0,1-1.026,8.828,60.537,60.537,0,0,1-4.115,13.343,59.789,59.789,0,0,1-19.65,24.114c-4.149,2.876-8.214,3.856-12.946,5.18-2.989.837-3.226,2.382-4.812,5.283-3.3,6.04-6.546,12.059-9.459,18.3-3.478,7.456-6.854,14.92-10.039,22.507C123.32,282.723,114.588,309.2,110,336.6c-.112-16.148,3.623-32.778,8.335-48.17A287.5,287.5,0,0,1,131,255.708c1.155-2.592,2.9-5.927,3.4-8.789.343-2.005-.706-3.934-1.187-6.046a63.268,63.268,0,0,1-.094-25.712c1.814-9.119,7.062-13.352,15.939-14.644,3.246-.472,7.373-.3,10.349-1.684,3.243-1.507,4.581-6.462,6.425-9.642a131.138,131.138,0,0,1,17.6-23.936,57.084,57.084,0,0,1,6.018-5.537C190.793,158.644,193.637,157.319,194.554,155.994Z\\" transform=\\"translate(-53.578 -75.009)\\" fill=\\"#89c5cc\\" fill-rule=\\"evenodd\\"/>\\n            <path id=\\"Base-2\\" data-name=\\"Base\\" d=\\"M78.356,476h31.5a2.565,2.565,0,0,1,2.537,2.939l-2.435,16.51a10.259,10.259,0,0,1-10.149,8.762H88.4a10.259,10.259,0,0,1-10.149-8.762l-2.435-16.51A2.565,2.565,0,0,1,78.356,476Z\\" transform=\\"translate(-36.916 -231.847)\\" fill=\\"#c1dee2\\" fill-rule=\\"evenodd\\"/>\\n          </g>\\n        </g>\\n      </g>\\n      <g id=\\"humaaans_standing-3\\" data-name=\\"humaaans/standing-3\\" transform=\\"matrix(1, 0.017, -0.017, 1, 299.846, 101.463)\\">\\n        <g id=\\"humaaan-12\\" transform=\\"translate(0 0)\\">\\n          <g id=\\"Head_Front_Pony\\" data-name=\\"Head/Front/Pony\\" transform=\\"matrix(-0.966, 0.259, -0.259, -0.966, 199.333, 84.619)\\">\\n            <g id=\\"Head-2\\" data-name=\\"Head\\" transform=\\"translate(49.016 0)\\">\\n              <path id=\\"Path_2\\" data-name=\\"Path 2\\" d=\\"M8.617,40.162C3.811,45.8.559,52.716,1.1,60.462,2.668,82.78,33.736,77.87,39.78,66.606S45.1,26.768,37.294,24.755c-3.115-.8-9.75,1.164-16.5,5.234L25.03,0H0Z\\" transform=\\"translate(0)\\" fill=\\"#d4a181\\" fill-rule=\\"evenodd\\"/>\\n            </g>\\n            <path id=\\"hair-2\\" data-name=\\"hair\\" d=\\"M66.3,10.444C63.192,4.487,58.9,0,54.611,0,46.465,0,40.673,10.891,40.673,22.6q0,.617.024,1.226C32.081,17.913,25.44,6.257,14.038,6.257c-15.512,0-21.672,31.287,0,31.287,14.739,0,21.988-2.149,28.236-5.327a20.3,20.3,0,0,0,5.409,8.435,8.408,8.408,0,0,0,2.493,1.769,11.551,11.551,0,0,0,2.071.888A51.96,51.96,0,0,0,67.57,45.884c1.138.04,2.256.051,3.347.037A10.429,10.429,0,1,0,81.911,35.474a52.638,52.638,0,0,0-11.665-1.983,21.749,21.749,0,0,0,.671-5.595,31.633,31.633,0,0,0-.582-5.818,4.873,4.873,0,0,1-3.59,1.909,6.254,6.254,0,0,1-6.257-6.257C60.488,13.64,62.849,10.681,66.3,10.444Z\\" transform=\\"translate(0 31.287)\\" fill=\\"#191847\\" fill-rule=\\"evenodd\\"/>\\n          </g>\\n          <g id=\\"Bottom_Standing_Sweatpants-2\\" data-name=\\"Bottom/Standing/Sweatpants\\" transform=\\"translate(68.105 189.498)\\">\\n            <path id=\\"Leg-3\\" data-name=\\"Leg\\" d=\\"M207.7,0l-38.2,131.641L151.525,230.48H133.491L151.493,0Z\\" transform=\\"translate(-92.976)\\" fill=\\"#ba8b72\\" fill-rule=\\"evenodd\\"/>\\n            <path id=\\"Leg-4\\" data-name=\\"Leg\\" d=\\"M156.7,0c-2.666,68.387-1.614,105.687-1.018,111.9s3.984,47.826,27.063,120.665H163.992c-30.565-69.877-41.235-111.489-44.741-120.665S105.393,65.425,90.277,0Z\\" transform=\\"translate(-24.817)\\" fill=\\"#d4a181\\" fill-rule=\\"evenodd\\"/>\\n            <path id=\\"Pant-3\\" data-name=\\"Pant\\" d=\\"M210.89,0q-14.905,67.947-51.56,216.922H132.952C131,114.983,139.292,47.89,153.645,0Z\\" transform=\\"translate(-95.351)\\" fill=\\"#69a1ac\\" fill-rule=\\"evenodd\\"/>\\n            <path id=\\"Pant-4\\" data-name=\\"Pant\\" d=\\"M161.676,0c-2.611,68.387,4.155,135.761,25.112,217.987H158.645C128.023,149.153,106.076,82.111,91.077,0Z\\" transform=\\"translate(-29.655)\\" fill=\\"#89c5cc\\" fill-rule=\\"evenodd\\"/>\\n            <g id=\\"Accessories_Shoe_Flat-Simple-3\\" data-name=\\"Accessories/Shoe/Flat-Simple\\" transform=\\"translate(98.032 227.351)\\">\\n              <path id=\\"Shoe-3\\" data-name=\\"Shoe\\" d=\\"M62.575,38.587,61.54,21.9q-9.09,2.658-22.77-2.086Q24.061,30.234,1.735,34.044A2.086,2.086,0,0,0,.079,36.67L1.51,41.716H60.5Z\\" transform=\\"translate(0 -19.815)\\" fill=\\"#191847\\" fill-rule=\\"evenodd\\"/>\\n            </g>\\n            <g id=\\"Accessories_Shoe_Flat-Simple-4\\" data-name=\\"Accessories/Shoe/Flat-Simple\\" transform=\\"translate(0 227.351)\\">\\n              <path id=\\"Shoe-4\\" data-name=\\"Shoe\\" d=\\"M62.575,38.587,61.54,21.9q-9.09,2.658-22.77-2.086Q24.061,30.234,1.735,34.044A2.086,2.086,0,0,0,.079,36.67L1.51,41.716H60.5Z\\" transform=\\"translate(0 -19.815)\\" fill=\\"#191847\\" fill-rule=\\"evenodd\\"/>\\n            </g>\\n          </g>\\n          <g id=\\"Body_Pointing-Forward\\" data-name=\\"Body/Pointing-Forward\\" transform=\\"translate(210.317 221.023) rotate(170)\\">\\n            <path id=\\"Skin-2\\" data-name=\\"Skin\\" d=\\"M0,32.684,36.2,52.51A89.547,89.547,0,0,0,53.992,69.165c1.785.745,4.907,1.2,1.988-3.986s-5.758-10.764-4.27-12.361,5.2.634,6.971-2.019q1.774-2.653-19.01-8.381l-26.3-24.083ZM56.694,15.957l15.9,8.735q3.347,12.734,8,12.814c2.384,1.109-1.767-9.618,2.751-8.688s15.547,9.133,17.448,7.467c2.811-2.464.3-10.029-2.649-13.793C92.625,15.458,88.055,13.053,76.758,9.9Q67.9,7.433,57.6,0Z\\" transform=\\"translate(84.907 73.83)\\" fill=\\"#d4a181\\" fill-rule=\\"evenodd\\"/>\\n            <path id=\\"Sleeve\\" d=\\"M5.741,25.4a88.945,88.945,0,0,1,49.272,6.637l4.526-16.714C45.317,5.077,26.447-2.207,11.4.61-.452,2.831-4.256,18.2,5.741,25.4Z\\" transform=\\"translate(65.581 84.94) rotate(9)\\" fill=\\"#2026a2\\" fill-rule=\\"evenodd\\"/>\\n            <path id=\\"Clothes\\" d=\\"M84.35,85.593q20.191-5.035,67.717,11.876,11.789-24.388,10.9-34.774C135.786,48.5,112.49,42.167,93.3,41.749c.61-11.388-.776-22.224-5.433-32.126-9.573-20.356-65.628-1.5-84.476-5.215C-8.415,42.74,14.407,58.318,14.425,82.844c.02,26.859,21.587,68.2,24.76,68.2H68.122C69.719,130.533,77.755,107.927,84.35,85.593Z\\" transform=\\"translate(0 0)\\" fill=\\"#1f28cf\\" fill-rule=\\"evenodd\\"/>\\n          </g>\\n        </g>\\n      </g>\\n    </g>\\n  </g>\\n</svg>"],"names":[],"mappings":"AACE,GAAG,cAAC,CAAC,AACH,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,KAAK,CACjB,MAAM,CAAE,YAAY,SAAS,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,AAC5C,CAAC"}'
};
var Humans = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$C);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"615.107"}" height="${"457.309"}" viewBox="${"0 0 615.107 457.309"}" class="${"svelte-y7po9d"}"><g id="${"Group_3"}" data-name="${"Group 3"}" transform="${"translate(0 -86.83)"}"><g id="${"Group_1"}" data-name="${"Group 1"}" transform="${"translate(-62)"}"><g id="${"Symbols"}" transform="${"translate(87.009 320.798)"}" opacity="${"0.413"}"><g id="${"Scene_Home"}" data-name="${"Scene/Home"}" transform="${"translate(0 0)"}"><g id="${"Big-Leaf-Plant"}" transform="${"translate(0)"}"><g id="${"Big-Ass-Leaf"}" transform="${"translate(19.007)"}"><path id="${"leaf"}" d="${"M21.047,1.143a13.979,13.979,0,0,1,7.1.747C32.824,3.878,34.155,9.408,34.09,13.9c-.069,4.838-1.1,10.123,2.582,14.021,1.691,1.792,3.794,3.164,5.455,4.989a23.583,23.583,0,0,1,4.2,6.578c1.893,4.4,2.821,9.578,1.091,14.2-1.524,4.065-5.357,7.735-4.529,12.358.864,4.822,5.726,8.509,8.766,12.1,3.44,4.065,6.608,9.26,7.128,14.591.5,5.109-1.725,10.276-5.138,14.137-6.819,7.717-17.068,11.5-27.4,11.476-4.388-.01-9.356-.208-13.142-2.566a7.242,7.242,0,0,1-2.483-2.683,8.748,8.748,0,0,0-2.4-2.4,14.256,14.256,0,0,1-4.574-6.109c-3.75-9.283-.753-20.767,4.5-29.01,1.244-1.953,2.262-3.832,1.658-6.16C9.16,66.988,7.61,64.8,6.24,62.707a53.98,53.98,0,0,1-3.96-6.266A14.219,14.219,0,0,1,1.055,49.1,24.988,24.988,0,0,1,6.436,35.987c2.83-3.724,6.152-7.287,6.16-12.166C12.6,18.65,9.147,14.05,10.619,8.792a10.019,10.019,0,0,1,3.809-5.716A15.524,15.524,0,0,1,21.047,1.143Z"}" transform="${"translate(-1 -1)"}" fill="${"#dde3e9"}" fill-rule="${"evenodd"}"></path><path id="${"middle-thing"}" d="${"M23.146,10.972a1.192,1.192,0,0,1,1.517-.93c.854.239.837,1.036.815,1.747a23.479,23.479,0,0,0,.772,6.426c1.091,4.406,3.108,8.466,4.706,12.7a23.116,23.116,0,0,1,1.409,13.071c-.883,4.219-2.27,8.329-3.174,12.554-.8,3.724-1.644,7.65-.431,11.364,1.167,3.575,3.747,6.487,5.605,9.717a45.816,45.816,0,0,1,5.781,21.743,40.657,40.657,0,0,1-.812,10.6c-.473,2-1.11,4.708-2.825,6.091a1.96,1.96,0,0,1-2.81-.086c-.625-.885-.077-2.256.122-3.2a48.507,48.507,0,0,0,.827-12.409,44.8,44.8,0,0,0-1.939-11.867,40.16,40.16,0,0,0-5.055-9.875c-2.138-3.175-4.362-6.356-5.245-10.118-.9-3.821-.168-7.708.807-11.456,1.031-3.964,2.382-7.814,3.779-11.671a20.478,20.478,0,0,0,1.092-11.247C26.6,26.358,22.628,19.064,23.146,10.972Z"}" transform="${"translate(-4.645 -2.562)"}" fill="${"#c5cfd6"}" fill-rule="${"evenodd"}"></path></g><g id="${"Big-Ass-Leaf-2"}" data-name="${"Big-Ass-Leaf"}" transform="${"translate(26.445 8.264)"}"><path id="${"leaf-2"}" data-name="${"leaf"}" d="${"M75.115,1.308a17.762,17.762,0,0,1,7.927,4.575c4.44,4.785,3.078,12.018.627,17.3-2.638,5.686-6.637,11.4-4.383,17.925,1.036,3,2.778,5.715,3.761,8.738a30.471,30.471,0,0,1,1.445,9.963c-.107,6.19-1.753,12.8-6.224,17.356C74.332,81.18,67.9,83.525,66.424,89.423c-1.536,6.153,2.218,13.042,3.885,18.871,1.886,6.6,2.855,14.389.648,20.964-2.115,6.3-7.454,11.255-13.5,14.047-12.076,5.579-26.1,4.72-38.207-.684-5.141-2.295-10.863-5.113-14.058-9.872A9.309,9.309,0,0,1,3.7,128.284a11.232,11.232,0,0,0-1.546-4.092,18.379,18.379,0,0,1-2.136-9.6C.524,101.658,10.11,89.636,20.624,82.618c2.491-1.663,4.679-3.355,5.2-6.423.545-3.2-.115-6.6-.618-9.784a69.755,69.755,0,0,1-1.333-9.47,18.55,18.55,0,0,1,2.446-9.325,32.631,32.631,0,0,1,13.24-12.7C44.847,31.982,50.627,29.5,53.215,23.73c2.743-6.111,1.119-13.35,5.626-18.8A13.034,13.034,0,0,1,66.329.151C69.211-.345,72.359.471,75.115,1.308Z"}" transform="${"translate(0 0)"}" fill="${"#dde3e9"}" fill-rule="${"evenodd"}"></path><path id="${"middle-thing-2"}" data-name="${"middle-thing"}" d="${"M74.685,13.67a1.519,1.519,0,0,1,2.261-.306c.873.73.436,1.666.038,2.5a30.759,30.759,0,0,0-2.463,8.015c-1.032,5.79-.8,11.655-1.148,17.505s-1.759,11.409-5.2,16.218c-3.242,4.534-7.017,8.674-10.286,13.2-2.881,3.992-5.929,8.2-6.456,13.232-.508,4.845.984,9.646,1.465,14.445a60.027,60.027,0,0,1-4.628,28.778,53.127,53.127,0,0,1-6.5,12.129c-1.6,2.123-3.763,4.994-6.494,5.732-1.259.34-2.957-.108-3.241-1.575-.267-1.376,1.092-2.712,1.818-3.726a63.4,63.4,0,0,0,7.465-14.262,58.708,58.708,0,0,0,3.948-15.069,52.522,52.522,0,0,0-.739-14.344c-.838-4.88-1.771-9.813-.834-14.731.951-5,3.84-9.217,6.943-13.143,3.282-4.154,6.878-8.005,10.531-11.84a26.74,26.74,0,0,0,7.167-12.746C70.668,33.7,69.842,22.982,74.685,13.67Z"}" transform="${"translate(-5.555 -2.257)"}" fill="${"#c5cfd6"}" fill-rule="${"evenodd"}"></path></g><g id="${"Big-Ass-Leaf-3"}" data-name="${"Big-Ass-Leaf"}" transform="${"translate(0 46.279)"}"><path id="${"leaf-3"}" data-name="${"leaf"}" d="${"M11,0A15.726,15.726,0,0,1,23.1,6.246c3.454,4.289,4.152,9.527,5.555,14.639a13.068,13.068,0,0,0,4,6.8c1.913,1.572,4.343,1.886,6.633,2.654a15.479,15.479,0,0,1,9.733,9.743c1.781,5.5-.105,11.052.219,16.629.3,5.122,5.348,8.317,9.411,10.772,4.006,2.421,7.615,4.687,8.822,9.4,1.28,5,1.709,10.585-.063,15.527-2.951,8.228-11.586,11.851-19.93,12.412-7.572.51-17.094-.291-22.78-5.787-3.4-3.289-4.635-7.889-4.482-12.466a37.949,37.949,0,0,1,1.388-8.416,37.969,37.969,0,0,0,1.413-5.9c.529-5.359-4.424-6.388-8.64-7.859A20.561,20.561,0,0,1,2.664,54.068C.236,49.487-.784,44.344.672,39.3a17.242,17.242,0,0,1,3.922-6.9c.805-.875,1.94-1.6,2.667-2.524a3.405,3.405,0,0,0,.3-2.976C6.477,22.256,3.109,18.41,1.9,13.775.817,9.591,1.46,4.383,5.285,1.684A9.991,9.991,0,0,1,11,0Z"}" transform="${"translate(0 0)"}" fill="${"#c5cfd6"}" fill-rule="${"evenodd"}"></path><path id="${"middle-thing-3"}" data-name="${"middle-thing"}" d="${"M20.758,14.53c5.163,5.5,6.566,12.961,6.978,20.193.231,4.055-.009,8.333,1.182,12.266,1.019,3.367,3.409,5.94,5.873,8.373,4.959,4.9,10.489,9.874,11.94,16.961.851,4.159.277,8.454,1.453,12.567a34.567,34.567,0,0,0,5.242,10.568c1.844,2.542,4.246,4.488,6.261,6.858.615.723,1.5,1.788,1.242,2.809-.3,1.2-1.82,1.575-2.9,1.387-2.52-.438-4.641-2.844-6.289-4.594a39.566,39.566,0,0,1-6.121-8.4,35.3,35.3,0,0,1-3.97-10.91c-.66-3.989-.331-8.147-1.837-11.975C37.275,64.2,31.128,60.395,26.684,55.374c-5.537-6.256-4.711-14.043-4.144-21.739.312-4.229.621-9.005-1.516-12.867-.816-1.474-2.635-2.848-2.985-4.524C17.717,14.709,19.471,13.158,20.758,14.53Z"}" transform="${"translate(-3.125 -2.43)"}" fill="${"#afb9c5"}" fill-rule="${"evenodd"}"></path></g><path id="${"Base"}" d="${"M28,181c0,31.452,5.133,47.932,32.23,47.932S92.46,212.452,92.46,181Z"}" transform="${"translate(-4.86 -32.246)"}" fill="${"#89c5cc"}" fill-rule="${"evenodd"}"></path></g></g></g><g id="${"humaaans_standing-1"}" data-name="${"humaaans/standing-1"}" transform="${"translate(44.443 71.238)"}"><g id="${"humaaan-11"}" transform="${"translate(34 17)"}"><g id="${"Head_Front_Airy"}" data-name="${"Head/Front/Airy"}" transform="${"translate(55.87 17.63) rotate(-7)"}"><g id="${"Head"}" transform="${"translate(56.316 32.33)"}"><path id="${"Path_1"}" data-name="${"Path 1"}" d="${"M8.617,35.97C3.811,30.329.559,23.416,1.1,15.67,2.668-6.648,33.736-1.739,39.78,9.526S45.1,49.363,37.294,51.377c-3.115.8-9.75-1.164-16.5-5.234l4.239,29.989H0Z"}" fill="${"#915b3c"}" fill-rule="${"evenodd"}"></path></g><path id="${"hair"}" d="${"M81.83,28.873c-3.3-.541-12.181-.913-13.819-.913-1.047,0-2.181.239-2.8-.722-.508-.787-.322-2.118-.473-3.032-.176-1.061-.426-2.108-.679-3.153A32.06,32.06,0,0,0,60.729,12.6,25.993,25.993,0,0,0,48.408,1.442C42.575-1.065,35.976-1.639,29.7-1.131c-6.713.544-12.791,2.76-19.129,4.846a40.091,40.091,0,0,1-18.685,1.8c-6.365-.978-11.175-4.428-16.544-7.7-5.5-3.352-11.777-5.545-18.275-5.041C-49-6.758-54.586-4.253-59.6-.908c-4.692,3.13-8.564,6.9-10.75,12.2-2.352,5.7-2.349,11.96,1.518,17,5.605,7.3,16.011,9.192,24.668,9a47.131,47.131,0,0,0,14.653-2.685c6.3-2.218,11.753-5.976,17.652-9.026a45.934,45.934,0,0,1,8.628-3.453c2.91-.822,5.777-1.2,8.412.559,2.788,1.86,5.285,3.687,8.474,4.851a27.33,27.33,0,0,0,9.559,1.717c6.341-.049,12.593-2.025,18.752-3.348,5.023-1.079,10.4-2.155,15.517-1.117,2.137.433,5.258,1.327,6.029,3.547-12.989,2.354-18.09,18.417-14.428,30.21C51.059,64.91,62.939,72.35,67.558,69c2.926-2.12,1.15-4.9,0-6.74-2.2-3.518-2.955-8.037,1.119-10.487,3.514-2.112,7.209,2.9,7.279,2.9.966-.076,9.312-4.8,15.062-11.684,5.673.336,6.533-3.4,5.179-6.463S86.388,29.621,81.83,28.873Z"}" fill="${"#191847"}" fill-rule="${"evenodd"}"></path></g><g id="${"Bottom_Standing_Sweatpants"}" data-name="${"Bottom/Standing/Sweatpants"}" transform="${"translate(0 203.686)"}"><path id="${"Leg"}" d="${"M133.491,0l38.2,131.641,17.968,98.838H207.7L189.693,0Z"}" fill="${"#784931"}" fill-rule="${"evenodd"}"></path><path id="${"Leg-2"}" data-name="${"Leg"}" d="${"M116.322,0c2.666,68.387,1.614,105.687,1.018,111.9s-3.984,47.826-27.063,120.665h18.758C139.6,162.688,150.27,121.076,153.775,111.9S167.634,65.425,182.75,0Z"}" fill="${"#915b3c"}" fill-rule="${"evenodd"}"></path><path id="${"Pant"}" d="${"M132.671,0q14.905,67.947,51.56,216.922h26.378C212.557,114.983,204.269,47.89,189.916,0Z"}" fill="${"#69a1ac"}" fill-rule="${"evenodd"}"></path><path id="${"Pant-2"}" data-name="${"Pant"}" d="${"M116.189,0c2.611,68.387-4.155,135.761-25.112,217.987H119.22C149.842,149.153,171.789,82.111,186.788,0Z"}" fill="${"#c5cfd6"}" fill-rule="${"evenodd"}"></path><g id="${"Accessories_Shoe_Flat-Simple"}" data-name="${"Accessories/Shoe/Flat-Simple"}" transform="${"translate(87.603 207.536)"}"><path id="${"Shoe"}" d="${"M0,38.587,1.035,21.9q9.09,2.658,22.77-2.086Q38.514,30.234,60.84,34.044A2.086,2.086,0,0,1,62.5,36.67l-1.431,5.046H2.07Z"}" fill="${"#191847"}" fill-rule="${"evenodd"}"></path></g><g id="${"Accessories_Shoe_Flat-Simple-2"}" data-name="${"Accessories/Shoe/Flat-Simple"}" transform="${"translate(185.635 207.536)"}"><path id="${"Shoe-2"}" data-name="${"Shoe"}" d="${"M0,38.587,1.035,21.9q9.09,2.658,22.77-2.086Q38.514,30.234,60.84,34.044A2.086,2.086,0,0,1,62.5,36.67l-1.431,5.046H2.07Z"}" fill="${"#191847"}" fill-rule="${"evenodd"}"></path></g></g><g id="${"Body_Hoodie"}" data-name="${"Body/Hoodie"}" transform="${"translate(6.973 119.855) rotate(-10)"}"><path id="${"Skin"}" d="${"M198.965,96.167,232.231,120.6a89.546,89.546,0,0,1,22.614,9.087c1.43,1.3,3.158,3.942-2.772,3.486s-12.189-.669-13.007,1.354,2.77,4.442,1.116,7.171q-1.654,2.729-15.629-13.687l-32.943-13.66ZM71.238,97.01l21.794.086q-20.185,65.161-21.794,69.148c-2.413,5.981,2.693,15.089,4.877,19.983-7.113,3.183-6.355-8.6-15.327-4.43-8.19,3.81-14.419,10.714-23.881,4.875-1.163-.718-2.438-3.42.642-5.532,7.673-5.262,18.731-14.47,20.225-17.5Q60.83,157.439,71.238,97.01Z"}" fill="${"#915b3c"}" fill-rule="${"evenodd"}"></path><path id="${"Coat-Back"}" d="${"M128,9.991l8.849-2.327c35.851,25.878,54.382,80,97.8,105.727l-8.768,13.05C154.233,123.866,130.762,57.93,128,9.991Z"}" transform="${"translate(6.534 -15.548) rotate(5)"}" fill="${"#1f28cf"}" fill-rule="${"evenodd"}"></path><path id="${"Shirt"}" d="${"M93.861,118.89h79.793c3.646,0,2.959-5.265,2.432-7.922C170,80.307,146.257,47.255,146.257,3.609L123.241,0C104.2,30.618,97.62,68.314,93.861,118.89Z"}" fill="${"#dde3e9"}" fill-rule="${"evenodd"}"></path><path id="${"Coat-Front"}" d="${"M94.5,30.1a13.163,13.163,0,0,1-7.941-6.723C78.148,8.193,81.186-.164,90.176-2.911S107.184,0,121.508,0a14.416,14.416,0,0,1,2.141.147l7.205.411q31.009,105.093,17.1,140.233h-62.8a214.215,214.215,0,0,1-10.682,21.9H57.359Q54.943,84.579,94.5,30.1Z"}" fill="${"#2b44ff"}" fill-rule="${"evenodd"}"></path><path id="${"Shade"}" d="${"M98.83,104.809q2.963,24.789,9.631,35.982H85.154q6.511-15.182,13.676-35.982Z"}" fill="${"rgba(0,0,0,0.1)"}" fill-rule="${"evenodd"}"></path></g></g></g></g><g id="${"Group_2"}" data-name="${"Group 2"}"><g id="${"Symbols-2"}" data-name="${"Symbols"}" transform="${"translate(472 215.363)"}"><g id="${"Scene_Plants"}" data-name="${"Scene/Plants"}" transform="${"translate(0 -0.596)"}"><path id="${"Leaf-Top"}" d="${"M68.581,6.009c1.845-.8,4.189.362,3.065,2.668-1.2,2.469-5.166,2.292-7.4,2.125.225,0,1.067-2.277,1.332-2.614A7.593,7.593,0,0,1,68.581,6.009ZM45.462,50.925C44.8,51.435,45.407,50.973,45.462,50.925Zm24.6-33.085a2.15,2.15,0,0,1,.078,3.239c-1.108,1.1-3.016.963-4.437.776-.643-.085-4.073-.537-3.227-1.053a2.812,2.812,0,0,0-.343.141q-.135.4-.281.8c.02.013.036.026.057.039-.023-.011-.039-.023-.059-.035a31.242,31.242,0,0,1-3.96,7.522,7.511,7.511,0,0,1,1.808-.379c1.809-.132,5.517,1.448,3.381,3.713-2.048,2.172-4.92-.421-7.09-.871a101.841,101.841,0,0,1-7.362,8.1.583.583,0,0,1,.342.313,14.476,14.476,0,0,1,2.993-1.241c1.328-.208,4.031-.235,4.962.981,1.145,1.5-.225,2.59-1.683,2.79-2.113.29-4.8-.865-6.775-1.653a.668.668,0,0,1-.621-.242l-.13-.049c-2.626,2.575-5.343,5.056-8.041,7.48h.083a7.01,7.01,0,0,1,2.214-.865c1.821-.341,3.936-.233,5.327,1.131s1.781,3.628.2,4.99c-3.162,2.727-7.248-4.077-8.751-4.43-2.74,2.436-5.621,4.7-8.542,6.9a5.023,5.023,0,0,1,.99-.147c2.756-.118,9.017,3.546,5.478,6.647-3.084,2.7-6.188-2.968-8.45-5.013-2.752,2.057-5.517,4.1-8.212,6.229a7.572,7.572,0,0,1,4.267.248c1.533.548,3.986,1.843,2.891,3.876-1.114,2.067-4.082.946-5.619.192a42.759,42.759,0,0,0-3.974-2.339A51.434,51.434,0,0,0,6.518,78.165a44.664,44.664,0,0,0-4.379,9.656C1.45,89.973.126,93.579.2,96.43c-.778-5.74,1.534-12.465,3.9-17.436a42.784,42.784,0,0,1,8.868-12.038C12.257,64.381,5.3,60.36,9.7,58.23c2.336-1.125,4.552,1.058,4.933,3.269a9.187,9.187,0,0,1-.986,4.807q1.687-1.605,3.486-3.1c1.654-1.373,3.343-2.7,5.047-4.013-2.554-2.638-4.718-9.914-1.055-10.9,5.409-1.444,2.333,8.167,1.865,9.974a.291.291,0,0,1-.243-.106c.021.169.046.349.079.532,3.26-2.495,6.564-4.935,9.77-7.5a13.924,13.924,0,0,1-.986-1.439A15.574,15.574,0,0,1,29.7,46.684c-.769-1.756-1.453-4.529.878-5.417,2.535-.968,3.548,2.18,3.468,4.023A24.252,24.252,0,0,1,33.328,49c-.078.386.049,2.153-.447,1.37a3.693,3.693,0,0,1-.017.624q.863-.693,1.716-1.4a.657.657,0,0,1-.037-.214.644.644,0,0,1,.952-.552q1.126-.954,2.227-1.94c1.552-1.4,3.128-2.833,4.695-4.3-.308-.291-.159-.664-.445-.971s-.87-.5-1.209-.785a8.486,8.486,0,0,1-2.022-2.753c-.8-1.654-1.756-5.086.858-5.719,2.695-.654,3.869,2.664,3.933,4.7a51.387,51.387,0,0,1-.768,5.2c2.9-2.732,5.761-5.574,8.37-8.482-.742-.045-2.767-1.661-3.171-2.094-.985-1.057-2.519-3.358-.636-4.436,1.674-.956,3.589.654,4.2,2.154a20.367,20.367,0,0,1,.361,3.519c1.082-1.234,2.117-2.478,3.085-3.73q.968-1.248,1.825-2.567a1.206,1.206,0,0,1-.339-.367c-2.676-.594-5.9-4.944-2.649-6.23,1.546-.612,3.108.9,3.786,2.1a15.415,15.415,0,0,1,.47,2.415A49.864,49.864,0,0,0,62.111,15.3a.585.585,0,0,1-.432-.565,8.019,8.019,0,0,1-3.114-2.948c-.522-.913-1.438-2.986.258-3.39,2.207-.525,3.4,2.833,3.491,4.461.011.189-.019.736-.053,1.236a.74.74,0,0,1,.226.016c.606-1.989,1.112-4.009,1.537-6.037-1.166-.44-1.045-6.62-.209-7.458,1.87-1.875,2.965,1.031,2.791,2.528a9.881,9.881,0,0,1-2.141,4.713c-.112.146-.082.14-.1-.072a.422.422,0,0,1-.115.232,26.591,26.591,0,0,1-.043,2.716,62.336,62.336,0,0,1-1.189,7.027q-.192.843-.426,1.67a13.875,13.875,0,0,1,2.834-1.6C66.767,17.312,68.812,16.791,70.057,17.84ZM0,96.195a4.337,4.337,0,0,0,.513,2.052A11.2,11.2,0,0,1,0,96.195Z"}" transform="${"translate(39.024 3.765) rotate(-3)"}" fill="${"#c1dee2"}" fill-rule="${"evenodd"}" opacity="${"0.2"}"></path><g id="${"Plant-Left"}" transform="${"translate(0 26.465)"}" opacity="${"0.5"}"><path id="${"Leaf-4"}" data-name="${"Leaf"}" d="${"M146.455,100.025c2.156-3.073,6.155-10.879,9.189-11.977,1.954-.707,1.384,6.61,1.408,8.005a116.954,116.954,0,0,1-1.08,16.114c-1.169,9.653-4.992,18.25-10.236,26.466-2.7,4.228-5.863,8.507-10.247,11.144-2.018,1.215-4.446,1.418-6.438,2.465-2.321,1.218-1.057.233-2.1,2.652-1.452,3.357-1.917,7.689-2.589,11.271-3.085,16.446-10.555,103.382-9.26,120.11.115,1.483-1.952,1.837-2.056.027-.549-9.6,4.2-76.061,6.593-97.8s4.818-40.938,7.249-48.458c2.948-9.123,8.272-20.094,12.7-28.6A101.17,101.17,0,0,1,146.455,100.025Z"}" transform="${"translate(-55.039 -42.862)"}" fill="${"#69a1ac"}" fill-rule="${"evenodd"}"></path><path id="${"Leaf-5"}" data-name="${"Leaf"}" d="${"M160.505,318.168c5.609-4.118,11.68,3.654,6.6,7.772a5.084,5.084,0,0,1-7.391-.43c-1.072,1.307-2.075,2.673-3.04,3.827-2.937,3.517-5.714,7.117-8.367,10.8-5.512,7.655-10.235,15.741-15.174,23.68-4.874,7.835-9.709,15.711-14.127,23.745-3.742,6.807-8.731,14.814-10.012,22.276,1.944-15.826,9.321-31.037,18.105-44.989,8.713-13.837,18.712-28.948,32.2-39.868A4.778,4.778,0,0,1,160.505,318.168Z"}" transform="${"translate(-53.091 -154.402)"}" fill="${"#c1dee2"}" fill-rule="${"evenodd"}"></path><path id="${"Leaf-6"}" data-name="${"Leaf"}" d="${"M.981,244.016c3.139.614,8.267,7.714,10.855,10.419a101.328,101.328,0,0,1,8.494,10.232,173.048,173.048,0,0,1,15.028,24.512,227.837,227.837,0,0,1,16.721,43.516,179.508,179.508,0,0,1,5.073,28.543c.181,1.807,2.076,15.741-.654,16.116-2.456.338-1.7-10.58-1.816-12.065-1.339-16.755-5.351-33.057-10.931-48.85-1.215-3.44-2.345-7.654-4.288-10.75-1.4-2.23-.01-1.452-2.47-2.3-2.112-.725-4.519-.548-6.682-1.435-4.7-1.927-8.461-5.668-11.759-9.43C12.144,285.214,7.065,277.3,4.418,267.933A118.411,118.411,0,0,1,.851,252.156C.657,250.772-1.04,243.62.981,244.016Z"}" transform="${"translate(0 -118.846)"}" fill="${"#69a1ac"}" fill-rule="${"evenodd"}"></path><path id="${"Leaf-7"}" data-name="${"Leaf"}" d="${"M19.212,7.035A284.432,284.432,0,0,1,47.024,72.875c3.8,13.822,6.459,28.005,9.1,42.086,4.089,21.8,7.957,43.6,9.057,65.793,1.107,22.318,3.3,48.06-4.012,69.556,3.65-21.824.175-45.054-.44-67.014-.294-10.483-1.146-20.864-2.264-31.286-1.085-10.11-2.857-20.172-4.507-30.2q-1.206-7.327-2.508-14.638c-.257-1.454-.365-5.77-1.288-6.764S44.5,99,43.009,98.264a38.407,38.407,0,0,1-8.306-5.8A66.349,66.349,0,0,1,22.482,77.181c-7.594-12.674-10.63-28.14-10.477-42.818C12.035,31.513,16.618.826,14.777.4q.166-.195.314-.4Q17.182,3.5,19.212,7.035Z"}" transform="${"translate(-5.845)"}" fill="${"#89c5cc"}" fill-rule="${"evenodd"}"></path><path id="${"Leaf-8"}" data-name="${"Leaf"}" d="${"M194.554,155.994c.182-.263,1.37-2.093.772-1.976,1.217-.238-1.674,2.018,1.359.634-1.44,1.36-.609,3.127-.59,4.958a44.4,44.4,0,0,1-1.026,8.828,60.537,60.537,0,0,1-4.115,13.343,59.789,59.789,0,0,1-19.65,24.114c-4.149,2.876-8.214,3.856-12.946,5.18-2.989.837-3.226,2.382-4.812,5.283-3.3,6.04-6.546,12.059-9.459,18.3-3.478,7.456-6.854,14.92-10.039,22.507C123.32,282.723,114.588,309.2,110,336.6c-.112-16.148,3.623-32.778,8.335-48.17A287.5,287.5,0,0,1,131,255.708c1.155-2.592,2.9-5.927,3.4-8.789.343-2.005-.706-3.934-1.187-6.046a63.268,63.268,0,0,1-.094-25.712c1.814-9.119,7.062-13.352,15.939-14.644,3.246-.472,7.373-.3,10.349-1.684,3.243-1.507,4.581-6.462,6.425-9.642a131.138,131.138,0,0,1,17.6-23.936,57.084,57.084,0,0,1,6.018-5.537C190.793,158.644,193.637,157.319,194.554,155.994Z"}" transform="${"translate(-53.578 -75.009)"}" fill="${"#89c5cc"}" fill-rule="${"evenodd"}"></path><path id="${"Base-2"}" data-name="${"Base"}" d="${"M78.356,476h31.5a2.565,2.565,0,0,1,2.537,2.939l-2.435,16.51a10.259,10.259,0,0,1-10.149,8.762H88.4a10.259,10.259,0,0,1-10.149-8.762l-2.435-16.51A2.565,2.565,0,0,1,78.356,476Z"}" transform="${"translate(-36.916 -231.847)"}" fill="${"#c1dee2"}" fill-rule="${"evenodd"}"></path></g></g></g><g id="${"humaaans_standing-3"}" data-name="${"humaaans/standing-3"}" transform="${"matrix(1, 0.017, -0.017, 1, 299.846, 101.463)"}"><g id="${"humaaan-12"}" transform="${"translate(0 0)"}"><g id="${"Head_Front_Pony"}" data-name="${"Head/Front/Pony"}" transform="${"matrix(-0.966, 0.259, -0.259, -0.966, 199.333, 84.619)"}"><g id="${"Head-2"}" data-name="${"Head"}" transform="${"translate(49.016 0)"}"><path id="${"Path_2"}" data-name="${"Path 2"}" d="${"M8.617,40.162C3.811,45.8.559,52.716,1.1,60.462,2.668,82.78,33.736,77.87,39.78,66.606S45.1,26.768,37.294,24.755c-3.115-.8-9.75,1.164-16.5,5.234L25.03,0H0Z"}" transform="${"translate(0)"}" fill="${"#d4a181"}" fill-rule="${"evenodd"}"></path></g><path id="${"hair-2"}" data-name="${"hair"}" d="${"M66.3,10.444C63.192,4.487,58.9,0,54.611,0,46.465,0,40.673,10.891,40.673,22.6q0,.617.024,1.226C32.081,17.913,25.44,6.257,14.038,6.257c-15.512,0-21.672,31.287,0,31.287,14.739,0,21.988-2.149,28.236-5.327a20.3,20.3,0,0,0,5.409,8.435,8.408,8.408,0,0,0,2.493,1.769,11.551,11.551,0,0,0,2.071.888A51.96,51.96,0,0,0,67.57,45.884c1.138.04,2.256.051,3.347.037A10.429,10.429,0,1,0,81.911,35.474a52.638,52.638,0,0,0-11.665-1.983,21.749,21.749,0,0,0,.671-5.595,31.633,31.633,0,0,0-.582-5.818,4.873,4.873,0,0,1-3.59,1.909,6.254,6.254,0,0,1-6.257-6.257C60.488,13.64,62.849,10.681,66.3,10.444Z"}" transform="${"translate(0 31.287)"}" fill="${"#191847"}" fill-rule="${"evenodd"}"></path></g><g id="${"Bottom_Standing_Sweatpants-2"}" data-name="${"Bottom/Standing/Sweatpants"}" transform="${"translate(68.105 189.498)"}"><path id="${"Leg-3"}" data-name="${"Leg"}" d="${"M207.7,0l-38.2,131.641L151.525,230.48H133.491L151.493,0Z"}" transform="${"translate(-92.976)"}" fill="${"#ba8b72"}" fill-rule="${"evenodd"}"></path><path id="${"Leg-4"}" data-name="${"Leg"}" d="${"M156.7,0c-2.666,68.387-1.614,105.687-1.018,111.9s3.984,47.826,27.063,120.665H163.992c-30.565-69.877-41.235-111.489-44.741-120.665S105.393,65.425,90.277,0Z"}" transform="${"translate(-24.817)"}" fill="${"#d4a181"}" fill-rule="${"evenodd"}"></path><path id="${"Pant-3"}" data-name="${"Pant"}" d="${"M210.89,0q-14.905,67.947-51.56,216.922H132.952C131,114.983,139.292,47.89,153.645,0Z"}" transform="${"translate(-95.351)"}" fill="${"#69a1ac"}" fill-rule="${"evenodd"}"></path><path id="${"Pant-4"}" data-name="${"Pant"}" d="${"M161.676,0c-2.611,68.387,4.155,135.761,25.112,217.987H158.645C128.023,149.153,106.076,82.111,91.077,0Z"}" transform="${"translate(-29.655)"}" fill="${"#89c5cc"}" fill-rule="${"evenodd"}"></path><g id="${"Accessories_Shoe_Flat-Simple-3"}" data-name="${"Accessories/Shoe/Flat-Simple"}" transform="${"translate(98.032 227.351)"}"><path id="${"Shoe-3"}" data-name="${"Shoe"}" d="${"M62.575,38.587,61.54,21.9q-9.09,2.658-22.77-2.086Q24.061,30.234,1.735,34.044A2.086,2.086,0,0,0,.079,36.67L1.51,41.716H60.5Z"}" transform="${"translate(0 -19.815)"}" fill="${"#191847"}" fill-rule="${"evenodd"}"></path></g><g id="${"Accessories_Shoe_Flat-Simple-4"}" data-name="${"Accessories/Shoe/Flat-Simple"}" transform="${"translate(0 227.351)"}"><path id="${"Shoe-4"}" data-name="${"Shoe"}" d="${"M62.575,38.587,61.54,21.9q-9.09,2.658-22.77-2.086Q24.061,30.234,1.735,34.044A2.086,2.086,0,0,0,.079,36.67L1.51,41.716H60.5Z"}" transform="${"translate(0 -19.815)"}" fill="${"#191847"}" fill-rule="${"evenodd"}"></path></g></g><g id="${"Body_Pointing-Forward"}" data-name="${"Body/Pointing-Forward"}" transform="${"translate(210.317 221.023) rotate(170)"}"><path id="${"Skin-2"}" data-name="${"Skin"}" d="${"M0,32.684,36.2,52.51A89.547,89.547,0,0,0,53.992,69.165c1.785.745,4.907,1.2,1.988-3.986s-5.758-10.764-4.27-12.361,5.2.634,6.971-2.019q1.774-2.653-19.01-8.381l-26.3-24.083ZM56.694,15.957l15.9,8.735q3.347,12.734,8,12.814c2.384,1.109-1.767-9.618,2.751-8.688s15.547,9.133,17.448,7.467c2.811-2.464.3-10.029-2.649-13.793C92.625,15.458,88.055,13.053,76.758,9.9Q67.9,7.433,57.6,0Z"}" transform="${"translate(84.907 73.83)"}" fill="${"#d4a181"}" fill-rule="${"evenodd"}"></path><path id="${"Sleeve"}" d="${"M5.741,25.4a88.945,88.945,0,0,1,49.272,6.637l4.526-16.714C45.317,5.077,26.447-2.207,11.4.61-.452,2.831-4.256,18.2,5.741,25.4Z"}" transform="${"translate(65.581 84.94) rotate(9)"}" fill="${"#2026a2"}" fill-rule="${"evenodd"}"></path><path id="${"Clothes"}" d="${"M84.35,85.593q20.191-5.035,67.717,11.876,11.789-24.388,10.9-34.774C135.786,48.5,112.49,42.167,93.3,41.749c.61-11.388-.776-22.224-5.433-32.126-9.573-20.356-65.628-1.5-84.476-5.215C-8.415,42.74,14.407,58.318,14.425,82.844c.02,26.859,21.587,68.2,24.76,68.2H68.122C69.719,130.533,77.755,107.927,84.35,85.593Z"}" transform="${"translate(0 0)"}" fill="${"#1f28cf"}" fill-rule="${"evenodd"}"></path></g></g></g></g></g></svg>`;
});
var css$B = {
  code: "#wrap.svelte-62diu0.svelte-62diu0{display:flex;align-items:center;justify-content:center;gap:3rem;margin-top:-200px}#wrap.svelte-62diu0 .svelte-62diu0{width:max-content}.home-blocks{min-height:400px;min-width:400px;background:var(--white);border-radius:0.35rem;box-shadow:#1f1f1f38 0px 0px 12px;padding:1rem;display:flex;flex-direction:column;align-items:center;justify-content:center}p.svelte-62diu0.svelte-62diu0{font-size:1.5rem;line-height:1;margin:0.5rem}#sign-up-disclaimer.svelte-62diu0.svelte-62diu0{font-size:0.9rem;color:var(--gray)}#sign-up-disclaimer.svelte-62diu0>a.svelte-62diu0{font-style:italic}",
  map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from 'svelte';\\nimport SignInForm from '$lib/components/auth/SignInForm.svelte';\\nimport Humans from '$lib/components/svg/humans.svelte';\\nconst l = ['complete invoices', 'download assets', 'review contracts'];\\nlet i = 0;\\nlet duration = 3500;\\nconst increment = () => setInterval(() => (i < l.length - 1 ? i++ : (i = 0)), duration);\\nonMount(() => increment());\\n</script>\\n\\n<div id=\\"wrap\\">\\n\\t<div class=\\"home-blocks\\">\\n\\t\\t<Humans />\\n\\t\\t<p>a simple way to {l[i]}</p>\\n\\t</div>\\n\\t<div class=\\"home-blocks\\">\\n\\t\\t<SignInForm />\\n\\t\\t<p id=\\"sign-up-disclaimer\\">\\n\\t\\t\\tDon't have an account? Click <a href=\\"/sign-up\\">here</a> to sign up.\\n\\t\\t</p>\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t#wrap {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t\\tgap: 3rem;\\n\\t\\tmargin-top: -200px;\\n\\t}\\n\\n\\t#wrap * {\\n\\t\\twidth: max-content;\\n\\t}\\n\\n\\t:global(.home-blocks) {\\n\\t\\tmin-height: 400px;\\n\\t\\tmin-width: 400px;\\n\\t\\tbackground: var(--white);\\n\\t\\tborder-radius: 0.35rem;\\n\\t\\tbox-shadow: #1f1f1f38 0px 0px 12px;\\n\\t\\tpadding: 1rem;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t}\\n\\n\\tp {\\n\\t\\tfont-size: 1.5rem;\\n\\t\\tline-height: 1;\\n\\t\\tmargin: 0.5rem;\\n\\t}\\n\\n\\t#sign-up-disclaimer {\\n\\t\\tfont-size: 0.9rem;\\n\\t\\tcolor: var(--gray);\\n\\t}\\n\\n\\t#sign-up-disclaimer > a {\\n\\t\\tfont-style: italic;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAwBC,KAAK,4BAAC,CAAC,AACN,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,GAAG,CAAE,IAAI,CACT,UAAU,CAAE,MAAM,AACnB,CAAC,AAED,mBAAK,CAAC,cAAE,CAAC,AACR,KAAK,CAAE,WAAW,AACnB,CAAC,AAEO,YAAY,AAAE,CAAC,AACtB,UAAU,CAAE,KAAK,CACjB,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,IAAI,OAAO,CAAC,CACxB,aAAa,CAAE,OAAO,CACtB,UAAU,CAAE,SAAS,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,CAClC,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,AACxB,CAAC,AAED,CAAC,4BAAC,CAAC,AACF,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,CAAC,CACd,MAAM,CAAE,MAAM,AACf,CAAC,AAED,mBAAmB,4BAAC,CAAC,AACpB,SAAS,CAAE,MAAM,CACjB,KAAK,CAAE,IAAI,MAAM,CAAC,AACnB,CAAC,AAED,iCAAmB,CAAG,CAAC,cAAC,CAAC,AACxB,UAAU,CAAE,MAAM,AACnB,CAAC"}`
};
var duration = 3500;
var Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const l = ["complete invoices", "download assets", "review contracts"];
  let i = 0;
  const increment = () => setInterval(() => i < l.length - 1 ? i++ : i = 0, duration);
  onMount(() => increment());
  $$result.css.add(css$B);
  return `<div id="${"wrap"}" class="${"svelte-62diu0"}"><div class="${"home-blocks svelte-62diu0"}">${validate_component(Humans, "Humans").$$render($$result, {}, {}, {})}
		<p class="${"svelte-62diu0"}">a simple way to ${escape2(l[i])}</p></div>
	<div class="${"home-blocks svelte-62diu0"}">${validate_component(SignInForm, "SignInForm").$$render($$result, {}, {}, {})}
		<p id="${"sign-up-disclaimer"}" class="${"svelte-62diu0"}">Don&#39;t have an account? Click <a href="${"/sign-up"}" class="${"svelte-62diu0"}">here</a> to sign up.
		</p></div>
</div>`;
});
var index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Routes
});
var css$A = {
  code: ".svelte-2wx9ab{box-sizing:border-box}.bg.svelte-2wx9ab{position:fixed;z-index:1000;top:0;left:0;display:flex;flex-direction:column;justify-content:center;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.66)}.window-wrap.svelte-2wx9ab{position:relative;margin:2rem;max-height:100%}.window.svelte-2wx9ab{position:relative;width:40rem;max-width:100%;max-height:100%;margin:2rem auto;color:black;border-radius:0.5rem;background:white}.content.svelte-2wx9ab{position:relative;padding:1rem;max-height:calc(100vh - 4rem);overflow:auto}.close.svelte-2wx9ab{display:block;box-sizing:border-box;position:absolute;z-index:1000;top:1rem;right:1rem;margin:0;padding:0;width:1.5rem;height:1.5rem;border:0;color:black;border-radius:1.5rem;background:white;box-shadow:0 0 0 1px black;transition:transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),\n                background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);-webkit-appearance:none}.close.svelte-2wx9ab:before,.close.svelte-2wx9ab:after{content:'';display:block;box-sizing:border-box;position:absolute;top:50%;width:1rem;height:1px;background:black;transform-origin:center;transition:height 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),\n                background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)}.close.svelte-2wx9ab:before{-webkit-transform:translate(0, -50%) rotate(45deg);-moz-transform:translate(0, -50%) rotate(45deg);transform:translate(0, -50%) rotate(45deg);left:0.25rem}.close.svelte-2wx9ab:after{-webkit-transform:translate(0, -50%) rotate(-45deg);-moz-transform:translate(0, -50%) rotate(-45deg);transform:translate(0, -50%) rotate(-45deg);left:0.25rem}.close.svelte-2wx9ab:hover{background:black}.close.svelte-2wx9ab:hover:before,.close.svelte-2wx9ab:hover:after{height:2px;background:white}.close.svelte-2wx9ab:focus{border-color:#3399ff;box-shadow:0 0 0 2px #3399ff}.close.svelte-2wx9ab:active{transform:scale(0.9)}.close.svelte-2wx9ab:hover,.close.svelte-2wx9ab:focus,.close.svelte-2wx9ab:active{outline:none}",
  map: `{"version":3,"file":"Modal.svelte","sources":["Modal.svelte"],"sourcesContent":["<script context=\\"module\\">\\n  export function bind(Component, props = {}) {\\n    return function ModalComponent(options) {\\n      return new Component({\\n        ...options,\\n        props: {\\n          ...props,\\n          ...options.props\\n        }\\n      });\\n    };\\n  }\\n</script>\\n\\n<script>\\n  import * as svelte from 'svelte';\\n  import { fade } from 'svelte/transition';\\n  import { createEventDispatcher } from \\"svelte\\";\\n\\n  const dispatch = createEventDispatcher();\\n\\n  const baseSetContext = svelte.setContext;\\n\\n  export let show = null;\\n\\n  export let key = 'simple-modal';\\n  export let closeButton = true;\\n  export let closeOnEsc = true;\\n  export let closeOnOuterClick = true;\\n  export let styleBg =  {};\\n  export let styleWindowWrap = {};\\n  export let styleWindow = {};\\n  export let styleContent = {};\\n  export let styleCloseButton = {};\\n  export let setContext = baseSetContext;\\n  export let transitionBg = fade;\\n  export let transitionBgProps = { duration: 250 };\\n  export let transitionWindow = transitionBg;\\n  export let transitionWindowProps = transitionBgProps;\\n\\n  const defaultState = {\\n    closeButton,\\n    closeOnEsc,\\n    closeOnOuterClick,\\n    styleBg,\\n    styleWindowWrap,\\n    styleWindow,\\n    styleContent,\\n    styleCloseButton,\\n    transitionBg,\\n    transitionBgProps,\\n    transitionWindow,\\n    transitionWindowProps,\\n  };\\n  let state = { ...defaultState };\\n\\n  let Component = null;\\n\\n  let background;\\n  let wrap;\\n  let modalWindow;\\n  let scrollY;\\n  let cssBg;\\n  let cssWindowWrap;\\n  let cssWindow;\\n  let cssContent;\\n  let cssCloseButton;\\n  let currentTransitionBg;\\n  let currentTransitionWindow;\\n  let prevBodyPosition;\\n  let prevBodyOverflow;\\n\\n  const camelCaseToDash = str => str\\n    .replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();\\n\\n  const toCssString = (props) => Object.keys(props)\\n    .reduce((str, key) => \`\${str}; \${camelCaseToDash(key)}: \${props[key]}\`, '');\\n\\n  const isFunction = f => !!(f && f.constructor && f.call && f.apply);\\n\\n  const updateStyleTransition = () => {\\n    cssBg = toCssString(state.styleBg);\\n    cssWindowWrap = toCssString(state.styleWindowWrap);\\n    cssWindow = toCssString(state.styleWindow);\\n    cssContent = toCssString(state.styleContent);\\n    cssCloseButton = toCssString(state.styleCloseButton);\\n    currentTransitionBg = state.transitionBg;\\n    currentTransitionWindow = state.transitionWindow;\\n  };\\n\\n  const toVoid = () => {};\\n  let onOpen = toVoid;\\n  let onClose = toVoid;\\n  let onOpened = toVoid;\\n  let onClosed = toVoid;\\n\\n  const open = (\\n    NewComponent,\\n    newProps = {},\\n    options = {},\\n    callback = {}\\n  ) => {\\n    Component = bind(NewComponent, newProps);\\n    state = { ...defaultState, ...options };\\n    updateStyleTransition();\\n    disableScroll();\\n    onOpen = (event) => {\\n      if (callback.onOpen) callback.onOpen(event);\\n      dispatch('open');\\n      dispatch('opening'); // Deprecated. Do not use!\\n    },\\n    onClose = (event) => {\\n      if (callback.onClose) callback.onClose(event);\\n      dispatch('close');\\n      dispatch('closing'); // Deprecated. Do not use!\\n    },\\n    onOpened = (event) => {\\n      if (callback.onOpened) callback.onOpened(event);\\n      dispatch('opened');\\n    };\\n    onClosed = (event) => {\\n      if (callback.onClosed) callback.onClosed(event);\\n      dispatch('closed');\\n    };\\n  };\\n\\n  const close = (callback = {}) => {\\n    onClose = callback.onClose || onClose;\\n    onClosed = callback.onClosed || onClosed;\\n    Component = null;\\n    enableScroll();\\n  };\\n\\n  const handleKeydown = (event) => {\\n    if (state.closeOnEsc && Component && event.key === 'Escape') {\\n      event.preventDefault();\\n      close();\\n    }\\n\\n    if (Component && event.key === 'Tab') {\\n      // trap focus\\n      const nodes = modalWindow.querySelectorAll('*');\\n      const tabbable = Array.from(nodes).filter(node => node.tabIndex >= 0);\\n\\n      let index = tabbable.indexOf(document.activeElement);\\n      if (index === -1 && event.shiftKey) index = 0;\\n\\n      index += tabbable.length + (event.shiftKey ? -1 : 1);\\n      index %= tabbable.length;\\n\\n      tabbable[index].focus();\\n      event.preventDefault();\\n    }\\n  };\\n\\n  const handleOuterClick = (event) => {\\n    if (\\n      state.closeOnOuterClick && (\\n        event.target === background || event.target === wrap\\n      )\\n    ) {\\n      event.preventDefault();\\n      close();\\n    }\\n  };\\n\\n  const disableScroll = () => {\\n    scrollY = window.scrollY;\\n    prevBodyPosition = document.body.style.position;\\n    prevBodyOverflow = document.body.style.overflow;\\n    document.body.style.position = 'fixed';\\n    document.body.style.top = \`-\${scrollY}px\`;\\n    document.body.style.overflow = 'hidden';\\n  };\\n\\n  const enableScroll = () => {\\n    document.body.style.position = prevBodyPosition || '';\\n    document.body.style.top = '';\\n    document.body.style.overflow = prevBodyOverflow || '';\\n    window.scrollTo(0, scrollY);\\n  };\\n\\n  setContext(key, { open, close });\\n\\n  $: {\\n    if (isFunction(show)) {\\n      open(show);\\n    } else {\\n      close();\\n    }\\n  }\\n\\n  svelte.onDestroy(() => {\\n    close();\\n  });\\n</script>\\n\\n<style>\\n  * {\\n    box-sizing: border-box;\\n  }\\n\\n  .bg {\\n    position: fixed;\\n    z-index: 1000;\\n    top: 0;\\n    left: 0;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    width: 100vw;\\n    height: 100vh;\\n    background: rgba(0, 0, 0, 0.66);\\n  }\\n\\n  .window-wrap {\\n    position: relative;\\n    margin: 2rem;\\n    max-height: 100%;\\n  }\\n\\n  .window {\\n    position: relative;\\n    width: 40rem;\\n    max-width: 100%;\\n    max-height: 100%;\\n    margin: 2rem auto;\\n    color: black;\\n    border-radius: 0.5rem;\\n    background: white;\\n  }\\n\\n  .content {\\n    position: relative;\\n    padding: 1rem;\\n    max-height: calc(100vh - 4rem);\\n    overflow: auto;\\n  }\\n\\n  .close {\\n    display: block;\\n    box-sizing: border-box;\\n    position: absolute;\\n    z-index: 1000;\\n    top: 1rem;\\n    right: 1rem;\\n    margin: 0;\\n    padding: 0;\\n    width: 1.5rem;\\n    height: 1.5rem;\\n    border: 0;\\n    color: black;\\n    border-radius: 1.5rem;\\n    background: white;\\n    box-shadow: 0 0 0 1px black;\\n    transition: transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),\\n                background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);\\n    -webkit-appearance: none;\\n  }\\n\\n  .close:before, .close:after {\\n    content: '';\\n    display: block;\\n    box-sizing: border-box;\\n    position: absolute;\\n    top: 50%;\\n    width: 1rem;\\n    height: 1px;\\n    background: black;\\n    transform-origin: center;\\n    transition: height 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),\\n                background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);\\n  }\\n\\n  .close:before {\\n    -webkit-transform: translate(0, -50%) rotate(45deg);\\n    -moz-transform: translate(0, -50%) rotate(45deg);\\n    transform: translate(0, -50%) rotate(45deg);\\n    left: 0.25rem;\\n  }\\n\\n  .close:after {\\n    -webkit-transform: translate(0, -50%) rotate(-45deg);\\n    -moz-transform: translate(0, -50%) rotate(-45deg);\\n    transform: translate(0, -50%) rotate(-45deg);\\n    left: 0.25rem;\\n  }\\n\\n  .close:hover {\\n    background: black;\\n  }\\n\\n  .close:hover:before, .close:hover:after {\\n    height: 2px;\\n    background: white;\\n  }\\n\\n  .close:focus {\\n    border-color: #3399ff;\\n    box-shadow: 0 0 0 2px #3399ff;\\n  }\\n\\n  .close:active {\\n    transform: scale(0.9);\\n  }\\n\\n  .close:hover, .close:focus, .close:active {\\n    outline: none;\\n  }\\n</style>\\n\\n<svelte:window on:keydown={handleKeydown}/>\\n\\n{#if Component}\\n  <div\\n    class=\\"bg\\"\\n    on:click={handleOuterClick}\\n    bind:this={background}\\n    transition:currentTransitionBg={state.transitionBgProps}\\n    style={cssBg}\\n  >\\n    <div class=\\"window-wrap\\" bind:this={wrap} style={cssWindowWrap}>\\n      <div\\n        class=\\"window\\"\\n        role=\\"dialog\\"\\n        aria-modal=\\"true\\"\\n        bind:this={modalWindow}\\n        transition:currentTransitionWindow={state.transitionWindowProps}\\n        on:introstart={onOpen}\\n        on:outrostart={onClose}\\n        on:introend={onOpened}\\n        on:outroend={onClosed}\\n        style={cssWindow}\\n      >\\n        {#if state.closeButton}\\n          {#if isFunction(state.closeButton)}\\n            <svelte:component this={state.closeButton} onClose={close} />\\n          {:else}\\n            <button on:click={close} class=\\"close\\" style={cssCloseButton} />\\n          {/if}\\n        {/if}\\n        <div class=\\"content\\" style={cssContent}>\\n          <svelte:component this={Component} />\\n        </div>\\n      </div>\\n    </div>\\n  </div>\\n{/if}\\n<slot></slot>\\n"],"names":[],"mappings":"AAsME,cAAE,CAAC,AACD,UAAU,CAAE,UAAU,AACxB,CAAC,AAED,GAAG,cAAC,CAAC,AACH,QAAQ,CAAE,KAAK,CACf,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,AACjC,CAAC,AAED,YAAY,cAAC,CAAC,AACZ,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,AAClB,CAAC,AAED,OAAO,cAAC,CAAC,AACP,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,IAAI,CAAC,IAAI,CACjB,KAAK,CAAE,KAAK,CACZ,aAAa,CAAE,MAAM,CACrB,UAAU,CAAE,KAAK,AACnB,CAAC,AAED,QAAQ,cAAC,CAAC,AACR,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,IAAI,CAAC,CAC9B,QAAQ,CAAE,IAAI,AAChB,CAAC,AAED,MAAM,cAAC,CAAC,AACN,OAAO,CAAE,KAAK,CACd,UAAU,CAAE,UAAU,CACtB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,KAAK,CAAE,MAAM,CACb,MAAM,CAAE,MAAM,CACd,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,KAAK,CACZ,aAAa,CAAE,MAAM,CACrB,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,KAAK,CAC3B,UAAU,CAAE,SAAS,CAAC,IAAI,CAAC,aAAa,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC;gBAChD,UAAU,CAAC,IAAI,CAAC,aAAa,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAC5D,kBAAkB,CAAE,IAAI,AAC1B,CAAC,AAED,oBAAM,OAAO,CAAE,oBAAM,MAAM,AAAC,CAAC,AAC3B,OAAO,CAAE,EAAE,CACX,OAAO,CAAE,KAAK,CACd,UAAU,CAAE,UAAU,CACtB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CACX,UAAU,CAAE,KAAK,CACjB,gBAAgB,CAAE,MAAM,CACxB,UAAU,CAAE,MAAM,CAAC,IAAI,CAAC,aAAa,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC;gBAC7C,UAAU,CAAC,IAAI,CAAC,aAAa,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,AAC9D,CAAC,AAED,oBAAM,OAAO,AAAC,CAAC,AACb,iBAAiB,CAAE,UAAU,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,OAAO,KAAK,CAAC,CACnD,cAAc,CAAE,UAAU,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,OAAO,KAAK,CAAC,CAChD,SAAS,CAAE,UAAU,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,OAAO,KAAK,CAAC,CAC3C,IAAI,CAAE,OAAO,AACf,CAAC,AAED,oBAAM,MAAM,AAAC,CAAC,AACZ,iBAAiB,CAAE,UAAU,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,OAAO,MAAM,CAAC,CACpD,cAAc,CAAE,UAAU,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,OAAO,MAAM,CAAC,CACjD,SAAS,CAAE,UAAU,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,OAAO,MAAM,CAAC,CAC5C,IAAI,CAAE,OAAO,AACf,CAAC,AAED,oBAAM,MAAM,AAAC,CAAC,AACZ,UAAU,CAAE,KAAK,AACnB,CAAC,AAED,oBAAM,MAAM,OAAO,CAAE,oBAAM,MAAM,MAAM,AAAC,CAAC,AACvC,MAAM,CAAE,GAAG,CACX,UAAU,CAAE,KAAK,AACnB,CAAC,AAED,oBAAM,MAAM,AAAC,CAAC,AACZ,YAAY,CAAE,OAAO,CACrB,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,OAAO,AAC/B,CAAC,AAED,oBAAM,OAAO,AAAC,CAAC,AACb,SAAS,CAAE,MAAM,GAAG,CAAC,AACvB,CAAC,AAED,oBAAM,MAAM,CAAE,oBAAM,MAAM,CAAE,oBAAM,OAAO,AAAC,CAAC,AACzC,OAAO,CAAE,IAAI,AACf,CAAC"}`
};
function bind(Component, props = {}) {
  return function ModalComponent(options2) {
    return new Component({
      ...options2,
      props: {...props, ...options2.props}
    });
  };
}
var Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const dispatch = createEventDispatcher();
  const baseSetContext = setContext;
  let {show = null} = $$props;
  let {key = "simple-modal"} = $$props;
  let {closeButton = true} = $$props;
  let {closeOnEsc = true} = $$props;
  let {closeOnOuterClick = true} = $$props;
  let {styleBg = {}} = $$props;
  let {styleWindowWrap = {}} = $$props;
  let {styleWindow = {}} = $$props;
  let {styleContent = {}} = $$props;
  let {styleCloseButton = {}} = $$props;
  let {setContext: setContext2 = baseSetContext} = $$props;
  let {transitionBg = fade} = $$props;
  let {transitionBgProps = {duration: 250}} = $$props;
  let {transitionWindow = transitionBg} = $$props;
  let {transitionWindowProps = transitionBgProps} = $$props;
  const defaultState = {
    closeButton,
    closeOnEsc,
    closeOnOuterClick,
    styleBg,
    styleWindowWrap,
    styleWindow,
    styleContent,
    styleCloseButton,
    transitionBg,
    transitionBgProps,
    transitionWindow,
    transitionWindowProps
  };
  let state = {...defaultState};
  let Component = null;
  let background;
  let wrap;
  let modalWindow;
  let scrollY;
  let cssBg;
  let cssWindowWrap;
  let cssWindow;
  let cssContent;
  let cssCloseButton;
  let prevBodyPosition;
  let prevBodyOverflow;
  const camelCaseToDash = (str) => str.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();
  const toCssString = (props) => Object.keys(props).reduce((str, key2) => `${str}; ${camelCaseToDash(key2)}: ${props[key2]}`, "");
  const isFunction = (f) => !!(f && f.constructor && f.call && f.apply);
  const updateStyleTransition = () => {
    cssBg = toCssString(state.styleBg);
    cssWindowWrap = toCssString(state.styleWindowWrap);
    cssWindow = toCssString(state.styleWindow);
    cssContent = toCssString(state.styleContent);
    cssCloseButton = toCssString(state.styleCloseButton);
  };
  const toVoid = () => {
  };
  let onClose = toVoid;
  let onClosed = toVoid;
  const open = (NewComponent, newProps = {}, options2 = {}, callback = {}) => {
    Component = bind(NewComponent, newProps);
    state = {...defaultState, ...options2};
    updateStyleTransition();
    disableScroll();
    onClose = (event) => {
      if (callback.onClose)
        callback.onClose(event);
      dispatch("close");
      dispatch("closing");
    }, (event) => {
      if (callback.onOpened)
        callback.onOpened(event);
      dispatch("opened");
    };
    onClosed = (event) => {
      if (callback.onClosed)
        callback.onClosed(event);
      dispatch("closed");
    };
  };
  const close = (callback = {}) => {
    onClose = callback.onClose || onClose;
    onClosed = callback.onClosed || onClosed;
    Component = null;
    enableScroll();
  };
  const disableScroll = () => {
    scrollY = window.scrollY;
    prevBodyPosition = document.body.style.position;
    prevBodyOverflow = document.body.style.overflow;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.overflow = "hidden";
  };
  const enableScroll = () => {
    document.body.style.position = prevBodyPosition || "";
    document.body.style.top = "";
    document.body.style.overflow = prevBodyOverflow || "";
    window.scrollTo(0, scrollY);
  };
  setContext2(key, {open, close});
  onDestroy(() => {
    close();
  });
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.closeButton === void 0 && $$bindings.closeButton && closeButton !== void 0)
    $$bindings.closeButton(closeButton);
  if ($$props.closeOnEsc === void 0 && $$bindings.closeOnEsc && closeOnEsc !== void 0)
    $$bindings.closeOnEsc(closeOnEsc);
  if ($$props.closeOnOuterClick === void 0 && $$bindings.closeOnOuterClick && closeOnOuterClick !== void 0)
    $$bindings.closeOnOuterClick(closeOnOuterClick);
  if ($$props.styleBg === void 0 && $$bindings.styleBg && styleBg !== void 0)
    $$bindings.styleBg(styleBg);
  if ($$props.styleWindowWrap === void 0 && $$bindings.styleWindowWrap && styleWindowWrap !== void 0)
    $$bindings.styleWindowWrap(styleWindowWrap);
  if ($$props.styleWindow === void 0 && $$bindings.styleWindow && styleWindow !== void 0)
    $$bindings.styleWindow(styleWindow);
  if ($$props.styleContent === void 0 && $$bindings.styleContent && styleContent !== void 0)
    $$bindings.styleContent(styleContent);
  if ($$props.styleCloseButton === void 0 && $$bindings.styleCloseButton && styleCloseButton !== void 0)
    $$bindings.styleCloseButton(styleCloseButton);
  if ($$props.setContext === void 0 && $$bindings.setContext && setContext2 !== void 0)
    $$bindings.setContext(setContext2);
  if ($$props.transitionBg === void 0 && $$bindings.transitionBg && transitionBg !== void 0)
    $$bindings.transitionBg(transitionBg);
  if ($$props.transitionBgProps === void 0 && $$bindings.transitionBgProps && transitionBgProps !== void 0)
    $$bindings.transitionBgProps(transitionBgProps);
  if ($$props.transitionWindow === void 0 && $$bindings.transitionWindow && transitionWindow !== void 0)
    $$bindings.transitionWindow(transitionWindow);
  if ($$props.transitionWindowProps === void 0 && $$bindings.transitionWindowProps && transitionWindowProps !== void 0)
    $$bindings.transitionWindowProps(transitionWindowProps);
  $$result.css.add(css$A);
  {
    {
      if (isFunction(show)) {
        open(show);
      } else {
        close();
      }
    }
  }
  return `

${Component ? `<div class="${"bg svelte-2wx9ab"}"${add_attribute("style", cssBg, 0)}${add_attribute("this", background, 1)}><div class="${"window-wrap svelte-2wx9ab"}"${add_attribute("style", cssWindowWrap, 0)}${add_attribute("this", wrap, 1)}><div class="${"window svelte-2wx9ab"}" role="${"dialog"}" aria-modal="${"true"}"${add_attribute("style", cssWindow, 0)}${add_attribute("this", modalWindow, 1)}>${state.closeButton ? `${isFunction(state.closeButton) ? `${validate_component(state.closeButton || missing_component, "svelte:component").$$render($$result, {onClose: close}, {}, {})}` : `<button class="${"close svelte-2wx9ab"}"${add_attribute("style", cssCloseButton, 0)}></button>`}` : ``}
        <div class="${"content svelte-2wx9ab"}"${add_attribute("style", cssContent, 0)}>${validate_component(Component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div></div></div></div>` : ``}
${slots.default ? slots.default({}) : ``}`;
});
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>What is this?</h2>

<p>This dashboard is a tool designed &amp; built by Black Cat Studio, for our clients to be able to manage their business with us in a simpler way. There are four pages in this dashboard...</p>
<ul><li>Sites - Contains a list of all your websites built by us including some analytics/ data.</li>
  <li>Invoices - A table of all invoices issued by BCS including an integration that allows you to pay invoices &amp; download a pdf version.</li>
  <li>Assets - This tab contains any and all branding work completed by BCS, allowing downloads where appropriate.</li>
  <li>Contracts - View or download a PDF of any work agreement between BCS &amp; the client.</li></ul>`;
});
var css$z = {
  code: "body{max-width:100vw;position:relative !important;top:0 !important}button.svelte-42myk1{text-align:center;background:transparent;border:2px solid var(--black);border-radius:5px;width:30px;height:30px;margin:.5rem}button.svelte-42myk1:hover{transition:ease;cursor:pointer;background:var(--black);border-color:white;color:white}",
  map: `{"version":3,"file":"MoreInfoModal.svelte","sources":["MoreInfoModal.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { getContext } from 'svelte';\\nimport Content from './MoreInfoModalContent.svelte';\\nconst { open } = getContext('simple-modal');\\nconst show = () => {\\n    open(Content);\\n};\\n</script>\\n\\n<button on:click={show}>?</button>\\n\\n<style>\\n  /* reset body style added by modal */\\n  :global(body) {\\n    max-width: 100vw;\\n    position: relative !important;\\n    top: 0 !important;\\n  }\\n\\n  button {\\n    text-align: center;\\n    background: transparent;\\n    border: 2px solid var(--black);\\n    border-radius: 5px;\\n    width: 30px;\\n    height: 30px;\\n    margin: .5rem;\\n  }\\n\\n  button:hover {\\n    transition: ease;\\n    cursor: pointer;\\n    background: var(--black);\\n    border-color: white;\\n    color: white;\\n  }\\n</style>"],"names":[],"mappings":"AAYU,IAAI,AAAE,CAAC,AACb,SAAS,CAAE,KAAK,CAChB,QAAQ,CAAE,QAAQ,CAAC,UAAU,CAC7B,GAAG,CAAE,CAAC,CAAC,UAAU,AACnB,CAAC,AAED,MAAM,cAAC,CAAC,AACN,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,WAAW,CACvB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,OAAO,CAAC,CAC9B,aAAa,CAAE,GAAG,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,KAAK,AACf,CAAC,AAED,oBAAM,MAAM,AAAC,CAAC,AACZ,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,IAAI,OAAO,CAAC,CACxB,YAAY,CAAE,KAAK,CACnB,KAAK,CAAE,KAAK,AACd,CAAC"}`
};
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getContext("simple-modal");
  $$result.css.add(css$z);
  return `<button class="${"svelte-42myk1"}">?</button>`;
});
var css$y = {
  code: "nav.svelte-17iqbu9.svelte-17iqbu9{display:flex;justify-content:space-between;align-items:flex-end}ul.svelte-17iqbu9.svelte-17iqbu9{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}a.svelte-17iqbu9.svelte-17iqbu9{border:1px solid transparent;border-top-left-radius:0.35rem;border-top-right-radius:0.35rem;display:block;padding:0.5rem 1rem;cursor:pointer;color:var(--white)}a.svelte-17iqbu9.svelte-17iqbu9:hover{border-color:#8d8e8f #8d8e8f transparent}li.active.svelte-17iqbu9>a.svelte-17iqbu9{color:#495057;background-color:var(--white)}li.active.svelte-17iqbu9.svelte-17iqbu9{position:relative}li.active.svelte-17iqbu9.svelte-17iqbu9:before{content:'';position:absolute;right:1px;bottom:-1px;width:calc(100% - 2px);border-bottom:0.5rem solid var(--white);z-index:1;background-color:var(--white);height:10px}#content-wrap.svelte-17iqbu9.svelte-17iqbu9{box-shadow:#1f1f1f78 3px 3px 18px;z-index:-1;position:relative;background-color:var(--white);border-radius:0 0.35rem 0.35rem 0.35rem;min-height:500px;padding:2rem}.rnd.svelte-17iqbu9.svelte-17iqbu9{border-radius:0.35rem !important}#dashboard-wrap.svelte-17iqbu9.svelte-17iqbu9{margin:auto;transform:translateY(-275px);margin-bottom:-275px}@media(min-width: 640px){#dashboard-wrap.svelte-17iqbu9.svelte-17iqbu9{max-width:90vw}}",
  map: `{"version":3,"file":"__layout.svelte","sources":["__layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from 'svelte';\\nimport { page } from '$app/stores';\\nimport Modal from 'svelte-simple-modal';\\nimport MoreInfoModal from '$lib/components/ui/modal_content/MoreInfoModal.svelte';\\nlet tabItems = [\\n    { label: 'Sites', value: 1, route: '/dashboard' },\\n    { label: 'Invoices', value: 2, route: '/dashboard/invoices' },\\n    { label: 'Assets', value: 3, route: '/dashboard/assets' },\\n    { label: 'Contracts', value: 4, route: '/dashboard/contracts' }\\n];\\nlet activeTabValue;\\n$: $page ? (activeTabValue = tabItems.find((e) => e.route === $page.path).value) : 1;\\nconst handleClick = (tabValue) => () => (activeTabValue = tabValue);\\n</script>\\n\\n<div id=\\"dashboard-wrap\\">\\n\\t<nav>\\n\\t\\t<ul>\\n\\t\\t\\t{#if Array.isArray(tabItems)}\\n\\t\\t\\t\\t{#each tabItems as item}\\n\\t\\t\\t\\t\\t<li class={activeTabValue === item.value ? 'active' : ''}>\\n\\t\\t\\t\\t\\t\\t<a href={item.route} on:click={handleClick(item.value)}>\\n\\t\\t\\t\\t\\t\\t\\t{item.label}\\n\\t\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t{/if}\\n\\t\\t</ul>\\n\\t\\t<!--{#if document}\\n      <Modal>\\n        <MoreInfoModal />\\n      </Modal>\\n    {/if}-->\\n\\t</nav>\\n\\t<div id=\\"content-wrap\\" class={activeTabValue !== 1 ? 'rnd' : ''}>\\n\\t\\t<slot />\\n\\t</div>\\n</div>\\n\\n<style>\\n\\tnav {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t\\talign-items: flex-end;\\n\\t}\\n\\tul {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-wrap: wrap;\\n\\t\\tpadding-left: 0;\\n\\t\\tmargin-bottom: 0;\\n\\t\\tlist-style: none;\\n\\t}\\n\\n\\ta {\\n\\t\\tborder: 1px solid transparent;\\n\\t\\tborder-top-left-radius: 0.35rem;\\n\\t\\tborder-top-right-radius: 0.35rem;\\n\\t\\tdisplay: block;\\n\\t\\tpadding: 0.5rem 1rem;\\n\\t\\tcursor: pointer;\\n\\t\\tcolor: var(--white);\\n\\t}\\n\\n\\ta:hover {\\n\\t\\tborder-color: #8d8e8f #8d8e8f transparent;\\n\\t}\\n\\n\\tli.active > a {\\n\\t\\tcolor: #495057;\\n\\t\\t/*border-color: #00000070 #00000070 var(--white);*/\\n\\t\\tbackground-color: var(--white);\\n\\t}\\n\\tli.active {\\n\\t\\tposition: relative;\\n\\t}\\n\\tli.active:before {\\n\\t\\tcontent: '';\\n\\t\\tposition: absolute;\\n\\t\\tright: 1px;\\n\\t\\tbottom: -1px;\\n\\t\\twidth: calc(100% - 2px);\\n\\t\\tborder-bottom: 0.5rem solid var(--white);\\n\\t\\tz-index: 1;\\n\\t\\tbackground-color: var(--white);\\n\\t\\theight: 10px;\\n\\t}\\n\\t#content-wrap {\\n\\t\\tbox-shadow: #1f1f1f78 3px 3px 18px;\\n\\t\\tz-index: -1;\\n\\t\\tposition: relative;\\n\\t\\tbackground-color: var(--white);\\n\\t\\tborder-radius: 0 0.35rem 0.35rem 0.35rem;\\n\\t\\tmin-height: 500px;\\n\\t\\tpadding: 2rem;\\n\\t}\\n\\t.rnd {\\n\\t\\tborder-radius: 0.35rem !important;\\n\\t}\\n\\t#dashboard-wrap {\\n\\t\\tmargin: auto;\\n\\t\\ttransform: translateY(-275px);\\n\\t\\tmargin-bottom: -275px;\\n\\t}\\n\\t@media (min-width: 640px) {\\n\\t\\t#dashboard-wrap {\\n\\t\\t\\tmax-width: 90vw;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAwCC,GAAG,8BAAC,CAAC,AACJ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,QAAQ,AACtB,CAAC,AACD,EAAE,8BAAC,CAAC,AACH,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,YAAY,CAAE,CAAC,CACf,aAAa,CAAE,CAAC,CAChB,UAAU,CAAE,IAAI,AACjB,CAAC,AAED,CAAC,8BAAC,CAAC,AACF,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,CAC7B,sBAAsB,CAAE,OAAO,CAC/B,uBAAuB,CAAE,OAAO,CAChC,OAAO,CAAE,KAAK,CACd,OAAO,CAAE,MAAM,CAAC,IAAI,CACpB,MAAM,CAAE,OAAO,CACf,KAAK,CAAE,IAAI,OAAO,CAAC,AACpB,CAAC,AAED,+BAAC,MAAM,AAAC,CAAC,AACR,YAAY,CAAE,OAAO,CAAC,OAAO,CAAC,WAAW,AAC1C,CAAC,AAED,EAAE,sBAAO,CAAG,CAAC,eAAC,CAAC,AACd,KAAK,CAAE,OAAO,CAEd,gBAAgB,CAAE,IAAI,OAAO,CAAC,AAC/B,CAAC,AACD,EAAE,OAAO,8BAAC,CAAC,AACV,QAAQ,CAAE,QAAQ,AACnB,CAAC,AACD,EAAE,qCAAO,OAAO,AAAC,CAAC,AACjB,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CACvB,aAAa,CAAE,MAAM,CAAC,KAAK,CAAC,IAAI,OAAO,CAAC,CACxC,OAAO,CAAE,CAAC,CACV,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,MAAM,CAAE,IAAI,AACb,CAAC,AACD,aAAa,8BAAC,CAAC,AACd,UAAU,CAAE,SAAS,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,CAClC,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,aAAa,CAAE,CAAC,CAAC,OAAO,CAAC,OAAO,CAAC,OAAO,CACxC,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,IAAI,AACd,CAAC,AACD,IAAI,8BAAC,CAAC,AACL,aAAa,CAAE,OAAO,CAAC,UAAU,AAClC,CAAC,AACD,eAAe,8BAAC,CAAC,AAChB,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,WAAW,MAAM,CAAC,CAC7B,aAAa,CAAE,MAAM,AACtB,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,eAAe,8BAAC,CAAC,AAChB,SAAS,CAAE,IAAI,AAChB,CAAC,AACF,CAAC"}`
};
var _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let tabItems = [
    {
      label: "Sites",
      value: 1,
      route: "/dashboard"
    },
    {
      label: "Invoices",
      value: 2,
      route: "/dashboard/invoices"
    },
    {
      label: "Assets",
      value: 3,
      route: "/dashboard/assets"
    },
    {
      label: "Contracts",
      value: 4,
      route: "/dashboard/contracts"
    }
  ];
  let activeTabValue;
  $$result.css.add(css$y);
  {
    $page ? activeTabValue = tabItems.find((e) => e.route === $page.path).value : 1;
  }
  $$unsubscribe_page();
  return `<div id="${"dashboard-wrap"}" class="${"svelte-17iqbu9"}"><nav class="${"svelte-17iqbu9"}"><ul class="${"svelte-17iqbu9"}">${Array.isArray(tabItems) ? `${each(tabItems, (item) => `<li class="${escape2(null_to_empty(activeTabValue === item.value ? "active" : "")) + " svelte-17iqbu9"}"><a${add_attribute("href", item.route, 0)} class="${"svelte-17iqbu9"}">${escape2(item.label)}</a>
					</li>`)}` : ``}</ul>
		</nav>
	<div id="${"content-wrap"}" class="${escape2(null_to_empty(activeTabValue !== 1 ? "rnd" : "")) + " svelte-17iqbu9"}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
var __layout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _layout
});
var options = {
  projectId: "5y93631y",
  dataset: "production",
  apiVersion: "2021-05-01",
  token: "",
  useCdn: true
};
var client = (0, import_client.default)(options);
var builder = (0, import_image_url.default)(client);
var urlFor = (source) => {
  return builder.image(source);
};
var makeUrl = (ref) => {
  const [_file, id, extension] = ref.split("-");
  return `https://cdn.sanity.io/files/${options.projectId}/${options.dataset}/${id}.${extension}`;
};
var formatDate = (s2) => {
  let d = new Date(s2);
  let ye = new Intl.DateTimeFormat("en", {year: "numeric"}).format(d);
  let mo = new Intl.DateTimeFormat("en", {month: "short"}).format(d);
  let da = new Intl.DateTimeFormat("en", {day: "2-digit"}).format(d);
  return `${da}-${mo}-${ye}`;
};
var css$x = {
  code: ".circle.svelte-14upwad{height:var(--size);width:var(--size);border-color:var(--color) transparent var(--color) var(--color);border-width:calc(var(--size) / 15);border-style:solid;border-image:initial;border-radius:50%;animation:var(--duration) linear 0s infinite normal none running svelte-14upwad-rotate}@keyframes svelte-14upwad-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}",
  map: '{"version":3,"file":"Circle.svelte","sources":["Circle.svelte"],"sourcesContent":["<script>;\\r\\nexport let color = \\"#FF3E00\\";\\r\\nexport let unit = \\"px\\";\\r\\nexport let duration = \\"0.75s\\";\\r\\nexport let size = \\"60\\";\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  .circle {\\r\\n    height: var(--size);\\r\\n    width: var(--size);\\r\\n    border-color: var(--color) transparent var(--color) var(--color);\\r\\n    border-width: calc(var(--size) / 15);\\r\\n    border-style: solid;\\r\\n    border-image: initial;\\r\\n    border-radius: 50%;\\r\\n    animation: var(--duration) linear 0s infinite normal none running rotate;\\r\\n  }\\r\\n  @keyframes rotate {\\r\\n    0% {\\r\\n      transform: rotate(0);\\r\\n    }\\r\\n    100% {\\r\\n      transform: rotate(360deg);\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div\\r\\n  class=\\"circle\\"\\r\\n  style=\\"--size: {size}{unit}; --color: {color}; --duration: {duration}\\" />\\r\\n"],"names":[],"mappings":"AAQE,OAAO,eAAC,CAAC,AACP,MAAM,CAAE,IAAI,MAAM,CAAC,CACnB,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,YAAY,CAAE,IAAI,OAAO,CAAC,CAAC,WAAW,CAAC,IAAI,OAAO,CAAC,CAAC,IAAI,OAAO,CAAC,CAChE,YAAY,CAAE,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CACpC,YAAY,CAAE,KAAK,CACnB,YAAY,CAAE,OAAO,CACrB,aAAa,CAAE,GAAG,CAClB,SAAS,CAAE,IAAI,UAAU,CAAC,CAAC,MAAM,CAAC,EAAE,CAAC,QAAQ,CAAC,MAAM,CAAC,IAAI,CAAC,OAAO,CAAC,qBACpE,CAAC,AACD,WAAW,qBAAO,CAAC,AACjB,EAAE,AAAC,CAAC,AACF,SAAS,CAAE,OAAO,CAAC,CAAC,AACtB,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,OAAO,MAAM,CAAC,AAC3B,CAAC,AACH,CAAC"}'
};
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {color = "#FF3E00"} = $$props;
  let {unit = "px"} = $$props;
  let {duration: duration2 = "0.75s"} = $$props;
  let {size = "60"} = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration2 !== void 0)
    $$bindings.duration(duration2);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$x);
  return `<div class="${"circle svelte-14upwad"}" style="${"--size: " + escape2(size) + escape2(unit) + "; --color: " + escape2(color) + "; --duration: " + escape2(duration2)}"></div>`;
});
var css$w = {
  code: '.circle.svelte-1vclic6{width:var(--size);height:var(--size);box-sizing:border-box;position:relative;border:3px solid transparent;border-top-color:var(--colorOuter);border-radius:50%;animation:svelte-1vclic6-circleSpin var(--durationOuter) linear infinite}.circle.svelte-1vclic6:before,.circle.svelte-1vclic6:after{content:"";box-sizing:border-box;position:absolute;border:3px solid transparent;border-radius:50%}.circle.svelte-1vclic6:after{border-top-color:var(--colorInner);top:9px;left:9px;right:9px;bottom:9px;animation:svelte-1vclic6-circleSpin var(--durationInner) linear infinite}.circle.svelte-1vclic6:before{border-top-color:var(--colorCenter);top:3px;left:3px;right:3px;bottom:3px;animation:svelte-1vclic6-circleSpin var(--durationCenter) linear infinite}@keyframes svelte-1vclic6-circleSpin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}',
  map: '{"version":3,"file":"Circle2.svelte","sources":["Circle2.svelte"],"sourcesContent":["<script>export let size = \\"60\\";\\r\\nexport let unit = \\"px\\";\\r\\nexport let colorOuter = \\"#FF3E00\\";\\r\\nexport let colorCenter = \\"#40B3FF\\";\\r\\nexport let colorInner = \\"#676778\\";\\r\\nexport let durationMultiplier = 1;\\r\\nexport let durationOuter = `${durationMultiplier * 2}s`;\\r\\nexport let durationInner = `${durationMultiplier * 1.5}s`;\\r\\nexport let durationCenter = `${durationMultiplier * 3}s`;\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  .circle {\\r\\n    width: var(--size);\\r\\n    height: var(--size);\\r\\n    box-sizing: border-box;\\r\\n    position: relative;\\r\\n    border: 3px solid transparent;\\r\\n    border-top-color: var(--colorOuter);\\r\\n    border-radius: 50%;\\r\\n    animation: circleSpin var(--durationOuter) linear infinite;\\r\\n  }\\r\\n  .circle:before,\\r\\n  .circle:after {\\r\\n    content: \\"\\";\\r\\n    box-sizing: border-box;\\r\\n    position: absolute;\\r\\n    border: 3px solid transparent;\\r\\n    border-radius: 50%;\\r\\n  }\\r\\n  .circle:after {\\r\\n    border-top-color: var(--colorInner);\\r\\n    top: 9px;\\r\\n    left: 9px;\\r\\n    right: 9px;\\r\\n    bottom: 9px;\\r\\n    animation: circleSpin var(--durationInner) linear infinite;\\r\\n  }\\r\\n  .circle:before {\\r\\n    border-top-color: var(--colorCenter);\\r\\n    top: 3px;\\r\\n    left: 3px;\\r\\n    right: 3px;\\r\\n    bottom: 3px;\\r\\n    animation: circleSpin var(--durationCenter) linear infinite;\\r\\n  }\\r\\n  @keyframes circleSpin {\\r\\n    0% {\\r\\n      transform: rotate(0deg);\\r\\n    }\\r\\n    100% {\\r\\n      transform: rotate(360deg);\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div\\r\\n  class=\\"circle\\"\\r\\n  style=\\"--size: {size}{unit}; --colorInner: {colorInner}; --colorCenter: {colorCenter}; --colorOuter: {colorOuter}; --durationInner: {durationInner}; --durationCenter: {durationCenter}; --durationOuter: {durationOuter};\\" />\\r\\n"],"names":[],"mappings":"AAYE,OAAO,eAAC,CAAC,AACP,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,MAAM,CAAE,IAAI,MAAM,CAAC,CACnB,UAAU,CAAE,UAAU,CACtB,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,CAC7B,gBAAgB,CAAE,IAAI,YAAY,CAAC,CACnC,aAAa,CAAE,GAAG,CAClB,SAAS,CAAE,yBAAU,CAAC,IAAI,eAAe,CAAC,CAAC,MAAM,CAAC,QAAQ,AAC5D,CAAC,AACD,sBAAO,OAAO,CACd,sBAAO,MAAM,AAAC,CAAC,AACb,OAAO,CAAE,EAAE,CACX,UAAU,CAAE,UAAU,CACtB,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,CAC7B,aAAa,CAAE,GAAG,AACpB,CAAC,AACD,sBAAO,MAAM,AAAC,CAAC,AACb,gBAAgB,CAAE,IAAI,YAAY,CAAC,CACnC,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,SAAS,CAAE,yBAAU,CAAC,IAAI,eAAe,CAAC,CAAC,MAAM,CAAC,QAAQ,AAC5D,CAAC,AACD,sBAAO,OAAO,AAAC,CAAC,AACd,gBAAgB,CAAE,IAAI,aAAa,CAAC,CACpC,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,SAAS,CAAE,yBAAU,CAAC,IAAI,gBAAgB,CAAC,CAAC,MAAM,CAAC,QAAQ,AAC7D,CAAC,AACD,WAAW,yBAAW,CAAC,AACrB,EAAE,AAAC,CAAC,AACF,SAAS,CAAE,OAAO,IAAI,CAAC,AACzB,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,OAAO,MAAM,CAAC,AAC3B,CAAC,AACH,CAAC"}'
};
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {size = "60"} = $$props;
  let {unit = "px"} = $$props;
  let {colorOuter = "#FF3E00"} = $$props;
  let {colorCenter = "#40B3FF"} = $$props;
  let {colorInner = "#676778"} = $$props;
  let {durationMultiplier = 1} = $$props;
  let {durationOuter = `${durationMultiplier * 2}s`} = $$props;
  let {durationInner = `${durationMultiplier * 1.5}s`} = $$props;
  let {durationCenter = `${durationMultiplier * 3}s`} = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.colorOuter === void 0 && $$bindings.colorOuter && colorOuter !== void 0)
    $$bindings.colorOuter(colorOuter);
  if ($$props.colorCenter === void 0 && $$bindings.colorCenter && colorCenter !== void 0)
    $$bindings.colorCenter(colorCenter);
  if ($$props.colorInner === void 0 && $$bindings.colorInner && colorInner !== void 0)
    $$bindings.colorInner(colorInner);
  if ($$props.durationMultiplier === void 0 && $$bindings.durationMultiplier && durationMultiplier !== void 0)
    $$bindings.durationMultiplier(durationMultiplier);
  if ($$props.durationOuter === void 0 && $$bindings.durationOuter && durationOuter !== void 0)
    $$bindings.durationOuter(durationOuter);
  if ($$props.durationInner === void 0 && $$bindings.durationInner && durationInner !== void 0)
    $$bindings.durationInner(durationInner);
  if ($$props.durationCenter === void 0 && $$bindings.durationCenter && durationCenter !== void 0)
    $$bindings.durationCenter(durationCenter);
  $$result.css.add(css$w);
  return `<div class="${"circle svelte-1vclic6"}" style="${"--size: " + escape2(size) + escape2(unit) + "; --colorInner: " + escape2(colorInner) + "; --colorCenter: " + escape2(colorCenter) + "; --colorOuter: " + escape2(colorOuter) + "; --durationInner: " + escape2(durationInner) + "; --durationCenter: " + escape2(durationCenter) + "; --durationOuter: " + escape2(durationOuter) + ";"}"></div>`;
});
var css$v = {
  code: ".wrapper.svelte-1vf8im1{width:var(--size);height:var(--size);display:flex;justify-content:center;align-items:center;line-height:0;box-sizing:border-box}.inner.svelte-1vf8im1{transform:scale(calc(var(--floatSize) / 52))}.ball-container.svelte-1vf8im1{animation:svelte-1vf8im1-ballTwo var(--duration) infinite;width:44px;height:44px;flex-shrink:0;position:relative}.single-ball.svelte-1vf8im1{width:44px;height:44px;position:absolute}.ball.svelte-1vf8im1{width:20px;height:20px;border-radius:50%;position:absolute;animation:svelte-1vf8im1-ballOne var(--duration) infinite ease}.ball-top-left.svelte-1vf8im1{background-color:var(--ballTopLeftColor);top:0;left:0}.ball-top-right.svelte-1vf8im1{background-color:var(--ballTopRightColor);top:0;left:24px}.ball-bottom-left.svelte-1vf8im1{background-color:var(--ballBottomLeftColor);top:24px;left:0}.ball-bottom-right.svelte-1vf8im1{background-color:var(--ballBottomRightColor);top:24px;left:24px}@keyframes svelte-1vf8im1-ballOne{0%{position:absolute}50%{top:12px;left:12px;position:absolute;opacity:0.5}100%{position:absolute}}@keyframes svelte-1vf8im1-ballTwo{0%{transform:rotate(0deg) scale(1)}50%{transform:rotate(360deg) scale(1.3)}100%{transform:rotate(720deg) scale(1)}}",
  map: '{"version":3,"file":"Circle3.svelte","sources":["Circle3.svelte"],"sourcesContent":["<script>export let size = \\"60\\";\\r\\nexport let unit = \\"px\\";\\r\\nexport let ballTopLeft = \\"#FF3E00\\";\\r\\nexport let ballTopRight = \\"#F8B334\\";\\r\\nexport let ballBottomLeft = \\"#40B3FF\\";\\r\\nexport let ballBottomRight = \\"#676778\\";\\r\\nexport let duration = \\"1.5s\\";\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  .wrapper {\\r\\n    width: var(--size);\\r\\n    height: var(--size);\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    line-height: 0;\\r\\n    box-sizing: border-box;\\r\\n  }\\r\\n  .inner {\\r\\n    transform: scale(calc(var(--floatSize) / 52));\\r\\n  }\\r\\n  .ball-container {\\r\\n    animation: ballTwo var(--duration) infinite;\\r\\n    width: 44px;\\r\\n    height: 44px;\\r\\n    flex-shrink: 0;\\r\\n    position: relative;\\r\\n  }\\r\\n  .single-ball {\\r\\n    width: 44px;\\r\\n    height: 44px;\\r\\n    position: absolute;\\r\\n  }\\r\\n  .ball {\\r\\n    width: 20px;\\r\\n    height: 20px;\\r\\n    border-radius: 50%;\\r\\n    position: absolute;\\r\\n    animation: ballOne var(--duration) infinite ease;\\r\\n  }\\r\\n  .ball-top-left {\\r\\n    background-color: var(--ballTopLeftColor);\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n  }\\r\\n  .ball-top-right {\\r\\n    background-color: var(--ballTopRightColor);\\r\\n    top: 0;\\r\\n    left: 24px;\\r\\n  }\\r\\n  .ball-bottom-left {\\r\\n    background-color: var(--ballBottomLeftColor);\\r\\n    top: 24px;\\r\\n    left: 0;\\r\\n  }\\r\\n  .ball-bottom-right {\\r\\n    background-color: var(--ballBottomRightColor);\\r\\n    top: 24px;\\r\\n    left: 24px;\\r\\n  }\\r\\n  @keyframes ballOne {\\r\\n    0% {\\r\\n      position: absolute;\\r\\n    }\\r\\n    50% {\\r\\n      top: 12px;\\r\\n      left: 12px;\\r\\n      position: absolute;\\r\\n      opacity: 0.5;\\r\\n    }\\r\\n    100% {\\r\\n      position: absolute;\\r\\n    }\\r\\n  }\\r\\n  @keyframes ballTwo {\\r\\n    0% {\\r\\n      transform: rotate(0deg) scale(1);\\r\\n    }\\r\\n    50% {\\r\\n      transform: rotate(360deg) scale(1.3);\\r\\n    }\\r\\n    100% {\\r\\n      transform: rotate(720deg) scale(1);\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div\\r\\n  class=\\"wrapper\\"\\r\\n  style=\\"--size: {size}{unit}; --floatSize: {size}; --ballTopLeftColor: {ballTopLeft}; --ballTopRightColor: {ballTopRight}; --ballBottomLeftColor: {ballBottomLeft}; --ballBottomRightColor: {ballBottomRight}; --duration: {duration};\\">\\r\\n  <div class=\\"inner\\">\\r\\n    <div class=\\"ball-container\\">\\r\\n      <div class=\\"single-ball\\">\\r\\n        <div class=\\"ball ball-top-left\\">&nbsp;</div>\\r\\n      </div>\\r\\n      <div class=\\"contener_mixte\\">\\r\\n        <div class=\\"ball ball-top-right\\">&nbsp;</div>\\r\\n      </div>\\r\\n      <div class=\\"contener_mixte\\">\\r\\n        <div class=\\"ball ball-bottom-left\\">&nbsp;</div>\\r\\n      </div>\\r\\n      <div class=\\"contener_mixte\\">\\r\\n        <div class=\\"ball ball-bottom-right\\">&nbsp;</div>\\r\\n      </div>\\r\\n    </div>\\r\\n  </div>\\r\\n</div>\\r\\n"],"names":[],"mappings":"AAUE,QAAQ,eAAC,CAAC,AACR,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,MAAM,CAAE,IAAI,MAAM,CAAC,CACnB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,CAAC,CACd,UAAU,CAAE,UAAU,AACxB,CAAC,AACD,MAAM,eAAC,CAAC,AACN,SAAS,CAAE,MAAM,KAAK,IAAI,WAAW,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,AAC/C,CAAC,AACD,eAAe,eAAC,CAAC,AACf,SAAS,CAAE,sBAAO,CAAC,IAAI,UAAU,CAAC,CAAC,QAAQ,CAC3C,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,CAAC,CACd,QAAQ,CAAE,QAAQ,AACpB,CAAC,AACD,YAAY,eAAC,CAAC,AACZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,QAAQ,AACpB,CAAC,AACD,KAAK,eAAC,CAAC,AACL,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,QAAQ,CAAE,QAAQ,CAClB,SAAS,CAAE,sBAAO,CAAC,IAAI,UAAU,CAAC,CAAC,QAAQ,CAAC,IAAI,AAClD,CAAC,AACD,cAAc,eAAC,CAAC,AACd,gBAAgB,CAAE,IAAI,kBAAkB,CAAC,CACzC,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,AACT,CAAC,AACD,eAAe,eAAC,CAAC,AACf,gBAAgB,CAAE,IAAI,mBAAmB,CAAC,CAC1C,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,IAAI,AACZ,CAAC,AACD,iBAAiB,eAAC,CAAC,AACjB,gBAAgB,CAAE,IAAI,qBAAqB,CAAC,CAC5C,GAAG,CAAE,IAAI,CACT,IAAI,CAAE,CAAC,AACT,CAAC,AACD,kBAAkB,eAAC,CAAC,AAClB,gBAAgB,CAAE,IAAI,sBAAsB,CAAC,CAC7C,GAAG,CAAE,IAAI,CACT,IAAI,CAAE,IAAI,AACZ,CAAC,AACD,WAAW,sBAAQ,CAAC,AAClB,EAAE,AAAC,CAAC,AACF,QAAQ,CAAE,QAAQ,AACpB,CAAC,AACD,GAAG,AAAC,CAAC,AACH,GAAG,CAAE,IAAI,CACT,IAAI,CAAE,IAAI,CACV,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,GAAG,AACd,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,QAAQ,CAAE,QAAQ,AACpB,CAAC,AACH,CAAC,AACD,WAAW,sBAAQ,CAAC,AAClB,EAAE,AAAC,CAAC,AACF,SAAS,CAAE,OAAO,IAAI,CAAC,CAAC,MAAM,CAAC,CAAC,AAClC,CAAC,AACD,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,OAAO,MAAM,CAAC,CAAC,MAAM,GAAG,CAAC,AACtC,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,OAAO,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,AACpC,CAAC,AACH,CAAC"}'
};
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {size = "60"} = $$props;
  let {unit = "px"} = $$props;
  let {ballTopLeft = "#FF3E00"} = $$props;
  let {ballTopRight = "#F8B334"} = $$props;
  let {ballBottomLeft = "#40B3FF"} = $$props;
  let {ballBottomRight = "#676778"} = $$props;
  let {duration: duration2 = "1.5s"} = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.ballTopLeft === void 0 && $$bindings.ballTopLeft && ballTopLeft !== void 0)
    $$bindings.ballTopLeft(ballTopLeft);
  if ($$props.ballTopRight === void 0 && $$bindings.ballTopRight && ballTopRight !== void 0)
    $$bindings.ballTopRight(ballTopRight);
  if ($$props.ballBottomLeft === void 0 && $$bindings.ballBottomLeft && ballBottomLeft !== void 0)
    $$bindings.ballBottomLeft(ballBottomLeft);
  if ($$props.ballBottomRight === void 0 && $$bindings.ballBottomRight && ballBottomRight !== void 0)
    $$bindings.ballBottomRight(ballBottomRight);
  if ($$props.duration === void 0 && $$bindings.duration && duration2 !== void 0)
    $$bindings.duration(duration2);
  $$result.css.add(css$v);
  return `<div class="${"wrapper svelte-1vf8im1"}" style="${"--size: " + escape2(size) + escape2(unit) + "; --floatSize: " + escape2(size) + "; --ballTopLeftColor: " + escape2(ballTopLeft) + "; --ballTopRightColor: " + escape2(ballTopRight) + "; --ballBottomLeftColor: " + escape2(ballBottomLeft) + "; --ballBottomRightColor: " + escape2(ballBottomRight) + "; --duration: " + escape2(duration2) + ";"}"><div class="${"inner svelte-1vf8im1"}"><div class="${"ball-container svelte-1vf8im1"}"><div class="${"single-ball svelte-1vf8im1"}"><div class="${"ball ball-top-left svelte-1vf8im1"}">\xA0</div></div>
      <div class="${"contener_mixte"}"><div class="${"ball ball-top-right svelte-1vf8im1"}">\xA0</div></div>
      <div class="${"contener_mixte"}"><div class="${"ball ball-bottom-left svelte-1vf8im1"}">\xA0</div></div>
      <div class="${"contener_mixte"}"><div class="${"ball ball-bottom-right svelte-1vf8im1"}">\xA0</div></div></div></div></div>`;
});
var durationUnitRegex = /[a-zA-Z]/;
var calculateRgba = (color, opacity) => {
  if (color[0] === "#") {
    color = color.slice(1);
  }
  if (color.length === 3) {
    let res = "";
    color.split("").forEach((c) => {
      res += c;
      res += c;
    });
    color = res;
  }
  const rgbValues = (color.match(/.{2}/g) || []).map((hex) => parseInt(hex, 16)).join(", ");
  return `rgba(${rgbValues}, ${opacity})`;
};
var range = (size, startAt = 0) => [...Array(size).keys()].map((i) => i + startAt);
var css$u = {
  code: ".wrapper.svelte-h1a2xs{position:relative;width:var(--size);height:var(--size)}.circle.svelte-h1a2xs{position:absolute;width:var(--size);height:var(--size);background-color:var(--color);border-radius:100%;opacity:0.6;top:0;left:0;animation-fill-mode:both;animation-name:svelte-h1a2xs-bounce !important}@keyframes svelte-h1a2xs-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}",
  map: '{"version":3,"file":"DoubleBounce.svelte","sources":["DoubleBounce.svelte"],"sourcesContent":["<script>;\\r\\nimport { range, durationUnitRegex } from \\"./utils\\";\\r\\nexport let color = \\"#FF3E00\\";\\r\\nexport let unit = \\"px\\";\\r\\nexport let duration = \\"2.1s\\";\\r\\nexport let size = \\"60\\";\\r\\nlet durationUnit = duration.match(durationUnitRegex)[0];\\r\\nlet durationNum = duration.replace(durationUnitRegex, \\"\\");\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  .wrapper {\\r\\n    position: relative;\\r\\n    width: var(--size);\\r\\n    height: var(--size);\\r\\n  }\\r\\n  .circle {\\r\\n    position: absolute;\\r\\n    width: var(--size);\\r\\n    height: var(--size);\\r\\n    background-color: var(--color);\\r\\n    border-radius: 100%;\\r\\n    opacity: 0.6;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    animation-fill-mode: both;\\r\\n    animation-name: bounce !important;\\r\\n  }\\r\\n  @keyframes bounce {\\r\\n    0%,\\r\\n    100% {\\r\\n      transform: scale(0);\\r\\n    }\\r\\n    50% {\\r\\n      transform: scale(1);\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div class=\\"wrapper\\" style=\\"--size: {size}{unit}; --color: {color}\\">\\r\\n  {#each range(2, 1) as version}\\r\\n    <div\\r\\n      class=\\"circle\\"\\r\\n      style=\\"animation: {duration} {version === 1 ? `${(durationNum - 0.1) / 2}${durationUnit}` : `0s`} infinite ease-in-out\\" />\\r\\n  {/each}\\r\\n</div>\\r\\n"],"names":[],"mappings":"AAWE,QAAQ,cAAC,CAAC,AACR,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,MAAM,CAAE,IAAI,MAAM,CAAC,AACrB,CAAC,AACD,OAAO,cAAC,CAAC,AACP,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,MAAM,CAAE,IAAI,MAAM,CAAC,CACnB,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,GAAG,CACZ,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,mBAAmB,CAAE,IAAI,CACzB,cAAc,CAAE,oBAAM,CAAC,UAAU,AACnC,CAAC,AACD,WAAW,oBAAO,CAAC,AACjB,EAAE,CACF,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,MAAM,CAAC,CAAC,AACrB,CAAC,AACD,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,MAAM,CAAC,CAAC,AACrB,CAAC,AACH,CAAC"}'
};
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {color = "#FF3E00"} = $$props;
  let {unit = "px"} = $$props;
  let {duration: duration2 = "2.1s"} = $$props;
  let {size = "60"} = $$props;
  let durationUnit = duration2.match(durationUnitRegex)[0];
  let durationNum = duration2.replace(durationUnitRegex, "");
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration2 !== void 0)
    $$bindings.duration(duration2);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$u);
  return `<div class="${"wrapper svelte-h1a2xs"}" style="${"--size: " + escape2(size) + escape2(unit) + "; --color: " + escape2(color)}">${each(range(2, 1), (version) => `<div class="${"circle svelte-h1a2xs"}" style="${"animation: " + escape2(duration2) + " " + escape2(version === 1 ? `${(durationNum - 0.1) / 2}${durationUnit}` : `0s`) + " infinite ease-in-out"}"></div>`)}</div>`;
});
var css$t = {
  code: '.svelte-1exboqr{overflow:hidden;position:relative;text-indent:-9999px;display:inline-block;background:#f86;border-radius:50%;transform:rotateZ(90deg);transform-origin:50% 50%;animation:svelte-1exboqr-plus-loader-background var(--duration) infinite ease-in-out}.svelte-1exboqr:after{background:#f86;border-radius:50% 0 0 50%;content:"";position:absolute;right:50%;top:0;width:50%;height:100%;transform-origin:100% 50%;animation:svelte-1exboqr-plus-loader-top var(--duration) infinite linear}.svelte-1exboqr:before{background:#fc6;border-radius:50% 0 0 50%;content:"";position:absolute;right:50%;top:0;width:50%;height:100%;transform-origin:100% 50%;animation:svelte-1exboqr-plus-loader-bottom var(--duration) infinite linear}@keyframes svelte-1exboqr-plus-loader-top{2.5%{background:#f86;transform:rotateY(0deg);animation-timing-function:ease-in}13.75%{background:#ff430d;transform:rotateY(90deg);animation-timing-function:step-start}13.76%{background:#ffae0d;transform:rotateY(90deg);animation-timing-function:ease-out}25%{background:#fc6;transform:rotateY(180deg)}27.5%{background:#fc6;transform:rotateY(180deg);animation-timing-function:ease-in}41.25%{background:#ffae0d;transform:rotateY(90deg);animation-timing-function:step-start}41.26%{background:#2cc642;transform:rotateY(90deg);animation-timing-function:ease-out}50%{background:#6d7;transform:rotateY(0deg)}52.5%{background:#6d7;transform:rotateY(0deg);animation-timing-function:ease-in}63.75%{background:#2cc642;transform:rotateY(90deg);animation-timing-function:step-start}63.76%{background:#1386d2;transform:rotateY(90deg);animation-timing-function:ease-out}75%{background:#4ae;transform:rotateY(180deg)}77.5%{background:#4ae;transform:rotateY(180deg);animation-timing-function:ease-in}91.25%{background:#1386d2;transform:rotateY(90deg);animation-timing-function:step-start}91.26%{background:#ff430d;transform:rotateY(90deg);animation-timing-function:ease-in}100%{background:#f86;transform:rotateY(0deg);animation-timing-function:step-start}}@keyframes svelte-1exboqr-plus-loader-bottom{0%{background:#fc6;animation-timing-function:step-start}50%{background:#fc6;animation-timing-function:step-start}75%{background:#4ae;animation-timing-function:step-start}100%{background:#4ae;animation-timing-function:step-start}}@keyframes svelte-1exboqr-plus-loader-background{0%{background:#f86;transform:rotateZ(180deg)}25%{background:#f86;transform:rotateZ(180deg);animation-timing-function:step-start}27.5%{background:#6d7;transform:rotateZ(90deg)}50%{background:#6d7;transform:rotateZ(90deg);animation-timing-function:step-start}52.5%{background:#6d7;transform:rotateZ(0deg)}75%{background:#6d7;transform:rotateZ(0deg);animation-timing-function:step-start}77.5%{background:#f86;transform:rotateZ(270deg)}100%{background:#f86;transform:rotateZ(270deg);animation-timing-function:step-start}}',
  map: '{"version":3,"file":"GoogleSpin.svelte","sources":["GoogleSpin.svelte"],"sourcesContent":["<script>\\r\\n  export let size = \\"40px\\";\\r\\n  export let duration = \\"3s\\";\\r\\n  $: styles = [`width: ${size}`, `height: ${size}`].join(\\";\\");\\r\\n</script>\\r\\n\\r\\n<div class=\\"spinner spinner--google\\" style=\\"--duration: {duration}; {styles}\\"></div>\\r\\n\\r\\n<style>\\r\\n  * {\\r\\n    overflow: hidden;\\r\\n    position: relative;\\r\\n    text-indent: -9999px;\\r\\n    display: inline-block;\\r\\n    background: #f86;\\r\\n    border-radius: 50%;\\r\\n    transform: rotateZ(90deg);\\r\\n    transform-origin: 50% 50%;\\r\\n    animation: plus-loader-background var(--duration) infinite ease-in-out;\\r\\n  }\\r\\n\\r\\n  *:after {\\r\\n    background: #f86;\\r\\n    border-radius: 50% 0 0 50%;\\r\\n    content: \\"\\";\\r\\n    position: absolute;\\r\\n    right: 50%;\\r\\n    top: 0;\\r\\n    width: 50%;\\r\\n    height: 100%;\\r\\n    transform-origin: 100% 50%;\\r\\n    animation: plus-loader-top var(--duration) infinite linear;\\r\\n  }\\r\\n\\r\\n  *:before {\\r\\n    background: #fc6;\\r\\n    border-radius: 50% 0 0 50%;\\r\\n    content: \\"\\";\\r\\n    position: absolute;\\r\\n    right: 50%;\\r\\n    top: 0;\\r\\n    width: 50%;\\r\\n    height: 100%;\\r\\n    transform-origin: 100% 50%;\\r\\n    animation: plus-loader-bottom var(--duration) infinite linear;\\r\\n  }\\r\\n\\r\\n  @keyframes plus-loader-top {\\r\\n    2.5% {\\r\\n      background: #f86;\\r\\n      transform: rotateY(0deg);\\r\\n      animation-timing-function: ease-in;\\r\\n    }\\r\\n\\r\\n    13.75% {\\r\\n      background: #ff430d;\\r\\n      transform: rotateY(90deg);\\r\\n      animation-timing-function: step-start;\\r\\n    }\\r\\n\\r\\n    13.76% {\\r\\n      background: #ffae0d;\\r\\n      transform: rotateY(90deg);\\r\\n      animation-timing-function: ease-out;\\r\\n    }\\r\\n\\r\\n    25% {\\r\\n      background: #fc6;\\r\\n      transform: rotateY(180deg);\\r\\n    }\\r\\n\\r\\n    27.5% {\\r\\n      background: #fc6;\\r\\n      transform: rotateY(180deg);\\r\\n      animation-timing-function: ease-in;\\r\\n    }\\r\\n\\r\\n    41.25% {\\r\\n      background: #ffae0d;\\r\\n      transform: rotateY(90deg);\\r\\n      animation-timing-function: step-start;\\r\\n    }\\r\\n\\r\\n    41.26% {\\r\\n      background: #2cc642;\\r\\n      transform: rotateY(90deg);\\r\\n      animation-timing-function: ease-out;\\r\\n    }\\r\\n\\r\\n    50% {\\r\\n      background: #6d7;\\r\\n      transform: rotateY(0deg);\\r\\n    }\\r\\n\\r\\n    52.5% {\\r\\n      background: #6d7;\\r\\n      transform: rotateY(0deg);\\r\\n      animation-timing-function: ease-in;\\r\\n    }\\r\\n\\r\\n    63.75% {\\r\\n      background: #2cc642;\\r\\n      transform: rotateY(90deg);\\r\\n      animation-timing-function: step-start;\\r\\n    }\\r\\n\\r\\n    63.76% {\\r\\n      background: #1386d2;\\r\\n      transform: rotateY(90deg);\\r\\n      animation-timing-function: ease-out;\\r\\n    }\\r\\n\\r\\n    75% {\\r\\n      background: #4ae;\\r\\n      transform: rotateY(180deg);\\r\\n    }\\r\\n\\r\\n    77.5% {\\r\\n      background: #4ae;\\r\\n      transform: rotateY(180deg);\\r\\n      animation-timing-function: ease-in;\\r\\n    }\\r\\n\\r\\n    91.25% {\\r\\n      background: #1386d2;\\r\\n      transform: rotateY(90deg);\\r\\n      animation-timing-function: step-start;\\r\\n    }\\r\\n\\r\\n    91.26% {\\r\\n      background: #ff430d;\\r\\n      transform: rotateY(90deg);\\r\\n      animation-timing-function: ease-in;\\r\\n    }\\r\\n\\r\\n    100% {\\r\\n      background: #f86;\\r\\n      transform: rotateY(0deg);\\r\\n      animation-timing-function: step-start;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  @keyframes plus-loader-bottom {\\r\\n    0% {\\r\\n      background: #fc6;\\r\\n      animation-timing-function: step-start;\\r\\n    }\\r\\n\\r\\n    50% {\\r\\n      background: #fc6;\\r\\n      animation-timing-function: step-start;\\r\\n    }\\r\\n\\r\\n    75% {\\r\\n      background: #4ae;\\r\\n      animation-timing-function: step-start;\\r\\n    }\\r\\n\\r\\n    100% {\\r\\n      background: #4ae;\\r\\n      animation-timing-function: step-start;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  @keyframes plus-loader-background {\\r\\n    0% {\\r\\n      background: #f86;\\r\\n      transform: rotateZ(180deg);\\r\\n    }\\r\\n\\r\\n    25% {\\r\\n      background: #f86;\\r\\n      transform: rotateZ(180deg);\\r\\n      animation-timing-function: step-start;\\r\\n    }\\r\\n\\r\\n    27.5% {\\r\\n      background: #6d7;\\r\\n      transform: rotateZ(90deg);\\r\\n    }\\r\\n\\r\\n    50% {\\r\\n      background: #6d7;\\r\\n      transform: rotateZ(90deg);\\r\\n      animation-timing-function: step-start;\\r\\n    }\\r\\n\\r\\n    52.5% {\\r\\n      background: #6d7;\\r\\n      transform: rotateZ(0deg);\\r\\n    }\\r\\n\\r\\n    75% {\\r\\n      background: #6d7;\\r\\n      transform: rotateZ(0deg);\\r\\n      animation-timing-function: step-start;\\r\\n    }\\r\\n\\r\\n    77.5% {\\r\\n      background: #f86;\\r\\n      transform: rotateZ(270deg);\\r\\n    }\\r\\n\\r\\n    100% {\\r\\n      background: #f86;\\r\\n      transform: rotateZ(270deg);\\r\\n      animation-timing-function: step-start;\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AASE,eAAE,CAAC,AACD,QAAQ,CAAE,MAAM,CAChB,QAAQ,CAAE,QAAQ,CAClB,WAAW,CAAE,OAAO,CACpB,OAAO,CAAE,YAAY,CACrB,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,GAAG,CAClB,SAAS,CAAE,QAAQ,KAAK,CAAC,CACzB,gBAAgB,CAAE,GAAG,CAAC,GAAG,CACzB,SAAS,CAAE,qCAAsB,CAAC,IAAI,UAAU,CAAC,CAAC,QAAQ,CAAC,WAAW,AACxE,CAAC,AAED,eAAC,MAAM,AAAC,CAAC,AACP,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAC1B,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,GAAG,CACV,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,IAAI,CAAC,GAAG,CAC1B,SAAS,CAAE,8BAAe,CAAC,IAAI,UAAU,CAAC,CAAC,QAAQ,CAAC,MAAM,AAC5D,CAAC,AAED,eAAC,OAAO,AAAC,CAAC,AACR,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAC1B,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,GAAG,CACV,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,IAAI,CAAC,GAAG,CAC1B,SAAS,CAAE,iCAAkB,CAAC,IAAI,UAAU,CAAC,CAAC,QAAQ,CAAC,MAAM,AAC/D,CAAC,AAED,WAAW,8BAAgB,CAAC,AAC1B,IAAI,AAAC,CAAC,AACJ,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,QAAQ,IAAI,CAAC,CACxB,yBAAyB,CAAE,OAAO,AACpC,CAAC,AAED,MAAM,AAAC,CAAC,AACN,UAAU,CAAE,OAAO,CACnB,SAAS,CAAE,QAAQ,KAAK,CAAC,CACzB,yBAAyB,CAAE,UAAU,AACvC,CAAC,AAED,MAAM,AAAC,CAAC,AACN,UAAU,CAAE,OAAO,CACnB,SAAS,CAAE,QAAQ,KAAK,CAAC,CACzB,yBAAyB,CAAE,QAAQ,AACrC,CAAC,AAED,GAAG,AAAC,CAAC,AACH,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,QAAQ,MAAM,CAAC,AAC5B,CAAC,AAED,KAAK,AAAC,CAAC,AACL,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,QAAQ,MAAM,CAAC,CAC1B,yBAAyB,CAAE,OAAO,AACpC,CAAC,AAED,MAAM,AAAC,CAAC,AACN,UAAU,CAAE,OAAO,CACnB,SAAS,CAAE,QAAQ,KAAK,CAAC,CACzB,yBAAyB,CAAE,UAAU,AACvC,CAAC,AAED,MAAM,AAAC,CAAC,AACN,UAAU,CAAE,OAAO,CACnB,SAAS,CAAE,QAAQ,KAAK,CAAC,CACzB,yBAAyB,CAAE,QAAQ,AACrC,CAAC,AAED,GAAG,AAAC,CAAC,AACH,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,QAAQ,IAAI,CAAC,AAC1B,CAAC,AAED,KAAK,AAAC,CAAC,AACL,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,QAAQ,IAAI,CAAC,CACxB,yBAAyB,CAAE,OAAO,AACpC,CAAC,AAED,MAAM,AAAC,CAAC,AACN,UAAU,CAAE,OAAO,CACnB,SAAS,CAAE,QAAQ,KAAK,CAAC,CACzB,yBAAyB,CAAE,UAAU,AACvC,CAAC,AAED,MAAM,AAAC,CAAC,AACN,UAAU,CAAE,OAAO,CACnB,SAAS,CAAE,QAAQ,KAAK,CAAC,CACzB,yBAAyB,CAAE,QAAQ,AACrC,CAAC,AAED,GAAG,AAAC,CAAC,AACH,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,QAAQ,MAAM,CAAC,AAC5B,CAAC,AAED,KAAK,AAAC,CAAC,AACL,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,QAAQ,MAAM,CAAC,CAC1B,yBAAyB,CAAE,OAAO,AACpC,CAAC,AAED,MAAM,AAAC,CAAC,AACN,UAAU,CAAE,OAAO,CACnB,SAAS,CAAE,QAAQ,KAAK,CAAC,CACzB,yBAAyB,CAAE,UAAU,AACvC,CAAC,AAED,MAAM,AAAC,CAAC,AACN,UAAU,CAAE,OAAO,CACnB,SAAS,CAAE,QAAQ,KAAK,CAAC,CACzB,yBAAyB,CAAE,OAAO,AACpC,CAAC,AAED,IAAI,AAAC,CAAC,AACJ,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,QAAQ,IAAI,CAAC,CACxB,yBAAyB,CAAE,UAAU,AACvC,CAAC,AACH,CAAC,AAED,WAAW,iCAAmB,CAAC,AAC7B,EAAE,AAAC,CAAC,AACF,UAAU,CAAE,IAAI,CAChB,yBAAyB,CAAE,UAAU,AACvC,CAAC,AAED,GAAG,AAAC,CAAC,AACH,UAAU,CAAE,IAAI,CAChB,yBAAyB,CAAE,UAAU,AACvC,CAAC,AAED,GAAG,AAAC,CAAC,AACH,UAAU,CAAE,IAAI,CAChB,yBAAyB,CAAE,UAAU,AACvC,CAAC,AAED,IAAI,AAAC,CAAC,AACJ,UAAU,CAAE,IAAI,CAChB,yBAAyB,CAAE,UAAU,AACvC,CAAC,AACH,CAAC,AAED,WAAW,qCAAuB,CAAC,AACjC,EAAE,AAAC,CAAC,AACF,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,QAAQ,MAAM,CAAC,AAC5B,CAAC,AAED,GAAG,AAAC,CAAC,AACH,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,QAAQ,MAAM,CAAC,CAC1B,yBAAyB,CAAE,UAAU,AACvC,CAAC,AAED,KAAK,AAAC,CAAC,AACL,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,QAAQ,KAAK,CAAC,AAC3B,CAAC,AAED,GAAG,AAAC,CAAC,AACH,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,QAAQ,KAAK,CAAC,CACzB,yBAAyB,CAAE,UAAU,AACvC,CAAC,AAED,KAAK,AAAC,CAAC,AACL,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,QAAQ,IAAI,CAAC,AAC1B,CAAC,AAED,GAAG,AAAC,CAAC,AACH,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,QAAQ,IAAI,CAAC,CACxB,yBAAyB,CAAE,UAAU,AACvC,CAAC,AAED,KAAK,AAAC,CAAC,AACL,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,QAAQ,MAAM,CAAC,AAC5B,CAAC,AAED,IAAI,AAAC,CAAC,AACJ,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,QAAQ,MAAM,CAAC,CAC1B,yBAAyB,CAAE,UAAU,AACvC,CAAC,AACH,CAAC"}'
};
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let styles;
  let {size = "40px"} = $$props;
  let {duration: duration2 = "3s"} = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.duration === void 0 && $$bindings.duration && duration2 !== void 0)
    $$bindings.duration(duration2);
  $$result.css.add(css$t);
  styles = [`width: ${size}`, `height: ${size}`].join(";");
  return `<div class="${"spinner spinner--google svelte-1exboqr"}" style="${"--duration: " + escape2(duration2) + "; " + escape2(styles)}"></div>`;
});
var css$s = {
  code: ".wrapper.svelte-9juun5{width:var(--size);height:var(--size)}.circle.svelte-9juun5{width:var(--size);height:var(--size);background-color:var(--color);animation-duration:var(--duration);border-radius:100%;display:inline-block;animation:svelte-9juun5-scaleOut var(--duration) ease-in-out infinite}@keyframes svelte-9juun5-scaleOut{0%{transform:scale(0)}100%{transform:scale(1);opacity:0}}",
  map: '{"version":3,"file":"ScaleOut.svelte","sources":["ScaleOut.svelte"],"sourcesContent":["<script>;\\r\\nexport let color = \\"#FF3E00\\";\\r\\nexport let unit = \\"px\\";\\r\\nexport let duration = \\"1s\\";\\r\\nexport let size = \\"60\\";\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  .wrapper {\\r\\n    width: var(--size);\\r\\n    height: var(--size);\\r\\n  }\\r\\n  .circle {\\r\\n    width: var(--size);\\r\\n    height: var(--size);\\r\\n    background-color: var(--color);\\r\\n    animation-duration: var(--duration);\\r\\n    border-radius: 100%;\\r\\n    display: inline-block;\\r\\n    animation: scaleOut var(--duration) ease-in-out infinite;\\r\\n  }\\r\\n  @keyframes scaleOut {\\r\\n    0% {\\r\\n      transform: scale(0);\\r\\n    }\\r\\n    100% {\\r\\n      transform: scale(1);\\r\\n      opacity: 0;\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div\\r\\n  class=\\"wrapper\\"\\r\\n  style=\\"--size: {size}{unit}; --color: {color}; --duration: {duration}; --duration: {duration};\\">\\r\\n  <div class=\\"circle\\" />\\r\\n</div>\\r\\n"],"names":[],"mappings":"AAQE,QAAQ,cAAC,CAAC,AACR,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,MAAM,CAAE,IAAI,MAAM,CAAC,AACrB,CAAC,AACD,OAAO,cAAC,CAAC,AACP,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,MAAM,CAAE,IAAI,MAAM,CAAC,CACnB,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,kBAAkB,CAAE,IAAI,UAAU,CAAC,CACnC,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,YAAY,CACrB,SAAS,CAAE,sBAAQ,CAAC,IAAI,UAAU,CAAC,CAAC,WAAW,CAAC,QAAQ,AAC1D,CAAC,AACD,WAAW,sBAAS,CAAC,AACnB,EAAE,AAAC,CAAC,AACF,SAAS,CAAE,MAAM,CAAC,CAAC,AACrB,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,MAAM,CAAC,CAAC,CACnB,OAAO,CAAE,CAAC,AACZ,CAAC,AACH,CAAC"}'
};
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {color = "#FF3E00"} = $$props;
  let {unit = "px"} = $$props;
  let {duration: duration2 = "1s"} = $$props;
  let {size = "60"} = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration2 !== void 0)
    $$bindings.duration(duration2);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$s);
  return `<div class="${"wrapper svelte-9juun5"}" style="${"--size: " + escape2(size) + escape2(unit) + "; --color: " + escape2(color) + "; --duration: " + escape2(duration2) + "; --duration: " + escape2(duration2) + ";"}"><div class="${"circle svelte-9juun5"}"></div></div>`;
});
var css$r = {
  code: ".wrapper.svelte-1wp57lu{width:var(--size);height:var(--stroke);transform:scale(calc(var(--floatSize) / 75));display:flex;justify-content:center;align-items:center}.line.svelte-1wp57lu{width:var(--size);height:var(--stroke);background:var(--color);border-radius:var(--stroke);transform-origin:center center;animation:svelte-1wp57lu-spineLine var(--duration) ease infinite}@keyframes svelte-1wp57lu-spineLine{0%{transform:rotate(-20deg);height:5px;width:75px}5%{height:5px;width:75px}30%{transform:rotate(380deg);height:5px;width:75px}40%{transform:rotate(360deg);height:5px;width:75px}55%{transform:rotate(0deg);height:5px;width:5px}65%{transform:rotate(0deg);height:5px;width:85px}68%{transform:rotate(0deg);height:5px}75%{transform:rotate(0deg);height:5px;width:1px}78%{height:5px;width:5px}90%{height:5px;width:75px;transform:rotate(0deg)}99%,100%{height:5px;width:75px;transform:rotate(-20deg)}}",
  map: '{"version":3,"file":"SpinLine.svelte","sources":["SpinLine.svelte"],"sourcesContent":["<script>;\\r\\nexport let color = \\"#FF3E00\\";\\r\\nexport let unit = \\"px\\";\\r\\nexport let duration = \\"4s\\";\\r\\nexport let size = \\"60\\";\\r\\nexport let stroke = +size / 12 + unit;\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  .wrapper {\\r\\n    width: var(--size);\\r\\n    height: var(--stroke);\\r\\n    transform: scale(calc(var(--floatSize) / 75));\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n  }\\r\\n  .line {\\r\\n    width: var(--size);\\r\\n    height: var(--stroke);\\r\\n    background: var(--color);\\r\\n    border-radius: var(--stroke);\\r\\n    transform-origin: center center;\\r\\n    animation: spineLine var(--duration) ease infinite;\\r\\n  }\\r\\n  @keyframes spineLine {\\r\\n    0% {\\r\\n      transform: rotate(-20deg);\\r\\n      height: 5px;\\r\\n      width: 75px;\\r\\n    }\\r\\n    5% {\\r\\n      height: 5px;\\r\\n      width: 75px;\\r\\n    }\\r\\n    30% {\\r\\n      transform: rotate(380deg);\\r\\n      height: 5px;\\r\\n      width: 75px;\\r\\n    }\\r\\n    40% {\\r\\n      transform: rotate(360deg);\\r\\n      height: 5px;\\r\\n      width: 75px;\\r\\n    }\\r\\n    55% {\\r\\n      transform: rotate(0deg);\\r\\n      height: 5px;\\r\\n      width: 5px;\\r\\n    }\\r\\n    65% {\\r\\n      transform: rotate(0deg);\\r\\n      height: 5px;\\r\\n      width: 85px;\\r\\n    }\\r\\n    68% {\\r\\n      transform: rotate(0deg);\\r\\n      height: 5px;\\r\\n    }\\r\\n    75% {\\r\\n      transform: rotate(0deg);\\r\\n      height: 5px;\\r\\n      width: 1px;\\r\\n    }\\r\\n    78% {\\r\\n      height: 5px;\\r\\n      width: 5px;\\r\\n    }\\r\\n    90% {\\r\\n      height: 5px;\\r\\n      width: 75px;\\r\\n      transform: rotate(0deg);\\r\\n    }\\r\\n    99%,\\r\\n    100% {\\r\\n      height: 5px;\\r\\n      width: 75px;\\r\\n      transform: rotate(-20deg);\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div\\r\\n  class=\\"wrapper\\"\\r\\n  style=\\"--size: {size}{unit}; --color: {color}; --stroke: {stroke}; --floatSize: {size}; --duration: {duration}\\">\\r\\n  <div class=\\"line\\" />\\r\\n</div>\\r\\n"],"names":[],"mappings":"AASE,QAAQ,eAAC,CAAC,AACR,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,MAAM,CAAE,IAAI,QAAQ,CAAC,CACrB,SAAS,CAAE,MAAM,KAAK,IAAI,WAAW,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAC7C,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,AACrB,CAAC,AACD,KAAK,eAAC,CAAC,AACL,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,MAAM,CAAE,IAAI,QAAQ,CAAC,CACrB,UAAU,CAAE,IAAI,OAAO,CAAC,CACxB,aAAa,CAAE,IAAI,QAAQ,CAAC,CAC5B,gBAAgB,CAAE,MAAM,CAAC,MAAM,CAC/B,SAAS,CAAE,wBAAS,CAAC,IAAI,UAAU,CAAC,CAAC,IAAI,CAAC,QAAQ,AACpD,CAAC,AACD,WAAW,wBAAU,CAAC,AACpB,EAAE,AAAC,CAAC,AACF,SAAS,CAAE,OAAO,MAAM,CAAC,CACzB,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,IAAI,AACb,CAAC,AACD,EAAE,AAAC,CAAC,AACF,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,IAAI,AACb,CAAC,AACD,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,OAAO,MAAM,CAAC,CACzB,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,IAAI,AACb,CAAC,AACD,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,OAAO,MAAM,CAAC,CACzB,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,IAAI,AACb,CAAC,AACD,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,OAAO,IAAI,CAAC,CACvB,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,GAAG,AACZ,CAAC,AACD,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,OAAO,IAAI,CAAC,CACvB,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,IAAI,AACb,CAAC,AACD,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,OAAO,IAAI,CAAC,CACvB,MAAM,CAAE,GAAG,AACb,CAAC,AACD,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,OAAO,IAAI,CAAC,CACvB,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,GAAG,AACZ,CAAC,AACD,GAAG,AAAC,CAAC,AACH,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,GAAG,AACZ,CAAC,AACD,GAAG,AAAC,CAAC,AACH,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,OAAO,IAAI,CAAC,AACzB,CAAC,AACD,GAAG,CACH,IAAI,AAAC,CAAC,AACJ,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,OAAO,MAAM,CAAC,AAC3B,CAAC,AACH,CAAC"}'
};
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {color = "#FF3E00"} = $$props;
  let {unit = "px"} = $$props;
  let {duration: duration2 = "4s"} = $$props;
  let {size = "60"} = $$props;
  let {stroke = +size / 12 + unit} = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration2 !== void 0)
    $$bindings.duration(duration2);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.stroke === void 0 && $$bindings.stroke && stroke !== void 0)
    $$bindings.stroke(stroke);
  $$result.css.add(css$r);
  return `<div class="${"wrapper svelte-1wp57lu"}" style="${"--size: " + escape2(size) + escape2(unit) + "; --color: " + escape2(color) + "; --stroke: " + escape2(stroke) + "; --floatSize: " + escape2(size) + "; --duration: " + escape2(duration2)}"><div class="${"line svelte-1wp57lu"}"></div></div>`;
});
var css$q = {
  code: ".wrapper.svelte-1uxpkwt{height:var(--size);width:var(--size);display:inline-block;text-align:center;font-size:10px}.rect.svelte-1uxpkwt{height:100%;width:10%;display:inline-block;margin-right:4px;background-color:var(--color);animation:svelte-1uxpkwt-stretch var(--duration) ease-in-out infinite}@keyframes svelte-1uxpkwt-stretch{0%,40%,100%{transform:scaleY(0.4)}20%{transform:scaleY(1)}}",
  map: '{"version":3,"file":"Stretch.svelte","sources":["Stretch.svelte"],"sourcesContent":["<script>;\\r\\nimport { range, durationUnitRegex } from \\"./utils\\";\\r\\nexport let color = \\"#FF3E00\\";\\r\\nexport let unit = \\"px\\";\\r\\nexport let duration = \\"1.2s\\";\\r\\nexport let size = \\"60\\";\\r\\nlet durationUnit = duration.match(durationUnitRegex)[0];\\r\\nlet durationNum = duration.replace(durationUnitRegex, \\"\\");\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  .wrapper {\\r\\n    height: var(--size);\\r\\n    width: var(--size);\\r\\n    display: inline-block;\\r\\n    text-align: center;\\r\\n    font-size: 10px;\\r\\n  }\\r\\n  .rect {\\r\\n    height: 100%;\\r\\n    width: 10%;\\r\\n    display: inline-block;\\r\\n    margin-right: 4px;\\r\\n    background-color: var(--color);\\r\\n    animation: stretch var(--duration) ease-in-out infinite;\\r\\n  }\\r\\n  @keyframes stretch {\\r\\n    0%,\\r\\n    40%,\\r\\n    100% {\\r\\n      transform: scaleY(0.4);\\r\\n    }\\r\\n    20% {\\r\\n      transform: scaleY(1);\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div\\r\\n  class=\\"wrapper\\"\\r\\n  style=\\"--size: {size}{unit}; --color: {color}; --duration: {duration}\\">\\r\\n  {#each range(5, 1) as version}\\r\\n    <div\\r\\n      class=\\"rect\\"\\r\\n      style=\\"animation-delay: {(version - 1) * (+durationNum / 12)}{durationUnit}\\" />\\r\\n  {/each}\\r\\n</div>\\r\\n"],"names":[],"mappings":"AAWE,QAAQ,eAAC,CAAC,AACR,MAAM,CAAE,IAAI,MAAM,CAAC,CACnB,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,OAAO,CAAE,YAAY,CACrB,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,IAAI,AACjB,CAAC,AACD,KAAK,eAAC,CAAC,AACL,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,YAAY,CACrB,YAAY,CAAE,GAAG,CACjB,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,SAAS,CAAE,sBAAO,CAAC,IAAI,UAAU,CAAC,CAAC,WAAW,CAAC,QAAQ,AACzD,CAAC,AACD,WAAW,sBAAQ,CAAC,AAClB,EAAE,CACF,GAAG,CACH,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,OAAO,GAAG,CAAC,AACxB,CAAC,AACD,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,OAAO,CAAC,CAAC,AACtB,CAAC,AACH,CAAC"}'
};
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {color = "#FF3E00"} = $$props;
  let {unit = "px"} = $$props;
  let {duration: duration2 = "1.2s"} = $$props;
  let {size = "60"} = $$props;
  let durationUnit = duration2.match(durationUnitRegex)[0];
  let durationNum = duration2.replace(durationUnitRegex, "");
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration2 !== void 0)
    $$bindings.duration(duration2);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$q);
  return `<div class="${"wrapper svelte-1uxpkwt"}" style="${"--size: " + escape2(size) + escape2(unit) + "; --color: " + escape2(color) + "; --duration: " + escape2(duration2)}">${each(range(5, 1), (version) => `<div class="${"rect svelte-1uxpkwt"}" style="${"animation-delay: " + escape2((version - 1) * (+durationNum / 12)) + escape2(durationUnit)}"></div>`)}</div>`;
});
var css$p = {
  code: ".wrapper.svelte-vhcw6{height:calc(var(--size) / 15);width:calc(var(--size) * 2);background-color:var(--rgba);position:relative;overflow:hidden;background-clip:padding-box}.lines.svelte-vhcw6{height:calc(var(--size) / 15);background-color:var(--color)}.small-lines.svelte-vhcw6{position:absolute;overflow:hidden;background-clip:padding-box;display:block;border-radius:2px;will-change:left, right;animation-fill-mode:forwards}.small-lines.\\31 .svelte-vhcw6{animation:var(--duration) cubic-bezier(0.65, 0.815, 0.735, 0.395) 0s\r\n      infinite normal none running svelte-vhcw6-long}.small-lines.\\32 .svelte-vhcw6{animation:var(--duration) cubic-bezier(0.165, 0.84, 0.44, 1)\r\n      calc((var(--duration)+0.1) / 2) infinite normal none running svelte-vhcw6-short}@keyframes svelte-vhcw6-long{0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}}@keyframes svelte-vhcw6-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}",
  map: '{"version":3,"file":"BarLoader.svelte","sources":["BarLoader.svelte"],"sourcesContent":["<script>;\\r\\nimport { calculateRgba, range } from \\"./utils\\";\\r\\nexport let color = \\"#FF3E00\\";\\r\\nexport let unit = \\"px\\";\\r\\nexport let duration = \\"2.1s\\";\\r\\nexport let size = \\"60\\";\\r\\nlet rgba;\\r\\n$: rgba = calculateRgba(color, 0.2);\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  .wrapper {\\r\\n    height: calc(var(--size) / 15);\\r\\n    width: calc(var(--size) * 2);\\r\\n    background-color: var(--rgba);\\r\\n    position: relative;\\r\\n    overflow: hidden;\\r\\n    background-clip: padding-box;\\r\\n  }\\r\\n  .lines {\\r\\n    height: calc(var(--size) / 15);\\r\\n    background-color: var(--color);\\r\\n  }\\r\\n\\r\\n  .small-lines {\\r\\n    position: absolute;\\r\\n    overflow: hidden;\\r\\n    background-clip: padding-box;\\r\\n    display: block;\\r\\n    border-radius: 2px;\\r\\n    will-change: left, right;\\r\\n    animation-fill-mode: forwards;\\r\\n  }\\r\\n  .small-lines.\\\\31 {\\r\\n    animation: var(--duration) cubic-bezier(0.65, 0.815, 0.735, 0.395) 0s\\r\\n      infinite normal none running long;\\r\\n  }\\r\\n  .small-lines.\\\\32 {\\r\\n    animation: var(--duration) cubic-bezier(0.165, 0.84, 0.44, 1)\\r\\n      calc((var(--duration)+0.1) / 2) infinite normal none running short;\\r\\n  }\\r\\n\\r\\n  @keyframes long {\\r\\n    0% {\\r\\n      left: -35%;\\r\\n      right: 100%;\\r\\n    }\\r\\n    60% {\\r\\n      left: 100%;\\r\\n      right: -90%;\\r\\n    }\\r\\n    100% {\\r\\n      left: 100%;\\r\\n      right: -90%;\\r\\n    }\\r\\n  }\\r\\n  @keyframes short {\\r\\n    0% {\\r\\n      left: -200%;\\r\\n      right: 100%;\\r\\n    }\\r\\n    60% {\\r\\n      left: 107%;\\r\\n      right: -8%;\\r\\n    }\\r\\n    100% {\\r\\n      left: 107%;\\r\\n      right: -8%;\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div class=\\"wrapper\\" style=\\"--size: {size}{unit}; --rgba:{rgba}\\">\\r\\n  {#each range(2, 1) as version}\\r\\n    <div\\r\\n      class=\\"lines small-lines {version}\\"\\r\\n      style=\\"--color: {color}; --duration: {duration};\\" />\\r\\n  {/each}\\r\\n</div>\\r\\n"],"names":[],"mappings":"AAWE,QAAQ,aAAC,CAAC,AACR,MAAM,CAAE,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAC9B,KAAK,CAAE,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAC5B,gBAAgB,CAAE,IAAI,MAAM,CAAC,CAC7B,QAAQ,CAAE,QAAQ,CAClB,QAAQ,CAAE,MAAM,CAChB,eAAe,CAAE,WAAW,AAC9B,CAAC,AACD,MAAM,aAAC,CAAC,AACN,MAAM,CAAE,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAC9B,gBAAgB,CAAE,IAAI,OAAO,CAAC,AAChC,CAAC,AAED,YAAY,aAAC,CAAC,AACZ,QAAQ,CAAE,QAAQ,CAClB,QAAQ,CAAE,MAAM,CAChB,eAAe,CAAE,WAAW,CAC5B,OAAO,CAAE,KAAK,CACd,aAAa,CAAE,GAAG,CAClB,WAAW,CAAE,IAAI,CAAC,CAAC,KAAK,CACxB,mBAAmB,CAAE,QAAQ,AAC/B,CAAC,AACD,YAAY,kBAAK,CAAC,AAChB,SAAS,CAAE,IAAI,UAAU,CAAC,CAAC,aAAa,IAAI,CAAC,CAAC,KAAK,CAAC,CAAC,KAAK,CAAC,CAAC,KAAK,CAAC,CAAC,EAAE;MACnE,QAAQ,CAAC,MAAM,CAAC,IAAI,CAAC,OAAO,CAAC,iBACjC,CAAC,AACD,YAAY,kBAAK,CAAC,AAChB,SAAS,CAAE,IAAI,UAAU,CAAC,CAAC,aAAa,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC;MAC3D,KAAK,CAAC,IAAI,UAAU,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,QAAQ,CAAC,MAAM,CAAC,IAAI,CAAC,OAAO,CAAC,kBACjE,CAAC,AAED,WAAW,iBAAK,CAAC,AACf,EAAE,AAAC,CAAC,AACF,IAAI,CAAE,IAAI,CACV,KAAK,CAAE,IAAI,AACb,CAAC,AACD,GAAG,AAAC,CAAC,AACH,IAAI,CAAE,IAAI,CACV,KAAK,CAAE,IAAI,AACb,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,IAAI,CAAE,IAAI,CACV,KAAK,CAAE,IAAI,AACb,CAAC,AACH,CAAC,AACD,WAAW,kBAAM,CAAC,AAChB,EAAE,AAAC,CAAC,AACF,IAAI,CAAE,KAAK,CACX,KAAK,CAAE,IAAI,AACb,CAAC,AACD,GAAG,AAAC,CAAC,AACH,IAAI,CAAE,IAAI,CACV,KAAK,CAAE,GAAG,AACZ,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,IAAI,CAAE,IAAI,CACV,KAAK,CAAE,GAAG,AACZ,CAAC,AACH,CAAC"}'
};
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {color = "#FF3E00"} = $$props;
  let {unit = "px"} = $$props;
  let {duration: duration2 = "2.1s"} = $$props;
  let {size = "60"} = $$props;
  let rgba;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration2 !== void 0)
    $$bindings.duration(duration2);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$p);
  rgba = calculateRgba(color, 0.2);
  return `<div class="${"wrapper svelte-vhcw6"}" style="${"--size: " + escape2(size) + escape2(unit) + "; --rgba:" + escape2(rgba)}">${each(range(2, 1), (version) => `<div class="${"lines small-lines " + escape2(version) + " svelte-vhcw6"}" style="${"--color: " + escape2(color) + "; --duration: " + escape2(duration2) + ";"}"></div>`)}</div>`;
});
var css$o = {
  code: ".wrapper.svelte-1cy66mt{width:var(--size);height:var(--size)}.circle.svelte-1cy66mt{border-radius:100%;animation-fill-mode:both;position:absolute;opacity:0;width:var(--size);height:var(--size);background-color:var(--color);animation:svelte-1cy66mt-bounce var(--duration) linear infinite}@keyframes svelte-1cy66mt-bounce{0%{opacity:0;transform:scale(0)}5%{opacity:1}100%{opacity:0;transform:scale(1)}}",
  map: '{"version":3,"file":"Jumper.svelte","sources":["Jumper.svelte"],"sourcesContent":["<script>;\\r\\nimport { range, durationUnitRegex } from \\"./utils\\";\\r\\nexport let color = \\"#FF3E00\\";\\r\\nexport let unit = \\"px\\";\\r\\nexport let duration = \\"1s\\";\\r\\nexport let size = \\"60\\";\\r\\nlet durationUnit = duration.match(durationUnitRegex)[0];\\r\\nlet durationNum = duration.replace(durationUnitRegex, \\"\\");\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  .wrapper {\\r\\n    width: var(--size);\\r\\n    height: var(--size);\\r\\n  }\\r\\n  .circle {\\r\\n    border-radius: 100%;\\r\\n    animation-fill-mode: both;\\r\\n    position: absolute;\\r\\n    opacity: 0;\\r\\n    width: var(--size);\\r\\n    height: var(--size);\\r\\n    background-color: var(--color);\\r\\n    animation: bounce var(--duration) linear infinite;\\r\\n  }\\r\\n  @keyframes bounce {\\r\\n    0% {\\r\\n      opacity: 0;\\r\\n      transform: scale(0);\\r\\n    }\\r\\n    5% {\\r\\n      opacity: 1;\\r\\n    }\\r\\n    100% {\\r\\n      opacity: 0;\\r\\n      transform: scale(1);\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div\\r\\n  class=\\"wrapper\\"\\r\\n  style=\\"--size: {size}{unit}; --color: {color}; --duration: {duration};\\">\\r\\n  {#each range(3, 1) as version}\\r\\n    <div\\r\\n      class=\\"circle\\"\\r\\n      style=\\"animation-delay: {(durationNum / 3) * (version - 1) + durationUnit};\\" />\\r\\n  {/each}\\r\\n</div>\\r\\n"],"names":[],"mappings":"AAWE,QAAQ,eAAC,CAAC,AACR,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,MAAM,CAAE,IAAI,MAAM,CAAC,AACrB,CAAC,AACD,OAAO,eAAC,CAAC,AACP,aAAa,CAAE,IAAI,CACnB,mBAAmB,CAAE,IAAI,CACzB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,CACV,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,MAAM,CAAE,IAAI,MAAM,CAAC,CACnB,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,SAAS,CAAE,qBAAM,CAAC,IAAI,UAAU,CAAC,CAAC,MAAM,CAAC,QAAQ,AACnD,CAAC,AACD,WAAW,qBAAO,CAAC,AACjB,EAAE,AAAC,CAAC,AACF,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,MAAM,CAAC,CAAC,AACrB,CAAC,AACD,EAAE,AAAC,CAAC,AACF,OAAO,CAAE,CAAC,AACZ,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,MAAM,CAAC,CAAC,AACrB,CAAC,AACH,CAAC"}'
};
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {color = "#FF3E00"} = $$props;
  let {unit = "px"} = $$props;
  let {duration: duration2 = "1s"} = $$props;
  let {size = "60"} = $$props;
  let durationUnit = duration2.match(durationUnitRegex)[0];
  let durationNum = duration2.replace(durationUnitRegex, "");
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration2 !== void 0)
    $$bindings.duration(duration2);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$o);
  return `<div class="${"wrapper svelte-1cy66mt"}" style="${"--size: " + escape2(size) + escape2(unit) + "; --color: " + escape2(color) + "; --duration: " + escape2(duration2) + ";"}">${each(range(3, 1), (version) => `<div class="${"circle svelte-1cy66mt"}" style="${"animation-delay: " + escape2(durationNum / 3 * (version - 1) + durationUnit) + ";"}"></div>`)}</div>`;
});
var css$n = {
  code: ".wrapper.svelte-17ey38u{position:relative;width:var(--size);height:var(--size)}.border.svelte-17ey38u{border-color:var(--color);position:absolute;top:0px;left:0px;width:var(--size);height:var(--size);opacity:0.4;perspective:800px;border-width:6px;border-style:solid;border-image:initial;border-radius:100%}.border.\\31 .svelte-17ey38u{animation:var(--duration) linear 0s infinite normal none running svelte-17ey38u-ringOne}.border.\\32 .svelte-17ey38u{animation:var(--duration) linear 0s infinite normal none running svelte-17ey38u-ringTwo}@keyframes svelte-17ey38u-ringOne{0%{transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg)}100%{transform:rotateX(360deg) rotateY(180deg) rotateZ(360deg)}}@keyframes svelte-17ey38u-ringTwo{0%{transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg)}100%{transform:rotateX(180deg) rotateY(360deg) rotateZ(360deg)}}",
  map: '{"version":3,"file":"RingLoader.svelte","sources":["RingLoader.svelte"],"sourcesContent":["<script>;\\r\\nimport { range } from \\"./utils\\";\\r\\nexport let color = \\"#FF3E00\\";\\r\\nexport let unit = \\"px\\";\\r\\nexport let duration = \\"2s\\";\\r\\nexport let size = \\"60\\";\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  .wrapper {\\r\\n    position: relative;\\r\\n    width: var(--size);\\r\\n    height: var(--size);\\r\\n  }\\r\\n  .border {\\r\\n    border-color: var(--color);\\r\\n    position: absolute;\\r\\n    top: 0px;\\r\\n    left: 0px;\\r\\n    width: var(--size);\\r\\n    height: var(--size);\\r\\n    opacity: 0.4;\\r\\n    perspective: 800px;\\r\\n    border-width: 6px;\\r\\n    border-style: solid;\\r\\n    border-image: initial;\\r\\n    border-radius: 100%;\\r\\n  }\\r\\n  .border.\\\\31 {\\r\\n    animation: var(--duration) linear 0s infinite normal none running ringOne;\\r\\n  }\\r\\n  .border.\\\\32 {\\r\\n    animation: var(--duration) linear 0s infinite normal none running ringTwo;\\r\\n  }\\r\\n\\r\\n  @keyframes ringOne {\\r\\n    0% {\\r\\n      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\\r\\n    }\\r\\n    100% {\\r\\n      transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);\\r\\n    }\\r\\n  }\\r\\n  @keyframes ringTwo {\\r\\n    0% {\\r\\n      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\\r\\n    }\\r\\n    100% {\\r\\n      transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div\\r\\n  class=\\"wrapper\\"\\r\\n  style=\\"--size: {size}{unit}; --color: {color}; --duration: {duration};\\">\\r\\n  {#each range(2, 1) as version}\\r\\n    <div class=\\"border {version}\\" />\\r\\n  {/each}\\r\\n</div>\\r\\n"],"names":[],"mappings":"AASE,QAAQ,eAAC,CAAC,AACR,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,MAAM,CAAE,IAAI,MAAM,CAAC,AACrB,CAAC,AACD,OAAO,eAAC,CAAC,AACP,YAAY,CAAE,IAAI,OAAO,CAAC,CAC1B,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,MAAM,CAAE,IAAI,MAAM,CAAC,CACnB,OAAO,CAAE,GAAG,CACZ,WAAW,CAAE,KAAK,CAClB,YAAY,CAAE,GAAG,CACjB,YAAY,CAAE,KAAK,CACnB,YAAY,CAAE,OAAO,CACrB,aAAa,CAAE,IAAI,AACrB,CAAC,AACD,OAAO,oBAAK,CAAC,AACX,SAAS,CAAE,IAAI,UAAU,CAAC,CAAC,MAAM,CAAC,EAAE,CAAC,QAAQ,CAAC,MAAM,CAAC,IAAI,CAAC,OAAO,CAAC,sBACpE,CAAC,AACD,OAAO,oBAAK,CAAC,AACX,SAAS,CAAE,IAAI,UAAU,CAAC,CAAC,MAAM,CAAC,EAAE,CAAC,QAAQ,CAAC,MAAM,CAAC,IAAI,CAAC,OAAO,CAAC,sBACpE,CAAC,AAED,WAAW,sBAAQ,CAAC,AAClB,EAAE,AAAC,CAAC,AACF,SAAS,CAAE,QAAQ,IAAI,CAAC,CAAC,QAAQ,IAAI,CAAC,CAAC,QAAQ,IAAI,CAAC,AACtD,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,QAAQ,MAAM,CAAC,CAAC,QAAQ,MAAM,CAAC,CAAC,QAAQ,MAAM,CAAC,AAC5D,CAAC,AACH,CAAC,AACD,WAAW,sBAAQ,CAAC,AAClB,EAAE,AAAC,CAAC,AACF,SAAS,CAAE,QAAQ,IAAI,CAAC,CAAC,QAAQ,IAAI,CAAC,CAAC,QAAQ,IAAI,CAAC,AACtD,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,QAAQ,MAAM,CAAC,CAAC,QAAQ,MAAM,CAAC,CAAC,QAAQ,MAAM,CAAC,AAC5D,CAAC,AACH,CAAC"}'
};
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {color = "#FF3E00"} = $$props;
  let {unit = "px"} = $$props;
  let {duration: duration2 = "2s"} = $$props;
  let {size = "60"} = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration2 !== void 0)
    $$bindings.duration(duration2);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$n);
  return `<div class="${"wrapper svelte-17ey38u"}" style="${"--size: " + escape2(size) + escape2(unit) + "; --color: " + escape2(color) + "; --duration: " + escape2(duration2) + ";"}">${each(range(2, 1), (version) => `<div class="${"border " + escape2(version) + " svelte-17ey38u"}"></div>`)}</div>`;
});
var css$m = {
  code: ".wrapper.svelte-14w6xk7{height:var(--size);width:var(--size);display:flex;align-items:center;justify-content:center}.dot.svelte-14w6xk7{height:var(--dotSize);width:var(--dotSize);background-color:var(--color);margin:2px;display:inline-block;border-radius:100%;animation:svelte-14w6xk7-sync var(--duration) ease-in-out infinite alternate both running}@-webkit-keyframes svelte-14w6xk7-sync{33%{-webkit-transform:translateY(10px);transform:translateY(10px)}66%{-webkit-transform:translateY(-10px);transform:translateY(-10px)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes svelte-14w6xk7-sync{33%{-webkit-transform:translateY(10px);transform:translateY(10px)}66%{-webkit-transform:translateY(-10px);transform:translateY(-10px)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}",
  map: '{"version":3,"file":"SyncLoader.svelte","sources":["SyncLoader.svelte"],"sourcesContent":["<script>;\\r\\nimport { range, durationUnitRegex } from \\"./utils\\";\\r\\nexport let color = \\"#FF3E00\\";\\r\\nexport let unit = \\"px\\";\\r\\nexport let duration = \\"0.6s\\";\\r\\nexport let size = \\"60\\";\\r\\nlet durationUnit = duration.match(durationUnitRegex)[0];\\r\\nlet durationNum = duration.replace(durationUnitRegex, \\"\\");\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  .wrapper {\\r\\n    height: var(--size);\\r\\n    width: var(--size);\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n  }\\r\\n\\r\\n  .dot {\\r\\n    height: var(--dotSize);\\r\\n    width: var(--dotSize);\\r\\n    background-color: var(--color);\\r\\n    margin: 2px;\\r\\n    display: inline-block;\\r\\n    border-radius: 100%;\\r\\n    animation: sync var(--duration) ease-in-out infinite alternate both running;\\r\\n  }\\r\\n\\r\\n  @-webkit-keyframes sync {\\r\\n    33% {\\r\\n      -webkit-transform: translateY(10px);\\r\\n      transform: translateY(10px);\\r\\n    }\\r\\n    66% {\\r\\n      -webkit-transform: translateY(-10px);\\r\\n      transform: translateY(-10px);\\r\\n    }\\r\\n    100% {\\r\\n      -webkit-transform: translateY(0);\\r\\n      transform: translateY(0);\\r\\n    }\\r\\n  }\\r\\n  @keyframes sync {\\r\\n    33% {\\r\\n      -webkit-transform: translateY(10px);\\r\\n      transform: translateY(10px);\\r\\n    }\\r\\n    66% {\\r\\n      -webkit-transform: translateY(-10px);\\r\\n      transform: translateY(-10px);\\r\\n    }\\r\\n    100% {\\r\\n      -webkit-transform: translateY(0);\\r\\n      transform: translateY(0);\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div class=\\"wrapper\\" style=\\"--size:{size}{unit}; --duration: {duration};\\">\\r\\n  {#each range(3, 1) as i}\\r\\n    <div\\r\\n      class=\\"dot\\"\\r\\n      style=\\"--dotSize:{+size * 0.25}{unit}; --color:{color}; animation-delay:  {i * (+durationNum / 10)}{durationUnit};\\" />\\r\\n  {/each}\\r\\n</div>\\r\\n"],"names":[],"mappings":"AAWE,QAAQ,eAAC,CAAC,AACR,MAAM,CAAE,IAAI,MAAM,CAAC,CACnB,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,AACzB,CAAC,AAED,IAAI,eAAC,CAAC,AACJ,MAAM,CAAE,IAAI,SAAS,CAAC,CACtB,KAAK,CAAE,IAAI,SAAS,CAAC,CACrB,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,MAAM,CAAE,GAAG,CACX,OAAO,CAAE,YAAY,CACrB,aAAa,CAAE,IAAI,CACnB,SAAS,CAAE,mBAAI,CAAC,IAAI,UAAU,CAAC,CAAC,WAAW,CAAC,QAAQ,CAAC,SAAS,CAAC,IAAI,CAAC,OAAO,AAC7E,CAAC,AAED,mBAAmB,mBAAK,CAAC,AACvB,GAAG,AAAC,CAAC,AACH,iBAAiB,CAAE,WAAW,IAAI,CAAC,CACnC,SAAS,CAAE,WAAW,IAAI,CAAC,AAC7B,CAAC,AACD,GAAG,AAAC,CAAC,AACH,iBAAiB,CAAE,WAAW,KAAK,CAAC,CACpC,SAAS,CAAE,WAAW,KAAK,CAAC,AAC9B,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,iBAAiB,CAAE,WAAW,CAAC,CAAC,CAChC,SAAS,CAAE,WAAW,CAAC,CAAC,AAC1B,CAAC,AACH,CAAC,AACD,WAAW,mBAAK,CAAC,AACf,GAAG,AAAC,CAAC,AACH,iBAAiB,CAAE,WAAW,IAAI,CAAC,CACnC,SAAS,CAAE,WAAW,IAAI,CAAC,AAC7B,CAAC,AACD,GAAG,AAAC,CAAC,AACH,iBAAiB,CAAE,WAAW,KAAK,CAAC,CACpC,SAAS,CAAE,WAAW,KAAK,CAAC,AAC9B,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,iBAAiB,CAAE,WAAW,CAAC,CAAC,CAChC,SAAS,CAAE,WAAW,CAAC,CAAC,AAC1B,CAAC,AACH,CAAC"}'
};
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {color = "#FF3E00"} = $$props;
  let {unit = "px"} = $$props;
  let {duration: duration2 = "0.6s"} = $$props;
  let {size = "60"} = $$props;
  let durationUnit = duration2.match(durationUnitRegex)[0];
  let durationNum = duration2.replace(durationUnitRegex, "");
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration2 !== void 0)
    $$bindings.duration(duration2);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$m);
  return `<div class="${"wrapper svelte-14w6xk7"}" style="${"--size:" + escape2(size) + escape2(unit) + "; --duration: " + escape2(duration2) + ";"}">${each(range(3, 1), (i) => `<div class="${"dot svelte-14w6xk7"}" style="${"--dotSize:" + escape2(+size * 0.25) + escape2(unit) + "; --color:" + escape2(color) + "; animation-delay:  " + escape2(i * (+durationNum / 10)) + escape2(durationUnit) + ";"}"></div>`)}</div>`;
});
var css$l = {
  code: ".wrapper.svelte-1fuumrt{width:var(--size);height:calc(var(--size) / 2);overflow:hidden}.rainbow.svelte-1fuumrt{width:var(--size);height:var(--size);border-left-color:transparent;border-bottom-color:transparent;border-top-color:var(--color);border-right-color:var(--color);box-sizing:border-box;transform:rotate(-200deg);border-radius:50%;border-style:solid;animation:var(--duration) ease-in-out 0s infinite normal none running\r\n      svelte-1fuumrt-rotate}@keyframes svelte-1fuumrt-rotate{0%{border-width:10px}25%{border-width:3px}50%{transform:rotate(115deg);border-width:10px}75%{border-width:3px}100%{border-width:10px}}",
  map: '{"version":3,"file":"Rainbow.svelte","sources":["Rainbow.svelte"],"sourcesContent":["<script>;\\r\\nexport let color = \\"#FF3E00\\";\\r\\nexport let unit = \\"px\\";\\r\\nexport let duration = \\"3s\\";\\r\\nexport let size = \\"60\\";\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  .wrapper {\\r\\n    width: var(--size);\\r\\n    height: calc(var(--size) / 2);\\r\\n    overflow: hidden;\\r\\n  }\\r\\n  .rainbow {\\r\\n    width: var(--size);\\r\\n    height: var(--size);\\r\\n    border-left-color: transparent;\\r\\n    border-bottom-color: transparent;\\r\\n    border-top-color: var(--color);\\r\\n    border-right-color: var(--color);\\r\\n    box-sizing: border-box;\\r\\n    transform: rotate(-200deg);\\r\\n    border-radius: 50%;\\r\\n    border-style: solid;\\r\\n    animation: var(--duration) ease-in-out 0s infinite normal none running\\r\\n      rotate;\\r\\n  }\\r\\n  @keyframes rotate {\\r\\n    0% {\\r\\n      border-width: 10px;\\r\\n    }\\r\\n    25% {\\r\\n      border-width: 3px;\\r\\n    }\\r\\n    50% {\\r\\n      transform: rotate(115deg);\\r\\n      border-width: 10px;\\r\\n    }\\r\\n    75% {\\r\\n      border-width: 3px;\\r\\n    }\\r\\n    100% {\\r\\n      border-width: 10px;\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div\\r\\n  class=\\"wrapper\\"\\r\\n  style=\\"--size: {size}{unit}; --color: {color}; --duration: {duration};\\">\\r\\n  <div class=\\"rainbow\\" />\\r\\n</div>\\r\\n"],"names":[],"mappings":"AAQE,QAAQ,eAAC,CAAC,AACR,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,MAAM,CAAE,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAC7B,QAAQ,CAAE,MAAM,AAClB,CAAC,AACD,QAAQ,eAAC,CAAC,AACR,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,MAAM,CAAE,IAAI,MAAM,CAAC,CACnB,iBAAiB,CAAE,WAAW,CAC9B,mBAAmB,CAAE,WAAW,CAChC,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,kBAAkB,CAAE,IAAI,OAAO,CAAC,CAChC,UAAU,CAAE,UAAU,CACtB,SAAS,CAAE,OAAO,OAAO,CAAC,CAC1B,aAAa,CAAE,GAAG,CAClB,YAAY,CAAE,KAAK,CACnB,SAAS,CAAE,IAAI,UAAU,CAAC,CAAC,WAAW,CAAC,EAAE,CAAC,QAAQ,CAAC,MAAM,CAAC,IAAI,CAAC,OAAO;MACpE,qBACJ,CAAC,AACD,WAAW,qBAAO,CAAC,AACjB,EAAE,AAAC,CAAC,AACF,YAAY,CAAE,IAAI,AACpB,CAAC,AACD,GAAG,AAAC,CAAC,AACH,YAAY,CAAE,GAAG,AACnB,CAAC,AACD,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,OAAO,MAAM,CAAC,CACzB,YAAY,CAAE,IAAI,AACpB,CAAC,AACD,GAAG,AAAC,CAAC,AACH,YAAY,CAAE,GAAG,AACnB,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,YAAY,CAAE,IAAI,AACpB,CAAC,AACH,CAAC"}'
};
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {color = "#FF3E00"} = $$props;
  let {unit = "px"} = $$props;
  let {duration: duration2 = "3s"} = $$props;
  let {size = "60"} = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration2 !== void 0)
    $$bindings.duration(duration2);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$l);
  return `<div class="${"wrapper svelte-1fuumrt"}" style="${"--size: " + escape2(size) + escape2(unit) + "; --color: " + escape2(color) + "; --duration: " + escape2(duration2) + ";"}"><div class="${"rainbow svelte-1fuumrt"}"></div></div>`;
});
var css$k = {
  code: ".wrapper.svelte-8cmcz4{position:relative;display:flex;justify-content:center;align-items:center;width:calc(var(--size) * 2.5);height:var(--size);overflow:hidden}.bar.svelte-8cmcz4{position:absolute;top:calc(var(--size) / 10);width:calc(var(--size) / 5);height:calc(var(--size) / 10);margin-top:calc(var(--size) - var(--size) / 10);transform:skewY(0deg);background-color:var(--color);animation:svelte-8cmcz4-motion var(--duration) ease-in-out infinite}@keyframes svelte-8cmcz4-motion{25%{transform:skewY(25deg)}50%{height:100%;margin-top:0}75%{transform:skewY(-25deg)}}",
  map: '{"version":3,"file":"Wave.svelte","sources":["Wave.svelte"],"sourcesContent":["<script>;\\r\\nimport { range, durationUnitRegex } from \\"./utils\\";\\r\\nexport let color = \\"#FF3E00\\";\\r\\nexport let unit = \\"px\\";\\r\\nexport let duration = \\"1.25s\\";\\r\\nexport let size = \\"60\\";\\r\\nlet durationUnit = duration.match(durationUnitRegex)[0];\\r\\nlet durationNum = duration.replace(durationUnitRegex, \\"\\");\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  .wrapper {\\r\\n    position: relative;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    width: calc(var(--size) * 2.5);\\r\\n    height: var(--size);\\r\\n    overflow: hidden;\\r\\n  }\\r\\n  .bar {\\r\\n    position: absolute;\\r\\n    top: calc(var(--size) / 10);\\r\\n    width: calc(var(--size) / 5);\\r\\n    height: calc(var(--size) / 10);\\r\\n    margin-top: calc(var(--size) - var(--size) / 10);\\r\\n    transform: skewY(0deg);\\r\\n    background-color: var(--color);\\r\\n    animation: motion var(--duration) ease-in-out infinite;\\r\\n  }\\r\\n  @keyframes motion {\\r\\n    25% {\\r\\n      transform: skewY(25deg);\\r\\n    }\\r\\n    50% {\\r\\n      height: 100%;\\r\\n      margin-top: 0;\\r\\n    }\\r\\n    75% {\\r\\n      transform: skewY(-25deg);\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div\\r\\n  class=\\"wrapper\\"\\r\\n  style=\\"--size: {size}{unit}; --color: {color}; --duration: {duration};\\">\\r\\n  {#each range(10, 0) as version}\\r\\n    <div\\r\\n      class=\\"bar\\"\\r\\n      style=\\"left: {version * (+size / 5 + (+size / 15 - +size / 100)) + unit}; animation-delay: {version * (+durationNum / 8.3)}{durationUnit};\\" />\\r\\n  {/each}\\r\\n</div>\\r\\n"],"names":[],"mappings":"AAWE,QAAQ,cAAC,CAAC,AACR,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC9B,MAAM,CAAE,IAAI,MAAM,CAAC,CACnB,QAAQ,CAAE,MAAM,AAClB,CAAC,AACD,IAAI,cAAC,CAAC,AACJ,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAC3B,KAAK,CAAE,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAC5B,MAAM,CAAE,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAC9B,UAAU,CAAE,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAChD,SAAS,CAAE,MAAM,IAAI,CAAC,CACtB,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,SAAS,CAAE,oBAAM,CAAC,IAAI,UAAU,CAAC,CAAC,WAAW,CAAC,QAAQ,AACxD,CAAC,AACD,WAAW,oBAAO,CAAC,AACjB,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,MAAM,KAAK,CAAC,AACzB,CAAC,AACD,GAAG,AAAC,CAAC,AACH,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,CAAC,AACf,CAAC,AACD,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,MAAM,MAAM,CAAC,AAC1B,CAAC,AACH,CAAC"}'
};
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {color = "#FF3E00"} = $$props;
  let {unit = "px"} = $$props;
  let {duration: duration2 = "1.25s"} = $$props;
  let {size = "60"} = $$props;
  let durationUnit = duration2.match(durationUnitRegex)[0];
  let durationNum = duration2.replace(durationUnitRegex, "");
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration2 !== void 0)
    $$bindings.duration(duration2);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$k);
  return `<div class="${"wrapper svelte-8cmcz4"}" style="${"--size: " + escape2(size) + escape2(unit) + "; --color: " + escape2(color) + "; --duration: " + escape2(duration2) + ";"}">${each(range(10, 0), (version) => `<div class="${"bar svelte-8cmcz4"}" style="${"left: " + escape2(version * (+size / 5 + (+size / 15 - +size / 100)) + unit) + "; animation-delay: " + escape2(version * (+durationNum / 8.3)) + escape2(durationUnit) + ";"}"></div>`)}</div>`;
});
var css$j = {
  code: ".wrapper.svelte-1x2s7pr{width:calc(var(--size) * 1.3);height:calc(var(--size) * 1.3);display:flex;justify-content:center;align-items:center}.firework.svelte-1x2s7pr{border:calc(var(--size) / 10) dotted var(--color);width:var(--size);height:var(--size);border-radius:50%;animation:svelte-1x2s7pr-fire var(--duration) cubic-bezier(0.165, 0.84, 0.44, 1) infinite}@keyframes svelte-1x2s7pr-fire{0%{opacity:1;transform:scale(0.1)}25%{opacity:0.85}100%{transform:scale(1);opacity:0}}",
  map: '{"version":3,"file":"Firework.svelte","sources":["Firework.svelte"],"sourcesContent":["<script>;\\r\\nexport let color = \\"#FF3E00\\";\\r\\nexport let unit = \\"px\\";\\r\\nexport let duration = \\"1.25s\\";\\r\\nexport let size = \\"60\\";\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  .wrapper {\\r\\n    width: calc(var(--size) * 1.3);\\r\\n    height: calc(var(--size) * 1.3);\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n  }\\r\\n  .firework {\\r\\n    border: calc(var(--size) / 10) dotted var(--color);\\r\\n    width: var(--size);\\r\\n    height: var(--size);\\r\\n    border-radius: 50%;\\r\\n    animation: fire var(--duration) cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\\r\\n  }\\r\\n\\r\\n  @keyframes fire {\\r\\n    0% {\\r\\n      opacity: 1;\\r\\n      transform: scale(0.1);\\r\\n    }\\r\\n    25% {\\r\\n      opacity: 0.85;\\r\\n    }\\r\\n    100% {\\r\\n      transform: scale(1);\\r\\n      opacity: 0;\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div\\r\\n  class=\\"wrapper\\"\\r\\n  style=\\"--size: {size}{unit}; --color: {color}; --duration: {duration};\\">\\r\\n  <div class=\\"firework\\" />\\r\\n</div>\\r\\n"],"names":[],"mappings":"AAQE,QAAQ,eAAC,CAAC,AACR,KAAK,CAAE,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC9B,MAAM,CAAE,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC/B,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,AACrB,CAAC,AACD,SAAS,eAAC,CAAC,AACT,MAAM,CAAE,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,MAAM,CAAC,IAAI,OAAO,CAAC,CAClD,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,MAAM,CAAE,IAAI,MAAM,CAAC,CACnB,aAAa,CAAE,GAAG,CAClB,SAAS,CAAE,mBAAI,CAAC,IAAI,UAAU,CAAC,CAAC,aAAa,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,QAAQ,AAC7E,CAAC,AAED,WAAW,mBAAK,CAAC,AACf,EAAE,AAAC,CAAC,AACF,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,MAAM,GAAG,CAAC,AACvB,CAAC,AACD,GAAG,AAAC,CAAC,AACH,OAAO,CAAE,IAAI,AACf,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,MAAM,CAAC,CAAC,CACnB,OAAO,CAAE,CAAC,AACZ,CAAC,AACH,CAAC"}'
};
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {color = "#FF3E00"} = $$props;
  let {unit = "px"} = $$props;
  let {duration: duration2 = "1.25s"} = $$props;
  let {size = "60"} = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration2 !== void 0)
    $$bindings.duration(duration2);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$j);
  return `<div class="${"wrapper svelte-1x2s7pr"}" style="${"--size: " + escape2(size) + escape2(unit) + "; --color: " + escape2(color) + "; --duration: " + escape2(duration2) + ";"}"><div class="${"firework svelte-1x2s7pr"}"></div></div>`;
});
var css$i = {
  code: ".wrapper.svelte-446r86{position:relative;display:flex;justify-content:center;align-items:center;width:var(--size);height:calc(var(--size) / 2.5)}.cube.svelte-446r86{position:absolute;top:0px;width:calc(var(--size) / 5);height:calc(var(--size) / 2.5);background-color:var(--color);animation:svelte-446r86-motion var(--duration) cubic-bezier(0.895, 0.03, 0.685, 0.22)\r\n      infinite}@keyframes svelte-446r86-motion{0%{opacity:1}50%{opacity:0}100%{opacity:1}}",
  map: '{"version":3,"file":"Pulse.svelte","sources":["Pulse.svelte"],"sourcesContent":["<script>;\\r\\nimport { range, durationUnitRegex } from \\"./utils\\";\\r\\nexport let color = \\"#FF3E00\\";\\r\\nexport let unit = \\"px\\";\\r\\nexport let duration = \\"1.5s\\";\\r\\nexport let size = \\"60\\";\\r\\nlet durationUnit = duration.match(durationUnitRegex)[0];\\r\\nlet durationNum = duration.replace(durationUnitRegex, \\"\\");\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  .wrapper {\\r\\n    position: relative;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    width: var(--size);\\r\\n    height: calc(var(--size) / 2.5);\\r\\n  }\\r\\n  .cube {\\r\\n    position: absolute;\\r\\n    top: 0px;\\r\\n    width: calc(var(--size) / 5);\\r\\n    height: calc(var(--size) / 2.5);\\r\\n    background-color: var(--color);\\r\\n    animation: motion var(--duration) cubic-bezier(0.895, 0.03, 0.685, 0.22)\\r\\n      infinite;\\r\\n  }\\r\\n  @keyframes motion {\\r\\n    0% {\\r\\n      opacity: 1;\\r\\n    }\\r\\n    50% {\\r\\n      opacity: 0;\\r\\n    }\\r\\n    100% {\\r\\n      opacity: 1;\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div\\r\\n  class=\\"wrapper\\"\\r\\n  style=\\"--size: {size}{unit}; --color: {color}; --duration: {duration}\\">\\r\\n  {#each range(3, 0) as version}\\r\\n    <div\\r\\n      class=\\"cube\\"\\r\\n      style=\\"animation-delay: {version * (+durationNum / 10)}{durationUnit}; left: {version * (+size / 3 + +size / 15) + unit};\\" />\\r\\n  {/each}\\r\\n</div>\\r\\n"],"names":[],"mappings":"AAWE,QAAQ,cAAC,CAAC,AACR,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,MAAM,CAAE,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,AACjC,CAAC,AACD,KAAK,cAAC,CAAC,AACL,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,KAAK,CAAE,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAC5B,MAAM,CAAE,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC/B,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,SAAS,CAAE,oBAAM,CAAC,IAAI,UAAU,CAAC,CAAC,aAAa,KAAK,CAAC,CAAC,IAAI,CAAC,CAAC,KAAK,CAAC,CAAC,IAAI,CAAC;MACtE,QAAQ,AACZ,CAAC,AACD,WAAW,oBAAO,CAAC,AACjB,EAAE,AAAC,CAAC,AACF,OAAO,CAAE,CAAC,AACZ,CAAC,AACD,GAAG,AAAC,CAAC,AACH,OAAO,CAAE,CAAC,AACZ,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,OAAO,CAAE,CAAC,AACZ,CAAC,AACH,CAAC"}'
};
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {color = "#FF3E00"} = $$props;
  let {unit = "px"} = $$props;
  let {duration: duration2 = "1.5s"} = $$props;
  let {size = "60"} = $$props;
  let durationUnit = duration2.match(durationUnitRegex)[0];
  let durationNum = duration2.replace(durationUnitRegex, "");
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration2 !== void 0)
    $$bindings.duration(duration2);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$i);
  return `<div class="${"wrapper svelte-446r86"}" style="${"--size: " + escape2(size) + escape2(unit) + "; --color: " + escape2(color) + "; --duration: " + escape2(duration2)}">${each(range(3, 0), (version) => `<div class="${"cube svelte-446r86"}" style="${"animation-delay: " + escape2(version * (+durationNum / 10)) + escape2(durationUnit) + "; left: " + escape2(version * (+size / 3 + +size / 15) + unit) + ";"}"></div>`)}</div>`;
});
var css$h = {
  code: ".wrapper.svelte-1v1mfqa{position:relative;display:flex;justify-content:center;align-items:center;width:var(--size);height:var(--size)}.ring.svelte-1v1mfqa{position:absolute;border:2px solid var(--color);border-radius:50%;background-color:transparent;animation:svelte-1v1mfqa-motion var(--duration) ease infinite}@keyframes svelte-1v1mfqa-motion{0%{transform:translateY(var(--motionOne))}50%{transform:translateY(var(--motionTwo))}100%{transform:translateY(var(--motionThree))}}",
  map: '{"version":3,"file":"Jellyfish.svelte","sources":["Jellyfish.svelte"],"sourcesContent":["<script>;\\r\\nimport { range, durationUnitRegex } from \\"./utils\\";\\r\\nexport let color = \\"#FF3E00\\";\\r\\nexport let unit = \\"px\\";\\r\\nexport let duration = \\"2.5s\\";\\r\\nexport let size = \\"60\\";\\r\\nlet durationUnit = duration.match(durationUnitRegex)[0];\\r\\nlet durationNum = duration.replace(durationUnitRegex, \\"\\");\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  .wrapper {\\r\\n    position: relative;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    width: var(--size);\\r\\n    height: var(--size);\\r\\n  }\\r\\n  .ring {\\r\\n    position: absolute;\\r\\n    border: 2px solid var(--color);\\r\\n    border-radius: 50%;\\r\\n    background-color: transparent;\\r\\n    animation: motion var(--duration) ease infinite;\\r\\n  }\\r\\n  @keyframes motion {\\r\\n    0% {\\r\\n      transform: translateY(var(--motionOne));\\r\\n    }\\r\\n    50% {\\r\\n      transform: translateY(var(--motionTwo));\\r\\n    }\\r\\n    100% {\\r\\n      transform: translateY(var(--motionThree));\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div\\r\\n  class=\\"wrapper\\"\\r\\n  style=\\"--size: {size}{unit}; --color: {color}; --motionOne: {-size / 5}{unit}; --motionTwo: {+size / 4}{unit}; --motionThree: {-size / 5}{unit}; --duration: {duration};\\">\\r\\n  {#each range(6, 0) as version}\\r\\n    <div\\r\\n      class=\\"ring\\"\\r\\n      style=\\"animation-delay: {version * (durationNum / 25)}{durationUnit}; width: {version * (+size / 6) + unit}; height: {(version * (+size / 6)) / 2 + unit}; \\" />\\r\\n  {/each}\\r\\n</div>\\r\\n"],"names":[],"mappings":"AAWE,QAAQ,eAAC,CAAC,AACR,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,MAAM,CAAE,IAAI,MAAM,CAAC,AACrB,CAAC,AACD,KAAK,eAAC,CAAC,AACL,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,OAAO,CAAC,CAC9B,aAAa,CAAE,GAAG,CAClB,gBAAgB,CAAE,WAAW,CAC7B,SAAS,CAAE,qBAAM,CAAC,IAAI,UAAU,CAAC,CAAC,IAAI,CAAC,QAAQ,AACjD,CAAC,AACD,WAAW,qBAAO,CAAC,AACjB,EAAE,AAAC,CAAC,AACF,SAAS,CAAE,WAAW,IAAI,WAAW,CAAC,CAAC,AACzC,CAAC,AACD,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,WAAW,IAAI,WAAW,CAAC,CAAC,AACzC,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,WAAW,IAAI,aAAa,CAAC,CAAC,AAC3C,CAAC,AACH,CAAC"}'
};
var Jellyfish = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {color = "#FF3E00"} = $$props;
  let {unit = "px"} = $$props;
  let {duration: duration2 = "2.5s"} = $$props;
  let {size = "60"} = $$props;
  let durationUnit = duration2.match(durationUnitRegex)[0];
  let durationNum = duration2.replace(durationUnitRegex, "");
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration2 !== void 0)
    $$bindings.duration(duration2);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$h);
  return `<div class="${"wrapper svelte-1v1mfqa"}" style="${"--size: " + escape2(size) + escape2(unit) + "; --color: " + escape2(color) + "; --motionOne: " + escape2(-size / 5) + escape2(unit) + "; --motionTwo: " + escape2(+size / 4) + escape2(unit) + "; --motionThree: " + escape2(-size / 5) + escape2(unit) + "; --duration: " + escape2(duration2) + ";"}">${each(range(6, 0), (version) => `<div class="${"ring svelte-1v1mfqa"}" style="${"animation-delay: " + escape2(version * (durationNum / 25)) + escape2(durationUnit) + "; width: " + escape2(version * (+size / 6) + unit) + "; height: " + escape2(version * (+size / 6) / 2 + unit) + "; "}"></div>`)}</div>`;
});
var css$g = {
  code: ".wrapper.svelte-1unnvn6{height:var(--size);width:var(--size);display:flex;justify-content:center;align-items:center}.spinner.svelte-1unnvn6{height:var(--size);width:var(--size);animation:svelte-1unnvn6-rotate var(--duration) infinite linear}.dot.svelte-1unnvn6{width:60%;height:60%;display:inline-block;position:absolute;top:0;background-color:var(--color);border-radius:100%;animation:svelte-1unnvn6-bounce var(--duration) infinite ease-in-out}@keyframes svelte-1unnvn6-rotate{100%{transform:rotate(360deg)}}@keyframes svelte-1unnvn6-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}",
  map: `{"version":3,"file":"Chasing.svelte","sources":["Chasing.svelte"],"sourcesContent":["<script>;\\r\\nimport { durationUnitRegex, range } from \\"./utils\\";\\r\\nexport let color = \\"#FF3E00\\";\\r\\nexport let unit = \\"px\\";\\r\\nexport let duration = \\"2s\\";\\r\\nexport let size = \\"60\\";\\r\\nlet durationUnit = duration.match(durationUnitRegex)[0];\\r\\nlet durationNum = duration.replace(durationUnitRegex, \\"\\");\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  .wrapper {\\r\\n    height: var(--size);\\r\\n    width: var(--size);\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n  }\\r\\n  .spinner {\\r\\n    height: var(--size);\\r\\n    width: var(--size);\\r\\n    animation: rotate var(--duration) infinite linear;\\r\\n  }\\r\\n  .dot {\\r\\n    width: 60%;\\r\\n    height: 60%;\\r\\n    display: inline-block;\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    background-color: var(--color);\\r\\n    border-radius: 100%;\\r\\n    animation: bounce var(--duration) infinite ease-in-out;\\r\\n  }\\r\\n\\r\\n  @keyframes rotate {\\r\\n    100% {\\r\\n      transform: rotate(360deg);\\r\\n    }\\r\\n  }\\r\\n  @keyframes bounce {\\r\\n    0%,\\r\\n    100% {\\r\\n      transform: scale(0);\\r\\n    }\\r\\n    50% {\\r\\n      transform: scale(1);\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div\\r\\n  class=\\"wrapper\\"\\r\\n  style=\\"--size: {size}{unit}; --color: {color}; --duration: {duration};\\">\\r\\n  <div class=\\"spinner\\">\\r\\n    {#each range(2, 0) as version}\\r\\n      <div\\r\\n        class=\\"dot\\"\\r\\n        style=\\"animation-delay: {version === 1 ? \`\${durationNum / 2}\${durationUnit}\` : '0s'}; bottom: {version === 1 ? '0' : ''}; top: {version === 1 ? 'auto' : ''};\\" />\\r\\n    {/each}\\r\\n  </div>\\r\\n</div>\\r\\n"],"names":[],"mappings":"AAWE,QAAQ,eAAC,CAAC,AACR,MAAM,CAAE,IAAI,MAAM,CAAC,CACnB,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,AACrB,CAAC,AACD,QAAQ,eAAC,CAAC,AACR,MAAM,CAAE,IAAI,MAAM,CAAC,CACnB,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,SAAS,CAAE,qBAAM,CAAC,IAAI,UAAU,CAAC,CAAC,QAAQ,CAAC,MAAM,AACnD,CAAC,AACD,IAAI,eAAC,CAAC,AACJ,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,OAAO,CAAE,YAAY,CACrB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,aAAa,CAAE,IAAI,CACnB,SAAS,CAAE,qBAAM,CAAC,IAAI,UAAU,CAAC,CAAC,QAAQ,CAAC,WAAW,AACxD,CAAC,AAED,WAAW,qBAAO,CAAC,AACjB,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,OAAO,MAAM,CAAC,AAC3B,CAAC,AACH,CAAC,AACD,WAAW,qBAAO,CAAC,AACjB,EAAE,CACF,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,MAAM,CAAC,CAAC,AACrB,CAAC,AACD,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,MAAM,CAAC,CAAC,AACrB,CAAC,AACH,CAAC"}`
};
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {color = "#FF3E00"} = $$props;
  let {unit = "px"} = $$props;
  let {duration: duration2 = "2s"} = $$props;
  let {size = "60"} = $$props;
  let durationUnit = duration2.match(durationUnitRegex)[0];
  let durationNum = duration2.replace(durationUnitRegex, "");
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration2 !== void 0)
    $$bindings.duration(duration2);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$g);
  return `<div class="${"wrapper svelte-1unnvn6"}" style="${"--size: " + escape2(size) + escape2(unit) + "; --color: " + escape2(color) + "; --duration: " + escape2(duration2) + ";"}"><div class="${"spinner svelte-1unnvn6"}">${each(range(2, 0), (version) => `<div class="${"dot svelte-1unnvn6"}" style="${"animation-delay: " + escape2(version === 1 ? `${durationNum / 2}${durationUnit}` : "0s") + "; bottom: " + escape2(version === 1 ? "0" : "") + "; top: " + escape2(version === 1 ? "auto" : "") + ";"}"></div>`)}</div></div>`;
});
var css$f = {
  code: ".wrapper.svelte-tycttu{position:relative;display:flex;justify-content:center;align-items:center;width:var(--size);height:var(--size)}.shadow.svelte-tycttu{color:var(--color);font-size:var(--size);overflow:hidden;width:var(--size);height:var(--size);border-radius:50%;margin:28px auto;position:relative;transform:translateZ(0);animation:svelte-tycttu-load var(--duration) infinite ease,\r\n      svelte-tycttu-round var(--duration) infinite ease}@keyframes svelte-tycttu-load{0%{box-shadow:0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,\r\n        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em}5%,95%{box-shadow:0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,\r\n        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em}10%,59%{box-shadow:0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,\r\n        -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,\r\n        -0.297em -0.775em 0 -0.477em}20%{box-shadow:0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,\r\n        -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,\r\n        -0.749em -0.34em 0 -0.477em}38%{box-shadow:0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,\r\n        -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,\r\n        -0.82em -0.09em 0 -0.477em}100%{box-shadow:0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,\r\n        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em}}@keyframes svelte-tycttu-round{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: '{"version":3,"file":"Shadow.svelte","sources":["Shadow.svelte"],"sourcesContent":["<script>;\\r\\nexport let color = \\"#FF3E00\\";\\r\\nexport let unit = \\"px\\";\\r\\nexport let duration = \\"1.7s\\";\\r\\nexport let size = \\"60\\";\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  .wrapper {\\r\\n    position: relative;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    width: var(--size);\\r\\n    height: var(--size);\\r\\n  }\\r\\n  .shadow {\\r\\n    color: var(--color);\\r\\n    font-size: var(--size);\\r\\n    overflow: hidden;\\r\\n    width: var(--size);\\r\\n    height: var(--size);\\r\\n    border-radius: 50%;\\r\\n    margin: 28px auto;\\r\\n    position: relative;\\r\\n    transform: translateZ(0);\\r\\n    animation: load var(--duration) infinite ease,\\r\\n      round var(--duration) infinite ease;\\r\\n  }\\r\\n  @keyframes load {\\r\\n    0% {\\r\\n      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,\\r\\n        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\\r\\n    }\\r\\n    5%,\\r\\n    95% {\\r\\n      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,\\r\\n        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\\r\\n    }\\r\\n    10%,\\r\\n    59% {\\r\\n      box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,\\r\\n        -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,\\r\\n        -0.297em -0.775em 0 -0.477em;\\r\\n    }\\r\\n    20% {\\r\\n      box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,\\r\\n        -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,\\r\\n        -0.749em -0.34em 0 -0.477em;\\r\\n    }\\r\\n    38% {\\r\\n      box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,\\r\\n        -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,\\r\\n        -0.82em -0.09em 0 -0.477em;\\r\\n    }\\r\\n    100% {\\r\\n      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,\\r\\n        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\\r\\n    }\\r\\n  }\\r\\n  @keyframes round {\\r\\n    0% {\\r\\n      transform: rotate(0deg);\\r\\n    }\\r\\n    100% {\\r\\n      transform: rotate(360deg);\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div\\r\\n  class=\\"wrapper\\"\\r\\n  style=\\"--size: {size}{unit}; --color: {color}; --duration: {duration};\\">\\r\\n  <div class=\\"shadow\\" />\\r\\n</div>\\r\\n"],"names":[],"mappings":"AAQE,QAAQ,cAAC,CAAC,AACR,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,MAAM,CAAE,IAAI,MAAM,CAAC,AACrB,CAAC,AACD,OAAO,cAAC,CAAC,AACP,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,SAAS,CAAE,IAAI,MAAM,CAAC,CACtB,QAAQ,CAAE,MAAM,CAChB,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,MAAM,CAAE,IAAI,MAAM,CAAC,CACnB,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,IAAI,CAAC,IAAI,CACjB,QAAQ,CAAE,QAAQ,CAClB,SAAS,CAAE,WAAW,CAAC,CAAC,CACxB,SAAS,CAAE,kBAAI,CAAC,IAAI,UAAU,CAAC,CAAC,QAAQ,CAAC,IAAI,CAAC;MAC5C,mBAAK,CAAC,IAAI,UAAU,CAAC,CAAC,QAAQ,CAAC,IAAI,AACvC,CAAC,AACD,WAAW,kBAAK,CAAC,AACf,EAAE,AAAC,CAAC,AACF,UAAU,CAAE,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,OAAO,CAAC;QACvE,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,QAAQ,AAC7C,CAAC,AACD,EAAE,CACF,GAAG,AAAC,CAAC,AACH,UAAU,CAAE,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,OAAO,CAAC;QACvE,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,QAAQ,AAC7C,CAAC,AACD,GAAG,CACH,GAAG,AAAC,CAAC,AACH,UAAU,CAAE,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,QAAQ,CAAC,QAAQ,CAAC,CAAC,CAAC,OAAO,CAAC;QAC1D,QAAQ,CAAC,QAAQ,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,QAAQ,CAAC,QAAQ,CAAC,CAAC,CAAC,OAAO,CAAC;QACzD,QAAQ,CAAC,QAAQ,CAAC,CAAC,CAAC,QAAQ,AAChC,CAAC,AACD,GAAG,AAAC,CAAC,AACH,UAAU,CAAE,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,QAAQ,CAAC,QAAQ,CAAC,CAAC,CAAC,OAAO,CAAC;QAC1D,QAAQ,CAAC,QAAQ,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,QAAQ,CAAC,QAAQ,CAAC,CAAC,CAAC,OAAO,CAAC;QACzD,QAAQ,CAAC,OAAO,CAAC,CAAC,CAAC,QAAQ,AAC/B,CAAC,AACD,GAAG,AAAC,CAAC,AACH,UAAU,CAAE,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,QAAQ,CAAC,OAAO,CAAC,CAAC,CAAC,OAAO,CAAC;QACzD,QAAQ,CAAC,QAAQ,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,QAAQ,CAAC,QAAQ,CAAC,CAAC,CAAC,OAAO,CAAC;QACzD,OAAO,CAAC,OAAO,CAAC,CAAC,CAAC,QAAQ,AAC9B,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,UAAU,CAAE,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,OAAO,CAAC;QACvE,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,QAAQ,AAC7C,CAAC,AACH,CAAC,AACD,WAAW,mBAAM,CAAC,AAChB,EAAE,AAAC,CAAC,AACF,SAAS,CAAE,OAAO,IAAI,CAAC,AACzB,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,OAAO,MAAM,CAAC,AAC3B,CAAC,AACH,CAAC"}'
};
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {color = "#FF3E00"} = $$props;
  let {unit = "px"} = $$props;
  let {duration: duration2 = "1.7s"} = $$props;
  let {size = "60"} = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration2 !== void 0)
    $$bindings.duration(duration2);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$f);
  return `<div class="${"wrapper svelte-tycttu"}" style="${"--size: " + escape2(size) + escape2(unit) + "; --color: " + escape2(color) + "; --duration: " + escape2(duration2) + ";"}"><div class="${"shadow svelte-tycttu"}"></div></div>`;
});
var css$e = {
  code: ".square.svelte-btmyrn{height:var(--size);width:var(--size);background-color:var(--color);animation:svelte-btmyrn-squareDelay var(--duration) 0s infinite\r\n      cubic-bezier(0.09, 0.57, 0.49, 0.9);animation-fill-mode:both;perspective:100px;display:inline-block}@keyframes svelte-btmyrn-squareDelay{25%{-webkit-transform:rotateX(180deg) rotateY(0);transform:rotateX(180deg) rotateY(0)}50%{-webkit-transform:rotateX(180deg) rotateY(180deg);transform:rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:rotateX(0) rotateY(180deg);transform:rotateX(0) rotateY(180deg)}100%{-webkit-transform:rotateX(0) rotateY(0);transform:rotateX(0) rotateY(0)}}",
  map: '{"version":3,"file":"Square.svelte","sources":["Square.svelte"],"sourcesContent":["<script>;\\r\\nexport let color = \\"#FF3E00\\";\\r\\nexport let unit = \\"px\\";\\r\\nexport let duration = \\"3s\\";\\r\\nexport let size = \\"60\\";\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  .square {\\r\\n    height: var(--size);\\r\\n    width: var(--size);\\r\\n    background-color: var(--color);\\r\\n    animation: squareDelay var(--duration) 0s infinite\\r\\n      cubic-bezier(0.09, 0.57, 0.49, 0.9);\\r\\n    animation-fill-mode: both;\\r\\n    perspective: 100px;\\r\\n    display: inline-block;\\r\\n  }\\r\\n  @keyframes squareDelay {\\r\\n    25% {\\r\\n      -webkit-transform: rotateX(180deg) rotateY(0);\\r\\n      transform: rotateX(180deg) rotateY(0);\\r\\n    }\\r\\n    50% {\\r\\n      -webkit-transform: rotateX(180deg) rotateY(180deg);\\r\\n      transform: rotateX(180deg) rotateY(180deg);\\r\\n    }\\r\\n    75% {\\r\\n      -webkit-transform: rotateX(0) rotateY(180deg);\\r\\n      transform: rotateX(0) rotateY(180deg);\\r\\n    }\\r\\n    100% {\\r\\n      -webkit-transform: rotateX(0) rotateY(0);\\r\\n      transform: rotateX(0) rotateY(0);\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div\\r\\n  class=\\"square\\"\\r\\n  style=\\"--size: {size}{unit}; --color: {color}; --duration: {duration};\\" />\\r\\n"],"names":[],"mappings":"AAQE,OAAO,cAAC,CAAC,AACP,MAAM,CAAE,IAAI,MAAM,CAAC,CACnB,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,SAAS,CAAE,yBAAW,CAAC,IAAI,UAAU,CAAC,CAAC,EAAE,CAAC,QAAQ;MAChD,aAAa,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,CACrC,mBAAmB,CAAE,IAAI,CACzB,WAAW,CAAE,KAAK,CAClB,OAAO,CAAE,YAAY,AACvB,CAAC,AACD,WAAW,yBAAY,CAAC,AACtB,GAAG,AAAC,CAAC,AACH,iBAAiB,CAAE,QAAQ,MAAM,CAAC,CAAC,QAAQ,CAAC,CAAC,CAC7C,SAAS,CAAE,QAAQ,MAAM,CAAC,CAAC,QAAQ,CAAC,CAAC,AACvC,CAAC,AACD,GAAG,AAAC,CAAC,AACH,iBAAiB,CAAE,QAAQ,MAAM,CAAC,CAAC,QAAQ,MAAM,CAAC,CAClD,SAAS,CAAE,QAAQ,MAAM,CAAC,CAAC,QAAQ,MAAM,CAAC,AAC5C,CAAC,AACD,GAAG,AAAC,CAAC,AACH,iBAAiB,CAAE,QAAQ,CAAC,CAAC,CAAC,QAAQ,MAAM,CAAC,CAC7C,SAAS,CAAE,QAAQ,CAAC,CAAC,CAAC,QAAQ,MAAM,CAAC,AACvC,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,iBAAiB,CAAE,QAAQ,CAAC,CAAC,CAAC,QAAQ,CAAC,CAAC,CACxC,SAAS,CAAE,QAAQ,CAAC,CAAC,CAAC,QAAQ,CAAC,CAAC,AAClC,CAAC,AACH,CAAC"}'
};
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {color = "#FF3E00"} = $$props;
  let {unit = "px"} = $$props;
  let {duration: duration2 = "3s"} = $$props;
  let {size = "60"} = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration2 !== void 0)
    $$bindings.duration(duration2);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$e);
  return `<div class="${"square svelte-btmyrn"}" style="${"--size: " + escape2(size) + escape2(unit) + "; --color: " + escape2(color) + "; --duration: " + escape2(duration2) + ";"}"></div>`;
});
var css$d = {
  code: ".wrapper.svelte-nlgli4{height:var(--size);width:var(--size);border-radius:100%;animation:svelte-nlgli4-moonStretchDelay var(--duration) 0s infinite linear;animation-fill-mode:forwards;position:relative}.circle-one.svelte-nlgli4{top:var(--moonSize);background-color:var(--color);width:calc(var(--size) / 7);height:calc(var(--size) / 7);border-radius:100%;animation:svelte-nlgli4-moonStretchDelay var(--duration) 0s infinite linear;animation-fill-mode:forwards;opacity:0.8;position:absolute}.circle-two.svelte-nlgli4{opacity:0.1;border:calc(var(--size) / 7) solid var(--color);height:var(--size);width:var(--size);border-radius:100%;box-sizing:border-box}@keyframes svelte-nlgli4-moonStretchDelay{100%{transform:rotate(360deg)}}",
  map: '{"version":3,"file":"Moon.svelte","sources":["Moon.svelte"],"sourcesContent":["<script>;\\r\\nexport let color = \\"#FF3E00\\";\\r\\nexport let unit = \\"px\\";\\r\\nexport let duration = \\"0.6s\\";\\r\\nexport let size = \\"60\\";\\r\\nlet moonSize = +size / 7;\\r\\nlet top = +size / 2 - moonSize / 2;\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  .wrapper {\\r\\n    height: var(--size);\\r\\n    width: var(--size);\\r\\n    border-radius: 100%;\\r\\n    animation: moonStretchDelay var(--duration) 0s infinite linear;\\r\\n    animation-fill-mode: forwards;\\r\\n    position: relative;\\r\\n  }\\r\\n  .circle-one {\\r\\n    top: var(--moonSize);\\r\\n    background-color: var(--color);\\r\\n    width: calc(var(--size) / 7);\\r\\n    height: calc(var(--size) / 7);\\r\\n    border-radius: 100%;\\r\\n    animation: moonStretchDelay var(--duration) 0s infinite linear;\\r\\n    animation-fill-mode: forwards;\\r\\n    opacity: 0.8;\\r\\n    position: absolute;\\r\\n  }\\r\\n  .circle-two {\\r\\n    opacity: 0.1;\\r\\n    border: calc(var(--size) / 7) solid var(--color);\\r\\n    height: var(--size);\\r\\n    width: var(--size);\\r\\n    border-radius: 100%;\\r\\n    box-sizing: border-box;\\r\\n  }\\r\\n  @keyframes moonStretchDelay {\\r\\n    100% {\\r\\n      transform: rotate(360deg);\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div\\r\\n  class=\\"wrapper\\"\\r\\n  style=\\"--size: {size}{unit}; --color: {color}; --moonSize: {top}{unit}; --duration: {duration};\\">\\r\\n  <div class=\\"circle-one\\" />\\r\\n  <div class=\\"circle-two\\" />\\r\\n</div>\\r\\n"],"names":[],"mappings":"AAUE,QAAQ,cAAC,CAAC,AACR,MAAM,CAAE,IAAI,MAAM,CAAC,CACnB,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,aAAa,CAAE,IAAI,CACnB,SAAS,CAAE,8BAAgB,CAAC,IAAI,UAAU,CAAC,CAAC,EAAE,CAAC,QAAQ,CAAC,MAAM,CAC9D,mBAAmB,CAAE,QAAQ,CAC7B,QAAQ,CAAE,QAAQ,AACpB,CAAC,AACD,WAAW,cAAC,CAAC,AACX,GAAG,CAAE,IAAI,UAAU,CAAC,CACpB,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,KAAK,CAAE,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAC5B,MAAM,CAAE,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAC7B,aAAa,CAAE,IAAI,CACnB,SAAS,CAAE,8BAAgB,CAAC,IAAI,UAAU,CAAC,CAAC,EAAE,CAAC,QAAQ,CAAC,MAAM,CAC9D,mBAAmB,CAAE,QAAQ,CAC7B,OAAO,CAAE,GAAG,CACZ,QAAQ,CAAE,QAAQ,AACpB,CAAC,AACD,WAAW,cAAC,CAAC,AACX,OAAO,CAAE,GAAG,CACZ,MAAM,CAAE,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,IAAI,OAAO,CAAC,CAChD,MAAM,CAAE,IAAI,MAAM,CAAC,CACnB,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,UAAU,AACxB,CAAC,AACD,WAAW,8BAAiB,CAAC,AAC3B,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,OAAO,MAAM,CAAC,AAC3B,CAAC,AACH,CAAC"}'
};
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {color = "#FF3E00"} = $$props;
  let {unit = "px"} = $$props;
  let {duration: duration2 = "0.6s"} = $$props;
  let {size = "60"} = $$props;
  let moonSize = +size / 7;
  let top = +size / 2 - moonSize / 2;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration2 !== void 0)
    $$bindings.duration(duration2);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$d);
  return `<div class="${"wrapper svelte-nlgli4"}" style="${"--size: " + escape2(size) + escape2(unit) + "; --color: " + escape2(color) + "; --moonSize: " + escape2(top) + escape2(unit) + "; --duration: " + escape2(duration2) + ";"}"><div class="${"circle-one svelte-nlgli4"}"></div>
  <div class="${"circle-two svelte-nlgli4"}"></div></div>`;
});
var css$c = {
  code: ".wrapper.svelte-1sqavxm.svelte-1sqavxm{height:var(--size);width:var(--size);position:relative;display:flex;justify-content:center;align-items:center}.wrapper.svelte-1sqavxm .svelte-1sqavxm{line-height:0;box-sizing:border-box}.spinner-inner.svelte-1sqavxm.svelte-1sqavxm{height:var(--size);width:var(--size);transform:scale(calc(var(--size) / 70))}.mask.svelte-1sqavxm.svelte-1sqavxm{position:absolute;border-radius:2px;overflow:hidden;perspective:1000;backface-visibility:hidden}.plane.svelte-1sqavxm.svelte-1sqavxm{background:var(--color);width:400%;height:100%;position:absolute;z-index:100;perspective:1000;backface-visibility:hidden}#top.svelte-1sqavxm .plane.svelte-1sqavxm{z-index:2000;animation:svelte-1sqavxm-trans1 var(--duration) ease-in infinite 0s backwards}#middle.svelte-1sqavxm .plane.svelte-1sqavxm{transform:translate3d(0px, 0, 0);background:var(--rgba);animation:svelte-1sqavxm-trans2 var(--duration) linear infinite calc(var(--duration) / 4)\r\n      backwards}#bottom.svelte-1sqavxm .plane.svelte-1sqavxm{z-index:2000;animation:svelte-1sqavxm-trans3 var(--duration) ease-out infinite\r\n      calc(var(--duration) / 2) backwards}#top.svelte-1sqavxm.svelte-1sqavxm{width:53px;height:20px;left:20px;top:5px;transform:skew(-15deg, 0);z-index:100}#middle.svelte-1sqavxm.svelte-1sqavxm{width:33px;height:20px;left:20px;top:21px;transform:skew(-15deg, 40deg)}#bottom.svelte-1sqavxm.svelte-1sqavxm{width:53px;height:20px;top:35px;transform:skew(-15deg, 0)}@keyframes svelte-1sqavxm-trans1{from{transform:translate3d(53px, 0, 0)}to{transform:translate3d(-250px, 0, 0)}}@keyframes svelte-1sqavxm-trans2{from{transform:translate3d(-160px, 0, 0)}to{transform:translate3d(53px, 0, 0)}}@keyframes svelte-1sqavxm-trans3{from{transform:translate3d(53px, 0, 0)}to{transform:translate3d(-220px, 0, 0)}}",
  map: '{"version":3,"file":"Plane.svelte","sources":["Plane.svelte"],"sourcesContent":["<script>;\\r\\nimport { calculateRgba } from \\"./utils\\";\\r\\nexport let color = \\"#FF3E00\\";\\r\\nexport let unit = \\"px\\";\\r\\nexport let duration = \\"1.3s\\";\\r\\nexport let size = \\"60\\";\\r\\nlet rgba;\\r\\n$: rgba = calculateRgba(color, 0.6);\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  .wrapper {\\r\\n    height: var(--size);\\r\\n    width: var(--size);\\r\\n    position: relative;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n  }\\r\\n  .wrapper * {\\r\\n    line-height: 0;\\r\\n    box-sizing: border-box;\\r\\n  }\\r\\n  .spinner-inner {\\r\\n    height: var(--size);\\r\\n    width: var(--size);\\r\\n    transform: scale(calc(var(--size) / 70));\\r\\n  }\\r\\n\\r\\n  .mask {\\r\\n    position: absolute;\\r\\n    border-radius: 2px;\\r\\n    overflow: hidden;\\r\\n    perspective: 1000;\\r\\n    backface-visibility: hidden;\\r\\n  }\\r\\n\\r\\n  .plane {\\r\\n    background: var(--color);\\r\\n    width: 400%;\\r\\n    height: 100%;\\r\\n    position: absolute;\\r\\n    z-index: 100;\\r\\n    perspective: 1000;\\r\\n    backface-visibility: hidden;\\r\\n  }\\r\\n\\r\\n  #top .plane {\\r\\n    z-index: 2000;\\r\\n    animation: trans1 var(--duration) ease-in infinite 0s backwards;\\r\\n  }\\r\\n  #middle .plane {\\r\\n    transform: translate3d(0px, 0, 0);\\r\\n    background: var(--rgba);\\r\\n    animation: trans2 var(--duration) linear infinite calc(var(--duration) / 4)\\r\\n      backwards;\\r\\n  }\\r\\n  #bottom .plane {\\r\\n    z-index: 2000;\\r\\n    animation: trans3 var(--duration) ease-out infinite\\r\\n      calc(var(--duration) / 2) backwards;\\r\\n  }\\r\\n  #top {\\r\\n    width: 53px;\\r\\n    height: 20px;\\r\\n    left: 20px;\\r\\n    top: 5px;\\r\\n    transform: skew(-15deg, 0);\\r\\n    z-index: 100;\\r\\n  }\\r\\n  #middle {\\r\\n    width: 33px;\\r\\n    height: 20px;\\r\\n    left: 20px;\\r\\n    top: 21px;\\r\\n    transform: skew(-15deg, 40deg);\\r\\n  }\\r\\n  #bottom {\\r\\n    width: 53px;\\r\\n    height: 20px;\\r\\n    top: 35px;\\r\\n    transform: skew(-15deg, 0);\\r\\n  }\\r\\n\\r\\n  @keyframes trans1 {\\r\\n    from {\\r\\n      transform: translate3d(53px, 0, 0);\\r\\n    }\\r\\n    to {\\r\\n      transform: translate3d(-250px, 0, 0);\\r\\n    }\\r\\n  }\\r\\n  @keyframes trans2 {\\r\\n    from {\\r\\n      transform: translate3d(-160px, 0, 0);\\r\\n    }\\r\\n    to {\\r\\n      transform: translate3d(53px, 0, 0);\\r\\n    }\\r\\n  }\\r\\n  @keyframes trans3 {\\r\\n    from {\\r\\n      transform: translate3d(53px, 0, 0);\\r\\n    }\\r\\n    to {\\r\\n      transform: translate3d(-220px, 0, 0);\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div\\r\\n  class=\\"wrapper\\"\\r\\n  style=\\"--size: {size}{unit}; --color: {color}; --rgba: {rgba}; --duration: {duration};\\">\\r\\n  <div class=\\"spinner-inner\\">\\r\\n    <div id=\\"top\\" class=\\"mask\\">\\r\\n      <div class=\\"plane\\" />\\r\\n    </div>\\r\\n    <div id=\\"middle\\" class=\\"mask\\">\\r\\n      <div class=\\"plane\\" />\\r\\n    </div>\\r\\n    <div id=\\"bottom\\" class=\\"mask\\">\\r\\n      <div class=\\"plane\\" />\\r\\n    </div>\\r\\n  </div>\\r\\n</div>\\r\\n"],"names":[],"mappings":"AAWE,QAAQ,8BAAC,CAAC,AACR,MAAM,CAAE,IAAI,MAAM,CAAC,CACnB,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,AACrB,CAAC,AACD,uBAAQ,CAAC,eAAE,CAAC,AACV,WAAW,CAAE,CAAC,CACd,UAAU,CAAE,UAAU,AACxB,CAAC,AACD,cAAc,8BAAC,CAAC,AACd,MAAM,CAAE,IAAI,MAAM,CAAC,CACnB,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,SAAS,CAAE,MAAM,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,AAC1C,CAAC,AAED,KAAK,8BAAC,CAAC,AACL,QAAQ,CAAE,QAAQ,CAClB,aAAa,CAAE,GAAG,CAClB,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,IAAI,CACjB,mBAAmB,CAAE,MAAM,AAC7B,CAAC,AAED,MAAM,8BAAC,CAAC,AACN,UAAU,CAAE,IAAI,OAAO,CAAC,CACxB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,GAAG,CACZ,WAAW,CAAE,IAAI,CACjB,mBAAmB,CAAE,MAAM,AAC7B,CAAC,AAED,mBAAI,CAAC,MAAM,eAAC,CAAC,AACX,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,qBAAM,CAAC,IAAI,UAAU,CAAC,CAAC,OAAO,CAAC,QAAQ,CAAC,EAAE,CAAC,SAAS,AACjE,CAAC,AACD,sBAAO,CAAC,MAAM,eAAC,CAAC,AACd,SAAS,CAAE,YAAY,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACjC,UAAU,CAAE,IAAI,MAAM,CAAC,CACvB,SAAS,CAAE,qBAAM,CAAC,IAAI,UAAU,CAAC,CAAC,MAAM,CAAC,QAAQ,CAAC,KAAK,IAAI,UAAU,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;MACzE,SAAS,AACb,CAAC,AACD,sBAAO,CAAC,MAAM,eAAC,CAAC,AACd,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,qBAAM,CAAC,IAAI,UAAU,CAAC,CAAC,QAAQ,CAAC,QAAQ;MACjD,KAAK,IAAI,UAAU,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,SAAS,AACvC,CAAC,AACD,IAAI,8BAAC,CAAC,AACJ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,IAAI,CAAE,IAAI,CACV,GAAG,CAAE,GAAG,CACR,SAAS,CAAE,KAAK,MAAM,CAAC,CAAC,CAAC,CAAC,CAC1B,OAAO,CAAE,GAAG,AACd,CAAC,AACD,OAAO,8BAAC,CAAC,AACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,IAAI,CAAE,IAAI,CACV,GAAG,CAAE,IAAI,CACT,SAAS,CAAE,KAAK,MAAM,CAAC,CAAC,KAAK,CAAC,AAChC,CAAC,AACD,OAAO,8BAAC,CAAC,AACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,GAAG,CAAE,IAAI,CACT,SAAS,CAAE,KAAK,MAAM,CAAC,CAAC,CAAC,CAAC,AAC5B,CAAC,AAED,WAAW,qBAAO,CAAC,AACjB,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,YAAY,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AACpC,CAAC,AACD,EAAE,AAAC,CAAC,AACF,SAAS,CAAE,YAAY,MAAM,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AACtC,CAAC,AACH,CAAC,AACD,WAAW,qBAAO,CAAC,AACjB,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,YAAY,MAAM,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AACtC,CAAC,AACD,EAAE,AAAC,CAAC,AACF,SAAS,CAAE,YAAY,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AACpC,CAAC,AACH,CAAC,AACD,WAAW,qBAAO,CAAC,AACjB,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,YAAY,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AACpC,CAAC,AACD,EAAE,AAAC,CAAC,AACF,SAAS,CAAE,YAAY,MAAM,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AACtC,CAAC,AACH,CAAC"}'
};
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {color = "#FF3E00"} = $$props;
  let {unit = "px"} = $$props;
  let {duration: duration2 = "1.3s"} = $$props;
  let {size = "60"} = $$props;
  let rgba;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration2 !== void 0)
    $$bindings.duration(duration2);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$c);
  rgba = calculateRgba(color, 0.6);
  return `<div class="${"wrapper svelte-1sqavxm"}" style="${"--size: " + escape2(size) + escape2(unit) + "; --color: " + escape2(color) + "; --rgba: " + escape2(rgba) + "; --duration: " + escape2(duration2) + ";"}"><div class="${"spinner-inner svelte-1sqavxm"}"><div id="${"top"}" class="${"mask svelte-1sqavxm"}"><div class="${"plane svelte-1sqavxm"}"></div></div>
    <div id="${"middle"}" class="${"mask svelte-1sqavxm"}"><div class="${"plane svelte-1sqavxm"}"></div></div>
    <div id="${"bottom"}" class="${"mask svelte-1sqavxm"}"><div class="${"plane svelte-1sqavxm"}"></div></div></div></div>`;
});
var css$b = {
  code: "span.svelte-1f3hinu{width:var(--size);height:calc(var(--size) / 4);position:relative}div.svelte-1f3hinu{width:calc(var(--size) / 4);height:calc(var(--size) / 4);position:absolute;left:0;top:0;border-radius:2px;background:var(--color);transform:translateX(-50%) rotate(45deg) scale(0);animation:svelte-1f3hinu-diamonds var(--duration) linear infinite}div.svelte-1f3hinu:nth-child(1){animation-delay:calc(var(--duration) * 2 / 3 * -1)}div.svelte-1f3hinu:nth-child(2){animation-delay:calc(var(--duration) * 2 / 3 * -2)}div.svelte-1f3hinu:nth-child(3){animation-delay:calc(var(--duration) * 2 / 3 * -3)}@keyframes svelte-1f3hinu-diamonds{50%{left:50%;transform:translateX(-50%) rotate(45deg) scale(1)}100%{left:100%;transform:translateX(-50%) rotate(45deg) scale(0)}}",
  map: '{"version":3,"file":"Diamonds.svelte","sources":["Diamonds.svelte"],"sourcesContent":["<script>;\\r\\nexport let color = \\"#FF3E00\\";\\r\\nexport let unit = \\"px\\";\\r\\nexport let duration = \\"1.5s\\";\\r\\nexport let size = \\"60\\";\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  span {\\r\\n    width: var(--size);\\r\\n    height: calc(var(--size) / 4);\\r\\n    position: relative;\\r\\n  }\\r\\n  div {\\r\\n    width: calc(var(--size) / 4);\\r\\n    height: calc(var(--size) / 4);\\r\\n\\r\\n    position: absolute;\\r\\n    left: 0;\\r\\n    top: 0;\\r\\n    border-radius: 2px;\\r\\n    background: var(--color);\\r\\n    transform: translateX(-50%) rotate(45deg) scale(0);\\r\\n    animation: diamonds var(--duration) linear infinite;\\r\\n  }\\r\\n  div:nth-child(1) {\\r\\n    animation-delay: calc(var(--duration) * 2 / 3 * -1);\\r\\n  }\\r\\n  div:nth-child(2) {\\r\\n    animation-delay: calc(var(--duration) * 2 / 3 * -2);\\r\\n  }\\r\\n  div:nth-child(3) {\\r\\n    animation-delay: calc(var(--duration) * 2 / 3 * -3);\\r\\n  }\\r\\n\\r\\n  @keyframes diamonds {\\r\\n    50% {\\r\\n      left: 50%;\\r\\n      transform: translateX(-50%) rotate(45deg) scale(1);\\r\\n    }\\r\\n    100% {\\r\\n      left: 100%;\\r\\n      transform: translateX(-50%) rotate(45deg) scale(0);\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<span style=\\"--size: {size}{unit}; --color:{color}; --duration: {duration};\\">\\r\\n  <div />\\r\\n  <div />\\r\\n  <div />\\r\\n</span>\\r\\n"],"names":[],"mappings":"AAQE,IAAI,eAAC,CAAC,AACJ,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,MAAM,CAAE,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAC7B,QAAQ,CAAE,QAAQ,AACpB,CAAC,AACD,GAAG,eAAC,CAAC,AACH,KAAK,CAAE,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAC5B,MAAM,CAAE,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAE7B,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,IAAI,OAAO,CAAC,CACxB,SAAS,CAAE,WAAW,IAAI,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,MAAM,CAAC,CAAC,CAClD,SAAS,CAAE,uBAAQ,CAAC,IAAI,UAAU,CAAC,CAAC,MAAM,CAAC,QAAQ,AACrD,CAAC,AACD,kBAAG,WAAW,CAAC,CAAC,AAAC,CAAC,AAChB,eAAe,CAAE,KAAK,IAAI,UAAU,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,AACrD,CAAC,AACD,kBAAG,WAAW,CAAC,CAAC,AAAC,CAAC,AAChB,eAAe,CAAE,KAAK,IAAI,UAAU,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AACrD,CAAC,AACD,kBAAG,WAAW,CAAC,CAAC,AAAC,CAAC,AAChB,eAAe,CAAE,KAAK,IAAI,UAAU,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AACrD,CAAC,AAED,WAAW,uBAAS,CAAC,AACnB,GAAG,AAAC,CAAC,AACH,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,EAAE,SAAS,IAAI,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,MAAM,CAAC,CAAC,AACpD,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,IAAI,CAAE,IAAI,CACV,SAAS,CAAE,WAAW,IAAI,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,MAAM,CAAC,CAAC,AACpD,CAAC,AACH,CAAC"}'
};
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {color = "#FF3E00"} = $$props;
  let {unit = "px"} = $$props;
  let {duration: duration2 = "1.5s"} = $$props;
  let {size = "60"} = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration2 !== void 0)
    $$bindings.duration(duration2);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$b);
  return `<span style="${"--size: " + escape2(size) + escape2(unit) + "; --color:" + escape2(color) + "; --duration: " + escape2(duration2) + ";"}" class="${"svelte-1f3hinu"}"><div class="${"svelte-1f3hinu"}"></div>
  <div class="${"svelte-1f3hinu"}"></div>
  <div class="${"svelte-1f3hinu"}"></div></span>`;
});
var css$a = {
  code: "div.svelte-1s5lrod{width:max-content;min-height:500px;margin:auto;display:flex;align-items:center}",
  map: `{"version":3,"file":"Loading.svelte","sources":["Loading.svelte"],"sourcesContent":["<script>\\n  import { Jellyfish } from 'svelte-loading-spinners'\\n</script>\\n\\n<div>\\n  <Jellyfish size=\\"80\\" unit=\\"px\\" color=\\"#1f1f1f\\" duration=\\"1s\\"/>\\n</div>\\n\\n<style>\\n  div {\\n    width: max-content;\\n    min-height: 500px;\\n    margin: auto;\\n    display: flex;\\n    align-items: center;\\n  }\\n</style>"],"names":[],"mappings":"AASE,GAAG,eAAC,CAAC,AACH,KAAK,CAAE,WAAW,CAClB,UAAU,CAAE,KAAK,CACjB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,AACrB,CAAC"}`
};
var Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$a);
  return `<div class="${"svelte-1s5lrod"}">${validate_component(Jellyfish, "Jellyfish").$$render($$result, {
    size: "80",
    unit: "px",
    color: "#1f1f1f",
    duration: "1s"
  }, {}, {})}
</div>`;
});
var css$9 = {
  code: "a.svelte-1vox0mn{text-align:center;background:transparent;border:2px solid var(--black);border-radius:5px;width:auto;height:30px;margin:.5rem;padding:.3rem .5rem}a.svelte-1vox0mn:hover{transition:ease;cursor:pointer;background:var(--black);border-color:white;color:white}",
  map: `{"version":3,"file":"SiteGridModalContent.svelte","sources":["SiteGridModalContent.svelte"],"sourcesContent":["<script lang=\\"ts\\">;\\nimport { formatDate } from '$lib/utils';\\nexport let content;\\nlet { admin_url, custom_domain, default_domain, name, created_at, ssl, updated_at } = content;\\n</script>\\n\\n<div id=\\"modal-content\\">\\n  <h1>{name}</h1>\\n  <div>\\n    <p>Last Updated: {formatDate(updated_at)}</p>\\n    <p>Created At: {formatDate(created_at)}</p>\\n  </div>\\n  \\n  <a href={admin_url}>Netlify Admin</a>\\n</div>\\n\\n\\n<style>\\n  a {\\n    text-align: center;\\n    background: transparent;\\n    border: 2px solid var(--black);\\n    border-radius: 5px;\\n    width: auto;\\n    height: 30px;\\n    margin: .5rem;\\n    padding: .3rem .5rem;\\n  }\\n\\n  a:hover {\\n    transition: ease;\\n    cursor: pointer;\\n    background: var(--black);\\n    border-color: white;\\n    color: white;\\n  }\\n</style>"],"names":[],"mappings":"AAkBE,CAAC,eAAC,CAAC,AACD,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,WAAW,CACvB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,OAAO,CAAC,CAC9B,aAAa,CAAE,GAAG,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,KAAK,CACb,OAAO,CAAE,KAAK,CAAC,KAAK,AACtB,CAAC,AAED,gBAAC,MAAM,AAAC,CAAC,AACP,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,IAAI,OAAO,CAAC,CACxB,YAAY,CAAE,KAAK,CACnB,KAAK,CAAE,KAAK,AACd,CAAC"}`
};
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {content} = $$props;
  let {admin_url, custom_domain, default_domain, name, created_at, ssl, updated_at} = content;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  $$result.css.add(css$9);
  return `<div id="${"modal-content"}"><h1>${escape2(name)}</h1>
  <div><p>Last Updated: ${escape2(formatDate(updated_at))}</p>
    <p>Created At: ${escape2(formatDate(created_at))}</p></div>
  
  <a${add_attribute("href", admin_url, 0)} class="${"svelte-1vox0mn"}">Netlify Admin</a>
</div>`;
});
var css$8 = {
  code: "button.svelte-z0451e{text-align:center;background:transparent;border:2px solid var(--black);border-radius:5px;width:80%;height:30px;margin:.5rem auto}button.svelte-z0451e:hover{transition:ease;cursor:pointer;background:var(--black);border-color:white;color:white}",
  map: `{"version":3,"file":"SiteGridModal.svelte","sources":["SiteGridModal.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let content;\\nimport { getContext } from 'svelte';\\nimport Content from './SiteGridModalContent.svelte';\\nconst { open } = getContext('simple-modal');\\nconst show = () => {\\n    open(Content, { content: content });\\n};\\n</script>\\n\\n<button on:click={show}>Details...</button>\\n\\n<style>\\n  button {\\n    text-align: center;\\n    background: transparent;\\n    border: 2px solid var(--black);\\n    border-radius: 5px;\\n    width: 80%;\\n    height: 30px;\\n    margin: .5rem auto;\\n  }\\n\\n  button:hover {\\n    transition: ease;\\n    cursor: pointer;\\n    background: var(--black);\\n    border-color: white;\\n    color: white;\\n  }\\n</style>"],"names":[],"mappings":"AAYE,MAAM,cAAC,CAAC,AACN,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,WAAW,CACvB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,OAAO,CAAC,CAC9B,aAAa,CAAE,GAAG,CAClB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,KAAK,CAAC,IAAI,AACpB,CAAC,AAED,oBAAM,MAAM,AAAC,CAAC,AACZ,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,IAAI,OAAO,CAAC,CACxB,YAAY,CAAE,KAAK,CACnB,KAAK,CAAE,KAAK,AACd,CAAC"}`
};
var SiteGridModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {content} = $$props;
  getContext("simple-modal");
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  $$result.css.add(css$8);
  return `<button class="${"svelte-z0451e"}">Details...</button>`;
});
var css$7 = {
  code: ".centerme{display:flex;align-items:center;justify-content:space-between}span.svelte-tna1ib{font-size:1.5rem}#site-grid.svelte-tna1ib{display:flex;gap:2rem;flex-wrap:wrap;justify-content:center;margin:0 auto}.s-card.svelte-tna1ib{width:300px;height:325px;background-color:#96C5CE8F;border-radius:15px;box-shadow:3px 3px 15px var(--shadow)}img.svelte-tna1ib{max-width:300px;border-radius:15px 15px 0 0;margin-bottom:0}.text-wrap.svelte-tna1ib{padding:.5rem;display:flex;flex-direction:column;align-content:center;justify-content:center}p.svelte-tna1ib{margin:0}",
  map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script lang=\\"ts\\">var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\\n    return new (P || (P = Promise))(function (resolve, reject) {\\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\\n        function rejected(value) { try { step(generator[\\"throw\\"](value)); } catch (e) { reject(e); } }\\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\\n    });\\n};\\nvar _a;\\n;\\nimport { session } from '$app/stores';\\nimport { client } from '$lib/components/auth/SanityClient';\\nimport { onMount } from 'svelte';\\nimport { formatDate } from '$lib/utils';\\nimport { fade } from 'svelte/transition';\\nimport Loading from '$lib/components/ui/Loading.svelte';\\nimport Modal from 'svelte-simple-modal';\\nimport SiteGridModal from '$lib/components/ui/modal_content/SiteGridModal.svelte';\\nlet data;\\nconst uuid = (_a = $session.user) === null || _a === void 0 ? void 0 : _a.id;\\nconst handler = (token) => __awaiter(void 0, void 0, void 0, function* () {\\n    const x = yield fetch(\`/.netlify/functions/getSites?token=\${token}\`, { headers: { accept: \\"Accept: application/json\\" } });\\n    const json = yield x.json();\\n    data.sites = yield json.msg;\\n});\\nconst load = () => __awaiter(void 0, void 0, void 0, function* () {\\n    const query = \`*[_type==\\"client\\" && supa_id==\\"\${!uuid ? ' ' : uuid}\\"]{ businessName, email, ownerName, phone, netlify_token }\`;\\n    let res = yield client.fetch(query);\\n    data = yield res.shift();\\n    yield handler(data.netlify_token);\\n});\\nonMount(() => __awaiter(void 0, void 0, void 0, function* () { return yield load(); }));\\n</script>\\n\\n{#if data && data.sites}\\n<div style=\\" width: 100%; display: flex; align-items: center; justify-content: space-between;\\">\\n  <h1>Howdy, {data.ownerName} <span>of {data.businessName}</span></h1>\\n</div>\\n  <div id=\\"site-grid\\">\\n    {#each data.sites as s}\\n      <div class=\\"s-card\\" transition:fade>\\n        {#if s.screenshot_url}\\n          <img src={s.screenshot_url} alt=\\"A Screenshot of the Site\\" style=\\"margin-bottom: -.5rem; height: 187.5px;\\">\\n        {:else}\\n          <div style=\\"width: 300px; height: 187.5px; background-color: gray; display: flex; align-items: center; justify-content: center; border-radius: 15px 15px 0 0;\\">\\n            <p style=\\"color: white;\\">No screenshot available</p>\\n          </div>\\n        {/if}\\n        <div class=\\"text-wrap\\">\\n          <a href=\\"https://{s.custom_domain || s.default_domain}\\">{s.name}</a>\\n          \\n          <div class=\\"centerme\\">\\n            <p>Updated: {formatDate(s.updated_at)}</p>\\n            <p>SSL Status: <span style=\\"font-size: .8rem;\\">{s.ssl ? '\u2705 ' : '\u274C' }</span></p>\\n          </div>\\n          <Modal>\\n            <SiteGridModal content={s}/>\\n          </Modal>\\n        </div>\\n      </div>\\n    {/each}\\n  </div>\\n{:else}\\n  <Loading />\\n{/if}\\n\\n<style>\\n  :global(.centerme) {\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n  }\\n\\n  span {\\n    font-size: 1.5rem;\\n  }\\n\\n  #site-grid {\\n    display: flex;\\n    gap: 2rem;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n    margin: 0 auto;\\n  }\\n\\n  .s-card {\\n    width: 300px;\\n    height: 325px;\\n    background-color: #96C5CE8F;\\n    border-radius: 15px;\\n    box-shadow: 3px 3px 15px var(--shadow);\\n  }\\n\\n  img {\\n    max-width: 300px;\\n    border-radius: 15px 15px 0 0;\\n    margin-bottom: 0;\\n  }\\n\\n  .text-wrap {\\n    padding: .5rem;\\n    display: flex;\\n    flex-direction: column;\\n    align-content: center;\\n    justify-content: center;\\n  }\\n\\n  p { margin: 0; }\\n</style>"],"names":[],"mappings":"AAoEU,SAAS,AAAE,CAAC,AAClB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,aAAa,AAChC,CAAC,AAED,IAAI,cAAC,CAAC,AACJ,SAAS,CAAE,MAAM,AACnB,CAAC,AAED,UAAU,cAAC,CAAC,AACV,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,CACT,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,CAAC,CAAC,IAAI,AAChB,CAAC,AAED,OAAO,cAAC,CAAC,AACP,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,gBAAgB,CAAE,SAAS,CAC3B,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,IAAI,QAAQ,CAAC,AACxC,CAAC,AAED,GAAG,cAAC,CAAC,AACH,SAAS,CAAE,KAAK,CAChB,aAAa,CAAE,IAAI,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAC5B,aAAa,CAAE,CAAC,AAClB,CAAC,AAED,UAAU,cAAC,CAAC,AACV,OAAO,CAAE,KAAK,CACd,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,aAAa,CAAE,MAAM,CACrB,eAAe,CAAE,MAAM,AACzB,CAAC,AAED,CAAC,cAAC,CAAC,AAAC,MAAM,CAAE,CAAC,AAAE,CAAC"}`
};
var Dashboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  var __awaiter = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve2) {
        resolve2(value);
      });
    }
    return new (P || (P = Promise))(function(resolve2, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var _a;
  let data;
  const uuid = (_a = $session.user) === null || _a === void 0 ? void 0 : _a.id;
  const handler2 = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const x = yield fetch(`/.netlify/functions/getSites?token=${token}`, {
      headers: {accept: "Accept: application/json"}
    });
    const json = yield x.json();
    data.sites = yield json.msg;
  });
  const load2 = () => __awaiter(void 0, void 0, void 0, function* () {
    const query = `*[_type=="client" && supa_id=="${!uuid ? " " : uuid}"]{ businessName, email, ownerName, phone, netlify_token }`;
    let res = yield client.fetch(query);
    data = yield res.shift();
    yield handler2(data.netlify_token);
  });
  onMount(() => __awaiter(void 0, void 0, void 0, function* () {
    return yield load2();
  }));
  $$result.css.add(css$7);
  $$unsubscribe_session();
  return `${data && data.sites ? `<div style="${" width: 100%; display: flex; align-items: center; justify-content: space-between;"}"><h1>Howdy, ${escape2(data.ownerName)} <span class="${"svelte-tna1ib"}">of ${escape2(data.businessName)}</span></h1></div>
  <div id="${"site-grid"}" class="${"svelte-tna1ib"}">${each(data.sites, (s2) => `<div class="${"s-card svelte-tna1ib"}">${s2.screenshot_url ? `<img${add_attribute("src", s2.screenshot_url, 0)} alt="${"A Screenshot of the Site"}" style="${"margin-bottom: -.5rem; height: 187.5px;"}" class="${"svelte-tna1ib"}">` : `<div style="${"width: 300px; height: 187.5px; background-color: gray; display: flex; align-items: center; justify-content: center; border-radius: 15px 15px 0 0;"}"><p style="${"color: white;"}" class="${"svelte-tna1ib"}">No screenshot available</p>
          </div>`}
        <div class="${"text-wrap svelte-tna1ib"}"><a href="${"https://" + escape2(s2.custom_domain || s2.default_domain)}">${escape2(s2.name)}</a>
          
          <div class="${"centerme"}"><p class="${"svelte-tna1ib"}">Updated: ${escape2(formatDate(s2.updated_at))}</p>
            <p class="${"svelte-tna1ib"}">SSL Status: <span style="${"font-size: .8rem;"}" class="${"svelte-tna1ib"}">${escape2(s2.ssl ? "\u2705 " : "\u274C")}</span></p></div>
          ${validate_component(Modal, "Modal").$$render($$result, {}, {}, {
    default: () => `${validate_component(SiteGridModal, "SiteGridModal").$$render($$result, {content: s2}, {}, {})}
          `
  })}</div>
      </div>`)}</div>` : `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}`}`;
});
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Dashboard
});
var Contracts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  var __awaiter = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve2) {
        resolve2(value);
      });
    }
    return new (P || (P = Promise))(function(resolve2, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  let data;
  const load2 = () => __awaiter(void 0, void 0, void 0, function* () {
    const query = `*[_type=="client" && supa_id=="${$session.user.id}"]{ contracts }`;
    yield client.fetch(query).then((res) => {
      data = res[0];
      console.log(data);
    });
  });
  load2();
  $$unsubscribe_session();
  return `<h1>Contracts</h1>
<p>click the link to open the PDF in a new tab where you can download it.</p>
${data ? `<table><tr><th>Name</th>
      <th>Date Signed</th>
      <th>Open</th></tr>
    ${each(data.contracts, ({asset: {_ref}, name, dateSigned}) => `<tr><td>${escape2(name)}</td>
        <td>${escape2(formatDate(dateSigned))}</td>
        <td><a${add_attribute("href", makeUrl(_ref), 0)} target="${"_blank"}">click here</a></td> 
      </tr>`)}</table>` : `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}`}`;
});
var contracts = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Contracts
});
var css$6 = {
  code: "table{width:100%;text-align:left}table, th, td{border-collapse:collapse}th, td{padding:.3rem;width:max-content}td{border-left:1px solid #999E9063}td:first-child{border-left:none}th{background-color:#96C5CE}tr:nth-child(odd){background-color:#e6ebec}",
  map: `{"version":3,"file":"invoices.svelte","sources":["invoices.svelte"],"sourcesContent":["<script lang=\\"ts\\">var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\\n    return new (P || (P = Promise))(function (resolve, reject) {\\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\\n        function rejected(value) { try { step(generator[\\"throw\\"](value)); } catch (e) { reject(e); } }\\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\\n    });\\n};\\nimport { session } from '$app/stores';\\nimport { client, options, makeUrl } from '$lib/components/auth/SanityClient';\\nimport Loading from '$lib/components/ui/Loading.svelte';\\nlet data;\\nconst load = () => __awaiter(void 0, void 0, void 0, function* () {\\n    const query = \`*[_type==\\"client\\" && supa_id==\\"\${$session.user.id}\\"]{ invoices }\`;\\n    yield client.fetch(query)\\n        .then(res => {\\n        data = res[0];\\n    });\\n});\\nload();\\n</script>\\n\\n<h1>Invoices</h1>\\n<p>click the link to open the PDF in a new tab where you can download it.</p>\\n{#if data}\\n  <table>\\n    <tr>\\n      <th>Number</th>\\n      <th>Amount Due</th>\\n      <th>Paid?</th>\\n      <th>Open</th>\\n    </tr>\\n    {#each data.invoices as { asset: {_ref}, number, amountDue, outstanding}}\\n      <tr>\\n        <td>{ number }</td>\\n        <td>\${amountDue}</td>\\n        <td>{outstanding ? '\u274C' : '\u2705' }</td>\\n        <td><a href={makeUrl(_ref)} target=\\"_blank\\">click here</a></td> \\n      </tr>\\n    {/each}\\n  </table>\\n{:else}\\n  <Loading />\\n{/if}\\n\\n<style>\\n  :global(table) {\\n    width: 100%;\\n    text-align: left;\\n  }\\n\\n  :global(table, th, td) {\\n    border-collapse: collapse;\\n  }\\n\\n  :global(th, td) {\\n    padding:.3rem;\\n    width: max-content;\\n  }\\n\\n  :global(td) {\\n    border-left: 1px solid #999E9063;\\n  }\\n\\n  :global(td:first-child) {\\n    border-left: none;\\n  }\\n\\n  :global(th) {\\n    background-color: #96C5CE;\\n  }\\n\\n  :global(tr:nth-child(odd)) {\\n    background-color: #e6ebec;\\n  }\\n</style>"],"names":[],"mappings":"AA+CU,KAAK,AAAE,CAAC,AACd,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IAAI,AAClB,CAAC,AAEO,aAAa,AAAE,CAAC,AACtB,eAAe,CAAE,QAAQ,AAC3B,CAAC,AAEO,MAAM,AAAE,CAAC,AACf,QAAQ,KAAK,CACb,KAAK,CAAE,WAAW,AACpB,CAAC,AAEO,EAAE,AAAE,CAAC,AACX,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,SAAS,AAClC,CAAC,AAEO,cAAc,AAAE,CAAC,AACvB,WAAW,CAAE,IAAI,AACnB,CAAC,AAEO,EAAE,AAAE,CAAC,AACX,gBAAgB,CAAE,OAAO,AAC3B,CAAC,AAEO,iBAAiB,AAAE,CAAC,AAC1B,gBAAgB,CAAE,OAAO,AAC3B,CAAC"}`
};
var Invoices = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  var __awaiter = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve2) {
        resolve2(value);
      });
    }
    return new (P || (P = Promise))(function(resolve2, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  let data;
  const load2 = () => __awaiter(void 0, void 0, void 0, function* () {
    const query = `*[_type=="client" && supa_id=="${$session.user.id}"]{ invoices }`;
    yield client.fetch(query).then((res) => {
      data = res[0];
    });
  });
  load2();
  $$result.css.add(css$6);
  $$unsubscribe_session();
  return `<h1>Invoices</h1>
<p>click the link to open the PDF in a new tab where you can download it.</p>
${data ? `<table><tr><th>Number</th>
      <th>Amount Due</th>
      <th>Paid?</th>
      <th>Open</th></tr>
    ${each(data.invoices, ({asset: {_ref}, number, amountDue, outstanding}) => `<tr><td>${escape2(number)}</td>
        <td>$${escape2(amountDue)}</td>
        <td>${escape2(outstanding ? "\u274C" : "\u2705")}</td>
        <td><a${add_attribute("href", makeUrl(_ref), 0)} target="${"_blank"}">click here</a></td> 
      </tr>`)}</table>` : `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}`}`;
});
var invoices = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Invoices
});
var CopyToClipboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {text} = $$props;
  const dispatch = createEventDispatcher();
  const copy = () => {
    navigator.clipboard.writeText(text).then(() => dispatch("copy", text), (e) => dispatch("fail"));
  };
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `${slots.default ? slots.default({copy}) : ``}`;
});
var notification = writable2();
var css$5 = {
  code: '.toasts{list-style:none;position:fixed;top:0;right:0;padding:0;margin:0;z-index:9999}.svelte-riwzrl.toasts>.toast.svelte-riwzrl.svelte-riwzrl{position:relative;margin:1vh 1vw;min-width:40vw;position:relative;animation:svelte-riwzrl-animate-in 600ms forwards;color:#fff}.svelte-riwzrl.toasts>.toast.svelte-riwzrl>.content.svelte-riwzrl{padding:1vw;display:block;font-weight:500}.svelte-riwzrl.toasts>.toast.svelte-riwzrl>.progress.svelte-riwzrl{position:absolute;bottom:0;background-color:rgb(0, 0, 0, 0.3);height:6px;width:100%;animation-name:svelte-riwzrl-shrink;animation-timing-function:linear;animation-fill-mode:forwards}.svelte-riwzrl.toasts>.toast.svelte-riwzrl.svelte-riwzrl:before,.svelte-riwzrl.toasts>.toast.svelte-riwzrl.svelte-riwzrl:after{content:"";position:absolute;z-index:-1;top:50%;bottom:0;left:1vw;right:1vw;border-radius:100px / 10px}.svelte-riwzrl.toasts>.toast.svelte-riwzrl.svelte-riwzrl:after{right:1vw;left:auto;transform:skew(8deg) rotate(3deg)}@keyframes svelte-riwzrl-animate-in{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215, .61, .355, 1);animation-timing-function:cubic-bezier(.215, .61, .355, 1)}0%{opacity:0;transform:translate3d(3000px, 0, 0)}60%{opacity:1;transform:translate3d(-25px, 0, 0)}75%{transform:translate3d(10px, 0, 0)}90%{transform:translate3d(-5px, 0, 0)}to{transform:none}}@keyframes svelte-riwzrl-shrink{0%{width:98vw}100%{width:0}}@media(min-width: 480px){@keyframes svelte-riwzrl-animate-in{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215, .61, .355, 1);animation-timing-function:cubic-bezier(.215, .61, .355, 1)}0%{opacity:0;transform:translate3d(3000px, 0, 0)}60%{opacity:1;transform:translate3d(-25px, 0, 0)}75%{transform:translate3d(10px, 0, 0)}90%{transform:translate3d(-5px, 0, 0)}to{transform:none}}@keyframes svelte-riwzrl-shrink{0%{width:40vw}100%{width:0}}}',
  map: `{"version":3,"file":"Notifications.svelte","sources":["Notifications.svelte"],"sourcesContent":["<ul class=\\"toasts\\">\\n\\t{#each toasts as toast (toast.id)}\\n\\t\\t<li class=\\"toast\\" style=\\"background: {toast.background};\\" out:animateOut>\\n\\t\\t\\t<div class=\\"content\\">\\n\\t\\t\\t\\t{toast.msg}\\n\\t\\t\\t</div>\\n\\t\\t\\t<div \\n        class=\\"progress\\" \\n        style=\\"animation-duration: {toast.timeout}ms;\\"\\n        on:animationend={() => removeToast(toast.id) }>\\n\\t\\t\\t</div>\\n\\t\\t</li>\\t\\n\\t{/each}\\n</ul>\\n\\n<style>\\n\\t:global(.toasts) {\\n\\t\\tlist-style: none;\\n\\t\\tposition: fixed;\\n\\t\\ttop: 0;\\n\\t\\tright: 0;\\n\\t\\tpadding: 0;\\n\\t\\tmargin: 0;\\n\\t\\tz-index: 9999;\\n\\t}\\n\\t\\n\\t:global(.toasts) > .toast {\\n\\t\\tposition: relative;\\n\\t\\tmargin: 1vh 1vw;\\n\\t\\tmin-width: 40vw;\\n\\t\\tposition: relative;\\n\\t\\tanimation: animate-in 600ms forwards;\\n\\t\\tcolor: #fff;\\n\\t}\\n\\t\\n\\t:global(.toasts) > .toast > .content {\\n\\t\\tpadding: 1vw;\\n\\t\\tdisplay: block;\\n\\t\\tfont-weight: 500;\\n\\t}\\n\\t\\n\\t:global(.toasts) > .toast > .progress {\\n\\t\\tposition: absolute;\\n\\t\\tbottom: 0;\\n\\t\\tbackground-color: rgb(0, 0, 0, 0.3);\\n\\t\\theight: 6px;\\n    width: 100%;\\n\\t  animation-name: shrink;\\n\\t  animation-timing-function: linear;\\n\\t  animation-fill-mode: forwards;\\n\\t}\\n\\t\\n\\t:global(.toasts) > .toast:before,\\n\\t:global(.toasts) > .toast:after {\\n\\t\\t\\tcontent:\\"\\";\\n\\t\\t\\tposition:absolute;\\n\\t\\t\\tz-index:-1;\\n\\t\\t\\ttop:50%;\\n\\t\\t\\tbottom:0;\\n\\t\\t\\tleft:1vw;\\n\\t\\t\\tright:1vw;\\n\\t\\t\\tborder-radius:100px / 10px;\\n\\t}\\n\\t\\n\\t:global(.toasts) > .toast:after {\\n\\t\\t\\tright: 1vw;\\n\\t\\t\\tleft: auto;\\n\\t\\t\\ttransform:skew(8deg) rotate(3deg);\\n\\t}\\n\\n\\t@keyframes animate-in {\\n\\t\\t0%,\\n\\t\\t60%,\\n\\t\\t75%,\\n\\t\\t90%,\\n\\t\\tto {\\n\\t\\t\\t-webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);\\n\\t\\t\\tanimation-timing-function: cubic-bezier(.215, .61, .355, 1);\\n\\t\\t}\\n\\n\\t\\t0% {\\n\\t\\t\\topacity: 0;\\n\\t\\t\\ttransform: translate3d(3000px, 0, 0);\\n\\t\\t}\\n\\n\\t\\t60% {\\n\\t\\t\\topacity: 1;\\n\\t\\t\\ttransform: translate3d(-25px, 0, 0);\\n\\t\\t}\\n\\n\\t\\t75% {\\n\\t\\t\\ttransform: translate3d(10px, 0, 0);\\n\\t\\t}\\n\\n\\t\\t90% {\\n\\t\\t\\ttransform: translate3d(-5px, 0, 0);\\n\\t\\t}\\n\\n\\t\\tto {\\n\\t\\t\\ttransform: none;\\n\\t\\t}\\n\\t}\\n\\n\\t@keyframes shrink { \\n\\t\\t0% { \\n\\t\\t\\twidth: 98vw; \\n\\t\\t}\\n\\t\\t100% { \\n\\t\\t\\twidth: 0; \\n\\t\\t}\\n\\t}\\n\\n\\t@media (min-width: 480px) {\\n\\t\\t@keyframes animate-in {\\n\\t\\t\\t0%,\\n\\t\\t\\t60%,\\n\\t\\t\\t75%,\\n\\t\\t\\t90%,\\n\\t\\t\\tto {\\n\\t\\t\\t\\t-webkit-animation-timing-function: cubic-bezier(.215, .61, .355, 1);\\n\\t\\t\\t\\tanimation-timing-function: cubic-bezier(.215, .61, .355, 1);\\n\\t\\t\\t}\\n\\n\\t\\t\\t0% {\\n\\t\\t\\t\\topacity: 0;\\n\\t\\t\\t\\ttransform: translate3d(3000px, 0, 0);\\n\\t\\t\\t}\\n\\n\\t\\t\\t60% {\\n\\t\\t\\t\\topacity: 1;\\n\\t\\t\\t\\ttransform: translate3d(-25px, 0, 0);\\n\\t\\t\\t}\\n\\n\\t\\t\\t75% {\\n\\t\\t\\t\\ttransform: translate3d(10px, 0, 0);\\n\\t\\t\\t}\\n\\n\\t\\t\\t90% {\\n\\t\\t\\t\\ttransform: translate3d(-5px, 0, 0);\\n\\t\\t\\t}\\n\\n\\t\\t\\tto {\\n\\t\\t\\t\\ttransform: none;\\n\\t\\t\\t}\\n\\t\\t}\\n\\t\\n\\t\\t@keyframes shrink { \\n\\t\\t\\t0% { \\n\\t\\t\\t\\twidth: 40vw;\\n\\t\\t\\t}\\n\\t\\t\\t100% { \\n\\t\\t\\t\\twidth: 0; \\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n</style>\\n\\n<script>\\n  import { notification } from './store.js'\\n  import { onMount, onDestroy } from 'svelte'\\n\\n\\texport let themes = {\\n\\t\\tdanger: '#bb2124',\\n\\t\\tsuccess: '#22bb33',\\n\\t\\twarning: '#f0ad4e',\\n\\t\\tinfo: '#5bc0de',\\n\\t\\tdefault: '#aaaaaa'\\n  }\\n\\n  export let timeout = 3000\\n\\n\\tlet count = 0\\n\\tlet toasts = [ ]\\n  let unsubscribe\\n\\n\\tfunction animateOut(node, { delay = 0, duration = 1000 }) {\\n\\t\\tfunction vhTOpx (value) {\\n\\t\\t\\tvar w = window,\\n\\t\\t\\t\\td = document,\\n\\t\\t\\t\\te = d.documentElement,\\n\\t\\t\\t\\tg = d.getElementsByTagName('body')[0],\\n\\t\\t\\t\\tx = w.innerWidth || e.clientWidth || g.clientWidth,\\n\\t\\t\\t\\ty = w.innerHeight|| e.clientHeight|| g.clientHeight;\\n\\n\\t\\t\\treturn (y*value)/100;\\n\\t\\t}\\n\\t\\t\\n\\t\\treturn {\\n\\t\\t\\tdelay,\\n\\t\\t\\tduration,\\n\\t\\t\\tcss: t => \`opacity: \${(t-.7) * 1}; transform-origin: top right;\`\\n\\t\\t}\\n\\t}\\n\\n\\tfunction createToast (msg, theme, to) {\\n\\t\\tconst background = themes[theme] || themes['default']\\n\\t\\ttoasts = [{\\n\\t\\t\\tid: count,\\n\\t\\t\\tmsg, \\n\\t\\t\\tbackground, \\n\\t\\t\\ttimeout: to || timeout,\\n\\t\\t\\twidth: '100%'\\n\\t\\t}, ...toasts];\\n\\t\\tcount = count + 1\\n  }\\n  \\n  unsubscribe = notification.subscribe(value => {\\n    if (!value) { return }\\n    createToast(value.message, value.type, value.timeout)\\n    notification.set()\\n  })\\n  \\n  onDestroy(unsubscribe)\\n\\t\\n\\tfunction removeToast (id) { \\n\\t\\ttoasts = toasts.filter(t => t.id != id)\\n\\t}\\n</script>\\n"],"names":[],"mappings":"AAgBS,OAAO,AAAE,CAAC,AACjB,UAAU,CAAE,IAAI,CAChB,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,CAAC,CACR,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,IAAI,AACd,CAAC,cAEO,OAAO,AAAC,CAAG,MAAM,4BAAC,CAAC,AAC1B,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,GAAG,CAAC,GAAG,CACf,SAAS,CAAE,IAAI,CACf,QAAQ,CAAE,QAAQ,CAClB,SAAS,CAAE,wBAAU,CAAC,KAAK,CAAC,QAAQ,CACpC,KAAK,CAAE,IAAI,AACZ,CAAC,cAEO,OAAO,AAAC,CAAG,oBAAM,CAAG,QAAQ,cAAC,CAAC,AACrC,OAAO,CAAE,GAAG,CACZ,OAAO,CAAE,KAAK,CACd,WAAW,CAAE,GAAG,AACjB,CAAC,cAEO,OAAO,AAAC,CAAG,oBAAM,CAAG,SAAS,cAAC,CAAC,AACtC,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,CAAC,CACT,gBAAgB,CAAE,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACnC,MAAM,CAAE,GAAG,CACT,KAAK,CAAE,IAAI,CACZ,cAAc,CAAE,oBAAM,CACtB,yBAAyB,CAAE,MAAM,CACjC,mBAAmB,CAAE,QAAQ,AAC/B,CAAC,cAEO,OAAO,AAAC,CAAG,kCAAM,OAAO,eACxB,OAAO,AAAC,CAAG,kCAAM,MAAM,AAAC,CAAC,AAC/B,QAAQ,EAAE,CACV,SAAS,QAAQ,CACjB,QAAQ,EAAE,CACV,IAAI,GAAG,CACP,OAAO,CAAC,CACR,KAAK,GAAG,CACR,MAAM,GAAG,CACT,cAAc,KAAK,CAAC,CAAC,CAAC,IAAI,AAC5B,CAAC,cAEO,OAAO,AAAC,CAAG,kCAAM,MAAM,AAAC,CAAC,AAC/B,KAAK,CAAE,GAAG,CACV,IAAI,CAAE,IAAI,CACV,UAAU,KAAK,IAAI,CAAC,CAAC,OAAO,IAAI,CAAC,AACnC,CAAC,AAED,WAAW,wBAAW,CAAC,AACtB,EAAE,CACF,GAAG,CACH,GAAG,CACH,GAAG,CACH,EAAE,AAAC,CAAC,AACH,iCAAiC,CAAE,aAAa,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CACnE,yBAAyB,CAAE,aAAa,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,AAC5D,CAAC,AAED,EAAE,AAAC,CAAC,AACH,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,YAAY,MAAM,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AACrC,CAAC,AAED,GAAG,AAAC,CAAC,AACJ,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,YAAY,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AACpC,CAAC,AAED,GAAG,AAAC,CAAC,AACJ,SAAS,CAAE,YAAY,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AACnC,CAAC,AAED,GAAG,AAAC,CAAC,AACJ,SAAS,CAAE,YAAY,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AACnC,CAAC,AAED,EAAE,AAAC,CAAC,AACH,SAAS,CAAE,IAAI,AAChB,CAAC,AACF,CAAC,AAED,WAAW,oBAAO,CAAC,AAClB,EAAE,AAAC,CAAC,AACH,KAAK,CAAE,IAAI,AACZ,CAAC,AACD,IAAI,AAAC,CAAC,AACL,KAAK,CAAE,CAAC,AACT,CAAC,AACF,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,WAAW,wBAAW,CAAC,AACtB,EAAE,CACF,GAAG,CACH,GAAG,CACH,GAAG,CACH,EAAE,AAAC,CAAC,AACH,iCAAiC,CAAE,aAAa,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CACnE,yBAAyB,CAAE,aAAa,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,AAC5D,CAAC,AAED,EAAE,AAAC,CAAC,AACH,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,YAAY,MAAM,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AACrC,CAAC,AAED,GAAG,AAAC,CAAC,AACJ,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,YAAY,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AACpC,CAAC,AAED,GAAG,AAAC,CAAC,AACJ,SAAS,CAAE,YAAY,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AACnC,CAAC,AAED,GAAG,AAAC,CAAC,AACJ,SAAS,CAAE,YAAY,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AACnC,CAAC,AAED,EAAE,AAAC,CAAC,AACH,SAAS,CAAE,IAAI,AAChB,CAAC,AACF,CAAC,AAED,WAAW,oBAAO,CAAC,AAClB,EAAE,AAAC,CAAC,AACH,KAAK,CAAE,IAAI,AACZ,CAAC,AACD,IAAI,AAAC,CAAC,AACL,KAAK,CAAE,CAAC,AACT,CAAC,AACF,CAAC,AACF,CAAC"}`
};
var Notifications = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {themes = {
    danger: "#bb2124",
    success: "#22bb33",
    warning: "#f0ad4e",
    info: "#5bc0de",
    default: "#aaaaaa"
  }} = $$props;
  let {timeout = 3e3} = $$props;
  let count = 0;
  let toasts = [];
  let unsubscribe;
  function createToast(msg, theme, to) {
    const background = themes[theme] || themes["default"];
    toasts = [
      {
        id: count,
        msg,
        background,
        timeout: to || timeout,
        width: "100%"
      },
      ...toasts
    ];
    count = count + 1;
  }
  unsubscribe = notification.subscribe((value) => {
    if (!value) {
      return;
    }
    createToast(value.message, value.type, value.timeout);
    notification.set();
  });
  onDestroy(unsubscribe);
  if ($$props.themes === void 0 && $$bindings.themes && themes !== void 0)
    $$bindings.themes(themes);
  if ($$props.timeout === void 0 && $$bindings.timeout && timeout !== void 0)
    $$bindings.timeout(timeout);
  $$result.css.add(css$5);
  return `<ul class="${"toasts svelte-riwzrl"}">${each(toasts, (toast) => `<li class="${"toast svelte-riwzrl"}" style="${"background: " + escape2(toast.background) + ";"}"><div class="${"content svelte-riwzrl"}">${escape2(toast.msg)}</div>
			<div class="${"progress svelte-riwzrl"}" style="${"animation-duration: " + escape2(toast.timeout) + "ms;"}"></div>
		</li>`)}
</ul>`;
});
var css$4 = {
  code: ".copy.svelte-tqo5z8.svelte-tqo5z8:hover{cursor:pointer}h1.svelte-tqo5z8.svelte-tqo5z8{text-align:start}.colorGrid.svelte-tqo5z8.svelte-tqo5z8{display:grid;grid-template-columns:repeat(auto-fill, minmax(200px, 1fr))}.gridItem.svelte-tqo5z8.svelte-tqo5z8{margin:1rem;display:flex;flex-direction:column;align-items:center;line-height:1.2}.rnd.svelte-tqo5z8.svelte-tqo5z8{width:100px;height:100px;border-radius:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;margin:1rem}.id.svelte-tqo5z8.svelte-tqo5z8{font-size:4rem;color:#fff}.gridItem.svelte-tqo5z8>p.svelte-tqo5z8{font-size:1.5rem;margin:0.3rem auto}.desc{width:700px;max-width:100%;margin:2rem auto;font-size:1.3rem;line-height:1.25}",
  map: `{"version":3,"file":"Colors.svelte","sources":["Colors.svelte"],"sourcesContent":["<script lang=\\"ts\\">import CopyToClipboard from 'svelte-copy-to-clipboard';\\nimport { NotificationDisplay, notifier } from '@beyonk/svelte-notifications';\\nexport let colors;\\nexport let text;\\nconst handleSuccessfullyCopied = () => {\\n    // alert('successfully copied to clipboard!');\\n    notifier.success('Copied to Clipboard!');\\n};\\nconst handleFailedCopy = () => {\\n    alert('failed to copy :(');\\n};\\nlet themes = {\\n    // These are the defaults\\n    danger: '#f09292',\\n    success: '#9af092',\\n    default: '#aaaaaa' // relates to simply '.show()'\\n};\\n</script>\\n\\n<section class=\\"rowRev\\">\\n\\t<NotificationDisplay {themes} />\\n\\t<h1 class=\\"sectionTitle\\">Colors</h1>\\n\\t<div class=\\"colorGrid\\">\\n\\t\\t{#each colors as { id, hex, hsla }}\\n\\t\\t\\t<div class=\\"gridItem\\">\\n\\t\\t\\t\\t<div class=\\"rnd\\" style=\\"background-color:{hex};\\">\\n\\t\\t\\t\\t\\t<h2 class=\\"id\\">{id}</h2>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<CopyToClipboard\\n\\t\\t\\t\\t\\ttext={hex}\\n\\t\\t\\t\\t\\ton:copy={handleSuccessfullyCopied}\\n\\t\\t\\t\\t\\ton:fail={handleFailedCopy}\\n\\t\\t\\t\\t\\tlet:copy\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t<p on:click={copy} class=\\"copy\\">{hex}</p>\\n\\t\\t\\t\\t</CopyToClipboard>\\n\\t\\t\\t\\t<CopyToClipboard\\n\\t\\t\\t\\t\\ttext={hsla}\\n\\t\\t\\t\\t\\ton:copy={handleSuccessfullyCopied}\\n\\t\\t\\t\\t\\ton:fail={handleFailedCopy}\\n\\t\\t\\t\\t\\tlet:copy\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t<p on:click={copy} class=\\"copy\\">{hsla}</p>\\n\\t\\t\\t\\t</CopyToClipboard>\\n\\t\\t\\t</div>\\n\\t\\t{/each}\\n\\t</div>\\n\\t<p class=\\"desc\\">{text}</p>\\n</section>\\n\\n<style>\\n\\t.copy:hover {\\n\\t\\tcursor: pointer;\\n\\t}\\n\\th1 {\\n\\t\\ttext-align: start;\\n\\t}\\n\\t.colorGrid {\\n\\t\\tdisplay: grid;\\n\\t\\tgrid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\\n\\t}\\n\\t.gridItem {\\n\\t\\tmargin: 1rem;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\talign-items: center;\\n\\t\\tline-height: 1.2;\\n\\t}\\n\\t.rnd {\\n\\t\\twidth: 100px;\\n\\t\\theight: 100px;\\n\\t\\tborder-radius: 100%;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t\\tmargin: 1rem;\\n\\t}\\n\\t.id {\\n\\t\\tfont-size: 4rem;\\n\\t\\tcolor: #fff;\\n\\t}\\n\\t.gridItem > p {\\n\\t\\tfont-size: 1.5rem;\\n\\t\\tmargin: 0.3rem auto;\\n\\t}\\n\\t:global(.desc) {\\n\\t\\twidth: 700px;\\n\\t\\tmax-width: 100%;\\n\\t\\tmargin: 2rem auto;\\n\\t\\tfont-size: 1.3rem;\\n\\t\\tline-height: 1.25;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAmDC,iCAAK,MAAM,AAAC,CAAC,AACZ,MAAM,CAAE,OAAO,AAChB,CAAC,AACD,EAAE,4BAAC,CAAC,AACH,UAAU,CAAE,KAAK,AAClB,CAAC,AACD,UAAU,4BAAC,CAAC,AACX,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,SAAS,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,AAC7D,CAAC,AACD,SAAS,4BAAC,CAAC,AACV,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,GAAG,AACjB,CAAC,AACD,IAAI,4BAAC,CAAC,AACL,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,IAAI,AACb,CAAC,AACD,GAAG,4BAAC,CAAC,AACJ,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,IAAI,AACZ,CAAC,AACD,uBAAS,CAAG,CAAC,cAAC,CAAC,AACd,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,MAAM,CAAC,IAAI,AACpB,CAAC,AACO,KAAK,AAAE,CAAC,AACf,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,IAAI,CAAC,IAAI,CACjB,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,IAAI,AAClB,CAAC"}`
};
var Colors = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {colors} = $$props;
  let {text} = $$props;
  let themes = {
    danger: "#f09292",
    success: "#9af092",
    default: "#aaaaaa"
  };
  if ($$props.colors === void 0 && $$bindings.colors && colors !== void 0)
    $$bindings.colors(colors);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$4);
  return `<section class="${"rowRev"}">${validate_component(Notifications, "NotificationDisplay").$$render($$result, {themes}, {}, {})}
	<h1 class="${"sectionTitle svelte-tqo5z8"}">Colors</h1>
	<div class="${"colorGrid svelte-tqo5z8"}">${each(colors, ({id, hex, hsla}) => `<div class="${"gridItem svelte-tqo5z8"}"><div class="${"rnd svelte-tqo5z8"}" style="${"background-color:" + escape2(hex) + ";"}"><h2 class="${"id svelte-tqo5z8"}">${escape2(id)}</h2></div>
				${validate_component(CopyToClipboard, "CopyToClipboard").$$render($$result, {text: hex}, {}, {
    default: ({copy}) => `<p class="${"copy svelte-tqo5z8"}">${escape2(hex)}</p>
				`
  })}
				${validate_component(CopyToClipboard, "CopyToClipboard").$$render($$result, {text: hsla}, {}, {
    default: ({copy}) => `<p class="${"copy svelte-tqo5z8"}">${escape2(hsla)}</p>
				`
  })}
			</div>`)}</div>
	<p class="${"desc"}">${escape2(text)}</p>
</section>`;
});
var css$3 = {
  code: "#varsCont.svelte-102r7rc.svelte-102r7rc{display:flex;flex-wrap:wrap;gap:1rem;justify-content:center}.pipe.svelte-102r7rc.svelte-102r7rc{font-style:normal}.fontName.svelte-102r7rc:last-child .pipe.svelte-102r7rc{display:none}h1.svelte-102r7rc.svelte-102r7rc{text-align:start;margin:1rem 0}.fontName.svelte-102r7rc.svelte-102r7rc{font-size:3rem}.sectionTitle.svelte-102r7rc.svelte-102r7rc{text-align:left;margin-top:2rem}#fontWrapper.svelte-102r7rc.svelte-102r7rc{width:80%;margin:auto;margin-bottom:1rem}",
  map: `{"version":3,"file":"Fonts.svelte","sources":["Fonts.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let fonts;\\nexport let fontDesc;\\n</script>\\n\\n<section class=\\"row\\">\\n\\t<h1 class=\\"sectionTitle\\">Fonts</h1>\\n\\t<div id=\\"fontWrapper\\">\\n\\t\\t{#each fonts as { name, importLink, family, use, variations }}\\n\\t\\t\\t<div>\\n\\t\\t\\t\\t<h1 style=\\"border-bottom:3px solid var(--black);\\">{use}</h1>\\n\\t\\t\\t\\t<h1 class=\\"fontName\\" style=\\" {importLink} font-family:{family} \\">\\n\\t\\t\\t\\t\\t{name}\\n\\t\\t\\t\\t</h1>\\n\\t\\t\\t\\t<h1 style=\\"border-bottom:3px solid var(--black); text-align: end;\\">variations</h1>\\n\\t\\t\\t\\t<div id=\\"varsCont\\">\\n\\t\\t\\t\\t\\t{#each variations as { vname, weight, styles }}\\n\\t\\t\\t\\t\\t\\t<h1\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"fontName\\"\\n\\t\\t\\t\\t\\t\\t\\tstyle=\\" {importLink} font-family:{family}; font-weight:{weight}; margin-bottom: 0;\\"\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t{vname} <span class=\\"pipe\\"> | </span>\\n\\t\\t\\t\\t\\t\\t</h1>\\n\\t\\t\\t\\t\\t\\t{#each styles as s}\\n\\t\\t\\t\\t\\t\\t\\t<h1\\n\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"fontName\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tstyle=\\" {importLink} font-family:{family}; font-weight:{weight}; font-style:{s}; margin-bottom: 0;\\"\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t{vname + ' ' + s} <span class=\\"pipe\\"> | </span>\\n\\t\\t\\t\\t\\t\\t\\t</h1>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t{/each}\\n\\t</div>\\n\\t<p class=\\"desc\\">{fontDesc}</p>\\n</section>\\n\\n<style>\\n\\t#varsCont {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-wrap: wrap;\\n\\t\\tgap: 1rem;\\n\\t\\tjustify-content: center;\\n\\t}\\n\\n\\t.pipe {\\n\\t\\tfont-style: normal;\\n\\t}\\n\\n\\t.fontName:last-child .pipe {\\n\\t\\tdisplay: none;\\n\\t}\\n\\n\\th1 {\\n\\t\\ttext-align: start;\\n\\t\\tmargin: 1rem 0;\\n\\t}\\n\\n\\t.fontName {\\n\\t\\tfont-size: 3rem;\\n\\t}\\n\\n\\t.sectionTitle {\\n\\t\\ttext-align: left;\\n\\t\\tmargin-top: 2rem;\\n\\t}\\n\\n\\t#fontWrapper {\\n\\t\\twidth: 80%;\\n\\t\\tmargin: auto;\\n\\t\\tmargin-bottom: 1rem;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAuCC,SAAS,8BAAC,CAAC,AACV,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,GAAG,CAAE,IAAI,CACT,eAAe,CAAE,MAAM,AACxB,CAAC,AAED,KAAK,8BAAC,CAAC,AACN,UAAU,CAAE,MAAM,AACnB,CAAC,AAED,wBAAS,WAAW,CAAC,KAAK,eAAC,CAAC,AAC3B,OAAO,CAAE,IAAI,AACd,CAAC,AAED,EAAE,8BAAC,CAAC,AACH,UAAU,CAAE,KAAK,CACjB,MAAM,CAAE,IAAI,CAAC,CAAC,AACf,CAAC,AAED,SAAS,8BAAC,CAAC,AACV,SAAS,CAAE,IAAI,AAChB,CAAC,AAED,aAAa,8BAAC,CAAC,AACd,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,IAAI,AACjB,CAAC,AAED,YAAY,8BAAC,CAAC,AACb,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,AACpB,CAAC"}`
};
var Fonts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {fonts} = $$props;
  let {fontDesc} = $$props;
  if ($$props.fonts === void 0 && $$bindings.fonts && fonts !== void 0)
    $$bindings.fonts(fonts);
  if ($$props.fontDesc === void 0 && $$bindings.fontDesc && fontDesc !== void 0)
    $$bindings.fontDesc(fontDesc);
  $$result.css.add(css$3);
  return `<section class="${"row"}"><h1 class="${"sectionTitle svelte-102r7rc"}">Fonts</h1>
	<div id="${"fontWrapper"}" class="${"svelte-102r7rc"}">${each(fonts, ({name, importLink, family, use, variations}) => `<div><h1 style="${"border-bottom:3px solid var(--black);"}" class="${"svelte-102r7rc"}">${escape2(use)}</h1>
				<h1 class="${"fontName svelte-102r7rc"}" style="${" " + escape2(importLink) + " font-family:" + escape2(family) + " "}">${escape2(name)}</h1>
				<h1 style="${"border-bottom:3px solid var(--black); text-align: end;"}" class="${"svelte-102r7rc"}">variations</h1>
				<div id="${"varsCont"}" class="${"svelte-102r7rc"}">${each(variations, ({vname, weight, styles}) => `<h1 class="${"fontName svelte-102r7rc"}" style="${" " + escape2(importLink) + " font-family:" + escape2(family) + "; font-weight:" + escape2(weight) + "; margin-bottom: 0;"}">${escape2(vname)} <span class="${"pipe svelte-102r7rc"}">| </span></h1>
						${each(styles, (s2) => `<h1 class="${"fontName svelte-102r7rc"}" style="${" " + escape2(importLink) + " font-family:" + escape2(family) + "; font-weight:" + escape2(weight) + "; font-style:" + escape2(s2) + "; margin-bottom: 0;"}">${escape2(vname + " " + s2)} <span class="${"pipe svelte-102r7rc"}">| </span>
							</h1>`)}`)}</div>
			</div>`)}</div>
	<p class="${"desc"}">${escape2(fontDesc)}</p>
</section>`;
});
var css$2 = {
  code: ".sectionTitle.svelte-qa5fft{text-align:start}img.svelte-qa5fft{max-width:250px}#primary.svelte-qa5fft{display:flex;flex-direction:column;align-items:center;justify-content:center;margin:2rem auto}#logo-grid.svelte-qa5fft{width:100%;display:grid;grid-template-columns:repeat(auto-fill, minmax(250px, 1fr));grid-gap:2rem;grid-auto-rows:auto auto 500px;margin:0 auto}.grid-item.svelte-qa5fft{display:flex;flex-direction:column;align-items:center;justify-content:center;margin:0 auto;width:max-content}.dl.svelte-qa5fft{background:gray;border-radius:5px;width:100px;height:30px;color:white;text-decoration:none;text-align:center}.dl.svelte-qa5fft:hover{text-decoration:underline}",
  map: `{"version":3,"file":"Logos.svelte","sources":["Logos.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { urlFor } from '$lib/components/auth/SanityClient';\\nexport let logo;\\nexport let logoDesc;\\n</script>\\n\\n<section class=\\"row\\">\\n\\t<h1 class=\\"sectionTitle\\">Logos</h1>\\n\\t<h3>Primary Logo</h3>\\n\\t{#if logo}\\n\\t\\t<div id=\\"primary\\">\\n\\t\\t\\t<img src={urlFor(logo.mainLogo.image)} alt={logo.mainLogo.name} />\\n\\t\\t\\t<h4>{logo.mainLogo.name}</h4>\\n\\t\\t\\t<a href={urlFor(logo.mainLogo.image)} class=\\"dl\\" download>Download</a>\\n\\t\\t</div>\\n\\t\\t<h3>Logo Variations</h3>\\n\\t\\t<div id=\\"logo-grid\\">\\n\\t\\t\\t{#each logo.variations as { id, name, image }}\\n\\t\\t\\t\\t<div class=\\"grid-item\\">\\n\\t\\t\\t\\t\\t<img src={urlFor(image)} alt={name} />\\n\\t\\t\\t\\t\\t<h4>{name}</h4>\\n\\t\\t\\t\\t\\t<a href={urlFor(image)} class=\\"dl\\" download>Download</a>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t{/if}\\n\\t<p class=\\"desc\\">{logoDesc}</p>\\n</section>\\n\\n<style>\\n\\t.sectionTitle {\\n\\t\\ttext-align: start;\\n\\t}\\n\\n\\timg {\\n\\t\\tmax-width: 250px;\\n\\t}\\n\\n\\t#primary {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t\\tmargin: 2rem auto;\\n\\t}\\n\\n\\t#logo-grid {\\n\\t\\twidth: 100%;\\n\\t\\tdisplay: grid;\\n\\t\\tgrid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\\n\\t\\tgrid-gap: 2rem;\\n\\t\\tgrid-auto-rows: auto auto 500px;\\n\\t\\tmargin: 0 auto;\\n\\t}\\n\\t.grid-item {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t\\tmargin: 0 auto;\\n\\t\\twidth: max-content;\\n\\t}\\n\\n\\t.dl {\\n\\t\\tbackground: gray;\\n\\t\\tborder-radius: 5px;\\n\\t\\twidth: 100px;\\n\\t\\theight: 30px;\\n\\t\\tcolor: white;\\n\\t\\ttext-decoration: none;\\n\\t\\ttext-align: center;\\n\\t}\\n\\n\\t.dl:hover {\\n\\t\\ttext-decoration: underline;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA6BC,aAAa,cAAC,CAAC,AACd,UAAU,CAAE,KAAK,AAClB,CAAC,AAED,GAAG,cAAC,CAAC,AACJ,SAAS,CAAE,KAAK,AACjB,CAAC,AAED,QAAQ,cAAC,CAAC,AACT,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,IAAI,CAAC,IAAI,AAClB,CAAC,AAED,UAAU,cAAC,CAAC,AACX,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,SAAS,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,CAC5D,QAAQ,CAAE,IAAI,CACd,cAAc,CAAE,IAAI,CAAC,IAAI,CAAC,KAAK,CAC/B,MAAM,CAAE,CAAC,CAAC,IAAI,AACf,CAAC,AACD,UAAU,cAAC,CAAC,AACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,KAAK,CAAE,WAAW,AACnB,CAAC,AAED,GAAG,cAAC,CAAC,AACJ,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,GAAG,CAClB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,KAAK,CACZ,eAAe,CAAE,IAAI,CACrB,UAAU,CAAE,MAAM,AACnB,CAAC,AAED,iBAAG,MAAM,AAAC,CAAC,AACV,eAAe,CAAE,SAAS,AAC3B,CAAC"}`
};
var Logos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {logo} = $$props;
  let {logoDesc} = $$props;
  if ($$props.logo === void 0 && $$bindings.logo && logo !== void 0)
    $$bindings.logo(logo);
  if ($$props.logoDesc === void 0 && $$bindings.logoDesc && logoDesc !== void 0)
    $$bindings.logoDesc(logoDesc);
  $$result.css.add(css$2);
  return `<section class="${"row"}"><h1 class="${"sectionTitle svelte-qa5fft"}">Logos</h1>
	<h3>Primary Logo</h3>
	${logo ? `<div id="${"primary"}" class="${"svelte-qa5fft"}"><img${add_attribute("src", urlFor(logo.mainLogo.image), 0)}${add_attribute("alt", logo.mainLogo.name, 0)} class="${"svelte-qa5fft"}">
			<h4>${escape2(logo.mainLogo.name)}</h4>
			<a${add_attribute("href", urlFor(logo.mainLogo.image), 0)} class="${"dl svelte-qa5fft"}" download>Download</a></div>
		<h3>Logo Variations</h3>
		<div id="${"logo-grid"}" class="${"svelte-qa5fft"}">${each(logo.variations, ({id, name, image}) => `<div class="${"grid-item svelte-qa5fft"}"><img${add_attribute("src", urlFor(image), 0)}${add_attribute("alt", name, 0)} class="${"svelte-qa5fft"}">
					<h4>${escape2(name)}</h4>
					<a${add_attribute("href", urlFor(image), 0)} class="${"dl svelte-qa5fft"}" download>Download</a>
				</div>`)}</div>` : ``}
	<p class="${"desc"}">${escape2(logoDesc)}</p>
</section>`;
});
var css$1 = {
  code: "#asset-cont.svelte-9vj79j{width:850px;max-width:100%;margin:2rem auto}",
  map: `{"version":3,"file":"assets.svelte","sources":["assets.svelte"],"sourcesContent":["<script lang=\\"ts\\">var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\\n    return new (P || (P = Promise))(function (resolve, reject) {\\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\\n        function rejected(value) { try { step(generator[\\"throw\\"](value)); } catch (e) { reject(e); } }\\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\\n    });\\n};\\nimport { session } from '$app/stores';\\nimport { client, options, makeUrl } from '$lib/components/auth/SanityClient';\\nimport Colors from '$lib/components/ui/style_guide/Colors.svelte';\\nimport Fonts from '$lib/components/ui/style_guide/Fonts.svelte';\\nimport Logos from '$lib/components/ui/style_guide/Logos.svelte';\\nlet data;\\nconst load = () => __awaiter(void 0, void 0, void 0, function* () {\\n    const query = \`*[_type==\\"client\\" && supa_id==\\"\${$session.user.id}\\"]{ brandAssets }\`;\\n    yield client.fetch(query).then((res) => {\\n        console.log(res[0]);\\n        data = res[0].brandAssets;\\n    });\\n});\\nimport { onMount } from 'svelte';\\nimport Loading from '$lib/components/ui/Loading.svelte';\\nimport { formatDate } from '$lib/utils';\\n//$: ({ colorDesc, colors, fontDesc, fonts, logoDesc, logo } = data);\\nonMount(() => load());\\n</script>\\n\\n<h1>Brand Assets</h1>\\n\\n{#if data}\\n\\t<div id=\\"asset-cont\\">\\n\\t\\t<Colors text={data.colorDesc} colors={data.colors} />\\n\\t\\t<Fonts fontDesc={data.fontDesc} fonts={data.fonts} />\\n\\t\\t<Logos logoDesc={data.logoDesc} logo={data.logo} />\\n\\t</div>\\n{:else}\\n\\t<Loading />\\n{/if}\\n\\n<style>\\n\\t#asset-cont {\\n\\t\\twidth: 850px;\\n\\t\\tmax-width: 100%;\\n\\t\\tmargin: 2rem auto;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA0CC,WAAW,cAAC,CAAC,AACZ,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,IAAI,CAAC,IAAI,AAClB,CAAC"}`
};
var Assets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  var __awaiter = function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve2) {
        resolve2(value);
      });
    }
    return new (P || (P = Promise))(function(resolve2, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  let data;
  const load2 = () => __awaiter(void 0, void 0, void 0, function* () {
    const query = `*[_type=="client" && supa_id=="${$session.user.id}"]{ brandAssets }`;
    yield client.fetch(query).then((res) => {
      console.log(res[0]);
      data = res[0].brandAssets;
    });
  });
  onMount(() => load2());
  $$result.css.add(css$1);
  $$unsubscribe_session();
  return `<h1>Brand Assets</h1>

${data ? `<div id="${"asset-cont"}" class="${"svelte-9vj79j"}">${validate_component(Colors, "Colors").$$render($$result, {
    text: data.colorDesc,
    colors: data.colors
  }, {}, {})}
		${validate_component(Fonts, "Fonts").$$render($$result, {
    fontDesc: data.fontDesc,
    fonts: data.fonts
  }, {}, {})}
		${validate_component(Logos, "Logos").$$render($$result, {logoDesc: data.logoDesc, logo: data.logo}, {}, {})}</div>` : `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}`}`;
});
var assets = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Assets
});
var Sign_in = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SignInForm, "SignInForm").$$render($$result, {}, {}, {})}`;
});
var signIn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Sign_in
});
var SignUpForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  (function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve2) {
        resolve2(value);
      });
    }
    return new (P || (P = Promise))(function(resolve2, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  });
  let userEmail;
  let userPassword;
  return `<form><label for="${"Email"}">Email</label>
  <input type="${"email"}" name="${"Email"}"${add_attribute("value", userEmail, 1)}>

  <label for="${"Pass"}">Password</label>
  <input type="${"password"}" name="${"Pass"}"${add_attribute("value", userPassword, 1)}>

  <input type="${"submit"}" value="${"Sign Up"}"></form>

`;
});
var css = {
  code: ".home-blocks.svelte-lc1zx5{max-width:500px;margin:auto;margin-top:-200px;justify-content:center}p.svelte-lc1zx5{max-width:70%;font-size:1.2rem;text-align:center;margin:0 auto 2rem auto}",
  map: `{"version":3,"file":"sign-up.svelte","sources":["sign-up.svelte"],"sourcesContent":["<script lang=\\"ts\\">import SignUpForm from '$lib/components/auth/SignUpForm.svelte';\\n</script>\\n\\n<div class=\\"home-blocks\\">\\n  <div>\\n  <p>Sign Up for a free account to manage all of your business with Black Cat Studio</p>\\n  <SignUpForm />\\n  </div> \\n</div>\\n\\n<style>\\n  .home-blocks {\\n    max-width: 500px;\\n    margin: auto;\\n    margin-top: -200px;\\n    justify-content: center;\\n  }\\n  p {\\n    max-width: 70%;\\n    font-size: 1.2rem;\\n    text-align: center;\\n    margin: 0 auto 2rem auto;\\n  }\\n</style>"],"names":[],"mappings":"AAWE,YAAY,cAAC,CAAC,AACZ,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,MAAM,CAClB,eAAe,CAAE,MAAM,AACzB,CAAC,AACD,CAAC,cAAC,CAAC,AACD,SAAS,CAAE,GAAG,CACd,SAAS,CAAE,MAAM,CACjB,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,AAC1B,CAAC"}`
};
var Sign_up = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"home-blocks svelte-lc1zx5"}"><div><p class="${"svelte-lc1zx5"}">Sign Up for a free account to manage all of your business with Black Cat Studio</p>
  ${validate_component(SignUpForm, "SignUpForm").$$render($$result, {}, {}, {})}</div> 
</div>`;
});
var signUp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Sign_up
});

// .svelte-kit/netlify/entry.js
async function handler(event) {
  const {path, httpMethod, headers, rawQuery, body, isBase64Encoded} = event;
  const query = new URLSearchParams(rawQuery);
  const rawBody = headers["content-type"] === "application/octet-stream" ? new TextEncoder("base64").encode(body) : isBase64Encoded ? Buffer.from(body, "base64").toString() : body;
  const rendered = await render({
    method: httpMethod,
    headers,
    path,
    query,
    rawBody
  });
  if (rendered) {
    return {
      isBase64Encoded: false,
      statusCode: rendered.status,
      headers: rendered.headers,
      body: rendered.body
    };
  }
  return {
    statusCode: 404,
    body: "Not found"
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
/*! *****************************************************************************
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
/*! simple-concat. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
