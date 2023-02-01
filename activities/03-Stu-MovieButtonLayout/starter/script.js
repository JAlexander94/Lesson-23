 // Initial array of movies
 var movies = ["The Matrix", "Dune", "Mr. Right", "The Lion King"];

 // Function for displaying movie data
 function renderButtons() {

  $("#buttons-view").empty()

   // YOUR CODE GOES HERE
   for (i=0;i<movies.length;i++){
    moviebtn = $("<button></button>")
    moviebtn.text(movies[i])
    moviebtn.addClass("movie")
    moviebtn.attr("data-movie",movies[i])
    $("#buttons-view").append(moviebtn)
   }

 }

 // This function handles events where one button is clicked
 $("#add-movie").on("click", function(event) {

   // YOUR CODE GOES HERE
   event.preventDefault()
   const newmovie = $('#movie-input').val().trim()
   movies.push(newmovie)
   renderButtons()
   $('#movie-input').val("")
   
 });

 // Calling the renderButtons function to display the initial list of movies
 renderButtons();