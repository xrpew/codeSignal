function solution(a,b){
    let n = 0

    //comparo casillas para saber cuántas hay diferentes
    const dsa = a.map((e,i) => {
        if(e!==b[i]){
        // acumulo las casillas diferentes
            n++
        }
    });
    //luego ordeno las casillas
    a.sort((k,j)=>k-j)
    b.sort((k,j)=>k-j)
    //ahora comparo que todas sean iguales , ya que si no lo son, ya hay problemas
    const asd = a.map((e,i)=>e==b[i])
    //aquí tengo que asegurarme de que máximo hayan 2 casillas diferentes ya que sólo así podría intercalarlas para que quede igual
    asd.push(n<=2)
    
    //aquí me aseguro de que no haya ni un solo false en el orden
    return (!asd.includes(false))

}
console.log(solution(arr1,arr2)); // true