const scroll = () => {
    /*const menu = document.querySelector('menu ul');

    menu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            const element = document.querySelector(e.target.getAttribute('href'));
            element.scrollIntoView({behavior: "smooth", block: "center", inline: "start"})
        }
    })*/

    const menuItem = document.querySelectorAll('menu ul a');
    menuItem.forEach((e) => {
        e.addEventListener('click',  (event) => {
            event.preventDefault();
            document.querySelector(e.getAttribute('href'))
                .scrollIntoView({behavior: "smooth", block: "center", inline: "start"});
        })
    })

    const buttonScroll = document.querySelector('main a');

    buttonScroll.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('#service-block')
            .scrollIntoView({behavior: "smooth", block: "center", inline: "start"});
    })
}

export default scroll