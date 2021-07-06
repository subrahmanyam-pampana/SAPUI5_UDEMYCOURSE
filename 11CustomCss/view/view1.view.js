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
        { title: "Pampana", icon: "sap-icon://sap-ui5", info: "My name is Pampana"}
      ],
    };

    // 2.creating Model
    var oModel = new sap.ui.model.json.JSONModel(oData);

    var oPageContent = [
       new sap.m.Input({placeholder:"enter name"}).addStyleClass("Z_Input"),
       new sap.m.Button({text:"submit"}).addStyleClass("Z_Btn")

    ]


    //6.creating page
    var oPage = new sap.m.Page({
      title: "My First demo App",
      content: oPageContent,
    });

    return oPage;
  },
});
