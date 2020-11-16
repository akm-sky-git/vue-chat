console.log("module20.js")
// для проверки
async function start(){
  return  await Promise.resolve('async working 13_11_20 !!!');
}
start().then(console.log);
