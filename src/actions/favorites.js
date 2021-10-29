const mangaContainer = document.getElementById("favoritesContainer");
main();

async function main() {
  if(!user) {
    user = await getUser(1)
  }
  user.manga = _.orderBy(user.manga, ['title'], ['asc']);
  showFavorites(user.manga);
  const buttonsFavorites = document.getElementsByClassName('buttonFavorite');

  _.forEach(buttonsFavorites, async (buttonFavorite) => {
    buttonFavorite.addEventListener('click', async () => {
      const mangaId = buttonFavorite.id.split('-')[1];
      await updateFavorite(user.id, mangaId);
    });
  });
}

async function showFavorites(mangas) {
  _.forEach(mangas, async (manga) => {
    let lastChapter = _.last(_.orderBy(manga.chapters, ['chapter_number'], ['asc']));

    mangaContainer.innerHTML += `<div class="card mb-3" style="max-width: 100%;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="${manga.cover_name}" class="card-img favoriteCardImage" alt="...">
        <a href="" class="text-decoration-none buttonFavorite" id="manga-${manga.id}">
          <svg class="iconFavorite mt-2 me-2" width="32" height="32" fill="red">
            <use xlink:href="../contents/bootstrap/icons/bootstrap-icons.svg#heart-fill"/>
          </svg>
        </a>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${manga.title}</h5>
          <p class="card-text">${manga.summary}</p>
          <p class="card-text"><small class="text-muted">Dernier chapitre: ${lastChapter ? `<a href="reader.html?mangaId=${manga.id}&chapterId=${lastChapter.id}">${lastChapter.chapter_number}. ${lastChapter.title}</a>` : 'Aucun Chapitre'}</small></p>
        </div>
      </div>
    </div>
  </div>`;
  });
}




async function updateFavorite(userId, mangaId) {
  try {
    await axios.post(`http://localhost:8080/lecteurManga/rest/mangas/favoris/account/${userId}/manga/${mangaId}`);
  } catch (error) {
    console.error(error);
  }
}
