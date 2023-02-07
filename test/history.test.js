const assert = require('assert');

const {Chore, ChoreTemplate} = require('../src/chore');
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

    it('has an update function', () => {
	let hi = new History(ls);
	hi.update();
//        assert.notEqual(hi, null);
    });

    it('getLastDays returns an empty array by default', () => {
	let hi = new History(ls);
	const arr = hi.getLastDays();
	assert.equal(Array.isArray(arr), true);
	assert.equal(arr.length, 0);
    });

    it('update() adds a new getLastDays element function', () => {
	let hi = new History(ls);
	const l1 = hi.getLastDays().length;
	
	hi.update();
	const l2 = hi.getLastDays().length;
	assert.equal(l2, l1+1);
    });

    it('update() object has a date key', () => {
	let hi = new History(ls);
	hi.update();
	const l2 = hi.getLastDays()[0];
	assert.equal(l2.hasOwnProperty('date'), true);
    });

    it('update() date object is a formatted date', () => {
	let hi = new History(ls);
	hi.update();
	const d = hi.getLastDays()[0]['date'];
	assert.equal(typeof d, "string");
	assert.equal(d.length, 10);
    });
    
    it('update() object has chores and checked keys', () => {
	let hi = new History(ls);
	hi.update();
	const l2 = hi.getLastDays()[0];
	assert.equal(l2.hasOwnProperty('chores'),  true);
	assert.equal(l2.hasOwnProperty('checked'), true);
    });

    it('update() chores number is ChoreTemplate\'s length', () => {
	let ct = new ChoreTemplate(ls);
	ct.add({'id':0});
	ct.add({'id':1});
	ct.add({'id':2});
	ct.save();
	var l1 = ct.chores.length;

	let hi = new History(ls);
	hi.update();
	const l2 = hi.getLastDays()[0];
	assert.equal(l2.chores,  l1);
    });
    
});

