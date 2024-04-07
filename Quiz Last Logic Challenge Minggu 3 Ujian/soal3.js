function highestScore(students) {
  let result = {};
  let kelas = [];

  //mencari kelas
  for (let i = 0; i < students.length; i++) {
    let found = false;
    for (let j = 0; j < kelas.length; j++) {
      if (kelas[j] === students[i].class) {
        found = true;
        break;
      }
    }
    if (found === false) {
      kelas.push(students[i].class);
    }
  }
  //mengolah data
  for(i=0; i<kelas.length; i++){
    let highest = 0
    let highestStudent;
    for(j=0; j<students.length; j++){
      if(kelas[i] === students[j].class){
        if(students[j].score > highest){
          highest = students[j].score
          highestStudent = {
            name: students[j].name,
            score: students[j].score
          }
        }
      }
    } result[kelas[i]] = highestStudent
  } return result
}
  
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}