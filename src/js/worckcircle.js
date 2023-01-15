function worckcircle() {

    if (document.querySelector('.workcircle-button-next')) {
        document.querySelector('.workcircle-button-next').addEventListener('click', ()=> {
            const items = document.querySelectorAll('.step');
            items.forEach(item => {
                if (item.classList.contains('step-out')) {
                    item.classList.remove('step-out');
                    item.classList.add('step-6');
                }
                if (item.classList.contains('step-1')) {
                    item.classList.remove('step-1');
                    item.classList.add('step-out');
                    item.classList.remove('anim2-1');
                    item.classList.remove('anim3-2');
                    item.classList.remove('anim4-3');
                    item.classList.add('anim-out');

                }
                if (item.classList.contains('step-2')) {
                    item.classList.remove('step-2');
                    item.classList.add('step-1');
                    item.classList.remove('anim3-2');
                    item.classList.add('anim2-1');
                }
                if (item.classList.contains('step-3')) {
                    item.classList.remove('step-3');
                    item.classList.add('step-2');
                    item.classList.remove('anim4-3');
                    item.classList.add('anim3-2');
                }
                if (item.classList.contains('step-4')) {
                    item.classList.remove('step-4');
                    item.classList.add('step-3');
                    item.classList.remove('anim2-1');
                    item.classList.add('anim4-3');
                }
                if (item.classList.contains('step-5')) {
                    item.classList.remove('step-5');
                    item.classList.add('step-4');
                }
                if (item.classList.contains('step-6')) {
                    item.classList.remove('step-6');
                    item.classList.add('step-5');
                    item.classList.remove('anim-out');
                }
            })
        })
    }
}

export default worckcircle;