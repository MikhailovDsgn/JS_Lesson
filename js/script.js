"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films do you watch?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films do you watch?", '');
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

start();

function remeberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('One of latest watched film?', ''),
              b = prompt('Your feedback', '');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

remeberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Watched a really few films');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You are classic viewer');
    } else if (personalMovieDB.count >= 30) {
        console.log('You are movie lover');
    } else {
        console.log('There was error');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } else {
        console.log('Can not show this Data Base');
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        const a = prompt(`Ваш любимый жанр под номером ${i}`, '');
        if (a != null && a != '') {
            personalMovieDB.genres[i-1] = a;
        } else {
            console.log('Error');
            i--;
        }
    }
}

writeYourGenres();



