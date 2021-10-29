let pageIndex = 0;
let chapterIndex;
let manga;
let pages;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const mangaId = urlParams.get('mangaId');
const chapterId = urlParams.get('chapterId');

const readerMangaTitle = document.getElementById("readerMangaTitle");
const readerChapterTitle = document.getElementById("readerChapterTitle");
const readerPage = document.getElementById("readerPage");
const readerPreviousButton = document.getElementById("readerPreviousButton");

readerPreviousButton.addEventListener('click', () => {
  pageIndex--;
  if (pageIndex < 0) {
    const chapter = manga.chapters[chapterIndex - 1];
    if(chapter) {
      location.href = `reader.html?mangaId=${manga.id}&chapterId=${chapter.id}`;
    } else {
      location.href = `manga.html?id=${manga.id}`;
    }
  } else {
    location.href = '#top';
    readerPage.src = pages[pageIndex].image_path;
  }
});

const readerNextButton = document.getElementById("readerNextButton");
readerNextButton.addEventListener('click', () => {
  pageIndex++;
  if (pageIndex > pages.length - 1) {
    const chapter = manga.chapters[chapterIndex + 1];
    if(chapter) {
      location.href = `reader.html?mangaId=${manga.id}&chapterId=${chapter.id}`;
    } else {
      location.href = `manga.html?id=${manga.id}`;
    }
  } else {
    location.href = '#top';
    readerPage.src = pages[pageIndex].image_path;
  }
  
});

main();

async function main() {
  manga = await getManga(mangaId);
  manga.chapters = _.orderBy(manga.chapters, ['chapter_number'], ['asc']);
  const chapter = _.find(manga.chapters, ['id', _.toNumber(chapterId)]);
  pages = _.orderBy(chapter.pages, ['page_number'], ['asc']);
  
  chapterIndex = _.findIndex(manga.chapters, ['id', _.toNumber(chapterId)]);
  
  readerMangaTitle.innerText = manga.title;
  readerChapterTitle.innerText = `${chapter.chapter_number}. ${chapter.title}`;
  if(!_.isEmpty(pages)) readerPage.src = pages[pageIndex].image_path;
  
}

async function getManga(id) {
  try {
    const response = await axios.get(`http://localhost:8080/lecteurManga/rest/mangas/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

