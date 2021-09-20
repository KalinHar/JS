function library(library, orders) {
    return orders.map(compose);

    function compose(order) {
        // create empty object and copy properties form template
        const result = Object.assign({}, order.template);

        // create methods from library to every item in parts
        for (let part of order.parts) {
            result[part] = library[part];
        }

        return result;
    }
}