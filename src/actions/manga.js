const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const mangaId = urlParams.get('id');
const chapterList = document.getElementById("chapterList");
const titleManga = document.getElementById("titleManga");
const autorManga = document.getElementById("autorManga");
const descriptionManga = document.getElementById("descriptionManga");
const coverManga = document.getElementById("coverManga");

main();

async function main() {
    const manga = await getManga(mangaId);
    addMangaInfo(manga);
    addChapter(manga.chapters)
}

// TODO fonction pour la date relative des chapitres
function addChapter(chapters) {
    _.forEach(chapters, (chapter)=> {
        chapterList.innerHTML += `
        <div class="row justify-content-between">
            <div class="col-10">
                <a href="chapter.html?id=${chapter.id}">${chapter.chapter_number}. ${chapter.title}</a>
            </div>
            <div class="col-2">${chapter.updated_date}</div>
        </div>
        `;
    });
}


async function getManga(id) {
    try {
      const response = await axios.get(
        `http://b811-193-253-116-198.ngrok.io/lecteurManga/rest/mangas/${id}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
}

function addMangaInfo(manga) {
    titleManga.innerText = manga.title;
    autorManga.innerText = manga.author;
    descriptionManga.innerText = manga.summary;
    coverManga.src = manga.cover_name;
}