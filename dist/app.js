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
function getAndDescribe(element) {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element'";
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements.`;
    }
    return [element, descriptionText];
}
console.log(getAndDescribe("Hello there!"));
function extractAndConvert(obj, key) {
    return obj[key];
}
extractAndConvert({ name: "Masoud" }, "name");
//# sourceMappingURL=app.js.map