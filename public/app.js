'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.about',
  'myApp.skills',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/about'});
}]).controller('AppCtrl', ['$scope','$location', function($scope,$location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}]);
