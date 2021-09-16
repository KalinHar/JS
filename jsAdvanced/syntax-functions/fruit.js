function calculateFruits(fruit, weight, money) {
    const weightKilos = weight / 1000;
    const moneyNeeded = weightKilos * money;
    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightKilos.toFixed(2)} kilograms ${fruit}.`);
}

calculateFruits('banana', 2500, 1.80)