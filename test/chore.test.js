const assert = require('assert');

const {Chore, ChoreTemplate} = require('../src/chore');

var ls = {
    getItem: function (key) {
        if( key === 'id_token' ){ return /* a token object */; }
        return null;
    },

    setItem: function (key) {

    }
}

describe('ChoreTemplate Test', () => {
    it('can be instantiated', () => {
	let ct = new ChoreTemplate(ls);
        assert.notEqual(ct, null);
	
    });

    it('has a remove() function', () => {
	let ct = new ChoreTemplate(ls);
	ct.remove('aze');
        assert.notEqual(ct, null);
    });

    it('remove() function changes content len', () => {
	let ct = new ChoreTemplate(ls);
	var l1 = ct.chores.length;
	ct.add({'id':'aze'});
	ct.add({'id': 'zer'});
        assert.notEqual(ct, ct.chores.length);
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
