function validate() {
    const usName = document.querySelector('#username');
    const email = document.querySelector('#email');
    const pass = document.querySelector('#password');
    const confPass = document.querySelector('#confirm-password');
    const compNum = document.querySelector('#companyNumber');
    const isCompanyCheck = document.querySelector('#company');
    isCompanyCheck.addEventListener('change', isCheckBox);
    document.querySelector('#submit').addEventListener('click', submit);
    
    const regUser = /(^[a-zA-Z0-9]{3,20}$)/;
    const regEmail  = /^.*@.*\..*$/;
    const regPass = /(^[\w]{5,15}$)/;
    
    function isCheckBox() {
        if (isCompanyCheck.checked) {
            document.querySelector('#companyInfo').style = 'display: block';
        } else { 
            document.querySelector('#companyInfo').style = 'display: none';
        }
    }
    function submit(e) {
        e.preventDefault();
        let isValid = true;
        checkUserNameAndApplyBorders();
        checkEmailAndApplyBorders();
        checkPasswordsAndApplyBorders();
        checkIsCompanyAndApplyBorders();
            
        if (isValid) {
            document.querySelector('#valid').style = 'display: block';
        } else { 
            document.querySelector('#valid').style = 'display: none';
        }
        
        function checkUserNameAndApplyBorders() {
            if (regUser.test(usName.value)){
                usName.style = 'border: none';
            } else {
                usName.style = 'border-color: red';
                isValid = false;
            }
        }
        function checkEmailAndApplyBorders() {
            if (regEmail.test(email.value)){
                email.style = 'border: none';
            } else {
                email.style = 'border-color: red';
                isValid = false;
            }
        }
        function checkPasswordsAndApplyBorders() {
            if (regPass.test(pass.value) && pass.value === confPass.value) {
                pass.style = 'border: none';
                confPass.style = 'border: none';
            }else if (regPass.test(pass.value)) {
                pass.style = 'border: none';
                confPass.style = 'border-color: red';
                isValid = false;
            }else {
                pass.style = 'border-color: red';
                confPass.style = 'border-color: red';
                isValid = false;
            }
        }
        function checkIsCompanyAndApplyBorders() {
            if (isCompanyCheck.checked) {
                if (compNum.value >= 1000 && compNum.value <= 9999) {
                    compNum.style = 'border: none';
                }else {
                    compNum.style = 'border-color: red'
                    isValid = false;
                }
            }
        }
    }
}
