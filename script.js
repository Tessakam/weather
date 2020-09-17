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
                    getDays(data);
                    timeConverter(UNIX_timestamp)


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

        //translate dt-text into today, day 1, ...
        //Example: https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript/847196#847196
        function timeConverter(UNIX_timestamp){
            let a = new Date(UNIX_timestamp * 1000);
            let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            let year = a.getFullYear();
            let month = months[a.getMonth()];
            let date = a.getDate();
            let hour = a.getHours();
            let min = a.getMinutes();
            let sec = a.getSeconds();
            let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
            return time;
        }
        console.log(timeConverter(0));


            /*//add loop because data is in array
            function getDays(data) {
                let today = new Date()
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
    }

)
();
//Example http://api.openweathermap.org/data/2.5/forecast?q=antwerp&units=metric&APPID=key