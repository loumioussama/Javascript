function homePage() {
    setTimeout(() => {
          let affiche=`<div class="alert alert-success" role="alert">
      <h2 class="alert-heading " style="text-align:center">       Bonsoir Community FivePoints !!!</h2>
      <h4 style="text-align:center"> 
             Introduction au monde du Javascript !!!
     </h4>
      <hr>
      <p class="mb-0">Vous trouvez mon lien git: <a href="https://github.com/loumioussama/Javascript" class="alert-link">https://github.com/loumioussama/Javascript</a></p>
    </div>`;
    
          document.getElementById('alert').innerHTML=affiche;
         
              },2000);
}