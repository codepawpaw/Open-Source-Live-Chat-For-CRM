'use strict';

/* Controllers */

angular.module('app.controllers', ['ngMaterial']).
  controller('AppCtrl', function ($scope, socket) {

      $scope.limit = -5;
      $scope.hide = true;

      $scope.loadMore = function(){
        $scope.limit = $scope.message.length;
        $scope.hide = true;
      };

      socket.on('send:time', function (data) {
        $scope.time = data.time;
      });

      $scope.message = [];


      socket.on('send:toAgent', function (data) {
        $scope.message.push({owner: 'visitor', message: data.text});
        if($scope.message.length > 5){
          $scope.limit = -5;
          $scope.hide = false;
        }
      });

      $scope.chat = function(name, text){
        $scope.message.push({owner: 'agent', message: text});
        socket.emit('send:chat', { name: name, text: text , from: 'agent'});
        $scope.text = "";
        if($scope.message.length > 5){
          $scope.limit = -5;
          $scope.hide = false;
        }
      };

      var tabs = [
            { title: 'Chat', content: "Tabs will become paginated if there isn't enough room for them."},
            { title: 'Broadcast', content: "Tabs will become paginated if there isn't enough room for them."}
          ],
          selected = null,
          previous = null;
      $scope.tabs = tabs;
      $scope.selectedIndex = 1;
      $scope.$watch('selectedIndex', function(current, old){
        previous = selected;
        selected = tabs[current];
        
      });
  }).
  controller('MyCtrl1', function ($scope, socket) {
    socket.on('send:time', function (data) {
      $scope.time = data.time;
    });
  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here
  });
