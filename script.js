var down = document.getElementById('partidade4');
const modeloCircuito = document.querySelector('#cartao-circuito')

var circ = [["Luigi Circuit", "Mushroom Cup", 1 , 1], ["Moo Moo Meadows", "Mushroom Cup", 1 , 2],  
  ["Mushroom Gorge", "Mushroom Cup", 1, 3], ["Toad's Factory", "Mushroom Cup", 1, 4], 
  ["Mario Circuit", "Flower Cup", 2, 5],["Coconut Mall", "Flower Cup", 2, 6],
  ["Dk Summit", "Flower Cup", 2, 7],["Wario's Gold Mine" ,"Flower Cup", 2, 8], 
  ["Daisy Circuit", "Star Cup", 3, 9],["Koopa Cape", "Star Cup", 3, 10], 
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


function random(mn, mx) {  
  return Math.random() * (mx - mn) + mn;  
}  

function sortear() { 
  var vamosJogar = []
  var cont = 1
  var botao = document.getElementById("button")
  botao.parentNode.removeChild(botao)        
  document.getElementById("chamada").innerHTML= '<img class="bandeiraf1" src="./imagens/acessorios/f1.png"> VAMOS JOGAR! <img class="bandeiraf1" src="./imagens/acessorios/f1.png">'  
  while (cont <5){
    fase = circ[Math.floor(Math.random() * circ.length)]                 
    if (!(vamosJogar.includes(fase))){                    
      vamosJogar.push(fase)
      cont++
    }  
  }
  
  for (var pos = 0; pos < 4; pos++) {
    const pistaSorteda = document.importNode(modeloCircuito.content, true);

    const imagemOrdem = pistaSorteda.querySelector('#imagem-ordem');
    imagemOrdem.src = `./imagens/acessorios/sort_${pos+1}.png`;
    
    const nomeCircuito = pistaSorteda.querySelector('#nome-circuito');
    nomeCircuito.innerHTML = `${vamosJogar[pos][0]}`;
    
    const imagemCircuito = pistaSorteda.querySelector('#imagem-circuito');
    imagemCircuito.src = `./imagens/circuitos/p_${vamosJogar[pos][3]}.jpg`;
    
    const nomeCopa = pistaSorteda.querySelector('#nome-copa');
    nomeCopa.innerHTML = `${vamosJogar[pos][1]}`;
    
    const imagemCopa = pistaSorteda.querySelector('#imagem-copa');
    imagemCopa.src = `./imagens/copas/cup0${vamosJogar[pos][2]}.png`
    
    down.appendChild(pistaSorteda);
  }

  var novamente = document.createElement("button")
  novamente.innerHTML = "De novo?"
  novamente.setAttribute("class", "btn3d")
  novamente.setAttribute("onclick", "javascript:location.reload()")
  var btnNovamente = document.getElementById("hidpkmn")
  btnNovamente.appendChild(novamente)
  
  document.body.style.background = "url('./imagens/acessorios/testebg.jpg') no-repeat bottom -180px right -200px"
} 
