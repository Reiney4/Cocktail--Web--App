// Function to fetch data from API
function fetchData(url) {
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the fetched data
        return data;
      })
      .catch(error => console.log(error));
  }
  
  // Function to update card content
  function updateCard(cocktail) {
    document.getElementById('card-image').src = cocktail.strDrinkThumb;
    document.getElementById('card-title').textContent = cocktail.strDrink;
    document.getElementById('card-quote').textContent = cocktail.strAlcoholic;
    document.getElementById('card-source').textContent = cocktail.strCategory;
  }
  
  // Search form event listener
  document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    const searchInput = document.getElementById('search-input').value;
    const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + encodeURIComponent(searchInput);
  
    // Fetch data and update card content
    fetchData(apiUrl)
      .then(data => {
        if (data.drinks && data.drinks.length > 0) {
          updateCard(data.drinks[0]); // Update card with the first result
        } else {
          console.log('No results found.');
        }
      });
  });
    
