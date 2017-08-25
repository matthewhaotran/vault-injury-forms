(function () {
    'use strict';

    angular.module('app', [
        // Angular modules
        'ngMaterial',
		    'ngMdIcons',
        'ngMdIcons',

        // Custom modules
        'app.core',
        'app.userLogin',
        'app.userProfile',
        'app.initialReportForm',
        'app.selectForm',
        'app.accidentForm',
        'app.acknowledgementForm',
        'app.cosumnesReturnToWork',
        'app.emergencyResponseEmployeeReport',
        'app.kaiserOnTheJob',
        'app.success',

        // 3rd Party Modules
        'ui.router',
        'LocalStorageModule'

    ]).config(appConfig);

    appConfig.$inject = ['$urlRouterProvider', '$stateProvider'];

    function appConfig($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/userLogin');

        $stateProvider.state('userLogin', {
            url: '/userLogin',
            controller: 'userLoginController as userLoginCtrl',
            templateUrl: 'app/userLogin/userLogin.template.html'
        });


        $stateProvider.state('initialReportForm', {
            url: '/initialReportForm?id',
            controller: 'initialReportFormController as initialReportFormCtrl',
            templateUrl: 'app/initialReportForm/initialReportForm.template.html'
        });

        $stateProvider.state('initialReportFormConfirmation', {
            url: '/initialReportFormConfirmation?id',
            controller: 'initialReportFormConfirmationController as initialReportFormConfirmationCtrl',
            templateUrl: 'app/initialReportForm/initialReportFormConfirmation.template.html'
        });

        $stateProvider.state('selectForm', {
            url: '/selectForm?id',
            controller: 'selectFormController as selectFormCtrl',
            templateUrl: 'app/selectForm/selectForm.template.html'
        });
      
          $stateProvider.state('accidentForm', {
            url: '/accidentForm?id',
            controller: 'accidentFormController as accidentFormCtrl',
            templateUrl: 'app/accidentForm/accidentForm.template.html'
        });

        $stateProvider.state('accidentFormConfirmation', {
            url: '/accidentFormConfirmation?id',
            controller: 'accidentFormConfirmationController as accidentFormConfirmationCtrl',
            templateUrl: 'app/accidentForm/accidentFormConfirmation.template.html'
        });

        $stateProvider.state('cosumnesReturnToWork', {
            url: '/cosumnesReturnToWork?id',
            controller: 'cosumnesReturnToWorkController as cosumnesReturnToWorkCtrl',
            templateUrl: 'app/cosumnesReturnToWork/cosumnesReturnToWork.template.html'
        });

        $stateProvider.state('cosumnesReturnToWorkConfirmation', {
            url: '/cosumnesReturnToWorkConfirmation?id',
            controller: 'cosumnesReturnToWorkConfirmationController as cosumnesReturnToWorkConfirmationCtrl',
            templateUrl: 'app/cosumnesReturnToWork/cosumnesReturnToWorkConfirmation.template.html'
        });

        $stateProvider.state('emergencyResponseEmployeeReport', {
            url: '/emergencyResponseEmployeeReport?id',
            controller: 'emergencyResponseEmployeeReportController as emergencyResponseEmployeeReportCtrl',
            templateUrl: 'app/emergencyResponseEmployeeReport/emergencyResponseEmployeeReport.template.html'
        });

        $stateProvider.state('emergencyResponseEmployeeReportConfirmation', {
            url: '/emergencyResponseEmployeeReportConfirmation?id',
            controller: 'emergencyResponseEmployeeReportConfirmationController as emergencyResponseEmployeeReportConfirmationCtrl',
            templateUrl: 'app/emergencyResponseEmployeeReport/emergencyResponseEmployeeReportConfirmation.template.html'
        });

        $stateProvider.state('kaiserOnTheJob', {
            url: '/kaiserOnTheJob?id',
            controller: 'kaiserOnTheJobController as kaiserOnTheJobCtrl',
            templateUrl: 'app/kaiserOnTheJob/kaiserOnTheJob.template.html'
        });

        $stateProvider.state('kaiserOnTheJobConfirmation', {
            url: '/kaiserOnTheJobConfirmation?id',
            controller: 'kaiserOnTheJobConfirmationController as kaiserOnTheJobConfirmationCtrl',
            templateUrl: 'app/kaiserOnTheJob/kaiserOnTheJobConfirmation.template.html'
        });

        $stateProvider.state('acknowledgementForm', {
            url: '/acknowledgementForm',
            controller: 'acknowledgementFormController as acknowledgementFormCtrl',
            templateUrl: 'app/acknowledgementForm/acknowledgementForm.template.html'
        });

        $stateProvider.state('success', {
            url: '/success',
            controller: 'successController as successCtrl',
            templateUrl: 'app/success/success.template.html'
        });
        $stateProvider.state('userProfile', {
            url: '/userProfile',
            controller: 'userProfileController as userProfileCtrl',
            templateUrl: 'app/userProfile/userProfile.template.html'
        });
        
    }
})();
