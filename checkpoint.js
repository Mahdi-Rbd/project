var d=document.getElementById("div")
var nom=document.getElementById("np")
var B=document.getElementById("btn")
var R=document.getElementById("res")
var ins=document.getElementById("ins")  

B.addEventListener("click",thanks)
function thanks() {
    if (ins.value==0) {
        ins = "mariem neit addi"
    }
    else if (ins.value==1) {
        ins = "salma sghair"
    } 
    else if(ins.value==2) {
        ins = "ahmed mazigh"
    } 
    else if(ins.value==3){
        ins = "mahdi raboudi"
    }
    else if (ins.value==4){
        ins = "wissem zitouni"
    }
    d.innerHTML="hello "+nom.value+" you have reached "+ins+" by your comment. thank you for your feedback!!"
}
R.addEventListener("click",reset)
function reset() {
    d.innerHTML=""
}
