export default class Perfil {
    addPerfil(user, email) {
        const container = document.getElementById('user-perfil');
        container.innerHTML += `
        <img class="card-img-top" src="img/1.png" alt="">
          <div class="card-body">
              <h3 class="card-title">Usuario:</h3> <h5> ${user} </h5> 
              <h3 class="card-title">Correo: </h3>
              <h5>${email} </h5>
              <p><a href="./edit-user.html" class="btn btn-primary mt-3">Edit User</a></p>
        `;
    }
    editUser(){
        const editContainer = document.getElementById('user-perfil');
        editContainer.innerHTML += `
        <form onsubmit="event.preventDefault(), submit()" id="edit-user-form">
              <div class="form-edit">
                <label for="user">User</label>
                <input type="text" class="form-control" id="user" placeholder="User">
                <label for="pwd">Password</label>
                <input type="password" class="form-control" id="pwd" placeholder="Password">
              </div>
              <button type="submit" class="btn btn-primary">Confirm</button>
            </form>
            `
    }
}