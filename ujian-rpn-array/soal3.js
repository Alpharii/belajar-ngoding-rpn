/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  let arr1 = []
  let arr2 = []
  let arr3 = []
  let result = [arr1,arr2,arr3]
    for (i=0; i<animals.length; i++){
      if(animals[i][0] == "a"){
        arr1.push(animals[i])
      } else if (animals[i][0]== "c"){
        arr2.push(animals[i])
      } else if (animals [i][0] == "k"){
        arr3.push(animals[i])
      } 
    } return result
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]