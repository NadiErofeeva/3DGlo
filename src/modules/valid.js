const valid = () => {
    const numberCalc = () => {
        document.querySelectorAll('.calc-block input').forEach((e) => {
            e.addEventListener('input', function (k) {
                if(!/[^\d]/g.test(e.value)) {
                    console.log('number')
                } else {
                    e.value = e.value.replace(k.data, '');
                    console.log('not number')
                }
            })

        })
    }
    numberCalc();


    const telValid = () => {
        document.querySelectorAll('form').forEach((e) => {

            const text = e.querySelector('input[type="text"]');
            const tel = e.querySelector('input[type="tel"]');
            const email = e.querySelector('input[type="email"]');
            const textarea = e.querySelector('input.mess');

            const deleteSpace = (str) => {
                let reg = /^[\s\-]+|[\s\-]+$/;
                str = str.replace(reg, "");
                reg = /\s{2,}/g;
                str = str.replace(reg, " ");
                return str;
            };

            e.addEventListener('submit', function (k) {
                k.preventDefault();

                if (/^[\d\+][\d\(\)\ -]{4,14}\d$/g.test(tel.value)) {
                    tel.style.border = '1px solid green';
                    console.log('tel')
                } else {
                    tel.style.border = '1px solid red';
                    alert('Введите номер телефона полностью и цифрами')
                }


                if(/^([а-яА-ЯёЁ]+\s)*[а-яА-ЯёЁ]*$/g.test(text.value)) {
                    text.style.border = '1px solid green'
                    console.log('text')
                } else {
                    text.style.border = '1px solid red';
                    alert('Имя русскими символами')
                }

                if(/^(((\w*\.)|(\w*\-))*\w*)@(\w*\.)+([a-z]+)$/g.test(email.value)) {
                    email.style.border = '1px solid green';
                    console.log('email')
                } else {
                    email.style.border = '1px solid red';
                    alert('Введите email')
                }
                if (textarea) {
                    if(/^([а-яА-ЯёЁ]+\s)*[а-яА-ЯёЁ]*$/g.test(textarea.value)) {
                        textarea.style.border = '1px solid green';
                        console.log('textarea')
                    } else {
                        textarea.style.border = '1px solid red';
                        alert('Введите сообщение на русском')
                    }
                }
            })
///////////////////////////////////////Усложненное задание №2
            e.querySelectorAll('input').forEach((input) => {
                input.addEventListener('blur', (event) => {
                    if (event.target.type === 'email') {
                        const reg = /[^a-zA-Z\d\-\.\_\!\~\*\'\@]/g;
                        event.target.value = event.target.value.replace(reg, "");
                    }

                    if (event.target.type === 'tel') {
                        const reg = /[^\d\(\-\)]+$/g;
                        event.target.value = event.target.value.replace(reg, "");
                    }

                    if (event.target.type === 'text') {
                        const reg = /[^а-яА-Я\s\-]/g;
                        const regRus = /^([а-яА-ЯёЁ]+\s)*[а-яА-ЯёЁ]*$/g;
                        event.target.value = event.target.value.replace(reg, "");
                        if (event.target.value === '') {
                           console.log(event.target.value)
                        } else {
                            event.target.value = deleteSpace(event.target.value);
                            event.target.value = event.target.value.replace(regRus, (str) => {
                                const lowerText = str.toLowerCase()
                                return str[0].toUpperCase() + lowerText.slice(1)
                            });
                        }
                    }
                })
            })
        })
    }
    telValid();

}

export default valid