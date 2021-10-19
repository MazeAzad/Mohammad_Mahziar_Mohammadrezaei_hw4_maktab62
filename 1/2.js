let string="hello world!";
let reverseString= string.split("").reverse().join("");
if(string===reverseString){
    console.log("the string is equal to its reverse");
}else{
    console.log("the string is not equal to its string");
}