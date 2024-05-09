var city = document.getElementById("cityInput")
var month = document.getElementById("selectMonth")
var year = document.getElementById("selectYear")
var btn = document.getElementById("showBtn")
var table = document.querySelector("table tbody")


btn.addEventListener("click", function () {
    fetch(`https://api.aladhan.com/v1/calendarByCity/${year.value}/${month.value}?city=${city.value}&country=Azerbaijan&method=2`)
        .then(response => response.json())
        .then(json => {
            console.log(json.data)
            var datas = '';
            var dataArr = json.data;

            dataArr.forEach(element => {
                datas += `
                <tr>
                <td>${element.date.gregorian.date}</td>
                <td>${element.date.hijri.date}</td>
                <td>${element.timings.Imsak}</td>
                <td>${element.timings.Sunrise}</td>
                <td>${element.timings.Sunrise}</td>
                <td>${element.timings.Dhuhr}</td>
                <td>${element.timings.Asr}</td>
                <td>${element.timings.Sunset}</td>
                <td>${element.timings.Maghrib}</td>
                <td>${element.timings.Isha}</td>
                <td>${element.timings.Firstthird}</td>
                </tr>
                `;
            });

            table.innerHTML = datas


        })
})




