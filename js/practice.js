//test1

// function max(...numbers){ 
//     const arr = [];
//     let largest = numbers.reduce( (prevVal, curVal) => {
//         return ( prevVal > curVal ) ? prevVal:curVal;
//         })
//         console.log(largest);
// } 

// max(1, 2, 4, 5);  // result to 5 

// max(5, 2, 7, 1, 6);  // result to 7





//test2

// function calculate(args){
//      let result; 
//      if(args.op==="+"){ 
//          result=args.n1+args.n2; 
//         }else if(args.op==="-"){ 
//             result=args.n1-args.n2; 
//         }else{ 
//             result="Not supported"; 
//         } return result; 
//     } 

// Try to call calculate function correctly 
/* For example, if we have an add function like this: 
function add(args){ return args.n1+args.n2; } 
We can call it by passing an object created by JSON literal: 
add({n1:3, n2:4}); // your first way 
You should find another way to create a proper object.  
// your second way */ 

//創造一個物件，裏頭有可以帶入運算符號，以及兩個字串或數值

// function createObj(op, n1, n2) {
//     let obj={};
//     obj.op = op;
//     obj.n1 = n1;
//     obj.n2 = n2;
// console.log(obj);
// return obj;
// }

// createObj("+",5, 6);

//test3

// function avg(data){
//     let sum = 0;
//     for(product of data.products){
//         sum += product.price;
//     }
//     console.log(Math.floor(sum/data.size));
//     return Math.floor(sum/data.size);

// } 

// avg({ 
//     size:3, 
//     products:[
//          { name:"Product 1", price:100 }, 
//          { name:"Product 2", price:700 }, 
//          { name:"Product 3", price:250 } 
//         ] 
//     }); // show the average price of all products
//函式裡面帶入的參數是一個物件，有size, products等key，size是個數值；products是個陣列，現在要計算所有產品的均價
//加總所有產品價格，除以產品數量