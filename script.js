let submit_button = document.querySelector('.hover-button');
const app = document.getElementById('root');

const container = document.querySelector('.container');

var request = new XMLHttpRequest();
request.open('GET', 'https://api.adviceslip.com/advice', true);

request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {

    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const h1 = document.createElement('h1');
    h1.textContent = `ADVICE # ${data.slip.id}`;

    const p = document.createElement('p');
    data.slip.advice = data.slip.advice.substring(0, 300);
    p.textContent = `"${data.slip.advice}"`;

    container.appendChild(card);
    card.appendChild(h1);
    card.appendChild(p);
    
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();



  
submit_button.addEventListener("click", () => {

  request.open('GET', 'https://api.adviceslip.com/advice', true);
  request.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
          

      // select existing h1 element
      const h1 = document.querySelector('h1');
      
      h1.innerHTML = `ADVICE # ${data.slip.id}`;

      const p = document.querySelector('p');
      
      data.slip.advice = data.slip.advice.substring(0, 300);
      p.innerHTML = `"${data.slip.advice}"`;
    } else {
      const errorMessage = document.createElement('marquee');
      errorMessage.textContent = `Gah, it's not working!`;
      app.appendChild(errorMessage);
    }
  }
  request.send();
})
