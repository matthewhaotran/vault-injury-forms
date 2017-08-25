(function () {
  'use strict';

  angular
      .module('app.kaiserOnTheJob')
      .controller('kaiserOnTheJobController', kaiserOnTheJobController)

  kaiserOnTheJobController.$inject = ['$stateParams', '$state', 'userFactory', 'kaiserOnTheJobFactory'];

  function kaiserOnTheJobController($stateParams, $state, userFactory, kaiserOnTheJobFactory) {
      var vm = this;
      vm.submit = submit;
      vm.cancelBtn = cancelBtn;

      activate();

      function activate() {
          userFactory
              .getUser($stateParams.id)
              .then(function (user) {
                  vm.user = user;
                  vm.formSubmit = {
                      date: vm.user.date,
                      kaiserDoi: vm.user.kaiserDoi,
                      employeeName: vm.user.employeeName,
                      employerContactPerson: vm.user.employerContactPerson,
                      employer: vm.user.employer,
                      employersInsuranceCarrier: vm.user.employersInsuranceCarrier,
                      physicals: vm.user.physicals,
                      contactNameTitle: vm.user.contactNameTitle,
                      contactPhone: vm.user.contactPhone,
                      contactFax: vm.user.contactFax,
                      timeStart: vm.user.timeStart,
                      timeEnd: vm.user.timeEnd,
                      ssn: vm.user.ssn
                  }
              });
      }

      function submit(formSubmit) {
          kaiserOnTheJobFactory
              .submitForm(formSubmit)
              .then(function () {
                  console.log('#1');
                  $state.go('kaiserOnTheJobConfirmation', {id: $stateParams.id});
              });
      }

      function cancelBtn() {
          $state.go('userLogin')
      }
  }
})();

      // window.requestAnimFrame = (function (callback) {
      //   return window.requestAnimationFrame ||
      //     window.webkitRequestAnimationFrame ||
      //     window.mozRequestAnimationFrame ||
      //     window.oRequestAnimationFrame ||
      //     window.msRequestAnimaitonFrame ||
      //     function (callback) {
      //       window.setTimeout(callback, 1000 / 60);
      //     };
      // })();

      // var canvas = document.getElementById("sig-canvas");
      // var ctx = canvas.getContext("2d");
      // ctx.strokeStyle = "#222222";
      // ctx.lineWidth = 4;

      // var drawing = false;
      // var mousePos = {
      //   x: 0,
      //   y: 0
      // };
      // var lastPos = mousePos;

      // canvas.addEventListener("mousedown", function (e) {
      //   drawing = true;
      //   lastPos = getMousePos(canvas, e);
      // }, false);

      // canvas.addEventListener("mouseup", function (e) {
      //   drawing = false;
      // }, false);

      // canvas.addEventListener("mousemove", function (e) {
      //   mousePos = getMousePos(canvas, e);
      // }, false);

      // // Add touch event support for mobile
      // canvas.addEventListener("touchstart", function (e) {

      // }, false);

      // canvas.addEventListener("touchmove", function (e) {
      //   var touch = e.touches[0];
      //   var me = new MouseEvent("mousemove", {
      //     clientX: touch.clientX,
      //     clientY: touch.clientY
      //   });
      //   canvas.dispatchEvent(me);
      // }, false);

      // canvas.addEventListener("touchstart", function (e) {
      //   mousePos = getTouchPos(canvas, e);
      //   var touch = e.touches[0];
      //   var me = new MouseEvent("mousedown", {
      //     clientX: touch.clientX,
      //     clientY: touch.clientY
      //   });
      //   canvas.dispatchEvent(me);
      // }, false);

      // canvas.addEventListener("touchend", function (e) {
      //   var me = new MouseEvent("mouseup", {});
      //   canvas.dispatchEvent(me);
      // }, false);

      // function getMousePos(canvasDom, mouseEvent) {
      //   var rect = canvasDom.getBoundingClientRect();
      //   return {
      //     x: mouseEvent.clientX - rect.left,
      //     y: mouseEvent.clientY - rect.top
      //   }
      // }

      // function getTouchPos(canvasDom, touchEvent) {
      //   var rect = canvasDom.getBoundingClientRect();
      //   return {
      //     x: touchEvent.touches[0].clientX - rect.left,
      //     y: touchEvent.touches[0].clientY - rect.top
      //   }
      // }

      // function renderCanvas() {
      //   if (drawing) {
      //     ctx.moveTo(lastPos.x, lastPos.y);
      //     ctx.lineTo(mousePos.x, mousePos.y);
      //     ctx.stroke();
      //     lastPos = mousePos;
      //   }
      // }

      // // Prevent scrolling when touching the canvas
      // document.body.addEventListener("touchstart", function (e) {
      //   if (e.target == canvas) {
      //     e.preventDefault();
      //   }
      // }, false);
      // document.body.addEventListener("touchend", function (e) {
      //   if (e.target == canvas) {
      //     e.preventDefault();
      //   }
      // }, false);
      // document.body.addEventListener("touchmove", function (e) {
      //   if (e.target == canvas) {
      //     e.preventDefault();
      //   }
      // }, false);

      // (function drawLoop() {
      //   requestAnimFrame(drawLoop);
      //   renderCanvas();
      // })();

      // function clearCanvas() {
      //   canvas.width = canvas.width;
      // }

      // // Set up the UI
      // var sigText = document.getElementById("sig-dataUrl");
      // var sigImage = document.getElementById("sig-image");
      // var clearBtn = document.getElementById("sig-clearBtn");
      // var submitBtn = document.getElementById("sig-submitBtn");
      // clearBtn.addEventListener("click", function (e) {
      //   clearCanvas();
      //   sigText.innerHTML = "Data URL for your signature will go here!";
      //   sigImage.setAttribute("src", "");
      // }, false);
      // submitBtn.addEventListener("click", function (e) {
      //   var dataUrl = canvas.toDataURL();
      //   sigText.innerHTML = dataUrl;
      //   sigImage.setAttribute("src", dataUrl);
      // }, false);
