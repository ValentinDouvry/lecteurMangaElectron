const usernameMenu = document.getElementById("usernameMenu");
const profilImageMenu = document.getElementById("profilImageMenu");
const favorisMenu = document.getElementById("favorisMenu");

main();

async function main() {
  const user = await getUser(1);

  usernameMenu.innerText = user.username;
  usernameMenu.href = `acount.html?id=${user.id}`;
  profilImageMenu.src = user.image_path;
  favorisMenu.href = `favorites.html?id=${user.id}`;
}


async function getUser(id) {
  try {
    const response = await axios.get(
      `http://b811-193-253-116-198.ngrok.io/lecteurManga/rest/accounts/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}