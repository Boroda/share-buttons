CQ.wcm.DamAdmin.internalDeleteAsset = function() {
    function deleteAsset() {
        CQ.Ext.Ajax.request({
            url: '/etc/workflow/instances',
            method: 'POST',
            disableCaching: true,
            async: true,
            params: {
                'model': '/etc/workflow/models/fgl/fgl-dam--delete-scene7-asset/jcr:content/model',
                'payload': paths,
                'payloadType': 'JCR_PATH'
            },
            success: function(options) {
                var status = options.status;
                if (status === 201) {
                    //close possible asset editor
                    for (var i = 0; i < selections.length; i++) {
                        var id = CQ.DOM.encodeId(selections[i].id);
                        var editor = CQ.Ext.getCmp(id);
                        if (editor) {
                            var tabPanel = CQ.Ext.getCmp(window.CQ_SiteAdmin_id + "-tabpanel");
                            tabPanel.remove(editor);
                        }
                    }
                    CQ.Notification.notify('Success', 'Remove asset workflow has started successfully.');
                } else {
                    this.unmask();
                    CQ.Notification.notify('Failure', 'Failed to remove asset.');
                }
            }
        });
    }
    var selections = this.getSelectedPages();
    // collect necessary information
    var paths = [];
    for (var i = 0; i < selections.length; i++) {
        var selection = selections[i];
        paths.push(selection.id);
    }
    deleteAsset();
};
/**
 * @property fileName
 * The keystroke mask to be applied on name input (spaces are allowed).
 * This is a custom validation type that created for validation uploading files in DAM and Site Admin.
 * @member CQ.Ext.form.VTypes
 */
