sap.ui.jsview("myApp.view.products", {
  getControllerName: function () {
    return "myApp.controller.products";
  },

  createContent: function (oController) {
    var oSearch = new sap.m.SearchField({
      width: "auto",
      placeholder: "{i18n>inputPlaceHolder}",
      class: "sapUiResponsiveMargin",
      liveChange: [oController.searchProducts, oController],
    });

    var oList = new sap.m.List({
      headerText: "Products List",
      width: "50%",
      itemPress: [oController.ShowDetails, oController],
      backgroundDesign:"Translucent"
    }).addStyleClass("ProductsList");

    oList.bindItems({
      path: "productsList>/value",
      template: new sap.m.StandardListItem({
        title: "{productsList>Name}",
        description: "{productsList>Description}",
        type: sap.m.ListType.Navigation,
      }),
    });

    var oInputFlexBox = new sap.m.FlexBox({
      height: "100px",
      alignItems: "Center",
      justifyContent: "Center",
      items: [oSearch],
    });

    var oVBox = new sap.m.VBox({
      items: [oInputFlexBox, oList],
    });

    var oPage = new sap.m.Page({
      title: "{i18n>ProductsPageTitle}",
      showNavButton: true,
      navButtonPress: function () {
        app.back();
      },
      content: [oVBox],
    });

    return oPage;
  },
});
