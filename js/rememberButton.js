const rememberSwitch = () => {

    const switchButton = document.querySelector('.slider')
    const rememberMeText = document.querySelector('.remember-me-text')

   // Function to toggle the text
    function toggleRememberText() {
        if ( rememberMeText.innerHTML === 'Remember me' ) {
            rememberMeText.innerHTML = 'Remembered!';
            } else {
        rememberMeText.innerHTML = 'Remember me';
        }
    }

    switchButton.addEventListener('click', toggleRememberText)

}

rememberSwitch()