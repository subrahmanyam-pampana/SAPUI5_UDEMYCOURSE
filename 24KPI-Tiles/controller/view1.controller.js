sap.ui.controller("myApp.controller.view1", {

  onInit: () => {

    var oData = {
      names:[
        {Name:"dinosar",Place:"moutain",Popularity:1},
        {Name:"Elephant",Place:"Forest",Popularity:2},
        {Name:"Whale",Place:"sea",Popularity:3},
        {Name:"Duck",Place:"water",Popularity:4},
        {Name:"Monkey",Place:"tree",Popularity:5},
      ]
    };

    sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(oData),"pieMode");
  
  },
});
