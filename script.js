//Question 1 js

const division = (a, b) => a % b;
console.log(division(10, 3))


//Question 2 js

const baseUrl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const corsEnabledUrl = "https://noroffcors.herokuapp.com/" + baseUrl;


fetch(corsEnabledUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        getData(json);
    })
    .catch(function (error) {
        console.dir(error);
    });

function getData(data) {
    const resultsContainer = document.querySelector(".resultsContainer");

    for (let index = 0; index < 8; index++) {

        console.log(data.results);

        resultsContainer.innerHTML +=
            `<h1>${data.results[index].name}</h1>
            <p>${data.results[index].rating}</p>
            <p>${data.results[index].tags.length}</p>`
            ;
    }

};