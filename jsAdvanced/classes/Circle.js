class Circle {
    constructor(r) {
        this._radius = r;
    }

    get radius() {
        return this._radius
    }

    set radius(value) {
        if (typeof value != 'number') {
            throw new TypeError('radius must be a number')
        }
        this._radius = value;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(value) {
        this.radius = value / 2;
    }

    get area() {
        return this.radius ** 2 * Math.PI;
    }

}

cir = new Circle(2);
console.log(cir.radius)
cir.diameter = 2;
console.log(cir.radius)
console.log(cir.area)
console.log(cir.diameter)
