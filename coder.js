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
    let answerText = document.getElementById("respuesta2");
    answerText.textContent = "";
    let pokemones =
        ['bulbasaur',
            'ivysaur',
            'venusaur',
            'charmander',
            'charmeleon',
            'charizard',
            'squirtle',
            'wartortle',
            'blastoise',
            'caterpie',
            'metapod',
            'butterfree',
            'weedle',
            'kakuna',
            'beedrill',
            'pidgey',
            'pidgeotto',
            'pidgeot',
            'rattata',
            'raticate',
            'spearow',
            'fearow',
            'ekans',
            'arbok',
            'pikachu',
            'raichu',
            'sandshrew',
            'sandslash',
            'nidoran-f',
            'nidorina',
            'nidoqueen',
            'nidoran-m',
            'nidorino',
            'nidoking',
            'clefairy',
            'clefable',
            'vulpix',
            'ninetales',
            'jigglypuff',
            'wigglytuff',
            'zubat',
            'golbat',
            'oddish',
            'gloom',
            'vileplume',
            'paras',
            'parasect',
            'venonat',
            'venomoth',
            'diglett',
            'dugtrio',
            'meowth',
            'persian',
            'psyduck',
            'golduck',
            'mankey',
            'primeape',
            'growlithe',
            'arcanine',
            'poliwag',
            'poliwhirl',
            'poliwrath',
            'abra',
            'kadabra',
            'alakazam',
            'machop',
            'machoke',
            'machamp',
            'bellsprout',
            'weepinbell',
            'victreebel',
            'tentacool',
            'tentacruel',
            'geodude',
            'graveler',
            'golem',
            'ponyta',
            'rapidash',
            'slowpoke',
            'slowbro',
            'magnemite',
            'magneton',
            'farfetchd',
            'doduo',
            'dodrio',
            'seel',
            'dewgong',
            'grimer',
            'muk',
            'shellder',
            'cloyster',
            'gastly',
            'haunter',
            'gengar',
            'onix',
            'drowzee',
            'hypno',
            'krabby',
            'kingler',
            'voltorb'];
    const number = parseInt(document.getElementById('numero_pokemones').value);
    const limit = Math.round(number / 5)* 5;
    if (isNaN(number)) {
        alert("porfavor ingrese un numero");
    }
    else if(limit > 50 || number < 5){
        alert("porfavor ingresa un numero mayor a 5 y menor a 50");
    }
    else {
        for (let i = 0; i <= limit; i++) {
            console.log(pokemones[i]);
            const textNode = pokemones[i];
            answerText.append(textNode + ", ");
        }
    }



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
