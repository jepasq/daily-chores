// Do not use 'require' here (called from renderer

/** This is what you expect to be done each day
 *
 */
class ChoreTemplate {
    constructor() {
	this.chores = [];
	var ct = localStorage.getItem('chore-template');
	console.log("chore-template is " + ct);
	if (ct === null) {
	    alert("aze");
	}	    
    }
    isDefined() {
	return localStorage.getItem('chore-template')!=null;
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
