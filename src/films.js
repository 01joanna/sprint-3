// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => {
    return movie.director;
  });

  // console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

  let result = array.filter((movie) => {
    return movie.director === director;
  }
  );

  // console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let dir = array.filter((movie) => movie.director === director)
  let score = dir.map((movie) => movie.score)
  let sum = score.reduce((acc, score) => acc + score, 0)
  let average = sum / score.length
  
  // console.log("EXERCICE 3", average )
  return average
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let sorted = array.map((movie) => movie.title).sort().slice(0, 20)

  // console.log("EXERCICE 4 =>", sorted)
  return sorted
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {

  let years = array.map((movie) => movie)
  let sorted = years.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year
    } else {
      return a.title.localeCompare(b.title);
    }
  })

  // console.log("EXERCICE 5", sorted)
  return sorted
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {

    let categories = array.filter((movie) => movie.genre.includes(category))
    if (categories.length === 0) return 0;

    // console.log("categories", categories)

    let score = categories.map((movie) => movie.score)
    let sum = score.reduce((acc, number) => acc + number, 0)
    let total = sum / categories.length
    // console.log(total)
    return total;

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

return array.map((movie) => {
    const [hours, minutes] = movie.duration.split("h ")
    let time = parseInt(hours) * 60;

    if (minutes) {
      time += parseInt(minutes)
    }


    return {
      ...movie, duration: time
    }
  })
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array) {
  
  let moviesByYear = array.filter((movie) => movie.year)
  let sum = moviesByYear.reduce((acc, movie) => {
    let total = (acc.score < movie.score ? movie : acc)
    return total
  })

  // console.log(sum)
  return [sum]
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
