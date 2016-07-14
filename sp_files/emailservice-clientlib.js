CQ.EmailService = CQ.EmailService || {};
CQ.EmailService.getConfiguration = function(){
	  var et = document.getElementsByName("cfgpath");
      var cfgPath = "";
      if(et.length > 0){
          cfgPath = et[0].value;
      }	
      return cfgPath;
}

CQ.EmailService.checkEmailService = function()
{
	//context
    if(document.getElementsByName("cfgpath").length == 0){                  
          if(this.xtype=='panel')
          {
        	  this.add({
                "xtype": "static",
                "italic": true,
                "small": true,
                "style": "color:gray;",
                "text": CQ.I18n.getMessage("Email Service not configured")
              });
        	  this.doLayout();
          }
          return false;
    }
    return true;
}
CQ.EmailServiceActionsConfig = (function(){
	var optionsCache = {};
	var formAttributesCache = {};
	var ATTRIBUTES_DISPLAY_TPL= new CQ.Ext.XTemplate('<table border="0"><tr><th>&nbsp;&nbsp;Attribute</th><th>&nbsp;&nbsp;Type</th><th>&nbsp;&nbsp;Required</th></tr>',
			   '<tpl for=".">',
			   '<tr><td>&nbsp;&nbsp;{name}</td><td>&nbsp;&nbsp;{type}</td><td>&nbsp;&nbsp;{required}</td></tr>',
			   '</tpl>',
			   '</table>');
	return {
			
			ADD_SUBSCRIBER: "addSubscriber",
			DELETE_SUBSCRIBER:"deleteSubscriber",
			AUTO_RESPONDER:"autoResponder",
			actionsDialogPath:{},
			getProviders: function(){
				var opts = [];
				var es = document.getElementsByName("cfgpath");
				for(var i = 0 ; i < es.length ; i++)
				{
					var v1 = es[i].value;
					var t1 = es[i].value.substr(es[i].value.lastIndexOf('/') + 1);
					opts.push({value:v1,text:t1});
				}
			    opts.sort(function(l1, l2) {
			        if (l1.text < l2.text) {
			            return -1;
			        } else if (l1.text == l2.text) {
			            return 0;
			        } else {
			            return 1;
			        }
			    });
			    return opts;	
		    },
			getESListOptions: function(contentPath) {
				
					var filters;
					if(this.filters && typeof this.filters == "function")
						filters = this.filters();
			        return CQ.EmailServiceActionsConfig.getOptions(contentPath,"getlist",filters);
			},

		    getESEmailOptions: function(contentPath){
				var filters;
				if(this.filters && typeof this.filters == "function")
					filters = this.filters();		    	
		    	return CQ.EmailServiceActionsConfig.getOptions(contentPath,"getemails",filters);
		    },
			getESEmailClassificationOptions: function(contentPath) {
			
				return CQ.EmailServiceActionsConfig.getOptions(contentPath,"getemailclassifications");
			},
			getOptions: function(contentPath,operation,filterParams) {
				//this function caches the options fetched using the key cfgPath(calculated below) + operation + filterParams			
			try{
			  var opts = []; 
			  var cfgPath = CQ.EmailService.getConfiguration();
			  if(cfgPath == undefined || cfgPath === "")
				  return opts;
			  var cacheKey = cfgPath + operation + (filterParams ? filterParams : "");
			  if(optionsCache[cacheKey])
				  return optionsCache[cacheKey].slice(0); 		      
	          var url =  "/_jcr_content.emailservice.json?operation=" + operation + "&cfgpath=" + cfgPath + (filterParams? "&" +filterParams : "");
	          var url1 = CQ.HTTP.get(url);
	          var data = CQ.HTTP.eval(url1);
	          if(!data || data.error){
	        	  return [];
	          }
			  for (var item in data ) {
			
			    var t1= data[item].name;
			    var v1= data[item].id;
			    if(t1 && v1){
			        opts.push({value: v1, text: t1});
			    }
			  }
	             
	          opts.sort(function(l1, l2) {
	                if (l1.text < l2.text) {
	                    return -1;
	                } else if (l1.text == l2.text) {
	                    return 0;
	                } else {
	                    return 1;
	                }
	            });
	            optionsCache[cacheKey] = opts;	          
	            return opts.slice(0);
	          } catch (e) {
	            CQ.Log.error("CQ.utils.WCM#"+ operation + " failed: " + e.message);
	          }
	          return [];		
	       },
		   getFormAttributes:function(filterParams){
	    	   
	    	  var cacheKey = filterParams;
	    	  if(formAttributesCache[cacheKey])
	    		  return formAttributesCache[cacheKey].slice(0);
			  var cfgPath = CQ.EmailService.getConfiguration();
	          var url =  "/_jcr_content.emailservice.json?operation=getFormFields" + "&cfgpath=" + cfgPath + (filterParams? "&" +filterParams : "");
	          var url1 = CQ.HTTP.get(url);
	          var data = CQ.HTTP.eval(url1);
	          formAttributesCache[cacheKey] = data;
	          return data.slice(0);
	       },
	       showFormAttributesMetadata:function(configTab,attrMetadata){
	    	   try{
		    	   if(configTab && configTab.xtype=="dialogfieldset"){
		    		   var formFields = configTab.find('name','formFields')[0];
		    		   if(!formFields)
		    			   return;	    		   
		        	  var div = document.createElement("div");
		        	  ATTRIBUTES_DISPLAY_TPL.overwrite(div,attrMetadata);
		        	  formFields.updateHtml(div.innerHTML);
		        	  configTab.doLayout();
			        }
	    	   }catch(e){
	    		   CQ.Log.debug("Error occured while showing form fields:{0}",e.message);
		       }
	       },
	       getFilters:function(container,filterParams){
	    	   if(!(container.find && filterParams instanceof Array) )
	    		   return "";
	    	   var filter = "";
	    	   var flag = false;
	    	   for(var i=0; i < filterParams.length; i++)
	    	   {
	    		   var filterName = filterParams[i];
	    		   var filterValue = container.find('name', filterName)[0];
	    		   if(!filterValue.getValue)
	    		   	   continue;
	    		   if(flag)
	    			   filter += "&";
	    		   filter += filterName + '=' + filterValue.getValue() ;
	    		   flag = true;
	    		   
	    	   }
	    	   return filter;
	       },
	       updateConfigComponent:function(component,parent){
				try{
		    	    component.processPath();
					component.setValue();
					parent.doLayout();
				}catch(e){
					CQ.Log.error("EmailServiceActionsConfig#updateConfigComponent failed for {0}: {1}",component.name,e.message);
				}
	       }
	}
})();

