// --------------------
//!!!!!!! D10 !!!!!!!!!!
//---------------------
function rollD10() {
  let d10Result = document.getElementById("d10Result");
  let d10 = Math.floor(Math.random() * 10 + 1);
  d10Result.innerHTML = d10;
}
// --------------------
//!!!!!!! D12 !!!!!!!!!!
//---------------------
function rollD12() {
  var d12Result = document.getElementById("d12Result");
  var d12 = Math.floor(Math.random() * 12 + 1);
  d12Result.innerHTML = d12;
}
// --------------------
//!!!!!!! D20 !!!!!!!!!!
//---------------------
function rollD20() {
  var d20Result = document.getElementById("d20Result");
  var d20 = Math.floor(Math.random() * 20 + 1);
  d20Result.innerHTML = d20;
}
// --------------------
//!!!!!!! D10 !!!!!!!!!!
//---------------------
function rollD100() {
  let d100Result = document.getElementById("d100Result");
  let d100 = Math.floor(Math.random() * 100 + 1);
  d100Result.innerHTML = d100;
}
// --------------------
//!!!!!!! Reset !!!!!!!!!!
//---------------------
function resetAll() {
  let d100Result = document.getElementById("d100Result");
  rollD100();
  reset();
}
