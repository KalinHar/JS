function addDestination() {
    document.querySelector('#input button', addDestination);
    const [city, country] = document.querySelectorAll('#input input');
    const season = document.querySelector('#seasons');
    if (city.value != '' && country.value != '' && season.value != ''){
        const destList = document.querySelector('#destinationsList');
        const row = document.createElement('tr');
        row.innerHTML = `<td>${city.value}, ${country.value}</td><td>${season.options[season.selectedIndex].text}</td>`;
        destList.appendChild(row);

        document.querySelector(`#${season.value}`).value ++

        city.value = '';
        country.value = '';
        season.value = '';

    }

}