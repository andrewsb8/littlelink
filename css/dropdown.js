// to do:
// - keep drop down open if item within drop down is clicked
// - collapse open drop down when another drop down is clicked
// - have menu items shift when drop down is open

function PRlist() {
  var click = document.getElementById("PR");
  if(click.style.display === "none") {
    click.style.display = "block";
  } else {
    click.style.display = "none";
  }
}

function PLTlist() {
  var click = document.getElementById("PLT");
  if(click.style.display === "none") {
    click.style.display = "block";
  } else {
    click.style.display = "none";
  }
}

function Sociallist() {
  var click = document.getElementById("Social");
  if(click.style.display === "none") {
    click.style.display = "block";
  } else {
    click.style.display = "none";
  }
}

//close dropdowns if click occurs outside the dropdown buttons
//but this currently includes clicking something in the drop down menu....
window.onclick = function(event){
 if ( document.getElementsByClassName('dropbtn')[0].contains(event.target) ||
      document.getElementsByClassName('dropbtn-PLT')[0].contains(event.target) ||
      document.getElementsByClassName('dropbtn')[1].contains(event.target) ){
    //do nothing, this is probably ultra unoptimized but **shrug**.
    //just using an if with !document.getElem.... did not work
  } else {
    // close all dropdowns if click outside a dropdown menu
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      document.getElementsByClassName("dropdown-content")[i].style.display = "none";
    }
  }
};
