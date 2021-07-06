sap.ui.jsview("myApp.view.productDetails", {
  getControllerName: function () {
    return "myApp.controller.productDetails";
  },

  createContent: function (oController) {
    var colums = [
      new sap.ui.table.Column({
        label: new sap.m.Label({ text: "ID" }),
        template: new sap.m.Text({ text: "{productDetModel>ID}" }),
        width: "9rem",
      }),

      new sap.ui.table.Column({
        label: new sap.m.Label({ text: "Name" }),
        template: new sap.m.Text({ text: "{productDetModel>Name}" }),
        width: "9rem",
      }),
      new sap.ui.table.Column({
        label: new sap.m.Label({ text: "Description" }),
        template: new sap.m.Text({ text: "{productDetModel>Description}" }),
        width: "9rem",
      }),
      new sap.ui.table.Column({
        label: new sap.m.Label({ text: "Price" }),
        template: new sap.m.Text({ text: "{productDetModel>Price}" }),
        width: "9rem",
      }),
      new sap.ui.table.Column({
        label: new sap.m.Label({ text: "Rating" }),
        template: new sap.m.RatingIndicator({
          value: "{productDetModel>Rating}",
        }),
        width: "9rem",
      }),
    ];

    var oTable = new sap.ui.table.Table("mainTable", {
      columns: colums,
      selectionMode: "Multi",
      navigationMode: "Paginator",
      enableCellFilter: true,
      enableBusyIndicator: true,
      showColumnVisibilityMenu: true,
    });

    //Binding items
    oTable.bindRows("productDetModel>/value");

    var oPage = new sap.m.Page({
      title: "{i18n>ProductDetailsPageTitle}",
      showNavButton: true,
      navButtonPress: function () {
        app.back();
      },
      content: [oTable],
    });

    return oPage;
  },
});
