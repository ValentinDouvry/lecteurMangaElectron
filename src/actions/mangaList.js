const mangaContainer = document.getElementById('mangaContainer');
const administration = document.getElementById('administration');

main();

async function main() {
  const mangas = await getMangas();
  
  if(!user) {
    user = await getUser(1);
  }

  administration.href = `administrationDashboad.html?id=${user.id}`;
  showMangas(mangas);

  const buttonsFavorites = document.getElementsByClassName('buttonFavorite');

  _.forEach(buttonsFavorites, async (buttonFavorite) => {
    buttonFavorite.addEventListener('click', async () => {
      const mangaId = buttonFavorite.id.split('-')[1];
      await updateFavorite(user.id, mangaId);
    });
  });
}


async function showMangas(mangas) {
  mangas = _.orderBy(mangas, ['updated_date'], ['desc']);
  _.forEach(mangas, async (manga) => {
    let fill = '';

    //If is favorite
    if(_.find(user.manga, ['id', manga.id])) fill = '-fill';

    mangaContainer.innerHTML += `<div class="col">
    <div class="card h-100"><a href="" class="text-decoration-none buttonFavorite" id="manga-${manga.id}">
      <svg class="iconFavorite mt-2 me-2" width="32" height="32" fill="red">
        <use xlink:href="../contents/bootstrap/icons/bootstrap-icons.svg#heart${fill}"/>
      </svg></a>
      <img src=${manga.cover_name} class="card-img-top mangaCardImage">
      <div class="card-body mangaTitleCard">
        <a href="manga.html?id=${manga.id}" class="text-decoration-none"><h6 class="card-title text-center mangaTitleCard">${manga.title}</h6></a>
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


async function getMangas() {
  try {
    const response = await axios.get('http://localhost:8080/lecteurManga/rest/mangas');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}


