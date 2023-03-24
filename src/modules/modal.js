import { animate } from './helpers'

const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const widthOpenWindow = document.documentElement.offsetWidth;
    let opacity = 0;

    const modalOpen = () => {
        modal.style.display = 'block';

        animate({
            duration: 1000,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                if (opacity < 1) {
                    modal.style.opacity = progress;
                }
            }
        });
    }

    const modalClose = () => {
        animate({
            duration: 1000,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                if (modal.style.opacity) {
                    modal.style.opacity = 1 + (-progress);

                } else {
                    modal.style.display = 'none';
                }
            }
        });

        setTimeout(() => {
            modal.style.display = 'none';
        }, 1000)
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            widthOpenWindow >= '768' ? modalOpen() : modal.style.display = 'block';
        })
    })

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modalClose();
        }
    })
}

export default modal