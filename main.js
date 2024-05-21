function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;

while (contador < listaDeTeclas.length) {
  listaDeTeclas[0].onclick = function () {
    tocaSom("#som_tecla_pom");
  };
  listaDeTeclas[1].onclick = function () {
    tocaSom("#som_tecla_clap");
  };
  listaDeTeclas[2].onclick = function () {
    tocaSom("#som_tecla_tim");
  };
  listaDeTeclas[3].onclick = function () {
    tocaSom("#som_tecla_puff");
  };
  listaDeTeclas[4].onclick = function () {
    tocaSom("#som_tecla_splash");
  };
  listaDeTeclas[5].onclick = function () {
    tocaSom("#som_tecla_toim");
  };
  listaDeTeclas[6].onclick = function () {
    tocaSom("#som_tecla_psh");
  };
  listaDeTeclas[7].onclick = function () {
    tocaSom("#som_tecla_tic");
  };
  listaDeTeclas[8].onclick = function () {
    tocaSom("#som_tecla_tom");
  };
  contador = contador + 1;
  console.log(contador);
}
