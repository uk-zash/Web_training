document.getElementById("generateButton").addEventListener("click", function() {
    var number = document.getElementById("numberInput").value;
    var output = document.getElementById("tableOutput");
    var error = document.getElementById("error");
    
    output.value = "";
    error.style.display = "none";
    
    if (isNaN(number) || number.trim() === "") {
        error.textContent = "Please enter a valid number.";
        error.style.display = "block";
        return;
    }
    
    for (var i = 1; i <= 10; i++) {
        output.value += number + " x " + i + " = " + (number * i) + "\n";
    }
});
