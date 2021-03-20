angular
  .module('Demo', ['moment-picker', 'ngMaterial'])
  .controller('DemoController', ['$scope', function () {
    // $scope.onlyWeekendsPredicate = function(date) {
    //   var day = date.getDay();
    //   return day === 1 || day === 2 || day === 3 || day === 4 || day === 5;

    // };
    var ctrl = this;
    ctrl.isSelectable = function (date, type) {
      // disable all Sundays in the Month View
      return date.format('dddd') != 'Sunday';
  };
  }]);
  // $('.datepicker').pickadate({
  //   disable: [
  //     1, 4, 7
  //   ]
  // })
