'use strict';
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
      
for(let i = 0; i < 2; i++){
  const nameFilm = prompt("Один из последних просмотренных фильмов?", ""),
        raitingFilm = prompt("На сколько оцените его?", "");
  if(nameFilm != null && raitingFilm != null && nameFilm != '' && raitingFilm != '' && nameFilm.length < 50){
    personalMovieDB.movies[nameFilm] = raitingFilm;
  } else{
    alert('Введите коррекктные данные');
    i--;
  }
};

if( personalMovieDB.count > 0 && personalMovieDB.count < 10){
  alert('Просмотрено довольно мало фильмов');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ){54
  alert('Вы классический зритель');
} else if(personalMovieDB.count > 30){2432
  alert('Вы киноман');
} else{
  alert('Произошла ошибка');
};

console.log(personalMovieDB);
