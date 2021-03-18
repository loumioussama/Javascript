function home() {
    setTimeout(() => {
        let affiche=`<div class="alert alert-success" role="alert">
    <h2 class="alert-heading " style="text-align:center"> Les condition</h2>
    
    <hr>
    <p class="mb-0">Vous trouvez mon lien git: <a href="https://github.com/loumioussama/Javascript" class="alert-link">https://github.com/loumioussama/Javascript</a></p>
  </div>`;
  
        document.getElementById('alert').innerHTML=affiche;
       
            },2000);
}

function test() {
    let input1 = document.getElementById('input1').value;
    //   if(Number(input1)%2==0){
    //          alert("pair");
    //   }
    //   else{
    //     alert("impair")
    //   }
    (Number(input1)%2==0) ? alert("pair") : alert("impair")
}