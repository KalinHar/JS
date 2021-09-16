function roadRadar (speed, area) {
    const motorWay = 130;
    const interstate = 90;
    const city = 50;
    const residential = 20;
    let diffSpeed = 0;
    let zonelimit;
    let status;
    switch (area) {
        case 'city':
            diffSpeed = speed - city;
            zonelimit = city;
            break;
        case 'interstate':
            diffSpeed = speed - interstate;
            zonelimit = interstate;
            break;
        case 'motorway':
            diffSpeed = speed - motorWay;
            zonelimit = motorWay;
            break;
        case 'residential':
            diffSpeed = speed - residential; 
            zonelimit = residential;
            break;
    }
    if (diffSpeed <= 0) {
        console.log(`Driving ${speed} km/h in a ${zonelimit} zone`);
    }else {
        if (diffSpeed <= 20) {
            status = 'speeding';
        }else if (diffSpeed <= 40) {
            status = 'excessive speeding';
        }else {
            status = 'reckless driving'
        }
        console.log(`The speed is ${diffSpeed} km/h faster than the allowed speed of ${zonelimit} - ${status}`)
    }

}

roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')
