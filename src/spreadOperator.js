/**
 * stop Object assign & array concat, use spread Operator
 */

/**
 *Array Spread Operator 
 */

// old style
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
// Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);

//new style
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// Append all items from arr2 onto arr1
let arr = [...arr1,...arr2];


 /**
  * Object Spread
  */
 //old style
let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };
let clonedObj  = Object.assign(obj1,obj2);

//new style 
let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };
let clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }
let mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }


/**
 * function parameters
 */
//old ways
function LOG(x,y,z){
    console.log(x,y,z);
}
LOG(1,2,3)

//new ways
function LOG(x,yz){
    console.log(x,y,z);
}
LOG(...[1,2,3]) //array[1,2,3] is converted as 1,2,3 arguments
