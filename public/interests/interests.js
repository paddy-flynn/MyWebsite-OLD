'use strict';

angular.module('myApp.interests',['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/interests', {
            templateUrl: 'interests/interests.html',
            controller: 'InterestsCtrl'
        });
    }])
    .controller('InterestsCtrl', ['$scope', function($scope) {
        $scope.interests = 'This is an interests';
    }]);