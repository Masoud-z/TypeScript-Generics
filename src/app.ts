const names: Array<string> = ["Masoud", "Ali"]; //<string> shows that the array will contain strings

const promise: Promise<number> = new Promise((resolve, reject) => {
  //<number> shows that the return value of promise would be numbers
  setTimeout(() => {
    // resolve("this is done!");
    //==> Because we sat that the return value of promise is number we can return string

    resolve(10);
  }, 300);
});

promise.then((data) => {
  //   data.split(" ");
  //==> Because we sat that the return value of promise is number we can do string manipulation on its return
});

//Creating a generic function
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const myObj = merge({ name: "Masoud", hobbies: ["sport"] }, { age: 26 });
console.log(myObj);
console.log(myObj.name);
const newObj = merge({ productID: 423423 }, { productName: "Apple" });
console.log(newObj);
console.log(newObj.productID);
