let posts = [
    "Sveikinu radus darbą",
    "Ar tikrai pabaigus kursą viskas bus gerai",
    "Javascript nėra Java",
    "Rasti video medžiagą visada šaunu",
     ];

function findLongestWord(str) {
     let spltStr;
     let longestWordLength;
     let longestWordValue;
     let longestWord = [];
  
     for (let x = 0; x < str.length; x++) {
        longestWordLength = 0;
        longestWordValue = "";
      spltStr = str[x].split(" ");
  
      for (let i = 0; i < spltStr.length; i++) {
        if (spltStr[i].length > longestWordLength) {
            longestWordLength = spltStr[i].length;
            longestWordValue = spltStr[i];
        }
      }
      longestWord.push(longestWordValue);
    }
    return longestWord;
}
          
  console.log(findLongestWord(posts));