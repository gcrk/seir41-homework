// Strings
// DrEvil Function
const drEvil = function (amount) {
    let result = `${amount} dollars`;

    if (amount === 1000000) {
        result += " (pinky)";
    }

    return result;
};

// MixUp Function
const mixUp = function (s1, s2) {
    const firstMixedWord = s2.substring(0,2) + s1.substring(2);
    const secondMixedWord = s1.substring(0,2) + s2.substring(2);
    return `${firstMixedWord} ${secondMixedWord}`;
};