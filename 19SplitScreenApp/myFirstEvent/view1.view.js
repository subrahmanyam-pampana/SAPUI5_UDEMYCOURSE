sap.ui.jsview("myFirstEvent.view1",{
    getControllerName : ()=>{
                        return "myFirstEvent.view1"
                         },

    createContent: function(oController){
       
        var oList = new sap.m.List({
            headerText: "Animals"
        });

        oList.bindItems({
            path: "list>/names",
            template: new sap.m.StandardListItem({
                title:"{list>Name}",
                description:"{list>place}",
                type: sap.m.ListType.Navigation,
                press: [oController.showDetails, oController]
            })
        }   
        )

        var oPage = new  sap.m.Page({
            title : "My First demo App",
            content:[oList]
        })

        return oPage;

    }
   

});