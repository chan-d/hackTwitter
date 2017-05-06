'use strict';
angular
  .module('profileApp')
  .controller('HomeController', HomeController);

  HomeController.$inject = ['$location'];
  function HomeController(   $location  ) {
    var vm = this;
    console.log('HomeController is live!!!!');
    vm.lists = [{ id: 1, name: 'homework list'}, { id: 300, name: 'shopping'}];
    vm.sampleData = "testing testing: hello world";
  }
