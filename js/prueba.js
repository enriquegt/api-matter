const data = {email:'erik5@gmail.com', name:'erik', password:'1234'};
fetch('https://matter-app.herokuapp.com/api/v1/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
    console.log('Success:', data)
})
