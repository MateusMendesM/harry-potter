const cabecalho = document.getElementById('cabecalho')
const posicaoY = 700
const logo = document.getElementById('logo')
const navHeaders = document.querySelectorAll('.aNavHeader')
const btnVoltar = document.getElementById('btn-voltar')

window.addEventListener('scroll', function () {
  const scrollY = window.scrollY;
  if (scrollY >= posicaoY) {
    navHeaders.forEach(function (navHeader) {
      navHeader.style.color = 'black';
    });
    cabecalho.style.backgroundColor = 'white';
    logo.style.color = 'black';
    btnVoltar.style.display = 'block'
  } else {
    navHeaders.forEach(function (navHeader) {
      navHeader.style.color = 'white';
    });
    cabecalho.style.backgroundColor = 'black';
    logo.style.color = 'white';
    btnVoltar.style.display = 'none';
  }
});