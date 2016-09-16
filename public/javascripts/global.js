var app = angular.module('myApp', []);
app.controller('ExampleController', ['$scope','$rootScope', function($scope, $rootScope) {
   $scope.data = {
    singleSelect:null,
    singleSelect2:null,
   };
}]);

app.controller('DateController', ['$scope', function($scope) {
               
		
        $scope.requestDate = new Date(2011, 1, 11);
    }
]);

app.controller('myCtrl', ['$scope','$http','$rootScope', function($scope,$http, $rootScope) {
  $scope.products = [
    {'name':'Store1', 'selected': false},
    {'name':'store2', 'selected': false},
    {'name':'store3', 'selected': false}
  ];
	$scope.checkboxModel = {
     	};

$scope.selectAll = function() {
  		angular.forEach($scope.products, function(product) {
       			 product.selected=true;
 		 });
	};    
$scope.deselectAll = function() {
  		angular.forEach($scope.products, function(product) {
        		product.selected=false;
  		});
	};          

$scope.saveAll = function () {	

  var selectedProducts = "";
  angular.forEach($scope.products, function(product) {
    if(product.selected) selectedProducts+= " , "+product.name;
  });
		var item = $( "#item option:selected" ).val().substr(7,8); item++;	
    		var date = angular.element($('#request-date')).val();
     		console.log("stores=", selectedProducts , "date =", date , "item index=",item);
    		$http({
     		  method : 'POST',
     		   url : '/storeData',
    		    data: { itemindex: item , datevalue:date,store:selectedProducts }
   		 }).then(function mySucces(response) {
    		    alert("success");
   		 }, function myError(response) {
    		    alert ("failure");
    		});
    		    }
}]);
