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

interface Lengthy {
  length: number;
}

function getAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element'";
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

console.log(getAndDescribe("Hello there!"));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

extractAndConvert({ name: "Masoud" }, "name");

//------------------++++------------------
//------------------++++------------------
//------------------++++------------------
//------------------++Generics for Classes++------------------
class DataStorage<T extends number | string | boolean> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const newStringData = new DataStorage<string>();
newStringData.addItem("Masoud");
newStringData.addItem("Ali");
newStringData.removeItem("Ali");
console.log(newStringData.getItems());

const newNumberData = new DataStorage<number>();
newNumberData.addItem(1);
newNumberData.addItem(3);
newNumberData.addItem(4);
newNumberData.removeItem(3);
console.log(newNumberData.getItems());

//------------------++++------------------
//------------------++++------------------
//------------------++++------------------
//------------------++Generics Utility Types++------------------

interface CourseGoal {
  title: string;
  description: string;
  date: Date;
}

function setCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.date = date;

  return courseGoal as CourseGoal;

  const nameArray: Readonly<string[]> = ["Masoud", "Ali"];
  console.log(nameArray);
}
