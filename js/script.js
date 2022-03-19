"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastWatchedFilm = prompt('Один из последних просмотренных фильмов?', ''),
      feedback = prompt('На сколько оцените его?', ''),
      lastWatchedFilm2 = prompt('Один из последних просмотренных фильмов?'),
      feedback2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastWatchedFilm] = feedback;
personalMovieDB.movies[lastWatchedFilm2] = feedback2;

console.log(personalMovieDB);




