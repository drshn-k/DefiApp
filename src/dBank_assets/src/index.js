
import { dBank } from '../../declarations/dBank';

window.addEventListener("load", async function () {
  update();

})

document.querySelector("form").addEventListener("submit", async function (event) {

  event.preventDefault();

  const button = event.target.querySelector("#submit-btn");

  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);
  // console.log(outputAmount);
  button.setAttribute("disabled", true);

  if (document.getElementById("input-amount").value.length != 0) {
    await dBank.topUp(inputAmount);
  }
  if (document.getElementById("withdrawal-amount").value.length != 0) {
    await dBank.withdraw(outputAmount);
  }

  update();

  await dBank.compound();

  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";


  button.removeAttribute("disabled");

});

async function update() {
  const currentAmount = await dBank.total();
  document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
};