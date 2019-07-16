var gets = true; //是否让表单提交



$(function() {

    // 提示信息===========================================

    $("input[name=username]").focus(function() {

        if ($(this).val() == this.defaultValue) {

            $(this).val('');

        }

    }).blur(function() {

        if ($(this).val() == '') {

            $(this).val(this.defaultValue);

        }

    });



    //当输入框失去焦点的时候，需要执行的方法

    $("input[name=username]").blur(function() { doUsername(); });

    $("input[name=password]").blur(function() { doPassword(); });

    $("input[name=repass]").blur(function() { doRepass(); });

    $("input[name=age]").blur(function() { doAge(); });

    $("input[name=tel]").blur(function() { doTel(); });

    $("input[name=email]").blur(function() { doEmail(); });



});



// 用户名的验证==========================

function doUsername() {

    var t = $("input[name=username]");

    var span = t.next();

    if (/^\w{3,6}$/.test(t.val())) {

        span.html("填写正确").css({ color: "green", fontSize: "12px" });

        return true;

    } else {

        span.html("包含数字、字母、下划线，长度在3-6之间").css({ color: "red", fontSize: "12px" });

        return false;

    }

}





// 密码的验证==========================

function doPassword() {

    var t = $("input[name=password]");

    var span = t.next();

    if (t.val() == '') {

        span.html("密码不能为空").css({ color: "red", fontSize: "12px" });

        return false;

    } else {

        span.html('');

        if (/.{15,}/.test(t.val())) {

            span.html("密码长度不合法");

            return false;

        }

        return true;

    }

}

// 确认密码的验证==========================

function doRepass() {

    var t = $("input[name=repass]");

    var span = t.next();

    if (t.val() == $("input[name=password]").val() && t.val() != '') {

        span.html("填写正确").css({ color: "green", fontSize: "12px" });

        return true;

    } else {

        span.html("两次密码不一致").css({ color: "red", fontSize: "12px" });

        return false;

    }

}









// 手机号码的验证==========================

function doTel() {

    var t = $("input[name=tel]");

    var span = t.next();

    if (/^1[3578][0-9]{9}$/.test(t.val())) {

        span.html('');

        return true;

    } else {

        span.html("手机号码格式错误").css({ color: "red", fontSize: "12px" });

        return false;

    }

}

// 数据提交的时候执行的方法

function doTable() {

    var user = doUsername();

    var pass = doPassword();

    var repass = doRepass();

    var age = doAge();

    var love = doLove();

    var email = doEmail();

    var tel = doTel();

    if (user && pass && repass && age && love && email && tel) {

        return true;

    } else {

        return false;

    };

};