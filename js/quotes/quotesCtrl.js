var app = angular.module('quoteApp');

app.controller('quotesCtrl', function($scope, quoteService) {
    $scope.getQuote = quoteService.getQuote();
});