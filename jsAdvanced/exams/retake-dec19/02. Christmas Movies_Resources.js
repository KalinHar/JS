class ChristmasMovies {
    constructor() {
        this.movieCollection = [];
        this.watched = {};
        this.actors = [];
    }

    buyMovie(movieName, actors) {
        let movie = this.movieCollection.find(m => movieName === m.name);
        let uniqueActors = new Set(actors);

        if (movie === undefined) {
            this.movieCollection.push({ name: movieName, actors: [...uniqueActors] });
            let output = [];
            [...uniqueActors].map(actor => output.push(actor));
            return `You just got ${movieName} to your collection in which ${output.join(', ')} are taking part!`;
        } else {
            throw new Error(`You already own ${movieName} in your collection!`);
        }
    }

    discardMovie(movieName) {
        let filtered = this.movieCollection.filter(x => x.name === movieName)

        if (filtered.length === 0) {
            throw new Error(`${movieName} is not at your collection!`);
        }
        let index = this.movieCollection.findIndex(m => m.name === movieName);
        this.movieCollection.splice(index, 1);
        let { name, _ } = filtered[0];
        if (this.watched.hasOwnProperty(name)) {
            delete this.watched[name];
            return `You just threw away ${name}!`;
        } else {
            throw new Error(`${movieName} is not watched!`);
        }

    }

    watchMovie(movieName) {
        let movie = this.movieCollection.find(m => movieName === m.name);
        if (movie) {
            if (!this.watched.hasOwnProperty(movie.name)) {
                this.watched[movie.name] = 1;
            } else {
                this.watched[movie.name]++;
            }
        } else {
            throw new Error('No such movie in your collection!');
        }
    }

    favouriteMovie() {
        let favourite = Object.entries(this.watched).sort((a, b) => b[1] - a[1]);
        if (favourite.length > 0) {
            return `Your favourite movie is ${favourite[0][0]} and you have watched it ${favourite[0][1]} times!`;
        } else {
            throw new Error('You have not watched a movie yet this year!');
        }
    }

    mostStarredActor() {
        let mostStarred = {};
        if (this.movieCollection.length > 0) {
            this.movieCollection.forEach(el => {
                let { _, actors } = el;
                actors.forEach(actor => {
                    if (mostStarred.hasOwnProperty(actor)) {
                        mostStarred[actor]++;
                    } else {
                        mostStarred[actor] = 1;
                    }
                })
            });
            let theActor = Object.entries(mostStarred).sort((a, b) => b[1] - a[1]);
            return `The most starred actor is ${theActor[0][0]} and starred in ${theActor[0][1]} movies!`;
        } else {
            throw new Error('You have not watched a movie yet this year!')
        }
    }
}

// let christmas = new ChristmasMovies();
// christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
// christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']);
// christmas.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
// christmas.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
// christmas.watchMovie('Home Alone');
// christmas.watchMovie('Home Alone');
// christmas.watchMovie('Home Alone');
// christmas.watchMovie('Home Alone 2');
// christmas.watchMovie('The Grinch');
// christmas.watchMovie('Last Christmas');
// christmas.watchMovie('Home Alone 2');
// christmas.watchMovie('Last Christmas');
// christmas.discardMovie('The Grinch');
// christmas.favouriteMovie();
// christmas.mostStarredActor();


// module.exports = ChristmasMovies;


//****** tests for class *********

const { expect, assert } = require('chai');
const { ChristmasMovies } = require('./ChristmasMovies');

