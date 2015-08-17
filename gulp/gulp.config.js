/*jslint node: true */
(function(){
  'use strict';
  module.exports = {
    System: {
      transpiler: 'typescript'
    },
    port:{
      view: 9000,
      api:  9001
    },
    app: {
      src: 'client/src/**/*',
      ts: 'client/src/**/*.ts',
      jsx: 'client/src/**/*.jsx'
    }
  };
})();
