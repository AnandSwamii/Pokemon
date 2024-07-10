let data = "";
finalData = [];
let offset = 0;
let limit = 20;

const wrapper = document.querySelector("main");
const search = document.querySelector("header input");
const filterType = document.querySelector("header select");
const loadMore = document.querySelector("#loadMore");


async function getDataFromAPI(url) {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  }
  
  window.addEventListener("load", async () => {
    loadPokemons();
  });
  
  search.addEventListener("keyup", searchPokemon);
  filterType.addEventListener("change", filterPokemon);
  loadMore.addEventListener("click", async () => {
    offset = offset + limit;
    loadPokemons();
  });

function showData(finalData) {
    wrapper.innerHTML = "";
    finalData.forEach(main => {


        const myDiv = document.createElement("div");
        myDiv.classList.add("flip-card");

        const id = document.createElement("span");
        id.innerHTML = "ID:" + main.id;

        const img = document.createElement("img");
        img.src = main.sprites.other.dream_world.front_default;

        const type = document.createElement("h3");
        type.innerHTML = "Type: " + main.types[0].type.name;

        const name = document.createElement("h3");
        name.innerHTML = "Name: " + main.name;

        const flipCardInner = document.createElement("div");
        flipCardInner.classList.add("flip-card-inner");

        const flipFrontDiv = document.createElement("div");
        flipFrontDiv.classList.add("flip-card-front");

        const flipBackDiv = document.createElement("div");
        flipBackDiv.classList.add("flip-card-back");

        const height = document.createElement("h3");
        height.innerHTML = "Heigth: " + main.height;
        
        const weight = document.createElement("h3");
        weight.innerHTML = "Weigth: " + main.weight;

        const hp = document.createElement("h3");
        hp.innerHTML = "Hp: " + main.stats[0].base_stat;

        const attack = document.createElement("h3");
        attack.innerHTML = "Attack: " + main.stats[1].base_stat;

        const defense = document.createElement("h3");
        defense.innerHTML = "Defense: " + main.stats[2].base_stat;

        const special_attack = document.createElement("h3");
        special_attack.innerHTML = "Special_Attack: " + main.stats[3].base_stat;

        const special_defense = document.createElement("h3");
        special_defense.innerHTML = "Special_Defense: " + main.stats[4].base_stat;

        const speed = document.createElement("h3");
        speed.innerHTML = "Speed: " + main.stats[5].base_stat;
        
        flipBackDiv.append(height, weight, hp, attack, defense, special_attack, special_defense, speed)

        flipFrontDiv.append(id, img, type, name )

        flipCardInner.append(flipFrontDiv, flipBackDiv)

        myDiv.append(flipCardInner)

        wrapper.append(myDiv)



    });
};

function searchPokemon(e) {
  if (e.target.value.length === 0) {
    showData(finalData);
  } else {
    //make copy of the pokemons displayed on screen
    let forSearching = finalData;
    // find the searchterm in that copy
    forSearching = forSearching.filter((obj) =>
      obj.name.includes(e.target.value)
    );
    //display pokemons matching the searchterm
    showData(forSearching);
  }
}

function filterPokemon(e) {
  const type = e.target.value;
  if (type === "all") showData(finalData);
  else {
    //make copy of the pokemons displayed on screen
    let forSearching = finalData;
    // find the searchterm in that copy
    forSearching = forSearching.filter((obj) =>
      obj.types[0].type.name.includes(type)
    );
    //display pokemons matching the searchterm
    showData(forSearching);
  }
}

async function loadPokemons() {
  data = await getDataFromAPI(
    "https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset=" + offset
  );
  data.results.forEach(async (obj) => {
    const temp = await getDataFromAPI(obj.url);
    finalData.push(temp);
    showData(finalData);
  });
}

