sap.ui.jsview("myApp.view.view1",{
    getControllerName : ()=>{
                        return "myApp.controller.view1"
                         },

    createContent: (oController)=>{

        /*
        *capturing executes when event set to true and execution is from top to bottom
        *bubbling executes when event set to false and it is default
        *in bubling execution goes from bottom to top
        */
        var oInput = new sap.m.Input("inputUserName",{
            placeholder:"Enter your Name"
        });

        var oBtn = new sap.m.Button({
            text : "Submit"
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