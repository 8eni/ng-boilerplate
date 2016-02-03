'use strict';

/**
 * @ngdoc overview
 * @name ticApp
 * @description
 * # ticApp
 *
 * Main module of the application.
 */
// app.js
// app.js
var ticApp = angular.module('ticApp', ['ui.router']);

ticApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
    .state('home', {
        url: '/home',
        templateUrl: 'components/home/partial-home.html'
    })

    // nested list with custom controller
    .state('home.list', {
        url: '/list',
        templateUrl: 'shared/partial-home-list.html',
        controller: function($scope) {
            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        }
    })

    // nested list with just some random string data
    .state('home.paragraph', {
        url: '/paragraph',
        template: 'I could sure use a drink right now.'
    });
        
});