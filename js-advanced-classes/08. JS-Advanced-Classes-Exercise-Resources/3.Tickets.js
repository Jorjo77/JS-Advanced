function solve(stringsArr, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        compareTo(other, criteria) {

            if (typeof this[criteria] === 'string') {
                return this[criteria].localeCompare(other[criteria]);
            } else {
                return this[criteria] - other[criteria];
            }
        }
    }

    let ticketBase = [];

    for (const str of stringsArr) {
        let[currDescription, currPrice, currStatus] = str.split('|');
        currPrice = Number(currPrice);

        let currTicket = new Ticket(currDescription, currPrice, currStatus);
        ticketBase.push(currTicket);
    }

    ticketBase.sort((a, b) => a.compareTo(b, criteria));

    return ticketBase;
}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
));