angular.module("todoListApp", [])

.controller('mainCtrl', function($scope, dataService) {
  $scope.learningNgChange = function() {
    console.log("An input changed!");
  };

  $scope.helloWorld = dataService.helloWorld;

  dataService.getTodos(function(response) {
      console.log(response.data);
      $scope.todos = response.data;
    });

})
.service('dataService', function($http) {
  this.helloWorld = function() {
    console.log("This is the data service's method!!");
  };

  this.getTodos = function(callback){
    $http.get('mock/todos.json')
    .then(callback);
  };
});
