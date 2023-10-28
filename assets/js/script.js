const EMAIL = document.querySelector('#email-field')
const SUBMIT = document.querySelector('#submit-email')
const returnBtn = document.querySelector('#return-btn')






function submitEmail() {
  let emailValue = EMAIL.value
  let re = /\S+@\S+\.\S+/

  if (re.test(emailValue)) {
    stateSucess()
    returnMessageSucess(emailValue)
  } else {
    alertMessage.classList.toggle('hide')
    EMAIL.classList.add('alert')
  }
  EMAIL.value = ''
}
function stateSucess() {
  const main = document.querySelector('.main')
  const attribution = document.querySelector('.attribution')
  const alertMessage = document.querySelector('.alert-message')
  const submitStates = document.querySelector('.submit-states')

  main.classList.toggle('hide')
  attribution.classList.toggle('hide')
  EMAIL.classList.toggle('alert')
  alertMessage.classList.toggle('hide')
  submitStates.classList.toggle('hide')
}
function returnMessageSucess(email) {
  const submitMessageSucess = document.querySelector('.state-message-sucess')

  submitMessageSucess.innerHTML = `<div class="message-states">
  <img src="./assets/images/icon-success.svg" />
  <h2>Thanks for </br>
  subscribing!</h2>
  <p>
  A confirmation email has been sent to 
  <b>${email}.</b> Please open it and click
  the button inside to confirm your subscription
  </p>
  </div>
  `
}

SUBMIT.addEventListener('click', e => {
  e.preventDefault()
  submitEmail()
})

returnBtn.addEventListener('click', () => {
  stateSucess()
})
