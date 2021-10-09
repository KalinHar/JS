function result(tickets, criterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    
    let res = [];

    function sortFunc(a, b) {
        const sort = {
            'destination': 0,
            'price': 1,
            'status': 2
        }
        const sc = sort[criterion];
        if (sc == 1) {
            return Number(a[sc]) > Number(b[sc]);
        }else {
            return a[sc].localeCompare(b[sc]);
        }
    }
    
    tickets = tickets.map(t => t.split('|')).sort((a, b) => sortFunc(a, b));
    for (let [t, p, s] of tickets) {
        res.push(new Ticket(t, Number(p), s));
    }
    return res;
}

let w = result(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price')
console.log(w[0])

