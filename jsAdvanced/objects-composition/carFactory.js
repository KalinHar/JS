function carFactory(car) {
    
    function getEngine(pow) {
        const engineType = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }
        ]
        return engineType.find(el => el.power >= pow)
    }

    function getWheels(wheel) {
        wheel = wheel % 2 == 0 ? wheel-1 : wheel;
        return new Array(4).fill(wheel, 0, 4);
    }

    return {
        model: car.model,
        engine: getEngine(car.power),
        carriage: {
            type: car.carriage,
            color: car.color
        },
        wheels: getWheels(car.wheelsize)
    }
}

care = (carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
))

console.log(care.carriage)
