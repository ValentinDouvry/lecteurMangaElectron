const mangasTBody = document.getElementById("mangasTBody");
const usersTBody = document.getElementById("usersTBody");

main();

async function main() {
  if(!user) {
    user = await getUser(1);
  }
  
  administration.href = `administrationDashboad.html?id=${user.id}`;

  const mangas = await getMangas();
  const users = await getUsers();

  _.forEach(mangas, (manga) => {
    mangasTBody.innerHTML += `
      <tr>
        <th><a href="manga.html?id=${manga.id}">${manga.title}</a></th>
        <th>${manga.author}</th>
        <th>${manga.chapters.length}</th>
        <th>${(manga.update_date ? moment(manga.update_date).fromNow() : "No update date")}</th>
      </tr>
    `;
  });

  _.forEach(users, (user) => {
    usersTBody.innerHTML += `
      <tr>
        <th><a href="manga.html?id=${user.id}">${user.username}</a></th>
        <th>${user.role}</th>
        <th>${user.email}</th>
        <th>${(user.update_date) ?? "No update date" }</th>
      </tr>
    `;
  });

}

async function getMangas() {
    try {
      const response = await axios.get('http://a73e-193-253-116-198.ngrok.io/lecteurManga/rest/mangas');
      return response.data;
    } catch (error) {
      console.error(error);
    }
}

async function getUsers() {
    try {
      const response = await axios.get('http://a73e-193-253-116-198.ngrok.io/lecteurManga/rest/accounts');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  
  
  
  
  