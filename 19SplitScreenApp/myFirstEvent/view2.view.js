sap.ui.jsview("myFirstEvent.view2",{
    getControllerName : ()=>{
                        return "myFirstEvent.view2"
                         },

    createContent: (oController)=>{
        
        var oCol1 = new sap.m.Column({
            header: new sap.m.Label({
                text: "Name"
            })
        });
        var oCol2 = new sap.m.Column({
            header: new sap.m.Label({
                text: "Place"
            }),
        });
        var oCol3 = new sap.m.Column({
            header: new sap.m.Label({
                text: "Id"
            })
        });

        var oTableItems = new sap.m.ColumnListItem({
            cells: [
                new sap.m.Text({
                    text: "{detailsModel>Name}"
                }), new sap.m.Text({
                    text: "{detailsModel>Place}"
                }), new sap.m.Text({
                    text: "{detailsModel>id}"
                })
            ]
        });

        var oTable = new sap.m.Table({
            columns: [
                oCol1,
                oCol2,
                oCol3
            ]
        });

        oTable.bindItems({
            path: "detailsModel>/",
            template: oTableItems
        });

        var oPage = new  sap.m.Page({
            title : "Secound page",
            content:[oTable]
        })

        return oPage;

    }
   

});