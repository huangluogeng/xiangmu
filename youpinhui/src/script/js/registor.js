var accountIsChecked = false;

var accountIsOK = false;

var passwdIsOK = false;

var confirmpwdIsOK = false;

var phoneIsOK = false;



$(function() {
    //验证手机号码

    $("#sj_code").focus(function() {

        $("#phonea1").text("建议输入常用手机").removeClass().addClass("");
    }).blur(function() {

        blur_checkphone();

    })

});

// // 验证账号

// $("#account").focus(function() {

//     focus_checkaccount();

// }).keyup(

//     function() {

//         $("#accountmsg").text("支持中文、字母、数字组合").removeClass()

//         .addClass("info");

//         accountIsChecked = false;

//     }).blur(function() {

//     blur_checkaccount();

// })



// 验证密码

$(".regk text5").focus(function() {

    $("#pwdmsg").text("建议使用数字和字母的组合").removeClass().addClass("info");

}).blur(function() {

    blur_checkpwd();

    blur_confirmpwd();

});



// 验证二次密码

$("#confirmpwd").focus(function() {

    $("#confirmmsg").text("请再次确认密码").removeClass().addClass("info");

}).blur(function() {

    blur_confirmpwd();

});


function focus_checkaccount() {

    if (!accountIsChecked) {

        $("#accountmsg").text("支持中文、字母、数字组合").removeClass()

        .addClass("info");

    }

}

function blur_checkaccount() {

    var account = $("#account").val();

    if (account != "") {

        // 判断account是否验证过

        if (!accountIsChecked) {

            // 未验证过，则进行验证

            ajax_checkaccount(account);

        }

    } else {

        $("#accountmsg").text("");

        accountIsOK = false;

    }

}

// ajax请求验证account

function ajax_checkaccount(account) {

    $.get("/airticleMgr/member", {

        m: "checkAccount",

        account: account

    }, function(data) {

        if ("true" == data) {

            $("#accountmsg").text("该账号已被注册").removeClass().addClass(

                "errormsg");

            accountIsOK = false;

        } else {

            $("#accountmsg").text("√").removeClass().addClass("ok");

            accountIsOK = true;

        }

    });

    accountIsChecked = true;

}

function blur_checkpwd() {

    var lpwd = $("#pwd").val().length;

    if (lpwd > 0) {

        if (lpwd < 6) {

            $("#pwdmsg").text("长度在6-20位之间").removeClass().addClass(

                "errormsg");

            passwdIsOK = false;

        } else {

            $("#pwdmsg").text("√").removeClass().addClass("ok");

            passwdIsOK = true;

        }

    } else {

        $("#pwdmsg").text("");

        passwdIsOK = false;

    }

}



function blur_confirmpwd() {

    var pwd = $("#pwd").val();

    var confirmpwd = $("#confirmpwd").val();

    if (confirmpwd != "") {

        if (confirmpwd == pwd) {

            $("#confirmmsg").text("√").removeClass().addClass("ok");

            confirmpwdIsOK = true;

        } else {

            $("#confirmmsg").text("两次密码输入不一致").removeClass().addClass(

                "errormsg");

            confirmpwdIsOK = false;

        }

    } else {

        $("#confirmmsg").text("");

        confirmpwdIsOK = false;

    }

}



function blur_checkphone() {

    var phone = $("#phone").val();

    var regix = /^1[34578][0-9]{9}$/;

    if (phone != "") {

        if (!regix.test(phone)) {

            $("#phonemsg").text("手机格式有误").removeClass()

            .addClass("errormsg");

            phoneIsOK = false;

        } else {

            $("#phonemsg").text("√").removeClass().addClass("ok");

            phoneIsOK = true;

        }

    } else {

        $("#phonemsg").text("");

        phoneIsOK = false;

    }



}



// 表单验证

function check_form() {



    if (!accountIsOK) {

        if ($("#account").val() == "") {

            $("#accountmsg").text("请输入账号").removeClass().addClass(

                "errormsg");

        } else {

        }

        return false;

    }



    if (!passwdIsOK) {

        if ($("#pwd").val() == "") {

            $("#pwdmsg").text("请输入密码").removeClass().addClass("errormsg");

        } else {

        }

        return false;

    }



    if (!confirmpwdIsOK) {

        if ($("#confirmpwd").val() == "") {

            $("#confirmmsg").text("请再次输入密码").removeClass().addClass(

                "errormsg");

        } else {

        }

        return false;

    }



    if (!phoneIsOK) {

        if ($("#phone").val() == "") {

            $("#phonemsg").text("请输入手机").removeClass().addClass("errormsg");

        } else {

        }

        return false;

    }



    if (accountIsOK && passwdIsOK && confirmpwdIsOK && phoneIsOK) {

        alert("欢迎注册");

        return true;

    } else {

        alert("请检查信息");

        return false;

    }

}