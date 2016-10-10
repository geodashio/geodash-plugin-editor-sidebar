geodash.directives["geodashModalDashboardSecurity"] = function(){
  return {
    controller: geodash.controllers.GeoDashControllerModalDashboardSecurity,
    restrict: 'EA',
    replace: true,
    scope: {},
    templateUrl: 'geodash_modal_dashboard_security.tpl.html',
    link: function ($scope, element, attrs){}
  };
};
