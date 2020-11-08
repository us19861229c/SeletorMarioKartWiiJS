

const botao = document.querySelector('#botao-jogo');
botao.addEventListener('click', sortear);

function sortear() {
  document.querySelector('#titulo-jogo').innerText = 'VAMOS JOGAR!';

  let vamosJogar = [];
  let contador = 1;
  while (contador < 5) {
    let faseID = Math.ceil(Math.random() * circuitos.length);
    let faseSelecionada = circuitos.filter((circuito) => circuito.id === faseID);
    if (!(vamosJogar.includes(faseSelecionada))) {
      vamosJogar.push(...faseSelecionada);
      contador += 1;
    }
  }

  renderizarFases(vamosJogar);

  botao.innerText = 'De novo?';
  botao.removeEventListener('click', sortear);
  botao.addEventListener('click', () => { location.reload() });
}

function renderizarFases(arrayDeFases) {
  const cartaoPartidas = document.querySelector('#cartao-partidas');
  const modeloCircuito = document.querySelector('#cartao-circuito');

  for (let ordem = 0; ordem < 4; ordem += 1) {
    const pistaSorteda = document.importNode(modeloCircuito.content, true);

    const imagemOrdem = pistaSorteda.querySelector('#imagem-ordem');
    imagemOrdem.src = `./imagens/acessorios/sort_${ordem+1}.png`;

    const nomeCircuito = pistaSorteda.querySelector('#nome-circuito');
    nomeCircuito.innerHTML = `${arrayDeFases[ordem].nomeCircuito}`;

    const nomeCopa = pistaSorteda.querySelector('#nome-copa');
    nomeCopa.innerHTML = `${arrayDeFases[ordem].nomeCopa}`;

    const imagemCopa = pistaSorteda.querySelector('#imagem-copa');
    imagemCopa.src = `./imagens/copas/cup0${arrayDeFases[ordem].idCopa}.png`;

    const imagemCircuito = pistaSorteda.querySelector('#imagem-circuito');
    imagemCircuito.src = `./imagens/circuitos/p_${arrayDeFases[ordem].id}.jpg`;

    cartaoPartidas.appendChild(pistaSorteda);
  }
}
