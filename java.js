m=document.getElementById("attribut1")
s=document.getElementById("attribut2")
a=document.getElementById("attribut3")
r=document.getElementById("attribut4")
w=document.getElementById("attribut5")
function select() {
    
}
let first = document.getElementById("first");
let info = document.getElementById("info");

first.addEventListener("click", () => {
  info.classList.remove("hidden");
  first.classList.add("hidden");
});