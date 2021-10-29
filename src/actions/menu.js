const usernameMenu = document.getElementById("usernameMenu");
const profilImageMenu = document.getElementById("profilImageMenu");
const favorisMenu = document.getElementById("favorisMenu");
let user;

main();

async function main() {
  user = await getUser(1);

  usernameMenu.innerText = user.username;
  usernameMenu.href = `account.html?id=${user.id}`;
  profilImageMenu.src = user.image_path;
  favorisMenu.href = `favorites.html?id=${user.id}`;
}


async function getUser(id) {
  try {
    const response = await axios.get(
      `http://localhost:8080/lecteurManga/rest/accounts/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
