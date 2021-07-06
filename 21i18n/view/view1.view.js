sap.ui.jsview("myApp.view.view1",{
    getControllerName : ()=>{
                        return "myApp.controller.view1"
                         },

    createContent: (oController)=>{
        var oInput = new sap.m.Input("inputUserName",{
            placeholder:"Enter your Name"
        });

        var oBtn = new sap.m.Button({
            text : "{i18n>submit}" ,
            press:[oController.goToSecoundPage,oController]
        });

        var oPage = new  sap.m.Page({
            title : "My First demo App",
            content:[oInput,oBtn]
        })

        return oPage;

    }
   

});