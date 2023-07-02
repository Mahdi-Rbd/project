
function moyenne()
{
var div=document.getElementById("d");
var note1=document.getElementById("DC").value;
if ((0>note1) || (note1>20)){
alert("retaper la note de controle")}
else{
var note2=document.getElementById("DS").value;
if ((0>note2) || (note2>20)){
alert("retaper la note de synthese")}
else{
var moy=(Number(note1)+(Number(note2)*2))/3;
var moy=moy.toFixed(2);
if ((moy>=10)&&(moy<=11)){
div.innerHTML=("votre moyenne est passable " + moy);}
if ((moy>=12)&&(moy<=13)){
div.innerHTML=("votre moyenne est assez bien " + moy);}
if ((moy>=14)&&(moy<=15)){
div.innerHTML=("votre moyenne est bien " + moy);}
if ((moy>=15)&&(moy<=20)){
div.innerHTML=("votre moyenne est tres bien " + moy);
}
if((moy<=10)){
    div.innerHTML=("votre moyenne est Faible " + moy);
}
if((moy<10)){
   document.getElementById("d").style.color="blue"}
if((moy>=10)){
    document.getElementById("d").style.color="red"}
}}}
var B=document.getElementById("calc");
B.addEventListener("click",moyenne);
