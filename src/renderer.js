//const { Chore, ChoreTemplate} = require('./chore');
/*
require('popper.js');
require('bootstrap');
*/

function show_dialog() {
    console.log("Show preferences dialog");
    $('#myModal').show({backdrop: 'static'})
    //    $('body').append($("<div class='modal-backdrop fade hide'></div>")
    
}

$('#toggle-dark-mode').on ('click', (event) => {
    const isDarkMode = window.darkMode.toggle();
    document.getElementById('theme-source').innerHTML=isDarkMode?'Dark':'Light';
});

$('#reset-to-system').on ('click', (event) => {
    console.log("Reset to system clicked");
    window.darkMode.system()
    document.getElementById('theme-source').innerHTML = 'System'
});


$('#btn-preferences').on ('click', (event) => {
    show_dialog();
});

$("#undefined-chore-template").on ('click', (event) => {
    show_dialog();
});

$('#myModal .close').on ('click', (event) => {
    $('#myModal').hide()
});

/** Add a new chore to the chorelist
 *
 * Informations are directly taken from the preferences dialog inputs.
 *
 */
$('#addChore').on ('click', (event) => {
    const name = $('#newChoreName').val();
    const desc = $('#newChoreDescription').val();
    alert(name + ' ' + desc);
});

$(document).ready(function(){
    let today = new Date().toLocaleDateString();
    let c = new Chore(today);
    let ct = new ChoreTemplate();
    console.log(today);
    
    $("#undefined-chore-template").show();
});
