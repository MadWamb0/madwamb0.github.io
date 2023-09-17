document.querySelector("form").addEventListener("submit", function (event) {
            event.preventDefault()
            let latitudine = document.querySelector("#lat").value
            let longitudine = document.querySelector("#lng").value
            let output = document.getElementById("out")
            console.log(latitudine, longitudine)

            let url = `https://api.open-meteo.com/v1/forecast?latitude=${latitudine}&longitude=${longitudine}&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,windspeed_10m`


            console.log(url)


            fetch(url).then(function (resp) {
                return resp.json()
            }).then(function (data) {
                console.log(data.hourly.time)
                console.log(data.hourly.temperature_2m)
                output.innerHTML="Data e ora: "+data.hourly.time[18]+" Temperatura: "+data.hourly.temperature_2m[18]+"°C"
            })

     
        })