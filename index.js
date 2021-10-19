// Import stylesheets
import './style.css';

//steps
// forEach loop -> insert data -> append

let fetchBtn = document.querySelector('#fetch');
let output = document.querySelector('#output');
let upBtn = document.querySelector('#up');
let downBtn = document.querySelector('#down');
let url = 'https://mock-practice.prakhar10v.repl.co/items';

fetchBtn.addEventListener('click', function () {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element, index) => {
        let display = document.createElement('p');
        display.innerHTML = `${data[index].item}, ${data[index].price} <br />`;
        display.style.color = 'green';
        output.append(display);
      });

      upBtn.addEventListener('click', () => {
        data.forEach((element, index) => {
          let display = document.createElement('p');
          data.sort((a, b) => a.price - b.price);
          display.innerHTML = `${data[index].item}, ${data[index].price} <br />`;
          display.style.color = 'blue';
          output.append(display);
        });
      });

      downBtn.addEventListener('click', () => {
        data.forEach((element, index) => {
          let display = document.createElement('p');
          data.sort((a, b) => b.price - a.price);
          display.innerHTML += `${data[index].item}, ${data[index].price} <br />`;
          display.style.color = 'red';
          output.append(display);
        });
      });
    });
});
