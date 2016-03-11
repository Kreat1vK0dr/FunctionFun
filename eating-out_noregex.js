
var extract = [];
var m1 = "Hi Xola thanks for joining us last night. Your team ate 8 burgers, drank 17 beers and 11 fanta's";
var m2 = "Please send me the payment via EFT prices are as follows: burgers - 37 each, beers - 12, fanta's 9";

var extract = function(string, type) {
  var split = string.split("s").join('').split('- ').join('').split(',').join('').replace("'","").split(' ');
  console.log(split);
  return split.reduce(function(arr, e, idx) {
    // console.log(idx);
    if (!isNaN(Number(e))) {
      console.log("this is e:",e);
      console.log("this is split[idx]:",split[idx]);
      // console.log("this is split[idx+1]:",split[idx+1]);
      console.log("this is split[idx-1]:",split[idx-1]);
      if(type==='quantity') {
      arr.push({item: split[idx+1], quantity: Number(e)});
    } else if (type==='price') {
      arr.push({item: split[idx-1], price: Number(e)});
    }
    }
    return arr;
  }, []);
};

var getQuantity = function(string) {
  return extract(string, 'quantity');
  // var split = string.split(' ');
  // return split.reduce(function(arr, e, idx) {
  //   if (!isNaN(Number(e))) {
  //     arr.push({item: split[idx+1].replace(',','').replace("'s",""), quantity: Number(e)});
  //   }
  // }, []);
};

var getPrice = function(string) {
    return extract(string, 'price', -1);
  // var split = string.split(' ');
  // return split.reduce(function(arr, e, idx) {
  //   if (!isNaN(Number(e))) {
  //     arrReduce.push({item: split[idx-1].replace(',','').replace("'s",""), quantity: Number(e)});
  //   }
  // }, []);
};

var getBill = function(quantityString, priceString) {
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

// console.log(extract);

exports.getBill = function(qStr, pStr){
  return getBill(qStr,pStr);
};
exports.getPrice = function(pStr){
  return getPrice(pStr);
};
exports.getQuantity = function(qStr){
  return getQuantity(qStr);
};

exports.toPay = function(qStr, pStr) {
  var bill = getBill(qStr, pStr);
  var total = bill.reduce(function(subtotal, item) {return subtotal + item.subtotal;}, 0);
  return 'total due: R'+total;
};
