

function processar_palavra(){
    let campo_secreto = document.getElementById("campo_secreto")

    campo_secreto.innerHTML = ''

    
    pegar_palavra();
    processar_campo();

    for(let i = 0; i < campo_palavra.length; i++){
        campo_secreto.innerHTML += campo_palavra[i]
    }    

    atualizar_dica();

    let botao_trocar = document.getElementById("botao_trocar");
    botao_trocar.style = "display: none"
    

}

function submitLetter(){
    if(!game_over){
        let letra = ''
        let campo = document.getElementById("campo")

        letra = campo.value.toLowerCase();
        campo.value = ""

        if(!letras_usadas.includes(letra)){
            
            let check = checar_letra(letra)

            if(check == 1){
                atualizarForca();
            }
            else{
                atualizarTela()

                if(venceu){
                    let campo_aviso = document.getElementById("campo_aviso");
                    campo_aviso.innerHTML = "VOCÊ GANHOU!"

                    let campo_aviso2 = document.getElementById("campo_aviso2");
                    campo_aviso2.innerHTML = `A Palavra está correta! Parabéns!`;

                    let botao_trocar = document.getElementById("botao_trocar");
                    botao_trocar.style = "display: inline-block"
                    
                    let corpo = document.getElementById("corpo")
                    corpo.src = `./images/7.png`

                }
            }
            
        }
        
        atualizarUtilizadas();
    }
    

    

}

function atualizarTela(){
    let campo_secreto = document.getElementById("campo_secreto")

    campo_secreto.innerHTML = ''

    for(let i = 0; i < campo_palavra.length; i++){
        campo_secreto.innerHTML += campo_palavra[i]
    }

}

function atualizarUtilizadas(){
    let campo_usadas = document.getElementById("letras_usadas");
    let string_usadas = 'Letras já usadas: ';
    
    for(let i = 0 ; i < letras_usadas.length ; i++){
        string_usadas += letras_usadas[i] + ' '
    }

    campo_usadas.innerHTML = ''
    campo_usadas.innerHTML = string_usadas
}

function atualizarForca(){

    let corpo = document.getElementById("corpo")


    corpo.src = `./images/${erros}.png`

    if(game_over){
        let campo_aviso = document.getElementById("campo_aviso");
        campo_aviso.innerHTML = "VOCÊ PERDEU!"

        let campo_aviso2 = document.getElementById("campo_aviso2");
        campo_aviso2.innerHTML = `A Palavra era: ${palavra}`;

        let botao_trocar = document.getElementById("botao_trocar");
        botao_trocar.style = "display: inline-block"
    }
}

function atualizar_dica(){
    let campo_dica = document.getElementById("dica");
    let dica = '';

    switch(tema){
        case "alimentos":
            dica = "Alimentos(Qualquer tipo)"
            break;
        
        case "bebidas":
            dica = "Bebidas(Qualquer tipo)"
            break;

        case "cidades_estados":
            dica = "Cidade, Estado ou País"
            break;

        case "filmes_series":
            dica = "Filmes e Séries"
            break;

        case "animes_mangas":
            dica = "Animes e Mangás"
            break;
        
        case "drag_queens":
            dica = "Drag Queens (Brasileiras ou Internacionais)"
            break;
        
        case "dificeis":
            dica = "Boa sorte, pode ser qualquer coisa."
            break;
    }

    campo_dica.innerHTML = `Dica: ${dica}`
}

function reset(categoria){
    mudar_categoria(categoria)
    reset_game();
    processar_palavra();
    atualizarForca();
    atualizarTela();
    atualizarUtilizadas();

    let campo_aviso = document.getElementById("campo_aviso");
    campo_aviso.innerHTML = ""

    let campo_aviso2 = document.getElementById("campo_aviso2");
    campo_aviso2.innerHTML = "";

    

}


function submitTrocar(){
    reset_game();
    processar_palavra();
    atualizarForca();
    atualizarTela();
    atualizarUtilizadas();

    let campo_aviso = document.getElementById("campo_aviso");
    campo_aviso.innerHTML = ""

    let campo_aviso2 = document.getElementById("campo_aviso2");
    campo_aviso2.innerHTML = "";
}

processar_palavra()
