"use strict";
const names = ["Masoud", "Ali"];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 300);
});
promise.then((data) => {
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const myObj = merge({ name: "Masoud", hobbies: ["sport"] }, { age: 26 });
console.log(myObj);
console.log(myObj.name);
const newObj = merge({ productID: 423423 }, { productName: "Apple" });
console.log(newObj);
console.log(newObj.productID);
//# sourceMappingURL=app.js.map