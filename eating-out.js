// //NOTE: Code below = unsplit version of getQuantity, getPrice and the contents of exports.bill functions.
// //****************************************************************
// var createBill = function(quantityString, priceString) {
//   var reg1 = /(\d+)\s(\w+)/g;
//   var reg2 = /(\w+'?\w+)[^\d\w]+(\d+)/g;
//   var extract = [];
//   var match;
//   while (match = reg1.exec(quantityString)) {
//     extract.push({
//       item: match[2].replace(/'?s/, ''),
//       quantity: match[1]
//     });
//   }
//   while (match = reg2.exec(priceString)) {
//     extract.forEach(function(obj) {
//       if (obj.item === match[1].replace(/'?s/, '')) {
//         obj.price = match[2];
//         obj.subtotal = match[2] * obj.quantity;
//       }
//     });
//   }
//   return extract;
// };
// //****************************************************************
// //NOTE: THIS VERSION DOES NOT TAKE ARRAY FROM getQuantity AS PARAMETER.
// //****************************************************************
var getQuantity = function(string) {
var reg1 = /(\d+)\s(\w+)/g; // regular expression to extract quantities from message 1.
var qMap = []; //declaring an array to be used to push objects containing item and quantity.
var match;
while (match = reg1.exec(string)) { //we can set match = reg1.exec(string) in the while loop because every time reg1.exec(string) is called it stores the lastIndex match it returned and returns the array of the next match.
  qMap.push({
    item: match[2].replace(/'?s/, ''),
    quantity: match[1]
  });
}
return qMap;
};

var getPrice = function(string) {
  var pMap = []; //declaring an array to be used to push objects containing item and price.
  var match;
  var reg2 = /(\w+'?\w+)[^\d\w]+(\d+)/g; // Regular expression to extract prices from message 2.
  while (match = reg2.exec(string)) {
      pMap.push({
                  item: match[1].replace(/'?s/, ''),
                  price: match[2]
                });
    }
    return pMap;
  };
//
// // WITH A FOR LOOP.
//   var createBill = function(quantityString, priceString) {
//         var getP = getPrice(priceString);
//         var getQ = getQuantity(quantityString);
//         for (var i =0; i<getP.length; i++) {
//           for (var j =0; j<getP.length; j++) {
//           if (getP[i].item === getQ[j].item) {
//             getP[i].quantity = getQ[j].quantity;
//              getP[i].subtotal = getP[i].price * getQ[j].quantity;
//           }
//         }
//        }
//     return getP;
//   };
// // OR WITH A forEach FUNCTION.
  var createBill = function(quantityString, priceString) {
        var getP = getPrice(priceString);
        var getQ = getQuantity(quantityString);
        getP.forEach(function(pObj) {
                getQ.forEach(function(qObj) {
                     if (pObj.item === qObj.item) {
                          pObj.quantity = qObj.quantity;
                           pObj.subtotal = pObj.price * qObj.quantity;
                       }
                 });
               });
    return getP;
  };
// //****************************************************************
// var getQuantity = function(quantityString) {
// var reg1 = /(\d+)\s(\w+)/g; // regular expression to extract quantities from message 1.
// var qMap = []; //declaring an array to be used to push objects containing item and quantity.
// var match;
// while (match = reg1.exec(quantityString)) { //we can set match = reg1.exec(string) in the while loop because every time reg1.exec(string) is called it stores the lastIndex match it returned and returns the array of the next match.
//   qMap.push({
//     item: match[2].replace(/'?s/, ''),
//     quantity: match[1]
//   });
// }
// return qMap;
// };
//
// var mergePrice = function(qMap, priceString) {
//   var mergemap = qMap; //declaring an array to be used to push objects containing item and price.
//   var match;
//   var reg2 = /(\w+'?\w+)[^\d\w]+(\d+)/g; // Regular expression to extract prices from message 2.
//   while (match = reg2.exec(priceString)) {
//     mergemap.forEach(function(obj) {
//       if (obj.item === match[1].replace(/'?s/, '')) {
//         obj.price = match[2];
//         obj.subtotal = match[2] * obj.quantity;
//       }
//     });
//   }
//     return mergemap;
//   };
//
//   var createBill = function(quantityString, priceString) {
//         var qMap = getQuantity(quantityString);
//         return mergePrice(qMap, priceString);
//   };
// //****************************************************************
// var getQuantity = function(quantityString) {
// var reg1 = /(\d+)\s(\w+)/g; // regular expression to extract quantities from message 1.
// var qMap = []; //declaring an array to be used to push objects containing item and quantity.
// var match;
// while (match = reg1.exec(quantityString)) { //we can set match = reg1.exec(string) in the while loop because every time reg1.exec(string) is called it stores the lastIndex match it returned and returns the array of the next match.
//   qMap.push({
//     item: match[2].replace(/'?s/, ''),
//     quantity: match[1]
//   });
// }
// return qMap;
// };
//
// var createBill = function(quantityString, priceString) {
//   var mergemap = getQuantity(quantityString); //declaring an array to be used to push objects containing item and price.
//   var match;
//   var reg2 = /(\w+'?\w+)[^\d\w]+(\d+)/g; // Regular expression to extract prices from message 2.
//   while (match = reg2.exec(priceString)) {
//     mergemap.forEach(function(obj) {
//       if (obj.item === match[1].replace(/'?s/, '')) {
//         obj.price = match[2];
//         obj.subtotal = match[2] * obj.quantity;
//       }
//     });
//   }
//     return mergemap;
//   };
// //****************************************************************
// // console.log(extract);

exports.getBill = function(qStr, pStr) {
  return createBill(qStr, pStr);
};

exports.getQuantity = function(qString) {
  return getQuantity(qString);
};

exports.getPrice = function(pString) {
  return getPrice(pString);
};

exports.toPay = function(qStr, pStr) {
  var bill = createBill(qStr, pStr);
  var total = bill.reduce(function(subtotal, item) {return subtotal + item.subtotal;}, 0);
  return 'total due: R'+total;
};
