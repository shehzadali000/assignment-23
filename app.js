// var datr =new Date()
// document.write(datr)


// const date = new Date();


// const month = date.getMonth();


// const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


// alert(monthNames[month]);




// const date = new Date();


// const day = date.getDay();

// const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


// alert(dayNames[day].substring(0, 3));



// var date = new Date();


// var day = date.getDay();

// var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


// if (day === 6 || day === 0) {

//   alert=("It's Fun day");
// }




// var date = new Date();

// var day = date.getDate();


// var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// if (day <= 15) {
//   document.write("First fifteen days of the month");
// } else {
//   document.write("Last days of the month");
// }

// const date = new Date();


// const hours = date.getHours();

// if (hours < 12) {

//   alert("It's AM");
// } else {
 
//   alert("It's PM");
// }

// var laterDate = new Date(2020, 11, 0);

// console.log(laterDate);






// var startDate = new Date(2015, 0, 1);

// var currentDate = new Date();

// var elapsedSeconds = (currentDate - startDate) / 1000;

// document.write("Seconds elapsed since the beginning of 2015: " + elapsedSeconds);





// var date = new Date();

// var hours = date.getHours();

// date.setHours(hours + 1);

// document.write("Date object an hour ahead: " + date);



// var date = new Date();

// date.setFullYear(date.getFullYear() - 100);

// alert("Date object 100 years back: " + date);



// var age = prompt("Please enter your age:");

// var birthYear = new Date();
// birthYear.setFullYear(new Date().getFullYear() - age);

// document.write("Your birth year is: " + birthYear.getFullYear());




// var customerName = prompt("Please enter your name:");

// var currentMonth = new Date().toLocaleString('default', { month: 'long' });

// var units = prompt("Please enter the number of units:");
// var chargesPerUnit = 12.50; 

// var netAmountPayable = units * chargesPerUnit;

// var latePaymentSurcharge = 500;

// var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

// document.write("<h2>K-Electric Bill</h2>");
// document.write("<p>Customer Name: " + customerName + "</p>");
// document.write("<p>Current Month: " + currentMonth + "</p>");
// document.write("<p>Number of units: " + units + "</p>");
// document.write("<p>Charges per unit: " + chargesPerUnit.toFixed(2) + "</p>");
// document.write("<p>Net Amount Payable (within Due Date): " + netAmountPayable.toFixed(2) + "</p>");
// document.write("<p>Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "</p>");
// document.write("<p>Gross Amount Payable (after Due Date): " + grossAmountPayable.toFixed(2) + "</p>");

// CHAPTER   35 - 38

// 1.

// function displayCurrentDateTime() {
   
//     var currentDateTime = new Date();

   
//     var formattedDateTime = currentDateTime.toLocaleString();

  
//     document.getElementById("datetime").innerText = formattedDateTime;
// }


// window.onload = function() {
//     displayCurrentDateTime();
// };



// 2.


// function greetUser(firstName, lastName) {
//     var fullName = firstName + " " + lastName;
//     var greeting = "Hello, " + fullName + "! Welcome!";
//     return greeting;
// }


// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// var greetingMessage = greetUser(firstName, lastName);
// alert(greetingMessage);


// 3.


// function addNumbers() {
    
//     var firstNumber = parseFloat(prompt("Enter the first number:"));

//     var secondNumber = parseFloat(prompt("Enter the second number:"));

 
//     var sum = firstNumber + secondNumber;

   
//     return sum;
// }


// var result = addNumbers();
// alert("The sum of the two numbers is: " + result);


// 4.



// function calculate(num1, num2, operator) {
//     var result;
//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             if (num2 !== 0) {
//                 result = num1 / num2;
//             } else {
//                 result = "Error: Division by zero!";
//             }
//             break;
//         default:
//             result = "Error: Invalid operator!";
//     }
//     return result;
// }

// var num1 = parseFloat(prompt("Enter the first number:"));
// var num2 = parseFloat(prompt("Enter the second number:"));
// var operator = prompt("Enter the operator (+, -, *, /):");

// var result = calculate(num1, num2, operator);
// document.write("Result: " + result);

// 5.

// function square(number) {
//     return number * number;
// }


// var num = parseFloat(prompt("Enter a number:"));
// var result = square(num);
// document.write("The square of " + num + " is: " + result);


// 6.

// function factorial(number) {
    
