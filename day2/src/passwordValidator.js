function countValidPasswords(policyAndPassword) {
    const [policy, password] = policyAndPassword.split(': ');
    let minimumNumberOfTimes = policy.slice(0,1);
    let maximumNumberOfTimes = policy.slice(2,3);
    let requiredLetter = policy.slice(-1);
    let numberOfTimes = password.split(requiredLetter).length - 1;
    return numberOfTimes >= minimumNumberOfTimes && numberOfTimes <= maximumNumberOfTimes ? 1: 0;
}

export {countValidPasswords};
