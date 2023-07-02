var note1=document.getElementById("DC").value;
var div2=document.getElementById("div2");
var div1=document.getElementById("div1");
var note2=document.getElementById("DS").value;
function verif()
{
    ident=document.getElementById("ne1").value;
    if (ident.length!=8){
        alert("donner un numero d'eleve de 8 chiffres")
    }
    else if ((0>note1) || (note1>20)){
        alert("retaper la note de controle")}
    else if ((0>note2) || (note2>20)){
        alert("retaper la note de synthese")
    }
}        
        
        

function moyenne()
{
var moy=(Number(note1)+(Number(note2)*2))/3;
var moy=moy.toFixed(2);
var b1=document.getElementById("tr1")
var b2=document.getElementById("tr2")
var chx=""
if (b1.Checked){
    chx=b1.value
}
else if(b2.Checked){
    chx=b2.value
}
var s=document.getElementById("f").value;
var ch="Votre moyenne en "+s+" du "+chx+": "+moy
return ch
}
var B=document.getElementById("calc");
B.addEventListener("click",affichage);
function affichage(){
    ch=moyenne();
    div1.style.display = "none";
    div2.innerHTML=ch;
}