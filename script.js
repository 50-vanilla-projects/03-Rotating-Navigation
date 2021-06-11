const topMenu = document.querySelector('#top-menu');
const bars = document.querySelector('.fa-bars');
const times = document.querySelector('.fa-times');
const article = document.querySelector('article');
const body = document.querySelector('body');

topMenu.addEventListener('click', e => {
    console.log(e.target);
    if (e.target.classList.contains('fa-bars')) {
        bars.classList.add('bars-origin');
        bars.classList.add('rotate-180');
        times.classList.add('times-origin');
        times.classList.add('rotate-180');
        article.classList.add('article-origin');
        article.classList.add('rotate-20');
    }
    if (e.target.classList.contains('fa-times')) {
        article.classList.remove('rotate-20');
        article.classList.remove('article-origin');
        times.classList.remove('rotate-180');
        times.classList.remove('times-origin');
        bars.classList.remove('rotate-180');
        bars.classList.remove('bars-origin');
    }
    console.log(bars.classList);
    console.log(times.classList);
    console.log(article.classList);

})