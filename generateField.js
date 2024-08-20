const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


//Creates a base Field at the specified height and width and filled with base fildCharacter
function generateField(height, width) {
  let grid = [];
  for (let i = height; i > 0; i--) {
    let emptyArray = [];
    while (width > emptyArray.length) {
      emptyArray.push(fieldCharacter);
    }
    grid.push(emptyArray);
  };
  return grid;
}

// Takes Filed from generateField function and adds in character starting position and random holes "O"
function updateField(array) {
  const fullArrayLength = Math.floor(Math.random() * array.length);
  const smallArrayLength = Math.floor(Math.random() * array[0].length);
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      let randomNum = Math.floor(Math.random() * 3);
      if (randomNum === 0) {
        array[i][j] = "O";
      } 
    }
  }
  array[0][0] = pathCharacter;
  array[fullArrayLength][smallArrayLength] = hat;
  let stringGrid = array.map(row => row.join(' ')).join('\n'); 
  return stringGrid;
}

//let testField = generateField(4, 5);
//console.log(testField)
//console.log(updateField(testField));

module.exports.generateField = generateField;
module.exports.updateField = updateField;