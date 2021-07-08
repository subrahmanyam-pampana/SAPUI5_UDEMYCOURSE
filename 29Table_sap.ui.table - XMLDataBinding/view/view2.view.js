sap.ui.jsview("myApp.view.view2", {
  getControllerName: () => {
    return "myApp.controller.view2";
  },

  createContent: (oController) => {

    //1.creating data
   

    // 2.creating Model
    var oModel = new sap.ui.model.xml.XMLModel("../model/sampleData2.xml");
    sap.ui.getCore().setModel(oModel,"myModel2");

  //  3.creating columns

    var colums = [
      new sap.ui.table.Column({
            label: new sap.m.Label({ text: "itemNo" }),
            template: new sap.m.Text({ text: "{myModel2>OrderId/@itemNo}" }),
           
          }),

          new sap.ui.table.Column({
            label: new sap.m.Label({ text: "Desc" }),
            template: new sap.m.Input({ value: "{myModel2>OrderId/@Desc}" }),
            
          }),
          new sap.ui.table.Column({
            label: new sap.m.Label({ text: "qty" }),
            template: new sap.m.Text({ text: "{myModel2>OrderId/@qty}" }),

          }),
      new sap.ui.table.Column({
            label: new sap.m.Label({ text: "Quantity" }),
            template: new sap.m.Text({ text: "{myModel2>OrderId/@qty}" }),
          }),

          new sap.ui.table.Column({
            label: new sap.m.Label({ text: "delivery" }),
            template: new sap.m.Text({ text: "{myModel2>OrderId/@delivery}" }),
          }),
          new sap.ui.table.Column({
            label: new sap.m.Label({ text: "ShippingAddress" }),
            template: new sap.m.Text({ text: "{myModel2>OrderId/@shipping}" }),
          })
    ]
    
    colums.forEach(item=>{
        item.width = "10rem"
    })
    

    //4.creating a table and adding columns
    var oTable = new sap.ui.table.Table("mainTable2", {
      title: new sap.m.Text({ text: "dataTable" }),
      columns: colums,
      selectionMode:"Multi",
      visibleRowCount : 15,
     navigationMode: "Paginator",
     enableCellFilter:true,
     enableBusyIndicator:true,
     showColumnVisibilityMenu:true
    });

    oTable.bindRows("myModel2>/Sales");

    var oPage = new sap.m.Page({
      title: "Secound page",
      content: [oTable],
      showNavButton:true,
      navButtonPress:function(){app.back()}
    });

    return oPage;
  },
});
