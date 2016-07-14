/*
 * #%L
 * ACS AEM Commons Package
 * %%
 * Copyright (C) 2013 Adobe
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */
/*global CQ: false */
(function() {
    var originalAddItemFunction = CQ.form.MultiField.prototype.addItem,
        originalValidateFunction = CQ.form.MultiField.prototype.validate;
    CQ.Ext.override(CQ.form.MultiField, {
        getActualItemCount: function() {
            return this.items.getCount() - 1;
        },
        addItem: function(value) {
            if (this.maxItems && (this.maxItems === this.getActualItemCount())) {
                CQ.Ext.Msg.show({
                    title: 'Maximum Items reached',
                    msg: 'You are only allowed to add ' + this.maxItems + ' items to this field',
                    icon: CQ.Ext.MessageBox.WARNING,
                    buttons: CQ.Ext.Msg.OK
                });
                return;
            }
            originalAddItemFunction.apply(this, [value]);
        },
        validate: function() {
            if (this.minItems) {
                if (this.getActualItemCount() < this.minItems) {
                    this.markInvalid("You must add at least " + this.minItems + " items to this field");
                    return false;
                }
            }
            
            return originalValidateFunction.apply(this);
        },
        markInvalid : function(msg){
            //don't set the error icon if we're not rendered or marking is prevented
            if (this.rendered && !this.preventMark) {
                this.body.addClass(this.invalidClass);
            }
            
            this.fireEvent('invalid', this, msg);
        },
        clearInvalid : function(){
            //don't remove the error icon if we're not rendered or marking is prevented
            if (this.rendered && !this.isDestroyed && !this.preventMark) {
                this.body.removeClass(this.invalidClass);
            }
            
            this.fireEvent('valid', this);
        }
    });
}());
/*
 * #%L
 * ACS AEM Commons Package
 * %%
 * Copyright (C) 2013 Adobe
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */
/*global CQ: false */

CQ.Ext.ns("ACS.CQ.wcm");
/*
 * #%L
 * ACS AEM Commons Package
 * %%
 * Copyright (C) 2013 Adobe
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */
/*global CQ: false, ACS: false */

/**
 * Search predicate form widget which looks up an authorizable.
 */
ACS.CQ.wcm.AuthorizablePredicate = CQ.Ext.extend(CQ.form.CompositeField, {

    /**
     * @cfg {String} propertyName Name of the property. Defaults to
     *      'jcr:content/jcr:lastModifiedBy'.
     */
    propertyName : null,

    /**
     * @cfg {String} predicateName Name of the predicate. Defaults to
     *      'property'.
     */
    predicateName : null,
    
    /**
     * @cfg {String} filter can have either the value "groups" or "users".
     * If set to "groups" only, Groups are searched, "users" only
     * searches for Users. (defaults to users)
     */
    filter : null,

    constructor : function(config) {
        config = config || {};
        var defaults = {
            "border" : false,
            "predicateName" : "property",
            "propertyName" : "jcr:content/jcr:lastModifiedBy",
            "fieldLabel" : CQ.I18n.getMessage("Last Modified By"),
            "filter" : "users"
        };
        config = CQ.Util.applyDefaults(config, defaults);
        ACS.CQ.wcm.AuthorizablePredicate.superclass.constructor.call(this, config);
    },

    initComponent : function() {
        ACS.CQ.wcm.AuthorizablePredicate.superclass.initComponent.call(this);

        var id = CQ.wcm.PredicateBase.createId(this.predicateName);

        this.add(new CQ.Ext.form.Hidden({
            "name" : id,
            "value" : this.propertyName
        }));

        this.add(new CQ.security.AuthorizableSelection({
            "name" : id + ".value",
            "hideLabel" : true,
            "anchor" : "100%",
            "valueField" : "id",
            "displayField" : "name",
            "filter" : this.filter
        }));
    }

});
CQ.Ext.reg("authorizablepredicate", ACS.CQ.wcm.AuthorizablePredicate);

/*
 * #%L
 * ACS AEM Commons Package
 * %%
 * Copyright (C) 2013 Adobe
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */
/*global CQ: false, ACS: false */

/**
 * Search predicate form widget which passes a path as a property value.
 */
