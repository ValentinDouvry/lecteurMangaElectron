const mangaContainer = document.getElementById("favoritesContainer");
main();

async function main() {
  if(!user) {
    user = await getUser(2)
  }
}
