(function () {
    'use strict';
  
    angular
      .module('app.acknowledgementForm',['ngMaterial'])
      .controller('acknowledgementFormController', acknowledgementFormController)
  
    // accidentFormController.$inject = [];
  
    function acknowledgementFormController() {
      var vm = this;
  
      activate();
  
      function activate() {}
    }
  })();