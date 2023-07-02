function calcul() {
    var d=new Date()
    var dn=document.getElementById("dn").value
    var y=d.getFullYear()
    var m=d.getMonth()
    var m1=Number(dn.substr(5,2))
    var y1=Number(dn.substr(0,4))
    switch (m1) {
        case m1=1:
            M="January"
            break;
        case m1=2:
            M="February"
            break;
        case m1=3:
            M="March"
            break;
        case m1=4:
            M="april" 
            break;
        case m1=5:
            M="may"
            break;
        case m1=6:
            M="june"
            break;
        case m1=7:
            M="july"
            break;
        case m1=8:
            M="august" 
            break;
        case m1=9:
            M="september" 
            break;
        case m1=10:
            M="october"
            break;
        case m1=11: 
            M="november"
            break;
        case m1=12:
            M="december"
            break;       
        default:
            break;
    }
    if(m<m1){
        h=y-y1-1
        f="votre anniversaire est bientôt"
    }
    else{
        h=y-y1
        f="votre anniversaire s'est passe"
    }
    var d=document.getElementById("D")
    d.innerHTML="vous etes né(e) le "+Number(dn.substr(8,2))+" "+M+" "+y1+" votre age est :"+h+" "+f
    

}
var B=document.getElementById("B")
B.addEventListener("click",calcul)