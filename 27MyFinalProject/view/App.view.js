sap.ui.jsview("myApp.view.App", {
  getControllerName: function () {
    return "myApp.controller.App";
  },

  createContent: function (oController) {
    var aTiles = [
      new sap.m.StandardTile({
        title: "{i18n>proTileTitle}",
        icon: "sap-icon://product",
        press: ["products", oController.goToNextPage, oController],
      }),
      new sap.m.StandardTile({
        title: "{i18n>RatingTileTitle}",
        icon: "sap-icon://favorite",
        press: ["ratedProducts", oController.goToNextPage, oController],
      }),
    ];

    var oPageContent = new sap.m.TileContainer({
      tiles: aTiles,
    });

    var oPage = new sap.m.Page({
      title: "{i18n>homePageTitle}",
      content: [oPageContent],
    });

    return oPage;
  },
});
