"use strict";

document.addEventListener("DOMContentLoaded", start);
console.log("DOMContentLoaded");

let elementToPaint;

async function start() {
  let response = await fetch("puma-01.svg");
  let mySvgData = await response.text();
  document.querySelector("section").innerHTML = mySvgData;
  addUserInteraction();
}