//     if (number === 0 || number === 1) {
//         return 1;
//     } else {
      
//         return number * factorial(number - 1);
//     }
// }


// var num = parseInt(prompt("Enter a number to compute its factorial:"));

// if (Number.isInteger(num) && num >= 0) {
//     var result = factorial(num);
//     document.write("The factorial of " + num + " is: " + result);
// } else {
//     document.write("Please enter a non-negative integer.");
// }


// 7.

// function displayCounting(start, end) {
 
//     if (start <= end) {
      
//         for (var i = start; i <= end; i++) {
//             document.write(i + "<br>");
//         }
//     } else {
      
//         for (var j = start; j >= end; j--) {
//             document.write(j + "<br>");
//         }
//     }
// }


// var startNum = parseInt(prompt("Enter the start number:"));
// var endNum = parseInt(prompt("Enter the end number:"));


// if (!isNaN(startNum) && !isNaN(endNum)) {
//     document.write("<h2>Counting:</h2>");
//     displayCounting(startNum, endNum);
// } else {
//     document.write("Please enter valid numbers.");
// }

// 8.

// function calculateHypotenuse(base, perpendicular) {
  
//     function calculateSquare(number) {
//         return number * number;
//     }

   
//     var baseSquare = calculateSquare(base);
//     var perpendicularSquare = calculateSquare(perpendicular);

//     var sumOfSquares = baseSquare + perpendicularSquare;

 
//     var hypotenuse = Math.sqrt(sumOfSquares);

 
//     return hypotenuse;
// }


// var base = parseFloat(prompt("Enter the length of the base of the right triangle:"));
// var perpendicular = parseFloat(prompt("Enter the length of the perpendicular of the right triangle:"));

// if (!isNaN(base) && !isNaN(perpendicular) && base > 0 && perpendicular > 0) {
//     var hypotenuse = calculateHypotenuse(base, perpendicular);
//     document.write("The hypotenuse of the right triangle is: " + hypotenuse);
// } else {
//     document.write("Please enter valid positive numbers for the lengths of the base and perpendicular.");
// }


// 9.

// function calculateRectangleArea(width, height) {
//     return width * height;
// }


// var area1 = calculateRectangleArea(5, 7);
// console.log("Area with arguments as value:", area1);

// function calculateRectangleArea(width, height) {
//     return width * height;
// }


// var width = 5;
// var height = 7;
// var area2 = calculateRectangleArea(width, height);
// console.log("Area with arguments as variables:", area2);


// 10.\

// function isPalindrome(str) {
   
//     var cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
  
//     var reversedStr = cleanStr.split('').reverse().join('');
    
 
//     return cleanStr === reversedStr;
// }


// var input = prompt("Enter a string to check if it's a palindrome:");
// if (isPalindrome(input)) {
//     alert("'" + input + "' is a palindrome!");
// } else {
//     alert("'" + input + "' is not a palindrome.");
// }


// 11.

// function capitalizeFirstLetterOfEachWord(str) {
  
//     var words = str.split(" ");
    

//     for (var i = 0; i < words.length; i++) {
      
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
    
  
//     var capitalizedString = words.join(" ");
    
 
//     return capitalizedString;
// }


// var inputString = 'the quick brown fox';
// var outputString = capitalizeFirstLetterOfEachWord(inputString);
// console.log("Original string:", inputString);
// console.log("Transformed string:", outputString);


// 12.

// function findLongestWord(str) {
  
//     var words = str.split(" ");
    

//     var longestWord = "";
//     var maxLength = 0;
 
//     fo
//         if (words[i].length > maxLength) {
         
//             longestWord = words[i];
//             maxLength = longestWord.length;
//         }
//     }
    
 
//     return longestWord;


// // Example usage:
// var inputString = 'Web Development Tutorial';
// var longestWord = findLongestWord(inputString);
// console.log("Longest word in the string:", longestWord);


// 13.

// function countOccurrences(str, letter) {
    
//     var count = 0;
    
  
//     for (var i = 0; i < str.length; i++) {
       
//         i
//             count++;
//         }
//     }
    
    
//     return count;


// var inputString = 'JSResourceS.com';
// var letterToCount = 'o';
// var occurrences = countOccurrences(inputString, letterToCount);
// console.log("Number of occurrences of '" + letterToCount + "' in the string:", occurrences);

//14.

// function calcCircumference(radius) {
  
//     var circumference = 2 * Math.PI * radius;
    

