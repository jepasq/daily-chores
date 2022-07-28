// Do not use 'require' here (called from renderer

/** This is what you expect to be done each day
 *
 */
class ChoreTemplate {
    constructor() {
	this.chores = [];
	if (this.isDefined()) {
	    try {
		const jp = JSON.parse(localStorage.getItem('chore-template'));
		this.chores.push(jp);
	    }
	    catch {
		console.log("Can't parse JSON, resetting chores");
		this.chores = [];
	    }
	}

	// Need a reset if not an object (i.e. an array)
	const toc = typeof(this.chores);
	if (toc != "object") {
	    console.log("Resetting choresTemplate storage. Bad type '"
			+ toc + "'");
	    this.chores = [];
	}
    }
    isDefined() {
	console.log(JSON.parse(localStorage.getItem('chore-template')));
	return localStorage.getItem('chore-template')!=null;
    }

    debug() {
	console.log("Chored :");
	this.chores.forEach((c) => {
	    console.log(c);
	});
    }
    
    // May use exception here
    add(item) {
	console.log(this.chores + ' is a ' + typeof(this.chores));
	this.chores.push(item);
	this.save();
	console.log(localStorage.getItem('chore-template'));
	this.debug();
    }

    // Save actual members in local storage
    save() {
	localStorage.setItem('chore-template', JSON.stringify(this.chores));

    }

    // Warning : reset localStorage
    reset() {
	localStorage.removeItem('chore-template');
	this.chores = [];
    }
}

/** This is what you effectively did a given day
 *
 */
class Chore {
    constructor(date) {
	this.date = date;
    }
}

//module.exports = {Chore, ChoreTemplate};
