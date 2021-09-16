function circleArea (radius) {
    inputType = typeof (radius);
    if (inputType == 'number') {
        let area = radius ** 2 * Math.PI;
        console.log(area.toFixed(2));
    }else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}

circleArea(5);
circleArea("asd");