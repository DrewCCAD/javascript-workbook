'use strict';

var assert = require('assert');

// ****
// Basic Data Types
// ****

// Problem 0:
// To start out we are declaring a variable named myUndefined
// Note that we are not assigning a value, so it is undefined.

var myUndefined;

// Problem 1:
// Let's create a new variable named myNull and give it the value null.
//
// What is the difference between null and undefined?

var myNull = null;

// Problem 2:
// Let's create a new variable named myTrue and give it the value true.

var myTrue = true;

// Problem 3:
// Let's create a new variable named myFalse and give it the value false.

var myFalse = false;

// Problem 4:
// Let's create a new variable named myNumber. Assign it a number.

var myNumber = 5;

// Problem 5:
// Let's create a new variable named myString. Assign it a string.

var myString = "the cat ran";

// ****
// Boolean Operators
// ****

// Problem 6:
// What is the value of true && true

var trueAndTrue = (true && true);

// Problem 7:
// What is the value of false && true

var falseAndTrue = (false && true);

// Problem 8:
// What is the value of true && false

var trueAndFalse = (true && false);

// Problem 9:
// What is the value of false && false

var falseAndFalse = (false && false);

// Problem 10:
// What is the value of true || true

var trueOrTrue = (true || true);

// Problem 11:
// What is the value of false || true

var falseOrTrue = (false || true);

// Problem 12:
// What is the value of true || false

var trueOrFalse = (true || false);

// Problem 13:
// What is the value of false || false

var falseOrFalse = (false || false);

// Problem 14:
// What is the value of !false

var notFalse = !false;

// Problem 15:
// What is the value of !true

var notTrue = !true;

// Problem 16:
// What is the value of !!true

var notNotTrue = !!true;

// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// What is the difference between the "and" and the "or" operators? Explain why you would use each of them.
//
// Your Answer Goes Here: && will test if both sides are true or not and if both are true return answer of true if on is false they will both be false.
//                        || will test if both sides are true or false if one is true they both will be true.
//
// ****

// ****
// Truthiness
// ****

var bob = 'bob';
var emptyString = '  ';

// Problem 17:
// What is the value of !!bob would be //=> true


var notNotBob = true;

// Problem 18:
// What is the value of !!emptyString would be //=> true

var notNotEmptyString = true;

// Problem 19:
// What is the value of !null //=> false

var notNull = true;

// Problem 20:
// What is the value of !!undefined //=> true

var notNotUndefined = false;

// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// Explain truthiness and falsiness in your own words. Provide an example for each.
//
// Your Answer Goes Here: just about anything can be a truthy while there are only six false values: false, null, underfined, NaN, 0, "".;
// ****

// ****
// Comparison Operators
// ****

// Problem 21
// What is the value of 4 === 4 //=> true
var fourEqualTofour = true;

// Problem 22:
// What is the value of 4 !== 4 //=> false
var fourNotEqualTofour = false;

// Problem 23:
// What is the value of -3 === 10 //=> false
var negativeThreeEqualToTen = false;

// Problem 24:
// What is the value of -3 < 10 //=> true
var negativeThreeLessThanTen = true;

// Problem 25:
// What is the value of -3 <= 10 //=> true
var negativeThreeLessThanOrEqualToTen = true ;

// Problem 26:
// What is the value of -3 > 10 //=> false
var negativeThreeGreaterThanTen = false;

// Problem 27:
// What is the value of -3 >= 10 //=> false
var negativeThreeGreaterThanOrEqualToTen = false;

// Problem 28:
// What is the value of '4' == 4 //=> true
var stringFourEqualsNumberFour = true;

// Problem 29:
// What is the value of '4' != 4 //=> false
var stringFourNotEqualsNumberFour = false;

// Problem 30:
// What is the value of '4' === 4 //=> false
var stringFourStrictEqualsNumberFour = false;

// Problem 31:
// What is the value of '4' !== 4 //=> true
var stringFourStrictNotEqualsNumberFour = true;

// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// What’s the difference between == and ===?
//
// Your Answer Goes Here: They are mostly the same. == abstract equality comparison operator and === is strict equality comparison operator === is best practice.
//
//
// What’s the difference between != and !==? 
//
// Your Answer Goes Here: === and !== are the same as == and !=, but additionally do checks for the variable types.
//
// ****


// ****
// Tests
// ****

