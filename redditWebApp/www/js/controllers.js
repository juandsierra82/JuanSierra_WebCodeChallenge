
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

.directive('lvlDraggable', ['$rootScope', 'uuid', function($rootScope, uuid) {
        return {
            restrict: 'A',
            link: function(scope, el, attrs, controller) {
                angular.element(el).attr("draggable", "true");
 
                var id = angular.element(el).attr("id");
                if (!id) {
                    id = uuid.new()
                    angular.element(el).attr("id", id);
                }
                 
                el.bind("dragstart", function(e) {
                    e.dataTransfer.setData('text', id);
                    $rootScope.$emit("LVL-DRAG-START");
                });
                 
                el.bind("dragend", function(e) {
                    $rootScope.$emit("LVL-DRAG-END");
                });
            }
        }
    }])

.directive('lvlDropTarget', ['$rootScope', 'uuid', function($rootScope, uuid) {
        return {
            restrict: 'A',
            scope: {
                onDrop: '&'
            },
            link: function(scope, el, attrs, controller) {
                var id = angular.element(el).attr("id");
                if (!id) {
                    id = uuid.new()
                    angular.element(el).attr("id", id);
                }
                            
                el.bind("dragover", function(e) {
                    if (e.preventDefault) {
                      e.preventDefault(); // Necessary. Allows us to drop.
                  }
                   
                  if(e.stopPropagation) { 
                    e.stopPropagation(); 
                  }
 
                  e.dataTransfer.dropEffect = 'move';
                  return false;
                });
                 
                el.bind("dragenter", function(e) {
                  angular.element(e.target).addClass('lvl-over');
                });
                 
                el.bind("dragleave", function(e) {
                  angular.element(e.target).removeClass('lvl-over');  // this / e.target is previous target element.
                });
 
                el.bind("drop", function(e) {
                  if (e.preventDefault) {
                    e.preventDefault(); // Necessary. Allows us to drop.
                  }
 
                  if (e.stopPropogation) {
                    e.stopPropogation(); // Necessary. Allows us to drop.
                  }
 
                  var data = e.dataTransfer.getData("text");
                  var dest = document.getElementById(id);
                  var src = document.getElementById(data);
                     
                  scope.onDrop({dragEl: src, dropEl: dest});
                });
 
                $rootScope.$on("LVL-DRAG-START", function() {
                  var el = document.getElementById(id);
                  angular.element(el).addClass("lvl-target");
                });
                 
                $rootScope.$on("LVL-DRAG-END", function() {
                  var el = document.getElementById(id);
                  angular.element(el).removeClass("lvl-target");
                  angular.element(el).removeClass("lvl-over");
                });
            }
        }
    }])

.controller('myCtl', ['$scope', function($scope) {
    $scope.dropped = function(dragEl, dropEl) {
      // this is your application logic, do whatever makes sense
      var drag = angular.element(dragEl);
      var drop = angular.element(dropEl);
 
      console.log("The element " + drag.attr('id') + " has been dropped on " + drop.attr("id") + "!");
    };
  }])



