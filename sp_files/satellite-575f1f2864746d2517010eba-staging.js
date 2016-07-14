_satellite.pushAsyncScript(function(event, target, $variables){
  $(function(){

	$(document).ajaxSuccess(function(event, xhr, settings) {
		if (settings.url.indexOf('/services/sportchek/customer/subscription/subscribe') > -1) {
			
			// var signupData = JSON.parse(xhr.responseText);

			// Generate pixel on success
			var axel = Math.random() + "";
			var a = axel * 10000000000000;
			var signupPixelStr = '<iframe src="https://4967459.fls.doubleclick.net/activityi;';
				signupPixelStr += 'src=4967459;type=spchek01;cat=sport001;dc_lat=;dc_rdid=;';
				signupPixelStr += 'tag_for_child_directed_treatment=;ord=' + a;
				signupPixelStr += '?" width="1" height="1" frameborder="0" style="display:none"></iframe>';

			$('body').prepend(signupPixelStr);

		}

	});
});
});
