CQ.Ext.ns('CQ.SPC.Widgets.ContentFinder');

CQ.SPC.Widgets.ContentFinder = {
    TAB_S7_BROWSE : 'cfTab-S7Browse',
    TAB_PARAGRAPHS : 'cfTab-Paragraphs',
    TAB_PARTICIPANTS : 'cfTab-Participants',
    TAB_PRODUCTS : 'cfTab-Products',
    TAB_MANUSCRIPTS : 'cfTab-Manuscripts',
    TAB_DOCUMENTS: 'cfTab-Documents',
    TAB_PAGES: 'cfTab-Pages',

    hideTabs: function() {
        var tabPanel = CQ.Ext.getCmp(CQ.wcm.ContentFinder.TABPANEL_ID);

        var tabs = [
            this.TAB_S7_BROWSE,
            this.TAB_PARAGRAPHS,
            this.TAB_DOCUMENTS,
            this.TAB_PARTICIPANTS,
            this.TAB_PRODUCTS,
            this.TAB_MANUSCRIPTS,
            this.TAB_PAGES
        ];

        CQ.Ext.each(tabs, function(currentTab) {
            var tab = CQ.Ext.getCmp(currentTab);

            if(tab) {
                tabPanel.hideTabStripItem(tab);
            }
        });
    }
};

(function() {
    // Run rest of code if Content Finder exists on the page
    if (window.location.href.indexOf('/cf#/') === -1) {
        return;
    }

    var INTERVAL = setInterval(function() {
        var cf = CQ.SPC.Widgets.ContentFinder;
        var tabPanel = CQ.Ext.getCmp(CQ.wcm.ContentFinder.TABPANEL_ID);

        if (tabPanel) {
            clearInterval(INTERVAL);
            cf.hideTabs();
        }
    }, 250);
})();

CQ.Ext.reg('CQ.SPC.Widgets.ContentFinder', CQ.SPC.Widgets.ContentFinder);

