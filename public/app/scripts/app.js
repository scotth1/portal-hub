'use strict';

angular.module('publicApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'publicApp.controllers',
    'ngRoute'
])
        .config(function($routeProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl'
                    })
                    .when('/map', {
                        templateUrl: 'views/map.html',
                        controller: 'MapCtrl'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
        });
