function contactsBtn() {
    const projectButton = document.querySelector('.project__button');
    const projectConnection = document.querySelector('.project__connection');

    if (projectButton && projectConnection) {
        projectButton.addEventListener('click', (e) => {
            projectConnection.classList.toggle('active');
        });
    }
    
}
export default contactsBtn;