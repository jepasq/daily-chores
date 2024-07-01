const assert = require('assert');

const {Chore} = require('../src/chore');
const {ChoreTemplate} = require('../src/chore-template');

var ls = {
    getItem: function (key) {
        if( key === 'id_token' ){ return /* a token object */; }
        return null;
    },

    setItem: function (key) { }
}
