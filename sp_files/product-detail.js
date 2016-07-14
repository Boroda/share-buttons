(function(){dust.register("availableAtStore",body_0);function body_0(chk,ctx){return chk.exists(ctx._get(false, ["storeName"]),ctx,{"block":body_1},null);}function body_1(chk,ctx){return chk.helper("i18n",ctx,{},{"key":"PRD0097"}).write(" (<a href=\"").reference(ctx._get(false, ["storeLink"]),ctx,"h").write("\" target=\"_blank\">").reference(ctx._get(false, ["storeName"]),ctx,"h").write("</a>)");}return body_0;})();
(function(){dust.register("reviewsListPagination",body_0);function body_0(chk,ctx){return chk.helper("if",ctx,{"block":body_1},{"cond":body_5});}function body_1(chk,ctx){return chk.write("<div class=\"reviews__see-more\">").helper("if",ctx,{"else":body_2,"block":body_3},{"cond":body_4}).write("</div><!-- /.reviews__see-more -->");}function body_2(chk,ctx){return chk.write("<button class=\"reviews__less\">").helper("i18n",ctx,{},{"key":"PRD0080"}).write("</button>");}function body_3(chk,ctx){return chk.write("<button class=\"reviews__more\">").helper("i18n",ctx,{},{"key":"PRD0079"}).write("</button>");}function body_4(chk,ctx){return chk.reference(ctx._get(false, ["loadedReviewsCount"]),ctx,"h").write(" < ").reference(ctx._get(false, ["reviewsCount"]),ctx,"h");}function body_5(chk,ctx){return chk.reference(ctx._get(false, ["reviewsCount"]),ctx,"h").write(" > ").reference(ctx._get(false, ["pageSize"]),ctx,"h");}return body_0;})();
(function(){dust.register("reviewsListSections",body_0);function body_0(chk,ctx){return chk.section(ctx._get(false, ["data"]),ctx,{"block":body_1},null);}function body_1(chk,ctx){return chk.write("<section class=\"review\"><div class=\"review__content\">").exists(ctx._get(false, ["syndicated"]),ctx,{"block":body_2},null).write("<div class=\"review__rating\"><div class=\"rating rating_big\"><div class=\"rating__blank\"><div class=\"rating__value\" style=\"width: ").helper("getRatingWidth",ctx,{},null).write("%;\"></div></div><div class=\"rating__counter\">").reference(ctx._get(false, ["rating"]),ctx,"h").write(".0</div></div></div><!-- /.review__rating --><h1 class=\"review__title\">").reference(ctx._get(false, ["title"]),ctx,"h").write("</h1><div class=\"review__info-block\"><strong class=\"review__info\">").reference(ctx._get(false, ["reviewsName"]),ctx,"h").write("</strong><span class=\"review__info\">").reference(ctx._get(false, ["location"]),ctx,"h").write("</span><span class=\"review__info\">").helper("getFormattedDate",ctx,{},{"fromProperty":"createdDate","toFormat":"MMMM DD, YYYY"}).write("</span></div><div class=\"review__text review__text_comment\">").reference(ctx._get(false, ["reviewsDescription"]),ctx,"h").write("</div><div class=\"review__add-info\"><div class=\"review__text\"><div class=\"review__text-block\"><strong class=\"review__text-definition\">").helper("i18n",ctx,{},{"key":"PRD0073"}).write("</strong> <div class=\"review__text-description\">").section(ctx._get(false, ["pros"]),ctx,{"else":body_4,"block":body_5},null).write("</div></div><div class=\"review__text-block\"><strong class=\"review__text-definition\">").helper("i18n",ctx,{},{"key":"PRD0074"}).write("</strong> <div class=\"review__text-description\">").section(ctx._get(false, ["cons"]),ctx,{"else":body_7,"block":body_8},null).write("</div></div></div><!-- /.review__add-info -->").exists(ctx._get(false, ["bottomLine"]),ctx,{"block":body_10},null).section(ctx._get(false, ["badges"]),ctx,{"block":body_14},null).write("<div class=\"review__helpful ").exists(ctx._get(false, ["votedForHelpfulness"]),ctx,{"block":body_15},null).write("\">").helper("i18n",ctx,{},{"key":"PRD0076"}).write(" <div class=\"review__helpful-answer\"><a class=\"review__helpful-button\" data-vote-decision=\"helpful\" data-shared-review-id=\"").reference(ctx._get(false, ["sharedReviewId"]),ctx,"h").write("\" href=\"#\">").helper("i18n",ctx,{},{"key":"PRD0077"}).write(" (").reference(ctx._get(false, ["helpful"]),ctx,"h").write(")</a> / <a class=\"review__helpful-button\" data-vote-decision=\"unhelpful\" data-shared-review-id=\"").reference(ctx._get(false, ["sharedReviewId"]),ctx,"h").write("\" href=\"#\">").helper("i18n",ctx,{},{"key":"PRD0078"}).write(" (").reference(ctx._get(false, ["notHelpful"]),ctx,"h").write(")</a></div><!-- /.review__helpful-answer --><div class=\"review__notification thank-you-notification\"><span class=\"speech-bubble speech-bubble_red\">").helper("i18n",ctx,{},{"key":"PRD0085"}).write("</span>").helper("i18n",ctx,{},{"key":"PRD0086"}).write("</div></div><!-- /.review__helpful --></div></div><!-- /.review__content --></section>");}function body_2(chk,ctx){return chk.write("<div class=\"review__partner-info\">").section(ctx._get(false, ["syndicatedContentAttribution"]),ctx,{"block":body_3},null).write("</div><!-- /.review__partner-info -->");}function body_3(chk,ctx){return chk.write("<span> ").helper("i18n",ctx,{},{"key":"PRD0101"}).write("</span><a class=\"review__partner-image\" href=\"").reference(ctx._get(false, ["link"]),ctx,"h").write("\"><img src=\"").reference(ctx._get(false, ["image"]),ctx,"h").write("\" alt=\"").reference(ctx._get(false, ["source"]),ctx,"h").write("\"></a>");}function body_4(chk,ctx){return chk.helper("i18n",ctx,{},{"key":"PRD0081"});}function body_5(chk,ctx){return chk.reference(ctx._get(true,[]),ctx,"h").helper("sep",ctx,{"block":body_6},null);}function body_6(chk,ctx){return chk.write(", ");}function body_7(chk,ctx){return chk.helper("i18n",ctx,{},{"key":"PRD0081"});}function body_8(chk,ctx){return chk.reference(ctx._get(true,[]),ctx,"h").helper("sep",ctx,{"block":body_9},null);}function body_9(chk,ctx){return chk.write(", ");}function body_10(chk,ctx){return chk.write("<div class=\"review__text\"><strong class=\"review__text-definition\">").helper("i18n",ctx,{},{"key":"PRD0075"}).write("</strong> <div class=\"review__text-description\">").helper("if",ctx,{"else":body_11,"block":body_12},{"cond":body_13}).write("</div></div>");}function body_11(chk,ctx){return chk.helper("i18n",ctx,{},{"key":"PRD0088"});}function body_12(chk,ctx){return chk.helper("i18n",ctx,{},{"key":"PRD0087"});}function body_13(chk,ctx){return chk.write("('").reference(ctx._get(false, ["bottomLine"]),ctx,"h").write("' === 'Yes')");}function body_14(chk,ctx){return chk.write("<div class=\"review__bage\"><img src=\"").reference(ctx._get(false, ["badgeUrl"]),ctx,"h").write("\" alt=\"").reference(ctx._get(false, ["merchantName"]),ctx,"h").write("\"/></div>");}function body_15(chk,ctx){return chk.write("review__helpful_voted");}return body_0;})();
(function(){dust.register("writeReviewModalEdit",body_0);function body_0(chk,ctx){return chk.section(ctx._get(false, ["field"]),ctx,{"block":body_1},null).write("<div class=\"modal__devider\"></div>").section(ctx._get(false, ["tag_group"]),ctx,{"block":body_18},null).write("<div class=\"button-holder\"><input class=\"button button_state_disabled review-modal__go-to-preview\" type=\"submit\" value=\"").helper("i18n",ctx,{},{"key":"PRD0060"}).write("\" data-form-blocking=\"button\" disabled=\"\"></div>");}function body_1(chk,ctx){return chk.helper("select",ctx,{"block":body_2},{"key":ctx._get(false, ["key"])});}function body_2(chk,ctx){return chk.helper("eq",ctx,{"block":body_3},{"value":"rating"}).helper("eq",ctx,{"block":body_6},{"value":"comments"}).helper("default",ctx,{"block":body_9},null);}function body_3(chk,ctx){return chk.write("<label class=\"label-set label-set_half\"><div class=\"label-set__text\">").exists(ctx._get(false, ["is_required"]),ctx,{"block":body_4},null).reference(ctx._get(false, ["name"]),ctx,"h").write(":</div><div class=\"rating rating_small\"><div class=\"rating__blank\"><div class=\"rating__value\"></div></div></div><input name=\"").reference(ctx._get(false, ["key"]),ctx,"h").write("\" class=\"rating__value-input\" type=\"hidden\" value=\"\" ").exists(ctx._get(false, ["is_required"]),ctx,{"block":body_5},null).write("></label>");}function body_4(chk,ctx){return chk.write("<span class=\"label-set__imp\">*</span>");}function body_5(chk,ctx){return chk.write("data-form-blocking=\"input\"");}function body_6(chk,ctx){return chk.write("<label class=\"label-set label-set_full\">").exists(ctx._get(false, ["is_required"]),ctx,{"block":body_7},null).reference(ctx._get(false, ["name"]),ctx,"h").write(":<textarea name=\"").reference(ctx._get(false, ["key"]),ctx,"h").write("\" rows=\"6\" maxlength=\"255\" data-module-type=\"TextFieldPlaceholder\" placeholder=\"").helper("i18n",ctx,{},{"key":"PRD0063"}).write("\" class=\"label-set__textarea\" ").exists(ctx._get(false, ["is_required"]),ctx,{"block":body_8},null).write("></textarea></label>");}function body_7(chk,ctx){return chk.write("<span class=\"label-set__imp\">*</span>");}function body_8(chk,ctx){return chk.write("data-form-blocking=\"input\"");}function body_9(chk,ctx){return chk.write("<label class=\"label-set label-set_full\"><div class=\"label-set__text\">").exists(ctx._get(false, ["is_required"]),ctx,{"block":body_10},null).reference(ctx._get(false, ["name"]),ctx,"h").write(":</div><input type=\"text\" data-module-type=\"TextFieldPlaceholder\" name=\"").reference(ctx._get(false, ["key"]),ctx,"h").write("\" placeholder=\"").helper("i18n",ctx,{},{"key":body_11}).write("\" ").exists(ctx._get(false, ["is_required"]),ctx,{"block":body_12},null).helper("select",ctx,{"block":body_13},{"key":ctx._get(false, ["key"])}).write("></label>");}function body_10(chk,ctx){return chk.write("<span class=\"label-set__imp\">*</span>");}function body_11(chk,ctx){return chk.write("PRD.ADD_REVIEW_MODAL.").reference(ctx._get(false, ["key"]),ctx,"h");}function body_12(chk,ctx){return chk.write("data-form-blocking=\"input\"");}function body_13(chk,ctx){return chk.helper("eq",ctx,{"block":body_14},{"value":"headline"}).helper("eq",ctx,{"block":body_15},{"value":"location"}).helper("eq",ctx,{"block":body_16},{"value":"name"}).helper("eq",ctx,{"block":body_17},{"value":"merchant_user_email"});}function body_14(chk,ctx){return chk.write(" maxlength=\"40\"");}function body_15(chk,ctx){return chk.write(" maxlength=\"30\"");}function body_16(chk,ctx){return chk.write(" maxlength=\"30\"");}function body_17(chk,ctx){return chk.write(" readonly=\"readonly\" ");}function body_18(chk,ctx){return chk.write("<div class=\"label-set label-set_full review-modal__tag\"><label class=\"label-set__text\">").reference(ctx._get(false, ["name"]),ctx,"h").write(":</label>").helper("select",ctx,{"block":body_19},{"key":ctx._get(false, ["answer_type"])}).write("</div>");}function body_19(chk,ctx){return chk.helper("eq",ctx,{"block":body_20},{"value":"single"}).helper("eq",ctx,{"block":body_31},{"value":"multiple"});}function body_20(chk,ctx){return chk.helper("if",ctx,{"else":body_21,"block":body_25},{"cond":body_30});}function body_21(chk,ctx){return chk.section(ctx._get(false, ["tag"]),ctx,{"block":body_22},null);}function body_22(chk,ctx){return chk.write("<label class=\"label-set label-set_radio gray-text\"><input name=\"tag_group.").reference(ctx._get(false, ["key"]),ctx,"h").write("[]\" class=\"hidden-input\" type=\"radio\" ").helper("eq",ctx,{"block":body_23},{"key":body_24,"value":"0"}).write(" value=\"").reference(ctx._get(true,[]),ctx,"h").write("\"><span class=\"radio\"></span>").reference(ctx._get(true,[]),ctx,"h").write("</label>");}function body_23(chk,ctx){return chk.write("checked=\"checked\"");}function body_24(chk,ctx){return chk.reference(ctx._get(false, ["$idx"]),ctx,"h");}function body_25(chk,ctx){return chk.section(ctx._get(false, ["tag"]),ctx,{"block":body_26},null);}function body_26(chk,ctx){return chk.write("<label class=\"label-set label-set_radio gray-text\"><input name=\"tag_group.").reference(ctx._get(false, ["key"]),ctx,"h").write("[]\" class=\"hidden-input\" type=\"radio\" ").helper("eq",ctx,{"block":body_27},{"key":body_28,"value":"0"}).write(" value=\"").reference(ctx._get(true,[]),ctx,"h").write("\"><span class=\"radio\"></span>").helper("i18n",ctx,{},{"key":body_29}).write("</label>");}function body_27(chk,ctx){return chk.write("checked=\"checked\"");}function body_28(chk,ctx){return chk.reference(ctx._get(false, ["$idx"]),ctx,"h");}function body_29(chk,ctx){return chk.write("PRD.ADD_REVIEW_MODAL.bottomline.").reference(ctx._get(true,[]),ctx,"h");}function body_30(chk,ctx){return chk.write("('").reference(ctx._get(false, ["key"]),ctx,"h").write("' === 'bottomline')");}function body_31(chk,ctx){return chk.section(ctx._get(false, ["tag"]),ctx,{"else":body_32,"block":body_33},null).write("<div class=\"label-set_add-tag review__add-option\" data-key=\"").reference(ctx._get(false, ["key"]),ctx,"h").write("\"><input type=\"text\" class=\"label-set__text-field\" data-module-type=\"TextFieldPlaceholder\" placeholder=\"").helper("i18n",ctx,{},{"key":"PRD0083"}).write("\" maxlength=\"50\"><input class=\"button button_state_disabled review__add-option-button\" type=\"button\" value=\"").helper("i18n",ctx,{},{"key":"PRD0061"}).write("\" disabled></div>");}function body_32(chk,ctx){return chk.write("<input name=\"tag_group.").reference(ctx._get(false, ["key"]),ctx,"h").write("[]\" type=\"hidden\">");}function body_33(chk,ctx){return chk.write("<label class=\"label-set label-set_checkbox gray-text review__option\"><input name=\"tag_group.").reference(ctx._get(false, ["key"]),ctx,"h").write("[]\" class=\"hidden-input\" type=\"checkbox\" value=\"").reference(ctx._get(true,[]),ctx,"h").write("\"><span class=\"checkbox\"></span>").reference(ctx._get(true,[]),ctx,"h").write("</label>");}return body_0;})();
(function(){dust.register("writeReviewModalPreview",body_0);function body_0(chk,ctx){return chk.write("<div class=\"review__rating\"><div class=\"rating rating_big\"><div class=\"rating__blank\"><div class=\"rating__value\" style=\"width: ").helper("getRating",ctx,{},{"value":body_1}).write("%;\"></div></div><div class=\"rating__counter\">").reference(ctx._get(false, ["rating"]),ctx,"h").write("</div></div></div><h1 class=\"review__title\">").reference(ctx._get(false, ["headline"]),ctx,"h").write("</h1><div class=\"review__info-block\"><strong class=\"review__info\">").reference(ctx._get(false, ["name"]),ctx,"h").write("</strong><span class=\"review__info\">").reference(ctx._get(false, ["location"]),ctx,"h").write("</span><span class=\"review__info\">").reference(ctx._get(false, ["date"]),ctx,"h").write("</span></div><p class=\"review__text review__text_comment\">").reference(ctx._get(false, ["comments"]),ctx,"h").write("</p><div class=\"review__add-info\"><div class=\"review__text\">").section(ctx._get(false, ["tag_group"]),ctx,{"block":body_2},null).write("</div></div><p class=\"review__text\">").helper("i18n",ctx,{},{"key":"PRD0062"}).write("</p>");}function body_1(chk,ctx){return chk.reference(ctx._get(false, ["rating"]),ctx,"h");}function body_2(chk,ctx){return chk.helper("if",ctx,{"block":body_3},{"cond":body_6});}function body_3(chk,ctx){return chk.write("<div class=\"review__text-block\"><strong class=\"review__text-definition\">").reference(ctx._get(false, ["name"]),ctx,"h").write(":</strong> <div class=\"review__text-description\">").exists(ctx._get(false, ["value"]),ctx,{"else":body_4,"block":body_5},null).write("</div></div>");}function body_4(chk,ctx){return chk.write("none");}function body_5(chk,ctx){return chk.reference(ctx._get(false, ["value"]),ctx,"h");}function body_6(chk,ctx){return chk.write("('").reference(ctx._get(false, ["key"]),ctx,"h").write("' !== 'bottomline')");}return body_0;})();
(function(){dust.register("writeReviewTag",body_0);function body_0(chk,ctx){return chk.write("<label class=\"label-set label-set_checkbox gray-text review__option\"><input name=\"tag_group.").reference(ctx._get(false, ["key"]),ctx,"h").write("[]\" class=\"hidden-input\" type=\"checkbox\" value=\"").reference(ctx._get(false, ["value"]),ctx,"h").write("\" checked=\"checked\"><span class=\"checkbox\"></span>").reference(ctx._get(false, ["value"]),ctx,"h").write("</label>");}return body_0;})();
﻿;(function(window, document, $, dust, _, CQ, Modernizr) {

    var app = this;

    var DEFAULTS = {
        SELECTORS: {
            ZOOM_MARKER: '.zoom-marker',
            ZOOM_WINDOW: '.zoom-window',
            ZOOM_IMAGE_REGION_CONTAINER: '.zoom-window__product-img-container',
            ZOOM_IMAGE: '.zoom-window__product-img',
            PRODUCT_DETAIL_PREVIEW_GALLERY: '.product-detail__preview-gallery',
            PRODUCT_DETAIL_PREVIEW_GALLERY_CONTENT: '.product-detail__preview-gallery-content',
            PRODUCT_DETAIL_OPTIONS: '.product-detail__options',
            PRODUCT_DETAIL_IMAGE: '.product-detail__product-img',
            PREVIEW: '#product-detail__preview',
            MOBILE_GALLERY: '.product-detail__mobile-gallery',
            SWATCHES: '.product-swatches',
            SWATCHES_LIST: '.product-swatches__list',
            SWATCHES_LIST_WRAPPER: '.product-swatches__list-wrapper',
            SWATCH_ITEM: '.product-swatches__item',
            SWATCHES_TOP_BUTTON: '.product-swatches__btn-top',
            SWATCHES_BOTTOM_BUTTON: '.product-swatches__btn-bottom'
        },
        CLASSES: {
            SWATCHES_BUTTON_HIDDEN: 'product-swatches__btn-hidden',
            SWATCHES_BUTTONS_DISABLED: 'product-swatches_disabled-buttons',
            SWATCH_ITEM_ACTIVE: 'product-swatches__item_active',
            ZOOM_IMAGE_REGION: 'zoom-window__product-img-region',
            ZOOM_ACTIVE: 'product-detail__preview-gallery_zoom-active'
        },
        CONST: {
            ZOOM_GRID_COLS: 4,
            ZOOM_GRID_ROWS: 4,
            SWATCHES_MIN_COUNT: 5
        },
        IMAGE_HEIGHT: 520,
        MAX_ZOOMED_IMAGE_SIDE_SIZE: 1200
    };

    var MediaViewer = function MediaViewer($element) {
        var _this = this instanceof MediaViewer ? this : Object.create(MediaViewer.prototype);

        _this.product = $element.data('product').imageDetails || [];
        _this.authorMode = $element.data('product').authorMode || false;
        _this.defaultImage = app.s7RootUrl;
        _this.maxZoomedImageSideSize = $element.data('max-zoomed-image-side-size') || DEFAULTS.MAX_ZOOMED_IMAGE_SIDE_SIZE;

        _this.zoomGridCols = $element.data('zoom-grid-cols') || DEFAULTS.CONST.ZOOM_GRID_COLS;
        _this.zoomGridRows = $element.data('zoom-grid-rows') || DEFAULTS.CONST.ZOOM_GRID_ROWS;
        _this.swatchesMinCount = $element.data('swatches-min-count') || DEFAULTS.CONST.SWATCHES_MIN_COUNT;

        if (CQ.wcm) {
            _this.zoomGridCols = 1;
            _this.zoomGridRows = 1;
        }

        _this.zoomImgScale = 1;

        _this.elems = {
            $component: $element,
            $gallery: $element,
            $zoomMarker: $element.find(DEFAULTS.SELECTORS.ZOOM_MARKER),
            $zoomWindow: $element.find(DEFAULTS.SELECTORS.ZOOM_WINDOW),
            $zoomImgRegionContainer: $element.find(DEFAULTS.SELECTORS.ZOOM_IMAGE_REGION_CONTAINER),
            $zoomImg: $element.find(DEFAULTS.SELECTORS.ZOOM_IMAGE),
            $img: $element.find(DEFAULTS.SELECTORS.PRODUCT_DETAIL_IMAGE),
            $productPreview: $element.closest(DEFAULTS.SELECTORS.PREVIEW),
            $swatches: $element.find(DEFAULTS.SELECTORS.SWATCHES),
            $mobileGallery:  $element.find(DEFAULTS.SELECTORS.MOBILE_GALLERY)
        };

        _this.subModules = {};

        _this.$swatches = _this.elems.$productPreview.find(DEFAULTS.SELECTORS.SWATCHES);
        _this.selectedColor = null;

        _this.initialize();

        return _this;
    };

    $.extend(MediaViewer.prototype, {

        asset: '',
        img: {
            url: '',
            main: {
                width: 0,
                height: 0,
                region: {w: 0, h: 0}
            },
            large: {
                width: 0,
                height: 0,
                region: {w: 0, h: 0}
            }
        },
        viewport: {
            width: 0,
            height: 0,
            offset: 0
        },
        showZoom: true,

        swatches: {
            SCROLL_SPEED: 300,
            SCROLL_BOTTOM: -1,
            SCROLL_TOP: 1,
            asset: null,
            scrollInProgress: false,

            init: function init() {
                this.$swatches = this.parent.$swatches;

                this.$swatchesListWrapper = this.$swatches.find(DEFAULTS.SELECTORS.SWATCHES_LIST_WRAPPER);
                this.$btnTop = this.$swatches.find(DEFAULTS.SELECTORS.SWATCHES_TOP_BUTTON);
                this.$btnBottom = this.$swatches.find(DEFAULTS.SELECTORS.SWATCHES_BOTTOM_BUTTON);

                this.$swatches.on('click', DEFAULTS.SELECTORS.SWATCH_ITEM, $.proxy(this.onSwatchClick, this));

                this.$btnTop.on('click', $.proxy(this.scroll, this, this.SCROLL_TOP));
                this.$btnBottom.on('click', $.proxy(this.scroll, this, this.SCROLL_BOTTOM));

                this.bindMoseWheel();

                return this;
            },

            onSwatchClick: function onSwatchClick(e) {
                e.preventDefault();

                var $item = $(e.currentTarget);
                var swatchIndex = $item.data('swatch-index');
                var imgData = this.asset[swatchIndex];

                this.parent.setItem(imgData);

                $item.addClass(DEFAULTS.CLASSES.SWATCH_ITEM_ACTIVE)
                    .siblings().removeClass(DEFAULTS.CLASSES.SWATCH_ITEM_ACTIVE);
            },

            bindMoseWheel: function bindMoseWheel() {
                var _this = this;

                _this.$swatches.on('mousewheel DOMMouseScroll', function(e) {
                    e.preventDefault();
                    e.stopPropagation();

                    var direction = e.originalEvent.detail || e.originalEvent.wheelDelta;

                    if (Math.abs(direction) === 120) {
                        if (direction > 0) {
                            _this.scroll(_this.SCROLL_TOP, e);
                        } else {
                            _this.scroll(_this.SCROLL_BOTTOM, e);
                        }
                    } else {
                        if (direction < 0) {
                            _this.scroll(_this.SCROLL_TOP, e);
                        } else {
                            _this.scroll(_this.SCROLL_BOTTOM, e);
                        }
                    }
                });
            },

            scroll: function scroll(direction, e) {
                var _this = this;

                e.preventDefault();

                if (direction === _this.SCROLL_TOP) {
                    if (_this.onTheTop()) {
                        return _this;
                    }
                } else {
                    if (_this.onTheBottom()) {
                        return _this;
                    }
                }

                if (_this.scrollInProgress) {
                    return;
                }

                _this.$btnTop.off('click');
                _this.$btnBottom.off('click');

                _this.scrollInProgress = true;

                _this.$swatchesList.animate({top: '+=' + _this.scrollShift * direction}, _this.SCROLL_SPEED, function() {
                    _this.updateButtons();

                    _this.$btnTop.on('click', $.proxy(_this.scroll, _this, _this.SCROLL_TOP));
                    _this.$btnBottom.on('click', $.proxy(_this.scroll, _this, _this.SCROLL_BOTTOM));

                    _this.scrollInProgress = false;
                });

                return _this;
            },

            setAsset: function setAsset(_data) {

                if (!_data) {
                    console.warn('MediaViewer >> ', 'asset is not defined');
                }

                this.asset = _data || [];

                if (this.asset.length) {
                    this.parent.zoom.on();
                    this.render(_data || []);

                } else {
                    this.parent.zoom.off();
                    this.parent.setItem({});
                }

                return this;
            },

            render: function render(data) {
                var _this = this;

                dust.render('mediaViewerSwatches', {variants: data}, function(error, out) {
                    _this.$swatchesListWrapper.html(out);

                    _this.$swatches.toggleClass(DEFAULTS.CLASSES.SWATCHES_BUTTONS_DISABLED, data.length < _this.parent.swatchesMinCount);
                    var $items = _this.$swatches.find(DEFAULTS.SELECTORS.SWATCH_ITEM);

                    $items.first().click();

                    _this.scrollShift = $items.outerHeight();
                    _this.$swatchesList = _this.$swatches.find(DEFAULTS.SELECTORS.SWATCHES_LIST);
                    _this.$swatchesList.css({top: 0});

                    _this.updateButtons();
                });
            },

            onTheTop: function onTheTop() {
                return this.$swatchesList[0].offsetTop === 0;
            },

            onTheBottom: function onTheBottom() {
                return this.$swatchesList[0].offsetTop + this.$swatchesList[0].offsetHeight <= this.$swatchesListWrapper[0].offsetHeight;
            },

            updateButtons: function updateButtons() {

                if (this.onTheTop()) {
                    this.$btnTop.addClass(DEFAULTS.CLASSES.SWATCHES_BUTTON_HIDDEN);
                } else {
                    this.$btnTop.removeClass(DEFAULTS.CLASSES.SWATCHES_BUTTON_HIDDEN);
                }

                if (this.onTheBottom()) {
                    this.$btnBottom.addClass(DEFAULTS.CLASSES.SWATCHES_BUTTON_HIDDEN);
                } else {
                    this.$btnBottom.removeClass(DEFAULTS.CLASSES.SWATCHES_BUTTON_HIDDEN);
                }

                return this;
            }
        },

        zoomMarker: {
            kw: 1,
            kh: 1,
            FADE_SPEED: 100,

            position: function(x, y) { // jshint ignore:line
                var $zoomMarker = this.parent.elems.$zoomMarker;

                var w = $zoomMarker.innerWidth();
                var h = $zoomMarker.innerHeight();

                var parentWidth = $zoomMarker.parent().innerWidth();
                var parentHeight = $zoomMarker.parent().innerHeight();

                var pos = {
                    /* jshint ignore:start */
                    x: (x || 0) - (w >> 1),
                    y: (y || 0) - (h >> 1)
                    /* jshint ignore:end */
                };

                if (pos.x + w > parentWidth) {
                    pos.x = parentWidth - w;
                }

                if (pos.y + h > parentHeight) {
                    pos.y = parentHeight - h;
                }

                if (pos.x < 0) {
                    pos.x = 0;
                }

                if (pos.y < 0) {
                    pos.y = 0;
                }

                $zoomMarker.css({left: pos.x, top: pos.y});

                return {x: pos.x, y: pos.y};
            },

            resize: function() {
                var $zoomMarker = this.parent.elems.$zoomMarker;
                var $container = $zoomMarker.parent();

                $zoomMarker.width($container.innerWidth() * this.kw);
                $zoomMarker.height($container.innerHeight() * this.kh);

                return this;
            },

            getRectangle: function getRectangle() {
                var $zoomMarker = this.parent.elems.$zoomMarker;

                var position = $zoomMarker.position();

                return {
                    top: position.top,
                    left: position.left,
                    right: position.left + $zoomMarker.width(),
                    bottom: position.top + $zoomMarker.height()
                };
            },

            show: function() {
                if (!this.parent.showZoom) {
                    return;
                }

                this.parent.elems.$component.addClass(DEFAULTS.CLASSES.ZOOM_ACTIVE);
                this.parent.elems.$zoomMarker.fadeIn(this.FADE_SPEED);
                this.parent.elems.$zoomWindow.fadeIn(this.FADE_SPEED);

                return this;
            },

            hide: function() {
                this.parent.elems.$component.removeClass(DEFAULTS.CLASSES.ZOOM_ACTIVE);
                this.parent.elems.$zoomMarker.fadeOut(this.FADE_SPEED);
                this.parent.elems.$zoomWindow.fadeOut(this.FADE_SPEED);

                return this;
            }
        },

        zoom: {
            on: function() {
                this.parent.showZoom = true;

                return this;
            },

            off: function() {
                this.parent.showZoom = false;

                return this;
            }
        },

        initialize: function() {
            this.elems.$zoomWindow.remove();
            $(DEFAULTS.SELECTORS.PRODUCT_DETAIL_OPTIONS).append(this.elems.$zoomWindow);

            this.subModules.mediaViewerMobile = new app.MediaViewerMobile(this.elems.$mobileGallery);

            this.zoom.parent = this;
            this.zoomMarker.parent = this;

            this.swatches.parent = this;

            if (_.isEmpty(this.product)) {
                this.zoom.off();
                this.setItem({});

            } else {
                this.zoom.on();
                this.swatches.init();
            }

            this.bindEvents();
        },

        bindEvents: function bindEvents() {
            var _this = this;

            _this.elems.$img.parent()
                .on('mouseover touchstart', function(e) {
                    e.stopPropagation();

                    _this.zoomMarker.show();

                    $('body').one('mouseover touchend', function() {
                        _this.zoomMarker.hide();
                    });
                })
                .on('mousemove touchmove', function(e) {
                    var offset = $(this).offset();
                    var x;
                    var y;

                    if (Modernizr.touch && e.originalEvent.touches) {
                        e.preventDefault();
                        x = e.originalEvent.touches[0].pageX - offset.left;
                        y = e.originalEvent.touches[0].pageY - offset.top;
                    } else {
                        x = e.pageX - offset.left;
                        y = e.pageY - offset.top;
                    }

                    _this.moveImageInZoomWindow(x, y);
                    _this.detectZoomArea();
                });

            _this.elems.$zoomMarker.on('mouseout', $.proxy(_this.zoomMarker.hide, _this.zoomMarker));

            $(window).on('resize.mediaViewer', $.proxy(_this.resizeMainImage, _this));

            _this.setAsset = $.proxy(function setAsset(e) {
                if (e.colorCode) {
                    if (_this.selectedColor !== e.colorCode) {
                        _this.swatches.setAsset(_this.product[e.colorCode]);
                        _this.subModules.mediaViewerMobile.setAsset(_this.product[e.colorCode]);
                        _this.selectedColor = e.colorCode;
                    }
                } else {

                    var keys = _.keys(_this.product);

                    _this.swatches.setAsset(_this.product[keys[0]]);
                    _this.subModules.mediaViewerMobile.setAsset(_this.product[keys[0]]);

                    console.warn('"MediaViewer" >> product color code is undefined');
                }
            }, _this);

            app.subscribe(app.EVENTS.CHANGE_PRODUCT_COLOR, _this.setAsset);
        },

        detectZoomArea: function detectZoomArea() {
            var regionWidth = this.img.main.region.w;
            var regionHeight = this.img.main.region.h;

            var rect = this.zoomMarker.getRectangle();

            var range = {
                x1: parseInt(rect.left   / regionWidth,  10),
                y1: parseInt(rect.top    / regionHeight, 10),
                x2: parseInt(rect.right  / regionWidth,  10),
                y2: parseInt(rect.bottom / regionHeight, 10)
            };

            for (var col = range.x1; col <= range.x2; col++) {
                for (var row = range.y1; row <= range.y2; row++) {
                    this._loadZoomImageRegion(col, row);
                }
            }

            return this;
        },

        setItem: function setItem(imgData) {
            var _this = this;

            _this.img.url = imgData.imagePath;

            _this.elems.$img
                .hide()
                .removeAttr('width')
                .removeAttr('height');

            var w = imgData.width;
            var h = imgData.height;
            var k = w / h;

            _this.zoomImgScale = 1;

            if (w > _this.maxZoomedImageSideSize && k >= 1) {

                _this.zoomImgScale = w / _this.maxZoomedImageSideSize;

                w = _this.maxZoomedImageSideSize;
                h = Math.floor(w / k);
            }

            if (h > _this.maxZoomedImageSideSize && k <= 1) {

                _this.zoomImgScale = h / _this.maxZoomedImageSideSize;

                h = _this.maxZoomedImageSideSize;
                w = Math.floor(h * k);
            }

            _this.img.large.region.w = Math.ceil(parseInt(w, 10) / _this.zoomGridCols);
            _this.img.large.region.h = Math.ceil(parseInt(h, 10) / _this.zoomGridRows);

            if (isNaN(_this.img.large.region.w)) {
                _this.zoom.off();
                console.warn('"MediaViewer" >> image width is not defined');
            }

            if (isNaN(_this.img.large.region.h)) {
                _this.zoom.off();
                console.warn('"MediaViewer" >> image height is not defined');
            }

            _this.elems.$zoomImgRegionContainer
                .width(_this.img.large.region.w * this.zoomGridCols)
                .height(_this.img.large.region.h * this.zoomGridRows);

            if (_.isEmpty(imgData)) {
                _this.elems.$img[0].src = this.defaultImage + 'undefined?bgColor=0,0,0,0&fmt=png-alpha&hei=' + DEFAULTS.IMAGE_HEIGHT;

            } else {

                if (imgData.height > DEFAULTS.IMAGE_HEIGHT) {
                    _this.elems.$img[0].src = this.img.url + '?bgColor=0,0,0,0&fmt=png-alpha&hei=' + DEFAULTS.IMAGE_HEIGHT + '&resMode=sharp2&op_sharpen=1';
                } else {
                    _this.elems.$img[0].src = this.img.url + '?bgColor=0,0,0,0&fmt=png-alpha&scl=1&resMode=sharp2&op_sharpen=1';
                }

                _this._createZoomImageRegions();
            }

            app.modules.MainContentSpinner[0].spinner('show');

            _this.elems.$img
                .one('load', function() {

                    app.modules.MainContentSpinner[0].spinner('hide');

                    $(this).show();

                    _this.img.main.width = this.width;
                    _this.img.main.height = this.height;

                    _this.img.main.region.w = Math.ceil(this.width / _this.zoomGridCols);
                    _this.img.main.region.h = Math.ceil(this.height / _this.zoomGridRows);

                    _this.resizeMainImage();
                })

                .error(function() {
                    app.modules.MainContentSpinner[0].spinner('hide');
                })

                .each(function() {

                    if (this.complete) {
                        $(this).load();
                    }
                });

            return this;
        },

        _createZoomImageRegions: function _createZoomImageRegions() {

            this.elems.$zoomImgRegionContainer.empty();

            var size = this.zoomGridCols * this.zoomGridRows;

            for (var i = 0; i < size; i++) {

                var imgRegion = new Image();

                imgRegion.src = '';

                $(imgRegion)
                    .addClass(DEFAULTS.CLASSES.ZOOM_IMAGE_REGION)
                    .addClass(DEFAULTS.CLASSES.ZOOM_IMAGE_REGION + '_' + i)
                    .css({
                        width: this.img.large.region.w,
                        height: this.img.large.region.h
                    });

                this.elems.$zoomImgRegionContainer.append(imgRegion);
            }

            return this;
        },

        _loadZoomImageRegion: function _loadZoomImageRegion(col, row) {

            var imgRegionIndex = row * this.zoomGridCols + col;

            var $imgRegion = this.elems.$zoomWindow.find('.' + DEFAULTS.CLASSES.ZOOM_IMAGE_REGION + '_' + imgRegionIndex);

            if ($imgRegion.length) {
                if (CQ.wcm) {
                    $imgRegion[0].src = this.img.url;
                } else {
                    //jscs:disable
                    $imgRegion[0].src = this.img.url +
                        '?scl=' + this.zoomImgScale +
                        '&rect=' + col * this.img.large.region.w +
                        ',' + row * this.img.large.region.h + ',' +
                        this.img.large.region.w + ',' + this.img.large.region.h;
                    // jscs:enable
                }
            }
        },

        resizeMainImage: function() {

            this.viewport.width = this.elems.$gallery.innerWidth();
            this.viewport.height = DEFAULTS.IMAGE_HEIGHT;

            var kv = this.viewport.width / this.viewport.height;
            var ki = this.img.main.width / this.img.main.height;

            this.elems.$img.removeAttr('width');
            this.elems.$img.removeAttr('height');

            var scale = 1;

            if (this.img.main.height > this.viewport.height) {
                if (kv > ki) {
                    scale = this.viewport.height / this.img.main.height;
                } else {
                    scale = this.viewport.width / this.img.main.width;
                }
            } else {
                if (this.img.main.width > this.viewport.width) {
                    scale = this.viewport.width / this.img.main.width;
                }
            }

            var $img = this.elems.$img;

            $img.parent().height($img.height());

            if (scale < 1) {
                $img.attr('width', this.img.main.width * scale);
                $img.attr('height', this.img.main.height * scale);
            }

            var largeImageWidth = this.img.large.region.w * this.zoomGridCols;
            var largeImageHeight = this.img.large.region.h * this.zoomGridRows;

            this.zoomMarker.kw = this.elems.$zoomWindow.parent().innerWidth() / largeImageWidth;
            this.zoomMarker.kh = this.elems.$zoomWindow.parent().innerHeight() / largeImageHeight;

            /*
             * If image dimansions less then vieport dimansions we still must show zoomMarker but make it correct
             */
            if (this.zoomMarker.kw > this.zoomMarker.kh) {

                if (this.zoomMarker.kw > 1) {
                    this.zoomMarker.kh *= 1 / this.zoomMarker.kw;
                    this.zoomMarker.kw = 1;
                }
            } else {

                if (this.zoomMarker.kh > 1) {
                    this.zoomMarker.kw *= 1 / this.zoomMarker.kh;
                    this.zoomMarker.kh = 1;
                }
            }

            this.kx = this.elems.$img.parent().innerWidth() / largeImageWidth;
            this.ky = this.elems.$img.parent().innerHeight() / largeImageHeight;

            this.zoomMarker.resize();
            $('window').trigger('resize.mediaViewer');

            return this;
        },

        moveImageInZoomWindow: function moveImageInZoomWindow(x, y) {
            var pos = this.zoomMarker.position(x || 0, y || 0);

            this.elems.$zoomImgRegionContainer.css({left: -pos.x / this.kx, top: -pos.y / this.ky});

            return this;
        },

        destroy: function destroy() {
            app.unsubscribe(app.EVENTS.CHANGE_PRODUCT_COLOR, this.setAsset);

            app.modules.MainContentSpinner[0].spinner('hide');

            $(window).off('resize.mediaViewer');

            this.elems.$zoomMarker.off('mouseout');

            this.elems.$component.remove();
        }
    });

    app.MediaViewer = MediaViewer;

    return app.MediaViewer;

}).call(window.SPC = window.SPC || {}, window, document, window.jQuery, window.dust, window._, window.CQ, window.Modernizr);
;(function(window, document, $, _, CQ) {

    var app = this;

    var DEFAULTS = {
        SELECTORS: {
            REVIEW_MODAL: '#add-review-modal',
            STEP: '[data-step]',
            MFP_CONTENT: '.mfp-content',
            EDIT_STEP: '[data-step="edit"]',
            PREVIEW_CLASS: '.review-modal__review-text',
            ELLIPSIS_TEXT_CLASS: '.review-modal__product',
            CLOSE_MODAL_CLASS: '.review-modal__close',
            BACK_TO_EDIT_CLASS: '.review-modal__back-to-edit',
            AGREE_FORM_CLASS: '.review-modal__agree-form',
            EDIT_FORM_CLASS: '.review-modal__edit-form',
            GO_TO_PREVIEW: '.review-modal__go-to-preview',
            SEND_REVIEW: '.review-modal__send-review',
            ERROR_MESSAGE: '.review__error',
            MODAL_CONTENT: '.modal__main-content',
            MODAL_FOOTER: '.modal__footer'
        },
        CLASSES: {
            MAIN_CLASS: 'default-modal default-modal_wide expandable-modal',
            MFP_CONTENT: 'mfp-content'
        },
        SERVICES_URLS: {
            REVIEW_TEMPLATE: '/services/sportchek/reviews/reviewtemplate',
            POST_REVIEW: '/services/sportchek/reviews/createreview'
        },
        KEY: 'sportchek-modal',
        FIELDS: {
            PR_USER_EMAIL: 'pr_merchant_user_email',
            PR_USER_ID: 'pr_merchant_user_id',
            INPUT: '<input/>'
        }
    };

    /*
     * Constructor
     */
    var WriteReview = function WriteReview($element) {
        var _this = this instanceof WriteReview ? this : Object.create(WriteReview.prototype);

        _this.DEFAULTS = DEFAULTS;
        _this.subModules = {};
        _this.elems = {
            $component: $element,
            $edit: $element.find(_this.DEFAULTS.SELECTORS.EDIT_STEP),
            $preview: $element.find(_this.DEFAULTS.SELECTORS.PREVIEW_CLASS),
            $editForm: $element.find(_this.DEFAULTS.SELECTORS.EDIT_FORM_CLASS),
            $agreeForm: $element.find(_this.DEFAULTS.SELECTORS.AGREE_FORM_CLASS),
            $ellipsisText: $element.find(_this.DEFAULTS.SELECTORS.ELLIPSIS_TEXT_CLASS),
            $body: $('body')
        };

        _this.fieldsData = null;
        _this.initialize();

        return _this;
    };

    $.extend(WriteReview.prototype, {
        initialize: function initialize() {
            var _this = this;

            _this.pageId = _this.elems.$component.data('productId');
            _this.subModules.agreeFormBlocking = new app.FormBlocking(_this.elems.$agreeForm);

            _this.openModal();
            _this.bindEvents();
        },

        bindEvents: function bindEvents() {
            var _this = this;
            _this.elems.$component.on('click', _this.DEFAULTS.SELECTORS.GO_TO_PREVIEW, $.proxy(_this.renderPreview, _this));
            _this.elems.$component.on('click', _this.DEFAULTS.SELECTORS.SEND_REVIEW, $.proxy(_this.postReview, _this));
            _this.elems.$component.on('click', _this.DEFAULTS.SELECTORS.BACK_TO_EDIT_CLASS, function() {
                _this.open({step: 'edit'});
            });
            _this.elems.$component.on('click', _this.DEFAULTS.SELECTORS.CLOSE_MODAL_CLASS, function() {
                _this.close(false);
            });
        },

        openModal: function openModal() {
            this.open({step: 'edit'});
            this.subModules.WriteReviewEllipsisText = new app.WriteReviewEllipsisText(this.elems.$ellipsisText);
            this.getReviewTemplate();
        },

        renderPreview: function renderPreview(event) {
            event.preventDefault();

            var _this = this;

            _this.subModules.preview = new app.WriteReviewPreview(
                _this.elems.$preview, {
                    previewData: _this.elems.$editForm.toObject({skipEmpty: false}),
                    fieldsData: _this.fieldsData
                },
                function() {
                    _this.elems.$agreeForm[0].reset();
                    _this.subModules.agreeFormBlocking.onChange();

                    _this.open({step: 'preview'});
                });
        },

        createField: function createField(name, value) {
            this.elems.$editForm.prepend(
                $(this.DEFAULTS.FIELDS.INPUT).attr({
                    name: name,
                    value: value,
                    type: 'hidden'
                })
            );
        },

        addHashField: function addHashField() {
            var urlResult = app.modules.WriteReviewLink[0].getQueryParams();

            if (urlResult.review) {
                this.createField(this.DEFAULTS.FIELDS.PR_USER_EMAIL, urlResult.email);
                this.createField(this.DEFAULTS.FIELDS.PR_USER_ID, urlResult.userid);
            }
        },

        renderEditForm: function renderEditForm(fieldsData) {
            var _this = this;

            _this.subModules.WriteReviewEdit = new app.WriteReviewEdit(_this.elems.$editForm, fieldsData);
            _this.addHashField();
        },

        showError: function showError(errorTrigger) {

            var $modalContent = $(this.DEFAULTS.SELECTORS.MODAL_CONTENT + ',' + this.DEFAULTS.SELECTORS.MODAL_FOOTER);
            var $errorBlock = $(this.DEFAULTS.SELECTORS.ERROR_MESSAGE);

            if (errorTrigger) {
                $modalContent.hide();
                $errorBlock.show();
            } else {
                $modalContent.show();
                $errorBlock.hide();
            }
        },

        getReviewTemplate: function getReviewTemplate() {
            var _this = this;

            $.ajax({
                url: _this.DEFAULTS.SERVICES_URLS.REVIEW_TEMPLATE,
                type: 'GET',
                dataType: 'JSON',
                data: {
                    locale: CQ.I18n.getLocale(),
                    // jscs:disable
                    page_id: _this.pageId // jshint ignore:line
                    // jscs:enable
                },
                beforeSend: function() {
                    _this.elems.$editForm.spinner('show');
                },
                success: function(data) {
                    // TODO: temporary solution
                    _this.showError(false);
                    data = _this._prepareData(data);
                    _this.fieldsData = data;
                    _this.renderEditForm(_this.fieldsData);
                },
                error: function(jqXhr, textStatus, errorThrown) {
                    switch (jqXhr.status) {
                        case 403:
                            app.modules.User.logOut();

                            break;

                        case 410:
                            _this.showError(true);

                            break;

                        default:
                            console.error('"WriteReview.getReviewTemplate" >> ' + jqXhr.status + ' (' + errorThrown + ')');
                    }
                },
                complete: function() {
                    _this.elems.$editForm.spinner('hide');
                }
            });
        },

        postReview: function postReview(event) {
            event.preventDefault();

            var _this = this;
            var formData = _this.elems.$editForm.toObject({
                skipEmpty: false
            });

            formData.locale = CQ.I18n.getLocale();
            // jscs:disable
            // jshint ignore:start
           formData.page_id = _this.pageId;

            _.each(formData.tag_group, function(tag, key) {
                formData.tag_group[key] = _.compact(tag);
            });
            // jshint ignore:end
            // jscs:enable

            $.ajax({
                url: _this.DEFAULTS.SERVICES_URLS.POST_REVIEW,
                type: 'POST',
                dataType: 'JSON',
                data: JSON.stringify(formData),
                beforeSend: function() {
                    app.modules.MainContentSpinner[0].spinner('show');
                },
                success: function() {
                    _this.open({step: 'confirmation'});
                    app.trigger(app.EVENTS.ANALYTICS.COMPLETE_WRITE_REVIEW_MODAL, formData);
                },
                error: function(jqXhr, textStatus, errorThrown) {
                    switch (jqXhr.status) {
                        case 403:
                            app.modules.User.logOut();

                            break;

                        case 410:
                            _this.showError(true);

                            break;

                        default:
                            $.SpcMagnificPopup.close();

                            app.modules.Alert.openModal({
                                title: jqXhr.status + ' (' + errorThrown + ')'
                            });

                            console.error('"WriteReview.postReview" >> ' + jqXhr.status + ' (' + errorThrown + ')');
                    }
                },
                complete: function() {
                    app.modules.MainContentSpinner[0].spinner('hide');
                }
            });
        },

        /**
         * @param {Object} [config]
         */
        open: function open(config) {
            var _this = this;

            config = config || {};

            var isPopupOpened = $.SpcMagnificPopup.getInstance().content;

            if (isPopupOpened && config.step) {
                _this.gotoStep(config);

                return;
            }

            $.SpcMagnificPopup.open({
                mainClass: DEFAULTS.CLASSES.MAIN_CLASS,
                items: {
                    src: DEFAULTS.SELECTORS.REVIEW_MODAL
                },
                callbacks: {
                    open: function() {
                        _this.onOpenPopup(config);
                    },

                    close: function() {
                        _this.onClosePopup();
                    }
                }
            });

            app.trigger(app.EVENTS.ANALYTICS.SHOW_WRITE_REVIEW_MODAL, {});
        },

        onOpenPopup: function(config) {
            var _this = this;

            _this.gotoStep(config);
        },

        onClosePopup: function() {
            var _this = this;

            _this.elems.$component
                .closest(DEFAULTS.SELECTORS.MFP_CONTENT)
                .attr('class', DEFAULTS.CLASSES.MFP_CONTENT);
            _this.destroy();
        },

        close: function close(doNotCloseModal) {
            if (doNotCloseModal) {
                return false;
            }

            $.SpcMagnificPopup.close();
        },
        destroy: function destroy() {
            this.elems.$component.off('click');
            _.each(this.subModules, function(subModule) {
                if (_.isFunction(subModule.destroy)) {
                    subModule.destroy();
                }
            });
        },

        gotoStep: function gotoStep(config) {
            config = config || {};

            var step = config.step || 'edit';
            var $scrollableElement = this._getScrollableElement();

            var $stepElement = this.elems.$component.find('[data-step="' + step + '"]');

            this.elems.$component
                .closest(DEFAULTS.SELECTORS.MFP_CONTENT)
                .attr('class', 'mfp-content mfp-content__' + step);

            this.elems.$component
                .find(DEFAULTS.SELECTORS.STEP)
                .hide();

            $stepElement.show();
            $scrollableElement.scrollTop(0);

            return this;
        },

        _getScrollableElement: function _getScrollableElement() {
            var popup = $.SpcMagnificPopup.getInstance();

            return popup.isIOS ? this.elems.$body : popup.wrap;
        },

        // TODO: temporary solution
        _prepareData: function _prepareData(data) {
            delete data.media;

            data.field = _.filter(data.field, function(field) {
                return (_.indexOf([
                    'associated_product',
                    'similar_product'], field.key) === -1);
            });
            // jscs:disable
            // jshint ignore:start
            data.tag_group = _.filter(data.tag_group, function(field) {
                return (_.indexOf(['bestuses'], field.key) === -1);
            });
            // jshint ignore:end
            // jscs:enable

            return data;
        }
    });

    app.WriteReview = WriteReview;

}).call(window.SPC = window.SPC || {}, window, document, window.jQuery, window._, window.CQ);

