const favorisMenu = document.getElementById("favorisMenu");
const profileImage = document.getElementById("profileImage");
const username = document.getElementById("username");
const email = document.getElementById("email");
const inputFile = document.getElementById("inputFile");


main();

async function main() {
  const user = await getUser(1);

  favorisMenu.href = `favorites.html?id=${user.id}`;
  profileImage.src = user.image_path;
  username.value = user.username;
  email.value = user.email;

  inputFile.addEventListener("change", (e) => {
    profileImage.src = URL.createObjectURL(e.target.files[0]);
    
    profileImage.onload = function() {
      URL.revokeObjectURL(profileImage.src) // free memory
    }
  });
}


async function getUser(id) {
  try {
    const response = await axios.get(`http://localhost:8080/lecteurManga/rest/accounts/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
