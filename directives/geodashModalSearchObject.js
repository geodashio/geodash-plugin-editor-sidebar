geodash.directives["geodashModalSearchObject"] = function(){
  return {
    controller: geodash.controllers.GeoDashControllerModalSearchObject,
    restrict: 'EA',
    replace: true,
    scope: {},
    //scope: true,
    templateUrl: 'modal_search_object.tpl.html',
    link: function ($scope, element, attrs){}
  };
};
