function solution(a){

    let first = 0 ;
    let second= 0;

    for(let i=0; i < a.length ; i++){

        if( (i+1)%2 === 0){
            second += a[i] 
        }else{
            first += a[i]
        }
    }
    
    return [first,second]
}

console.log(solution([50, 60, 60, 45, 70]))