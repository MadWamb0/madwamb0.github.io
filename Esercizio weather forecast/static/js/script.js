navigator.geolocation.getCurrentPosition(
    function (event) {
        console.log("ha accettato")
        lat = event.coords.latitude
        lng = event.coords.longitude
        console.log(lat, lng)
        createMap(lat, lng)
    },
    function (event) {
        console.log("non ha accettato")
        lat = 41.124232001393416
        lng = 16.77775382995606
        createMap(lat, lng)
    })

function createMap(lat, lng) {
    var map = L.map('map').setView([lat, lng], 16);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const marker = new L.marker([lat, lng]).addTo(map)
    map.on("click", (e) => {
        document.querySelector("#lng").value = e.latlng.lng
        document.querySelector("#lat").value = e.latlng.lat
        marker.setLatLng(L.latLng(e.latlng.lat, e.latlng.lng))
        marker.addTo(map)
    })
}



document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault()
    let latitudine = document.querySelector("#lat").value
    let longitudine = document.querySelector("#lng").value

    console.log(latitudine, longitudine)

    let url = `https://api.open-meteo.com/v1/forecast?latitude=${latitudine}&longitude=${longitudine}&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,windspeed_10m`


    console.log(url)


    fetch(url).then(function (resp) {
        return resp.json()
    }).then(function (data) {
        console.log(data.hourly.time)
        let output = document.getElementById("out")
        console.log(data.hourly.temperature_2m)
        output.innerHTML = "Data e ora: " + data.hourly.time[18] + " Temperatura: " + data.hourly.temperature_2m[18] + "°C"
    })
})

let canvas = document.querySelector("canvas")

let config = {
    type: 'line',
    data: {
        labels: ["January", "February", "March"],
        datasets: [
            {
                label: 'Temperatura media',
                data: [10, 20, 11.2],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                yAxisID: 'y',
            },
            {
                label: 'Umidità media',
                data: [70, 72, 66],
                fill: false,
                borderColor: 'rgb(255, 0, 0)',
                tension: 0.1,
                yAxisID: 'y1',
            }
        ]
    },
    scales: {
        y: {
            type: 'linear',
            position: 'left',
        },
        y1: {
            type: 'linear',
            position: 'left'
        }
    }
}
const myChart = new Chart(canvas, config)
