function loadGames() 
{
    fetch('json/games.json')
    .then(response => response.json())
    .then(gamesList => {
        const container = document.getElementById('games-list');
        container.innerHTML = '';
        gamesList.forEach(article => {
        const el = document.createElement('button');
        el.className = 'game-card';

        el.innerHTML = `
            <img src="${article.image}" alt="${article.alt}">
            <div>
                <h3>${article.title}</h3>
                <p>${article.desc}</p>
            </div>
        `;

        if (article.link) {
            el.onclick = function() {
                window.location.href = article.link;
            };
        }

        container.appendChild(el);
        });
    })
    .catch(err => {
        document.getElementById('games-list').innerHTML = `Error`;
        console.error('Games loading error:', err);
    });
}