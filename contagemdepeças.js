var listaDePecas = ["Armotercedor", "motor", "correia dentada", "filtro de ar", "pneu 14"]; //array com as peças para serem vereficadas.

if(listaDePecas.lenght > 5){
    console.log("Cadastro Inválidado! Há um execesso de peças."); //informação que será enviada, caso a quantidade de peças seja maior que que o limite.
}else{
    console.log("Cadastro Validado! Limite de peças permitido.") //informação que será enviada, caso a quantidade de peças corresponda com o mesmo limite.
}

let peso = 80; //peso considerado a 80.

if(peso >= 100){
    console.log("Peso Validado!") //informação que será enviada, caso o peso seja atingido ao mesmo valor ou maior.
}else{
    console.log("Peso Inválidado! O peso está abaixo do normal.") //informação será enviada, caso o peso seja menor que o mesmo.
}

let peca = "Farol";
if(peca.length < 3){
    console.log("O nome da peça é valido para o cadastro")
}else{
    console.log("O nome da peça é muito pequeno")
}