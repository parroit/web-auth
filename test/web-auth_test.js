/*
 * web-auth
 * https://github.com/parroit/web-auth
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai');
chai.expect();
chai.should();

var webAuth = require('../lib/web-auth.js');

describe('webAuth', function(){
    it('is defined', function(){
      webAuth.should.be.a('function');
    });

});
