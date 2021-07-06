sap.ui.controller("myFirstEvent.view2", {
  onInit: () => {
    var oModel = new sap.ui.model.json.JSONModel();
    sap.ui.getCore().setModel(oModel,"detailsModel");
  },
});
