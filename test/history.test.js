const assert = require('assert');

const d3  = import('d3');
// import * as d3 from "d3"; // Can't : we're not in a "module"

const {Chore, ChoreTemplate} = require('../src/chore-template');
const {formatDate} = require('../src/date');
const {ChoresHistory} = require('../src/history');

const storageMock = require('./storage');

/// A fake LocalStorage item
var ls = storageMock();


describe('ChoresHistory Test', () => {
    it('can be instantiated', () => {
	let hi = new ChoresHistory(ls);
        assert.notEqual(hi, null);
    });

    it('has an update function', () => {
	let hi = new ChoresHistory(ls);
	hi.update();
//        assert.notEqual(hi, null);
    });

    it('getLastDays returns an empty array by default', () => {
	let hi = new ChoresHistory(ls);
	const arr = hi.getLastDays();
	assert.equal(Array.isArray(arr), true);
	assert.equal(arr.length, 0);
    });

    it('update() adds a new getLastDays element function', () => {
	let hi = new ChoresHistory(ls);
	const l1 = hi.getLastDays().length;
	
	hi.update();
	const l2 = hi.getLastDays().length;
	assert.equal(l2, l1+1);
    });

    it('update() object has a date key', () => {
	let hi = new ChoresHistory(ls);
	hi.update();
	const l2 = hi.getLastDays()[0];
	assert.equal(l2.hasOwnProperty('date'), true);
    });

    it('update() date object is a formatted date', () => {
	let hi = new ChoresHistory(ls);
	hi.update();
	const d = hi.getLastDays()[0]['date'];
	assert.equal(typeof d, "string");
	assert.equal(d.length, 10);
    });
    
    it('update() object has chores and checked keys', () => {
	let hi = new ChoresHistory(ls);
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
	var l1 = ct.len();

	// Just testin'
	let ct2 = new ChoreTemplate(ls);
	ct2.load();
	assert.equal(ct2.len(), l1);
	assert.ok(ct2.len() > 0);
	
	let hi = new ChoresHistory(ls);
	hi.update();
	
	const lastDays = hi.getLastDays();
	assert.strictEqual(Array.isArray(lastDays),true,"lastDays is an array");
	
	assert.equal(lastDays[0].chores,  l1);
    });
    
});

