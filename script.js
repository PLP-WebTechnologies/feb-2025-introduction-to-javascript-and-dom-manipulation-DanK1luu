// Wait for the HTML document to be fully loaded and parsed
document.addEventListener('DOMContentLoaded', function() {

    // --- Get references to HTML elements ---
    const textElement = document.getElementById('textToChange');
    const changeTextButton = document.getElementById('changeTextBtn');
    const changeStyleButton = document.getElementById('changeStyleBtn');
    const toggleElementButton = document.getElementById('toggleElementBtn');
    const elementContainer = document.getElementById('elementContainer');

    let elementExists = false; // Flag to track if the dynamic element exists
    const dynamicElementId = 'dynamicElement'; // ID for the element to add/remove

    // --- 1. Change text content dynamically ---
    changeTextButton.addEventListener('click', function() {
        textElement.textContent = "The text has been changed by JavaScript!";
    });

    // --- 2. Modify CSS styles via JavaScript ---
    changeStyleButton.addEventListener('click', function() {
        // Toggle a CSS class for more complex styling
        // or change inline styles directly:
        textElement.style.color = 'blue';
        textElement.style.fontWeight = 'bold';
        textElement.classList.toggle('highlight'); // Toggles the highlight class
        console.log("Style changed!");
    });

    // --- 3. Add or remove an element ---
    toggleElementButton.addEventListener('click', function() {
        const existingElement = document.getElementById(dynamicElementId);

        if (existingElement) {
            // If element exists, remove it
            existingElement.remove(); // Modern way to remove element
            // Alternatively: elementContainer.removeChild(existingElement);
            toggleElementButton.textContent = 'Add Element'; // Update button text
            console.log("Element removed.");
        } else {
            // If element doesn't exist, create and add it
            const newElement = document.createElement('div'); // Create a <div> element
            newElement.id = dynamicElementId; // Assign an ID
            newElement.textContent = "I am a dynamically added element!"; // Set its text
            elementContainer.appendChild(newElement); // Add it to the container
            toggleElementButton.textContent = 'Remove Element'; // Update button text
            console.log("Element added.");
        }
    });

    console.log("JavaScript is ready!"); // Confirmation in console
});
