let alire=document.getElementById("alire");
let lu=document.getElementById("lu");

document.getElementById("ajouter").addEventListener("click",function(){
    
    let titre = document.getElementById("titre").value;
  let lien = document.getElementById("lien").value;
  if(lien=="" || titre==""){
      alert("les deux champ doivent etre rempli");
  }else{
      document.getElementById('titre1').style.visibility="visible";
      document.getElementById('pretext').style.visibility="hidden";
  alire.insertAdjacentHTML("afterbegin",`<li>${titre}<i id=${titre} onclick=marquerlu(this.id) class="fa fa fa-check
  "></i><i id=${titre} onclick=supprimer(this.id) class="fa fa-trash"></i><a href=${lien} traget="black"><i class="fa fa-shopping-cart"></i></a></li>`);
  document.getElementById('lien').value="";
  document.getElementById('titre').value="";
  }
})

function supprimer(id){
    document.getElementById(id).parentElement.outerHTML=""
    if(alire.childElementCount==0 && lu.childElementCount==0){
        document.getElementById('pretext').style.visibility="visible";
        document.getElementById('titre1').style.visibility="hidden";
        document.getElementById('titre2').style.visibility="hidden";
    }
}

function marquerlu(id){
    
    supprimer(id);
    document.getElementById('titre2').style.visibility="visible";
    lu.insertAdjacentHTML("afterbegin",`<li>${id}<i onclick=marquerlu(this.id) class="fa fa fa-check
  "></i><i id=${id} onclick=supprimer(this.id) class="fa fa-trash"></i><a href=${id} traget="black"><i class="fa fa-shopping-cart"></i></a></li>`);
  if(alire.childElementCount==0){
    document.getElementById('titre1').style.visibility="hidden";
}
}