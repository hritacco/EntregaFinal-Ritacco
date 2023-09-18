new Promise((resolve, reject) =>{
    //cuerpo de la promesa

})

//en un principio el estado siempre va a ser "pending"

const eventoFuturo = (res) => {
    return new Promise((resolve, reject) => {
        if (res === true){
            resolve("Promesa lista")
        }else { reject("Promesa NO lista")}
    })
}

console.log(eventoFuturo(true));
