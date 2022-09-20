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
	var id="chore-template-id-"+item.id;
	ctl.append('<li id="'+ id +'"class="list-group-item">'+
		   item.name+'</li>');
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
	str=str+
	    "<div class='chore' onclick='chore_onClick("+chore.id+")'>"+
	    "<div class='chore-name'>"+
	      "<input  class='checkb'"+
	      "type='checkbox' id='"+chore.id+"' name='scales'>"+
	      "<label for='scales'>"+chore.name+"</label></div>"+
	      "<div class='chore-desc'>"+chore.desc+"</div>"+
	    "</div>";
    });
    $('#chore-list').html(str);

    // Get today chores status
    const ch = new Chore();
    var todayChores = ch.loadToday();
    if (todayChores == null) {
	console.log("Today's chore are NULL asuming first launch for this day");
    } else {
	todayChores.forEach((cht) => {
	    var id=cht[0];
	    $('#'+id).prop("checked", cht[1]);
	});
    }
    
}

/** Show then show a notification alert indicating we saved current state.
 *
 */
function save_notification() {
    $('#save-notif').removeClass("d-none").show().delay(600).fadeOut(200);
}

/** Save current chores state and show notification
 *
 */
function save() {
    json=[]
    $(".checkb").each((e) => {
	b = $("#"+e).is(':checked'); // Get the checked status
	json.push([e, b]);           // Checkox's id, checked status
    });
    let ch = new Chore();
    ch.save(json);
    save_notification();
}

/** The chore div has been clicked
  *
  * \param choreid The corresponding chore id as integer.
  *
  */
function chore_onClick(choreid) {
    console.log("Chore div clicked! Id=" + choreid);
    const cid = $("#"+choreid).each(function () {
	this.checked = !this.checked;
    });
    save();
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
    /// The click event of a preferences Dialog's list item
    home_load();
    $(".checkb").on('change', () => {
	save();
    });

    // Since the element are dynamically created, the click event is on
    // the parent container
    $('#chore-template-list').on('click', '.list-group-item', (event) => {
	console.log("=> Click event : " + JSON.stringify(event));
	console.log("=> Click this : " + JSON.stringify(this));
//	this.css("background-color", "#EEE");
	console.log("=> Click event : " +$(this).get(0).text());
    });
});

