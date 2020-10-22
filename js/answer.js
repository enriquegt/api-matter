import StartCard from './Card.js'
import Perfil from './Perfil.js'
import APIAnswer from './ApiAnswer.js'

//data user
const userId = localStorage.getItem('id');
const userEmail = localStorage.getItem('email');
const userName = localStorage.getItem('user');

if (!userId){
    window.location.href = "./index.html"
}
//Agrega nombre de usuario en Nav
document.getElementById('user').innerHTML = userEmail;

//Feedbacks
const feedbackRecived = new APIAnswer();
feedbackRecived.skills();

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