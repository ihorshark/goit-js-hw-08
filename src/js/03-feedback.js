import throttle from "lodash.throttle";

const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('.feedback-form input');
const msgRef = document.querySelector('.feedback-form textarea');
const FORM_VALUE = "feedback-form-state";
const formObj = {
    email: '',
    message: '',
}

fillTextArea(); 

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

function onFormInput() {
    formObj.email = emailRef.value;
    formObj.message = msgRef.value;
    localStorage.setItem(FORM_VALUE, JSON.stringify(formObj));
}

function onFormSubmit(e) {
    e.preventDefault();
    
    if (formObj.email === '' || formObj.message === '') {
        return alert("Please fill in all fields!");
    }

    console.log(JSON.parse(localStorage.getItem(FORM_VALUE)));
    e.currentTarget.reset();
    localStorage.removeItem(FORM_VALUE);
}

function fillTextArea() {
    const formData = localStorage.getItem(FORM_VALUE);
    if (formData) {
        emailRef.value = JSON.parse(formData).email;
        msgRef.value = JSON.parse(formData).message;
    }
}