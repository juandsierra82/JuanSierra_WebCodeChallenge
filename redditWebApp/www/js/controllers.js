
angular.module('starter.controllers', [])

.controller('RedditCtrl', function ($scope, jsonReq){

  $scope.posts = [];
  $scope.submit = function(){
    jsonReq.getJSON().then(function (res){
      console.log('in controller calling jsonReq, this is the response', res.data.children)
      $scope.posts = res.data.children;
    })
  }
})

.controller('MainCtrl', function ($scope, $state, $window) {
  $scope.data = {};

 
})



