//TODO: component must be refactored, global functions must be removed

function limitNumberOfFieldInMultifield(list, component, index) {
    var limit = list.fieldConfig.limit;

    if (limit != 0) {
        if (limit == (list.items.getCount() - 1)) {
            CQ.Ext.Msg.show({
                title: CQ.I18n.getMessage('Limit reached'),
                msg: 'The limit (' + limit + ') of product exceeded in bundle',
                icon: CQ.Ext.MessageBox.WARNING,
                buttons: CQ.Ext.Msg.OK
            });
            return false;
        }
    }
    return true;
}

function checkNumberOfProductInMarketingBundle(dialog) {
    var tab = dialog.items.first();
    var panel = tab.items.first();
    var fieldSet = panel.items.first();
    var products = fieldSet.items.items[2];
    var productCount = products.items.getCount() - 1;

    if (productCount == 0) {
        CQ.Ext.Msg.show({
            title: CQ.I18n.getMessage('No product in bundle'),
            msg: CQ.I18n.getMessage('Marketing bundle must contain at least one product'),
            icon: CQ.Ext.MessageBox.WARNING,
            buttons: CQ.Ext.Msg.OK
        });
        return false;
    }

    return isValidProductCodeValues(products.items.items);
}

function isValidProductCodeValues(items) {
    var allowedPattern = /^[0-9a-zA-Z]+$/;
    var result = true;
    var duplicatesMap = {};

    for (var i = 0; i < items.length; i++) {
        var item = items[i];

        if (item.xtype === 'multifielditem') {
            var value = item.getValue();
            if (!value || !allowedPattern.test(value)) {
                CQ.Ext.Msg.show({
                    title: CQ.I18n.getMessage('Invalid product code'),
                    msg: CQ.I18n.getMessage('Invalid product code was found in Marketing bundle'),
                    icon: CQ.Ext.MessageBox.WARNING,
                    buttons: CQ.Ext.Msg.OK
                });
                result = false;
                break;
            }else if (duplicatesMap[value]){
                CQ.Ext.Msg.show({
                    title: CQ.I18n.getMessage('Invalid product code'),
                    msg: CQ.I18n.getMessage('Duplicates in product codes are not allowed'),
                    icon: CQ.Ext.MessageBox.WARNING,
                    buttons: CQ.Ext.Msg.OK
                });
                result =  false;
                break;
            }
            duplicatesMap[value] = true;
        }
    }

    return result;
}

