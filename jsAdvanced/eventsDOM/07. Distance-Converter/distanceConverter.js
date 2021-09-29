function attachEventsListeners() {
    const inputNum = document.getElementById("inputDistance");
    const fromSelUnit = document.getElementById("inputUnits");
    const toSelUnit = document.getElementById("outputUnits");
    const output = document.getElementById("outputDistance");
    document.querySelector('#convert').addEventListener('click', calculate);

    function getUnit(unit) {
        return Array.from(unit.children).filter(child => child.selected)[0].value;
    }

    function convert(fromDim, toDim, distance) {
        const units = {
            km: 1000,
            m: 1,
            cm: 0.01,
            mm: 0.001,
            mi: 1609.34,
            yrd: 0.9144,
            ft: 0.3048,
            in: 0.0254
        };
        return units[fromDim] * distance / units[toDim];
    }

    function calculate(ev) {
        const fromUnit = getUnit(fromSelUnit);
        const toUnit = getUnit(toSelUnit);
        
        output.value = convert(fromUnit, toUnit, Number(inputNum.value));
        output.disabled = '';

    }

}
