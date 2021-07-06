sap.ui.jsview("myApp.view.view1", {
  getControllerName: () => {
    return "myApp.controller.view1";
  },

  createContent: (oController) => {

    //1.creating data
    var oData = {
      Students: [
        { name: "subrahmanyam", age: "24", class: "12th" },
        { name: "student 2", age: "23", class: "11th" },
        { name: "student 3", age: "23", class: "11th" },
        { name: "student 4", age: "23", class: "11th" },
        { name: "student 5", age: "23", class: "11th" },
        { name: "student 6", age: "23", class: "11th" },
      ],
    };

    // 2.creating Model
    var oModel = new sap.ui.model.json.JSONModel(oData);
    var aTiles = [
      new sap.m.StandardTile({
        title:"Manju",
        info:"pampana",
        icon:"sap-icon://sap-ui5"
      }),
      new sap.m.StandardTile({
        title:"Manju",
        info:"pampana",
        icon:"sap-icon://sap-ui5"
      }),
      new sap.m.StandardTile({
        title:"Manju",
        info:"pampana",
        icon:"sap-icon://sap-ui5"
      })
    ]
    var oPageContent  = new sap.m.TileContainer({
      tiles: aTiles
    });


    //6.creating page
    var oPage = new sap.m.Page({
      title: "My First demo App",
      content: [oPageContent],
    });

    return oPage;
  },
});
