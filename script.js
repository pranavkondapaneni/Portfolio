function revealMessage(){
    document.getElementById("hiddenMessage").style.display = 'block';
}

function decrement(){
    var num = document.getElementById("number").innerHTML;
    num -= 1;
    document.getElementById("number").innerHTML = num
}