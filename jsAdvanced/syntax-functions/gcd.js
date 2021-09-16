function gcd(n1, n2) {
    while (n2 != 0) {
        const t = n2;
        n2 = n1 % n2;
        n1 = t;
    }
    return n1;
}
console.log(gcd(5, 15))
