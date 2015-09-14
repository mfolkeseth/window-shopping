(function() {
  'use strict';

  angular
    .module('wsApp', []);
})();

(function() {
  'use strict';

  angular
    .module('wsApp', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$http'];

  function mainController($http) {
    var vm = this;
    vm.products = [
      {
        name: 'Pima Genser',
        image: 'https://dressmann.com/globalassets/productimages/7050219463854_f_7121800_556.jpg',
        color: 'Blue',
        price: 299
      },
      {
        name: 'Pima Genser',
        image: 'https://dressmann.com/globalassets/productimages/7050219463793_f_7121800_862.jpg',
        color: 'Brown',
        price: 299
      },
      {
        name: 'Pima Genser',
        image: 'https://dressmann.com/globalassets/productimages/7050218044320_f_7121800_720.jpg',
        color: 'Green',
        price: 299
      },
      {
        name: 'Pima Genser',
        image: 'https://dressmann.com/globalassets/productimages/7050219463915_f_7121800_941.jpg',
        color: 'Grey',
        price: 299
      },
      {
        name: 'Pima Genser',
        image: 'https://dressmann.com/globalassets/productimages/7050218044382_f_7121800_130.jpg',
        color: 'Yellow',
        price: 299
      },
      {
        name: 'Pima Genser',
        image: 'https://dressmann.com/globalassets/productimages/7050218770007_f_7121800_493.jpg',
        color: 'Purple',
        price: 299
      },
      {
        name: 'Pima Genser',
        image: 'https://dressmann.com/globalassets/productimages/7050216391921_f_7121800_330.jpg',
        color: 'Red',
        price: 299
      },
      {
        name: 'Pima Genser',
        image: 'https://dressmann.com/globalassets/productimages/7050218044252_f_7121800_395.jpg',
        color: 'Whine red',
        price: 299
      },
      {
        name: 'Smilla Cardigan',
        image: 'https://bikbok.com/globalassets/productimages/7050219867072_f_smilla_cardigan_w31_p499_e4995_940-grey.jpg',
        color: 'Grey',
        price: 499
      },
      {
        name: 'Smilla Cardigan',
        image: 'https://bikbok.com/globalassets/productimages/7050219976750_f_smilla_cardigan_w42_p599_e4995_970-grey.jpg',
        color: 'Dark grey',
        price: 499
      },
      {
        name: 'Smilla Cardigan',
        image: 'https://bikbok.com/globalassets/productimages/7050219867089_f_smilla_cardigan_w31_p499_e4995_990-black.jpg',
        color: 'Black',
        price: 499
      },
      {
        name: 'Smilla Cardigan',
        image: 'https://bikbok.com/globalassets/productimages/7050219976743_f_smilla_cardigan_w42_p599_e4995_590-blue.jpg',
        color: 'Blue',
        price: 499
      }
    ];

    vm.carouselInitializer = function() {
      $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        center: true,
        onDragged: dragged
      });
      function dragged(event) {
        console.log(event);
      }
    }
  }
})();

(function() {
  angular
    .module('wsApp')
    .directive('carousel', carousel);

    function carousel(){
      var directive = {
        restrict: 'A',
        scope: {
          carouselInit: '&'
        },
        link: link
      };
      return directive;
      function link(scope, element, attrs){
        if ((scope.$parent != null) && scope.$parent.$last) {
          return scope.carouselInit()();
        }
      }
    }
})();
