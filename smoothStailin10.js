//Para s1 = "aabcc" y s2 = "adcaa", la salida debe ser
// solución(s1, s2) = 3.
// Las cadenas tienen 3 caracteres comunes: 2 "a" y 1 "c".


function solution(s1, s2) {
    let indexOfs = []
    let indexOfb = []

    s1.split('').forEach((element,i) => {
        s2.split('').forEach((ment,b)=>{
            if(element==ment){
                if(indexOfs.includes(i)| indexOfb.includes(b))return 
                indexOfs.push(i)
                indexOfb.push(b)
                // console.log(element, indexOfs);
                return 
            } 
        })
    });
    return (indexOfs.length);
}
solution('aabcc','adcaa') // --> 3
