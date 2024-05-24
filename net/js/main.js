document.addEventListener('DOMContentLoaded', () => {
    const movies = [
        { title: 'breaking bad', image: 'breaking bad.png', link:'watch.html?id=1' },
        { title: 'la casa de papel', image: 'la casa de papel.png',link:'watch.html?id=2' },
        { title: 'stranger things', image: 'stranger things.png',link:'watch.html?id=3' },
        { title: 'the 100', image: 'the 100.png',link:'watch.html?id=4' },
        { title: 'the meg', image: 'the meg.png',link:'watch.html?id=5' },
        { title: 'walking dead', image: 'walking dead.png',link:'watch.html?id=6' },
        // تفاصيل الأفلام الأخرى هنا
    ];

    function displayMovies(movies) {
        const moviesSection = document.getElementById('movies-section');
        moviesSection.innerHTML = '';
        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');
            movieCard.innerHTML = `
                <a href="$ {https://www.imdb.com/title/tt4779682/?ref_=ext_shr_lnk}">
                    <img src="${movie.image}" alt="${movie.title}">
                    <h3>${movie.title}</h3>
                    <p>${movie.themeg}</p>
                </a>
            `;
            moviesSection.appendChild(movieCard);
        });
    }

    displayMovies(movies);
});