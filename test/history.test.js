const assert = require('assert');

const {History} = require('../src/history');

var ls = {
    getItem: function (key) {
        if( key === 'id_token' ){ return /* a token object */; }
        return null;
    },

    setItem: function (key) { }
}

describe('History Test', () => {
    it('can be instantiated', () => {
	let hi = new History(ls);
        assert.notEqual(hi, null);
	
    });
});

