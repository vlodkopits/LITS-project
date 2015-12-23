angular.module('starter.services', [])


.factory('Chats', function($http) {
 
  var chats = [];
 
  return {
    all: function(){
        return chats;
    },
    get: function(chatId){
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  }
})