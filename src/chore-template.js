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
}

if (typeof module !== 'undefined') {
    module.exports = {ChoreTemplate};
}
