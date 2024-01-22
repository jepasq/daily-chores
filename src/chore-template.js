class ChoreTemplate {
    
    constructor( ls = localStorage) {
	this.nextchoreid = 0;
	this.localStorage = ls;
    }
}

if (typeof module !== 'undefined') {
    module.exports = {ChoreTemplate};
}
