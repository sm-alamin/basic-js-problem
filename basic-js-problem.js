// problem-1:
// console.log([] == true);
// problem-2:
// console.log(true === true);
// problem-3:
// const checkTrueFalse = (num) =>{
//     if(typeof num !== 'number' ){
//        return false;
//     }
//     else{
//         return true;
//     }
// }
// const result = checkTrueFalse(10);
// console.log(result);

// ******************practice problem 2 *****************
//problem-1
// let storeFalsyValue = false;
// if(storeFalsyValue) {
// console.log(`Nothing to show!`);
// }
// else {
// console.log(`You are amazing!`);
// }


//problem-2
const mathOperation = (num1, num2, nameOfOperation) => {
    // if(nameOfOperation === 'add'){
    //     return num1 + num2;
    // }else if(nameOfOperation === 'subtract'){
    //     return num1 - num2;
    // }else if(nameOfOperation === 'multiply'){
    //     return num1 * num2;
    // }
    // else if(nameOfOperation === 'divide'){
    //     return num1 / num2;
    // }
    // else if(nameOfOperation === 'modulus'){
    //     return num1 % num2;
    // }
    // else{
    //   return  'Invalid operation'
    // }

    switch (nameOfOperation) {
        case 'add':return num1 + num2;
            break;
        case 'subtract':return num1 - num2;
        break;
        case 'multiply':return num1 * num2;
        break;
        case 'divide':return num1 / num2;
        break;
        case 'modulus':return num1 % num2;
        break;
    
        default:
            return  'Invalid operation'
            break;
    }
}
const result = mathOperation(10,2,'divide');
console.log(result);