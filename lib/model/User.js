/*
 * web-auth
 * https://github.com/parroit/web-auth
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */

'use strict';

var t = require('tcomb');
var util = require('./model-util');

var User = t.struct({
    username: t.Str,
    password: t.Str,
    email: t.Str,
    admin: t.Bool
},'User');

util.id(User,'username');

module.exports = User;
