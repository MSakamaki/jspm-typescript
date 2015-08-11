/*jslint node: true */
(function(){
  'use strict';
  module.exports = {
    System: {
      transpiler: 'typescript'
    },
    app: {
      src: 'client/src/**/*',
      ts: 'client/src/**/*.ts'
    }
  };
})();
