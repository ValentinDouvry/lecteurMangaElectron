const mangaContainer = document.getElementById("favoritesContainer");
main();

async function main() {
  if(!user) {
    user = await getUser(1)
  }
  user.manga = _.orderBy(user.manga, ['title'], ['asc']);
  showFavorites(user.manga);
}

async function showFavorites(mangas) {
  _.forEach(mangas, async (manga) => {

    mangaContainer.innerHTML += `<div class="card mb-3" style="max-width: 100%;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="${manga.cover_name}" class="card-img favoriteCardImage" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${manga.title}</h5>
          <p class="card-text">${manga.summary}</p>
          <p class="card-text"><small class="text-muted">Dernier chapitre: <a href='#'></a></small></p>
        </div>
      </div>
    </div>
  </div>`;
  });

  
}
