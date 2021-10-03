function processor(input) {
    let result = [];
    const commands = {
        add: (el) => result.push(el),
        remove: (el) => (result = result.filter(e => e != el)),
        print: () => console.log(result.join(','))
    }
    for (let com of input) {
        const [act, el] = com.split(' ');
        commands[act](el);
    }
}

processor(['add hello', 'add again', 'remove hello', 'add again', 'print'])