;(function(window, document, $) {

    var app = this;

    var DEFAULTS = {
        SELECTORS: {
            REVIEW_MODAL: '#add-review-modal'
        }
    };

    /*
     * Constructor
     */
    var WriteReviewLink = function WriteReviewLink($element) {
        var _this = this instanceof WriteReviewLink ? this : Object.create(WriteReviewLink.prototype);

        _this.DEFAULTS = DEFAULTS;
        _this.subModules = {};
        _this.elems = {
            $component: $($element),
            $reviewModal: $(_this.DEFAULTS.SELECTORS.REVIEW_MODAL)
        };
        _this.bindEvents();
        _this.modalWithHash();

        return _this;
    };

    $.extend(WriteReviewLink.prototype, {
        bindEvents: function bindEvents() {
            this.elems.$component.on('click', $.proxy(this.openModal, this));
        },

        openModal: function openModal() {
            this.subModules.WriteReview = new app.WriteReview(this.elems.$reviewModal);
        },

        getUrlParameter: function getUrlParameter() {
            var vars = [];
            var hash = null;
            var hashes = window.location.href.slice(window.location.href.indexOf('#') + 1).split('&');

            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars[hash[0]] = hash[1];
            }

            return vars;
        },

        getQueryParams: function getQueryParams() {

            var query = {};
            var search = window.location.search.substr(1).split('&');

            search.forEach(function(item) {
                query[item.split('=')[0]] = item.split('=')[1];
            });

            return query;
        },

        modalWithHash: function modalWithHash() {
            var params = this.getQueryParams();

            if (params.review && params.email) {
                this.openModal();
            }
        }
    });

    app.WriteReviewLink = WriteReviewLink;

}).call(window.SPC = window.SPC || {}, window, document, window.jQuery);

