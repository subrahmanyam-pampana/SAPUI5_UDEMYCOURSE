sap.ui.jsview("finalproject.homePage", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf finalproject.homePage
	 */
	getControllerName : function() {
		return "finalproject.homePage";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf finalproject.homePage
	 */
	createContent : function(oController) {

		var oTileSearchProd = new sap.m.StandardTile({

			title : "{i18n>tile_title_1}",
			press:[oController.goToProductSearch,oController]

		});
		var oTileTopRatedProd = new sap.m.StandardTile({

			title : "{i18n>tile_title_2}",
			press:[oController.goToProductAnalytics,oController]
			
		});

		var oTileCont = new sap.m.TileContainer({
			tiles : [ oTileSearchProd, oTileTopRatedProd ]

		});
		var oPage = new sap.m.Page({
			title : "{i18n>app_head}",
			enableScrolling : false,
			content : [ oTileCont]
		});

		return oPage;
	}

});