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
    let stringGrid = this.field.map(row => row.join('')).join('\n');
    console.log(stringGrid);
  }
  static generateField(height, width) {
    
  }
}

const myField = new Field([
  ['* ', '░ ', 'O '],
  ['* ', '░ ', 'O '],
  ['* ', '░ ', 'O ']
])

myField.print();