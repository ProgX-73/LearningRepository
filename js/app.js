var myApp = angular.module('myApp', []);

myApp.controller('myAppCtrl', function ($scope) {
        
        $scope.helloWorld = "Salut le monde";
        $scope.data;
    
        $scope.resetBtn = function (btn) {
            $scope.helloWorld = "Reset Clicked";
        }
        
        $scope.getDataBtn = function (btn,$http) {
           $http.get('https://api.github.com/legacy/repos/search/LearningRepository')
        .success(function(datas) {
            $scope.data = datas.repositories;
        });
});