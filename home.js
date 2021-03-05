function homePage() {
    setTimeout(() => {
          let affiche=`<div class="alert alert-success" role="alert">
      <h4 class="alert-heading " style="text-align:center">       Bonsoir Community FivePoints !!!</h4>
      <p> <ol>
                    <li>JavaScript c'est quoi ?</li>
                    <li>historique Javascript!!!</li>
                    <li>ou ecricre notre code javascript(script): les 2 méthodes</li>
                    <li>DOM => document object Model</li>
                    <li>les fonctions syntaxe avec exemple afficher message Bonjour</li>
                    <li>exemple 1 (récuperer une valeure d'un input et l'afficher avec 2 méthodes:log et alert) dans html</li>
                    <li>exemple 2 (faire la somme de 2 entiers a et b ) fichier .js</li>
                    <li>les condition if else (paire ou impaire par exemple)</li>
                    <li>les boucles (for , foreach , map , filter ,find)</li>
                    <li>mini Projet.</li>
    
                </ol>
                </p>
      <hr>
      <p class="mb-0">Vous trouvez mon lien git: <a href="https://github.com/loumioussama/Javascript" class="alert-link">https://github.com/loumioussama/Javascript</a></p>
    </div>`;
    
          document.getElementById('alert').innerHTML=affiche;
         
              },2000);
}