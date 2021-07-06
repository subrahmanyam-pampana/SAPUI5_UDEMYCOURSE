sap.ui.controller("myApp.controller.view1", {

  onInit: () => {
   
  },

  goToSecoundPage: (oEvent) => {
    var oInputVal = sap.ui.getCore().byId("inputUserName").getValue();
    console.log(oInputVal);
    if (oInputVal != undefined && oInputVal !="") {
      sap.ui.getCore().byId("idNameLabel").setText(oInputVal);
      app.to("idPage2");
    }else{
        sap.m.MessageToast.show("Please Enter Name");

    }
  },
});