;(function(window, document, $, _, dust) {

    var app = this;

    var DEFAULTS = {
        SELECTORS: {
            RATING_CLASS: '.rating__blank',
            RATING_INPUT_CLASS: '.rating__value-input',
            PLACEHOLDER_FIELDS: '[data-module-type=TextFieldPlaceholder]',
            TAG_GROUP_CLASS: '.review-modal__tag',
            EMAIL_FIELD: '[name=merchant_user_email]'
        }
    };

    /*
     * Constructor
     */
    var WriteReviewEdit = function WriteReviewEdit($element, data, callback) {
        var _this = this instanceof WriteReviewEdit ? this : Object.create(WriteReviewEdit.prototype);

        _this.DEFAULTS = DEFAULTS;
        _this.subModules = {};
        _this.elems = {
            $component: $element
        };
        _this.data = data;
        _this.callback = callback;
        _this.render();

        return _this;
    };

    $.extend(WriteReviewEdit.prototype, {
        render: function render() {
            var _this = this;

            // TODO: should be refactored to createSubModules
            dust.render('writeReviewModalEdit', _this.data, function(error, out) {
                _this.elems.$component.html(out);

                _this.subModules.WriteReviewSetRating = new app.WriteReviewSetRating(
                    _this.elems.$component.find(_this.DEFAULTS.SELECTORS.RATING_CLASS),
                    _this.elems.$component.find(_this.DEFAULTS.SELECTORS.RATING_INPUT_CLASS)
                );
                _this.subModules.formBlocking = new app.FormBlocking(_this.elems.$component);

                _this.subModules.tagGroup = [];
                _.each(_this.elems.$component.find(_this.DEFAULTS.SELECTORS.TAG_GROUP_CLASS), function(el) {
                    var $element = $(el);

                    _this.subModules.tagGroup.push(new app.WriteReviewTagGroup($element));
                });

                _this.subModules.textFieldPlaceholder = [];
                _.each(_this.elems.$component.find(_this.DEFAULTS.SELECTORS.PLACEHOLDER_FIELDS), function(el) {
                    var $element = $(el);

                    _this.subModules.textFieldPlaceholder.push(new app.TextFieldPlaceholder($element));
                });

                _this.elems.$component.$email = _this.elems.$component.find(DEFAULTS.SELECTORS.EMAIL_FIELD);

                if (app.modules.User.isLoggedIn()) {
                    _this.elems.$component.$email.val(app.modules.User.get().uid || '');
                } else {
                    _this.elems.$component.$email.parent().hide();
                }

                if (typeof _this.callback === 'function') {
                    _this.callback();
                }
            });
        },

        destroy: function destroy() {
            function eachModules(subModules) {
                _.each(subModules, function(subModule) {
                    if (_.isArray(subModule)) {
                        eachModules(subModule);
                    } else {
                        if (_.isFunction(subModule.destroy)) {
                            subModule.destroy();
                        }
                    }
                });
            }

            eachModules(this.subModules);
        }
    });

    app.WriteReviewEdit = WriteReviewEdit;

}).call(window.SPC = window.SPC || {}, window, document, window.jQuery, window._, window.dust);

