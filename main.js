function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        const adviceElement = document.querySelector('.advice');
        adviceElement.textContent = data.slip.advice;
        const adviceNumber = data.slip.id;
        updateAdviceNumber(adviceNumber);
    })
    .catch(error => console.error('Error fetching advice:', error));
}

function updateAdviceNumber(adviceNumber) {
    const headerElement = document.querySelector('.header');
    headerElement.textContent = `Advice # ${adviceNumber}`;
}

const button = document.querySelector('button');
button.addEventListener('click', getAdvice);