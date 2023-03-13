const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const widthOpenWindow = document.documentElement.offsetWidth;
    let opacity = 0;

    const modalOpen = () => {
        modal.style.display = 'block';
        modal.style.opacity = opacity;

        const modalAnim = () => {
            opacity += 0.1;
            modal.style.opacity = opacity;
            if (opacity < 1) {
                requestAnimationFrame(modalAnim)
            }
        }
        requestAnimationFrame(modalAnim);
    }

    const modalClose = () => {
        const modalAnim = () => {
            opacity -= 0.1;
            modal.style.opacity = opacity;
            if (opacity > 0) {
                requestAnimationFrame(modalAnim);
            } else {
                modal.style.display = 'none';
            }
        }
        requestAnimationFrame(modalAnim);
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            widthOpenWindow >= '768' ? modalOpen() : modal.style.display = 'block';
        })
    })

    modal.addEventListener('click', (e) => {
        const tar = e.target;
        if (!tar.closest('.popup-content') || tar.classList.contains('popup-close')) {
            modal.style.display = 'none';
        }
    })
}

export default modal