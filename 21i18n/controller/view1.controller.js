sap.ui.controller("myApp.controller.view1", {

  onInit: () => {
    
    var sLoc = sap.ui.getCore().getConfiguration().getLanguage();
		var i18nPath = "i18n/i18n";
		if(sLoc === "de_DE"){
			i18nPath = i18nPath +"_de.properties";
		}else if(sLoc === "zh-Hans"){
			i18nPath = i18nPath +"_ch.properties";
		}else{
			
			i18nPath = i18nPath +".properties";
		}
			
		var oi18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl:i18nPath
		});
		sap.ui.getCore().setModel(oi18nModel,"i18n");
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
