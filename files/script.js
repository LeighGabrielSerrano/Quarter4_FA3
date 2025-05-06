function start() {
    let num;
    do {
        num = prompt("Enter a number:");
    } while (isNaN(num) || num === null || parseInt(num) < 1);
    
    num = parseInt(num);
    const gaby = document.getElementById("show");
    let show = "Number inputted: " + num + "<br><br>";

    if (num % 2 === 1) {
        // Odd number: repeat number num times
        for (let i = num; i >= 1; i--) {
            show += (i + " ").repeat(num).trim() + "<br>";
        }
    } else {
        // Even number: repeat number i times, optional spacing
        for (let i = num; i >= 1; i--) {
            show += (i + " ").repeat(i).trim() + "<br>";
        }
    }

    gaby.innerHTML = show;
}

