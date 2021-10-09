class Company {
    constructor() {
        this.departments = {};
    }

    static validateInput(empl) {
        for (let el of empl) {
            if (el == '' || el == undefined || el == null) {
                throw new Error("Invalid input!");
            }
        }

        if (empl[1] < 0) {
            throw new Error("Invalid input!");
        }
    }

    addEmployee(...empl) {
        Company.validateInput(empl);
        let [name, salary, position, department] = empl;

        if (Object.keys(this.departments).includes(department)) {
            this.departments[department].push([name, salary, position]);
        }else {
            this.departments[department] = [[name, salary, position]];
        }
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment() {
        let bestAvgSal = 0;
        let bestDepart;
        let bestEmpl;
        
        for (let dep in this.departments) {
            let avgSal = 0;
            for (let emp of this.departments[dep]) {
                avgSal += emp[1];
            }
            if (avgSal / this.departments[dep].length > bestAvgSal) {
                bestAvgSal = avgSal / this.departments[dep].length;
                bestDepart = dep;
                bestEmpl = this.departments[dep]
            }
        }
        // bestEmpl.sort((a, b) => a[0].localeCompare(b[0])).sort((a, b) => b[1] - a[1]);
        bestEmpl.sort(([name1, salary1, p1], [name2, salary2, p2]) => {
            return salary2 - salary1 || name1.localeCompare(name2);
        });
        
        let result = `Best Department is: ${bestDepart}\n`;
        result += `Average salary: ${bestAvgSal.toFixed(2)}\n`;
        result += `${bestEmpl.map(e => `${e[0]} ${e[1]} ${e[2]}`).join('\n')}`;
        return result;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

