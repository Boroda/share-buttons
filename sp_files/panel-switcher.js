;(function (CQ) {
    CQ.Ext.ns('CQ.SPC.Widgets.PanelSwitcher');

    CQ.SPC.Widgets.PanelSwitcher = CQ.Ext.extend(CQ.form.Selection, {
        constructor: function (config) {
            config = config || {};

            config.listeners = {
                loadcontent: {
                    scope: this,
                    fn : function(field) {
                        this.togglePanel(field);
                    }
                },
                selectionchanged: {
                     scope : this,
                     fn : function(field) {
                         this.togglePanel(field);
                     }
                }
            };

            CQ.SPC.Widgets.PanelSwitcher.superclass.constructor.call(this, config);
        },

        initComponent: function() {
            CQ.SPC.Widgets.PanelSwitcher.superclass.initComponent.call(this);
        },

        togglePanel: function(box) {
            var panel = box.findParentByType('panel');
            var fieldSet = panel.findByType('dialogfieldset');
            var show = box.getValue();

            switch (show) {
                case 'empty':
                    fieldSet[0].show();
                    fieldSet[1].hide();
                    fieldSet[2].hide();
                    panel.doLayout();
                    break;
                case 'image':
                    fieldSet[0].hide();
                    fieldSet[1].show();
                    fieldSet[2].hide();
                    panel.doLayout();
                    break;
                case 'video':
                    fieldSet[0].hide();
                    fieldSet[1].hide();
                    fieldSet[2].show();
                    panel.doLayout();
                    break;
            }
        }
    });

    CQ.Ext.reg('panelswitcher', CQ.SPC.Widgets.PanelSwitcher);
})(window.CQ);
