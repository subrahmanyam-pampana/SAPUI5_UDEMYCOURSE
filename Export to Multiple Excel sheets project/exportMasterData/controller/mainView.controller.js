sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "../utils/FileSaver",
  "../utils/jszip",
 "../utils/excel"
], function (Controller,saveAs,JSZip,exceljs){
  "use strict";
  return Controller.extend("root.controller.mainView", {
    onInit:function(){
      this.jsexcel = excel()
    },
    downloadExcel: function(){
      let data = [
        {
          name: "mysheet1",
          data: [
            ["col1", "col2"],
            [1, 2],
            ["data1", "data2"],
            ["data1", "data2"],
            ["data1", "data2"],
          ],
        },
    
        {
          name: "mysheet2",
          data: [
            ["col1", "col2"],
            [1, 2],
            ["data1", "data2"],
            ["data1", "data2"],
            ["data1", "data2"],
          ],
        },
        {
          name: "mysheet3",
          data: [
            ["col1", "col2"],
            [1, 2],
            ["data1", "data2"],
            ["data1", "data2"],
            ["data1", "data2"],
          ],
        },
      ];
      
      var excel = this.jsexcel.new("Calibri light 10 #333333");
      var headerStyle = excel.addStyle ( { 														
        border: "thin #000000,thin #000000,thin #000000,thin #000000", 		
        font: "Calibri 12 #ffffff B",
        fill:"#00e64d"
      });
      var cellStyle = excel.addStyle ( { 														
        border: "thin #000000,thin #000000,thin #000000,thin #000000", 		
        font: "Calibri 12"
      });
      
      /*
      excel sheet methods
      excel.set({sheet:sheetValue,column:columnValue,row:rowValue,value:cellValue,style:styleValue })
      */
    
      data.forEach((sheet, sidx) => {
        sidx == 0
          ? excel.set({ sheet: sidx, value: sheet.name })
          : excel.addSheet(sheet.name);
    
        sheet.data.forEach((row, ridx) => {
          row.forEach((cell, cidx) => {
            excel.set({
              sheet: sidx,
              column: cidx,
              row: ridx,
              value: cell,
              style:(ridx==0)?headerStyle:cellStyle
            });
          });
        });
      });
    
      excel.generate("SampleData_test.xlsx");
  }
  });
});

// sap.ui.controller("root.controller.mainView", {
//   onInit: () => {
//   },

 
// });
