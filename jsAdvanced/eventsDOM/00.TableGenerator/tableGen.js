function solve() {
    document.querySelector('button').addEventListener('click', generate);
    const table = document.querySelector('tbody');
    /* # table generation # */
    function generate(e) {
        // read input JSON and parse it
        // for every array element, create table row
        const data = [
            {
                "img": "imgSource",
                "name": "Sofa",
                "price": "259",
                "decFactor":"0.4"
        
            },
            {
                "img": "imgSource",
                "name": "Chairs",
                "price": "120",
                "decFactor":"1.2"
            },
            {
                "img": "imgSource",
                "name": "Table",
                "price": "95",
                "decFactor":"1.1"
            }
        ];

        for (let item of data) {
            const row = document.createElement('tr');

            row.appendChild(createCell('img', { src: item.img }));
            row.appendChild(createCell('p', {}, item.name));
            row.appendChild(createCell('p', {}, item.price));
            row.appendChild(createCell('p', {}, item.decFactor));
            row.appendChild(createCell('input', { type: 'checkbox' }));

            table.appendChild(row);
        }
    }

    function createCell(nestedTag, props, content) {
        const cell = document.createElement('td');
        const nested = document.createElement(nestedTag);

        for (let prop in props) {
            nested[prop] = props[prop];
        }
        if (content) {
            nested.textContent = content;
        }
        cell.appendChild(nested);

        return cell;
    }

}