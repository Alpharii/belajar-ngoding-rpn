//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let result = ""
    for(i=0; i<kata.length; i++){
      for(j=0; j<alphabet.length; j++){
        if(kata[i] == alphabet [j]){
          result += alphabet[j+1];
          }
        }
      } return result
    }

  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu