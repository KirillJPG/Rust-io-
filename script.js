function sum(){
    let num = 0 
    return function (){
        num ++
        console.log(num)
    }
}
