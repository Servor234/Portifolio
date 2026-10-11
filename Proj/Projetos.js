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

document.querySelectorAll(".Marco").forEach(marco => {
    const bolinha = marco.querySelector(".Bolinha");
    const painel = marco.querySelector(".Painel");
    const fechar = marco.querySelector(".fechar");

    bolinha.addEventListener("click", ()=>{
        const estavaAberto = painel.classList.contains("aberto");//Abre o painel ao clicar na bolinha

        document.querySelectorAll(".Painel").forEach(p => {
            p.classList.remove("aberto");//Fecha todos os painéis
        });

        if(!estavaAberto){
            painel.classList.add("aberto");//Abre o painel clicado, se estava fechado
        }
    });

    fechar.addEventListener("click", (evento) => {
        evento.stopPropagation();//Fecha o painel ao clicar no X
        painel.classList.remove("aberto");
    });

});

