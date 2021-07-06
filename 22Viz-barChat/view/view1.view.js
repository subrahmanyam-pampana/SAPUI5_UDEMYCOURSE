sap.ui.jsview("myApp.view.view1", {
  getControllerName: () => {
    return "myApp.controller.view1";
  },

  createContent: (oController) => {
    /*steps
*create the frame
*set the type of frame
*add the axes
           create axes measure axis and dimention axis
*set the the data set to frame 
         create dimensions (X axis) and set the data
         create measure (y axis) and set the data
         set data path      
*/

    var oVizFrame = new sap.viz.ui5.controls.VizFrame();

    var oDataChart = new sap.viz.core.FlattenedDataset({
      //assigning data to x and y axises
      dimensions: [
        {
          name: "Name",
          value: "{bar>Name}",
        },
      ],
      measures: [
        {
          name: "Popularity",
          value: "{bar>Popularity}",
        },
      ],

      data: {
        path: "bar>/names",
      },
    });

    //creating x and y axises
    var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
      uid: "valueAxis",
      type: "Measure",
      values: ["Popularity"],
    });

    var feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
      uid: "categoryAxis",
      type: "Dimension",
      values: ["Name"],
    });

    //adding axis to frame
    oVizFrame.addFeed(feedValueAxis);
    oVizFrame.addFeed(feedCategoryAxis);

    //setting type of frame
    oVizFrame.setVizType("bar");

    oVizFrame.setDataset(oDataChart);

    var oPage = new sap.m.Page({
      title: "My First demo App",
      content: [oVizFrame],
    });

    return oPage;
  },
});
