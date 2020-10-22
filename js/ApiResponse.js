const questionId = localStorage.getItem('responseId');

if (!questionId){
    alert('Need select feedback');
    window.location.href = "./home.html"
}

export default class APIAnswer {
    skills(id) {
        fetch(`https://matter-app.herokuapp.com/api/v1/invitations/${id}/feedback`)
        .then(response => response.json() ) 
        .then (json => printCards(json))         
    }    
}

//feedback-recived
function printCards(feedbacks){
    const container = document.getElementById('test-skills');
    container.innerHTML = '';
    feedbacks.forEach(feedback => {
        const card = returnCardHTML(feedback);
        container.innerHTML += card;
    });
}

function returnCardHTML(feedback) {
    const card = `<div class="card">
                    <div class="card-body score-card">
                        <div class="row">
                            <div class="col-12">
                            <h5 class="card-title"> ${feedback.name}: score = ${feedback.pivot.score}  
                            </div>
                        </div>
                        </h5>
                    </div>
                </div>`
    return card;
}
