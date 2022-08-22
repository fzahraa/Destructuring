console.log("Hi, we are learing destructuring!");

//ARRAY DESTRUCTURING

////without using destructuring
// let introduction = ["Hello", "I" , "am", "Sarah"];
// let greeting = introduction[0];
// let name = introduction[3];

// console.log(greeting);//"Hello"
// console.log(name);//"Sarah"

// //basic array destructuring
// let introduction = ["Hello", "I" , "am", "Sarah"];
// let [greeting, pronoun] = introduction;
//or
//let [greeting, pronoun] = ["Hello", "I" , "am", "Sarah"];
// console.log(greeting);//"Hello"
// console.log(pronoun);//"I"

// //decalring variable before assignment
// let greeting, pronoun;
// [greeting, pronoun] = ["Hello", "I" , "am", "Sarah"];

// console.log(greeting);//"Hello"
// console.log(pronoun);//"I"

// //skipping items in an array (getting first and the last one)
// let [greeting,,,name] = ["Hello", "I" , "am", "Sarah"];

// console.log(greeting);//"Hello"
// console.log(name);//"Sarah"

// //skip the first and the third item
// let [,pronoun,,name] = ["Hello", "I" , "am", "Sarah"];

// console.log(pronoun);//"I"
// console.log(name);//"Sarah"

// //skip all item
// let [,,,,] = ["Hello", "I" , "am", "Sarah"];

// //assigning some items to variable and rest of the items of the same array to another array
// let [greeting, pronoun, ...intro] = ["Hello", "I" , "am", "Sarah"];

// console.log(greeting);//"Hello"
// console.log(pronoun);//"Hello"
// console.log(intro);//["I", "am", "Sarah"]

// //destructuring with functions
// function getArray() {
//     return ["Hello", "I" , "am", "Sarah"];
// } 
// let [greeting,pronoun] = getArray();

// console.log(greeting);//"Hello"
// console.log(pronoun);//"I"

// //use default values
// let [greeting = "hi",name = "Sarah"] = ["hello"];

// console.log(greeting);//"Hello"
// console.log(name);//"Sarah"

// //swap two values with destructuring
// let a = 3;
// let b = 6;

// [a,b] = [b,a];

// console.log(a);//6
// console.log(b);//3

//OBJECT DESTRUCTURING

// //before object destructuring
// let person = {
//     name: "Sarah", 
//     country: "Nigeria", 
//     job: "Developer"
// };

// let name = person.name;
// let country = person.country;
// let job = person.job;

// console.log(name);//"Sarah"
// console.log(country);//"Nigeria"
// console.log(job);//Developer"

////with destructuring
// let person = {
//     name: "Sarah", 
//     country: "Nigeria", 
//     job: "Developer"
// };

// let {name, country, job} = person;

// console.log(name);//"Sarah"
// console.log(country);//"Nigeria"
// console.log(job);//Developer"

// //without declaring an object
// let {name, country, job} = {name: "Sarah", country: "Nigeria", job: "Developer"};

// console.log(name);//"Sarah"
// console.log(country);//"Nigeria"
// console.log(job);//Developer"

// //declare variables before assiging them
// let person = {name: "Sarah", country: "Nigeria", job: "Developer"};
// let name, country, job;

// ({name, country, job} = person);

// console.log(name);//"Sarah"
// console.log(job);//"Developer"

// //using a new variable name
// let person = {name: "Sarah", country: "Nigeria", job: "Developer"};

// let {name: foo, job: bar} = person;

// console.log(foo);//"Sarah"
// console.log(bar);//"Developer"

//using default values
// let person = {name: "Sarah", country: "Nigeria", job: "Developer"};

// let {name = "myName", friend = "Annie"} = person;

// console.log(name);//"Sarah"
// console.log(friend);//"Annie"

//or
// let person = {name: "Sarah", country: "Nigeria", job: "Developer"};

// let {name:foo = "myName", friend: bar = "Annie"} = person;

// console.log(foo);//"Sarah"
// console.log(bar);//"Annie"

// //computed property
// let prop = "name";

// let {[prop] : foo} = {name: "Sarah", country: "Nigeria", job: "Developer"};

// console.log(foo);//"Sarah"

// //combining arrays with objects
// let person = {name: "Sarah", country: "Nigeria", friends: ["Annie", "Becky"]};

// let {name:foo, friends: bar} = person;

// console.log(foo);//"Sarah"
// console.log(bar);//["Annie", "Becky"]

// //nesting in object destructuring
// let person = {
//     name: "Sarah",
//     place: {
//         country: "Nigeria", 
//         city: "Lagos" }, 
//     friends : ["Annie", "Becky"]
// };

// let {name:foo,
//      place: {
//          country : bar,
//          city : x},
//     friends : friend
//     } = person;

// console.log(foo);//"Sarah"
// console.log(bar);//"Nigeria"
// console.log(friend);


// //rest in object destructuring
// let person = {
//     name: "Sarah", 
//     country: "Nigeria", 
//     job: "Developer", 
//     friends: ["Annie", "Becky"]
// };

// let {name, friends, ...others} = person;

// console.log(name);//"Sarah"
// console.log(friends);//["Annie", "Becky"]
// console.log(others);// {country: "Nigeria", job: "Developer"}

// //object destructuring and functions
// function person({name: x, job: y} = {}) {
//     console.log(x);
// }

// person({name: "Michelle"});//"Michelle"
// person();//undefined
// //person(friend);//Error : friend is not defined




