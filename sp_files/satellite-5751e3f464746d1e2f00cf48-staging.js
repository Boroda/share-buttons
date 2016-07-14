_satellite.pushAsyncScript(function(event, target, $variables){
  if (window.location.pathname == "/") {

  $(".static-grid_type_home .static-grid__item-border").css("border-width","13px 13px 0 0");
	$(".page-footer").css("border-top","13px solid #fff");
  $(".full-image__img").css({"border-top":"13px solid #fff","border-right":"13px solid #fff"});
  $(".home #main-content").css("border-left", "13px solid #fff");
  $(".static-grid_type_home-wrap").css("background","none");
}
});
