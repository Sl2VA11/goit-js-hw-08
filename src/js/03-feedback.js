import throttle from "lodash.throttle";

const loginForm = document.querySelector(".feedback-form");
const emailForm = loginForm.elements.email;
const messageForm = loginForm.elements.message;

let formData = {};

const FORM_KEY = "feedback-form-state"

loginForm.addEventListener("input", throttle(onFormInput, 500));
loginForm.addEventListener('submit', onFormSubmit);


onFormAutofill();

function onFormSubmit(event){
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(FORM_KEY);
    console.log(formData);
   formData = {};
   
  }

function onFormInput(event){
   formData[event.target.name] = event.target.value;
   
    localStorage.setItem(FORM_KEY, JSON.stringify(formData));
}

function onFormAutofill() {
   try {
      const formSavedInfo = JSON.parse(localStorage.getItem(FORM_KEY));
      
      formData = { ...formSavedInfo }
      const { email = "", message = "" } = formSavedInfo;
      emailForm.value = email;
      messageForm.value = message;
      
   } catch (error) {
      
   }
       
   

};

