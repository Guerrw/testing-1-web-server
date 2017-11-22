// var somePromise = new Promise((reject, resolve)=> {
//   resolve('all clear!!')
//   reject('not clear')
// }) // takes one argume
//
// somePromise.then((res) =>{
//  console.log(res, 'res')
// },(err)=> {
//   console.log(err)
// });

var adding = (a, b) => {
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      if(a.constructor === Number && b.constructor === Number){
         resolve(a + b)
      } else {
        reject('Must be a number!')
      }
    },2000);

    // reject('not clear')
  }) // takes one argume
};
  adding(4, 10).then((res) =>{
    console.log(`Res is : ${res}`)
    return adding(res, '45')

 }).then((res) => {
   console.log('val is ' + res)
 }).catch((err) => {
   console.log(err)
 })
