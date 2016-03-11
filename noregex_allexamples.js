var m1 = "Hi Xola thanks for joining us last night. Your team ate 8 burgers, drank 17 beers and 11 fanta's";
var m2 = "Please send me the payment via EFT prices are as follows: burgers - 37 each, beers - 12, fanta's 9";
var extract = [];

// //NOTE WITH FILTER: will only return the evaluated expression and nothing else. it IGNORES the request to return an object.
// var m1Split = m1.split(' ');
// var map = m1Split.filter(function(e,idx) {
//   if (isNaN(Number(e))===false) {
//     return {item: m1Split[idx-1], quantity: Number(e)}
//   }
//       });
//   console.log(map);


// //NOTE  WITH MAP : can't do because map will return something for each element. If you set you if statement so that there is nothing to return for some elements then in the map it will show 'undefined'.
// var m1Split = m1.split(' ');
// var map = m1Split.map(function(e,idx) {
//
//   if (!isNaN(Number(e))) {
//     return {item: m1Split[idx+1], quantity: Number(e)};
//   }
//       });
// console.log(map);

// // NOTE WITH REDUCE : can create a 'filtered' object or array from scratch by using [] or {} as the inital values.
var m1Split = m1.split(' ');
var mapReduce = m1Split.reduce(function(arrReduce, e,idx) {
  if (!isNaN(Number(e))) {
    arrReduce.push({item: m1Split[idx+1].replace(',',''), quantity: Number(e)});
  }
  return arrReduce;
      }, []);
console.log(mapReduce);

// // NOTE WITH FOR-IN loop. 'i' is TEXT (e.g. i = "0" instead of 0). So  m1Split[(i+1)] is UNDEFINED. WORKS FOR ARRAY AS WELL AS OBJECT. BUT THE 'i' IN A FORLOOP IS A STRING! But can't create array or object from scratch. Need to declare object/array outside of loop first.
// var m1Split = m1.split(' ');
// var mapForIn = [];
// for (var i in m1Split) {
//   console.log(i++);
// //   console.log(m1Split[i]);
//   if (!isNaN(Number(m1Split[i]))) {
//        mapForIn.push({item: m1Split[(i+1)].replace(',',''), quantity: Number(m1Split[i])});
//       }
// }
// console.log(mapForIn);

// // NOTE WITH FOR LOOP : 'i' is a NUMBER. So  m1Split[(i+1)] is defined.
// var mapFor = [];
// var m1Split = m1.split(' ');
// for (var i=0; i< m1Split.length; i++) {
//   console.log(i++);
// //   console.log(m1Split[i]);
//   if (!isNaN(Number(m1Split[i]))) {
//        mapFor.push({item: m1Split[(i+1)].replace(',',''), quantity: Number(m1Split[i])});
//       }
// }
// console.log(mapFor);

// NOTE WITH FOREACH : (also used by itself as the other for loops. (i.e. do not use if you simply need to RETURN something or go var foreach = array.forEach etc.)) i = CONTENTS OF ELEMENT - does not represent idx. idx = index number.
//NOTE: INTERESTING USE OF FOREACH (when using inside a prototype of a Constructor):
// function Counter() {
//   this.sum = 0;
//   this.count = 0;
// }
// Counter.prototype.add = function(array) {
//   array.forEach(function(entry) {
//     this.sum += entry;
//     ++this.count;
//   }, this);
//   // ^---- Note
// };

var m1Split = m1.split(' ');
var mapForEach = m1Split.forEach(function(i, idx) {
  if (!isNaN(Number(i)) {
       push({item: m1Split[(idx+1)].replace(',',''), quantity: Number(m1Split[i])});
      }
});

console.log(mapForEach);
