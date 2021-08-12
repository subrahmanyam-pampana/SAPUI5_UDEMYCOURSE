sap.ui.jsview("AttReport.mainView", {
  getControllerName: () => {
    return "AttReport.mainView";
  },

  createContent: (oController) => {
    
  var oLayout_Main = new sap.ui.commons.layout.MatrixLayout({
        id: 'Main',
        layoutFixed: true,
        width: "100%"
    });

    var oLayout_Search = new sap.ui.commons.layout.MatrixLayout({
        id: 'Search',
        layoutFixed: true,
        widths: ["30%", "20%", "40%"]
    });
    var oLayout_Table = new sap.ui.commons.layout.MatrixLayout({
        id: 'oTable',
        layoutFixed: true,
        width: "100%",
        height: "150%"
    });

    var oInput = new sap.m.Input({
        id: 'SFC',
        width: "100%",
        showValueHelp: true,
        placeholder: "Enter SFC",
        valueHelpRequest: [oController.browseData,oController] 
    })
    var oButton_GetResult = new sap.m.Button({
        text: "Get Result ",
        id: "GetResult",
        press:  [oController.GetResult,oController] ,
        type: sap.m.ButtonType.Emphasized
    });



    ////////////////////////////////////////////////////// Create Data Collection Details Table ////////////////////////////////////////////////////////////////////////////////////////

    var oModelDataCollDet = new sap.ui.model.xml.XMLModel();
    oModelDataCollDet.attachRequestSent(function () {
        sap.ui.core.BusyIndicator.show();
    });
    oModelDataCollDet.attachRequestCompleted(function () {
        sap.ui.core.BusyIndicator.hide();
    });

    var oTableDataCollDet = new sap.ui.table.Table({
        id: "DataCollectionDetailsTable",
        height: "100%",
        visibleRowCount: 19
    });
    oModelDataCollDet.setSizeLimit(3500);

    var toolBar = new sap.m.OverflowToolbar();

    toolBar.addContent(new sap.m.Text("RecordCount",{
         text:" "
    }));

    toolBar.addContent(new sap.m.ToolbarSpacer());
    toolBar.addContent(new sap.m.Button({
        icon: "sap-icon://excel-attachment",
        press: [oController.exportTable,oController]
    }));

    oTableDataCollDet.setToolbar(toolBar);

    //colums
    //operation column
    oTableDataCollDet.addColumn(new sap.ui.table.Column({
        label: new sap.m.Label({
            text: "Operation",
            design: "Bold"
        }),
        tooltip: new sap.ui.commons.RichTooltip({
            text: "Operation"
        }),
        template: new sap.ui.commons.TextView({  textAlign:"Center"}).bindProperty("text", "OPERATION"),
        hAlign: "Center",
        width: "110px",
        sortProperty: "OPERATION",
        filterProperty: "OPERATION"
    }));

    //step number column

    oTableDataCollDet.addColumn(new sap.ui.table.Column({
        label: new sap.m.Label({
            text: "Step Number",
            design: "Bold"
        }),
        tooltip: new sap.ui.commons.RichTooltip({
            text: "Step Number"
        }),
        template: new sap.ui.commons.TextView({  textAlign:"Right"}).bindProperty("text", "STEP_NUMBER"),
        hAlign: "Center",
        width: "100px",
        sortProperty: "STEP_NUMBER",
        filterProperty: "STEP_NUMBER"
    }));

    //Bolts
    oTableDataCollDet.addColumn(new sap.ui.table.Column({
        label: new sap.m.Label({
            text: "Bolts",
            design: "Bold"
        }),
        tooltip: new sap.ui.commons.RichTooltip({
            text: "Total number of Bolts"
        }),
        template: new sap.ui.commons.TextView().bindProperty("text", "FIXINGS"),
        hAlign: "Center",
        width: "100px",
        sortProperty: "FIXINGS",
        filterProperty: "FIXINGS"
    }));

    //Good colm

    oTableDataCollDet.addColumn(new sap.ui.table.Column({
        label: new sap.m.Label({
            text: "Good",
            design: "Bold"
        }),
        tooltip: new sap.ui.commons.RichTooltip({
            text: "Total number of Passed bolts"
        }),
        template: new sap.ui.commons.TextView({  textAlign:"Right"}).bindProperty("text", "GOOD"),
        hAlign: "Center",
        width: "100px",
      
        sortProperty: "GOOD",
        filterProperty: "GOOD"
    }));

    //Fails/ Retries colm

    oTableDataCollDet.addColumn(new sap.ui.table.Column({
        label: new sap.m.Label({
            text: "Fails",
            design: "Bold"
        }),
        tooltip: new sap.ui.commons.RichTooltip({
            text: "Toltal number of fails"
        }),
        template: new sap.ui.commons.TextView({  textAlign:"Right"}).bindProperty("text", "FAILS"),
        hAlign: "Center",
        width: "100px",
        sortProperty: "FAILS",
        filterProperty: "FAILS"
    }));

    //Rewinds colm

    oTableDataCollDet.addColumn(new sap.ui.table.Column({
        label: new sap.m.Label({
            text: "Rewinds",
            design: "Bold"
        }),
        tooltip: new sap.ui.commons.RichTooltip({
            text: "Number of Rewinds"
        }),
        template: new sap.ui.commons.TextView({  textAlign:"Right"}).bindProperty("text", "REWINDS"),
        hAlign: "Center",
        width: "100px",
        sortProperty: "REWINDS",
        filterProperty: "REWINDS"
    }));

    //End status colm

    oTableDataCollDet.addColumn(new sap.ui.table.Column({
        label: new sap.m.Label({
            text: "End Status",
            design: "Bold"
        }),
        tooltip: new sap.ui.commons.RichTooltip({
            text: "End Status"
        }),
        template: new sap.ui.commons.TextView({  textAlign:"Center"}).bindProperty("text", "END_STATUS",
       function(cellVal){
          if(cellVal=="Complete"){
                this.removeStyleClass("yellowColor");
               this.addStyleClass("greenColor");
           }else {
                this.removeStyleClass("greenColor");
                 this.addStyleClass("yellowColor");
          }
          return cellVal;
        }),
        hAlign: "Center",
        width: "100px",
        sortProperty: "END_STATUS",
        filterProperty: "END_STATUS"
    }));

    //user colm

    oTableDataCollDet.addColumn(new sap.ui.table.Column({
        label: new sap.m.Label({
            text: "User",
            design: "Bold"
        }),
        tooltip: new sap.ui.commons.RichTooltip({
            text: "User Name"
        }),
        template: new sap.ui.commons.TextView({  textAlign:"Center"}).bindProperty("text", "USER"),
        hAlign: "Center",
        width: "100px",
        sortProperty: "USER",
        filterProperty: "USER"
    }));

    //Force pass y?n colm

    oTableDataCollDet.addColumn(new sap.ui.table.Column({
        label: new sap.m.Label({
            text: "Force Pass Y/N",
            design: "Bold"
        }),
        tooltip: new sap.ui.commons.RichTooltip({
            text: "Force Pass"
        }),
        template: new sap.ui.commons.TextView({ 
      textAlign:"Right"
       }).bindProperty("text", "FORCE_PASS",function(cellVal){
          if(cellVal=="Y"){
                      this.removeStyleClass("greenColor");
                 this.addStyleClass("redColor"); 
           }else {
       

  this.removeStyleClass("redColor");
               this.addStyleClass("greenColor");
          }
          return cellVal;
        }),
        hAlign: "Center",
        width: "100px",
        sortProperty: "FORCE_PASS",
        filterProperty: "FORCE_PASS"
    }));

   //Force pass y?n colm

    oTableDataCollDet.addColumn(new sap.ui.table.Column({
        label: new sap.m.Label({
            text: "Modified At",
            design: "Bold"
        }),
        tooltip: new sap.ui.commons.RichTooltip({
            text: "Modified At Data time"
        }),
        template: new sap.ui.commons.TextView({  textAlign:"Right"}).bindProperty("text", "MODIFIED_AT"),
        hAlign: "Center",
        width: "100px",
        sortProperty: "MODIFIED_AT",
        filterProperty: "MODIFIED_AT"
    }));

    oTableDataCollDet.bindRows("/Rowset/Row/");
    oTableDataCollDet.setModel(oModelDataCollDet);
    oLayout_Search.createRow("", oInput, oButton_GetResult);
    //   oLayout_Table.createRow(oTableDataCollDet);   
    oLayout_Main.createRow(oLayout_Search);
    oLayout_Main.createRow(oTableDataCollDet);


////////////////////////////////////////////////////// Create data Collection Browse  ////////////////////////////////////////////////////////////////////////////////////////

    var Dialog = new sap.m.Dialog({
        title: "Browse SFC",
        id: "browsePopUp",
        contentWidth: "500px",
        contentHeight: "100%",
        draggable: true,
        resizable: true,
        endButton: new sap.m.Button({
            type: sap.m.ButtonType.Emphasized,
            text: 'Close',
            press: function () {
                Dialog.close();
            }
        })

    });

    var oList = new sap.m.List({
       id: "browseSfcTable",
         busyIndicatorDelay:0,
       noDataText:"No SFC Found",
         busy:true,
         enableBusyIndicator:true,
	growing: true,
	growingThreshold:100,

        itemPress: [oController.onSFCListSelect,oController],
      items:{
      path: "/Rowset/Row",
      template:  new sap.m.StandardListItem({
          title: "{SFC}",
          type: sap.m.ListType.Active
        })
     }

      });
  
    Dialog.addContent(oList);

 var oMainPage = new sap.m.Page({
        id: "mainPaige",
        title: "ATT Data Collection Report",
        titleLevel: sap.ui.core.TitleLevel.H2,
        design: "Bold",
        content: [oLayout_Main, Dialog]
    });

    return oMainPage;
  },
});




