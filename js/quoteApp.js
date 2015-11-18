var app = angular.module('quoteApp', ['ngRoute']);

app.config(function($routeProvider){ $routeProvider
    .when('/', { 
        templateUrl: 'js/home/homeTmpl.html', 
        controller: 'homeCtrl' }) 
    .when('/authors/', {
          templateUrl: 'js/authors/authorsTmpl.html',
          controller: 'authorsCtrl' })
    .when('/classics/', { 
          templateUrl: 'js/classics/classicsTmpl.html',
          controller: 'classicsCtrl' }) 
    .when('/quotes/', { 
          templateUrl: 'js/quotes/quotesTmpl.html', 
          controller: 'quotesCtrl' }) 
    .when('/aboutUs/', {
          templateUrl: 'js/aboutUs/aboutUsTmpl.html',
          controller: 'aboutUsCtrl' })
    .when('/contactUs/', {
          templateUrl: 'js/contactUs/contactUsTmpl.html',
          controller: 'contactUsCtrl' })
    .otherwise({ redirectTo: '/' }) });