ACS.CQ.wcm.PathPropertyPredicate = CQ.Ext.extend(CQ.form.CompositeField, {

    /**
     * @cfg {String} propertyName Name of the property.
     */
    propertyName : null,

    /**
     * @cfg {String} predicateName Name of the predicate. Defaults to
     *      'property'.
     */
    predicateName : null,

    /**
     * @cfg {String} rootPath Search path root path for predicate. Defaults to
     *      '/content'.
     */
    rootPath : null,

    /**
     * @cfg {String} pathFieldPredicateName Search path root path for predicate.
     *      Defaults to 'folder'.
     */
    pathFieldPredicateName : null,

    constructor : function(config) {
        config = config || {};
        var defaults = {
            "border" : false,
            "predicateName" : "property",
            "rootPath" : "/content",
            "pathFieldPredicateName" : "folder"
        };
        config = CQ.Util.applyDefaults(config, defaults);
        ACS.CQ.wcm.PathPropertyPredicate.superclass.constructor.call(this, config);
    },

    initComponent : function() {
        ACS.CQ.wcm.PathPropertyPredicate.superclass.initComponent.call(this);

        var id = CQ.wcm.PredicateBase.createId(this.predicateName);

        this.add(new CQ.Ext.form.Hidden({
            "name" : id,
            "value" : this.propertyName
        }));

        this.add(new CQ.form.PathField({
            "rootPath" : this.rootPath,
            "name" : id + ".value",
            "predicate" : this.pathFieldPredicateName,
            "triggerClass" : "",
            "hideLabel" : true,
            "anchor" : "100%"
        }));
    }

});
CQ.Ext.reg("pathpropertypredicate", ACS.CQ.wcm.PathPropertyPredicate);

/*
 * #%L
 * ACS AEM Commons Package
 * %%
 * Copyright (C) 2013 Adobe
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */
/*global CQ: false, ACS: false */

/**
 * Search predicate form widget which uses a selection to select a property
 * value.
 */
ACS.CQ.wcm.SelectionPredicate = CQ.Ext.extend(CQ.form.CompositeField, {

    /**
     * @cfg {String} propertyName Name of the property.
     */
    propertyName : null,

    /**
     * @cfg {String} predicateName Name of the predicate. Defaults to
     *      'property'.
     */
    predicateName : null,

    /**
     * @cfg {String} options
     */
    options : null,

    constructor : function(config) {
        config = config || {};
        var defaults = {
            "border" : false,
            "predicateName" : "property"
        };
        config = CQ.Util.applyDefaults(config, defaults);
        ACS.CQ.wcm.SelectionPredicate.superclass.constructor.call(this, config);
    },

    initComponent : function() {
        ACS.CQ.wcm.SelectionPredicate.superclass.initComponent.call(this);

        var id = CQ.wcm.PredicateBase.createId(this.predicateName);

        this.add(new CQ.Ext.form.Hidden({
            "name" : id,
            "value" : this.propertyName
        }));

        this.add(new CQ.form.Selection({
            "type" : "select",
            "name" : id + ".value",
            "options" : this.options,
            "triggerClass" : "",
            "hideLabel" : true,
            "anchor" : "100%"
        }));
    }

});
CQ.Ext.reg("selectionpredicate", ACS.CQ.wcm.SelectionPredicate);

/*
 * #%L
 * ACS AEM Commons Package
 * %%
 * Copyright (C) 2013 Adobe
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */
/*global CQ: false, ACS: false */
/**
 * @class ACS.CQ.form.DDPathField
 * @extends CQ.form.PathField
 * <p>The DDPathField widget is a drop-in replacement for the normal PathField with the additional functionality of being able to receive drag-and-drop
 * paths from the Content Finder.</p>
 * @constructor
 * Creates a new DDPathField.
 * @param {Object} config The config object
 */
