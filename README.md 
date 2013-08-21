# Mocha Vs NodeUnit

So the main reason why I made this tests is that Mocha doesn't support expectation for assertions count.

### Mocha
Let say we have asynchronous test code like:

```JavaScript
describe('Test', function() {
    it('should fail', function(done) {

        setTimeout(function(){
            (true).should.be.equal(true);

        }, 300);

        setTimeout(function(){
            (true).should.be.equal(false);

        }, 100);

        done();
    });
});
```

it will never fail, simply because Mocha doesn't support assertions count expectation.

### NodeUnit
In NodeUnit case that test will look like:
```JavaScript
exports.Test = {
    "should fail": function (test) {
        test.expect(2);

        setTimeout(function(){
            test.equal(true, true);

        }, 300);

        setTimeout(function(){
            test.equal(true, false);
        }, 100);

        test.done();
    }
}
```

The test will fail because NodeUnit supports ```test.expect()``` assertion, which allow to set certain amount of assertion to be run.
```bash
nodeunit.test.js
✖ Test - should fail

Error: Expected 2 assertions, 0 ran
```

## Conclusion
So the conclusion is to prevent developers and some programs mistakes it's better to use NodeUnit with ```test.expect()``` assertion at the begin of each test.

## Runnig the tests
To run both Mocha and NodeUnit  tests and see how they work use ```./run.sh``` or ```npm start```

