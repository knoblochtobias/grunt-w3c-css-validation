'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.w3c_css_validation = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test, file) {
    test.expect(4);    
    var actual = JSON.parse(grunt.file.read('tmp/w3c_css_validation.json'));
    var expected = JSON.parse(grunt.file.read('test/expected/w3c_css_validation.test.json'));

    test.equal(Object.keys(actual).length, Object.keys(expected).length, 'same length');

    for (var filename in actual) {
      test.deepEqual(actual[filename], expected[filename], 'exprected same result ' + filename);
    }
    
    test.done();
  },
};
