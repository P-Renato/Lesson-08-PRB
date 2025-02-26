/*
We are going to generate an html file where the bg changes color DYNAMICALLY everytime we run the file.
We are going to do that using modules.

What are modules?
A way to avoid namespace collisions
The syntax we are going to use is called "ECMAscript Modules" or ESM
you can define variables and functions as usual.
They are automatically scoped/isolated to that file.
you can export the ones you want and use them in other modules.
*/


// Since we need to manipulate files we need to use the fs module
// We still need to npm init -y our project in order to get
// We need to add "type": "module" to our package.json to tell node that we are using ES6 module syntax (import/export)

import fs from "fs";

// Creating some private variables

const filename_in = "PRB-08-temaplate.html";
const filename_out = "PRB-08.html"; // this is the file we will generate
const encoding = "utf-8";

// We need to create a function 'read' that reads from our template and returns its html
function read(){
    return fs.readFileSync(filename_in, encoding);
}

// We need to create a function 'write' that recieves an html and creates our PRB-08.html file based on it.

function write( html ) {
    fs.writeFileSync (filename_out, html, encoding);
}

/*
Now we need to expose the "read" and "write" function to the outside world
We need 2 types of exports:
- named exports ( useful when exporting multiple funcs/vars)
-default exports ( useful to expot a single value)
*/

// We need to export 2 functions so we use the named export
export { read, write }
