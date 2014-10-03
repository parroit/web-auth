/*
 * web-auth
 * https://github.com/parroit/web-auth
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */

'use strict';



var t = require('tcomb');
var User = require('./model/User');

var nullf = function() {};

function bindFun(impl, name) {
    if (impl) {
        return impl[name].bind(impl);
    }

    return nullf;
}

var makeAuth = function(impl) {

    var auth = {

        save: t.func(User, bindFun(impl,'save'), t.Str),
        register: t.func([t.Str, t.Str], bindFun(impl,'register'), t.Nil),
        get: t.func(t.Str, bindFun(impl,'get'), User),
        delete: t.func(t.Str, bindFun(impl,'delete'), t.Nil),
        search: t.func(t.Str, bindFun(impl,'search')/*, t.list(User)*/),
        login: t.func([t.Str, t.Str], bindFun(impl,'login'), t.Str),
        logout: t.func(t.Nil, bindFun(impl,'logout'), t.Nil)
    };

    return auth;
};


module.exports = makeAuth;
