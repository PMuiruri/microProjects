var assert = require('assert');
var textManipulator = require('../app.js');

describe('checkTheDataType', function(){
  it('should return number when given a number as an argument', function(){
    assert.equal('number', textManipulator.checkTheDataType(42));
  });

it('should return null when given a null value as an argument', function(){
  assert.equal('null', textManipulator.checkTheDataType(null));
});

it('should return error if not given an argument', function(){
  assert.equal('need an argument', textManipulator.checkTheDataType());
  });
});

describe('longestWord', function(){

  it ('should return "jumped" when given following text as parameter', function(){
    assert.equal('jumped', textManipulator.longestWord('The quick brown fox jumped over the lazy dog'));
  });

  it('should return a really long word', function(){
    assert.equal('othorhinolaryngology', textManipulator.longestWord('What if we try a super long word such as othorhinolaryngology'));
  });

  it('should return the longest number if given numbers in text as parameters', function(){
    assert.equal('923798', textManipulator.longestWord('30 2000 75 923798'));
  });

  it('should return null if the parameter is not in text', function(){
    assert.equal(null, textManipulator.longestWord(3000));
  });
});

describe('howManyVowels', function(){
  it('should return 3 when given a word with 3 vowels', function(){
    assert.equal(3, textManipulator.howManyVowels('dooog'));
  });

  it('should return 0 when given a word with 0 vowels', function(){
    assert.equal(0, textManipulator.howManyVowels('g'));
    assert.equal(0, textManipulator.howManyVowels('ljhdkfghs'));
  });

  it('should return 0 when given a word with 3 an empty string', function(){
    assert.equal(0, textManipulator.howManyVowels(''));
  });

  it('should return 0 when given any other data type', function(){
    assert.equal(0, textManipulator.howManyVowels(57));
    assert.equal(0, textManipulator.howManyVowels(null));
    assert.equal(0, textManipulator.howManyVowels(undefined));
  });
});
