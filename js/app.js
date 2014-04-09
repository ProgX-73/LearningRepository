var myApp = angular.module('myApp', []);

myApp.controller('myAppCtrl', function ($scope,$http) {
        
        $scope.helloWorld = "Salut le monde";
        $scope.data = "";
     
        $scope.resetBtn = function (btn) {
            $scope.helloWorld = "Reset Clicked";
        }
        
        $scope.getDataBtn = function (btn) {
            
              $http.get('http://127.0.0.1:54044/LearningRepository/js/data.json')
                .success(function(datas) {$scope.data = datas;});
        }
         
});