function countValidPasswords(policyAndPassword) {
    const [policy, password] = policyAndPassword.split(': ');
    let maximumNumberOfTimes = policy.slice(2,3);
    let requiredLetter = policy.slice(-1);
    let numberOfTimes = password.split(requiredLetter).length - 1;
    return numberOfTimes > 0 && numberOfTimes <= maximumNumberOfTimes ? 1: 0;
}

export {countValidPasswords};
