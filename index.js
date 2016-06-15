/* jshint node: true */
'use strict';

var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var path = require('path');
var rename = require('broccoli-stew').rename;
var AMDDefineFilter = require('./lib/amd-define-filter');
var fs = require('fs');

function lookupPackage(packageName) {
  var modulePath = require.resolve(packageName);
  var i = modulePath.lastIndexOf(path.sep);
  return modulePath.slice(0, i);
}

module.exports = {
  isDevelopingAddon: function(){
    return true;
  },

  name: 'ember-cli-ascii-spin'

  included: function(app) {
  	var package = 'cli-spinners';
    this._super.included.apply(this, arguments);

    // Support being a nested addon.
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    this.app = app;

    app.import(path.join('vendor', package, 'index.js'));
  },

  treeForVendor: function(tree) {
  	var package = 'cli-spinners';
  	var cliSpinnersPath, srcTree;
    var trees = [];

    if (tree) { 
    	trees.push(tree); 
    }

    // Import existing builds from node d3 packages, which are UMD packaged.
    var indexFile = 'index.js';
    cliSpinnersPath = lookupPackage(package);

    if (!fs.statSync(path.join(cliSpinnersPath, indexFile)).isFile()) {
      console.error("[ERROR] cli-spinners Package (" + package + ") is not built as expected, cannot continue. Please report this as a bug.");
      return;
    }

    var tree = new Funnel(cliSpinnersPath, {
      include: [indexFile],
      destDir: '/' + package,
      annotation: 'Funnel: cli-spinners source ['+ package + ']'
    });

    srcTree = new AMDDefineFilter(tree, package);
    trees.push(rename(srcTree, function() {
      return '/' + package + '/' + package + '.js';
    }));

    return mergeTrees(trees);
  }
};