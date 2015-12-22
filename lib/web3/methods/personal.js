/*
    This file is part of ethereum.js.

    ethereum.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    ethereum.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file personal.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @author Fabian Vogelsteller <fabian@ethdev.com>
 * @author Andrei Grigoriu <mudpedal@vertexarmy.org> (this file)
 * @date 2015
 */

/**
 * Web3
 *
 * @module web3
 */

/**
 * Personal methods and properties
 * @class [web3] personal
 * @constructor
 */

"use strict";

var Property = require('../property');
var Method = require('../method');
var formatters = require('../formatters');
var utils    = require('../../utils/utils');

var Personal = function (web3) {
    this._requestManager = web3._requestManager;

    var self = this;

    methods.forEach(function(method) { 
        method.attachToObject(self);
        method.setRequestManager(self._requestManager);
    });
};


var getAccountPrivateKey = new Method({
    name: 'getAccountPrivateKey',
    call: 'personal_getAccountPrivateKey',
    params: 2, 
    inputFormatter: [formatters.inputAddressFormatter, null],
});

var unlockAccount = new Method({
    name: 'unlockAccount',
    call: 'personal_unlockAccount',
    params: 3, 
    inputFormatter: [formatters.inputAddressFormatter, null, null],
});

var newAccount = new Method({
    name: 'newAccount',
    call: 'personal_newAccount',
    params: 1, 
});

var methods = [
    getAccountPrivateKey,
    unlockAccount,
    newAccount
];

module.exports = Personal;

