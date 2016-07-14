CQ.Ext.ns('CQ.SPC.Widgets.VideoLinks');
CQ.SPC.Widgets.VideoLinks = CQ.Ext.extend(CQ.Ext.Container, {
    /**
     * @private
     * @type Ext.form.RadioGroup
     */
    radioGroup: null,
    /**
     * @private
     * @type CQ.Ext.form.TextField
     */
    youtubeLink: null,
    /**
     * @private
     * @type CQ.Ext.form.PathField
     */
    scene7: null,
    youtubeId: null,
    scene7Id: null,
    radioGroupId: null,
    youtubeRadioId: null,
    scene7RadioId: null,
    constructor: function(config) {
        config = config || {};
        var defaults = {
            border: false,
            layout: 'form',
            rootPath: config.rootPath || '/content/dam',
            name: config.name || '.'
        };
        config = CQ.Util.applyDefaults(config, defaults);
        CQ.SPC.Widgets.VideoLinks.superclass.constructor.call(this, config);
    },
    // overriding CQ.Ext.Component#initComponent
    initComponent: function() {
        CQ.SPC.Widgets.VideoLinks.superclass.initComponent.call(this);
        this.radioGroupId = 'radioGroup' + CQ.Ext.id();
        this.youtubeRadioId = 'youtubeRadio' + CQ.Ext.id();
        this.scene7RadioId = 'scene7Radio' + CQ.Ext.id();
        this.radioGroup = new CQ.Ext.form.RadioGroup({
            id: this.radioGroupId,
            xtype: 'radiogroup',
            name: this.initialConfig.name + '/videoUrlType',
            column: 2,
            items: [{
                id: this.youtubeRadioId,
                boxLabel: 'Youtube',
                value: 'youtube',
                inputValue: 'youtube',
                name: this.initialConfig.name + '/videoUrlType',
                checked: true
            }, {
                id: this.scene7RadioId,
                boxLabel: 'Scene7',
                value: 'scene7',
                name: this.initialConfig.name + '/videoUrlType',
                inputValue: 'scene7'
            }],
            listeners: {
                change: {
                    scope: this,
                    fn: this.update
                },
                render: {
                    scope: this,
                    fn: this.update
                }
            }
        });
        this.add(this.radioGroup);
        this.youtubeId = 'youtubeLink' + CQ.Ext.id();
        this.youtubeLink = new CQ.Ext.form.TextField({
            id: this.youtubeId,
            fieldLabel: 'Youtube link',
            anchor: '100%',
            width: 200,
            name: this.initialConfig.name + '/youtubeLink'
        });
        this.add(this.youtubeLink);
        this.scene7Id = 'scene7Link' + CQ.Ext.id();
        this.scene7 = new CQ.form.PathField({
            id: this.scene7Id,
            fieldLabel: 'Video',
            anchor: '100%',
            rootPath: this.initialConfig.rootPath,
            name: this.initialConfig.name + '/videoLink'
        });
        this.add(this.scene7);
    },
    update: function() {
        var youtubeChecked = CQ.Ext.getCmp(this.youtubeRadioId).checked;
        var scene7Checked = CQ.Ext.getCmp(this.scene7RadioId).checked;
        if (youtubeChecked) {
            this.youtubeLink.show();
            this.scene7.setValue(null);
            this.scene7.hide();
        } else if (scene7Checked) {
            this.youtubeLink.setValue(null);
            this.youtubeLink.hide();
            this.scene7.show();
        } else {
            this.youtubeLink.hide();
            this.scene7.hide();
        }
    }
});
// register xtype
CQ.Ext.reg('CQ.SPC.Widgets.VideoLinks', CQ.SPC.Widgets.VideoLinks);
