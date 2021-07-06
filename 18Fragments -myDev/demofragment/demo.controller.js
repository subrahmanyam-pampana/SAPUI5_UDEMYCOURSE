sap.ui.controller("demofragment.demo", {

	onInit: function() {
	
		
		var oData = {
				names: [{
					Name: "Dinosaur",
					Place: "Mountain"
				}, {
					Name: "Elephant",
					Place: "Forest"
				}, {
					Name: "Whale",
					Place: "Sea"
				}, {
					Name: "Duck",
					Place: "Water"
				}, {
					Name: "Monkey",
					Place: "Tree"
				}]
			};
	
			// create a oModel with this oData
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.setData(oData);
			sap.ui.getCore().setModel(oModel,"list");
		
		},
	
		openFragment : function(oEvt){
			
			if(this.oFragment === undefined){
			this.oFragment =  sap.ui.jsfragment("demofragment.demo",this);
			this.oFragment.open();
			console.log(this);
			}
			else{
				this.oFragment.open();	
			}
			
		},
		
		liveChange:function(oEvt){
			
			var sVal = oEvt.getParameter("value");
			var oFilter = new sap.ui.model.Filter("Name",sap.ui.model.FilterOperator.Contains,sVal);
			var oBinding = oEvt.getSource().getBinding("items");
			oBinding.filter([oFilter]);
		},
	
	/**
	* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	* This hook is the same one that SAPUI5 controls get after being rendered.
	* @memberOf demofragment.demo
	*/
	//	onAfterRendering: function() {
	//
	//	},
	
	/**
	* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	* @memberOf demofragment.demo
	*/
	//	onExit: function() {
	//
	//	}
	
	});