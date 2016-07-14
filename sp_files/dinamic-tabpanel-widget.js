CQ.Ext.ns("CQ.SC.Utils");

CQ.SC.Utils = new function () {
    return {

        /**
         * The number of pads by default.
         * @static
         * @final
         * @type {Number}
         */
        PAD_NUMBER_DEFAULT: 3,

        /**
         * Set the new name to already rendered form field
         * @static
         * @param {CQ.Ext.form.Field} fieldWidget Field to be renamed
         * @param {String} newName New name of the field
         * @return true if the field is already rendered
         */
        setFieldName: function (fieldWidget, newName) {
            var result = false;
            fieldWidget.name = newName;

            /* Very dirty post-render hack to change the actual name
             * of the control that gets submitted to server */
            if (fieldWidget.el && fieldWidget.el.dom) {
                fieldWidget.el.dom.name = newName;
                result = true;
            }
            return result;
        },

        /**
         * Prepends the necessary amount of zeroes in order to comply
         * a given width of the formatted number
         * @static
         * @param {Number} num Input number
         * @param {String} prefix Prefix of the result (optional)
         * @param {Number} width Output width (optional)
         * @return
         */
        padNumberWithZeroes: function (num, prefix, width) {
            if (!width) width = CQ.SC.Utils.PAD_NUMBER_DEFAULT;
            var pref = prefix || "";
            var numStr = "" + num;
            while (numStr.length < width) {
                numStr = "0" + numStr;
            }
            numStr = pref + numStr;
            return numStr;
        },

        /**
         * Parse the number that can be prepended by zeroes and prefix
         * @static
         * @param {String} numStr string representation of the number to parse
         * @param {String} prefix that prepends the number (optional)
         * @return
         */
        parseNumberWithZeroes: function (numStr, prefix) {
            if (prefix) {
                numStr = numStr.substring(prefix.length);
            }
            return parseInt(numStr, 10);
        },

        /**
         * Prints object's first level properties using alert.
         * @static
         * @param {Object} _ob object to print
         */
        printDebug: function (_ob) {
            var debug = "", j;
            for (j in _ob) {
                debug += j + ": " + _ob[j] + ", ";
            }
            //cut last comma
            debug = debug.substr(0, debug.length - 2);
            alert(debug);
        },

        /**
         * Complements the number with zero. Usable when format date.
         * @static
         * @param {Number}
         */
        _2: function (num) {
            var A = num.toString();
            if (A.length > 1) return A;
            else return ("00" + A).slice(-2);
        },

        /**
         * Add to Array prototype function to determine whether values ​​in the array.
         * Use yourArray.has(value)
         * @static
         * @param {None}
         * @return boolean
         */
        initHasInArray: function () {
            Array.prototype.has = function (value) {
                for (var i = 0, loopCnt = this.length; i < loopCnt; i++) {
                    if (this[i] === value) {
                        return true;
                    }
                }
                return false;
            };
        }
    }
};
CQ.Ext.ns("CQ.SC.DynamicPanel");

