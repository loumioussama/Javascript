function home() {
    setTimeout(() => {
        let affiche=`<div class="alert alert-success" role="alert">
    <h2 class="alert-heading " style="text-align:center"> DOM => document object Model </h2>
    <p>
<strong>
    Le modèle d'objet de document ( DOM ) est une interface multiplateforme et indépendante du langage
     qui traite un document XML ou HTML comme une structure arborescente dans laquelle chaque nœud est
      un objet représentant une partie du document.
       Le DOM représente un document avec une arborescence
      logique. Chaque branche de l'arborescence se termine par un nœud et chaque nœud contient des objets.
       Les méthodes DOM permettent un accès par programme à l'arborescence avec eux, on peut changer
        la structure, le style ou le contenu d'un document. Les nœuds peuvent être associés à des 
        gestionnaires d'événements . Une fois qu'un événement est déclenché, les gestionnaires
         d'événements sont exécutés. 

</strong>
</p> 
    <hr>
    <p class="mb-0">Vous trouvez mon lien git: <a href="https://github.com/loumioussama/Javascript" class="alert-link">https://github.com/loumioussama/Javascript</a></p>
  </div>`;
  
        document.getElementById('alert').innerHTML=affiche;
       
            },2000);
}