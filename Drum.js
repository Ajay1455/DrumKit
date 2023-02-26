// document.querySelector(".drum").addEventListener("click", handleClick);
// function handleClick(){
//     alert("I got clicked! ");
// }


//Detecting Button Press
var condition = document.querySelectorAll(".drum").length;

for (var i = 0; i < condition; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
  function handleClick() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    btnAnimation(buttonInnerHTML);
  }
}

//Detecting keyboard press
document.addEventListener("keypress", function (event){
    
    makeSound(event.key);
    btnAnimation(event.key);

        //for multiple CSS attributes
        // var styles = {
        //     "color": "white",
        //     "text-shadow": " 3px 0 #DA0463",
        // };
        // Object.assign(this.style, styles);
    
});

//Animation in Buttons
function btnAnimation(currentkey){
  // var animate=document.querySelector("."+currentkey);
  // animate.classList.add("press");
  switch (currentkey) {
    case "w":
      document.body.style.backgroundColor="#BC243C";
      break;

    case "a":
      document.body.style.backgroundColor="#0072B5";
      break;

    case "s":
      document.body.style.backgroundColor="#009B77";
      break;

    case "d":
      document.body.style.backgroundColor="#C3447A";
      break;

    case "j":
      document.body.style.backgroundColor="#EFC050";
      break;

    case "k":
      document.body.style.backgroundColor="#45B8AC";
      break;

    case "l":
      document.body.style.backgroundColor="#5B5EA6";
      break;

    default:
      document.body.style.backgroundColor="rgb(4, 63, 86)";
  }
  

  setTimeout( function(){
    document.body.style.backgroundColor="rgb(4, 63, 86)";
  },100);


  switch (currentkey) {
    case "w":
      document.querySelector("."+currentkey).style.border="10px outset gold";
      break;

    case "a":
      document.querySelector("."+currentkey).style.border="10px outset gold";
      break;

    case "s":
      document.querySelector("."+currentkey).style.border="10px outset gold";
      break;

    case "d":
      document.querySelector("."+currentkey).style.border="10px outset gold";
      break;

    case "j":
      document.querySelector("."+currentkey).style.border="10px outset gold";
      break;

    case "k":
      document.querySelector("."+currentkey).style.border="10px outset gold";
      break;

    case "l":
      document.querySelector("."+currentkey).style.border="10px outset gold";
      break;

    default:
      document.querySelector("."+currentkey).style.border="10px outset #404B69";
  }
  

  setTimeout( function(){
    document.querySelector("."+currentkey).style.border="10px solid #404B69";
  },100);


  // setTimeout( function(){
  //   animate.classList.remove("press");
  // },100);
}

//function to match detected keys
function makeSound(key){
    switch (key) {
        case "w":
          var tom1 = new Audio("sounds/tom-1.mp3"); //in backend this create audio html tag.
          tom1.play();
  
          break;
  
        case "a":
          var tom2 = new Audio("sounds/tom-2.mp3"); //in backend this create audio html tag.
          tom2.play();
          break;
  
        case "s":
          var tom3 = new Audio("sounds/tom-3.mp3"); //in backend this create audio html tag.
          tom3.play();
          break;
  
        case "d":
          var tom4 = new Audio("sounds/tom-4.mp3"); //in backend this create audio html tag.
          tom4.play();
          break;
  
        case "j":
          var snare = new Audio("sounds/snare.mp3"); //in backend this create audio html tag.
          snare.play();
          break;
  
        case "k":
          var crash = new Audio("sounds/crash.mp3"); //in backend this create audio html tag.
          crash.play();
          break;
  
        case "l":
          var kick = new Audio("sounds/kick-bass.mp3"); //in backend this create audio html tag.
          kick.play();
          break;
  
        default:
          console.log(buttonInnerHTML);
      }
}

