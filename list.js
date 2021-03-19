var storage=JSON.parse(localStorage.getItem('USERS')) || [];
function listUsers() {
    var rows=``;
    storage.forEach((x,i) =>  {   
       rows+= `
       <tr>
       <th scope="row">`+(i+1) + `</th>
       <td> ${x.username} </td>
       <td>${x.email} </td>
       <td>${x.age} </td>
       <td>${x.password} </td>
       <td> 
       
      
<button type="button" onclick="update(${i})" class="btn btn-info" data-mdb-toggle="modal"
data-mdb-target="#exampleModal">
  Edit
</button>

<!-- ************************************ -->
<div
  class="modal fade"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update User</h5>
        <button
          type="button"
          class="btn-close"
          data-mdb-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
      <div >
            <label for="exampleFormControlInput1" class=""></label>
            <input type="text" id="username" class="form-control"  >
        </div>
        <div >
            <label for="exampleFormControlTextarea1" class="form-label"></label>
            <input class="form-control" id="email" type="email"  rows="3">
        </div>
        <div >
        <label for="exampleFormControlTextarea1" class="form-label"></label>
        <input class="form-control" id="age" type="number"  rows="3">
    </div>
    <div >
    <label for="exampleFormControlTextarea1" class="form-label"></label>
    <input class="form-control" id="password"  type="password"  rows="3">
</div>
      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">
          Close
        </button>
        <button type="button" onclick="modifier(${x.id})" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>




       
    
</td>
<td>
       <button type="button" class="btn btn-danger" onclick="Delete(`+i+`)">Delete</button>
</td>
</tr>`;

});
document.getElementById('elements').innerHTML = rows;
}

function update(i) {
  console.log(i);
  let username=document.getElementById('username');
  let email=document.getElementById('email');
  let age=document.getElementById('age');
  let password=document.getElementById('password');

  
  username.value=storage[i].username;
  email.value=storage[i].email;
  age.value=storage[i].age;
  password.value=storage[i].password;

  console.log(username,email,age,password);

  
}


function Delete(i){
  console.log(i);
  storage.splice(i,1);
  localStorage.setItem('USERS',JSON.stringify(storage));
  listUsers();
}

function modifier(id) {
  console.log(id);
  let  updatedUser= storage.find(x => x.id==id);
  console.log(updatedUser);
  updatedUser.email=document.getElementById('email').value;
  updatedUser.password=document.getElementById('password').value;
  console.log(document.getElementById('email').value);
  console.log(updatedUser.email);
  localStorage.setItem('USERS',JSON.stringify(storage));


 window.location.reload();
  
}