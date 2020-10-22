export default class User {
    constructor(email, password, name){
        this.name = name
        this.email = email
        this.password = password
    }

    sendInvited(id, email){
        const data = {email: email}
        fetch('https://matter-app.herokuapp.com/api/v1/users/'+id+'/invite', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 'Accept': 'application/json'
                },
                body: JSON.stringify(data)
         })
        .then((response) => response.json())
        .then((newdata) => checkEmail(newdata))
        //if
        function checkEmail(check){
            if (check.user_invited_id){
                alert('Send your inveted to: '+ email);
            }else {
                alert('Error: can´t send your invite');
            }
        }
    }
}
