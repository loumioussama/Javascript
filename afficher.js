function home() {
    setTimeout(() => {
        let affiche=`<div class="alert alert-success" role="alert">
    <h2 class="alert-heading " style="text-align:center"> Récupérer une valeur d'un input </h2>
    
    <hr>
    <p class="mb-0">Vous trouvez mon lien git: <a href="https://github.com/loumioussama/Javascript" class="alert-link">https://github.com/loumioussama/Javascript</a></p>
  </div>`;
  
        document.getElementById('alert').innerHTML=affiche;
       
            },2000);
}

function affichage1() {
    let input = document.getElementById("input1").value;

    alert("hello "+input);
}
function affichage2() {
    let input = document.getElementById("input1").value;

    console.log(input);
}