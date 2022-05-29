// let numberOfFilms = '';
// numberOfFilms = +prompt(`How many films have you watched?`);

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false,
// };

 
// let countWatchedFilms = prompt(`Latest movie that you have watched?`);
// let ratingThem = prompt(`Rate it`);

// personalMovieDB.movies[countWatchedFilms] = ratingThem;

// console.log(personalMovieDB);


let isPalindrom = (str) => {
    return str === str.split('').reverse().join('');
};
console.log(isPalindrom('nan'))
