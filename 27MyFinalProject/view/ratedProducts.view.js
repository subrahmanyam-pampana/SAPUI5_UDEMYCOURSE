sap.ui.jsview("myApp.view.ratedProducts", {
  getControllerName: function () {
    return "myApp.controller.ratedProducts";
  },

  createContent: function (oController) {
    var oVizFrame = new sap.viz.ui5.controls.VizFrame();

    var oDataChart = new sap.viz.core.FlattenedDataset({
      //assigning data to x and y axises
      dimensions: [
        {
          name: "Products",
          value: "{TopRatedProModel>Name}",
        },
      ],
      measures: [
        {
          name: "Rating",
          value: "{TopRatedProModel>Rating}",
        },
      ],

      data: {
        path: "TopRatedProModel>/value",
      },
    });

    var feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
      uid: "categoryAxis",
      type: "Dimension",
      values: ["Products"],
    });

    //creating x and y axises
    var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
      uid: "valueAxis",
      type: "Measure",
      values: ["Rating"],
    });

    //adding axis to frame
    oVizFrame.addFeed(feedValueAxis);
    oVizFrame.addFeed(feedCategoryAxis);

    //setting type of frame
    oVizFrame.setVizType("bar");

    oVizFrame.setDataset(oDataChart);

    var oPage = new sap.m.Page({
      title: "{i18n>RatedProductsTitle}",
      content: [oVizFrame],
      showNavButton: true,
      navButtonPress: function () {
        app.back();
      },
    });

    return oPage;
  },
});
