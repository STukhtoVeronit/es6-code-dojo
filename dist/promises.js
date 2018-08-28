'use strict';

//Promises
function applyForVisa(documents) {
    console.log('обработка заявления...');
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            var visa = 'yor visa';
            Math.random() > 0.5 ? resolve(visa) : reject('nice try, but no');
        }, 1000);
    });
    return promise;
}

function getVisa(visa) {
    console.info(visa);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            return resolve(visa);
        }, 2000);
    });
}

function bookHotel(visa) {
    console.log('Hotel is reserving');
    return Promise.resolve(visa);
}

function buyTickets(bookhotel) {
    console.log('tickets are buying');
}

applyForVisa({}).then(getVisa).then(bookHotel).then(buyTickets).catch(function (error) {
    return console.error(error);
});

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