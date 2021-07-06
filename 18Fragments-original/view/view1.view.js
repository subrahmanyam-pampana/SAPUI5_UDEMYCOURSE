sap.ui.jsview("myApp.view.view1", {
  getControllerName: () => {
    return "myApp.controller.view1";
  },

  createContent: (oController) => {
    var oBtn = new sap.m.Button({
      text: "Submit",
      press: [oController.myOpenFragment, oController],
    });

    var oPage = new sap.m.Page({
      title: "My First demo App",
      content: [oBtn],
    });

    return oPage;
  },
});
