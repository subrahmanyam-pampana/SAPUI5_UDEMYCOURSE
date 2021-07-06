sap.ui.jsview("myApp.view.view1", {
  getControllerName: () => {
    return "myApp.controller.view1";
  },

  createContent: (oController) => {
    

    //1.creating data
    var oData = {
      Students: [
        { name: "subrahmanyam", age: "24", class: "12th" },
        { name: "Revathi", age: "23", class: "11th" },
        { name: "Revathi", age: "23", class: "11th" },
        { name: "Revathi", age: "23", class: "11th" },
        { name: "Revathi", age: "23", class: "11th" },
        { name: "Revathi", age: "23", class: "11th" },
        { name: "Revathi", age: "23", class: "11th" },
        { name: "Revathi", age: "23", class: "11th" },
      ],
    };

    // 2.creating Model
    var oModel = new sap.ui.model.json.JSONModel(oData);

    //3.creating columns

    var colums = [
      new sap.ui.table.Column({
           
            label: new sap.m.Label({ text: "Name" }),
            template: new sap.m.Text({ text: "{name}" }),
            width:"9rem"
           
          }),

          new sap.ui.table.Column({
           
            label: new sap.m.Label({ text: "Age" }),
            template: new sap.m.Text({ text: "{age}" }),
            width:"9rem"
            
          }),
          new sap.ui.table.Column({
          
            label: new sap.m.Label({ text: "Class" }),
            template: new sap.m.Text({ text: "{class}" }),
            width:"9rem"

          })
    ];
    

    //4.creating a table and adding columns
    var oTable = new sap.ui.table.Table("mainTable", {
      title: new sap.m.Text({ text: "dataTable" }),
      columns: colums,
      selectionMode:"Multi",
      visibleRowCount : 15,
     navigationMode: "Paginator",
     enableCellFilter:true,
     enableBusyIndicator:true,
     showColumnVisibilityMenu:true,
     cellClick:[oController.getCellValue,oController]
    });

    //5.binding the model to table
    oTable.setModel(oModel);
    //Binding items
    oTable.bindRows("/Students");

    //6.creating page
    var oPage = new sap.m.Page({
      title: "My First demo App",
      content: [oTable],
    });
    // alert("triggered create content");
    return oPage;
  },
});
