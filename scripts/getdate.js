document.addEventListener("DOMContentLoaded", function() {})
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