   onAfterRendering:function(){
                    var oInput  = sap.ui.getCore().byId("SFC");
                       oInput.onsapenter = (oEvent)=>{
                   if(oEvent.target.value!=""){
                     this.GetResult();
                  }else{
              this.browseData();
               }
                     };
               },
