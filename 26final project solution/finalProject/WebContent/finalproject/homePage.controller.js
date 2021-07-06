sap.ui.controller("finalproject.homePage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf finalproject.homePage
*/
	onInit: function() {

		
		var i18nPath = "i18n/i18n.properties";
		
		var oi18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl:i18nPath
		});
		sap.ui.getCore().setModel(oi18nModel,"i18n");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf finalproject.homePage
*/
//	onBeforeRendering: function() {
//
//	},
	
	//This will navigate the app to product search page
	goToProductSearch: function(oEvt){
		app.to("idSearchProductPage");
		
	},
	
	//This will navigate the app to product analytics page
	goToProductAnalytics: function(oEvt){
		//Before going to analytics page we need to bind the bar chart data
		var sUrlAnalytics = "http://services.odata.org/V3/OData/OData.svc/Products?$top=5&$orderby=Rating&$format=json";
		
		//Getting the Data and putting in list model
    	sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(sUrlAnalytics),"barChart");
    	
		app.to("idProductsAnalyticsPage");
		
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf finalproject.homePage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf finalproject.homePage
*/
//	onExit: function() {
//
//	}

});