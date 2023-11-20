//OBJEKTAS

// let posts = ["Sveikinu radus darbą", "Ar tikrai pabaigus kursą viskas bus gerai", "Javascript nėra Java", "Rasti video medžiagą visada šaunu"];

// let a = "Sveikinu radus darbą";
// let b = "Ar tikrai pabaigus kursą viskas bus gerai";
// let c = "Javascript nėra Java";
//let d = "Rasti video medžiagą visada šaunu";
// let posts = [a, b, c, d];


//     function ilgiausiasŽodis(str) {
//     // str = str.split(" ");
//     let a = "Sveikinu radus darbą";
      
//     for(let i = 0; i < str.length; i++) {
//         if(str[i].length > a.length) {
//             a = str[i]
//         }
//     }
//     return a;
//     }

//     function ilgiausiasŽodis(str) {
//         // str = str.split(" ");
//         let b = "Ar tikrai pabaigus kursą viskas bus gerai";
          
//         for(let i = 0; i < str.length; i++) {
//             if(str[i].length > b.length) {
//                 b = str[i]
//             }
//         }
//         return b;
//         }
    
//     function ilgiausiasŽodis(str) {
//             // str = str.split(" ");
//             let c = "Javascript nėra Java";
              
//             for(let i = 0; i < str.length; i++) {
//                 if(str[i].length > c.length) {
//                     c = str[i]
//                 }
//             }
//             return c;
// //             }
        
//     function ilgiausiasŽodis(str) {
//                 str = str.split(" ");
//                 let d = "Rasti video medžiagą visada šaunu";
                  
//                 for(let i = 0; i < str.length; i++) {
//                     if(str[i].length > d.length) {
//                         d = str[i]
//                     }
//                 }
//                 return d;
//                 }
  

// console.log(ilgiausiasŽodis(d));


// function rastiIlgiausiaZodi(masyvas) {
//     let spltMasyvas;
//     let ilgiausioZodzioIlgis;
//     let ilgiausioZodzioReiksme;
//     let ilgiausiZodziai = [];
  
//     for (x = 0; x < masyvas.length; x++) {
//       ilgiausioZodzioIlgis = 0;
//       ilgiausioZodzioReiksme = "";
//       spltMasyvas = masyvas[x].split(" ");
  
//       for (i = 0; i < spltMasyvas.length; i++) {
//         if (spltMasyvas[i].length > ilgiausioZodzioIlgis) {
//           ilgiausioZodzioIlgis = spltMasyvas[i].length;
//           ilgiausioZodzioReiksme = spltMasyvas[i];
//         }
//       }
//       ilgiausiZodziai.push(ilgiausioZodzioReiksme);
//     }
//     return ilgiausiZodziai;
//   }
  
  function rastiIlgiausiaZodi(str) {
         let posts = [
        "Sveikinu radus darbą",
        "Ar tikrai pabaigus kursą viskas bus gerai",
        "Javascript nėra Java",
        "Rasti video medžiagą visada šaunu",
         ];
        var str = str.split(" ");
    
                for(let i = 0; i < str.length; i++) {
                    if(str[i].length > posts.length) {
                        posts = str[i]
                    }
                }
                return posts;
                }

                let posts = [
                    "Sveikinu radus darbą",
                    "Ar tikrai pabaigus kursą viskas bus gerai",
                    "Javascript nėra Java",
                    "Rasti video medžiagą visada šaunu",
                     ];
  console.log(rastiIlgiausiaZodi(posts));    
    