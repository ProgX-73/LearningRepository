var myApp = angular.module('myApp', []);

myApp.controller('myAppCtrl', function ($scope) {
    $scope.helloWorld = "Salut le monde"; 
    
    $scope.resetBtn = function(btn){
        
        $scope.helloWorld = "Reset Clicked";
    }
});