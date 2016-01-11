var app = angular.module('quoteApp');

app.controller('authorsCtrl', function($scope, authorsService) {
    
  $scope.getAuthors = authorsService.getAuthors();
  console.log($scope.getAuthors)
  
});