describe("Test ChristmasMovies", function () {
    beforeEach(() => cm = new ChristmasMovies());
    describe("constructor", function () {
        it("correct instance", function () {   
            expect(cm instanceof ChristmasMovies).to.be.true;
        });
        it("correct properties", function () {   
            expect(cm.movieCollection).to.be.eql([]);
            expect(cm.watched).to.be.eql({});
            expect(cm.actors).to.be.eql([]);
        });   
    });
    describe("buy movie", function () {
        it("trow error", function () {   
            cm.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            expect(() => cm.buyMovie('Home Alone')).to.throw(Error, `You already own Home Alone in your collection!`);
        });
        it("buy movie", function () {   
            cm.buyMovie('Home Alone', ['Macaulay Culkin', 'Macaulay Culkin', 'Joe Pesci']);
            expect(cm.movieCollection).to.be.eql([{ name: 'Home Alone', actors: ['Macaulay Culkin', 'Joe Pesci'] }]);
            expect(cm.buyMovie('fear', ['thisActor'])).to.be.equal(`You just got fear to your collection in which thisActor are taking part!`);
        });   
    });
    describe("discard movie", function () {
        it("if not movie trow error", function () {   
            cm.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            expect(() => cm.discardMovie('Home')).to.throw(Error, `Home is not at your collection!`);
        });
        it("if not watched trow error", function () {   
            cm.buyMovie('Home Alone', ['Macaulay Culkin', 'Macaulay Culkin', 'Joe Pesci']);
            expect(() => cm.discardMovie('Home Alone')).to.throw(Error, `Home Alone is not watched!`);
        });  
        it("corect discard", function () {   
            cm.buyMovie('Home Alone', ['Macaulay Culkin', 'Macaulay Culkin', 'Joe Pesci']);
            cm.watchMovie('Home Alone');
            expect(cm.discardMovie('Home Alone')).to.equal('You just threw away Home Alone!');
            expect(cm.movieCollection).to.be.eql([]);
            expect(cm.watched).to.be.eql({});
        });  
    });
    describe("watch movie", function () {
        it("if not movie trow error", function () {   
            expect(() => cm.watchMovie('Home')).to.throw(Error, 'No such movie in your collection!');
        });
        it("correct watch movie", function () {   
            cm.buyMovie('Home Alone', ['Macaulay Culkin', 'Macaulay Culkin', 'Joe Pesci']);
            cm.watchMovie('Home Alone');
            expect(cm.watched).to.be.eql({'Home Alone': 1});
            cm.watchMovie('Home Alone');
            expect(cm.watched).to.be.eql({'Home Alone': 2});
        });
    });
    describe("favorite movie", function () {
        it("correct favorite", function () {  
            cm.buyMovie('Home Alone', ['Macaulay Culkin', 'Macaulay Culkin', 'Joe Pesci']);
            cm.buyMovie('Fear', ['Macaulay', 'Joe']);
            cm.buyMovie('Alone', ['Culkin', 'Pesci',]);
            cm.watchMovie('Home Alone');
            cm.watchMovie('Fear');
            cm.watchMovie('Fear');
            expect(cm.favouriteMovie()).to.be.equal('Your favourite movie is Fear and you have watched it 2 times!');
        });
        it("if no movie in watched trow error", function () {   
            cm.buyMovie('Home Alone', ['Macaulay Culkin', 'Macaulay Culkin', 'Joe Pesci']);
            expect(() => cm.favouriteMovie()).to.throw(Error, 'You have not watched a movie yet this year!'); 
        });
    });
    describe("most stared actor", function () {
        it("correct actor", function () {  
            cm.buyMovie('Home Alone', ['Macaulay', 'Macaulay', 'Joe Pesci']);
            cm.buyMovie('Fear', ['Macaulay', 'Joe']);
            cm.buyMovie('Alone', ['Culkin', 'Pesci',]);
            cm.watchMovie('Home Alone');
            cm.watchMovie('Fear');
            cm.watchMovie('Fear');
            expect(cm.mostStarredActor()).to.be.equal('The most starred actor is Macaulay and starred in 2 movies!');
        });
        it("if no movie trow error", function () {   
            expect(() => cm.mostStarredActor()).to.throw(Error, 'You have not watched a movie yet this year!'); 
        });
    });
});