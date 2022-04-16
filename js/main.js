//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector("button").addEventListener("click", getDrink);

function getDrink() {
  let button = document.querySelector("button")
  let input=document.querySelector("input")
  let drink = document.querySelector("input").value;
  let cards = document.querySelector(".card");
  let drinkIndex = 0;

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink.trim()}`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
     
      const error= document.createElement('p')
      error.style.color='red'
      button.after(error)
      error.innerText=''// find a way to stop this duplicating the error message and to remove it after field is cleared

      if (drink == "") return;

      // if(data.drinks === null) {
      //   error.innerText='Cocktail Not Available, please enter a different Cocktail'
      // //  /// this needs to be removed after new search
      // }
       
      

      cards.innerHTML = "";
     
   data.drinks.forEach((item) => {
        const card = document.createElement("section");
        card.classList.add("drinkCard");
        const drinkNames = document.createElement("h2");
        drinkNames.innerText = item.strDrink;
        const images = document.createElement("img");
        images.src = item.strDrinkThumb;
        const drinkInstructions = document.createElement("p");
        drinkInstructions.innerText = item.strInstructions;
        card.appendChild(drinkNames);
        card.appendChild(images);
        card.appendChild(drinkInstructions);// hide this
        cards.appendChild(card);
        
      }); 
      cards.childNodes.forEach(card=>card.addEventListener('mouseover',getCardInfo(cards)))
      slider(cards,drinkIndex)
      // getCardInfo(slides,timeOut)
    })
   
    .catch((err) => {
      console.log(`error ${err}`);
    }); 
 
}

function slider(cards,drinkIndex) {
  let slides = cards.childNodes
  slides.forEach(slide=>slide.style.display = "none");//starts off as not displayed
  drinkIndex++; // adds 1 with every recursion
  // console.log(drinkIndex)
  if (drinkIndex > slides.length) {
    drinkIndex = 1 // start at 1 again
  }
  slides[drinkIndex-1].style.display = "flex";// goes reverse through array so 1 will be 0, 2 will be -1, 3 -3
  // console.log(` this is - ${drinkIndex -1}`)
  let timeOut = setTimeout(function() {
    slider(cards,drinkIndex)// this is recursive so adds 1 each time which can then be used as the index to grab the slides
}, 2000)// Change image every 2 seconds


}


function getCardInfo(event,cards){
//   let target = event.target
// if(target === cards){
//   target.appendChild(drinkInstructions) //show here


// }




//gorw card and add  card.appendChild(drinkInstructions);
// event.target.innerHTML="hello"
  // clearTimeout(timeOut);
}

/// work out a function to click on drinks and get more details


           // 1
// main.js:51  this is - 0
// main.js:46 2
// main.js:51  this is - 1
// main.js:46 3
// main.js:51  this is - 2
// main.js:46 4
// main.js:51  this is - 3
// main.js:46 5 //set it back to 1
// main.js:51  this is - 0 
// main.js:46 2 // next run it increments and is now 2
// main.js:51  this is - 1
// main.js:46 3
// main.js:51  this is - 2
// main.js:46 4
// main.js:51  this is - 3
// main.js:46 5
// main.js:51  this is - 0
// main.js:46 2
// main.js:51  this is - 1
// main.js:46 3
// main.js:51  this is - 2
// main.js:46 4
// main.js:51  thi



