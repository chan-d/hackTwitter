angular.module('profileApp', ['ngRoute', 'templates', 'ngResource'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config (   $routeProvider,  $locationProvider) {
  $routeProvider
    .when('/about', {
      templateUrl: 'aboutMe.template.html',
      controller: 'aboutController',
      controllerAs: 'aboutMeCtrl'
    })
    .when('/', {
      templateUrl: 'profile.template.html',
      controller: 'HomeController',
      controllerAs: 'profileCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });


    $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}
