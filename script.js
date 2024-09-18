let counter = 0;

const title = document.createElement("h1");
title.className = "title";
title.innerHTML = "This is a counter";
document.body.appendChild(title);

const counterDiv = document.createElement("div");
counterDiv.className = "counterDiv";
counterDiv.innerHTML = counter;
document.body.appendChild(counterDiv);

const decrementButton = document.createElement("button");
decrementButton.className = "decrementButton";
decrementButton.innerHTML = "-";
decrementButton.addEventListener("click", () => {
  counter--;
  counterDiv.innerHTML = counter;
});
document.body.appendChild(decrementButton);

const resetButton = document.createElement("button");
resetButton.className = "resetButton";
resetButton.innerHTML = "Reset";
resetButton.addEventListener("click", () => {
  counter = 0;
  counterDiv.innerHTML = counter;
});
document.body.appendChild(resetButton);

const incrementButton = document.createElement("button");
incrementButton.className = "incrementButton";
incrementButton.innerHTML = "+";
incrementButton.addEventListener("click", () => {
  counter++;
  counterDiv.innerHTML = counter;
});
document.body.appendChild(incrementButton);