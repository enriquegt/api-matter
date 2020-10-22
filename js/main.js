import StartCard from './Card.js';
import Perfil from './Perfil.js';
import API from './Api.js';
import APIShow from './ApiShow.js';
import User from './User.js';

//start data users
const userId = localStorage.getItem('id');
const userEmail = localStorage.getItem('email');
const userName = localStorage.getItem('user');

if (!userId){
    window.location.href = "./index.html";
}
//Agrega nombre de usuario en Nav
document.getElementById('user').innerHTML = userEmail;

//Feedbacks
//My feebaks Score
const feedbackShow = new APIShow();
feedbackShow.feedbackScore(userId);

//feebaks recived
const feedbackRecived = new API();
feedbackRecived.feedbackRecived(userId);


//add email or name (if exist)
if (userName==null){
    cards(userEmail);
}else {
    cards(userName);
}

//card perfil
const perfilCard = new Perfil();
perfilCard.addPerfil(userName, userEmail);

function cards(user){
//Card con informacion del usurio
const initCard = new StartCard();
initCard.addCard(user);
} 

//send email to invited user
document.getElementById('send-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const send = new User(userEmail);
    send.sendInvited(userId, email);
})