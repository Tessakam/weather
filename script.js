(() => {

    let url = "http://api.openweathermap.org/data/2.5/forecast?q="
    const myKey = "4b8d4fe8a28fa00a04cf4d9ee056c183";
    let input = document.getElementById("input").innerHTML;

    function search() {
        document.getElementById("search").addEventListener("click", function () {
            return input
        })
        console.log(input)

        //example http://api.openweathermap.org/data/2.5/forecast?q=Mechelen&APPID=4b8d4fe8a28fa00a04cf4d9ee056c183
        function fetchWeather(search) {
            fetch(url + input + "&APPID=" + myKey) //parameters
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    document.getElementById("nameLocation").innerHTML = "Location: " + data.city.name
                })
            console.log(data)
        }
    }
})
();

/*
.catch(function (error) {
alert("ERROR!\nPlease check your input!\nMake sure this is a valid city")
console.log("error, not found")
})
 */