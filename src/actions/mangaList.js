const mangaContainer = document.getElementById('mangaContainer');
main();

async function main() {
  const mangas = await getMangas();
   
   if(!user) {
    user = await getUser(1)
  }
  showMangas(mangas);
}


async function showMangas(mangas) {
  _.forEach(mangas, async (manga) => {
    let fill = '';

    //If is favorite
    if(_.find(user.manga, ['id', manga.id])) fill = '-fill';

    mangaContainer.innerHTML += `<div class="col">
    <div class="card"><a href="" class="text-decoration-none">
      <svg class="iconFavorite mt-2 me-2" width="32" height="32" fill="red">
        <use xlink:href="../contents/bootstrap/icons/bootstrap-icons.svg#heart${fill}"/>
      </svg></a>
      <img src=${manga.cover_name} class="card-img-top mangaCardImage">
      <div class="card-body">
        <a href="manga.html?id=${manga.id}" class="text-decoration-none"><h5 class="card-title text-center">${manga.title}</h5></a>
      </div>
    </div>
  </div>`;
  });
}


async function getMangas() {
  try {
    const response = await axios.get('http://localhost:8080/lecteurManga/rest/mangas');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}


