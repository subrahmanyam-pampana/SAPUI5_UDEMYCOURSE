sap.ui.jsview("finalproject.productsAnalyticsPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf finalproject.productsAnalyticsPage
	*/ 
	getControllerName : function() {
		return "finalproject.productsAnalyticsPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf finalproject.productsAnalyticsPage
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
				text : "{i18n>app_subhead_3}"
			}) ]

		});

		var oDataChart = new sap.viz.core.FlattenedDataset({
            dimensions: [{
                    axis: 1,
                    name: "{i18n>chart_x}",
                    value: "{barChart>Name}"
                }
                
            ],
            measures: [{
                name: '{i18n>chart_y}',
                value: '{barChart>Rating}'
            }],
            data: {
                path: "barChart>/value"
            }
        });
		var oBarChart = new sap.viz.ui5.Bar({

            width: "80%",
            title: {
                visible: false
            },
            dataset: oDataChart
        });


		var oPage = new sap.m.Page({
			title : "{i18n>app_head}",
			showSubHeader : true,
			subHeader : oSubHeader,
			content : [ oBarChart ]
		});

		return oPage;
	}

});