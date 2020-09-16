(() => {

    document.getElementById("search").addEventListener("click", (fetchWeather) => {
            console.log("test")

            function fetchWeather() {
                let input = document.getElementById("input").value;
                let url = "http://api.openweathermap.org/data/2.5/forecast?q=" + input + "&APPID="
                const myKey = "4b8d4fe8a28fa00a04cf4d9ee056c183";
            //example http://api.openweathermap.org/data/2.5/forecast?q=Mechelen&APPID=4b8d4fe8a28fa00a04cf4d9ee056c183

                fetch(url + myKey)
                    .then(response => response.json())
                    .then(data => console.log(data.list))

                    .catch(function (error) {
                        alert("ERROR!\nPlease check your input!\nMake sure this is a valid city")
                        console.log("error, not found")
                    })
            }
        }
    )
})
();

/*
document.getElementById("input").innerHTML = "City: " + data.city.name;
 */