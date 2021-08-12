                xmlToJson: function (xml) {
                    var headerMapping = {

                        "OPERATION": "Operation",
                        "STEP_NUMBER": "Step Number",
                        "FIXINGS": "Bolts",
                        "GOOD": "Good",
                        "FAILS": "Fails",
                        "REWINDS": "Rewinds",
                        "END_STATUS": "End Status",
                        "USER": "User",
                        "FORCE_PASS": "Force Pass Y/N",
                        "MODIFIED_AT": "Modified At"

                    }
                    // Create the return object
                    var obj = {};

                    if (xml.nodeType == 1) {
                        // element
                        // do attributes
                        if (xml.attributes.length > 0) {
                            obj["@attributes"] = {};
                            for (var j = 0; j < xml.attributes.length; j++) {
                                var attribute = xml.attributes.item(j);
                                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
                            }
                        }
                    }

                    // do children
                    // If all text nodes inside, get concatenated text from them.
                    var textNodes = [].slice.call(xml.childNodes).filter(function (node) {
                        return node.nodeType === 3;
                    });
                    if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
                        obj = [].slice.call(xml.childNodes).reduce(function (text, node) {
                            return text + node.nodeValue;
                        }, "");
                    } else if (xml.hasChildNodes()) {
                        for (var i = 0; i < xml.childNodes.length; i++) {
                            var item = xml.childNodes.item(i);
                            var nodeName = item.nodeName;
                            if (headerMapping.hasOwnProperty(nodeName)) {
                                nodeName = headerMapping[nodeName];
                            }
                            if (typeof obj[nodeName] == "undefined") {
                                var new1 = this.xmlToJson(item);
                                if (typeof new1 == 'object' && new1.hasOwnProperty('#text')) {
                                    delete new1['#text'];
                                }
                                obj[nodeName] = new1;

                            } else {
                                if (typeof obj[nodeName].push == "undefined") {
                                    var old = obj[nodeName];
                                    obj[nodeName] = [];
                                    obj[nodeName].push(old);
                                }
                                var new2 = this.xmlToJson(item);
                                if (typeof new2 == 'object' && new2.hasOwnProperty('#text')) {
                                    delete new2['#text'];
                                }
                                obj[nodeName].push(new2);
                            }
                        }
                    }
                    obj = obj === '---' ? '' : obj
                    return obj;
                },

                ///////////////////////////////////////////////////////////////////////////////// ExportTable function //////////////////////////////////////////////////////////////////////
                exportTable: function (oEvent) {
                 
                    var dataArray = this.xmlToJson($.parseXML(sap.ui.getCore().getElementById("DataCollectionDetailsTable").getModel().getXML())).Rowsets.Rowset.Row;
     
                    var sfc = sap.ui.getCore().byId("SFC").getValue();
                    sfc = sfc.toUpperCase();
                    if (sfc == "") {
                        sap.m.MessageToast.show("Please Enter SFC");
                        return;
                    }

                    var filename = sfc + "_ATTDataCollectionReport.xlsx";
                    var ws_name = "DataCollectionDetails.js";

                    if (!Array.isArray(dataArray)) {
                        dataArray = [dataArray];
                    }

                    var dataWS = XLSX.utils.json_to_sheet(dataArray)
                    var wb = XLSX.utils.book_new();
                    XLSX.utils.book_append_sheet(wb, dataWS, ws_name)

                    XLSX.writeFile(wb, filename);
                }
