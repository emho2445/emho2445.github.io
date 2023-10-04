//import { hello as helloString, year, printTheYear } from "./script2.js";
// console.log(helloString);

// console.log(year);

// printTheYear();
import * as script2Stuff from "./script2.js";
import printTheMonth from "./script3.js";

import _ from 'lodash'; // October 3 lesson. Loading in a library

const myArray = ['a', 'b', 'c', 'd'];
console.log(_.chunk(myArray,2));

console.log(script2Stuff.hello);

console.log(script2Stuff.year);

printTheMonth();
//console.log(month);
script2Stuff.printTheYear();

