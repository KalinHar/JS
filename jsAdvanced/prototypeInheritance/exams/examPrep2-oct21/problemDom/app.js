function solve() {
    
    const [modelIn, yearIn, priceIn] = Array.from(document.querySelectorAll('form input'));
    const descriptionIn = document.querySelector('#description');
    const addBtn = document.querySelector('#add');
    addBtn.addEventListener('click', addFurniture);
    const totalPrice = document.querySelector('.total-price')

    function addFurniture(e) {
        e.preventDefault();
        const [model, year, price, description] =
            [modelIn.value, Number(yearIn.value), Number(priceIn.value), descriptionIn.value];
        
        if (model != '' && year > 0 && price > 0 && description != '') {
            addToTable(model, year, price, description);
        }
        modelIn.value = '';
        priceIn.value = '';
        yearIn.value = '';
        descriptionIn.value = '';

        function addToTable(model, year, price, description) {
            const moreBtn = el('button', {className: 'moreBtn'}, 'More Info');
            const buyBtn = el('button', {className: 'buyBtn'}, 'Buy it');
            const info = el('tr', {className: 'info'});
            info.innerHTML = `<td>${model}</td><td>${price.toFixed(2)}</td><td></td>`;
            info.children[2].appendChild(moreBtn);
            info.children[2].appendChild(buyBtn);
            moreBtn.addEventListener('click', switchBtn);
            buyBtn.addEventListener('click', buyProduct);


            const hide = el('tr', {className: 'hide', style: 'display: none'});
            hide.innerHTML = `<td>Year: ${year}</td><td colspan="3">Description: ${description}</td>`;
            document.querySelector('#furniture-list').appendChild(info);
            document.querySelector('#furniture-list').appendChild(hide);       
        }

        function switchBtn(e) {
            const hideEl = e.target.parentElement.parentElement.nextElementSibling;
            if (e.target.textContent == 'More Info') {
                e.target.textContent = 'Less Info';
                hideEl.style.display = 'contents';
            }else {
                e.target.textContent = 'More Info';
                hideEl.style.display = 'none';
            }
        }

        function buyProduct(e) {
            const price = Number(e.target.parentElement.previousElementSibling.textContent)
            totalPrice.textContent = (Number(totalPrice.textContent) + price).toFixed(2);
            e.target.parentElement.parentElement.nextElementSibling.remove();
            e.target.parentElement.parentElement.remove();
        }
    }
    
    function el(type, attr, ...content) {
        const element = document.createElement(type);

        for (let prop in attr) {
            element[prop] = attr[prop];
        }
        for (let item of content) {
            if (typeof item == 'string' || typeof item == 'number') {
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        }

        return element;
    }
}


function solve() {
    const modelField = document.getElementById("model");
    const yearField = document.getElementById("year");
    const descriptionField = document.getElementById("description");
    const priceField = document.getElementById("price");

    const addButton = document.getElementById("add");
    addButton.addEventListener("click", addFurniture);

    const furnitureList = document.getElementById("furniture-list");
    const totalPrice = document.querySelector(".total-price");



    function addFurniture(e) {
        e.preventDefault();

        const yearValue = Number(yearField.value);
        const priceValue = Number(priceField.value);
        if (modelField.value != "" && descriptionField.value != "" && yearValue > 0 && priceValue > 0) {
            const tr = document.createElement("tr");
            tr.classList.add("info");
            tr.innerHTML = `<td>${modelField.value}</td>
                            <td>${priceValue.toFixed(2)}</td>
                            <td><button class="moreBtn">More Info</button>
                                <button class="buyBtn">Buy it</button>
                            </td>`;
            const hideTr = document.createElement("tr");
            hideTr.classList.add("hide");
            hideTr.innerHTML = `<td>Year: ${yearValue}</td><td colspan="3">Description: ${descriptionField.value}</td>`

            furnitureList.appendChild(tr);
            furnitureList.appendChild(hideTr);

            const moreInfoButtons = tr.querySelectorAll("button");
            moreInfoButtons[0].addEventListener("click", showMoreInfo);
            moreInfoButtons[1].addEventListener("click", buyFurniture);

        }

        modelField.value = "";
        yearField.value = "";
        descriptionField.value = "";
        priceField.value = "";
    }

    function showMoreInfo(e) {
        const moreInfoTr = e.target.parentElement.parentElement.nextElementSibling;
        if (e.target.textContent == "More Info") {
            e.target.textContent = "Less Info";
            moreInfoTr.style.display = "contents";
        } else {
            e.target.textContent = "More Info";
            moreInfoTr.style.display = "none";
        }
    }

    function buyFurniture(e) {
        const tr = e.target.parentElement.parentElement;
        const hideTr = tr.nextElementSibling;

        hideTr.parentElement.removeChild(hideTr);

        const price = Number(tr.querySelectorAll("td")[1].textContent);
        totalPrice.textContent = (Number(totalPrice.textContent) + price).toFixed(2);

        tr.parentElement.removeChild(tr);
    }

}
