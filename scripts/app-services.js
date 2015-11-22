angular.module("todoListApp", [])
.controller('mainCtrl', function($scope, dataService) {
  $scope.learningNgChange = function() {
    console.log("An input changed!");
  };

  $scope.helloWorld = dataService.helloWorld;

  $scope.todos = [
    {"name": "clean the house"},
    {"name": "water the dog"},
    {"name": "feed the lawn"},
    {"name": "pay dem bills"},
    {"name": "run"},
    {"name": "swim"}
  ];

})
.service('dataService', function() {
  this.helloWorld = function() {
    console.log("This is the data service's method!!");
  };
});
