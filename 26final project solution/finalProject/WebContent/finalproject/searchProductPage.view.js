sap.ui.jsview("finalproject.searchProductPage", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf finalproject.searchProductPage
	 */
	getControllerName : function() {
		return "finalproject.searchProductPage";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf finalproject.searchProductPage
	 */
	createContent : function(oController) {
		var oSubHeader = new sap.m.Bar({
			contentLeft : [ new sap.m.Button({
				icon : "sap-icon://nav-back",
				press : function(oEvt) {
					app.back();
				}
			}) ],
			contentMiddle : [ new sap.m.Label({
				text : "{i18n>app_subhead_1}"
			}) ]

		});

		var oSearchProd = new sap.m.SearchField("idSearchProd",{

			placeholder : "{i18n>search_prod_palce_hold}",
			search:[oController.onSearchProduct,oController],

		}).addStyleClass("prodSearchInput");
		var oList = new sap.m.List({
			itemPress:[oController.onProductListPress,oController]
		}).addStyleClass("listSearchInput");

		// bind the oList items to the oData collection
		oList.bindItems({
			path : "list>/value",
			template : new sap.m.StandardListItem({
				title : "{list>Name}",
				description : "{list>Description}",
				type: sap.m.ListType.Navigation	
			})
		});

		var oPage = new sap.m.Page({
			title : "{i18n>app_head}",
			showSubHeader : true,
			subHeader : oSubHeader,
			content : [ oSearchProd, oList ]
		});

		return oPage;
	}

});