t=new Array()
t1=new Array()
t2=document.getElementById("t2")
t3=document.getElementById("t3")
r=document.getElementById("r")
np=document.getElementById("np")
function Remplir() {
    var d=new Date()
    var dn=document.getElementById("dn").value
    var y=d.getFullYear()
    var m=d.getMonth()
    var m1=Number(dn.substr(5,2))
    var y1=Number(dn.substr(0,4))
    if(m<m1){
        h=y-y1-1
    }
    else{
        h=y-y1
    }
    t.push(np.value)
    t1.push(h)
    affiche()
}

function affiche(){
    t2.innerHTML="<td>Nom & prenom</td>"
    t3.innerHTML="<td>Age</td>"
    for (i = 0; i < t.length; i++) {
        t2.innerHTML+="<td>"+t[i]+"</td>"
        t3.innerHTML+="<td>"+t1[i]+"</td>"
    }
}
function tri(){
    test=false
    if (test==false) {
        test=true
        for (let i = 0; i < t.length; i++) {
            if (t1[i]<t1[i+1]) {
                aux=t[i]
                t[i]=t[i+1]
                t[i+1]=aux
                aux=t1[i]
                t1[i]=t1[i+1]
                t1[i+1]=aux
                test=false
            }
        }
        
    }
    affiche()
}
var A=document.getElementById("a")
A.addEventListener("click",Remplir)
var B=document.getElementById("b")
B.addEventListener("click",tri)