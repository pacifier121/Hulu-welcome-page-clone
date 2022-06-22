const highlightsButtons = document.querySelectorAll('.highlights-navbar-button');

const sportsDiv = document.querySelector('#sports-div');
const newsDiv = document.querySelector('#news-div');
const eventsDiv = document.querySelector('#events-div');

let activeHighlight = 'sports';
let activeBtn = document.querySelector('#sports-btn');

if (activeHighlight === 'sports') {
    newsDiv.style.display = 'none';
    eventsDiv.style.display = 'none';
} else if (activeHighlight === 'news') {
    sportsDiv.style.display = 'none';
    eventsDiv.style.display = 'none';
} else {
    sportsDiv.style.display = 'none';
    newsDiv.style.display = 'none';
}
activeBtn.classList.add('highlight-navbar-btn-active');

highlightsButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        activeHighlight = e.target.value;
        
        activeBtn.classList.remove('highlight-navbar-btn-active');
        if (activeHighlight === 'sports') {
            activeBtn = document.querySelector('#sports-btn');
            sportsDiv.style.display = 'block';
            newsDiv.style.display = 'none';
            eventsDiv.style.display = 'none';
        } else if (activeHighlight === 'news') {
            activeBtn = document.querySelector('#news-btn');
            sportsDiv.style.display = 'none';
            newsDiv.style.display = 'block';
            eventsDiv.style.display = 'none';
        } else {
            activeBtn = document.querySelector('#events-btn');
            sportsDiv.style.display = 'none';
            newsDiv.style.display = 'none';
            eventsDiv.style.display = 'block';
        }
        activeBtn.classList.add('highlight-navbar-btn-active');
    })
})