CQ.SC.DynamicPanel = CQ.Ext.extend(CQ.Ext.Panel, {

    /* Object, that contains all the dynamic configuration */
    dynConfig: null,

    /* Reference to the instance of CQ.Dialog */
    dialogWindow: null,

    /* Reference to the instance of CQ.Ext.Panel for dynamic items */
    dynContainer: null,

    /* Reference to the instance of the button which adds new items */
    addItemBtn: null,

    /* Hidden field that holds @Delete instruction for CRX */
    deleteCmdField: null,

    /* Reference to the instance of CQ.SC.DynamicItemsCounter */
    itemsCounter: null,

    /* Number of the static items inside dynContainer */
    staticItemsLength: 0,

    /* Object that holds various state-related flags */
    stateHandler: null,

    /* ---------------------------------------------------------------------- */

    constructor: function (config) {
        /* Initialize dynConfig */
        this.dynConfig = config.dynConfig || {};
        CQ.Util.applyDefaults(this.dynConfig, CQ.SC.DynamicPanel.dynConfigDefaults);
        delete config.dynConfig;

        this.stateHandler = {
            requiredItemsInit: true,
            newItemsAdded: false,
            existingItemsRemoved: false
        };

        CQ.SC.DynamicPanel.superclass.constructor.call(this, config);

        /* Augment dynConfig with some pre-calculated properties */
        //this.dynConfig.groupPath = this.dynConfig.rootPath + this.dynConfig.groupName;
        //this.dynConfig.nodePath = this.dynConfig.groupPath + "/" + this.dynConfig.nodeName;
        //this.dynConfig.deletePath = this.dynConfig.groupPath + CQ.Sling.DELETE_SUFFIX;

        /* Instantiate items counter and subscribe to its events */
        this.itemsCounter = new CQ.SC.DynamicItemsCounter(this.dynConfig.itemsMaxCount);
        this.itemsCounter.on("limitReached", function () {
            this.addItemBtn.disable();
            this.addItemBtn.setTooltip(this.dynConfig.addButtonDisabledTooltip);
        }, this);
        this.itemsCounter.on("limitUnreached", function () {
            this.addItemBtn.enable();
            this.addItemBtn.setTooltip(this.dynConfig.addButtonEnabledTooltip);
        }, this);


        /* Subscribe on the parent Dialog events as it became available */
        this.on("added", function (thiz, ownerCt) {
            this.dialogWindow = thiz.findParentByType(CQ.Dialog);

            this.dialogWindow.on("afterSubmit", this.onAfterSubmit, this);
            this.dialogWindow.on("afterCancel", this.onAfterCancel, this);
            this.dialogWindow.on("beforeLoadContent", this.initDynamicItems, this);

            /* This is necessary for recursive initialization of existing
             * nested dynamic containers */
            if (this.dialogWindow.loadedRecord) {
                this.initDynamicItems(this.dialogWindow.loadedRecord);
            }
        });


        this.dynContainer.on("remove", function (thiz, item) {
            if (item.removeEventProcessed) {
                /* This prevents processing of the same event by parent container */
                return;
            }
            this.reindexDynamicItems(thiz);
            if (item.dynExisting) {
                this.stateHandler.existingItemsRemoved = true;
                //this.deleteCmdField.enable();
            }
            item.removeEventProcessed = true;
        }, this);

    },

    initComponent: function () {
        CQ.SC.DynamicPanel.superclass.initComponent.call(this);
    },

    onDestroy: function () {
        CQ.SC.DynamicPanel.superclass.onDestroy.call(this);

        /* Purge event listeners before destroy */
        this.dialogWindow.un("afterSubmit", this.onAfterSubmit, this);
        this.dialogWindow.un("afterCancel", this.onAfterCancel, this);
        this.dialogWindow.un("beforeLoadContent", this.initDynamicItems, this);
    },

    /* ---------------------------------------------------------------------- */

    getGroupPath: function () {
        /* discover the root path which may be dynamic */
        var dynParent = this.findParentBy(function (parent) {
            return parent.dynPath;
        });
        var rootPath = (dynParent) ? dynParent.dynPath : this.dynConfig.rootPath;
        return rootPath + this.dynConfig.groupName;
    },

    /* Composes the full node path based on group path */
    getNodePath: function (index) {
        var nodePath = this.getGroupPath() + "/" + this.dynConfig.nodeName;
        nodePath = CQ.SC.Utils.padNumberWithZeroes(index, nodePath, this.dynConfig.nodeIndexWidth);
        return nodePath + "/";
    },

    getRecordGroupNode: function (record) {
        var path = this.getGroupPath();
        if (path.substr(0, 2) == "./") {
            path = path.substr(2, path.length - 2);
        }
        return record.get(path);
    },

    initDynamicItems: function (record) {
        if (this.stateHandler.requiredItemsInit) {
            CQ.SC.Utils.setFieldName(this.deleteCmdField, this.getGroupPath() + CQ.Sling.DELETE_SUFFIX);
            this.itemsCounter.reset();
            var groupNode = this.getRecordGroupNode(record);
            if (groupNode) {
                for (var nodeName in groupNode) {
                    var nodeNamePattern = new RegExp(this.dynConfig.nodeName + "\\d+", "g");
                    if (nodeNamePattern.test(nodeName)) {
                        this.addDynamicItem(true);
                    }
                }
            }
            this.stateHandler.requiredItemsInit = false;
            this.updatePlacementButtons();
        }
    },

    addDynamicItem: function (existing) {
        var index = this.itemsCounter.increase() - 1;
        var itemConfig = this.getItemConfig();

        /* Augment itemConfig with special fields */
        itemConfig.dynItem = true;
        itemConfig.dynIndex = index;
        itemConfig.dynPath = this.getNodePath(index);
        itemConfig.dynExisting = existing;

        var item = null;
        if (this.dynConfig.insertStartPosition < 0) {
            /* Default case - dynamic items will be added after all static */
            item = this.dynContainer.add(itemConfig);
        } else {
            /* Dynamic items should be added with calculated offset */
            var pos = this.dynContainer.items.getCount() -
                (this.staticItemsLength - this.dynConfig.insertStartPosition);
            item = this.dynContainer.insert(pos, itemConfig);
        }

        /* Find all widgets and adjust their names according to hierarchy */
        this.processFormFields(item, index, this.adjustFieldName);

        if (!existing) {
            /* Show only if the item is new (i.e. manually added) */
            item.show();
            this.processFormFields(item, index, this.setDefaultValues);
            this.stateHandler.newItemsAdded = true;
        }
        this.dynContainer.doLayout();
        this.updatePlacementButtons();

        return item;
    },

    reindexDynamicItems: function (parentContainer) {
        var allDynItems = this.dynContainer.find("dynItem", true);
        var len = allDynItems.length;
        var myDynItems = [];
        for (var i = 0; i < len; i++) {
            var item = allDynItems[i];
            if (this.dynContainer === item.ownerCt) {
                myDynItems.push(item);
            }
        }

        len = myDynItems.length;
        for (var i = 0; i < len; i++) {
            var item = myDynItems[i];


            if (item.dynIndex == i || !parentContainer.items.contains(item)) {
                /* Skip this item - it's already in order or it isn't a direct child of the container */
                continue;
            }
            this.reindexDynamicItemFields(item, i);
        }
        this.itemsCounter.reset(myDynItems.length);
        this.updatePlacementButtons();
    },

    reindexDynamicItemFields: function (item, newIndex) {
        item.dynIndex = newIndex;
        this.processFormFields(item, newIndex, this.adjustFieldName);
    },

    /*  Function recursively iterates over all the field that can be submitted
     *  and perform procession function on each widget.
     *  Iteration logic is taken from CQ.Util.findFormFields function
     */
    processFormFields: function (container, index, procFn, procFnScope) {
        if (!container) return;
        if (container.items && container.items.getCount()) {
            for (var i = 0; i < container.items.getCount(); i++) {
                var item = container.getComponent(i);
                if (item.isFormField) {
                    if (item.isCompositeFormField) {
                        var fields = item.getSubmittableFields();
                        if (fields.length == 0) {

                        }
                        for (var j = 0; j < fields.length; j++) {
                            procFn.call(procFnScope || this, fields[j], index);
                        }
                    } else {
                        procFn.call(procFnScope || this, item, index);
                    }
                }
                else if (item.items) {
                    this.processFormFields(item, index, procFn, procFnScope);
                }
            }
        }
    },

    /*  Function replaces the value of the 'name' attribute
     *  with one, that contains a new given index.
     */
    adjustFieldName: function (widget, index) {
        var newFieldName = null;

        if (!widget.dynamicName) {
            /* Field's name is going to be adjusted for the first time */
            newFieldName = this.getNodePath(index) + widget.name;
            widget.dynamicName = true;
        } else {
            /* Field's name is already dynamic, so just replace the index */
            var nodeName = CQ.SC.Utils.padNumberWithZeroes(index,
                this.dynConfig.nodeName, this.dynConfig.nodeIndexWidth);
            newFieldName = widget.name.replace(new RegExp(this.dynConfig.nodeName + "\\d+", "g"), nodeName);
        }

        CQ.SC.Utils.setFieldName(widget, newFieldName);
    },

    /* Function initializes fields on newly created dynamic container
     * with their default values (if they are specified) */
    setDefaultValues: function (widget, index) {
        if (widget.defaultValue != null) {
            widget.setValue(widget.defaultValue);
        }
    },

    removeDynamicItems: function (onlyNew) {
        var dynItems = null;
        if (onlyNew) {
            dynItems = this.find("dynExisting", false);
        } else {
            dynItems = this.find("dynItem", true);
        }
        for (var i = 0; i < dynItems.length; i++) {
            var item = dynItems[i];
            this.dynContainer.remove(item, true);
        }
    },

    updatePlacementButtons: function () {
    },

    onAfterSubmit: function () {
        if (this.stateHandler.newItemsAdded) {
            /* turn all 'new' items into 'existing' after successful submit */
            var newDynItems = this.find("dynExisting", false);
            for (i = 0; i < newDynItems.length; i++) {
                newDynItems[i].dynExisting = true;
            }
            this.stateHandler.newItemsAdded = false;
        }
    },

    onAfterCancel: function () {
        var allItemsRemoved = false;
        if (this.stateHandler.existingItemsRemoved) {
            /* remove all dynamic items and request re-initialization */
            this.removeDynamicItems(false);
            allItemsRemoved = true;
            this.stateHandler.requiredItemsInit = true;
            this.stateHandler.existingItemsRemoved = false;
        }
        if (this.stateHandler.newItemsAdded) {
            /* remove only new items (if previous condition didn't remove them all) */
            if (!allItemsRemoved) {
                this.removeDynamicItems(true);
            }
            this.stateHandler.newItemsAdded = false;
        }
    },

    /* This abstract function should be overridden to provide real itemConfig */
    getItemConfig: function () {
        return {};
    }

});

