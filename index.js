main.remove()

// const newHeader = document.createElement("h1");
// <h1 id="victory"> </h1>

let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = "YOUR-NAME is the champion";
document.body.appendChild(newHeader);