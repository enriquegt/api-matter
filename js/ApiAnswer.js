let skills = [];
const questionId = localStorage.getItem('answerId');

export default class APIAnswer {
    skills() {
        fetch(`http://matter-app.herokuapp.com/api/v1/skills`)
        .then(response => response.json() ) 
        .then (json => printCards(json))         
    }    
}

//feedback-recived
function printCards(feedbacks){
    skills = feedbacks;
    const container = document.getElementById('test-skills');
    container.innerHTML = '';
    feedbacks.forEach(feedback => {
        //searchEmail(feedback.user_id)
        const card = returnCardHTML(feedback);
        container.innerHTML += card;
    });
}

function returnCardHTML(feedback) {
    const card = `<div class="card ">
                    <div class="card-body answer-card ">
                        <div class="row">
                        <div class="col-12 ">
                        <h5 class="card-title"> ${feedback.name}:
                    </div>
                    <div class="col-md-3"> </div>
                    <div class="col-12 col-lg-5">
                    <input id="score${feedback.id}" name="score" type="text">
                    </div>
                    <div class="col-12 col-md-4">
                      <button type="submit" class="btn btn-info mb-2">Send</button>
                    </div>
                  </div>
                    </h5>
                    </div>
                </div>`
    return card;
}

function searchEmail(email){
    fetch(`https://matter-app.herokuapp.com/api/v1/users/`+ email)
        .then(response => response.json() ) 
        .then (json => console.log(json.email))
        }

//answer feedback
fetch(`http://matter-app.herokuapp.com/api/v1/skills`)
        .then(response => response.json() ) 
        .then (json => score(json)) 

        function score(skills){
            skills.forEach(skill => {
                //searchEmail(feedback.user_id)
                document.getElementById('cal-form').addEventListener('submit', (event) => {
                    event.preventDefault();
                    let score = document.getElementById('score'+skill.id).value;
                   if (score ) {
                       if (score > 0 && score < 6){
                        console.log ('pregunta: '+  questionId +' numero: '+skill.id + ' valor: ' + score)   
                        document.getElementById('cal-form').reset();
                        sentScore(questionId, skill.id, score)
                       }else{
                           alert('error, score is 1 to 5')
                       }
                   }
                    
                    }) 
            });            
        }
        
        function sentScore(questionId, skill, score){
            const data = {score: score}
        fetch(`https://matter-app.herokuapp.com/api/v1/invitations/${questionId}/skills/${skill}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 'Accept': 'application/json'
                },
                body: JSON.stringify(data)
         }).then(res => res.status)
         .then(response =>{
             if (response == '200'){
                 alert('Score send');
             }else if (response == '500') {
                alert('error: already qualified ');
             }else {
                alert('error :'+ response);
             }
            
         })

    }