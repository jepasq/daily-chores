const assert = require('assert');

const {ChoreTemplate} = require('../src/chore-template');

/// A fake LocalStorage item
var ls = {
    getItem: function (key) {
        if( key === 'id_token' ){ return /* a token object */; }
        return null;
    },
    setItem: function (key) { }
}

describe('ChoreTemplate Test', () => {
    it('can be instantiated', () => {
	let ct = new ChoreTemplate(ls);
        assert.notEqual(ct, null);
	
    });
});

