'use strict';


angular.module('app')
  .controller('DemoCtrl', function ($scope, DummyService, $filter) {

    $scope.yesterday = new Date();
    $scope.yesterday.setDate($scope.yesterday.getDate() - 1);


    $scope.lastweek = new Date();
    $scope.lastweek.setDate($scope.lastweek.getDate() - 7);

    $scope.weekago = $filter('prettytime')($scope.lastweek,false,true,false);

    $scope.lastmonth = new Date();
    $scope.lastmonth.setMonth($scope.lastmonth.getMonth() - 1);
    $scope.lastmonth = $scope.lastmonth.getTime()/1000;
});
