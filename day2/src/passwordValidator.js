function countValidPasswords(policyAndPassword) {
    const [policy, password] = policyAndPassword.split(': ');
    let requiredLetter = policy.slice(-1);
    return requiredLetter === password ? 1: 0;
}

export {countValidPasswords};
