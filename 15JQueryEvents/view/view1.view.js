sap.ui.jsview("myApp.view.view1",{
    getControllerName : ()=>{
                        return "myApp.controller.view1"
                         },

    createContent: (oController)=>{
        var oInput = new sap.m.Input("inputUserName",{
            placeholder:"Enter your Name"
        });

        var oBtn = new sap.m.Button({
            text : "Submit" ,
            press:[oController.goToSecoundPage,oController]
        }).addEventDelegate({
            onAfterRendering:(oBtn)=>{
                $(oBtn.srcControl.getDomRef()).draggable({
                    cancel:false
                })
            }
        })

        var oPage = new  sap.m.Page({
            title : "My First demo App",
            content:[oInput,oBtn]
        })

        return oPage;

    }
   

});