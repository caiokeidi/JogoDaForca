
var letras_usadas = [];
let palavra = '' //Palavra Secreta com caracteres especiais
var palavra_secreta = []; //Na array sem caracteres especiais
var campo_palavra = []; //Como está no campo do _ _ _  _ _
var erros = 0;
var tema = "alimentos"
var game_over = false
var venceu = false

var caracteres_especiais = ['ã', 'á', 'à', 'â', 'é', 'è', 'ê', 'î', 'í', 'ì', 'ó', 'ò', 'õ', 'ô', 'ú', 'ù', 'û', 'ç']

function pegar_palavra(){
    let n = Math.random()
    
    palavra_secreta = []

    switch(tema){
        case "alimentos":
            var size = alimentos.length;
            n = Math.floor(size * n)
            palavra = alimentos[n];
            
            break;
        
        case "bebidas":
            var size = bebidas.length;
            n = Math.floor(size * n);
            palavra = bebidas[n];
            break;

        case "cidades_estados":
            var size = cidades_estados.length;
            n = Math.floor(size * n)
            palavra = cidades_estados[n];
            break;


        case "filmes_series":
            var size = filmes_series.length;
            n = Math.floor(size * n)
            palavra = filmes_series[n];
            break;

        case "animes_mangas":
            var size = animes_mangas.length;
            n = Math.floor(size * n)
            palavra = animes_mangas[n];
            break;
        
        case "drag_queens":
            var size = drag_queens.length;
            n = Math.floor(size * n)
            palavra = drag_queens[n];
            break;
        
        case "dificeis":
            var size = dificeis.length;
            n = Math.floor(size * n)
            palavra = dificeis[n];
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
            campo_palavra.push("&nbsp ") 
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
        if(!campo_palavra.includes(" _ ")){
            venceu = true;
        }

        return 0;
    }
}

function letraUsada(letra){
    letras_usadas.push(letra)
    
}

function mudar_categoria(nova_categoria){
    tema = nova_categoria
}

function reset_game(){
    game_over = false;
    venceu = false
    erros = 0;
    palavra = '';
    campo_palavra = [];
    palavra_secreta = [];
    letras_usadas = [];
}