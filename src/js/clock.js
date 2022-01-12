

function clock() {
   

    const hours = document.querySelector('.clock__hours');
    const minutes = document.querySelector('.clock__minutes');
    const seconds = document.querySelector('.clock__seconds');

    

    let rotation = (target, val) => {
        target.style.transform =  `rotate(${val}deg)`;
    };

    function setClock() {
        let today = new Date();
        let h = (today.getHours() % 12) + today.getMinutes() / 59; // 22 % 12 = 10pm
        let m = today.getMinutes(); // 0 - 59
        let s = today.getSeconds(); // 0 - 59

        
        h *= 30; // 12 * 30 = 360deg
        m *= 6;
        s *= 6; // 60 * 6 = 360deg
    
        rotation(hours, h);
        rotation(minutes, m);
        rotation(seconds, s);
    
        // call every second
        setTimeout(setClock, 500);
    }
        
    setClock();

}
export default clock;