'use strict';

/* Services */

var phonecatServices = angular.module('lolfinderServices', ['ngResource']);

phonecatServices.factory('Champion', ['$resource',
  function($resource){
    return $resource('data/:championId.json', {}, {
      query: {method:'GET', params:{championId:'phones'}, isArray:true}
    });
  }]);
