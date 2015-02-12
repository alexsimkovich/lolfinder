'use strict';

/* Controllers */

var lolfinderControllers = angular.module('lolfinderControllers', []);

phonecatControllers.controller('ChampionListCtrl', ['$scope', 'Champion',
  function($scope, Champion) {
    $scope.champion = Champion.get({championId: $routeParams.championId}, function(chamption) {
      $scope.mainImageUrl = phone.images[0];
    });
    $scope.orderProp = 'age';
  }]);

//phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
//  function($scope, $routeParams, Phone) {
//    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
//      $scope.mainImageUrl = phone.images[0];
//    });
//
//    $scope.setImage = function(imageUrl) {
//      $scope.mainImageUrl = imageUrl;
//    }
//  }]);
