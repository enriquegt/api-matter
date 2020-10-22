export default class StartCard {
    addCard(user) {
        const container = document.getElementById('initCard');
        container.innerHTML += `
        <h3 class="card-title">Hello ${user},</h3>
            <p class="greeting-subtitle">Let’s finish setting up Matter!</p>
            <p class="greeting-text">Discover your biggest growth opportunities from people you trust and respect. Get started by asking 3 people for feedback.</p>
        `;
    }
}