(function() {
  'use strict';

  angular
    .module('wsApp', []);
})();

(function() {
  'use strict';

  angular
    .module('wsApp')
    .controller('mainController', mainController);

  mainController.$inject = ['$http', 'productFactory'];

  function mainController($http, productFactory) {
    var vm = this;
    vm.admin = false;
    vm.products = productFactory.getProducts();
    vm.currentProduct = vm.products[0];
    vm.phoneNumber = '';
    vm.selectedSize = '';
    vm.bought = JSON.parse(localStorage['bought']);
    console.log(vm.bought);

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
        localStorage['bought'] = JSON.stringify(vm.bought);
      });
    }

    vm.adminMode = function(){
      vm.admin = !vm.admin;
    }
  }
})();
