const {Chore, ChoreTemplate} = require('../src/chore');
const assert = require('assert');

class LocalStorage {

}

var localStorage = new LocalStorage();

global.window = {};
global.window = { localStorage: new LocalStorage() }

describe('ChoreTemplate Test', () => {
    it('can be instantiated', () => {
	let ct = new ChoreTemplate();
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
