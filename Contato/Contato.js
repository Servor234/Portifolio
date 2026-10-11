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


const usuario = "Servor234";

const lista = document.getElementById("lista-repositorios");

async function carregarRepositorios() {
    try {
        const resposta = await fetch(
            `https://api.github.com/users/${usuario}/repos?sort=updated&per_page=100`
        );

        if (!resposta.ok) {
            throw new Error("Não foi possível consultar o GitHub.");
        }

        const repositorios = await resposta.json();

        lista.innerHTML = "";

        // Exibe os 6 repositórios atualizados mais recentemente
        repositorios
            .filter(repo => !repo.fork)
            .sort((a, b) =>
                new Date(b.updated_at) - new Date(a.updated_at)
            )
            .slice(0, 6)
            .forEach(repo => {
                const card = document.createElement("article");
                card.className = "repo-card";

                const titulo = document.createElement("h3");
                titulo.textContent = repo.name;

                const linguagem = document.createElement("p");
                linguagem.textContent =
                    "Linguagem: " + (repo.language || "Não informada");

                const link = document.createElement("a");
                link.href = repo.html_url;
                link.textContent = "Ver no GitHub";
                link.target = "_blank";
                link.rel = "noopener noreferrer";

                card.append(titulo, linguagem, link);
                lista.appendChild(card);
            });

        if (lista.children.length === 0) {
            lista.textContent = "Nenhum repositório público encontrado.";
        }

    } catch (erro) {
        lista.textContent =
            "Não foi possível carregar os projetos no momento.";
        console.error(erro);
    }
}

carregarRepositorios();


const abrirMenu = document.getElementById("abrirMenu");
const fecharMenu = document.getElementById("fecharMenu");
const overlay = document.getElementById("overlay");

// Abrir ao clicar na imagem
abrirMenu.addEventListener("click", () => {
    overlay.classList.add("ativo");
});

// Fechar pelo botão X
fecharMenu.addEventListener("click", () => {
    overlay.classList.remove("ativo");
});

// Fechar ao clicar no fundo escuro
overlay.addEventListener("click", (evento) => {
    if (evento.target === overlay) {
        overlay.classList.remove("ativo");
    }
});

// Fechar com a tecla ESC
document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
        overlay.classList.remove("ativo");
    }
});


emailjs.init({
    publicKey: "pXBlv5y6Ci9yOeZSo"
});

const formulario = document.getElementById("form-contato");
const botao = document.getElementById("botao-enviar");
const status = document.getElementById("status-envio");

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    botao.disabled = true;
    botao.textContent = "Enviando...";
    status.textContent = "";

    try {
        await emailjs.sendForm(
            "service_fi9aca1",
            "template_5fegzyk",
            formulario
        );

        status.textContent = "Mensagem enviada com sucesso!";
        formulario.reset();
    } catch (erro) {
        console.error("Erro ao enviar:", erro);
        status.textContent =
            "Não foi possível enviar. Tente novamente.";
    } finally {
        botao.disabled = false;
        botao.textContent = "Enviar mensagem";
    }
});