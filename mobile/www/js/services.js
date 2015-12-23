angular.module('starter.services', [])


.factory('Chats', function($http) {
 
  var chats = var chats = $http.get('http://nm.lviv.ua/pro/adm/mobeventslist.php').success(function(data){ 
        return data;
        console.log(data);
      });
 
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