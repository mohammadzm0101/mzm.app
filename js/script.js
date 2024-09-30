const person1 = {
    name: "john",
    family: "johni"
};
let text = "";
for (let x in person1) {
    text += person1[x] + " ";
};
function student_22(age, jender, father, mothher) {
    this.age = age,
        this.jender = jender,
        this.father = father,
        this.mother = mothher
};
const sina = new student_22(70, 'male', 'adam', "hava");
sina.change = function (name) {
    this.mother = name;
}
sina.change("hor atieh")
console.log(sina.mother);
let mamado = {
    name: "ali"
};
function mamado(act1, act2){
    const mamaliKako =[
        age : 31,
        family : "zarei moghadam",
        name = {
            action_1 : 'go',
       action2 : 20 ;
        }
    ]
}
