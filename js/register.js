import User from './User.js'
import AU from './AU.js'

//register user
document.getElementById('new-user-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const password = document.getElementById('pass').value;
    const email = document.getElementById('email').value;
    const user = new User(email, password);
    
    //add new user
    const start = new AU();
    start.addUser(user);
    start.resetForm();
})


