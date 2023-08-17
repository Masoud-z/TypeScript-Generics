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
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const newStringData = new DataStorage();
newStringData.addItem("Masoud");
newStringData.addItem("Ali");
newStringData.removeItem("Ali");
console.log(newStringData.getItems());
const newNumberData = new DataStorage();
newNumberData.addItem(1);
newNumberData.addItem(3);
newNumberData.addItem(4);
newNumberData.removeItem(3);
console.log(newNumberData.getItems());
function setCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.date = date;
    return courseGoal;
    const nameArray = ["Masoud", "Ali"];
    console.log(nameArray);
}
//# sourceMappingURL=app.js.map