function findFact() {

    const text = document.getElementById("niet");
    const num = document.getElementById("number").value;

    if (num <= 0) {
        text.innerHTML = "Please Enter Positive number";
        return;
    }

    sum = 1;
    for (let i = 1; i <= num; i++) {
        sum *= i;
    }

    text.innerHTML = `Answer is: ${sum}`;

}
