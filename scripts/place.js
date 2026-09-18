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

const apiKey="7c91bcea3a2604a2e84a9d7e839ccf66";
const city="Teresina";

const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`;

//function calculateWindChill(temperature,windC){
        //if(temperature<=10 && windC>4.8){
            //const windChill=13.12+(0.6215*temperature)-(11.37*Math.pow(windC,0.16))
            //return `${windChill.toFixed(1)}°C`;

        //}else{
           // return "N/A"
        //}
    //}

const calculateWindChill= (temperature,windC)=>(temperature<=10 && windC>4.8)?`{(13.12 + 0.6215 * temperature - 11.37*Math.pow(windC,0.16))toFixed(1)}°C}`:"N/A";
    
async function getWeather(){
    const response=await fetch(url);
    const data= await response.json();

    const temperature= document.querySelector("#temperature").textContent=Math.round(data.main.temp);
    document.querySelector("#conditions").textContent=data.weather[0].description;
    const windC=document.querySelector("#wind").textContent=Math.round(data.wind.speed*3.6);
    document.querySelector("#wind-chill").textContent=calculateWindChill(temperature,windC);
}
getWeather();

    