;(function(window, document, $) {

    var app = this;

    var DEFAULTS = {
        SELECTORS: {
            TEXT_CLASS: '.review-modal__ellipsis-text',
            BUTTONS_CLASS: '.review-modal__buttons',
            BUTTONS_WRAPPER_CLASS: '.review-modal__see-more'
        },
        CLASSES: {
            COLLAPSED_TEXT: 'review-modal__ellipsis-text_collapsed'
        },
        TEXT_LINES: 5
    };

    /*
     * Constructor
     */
    var WriteReviewEllipsisText = function WriteReviewEllipsisText($element) {
        var _this = this instanceof WriteReviewEllipsisText ? this : Object.create(WriteReviewEllipsisText.prototype);

        _this.DEFAULTS = DEFAULTS;
        _this.elems = {
            $component: $element,
            $text: $element.find(_this.DEFAULTS.SELECTORS.TEXT_CLASS),
            $buttons: $element.find(_this.DEFAULTS.SELECTORS.BUTTONS_CLASS)
        };

        _this.initialize();

        return _this;
    };

    $.extend(WriteReviewEllipsisText.prototype, {
        initialize: function initialize() {
            this.settings = {
                height: parseInt(this.elems.$text.css('line-height'), 10) * this.DEFAULTS.TEXT_LINES,
                wrap: 'word'
            };

            this.elems.$text.dotdotdot(this.settings);
            var isTruncated = this.elems.$text.triggerHandler('isTruncated');

            if (isTruncated) {
                this.bindEvents();
            } else {
                this.elems.$component.find(this.DEFAULTS.SELECTORS.BUTTONS_WRAPPER_CLASS).remove();
            }

            this.elems.$text.removeClass(this.DEFAULTS.CLASSES.COLLAPSED_TEXT);

        },

        bindEvents: function bindEvents() {
            var _this = this;

            _this.elems.$buttons.on('click', function() {
                _this.elems.$buttons.toggle();

                if ($(this).hasClass('ellipsis-more')) {
                    _this.elems.$text.trigger('destroy');
                } else {
                    _this.elems.$text.dotdotdot(_this.settings);
                }
            });
        },
        destroy: function destroy() {
            this.elems.$text.trigger('destroy');
            this.elems.$buttons.off('click');
            this.elems.$buttons.eq(0).show().end()
                .eq(1).hide();
        }
    });

    app.WriteReviewEllipsisText = WriteReviewEllipsisText;

}).call(window.SPC = window.SPC || {}, window, document, window.jQuery);

;(function(window, document, $) {

    var app = this;

    var DEFAULTS = {
        SELECTORS: {},
        STAR_WIDTH: 20
    };

    /*
     * Constructor
     */
    var WriteReviewSetRating = function WriteReviewSetRating($element, $input) {
        var _this = this instanceof WriteReviewSetRating ? this : Object.create(WriteReviewSetRating.prototype);

        _this.DEFAULTS = DEFAULTS;
        _this.elems = {
            $component: $element,
            $input: $input
        };
        _this.rating = _this.elems.$input.val() || null;
        _this.bindEvents();

        return _this;
    };

    $.extend(WriteReviewSetRating.prototype, {
        bindEvents: function bindEvents() {
            this.elems.$component.on('mousemove', $.proxy(this._onMouseMove, this));
            this.elems.$component.on('mouseleave', $.proxy(this._onMouseLeave, this));
            this.elems.$component.on('click', $.proxy(this._setRating, this));
        },

        _setRating: function _setRating(event) {
            var offsetX = (event.offsetX || event.clientX - $(event.target).offset().left);
            this.rating = this._calculateRating(offsetX);

            this.elems.$component
                .children()
                .css({
                    width: (this.rating * DEFAULTS.STAR_WIDTH) + '%'
                });
            this.elems.$input.val(this.rating).change();
        },

        _onMouseMove: function _onMouseMove(event) {
            var $target = $(event.target);
            var rating = this._calculateRating((event.clientX - $target.offset().left));

            this.elems.$component
                .children()
                .css({
                    width: (rating * DEFAULTS.STAR_WIDTH) + '%'
                });
        },

        _onMouseLeave: function _onMouseLeave() {
            this.elems.$component
                .children()
                .css({
                    width: (this.rating * DEFAULTS.STAR_WIDTH) + '%'
                });
        },

        _calculateRating: function calculateRating(value) {
            return Math.ceil(value / DEFAULTS.STAR_WIDTH);
        }
    });

    app.WriteReviewSetRating = WriteReviewSetRating;

}).call(window.SPC = window.SPC || {}, window, document, window.jQuery);

;(function(window, $, _, dust) {

    var app = this;

    var DEFAULTS = {
        SELECTORS: {
            ADD_OPTION_CLASS: '.review__add-option',
            ADD_OPTION_BUTTON_CLASS: '.review__add-option-button',
            INPUT: 'input[type="text"]',
            CHECKBOX: 'input[type="checkbox"]',
            REVIEW_OPTION_CLASS: '.review__option'
        },
        DISABLED_CLASS: 'button_state_disabled'
    };

    var WriteReviewTagGroup = function WriteReviewTagGroup($element) {
        var _this = this instanceof WriteReviewTagGroup ? this : Object.create(WriteReviewTagGroup.prototype);

        _this.DEFAULTS = DEFAULTS;

        _this.elems = {
            $component: $element,
            $input: $element.find(_this.DEFAULTS.SELECTORS.INPUT),
            $button: $element.find(_this.DEFAULTS.SELECTORS.ADD_OPTION_BUTTON_CLASS),
            $checkboxes: $element.find(_this.DEFAULTS.SELECTORS.CHECKBOX)
        };

        _this.values = [];

        _this.initialize();

        return _this;
    };

    $.extend(WriteReviewTagGroup.prototype, {
        initialize: function initialize() {
            var _this = this;

            _.each(_this.elems.$checkboxes, function(el) {
                var value = el.value.toLowerCase();

                _this.values.push(value);
            });

            this.bindEvents();
        },

        bindEvents: function bindEvents() {
            this.onChange = this._nextTickProxy(this.onChange);
            this.elems.$input.on('keyup input change focus', this.onChange);
            this.elems.$button.on('click', $.proxy(this.addOption, this));
            this.elems.$input.on('keydown', $.proxy(this.checkKey, this));
        },

        addOption: function addOption(event) {
            var _this = this;

            var $addOptionWrapper = $(event.target).closest(this.DEFAULTS.SELECTORS.ADD_OPTION_CLASS);
            var data = {
                key: $addOptionWrapper.data('key'),
                value: _this.elems.$input.val()
            };

            dust.render('writeReviewTag', data, function(error, out) {
                $addOptionWrapper.before(out);

                _this.values.push(data.value.toLowerCase());

                _this.elems.$input.val('').change();
            });
        },

        checkKey: function checkKey(event) {
            if ((event.keyCode === 13)&&(event.target.value)) {
                event.preventDefault();
                this.addOption(event);
            }
        },

        onChange: function onChange() {
            var disable = true;
            var value = this.elems.$input.val().toLowerCase();

            if (value && _.indexOf(this.values, value) === -1) {
                disable = false;
            }

            this.elems.$button
                .prop('disabled', disable)
                .toggleClass(DEFAULTS.DISABLED_CLASS, disable);
        },

        _nextTickProxy: function _nextTickProxy(call) {
            var _this = this;
            // Fix for IE8
            return function() {
                setTimeout($.proxy(call, _this), 0);
            };
        }
    });

    app.WriteReviewTagGroup = WriteReviewTagGroup;

}).call(window.SPC = window.SPC || {}, window, window.jQuery, window._, window.dust);
;(function(window, document, $, _, dust, moment) {

    var app = this;

    var DEFAULTS = {
        DATE_FORMAT: 'MMMM DD, YYYY'
    };

    /*
     * Constructor
     */
    var WriteReviewPreview = function WriteReviewPreview($element, data, callback) {
        var _this = this instanceof WriteReviewPreview ? this : Object.create(WriteReviewPreview.prototype);

        _this.DEFAULTS = DEFAULTS;
        _this.elems = {
            $component: $element
        };

        _this.data = data;
        _this.callback = callback;
        _this.render();

        return _this;
    };

    $.extend(WriteReviewPreview.prototype, {
        render: function render() {
            var _this = this;

            dust.render('writeReviewModalPreview', _this._prepareDataForPreviewStep(_this.data), function(error, out) {
                _this.elems.$component.html(out);

                if (typeof _this.callback === 'function') {
                    _this.callback();
                }
            });
        },

        _prepareDataForPreviewStep: function _prepareDataForPreviewStep(data) {
            var _this = this;
            // jscs:disable
            // jshint ignore:start
            _.each(data.previewData.tag_group, function(property, key) {

                data.previewData.tag_group[key] = {
                    value: _.compact(data.previewData.tag_group[key]).join(', '),
                    name: _.where(data.fieldsData.tag_group, {key: key})[0].name,
                    key: key
                };
            });

            data.previewData.tag_group = _.values(data.previewData.tag_group);
            // jshint ignore:end
            // jscs:enable
            data.previewData.date = moment().format(_this.DEFAULTS.DATE_FORMAT);
            data.previewData.rating = parseInt(data.previewData.rating, 10).toFixed(1);

            return data.previewData;
        }
    });

    app.WriteReviewPreview = WriteReviewPreview;

}).call(window.SPC = window.SPC || {}, window, document, window.jQuery, window._, window.dust, window.moment);

;(function(window, document, $, _, dust, Response, Modernizr) {

    var app = this;

    var DEFAULTS = {
        SELECTORS: {
            PRODUCT_DETAIL_FORM_CLASS: '.product-detail__form',
            SKU: 'input[name="code"]',
            PRODUCT_PICTURE_URL: 'input[name="productPictureUrl"]',
            COLOR_OPTIONS_CLASS: '.product-detail__color-option',
            PRODUCT_PAGE_URL: '[name="productPageUrl"]'
        },
        AVAILABILITY_STATUS: {
            NOT_AVAILABLE: 'NOT_AVAILABLE',
            OUT_OF_STOCK: 'OUT_OF_STOCK',
            OUT_OF_STOCK_OFFLINE: 'OUT_OF_STOCK_OFFLINE',
            AVAILABLE: 'AVAILABLE'
        },
        SHIPPING_METHOD: 'DO_NOT_USE',
        IMAGE_PLACEHOLDER: 'undefined',

        CSS_MODIFIERS: {
            VALIDATION_ERROR: 'validation-error',
            VALIDATION_ERROR_SHOW: 'validation-error_show'
        },

        FIELDS_TITLES: {
            COLOR: 'color',
            HAND: 'hand'
        },
        EVENTS: {
            RESET_SKU: 'reset-sku'
        },
        NO_SIZE_REGEXP: /^N\/S$|^NS$/,
        MOBILE_WIDTH: 1023
    };

    /*
     * Constructor
     */
    var SkuSelector = function SkuSelector($element) {
        var _this = this instanceof SkuSelector ? this : Object.create(SkuSelector.prototype);

        _this.elems = {
            $component: $element,
            $form: $element.closest(DEFAULTS.SELECTORS.PRODUCT_DETAIL_FORM_CLASS),
            $window: $(window)
        };

        _this.elems.$skuInput = _this.elems.$form.find(DEFAULTS.SELECTORS.SKU);
        _this.elems.$imageInput = _this.elems.$form.find(DEFAULTS.SELECTORS.PRODUCT_PICTURE_URL);
        _this.elems.$productPageUrlInput = _this.elems.$form.find(DEFAULTS.SELECTORS.PRODUCT_PAGE_URL);

        _this.initialize();
        _this.bindEvents();

        return _this;
    };

    $.extend(SkuSelector.prototype, {

        initialize: function initialize() {
            var _this = this;
            // Here used .attr method because .data removes leading zeros
            var code = _this.elems.$component.attr('data-product-code');

            var variants = _this.elems.$component.data('product-variants');
            var imageAndColors = _this.elems.$component.data('product-image-and-colors');
            var skuQuery = _this.elems.$component.data('product-sku-query') || _this._getParamsFromUrl(code);
            var defaultImage = app.s7RootUrl + DEFAULTS.IMAGE_PLACEHOLDER;
            var sizeChart = _this.elems.$component.data('product-size-chart') || null;
            var isSellable = _this.elems.$component.data('is-sellable');

            _this.productData = {
                code: code,
                variants: variants.variants,
                imageAndColors: imageAndColors,
                titles: variants.titles,
                skuQuery: skuQuery,
                sku: '',
                defaultImage: defaultImage,
                sizeChart: sizeChart,
                defaultQuery: {},
                isSellable: isSellable
            };

            _this.pushStateDisabled = _this.elems.$component.data('push-state-disabled');

            _this.DEFAULTS = DEFAULTS;

            _this.preSelectData();
        },

        bindEvents: function bindEvents() {
            this.elems.$component.on('click', DEFAULTS.SELECTORS.COLOR_OPTIONS_CLASS, $.proxy(this._changeSelection, this));
            this.elems.$component.on('change', 'select', $.proxy(this._changeSelection, this));
            this.elems.$component.on(DEFAULTS.EVENTS.RESET_SKU, $.proxy(this._resetSku, this));

            app.subscribe(app.EVENTS.VALIDATE_SKU_SELECTION, $.proxy(this._validateSelectionByProductCode, this));
            app.subscribe(app.EVENTS.SET_SKU_UNSELLABLE, $.proxy(this._setSkuUnsellable, this));

            /* FIXME: CTCOFECM-19328 Since we do NOT select a default value for any other attributes that use drop-downs (Size, Loft, etc.),
             for consistency we should NOT select a value for 'Hand' either.
             $(window).on('hashchange', $.proxy(this._onHashChange, this)); */
        },

        /* FIXME: CTCOFECM-19328 Since we do NOT select a default value for any other attributes that use drop-downs (Size, Loft, etc.),
         for consistency we should NOT select a value for 'Hand' either.
         _onHashChange: function _onHashChange() {
         this.productData.skuQuery = this._getParamsFromUrl(this.productData.code);
         this.preSelectData();
         },*/

        _resetSku: function _resetSku() {
            var _this = this;

            _.forEach(this.productData.titles, function(skuTitle) {
                // FIXME: HACK
                if (_this.productData.skuQuery[skuTitle] && skuTitle !== DEFAULTS.FIELDS_TITLES.COLOR) {
                    _this.productData.skuQuery[skuTitle] = '';
                }
            });

            _this._updateSku(true);
        },

        /**
         * @param {String|Undefined} colorCode
         * @private
         */
        _updateColor: function _updateColor(colorCode) {
            var _this = this;

            var imageAndColor = _.where(_this.productData.imageAndColors, {colorValue: colorCode});
            var imageUrl = imageAndColor.length ? imageAndColor[0].imageUrl : _this.productData.defaultImage;

            _this.elems.$imageInput.val(imageUrl);

            app.trigger(app.EVENTS.CHANGE_PRODUCT_COLOR, {
                colorCode: colorCode,
                productCode: _this.productData.code
            });
        },

        _changeSelection: function _changeSelection(e) {
            var $control = $(e.currentTarget);
            var controlType = $control.data('control-type');
            var controlValue = '';

            if ($control.is('select')) {
                controlValue = $control.val();

                if (controlValue) {
                    this.productData.skuQuery[controlType] = controlValue;
                } else {
                    delete this.productData.skuQuery[controlType];
                }
            } else {
                e.preventDefault();

                /**
                 * Get value from select or custom color controls
                 * Here used .attr method instead of .data because we do not need converting to integer
                 */
                controlValue = $control.attr('data-value');

                this.productData.skuQuery[controlType] = controlValue;
                this._updateColor(controlValue);
            }

            this._updateSku(false);
        },

        /**
         * Search SKU's or query in the address bar by product code
         * @param {String} code
         * @return {Object}
         */
        _getParamsFromUrl: function _getParamsFromUrl(code) {
            var hashParams = $.bbq.getState();

            if (!$.isEmptyObject(hashParams)) {
                for (var key in hashParams) {
                    if (key === code) {
                        return hashParams[key];
                    }
                }
            }

            return {};
        },

        /**
         * Check if product has NS or N/S sizeTitle flag
         * @param {Array} data
         * @return {Boolean}
         */
        _hasNoSize: function _hasNoSize(data) {
            return _.some(data, function(item) {
                if (item.sizeTitle) {
                    return DEFAULTS.NO_SIZE_REGEXP.test(item.sizeTitle);
                }
            });
        },

        preSelectData: function preSelectData() {
            var _this = this;
            var defaultTitle = _this.productData.titles[0];

            function setDefaultQuery() {
                var uniqWithDefaultOption = _.uniq(_this.productData.variants, defaultTitle)[0];

                _this.productData.skuQuery = {};

                if (uniqWithDefaultOption && uniqWithDefaultOption[defaultTitle]) {
                    _this.productData.skuQuery[defaultTitle] = uniqWithDefaultOption[defaultTitle];
                }
            }

            switch (true) {
                case $.isEmptyObject(_this.productData.skuQuery):

                    setDefaultQuery();

                    break;

                case _.isString(_this.productData.skuQuery):
                    var currentProduct = _.where(_this.productData.variants, {code: _this.productData.skuQuery})[0];

                    if (currentProduct) {
                        _this.productData.skuQuery = {};

                        _(_this.productData.titles).forEach(function(title) {
                            _this.productData.skuQuery[title] = currentProduct[title];
                        });
                    } else {
                        setDefaultQuery();
                    }

                    break;
            }

            if (_this._hasNoSize(_this.productData.variants)) {
                var uniqueSizeTitles = _.uniq(_this.productData.variants, 'sizeTitle');

                if (uniqueSizeTitles.length === 1) {
                    _this.productData.skuQuery.size = uniqueSizeTitles[0].size;
                    _this.productData.defaultQuery.size = uniqueSizeTitles[0].size;
                    _this.productData.hideSize = true;
                }
            }

            _this._updateColor(_this.productData.skuQuery[defaultTitle]);
            _this._updateSku(true);
        },

        /**
         * Update SKU value to the input
         * Update product URL
         * Trigger CHANGE_PRODUCT_SKU global event
         * Update hash params, when:
         * - user changes SKU selector; [preSelect] === false
         * - automatically based on the parameters. [preSelect] === true
         * @param {Boolean} preSelect
         * Render SKU selector component
         */
        _updateSku: function _updateSku(preSelect) {
            var _this = this;
            var hashParams = $.bbq.getState();
            var selectedSkuInfo = {};

            hashParams[_this.productData.code] = _this.productData.skuQuery;
            _this.productData.sku = '';
            selectedSkuInfo = _this._getSelectedSkuInfo(hashParams);
            _this.elems.$skuInput.val(_this.productData.sku);
            _this._updateProductUrl(_this.productData.sku);

            if (!preSelect && !_this.pushStateDisabled) {
                _this._replaceState(hashParams);
            }

            app.trigger(app.EVENTS.CHANGE_PRODUCT_SKU, {
                sku: _this.productData.sku,
                productCode: _this.productData.code,
                availabilityStatus: selectedSkuInfo.availabilityStatus,
                preferredShippingMethod: selectedSkuInfo.preferredShippingMethod,
                ecommOnly: selectedSkuInfo.ecommOnly,
                skuSelector: _this,
                isSellable: _this.productData.isSellable
            });

            _this._setDefaultSku(preSelect);
            _this.render();
        },

        _setDefaultSku: function _setDefaultSku(preSelect) {
            var _this = this;

            if (preSelect) {
                var defaultTitle = _this.productData.titles[0];

                if (defaultTitle !== DEFAULTS.FIELDS_TITLES.COLOR) {
                    _this.productData.skuQuery = _.clone(_this.productData.defaultQuery);
                }
            }
        },

        _updateProductUrl: function _updateProductUrl(sku) {
            var productPageUrl = this.elems.$productPageUrlInput.data('raw-value');

            if (sku) {
                /**
                 * Set link to product details page
                 * example: .html#prd000037=prd000037-01
                 */
                productPageUrl += '#' + this.productData.code + '=' + sku;
            }

            this.elems.$productPageUrlInput.val(productPageUrl);
        },

        _getSelectedSkuInfo: function _getSelectedSkuInfo(hashParams) {
            var areAllOptionsSelected = (_.size(this.productData.skuQuery) === _.size(this.productData.titles));
            var availabilityStatus = DEFAULTS.AVAILABILITY_STATUS.AVAILABLE;
            var preferredShippingMethod = DEFAULTS.SHIPPING_METHOD;
            var ecommOnly = false;

            if (!this.productData.skuQuery.size && this.productData.defaultQuery.size) {
                areAllOptionsSelected = (_.size(this.productData.skuQuery) === _.size(this.productData.titles) - 1);
            }

            if (areAllOptionsSelected) {
                var productVariant = _.where(this.productData.variants, this.productData.skuQuery);

                if (productVariant.length === 1) {
                    var selectedVariant = productVariant[0];

                    this.productData.sku = selectedVariant.code;

                    hashParams[this.productData.code] = this.productData.sku;

                    if (selectedVariant.available === 0) {
                        availabilityStatus = DEFAULTS.AVAILABILITY_STATUS.OUT_OF_STOCK;

                        if (selectedVariant.availableInStores === false) {
                            availabilityStatus = DEFAULTS.AVAILABILITY_STATUS.OUT_OF_STOCK_OFFLINE;
                        }
                    }

                    preferredShippingMethod = selectedVariant.preferredShippingMethod;
                    ecommOnly = selectedVariant.ecommOnly;
                } else {
                    // Not available if we have problem with SKU receiving from server (Exceptional case)
                    availabilityStatus = DEFAULTS.AVAILABILITY_STATUS.NOT_AVAILABLE;
                    console.warn('"SkuSelector._updateSku" >> inconsistent data!', this.productData.variants, this.productData.skuQuery);
                }
            } else {
                if (_.where(this.productData.variants, {available: 0}).length === this.productData.variants.length) {
                    availabilityStatus = DEFAULTS.AVAILABILITY_STATUS.OUT_OF_STOCK;

                    if (_.where(this.productData.variants, {availableInStores: false}).length === this.productData.variants.length) {
                        availabilityStatus = DEFAULTS.AVAILABILITY_STATUS.OUT_OF_STOCK_OFFLINE;
                    }
                }
            }

            return {
                availabilityStatus: availabilityStatus,
                preferredShippingMethod: preferredShippingMethod,
                ecommOnly: ecommOnly
            };
        },

        resetSkuSelector: function resetSkuSelector() {
            var isComparePage = Boolean(app.modules.CompareProductList && app.modules.CompareProductList[0]);

            this.productData.skuQuery = {};

            if (!this.pushStateDisabled && !isComparePage) {
                this._replaceState(this.productData.skuQuery);
            }

            this.preSelectData();
        },

        _replaceState: function _replaceState(hashParams) {
            if (Modernizr.history) {
                window.history.replaceState(hashParams, '', '#' + $.param(hashParams, false));
                // NOTE: replaceState doesn't dispatch events, hashchange might be needed
                this.elems.$window.trigger('hashchange');
            } else {
                $.bbq.pushState(hashParams);
            }
        },

        _isAvailableOption: function _isAvailableOption(optionValue, controlType) {
            var tempQuery = _.assign({}, this.productData.skuQuery);

            tempQuery[controlType] = optionValue;

            var filteredByOptionValue = _.where(this.productData.variants, tempQuery);
            var isSkuAvailableInStore = _.where(filteredByOptionValue, 'available').length > 0;
            var isSellableProduct = this.productData.isSellable;

            return isSkuAvailableInStore && isSellableProduct;
        },

        _prepareData: function _prepareData() {
            var _this = this;

            if (!_.where(_this.productData.variants, _this.productData.skuQuery).length) {
                console.warn('"SkuSelector._prepareData" >> inconsistent data!', _this.productData.variants, _this.productData.skuQuery);
            }

            function getControlTypeTitle(controlType) {
                var result = '';
                var tempQuery = {};

                tempQuery[controlType] = _this.productData.skuQuery[controlType];

                var filteredByControlType = _.where(_this.productData.variants, tempQuery);

                if (filteredByControlType.length) {
                    result = filteredByControlType[0][controlType + 'Title'];
                }

                return result;
            }

            function getSiteChart(controlType) {
                var result = null;

                // FIXME: _this.productData.sizeChart must be removed
                if (controlType === 'size' && _this.productData.sizeChart && _this.productData.sizeChart.sizeChartPath) {
                    result = _this.productData.sizeChart;
                }

                return result;
            }

            var templateData = {controls: [], hideSize: _this.productData.hideSize};

            for (var i = 0; i < _this.productData.titles.length; i++) {
                // @controlType: color, size
                var controlType = _this.productData.titles[i];
                var controlData = {
                    options: [],
                    controlType: controlType,
                    // @controlTypeTitle: malachite, loft
                    controlTypeTitle: getControlTypeTitle(controlType),
                    sizeChart: getSiteChart(controlType)
                };

                var controlOptions = _.uniq(_this.productData.variants, controlType);

                for (var j = 0; j < controlOptions.length; j++) {
                    var optionValue = controlOptions[j][controlType];
                    var optionData = {
                        optionValue: optionValue,
                        optionTitle: controlOptions[j][controlType + 'Title'],
                        isSelected: _this.productData.skuQuery[controlType] === optionValue,
                        isAvailable: _this._isAvailableOption(optionValue, controlType),
                        colorImage: controlOptions[j].colorImage
                    };

                    optionData.outOfStockMobileView = !optionData.isAvailable && Response.band(0, DEFAULTS.MOBILE_WIDTH);
                    controlData.options.push(optionData);
                }

                templateData.controls.push(controlData);
            }

            return templateData;
        },

        render: function render() {
            var _this = this;
            var templateData = _this._prepareData();

            dust.render('skuSelector', templateData, function(error, out) {
                _this.elems.$component.html(out);
                app.createSubModule(_this.elems.$component, _this);
            });
        },

        _validateSelectionByProductCode: function _validateSelectionByProductCode(productCode) {
            var _this = this;

            if (_this.productData.code !== productCode) {
                return;
            }

            var $selects = _this.elems.$component.find('select');
            var isFocused = false;

            $selects.each(function() {
                var $select = $(this);

                if (!$select.val()) {
                    $select
                        .parent()
                        .addClass(DEFAULTS.CSS_MODIFIERS.VALIDATION_ERROR)
                        .next()
                        .addClass(DEFAULTS.CSS_MODIFIERS.VALIDATION_ERROR_SHOW);

                    if (Response.band(0, 768) && !isFocused) {
                        _this._focusError($select);
                        isFocused = true;
                    }
                }
            });
        },

        _focusError: function _focusError($select) {
            this.elems.$window.scrollTop($select.offset().top + $select.outerHeight() / 2 - this.elems.$window.height() / 2);
            $select.focus();
        },

        _setSkuUnsellable: function _setSkuUnsellable(data) {
            var variants = this.productData.variants;

            if (this.productData.code === data.code) {
                var index = _.findIndex(variants, {code: data.sku});
                variants[index].available = data.available;

                this.render();
            }
        },

        destroy: function destroy() {
            this.elems.$component.off('click', DEFAULTS.SELECTORS.COLOR_OPTIONS_CLASS);
            this.elems.$component.off('change', 'select');
        }
    });

    app.SkuSelector = SkuSelector;

    return app.SkuSelector;

}).call(window.SPC = window.SPC || {}, window, document, window.jQuery, window._, window.dust, window.Response, window.Modernizr);

