function home() {
    setTimeout(() => {
        let affiche=`<div class="alert alert-success" role="alert">
    <h2 class="alert-heading " style="text-align:center"> Les Boucles</h2>
    
    <hr>
    <p class="mb-0">Vous trouvez mon lien git: <a href="https://github.com/loumioussama/Javascript" class="alert-link">https://github.com/loumioussama/Javascript</a></p>
  </div>`;
  
        document.getElementById('alert').innerHTML=affiche;
       
            },2000);
}
let tab=[];
function add() {
    let input1 = document.getElementById('input1').value;
    let num=Number(input1);
    tab.push(num);
    console.log(tab);
}
function effacer() {
    let input1 = document.getElementById('input1').value;
    let num=Number(input1);
    tab.pop();
    console.log(tab);
}
function filtrer() {
    let input1 = document.getElementById('input1').value;
    let num=Number(input1);
    let filtredTab=tab.filter(x => x>10);
    console.log(filtredTab);
}
function recherche() {
    let input1 = document.getElementById('input1').value;
    let num=Number(input1);
    let findTab=tab.find(x=>x==input1);
    console.log(findTab);
}