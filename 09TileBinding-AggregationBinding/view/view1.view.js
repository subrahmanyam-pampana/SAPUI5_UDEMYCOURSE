sap.ui.jsview("myApp.view.view1", {
  getControllerName: () => {
    return "myApp.controller.view1";
  },

  createContent: (oController) => {

    //1.creating data
    var oData = {
      Students: [
        { title: "subrahmanyam", icon: "sap-icon://cloud", info: "My name is subrahmanyam"},
        { title: "Revathi", icon: "sap-icon://sap-ui5", info: "My name is Revathi"},
        { title: "Pampana", icon: "sap-icon://sap-ui5", info: "My name is Pampana"},
        { title: "subrahmanyam", icon: "sap-icon://sap-ui5", info: "My name is subrahmanyam"},
        { title: "Revathi", icon: "sap-icon://sap-ui5", info: "My name is Revathi"},
        { title: "Pampana", icon: "sap-icon://sap-ui5", info: "My name is Pampana"}
      ],
    };

    // 2.creating Model
    var oModel = new sap.ui.model.json.JSONModel(oData);

    var aTemplate = new sap.m.StandardTile({
      title:"{title}",
      icon:"{icon}",
      info:"{info}"
    })
    
    var oPageContent  = new sap.m.TileContainer({});
    oPageContent.setModel(oModel);

    //bindAggregation("aggregationName",path,template)
    oPageContent.bindAggregation("tiles","/Students",aTemplate);
    

    //6.creating page
    var oPage = new sap.m.Page({
      title: "My First demo App",
      content: [oPageContent],
    });

    return oPage;
  },
});
