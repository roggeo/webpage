# Middlewares


In this folder, you will store all your Express middlewares. The purpose of a middleware is to extract a common controller code, which should be executed on multiple requests and usually modifies the request and/or the response objects.

Just like a controller, a middleware should never directly access the database. Instead it should use your models for such tasks.

Below is the users middleware, from the middlewares/users.js file. Its purpose is to load the user making the request.

```javascript

    User = require('../models/user')

    module.exports = function(req, res, next) {
        if (req.session && req.session.user) {
            User.get(req.session.user, function(err, user) {
            if (user) {
                req.user = user
            } else {
                delete req.user
                delete req.session.user
            }

            next()
            })
        } else {
            next()
        }
    }

```