describe('Lesson 1 Homework', function () {

  describe('Data Type Problems', function () {
    describe('Problem 0: undefined variable myUndefined', function () {
      it('should be undefined', function () {
        assert.equal(typeof myUndefined, 'undefined');
      });
    });

    describe('Problem 1: null variable myNull', function () {
      it('should be null', function () {
        assert(myNull === null);
      });
    });

    describe('Problem 2: true variable myTrue', function () {
      it('should be true', function () {
        assert.equal(myTrue, true);
      });
    });

    describe('Problem 3: false variable myFalse', function () {
      it('should be false', function () {
        assert.equal(myFalse, false);
      });
    });

    describe('Problem 4: number variable myNumber', function () {
      it('should be a number', function () {
        assert.equal(typeof myNumber, 'number');
      });
    });

    describe('Problem 5: string variable myString', function () {
      it('should be a string', function () {
        assert.equal(typeof myString, 'string');
      });
    });
  });

  describe('Boolean Operators', function () {
    describe('Problem 6: true && true', function () {
      it('should be true', function () {
        assert.equal(trueAndTrue, true && true);
      });
    });

    describe('Problem 7: false && true', function () {
      it('should be false', function () {
        assert.equal(falseAndTrue, false && true);
      });
    });

    describe('Problem 8: true && false', function () {
      it('should be false', function () {
        assert.equal(trueAndFalse, true && false);
      });
    });

    describe('Problem 9: false && false', function () {
      it('should be false', function () {
        assert.equal(falseAndFalse, false && false);
      });
    });

    describe('Problem 10: true || true', function () {
      it('should be true', function () {
        assert.equal(trueOrTrue, true || true);
      });
    });

    describe('Problem 11: false || true', function () {
      it('should be true', function () {
        assert.equal(falseOrTrue, false || true);
      });
    });

    describe('Problem 12: true || false', function () {
      it('should be true', function () {
        assert.equal(trueOrFalse, true || false);
      });
    });

    describe('Problem 13: false || false', function () {
      it('should be false', function () {
        assert.equal(falseOrFalse, false || false);
      });
    });

    describe('Problem 14: !false', function () {
      it('should be true', function () {
        assert.equal(notFalse, !false);
      });
    });

    describe('Problem 15: !true', function () {
      it('should be false', function () {
        assert.equal(notTrue, !true);
      });
    });

    describe('Problem 16: !!true', function () {
      it('should be true', function () {
        assert.equal(notNotTrue, !!true);
      });
    });
  });

  describe('Truthiness', function () {

    describe('Problem 17: !!bob', function () {
      it('should be true', function () {
        assert.equal(notNotBob, !!bob);
      });
    });

    describe('Problem 18: !!emptyString', function () {
      it('should be false', function () {
        assert.equal(notNotEmptyString, !!emptyString);
      });
    });

    describe('Problem 19: !null', function () {
      it('should be true', function () {
        assert.equal(notNull, !null);
      });
    });

    describe('Problem 20: !!undefined', function () {
      it('should be false', function () {
        assert.equal(notNotUndefined, !!undefined);
      });
    });
  });

  describe('Comparison Operators', function () {
    describe('Problem 21: 4 === 4', function () {
      it('should be true', function () {
        assert.equal(fourEqualTofour, 4 === 4);
      });
    });

    describe('Problem 22: 4 !== 4', function () {
      it('should be false', function () {
        assert.equal(fourNotEqualTofour, 4 !== 4);
      });
    });

    describe('Problem 23: -3 === 10', function () {
      it('should be false', function () {
        assert.equal(negativeThreeEqualToTen, -3 === 10);
      });
    });

    describe('Problem 24: -3 < 10', function () {
      it('should be true', function () {
        assert.equal(negativeThreeLessThanTen, -3 < 10);
      });
    });

    describe('Problem 25: -3 <= 10', function () {
      it('should be true', function () {
        assert.equal(negativeThreeLessThanOrEqualToTen, -3 <= 10);
      });
    });

    describe('Problem 26: -3 > 10', function () {
      it('should be false', function () {
        assert.equal(negativeThreeGreaterThanTen, -3 > 10);
      });
    });

    describe('Problem 27: -3 >= 10', function () {
      it('should be false', function () {
        assert.equal(negativeThreeGreaterThanOrEqualToTen, -3 >= 10);
      });
    });

    describe('Problem 28: \'4\' == 4', function () {
      it('should be true', function () {
        assert.equal(stringFourEqualsNumberFour, '4' == 4);
      });
    });

    describe('Problem 29: \'4\' != 4', function () {
      it('should be false', function () {
        assert.equal(stringFourNotEqualsNumberFour, '4' != 4);
      });
    });

    describe('Problem 30: \'4\' === 4', function () {
      it('should be false', function () {
        assert.equal(stringFourStrictEqualsNumberFour, '4' === 4);
      });
    });

    describe('Problem 31: \'4\' !== 4', function () {
      it('should be true', function () {
        assert.equal(stringFourStrictNotEqualsNumberFour, '4' !== 4);
      });
    });
  });

});
// 