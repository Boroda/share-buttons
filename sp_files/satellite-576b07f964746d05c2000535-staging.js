_satellite.pushAsyncScript(function(event, target, $variables){
  $(".product-detail__options").css("padding-bottom", "0");
$(".product-detail__description-shipping").css("display", "none");
$(".product-detail__options").append('<div style="margin: 0 -30px;padding:10px 0;background-color:#ebebeb;"><p style="padding: 0 30px;margin:0;font-size:11px;color:#444;"><strong>Shipping Note:</strong> Leaves the warehouse in as little as 1 business day. See <a href="/help-desk/shipping-page/shipping-and-delivery.html">Shipping Info</a> and <a href="/help-desk/returns-and-warranties/online-return-policy.html">Online Return Policy</a> for details.</p></div>');
});
