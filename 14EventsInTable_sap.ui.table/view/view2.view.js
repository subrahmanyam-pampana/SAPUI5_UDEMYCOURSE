sap.ui.jsview("myApp.view.view2", {
  getControllerName: () => {
    return "myApp.controller.view2";
  },

  createContent: (oController) => {
    
    var oLabel = new sap.m.Label({text:"{labelModel>/name}"});

    var oPage = new sap.m.Page({
      title: "Secound page",
      content: [oLabel],
      showNavButton:true,
      navButtonPress:(oEvent)=>{
        app.back();
      }
    });

    return oPage;
  },
});
