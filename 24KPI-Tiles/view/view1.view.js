sap.ui.jsview("myApp.view.view1", {
  getControllerName: () => {
    return "myApp.controller.view1";
  },

  createContent: (oController) => {

    var oDinoT = new sap.suite.ui.commons.GenericTile({
      header: "Dianosaur",
      subheader: "Mountains",
      tileContent: [
        new sap.suite.ui.commons.TileContent({
          footer: "Rank",
          content: [
            new sap.suite.ui.commons.NumericContent({
              indicator: "Up",
              value: 1,
              valueColor: "Good",
            }),
          ],
        }),
      ],
    });

    var oEleT = new sap.suite.ui.commons.GenericTile({
      header: "Elephant",
      subheader: "Forest",
      tileContent: [
        new sap.suite.ui.commons.TileContent({
          footer: "Rank",
          content: [
            new sap.suite.ui.commons.NumericContent({
              indicator: "Down",
              value: 10,
              valueColor: "Good",
            }),
          ],
        }),
      ],
    });

    //creating custome Tiles

    var oDCT = new sap.m.CustomTile({
      content: [oDinoT],
    });

    var oECT = new sap.m.CustomTile({
      content: [oEleT],
    });

    //creating Tiles container

    var TilesContainer = new sap.m.TileContainer({
      tiles: [oDCT, oECT],
    });

    var oPage = new sap.m.Page({
      title: "My First demo App",
      content: [TilesContainer],
    });

    return oPage;
  },
});
