angular.module('messageControllers',[])
.controller('homeController',function($scope,$http,$rootScope,$window){
	console.log("inside controller 1");
	$scope.deleteThis = function(id){
		
		$http.delete('/'+id).success(function(data){
			$scope.initFunction();
		})
		
	}
    $scope.initFunction = function(){
	   $http.get('/data').success(function(data){
	  $scope.messages = data;
	  
	  for(i in $scope.messages)
	  {
		  $scope.messages[i].participant="";
		  $scope.messages[i].ts = new Date($scope.messages[i].ts);
		  for(j in $scope.messages[i].participants)
		  {
			if(j == ($scope.messages[i].participants.length)-1){
			  $scope.messages[i].participant += $scope.messages[i].participants[j];
		     }
		  
		    else{
			  $scope.messages[i].participant += $scope.messages[i].participants[j]+", ";
		    }
		  }

	  }
    });
	
    }
    
	$scope.initFunction(); 
	
	$scope.passId = function(id)
	{
		$rootScope.currId = id;
		$window.location.href="/#/about"
	}
})
.controller('messageDetailsController',function($scope,$http,$rootScope,$window){
	console.log("inside controller 2");
	$http.get('/'+$rootScope.currId).success(function(data){
		$scope.myData = data;
		console.log($scope.myData);
		
			  $scope.myData.ts = new Date($scope.myData.ts);
			  $scope.myData.users =""
			  for(j in $scope.myData.participants){
				  if(j == ($scope.myData.participants.length)-1){
					  $scope.myData.users += $scope.myData.participants[j].name+"<"+$scope.myData.participants[j].email+">";
				  }
				  else{
					  $scope.myData.users += $scope.myData.participants[j].name+"<"+$scope.myData.participants[j].email+">"+", ";
				  }
				  
			  }
		  
	});
	
	if($rootScope.currId == undefined){
		$window.location.href="/";
	}
})