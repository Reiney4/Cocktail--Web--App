// Fetch data from the API
fetch('https://api.npoint.io/67a99d45586a9c1302f8/drinks/')
  .then(response => response.json())
  .then(data => {
    // Get the container element
    const cardContainer = document.getElementById('cardContainer');

    // Function to create cards for the cocktails
    const createCard = (cocktail) => {
      // Create card elements
      const card = document.createElement('div');
      card.className = 'col';
      card.innerHTML = `
        <div class="card" style="width: 9 rem;">
          <img id="cocktail_img" class="card-img-top" src="${cocktail.strDrinkThumb}" alt="Card Image">
          <div class="card-body">
            <h5 class="card-title">${cocktail.strDrink}</h5>
            <p class="card-quote">${cocktail.strAlcoholic}</p>
            <p class="card-source">${cocktail.strCategory}</p>
          </div>
        </div>
      `;

      // Append the card to the container
      cardContainer.appendChild(card);
    };

    // Iterate over the data and create cards for each cocktail
    data.forEach(cocktail => {
      createCard(cocktail);
    });

    // Function to filter the data based on the search input
    const filterData = (searchTerm) => {
      // Clear previous search results
      cardContainer.innerHTML = '';

      // Filter the data based on the search term
      const filteredData = data.filter(cocktail => cocktail.strDrink.toLowerCase().includes(searchTerm.toLowerCase()));

      // Create cards for the filtered data
      filteredData.forEach(cocktail => {
        createCard(cocktail);
      });
    };

    // Handle form submission
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const searchTerm = searchInput.value;
      filterData(searchTerm);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });