const key = "b5c615ed"

let displayWatchList = () => {
  axios.get('/watchlist')
    .then(response => {
      watchList = response.data;
      let watchListContainer = document.getElementById('watchlist-container');
      let watchListHtml = '';
      console.log(watchList)
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
          <button class="remove-btn" data-movieid="${movie.imdbID}">Remove</button>
        `;
      });
      watchListContainer.innerHTML += watchListHtml;


      let removeButtons = document.getElementsByClassName('remove-btn');
      Array.from(removeButtons).forEach(button => {
        button.addEventListener('click', () => {
          removeFromWatchList(button.getAttribute('data-movieid'));
          button.parentElement.remove();
        });
      });
    })
    .catch(error => {
      console.log(error);
    });
};


let removeFromWatchList = (movieID) => {
  axios.delete(`/watchlist/${movieID}`)
    .then(response => {
      watchList = response.data
      alert(`Movie removed from watchlist`)
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}

window.addEventListener('load', displayWatchList)
