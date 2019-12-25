let isDark = localStorage.getItem('isDark');
let isHome = false;
const identifier = document.getElementById('identifier');
const darkBotton = document.getElementById('dark');
const nav = document.getElementById('nav');
const body = document.querySelector('body');

if(identifier.classList[0] == "home"){
    isHome = true;
}

function toDark(){
    if(isHome){
        const btn1 = document.getElementById('btn1');
        const btn2 = document.getElementById('btn2');
        const btn3 = document.getElementById('btn3');
        const btn4 = document.getElementById('btn4');
        const l1 = document.getElementById('l1');
        const l2 = document.getElementById('l2');
        const l3 = document.getElementById('l3');
        const l4 = document.getElementById('l4');
        const l5 = document.getElementById('l5');
        btn1.classList.add('btn-dark');
        btn2.classList.add('btn-dark');
        btn3.classList.add('btn-dark');
        btn4.classList.add('btn-dark');
        l1.classList.add('dark1');
        l2.classList.add('dark1');
        l3.classList.add('dark1');
        l4.classList.add('dark1');
        l5.classList.add('dark1');
    }
    body.classList.add('dark');
    body.classList.add('text-light');
    nav.classList.remove("navbar-light", "bg-light");
    nav.classList.add("navbar-dark", "dark1");
    darkBotton.innerHTML = "Light Mode";
    darkBotton.classList.remove("btn-dark");
    darkBotton.classList.add("btn-light");
    isDark = 'true';
    localStorage.setItem('isDark', 'true');
}

function toLight(){
    if(isHome){
        const btn1 = document.getElementById('btn1');
        const btn2 = document.getElementById('btn2');
        const btn3 = document.getElementById('btn3');
        const btn4 = document.getElementById('btn4');
        const l1 = document.getElementById('l1');
        const l2 = document.getElementById('l2');
        const l3 = document.getElementById('l3');
        const l4 = document.getElementById('l4');
        const l5 = document.getElementById('l5');
        btn1.classList.remove('btn-dark');
        btn2.classList.remove('btn-dark');
        btn3.classList.remove('btn-dark');
        btn4.classList.remove('btn-dark');
        l1.classList.remove('dark1');
        l2.classList.remove('dark1');
        l3.classList.remove('dark1');
        l4.classList.remove('dark1');
        l5.classList.remove('dark1');
    }

    body.classList.remove('dark');
    body.classList.remove('text-light');
    nav.classList.remove("navbar-dark", "dark1");
    nav.classList.add("navbar-light", "bg-light");
    darkBotton.innerHTML = "Dark Mode";
    darkBotton.classList.remove("btn-light");
    darkBotton.classList.add("btn-dark");
    isDark = 'false';
    localStorage.setItem('isDark', 'false');
}

addEventListener('load',()=>{
    if(isDark == 'false')
        toLight();
    else
        toDark();
});

darkBotton.addEventListener('click', () => {
    if(isDark == 'false')
        toDark();
    else
        toLight();
});
