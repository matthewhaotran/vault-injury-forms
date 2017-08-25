(function () {
    'use strict';

    angular
        .module('app.initialReportForm')
        .controller('initialReportFormController', initialReportFormController)

    initialReportFormController.$inject = ['$stateParams', '$state', 'userFactory', 'initialReportFormFactory'];

    function initialReportFormController($stateParams, $state, userFactory, initialReportFormFactory) {
        var vm = this;
        vm.submit = submit;
        vm.cancelBtn = cancelBtn;
        vm.lossCauses = [
            'Abnormal Air Pressure(14)',
            'Burn(104)',
            'Burn or Scald Fire or Flame(04)',
            'Burn or Scald Steam/Hot Fluids',
            'Burn or Scald-chemicals(01)',
            'Burn or Scald-Contact with Noc(09)',
            'Burn or Scald-Radiation(08)',
            'Chemical Contact(407)',
            'Cold Objects or Substances(11)',
            'Cont/Exp to Nox(129)',
            'Contact Harmful Substance(455)',
            'Contact With Extreme Hot/Cold Object(113)',
            'Contact with/exposure fire(111)',
            'Contact/Exposure(710)',
            'Dust Gases Fumes or Vapors(06)',
            'Electrical Current(84)',
            'Exposure(446)',
            'Grease Burn(451)',
            'Hot Objects or Substances(02)',
            'Temperature Contact(450)',
            'Temperature Extremes(03)',
            'Welding Operation(07)',
            'Caught In/Between(425)',
            'Caught In Under Or Between Noc(13)',
            'Caught In/Under/Between Fall Mount(101)',
            'Caught In/Under/Between Object',
            'Collapsing-Materials Earth(20)',
            'Defective Equipment(493)',
            'Machine(417)',
            'Machine/Machine Failure(10)',
            'Object Handled(12)',
            'Catching(418)',
            'Caught Puncture Scrape-Noc(19)',
            'Cut/Object Lifted or Handled(17)',
            'Cut/Puncture/Scrape-Not Power Tool(105)',
            'Cut/Puncture/Scrape-Power Took(106)'
        ];
        vm.lossTypes = [
            'All Other Injuries Noc - All Other Injuries Nox(74)',
            'Multiple Injuries Both Physical and Psychological(91)',
            'Multiple Injuries(99)',
            'Multiple Physical Injuries(90)',
            'Lung(114)',
            'Noc(136)',
            'Aids(075)',
            'All Other Cumlative Injuries Noc(79)',
            'All Other Occurance Disease Inury Noc(071)',
            'Asbestosis(75)',
            'Black Lung(76)',
            'Byssinosis(77)',
            'Cancer(074)',
            'Carpal Tunnel Syndrome(78)',
            'Contagious Disease(073)'
        ]
        vm.bodyParts = [
            'Head-Brain(0012)',
            'Head-Ear Left(123)',
            'Head-Ear Right(124)',
            'Head-Ears(13)',
            'Head-Ears-External(121)',
            'Head-Ears-Internam(122)',
            'Head-Eye Left(131)',
            'Head-EYe Right(132)',
            'Head-Eye(s)(14)',
            'Head-Face(140)',
            'Head-Face(Multiple)(144)',
            'Head-Facial Bones(19)',
            'Head-Forehead(165)'
        ]
        vm.departments = [
            'Administrative Services',
            'Business/Industry Affairs',
            'City Attorney',
            'City Council',
            'City Manager',
            'Communications',
            'Community Development',
            'Economic Development',
            'Finance',
            'Fire',
            'Human Resources',
            'Information Services',
            'Library',
            'Museum',
            'Police',
            'Public Works'
        ]
        vm.causes = [
            'Animal Attack',
            'Animal/Insect Bite',
            'Blood/Body Fluid Exposure',
            'Breate Dust/Fumes/Vapors',
            'Caught In/Between Machinery',
            'Caught In/Between Misc Object',
            'Contact With Electric Current',
            'Contact With Hot Object',
            'Contact With Steam or Hot Fluids',
            'Cut or Puncture',
            'DWI Check Point',
            'Exposure to Illegal Drugs',
            'Exposure to Infectious Disease',
            'Exposure to Toxic Material',
            'Fall/Slip/Trip',
            'Fall/Slip/Trip Different LEvelk',
            'Fall/Slip/Trip Ice/Snow',
            'Fall/Slip/Trip Inside',
            'Fall/Slip/Trip Outside',
            'Fall/Slip/Trip Over Object',
            'General Patrol Activities',
            'Gunshot',
            'Injured by Hand Tool',
            'Injured by Power Tool',
            'Injured During Swat Training',
            'Injured During Traffic Duty',
            'Motor Vehicle Incident',
            'Needlestick',
            'Police-Arrest Training',
            'Police-Arrest in Field',
            'Police-Defen Tacticts Training',
            'Riot Injury',
            'Shooting Range',
            'Strain Holding/Carrying',
            'Strain Other',
            'Strain Pushing/Pulling',
            'Struck Against Object',
            'Struck by falling/flying object',
            'Struck by Object Handled',
            'Toxic Fumes',
            'Trauma'
        ]
        vm.businessLocations = [
            'Bemis Public Library',
            'City Shops(Belleview)',
            'Fire Dept Station No. 11',
            'Fire Dept Station No. 12',
            'Fire Dept Station No. 13',
            'Fire Dept Station No. 14',
            'Fire Dept Station No. 15',
            'Fire Dept Station No. 16',
            'Fire Dept Station No. 17',
            'Fire Dept Station No. 18',
            'Geneva Village',
            'Historical Museum',
            'Littleton Center',
            'Municipal Court',
            'Museum Storage'
        ]
        vm.divisions = [
            'Accounting',
            'Administartion',
            'Adult Services',
            'Animal Control',
            'B/IA',
            'Budget/Finance',
            'Building Maintenance',
            'Childrens',
            'Circulation',
            'City Attorney',
            'City Clerk',
            'City Council',
            'City Manager',
            'Codes and Inspections',
            'Collections',
            'Communications',
            'Copy Center',
            'Economic Development',
            'Emergency Services',
            'Engineering',
            'Exhibits',
            'Farm Sites',
            'Fire Rescue Communications',
            'Fleet Maintenance',
            'Grounds',
            'Houysing Rehab',
            'Human Resources',
            'Interpretation',
            'Investigations',
            'Paramedic',
            'Permit and Plan Review',
            'Prevention/Education',
            'Revenue',
            'Sewer Utility',
            'Shopping Cart',
            'Storm Drainage Utility',
            'Streets',
            'Support Services',
            'Technical Services',
            'Training',
            'Uniform Services',
            'Young Adult'
        ]
        vm.covgCodes = [
            '001',
            '002',
            '003',
            '004',
            '005',
            '006',
            '007',
            '008',
            '009',
            '010',
        ]
        vm.accidentStates = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

        activate();

        function activate() {
            userFactory
                .getUser($stateParams.id)
                .then(function (user) {
                    vm.user = user;
                    vm.formSubmit = {
                        claimNumber: vm.user.claimNumber,
                        alternateClaimNumber: vm.user.alternateClaimNumber,
                        occurrenceNumber: vm.user.occurrenceNumber,
                        location: vm.user.location,
                        location2: vm.user.location2,
                        dateOfLoss: vm.user.dateOfLoss,
                        dateReported: vm.user.dateReported,
                        timeOfLoss: vm.user.timeOfLoss,
                        covgCode: vm.user.covgCode,
                        reportType: vm.user.reportType,
                        claimantId: vm.user.claimantId,
                        idType: vm.user.idType,
                        employeeId: vm.user.employeeId,
                        firstName: vm.user.firstName,
                        lastName: vm.user.lastName,
                        middleName: vm.user.middleName,
                        address1: vm.user.address1,
                        address2: vm.user.address2,
                        city: vm.user.city,
                        state: vm.user.state,
                        zip: vm.user.zip,
                        country: vm.user.country,
                        mailingCheckbox: vm.user.mailingCheckbox,
                        mailingStreetAddress1: vm.user.mailingStreetAddress1,
                        mailingStreetAddress2: vm.user.mailingStreetAddress2,
                        mailingCity: vm.user.mailingCity,
                        mailingState: vm.user.mailingState,
                        mailingZip: vm.user.mailingZip,
                        mailingCountry: vm.user.mailingCountry,
                        ssn: vm.user.ssn,
                        homePhone: vm.user.homePhone,
                        personalEmail: vm.user.personalEmail,
                        mobilePhone: vm.user.mobilePhone,
                        workPhone: vm.user.workPhone,
                        workEmail: vm.user.workEmail,
                        dateOfBirth: vm.user.dateOfBirth,
                        maritalStatus: vm.user.maritalStatus,
                        gender: vm.user.gender,
                        lossCause: vm.user.lossCause,
                        lossType: vm.user.lossType,
                        bodyPart: vm.user.bodyPart,
                        accidentState: vm.user.accidentState,
                        stateOfJurisdiction: vm.user.stateOfJurisdiction,
                        accidentLocation: vm.user.accidentLocation,
                        driversLicenseNum: vm.user.driversLicenseNum,
                        driversLicenseState: vm.user.driversLicenseState,
                        initialMedicalTreatment: vm.user.initialMedicalTreatment,
                        department: vm.user.department,
                        cause: vm.user.cause,
                        division: vm.user.division,
                        businessLocation: vm.user.businessLocation,
                        jobTitle: vm.user.jobTitle,
                        lostTime: vm.user.lostTime,
                        dateLastWorked: vm.user.dateLastWorked,
                        returnedToWork: vm.user.returnedToWork,
                        returnedLightDuty: vm.user.returnedLightDuty,
                        returnedFullTimeDate: vm.user.returnedFullTimeDate,
                        employeeDied: "No",
                        dateReported: vm.user.dateReported,
                        salaryContinued: vm.user.salaryContinued,
                        wagesPaidDayInjured: vm.user.wagesPaidDayInjured,
                        employment: vm.user.employment,
                        hireDate:vm.user.hireDate,
                        rateOfPay: vm.user.rateOfPay,
                        payType: vm.user.payType,
                        jobCode: vm.user.jobCode,
                        jobTitle: vm.user.jobTitle,
                        firstReportCorrection: vm.user.firstReportCorrection,
                        fullDenial: vm.user.fullDenial,
                        finalPaymentBodyPartCode1: vm.user.finalPaymentBodyPartCode1,
                        percentBodyPartCode1: vm.user.percentBodyPartCode1,
                        finalPaymentBodyPartCode2: vm.user.finalPaymentBodyPartCode2,
                        percentBodyPartCode2: vm.user.percentBodyPartCode2,
                        finalPaymentBodyPartCode3: vm.user.finalPaymentBodyPartCode3,
                        percentBodyPartCode3: vm.user.percentBodyPartCode3,
                        finalPaymentBodyPartCode4: vm.user.finalPaymentBodyPartCode4,
                        percentBodyPartCode4: vm.user.percentBodyPartCode4,
                        wholePerson: vm.user.wholePerson,
                        percentWholePerson: vm.user.percentWholePerson,
                        completedByTitle: vm.user.completedByTitle,
                        completedByName: vm.user.completedByName,
                        completedByPhone:vm.user.completedByPhone
                    }
                });
        }

        function submit(formSubmit) {
            initialReportFormFactory
                .submitForm(formSubmit)
                .then(function () {
                    console.log('#1');
                    $state.go('initialReportFormConfirmation', {id: $stateParams.id});
                });
        }

        function cancelBtn() {
            $state.go('userLogin')
        }
    }
})();
