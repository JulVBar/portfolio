

function clock() {

    const hours = document.querySelector('.clock__hours');
    const minutes = document.querySelector('.clock__minutes');
    const seconds = document.querySelector('.clock__seconds');

    let rotation = (target, val) => {
        target.style.transform =  `rotate(${val}deg)`;
    };

    function setClock() {
        let today = new Date();
        let h = (today.getHours() % 12) + today.getMinutes() / 59; 
        let m = today.getMinutes(); 
        let s = today.getSeconds(); 

        
        h *= 30;
        m *= 6;
        s *= 6; 
    
        rotation(hours, h);
        rotation(minutes, m);
        rotation(seconds, s);

        setTimeout(setClock, 500);
    }
        
    setClock();
}
export default clock;