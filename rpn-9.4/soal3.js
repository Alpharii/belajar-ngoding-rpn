//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
  let result = ''
    for(i=0; i<kalimat.length; i++){
      if(kalimat[i] === kalimat[i].toUpperCase()){
        result += kalimat[i].toLowerCase()
      } else if(kalimat[i] === kalimat[i].toLowerCase()){
        result += kalimat[i].toUpperCase()
      }
  } return result
} 

  // let hurufBesar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  // let hurufKecil = hurufBesar.toLowerCase()
  // let result = ""
  // for(i=0; i<kalimat.length; i++){
  //   for(j=0; j<hurufBesar.length; j++)
  //     if(kalimat[i] === hurufBesar[j]){
  //       result += kalimat[i].toLowerCase()
  //     } else if (kalimat[i] === hurufKecil[j]){
  //       result += kalimat[i].toUpperCase()
  //     } result += kalimat[i]
  // } return result
  // } 

  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"



 
