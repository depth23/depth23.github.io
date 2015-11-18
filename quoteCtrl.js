var app = angular.module('quoteApp');

app.controller('quoteCtrl', function($scope, quoteService) {
    $scope.modalShown = false;
    $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
    };
});