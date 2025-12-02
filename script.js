// Globale Variablen
const pokemonBilderQuelle = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

const pokemons = [
  { name: "Pikachu", type: "Elektro", image: `${pokemonBilderQuelle}25.png` },
  { name: "Glumanda", type: "Feuer", image: `${pokemonBilderQuelle}4.png` },
  { name: "Schiggy", type: "Wasser", image: `${pokemonBilderQuelle}7.png` },
  { name: "Bisasam", type: "Pflanze", image: `${pokemonBilderQuelle}1.png` },
  { name: "Evoli", type: "Normal", image: `${pokemonBilderQuelle}133.png` },
  {name: "Vulpix", type:"Feuer", image:`${pokemonBilderQuelle}37.png`},
  {name: "Myrapla", type:"Pflanze", image:`${pokemonBilderQuelle}43.png`},
  {name: "Enton", type:"Wasser", image:`${pokemonBilderQuelle}54.png`},
  {name: "Dratini", type:"Drache", image:`${pokemonBilderQuelle}147.png`},
  {name: "Mogelbaum", type:"Stein", image:`${pokemonBilderQuelle}185.png`},
];


// HTML-Elemente
let firstSection = document.createElement("div");
firstSection.id = "title-section";
firstSection.classList.add("container");
document.body.appendChild(firstSection);

let title = document.createElement("h1");
title.id = "title";
title.innerText = "Pokédex";
firstSection.appendChild(title);

let pokemonCards = document.createElement("div");
pokemonCards.id = "pokemon-cards";
pokemonCards.classList.add("container");
document.body.appendChild(pokemonCards);


for (const pokemon of pokemons){

    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = pokemon.name;

    const image = document.createElement("img");
    image.src = pokemon.image;

    const type = document.createElement("p");
    type.textContent = "Typ: " + pokemon.type;
    if (pokemon.type=="Feuer"){
        type.style.color="red";
    }
    else{
        if(pokemon.type=="Wasser"){
            type.style.color="blue";
        }
        else{
            if(pokemon.type=="Pflanze"){
                type.style.color="green";
            }
        }
    }

    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(type);

    card.addEventListener("click", function(){
        displaySinglePokemon(pokemon);
    })
    pokemonCards.appendChild(card);
}

let pokemonDetailView = document.createElement("div");
pokemonDetailView.id="pokemon-detail-view";
pokemonDetailView.classList.add("container");
pokemonDetailView.classList.add("d-none");
document.body.appendChild(pokemonDetailView);

// Funktionen

function displaySinglePokemon(pokemon){
    console.log("Das Pokemon " + pokemon.name + " wurde geklickt");
    pokemonCards.classList.toggle("d-none");
    pokemonDetailView.classList.toggle("d-none");
    }





// Event-Listeners