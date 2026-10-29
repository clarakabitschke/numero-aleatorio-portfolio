function maior () {
    let numero1;
    let numero2;

    numero1 = Number(prompt("digite o primerio numero"));
    numero1 = Number(prompt("digite o segundo numero"));

    if(numero1 < numero2){
        alert ("o numero" + numero1 + "é maior que o numero" + numero2 + ".");
        }else if(numero2 < numero1){
            alert("o numero" + numero2 + "é ,aior que o numero" + numero1 + ".");
        }else{
            alert("os numeros são iguais");
        }
}