CQ.Ext.apply(CQ.Ext.form.VTypes, {
    fileName:  function(v) {
        var maskResult = /^([^\|\[\]\*\/: \.\']+|[^\|\[\]\*\/: \.\']+[^\|\[\]\*\/:\']*[^\|\[\]\*\/: \']+)$/.test(v);

        return maskResult;
    },
    fileNameText: CQ.I18n.get('The name must not contain<br><br>/ : [ ] * | \'<br><br>nor must it start with a space or a period<br>nor end with a space.'),
    fileNameMask: /^[^\|\[\]\*\/:\']$/
});
/**
 * @class CQ.html5.UploadDialog
 * @extends CQ.Dialog
 * The UploadDialog lets the user upload files to the repository using HTML5
 * Creates a new UploadDialog.
 * @since 5.5, replaces {@link CQ.UploadDialog}
 * @param {Object} config The config object
 */
CQ.html5.UploadDialog = CQ.Ext.extend(CQ.Dialog, {

    productNameRegex: /(\w*)_\d{1,2}_[a-zA-Z]\.\w+/,

    destinationPath: null,

    /**
     * @cfg {String} useHTML5
     * True to use HTML5 upload. Defaults to true.
     */
    useHTML5: true,

    createVersion: false,

    constructor: function(config) {
        var dialog = this;

        this.useHTML5 = config.useHTML5 != undefined ? config.useHTML5 : true;

        if (!CQ.html5.Util.isUploadSupported()) {
            this.useHTML5 = false;
        }

        // Default configuration
        CQ.Util.applyDefaults(config, {
            closable: true,
            resizable: true,
            autoHeight: false,
            autoWidth: false,
            cls: "cq-uploaddialog",
            okText: CQ.I18n.getMessage("Upload"),
            buttons: CQ.Dialog.OKCANCEL,
            title: CQ.I18n.getMessage("Upload Assets"),
            formUrl: CQ.HTTP.externalize(CQ.shared.HTTP.encodePath(config.destinationPath)),
            fileUpload: true,
            height: 300,
            width: 400,
            useHTML5: this.useHTML5,
            items: {
                xtype: "panel",
                items: [
                    {
                        xtype: "static",
                        cls: "x-form-item-description",
                        html: CQ.I18n.getMessage("Upload to") + ": " + config.displayPath
                    },
                    dialog.makeFileUploadField(this.useHTML5)
                ]
            },
            listeners: {
                beforesubmit: dialog.onBeforeSubmit,
                filenamechanged: dialog.onFileNameChanged,
                fileremoved: dialog.onFileRemoved,
                fileselected: dialog.onFileSelected,
                fileuploaderror: dialog.onFileUploadError,
                fileuploadok: dialog.onFileUploadOk,
                queuechanged: dialog.onQueueChanged,
                queueprocessed: dialog.onQueueProcessed
            },
            success: function() {
                window.setTimeout(function() {
                    dialog.hideAndReload();
                }, 1000);
            },
            failure: function() {
                if (dialog.canceled) {
                    // Upload has been canceled, "fail" silently
                    dialog.hideAndReload();
                    dialog.canceled = false;
                } else {
                    var title = CQ.I18n.getMessage("Error");
                    var msg = dialog.uploadFailed.length == 1 ?
                            CQ.I18n.getMessage("Failed to upload the following file:") :
                            CQ.I18n.getMessage("Failed to upload the following files:");
                    msg += "<br/><br/>";
                    for (var i = 0; i < dialog.uploadFailed.length; i++) {
                        msg += CQ.shared.XSS.getXSSValue(dialog.uploadFailed[i]) + "<br/>";
                    }
                    CQ.Ext.Msg.show({
                        title: title,
                        msg: msg,
                        icon: CQ.Ext.Msg.ERROR,
                        buttons: CQ.Ext.Msg.OK,
                        fn: function() {
                            dialog.hideAndReload();
                        }
                    });
                }
            }
        });

        CQ.html5.UploadDialog.superclass.constructor.call(this, config);
    },

    initComponent: function() {
        this.queue = [];

        this.addEvents(
            "fileuploadok",
            "fileuploaderror",
            "queuechanged",
            "queueprocessed"
        );

        CQ.html5.UploadDialog.superclass.initComponent.call(this);
    },

    // private
    hideAndReload: function() {
        if (this.mask) {
            this.mask.hide();
        }
        this.hide();
        var siteAdmin = CQ.Ext.getCmp(window.CQ_SiteAdmin_id);
        if (siteAdmin) siteAdmin.reloadPages();
    },

    /**
     * Adds a file to upload queue
     * @param {Object} file File to add to the upload queue
     */
    addFile: function(uploadField, file) {
        var fileName = file.name ? file.name : file;
        if (!this.getQueueItemByFileName(fileName)) {
            // Add an upload field for the file
            var newUploadField;
            var newItem;
            if (this.useHTML5) {
                newUploadField = uploadField.ownerCt.add(
                    this.makeFileUploadField(this.useHTML5, file)
                );
                newItem = {
                    file: file,
                    fileName: fileName,
                    fileSize: file.size,
                    // Newly created upload field contains file information
                    uploadField: newUploadField
                };
            } else {
                uploadField.ownerCt.add(
                    this.makeFileUploadField(this.useHTML5)
                );
                newItem = {
                    fileName: file,
                    // Current upload field contains file information
                    uploadField: uploadField
                };
            }

            // Add item to queue
            this.queue.push(newItem);
            this.fireEvent("queuechanged");
        } else {
            if (!this.useHTML5) {
                // Delete upload field and add a new one instead
                uploadField.ownerCt.add(
                    this.makeFileUploadField(this.useHTML5)
                );
                uploadField.clearFile();
            }
        }
    },

    /**
     * Gets the upload parent path
     * @return {String} Upload parent path
     */
    getParentPath: function() {
        // For DAM assets, remove the create selector. Otherwise, just use provided path
        return this.formUrl.replace(CQ.wcm.SiteAdmin.UPLOAD_URL_ASSET_REGEXP, "");
    },

    /**
     * Gets the URL to use for a POST request
     * @deprecated
     * @param {String} fileName Name of the file to upload
     * @return {String} POST request URL
     */
    getPostUrl: function(fileName) {
        return this.formUrl;
    },

    getQueueIndex: function(fileName) {
        var index = CQ.Ext.each(this.queue, function(item) {
            return !(item.fileName === fileName);
        });
        return CQ.Ext.isDefined(index) ? index : -1;
    },

    getQueueItem: function(index) {
        return index > -1 ? this.queue[index] : null;
    },

    getQueueItemByFileName: function(fileName) {
        return this.getQueueItem(this.getQueueIndex(fileName));
    },

    makeFileUploadField: function(html5Upload, file) {
        var dialog = this;

        return {
            xtype: 'html5fileuploadfield',
            hideLabel: true,
            name: name,
            fileNameParameter: ':assetname', // start name with ":" simply to not save the property
            allowFileNameEditing: true,
            vtype: 'fileName',
            invalidText: CQ.Ext.form.VTypes['fileNameText'],
            removable: true,
            html5Upload: html5Upload,
            fileNamePrefix: dialog.fileNamePrefix,
            targetEl: dialog,
            file: file
        };
    },

    onBeforeSubmit: function(dialog) {
        dialog.uploadFailed = [];

        var _this = this;

        var parent = CQ.HTTP.eval(CQ.HTTP.noCaching(dialog.getParentPath() + ".1.json"));

        function updateFileNames(parent) {
            var uploadfields = dialog.findByType("html5fileuploadfield");
            var conflictCounter;
            var updatedName;
            var updatedExt;

            for (var i = 0; i < uploadfields.length; i++) {
                var name = uploadfields[i].name || uploadfields[i].getValue();
                if (_this.productNameRegex.test(name)) {
                    CQ.HTTP.post(dialog.getParentPath() + "/" + CQ.shared.HTTP.encodePath(name), null, {
                        ":operation":"delete"
                    });
                }
                else {
                    if (parent[name]) {
                        conflictCounter = 1;
                        updatedExt = name.substring(name.lastIndexOf('.') + 1);
                        do {
                            updatedName = name.replace(/\.[^/.]+$/, '');
                            var pattern = updatedName.match(/\(\d+\)$/g);
                            if (pattern) {
                                updatedName = updatedName.replace(pattern[0], '(' + conflictCounter + ')') + '.' + updatedExt;
                            } else {
                                updatedName = updatedName + '(' + conflictCounter + ')' + '.' + updatedExt;
                            }
                            conflictCounter++;
                        } while (parent[updatedName]);
                        uploadfields[i].setName(updatedName);

                        _this.onFileNameChanged(uploadfields[i], updatedName, name);
                        parent[updatedName] = {};
                    } else {
                        // replace double quotes, see #34155
                        uploadfields[i].setName(uploadfields[i].getValue().replace(/"/g, "%22"));
                    }
                }
            }
        }

        updateFileNames(parent);

        var siteAdmin = CQ.Ext.getCmp(window.CQ_SiteAdmin_id);
        if (siteAdmin) {
            siteAdmin.mask();
        }
        return true;
    },

    onFileNameChanged: function(uploadField, newFileName, oldFileName) {
        var itemIndex = this.getQueueIndex(oldFileName);
        if (itemIndex > -1) {
            this.queue[itemIndex].fileName = newFileName;
        }
    },

    onFileRemoved: function(fileName) {
        var itemIndex = this.getQueueIndex(fileName);
        if (itemIndex > -1) {
            this.queue.splice(itemIndex, 1);
            this.fireEvent("queuechanged");
        }
    },

    onFileSelected: function(uploadField, files) {
        if (this.useHTML5) {
            // HTML5 upload: FileList is provided
            for (var i = 0; i < files.length; i++) {
                this.addFile(uploadField, files[i]);
            }
        } else {
            // Regular upload: only a file name is provided
            this.addFile(uploadField, files);
        }
        this.doLayout();
    },

    /**
     * Upload specific file from the queue
     * @param {Object} item Queue item
     */
    html5UploadFile: function(item) {
        // Replace upload field by a progress bar
        item.uploadField.initProgressBar();

        // Do upload
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = this.onFileUploadLoad.createDelegate(this, [item, xhr], 0);

        xhr.upload.addEventListener("progress", this.onFileUploadProgress.createDelegate(this, [item], 0), false);
        xhr.upload.addEventListener("error", this.onFileUploadError.createDelegate(this, [item], 0), false);

        var file = item.file;
        var fileName = item.fileName;
        if (window.FormData) {
            var f = new FormData();
            if (this.formUrl.match(CQ.wcm.SiteAdmin.UPLOAD_URL_ASSET_REGEXP)) {
                // Upload asset
                f.append("file", file);
                f.append("fileName", fileName);
            } else {
                // Upload file
                f.append(fileName, file);
            }
            f.append(CQ.Sling.CHARSET, "utf-8");

            xhr.open("POST", this.formUrl, true);
            xhr.send(f);
        } else {
            xhr.open("PUT", this.getParentPath() + "/" + CQ.shared.HTTP.encodePath(fileName), true);
            xhr.send(file);
        }
    },

    /**
     * Uploads queued files
     */
    html5UploadFiles: function() {
        // Disable upload button
        var button = CQ.Ext.getCmp(this.okButtonConfig.id);
        if (button) {
            button.setDisabled(true);
        }

        // Disable first upload field to prevent from selecting files
        var uploadFields = this.findByType("html5fileuploadfield");
        uploadFields[0].setDisabled(true);

        // Perform file upload
        for (var i = 0; i < this.queue.length; i++) {
            this.html5UploadFile(this.queue[i]);
        }
    },

    /**
     * Executes when file upload failed
     * @param {Object} item Queue item
     * @param {String} message Failure message
     */
    onFileUploadError: function(item, message) {
        item.uploadField.handleUploadProgress(item.file, 0, item.fileSize, message);

        if (this.uploadFailed) {
            this.uploadFailed.push(item.fileName);
        }
    },

    /**
     * Executes on file upload load
     * @param {Object} item Queue item
     * @param {Object} request XHR request
     * @param {Event} e Event
     */
    onFileUploadLoad: function(item, request, e) {
        if (request.readyState === 4) {
            if (CQ.HTTP.isOkStatus(request.status)) {
                this.fireEvent("fileuploadok", item);
            } else {
                this.fireEvent("fileuploaderror", item, request.responseText);
            }

            // Remove queue item
            this.queue.splice(this.getQueueIndex(item.fileName), 1);

            // Check queue length
            if (this.queue.length == 0) {
                this.fireEvent("queueprocessed");
            }
        }
    },

    /**
     * Executes when file was successfully uploaded
     * @param {Object} item Queue item
     */
    onFileUploadOk: function(item) {
        // Fill progress bar
        item.uploadField.handleUploadComplete();

        // Remove it
        window.setTimeout(function() {
            var el = item.uploadField.progressBar.getEl().parent("div[class*=x-form-item]");
            el.fadeOut({
                easing: "easeOut",
                endOpacity: 0,
                duration: 0,
                concurrent: false,
                remove: true
            });
        }, 100);
    },

    /**
     * Executes when more bytes have been uploaded for provided file
     * @param {Object} item Queue item
     * @param {Object} e Progress information
     */
    onFileUploadProgress: function(item, e) {
        // Update progress bar
        item.uploadField.handleUploadProgress(item.file, e.loaded, e.total);
    },

    onQueueChanged: function() {
        CQ.Ext.getCmp(this.okButtonConfig.id).setDisabled(this.queue.length == 0);
    },

    onQueueProcessed: function() {
        if (this.uploadFailed.length > 0) {
            this.failure();
        } else {
            this.success();
        }
    },

    ok: function(button) {
        var config = {};

        if (this.responseScope) {
            config.scope = this.responseScope;
            config.success = this.success ? this.success : this.responseScope.success;
            config.failure = this.failure ? this.failure : this.responseScope.failure;
        } else {
            config.scope = this;
            if (this.success) {
                config.success = this.success;
            }
            if (this.failure) {
                config.failure = this.failure;
            }
        }

        if (this.form.isValid()) {
            if (this.fireEvent("beforesubmit", this) === false) {
                return false;
            }

            var siteAdmin = CQ.Ext.getCmp(window.CQ_SiteAdmin_id);
            if (siteAdmin) {
                siteAdmin.mask();
            }

            if (this.useHTML5) {
                this.html5UploadFiles();

            } else {
                this.form.items.each(function(field) {
                    // Clear fields with emptyText so emptyText is not submitted
                    if (field.emptyText && field.el.dom.value == field.emptyText) {
                        field.setRawValue("");
                    }
                });

                var action = new CQ.form.UploadSubmitAction(this.form, config);
                this.form.doAction(action);

                var uploadFields = this.findByType("html5fileuploadfield");
                var maskMsg = (uploadFields.length == 2) ?
                    CQ.I18n.getMessage("Uploading file...") :
                    CQ.I18n.getMessage("Uploading files...");
                this.mask = new CQ.Ext.LoadMask(this.body, {
                    msg: maskMsg
                });
                this.mask.show();
            }

        } else {
            var invalids = [];
            this.form.items.each(function(f) {
                if (!f.validate()) {
                    invalids.push(f);
                }
            });
            var title = invalids.length == 1 ?
                CQ.I18n.getMessage('Invalid Name') :
                CQ.I18n.getMessage('Invalid Names');
            var msg = invalids.length == 1 ?
                CQ.I18n.getMessage("There is a file with an invalid name. Please verify the marked field.") :
                CQ.I18n.getMessage("There are files with invalid names. Please verify the marked fields.");
            CQ.Ext.Msg.show({
                title: title,
                msg: msg,
                buttons: CQ.Ext.Msg.OK,
                icon: CQ.Ext.Msg.ERROR
            });
        }
    },

    /**
     * Returns the config for the default OK button.
     * overrides CQ.Dialog#getOkConfig
     * @private
     * @return {Object} The config for the default OK button
     */
    getOkConfig: function() {
        if (!this.okButtonConfig) {
            this.okButtonConfig = {
                id: CQ.Ext.id(),
                text: this.okText,
                cls: "cq-btn-ok",
                disabled: true,
                handler: this.ok
            };
        }
        return this.okButtonConfig;
    },

    // overrides CQ.Dialog#getCancelConfig
    getCancelConfig: function() {
        return {
            text: this.cancelText,
            cls: "cq-btn-cancel",
            handler: function(button) {
                // scope: "this" is a dialog instance
                if (this.mask) {
                    this.mask.hide();
                }
                this.hide();
            }
        };
    }

});

CQ.Ext.reg('html5uploaddialog', CQ.html5.UploadDialog);
