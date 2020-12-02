function countValidPasswords(policyAndPassword) {
    const [policy, password] = policyAndPassword.split(': ');
    const [times, requiredLetter] = policy.split(' ');
    const [minimumNumberOfTimes, maximumNumberOfTimes] = times.split('-');
    let numberOfTimes = password.split(requiredLetter).length - 1;
    return numberOfTimes >= minimumNumberOfTimes && numberOfTimes <= maximumNumberOfTimes ? 1: 0;
}

export {countValidPasswords};
