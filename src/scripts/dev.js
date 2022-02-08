
// CONTEXT MENU
var contentmenu = document.querySelector('.weiLionContextMenu');

function showMenu(x, y){
    contentmenu.style.left = x + 'px';
    contentmenu.style.top = y + 'px';
    contentmenu.classList.add('menu-show');
    $('#weilion_background__audio').get(0).load();
    $('#weilion_background__audio').get(0).play();
}

function hideMenu(){
    contentmenu.classList.remove('menu-show');
}

function onContextMenu(e){
    e.preventDefault();
    showMenu(e.pageX, e.pageY);
    document.addEventListener('click', onMouseDown, false);
    // document.getElementById('text-replace').addEventListener('click', onMouseDown, false);
}

function onMouseDown(e){
    hideMenu();
    document.removeEventListener('click', onMouseDown);
    // document.getElementById('text-replace').removeEventListener('click', onMouseDown);
}

document.addEventListener('contextmenu', onContextMenu, false);
// document.getElementById('weiLionContextMenu').addEventListener('contextmenu', onContextMenu, false);



// Disable HOT KEY
var isCtrl = false;
document.onkeyup=function(e){
    if(e.keyCode == 17) isCtrl=false;
}
document.onkeydown=function(e){
    if(e.keyCode == 17) isCtrl=true;
    if((e.keyCode == 83 && isCtrl == true) || (e.keyCode == 73 && isCtrl == true) || e.keyCode == 123) {
        return false;
    }
}
document.addEventListener("keydown", function(e) {
	if (((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) && e.keyCode == 83) || ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) && e.keyCode == 73) || e.keyCode == 123) {
	  e.preventDefault();
	}
  }, false);
window.addEventListener("keypress", function(event) {
	if (!(event.which == 115 && event.ctrlKey) && !(event.which == 19)) return true
	event.preventDefault()
	return false
})


function __nEn(c) {
    return btoa(encodeURIComponent(c).replace(/%([0-9A-F]{2})/g, function toSolidBytes(a, b) {
        return String.fromCharCode('0x' + b)
    }))
}

function __nDe(a) {
    return decodeURIComponent(atob(a).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
}

// Disable zoom website 