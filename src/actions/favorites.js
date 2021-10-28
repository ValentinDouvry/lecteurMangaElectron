const mangaContainer = document.getElementById("favoritesContainer");
main();

async function main() {
  if(!user) {
    user = await getUser(2)
  }
  user.manga = _.orderBy(user.manga, ['title'], ['asc']);
  showFavorites(user.manga);
}

async function showFavorites(mangas) {
  _.forEach(mangas, async (manga) => {
    let lastChapter = _.last(_.orderBy(manga.chapters, ['chapter_number'], ['asc']));
    mangaContainer.innerHTML += `<div class="card mb-3" style="max-width: 100%;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="${manga.cover_name}" class="card-img favoriteCardImage" alt="...">
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
