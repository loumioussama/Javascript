function home() {
    setTimeout(() => {
        let affiche=`<div class="alert alert-success" role="alert">
    <h2 class="alert-heading " style="text-align:center"> Introduction </h2>
    <p>
    <strong>JavaScript :souvent abrégé en JS , est un langage de programmation qui est conforme 
        à la ECMAScript spécification. JavaScript est de haut niveau , souvent compilé juste à 
        temps. Il a une syntaxe frisée support , typage dynamique , 
        basé sur un prototype orienté objet , et les fonctions de première classe.</strong>

</p>
<p>
    <strong>
        JavaScript permet de créer des pages Web interactives et constitue une partie essentielle
         des applications Web . La grande majorité des sites Web l' utilisent pour le comportement
          des pages côté client ,et tous les principaux navigateurs Web ont un moteur JavaScript dédié pour l'exécuter.
    </strong>
        
</p>
    <hr>
    <p class="mb-0">Vous trouvez mon lien git: <a href="https://github.com/loumioussama/Javascript" class="alert-link">https://github.com/loumioussama/Javascript</a></p>
  </div>`;
  
        document.getElementById('alert').innerHTML=affiche;
       
            },2000);
}