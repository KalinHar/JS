class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp[condition]) {
            throw new Error("Unsuccessful registration at the camp.");
        }
        if (this.listOfParticipants.some(p => p.name == name)) {
            return `The ${name} is already registered at the camp.`;
        }
        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }
        this.listOfParticipants.push({
            name,
            condition,
            power: 100,
            wins: 0
        });
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        let part = this.listOfParticipants.filter(p => p.name == name);
        if (part.length == 0) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        let ind = this.listOfParticipants.indexOf(part[0]);
        this.listOfParticipants.splice(ind, 1);
        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        if (typeOfGame == 'WaterBalloonFights') {
            if (!this.listOfParticipants.some(p => p.name == participant1) || !this.listOfParticipants.some(p => p.name == participant2)) {
                throw new Error(`Invalid entered name/s.`);
            }
            let part1 = this.listOfParticipants.filter(p => p.name == participant1)[0];
            let part2 = this.listOfParticipants.filter(p => p.name == participant2)[0];
            if (part1.condition != part2.condition) {
                throw new Error(`Choose players with equal condition.`);
            }
            if (part1.power > part2.power) {
                part1.wins++;
                return `The ${part1.name} is winner in the game ${typeOfGame}.`;
            } else if (part2.power > part1.power) {
                part2.wins++;
                return `The ${part2.name} is winner in the game ${typeOfGame}.`;
            } else {
                return `There is no winner.`;
            }
        } else if (typeOfGame == 'Battleship') {
            if (!this.listOfParticipants.some(p => p.name == participant1)) {
                throw new Error(`Invalid entered name/s.`);
            }
            let part1 = this.listOfParticipants.filter(p => p.name == participant1)[0];
            part1.power += 20;
            return `The ${part1.name} successfully completed the game ${typeOfGame}.`
        }
    }

    toString() {
        let output = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];
        this.listOfParticipants.sort((p1, p2) => p2.wins - p1.wins).forEach(p => {
            output.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`);
        });
        return output.join('\n');
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());



// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// // console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// // console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));
