const IMAGE = document.querySelector('#image')

document.body.onresize = function () {
  if (document.body.clientWidth < 780) {
    IMAGE.setAttribute('src', './assets/images/illustration-sign-up-mobile.svg')
  } else {
    IMAGE.setAttribute(
      'src',
      './assets/images/illustration-sign-up-desktop.svg'
    )
  }
}
