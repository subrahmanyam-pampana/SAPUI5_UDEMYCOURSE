sap.ui.controller("myApp.controller.view1", {
  onInit: () => {
   

    
  },
  myGetRowValues:function(oEvent){

    var sDate = oEvent.getParameters().rowBindingContext.getProperty("DeliveryDate");
    console.log(oEvent.getParameters().rowBindingContext);
    sap.m.MessageToast.show(sDate);
    //getting selected cell text
    //note: if the cell doesn't have text property it will give undefined
    var sSelectedText = oEvent.getParameters().cellControl.mProperties.text;
    sap.m.MessageToast.show(sSelectedText);
   
  }
});
