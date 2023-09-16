//your JS code here. If required.
// Get references to the <p> tag and the button by their IDs
var statusParagraph = document.getElementById("status");
var enterButton = document.getElementById("enterBtn");

// Add a click event listener to the button
enterButton.addEventListener("click", function () {
    // Create an <h1> element
    var h1Tag = document.createElement("h1");

    // Set the text content of the <h1> element to "Entered Metaverse"
    h1Tag.textContent = "Entered Metaverse";

    // Clear the existing content of the <p> tag
    statusParagraph.innerHTML = "";

    // Append the <h1> element to the <p> tag
    statusParagraph.appendChild(h1Tag);
});
