sap.ui.jsview("myApp.view.view1", {
  getControllerName: () => {
    return "myApp.controller.view1";
  },

  createContent: (oController) => {

    //1.creating data
   

    // 2.creating Model
    var oModel = new sap.ui.model.xml.XMLModel("../model/sampleData1.xml");
    sap.ui.getCore().setModel(oModel,"myModel");

  //  3.creating columns


var btn = new sap.m.Button({
                             icon:"sap-icon://arrow-right",
                            press:function(oEvent){
                                app.to("idPage2");
                            }

});

var oFlexBox = new sap.m.FlexBox({

  alignItems:"Start",
  justifyContent:"End",
  items:[btn]
})


    var colums = [
      new sap.ui.table.Column({
            label: new sap.m.Label({ text: "OrderId" }),
            template: new sap.m.Text({ text: "{myModel>OrderId}" }),
           
          }),

          new sap.ui.table.Column({
            label: new sap.m.Label({ text: "ItemNo" }),
            template: new sap.m.Input({ value: "{myModel>ItemNo}" }),
            
          }),
          new sap.ui.table.Column({
            label: new sap.m.Label({ text: "Description" }),
            template: new sap.m.Text({ text: "{myModel>Description}" }),

          }),
          new sap.ui.table.Column({
            label: new sap.m.Label({ text: "Quantity" }),
            template: new sap.m.Text({ text: "{myModel>Quantity}",
           
          
          
          }),
          }),

          new sap.ui.table.Column({
            label: new sap.m.Label({ text: "DeliveryDate" }),
            template: new sap.m.Text({ text: "{myModel>DeliveryDate}" }),
          }),
          new sap.ui.table.Column({
            label: new sap.m.Label({ text: "ShippingAddress" }),
            template: new sap.m.Text({ text: "{myModel>ShippingAddress}" }),
          })
    ]
    
    colums.forEach(item=>{
        item.width = "10rem"
    })
    

    //4.creating a table and adding columns
    var oTable = new sap.ui.table.Table("mainTable1", {
      title: new sap.m.Text({ text: "dataTable" }),
      columns: colums,
      selectionMode:"Multi",
      visibleRowCount : 10,
     navigationMode: "Paginator",
     enableCellFilter:true,
     enableBusyIndicator:true,
     showColumnVisibilityMenu:true,
     cellClick:[oController.myGetRowValues,oController]
     
   
    });

    //5.binding the model to table
  // oTable.setModel(oModel);

   // Binding items
    oTable.bindRows("myModel>/Sales");

    //6.creating page
    var oPage = new sap.m.Page({
      title: "My First demo App",
      content: [oFlexBox,oTable],
    });

    return oPage;
  },
});
