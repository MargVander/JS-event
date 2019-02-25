// "Exercice 1"
 var clickerFooter = document.getElementsByTagName("footer")[0]
 let i = 1
 clickerFooter.addEventListener("click", function() {
   console.log("click numéro " + i);
   alert("click");
   i ++;
 });


// "Exercice 2"
var burgerBtn = document.getElementsByClassName("navbar-toggler")[0]
var burgerMenu = document.getElementById("navbarHeader")
burgerBtn.addEventListener("click", function() {
  burgerMenu.classList.toggle("collapse");
});


// "Exercice 3"
var cardRed = document.getElementsByClassName("card")[0]
var editRed = document.getElementsByClassName("btn-outline-secondary")[0]
editRed.addEventListener("click", function() {
  cardRed.style.color = "red"
});


// "Exercice 4"
var cardGreen = document.getElementsByClassName("card")[1]
var editGreen = document.getElementsByClassName("btn-outline-secondary")[1]
editGreen.addEventListener("click", function() {
  if (cardGreen.style.color == "") {
    cardGreen.style.color = "green"
  }else {
    cardGreen.style.color = ""
  }
});


// "Exercice 5"
var navBar = document.getElementsByClassName("navbar")[0]
navBar.addEventListener("dblclick", function() {
  if (document.styleSheets[0].disabled == false) {
    document.styleSheets[0].disabled = true;
  }else {
    document.styleSheets[0].disabled = false;
  }

})


// "Exercice 6"
for (var x = 0; x < 6; x++) {
  let reduceCardBtn = document.getElementsByClassName("btn-success")[x]
  let reduceCard = document.getElementsByClassName("card")[x]
  let reduceStatus = false
  reduceCardBtn.addEventListener("mouseover", function() {
    if (reduceStatus === false) {
      reduceCard.style.height = "20%"
      reduceCard.style.width = "20%"
      reduceCard.getElementsByTagName("p")[0].classList.add("collapse");
      reduceStatus = true
    }else {
      reduceCard.style.height = ""
      reduceCard.style.width = ""
      reduceCard.getElementsByTagName("p")[0].classList.remove("collapse")
      reduceStatus = false
    }
  });
}


// "Exercice 7"
var rightBtn = document.getElementsByClassName("btn-secondary")[0]
var parentNode = document.getElementsByClassName("row")[1]
rightBtn.addEventListener("click", function() {
  let movingRight = document.getElementsByClassName("col-md-4")[5]
  parentNode.insertBefore(movingRight, parentNode.childNodes[1]);
})


// "Exercice 8"
var leftBtn = document.getElementsByClassName("btn-primary")[0]
leftBtn.setAttribute("href", "#")
leftBtn.addEventListener("click", function() {
  let movingLeft = document.getElementsByClassName("col-md-4")[0]
  parentNode.insertBefore(movingLeft, parentNode.lastChild);
})


// "Exercice 9"
var bodyChange = document.getElementsByTagName("body")[0]
document.addEventListener('keypress', function(e) {
  if (e.which == 97) {
      bodyChange.classList.remove("col-4");
      bodyChange.classList.remove("offset-md-4");
      bodyChange.classList.remove("offset-md-8");
      bodyChange.classList.add("col-4");
    }else if (e.which == 121) {
      bodyChange.classList.remove("col-4");
      bodyChange.classList.remove("offset-md-8");
      bodyChange.classList.add("col-4");
      bodyChange.classList.add("offset-md-4");
    }else if (e.which == 112) {
      bodyChange.classList.remove("col-4");
      bodyChange.classList.remove("offset-md-4");
      bodyChange.classList.add("col-4");
      bodyChange.classList.add("offset-md-8");
    }else if (e.which == 98) {
      bodyChange.classList.remove("col-4");
      bodyChange.classList.remove("offset-md-4");
      bodyChange.classList.remove("offset-md-8");
    }
})
