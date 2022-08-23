//const { Chore, ChoreTemplate} = require('./chore');
/*
require('popper.js');
require('bootstrap');
*/

function show_dialog() {
    $('#myModal').show({backdrop: 'static'})
    //    $('body').append($("<div class='modal-backdrop fade hide'></div>")
    let ct = new ChoreTemplate();
    chores_to_html(ct);

    $('#nextchore').html(ct.nextchoreid);
}

/** Clear and feed HTML using in-memory ChoreTemplate
 *
 * \param ct The ChoreTemplate object.
 *
 */
function chores_to_html(ct) {
    
    var ctl = $('#chore-template-list');
    console.log(ctl);
    ctl.empty();
    ct.chores.forEach((item) => {
	console.log(item);
	ctl.append('<li  class="list-group-item">'+item.name+'</li>');
    });
}

/// Set the initial state of the homepage
function home_load() {
    let today = new Date().toLocaleDateString();
    $('#today-date').html(today);

    const ct = new ChoreTemplate();
    if (!ct.isDefined()) {
	$("#undefined-chore-template").show();
    } else {
	$("#undefined-chore-template").hide();
    }

    let str='';
    // Chore list
    ct.chores.forEach((chore) => {
	str=str+"<tr>"+
	    "<td><input  class='checkb'"+
	    "type='checkbox' id='"+chore.id+"' name='scales'></td>"+
	    "<td><label for='scales'>"+chore.name+"</label></td>"+
	    "<td>"+chore.desc+"</td>"+
	    "</tr>";
    });
    $('#chore-list').html(str);
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
    home_load();
});

/** Add a new chore to the chorelist
 *
 * Informations are directly taken from the preferences dialog inputs.
 *
 */
$('#addChore').on ('click', (event) => {
    const name = $('#newChoreName').val();
    const desc = $('#newChoreDescription').val();
    // Thanks to https://stackoverflow.com/a/23053203
    const type = $('input[name="chore-type"]:checked').val();
    if (!name) {
	alert("Chore's name is mandatory");
    } else {
	let ct = new ChoreTemplate();
	try {
	    ct.add({name, desc, type});
	} finally {
	    $('#newChoreName').val("");
	    $('#newChoreDescription').val("");
	    chores_to_html(ct);
	}
    }

});

/** Reset stored choresTemplate
 *
 */
$('#reset-chore-template').on ('click', (event) => {
    let ct = new ChoreTemplate();
    ct.reset();

    let ct2 = new ChoreTemplate();
    ct2.debug();

    chores_to_html(ct);
});
  
$(document).ready(function(){
    home_load();


    $(".checkb").on ('change', () => {
	json=[]
	$(".checkb").each((e) => {
	    b = $("#"+e).is(':checked'); // Get the checked status
	    json.push([e, b]);           // Checkox's id, checked status
	});
	console.log(JSON.stringify(json));
    });
});

