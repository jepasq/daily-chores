// Do not use 'require' here (called from renderer)

/** This is what you expect to be done each day
 *
 */
class ChoreTemplate {
    constructor( ls = localStorage) {
	this.chores = [];
	this.nextchoreid = 0;
	this.localStorage = ls;
	if (this.isDefined()) {
	    try {
		const jp = JSON.parse(this.localStorage.getItem('chore-template'));
		this.chores = jp;
		const nc = this.localStorage.getItem('nextchore-id');
		if (nc === null) {
		    console.log("nextchore-id is NULL. Not overriding.");
		}
		else {
		    this.nextchoreid = parseInt(nc, 10);
		}
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
	return this.localStorage.getItem('chore-template')!=null;
    }

    debug() {
	console.log("Chored :");
	this.chores.forEach((c) => {
	    console.log(c);
	});
    }
    
    // May use exception here
    add(item) {
	item.id=this.nextchoreid;
	this.chores.push(item);
	this.nextchoreid += 1;

	this.save();
	//	this.debug();
    }

    // Save actual members in local storage
    save() {
	this.localStorage.setItem('chore-template',
				  JSON.stringify(this.chores));
	this.localStorage.setItem('nextchore-id', this.nextchoreid);
    }

    // Warning : reset localStorage
    reset() {
	console.log("Local storage has been reset");
	localStorage.removeItem('chore-template');
	this.chores = [];
    }

    /// Remove the given element from local storage
    remove(key) {
	// Thanks to https://stackoverflow.com/a/5767357
	const index = this.chores.indexOf(key);
	if (index == -1){

	    // Maybe the parameter is an obejct so we'll check text cmp
	    var i=0;
	    while (i < this.chores.length) {
		var totxt="'"+JSON.stringify(this.chores[i])+"'";
		if (JSON.stringify(this.chores[i]) == JSON.stringify(key)){
		    this.chores.splice(i, 1);
		} else {
		    console.log("> "+ totxt + " != '" + JSON.stringify(key)
				+"'");
		}
		i++;
	    }
	}
	this.save();
    }

    /// Remove items containing given name
    removeFromName(name) {
	// Thanks to https://stackoverflow.com/a/5767357
	var i=0;
	while (i < this.chores.length) {
	    if (this.chores[i].name == name) {
		this.chores.splice(i, 1);
	    } else {
		++i;
	    }
	}
	this.save();
    }

}

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('-');
}
/** This is what you effectively did a given day
 *
 */
class Chore {
    constructor() {
	let d = new Date();
	this.date = formatDate(d);
	this.key =  'chore' + this.date;
	console.log("Saving chores for today ("+this.date+")");
    }

    save(json) {
	localStorage.setItem(this.key, JSON.stringify(json));
    }

    loadToday() {
	console.log("Loading today's chores");
	var content = localStorage.getItem(this.key);
//	console.log(content);
	return  JSON.parse(content)
    }
    
}

module.exports = {Chore, ChoreTemplate};
