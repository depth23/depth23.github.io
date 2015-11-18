var app = angular.module('quoteApp');

app.controller('classicsCtrl', function($scope, quoteService) {
    $scope.getBook = quoteService.getQuote();
});