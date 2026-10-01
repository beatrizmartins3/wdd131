const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const productsSelect=document.querySelector("#products");
products.forEach((product)=>{
    productsSelect.innerHTML+=`
     <option value="${product.id}"> ${product.name}</option>
    `;
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