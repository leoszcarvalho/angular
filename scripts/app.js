angular.module("todoListApp", [])

.controller('mainCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log("Hello there! This the helloWorld controller function, in the mainCtrl!");
  };
})

.controller('coolCtrl', function($scope){
  $scope.whoAmI = function() {
    console.log("hello there, this is the coolCtrl function!");
  };

  $scope.helloWorld = function() {
    console.log("This is not the main ctrl!");
  };
})
.controller('imASibling', function($scope) {

  $scope.foobar = 1234;

  // do other cool stuff!

});
