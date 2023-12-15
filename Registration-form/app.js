const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const pass = document.querySelector('#pass');

const submit = document.querySelector('.btn');

const fnameValidator = () => {
    const val = fname.value;
    const alert = document.querySelector('.fname-alert');

    if ((val.length < 2) || (val.length > 9)) {
        fname.style.borderColor = 'red';
        alert.innerText = 'First Name cannot be empty';
        alert.style.color = 'red';
        const alertSign = document.querySelector('.alert1');
        alertSign.classList.toggle('active');
    }
    else{
        fname.style.borderColor = 'green';
        alert.remove();
    }
}

const lnameValidator = () => {
    const val = lname.value;
    const alert = document.querySelector('.lname-alert');

    if ((val.length < 4) || (val.length > 15)) {
        lname.style.borderColor = 'red'; 
        alert.innerText = 'Last Name cannot be empty';
        alert.style.color = 'red';
        const alertSign = document.querySelector('.alert2');
        alertSign.classList.toggle('active');
    }
    else{
        lname.style.borderColor = 'green';
        alert.remove();
    }
}

const emailValidator = () => {
    const val = email.value;
    const alert = document.querySelector('.email-alert');

    if ((val.length < 4) || (val.length > 15)) {
        email.style.borderColor = 'red';
        alert.innerText = 'Looks like this is not an email';
        alert.style.color = 'red';
        const alertSign = document.querySelector('.alert3');
        alertSign.classList.toggle('active');
    }
    else{
        email.style.borderColor = 'green';
        alert.remove();
    }
}

const passValidator = () => {
    const val = pass.value;
    const alert = document.querySelector('.pass-alert');

    if (((val.length < 4) || (val.length > 8))) {
        pass.style.borderColor = 'red';
        alert.innerText = 'Password cannot be empty';
        alert.style.color = 'red';
        const alertSign = document.querySelector('.alert4');
        alertSign.classList.toggle('active');
    }
    else{
        pass.style.borderColor = 'green';
        alert.remove();
    }
}

submit.addEventListener('click', () => {
    fnameValidator();
    lnameValidator();
    emailValidator();
    passValidator();
})