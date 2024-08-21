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
  }
  get field() {
    return this._field;
  }
  print() {
    console.log(this._field);
    //let stringGrid = this.field.map(row => row.join('')).join('\n');
    //console.log(stringGrid);
  }
  static generateField(height, width) {
    let tempField = fieldCreators.updateField(fieldCreators.generateField(height, width));
    console.log(tempField);
  }
}

const userGridHeight = prompt('What height do you want your game field to be?: ');
const userGridWidth = prompt('What width do you want your game field to be?: ');


Field.generateField(parseInt(userGridHeight), parseInt(userGridWidth))

