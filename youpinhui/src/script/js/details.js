$(".img").hover(function() {
    $(".bimg").css("display", "block");
    $("#move").css("display", "block");
}, function() {
    $(".bimg").css("display", "none");
    $("#move").css("display", "none");
});
//需要为小图片的div添加一个鼠标移动时间
$(".img").mousemove(function(event) {
    //需要获取鼠标移动是距离左边和顶端的距离
    var x = event.pageX;
    var y = event.pageY;
    //需要计算放大区域的需要移动到的位置
    var nx = x - $(".img").offset().left - $("#move").width() / 2;
    var ny = y - $(".img").offset().top - $("#move").height() / 2;
    //判断移动后是否已经超出的范围
    if (nx < 0) { //左边超出
        nx = 0;
    }
    if (nx > $(".img").width() - $("#move").width()) { //右边超出
        nx = $(".img").width() - $("#move").width();
    }
    if (ny < 0) { //顶端超出
        ny = 0;
    }
    if (ny > $(".img").height() - $("#move").height()) { //底部超出
        ny = $(".img").height() - $("#move").height();
    }
    //设置放大区域的移动
    $("#move").css({
        left: nx + "px",
        top: ny + "px"
    });
    //设置大图片的移动   大图片的移动方向与放大区域正好相反
    $(".bimg>img").css({
        left: -nx * $("#move").width() / $(".simg").width() + "px",
        top: -ny * $("#move").height() / $(".simg").height() + "px"
    });
});