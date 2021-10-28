const mangasTable = document.getElementById("mangasTable");
const usersTable = document.getElementById("usersTable");

main();

async function main() {
  if(!user) {
    user = await getUser(2);
  }
  

  administration.href = `administrationDashboad.html?id=${user.id}`;
}

async function getMangas() {
    try {
      const response = await axios.get('http://localhost:8080/lecteurManga/rest/mangas');
      return response.data;
    } catch (error) {
      console.error(error);
    }
}

async function getUsers() {
    try {
      const response = await axios.get('http://localhost:8080/lecteurManga/rest/users');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  
  
  
  
  