//GET ALL MANGAS NOT DELETED
const mangaContainer = document.getElementById('mangaContainer');
main();

async function main() {
  const mangas = await getMangas();
  console.log(mangas);
  showMangas(mangas);
}


function showMangas(mangas) {
  let mangaHTML = '';
  for (manga of mangas) {
    let fill = '';
    mangaHTML += `<div class="col">
        <div class="card"><a href="" class="text-decoration-none">
          <svg class="iconFavorite mt-2 me-2" width="32" height="32" fill="black">
            <use xlink:href="../contents/bootstrap/icons/bootstrap-icons.svg#heart${fill}"/>
          </svg></a>
          <img src=${manga.cover_name} class="card-img-top mangaCardImage">
          <div class="card-body">
            <a href="manga.html?id=${manga.id}" class="text-decoration-none"><h5 class="card-title text-center">${manga.title}</h5></a>
          </div>
        </div>
      </div>`;
  }

  mangaContainer.innerHTML = mangaHTML;
}


async function getMangas() {
  try {
    const response = await axios.get('http://localhost:8080/lecteurManga/rest/mangas');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}


