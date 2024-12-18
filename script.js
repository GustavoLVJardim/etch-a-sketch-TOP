const containerDivs = document.querySelector('.container');



document.addEventListener('DOMContentLoaded', () => {
    

for (let i = 0; i < 256; i++){
    const createDivs = document.createElement('div');
    createDivs.classList.add('divs');
    containerDivs.appendChild(createDivs);
}
    
    
    
});