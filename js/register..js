window.onload = function () {
    var rg_phone_number = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    var rg_qq = /[1-9][0-9]{4,}/;
    var rg_username = /^[\u4e00-\u9fa5]{2,8}$/;
    var rg_msg = /^\d{6}$/;
    var rg_password = /^[a-zA-Z]\w{5,17}$/;

    var phone_number = document.querySelector('#phone_number');
    var qq_num = document.querySelector('#qq_num');
    var username = document.querySelector('#username');
    var captcha = document.querySelector('#captcha');
    var password = document.querySelector('#password');
    var confirm = document.querySelector('#confirm');
    regexp(phone_number, rg_phone_number);
    regexp(qq_num, rg_qq);
    regexp(username, rg_username);
    regexp(captcha, rg_msg);
    regexp(password, rg_password);
    confirm.addEventListener('blur', function () {
        if (this.value === password.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = ' <i class="success_ico"></i> 恭喜你输入正确 ';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = ' <i class="error_ico"></i> 两次密码输入不一致'
        }
    })

    function regexp(element, reg) {
        element.addEventListener('blur', function () {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = ' <i class="success_ico"></i> 恭喜你输入正确 ';
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = ' <i class="error_ico"></i> 格式不正确，请重新输入';
            }
        })
    }
}