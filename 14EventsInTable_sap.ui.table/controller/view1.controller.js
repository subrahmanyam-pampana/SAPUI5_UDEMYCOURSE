sap.ui.controller("myApp.controller.view1", {
  onInit: () => {},
  onAfterRendering: () => {},
  getCellValue: (oEvent) => {
    
    console.log(oEvent);
    var sName = oEvent.getParameters().rowBindingContext.getProperty("name");

    if (sName !== undefined) {
      var oData = {
        name: sName,
      };

      sap.ui
        .getCore()
        .setModel(new sap.ui.model.json.JSONModel(oData), "labelModel");

      app.to("Page2");
    }
  },
});
