// Fetch data from the API
fetch('https://api.npoint.io/67a99d45586a9c1302f8/drinks/')
  .then(response => response.json())
  .then(data => {
    // Get the container element
    const cardContainer = document.getElementById('cardContainer');

    // Iterate over the data and create a card for each item
    data.forEach(cocktail => {
      // Create card elements
      const card = document.createElement('div');
      card.className = 'col';
      card.innerHTML = `
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${cocktail.strDrinkThumb}" alt="Card Image">
          <div class="card-body">
            <h5 class="card-title">${cocktail.strDrink}</h5>
            <p class="card-quote">${cocktail.strAlcoholic}</p>
            <p class="card-source">${cocktail.strCategory}</p>
          </div>
        </div>
      `;

      // Append the card to the container
      cardContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
