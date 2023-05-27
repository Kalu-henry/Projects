function collapseSideBar(){
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("body").style.paddingLeft = "130px";
}

function exitSidebar(){
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("body").style.paddingLeft = "0px";
}