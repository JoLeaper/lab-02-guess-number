import compareNumbers from '../compareNumbers.js';
const test = QUnit.test;

test ('compareNumbers', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const expected = 1;
    const expected2 = 1;
    const expected3 = 0;
    const expected4 = -1;
    const expected5 = -1;
    //Act 
    // Call the function you're testing and set the result to a const
    // Compare numbers takes in (expected, userGuess)
    const answer = compareNumbers(1, 20);
    const answer2 = compareNumbers(5, 15);
    const answer3 = compareNumbers(10, 10);
    const answer4 = compareNumbers(15, 5);
    const answer5 = compareNumbers(20, 1);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(answer, expected);
    assert.equal(answer2, expected2);
    assert.equal(answer3, expected3);
    assert.equal(answer4, expected4);
    assert.equal(answer5, expected5);
});