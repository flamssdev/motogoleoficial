// FUNCTION TEMPORIZADOR PARA A DATA DO EVENTO


const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");

const eventoMotoGole = "06 Jan 2023 18:00"

function countdown(){

    const newEventoMotoGole = new Date(eventoMotoGole);
    const currentDate = new Date();

    const totalSegundos = (newEventoMotoGole - currentDate) / 1000;
    const dias = Math.floor(totalSegundos / 3600 / 24);
    const horas  = Math.floor(totalSegundos / 3600) % 24;
    const minutos = Math.floor(totalSegundos / 60) % 60;
    const segundos = Math.floor(totalSegundos) % 60;

    diasEl.innerHTML = dias;
    horasEl.innerHTML = formatTime(horas);
    minutosEl.innerHTML = formatTime(minutos);
    segundosEl.innerHTML = formatTime(segundos);

    console.log(horas);
    console.log(minutos);
    console.log(segundos);

}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);


// FUNCTION API GOOGLE MAPS

window.onload = function(){

    let map;

    function initialize(){

        const latLng = { lat: -25.464827062124066, lng: -49.179372937816055 };
        map = new google.maps.Map(document.getElementById("mapa") , {
            center: latLng,
            zoom: 18,
            scrollWheel: false,
        });
        
        const marker = new google.maps.Marker({
            position: latLng,
            map,
          });
    }
    initialize();    
}
   
    

const mapa = document.getElementById("mapa");
const url = "https://www.google.com/maps/place/Ch%C3%A1cara+Marco+Zero/@-25.464827,-49.179373,18z/data=!4m5!3m4!1s0x94dcf11fafce5dc1:0x9907e45cc3ef516!8m2!3d-25.4648389!4d-49.1793714?hl=pt-BR"

function openInNewTab(url) {
    const win = window.open(url, '_blank');
    win.focus();
}

mapa.addEventListener('click', function() {
    
    openInNewTab(url);
});