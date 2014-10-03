/*
 * web-auth
 * https://github.com/parroit/web-auth
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai');
var expect = chai.expect;
chai.should();

var makeAuth = require('../lib/auth.js');
var WebAuth = require('../lib/web-auth.js');
var fs = require('fs');
var rimraf = require('rimraf');
var User = require('../lib/model/User');
var t = require('tcomb');

describe('WebAuth', function() {
    var u = {
        username: 'parroit',
        password: 'secret',
        email: 'parroit@eban.so',
        admin: true
    };

    it('is defined', function() {
        WebAuth.should.be.a('function');
    });

    before(function() {

        if (fs.existsSync('./test/assets')) {

            rimraf.sync('./test/assets');
        }

        var w = new WebAuth('test/assets');
        this.auth = makeAuth(w);
    });

    it('save objects', function(done) {

        this.auth.save(u)
            .then(function(result) {
                result.ok.should.be.equal(true);
                done();
            })
            .catch(done);
    });

    it('retrieve objects', function(done) {


        this.auth.get('parroit')
            .then(function(result) {
                u._id = result._id;
                u._rev = result._rev;
                result.should.be.deep.equal(u);
                done();
            })
            .catch(done);
    });

    it('search objects', function(done) {

        this.auth.search('p')
            .then(function(results) {
                results.length.should.be.equal(1);

                var result = results[0];
                u._id = result._id;
                u._rev = result._rev;
                result.should.be.deep.equal(u);
                done();
            })
            .catch(done);
    });

    it('remove objects', function(done) {
        var get = this.auth.get;
        var del = this.auth.delete;

        del('parroit')
            .then(function(result){
                result.ok.should.be.equal(true);
                return get('parroit');
            })
            .catch(function(result) {
                result.message.should.be.equal('deleted');
                done();
            })
            .catch(done);
    });

});
