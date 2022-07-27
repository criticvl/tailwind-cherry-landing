const menu = document.getElementById('menu');
const burger = document.getElementById('burger');

burger.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
})


if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

const darkModeButton = document.getElementById('darkmode');
darkModeButton.addEventListener('click', () => {
    document.querySelector('html').classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.removeItem('theme');
    }
})