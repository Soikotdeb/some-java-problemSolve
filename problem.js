problem=1
// discription--->:What this function does is that they will take a positive number as input. Then they multiply him by 3, then add 10, then divide by 2 and finally subtract 5. The output will return them.

function mindGame(number) {
    if (typeof number !== "number"){
        return "Number is invalid.";
        }
    const total=(number*3+10)/2-5;
   return total;
    } 

    
 


    problem=2
    discription--->:The function evenOdd takes a parameter inputString and checks if it is a valid input. The input is considered valid if it is a string. If the input is not a string, the function returns a message "Invalid input. Please enter a string."
 If the input is a string, the function calculates the length of the string and checks if it is even or odd. If the length of the string is even, the function returns the string "Even". If the length of the string is odd, the function returns the string "Odd".

function evenOdd(inputString) {
    if (typeof inputString !== "string"){
      return "Invalid input. Please enter a string.";
      }

    let stringLength = inputString.length;
    if (stringLength % 2 === 0) {
      return 'Even';
    } else {
      return 'Odd';
    }
  }

 

    
    problem=3
discription--->: If a function takes an input of a number and divides it by 7, and if the remainder is equal to 7 then it will return the double of the original input.
    
     function isLGSeven(number){
        if (typeof number !== "number"){
            return "Invalid input. Please enter a number.";
            }
        if (number < 7) {
        return  (number - 7);
        } else {
        return(number * 2);
        }
        }
    

    problem=4
discription--->:declare  a function called "findingBadData" that takes an array of numbers as input. The numbers in the array can be either negative (less than zero) or positive (greater than or equal to zero). Any negative number is referred to as "Bad Data". Any positive number is referred to as "Good Data". find out how many "Bad Data" numbers are in the array and return that number.

    function findingBadData(data){
        let count = 0;
        for (let i = 0; i < data.length; i++) {
          const elements = data[i];
          if (typeof elements !== "number") {
            return "Please enter an array with numbers";
          }
        else  if (elements < 0) {
            count++;
          }
        }
        return count;
      }




    problem=5   
    discription---->:I will set the first parameter to 21, the second parameter to 32 and the third parameter to 43. Then I will add them all together. After that, I will put a condition of 2000 or more and if it is true, I will print the result and return it.

    function gemsToDiamond(friend1, friend2, friend3) {
     if (typeof friend1 !== 'number' || typeof friend2 !== 'number' || typeof friend3 !== 'number') {
    return 'Number is invalid';
  }
        let totalDiamond= (friend1 * 21) + (friend2 * 32) + (friend3 * 43);
        if (totalDiamond > 2000) {        
            return totalDiamond - 2000;
        } 
        else {
            return totalDiamond;
        }
    }
    
    
    

  