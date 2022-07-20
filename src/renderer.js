/*
require('popper.js');
require('bootstrap');
*/

document.getElementById('toggle-dark-mode').addEventListener('click', async()=>{
    const isDarkMode = await window.darkMode.toggle();
    document.getElementById('theme-source').innerHTML=isDarkMode?'Dark':'Light';
})

document.getElementById('reset-to-system').addEventListener('click', async()=>{
  await window.darkMode.system()
  document.getElementById('theme-source').innerHTML = 'System'
})

$('#btn-preferences').on ('click', (event) => {
    console.log("Show preferences dialog");
    $('#myModal').show()
});

$('#myModal .close').on ('click', (event) => {
    $('#myModal').hide()
});


