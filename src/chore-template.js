
"use strict";

/** The template (i.e. what to be done) for a given day.
 *
 * @class
 */
class ChoreTemplate {

    /** ChoreTemplate constructor.
     *
     * This class is used to list things that must be done for a specific day.
     *
     * @member Int          nextchoreid  The next chore unique id.
     * @member LocalStorage localStorage A storage or a mock used for unit
     *                      tests.
     * @member _chores      Array        The internal chores array you
     *                      can get using the chores getter.
     *
     */
    constructor( ls = localStorage) {
	this.nextchoreid = 0;
	this.localStorage = ls;
	this._chores = []
    }

    /** The getter used to retrieve the internal array
     *
     *  @return The internal chores array.
     *
     */
    get chores() {
	return this._chores;
    }

    /// Simply print the arry's content in console
    debug() {
	console.log("Debugging Chore :");
	this._chores.forEach((c) => {
	    console.log(c);
	});
    }

    /** Add the given item to the chores template array
     *
     *  @param item {Object} The item ti be pushed to the internal array.
     *
     */
    add(item) {
	item.id = this.nextchoreid;
	// console.log("typeof this._chores = "+ typeof(this._chores));
	this._chores.push(item);
	this.nextchoreid += 1;

	//this.save();
	//this.debug();
    }

    /** Remove the given element from local storage
     *
     *  @param item {String} The name of the stored object to be removed.
     *
     */
    removeByName(key) {
	// Thanks to https://stackoverflow.com/a/5767357
	    // Maybe the parameter is an obejct so we'll check text cmp
	var i=0;
	while (i < this._chores.length) {
	    var totxt="'"+JSON.stringify(this._chores[i])+"'";
	    if (this._chores[i].name == key){
		this._chores.splice(i, 1);
	    } else {
		console.log("> "+ totxt + " != '" + JSON.stringify(key)  + "'");
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
				  JSON.stringify(this._chores));
	this.localStorage.setItem('nextchore-id', this.nextchoreid);
    }
    
    load() {
	try {
	    const jp = JSON.parse(this.localStorage.getItem('chore-template'));
	    this._chores = jp;
	    
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
	    this._chores = [];
	}

    }

    len() {
	if (this._chores == null) {
	    return 0;
	}
	    
	return this._chores.length
    }
}

if (typeof module !== 'undefined') {
    module.exports = {ChoreTemplate};
}
