/// <reference path="angular.min.js" />

var myApp = angular.module("myModule", []);
myApp.controller("myController", function ($scope) {
    var employees =[
        {firstname: "David", lastname: "Hating",        gender: "male", salary:5500},
        {firstname: "John", lastname: "Dell",        gender: "male", salary:56500},
        {firstname: "Craig", lastname: "Smith",        gender: "female", salary:25500},
        {firstname: "Will", lastname: "Smith",        gender: "male", salary:15500},
    ];

    var countries = [
        {
            name: "UK",
            cities: [
                { name: "London" }, { name: "Manchester" }, { name: "Birmingham" }
            ]
        },
        {
            name: "USA",
            cities: [
                { name: "Las Vega" }, { name: "New York" }, { name: "Denver" }
            ]
        },
        {
            name: "India",
            cities: [
                { name: "Pune" }, { name: "Mumbai" }, { name: "Delhi" }
            ]
        }
        
    ];
    $scope.employees = employees;
    $scope.countries = countries;
})