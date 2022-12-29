function briks() {
    const parentTabs = document.querySelector('.briks-tab');
    const tabs = document.querySelectorAll('.briks-tab-item');
    const briksBtn = document.querySelector('.briks-button');
    const briks = document.querySelectorAll('[data-animation]');

    if (parentTabs && tabs) {
        parentTabs.addEventListener('click', (e) => {
            if (e.target.classList.contains('briks-tab-item')) {
                tabs.forEach(tab => {
                    tab.classList.remove('active');
                })
                e.target.classList.add('active');
            }
        })
    }

    if (briksBtn) {
        briksBtn.addEventListener('click', (e) => {
            console.log('ff')
            briks.forEach(item=>item.classList.remove('start-animation'));
            setTimeout(function() {
                briks.forEach(item=>item.classList.add('start-animation'));
            }, 200);
        })
    }
}
export default briks;