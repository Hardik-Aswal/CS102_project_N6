var collapsed = true;
function Sidebar() {
if (collapsed) {
document.getElementById("side_bar").style.width = "200px";
document.getElementById("side_bar").style.backgroundColor = "#000000";
this.collapsed = false;
} 
else {
document.getElementById("side_bar").style.width = "45px";
document.getElementById("side_bar").style.backgroundColor = "transparent";
this.collapsed = true;
}
}