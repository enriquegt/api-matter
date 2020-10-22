export default class AU {
    addUser(log) {
        fetch(`https://matter-app.herokuapp.com/api/v1/users`)
        .then(response => response.json()) 
        .then (json => searchUser(json))

        //search if the email is not used in the API
        function searchUser(users){
            const search = users.find(user=>user.email === log.email)
        if (search){
             alert('error, try another email')
            }else {
                addApi(log);
            }
        }
        //add user to API
        function addApi(user){
            var url = 'https://matter-app.herokuapp.com/api/v1/users';
            var data = {name: user.name,
                        email: user.email,
                        password: user.password};
        
            fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
            }).then(res => res.json())
            .then(response => console.log(response));
            alert('registered user, please login')
            }
        }
    
    resetForm() {
        document.getElementById('new-user-form').reset();
    }
    editUser(aux){
        fetch(`https://matter-app.herokuapp.com/api/v1/users`)
        .then(response => response.json() ) 
        .then (json => searchUser(json))

        //search if the email is not used in the API
        function searchUser(users){
            const search = users.find(user=>user.email === aux.email)
            const id = search.id
            
            //change data user
            if (aux.name === 'false'){
                const data = {password: aux.password}
                fetch('https://matter-app.herokuapp.com/api/v1/users/'+id, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json', 'Accept': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then((response) => response.json())
                .then((newdata) => alert('Your password hace changed: '+ newdata.name))
            }else if (aux.password === 'false') {
                const data = {name: aux.name}
                fetch('https://matter-app.herokuapp.com/api/v1/users/'+id, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json', 'Accept': 'application/json'
                    },
                    body: JSON.stringify(data)
                 })
                .then((response) => response.json())
                .then((newdata) => alert('Your name have changed to: '+ newdata.name))
            }else {
                const data = {name: aux.name, password: aux.password}
                fetch('https://matter-app.herokuapp.com/api/v1/users/'+id, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json', 'Accept': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then((response) => response.json())
                .then((newdata) => alert('your name and password have changed: ' + newdata.name))
            }
                        
        }
    }   
}
