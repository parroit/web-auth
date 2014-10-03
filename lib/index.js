/*
 * web-auth
 * https://github.com/parroit/web-auth
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */

'use strict';


module.exports = {
    model: {
        User: require('./model/User')
    },

    storage: {
        interface: require('./auth'),
        PouchImplementation: require('./web-auth')
    }
};
