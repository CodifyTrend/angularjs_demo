var app = angular.module('myApp', []);
app.controller('ExampleController', ['$scope','$rootScope', function($scope, $rootScope) {
   $scope.data = {
    singleSelect:null,
    singleSelect2:null,
   };
}]);

app.controller('DateController', ['$scope', function($scope) {
        $scope.requestDate = new Date(2014, 3, 19);
    }
]);

app.controller('DateController', ['$scope', function($scope) {
      $scope.example = {
        value: new Date(2010, 11, 28, 14, 57)
      };
}]);

app.controller('myCtrl', ['$scope','$http','$rootScope', function($scope,$http, $rootScope) {

	$scope.checkboxModel = {
     	};

	$scope.selectAll = function() {

		$scope.checkboxModel.value1 = true;
		$scope.checkboxModel.value2 = true;
		$scope.checkboxModel.value3 = true;
		$scope.checkboxModel.value4 = true;
		$scope.checkboxModel.value5 = true;
		$scope.checkboxModel.value6 = true;
      
	};    
	$scope.deselectAll = function() {

		$scope.checkboxModel.value1 = false;
		$scope.checkboxModel.value2 = false;
		$scope.checkboxModel.value3 = false;
		$scope.checkboxModel.value4 = false;
		$scope.checkboxModel.value5 = false;
		$scope.checkboxModel.value6 = false;     
	};          

	$scope.saveAll = function () {
		
		var vendor = $( "#vendor option:selected" ).text();
		console.log("vender name = "+ vendor);
    		$http({
     		  method : 'POST',
     		   url : '/storeData',
    		    data: { test: 'testdata', }
   		 }).then(function mySucces(response) {
    		    alert("success");
   		 }, function myError(response) {
    		    alert ("failure");
    		});
    		    }
}]);
