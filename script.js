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

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256); // Vermelho
    const g = Math.floor(Math.random() * 256); // Verde
    const b = Math.floor(Math.random() * 256); // Azul
    return `rgb(${r}, ${g}, ${b})`; // Formato RGB
}



document.addEventListener('DOMContentLoaded', () => {
    
    standardDivs()
    
    submitBtn.addEventListener('click', () => {
        if (inputNumber.value < 2 || inputNumber.value > 100) {
            alert('Please enter a number between 2 and 100');
        } else {
            containerDivs.replaceChildren();
            createDivs();
        }
    }
    );

    
    clearBtn.addEventListener('click', () => {
        containerDivs.replaceChildren();
        createDivs();
    }
    );


    radioButtons.forEach(radioButton => {
        radioButton.addEventListener('click', () => {
            const divs = containerDivs.querySelectorAll('.divs');
    
            
            if (radioButton.id === 'rainbow' && radioButton.checked) {
                divs.forEach(div => {
                    div.addEventListener('mouseover', () => {
                        const randomColor = generateRandomColor();
                        div.style.backgroundColor = randomColor;
                    });
                });
            } else if (radioButton.checked) {
                
                const color = radioButton.id;
                divs.forEach(div => {
                    div.addEventListener('mouseover', () => {
                        div.style.backgroundColor = color;
                    });
                });
            }
        });
    });
    





    






});