(() => {

    let secretkey = config.MY_KEY;
    let url = "http://api.openweathermap.org/data/2.5/forecast?q=";
    let today = new Date()

    document.getElementById("search").addEventListener("click", search);

    function search(data) {
        let location = document.getElementById("input").value;
        fetchWeather(); //otherwise nothing happens

        function fetchWeather() {

            fetch(url + location + "&units=metric&appid=" + secretkey) //parameters
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    getName(data);
                    getToday(data);
                    /*getTemperatureDay2(data);
                    getTemperatureDay3(data);
                    getTemperatureDay4(data);
                    getTemperatureDay5(data);*/
                })

            /*.catch(error => {
                alert("ERROR!\nPlease check your input!\nMake sure this is a valid city")
                console.log("error, not found")
            })*/
        }

        function getName(data) {
            let name = data.city.name
            document.getElementById("nameLocation").innerHTML = "The weather in " + name
        }

        //add loop because data is in array
        function getToday(data) {
            for (let i = 0; i < data.length; i++) {
                let today = [];
                today.push(data["list"][i]["dt_text"])
                console.log(today)
            }
        }
    }
})
();
//Example http://api.openweathermap.org/data/2.5/forecast?q=antwerp&units=metric&APPID=key