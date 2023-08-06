import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptionsJSON from "../../backgroundParticles.json";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    const particlesOption = JSON.parse(JSON.stringify(particlesOptionsJSON));
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesOption}
            canvasClassName="particle"
        ></Particles>

    );
};

export default ParticlesBackground;