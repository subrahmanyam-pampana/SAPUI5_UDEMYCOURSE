sap.ui.controller("myApp.controller.products", {
  onInit: function () {
    this.oDataUrl = "https://services.odata.org/V3/OData/OData.svc/Products";
    this.oModel = new sap.ui.model.json.JSONModel();
    this.oModel.loadData(this.oDataUrl);
    sap.ui.getCore().setModel(this.oModel, "productsList");
  },
  searchProducts: function (oEvent) {
    var sVal = oEvent.getParameters().newValue;

    var oFilterDataUrl =
      this.oDataUrl + "?$filter=substringof('" + sVal + "', Name) eq true";
    this.oModel.loadData(oFilterDataUrl);
  },
  ShowDetails: function (oEvent) {
    var sName = oEvent.getParameters().listItem.getTitle();

    var oDataUrl = "https://services.odata.org/V3/OData/OData.svc/Products";

    oDataUrl += "?$top=20&$filter=Name eq '" + sName + "'";

    var oModel = new sap.ui.model.json.JSONModel();

    oModel.loadData(oDataUrl);
    sap.ui.getCore().setModel(oModel, "productDetModel");

    app.to("idProductDetailsPage");
  },
});
