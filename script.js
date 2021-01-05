const ipAddress = document.getElementById('ip-address')
const button = document.getElementById('submit')
button.addEventListener('click', pesquisar)
const regexIp = /^((1?\d{1,2}|2([0-4]\d|5[0-5]))\.){3}(1?\d{1,2}|2([0-4]\d|5[0-5]))$|^$/

function pesquisar(e){
    e.preventDefault();
    const iptest= ipAddress.value
    var ip
    if(regexIp.test(iptest)){
        ip = iptest
        // iptest = ''
        console.log(ip);
        // console.log(ip);
    }else{
        alert('ip Errado')
    }
    
    
    var ip = "192.212.174.101";
var api_key = "at_ZblpFCIU2CE3KpgORnkxHpAMWhHHP";
    $(function () {
      $.ajax({
        url: "https://geo.ipify.org/api/v1",
        data: { apiKey: api_key, ipAddress: ip },
        success: function (data) {
            $('#address1').append(`<h4>${data.ip}</h4>`)
            $('#address2').append(`<h4>${data.location.city}, ${data.location.region}<br> ${data.location.geonameId}</h4>`)
            $('#address3').append(`<h4>UTC ${data.location.timezone}</h4>`)
            $('#address4').append(`<h4>${data.as.name}</h4>`)
            addLocation(data)  
        }
      });
    });
}










function addLocation(a){
    var mymap = L.map('mapid').setView([a.location.lat,a.location.lng], 16);
    
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiaGVpaWplcyIsImEiOiJja2dlYnNiaGMwY3djMnhtaTNzanR5c2dmIn0.v91oYlSD7QgP6NxOuqwQQw'
    }).addTo(mymap);
    var marker = L.marker([a.location.lat,a.location.lng]).addTo(mymap);
    // var popup = L.popup()
    // .setLatLng([a.location.lat,a.location.lng])
    // .setContent("I am a standalone popup.")
    // .openOn(mymap);
}


