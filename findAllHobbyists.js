function findAllHobbyists(hobby, hobbies) {
    var tmp = new Array();

    for (let [key, value] of Object.entries(hobbies)) {
        if(value.includes(hobby)) {
            tmp.push(key);
        }
    }
    return tmp;
  }
  
  var hobbies = {
    "Steve": ['Fashion', 'Piano', 'Reading'],
    "Patty": ['Drama', 'Magic', 'Pets'],
    "Chad": ['Puzzles', 'Pets', 'Yoga']
  };
  
  console.log(findAllHobbyists('Yoga', hobbies));