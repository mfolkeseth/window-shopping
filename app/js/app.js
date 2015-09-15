(function() {
  'use strict';

  angular
    .module('wsApp', ['ngStorage']);
})();

(function() {
  'use strict';

  angular
    .module('wsApp')
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', '$http', '$localStorage', 'productFactory'];

  function mainController($scope, $http, $localStorage, productFactory) {
    var vm = this;
    vm.carousel = {};
    vm.admin = false;
    vm.products = productFactory.getProducts();
    vm.currentProduct = vm.products[0];
    vm.phoneNumber = '';
    vm.selectedSize = '';
    $localStorage.$default({
      bought: angular.toJson([])
    });
    vm.bought = JSON.parse($localStorage.bought);

    vm.carouselInitializer = function() {
      vm.carousel = $('.owl-carousel').owlCarousel({
        items: 1,
        //loop: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        navText: ['', '']
      });
      vm.carousel.on('changed.owl.carousel', function(event) {
        vm.currentProduct = vm.products[event.page.index];
        $scope.$apply();
      });
    }

    vm.buy = function(event) {
      vm.carousel.trigger('stop.owl.autoplay');
      vm.carousel.find('.owl-controls').fadeOut('normal');
      //$('.js-carousel').fadeOut('normal');
      //$('.js-logo').fadeOut('normal');
      $('.js-buy').slideUp('normal', function(){
        $('.js-sizes').slideDown('normal');
      });
    }

    vm.selectSize = function(size){
      vm.selectedSize = size;
      $('.js-carousel').fadeOut('normal');
      $('.js-sizes').slideUp('normal', function(){
        $('.js-phone').slideDown('normal');
        $('.js-phone').find('input[type="text"]').focus();
      });
    }

    // vm.sizeSelected = function(event) {
    //   $('.js-carousel').fadeOut('normal');
    //   $('.js-sizes').slideUp('normal', function(){
    //     $('.js-phone').slideDown('normal');
    //   });
    // }

    vm.addNumber = function(number){
      vm.phoneNumber += number;
    }

    vm.removeNumber = function(){
      vm.phoneNumber = vm.phoneNumber.slice(0, -1);
    }

    vm.numberComplete = function(event){
      var phoneLength = $('.js-phone').find('input[type="text"]').val().length;
      if(phoneLength == 8) {
        $('.js-phone').slideUp('normal', function(){
          $('.js-confirm').slideDown('normal');
          var boughtItem = vm.currentProduct;
          boughtItem.size = vm.selectedSize;
          boughtItem.phone = vm.phoneNumber;
          vm.bought.push(boughtItem);
          $localStorage.bought = angular.toJson(vm.bought);
        });
      }
      else {
        $('js-phone').find('input[type="text"]').focus();
      }
    }

    vm.adminMode = function(){
      vm.admin = !vm.admin;
    }

    vm.adminRemove = function(item) {
      // console.log(item);
      var index = vm.bought.indexOf(item);
      // console.log(index);
      vm.bought.splice(index, 1);
      $localStorage.bought = angular.toJson(vm.bought);
    }
  }
})();
