(function(){
  'use strict';

  angular
    .module('wsApp')
    .factory('productFactory', productFactory);

    function productFactory(){
      var factory = {
        getProducts: getProducts
      }
      return factory;

      function getProducts(){
        return [
          {
            name: 'Pima Genser',
            image: 'app/assets/images/genser_blue.jpg',
            color: 'blå',
            price: 299
          },
          {
            name: 'Pima Genser',
            image: 'app/assets/images/genser_brown.jpg',
            color: 'brun',
            price: 299
          },
          {
            name: 'Pima Genser',
            image: 'app/assets/images/genser_green.jpg',
            color: 'grønn',
            price: 299
          },
          {
            name: 'Pima Genser',
            image: 'app/assets/images/genser_grey.jpg',
            color: 'grå',
            price: 299
          },
          {
            name: 'Pima Genser',
            image: 'app/assets/images/genser_yellow.jpg',
            color: 'gul',
            price: 299
          },
          {
            name: 'Pima Genser',
            image: 'app/assets/images/genser_purple.jpg',
            color: 'lilla',
            price: 299
          },
          {
            name: 'Pima Genser',
            image: 'app/assets/images/genser_red.jpg',
            color: 'Red',
            price: 299
          },
          {
            name: 'Pima Genser',
            image: 'app/assets/images/genser_whine_red.jpg',
            color: 'Whine red',
            price: 299
          },
          {
            name: 'Smilla Cardigan',
            image: 'app/assets/images/cardigan_grey.jpg',
            color: 'grå',
            price: 499
          },
          {
            name: 'Smilla Cardigan',
            image: 'app/assets/images/cardigan_dark_grey.jpg',
            color: 'mørke grå',
            price: 499
          },
          {
            name: 'Smilla Cardigan',
            image: 'app/assets/images/cardigan_black.jpg',
            color: 'sort',
            price: 499
          },
          {
            name: 'Smilla Cardigan',
            image: 'app/assets/images/cardigan_blue.jpg',
            color: 'blå',
            price: 499
          }
        ];
      }
    }
})();
