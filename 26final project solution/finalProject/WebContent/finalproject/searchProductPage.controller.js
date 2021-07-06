sap.ui.controller("finalproject.searchProductPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf finalproject.searchProductPage
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf finalproject.searchProductPage
*/
//	onBeforeRendering: function() {
//
//	},
	
	/*When searching product*/
	onSearchProduct:function(oEvt){
		
		//Getting the value of the search box by navigating by oController object
		//which is present in this reference
		//we can also use simple sap.ui.getCore().byId("idSearchProd").getValue() also
	
		var sProduct = this.getView().getContent()[0].getContent()[0].getValue();
		
		if(sProduct !== undefined || sProduct !== ""){
		
			var sUrl = "http://services.odata.org/V3/OData/OData.svc/Products?$filter=substringof('"+sProduct+"', Name) eq true&$format=json";
			var oModel = new sap.ui.model.json.JSONModel(sUrl);
			//Getting the Data and putting in list model
	    	sap.ui.getCore().setModel(oModel,"list");
			
		}
		
		
	},
	
	/*When we press on the list item of product */
	onProductListPress : function(oEvt){
		var sProductPress =  oEvt.getParameters().listItem.getProperty("title");
		
		var sUrl = "http://services.odata.org/V3/OData/OData.svc/Products?$filter=substringof('"+sProductPress+"', Name) eq true&$format=json";
		var oModel = new sap.ui.model.json.JSONModel(sUrl);
		//Getting the Data and putting in list model
    	sap.ui.getCore().setModel(oModel,"table");
		
		app.to("idProductDetailPage");
		
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf finalproject.searchProductPage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf finalproject.searchProductPage
*/
//	onExit: function() {
//
//	}

});