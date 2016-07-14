CQ.Ext.ns('CQ.SC.Widgets.ActionButtonsAdministration');

CQ.SC.Widgets.AppointmentService = {
    availableCheckBoxChange: function availableCheckBoxChange(cehckbox) {
        var value = cehckbox.getValue()[0] === 'true';

        cehckbox.findParentByType('dialog').find('name','./email')[0].allowBlank = !value;
    }
};

