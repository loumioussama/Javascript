function home() {
    setTimeout(() => {
        let affiche=`<div class="alert alert-success" role="alert">
    <h2 class="alert-heading " style="text-align:center">Mini Projet</h2>
    
    <hr>
    <p class="mb-0">Vous trouvez mon lien git: <a href="https://github.com/loumioussama/Javascript" class="alert-link">https://github.com/loumioussama/Javascript</a></p>
  </div>`;
  
        document.getElementById('alert').innerHTML=affiche;
       
            },2000);
}
var storage=JSON.parse(localStorage.getItem('USERS')) || [] ;

function ajouter() {
    let id=Math.floor(Math.random() *100);
    console.log(id + "aaaaaaaaaaa");
    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    let age = document.getElementById('age').value;
    let password = document.getElementById('password').value;

    storage.push(
        {
            id:id,
            username: username,
            email:email,
            age:Number(age),
            password:password
        }
    );
        localStorage.setItem('USERS',JSON.stringify(storage));
    
}

function afficher() {
    window.location.href="list.html";
    
}