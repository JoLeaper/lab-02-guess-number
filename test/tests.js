import compareNumbers from '../compareNumbers.js';
const test = QUnit.test;

test ('compareNumbers', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const expected = 1;
    //Act 
    // Call the function you're testing and set the result to a const
    // Compare numbers takes in (expected, userGuess)
    const answer = compareNumbers(12, 13);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(answer, expected);
});