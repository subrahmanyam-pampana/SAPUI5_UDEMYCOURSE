sap.ui.jsview("myApp.view.view1", {
  getControllerName: () => {
    return "myApp.controller.view1";
  },

  createContent: (oController) => {
    
    var oList = new sap.m.List({
      headerText: "my List",
      itemPress: [oController.getData,oController]
    });

    oList.bindAggregation(
      "items",
      "/students",
      new sap.m.StandardListItem({
        title: "{name}",
        description: "{favCar}",
        icon: "sap-icon://sap-ui5",
        type: sap.m.ListType.Navigation
      })
    );


    return new sap.m.Page({
      title:"First page",
      content:[oList]
    })
    
  },
});