/* ========================================================================== */

CQ.SC.DynamicPanel.dynConfigDefaults = {
    rootPath: "./",
    groupName: "itemNodes",
    nodeName: "itemNode",
    nodeIndexWidth: 3,
    itemsMinCount: 0,
    itemsMaxCount: -1, // negative numbers mean - unlimited
    insertStartPosition: -1, // after last
    addButtonEnabledTooltip: "Add a new dynamic item",
    addButtonDisabledTooltip: "Allowed items limit is over!"
};

/* ========================================================================== */

CQ.SC.DynamicItemsCounter = CQ.Ext.extend(CQ.Ext.util.Observable, {

    limit: 10000, // almost unlimited in terms of dynamic items :)
    counter: 0,
    limitReached: false,

    constructor: function (limit) {
        CQ.SC.DynamicItemsCounter.superclass.constructor.call(this);
        if (limit && limit >= 0) {
            this.limit = limit;
        }
        this.addEvents(
            "limitReached",
            "limitUnreached"
        );
    },

    reset: function (value) {
        value = (value) ? value : 0;
        return this.change(value);
    },

    increase: function () {
        return this.change(this.counter + 1);
    },

    decrease: function () {
        return this.change(this.counter - 1);
    },

    //private method
    change: function (newValue) {
        var oldValue = this.counter;
        this.counter = newValue;
        if (!this.limitReached && newValue >= this.limit) {
            this.limitReached = true;
            this.fireEvent("limitReached", newValue);
        } else if (this.limitReached && newValue < this.limit) {
            this.limitReached = false;
            this.fireEvent("limitUnreached", newValue);
        }
        return this.counter;
    }
});	
// Resolve dependency CQ object for JSHint
;(function(CQ) {
    CQ.Ext.ns('CQ.SC.DynamicTabPanel');

    CQ.SC.DynamicTabPanel = CQ.Ext.extend(CQ.Ext.Panel, {

        /* Main config object which passed to constructor */
        mainConfig: null,

        /* Config object for grouping of all dynTabs-related properties */
        dynConfig: null,

        /* Reference to parent dialog. Initialized only on "added" event */
        parentDialog: null,

        /* delete */
        toDelete: [],

        staticTabsLength: 0,

        /* Instance of CQ.SC.DynTabCounter*/
        dynTabsCounter: null,

        /* Main TabPanel*/
        tabPanel: null,

        /* Button with ' + ' to add new tab */
        tabButton: null,

        /* Hidden field that holds @Delete instruction for CRX */
        deleteCmdField: null,

        /* Object holds various state-related flags */
        stateHandler: null,

        /* Dialog data that load from the CRX node as a JSON */
        dialogData: null,

        /* ---------------------------------------------------------------------- */
        constructor: function(config) {
            window.all = this;
            window.all.__c = config;
            /* Initialize configs */
            this.mainConfig = config;
            this.dynConfig = config.dynamicConfig || {};
            delete config.dynamicConfig;
            CQ.Util.applyDefaults(this.dynConfig, CQ.SC.DynamicTabPanel.dynConfigDefaults);

            this.stateHandler = {
                requiredTabsInit: true,
                newTabsAdded: false,
                existingTabsClosed: false
            };

            /* Augment dynConfig with some pre-calculated properties */
            this.dynConfig.groupPath = this.dynConfig.rootPath + this.dynConfig.groupName;
            this.dynConfig.nodePath = this.dynConfig.groupPath + '/' + this.dynConfig.nodeName;
            this.dynConfig.deletePath = this.dynConfig.groupPath + CQ.Sling.DELETE_SUFFIX;

            /* Instantiate TabPanel, Button, and hidden @Delete components */
            var tabPanelConfig = CQ.Ext.apply(config, {
                xtype: 'dynamictabpanel',
                activeTab: 0,
                deferredRender: false,
                plain: CQ.themes.Dialog.TABPANEL_PLAIN,
                border: CQ.themes.Dialog.TABPANEL_BORDER,
                enableTabScroll: true,
                stateful: false,
                autoWidth: true,
                headerStyle: {
                    /* Margin for add tab button */
                    marginRight: this.dynConfig.addTabButton ? '30px' : 0
                },
                bodyStyle: {
                    marginRight: '10px',
                    border: 0
                }
            });

            this.tabPanel = new CQ.Ext.TabPanel(tabPanelConfig);

            this.staticTabsLength = this.tabPanel.items.getCount();

            /* Instantiate tab counter and subscribe to its events */
            this.dynTabsCounter = new CQ.SC.DynamicItemsCounter(this.dynConfig.tabsLimit);

            this.deleteCmdField = new CQ.Ext.form.Hidden({
                xtype: 'hidden',
                name: this.dynConfig.deletePath
            });

            /* Prepare config for enclosing panel and pass it to super-constructor*/
            var panelConfig = {
                layout: 'fit',
                items: [this.tabPanel, this.deleteCmdField]
            };

            /* Add "New tab" button */
            if (this.dynConfig.addTabButton) {
                this.addButton = new CQ.Ext.Button({
                    handler: function() {
                        this.addDynTab(false, false, null);
                    },
                    text: '+',
                    tooltip: this.dynConfig.addButtonEnabledTooltip,
                    scope: this,
                    width: '30px',
                    height: '25px',
                    margins: '0 0 0 -10',
                    style: {
                        position: 'absolute',
                        right: '0',
                        top: '0',
                        zIndex: 10
                    }
                });

                this.dynTabsCounter.on('limitReached', function() {
                    this.addButton.disable();
                    this.addButton.setTooltip(this.dynConfig.addButtonDisabledTooltip);
                }, this);

                this.dynTabsCounter.on('limitUnreached', function() {
                    this.addButton.enable();
                    this.addButton.setTooltip(this.dynConfig.addButtonEnabledTooltip);
                }, this);

                panelConfig.items.push(this.addButton);
           }

            CQ.SC.DynamicTabPanel.superclass.constructor.call(this, panelConfig);

            /* Subscribe on the parent Dialog events as it becomes available */
            this.on('added', function(_this) {
                this.parentDialog = _this.findParentByType(CQ.Dialog);

                this.parentDialog.on('afterSubmit', function() {
                    this.processOkBtn();
                }, this);

                this.parentDialog.on('afterCancel', function() {
                    this.processCancelBtn();
                }, this);

                this.parentDialog.on('beforeLoadContent', function(rec) {
                    this.dialogData = rec;
                    this.initializeDynTabs(rec);
                }, this);

            }, this);

            this.tabPanel.on('remove', function(_this, tab) {
                if (tab.removeEventProcessed) {
                    /* This prevents processing of the same event by parent container */
                    return;
                }
                this.reindexDynTabs();
                if (tab.existing) {
                    this.stateHandler.existingTabsClosed = true;
                }
                tab.removeEventProcessed = true;
            }, this);
        },


        /* Initialization of component */
        initComponent: function() {
            CQ.SC.DynamicTabPanel.superclass.initComponent.call(this);
        },
        /* ---------------------------------------------------------------------- */

        /* Handler for 'afterSubmit' event of the parent Dialog */
        processOkBtn: function() {
            if (this.stateHandler.newTabsAdded) {
                /* turn all 'new' tabs into 'existing' after successful submit */
                var dynTabs = this.find('existing', false);
                for (var i = 0; i < dynTabs.length; i++) {
                    dynTabs[i].existing = true;
                }
                this.stateHandler.newTabsAdded = false;
            }
        },


        /* Handler for 'afterCancel' event of the parent Dialog */
        processCancelBtn: function() {
            var allTabsRemoved = false;

            if (this.stateHandler.existingTabsClosed) {
                /* remove all dynamic tabs and request re-initialization */
                this.removeDynTabs(false);
                allTabsRemoved = true;
                this.stateHandler.requiredTabsInit = true;
                this.stateHandler.existingTabsClosed = false;
            }

            if (this.stateHandler.newTabsAdded) {
                /* remove only new tabs (if previous condition didn't remove them all) */
                if (!allTabsRemoved) {
                    this.removeDynTabs(true);
                }
                this.stateHandler.newTabsAdded = false;
            }
        },


        /* Handler for 'beforeLoadContent' event of the parent Dialog */
        initializeDynTabs: function(rec) {
            if (this.stateHandler.requiredTabsInit) {
                this.dynTabsCounter.reset();

                var groupNode = rec.get(this.dynConfig.groupName);
                var tabsAdded = 0;

                if (groupNode) {
                    for (var nodeName in groupNode) {
                        if (nodeName.indexOf(this.dynConfig.nodeName) !== -1) {
                            this.addDynTab(true, (tabsAdded < this.dynConfig.tabsMinCount), groupNode);
                            tabsAdded++;
                        }
                    }
                }

                while (tabsAdded < this.dynConfig.tabsMinCount) {
                    this.addDynTab(true, true, groupNode);
                    tabsAdded++;
                }

                //var handler = this.onTabPanelItemClose;
                var _this = this;

                this.tabPanel.items.each(function() {
                    this.on('close', function() {
                        var item = this.findByType('smartimage').concat(this.findByType('html5smartimage'))[0];
                        var name = null;

                        if (item) {
                            name = item.name.slice(0, item.name.indexOf('/file')) + '@Delete';
                        }

                        _this.toDelete.push(name);
                    });
                });

                this.stateHandler.requiredTabsInit = false;
            }
        },


        addDynTab: function(existing, fixed, groupNode) {
            var tab = null;
            var index = this.dynTabsCounter.increase() - 1;
            var leftButton = new CQ.Ext.Button({
                text: '&larr;',
                width: 30,
                handler: function(but) {
                    var panel = but.ownerCt.ownerCt.ownerCt;
                    var items = panel.items;
                    var curTab = but.parentTab;
                    var index = items.indexOf(curTab);
                    var t1 = panel.items.removeAt(index);

                    panel.items.insert(index - 1, t1);

                    var tbid = panel.id + '__' + t1.id;
                    var tb = CQ.Ext.get(tbid);

                    tb.insertBefore(tb.prev());
                    panel.ownerCt.reindexDynTabs();
                }
            });
            var rightButton = new CQ.Ext.Button({
                text: '&rarr;',
                width: 30,
                handler: function(but) {
                    var panel = but.ownerCt.ownerCt.ownerCt;
                    var items = panel.items;
                    var curTab = but.parentTab;
                    var index = items.indexOf(curTab);
                    var t1 = panel.items.removeAt(index);

                    panel.items.insert(index + 1, t1);

                    var tbid = panel.id + '__' + t1.id;
                    var tb = CQ.Ext.get(tbid);

                    tb.insertAfter(tb.next());

                    panel.ownerCt.reindexDynTabs();
                }
            });
            var tabButtons = [{
                xtype: 'panel',
                layout: 'column',
                ref: '../positionButtons',
                border: false,
                cellCls: 'cq-multifield-itemct',
                items: [leftButton, rightButton]
            }];
            var tabConfig = {
                dynTab: true,
                dynIndex: index,
                dynPath: CQ.SC.Utils.padNumberWithZeroes(index, this.dynConfig.nodePath, this.dynConfig.nodeIndexWidth) + '/',
                existing: fixed || existing, // if tab is fixed - it is also existing!
                /**
                 * get title by key from "this.dynConfig" ("dialog.xml")
                 */
                title: (function(_this) {
                    var title = '';

                    if (_this.dynConfig.tabTitleKey) {
                        if (groupNode) {
                            var currentNode = CQ.SC.Utils.padNumberWithZeroes(index, _this.dynConfig.nodeName, _this.dynConfig.nodeIndexWidth);

                            title = groupNode[currentNode][_this.dynConfig.tabTitleKey];
                        }
                    } else {
                        title = _this.composeTabName(index);
                    }

                    return title;
                })(this),
                closable: this.dynConfig.addTabButton ? !fixed : false,
                items: this.dynConfig.sorting ? tabButtons.concat(this.mainConfig.dynamicItems) : this.mainConfig.dynamicItems,
                layout: 'form',
                autoScroll: true,
                autoDestroy: true,
                bodyStyle: CQ.themes.Dialog.TAB_BODY_STYLE,
                labelWidth: CQ.themes.Dialog.LABEL_WIDTH,
                defaultType: 'textfield',
                stateful: false,
                /* set 'hideMode' as a workaround to ExtJS 3.1.x bug
                 * http://www.sencha.com/forum/showthread.php?88063-CLOSED-3.1-deferredRender-on-tabpanel-is-not-working-correctly
                 * http://www.sencha.com/forum/showthread.php?89425-deferredRender-on-tabpanel */
                hideMode: 'offsets',
                defaults: {
                    msgTarget: CQ.themes.Dialog.MSG_TARGET,
                    anchor: CQ.themes.Dialog.ANCHOR,
                    stateful: false
                }
            };

            tabConfig = CQ.Ext.apply(tabConfig, this.dynConfig.tabConfig);

            if (this.dynConfig.tabsStartPosition < 0) {
                /* Default case - dynamic tabs will be added after all static */
                tab = this.tabPanel.add(tabConfig);
            } else {
                /* Dynamic tabs should be added with calculated offset */
                var pos = this.tabPanel.items.getCount() - (this.staticTabsLength - this.dynConfig.tabsStartPosition);
                tab = this.tabPanel.insert(pos, tabConfig);
            }

            leftButton.parentTab = tab;
            rightButton.parentTab = tab;
            tab.dynLeftButton = leftButton;
            tab.dynRightButton = rightButton;

            /* Find all widgets and adjust their crxPaths */
            this.processFormFields(tab, index, this.adjustFieldName);

            window.item = tab;

            if (!existing) {
                /* Show only if the tab is new (i.e. manually added) */
                tab.show();
                this.processFormFields(tab, index, this.setDefaultValues);
                this.stateHandler.newTabsAdded = true;
            } else {
                /* If tab exists then call fields processing for component 'selection' */
                this.processFormFields(tab, index, this.setSelectionValues);
            }

            if (this.tabPanel.items.getCount() === 1) {
                /* Show this tab if it is a first added tab and there
                 * are no static tabs specified in this dialog */
                tab.show();
            }

            this.updatePlacementButtons();
            this.tabPanel.doLayout();
        },


        updatePlacementButtons: function() {
            var allDynTabs = this.find('dynTab', true);
            var len = allDynTabs.length;

            for (var i = 0; i < len; i++) {
                var item = allDynTabs[i];

                if (item.dynLeftButton && item.dynRightButton) {
                    if (i === 0) {
                        item.dynLeftButton.disable();
                    } else {
                        item.dynLeftButton.enable();
                    }

                    if (i === len - 1) {
                        item.dynRightButton.disable();
                    } else {
                        item.dynRightButton.enable();
                    }
                }
            }
        },


        /* should be executed before submit */
        reindexDynTabs: function() {
            var allDynTabs = this.find('dynTab', true);

            for (var i = 0; i < allDynTabs.length; i++) {
                var tab = allDynTabs[i];

                if (tab.dynIndex === i) {
                    /* Skip this tab - it's already in order */
                    continue;
                }

                tab.dynIndex = i;
                tab.setTitle(this.composeTabName(i));
                this.processFormFields(tab, i, this.adjustFieldName);
                tab.dynPath = CQ.SC.Utils.padNumberWithZeroes(i, this.dynConfig.nodePath, this.dynConfig.nodeIndexWidth) + '/';
            }

            this.dynTabsCounter.reset(allDynTabs.length);
            this.updatePlacementButtons();
        },


        composeTabName: function(index) {
            return this.dynConfig.tabName + ' #' + (index + this.dynConfig.tabsLabelStartIndex);
        },


        removeDynTabs: function(onlyNew) {
            var dynTabs = null;

            if (onlyNew) {
                dynTabs = this.find('existing', false);
            } else {
                dynTabs = this.find('dynTab', true);
            }

            for (var i = 0; i < dynTabs.length; i++) {
                var tab = dynTabs[i];

                this.tabPanel.remove(tab, true);
            }
        },


        /*  Function recursively iterates over all the field that can be submitted
         *  and perform procession function on each widget.
         *  Iteration logic is taken from CQ.Util.findFormFields function
         */
        processFormFields: function(container, index, procFn, procFnScope) {
            if (!container) {
                return;
            }
            /* attach property helper */
            var _this = this;

            function attachParam(item, v) {
                var value = item.attachedProps[v];

                if (!value) {
                    value = item[v];
                    item.attachedProps[v] = value;
                }

                if (item[v] && item[v].length) {
                    var nodeName = CQ.SC.Utils.padNumberWithZeroes(index, _this.dynConfig.nodeName, _this.dynConfig.nodeIndexWidth);
                    var toAttach = _this.dynConfig.groupPath + '/' + nodeName + '/' + value.slice(2);

                    item[v] = toAttach;
                    try {
                        item[v.replace('Parameter', 'Field')].el.dom.name = toAttach;
                    } catch (e) {
                    }
                }
            }

            if (container.items && container.items.getCount()) {
                container.items.each(function(item) {
                    if (item.isFormField) {
                        if (!item.attachedProps) {
                            item.attachedProps = {};
                        }

                        if (item instanceof CQ.form.SmartImage || item instanceof CQ.html5.form.SmartImage) {
                            attachParam(item, 'cropParameter');
                            attachParam(item, 'fileNameParameter');
                            attachParam(item, 'mapParameter');
                            attachParam(item, 'rotateParameter');
                            attachParam(item, 'fileReferenceParameter');
                            try {
                                item.lastModifiedByParameter.el.dom.name = null;
                                item.lastModifiedParameter.el.dom.name = null;
                            } catch (e) {
                            }

                            var nodeName = CQ.SC.Utils.padNumberWithZeroes(index, _this.dynConfig.nodeName, _this.dynConfig.nodeIndexWidth);

                            CQ.SC.Utils.setFieldName(item, _this.dynConfig.groupPath + '/' + nodeName + '/' + item.name.slice(2));
                            item.dynamicName = true;

                            // prevent ./file node removing
                            item.deleteFileParameter.setValue(null);

                            // dynamic tab smartimage rendering dirty fix
                            setTimeout(function() {
                                if (!item.fileReferenceField.value) {
                                    item.reset();
                                }
                            }, 50);

                            /*
                             * CQ.form.SmartFile requires DOM for correct work, dynamic tab panel
                             * clears DOM when closing tab. So we need to apply custom logic
                             */
                            // cache base method into variable
                            var prevMethod = item.syncFormElements;

                            item.syncFormElements = function() {
                                try {
                                    prevMethod.call(item);
                                } catch (e) {
                                }
                            };
                        } else if (item.isCompositeFormField) {
                            var fields = item.getSubmittableFields();

                            /*Fix for dynamic panel inside dynamic tab (panel has no items yet, but has a name)*/
                            if (fields.length === 0) {
                                procFn.call(procFnScope || _this, item, index);
                                if (typeof item.fieldConfig !== 'undefined') {
                                    procFn.call(procFnScope || _this, item.fieldConfig, index, true);
                                }
                                if (typeof item.initialConfig !== 'undefined') {
                                    procFn.call(procFnScope || _this, item.initialConfig, index, true);
                                }
                                if (typeof item.defaults !== 'undefined' && typeof item.defaults.fieldConfig !== 'undefined') {
                                    procFn.call(procFnScope || _this, item.defaults.fieldConfig, index, true);
                                }
                            }
                            for (var j = 0; j < fields.length; j++) {
                                procFn.call(procFnScope || _this, fields[j], index);
                            }
                        } else {
                            procFn.call(procFnScope || _this, item, index);
                        }
                    } else if (item.items) {
                        _this.processFormFields(item, index, procFn, procFnScope);
                    }
                });
            }
        },

        /*  Function replaces the value of the 'name' attribute
         *  with one, that contains a new given index.
         */
        adjustFieldName: function(widget, index, isDynamicCompositeWidget) {
            if (typeof(isDynamicCompositeWidget) === 'undefined') {
                isDynamicCompositeWidget = false;
            }

            var newFieldName = null;

            if (!widget.dynamicName || isDynamicCompositeWidget) {
                /* Field's name is going to be adjusted for the first time */
                var nodePath = CQ.SC.Utils.padNumberWithZeroes(index, this.dynConfig.nodePath, this.dynConfig.nodeIndexWidth);

                newFieldName = nodePath + '/' + widget.name;
                widget.dynamicName = true;
            } else {
                /* Field's name is already dynamic, so just replace the index */
                var nodeName = CQ.SC.Utils.padNumberWithZeroes(index, this.dynConfig.nodeName, this.dynConfig.nodeIndexWidth);

                newFieldName = widget.name.replace(new RegExp(this.dynConfig.nodeName + '\\d+', 'g'), nodeName);
            }

            CQ.SC.Utils.setFieldName(widget, newFieldName);
        },

        /* Function initializes fields on newly created dynamic container
         * with their default values (if they are specified) */
        setDefaultValues: function(widget) {
            if (widget.defaultValue !== null) {
                widget.setValue(widget.defaultValue);
            }
        },

        setSelectionValues: function(widget, dynTabIndex) {
            // Name of the "selection" component that get from dialog.xml
            var dynSelectionName = null;
            var dynSelectionValues = null;

            if (widget.hasOwnProperty('dynSelectionName') && widget instanceof CQ.form.Selection) {
                dynSelectionName = widget.dynSelectionName;
                dynSelectionValues = this.dialogData.data[dynSelectionName];

                /**
                 * If user deleted all tabs except one and save it then
                 * xtype: 'selection' save values as string not array.
                 * In this case we have to check it and get proper value for
                 * current tab and 'selection' component.
                 */
                if (CQ.Ext.isArray(dynSelectionValues)) {
                    widget.setValue(dynSelectionValues[dynTabIndex]);
                } else if (CQ.Ext.isString(dynSelectionValues)) {
                    widget.setValue(dynSelectionValues.split(',')[dynTabIndex]);
                }
            }
        }
    });
    /* ========================================================================== */

    /* Static members of the CQ.SC.DynamicTabPanel */

    CQ.SC.DynamicTabPanel.dynConfigDefaults = {
        rootPath: './',
        groupName: 'dynNodes',
        nodeName: 'dynNode',
        nodeIndexWidth: 3,
        tabName: 'Dyn Tab',
        tabsLimit: -1,
        tabsMinCount: 0,
        tabsStartPosition: -1, // after last
        tabsLabelStartIndex: 1,
        addButtonEnabledTooltip: 'Add a new dynamic tab',
        addButtonDisabledTooltip: 'Allowed tab limit is over!',
        tabConfig: {},
        addTabButton: true,
        sorting: true
    };

    /* -------------------------------------------------------------------------- */
    /* Register 'dynamictabpanel' xtype */
    CQ.Ext.reg('dynamictabpanel', CQ.SC.DynamicTabPanel);
})(window.CQ);
