const expect = require('expect.js');

describe('条件分岐', () => {
    it('if statement', (next) => {
        var even = (n) => {
            console.log(n % 2);
            if ((n % 2) === 0) {
                return true;
            } else {
                return false;
            }
        };
        expect(
            even(10)
        ).to.eql(
            true
        );
        next();
    });
});
