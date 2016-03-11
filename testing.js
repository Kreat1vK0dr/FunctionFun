var eat = require('./eating-out_noregex');
var m1 = "Hi Xola thanks for joining us last night. Your team ate 8 burgers, drank 17 beers and 11 fanta's";
var m2 = "Please send me the payment via EFT prices are as follows: burgers - 37 each, beers - 12, fanta's 9";

// console.log(eat.toPay(m1, m2));
// console.log(eat.getQuantity(m1));
console.log(eat.getPrice(m2));
// console.log(eat.getBill(m1, m2));
// console.log(eat.toPay());
