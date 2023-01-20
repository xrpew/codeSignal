// Ticket numbers usually consist of an even number of digits. A ticket
//  number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
// Given a ticket number n, determine if it's lucky or not.

function solution(n) {

    let arr = n.toString().split('')
    let sum1 = 0 
    let sum2 = 0 
    for(let i=0; i<arr.length; i++){
        if(i<arr.length/2){
            sum1 += Number(arr[i])
        }else{
            sum2 += Number(arr[i])
        }
    }
    return (sum1==sum2)
}

solution(12341234) // true 