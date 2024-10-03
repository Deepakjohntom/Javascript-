// Array

let CurryPowder = ["Salt", "pepper", "chilli", 205];
console.log(CurryPowder);

// Change Position

let CurryPowder1 = ["Salt", "pepper", "chilli", 205];
CurryPowder1[3] = 200;
CurryPowder1[0] = "Turmeric Powder";
console.log(CurryPowder1);

// Selection All item

let CurryPowder2 = ["Salt", "pepper", "chilli", 205];
let all_li = document.querySelectorAll("li");

all_li[0].innerText = CurryPowder2[0];
all_li[1].innerText = CurryPowder2[1];
all_li[2].innerText = CurryPowder2[2];
all_li[3].innerText = CurryPowder2[3];
console.log(all_li);
