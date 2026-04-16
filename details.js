document.addEventListener("DOMContentLoaded", () => {
    
    const detailsContainer = document.getElementById('details-container');
    
    // 1. Retrieve Data from LocalStorage
    const momentData = JSON.parse(localStorage.getItem('selectedMoment'));

    // 2. Redirect if no data exists
    if (!momentData) {
        window.location.href = 'index.html';
        return;
    }

    // 3. Inject DOM Elements (With YouTube Button)
    const detailCardHTML = `
        <div class="details-card">
            <div class="details-img-wrapper">
                <img src="${momentData.image}" alt="${momentData.title}">
            </div>
            <div class="details-content">
                <h1>${momentData.title}</h1>
                <h3>${momentData.shortDescription}</h3>
                <hr>
                <div class="article-text">${momentData.fullDescription}</div>
                
                <div class="action-buttons">
                    <a href="${momentData.youtubeLink}" target="_blank" class="btn-youtube">
                        <i class="fa-brands fa-youtube"></i> Watch on YouTube
                    </a>
                </div>
            </div>
        </div>
    `;

    detailsContainer.innerHTML = detailCardHTML;

    // 4. Trigger Fade-In Animation
    setTimeout(() => {
        detailsContainer.classList.add('visible');
    }, 100);

});