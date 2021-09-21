function heroesFromStr(arr) {
    let result = [];
    for (let el of arr) {
        let [name, level, items] = el.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        result.push(name, level, items);
    }

    function toObj(ar) {
        result = [];
        for (let i=0; i<ar.length; i+=3){
            let el = {
                name: ar[i],
                level: ar[i+1],
                items: ar[i+2]
            }
            result.push(el)
        }
        return result
    }
    // console.log(result);

    result = toObj(result);

    console.log(JSON.stringify(result));
}

heroesFromStr(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)
