console.log('Starting notes.js');

module.exports.addnote = () => {
  console.log('addNote')
   return 'notes added'
};

module.exports.add = (a) => {
  console.log('adding...')
   return (b) => {
    return  a + b;
   }
};
