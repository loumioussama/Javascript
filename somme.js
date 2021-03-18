function home() {
    setTimeout(() => {
        let affiche=`<div class="alert alert-success" role="alert">
    <h2 class="alert-heading " style="text-align:center"> Somme de 2 entiers </h2>
    
    <hr>
    <p class="mb-0">Vous trouvez mon lien git: <a href="https://github.com/loumioussama/Javascript" class="alert-link">https://github.com/loumioussama/Javascript</a></p>
  </div>`;
  
        document.getElementById('alert').innerHTML=affiche;
       
            },2000);
}

function somme() {
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;
    let somme;
    somme=Number(input1)+Number(input2);
    alert("la somme de "+ input1 +" + "+ input2+ " = "+ somme);
}