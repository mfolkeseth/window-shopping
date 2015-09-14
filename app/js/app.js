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

  mainController.$inject = ['$http', '$localStorage', 'productFactory'];

  function mainController($http, $localStorage, productFactory) {
    var vm = this;
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
      var carousel = $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        center: true
      });
      carousel.on('changed.owl.carousel', function(event) {
        vm.currentProduct = vm.products[event.page.index];
      });
    }

    vm.buy = function(event) {
      $(event.target).parent().slideUp('fast', function(){
        $('.js-sizes').slideDown('fast');
      });
    }

    vm.selectSize = function(size){
      vm.selectedSize = size;
    }

    vm.sizeSelected = function(event) {
      $('.js-carousel').fadeOut('fast');
      $('.js-sizes').slideUp('fase', function(){
        $('.js-phone').slideDown('fast');
      });
    }

    vm.addNumber = function(number){
      vm.phoneNumber += number;
    }

    vm.removeNumber = function(){
      vm.phoneNumber = vm.phoneNumber.slice(0, -1);
    }

    vm.numberComplete = function(event){
      $('.js-phone').slideUp('fast', function(){
        $('.js-confirm').slideDown('fast');
        var boughtItem = vm.currentProduct;
        boughtItem.size = vm.selectedSize;
        boughtItem.phone = vm.phoneNumber;
        vm.bought.push(boughtItem);
        $localStorage.bought = angular.toJson(vm.bought);
      });
    }

    vm.adminMode = function(){
      vm.admin = !vm.admin;
    }
  }
})();
