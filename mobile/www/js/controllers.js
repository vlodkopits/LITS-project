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
  console.log("hello");
})

.controller('ListCtrl', function ($scope) {
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