//     console.log("The circumference is " + circumference.toFixed(2));
// }

// function calcArea(radius) {
   
//     var area = Math.PI * radius * radius;
    
    
//     console.log("The area is " + area.toFixed(2));
// }


// var radius = parseFloat(prompt("Enter the radius of the circle:"));

// if (!isNaN(radius) && radius > 0) {
//     calcCircumference(radius);
//     calcArea(radius);
// } else {
//     console.log("Please enter a valid positive number for the radius.");
// }


// CHAPTER 38-42

// 1.

// function power(a, b) {
  
//     if (Number.isInteger(b) && b >= 0) {
       
//         if (b === 0) {
//             return 1;
//         } else {
            
//             return a * power(a, b - 1);
//         }
//     } else {
      
//         return "Error: b should be a non-negative integer.";
//     }
// }


// var base = parseFloat(prompt("Enter the base number (a):"));
// var exponent = parseInt(prompt("Enter the exponent (b):"));

// if (!isNaN(base) && !isNaN(exponent)) {
//     var result = power(base, exponent);
//     console.log(base + " raised to the power of " + exponent + " is: " + result);
// } else {
//     console.log("Please enter valid numbers for the")}


// 2.


// function isLeapYear(year) {
 
//     if (year % 4 === 0) {
       
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 return true;
//             } else {
//                 return false;
//             }
//         } else {
//             return true; 
//         }
//     } else {
//         return false;
//     }
// }


// var inputYear = parseInt(prompt("Enter a year to check if it's a leap year:"));

// if (!isNaN(inputYear)) {
//     if (isLeapYear(inputYear)) {
//         console.log(inputYear + " is a leap year.");
//     } else {
//         console.log(inputYear + " is not a leap year.");
//     }
// } else {
//     console.log("Please enter a valid year.");
// }


// 3.

// function calculateTriangleArea(a, b, c) {
   
//     var s = (a + b + c) / 2;

 
//     var expression = s * (s - a) * (s - b) * (s - c);

  
//     if (expression >= 0) {
     
//         var area = Math.sqrt(expression);
//         return area;
//     } else {
  
//         return "Error: The given side lengths do not form a valid triangle.";
//     }
// }


// var sideA = parseFloat(prompt("Enter the length of side a:"));
// var sideB = parseFloat(prompt("Enter the length of side b:"));
// var sideC = parseFloat(prompt("Enter the length of side c:"));

// if (!isNaN(sideA) && !isNaN(sideB) && !isNaN(sideC) && sideA > 0 && sideB > 0 && sideC > 0) {
//     var area = calculateTriangleArea(sideA, sideB, sideC);
//     console.log("The area of the triangle is:", area);
// } else {
//     console.log("Please enter valid positive numbers for the side lengths.");
// }


// 4.


// function calculateAverage(marks1, marks2, marks3) {
//     return (marks1 + marks2 + marks3) / 3;
// }


// function calculatePercentage(marks1, marks2, marks3) {
//     var totalMarks = marks1 + marks2 + marks3;
//     var totalSubjects = 3;
//     return (totalMarks / (totalSubjects * 100)) * 100; 
// }


// function mainFunction() {
//     var marks1 = parseFloat(prompt("Enter marks received in subject 1:"));
//     var marks2 = parseFloat(prompt("Enter marks received in subject 2:"));
//     var marks3 = parseFloat(prompt("Enter marks received in subject 3:"));

//     if (!isNaN(marks1) && !isNaN(marks2) && !isNaN(marks3)) {
//         var average = calculateAverage(marks1, marks2, marks3);
//         var percentage = calculatePercentage(marks1, marks2, marks3);

//         console.log("Average marks:", average.toFixed(2));
//         console.log("Percentage:", percentage.toFixed(2) + "%");
//     } else {
//         console.log("Please enter valid numbers for marks.");
//     }
// }


// mainFunction();


// 5.

// function customIndexOf(str, char) {
   
//     for (var i = 0; i < str.length; i++) {
     
//         if (str.charAt(i) === char) {
        
//             return i;
//         }
//     }
  
//     return -1;
// }


// var str = "Hello, world!";
// var charToFind = "o";
// var index = customIndexOf(str, charToFind);
// console.log("Index of '" + charToFind + "' in the string:", index);


// 6.

// function deleteVowels(sentence) {
   
//     var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

 
//     var result = "";

