console.log("Starting app");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

const command = process.argv[2];

var res = notes.addnote();
var addby5 = notes.add(5)
console.log(addby5(12))

console.log(_.isString(true))
var filteredArray = _.uniq(['Windie', 1, 'Windie'])

console.log(filteredArray)

// console.log(process.argv)
// console.log(process.argv[2])

//
// if(command === 'add') console.log('Command: 'command , ' adding new note')
// else if(command === 'list') console.log('listing all notes')
// else if(command === 'list') console.log('listing all notes')
// else ('command not recognized')


switch(command){
  case 'add':  console.log('Command: ' + command , ' adding new note'); break;
  case 'list': console.log('listing all notes'); break;
  case 'read': console.log('reading all notes'); break;
  case 'remove': console.log('removing notes'); break;
  default: console.log('not recognized')
}

const yargs = require('yargs');
const argv = yargs.argv;
console.log(argv)
