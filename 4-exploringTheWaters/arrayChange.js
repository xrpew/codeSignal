function solution(a){
    let dura = a.length
    let moves = 0
    let dif = 0 

    for(let i=1;i<dura;i++){
        
        if(a[i]<=a[i-1]){
            console.log('menor o igual');
            a[i]= a[i-1] + 1
        }
        
        console.log(a);
    }
    return moves
}

console.log(solution([1,10,1]));