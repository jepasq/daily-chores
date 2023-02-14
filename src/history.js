const {formatDate} = require('./date');
const {Chore, ChoreTemplate} = require('./chore');

class ChoresHistory {
    constructor( ls = localStorage) {
	this.days = []
	this.localStorage = ls;
	
/*	let d = new Date();
	this.date = formatDate(d);
	this.key =  'chore' + this.date;
	console.log("Saving chores for today ("+this.date+")");
	*/
    }

    /// Update the history list with the current day(s)
    update() {
	let d = new Date();
	let ct = new ChoreTemplate(this.localStorage);
	ct.debug();
	this.days.push({
	    date: formatDate(d),
	    chores: ct.chores.length,
	    checked: 0,
	})
    }

    /// Returns the last saved days as an array
    getLastDays() {
	return this.days;
    }
}

module.exports = {ChoresHistory};
