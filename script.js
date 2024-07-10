// fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
//     .then((response) => response.json())
//     .then((result) => { showData(result.results) })

// const wrapper = document.querySelector("#wrapper")
// function showData(data) {
//     for (let i = 0; i < data.length; i++) {
//         var parenet = document.createElement("div");
//         parenet.classList.add("parenet");

//         const img = document.createElement("img")
//         const name = document.createElement("h1")
//         console.log(name);
//         fetch(data[i].url)
//         .then((response) => response.json())
//         .then((pokemon) => {
//             img.src = pokemon.sprites.front_default;
//             name.innerHTML = pokemon.name
//             parenet.appendChild(img,name);
//             wrapper.appendChild(parenet);
//         })
//     }
// }