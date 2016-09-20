var app = angular.module('myApp', []);
app.controller('ExampleController', ['$scope','$http', function($scope,$http) {
   $scope.data = {
    singleSelect:null,
    singleSelect2:null,
   };

$scope.updateItems = function () {
	
console.log("inside updateItem function");
		var vendorname = $( "#vendor option:selected" ).text();
		console.log("vendorname=",vendorname);
		$http({
     		  method : 'POST',
     		   url : '/updateItems',
    		    data: { vendorname: vendorname}
   		 }).then(function mySucces(response) {
			console.log(response.data.output);
               $('.allItems' ).empty();
		$('.allItems').append('<select id="item" name="singleSelect2" ng-model="data.singleSelect2"></select>');
               for (var key in response.data.output)
               $('#item').append('<option value="option-'+key+'">'+response.data.output[key].iname+'</option>');
    		    
   		 }, function myError(response) {
		    console.log(response);
    		});

}

}]);

app.controller('DateController', ['$scope', function($scope) {
               
		
        $scope.requestDate = new Date(2011, 1, 11);
    }


]);

app.controller('myCtrl', ['$scope','$http', function($scope,$http) {
  $scope.products = [
    {'name':'Store1', 'selected': false},
    {'name':'store2', 'selected': false},
    {'name':'store3', 'selected': false},
    {'name':'Store4', 'selected': false},
    {'name':'store5', 'selected': false},
    {'name':'store6', 'selected': false},
    {'name':'Store7', 'selected': false},
    {'name':'store8', 'selected': false},
    {'name':'store9', 'selected': false}
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
    if(product.selected) selectedProducts+= product.name +" , ";
  });
		var itemname = $( "#item option:selected" ).text();	
    		var date = angular.element($('#request-date')).val();
     		console.log("stores=", selectedProducts , "date =", date , "item name=",itemname);
    		$http({
     		  method : 'POST',
     		   url : '/storeData',
    		    data: { itemname: itemname , datevalue:date,store:selectedProducts }
   		 }).then(function mySucces(response) {
    		    alert("success");
   		 }, function myError(response) {
    		    alert ("failure");
    		});
    }

}]);
