var gameData = {
  mmr: 0,
  mmrPerClick: 1,
  mmrPerClickCost: 10,
};

function playCampos() {
  gameData.mmr += gameData.mmrPerClick;
  document.getElementById("mmr").innerHTML = gameData.mmr;
}

function studyCampos() {
  if (gameData.mmr >= gameData.mmrPerClickCost) {
    gameData.mmr -= gameData.mmrPerClickCost;
    gameData.mmrPerClick += 1;
    gameData.mmrPerClickCost *= 2;
    document.getElementById("mmr").innerHTML = gameData.mmr;
    document.getElementById("perClickUpgrade").innerHTML =
      "Aumentar QI (Nível " +
      gameData.mmrPerClick +
      ") Cost: " +
      gameData.mmrPerClickCost +
      " MMR";
  }
}
var mainGameLoop = window.setInterval(function () {
  playCampos();
}, 1000);
var saveGameLoop = window.setInterval(function () {
  localStorage.setItem("caiaoClickerSave", JSON.stringify(gameData));
}, 15000);
var savegame = JSON.parse(localStorage.getItem("caiaoClickerSave"));
if (savegame !== null) {
  gameData = savegame;
  document.getElementById("perClickUpgrade").innerHTML =
    "Aumentar QI (Currently Level " +
    gameData.mmrPerClick +
    ") Cost: " +
    gameData.mmrPerClickCost +
    " MMR";
  document.getElementById("mmr").innerHTML = gameData.mmr;
}
