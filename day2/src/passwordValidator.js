function countValidPasswords(policyAndPassword) {
    const [policy, password] = policyAndPassword.split(': ');
    let requiredLetter = policy.slice(-1);
    return password.includes(requiredLetter) ? 1: 0;
}

export {countValidPasswords};
