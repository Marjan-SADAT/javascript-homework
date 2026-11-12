//Student Information
const studentName = "Marjan";
console.log("Student Name:", studentName);

const studentAge = "21";
console.log("Student Age:", studentAge);

const mathematicsMarks = 100;
console.log("Mathematics totalMarks:" ,mathematicsMarks);

const englishMarks = 95;
console.log("English Marks:",englishMarks);

const computerMarks = 90;
console.log("Computer Marks:",computerMarks);


//Arithmetic Operation
const totalMarks = mathematicsMarks + englishMarks + computerMarks;
console.log ("Total Marks:", totalMarks);



const averageMarks = totalMarks/3;
console.log("Average Marks:", averageMarks);


const highestTotalMarks = 300;
console.log("Highest possible Total Marks:", highestTotalMarks);


const remainingMarks = highestTotalMarks - totalMarks;
console.log("Remaining Marks:", remainingMarks);

//Compration Operators
const isStudentAdult = studentAge>=18;
console.log("Is Student 18 or Older:", isStudentAdult);

const isMathGreaterThan80 = mathematicsMarks>80;
console.log("Is Mathmatics Marks Greater Than 80:", isMathGreaterThan80 );

const isEnglishEqualTo100 = englishMarks==100;
console.log("Is English Marks Equal to 100:", isEnglishEqualTo100);

const isComputerDifferentFrom50 = computerMarks !== 50;
console.log("Is Computer Mark Different From 50:", isComputerDifferentFrom50);

const isAveragerGreaterThanorEqualto50 = averageMarks >= 50;
console.log("Is The Averager Eqal to 50 or Greater Than 50:", isAveragerGreaterThanorEqualto50);

//Conditional statements
const score = 95;

if (score >= 90 && score <= 100) {
console.log("Gread:A", score);
}

 else if (score >= 80 && score <= 89) {
console.log("Gread:B", score);
}

else if (score >= 70 && score <= 79){
console.log("Gread:C", score );
}

else if (score >= 60 && score <= 69) {
console.log("Gread:D", score)  ;  
}

else if (score >= 50 && score <= 59) {
 console.log("Gread:E", score);  
}

else{
 console.log("Gread:F", score); 
}






