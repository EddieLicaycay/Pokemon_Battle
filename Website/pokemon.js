const fetchAll151Pokemon = async () => {
  for (let i = 1; i <= 151; i++) {
    await fetchPokemon(i);
  }
}

const fetchPokemon = async (index) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch Pokémon. Status: ${response.status}`);
    }
    const pokemon = await response.json();
    displayPokemon(pokemon);
  } catch (error) {
    console.error(`Error fetching Pokémon at index ${index}:`, error.message);
  }
}

const displayPokemon = (pokemon) => {
  const pokedexContainer = document.getElementById('pokedex');

  const pokemonContainer = document.createElement('div');
  pokemonContainer.classList.add('pokemonContainer');

  const pokemonName = document.createElement('p');
  pokemonName.textContent = pokemon.name.toUpperCase();

  const pokemonId = document.createElement('p');
  pokemonId.textContent = `#${pokemon.id}`;

  const pokemonImage = document.createElement('img');
  pokemonImage.src = pokemon.sprites.front_default;
  pokemonImage.alt = 'pokemon image';

  pokemonContainer.appendChild(pokemonName);
  pokemonContainer.appendChild(pokemonId);
  pokemonContainer.appendChild(pokemonImage);
  pokedexContainer.appendChild(pokemonContainer);
}

fetchAll151Pokemon();
