/*
 * web-auth
 * https://github.com/parroit/web-auth
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */

'use strict';

function id(Model, property){
	Object.defineProperty(Model.prototype, '_id', {
	    enumerable: true,
	    get: function() {
	        return this[property];
	    }
	});

}

module.exports = {
    id: id
};
