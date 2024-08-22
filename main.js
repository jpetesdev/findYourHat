// Imported Modules
const fieldCreators = require('./generateField');
const prompt = require('prompt-sync')({sigint: true});


const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this._field = field;
    this._cB = 0;
    this._cS = 0;
    this._location = field[this._cB][this._cS]
  };
  get field() {
    return this._field;
  };
  get currentLocation() {
    return this._location;
  }
  moveDown() {
    this._cB =+ this._cB + 1;
    this._field[this._cB][this._cS] = pathCharacter;
    this._location = this._field[this._cB][this._cS]
    this.print();
  }
  print() {
    let currentField = fieldCreators.updateField(this._field);
    console.log(currentField);
  };
  static generateField(height, width) {
    let tempField = fieldCreators.generateField(height, width);
    return tempField;
  }
}

const userGridHeight = prompt('What height do you want your game field to be?: ');
const userGridWidth = prompt('What width do you want your game field to be?: ');


let userChoiceField = Field.generateField(parseInt(userGridHeight), parseInt(userGridWidth))

let firstGrid = new Field(userChoiceField);
console.log(firstGrid)
console.log(firstGrid.currentLocation)
console.log(firstGrid.print())
firstGrid.moveDown()
console.log(firstGrid)





