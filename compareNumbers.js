const compareNumbers = (expected, guessed) => {
    if (expected === guessed) {
        return 0;
    } else if (expected > guessed) {
        return -1;
    } else if (expected < guessed) {
        return 1;
    }
};

export default compareNumbers;