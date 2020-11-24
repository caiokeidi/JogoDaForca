
var letras_usadas = [];
let palavra = '' //Palavra Secreta com caracteres especiais
var palavra_secreta = []; //Na array sem caracteres especiais
var campo_palavra = []; //Como está no campo do _ _ _  _ _
var erros = 0;
var tema = "alimentos"
var game_over = false

var caracteres_especiais = ['ã', 'á', 'à', 'â', 'é', 'è', 'ê', 'î', 'í', 'ì', 'ó', 'ò', 'õ', 'ô', 'ú', 'ù', 'û', 'ç']

function pegar_palavra(){
    let n = Math.random()
    
    palavra_secreta = []

    switch(tema){
        case "alimentos":
            var size = alimentos.length;
            n = Math.floor(size * n)
            console.log(n)

            palavra = alimentos[n];
            
            break;
        
        case "bebidas":
            palavra = bebidas[n];
            break;
        }
    
    for(let i = 0; i < palavra.length; i++){
        if(caracteres_especiais.includes(palavra[i])){
            if(["ã", 'á', 'à', 'â'].includes(palavra[i])){
                palavra_secreta.push('a')
            }
            else if(['é', 'è', 'ê'].includes(palavra[i])){
                palavra_secreta.push('e')
            }
            else if(['î', 'í', 'ì'].includes(palavra[i])){
                palavra_secreta.push('i')
            }
            else if(['ó', 'ò', 'õ', 'ô'].includes(palavra[i])){
                palavra_secreta.push('o')
            }
            else if(['ú', 'ù', 'û'].includes(palavra[i])){
                palavra_secreta.push('u')
            }
            else if(['ç'].includes(palavra[i])){
                palavra_secreta.push('c')
            }
            

        }
        else{
            palavra_secreta.push(palavra[i]);
        }
        
    }
}

function processar_campo(){

    for(let i = 0; i < palavra_secreta.length; i++){
        if(palavra_secreta[i] == " "){
            campo_palavra.push("&nbsp &nbsp ") 
        }
        else if(palavra_secreta[i] == "-"){
            campo_palavra.push(" - ")
        }
        else{
            campo_palavra.push(" _ ")
        }
        
    }
}

function checar_letra(letra){
    let posicoes_corretas = []
    for(let i = 0; i < palavra_secreta.length; i++){
        if(letra == palavra_secreta[i]){
            campo_palavra[i] = palavra[i].toUpperCase()
            posicoes_corretas.push(i)
        }
    }

    letraUsada(letra);

    if(posicoes_corretas.length == 0){
        erros += 1

        if(erros >= 6){
            game_over = true
        }

        return 1;
        
    }
    else{
        return 0;
    }
}

function letraUsada(letra){
    letras_usadas.push(letra)
    
}
