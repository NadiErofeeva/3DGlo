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
                    console.log('tel')
                } else {
                    alert('Введите номер телефона полностью и цифрами')
                }


                if(/^([а-яА-ЯёЁ]+\s)*[а-яА-ЯёЁ]*$/g.test(text.value)) {
                    console.log('text')
                } else {
                    alert('Имя русскими символами')
                }

                if(/^(((\w*\.)|(\w*\-))*\w*)@(\w*\.)+([a-z]+)$/g.test(email.value)) {
                    console.log('email')
                } else {
                    alert('Введите email')
                }

                /*if (textarea) {
                    if(/^([а-яА-я] ?)+-( ?[а-яА-я])+$/g.test(textarea.value)) {
                        console.log('textarea')
                    } else {
                        alert('Введите сообщение на русском')
                    }
                }*/
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
                        const regRus = /^([а-яА-я] ?)+-( ?[а-яА-я])+$/g;
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