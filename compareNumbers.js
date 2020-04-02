const compareNumbers = (expected, guessed) => {
    if (guessed > 20 || guessed < 1) {
        return 'error';
    }
    if (expected === guessed) {
        return 0;
    } else if (expected > guessed) {
        return -1;
    } else {  
        return 1;
    }
};

export default compareNumbers;