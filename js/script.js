"use strict";

let numberOfFilms;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt("How many films do you watch?", '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many films do you watch?", '');
        }
    },

    remeberMyFilms: function() {
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
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Watched a really few films');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('You are classic viewer');
        } else if (personalMovieDB.count >= 30) {
            console.log('You are movie lover');
        } else {
            console.log('There was error');
        }
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        } else {
            console.log('Can not show this Data Base');
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            const a = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (a != null || a != '') {
                personalMovieDB.genres[i-1] = a;
            } else {
                console.log('Error');
                i--;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }

};