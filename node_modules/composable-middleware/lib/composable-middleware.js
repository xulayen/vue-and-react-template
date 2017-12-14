
/*
 * composable-middleware
 * https://github.com/randymized/composable-middleware
 *
 * Copyright (c) 2013 Randy McLaughlin
 * Licensed under the MIT license.
 */

'use strict';

var MiddlewareCommonObject= require('./middleware-common-object')

function is_protected_context(obj)
{
  return obj === undefined ||
    obj === global ||
    (obj._middleware_common_object === undefined && obj.route !== undefined && obj.handle !== undefined)
}

module.exports= function composable_middleware(components) {
  var stack= [];
  var uses_this;
  var stacklength= 0;


  function middleware(req,res,out) {
    var layer= 0;
    var that= this;
    if (is_protected_context(this)){
      return middleware.call(new MiddlewareCommonObject(),req,res,out)
    }
    else {
      this.req= req;
      this.res= res;
    }
    (function next(err) {
      var fn= stack[layer++];
      if (fn == null) {  // reached end of stack
        out(err);
      }
      else {
        if (err) {
          switch (fn.length) {
            case 4:
              fn.call(that,err,req,res,next);
              break;
            case 2:
              fn.call(that,err,next);
              break;
            default:
              next(err);
              break;
          }
        }
        else {
          switch (fn.length) {
            case 3:
              fn.call(that,req,res,next);
              break;
            case 1:
              fn.call(that,next);
              break;
            case 0:
              // compatibility with https://github.com/flatiron/union
              res.removeListener('next', next);
              res.once('next', next);
              fn.call(that);
              break;
            default:
              next();
              break;
          }
        }
      }
    })()
  }


  var use= middleware.use= function(mw) {
    for (var i=0, len=arguments.length; i<len; i++) {
      var a= arguments[i];
      if (Array.isArray(a)) {
        use.apply(this,a)
      }
      else if (typeof a === 'function' && a.length <= 4){
        if (a.length <= 2) uses_this= true;
        stack.push(a);
      }
      else {
        throw new TypeError('Middleware function was expected');
      }
    }
    stacklength= stack.length;
    return middleware;
  }

  use.apply(middleware,arguments);
  return middleware;
}

module.exports.MiddlewareCommonObject= MiddlewareCommonObject;
module.exports.is_protected_context= is_protected_context;

