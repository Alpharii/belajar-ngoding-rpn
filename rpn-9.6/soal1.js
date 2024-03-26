function changeMe(arr) {
    let result;
    for(i=0; i<arr.length; i++){
      result = {
        firstName: arr[i][0],
        lastName: arr[i][1],
        gender: arr[i][2],
        age: 2023 - arr[i][3] + ''
      } 
      if (isNaN(result.age)){
        result.age = 'Invalid Birth Year'
      } console.log(result)
    } 
  }
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // Christ Evans: { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 41 } 2023 - 1982 = 41 kan yak wkwk
  // Robert Downey: { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  
  changeMe([]); // ""
