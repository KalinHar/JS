function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

// function solve(area, vol, input) {
//     const result = [];
//     for (let par of JSON.parse(input)) {
//         result.push({
//             area: area.apply(par),
//             volume: vol.apply(par)
//         })
//     }
//     return result;
// }
function solve(area, vol, input) {
    return JSON.parse(input).map(par => ({
        area: area.apply(par),
        volume: vol.apply(par)
    }));
}

let re = (solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    ));
console.log(re)
