function loadNews(page) 
{
    fetch('json/news.json')
    .then(response => response.json())
    .then(newsList => {
        const container = document.getElementById('news-articles');
        container.innerHTML = '';
        newsList.forEach(article => {
        const el = document.createElement('article');
        el.className = 'news-article';
        if (page == "newspage")
        {
            el.innerHTML = `
                <img src="${article.image}" alt="${article.alt}" class="news-article-img">
                <div class="news-article-content">
                    <h3 class="news-article-title">${article.title}</h3>
                    <p class="news-article-desc">${article.desc}</p>
                </div>
            `;
        } else if (page == "mainpage")
        {
            el.innerHTML = `
                <img src="${article.image}" alt="${article.alt}" class="news-article-img">
                <div class="news-article-content">
                    <h3 class="news-article-title">${article.title}</h3>
                    <p class="news-article-desc">${article.desc}</p>
                </div>
            `;
        }

        if (article.link) {
            el.style.cursor = "pointer";
            el.addEventListener('click', () => {
                window.open(article.link, '_blank');
            });
        }

        container.appendChild(el);
        });
    })
    .catch(err => {
        document.getElementById('news-articles').innerHTML = `Error`;
        console.error('News loading error:', err);
    });
}