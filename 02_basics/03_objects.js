// singleton , constructors se singleton banta h
// Object.create se singleton banta as it is constructor
// objeect literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Pragya",
    [mySym]: "mykey1",
    age : 21,
    location : "Jaipur",
    email : "pragya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// 2 ways to access email

console.log(JsUser.email)
console.log(JsUser["email"])

console.log(JsUser[mySym])
//console.log(typeof JsUser.mySym)

JsUser.email = "pragya@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "pragya@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());