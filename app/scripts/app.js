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
var ticApp = angular.module('ticApp', ['ui.router']);

ticApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'views/main.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html'
        });
        
});
