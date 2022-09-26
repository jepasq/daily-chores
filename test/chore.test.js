const chore = require('../src/chore'); ///{Chore, ChoreTemplate}
const assert = require('assert');

describe('ChoreTemplate Test', () => {
    it('can be instantiated', () => {
	console.log(chore);

	let ct = new chore.ChoreTemplate();
        assert.not_equal(ct, null);
	
    });

});

describe('Simple Math Test', () => {
    it('should return 2', () => {
        assert.equal(1 + 1, 2);
    });
    it('should return 9', () => {
        assert.equal(3 * 3, 9);
    });
});
