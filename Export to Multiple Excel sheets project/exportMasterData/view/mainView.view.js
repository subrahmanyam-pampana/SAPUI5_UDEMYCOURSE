sap.ui.jsview("root.view.mainView", {
  getControllerName: () => {
    return "root.controller.mainView";
  },

  createContent: (oController) => {
    var oButton = new sap.m.Button({
      text:"Download",
      press:[oController.downloadExcel,oController]
    })
    var oPage = new sap.m.Page({
      title: "Export Master Data",
      content: [oButton],
    });

    return oPage;
  },
});
