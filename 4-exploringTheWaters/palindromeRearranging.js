function solution(input){
    let result ={}
    let splites = input.split('')
    splites.sort()
    splites.map((a)=>{
        let sum = 0
        splites.map((j)=>{
            if(a==j){
                sum++    
                result[a]=sum
            }
        })
    })
    let kis = Object.values(result)
    let c= 0
    kis.map(a=> {
        a%2 !== 0 && c++
    })
    // return (!c>1)
    return c<2
}
console.log(solution('asaas')); // true