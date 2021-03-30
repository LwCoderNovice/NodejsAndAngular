// 模块对象
var mainApp = angular.module('mainApp', []);

// 作用域对象
// 传入filtername + 'Filter' 参数
mainApp.controller('oneController', ['$scope', 'reverseFilter', function($scope, reverseFilter) {
  // 此controller dom 为根作用域并继承mainApp 中的对象
  $scope.greeting = 'absfls!';
  $scope.testValue = 'aaa';
  $scope.filteredGreeting = reverseFilter($scope.greeting);
  // 添加方法
  $scope.gettheInput = function() {
    return '您输入的是：' + $scope.testValue;
  }
}]);
// repeat
mainApp.controller('listController', ['$scope', function($scope) {
  $scope.list = [{
    'name': 'li',
    'age': '12'
  }, {
    'name': 'lis',
    'age': '14'
  }]
}]);

// filter
mainApp.filter('reverse', function() {
  // 这个工厂方法应该返回一个以输入值为第一个参数的新过滤方法，过滤器中的参数都会作为附加参数传递给它。
  return function(input, uppercase) {
    input = input || '';
    var out = '';
    for (var i = 0; i < input.length; i++) {
      out = input.charAt(i) + out;
    }
    // conditional based on optional argument
    if (uppercase) {
      out = out.toUpperCase();
    }
    return out;
  };
})