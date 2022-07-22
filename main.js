// Constantes e variáveis
const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;

//Função que faz o som tocar conforme o parametro passado
function tocaSom(idElementAudio){
   const elemento = document.querySelector(idElementAudio);

   if (elemento.localName != null && elemento.localName === 'audio') {
         elemento.play();
        }

    else {
        console.log("Elemento não encontrado");
    }
}  

//Atribui o som de cada tecla para o nome de cada classe e roda o som

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const instrumento = listaDeTeclas[contador].classList[1]; 

    listaDeTeclas[contador].onclick = function() {
        tocaSom('#som_'+instrumento);
    }   

    //Deixa vermelho quando botão é clicado pela navegação via teclado
    listaDeTeclas[contador].onkeydown = function(evento){

        if (evento.code === "Space" || evento.code === "Enter" ){
            listaDeTeclas[contador].classList.add('ativa');
        }

    }

    //Remove o efeito vermhlo do botão
    listaDeTeclas[contador].onkeyup = function() {
        listaDeTeclas[contador].classList.remove('ativa');
    }
}
