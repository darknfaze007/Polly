Template.masterLayout.rendered = function () {
  $(".button-collapse").sideNav();
  $("select").material_select();
};

Template.masterLayout.events({
    "click ul#mobile-nav.side-nav li a": function(event){
      $(".button-collapse").sideNav("hide");
    }
});