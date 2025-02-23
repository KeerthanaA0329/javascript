// Using a function to display object properties

var showMovieInfo;

showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};


var movie = {
    title: "Inception",
    actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
    directors: "Christopher Nolan"
  };
  
  
  showMovieInfo();

var movie = {};
showMovieInfo();

var movie = {};
movie.title = "The Dark Knight";
movie.actors = "Christian Bale, Heath Ledger, Aaron Eckhart";
movie.directors = "Christopher Nolan";

showMovieInfo();

  

/* Further Adventures
 *
 * 1) Add a call to showMovieInfo and run the program.
 *    What happens?
 *
 * 2) Declare a movie variable
 *    but don't assign it a value.
 *    Run the program. What happens now?
 *
 * 3) Create an empty object and
 *    assign it to the movie variable.
 *    Run the program again.
 *    Does the output change?
 *
 * 4) Add title, actors and directors properties
 *    to the movie object. Run one more time.
 *    Is the output as expected?
 *
 */