'use strict';
/* App Module */
var cbsExtApp = angular.module('messageApp', [
'ngRoute',
'messageControllers'
]);
cbsExtApp.config(['$routeProvider',
function($routeProvider) {
$routeProvider.
when('/home', {
	templateUrl: 'partials/home.html',
	controller: 'homeController'
}).
when('/about', {
	templateUrl: 'partials/messageDetails.html',
	controller: 'messageDetailsController'
}).
otherwise({
redirectTo: '/home'
});
}]);