'use strict';

angular.module('myApp.main', ['ngRoute', 'ngStorage'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view/main.html',
    controller: 'MainCtrl'
  });
}])

.controller('MainCtrl', ['$scope', '$localStorage', function($scope, $localStorage) {

  $scope.ViewActions = {};

  var topHeaderData = {
    appName: "Venturus Dummy App",
    user: "John"
  };

  var jumbotronData = [
    {
      title: "Sector",
      text: "Sports",
      icon: "fa-puzzle-piece"
    },
    {
      title: "Sport Type",
      text: "Bycicles",
      icon: "fa-futbol-o"
    },
    {
      title: "Mode",
      text: "Mountain Cross",
      icon: "fa-bicycle"
    },
    {
      title: "Responsability",
      text: "Be Green!",
      icon: "fa-recycle"
    }
  ];

  var accordionData = {
    isOpen: false,
    title: "Help",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis vulputate est, nec molestie justo lobortis ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ultricies pulvinar ipsum sit amet tempus. Etiam at neque non nunc maximus faucibus. Pellentesque et diam nisi.\n\nAenean euismod vestibulum lacus, et ultricies augue interdum eu. Duis vestibulum elit nec arcu placerat pellentesque.Suspendisse mattis quam nulla. Integer vel justo facilisis, sagittis ex ac, venenatis nisi. Phasellus ligula justo, malesuada at dictum non, mollis sed enim. Nulla id diam est. Praesent dictum mi odio, in congue leo finibus eu. Pellentesque arcu odio, consequat id augue nec, commodo fermentum lacus.\n\nMauris mollis gravida ex tincidunt egestas. Fusce lobortis felis quis nibh rhoncus cursus. Quisque at tempor sem. Aliquam a tellus odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vitae porta tortor, sed consequat purus. Phasellus tincidunt placerat tellus ut rhoncus. Nulla sed tincidunt quam, sed molestie lorem. Donec hendrerit neque purus, nec consectetur est accumsan eget. In hac habitasse platea dictumst."
  };

  var initialPayload = [
    {
      id: 1376393340000,
      fullname: "James Isaac Neutron",
      email: "neutron@example.com",
      city: "Campinas",
      ride: "Always",
      regdate: 1376393340000,
      days: {
        Sun: true,
        Mon: true,
        Tue: true,
        Wed: true,
        Thu: true,
        Fri: true,
        Sat: true
      }
    },
    {
      id: 1366331340001,
      fullname: "Carl Wheezer",
      email: "carl@example.com",
      city: "Campinas",
      ride: "Sometimes",
      regdate: 1366331340000,
      days: {
        Sun: false,
        Mon: true,
        Tue: true,
        Wed: true,
        Thu: true,
        Fri: true,
        Sat: false
      }
    },
    {
      id: 1376393340002,
      fullname: "Cindy Vortex",
      email: "cindyvortex@example.com",
      city: "São Paulo",
      ride: "Never",
      regdate: 1376393340000,
      days: {
        Sun: true,
        Mon: false,
        Tue: false,
        Wed: false,
        Thu: false,
        Fri: false,
        Sat: true
      }
    },
    {
      id: 1376393340003,
      fullname: "Sheen Estevez",
      email: "sheen@example.com",
      city: "São Paulo",
      ride: "Sometimes",
      regdate: 1376393340000,
      days: {
        Sun: false,
        Mon: true,
        Tue: false,
        Wed: true,
        Thu: false,
        Fri: true,
        Sat: false
      }
    },
    {
      id: 1376393340004,
      fullname: "Libby Folfax",
      email: "folfax2014@example.com",
      city: "Americana",
      ride: "Sometimes",
      regdate: 1376393340000,
      days: {
        Sun: false,
        Mon: true,
        Tue: true,
        Wed: true,
        Thu: false,
        Fri: false,
        Sat: false
      }
    },
    {
      id: 1376393340005,
      fullname: "Nick Dean",
      email: "nickd@example.com",
      city: "Sumaré",
      ride: "Always",
      regdate: 1376393340000,
      days: {
        Sun: false,
        Mon: false,
        Tue: false,
        Wed: false,
        Thu: false,
        Fri: true,
        Sat: true
      }
    }
  ];

  var rideOptions = ["Always", "Sometimes", "Never"];
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var userModel = {
    id: null,
    fullname: null,
    email: null,
    city: null,
    ride: null,
    regdate: null,
    days: {
      Sun: false,
      Mon: false,
      Tue: false,
      Wed: false,
      Thu: false,
      Fri: false,
      Sat: false
    }
  };

  $scope.$storage = $localStorage.$default({
    bikers: initialPayload
  });


  $scope.ViewActions.toggleAccordion = function() {
    accordionData.isOpen = !accordionData.isOpen;
  }
  
  $scope.ViewActions.save = function(user, form) {
    if (form.$valid) {
      if (user.id == null) {
        user.id = Date.now();
        user.regdate = Date.now();
        $scope.bikers.push(angular.copy(user));
      } else {
        for(var i in $scope.bikers) {
          if ($scope.bikers[i].id == user.id) {
            $scope.bikers[i] = user;
          }
        }
      }
      
      $scope.ViewActions.cancel(form);
    }
  };

  $scope.ViewActions.delete = function(index) {
    $scope.bikers.splice(index,1);
  }

  $scope.ViewActions.edit = function(user) {
    $scope.user = angular.copy(user);
  }

  $scope.ViewActions.cancel = function(form) {
    $scope.user = {
      fullname: null,
      email: null,
      city: null,
      ride: null,
      days: {
        Sun: false,
        Mon: false,
        Tue: false,
        Wed: false,
        Thu: false,
        Fri: false,
        Sat: false
      }
    };
    form.$setPristine();
    form.$setUntouched();
  };

  /* Initialize the view data */
  function viewInit() {
    $scope.topHeader = topHeaderData;
    $scope.jumbotron = jumbotronData;
    $scope.accordion = accordionData;
    $scope.rideOptions = rideOptions;
    $scope.days = days;
    $scope.user = userModel;
    $scope.bikers = $scope.$storage.bikers;
  }
  
  viewInit();

}]);