;(function(window, document, $, dust, CQ) {

    var app = this;

    var DEFAULTS = {
        SELECTORS: {
            ADD_TO_CART_CLASS: '.add-cart',
            PRODUCT_DETAIL_FORM_CLASS: '.product-detail__form',
            PRODUCT_DETAIL_PREVIEW: '.product-detail__preview',
            SKU_SELECTOR: '[data-module-type="SkuSelector"]',
            QTY_DROPDOWN_CLASS: '.validation-error__qty'
        },
        SERVICES_URLS: {
            ADD_TO_CART: '/services/sportchek/cart/entry'
        },
        CSS_MODIFIERS: {
            VALIDATION_ERROR_SHOW: 'validation-error_show',
            UNAVAILABLE: 'add-cart_unavailable'
        },
        AVAILABILITY_STATUS: {
            OUT_OF_STOCK: 'OUT_OF_STOCK'
        },
        ERRORS: {
            LOW_STOCK: 'error.cart.validation.entry.lowStock',
            QUANTITY_RESTRICTION: 'error.cart.validation.entry.quantityRestriction',
            QUANTITY_MISMATCH: 'error.cart.validation.entry.quantityMismatch',
            PRODUCT_SOLDOUT: 'error.cart.validation.product.soldout'
        }
    };

    var AddToCart = function AddToCart($element, parentModule) {
        var _this = this instanceof AddToCart ? this : Object.create(AddToCart.prototype);

        _this.elems = {
            $component: $element
        };

        _this.elems.$form = _this.elems.$component.closest(DEFAULTS.SELECTORS.PRODUCT_DETAIL_FORM_CLASS);
        _this.elems.$skuSelector = _this.elems.$form.find(DEFAULTS.SELECTORS.SKU_SELECTOR);
        _this.elems.$spinnerPlaceholder = _this.elems.$form.closest(DEFAULTS.SELECTORS.PRODUCT_DETAIL_PREVIEW);

        _this.productData = {
            // Here used .attr method because .data removes leading zeros
            productCode: _this.elems.$skuSelector.attr('data-product-code'),
            isAssemblyRequired: _this.elems.$component.data('is-assembly-required')
        };

        var productPriceModule = {};

        // IF PDP
        if (app.modules.ProductPrice &&  app.modules.ProductPrice[0]) {
            productPriceModule = app.modules.ProductPrice[0];
        } else {
            productPriceModule = parentModule.subModules.ProductPrice[parentModule.subModules.ProductPrice.length - 1];
        }

        _this.productData.isPriceAvailable = productPriceModule.getPriceAvailability();

        // Prevent child modules to bind handler on 'click' event
        _this.preventChildModuleClick = true;

        _this.initialize();

        return _this;
    };

    $.extend(AddToCart.prototype, {

        initialize: function initialize() {
            this.bindEvents();
        },

        render: function render() {
            var _this = this;

            dust.render('addToCart', _this.productData, function(error, out) {
                _this.elems.$component.html(out);

                var isAvailable = Boolean(_this.elems.$component.find(DEFAULTS.SELECTORS.ADD_TO_CART_CLASS).length);

                _this.elems.$component.toggleClass(DEFAULTS.CSS_MODIFIERS.UNAVAILABLE, !isAvailable);

                app.createSubModule(_this.elems.$component, _this);
            });
        },

        bindEvents: function bindEvents() {
            var _this = this;

            _this.elems.$component.on('click', DEFAULTS.SELECTORS.ADD_TO_CART_CLASS, $.proxy(_this.addToCart, _this));

            app.subscribe(app.EVENTS.CHANGE_PRODUCT_SKU, $.proxy(this._onChangeSku, this));
            app.subscribe(app.EVENTS.SET_AVAILABILITY_STATUS, $.proxy(this._setAvailabilityStatus, this));
        },

        _onChangeSku: function _onChangeSku(data) {
            if (this.productData.productCode === data.productCode) {
                this.productData.availabilityStatus = data.availabilityStatus;
                this.productData.preferredShippingMethod = data.preferredShippingMethod;
                this.productData.sku = data.sku;
                this.productData.isSellable = data.isSellable;

                this.skuSelector = data.skuSelector;

                this.render();
            }
        },

        addToCart: function addToCart() {
            var _this = this;
            var params = _this.elems.$form.toObject();

            // FIXME: we really need this?
            if (!params.code) {
                app.trigger(app.EVENTS.VALIDATE_SKU_SELECTION, _this.productData.productCode);

                return;
            }

            if (_this.productData.isAssemblyRequired) {
                var safetyAndWarranty = _this.subModules.SafetyAndWarranty[0];

                safetyAndWarranty.open($.proxy(_this._continueAddToCart, _this, params));
            } else {
                _this._continueAddToCart(params);
            }
        },

        _setAvailabilityStatus: function _setAvailabilityStatus(data) {
            this.productData.availabilityStatus = data.availabilityStatus;
            this.render();
        },

        _continueAddToCart: function _continueAddToCart(params) {
            var _this = this;
            var productData = {
                itemEntries: [params]
            };

            $.ajax({
                url: DEFAULTS.SERVICES_URLS.ADD_TO_CART,
                type: 'POST',
                data: JSON.stringify(productData),
                beforeSend: function() {
                    _this.elems.$spinnerPlaceholder.spinner('show', {insertInside: true});
                },
                success: function(data) {
                    app.trigger(app.EVENTS.UPDATE_CART, data);
                    app.trigger(app.EVENTS.ANALYTICS.ADD_TO_CART, {
                        skus: [params.code],
                        entries: data.entries,
                        codes: [_this.productData.productCode],
                        button: _this.elems.$component
                    });

                    app.modules.CartConfirmationMessage[0].show(data, [params.code]);

                    if (_this.skuSelector) {
                        _this.skuSelector.resetSkuSelector();
                    }

                    _this.render();
                },
                error: function(jqXhr, textStatus, errorThrown) {
                    switch (jqXhr.status) {
                        case 403:
                            app.modules.User.logOut();

                            break;

                        case 404:
                            var messageKey = JSON.parse(jqXhr.responseText).messages[0].message;

                            if (messageKey === 'error.cart.find.inventory.notFound') {
                                app.modules.Alert.openModal({
                                    title: CQ.I18n.get('PRD0018')
                                });
                            }

                            break;

                        case 424:
                            var error = JSON.parse(jqXhr.responseText).messages[0];
                            var errorCode = error.message;

                            switch (errorCode) {
                                case DEFAULTS.ERRORS.LOW_STOCK:

                                case DEFAULTS.ERRORS.QUANTITY_RESTRICTION:
                                    _this.productData.lowStockError = true;
                                    _this.productData.itemsAvailable = error.arguments[2];

                                    _this.render();

                                    _this.elems.$form
                                        .find(DEFAULTS.SELECTORS.QTY_DROPDOWN_CLASS)
                                        .addClass(DEFAULTS.CSS_MODIFIERS.VALIDATION_ERROR_SHOW);

                                    break;

                                case DEFAULTS.ERRORS.QUANTITY_MISMATCH:
                                    var quantityLimit = error.arguments[1];

                                    app.modules.Alert.openModal({
                                        title: CQ.I18n.get(errorCode, quantityLimit),
                                        footerText: CQ.I18n.get('GLB0137')
                                    });

                                    break;

                                case DEFAULTS.ERRORS.PRODUCT_SOLDOUT:

                                    app.trigger(app.EVENTS.SET_SKU_UNSELLABLE, {
                                        sku: _this.productData.sku,
                                        code: _this.productData.productCode,
                                        available: 0
                                    });

                                    _this._setAvailabilityStatus({
                                        availabilityStatus: DEFAULTS.AVAILABILITY_STATUS.OUT_OF_STOCK
                                    });

                                    break;

                                default:
                                    app.modules.Alert.openModal({
                                        title: CQ.I18n.get(errorCode)
                                    });
                            }

                            break;

                        default:
                            console.error('"AddToCart.addToCart" >> ' + jqXhr.status + ' (' + errorThrown + ')');
                    }
                },
                complete: function() {
                    _this.elems.$spinnerPlaceholder.spinner('hide');
                }
            });
        },

        destroy: function destroy() {
            this.elems.$component.off('click', DEFAULTS.SELECTORS.ADD_TO_CART_CLASS);
        }
    });

    app.AddToCart = AddToCart;

    return app.AddToCart;

}).call(window.SPC = window.SPC || {}, window, document, window.jQuery, window.dust, window.CQ);

