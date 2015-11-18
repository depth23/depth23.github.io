var app = angular.module('quoteApp')
                        
app.directive('showTime', function(){
    return {
        restrict: 'E',
        template: '<div>Today is {{time | date:short}} </div>',
        link: function(scope, element, attrs) {
            scope.time = new Date();
            
        }
    }
});
