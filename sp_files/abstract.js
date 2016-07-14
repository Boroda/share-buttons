// Resolve dependency CQ object for JSHint
;(function(CQ) {
    CQ.Ext.ns('CQ.SC.LinkMultifield');

    CQ.SC.LinkMultifield = CQ.Ext.extend(CQ.form.CompositeField, {
        /**
         * @private
         * @type CQ.Ext.form.TextField
         */
        hiddenField: null,
        /**
         * @private
         * @type CQ.Ext.form.TextField
         */
        linkText: null,
        /**
         * @private
         * @type CQ.Ext.form.PathField
         */
        linkUrl: null,
        /**
         * @private
         * @type CQ.Ext.form.Checkbox
         */
        openInNewTab: false,

        /**
         * @private
         * @type CQ.Ext.form.Checkbox
         */
        registerUserOnly: false,

        constructor: function(config) {
            config = config || {};

            var defaults = {
                'border': false,
                'layout': 'table',
                'rootPath': config.rootPath
            };

            config = CQ.Util.applyDefaults(config, defaults);
            CQ.SC.LinkMultifield.superclass.constructor.call(this, config);
        },

        // overriding CQ.Ext.Component#initComponent
        initComponent: function() {
            CQ.SC.LinkMultifield.superclass.initComponent.call(this);

            this.hiddenField = new CQ.Ext.form.Hidden({
                cls: 'links-multifield-hiden-item',
                name: this.name
            });

            this.add(this.hiddenField);

            // Link text
            this.add(new CQ.Ext.form.Label({
                cls: 'customwidget-label',
                html: 'Title:&nbsp;'
            }));

            this.linkText = new CQ.Ext.form.TextField({
                cls: 'customwidget-1',
                fieldLabel: 'Link Text: ',
                maxLength: 80,
                maxLengthText: 'A maximum of 80 characters is allowed for the Link Text.',
                allowBlank: false,
                allowDuplicates: false,
                validateOnBlur: true,
                validationDelay: 500,
                listeners: {
                    change: {
                        scope: this,
                        fn: this.updateHidden
                    }
                },
                validator: function(value) {
                    var validationResult = true;

                    if (this.allowBlank === false &&  value.trim() === '') {
                        validationResult = 'This field is required';
                    } else if(this.allowDuplicates === false) {
                        var hiddenItems = CQ.Ext.query('.links-multifield-hiden-item');
                        var duplicatesCount = 0;

                        CQ.Ext.each(hiddenItems, function (currentItem) {
                            var currentData =  CQ.Ext.decode(currentItem.value);

                            if (value !== undefined && currentData.text !== undefined && value.trim() ===  currentData.text.trim()) {
                                duplicatesCount ++;
                                if (duplicatesCount > 1) {
                                    validationResult =  'Titles cannot be duplicated';
                                    return false;
                                }
                            }
                        });
                    }

                    return validationResult;
                }
            });

            this.add(this.linkText);
            this.add(new CQ.Ext.form.Label({
                cls: 'customwidget-label',
                html: '&nbsp;&nbsp;Link:&nbsp;'
            }));

            this.linkUrl = new CQ.form.PathField({
                cls: 'customwidget-2',
                fieldLabel: 'Link URL: ',
                allowBlank: false,
                rootPath: this.initialConfig.rootPath,
                width: 180,
                listeners: {
                    change: {
                        scope: this,
                        fn: this.updateHidden
                    },
                    dialogclose: {
                        scope: this,
                        fn: this.updateHidden
                    }
                }
            });

            this.add(this.linkUrl);
            this.add(new CQ.Ext.form.Label({
                cls: 'customwidget-label',
                html: '&nbsp;&nbsp;Open in new tab:&nbsp;'
            }));

            this.openInNewTab = new CQ.Ext.form.Checkbox({
                cls: 'customwidget-3',
                fieldLabel: 'Open in new tab: ',
                value: false,
                allowBlank: true,
                listeners: {
                    change: {
                        scope: this,
                        fn: this.updateHidden
                    }
                }
            });

            this.add(this.openInNewTab);

            this.add(new CQ.Ext.form.Label({
                cls: 'customwidget-label',
                html: '&nbsp;&nbsp;Registered users only:&nbsp;'
            }));

            this.registerUserOnly = new CQ.Ext.form.Checkbox({
                cls: 'customwidget-4',
                fieldLabel: 'Registered users only: ',
                value: false,
                allowBlank: true,
                listeners: {
                    change: {
                        scope: this,
                        fn: this.updateHidden
                    }
                }
            });
            this.add(this.registerUserOnly);
        },

        processInit: function(path, record) {
            this.linkText.processInit(path, record);
            this.linkUrl.processInit(path, record);
            this.openInNewTab.processInit(path, record);
            this.registerUserOnly.processInit(path, record);
        },

        setValue: function(value) {
            var link = JSON.parse(value);
            this.linkText.setValue(link.text);
            this.linkUrl.setValue(link.url);
            this.openInNewTab.setValue(link.openInNewTab);
            this.registerUserOnly.setValue(link.registerUserOnly);
            this.hiddenField.setValue(value);
        },

        getValue: function() {
            return this.getRawValue();
        },

        getRawValue: function() {
            var link = {
                'url': this.linkUrl.getValue(),
                'text': this.linkText.getValue(),
                'openInNewTab': this.openInNewTab.getValue(),
                'registerUserOnly': this.registerUserOnly.getValue()
            };
            return JSON.stringify(link);
        },

        updateHidden: function() {
            this.hiddenField.setValue(this.getValue());
        }
    });

    // register xtype
    CQ.Ext.reg('linksmultifield', CQ.SC.LinkMultifield);
})(window.CQ);
CQ.Ext.ns('CQ.SC.ProductCodeMultifield');

