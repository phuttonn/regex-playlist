// validation script here
const inputs = document.querySelectorAll('input');

const patterns = {
    telephone: /^\d{11}$/
};


inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
       console.log(e.target.attributes.name.value); 
    })
})