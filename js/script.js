// Ativar items do menu
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add('ativo');
  }
}
links.forEach(ativarLink);

// Ativar items do orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarProduto);

// Ativar bicicletas
const bicicleta = new URLSearchParams(location.search);

function ativarBicicleta(bicicleta) {
  const elemento = document.getElementById(bicicleta);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarBicicleta);

//Expandir perguntas
const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controls);

  resposta.classList.toggle('ativa');
  const ativa = resposta.classList.contains('ativa');
  pergunta.setAttribute('aria-expanded', ativa);
}
function eventosPerguntas(pergunta) {
  pergunta.addEventListener('click', ativarPergunta);
}
perguntas.forEach(eventosPerguntas);

//Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
