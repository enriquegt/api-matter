import User from './User.js'
import Log from './Log.js'
//get user and password loggging
document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pwd').value;
    const log = new User(email, pass);
    //login 
    const logUser = new Log();
    logUser.loggingUser(log);
    logUser.resetForm();
})

