sap.ui.controller("myApp.controller.view1", {
  onInit: () => {
    var oData = {
      students: [
        { name: "subrahmanyam", age: "20", class: "10" },
        { name: "student 2", age: "21", class: "11" },
        { name: "Student 3", age: "23", class: "12" },
        { name: "Student 4", age: "24", class: "13" },
        { name: "Student 5", age: "25", class: "14" },
        { name: "Student 6", age: "26", class: "15" },
      ],
    };

    var oModel = new sap.ui.model.json.JSONModel(oData);
    sap.ui.getCore().setModel(oModel);
  },
});