;(function(window, document, $, _, dust, CQ) {

    var app = this;

    var DEFAULTS = {
        SELECTORS: {
            PRODUCT_DETAIL_FORM_CLASS: '.product-detail__form',
            ADD_TO_WISH_LIST_CLASS: '.wishlist',
            REMOVE_FROM_WISH_LIST_CLASS: '.remove-wishlist',
            SKU_SELECTOR: '[data-module-type="SkuSelector"]'
        },
        SERVICES_URLS: {
            WISH_LIST: '/services/sportchek/wishlist',
            REMOVE_ITEM_FROM_WISH_LIST: '/services/sportchek/wishlist/delete',
            SKU_CODES_EXIST_IN_WISH_LIST: '/services/sportchek/wishlist/exists'
        },
        AVAILABILITY_STATUS: {
            OUT_OF_STOCK: 'OUT_OF_STOCK'
        },
        ERRORS: {
            QUANTITY_RESTRICTION: 'error.wishList.add.wishlistModel.quantityRestriction',
            PRODUCT_SOLDOUT: 'error.wishList.validation.product.soldout'
        }
    };

    var AddToWishList = function AddToWishList($element) {
        var _this = this instanceof AddToWishList ? this : Object.create(AddToWishList.prototype);

        _this.elems = {
            $component: $element,
            $form: $element.closest(DEFAULTS.SELECTORS.PRODUCT_DETAIL_FORM_CLASS)
        };

        _this.elems.$skuSelector = _this.elems.$form.find(DEFAULTS.SELECTORS.SKU_SELECTOR);

        _this.productData = {
            // Here used .attr method because .data removes leading zeros
            productCode: _this.elems.$skuSelector.attr('data-product-code'),
            productVariants: _this.elems.$skuSelector.data('product-variants'),
            inWishList: {}
        };

        _this.productData.skuCodes = _this.productData.productVariants ? _.pluck(_this.productData.productVariants.variants, 'code') : [];
        _this.linkToWishList = _this.elems.$component.data('link-to-wishlist');

        _this.initialize();

        return _this;
    };

    $.extend(AddToWishList.prototype, {

        initialize: function initialize() {
            if (this.productData.skuCodes.length === 0) {
                console.log('"AddToWishList.checkSkusInWishList" >> no SKU available');

                return;
            }

            this.render = $.proxy(this.render, this);
            this.checkSkusInWishList = $.proxy(this.checkSkusInWishList, this);

            this._reset();
            this.render(null);

            if (app.modules.User.isLoggedIn()) {
                this.checkSkusInWishList();
            }

            this.bindEvents();
        },

        _reset: function _reset() {
            var skuCodes = this.productData.skuCodes;

            for (var i = 0; i < skuCodes.length; i++) {
                this.productData.inWishList[skuCodes[i]] = false;
            }
        },

        /**
         * Show add to wishlist button
         * @param {Null|Object} data in most cases it is null, only after changing SKU selector it will object
         */
        render: function render(data) {
            var _this = this;
            var sku = _this._getFormData().code;
            var templateData = {
                inWishList: _this.productData.inWishList[sku]
            };

            // App.EVENTS.CHANGE_PRODUCT_SKU
            if (data && data.availabilityStatus) {
                templateData.availabilityStatus = data.availabilityStatus;
            }

            dust.render('addToWishlist', templateData, function(error, out) {
                _this.elems.$component.html(out);
            });
        },

        bindEvents: function bindEvents() {
            this.elems.$component.on('click', DEFAULTS.SELECTORS.ADD_TO_WISH_LIST_CLASS, $.proxy(this.addToWishList, this));
            this.elems.$component.on('click', DEFAULTS.SELECTORS.REMOVE_FROM_WISH_LIST_CLASS, $.proxy(this.removeFromWishList, this));

            app.subscribe(app.EVENTS.CHANGE_PRODUCT_SKU, $.proxy(this._onChangeSku, this));
            app.subscribe(app.EVENTS.LOG_IN, this.checkSkusInWishList);

            app.subscribe(app.EVENTS.LOG_OUT, $.proxy(function() {
                this._reset();
                this.render(null);
            }, this));
        },

        _getFormData: function _getFormData() {
            return this.elems.$form.toObject();
        },

        _onChangeSku: function _onChangeSku(data) {
            if (this.productData.productCode === data.productCode) {
                this.render(data);
            }
        },

        checkSkusInWishList: function checkSkusInWishList() {
            var _this = this;

            $.ajax({
                url: DEFAULTS.SERVICES_URLS.SKU_CODES_EXIST_IN_WISH_LIST,
                type: 'POST',
                data: JSON.stringify({
                    fglIds: _this.productData.skuCodes
                }),
                success: function(data) {
                    var wishListCollection = data.entryStatusDataCollection;

                    _.each(wishListCollection, function(el) {
                        // FIXME: string 'true' ?
                        _this.productData.inWishList[el.productId] = (el.exists.toString() === 'true');
                    });

                    _this.render(null);
                },
                error: function(jqXhr, textStatus, errorThrown) {
                    switch (jqXhr.status) {
                        case 403:
                            app.modules.User.logOut();

                            break;

                        default:
                            console.error('"AddToWishList.checkSkusInWishList" >> ' + jqXhr.status + ' (' + errorThrown + ')');
                    }
                }
            });
        },

        // Open authentication modal and bind addToWishList events
        _openAuthModal: function _openAuthModal() {
            var _this = this;

            var proxiedAddToWishList = $.proxy(_this.addToWishList, _this);

            app.modules.AuthModal[0].open({
                step: 'signin',
                title: 'GLB0044',
                onOpen: function() {
                    app.subscribe(app.EVENTS.LOG_IN, proxiedAddToWishList);
                },
                onClose: function() {
                    app.unsubscribe(app.EVENTS.LOG_IN, proxiedAddToWishList);
                }
            });
        },

        addToWishList: function addToWishList() {
            var _this = this;

            var params = _this._getFormData();

            if (!params.code) {
                app.trigger(app.EVENTS.VALIDATE_SKU_SELECTION, _this.productData.productCode);

                return;
            }

            if (!app.modules.User.isLoggedIn()) {
                _this._openAuthModal();

                return;
            }

            var productData = {
                itemEntries: [{
                    code: params.code,
                    productPageUrl: params.productPageUrl,
                    productPictureUrl: params.productPictureUrl,
                    quantity: 1
                }]
            };

            $.ajax({
                url: DEFAULTS.SERVICES_URLS.WISH_LIST,
                type: 'POST',
                data: JSON.stringify(productData),
                success: function() {
                    _this.productData.inWishList[params.code] = true;
                    _this.render(null);

                    app.trigger(app.EVENTS.ANALYTICS.ADD_TO_WISHLIST, {
                        code: _this.productData.productCode,
                        sku: params.code,
                        button: _this.elems.$component
                    });
                },
                error: function(jqXhr, textStatus, errorThrown) {
                    switch (jqXhr.status) {
                        case 403:
                            app.modules.User.logOut();

                            break;

                        case 424:
                            var response = JSON.parse(jqXhr.responseText);
                            var errorCode = response.messages[0].message;

                            switch (errorCode) {
                                case DEFAULTS.ERRORS.QUANTITY_RESTRICTION:
                                    var thresholdValue = response.messages[0].arguments[0];

                                    app.modules.Alert.openModal({
                                        linkText: CQ.I18n.get('PRD0032'),
                                        cancelText: CQ.I18n.get('GLB0111'),
                                        title: CQ.I18n.get('PRD0031'),
                                        description: CQ.I18n.get(errorCode, thresholdValue)
                                    }, $.noop, 'wishlistAlert');

                                    break;

                                case DEFAULTS.ERRORS.PRODUCT_SOLDOUT:

                                    app.trigger(app.EVENTS.SET_SKU_UNSELLABLE, {
                                        sku: params.code,
                                        code: _this.productData.productCode,
                                        available: 0
                                    });

                                    app.trigger(app.EVENTS.SET_AVAILABILITY_STATUS, {
                                        availabilityStatus: DEFAULTS.AVAILABILITY_STATUS.OUT_OF_STOCK
                                    });

                                    break;

                                default:
                                    app.modules.Alert.openModal({
                                        linkText: CQ.I18n.get('PRD0032'),
                                        cancelText: CQ.I18n.get('GLB0111'),
                                        title: CQ.I18n.get(errorCode)
                                    }, $.noop, 'wishlistAlert');
                            }

                            break;

                        default:
                            console.error('"AddToWishList.addToWishList" >> ' + jqXhr.status + ' (' + errorThrown + ')');
                    }
                }
            });
        },

        removeFromWishList: function removeFromWishList() {
            var _this = this;

            if (!app.modules.User.isLoggedIn()) {
                _this._openAuthModal();

                return;
            }

            var sku = _this._getFormData().code;

            if (!sku) {
                app.trigger(app.EVENTS.VALIDATE_SKU_SELECTION, _this.productData.productCode);

                return;
            }

            $.ajax({
                url: DEFAULTS.SERVICES_URLS.REMOVE_ITEM_FROM_WISH_LIST,
                type: 'POST',
                data: JSON.stringify({fglIds: [sku]}),
                success: function() {
                    _this.productData.inWishList[sku] = false;
                    _this.render(null);
                },
                error: function(jqXhr, textStatus, errorThrown) {
                    switch (jqXhr.status) {
                        case 403:
                            app.modules.User.logOut();

                            break;

                        case 424:
                            var message = JSON.parse(jqXhr.responseText).messages[0].message;

                            switch (message) {

                                case 'error.wishList.delete.product.notExist':
                                    app.modules.Alert.openModal({
                                        title: CQ.I18n.get('error.wishList.find.product.notExist'),
                                        buttonText: CQ.I18n.get('HOM0009')
                                    });

                                    break;

                                default:
                                    app.modules.Alert.openModal({
                                        title: CQ.I18n.get(message)
                                    });
                            }

                            break;

                        default:
                            console.error('"AddToWishList.removeFromWishList" >> ' + jqXhr.status + ' (' + errorThrown + ')');
                    }
                }
            });
        },

        destroy: function destroy() {
            app.unsubscribe(app.EVENTS.CHANGE_PRODUCT_SKU, this.render);
            app.unsubscribe(app.EVENTS.LOG_IN, this.checkSkusInWishList);

            this.elems.$component.on('click', DEFAULTS.SELECTORS.ADD_TO_WISH_LIST_CLASS);
            this.elems.$component.on('click', DEFAULTS.SELECTORS.REMOVE_FROM_WISH_LIST_CLASS);
        }
    });

    app.AddToWishList = AddToWishList;

    return app.AddToWishList;

}).call(window.SPC = window.SPC || {}, window, document, window.jQuery, window._, window.dust, window.CQ);

;(function(window, document, $, dust, CQ) {

    var app = this;

    /*
     * Default Variables
     */
    var DEFAULTS = {
        SELECTORS: {
            PRODUCT_DETAIL_FORM_CLASS: '.product-detail__form',
            FORM_DROPDOWN_CLASS: '.form-dropdown',
            SKU_SELECTOR: '[data-module-type="SkuSelector"]',
            PRODUCT_STORES_WRAPPER_CLASS: '.product-stores-wrapper',
            PRODUCT_STORE_CLASS: '.product-stores',
            TEMPLATE_PLACEHOLDER_CLASS: '.product-stores__template-placeholder',
            VIEW_MORE_CLASS: '.product-stores__more',
            PRODUCT_URL_INPUT: 'input[name="productPageUrl"]',
            SELECT: 'select',
            CHANGE_STORE: '.product-stores__change-store',
            PREVIOUS_LOCATION_CLASS: '.product-stores__previous-location'
        },
        CSS_MODIFIERS: {
            ACTIVE: 'active-store',
            DISABLED: 'button_state_disabled'
        },
        SERVICES: {
            GET_PREFERRED_STORE: '/services/sportchek/customer/profile/preferredStore',
            FIND_IN_STORE: '/services/sportchek/inventory/findInStore'
        },
        VIEW_MORE_LOCATIONS_KEYS: {
            LOCATION: 'location='
        },
        AVAILABILITY_STATUS: {
            NOT_AVAILABLE: 'NOT_AVAILABLE',
            OUT_OF_STOCK_OFFLINE: 'OUT_OF_STOCK_OFFLINE'
        },
        REQUEST_PAGE_SIZE: 3
    };

    /*
     * Constructor
     */
    var FindInStore = function FindInStore($element) {
        var _this = this instanceof FindInStore ? this : Object.create(FindInStore.prototype);

        _this.elems = {
            $component: $element,
            $form: $element.closest(DEFAULTS.SELECTORS.PRODUCT_DETAIL_FORM_CLASS),
            $document: $(document)
        };

        _this.elems.$productStores = _this.elems.$form.find(DEFAULTS.SELECTORS.PRODUCT_STORE_CLASS);
        _this.elems.$changeStoreLocation = _this.elems.$form.find(DEFAULTS.SELECTORS.CHANGE_STORE);

        _this.elems.$templatePlacehodler = _this.elems.$productStores.find(DEFAULTS.SELECTORS.TEMPLATE_PLACEHOLDER_CLASS);
        _this.elems.$viewMore = _this.elems.$productStores.find(DEFAULTS.SELECTORS.VIEW_MORE_CLASS);
        _this.elems.$skuSelector = _this.elems.$form.find(DEFAULTS.SELECTORS.SKU_SELECTOR);
        _this.elems.$previousLocationPlaceholder = _this.elems.$productStores.find(DEFAULTS.SELECTORS.PREVIOUS_LOCATION_CLASS);

        _this.getUsersPreferredStore();

        _this.productData = {
            // Here used .attr method because .data removes leading zeros
            productCode: _this.elems.$component.attr('data-product-code'),
            productPageUrl: _this.elems.$form.find(DEFAULTS.SELECTORS.PRODUCT_URL_INPUT).data('raw-value') || ''
        };
        _this.requestParams = {
            pageSize: DEFAULTS.REQUEST_PAGE_SIZE,
            locale: CQ.I18n.getLocale(),
            productIds: _this._getSku()
        };

        _this.bindEvents();

        return _this;
    };

    $.extend(FindInStore.prototype, {
        bindEvents: function bindEvents() {
            this.elems.$component.on('click', $.proxy(this.toggleStoresList, this));
            this.elems.$changeStoreLocation.on('click', $.proxy(this._locationRequest, this));

            this._onChangeProductSku = $.proxy(this._onChangeProductSku, this);

            app.subscribe(app.EVENTS.CHANGE_PRODUCT_SKU, this._onChangeProductSku);
            app.subscribe(app.EVENTS.PRICE_READY, $.proxy(this.renderWithPrice, this));
            app.subscribe(app.EVENTS.LOG_IN, $.proxy(this.getUsersPreferredStore, this));
        },

        getUsersPreferredStore: function getUsersPreferredStore() {
            this.userData = app.modules.User.get();

            if (!$.isEmptyObject(this.userData) && this.userData.preferredStore) {
                this.previousLocation =  this.userData.preferredStore.address.town;

                $.cookie(app.COOKIES.FIND_IN_STORE_PREV_STORE, this.previousLocation, {path: '/'});
            } else {
                this.previousLocation = $.cookie(app.COOKIES.FIND_IN_STORE_PREV_STORE);
            }
        },

        _onChangeProductSku: function _onChangeProductSku(data) {
            var isShown = data.availabilityStatus !== DEFAULTS.AVAILABILITY_STATUS.NOT_AVAILABLE && data.availabilityStatus !== DEFAULTS.AVAILABILITY_STATUS.OUT_OF_STOCK_OFFLINE;

            if (this.productData.productCode === data.productCode) {
                this.requestParams.productIds = this._getSku();
                this.elems.$component.toggle(isShown);

                var alreadyOpen = this.elems.$component.hasClass(DEFAULTS.CSS_MODIFIERS.ACTIVE);

                if (alreadyOpen) {
                    this.toggleStoresList();
                    this.previousLocation = $.cookie(app.COOKIES.FIND_IN_STORE_PREV_STORE);
                }

                this.elems.$component.toggleClass(DEFAULTS.CSS_MODIFIERS.DISABLED, data.ecommOnly);
            }
        },

        renderWithPrice: function renderWithPrice(priceData) {
            if (priceData.onlineOnly || !priceData.onFloor) {
                this.elems.$component
                    .parent()
                    .hide()
                    .data('hidden-reason', CQ.I18n.get('Button hidden, because price has online only status'));
            }
        },

        toggleStoresList: function toggleStoresList(e) {
            if (this.elems.$component.hasClass(DEFAULTS.CSS_MODIFIERS.DISABLED)) {
                e.preventDefault();

                return false;
            }

            var alreadyOpen = this.elems.$component.hasClass(DEFAULTS.CSS_MODIFIERS.ACTIVE);

            if (!alreadyOpen) {
                this.onClosestStoresList();
            }
        },

        onClosestStoresList: function onClosestStoresList() {
            if (this.requestParams.productIds) {
                this.checkLocation();
            } else {
                app.trigger(app.EVENTS.VALIDATE_SKU_SELECTION, this.productData.productCode);
            }
        },

        /**
         * Get SKU code from form.
         * @returns {String|undefined}
         * @private
         */
        _getSku: function _getSku() {
            return this.elems.$form.toObject().code || '';
        },

        changeViewMoreLink: function changeViewMoreLink() {
            var rawHref = this.elems.$viewMore.data('raw-href');
            var storeLocation = this.previousLocation ? ('#' + DEFAULTS.VIEW_MORE_LOCATIONS_KEYS.LOCATION + this.previousLocation) : '';

            this.elems.$viewMore.attr('href', rawHref + '?' + this.setLinkParams() + storeLocation);
        },

        setLinkParams: function setLinkParams() {
            return $.param({
                product: this.productData.productCode,
                sku: this.requestParams.productIds,
                path: this.productData.productPageUrl
            });
        },

        // TODO: refactor this method
        /**
         * Check for location in other FindInStore modules on page
         * @private
         */
        _checkForLocation: function _checkForLocation() {
            if (app.modules.FindInStore) {
                for (var i = 0; i < app.modules.FindInStore.length; i++) {
                    if (app.modules.FindInStore[i].previousLocation) {
                        this.previousLocation = app.modules.FindInStore[i].previousLocation;
                        $.cookie(app.COOKIES.FIND_IN_STORE_PREV_STORE, this.previousLocation, {path: '/'});

                        break;
                    }
                }
            } else if (app.modules.ProductGridItem) {
                var productGridItem = app.modules.ProductGridItem;

                for (var j = 0; j < productGridItem.length; j++) {
                    var quickView = productGridItem[j].quickView;

                    if (quickView) {
                        var previousLocation = quickView.subModules.FindInStore.previousLocation;

                        if (previousLocation) {
                            this.previousLocation = previousLocation;

                            break;
                        }
                    }
                }
            }
        },

        checkLocation: function checkLocation() {
            var userData = app.modules.User.get();
            var userHasShippingAddress = app.modules.User.isLoggedIn() && userData.defaultAddress && userData.defaultAddress.shippingAddress;

            if (userHasShippingAddress) {
                this._getStoreData(this.previousLocation || userData.defaultAddress.postalCode);
            } else {
                this._checkForLocation();

                if (this.previousLocation) {
                    this._getStoreData(this.previousLocation);
                } else {
                    this._locationRequest();
                }
            }
        },

        _locationRequest: function _locationRequest(event, error) {
            if (event) {
                event.preventDefault();
            }

            var _this = this;
            var data = {
                title: CQ.I18n.get('GLB0039'),
                placeholder: CQ.I18n.get('GLB0158'),
                submitText: CQ.I18n.get('GLB0075')
            };

            if (error) {
                data.error = error.message;
                data.value = error.value;
            }

            app.modules.Prompt.openModal(data, $.proxy(_this._getStoreData, _this));
        },

        /**
         * Get three nearest store for the selected product (by SKU code).
         */
        _getStoreData: function _getStoreData(location) {
            var _this = this;
            var requestData = $.extend({}, _this.requestParams);

            if (location) {
                _this.previousLocation = requestData.location = location;
                $.cookie(app.COOKIES.FIND_IN_STORE_PREV_STORE, _this.previousLocation, {path: '/'});
            }

            if (!_this.requestParams.productIds) {
                _this.elems.$component.removeClass(DEFAULTS.CSS_MODIFIERS.ACTIVE);
                _this.elems.$productStores.removeClass(DEFAULTS.CSS_MODIFIERS.ACTIVE);

                return;
            }

            return $.ajax({
                url: DEFAULTS.SERVICES.FIND_IN_STORE,
                cache: false,
                type: 'GET',
                dataType: 'JSON',
                data: requestData,
                beforeSend: function() {
                    _this.elems.$productStores.spinner('show');
                },
                success: function(data) {
                    if (data.results) {
                        app.trigger(app.EVENTS.ANALYTICS.FIND_IN_STORE, {
                            code: _this.productData.productCode,
                            sku: _this.requestParams.productIds
                        });

                        _this.elems.$component.addClass(DEFAULTS.CSS_MODIFIERS.ACTIVE);
                        _this.elems.$productStores.addClass(DEFAULTS.CSS_MODIFIERS.ACTIVE);

                        _this.render(data);

                        _this.changeViewMoreLink();

                        // Hide list if user click outside the list
                        _this.elems.$document.on('click.close-product-stores-list', function(e) {
                            _this._closeStoresList($(e.target));
                        });

                        // In the Safari and in some other browsers on click on the select only mousedown event is triggered
                        _this.elems.$document.on('mousedown.close-product-stores-list', DEFAULTS.SELECTORS.SELECT, function(e) {
                            _this._closeStoresList($(e.target));
                        });
                    }
                },
                error: function(jqXhr, textStatus, errorThrown) {
                    _this.elems.$component.removeClass(DEFAULTS.CSS_MODIFIERS.ACTIVE);
                    _this.elems.$productStores.removeClass(DEFAULTS.CSS_MODIFIERS.ACTIVE);

                    _this.previousLocation = null;

                    switch (jqXhr.status) {
                        case 403:
                            app.modules.User.logOut();
                            app.modules.Alert.openModal({
                                title: CQ.I18n.get(JSON.parse(jqXhr.responseText).messages[0].message)
                            });

                            break;

                        case 424:
                            var response = JSON.parse(jqXhr.responseText).messages[0];

                            // Handle saved shipping address without 40 km of stores
                            _this._locationRequest(null, {
                                message: CQ.I18n.get(response.message),
                                value: response.arguments[0]
                            });

                            break;

                        default:
                            console.error('"FindInStore._getStoreData" >> ' + jqXhr.status + ' (' + errorThrown + ')');
                    }
                },
                complete: function() {
                    _this.elems.$productStores.spinner('hide');
                }
            });
        },

        _closeStoresList:  function _closeStoresList($target) {
            var _this = this;

            if (!$target.closest(DEFAULTS.SELECTORS.PRODUCT_STORE_CLASS).size()) {
                _this.elems.$component.removeClass(DEFAULTS.CSS_MODIFIERS.ACTIVE);
                _this.elems.$productStores.removeClass(DEFAULTS.CSS_MODIFIERS.ACTIVE);
                _this.elems.$document.off('.close-product-stores-list');
            }
        },

        render: function render(data) {
            var _this = this;

            dust.render('findInStoreItem', data, function(error, out) {
                _this.elems.$templatePlacehodler.html(out);

                if (_this.previousLocation) {
                    _this.elems.$previousLocationPlaceholder.html(_this.previousLocation);
                }
            });
        },

        destroy: function destroy() {
            app.unsubscribe(app.EVENTS.CHANGE_PRODUCT_SKU, this._onChangeProductSku);
        }
    });

    app.FindInStore = FindInStore;

    return app.FindInStore;

}).call(window.SPC = window.SPC || {}, window, document, window.jQuery, window.dust, window.CQ);

