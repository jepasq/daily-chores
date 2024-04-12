if (typeof process !== 'undefined') {
    if (process.env.npm_command == "test") {
	const {formatDate} = require('./date');
    }
}

/** This is what you effectively did a given day
 *
 */
class Chore {
    constructor() {
	let d = new Date();
	this.date = formatDate(d);
	this.key =  'chore' + this.date;
    }
    
    save(json) {
	localStorage.setItem(this.key, JSON.stringify(json));
    }
    
    loadToday() {
	console.log("Loading today's chores");
	var content = localStorage.getItem(this.key);
	return  JSON.parse(content)
    }
}

if (typeof module !== 'undefined') {
    module.exports = {Chore};
}
