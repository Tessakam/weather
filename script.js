(() => {

    let secretkey = config.MY_KEY;
    let url = "http://api.openweathermap.org/data/2.5/forecast?q=";

    document.getElementById("search").addEventListener("click", search);

    function search(data) {
        let location = document.getElementById("input").value;
        fetchWeather(); //otherwise nothing happens
        console.log(location)

        function fetchWeather() {

            fetch(url + location + "&units=metric&appid=" + secretkey) //parameters
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    console.log(data);
                    getName(data);
                    getTemperatureDay1(data);
                    getTemperatureDay2(data);
                    getTemperatureDay3(data);
                    getTemperatureDay4(data);
                    getTemperatureDay5(data);
                })

                .catch(error => {
                    alert("ERROR!\nPlease check your input!\nMake sure this is a valid city")
                    console.log("error, not found")
                })
        }

        function getName(data) {
            let name = data.city.name
            //document.getElementById("nameLocation").innerHTML
            //console.log(getName)
        }

        //add loop because data is in array
        function getTemperatureDay1(data) {
            for (let i = 0; i < data.length; i++) {
                let temp = [];
                temp.push(data["list"][i]["main"]["temp"])
                console.log(getTemperature)
            }
        }
    }
})
();
//Example http://api.openweathermap.org/data/2.5/forecast?q=antwerp&units=metric&APPID=key