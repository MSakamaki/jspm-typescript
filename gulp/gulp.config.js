/*jslint node: true */
(function(){
  'use strict';
  module.exports = {
    System: {
      transpiler: 'typescript'
    },
    port:{
      view: 9000,
      api:  9090
    },
    app: {
      src: 'client/src/**/*',
      ts: 'client/src/**/*.ts'
    }
  };
})();