;(function(window, document, $) {
    var app = this;

    var DEFAULTS = {
        SELECTORS: {
            MODAL_ID: '#size-chart-modal-content'
        },
        MODAL_MAIN_CLASS: 'default-modal size-chart-modal',
        SIZE_CHART_PAGE: '.body-content-modal.html'
    };

    var SizeChartModal = function SizeChartModal($element) {
        var _this = this instanceof SizeChartModal ? this : Object.create(SizeChartModal.prototype);

        _this.elems = {
            $component: $element
        };
        _this.subModules = {};

        _this.productSizeChartData = _this.elems.$component.data('product-size-chart');

        _this.bindEvents();

        return _this;
    };

    $.extend(SizeChartModal.prototype, {
        bindEvents: function bindEvents() {
            this.elems.$component.on('click', $.proxy(this._open, this));
        },

        _open: function _open(e) {
            e.preventDefault();

            var _this = this;

            $.SpcMagnificPopup.open({
                mainClass: DEFAULTS.MODAL_MAIN_CLASS,
                items: {
                    src: DEFAULTS.SELECTORS.MODAL_ID
                },
                callbacks: {
                    open: function() {
                        _this._getProductInfo();
                    }
                }
            });
        },

        _getProductInfo: function _getProductInfo() {
            var _this = this;

            $.ajax({
                url: _this.productSizeChartData.sizeChartPath + DEFAULTS.SIZE_CHART_PAGE,
                type: 'GET',
                success: function(content) {
                    var data = {
                        content: content,
                        brandLogoPath: _this.productSizeChartData.brandLogoPath
                    };

                    _this.subModules.SizeChart = new app.SizeChart($.SpcMagnificPopup.getInstance().content, data);
                },
                error: function(jqXhr, textStatus, errorThrown) {
                    console.error('"SizeChartModal._getProductInfo" >> ' + jqXhr.status + ' (' + errorThrown + ')');

                    $.SpcMagnificPopup.close();

                    app.modules.Alert.openModal({
                        title: '"SizeChartModal._getProductInfo" >> ' + jqXhr.status + ' (' + errorThrown + ')'
                    });
                }
            });
        }
    });

    app.SizeChartModal = SizeChartModal;

}).call(window.SPC = window.SPC || {}, window, document, window.jQuery);

;(function(window, document, $, _, Response) {

    var app = this;

    var DEFAULTS = {
        SELECTORS: {
            BACKGROUND_CLASS: '.product-detail__background',
            PAGE_HEAD_CLASS: '.global-page-header',
            PREVIEW_GALLERY_CLASS: '.product-detail__preview-gallery'
        }
    };

    var ProductBackground = function ProductBackground($element) {
        var _this = this instanceof ProductBackground ? this : Object.create(ProductBackground.prototype);

        _this.elems = {
            $component: $element,
            $productBackground: $element.find(DEFAULTS.SELECTORS.BACKGROUND_CLASS),
            $productHeader: $(DEFAULTS.SELECTORS.PAGE_HEAD_CLASS),
            $productPreview: $element.find(DEFAULTS.SELECTORS.PREVIEW_GALLERY_CLASS),
            $window: $(window)
        };

        _this.initialize();

        return _this;
    };

    $.extend(ProductBackground.prototype, {
        initialize: function initialize() {
            this.bindEvents();
        },

        bindEvents: function bindEvents() {
            this.elems.$window.on('load', _.bind(this.calculateProductHeight, this));
            this.elems.$window.on('resize', _.throttle($.proxy(this.calculateProductHeight, this), 100));
        },

        calculateProductHeight: function calculateProductHeight() {
            var _this = this;

            if (!Response.band(769)) {
                var productHeaderHeight = _this.elems.$productHeader.outerHeight(true);
                var productPreviewHeight = _this.elems.$productPreview.outerHeight(true);
                var mobileProductBackgroundHeight = productHeaderHeight + productPreviewHeight;

                _this.elems.$productBackground.height(mobileProductBackgroundHeight);
            } else {
                _this.elems.$productBackground.height('auto');
            }
        }
    });

    app.ProductBackground = ProductBackground;

    return app.ProductBackground;

}).call(window.SPC = window.SPC || {}, window, document, window.jQuery, window._, window.Response);
;(function(window, document, $) {
    var app = this;

    var DEFAULTS = {
        SELECTORS: {
            SORTING_SELECT: '#reviews__sort-select'
        }
    };

    var ReviewsHeader = function ReviewsHeader($element) {
        var _this = this instanceof ReviewsHeader ? this : Object.create(ReviewsHeader.prototype);

        _this.elems = {
            $component: $element,
            $sortingSelect: $element.find(DEFAULTS.SELECTORS.SORTING_SELECT)
        };

        _this.initialize();

        return _this;
    };

    $.extend(ReviewsHeader.prototype, {
        initialize: function initialize() {
            this._bindEvents();
        },

        _bindEvents: function _bindEvents() {
            this.elems.$sortingSelect.on('change', this._sortBy);
        },

        _sortBy: function _sortBy() {
            var $select = $(this);
            var value = $select.val();
            var sortingParams = JSON.parse(value);

            var reviewsList = app.modules.ReviewsList && app.modules.ReviewsList[0];

            if (reviewsList) {
                reviewsList.getList(sortingParams, 'html');
            }
        }
    });

    app.ReviewsHeader = ReviewsHeader;

}).call(window.SPC = window.SPC || {}, window, document, window.jQuery);

;(function(window, document, $, dust, Response) {
    var app = this;

    var DEFAULTS = {
        SELECTORS: {
            REVIEWS: '.review',
            REVIEWS_CONTAINER: '.reviews',
            REVIEWS_PLACEHOLDER: '.reviews__list-inner',
            SEE_MORE_PANEL: '.reviews__see-more',
            MORE: '.reviews__more',
            LESS: '.reviews__less',
            HELPFUL_PANEL: '.review__helpful',
            HELPFUL_BUTTONS: '.review__helpful-button',
            HTML_BODY: 'html, body',
            REVIEW_TITLE: '.review__title',
            ERROR_REVIEW: '.reviews__error',
            ERROR_MESSAGES: '.reviews__error_messages'
        },
        REVIEWS_PER_PAGE: 4,
        SERVICES_URLS: {
            LIST: '/services/sportchek/reviews/list',
            HELPFUL_VOTE: '/services/sportchek/reviews/helpfulvote'
        },
        SCROLL_TOP_ANIMATION_SPEED: 500,
        CSS_MODIFIERS: {
            HELPFUL_PANEL_VOTED: 'review__helpful_voted',
            ACTIVE: 'active'
        }
    };

    // TODO: must be moved to the global dust.helpers
    dust.helpers.getRatingWidth = function(chunk, context) {
        // 20 === (100 / 5) stars
        var ratingWidth = context.current().rating * 20;

        return chunk.write(ratingWidth);
    };

    var ReviewsList = function ReviewsList($element) {
        var _this = this instanceof ReviewsList ? this : Object.create(ReviewsList.prototype);

        _this.elems = {
            $component: $element,
            $reviewsPlaceholder: $element.find(DEFAULTS.SELECTORS.REVIEWS_PLACEHOLDER),
            $reviews: $element.find(DEFAULTS.SELECTORS.REVIEWS),
            $htmlBody: $(DEFAULTS.SELECTORS.HTML_BODY)
        };

        _this.requestParams = {
            // Here used .attr method because .data removes leading zeros
            productId: _this.elems.$component.attr('data-product-id'),
            pageSize: DEFAULTS.REVIEWS_PER_PAGE,
            pageNumber: 0,
            sortParam: 'created_date',
            sortOrder: 'desc'
        };

        _this.paginationData = {
            reviewsCount: 0,
            pageSize: DEFAULTS.REVIEWS_PER_PAGE,
            loadedReviewsCount: 0
        };

        _this.initialize();

        return _this;
    };

    $.extend(ReviewsList.prototype, {
        initialize: function initialize() {
            this._bindEvents();

            if (window.location.search.indexOf('_escaped_fragment_') === -1) {
                this.getList(this.requestParams, 'html');
            }
        },

        _bindEvents: function _bindEvents() {
            this.elems.$component.on('click', DEFAULTS.SELECTORS.MORE, $.proxy(this._showMore, this));
            this.elems.$component.on('click', DEFAULTS.SELECTORS.LESS, $.proxy(this._showLess, this));
            this.elems.$component.on('click', DEFAULTS.SELECTORS.HELPFUL_BUTTONS, $.proxy(this._voteForHelpfulness, this));

            if (Response.band(0, 768)) {
                this.elems.$component.on('click', DEFAULTS.SELECTORS.REVIEW_TITLE, $.proxy(this._showFullReview, this));
            }
        },

        _showLess: function _showLess() {
            this.elems.$htmlBody.animate({
                scrollTop: this.elems.$component.offset().top - 100
            }, DEFAULTS.SCROLL_TOP_ANIMATION_SPEED);

            this.elems.$reviews.eq(DEFAULTS.REVIEWS_PER_PAGE - 1).nextAll().hide();

            this.paginationData.loadedReviewsCount = DEFAULTS.REVIEWS_PER_PAGE;
            this.paginationData.reviewsCount = parseInt(this.paginationData.reviewsCount / DEFAULTS.REVIEWS_PER_PAGE, 10) * DEFAULTS.REVIEWS_PER_PAGE;

            this.renderPagination(this.paginationData);
        },

        _showMore: function _showMore() {
            var $hiddenReview = this.elems.$reviews.filter(':hidden:first');

            if ($hiddenReview.size() > 0) {
                // All reviews already loaded so, just show them.
                $hiddenReview
                    .nextAll(':lt(' + (DEFAULTS.REVIEWS_PER_PAGE - 1) + ')')
                    .andSelf()
                    .show();

                this.paginationData.loadedReviewsCount += DEFAULTS.REVIEWS_PER_PAGE;

                this.renderPagination(this.paginationData);
            } else {
                ++this.requestParams.pageNumber;

                this.getList(this.requestParams, 'append');
            }
        },

        _showError: function _showError(errorMessage) {
            if (errorMessage) {
                $(DEFAULTS.SELECTORS.REVIEWS_CONTAINER + ',' + DEFAULTS.SELECTORS.ERROR_REVIEW).hide();
                $(DEFAULTS.SELECTORS.ERROR_MESSAGES).show();
            } else {
                $(DEFAULTS.SELECTORS.REVIEWS).show();
                $(DEFAULTS.SELECTORS.ERROR_MESSAGES).hide();
            }
        },

        getList: function getList(requestParams, renderMethod) {
            var _this = this;

            $.extend(_this.requestParams, requestParams);

            if (_this.requestParams.pageNumber === 0 && _this.paginationData.loadedReviewsCount > 0) {
                _this.paginationData.loadedReviewsCount = 0;
            }

            $.ajax({
                url: DEFAULTS.SERVICES_URLS.LIST,
                type: 'GET',
                data: _this.requestParams,
                beforeSend: function() {
                    app.modules.MainContentSpinner[0].spinner('show');
                },
                success: function(responseData) {
                    _this._showError(false);
                    _this.render(responseData, renderMethod);

                    _this.paginationData.reviewsCount = responseData.reviewsCount;

                    _this.paginationData.loadedReviewsCount += responseData.data.length;

                    _this.renderPagination(_this.paginationData);
                },
                error: function(jqXhr) {
                    switch (jqXhr.status) {
                        case 410:
                            _this._showError(true);

                            break;

                        default:
                            console.error('"ReviewsList.getList" >> ' + jqXhr.responseText);
                    }
                },
                complete: function() {
                    app.modules.MainContentSpinner[0].spinner('hide');
                }
            });
        },

        /**
         * Get voted id's
         * @returns {Array}
         * @private
         */
        _getHelpfulnessVotes: function _getHelpfulnessVotes() {
            var helpfulnessCookie = $.cookie(app.COOKIES.REVIEW_VOTES_FOR_HELPFULNESS);

            return helpfulnessCookie ? JSON.parse(helpfulnessCookie) : [];
        },

        _extendTemplateDataWithHelpfulnessVotes: function _extendTemplateDataWithHelpfulnessVotes(templateData) {
            var helpfulnessVotes = this._getHelpfulnessVotes();
            var reviews = templateData.data;

            for (var i = 0; i < helpfulnessVotes.length; i++) {

                for (var j = 0; j < reviews.length; j++) {

                    if (reviews[j].sharedReviewId === helpfulnessVotes[i]) {
                        reviews[j].votedForHelpfulness = true;
                    }
                }
            }

            templateData.data = reviews;

            return templateData;
        },

        /**
         * @param {Object} templateData template data from response
         * @param {String} renderMethod 'html' || 'append'
         */
        render: function render(templateData, renderMethod) {
            var _this = this;

            templateData = _this._extendTemplateDataWithHelpfulnessVotes(templateData);

            dust.render('reviewsListSections', templateData, function(error, out) {
                _this.elems.$reviewsPlaceholder[renderMethod](out);

                _this.elems.$reviews = _this.elems.$component.find(DEFAULTS.SELECTORS.REVIEWS);

            });
        },

        renderPagination: function renderPagination(templateData) {
            var _this = this;

            dust.render('reviewsListPagination', templateData, function(error, out) {
                _this.elems.$component
                    .find(DEFAULTS.SELECTORS.SEE_MORE_PANEL)
                    .remove();

                _this.elems.$component.append(out);
            });
        },

        _showFullReview: function _showFullReview(e) {
            $(e.target).closest(DEFAULTS.SELECTORS.REVIEWS).toggleClass(DEFAULTS.CSS_MODIFIERS.ACTIVE);
        },

        /**
         * Save id's in cookie
         * @param {String} sharedReviewId
         * @private
         */
        _saveVotedForHelpfulnessId: function _saveVotedForHelpfulnessId(sharedReviewId) {
            var helpfulnessVotes = this._getHelpfulnessVotes();

            helpfulnessVotes.push(sharedReviewId);

            $.cookie(app.COOKIES.REVIEW_VOTES_FOR_HELPFULNESS, JSON.stringify(helpfulnessVotes), {
                expires: 1,
                path: '/'
            });
        },

        _voteForHelpfulness: function _voteForHelpfulness(e) {
            var _this = this;

            e.preventDefault();

            var $helpfulButton = $(e.currentTarget);
            var $helpfulPanel = $helpfulButton.closest(DEFAULTS.SELECTORS.HELPFUL_PANEL);

            if ($helpfulPanel.hasClass(DEFAULTS.CSS_MODIFIERS.HELPFUL_PANEL_VOTED)) {

                return;
            } else {
                $helpfulPanel.addClass(DEFAULTS.CSS_MODIFIERS.HELPFUL_PANEL_VOTED);
            }

            var requestData = {
                sharedReviewId: $helpfulButton.data('shared-review-id'),
                voteDecision: $helpfulButton.data('vote-decision')
            };

            $.ajax({
                url: DEFAULTS.SERVICES_URLS.HELPFUL_VOTE,
                data: JSON.stringify(requestData),
                type: 'POST',
                dataType: 'JSON',
                success: function() {
                    $helpfulPanel
                        .find(DEFAULTS.SELECTORS.NOTIFICATION)
                        .show();

                    // FIXME: toString conversion
                    _this._saveVotedForHelpfulnessId(String(requestData.sharedReviewId));
                },
                error: function(jqXhr, textStatus, errorThrown) {
                    $helpfulPanel.removeClass(DEFAULTS.CSS_MODIFIERS.HELPFUL_PANEL_VOTED);

                    console.error('"ReviewsList._voteForHelpfulness" >> ' + jqXhr.status + ' (' + errorThrown + ')');
                }
            });
        }
    });

    app.ReviewsList = ReviewsList;

}).call(window.SPC = window.SPC || {}, window, document, window.jQuery, window.dust, window.Response);

