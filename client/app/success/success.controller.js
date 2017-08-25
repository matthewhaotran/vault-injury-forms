(function(){
    'use strict';

    angular
        .module('app.core')
        .controller('successController', successController)

    // successController.$inject = [''];

    function successController() {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();
