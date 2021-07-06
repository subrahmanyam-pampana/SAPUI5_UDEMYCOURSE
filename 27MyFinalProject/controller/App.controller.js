sap.ui.controller("myApp.controller.App", {
  onInit: function () {
    var sLoc = sap.ui.getCore().getConfiguration().getLanguage();
    var i18nPath = "i18n/i18n";
    if (sLoc === "de_DE") {
      i18nPath = i18nPath + "_de.properties";
    } else if (sLoc === "zh-Hans") {
      i18nPath = i18nPath + "_ch.properties";
    } else {
      i18nPath = i18nPath + ".properties";
    }

    var oi18nModel = new sap.ui.model.resource.ResourceModel({
      bundleUrl: i18nPath,
    });
    sap.ui.getCore().setModel(oi18nModel, "i18n");
  },
  goToNextPage: function (oEvent, sValue) {
    if (sValue === "products") {
      app.to("idProductsPage");
    } else if (sValue === "ratedProducts") {
      var dataUrl = "https://services.odata.org/V3/OData/OData.svc/Products";

      var filterUrl = dataUrl + "?$filter=Rating le 5&$orderby=Rating desc";

      var oModel = new sap.ui.model.json.JSONModel();

      oModel.loadData(filterUrl);

      sap.ui.getCore().setModel(oModel, "TopRatedProModel");

      app.to("idRatedProductsPage");
    }
  },

  // onBeforeRendering: function(){},

  // onAfterRendering: function(){},

  // onExit:  function(){},

  // myCustomFunction: function(oEvent){}
});
