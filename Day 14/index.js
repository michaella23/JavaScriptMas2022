function countVowelConsonant(str) {
    let result = 0
    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].match(/[aeiou]/gi)) {
          result += 1
      } else if (arr[i].match(/[^a-z]/gi)) {
          result += 0;
      } else if (arr[i].match(/[^aeiou]/gi)) {
          result += 2;
      }
  }
    return result;
}

let total = 0;
const totalPoints = document.getElementById("total-points");

const input1 = document.getElementById("word1")
const points1 = document.getElementById("points1")

input1.addEventListener("focusout", () => {
        points1.textContent = countVowelConsonant(input1.value);
        total += parseInt(points1.textContent)
        totalPoints.textContent = total; 
})

const input2 = document.getElementById("word2")
const points2 = document.getElementById("points2")

input2.addEventListener("focusout", () => {
        points2.textContent = countVowelConsonant(input2.value);
        total += parseInt(points2.textContent)
        totalPoints.textContent = total; 
})

const input3 = document.getElementById("word3")
const points3 = document.getElementById("points3")

input3.addEventListener("focusout", () => {
        points3.textContent = countVowelConsonant(input3.value);
        total += parseInt(points3.textContent)
        totalPoints.textContent = total; 
})

const input4 = document.getElementById("word4")
const points4 = document.getElementById("points4")

input4.addEventListener("focusout", (d) => {
        points4.textContent = countVowelConsonant(input4.value);
        total += parseInt(points4.textContent)
        totalPoints.textContent = total; 
})

const input5 = document.getElementById("word5")
const points5 = document.getElementById("points5")

input5.addEventListener("focusout", () => {
        points5.textContent = countVowelConsonant(input5.value);
        total += parseInt(points5.textContent)
        totalPoints.textContent = total;      
})

// Test cases
// console.log(countVowelConsonant("Christmas"));
// console.log(countVowelConsonant("Snowman"));
// console.log(countVowelConsonant("reindeer"));
// console.log(countVowelConsonant("North Pole"));
// console.log(countVowelConsonant("mistletoe"));