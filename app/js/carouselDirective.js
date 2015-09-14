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
