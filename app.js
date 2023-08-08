// 1)Write a program to take input remaining fuel in the car (in liters) from the user. If the fuel is less than 0.25, display "Please refill the fuel in your car."

var txt = "Remaining fuel in the car => <br>";
document.write(txt);
let fuel = .10;
if (fuel < 0.24) {
    document.write("Fuel is less then the given value", fuel)
} else {
    document.write("Fuel is hiegher then the given value", fuel)
}













//2)Run this script and check whether alert messages would be displayed or not (various conditions provided).







//3)Write a program to take input marks obtained in three subjects and the total marks. Calculate the percentage and display the grade and remarks based on the percentage obtained.
var grade;
var remarks;
var sub1_marks = parseFloat(prompt("Enter Subject  1 marks"));
var sub2_marks = parseFloat(prompt("Enter Subject  2 marks"));
var sub3_marks = parseFloat(prompt("Enter Subject  3 marks"));
var total_marks = parseFloat(prompt("Enter total marks"));
var marks_obtained = sub1_marks + sub2_marks + sub3_marks;
var percentage = (marks_obtained / total_marks) * 100;
if (percentage >= 95) {
    grade = "A+";
    remarks = "Excellent!";
}
else if (percentage >= 85) {
    grade = "A";
    remarks = "Very Good!";
}
else if (percentage >= 80) {
    grade = "B";
    remarks = " Good!";
}
else if (percentage >= 75) {
    grade = "C";
    remarks = "Satisfactory!";
}
else if (percentage >= 60) {
    grade = "D";
    remarks = "Pass!";
}
else {
    grade = "F";
    remarks = "Fail";
}
alert("Percentage obtained: " + percentage.toFixed(2) + "%\nGrade: " + "\nRemarks: " + remarks);






//4)Initialize arrays with various data types (literalArr, stringArr, numberArr, boolArr, mixedArr, qualificationArr).

let printStr = "<br><br>Array's with the various data types<br><br>";
document.write(printStr);

let literalArr = [22, 6.98, 'Umer', null, false];
document.write(literalArr, "&nbsp&nbsp&nbsp (This array is literal)<br><br><br>");


let stringArr = ["Wood", "Water", 'Umer', "Ali", "Apple"];
document.write(stringArr, "&nbsp&nbsp&nbsp (This array is String)<br><br><br>");


let numberArr = [22, 16, 50, 19, 17];
document.write(numberArr, "&nbsp&nbsp&nbsp (This array is Number)<br><br><br>");


let boolArr = [true, false];
document.write(boolArr, "&nbsp&nbsp&nbsp (This array is Bool)<br><br><br>");


let mixedArr = [22, 6.98, "Water", null,];
document.write(mixedArr, "&nbsp&nbsp&nbsp (This array is Mixed)<br><br><br>");


let qualificationArr = ["FSC", "ICS", "Bechlor's", "Master's"];
document.write(qualificationArr, "&nbsp&nbsp&nbsp (This array is Qualification)<br><br><br>");








//5)Write a program to store phone manufacturers in an array.
var txt = "<br><br>Store the phone manufacturers are<br>";
document.write(txt);
let manufArr = ["Samsung<br>", "Apple<br>", "Sony<br>", "Nokia<br>"];
console.log(manufArr);

for (let i = 0; i < manufArr.length; i++) {
    document.write(manufArr[i]);
}










//6)Write a program to store student scores in an array and sort the array in ascending order using Array's sort method.

let student_array = [4, 6, 8, 21, 34, 55, , 65, 2, 1];
student_array.sort(function (a, b) { return (a - b) });
document.write(student_array);






//7)Write a program to create a single string from the given array ["This", "is", "my", "cat"].

var strTxt = "<br><br>Create a single String<br>";
document.write(strTxt);

let array1 = ["This", "is", "my", "cat"];
document.write(array1.join("  "));






//8)Implement the FIFO (First In First Out) approach using arrays.

