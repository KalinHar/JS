function solve() {
    class Figure {
        constructor(units='cm') {
            this.units = units;
            this.valueOf = {
                'cm': 1,
                'mm': 10,
                'm': 0.1
            }
        }
        get constant() {
            return this.valueOf[this.units];
        }
        get area() {}
        
        changeUnits(newUnits) {
            this.units = newUnits;
        }

        toString() {
            return `Figures units: ${this.units}`
        }
    }
    class Circle extends Figure {
        constructor(raduis, units) {
            super(units);
            this.raduis = raduis;
        }
        get area() {
            return (this.constant * this.raduis) ** 2 * Math.PI;
        }
        toString() {
            return super.toString() + ` Area: ${this.area} - radius: ${this.constant * this.raduis}`
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;
        }
        get area() {
            return this.constant ** 2 *this.width * this.height;
        }
        toString() {
            return super.toString() + ` Area: ${this.area} - width: ${this.constant * this.width}, height: ${this.constant * this.height}`
        }
    }
    return {
        Figure,
        Circle,
        Rectangle
    }
}

let fig  = solve();

let c = new fig.Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new fig.Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50

let f = new fig.Figure();
console.log(f.area)