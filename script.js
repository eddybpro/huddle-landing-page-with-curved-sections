const contactBox = document.querySelector('.contact-section'),
emailInput = document.querySelector('.email'),
subscribeBtn = document.querySelector('.subscribe-btn');

const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const errorPara = document.createElement('p');
errorPara.textContent = 'Check your email please';
errorPara.classList.add('error');

subscribeBtn.addEventListener('click', ()=>{
    if(!regex.test(emailInput.value)){
        contactBox.appendChild(errorPara);
    }else{
        errorPara.classList.add('none');
    }
})