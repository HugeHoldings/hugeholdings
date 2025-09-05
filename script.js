document.addEventListener('DOMContentLoaded', function () {

    // Portfolio Carousel Setup
    const gamesData = [
        {
            imageSrc: 'images/game-richi.jpg',
            imageAlt: 'Richi Scratcher Screenshot',
            title: 'Richi Scratcher',
            description: 'Scratch, Win, and Collect – Experience the thrill of hidden prizes with every swipe.',
            appStoreUrl: 'https://apps.apple.com/ca/app/richiscratcher/id642312329'
        },
        {
            imageSrc: 'images/game-h3ge-connect.jpg',
            imageAlt: 'H3GE Connect Screenshot',
            title: 'H3GE Connect',
            description: 'Rummoli, Trivia, Cube, Poker, Baccarat, Blackjack - endless family fun with exciting casino-style games.',
            appStoreUrl: 'https://apps.apple.com/ca/app/h3ge-connect/id6443529439'
        },
        {
            imageSrc: 'images/game-bubbles-in-space.jpg',
            imageAlt: 'Bubbles in Space Screenshot',
            title: 'Bubbles in Space',
            description: 'Guide your bubble through mines and spaceships while popping and blasting for high scores.',
            appStoreUrl: 'https://apps.apple.com/ca/app/bubbles-in-space/id1010801758'
        },
        {
            imageSrc: 'images/game-winter-scratcher.jpg',
            imageAlt: 'Winterland Scratchers Screenshot',
            title: 'Winterland Scratchers',
            description: 'Scratch, match, and win big with thrilling casino-style fun.',
            appStoreUrl: 'https://apps.apple.com/ca/app/winterland-scratchers/id1054185804'
        },
        {
            imageSrc: 'images/game-itripoley.jpg',
            imageAlt: 'Itripoley Screenshot',
            title: 'Itripoley',
            description: 'A fast-paced card game blending Poker and Rummy with AI opponents.',
            appStoreUrl: 'https://apps.apple.com/ca/app/itripoley/id1586541611'
        },
        {
            imageSrc: 'images/game-marble-tilt.jpg',
            imageAlt: 'Marble Tilt Screenshot',
            title: 'Marble Tilt',
            description: 'Tilt to roll marbles into place in this simple yet addictive game.',
            appStoreUrl: 'https://apps.apple.com/ca/app/marble-tilt/id1599878471'
        },
        {
            imageSrc: 'images/app-pgtransit.jpg',
            imageAlt: 'Prince George Transit Screenshot',
            title: 'Prince George Transit',
            description: 'Never miss your bus again with the ultimate Prince George transit app.',
            appStoreUrl: 'https://apps.apple.com/ca/app/prince-george-transit/id558331296'
        }
    ];

    // Carousal Slide Generation
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    if (swiperWrapper) {
        gamesData.forEach(game => {
            const slideHtml = `
                <div class="swiper-slide">
                    <div class="app-card">
                        <img src="${game.imageSrc}" alt="${game.imageAlt}" class="app-card-image">
                        <div class="app-card-content">
                            <h3>${game.title}</h3>
                            <p>${game.description}</p>
                            <a href="${game.appStoreUrl}" class="appstore-button" target="_blank">View on App Store</a>
                        </div>
                    </div>
                </div>
            `;
            swiperWrapper.innerHTML += slideHtml;
        });
    }

    // Copyright Year Update
    const startYear = 2011;
    const currentYear = new Date().getFullYear();
    const yearSpan = document.getElementById('copyright-year');

    if (yearSpan) {
        if (startYear < currentYear) {
            yearSpan.textContent = `${startYear}–${currentYear}`;
        } else {
            yearSpan.textContent = startYear;
        }
    }

    const portfolioCarousel = document.querySelector('.portfolio-carousel');

    if (portfolioCarousel) {
        const swiper = new Swiper('.portfolio-carousel', {
            loop: true,
            spaceBetween: 30,
            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            }
        });
    }

    // 404 Page Redirect Countdown
    const redirectMessage = document.getElementById('redirect-message');
    if (redirectMessage) {
        let countdown = 5;

        const countdownTimer = setInterval(function () {
            redirectMessage.textContent = `Redirecting you to the homepage in ${countdown}...`;
            countdown--;
            if (countdown < 0) {
                clearInterval(countdownTimer);
                window.location.href = 'index.html';
            }
        }, 1000);
    }
});