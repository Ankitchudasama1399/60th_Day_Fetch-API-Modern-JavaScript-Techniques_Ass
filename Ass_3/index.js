document.addEventListener("DOMContentLoaded", fetchCountries);

async function fetchCountries() {
  try {
    const response = await fetch(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries"
    );
    const data = await response.json();
    displayCountries(data);
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
}

function displayCountries(countries) {
  const countryList = document.getElementById("countryList");
  countryList.innerHTML = ""; // Clear previous content

  countries.forEach((country) => {
    const countryCard = document.createElement("div");
    countryCard.classList.add("country-card");

    const name = document.createElement("h2");
    name.textContent = country.name;
    countryCard.appendChild(name);

    const population = document.createElement("p");
    population.textContent = `Population: ${country.population}`;
    countryCard.appendChild(population);

    const capital = document.createElement("p");
    capital.textContent = `Capital: ${country.capital}`;
    countryCard.appendChild(capital);

    const flag = document.createElement("img");
    flag.src = country.flag;
    flag.alt = `${country.name} Flag`;
    countryCard.appendChild(flag);

    countryList.appendChild(countryCard);
  });
}

// Function to sort countries by population
async function sortCountriesByPopulation(order) {
  try {
    const response = await fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries${order}`
    );
    const data = await response.json();
    displayCountries(data);
  } catch (error) {
    console.error("Error sorting countries:", error);
  }
}
