np=document.getElementById("NP")
cin=document.getElementById("CIN")
function verif() {
    ch=np.value
    i=0
    test=true
    do {
        test=("A"<=ch[i].toUpperCase())||(ch[i].toUpperCase()<="Z")
        i=i+1
    } while ((test==true)||(i!=ch.length));  
    c=0
    for (let i = 0; i < ch.length; i++) {
        if (ch[i]==" "){
            c=c+1
        }
    }
    if ((test==false) || (c!=1)) {
         alert("verifier nom et prenom")
        } 
    
}
function verifier() {
    Ch=cin.value
    test=true
    if (Ch.length!=8) {
        alert("redonner le cin")
    }
    test=isNaN(Ch)
    if (test=false){
        alert("le cin doit etre un numero")
    }


}
cin.addEventListener("change",verifier)