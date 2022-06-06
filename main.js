function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;


while(contador < listaDeTeclas.length) {

    const lista = listaDeTeclas[contador];
    const instrumento = lista.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;

    console.log(idAudio);
    
    lista.onclick = function(){
        tocaSom('#toca_som_pom');
    };

    contador = contador + 1;
    console.log(contador);
}