m=document.getElementById("attribut1")
s=document.getElementById("attribut2")
a=document.getElementById("attribut3")
r=document.getElementById("attribut4")
w=document.getElementById("attribut5")
function select() {
    
}
let back = document.getElementById ("first");
let front = document.getElementById ("info");
back.addEventListener("click", () => { 
    front.classList.remove("hidden");
});