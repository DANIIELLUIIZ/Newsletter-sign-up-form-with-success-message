const EMAIL = document.querySelector('#email-field')
const SUBMIT = document.querySelector('#submit-email')
const alertMessage = document.querySelector('.alert-message')
const returnBtn = document.querySelector('#return-btn')

function submitEmail() {
  let emailValue = EMAIL.value
  let re = /\S+@\S+\.\S+/

  if (re.test(emailValue)) {
    stateSucess()
    returnMessageSucess(emailValue)
  } else {
    alertMessage.classList.remove('hide')
    EMAIL.classList.add('alert')

    setTimeout(function () {
      EMAIL.classList.remove('alert')
    }, 1000)
  }
}
function stateSucess() {
  const main = document.querySelector('.main')
  const attribution = document.querySelector('.attribution')
  const submitStates = document.querySelector('.submit-states')

  main.classList.toggle('hide')
  attribution.classList.toggle('hide')
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
  alertMessage.classList.add('hide')
  EMAIL.classList.remove('alert')

  stateSucess()
  EMAIL.value = ''
})