let numArr = [];
for (let i = 3; i < 10; i++)
    numArr.push(i);

document.write("Elements of queue-[" + numArr.join(", ") + "]<br>");

let removedele = numArr.shift();
document.write("removed element-" + removedele + "<br>");

document.write("[" + numArr.join(", ") + "]<br>");

let head = numArr[0];
document.write("head of queue-" + head + "<br>");
let size = numArr.length;
document.write("Size of queue-" + size + "<br>");







//9)// Implement the LIFO (Last In First Out) approach using arrays.

var stack = [];
stack.push("Apple");
stack.push("Banana");
stack.push("Grapes");
stack.push("Mango");
stack.push("Appricote<br>");

var popProd = stack.pop();
document.write("Popped fruits", popProd);
document.write("Stack Remain's", stack);




//10)Write a program to enable "search by user input" in an array and prompt the user whether the item is found in the list or not.

function serItem(array, item) {
    return array.includes(item);
}
let item = ["football", "badminton", "baseball", "hockey", "bat"];
let userEnter = prompt("Please enter the item which you want to be search!");
let itmFound = serItem(item, userEnter);

if (itmFound) {
    alert("User found it! in this list");
} else {
    alert("User can't found it! in this list");
}





//11)Write a program to identify the largest number in the given array.

var stm = "Greater Number in this list";
document.write(stm);

let arr1 = [40, 80, 33, 99, 43, 54, 22, 45, 87];
document.write(Math.max(...arr1));





//12)Write a program to identify the smallest number in the given array.

var stm1 = "Smallest Number in this list";
document.write(stm1);
let arr1 = [40, 80, 33, 99, 43, 54, 22, 45, 87];
document.write(Math.min(...arr1));



//13)Write a program to print multiples of 5 ranging from 1 to 100.

var txt2 = "Print the multiples of 5";
document.write(txt2);

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}








//Write a program that takes two numbers & adds them to a new variable. Show the result in your browser


BY ADDITION
let num1 = 9;
let num2 = 5;

let sum = num1 + num2;
document.write(sum, "<br>");

Write a program that takes two numbers & adds them to a new variable. Show the result in your browser.

//14)Repeat task1 for subtraction, multiplication, division & modulus.
BY SUBTRACTION
let num3 = 5;
let num4 = 9;

let sub_num = num3 - num4;
document.write(sub_num, "<br>");

BY MULTIPLICATION
let num5 = 5;
let num6 = 9;

let mul_num = num5 * num6;
document.write(mul_num, "<br>");

BY DIVISION
let num7 = 5;
let num8 = 9;

let div_num = num7 / num8;
document.write(div_num, "<br>");

BY MODULUS
let num9 = 5;
let num10 = 9;

let mod_num = num9 % num10;
document.write(mod_num, "<br>");


//15) Write a program to take "city" name as input from the user. If the user enters "Karachi", welcome the user like this: "Welcome to the city of lights."

let city_name = prompt("Enter the name of City ");
if (city_name == "karachi") {
    document.write("Welcome to the city of lights")
} else {
    document.write("Welcome to " + city_name);
}











//16)Write a program to take "gender" as input from the user. If the user is "Male," display "Good Morning Sir." If the user is "Female," display "Good Morning Ma'am."
var gender = prompt("Enter your gender");
if (gender === "male") {
    document.write("Good morning sir!");
}
else if (gender === "female") {
    document.write("Good morning Ma'am!");
}

else {
    document.write("invalid user");
}



//17) Write a program to take input color of the road traffic signal. If the color is "Red," display "Must Stop." If the color is "Yellow," display "Ready to move." If the color is "Green," display "Move now."
var color = prompt("Enter color of the traffic signal");
if (color === "Red") {
    document.write("Must Stop!");
}
else if (color === "Yellow") {
    document.write("Ready to move!");
}
else if (color === "Green") {
    document.write("Move now!");
}
else {
    document.write("Invalid Input");
}
