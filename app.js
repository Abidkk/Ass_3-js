// Get the JSON data from the API
fetch("https://chaoswalking.movie")
  .then(response => response.json())
  .then(data => {
    // Define the movie recommendation app object
    const movieApp = {

      movieData: data.movies,
      
      // Define a function to filter the movie data based on user preferences
      filterMovies: function(genre, rating, releaseYear) {
        return this.movieData.filter(movie => 
          movie.genre === genre && movie.rating >= rating && movie.releaseYear >= releaseYear
        );
      },
      
      
      displayRecommendations:function displayRecommendations(movies) {
        //
        const movieList = document.querySelector("movie-list");
        movieList.innerHTML = "";
        movies.forEach(movie => {
          const movieElement = document.createElement("li");
          movieElement.innerText = movie.title;
          movieList.appendChild(movieElement);
        });
      },
      
      //
      handleUserInput: function() {
        const genreInput = document.querySelector("genre-input");
        const ratingInput = document.querySelector("rating-input");
        const releaseYearInput = document.querySelector("release-year-input");
        
        const genre = genreInput.value;
        const rating = Number(ratingInput.value);
        const releaseYear = Number(releaseYearInput.value);
        
        const filteredMovies = this.filterMovies(genre, rating, releaseYear);
        this.displayRecommendations(filteredMovies);
      }
    };
    
    //

    const genreInput = document.querySelector("genre-input");
    genreInput.addEventListener("change", () => movieApp.handleUserInput());
    
    const ratingInput = document.querySelector("rating-input");
    ratingInput.addEventListener("change", () => movieApp.handleUserInput());
    
    const releaseYearInput = document.querySelector("release-year-input");
    releaseYearInput.addEventListener("change", () => movieApp.handleUserInput());

  });



  

  function saveUrl(url){
    return function () {
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
    }
}

let call = saveUrl('https://www.godzillavskong.net');

call();