const btn = document.querySelectorAll("button");
const again = document.querySelector(".again");
const winner = document.querySelector("h3");

again.style.display = `none`;

let chance = false;

btn.forEach((e) => {
  e.addEventListener("click", ()=>{

    if(e.innerHTML === `X` || e.innerHTML === `O`){
      return;
    }
    if(chance == true){
      e.innerHTML = `X`;
      chance = false;
    }else{
      e.innerHTML = `O`;
      chance = true;
    }

    if (checkWinner()) {
      winner.style.display = `block`;
      again.style.display = `block`;
    }
  });
});

again.addEventListener("click", ()=>{
  btn.forEach((e)=>{
    e.innerHTML = ``;

    again.style.display = `none`;
    winner.style.display = `none`;
  });
});

function checkWinner(){
  const patterns = [ 
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for(i = 0; i < patterns.length; i++){
    const pattern = patterns[i];
    const a = pattern[0];
    const b = pattern[1];
    const c = pattern[2];

    if(btn[a].innerHTML !== `` && btn[a].innerHTML === btn[b].innerHTML && btn[a].innerHTML === btn[c].innerHTML){
      winner.innerText = `Winner: ${btn[a].innerHTML}`;
      return true;
    }
  }
  return false;
  }