function getNumber(num) {
    var answer = document.getElementById("answer");
    answer.value += num;
}

function clearDisplay() {
    var answer = document.getElementById("answer");
    answer.value = "";
}

function getResult(){
    var answer = document.getElementById("answer");
    answer.value = eval(answer.value)
}