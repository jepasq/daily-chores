const assert = require('assert');

const {ChoreTemplate} = require('../src/chore-template');

describe('ChoreTemplate Test', () => {
    it('can be instantiated', () => {
	let ct = new ChoreTemplate();
        assert.notEqual(ct, null);
	
    });
});

