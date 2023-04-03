const key = "b5c615ed"

let displayWatchList = () => {
  axios.get('/watchlist')
    .then(response => {
      watchList = response.data;
      let watchListContainer = document.getElementById('watchlist-container');
      let watchListHtml = '';
      watchList.forEach(movie => {
        watchListHtml += `
        <div class="info">
        <img src=${movie.Poster} class="poster">
        <div>
            <h2>${movie.Title}</h2>
            <div class="rating">
                <img src="star-icon.svg">
                <h4>${movie.imdbRating}</h4>
            </div>
            <div class="details">
                <span>${movie.Rated}</span>
                <span>${movie.Year}</span>
                <span>${movie.Runtime}</span>
            </div>
            <div class="genre">
                <div>${movie.Genre.split(",").join("</div><div>")}</div>
            </div>
        </div>
    </div>
    <h3>Plot:</h3>
    <p>${movie.Plot}</p>
    <h3>Cast:</h3>
    <p>${movie.Actors}</p>
        `
      });
      watchListContainer.innerHTML += watchListHtml;
    })
    .catch(error => {
      console.log(error);
    });
};

window.addEventListener('load', displayWatchList)