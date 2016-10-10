geodash.directives["geodashModalDashboardConfig"] = function(){
  return {
    controller: geodash.controllers.GeoDashControllerModalDashboardConfig,
    restrict: 'EA',
    replace: true,
    scope: {},
    templateUrl: 'geodash_modal_dashboard_config.tpl.html',
    link: function ($scope, element, attrs){}
  };
};
