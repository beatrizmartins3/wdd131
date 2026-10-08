

let reviews=Number(localStorage.getItem("reviews")) || 0;
reviews++;
localStorage.setItem("reviews",reviews);

document.querySelector("#reviews").textContent=reviews;


const form = document.querySelector("#my-form");
const message = document.querySelector("#message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;

    message.textContent = `Thank you, ${name}, for being here.`;
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