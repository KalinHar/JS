// function solve() {
//     const [inputJson, output] = Array.from(document.querySelectorAll('textarea'));
//     const [genBtn, buyBth] = Array.from(document.querySelectorAll('button'));
//     genBtn.addEventListener('click', generate);
//     buyBth.addEventListener('click', buy);

//     function generate(ev) {
//         const furnitures = JSON.parse(inputJson.value);
//         const table = document.querySelector('tbody');

//         furnitures.forEach(fur => {
//             const row = document.createElement('tr');
//             const imgTd = document.createElement('td');
//             const nameTd = document.createElement('td');
//             const priceTd = document.createElement('td');
//             const factTd = document.createElement('td');
//             const checkTd = document.createElement('td');

//             const img = document.createElement('img');
//             img.src = fur.img;
//             imgTd.appendChild(img);

//             const name = document.createElement('p');
//             name.textContent = fur.name;
//             nameTd.appendChild(name);

//             const price = document.createElement('p');
//             price.textContent = fur.price;
//             priceTd.appendChild(price);

//             const fact = document.createElement('p');
//             fact.textContent = fur.decFactor;
//             factTd.appendChild(fact);

//             const box = document.createElement('input');
//             box.type = "checkbox";
//             checkTd.appendChild(box);
            
//             row.appendChild(imgTd);
//             row.appendChild(nameTd);
//             row.appendChild(priceTd);
//             row.appendChild(factTd);
//             row.appendChild(checkTd);

//             table.appendChild(row);
//         });
//     }

//     function buy(ev) {
//         const boxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
//         let bought = [];
//         let totalPr = 0;
//         let avgFact = 0;
//         for (let b of boxes) {
//           const row = b.parentElement.parentElement;
//           bought.push(row.children[1].textContent);
//           totalPr += Number(row.children[2].textContent);
//           avgFact += Number(row.children[3].textContent);
//         }
//         output.value = `Bought furniture: ${bought.join(', ')}
// Total price: ${totalPr.toFixed(2)}
// Average decoration factor: ${avgFact/bought.length}`;
//     }
// }


function solve() {
    /* # configure event listeners # */
    // select all buttons
    // first button -> table generation
    // second button -> buy furniture

    const table = document.querySelector('table.table tbody');

    const [input, output] = Array.from(document.querySelectorAll('textarea'));
    const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));

    generateBtn.addEventListener('click', generate);
    buyBtn.addEventListener('click', buy);


    /* # table generation # */
    function generate(e) {
        // read input JSON and parse it
        // for every array element, create table row
        const data = JSON.parse(input.value);

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

    /* # buy furniture # */
    function buy(e) {
        // select all checkboxes
        // filter only checked checkboxes
        // repeat for every selected checkbox
        // -- select parent row
        // -- read item information
        // display output

        const furniture = Array
            .from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map(b => b.parentElement.parentElement)
            .map(r => ({
                name: r.children[1].textContent,
                price: Number(r.children[2].textContent),
                decFactor: Number(r.children[3].textContent)
            }))
            .reduce((acc, c, i, a) => {
                acc.names.push(c.name);
                acc.total += c.price;
                acc.decFactor += c.decFactor / a.length;
                return acc;
            }, { names: [], total: 0, decFactor: 0 });

        const result = `Bought furniture: ${furniture.names.join(', ')}
Total price: ${furniture.total.toFixed(2)}
Average decoration factor: ${furniture.decFactor}`;

        output.value = result;
    }
}