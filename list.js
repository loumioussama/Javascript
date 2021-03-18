function listUsers() {
    var storage=JSON.parse(localStorage.getItem('USERS')) || [];
    var rows=``;
    storage.forEach((x,i) =>  {   
       rows+= `
       <tr>
       <th scope="row">`+(i+1) + `</th>
       <td> ${x.name} </td>
       <td>${x.email} </td>
       <td>${x.age} </td>
       <td>${x.password} </td>
       <td> 
       
      
<button type="button" onclick="edit(${i})" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Edit
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      
      <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input type="text" id="name" class="form-control"  value=${x.name}>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
            <input class="form-control" id="description" value=${x.description}   rows="3">
        </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

       
    
</td>
<td>
       <button type="button" class="btn btn-danger" onclick="supprimer(`+i+`)">Delete</button>
</td>
</tr>`;

});
document.getElementById('elements').innerHTML = rows;
}