﻿;(function(window, document, $, dust) {

    var app = this;

    var DEFAULTS = {
        SELECTORS: {
            OWL_PREV_BUTTON: '.owl-prev',
            OWL_NEXT_BUTTON: '.owl-next'
        }
    };

    var MediaViewerMobile = function MediaViewerMobile($element) {
        var _this = this instanceof MediaViewerMobile ? this : Object.create(MediaViewerMobile.prototype);

        _this.elems = {
            $component: $element,
            $owl: null,
            $owlPrevButton: $element.find(DEFAULTS.SELECTORS.OWL_PREV_BUTTON),
            $owlNextButton: $element.find(DEFAULTS.SELECTORS.OWL_NEXT_BUTTON)
        };

        _this.asset = null;

        _this.carouselOptions = {
            navigation: true,
            navigationText: ['', ''],
            slideSpeed: 300,
            rewindSpeed: 300,
            singleItem: true,
            touchDrag: true,
            afterAction: function() {
                _this._updateNavigations(_this, this);
            }
        };

    };

    $.extend(MediaViewerMobile.prototype, {

        setAsset: function setAsset(_data) {

            if (!_data) {
                console.warn('MediaViewerMobile >> ', 'asset is not defined');
            }

            this.asset = _data || [];

            this.render(this.asset);

            return this;
        },

        _updateNavigations: function _updateNavigations(_this, ctx) {
            var showNext = ctx.owl.currentItem + 1 !== ctx.owl.owlItems.length;
            var showPrev = ctx.owl.currentItem !== 0;

            _this.elems.$component.find(DEFAULTS.SELECTORS.OWL_NEXT_BUTTON).toggle(showNext);
            _this.elems.$component.find(DEFAULTS.SELECTORS.OWL_PREV_BUTTON).toggle(showPrev);
        },

        render: function render(data) {
            var _this = this;

            dust.render('mediaViewerMobile', {variants: data}, function(error, out) {
                _this.elems.$component.html(out);
            });

            if (!_this.elems.$owl) {
                _this.elems.$owl = this.elems.$component.owlCarousel(_this.carouselOptions);
            } else {
                _this.elems.$owl.data('owlCarousel').reinit(_this.carouselOptions);
            }
        }
    });

    app.MediaViewerMobile = MediaViewerMobile;

    return app.MediaViewerMobile;

}).call(window.SPC = window.SPC || {}, window, document, window.jQuery, window.dust);
;(function(window, document, $, CQ, dust) {
    var app = this;

    var DEFAULTS = $.extend(true, app.ShareByEmail.DEFAULTS, {
        SERVICES_URL: '/services/sportchek/products/share'
    });

    var ProductDetailsShareByEmail = function ProductDetailsShareByEmail($element, parentModule) {
        var _this = this instanceof ProductDetailsShareByEmail ? this : Object.create(ProductDetailsShareByEmail.prototype);

        _this.elems = {
            $component: $element,
            $modal: $(DEFAULTS.SELECTORS.MODAL),
            $form: $('')
        };

        _this.elems.$content = _this.elems.$modal.find(DEFAULTS.SELECTORS.CONTENT);

        _this.parentModule = parentModule;
        _this.productPriceModule = null;
        _this.skuSelectorModule = null;

        _this.initialize();

        return _this;
    };

    $.extend(ProductDetailsShareByEmail.prototype, app.ShareByEmail.prototype, {

        beforeOpenModal: function beforeOpenModal() {
            this._openModal();
        },

        collectFormData: function collectFormData($form) {
            var data = $form.toObject();
            var parentModule = this.parentModule;

            // If it's Product Detail Page (PDP) then ProductPrice and SkuSelector modules exist in modules otherwise in sub modules
            if (parentModule) {
                this.productPriceModule = parentModule.subModules.ProductPrice[parentModule.subModules.ProductPrice.length - 1];
                this.skuSelectorModule = parentModule.subModules.SkuSelector[parentModule.subModules.SkuSelector.length - 1];
            } else {
                this.productPriceModule = app.modules.ProductPrice[0];
                this.skuSelectorModule = app.modules.SkuSelector[0];
            }

            data.price = this.productPriceModule.getPrice();
            data.productCode = this.skuSelectorModule.productData.code;

            if (this.skuSelectorModule.productData.imageAndColors && this.skuSelectorModule.productData.imageAndColors[0]) {
                data.pictureUrl = this.skuSelectorModule.productData.imageAndColors[0].imageUrl;
            }

            data.productUrl = this.skuSelectorModule.elems.$productPageUrlInput.val();

            return data;
        },

        render: function render(data) {
            var _this = this;

            dust.render('shareByEmailProductDetail', data, function(error, out) {
                _this.elems.$content.html(out);

                app.createSubModule(_this.elems.$content, _this);

                _this.elems.$form = _this.elems.$content.find('form');
                _this._bindValidate(_this.elems.$form);
            });
        }

    });

    app.ProductDetailsShareByEmail = ProductDetailsShareByEmail;

}).call(window.SPC = window.SPC || {}, window, document, window.jQuery, window.CQ, window.dust);
;(function(window, document, $) {
    var app = this;

    var ProductPrice = function ProductPrice($el) {
        var _this = this instanceof ProductPrice ? this : Object.create(ProductPrice.prototype);

        _this.elems = {
            $component: $el
        };

        _this.priceData = {
            isPriceAvailable: Boolean(_this.elems.$component.data('price')),
            price: _this.elems.$component.data('price'),
            onlineOnly: _this.elems.$component.data('online-only'),
            onFloor: _this.elems.$component.data('on-floor')
        };

        app.trigger(app.EVENTS.PRICE_READY, _this.priceData);

        return _this;
    };

    $.extend(ProductPrice.prototype, {
        getPrice: function getPrice() {
            return this.priceData.price;
        },

        getPriceAvailability: function getPriceAvailability() {
            return this.priceData.isPriceAvailable;
        }
    });

    app.ProductPrice = ProductPrice;

}).call(window.SPC = window.SPC || {}, window, document, window.jQuery, window._, window.dust, window.CQ);
;(function(window, document, $, dust) {
    var app = this;

    var DEFAULTS = {
        SERVICES: {
            CHECK_STORE: '/services/sportchek/inventory/checkStore'
        }
    };

    var AvailableAtStore = function AvailableAtStore($element) {
        var _this = this instanceof AvailableAtStore ? this : Object.create(AvailableAtStore.prototype);

        _this.elems = {
            $component: $element
        };

        _this.initialize();

        return _this;
    };

    $.extend(AvailableAtStore.prototype, {
        initialize: function initialize() {
            this.bindEvents();
        },

        bindEvents: function bindEvents() {
            app.subscribe(app.EVENTS.CHANGE_PRODUCT_SKU, $.proxy(this._saveAndGetData, this));

            app.subscribe(app.EVENTS.LOG_IN, $.proxy(this._preSelectData, this));
            app.subscribe(app.EVENTS.LOG_OUT, $.proxy(this.render, this, null));
        },

        _getSku: function _getSku() {
            var skuSelector = app.modules.SkuSelector;

            if (skuSelector) {
                return skuSelector[0].productData.sku;
            } else {
                console.error('"AvailableAtStore._getSku" >> SkuSelector does not exist');
            }
        },

        _preSelectData: function _preSelectData() {
            var sku = this._getSku();

            if (sku) {
                var data = {
                    sku: sku
                };

                this._saveAndGetData(data);
            }
        },

        _saveAndGetData: function _saveAndGetData(data) {
            if (!app.modules.User.isLoggedIn()) {
                return;
            }

            var requestData = {
                store: app.modules.User.get().homeStoreName,
                sku: data.sku
            };

            if (requestData.store && requestData.sku) {
                this._checkStore(requestData);
            }
        },

        _checkStore: function _checkStore(requestData) {
            var _this = this;

            $.ajax({
                url: DEFAULTS.SERVICES.CHECK_STORE,
                type: 'GET',
                data: requestData,
                dataType: 'JSON',
                beforeSend: function() {
                    app.modules.MainContentSpinner[0].spinner('show');
                },
                success: function(data) {
                    _this.render(data);
                },
                error: function(jqXhr, textStatus, errorThrown) {
                    _this.elems.$component.empty();
                    console.error('"AvailableAtStore._checkStore" >> ' + jqXhr.status + ' (' + errorThrown + ')');
                },
                complete: function() {
                    app.modules.MainContentSpinner[0].spinner('hide');
                }
            });
        },

        render: function render(templateData) {
            var _this = this;

            dust.render('availableAtStore', templateData, function(error, out) {
                _this.elems.$component.html(out);
            });
        }
    });

    app.AvailableAtStore = AvailableAtStore;

    return app.AvailableAtStore;

}).call(window.SPC = window.SPC || {}, window, document, window.jQuery, window.dust);

﻿;(function(window, document, $) {

    var app = this;

    var DEFAULTS = {
        SELECTORS: {
            DESCRIPTION_SECTION: '.product-detail__description-container',
            HEADER: '.page-header'
        }
    };

    var ProductDescription = function ProductDescription($element) {
        var _this = this instanceof ProductDescription ? this : Object.create(ProductDescription.prototype);

        _this.elems = {
            $component: $element,
            $window: $(window),
            $body: $('body')
        };

        _this.initialize();
    };

    $.extend(ProductDescription.prototype, {

        initialize: function initialize() {
            this.bindEvents();

            app.modules.Print[0].enableButton();
        },

        bindEvents: function bindEvents() {
            this.elems.$window.on('load', $.proxy(this.showDescription, this));
        },

        showDescription: function showDescription() {

            if (/showdescription/.test(window.location.hash)) {
                this.elems.$body.scrollTop($(DEFAULTS.SELECTORS.DESCRIPTION_SECTION).offset().top - $(DEFAULTS.SELECTORS.HEADER).height());
            }
        }
    });

    app.ProductDescription = ProductDescription;

    return app.ProductDescription;

}).call(window.SPC = window.SPC || {}, window, document, window.jQuery);
;(function(window, document, $) {
    var app = this;

    var ProductDetailsShareByTwitter = function ProductDetailsShareByTwitter($element) {
        var _this = this instanceof ProductDetailsShareByTwitter ? this : Object.create(ProductDetailsShareByTwitter.prototype);

        _this.elems = {
            $component: $element
        };

        _this.bindEvents();

        return _this;
    };

    $.extend(ProductDetailsShareByTwitter.prototype, {

        bindEvents: function bindEvents() {

            this.elems.$component.on('click', function(e) {

                e.preventDefault();

                var url = 'http://twitter.com/share?url=' + encodeURIComponent(window.location.href);

                console.log(url);

                window.open(url);
            });
        }
    });

    app.ProductDetailsShareByTwitter = ProductDetailsShareByTwitter;

}).call(window.SPC = window.SPC || {}, window, document, window.jQuery);
// FIXME: rename this component
;(function(window, document, $, dust, _) {
    var app = this;

    /*
     * Default Variables
     */
    var DEFAULTS = {
        SELECTORS: {
            PRODUCTS: '.product-grid__list-item',
            PRICE: '.product-price',
            PROMO: '.product-promo',
            ELLIPSIS: '.ellipsis'
        },
        SERVICES: {
            PRICE_SERVICE: '/services/sportchek/information/price'
        }
    };

    var BrandProductList = function BrandProductList($element) {
        var _this = this instanceof BrandProductList ? this : Object.create(BrandProductList.prototype);

        _this.elems = {
            $component: $element,
            $products: $element.find(DEFAULTS.SELECTORS.PRODUCTS),
            $window: $(window)
        };

        _this.initialize();

        return _this;
    };

    $.extend(BrandProductList.prototype, {

        initialize: function initialize() {
            var _this = this;

            _this.bindEvents();
            _this.productCodes = [];

            this.elems.$products.each(function() {
                // A method data is useless, because it replace zeros from begin of the string.
                var productCode = $(this).attr('data-product-code');

                _this.productCodes.push(productCode);
            });

            if (_this.productCodes.length > 0) {
                _this.loadData();
            }
        },

        bindEvents: function bindEvents() {
            this.elems.$window.on('resize', $.proxy(this.render, this, true));
        },

        render: function render() {
            var _this = this;
            var priceMap = _.indexBy(_this.priceData, 'code');

            this.elems.$products.each(function() {
                var $productItem = $(this);
                // A method data is useless, because it replace zeros from begin of the string.
                var productCode = $productItem.attr('data-product-code');
                var productData = priceMap[productCode];

                dust.render('productGridProductPrice', productData, function(error, out) {
                    $productItem.find(DEFAULTS.SELECTORS.PRICE).html(out);

                    $productItem.dotdotdot({
                        watch: 'window'
                    });
                });

                dust.render('productGridProductPromotions', productData, function(error, out) {
                    var $promo = $productItem.find(DEFAULTS.SELECTORS.PROMO).html(out);

                    $promo.dotdotdot({
                        watch: 'window'
                    });

                    app.createSubModule($promo, _this);
                });

            });
        },

        loadData: function loadData() {
            var _this = this;

            $.ajax({
                url: DEFAULTS.SERVICES.PRICE_SERVICE,
                type: 'POST',
                data: JSON.stringify(_this.productCodes),
                dataType: 'JSON',
                success: function(data) {
                    _this.priceData = data;
                    _this.render();
                },
                error: function(jqXhr, textStatus, errorThrown) {
                    console.error('"BrandProductList.loadData" >> ' + jqXhr.status + ' (' + errorThrown + ')');
                }
            });
        }
    });

    app.BrandProductList = BrandProductList;

    return app.BrandProductList;

}).call(window.SPC = window.SPC || {}, window, document, window.jQuery, window.dust, window._);
(function(){dust.register("topSellers",body_0);function body_0(chk,ctx){return chk.write("<div class=\"product-slider\" data-module-type=\"BrandProductsCarousel\"><div class=\"product-grid__list\" data-carousel-list>").section(ctx._get(false, ["products"]),ctx,{"block":body_1},null).write("</div></div>");}function body_1(chk,ctx){return chk.write("<div class=\"product-grid__list-item product-slider__item\" data-product-code=\"").reference(ctx._get(false, ["code"]),ctx,"h").write("\" data-carousel-item><div class=\"product-grid__list-item-height\"><div class=\"product-grid__list-item-content\">").partial("productGridItemPromotionIcon",ctx,null).write("<div class=\"product-image-wrap\"><a href=\"").reference(ctx._get(false, ["pagePath"]),ctx,"h").write("\"><img class=\"product-grid-image\" src=\"").helper("getImage",ctx,{},{"url":ctx._get(false,["imageAndColor","0","imageUrl"])}).write("?wid=257&hei=257&op_sharpen=1&resMode=sharp2\" alt=\"").reference(ctx._get(false, ["title"]),ctx,"h").write("\"></a></div><div class=\"product-details\"><div class=\"product-price\">").partial("productGridProductPrice",ctx,null).write("</div><div class=\"product-title ellipsis\"><a href=\"").reference(ctx._get(false, ["pagePath"]),ctx,"h").write("\" class=\"product-title-text\">").reference(ctx._get(false, ["title"]),ctx,"h").write("</a></div>").helper("if",ctx,{"else":body_2,"block":body_6},{"cond":body_7}).write("<div class=\"product-util\">").helper("if",ctx,{"block":body_8},{"cond":body_9}).write("</div></div></div></div></div>");}function body_2(chk,ctx){return chk.write("<div class=\"product-stock-status\">").notexists(ctx._get(false, ["availability"]),ctx,{"block":body_3},null).helper("if",ctx,{"block":body_4},{"cond":body_5}).write("</div>");}function body_3(chk,ctx){return chk.helper("i18n",ctx,{},{"key":"PRD0105"});}function body_4(chk,ctx){return chk.helper("i18n",ctx,{},{"key":"PRD0104"});}function body_5(chk,ctx){return chk.write("('").reference(ctx._get(false, ["availability"]),ctx,"h").write("'==='INSTORE')");}function body_6(chk,ctx){return chk.partial("productGridProductPromotions",ctx,null);}function body_7(chk,ctx){return chk.write("('").reference(ctx._get(false, ["availability"]),ctx,"h").write("'==='ONLINE' || '").reference(ctx._get(false, ["availability"]),ctx,"h").write("'==='INSTORE,ONLINE' )");}function body_8(chk,ctx){return chk.write("<div class=\"product-colors-wheel\"><img class=\"color-wheel-img\" src=\"/etc/clientlibs/sportchek/global/img/color-wheel.png\">").reference(ctx._get(false,["imageAndColor","length"]),ctx,"h").write(" ").helper("i18n",ctx,{},{"key":"PRD0012"}).write("</div>");}function body_9(chk,ctx){return chk.reference(ctx._get(false,["imageAndColor","length"]),ctx,"h").write(" > 1");}return body_0;})();
;(function(window, document, $, _, Response) {
    var app = this;

    var DEFAULTS = {
        SELECTORS: {
            PARSYS_CLASS: '.parsys',
            ITEMS: '> .section',
            CAROUSEL_LIST: '[data-carousel-list]',
            CAROUSEL_ITEMS: '[data-carousel-item]',
            ELLIPSIS: '.ellipsis'
        },
        CAROUSEL_SETTINGS: {
            items: 5,
            itemsDesktop: [1545, 4],
            itemsTablet: [768, 3],
            itemsMobile: [479, 2],
            pagination: true,
            navigation: true,
            scrollPerPage: true,
            rewindNav: false,
            slideSpeed: 800
        },
        MOBILE_WIDTH: 1023
    };

    /*
     * Constructor
     */
    // FIXME: remove
    var BrandProductsCarousel = function BrandProductsCarousel($element) {
        var _this = this instanceof BrandProductsCarousel ? this : Object.create(BrandProductsCarousel.prototype);

        _this.DEFAULTS = DEFAULTS;
        _this.elems = {
            $component: $element,
            $list: $element.find(_this.DEFAULTS.SELECTORS.PARSYS_CLASS)
        };

        _this.elems.$items = _this.elems.$list.find(_this.DEFAULTS.SELECTORS.ITEMS);

        if (!_this.elems.$items.length) {
            _this.elems.$list = _this.elems.$component.find(_this.DEFAULTS.SELECTORS.CAROUSEL_LIST);
            _this.elems.$items = _this.elems.$list.find(_this.DEFAULTS.SELECTORS.CAROUSEL_ITEMS);
        }

        _this.initialize();

        return _this;
    };

    $.extend(BrandProductsCarousel.prototype, {
        initialize: function initialize() {
            var _this = this;
            var userAgent = navigator.userAgent;
            var isSamsung = /gt-i9300/i.test(userAgent) && !/chrome/i.test(userAgent);
            var isMobile = Response.band(0, DEFAULTS.MOBILE_WIDTH);

            if (!isMobile) {
                _this.elems.$list.owlCarousel($.extend(_this.DEFAULTS.CAROUSEL_SETTINGS, {
                    afterUpdate: function() {
                        // Ellipsis items may by appended asynchronously
                        _this.elems.$items.find(DEFAULTS.SELECTORS.ELLIPSIS).trigger('update.dot');
                    }
                }));
            }

            _this.elems.$items.find(DEFAULTS.SELECTORS.ELLIPSIS).dotdotdot({
                watch: 'window'
            });

            // Samsung galaxy S3 native browser orientation change receive issue
            if (isSamsung) {
                window.addEventListener('resize', _.throttle(function() {
                    _this.elems.$list.data('owlCarousel').reinit(_this.DEFAULTS.CAROUSEL_SETTINGS);
                }, 250), false);
            }
        }
    });

    app.BrandProductsCarousel = BrandProductsCarousel;

    return app.BrandProductsCarousel;

}).call(window.SPC = window.SPC||  {}, window, document, window.jQuery, window._, window.Response);

;(function(window, document, $, _satellite, moment, Modernizr, CQ, FastClick, _) {
    var app = this;

    // Configs and 3rd-party libs to be initialized BEFORE app modules are loaded
    var beforeModules = function beforeModules() {

        // Adobe Dynamic Tag Manager
        if (_satellite.pageBottom && !_satellite.pageBottomFired) {
            setTimeout(_satellite.pageBottom, 0);
        }

        app.breakpoints = {
            tablet: 620,
            desktop: 940,
            huge: 1260
        };

        moment.lang(CQ.I18n.getLocale());
        $.mask.definitions.A = '[A-Z]';

        app.modules.Page = new app.Page();
        app.modules.User = new app.User();
        app.modules.Alert = new app.Alert();
        app.modules.Confirm = new app.Confirm();
        app.modules.Prompt = new app.Prompt();
        app.modules.ServerErrorModal = new app.ServerErrorModal();
        app.modules.CheckLastPaymentOrderStatus = new app.CheckLastPaymentOrderStatus();
        app.modules.CookieEnabled = new app.CookieEnabled();

        if (app.SPCAnalytics) {
            app.modules.SPCAnalyticHelpers = new app.SPCAnalyticHelpers();
            app.modules.SPCAnalytics = new app.SPCAnalytics();
        }
    };

    // Configs and 3rd-party libs to be initialized AFTER app modules are loaded
    var afterModules = function afterModules() {
        app.fastclick = FastClick.attach(document.body);

        if (Modernizr.touch) {
            var $window = $(window);
            var $body = $(document.body);
            var isChrome = /chrome/i.test(navigator.userAgent);

            $(document)
                .on('focus', 'input[type="text"], textarea', function() {
                    $body.addClass('fixfixed');
                })
                .on('blur', 'input[type="text"], textarea', function() {
                    $body.removeClass('fixfixed');
                });

            // FIXME: can't cache jq-objects because of dynamic elements
            // TODO: open selects's position are 'caches' by mobile Chrome which makes bad UX, check for bug resolving in future
            if (isChrome) {
                $window.on('orientationchange', function() {
                    $('select').trigger('blur');
                });
            }
        }
    };

    /**
     * Bootstrap the app, and initialize the appropriate modules.
     *
     * @return {Object} app
     */
    app.start = function __start__() {
        app.modules = app.modules || {};

        beforeModules();

        // Instantiate all modules
        var moduleElements = $('[data-module-type]');

        moduleElements.each(function() {
            var $module = $(this);

            _.merge(app.modules, app.createModule($module));
        });

        afterModules();

        // Overwrite the start function so that it cannot be called again.
        // If it is called again, log the attempt to console.
        app.start = function() {
            if (console && console.trace) {
                console.trace();
            }

            console.log('Warning: Attempting to run start function more than once!');
        };

        return app;
    };

    // Lights, Camera, Action!
    jQuery(app.start);

}).call(window.SPC = window.SPC || {}, window, document, window.jQuery, window._satellite || {}, window.moment, window.Modernizr, window.CQ, window.FastClick, window._);

