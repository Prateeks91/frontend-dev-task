angular.module('messageControllers',[])
.controller('homeController',function($scope,$http,$rootScope){
	console.log("inside controller 11");
	console.log("chec");
	$http.get('/data').success(function(data){
		console.log(data);
	})
})
.controller('messageDetailsController',function($scope,$http,$rootScope){
	console.log("inside controller 2");
})