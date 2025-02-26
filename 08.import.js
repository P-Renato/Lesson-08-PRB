/*
Here we need to kickstart everything
First of all we are going to import all of the functions we have exported in other files
*/

import rng from "./08-rng.js";
import {write, read} from  "./main2.js";

// hsl colors look like this 


// I run the rng function and store the returned value in a variable
const number = rng( 255 );

// console.log(number);

// We need to grab the html from the template 
// For that we will use the "read" function

let html = read();

// console.log( html );

html = html.replace("{{hue}}", number);

write ( html );
