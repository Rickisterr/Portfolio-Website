import { loadFull } from "tsparticles"
import { useCallback } from "react"
import Particles from "react-tsparticles";

function ParticleEff() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}

            options={{
                "fullScreen": {
                    "enable": true,
                    "zIndex": -10
                },
                "particles": {
                    "number": {
                        "value": 200,
                        "density": {
                            "enable": true,
                            "value_area": 850
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "opacity": {
                        "anim": {
                            "enable": true,
                            "speed": 1.15,
                            "opacity_min": 0.01,
                        }
                    },
                    "size": {
                        "value": 1
                    },
                    "line_linked": {
                        "enable": false
                    },
                    "move": {
                        "enable": true,
                        "speed": 0.085,
                        "direction": "none",
                        "random": true,
                        "straight": false
                    }
                },
                "interactivity": {
                    "events": {
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        }
                    },
                    "modes": {
                        "push": {
                            "particles_nb": 6
                        }
                    }
                },
                "retina_detect": true
            }}
        />
    );
}

export default ParticleEff;
