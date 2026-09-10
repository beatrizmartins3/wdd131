const hamburguer=document.querySelector('.hamburguer');
const navMenu=document.querySelector('.nav-list')

hamburguer.addEventListener('click',()=>{
    navMenu.classList.toggle('active');

    if (navMenu.classList.contains('active')){
        hamburguer.innerHTML='✕';

    } else {
        hamburguer.innerHTML='☰';
    }

});


const currentYear=new Date().getFullYear();
document.getElementById("currentyear").textContent=currentYear;

const lastModified = new Date(document.lastModified);
const newDate=lastModified.toLocaleDateString("en-US", {
    hour12:"true",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
});
document.getElementById("lastmodified").textContent=newDate;