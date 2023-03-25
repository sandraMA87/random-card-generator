/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  // Crear las variables tanto de los palos de la baraja como de los numeros de la card
  let redSuits = ["♥", "♦"];
  let blackSuits = ["♠", "♣"];
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  // crear la funcion para generar de manera aleatoria la card usando el math random para que recorra las dos variables, las una y las devuelva
  function getRandomSuit() {
    let randomSuit;
    if (Math.random() < 0.5) {
      randomSuit = redSuits[Math.floor(Math.random() * redSuits.length)];
    } else {
      randomSuit = blackSuits[Math.floor(Math.random() * blackSuits.length)];
    }
    return randomSuit;
  }

  function getRandomCard() {
    let randomSuit = getRandomSuit();
    let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    return {
      number: randomNumber,
      suit: randomSuit
    };
  }

  let cardElement = document.getElementById("card");
  let topLeftSuitElement = document.getElementById("top-left-suit");
  let cardNumberElement = document.getElementById("card-number");
  let bottomRightSuitElement = document.getElementById("bottom-right-suit");

  let randomCard = getRandomCard();

  cardNumberElement.innerHTML = randomCard.number;
  cardNumberElement.style.color = "black";
  topLeftSuitElement.innerHTML = randomCard.suit;
  bottomRightSuitElement.innerHTML = randomCard.suit;

  let randomSelectedSuit = topLeftSuitElement.innerHTML;
  if (randomSelectedSuit == "♥" || randomSelectedSuit == "♦") {
    cardElement.style.color = "red";
  }
};