CQ.EmailServiceActionsConfig.actionSelection = CQ.Ext.extend(CQ.form.Selection,{
	

    constructor: function(config) {
        var defaults = {

        };

        CQ.Util.applyDefaults(config, defaults);
        CQ.EmailServiceActionsConfig.actionSelection.superclass.constructor.call(this,config);
        this.processPath();
    },
    /**
     * Overwrite handling of the initial case where value is not set yet.
     */
    setValue: function(value) {
    	var previousValue = this.getValue();
        if (typeof value == "undefined" || value === null){
            try{
                value = this.optionsConfig.store.data.items[0].data.value;
            }
            catch (e)
            {
                CQ.Log.debug("Error EmailServiceActionSelection option data not initialized: {0}", e.message);            
            }
        }
        CQ.EmailServiceActionsConfig.actionSelection.superclass.setValue.call(this, value);
        if(value!=previousValue)
            this.fireEvent('selectionChanged', this);
    }    
});

CQ.Ext.reg("emailServiceActionSelection", CQ.EmailServiceActionsConfig.actionSelection);

CQ.EmailServiceActionsConfig.addActionConfiguration = function(action,configTab,record){
	try{
		if(configTab.xtype!="dialogfieldset")
			return;
		var config = CQ.EmailServiceActionsConfig.fetchActionConfiguration(action);
		if(config){
			var form = configTab.findParentByType('form').getForm();
			for(var i in config){
                if (!config[i] || (typeof config[i] == "string") || (typeof config[i] == "boolean")) {
                    continue;
                }
                var wi = configTab.add(config[i]);
                form.add(wi);
                configTab.doLayout();
                if(typeof wi.processRecord == 'function')
                	wi.processRecord(record);
			}
		}
	}catch(e){
        CQ.Log.debug("Error while adding action configuration{0} : {1}", action,e.message);
	}
};

CQ.EmailServiceActionsConfig.fetchActionConfiguration = function(action){
	if(typeof action != "string")
		return undefined;
	var url = CQ.EmailServiceActionsConfig.actionsDialogPath[action]; 
	if(!url)
		return undefined;
	return CQ.utils.Util.formatData(CQ.HTTP.eval(url));
};
