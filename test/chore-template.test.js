const assert = require('assert');

const {ChoreTemplate} = require('../src/chore-template');

const storageMock = require('./storage');

/// A fake LocalStorage item
var ls = storageMock();

describe('ChoreTemplate Test', () => {
    it('can be instantiated', () => {
	let ct = new ChoreTemplate(ls);
        assert.notEqual(ct, null);
    });

    it('has a add() function', () => {
	let ct = new ChoreTemplate(ls);
	let oldLen = ct.chores.length
	ct.add({name: "aze"}) // Must be able to add .id field
        assert.equal(ct.chores.length, oldLen + 1);
    });

    it('has a remove() function', () => {
	let ct = new ChoreTemplate(ls);
	ct.add({name: "aze"}) // Must be able to add .id field
	let oldLen = ct.chores.length
	ct.remove({name: "aze"});
        assert.equal(ct.chores.length, oldLen - 1);
    });

    it('has a removeByName() function', () => {
	let ct = new ChoreTemplate(ls);
	ct.add({name: "aze"}) // Must be able to add .id field
	let oldLen = ct.chores.length
	ct.removeByName('aze');
        assert.equal(ct.chores.length, oldLen - 1);
    });
    
    it('remove() function changes content len', () => {
	let ct = new ChoreTemplate(ls);
	ct.add({'id':0});
	ct.add({'id':1});
	ct.add({'id':2});
	var l1 = ct.chores.length;
	ct.remove({'id': 1});
        assert.notEqual(l1, ct.chores.length);
    });

    it('has a load() function', () => {
	let ct = new ChoreTemplate(ls);
	assert.equal(typeof ct.load, "function");
    });

    it('load() function recover saved items', () => {
	let ct = new ChoreTemplate(ls);
	ct.add({'id':'01', 'name':'aze'});
	ct.add({'id':'02', 'name':'zer'});
	ct.save();
	
	let ct2 = new ChoreTemplate(ls);
	ct2.load();

	assert.equal(2, ct2.len());
    });
});

