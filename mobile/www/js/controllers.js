angular.module('starter.controllers', [])

//.controller('MapCtrl', function($scope) {})

// big map with events 
.controller ('MapCtrl',function ($scope){
  var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(49.832, 24.012),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

  $scope.map = new google.maps.Map(document.getElementById('events-gmap'), mapOptions);
  var myPos = navigator.geolocation.getCurrentPosition(function(position) {
      
    var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    
    var infowindow = new google.maps.InfoWindow({
        map: $scope.map,
        position: geolocate,
        zIndex: 1,
        content:
            'ти тут'
    });
   
    // Add circle overlay and bind to marker
    var circle = new google.maps.Circle({
      map: $scope.map,
      radius: 2000,    // metres
      strokeColor: '#024478',
      strokeOpacity: 0.6,
      strokeWeight: 1,
      fillOpacity:0.2,
      fillColor: '#2196f3'
    });
    circle.bindTo('center', infowindow, 'position');

    $scope.map.setCenter(geolocate);            
  });
})

.controller('ListCtrl', function ($scope) {
  // get enable event from db
var eventData = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'cache':false,
        'url': 'http://eventsmap.me/adm/eventslist.php',
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})(); 

// get current date
var currDate = new Date();

// get actual event list
var actualEvents = (function(){
    var eventsAll = [];
    var eventsAll = eventData;
    var events = [];
    currDate = moment(currDate).format("YYYY-MM-DD");

    for (var i=0; i<eventsAll.length; i++){
      for (var b=0; b<eventsAll[i].dates.length; b++){
          var compareDate = eventsAll[i].dates[b].date >= currDate; 
          
          if(compareDate==true){
              
              if(events.length==0){

                events.push(eventsAll[i]);

              } else if (events.length>0){
                  
                for (var j=0; j<events.length; j++){

                  var isEvent = (events[j].id) == (eventsAll[i].id);
                  
                  if(isEvent==true){
                      
                  }
                  else {
                    events.push(eventsAll[i]);
                  }
                }                
              }
          }
      }
    }
    // remove dublicate id
    var arr = events;
    arr.sort( function( a, b){ return a.id - b.id; } );

    // delete all duplicates from the array
    for( var i=0; i<arr.length-1; i++ ) {
      if ( arr[i].id == arr[i+1].id ) {
        delete arr[i];
      }
    }

    // remove the "undefined entries"
    arr = arr.filter( function( el ){ return (typeof el !== "undefined"); } );
    events = arr;
    return events;
})();

    $scope.events = [];
    $scope.events = actualEvents;
    $scope.currDate = moment(currDate).format("YYYY-MM-DD");

    $(function(){

      $(".filter_cat_all").click(function(){      
        $("button.btn").removeClass("active disabled");
        $(this).addClass("active disabled");
        $(".link_cat_all").show();
      });

      function FilterCat(i) {
        $(".filter_cat_" + i).click(function(){
          $("button.btn").removeClass("active disabled");
          $(this).addClass("active disabled");
            $(".link_cat_all").hide();
            $(".link_cat_" + i).show();
        });
      }

      cat_1 = new FilterCat(1);
      cat_2 = new FilterCat(2);
      cat_3 = new FilterCat(3);
      cat_4 = new FilterCat(4);
      cat_5 = new FilterCat(5);
      cat_6 = new FilterCat(6);
      cat_7 = new FilterCat(7);
    });
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
