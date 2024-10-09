function mamado(act1, act2) {
    const mamali = {
        character_1: 'abas gholi',
        charachter_2: 'mamdo   Abadi'
    }
    return mamali.charachter_2 + "   " + (24 / 2) + "   " + act1 + "    " + act2;
}
console.log(mamado())
// form private variable use _ ;)
let _x = mamado()
const myObject = {
    first: 'hi',
    second: 'hello'
};
myObject.first_1 = "john";
myObject.first_1 = "little john";
console.log(myObject.first_1);

const third_1 = {
    first: "johny",
    second: "jacki",
    // third: function () {
    //     return this.first + "," + this.second;
    // },
    first2: {
        forExample: "aliens"
    },
    // first3: [
    //     good,
    //     bad
    // ]
};
let x3 = "";
const x = third_1;
x.first = "hiiiiiii";
delete third_1.first;
let y = "first2";
let z = "forExample";

// console.log(third_1.third());
for (let index in third_1) {
    x3 += third_1[index]
};
console.log(x3)
const tree = Object.values(third_1);
console.log(tree);
let me3 = JSON.stringify(third_1);
// now del {  & " "} create vertical
console.log(me3);
function example(name, field, future, end, endNow) {
    this.black_white = name;
    this.feature = future;
    this.group = field;
    this.fourth = end;
};
example.prototype.fifthhh = "notWelcome";
const exampleObj = new example("mammad", "arasho", "good", "baddd");
exampleObj.fourth2 = "good"
exampleObj.fifthhh = "grate"
exampleObj.newThing = function (name) {
this.endNow = name;
};
exampleObj.newThing("korea");
// console.log(exampleObj.newThing("korea"));
console.log(exampleObj);