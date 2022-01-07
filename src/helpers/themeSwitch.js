const switchTheme = (e) => {
    if (e === 'light') {
        document.body.classList.add('light-mode')
        window.localStorage.setItem('theme', 'light')
    };
    if (e === 'dark') {
        document.body.classList.remove('light-mode');
        window.localStorage.setItem('theme', 'dark')
    }
    if (e === 'system') {
        window.localStorage.setItem('theme', 'system')
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
        }
    }
};

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
darkThemeMq.addEventListener('change', e => {
    const choice = window.localStorage.getItem('theme')
    if (choice == 'system') {
        if (e.matches) {
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
        }
    }
});

export default switchTheme;