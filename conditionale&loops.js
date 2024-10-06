// if statement

var condition = 50;
if (condition > 30) {
  console.log("congratulation you pass..");
} else {
  console.log("Unfortunately you did not pass...");
}
//  else if statement

var place = "first";
if (place == "first") {
  console.log("gold");
} else if (place == "second") {
  console.log("silver");
} else if (place == "third") {
  console.log("bronze");
} else {
  console.log("no medal");
}
// switch statement

var place = "fourth";

switch (place) {
  case "first":
    console.log("gold");
    break;
  case "second":
    console.log("silver");
    break;
  case "third":
    console.log("Bronze");
    break;
  default:
    console.log("No Model");
}
