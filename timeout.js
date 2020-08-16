function doSomething() {
    console.log(333);
}
console.log(222);
setTimeout(doSomething, 4000);//4000 is mili second of time interval to run to code

setTimeout(function () {
    console.log('waitinggggg');
}, 4000);

setTimeout(() => {
    console.log('another waiting');
}, 4000)

setInterval(() => {
    console.log('doing it');
}, 3000);

console.log(444);
console.log(555);
console.log(666);
console.log(777);