angular
  .module('profileApp')
  .controller('aboutController', aboutController);

  aboutController.$inject = ['$location'];
  function aboutController(   $location  ) {
    var vm = this;
    console.log('AboutController is live!!!!');
    vm.sampleData = "testing testing: hello world";
  }
