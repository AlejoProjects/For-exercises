function impares() {
    let rta = document.getElementById('respuesta1');
    let num = "";
    for(let i = 1;i <51;i += 2){
        num = num + i+",";
        console.log(i);
    }
    console.log(num);
    rta.innerHTML = num;
}
function pokemones() {
    let rta2 = document.getElementById('respuesta2');
    rta2.innerHTML = "porfavor abre la consola para ver la respuesta";

}
function arreglos() {
    let rta3 = document.getElementById('respuesta3');
    let array = [4,"dos",8,"tres",5,9,1,"cero"];
    let numbers = [];
    for(let i = 0;i < array.length;i++){
        if(isNaN(parseInt(array[i]))==false){
            numbers.push(array[i]);
       }
        else{
            continue;
        }
    }
    console.log(numbers);
    rta3.innerHTML = numbers +" son los unicos numeros";
}