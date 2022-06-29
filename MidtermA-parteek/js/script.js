document.addEventListener("DOMContentLoaded", main);


function main() {
    const url = "http://ejd.songho.ca/syst24444/population_2016.json";
    fetch(url)
.then(response => response.json())
.then(json =>
{
    const pro = json.filter(prov => json.province == "Ontario");
        let html = "<tr><td>Name</td><td>Population</td><td>Province</td><td>Area</td></tr>";
for(let s of json) // json is array of cities
{
html += "<tr><td>" + s.name +"</td><br><td>"+ s.population + "</td><br><td>" + s.province + "</td><br><td>" + s.area + "</td></tr><br>";
}
// append to div
let table = document.getElementById("cities");
table.innerHTML = html;

let a = Object.keys(json).length;

 let citiesnum = document.getElementById("citiesnum");
 citiesnum.innerHTML = "Total number of cities: " + a;
 
    let province = document.getElementById("province");
    province.addEventListener("click", () => {
        if(province.selectedIndex === 0) {
        const pro = json.filter(prov => json.province == "Ontario");
        let html = "<tr><td>Name</td><td>Population</td><td>Province</td><td>Area</td></tr>";
for(let s of json) // json is array of cities
{
html += "<tr><td>" + s.name +"</td><br><td>"+ s.population + "</td><br><td>" + s.province + "</td><br><td>" + s.area + "</td></tr><br>";
}
// append to div
let table = document.getElementById("cities");
table.innerHTML = html;

let a = Object.keys(json).length;

 let citiesnum = document.getElementById("citiesnum");
 citiesnum.innerHTML = "Total number of cities: " + a;
        }
    })
});



}