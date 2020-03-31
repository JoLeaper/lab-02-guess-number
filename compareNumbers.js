const compareNumbers = (expected, guessed) => {
    if (expected === guessed) {
        return 'correct';
    } else if (expected > guessed) {
        return 'lower';
    } else if (expected < guessed) {
        return 'higher';
    }
};

export default compareNumbers;