CQ.Ext.ns("ACS.CQ.form");
ACS.CQ.form.DDPathField = CQ.Ext.extend(CQ.form.PathField, {
    
    /**
     * @cfg {String} ddGroups
     * Drag &amp; drop which will be accepted by this widget
     * (defaults to "asset", "page")
     */

    constructor : function(config) {
        config = CQ.Util.applyDefaults(config, {
            "ddGroups" : [ CQ.wcm.EditBase.DD_GROUP_ASSET,
                          CQ.wcm.EditBase.DD_GROUP_PAGE ],
            "listeners" : {
                "render" : this.registerDragAndDrop,
                "destroy" : this.unregisterDragAndDrop
            }
            
        });
        ACS.CQ.form.DDPathField.superclass.constructor.call(this, config);
    },

    registerDragAndDrop : function() {
        var field = this,
            dialog = this.findParentByType('dialog'),
            inMultiField = CQ.Ext.isDefined(this.findParentByType('multifield')),
            target,
            i;
        if (this.ddGroups) {
            if (typeof (this.ddGroups) === "string") {
                this.ddGroups = [ this.ddGroups ];
            }
            target = new CQ.wcm.EditBase.DropTarget(this.el, {
                "notifyDrop" : function(dragObject, evt, data) {
                    var record, path;
                    if (dragObject && dragObject.clearAnimations) {
                        dragObject.clearAnimations(this);
                    }
                    if (dragObject.isDropAllowed(this)) {
                        if (data.records && data.single) {
                            record = data.records[0];
                            path = record.get("path");
                            field.setValue(path);
                            evt.stopEvent();
                            return true;
                        }
                        return false;
                    }
                }
            });

            if (inMultiField) {
                CQ.WCM.registerDropTargetComponent(field);
            }

            dialog.on("activate", function(dialog) {
                var dialogZIndex;
                if (dialog && dialog.el && this.highlight) {
                    dialogZIndex = parseInt(dialog.el.getStyle("z-index"),
                            10);
                    if (!isNaN(dialogZIndex)) {
                        this.highlight.zIndex = dialogZIndex + 1;
                    }
                }
            }, target);
            dialog.on("deactivate", function(dialog) {
                var dialogZIndex;
                if (dialog && dialog.el && this.highlight) {
                    dialogZIndex = parseInt(dialog.el.getStyle("z-index"),
                            10);
                    if (!isNaN(dialogZIndex)) {
                        this.highlight.zIndex = dialogZIndex + 1;
                    }
                }
            }, target);

            dialog.on("show", function() {
                if (!inMultiField) {
                    CQ.WCM.registerDropTargetComponent(field);
                }
            }, target);

            dialog.on("hide", function() {
                if (!inMultiField) {
                    CQ.WCM.unregisterDropTargetComponent(field);
                }
            }, target);

            for (i = 0; i < this.ddGroups.length; i++) {
                target.addToGroup(this.ddGroups[i]);
            }
            target.removeFromGroup(CQ.wcm.EditBase.DD_GROUP_DEFAULT);
            this.dropTargets = [ target ];
        }
    },

    unregisterDragAndDrop : function() {
        var field = this,
            inMultiField = CQ.Ext.isDefined(this.findParentByType('multifield'));

        if (inMultiField) {
            CQ.WCM.unregisterDropTargetComponent(field);
        }
    }
});
ACS.CQ.form.DDPathField.prototype.getDropTargets = CQ.Ext.form.Field.prototype.getDropTargets;

CQ.Ext.reg("ddpathfield", ACS.CQ.form.DDPathField);

/*
 * #%L
 * ACS AEM Commons Package
 * %%
 * Copyright (C) 2013 Adobe
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */
/*global CQ: false */
if (!CQ.form.CompositeField.prototype.processParentRecord) {
    CQ.form.CompositeField.prototype.processParentRecord = CQ.Ext.form.Field.prototype.processParentRecord;
}
/*
 * #%L
 * ACS AEM Commons Package
 * %%
 * Copyright (C) 2013 - 2014 Adobe
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */
/*global CQ: false, ACS: false */
CQ.Ext.ns("ACS.CQ");
/**
 * @class ACS.CQ.MultiFieldPanel
 * @extends CQ.form.Panel
 * <p>The MultiFieldPanel widget is a replacement for the normal multifield widget which
 * supports multiple structures in a single JCR property. It does this by storing a set of
 * key/value pairs serialized as a JSON object. The keys for each pair is defined by setting the
 * 'key' property on the field.</p>
 */
ACS.CQ.MultiFieldPanel = CQ.Ext.extend(CQ.Ext.Panel, {
    panelValue: '',

    /**
     * @constructor
     * Creates a new MultiFieldPanel.
     * @param {Object} config The config object
     */
    constructor: function(config){
        config = config || {};
        if (!config.layout) {
            config.layout = 'form';
            config.padding = '10px';
        }
        ACS.CQ.MultiFieldPanel.superclass.constructor.call(this, config);
    },

    initComponent: function() {
        ACS.CQ.MultiFieldPanel.superclass.initComponent.call(this);

        this.panelValue = new CQ.Ext.form.Hidden({
            name: this.name
        });

        this.add(this.panelValue);

        var dialog = this.findParentByType('dialog');

        dialog.on('beforesubmit', function(){
            var value = this.getValue();

            if (value){
                this.panelValue.setValue(value);
            }
        },this);
    },

    getValue: function() {
        var pData = {};

        this.items.each(function(i){
            if(i.xtype === "label" || i.xtype === "hidden" || !i.hasOwnProperty("key")){
                return;
            }

            pData[i.key] = i.getValue();
        });

        return $.isEmptyObject(pData) ? "" : JSON.stringify(pData);
    },

    setValue: function(value) {
        this.panelValue.setValue(value);

        var pData = JSON.parse(value);

        this.items.each(function(i){
            if(i.xtype === "label" || i.xtype === "hidden" || !i.hasOwnProperty("key")){
                return;
            }

            if(!pData[i.key]){
                return;
            }

            i.setValue(pData[i.key]);
        });
    },

    validate: function(){
        return true;
    },

    getName: function(){
        return this.name;
    }
});

