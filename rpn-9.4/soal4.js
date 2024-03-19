/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

contoh:
barbarian kenapa bisa true?
karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

Spasi juga dianggap sebagai karakter
*/

function checkAB(str) {
  let num = str.split ('')
  for(i=0; i<num.length; i++){
    if(num[i] === 'a' && num[i+4] === 'b'){
      return true
    } else if(num [i] === 'b' && num[i+4] ==='a') {
      return true
    } 
  } return false
}

  // function checkAB(str) {
  // let hurufA = 0
  // let hurufB = 0
  // for(i=0; i<str.length; i++){
  //   if(str[i] === 'a'){
  //     hurufA++
  //   } else if (str[i] === 'b'){
  //     hurufB++
  //   } 
  // } if(hurufA === 0 || hurufB === 0){
  //   return false
  // }

  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] === 'a') {
  //     for (let j = i + 1; j < str.length; j++) {
  //       if (str[j] === 'b' && j - i === 4) {
  //         return true;
  //       }
  //     }
  //   } else if (str[i] === 'b') {
  //     for (let j = i + 1; j < str.length; j++) {
  //       if (str[j] === 'a' && j - i === 4) {
  //         return true;
  //       }
  //     }
  //   }
  // } return false
  // }

  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false