const otherOptions = () => {

    const otherOptionsButton = document.querySelector('.other-options__all')
    const theOption1 = document.querySelector('.other-options__facebook')
    const theOption2 = document.querySelector('.other-options__twitter')
    const theOption3 = document.querySelector('.other-options__gmail')

    const togglePopup = () => {
        theOption1.classList.toggle('other-options__facebook--visible')
        theOption2.classList.toggle('other-options__twitter--visible')
        theOption3.classList.toggle('other-options__gmail--visible')
    }

    otherOptionsButton.addEventListener('click', togglePopup)

}

otherOptions()