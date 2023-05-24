let ingredients = []


const appId = 'd6c1b5d2';
const appKey = ''
const apiUrl = 'https://api.edamam.com/search';


// Function to fetch recipes
const fetchRecipes = async (query) => {
  const FURL = `${apiUrl}?q=${encodeURIComponent(query)}&app_id=${appId}&app_key=${appKey}`;

  try {
    const response = await fetch(FURL);
    const data = await response.json();
    
    // Process the API response
    console.log(data);

    // data?.data.array.forEach(element => {
    //     const RecipeContainer = document.createElement('div')
    //     RecipeContainer.classList.add('class name')
    // });
  } catch (error) {
    // Handle any errors
    console.error(error);
  }
};

// Usage example
fetchRecipes('chicken');
