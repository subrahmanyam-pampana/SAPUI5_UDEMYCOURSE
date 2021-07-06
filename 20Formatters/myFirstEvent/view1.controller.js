sap.ui.controller("myFirstEvent.view1", {
  onInit: function () {
    var oData = {
      names: [
        {
          Name: "Dinosaurs",
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

    sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(oData));

    //craeting some dummy json data

    this.oDataTable = {
      names: [
        {
          id: 1,
          Name: "Dinosaurs",
          Place: "Mountain",
        },
        {
          id: 2,
          Name: "Elephant",
          Place: "Forest",
        },
        {
          id: 3,
          Name: "Whale",
          Place: "Sea",
        },
        {
          id: 4,
          Name: "Duck",
          Place: "Water",
        },
        {
          id: 5,
          Name: "Monkey",
          Place: "Tree",
        },
      ],
    };
  },

  showDetails: function (oEvent) {
    var sClickedData = oEvent.getSource().getTitle();
    
    this.oDataTable.names.forEach((item) => {
      if (item.Name === sClickedData) {
        sap.ui.getCore().getModel("detailsModel").setData([item]);
      }
    });
  },
});
