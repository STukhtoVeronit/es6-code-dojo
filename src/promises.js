'use strict';

let movieList = document.getElementById('movies');

function addMovieToList(movie) {
    let  img = document.createElement('img');
    img.src = movie.Poster;
    movieList.appendChild(img);
}

function getData(url, done) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            let json = JSON.parse(xhr.response);
            console.log(json);
            done(json.Serch);
        } else {
            console.error(xhr.statusText);
        }
    };
    xhr.onerror = function (error) {
        console.error(error);
    };
    xhr.send();
}

getData('https://placebear.com/200/300', function (movies) {
    movies.forEach(function (movie) {
        addMovieToList(movie);
    });
});


// //Promises
// function applyForVisa(documents) {
//     console.log('обработка заявления...');
//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             let visa = 'yor visa';
//             Math.random() > 0.5 ? resolve(visa) : reject('nice try, but no');
//         }, 1000);
//     });
//     return promise;
// }
//
// function getVisa(visa) {
//     console.info(visa);
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => resolve(visa), 2000);
//     });
// }
//
// function bookHotel(visa) {
//     console.log('Hotel is reserving');
//     return Promise.resolve(visa);
// }
//
// function buyTickets(bookhotel) {
//     console.log('tickets are buying');
// }
//
// applyForVisa({})
//     .then(getVisa)
//     .then(bookHotel)
//     .then(buyTickets)
//     .catch(error => console.error(error));





//callback hell
// function applyForVisa(documents, resolve, reject) {
//     console.log('обработка заявления...');
//     setTimeout(function () {
//         let visa = {};
//         Math.random() > 0.5 ? resolve(visa) : reject(visa);
//     }, 1000);
// }
// function bookHotel() {
//
// }
// function buyTickets() {
//
// }
// applyForVisa(
//     {},
//     function (visa) {
//         console.log('Visa accepted');
//         bookHotel(visa, function (reservation) {},function (error) {});
//     },
//     function (visa) {
//         console.error('Visa declined');
//     });
