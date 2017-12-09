'use strict';

angular.module('myApp.directives', [])

.directive('topHeader', [function() {
  return {
    templateUrl: '/view/top-header.html',
    controller: 'MainCtrl'
  };
}])

.directive('endFooter', [function() {
  return {
    templateUrl: '/view/end-footer.html',
    controller: 'MainCtrl'
  };
}]);