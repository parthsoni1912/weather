// const { isBuffer } = require("util");

const save=document.querySelector(".save");
const btnn=document.querySelector('.btn');
const inp=document.querySelector('.inp');
const day=document.querySelector('.day');
const datee=document.querySelector('#date');
const temp=document.querySelector('.temp');
const locationn=document.querySelector('.location');
const temp_min_max=document.querySelector('.temp-min-max');
const Wheather=document.querySelector(".jii");
// console.log("hello");
const imgsrc=document.querySelector(".gh");


btnn.addEventListener('click',()=>{
const val=inp.value;
console.log(val);
if(val==""){
alert("please fill the value 😄")
}
else
{getWheahther(val);
}
})

function getWheahther(city){
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d1d3f9b5111f9656faee25e59bc9e7ce`).then((res)=>{

return res.json();
}).then(show)
}

let currr=new Date();
let hours=currr.getHours();
if(hours>17 && hours<24+4){
    // imgsrc.src="92_23_08_19.mp4";

    // imgsrc.autoplay=true;
    imgsrc.src="https://wallpaperaccess.com/full/655132.jpg";
   
    day.style.color="white"
    temp.style.color="white"
    datee.style.color='white'
    btnn.style.color="white";
    save.style.color="white"
    temp_min_max.style.color="white"
    locationn.style.color="white";
}
else{
 
    imgsrc.src="https://wallpaperaccess.com/full/5202195.jpg";
    // imgsrc.autoplay=true;
    day.style.color="black"
temp.style.color="Black"

btnn.style.color="black";
save.style.color="black"
temp_min_max.style.color="black"
locationn.style.color="black";
}
console.log(imgsrc.src)



function show(response){
if(response!=null){
    console.log(response.weather[0].main);
const a=response.main.temp;
const bmin=response.main.temp_min;
const bmax=response.main.temp_max;
const co=response.sys.country;
temp_min_max.innerHTML=`Min_temp ${bmin} || Max_temp ${bmax}`;
locationn.innerHTML=`${inp.value},${co}
`
let tempStatus=response.weather[0].main;
if(tempStatus==="Sunny"){
    Wheathercon.innerHTML=
            "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            imgsrc.src="https://wallpaperaccess.com/full/535700.jpg";
            // imgsrc.autoplay=true;
        }
else if(tempStatus==="Clouds")
{  Wheathercon="<i class='fas fa-cloud' style='color: #eccc68;'></i>";
// imgsrc.src="tm2.mov";
// imgsrc.autoplay=true;
imgsrc.src="https://wallpaperaccess.com/full/896978.jpg";
day.style.color="white"
    temp.style.color="white"
    // datee.style.color='black'
    temp_min_max.style.color="White"
    locationn.style.color="black";
}

else if(tempStatus==="Rainy")
{
    Wheathercon="<i class='fas fa-cloud-rain' style='color: #eccc68;'></i>";
    // imgsrc.src="_DSC5794.mp4";
    // imgsrc.autoplay=true;
    imgsrc.src="https://wallpaperaccess.com/full/134869.jpg";
}
else{
    Wheathercon="<i class='fas fa-cloud' style='color: #44c3de;'></i>";
    
let currr=new Date();
let hours=currr.getHours();
if(hours >18 && hours<24+4){
// imgsrc.src="92_23_08_19.mp4";
// imgsrc.autoplay=true;
imgsrc.src="https://wallpaperaccess.com/full/655132.jpg";
   
day.style.color="white"
temp.style.color="white"
datee.style.color='white'
btnn.style.color="white";
save.style.color="white"
temp_min_max.style.color="white"
locationn.style.color="white";
}
else{
    imgsrc.src="https://wallpaperaccess.com/full/5202195.jpg";
   
    // imgsrc.src="C0001_6.mp4";
    // imgsrc.autoplay=true;
    
    day.style.color="black"
temp.style.color="Black"
// datee.style.color='red'
btnn.style.color="black";
save.style.color="black"
temp_min_max.style.color="white"
locationn.style.color="black";
}
console.log(imgsrc.src)

    // imgsrc.autoplay=true;
}
temp.innerHTML=`${a}°C ${Wheathercon}`;
}

else{
    alert("please enter the correct value");
}
}

const getDaY=()=>{
    var week=new Array();
    week=[
        "Sunday","Monday","Tuesday","Wednesday","Thrusday",
        "Friday",
        "Saturday",
    ]
    let curr=new Date();
    return week[curr.getDay()];
}
const getYear=()=>{
 let year=["Jan",
 "Febuary"
 ,"March",
 "April",
 "May",
 "June",
 "July",
 "Aug",
 "Sept",
 "Oct",
 "Nov",
 "Dec"];
 let curr=new Date();
 return year[curr.getMonth()];
}
const getTime=()=>{
    let curr=new Date();
 let hours=curr.getHours();
 let min=curr.getMinutes();
 let period="AM";
 if(hours>11)
{
    period="PM";
    if(hours>12){
        hours-=12;
    }
}
if(min<10){
min="0"+min;
}

const day=`${getYear()} ${curr.getDate()}`;

return ` ${day} || ${curr.getFullYear()} ||${hours}:${min} ${period}`;


}
const curr=new Date();

datee.innerHTML=`${getTime()} `;
day.innerHTML=getDaY();


// const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;

// const recognitaion=new SpeechRecognition();

recognitaion.onstart=function(){
    console.log('voice is activated');
}

recognitaion.onresult=function(event){
    const current=event.resultIndex;
    const transcript=event.results[current][0].transcript;
   inp.value=transcript;
    readOutLoud(transcript);
    }
save.addEventListener('click',()=>{
recognitaion.start();
})