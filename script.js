(() => {

    let secretkey = config.MY_KEY;
    let url = "http://api.openweathermap.org/data/2.5/forecast?q=";

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
                    getTemperature(data);

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

        function getTemperature(data) {
            let temp = [];
            for (let i = 0; i < data.list.length; i++) {

                let weekday = (new Date(data["list"][i]["dt"])).toLocaleString('en-us', {weekday: 'long'})
                temp.push([data["list"][i]["main"]["temp"], weekday]);
                //todo:check date format (result always Monday)
                console.log(temp);
            }
        }

        function dtConverter(data) {
            for (let i = 0; i < data.length; i++) {
                let dt = [];
                dt.push(data["list"][i]["dt"])

                let s = new Date[dtConverter].toLocaleDateString("en-US")
                return new Date(s * 1e3).toISOString().slice(-13, -5);
            }
        }

        /*//add loop because data is in array
        function getDays(data) {
            let day1 = [];
            let day2 = [];
            let day3 = [];
            let day4 = [];
            let day5 = [];

            for (let i = 0; i < data.length; i++) {
                let today = [];
                today.push(data["list"][i]["dt_text"])
                console.log(today)
            }
        }*/

    }
})
();
//Example http://api.openweathermap.org/data/2.5/forecast?q=antwerp&units=metric&APPID=key
//Example td converter: https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript/847196#847196