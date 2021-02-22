//  Do the below programs in anonymous function and IIFE 
// 1. Print odd numbers in an array 
var arr = [12, 45, 23, 54, 13, 65, 78, 56, 87];

//Anonymous
var printOddNumbers = (arr) => {
    for (let value of arr) {
        if (!(value % 2 == 0)) {
            console.log(value); // 45 23 13 65 87
        }
    }
}
printOddNumbers(arr);
//IIFE
((arr) => {
    for (let value of arr) {
        if (!(value % 2 == 0)) {
            console.log(value); // 45 23 13 65 87
        }
    }
})(arr);

// 2. Convert all the strings to title caps in a string array
var strArray = ["sowmya", "bala", "Aravindhan", "kuttu"];

// Anonymous
var convertToTitleCaps = (strArray) => {
    var newStrArr = [];
    for (let value of strArray) {
        newStrArr.push(value[0].toUpperCase() + value.slice(1));
    }
    console.log(newStrArr); //[Sowmya,Bala,Aravindhan,Kuttu]
}
convertToTitleCaps(strArray);
// IIFE
((strArray) => {
    var newStrArr = [];
    for (let value of strArray) {
        newStrArr.push(value[0].toUpperCase() + value.slice(1)); //Sowmya Bala Aravindhan Kuttu
    }
    console.log(newStrArr); //[Sowmya,Bala,Aravindhan,Kuttu]

})(strArray);

// 3. Sum of all numbers in an array 
var arr = [12, 23, 45, 56, 78];

//Anonymous
var SumNos = (arr) => {
    var sum = 0;
    for (var value of arr) {
        sum += value;
    }
    console.log(sum);  //214
}
SumNos(arr);

//IIFE
((arr) => {
    var sum = 0;
    for (var value of arr) {
        sum += value;
    }
    console.log(sum);  //214
})(arr);

// 4. Return all the prime numbers in an array 

//Anonymous
var arr = [19, 3, 17, 12, 61, 56, 65, 59, 43, 76];

var returnPrime = (arr) => {
    var primeArr = [];
    for (let i = 0; i < arr.length; i++) {
        checkPrime(arr[i], primeArr);
    }
    return primeArr;
}

var checkPrime = (n, primeArr) => {
    var prime = true;
    for (let i = 2; i < n / 2; i++) {
        if (n % i == 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        primeArr.push(n);
    }
}
console.log(returnPrime(arr)); //[19, 3, 17, 61, 59, 43]

//IIFE
let iifeReturn = ((arr) => {
    var primeArr = [];
    for (let i = 0; i < arr.length; i++) {
        checkPrime(arr[i], primeArr);
    }

    return primeArr;
})(arr);
console.log(iifeReturn);

// 5. Return all the palindromes in an array
var arr = ["madam", "sow", "abbccbba", "bala", "amma", "kuttu"];

//Anonymous
var returnPalindrome = (arr) => {
    var palindromeArr = [];
    for (let i = 0; i < arr.length; i++) {
        checkPalindrome(arr[i], palindromeArr);
    }
    return palindromeArr;
}
var checkPalindrome = (str, palindromeArr) => {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return;
        }
    }
    palindromeArr.push(str)
    return palindromeArr;
}

console.log(returnPalindrome(arr));

//IIFE
var iifePalindrome = ((arr) => {
    var palindromeArr = [];
    for (i = 0; i < arr.length; i++) {
        checkPalindrome(arr[i], palindromeArr)
    }
    return palindromeArr;
})(arr);
console.log(iifePalindrome);

// 6. Return median of two sorted arrays of same size 
// 7. Remove duplicates from an array
var arr = [12, 23, 34, 56, 34, 12, 87];

//Anonymous
var removeDuplicates = (arr) => {
    let arr1 = [];
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr1.push(arr[i])
            }
        }
    }
    for (let value of arr1) {
        let index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
        }
    }
    return arr;
}
console.log(removeDuplicates(arr));

//Better approach

var removeDuplicatesBetter = (arr) => {
    let arr1 = [];
    for (i = 0; i < arr.length; i++) {
        if (arr1.indexOf(arr[i]) === -1) {
            arr1.push(arr[i]);
        }
    }
    return arr1;
}
console.log(removeDuplicatesBetter(arr));

//iife
var iifeRemoveDups = ((arr) => {
    let arr1 = [];
    for (i = 0; i < arr.length; i++) {
        if (arr1.indexOf(arr[i]) === -1) {
            arr1.push(arr[i]);
        }
    }
    return arr1;
})(arr);
console.log(iifeRemoveDups);


// 8. Rotate an array by k times and return the rotated array
