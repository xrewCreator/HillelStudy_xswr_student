let input_data = `[
    {
        "categories": ["dev"],
        "value": ["lolo"]
    }
]`;

let arr_objs = JSON.parse(input_data);
console.log(arr_objs);


let first_obj = arr_objs[0]; // get first

// Як дістаються дані

// Спосіб 1
let value1 = first_obj.value; // first_obj["value"]; //
let cat1 = first_obj["categories"][0];
console.log(value);

// Спосіб 2

let {value: value2, categories: [cat2] } = first_obj
console.log(value2);
console.log(cat2);