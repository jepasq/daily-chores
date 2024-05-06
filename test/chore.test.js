const assert = require('assert');

const {Chore} = require('../src/chore');
const {ChoreTemplate} = require('../src/chore-template');

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

    it('has a remove() function', () => {
	let ct = new ChoreTemplate(ls);
	ct.remove('aze');
        assert.notEqual(ct, null);
    });

    it('remove() function changes content len', () => {
	let ct = new ChoreTemplate(ls);
	ct.add({'id':0});
	ct.add({'id':1});
	ct.add({'id':2});
	var l1 = ct.getChores.length;
	ct.remove({'id': 1});
        assert.notEqual(l1, ct.getChores.length);
    });

    it('removeFromName() function changes content len', () => {
	let ct = new ChoreTemplate(ls);
	var l1 = ct.getChores.length;
	ct.add({'id':'01', 'name':'aze'});
	ct.add({'id':'02', 'name':'zer'});
	ct.removeFromName('aze');
        assert.notEqual(l1, ct.getChores.length);
    });

    it('has a load() function', () => {
	let ct = new ChoreTemplate(ls);
	ct.load();

	assert.notEqual(0, ct.chores.length);
    });

    it('load() function recover saved items', () => {
	let ct = new ChoreTemplate(ls);
	ct.add({'id':'01', 'name':'aze'});
	ct.add({'id':'02', 'name':'zer'});
	
	let ct2 = new ChoreTemplate(ls);
	ct2.load();

	assert.notEqual(2, ct2.getChores.length);
    });
});
