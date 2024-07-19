// Remove the <main> element with id 'main'
const main = document.querySelector('main#main');
if (main) {
    main.remove();
}

// Create and set up newHeader
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'YourName is the champion'; // Replace YourName with your actual name

// Append newHeader to the body
document.body.appendChild(newHeader);
