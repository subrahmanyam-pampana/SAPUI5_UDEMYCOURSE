sap.ui.controller("finalproject.productDetailPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf finalproject.productDetailPage
*/
	onInit: function() {
		//Setting up a empty data table model and we update this model when we want to 
		//update table data
		sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel({}),"table");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf finalproject.productDetailPage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf finalproject.productDetailPage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf finalproject.productDetailPage
*/
//	onExit: function() {
//
//	}

});