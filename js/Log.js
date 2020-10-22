export default class Log {
    loggingUser(log) {

        var url = 'https://matter-app.herokuapp.com/api/v1/auth/login';
        var data = {email: log.email,
                    password: log.password};    
        fetch(url, {
        method: 'POST',
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
        }).then(res => res.status)
        .then (res => searchUser(res, log))
        
        //if the user is corret
        function searchUser(status, log){ 
            if (status == '200'){
                //data user
                var url = 'https://matter-app.herokuapp.com/api/v1/auth/login';
                var data = {email: log.email, 
                            password: log.password};    
                fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers:{
                    'Content-Type': 'application/json'
                }
                }).then(res => res.json())
                .then (res => storeUser(res))

                function storeUser(user){
                    localStorage.setItem('id', user.id);
                    localStorage.setItem('email', user.email);
                    localStorage.setItem('user', user.name);
                    location.href ="./home.html";
                }
                } else if (status == '401'){
                    alert('error user or password');
                }
            }
               
        }
    resetForm() {
        document.getElementById('login-form').reset();
    }
}