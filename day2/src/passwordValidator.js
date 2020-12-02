function countValidPasswords(policyAndPassword) {
    const [policy, password] = policyAndPassword.split(': ');
    let requiredLetter = policy.slice(-1);
    let numberOfTimes = password.split(requiredLetter).length - 1;
    return numberOfTimes > 0 && numberOfTimes < 3 ? 1: 0;
}

export {countValidPasswords};
