;
! function() {
    $.ajax({
        url: 'http://localhost/xiangmu/youpinhui/php/',
        dataType: 'json'

    }).done(function(data) {
        var $html = ' <div class="three_col three_col460 c_clearfix">';
        console.log(data);
        $.each(data, function*(index, value) {
            $html += `
			<li>
                        <div class="three_box">
                            <a href="details.html?  sid=${value.picid.url}"  alt="" title="惠买" id="__AD_shouye33_jianhuo_0">
                                <div class="three_img_box">
                                    <img class="lazy-loading" src="/themes/ugo/images/2015/2015_public/grey.png" data-original="https://assets.ugoshop.com/proimage/be0bc750e1aabec223adc0f443db80dc.jpg!p450" alt="" title="惠买"> </div>
                                <p class="three_box_tit c_clearfix"><em class="img_tit">谷小盒 正光原生态精品绿豆2.5kg（500g*5袋）</em></p>
                                <p class="three_subtit">${value.title}</p>
                                <div class="three_yen">
                                    <span class="fl three_price"><i>¥</i>${value.price}</span>
                                    <span class="fl sale_price">
											<p class="i_pos_abs">
											</p>
											<span class="fl five_star mt5"></span>
                                    <span class="or_p"></span><em class="line_price">¥46.8</em>
                                    </span>
                                    <span class="fr purchased"><i>0人</i>已购买</span>
                                </div>
                            </a>
                        </div>
                        <div class="tax_box_bt">
                        </div>
                    </li>
			`;

        });
        $html += '</div>';
        $('.piclist').html($html);
    });
}();


// ! function() {
//     //1.拼接数据
//     $.ajax({
//         url: 'http://localhost/alongdata/meizu/php/meizudata.php',
//         dataType: 'json'
//     }).done(function(data) {
//         var $html = '<ul class="clearfix">';
//         console.log(data);
//         $.each(data, function(index, value) {
//             $html += `
//                             <li class="Phone3">
//                             <div class="section-item-box goods-box">
//                                 <a class="box-img box-img-retina" href="details.html?sid=${value.picid}" target="_blank"  >
//                                     <img class="goods-img lazy-img" data-img="https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png" src="${value.url}">
//                                     <span class="box-info">
//                                             <span class="goods-name">${value.tittle}</span>
//                                     <span class="goods-desc">${value.titleb}</span>
//                                     <span class="goods-price"> <i>￥</i>${value.price}<em></em> </span>
//                                     </span>
//                                     <span class="product-sign red" data-color="red">直降</span>
//                                 </a>
//                             </div>
//                         </li>
// 			`;
//         });
//         $html += '</ul>';
//         $('.goodlist').html($html);
//     });
// }();