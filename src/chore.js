if (typeof process !== 'undefined') {
    if (process.env.npm_command == "test") {
	const {formatDate} = require('./date');
    }
}

class Chore {
    /** This is what you effectively did a given day
     *
     * Calling the constructor create the date and key members from
     * today's date.
     *
     */
    constructor() {
	let d = new Date();
	this.date = formatDate(d);
	this.key =  'chore' + this.date;
    }

    /** Save the given json as a cookie
     *
     * This will add the json param content to localstorage using
     * this.key as date.
     *
     */
    save(json) {
	localStorage.setItem(this.key, JSON.stringify(json));
    }

    
    /** Load and parse today's saved chores
     *
     * This will load, parse as JSON then return the `this.key` content from
     * localStorage objet.
     *
     */
    loadToday() {
	console.log("Loading today's chores");
	var content = localStorage.getItem(this.key);
	return  JSON.parse(content)
    }
}

if (typeof module !== 'undefined') {
    module.exports = {Chore};
}
