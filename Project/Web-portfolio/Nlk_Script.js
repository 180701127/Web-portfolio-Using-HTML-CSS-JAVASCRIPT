// JavaScript source code

var tablinks = document.getElementsByClassName("tab-links");
var tablecontents = document.getElementsByClassName("table-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tablecontent of tablecontents) {
        tablecontent.classList.remove("active-table");
    }
    event.currentTarget.classList.add("active-link"); 
    document.getElementById(tabname).classList.add("active-table"); 
}

