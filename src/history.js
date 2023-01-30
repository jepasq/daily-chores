const {formatDate} = require('./date');

class History {
    constructor() {
	this.days = []
/*	let d = new Date();
	this.date = formatDate(d);
	this.key =  'chore' + this.date;
	console.log("Saving chores for today ("+this.date+")");
	*/
    }

    /// Update the history list with the current day(s)
    update() {
	let d = new Date();
	this.days.push({
	    date: formatDate(d),
	    chores: 0,
	    checked: 0,
	})
    }

    /// Returns the last saved days as an array
    getLastDays() {
	return this.days;
    }
}

module.exports = {History};
