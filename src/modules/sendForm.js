const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    //const loadText = 'Загрузка....';
    const errorText = 'Ошибка!!!';
    const successText = 'Спасибо! Наш менеджер с вами свяжется';
    const formElements = form.querySelectorAll('input');


    const loader = '<section style="flex: 1 1 25%;">\n' +
        '  <div class=\'sk-wave\'>\n' +
        '    <div class=\'sk-rect sk-rect-1\'></div>\n' +
        '    <div class=\'sk-rect sk-rect-2\'></div>\n' +
        '    <div class=\'sk-rect sk-rect-3\'></div>\n' +
        '    <div class=\'sk-rect sk-rect-4\'></div>\n' +
        '    <div class=\'sk-rect sk-rect-5\'></div>\n' +
        '  </div>\n' +
        '</section>';



    const validate = (list) => {
        let success = true;
        /*list.forEach(input => {
            /!*if (!input.classList.contains('success')) {
                success = false;
            }*!/
        })*/
        return success
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {

        const formData = new FormData(form);
        const formBody = {}

        //statusBlock.textContent = loadText;
        statusBlock.insertAdjacentHTML('beforeend', loader);
        statusBlock.style.color = '#fff';
        form.append(statusBlock);

        formData.forEach((val, key) => {
            formBody[key] = val;
        })

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)
            if (elem.type === 'block') {
                if (!(element.textContent === '0')) {
                    formBody[elem.id] = element.textContent;
                }
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
                console.log('element.value - ' + element.value)
            }
        })

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText;

                    formElements.forEach(input => {
                        input.value= ''
                    })
                })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
        } else {
            alert ('Данные не валидны')
        }
    }

    try {
        if (!form) {
            throw new Error('Верните форму')
        }
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            let isSubmit = true;
            for (let i = 0; formElements.length > i; i++) {
                if (!formElements[i].value) {
                    if (!(formElements[i].classList.contains('mess'))) {
                        isSubmit = false
                        break;
                    }
                }
                if (formElements[i].type === 'email') {
                    if(/^(((\w*\.)|(\w*\-))*\w*)@(\w*\.)+([a-z]+)$/g.test(formElements[i].value)) {
                        continue;
                    } else {
                        isSubmit = false
                    }
                }
            }

            if (isSubmit) {
                submitForm();
                setTimeout(() => {
                    statusBlock.textContent = '';
                }, 3000)
            } else {
                console.log('Ошибка в заполнении формы')
            }
        })
    } catch (error) {
        console.log(error.message)
    }
}

export default sendForm