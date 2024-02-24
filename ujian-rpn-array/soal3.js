/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*//*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/

function groupAnimals(animals) {
    animals.sort()
    let result = []
    let container = []
    for(i=0; i<animals.length; i++){
        if (i == 0){
            container.push(animals[i])
        } else if(animals[i][0] !== container[0][0]){
            result.push(container)
            container = [animals[i]]
            console.log(animals[i])
        } else {
            container.push(animals[i])
        }
 } result.push(container)
 console.log(result)
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
