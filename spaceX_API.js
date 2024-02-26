let url = "https://api.spacexdata.com/v4/landpads";
let div = document.querySelector("#pads");

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((el) => {
      let image = el.images.large[0];
      let name = el.full_name
      console.log(image);
      let html = `
      <div class="col-md-3">
          <div class="card bg-light">
            <img class="card-img-top" src="${image}" alt="launchpadphoto">
              <div class="card-body">
              <h4>${name}</h4>
            </div>
          </div>
      </div>
            `;

      div.firstElementChild.insertAdjacentHTML("afterend", html);
    });
  });
