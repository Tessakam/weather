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
                    getName();
                })

                /*}
                .catch(error => {
                    alert("ERROR!\nPlease check your input!\nMake sure this is a valid city")
                    console.log("error, not found")
                })*/
        }

        function getName(data) {
            for (let i = 0; i < data["list"].length; i++) {
                let name = data[i];
                name.push(data.data["list"][i]["city"]["name"])
                console.log(getName)
            }
        }
    }
})
();
//Example http://api.openweathermap.org/data/2.5/forecast?q=antwerp&units=metric&APPID=key