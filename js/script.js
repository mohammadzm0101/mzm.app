let x = 2;
let y = "";
if (x >= 2.09 || x < 0.3) {
    // logical comparison condition
    y += "good " + "continue";
} else if (x != 2.00001) {
    y += "hey you";
}else {
    y += "ok"
};
let y1 = "";
switch (2000) {
    case 2001:
        y1 += "field 1 correct";
        break;
    case 2000:
        y1 += "nooo cant belive";
    default:
        y1 += "ok iguess it ";
};
let i = 0;
let y2 = "";
for (;i<=11;){
    y2 += i + "";
    i++;
};
console.log(x, y2);