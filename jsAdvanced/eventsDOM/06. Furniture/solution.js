function solve() {
    const [inputJson, output] = Array.from(document.querySelectorAll('textarea'));
    const [genBtn, buyBth] = Array.from(document.querySelectorAll('button'));
    genBtn.addEventListener('click', generate);
    buyBth.addEventListener('click', buy);

    function generate(ev) {
        const furnitures = JSON.parse(inputJson.value);
        const table = document.querySelector('tbody');

        furnitures.forEach(fur => {
            const row = document.createElement('tr');
            const imgTd = document.createElement('td');
            const nameTd = document.createElement('td');
            const priceTd = document.createElement('td');
            const factTd = document.createElement('td');
            const checkTd = document.createElement('td');

            const img = document.createElement('img');
            img.src = fur.img;
            imgTd.appendChild(img);

            const name = document.createElement('p');
            name.textContent = fur.name;
            nameTd.appendChild(name);

            const price = document.createElement('p');
            price.textContent = fur.price;
            priceTd.appendChild(price);

            const fact = document.createElement('p');
            fact.textContent = fur.decFactor;
            factTd.appendChild(fact);

            const box = document.createElement('input');
            box.type = "checkbox";
            checkTd.appendChild(box);
            
            row.appendChild(imgTd);
            row.appendChild(nameTd);
            row.appendChild(priceTd);
            row.appendChild(factTd);
            row.appendChild(checkTd);

            table.appendChild(row);
            // console.log(name.textContent);
        });
    }

    function buy(ev) {
        const boxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
        let bought = [];
        let totalPr = 0;
        let avgFact = 0;
        for (let b of boxes) {
          const row = b.parentElement.parentElement;
          bought.push(row.children[1].textContent);
          totalPr += Number(row.children[2].textContent);
          avgFact += Number(row.children[3].textContent);
        }
        output.value = `Bought furniture: ${bought.join(', ')}
Total price: ${totalPr.toFixed(2)}
Average decoration factor: ${avgFact/bought.length}`;
        console.log(boxes)
    }
}
