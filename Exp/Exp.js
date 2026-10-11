tsParticles.load("particles", {
    fpsLimit: 60,
    particles: {
        number: {
            value: 65
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
            }
        }
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "grab"
            }
        },
        modes: {
            grab: {
                distance: 140,
                links: {
                    opacity: 0.8
                }
            }
        }
    },
    detectRetina: true
});