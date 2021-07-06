sap.ui.jsview("myApp.view.view1", {
  getControllerName: () => {
    return "myApp.controller.view1";
  },

  createContent: (oController) => {
    
    //creating columns
    var ocol1 = new sap.m.Column({
      header: new sap.m.Text({ text: "Name" }),
    });
    var ocol2 = new sap.m.Column({
      header: new sap.m.Text({ text: "Age" }),
    });
    var ocol3 = new sap.m.Column({
      header: new sap.m.Text({ text: "class" }),
    });

// creating table and adding columns to table
    var oTable = new sap.m.Table({
      columns: [ocol1, ocol2, ocol3]
    });

//binding row cells with data    
    oTable.bindItems({
      path: "/students",
      template: new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "{name}" }),
          new sap.m.Text({ text: "{age}" }),
          new sap.m.Text({ text: "{class}" }),
        ],
      }),
    });

    var oPage = new sap.m.Page({
      title: "Simple Table",
      content: [oTable],
    });

    return oPage;
  },
});
