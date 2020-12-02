function isValid(policyAndPassword) {
    const [policy, password] = policyAndPassword.split(': ');
    const [positions, requiredLetter] = policy.split(' ');
    const [firstPosition, secondPosition] = positions.split('-');
    let isInFirstPosition = password[firstPosition - 1] === requiredLetter;
    let isInSecondPosition = password[secondPosition] === requiredLetter;

    return isInFirstPosition || isInSecondPosition;
}

function countValidPasswords(policiesAndPasswordsAsString) {
    const policiesAndPasswords = policiesAndPasswordsAsString.split('\n');
    let validPasswords = policiesAndPasswords.filter(isValid);
    return validPasswords.length;
}

export {countValidPasswords};