//     for (var i = 0; i < sentence.length; i++) {
      
//         if (!vowels.includes(sentence[i])) {
        
//             result += sentence[i];
//         }
//     }

 
//     return result;
// }


// var inputSentence = prompt("Enter a sentence (not more than 25 characters):");

// if (inputSentence.length <= 25) {
//     var result = deleteVowels(inputSentence);
//     console.log("Sentence without vowels:", result);
// } else {
//     console.log("Please enter a sentence not more than 25 characters.");
// }


// 7.

// function countSuccessiveVowels(text) {

//     text = text.toLowerCase();
    
 
//     var count = 0;

//     for (var i = 0; i < text.length - 1; i++) {
     
//         switch (text[i]) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 switch (text[i + 1]) {
//                     case 'a':
//                     case 'e':
//                     case 'i':
//                     case 'o':
//                     case 'u':
//                         count++; 
//                         break;
//                 }
//                 break;
//         }
//     }


//     return count;
// }


// var sentence = "Pleases read this application and give me gratuity";
// var occurrences = countSuccessiveVowels(sentence);
// console.log("Number of occurrences of any two vowels in succession:", occurrences);


// 8.


// function convertToMeters(kilometers) {
//     return kilometers * 1000;
// }


// function convertToFeet(kilometers) {
//     return kilometers * 3280.84;
// }


// function convertToInches(kilometers) {
//     return kilometers * 39370.1;
// }

// function convertToCentimeters(kilometers) {
//     return kilometers * 100000;
// }


// var distanceInKilometers = parseFloat(prompt("Enter the distance between two cities in kilometers:"));

// if (!isNaN(distanceInKilometers) && distanceInKilometers >= 0) {
//     var distanceInMeters = convertToMeters(distanceInKilometers);
//     var distanceInFeet = convertToFeet(distanceInKilometers);
//     var distanceInInches = convertToInches(distanceInKilometers);
//     var distanceInCentimeters = convertToCentimeters(distanceInKilometers);

//     console.log("Distance in meters:", distanceInMeters.toFixed(2));
//     console.log("Distance in feet:", distanceInFeet.toFixed(2));
//     console.log("Distance in inches:", distanceInInches.toFixed(2));
//     console.log("Distance in centimeters:", distanceInCentimeters.toFixed(2));
// } else {
//     console.log("Please enter a valid positive number for the distance.");
// }


// 9.

// function calculateOvertimePay(hoursWorked) {
//     const regularHours = 40;
//     const overtimeRate = 12.00;

   
//     if ()
//         var overtimeHours = hoursWorked - regularHours;

    
//      {   var overtimePay = overtimeHours * overtimeRate;

//         return overtimePay;
//     } else {
       
//         return 0;
//     }
// }

// // Example usage:
// var hoursWorked = parseFloat(prompt("Enter the number of hours worked by the employee:"));

// if (!isNaN(hoursWorked) && hoursWorked >= 0) {
//     var overtimePay = calculateOvertimePay(hoursWorked);
//     console.log("Overtime pay: Rs.", overtimePay.toFixed(2));
// } else {
//     console.log("Please enter a valid number of hours worked.");
// }


// 10.

// function calculateCurrencyNotes(amount) {
 
//     var notesOf10 = 0;
//     var notesOf50 = 0;
//     var notesOf100 = 0;

//     notesOf100 = Math.floor(amount);

//     var remainingAmount = amount - notesOf100;

//     notesOf50 = Math.floor(remainingAmount / 0.5);

 
//     remainingAmount -= notesOf50 * 0.5;


//     notesOf10 = Math.floor(remainingAmount / 0.1);

  
//     return {
//         "10": notesOf10,
//         "50": notesOf50,
//         "100": notesOf100
//     };
// }


// var amountInHundreds = parseFloat(prompt("Enter the amount to be withdrawn in hundreds:"));

// if (!isNaN(amountInHundreds) && amountInHundreds >= 0) {
//     var totalAmount = amountInHundreds * 100; 
//     var currencyNotes = calculateCurrencyNotes(totalAmount);
//     console.log("Number of currency notes of each denomination:");
//     console.log("10: " + currencyNotes["10"]);
//     console.log("50: " + currencyNotes["50"]);
//     console.log("100: " + currencyNotes["100"]);
// } else {
//     console.log("Please enter a valid non-negative number for the amount in hundreds.");
// }
