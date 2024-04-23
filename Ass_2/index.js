document.getElementById("fetchButton").addEventListener("click", fetchUsers);

async function fetchUsers() {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();
    displayUsers(data.data);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

function displayUsers(users) {
  const userList = document.getElementById("userList");
  userList.innerHTML = "";

  users.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.classList.add("user-card");

    const avatar = document.createElement("img");
    avatar.src = user.avatar;
    avatar.alt = `${user.first_name} ${user.last_name} Avatar`;
    userCard.appendChild(avatar);

    const name = document.createElement("p");
    name.textContent = `${user.first_name} ${user.last_name}`;
    userCard.appendChild(name);

    const email = document.createElement("p");
    email.textContent = user.email;
    userCard.appendChild(email);

    userList.appendChild(userCard);
  });
}
