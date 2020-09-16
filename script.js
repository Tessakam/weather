(() => {

    document.getElementById("search").addEventListener("click", (fetchWeather) => {
        console.log("test")

        function API(fetchWeather) {
            let input = document.getElementById("input").value;

            fetch('http://api.openweathermap.org/data/2.5/forecast?q="+input+"&APPID=4b8d4fe8a28fa00a04cf4d9ee056c183')
                .then(response => response.json())
                .then(data => console.log(data))
        }
    })
})
();

/*
document.getElementById("input").innerHTML = "City: " + data.city.name;
 */