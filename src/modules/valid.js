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
            e.addEventListener('submit', function (k) {
                k.preventDefault();

                const text = e.querySelector('input[type="text"]');
                const tel = e.querySelector('input[type="tel"]');
                const email = e.querySelector('input[type="email"]');
                const textarea = e.querySelector('input.mess');

                if (/^[\d\+][\d\(\)\ -]{4,14}\d$/g.test(tel.value)) {
                    tel.style.border = '1px solid green';
                    console.log('tel')
                } else {
                    tel.style.border = '1px solid red';
                    alert('Введите номер телефона цифрами')
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

                if(/^([а-яА-ЯёЁ]+\s)*[а-яА-ЯёЁ]*$/g.test(textarea.value)) {
                    textarea.style.border = '1px solid green';
                    console.log('textarea')
                } else {
                    textarea.style.border = '1px solid red';
                    alert('Введите сообщение на русском')
                }
            })
        })
    }
    telValid();

}

export default valid