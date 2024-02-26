const API_KEY = "9e54e889";
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;
$(document).ready(function () {
  $(".search-form").on("submit", function (e) {
    e.preventDefault();
    let query_text = $("#search-form-input").val();
    searchMovies(query_text);
  });
});

// Функція запиту даних з серверу

function searchMovies(query_text) {
  console.log(BASE_URL + "&s=" + query_text);
  axios.get(BASE_URL + "&s=" + query_text).then((response) => {
    console.log(response.data.Search);
    let movies = response.data.Search;
    renderMovies(movies);
  });
}

//  Функція відображення карток фільмів
function renderMovies(movies) {
  let output = "";
  $.each(movies, function (index, movie) {
    output += `
        <div class="col-lg-3 m-3">
          <img src="${movie.Poster}" alt="">
          <h4 class="p-2">${movie.Title}</h4>
          <a class="btn btn-secondary" onclick="selectMovie('${movie.imdbID}')">Детальніше</a>
        </div>
        `;
  });

  $("#movies").html(output);
}

// Movie select ФУНКЦІЯ вибору фільма
function selectMovie(id) {
  sessionStorage.setItem("movieID", id);
  console.log(window);
  window.location = "details.html"
}
