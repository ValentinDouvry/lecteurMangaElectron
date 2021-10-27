

//GET ALL MANGAS NOT DELETED

const mangaContainer = document.getElementById('mangaContainer');

showMangas();

function showMangas() {
  let mangaHTML = '';
  for (let i = 0; i <= 60; i++) {
    let fill = '';
    if(i % 2 ) fill = '-fill';
    mangaHTML += `<div class="col">
        <div class="card">
          <svg class="iconFavorite mt-2 me-2" width="32" height="32" fill="black">
            <use xlink:href="../contents/bootstrap/icons/bootstrap-icons.svg#heart${fill}"/>
          </svg>
          <img src="https://rotek.fr/wp-content/uploads/risitas2.jpeg" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title text-center">MANGA ISSOU ${i}</h5>
            <a href="manga.html?id=${i}" class="stretched-link"></a>
          </div>
        </div>
      </div>`;
  }

  mangaContainer.innerHTML = mangaHTML;
}

