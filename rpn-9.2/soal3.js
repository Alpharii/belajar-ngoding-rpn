function cariMedian(arr) {
    let jumlah = 0
    let median = 0
    for(let i = 0; i<arr.length; i++){
        jumlah += arr[i]
    } median = jumlah/arr.length
    if(median % 1 == 0.5){
    return median
    } return Math.round(median)
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5