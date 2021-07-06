sap.ui.jsview("myApp.view.view2",{
    getControllerName : ()=>{
                        return "myApp.controller.view2"
                         },

    createContent: (oController)=>{
        
        var oLabel = new sap.m.Label("idNameLabel");

        var oPage = new  sap.m.Page({
            title : "Secound page",
            showNavButton:true,
            navButtonText:"<--",
            navButtonPress: (oEvent)=>{ app.back()},
            content:[oLabel]
        })

        return oPage;

    }
   

});