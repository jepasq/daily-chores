/* Needed for unit tests only */

if (process.env.npm_command == "test") {
    // Here we use var because of its visibility (vs const)
    var {formatDate} = require('./date');
    var {Chore, ChoreTemplate} = require('./chore');
}


/** Handles an History array of chores value used to draw plots
 *
 * Note: renamed from History to avoid a name colision with browser's Hisrtory
 *   prototype (see https://developer.mozilla.org/en-US/docs/Web/API/History).
 *
 */
class ChoresHistory {
    /** The ChoreszHistory's constructor
     *
     * @param ls {LocalStorage} A possible localStorage replacement for
     *           unit tests purpose.
     *
     */
    constructor( ls = localStorage) {
	/** @member {Array} The list of JSON objects to be stored. */
	this.days = [];
	this.localStorage = ls;
	
	let d = new Date();
	this.date = formatDate(d);
	this.key =  'chore' + this.date;
	console.log("Setting ChoresHistory's key to '" + this.key + "'");

    }

    /** Update the history list with the current day(s)
     *
     * The the list will 
     *
     */
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

