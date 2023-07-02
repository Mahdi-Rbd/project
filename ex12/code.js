var B=document.getElementById("b1");
B.addEventListener("click",turnon);
var B2=document.getElementById("b2");
B2.addEventListener("click",turnoff);
var body=document.getElementById("body")
var z=document.getElementById("h1")
function turnon()
{
    body.style.backgroundColor="black"
    img.src="l2.png"
    z.innerHTML=("il fait nuit");
    z.style.color="white"
}
function turnoff()
{
    z.innerHTML=("il fait jour");
    body.style.backgroundColor="white"
    img.src="l1.png"
    z.style.color="black"
}
A+
B+