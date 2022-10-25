let combinations=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

let x=true
let count=0
let res=new Array(9)

document.querySelectorAll(".each").forEach((element,i) => {
    element.onclick=()=>{
        if (res[i]!==undefined) {
            alert("Already Clicked!");
            return
        }
        res[i]=x
        count++;
        if (x){
            element.innerText="X"
            x=false
        }
        else {
            element.innerText="O"
            x=true
        }
        
        checkWinner()
    }
  
})
    
function checkWinner() {
    let findStatus=combinations.find((comb) => {
        // debugger
        // console.log(comb)
        if (
            res[comb[0]]===res[comb[1]] &&
            res[comb[1]]===res[comb[2]] &&
            res[comb[0]]!==undefined
            
        ) {
            endGame(res[comb[0]]? "x":"o")
            return true
        }
    });

    if (count >=9 &&(!findStatus)) {
        endGame("draw");
    }
}
function endGame(winner) {
    console.log(winner)
    if (winner=="draw"){
        document.getElementById("winner-full").innerHTML="The match is a draw!"
    }
    else{
        document.getElementById("winner-full").innerText = `'${winner}' Won the game!`;
    }
    document.getElementById("result-overlay").classList.add("active");
}

document.getElementById("play-button").onclick=()=>{
    window.location.reload()
};







// const x_class="x";
// const circle="circle";
// let changeturn;

// console.log(each);
// let count=0;
// let res=new Array(9);

// each.forEach( cell => {
//     cell.addEventListener("click",handleClick,{once:true})
    
// })

// function handleClick() {
//     console.log("Clicked");
// }
// function handleClick(e) {
//     const currentClass=changeturn? x_class: circle;

// }






