(function(){
    'use strict';

    angular
        .module('app.cosumnesReturnToWork')
        .controller('cosumnesReturnToWorkConfirmationController', cosumnesReturnToWorkConfirmationController)

    cosumnesReturnToWorkConfirmationController.$inject = ['$stateParams', 'cosumnesReturnToWorkFactory','$state'];

    function cosumnesReturnToWorkConfirmationController($stateParams, cosumnesReturnToWorkFactory, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.saveForm = saveForm;

        activate();

        function activate() {
            cosumnesReturnToWorkFactory
            .getUser($stateParams.id)
            .then(function (cosumnesReturnToWork) {
                vm.cosumnesReturnToWork = cosumnesReturnToWork;
            });
        }

        function saveForm(cosumnesReturnToWork) {
            var doc = new jsPDF();
            var myImage = new Image();
            myImage.src = 'images/cosumnesReturnToWork.png';
            myImage.onload = function () {
                doc.addImage(myImage, 'png', 0, 0, 205, 300);
                doc.setFontSize(13);
                doc.text(55, 32, cosumnesReturnToWork.firstName);
                doc.text(80, 32, cosumnesReturnToWork.lastName);
                if (cosumnesReturnToWork.q1 === 'Yes') {
                    doc.text(165, 75, 'x');
                } else if (cosumnesReturnToWork.q1 === 'No') {
                    doc.text(176, 75, 'x');
                } else if (cosumnesReturnToWork.q1 === 'N/A') {
                    doc.text(188, 75, 'x');
                }

                if (cosumnesReturnToWork.q2 === 'Yes') {
                    doc.text(165, 81, 'x');
                } else if (cosumnesReturnToWork.q2 === 'No') {
                    doc.text(176, 81, 'x');
                } else if (cosumnesReturnToWork.q2 === 'N/A') {
                    doc.text(188, 81, 'x');
                }

                if (cosumnesReturnToWork.q3 === 'Yes') {
                    doc.text(165, 89, 'x');
                } else if (cosumnesReturnToWork.q3 === 'No') {
                    doc.text(176, 89, 'x');
                } else if (cosumnesReturnToWork.q3 === 'N/A') {
                    doc.text(188, 89, 'x');
                }

                if (cosumnesReturnToWork.q4 === 'Yes') {
                    doc.text(165, 94, 'x');
                } else if (cosumnesReturnToWork.q4 === 'No') {
                    doc.text(176, 94, 'x');
                } else if (cosumnesReturnToWork.q4 === 'N/A') {
                    doc.text(188, 94, 'x');
                }

                if (cosumnesReturnToWork.q5 === 'Yes') {
                    doc.text(165, 99, 'x');
                } else if (cosumnesReturnToWork.q5 === 'No') {
                    doc.text(176, 99, 'x');
                } else if (cosumnesReturnToWork.q5 === 'N/A') {
                    doc.text(188, 99, 'x');
                }

                if (cosumnesReturnToWork.q6 === 'Yes') {
                    doc.text(165, 106, 'x');
                } else if (cosumnesReturnToWork.q6 === 'No') {
                    doc.text(176, 106, 'x');
                } else if (cosumnesReturnToWork.q6 === 'N/A') {
                    doc.text(188, 106, 'x');
                }

                if (cosumnesReturnToWork.q7 === 'Yes') {
                    doc.text(165, 115, 'x');
                } else if (cosumnesReturnToWork.q7 === 'No') {
                    doc.text(176, 115, 'x');
                } else if (cosumnesReturnToWork.q7 === 'N/A') {
                    doc.text(188, 115, 'x');
                }

                if (cosumnesReturnToWork.q8 === 'Yes') {
                    doc.text(165, 127, 'x');
                } else if (cosumnesReturnToWork.q8 === 'No') {
                    doc.text(176, 127, 'x');
                } else if (cosumnesReturnToWork.q8 === 'N/A') {
                    doc.text(188, 127, 'x');
                }

                if (cosumnesReturnToWork.q9 === 'Yes') {
                    doc.text(165, 133, 'x');
                } else if (cosumnesReturnToWork.q9 === 'No') {
                    doc.text(176, 133, 'x');
                } else if (cosumnesReturnToWork.q9 === 'N/A') {
                    doc.text(188, 133, 'x');
                }

                if (cosumnesReturnToWork.q10 === 'Yes') {
                    doc.text(165, 137, 'x');
                } else if (cosumnesReturnToWork.q10 === 'No') {
                    doc.text(176, 137, 'x');
                } else if (cosumnesReturnToWork.q10 === 'N/A') {
                    doc.text(188, 137, 'x');
                }

                if (cosumnesReturnToWork.q11 === 'Yes') {
                    doc.text(165, 142, 'x');
                } else if (cosumnesReturnToWork.q11 === 'No') {
                    doc.text(176, 142, 'x');
                } else if (cosumnesReturnToWork.q11 === 'N/A') {
                    doc.text(188, 142, 'x');
                }

                if (cosumnesReturnToWork.q12 === 'Yes') {
                    doc.text(165, 151, 'x');
                } else if (cosumnesReturnToWork.q12 === 'No') {
                    doc.text(176, 151, 'x');
                } else if (cosumnesReturnToWork.q12 === 'N/A') {
                    doc.text(188, 151, 'x');
                }

                if (cosumnesReturnToWork.q13 === 'Yes') {
                    doc.text(165, 155, 'x');
                } else if (cosumnesReturnToWork.q13 === 'No') {
                    doc.text(176, 155, 'x');
                } else if (cosumnesReturnToWork.q13 === 'N/A') {
                    doc.text(188, 155, 'x');
                }

                if (cosumnesReturnToWork.q14 === 'Yes') {
                    doc.text(165, 164, 'x');
                } else if (cosumnesReturnToWork.q14 === 'No') {
                    doc.text(176, 164, 'x');
                } else if (cosumnesReturnToWork.q14 === 'N/A') {
                    doc.text(188, 164, 'x');
                }

                if (cosumnesReturnToWork.q15 === 'Yes') {
                    doc.text(165, 176, 'x');
                } else if (cosumnesReturnToWork.q15 === 'No') {
                    doc.text(176, 176, 'x');
                } else if (cosumnesReturnToWork.q15 === 'N/A') {
                    doc.text(188, 176, 'x');
                }
                doc.text(33, 190, cosumnesReturnToWork.detailRestriction);
                doc.text(110, 228, cosumnesReturnToWork.q16);
                doc.text(18, 245, cosumnesReturnToWork.physicianName);
                doc.text(90, 245, cosumnesReturnToWork.physicianAddress);
                doc.text(18, 255, cosumnesReturnToWork.physicianName);
                doc.text(18, 265, cosumnesReturnToWork.dateSigned);
                doc.text(130, 255, cosumnesReturnToWork.homePhone);
                doc.save('cosumnesReturnToWork.pdf');
            };

            $state.go('success');
        }
    }
})();
