var clicks = 0
var clicksmodifier = 1
var clickstext = document.getElementById("clicks")
var button = document.getElementsByClassName("button")[0]

// Button clicked event
function buttonClick() {
    switch(true) {
        case (clicks == 100):
            console.log("Button2 reached")
            clicksmodifier = 2; // Set the button to give you 2 clicks
            button.setAttribute("id", "button2"); // Changes the button style
            document.body.style.backgroundColor = "rgb(241, 193, 61)"; // Set the background color
        break;

        case (clicks == 750):
            console.log("Button3 reached")
            clicksmodifier = 5; // Set the button to give you 5 clicks
            button.setAttribute("id", "button3"); // Changes the button style
            document.body.style.backgroundColor = "rgb(67, 122, 16)"; // Set the background color
            document.body.style.color = "#c1dec1"; // Set the text color
        break;

        case (clicks >= 2000): 
            console.log("Button4 reached")
            clicksmodifier = 10; // Set the button to give you 10 clicks
            button.setAttribute("id", "button4"); // Changes the button style
            document.body.style.backgroundColor = "rgb(115, 31, 129)"; // Set the background color
            document.body.style.color = "rgb(225, 190, 231)"; // Set the text color
        break;
    }
    clicks = clicks + (clicksmodifier); // Add clicks
    new Audio("sounds/click.mp3").play(); // Play the click sound
    clickstext.innerHTML = clicks; // Set the text for the click
}