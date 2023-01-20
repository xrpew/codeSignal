function solve(n){
    let people = n.filter(enes=>enes != -1);
    let sorted = people.sort((a,b)=> b - a );
    
    for (let i = 0; i < n.length; i++ ){
        if(n[i] !== -1){
            n[i]= people.pop();
        }
    }
    return n
}