CQ.SC.ProductCodeMultifield = CQ.Ext.extend(CQ.form.MultiField, {


    validator: function(value) {
        var validationResult = true;
        var productService = '/services/sportchek/products';

        try {
            if (this.allowBlank === false && value.trim() === '') {
                validationResult = 'This field is required';
            } else {
                var url = CQ.HTTP.addParameter(productService, 'code', value);
                var fullUrl = CQ.HTTP.addParameter(url, 'locale', CQ.I18n.getLocale());
                var response = CQ.HTTP.get(fullUrl);

                if (response.status === 200) {
                    var productResponse = JSON.parse(response.body);

                    if (!productResponse.resultCount.total) {
                        validationResult = 'Product does not exists in the system';
                    }
                } else {
                    validationResult = 'Product does not exists in the system';
                }
            }
        } catch (e) {
            if (console.error) {
                console.error(e);
            }
        }

        return validationResult;
    },

    addItem: function(value) {
        var item = this.insert(this.items.getCount() - 1, {});
        var form = this.findParentByType('form');

        if (!this.fieldConfig.allowEdit) {
            item.field.readOnly = true;
            item.field.cls = item.field.disabledClass;
        }

        if (form){
            form.getForm().add(item.field);
        }

        this.doLayout();

        if (item.field.processPath) {
            item.field.processPath(this.path);
        }

        if (value) {
            item.setValue(value);
        }

        // Move validation function after setValue() and avoid twice validation request.
        // If field value is invalid then it will be checked on click "OK" button.
        item.field.validator = this.validator;

        if (this.fieldWidth < 0) {
            // fieldWidth is < 0 when e.g. the MultiField is on a hidden tab page;
            // do not set width but wait for resize event triggered when the tab page is shown
            return;
        }

        if (!this.fieldWidth) {
            this.calculateFieldWidth(item);
        }

        try {
            item.field.setWidth(this.fieldWidth);
        }
        catch (e) {
            CQ.Log.debug('CQ.form.MultiField#addItem: ' + e.message);
        }
    }
});

// register xtype
CQ.Ext.reg('productcodemultifield', CQ.SC.ProductCodeMultifield);

CQ.Ext.ns('CQ.SPC.Widgets.MarketingBundleMultifield');

CQ.SPC.Widgets.MarketingBundleMultifield = CQ.Ext.extend(CQ.SC.ProductCodeMultifield, {
    listeners: {
        beforeadd: function(container, component, index) {
            var productLimit = 100;

            if (index === productLimit) {
                var message = CQ.I18n.get('Count of products in Marketing Bundle Page is limited to {0}.', productLimit);

                CQ.Ext.Msg.alert('Error', message);

                return false;
            }
        }
    }
});

// register xtype
CQ.Ext.reg('CQ.SPC.Widgets.MarketingBundleMultifield', CQ.SPC.Widgets.MarketingBundleMultifield);

