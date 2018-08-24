var myPetApp = angular.module('myPetApp', ['ngRoute']);

myPetApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
      .when('/home', {
            templateUrl: 'views/home.html',
            controller: "HomeController"
    }).when('/about', {
        templateUrl: 'views/about.html'
    }).when('/pets', {
        templateUrl: 'views/pets.html',
        controller: 'MyPetAppController'
    }).otherwise({
        redirectTo: '/home'
    })
    
}]);

myPetApp.controller('HomeController', ['$scope', '$http', function($scope, $http) {

    $scope.subscribe = function() {
        console.log('Subscribe button clicked');
        //open modal w/ form, with ng-submit directive
        //create new object with subscriber data
        //use $http to put to JSON object
    }

}]);

myPetApp.controller('MyPetAppController', ['$scope', '$http', function($scope, $http) {

    $scope.avail = true;

    $scope.message = [{
        type: "Cat",
        message: "These are our current cats. If you see your pet or one you would like to adopts, give us a visit!"
    }, {
        type: "Dog",
        message: "These are our current dogs. If you see your pet or one you would like to adopts, give us a visit!"
    },{
        type: "Other",
        message: "Sometimes we rescue exoctic animals too! These animals may have extra adoption fees. Please call for more details regarding an animal you see here."
    }]
    
    $scope.message2 = {
        available: false,
        message: "These pets are currently unavailable for adoption at this time, but will be available soon! They either need a few more shots or need to grow for a few more weeks. Call us to reserve one of these furry friends for your own!"
    }

    $http.get('data/pets.json').then(function(res) {
        $scope.pets = res.data;
    })

}]);