var mainApp = angular.module('mainApp', []);


mainApp.controller('oneController', ['$scope', function($scope) {
  $scope.greeting = 'hi!';
}]);