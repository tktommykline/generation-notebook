var button = document.getElementById('button');

console.log("HERE STUPID!")

//function greenMeansGo(){
//    title.style.background = 'greenyellow';
//    console.log("The box is now green, GO GO GO!");
//}

function colorChange(){
    if (button.style.background == 'chartreuse') {
        button.style.background = 'aqua'
        button.innerText = "Blue!";
        console.log('This is blue now');
    } else {
        button.style.background = 'chartreuse'
        button.innerText = "Green!"
        console.log('this is green now');
    };
}