# composable-middleware

> Treat a sequence of middleware as middleware.

## Getting Started
Install the module with: `npm install composable-middleware`

```javascript
var composable_middleware = require( 'composable-middleware' );
```

## Documentation
Middleware is a function that follows specific conventions.  Composable middleware allows a series of middleware functions to be used as if they were a single middleware function.  With it, a middleware stack is middleware and becomes a first-class object.  With composable middleware you can:

- Define middleware that consists of several middleware steps and include it in another middleware stack.
- Assign a middleware stack to a variable or index it in an object.
- Form conditional or branching middleware paths, dynamically selecting middleware depending upon things like hostname, HTTP method or route.
- Create a foundation middleware stack that is common to several sites or projects and includes commonly used operations, properly sequenced, and fill it in, as needed, with additions specific to a site.

You may compose middleware by defining its steps in the argument to the composable-middleware function:

```javascript
var mw =
    composable_middleware(
        connect.logger(),
        connect.gzip(),
    );
```
or by using its `use` function:

```javascript
var mw =
    composable_middleware()
        .use(connect.logger())
        .use(connect.gzip());
```

and then include it in another middleware stack:
```javascript
var okay =
    composable_middleware()
        .use(mw)
        .use(
            function(req,res,next) {
                res.send('okay');
        })
```

You might then use that middleware in Connect, Express or any other middleware-based framework:
```javascript
var app = connect();
app.use(okay);
app.listen(3000);
```

One of the design goals of this package is to minimize overhead when sequencing through middleware steps.  Notably, it does not support mounting paths or routing.  It does not examine the URL at all.  That is best left to middleware, perhaps middleware that routes requests into different middleware stacks depending upon route.

The composable_middleware software also does not deal with errors or unhandled requests other than routing errors to middleware that expects an error argument.  Since a middleware stack may be treated as middleware within another middleware stack, it cannot be assumed that reaching the end of the stack has any significance.  You will need to provide middleware (perhaps we should call it 'finalware') to send out 404 responses or to log errors and send 500 responses if the overall framework in which the middleware is running does not do so.

### Middleware conventions supported.

The Composable Middleware package supports Connect middleware and [flatiron/union](https://github.com/flatiron/union) middleware as well as a hybrid of the two.

- Connect normal middleware: `(req,res,next)`
- Flatiron/union middleware: `()`.  The request and response are in `this.req` and `this.res`.  `this.res.emit('next')` passes the request to the next level of middleware.
- Hybrid middleware: `(next)`. The request and response are in `this.req` and `this.res`.
- Connect error-handling middleware: `(err,req,res,next)`
- Hybrid error-handling middleware: `(err,next)`. The request and response are in `this.req` and `this.res`.

The middleware type is determined by checking its arity:
- 0: flatiron/union
- 1: hybrid normal
- 2: hybrid error-handling
- 3: Connect normal
- 4: Connect error-handling

Error-handling middleware is skipped unless an error was passed to the `next` function.  Normal middleware is skipped if there is an error.

Although not a convention shared by other middleware containers, this package calls all middleware serving a given request in the same context.  It should thus be possible to attach an attribute to `this` in one middleware function and access it in a different middleware function serving the same request.  This package will assure, however, that the global object is not used as the context, allocating a new object to serve as the context, if needed.  To avoid the possibility of interference, if invoked as Connect middleware, `composable-middleware` will similarly replace the Connect context with a new context.  If a new context is created, `this._middleware_common_object` will be defined.  The constructor for the new context is exported as MiddlewareCommonObject and the function used by `composable-middleware` to test whether a new context is needed is exported as `is_protected_content`.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Status
[![Build Status](https://secure.travis-ci.org/randymized/composable-middleware.png?branch=master)](http://travis-ci.org/randymized/composable-middleware)

## Release History
- 0.3.0: Improves testing for the need to instantiate a new context to protext global variables.
- 0.2.0: Same `this` object for all middleware serving a given request.
- 0.1.0: Initial release.

## License
Copyright (c) 2013 Randy McLaughlin
Licensed under the MIT license.
