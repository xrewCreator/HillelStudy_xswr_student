const API_KEY = "Your Code"; // свій ключ
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

let movieID = sessionStorage.getItem("movieID");

axios.get(BASE_URL + "&i=" + movieID).then((response) => {
  console.log(response);
  let movie = response.data;
  renderMovies(movie);
});

function renderMovies(movie) {
  let output = `<div class="row p-4">
                    <div class="col-md-5 col-sm-12">
                        <img src="${movie.Poster}" alt="" />
                    </div>
                <div class="col-md-7 col-sm-12 p-4">
                    <h2 class="p-2">${movie.Title}</h2>
                    <ul class="list-group">
                        <li class="list-group-item"><strong>Genre: </strong>${movie.Genre}</li>
                        <li class="list-group-item"><strong>Actors: </strong>${movie.Actors}</li>
                        <li class="list-group-item"><strong>Runtime: </strong>${movie.Runtime}</li>
                    </ul>
                </div>
                </div>
                <div class="row p-4">
                    <div class="well">
                    <h3 class="p-2">Plot of film</h3>
                    <p>${movie.Plot}</p>
                    </div>
                </div>
                `;
  $("#movies").html(output);
}
