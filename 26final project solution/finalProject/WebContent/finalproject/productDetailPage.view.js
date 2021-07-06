sap.ui.jsview("finalproject.productDetailPage", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf finalproject.productDetailPage
	 */
	getControllerName : function() {
		return "finalproject.productDetailPage";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf finalproject.productDetailPage
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
				text : "{i18n>app_subhead_2}"
			}) ]

		});

		var oColID = new sap.m.Column({
			header : new sap.m.Label({
				text : "{i18n>table_col_1}"
			})

		});
		var oColName = new sap.m.Column({
			header : new sap.m.Label({
				text : "{i18n>table_col_2}"
			})
		});
		var oColDesc = new sap.m.Column({
			header : new sap.m.Label({
				text : "{i18n>table_col_3}"
			})
		});
		var oColPrice = new sap.m.Column({
			header : new sap.m.Label({
				text : "{i18n>table_col_4}"
			})
		});
		var oColRating = new sap.m.Column({
			header : new sap.m.Label({
				text : "{i18n>table_col_5}"
			})
		});

		var oTable = new sap.m.Table({
			columns : [ oColID, oColName, oColDesc, oColPrice, oColRating ]

		}).addStyleClass("tableSearchInput");
		oTable.bindItems({
			path : "table>/value",
			template : new sap.m.ColumnListItem({
				cells : [ new sap.m.Text({
					text : "{table>ID}"
				}), new sap.m.Text({
					text : "{table>Name}"
				}), new sap.m.Text({
					text : "{table>Description}"
				}), new sap.m.Text({
					text : "{table>Price}"
				}), new sap.m.Text({
					text : "{table>Rating}"
				})

				]
			})
		})

		var oPage = new sap.m.Page({
			title : "UI5 Assignment App",
			showSubHeader : true,
			subHeader : oSubHeader,
			content : [ oTable ]
		});

		return oPage;
	}

});