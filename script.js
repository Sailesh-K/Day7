//XML-HTTP Request

//Step 1: Creating an XHR object
var req = new XMLHttpRequest();

//Step 2: Opening the request
req.open("GET","https://restcountries.com/v3.1/all");

//Step 3: Kickstarting a request
req.send();

//Step 4: Onload event


req.onload = function(){
    var arr = JSON.parse(req.response); //array of objects

    //Print the countries from Asia
    var res = arr.filter((ele) => ele.region="North America");
    console.log(res);

    //Print the country names,capital, whose population is <200000
    var res = arr.filter((ele) => ele.population<200000);
    console.log(res);

    //Print the total population of countries using reduce method
    var a = arr.map((ele)=>ele.population);
    var res = a.reduce((acc,cv)=>acc+cv,0);
    console.log(res);

    //Print the following details name, capital, flag, using forEach method
    arr.forEach((ele) => {
        const name = ele.name.common;
        const capital = ele.capital ? ele.capital[0] : "No Capital";
        const flag = ele.flags.png;
        console.log(name,capital,flag);
    });

    //Print the country that uses US dollars as currency
    const usdCountries = arr.filter(
        (country) => country.currencies && Object.keys(country.currencies).includes("USD"));
    console.log("Countries that use US Dollars:", usdCountries);

}