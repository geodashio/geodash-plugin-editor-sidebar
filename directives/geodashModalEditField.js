geodash.directives["geodashModalEditField"] = function(){
  return {
    controller: geodash.controllers.GeoDashControllerModalEditField,
    replace: true,
    //require: undefined,
    restrict: 'EA',
    scope: {},
    //scope: true,
    templateUrl: 'modal_edit_field.tpl.html',
    link: function ($scope, element, attrs){}
  };
};
