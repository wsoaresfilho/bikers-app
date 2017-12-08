'use strict';

angular.module('myApp.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view/main.html',
    controller: 'MainCtrl'
  });
}])

.controller('MainCtrl', ['$scope', function($scope) {

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


  $scope.ViewActions.toggleAccordion = function() {
    accordionData.isOpen = !accordionData.isOpen;
  }

  /* Initialize the view data */
  function viewInit() {
    $scope.topHeader = topHeaderData;
    $scope.jumbotron = jumbotronData;
    $scope.accordion = accordionData;
  }
  
  viewInit();

}]);