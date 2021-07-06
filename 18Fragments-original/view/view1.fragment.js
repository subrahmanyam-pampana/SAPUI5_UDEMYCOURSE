sap.ui.jsfragment("myApp.view.view1", {
  createContent: (oController) => {

    var oTemplate = new sap.m.StandardListItem({
      title: "{list>Name}",
      active:true
    });
      
    var oSelect = new sap.m.SelectDialog({
      title: "Students",
      type: "Active",
      liveChange:[oController.liveChange,oController]
    });

    oSelect.bindAggregation("items", "list>/names", oTemplate);

    return oSelect;
  },
});
