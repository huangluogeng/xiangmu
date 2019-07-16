//1.获取sid
// var picid = location.search.substring(1).split('=')[1];
// $.ajax({
//     url: '../php/detail.php',
//     data: {
//         sid: picid
//     },
//     dataType: 'json'
// }).done(function(data) {
//     console.log(data);
//     $('#smallpic').attr('src', data.url);
//     $('#bpic').attr('src', data.url);
//     $('#smallpic').attr('sid', data.sid);
//     $('.loadtitle').html(data.titile);
//     $('.loadpcp').html(data.price);
//     var arr = data.urls.split(',');
//     console.log(arr);
//     var str = '';
//     $.each(arr, function(index, value) {
//         str += '<li><img src="' + value + '"/></li>';
//     });
//     $('#list ul').html(str);

// });
$(function() {
    $.ajax({
        type: "GET",
        url: "http://localhost/xiangmu/youpinhui/php/details.php", //接口需要改
        dataType: "json",
        success: function(data) {
            var str = "";
            $.each(data, function(ele, list) {
                str += ` <div class="showbot">
                <div id="showbox">
                    <img src="details.html?id=${list.picid}" width="400" height="400" id="smallpic" />
                    <div class="minfang"></div>
                </div>
                <!--展示图片盒子-->
                <div id="showsum">
                    <li class="min-pic">
                        <img src="">
                    </li>1
                    <li class="min-pic">
                        <img src="">
                    </li>
                    <li class="min-pic">
                        <img src>
                    </li>
                    <li class="min-pic">
                        <img src="">
                    </li>
                    <li class="min-pic">
                        <img src="">
                    </li>
                    <!--展示图片里边-->
                </div>
                <p class="showpage">
                    <!-- <a href="javascript:void(0);" id="showlast">
                    </a>
                    <a href="javascript:void(0);" id="shownext"> > </a> -->
                </p>
            </div>

            <div class="bigfang">
                <img src="details.html?id=${list.picid}" id="bpic">
            </div>
            <!--conet -->
            <div class="tb-property">
                <div class="tr-nobdr">
                    <h3> ${list.title}</h3>
                </div>
                <div class="txt">
                    <span class="nowprice">￥<a href="">${list.price}</a></span>
                    <div class="cumulative">
                        <span class="number ty1">累计售出<br /><em id="add_sell_num_363">370</em></span>
                        <span class="number tyu">累计评价<br /><em id="add_sell_num_363">25</em></span>
                    </div>
                </div>
                <div class="txt-h">
                    <span class="tex-o">分类</span>
                    <ul class="glist" id="glist" data-monitor="goodsdetails_fenlei_click">
                        <li><a title="红色36g" href="">红色36g</a></li>
                        <li><a title="蓝色16g" href="">红色36g</a></li>

                    </ul>
                </div> `
            });
            str += "";
            $(".list").append(str);
        }
    });
});


! function() {

    $('.minfang').width($('#showbox').width() * $('.bigfang').width() / $('#bpic').width());
    $('.minfang').height($('#showbox').height() * $('.bigfang').height() / $('#bpic').height());
    var bili = $('#bpic').width() / $('#showbox').width();

    $('#showbox').hover(function() {
        $('.minfang').css('visibility', 'visible');
        $('.bigfang').css('visibility', 'visible');
        $(this).on('mousemove', function(ev) {
            var $left = ev.pageX - $('#showbox').offset().left - $('.minfang').width() / 2;
            var $top = ev.pageY - $('#showbox').offset().top - $('.minfang').height() / 2;
            console.log($left)
            if ($left < 0) {
                $left = 0;
            } else if ($left >= $('#showbox').width() - $('.minfang').width()) {
                $left = $('#showbox').width() - $('.minfang').width();
            }
            if ($top < 0) {
                $top = 0;
            } else if ($top >= $('#showbox').height() - $('.minfang').height()) {
                $top = $('#showbox').height() - $('.minfang').height();
            }
            $('.minfang').css('left', $left);
            $('.minfang').css('top', $top);
            $('#bpic').css('left', -$left * bili);
            $('#bpic').css('top', -$top * bili);
        });
    }, function() {
        $('.minfang').css('visibility', 'hidden');
        $('.bigfang').css('visibility', 'hidden');
    });
}();
s

    ! function() {

    $('.minfang').width($('#showbox').width() * $('.bigfang').width() / $('#bpic').width());
    $('.minfang').height($('#showbox').height() * $('.bigfang').height() / $('#bpic').height());
    var bili = $('#bpic').width() / $('#showbox').width();

    $('#showbox').hover(function() {
        $('.minfang').css('visibility', 'visible');
        $('.bigfang').css('visibility', 'visible');
        $(this).on('mousemove', function(ev) {
            var $left = ev.pageX - $('#showbox').offset().left - $('.minfang').width() / 2;
            var $top = ev.pageY - $('#showbox').offset().top - $('.minfang').height() / 2;
            console.log($left)
            if ($left < 0) {
                $left = 0;
            } else if ($left >= $('#showbox').width() - $('.minfang').width()) {
                $left = $('#showbox').width() - $('.minfang').width();
            }
            if ($top < 0) {
                $top = 0;
            } else if ($top >= $('#showbox').height() - $('.minfang').height()) {
                $top = $('#showbox').height() - $('.minfang').height();
            }
            $('.minfang').css('left', $left);
            $('.minfang').css('top', $top);
            $('#bpic').css('left', -$left * bili);
            $('#bpic').css('top', -$top * bili);
        });
    }, function() {
        $('.minfang').css('visibility', 'hidden');
        $('.bigfang').css('visibility', 'hidden');
    });
}();