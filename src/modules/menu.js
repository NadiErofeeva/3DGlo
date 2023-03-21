const menu = () => {
    const menu = document.querySelector('menu');
    const body = document.querySelector('body');

    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    }

    body.addEventListener('click', (e) => {
        if (e.target.closest('.menu') || e.target.closest('.close-btn')) {
            handleMenu()
        }
        else if (!e.target.closest('menu')) {
            menu.classList.remove('active-menu')
        } else if (e.target.matches('menu ul a')) {
            handleMenu()
        }
    })
}

export default menu