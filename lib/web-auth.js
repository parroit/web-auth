/*
 * web-auth
 * https://github.com/parroit/web-auth
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */

'use strict';

module.exports = WebAuth;

var PouchDB = require('pouchdb');
var bluebird = require('bluebird');
var t = require('tcomb');

function WebAuth(dbName) {
    this.db = new PouchDB(dbName);

}

var prot = WebAuth.prototype;

prot.save = function(user) {
    return this.db.put(user);
};

prot.register = function(username, email) {

};

prot.get = function(username) {
    return this.db.get(username);
};

prot.delete = function(username) {
    var remove = this.db.remove.bind(this.db);

    return this.get(username).then(function(u){
        return remove(u);
    });

};

prot.search = function(text) {
    function map(doc, emit) {
      if (doc.username.indexOf(text) !== -1 ||
          doc.email.indexOf(text) !== -1 ) {
        emit(doc);
      }
    }

    return this.db.query(map).then(function(result){

        var users = result.rows.map(function(r){
            return r.key;
        });
        return users;
    });
};

prot.login = function(username, password) {

};

prot.logout = function(){

};

