function listNames(names) {
    result = names.sort((a, b) => a.localeCompare(b)).map((v, i) => `${i+1}.${v}`);
    console.log(result.join('\n'));
}
listNames(["John", "Bob", "Christina", "Ema"]);
