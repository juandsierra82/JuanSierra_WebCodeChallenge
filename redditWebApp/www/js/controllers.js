
angular.module('starter.controllers', [])

.controller('RedditCtrl', function ($scope, jsonReq){

  $scope.posts = [];
  $scope.search = "funny";

  $scope.submit = function(searchText){
    var string = searchText || $scope.search;

    console.log('the value of search is ', string)
    jsonReq.getJSON(string).then(function (res){
      console.log('in controller calling jsonReq, this is the response', res.data.children)
      $scope.posts = res.data.children;
    })
  }
})

.controller('MainCtrl', function ($scope, $state, $window) {
  $scope.data = {};

 
})
.directive()



