"use strict";
const names = ["Masoud", "Ali"];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 300);
});
promise.then((data) => {
});
//# sourceMappingURL=app.js.map