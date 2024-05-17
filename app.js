// 2.

// function check(arr) {
//         const result = [];
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i].includes("javascript")) {
//                 result[i] = true;
//             } else {
//                 result[i] = false;
//             }
//         }
//         return result;
//     }

//     const input = ["javascript", "react", "nodeJs"];
//     const output = check(input);
//     console.log(output);

//     const input1 = ["java", "py", "c++"];
//     const output1 = check(input1);
//     console.log(output1);

// 6.

// function reverseByWord(sentence) {
//         const word = sentence.split(' ');
//         const reverseWords = word.reverse();
//         const reverseSentence = reverseWords.join(' ');

//         return reverseSentence;
//     }

//     const input = "Success comes to those who work hard";
//     const output = reverseByWord(input);
//     console.log(output);

// 5.
// function reverseString(input) {
//         return input.split("").reverse().join("");
//     }

//     var input = "i am learning javascript";
//     var reversed = reverseString(input);
//     console.log(reversed);

// 1.
// function capitalize(line) {
//         let words = line.split(' ');
//         for (let i = 0; i < words.length; i++) {
//           words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//         }

//         return words.join(' ');
//       }

//       let input = "this is javascript";
//       let output = capitalize(input);
//       console.log(output);




// let input = document.getElementById("input");
// let btn = document.getElementById("btn");
// let output = document.getElementById("output");

// btn.addEventListener("click", () => {
//   let inputValue = input.value;
//   let res = capitalize(inputValue);
//   output.innerHTML = `<h2>${res}</h2>`;
// });

// function capitalize(str) {
//   let s = "";
//   for (let i = 0; i < str.length; i++) {
//     if (i == 0 || str[i - 1] == " ") {
//       s = s + str[i].toUpperCase();
//     } else {
//       s = s + str[i];
//     }
//   }
//   return s;
// }
// let st = "this is javascript";
// let res = capitalize(st);
// console.log(res);
