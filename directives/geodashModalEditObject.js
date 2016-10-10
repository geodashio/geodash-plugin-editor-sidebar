geodash.directives["geodashModalEditObject"] = function(){
  return {
    controller: geodash.controllers.GeoDashControllerModalEditObject,
    restrict: 'EA',
    replace: true,
    scope: {},
    //scope: true,
    templateUrl: 'modal_edit_object.tpl.html',
    link: function ($scope, element, attrs){}
  };
};
