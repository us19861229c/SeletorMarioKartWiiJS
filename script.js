const circ = [["Luigi Circuit", "Mushroom Cup", 1 , 1], ["Moo Moo Meadows", "Mushroom Cup", 1 , 2],
  ["Mushroom Gorge", "Mushroom Cup", 1, 3], ["Toad's Factory", "Mushroom Cup", 1, 4],
  ["Mario Circuit", "Flower Cup", 2, 5], ["Coconut Mall", "Flower Cup", 2, 6],
  ["Dk Summit", "Flower Cup", 2, 7], ["Wario's Gold Mine" ,"Flower Cup", 2, 8],
  ["Daisy Circuit", "Star Cup", 3, 9], ["Koopa Cape", "Star Cup", 3, 10],
  ["Maple Treeway","Star Cup", 3, 11], ["Grumble Volcano","Star Cup" , 3, 12],
  ["Dry Dry Ruins","Special Cup", 4, 13], ["Moonview Highway","Special Cup",4 , 14],
  ["Bowser's Castle","Special Cup",4 ,15 ], ["Rainbow Road","Special Cup",4 ,16 ],
  ["Peach Beach","Shell Cup",5 ,17 ], ["Yoshi's Fall","Shell Cup",5 ,18 ],
  ["Ghost Valley 2","Shell Cup",5 ,19 ], ["Mario Raceway","Shell Cup",5 ,20 ],
  ["Sherbet Land", "Banana Cup",6 ,21], ["Shy Guy Beach", "Banana Cup",6 ,22],
  ["Delfino Square", "Banana Cup",6 ,23], ["Waluigi Stadium", "Banana Cup",6 ,24],
  ["Desert Hills", "Leaf Cup",7 ,25], ["Bowser Castle 3", "Leaf Cup",7 ,26],
  ["DK's Jungle Parkway", "Leaf Cup",7 ,27 ], ["Mario Circuit", "Leaf Cup",7 ,28 ],
  ["Mario Circuit 3", "Lightning Cup",8 ,29 ], ["Peach Gardens", "Lightning Cup",8 ,30 ],
  ["DK Mountain", "Lightning Cup", 8, 31 ], ["Bowser's Castle 64", "Lightning Cup",8 ,32 ]];


const botao = document.querySelector('#botao-jogo');
botao.addEventListener('click', sortear);

function sortear() {
  document.querySelector('#titulo-jogo').innerText = 'VAMOS JOGAR!';

  let vamosJogar = [];
  let contador = 1;
  while (contador < 5) {
    let fase = circ[Math.floor(Math.random() * circ.length)];
    if (!(vamosJogar.includes(fase))) {
      vamosJogar.push(fase);
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
    nomeCircuito.innerHTML = `${arrayDeFases[ordem][0]}`;

    const nomeCopa = pistaSorteda.querySelector('#nome-copa');
    nomeCopa.innerHTML = `${arrayDeFases[ordem][1]}`;

    const imagemCopa = pistaSorteda.querySelector('#imagem-copa');
    imagemCopa.src = `./imagens/copas/cup0${arrayDeFases[ordem][2]}.png`;

    const imagemCircuito = pistaSorteda.querySelector('#imagem-circuito');
    imagemCircuito.src = `./imagens/circuitos/p_${arrayDeFases[ordem][3]}.jpg`;

    cartaoPartidas.appendChild(pistaSorteda);
  }
}
