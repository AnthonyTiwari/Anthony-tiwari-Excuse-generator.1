import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  function randomFunction() {
    let w = who[Math.floor(Math.random() * who.length)];
    let a = action[Math.floor(Math.random() * action.length)];
    let wh = what[Math.floor(Math.random() * what.length)];
    let wn = when[Math.floor(Math.random() * when.length)];
    return `${w} ${a} ${wh} ${wn}`;
  }

  document.getElementById("excuse").innerText = randomFunction();

  };