class ChoreTemplate {
    
    constructor( ls = localStorage) {
	this.nextchoreid = 0;
	this.localStorage = ls;
	this.chores = []
    }

    debug() {
	console.log("Chored :");
	this.chores.forEach((c) => {
	    console.log(c);
	});
    }
    
    add(item) {
	item.id = this.nextchoreid;
	console.log("typeof this.chores = "+ typeof(this.chores));
	this.chores.push(item);
	this.nextchoreid += 1;

//	this.save();
	this.debug();
    }

    /// Remove the given element from local storage
    removeByName(key) {
	// Thanks to https://stackoverflow.com/a/5767357
	    // Maybe the parameter is an obejct so we'll check text cmp
	var i=0;
	while (i < this.chores.length) {
	    var totxt="'"+JSON.stringify(this.chores[i])+"'";
	    if (this.chores[i].name == key){
		this.chores.splice(i, 1);
	    } else {
		console.log("> "+ totxt + " != '" + JSON.stringify(key)
			    +"'");
	    }
	    i++;
	}
    }

    remove(item) {
	this.removeByName(item.name);
    }

    // Save actual members in local storage
    save() {
	this.localStorage.setItem('chore-template',
				  JSON.stringify(this.chores));
	this.localStorage.setItem('nextchore-id', this.nextchoreid);
    }
    
    load() {
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

    len() {
	if (this.chores == null) {
	    return 0;
	}
	    
	return this.chores.length
    }
}

if (typeof module !== 'undefined') {
    module.exports = {ChoreTemplate};
}
