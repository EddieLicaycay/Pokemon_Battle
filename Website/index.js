


const pokemonName = (pokemonIndex, updateDisplayOneorTwo) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch post. Status: ${response.status}`);
      }
      return response.json();
    })
    .then(pokemon => {
      updateDisplayOneorTwo(pokemon);
    })
    .catch(error => {
      console.error('Error fetching post:', error.message);
    });
}

function updateDisplayOne(pokemon) {
  //Generates Name of Pokemon Selected
  let nameElement = document.querySelector('.pokeName1');
  nameElement.innerHTML = (`${pokemon.name}`).toUpperCase();
  //Generates the picture with added shiny possibilities
  let imageContainer = document.querySelector('.pokeImage1');
  imageContainer.innerHTML = `<img width="270px" src="${pokemon.sprites.front_default}" alt="pokemon image">`;
  if(Math.random()*30 > 29){
    imageContainer.innerHTML = `<img width="270px" src="${pokemon.sprites.front_shiny}" alt="pokemon image">`;
    nameElement.innerHTML = (`${pokemon.name} |SHINY!|`).toUpperCase();
  } else {
    imageContainer.innerHTML = `<img width="270px" src="${pokemon.sprites.front_default}" alt="pokemon image">`;
  }
  //Show Abilities
  let pokeStat = document.querySelector(".stats1")
  pokeStat.innerHTML = `Abilities: ${pokemon.abilities.map(ability => ability.ability.name).join(" - ")}`;
  //Show All Stats
  let stats = document.querySelector(".allStats1")
  stats.innerHTML = `Pokemon Stats: ${pokemon.stats.map(stat => ` [${stat.stat.name}: ${stat.base_stat}] `)}`;
  //Calculate Average Stat
  let calculateAverage = pokemon.stats.reduce((total, stat) => total + stat.base_stat, 0) / pokemon.stats.length;
  pokemon.calculateAverage = calculateAverage;
  return calculateAverage;
}

function updateDisplayTwo(pokemon) {
  //Generates Name of Pokemon Selected
  let nameElement = document.querySelector('.pokeName2');
  nameElement.innerHTML = (`${pokemon.name}`).toUpperCase();
  //Generates the picture with added shiny possibilities
  let imageContainer = document.querySelector('.pokeImage2');
  imageContainer.innerHTML = `<img width="280px" src="${pokemon.sprites.front_default}" alt="pokemon image">`;
  if(Math.random()*30 > 29){
    imageContainer.innerHTML = `<img width="270px" src="${pokemon.sprites.front_shiny}" alt="pokemon image">`;
    nameElement.innerHTML = (`${pokemon.name} |SHINY!|`).toUpperCase();
  } else {
    imageContainer.innerHTML = `<img width="270px" src="${pokemon.sprites.front_default}" alt="pokemon image">`;
  }
  //Show Abilities
  let pokeStat = document.querySelector(".stats2")
  pokeStat.innerHTML = `Abilities: ${pokemon.abilities.map(ability => ability.ability.name).join(" - ")}`;
  //Show All stats
  let stats = document.querySelector(".allStats2")
  stats.innerHTML = `Pokemon Stats: ${pokemon.stats.map(stat => ` [${stat.stat.name}: ${stat.base_stat}] `)}`;
  //Calculate Average Stat
  let calculateAverage = pokemon.stats.reduce((total, stat) => total + stat.base_stat, 0) / pokemon.stats.length;
  pokemon.calculateAverage = calculateAverage;
  return calculateAverage;
}

const firstfetchPokemon = () => {
  const inputElement = document.querySelector('.inputPokemon1');
  const pokemonIndex = inputElement.value;
  pokemonName(pokemonIndex, updateDisplayOne);
}

const secondfetchPokemon = () => {
  const inputElement = document.querySelector('.inputPokemon2');
  const pokemonIndex = inputElement.value;
  pokemonName(pokemonIndex, updateDisplayTwo);
}

//Battle button
const battler = document.querySelector('.battle');
battler.addEventListener('click', async () => {
  let pokemonIndex1 = document.querySelector('.inputPokemon1').value;
  let blueTeam = await getPokemonData(pokemonIndex1);
  let pokemonIndex2 = document.querySelector('.inputPokemon2').value;
  let redTeam = await getPokemonData(pokemonIndex2);

  let averageBlue = updateDisplayOne(blueTeam);
  let averageRed = updateDisplayTwo(redTeam);
  // Determine the winner
  let win = '';
  if (averageBlue > averageRed) {
    win = 'BLUE TEAM!';
  } else if (averageBlue < averageRed) {
    win = 'RED TEAM!';
  } else {
    win = `It's a tie!`;
  }
  // Display the winner
  let winnerElement = document.querySelector('.winner');
  winnerElement.innerHTML = `WINNER: ${win}`;
});

async function getPokemonData(pokemonIndex) {
  return new Promise((resolve, reject) => {
    pokemonName(pokemonIndex, (pokemon) => {
      resolve(pokemon);
    });
  });
}

//Home button
const refresh = document.querySelector('.homeLink');
refresh.addEventListener('click', () => {
  location.reload();
})










