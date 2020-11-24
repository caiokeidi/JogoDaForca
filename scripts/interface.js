

function processar_palavra(){
    let campo_secreto = document.getElementById("campo_secreto")

    campo_secreto.innerHTML = ''

    
    pegar_palavra();
    processar_campo();

    for(let i = 0; i < campo_palavra.length; i++){
        campo_secreto.innerHTML += campo_palavra[i]
    }

    
    
}

function submitLetter(){
    if(!game_over){
        let letra = ''
        let campo = document.getElementById("campo")

        letra = campo.value.toLowerCase();
        campo.value = ""

        let check = checar_letra(letra)

        if(check == 1){
            atualizarForca();
        }
        else{
            atualizarTela()
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

    }

    }

processar_palavra()