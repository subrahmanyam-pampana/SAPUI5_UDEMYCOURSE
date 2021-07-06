sap.ui.controller("myApp.controller.view1", {
  onInit: () => {
    var oData = {
      names: [
        {
          Name: "Dinosaur",
          Place: "Mountain",
        },
        {
          Name: "Elephant",
          Place: "Forest",
        },
        {
          Name: "Whale",
          Place: "Sea",
        },
        {
          Name: "Duck",
          Place: "Water",
        },
        {
          Name: "Monkey",
          Place: "Tree",
        },
      ],
    };
    sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(oData), "list");
  },

  // arraow functions won't work here
  // for arrow function this: window
  //for normal function this: controller reference
  myOpenFragment : function(oEvt){
			
	if(this.omyFragment === undefined){
	this.oMyFragment =  sap.ui.jsfragment("myApp.view.view1",this);
	this.oMyFragment.open();
	console.log(this);
	}
	else{
		this.oMyFragment.open();	
	}
	
},
//   liveChange: (oEvent) => {
//     var sVal = oEvent.getParameter("value");

// 	//  filter condition: Name == sVal
//     var oFilter = new sap.ui.model.Filter(
//       "Name",
//       sap.ui.model.FilterOperator.Contains,
//       sVal
//     );
//  //where to apply the filter ?
//  //applying condition to items list
// 	var oBinding =  oEvent.getSource().getBinding("items");
// 	oBinding.filter([oFilter]);

//   },
liveChange:function(oEvt){
			
	var sVal = oEvt.getParameter("value");
	var oFilter = new sap.ui.model.Filter("Name",sap.ui.model.FilterOperator.Contains,sVal);
	var oBinding = oEvt.getSource().getBinding("items");
	oBinding.filter([oFilter]);

},
});
