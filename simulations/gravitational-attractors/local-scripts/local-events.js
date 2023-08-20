function resetSketchEvent() {
    createStar(
        sunMass,
        15, 
        [700, 500], // Pos
        [0, 0], // Vel
        [0, 0], // Acc
        "#ff0000",
        [
            [earthMass, 7, [1100, 400], [-10, 50], [0, 0], "#0000ff", [
                    [
                        moonMass, 3, [1180, 480], [-6, -2], [0, 0], "#777777"
                    ],
                    [
                        moonMass, 3, [1170, 480], [-2, -2], [0, 0], "#777777"
                    ]
                ]
            ]
        ]
    );
}


function createMoon(moonInfo) {
    let moon = new PlanetaryBody(moonInfo[MASS], moonInfo[RADIUS], moonInfo[POS], moonInfo[VEL], moonInfo[ACC], moonInfo[COLOUR])
    moons.push(moon);
    return moon;
}

function createPlanet(planetInfo) {
    let planet = new PlanetaryBody(planetInfo[MASS], planetInfo[RADIUS], planetInfo[POS], planetInfo[VEL], planetInfo[ACC], planetInfo[COLOUR])
    for (moonInfo of planetInfo[ORBITING_OBJS]) {
        let moon = createMoon(moonInfo);
        moon.setAttractor(planet);
    }
    planets.push(planet);
    return planet;
}

function createStar(mass, radius, pos, vel, acc, colour, PlanetsAndMoons) {
    /* PlanetsAndMoons = [
        [
            mass, radius, pos, vel, acc, [
                [
                    mass, radius, pos, vel, acc
                ], // Moons
        ...]
        ], // Planets
...]
    */
    let star = new PlanetaryBody(mass, radius, pos, vel, acc, colour)
    for (planetInfo of PlanetsAndMoons) {
        let planet = createPlanet(planetInfo);
        planet.setAttractor(star);
    }
    
    stars.push(star);
    return star
}

