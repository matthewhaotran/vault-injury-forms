(function () {
  'use strict';

  angular
    .module('app.accidentForm')
    .controller('accidentFormController', accidentFormController)

  accidentFormController.$inject = ['userFactory', '$stateParams', '$state', 'accidentFormFactory'];

  function accidentFormController(userFactory, $stateParams, $state, accidentFormFactory) {
    var vm = this;
    vm.submit = submit;

    activate();

    function activate() {
      userFactory
        .getUser($stateParams.id)
        .then(function (user) {
          vm.user = user;
          vm.formSubmit = {
            firstName: vm.user.firstName,
            lastName: vm.user.lastName,
            address1: vm.user.address1,
            address2: vm.user.address2,
            city: vm.user.city,
            state: vm.user.state,
            zip: vm.user.zip,
            homePhone: vm.user.homePhone,
            workPhone: vm.user.workPhone,
            ssn: vm.user.ssn
          }
        });
    }

    function submit(formSubmit) {
      accidentFormFactory
        .submitForm(formSubmit)
        .then(function () {
          $state.go('accidentFormConfirmation', {
            id: $stateParams.id
          });
        })

    }
  }
})();
