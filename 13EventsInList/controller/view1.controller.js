sap.ui.controller("myApp.controller.view1", {
  onInit: () => {

var oData = {
    students:[
     {name:"subrahmanyam", favCar:"hondai"},
     {name:"NagaRevathi", favCar:"BMW"}
    ]
};

var oModel = new sap.ui.model.json.JSONModel(oData); 
sap.ui.getCore().setModel(oModel);

  },

  getData: (oEvent)=>{
    var sVal = oEvent.getParameter("listItem").getProperty("title");

    var oData = {
      "data":sVal
    };

var oModel = new sap.ui.model.json.JSONModel(oData);
    sap.ui.getCore().setModel(oModel,"labelModel");
    app.to("page2");
  }
});
