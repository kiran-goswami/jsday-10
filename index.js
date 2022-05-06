// object :- object consists of properties and methods
// properties is also called key vlaue pairs
// methods:- methods are some action performed


console.log("working");

// objects are collection of properties and methods

// create an object


let name1 = "kiran";
console.log("my name is " , name1);

let mobile = {
    brand: "Samsung",
    weight: 200,
    isWorking: true,
    11: "Android version",

    displayInfo: function() {
        console.log(`the brand of my mobile is $ {mobile.brand} and the weight is $(mobile.weight) which is in the working condition &{mobile.isWorking} , also with a android version of ${mobile["11"]} `);
    }
}
console.log(mobile);

// we are adding some values in objects by using below statement
  
mobile.camera = "32px";

console.log(mobile.displayInfo());


delete mobile.isWorking;

// to find something
console.log(mobile.hasOwnProperty("brand"));

// left side keys and right side is attributes

// -----------------------------------------
// empty object


let mobile1 = {};

mobile1.brand = "onePlus";
mobile.weight = 190;
mobile.isWorking = false;
mobile1["camera"] = "32px";

console.log(mobile1);

// object using constructor

function Mobile(brand , camera , weight){
    this.brand = brand;
    this.camera = camera;
    this.weight = weight;
}
let apple = new Mobile("Apple" , 190 , "13px")
let vivo = new Mobile("Vivo" , 210 , "108px")
 
console.log(apple);

console.log(vivo);

console.log(apple.brand);

console.log(Object.keys(apple));

console.log(Object.values(apple));

for(const [key, value] of Object.entries(apple)){
    console.log(key,value);
    // for only values
    console.log(value);
    // for keys only
    console.log(key);
}

// this keyword

//  in an object this refers to the object

//  when we use this keyword alone , then it points to global object

//  in a function , this refers to parent object


vlaue = 23;

console.log(value);


// spread operators...

let arr1 = [1,2,3,4,5];
let arr2 = [7,8,9,10,11];

console.log(arr1.concat(arr2));
let arr3 =[...arr1,...arr2];
console.log(arr3);


// create 2 studentes having properties an name , roll no, class showDetails using Object constructor
