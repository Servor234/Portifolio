const Linguagem = document.getElementById("id1");

const pt = document.getElementById("id2");
const eng = document.getElementById("Eng");

const pt1 = document.getElementById("id3");
const eng1 = document.getElementById("Eng2");


function Bomba(variavel) {
    variavel.classList.toggle("bomba");
}


Linguagem.addEventListener("click", () => {

    // Começa o fade
    pt.classList.toggle("escondido");
    eng.classList.toggle("escondido");

    pt1.classList.toggle("escondido");
    eng1.classList.toggle("escondido");


    // Espera o tempo do fade terminar
    setTimeout(() => {

        Bomba(pt);
        Bomba(eng);
        Bomba(pt1);
        Bomba(eng1);

    }, 100);

});


const container = document.getElementById("pokemon-container");
const botao = document.getElementById("sortear");

// Sorteia 6 Pokémon diferentes, dentre os 1025 primeiros
async function sortearPokemon() {
    botao.disabled = true;
    botao.textContent = "Sorteando...";
    container.innerHTML = "<p>Carregando Pokémon...</p>";

    try {
        const ids = [];

        // Sorteia 6 IDs sem repetição
        while (ids.length < 3) {
            const id = Math.floor(Math.random() * 1025) + 1;

            if (!ids.includes(id)) {
                ids.push(id);
            }
        }

        // Busca os dados dos Pokémon na PokéAPI
        const respostas = await Promise.all(
            ids.map(id =>
                fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                    .then(resposta => {
                        if (!resposta.ok) {
                            throw new Error("Erro ao buscar Pokémon");
                        }
                        return resposta.json();
                    })
            )
        );

        container.innerHTML = "";

        respostas.forEach(pokemon => {
            const card = document.createElement("div");
            card.className = "pokemon-card";

            const imagem = document.createElement("img");
            
            imagem.src = pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default || pokemon.sprites.front_default;   
            imagem.alt = pokemon.name;

            const titulo = document.createElement("h3");
            titulo.textContent = pokemon.name;

            card.append(imagem, titulo);
            container.appendChild(card);
        });

    } catch (erro) {
        container.textContent =
            "Não foi possível carregar os Pokémon. Tente novamente.";
        console.error(erro);
    } finally {
        botao.disabled = false;
        botao.textContent = "Gere Novos!";
    }
}

botao.addEventListener("click", sortearPokemon);

// Faz o primeiro sorteio automaticamente ao abrir a página
sortearPokemon();


tsParticles.load("particles", {
    background: {
        color: "transparent"
    },

    fpsLimit: 60,

    particles: {
        number: {
            value: 65,
            density: {
                enable: true,
                area: 800
            }
        },

        color: {
            value: "#38bdf8"
        },

        links: {
            enable: true,
            distance: 140,
            color: "#38bdf8",
            opacity: 0.4,
            width: 1
        },

        move: {
            enable: true,
            speed: 1.5
        },

        opacity: {
            value: 0.6
        },

        size: {
            value: {
                min: 1,
                max: 4
        }}},

    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "grab"
        }},

        modes: {
            grab: {
                distance: 140,
                links: {
                    opacity: 0.8
        }}}},

    detectRetina: true
});