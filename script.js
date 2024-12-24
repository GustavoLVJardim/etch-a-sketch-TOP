const containerDivs = document.querySelector('.container');
const inputNumber = document.querySelector('#input-number');
const submitBtn = document.querySelector('#submit-btn');    
const clearBtn = document.querySelector('#clear-btn');
const radioButtons = document.querySelectorAll('input[type="radio"]');

function standardDivs() {
    for (let i = 0; i < 16 * 16; i++){
        const createDivs = document.createElement('div');
        createDivs.style.width = 600 / 16 + 'px';
        createDivs.style.height = 600 / 16 + 'px';
        createDivs.classList.add('divs');
        containerDivs.appendChild(createDivs);
    }
}

function createDivs(){
    for (let i = 0; i < inputNumber.value * inputNumber.value; i++){
        const createDivs = document.createElement('div');
        const containerSize = 600;
        createDivs.style.width = containerSize / inputNumber.value + 'px';
        createDivs.style.height = containerSize / inputNumber.value + 'px';
        createDivs.classList.add('divs');
        containerDivs.appendChild(createDivs);
    }

}



document.addEventListener('DOMContentLoaded', () => {
    
    standardDivs()
    
    submitBtn.addEventListener('click', () => {

        if (inputNumber.value < 2 || inputNumber.value > 100) {
            alert('Please enter a number between 2 and 100');
        } else {
            containerDivs.replaceChildren();
            createDivs()
        }
    }
    );

    
    clearBtn.addEventListener('click', () => {
        containerDivs.replaceChildren();
        createDivs()
    }
    );


    radioButtons.forEach(radioButton => {
        radioButton.addEventListener('click', () => {
            if (radioButton.checked) {
                const color = radioButton.id;
                containerDivs.addEventListener('mouseover', () => {
                    containerDivs.style.backgroundColor = color;
                });
            }
        });
    });
    





    






});