function solve(data, criteria) {
    let empl = JSON.parse(data);
    if (criteria != 'all') {
        let [key, value] = criteria.split('-');
        empl = empl.filter(e => e[key] == value);
    }
    result = empl.map((e, i) => `${i}. ${e.first_name} ${e.last_name} - ${e.email}`);
    console.log(result.join('\n'));
}

solve(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Johson",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'
)

