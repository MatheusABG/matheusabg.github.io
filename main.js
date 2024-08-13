// Ficar Careca
document.addEventListener("DOMContentLoaded", (event) => {
  const imagem = document.getElementById("imagem");
  const areaClicavel = { x: 0, y: 0, width: 50, height: 12 };

  imagem.addEventListener("click", (event) => {
    const rect = imagem.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (
      x >= areaClicavel.x &&
      x <= areaClicavel.x + areaClicavel.width &&
      y >= areaClicavel.y &&
      y <= areaClicavel.y + areaClicavel.height
    ) {
      trocarImagem();
    }
  });

  function trocarImagem() {
    imagem.src = "./img/caiaocareca.png";
  }
});
var gameData = {
  mmr: 0,
  mmrPerClick: 1,
  mmrPerClickCost: 10,
};

// Jogar Campos
function playCampos() {
  gameData.mmr += gameData.mmrPerClick;
  document.getElementById("mmr").innerHTML = gameData.mmr;
}

// Aumentar QI
function studyCampos() {
  if (gameData.mmr >= gameData.mmrPerClickCost) {
    gameData.mmr -= gameData.mmrPerClickCost;
    gameData.mmrPerClick += 1;
    gameData.mmrPerClickCost *= 2;
    document.getElementById("mmr").innerHTML = gameData.mmr;
    document.getElementById("perClickUpgrade").innerHTML =
      "Aumentar QI (Nível " +
      gameData.mmrPerClick +
      ") Custo: " +
      gameData.mmrPerClickCost +
      " MMR";
  }
}
// Salvar
var mainGameLoop = window.setInterval(function () {
  playCampos();
}, 1000);
var saveGameLoop = window.setInterval(function () {
  localStorage.setItem("caiaoClickerSave", JSON.stringify(gameData));
}, 5000);
var savegame = JSON.parse(localStorage.getItem("caiaoClickerSave"));
if (savegame !== null) {
  gameData = savegame;
  document.getElementById("perClickUpgrade").innerHTML =
    "Aumentar QI (Nível " +
    gameData.mmrPerClick +
    ") Custo: " +
    gameData.mmrPerClickCost +
    " MMR";
  document.getElementById("mmr").innerHTML = gameData.mmr;
}
// Barra de progresso
function move() {
  var elem = document.getElementById("myBar");
  var width = 20;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = width * 1 + "%";
    }
  }
}
