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
 * @file miner.js
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
 * miner methods and properties
 * @class [web3] miner
 * @constructor
 */

"use strict";

var formatters = require('../formatters');
var utils = require('../../utils/utils');
var Method = require('../method');

var Miner = function (web3) {
    this._requestManager = web3._requestManager;

    var self = this;

    methods.forEach(function(method) { 
        method.attachToObject(self);
        method.setRequestManager(self._requestManager);
    });
};

var start = new Method({
    name: 'start',
    call: 'miner_start',
    params: 1, 
});

var stop = new Method({
    name: 'stop',
    call: 'miner_stop',
    params: 0, 
});

var methods = [
    start,
    stop
];

module.exports = Miner;

