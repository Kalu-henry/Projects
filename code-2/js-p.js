// // // const array = ["them","they","her","him"];
// // // for(let x in array){
// // // console.log(x, array[x]);
// // // }

// // // const person = {name:"henry", age: 30, work:"web developer"};
// // // const another = {};
// // // for(let key in person){
// // //     another[key] = person[key];
// // // }
// // // console.log(another);

// // // const anotherone = Object.assign({school:"Unizik"}, person);
// // // console.log(anotherone);
// // // const thirdone = {...person};
// // // console.log("this is the third one", thirdone);

// // // const address = { street:"Achara Layout",
// // //                   zipCode: 23401,
// // //                   city: "Enugu"  
// // // };

// // // function showAddress(address){
// // //     for(let key in address){
// // //         console.log(key, address[key]);
// // //     };
// // // }
// // // console.log(showAddress(address));

// // // //factory function
// // // function createAddress(city, street, zipCode){
// // // return {
// // //     city: city,
// // //     street: street,
// // //     zipCode: zipCode
// // // };
// // // }

// // // const address = createAddress("awka", "ifite", 23401);
// // // console.log(address);

// // // //constructor function
// // // function AnotherAddress(city, street, zipCode){
// // //     this.city = city;
// // //     this.street = street;
// // //     this.zipCode = zipCode;
// // // }

// // // const newAddress = new AnotherAddress("a", "b", "c");
// // // console.log(newAddress);

// // // let names = "Henry";
// // // const message = `
// // // Hi kalu ${names},

// // // We are pleased to inform you that you have been selecteed to perform the given task.

// // // // Regards,
// // // // Mosh
// // // // `;
// // // // console.log(message);

// // // let address1 = {name: "henry", age: 33, eyecolor: "blue"};
// // // let address2 = {name: "henry", age: 33, eyecolor: "blue"};

// // // function areEqual(address1, address2){
// // // return (address1 === address2)? true : false;
// // // }
// // // console.log(areEqual(address1,address2));

// // const BlogPost = {
// //     title: "Why you should acquire a programming skill",
// //     body: "This will contain reasons you should learn programming",
// //     author: "Kalu Henry",
// //     views: 2600,
// //     comments: {author:"john doe", body:"some texts"},
// // //     isLive:[true, false]
// // //     };
// // //     console.log(BlogPost);

// // const arrays = ["your name", "my name", true, 0, 1, undefined];

// // let x = " ";

// // function myFunction(value, index, array){
// // return x += value;
// // }

// // arrays.forEach(myFunction);
// // console.log(x);

// const person = {
//     firstname: "henry",
//     lastname: "kalu",
//     age: 23,
//     color: function(){
//         let bodyColor = "brown";
//         if (typeof bodyColor === "string"){
//             console.log("brown");
//         }
//         else return "white";
//     }
// };
// console.log("He is ",person.color, " in color");
// const myArray = Object.values(person);
// console.log(myArray);

// const myString = JSON.stringify(person);
// console.log(myString);

// const date = new Date();
// const stringifyme = JSON.stringify(date);
// console.log(stringifyme);

// let number = BigInt("09157029532");
// number = number.toString();
// console.log(typeof number);


// const person = {
//     fname: "Henry",
//     age: 30,
//     weight: 100,
//     get realname(){
//         return this.fname;
//     }
// };

// console.log(person.realname);

// const anotherPerson = {
//     fname: "Queen Vee",
//     age: 34,
//     weight: 90,
//     set realage(realage){
//         this.age = realage;
//     }
// };

// anotherPerson.realage = 44;
// console.log(anotherPerson.age);

function NewPerson(fname, age, height){
    this.fname = fname;
    this.age = age;
    this.height = height;
}

NewPerson.prototype.nationality = "French";

const Person1 = new NewPerson("Henry", 23, 187);
console.log(Person1);
