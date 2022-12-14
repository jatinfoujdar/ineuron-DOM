const cards = document.querySelectorAll(".card");
console.log(cards);

var isFlipped = false;
var firstCard;
var secondCard;

cards.forEach((cards) => cards.addEventListener("click", flip))

function flip() {
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);
    checkIt();
  }
}

function checkIt() {
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();

  } else {
    fail();
  }
}


function success() {
  console.log("success");
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
}

function fail() {
  setTimeout(() => {
    firstCard.classList.remove("flip")
    secondCard.classList.remove("flip")
  }, 1000);
}


function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

(function shuffle(){
  cards.forEach((cards)=>{
    var index = Math.floor(math.random()*16)
    cards.style.order = index;
  })
})();
