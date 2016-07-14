var WF = function($, win, doc, undefined) {
	var experiment 					= 'SPO2_2A';

	var $body 						= $('body');
	var $mainContent 				= $body.find('#main-content');
	var $pageHeader 				= $mainContent.find('.global-page-header');
	var $productDetails 			= $mainContent.find('#product-detail__preview');

	var $clonedThumbnailArrows;

	// ELEMENT ON LOAD FUNCTION
	!function(t){var e=function(n,i){if(t(n)[0])try{i.apply(t(n)[0])}catch(o){setTimeout(function(){e(n,i)},1)}else setTimeout(function(){e(n,i)},1)};t.isReady&&setTimeout("c=function(){}",100),t.fn.elementOnLoad=function(t){e(this.selector,t)}}(jQuery);

	function manipulateDOM() {
		// ADD UNIQUE CLASS TO OVERWRITE CSS STYLING
		$body.addClass('wf-exp');

		var $logoCopy 					= $mainContent.find('.product-detail__description-blurb-logo').clone().addClass('wf-logo-copy');
		var $productTitle				= $pageHeader.find('.global-page-header__title').addClass('wf-product-title');
		var $reviewStars				= $productDetails.find('.rating.rating_small').addClass('wf-review-stars');
		var $addToWishList				= $productDetails.find('[data-module-type="AddToWishList"]').addClass('wf-add-to-wish-list');
		var $viewDescription			= $productDetails.find('.product-detail__user-reviews .product-detail-description-link').addClass('wf-view-description');

		// INSERT DUPLICATE LOGO TO HEADER
		$pageHeader.find('.page-breadcrumb').after($logoCopy);

		// SETUP CONTAINER FOR TITLE + REVIEW STAR + WISH LIST
		var $wfLogoCopy 			= $('.wf-logo-copy');

		// IF PRODUCT LOGO EXISTS, FORMAT
		if ($wfLogoCopy.length) {
			$wfLogoCopy.after('<div class="wf-title-container"></div>');
		} else {
			$pageHeader.find('.page-breadcrumb').after('<div class="wf-title-container wf-no-logo"></div>');
		}

		// INSERT REVIEWS AND WISH LIST TO PRODUCT TITLE CONTAINER
		$('.wf-title-container').prepend($('.wf-product-title')).append($reviewStars);
		$('.wf-review-stars').after($addToWishList);

		// REPOSITION VIEW DESCRIPTION
		$productDetails.find('.product-detail__options .locator').after($viewDescription);

		attachThumbnails();
	}

	function attachThumbnails() {
		$('.wf-image-preview').remove();

		setTimeout(function(){
			var $productImagePreview 		= $productDetails.find('.product-swatches').clone(true, true).addClass('wf-image-preview');

			// INSERT HORIZONTAL IMAGE PREVIEW BELOW PRODUCT IMAGE
			$productDetails.append($productImagePreview);

			// REMOVE UP AND DOWN ARROWS.
			$productDetails.find('.product-swatches__btn').text('');

			// ENABLE MOUSE SCROLL WHEN USER HOVERS ON DIV
			$('.wf-image-preview').unbind('mousewheel');

			// ADD UNIQUE CLASSES FOR NEW CAROUSEL ARROWS
			$clonedThumbnailArrows 			= $('.wf-image-preview .product-swatches__btn');

			$clonedThumbnailArrows
				.attr('href', 'javascript:void(0)')
				.first()
				.addClass('wf-left-arrow')
				.end()
				.last()
				.addClass('wf-right-arrow');

			imagePreviewCarousel();

			var $previewWrapper 				= $('.wf-image-preview .product-swatches__list-wrapper');
			var thumbnailCount 					= +$('.wf-image-preview li[data-swatch-index]').length;

			if (thumbnailCount === 7) {
				$previewWrapper.addClass('wf-thumb-7');
			} else if (thumbnailCount === 6) {
				$previewWrapper.addClass('wf-thumb-6');
			} else if (thumbnailCount === 5) {
				$previewWrapper.addClass('wf-thumb-5');
			} else if (thumbnailCount === 4) {
				$previewWrapper.addClass('wf-thumb-4');
			} else if (thumbnailCount === 3) {
				$previewWrapper.addClass('wf-thumb-3');
			} else if (thumbnailCount === 2) {
				$previewWrapper.addClass('wf-thumb-2');
			} else if (thumbnailCount === 1) {
				$previewWrapper.addClass('wf-thumb-1');
			}
		}, 10);
	}

	function imagePreviewCarousel() {
		// UNBIND CLICK EVENT AND RESET TO RESOLVE MULTIPLE CLICK EVENTS BEING BOUND WHEN USER RESIZES WINDOW
		$clonedThumbnailArrows.unbind('click');

		// COUNT HOW MANY IMAGE THUMBNAILS THERE ARE TO DETERMINE WIDTH OF CONTAINER
		var THUMBNAILWIDTH 					= 108;
		var thumbnailCount 					= +$('.wf-image-preview li[data-swatch-index]').length;
		var thumbnailContainerWidth 		= thumbnailCount * THUMBNAILWIDTH;

		var $previewWrapper 				= $('.wf-image-preview .product-swatches__list-wrapper');
		var $previewContainer 				= $('.wf-image-preview .product-swatches__list');

		$previewContainer.css({
			'width': thumbnailContainerWidth + 'px',
			'margin-left': 0 + 'px'
		});

		$('.wf-left-arrow').on('click', function() {
			var marginLeftPreviewContainer 			= +$previewContainer.attr('style').split('margin-left: ')[1].split('px;')[0];
			var moveDistance 						= marginLeftPreviewContainer + THUMBNAILWIDTH;

			if (marginLeftPreviewContainer < 0) {
				$previewContainer.css({
					'margin-left': moveDistance + 'px'
				});
			} else {
				$previewWrapper.effect('shake', {
					times: 2,
					distance: 10
				}, 800);
			}
		});

		$('.wf-right-arrow').on('click', function() {
			var marginLeftPreviewContainer 		= +$previewContainer.attr('style').split('margin-left: ')[1].split('px;')[0];
			var moveDistance 					=  marginLeftPreviewContainer - THUMBNAILWIDTH;

			var documentWidth 					= +$(document).width();
			var limit;

			if (documentWidth > 768 && documentWidth <= 1023) {
				limit = 3;
			} else if (documentWidth >= 1024 && documentWidth <= 1240) {
				limit = 5;
			} else if (documentWidth >= 1241) {
				limit = 7;
			}

			var rightLimit 						= (-1 * thumbnailContainerWidth) + (limit * THUMBNAILWIDTH);

			if (marginLeftPreviewContainer > rightLimit) {
				$previewContainer.css({
					'margin-left': moveDistance + 'px'
				});
			} else {
				$previewWrapper.effect('shake', {
					times: 2,
					distance: 10
				}, 800);
			}
		});

		// SHOW/HIDE CAROUSEL ARROW IF COUNT IS LESS THAN LIMIT
		var documentWidth 					= +$(document).width();
		var $wfArrow 						= $('.wf-right-arrow, .wf-left-arrow');

		if (documentWidth > 768 && documentWidth <= 1023) {
			if (thumbnailCount <= 3) {
				$wfArrow.addClass('wf-arrow-hidden');
			} else {
				$wfArrow.removeClass('wf-arrow-hidden');
			}
		} else if (documentWidth >= 1024 && documentWidth <= 1240) {
			if (thumbnailCount <= 5) {
				$wfArrow.addClass('wf-arrow-hidden');
			} else {
				$wfArrow.removeClass('wf-arrow-hidden');
			}
		} else if (documentWidth >= 1241) {
			if (thumbnailCount <= 7) {
				$wfArrow.addClass('wf-arrow-hidden');
			} else {
				$wfArrow.removeClass('wf-arrow-hidden');
			}
		}
	}

	function bindEventHandlers() {
		// ONLY EXECUTE imagePreviewCarousel() ONCE
		var timeOut = null;

		window.onresize = function(){
			if (timeOut != null) {
				clearTimeout(timeOut);
			}

			timeOut = setTimeout(function(){
				imagePreviewCarousel();
			}, 500);
		};

		// REATTACH THUMBNAILS WHEN USER CHANGES COLOURS
		$body.on('click', function(e){
			if ($(e.target).hasClass('product-detail__color-option')) {
				attachThumbnails();
			}
		});

		// CLICKS TO - FIND IN STORE (GOAL TRACKING)
		$body.on('click', '.product-detail__action-button-wrapper .locator', function() {
			var goal 	= 'wfClicksToFindInStore2_2';

			apiGoalTrackingSetup(goal);
		});

		// CLICKS TO - ADD TO CART (GOAL TRACKING)
		$body.on('click', '.product-detail__action-button-wrapper .add-cart', function() {
			var goal 	= 'wfClicksToAddToCart2_2';

			apiGoalTrackingSetup(goal);
		});

		// CLICKS TO - ADD TO WISHLIST (GOAL TRACKING)
		$body.on('click', '.wf-add-to-wish-list .wishlist', function() {
			var goal 	= 'wfClicksToAddToWishList2_2';

			apiGoalTrackingSetup(goal);
		});

		// CLICKS TO - FREE SHIPPING (GOAL TRACKING)
		$body.on('click', '.sale-banner__left .sale-banner__link[data-promo-text]', function() {
			var goal 	= 'wfClicksToFreeShipping2_2';

			apiGoalTrackingSetup(goal);
		});

		// CLICKS TO - FREE IN STORE RETURNS (GOAL TRACKING)
		$body.on('click', '.sale-banner__center .sale-banner__link', function() {
			var goal 	= 'wfClicksToFreeInStoreReturns2_2';

			apiGoalTrackingSetup(goal);
		});

		// CLICKS TO - VIEW DESCRIPTION (GOAL TRACKING)
		$body.on('click', '.wf-view-description', function() {
			var goal 	= 'wfClicksToViewDescription2_2';

			apiGoalTrackingSetup(goal);
		});

		// CLICKS TO - REVIEW STARS (GOAL TRACKING)
		$body.on('click', '.rating .rating__counter a', function() {
			var goal 	= 'wfClicksToReviewStars2_2';

			apiGoalTrackingSetup(goal);
		});

		// CLICKS TO - IMAGE THUMBNAIL IMAGES (GOAL TRACKING)
		$body.on('click', '.product-swatches__list > li', function() {
			var goal 	= 'wfClicksToThumbnailImages2_2';

			apiGoalTrackingSetup(goal);
		});

		// CLICKS TO - PRODUCT LOGO TOP (GOAL TRACKING)
		$body.on('click', '.wf-logo-copy.product-detail__description-blurb-logo a', function(e) {
			e.preventDefault();

			var goal 	= 'wfClicksToProductLogoTop2_2';
			var url 	= $(this).attr('href');

			apiGoalTrackingSetup(goal, url);
		});

		// CLICKS TO - PRODUCT LOGO BOT (GOAL TRACKING)
		$body.on('click', '.product-detail__description .product-detail__description-blurb-logo a', function(e) {
			e.preventDefault();

			var goal 	= 'wfClicksToProductLogoBot2_2';
			var url 	= $(this).attr('href');

			apiGoalTrackingSetup(goal, url);
		});
	}

	function apiGoalTrackingSetup(goal, url) {
		// ==========================
		// T&T (CLASSIC AND STANDARD)
		// ==========================
		var mboxClickTrack = goal;
		mboxDefine(goal, goal).setFetcher(new mboxAjaxFetcher);
		mboxUpdate(mboxClickTrack,mboxClickTrack,'clicked='+goal);

		if (url) {
			setTimeout(function() {
				window.location.href = url;
			}, 1000);
		}
	}

	function cssBasePath() {
		var path = $('#' + experiment).attr('src');
		path = path.substr(0, path.lastIndexOf('/'));
		path = path + '/';
		return path;
	}

	function attachExperimentCss() {
		var variation;
		var path  = cssBasePath();
		client    = experiment.substr(0, 3).toLowerCase();
		experiment.indexOf('control') > -1 ? variation = 'control' : variation = 'var' + experiment.substr(-1);
		$('head').append('<link href="'+ path + client + '-styles-' + variation + '.css" type="text/css" rel="stylesheet">');
	}

	function displayBody() {
		setTimeout(function() {
			var el = document.getElementById('wf-flicker');
			if(el) el.parentNode.removeChild(el);
		}, 500);
	}

	function init() {
		attachExperimentCss();
		manipulateDOM();
		bindEventHandlers();
		displayBody();
	}

	function calculateViewport() {
		var e = window, a = 'inner';

		if (!('innerWidth' in window )) {
			a = 'client';
			e = document.documentElement || document.body;
		}

		return {
			width : e[ a+'Width' ],
			height : e[ a+'Height' ]
		};
	}

	// REVERT TO CONTROL IF WINDOW WIDTH < 768PX
	if (calculateViewport().width > 768) {
		$(window).on('resize', function() {
			if (calculateViewport().width <= 768) {
				location.reload();
			}
		});

		// WAIT FOR ADD TO WISHLIST TO EXIST AS WELL AS ALL IMAGES
		$('[data-module-type="AddToWishList"]').elementOnLoad(function() {
			$(window).on('load', function() {
				if (window.navigator.userAgent.indexOf('MSIE')) {
					setTimeout(function() {
						init();
					}, 1000);
				} else {
					init();
				}
			});
		});
	} else {
		displayBody();
	}

	return { exp: experiment };
};

var waitForjQuery = setInterval(function() {
	if (window.jQuery) {
		clearInterval(waitForjQuery);
		WF(jQuery, window, document);
	}
}, 50);