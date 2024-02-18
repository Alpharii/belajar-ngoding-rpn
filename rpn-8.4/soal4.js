function pasanganTerbesar(num) {
   let str = num.toString();
   let arr = str.split('');
   let pasanganTerbesar = "";
    for(i=0; i < arr.length-1; i++){
      let pasanganAngka = arr[i] + arr[i+1]
      pasanganTerbesar = Math.max(pasanganTerbesar, pasanganAngka)
    }
    return pasanganTerbesar
  }

  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
  