CQ.Ext.reg("multifieldpanel", ACS.CQ.MultiFieldPanel);	
/*
 * #%L
 * ACS AEM Commons Package
 * %%
 * Copyright (C) 2013 Adobe
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */
/*global CQ: false, ACS: false */
ACS.CQ.Util = ACS.CQ.Util || {};
ACS.CQ.Util.isVanityPathUnique = function(vanityPath, pagePath) {
    var response = CQ.HTTP.get("/bin/wcm/duplicateVanityCheck?vanityPath=" + vanityPath + "&pagePath=" + pagePath),
        paths = JSON.parse(response.responseText);

    return paths.length === 0;
};

CQ.Ext.apply(CQ.Ext.form.VTypes, {
    uniqueVanityPath: function(value, field) {
        var dialog = field.findParentByType("dialog");
        return ACS.CQ.Util.isVanityPathUnique(value, dialog.path);
    },
    uniqueVanityPathText: "The vanity path must be unique."
    
});


/*
 * #%L
 * ACS AEM Commons Package
 * %%
 * Copyright (C) 2014 Adobe
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */
/*global CQ: false, ACS: false */
CQ.Ext.ns("ACS.CQ.ColumnControl");

ACS.CQ.ColumnControl.validateDialog = function(dialog) {
    var fields = dialog.findByType("numberfield"),
        expectedTotal = 100,
        width = 0;

    CQ.Ext.each(fields, function(field) {
        width += field.getValue();
    });

    if (width !== expectedTotal) {
        CQ.Ext.Msg.show({
            title:'Validation Error',
            msg:'Total width of all columns needs to be exactly 100 percent!',
            buttons: CQ.Ext.MessageBox.OK,
            icon:CQ.Ext.MessageBox.ERROR
            });
        return false;
    }
    return true;
};

/*
 * #%L
 * ACS AEM Commons Package
 * %%
 * Copyright (C) 2013 Adobe
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */
/*global CQ: false */
(function() {
    var Original = CQ.wcm.FeedImporter;

    CQ.wcm.FeedImporter = function(config) {
        var selections, selection, additions, parsedAdditions;

        CQ.wcm.FeedImporter.prototype.constructor.call(this, config);

        selections = this.newDialog.findBy(function() {
                return this.xtype === 'selection' && this.name === 'feedType';
            });
        if (selections.length === 1) {
            selection = selections[0];
            additions = CQ.shared.HTTP.get("/bin/acs-commons/custom-importers.json");
            if (additions && additions.body) {
                parsedAdditions = CQ.Ext.util.JSON.decode(additions.body);
                if (parsedAdditions.list) {
                    $.each(parsedAdditions.list, function(idx, addition) {
                        selection.options.push(addition);
                    });
                }
            }
            selection.setOptions(selection.options);
        }
    };
    CQ.wcm.FeedImporter.prototype = Original.prototype;
    CQ.wcm.FeedImporter.superclass = Original.superclass;

    CQ.Ext.reg("feedimporter", CQ.wcm.FeedImporter);
}());

/*
 * #%L
 * ACS AEM Commons Package
 * %%
 * Copyright (C) 2014 Adobe
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */
/*global CQ: false, ACS: false */
CQ.Ext.ns("ACS.CQ.GenericListItem");

ACS.CQ.GenericListItem.addTitleFields = function(panel) {
    CQ.HTTP.get("/etc/tags.json", function(options, success, response) {
        var obj, fieldset, allLanguages = CQ.I18n.getLanguages();
        if (success) {
            obj = CQ.Ext.util.JSON.decode(response.responseText);
            if (obj.languages) {
                fieldset = {
                    xtype: 'fieldset',
                    title: 'Localization',
                    defaultType: 'textfield',
                    collapsible: true,
                    defaults: {
                        anchor: '-20'
                    },
                    items:[]
                };
                CQ.Ext.each(obj.languages, function(lang) {
                    var langInfo = allLanguages[lang];
                    if (langInfo) {
                        fieldset.items.push({
                            fieldLabel : langInfo.title,
                            name : './jcr:title.' + lang
                        });
                    }
                });
                if (!CQ.Ext.isEmpty(fieldset.items)) {
                    panel.add(fieldset);
                }
            }
        }
    });
};

