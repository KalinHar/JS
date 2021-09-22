function createSortedList() {
    return {
        sortedlist: [],
        size: 0,
        add(el) {
            if (!isNaN(parseFloat(el)) && isFinite(el)) { // check: is a nubmer
                this.sortedlist.push(el);
                this.sortedlist.sort((a, b) => a - b);
                this.size++;
            }
        },
        remove(ind) {
            if (0 <= ind && ind < this.size) {
                this.sortedlist.splice(ind, 1)
                this.size--;
            }
        },
        get(ind) {
            if (0 <= ind && ind < this.size) {
                return this.sortedlist[ind]
            }
        }
    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.sortedlist)
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
