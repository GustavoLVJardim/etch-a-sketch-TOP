const containerDivs = document.querySelector('.container');
const inputNumber = document.querySelector('#input-number');
const submitBtn = document.querySelector('#submit-btn');    


document.addEventListener('DOMContentLoaded', () => {
    
    for (let i = 0; i < 16 * 16; i++){
        const createDivs = document.createElement('div');
        createDivs.style.width = 600 / 16 + 'px';
        createDivs.style.height = 600 / 16 + 'px';
        createDivs.classList.add('divs');
        containerDivs.appendChild(createDivs);
    }

    /*for (let i = 0; i < 256; i++){
        const createDivs = document.createElement('div');
        createDivs.classList.add('divs');
        containerDivs.appendChild(createDivs);
    }*/

    submitBtn.addEventListener('click', () => {

        if (inputNumber.value < 2 || inputNumber.value > 100) {
            alert('Please enter a number between 2 and 100');
        } else {
            containerDivs.replaceChildren();
            
            for (let i = 0; i < inputNumber.value * inputNumber.value; i++){
                const createDivs = document.createElement('div');
                createDivs.style.width = 600 / inputNumber.value + 'px';
                createDivs.style.height = 600 / inputNumber.value + 'px';
                createDivs.classList.add('divs');
                containerDivs.appendChild(createDivs);
            }
        }
    }
    
    
    
    );
});