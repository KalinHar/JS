class HolidayPackage {
    constructor(destination, season) {
        this.vacationers = [];
        this.destination = destination;
        this.season = season;
        this.insuranceIncluded = false; // Default value
    }

    showVacationers() {
        if (this.vacationers.length > 0)
            return "Vacationers:\n" + this.vacationers.join("\n");
        else
            return "No vacationers are added yet";
    }

    addVacationer(vacationerName) {
        if (typeof vacationerName !== "string" || vacationerName === ' ') {
            throw new Error("Vacationer name must be a non-empty string");
        }
        if (vacationerName.split(" ").length !== 2) {
            throw new Error("Name must consist of first name and last name");
        }
        this.vacationers.push(vacationerName);
    }

    get insuranceIncluded() {
        return this._insuranceIncluded;
    }

    set insuranceIncluded(insurance) {
        if (typeof insurance !== 'boolean') {
            throw new Error("Insurance status must be a boolean");
        }
        this._insuranceIncluded = insurance;
    }

    generateHolidayPackage() {
        if (this.vacationers.length < 1) {
            throw new Error("There must be at least 1 vacationer added");
        }
        let totalPrice = this.vacationers.length * 400;

        if (this.season === "Summer" || this.season === "Winter") {
            totalPrice += 200;
        }

        totalPrice += this.insuranceIncluded === true ? 100 : 0;

        return "Holiday Package Generated\n" +
            "Destination: " + this.destination + "\n" +
            this.showVacationers() + "\n" +
            "Price: " + totalPrice;
    }
}

module.exports = {HolidayPackage}

// ******** tests *******

const { expect, assert } = require('chai');
const { HolidayPackage } = require('./HolideyPackageUnitTests');

describe("Test HolidayPackage", function () {
    beforeEach(() => hp = new HolidayPackage('bul', 'Summer'));
    describe("constructor", function () {
        it("correct instance", function () {   
            expect(hp instanceof HolidayPackage).to.be.true;
        });
        it("correct properties", function () {   
            expect(hp.vacationers).to.be.eql([]);
            expect(hp.destination).to.be.equal('bul')
            expect(hp.season).to.be.equal('Summer');
            expect(hp.insuranceIncluded).to.false;
        });   
    });
    describe("showVacationers", function () {
        it("not vacationers", function () {   
            expect(hp.showVacationers()).to.be.equal("No vacationers are added yet");
        });
        it("has vacationers", function () {   
            hp.vacationers = ['pe', 'go']
            expect(hp.showVacationers()).to.be.equal("Vacationers:\npe\ngo");
        });   
    });
    describe("addVacationer", function () {
        it("not string throw error", function () {   
            expect(() => hp.addVacationer(5)).to.throw(Error, "Vacationer name must be a non-empty string");
            expect(() => hp.addVacationer(' ')).to.throw(Error, "Vacationer name must be a non-empty string");
        });
        it("not two names throw error", function () {   
            expect(() => hp.addVacationer('pesho')).to.throw(Error, "Name must consist of first name and last name");
            expect(() => hp.addVacationer('pesho ivanov petkov')).to.throw(Error, "Name must consist of first name and last name"); 
        });  
        it("correct add vacationer", function () {   
            hp.addVacationer('pesho ivanov');
            expect(hp.vacationers).to.be.eql(['pesho ivanov']);
        }); 
    });
    describe("set insurance", function () {
        it("not boolean throw error", function () {   
            expect(() => hp.insuranceIncluded = 12).to.throw(Error, "Insurance status must be a boolean");
            expect(() => hp.insuranceIncluded = "yes").to.throw(Error, "Insurance status must be a boolean");
            expect(() => hp.insuranceIncluded = '').to.throw(Error, "Insurance status must be a boolean");
        });
        it("boolean", function () {
            hp.insuranceIncluded = true;   
            expect(hp.insuranceIncluded).to.be.true;
        });
    });
    describe("generateHolidayPackage", function () {
        it("not vacationers throw error", function () {   
            expect(() => hp.generateHolidayPackage()).to.throw(Error, "There must be at least 1 vacationer added");
        });
        it("for summer and winter or other season", function () {
            hp.addVacationer('pesho ivanov'); 
            expect(hp.generateHolidayPackage()).to.be.equal("Holiday Package Generated\nDestination: bul\nVacationers:\npesho ivanov\nPrice: 600");
            hp.season = 'Spring'
            expect(hp.generateHolidayPackage()).to.be.equal("Holiday Package Generated\nDestination: bul\nVacationers:\npesho ivanov\nPrice: 400");
            hp.season = 'Winter'
            expect(hp.generateHolidayPackage()).to.be.equal("Holiday Package Generated\nDestination: bul\nVacationers:\npesho ivanov\nPrice: 600");
        
        });
        it("for insurance or not", function () {
            hp.insuranceIncluded = true;   
            hp.addVacationer('pesho ivanov'); 
            expect(hp.generateHolidayPackage()).to.be.equal("Holiday Package Generated\nDestination: bul\nVacationers:\npesho ivanov\nPrice: 700");
            hp.addVacationer('peo ivanov'); 
            hp.insuranceIncluded = false;
            expect(hp.generateHolidayPackage()).to.be.equal("Holiday Package Generated\nDestination: bul\nVacationers:\npesho ivanov\npeo ivanov\nPrice: 1000");
        });
    });
});
