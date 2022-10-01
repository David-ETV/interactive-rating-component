const buttonFather = document.querySelector(".rating-buttons");
const numberButton = document.querySelector(".rating-buton-number");
const numberChange = document.querySelector(".thankyou-rating");
const thankyouSection = document.querySelector(".thankyou-section");
const ratingSection = document.querySelector(".rating-section");
const submit = document.querySelector(".rating-submit");

buttonFather.addEventListener('click', e =>{
    let numberSelected = e.target.innerText;
    numberChange.innerText = numberSelected;
   
        if(numberSelected > 0 && numberSelected < 6 ){
            submit.addEventListener('click', ()=>{
                ratingSection.style.display = 'none';
                thankyouSection.style.display = 'flex';
            });
        }
        
    
});



