let btnRef = document.querySelectorAll(".btn-option");
let popupRef = document.querySelector(".pop_up");
let newgameBtn = document.getElementById("newGame");
let restartBtn = document.getElementById("rst");
let msgRef = document.getElementById("msg");

let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];

let x = true;
let count = 0;

const disableButtons = () => {
  btnRef.forEach((element) => (element.disabled = true));
  popupRef.classList.remove("hide");
};

const enableButtons = () => {
  btnRef.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  popupRef.classList.add("hide");
};

const winFunction = (letter) => {
  disableButtons();
  if (letter == "X") {
    msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
  } else {
    msgRef.innerHTML = "&#x1F389; <br> 'O' Wins";
  }
};

const drawFunction = () => {
  disableButtons();
  msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";
};

newgameBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});
restartBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});


const winChecker = () => {
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];
   
    if (element1 != "" && (element2 != "") & (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
       
        winFunction(element1);
      }
    }
  }
};

btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (x) {
      x = false;
      element.innerText = "X";
      element.disabled = true;
    } else {
      x = true;
      element.innerText = "O";
      element.disabled = true;
    }
    count += 1;
    if (count == 9) {
      drawFunction();
    }
    winChecker();
  });
});

window.onload = enableButtons;