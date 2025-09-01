function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceValue = document.getElementById("diceValue");
    const diceImage = document.getElementById("diceImage");
    let value = [];
    let images = [];
    
    for(let i=0; i<numOfDice; i++){
        let num = Math.floor(Math.random()*6)+1;
        images.push(`<img src="diceImages/${num}.png" width="100px">`)
        value.push(num);
    }
    diceValue.textContent = `Dice value ${value.join(", ")}`;
    diceImage.innerHTML = images.join("");
}
